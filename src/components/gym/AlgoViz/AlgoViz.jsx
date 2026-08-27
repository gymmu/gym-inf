import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import style from "./AlgoViz.module.css";

/**
 * AlgoViz — Schritt-für-Schritt-Visualisierung für Array-Algorithmen.
 *
 * Erwartet eine Funktion `generate(array)`, die eine Liste von Schritten
 * zurückgibt. Ein Schritt hat folgende (alle optionalen) Felder:
 *
 *   {
 *     array:       [4, 2, 7],        // Zustand der Liste
 *     compare:     [0, 1],           // gelb — wird verglichen
 *     swap:        [0, 1],           // rot — wird getauscht
 *     sorted:      [2, 3],           // grün — fertig / an Position
 *     pivot:       1,                // lila — Pivot-Element
 *     found:       2,                // aqua — Treffer
 *     range:       [1, 4],           // aktiver Bereich (Rest wird gedimmt)
 *     description: "Vergleiche ...", // Text unter der Grafik
 *     vars:        { i: 0, j: 1 },   // Variablen-Anzeige
 *     line:        3                 // Zeile im Code, die gerade läuft
 *   }
 *
 * @param {Object} props
 * @param {number[]} props.initialArray   Startwerte
 * @param {Function} props.generate       (array) => steps[]
 * @param {string}  [props.title]         Titel über der Visualisierung
 * @param {string}  [props.code]          Code, dessen Zeilen mitleuchten
 * @param {boolean} [props.editable]      Eingabefeld für eigene Zahlen
 * @param {number}  [props.speed]         ms pro Schritt beim Abspielen
 * @param {string}  [props.legend]        "sort" | "search"
 */
export default function AlgoViz({
  initialArray = [5, 3, 8, 1, 9, 2],
  generate,
  title,
  code = null,
  editable = true,
  speed = 700,
  legend = "sort",
}) {
  const [array, setArray] = useState(initialArray);
  const [raw, setRaw] = useState(initialArray.join(", "));
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef(null);

  const steps = useMemo(() => {
    try {
      const result = generate(array);
      return Array.isArray(result) && result.length > 0
        ? result
        : [{ array, description: "Keine Schritte" }];
    } catch (_error) {
      return [{ array, description: "Fehler beim Erzeugen der Schritte" }];
    }
  }, [array, generate]);

  const total = steps.length;
  const current = steps[Math.min(step, total - 1)] ?? {};
  const values = current.array ?? array;
  const maxValue = Math.max(1, ...values.map((v) => Math.abs(Number(v) || 0)));

  const stop = useCallback(() => setPlaying(false), []);

  // Autoplay
  useEffect(() => {
    if (!playing) return undefined;
    timerRef.current = setInterval(() => {
      setStep((s) => {
        if (s >= total - 1) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, speed);
    return () => clearInterval(timerRef.current);
  }, [playing, speed, total]);

  // Neues Array → zurück auf Anfang
  // biome-ignore lint/correctness/useExhaustiveDependencies: reset when steps change
  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [steps]);

  const applyInput = () => {
    const parsed = raw
      .split(",")
      .map((n) => Number.parseInt(n.trim(), 10))
      .filter((n) => !Number.isNaN(n));
    if (parsed.length < 2 || parsed.length > 12) {
      setRaw(array.join(", "));
      return;
    }
    setArray(parsed);
  };

  const shuffle = () => {
    const next = [...array];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    setArray(next);
    setRaw(next.join(", "));
  };

  const classFor = (index) => {
    const classes = [style.bar];
    const inRange =
      !current.range ||
      (index >= current.range[0] && index <= current.range[1]);
    if (!inRange) classes.push(style.dimmed);
    if (current.sorted?.includes(index)) classes.push(style.sorted);
    if (current.compare?.includes(index)) classes.push(style.compare);
    if (current.swap?.includes(index)) classes.push(style.swap);
    if (current.pivot === index) classes.push(style.pivot);
    if (current.found === index) classes.push(style.found);
    return classes.join(" ");
  };

  const codeLines = code ? code.replace(/^\n/, "").split("\n") : null;

  return (
    <div className={style.container}>
      {title ? <div className={style.title}>{title}</div> : null}

      {editable ? (
        <div className={style.inputRow}>
          <label className={style.inputLabel} htmlFor={`${title}-input`}>
            Eigene Zahlen (mit Komma getrennt):
          </label>
          <input
            id={`${title}-input`}
            className={style.input}
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            onBlur={applyInput}
            onKeyDown={(e) => e.key === "Enter" && applyInput()}
          />
          <button
            type="button"
            className={style.smallButton}
            onClick={applyInput}
          >
            Übernehmen
          </button>
          <button type="button" className={style.smallButton} onClick={shuffle}>
            Mischen
          </button>
        </div>
      ) : null}

      <div className={style.stage}>
        <div className={style.bars}>
          {values.map((value, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Position ist die Identität
              key={index}
              className={style.barSlot}
            >
              <div
                className={classFor(index)}
                style={{
                  height: `${Math.max(8, (Math.abs(value) / maxValue) * 100)}%`,
                }}
              >
                <span className={style.barValue}>{value}</span>
              </div>
              <span className={style.barIndex}>{index}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={style.description}>
        <span className={style.stepBadge}>
          Schritt {Math.min(step + 1, total)} / {total}
        </span>
        {current.description ?? ""}
      </div>

      {current.vars && Object.keys(current.vars).length > 0 ? (
        <div className={style.vars}>
          {Object.entries(current.vars).map(([key, value]) => (
            <span key={key} className={style.varChip}>
              <strong>{key}</strong> = {String(value)}
            </span>
          ))}
        </div>
      ) : null}

      <div className={style.controls}>
        <button
          type="button"
          className={style.button}
          onClick={() => {
            stop();
            setStep(0);
          }}
          disabled={step === 0}
        >
          ⏮ Anfang
        </button>
        <button
          type="button"
          className={style.button}
          onClick={() => {
            stop();
            setStep((s) => Math.max(0, s - 1));
          }}
          disabled={step === 0}
        >
          ◀ Zurück
        </button>
        <button
          type="button"
          className={`${style.button} ${playing ? style.pause : style.play}`}
          onClick={() => setPlaying((p) => !p)}
          disabled={step >= total - 1}
        >
          {playing ? "⏸ Pause" : "▶ Abspielen"}
        </button>
        <button
          type="button"
          className={style.button}
          onClick={() => {
            stop();
            setStep((s) => Math.min(total - 1, s + 1));
          }}
          disabled={step >= total - 1}
        >
          Weiter ▶
        </button>
        <button
          type="button"
          className={style.button}
          onClick={() => {
            stop();
            setStep(total - 1);
          }}
          disabled={step >= total - 1}
        >
          Ende ⏭
        </button>
      </div>

      <input
        type="range"
        className={style.slider}
        min={0}
        max={Math.max(0, total - 1)}
        value={Math.min(step, total - 1)}
        onChange={(e) => {
          stop();
          setStep(Number(e.target.value));
        }}
        aria-label="Schritt wählen"
      />

      <div className={style.legend}>
        {legend === "search" ? (
          <>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.compare}`} /> geprüft
            </span>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.pivot}`} /> Mitte
            </span>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.found}`} /> gefunden
            </span>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.dimmedDot}`} /> ausgeschlossen
            </span>
          </>
        ) : (
          <>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.compare}`} /> Vergleich
            </span>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.swap}`} /> Tausch
            </span>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.pivot}`} /> Pivot
            </span>
            <span className={style.legendItem}>
              <i className={`${style.dot} ${style.sorted}`} /> fertig
            </span>
          </>
        )}
      </div>

      {codeLines ? (
        <pre className={style.code}>
          {codeLines.map((lineText, index) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Zeilennummer ist die Identität
              key={index}
              className={
                current.line === index + 1
                  ? `${style.codeLine} ${style.activeLine}`
                  : style.codeLine
              }
            >
              <span className={style.lineNo}>{index + 1}</span>
              <span>{lineText}</span>
            </div>
          ))}
        </pre>
      ) : null}
    </div>
  );
}
