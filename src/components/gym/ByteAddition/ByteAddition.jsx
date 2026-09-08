import { useMemo, useState } from "react";
import styles from "./ByteAddition.module.css";

const bitsOf = (value, width) =>
  Array.from({ length: width }, (_, i) => (value >> (width - 1 - i)) & 1);

/**
 * ByteAddition — addiert zwei Zahlen bitweise und zeigt die Überträge.
 *
 * Die Bits beider Summanden sind anklickbar, sodass man live neue Aufgaben
 * bauen kann. Der Übertrag steht unter der Rechnung.
 *
 * Mit `bytes={2}` (oder mehr) funktioniert dieselbe Komponente auch für
 * grosse Zahlen: die Bytes werden sichtbar gruppiert und man sieht, wie der
 * Übertrag von einem Byte ins nächste wandert.
 *
 * @param {number} [a] erster Summand
 * @param {number} [b] zweiter Summand
 * @param {number} [bytes] Anzahl Bytes pro Zahl (Standard: 1)
 * @param {string} [className] zusätzliche Klassen
 */
export default function ByteAddition({
  a = 77,
  b = 22,
  bytes = 1,
  className = "",
}) {
  const width = bytes * 8;
  const mask = 2 ** width - 1;

  const [valA, setValA] = useState(a & mask);
  const [valB, setValB] = useState(b & mask);

  const { aBits, bBits, sumBits, carries, sum, overflow } = useMemo(() => {
    const aB = bitsOf(valA, width);
    const bB = bitsOf(valB, width);
    const res = new Array(width).fill(0);
    // carry[i] = Übertrag, der aus Spalte i nach links weitergeht
    const carry = new Array(width + 1).fill(0);
    let c = 0;
    for (let i = width - 1; i >= 0; i--) {
      const total = aB[i] + bB[i] + c;
      res[i] = total & 1;
      c = total > 1 ? 1 : 0;
      carry[i] = c;
    }
    return {
      aBits: aB,
      bBits: bB,
      sumBits: res,
      carries: carry,
      sum: (valA + valB) & mask,
      overflow: carry[0] === 1,
    };
  }, [valA, valB, width, mask]);

  const toggle = (setter, i) =>
    setter((prev) => (prev ^ (1 << (width - 1 - i))) & mask);

  // Bits sind in Byte-Gruppen von 8 unterteilt: die erste Spalte jeder
  // weiteren Gruppe bekommt einen zusätzlichen Abstand.
  const groupClass = (i) =>
    bytes > 1 && i % 8 === 0 && i > 0 ? styles.gap : "";

  const renderEditableRow = (bits, setter) =>
    bits.map((bit, i) => (
      <button
        // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
        key={i}
        type="button"
        onClick={() => toggle(setter, i)}
        className={`${styles.bit} ${styles.editable} ${bit === 1 ? styles.one : styles.zero} ${groupClass(i)}`}
        aria-label={`Bit ${width - 1 - i} umschalten`}
      >
        {bit}
      </button>
    ));

  const renderRow = (bits, cls) =>
    bits.map((bit, i) => (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
        key={i}
        className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero} ${cls} ${groupClass(i)}`}
      >
        {bit}
      </span>
    ));

  return (
    <figure className={`${styles.addition} ${className}`}>
      <div className={styles.calc}>
        <div className={styles.row}>
          <span className={styles.op} />
          {renderEditableRow(aBits, setValA)}
          <span className={styles.result}>
            = {valA.toLocaleString("de-CH")}
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.op}>+</span>
          {renderEditableRow(bBits, setValB)}
          <span className={styles.result}>
            = {valB.toLocaleString("de-CH")}
          </span>
        </div>

        <div className={`${styles.row} ${styles.sumRow}`}>
          <span className={styles.op}>=</span>
          {renderRow(sumBits, styles.sumBit)}
          <span className={`${styles.result} ${styles.sumResult}`}>
            = {sum.toLocaleString("de-CH")}
          </span>
        </div>

        {/* Übertrags-Zeile: unter Spalte i steht der Übertrag, der von rechts
            in diese Spalte hineinfliesst. */}
        <div className={`${styles.row} ${styles.carryRow}`}>
          <span className={styles.op} />
          {Array.from({ length: width }, (_, i) => carries[i + 1]).map(
            (c, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
                key={i}
                className={`${styles.carry} ${c === 1 ? styles.carryOn : ""} ${groupClass(i)}`}
              >
                {c === 1 ? "1" : ""}
              </span>
            ),
          )}
          <span className={`${styles.result} ${styles.carryLabel}`}>
            Übertrag
          </span>
        </div>

        {bytes > 1 ? (
          <div className={styles.byteLabels}>
            {Array.from({ length: bytes }, (_, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: feste Bytepositionen
                key={i}
                className={styles.byteLabel}
              >
                Byte {bytes - i}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <figcaption className={styles.caption}>
        Klicke die Bits an, um eine eigene Aufgabe zu bauen. Ein{" "}
        <strong>Übertrag</strong> wandert immer eine Stelle nach links
        {bytes > 1 ? " – notfalls auch über die Byte-Grenze hinweg" : ""}.
        {overflow ? (
          <>
            {" "}
            <strong className={styles.warn}>
              Achtung: Der letzte Übertrag passt nicht mehr in {width} Bits –
              die Summe läuft über!
            </strong>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
