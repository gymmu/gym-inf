import { Fragment } from "react";

import styles from "./ExtendedTable.module.css";

/** Namen der C0-Steuerzeichen (0–31) und DEL (127). */
const C0_NAMES = [
  "NUL",
  "SOH",
  "STX",
  "ETX",
  "EOT",
  "ENQ",
  "ACK",
  "BEL",
  "BS",
  "HT",
  "LF",
  "VT",
  "FF",
  "CR",
  "SO",
  "SI",
  "DLE",
  "DC1",
  "DC2",
  "DC3",
  "DC4",
  "NAK",
  "SYN",
  "ETB",
  "CAN",
  "EM",
  "SUB",
  "ESC",
  "FS",
  "GS",
  "RS",
  "US",
];

/**
 * Beschreibt ein Byte: welches Zeichen wird angezeigt und zu welcher
 * Kategorie gehört es.
 *
 * @param {number} code Byte-Wert (0–255)
 */
function describe(code) {
  // C0-Steuerzeichen
  if (code < 32) {
    return { kind: "control", glyph: "▨", label: C0_NAMES[code] };
  }
  // Leerzeichen: druckbar, aber unsichtbar
  if (code === 32) {
    return { kind: "space", glyph: "␣", label: "SPACE" };
  }
  // Druckbares ASCII
  if (code < 127) {
    return {
      kind: "ascii",
      glyph: String.fromCharCode(code),
      label: `ASCII ${code}`,
    };
  }
  if (code === 127) {
    return { kind: "control", glyph: "▨", label: "DEL" };
  }
  // C1-Steuerzeichen (in Latin-1 nicht belegt)
  if (code < 160) {
    return { kind: "control", glyph: "▨", label: "C1 (unbelegt)" };
  }
  // Geschütztes Leerzeichen
  if (code === 160) {
    return { kind: "space", glyph: "␣", label: "NBSP" };
  }
  // Bedingter Trennstrich
  if (code === 173) {
    return { kind: "space", glyph: "-", label: "SHY (weiches Trennzeichen)" };
  }
  // Druckbares Latin-1
  return {
    kind: "latin1",
    glyph: String.fromCharCode(code),
    label: `Latin-1 ${code}`,
  };
}

const COLUMNS = Array.from({ length: 16 }, (_, i) => i);
const ROWS = COLUMNS;

/**
 * ExtendedTable — zeigt die erweiterte ASCII-Tabelle (Latin-1) mit allen
 * 256 möglichen Bytes.
 *
 * @param {number} [highlightCode] zeigt dieses Byte hervorgehoben an
 * @param {string} [className] zusätzliche Klassen
 */
export default function ExtendedTable({ highlightCode, className = "" }) {
  return (
    <div className={`${styles.table} ${className}`}>
      <div className={styles.grid}>
        {ROWS.map((row) => (
          <Fragment key={`r${row}`}>
            <div className={styles.header}>{row * 16}</div>
            {COLUMNS.map((col) => {
              const code = row * 16 + col;
              const { kind, glyph, label } = describe(code);
              const classes = [
                styles.cell,
                styles[kind],
                code === highlightCode ? styles.highlight : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={code}
                  className={classes}
                  title={`${code} — ${label}`}
                >
                  <span className={styles.code}>{code}</span>
                  <span className={styles.char}>{glyph}</span>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
