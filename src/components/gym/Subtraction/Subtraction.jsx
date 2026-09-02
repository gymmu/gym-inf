import { useMemo, useState } from "react";
import styles from "./Subtraction.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

/**
 * Subtraction — zeigt, dass ein Computer nicht wirklich subtrahiert. Statt
 * a − b rechnet er a + (−b). Die negative Zahl entsteht über das
 * Zweierkomplement: alle Bits umdrehen und 1 addieren.
 *
 * Die Bits von a und b sind anklickbar.
 *
 * @param {number} [a] Minuend (0-255)
 * @param {number} [b] Subtrahend (0-255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function Subtraction({ a = 100, b = 40, className = "" }) {
  const [valA, setValA] = useState(a & 0xff);
  const [valB, setValB] = useState(b & 0xff);

  const data = useMemo(() => {
    const inverted = ~valB & 0xff;
    const negB = (inverted + 1) & 0xff;
    const sum = (valA + negB) & 0xff;
    const signed = sum >= 128 ? sum - 256 : sum;
    return {
      aBits: bitsOf(valA),
      bBits: bitsOf(valB),
      invBits: bitsOf(inverted),
      negBits: bitsOf(negB),
      sumBits: bitsOf(sum),
      negB,
      sum,
      signed,
    };
  }, [valA, valB]);

  const toggle = (setter, i) =>
    setter((prev) => (prev ^ (1 << (7 - i))) & 0xff);

  const editableRow = (bits, setter) =>
    bits.map((bit, i) => (
      <button
        // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
        key={i}
        type="button"
        onClick={() => toggle(setter, i)}
        className={`${styles.bit} ${styles.editable} ${bit === 1 ? styles.one : styles.zero}`}
        aria-label={`Bit ${7 - i} umschalten`}
      >
        {bit}
      </button>
    ));

  const staticRow = (bits) =>
    bits.map((bit, i) => (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
        key={i}
        className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero}`}
      >
        {bit}
      </span>
    ));

  return (
    <figure className={`${styles.sub} ${className}`}>
      <div className={styles.calc}>
        <div className={styles.row}>
          <span className={styles.label}>a</span>
          {editableRow(data.aBits, setValA)}
          <span className={styles.result}>= {valA}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>b</span>
          {editableRow(data.bBits, setValB)}
          <span className={styles.result}>= {valB}</span>
        </div>

        <div className={styles.step}>Schritt 1 · alle Bits von b umdrehen</div>
        <div className={styles.row}>
          <span className={styles.label}>~b</span>
          {staticRow(data.invBits)}
          <span className={styles.result} />
        </div>

        <div className={styles.step}>Schritt 2 · 1 addieren → das ist −b</div>
        <div className={styles.row}>
          <span className={styles.label}>−b</span>
          {staticRow(data.negBits)}
          <span className={styles.result}>= {data.negB}</span>
        </div>

        <div className={styles.step}>Schritt 3 · a + (−b) rechnen</div>
        <div className={`${styles.row} ${styles.sumRow}`}>
          <span className={styles.label}>=</span>
          {data.sumBits.map((bit, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
              key={i}
              className={`${styles.bit} ${styles.resultBit} ${bit === 1 ? styles.one : styles.zero}`}
            >
              {bit}
            </span>
          ))}
          <span className={`${styles.result} ${styles.sumResult}`}>
            = {data.signed}
          </span>
        </div>
      </div>

      <figcaption className={styles.caption}>
        {valA} − {valB} = <strong>{data.signed}</strong>. Der Computer{" "}
        <strong>addiert</strong> nur – die Subtraktion versteckt sich im{" "}
        <strong>Zweierkomplement</strong>.
      </figcaption>
    </figure>
  );
}
