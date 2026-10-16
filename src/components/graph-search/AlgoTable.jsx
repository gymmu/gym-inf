import styles from "./graph-search.module.css";

/**
 * Übersichtstabelle der Suchalgorithmen.
 *
 * Statt einer nackten <table> bekommt jeder Algorithmus eine Zeile mit
 * farbigen Marken: grün = ja, rot = nein, gelb = nur unter Bedingungen.
 * Auf schmalen Bildschirmen wird jede Zeile zu einer Karte.
 *
 * Props:
 *   rows   Array von { name, kurz, frontier, pick, vollstaendig,
 *                      optimal, speicher }
 *          wobei vollstaendig/optimal/speicher = { wert, text? }
 *          mit wert "ja" | "nein" | "teils" | "gut" | "mittel" | "schlecht"
 *   caption  optionale Zeile unter der Tabelle
 */
export default function AlgoTable({ rows = STANDARD_ZEILEN, caption }) {
  return (
    <div className={styles.algoTableWrapper}>
      <table className={styles.algoTable}>
        <thead>
          <tr>
            <th>Algorithmus</th>
            <th>Grenze</th>
            <th>nimmt zuerst</th>
            <th>vollständig</th>
            <th>optimal</th>
            <th>Speicher</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td data-label="Algorithmus">
                <span className={styles.algoName}>{r.name}</span>
                {r.kurz && <span className={styles.algoKurz}>{r.kurz}</span>}
              </td>
              <td data-label="Grenze">{r.frontier}</td>
              <td data-label="nimmt zuerst">{r.pick}</td>
              <td data-label="vollständig">
                <Marke {...r.vollstaendig} />
              </td>
              <td data-label="optimal">
                <Marke {...r.optimal} />
              </td>
              <td data-label="Speicher">
                <Marke {...r.speicher} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <p className={styles.algoCaption}>{caption}</p>}
    </div>
  );
}

const FARBEN = {
  ja: styles.markeJa,
  gut: styles.markeJa,
  teils: styles.markeTeils,
  mittel: styles.markeTeils,
  nein: styles.markeNein,
  schlecht: styles.markeNein,
};

function Marke({ wert, text }) {
  return (
    <span className={`${styles.marke} ${FARBEN[wert] ?? ""}`}>
      {text ?? wert}
    </span>
  );
}

const STANDARD_ZEILEN = [
  {
    name: "BFS",
    kurz: "Breitensuche",
    frontier: "Warteschlange (FIFO)",
    pick: "ältester Knoten",
    vollstaendig: { wert: "ja", text: "ja" },
    optimal: { wert: "ja", text: "ja, bei gleichen Kosten" },
    speicher: { wert: "schlecht", text: "schlecht · b^d" },
  },
  {
    name: "DFS",
    kurz: "Tiefensuche",
    frontier: "Stapel (LIFO)",
    pick: "neuester Knoten",
    vollstaendig: { wert: "teils", text: "nur im Endlichen" },
    optimal: { wert: "nein", text: "nein" },
    speicher: { wert: "gut", text: "gut · b · d" },
  },
  {
    name: "IDS",
    kurz: "iterative Tiefensuche",
    frontier: "Stapel mit Tiefenlimit",
    pick: "neuester Knoten bis Limit",
    vollstaendig: { wert: "ja", text: "ja" },
    optimal: { wert: "ja", text: "ja, bei gleichen Kosten" },
    speicher: { wert: "gut", text: "gut · b · d" },
  },
  {
    name: "UCS",
    kurz: "Kostensuche / Dijkstra",
    frontier: "Prioritätswarteschlange",
    pick: "kleinstes g",
    vollstaendig: { wert: "ja", text: "ja" },
    optimal: { wert: "ja", text: "ja" },
    speicher: { wert: "schlecht", text: "schlecht" },
  },
];
