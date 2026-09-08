import { useMemo, useState } from "react";
import styles from "./ByteLogic.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

const OPS = {
  and: {
    symbol: "∧",
    name: "AND",
    apply: (x, y) => x & y,
    caption: (
      <>
        <strong>AND</strong> („und“): das Ergebnis-Bit ist <strong>1</strong>,
        wenn <strong>beide</strong> Bits darüber 1 sind – sonst 0.
      </>
    ),
  },
  or: {
    symbol: "∨",
    name: "OR",
    apply: (x, y) => x | y,
    caption: (
      <>
        <strong>OR</strong> („oder“): das Ergebnis-Bit ist <strong>1</strong>,
        wenn <strong>mindestens eines</strong> der beiden Bits darüber 1 ist.
      </>
    ),
  },
  not: {
    symbol: "¬",
    name: "NOT",
    unary: true,
    apply: (x) => ~x & 0xff,
    caption: (
      <>
        <strong>NOT</strong> („nicht“): jedes Bit wird{" "}
        <strong>umgedreht</strong> – aus 0 wird 1 und aus 1 wird 0.
      </>
    ),
  },
};

/**
 * ByteLogic — verknüpft Bytes bitweise mit einer logischen Grundoperation
 * (AND, OR oder NOT). NOT ist einstellig und dreht jedes Bit um.
 *
 * Die Bits der Eingabe-Bytes sind anklickbar.
 *
 * @param {"and"|"or"|"not"} [op] logische Operation
 * @param {number} [a] erstes Byte (0-255)
 * @param {number} [b] zweites Byte (0-255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function ByteLogic({
  op = "and",
  a = 90,
  b = 60,
  className = "",
}) {
  const config = OPS[op] ?? OPS.and;
  const [valA, setValA] = useState(a & 0xff);
  const [valB, setValB] = useState(b & 0xff);

  const { aBits, bBits, resultBits, result } = useMemo(() => {
    const r = config.unary
      ? config.apply(valA)
      : config.apply(valA, valB) & 0xff;
    return {
      aBits: bitsOf(valA),
      bBits: bitsOf(valB),
      resultBits: bitsOf(r),
      result: r,
    };
  }, [valA, valB, config]);

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
    <figure className={`${styles.logic} ${className}`}>
      <div className={styles.calc}>
        <div className={styles.row}>
          {/* Bei NOT steht der Operator vor dem einzigen Summanden, also
              direkt über dem Strich – wie bei AND/OR die zweite Zeile. */}
          <span className={styles.op}>{config.unary ? config.symbol : ""}</span>
          {renderEditableRow(aBits, setValA)}
          <span className={styles.result}>= {valA}</span>
        </div>

        {!config.unary && (
          <div className={styles.row}>
            <span className={styles.op}>{config.symbol}</span>
            {renderEditableRow(bBits, setValB)}
            <span className={styles.result}>= {valB}</span>
          </div>
        )}

        <div className={`${styles.row} ${styles.sumRow}`}>
          <span className={styles.op}>=</span>
          {resultBits.map((bit, i) => (
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
        {config.caption} Klicke die Bits an!
      </figcaption>
    </figure>
  );
}
