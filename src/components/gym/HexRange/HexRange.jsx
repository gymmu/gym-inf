import Byte from "@/components/gym/Byte/Byte";
import styles from "./HexRange.module.css";

/** Beispiel-Bytes von der kleinsten bis zur grössten Gruppe. */
const EXAMPLES = [0, 15, 128, 200, 255];

/**
 * HexRange — jedes Byte lässt sich mit genau zwei Hex-Ziffern (00–FF)
 * durchnummerieren.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexRange({ className = "" }) {
  return (
    <div className={`${styles.hexRange} ${className}`}>
      {EXAMPLES.map((value) => (
        <div key={value} className={styles.row}>
          <Byte value={value} scaled />
          <span className={styles.arrow}>→</span>
          <span className={styles.hex}>
            {value.toString(16).toUpperCase().padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
}
