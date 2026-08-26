import styles from "./HexColor.module.css";

/** Wandelt einen Kanalwert in zwei Hex-Ziffern um. */
function toHex(value) {
  return value.toString(16).toUpperCase().padStart(2, "0");
}

/**
 * HexColor — eine Farbe als RGB-Hex-Wert: genau 7 Zeichen.
 *
 * @param {number} [red] Rot-Kanal (0–255)
 * @param {number} [green] Grün-Kanal (0–255)
 * @param {number} [blue] Blau-Kanal (0–255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexColor({
  red = 217,
  green = 153,
  blue = 33,
  className = "",
}) {
  const parts = [
    { key: "r", hex: toHex(red), color: "var(--color-red)" },
    { key: "g", hex: toHex(green), color: "var(--color-green)" },
    { key: "b", hex: toHex(blue), color: "var(--color-blue)" },
  ];

  return (
    <div className={`${styles.hexColor} ${className}`}>
      <div
        className={styles.swatch}
        style={{ backgroundColor: `rgb(${red} ${green} ${blue})` }}
      />

      <div className={styles.code}>
        <span className={styles.hash}>#</span>
        {parts.map((part) => (
          <span
            key={part.key}
            className={styles.pair}
            style={{ color: part.color }}
          >
            {part.hex}
          </span>
        ))}
      </div>
    </div>
  );
}
