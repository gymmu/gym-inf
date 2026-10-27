import { Editor } from "@monaco-editor/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { scanShapes } from "@/components/gym/SvgChallenge/svgCompare";
import { setupSvgLanguage } from "@/components/gym/SvgChallenge/svgMonaco";
import {
  ARENA,
  DAMAGE,
  geometryOf,
  hitNormal,
  insideArena,
  makeLevel,
  POINT_LIMITS,
  REQUIRED_TAGS,
  reflect,
} from "./arenaShapes";
import style from "./SvgShapeArena.module.css";

/**
 * SvgShapeArena — Minigolf gegen den Formen-Boss.
 *
 * Spielprinzip (ohne Zeitdruck):
 *   • Jedes Level stellt eine zufällige Form hin und legt Ball und
 *     Abschussrichtung fest.
 *   • Die Spielerin baut im Editor die fehlenden Formen, sodass am Ende
 *     genau eine <line>, eine <polyline> und ein <polygon> in der Arena
 *     stehen.
 *   • Beim Abschuss rollt der Ball los und zerstört jede Form, die er trifft
 *     — jeder Treffer kostet den Boss Kraft.
 *   • Berührt der Ball den Rand der Arena, zerspringt er und das Level ist
 *     zu Ende.
 *   • Ziel: alle drei Formen mit einem Abschuss treffen.
 */

const BALL_RADIUS = 8;
const BALL_SPEED = 90; // Pixel pro Sekunde
const MAX_TIME = 25; // Sekunden, dann bleibt der Ball liegen
const TRAIL_MAX = 400;

const START_CODE = `<svg width="${ARENA.width}" height="${ARENA.height}">
  <!-- Baue hier die fehlenden Formen. Beispiel:
  <polyline points="40,40 120,80 60,160" fill="none"
            stroke="#8ec07c" stroke-width="4" /> -->

</svg>`;

/** Ergänzt im Code der Spielerin eine viewBox (sonst skaliert nichts mit). */
function withViewBox(code) {
  const text = String(code ?? "");
  if (/<svg\b[^>]*\bviewBox=/i.test(text)) return text;
  return text.replace(
    /<svg\b/i,
    `<svg viewBox="0 0 ${ARENA.width} ${ARENA.height}" preserveAspectRatio="none"`,
  );
}

/** Prüft den Code: Welche der drei Formen stehen schon richtig da? */
function inspect(code, preset) {
  // Kommentare zählen nicht — sonst würde das Beispiel im Startcode mitzählen.
  const clean = String(code ?? "").replace(/<!--[\s\S]*?-->/g, "");
  const written = scanShapes(clean)
    .filter((shape) => REQUIRED_TAGS.includes(shape.tag))
    .map((shape) => ({
      ...shape,
      points: geometryOf(shape.tag, shape.attrs),
    }));

  const items = REQUIRED_TAGS.map((tag) => {
    if (preset.tag === tag) {
      return { tag, ok: true, note: "vom Level vorgegeben", preset: true };
    }

    const found = written.filter((shape) => shape.tag === tag);
    if (found.length === 0) {
      return { tag, ok: false, note: "fehlt noch" };
    }
    if (found.length > 1) {
      return { tag, ok: false, note: `${found.length}× vorhanden — nur eine!` };
    }

    const shape = found[0];
    if (!shape.points) {
      return { tag, ok: false, note: "Koordinaten unvollständig" };
    }

    const limit = POINT_LIMITS[tag];
    if (shape.points.length < limit.min || shape.points.length > limit.max) {
      return {
        tag,
        ok: false,
        note: `${shape.points.length} Punkte — erlaubt sind ${
          limit.min === limit.max ? limit.min : `${limit.min}–${limit.max}`
        }`,
      };
    }
    if (!insideArena(shape.points)) {
      return { tag, ok: false, note: "liegt ausserhalb der Arena" };
    }

    return { tag, ok: true, note: `${shape.points.length} Punkte`, shape };
  });

  return { items, ready: items.every((item) => item.ok) };
}

export default function SvgShapeArena({
  bossHp: bossHpMax = 150,
  className = "",
  onVictory,
}) {
  const [level, setLevel] = useState(() => makeLevel(1));
  const [code, setCode] = useState(START_CODE);
  const [phase, setPhase] = useState("aim"); // aim | rolling | done | victory
  const [objects, setObjects] = useState([]);
  const [bossHp, setBossHp] = useState(bossHpMax);
  const [shots, setShots] = useState(0);
  const [runDamage, setRunDamage] = useState(0);
  const [report, setReport] = useState(null);
  const [showPoints, setShowPoints] = useState(true);
  const [fast, setFast] = useState(false);

  const ballRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const ballNode = useRef(null);
  const trailNode = useRef(null);
  const trail = useRef([]);
  const objectsRef = useRef([]);
  const damageRef = useRef(0);
  const bestRef = useRef(0); // bester Schaden in diesem Level
  const clock = useRef(0);
  const fastRef = useRef(false);

  useEffect(() => {
    objectsRef.current = objects;
  }, [objects]);

  useEffect(() => {
    fastRef.current = fast;
  }, [fast]);

  const check = useMemo(
    () => inspect(code, level.preset),
    [code, level.preset],
  );

  // --- Abschuss ------------------------------------------------------------

  const launch = useCallback(() => {
    if (!check.ready) return;

    const mine = check.items
      .filter((item) => !item.preset)
      .map((item) => ({
        id: `user-${item.tag}`,
        tag: item.tag,
        points: item.shape.points,
        attrs: item.shape.attrs,
        damage: DAMAGE[item.tag],
        hit: false,
      }));

    setObjects([
      {
        id: `preset-${level.preset.id}`,
        tag: level.preset.tag,
        points: level.preset.points,
        attrs: level.preset.attrs,
        damage: DAMAGE[level.preset.tag],
        hit: false,
        preset: true,
      },
      ...mine,
    ]);

    ballRef.current = {
      x: level.ball.x,
      y: level.ball.y,
      vx: Math.cos(level.ball.angle) * BALL_SPEED,
      vy: Math.sin(level.ball.angle) * BALL_SPEED,
    };
    trail.current = [[level.ball.x, level.ball.y]];
    clock.current = 0;
    damageRef.current = 0;
    setRunDamage(0);
    setReport(null);
    setShots((value) => value + 1);
    setPhase("rolling");
  }, [check, level]);

  const finish = useCallback(
    (success, reason = "done") => {
      const gained = Math.max(0, damageRef.current - bestRef.current);
      bestRef.current = Math.max(bestRef.current, damageRef.current);

      let nextHp = bossHp;
      if (gained > 0) {
        nextHp = Math.max(0, bossHp - gained);
        setBossHp(nextHp);
      }

      setReport({
        success,
        reason,
        damage: damageRef.current,
        gained,
        hits: objectsRef.current.filter((item) => item.hit).length,
      });
      setPhase(nextHp <= 0 ? "victory" : "done");
      if (nextHp <= 0) onVictory?.();
    },
    [bossHp, onVictory],
  );

  // --- Physik --------------------------------------------------------------

  useEffect(() => {
    if (phase !== "rolling") return undefined;

    let frame = 0;
    let last = performance.now();

    const tick = (now) => {
      const real = Math.min(0.05, (now - last) / 1000);
      last = now;
      const dt = real * (fastRef.current ? 3 : 1);
      clock.current += dt;

      const ball = ballRef.current;
      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;

      // Rand: Der Ball zerspringt, das Level ist zu Ende.
      if (
        ball.x <= BALL_RADIUS ||
        ball.x >= ARENA.width - BALL_RADIUS ||
        ball.y <= BALL_RADIUS ||
        ball.y >= ARENA.height - BALL_RADIUS
      ) {
        ball.x = Math.min(
          ARENA.width - BALL_RADIUS,
          Math.max(BALL_RADIUS, ball.x),
        );
        ball.y = Math.min(
          ARENA.height - BALL_RADIUS,
          Math.max(BALL_RADIUS, ball.y),
        );
        ballNode.current?.setAttribute("cx", String(ball.x));
        ballNode.current?.setAttribute("cy", String(ball.y));
        finish(false, "wall");
        return;
      }

      // Formen
      for (const object of objectsRef.current) {
        if (object.hit) continue;
        const normal = hitNormal(ball, object, BALL_RADIUS);
        if (!normal) continue;

        const bounced = reflect(ball.vx, ball.vy, normal.nx, normal.ny);
        ball.vx = bounced.vx;
        ball.vy = bounced.vy;
        ball.x += normal.nx * 4;
        ball.y += normal.ny * 4;

        damageRef.current += object.damage;
        setRunDamage(damageRef.current);
        setObjects((list) =>
          list.map((item) =>
            item.id === object.id ? { ...item, hit: true } : item,
          ),
        );
        objectsRef.current = objectsRef.current.map((item) =>
          item.id === object.id ? { ...item, hit: true } : item,
        );
        break;
      }

      // Spur
      const path = trail.current;
      const lastPoint = path[path.length - 1];
      if (
        !lastPoint ||
        Math.hypot(ball.x - lastPoint[0], ball.y - lastPoint[1]) > 4
      ) {
        path.push([ball.x, ball.y]);
        if (path.length > TRAIL_MAX) path.shift();
        trailNode.current?.setAttribute(
          "points",
          path.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" "),
        );
      }

      ballNode.current?.setAttribute("cx", String(ball.x));
      ballNode.current?.setAttribute("cy", String(ball.y));

      const allHit = objectsRef.current.every((item) => item.hit);
      if (allHit) {
        finish(true);
        return;
      }
      if (clock.current >= MAX_TIME) {
        finish(false, "timeout");
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, finish]);

  // --- Level-Steuerung -----------------------------------------------------

  const retry = useCallback(() => {
    setObjects([]);
    setReport(null);
    trail.current = [];
    trailNode.current?.setAttribute("points", "");
    setPhase("aim");
  }, []);

  const nextLevel = useCallback(
    (number) => {
      bestRef.current = 0;
      setLevel(makeLevel(number));
      setCode(START_CODE);
      setObjects([]);
      setReport(null);
      trail.current = [];
      trailNode.current?.setAttribute("points", "");
      setPhase("aim");
      if (number === 1) {
        setBossHp(bossHpMax);
        setShots(0);
      }
    },
    [bossHpMax],
  );

  const rolling = phase === "rolling";
  const showCodeDrawing = phase === "aim";
  const bossPercent = (bossHp / bossHpMax) * 100;

  // Pfeil für die Abschussrichtung
  const aim = useMemo(() => {
    const length = 46;
    return {
      x1: level.ball.x,
      y1: level.ball.y,
      x2: level.ball.x + Math.cos(level.ball.angle) * length,
      y2: level.ball.y + Math.sin(level.ball.angle) * length,
    };
  }, [level.ball]);

  return (
    <section className={`${style.arena} ${className}`}>
      <header className={style.hud}>
        <div className={style.bar}>
          <span className={style.barLabel}>🛡️ Boss</span>
          <div className={style.track}>
            <div
              className={`${style.fill} ${style.boss}`}
              style={{ width: `${bossPercent}%` }}
            />
          </div>
          <span className={style.barValue}>{bossHp}</span>
        </div>

        <div className={style.stats}>
          <span>Level {level.number}</span>
          <span>Würfe: {shots}</span>
          <span>Schaden im Wurf: {runDamage}</span>
        </div>
      </header>

      <div className={style.body}>
        {/* --- Arena ------------------------------------------------------ */}
        <figure className={style.stageWrap}>
          <figcaption className={style.panelTitle}>Arena</figcaption>
          <div
            className={style.stage}
            style={{ aspectRatio: `${ARENA.width} / ${ARENA.height}` }}
          >
            <ArenaGrid />

            {/* Vorgegebene Form + Koordinaten (nur beim Zielen sichtbar) */}
            {showCodeDrawing && (
              <svg
                className={style.layer}
                viewBox={`0 0 ${ARENA.width} ${ARENA.height}`}
                aria-label="Vorgegebene Form"
              >
                <title>Vorgegebene Form</title>
                <ShapeElement shape={level.preset} />
                {showPoints &&
                  level.preset.points.map(([x, y]) => (
                    <text
                      key={`${x}-${y}`}
                      x={x + 5}
                      y={y - 5}
                      fontSize="9"
                      fill="#ebdbb2"
                    >
                      {x},{y}
                    </text>
                  ))}
              </svg>
            )}

            {/* Zeichnung der Spielerin (nur beim Zielen aus dem Code) */}
            {showCodeDrawing && (
              <div
                className={style.layer}
                // Der Code kommt aus dem Editor daneben (rein lokal).
                // biome-ignore lint/security/noDangerouslySetInnerHtml: Lernumgebung
                dangerouslySetInnerHTML={{ __html: withViewBox(code) }}
              />
            )}

            {/* Während und nach dem Wurf: die Objekte aus der Simulation */}
            {!showCodeDrawing && (
              <svg
                className={style.layer}
                viewBox={`0 0 ${ARENA.width} ${ARENA.height}`}
                aria-label="Formen im Spiel"
              >
                <title>Formen im Spiel</title>
                {objects.map((object) =>
                  object.hit ? null : (
                    <ShapeElement key={object.id} shape={object} />
                  ),
                )}
              </svg>
            )}

            {/* Ball, Spur und Zielrichtung */}
            <svg
              className={style.layer}
              viewBox={`0 0 ${ARENA.width} ${ARENA.height}`}
              aria-label="Ball"
            >
              <title>Ball</title>
              <polyline
                ref={trailNode}
                points=""
                fill="none"
                stroke="rgba(235,219,178,0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 4"
              />
              {phase === "aim" && (
                <>
                  <line
                    x1={aim.x1}
                    y1={aim.y1}
                    x2={aim.x2}
                    y2={aim.y2}
                    stroke="#ebdbb2"
                    strokeWidth="2"
                  />
                  <circle cx={aim.x2} cy={aim.y2} r="3" fill="#ebdbb2" />
                </>
              )}
              <circle
                ref={ballNode}
                style={{
                  display: report?.reason === "wall" ? "none" : undefined,
                }}
                cx={phase === "aim" ? level.ball.x : ballRef.current.x}
                cy={phase === "aim" ? level.ball.y : ballRef.current.y}
                r={BALL_RADIUS}
                fill="#ebdbb2"
                stroke="#1d2021"
                strokeWidth="1.5"
              />
            </svg>

            {(phase === "done" || phase === "victory") && report && (
              <div className={style.overlay}>
                {phase === "victory" ? (
                  <>
                    <h3>🏆 Der Boss ist besiegt!</h3>
                    <p>
                      Geschafft in {shots} Würfen über {level.number} Level.
                    </p>
                    <button
                      type="button"
                      className={style.button}
                      onClick={() => nextLevel(1)}
                    >
                      Nochmals spielen
                    </button>
                  </>
                ) : (
                  <>
                    <h3>
                      {report.success
                        ? "🎯 Alle drei getroffen!"
                        : report.reason === "wall"
                          ? `💥 Ball am Rand zerbrochen — ${report.hits} von ${objects.length} getroffen`
                          : `${report.hits} von ${objects.length} getroffen`}
                    </h3>
                    <p>
                      Schaden in diesem Wurf: {report.damage}
                      {report.gained > 0
                        ? ` · davon neu für den Boss: ${report.gained}`
                        : " · kein neuer Schaden (schon besser gewesen)"}
                    </p>
                    <div className={style.overlayButtons}>
                      <button
                        type="button"
                        className={style.buttonGhost}
                        onClick={retry}
                      >
                        Formen anpassen
                      </button>
                      <button
                        type="button"
                        className={style.button}
                        onClick={() => nextLevel(level.number + 1)}
                      >
                        Nächstes Level
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </figure>

        {/* --- Editor ----------------------------------------------------- */}
        <div className={style.editorPanel}>
          <div className={style.panelTitle}>Dein Code</div>
          <div className={style.editor}>
            <Editor
              language="xml"
              theme="vs-dark"
              value={code}
              height="100%"
              beforeMount={setupSvgLanguage}
              onChange={(value) => setCode(value ?? "")}
              options={{
                readOnly: rolling,
                domReadOnly: rolling,
                minimap: { enabled: false },
                lineNumbers: "off",
                scrollBeyondLastLine: false,
                automaticLayout: true,
                fontSize: 14,
                tabSize: 2,
                wordWrap: "on",
                colorDecorators: true,
                renderLineHighlight: "none",
                quickSuggestions: { other: true, strings: true },
              }}
            />
          </div>

          <ul className={style.checklist}>
            {check.items.map((item) => (
              <li
                key={item.tag}
                className={item.ok ? style.good : style.pending}
              >
                {item.ok ? "✓" : "○"} <code>&lt;{item.tag}&gt;</code>{" "}
                <span className={style.note}>{item.note}</span>{" "}
                <span className={style.damage}>{DAMAGE[item.tag]} Schaden</span>
              </li>
            ))}
          </ul>

          <div className={style.actions}>
            <button
              type="button"
              className={style.button}
              onClick={launch}
              disabled={!check.ready || rolling}
            >
              {rolling ? "Der Ball rollt …" : "Ball loslassen"}
            </button>
            {rolling && (
              <button
                type="button"
                className={style.buttonGhost}
                onClick={() => setFast((value) => !value)}
              >
                {fast ? "Normal" : "Schnell ⏩"}
              </button>
            )}
            {!rolling && (
              <button
                type="button"
                className={style.buttonGhost}
                onClick={() => nextLevel(level.number + 1)}
              >
                Neues Level
              </button>
            )}
            <label className={style.toggle}>
              <input
                type="checkbox"
                checked={showPoints}
                onChange={(event) => setShowPoints(event.target.checked)}
              />
              Koordinaten
            </label>
          </div>

          <p className={style.help}>
            Der Ball startet beim hellen Punkt und fliegt in Pfeilrichtung. Jede
            Form, die er berührt, wird zerstört und kostet den Boss Kraft —
            berührt er aber den Rand, zerspringt er und das Level ist zu Ende.
            Platziere deine Formen so, dass er alle drei erwischt.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Zeichnet eine Form (Vorgabe oder Spielerin) als React-Element. */
function ShapeElement({ shape }) {
  const props = { ...shape.attrs };
  if (shape.preset) props.strokeDasharray = "6 5";
  if (shape.tag === "line") return <line {...props} />;
  if (shape.tag === "polyline") return <polyline {...props} />;
  return <polygon {...props} />;
}

/** Gitter im Hintergrund, damit Koordinaten ablesbar sind. */
function ArenaGrid() {
  const lines = [];
  for (let x = 20; x < ARENA.width; x += 20) {
    const strong = x % 100 === 0;
    lines.push(
      <line
        key={`v${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={ARENA.height}
        stroke={strong ? "rgba(235,219,178,0.35)" : "rgba(235,219,178,0.12)"}
        strokeWidth={strong ? 0.8 : 0.5}
      />,
    );
    if (strong) {
      lines.push(
        <text key={`vt${x}`} x={x + 2} y={10} fontSize="8" fill="#a89984">
          {x}
        </text>,
      );
    }
  }
  for (let y = 20; y < ARENA.height; y += 20) {
    const strong = y % 100 === 0;
    lines.push(
      <line
        key={`h${y}`}
        x1={0}
        y1={y}
        x2={ARENA.width}
        y2={y}
        stroke={strong ? "rgba(235,219,178,0.35)" : "rgba(235,219,178,0.12)"}
        strokeWidth={strong ? 0.8 : 0.5}
      />,
    );
    if (strong) {
      lines.push(
        <text key={`ht${y}`} x={2} y={y - 3} fontSize="8" fill="#a89984">
          {y}
        </text>,
      );
    }
  }

  return (
    <svg
      className={style.layer}
      viewBox={`0 0 ${ARENA.width} ${ARENA.height}`}
      aria-hidden="true"
      focusable="false"
    >
      {lines}
    </svg>
  );
}
