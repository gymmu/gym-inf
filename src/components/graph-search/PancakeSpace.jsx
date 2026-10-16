import { useCallback, useRef, useState } from "react";
import styles from "./graph-search.module.css";
import {
  bruchstellen,
  flip,
  isGoal,
  key,
  mische,
  PRESETS,
  successors,
} from "./pancakes.js";
import {
  baumLayout,
  bogen,
  deckeAufBisTiefe,
  kantenMenge,
  kuerzesterWeg,
  leererGraph,
  rahmen,
  verbindung,
  zugAnwenden,
} from "./stateGraph.js";

const SPALTE = 34; // horizontaler Abstand zweier Geschwister
const ZEILE = 52; // vertikaler Abstand zweier Ebenen
const BALKEN = 3.4; // Höhe eines Pfannkuchens im Graphen
const BREITE = 22; // Breite des grössten Pfannkuchens im Graphen

/**
 * Das Pfannkuchen-Problem als Zustandsraum.
 *
 * Links liegt ein Stapel Pfannkuchen. Ein Klick schiebt den Wender unter
 * den angeklickten Pfannkuchen und dreht alles darüber um. Rechts wächst
 * dabei derselbe Graph wie beim Schiebepuzzle — nur ist hier jeder Knoten
 * ein Stapel und jede Kante ein Wende-Zug.
 *
 * Schön an diesem Problem: Jeder Zustand hat genau n − 1 Nachfolger, der
 * Verzweigungsgrad ist also konstant und von Auge nachzählbar.
 *
 * Props:
 *   initial   Startstapel
 *   title     Überschrift
 */
export default function PancakeSpace({
  initial = PRESETS[1].state,
  title = "Pfannkuchen sortieren — derselbe Zustandsraum, ein anderes Problem",
}) {
  const graph = useRef(null);
  const [, setTick] = useState(0);
  const redraw = useCallback(() => setTick((t) => t + 1), []);

  const [startState, setStartState] = useState(initial);
  const [state, setState] = useState(initial);
  const [zuege, setZuege] = useState(0);
  const [rueckkehr, setRueckkehr] = useState(0);
  const [kreis, setKreis] = useState(null);
  const [zeigeH, setZeigeH] = useState(true);

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

  const geheZu = useCallback(
    (vonState, nachState) => {
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
    [g, redraw],
  );

  /** Klick auf einen Knoten im Baum: den kürzesten bekannten Weg dorthin gehen. */
  const springeZu = useCallback(
    (zielKey) => {
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
    [g, state, redraw],
  );

  const bisTiefe = useCallback(
    (tiefe) => {
      deckeAufBisTiefe(g, startState, tiefe);
      setKreis(null);
      redraw();
    },
    [g, startState, redraw],
  );

  /** Wender unter Pfannkuchen Nr. index schieben: die obersten index+1 drehen. */
  const wende = (index) => {
    const next = flip(state, index + 1);
    if (!next) return;
    geheZu(state, next);
  };

  // ── Zeichnen ──────────────────────────────────────────────────────

  const n = state.length;
  const aktuell = key(state);
  const nachfolger = successors(state);
  const kreisKanten = kantenMenge(kreis);
  const geloest = isGoal(state);
  const hAktuell = bruchstellen(state);

  const { pos, baumKanten, schleifen } = baumLayout(g, key(startState), {
    spalte: SPALTE,
    zeile: ZEILE,
  });
  const box = rahmen(pos, { rand: n * BALKEN + 14 + (zeigeH ? 10 : 0) });

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.controls}>
        <span className={styles.label}>Stapel</span>
        {PRESETS.map((p) => (
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
          onClick={() => neuStarten(mische(n))}
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
        >
          bis Tiefe 2
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => bisTiefe(3)}
        >
          bis Tiefe 3
        </button>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={zeigeH}
            onChange={(e) => setZeigeH(e.target.checked)}
          />
          h zeigen (Bruchstellen)
        </label>
      </div>

      <div className={styles.spaceLayout}>
        {/* linke Spalte: wenden */}
        <div>
          <p className={styles.columnTitle}>wenden</p>
          <div className={styles.pancakeStack}>
            {state.map((groesse, index) => (
              <button
                // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
                key={index}
                type="button"
                className={[
                  styles.pancake,
                  groesse === index + 1 ? styles.pancakeCorrect : "",
                  index === 0 ? styles.pancakeTop : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ width: `${(groesse / n) * 100}%` }}
                onClick={() => wende(index)}
                disabled={index === 0}
                title={
                  index === 0
                    ? "Den obersten allein zu wenden ändert nichts"
                    : `Wender hier einschieben: die obersten ${index + 1} umdrehen`
                }
              >
                {groesse}
              </button>
            ))}
            <span className={styles.pancakePlate} />
          </div>

          <p className={styles.frontierHint}>
            Klick auf einen Pfannkuchen: Der Wender fährt darunter, und alles
            darüber wird umgedreht. Der oberste allein bringt nichts.
          </p>

          <div className={styles.statGrid} style={{ marginTop: "0.75rem" }}>
            <span className={styles.statKey}>key(state)</span>
            <span className={styles.statValue}>{aktuell}</span>
            <span className={styles.statKey}>Verzweigungsgrad b</span>
            <span className={styles.statValue}>{n - 1} (immer gleich)</span>
            <span className={styles.statKey}>Züge gemacht</span>
            <span className={styles.statValue}>{zuege}</span>
            {zeigeH && (
              <>
                <span className={styles.statKey}>h — Bruchstellen</span>
                <span className={styles.statValue}>
                  {hAktuell}
                  {hAktuell === 0 ? " — sortiert" : ""}
                </span>
              </>
            )}
            <span className={styles.statKey}>Knoten (Zustände)</span>
            <span className={styles.statValue}>{g.nodes.size}</span>
            <span className={styles.statKey}>Kanten (Züge)</span>
            <span className={styles.statValue}>{g.edges.size}</span>
            <span className={styles.statKey}>Schleifen im Graph</span>
            <span className={styles.statValue}>{schleifen.length}</span>
            <span className={styles.statKey}>schon bekannt</span>
            <span className={styles.statValue}>{rueckkehr}</span>
            <span className={styles.statKey}>Zustandsraum gesamt</span>
            <span className={styles.statValue}>{fakultaet(n)} Stapel (n!)</span>
          </div>

          {geloest && (
            <p className={styles.cycleNote}>
              Sortiert! Kleinster oben, grösster unten — in {zuege} Zügen.
            </p>
          )}

          <p className={styles.columnTitle}>
            Nachfolger ({nachfolger.length}) — klicken zum Wenden
          </p>
          <div className={styles.frontierList}>
            {nachfolger.map((edge) => {
              const bekannt = g.nodes.get(key(edge.state))?.gespielt === true;
              return (
                <button
                  key={edge.action}
                  type="button"
                  className={[
                    styles.frontierItem,
                    bekannt ? "" : styles.frontierItemNew,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ cursor: "pointer", textAlign: "left" }}
                  onClick={() => geheZu(state, edge.state)}
                >
                  <span className={styles.frontierAction}>{edge.action}</span>
                  <span className={styles.frontierMeta}>{key(edge.state)}</span>
                  {zeigeH && (
                    <span className={styles.frontierMeta}>
                      h={bruchstellen(edge.state)}
                    </span>
                  )}
                  <span className={styles.frontierMeta}>
                    {bekannt ? "bekannt" : "neu"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* rechte Spalte: der Graph */}
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
              aria-label="Zustandsraum des Pfannkuchen-Problems"
            >
              <title>
                Zustandsraum: Knoten sind Stapel, Kanten sind Wende-Züge
              </title>

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

              {[...g.nodes.values()].map((node) => {
                const p = pos.get(node.key);
                if (!p) return null;
                return (
                  <StapelKnoten
                    key={node.key}
                    node={node}
                    x={p.x}
                    y={p.y}
                    aktiv={node.key === aktuell}
                    imKreis={kreis?.includes(node.key) ?? false}
                    hWert={zeigeH ? bruchstellen(node.state) : null}
                    hAktuell={hAktuell}
                    onClick={() => springeZu(node.key)}
                  />
                );
              })}
            </svg>
          </div>

          <div className={styles.legend}>
            <Legende farbe="var(--color-yellow)" text="aktueller Stapel" />
            <Legende farbe="var(--color-aqua)" text="sortiert (Ziel)" />
            <Legende farbe="var(--color-blue)" text="selbst besucht" />
            <Legende farbe="var(--color-gray)" text="nur aufgedeckt" />
            <Legende farbe="var(--color-purple)" text="Schleife (Rückkante)" />
            <span>Jede Zeile = ein Wende-Zug weiter vom Start weg</span>
            <span>Klick auf einen Knoten: dorthin springen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Knoten zeichnen ────────────────────────────────────────────────────

/** Ein Knoten zeigt den Stapel als Balkenbild. */
function StapelKnoten({
  node,
  x,
  y,
  aktiv,
  imKreis,
  hWert,
  hAktuell,
  onClick,
}) {
  const n = node.state.length;
  const ziel = isGoal(node.state);
  const farbe = aktiv
    ? "var(--color-yellow)"
    : imKreis
      ? "var(--color-red)"
      : ziel
        ? "var(--color-aqua)"
        : node.gespielt
          ? "var(--color-blue)"
          : "var(--color-gray)";

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

  const hoehe = n * BALKEN;
  const y0 = y - hoehe / 2;

  return (
    // biome-ignore lint/a11y/useSemanticElements: SVG kennt kein <button>
    <g
      role="button"
      tabIndex={0}
      aria-label={`Stapel ${node.key}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      style={{ cursor: "pointer" }}
    >
      <title>{node.key}</title>
      <rect
        x={x - BREITE / 2 - 2}
        y={y0 - 2}
        width={BREITE + 4}
        height={hoehe + 4}
        rx={2}
        fill="var(--color-bg)"
        stroke={farbe}
        strokeWidth={aktiv || imKreis ? 2 : 1}
      />
      {node.state.map((groesse, i) => {
        const breite = (groesse / n) * BREITE;
        return (
          <rect
            // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
            key={i}
            x={x - breite / 2}
            y={y0 + i * BALKEN + 0.4}
            width={breite}
            height={BALKEN - 0.8}
            rx={0.8}
            fill={node.gespielt ? farbe : "var(--color-gray)"}
            opacity={node.gespielt ? 0.85 : 0.5}
          />
        );
      })}
      {hWert !== null && (
        <text
          x={x}
          y={y0 + hoehe + 8}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
          fontSize={8}
          fontWeight={aktiv ? 700 : 400}
          fill={hFarbe}
        >
          h={hWert}
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

function fakultaet(n) {
  let p = 1;
  for (let i = 2; i <= n; i++) p *= i;
  return p;
}
