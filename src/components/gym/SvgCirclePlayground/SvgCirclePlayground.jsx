import { useEffect, useRef, useState } from "react";
import { SvgCodeBlock, SvgTag } from "@/components/gym/SvgCode/SvgCode";
import style from "./SvgCirclePlayground.module.css";

const SIZE = 200;

const FILL_COLORS = [
  { label: "Grün", value: "#b8bb26" },
  { label: "Gelb", value: "#fabd2f" },
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
 * SvgCirclePlayground — Spielwiese für `<circle>`.
 *
 * Links die Grafik (mit optionalen Hilfslinien), rechts der Code. Wird ein
 * Regler bewegt, verändert sich die Grafik *und* das passende Attribut im
 * Code wird kurz hervorgehoben.
 */
export default function SvgCirclePlayground({
  initialCx = 100,
  initialCy = 100,
  initialR = 60,
  className = "",
}) {
  const [cx, setCx] = useState(initialCx);
  const [cy, setCy] = useState(initialCy);
  const [r, setR] = useState(initialR);
  const [fill, setFill] = useState("#b8bb26");
  const [stroke, setStroke] = useState("#282828");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [helpers, setHelpers] = useState(true);
  const [activeAttr, setActiveAttr] = useState(null);

  const timeoutRef = useRef(null);

  // Hervorhebung im Code nach kurzer Zeit wieder ausblenden.
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

  const circleAttrs = [
    { name: "cx", value: cx, active: activeAttr === "cx" },
    { name: "cy", value: cy, active: activeAttr === "cy" },
    { name: "r", value: r, active: activeAttr === "r" },
    { name: "fill", value: fill, active: activeAttr === "fill" },
  ];
  if (hasStroke) {
    circleAttrs.push(
      { name: "stroke", value: stroke, active: activeAttr === "stroke" },
      {
        name: "stroke-width",
        value: strokeWidth,
        active: activeAttr === "stroke-width",
      },
    );
  } else {
    circleAttrs.push({
      name: "stroke",
      value: "none",
      active: activeAttr === "stroke",
    });
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
            aria-label={`Kreis mit Mittelpunkt ${cx}, ${cy} und Radius ${r}`}
          >
            <title>Kreis-Spielwiese</title>

            {helpers && <Grid />}

            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill={fill}
              stroke={hasStroke ? stroke : "none"}
              strokeWidth={hasStroke ? strokeWidth : 0}
            />

            {helpers && <Helpers cx={cx} cy={cy} r={r} />}
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
              name="circle"
              attrs={circleAttrs}
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
          label="cx — Mittelpunkt horizontal"
          value={cx}
          onChange={update("cx", setCx)}
          min={0}
          max={SIZE}
          active={activeAttr === "cx"}
        />
        <Control
          label="cy — Mittelpunkt vertikal"
          value={cy}
          onChange={update("cy", setCy)}
          min={0}
          max={SIZE}
          active={activeAttr === "cy"}
        />
        <Control
          label="r — Radius"
          value={r}
          onChange={update("r", setR)}
          min={0}
          max={100}
          active={activeAttr === "r"}
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
        Der Nullpunkt liegt <strong>oben links</strong>: Ein grösseres{" "}
        <code>cy</code> schiebt den Kreis nach <strong>unten</strong>.
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

/** Hilfslinien: Mittelpunkt, cx / cy und Radius. */
function Helpers({ cx, cy, r }) {
  return (
    <g pointerEvents="none">
      {/* cx: waagrecht vom Rand zum Mittelpunkt */}
      <line
        x1="0"
        y1={cy}
        x2={cx}
        y2={cy}
        stroke="#fb4934"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text
        x={cx / 2}
        y={cy - 4}
        fontSize="10"
        fill="#fb4934"
        textAnchor="middle"
      >
        cx = {cx}
      </text>

      {/* cy: senkrecht vom Rand zum Mittelpunkt */}
      <line
        x1={cx}
        y1="0"
        x2={cx}
        y2={cy}
        stroke="#458588"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text
        x={cx + 4}
        y={cy / 2}
        fontSize="10"
        fill="#458588"
        textAnchor="start"
      >
        cy = {cy}
      </text>

      {/* r: Radius vom Mittelpunkt nach rechts */}
      <line
        x1={cx}
        y1={cy}
        x2={cx + r}
        y2={cy}
        stroke="#8f3f71"
        strokeWidth="2"
      />
      <text
        x={cx + r / 2}
        y={cy + 12}
        fontSize="10"
        fill="#8f3f71"
        textAnchor="middle"
      >
        r = {r}
      </text>

      {/* Mittelpunkt */}
      <circle cx={cx} cy={cy} r="3" fill="#282828" />
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
