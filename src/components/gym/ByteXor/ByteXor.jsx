import { useMemo, useState } from "react";
import styles from "./ByteXor.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

/**
 * ByteXor — verknüpft zwei Bytes bitweise mit XOR ("exklusiv oder"). Ein Bit
 * im Ergebnis ist genau dann 1, wenn die beiden Eingabe-Bits verschieden sind.
 *
 * Die Bits beider Bytes sind anklickbar.
 *
 * @param {number} [a] erstes Byte (0-255)
 * @param {number} [b] zweites Byte (0-255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function ByteXor({ a = 90, b = 60, className = "" }) {
  const [valA, setValA] = useState(a & 0xff);
  const [valB, setValB] = useState(b & 0xff);

  const { aBits, bBits, xorBits, result } = useMemo(() => {
    const r = (valA ^ valB) & 0xff;
    return {
      aBits: bitsOf(valA),
      bBits: bitsOf(valB),
      xorBits: bitsOf(r),
      result: r,
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

  return (
    <figure className={`${styles.xor} ${className}`}>
      <div className={styles.calc}>
        <div className={styles.row}>
          <span className={styles.op} />
          {renderEditableRow(aBits, setValA)}
          <span className={styles.result}>= {valA}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.op}>⊕</span>
          {renderEditableRow(bBits, setValB)}
          <span className={styles.result}>= {valB}</span>
        </div>

        <div className={`${styles.row} ${styles.sumRow}`}>
          <span className={styles.op}>=</span>
          {xorBits.map((bit, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
              key={i}
              className={`${styles.bit} ${styles.resultBit} ${bit === 1 ? styles.one : styles.zero}`}
            >
              {bit}
            </span>
          ))}
          <span className={`${styles.result} ${styles.sumResult}`}>
            = {result}
          </span>
        </div>
      </div>

      <figcaption className={styles.caption}>
        <strong>XOR</strong>: das Ergebnis-Bit ist <strong>1</strong>, wenn die
        beiden Bits darüber <strong>verschieden</strong> sind – sonst 0. Klicke
        die Bits an!
      </figcaption>
    </figure>
  );
}
