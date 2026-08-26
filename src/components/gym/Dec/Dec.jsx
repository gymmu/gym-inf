import Character from "@/components/gym/Character/Character";
import { CHARACTER_PRESETS } from "@/components/gym/Character/characters.jsx";
import styles from "./Dec.module.css";

const PRESET = {
  ...CHARACTER_PRESETS.dec,
  geometry: {
    ...CHARACTER_PRESETS.dec.geometry,
    eyeSpacing: 40,
    rectHeight: 80,
  },
};

/**
 * Dec — Dr. Dezimal, der Ordner.
 *
 * Der Charakter, der die Reihenfolge in die Bytes bringt.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function Dec({ className = "" }) {
  return (
    <figure className={`${styles.dec} ${className}`}>
      <Character {...PRESET} label="Dr. DEC" />
    </figure>
  );
}
