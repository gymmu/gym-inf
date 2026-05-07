// AesViz -- Remotion-Animation fuer AES-128
// Szenen: Gesamtuebersicht, Key Schedule, SubBytes, ShiftRows, MixColumns, AddRoundKey
// Gleicher Stil wie XorViz (Gruvbox-Farbschema)

import { Player } from "@remotion/player"
import { useRef } from "react"
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

// --- Gruvbox ---
const C = {
  bg: "#1d2021",
  bgL: "#3c3836",
  bgLL: "#504945",
  fg: "#ebdbb2",
  gray: "#928374",
  yellow: "#fabd2f",
  green: "#b8bb26",
  blue: "#83a598",
  aqua: "#8ec07c",
  orange: "#fe8019",
  red: "#fb4934",
  purple: "#d3869b",
}

const FPS = 30

// --- Hilfsfunktionen ---
function fade(frame, start, dur = 15) {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
}

function fadeOut(frame, start, dur = 12) {
  return interpolate(frame, [start, start + dur], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
}

// Echte AES S-Box (256 Eintraege)
const SBOX = [
  0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b,
  0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0,
  0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26,
  0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
  0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2,
  0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0,
  0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed,
  0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
  0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f,
  0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5,
  0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec,
  0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
  0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14,
  0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c,
  0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d,
  0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
  0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f,
  0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e,
  0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11,
  0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
  0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f,
  0xb0, 0x54, 0xbb, 0x16,
]

function toHex(n) {
  return n.toString(16).padStart(2, "0").toUpperCase()
}

// Beispiel-Plaintext als 4x4-Byte-Matrix (spaltenweise = column-major wie in AES)
// "HALLO WELT!!!!!!" = 16 Bytes
const EXAMPLE_BYTES = [
  0x48, 0x41, 0x4c, 0x4c, // H A L L
  0x4f, 0x20, 0x57, 0x45, // O   W E
  0x4c, 0x54, 0x21, 0x21, // L T ! !
  0x21, 0x21, 0x21, 0x21, // ! ! ! !
]

// Gleicher Key wie Beispiel
const EXAMPLE_KEY = [
  0x2b, 0x7e, 0x15, 0x16, 0x28, 0xae, 0xd2, 0xa6,
  0xab, 0xf7, 0x15, 0x88, 0x09, 0xcf, 0x4f, 0x3c,
]

// Runden-Key (vereinfacht fuer Darstellung -- gleich wie EXAMPLE_KEY Runde 0)
const ROUND_KEY_0 = EXAMPLE_KEY

// State nach SubBytes
const STATE_AFTER_SUBBYTES = EXAMPLE_BYTES.map((b) => SBOX[b])

// ShiftRows: Zeile r wird um r Positionen nach links verschoben
// AES State: Zeile 0 = [0,4,8,12], Zeile 1 = [1,5,9,13], ...
function shiftRows(state) {
  const s = [...state]
  // Zeile 0: kein shift (Index 0,4,8,12)
  // Zeile 1: 1 links (Index 1,5,9,13) -> 5,9,13,1
  const r1 = [s[1], s[5], s[9], s[13]]
  ;[s[1], s[5], s[9], s[13]] = r1
  // Zeile 2: 2 links (Index 2,6,10,14) -> 10,14,2,6
  const r2 = [s[2], s[6], s[10], s[14]]
  ;[s[2], s[6], s[10], s[14]] = [r2[2], r2[3], r2[0], r2[1]]
  // Zeile 3: 3 links (Index 3,7,11,15) -> 15,3,7,11
  const r3 = [s[3], s[7], s[11], s[15]]
  ;[s[3], s[7], s[11], s[15]] = [r3[3], r3[0], r3[1], r3[2]]
  return s
}

const STATE_AFTER_SHIFTROWS = shiftRows(STATE_AFTER_SUBBYTES)

// AddRoundKey
const STATE_AFTER_ARK = EXAMPLE_BYTES.map((b, i) => b ^ ROUND_KEY_0[i])

// --- Timing ---
const S_DUR = {
  s0: 360, // Gesamtuebersicht (270 + 90 Pause)
  s1: 330, // Key Schedule (240 + 90)
  s2: 390, // SubBytes (300 + 90)
  s3: 360, // ShiftRows (270 + 90)
  s4: 360, // MixColumns (270 + 90)
  s5: 330, // AddRoundKey (240 + 90)
}

const SCENE_START = (() => {
  const keys = Object.keys(S_DUR)
  const acc = {}
  let t = 0
  for (const k of keys) {
    acc[k] = t
    t += S_DUR[k]
  }
  acc.total = t
  return acc
})()

const TOTAL = SCENE_START.total

// --- Hilfkomponenten ---
function Title({ children, op = 1 }) {
  return (
    <div
      style={{
        opacity: op,
        position: "absolute",
        top: 28,
        left: "50%",
        transform: "translateX(-50%)",
        color: C.yellow,
        fontSize: 22,
        fontWeight: 700,
        whiteSpace: "nowrap",
        fontFamily: "sans-serif",
      }}>
      {children}
    </div>
  )
}

// 4x4 Hex-Gitter fuer AES-State
function StateGrid({
  bytes,
  colors = null,
  label = null,
  size = 52,
  fontSize = 15,
  highlight = null, // Set von Indizes die hervorgehoben werden
  highlightColor = C.yellow,
  dimmed = false,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      {label && (
        <div style={{ fontFamily: "sans-serif", fontSize: 12, color: C.gray, fontWeight: 700, marginBottom: 2 }}>
          {label}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
        {bytes.map((b, i) => {
          const isHighlighted = highlight && highlight.has(i)
          const col = colors ? colors[i] : (dimmed ? C.bgLL : C.aqua)
          const borderCol = isHighlighted ? highlightColor : (colors ? col : C.bgLL)
          const bg = isHighlighted ? "#1a1810" : C.bgL
          return (
            <div
              key={i}
              style={{
                width: size,
                height: size,
                background: bg,
                border: `2px solid ${isHighlighted ? highlightColor : borderCol}`,
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Courier New', monospace",
                fontSize,
                fontWeight: 700,
                color: dimmed ? C.bgLL : col,
                transition: "all 0.2s",
                boxShadow: isHighlighted ? `0 0 8px ${highlightColor}44` : "none",
              }}>
              {toHex(b)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Pfeil zwischen zwei Grids
function Arrow({ label = null, color = C.gray }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, padding: "0 8px" }}>
      {label && (
        <div style={{ fontFamily: "sans-serif", fontSize: 11, color, fontWeight: 700, textAlign: "center", whiteSpace: "nowrap" }}>
          {label}
        </div>
      )}
      <div style={{ fontSize: 26, color }}>→</div>
    </div>
  )
}

// --- SZENE 0: Gesamtuebersicht ---
function Scene0({ frame }) {
  const local = frame - SCENE_START.s0
  const titleOp = fade(local, 0, 12)

  // 10 Runden erscheinen nacheinander + Initial/Final
  const stateW = 56
  const stateH = 56

  const introOp = fade(local, 15, 18)
  const roundsOp = fade(local, 50, 20)
  const arrowOp = fade(local, 80, 18)
  const infoOp = fade(local, 150, 20)

  const ROUNDS = 10

  const stepLabels = ["SubBytes", "ShiftRows", "MixColumns", "AddRoundKey"]
  const stepColors = [C.green, C.blue, C.orange, C.yellow]

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif" }}>
      <Title op={titleOp}>AES-128 — Gesamtuebersicht</Title>

      {/* Eingabe + Key */}
      <div style={{ opacity: introOp, position: "absolute", top: 72, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 30, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ background: C.bgL, border: `2px solid ${C.blue}`, borderRadius: 8, padding: "8px 20px", color: C.blue, fontWeight: 700, fontSize: 14 }}>
            Klartext (128 Bit)
          </div>
          <div style={{ fontSize: 12, color: C.gray }}>16 Bytes = 4x4-Matrix</div>
        </div>
        <div style={{ fontSize: 22, color: C.gray }}>+</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ background: C.bgL, border: `2px solid ${C.yellow}`, borderRadius: 8, padding: "8px 20px", color: C.yellow, fontWeight: 700, fontSize: 14 }}>
            Schluessel (128 Bit)
          </div>
          <div style={{ fontSize: 12, color: C.gray }}>Key Schedule → 11 Rundenschluessel</div>
        </div>
      </div>

      {/* Runden-Diagramm */}
      <div style={{ opacity: roundsOp, position: "absolute", top: 165, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {/* Initial AddRoundKey */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <div style={{ background: "#1a1810", border: `2px solid ${C.yellow}`, borderRadius: 6, padding: "5px 18px", color: C.yellow, fontWeight: 700, fontSize: 13 }}>
            AddRoundKey (Runde 0)
          </div>
        </div>

        <div style={{ fontSize: 16, color: C.gray, margin: "2px 0" }}>↓</div>

        {/* Runden 1-9 */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            {stepLabels.map((s, i) => (
              <div key={i} style={{ background: C.bgL, border: `2px solid ${stepColors[i]}`, borderRadius: 6, padding: "4px 14px", color: stepColors[i], fontWeight: 700, fontSize: 12, whiteSpace: "nowrap" }}>
                {s}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 18, color: C.gray }}>}</div>
          <div style={{ background: "#1a2a18", border: `2px solid ${C.green}`, borderRadius: 6, padding: "8px 16px", textAlign: "center" }}>
            <div style={{ color: C.green, fontWeight: 700, fontSize: 14 }}>x 9 Runden</div>
            <div style={{ color: C.gray, fontSize: 11, marginTop: 2 }}>Runden 1-9</div>
          </div>
        </div>

        <div style={{ fontSize: 16, color: C.gray, margin: "2px 0" }}>↓</div>

        {/* Letzte Runde */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            {["SubBytes", "ShiftRows", "AddRoundKey"].map((s, i) => {
              const cols = [C.green, C.blue, C.yellow]
              return (
                <div key={i} style={{ background: C.bgL, border: `2px solid ${cols[i]}`, borderRadius: 6, padding: "4px 14px", color: cols[i], fontWeight: 700, fontSize: 12, whiteSpace: "nowrap" }}>
                  {s}
                </div>
              )
            })}
          </div>
          <div style={{ fontSize: 18, color: C.gray }}>}</div>
          <div style={{ background: "#2a1a10", border: `2px solid ${C.orange}`, borderRadius: 6, padding: "8px 16px", textAlign: "center" }}>
            <div style={{ color: C.orange, fontWeight: 700, fontSize: 14 }}>Runde 10</div>
            <div style={{ color: C.gray, fontSize: 11, marginTop: 2 }}>kein MixColumns</div>
          </div>
        </div>

        <div style={{ fontSize: 16, color: C.gray, margin: "2px 0" }}>↓</div>

        {/* Chiffrat */}
        <div style={{ background: "#2a1010", border: `2px solid ${C.red}`, borderRadius: 8, padding: "8px 28px", color: C.red, fontWeight: 700, fontSize: 14 }}>
          Chiffrat (128 Bit)
        </div>
      </div>

      {/* Info */}
      <div style={{ opacity: infoOp, position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", background: "#1a1a10", border: `2px solid ${C.yellow}`, borderRadius: 10, padding: "10px 28px", fontSize: 13, color: C.fg, whiteSpace: "nowrap", textAlign: "center" }}>
        AES-128: <strong style={{ color: C.yellow }}>10 Runden</strong> &nbsp;|&nbsp;
        AES-192: <strong style={{ color: C.yellow }}>12 Runden</strong> &nbsp;|&nbsp;
        AES-256: <strong style={{ color: C.yellow }}>14 Runden</strong>
      </div>
    </AbsoluteFill>
  )
}

// --- SZENE 1: Key Schedule ---
function Scene1({ frame }) {
  const local = frame - SCENE_START.s1
  const titleOp = fade(local, 0, 12)

  const keyOp = fade(local, 20, 18)
  const arrowOp = fade(local, 55, 15)
  const expandOp = fade(local, 70, 18)
  const roundsOp = fade(local, 110, 20)
  const infoOp = fade(local, 160, 20)

  // Haupt-Key als 4 Words
  const KEY_WORDS = [
    [0x2b, 0x7e, 0x15, 0x16],
    [0x28, 0xae, 0xd2, 0xa6],
    [0xab, 0xf7, 0x15, 0x88],
    [0x09, 0xcf, 0x4f, 0x3c],
  ]

  // Abgeleitete Rundenschluessel (vereinfacht, nur erste paar)
  const DERIVED = [
    [0xa0, 0xfa, 0xfe, 0x17],
    [0x88, 0x54, 0x2c, 0xb1],
    [0x23, 0xa3, 0x39, 0x39],
    [0x2a, 0x6c, 0x76, 0x05],
  ]

  const wordColors = [C.blue, C.green, C.orange, C.purple]

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Title op={titleOp}>Key Schedule — Rundenschluessel ableiten</Title>

      {/* Original 128-Bit-Key */}
      <div style={{ opacity: keyOp, marginTop: 40 }}>
        <div style={{ fontSize: 12, color: C.gray, textAlign: "center", marginBottom: 8, fontWeight: 600 }}>
          Original-Schluessel (128 Bit = 4 Words)
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {KEY_WORDS.map((word, wi) => (
            <div key={wi} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
              <div style={{ fontSize: 11, color: wordColors[wi], fontWeight: 700 }}>W{wi}</div>
              {word.map((b, bi) => (
                <div key={bi} style={{ width: 44, height: 32, background: C.bgL, border: `2px solid ${wordColors[wi]}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 700, color: wordColors[wi] }}>
                  {toHex(b)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pfeil + Beschriftung */}
      <div style={{ opacity: arrowOp, margin: "16px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{ fontSize: 24, color: C.gray }}>↓</div>
        <div style={{ background: C.bgL, border: `1px solid ${C.bgLL}`, borderRadius: 6, padding: "6px 18px", display: "flex", gap: 16, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ fontSize: 11, color: C.green, fontWeight: 700 }}>SubWord</div>
            <div style={{ fontSize: 10, color: C.gray }}>S-Box auf 4 Bytes</div>
          </div>
          <div style={{ fontSize: 14, color: C.bgLL }}>+</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ fontSize: 11, color: C.blue, fontWeight: 700 }}>RotWord</div>
            <div style={{ fontSize: 10, color: C.gray }}>1 Byte rotieren</div>
          </div>
          <div style={{ fontSize: 14, color: C.bgLL }}>+</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ fontSize: 11, color: C.yellow, fontWeight: 700 }}>Rcon XOR</div>
            <div style={{ fontSize: 10, color: C.gray }}>Rundenkonstante</div>
          </div>
        </div>
      </div>

      {/* Erweiterte Keys */}
      <div style={{ opacity: expandOp, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ fontSize: 12, color: C.gray, fontWeight: 600 }}>
          Key Expansion → 44 Words fuer 11 Rundenschluessel
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {/* Original 4 Words (grau) */}
          {KEY_WORDS.map((_, wi) => (
            <div key={wi} style={{ width: 36, height: 100, background: C.bgL, border: `1.5px solid ${wordColors[wi]}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: wordColors[wi], fontWeight: 700, writingMode: "vertical-rl" }}>
              W{wi}
            </div>
          ))}
          <div style={{ width: 8, color: C.gray, textAlign: "center", fontSize: 16 }}>|</div>
          {/* Abgeleitete Words */}
          {DERIVED.map((_, wi) => (
            <div key={wi} style={{ width: 36, height: 100, background: "#1a2010", border: `1.5px solid ${C.green}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: C.green, fontWeight: 700, writingMode: "vertical-rl" }}>
              W{wi + 4}
            </div>
          ))}
          <div style={{ fontSize: 14, color: C.gray, paddingLeft: 4 }}>... W43</div>
        </div>
      </div>

      {/* Rundenschluessel-Aufteilung */}
      <div style={{ opacity: roundsOp, marginTop: 16, display: "flex", gap: 6, alignItems: "center" }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} style={{ width: 12, height: 40, background: i === 0 ? "#1a1020" : "#1a1a20", border: `1px solid ${i === 0 ? C.purple : C.blue}`, borderRadius: 2 }} />
              ))}
            </div>
            <div style={{ fontSize: 9, color: C.gray }}>RK{i}</div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div style={{ opacity: infoOp, marginTop: 18, background: "#1a1a10", border: `2px solid ${C.yellow}`, borderRadius: 10, padding: "10px 24px", fontSize: 13, color: C.fg, textAlign: "center" }}>
        Aus <strong style={{ color: C.yellow }}>1 Schluessel</strong> werden{" "}
        <strong style={{ color: C.green }}>11 Rundenschluessel</strong> abgeleitet (fuer 10 Runden + Initialrunde)
      </div>
    </AbsoluteFill>
  )
}

// --- SZENE 2: SubBytes ---
function Scene2({ frame }) {
  const { fps } = useVideoConfig()
  const local = frame - SCENE_START.s2
  const titleOp = fade(local, 0, 12)

  const stateInOp = fade(local, 20, 18)
  const sboxOp = fade(local, 55, 18)

  // Einzelne Bytes werden nacheinander ersetzt
  const replaceStart = 90
  const replaceStag = 12
  const stateOutOp = fade(local, replaceStart + 16 * replaceStag + 10, 20)
  const infoOp = fade(local, replaceStart + 16 * replaceStag + 50, 20)

  // Wie viele Bytes sind schon ersetzt?
  const numReplaced = Math.min(
    16,
    Math.max(0, Math.floor((local - replaceStart) / replaceStag) + 1),
  )

  const INPUT = EXAMPLE_BYTES.slice(0, 16)
  const OUTPUT = STATE_AFTER_SUBBYTES

  // Fuer S-Box-Visualisierung: zeige Lookup fuer Byte 0x48 = 'H' -> 0x52
  const demoIn = 0x48
  const demoOut = SBOX[demoIn]
  const demoRow = (demoIn >> 4) & 0xf
  const demoCol = demoIn & 0xf

  const sboxHighlightOp = fade(local, 70, 15)
  const sboxArrowOp = fade(local, 85, 12)

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Title op={titleOp}>SubBytes — S-Box-Substitution</Title>

      <div style={{ display: "flex", gap: 32, alignItems: "center", marginTop: 32 }}>
        {/* State Input */}
        <div style={{ opacity: stateInOp }}>
          <StateGrid bytes={INPUT} label="State (Eingabe)" colors={INPUT.map((_, i) => i < numReplaced ? C.gray : C.blue)} />
        </div>

        {/* S-Box-Visualisierung (Mini) */}
        <div style={{ opacity: sboxOp, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 12, color: C.gray, fontWeight: 700 }}>S-Box Lookup</div>
          {/* Demo fuer 0x48 -> 0x52 */}
          <div style={{ background: C.bgL, border: `1.5px solid ${C.bgLL}`, borderRadius: 8, padding: "10px 14px", display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center", opacity: sboxHighlightOp }}>
              <div style={{ background: C.bgL, border: `2px solid ${C.blue}`, borderRadius: 4, padding: "4px 10px", fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: C.blue }}>
                {toHex(demoIn)}
              </div>
              <div style={{ opacity: sboxArrowOp, fontSize: 18, color: C.gray }}>→</div>
              <div style={{ opacity: sboxArrowOp, background: "#1a2010", border: `2px solid ${C.green}`, borderRadius: 4, padding: "4px 10px", fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: C.green }}>
                {toHex(demoOut)}
              </div>
            </div>
            <div style={{ fontSize: 10, color: C.gray, textAlign: "center" }}>
              Zeile {toHex(demoRow)}, Spalte {toHex(demoCol)}<br/>
              in der 16x16 S-Box-Tabelle
            </div>

            {/* Mini S-Box Grid (4x4 Ausschnitt fuer Uebersicht) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginTop: 4 }}>
              {[0x63, 0x7c, 0x77, 0x7b,
                0xca, 0x82, 0xc9, 0x7d,
                0xb7, 0xfd, 0x93, 0x26,
                0x04, 0xc7, 0x23, 0xc3].map((v, i) => (
                <div key={i} style={{ width: 26, height: 22, background: i === 0 ? "#1a2010" : C.bg, border: `1px solid ${i === 0 ? C.green : C.bgLL}`, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 9, color: i === 0 ? C.green : C.bgLL, fontWeight: 700 }}>
                  {toHex(v)}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 9, color: C.bgLL }}>... (256 Eintraege)</div>
          </div>

          <div style={{ fontSize: 11, color: C.gray, textAlign: "center", maxWidth: 160 }}>
            Jedes Byte wird nichtlinear ersetzt — bricht lineare Strukturen
          </div>
        </div>

        {/* Pfeil */}
        <div style={{ opacity: stateOutOp }}>
          <Arrow label="SubBytes" color={C.green} />
        </div>

        {/* State Output */}
        <div style={{ opacity: stateOutOp }}>
          <StateGrid bytes={OUTPUT} label="State (nach SubBytes)" colors={OUTPUT.map(() => C.green)} />
        </div>
      </div>

      {/* Fortschrittsanzeige */}
      <div style={{ opacity: stateInOp, marginTop: 20, display: "flex", gap: 4, alignItems: "center" }}>
        <span style={{ fontSize: 12, color: C.gray, marginRight: 4 }}>Ersetzt:</span>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} style={{ width: 16, height: 16, background: i < numReplaced ? C.green : C.bgL, border: `1px solid ${i < numReplaced ? C.green : C.bgLL}`, borderRadius: 2, transition: "background 0.15s" }} />
        ))}
        <span style={{ fontSize: 12, color: C.green, marginLeft: 4, fontWeight: 700 }}>{numReplaced}/16</span>
      </div>

      {/* Info */}
      <div style={{ opacity: infoOp, marginTop: 16, background: "#0d1a0d", border: `2px solid ${C.green}`, borderRadius: 10, padding: "10px 28px", fontSize: 13, color: C.fg, textAlign: "center" }}>
        Die S-Box ist <strong style={{ color: C.green }}>nichtlinear</strong> — das macht AES kryptographisch stark
      </div>
    </AbsoluteFill>
  )
}

// --- SZENE 3: ShiftRows ---
function Scene3({ frame }) {
  const { fps } = useVideoConfig()
  const local = frame - SCENE_START.s3
  const titleOp = fade(local, 0, 12)

  const stateInOp = fade(local, 20, 18)
  const explainOp = fade(local, 55, 18)

  // Zeilen verschieben sich nacheinander
  const shiftStart = 80
  const shiftStag = 40
  const row1Op = interpolate(local, [shiftStart, shiftStart + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const row2Op = interpolate(local, [shiftStart + shiftStag, shiftStart + shiftStag + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
  const row3Op = interpolate(local, [shiftStart + 2 * shiftStag, shiftStart + 2 * shiftStag + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })

  // Wie weit ist jede Zeile bereits verschoben?
  const ROW_SHIFTS = [0, 1, 2, 3]

  const stateOutOp = fade(local, shiftStart + 3 * shiftStag + 10, 20)
  const infoOp = fade(local, shiftStart + 3 * shiftStag + 50, 20)

  const INPUT = STATE_AFTER_SUBBYTES
  const OUTPUT = STATE_AFTER_SHIFTROWS

  // Zeilen aus der AES-State-Matrix (row-major fuer Anzeige)
  // AES State[row][col] = bytes[row + 4*col]
  function getRow(bytes, row) {
    return [bytes[row], bytes[row + 4], bytes[row + 8], bytes[row + 12]]
  }

  const rowColors = [C.fg, C.blue, C.green, C.orange]

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Title op={titleOp}>ShiftRows — Zeilenverschiebung</Title>

      <div style={{ display: "flex", gap: 40, alignItems: "flex-start", marginTop: 32 }}>
        {/* State als Zeilen */}
        <div style={{ opacity: stateInOp, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 12, color: C.gray, fontWeight: 700, marginBottom: 4 }}>State (nach SubBytes)</div>
          {[0, 1, 2, 3].map((row) => {
            const rowBytes = getRow(INPUT, row)
            return (
              <div key={row} style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <div style={{ width: 20, fontSize: 11, color: rowColors[row], fontWeight: 700, textAlign: "right", marginRight: 4 }}>
                  R{row}
                </div>
                {rowBytes.map((b, j) => (
                  <div key={j} style={{ width: 46, height: 36, background: C.bgL, border: `2px solid ${rowColors[row]}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 700, color: rowColors[row] }}>
                    {toHex(b)}
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        {/* Erklaerung */}
        <div style={{ opacity: explainOp, display: "flex", flexDirection: "column", gap: 8, minWidth: 200 }}>
          <div style={{ fontSize: 12, color: C.gray, fontWeight: 700, marginBottom: 4 }}>Verschiebung (links)</div>
          {[
            { label: "Zeile 0", shift: "0 Stellen", color: C.fg },
            { label: "Zeile 1", shift: "1 Stelle", color: C.blue },
            { label: "Zeile 2", shift: "2 Stellen", color: C.green },
            { label: "Zeile 3", shift: "3 Stellen", color: C.orange },
          ].map(({ label, shift, color }, i) => {
            const ops = [1, row1Op, row2Op, row3Op]
            return (
              <div key={i} style={{ opacity: ops[i], display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 50, fontSize: 11, color, fontWeight: 700 }}>{label}</div>
                <div style={{ fontSize: 14, color }}>←</div>
                <div style={{ background: C.bgL, border: `1px solid ${color}`, borderRadius: 4, padding: "3px 10px", fontSize: 11, color, fontWeight: 700 }}>
                  {shift}
                </div>
              </div>
            )
          })}
        </div>

        {/* Pfeil */}
        <div style={{ opacity: stateOutOp, display: "flex", alignItems: "center", paddingTop: 40 }}>
          <Arrow label="ShiftRows" color={C.blue} />
        </div>

        {/* Output */}
        <div style={{ opacity: stateOutOp, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 12, color: C.gray, fontWeight: 700, marginBottom: 4 }}>State (nach ShiftRows)</div>
          {[0, 1, 2, 3].map((row) => {
            const rowBytes = getRow(OUTPUT, row)
            return (
              <div key={row} style={{ display: "flex", gap: 4, alignItems: "center" }}>
                <div style={{ width: 20, fontSize: 11, color: rowColors[row], fontWeight: 700, textAlign: "right", marginRight: 4 }}>
                  R{row}
                </div>
                {rowBytes.map((b, j) => (
                  <div key={j} style={{ width: 46, height: 36, background: "#101820", border: `2px solid ${rowColors[row]}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 13, fontWeight: 700, color: rowColors[row] }}>
                    {toHex(b)}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      {/* Info */}
      <div style={{ opacity: infoOp, marginTop: 28, background: "#101820", border: `2px solid ${C.blue}`, borderRadius: 10, padding: "10px 28px", fontSize: 13, color: C.fg, textAlign: "center" }}>
        ShiftRows sorgt fuer <strong style={{ color: C.blue }}>Diffusion</strong> — Bytes aus verschiedenen Spalten kommen zusammen
      </div>
    </AbsoluteFill>
  )
}

// --- SZENE 4: MixColumns ---
function Scene4({ frame }) {
  const local = frame - SCENE_START.s4
  const titleOp = fade(local, 0, 12)

  const col0Op = fade(local, 25, 18)
  const matrixOp = fade(local, 55, 18)
  const arrowOp = fade(local, 90, 15)
  const resultOp = fade(local, 110, 18)
  const infoOp = fade(local, 170, 20)

  // Eine Beispielspalte
  const COL_IN = [STATE_AFTER_SHIFTROWS[0], STATE_AFTER_SHIFTROWS[1], STATE_AFTER_SHIFTROWS[2], STATE_AFTER_SHIFTROWS[3]]

  // MixColumns-Matrix (Galois-Feld GF(2^8))
  const MIX_MATRIX = [
    [2, 3, 1, 1],
    [1, 2, 3, 1],
    [1, 1, 2, 3],
    [3, 1, 1, 2],
  ]

  // Galois-Feld Multiplikation (GF 2^8 mit Polynom 0x11b)
  function gmul(a, b) {
    let p = 0
    for (let i = 0; i < 8; i++) {
      if (b & 1) p ^= a
      const hiBit = a & 0x80
      a = (a << 1) & 0xff
      if (hiBit) a ^= 0x1b
      b >>= 1
    }
    return p
  }

  const COL_OUT = MIX_MATRIX.map((row) =>
    row.reduce((acc, m, j) => acc ^ gmul(m, COL_IN[j]), 0),
  )

  const matColors = [[C.blue, C.green, C.fg, C.fg], [C.fg, C.blue, C.green, C.fg], [C.fg, C.fg, C.blue, C.green], [C.green, C.fg, C.fg, C.blue]]

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Title op={titleOp}>MixColumns — Galois-Feld-Mischung</Title>

      <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 24 }}>
        {/* MixColumns-Matrix */}
        <div style={{ opacity: matrixOp, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 11, color: C.gray, fontWeight: 700, marginBottom: 4 }}>MixColumns-Matrix</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, background: C.bgL, border: `1.5px solid ${C.bgLL}`, borderRadius: 6, padding: 8 }}>
            {MIX_MATRIX.flat().map((v, i) => {
              const row = Math.floor(i / 4)
              const col = i % 4
              const isSpecial = v === 2 || v === 3
              return (
                <div key={i} style={{ width: 34, height: 34, background: isSpecial ? "#1a1820" : C.bg, border: `1.5px solid ${isSpecial ? C.purple : C.bgLL}`, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: isSpecial ? C.purple : C.gray }}>
                  {v}
                </div>
              )
            })}
          </div>
          <div style={{ fontSize: 10, color: C.gray, textAlign: "center", marginTop: 2 }}>
            Multiplikation in GF(2<sup style={{ fontSize: 8 }}>8</sup>)
          </div>
        </div>

        {/* Multiplikationszeichen */}
        <div style={{ opacity: matrixOp, fontSize: 26, color: C.gray }}>×</div>

        {/* Eingabe-Spalte */}
        <div style={{ opacity: col0Op, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 11, color: C.gray, fontWeight: 700, marginBottom: 4 }}>Spalte 0</div>
          {COL_IN.map((b, i) => (
            <div key={i} style={{ width: 52, height: 36, background: C.bgL, border: `2px solid ${C.blue}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: C.blue }}>
              {toHex(b)}
            </div>
          ))}
        </div>

        {/* Pfeil */}
        <div style={{ opacity: arrowOp, fontSize: 28, color: C.orange }}>→</div>

        {/* Ausgabe-Spalte */}
        <div style={{ opacity: resultOp, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, marginBottom: 4 }}>Neue Spalte 0</div>
          {COL_OUT.map((b, i) => (
            <div key={i} style={{ width: 52, height: 36, background: "#1a1000", border: `2px solid ${C.orange}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Courier New', monospace", fontSize: 14, fontWeight: 700, color: C.orange }}>
              {toHex(b)}
            </div>
          ))}
        </div>

        {/* Erklaerung rechts */}
        <div style={{ opacity: resultOp, marginLeft: 16, display: "flex", flexDirection: "column", gap: 8, maxWidth: 220 }}>
          <div style={{ background: C.bgL, border: `1px solid ${C.bgLL}`, borderRadius: 6, padding: "8px 12px", fontSize: 11, color: C.gray }}>
            Jedes neue Byte haengt von <strong style={{ color: C.orange }}>allen 4 Bytes</strong> der Spalte ab
          </div>
          <div style={{ background: C.bgL, border: `1px solid ${C.bgLL}`, borderRadius: 6, padding: "8px 12px", fontSize: 11, color: C.gray }}>
            Das wird fuer <strong style={{ color: C.blue }}>alle 4 Spalten</strong> wiederholt
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ opacity: infoOp, marginTop: 24, background: "#1a1000", border: `2px solid ${C.orange}`, borderRadius: 10, padding: "10px 28px", fontSize: 13, color: C.fg, textAlign: "center" }}>
        MixColumns maximiert die <strong style={{ color: C.orange }}>Diffusion</strong> — eine Bit-Aenderung breitet sich auf alle Bytes aus
      </div>
    </AbsoluteFill>
  )
}

// --- SZENE 5: AddRoundKey ---
function Scene5({ frame }) {
  const { fps } = useVideoConfig()
  const local = frame - SCENE_START.s5
  const titleOp = fade(local, 0, 12)

  const stateOp = fade(local, 20, 18)
  const keyOp = fade(local, 55, 18)
  const xorOp = fade(local, 80, 15)
  const resultOp = fade(local, 110, 18)
  const infoOp = fade(local, 160, 20)

  // Vereinfacht: nehmen wir EXAMPLE_BYTES als State und KEY als Rundenschluessel
  const STATE_IN = EXAMPLE_BYTES
  const ROUND_KEY = EXAMPLE_KEY
  const STATE_OUT = STATE_AFTER_ARK

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Title op={titleOp}>AddRoundKey — XOR mit Rundenschluessel</Title>

      <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 24 }}>
        {/* State */}
        <div style={{ opacity: stateOp }}>
          <StateGrid bytes={STATE_IN} label="State" colors={STATE_IN.map(() => C.blue)} size={48} fontSize={13} />
        </div>

        {/* XOR-Symbol */}
        <div style={{ opacity: xorOp, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ fontSize: 14, color: C.gray, fontWeight: 700 }}>XOR</div>
          <div style={{ fontSize: 32, color: C.blue, fontFamily: "'Courier New', monospace", fontWeight: 700 }}>⊕</div>
        </div>

        {/* Rundenschluessel */}
        <div style={{ opacity: keyOp }}>
          <StateGrid bytes={ROUND_KEY} label="Rundenschluessel" colors={ROUND_KEY.map(() => C.yellow)} size={48} fontSize={13} />
        </div>

        {/* Pfeil */}
        <div style={{ opacity: resultOp }}>
          <Arrow label="AddRoundKey" color={C.yellow} />
        </div>

        {/* Ergebnis */}
        <div style={{ opacity: resultOp }}>
          <StateGrid bytes={STATE_OUT} label="Neuer State" colors={STATE_OUT.map(() => C.green)} size={48} fontSize={13} />
        </div>
      </div>

      {/* Erklaerung */}
      <div style={{ opacity: xorOp, marginTop: 20, display: "flex", gap: 24, alignItems: "flex-start" }}>
        <div style={{ background: C.bgL, border: `1px solid ${C.bgLL}`, borderRadius: 8, padding: "10px 18px", fontSize: 12, color: C.gray, maxWidth: 280, textAlign: "center" }}>
          Jedes Byte des States wird mit dem entsprechenden Byte des Rundenschluessels <strong style={{ color: C.yellow }}>XOR</strong>-verknuepft
        </div>
        <div style={{ background: C.bgL, border: `1px solid ${C.bgLL}`, borderRadius: 8, padding: "10px 18px", fontSize: 12, color: C.gray, maxWidth: 280, textAlign: "center" }}>
          Gleiche Operation wie bei einfachem XOR — aber eingebettet in 10 Runden mit SubBytes + ShiftRows + MixColumns
        </div>
      </div>

      {/* Info */}
      <div style={{ opacity: infoOp, marginTop: 16, background: "#1a1810", border: `2px solid ${C.yellow}`, borderRadius: 10, padding: "10px 28px", fontSize: 13, color: C.fg, textAlign: "center" }}>
        AddRoundKey ist die einzige Operation, die den <strong style={{ color: C.yellow }}>Schluessel einbringt</strong> — alle anderen sorgen fuer Diffusion und Konfusion
      </div>
    </AbsoluteFill>
  )
}

// --- Hauptkomposition ---
function AesVizComp() {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      {frame < SCENE_START.s1 && <Scene0 frame={frame} />}
      {frame >= SCENE_START.s1 && frame < SCENE_START.s2 && <Scene1 frame={frame} />}
      {frame >= SCENE_START.s2 && frame < SCENE_START.s3 && <Scene2 frame={frame} />}
      {frame >= SCENE_START.s3 && frame < SCENE_START.s4 && <Scene3 frame={frame} />}
      {frame >= SCENE_START.s4 && frame < SCENE_START.s5 && <Scene4 frame={frame} />}
      {frame >= SCENE_START.s5 && <Scene5 frame={frame} />}
    </AbsoluteFill>
  )
}

// --- Export ---
export default function AesViz() {
  const playerRef = useRef(null)
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 8,
        overflow: "hidden",
        border: `1px solid #504945`,
      }}>
      <Player
        ref={playerRef}
        component={AesVizComp}
        durationInFrames={TOTAL}
        compositionWidth={1280}
        compositionHeight={720}
        fps={FPS}
        style={{ width: "100%", aspectRatio: "16/9" }}
        controls
        loop={false}
        autoPlay={false}
        acknowledgeRemotionLicense
        onEnded={() => {
          playerRef.current?.seekTo(TOTAL - 1)
          playerRef.current?.pause()
        }}
      />
    </div>
  )
}
