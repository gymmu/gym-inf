import { useCallback, useEffect, useId, useRef, useState } from "react";
// Grundaussehen wie bei den anderen Spielwiesen.
import base from "@/components/gym/SvgCirclePlayground/SvgCirclePlayground.module.css";
import { SvgCodeBlock } from "@/components/gym/SvgCode/SvgCode";
import group from "@/components/gym/SvgPlaygroundGroups.module.css";
import style from "./SvgPathPlayground.module.css";

const SIZE = 200;

/**
 * Beschreibung aller Pfadbefehle, um die es in Vektoria geht.
 *
 * `args` beschreibt die Zahlen, die nach dem Buchstaben stehen — genau in
 * dieser Reihenfolge. `axis` sagt, ob die Zahl eine x- oder y-Koordinate ist
 * (nur diese werden beim Umschalten absolut/relativ umgerechnet).
 */
export const PATH_COMMANDS = {
  M: {
    name: "moveto — Stift absetzen",
    syntax: "M x y",
    hint: "Setzt den Stift an einen Punkt, ohne zu zeichnen. Jeder Pfad beginnt mit M.",
    args: [
      { label: "x", axis: "x" },
      { label: "y", axis: "y" },
    ],
  },
  L: {
    name: "lineto — Linie zeichnen",
    syntax: "L x y",
    hint: "Zieht eine gerade Linie vom aktuellen Punkt zu (x, y).",
    args: [
      { label: "x", axis: "x" },
      { label: "y", axis: "y" },
    ],
  },
  H: {
    name: "horizontal — waagrecht",
    syntax: "H x",
    hint: "Zieht eine waagrechte Linie. y bleibt gleich, deshalb braucht es nur eine Zahl.",
    args: [{ label: "x", axis: "x" }],
  },
  V: {
    name: "vertical — senkrecht",
    syntax: "V y",
    hint: "Zieht eine senkrechte Linie. x bleibt gleich, deshalb braucht es nur eine Zahl.",
    args: [{ label: "y", axis: "y" }],
  },
  Z: {
    name: "closepath — Weg schliessen",
    syntax: "Z",
    hint: "Schliesst den Weg: Linie zurück zum letzten M. Z hat keine Zahlen.",
    args: [],
  },
  C: {
    name: "curveto — kubische Kurve",
    syntax: "C x1 y1 x2 y2 x y",
    hint: "Kurve mit zwei Griffen: (x1, y1) zieht am Anfang, (x2, y2) am Ende. Der Endpunkt ist (x, y).",
    args: [
      { label: "x1", axis: "x", control: 0 },
      { label: "y1", axis: "y", control: 0 },
      { label: "x2", axis: "x", control: 1 },
      { label: "y2", axis: "y", control: 1 },
      { label: "x", axis: "x" },
      { label: "y", axis: "y" },
    ],
  },
  Q: {
    name: "quadratic — einfache Kurve",
    syntax: "Q x1 y1 x y",
    hint: "Kurve mit nur einem Griff: (x1, y1) zieht die Kurve, (x, y) ist der Endpunkt.",
    args: [
      { label: "x1", axis: "x", control: 0 },
      { label: "y1", axis: "y", control: 0 },
      { label: "x", axis: "x" },
      { label: "y", axis: "y" },
    ],
  },
  A: {
    name: "arc — Kreisbogen",
    syntax: "A rx ry rot gross sweep x y",
    hint: "Bogen auf einer Ellipse: rx/ry sind die Radien, rot dreht sie, die beiden Schalter 0/1 wählen einen der vier möglichen Bögen.",
    args: [
      { label: "rx", min: 0, max: SIZE },
      { label: "ry", min: 0, max: SIZE },
      { label: "rot", min: 0, max: 360 },
      { label: "gross", flag: true },
      { label: "sweep", flag: true },
      { label: "x", axis: "x" },
      { label: "y", axis: "y" },
    ],
  },
};

const DEFAULT_PATH = "M 20 160 L 70 60 L 120 140 L 180 40";

/** Zerlegt eine Pfadangabe (`d`) in einzelne Befehle. */
export function parsePath(d) {
  const commands = [];
  for (const match of d.matchAll(
    /([MmLlHhVvZzCcQqAa])([^MmLlHhVvZzCcQqAa]*)/g,
  )) {
    const args = (match[2].match(/-?\d*\.?\d+/g) ?? []).map(Number);
    commands.push({ cmd: match[1], args });
  }
  return commands;
}

/** Baut aus den Befehlen wieder den Wert von `d`. */
export function pathToString(commands) {
  return commands
    .map(({ cmd, args }) => [cmd, ...args].join(" "))
    .join(" ")
    .trim();
}

/** Ist der Befehl relativ geschrieben (Kleinbuchstabe)? */
function isRelative(cmd) {
  return cmd === cmd.toLowerCase();
}

function spec(cmd) {
  return PATH_COMMANDS[cmd.toUpperCase()];
}

/**
 * Rechnet für jeden Befehl die tatsächlichen Punkte auf der Leinwand aus.
 *
 * Nötig, weil relative Befehle (Kleinbuchstaben) vom vorherigen Punkt aus
 * zählen — und weil die Griffe gezeichnet werden sollen.
 */
function computeGeometry(commands) {
  let cursorX = 0;
  let cursorY = 0;
  let startX = 0;
  let startY = 0;

  return commands.map(({ cmd, args }) => {
    const upper = cmd.toUpperCase();
    const rel = isRelative(cmd) && upper !== "Z";
    const ox = rel ? cursorX : 0;
    const oy = rel ? cursorY : 0;
    const from = [cursorX, cursorY];

    const n = (index) => args[index] ?? 0;
    let end = [cursorX, cursorY];
    const controls = [];

    switch (upper) {
      case "M":
        end = [ox + n(0), oy + n(1)];
        startX = end[0];
        startY = end[1];
        break;
      case "L":
        end = [ox + n(0), oy + n(1)];
        break;
      case "H":
        end = [ox + n(0), cursorY];
        break;
      case "V":
        end = [cursorX, oy + n(0)];
        break;
      case "Z":
        end = [startX, startY];
        break;
      case "C":
        controls.push([ox + n(0), oy + n(1)], [ox + n(2), oy + n(3)]);
        end = [ox + n(4), oy + n(5)];
        break;
      case "Q":
        controls.push([ox + n(0), oy + n(1)]);
        end = [ox + n(2), oy + n(3)];
        break;
      case "A":
        end = [ox + n(5), oy + n(6)];
        break;
      default:
        break;
    }

    cursorX = end[0];
    cursorY = end[1];
    return { from, end, controls, origin: [ox, oy], rel };
  });
}

/**
 * SvgPathPlayground — Spielwiese für die Syntax von `<path d="…">`.
 *
 * Alles dreht sich um den Aufbau der Pfadangabe: Buchstabe, dann die Zahlen,
 * die dazugehören. Befehle können hinzugefügt, ausgewählt, verschoben und
 * zwischen gross (absolut) und klein (relativ) umgeschaltet werden. Der Code
 * darunter zeigt jeden Befehl als eigenen Block — der ausgewählte ist
 * hervorgehoben.
 *
 * @param {string} [initial] Startpfad als `d`-String
 * @param {string[]} [commands] Befehle, die angeboten werden
 * @param {boolean} [allowRelative] Umschalter gross/klein anzeigen
 */
export default function SvgPathPlayground({
  initial = DEFAULT_PATH,
  commands: allowed = ["M", "L", "H", "V", "Z"],
  allowRelative = true,
  className = "",
}) {
  const [items, setItems] = useState(() => parsePath(initial));
  const [selected, setSelected] = useState(0);
  const [fill, setFill] = useState("none");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [helpers, setHelpers] = useState(true);
  const [drag, setDrag] = useState(null);

  const svgRef = useRef(null);
  const titleId = useId();

  const geometry = computeGeometry(items);
  const d = pathToString(items);
  const current = items[selected] ?? items[0];
  const currentGeometry = geometry[selected] ?? geometry[0];

  // Mausposition in Koordinaten der Leinwand umrechnen.
  const toCanvas = useCallback((event) => {
    const box = svgRef.current?.getBoundingClientRect();
    if (!box) return null;
    return [
      clamp(Math.round(((event.clientX - box.left) / box.width) * SIZE)),
      clamp(Math.round(((event.clientY - box.top) / box.height) * SIZE)),
    ];
  }, []);

  /** Setzt eine einzelne Zahl eines Befehls. */
  const setArg = useCallback((index, argIndex, value) => {
    setItems((list) =>
      list.map((item, i) =>
        i === index
          ? {
              ...item,
              args: item.args.map((arg, a) => (a === argIndex ? value : arg)),
            }
          : item,
      ),
    );
  }, []);

  /** Legt einen Punkt (Endpunkt oder Griff) auf eine absolute Position. */
  const setPoint = useCallback(
    (index, argX, argY, [x, y]) => {
      const geo = computeGeometry(items)[index];
      if (!geo) return;
      const [ox, oy] = geo.origin;
      setItems((list) =>
        list.map((item, i) => {
          if (i !== index) return item;
          const args = [...item.args];
          if (argX != null) args[argX] = x - ox;
          if (argY != null) args[argY] = y - oy;
          return { ...item, args };
        }),
      );
    },
    [items],
  );

  useEffect(() => {
    if (!drag) return undefined;

    function onMove(event) {
      const position = toCanvas(event);
      if (position) setPoint(drag.index, drag.argX, drag.argY, position);
    }
    function onUp() {
      setDrag(null);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [drag, toCanvas, setPoint]);

  /** Fügt hinter dem ausgewählten Befehl einen neuen ein. */
  function addCommand(letter) {
    const geo = geometry[selected] ?? { end: [100, 100] };
    const [x, y] = geo.end;
    const args = defaultArgs(letter, clamp(x + 40), clamp(y - 40));
    const next = [...items];
    next.splice(selected + 1, 0, { cmd: letter, args });
    setItems(next);
    setSelected(selected + 1);
  }

  function removeCommand() {
    if (items.length <= 1) return;
    setItems(items.filter((_, i) => i !== selected));
    setSelected(Math.max(0, selected - 1));
  }

  /** Schaltet einen Befehl zwischen absolut (gross) und relativ (klein). */
  function toggleCase() {
    const geo = geometry[selected];
    if (!geo || !current) return;
    const toRelative = !isRelative(current.cmd);
    const [fx, fy] = geo.from;
    const args = current.args.map((value, index) => {
      const info = spec(current.cmd)?.args[index];
      if (!info?.axis) return value;
      const base = info.axis === "x" ? fx : fy;
      return toRelative ? value - base : value + base;
    });
    setItems(
      items.map((item, i) =>
        i === selected
          ? {
              ...item,
              cmd: toRelative ? item.cmd.toLowerCase() : item.cmd.toUpperCase(),
              args,
            }
          : item,
      ),
    );
  }

  function onHandleKeyDown(event, index, argX, argY, point) {
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
    setSelected(index);
    setPoint(index, argX, argY, [
      clamp(point[0] + move[0]),
      clamp(point[1] + move[1]),
    ]);
  }

  const info = current ? spec(current.cmd) : null;

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
            aria-labelledby={titleId}
          >
            <title id={titleId}>Pfad-Spielwiese</title>

            {helpers && <Grid />}

            <path
              d={d}
              fill={fill}
              stroke="#282828"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {helpers &&
              geometry.map((geo, index) => {
                const item = items[index];
                const letter = item.cmd.toUpperCase();
                if (letter === "Z") return null;
                const isActive = index === selected;
                const argsInfo = spec(item.cmd)?.args ?? [];

                // Die Zahlen, die zum Endpunkt gehören.
                const endX = argsInfo.findIndex(
                  (a) => a.axis === "x" && a.control == null,
                );
                const endY = argsInfo.findIndex(
                  (a) => a.axis === "y" && a.control == null,
                );

                return (
                  // biome-ignore lint/suspicious/noArrayIndexKey: Befehle sind über ihre Reihenfolge definiert
                  <g key={index}>
                    {/* Griffe der Kurvenbefehle */}
                    {geo.controls.map((point, c) => {
                      const cx = argsInfo.findIndex(
                        (a) => a.axis === "x" && a.control === c,
                      );
                      const cy = argsInfo.findIndex(
                        (a) => a.axis === "y" && a.control === c,
                      );
                      const anchor = c === 0 ? geo.from : geo.end;
                      return (
                        // biome-ignore lint/suspicious/noArrayIndexKey: Griffe sind über ihre Reihenfolge definiert
                        <g key={c}>
                          <line
                            x1={anchor[0]}
                            y1={anchor[1]}
                            x2={point[0]}
                            y2={point[1]}
                            stroke={isActive ? "#8f3f71" : "#bdae93"}
                            strokeWidth="1"
                            strokeDasharray="3 3"
                          />
                          <Handle
                            point={point}
                            kind="control"
                            active={isActive}
                            label={`Griff ${c + 1} von Befehl ${index + 1}`}
                            onDown={() => {
                              setSelected(index);
                              setDrag({ index, argX: cx, argY: cy });
                            }}
                            onKeyDown={(event) =>
                              onHandleKeyDown(event, index, cx, cy, point)
                            }
                          />
                        </g>
                      );
                    })}

                    <Handle
                      point={geo.end}
                      kind="end"
                      active={isActive}
                      number={index + 1}
                      label={`Endpunkt von Befehl ${index + 1} (${item.cmd})`}
                      onDown={() => {
                        setSelected(index);
                        setDrag({
                          index,
                          argX: endX >= 0 ? endX : null,
                          argY: endY >= 0 ? endY : null,
                        });
                      }}
                      onKeyDown={(event) =>
                        onHandleKeyDown(
                          event,
                          index,
                          endX >= 0 ? endX : null,
                          endY >= 0 ? endY : null,
                          geo.end,
                        )
                      }
                    />
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
            <span className={style.dim}>
              {'<svg width="200" height="200">\n'}
            </span>
            {"  "}
            <span className={style.punct}>&lt;</span>
            <span className={style.tag}>path</span>
            {"\n    "}
            <span className={style.attr}>d</span>
            <span className={style.punct}>="</span>
            {items.map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Befehle sind über ihre Reihenfolge definiert
              <span key={index}>
                <button
                  type="button"
                  className={`${style.token} ${
                    index === selected ? style.tokenActive : ""
                  }`}
                  onClick={() => setSelected(index)}
                  title={spec(item.cmd)?.syntax}
                >
                  <span className={style.letter}>{item.cmd}</span>
                  {item.args.length > 0 && ` ${item.args.join(" ")}`}
                </button>
                {index < items.length - 1 ? " " : null}
              </span>
            ))}
            <span className={style.punct}>"</span>
            {"\n    "}
            <span className={style.attr}>fill</span>
            <span className={style.punct}>="</span>
            <span className={style.value}>{fill}</span>
            <span className={style.punct}>"</span>
            {"\n    "}
            <span className={style.attr}>stroke</span>
            <span className={style.punct}>="</span>
            <span className={style.value}>#282828</span>
            <span className={style.punct}>"</span>
            {"\n    "}
            <span className={style.attr}>stroke-width</span>
            <span className={style.punct}>="</span>
            <span className={style.value}>{strokeWidth}</span>
            <span className={style.punct}>"</span>
            {"\n  "}
            <span className={style.punct}>/&gt;</span>
            {"\n"}
            <span className={style.dim}>{"</svg>"}</span>
          </SvgCodeBlock>

          {info && (
            <p className={style.hint}>
              <code className={style.syntax}>
                {isRelative(current.cmd)
                  ? info.syntax[0].toLowerCase() + info.syntax.slice(1)
                  : info.syntax}
              </code>{" "}
              — {info.hint}
              {isRelative(current.cmd) && (
                <>
                  {" "}
                  <strong>
                    Kleiner Buchstabe: Die Zahlen zählen ab dem letzten Punkt.
                  </strong>
                </>
              )}
            </p>
          )}
        </div>
      </div>

      {/* --- Steuerung --- */}
      <div className={group.groups}>
        {/* Gruppe 1: die Liste der Befehle */}
        <fieldset className={group.group}>
          <legend className={group.groupTitle}>Befehle</legend>
          <p className={group.groupHint}>
            Ein Pfad ist eine Kette von Befehlen. Klicke einen an, um ihn zu
            bearbeiten.
          </p>

          <ol className={style.list}>
            {items.map((item, index) => (
              <li
                // biome-ignore lint/suspicious/noArrayIndexKey: Befehle sind über ihre Reihenfolge definiert
                key={index}
              >
                <button
                  type="button"
                  className={`${style.chip} ${
                    index === selected ? style.chipActive : ""
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <span className={style.chipNumber}>{index + 1}</span>
                  <span className={style.letter}>{item.cmd}</span>
                  {item.args.length > 0 && (
                    <span className={style.chipArgs}>
                      {item.args.join(" ")}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ol>

          <div className={style.buttons}>
            {allowed.map((letter) => (
              <button
                key={letter}
                type="button"
                className={style.button}
                title={PATH_COMMANDS[letter]?.syntax}
                onClick={() => addCommand(letter)}
              >
                + {letter}
              </button>
            ))}
            <button
              type="button"
              className={style.button}
              onClick={removeCommand}
              disabled={items.length <= 1}
            >
              − Befehl
            </button>
            <button
              type="button"
              className={style.button}
              onClick={() => {
                setItems(parsePath(initial));
                setSelected(0);
              }}
            >
              zurücksetzen
            </button>
          </div>
        </fieldset>

        {/* Gruppe 2: die Zahlen des ausgewählten Befehls */}
        <fieldset className={`${group.group} ${style.argGroup}`}>
          <legend className={group.groupTitle}>
            Befehl {selected + 1} — {current?.cmd}
          </legend>
          <p className={group.groupHint}>
            {info ? info.name : ""}
            {info && info.args.length === 0
              ? " — dieser Befehl braucht keine Zahlen."
              : ""}
          </p>

          {allowRelative && current && current.cmd.toUpperCase() !== "Z" && (
            <div className={base.control}>
              <span className={base.controlLabel}>
                Schreibweise
                <span className={base.controlValue}>
                  {isRelative(current.cmd) ? "relativ" : "absolut"}
                </span>
              </span>
              <div className={style.buttons}>
                <button
                  type="button"
                  className={`${style.button} ${
                    !isRelative(current.cmd) ? style.buttonActive : ""
                  }`}
                  onClick={() => {
                    if (isRelative(current.cmd)) toggleCase();
                  }}
                >
                  {current.cmd.toUpperCase()} — absolut
                </button>
                <button
                  type="button"
                  className={`${style.button} ${
                    isRelative(current.cmd) ? style.buttonActive : ""
                  }`}
                  onClick={() => {
                    if (!isRelative(current.cmd)) toggleCase();
                  }}
                >
                  {current.cmd.toLowerCase()} — relativ
                </button>
              </div>
            </div>
          )}

          {current &&
            (spec(current.cmd)?.args ?? []).map((argInfo, argIndex) => {
              const value = current.args[argIndex] ?? 0;
              const key = `${argInfo.label}-${argIndex}`;

              if (argInfo.flag) {
                return (
                  <div className={base.control} key={key}>
                    <span className={base.controlLabel}>
                      {argInfo.label} — Schalter
                      <span className={base.controlValue}>{value}</span>
                    </span>
                    <div className={style.buttons}>
                      {[0, 1].map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`${style.button} ${
                            value === option ? style.buttonActive : ""
                          }`}
                          onClick={() => setArg(selected, argIndex, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              const relative = isRelative(current.cmd) && argInfo.axis;
              const min = argInfo.min ?? (relative ? -SIZE : 0);
              const max = argInfo.max ?? SIZE;

              return (
                <label className={base.control} key={key}>
                  <span className={base.controlLabel}>
                    {argInfo.label}
                    {argInfo.control != null ? " — Griff" : ""}
                    <span className={base.controlValue}>{value}</span>
                  </span>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step="1"
                    value={value}
                    onChange={(event) =>
                      setArg(selected, argIndex, Number(event.target.value))
                    }
                  />
                </label>
              );
            })}

          {currentGeometry && current?.cmd.toUpperCase() !== "Z" && (
            <p className={group.groupHint}>
              Endet bei{" "}
              <code>
                {Math.round(currentGeometry.end[0])} /{" "}
                {Math.round(currentGeometry.end[1])}
              </code>{" "}
              auf der Leinwand.
            </p>
          )}
        </fieldset>

        {/* Gruppe 3: nur das Nötigste zum Aussehen */}
        <fieldset className={group.group}>
          <legend className={group.groupTitle}>Aussehen</legend>
          <p className={group.groupHint}>
            Ein Pfad wird wie jede andere Form gefüllt und umrandet.
          </p>

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

          <div className={base.control}>
            <span className={base.controlLabel}>
              fill — Füllfarbe
              <span className={base.controlValue}>{fill}</span>
            </span>
            <div className={style.buttons}>
              {[
                { label: "none", value: "none" },
                { label: "Gelb", value: "#fabd2f" },
                { label: "Blau", value: "#83a598" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`${style.button} ${
                    fill === option.value ? style.buttonActive : ""
                  }`}
                  onClick={() => setFill(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </fieldset>
      </div>

      <figcaption className={base.caption}>
        Lies den Pfad wie einen Satz: <strong>Buchstabe</strong>, dann die{" "}
        <strong>Zahlen</strong>, die dazugehören — und zwar immer in derselben
        Reihenfolge.
      </figcaption>
    </figure>
  );
}

/** Sinnvolle Startwerte für einen neu eingefügten Befehl. */
function defaultArgs(letter, x, y) {
  switch (letter.toUpperCase()) {
    case "M":
    case "L":
      return [x, y];
    case "H":
      return [x];
    case "V":
      return [y];
    case "Z":
      return [];
    case "C":
      return [clamp(x - 60), clamp(y - 40), clamp(x - 20), clamp(y + 40), x, y];
    case "Q":
      return [clamp(x - 40), clamp(y - 60), x, y];
    case "A":
      return [50, 50, 0, 0, 1, x, y];
    default:
      return [];
  }
}

function clamp(value) {
  return Math.min(SIZE, Math.max(0, value));
}

/** Ein verschiebbarer Punkt in der Grafik. */
function Handle({ point, kind, active, number, label, onDown, onKeyDown }) {
  const [x, y] = point;
  const color = kind === "control" ? "#8f3f71" : active ? "#fb4934" : "#282828";

  return (
    // biome-ignore lint/a11y/useSemanticElements: in SVG gibt es kein <button>
    <g
      role="button"
      tabIndex={0}
      aria-label={label}
      className={style.handle}
      onPointerDown={onDown}
      onKeyDown={onKeyDown}
    >
      <circle cx={x} cy={y} r="8" fill="rgba(40,40,40,0.08)" />
      {kind === "control" ? (
        <rect
          x={x - 4}
          y={y - 4}
          width="8"
          height="8"
          fill={active ? color : "#d3869b"}
        />
      ) : (
        <circle cx={x} cy={y} r={active ? 6 : 4} fill={color} />
      )}
      {number != null && (
        <text
          x={x + 9}
          y={y - 9}
          fontSize={active ? 12 : 10}
          fontWeight={active ? "bold" : "normal"}
          fill={active ? "#fb4934" : "#504945"}
        >
          {number}
        </text>
      )}
    </g>
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
