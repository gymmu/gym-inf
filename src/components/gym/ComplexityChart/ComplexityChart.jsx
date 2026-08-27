import { useState } from "react";
import style from "./ComplexityChart.module.css";

const CLASSES = [
  {
    key: "O(1)",
    label: "O(1) — konstant",
    example: "liste[5], liste.length",
    fn: () => 1,
    color: "var(--color-green)",
  },
  {
    key: "O(log n)",
    label: "O(log n) — logarithmisch",
    example: "Binäre Suche",
    fn: (n) => Math.max(1, Math.ceil(Math.log2(n))),
    color: "var(--color-aqua)",
  },
  {
    key: "O(n)",
    label: "O(n) — linear",
    example: "Lineare Suche, Summe, Maximum",
    fn: (n) => n,
    color: "var(--color-blue)",
  },
  {
    key: "O(n log n)",
    label: "O(n · log n) — linear-logarithmisch",
    example: "Quicksort (Durchschnitt), sort()",
    fn: (n) => Math.ceil(n * Math.max(1, Math.log2(n))),
    color: "var(--color-yellow)",
  },
  {
    key: "O(n²)",
    label: "O(n²) — quadratisch",
    example: "Bubble Sort, alle Paare vergleichen",
    fn: (n) => n * n,
    color: "var(--color-orange)",
  },
  {
    key: "O(2^n)",
    label: "O(2ⁿ) — exponentiell",
    example: "Alle Teilmengen ausprobieren",
    fn: (n) => 2 ** n,
    color: "var(--color-red)",
  },
];

const SIZES = [8, 16, 32, 64, 128, 256, 512, 1024];

function formatNumber(value) {
  if (!Number.isFinite(value)) return "∞";
  if (value >= 1e15) return value.toExponential(1).replace("e+", " · 10^");
  return Math.round(value).toLocaleString("de-CH");
}

function formatTime(operations) {
  // Annahme: 100 Millionen Operationen pro Sekunde
  const seconds = operations / 1e8;
  if (!Number.isFinite(seconds)) return "unendlich";
  if (seconds < 1e-6) return "< 1 µs";
  if (seconds < 1e-3) return `${(seconds * 1e6).toFixed(0)} µs`;
  if (seconds < 1) return `${(seconds * 1e3).toFixed(1)} ms`;
  if (seconds < 60) return `${seconds.toFixed(1)} s`;
  if (seconds < 3600) return `${(seconds / 60).toFixed(1)} min`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} h`;
  if (seconds < 3.15e7) return `${(seconds / 86400).toFixed(1)} Tage`;
  return `${formatNumber(seconds / 3.15e7)} Jahre`;
}

/**
 * ComplexityChart — vergleicht Wachstumsklassen für eine wählbare Grösse n.
 */
export default function ComplexityChart() {
  const [index, setIndex] = useState(3);
  const n = SIZES[index];

  const values = CLASSES.map((entry) => ({
    ...entry,
    operations: entry.fn(n),
  }));
  const max = Math.max(...values.map((v) => Math.log10(v.operations + 1)));

  return (
    <div className={style.container}>
      <div className={style.header}>
        <label className={style.sliderLabel} htmlFor="complexity-n">
          Anzahl Elemente <strong>n = {n.toLocaleString("de-CH")}</strong>
        </label>
        <input
          id="complexity-n"
          className={style.slider}
          type="range"
          min={0}
          max={SIZES.length - 1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
        />
      </div>

      <div className={style.rows}>
        {values.map((entry) => (
          <div key={entry.key} className={style.row}>
            <div className={style.rowLabel}>
              <span className={style.rowName}>{entry.label}</span>
              <span className={style.rowExample}>{entry.example}</span>
            </div>
            <div className={style.barTrack}>
              <div
                className={style.bar}
                style={{
                  width: `${Math.max(
                    2,
                    (Math.log10(entry.operations + 1) / max) * 100,
                  )}%`,
                  backgroundColor: entry.color,
                }}
              />
            </div>
            <div className={style.rowValue}>
              <span className={style.ops}>
                {formatNumber(entry.operations)}
              </span>
              <span className={style.time}>{formatTime(entry.operations)}</span>
            </div>
          </div>
        ))}
      </div>

      <p className={style.note}>
        Die Balken sind <strong>logarithmisch</strong> skaliert — sonst wäre bei
        grossem n nur noch der rote Balken sichtbar. Die Zeitangabe rechts nimmt
        an, dass ein Computer 100 Millionen Operationen pro Sekunde schafft.
      </p>
    </div>
  );
}
