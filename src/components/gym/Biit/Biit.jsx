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
 * Mit `animate={false}` bleibt Biit in seinem Zustand (auch neutral) stehen.
 *
 * Wird ein fester `value` (0 oder 1) übergeben, bleibt Biit in diesem Zustand
 * und zeigt zusätzlich eine Stimmung: 1 = fröhlich, 0 = traurig.
 *
 * variant="large": Augen folgen dem Cursor / Biit schläft ein (Standard)
 * variant="small": nur unregelmässiges Blinzeln
 */
export default function Biit({
  value = "neutral",
  variant = "large",
  size,
  mood,
  animate = true,
  className = "",
}) {
  const [state, setState] = useState(() => Number.parseFloat(value));
  const isFixed = !Number.isNaN(Number.parseFloat(value));

  useEffect(() => {
    setState(Number.parseFloat(value));
  }, [value]);

  useEffect(() => {
    if (isFixed || !animate) return undefined;

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
  }, [isFixed, animate]);

  const gradient = getGradientStops(state);
  const dataState = Number.isNaN(state) ? "neutral" : String(state);

  // Stimmung nur bei festem Zustand: 1 = fröhlich, 0 = traurig
  const resolvedMood =
    mood ?? (isFixed ? (state >= 0.5 ? "happy" : "sad") : "neutral");

  return (
    <div className={`${style.biit} ${className}`} data-state={dataState}>
      <Character
        {...PRESET}
        variant={variant}
        size={size}
        mood={resolvedMood}
        gradient={gradient}
        label="Biit — binärer Charakter"
      />
    </div>
  );
}
