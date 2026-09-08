import { useState } from "react";
import Byte from "@/components/gym/Byte/Byte";
import styles from "./TextMemory.module.css";

const START_ADDRESS = 0x1000;
const MAX_LEN = 16;

/**
 * TextMemory — zeigt, dass Text nichts anderes ist als ein zusammenhängender
 * Bereich im Speicher: Byte für Byte, wobei jedes Byte über die ASCII-Tabelle
 * als Zeichen gelesen wird.
 *
 * Der Text ist über ein Eingabefeld veränderbar. Zusätzlich lassen sich die
 * einzelnen Bits umschalten — der Text passt sich dann automatisch an.
 *
 * @param {string} [initial] Anfangstext
 * @param {string} [className] zusätzliche Klassen
 */
export default function TextMemory({ initial = "Hallo!", className = "" }) {
  const [text, setText] = useState(initial);

  const chars = Array.from(text).slice(0, MAX_LEN);

  // Kippt Bit `bitIndex` (0 = MSB) im Zeichen an Position `charIndex`.
  const flipBit = (charIndex, bitIndex) => {
    setText((prev) => {
      const arr = Array.from(prev);
      const code = arr[charIndex].codePointAt(0) & 0xff;
      const flipped = code ^ (1 << (7 - bitIndex));
      arr[charIndex] = String.fromCharCode(flipped);
      return arr.join("");
    });
  };

  return (
    <figure className={`${styles.textMem} ${className}`}>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Text:</span>
        <input
          type="text"
          value={text}
          maxLength={MAX_LEN}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
      </label>

      <div className={styles.rows}>
        <div className={`${styles.row} ${styles.header}`}>
          <span className={styles.address}>Adresse</span>
          <span className={styles.bits}>Bits</span>
          <span className={styles.char}>ASCII</span>
          <span className={styles.hex}>Hex</span>
          <span className={styles.code}>Dez</span>
        </div>
        {chars.map((char, i) => {
          const code = char.codePointAt(0) & 0xff;
          const address = START_ADDRESS + i;
          return (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: feste Speicherstelle
              key={i}
              className={styles.row}
            >
              <span className={styles.address}>
                0x{address.toString(16).toUpperCase()}
              </span>
              <span className={styles.bits}>
                <Byte
                  value={code}
                  onBitClick={(bitIndex) => flipBit(i, bitIndex)}
                />
              </span>
              <span className={styles.char}>{char === " " ? "␠" : char}</span>
              <span className={styles.hex}>
                0x{code.toString(16).padStart(2, "0").toUpperCase()}
              </span>
              <span className={styles.code}>{code}</span>
            </div>
          );
        })}
      </div>

      <figcaption className={styles.caption}>
        Jedes Byte besteht aus <strong>8 Bits</strong> und liegt an einer
        eigenen <strong>Adresse</strong> im Speicher. Über die{" "}
        <strong>ASCII-Tabelle</strong> wird jedes Byte als Zeichen gelesen —
        untereinander ergeben sie einen Text. Klicke auf ein Bit, um es
        umzuschalten.
      </figcaption>
    </figure>
  );
}
