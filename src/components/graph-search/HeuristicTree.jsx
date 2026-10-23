import { useState } from "react";
import styles from "./heuristic-tree.module.css";

/**
 * Ein kleiner Ausschnitt aus einem Suchbaum, an dem sich die drei
 * Eigenschaften einer Heuristik anschauen lassen:
 *
 *   mode="zulaessig"   h(n) ≤ h*(n)              — findet A* den kürzesten Weg?
 *   mode="konsistent"  h(n) ≤ c(n,n′) + h(n′)    — fällt f entlang eines Pfades?
 *   mode="dominanz"    h₂(n) ≥ h₁(n)             — wie viel wird weggeschnitten?
 *
 * Der Baum ist immer derselbe. Nur die Heuristik wird umgeschaltet, und
 * A* läuft live darauf — so sieht man direkt, was die Eigenschaft bewirkt.
 *
 *      S ──2── A ──2── C ──3── G1      (Weg über G1 kostet 7)
 *      │       └──1── D ──6── G3       (Weg über G3 kostet 9)
 *      └──3── B ──1── G2               (Weg über G2 kostet 4  ← optimal)
 */

const KNOTEN = {
  S: { label: "S", x: 70, y: 150, g: 0, parent: null, kosten: 0, hStern: 4 },
  A: { label: "A", x: 235, y: 70, g: 2, parent: "S", kosten: 2, hStern: 5 },
  B: { label: "B", x: 235, y: 240, g: 3, parent: "S", kosten: 3, hStern: 1 },
  C: { label: "C", x: 410, y: 30, g: 4, parent: "A", kosten: 2, hStern: 3 },
  D: { label: "D", x: 410, y: 130, g: 3, parent: "A", kosten: 1, hStern: 6 },
  G2: { label: "G₂", x: 410, y: 240, g: 4, parent: "B", kosten: 1, hStern: 0 },
  G1: { label: "G₁", x: 585, y: 30, g: 7, parent: "C", kosten: 3, hStern: 0 },
  G3: { label: "G₃", x: 585, y: 130, g: 9, parent: "D", kosten: 6, hStern: 0 },
};

const IDS = Object.keys(KNOTEN);
const ZIELE = new Set(["G1", "G2", "G3"]);
const OPTIMAL = 4; // Kosten des besten Weges: S → B → G₂

const KINDER = IDS.reduce((acc, id) => {
  const p = KNOTEN[id].parent;
  if (p) acc[p] = [...(acc[p] ?? []), id];
  return acc;
}, {});

/* ── Die Heuristiken ──────────────────────────────────────────────── */

const H_GUT = { S: 3, A: 4, B: 1, C: 3, D: 5, G1: 0, G2: 0, G3: 0 };
const H_UEBER = { ...H_GUT, B: 4 }; // B wird überschätzt: 4 > h* = 1
const H_INKONSISTENT = { ...H_GUT, A: 0 }; // zulässig, aber h fällt zu schnell
const H_NULL = { S: 0, A: 0, B: 0, C: 0, D: 0, G1: 0, G2: 0, G3: 0 };
const H_SCHWACH = { S: 1, A: 1, B: 1, C: 1, D: 1, G1: 0, G2: 0, G3: 0 };

const MODI = {
  zulaessig: {
    zeigeHStern: true,
    varianten: [
      {
        key: "gut",
        label: "zulässig",
        h: H_GUT,
        text: (
          <>
            Jede Schätzung bleibt unter dem echten Restweg:{" "}
            <code>h(n) ≤ h*(n)</code>. A<sup>*</sup> findet den kürzesten Weg{" "}
            <strong>S → B → G₂</strong> mit Kosten 4.
          </>
        ),
      },
      {
        key: "ueber",
        label: "überschätzt bei B",
        h: H_UEBER,
        text: (
          <>
            <code>h(B) = 4</code>, in Wirklichkeit ist es nur noch{" "}
            <code>1</code>. B sieht dadurch teurer aus, als er ist — A
            <sup>*</sup> legt ihn beiseite und liefert den Weg über G₁ mit
            Kosten 7. <strong>Die Optimalität ist weg.</strong>
          </>
        ),
      },
    ],
  },
  konsistent: {
    zeigeKanten: true,
    varianten: [
      {
        key: "ok",
        label: "konsistent",
        h: H_GUT,
        text: (
          <>
            An jeder Kante gilt <code>h(n) ≤ c(n,n′) + h(n′)</code>. Deshalb
            fällt <code>f</code> entlang keines Pfades — die Zahlen in den
            Kästchen werden von links nach rechts nie kleiner. A<sup>*</sup>{" "}
            darf jeden herausgenommenen Knoten abhaken.
          </>
        ),
      },
      {
        key: "nicht",
        label: "zulässig, aber nicht konsistent",
        h: H_INKONSISTENT,
        text: (
          <>
            <code>h(A) = 0</code> ist zulässig (0 ≤ 5), aber an der Kante S → A
            gilt <code>3 ≤ 2 + 0</code> nicht. Man sieht es sofort an{" "}
            <code>f</code>: Es fällt von 3 auf 2. In einem Graphen kann man
            einen Knoten dann später auf einem billigeren Weg wiederfinden und
            muss ihn erneut in die Grenze legen («reopening»).
          </>
        ),
      },
    ],
  },
  dominanz: {
    zeigeSchnitt: true,
    varianten: [
      {
        key: "null",
        label: "h = 0 (UCS)",
        h: H_NULL,
        text: (
          <>
            Ohne Heuristik ist A<sup>*</sup> genau UCS: <code>f = g</code>.
            Alles mit <code>g ≤ 4</code> kommt dran.
          </>
        ),
      },
      {
        key: "schwach",
        label: "h₁ (schwach)",
        h: H_SCHWACH,
        text: (
          <>
            Schon eine grobe Schätzung schneidet den Ast über C weg:{" "}
            <code>f(C) = 4 + 1 = 5 &gt; 4</code>.
          </>
        ),
      },
      {
        key: "stark",
        label: "h₂ (stark)",
        h: H_GUT,
        text: (
          <>
            <code>h₂ ≥ h₁</code> an jedem Knoten — h₂ <strong>dominiert</strong>{" "}
            h₁. Die Schätzungen liegen näher an <code>h*</code>, dadurch steigt{" "}
            <code>f</code> früher über die 4 und ganze Teilbäume fallen weg.
          </>
        ),
      },
    ],
  },
};

/* ── A* auf diesem Baum ───────────────────────────────────────────── */

function astar(h) {
  const offen = [{ id: "S", f: h.S, h: h.S }];
  const expandiert = [];

  while (offen.length > 0) {
    offen.sort((a, b) => a.f - b.f || a.h - b.h || a.id.localeCompare(b.id));
    const knoten = offen.shift();
    expandiert.push(knoten.id);

    if (ZIELE.has(knoten.id)) {
      const pfad = [];
      for (let id = knoten.id; id; id = KNOTEN[id].parent) pfad.unshift(id);
      return { expandiert, pfad, kosten: KNOTEN[knoten.id].g };
    }

    for (const kind of KINDER[knoten.id] ?? []) {
      offen.push({ id: kind, f: KNOTEN[kind].g + h[kind], h: h[kind] });
    }
  }
  return { expandiert, pfad: [], kosten: null };
}

/* ── Darstellung ──────────────────────────────────────────────────── */

const BOX_W = 86;
const BOX_H = 56;

export default function HeuristicTree({ mode = "zulaessig", title }) {
  const modus = MODI[mode];
  const [variante, setVariante] = useState(modus.varianten[0].key);
  const aktiv = modus.varianten.find((v) => v.key === variante);
  const h = aktiv.h;

  const lauf = astar(h);
  const imPfad = new Set(lauf.pfad);
  const expandiert = new Set(lauf.expandiert);

  const ueberschaetzt = (id) => h[id] > KNOTEN[id].hStern;
  const kanteVerletzt = (id) => {
    const p = KNOTEN[id].parent;
    return p != null && h[p] > KNOTEN[id].kosten + h[id];
  };
  const weggeschnitten = (id) => KNOTEN[id].g + h[id] > OPTIMAL;

  const knotenFarbe = (id) => {
    if (modus.zeigeHStern && ueberschaetzt(id)) return "var(--color-red)";
    if (
      modus.zeigeKanten &&
      (kanteVerletzt(id) || KINDER[id]?.some(kanteVerletzt))
    )
      return "var(--color-red)";
    if (imPfad.has(id)) return "var(--color-aqua)";
    if (expandiert.has(id)) return "var(--color-yellow)";
    if (modus.zeigeSchnitt && weggeschnitten(id))
      return "var(--color-bg-light)";
    return "var(--color-bg-lighter)";
  };

  return (
    <div className={styles.wrapper}>
      {title && <p className={styles.title}>{title}</p>}

      <div className={styles.controls}>
        {modus.varianten.map((v) => (
          <button
            type="button"
            key={v.key}
            className={`${styles.button} ${v.key === variante ? styles.buttonAktiv : ""}`}
            onClick={() => setVariante(v.key)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className={styles.treeBox}>
        <svg
          viewBox="0 0 700 300"
          width="100%"
          role="img"
          aria-label="Ausschnitt aus einem Suchbaum mit g, h und f"
        >
          <title>Ausschnitt aus einem Suchbaum</title>

          {IDS.map((id) => {
            const knoten = KNOTEN[id];
            if (!knoten.parent) return null;
            const p = KNOTEN[knoten.parent];
            const verletzt = modus.zeigeKanten && kanteVerletzt(id);
            const aufPfad = imPfad.has(id) && imPfad.has(knoten.parent);
            const farbe = verletzt
              ? "var(--color-red)"
              : aufPfad
                ? "var(--color-aqua)"
                : "var(--color-bg-lighter)";
            return (
              <g key={`kante-${id}`}>
                <line
                  x1={p.x + BOX_W / 2}
                  y1={p.y}
                  x2={knoten.x - BOX_W / 2}
                  y2={knoten.y}
                  stroke={farbe}
                  strokeWidth={verletzt || aufPfad ? 3 : 1.5}
                />
                <text
                  className={styles.kantenLabel}
                  x={(p.x + knoten.x) / 2}
                  y={(p.y + knoten.y) / 2 - 6}
                  textAnchor="middle"
                  fill={farbe}
                >
                  {modus.zeigeKanten
                    ? `${h[knoten.parent]} ${verletzt ? ">" : "≤"} ${
                        knoten.kosten
                      }+${h[id]}`
                    : knoten.kosten}
                </text>
              </g>
            );
          })}

          {IDS.map((id) => {
            const knoten = KNOTEN[id];
            const farbe = knotenFarbe(id);
            const blass = modus.zeigeSchnitt && weggeschnitten(id);
            return (
              <g key={`knoten-${id}`} opacity={blass ? 0.45 : 1}>
                <rect
                  x={knoten.x - BOX_W / 2}
                  y={knoten.y - BOX_H / 2}
                  width={BOX_W}
                  height={BOX_H}
                  rx="8"
                  fill="var(--color-bg)"
                  stroke={farbe}
                  strokeWidth="2.5"
                  strokeDasharray={blass ? "4 3" : undefined}
                />
                <text
                  className={styles.knotenName}
                  x={knoten.x - BOX_W / 2 + 8}
                  y={knoten.y - BOX_H / 2 + 17}
                  fill={farbe}
                >
                  {knoten.label}
                </text>
                <text
                  className={styles.knotenWert}
                  x={knoten.x + BOX_W / 2 - 8}
                  y={knoten.y - BOX_H / 2 + 17}
                  textAnchor="end"
                  fill="var(--color-gray-light)"
                >
                  g={knoten.g}
                </text>
                <text
                  className={styles.knotenWert}
                  x={knoten.x - BOX_W / 2 + 8}
                  y={knoten.y + BOX_H / 2 - 20}
                  fill={
                    modus.zeigeHStern && ueberschaetzt(id)
                      ? "var(--color-red)"
                      : "var(--color-fg)"
                  }
                >
                  h={h[id]}
                </text>
                {modus.zeigeHStern && (
                  <text
                    className={styles.knotenWert}
                    x={knoten.x + BOX_W / 2 - 8}
                    y={knoten.y + BOX_H / 2 - 20}
                    textAnchor="end"
                    fill="var(--color-gray)"
                  >
                    h*={knoten.hStern}
                  </text>
                )}
                <text
                  className={styles.knotenF}
                  x={knoten.x}
                  y={knoten.y + BOX_H / 2 - 5}
                  textAnchor="middle"
                  fill={
                    modus.zeigeSchnitt && weggeschnitten(id)
                      ? "var(--color-gray)"
                      : "var(--color-orange)"
                  }
                >
                  f={knoten.g + h[id]}
                </text>
              </g>
            );
          })}

          {modus.zeigeSchnitt && (
            <text
              className={styles.kantenLabel}
              x="700"
              y="292"
              textAnchor="end"
              fill="var(--color-gray)"
            >
              gestrichelt: f &gt; 4 — diese Knoten nimmt A* nie heraus
            </text>
          )}
        </svg>
      </div>

      <div className={styles.legend}>
        <Legende farbe="var(--color-yellow)" text="von A* expandiert" />
        <Legende farbe="var(--color-aqua)" text="gefundener Weg" />
        {modus.zeigeHStern && (
          <Legende farbe="var(--color-red)" text="h > h* (überschätzt)" />
        )}
        {modus.zeigeKanten && (
          <Legende
            farbe="var(--color-red)"
            text="Kante verletzt die Bedingung"
          />
        )}
      </div>

      <dl className={styles.stats}>
        <div>
          <dt>Gefundener Weg</dt>
          <dd>{lauf.pfad.map((id) => KNOTEN[id].label).join(" → ")}</dd>
        </div>
        <div>
          <dt>Kosten</dt>
          <dd className={lauf.kosten > OPTIMAL ? styles.schlecht : styles.gut}>
            {lauf.kosten}
            {lauf.kosten > OPTIMAL
              ? ` (optimal wären ${OPTIMAL})`
              : " (optimal)"}
          </dd>
        </div>
        <div>
          <dt>Expandierte Knoten</dt>
          <dd>
            {lauf.expandiert.length} ·{" "}
            {lauf.expandiert.map((id) => KNOTEN[id].label).join(", ")}
          </dd>
        </div>
      </dl>

      <p className={styles.text}>{aktiv.text}</p>
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
