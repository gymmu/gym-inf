import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { PALETTE } from "@/components/gym/Character/characters.jsx";
import style from "./Turtle.module.css";

// Globale Mausposition (einmalig global getrackt, wie bei Character)
let globalMouseX = 0;
let globalMouseY = 0;

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    globalMouseX = e.clientX;
    globalMouseY = e.clientY;
  });
}

const BLINK_MIN = 2200;
const BLINK_MAX = 6500;
const BLINK_DURATION = 140;

const OUTLINE = PALETTE.dark;
const SKIN = "#8ec07c";
const SKIN_DARK = "#689d6a";
const SHELL_LIGHT = "#d79921";
const SHELL_DARK = "#b57614";
const PAPER = "#fbf1c7";

// Augenpositionen auf dem Kopf (SVG-Koordinaten)
const EYES = [
  { cx: 112, cy: 50 },
  { cx: 148, cy: 50 },
];

const DEFAULT_NOTE = ["M 20 20", "L 90 20", "L 90 70", "Z"];

/**
 * Pfadi — die Schildkröte, die Pfade zeichnet.
 *
 * Sie hält einen Zettel mit der Bewegungsvorschrift in der einen Hand
 * und einen Stift in der anderen. Hinter ihr liegt die Spur, die sie
 * bereits gezeichnet hat.
 *
 * Die Augen folgen dem Cursor (`variant="large"`), in der kleinen Variante
 * blinzelt sie nur.
 *
 * ```jsx
 * <Turtle note={["M 20 20", "L 90 20", "Z"]} />
 * <Turtle variant="small" size={90} trail={false} penUp />
 * ```
 */
export default function Turtle({
  note = DEFAULT_NOTE,
  noteTitle = "d =",
  variant = "large",
  size,
  mood = "happy", // "happy" | "neutral" | "surprised"
  penUp = false, // Stift gehoben: die Schildkröte läuft, ohne zu zeichnen
  trail = true,
  animate = true,
  label = "Pfadi — die Schildkröte mit Zettel und Stift",
  className = "",
  style: inlineStyle,
  ...rest
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const isLarge = variant === "large";
  const lines = useMemo(
    () => (Array.isArray(note) ? note : String(note).split("\n")),
    [note],
  );

  // ---- Blinzeln ------------------------------------------------------------
  const [blink, setBlink] = useState(false);
  const blinkTimeoutRef = useRef(null);
  const blinkResetRef = useRef(null);

  const scheduleNextBlink = useCallback(() => {
    const delay = BLINK_MIN + Math.random() * (BLINK_MAX - BLINK_MIN);
    blinkTimeoutRef.current = setTimeout(() => {
      setBlink(true);
      blinkResetRef.current = setTimeout(() => setBlink(false), BLINK_DURATION);
      scheduleNextBlink();
    }, delay);
  }, []);

  useEffect(() => {
    scheduleNextBlink();
    return () => {
      if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
      if (blinkResetRef.current) clearTimeout(blinkResetRef.current);
    };
  }, [scheduleNextBlink]);

  // ---- Augen folgen dem Cursor (nur grosse Variante) -----------------------
  const svgRef = useRef(null);
  const pupilRefs = useRef([null, null]);

  useEffect(() => {
    if (!isLarge) return undefined;

    let rafId = null;

    const update = () => {
      const svg = svgRef.current;
      if (svg) {
        const rect = svg.getBoundingClientRect();
        const scaleX = rect.width / 320;
        const scaleY = rect.height / 248;

        EYES.forEach((eye, i) => {
          const el = pupilRefs.current[i];
          if (!el) return;

          // viewBox beginnt bei (-40, -12)
          const eyePageX = rect.left + (eye.cx + 40) * scaleX;
          const eyePageY = rect.top + (eye.cy + 12) * scaleY;
          const dx = globalMouseX - eyePageX;
          const dy = globalMouseY - eyePageY;
          const dist = Math.hypot(dx, dy) || 1;
          const offset = Math.min(dist / 40, 4);
          const angle = Math.atan2(dy, dx);

          el.setAttribute(
            "transform",
            `translate(${Math.cos(angle) * offset}, ${Math.sin(angle) * offset})`,
          );
        });
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isLarge]);

  const shellId = `turtleShell-${uid}`;
  const bellyId = `turtleBelly-${uid}`;

  const eyeRy = blink ? 1.5 : mood === "surprised" ? 15 : 13;
  const width = size ?? (isLarge ? 320 : 120);
  const height = (width * 248) / 320;

  return (
    <div
      className={`${style.turtle} ${animate ? style.animated : ""} ${className}`}
      data-variant={variant}
      style={{ "--turtle-width": `${width}px`, ...inlineStyle }}
      {...rest}
    >
      <svg
        ref={svgRef}
        viewBox="-40 -12 320 248"
        width={width}
        height={height}
        className={style.svg}
        role="img"
        aria-label={label}
      >
        <title>{label}</title>

        <defs>
          <linearGradient id={shellId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor={SHELL_LIGHT} />
            <stop offset="100%" stopColor={SHELL_DARK} />
          </linearGradient>
          <linearGradient id={bellyId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbf1c7" />
            <stop offset="100%" stopColor="#ebdbb2" />
          </linearGradient>
        </defs>

        {/* Bereits gezeichnete Spur */}
        {trail && (
          <path
            className={style.trail}
            d="M -30 208 H 60 L 110 188 L 160 208 L 215 198"
            fill="none"
            stroke={PALETTE.lightBlue}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 9"
          />
        )}

        {/* Die ganze Figur wippt leicht */}
        <g className={style.body}>
          {/* Füsse */}
          <ellipse
            cx="72"
            cy="196"
            rx="27"
            ry="15"
            fill={SKIN}
            stroke={OUTLINE}
            strokeWidth="3"
          />
          <ellipse
            cx="188"
            cy="196"
            rx="27"
            ry="15"
            fill={SKIN}
            stroke={OUTLINE}
            strokeWidth="3"
          />
          <g stroke={SKIN_DARK} strokeWidth="3" strokeLinecap="round">
            <path d="M 59 202 v 4 M 72 204 v 4 M 85 202 v 4" />
            <path d="M 175 202 v 4 M 188 204 v 4 M 201 202 v 4" />
          </g>

          {/* Hals */}
          <path
            d="M 110 72 H 150 L 154 116 H 106 Z"
            fill={SKIN}
            stroke={OUTLINE}
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Panzer von vorne: Rand + Bauchplatte */}
          <ellipse
            cx="130"
            cy="138"
            rx="82"
            ry="66"
            fill={`url(#${shellId})`}
            stroke={OUTLINE}
            strokeWidth="3"
          />
          {/* Nähte des Panzerrands */}
          <g stroke={SHELL_DARK} strokeWidth="3" opacity="0.8">
            <path d="M 130 72 v 18 M 130 204 v -18" />
            <path d="M 48 138 h 18 M 212 138 h -18" />
            <path d="M 72 90 l 13 13 M 188 90 l -13 13" />
            <path d="M 72 186 l 13 -13 M 188 186 l -13 -13" />
          </g>
          <ellipse
            cx="130"
            cy="142"
            rx="55"
            ry="50"
            fill={`url(#${bellyId})`}
            stroke={OUTLINE}
            strokeWidth="3"
          />
          {/* Bauchplatten */}
          <g stroke="#d5c4a1" strokeWidth="2.5" strokeLinecap="round">
            <path d="M 88 120 H 172 M 78 146 H 182 M 92 172 H 168" />
            <path d="M 130 96 V 190" />
          </g>
          {/* Glanzlicht auf dem Panzer */}
          <path
            d="M 62 112 q 14 -26 42 -34"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Kopf */}
          <ellipse
            cx="130"
            cy="56"
            rx="42"
            ry="35"
            fill={SKIN}
            stroke={OUTLINE}
            strokeWidth="3"
          />
          {/* Wangen */}
          <ellipse
            cx="100"
            cy="68"
            rx="10"
            ry="6.5"
            fill="#b8bb26"
            opacity="0.6"
          />
          <ellipse
            cx="160"
            cy="68"
            rx="10"
            ry="6.5"
            fill="#b8bb26"
            opacity="0.6"
          />
          {/* Nasenlöcher */}
          <g fill={SKIN_DARK}>
            <circle cx="124" cy="68" r="2.4" />
            <circle cx="136" cy="68" r="2.4" />
          </g>
          {/* Mund */}
          <path
            d={
              mood === "surprised"
                ? "M 130 80 a 6 5.5 0 1 0 0.1 0"
                : mood === "neutral"
                  ? "M 118 79 h 24"
                  : "M 115 76 q 15 13 30 0"
            }
            fill="none"
            stroke={OUTLINE}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Augen */}
          {EYES.map((eye, i) => (
            <g
              // biome-ignore lint/suspicious/noArrayIndexKey: feste Reihenfolge (links/rechts)
              key={i}
              transform={`translate(${eye.cx}, ${eye.cy})`}
            >
              <ellipse
                cx="0"
                cy="0"
                rx="13"
                ry={eyeRy}
                fill="white"
                stroke={OUTLINE}
                strokeWidth="3"
                className={style.eyeWhite}
              />
              {!blink && (
                <g
                  ref={(el) => {
                    pupilRefs.current[i] = el;
                  }}
                >
                  <circle cx="0" cy="1" r="5.5" fill={OUTLINE} />
                  <circle cx="2" cy="-1.5" r="2" fill="white" />
                </g>
              )}
            </g>
          ))}

          {/* Linker Arm mit Zettel */}
          <path
            d="M 70 132 Q 44 136 30 152"
            fill="none"
            stroke={SKIN}
            strokeWidth="16"
            strokeLinecap="round"
          />
          <g className={style.note} transform="translate(28, 152) rotate(-8)">
            {/* Zettel */}
            <rect
              x="-58"
              y="-88"
              width="76"
              height="92"
              rx="4"
              fill={PAPER}
              stroke={OUTLINE}
              strokeWidth="3"
            />
            {/* Eselsohr */}
            <path
              d="M 18 -88 l -14 0 l 14 14 Z"
              fill="#ebdbb2"
              stroke={OUTLINE}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <text
              x="-50"
              y="-72"
              fontSize="11"
              fontFamily="'Courier New', monospace"
              fontWeight="bold"
              fill={PALETTE.purple}
            >
              {noteTitle}
            </text>
            {lines.slice(0, 4).map((line, i) => (
              <text
                // biome-ignore lint/suspicious/noArrayIndexKey: Zeilen können sich wiederholen
                key={`${line}-${i}`}
                x="-50"
                y={-55 + i * 13}
                fontSize="11"
                fontFamily="'Courier New', monospace"
                fill={OUTLINE}
              >
                {line}
              </text>
            ))}
            {/* Hand, die den Zettel hält */}
            <circle
              cx="0"
              cy="-2"
              r="12"
              fill={SKIN}
              stroke={OUTLINE}
              strokeWidth="3"
            />
          </g>

          {/* Rechter Arm mit Stift */}
          <path
            d="M 190 132 Q 216 140 230 162"
            fill="none"
            stroke={SKIN}
            strokeWidth="16"
            strokeLinecap="round"
          />
          <g
            className={`${style.pen} ${penUp ? style.penUp : ""}`}
            transform={`translate(232, ${penUp ? 146 : 164})`}
          >
            <g transform={`rotate(${penUp ? -30 : 26})`}>
              {/* Stiftkörper */}
              <rect
                x="-7"
                y="-46"
                width="14"
                height="64"
                rx="3"
                fill={PALETTE.red}
                stroke={OUTLINE}
                strokeWidth="3"
              />
              <rect x="-7" y="-46" width="5" height="64" fill="#cc241d" />
              {/* Spitze */}
              <path
                d="M -7 18 L 7 18 L 0 38 Z"
                fill="#ebdbb2"
                stroke={OUTLINE}
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="M -2.6 30 L 2.6 30 L 0 38 Z" fill={OUTLINE} />
            </g>
            {/* Hand am Stift */}
            <circle
              cx="0"
              cy="0"
              r="12"
              fill={SKIN}
              stroke={OUTLINE}
              strokeWidth="3"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
