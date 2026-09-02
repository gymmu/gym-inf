import { useMemo, useState } from "react";
import styles from "./FloatBits.module.css";

/** Wandelt eine Zahl in die 32-Bit-Ganzzahl ihrer float-Darstellung. */
function floatToInt(value) {
  const view = new DataView(new ArrayBuffer(4));
  view.setFloat32(0, value);
  return view.getUint32(0);
}

/** Wandelt eine 32-Bit-Ganzzahl zurück in die zugehörige Gleitkommazahl. */
function intToFloat(int) {
  const view = new DataView(new ArrayBuffer(4));
  view.setUint32(0, int >>> 0);
  return view.getFloat32(0);
}

/**
 * FloatBits — zeigt, wie eine Gleitkommazahl (float, 32 Bit) im Speicher liegt.
 * Die vier Bytes teilen sich in drei Abschnitte auf: ein Vorzeichen-Bit, acht
 * Bit für den Exponenten und dreiundzwanzig Bit für die Mantisse.
 *
 * Die Bits sind anklickbar – so sieht man direkt, wie sich die Zahl ändert.
 *
 * @param {number} [value] darzustellende Zahl (Standard: 6.25)
 * @param {string} [className] zusätzliche Klassen
 */
export default function FloatBits({ value = 6.25, className = "" }) {
  const [asInt, setAsInt] = useState(() => floatToInt(value));

  const { bits, sign, exponent, exponentRaw, current } = useMemo(() => {
    const b = asInt.toString(2).padStart(32, "0").split("").map(Number);
    const expRaw = b.slice(1, 9).reduce((acc, bit) => acc * 2 + bit, 0);
    return {
      bits: b,
      sign: b[0],
      exponent: expRaw - 127,
      exponentRaw: expRaw,
      current: intToFloat(asInt),
    };
  }, [asInt]);

  const toggleBit = (bitIndex) => {
    // bitIndex 0 = höchstwertiges Bit (Vorzeichen)
    const mask = 1 << (31 - bitIndex);
    setAsInt((prev) => (prev ^ mask) >>> 0);
  };

  const segments = [
    { name: "Vorzeichen", from: 0, to: 1, cls: styles.sign },
    { name: "Exponent", from: 1, to: 9, cls: styles.exponent },
    { name: "Mantisse", from: 9, to: 32, cls: styles.mantissa },
  ];

  const displayValue = Number.isFinite(current)
    ? current.toLocaleString("de-CH", { maximumFractionDigits: 8 })
    : String(current);

  return (
    <figure className={`${styles.float} ${className}`}>
      <div className={styles.segments}>
        {segments.map((seg) => (
          <div key={seg.name} className={styles.segment}>
            <div className={styles.bitRow}>
              {bits.slice(seg.from, seg.to).map((bit, i) => {
                const bitIndex = seg.from + i;
                return (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: feste Bitpositionen
                    key={i}
                    type="button"
                    onClick={() => toggleBit(bitIndex)}
                    className={`${styles.bit} ${seg.cls} ${bit === 1 ? styles.on : styles.off}`}
                    aria-label={`Bit umschalten`}
                  >
                    {bit}
                  </button>
                );
              })}
            </div>
            <span className={styles.segLabel}>
              {seg.name} ({seg.to - seg.from} Bit)
            </span>
          </div>
        ))}
      </div>

      <div className={styles.explain}>
        <p>
          Vorzeichen <strong>{sign}</strong> → Zahl ist{" "}
          <strong>{sign === 1 ? "negativ" : "positiv"}</strong>
        </p>
        <p>
          Exponent <strong>{exponentRaw}</strong> − 127 ={" "}
          <strong>{exponent}</strong> → verschiebt das Komma
        </p>
        <p className={styles.value}>= {displayValue}</p>
      </div>

      <figcaption className={styles.caption}>
        Klicke die Bits an! Eine <strong>Gleitkommazahl</strong> braucht 4
        Bytes: Vorzeichen, Exponent und Mantisse.
      </figcaption>
    </figure>
  );
}
