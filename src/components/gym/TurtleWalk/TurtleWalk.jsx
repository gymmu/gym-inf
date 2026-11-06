import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
// Grundaussehen wie bei den anderen Spielwiesen.
import base from "@/components/gym/SvgCirclePlayground/SvgCirclePlayground.module.css";
import { SvgCodeBlock } from "@/components/gym/SvgCode/SvgCode";
import { parsePath } from "@/components/gym/SvgPathPlayground/SvgPathPlayground.jsx";
import Turtle from "@/components/gym/Turtle/Turtle";
import style from "./TurtleWalk.module.css";

const SIZE = 200;
const CANVAS = 340;

// Lage der Stiftspitze innerhalb der Schildkröten-Grafik (in Prozent der
// Bildbreite/-höhe). Damit lässt sich die Figur so platzieren, dass ihre
// Spitze genau auf dem aktuellen Punkt steht.
const PEN_X = 79.8;
const PEN_Y = 84.7;

const COLORS = [
  { value: "#282828", label: "Dunkel" },
  { value: "#fb4934", label: "Rot" },
  { value: "#fabd2f", label: "Gelb" },
  { value: "#b8bb26", label: "Grün" },
  { value: "#83a598", label: "Blau" },
  { value: "#d3869b", label: "Violett" },
];

const FILLS = [
  { value: "none", label: "keine" },
  { value: "#fabd2f55", label: "gelb" },
  { value: "#8ec07c55", label: "grün" },
  { value: "#83a59855", label: "blau" },
];

const EXAMPLES = [
  { label: "Zickzack", d: "M 30 150 L 70 60 L 110 150 L 170 50" },
  { label: "Dach", d: "M 40 160 L 100 50 L 160 160 Z" },
  { label: "Treppe", d: "M 30 170 H 70 V 130 H 110 V 90 H 150 V 50" },
  { label: "Zwei Wege", d: "M 30 50 L 90 50 M 30 120 L 170 120 L 100 170 Z" },
];

/** Name des Befehls in Worten — für die Schrittliste. */
const COMMAND_TEXT = {
  M: "Stift heben und hingehen",
  L: "Linie bis zum Punkt",
  H: "waagrecht bis x",
  V: "senkrecht bis y",
  Z: "zurück zum Anfang",
};

const round = (n) => Math.round(n * 10) / 10;
const lerp = (a, b, t) => a + (b - a) * t;

/**
 * Zerlegt eine Pfadangabe in Wegstücke, die die Schildkröte abläuft.
 *
 * Der Stift startet immer im Koordinatenursprung (0 / 0) — das erste
 * `M` ist also selbst schon ein (unsichtbarer) Weg dorthin.
 */
function toSegments(d) {
  const items = parsePath(d);
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let walked = 0;
  const segments = [];

  items.forEach((item, index) => {
    const upper = item.cmd.toUpperCase();
    const rel = item.cmd === item.cmd.toLowerCase() && upper !== "Z";
    const ox = rel ? cx : 0;
    const oy = rel ? cy : 0;
    const n = (i) => item.args[i] ?? 0;

    let end = [cx, cy];
    switch (upper) {
      case "M":
        end = [ox + n(0), oy + n(1)];
        sx = end[0];
        sy = end[1];
        break;
      case "L":
        end = [ox + n(0), oy + n(1)];
        break;
      case "H":
        end = [ox + n(0), cy];
        break;
      case "V":
        end = [cx, oy + n(0)];
        break;
      case "Z":
        end = [sx, sy];
        break;
      default:
        return;
    }

    const length = Math.hypot(end[0] - cx, end[1] - cy);
    walked += length;

    segments.push({
      index,
      cmd: item.cmd,
      args: item.args,
      from: [cx, cy],
      to: end,
      draw: upper !== "M",
      length,
      // Gesamtstrecke bis zum Ende dieses Wegstücks — für "schon erreicht?".
      cumulative: walked,
    });

    cx = end[0];
    cy = end[1];
  });

  return segments;
}

/** Zustand der Wanderung bei einer bestimmten gelaufenen Strecke. */
function walkState(segments, travelled) {
  let drawn = "";
  let guide = "";
  let point = [0, 0];
  let heading = 0;
  let active = -1;
  let penUp = true;
  let open = false; // ist gerade ein gezeichneter Teilweg offen?
  let rest = travelled;

  for (const seg of segments) {
    const covered = Math.max(0, Math.min(seg.length, rest));
    const t = seg.length === 0 ? 1 : covered / seg.length;
    const p = [
      lerp(seg.from[0], seg.to[0], t),
      lerp(seg.from[1], seg.to[1], t),
    ];

    if (rest > 0 || seg.length === 0) {
      active = seg.index;
      penUp = !seg.draw;
      point = p;
      if (seg.length > 0) {
        heading =
          (Math.atan2(seg.to[1] - seg.from[1], seg.to[0] - seg.from[0]) * 180) /
          Math.PI;
      }

      if (seg.draw) {
        if (!open) {
          drawn += `M ${round(seg.from[0])} ${round(seg.from[1])} `;
          open = true;
        }
        drawn += `L ${round(p[0])} ${round(p[1])} `;
      } else {
        open = false;
        guide += `M ${round(seg.from[0])} ${round(seg.from[1])} L ${round(p[0])} ${round(p[1])} `;
      }
    }

    rest -= seg.length;
    if (rest <= 0) break;
  }

  return {
    drawn: drawn.trim(),
    guide: guide.trim(),
    point,
    heading,
    active,
    penUp,
  };
}

/**
 * TurtleWalk — die Schildkröte läuft einen Pfad ab.
 *
 * Sie bekommt zwei Sets von Befehlen:
 *
 *   1. die **Zeichenvorschrift** (Farbe, Strichdicke, Ecken, Füllung) und
 *   2. die **Weganweisung** (`d`), also die Punkte, die sie abläuft.
 *
 * Die Schildkröte startet immer im Koordinatenursprung (0 / 0) und ist
 * auch dann sichtbar, wenn sie mit gehobenem Stift unterwegs ist.
 */
export default function TurtleWalk({
  initialPath = EXAMPLES[0].d,
  initialColor = "#fb4934",
  initialWidth = 6,
  className = "",
}) {
  const titleId = useId();

  const [d, setD] = useState(initialPath);
  const [color, setColor] = useState(initialColor);
  const [strokeWidth, setStrokeWidth] = useState(initialWidth);
  const [rounded, setRounded] = useState(true);
  const [fill, setFill] = useState("none");

  const [speed, setSpeed] = useState(70); // Einheiten pro Sekunde
  const [playing, setPlaying] = useState(false);
  const [travelled, setTravelled] = useState(0);
  const [showGhost, setShowGhost] = useState(true);
  // Wegstück, über dem gerade die Maus steht (Liste ↔ Leinwand ↔ Code).
  const [hovered, setHovered] = useState(null);
  const [editing, setEditing] = useState(false);

  const travelledRef = useRef(0);

  const segments = useMemo(() => toSegments(d), [d]);
  const total = useMemo(
    () => segments.reduce((sum, seg) => sum + seg.length, 0),
    [segments],
  );

  const setPosition = useCallback((value) => {
    travelledRef.current = value;
    setTravelled(value);
  }, []);

  // ---- Animationsschleife --------------------------------------------------
  useEffect(() => {
    if (!playing) return undefined;

    let rafId = null;
    let last = performance.now();

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      const next = Math.min(travelledRef.current + dt * speed, total);
      travelledRef.current = next;
      setTravelled(next);
      if (next >= total) {
        setPlaying(false);
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [playing, speed, total]);

  const state = walkState(segments, travelled);
  const finished = travelled >= total;

  // Nummer (1, 2, 3 …) eines Wegstücks — so heissen die Knoten überall gleich.
  const numberOf = (index) => segments.findIndex((s) => s.index === index) + 1;
  const activeNumber = numberOf(state.active);
  const marked = hovered ?? state.active;
  const markedSegment = segments.find((seg) => seg.index === marked);

  // Auf dem Zettel der kleinen Schildkröte steht der Befehl, den sie
  // gerade ausführt.
  const activeSegment = segments.find((seg) => seg.index === state.active);
  const noteLine = activeSegment
    ? `${activeSegment.cmd} ${activeSegment.args.join(" ")}`.trim()
    : "Start";

  function togglePlay() {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (finished) setPosition(0);
    setPlaying(true);
  }

  /** Springt ans Ende des gerade laufenden Wegstücks. */
  function nextStep() {
    setPlaying(false);
    let sum = 0;
    for (const seg of segments) {
      sum += seg.length;
      if (sum > travelled + 0.001) {
        setPosition(sum);
        return;
      }
    }
    setPosition(total);
  }

  /** Springt ans Ende des Wegstücks — es ist dann fertig gezeichnet. */
  function jumpToCommand(index) {
    setPlaying(false);
    const seg = segments.find((s) => s.index === index);
    setPosition(seg ? seg.cumulative : 0);
  }

  function reset() {
    setPlaying(false);
    setPosition(0);
  }

  // Schildkröte: aufrecht halten, wenn es nach links geht, und die Drehung
  // begrenzen — sonst steht sie bei steilen Wegen fast senkrecht.
  const flipped = Math.abs(state.heading) > 90;
  const raw = flipped ? state.heading + 180 : state.heading;
  const angle = Math.max(-40, Math.min(40, raw));

  const linecap = rounded ? "round" : "butt";
  const linejoin = rounded ? "round" : "miter";

  return (
    <figure className={`${base.playground} ${style.widget} ${className}`}>
      <div className={style.main}>
        {/* ================= Bühne: Leinwand + Steuerung ================= */}
        <div className={style.stageCol}>
          <div className={style.stage}>
            <div
              className={style.canvasBox}
              style={{ width: CANVAS, height: CANVAS }}
            >
              <svg
                className={base.canvas}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                width={CANVAS}
                height={CANVAS}
                role="img"
                aria-labelledby={titleId}
              >
                <title id={titleId}>
                  Die Schildkröte läuft die Weganweisung ab
                </title>

                {/* Koordinatennetz mit Ursprung oben links */}
                <g className={style.grid}>
                  {Array.from({ length: 9 }, (_, i) => (i + 1) * 20).map(
                    (v) => (
                      <g key={v}>
                        <line x1={v} y1="0" x2={v} y2={SIZE} />
                        <line x1="0" y1={v} x2={SIZE} y2={v} />
                      </g>
                    ),
                  )}
                </g>
                <g className={style.axes}>
                  <line x1="0" y1="0" x2={SIZE} y2="0" />
                  <line x1="0" y1="0" x2="0" y2={SIZE} />
                </g>

                {/* Vorschau: der ganze Weg, blass */}
                {showGhost && (
                  <path
                    d={d}
                    fill="none"
                    stroke="#bdae93"
                    strokeWidth="2"
                    strokeDasharray="4 5"
                    strokeLinejoin={linejoin}
                  />
                )}

                {/* Markiertes Wegstück (Liste ↔ Leinwand ↔ Code) */}
                {markedSegment && (
                  <path
                    d={`M ${markedSegment.from[0]} ${markedSegment.from[1]} L ${markedSegment.to[0]} ${markedSegment.to[1]}`}
                    fill="none"
                    stroke="#fe8019"
                    strokeWidth={Number(strokeWidth) + 7}
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                  />
                )}

                {/* Weg mit gehobenem Stift */}
                {state.guide && (
                  <path
                    d={state.guide}
                    fill="none"
                    stroke="#928374"
                    strokeWidth="2"
                    strokeDasharray="2 6"
                    strokeLinecap="round"
                  />
                )}

                {/* Das, was die Schildkröte bereits gezeichnet hat */}
                {state.drawn && (
                  <path
                    d={state.drawn}
                    fill={fill}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap={linecap}
                    strokeLinejoin={linejoin}
                  />
                )}

                {/* Startknoten 0 / 0 */}
                <g className={`${style.node} ${style.nodeStart}`}>
                  <circle cx="0" cy="0" r="7" />
                  <text x="0" y="0">
                    0
                  </text>
                </g>

                {/* Knotenpunkte: Ziel jedes Wegstücks, durchnummeriert */}
                {segments.map((seg, i) => {
                  const done = travelled >= seg.cumulative - 0.001;
                  const cls = [
                    style.node,
                    seg.draw ? style.nodeDraw : style.nodeMove,
                    done ? style.nodeDone : "",
                    seg.index === marked ? style.nodeMarked : "",
                  ].join(" ");
                  return (
                    <g
                      key={seg.index}
                      className={cls}
                      onMouseEnter={() => setHovered(seg.index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <circle cx={seg.to[0]} cy={seg.to[1]} r="7" />
                      <text x={seg.to[0]} y={seg.to[1]}>
                        {i + 1}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Die Schildkröte steht immer auf dem aktuellen Punkt */}
              <div
                className={style.turtleLayer}
                style={{
                  left: `${(state.point[0] / SIZE) * 100}%`,
                  top: `${(state.point[1] / SIZE) * 100}%`,
                  transform: `translate(-${PEN_X}%, -${PEN_Y}%) rotate(${angle.toFixed(1)}deg) scaleX(${flipped ? -1 : 1})`,
                  transformOrigin: `${PEN_X}% ${PEN_Y}%`,
                }}
              >
                <Turtle
                  variant="small"
                  size={104}
                  trail={false}
                  animate={!playing}
                  penUp={state.penUp}
                  mood={state.penUp ? "surprised" : "happy"}
                  note={[noteLine]}
                  noteTitle="d ="
                  label="Schildkröte auf dem Pfad"
                />
              </div>
            </div>
          </div>

          <p className={style.status}>
            <span className={style.statusBadge}>
              {activeNumber > 0 ? activeNumber : "0"}
            </span>
            Position <strong>{round(state.point[0])}</strong> /{" "}
            <strong>{round(state.point[1])}</strong> —{" "}
            {state.penUp
              ? "Stift oben (geht nur hin)"
              : "Stift unten (zeichnet)"}
          </p>

          {/* --- Steuerung der Animation --- */}
          <div className={style.controls}>
            <div className={style.buttonRow}>
              <button
                type="button"
                className={`${style.button} ${style.buttonMain}`}
                onClick={togglePlay}
              >
                {playing ? "⏸ Pause" : finished ? "↻ Nochmals" : "▶ Loslaufen"}
              </button>
              <button type="button" className={style.button} onClick={nextStep}>
                ⏭ Nächstes Wegstück
              </button>
              <button type="button" className={style.button} onClick={reset}>
                ⟲ Zurück zu 0 / 0
              </button>
            </div>

            <label className={style.slider}>
              Weg
              <input
                type="range"
                min="0"
                max={Math.max(total, 1)}
                step="0.5"
                value={travelled}
                onChange={(e) => {
                  setPlaying(false);
                  setPosition(Number(e.target.value));
                }}
              />
            </label>

            <label className={style.slider}>
              Tempo
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
            </label>

            <label className={style.checkbox}>
              <input
                type="checkbox"
                checked={showGhost}
                onChange={(e) => setShowGhost(e.target.checked)}
              />
              Weg vorher zeigen
            </label>
          </div>
        </div>

        {/* ================= Die beiden Zettel ================= */}
        <div className={style.panels}>
          {/* --- Zettel A: womit gezeichnet wird --- */}
          <section className={`${style.panel} ${style.panelDraw}`}>
            <header className={style.panelHead}>
              <span className={style.panelBadge}>A</span>
              <span>
                <span className={style.panelTitle}>Zeichenvorschrift</span>
                <span className={style.panelHint}>
                  <em>womit</em> gezeichnet wird — gilt für den{" "}
                  <strong>ganzen</strong> Pfad
                </span>
              </span>
            </header>

            <div className={style.panelBody}>
              <div className={base.control}>
                <span className={base.controlLabel}>stroke — Farbe</span>
                <div className={base.swatches}>
                  {COLORS.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      title={item.label}
                      aria-label={item.label}
                      className={`${base.swatch} ${color === item.value ? base.swatchActive : ""}`}
                      style={{ backgroundColor: item.value }}
                      onClick={() => setColor(item.value)}
                    />
                  ))}
                </div>
              </div>

              <label className={base.control}>
                <span className={base.controlLabel}>
                  stroke-width — Strichdicke
                  <span className={base.controlValue}>{strokeWidth}</span>
                </span>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                />
              </label>

              <label className={style.checkbox}>
                <input
                  type="checkbox"
                  checked={rounded}
                  onChange={(e) => setRounded(e.target.checked)}
                />
                runde Ecken und Enden (<code>stroke-linejoin</code>)
              </label>

              <div className={base.control}>
                <span className={base.controlLabel}>fill — Füllung</span>
                <div className={style.chips}>
                  {FILLS.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      className={`${style.chip} ${fill === item.value ? style.chipActive : ""}`}
                      onClick={() => setFill(item.value)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* --- Zettel B: wohin die Schildkröte läuft --- */}
          <section className={`${style.panel} ${style.panelPath}`}>
            <header className={style.panelHead}>
              <span className={style.panelBadge}>B</span>
              <span>
                <span className={style.panelTitle}>
                  Weganweisung <code>d</code>
                </span>
                <span className={style.panelHint}>
                  <em>wohin</em> sie läuft — ein Befehl pro Wegstück, Start bei
                  0 / 0
                </span>
              </span>
            </header>

            <div className={style.panelBody}>
              <ol className={style.steps}>
                <li className={style.stepStart}>
                  <span className={style.stepNum}>0</span>
                  <span className={style.stepText}>Start bei 0 / 0</span>
                </li>
                {segments.map((seg, i) => (
                  <li key={seg.index}>
                    <button
                      type="button"
                      className={`${style.step} ${seg.index === state.active ? style.stepActive : ""} ${seg.index === hovered ? style.stepHover : ""}`}
                      title={`Wegstück ${i + 1}: ${COMMAND_TEXT[seg.cmd.toUpperCase()] ?? ""}`}
                      onClick={() => jumpToCommand(seg.index)}
                      onMouseEnter={() => setHovered(seg.index)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(seg.index)}
                      onBlur={() => setHovered(null)}
                    >
                      <span className={style.stepNum}>{i + 1}</span>
                      <span className={style.stepLetter}>{seg.cmd}</span>
                      <span className={style.stepArgs}>
                        {seg.args.join(" ")}
                      </span>
                      <span
                        className={`${style.stepTo} ${seg.draw ? "" : style.stepToMove}`}
                      >
                        {seg.draw ? "─▶" : "⇢"} {round(seg.to[0])} /{" "}
                        {round(seg.to[1])}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              <p className={style.legend}>
                Die Zahlen <span className={style.legendDraw}>1</span>{" "}
                <span className={style.legendMove}>2</span> stehen auf der
                Leinwand beim passenden Knotenpunkt. Gefüllte Kreise = Stift
                unten, helle Kreise = Stift oben.
              </p>

              <div className={style.pathEdit}>
                <div className={style.chips}>
                  {EXAMPLES.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`${style.chip} ${d === item.d ? style.chipActive : ""}`}
                      onClick={() => {
                        setD(item.d);
                        setEditing(false);
                        reset();
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`${style.chip} ${editing ? style.chipActive : ""}`}
                    onClick={() => setEditing((v) => !v)}
                  >
                    ✎ selber schreiben
                  </button>
                </div>

                {editing && (
                  <input
                    type="text"
                    className={style.input}
                    value={d}
                    spellCheck="false"
                    aria-label="Weganweisung d"
                    onChange={(e) => {
                      setD(e.target.value);
                      reset();
                    }}
                  />
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ================= Beide Zettel zusammen als SVG-Code ============ */}
      <div className={style.codeArea}>
        <p className={style.codeHint}>
          So sieht es im Code aus: <strong>B</strong> steckt in <code>d</code>,{" "}
          <strong>A</strong> in den übrigen Attributen. Fahre über ein Wegstück
          im <code>d</code> — der Knotenpunkt leuchtet auf der Leinwand auf.
        </p>
        <SvgCodeBlock>
          {"<path\n  "}
          <span className={style.attrPath}>d</span>
          {'="'}
          {segments.map((seg, i) => (
            <button
              key={seg.index}
              type="button"
              title={`Wegstück ${i + 1}: ${COMMAND_TEXT[seg.cmd.toUpperCase()] ?? ""}`}
              className={`${style.codeSeg} ${seg.index === marked ? style.codeSegOn : ""}`}
              onClick={() => jumpToCommand(seg.index)}
              onMouseEnter={() => setHovered(seg.index)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className={style.codeNum}>{i + 1}</span>
              {`${seg.cmd}${seg.args.length ? ` ${seg.args.join(" ")}` : ""}`}
            </button>
          ))}
          {'"\n  '}
          <span className={style.attr}>stroke</span>
          {'="'}
          <span className={style.value}>{color}</span>
          {'"\n  '}
          <span className={style.attr}>stroke-width</span>
          {'="'}
          <span className={style.value}>{strokeWidth}</span>
          {'"\n  '}
          <span className={style.attr}>stroke-linecap</span>
          {'="'}
          <span className={style.value}>{linecap}</span>
          {'"\n  '}
          <span className={style.attr}>stroke-linejoin</span>
          {'="'}
          <span className={style.value}>{linejoin}</span>
          {'"\n  '}
          <span className={style.attr}>fill</span>
          {'="'}
          <span className={style.value}>{fill}</span>
          {'"\n/>'}
        </SvgCodeBlock>
      </div>
    </figure>
  );
}
