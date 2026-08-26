import { useMemo, useState } from "react";
import styles from "./HexColor.module.css";

const COLUMNS = 24;
const ROWS = 12;

/** Wandelt einen Kanalwert in zwei Hex-Ziffern um. */
function toHex(value) {
  return value.toString(16).toUpperCase().padStart(2, "0");
}

/** Rechnet HSL (h in Grad, s/l in Prozent) in RGB-Kanäle (0–255) um. */
function hslToRgb(h, s, l) {
  const saturation = s / 100;
  const lightness = l / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const hPrime = (((h % 360) + 360) % 360) / 60;
  const x = chroma * (1 - Math.abs((hPrime % 2) - 1));
  const [r, g, b] = (() => {
    if (hPrime < 1) return [chroma, x, 0];
    if (hPrime < 2) return [x, chroma, 0];
    if (hPrime < 3) return [0, chroma, x];
    if (hPrime < 4) return [0, x, chroma];
    if (hPrime < 5) return [x, 0, chroma];
    return [chroma, 0, x];
  })();
  const m = lightness - chroma / 2;
  return {
    red: Math.round((r + m) * 255),
    green: Math.round((g + m) * 255),
    blue: Math.round((b + m) * 255),
  };
}

/** Baut das Farbraster – dieselbe Farbfläche wie in ColorSpace. */
function buildCells() {
  const cells = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      const hue = Math.round((col / COLUMNS) * 360);
      const lightness = Math.round(15 + (row / (ROWS - 1)) * 70);
      cells.push({ key: `${row}-${col}`, ...hslToRgb(hue, 70, lightness) });
    }
  }
  return cells;
}

/**
 * HexColor — eine Farbe als RGB-Hex-Wert: genau 7 Zeichen.
 * Beim Überfahren eines Pixels im Farbraster wird dessen Hex-Wert gezeigt.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexColor({ className = "" }) {
  const cells = useMemo(buildCells, []);
  const [selectedKey, setSelectedKey] = useState(
    () => cells[Math.floor(Math.random() * cells.length)].key,
  );

  const selected = cells.find((cell) => cell.key === selectedKey) ?? cells[0];
  const { red, green, blue } = selected;

  const parts = [
    { key: "r", hex: toHex(red), color: "var(--color-red)" },
    { key: "g", hex: toHex(green), color: "var(--color-green)" },
    { key: "b", hex: toHex(blue), color: "var(--color-blue)" },
  ];

  return (
    <div className={`${styles.hexColor} ${className}`}>
      <div className={styles.grid}>
        {cells.map((cell) => (
          <button
            type="button"
            key={cell.key}
            className={`${styles.cell} ${
              cell.key === selectedKey ? styles.selected : ""
            }`}
            style={{
              backgroundColor: `rgb(${cell.red} ${cell.green} ${cell.blue})`,
            }}
            onMouseEnter={() => setSelectedKey(cell.key)}
            onFocus={() => setSelectedKey(cell.key)}
            aria-label={`#${toHex(cell.red)}${toHex(cell.green)}${toHex(cell.blue)}`}
          />
        ))}
      </div>

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
