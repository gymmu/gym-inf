import { useEffect, useRef, useState } from "react";
// Gleiches Aussehen wie die Kreis- und Rechteck-Spielwiese.
import style from "@/components/gym/SvgCirclePlayground/SvgCirclePlayground.module.css";
import { SvgCodeBlock, SvgTag } from "@/components/gym/SvgCode/SvgCode";
import group from "@/components/gym/SvgPlaygroundGroups.module.css";

const SIZE = 200;

const STROKE_COLORS = [
  { label: "Schwarz", value: "#282828" },
  { label: "Rot", value: "#fb4934" },
  { label: "Grün", value: "#b8bb26" },
  { label: "Blau", value: "#83a598" },
  { label: "Violett", value: "#d3869b" },
];

const LINECAPS = [
  { label: "butt (gerade)", value: "butt" },
  { label: "round (rund)", value: "round" },
  { label: "square (verlängert)", value: "square" },
];

/**
 * SvgLinePlayground — Spielwiese für `<line>`.
 *
 * Zwei Punkte, eine Verbindung: Die Regler verändern Start- und Endpunkt,
 * im Code leuchtet jeweils das Attribut auf, das gerade dran ist.
 */
export default function SvgLinePlayground({
  initialX1 = 30,
  initialY1 = 160,
  initialX2 = 170,
  initialY2 = 50,
  className = "",
}) {
  const [x1, setX1] = useState(initialX1);
  const [y1, setY1] = useState(initialY1);
  const [x2, setX2] = useState(initialX2);
  const [y2, setY2] = useState(initialY2);
  const [stroke, setStroke] = useState("#fb4934");
  const [strokeWidth, setStrokeWidth] = useState(6);
  const [linecap, setLinecap] = useState("butt");
  const [dashed, setDashed] = useState(false);
  const [dashLength, setDashLength] = useState(12);
  const [gapLength, setGapLength] = useState(8);
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

  const lineAttrs = [
    { name: "x1", value: x1, active: activeAttr === "x1" },
    { name: "y1", value: y1, active: activeAttr === "y1" },
    { name: "x2", value: x2, active: activeAttr === "x2" },
    { name: "y2", value: y2, active: activeAttr === "y2" },
    { name: "stroke", value: stroke, active: activeAttr === "stroke" },
    {
      name: "stroke-width",
      value: strokeWidth,
      active: activeAttr === "stroke-width",
    },
  ];
  if (linecap !== "butt") {
    lineAttrs.push({
      name: "stroke-linecap",
      value: linecap,
      active: activeAttr === "stroke-linecap",
    });
  }
  const dashArray = `${dashLength} ${gapLength}`;
  if (dashed) {
    lineAttrs.push({
      name: "stroke-dasharray",
      value: dashArray,
      active: activeAttr === "stroke-dasharray",
    });
  }

  // Runde und quadratische Enden wachsen über jeden Strich hinaus und
  // können die Lücken komplett zuschütten. Das verwirrt sonst nur.
  const capsHideGaps = dashed && linecap !== "butt" && gapLength <= strokeWidth;

  const length = Math.round(Math.hypot(x2 - x1, y2 - y1));

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
            aria-label={`Linie von ${x1}, ${y1} nach ${x2}, ${y2}`}
          >
            <title>Linien-Spielwiese</title>

            {helpers && <Grid />}

            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinecap={linecap}
              strokeDasharray={dashed ? dashArray : undefined}
            />

            {helpers && <Helpers x1={x1} y1={y1} x2={x2} y2={y2} />}
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
              name="line"
              attrs={lineAttrs}
              selfClosing
              multiline
              indent={1}
            />
            <SvgTag name="svg" closing dim />
          </SvgCodeBlock>
        </div>
      </div>

      {/* --- Regler, in drei Gruppen --- */}
      <div className={group.groups}>
        {/* Gruppe 1: Startpunkt */}
        <fieldset className={group.group}>
          <legend className={group.groupTitle}>Punkt 1 — Start</legend>
          <p className={group.groupHint}>Wo die Linie beginnt.</p>
          <Control
            label="x1 — nach rechts"
            value={x1}
            onChange={update("x1", setX1)}
            min={0}
            max={SIZE}
            active={activeAttr === "x1"}
          />
          <Control
            label="y1 — nach unten"
            value={y1}
            onChange={update("y1", setY1)}
            min={0}
            max={SIZE}
            active={activeAttr === "y1"}
          />
        </fieldset>

        {/* Gruppe 2: Endpunkt */}
        <fieldset className={group.group}>
          <legend className={group.groupTitle}>Punkt 2 — Ende</legend>
          <p className={group.groupHint}>Wo die Linie aufhört.</p>
          <Control
            label="x2 — nach rechts"
            value={x2}
            onChange={update("x2", setX2)}
            min={0}
            max={SIZE}
            active={activeAttr === "x2"}
          />
          <Control
            label="y2 — nach unten"
            value={y2}
            onChange={update("y2", setY2)}
            min={0}
            max={SIZE}
            active={activeAttr === "y2"}
          />
        </fieldset>

        {/* Gruppe 3: Aussehen */}
        <fieldset className={group.group}>
          <legend className={group.groupTitle}>Aussehen — der Strich</legend>
          <p className={group.groupHint}>Wie die Verbindung gezeichnet wird.</p>
          <ColorControl
            label="stroke — Farbe"
            value={stroke}
            options={STROKE_COLORS}
            onChange={update("stroke", setStroke)}
            active={activeAttr === "stroke"}
          />
          <Control
            label="stroke-width — Dicke"
            value={strokeWidth}
            onChange={update("stroke-width", setStrokeWidth)}
            min={0}
            max={30}
            active={activeAttr === "stroke-width"}
          />
          <div
            className={`${style.control} ${
              activeAttr === "stroke-linecap" ? style.controlActive : ""
            }`}
          >
            <span className={style.controlLabel}>
              stroke-linecap — Enden
              <span className={style.controlValue}>{linecap}</span>
            </span>
            <select
              value={linecap}
              onChange={(event) =>
                update("stroke-linecap", setLinecap)(event.target.value)
              }
            >
              {LINECAPS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <label
            className={`${style.control} ${
              activeAttr === "stroke-dasharray" ? style.controlActive : ""
            }`}
          >
            <span className={style.controlLabel}>
              stroke-dasharray — gestrichelt
              <span className={style.controlValue}>
                {dashed ? dashArray : "aus"}
              </span>
            </span>
            <input
              type="checkbox"
              checked={dashed}
              onChange={(event) =>
                update("stroke-dasharray", setDashed)(event.target.checked)
              }
            />
          </label>

          <div
            className={`${group.sub} ${dashed ? "" : group.subDisabled}`}
            aria-hidden={!dashed}
          >
            <Control
              label="Strichlänge"
              value={dashLength}
              onChange={update("stroke-dasharray", setDashLength)}
              min={1}
              max={40}
              disabled={!dashed}
              active={activeAttr === "stroke-dasharray"}
            />
            <Control
              label="Lückenlänge"
              value={gapLength}
              onChange={update("stroke-dasharray", setGapLength)}
              min={1}
              max={40}
              disabled={!dashed}
              active={activeAttr === "stroke-dasharray"}
            />
          </div>
        </fieldset>
      </div>

      <figcaption className={style.caption}>
        Eine Linie hat <strong>keine Fläche</strong>. Ohne <code>stroke</code>{" "}
        ist sie unsichtbar. Aktuelle Länge: ungefähr {length} Einheiten.
        {capsHideGaps && (
          <>
            {" "}
            <strong>Achtung:</strong> Mit <code>{linecap}</code>-Enden wird
            jeder Strich um <code>{strokeWidth / 2}</code> verlängert — die
            Lücken verschwinden. Wähle <code>butt</code> oder mache die Lücken
            grösser.
          </>
        )}
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

/** Hilfslinien: die beiden Punkte und ihre Koordinaten. */
function Helpers({ x1, y1, x2, y2 }) {
  return (
    <g pointerEvents="none">
      <circle cx={x1} cy={y1} r="4" fill="#282828" />
      <text x={x1 + 6} y={y1 - 6} fontSize="10" fill="#282828">
        1 ({x1} / {y1})
      </text>

      <circle cx={x2} cy={y2} r="4" fill="#282828" />
      <text x={x2 + 6} y={y2 - 6} fontSize="10" fill="#282828">
        2 ({x2} / {y2})
      </text>
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
            style={{ background: option.value }}
            onClick={() => onChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
