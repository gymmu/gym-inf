import Byte from "@/components/gym/Byte/Byte";
import styles from "./Boundary.module.css";

/**
 * Boundary – zeigt die Grenze zwischen beobachteten (linke Hälfte) und
 * theoretischen (rechte Hälfte) Bytes.
 *
 * @param {boolean} [highlight] zeigt eine Markierung an der Grenzlinie an
 * @param {string} [className] zusätzliche Klassen
 */
export default function Boundary({ highlight = false, className = "" }) {
  return (
    <div
      className={`${styles.boundary} ${highlight ? styles.highlight : ""} ${className}`}
    >
      {/* Linke Seite: beobachtete Bytes (128) */}
      <div className={styles.observed}>
        <span className={styles.label}>beobachtet</span>
        <Byte value={0} scaled />
        <Byte value={65} scaled />
        <Byte value={97} scaled />
        <Byte value={48} scaled />
      </div>

      {/* Trennlinie */}
      <div className={styles.divider}>
        <span className={styles.boundaryLine}>│</span>
      </div>

      {/* Rechte Seite: theoretische Bytes (256-128=128) */}
      <div className={styles.theoretical}>
        <span className={styles.label}>theoretisch</span>
        <Byte value={128} scaled />
        <Byte value={200} scaled />
        <Byte value={255} scaled />
      </div>

      {/* Markierung */}
      {highlight && (
        <div className={styles.highlightMarker}>
          <span className={styles.arrow}>←</span>
          <span className={styles.text}>Grenze bei 128</span>
        </div>
      )}
    </div>
  );
}
