import { useState } from "react";
import Byte from "@/components/gym/Byte/Byte";
import styles from "./RgbChannels.module.css";

/**
 * RgbChannels — ein Pixel als drei Kanäle: je ein Byte für Rot, Grün, Blau.
 * Die Bits sind klickbar, darunter erscheint die resultierende Farbe.
 *
 * @param {number} [red] Start-Wert Rot-Kanal (0–255)
 * @param {number} [green] Start-Wert Grün-Kanal (0–255)
 * @param {number} [blue] Start-Wert Blau-Kanal (0–255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function RgbChannels({
  red = 217,
  green = 153,
  blue = 33,
  className = "",
}) {
  const [values, setValues] = useState({ r: red, g: green, b: blue });

  const channels = [
    { key: "r", label: "R", color: "var(--color-red)" },
    { key: "g", label: "G", color: "var(--color-green)" },
    { key: "b", label: "B", color: "var(--color-blue)" },
  ];

  // Index 0 ist das höchste Bit (MSB)
  const flipBit = (key, index) => {
    setValues((prev) => ({ ...prev, [key]: prev[key] ^ (1 << (7 - index)) }));
  };

  return (
    <div className={`${styles.rgbChannels} ${className}`}>
      <div className={styles.channels}>
        {channels.map((channel) => (
          <div key={channel.key} className={styles.row}>
            <span className={styles.label}>
              <span
                className={styles.dot}
                style={{ background: channel.color }}
              />
              <span className={styles.colon}>:</span>
            </span>
            <Byte
              value={values[channel.key]}
              onBitClick={(index) => flipBit(channel.key, index)}
            />
            <span className={styles.arrow}>→</span>
            <span className={styles.value} style={{ color: channel.color }}>
              {values[channel.key]}
            </span>
          </div>
        ))}
      </div>

      <span className={styles.arrowDown}>↓</span>

      <div
        className={styles.swatch}
        style={{ backgroundColor: `rgb(${values.r} ${values.g} ${values.b})` }}
      />
    </div>
  );
}
