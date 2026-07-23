// AesSlide -- interaktive AES-Runden-Visualisierung
// Zeigt eine vollstaendige AES-Runde Schritt fuer Schritt:
// State-Eingabe -> SubBytes -> ShiftRows -> MixColumns -> AddRoundKey
// Gruvbox-Farbschema, folientauglich

import { useMemo, useState } from "react";

// --- Gruvbox ---
const C = {
  bg: "#1d2021",
  bgL: "#3c3836",
  bgLL: "#504945",
  fg: "#ebdbb2",
  gray: "#928374",
  grayDim: "#665c54",
  yellow: "#fabd2f",
  yellowDim: "#7a5c00",
  green: "#b8bb26",
  blue: "#83a598",
  aqua: "#8ec07c",
  orange: "#fe8019",
  red: "#fb4934",
  purple: "#d3869b",
};

// --- Zeilenfarben fuer ShiftRows (Zeile 0-3) und Word-Farben fuer Schluessel ---
const ROW_COLORS = [C.fg, C.blue, C.green, C.orange];
const WORD_COLORS = [C.blue, C.green, C.orange, C.purple];

// --- AES S-Box ---
const SBOX = [
  0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe,
  0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4,
  0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7,
  0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3,
  0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09,
  0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3,
  0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe,
  0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85,
  0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92,
  0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c,
  0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19,
  0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14,
  0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2,
  0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5,
  0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25,
  0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
  0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86,
  0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e,
  0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42,
  0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16,
];

// --- AES-Operationen ---
function subBytes(state) {
  return state.map((b) => SBOX[b]);
}

function shiftRows(state) {
  const s = [...state];
  // Zeile 1: 1 links (Indizes 1,5,9,13)
  const r1 = [s[1], s[5], s[9], s[13]];
  [s[1], s[5], s[9], s[13]] = [r1[1], r1[2], r1[3], r1[0]];
  // Zeile 2: 2 links (Indizes 2,6,10,14)
  const r2 = [s[2], s[6], s[10], s[14]];
  [s[2], s[6], s[10], s[14]] = [r2[2], r2[3], r2[0], r2[1]];
  // Zeile 3: 3 links (Indizes 3,7,11,15)
  const r3 = [s[3], s[7], s[11], s[15]];
  [s[3], s[7], s[11], s[15]] = [r3[3], r3[0], r3[1], r3[2]];
  return s;
}

function gmul(a, b) {
  let p = 0;
  for (let i = 0; i < 8; i++) {
    if (b & 1) p ^= a;
    const hiBit = a & 0x80;
    a = (a << 1) & 0xff;
    if (hiBit) a ^= 0x1b;
    b >>= 1;
  }
  return p;
}

function mixColumns(state) {
  const s = [...state];
  const MIX = [
    [2, 3, 1, 1],
    [1, 2, 3, 1],
    [1, 1, 2, 3],
    [3, 1, 1, 2],
  ];
  for (let col = 0; col < 4; col++) {
    const c = [s[col * 4], s[col * 4 + 1], s[col * 4 + 2], s[col * 4 + 3]];
    for (let row = 0; row < 4; row++) {
      s[col * 4 + row] = MIX[row].reduce((acc, m, j) => acc ^ gmul(m, c[j]), 0);
    }
  }
  return s;
}

function addRoundKey(state, key) {
  return state.map((b, i) => b ^ key[i]);
}

// --- Hilfsfunktionen ---
function toHex(n) {
  return n.toString(16).padStart(2, "0").toUpperCase();
}

function parseHexInput(str) {
  // Parst einen Hex-String in ein Array von 16 Bytes
  const clean = str.replace(/\s+/g, "").replace(/[^0-9a-fA-F]/g, "");
  const bytes = [];
  for (let i = 0; i < 32; i += 2) {
    bytes.push(parseInt(clean.slice(i, i + 2) || "00", 16));
  }
  return bytes.slice(0, 16);
}

function formatHexGrid(bytes) {
  return bytes.map(toHex).join(" ");
}

// Default-Werte: "HALLO WELT!!!!!!" als Hex
const DEFAULT_PLAIN = "48 41 4C 4C 4F 20 57 45 4C 54 21 21 21 21 21 21";
const DEFAULT_KEY = "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C";

// --- StateMatrix-Komponente ---
function StateMatrix({
  bytes,
  label,
  color = C.aqua,
  changedIndices = null,
  prevBytes = null,
  compact = false,
}) {
  const size = compact ? 42 : 50;
  const fs = compact ? 11 : 13;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: compact ? 3 : 5,
      }}
    >
      {label && (
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: compact ? 10 : 11,
            color: C.gray,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: size * 4 + 3 * 3,
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: compact ? 2 : 3,
        }}
      >
        {bytes.map((b, i) => {
          const changed = changedIndices
            ? changedIndices.has(i)
            : prevBytes
              ? prevBytes[i] !== b
              : false;
          return (
            <div
              key={i}
              style={{
                width: size,
                height: size,
                background: changed ? "#1a2010" : C.bgL,
                border: `2px solid ${changed ? C.green : color}`,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Courier New', monospace",
                fontSize: fs,
                fontWeight: 700,
                color: changed ? C.green : color,
                boxShadow: changed ? `0 0 6px ${C.green}44` : "none",
                transition: "all 0.2s",
              }}
            >
              {toHex(b)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- ShiftRows-Visualisierung ---
function ShiftRowsViz({ before, after }) {
  const rowColors = ROW_COLORS;

  function getRow(bytes, row) {
    // AES: State[row][col] = bytes[col*4 + row]
    return [bytes[row], bytes[row + 4], bytes[row + 8], bytes[row + 12]];
  }

  const SHIFT_LABELS = [
    "kein Shift",
    "1 Stelle links",
    "2 Stellen links",
    "3 Stellen links",
  ];

  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      {/* Vorher */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div
          style={{
            fontSize: 10,
            color: C.gray,
            fontWeight: 700,
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          Vorher
        </div>
        {[0, 1, 2, 3].map((row) => (
          <div
            key={row}
            style={{ display: "flex", gap: 3, alignItems: "center" }}
          >
            {getRow(before, row).map((b, j) => (
              <div
                key={j}
                style={{
                  width: 38,
                  height: 30,
                  background: C.bgL,
                  border: `1.5px solid ${rowColors[row]}`,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  color: rowColors[row],
                }}
              >
                {toHex(b)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Pfeile */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          paddingTop: 22,
        }}
      >
        {[0, 1, 2, 3].map((row) => (
          <div
            key={row}
            style={{
              height: 30,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div style={{ fontSize: 14, color: rowColors[row] }}>
              {row === 0 ? "→" : "↺"}
            </div>
            <div
              style={{
                fontSize: 9,
                color: rowColors[row],
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {SHIFT_LABELS[row]}
            </div>
          </div>
        ))}
      </div>

      {/* Nachher */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div
          style={{
            fontSize: 10,
            color: C.gray,
            fontWeight: 700,
            marginBottom: 2,
            textAlign: "center",
          }}
        >
          Nachher
        </div>
        {[0, 1, 2, 3].map((row) => (
          <div
            key={row}
            style={{ display: "flex", gap: 3, alignItems: "center" }}
          >
            {getRow(after, row).map((b, j) => {
              const beforeVal = getRow(before, row)[j];
              const changed = beforeVal !== b;
              return (
                <div
                  key={j}
                  style={{
                    width: 38,
                    height: 30,
                    background: changed ? `${rowColors[row]}22` : C.bgL,
                    border: `1.5px solid ${rowColors[row]}`,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Courier New', monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: rowColors[row],
                    boxShadow: changed ? `0 0 4px ${rowColors[row]}55` : "none",
                  }}
                >
                  {toHex(b)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Spaltenfarben fuer MixColumns ---
const COL_COLORS = [C.blue, C.green, C.orange, C.purple];

const MIX_MATRIX = [
  [2, 3, 1, 1],
  [1, 2, 3, 1],
  [1, 1, 2, 3],
  [3, 1, 1, 2],
];

// 4x4-State-Grid mit pro-Spalte-Farben, klickbare Spalten
function ColMatrix({ bytes, label, activeCol, onColClick, dimmed = false }) {
  const cellW = 40;
  const cellH = 32;
  // AES layout: bytes[col*4 + row]
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 10,
            color: C.gray,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          {label}
        </div>
      )}
      {/* Spalten-Header */}
      <div style={{ display: "flex", gap: 2 }}>
        {[0, 1, 2, 3].map((col) => {
          const color = COL_COLORS[col];
          const isActive = activeCol === col;
          return (
            <button
              key={col}
              onClick={() => onColClick(col)}
              style={{
                width: cellW,
                height: 18,
                background: isActive ? `${color}22` : "transparent",
                border: `1px solid ${isActive ? color : "transparent"}`,
                borderRadius: "3px 3px 0 0",
                cursor: "pointer",
                fontFamily: "sans-serif",
                fontSize: 9,
                fontWeight: 700,
                color: isActive ? color : C.bgLL,
                outline: "none",
                transition: "all 0.12s",
              }}
            >
              Sp.{col}
            </button>
          );
        })}
      </div>
      {/* Gitter (4 Zeilen x 4 Spalten) */}
      <div style={{ display: "flex", gap: 2 }}>
        {[0, 1, 2, 3].map((col) => {
          const color = COL_COLORS[col];
          const isActive = activeCol === col;
          return (
            <div
              key={col}
              onClick={() => onColClick(col)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                cursor: "pointer",
                padding: 2,
                borderRadius: 4,
                background: isActive ? `${color}14` : "transparent",
                border: `1.5px solid ${isActive ? color : "transparent"}`,
                transition: "all 0.12s",
              }}
            >
              {[0, 1, 2, 3].map((row) => {
                const b = bytes[col * 4 + row];
                return (
                  <div
                    key={row}
                    style={{
                      width: cellW,
                      height: cellH,
                      background: dimmed ? C.bg : isActive ? C.bgL : C.bgL,
                      border: `1.5px solid ${isActive ? color : dimmed ? C.bgLL : `${color}66`}`,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Courier New', monospace",
                      fontSize: 12,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? color : dimmed ? C.bgLL : `${color}bb`,
                    }}
                  >
                    {toHex(b)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- MixColumns-Visualisierung ---
// Oben: Buttons + beide Matrizen mit MixMatrix dazwischen (horizontal, kompakt)
// Unten: Rechnung fuer aktive Spalte (wenn ausgewaehlt)
function MixColsViz({ before, after, activeCol, onColClick }) {
  const cellH = 32;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Hauptzeile: Eingang-Matrix × MixMatrix → Ausgang-Matrix */}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        {/* Eingangs-Matrix */}
        <ColMatrix
          bytes={before}
          label="Eingabe"
          activeCol={activeCol}
          onColClick={onColClick}
        />

        {/* × MixMatrix */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div style={{ fontSize: 9, color: C.gray, fontWeight: 700 }}>
            MixMatrix
          </div>
          <div style={{ fontSize: 16, color: C.gray, marginBottom: 2 }}>×</div>
          {MIX_MATRIX.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: 2, marginBottom: 2 }}>
              {row.map((v, ci) => (
                <div
                  key={ci}
                  style={{
                    width: 20,
                    height: cellH,
                    background: v > 1 ? "#1a1020" : C.bg,
                    border: `1px solid ${v > 1 ? C.purple : C.bgLL}`,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Courier New', monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: v > 1 ? C.purple : C.gray,
                  }}
                >
                  {v}
                </div>
              ))}
            </div>
          ))}
          <div style={{ fontSize: 8, color: C.bgLL }}>GF(2^8)</div>
        </div>

        {/* → */}
        <div style={{ fontSize: 18, color: C.gray, marginTop: 20 }}>→</div>

        {/* Ausgangs-Matrix */}
        <ColMatrix
          bytes={after}
          label="Ausgabe"
          activeCol={activeCol}
          onColClick={onColClick}
        />
      </div>

      {/* Rechnung fuer aktive Spalte */}
      {activeCol !== null &&
        (() => {
          const color = COL_COLORS[activeCol];
          const colIn = [0, 1, 2, 3].map((r) => before[activeCol * 4 + r]);
          const colOut = [0, 1, 2, 3].map((r) => after[activeCol * 4 + r]);
          return (
            <div
              style={{
                background: C.bg,
                border: `1.5px solid ${color}`,
                borderRadius: 6,
                padding: "7px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color,
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  marginBottom: 2,
                }}
              >
                Spalte {activeCol} — Rechnung (jede Zeile ergibt ein
                Ausgabe-Byte)
              </div>
              {colOut.map((out, ri) => (
                <div
                  key={ri}
                  style={{
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                    fontFamily: "'Courier New', monospace",
                    fontSize: 10,
                  }}
                >
                  <span style={{ color, fontWeight: 700, minWidth: 22 }}>
                    {toHex(out)}
                  </span>
                  <span style={{ color: C.bgLL }}>=</span>
                  {MIX_MATRIX[ri].map((m, j) => (
                    <span
                      key={j}
                      style={{ display: "flex", gap: 2, alignItems: "center" }}
                    >
                      {j > 0 && (
                        <span style={{ color: C.bgLL, margin: "0 2px" }}>
                          ⊕
                        </span>
                      )}
                      {m > 1 && <span style={{ color: C.purple }}>{m}·</span>}
                      <span style={{ color: C.gray }}>{toHex(colIn[j])}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        })()}
    </div>
  );
}

// --- S-Box-Tabelle: 8 Zeilen x 16 Spalten (Haelfte der S-Box) ---
// Zeigt die S-Box als Nachschlagetabelle mit markierter Zeile+Spalte
function SBoxTable({ highlightByte }) {
  const NIBBLES = "0123456789ABCDEF".split("");
  // Zeige 8 Zeilen (0x0? bis 0x7?), damit die Tabelle nicht zu gross wird
  const SHOW_ROWS = 8;

  const hRow = highlightByte !== null ? (highlightByte >> 4) & 0xf : null;
  const hCol = highlightByte !== null ? highlightByte & 0xf : null;

  const cellW = 28;
  const cellH = 20;
  const headerW = 22;

  return (
    <div style={{ overflowX: "auto" }}>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "0.7em",
          color: C.gray,
          fontWeight: 700,
          marginBottom: 4,
        }}
      >
        AES S-Box (erste 8 Zeilen) — Zeile = oberes Nibble, Spalte = unteres
        Nibble
      </div>
      <table
        style={{
          borderCollapse: "collapse",
          fontFamily: "'Courier New', monospace",
          fontSize: 11,
        }}
      >
        <thead>
          <tr>
            {/* leere Ecke */}
            <th
              style={{
                width: headerW,
                height: cellH,
                background: C.bg,
                border: `1px solid ${C.bgLL}`,
              }}
            />
            {NIBBLES.map((n, ci) => (
              <th
                key={ci}
                style={{
                  width: cellW,
                  height: cellH,
                  background: hCol === ci ? "#1a1810" : C.bg,
                  border: `1px solid ${C.bgLL}`,
                  color: hCol === ci ? C.yellow : C.gray,
                  fontWeight: 700,
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                {n}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: SHOW_ROWS }).map((_, ri) => (
            <tr key={ri}>
              {/* Zeilen-Header */}
              <th
                style={{
                  width: headerW,
                  height: cellH,
                  background: hRow === ri ? "#1a1810" : C.bg,
                  border: `1px solid ${C.bgLL}`,
                  color: hRow === ri ? C.yellow : C.gray,
                  fontWeight: 700,
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                {NIBBLES[ri]}
              </th>
              {NIBBLES.map((_, ci) => {
                const byteIdx = ri * 16 + ci;
                const val = SBOX[byteIdx];
                const isHighlight = hRow === ri && hCol === ci;
                return (
                  <td
                    key={ci}
                    style={{
                      width: cellW,
                      height: cellH,
                      background: isHighlight ? "#1a2010" : C.bgL,
                      border: `1px solid ${isHighlight ? C.green : C.bgLL}`,
                      color: isHighlight ? C.green : C.aqua,
                      fontWeight: isHighlight ? 700 : 400,
                      textAlign: "center",
                      boxShadow: isHighlight ? `0 0 6px ${C.green}66` : "none",
                    }}
                  >
                    {toHex(val)}
                  </td>
                );
              })}
            </tr>
          ))}
          {/* Hinweiszeile wenn Byte in zweiter Haelfte liegt */}
          <tr>
            <td
              colSpan={17}
              style={{
                background: C.bg,
                border: `1px solid ${C.bgLL}`,
                color: C.gray,
                fontSize: 9,
                textAlign: "center",
                padding: "2px 0",
              }}
            >
              {hRow !== null && hRow >= SHOW_ROWS
                ? `Zeile ${NIBBLES[hRow]} liegt ausserhalb der Vorschau (vollstaendige S-Box: 16x16)`
                : "... Zeilen 8-F (nicht angezeigt)"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// --- SubBytes-Detail: S-Box-Lookup fuer ein Byte ---
function SBoxDetail({ byte }) {
  const out = SBOX[byte];
  const row = (byte >> 4) & 0xf;
  const col = byte & 0xf;
  const nibbleChars = "0123456789ABCDEF";
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        background: C.bg,
        border: `2px solid ${C.green}`,
        borderRadius: 6,
        padding: "6px 14px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 16,
            fontWeight: 700,
            color: C.blue,
          }}
        >
          {toHex(byte)}
        </div>
        <div style={{ fontSize: 11, color: C.gray }}>
          = Zeile{" "}
          <span style={{ color: C.yellow, fontWeight: 700 }}>
            {nibbleChars[row]}
          </span>
          , Spalte{" "}
          <span style={{ color: C.yellow, fontWeight: 700 }}>
            {nibbleChars[col]}
          </span>
        </div>
      </div>
      <div style={{ fontSize: 16, color: C.gray }}>→</div>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <div style={{ fontSize: 11, color: C.gray }}>S-Box-Wert:</div>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: 16,
            fontWeight: 700,
            color: C.green,
          }}
        >
          {toHex(out)}
        </div>
      </div>
    </div>
  );
}

// --- XOR-Byte-Detail fuer AddRoundKey ---
function XorByteDetail({ stateB, keyB }) {
  const out = stateB ^ keyB;
  function toBin8(n) {
    return n.toString(2).padStart(8, "0");
  }
  const sBin = toBin8(stateB);
  const kBin = toBin8(keyB);
  const oBin = toBin8(out);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        background: C.bgL,
        border: `1px solid ${C.bgLL}`,
        borderRadius: 6,
        padding: "8px 12px",
        fontFamily: "'Courier New', monospace",
        fontSize: 12,
      }}
    >
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ color: C.gray, width: 24, textAlign: "right" }}>S:</span>
        <span style={{ color: C.blue, letterSpacing: "0.1em" }}>{sBin}</span>
        <span style={{ color: C.blue, fontWeight: 700 }}>{toHex(stateB)}</span>
      </div>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ color: C.gray, width: 24, textAlign: "right" }}>K:</span>
        <span style={{ color: C.yellow, letterSpacing: "0.1em" }}>{kBin}</span>
        <span style={{ color: C.yellow, fontWeight: 700 }}>{toHex(keyB)}</span>
      </div>
      <div style={{ height: 1, background: C.bgLL, margin: "2px 0" }} />
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <span style={{ color: C.gray, width: 24, textAlign: "right" }}>⊕:</span>
        <span style={{ color: C.green, letterSpacing: "0.1em" }}>{oBin}</span>
        <span style={{ color: C.green, fontWeight: 700 }}>{toHex(out)}</span>
      </div>
    </div>
  );
}

// --- Schritt-Button ---
function StepBtn({ active, done, onClick, label, color, number }) {
  const borderCol = done ? C.bgLL : active ? color : C.bgLL;
  const bgCol = done ? C.bg : active ? `${color}18` : C.bg;
  const textCol = done ? C.gray : active ? color : C.bgLL;
  return (
    <button
      onClick={onClick}
      style={{
        background: bgCol,
        border: `2px solid ${borderCol}`,
        borderRadius: 8,
        padding: "0.5em 1.2em",
        cursor: done || active ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        transition: "all 0.15s",
        outline: "none",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: done ? C.bgLL : active ? color : C.bgLL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
          color: done ? C.bg : active ? C.bg : C.bg,
        }}
      >
        {done ? "✓" : number}
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "0.72em",
          fontWeight: 700,
          color: textCol,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </button>
  );
}

// --- Hex als lesbarer Text (druckbare ASCII-Zeichen, sonst Punkt) ---
function hexToReadable(bytes) {
  return bytes
    .map((b) => (b >= 32 && b <= 126 ? String.fromCharCode(b) : "."))
    .join("");
}

// --- Hex-Eingabefeld: Label + ASCII rechtsbündig oben, Input darunter ---
function HexInput({ label, value, onChange, color, bytes }) {
  const readable = bytes ? hexToReadable(bytes) : "";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.2em" }}>
      {/* Labelzeile: Label links, ASCII rechts */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "0.5em",
        }}
      >
        <span
          style={{
            fontSize: "0.72em",
            fontFamily: "sans-serif",
            color: C.gray,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        {readable && (
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.78em",
              fontWeight: 700,
              color,
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              opacity: 0.9,
              textAlign: "right",
            }}
          >
            {readable}
          </span>
        )}
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.82em",
          padding: "0.32em 0.6em",
          background: C.bg,
          border: `2px solid ${color}`,
          borderRadius: 4,
          color,
          width: "26em",
          outline: "none",
          letterSpacing: "0.05em",
        }}
        spellCheck={false}
        placeholder="16 Bytes als Hex, z.B. 48 41 4C 4C ..."
      />
    </div>
  );
}

// Gibt die Farbe fuer Byte i im State zurueck, abhaengig vom Modus
// mode "row"  -> Zeilenfarbe (ShiftRows): Byte i liegt in Zeile (i % 4)
// mode "word" -> Word-Farbe (Schluessel): Byte i liegt in Word floor(i/4)
// mode "col"  -> Spaltenfarbe (MixColumns): Byte i liegt in Spalte floor(i/4)
// mode "flat" -> einheitliche Farbe
function byteColor(i, mode, flatColor) {
  if (mode === "row") return ROW_COLORS[i % 4];
  if (mode === "word") return WORD_COLORS[Math.floor(i / 4)];
  if (mode === "col") return COL_COLORS[Math.floor(i / 4)];
  return flatColor;
}

// --- ByteStrip: eine Reihe von 16 Hex-Kaestchen ---
function ByteStrip({
  bytes,
  label,
  colorMode = "flat",
  flatColor = C.aqua,
  dim = false,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <div
        style={{
          fontSize: "0.62em",
          color: C.gray,
          fontFamily: "sans-serif",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: 2, flexWrap: "nowrap" }}>
        {bytes.map((b, i) => {
          const col = dim ? C.bgLL : byteColor(i, colorMode, flatColor);
          return (
            <div
              key={i}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.72em",
                fontWeight: 700,
                color: col,
                background: C.bg,
                border: `1px solid ${col}55`,
                borderRadius: 3,
                padding: "1px 4px",
                whiteSpace: "nowrap",
              }}
            >
              {toHex(b)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- States-Uebersicht: kompakte Zeilen rechts neben den Inputs ---
// Pro Zeile: Label + eine Box mit allen 16 Bytes als Hex-String.
// Aktiver Schritt = farbiger Rahmen, alle immer sichtbar.
function StatesOverview({ step, states }) {
  const { key16, afterSub, afterShift, afterMix, afterArk } = states;

  const rows = [
    { label: "SubBytes", bytes: afterSub, color: C.green, activeSteps: [1] },
    { label: "ShiftRows", bytes: afterShift, color: C.blue, activeSteps: [2] },
    { label: "MixColumns", bytes: afterMix, color: C.orange, activeSteps: [3] },
    { label: "Ergebnis", bytes: afterArk, color: C.red, activeSteps: [4, 5] },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
      }}
    >
      {rows.map(({ label, bytes, color, activeSteps }, ri) => {
        const isActive = activeSteps.includes(step);
        return (
          <div
            key={ri}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            {/* Label */}
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "0.62em",
                fontWeight: 700,
                color: isActive ? color : C.gray,
                minWidth: 60,
                textAlign: "right",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                transition: "color 0.15s",
              }}
            >
              {label}
            </div>
            {/* Eine Box mit allen 16 Bytes */}
            <div
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.7em",
                fontWeight: isActive ? 700 : 400,
                color: isActive ? color : C.gray,
                background: isActive ? `${color}14` : C.bg,
                border: `1.5px solid ${isActive ? color : C.bgLL}`,
                borderRadius: 4,
                padding: "3px 7px",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              {bytes.map(toHex).join(" ")}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// --- Schritt-Inhalt-Komponente ---
function StepContent({
  step,
  states,
  key16,
  selectedByte,
  setSelectedByte,
  selectedCol,
  setSelectedCol,
}) {
  const { input, afterSub, afterShift, afterMix, afterArk } = states;

  if (step === 0) {
    // Eingabe
    return (
      <div
        style={{
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <StateMatrix
          bytes={input}
          label="State (16 Bytes = 4x4-Matrix)"
          color={C.blue}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 340,
          }}
        >
          <div
            style={{
              background: C.bgL,
              border: `1px solid ${C.bgLL}`,
              borderRadius: 8,
              padding: "12px 16px",
            }}
          >
            <div
              style={{
                fontSize: "0.85em",
                fontFamily: "sans-serif",
                color: C.gray,
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              Wie der AES-State aufgebaut ist:
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "0.8em",
                color: C.fg,
                lineHeight: 1.7,
              }}
            >
              <div>
                16 Bytes werden in eine{" "}
                <strong style={{ color: C.blue }}>4x4-Matrix</strong>{" "}
                geschrieben.
              </div>
              <div>
                Die Matrix wird{" "}
                <strong style={{ color: C.blue }}>spaltenweise</strong> befuellt
                (column-major).
              </div>
              <div style={{ marginTop: 6, color: C.gray, fontSize: "0.9em" }}>
                Byte 0,4,8,12 = Zeile 0<br />
                Byte 1,5,9,13 = Zeile 1<br />
                Byte 2,6,10,14 = Zeile 2<br />
                Byte 3,7,11,15 = Zeile 3
              </div>
            </div>
          </div>
          <div
            style={{
              background: C.bgL,
              border: `1px solid ${C.bgLL}`,
              borderRadius: 8,
              padding: "10px 16px",
              fontSize: "0.8em",
              color: C.gray,
              fontFamily: "sans-serif",
            }}
          >
            Klicke auf <strong style={{ color: C.yellow }}>SubBytes</strong>, um
            den ersten Schritt zu sehen.
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    // SubBytes -- Layout: oben Vorher/Nachher nebeneinander, unten S-Box-Tabelle
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Zeile 1: Vorher -> Nachher + Byte-Auswahl kompakt */}
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <StateMatrix bytes={input} label="Vorher" color={C.blue} compact />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <div
              style={{
                fontSize: "0.68em",
                color: C.green,
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              SubBytes
            </div>
            <div style={{ fontSize: 22, color: C.green }}>→</div>
          </div>
          <StateMatrix
            bytes={afterSub}
            label="Nachher"
            color={C.green}
            prevBytes={input}
            compact
          />

          {/* Byte-Auswahl + Lookup-Ergebnis rechts davon */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginLeft: 8,
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "0.72em",
                fontWeight: 700,
                color: C.gray,
              }}
            >
              Byte anklicken → S-Box-Lookup:
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gap: 2,
              }}
            >
              {input.map((b, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedByte(i === selectedByte ? null : i)}
                  style={{
                    width: 34,
                    height: 26,
                    background: selectedByte === i ? "#1a2010" : C.bgL,
                    border: `1.5px solid ${selectedByte === i ? C.green : C.blue}`,
                    borderRadius: 3,
                    cursor: "pointer",
                    fontFamily: "'Courier New', monospace",
                    fontSize: 10,
                    fontWeight: 700,
                    color: selectedByte === i ? C.green : C.blue,
                    outline: "none",
                    transition: "all 0.1s",
                  }}
                >
                  {toHex(b)}
                </button>
              ))}
            </div>
            {selectedByte !== null ? (
              <SBoxDetail byte={input[selectedByte]} />
            ) : (
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "0.72em",
                  color: C.bgLL,
                  fontStyle: "italic",
                }}
              >
                Kein Byte ausgewaehlt
              </div>
            )}
          </div>
        </div>

        {/* Zeile 2: S-Box-Tabelle */}
        <SBoxTable
          highlightByte={selectedByte !== null ? input[selectedByte] : null}
        />
      </div>
    );
  }

  if (step === 2) {
    // ShiftRows
    return (
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <ShiftRowsViz before={afterSub} after={afterShift} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxWidth: 280,
          }}
        >
          <div
            style={{
              background: C.bgL,
              border: `1px solid ${C.bgLL}`,
              borderRadius: 8,
              padding: "10px 14px",
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "0.78em",
                fontWeight: 700,
                color: C.gray,
                marginBottom: 6,
              }}
            >
              Warum ShiftRows?
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: "0.75em",
                color: C.fg,
                lineHeight: 1.7,
              }}
            >
              Bytes aus verschiedenen{" "}
              <strong style={{ color: C.blue }}>Spalten</strong> kommen
              zusammen.
              <br />
              Zusammen mit MixColumns sorgt das dafuer, dass nach 2 Runden jedes
              Ausgabe-Byte von{" "}
              <strong style={{ color: C.green }}>allen 16</strong> Eingabe-Bytes
              abhaengt.
            </div>
          </div>
          <div
            style={{
              background: C.bgL,
              border: `1px solid ${C.bgLL}`,
              borderRadius: 6,
              padding: "8px 12px",
              fontSize: "0.75em",
              color: C.gray,
              fontFamily: "sans-serif",
            }}
          >
            Zeile 0 bleibt unveraendert. Zeile 1 wird um 1, Zeile 2 um 2, Zeile
            3 um 3 Stellen nach links rotiert.
          </div>
        </div>
      </div>
    );
  }

  if (step === 3) {
    // MixColumns -- horizontales Layout, eine Farbe pro Spalte
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Hinweistext */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.72em",
            color: C.gray,
          }}
        >
          Spalte anklicken fuer Details — jede Spalte wird unabhaengig gemischt.
        </div>

        {/* Hauptvisualisierung */}
        <div style={{ overflowX: "auto" }}>
          <MixColsViz
            before={afterShift}
            after={afterMix}
            activeCol={selectedCol}
            onColClick={(c) => setSelectedCol(c === selectedCol ? null : c)}
          />
        </div>
      </div>
    );
  }

  if (step === 4) {
    // AddRoundKey -- kompaktes Layout:
    // Oben: drei Matrizen nebeneinander (State ⊕ Key → Ergebnis)
    // Unten: XOR-Detail fuer angeklicktes Byte (horizontal)
    const cellW = 40;
    const cellH = 32;

    function ArkMatrix({ bytes, label, colorFn, onClick, activeIdx }) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: C.gray,
              fontWeight: 700,
              fontFamily: "sans-serif",
            }}
          >
            {label}
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {[0, 1, 2, 3].map((col) => (
              <div
                key={col}
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {[0, 1, 2, 3].map((row) => {
                  const i = col * 4 + row;
                  const b = bytes[i];
                  const color = colorFn(i);
                  const isActive = activeIdx === i;
                  return (
                    <div
                      key={row}
                      onClick={() => onClick && onClick(i)}
                      style={{
                        width: cellW,
                        height: cellH,
                        background: isActive ? `${color}22` : C.bgL,
                        border: `1.5px solid ${isActive ? color : `${color}88`}`,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Courier New', monospace",
                        fontSize: 12,
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? color : `${color}cc`,
                        cursor: onClick ? "pointer" : "default",
                        transition: "all 0.1s",
                        boxShadow: isActive ? `0 0 5px ${color}55` : "none",
                      }}
                    >
                      {toHex(b)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Ergebnis-Matrix: geaenderte Bytes gruen, unveraenderte grau
    function ResultMatrix({ bytes, prevBytes, label, activeIdx, onClick }) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: C.gray,
              fontWeight: 700,
              fontFamily: "sans-serif",
            }}
          >
            {label}
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {[0, 1, 2, 3].map((col) => (
              <div
                key={col}
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {[0, 1, 2, 3].map((row) => {
                  const i = col * 4 + row;
                  const b = bytes[i];
                  const changed = prevBytes[i] !== b;
                  const isActive = activeIdx === i;
                  const color = changed ? C.green : C.gray;
                  return (
                    <div
                      key={row}
                      onClick={() => onClick && onClick(i)}
                      style={{
                        width: cellW,
                        height: cellH,
                        background: isActive ? `${color}22` : C.bgL,
                        border: `1.5px solid ${isActive ? color : `${color}66`}`,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Courier New', monospace",
                        fontSize: 12,
                        fontWeight: isActive || changed ? 700 : 400,
                        color: isActive ? color : `${color}cc`,
                        cursor: "pointer",
                        transition: "all 0.1s",
                      }}
                    >
                      {toHex(b)}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      );
    }

    function toBin8(n) {
      return n.toString(2).padStart(8, "0");
    }

    const sel = selectedByte;
    const stateB = sel !== null ? afterMix[sel] : null;
    const keyB = sel !== null ? key16[sel] : null;
    const outB = sel !== null ? afterArk[sel] : null;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Drei Matrizen nebeneinander */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <ArkMatrix
            bytes={afterMix}
            label="State"
            colorFn={(i) => C.blue}
            onClick={(i) => setSelectedByte(i === selectedByte ? null : i)}
            activeIdx={selectedByte}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              marginTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: C.yellow,
                fontFamily: "'Courier New', monospace",
                fontWeight: 700,
              }}
            >
              ⊕
            </div>
          </div>
          <ArkMatrix
            bytes={key16}
            label="Rundenschluessel"
            colorFn={(i) => WORD_COLORS[Math.floor(i / 4)]}
            activeIdx={selectedByte}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              marginTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 9,
                color: C.green,
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              AddRoundKey
            </div>
            <div style={{ fontSize: 18, color: C.green }}>→</div>
          </div>
          <ResultMatrix
            bytes={afterArk}
            prevBytes={afterMix}
            label="Ergebnis"
            activeIdx={selectedByte}
            onClick={(i) => setSelectedByte(i === selectedByte ? null : i)}
          />

          {/* XOR-Detail horizontal */}
          {sel !== null && (
            <div
              style={{
                marginLeft: 8,
                padding: "8px 12px",
                background: C.bg,
                border: `1.5px solid ${C.yellow}`,
                borderRadius: 6,
                fontFamily: "'Courier New', monospace",
                fontSize: 11,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: C.yellow,
                  fontWeight: 700,
                  fontFamily: "sans-serif",
                  marginBottom: 2,
                }}
              >
                Byte {sel} — XOR
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ color: C.gray, width: 14 }}>S</span>
                <span style={{ color: C.blue, letterSpacing: "0.08em" }}>
                  {toBin8(stateB)}
                </span>
                <span style={{ color: C.blue, fontWeight: 700, minWidth: 22 }}>
                  {toHex(stateB)}
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ color: C.gray, width: 14 }}>K</span>
                <span style={{ color: C.yellow, letterSpacing: "0.08em" }}>
                  {toBin8(keyB)}
                </span>
                <span
                  style={{ color: C.yellow, fontWeight: 700, minWidth: 22 }}
                >
                  {toHex(keyB)}
                </span>
              </div>
              <div style={{ height: 1, background: C.bgLL }} />
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ color: C.gray, width: 14 }}>⊕</span>
                <span style={{ color: C.green, letterSpacing: "0.08em" }}>
                  {toBin8(outB)}
                </span>
                <span style={{ color: C.green, fontWeight: 700, minWidth: 22 }}>
                  {toHex(outB)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Hinweis */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "0.72em",
            color: C.gray,
          }}
        >
          Byte anklicken fuer XOR-Detail. Schluessel-Bytes in Word-Farben (4
          Bytes pro Word).
        </div>
      </div>
    );
  }

  if (step === 5) {
    // Zusammenfassung -- 5 kompakte Matrizen horizontal mit Pfeilen
    const stages = [
      {
        label: "Eingabe",
        bytes: input,
        prev: null,
        color: C.blue,
        colorFn: () => C.blue,
      },
      {
        label: "SubBytes",
        bytes: afterSub,
        prev: input,
        stepColor: C.green,
        colorFn: () => C.green,
      },
      {
        label: "ShiftRows",
        bytes: afterShift,
        prev: afterSub,
        stepColor: C.blue,
        colorFn: (i) => ROW_COLORS[i % 4],
      },
      {
        label: "MixColumns",
        bytes: afterMix,
        prev: afterShift,
        stepColor: C.orange,
        colorFn: (i) => COL_COLORS[Math.floor(i / 4)],
      },
      {
        label: "Ergebnis",
        bytes: afterArk,
        prev: afterMix,
        stepColor: C.yellow,
        colorFn: () => C.red,
      },
    ];

    const cellW = 34;
    const cellH = 26;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 4,
          overflowX: "auto",
        }}
      >
        {stages.map(({ label, bytes, prev, stepColor, colorFn }, si) => (
          <div
            key={si}
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            {/* Pfeil + Schritt-Label zwischen den Matrizen */}
            {si > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: stepColor,
                    fontWeight: 700,
                    fontFamily: "sans-serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stages[si].label === "Ergebnis"
                    ? "AddRoundKey"
                    : stages[si].label}
                </div>
                <div style={{ fontSize: 16, color: stepColor }}>→</div>
              </div>
            )}

            {/* Matrix */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 9,
                  color: C.gray,
                  fontWeight: 700,
                }}
              >
                {label}
              </div>
              <div style={{ display: "flex", gap: 2 }}>
                {[0, 1, 2, 3].map((col) => (
                  <div
                    key={col}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {[0, 1, 2, 3].map((row) => {
                      const i = col * 4 + row;
                      const b = bytes[i];
                      const changed = prev && prev[i] !== b;
                      const col_ = colorFn(i);
                      return (
                        <div
                          key={row}
                          style={{
                            width: cellW,
                            height: cellH,
                            background: changed ? `${col_}22` : C.bgL,
                            border: `1.5px solid ${changed ? col_ : `${col_}55`}`,
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Courier New', monospace",
                            fontSize: 10,
                            fontWeight: changed ? 700 : 400,
                            color: changed ? col_ : `${col_}88`,
                          }}
                        >
                          {toHex(b)}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              {/* ASCII unter der Matrix */}
              <div
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 8,
                  color: si === stages.length - 1 ? C.red : C.bgLL,
                  letterSpacing: "0.04em",
                  fontWeight: si === stages.length - 1 ? 700 : 400,
                }}
              >
                {hexToReadable(bytes)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

// --- STEP-DEFINITIONEN ---
const STEPS = [
  { label: "Eingabe", color: C.blue, num: "0" },
  { label: "SubBytes", color: C.green, num: "1" },
  { label: "ShiftRows", color: C.blue, num: "2" },
  { label: "MixColumns", color: C.orange, num: "3" },
  { label: "AddRoundKey", color: C.yellow, num: "4" },
  { label: "Zusammenfassung", color: C.red, num: "✓" },
];

const STEP_DESCRIPTIONS = [
  "Der 128-Bit-Klartext wird als 4x4-Byte-Matrix dargestellt.",
  "Jedes der 16 Bytes wird durch die nichtlineare S-Box ersetzt (Konfusion).",
  "Die vier Zeilen der Matrix werden zyklisch nach links verschoben (Diffusion).",
  "Jede der vier Spalten wird mit einer fixen Matrix im Galois-Feld gemischt (Diffusion).",
  "Die Matrix wird mit dem Rundenschluessel per XOR verknuepft (Schluessel einbringen).",
  "Eine vollstaendige Runde: SubBytes → ShiftRows → MixColumns → AddRoundKey.",
];

// --- Hauptkomponente ---
export default function AesSlide({
  defaultPlain = DEFAULT_PLAIN,
  defaultKey = DEFAULT_KEY,
}) {
  const [plainHex, setPlainHex] = useState(defaultPlain);
  const [keyHex, setKeyHex] = useState(defaultKey);
  const [step, setStep] = useState(0);
  const [selectedByte, setSelectedByte] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);

  const states = useMemo(() => {
    const input = parseHexInput(plainHex);
    const key16 = parseHexInput(keyHex);
    const afterSub = subBytes(input);
    const afterShift = shiftRows(afterSub);
    const afterMix = mixColumns(afterShift);
    const afterArk = addRoundKey(afterMix, key16);
    return { input, key16, afterSub, afterShift, afterMix, afterArk };
  }, [plainHex, keyHex]);

  function handleStepClick(i) {
    setStep(i);
    setSelectedByte(null);
    setSelectedCol(null);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        padding: "1.2em 1.6em",
        background: C.bgL,
        border: `1px solid ${C.bgLL}`,
        borderRadius: 8,
        fontSize: "1rem",
      }}
    >
      {/* Header: Inputs links + States-Uebersicht rechts */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Eingabefelder gestapelt */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6em" }}>
          <HexInput
            label="Klartext (16 Bytes Hex)"
            value={plainHex}
            onChange={setPlainHex}
            color={C.blue}
            bytes={states.input}
          />
          <HexInput
            label="Rundenschluessel (16 Bytes Hex)"
            value={keyHex}
            onChange={setKeyHex}
            color={C.yellow}
            bytes={states.key16}
          />
        </div>
        {/* Zwischenzustaende rechts */}
        <StatesOverview step={step} states={states} />
      </div>

      {/* Schritt-Buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.6em",
          flexWrap: "wrap",
          paddingBottom: "0.5em",
          borderBottom: `1px solid ${C.bgLL}`,
        }}
      >
        {STEPS.map(({ label, color, num }, i) => (
          <StepBtn
            key={i}
            active={step === i}
            done={step > i}
            onClick={() => handleStepClick(i)}
            label={label}
            color={color}
            number={num}
          />
        ))}
      </div>

      {/* Schritt-Beschreibung */}
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "0.82em",
          color: C.gray,
          minHeight: "1.4em",
          marginTop: "-0.3em",
        }}
      >
        <strong style={{ color: STEPS[step].color }}>
          {STEPS[step].label}:
        </strong>{" "}
        {STEP_DESCRIPTIONS[step]}
      </div>

      {/* Schritt-Inhalt */}
      <div style={{ minHeight: "14em", overflowX: "auto" }}>
        <StepContent
          step={step}
          states={states}
          key16={states.key16}
          selectedByte={selectedByte}
          setSelectedByte={setSelectedByte}
          selectedCol={selectedCol}
          setSelectedCol={setSelectedCol}
        />
      </div>

      {/* Navigations-Buttons */}
      <div
        style={{
          display: "flex",
          gap: "0.6em",
          paddingTop: "0.4em",
          borderTop: `1px solid ${C.bgLL}`,
        }}
      >
        <button
          onClick={() => handleStepClick(Math.max(0, step - 1))}
          disabled={step === 0}
          style={{
            background: step === 0 ? C.bg : C.bgL,
            border: `2px solid ${step === 0 ? C.bgLL : C.gray}`,
            borderRadius: 6,
            padding: "0.35em 1.2em",
            color: step === 0 ? C.bgLL : C.fg,
            fontFamily: "sans-serif",
            fontSize: "0.85em",
            fontWeight: 600,
            cursor: step === 0 ? "default" : "pointer",
            outline: "none",
          }}
        >
          ← Zurueck
        </button>
        <button
          onClick={() => handleStepClick(Math.min(STEPS.length - 1, step + 1))}
          disabled={step === STEPS.length - 1}
          style={{
            background: step === STEPS.length - 1 ? C.bg : "#1a1810",
            border: `2px solid ${step === STEPS.length - 1 ? C.bgLL : C.yellow}`,
            borderRadius: 6,
            padding: "0.35em 1.2em",
            color: step === STEPS.length - 1 ? C.bgLL : C.yellow,
            fontFamily: "sans-serif",
            fontSize: "0.85em",
            fontWeight: 600,
            cursor: step === STEPS.length - 1 ? "default" : "pointer",
            outline: "none",
          }}
        >
          Weiter →
        </button>
      </div>
    </div>
  );
}
