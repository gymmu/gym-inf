import { useRef, useState } from "react";
import Character from "@/components/gym/Character/Character";
import {
  CHARACTER_PRESETS,
  PALETTE,
} from "@/components/gym/Character/characters.jsx";
import style from "./Biit.module.css";

const PRESET = CHARACTER_PRESETS.biit;

// Farbverlauf: rot (#fb4934) → orange (#fabd2f) → grün (#b8bb26)
function getGradientStops(state) {
  const clamped = Math.max(0, Math.min(1, state));

  if (clamped < 0.33) {
    // Nah an 0: Rot
    return [
      { offset: "0%", color: PALETTE.red },
      { offset: "30%", color: PALETTE.red },
      { offset: "50%", color: PALETTE.dark },
      { offset: "100%", color: PALETTE.dark },
    ];
  }
  if (clamped > 0.66) {
    // Nah an 1: Grün
    return [
      { offset: "0%", color: PALETTE.dark },
      { offset: "50%", color: PALETTE.dark },
      { offset: "70%", color: PALETTE.green },
      { offset: "100%", color: PALETTE.green },
    ];
  }
  // Neutral: Orange
  return PRESET.gradient;
}

/**
 * Biit — der binäre Charakter.
 *
 * variant="large": Augen folgen dem Cursor / Biit schläft ein (Standard)
 * variant="small": nur unregelmässiges Blinzeln
 */
export default function Biit({
  value = "neutral",
  variant = "large",
  size,
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverX, setHoverX] = useState(0.5); // 0 = links, 1 = rechts
  const biitRef = useRef(null);

  const state = isHovered ? hoverX : Number.parseFloat(value);
  const gradient = getGradientStops(state);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: rein dekorative Hover-Interaktion
    <div
      ref={biitRef}
      className={`${style.biit} ${className}`}
      data-state={value}
      onMouseEnter={() => variant === "large" && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        if (variant !== "large" || !biitRef.current) return;
        const rect = biitRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        setHoverX(Math.max(0, Math.min(1, x)));
      }}
    >
      <Character
        {...PRESET}
        variant={variant}
        size={size}
        gradient={gradient}
        label="Biit — interaktiver binärer Charakter"
      />
    </div>
  );
}
