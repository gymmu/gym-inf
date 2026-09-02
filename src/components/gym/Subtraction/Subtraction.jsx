import { useMemo, useState } from "react";
import styles from "./Subtraction.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

const ONE_BITS = bitsOf(1);

/** Byte im Zweierkomplement lesen: 0…127 bleibt, 128…255 wird negativ. */
const toSigned = (value) => (value >= 128 ? value - 256 : value);

/**
 * Subtraction — zeigt, dass ein Computer nicht wirklich subtrahiert. Statt
 * a − b rechnet er a + (−b).
 *
 * Die Darstellung ist auf zwei Folien aufgeteilt:
 *   part 1 · übersetzen: b → −b (Zweierkomplement)
 *   part 2 · rechnen: a + (−b)
 * Mit part="both" werden beide Teile untereinander gezeigt.
 *
 * Die Bits von a und b sind anklickbar.
 *
 * @param {number} [a] Minuend (0-255)
 * @param {number} [b] Subtrahend (0-255)
 * @param {1|2|"both"} [part] welcher Teil gezeigt wird
 * @param {string} [className] zusätzliche Klassen
 */
export default function Subtraction({
  a = 100,
  b = 40,
  part = "both",
  className = "",
}) {
  // Das oberste Bit (Vorzeichen) von b wird beim Start nie gesetzt –
  // das soll nur über einen Klick von Hand passieren.
  const [valA, setValA] = useState(a & 0x7f);
  const [valB, setValB] = useState(b & 0x7f);

  const data = useMemo(() => {
    // Alle Bytes werden im Zweierkomplement gelesen: −128 … 127.
    const aSigned = toSigned(valA);
    const bSigned = toSigned(valB);
    const inverted = ~valB & 0xff;
    const negB = (inverted + 1) & 0xff;
    const negSigned = toSigned(negB);
    const sum = (valA + negB) & 0xff;
    const signed = toSigned(sum);
    const exact = aSigned - bSigned;
    return {
      aBits: bitsOf(valA),
      bBits: bitsOf(valB),
      invBits: bitsOf(inverted),
      negBits: bitsOf(negB),
      sumBits: bitsOf(sum),
      aSigned,
      bSigned,
      negB,
      negSigned,
      exact,
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

  const staticRow = (bits, extra = "") =>
    bits.map((bit, i) => (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
        key={i}
        className={`${styles.bit} ${extra} ${bit === 1 ? styles.one : styles.zero}`}
      >
        {bit}
      </span>
    ));

  const showNegate = part === 1 || part === "both";
  const showAdd = part === 2 || part === "both";

  return (
    <figure className={`${styles.sub} ${className}`}>
      {/* ---------- Teil 1: b übersetzen ---------- */}
      {showNegate && (
        <section className={styles.panel}>
          <h4 className={styles.panelTitle}>
            Teil 1 · übersetzen: <code>b → −b</code>
          </h4>
          <div className={styles.calc}>
            <div className={styles.row}>
              <span className={styles.label}>b</span>
              {editableRow(data.bBits, setValB)}
              <span className={styles.result}>= {data.bSigned}</span>
            </div>

            <div className={styles.step}>alle Bits umdrehen</div>
            <div className={styles.row}>
              <span className={styles.label}>~b</span>
              {staticRow(data.invBits)}
              <span className={styles.result} />
            </div>

            <div className={styles.step}>1 addieren</div>
            <div className={styles.row}>
              <span className={styles.label}>+1</span>
              {staticRow(ONE_BITS)}
              <span className={styles.result} />
            </div>

            <div className={`${styles.row} ${styles.sumRow}`}>
              <span className={styles.label}>−b</span>
              {staticRow(data.negBits, styles.negBit)}
              <span className={`${styles.result} ${styles.negResult}`}>
                = {data.negSigned}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Teil 2: rechnen ---------- */}
      {showAdd && (
        <section className={styles.panel}>
          <h4 className={styles.panelTitle}>
            Teil 2 · rechnen: <code>a + (−b)</code>
          </h4>
          <p className={styles.panelHint}>
            <strong>−b</strong> ist schon fertig (aus Teil 1). Beide Bytes
            stehen im <strong>Zweierkomplement</strong> – jetzt wird nur noch{" "}
            <strong>addiert</strong>.
          </p>

          <div className={styles.calc}>
            <div className={styles.row}>
              <span className={styles.label}>a</span>
              {editableRow(data.aBits, setValA)}
              <span className={styles.result}>= {data.aSigned}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>−b</span>
              {staticRow(data.negBits, styles.negBit)}
              <span className={`${styles.result} ${styles.negResult}`}>
                = {data.negSigned}
              </span>
            </div>

            <div className={`${styles.row} ${styles.sumRow}`}>
              <span className={styles.label}>=</span>
              {staticRow(data.sumBits, styles.resultBit)}
              <span className={`${styles.result} ${styles.sumResult}`}>
                = {data.signed}
              </span>
            </div>
          </div>

          {part === 2 && (
            <div className={styles.miniRow}>
              <span className={styles.miniLabel}>b ändern</span>
              {editableRow(data.bBits, setValB)}
              <span className={styles.miniLabel}>= {data.bSigned}</span>
            </div>
          )}
        </section>
      )}

      {showAdd && (
        <figcaption className={styles.caption}>
          {data.aSigned} − ({data.bSigned}) = <strong>{data.exact}</strong>. Der
          Computer <strong>addiert</strong> nur – die Subtraktion versteckt sich
          im <strong>Zweierkomplement</strong>.
          {data.exact !== data.signed && (
            <>
              {" "}
              <span className={styles.warnText}>
                Das Byte kann <strong>{data.exact}</strong> aber nicht
                darstellen (nur −128 … 127) – es zeigt{" "}
                <strong>{data.signed}</strong>.
              </span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
