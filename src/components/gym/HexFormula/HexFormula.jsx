import styles from "./HexFormula.module.css";

const HEX_DIGITS = "0123456789ABCDEF";
const POSITIONS = [1, 0];

/**
 * HexFormula — zeigt, wie aus zwei Hex-Ziffern mit `Σ ziffer · 16^n` der
 * Dezimalwert entsteht.
 *
 * @param {number} [value] fester Wert (0–255); Standard: zufällig
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexFormula({ value, className = "" }) {
  const safeValue =
    typeof value === "number" ? ((Math.trunc(value) % 256) + 256) % 256 : 0xa7;

  // Ziffern von der grössten Stelle (16^1) zur kleinsten (16^0)
  const digits = POSITIONS.map((pos) => (safeValue >> (pos * 4)) & 0xf);
  const contributions = digits.map((digit, i) => digit * 16 ** POSITIONS[i]);

  return (
    <figure className={`${styles.hexFormula} ${className}`}>
      {/* Die beiden Hex-Ziffern mit ihrer Stellenwertigkeit */}
      <div className={styles.grid}>
        {digits.map((digit, i) => (
          <span key={`digit-${POSITIONS[i]}`} className={styles.digit}>
            {HEX_DIGITS[digit]}
          </span>
        ))}
        {POSITIONS.map((pos) => (
          <span
            key={`arrow-${pos}`}
            className={styles.arrow}
            aria-hidden="true"
          >
            ↓
          </span>
        ))}
        {POSITIONS.map((pos) => (
          <span key={`weight-${pos}`} className={styles.weight}>
            16<sup>{pos}</sup>
          </span>
        ))}
      </div>

      {/* Die Rechnung */}
      <div className={styles.calculation}>
        <span className={styles.term}>
          {digits[0]}
          <span className={styles.mult}>·</span>16
        </span>
        <span className={styles.operator}>+</span>
        <span className={styles.term}>{digits[1]}</span>
        <span className={styles.operator}>=</span>
        <span className={styles.total}>
          {contributions[0] + contributions[1]}
        </span>
      </div>
    </figure>
  );
}
