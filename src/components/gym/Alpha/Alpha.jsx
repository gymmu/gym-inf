import Character from "@/components/gym/Character/Character";
import { CHARACTER_PRESETS } from "@/components/gym/Character/characters.jsx";
import styles from "./Alpha.module.css";

const PRESET = {
  ...CHARACTER_PRESETS.alpha,
  geometry: {
    ...CHARACTER_PRESETS.alpha.geometry,
    eyeSpacing: 40,
    rectHeight: 80,
  },
};

/**
 * Alpha — Dr. Alpha, Entdecker des vierten Kanals.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function Alpha({ className = "" }) {
  return (
    <figure className={`${styles.alpha} ${className}`}>
      <Character {...PRESET} label="Dr. ALPHA" />
    </figure>
  );
}
