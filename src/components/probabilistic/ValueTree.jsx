import style from "./ValueTree.module.css";

/**
 * Backup-Baum für einen Zustand eines kleinen MDP.
 *
 * Zeigt, wie der Wert V(s) zustande kommt:
 *
 *        (s)              Zustand       — Kreis
 *       /   \             Aktion        — Rechteck
 *   [a1]     [a2]         Ergebnis      — Kreis, mit P an der Kante
 *   /  \     /  \
 * (x)  (y) (x)  (y)
 *
 * Unter jedem Aktionsast steht die gewichtete Summe. Der beste Ast ist
 * grün hervorgehoben — das ist das Maximum, also V(s).
 *
 * Props:
 *   zustand  – string                         – Name des Wurzelzustands
 *   wert     – string?                        – Ergebniszeile unter dem Baum
 *   aktionen – {
 *                name: string,
 *                best?: boolean,
 *                formel: string,
 *                marke?: string,                          // Text unter der Formel
 *                ergebnisse: { label, p, wert, art? }[]
 *                  p    – Kantenbeschriftung: Wahrscheinlichkeit ODER Anzahl
 *                  art  – "ziel" | "loch" faerbt den Rand
 *              }[]
 *   caption  – string?                        – Bildunterschrift
 */

/* ── Geometrie (10px-Raster) ─────────────────────────────────────── */
const W = 560;
const H = 350;

const WURZEL_Y = 40;
const WURZEL_R = 26;

const AKTION_Y = 140;
const AKTION_W = 110;
const AKTION_H = 36;

const ERGEBNIS_Y = 250;
const ERGEBNIS_R = 24;
const ERGEBNIS_SPREIZUNG = 80;

const FORMEL_Y = 320;

/** Randfarbe besonderer Ergebnis-Zustände. */
const ART_KLASSE = (style) => ({
  ziel: style.zustandZiel,
  loch: style.zustandLoch,
});

export default function ValueTree({ zustand, wert, aktionen, caption }) {
  const spaltenBreite = W / aktionen.length;
  const wurzelX = W / 2;

  /* Layout einmal ausrechnen: Position jeder Aktion und jedes Ergebnisses. */
  const baum = aktionen.map((a, i) => {
    const x = spaltenBreite * (i + 0.5);
    const n = a.ergebnisse.length;
    return {
      ...a,
      x,
      ergebnisse: a.ergebnisse.map((e, j) => ({
        ...e,
        x: x + (j - (n - 1) / 2) * ERGEBNIS_SPREIZUNG * (2 / n),
        id: `${a.name}-${e.label}-${e.p}`,
      })),
    };
  });

  const kanteOben = AKTION_Y + AKTION_H;
  const kanteUnten = ERGEBNIS_Y - ERGEBNIS_R;

  return (
    <div className={style.wrapper}>
      <svg
        className={style.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Backup-Baum für den Zustand ${zustand}`}
      >
        <title>{`Backup-Baum für den Zustand ${zustand}`}</title>

        {/* ── Kanten Wurzel → Aktionen ───────────────────────────── */}
        {baum.map((a) => (
          <line
            key={`ka-${a.name}`}
            className={`${style.kante} ${a.best ? style.kanteBest : ""}`}
            x1={wurzelX}
            y1={WURZEL_Y + WURZEL_R}
            x2={a.x}
            y2={AKTION_Y}
          />
        ))}

        {/* ── Kanten Aktion → Ergebnisse (mit Wahrscheinlichkeit) ─── */}
        {baum.map((a) =>
          a.ergebnisse.map((e) => (
            <g key={`ke-${e.id}`}>
              <line
                className={style.kante}
                x1={a.x}
                y1={kanteOben}
                x2={e.x}
                y2={kanteUnten}
              />
              <text
                className={style.wahrscheinlichkeit}
                x={(a.x + e.x) / 2 + (e.x < a.x ? -16 : 16)}
                y={(kanteOben + kanteUnten) / 2 + 4}
              >
                {e.p}
              </text>
            </g>
          )),
        )}

        {/* ── Ergebnis-Knoten ────────────────────────────────────── */}
        {baum.map((a) =>
          a.ergebnisse.map((e) => (
            <g key={`e-${e.id}`}>
              <circle
                className={`${style.zustand} ${ART_KLASSE(style)[e.art] ?? ""}`}
                cx={e.x}
                cy={ERGEBNIS_Y}
                r={ERGEBNIS_R}
              />
              <text className={style.knotenText} x={e.x} y={ERGEBNIS_Y}>
                {e.label}
              </text>
              <text
                className={style.wertText}
                x={e.x}
                y={ERGEBNIS_Y + ERGEBNIS_R + 18}
              >
                {e.wert}
              </text>
            </g>
          )),
        )}

        {/* ── Aktions-Knoten ─────────────────────────────────────── */}
        {baum.map((a) => (
          <g key={`a-${a.name}`}>
            <rect
              className={`${style.aktion} ${a.best ? style.aktionBest : ""}`}
              x={a.x - AKTION_W / 2}
              y={AKTION_Y}
              width={AKTION_W}
              height={AKTION_H}
              rx={6}
            />
            <text
              className={style.aktionText}
              x={a.x}
              y={AKTION_Y + AKTION_H / 2}
            >
              {a.name}
            </text>
          </g>
        ))}

        {/* ── Wurzel ─────────────────────────────────────────────── */}
        <circle
          className={style.zustand}
          cx={wurzelX}
          cy={WURZEL_Y}
          r={WURZEL_R}
        />
        <text className={style.knotenText} x={wurzelX} y={WURZEL_Y}>
          {zustand}
        </text>

        {/* ── Gewichtete Summe pro Aktion ────────────────────────── */}
        {baum.map((a) => (
          <g key={`f-${a.name}`}>
            <text
              className={`${style.formel} ${a.best ? style.formelBest : ""}`}
              x={a.x}
              y={FORMEL_Y}
            >
              {a.formel}
            </text>
            {a.best && (
              <text className={style.marke} x={a.x} y={FORMEL_Y + 18}>
                {a.marke ?? `← grösser, also ${wert ?? `V(${zustand})`}`}
              </text>
            )}
          </g>
        ))}
      </svg>
      {caption && <p className={style.caption}>{caption}</p>}
    </div>
  );
}

/**
 * Mehrere Bäume nebeneinander — zum direkten Vergleich zweier Felder.
 * Bricht auf schmalen Bildschirmen automatisch untereinander um.
 */
export function ValueTreeReihe({ children }) {
  return <div className={style.reihe}>{children}</div>;
}
