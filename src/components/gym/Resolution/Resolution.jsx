import styles from "./Resolution.module.css";

/**
 * Resolution — ein Bild als Raster aus Pixeln, mit den Kantenlängen.
 *
 * @param {number} [width] Breite in Pixel
 * @param {number} [height] Höhe in Pixel
 * @param {string} [className] zusätzliche Klassen
 */
export default function Resolution({
  width = 1920,
  height = 1200,
  className = "",
}) {
  return (
    <div className={`${styles.resolution} ${className}`}>
      <span className={styles.top}>{width}</span>

      <div className={styles.row}>
        <div
          className={styles.screen}
          style={{ aspectRatio: width / height }}
        />
        <span className={styles.side}>{height}</span>
      </div>

      <span className={styles.total}>
        {(width * height).toLocaleString("de-CH")} Pixel
      </span>
    </div>
  );
}
