import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import styles from "./CodeBlock.module.css";

/**
 * CodeBlock - Modern code display component with syntax highlighting
 *
 * @param {string} lang - Programming language (default: "javascript")
 * @param {string|ReactNode} children - Code to display
 * @param {number[]} highlightLines - Array of line numbers to highlight (1-based)
 * @param {boolean} diff - Enable diff mode (lines starting with + or - are highlighted)
 * @param {string} filename - Optional filename to display in header
 */
export default function CodeBlock({
  lang = "javascript",
  children,
  highlightLines = [],
  diff = false,
  filename = null,
}) {
  const [copied, setCopied] = useState(false);

  // Dedent und trim den Code
  let code = dedent(extractText(children));

  // Im Diff-Mode: Reduziere Whitespace nach +/- auf ein einzelnes Leerzeichen
  if (diff) {
    code = code
      .split("\n")
      .map((line) => {
        if (line.startsWith("+ ") || line.startsWith("- ")) {
          // Entferne alle Leerzeichen nach +/- und füge genau ein Leerzeichen hinzu
          return line.charAt(0) + " " + line.substring(1).trimStart();
        }
        return line;
      })
      .join("\n");
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom line props für highlighted lines und diff mode
  const lineProps = (lineNumber) => {
    const style = {
      display: "block",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
    };

    // Diff mode: Prüfe ob Zeile mit + oder - beginnt
    if (diff) {
      const lines = code.split("\n");
      const line = lines[lineNumber - 1];

      if (line?.startsWith("+")) {
        style.backgroundColor = "#2d3320"; // Dunkles Grün (Gruvbox-basiert)
        style.borderLeft = "3px solid #b8bb26"; // Gruvbox green
      } else if (line?.startsWith("-")) {
        style.backgroundColor = "#3c1f1e"; // Dunkles Rot (Gruvbox-basiert)
        style.borderLeft = "3px solid #fb4934"; // Gruvbox red
      }
    }

    // Highlighted lines (überschreibt diff mode nicht)
    if (highlightLines.includes(lineNumber)) {
      style.backgroundColor = "rgba(131, 165, 152, 0.2)"; // Gruvbox blue with alpha
      style.borderLeft = "3px solid #83a598"; // Gruvbox blue
    }

    return { style };
  };

  return (
    <div className={styles.codeBlockContainer}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <span className={styles.language}>{lang}</span>
          {filename && <span className={styles.filename}>{filename}</span>}
          {diff && <span className={styles.diffBadge}>diff</span>}
        </div>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label="Code kopieren"
          title="Code in Zwischenablage kopieren"
        >
          {copied ? "✓ Kopiert!" : "Kopieren"}
        </button>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={gruvboxDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={lineProps}
        customStyle={{
          margin: 0,
          borderRadius: "0 0 8px 8px",
          fontSize: "0.9rem",
        }}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: "#928374",
          userSelect: "none",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

/**
 * Extrahiert Text aus children (kann String oder React Element sein)
 */
function extractText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.join("");
  return String(children);
}

/**
 * Entfernt überflüssige Einrückung aus Code-Blöcken
 * - Entfernt erste/letzte leere Zeile
 * - Findet minimale Einrückung
 * - Entfernt diese von allen Zeilen
 */
function dedent(text) {
  const lines = text.split("\n");

  // Entferne erste/letzte leere Zeile (typisch bei template literals)
  if (lines[0]?.trim() === "") lines.shift();
  if (lines[lines.length - 1]?.trim() === "") lines.pop();

  if (lines.length === 0) return "";

  // Finde minimale Einrückung (ignoriere leere Zeilen)
  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)[0].length;
      return Math.min(min, indent);
    }, Infinity);

  // Entferne minimale Einrückung von allen Zeilen
  return lines
    .map((line) => line.slice(minIndent === Infinity ? 0 : minIndent))
    .join("\n");
}
