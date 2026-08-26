import { useEffect, useState } from "react";
import styles from "./Byte.module.css";

/**
 * Byte – eine schlichte Darstellung von 8 Bits (wie im MemoryStackVisualizer).
 * Jedes Bit wechselt unabhängig alle 3-4 Sekunden seinen Wert (0 oder 1).
 *
 * @param {number} [minDelay] minimale Zeit in ms bis ein Bit kippt
 * @param {number} [maxDelay] maximale Zeit in ms bis ein Bit kippt
 * @param {boolean} [scaled] Bits nach Rang skalieren (links gross, rechts klein)
 * @param {string} [className] zusätzliche Klassen
 */
export default function Byte({
  minDelay = 3000,
  maxDelay = 4000,
  scaled = false,
  className = "",
}) {
  const [bits, setBits] = useState(() =>
    Array.from({ length: 8 }, () => Math.round(Math.random())),
  );
  const [flipping, setFlipping] = useState(() => Array(8).fill(false));

  useEffect(() => {
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
  }, [minDelay, maxDelay]);

  return (
    <div
      className={`${styles.byte} ${scaled ? styles.scaled : ""} ${className}`}
    >
      {bits.map((bit, index) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: fixe Bit-Positionen
          key={index}
          style={scaled ? { "--bit-scale": 1 - index * 0.09 } : undefined}
          className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero} ${
            flipping[index] ? styles.flipping : ""
          }`}
        >
          {bit}
        </span>
      ))}
    </div>
  );
}
