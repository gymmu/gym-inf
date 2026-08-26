import { useState } from "react";
import styles from "./HexNibble.module.css";

const HEX_DIGITS = "0123456789ABCDEF";

/** Stellenwerte innerhalb eines Halbbytes: 8 4 2 1 */
const WEIGHTS = [8, 4, 2, 1];

/** Zugehörige Exponenten: 2³ 2² 2¹ 2⁰ */
const EXPONENTS = [3, 2, 1, 0];

/**
 * HexNibble — zeigt, dass ein Byte in zwei Hälften (Halbbytes) zerfällt und
 * jede Hälfte genau einer Hex-Ziffer entspricht.
 *
 * Die Bits sind klickbar: so lässt sich ausprobieren, wie sich die beiden
 * Hex-Ziffern unabhängig voneinander verändern.
 *
 * @param {number} [value] Startwert (0–255); Standard: 0xA7
 * @param {boolean} [interactive] Bits anklickbar machen (Standard: true)
 * @param {string} [className] zusätzliche Klassen
 */
export default function HexNibble({
  value = 0xa7,
  interactive = true,
  className = "",
}) {
  const safeValue = ((Math.trunc(value) % 256) + 256) % 256;
  const [bits, setBits] = useState(() =>
    Array.from({ length: 8 }, (_, index) => (safeValue >> (7 - index)) & 1),
  );

  const toggleBit = (index) => {
    setBits((prev) => {
      const next = [...prev];
      next[index] = next[index] === 1 ? 0 : 1;
      return next;
    });
  };

  const nibbles = [bits.slice(0, 4), bits.slice(4, 8)];
  const values = nibbles.map((nibble) =>
    nibble.reduce((sum, bit, i) => sum + bit * WEIGHTS[i], 0),
  );

  const nibbleClasses = [styles.high, styles.low];
  const nibbleLabels = ["obere Hälfte", "untere Hälfte"];

  return (
    <figure className={`${styles.hexNibble} ${className}`}>
      <div className={styles.halves}>
        {nibbles.map((nibble, half) => (
          <div
            key={nibbleLabels[half]}
            className={`${styles.half} ${nibbleClasses[half]}`}
          >
            <span className={styles.caption}>{nibbleLabels[half]}</span>

            {/* Die 4 Bits des Halbbytes */}
            <div className={styles.bits}>
              {nibble.map((bit, i) => {
                const index = half * 4 + i;
                const bitClass = `${styles.bit} ${bit === 1 ? styles.one : styles.zero}`;

                return interactive ? (
                  <button
                    key={index}
                    type="button"
                    className={`${bitClass} ${styles.clickable}`}
                    onClick={() => toggleBit(index)}
                    aria-label={`Bit ${7 - index} umschalten`}
                  >
                    {bit}
                  </button>
                ) : (
                  <span key={index} className={bitClass}>
                    {bit}
                  </span>
                );
              })}
            </div>

            {/* Stellenwerte innerhalb der Hälfte */}
            <div className={styles.weights}>
              {EXPONENTS.map((exponent, i) => (
                <span
                  key={exponent}
                  className={`${styles.weight} ${nibble[i] === 1 ? styles.active : ""}`}
                >
                  2<sup>{exponent}</sup>
                </span>
              ))}
            </div>

            {/* Rechnung der Hälfte */}
            <div className={styles.sum}>
              {WEIGHTS.filter((_, i) => nibble[i] === 1).join(" + ") || "0"}
              <span className={styles.equals}>=</span>
              <span className={styles.dec}>{values[half]}</span>
            </div>

            <span className={styles.arrow} aria-hidden="true">
              ↓
            </span>

            <span className={styles.digit}>{HEX_DIGITS[values[half]]}</span>
          </div>
        ))}
      </div>

      {/* Ergebnis: die beiden Ziffern nebeneinander */}
      <figcaption className={styles.result}>
        <span className={styles.resultHex}>
          <span className={styles.highText}>{HEX_DIGITS[values[0]]}</span>
          <span className={styles.lowText}>{HEX_DIGITS[values[1]]}</span>
        </span>
        {/* Zwischenrechnung: obere Ziffer · 16 + untere Ziffer */}
        <span className={styles.resultCalc}>
          <span className={styles.operator}>=</span>
          <span className={styles.highText}>{values[0]}</span>
          <span className={styles.operator}>·</span>16
          <span className={styles.operator}>+</span>
          <span className={styles.lowText}>{values[1]}</span>
        </span>
        <span className={styles.resultCalc}>
          <span className={styles.operator}>=</span>
          {values[0] * 16}
          <span className={styles.operator}>+</span>
          {values[1]}
        </span>
        <span className={styles.resultDec}>= {values[0] * 16 + values[1]}</span>
      </figcaption>
    </figure>
  );
}
