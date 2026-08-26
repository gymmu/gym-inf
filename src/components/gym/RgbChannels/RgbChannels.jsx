import Byte from "@/components/gym/Byte/Byte";
import styles from "./RgbChannels.module.css";

/**
 * RgbChannels — ein Pixel als drei Kanäle: je ein Byte für Rot, Grün, Blau.
 * Rechts das Ergebnis als Farbfläche.
 *
 * @param {number} [red] Rot-Kanal (0–255)
 * @param {number} [green] Grün-Kanal (0–255)
 * @param {number} [blue] Blau-Kanal (0–255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function RgbChannels({
  red = 217,
  green = 153,
  blue = 33,
  className = "",
}) {
  const channels = [
    { key: "r", value: red, color: "var(--color-red)" },
    { key: "g", value: green, color: "var(--color-green)" },
    { key: "b", value: blue, color: "var(--color-blue)" },
  ];

  return (
    <div className={`${styles.rgbChannels} ${className}`}>
      <div className={styles.channels}>
        {channels.map((channel) => (
          <div key={channel.key} className={styles.channel}>
            <span
              className={styles.dot}
              style={{ background: channel.color }}
            />
            <Byte value={channel.value} />
            <span className={styles.value}>{channel.value}</span>
          </div>
        ))}
      </div>

      <span className={styles.arrow}>→</span>

      <div
        className={styles.swatch}
        style={{ backgroundColor: `rgb(${red} ${green} ${blue})` }}
      />
    </div>
  );
}
