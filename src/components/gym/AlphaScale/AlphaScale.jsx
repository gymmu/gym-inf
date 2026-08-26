import styles from "./AlphaScale.module.css";

/** Beispiel-Werte für den Alpha-Kanal (0–255). */
const STEPS = [255, 192, 128, 64, 0];

/**
 * AlphaScale — je tiefer der Wert im Alpha-Kanal, desto durchsichtiger
 * das Pixel. Der Schachbrett-Hintergrund macht die Transparenz sichtbar.
 *
 * @param {string} [color] Grundfarbe der Pixel
 * @param {string} [className] zusätzliche Klassen
 */
export default function AlphaScale({ color = "#d79921", className = "" }) {
  return (
    <div className={`${styles.alphaScale} ${className}`}>
      {STEPS.map((step) => (
        <div key={step} className={styles.item}>
          <div className={styles.checker}>
            <div
              className={styles.swatch}
              style={{ backgroundColor: color, opacity: step / 255 }}
            />
          </div>
          <span className={styles.value}>{step}</span>
        </div>
      ))}
    </div>
  );
}
