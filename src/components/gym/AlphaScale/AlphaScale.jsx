import { useState } from "react";
import Byte from "@/components/gym/Byte/Byte";
import styles from "./AlphaScale.module.css";

/** Beispiel-Werte für den Alpha-Kanal (0–255). */
const STEPS = [255, 192, 128, 64, 0];

/** Wandelt einen Kanalwert in zwei Hex-Ziffern um. */
function toHex(value) {
  return value.toString(16).toUpperCase().padStart(2, "0");
}

/**
 * AlphaScale — wie HexChannels, aber mit Alpha-Kanal.
 * Oben die Abstufungen des Alpha-Kanals in Hex (00–FF), darunter die vier
 * Kanäle als klickbare Bytes und das Resultat als #RRGGBBAA.
 *
 * @param {number} [red] Start-Wert Rot-Kanal (0–255)
 * @param {number} [green] Start-Wert Grün-Kanal (0–255)
 * @param {number} [blue] Start-Wert Blau-Kanal (0–255)
 * @param {number} [alpha] Start-Wert Alpha-Kanal (0–255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function AlphaScale({
  red = 217,
  green = 153,
  blue = 33,
  alpha = 255,
  className = "",
}) {
  const [values, setValues] = useState({ r: red, g: green, b: blue, a: alpha });

  const channels = [
    { key: "r", color: "var(--color-red)" },
    { key: "g", color: "var(--color-green)" },
    { key: "b", color: "var(--color-blue)" },
    { key: "a", color: "var(--color-fg)" },
  ];

  const baseColor = `rgb(${values.r} ${values.g} ${values.b})`;

  // Index 0 ist das höchste Bit (MSB)
  const flipBit = (key, index) => {
    setValues((prev) => ({ ...prev, [key]: prev[key] ^ (1 << (7 - index)) }));
  };

  return (
    <div className={`${styles.alphaScale} ${className}`}>
      <div className={styles.channels}>
        {channels.map((channel) => (
          <div key={channel.key} className={styles.row}>
            <span
              className={styles.dot}
              style={{
                background:
                  channel.key === "a"
                    ? `linear-gradient(135deg, ${channel.color} 50%, transparent 50%)`
                    : channel.color,
              }}
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
        <div className={`${styles.checker} ${styles.resultChecker}`}>
          <div
            className={styles.swatch}
            style={{
              backgroundColor: baseColor,
              opacity: values.a / 255,
            }}
          />
        </div>
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

      <div className={styles.scale}>
        {STEPS.map((step) => (
          <div key={step} className={styles.item}>
            <div className={styles.checker}>
              <div
                className={styles.stepSwatch}
                style={{ backgroundColor: baseColor, opacity: step / 255 }}
              />
            </div>
            <span className={styles.value}>{toHex(step)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
