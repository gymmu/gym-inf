import { Fragment, useEffect, useState } from "react";

import styles from "./Formula.module.css";

const POSITIONS = [7, 6, 5, 4, 3, 2, 1, 0];

/**
 * Formula – zeigt, wie ein Byte in einzelne Bits aufgebrochen wird und wie
 * daraus mit der Formel `Σ bit_n · 2^n` der Dezimalwert entsteht.
 *
 * Aufbau der Visualisierung (Spalten sind über alle Zeilen ausgerichtet):
 *  1. das Byte als 8 Bits (MSB links, LSB rechts)
 *  2. die Stellenwertigkeit jeder Position (2^7 … 2^0)
 *  3. der Beitrag jedes Bits (bit · 2^n)
 *  4. die Summe der Beiträge und der resultierende Dezimalwert
 *
 * @param {number} [byteValue] fester Byte-Wert (0-255); ohne Angabe zufällig und klickbar
 * @param {boolean} [autoUpdate] alle `interval` ms einen neuen Zufallswert zeigen (Standard: false)
 * @param {number} [interval] Intervall in ms für `autoUpdate` (Standard: 6000)
 * @param {boolean} [interactive] Bits per Klick umschalten (Standard: true, wenn `byteValue` fehlt)
 * @param {string} [className] zusätzliche Klassen
 */
export default function Formula({
  byteValue,
  autoUpdate = false,
  interval = 6000,
  interactive,
  className = "",
}) {
  const isControlled = typeof byteValue === "number";
  const [value, setValue] = useState(() =>
    isControlled ? byteValue : Math.floor(Math.random() * 256),
  );

  const canToggle = interactive ?? !isControlled;

  // Prop überschreibt den internen Zustand
  useEffect(() => {
    if (isControlled) setValue(byteValue);
  }, [isControlled, byteValue]);

  useEffect(() => {
    if (!autoUpdate || isControlled) return;

    const id = setInterval(() => {
      setValue(Math.floor(Math.random() * 256));
    }, interval);

    return () => clearInterval(id);
  }, [autoUpdate, isControlled, interval]);

  const safeValue = ((Math.trunc(value) % 256) + 256) % 256;

  // Bits von MSB (2^7) bis LSB (2^0)
  const bits = POSITIONS.map((pos) => (safeValue >> pos) & 1);

  // Beitrag jedes Bits: bit · 2^n
  const contributions = bits.map((bit, index) => bit * 2 ** POSITIONS[index]);

  const total = contributions.reduce((sum, part) => sum + part, 0);
  const activeParts = contributions.filter((part) => part > 0);

  const toggleBit = (index) => {
    if (!canToggle) return;
    setValue((prev) => prev ^ (1 << POSITIONS[index]));
  };

  return (
    <figure className={`${styles.formula} ${className}`}>
      {/* Teil 1: Byte in einzelne Bits aufbrechen */}
      <section className={styles.section}>
        <div className={styles.grid}>
          {/* Zeile 1: die 8 Bits des Bytes */}
          {bits.map((bit, index) => {
            const pos = POSITIONS[index];
            const label = `Bit ${pos} (Wert ${bit})`;
            return canToggle ? (
              <button
                key={`bit-${pos}`}
                type="button"
                className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero}`}
                onClick={() => toggleBit(index)}
                aria-label={`${label} umschalten`}
                title="Klicken zum Umschalten"
              >
                {bit}
              </button>
            ) : (
              <span
                key={`bit-${pos}`}
                className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero}`}
                title={label}
              >
                {bit}
              </span>
            );
          })}

          {/* Zeile 2: Pfeil nach unten */}
          {POSITIONS.map((pos) => (
            <span
              key={`arrow-${pos}`}
              className={styles.arrow}
              aria-hidden="true"
            >
              ↓
            </span>
          ))}

          {/* Zeile 3: Stellenwertigkeit */}
          {POSITIONS.map((pos) => (
            <span key={`weight-${pos}`} className={styles.weight}>
              2<sup>{pos}</sup>
            </span>
          ))}

          {/* Zeile 4: Beitrag des Bits */}
          {contributions.map((part, index) => {
            const pos = POSITIONS[index];
            return (
              <span
                key={`part-${pos}`}
                className={`${styles.part} ${part > 0 ? styles.partActive : styles.partZero}`}
              >
                {part}
              </span>
            );
          })}
        </div>
      </section>

      {/* Teil 2: die eigentliche Rechnung – deutlich abgesetzt */}
      <section className={`${styles.section} ${styles.calculation}`}>
        {/* Ausführliche Formel: jedes Bit mal seine Stellenwertigkeit – eine Zeile */}
        <div className={`${styles.expression} ${styles.expressionFull}`}>
          {bits.map((bit, index) => {
            const pos = POSITIONS[index];
            return (
              <Fragment key={`term-${pos}`}>
                {index > 0 && <span className={styles.operator}>+</span>}
                <span
                  className={`${styles.term} ${bit === 1 ? styles.termActive : styles.termZero}`}
                >
                  {bit}
                  <span className={styles.mult}>·</span>2<sup>{pos}</sup>
                </span>
              </Fragment>
            );
          })}
        </div>

        {/* Kurzform: nur die Bits mit Wert 1 */}
        <div className={`${styles.expression} ${styles.expressionShort}`}>
          {activeParts.length === 0 ? (
            <span className={styles.termZero}>0</span>
          ) : (
            activeParts.map((part, index) => (
              <Fragment key={`sum-${part}`}>
                {index > 0 && <span className={styles.operator}>+</span>}
                <span className={styles.termActive}>{part}</span>
              </Fragment>
            ))
          )}
        </div>

        {/* Ergebnis */}
        <p className={styles.result}>
          <span className={styles.binary}>{bits.join("")}</span>
          <span className={styles.equals}>=</span>
          <span className={styles.total}>{total}</span>
        </p>
      </section>
    </figure>
  );
}
