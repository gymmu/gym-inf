import { useMemo } from "react";
import {
  BLOECKE,
  EDGES,
  FLUSS,
  NODE_BY_ID,
  PARKFLAECHE,
  quadPunkt,
  TYPEN,
  VIEW,
} from "./roadNetwork.js";
import styles from "./routing.module.css";

/**
 * Zeichnet das Strassennetz — irgendwo zwischen Karte und Graph.
 *
 *   t = 0  →  geschwungene Strassen wie auf einer Karte
 *   t = 1  →  gerade Kanten wie in einem Graphen
 *
 * Dazwischen wird der Kontrollpunkt der Bézier-Kurve auf die Mitte
 * zwischen den beiden Knoten geschoben. Bei t = 1 liegt er genau in der
 * Mitte — und eine Bézier-Kurve mit Kontrollpunkt in der Mitte ist eine
 * Gerade. Deshalb wirkt der Übergang wie ein "Begradigen" der Karte.
 */
export default function RoadCanvas({
  t = 0,
  deko = 1,
  zeigeKnoten = true,
  zeigeNamen = true,
  zeigeGewichte = false,
  zeigeStrassennamen = false,
  knotenStatus = {},
  kantenStatus = {},
  knotenText = {},
  onKnoten = null,
  hoehe = 440,
}) {
  const kanten = useMemo(
    () =>
      EDGES.map((e) => {
        const a = NODE_BY_ID[e.a];
        const b = NODE_BY_ID[e.b];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const c = {
          x: e.c.x + (mx - e.c.x) * t,
          y: e.c.y + (my - e.c.y) * t,
        };
        const mitte = quadPunkt(a, c, b, 0.5);
        return {
          ...e,
          d: `M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`,
          mitte,
        };
      }),
    [t],
  );

  return (
    <svg
      className={styles.svg}
      viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
      style={{ maxHeight: hoehe }}
      role="img"
      aria-label="Strassennetz als Karte und Graph"
    >
      <title>Strassennetz</title>

      {/* ── Kartenhintergrund (verschwindet, wenn der Graph bleibt) ── */}
      <g opacity={deko}>
        <rect x="0" y="0" width={VIEW.w} height={VIEW.h} fill="#32302f" />
        {BLOECKE.map((b) => (
          <rect
            key={`${b.x}-${b.y}`}
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="3"
            fill="#3c3836"
            stroke="#504945"
          />
        ))}
        <ellipse
          cx={PARKFLAECHE.cx}
          cy={PARKFLAECHE.cy}
          rx={PARKFLAECHE.rx}
          ry={PARKFLAECHE.ry}
          fill="#4a5340"
        />
        <path
          d={FLUSS}
          fill="none"
          stroke="#45545c"
          strokeWidth="22"
          strokeLinecap="round"
        />
      </g>

      {/* ── Strassen / Kanten ─────────────────────────────────────── */}
      <g>
        {/* Unterlage: breite graue Strasse, blendet mit der Karte aus */}
        {kanten.map((e) => (
          <path
            key={`u-${e.key}`}
            d={e.d}
            fill="none"
            stroke={TYPEN[e.typ].farbe}
            strokeWidth={TYPEN[e.typ].breite * (1 - 0.6 * t)}
            strokeLinecap="round"
            opacity={deko * 0.9}
          />
        ))}
        {/* Kanten des Graphen */}
        {kanten.map((e) => {
          const status = kantenStatus[e.key];
          return (
            <path
              key={`k-${e.key}`}
              className={styles.kante}
              d={e.d}
              fill="none"
              stroke={KANTEN_FARBE[status] ?? "#7c6f64"}
              strokeWidth={KANTEN_BREITE[status] ?? 2.5}
              strokeLinecap="round"
              opacity={status ? 1 : 0.35 + 0.45 * t}
            />
          );
        })}
      </g>

      {/* ── Strassennamen ─────────────────────────────────────────── */}
      {zeigeStrassennamen && (
        <g>
          {kanten.map((e) => (
            <text
              key={`s-${e.key}`}
              x={e.mitte.x}
              y={e.mitte.y - 8}
              className={styles.strassenName}
              textAnchor="middle"
            >
              {e.strasse}
            </text>
          ))}
        </g>
      )}

      {/* ── Gewichte ──────────────────────────────────────────────── */}
      {zeigeGewichte && (
        <g>
          {kanten.map((e) => {
            const aktiv = Boolean(kantenStatus[e.key]);
            return (
              <g key={`g-${e.key}`}>
                <rect
                  x={e.mitte.x - 13}
                  y={e.mitte.y - 11}
                  width="26"
                  height="19"
                  rx="4"
                  fill="#1d2021"
                  stroke={aktiv ? KANTEN_FARBE[kantenStatus[e.key]] : "#504945"}
                />
                <text
                  x={e.mitte.x}
                  y={e.mitte.y + 2}
                  className={styles.gewicht}
                  textAnchor="middle"
                  fill={aktiv ? KANTEN_FARBE[kantenStatus[e.key]] : "#ebdbb2"}
                >
                  {e.w}
                </text>
              </g>
            );
          })}
        </g>
      )}

      {/* ── Knoten ────────────────────────────────────────────────── */}
      {zeigeKnoten && (
        <g>
          {Object.values(NODE_BY_ID).map((n) => {
            const status = knotenStatus[n.id] ?? "offen";
            const f = KNOTEN_FARBE[status] ?? KNOTEN_FARBE.offen;
            const r = status === "aktuell" || status === "treff" ? 17 : 13;
            return (
              // biome-ignore lint/a11y/noStaticElementInteractions: SVG-Gruppe mit role="button" und Tastaturbedienung
              <g
                key={n.id}
                className={onKnoten ? styles.knotenKlick : undefined}
                role={onKnoten ? "button" : undefined}
                tabIndex={onKnoten ? 0 : undefined}
                aria-label={onKnoten ? `${n.label} als Ziel wählen` : undefined}
                onClick={onKnoten ? () => onKnoten(n.id) : undefined}
                onKeyDown={
                  onKnoten
                    ? (ev) => {
                        if (ev.key === "Enter" || ev.key === " ")
                          onKnoten(n.id);
                      }
                    : undefined
                }
              >
                {status === "aktuell" && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="24"
                    fill="none"
                    stroke={f.stroke}
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r}
                  fill={f.fill}
                  stroke={f.stroke}
                  strokeWidth={f.breite ?? 2.5}
                />
                <text
                  x={n.x}
                  y={n.y + 4}
                  className={styles.knotenId}
                  textAnchor="middle"
                  fill={f.text}
                >
                  {n.id}
                </text>
                {zeigeNamen && (
                  <text
                    x={n.x}
                    y={n.y - 20}
                    className={styles.knotenName}
                    textAnchor="middle"
                  >
                    {n.label}
                  </text>
                )}
                {knotenText[n.id] !== undefined && (
                  <text
                    x={n.x}
                    y={n.y + 30}
                    className={styles.knotenWert}
                    textAnchor="middle"
                  >
                    {knotenText[n.id]}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}

const KANTEN_FARBE = {
  pruef: "#fabd2f",
  pruefBesser: "#b8bb26",
  baum: "#83a598",
  baumR: "#d3869b",
  pfad: "#fe8019",
  hervor: "#ebdbb2",
};

const KANTEN_BREITE = {
  pruef: 5,
  pruefBesser: 5,
  baum: 4,
  baumR: 4,
  pfad: 7,
  hervor: 4,
};

const KNOTEN_FARBE = {
  offen: { fill: "#1d2021", stroke: "#665c54", text: "#928374" },
  grenze: { fill: "#4a4327", stroke: "#fabd2f", text: "#fabd2f" },
  grenzeR: { fill: "#4a2f3a", stroke: "#d3869b", text: "#d3869b" },
  besucht: { fill: "#2f4a4f", stroke: "#83a598", text: "#83a598" },
  besuchtR: { fill: "#4a3340", stroke: "#d3869b", text: "#d3869b" },
  aktuell: { fill: "#5a3410", stroke: "#fe8019", text: "#fe8019", breite: 3.5 },
  start: { fill: "#2f4a2a", stroke: "#8ec07c", text: "#8ec07c", breite: 3.5 },
  ziel: { fill: "#4a2a2a", stroke: "#fb4934", text: "#fb4934", breite: 3.5 },
  treff: { fill: "#5a3410", stroke: "#fe8019", text: "#fe8019", breite: 4 },
};
