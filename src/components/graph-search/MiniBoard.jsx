import styles from "./graph-search.module.css";

/** Ein kleines 3x3-Brett, wie es in Listen und im Suchbaum vorkommt. */
export default function MiniBoard({ state, title }) {
  return (
    <div className={styles.miniBoard} title={title}>
      {state.map((wert, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
          key={index}
          className={[styles.miniCell, wert === 0 ? styles.miniCellEmpty : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {wert === 0 ? "" : wert}
        </div>
      ))}
    </div>
  );
}
