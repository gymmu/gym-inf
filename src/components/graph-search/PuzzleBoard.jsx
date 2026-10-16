import { useState } from "react";
import styles from "./graph-search.module.css";
import {
  GOAL,
  isGoal,
  isSolvable,
  manhattan,
  misplaced,
  move,
  PRESETS,
  scramble,
  successors,
  tileDistance,
} from "./puzzle.js";

/**
 * Das interaktive 3x3-Schiebepuzzle.
 *
 * Props:
 *   initial        Startzustand (Array mit 9 Zahlen)
 *   showHeuristics zeigt h-Werte und Abstände an
 *   title          Überschrift
 */
export default function PuzzleBoard({
  initial = PRESETS[3].state,
  showHeuristics = false,
  title = "Schiebepuzzle — probieren Sie es aus",
}) {
  const [start, setStart] = useState(initial);
  const [state, setState] = useState(initial);
  const [moves, setMoves] = useState([]);
  const [hints, setHints] = useState(showHeuristics);

  const geloest = isGoal(state);
  const loesbar = isSolvable(state);
  const beweglich = new Set(successors(state).map((e) => e.tile));

  const klick = (index) => {
    if (geloest) return;
    const next = move(state, index);
    if (!next) return;
    setMoves([...moves, `${state[index]} → ${richtung(state, index)}`]);
    setState(next);
  };

  const neu = (neuerStart) => {
    setStart(neuerStart);
    setState(neuerStart);
    setMoves([]);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <div className={styles.controls}>
        <span className={styles.label}>Stellung</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            className={styles.button}
            onClick={() => neu(p.state)}
          >
            {p.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.button}
          onClick={() => neu(scramble(40))}
        >
          mischen
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => neu(start)}
          disabled={moves.length === 0}
        >
          zurücksetzen
        </button>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={hints}
            onChange={(e) => setHints(e.target.checked)}
          />
          Abstände zeigen
        </label>
      </div>

      <div className={styles.puzzleLayout}>
        <div className={styles.board}>
          {state.map((wert, index) => {
            const amZiel = wert !== 0 && wert === GOAL[index];
            const kannZiehen = beweglich.has(wert) && !geloest;
            const abstand = tileDistance(state, index);
            return (
              <button
                // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
                key={index}
                type="button"
                className={[
                  styles.tile,
                  wert === 0 ? styles.tileEmpty : "",
                  kannZiehen ? styles.tileMovable : "",
                  amZiel ? styles.tileCorrect : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => klick(index)}
                disabled={wert === 0}
              >
                {wert === 0 ? "" : wert}
                {hints && wert !== 0 && abstand > 0 && (
                  <span className={styles.tileBadge}>{abstand}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className={styles.panel}>
          {geloest && (
            <p className={styles.solved}>Gelöst! {moves.length} Züge.</p>
          )}
          {!loesbar && (
            <p className={styles.unsolvable}>
              Diese Stellung ist unlösbar — kein Weg führt zum Ziel.
            </p>
          )}

          <div className={styles.statGrid}>
            <span className={styles.statKey}>Züge bisher</span>
            <span className={styles.statValue}>{moves.length}</span>
            <span className={styles.statKey}>mögliche Züge</span>
            <span className={styles.statValue}>{beweglich.size}</span>
            {hints && (
              <>
                <span className={styles.statKey}>falsche Plätze</span>
                <span className={styles.statValue}>{misplaced(state)}</span>
                <span className={styles.statKey}>Manhattan-Distanz</span>
                <span className={styles.statValue}>{manhattan(state)}</span>
              </>
            )}
          </div>

          <p className={styles.columnTitle}>Ihre Züge</p>
          <div className={styles.moveList}>
            {moves.length === 0 ? (
              <span className={styles.empty}>
                Klicken Sie einen Stein neben dem leeren Feld an.
              </span>
            ) : (
              moves.map((m, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: Zugliste ist append-only
                <div key={i}>
                  {i + 1}. {m}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/** In welche Richtung rutscht der Stein an Position index? */
function richtung(state, index) {
  const leer = state.indexOf(0);
  if (leer === index - 3) return "hoch";
  if (leer === index + 3) return "runter";
  if (leer === index - 1) return "links";
  return "rechts";
}
