import { Math as Tex } from "@components/Katex.jsx";
import { useMemo, useRef, useState } from "react";
import styles from "./mcts.module.css";

/**
 * Monte-Carlo Tree Search (MCTS) Schritt für Schritt.
 *
 * Gezeigt wird der Suchbaum eines kleinen Entscheidungsproblems: Von der
 * Wurzel aus gibt es drei Züge (A, B, C), danach nochmals je zwei. Hinter
 * jedem Blatt steckt eine (für die Suche unsichtbare) Gewinnwahrscheinlichkeit.
 * MCTS kennt diese Zahl nicht — sie wird nur ausgewürfelt.
 *
 * Eine Iteration besteht aus vier Phasen:
 *   1. Selection      — mit UCT von der Wurzel nach unten laufen
 *   2. Expansion      — einen noch unbesuchten Kindknoten anhängen
 *   3. Simulation     — von dort aus zufällig zu Ende spielen («Rollout»)
 *   4. Backpropagation— Resultat auf dem Pfad zurück nach oben zählen
 *
 * UCT = w/n + c · sqrt(ln(N) / n)
 *        └ Ausbeutung ┘  └ Erkundung ┘
 */

/* ── Der Baum ─────────────────────────────────────────────────────── */

const BAUM = {
  root: {
    label: "Start",
    x: 420,
    y: 45,
    parent: null,
    kinder: ["A", "B", "C"],
  },
  A: { label: "A", x: 150, y: 165, parent: "root", kinder: ["A1", "A2"] },
  B: { label: "B", x: 420, y: 165, parent: "root", kinder: ["B1", "B2"] },
  C: { label: "C", x: 690, y: 165, parent: "root", kinder: ["C1", "C2"] },
  A1: { label: "A1", x: 70, y: 290, parent: "A", kinder: [], p: 0.75 },
  A2: { label: "A2", x: 230, y: 290, parent: "A", kinder: [], p: 0.35 },
  B1: { label: "B1", x: 340, y: 290, parent: "B", kinder: [], p: 0.5 },
  B2: { label: "B2", x: 500, y: 290, parent: "B", kinder: [], p: 0.45 },
  C1: { label: "C1", x: 610, y: 290, parent: "C", kinder: [], p: 0.2 },
  C2: { label: "C2", x: 770, y: 290, parent: "C", kinder: [], p: 0.9 },
};

const IDS = Object.keys(BAUM);

/** Alle Blätter unterhalb eines Knotens (für den Rollout). */
function blaetter(id) {
  const knoten = BAUM[id];
  if (knoten.kinder.length === 0) return [id];
  return knoten.kinder.flatMap(blaetter);
}

/* ── Zufall (reproduzierbar) ──────────────────────────────────────── */

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── MCTS-Bausteine ───────────────────────────────────────────────── */

function uct(stats, id, elternN, c) {
  const s = stats[id];
  if (!s || s.n === 0) return Number.POSITIVE_INFINITY;
  return s.w / s.n + c * Math.sqrt(Math.log(Math.max(elternN, 1)) / s.n);
}

/** Phase 1: von der Wurzel nach unten, solange alle Kinder schon im Baum sind. */
function selektiere(stats, c) {
  const pfad = ["root"];
  let id = "root";
  for (;;) {
    const kinder = BAUM[id].kinder;
    if (kinder.length === 0) break;
    if (kinder.some((k) => !stats[k])) break; // es gibt noch Unbesuchtes
    let bestes = kinder[0];
    let bestWert = -Infinity;
    for (const k of kinder) {
      const wert = uct(stats, k, stats[id].n, c);
      if (wert > bestWert) {
        bestWert = wert;
        bestes = k;
      }
    }
    id = bestes;
    pfad.push(id);
  }
  return pfad;
}

/** Phase 3: zufällig bis zu einem Blatt spielen und dort auswürfeln. */
function rollout(id, rnd) {
  const kandidaten = blaetter(id);
  const blatt = kandidaten[Math.floor(rnd() * kandidaten.length)];
  return { blatt, gewinn: rnd() < BAUM[blatt].p ? 1 : 0 };
}

const LEER = {
  stats: { root: { n: 0, w: 0 } },
  phase: "select",
  pfad: [],
  neuerKnoten: null,
  ergebnis: null,
  rollouts: [],
  iterationen: 0,
};

const PHASEN = [
  ["select", "1 · Selection"],
  ["expand", "2 · Expansion"],
  ["simulate", "3 · Simulation"],
  ["backprop", "4 · Backpropagation"],
];

/* ── Komponente ───────────────────────────────────────────────────── */

export default function MCTSTree({
  title = "Monte-Carlo Tree Search",
  seed = 42,
}) {
  const [c, setC] = useState(1.4);
  const [zeigeP, setZeigeP] = useState(false);
  const [s, setS] = useState(LEER);
  const rndRef = useRef(mulberry32(seed));

  const reset = () => {
    rndRef.current = mulberry32(seed);
    setS(LEER);
  };

  /** Führt genau eine Phase aus. */
  const schritt = (zustand) => {
    const rnd = rndRef.current;
    if (zustand.phase === "select") {
      return {
        ...zustand,
        phase: "expand",
        pfad: selektiere(zustand.stats, c),
      };
    }
    if (zustand.phase === "expand") {
      const letzter = zustand.pfad[zustand.pfad.length - 1];
      const offen = BAUM[letzter].kinder.filter((k) => !zustand.stats[k]);
      if (offen.length === 0) {
        return { ...zustand, phase: "simulate", neuerKnoten: null };
      }
      const neu = offen[Math.floor(rnd() * offen.length)];
      return {
        ...zustand,
        phase: "simulate",
        neuerKnoten: neu,
        pfad: [...zustand.pfad, neu],
        stats: { ...zustand.stats, [neu]: { n: 0, w: 0 } },
      };
    }
    if (zustand.phase === "simulate") {
      const start = zustand.pfad[zustand.pfad.length - 1];
      return { ...zustand, phase: "backprop", ergebnis: rollout(start, rnd) };
    }
    // backprop
    const stats = { ...zustand.stats };
    for (const id of zustand.pfad) {
      stats[id] = {
        n: stats[id].n + 1,
        w: stats[id].w + zustand.ergebnis.gewinn,
      };
    }
    return {
      ...zustand,
      stats,
      phase: "select",
      iterationen: zustand.iterationen + 1,
      rollouts: [
        { ...zustand.ergebnis, pfad: zustand.pfad },
        ...zustand.rollouts,
      ].slice(0, 6),
    };
  };

  const naechstePhase = () => setS((alt) => schritt(alt));

  const iterationen = (anzahl) =>
    setS((alt) => {
      let z = alt;
      // bis zum Ende der laufenden Iteration, dann `anzahl` ganze Iterationen
      const ziel = alt.iterationen + anzahl;
      let notbremse = 0;
      while (z.iterationen < ziel && notbremse++ < 2000) z = schritt(z);
      return z;
    });

  const { stats, pfad, neuerKnoten, ergebnis, phase } = s;
  const imPfad = new Set(pfad);

  const wurzelKinder = useMemo(
    () =>
      BAUM.root.kinder.map((id) => ({
        id,
        label: BAUM[id].label,
        n: stats[id]?.n ?? 0,
        w: stats[id]?.w ?? 0,
        uct: stats[id] ? uct(stats, id, stats.root.n, c) : null,
      })),
    [stats, c],
  );

  const bester = wurzelKinder.reduce(
    (a, b) => (b.n > (a?.n ?? -1) ? b : a),
    null,
  );

  const knotenFarbe = (id) => {
    if (id === neuerKnoten) return "var(--color-purple)";
    if (imPfad.has(id)) return "var(--color-orange)";
    if (stats[id]) return "var(--color-aqua)";
    return "var(--color-bg-lighter)";
  };

  const erklaerung = {
    select: (
      <>
        <strong>Selection:</strong> Von der Wurzel aus wird immer das Kind mit
        dem höchsten <Tex>{"\\mathrm{UCT}"}</Tex>-Wert gewählt — so lange, bis
        ein Knoten erreicht ist, der noch unbesuchte Kinder hat. Knoten mit{" "}
        <Tex>{"n = 0"}</Tex> haben <Tex>{"\\mathrm{UCT} = \\infty"}</Tex> und
        werden deshalb zuerst ausprobiert.
      </>
    ),
    expand: (
      <>
        <strong>Expansion:</strong> Der Pfad{" "}
        <code>{pfad.map((id) => BAUM[id].label).join(" → ")}</code> wurde
        ausgewählt. Jetzt wird ein noch unbesuchtes Kind als neuer Knoten an den
        Baum angehängt (<Tex>{"n = 0"}</Tex>, <Tex>{"w = 0"}</Tex>).
      </>
    ),
    simulate: (
      <>
        <strong>Simulation (Rollout):</strong> Ab{" "}
        <code>{BAUM[pfad[pfad.length - 1]]?.label}</code> wird zufällig zu Ende
        gespielt. Das Ergebnis ist nur <em>ein</em> Stichprobenwert: Sieg (1)
        oder Niederlage (0). Keine Heuristik, keine Bewertungsfunktion — nur
        Würfeln.
      </>
    ),
    backprop: (
      <>
        <strong>Backpropagation:</strong> Das Rollout endete in{" "}
        <code>{ergebnis?.blatt}</code> mit{" "}
        <strong
          style={{
            color:
              ergebnis?.gewinn === 1 ? "var(--color-aqua)" : "var(--color-red)",
          }}
        >
          {ergebnis?.gewinn === 1 ? "Sieg (1)" : "Niederlage (0)"}
        </strong>
        . Dieser Wert wird nun auf dem ganzen Pfad zurück zur Wurzel addiert:
        bei jedem Knoten <code>n += 1</code> und <code>w += Ergebnis</code>.
      </>
    ),
  }[phase];

  return (
    <div className={styles.wrapper}>
      {title && <p className={styles.title}>{title}</p>}

      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={naechstePhase}
        >
          Nächste Phase
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => iterationen(1)}
        >
          1 Iteration
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => iterationen(10)}
        >
          10 Iterationen
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => iterationen(100)}
        >
          100 Iterationen
        </button>
        <button type="button" className={styles.button} onClick={reset}>
          Zurücksetzen
        </button>

        <label className={styles.slider}>
          Explorationsfaktor c = {c.toFixed(1)}
          <input
            type="range"
            min="0"
            max="3"
            step="0.1"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
          />
        </label>
      </div>

      <div className={styles.phases}>
        {PHASEN.map(([key, label]) => {
          const index = PHASEN.findIndex((p) => p[0] === phase);
          const eigen = PHASEN.findIndex((p) => p[0] === key);
          return (
            <span
              key={key}
              className={`${styles.phase} ${
                key === phase
                  ? styles.phaseAktiv
                  : eigen < index
                    ? styles.phaseFertig
                    : ""
              }`}
            >
              {label}
            </span>
          );
        })}
      </div>

      <div className={styles.treeBox}>
        <svg
          viewBox="0 0 840 340"
          width="100%"
          role="img"
          aria-label="MCTS-Suchbaum mit Besuchszahlen und Gewinnen"
        >
          <title>MCTS-Suchbaum</title>

          {IDS.map((id) => {
            const knoten = BAUM[id];
            if (!knoten.parent) return null;
            const p = BAUM[knoten.parent];
            const aufPfad = imPfad.has(id) && imPfad.has(knoten.parent);
            const bekannt = Boolean(stats[id]);
            const farbe = aufPfad
              ? "var(--color-orange)"
              : bekannt
                ? "var(--color-aqua)"
                : "var(--color-bg-lighter)";
            const wert = bekannt
              ? uct(stats, id, stats[knoten.parent]?.n ?? 1, c)
              : null;
            return (
              <g key={`kante-${id}`}>
                <line
                  x1={p.x}
                  y1={p.y + 26}
                  x2={knoten.x}
                  y2={knoten.y - 26}
                  stroke={farbe}
                  strokeWidth={aufPfad ? 3 : 1.5}
                  strokeDasharray={bekannt ? undefined : "4 4"}
                />
                {bekannt && (
                  <text
                    className={styles.kantenLabel}
                    x={(p.x + knoten.x) / 2}
                    y={(p.y + knoten.y) / 2}
                    textAnchor="middle"
                    fill={aufPfad ? "var(--color-orange)" : "var(--color-gray)"}
                  >
                    UCT {Number.isFinite(wert) ? wert.toFixed(2) : "∞"}
                  </text>
                )}
              </g>
            );
          })}

          {IDS.map((id) => {
            const knoten = BAUM[id];
            const farbe = knotenFarbe(id);
            const st = stats[id];
            const quote = st && st.n > 0 ? st.w / st.n : null;
            return (
              <g key={`knoten-${id}`} opacity={st ? 1 : 0.45}>
                <circle
                  cx={knoten.x}
                  cy={knoten.y}
                  r="26"
                  fill="var(--color-bg)"
                  stroke={farbe}
                  strokeWidth="2.5"
                  strokeDasharray={st ? undefined : "4 3"}
                />
                <text
                  className={styles.knotenName}
                  x={knoten.x}
                  y={knoten.y - 3}
                  textAnchor="middle"
                  fill={farbe}
                >
                  {knoten.label}
                </text>
                <text
                  className={styles.knotenWert}
                  x={knoten.x}
                  y={knoten.y + 13}
                  textAnchor="middle"
                  fill="var(--color-gray-light)"
                >
                  {st ? `${st.w}/${st.n}` : "–"}
                </text>
                {quote !== null && (
                  <text
                    className={styles.knotenWert}
                    x={knoten.x}
                    y={knoten.y + 42}
                    textAnchor="middle"
                    fill="var(--color-yellow)"
                  >
                    {(quote * 100).toFixed(0)} %
                  </text>
                )}
                {zeigeP && knoten.kinder.length === 0 && (
                  <text
                    className={styles.hinweis}
                    x={knoten.x}
                    y={knoten.y + 58}
                    textAnchor="middle"
                  >
                    wahr: {(knoten.p * 100).toFixed(0)} %
                  </text>
                )}
              </g>
            );
          })}

          {phase === "backprop" && ergebnis && (
            <text
              className={styles.kantenLabel}
              x="836"
              y="20"
              textAnchor="end"
              fill={
                ergebnis.gewinn === 1 ? "var(--color-aqua)" : "var(--color-red)"
              }
            >
              Rollout → {ergebnis.blatt}: {ergebnis.gewinn}
            </text>
          )}
        </svg>
      </div>

      <div className={styles.legend}>
        <Legende farbe="var(--color-orange)" text="aktueller Pfad" />
        <Legende farbe="var(--color-purple)" text="neu expandiert" />
        <Legende farbe="var(--color-aqua)" text="bereits im Baum" />
        <Legende farbe="var(--color-bg-lighter)" text="noch unbekannt" />
        <label className={styles.legendItem}>
          <input
            type="checkbox"
            checked={zeigeP}
            onChange={(e) => setZeigeP(e.target.checked)}
          />
          wahre Gewinnchancen zeigen
        </label>
      </div>

      <p className={styles.text}>{erklaerung}</p>

      <p className={styles.formel}>
        <Tex>
          {
            "\\mathrm{UCT}(\\text{Kind}) = \\frac{w}{n} + c \\cdot \\sqrt{\\frac{\\ln N_{\\text{Eltern}}}{n}}"
          }
        </Tex>
        &nbsp;&nbsp;— links die bisherige Gewinnquote (Ausbeutung), rechts der
        Bonus für selten besuchte Knoten (Erkundung).
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Zug an der Wurzel</th>
            <th>Besuche n</th>
            <th>Siege w</th>
            <th>Gewinnquote</th>
            <th>UCT</th>
          </tr>
        </thead>
        <tbody>
          {wurzelKinder.map((k) => (
            <tr key={k.id} className={k.id === bester?.id ? styles.beste : ""}>
              <td>{k.label}</td>
              <td>{k.n}</td>
              <td>{k.w}</td>
              <td>{k.n > 0 ? `${((k.w / k.n) * 100).toFixed(0)} %` : "–"}</td>
              <td>
                {k.uct === null
                  ? "–"
                  : Number.isFinite(k.uct)
                    ? k.uct.toFixed(2)
                    : "∞"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dl className={styles.stats}>
        <div>
          <dt>Iterationen</dt>
          <dd>{s.iterationen}</dd>
        </div>
        <div>
          <dt>Knoten im Baum</dt>
          <dd>{Object.keys(stats).length}</dd>
        </div>
        <div>
          <dt>Empfohlener Zug</dt>
          <dd>
            {bester && bester.n > 0
              ? `${bester.label} (am häufigsten besucht)`
              : "noch keiner"}
          </dd>
        </div>
      </dl>
    </div>
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
