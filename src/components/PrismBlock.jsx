import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism-dark.css";

import styles from "@components/PrismBlock.module.css";

export default function PrismBlock({ lang = "html", code = "" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={"line-numbers match-braces"}>
      <pre className={`language-${lang}`}>
        <code className={`language-${lang}`}>{code}</code>
      </pre>
    </div>
  );
}
