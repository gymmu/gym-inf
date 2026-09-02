import { useMemo, useState } from "react";
import styles from "./Overflow.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

/**
 * Overflow — zeigt, was beim Addieren passiert, wenn die Summe grösser als
 * 255 wird. Der Übertrag aus dem grössten Bit passt nicht mehr ins Byte:
 * Er fällt heraus (Fehler) und das Ergebnis ist zu klein.
 *
 * Die Bits beider Summanden sind anklickbar.
 *
 * @param {number} [a] erster Summand (0-255)
 * @param {number} [b] zweiter Summand (0-255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function Overflow({ a = 200, b = 100, className = "" }) {
  const [valA, setValA] = useState(a & 0xff);
  const [valB, setValB] = useState(b & 0xff);

  const { aBits, bBits, sumBits, overflow, fullSum, byteSum } = useMemo(() => {
    const full = valA + valB;
    return {
      aBits: bitsOf(valA),
      bBits: bitsOf(valB),
      sumBits: bitsOf(full & 0xff),
      overflow: full > 255 ? 1 : 0,
      fullSum: full,
      byteSum: full & 0xff,
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

  const renderRow = (bits) =>
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
    <figure className={`${styles.overflow} ${className}`}>
      <div className={styles.calc}>
        <div className={styles.row}>
          <span className={styles.op} />
          <span className={styles.spacer} />
          {renderEditableRow(aBits, setValA)}
          <span className={styles.result}>= {valA}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.op}>+</span>
          <span className={styles.spacer} />
          {renderEditableRow(bBits, setValB)}
          <span className={styles.result}>= {valB}</span>
        </div>

        <div className={`${styles.row} ${styles.sumRow}`}>
          <span className={styles.op}>=</span>
          <span
            className={`${styles.bit} ${styles.lost} ${overflow ? styles.one : styles.zero}`}
          >
            {overflow}
          </span>
          {renderRow(sumBits)}
          <span className={`${styles.result} ${styles.sumResult}`}>
            = {byteSum}
          </span>
        </div>
      </div>

      <div className={styles.explain}>
        {overflow ? (
          <>
            <p>
              Richtig wäre <strong>{fullSum}</strong> – doch das passt nicht in{" "}
              <strong>8 Bits</strong>.
            </p>
            <p className={styles.warn}>
              Das <strong>9. Bit fällt heraus</strong> und geht verloren. Übrig
              bleibt <strong>{byteSum}</strong> – ein <strong>Fehler</strong>.
            </p>
          </>
        ) : (
          <p>
            Solange die Summe <strong>≤ 255</strong> bleibt, passt sie ins Byte:{" "}
            <strong>{byteSum}</strong>. Erhöhe die Bits, bis es überläuft!
          </p>
        )}
      </div>
    </figure>
  );
}
