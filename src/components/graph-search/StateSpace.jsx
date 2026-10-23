import { useCallback, useRef, useState } from "react";
import styles from "./graph-search.module.css";
import {
  GOAL,
  isGoal,
  key,
  manhattan,
  misplaced,
  move,
  PRESETS,
  scramble,
  successors,
} from "./puzzle.js";
import {
  baumLayout,
  bogen,
  deckeAufBisTiefe,
  grenze,
  kantenMenge,
  kuerzesterWeg,
  leererGraph,
  rahmen,
  verbindung,
  zugAnwenden,
} from "./stateGraph.js";

const HEURISTIKEN = {
  manhattan: { label: "Manhattan-Distanz", fn: manhattan },
  falschePlaetze: { label: "falsche Plätze", fn: misplaced },
};

/**
 * Der Zustandsraum, der beim Spielen entsteht — als Suchbaum gezeichnet.
 *
 * Links schiebt man das Puzzle wie gewohnt. Rechts wächst dabei der Graph:
 * jeder Zustand ist ein Knoten mit den Zahlen der Stellung, jeder Zug eine
 * Kante. Gezeichnet wird wie bei BFS: Ebene für Ebene von der Startstellung
 * weg, jede Ebene ist ein Zug weiter.
 *
 * Landet man auf einer Stellung, die schon im Baum steht, entsteht KEIN
 * neuer Knoten. Stattdessen bleibt eine zusätzliche Kante übrig — eine
 * Schleife. Genau daran sieht man: der Zustandsraum ist ein Graph.
 *
 * Das Layout ist rein deterministisch (keine Physik): gleiche Eingaben
 * ergeben immer dasselbe Bild, und bestehende Knoten springen nicht herum.
 *
 * Props:
 *   initial        Startzustand
 *   showHeuristics zeigt zu jedem Knoten den geschätzten Restweg h
 *   title          Überschrift
 */
export default function StateSpace({
  initial = PRESETS[0].state,
  showHeuristics = false,
  title = "Der Zustandsraum entsteht beim Spielen",
}) {
  // Der Graph lebt in einem Ref; `tick` erzwingt das Neuzeichnen.
  const graph = useRef(null);
  const [, setTick] = useState(0);
  const redraw = useCallback(() => setTick((t) => t + 1), []);

  const [startState, setStartState] = useState(initial);
  const [state, setState] = useState(initial);
  const [zuege, setZuege] = useState(0);
  const [rueckkehr, setRueckkehr] = useState(0);
  const [kreis, setKreis] = useState(null); // zuletzt geschlossene Schleife
  const [zeigeZahlen, setZeigeZahlen] = useState(true);
  const [zeigeH, setZeigeH] = useState(showHeuristics);
  const [zeigeF, setZeigeF] = useState(showHeuristics);
  const [heuristik, setHeuristik] = useState("manhattan");

  const h = HEURISTIKEN[heuristik].fn;

  // Ist das Ziel erreicht, hört die Suche auf: A* gibt den Weg zurück und
  // expandiert nichts mehr. Also sind ab hier alle Züge gesperrt.
  const zielErreicht = isGoal(state);

  if (graph.current === null) {
    graph.current = leererGraph(initial, key, successors);
    deckeAufBisTiefe(graph.current, initial, 1);
  }
  const g = graph.current;

  // ── Graph verändern ───────────────────────────────────────────────

  const neuStarten = useCallback(
    (s) => {
      graph.current = leererGraph(s, key, successors);
      deckeAufBisTiefe(graph.current, s, 1);
      setStartState(s);
      setState(s);
      setZuege(0);
      setRueckkehr(0);
      setKreis(null);
      redraw();
    },
    [redraw],
  );

  /** Zieht einen Zug und hängt Knoten + Kante in den Graphen. */
  const geheZu = useCallback(
    (vonState, nachState) => {
      if (zielErreicht) return;
      const { schonBesucht, kreis: neuerKreis } = zugAnwenden(
        g,
        vonState,
        nachState,
      );
      setState(nachState);
      setZuege((n) => n + 1);
      if (schonBesucht) setRueckkehr((n) => n + 1);
      setKreis(neuerKreis);
      redraw();
    },
    [g, redraw, zielErreicht],
  );

  /**
   * Klick auf einen Knoten im Baum: dorthin reisen. Liegt der Knoten nicht
   * direkt nebenan, laufen wir den kürzesten bekannten Weg im Graphen ab —
   * Zug für Zug, damit Zähler und Kanten stimmen.
   */
  const springeZu = useCallback(
    (zielKey) => {
      if (zielErreicht) return;
      if (zielKey === key(state)) return;
      const pfad = kuerzesterWeg(g, key(state), zielKey);
      if (!pfad) return;

      let aktuellerState = state;
      let neueRueckkehr = 0;
      let letzterKreis = null;
      for (const k of pfad.slice(1)) {
        const nachState = g.nodes.get(k)?.state;
        if (!nachState) break;
        const { schonBesucht, kreis: neuerKreis } = zugAnwenden(
          g,
          aktuellerState,
          nachState,
        );
        if (schonBesucht) neueRueckkehr += 1;
        letzterKreis = neuerKreis;
        aktuellerState = nachState;
      }

      setState(aktuellerState);
      setZuege((n) => n + pfad.length - 1);
      setRueckkehr((n) => n + neueRueckkehr);
      setKreis(letzterKreis);
      redraw();
    },
    [g, state, redraw, zielErreicht],
  );

  const klickStein = (index) => {
    const next = move(state, index);
    if (!next) return;
    geheZu(state, next);
  };

  /** Breitensuche vom Start aus: alles bis Tiefe `tiefe` aufklappen. */
  const bisTiefe = useCallback(
    (tiefe) => {
      if (zielErreicht) return;
      deckeAufBisTiefe(g, startState, tiefe);
      setKreis(null);
      redraw();
    },
    [g, startState, redraw, zielErreicht],
  );

  // ── Zeichnen ──────────────────────────────────────────────────────

  const aktuell = key(state);
  const nachfolger = successors(state);
  const kreisKanten = kantenMenge(kreis);
  const nachbarKeys = new Set(nachfolger.map((e) => key(e.state)));

  // Deterministisches Baum-Layout, bei jedem Rendern frisch berechnet.
  const { pos, tiefe, baumKanten, schleifen } = baumLayout(g, key(startState), {
    spalte: SPALTE,
    zeile: ZEILE,
  });
  const box = rahmen(pos, {
    rand:
      (zeigeZahlen ? 3 * ZELLE : 16) +
      10 +
      (zeigeH ? 10 : 0) +
      (zeigeH && zeigeF ? 10 : 0),
  });

  // g = Länge des kürzesten bekannten Weges vom Start, h = geschätzter Rest.
  const gWert = (k) => tiefe.get(k) ?? 0;
  const hAktuell = h(state);
  const gAktuell = gWert(aktuell);

  // Die Grenze, sortiert nach f = g + h — genau die Reihenfolge, in der
  // A* die Knoten aus der Prioritätswarteschlange holt.
  const grenzeSortiert = grenze(g)
    .map((n) => {
      const gN = gWert(n.key);
      const hN = h(n.state);
      return { key: n.key, state: n.state, g: gN, h: hN, f: gN + hN };
    })
    .sort((a, b) =>
      zeigeH
        ? a.f - b.f || a.h - b.h || a.key.localeCompare(b.key)
        : a.g - b.g || a.key.localeCompare(b.key),
    );
  const naechster = grenzeSortiert[0]?.key ?? null;
  const grenzeKeys = new Set(grenzeSortiert.map((e) => e.key));

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.controls}>
        <span className={styles.label}>Stellung</span>
        {PRESETS.slice(0, 4).map((p) => (
          <button
            key={p.label}
            type="button"
            className={styles.button}
            onClick={() => neuStarten(p.state)}
          >
            {p.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.button}
          onClick={() => neuStarten(scramble(30))}
        >
          mischen
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => neuStarten(startState)}
          disabled={zuege === 0}
        >
          Baum leeren
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => bisTiefe(2)}
          disabled={zielErreicht}
        >
          bis Tiefe 2
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => bisTiefe(3)}
          disabled={zielErreicht}
        >
          bis Tiefe 3
        </button>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={zeigeZahlen}
            onChange={(e) => setZeigeZahlen(e.target.checked)}
          />
          Zahlen zeigen
        </label>
        {showHeuristics && (
          <>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={zeigeH}
                onChange={(e) => setZeigeH(e.target.checked)}
              />
              h zeigen
            </label>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={zeigeF}
                onChange={(e) => setZeigeF(e.target.checked)}
                disabled={!zeigeH}
              />
              f = g + h
            </label>
            <select
              className={styles.select}
              value={heuristik}
              onChange={(e) => setHeuristik(e.target.value)}
              disabled={!zeigeH}
            >
              {Object.entries(HEURISTIKEN).map(([wert, { label }]) => (
                <option key={wert} value={wert}>
                  {label}
                </option>
              ))}
            </select>
          </>
        )}
      </div>

      <div className={styles.spaceLayout}>
        {/* linke Spalte: spielen */}
        <div>
          <p className={styles.columnTitle}>spielen</p>
          <div className={styles.board}>
            {state.map((wert, index) => {
              const ziehbar = move(state, index) !== null;
              return (
                <button
                  // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
                  key={index}
                  type="button"
                  className={[
                    styles.tile,
                    wert === 0 ? styles.tileEmpty : "",
                    ziehbar ? styles.tileMovable : "",
                    wert !== 0 && wert === GOAL[index]
                      ? styles.tileCorrect
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => klickStein(index)}
                  disabled={wert === 0 || zielErreicht}
                >
                  {wert === 0 ? "" : wert}
                </button>
              );
            })}
          </div>

          <div className={styles.statGrid} style={{ marginTop: "0.75rem" }}>
            <span className={styles.statKey}>key(state)</span>
            <span className={styles.statValue}>{aktuell}</span>
            <span className={styles.statKey}>Züge gemacht</span>
            <span className={styles.statValue}>{zuege}</span>
            {zeigeH && (
              <>
                <span className={styles.statKey}>
                  h(state) — {HEURISTIKEN[heuristik].label}
                </span>
                <span className={styles.statValue}>
                  {hAktuell}
                  {hAktuell === 0 ? " — am Ziel" : ""}
                </span>
              </>
            )}
            {zeigeH && zeigeF && (
              <>
                <span className={styles.statKey}>
                  g(state) — Züge vom Start
                </span>
                <span className={styles.statValue}>{gAktuell}</span>
                <span className={styles.statKey}>f = g + h</span>
                <span className={styles.statValue}>
                  {gAktuell} + {hAktuell} = {gAktuell + hAktuell}
                </span>
              </>
            )}
            <span className={styles.statKey}>Knoten (Zustände)</span>
            <span className={styles.statValue}>{g.nodes.size}</span>
            <span className={styles.statKey}>Kanten (Züge)</span>
            <span className={styles.statValue}>{g.edges.size}</span>
            <span className={styles.statKey}>Grenze (noch offen)</span>
            <span className={styles.statValue}>{grenzeSortiert.length}</span>
            <span className={styles.statKey}>Schleifen im Graph</span>
            <span className={styles.statValue}>{schleifen.length}</span>
            <span className={styles.statKey}>schon bekannt</span>
            <span className={styles.statValue}>{rueckkehr}</span>
          </div>

          {zielErreicht ? (
            <p className={styles.goalNote}>
              Ziel erreicht — die Suche bricht ab. Der gefundene Weg ist{" "}
              {gAktuell} {gAktuell === 1 ? "Zug" : "Züge"} lang; die restliche
              Grenze wird nie mehr expandiert. Mit «Baum leeren» oder einer
              neuen Stellung geht es weiter.
            </p>
          ) : kreis ? (
            <p className={styles.cycleNote}>
              Schleife! Diese Stellung kannten wir schon — der Zug schliesst
              einen Kreis aus {kreis.length} Zuständen.
            </p>
          ) : (
            <p className={styles.frontierHint}>
              Jeder Zug legt einen Knoten an — ausser die Stellung gibt es
              schon. Tipp: Klicken Sie rechts im Baum auf einen beliebigen
              Knoten, dann wandert das Puzzle dorthin.
            </p>
          )}

          <p className={styles.columnTitle}>
            Grenze ({grenzeSortiert.length}) — sortiert nach{" "}
            {zeigeH ? "f = g + h" : "g (Tiefe)"}
          </p>
          <p className={styles.frontierHint}>
            Das ist die ganze Warteschlange, nicht nur die Nachfolger der
            aktuellen Stellung. Oben steht der Knoten, den{" "}
            {zeigeH ? (
              <>
                A<sup>*</sup>
              </>
            ) : (
              "die Breitensuche"
            )}{" "}
            als Nächstes expandieren würde — er ist im Baum{" "}
            <span style={{ color: "var(--color-orange)" }}>orange</span>{" "}
            umrandet. Ein Klick expandiert ihn (das Puzzle wandert dorthin).
          </p>
          <div className={styles.controls} style={{ marginBottom: "0.5rem" }}>
            <button
              type="button"
              className={styles.button}
              onClick={() => naechster && springeZu(naechster)}
              disabled={!naechster || zielErreicht}
            >
              nächsten Knoten expandieren
            </button>
          </div>
          <div className={styles.frontierList}>
            {grenzeSortiert.map((eintrag, i) => {
              const nachbar = nachbarKeys.has(eintrag.key);
              return (
                <button
                  key={eintrag.key}
                  type="button"
                  className={[
                    styles.frontierItem,
                    i === 0 ? styles.frontierItemNext : "",
                    nachbar ? styles.frontierItemNew : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    cursor: zielErreicht ? "default" : "pointer",
                    textAlign: "left",
                  }}
                  onClick={() => springeZu(eintrag.key)}
                  disabled={zielErreicht}
                >
                  <span className={styles.frontierMeta}>{i + 1}.</span>
                  <span className={styles.frontierAction}>{eintrag.key}</span>
                  <span className={styles.frontierMeta}>
                    {zeigeH
                      ? `g=${eintrag.g} h=${eintrag.h} f=${eintrag.f}`
                      : `g=${eintrag.g}`}
                  </span>
                  {nachbar && (
                    <span className={styles.frontierMeta}>ein Zug</span>
                  )}
                </button>
              );
            })}
            {grenzeSortiert.length === 0 && (
              <p className={styles.empty}>Die Grenze ist leer.</p>
            )}
          </div>
        </div>

        {/* rechte Spalte: der Baum */}
        <div className={styles.column}>
          <p className={styles.columnTitle}>
            Zustandsraum als Suchbaum — {g.nodes.size} Knoten, {g.edges.size}{" "}
            Kanten
          </p>
          <div className={styles.graphBox}>
            <svg
              width="100%"
              height="100%"
              viewBox={`${box.x} ${box.y} ${box.w} ${box.h}`}
              role="img"
              aria-label="Zustandsraum als Suchbaum"
            >
              <title>
                Zustandsraum: Knoten sind Stellungen, Kanten sind Züge
              </title>

              {/* Baumkanten: ein Zug weiter weg vom Start */}
              {baumKanten.map(({ id, von, nach }) => {
                const a = pos.get(von);
                const b = pos.get(nach);
                if (!a || !b) return null;
                const aktivePfad = von === aktuell || nach === aktuell;
                return (
                  <path
                    key={id}
                    d={verbindung(a, b)}
                    fill="none"
                    stroke={
                      aktivePfad
                        ? "var(--color-yellow)"
                        : "var(--color-bg-lighter)"
                    }
                    strokeWidth={aktivePfad ? 2 : 1.2}
                  />
                );
              })}

              {/* Schleifen: Kanten, die zu einer bekannten Stellung zurück */}
              {schleifen.map(({ id, von, nach }) => {
                const a = pos.get(von);
                const b = pos.get(nach);
                if (!a || !b) return null;
                const hervor = kreisKanten.has(id);
                return (
                  <path
                    key={id}
                    d={bogen(a, b)}
                    fill="none"
                    stroke={hervor ? "var(--color-red)" : "var(--color-purple)"}
                    strokeWidth={hervor ? 2.5 : 1.2}
                    strokeDasharray={hervor ? "none" : "4 3"}
                    opacity={hervor ? 1 : 0.7}
                  />
                );
              })}

              {/* Knoten */}
              {[...g.nodes.values()].map((n) => {
                const p = pos.get(n.key);
                if (!p) return null;
                return (
                  <Knoten
                    key={n.key}
                    node={n}
                    x={p.x}
                    y={p.y}
                    aktiv={n.key === aktuell}
                    inGrenze={grenzeKeys.has(n.key)}
                    istNaechster={n.key === naechster}
                    imKreis={kreis?.includes(n.key) ?? false}
                    zeigeZahlen={zeigeZahlen}
                    hWert={zeigeH ? h(n.state) : null}
                    hAktuell={hAktuell}
                    gWert={zeigeH && zeigeF ? gWert(n.key) : null}
                    onClick={() => springeZu(n.key)}
                  />
                );
              })}
            </svg>
          </div>

          <div className={styles.legend}>
            <Legende farbe="var(--color-yellow)" text="aktuelle Stellung" />
            <Legende
              farbe="var(--color-orange)"
              text="als Nächstes dran (kleinstes f)"
            />
            <Legende farbe="var(--color-blue)" text="Grenze (noch offen)" />
            <Legende farbe="var(--color-gray)" text="besucht / expandiert" />
            <Legende farbe="var(--color-aqua)" text="Zielstellung" />
            <Legende farbe="var(--color-purple)" text="Schleife (Rückkante)" />
            <span>Jede Zeile = ein Zug weiter vom Start weg</span>
            <span>Klick auf einen Knoten: dorthin springen</span>
            {zeigeH && (
              <span>
                Die Zahl unter jedem Knoten ist <code>h</code> — grün: näher am
                Ziel als jetzt, rot: weiter weg
              </span>
            )}
            {zeigeH && zeigeF && (
              <span>
                Darunter <code>g</code> (Züge vom Start) und{" "}
                <code>f = g + h</code> — die Zahl, nach der A<sup>*</sup>{" "}
                auswählt
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Knoten zeichnen ────────────────────────────────────────────────────

/** Ein Knoten zeigt die Stellung als 3x3-Zahlenfeld. */
function Knoten({
  node,
  x,
  y,
  aktiv,
  inGrenze,
  istNaechster,
  imKreis,
  zeigeZahlen,
  hWert,
  hAktuell,
  gWert,
  onClick,
}) {
  const ziel = isGoal(node.state);
  const farbe = aktiv
    ? "var(--color-yellow)"
    : imKreis
      ? "var(--color-red)"
      : istNaechster
        ? "var(--color-orange)"
        : ziel
          ? "var(--color-aqua)"
          : inGrenze
            ? "var(--color-blue)"
            : "var(--color-gray)";

  // Farbe des h-Werts: näher am Ziel als die aktuelle Stellung = grün.
  const hFarbe =
    hWert === null
      ? "transparent"
      : hWert === 0
        ? "var(--color-aqua)"
        : hWert < hAktuell
          ? "var(--color-green)"
          : hWert > hAktuell
            ? "var(--color-red)"
            : "var(--color-gray-light)";

  if (!zeigeZahlen) {
    return (
      // biome-ignore lint/a11y/useSemanticElements: SVG kennt kein <button>
      <g
        role="button"
        tabIndex={0}
        aria-label={`Stellung ${node.key}`}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClick();
        }}
        style={{ cursor: "pointer" }}
      >
        <title>{node.key}</title>
        <circle
          cx={x}
          cy={y}
          r={aktiv || istNaechster ? 8 : inGrenze ? 5 : 4}
          fill={farbe}
        />
        {hWert !== null && (
          <text
            x={x}
            y={y + 13}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
            fontSize={9}
            fontWeight={aktiv ? 700 : 400}
            fill={hFarbe}
          >
            {hWert}
          </text>
        )}
        {hWert !== null && gWert !== null && (
          <text
            x={x}
            y={y + 23}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
            fontSize={8}
            fill="var(--color-gray-light)"
          >
            f={gWert + hWert}
          </text>
        )}
      </g>
    );
  }

  const z = ZELLE;
  const x0 = x - (3 * z) / 2;
  const y0 = y - (3 * z) / 2;
  return (
    // biome-ignore lint/a11y/useSemanticElements: SVG kennt kein <button>
    <g
      role="button"
      tabIndex={0}
      aria-label={`Stellung ${node.key}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      style={{ cursor: "pointer" }}
    >
      <title>{node.key}</title>
      <rect
        x={x0 - 2}
        y={y0 - 2}
        width={3 * z + 4}
        height={3 * z + 4}
        rx={3}
        fill="var(--color-bg)"
        stroke={farbe}
        strokeWidth={aktiv || imKreis || istNaechster ? 2.5 : 1.2}
      />
      {node.state.map((wert, i) => (
        <text
          // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
          key={i}
          x={x0 + (i % 3) * z + z / 2}
          y={y0 + Math.floor(i / 3) * z + z / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
          fontSize={z * 0.72}
          fill={
            wert === 0
              ? "transparent"
              : aktiv || istNaechster || inGrenze
                ? "var(--color-fg)"
                : "var(--color-gray)"
          }
        >
          {wert}
        </text>
      ))}
      {hWert !== null && (
        <text
          x={x}
          y={y0 + 3 * z + 9}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
          fontSize={9}
          fontWeight={aktiv ? 700 : 400}
          fill={hFarbe}
        >
          h={hWert}
        </text>
      )}
      {hWert !== null && gWert !== null && (
        <text
          x={x}
          y={y0 + 3 * z + 19}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
          fontSize={8}
          fontWeight={aktiv ? 700 : 400}
          fill="var(--color-gray-light)"
        >
          g={gWert} f={gWert + hWert}
        </text>
      )}
    </g>
  );
}

function Legende({ farbe, text }) {
  return (
    <span className={styles.legendItem}>
      <span className={styles.legendDot} style={{ backgroundColor: farbe }} />
      {text}
    </span>
  );
}

// ── Layout-Masse ───────────────────────────────────────────────────────

const ZELLE = 9; // Zellgrösse der Zahlenfelder
const SPALTE = 42; // horizontaler Abstand zweier Geschwister
const ZEILE = 56; // vertikaler Abstand zweier Ebenen
