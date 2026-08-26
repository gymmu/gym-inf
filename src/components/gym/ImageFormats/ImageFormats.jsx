import Character from "@/components/gym/Character/Character";
import { CHARACTER_PRESETS } from "@/components/gym/Character/characters.jsx";
import styles from "./ImageFormats.module.css";

/**
 * ImageFormats — Dr. PNG und Dr. JPEG, die Forscher der Bild-Formate.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function ImageFormats({ className = "" }) {
  return (
    <div className={`${styles.imageFormats} ${className}`}>
      <Character
        {...CHARACTER_PRESETS.png}
        variant="small"
        size={150}
        label="Dr. PNG"
      />
      <Character
        {...CHARACTER_PRESETS.jpeg}
        variant="small"
        size={150}
        label="Dr. JPEG"
      />
    </div>
  );
}
