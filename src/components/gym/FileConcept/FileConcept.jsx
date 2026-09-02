import { useMemo, useState } from "react";
import styles from "./FileConcept.module.css";

const START = 0x2000;

// Ein durchgehender Speicherbereich (Bytewerte).
// "Hallo!" = 72,97,108,108,111,33 ; danach eine 16-Bit-Zahl 2025 = 0x07E9 ;
// danach drei RGB-Bytes für eine Farbe.
const MEMORY = [
  0, 0, 0, 0, 72, 97, 108, 108, 111, 33, 0, 0, 0x07, 0xe9, 0, 0, 250, 180, 40,
  0, 0, 0, 0, 0,
];

const FILES = [
  {
    name: "gruss.txt",
    start: 4,
    length: 6,
    type: "Text",
    color: "aqua",
    interpret: (bytes) =>
      `„${bytes.map((b) => String.fromCharCode(b)).join("")}“`,
  },
  {
    name: "jahr.dat",
    start: 12,
    length: 2,
    type: "Zahl (16 Bit)",
    color: "blue",
    interpret: (bytes) => `${bytes[0] * 256 + bytes[1]}`,
  },
  {
    name: "farbe.rgb",
    start: 16,
    length: 3,
    type: "Farbe (RGB)",
    color: "orange",
    interpret: (bytes) => `rgb(${bytes.join(", ")})`,
  },
];

/**
 * FileConcept — zeigt, dass eine Datei nichts anderes ist als ein organisierter
 * Ausschnitt aus dem Speicher. Eine Verwaltungstabelle merkt sich für jede
 * Datei drei Dinge: wo sie beginnt, wie lang sie ist und wie man ihre Bytes
 * deuten muss.
 *
 * Dateien in der Tabelle sind anklickbar und markieren ihren Bereich.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function FileConcept({ className = "" }) {
  const [selected, setSelected] = useState(0);

  const active = FILES[selected];

  const decoded = useMemo(() => {
    const slice = MEMORY.slice(active.start, active.start + active.length);
    return active.interpret(slice);
  }, [active]);

  const inActive = (i) => i >= active.start && i < active.start + active.length;

  return (
    <figure className={`${styles.file} ${className}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Datei</th>
            <th>Beginn</th>
            <th>Länge</th>
            <th>Deutung</th>
          </tr>
        </thead>
        <tbody>
          {FILES.map((f, i) => (
            <tr
              key={f.name}
              className={`${styles.fileRow} ${styles[f.color]} ${
                i === selected ? styles.selectedRow : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <td className={styles.nameCell}>
                <button type="button" className={styles.nameBtn}>
                  {f.name}
                </button>
              </td>
              <td>{(START + f.start).toString(16).toUpperCase()}</td>
              <td>{f.length} Bytes</td>
              <td>{f.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.strip}>
        {MEMORY.map((byte, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: feste Speicherstelle
            key={i}
            className={`${styles.cell} ${inActive(i) ? `${styles.cellActive} ${styles[active.color]}` : ""}`}
          >
            <span className={styles.cellAddr}>
              {(START + i).toString(16).slice(-2).toUpperCase()}
            </span>
            <span className={styles.cellVal}>{byte}</span>
          </div>
        ))}
      </div>

      <div className={styles.readout}>
        <strong>{active.name}</strong> beginnt bei{" "}
        <span className={styles.mono}>
          {(START + active.start).toString(16).toUpperCase()}
        </span>
        , ist <strong>{active.length} Bytes</strong> lang und wird als{" "}
        <strong>{active.type}</strong> gelesen → {decoded}
      </div>

      <figcaption className={styles.caption}>
        Eine <strong>Datei</strong> ist nur ein Stück Speicher. Der Computer
        muss wissen, <strong>wo</strong> sie beginnt, <strong>wie lang</strong>{" "}
        sie ist und <strong>wie</strong> er die Bytes deuten soll.
      </figcaption>
    </figure>
  );
}
