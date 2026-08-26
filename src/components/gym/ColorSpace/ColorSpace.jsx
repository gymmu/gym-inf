import styles from "./ColorSpace.module.css";

const COLUMNS = 24;
const ROWS = 12;

/**
 * ColorSpace — deutet die 16'777'216 möglichen Pixel als Farbfläche an.
 * Statt einer Tabelle bekommt jeder Pixel eine Farbe.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function ColorSpace({ className = "" }) {
  const cells = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      const hue = Math.round((col / COLUMNS) * 360);
      const lightness = Math.round(15 + (row / (ROWS - 1)) * 70);
      cells.push(
        <div
          key={`${row}-${col}`}
          className={styles.cell}
          style={{ backgroundColor: `hsl(${hue} 70% ${lightness}%)` }}
        />,
      );
    }
  }

  return (
    <div className={`${styles.colorSpace} ${className}`}>
      <div className={styles.grid}>{cells}</div>
    </div>
  );
}
