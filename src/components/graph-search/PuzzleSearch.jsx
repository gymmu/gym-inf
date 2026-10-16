import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./graph-search.module.css";
import MiniBoard from "./MiniBoard.jsx";
import { PRESETS } from "./puzzle.js";
import SearchTree from "./SearchTree.jsx";
import { createSearch, HEURISTICS, STRATEGIES } from "./searchEngine.js";

const MAX_FRONTIER_ANZEIGE = 40;
const MAX_VISITED_ANZEIGE = 60;

/**
 * Die Graphensuche Schritt für Schritt.
 *
 * Props:
 *   strategies   welche Algorithmen zur Auswahl stehen
 *   start        Startstellung
 *   speed        Millisekunden pro Schritt beim Abspielen
 */
export default function PuzzleSearch({
  strategies = ["bfs", "dfs", "ucs"],
  start = PRESETS[1].state,
  title = "Graphensuche Schritt für Schritt",
  speed = 220,
  maxExpansions = 6000,
}) {
  const [strategy, setStrategy] = useState(strategies[0]);
  const [heuristik, setHeuristik] = useState("manhattan");
  const [startState, setStartState] = useState(start);
  const [snapshot, setSnapshot] = useState(null);
  const [spielt, setSpielt] = useState(false);
  const engineRef = useRef(null);

  const info = STRATEGIES[strategy];

  const reset = useCallback(() => {
    const engine = createSearch(startState, strategy, {
      heuristic: HEURISTICS[info.useHeuristic ? heuristik : "keine"],
      maxExpansions,
    });
    engineRef.current = engine;
    setSnapshot(engine.snapshot());
    setSpielt(false);
  }, [startState, strategy, heuristik, info.useHeuristic, maxExpansions]);

  // Bei jeder Änderung der Einstellungen neu beginnen.
  useEffect(() => {
    reset();
  }, [reset]);

  const schritt = useCallback((anzahl = 1) => {
    const engine = engineRef.current;
    if (!engine) return;
    setSnapshot(anzahl === 1 ? engine.step() : engine.run(anzahl));
  }, []);

  // Abspielen
  useEffect(() => {
    if (!spielt) return undefined;
    const id = setInterval(() => {
      const next = engineRef.current?.step();
      if (!next) return;
      setSnapshot(next);
      // Am Rundenwechsel der IDS kurz anhalten, sonst sieht man den Neustart nicht.
      if (next.neueRunde) setSpielt(false);
      if (next.status !== "läuft" && next.status !== "bereit") setSpielt(false);
    }, speed);
    return () => clearInterval(id);
  }, [spielt, speed]);

  const fertig = useMemo(
    () =>
      snapshot &&
      ["gefunden", "erschöpft", "abgebrochen"].includes(snapshot.status),
    [snapshot],
  );

  if (!snapshot) return null;

  const naechsterIndex = naechsterKnoten(snapshot.frontier, strategy);
  const neueIds = new Set(snapshot.children.map((n) => n.id));

  // Bei DFS passiert alles am Ende der Liste — also zeigen wir das Ende.
  const ueberlauf = Math.max(
    0,
    snapshot.frontier.length - MAX_FRONTIER_ANZEIGE,
  );
  const istIDS = strategy === "ids";
  const lifo = strategy === "dfs" || istIDS;
  const offset = lifo ? ueberlauf : 0;
  const sichtbareFrontier = lifo
    ? snapshot.frontier.slice(offset)
    : snapshot.frontier.slice(0, MAX_FRONTIER_ANZEIGE);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      {/* ── Bedienung ────────────────────────────────────────────── */}
      <div className={styles.controls}>
        <span className={styles.label}>Algorithmus</span>
        <select
          className={styles.select}
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          {strategies.map((s) => (
            <option key={s} value={s}>
              {STRATEGIES[s].label}
            </option>
          ))}
        </select>

        {info.useHeuristic && (
          <>
            <span className={styles.label}>Heuristik</span>
            <select
              className={styles.select}
              value={heuristik}
              onChange={(e) => setHeuristik(e.target.value)}
            >
              <option value="manhattan">Manhattan-Distanz</option>
              <option value="falschePlaetze">falsche Plätze</option>
              <option value="keine">keine (h = 0)</option>
            </select>
          </>
        )}

        <span className={styles.label}>Start</span>
        <select
          className={styles.select}
          value={PRESETS.findIndex((p) => p.state.join() === startState.join())}
          onChange={(e) => setStartState(PRESETS[Number(e.target.value)].state)}
        >
          {PRESETS.map((p, i) => (
            <option key={p.label} value={i}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => schritt(1)}
          disabled={fertig}
        >
          1 Schritt
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => schritt(10)}
          disabled={fertig}
        >
          10 Schritte
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setSpielt(!spielt)}
          disabled={fertig}
        >
          {spielt ? "Pause" : "abspielen"}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => schritt(Number.POSITIVE_INFINITY)}
          disabled={fertig}
        >
          bis zum Ende
        </button>
        <button type="button" className={styles.button} onClick={reset}>
          zurücksetzen
        </button>
      </div>

      {/* ── Meldung und Zahlen ───────────────────────────────────── */}
      <p
        className={[
          styles.message,
          snapshot.status === "gefunden" ? styles.messageDone : "",
          snapshot.neueRunde ? styles.messageRound : "",
          snapshot.status === "erschöpft" || snapshot.status === "abgebrochen"
            ? styles.messageFail
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {snapshot.message}
      </p>

      <div className={styles.statGrid}>
        <span className={styles.statKey}>Grenze nimmt</span>
        <span className={styles.statValue}>
          {info.pick} — {info.frontier}
        </span>
        {istIDS && (
          <>
            <span className={styles.statKey}>Runde</span>
            <span className={styles.statValue}>
              {snapshot.limit + 1} — Tiefenlimit {snapshot.limit}
            </span>
          </>
        )}
        <span className={styles.statKey}>expandiert</span>
        <span className={styles.statValue}>{snapshot.stats.expanded}</span>
        <span className={styles.statKey}>erzeugt</span>
        <span className={styles.statValue}>{snapshot.stats.generated}</span>
        <span className={styles.statKey}>in der Grenze</span>
        <span className={styles.statValue}>
          {snapshot.stats.frontierSize} (max. {snapshot.stats.maxFrontier})
        </span>
        <span className={styles.statKey}>besucht</span>
        <span className={styles.statValue}>{snapshot.stats.visitedSize}</span>
      </div>

      {/* ── Drei Spalten ─────────────────────────────────────────── */}
      {/* ── Rundenleiste der iterativen Tiefensuche ──────────────── */}
      {istIDS && (
        <div className={styles.rounds}>
          <span className={styles.roundsHint}>
            IDS sucht mehrmals: Jede Runde fängt wieder beim Startzustand an,
            darf aber eine Stufe tiefer gehen.
          </span>
          <div className={styles.roundsList}>
            {snapshot.runden.map((r, i) => (
              <span
                key={r.limit}
                className={[
                  styles.roundChip,
                  i === snapshot.runden.length - 1 ? styles.roundChipAktiv : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                Runde {r.limit + 1} · Tiefe ≤ {r.limit} · {r.expanded} exp.
                {i < snapshot.runden.length - 1 ? " · kein Ziel" : ""}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={styles.searchLayout}>
        <div className={styles.column}>
          <p className={styles.columnTitle}>
            Grenze ({snapshot.stats.frontierSize})
          </p>
          <p className={styles.frontierHint}>
            {strategy === "bfs" &&
              "BFS nimmt den obersten Eintrag — den ältesten."}
            {strategy === "dfs" &&
              "DFS nimmt den untersten Eintrag — den neuesten."}
            {strategy === "ids" &&
              "IDS nimmt wie DFS den untersten Eintrag — aber nur bis zum Tiefenlimit."}
            {!lifo &&
              strategy !== "bfs" &&
              `Gelb markiert ist der Knoten mit ${info.pick}.`}
          </p>
          <div className={styles.frontierList}>
            {snapshot.frontier.length === 0 && (
              <span className={styles.empty}>leer</span>
            )}
            {ueberlauf > 0 && lifo && (
              <span className={styles.empty}>
                … {ueberlauf} weitere darüber
              </span>
            )}
            {sichtbareFrontier.map((node, i) => (
              <div
                key={node.id}
                className={[
                  styles.frontierItem,
                  i + offset === naechsterIndex ? styles.frontierItemNext : "",
                  neueIds.has(node.id) ? styles.frontierItemNew : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <MiniBoard state={node.state} />
                <span className={styles.frontierAction}>
                  {node.action ?? "Start"}
                </span>
                <span className={styles.frontierMeta}>
                  g={node.g}
                  {info.useHeuristic ? ` h=${node.h} f=${node.g + node.h}` : ""}
                </span>
              </div>
            ))}
            {ueberlauf > 0 && !lifo && (
              <span className={styles.empty}>
                … {ueberlauf} weitere darunter
              </span>
            )}
          </div>

          <p className={styles.columnTitle} style={{ marginTop: "1rem" }}>
            Besucht ({snapshot.stats.visitedSize})
          </p>
          <div className={styles.visitedGrid}>
            {snapshot.stats.visitedSize === 0 && (
              <span className={styles.empty}>noch nichts</span>
            )}
            {[...snapshot.visited].slice(-MAX_VISITED_ANZEIGE).map((k) => (
              <MiniBoard key={k} state={k.split(",").map(Number)} title={k} />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <p className={styles.columnTitle}>
            Suchbaum{istIDS ? ` — Runde ${snapshot.limit + 1}` : ""}
          </p>
          {istIDS && (
            <p className={styles.frontierHint}>
              Der Baum zeigt nur die aktuelle Runde — bei jedem Rundenwechsel
              beginnt er neu beim Startzustand.
            </p>
          )}
          <SearchTree snapshot={snapshot} />

          {snapshot.path && (
            <>
              <p className={styles.columnTitle} style={{ marginTop: "1rem" }}>
                Lösungsweg ({snapshot.path.length - 1} Züge)
              </p>
              <div className={styles.pathStrip}>
                {snapshot.path.map((node) => (
                  <div key={node.id} className={styles.pathStep}>
                    <MiniBoard state={node.state} />
                    <span>{node.action ?? "Start"}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/** Welcher Eintrag der Grenze kommt als nächstes dran? */
function naechsterKnoten(frontier, strategy) {
  if (frontier.length === 0) return -1;
  if (strategy === "bfs") return 0;
  if (strategy === "dfs" || strategy === "ids") return frontier.length - 1;
  const wert = (n) =>
    strategy === "ucs" ? n.g : strategy === "greedy" ? n.h : n.g + n.h;
  let best = 0;
  for (let i = 1; i < frontier.length; i++) {
    if (wert(frontier[i]) < wert(frontier[best])) best = i;
  }
  return best;
}
