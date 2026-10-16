import { useState } from "react";
import styles from "./graph-search.module.css";
import MiniBoard from "./MiniBoard.jsx";
import { manhattan, misplaced, PRESETS, successors } from "./puzzle.js";

/**
 * Zeigt einen Zustand und alle Zustände, die daraus in einem Zug
 * entstehen — also genau das, was `successors(state)` liefert.
 *
 * Ein Klick auf einen Nachfolger macht diesen zum neuen Zustand:
 * so wandert man von Hand durch den Zustandsraum.
 */
export default function Successors({
  start = PRESETS[2].state,
  showHeuristics = false,
  title = "Ein Zustand und seine Nachfolger",
}) {
  const [state, setState] = useState(start);
  const kinder = successors(state);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.puzzleLayout}>
        <div>
          <p className={styles.columnTitle}>Zustand</p>
          <div
            className={styles.board}
            style={{
              gridTemplateColumns: "repeat(3, 44px)",
              gridTemplateRows: "repeat(3, 44px)",
            }}
          >
            {state.map((wert, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
                key={index}
                className={[styles.tile, wert === 0 ? styles.tileEmpty : ""]
                  .filter(Boolean)
                  .join(" ")}
                style={{ fontSize: "1.1rem" }}
              >
                {wert === 0 ? "" : wert}
              </div>
            ))}
          </div>
          <div className={styles.statGrid} style={{ marginTop: "0.75rem" }}>
            <span className={styles.statKey}>key(state)</span>
            <span className={styles.statValue}>{state.join(",")}</span>
            <span className={styles.statKey}>Nachfolger</span>
            <span className={styles.statValue}>{kinder.length}</span>
            {showHeuristics && (
              <>
                <span className={styles.statKey}>Manhattan</span>
                <span className={styles.statValue}>{manhattan(state)}</span>
                <span className={styles.statKey}>falsche Plätze</span>
                <span className={styles.statValue}>{misplaced(state)}</span>
              </>
            )}
          </div>
        </div>

        <div className={styles.panel}>
          <p className={styles.columnTitle}>
            successors(state) — klicken Sie einen Nachfolger an
          </p>
          <div className={styles.frontierList}>
            {kinder.map((edge) => (
              <button
                key={edge.action}
                type="button"
                className={styles.frontierItem}
                style={{ cursor: "pointer", textAlign: "left" }}
                onClick={() => setState(edge.state)}
              >
                <MiniBoard state={edge.state} />
                <span className={styles.frontierAction}>{edge.action}</span>
                <span className={styles.frontierMeta}>
                  Kosten {edge.cost}
                  {showHeuristics ? ` · h=${manhattan(edge.state)}` : ""}
                </span>
              </button>
            ))}
          </div>
          <div className={styles.controls} style={{ marginTop: "0.75rem" }}>
            <button
              type="button"
              className={styles.button}
              onClick={() => setState(start)}
            >
              zurücksetzen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
