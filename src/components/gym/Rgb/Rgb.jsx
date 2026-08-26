import Character from "@/components/gym/Character/Character";
import { CHARACTER_PRESETS } from "@/components/gym/Character/characters.jsx";
import styles from "./Rgb.module.css";

const PRESET = {
  ...CHARACTER_PRESETS.rgb,
  geometry: {
    ...CHARACTER_PRESETS.rgb.geometry,
    eyeSpacing: 40,
    rectHeight: 80,
  },
};

/**
 * Rgb — Professor RGB, der die Pixel erforscht.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function Rgb({ className = "" }) {
  return (
    <figure className={`${styles.rgb} ${className}`}>
      <Character {...PRESET} label="Prof. RGB" />
    </figure>
  );
}
