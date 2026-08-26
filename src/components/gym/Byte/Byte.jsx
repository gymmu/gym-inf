import { useEffect, useState } from "react";
import styles from "./Byte.module.css";

/**
 * Byte – eine schlichte Darstellung von 8 Bits (wie im MemoryStackVisualizer).
 * Jedes Bit wechselt unabhängig alle 3-4 Sekunden seinen Wert (0 oder 1).
 *
 * Wird ein `value` übergeben, ist das Byte statisch und zeigt genau diesen Wert.
 *
 * @param {number} [value] fester Byte-Wert (0-255); ohne Angabe animiert das Byte
 * @param {number} [minDelay] minimale Zeit in ms bis ein Bit kippt
 * @param {number} [maxDelay] maximale Zeit in ms bis ein Bit kippt
 * @param {boolean} [scaled] Bits nach Rang skalieren (links gross, rechts klein)
 * @param {(index: number) => void} [onBitClick] macht die Bits klickbar (Index 0 = MSB)
 * @param {string} [className] zusätzliche Klassen
 */
export default function Byte({
  value,
  minDelay = 3000,
  maxDelay = 4000,
  scaled = false,
  onBitClick,
  className = "",
}) {
  const isStatic = typeof value === "number";

  const [bits, setBits] = useState(() =>
    Array.from({ length: 8 }, () => Math.round(Math.random())),
  );
  const [flipping, setFlipping] = useState(() => Array(8).fill(false));

  useEffect(() => {
    if (isStatic) return;

    const timeouts = [];

    const setFlag = (index, value) => {
      setFlipping((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });
    };

    const scheduleBit = (index) => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      timeouts[index] = setTimeout(() => {
        setBits((prev) => {
          const next = [...prev];
          next[index] = Math.round(Math.random());
          return next;
        });
        setFlag(index, true);
        setTimeout(() => setFlag(index, false), 250);
        scheduleBit(index);
      }, delay);
    };

    for (let i = 0; i < 8; i++) {
      scheduleBit(i);
    }

    return () => {
      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    };
  }, [minDelay, maxDelay, isStatic]);

  const shownBits = isStatic
    ? Array.from({ length: 8 }, (_, index) => (value >> (7 - index)) & 1)
    : bits;

  return (
    <div
      className={`${styles.byte} ${scaled ? styles.scaled : ""} ${className}`}
    >
      {shownBits.map((bit, index) => {
        const bitProps = {
          style: scaled ? { "--bit-scale": 1 - index * 0.09 } : undefined,
          className: `${styles.bit} ${bit === 1 ? styles.one : styles.zero} ${
            flipping[index] ? styles.flipping : ""
          } ${onBitClick ? styles.clickable : ""}`,
        };

        return onBitClick ? (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: fixe Bit-Positionen
            key={index}
            type="button"
            aria-label={`Bit ${7 - index} umschalten`}
            onClick={() => onBitClick(index)}
            {...bitProps}
          >
            {bit}
          </button>
        ) : (
          // biome-ignore lint/suspicious/noArrayIndexKey: fixe Bit-Positionen
          <span key={index} {...bitProps}>
            {bit}
          </span>
        );
      })}
    </div>
  );
}
