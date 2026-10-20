import style from "./SvgCode.module.css";

/**
 * SvgCode — kleine, eigene Syntax-Hervorhebung für SVG-Markup.
 *
 * Es gibt zwei Arten, den Code anzuzeigen:
 *
 *   1. <SvgSource code={"<circle ... />"} />
 *      Ein fertiger String wird eingefärbt (für statische Beispiele).
 *
 *   2. <SvgCodeBlock>  mit  <SvgTag ... />
 *      Der Code wird aus Daten aufgebaut. So können einzelne Attribute
 *      hervorgehoben werden, wenn sich ihr Wert gerade ändert.
 */

/** Rahmen um einen Code-Block. */
export function SvgCodeBlock({ children, className = "" }) {
  return (
    <pre className={`${style.code} ${className}`}>
      <code>{children}</code>
    </pre>
  );
}

/**
 * Ein Element (Tag) als Code-Zeile.
 *
 * @param {string} name Name des Elements, z.B. "circle"
 * @param {Array<{name: string, value: string|number, active?: boolean}>} attrs
 * @param {boolean} [selfClosing] Kurzform `<circle ... />`
 * @param {boolean} [closing] Schliessendes Tag `</svg>`
 * @param {number} [indent] Einrückung in Stufen (2 Leerzeichen)
 * @param {boolean} [multiline] Jedes Attribut auf einer eigenen Zeile
 * @param {boolean} [dim] Zeile ausgrauen (nebensächlicher Code)
 */
export function SvgTag({
  name,
  attrs = [],
  selfClosing = false,
  closing = false,
  indent = 0,
  multiline = false,
  dim = false,
}) {
  const pad = "  ".repeat(indent);
  const lineClass = `${style.line} ${dim ? style.dim : ""}`;

  if (closing) {
    return (
      <span className={lineClass}>
        {pad}
        <span className={style.punct}>&lt;/</span>
        <span className={style.tag}>{name}</span>
        <span className={style.punct}>&gt;</span>
        {"\n"}
      </span>
    );
  }

  const attrPad = multiline ? `\n${"  ".repeat(indent + 1)}` : " ";

  return (
    <span className={lineClass}>
      {pad}
      <span className={style.punct}>&lt;</span>
      <span className={style.tag}>{name}</span>
      {attrs.map((attr) => (
        <span
          key={attr.name}
          className={`${style.attrGroup} ${attr.active ? style.active : ""}`}
        >
          {attrPad}
          <span className={style.attr}>{attr.name}</span>
          <span className={style.punct}>=</span>
          <span className={style.value}>"{attr.value}"</span>
        </span>
      ))}
      <span className={style.punct}>
        {multiline ? `\n${pad}` : ""}
        {selfClosing ? (multiline ? "/>" : " />") : ">"}
      </span>
      {"\n"}
    </span>
  );
}

/** Einfache Kommentarzeile im Code. */
export function SvgComment({ text, indent = 0 }) {
  return (
    <span className={style.line}>
      {"  ".repeat(indent)}
      <span className={style.comment}>&lt;!-- {text} --&gt;</span>
      {"\n"}
    </span>
  );
}

// --- Variante 1: fertiger String ------------------------------------------

const TOKEN_RE =
  /(<\/?[a-zA-Z][\w-]*)|(\/?>)|([a-zA-Z-]+)(=)("[^"]*")|(<!--[\s\S]*?-->)/g;

/** Färbt einen SVG-String ein (ohne Abhängigkeit zu Prism). */
export function highlightMarkup(code) {
  const nodes = [];
  let last = 0;
  let key = 0;

  for (const match of code.matchAll(TOKEN_RE)) {
    const [raw, tagOpen, tagClose, attrName, eq, attrValue, comment] = match;
    if (match.index > last) nodes.push(code.slice(last, match.index));
    last = match.index + raw.length;

    if (comment) {
      nodes.push(
        <span key={key++} className={style.comment}>
          {comment}
        </span>,
      );
    } else if (tagOpen) {
      const slash = tagOpen.startsWith("</") ? "</" : "<";
      nodes.push(
        <span key={key++}>
          <span className={style.punct}>{slash}</span>
          <span className={style.tag}>{tagOpen.slice(slash.length)}</span>
        </span>,
      );
    } else if (tagClose) {
      nodes.push(
        <span key={key++} className={style.punct}>
          {tagClose}
        </span>,
      );
    } else if (attrName) {
      nodes.push(
        <span key={key++}>
          <span className={style.attr}>{attrName}</span>
          <span className={style.punct}>{eq}</span>
          <span className={style.value}>{attrValue}</span>
        </span>,
      );
    }
  }

  if (last < code.length) nodes.push(code.slice(last));
  return nodes;
}

/**
 * Zeigt einen SVG-String eingefärbt an.
 *
 * @param {string} code Das SVG-Markup
 * @param {boolean} [wrap] Lange Zeilen umbrechen (sonst horizontal scrollen)
 * @param {boolean} [dimRoot] Das <svg>-Wurzelelement ausgrauen, damit nur die
 *   Zeilen auffallen, um die es gerade geht
 */
export function SvgSource({
  code,
  className = "",
  wrap = true,
  dimRoot = false,
}) {
  const classes = `${style.code} ${wrap ? "" : style.nowrap} ${className}`;

  if (!dimRoot) {
    return (
      <pre className={classes}>
        <code>{highlightMarkup(code)}</code>
      </pre>
    );
  }

  const lines = code.split("\n");

  return (
    <pre className={classes}>
      <code>
        {lines.map((line, index) => {
          const isRoot = /<\/?svg[\s>]/.test(line) || line.trim() === "<svg";
          return (
            <span
              // Zeilen haben keine stabile ID — der Code ist statisch.
              // biome-ignore lint/suspicious/noArrayIndexKey: statische Zeilen
              key={index}
              className={isRoot ? style.dim : undefined}
            >
              {highlightMarkup(line)}
              {index < lines.length - 1 ? "\n" : null}
            </span>
          );
        })}
      </code>
    </pre>
  );
}

export default SvgSource;
