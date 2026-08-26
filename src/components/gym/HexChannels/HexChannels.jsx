import Byte from "@/components/gym/Byte/Byte";
import styles from "./HexChannels.module.css";

/**
 * HexChannels — pro Kanal genau zwei Hex-Ziffern (00–FF).
 *
 * @param {number} [red] Rot-Kanal (0–255)
 * @param {number} [green] Grün-Kanal (0–255)
 * @param {number} [blue] Blau-Kanal (0–255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexChannels({
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
    <div className={`${styles.hexChannels} ${className}`}>
      {channels.map((channel) => (
        <div key={channel.key} className={styles.row}>
          <span className={styles.dot} style={{ background: channel.color }} />
          <Byte value={channel.value} />
          <span className={styles.arrow}>→</span>
          <span className={styles.hex} style={{ color: channel.color }}>
            {channel.value.toString(16).toUpperCase().padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
}
