import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Turtle from "@/components/gym/Turtle/Turtle";
import { toSegments, walkState } from "@/components/gym/TurtleWalk/TurtleWalk";
import {
  CELL,
  cellCenter,
  chainPath,
  COLS,
  CURVE_LEVEL,
  FIELD,
  FRAME,
  hitsFrame,
  hitsObstacle,
  makeMaze,
  reachedGoal,
  ROWS,
} from "./mazeLevel";
import style from "./SvgPathMaze.module.css";

/**
 * SvgPathMaze — Zwischenboss «Der Pfadmeister».
 *
 * Der Pfadmeister stellt ein Labyrinth aus zufällig platzierten Hindernissen
 * auf. Die Spielerin schreibt eine Weganweisung (`d`), Pfadi läuft sie ab.
 *
 *   • Die Farbe des Pfades spielt keine Rolle — nur der Weg zählt.
 *   • Berührt Pfadi ein Hindernis oder den Rahmen, ist der Versuch vorbei.
 *   • Erreicht sie das Ziel, verliert der Pfadmeister Kraft.
 *
 * Auch Sprünge mit gehobenem Stift (`M`) zählen als Laufen: Pfadi kann sich
 * nicht durch die Hindernisse hindurchmogeln.
 */

/** Wie fein der Weg auf Treffer abgesucht wird (in Pixeln). */
const SCAN_STEP = 1.5;

/** Schaden pro gelöstem Labyrinth. */
const DAMAGE = 25;

const round = (n) => Math.round(n * 10) / 10;

/** Lage der Stiftspitze in Pfadis Grafik (Prozent) — wie bei TurtleWalk. */
const PEN_X = 79.8;
const PEN_Y = 84.7;

/** Startcode: das erste `M` steht schon da, es führt zu Pfadis Startpunkt. */
function startCode(maze) {
  return `M ${maze.start.x} ${maze.start.y}\n`;
}

/**
 * Läuft den Weg rechnerisch ab und sucht den ersten Treffer und die erste
 * Berührung des Ziels.
 *
 * Zurück kommen Strecken (vom Anfang der Weganweisung aus gemessen), damit die
 * Animation an derselben Stelle anhalten kann.
 */
function analyse(segments, maze) {
  let travelled = 0;
  let goalAt = null;
  let hitAt = null;
  let hit = null;

  for (const seg of segments) {
    // Das erste `M` ist nur der Weg zum Startpunkt — es wird nicht geprüft.
    if (seg.index === 0 && seg.cmd.toUpperCase() === "M") {
      travelled += seg.length;
      continue;
    }

    const pts = seg.points;
    for (let i = 1; i < pts.length; i += 1) {
      const a = pts[i - 1];
      const b = pts[i];
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const steps = Math.max(1, Math.ceil(len / SCAN_STEP));

      for (let s = 1; s <= steps; s += 1) {
        const t = s / steps;
        const point = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
        const at = travelled + len * t;

        if (goalAt === null && reachedGoal(point, maze.goal)) goalAt = at;

        if (hitsFrame(point)) {
          hitAt = at;
          hit = { reason: "frame" };
          break;
        }
        const blocker = maze.obstacles.find((obstacle) =>
          hitsObstacle(point, obstacle),
        );
        if (blocker) {
          hitAt = at;
          hit = { reason: "obstacle", obstacle: blocker };
          break;
        }
      }

      travelled += len;
      if (hitAt !== null) break;
    }
    if (hitAt !== null) break;
  }

  return { goalAt, hitAt, hit };
}

export default function SvgPathMaze({
  bossHp: bossHpMax = 100,
  className = "",
  onVictory,
}) {
  const [maze, setMaze] = useState(() => makeMaze(1));
  const [code, setCode] = useState(() =>
    startCode({ start: cellCenter(0, ROWS - 1) }),
  );
  const [phase, setPhase] = useState("plan"); // plan | walk | done | victory
  const [travelled, setTravelled] = useState(0);
  const [result, setResult] = useState(null);
  const [bossHp, setBossHp] = useState(bossHpMax);
  const [tries, setTries] = useState(0);
  const [solved, setSolved] = useState(false); // dieses Level schon geschafft?
  const [showCoords, setShowCoords] = useState(true);
  const [showGhost, setShowGhost] = useState(true);
  const [speed, setSpeed] = useState(110);

  const travelledRef = useRef(0);
  const speedRef = useRef(speed);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  // --- Weg auswerten -------------------------------------------------------

  const segments = useMemo(() => toSegments(code), [code]);
  const total = useMemo(
    () => segments.reduce((sum, seg) => sum + seg.length, 0),
    [segments],
  );

  const first = segments[0];
  const startsRight =
    !!first &&
    first.cmd.toUpperCase() === "M" &&
    Math.hypot(first.to[0] - maze.start.x, first.to[1] - maze.start.y) < 1;

  const scan = useMemo(() => analyse(segments, maze), [segments, maze]);

  /** Enthält die Weganweisung einen Bogen? (Q, C, S, T oder A) */
  const hasCurve = useMemo(() => /[QqCcSsTtAa]/.test(code), [code]);
  const curveMissing = maze.requireCurve && !hasCurve;

  /**
   * Für die Darstellung wird der Weg zum Startpunkt ausgeblendet: Pfadi steht
   * dort schon, der Sprung von 0/0 soll gar nicht erst gezeigt werden.
   */
  const headLength = first?.cmd.toUpperCase() === "M" ? first.length : 0;
  const drawSegments = useMemo(() => {
    if (!segments.length || segments[0].cmd.toUpperCase() !== "M") {
      return segments;
    }
    const [head, ...rest] = segments;
    return [
      {
        ...head,
        from: head.to,
        points: [head.to, head.to],
        length: 0,
        cumulative: 0,
      },
      ...rest.map((seg) => ({
        ...seg,
        cumulative: seg.cumulative - head.length,
      })),
    ];
  }, [segments]);

  /** Wo hält Pfadi an und wie geht der Versuch aus? */
  const run = useMemo(() => {
    const { goalAt, hitAt, hit } = scan;
    if (goalAt !== null && (hitAt === null || goalAt <= hitAt)) {
      return { stop: goalAt, outcome: "goal" };
    }
    if (hitAt !== null) return { stop: hitAt, outcome: "crash", hit };
    return { stop: total, outcome: "short" };
  }, [scan, total]);

  const setPosition = useCallback((value) => {
    travelledRef.current = value;
    setTravelled(value);
  }, []);

  // --- Animation -----------------------------------------------------------

  const finish = useCallback(() => {
    setPhase("done");
    if (run.outcome !== "goal") {
      setResult({ outcome: run.outcome, hit: run.hit });
      return;
    }

    const gained = solved ? 0 : DAMAGE;
    const nextHp = Math.max(0, bossHp - gained);
    setBossHp(nextHp);
    setSolved(true);
    setResult({ outcome: "goal", gained });
    if (nextHp <= 0) {
      setPhase("victory");
      onVictory?.();
    }
  }, [bossHp, onVictory, run, solved]);

  useEffect(() => {
    if (phase !== "walk") return undefined;

    let frame = 0;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const next = Math.min(
        travelledRef.current + dt * speedRef.current,
        run.stop,
      );
      travelledRef.current = next;
      setTravelled(next);

      if (next >= run.stop - 0.001) {
        finish();
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, run.stop, finish]);

  // --- Steuerung -----------------------------------------------------------

  const walk = useCallback(() => {
    if (!startsRight || curveMissing) return;
    // Pfadi steht schon am Startpunkt: der Weg dorthin wird übersprungen.
    setPosition(first?.length ?? 0);
    setResult(null);
    setTries((value) => value + 1);
    setPhase("walk");
  }, [curveMissing, first, setPosition, startsRight]);

  const reset = useCallback(() => {
    setPosition(0);
    setResult(null);
    setPhase("plan");
  }, [setPosition]);

  const newMaze = useCallback(
    (level, restart = false) => {
      const next = makeMaze(level);
      setMaze(next);
      setCode(startCode(next));
      setPosition(0);
      setResult(null);
      setSolved(false);
      setPhase("plan");
      if (restart) {
        setBossHp(bossHpMax);
        setTries(0);
      }
    },
    [bossHpMax, setPosition],
  );

  // --- Darstellung ---------------------------------------------------------

  const state = walkState(drawSegments, Math.max(0, travelled - headLength));
  // Hilfslinien ohne Länge (der versteckte Sprung zum Start) wegräumen.
  const guide = state.guide.replace(/M (\S+) (\S+) L \1 \2\s*/g, "").trim();
  const walking = phase === "walk";
  const bossPercent = (bossHp / bossHpMax) * 100;

  // Pfadi aufrecht halten und die Drehung begrenzen (wie bei TurtleWalk).
  const flipped = Math.abs(state.heading) > 90;
  const rawAngle = flipped ? state.heading + 180 : state.heading;
  const angle = Math.max(-40, Math.min(40, rawAngle));

  const activeSegment = segments.find((seg) => seg.index === state.active);
  const noteLine = activeSegment
    ? `${activeSegment.cmd} ${activeSegment.args.join(" ")}`.trim()
    : "Start";

  // Vor dem Loslaufen steht Pfadi auf dem Startpunkt des Labyrinths.
  const pfadiPoint =
    phase === "plan" ? [maze.start.x, maze.start.y] : state.point;

  return (
    <section className={`${style.maze} ${className}`}>
      <header className={style.hud}>
        <div className={style.bar}>
          <span className={style.barLabel}>🧭 Pfadmeister</span>
          <div className={style.track}>
            <div className={style.fill} style={{ width: `${bossPercent}%` }} />
          </div>
          <span className={style.barValue}>{bossHp}</span>
        </div>

        <div className={style.stats}>
          <span>Labyrinth {maze.number}</span>
          <span>Hindernisse: {maze.features}</span>
          {maze.gates > 0 && <span>Schleusen: {maze.gates}</span>}
          <span>Versuche: {tries}</span>
        </div>
      </header>

      <div className={style.body}>
        {/* --- Spielfeld --------------------------------------------------- */}
        <figure className={style.stageWrap}>
          <figcaption className={style.panelTitle}>Labyrinth</figcaption>
          <div
            className={style.stage}
            style={{ aspectRatio: `${FIELD.width} / ${FIELD.height}` }}
          >
            <svg
              className={style.layer}
              viewBox={`0 0 ${FIELD.width} ${FIELD.height}`}
              role="img"
              aria-label="Labyrinth des Pfadmeisters"
            >
              <title>Labyrinth des Pfadmeisters</title>

              {/* Gitternetz der Zellen */}
              <g className={style.grid}>
                {Array.from(
                  { length: COLS - 1 },
                  (_, i) => (i + 1) * CELL,
                ).map((x) => (
                  <line key={`v${x}`} x1={x} y1={0} x2={x} y2={FIELD.height} />
                ))}
                {Array.from({ length: ROWS - 1 }, (_, i) => (i + 1) * CELL).map(
                  (y) => (
                    <line key={`h${y}`} x1={0} y1={y} x2={FIELD.width} y2={y} />
                  ),
                )}
              </g>

              {/* Koordinaten der Zellenmitten */}
              {showCoords &&
                Array.from({ length: ROWS }, (_, row) =>
                  Array.from({ length: COLS }, (_, col) => {
                    const c = cellCenter(col, row);
                    return (
                      <text
                        key={`c${col}-${row}`}
                        className={style.coord}
                        x={c.x}
                        y={c.y - CELL / 2 + 12}
                      >
                        {c.x} / {c.y}
                      </text>
                    );
                  }),
                )}

              {/* Ziel */}
              <g className={style.goal}>
                <circle cx={maze.goal.x} cy={maze.goal.y} r={maze.goal.r} />
                <text x={maze.goal.x} y={maze.goal.y}>
                  ★
                </text>
              </g>

              {/* Start */}
              <circle
                className={style.start}
                cx={maze.start.x}
                cy={maze.start.y}
                r="8"
              />


              {/* Hindernisse */}
              {maze.obstacles.map((obstacle) => {
                const crashed =
                  result?.hit?.obstacle?.id === obstacle.id &&
                  result.outcome === "crash";
                const variant = obstacle.gate ? style.obstacleGate : "";
                const cls = `${style.obstacle} ${variant} ${
                  crashed ? style.obstacleHit : ""
                }`;

                if (obstacle.kind === "chain") {
                  return (
                    <path
                      key={obstacle.id}
                      className={`${style.obstacleChain} ${variant} ${
                        crashed ? style.obstacleChainHit : ""
                      }`}
                      d={chainPath(obstacle)}
                      strokeWidth={obstacle.r * 2}
                    />
                  );
                }

                return obstacle.kind === "circle" ? (
                  <circle
                    key={obstacle.id}
                    className={cls}
                    cx={obstacle.cx}
                    cy={obstacle.cy}
                    r={obstacle.r}
                  />
                ) : (
                  <rect
                    key={obstacle.id}
                    className={cls}
                    x={obstacle.x}
                    y={obstacle.y}
                    width={obstacle.width}
                    height={obstacle.height}
                    rx="4"
                  />
                );
              })}

              {/* Tore in den Sperrmauern — hier muss Pfadi durch */}
              {maze.doors.map((door, i) => (
                <g className={style.door} key={`door-${door.x}-${door.y}`}>
                  <circle cx={door.x} cy={door.y} r="6" />
                  <text x={door.x} y={door.y - 11}>
                    Tor {i + 1}: {door.x} / {door.y}
                  </text>
                </g>
              ))}

              {/* Vorschau des ganzen Weges */}
              {showGhost && phase !== "walk" && (
                <path className={style.ghost} d={code} fill="none" />
              )}

              {/* Weg mit gehobenem Stift */}
              {guide && <path className={style.guide} d={guide} />}

              {/* Was Pfadi schon gelaufen ist */}
              {state.drawn && <path className={style.walked} d={state.drawn} />}

              {/* Rahmen um das Spielfeld */}
              <rect
                className={`${style.frame} ${
                  result?.hit?.reason === "frame" ? style.frameHit : ""
                }`}
                x={FRAME / 2}
                y={FRAME / 2}
                width={FIELD.width - FRAME}
                height={FIELD.height - FRAME}
                strokeWidth={FRAME}
              />
            </svg>

            {/* Pfadi läuft über das Feld */}
            <div
              className={style.turtleLayer}
              style={{
                left: `${(pfadiPoint[0] / FIELD.width) * 100}%`,
                top: `${(pfadiPoint[1] / FIELD.height) * 100}%`,
                transform: `translate(-${PEN_X}%, -${PEN_Y}%) rotate(${angle.toFixed(1)}deg) scaleX(${flipped ? -1 : 1})`,
                transformOrigin: `${PEN_X}% ${PEN_Y}%`,
              }}
            >
              <Turtle
                variant="small"
                size={78}
                trail={false}
                animate={!walking}
                penUp={state.penUp}
                mood={
                  result?.outcome === "crash"
                    ? "surprised"
                    : state.penUp
                      ? "surprised"
                      : "happy"
                }
                note={[noteLine]}
                noteTitle="d ="
                label="Pfadi im Labyrinth"
              />
            </div>

            {(phase === "done" || phase === "victory") && result && (
              <div className={style.overlay}>
                {phase === "victory" ? (
                  <>
                    <h3>🏆 Der Pfadmeister ist besiegt!</h3>
                    <p>
                      Du hast dich durch {maze.number} Labyrinthe gefunden —
                      mit {tries} Versuchen.
                    </p>
                    <button
                      type="button"
                      className={style.button}
                      onClick={() => newMaze(1, true)}
                    >
                      Nochmals spielen
                    </button>
                  </>
                ) : (
                  <>
                    <h3>
                      {result.outcome === "goal"
                        ? "★ Ziel erreicht!"
                        : result.outcome === "crash"
                          ? result.hit?.reason === "frame"
                            ? "💥 Pfadi ist in den Rahmen gelaufen"
                            : `💥 Pfadi ist in ein ${result.hit?.obstacle?.label ?? "Hindernis"} gelaufen`
                          : "🤷 Der Weg endet irgendwo im Labyrinth"}
                    </h3>
                    <p>
                      {result.outcome === "goal"
                        ? result.gained > 0
                          ? `Der Pfadmeister verliert ${result.gained} Kraft.`
                          : "Dieses Labyrinth hattest du schon geschafft."
                        : "Verlängere oder verschiebe deinen Weg und versuche es nochmals."}
                    </p>
                    <div className={style.overlayButtons}>
                      <button
                        type="button"
                        className={style.buttonGhost}
                        onClick={reset}
                      >
                        Weg anpassen
                      </button>
                      <button
                        type="button"
                        className={style.button}
                        onClick={() =>
                          newMaze(
                            result.outcome === "goal"
                              ? maze.number + 1
                              : maze.number,
                          )
                        }
                      >
                        {result.outcome === "goal"
                          ? "Nächstes Labyrinth"
                          : "Neues Labyrinth"}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </figure>

        {/* --- Weganweisung ------------------------------------------------ */}
        <div className={style.panel}>
          <div className={style.panelTitle}>Deine Weganweisung (d)</div>

          <textarea
            className={style.input}
            value={code}
            spellCheck="false"
            readOnly={walking}
            onChange={(event) => {
              setCode(event.target.value);
              if (phase !== "plan") reset();
            }}
            aria-label="Weganweisung d"
          />

          <ul className={style.checklist}>
            <li className={startsRight ? style.good : style.bad}>
              {startsRight ? "✓" : "○"} Start bei{" "}
              <code>
                M {maze.start.x} {maze.start.y}
              </code>
            </li>
            <li className={scan.goalAt !== null ? style.good : style.info}>
              {scan.goalAt !== null ? "✓" : "○"} Ziel bei{" "}
              <code>
                {maze.goal.x} / {maze.goal.y}
              </code>{" "}
              berührt
            </li>
            <li className={scan.hitAt === null ? style.good : style.bad}>
              {scan.hitAt === null ? "✓" : "✗"} Weg frei von Hindernissen und
              Rahmen
            </li>
            {maze.requireCurve && (
              <li className={hasCurve ? style.good : style.bad}>
                {hasCurve ? "✓" : "○"} Mindestens ein Bogen (<code>Q</code>{" "}
                oder <code>C</code>) — durch die Schleuse führt keine Gerade
              </li>
            )}
            <li className={style.info}>
              ↦ Weglänge: {round(total)} · Position {round(state.point[0])} /{" "}
              {round(state.point[1])}
            </li>
          </ul>

          <div className={style.actions}>
            <button
              type="button"
              className={style.button}
              onClick={walk}
              disabled={!startsRight || walking || curveMissing}
            >
              {walking ? "Pfadi läuft …" : "▶ Pfadi loslaufen lassen"}
            </button>
            <button
              type="button"
              className={style.buttonGhost}
              onClick={reset}
              disabled={walking}
            >
              ⟲ Zurück zum Start
            </button>
            <button
              type="button"
              className={style.buttonGhost}
              onClick={() => newMaze(maze.number)}
              disabled={walking}
            >
              🎲 Neues Labyrinth
            </button>
          </div>

          <div className={style.options}>
            <label className={style.toggle}>
              <input
                type="checkbox"
                checked={showCoords}
                onChange={(event) => setShowCoords(event.target.checked)}
              />
              Koordinaten
            </label>
            <label className={style.toggle}>
              <input
                type="checkbox"
                checked={showGhost}
                onChange={(event) => setShowGhost(event.target.checked)}
              />
              Weg vorher zeigen
            </label>
            <label className={style.slider}>
              Tempo
              <input
                type="range"
                min="40"
                max="260"
                step="10"
                value={speed}
                onChange={(event) => setSpeed(Number(event.target.value))}
              />
            </label>
          </div>

          <p className={style.help}>
            Pfadi startet beim hellen Punkt und muss den <strong>Stern</strong>{" "}
            erreichen. Die <strong>Farbe</strong> des Pfades ist egal — nur der
            Weg zählt. Berührt sie ein Hindernis oder den Rahmen, ist der
            Versuch vorbei. Auch Sprünge mit gehobenem Stift (<code>M</code>)
            zählen als Laufen: Durch die Hindernisse kommt sie so nicht.
          </p>

          {maze.requireCurve && (
            <p className={style.help}>
              Ab Labyrinth {CURVE_LEVEL} stellt der Pfadmeister{" "}
              eine <strong>Schleuse</strong> auf: zwei Sperrmauern quer durchs
              ganze Feld, deren <strong>Tore versetzt</strong> sind (gelb
              markiert, mit Koordinaten). Pfadi muss durch das erste Tor, im
              Gang dazwischen zur Seite <strong>schwingen</strong> und durch
              das zweite Tor wieder hinaus — geradeaus geht das nie. Schreibe
              darum mindestens ein <code>Q</code> in deine Weganweisung.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
