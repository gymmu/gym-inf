import { useMemo, useState } from "react";
import styles from "./ByteAddition.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

/**
 * ByteAddition — addiert zwei Bytes bitweise und zeigt die Überträge.
 *
 * Die Bits beider Summanden sind anklickbar, sodass man live neue Aufgaben
 * bauen kann. Standardmässig bleibt die Summe innerhalb eines Bytes.
 *
 * @param {number} [a] erster Summand (0-255)
 * @param {number} [b] zweiter Summand (0-255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function ByteAddition({ a = 77, b = 22, className = "" }) {
  const [valA, setValA] = useState(a & 0xff);
  const [valB, setValB] = useState(b & 0xff);

  const { aBits, bBits, sumBits, carries, sum } = useMemo(() => {
    const aB = bitsOf(valA);
    const bB = bitsOf(valB);
    const res = new Array(8).fill(0);
    const carry = new Array(9).fill(0); // carry[i] = Übertrag aus Spalte i nach links
    let c = 0;
    for (let i = 7; i >= 0; i--) {
      const total = aB[i] + bB[i] + c;
      res[i] = total & 1;
      c = total > 1 ? 1 : 0;
      carry[i] = c;
    }
    return {
      aBits: aB,
      bBits: bB,
      sumBits: res,
      carries: carry,
      sum: (valA + valB) & 0xff,
    };
  }, [valA, valB]);

  const toggle = (setter, i) =>
    setter((prev) => (prev ^ (1 << (7 - i))) & 0xff);

  const renderEditableRow = (bits, setter) =>
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

  const renderRow = (bits, cls) =>
    bits.map((bit, i) => (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
        key={i}
        className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero} ${cls}`}
      >
        {bit}
      </span>
    ));

  return (
    <figure className={`${styles.addition} ${className}`}>
      <div className={styles.calc}>
        {/* Übertrags-Zeile: über Spalte i steht der Übertrag, der hineinfliesst */}
        <div className={`${styles.row} ${styles.carryRow}`}>
          <span className={styles.op} />
          {Array.from({ length: 8 }, (_, i) => carries[i + 1]).map((c, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
              key={i}
              className={`${styles.carry} ${c === 1 ? styles.carryOn : ""}`}
            >
              {c === 1 ? "1" : ""}
            </span>
          ))}
          <span className={styles.result} />
        </div>

        <div className={styles.row}>
          <span className={styles.op} />
          {renderEditableRow(aBits, setValA)}
          <span className={styles.result}>= {valA}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.op}>+</span>
          {renderEditableRow(bBits, setValB)}
          <span className={styles.result}>= {valB}</span>
        </div>

        <div className={`${styles.row} ${styles.sumRow}`}>
          <span className={styles.op}>=</span>
          {renderRow(sumBits, styles.sumBit)}
          <span className={`${styles.result} ${styles.sumResult}`}>
            = {sum}
          </span>
        </div>
      </div>

      <figcaption className={styles.caption}>
        Klicke die Bits an, um eine eigene Aufgabe zu bauen. Ein{" "}
        <strong>Übertrag</strong> wandert immer eine Stelle nach links.
      </figcaption>
    </figure>
  );
}
