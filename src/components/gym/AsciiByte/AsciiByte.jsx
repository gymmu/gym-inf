import Byte from "@/components/gym/Byte/Byte";
import styles from "./AsciiByte.module.css";

/** Anzeige-Ersatz für Zeichen, die man nicht direkt sieht. */
const SPECIAL_SYMBOLS = {
  " ": "␣",
};

/**
 * AsciiByte – ein statisches Byte mit dem dazugehörenden ASCII-Symbol.
 *
 * Entweder `char` (z.B. "A") oder `code` (z.B. 65) angeben.
 * Das Symbol steht rechts neben dem Byte.
 *
 * @param {string} [char] das ASCII-Zeichen
 * @param {number} [code] der ASCII-Code (0-127)
 * @param {boolean} [scaled] Bits nach Rang skalieren (links gross, rechts klein)
 * @param {string} [className] zusätzliche Klassen
 */
export default function AsciiByte({
  char,
  code,
  scaled = false,
  className = "",
}) {
  const value = typeof code === "number" ? code : (char?.charCodeAt(0) ?? 0);
  const symbol = char ?? String.fromCharCode(value);
  const display = SPECIAL_SYMBOLS[symbol] ?? symbol;

  return (
    <figure className={`${styles.asciiByte} ${className}`}>
      <Byte value={value} scaled={scaled} />
      <span className={styles.arrow}>→</span>
      <figcaption className={styles.caption}>
        <span className={styles.symbol}>{display}</span>
      </figcaption>
    </figure>
  );
}

/**
 * AsciiByteList – mehrere Beispiele untereinander.
 *
 * @param {Array<string|number>} [items] Zeichen oder ASCII-Codes
 */
export function AsciiByteList({
  items = ["A", "z", "7", "?", " "],
  className = "",
  ...props
}) {
  return (
    <div className={`${styles.list} ${className}`}>
      {items.map((item) => (
        <AsciiByte
          key={String(item)}
          {...(typeof item === "number" ? { code: item } : { char: item })}
          {...props}
        />
      ))}
    </div>
  );
}
