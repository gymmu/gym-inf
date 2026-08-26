import Byte from "@/components/gym/Byte/Byte";
import styles from "./Limit.module.css";

/**
 * Limit — zeigt, dass das grösste Bit in beobachteten Zeichen immer 0 ist.
 *
 * @param {boolean} [highlight] zeige eine Markierung am linken Bit an
 * @param {string} [className] zusätzliche Klassen
 */
export default function Limit({ highlight = false, className = "" }) {
  // Beispiel-Bytes aus dem sichtbaren ASCII-Bereich (0–127)
  const examples = [
    { value: 65, label: "A" },
    { value: 97, label: "a" },
    { value: 48, label: "0" },
    { value: 32, label: "␣" },
  ];

  return (
    <div className={`${styles.limit} ${className}`}>
      <h3 className={styles.title}>Die Grenze bei 128</h3>

      <div className={styles.examples}>
        {examples.map((ex) => (
          <div key={ex.value} className={styles.exampleRow}>
            <span className={styles.label}>{ex.label}</span>
            <Byte value={ex.value} scaled />
            <span className={styles.result}>= {ex.value}</span>
          </div>
        ))}
      </div>

      <p className={styles.note}>
        Alle Werte liegen unter 128 → das grösste Bit ist immer{" "}
        <strong>0</strong>.
      </p>

      {highlight && (
        <div className={styles.highlightMarker}>
          <span className={styles.arrow}>↑</span>
          <span className={styles.text}>Grösstes Bit = 0</span>
        </div>
      )}
    </div>
  );
}
