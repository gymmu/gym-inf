import katex from "katex";
import { useEffect, useRef } from "react";
import "katex/dist/katex.css";
import styles from "./Katex.module.css";

export function Math({ children }) {
  const katexElement = useRef(null);

  useEffect(() => {
    katex.render(children, katexElement.current, {
      throwOnError: false,
    });
  }, [children]);
  return (
    <span className={styles.inline} ref={katexElement}>
      {children}
    </span>
  );
}

export function DMath({ children }) {
  const katexElement = useRef(null);

  useEffect(() => {
    katex.render(children, katexElement.current, {
      displayMode: true,
      throwOnError: false,
    });
  }, [children]);
  return (
    <div className={styles.wrapper}>
      <div ref={katexElement} className={styles.display}>
        {children}
      </div>
    </div>
  );
}
