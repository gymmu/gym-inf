import styles from "./graph-search.module.css";

const DX_MAX = 30; // Abstand zwischen zwei Tiefen
const DY = 13; // Abstand zwischen zwei Knoten derselben Tiefe
const BREITE_MAX = 1200; // darüber hinaus wird der Baum gestaucht
const MARGIN = 18;
const MAX_NODES = 600;

/**
 * Der Suchbaum als Übersicht: jeder Punkt ist ein erzeugter Knoten.
 *
 *   gelb  — der Knoten, der gerade untersucht wird
 *   blau  — liegt in der Grenze (bekannt, aber noch nicht untersucht)
 *   grau  — bereits besucht und abgehakt
 *   grün  — gehört zum gefundenen Lösungsweg
 */
export default function SearchTree({ snapshot }) {
  const { nodes, frontier, visited, current, path } = snapshot;

  const sichtbar = nodes.slice(0, MAX_NODES);

  // Tiefensuchen werden sehr tief — dann rücken die Spalten zusammen.
  const maxTiefe = sichtbar.reduce((m, n) => Math.max(m, n.depth), 0);
  const DX = Math.min(DX_MAX, Math.max(3, BREITE_MAX / (maxTiefe + 1)));

  // Position: x nach Tiefe, y nach Reihenfolge innerhalb der Tiefe.
  const zaehler = new Map();
  const pos = new Map();
  for (const node of sichtbar) {
    const reihe = zaehler.get(node.depth) ?? 0;
    zaehler.set(node.depth, reihe + 1);
    pos.set(node.id, {
      x: MARGIN + node.depth * DX,
      y: MARGIN + reihe * DY,
    });
  }

  const frontierIds = new Set(frontier.map((n) => n.id));
  const pathIds = new Set((path ?? []).map((n) => n.id));

  const breite = MARGIN * 2 + (maxTiefe + 1) * DX;
  const hoehe =
    MARGIN * 2 + [...zaehler.values()].reduce((m, v) => Math.max(m, v), 1) * DY;

  const farbe = (node) => {
    if (current && node.id === current.id) return "var(--color-yellow)";
    if (pathIds.has(node.id)) return "var(--color-aqua)";
    if (frontierIds.has(node.id)) return "var(--color-blue)";
    if (visited.has(node.state.join(","))) return "var(--color-gray)";
    return "var(--color-bg-lighter)";
  };

  return (
    <>
      <div className={styles.treeBox}>
        <svg
          width={breite}
          height={hoehe}
          viewBox={`0 0 ${breite} ${hoehe}`}
          role="img"
          aria-label="Suchbaum"
        >
          <title>Suchbaum: erzeugte Knoten nach Tiefe</title>
          {sichtbar.map((node) => {
            if (!node.parent) return null;
            const a = pos.get(node.parent.id);
            const b = pos.get(node.id);
            if (!a || !b) return null;
            const imPfad = pathIds.has(node.id) && pathIds.has(node.parent.id);
            return (
              <line
                key={`e${node.id}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={
                  imPfad ? "var(--color-aqua)" : "var(--color-bg-lighter)"
                }
                strokeWidth={imPfad ? 2 : 1}
              />
            );
          })}
          {sichtbar.map((node) => {
            const p = pos.get(node.id);
            const aktiv = current && node.id === current.id;
            return (
              <circle
                key={`n${node.id}`}
                cx={p.x}
                cy={p.y}
                r={aktiv ? 5 : Math.min(3.5, DX / 2)}
                fill={farbe(node)}
              >
                <title>
                  {`Tiefe ${node.depth} · g=${node.g}${node.h ? ` · h=${node.h}` : ""}\n${node.action ?? "Start"}`}
                </title>
              </circle>
            );
          })}
        </svg>
      </div>

      <div className={styles.legend}>
        <Legende farbe="var(--color-yellow)" text="wird untersucht" />
        <Legende farbe="var(--color-blue)" text="Grenze" />
        <Legende farbe="var(--color-gray)" text="besucht" />
        <Legende farbe="var(--color-aqua)" text="Lösungsweg" />
        {nodes.length > MAX_NODES && (
          <span>
            … {nodes.length - MAX_NODES} weitere Knoten nicht gezeichnet
          </span>
        )}
      </div>
    </>
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
