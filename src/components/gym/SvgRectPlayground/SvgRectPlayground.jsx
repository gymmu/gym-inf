import { useEffect, useRef, useState } from "react";
// Gleiches Aussehen wie die Kreis-Spielwiese — darum dieselben Stile.
import style from "@/components/gym/SvgCirclePlayground/SvgCirclePlayground.module.css";
import { SvgCodeBlock, SvgTag } from "@/components/gym/SvgCode/SvgCode";

const SIZE = 200;

const FILL_COLORS = [
  { label: "Gelb", value: "#fabd2f" },
  { label: "Grün", value: "#b8bb26" },
  { label: "Blau", value: "#83a598" },
  { label: "Rot", value: "#fb4934" },
  { label: "keine (none)", value: "none" },
];

const STROKE_COLORS = [
  { label: "keine (none)", value: "none" },
  { label: "Schwarz", value: "#282828" },
  { label: "Rot", value: "#fb4934" },
  { label: "Violett", value: "#d3869b" },
];

/**
 * SvgRectPlayground — Spielwiese für `<rect>`.
 *
 * Gleiche Idee wie bei der Kreis-Spielwiese: Regler verändern die Grafik und
 * gleichzeitig leuchtet im Code das Attribut auf, das gerade dran ist.
 */
export default function SvgRectPlayground({
  initialX = 50,
  initialY = 50,
  initialWidth = 100,
  initialHeight = 80,
  className = "",
}) {
  const [x, setX] = useState(initialX);
  const [y, setY] = useState(initialY);
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [rx, setRx] = useState(0);
  const [fill, setFill] = useState("#fabd2f");
  const [stroke, setStroke] = useState("#282828");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [helpers, setHelpers] = useState(true);
  const [activeAttr, setActiveAttr] = useState(null);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!activeAttr) return undefined;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setActiveAttr(null), 1200);
    return () => clearTimeout(timeoutRef.current);
  }, [activeAttr]);

  function update(attr, setter) {
    return (value) => {
      setter(value);
      setActiveAttr(attr);
    };
  }

  const hasStroke = stroke !== "none";

  const rectAttrs = [
    { name: "x", value: x, active: activeAttr === "x" },
    { name: "y", value: y, active: activeAttr === "y" },
    { name: "width", value: width, active: activeAttr === "width" },
    { name: "height", value: height, active: activeAttr === "height" },
  ];
  if (rx > 0) {
    rectAttrs.push({ name: "rx", value: rx, active: activeAttr === "rx" });
  }
  rectAttrs.push({ name: "fill", value: fill, active: activeAttr === "fill" });
  if (hasStroke) {
    rectAttrs.push(
      { name: "stroke", value: stroke, active: activeAttr === "stroke" },
      {
        name: "stroke-width",
        value: strokeWidth,
        active: activeAttr === "stroke-width",
      },
    );
  }

  return (
    <figure className={`${style.playground} ${className}`}>
      <div className={style.body}>
        {/* --- Grafik --- */}
        <div className={style.canvasWrapper}>
          <svg
            className={style.canvas}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            width="320"
            height="320"
            role="img"
            aria-label={`Rechteck bei ${x}, ${y} mit Breite ${width} und Höhe ${height}`}
          >
            <title>Rechteck-Spielwiese</title>

            {helpers && <Grid />}

            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={rx}
              fill={fill}
              stroke={hasStroke ? stroke : "none"}
              strokeWidth={hasStroke ? strokeWidth : 0}
            />

            {helpers && <Helpers x={x} y={y} width={width} height={height} />}
          </svg>

          <label className={style.toggle}>
            <input
              type="checkbox"
              checked={helpers}
              onChange={(event) => setHelpers(event.target.checked)}
            />
            Hilfslinien anzeigen
          </label>
        </div>

        {/* --- Code --- */}
        <div className={style.codeWrapper}>
          <SvgCodeBlock>
            <SvgTag
              name="svg"
              dim
              attrs={[
                { name: "width", value: SIZE },
                { name: "height", value: SIZE },
              ]}
            />
            <SvgTag
              name="rect"
              attrs={rectAttrs}
              selfClosing
              multiline
              indent={1}
            />
            <SvgTag name="svg" closing dim />
          </SvgCodeBlock>
        </div>
      </div>

      {/* --- Regler --- */}
      <div className={style.controls}>
        <Control
          label="x — linke Kante"
          value={x}
          onChange={update("x", setX)}
          min={0}
          max={SIZE}
          active={activeAttr === "x"}
        />
        <Control
          label="y — obere Kante"
          value={y}
          onChange={update("y", setY)}
          min={0}
          max={SIZE}
          active={activeAttr === "y"}
        />
        <Control
          label="width — Breite"
          value={width}
          onChange={update("width", setWidth)}
          min={0}
          max={SIZE}
          active={activeAttr === "width"}
        />
        <Control
          label="height — Höhe"
          value={height}
          onChange={update("height", setHeight)}
          min={0}
          max={SIZE}
          active={activeAttr === "height"}
        />
        <Control
          label="rx — runde Ecken"
          value={rx}
          onChange={update("rx", setRx)}
          min={0}
          max={50}
          active={activeAttr === "rx"}
        />
        <Control
          label="stroke-width — Dicke des Rands"
          value={strokeWidth}
          onChange={update("stroke-width", setStrokeWidth)}
          min={0}
          max={20}
          active={activeAttr === "stroke-width"}
          disabled={!hasStroke}
        />
        <ColorControl
          label="fill — Füllfarbe"
          value={fill}
          options={FILL_COLORS}
          onChange={update("fill", setFill)}
          active={activeAttr === "fill"}
        />
        <ColorControl
          label="stroke — Randfarbe"
          value={stroke}
          options={STROKE_COLORS}
          onChange={update("stroke", setStroke)}
          active={activeAttr === "stroke"}
        />
      </div>

      <figcaption className={style.caption}>
        Beim Rechteck zeigt <code>x</code> / <code>y</code> auf die{" "}
        <strong>obere linke Ecke</strong> — nicht auf die Mitte.
      </figcaption>
    </figure>
  );
}

/** Raster und Achsen im Hintergrund. */
function Grid() {
  const lines = [];
  for (let position = 20; position < SIZE; position += 20) {
    lines.push(
      <line
        key={`v${position}`}
        x1={position}
        y1={0}
        x2={position}
        y2={SIZE}
        stroke="#d5c4a1"
        strokeWidth="0.5"
      />,
      <line
        key={`h${position}`}
        x1={0}
        y1={position}
        x2={SIZE}
        y2={position}
        stroke="#d5c4a1"
        strokeWidth="0.5"
      />,
    );
  }

  return (
    <g>
      {lines}
      <line x1="0" y1="0" x2={SIZE} y2="0" stroke="#928374" strokeWidth="1.5" />
      <line x1="0" y1="0" x2="0" y2={SIZE} stroke="#928374" strokeWidth="1.5" />
      <text x="4" y="12" fontSize="9" fill="#928374">
        0 / 0
      </text>
    </g>
  );
}

/** Hilfslinien: Ecke, Breite und Höhe. */
function Helpers({ x, y, width, height }) {
  return (
    <g pointerEvents="none">
      {/* x: vom linken Rand zur Ecke */}
      <line
        x1="0"
        y1={y}
        x2={x}
        y2={y}
        stroke="#fb4934"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text
        x={x / 2}
        y={y - 4}
        fontSize="10"
        fill="#fb4934"
        textAnchor="middle"
      >
        x = {x}
      </text>

      {/* y: vom oberen Rand zur Ecke */}
      <line
        x1={x}
        y1="0"
        x2={x}
        y2={y}
        stroke="#458588"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x={x + 4} y={y / 2} fontSize="10" fill="#458588" textAnchor="start">
        y = {y}
      </text>

      {/* width */}
      <line
        x1={x}
        y1={y + height + 8}
        x2={x + width}
        y2={y + height + 8}
        stroke="#8f3f71"
        strokeWidth="2"
      />
      <text
        x={x + width / 2}
        y={y + height + 20}
        fontSize="10"
        fill="#8f3f71"
        textAnchor="middle"
      >
        width = {width}
      </text>

      {/* height */}
      <line
        x1={x - 8}
        y1={y}
        x2={x - 8}
        y2={y + height}
        stroke="#79740e"
        strokeWidth="2"
      />
      <text
        x={x - 12}
        y={y + height / 2}
        fontSize="10"
        fill="#79740e"
        textAnchor="end"
      >
        height = {height}
      </text>

      {/* Ecke */}
      <circle cx={x} cy={y} r="3" fill="#282828" />
    </g>
  );
}

/** Ein Schieberegler mit Beschriftung und Wert. */
function Control({ label, value, onChange, min, max, active, disabled }) {
  return (
    <label className={`${style.control} ${active ? style.controlActive : ""}`}>
      <span className={style.controlLabel}>
        {label}
        <span className={style.controlValue}>{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

/** Auswahl einer Farbe. */
function ColorControl({ label, value, options, onChange, active }) {
  return (
    <div className={`${style.control} ${active ? style.controlActive : ""}`}>
      <span className={style.controlLabel}>
        {label}
        <span className={style.controlValue}>{value}</span>
      </span>
      <div className={style.swatches}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            title={option.label}
            aria-label={option.label}
            aria-pressed={value === option.value}
            className={`${style.swatch} ${
              value === option.value ? style.swatchActive : ""
            }`}
            style={{
              background:
                option.value === "none"
                  ? "repeating-linear-gradient(45deg, #504945 0 4px, #3c3836 4px 8px)"
                  : option.value,
            }}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
