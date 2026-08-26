import styles from "./HexTable.module.css";

/** Die 16 Ziffern des Hexadezimalsystems. */
const HEX_DIGITS = "0123456789ABCDEF";

/**
 * HexTable — stellt Dezimal- und Hexadezimalwerte gegenüber.
 *
 * Die neuen Ziffern A–F sind farblich hervorgehoben.
 *
 * @param {number} [max] höchster gezeigter Wert (Standard: 32)
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexTable({ max = 32, className = "" }) {
  const values = Array.from({ length: max + 1 }, (_, i) => i);

  return (
    <div className={`${styles.hexTable} ${className}`}>
      <div className={styles.grid}>
        {values.map((value) => {
          const hex = value.toString(16).toUpperCase().padStart(2, "0");
          const isNewDigit = value >= 10 && value <= 15;

          return (
            <div
              key={value}
              className={`${styles.cell} ${isNewDigit ? styles.newDigit : ""}`}
            >
              <span className={styles.dec}>{value}</span>
              <span className={styles.hex}>{hex}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.digits}>
        {Array.from(HEX_DIGITS).map((digit) => (
          <span
            key={digit}
            className={`${styles.digit} ${/[A-F]/.test(digit) ? styles.newDigit : ""}`}
          >
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}
