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
export default function SignedByte({ value = 86, className = "" }) {
  // Das Vorzeichen-Bit ist beim Start nie gesetzt – das soll nur
  // über einen Klick von Hand passieren.
  const [byte, setByte] = useState(value & 0x7f);

  const bits = bitsOf(byte);
  const unsigned = byte;
  const signed = byte >= 128 ? byte - 256 : byte;
  const isNegative = byte >= 128;

  const toggle = (i) => setByte((prev) => (prev ^ (1 << (7 - i))) & 0xff);

  const renderBit = (bit, i) => (
    <button
      key={i}
      type="button"
      onClick={() => toggle(i)}
      className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero} ${
        i === 0 ? styles.signBit : ""
      }`}
      aria-label={`Bit ${7 - i} umschalten`}
    >
      {bit}
    </button>
  );

  return (
    <figure className={`${styles.signed} ${className}`}>
      <div className={styles.bits}>
        <div className={styles.nibble}>
          {bits.slice(0, 4).map((bit, i) => renderBit(bit, i))}
        </div>
        <div className={styles.nibble}>
          {bits.slice(4).map((bit, i) => renderBit(bit, i + 4))}
        </div>
      </div>

      <div className={styles.readings}>
        <span className={styles.readLabel}>ohne Vorzeichen</span>
        <span className={styles.readValue}>{unsigned}</span>

        <span className={styles.readLabel}>mit Vorzeichen</span>
        <span
          className={`${styles.readValue} ${isNegative ? styles.neg : styles.pos}`}
        >
          {signed}
        </span>
      </div>
    </figure>
  );
}
