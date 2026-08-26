import Character from "@/components/gym/Character/Character";
import { CHARACTER_PRESETS } from "@/components/gym/Character/characters.jsx";
import styles from "./Hex.module.css";

const PRESET = {
  ...CHARACTER_PRESETS.hex,
  geometry: {
    ...CHARACTER_PRESETS.hex.geometry,
    eyeSpacing: 40,
    rectHeight: 80,
  },
};

/**
 * Hex — Dr. Hex, der Rivale von Dr. DEC.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function Hex({ className = "" }) {
  return (
    <figure className={`${styles.hex} ${className}`}>
      <Character {...PRESET} label="Dr. HEX" />
    </figure>
  );
}
