import { useState } from "react";
import styles from "./SignedByte.module.css";

const bitsOf = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

/**
 * SignedByte — ein Byte, das man auf zwei Arten lesen kann: als normale Zahl
 * (0–255) oder mit Vorzeichen im Zweierkomplement (−128 bis 127). Das grösste
 * Bit ist dabei das Vorzeichen-Bit.
 *
 * Bits sind anklickbar.
 *
 * @param {number} [value] Startwert (0-255)
 * @param {string} [className] zusätzliche Klassen
 */
export default function SignedByte({ value = 214, className = "" }) {
  const [byte, setByte] = useState(value & 0xff);

  const bits = bitsOf(byte);
  const unsigned = byte;
  const signed = byte >= 128 ? byte - 256 : byte;
  const isNegative = byte >= 128;

  const toggle = (i) => setByte((prev) => (prev ^ (1 << (7 - i))) & 0xff);

  return (
    <figure className={`${styles.signed} ${className}`}>
      <div className={styles.bits}>
        {bits.map((bit, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
            key={i}
            className={styles.col}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero} ${
                i === 0 ? styles.signBit : ""
              }`}
              aria-label={`Bit ${7 - i} umschalten`}
            >
              {bit}
            </button>
            {i === 0 && <span className={styles.signLabel}>Vorzeichen</span>}
          </div>
        ))}
      </div>

      <div className={styles.readings}>
        <div className={styles.reading}>
          <span className={styles.readLabel}>ohne Vorzeichen</span>
          <span className={styles.readValue}>{unsigned}</span>
        </div>
        <div className={styles.reading}>
          <span className={styles.readLabel}>mit Vorzeichen</span>
          <span
            className={`${styles.readValue} ${isNegative ? styles.neg : styles.pos}`}
          >
            {signed}
          </span>
        </div>
      </div>

      <figcaption className={styles.caption}>
        Ist das grösste Bit eine <strong>1</strong>, ist die Zahl im
        Zweierkomplement <strong>negativ</strong>.
      </figcaption>
    </figure>
  );
}
