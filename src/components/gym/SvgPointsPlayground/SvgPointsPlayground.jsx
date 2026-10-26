import { useCallback, useEffect, useRef, useState } from "react";
// Grundaussehen wie bei den anderen Spielwiesen.
import base from "@/components/gym/SvgCirclePlayground/SvgCirclePlayground.module.css";
import { SvgCodeBlock, SvgTag } from "@/components/gym/SvgCode/SvgCode";
import style from "./SvgPointsPlayground.module.css";

const SIZE = 200;

const FILL_COLORS = [
  { label: "keine (none)", value: "none" },
  { label: "Gelb", value: "#fabd2f" },
  { label: "Grün", value: "#b8bb26" },
  { label: "Blau", value: "#83a598" },
  { label: "Violett", value: "#d3869b" },
];

const STROKE_COLORS = [
  { label: "Schwarz", value: "#282828" },
  { label: "Rot", value: "#fb4934" },
  { label: "Blau", value: "#83a598" },
  { label: "keine (none)", value: "none" },
];

/** Farbe des gerade ausgewählten Punktes. */
const SELECTED_COLOR = "#fb4934";

const DEFAULT_POINTS = [
  [20, 160],
  [70, 60],
  [120, 140],
  [180, 40],
];

/** Macht aus einer Punktliste den Wert für das Attribut `points`. */
export function pointsToString(points) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

/**
 * SvgPointsPlayground — Spielwiese für `<polyline>` und `<polygon>`.
 *
 * Die Punkte können direkt in der Grafik verschoben werden (ziehen oder mit
 * den Pfeiltasten). Der Code darunter zeigt sofort den passenden Wert von
 * `points`. Mit dem Umschalter sieht man den Unterschied zwischen einem
 * offenen Linienzug und einem geschlossenen Vieleck.
 *
 * @param {"polyline"|"polygon"} [shape] Startform
 * @param {boolean} [allowSwitch] Umschalter polyline/polygon anzeigen
 * @param {Array<[number, number]>} [initialPoints] Startpunkte
 */
export default function SvgPointsPlayground({
  shape: initialShape = "polyline",
  allowSwitch = true,
  initialPoints = DEFAULT_POINTS,
  className = "",
}) {
  const [shape, setShape] = useState(initialShape);
  const [points, setPoints] = useState(initialPoints);
  const [fill, setFill] = useState(
    initialShape === "polygon" ? "#fabd2f" : "none",
  );
  const [stroke, setStroke] = useState("#282828");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [helpers, setHelpers] = useState(true);
  const [dragIndex, setDragIndex] = useState(null);
  // Der Punkt, der gerade bearbeitet wird (Dropdown und Regler).
  const [selected, setSelected] = useState(0);
  const [pointsActive, setPointsActive] = useState(false);

  const svgRef = useRef(null);
  const activeTimeout = useRef(null);

  // `points` im Code kurz hervorheben, wenn sich etwas ändert.
  const flashPoints = useCallback(() => {
    setPointsActive(true);
    clearTimeout(activeTimeout.current);
    activeTimeout.current = setTimeout(() => setPointsActive(false), 1200);
  }, []);

  useEffect(() => () => clearTimeout(activeTimeout.current), []);

  // Mausposition in Koordinaten der Leinwand umrechnen.
  const toCanvas = useCallback((event) => {
    const box = svgRef.current?.getBoundingClientRect();
    if (!box) return null;
    const x = Math.round(((event.clientX - box.left) / box.width) * SIZE);
    const y = Math.round(((event.clientY - box.top) / box.height) * SIZE);
    return [clamp(x), clamp(y)];
  }, []);

  const movePoint = useCallback(
    (index, position) => {
      setPoints((current) =>
        current.map((point, i) => (i === index ? position : point)),
      );
      flashPoints();
    },
    [flashPoints],
  );

  /** Verschiebt den ausgewählten Punkt entlang einer Achse. */
  function moveSelected(axis, value) {
    const point = points[selected];
    if (!point) return;
    const [x, y] = point;
    movePoint(selected, axis === "x" ? [clamp(value), y] : [x, clamp(value)]);
  }

  useEffect(() => {
    if (dragIndex === null) return undefined;

    function onMove(event) {
      const position = toCanvas(event);
      if (position) movePoint(dragIndex, position);
    }
    function onUp() {
      setDragIndex(null);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragIndex, toCanvas, movePoint]);

  function addPoint() {
    const [lastX, lastY] = points[points.length - 1];
    setPoints([...points, [clamp(lastX + 30), clamp(lastY - 30)]]);
    setSelected(points.length);
    flashPoints();
  }

  function removePoint() {
    if (points.length <= 2) return;
    setPoints(points.slice(0, -1));
    setSelected(Math.min(selected, points.length - 2));
    flashPoints();
  }

  function resetPoints() {
    setPoints(initialPoints);
    setSelected(0);
    flashPoints();
  }

  function onPointKeyDown(index, event) {
    const step = event.shiftKey ? 10 : 1;
    const moves = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    const [x, y] = points[index];
    movePoint(index, [clamp(x + move[0]), clamp(y + move[1])]);
  }

  const value = pointsToString(points);
  const Tag = shape;
  const [selectedX, selectedY] = points[selected] ?? points[0];

  return (
    <figure className={`${base.playground} ${className}`}>
      <div className={base.body}>
        {/* --- Grafik --- */}
        <div className={base.canvasWrapper}>
          <svg
            ref={svgRef}
            className={base.canvas}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            width="320"
            height="320"
            role="img"
            aria-label={`${shape} mit ${points.length} Punkten`}
          >
            <title>Punkte-Spielwiese</title>

            {helpers && <Grid />}

            <Tag
              points={value}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />

            {helpers &&
              points.map(([x, y], index) => {
                const isSelected = index === selected;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: in SVG gibt es kein <button>
                  <g
                    // Punkte haben keine eigene ID; die Position wechselt beim Ziehen.
                    // biome-ignore lint/suspicious/noArrayIndexKey: Punkte sind über die Reihenfolge definiert
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`Punkt ${index + 1} bei ${x}, ${y}`}
                    aria-pressed={isSelected}
                    className={style.handle}
                    onPointerDown={() => {
                      setSelected(index);
                      setDragIndex(index);
                    }}
                    onKeyDown={(event) => onPointKeyDown(index, event)}
                  >
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r="10"
                        fill="none"
                        stroke={SELECTED_COLOR}
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                    )}
                    <circle cx={x} cy={y} r="7" fill="rgba(40,40,40,0.08)" />
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? SELECTED_COLOR : "#282828"}
                    />
                    <text
                      x={x + 9}
                      y={y - 9}
                      fontSize={isSelected ? 12 : 10}
                      fontWeight={isSelected ? "bold" : "normal"}
                      fill={isSelected ? SELECTED_COLOR : "#504945"}
                    >
                      {index + 1}
                    </text>
                  </g>
                );
              })}
          </svg>

          <label className={base.toggle}>
            <input
              type="checkbox"
              checked={helpers}
              onChange={(event) => setHelpers(event.target.checked)}
            />
            Punkte anzeigen und verschieben
          </label>
        </div>

        {/* --- Code --- */}
        <div className={base.codeWrapper}>
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
              name={shape}
              attrs={[
                { name: "points", value: value, active: pointsActive },
                { name: "fill", value: fill },
                { name: "stroke", value: stroke },
                { name: "stroke-width", value: strokeWidth },
              ]}
              selfClosing
              multiline
              indent={1}
            />
            <SvgTag name="svg" closing dim />
          </SvgCodeBlock>

          <p className={style.hint}>
            {shape === "polyline"
              ? "Eine polyline verbindet die Punkte der Reihe nach — der Weg bleibt offen."
              : "Ein polygon schliesst den Weg automatisch: Der letzte Punkt wird mit dem ersten verbunden."}
          </p>
        </div>
      </div>

      {/* --- Steuerung --- */}
      <div className={base.controls}>
        {allowSwitch && (
          <div className={base.control}>
            <span className={base.controlLabel}>
              Form
              <span className={base.controlValue}>&lt;{shape}&gt;</span>
            </span>
            <div className={style.buttons}>
              <button
                type="button"
                className={`${style.button} ${
                  shape === "polyline" ? style.buttonActive : ""
                }`}
                onClick={() => setShape("polyline")}
              >
                polyline
              </button>
              <button
                type="button"
                className={`${style.button} ${
                  shape === "polygon" ? style.buttonActive : ""
                }`}
                onClick={() => setShape("polygon")}
              >
                polygon
              </button>
            </div>
          </div>
        )}

        <div className={base.control}>
          <span className={base.controlLabel}>
            Punkte
            <span className={base.controlValue}>{points.length}</span>
          </span>
          <div className={style.buttons}>
            <button type="button" className={style.button} onClick={addPoint}>
              + Punkt
            </button>
            <button
              type="button"
              className={style.button}
              onClick={removePoint}
              disabled={points.length <= 2}
            >
              − Punkt
            </button>
            <button
              type="button"
              className={style.button}
              onClick={resetPoints}
            >
              zurücksetzen
            </button>
          </div>
        </div>

        {/* --- Punkt auswählen und verschieben --- */}
        <div className={`${base.control} ${style.selectControl}`}>
          <span className={base.controlLabel}>
            ausgewählter Punkt
            <span className={base.controlValue}>
              {selectedX} / {selectedY}
            </span>
          </span>
          <select
            value={selected}
            onChange={(event) => setSelected(Number(event.target.value))}
          >
            {points.map(([x, y], index) => (
              <option
                // biome-ignore lint/suspicious/noArrayIndexKey: Punkte sind über die Reihenfolge definiert
                key={index}
                value={index}
              >
                Punkt {index + 1} ({x} / {y})
              </option>
            ))}
          </select>
        </div>

        <label className={`${base.control} ${style.selectedControl}`}>
          <span className={base.controlLabel}>
            x von Punkt {selected + 1}
            <span className={base.controlValue}>{selectedX}</span>
          </span>
          <input
            type="range"
            min="0"
            max={SIZE}
            step="1"
            value={selectedX}
            onChange={(event) => moveSelected("x", Number(event.target.value))}
          />
        </label>

        <label className={`${base.control} ${style.selectedControl}`}>
          <span className={base.controlLabel}>
            y von Punkt {selected + 1}
            <span className={base.controlValue}>{selectedY}</span>
          </span>
          <input
            type="range"
            min="0"
            max={SIZE}
            step="1"
            value={selectedY}
            onChange={(event) => moveSelected("y", Number(event.target.value))}
          />
        </label>

        <label className={base.control}>
          <span className={base.controlLabel}>
            stroke-width — Dicke
            <span className={base.controlValue}>{strokeWidth}</span>
          </span>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={strokeWidth}
            onChange={(event) => setStrokeWidth(Number(event.target.value))}
          />
        </label>

        <ColorControl
          label="fill — Füllfarbe"
          value={fill}
          options={FILL_COLORS}
          onChange={setFill}
        />
        <ColorControl
          label="stroke — Linienfarbe"
          value={stroke}
          options={STROKE_COLORS}
          onChange={setStroke}
        />
      </div>

      <figcaption className={base.caption}>
        Wähle unten einen Punkt aus — er wird <strong>rot</strong> gezeichnet —
        und verschiebe ihn mit den beiden Reglern. Im Attribut{" "}
        <code>points</code> stehen immer Paare:{" "}
        <code>x,y&nbsp;x,y&nbsp;x,y&nbsp;…</code>
      </figcaption>
    </figure>
  );
}

function clamp(value) {
  return Math.min(SIZE, Math.max(0, value));
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

/** Auswahl einer Farbe. */
function ColorControl({ label, value, options, onChange }) {
  return (
    <div className={base.control}>
      <span className={base.controlLabel}>
        {label}
        <span className={base.controlValue}>{value}</span>
      </span>
      <div className={base.swatches}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            title={option.label}
            aria-label={option.label}
            aria-pressed={value === option.value}
            className={`${base.swatch} ${
              value === option.value ? base.swatchActive : ""
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
