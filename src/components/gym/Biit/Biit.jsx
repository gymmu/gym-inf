import { useEffect, useState } from "react";
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
 * Der Zustand (0 / 1) wechselt automatisch alle 3–5 Sekunden.
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
  const [state, setState] = useState(() => Number.parseFloat(value));

  useEffect(() => {
    setState(Number.parseFloat(value));
  }, [value]);

  useEffect(() => {
    let timeoutId;

    const scheduleNext = () => {
      const delay = 3000 + Math.random() * 2000; // 3–5 Sekunden
      timeoutId = setTimeout(() => {
        setState((prev) => (prev >= 0.5 ? 0 : 1));
        scheduleNext();
      }, delay);
    };

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, []);

  const gradient = getGradientStops(state);
  const dataState = Number.isNaN(state) ? "neutral" : String(state);

  return (
    <div className={`${style.biit} ${className}`} data-state={dataState}>
      <Character
        {...PRESET}
        variant={variant}
        size={size}
        gradient={gradient}
        label="Biit — binärer Charakter"
      />
    </div>
  );
}
