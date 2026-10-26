import { Editor } from "@monaco-editor/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SvgSource } from "@/components/gym/SvgCode/SvgCode";
import style from "./SvgChallenge.module.css";
import { compareSvg } from "./svgCompare";
import { setupSvgLanguage } from "./svgMonaco";

/**
 * SvgChallenge — "Male das Ziel nach".
 *
 * Drei Spalten:
 *   links   — das Bild, das der aktuelle Code erzeugt
 *   Mitte   — der Code (Monaco, mit SVG-Vorschlägen) und optionale Regler
 *   rechts  — das Ziel
 *
 * Stimmt das Bild mit dem Ziel überein, wird das ganze Widget grün umrandet,
 * sonst rot. Verglichen wird das Ergebnis, nicht der Text: Reihenfolge der
 * Attribute und Schreibweise der Farbe spielen keine Rolle.
 *
 * @param {string} target Ziel-SVG (vollständig, inkl. <svg>)
 * @param {string} start Start-Code für die Lernenden
 * @param {string} [title] Titel der Aufgabe
 * @param {React.ReactNode} [children] Aufgabenstellung
 * @param {number} [tolerance] erlaubte Abweichung bei Zahlen (Standard 2)
 * @param {boolean} [editable] Code frei bearbeitbar (Standard true)
 * @param {boolean} [sliders] Regler für alle Zahlen im Code anzeigen
 * @param {number} [height] Höhe des Editors in Pixel
 * @param {boolean} [grid] Koordinatengitter hinter beiden Bildern (Standard an)
 * @param {number} [gridStep] Abstand der feinen Gitterlinien (Standard 10)
 * @param {() => void} [onSolved] wird einmal aufgerufen, sobald es stimmt
 * @param {React.ReactNode} [footer] zusätzlicher Inhalt unten (z.B. Buttons)
 */
export default function SvgChallenge({
  target,
  start,
  title,
  children,
  tolerance = 2,
  editable = true,
  sliders = false,
  height = 240,
  grid = true,
  gridStep = 10,
  onSolved,
  footer,
  className = "",
}) {
  const [code, setCode] = useState(start ?? "");
  const [showTarget, setShowTarget] = useState(false);
  const [showGrid, setShowGrid] = useState(grid);

  // Grösse der Leinwand — das Gitter wird genau darübergelegt.
  const size = useMemo(() => readSize(target), [target]);

  const result = useMemo(
    () => compareSvg(code, target, tolerance),
    [code, target, tolerance],
  );

  const numbers = useMemo(
    () => (sliders ? findNumbers(code) : []),
    [code, sliders],
  );

  function setNumber(token, value) {
    setCode(code.slice(0, token.start) + String(value) + code.slice(token.end));
  }

  // Treffer nur einmal melden.
  const reported = useRef(false);
  useEffect(() => {
    if (result.ok && !reported.current) {
      reported.current = true;
      onSolved?.();
    }
  }, [result.ok, onSolved]);

  const stateClass = result.ok ? style.ok : style.wrong;

  return (
    <section className={`${style.challenge} ${stateClass} ${className}`}>
      <header className={style.header}>
        <h3 className={style.title}>{title ?? "Zeichne das Ziel nach"}</h3>
        <span className={`${style.badge} ${stateClass}`}>
          {result.ok
            ? "✓ Geschafft!"
            : `${result.matched} / ${result.total} Formen stimmen`}
        </span>
      </header>

      {children && <div className={style.task}>{children}</div>}

      <div className={style.body}>
        {/* --- links: aktuelles Bild --- */}
        <figure className={style.panel}>
          <figcaption className={style.panelTitle}>Dein Bild</figcaption>
          <div className={style.stage}>
            <div className={style.stageInner}>
              {showGrid && size && (
                <CoordinateGrid
                  width={size.width}
                  height={size.height}
                  step={gridStep}
                />
              )}
              <div
                className={style.drawing}
                // Der Code stammt aus dem Editor der Lernenden (lokal, ohne Server).
                // biome-ignore lint/security/noDangerouslySetInnerHtml: Lernumgebung
                dangerouslySetInnerHTML={{ __html: code }}
              />
            </div>
          </div>
        </figure>

        {/* --- Mitte: Code --- */}
        <div className={style.editorPanel}>
          <div className={style.panelTitle}>
            Code {editable ? "" : "(nur Zahlen änderbar)"}
          </div>
          <div className={style.editor} style={{ height }}>
            <Editor
              language="xml"
              theme="vs-dark"
              value={code}
              height="100%"
              beforeMount={setupSvgLanguage}
              onChange={(value) => setCode(value ?? "")}
              options={{
                readOnly: !editable,
                domReadOnly: !editable,
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

          {sliders && numbers.length > 0 && (
            <div className={style.sliders}>
              {numbers.map((token) => (
                <label key={`${token.start}`} className={style.slider}>
                  <span className={style.sliderLabel}>
                    {token.shape ? `${token.shape} ` : ""}
                    {token.attr}
                    <span className={style.sliderValue}>{token.value}</span>
                  </span>
                  <input
                    type="range"
                    min={token.min}
                    max={token.max}
                    step="1"
                    value={token.value}
                    onChange={(event) =>
                      setNumber(token, Number(event.target.value))
                    }
                  />
                </label>
              ))}
            </div>
          )}

          <div className={style.actions}>
            <button
              type="button"
              className={style.button}
              onClick={() => setCode(start ?? "")}
            >
              Zurücksetzen
            </button>
            <button
              type="button"
              className={style.button}
              onClick={() => setShowTarget((value) => !value)}
            >
              {showTarget ? "Ziel-Code verbergen" : "Ziel-Code zeigen"}
            </button>
            {size && (
              <label className={style.toggle}>
                <input
                  type="checkbox"
                  checked={showGrid}
                  onChange={(event) => setShowGrid(event.target.checked)}
                />
                Gitter
              </label>
            )}
          </div>
        </div>

        {/* --- rechts: Ziel --- */}
        <figure className={style.panel}>
          <figcaption className={style.panelTitle}>Ziel</figcaption>
          <div
            className={`${style.stage} ${
              showGrid && size ? "" : style.targetStage
            }`}
          >
            <div className={style.stageInner}>
              {showGrid && size && (
                <CoordinateGrid
                  width={size.width}
                  height={size.height}
                  step={gridStep}
                />
              )}
              <div
                className={style.drawing}
                // Statischer Lerninhalt aus dieser Datei.
                // biome-ignore lint/security/noDangerouslySetInnerHtml: statisches Ziel
                dangerouslySetInnerHTML={{ __html: target }}
              />
            </div>
          </div>
        </figure>
      </div>

      {(result.error || result.hints.length > 0) && !result.ok && (
        <ul className={style.hints}>
          {result.error && <li>{result.error}</li>}
          {result.hints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      )}

      {showTarget && (
        <SvgSource code={target} className={style.targetCode} wrap={false} />
      )}

      {footer && <div className={style.footer}>{footer}</div>}
    </section>
  );
}

/**
 * Liest die Grösse der Leinwand aus einem SVG-String.
 * Zuerst aus width/height, sonst aus der viewBox.
 */
function readSize(code) {
  const text = String(code ?? "");
  const open = text.match(/<svg\b[^>]*>/i)?.[0];
  if (!open) return null;

  const width = Number.parseFloat(open.match(/\bwidth="([\d.]+)"/)?.[1]);
  const height = Number.parseFloat(open.match(/\bheight="([\d.]+)"/)?.[1]);
  if (width > 0 && height > 0) return { width, height };

  const box = open.match(/\bviewBox="([^"]+)"/)?.[1];
  if (box) {
    const parts = box
      .trim()
      .split(/[\s,]+/)
      .map(Number);
    if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
      return { width: parts[2], height: parts[3] };
    }
  }

  return null;
}

/**
 * Koordinatengitter, das genau über der Leinwand liegt.
 *
 * Feine Linien im Abstand `step`, kräftigere alle 50 Einheiten — dort stehen
 * auch die Zahlen, damit man Koordinaten direkt ablesen kann.
 */
function CoordinateGrid({ width, height, step = 10 }) {
  const major = 50;
  const lines = [];
  const labels = [];

  for (let x = step; x < width; x += step) {
    const strong = x % major === 0;
    lines.push(
      <line
        key={`v${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={height}
        stroke={strong ? "rgba(60,56,54,0.35)" : "rgba(60,56,54,0.14)"}
        strokeWidth={strong ? 0.8 : 0.5}
      />,
    );
    if (strong) {
      labels.push(
        <text key={`vt${x}`} x={x + 2} y={9} fontSize="8" fill="#7c6f64">
          {x}
        </text>,
      );
    }
  }

  for (let y = step; y < height; y += step) {
    const strong = y % major === 0;
    lines.push(
      <line
        key={`h${y}`}
        x1={0}
        y1={y}
        x2={width}
        y2={y}
        stroke={strong ? "rgba(60,56,54,0.35)" : "rgba(60,56,54,0.14)"}
        strokeWidth={strong ? 0.8 : 0.5}
      />,
    );
    if (strong) {
      labels.push(
        <text key={`ht${y}`} x={2} y={y - 2} fontSize="8" fill="#7c6f64">
          {y}
        </text>,
      );
    }
  }

  return (
    <svg
      className={style.grid}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      {lines}
      {/* Achsen durch den Nullpunkt oben links */}
      <line
        x1={0}
        y1={0}
        x2={width}
        y2={0}
        stroke="rgba(60,56,54,0.5)"
        strokeWidth="1"
      />
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={height}
        stroke="rgba(60,56,54,0.5)"
        strokeWidth="1"
      />
      {labels}
    </svg>
  );
}

/** Sinnvoller Bereich für den Regler eines Attributs. */
function rangeFor(attr, value) {
  if (attr === "stroke-width") return { min: 0, max: 30 };
  if (attr === "opacity") return { min: 0, max: 1 };
  if (/^(r|rx|ry)$/.test(attr)) return { min: 0, max: 150 };
  return { min: 0, max: Math.max(300, Math.ceil(value * 1.5)) };
}

/** Findet alle Zahlen-Attribute im Code (für die Regler). */
function findNumbers(code) {
  const tokens = [];
  const regex = /([\w-]+)="(-?\d+(?:\.\d+)?)"/g;
  const counts = {};
  let lastTagStart = -1;

  for (const match of code.matchAll(regex)) {
    const [, attr, raw] = match;

    // Leinwandgrösse bleibt fix, sonst verschiebt sich alles.
    const before = code.slice(0, match.index);
    const tagStart = before.lastIndexOf("<");
    const tag = before.slice(tagStart + 1).match(/^[\w-]+/)?.[0];
    if (tag === "svg") continue;

    // Pro Form mitzählen, damit die Regler beschriftet werden können.
    if (tagStart !== lastTagStart) {
      lastTagStart = tagStart;
      counts[tag] = (counts[tag] ?? 0) + 1;
    }

    const value = Number(raw);
    tokens.push({
      attr,
      value,
      tag,
      index: counts[tag],
      start: match.index + attr.length + 2,
      end: match.index + attr.length + 2 + raw.length,
      ...rangeFor(attr, value),
    });
  }

  // Formbezeichnung nur anzeigen, wenn es mehr als eine Form gibt.
  const many = Object.values(counts).some((count) => count > 1);
  return tokens.map((token) => ({
    ...token,
    shape: many ? `${token.tag} ${token.index} ·` : "",
  }));
}
