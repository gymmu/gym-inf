import { useCallback, useEffect, useRef, useState } from "react";
import style from "./Biit.module.css";

// Globale Mausposition (wird von der Maus-Tracking-Logik gesetzt)
let globalMouseX = 0;
let globalMouseY = 0;

// Event Listener für globale Maus-Tracking
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    globalMouseX = e.clientX;
    globalMouseY = e.clientY;
  });
}

// Unregelmässige Blinzel-Intervalle (in ms)
const BLINK_MIN = 2000;
const BLINK_MAX = 6000;
const BLINK_DURATION = 150;

// Farbverlauf: rot (#fb4934) → orange (#fabd2f) → grün (#b8bb26)
const COLORS = {
  red: "#fb4934",
  orange: "#fabd2f",
  green: "#b8bb26",
  black: "#282828",
};

export default function Biit({ value = "neutral", className = "" }) {
  const [blink, setBlink] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverX, setHoverX] = useState(0.5); // 0 = links, 1 = rechts
  const biitRef = useRef(null);
  const timeoutRef = useRef(null);

  // Unregelmässiges Blinzeln
  const scheduleNextBlink = useCallback(() => {
    const delay = BLINK_MIN + Math.random() * (BLINK_MAX - BLINK_MIN);
    timeoutRef.current = setTimeout(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), BLINK_DURATION);
      scheduleNextBlink();
    }, delay);
  }, []);

  useEffect(() => {
    scheduleNextBlink();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [scheduleNextBlink]);

  // Bestimme den Farbverlauf basierend auf dem Zustand
  const getGradientStops = () => {
    // Berechne den aktuellen Zustand aus hoverX wenn gehovered
    const state = isHovered ? hoverX : parseFloat(value);
    const clampedState = Math.max(0, Math.min(1, state));

    if (clampedState < 0.33) {
      // Nah an 0: Rot
      return [
        { offset: "0%", color: COLORS.red },
        { offset: "30%", color: COLORS.red },
        { offset: "50%", color: COLORS.black },
        { offset: "100%", color: COLORS.black },
      ];
    } else if (clampedState > 0.66) {
      // Nah an 1: Grün
      return [
        { offset: "0%", color: COLORS.black },
        { offset: "50%", color: COLORS.black },
        { offset: "70%", color: COLORS.green },
        { offset: "100%", color: COLORS.green },
      ];
    } else {
      // Neutral: Orange
      return [
        { offset: "0%", color: COLORS.black },
        { offset: "35%", color: COLORS.red },
        { offset: "50%", color: COLORS.orange },
        { offset: "65%", color: COLORS.green },
        { offset: "100%", color: COLORS.black },
      ];
    }
  };

  const gradientStops = getGradientStops();

  // Berechne die Pupillen-Position basierend auf globaler Mausposition
  const getPupilOffset = (eyeCenterX, eyeCenterY) => {
    const dx = globalMouseX - eyeCenterX;
    const dy = globalMouseY - eyeCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxOffset = 3;
    const offset = Math.min(distance / 50, maxOffset);
    const angle = Math.atan2(dy, dx);
    return {
      x: Math.cos(angle) * offset,
      y: Math.sin(angle) * offset,
    };
  };

  const leftPupilOffset = getPupilOffset(75, 65);
  const rightPupilOffset = getPupilOffset(105, 65);

  return (
    <div
      ref={biitRef}
      className={`${style.biit} ${className}`}
      data-state={value}
      role="img"
      aria-label="Biit — interaktiver binärer Charakter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        if (biitRef.current) {
          const rect = biitRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          setHoverX(Math.max(0, Math.min(1, x)));
        }
      }}
    >
      <svg
        viewBox="0 0 200 160"
        className={style.svg}
        role="img"
        aria-label="Biit — ein binärer Charakter"
      >
        <title>Biit</title>
        <defs>
          <linearGradient id="biitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientStops.map((stop) => (
              <stop
                key={stop.offset}
                offset={stop.offset}
                stopColor={stop.color}
              />
            ))}
          </linearGradient>

          {/* Glow-Effekt für den Hintergrund */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Schatten für die Ziffern */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>

          {/* Maske: Gradient nur hinter den Ziffern sichtbar */}
          <mask id="textMask">
            <rect width="200" height="160" fill="black" />
            <text
              x="75"
              y="122"
              textAnchor="middle"
              fill="white"
              fontSize="64"
              fontWeight="bold"
              fontFamily="'Courier New', monospace"
            >
              0
            </text>
            <text
              x="105"
              y="122"
              textAnchor="middle"
              fill="white"
              fontSize="64"
              fontWeight="bold"
              fontFamily="'Courier New', monospace"
            >
              1
            </text>
          </mask>
        </defs>

        {/* Hintergrund-Rechteck mit Farbverlauf */}
        <rect
          x="10"
          y="60"
          width="180"
          height="80"
          rx="16"
          fill="url(#biitGradient)"
          filter="url(#glow)"
          mask="url(#textMask)"
          className={style.bgRect}
        />

        {/* Comic-Augen */}
        <g className={style.eyes}>
          {/* Linkes Auge (über der 0) */}
          <g transform="translate(75, 65)">
            {/* Weiss */}
            <ellipse
              cx="0"
              cy="0"
              rx="14"
              ry={blink ? 1 : 14}
              fill="white"
              stroke="#282828"
              strokeWidth="2"
              className={style.eyeWhite}
            />
            {/* Pupille */}
            {!blink && (
              <g
                style={{
                  transition: "transform 0.1s ease-out",
                  transform: `translate(${leftPupilOffset.x}px, ${leftPupilOffset.y}px)`,
                }}
              >
                <circle cx="2" cy="0" r="7" fill="#282828" />
                <circle cx="4" cy="-2" r="2.5" fill="white" />
              </g>
            )}
          </g>

          {/* Rechtes Auge (über der 1) */}
          <g transform="translate(105, 65)">
            {/* Weiss */}
            <ellipse
              cx="0"
              cy="0"
              rx="14"
              ry={blink ? 1 : 14}
              fill="white"
              stroke="#282828"
              strokeWidth="2"
              className={style.eyeWhite}
            />
            {/* Pupille */}
            {!blink && (
              <g
                style={{
                  transition: "transform 0.1s ease-out",
                  transform: `translate(${rightPupilOffset.x}px, ${rightPupilOffset.y}px)`,
                }}
              >
                <circle cx="2" cy="0" r="7" fill="#282828" />
                <circle cx="4" cy="-2" r="2.5" fill="white" />
              </g>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}
