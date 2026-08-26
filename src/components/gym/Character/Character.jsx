import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import style from "./Character.module.css";

// Globale Mausposition (wird einmalig global getrackt)
let globalMouseX = 0;
let globalMouseY = 0;

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

const DEFAULT_GEOMETRY = {
  fontSize: 64,
  charSpacing: 30, // Abstand zwischen den Zeichen-Mittelpunkten
  eyeSpacing: null, // null => charSpacing
  eyeRadiusX: 14,
  eyeRadiusY: 14,
  pupilRadius: 7,
  paddingX: 75, // horizontaler Abstand Text -> Rand des Hintergrund-Rechtecks
  rectY: 60, // Oberkante des Hintergrund-Rechtecks
  rectHeight: 80,
  rectRadius: 16,
  eyeOffsetY: 5, // Augenmitte relativ zur Oberkante des Rechtecks
  paddingBottom: 20,
};

const OUTLINE_COLOR = "#282828";

/**
 * Generischer Charakter: Text mit aufgesetzten Comic-Augen.
 *
 * Varianten:
 *  - "large": Augen folgen dem Cursor, Charakter schläft ein, wenn der
 *    Cursor die Seite verlässt. Zusätzlich unregelmässiges Blinzeln.
 *  - "small": nur unregelmässiges Blinzeln.
 */
export default function Character({
  text = "01",
  variant = "large",
  size,
  gradient = null, // [{ offset, color }, ...] – überschreibt fill
  fill = OUTLINE_COLOR, // Vollfarbe, wenn kein Farbverlauf
  geometry: geometryOverrides = null,
  glow = true,
  label,
  className = "",
  style: inlineStyle,
  ...rest
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const isLarge = variant === "large";

  const geo = useMemo(
    () => ({ ...DEFAULT_GEOMETRY, ...(geometryOverrides || {}) }),
    [geometryOverrides],
  );

  const chars = useMemo(() => Array.from(text), [text]);

  // ---- Geometrie berechnen -------------------------------------------------
  const layout = useMemo(() => {
    const eyeSpacing = geo.eyeSpacing ?? geo.charSpacing;
    const textWidth = (chars.length - 1) * geo.charSpacing;
    const rectWidth = textWidth + 2 * geo.paddingX;
    const width = rectWidth + 20;
    const centerX = width / 2;

    const rectY = geo.rectY;
    const eyeCy = rectY + geo.eyeOffsetY;
    const height = rectY + geo.rectHeight + geo.paddingBottom;

    const charXs = chars.map(
      (_, i) => centerX - textWidth / 2 + i * geo.charSpacing,
    );

    // Baseline so, dass der Text optisch im Rechteck sitzt
    const baselineY = rectY + geo.rectHeight * 0.775;

    return {
      width,
      height,
      centerX,
      rectX: (width - rectWidth) / 2,
      rectY,
      rectWidth,
      charXs,
      baselineY,
      eyes: [
        { cx: centerX - eyeSpacing / 2, cy: eyeCy },
        { cx: centerX + eyeSpacing / 2, cy: eyeCy },
      ],
    };
  }, [chars, geo]);

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

  // ---- Einschlafen (nur grosse Variante) -----------------------------------
  const [sleepy, setSleepy] = useState(0); // 0 = wach, 1 = schläfrig
  const sleepyRef = useRef(0);

  useEffect(() => {
    sleepyRef.current = sleepy;
  }, [sleepy]);

  useEffect(() => {
    if (!isLarge) return undefined;

    let rafId = null;
    const pointerInDocument = { current: true };

    const tick = () => {
      setSleepy((prev) =>
        pointerInDocument.current
          ? Math.max(prev - 0.03, 0)
          : Math.min(prev + 0.03, 1),
      );
      rafId = requestAnimationFrame(tick);
    };

    const wakeUp = () => {
      pointerInDocument.current = true;
      setSleepy(0);
    };
    const fallAsleep = () => {
      pointerInDocument.current = false;
    };

    document.addEventListener("pointerleave", fallAsleep);
    document.addEventListener("mousemove", wakeUp);
    window.addEventListener("focus", wakeUp);
    window.addEventListener("blur", fallAsleep);
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("pointerleave", fallAsleep);
      document.removeEventListener("mousemove", wakeUp);
      window.removeEventListener("focus", wakeUp);
      window.removeEventListener("blur", fallAsleep);
    };
  }, [isLarge]);

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
        const scaleX = rect.width / layout.width;
        const scaleY = rect.height / layout.height;
        const sleepyFactor = sleepyRef.current;

        layout.eyes.forEach((eye, i) => {
          const el = pupilRefs.current[i];
          if (!el) return;

          const eyePageX = rect.left + eye.cx * scaleX;
          const eyePageY = rect.top + eye.cy * scaleY;
          const dx = globalMouseX - eyePageX;
          const dy = globalMouseY - eyePageY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const offset = Math.min(dist / 40, 5);
          const angle = Math.atan2(dy, dx);

          const x = Math.cos(angle) * offset * (1 - sleepyFactor);
          const y =
            Math.sin(angle) * offset * (1 - sleepyFactor) + sleepyFactor * 2;

          el.setAttribute("transform", `translate(${x}, ${y})`);
        });
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isLarge, layout]);

  // ---- Darstellung ---------------------------------------------------------
  const gradientId = `charGradient-${uid}`;
  const maskId = `charTextMask-${uid}`;
  const glowId = `charGlow-${uid}`;

  const eyeRy = blink
    ? 1
    : geo.eyeRadiusY - (isLarge ? sleepy * (geo.eyeRadiusY - 4) : 0);

  const width = size ?? (isLarge ? 220 : 56);
  const height = (width * layout.height) / layout.width;

  const fontFamily = "'Courier New', monospace";
  const accessibleLabel = label ?? text;

  return (
    <div
      className={`${style.character} ${isLarge ? style.large : style.small} ${className}`}
      data-variant={variant}
      style={{ "--character-width": `${width}px`, ...inlineStyle }}
      {...rest}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        width={width}
        height={height}
        className={style.svg}
        role="img"
        aria-label={accessibleLabel}
      >
        <title>{accessibleLabel}</title>
        <defs>
          {gradient && (
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {gradient.map((stop) => (
                <stop
                  key={`${stop.offset}-${stop.color}`}
                  offset={stop.offset}
                  stopColor={stop.color}
                />
              ))}
            </linearGradient>
          )}

          <filter id={glowId}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Maske: Füllung nur innerhalb der Zeichen sichtbar */}
          <mask id={maskId}>
            <rect width={layout.width} height={layout.height} fill="black" />
            {chars.map((char, i) => (
              <text
                // biome-ignore lint/suspicious/noArrayIndexKey: Zeichen können sich wiederholen
                key={`${char}-${i}`}
                x={layout.charXs[i]}
                y={layout.baselineY}
                textAnchor="middle"
                fill="white"
                fontSize={geo.fontSize}
                fontWeight="bold"
                fontFamily={fontFamily}
              >
                {char}
              </text>
            ))}
          </mask>
        </defs>

        {/* Hintergrund-Rechteck, durch die Textmaske sichtbar */}
        <rect
          x={layout.rectX}
          y={layout.rectY}
          width={layout.rectWidth}
          height={geo.rectHeight}
          rx={geo.rectRadius}
          fill={gradient ? `url(#${gradientId})` : fill}
          filter={glow ? `url(#${glowId})` : undefined}
          mask={`url(#${maskId})`}
          className={style.bgRect}
        />

        {/* Comic-Augen */}
        <g className={style.eyes}>
          {layout.eyes.map((eye, i) => (
            <g
              // biome-ignore lint/suspicious/noArrayIndexKey: feste Reihenfolge (links/rechts)
              key={i}
              transform={`translate(${eye.cx}, ${eye.cy})`}
            >
              <ellipse
                cx="0"
                cy="0"
                rx={geo.eyeRadiusX}
                ry={eyeRy}
                fill="white"
                stroke={OUTLINE_COLOR}
                strokeWidth="2"
                className={style.eyeWhite}
              />
              {!blink && (
                <g
                  ref={(el) => {
                    pupilRefs.current[i] = el;
                  }}
                  style={{ transformOrigin: "0 0" }}
                >
                  <circle
                    cx="2"
                    cy="0"
                    r={geo.pupilRadius}
                    fill={OUTLINE_COLOR}
                  />
                  <circle
                    cx="4"
                    cy="-2"
                    r={geo.pupilRadius * 0.36}
                    fill="white"
                  />
                </g>
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
