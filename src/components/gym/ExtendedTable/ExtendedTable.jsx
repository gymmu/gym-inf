import styles from "./ExtendedTable.module.css";

/**
 * ExtendedTable — zeigt die erweiterte ASCII-Tabelle mit den 256 möglichen Zeichen.
 *
 * @param {number} [highlightCode] zeigt dieses Byte hervorgehoben an
 * @param {string} [className] zusätzliche Klassen
 */
export default function ExtendedTable({ highlightCode, className = "" }) {
  const rows = 16;
  const cols = 16;

  return (
    <div className={`${styles.table} ${className}`}>
      <h3 className={styles.title}>Erweiterte ASCII-Tabelle</h3>

      <div className={styles.grid}>
        {Array.from({ length: rows * cols }, (_, i) => {
          const code = i;
          const isHighlighted = code === highlightCode;
          return (
            <div
              key={code}
              className={`${styles.cell} ${isHighlighted ? styles.highlight : ""}`}
            >
              <span className={styles.code}>
                {code.toString().padStart(3, " ")}
              </span>
              <span className={styles.char}>
                {code >= 32 && code < 128
                  ? String.fromCharCode(code)
                  : code === 127
                    ? "⌫"
                    : "·"}
              </span>
            </div>
          );
        })}
      </div>

      <p className={styles.caption}>
        Links: beobachtete Zeichen (0–127) | Rechts: theoretische Erweiterung
        (128–255)
      </p>
    </div>
  );
}
