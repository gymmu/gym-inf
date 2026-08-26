import styles from "./ImageSize.module.css";

/** Formatiert eine Zahl mit Schweizer Tausendertrennung. */
function format(value) {
  return value.toLocaleString("de-CH");
}

/**
 * ImageSize — rechnet vor, wie viele Bytes (und Bits) in einem Bild stecken.
 *
 * @param {number} [width] Breite in Pixel
 * @param {number} [height] Höhe in Pixel
 * @param {number} [channels] Bytes pro Pixel (3 = RGB, 4 = RGBA)
 * @param {"byte"|"bit"} [unit] bis zu welcher Einheit gerechnet wird
 * @param {string} [className] zusätzliche Klassen
 */
export default function ImageSize({
  width = 1920,
  height = 1200,
  channels = 3,
  unit = "byte",
  className = "",
}) {
  const pixels = width * height;
  const bytes = pixels * channels;
  const bits = bytes * 8;

  const showBits = unit === "bit";
  const megaBytes = bytes / 1_000_000;
  const megaBits = bits / 1_000_000;

  return (
    <figure className={`${styles.imageSize} ${className}`}>
      <div className={styles.calculation}>
        {/* Schritt 1: Wie viele Pixel hat das Bild? */}
        <div className={styles.step}>
          <span className={styles.term}>{format(width)}</span>
          <span className={styles.mult}>·</span>
          <span className={styles.term}>{format(height)}</span>
          <span className={styles.operator}>=</span>
          <span className={styles.term}>{format(pixels)}</span>
          <span className={styles.unit}>Pixel</span>
        </div>

        {/* Schritt 2: Jeder Pixel besteht aus mehreren Bytes */}
        <div className={styles.step}>
          <span className={styles.term}>{format(pixels)}</span>
          <span className={styles.mult}>·</span>
          <span className={styles.term}>{channels}</span>
          <span className={styles.hint}>
            {channels === 4 ? "Bytes (RGBA)" : "Bytes (RGB)"}
          </span>
          <span className={styles.operator}>=</span>
          <span className={showBits ? styles.term : styles.total}>
            {format(bytes)}
          </span>
          <span className={styles.unit}>Bytes</span>
        </div>

        {/* Schritt 3: Jedes Byte besteht aus 8 Bits */}
        {showBits && (
          <div className={styles.step}>
            <span className={styles.term}>{format(bytes)}</span>
            <span className={styles.mult}>·</span>
            <span className={styles.term}>8</span>
            <span className={styles.hint}>Bits pro Byte</span>
            <span className={styles.operator}>=</span>
            <span className={styles.total}>{format(bits)}</span>
            <span className={styles.unit}>Bits</span>
          </div>
        )}
      </div>

      <figcaption className={styles.result}>
        {showBits ? (
          <>
            <span className={styles.big}>{format(bits)}</span>
            <span className={styles.label}>
              Bits — das sind rund {Math.round(megaBits)} Megabit
            </span>
          </>
        ) : (
          <>
            <span className={styles.big}>{format(bytes)}</span>
            <span className={styles.label}>
              Bytes — das sind rund {megaBytes.toFixed(1)} Megabyte
            </span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
