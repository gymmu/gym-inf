import { useEffect, useState } from "react";
import styles from "./Memory.module.css";

const toHex = (n, digits = 2) =>
  n.toString(16).toUpperCase().padStart(digits, "0");

/**
 * Memory — der Speicher als Raster von Zellen. Jede Zelle hat eine feste
 * Adresse und beherbergt genau ein Byte. Hier "wohnen" alle Byte-Gruppen.
 *
 * @param {number} [rows] Anzahl Zeilen (Standard: 4)
 * @param {number} [cols] Anzahl Spalten (Standard: 4)
 * @param {number} [start] Startadresse (Standard: 0)
 * @param {boolean} [animate] Werte gelegentlich ändern (Standard: true)
 * @param {string} [className] zusätzliche Klassen
 */
export default function Memory({
  rows = 4,
  cols = 4,
  start = 0,
  animate = true,
  className = "",
}) {
  const total = rows * cols;

  const [values, setValues] = useState(() =>
    Array.from({ length: total }, () => Math.floor(Math.random() * 256)),
  );
  const [flash, setFlash] = useState(-1);

  useEffect(() => {
    if (!animate) return undefined;
    const id = setInterval(() => {
      const index = Math.floor(Math.random() * total);
      setValues((prev) => {
        const next = [...prev];
        next[index] = Math.floor(Math.random() * 256);
        return next;
      });
      setFlash(index);
      setTimeout(() => setFlash(-1), 500);
    }, 1600);
    return () => clearInterval(id);
  }, [animate, total]);

  return (
    <figure className={`${styles.memory} ${className}`}>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {values.map((value, index) => {
          const address = start + index;
          return (
            <div
              key={address}
              className={`${styles.cell} ${flash === index ? styles.flash : ""}`}
            >
              <span className={styles.address}>0x{toHex(address)}</span>
              <span className={styles.value}>
                {value.toString(2).padStart(8, "0")}
              </span>
              <span className={styles.dec}>{value}</span>
            </div>
          );
        })}
      </div>
      <figcaption className={styles.caption}>
        Jede Zelle hat eine <strong>Adresse</strong> und speichert genau{" "}
        <strong>ein Byte</strong>.
      </figcaption>
    </figure>
  );
}
