import { useState } from "react";
import Byte from "@/components/gym/Byte/Byte";
import styles from "./HexChannels.module.css";

/** Wandelt einen Kanalwert in zwei Hex-Ziffern um. */
function toHex(value) {
  return value.toString(16).toUpperCase().padStart(2, "0");
}

/**
 * HexChannels — pro Kanal genau zwei Hex-Ziffern (00–FF).
 * Die Bits sind klickbar; darunter erscheinen Farbe und Hex-Wert.
 *
 * @param {number} [red] Start-Wert Rot-Kanal (0–255)
 * @param {number} [green] Start-Wert Grün-Kanal (0–255)
 * @param {number} [blue] Start-Wert Blau-Kanal (0–255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexChannels({
  red = 217,
  green = 153,
  blue = 33,
  className = "",
}) {
  const [values, setValues] = useState({ r: red, g: green, b: blue });

  const channels = [
    { key: "r", color: "var(--color-red)" },
    { key: "g", color: "var(--color-green)" },
    { key: "b", color: "var(--color-blue)" },
  ];

  // Index 0 ist das höchste Bit (MSB)
  const flipBit = (key, index) => {
    setValues((prev) => ({ ...prev, [key]: prev[key] ^ (1 << (7 - index)) }));
  };

  return (
    <div className={`${styles.hexChannels} ${className}`}>
      <div className={styles.channels}>
        {channels.map((channel) => (
          <div key={channel.key} className={styles.row}>
            <span
              className={styles.dot}
              style={{ background: channel.color }}
            />
            <Byte
              value={values[channel.key]}
              onBitClick={(index) => flipBit(channel.key, index)}
            />
            <span className={styles.arrow}>→</span>
            <span className={styles.hex} style={{ color: channel.color }}>
              {toHex(values[channel.key])}
            </span>
          </div>
        ))}
      </div>

      <span className={styles.arrowDown}>↓</span>

      <div className={styles.result}>
        <div
          className={styles.swatch}
          style={{
            backgroundColor: `rgb(${values.r} ${values.g} ${values.b})`,
          }}
        />
        <div className={styles.code}>
          <span className={styles.hash}>#</span>
          {channels.map((channel) => (
            <span
              key={channel.key}
              className={styles.pair}
              style={{ color: channel.color }}
            >
              {toHex(values[channel.key])}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
