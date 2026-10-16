import styles from "./graph-search.module.css";

/**
 * Suchbaum neben Zustandsraum — als handgeschriebenes SVG.
 *
 * Links: wer vom Start aus alle Züge aufklappt, erzeugt dieselbe Stellung
 * immer wieder (jeder Zug lässt sich sofort rückgängig machen).
 * Rechts: derselbe Ausschnitt als Graph — die doppelten Knoten fallen
 * zusammen, übrig bleiben Kanten, die man in beide Richtungen geht.
 *
 * Bewusst kein Mermaid: so sind Schrift, Farben und Layout fix und der
 * Browser muss nichts zur Laufzeit rendern.
 */
export default function TreeVsGraph({
  title = "Suchbaum ist nicht Zustandsraum",
}) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.diagramPair}>
        <figure className={styles.diagram}>
          <figcaption className={styles.columnTitle}>
            Suchbaum — klappt immer weiter auf
          </figcaption>
          <svg
            viewBox="0 0 360 250"
            width="100%"
            height="250"
            role="img"
            aria-label="Suchbaum mit doppelt vorkommenden Zuständen"
            fontFamily="inherit"
          >
            <title>
              Suchbaum: der Startzustand taucht nach zwei Zügen wieder auf
            </title>

            <Kante x1={180} y1={46} x2={95} y2={104} label="Zug a" />
            <Kante x1={180} y1={46} x2={265} y2={104} label="Zug b" />
            <Kante x1={95} y1={136} x2={50} y2={194} label="zurück" />
            <Kante x1={95} y1={136} x2={140} y2={194} />
            <Kante x1={265} y1={136} x2={220} y2={194} label="zurück" />
            <Kante x1={265} y1={136} x2={310} y2={194} />

            <Knoten x={180} y={30} text="Start" farbe="var(--color-yellow)" />
            <Knoten x={95} y={120} text="A" />
            <Knoten x={265} y={120} text="B" />
            <Knoten x={50} y={210} text="Start" farbe="var(--color-red)" />
            <Knoten x={140} y={210} text="C" />
            <Knoten x={220} y={210} text="Start" farbe="var(--color-red)" />
            <Knoten x={310} y={210} text="D" />
          </svg>
          <p className={styles.diagramNote}>
            Rot: schon bekannte Stellungen, die der Baum trotzdem noch einmal
            erzeugt. Ohne Gegenmassnahme wächst er unendlich.
          </p>
        </figure>

        <figure className={styles.diagram}>
          <figcaption className={styles.columnTitle}>
            Zustandsraum — endlicher Graph
          </figcaption>
          <svg
            viewBox="0 0 360 250"
            width="100%"
            height="250"
            role="img"
            aria-label="Derselbe Ausschnitt als Graph"
            fontFamily="inherit"
          >
            <title>
              Zustandsraum: gleiche Zustände sind ein einziger Knoten
            </title>

            <Kante x1={180} y1={46} x2={95} y2={104} label="Zug a" beidseitig />
            <Kante
              x1={180}
              y1={46}
              x2={265}
              y2={104}
              label="Zug b"
              beidseitig
            />
            <Kante x1={95} y1={136} x2={140} y2={194} beidseitig />
            <Kante x1={265} y1={136} x2={220} y2={194} beidseitig />
            <Kante x1={140} y1={210} x2={220} y2={210} beidseitig />

            <Knoten x={180} y={30} text="Start" farbe="var(--color-yellow)" />
            <Knoten x={95} y={120} text="A" />
            <Knoten x={265} y={120} text="B" />
            <Knoten x={140} y={210} text="C" />
            <Knoten x={220} y={210} text="D" />
          </svg>
          <p className={styles.diagramNote}>
            Jeder Zustand kommt genau einmal vor. Jede Kante lässt sich in beide
            Richtungen gehen — deshalb entstehen Kreise.
          </p>
        </figure>
      </div>
    </div>
  );
}

/** Ein beschrifteter Knoten (abgerundetes Rechteck mit Text). */
function Knoten({ x, y, text, farbe = "var(--color-blue)" }) {
  const b = text.length > 2 ? 62 : 40;
  return (
    <g>
      <rect
        x={x - b / 2}
        y={y - 16}
        width={b}
        height={32}
        rx={6}
        fill="var(--color-bg)"
        stroke={farbe}
        strokeWidth={2}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fill={farbe}
      >
        {text}
      </text>
    </g>
  );
}

/** Eine Kante, optional mit Beschriftung und Pfeilspitzen. */
function Kante({ x1, y1, x2, y2, label, beidseitig = false }) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="var(--color-gray)"
        strokeWidth={1.5}
      />
      {beidseitig && (
        <>
          <Spitze x1={x1} y1={y1} x2={x2} y2={y2} />
          <Spitze x1={x2} y1={y2} x2={x1} y2={y1} />
        </>
      )}
      {!beidseitig && <Spitze x1={x1} y1={y1} x2={x2} y2={y2} />}
      {label && (
        <text
          x={mx + 6}
          y={my}
          textAnchor="start"
          dominantBaseline="central"
          fontSize={11}
          fill="var(--color-gray)"
        >
          {label}
        </text>
      )}
    </g>
  );
}

/** Pfeilspitze am Ende der Strecke (x1,y1) → (x2,y2). */
function Spitze({ x1, y1, x2, y2 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l = Math.hypot(dx, dy) || 1;
  const ux = dx / l;
  const uy = dy / l;
  const sx = x2 - ux * 2;
  const sy = y2 - uy * 2;
  const g = 7; // Länge der Spitze
  const w = 3.5; // halbe Breite
  const p1 = `${sx},${sy}`;
  const p2 = `${sx - ux * g - uy * w},${sy - uy * g + ux * w}`;
  const p3 = `${sx - ux * g + uy * w},${sy - uy * g - ux * w}`;
  return <polygon points={`${p1} ${p2} ${p3}`} fill="var(--color-gray)" />;
}
