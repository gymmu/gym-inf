import { useEffect, useState } from "react";
import styles from "./MultiByte.module.css";

const toBits = (value) =>
  Array.from({ length: 8 }, (_, i) => (value >> (7 - i)) & 1);

/**
 * MultiByte — zeigt, dass grosse Zahlen mehr als ein Byte brauchen. Zwei Bytes
 * (16 Bit) reichen bis 65'535: das linke ("hohe") Byte zählt in 256er-Schritten,
 * das rechte ("niedrige") Byte die Einer.
 *
 * Die Bits sind anklickbar; sobald man klickt, stoppt das automatische Zählen.
 *
 * @param {number} [value] Startwert (0-65535)
 * @param {boolean} [animate] Wert langsam hochzählen (Standard: true)
 * @param {string} [className] zusätzliche Klassen
 */
export default function MultiByte({
  value = 42568,
  animate = true,
  className = "",
}) {
  const [n, setN] = useState(value & 0xffff);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (!animate || interacted) return undefined;
    const id = setInterval(() => {
      setN((prev) => (prev + 4099) & 0xffff);
    }, 2000);
    return () => clearInterval(id);
  }, [animate, interacted]);

  const high = (n >> 8) & 0xff;
  const low = n & 0xff;

  const toggleBit = (position) => {
    setInteracted(true);
    setN((prev) => (prev ^ (1 << position)) & 0xffff);
  };

  const renderByte = (bits, cls, offset) => (
    <div className={`${styles.byte} ${cls}`}>
      {bits.map((bit, i) => {
        const position = offset + (7 - i);
        return (
          <button
            // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
            key={i}
            type="button"
            onClick={() => toggleBit(position)}
            className={`${styles.bit} ${bit === 1 ? styles.one : styles.zero}`}
            aria-label={`Bit ${position} umschalten`}
          >
            {bit}
          </button>
        );
      })}
    </div>
  );

  return (
    <figure className={`${styles.multi} ${className}`}>
      <div className={styles.bytes}>
        <div className={styles.group}>
          {renderByte(toBits(high), styles.highByte, 8)}
          <span className={styles.groupLabel}>
            hohes Byte · × 256 = {high * 256}
          </span>
        </div>
        <div className={styles.group}>
          {renderByte(toBits(low), styles.lowByte, 0)}
          <span className={styles.groupLabel}>niedriges Byte = {low}</span>
        </div>
      </div>

      <div className={styles.total}>
        <span className={styles.sum}>
          {high * 256} + {low} =
        </span>
        <span className={styles.value}>{n.toLocaleString("de-CH")}</span>
      </div>

      <figcaption className={styles.caption}>
        Klicke die Bits an! Zwei Bytes zusammen (<strong>16 Bit</strong>)
        reichen bis <strong>65'535</strong>.
      </figcaption>
    </figure>
  );
}
