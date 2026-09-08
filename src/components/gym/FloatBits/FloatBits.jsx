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

/** Zahl lesbar formatieren (sehr grosse/kleine Zahlen wissenschaftlich). */
function fmt(n) {
  if (!Number.isFinite(n)) return String(n);
  const abs = Math.abs(n);
  if (abs !== 0 && (abs >= 1e7 || abs < 1e-4)) return n.toExponential(4);
  return n.toLocaleString("de-CH", { maximumFractionDigits: 10 });
}

/** Binärstring "1,1001" aus führender Ziffer + Mantissenbits (Nullen am Ende weg). */
function binaryFixed(leading, fracBits) {
  let frac = fracBits.join("").replace(/0+$/, "");
  if (frac.length > 12) frac = `${frac.slice(0, 12)}…`;
  return frac ? `${leading},${frac}` : String(leading);
}

/**
 * FloatBits — zeigt die 32-Bit-Aufteilung einer Gleitkommazahl und die
 * Rechnung dahinter, farblich passend zu den Bit-Gruppen.
 *
 * Wert = (−1)^Vorzeichen · 1,Mantisse · 2^(Exponent − 127)
 *
 * @param {number} [value] darzustellende Zahl (Standard: 6.25)
 * @param {string} [className] zusätzliche Klassen
 */
export default function FloatBits({ value = 6.25, className = "" }) {
  const [asInt, setAsInt] = useState(() => floatToInt(value));

  const {
    bits,
    sign,
    mantBits,
    exponentRaw,
    exponent,
    leading,
    significand,
    special,
    subnormal,
    current,
  } = useMemo(() => {
    const b = asInt.toString(2).padStart(32, "0").split("").map(Number);
    const eBits = b.slice(1, 9);
    const mBits = b.slice(9);
    const expRaw = eBits.reduce((acc, bit) => acc * 2 + bit, 0);
    const fraction = mBits.reduce(
      (acc, bit, i) => acc + bit * 2 ** -(i + 1),
      0,
    );
    const sub = expRaw === 0;
    const lead = sub ? 0 : 1;
    return {
      bits: b,
      sign: b[0],
      mantBits: mBits,
      exponentRaw: expRaw,
      exponent: sub ? -126 : expRaw - 127,
      leading: lead,
      significand: lead + fraction,
      special: expRaw === 255,
      subnormal: sub,
      current: intToFloat(asInt),
    };
  }, [asInt]);

  const toggleBit = (bitIndex) => {
    const mask = 1 << (31 - bitIndex);
    setAsInt((prev) => (prev ^ mask) >>> 0);
  };

  const segments = [
    { name: "Vorzeichen", from: 0, to: 1, cls: styles.sign },
    { name: "Exponent", from: 1, to: 9, cls: styles.exponent },
    { name: "Mantisse", from: 9, to: 32, cls: styles.mantissa },
  ];

  const S = styles.cSign;
  const E = styles.cExp;
  const M = styles.cMant;

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

      {special ? (
        <div className={styles.calc}>
          <div className={styles.value}>{String(current)}</div>
        </div>
      ) : (
        <div className={styles.calc}>
          <div className={styles.line}>
            (−1)<sup className={S}>V</sup> · <span className={M}>1,M</span> · 2
            <sup>
              <span className={E}>E</span> − 127
            </sup>
          </div>
          <div className={styles.line}>
            (−1)<sup className={S}>{sign}</sup> ·{" "}
            <span className={M}>{binaryFixed(leading, mantBits)}</span>₂ · 2
            <sup>
              {subnormal ? (
                "−126"
              ) : (
                <>
                  <span className={E}>{exponentRaw}</span> − 127
                </>
              )}
            </sup>
          </div>
          <div className={styles.line}>
            <span className={S}>{sign === 1 ? "−1" : "+1"}</span> ·{" "}
            <span className={M}>{fmt(significand)}</span> · 2
            <sup className={E}>{exponent}</sup>
          </div>
          <div className={styles.value}>= {fmt(current)}</div>
        </div>
      )}

      <figcaption className={styles.caption}>Klicke die Bits an!</figcaption>
    </figure>
  );
}
