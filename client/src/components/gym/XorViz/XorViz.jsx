import katex from "katex"
import "katex/dist/katex.css"
import { Player } from "@remotion/player"
import { useRef } from "react"
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"

// ─── Gruvbox ──────────────────────────────────────────────────
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
const PLAIN = "HALLO"

// ─── KaTeX ────────────────────────────────────────────────────
function tex(src, opts = {}) {
  return katex.renderToString(src, {
    throwOnError: false,
    output: "html",
    ...opts,
  })
}

function Tex({ src, color, fontSize = 16, style = {} }) {
  return (
    <span
      style={{ color, fontSize, lineHeight: 1, ...style }}
      dangerouslySetInnerHTML={{ __html: tex(src) }}
    />
  )
}

// Fester Schlüssel (zufällig, aber reproduzierbar)
// H=72, A=65, L=76, L=76, O=79
// Schlüssel-Bytes (xor-ergibt lesbares Chiffrat damit es gut aussieht)
const KEY_BYTES = [0b10110011, 0b01011010, 0b00110101, 0b11001100, 0b01101001]
// Falscher Schlüssel ergibt Mix aus druckbaren und nicht-druckbaren Chars
// Ergebnis: %, [200], *, [200], ? — anschaulich für die Demo
const WRONG_KEY_BYTES = [
  0b11011110, 0b11010011, 0b01010011, 0b01001000, 0b00011001,
]

function toBin(n) {
  return n.toString(2).padStart(8, "0")
}

function xorBytes(a, b) {
  return a ^ b
}

// Vorberechnungen
const PLAIN_BYTES = PLAIN.split("").map((c) => c.charCodeAt(0))
const CIPHER_BYTES = PLAIN_BYTES.map((p, i) => xorBytes(p, KEY_BYTES[i]))
const WRONG_DECRYPT = CIPHER_BYTES.map((c, i) =>
  xorBytes(c, WRONG_KEY_BYTES[i]),
)

// ─── Timing ───────────────────────────────────────────────────
// +90 Frames (~3s) Pause am Ende jeder Szene für lesbare Übergänge
const S_DUR = {
  s1: 370, // Text → Bits       (280 Anim + 90 Pause)
  s2: 410, // XOR-Verschl.      (320 Anim + 90 Pause)
  s3: 450, // Übertragung       (360 Anim + 90 Pause)
  s4: 350, // Entschl. richtig  (260 Anim + 90 Pause)
  s5: 310, // Entschl. falsch   (220 Anim + 90 Pause)
  s6: 290, // Schlüsselraum     (200 Anim + 90 Pause)
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

// ─── Hilfkomponenten ──────────────────────────────────────────
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

function BitRow({ byte, color, highlight = false, dim = false }) {
  const bits = toBin(byte)
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {bits.split("").map((b, j) => (
        <div
          key={j}
          style={{
            width: 18,
            height: 22,
            background: dim
              ? C.bg
              : b === "1"
                ? highlight
                  ? color
                  : `${color}99`
                : C.bgLL,
            border: `1px solid ${dim ? C.bgLL : b === "1" ? color : C.bgL}`,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 700,
            color: dim
              ? C.bgLL
              : b === "1"
                ? highlight
                  ? C.bg
                  : C.bg
                : C.gray,
            transition: "background 0.2s",
          }}>
          {b}
        </div>
      ))}
    </div>
  )
}

function CharBox({ ch, color = C.yellow, size = 48, fontSize = 24 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: C.bgL,
        border: `2px solid ${color}`,
        borderRadius: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontWeight: 700,
        color,
        fontFamily: "'Courier New', monospace",
        flexShrink: 0,
      }}>
      {ch}
    </div>
  )
}

function fade(frame, start, dur = 15) {
  return interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
}

// ─── SZENE 1: Text → ASCII → Bits ────────────────────────────
// Alle Grossbuchstaben A–Z für die ASCII-Tabelle
const ASCII_TABLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const PLAIN_SET = new Set(PLAIN.split(""))

function Scene1({ frame }) {
  const local = frame - SCENE_START.s1
  const titleOp = fade(local, 0, 12)

  // Phase 1: ASCII-Tabelle erscheint
  const tableOp = fade(local, 15, 20)

  // Phase 2: HALLO-Buchstaben erscheinen unten mit Bits
  const charDelay = 60
  const charStagger = 22
  const asciiDelay = charDelay + 5 * charStagger + 20
  const bitsDelay = asciiDelay + 40

  // Tabelle: 13 Spalten × 2 Zeilen = 26 Einträge
  const COLS = 13

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 58,
      }}>
      <Title op={titleOp}>Schritt 1 — Text wird zu Bits (ASCII)</Title>

      {/* ── ASCII-Referenztabelle ── */}
      <div
        style={{
          opacity: tableOp,
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: "4px 6px",
          padding: "10px 16px",
          background: C.bgL,
          border: `1.5px solid ${C.bgLL}`,
          borderRadius: 10,
        }}>
        {ASCII_TABLE_CHARS.map((ch) => {
          const byte = ch.charCodeAt(0)
          const isHallo = PLAIN_SET.has(ch)
          const borderColor = isHallo ? C.yellow : C.bgLL
          const textColor = isHallo ? C.yellow : C.gray
          const numColor = isHallo ? C.orange : C.bgLL
          const bg = isHallo ? "#2a2418" : C.bg

          return (
            <div
              key={ch}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                background: bg,
                border: `1.5px solid ${borderColor}`,
                borderRadius: 5,
                padding: "3px 4px",
                minWidth: 0,
              }}>
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 17,
                  fontWeight: 700,
                  color: textColor,
                  lineHeight: 1,
                }}>
                {ch}
              </span>
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  color: numColor,
                  lineHeight: 1,
                }}>
                {byte}
              </span>
            </div>
          )
        })}
      </div>

      {/* ── HALLO-Buchstaben mit Bits ── */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
          marginTop: 18,
        }}>
        {PLAIN.split("").map((ch, i) => {
          const byte = PLAIN_BYTES[i]
          const charOp = fade(local, charDelay + i * charStagger, 14)
          const asciiOp = fade(local, asciiDelay + i * 8, 14)
          const bitsOp = fade(local, bitsDelay + i * 10, 14)

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}>
              {/* Buchstabe */}
              <div style={{ opacity: charOp }}>
                <CharBox ch={ch} color={C.yellow} size={46} fontSize={23} />
              </div>

              {/* Pfeil + ASCII-Zahl */}
              <div
                style={{
                  opacity: asciiOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    color: C.gray,
                    fontSize: 13,
                    fontFamily: "sans-serif",
                  }}>
                  ↓
                </div>
                <div
                  style={{
                    background: C.bgL,
                    border: `2px solid ${C.orange}`,
                    borderRadius: 5,
                    padding: "4px 10px",
                    fontFamily: "'Courier New', monospace",
                    fontSize: 15,
                    fontWeight: 700,
                    color: C.orange,
                  }}>
                  {byte}
                </div>
              </div>

              {/* Pfeil + Bits */}
              <div
                style={{
                  opacity: bitsOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    color: C.gray,
                    fontSize: 13,
                    fontFamily: "sans-serif",
                  }}>
                  ↓
                </div>
                <BitRow byte={byte} color={C.green} highlight />
              </div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

// ─── SZENE 2: XOR-Verschlüsselung ────────────────────────────
function Scene2({ frame }) {
  const local = frame - SCENE_START.s2
  const titleOp = fade(local, 0, 12)

  // Reihen erscheinen nacheinander
  const plainRowDelay = 20
  const keyRowDelay = 60
  const xorSymDelay = 100
  const cipherRowDelay = 120
  // Pro-Buchstabe-Stagger
  const stag = 26

  const rulesOp = fade(local, cipherRowDelay + 5 * stag + 30, 20)
  const cipherWordDelay = cipherRowDelay + 5 * stag + 60
  const cipherWordOp = fade(local, cipherWordDelay, 20)

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Title op={titleOp}>Schritt 2 — XOR-Verschlüsselung</Title>

      {/* XOR-Wahrheitstabelle oben */}
      <div
        style={{
          opacity: fade(local, 10, 15),
          position: "absolute",
          top: 58,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}>
        <span style={{ color: C.gray, fontFamily: "sans-serif", fontSize: 13 }}>
          XOR
        </span>
        <Tex
          src={`(\\oplus):\\quad 0\\oplus 0=0 \\;\\cdot\\; 0\\oplus 1=1 \\;\\cdot\\; 1\\oplus 0=1 \\;\\cdot\\; 1\\oplus 1=0`}
          color={C.gray}
          fontSize={13}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
          marginTop: 16,
        }}>
        {PLAIN.split("").map((ch, i) => {
          const plainByte = PLAIN_BYTES[i]
          const keyByte = KEY_BYTES[i]
          const cipherByte = CIPHER_BYTES[i]

          const plainOp = fade(local, plainRowDelay + i * stag, 14)
          const keyOp = fade(local, keyRowDelay + i * stag, 14)
          const xorOp = fade(local, xorSymDelay + i * stag, 12)
          const cipherOp = fade(local, cipherRowDelay + i * stag, 14)

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}>
              {/* Klartext-Buchstabe + Bits */}
              <div
                style={{
                  opacity: plainOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <CharBox ch={ch} color={C.yellow} size={36} fontSize={17} />
                <BitRow byte={plainByte} color={C.yellow} />
              </div>

              {/* ⊕ Symbol */}
              <div style={{ opacity: xorOp }}>
                <Tex src={`\\oplus`} color={C.blue} fontSize={20} />
              </div>

              {/* Schlüssel-Bits */}
              <div
                style={{
                  opacity: keyOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.purple,
                    fontWeight: 700,
                    marginBottom: 1,
                  }}>
                  Schlüssel
                </div>
                <BitRow byte={keyByte} color={C.purple} />
              </div>

              {/* = Linie */}
              <div
                style={{
                  opacity: xorOp,
                  width: 8 * 18 + 7 * 2,
                  height: 2,
                  background: C.bgLL,
                  borderRadius: 1,
                }}
              />

              {/* Chiffrat-Bits */}
              <div
                style={{
                  opacity: cipherOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <BitRow byte={cipherByte} color={C.red} highlight />
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.red,
                    fontWeight: 700,
                    marginTop: 1,
                  }}>
                  Chiffrat
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Info-Box */}
      <div
        style={{
          opacity: rulesOp,
          marginTop: 24,
          background: "#1a1018",
          border: `2px solid ${C.red}`,
          borderRadius: 10,
          padding: "10px 24px",
          fontFamily: "sans-serif",
          fontSize: 13,
          color: C.fg,
          textAlign: "center",
        }}>
        Das Chiffrat sieht wie zufälliger{" "}
        <strong style={{ color: C.red }}>Bitrauschen</strong> aus — ohne den
        Schlüssel ist es sinnlos
      </div>

      {/* Chiffrat als Buchstaben */}
      <div
        style={{
          opacity: cipherWordOp,
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}>
        <div
          style={{
            color: C.gray,
            fontFamily: "sans-serif",
            fontSize: 12,
          }}>
          Chiffrat-Bytes als Zeichen interpretiert:
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {CIPHER_BYTES.map((b, i) => {
            const isPrint = b >= 33 && b < 127
            return (
              <div
                key={i}
                style={{
                  width: 46,
                  height: 46,
                  background: "#2a1010",
                  border: `2px solid ${C.red}`,
                  borderRadius: 7,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}>
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: isPrint ? 18 : 11,
                    fontWeight: 700,
                    color: C.red,
                    lineHeight: 1,
                  }}>
                  {isPrint ? String.fromCharCode(b) : `[${b}]`}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ─── SZENE 3: Übertragung ─────────────────────────────────────
function Scene3({ frame }) {
  const { fps } = useVideoConfig()
  const local = frame - SCENE_START.s3
  const titleOp = fade(local, 0, 12)

  // Layout: PC links, Server rechts, Schlüsselaustausch unten
  const W = 1280
  const H = 720

  const pc = { x: 130, y: 260 }
  const server = { x: 1150, y: 260 }

  // Phase 1: Netzwerk erscheint
  const netOp = fade(local, 15, 20)

  // Phase 2: Paket fliegt von links nach rechts
  const pktStart = 50
  const pktEnd = 150
  const pktX = interpolate(
    local,
    [pktStart, pktEnd],
    [pc.x + 50, server.x - 50],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  )
  const pktVisible = local >= pktStart && local <= pktEnd + 20
  const pktFade = local > pktEnd ? fade(local, pktEnd, 20) : 1
  const pktOp =
    local < pktStart
      ? 0
      : pktFade > 0
        ? 1 - (pktFade === 1 && local > pktEnd + 15 ? 1 : 0)
        : 1
  // eigentlich: sichtbar von pktStart bis pktEnd+10, dann fade out
  const pktOpReal = interpolate(
    local,
    [pktStart, pktStart + 8, pktEnd + 5, pktEnd + 20],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  )

  // Phase 3: Chiffrat am Server anzeigen
  const arriveOp = fade(local, pktEnd + 15, 18)

  // Phase 4: Schlüssel-Austausch unten (persönlich)
  const keyExStart = 180
  const keyExOp = fade(local, keyExStart, 18)

  // Person A (links) und Person B (rechts) tauschen Schlüssel
  const personA = { x: 300, y: 500 }
  const personB = { x: 980, y: 500 }

  // Schlüssel-Paket reist von A nach B mit spring
  const keyTravelOp = interpolate(
    local,
    [keyExStart + 30, keyExStart + 32],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  )
  const keyPktX = interpolate(
    local,
    [keyExStart + 30, keyExStart + 90],
    [personA.x + 40, personB.x - 40],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  )
  const keyArriveOp = fade(local, keyExStart + 100, 18)

  const summaryOp = fade(local, keyExStart + 130, 20)

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "sans-serif" }}>
      <Title op={titleOp}>
        Schritt 3 — Chiffrat über das Netz, Schlüssel separat
      </Title>

      {/* ── Netz-Ebene (oben) ── */}
      <svg
        width={W}
        height={H * 0.55}
        style={{ position: "absolute", top: 55 }}
        overflow="visible">
        {/* Leitung PC → Server */}
        <line
          x1={pc.x + 50}
          y1={pc.y}
          x2={server.x - 50}
          y2={server.y}
          stroke={C.bgLL}
          strokeWidth={2}
          strokeDasharray="8,6"
          opacity={netOp}
        />

        {/* PC */}
        <g opacity={netOp}>
          <circle
            cx={pc.x}
            cy={pc.y}
            r={38}
            fill={C.bgL}
            stroke={C.blue}
            strokeWidth={2.5}
          />
          <text x={pc.x} y={pc.y + 8} textAnchor="middle" fontSize={26}>
            💻
          </text>
          <text
            x={pc.x}
            y={pc.y + 55}
            textAnchor="middle"
            fill={C.blue}
            fontSize={13}
            fontWeight="700">
            Alice
          </text>
        </g>

        {/* Server */}
        <g opacity={netOp}>
          <circle
            cx={server.x}
            cy={server.y}
            r={38}
            fill={C.bgL}
            stroke={C.green}
            strokeWidth={2.5}
          />
          <text x={server.x} y={server.y + 8} textAnchor="middle" fontSize={26}>
            🖥️
          </text>
          <text
            x={server.x}
            y={server.y + 55}
            textAnchor="middle"
            fill={C.green}
            fontSize={13}
            fontWeight="700">
            Bob
          </text>
        </g>

        {/* Ethernet / Internet Label */}
        <text
          x={(pc.x + server.x) / 2}
          y={pc.y - 18}
          textAnchor="middle"
          fill={C.gray}
          fontSize={12}
          opacity={netOp}>
          Internet (abhörbar)
        </text>

        {/* Fliegendes Chiffrat-Paket */}
        {local >= pktStart && local <= pktEnd + 22 && (
          <g opacity={pktOpReal} transform={`translate(${pktX}, ${pc.y})`}>
            <rect
              x={-36}
              y={-18}
              width={72}
              height={36}
              rx={6}
              fill={C.bgL}
              stroke={C.red}
              strokeWidth={2}
            />
            <text
              y={-5}
              textAnchor="middle"
              fill={C.gray}
              fontSize={9}
              fontWeight="700">
              CHIFFRAT
            </text>
            <text
              y={8}
              textAnchor="middle"
              fill={C.red}
              fontSize={11}
              fontWeight="700">
              🔒 ???
            </text>
          </g>
        )}

        {/* Chiffrat am Server angekommen */}
        <g opacity={arriveOp}>
          <rect
            x={server.x + 48}
            y={server.y - 30}
            width={120}
            height={60}
            rx={7}
            fill="#2a1010"
            stroke={C.red}
            strokeWidth={1.5}
          />
          <text
            x={server.x + 108}
            y={server.y - 12}
            textAnchor="middle"
            fill={C.gray}
            fontSize={10}
            fontWeight="700">
            Empfangen:
          </text>
          <text
            x={server.x + 108}
            y={server.y + 4}
            textAnchor="middle"
            fill={C.red}
            fontSize={12}
            fontWeight="700">
            🔒 Chiffrat
          </text>
          <text
            x={server.x + 108}
            y={server.y + 18}
            textAnchor="middle"
            fill={C.gray}
            fontSize={9}>
            (ohne Schlüssel nutzlos)
          </text>
        </g>
      </svg>

      {/* ── Trennlinie ── */}
      <div
        style={{
          opacity: keyExOp,
          position: "absolute",
          top: H * 0.55 + 48,
          left: 60,
          right: 60,
          height: 1,
          background: C.bgLL,
        }}
      />

      {/* ── Schlüsselaustausch-Ebene (unten) ── */}
      <svg
        width={W}
        height={H * 0.42}
        style={{ position: "absolute", top: H * 0.55 + 50 }}
        overflow="visible">
        {/* Label */}
        <text
          x={W / 2}
          y={20}
          textAnchor="middle"
          fill={C.yellow}
          fontSize={14}
          fontWeight="700"
          opacity={keyExOp}>
          Schlüssel wird NICHT über das Netz übertragen — persönlicher Austausch
        </text>

        {/* Person A */}
        <g opacity={keyExOp}>
          <text x={personA.x} y={80} textAnchor="middle" fontSize={32}>
            🧑
          </text>
          <text
            x={personA.x}
            y={108}
            textAnchor="middle"
            fill={C.blue}
            fontSize={12}
            fontWeight="700">
            Alice
          </text>
          {/* Schlüssel-Badge */}
          <rect
            x={personA.x - 28}
            y={115}
            width={56}
            height={26}
            rx={5}
            fill={C.bgL}
            stroke={C.yellow}
            strokeWidth={1.5}
          />
          <text
            x={personA.x}
            y={132}
            textAnchor="middle"
            fill={C.yellow}
            fontSize={12}
            fontWeight="700">
            🔑 Schlüssel
          </text>
        </g>

        {/* Person B */}
        <g opacity={keyExOp}>
          <text x={personB.x} y={80} textAnchor="middle" fontSize={32}>
            🧑
          </text>
          <text
            x={personB.x}
            y={108}
            textAnchor="middle"
            fill={C.green}
            fontSize={12}
            fontWeight="700">
            Bob
          </text>
        </g>

        {/* Gepunktet Linie zwischen Personen */}
        <line
          x1={personA.x + 40}
          y1={85}
          x2={personB.x - 40}
          y2={85}
          stroke={C.yellow}
          strokeWidth={1.5}
          strokeDasharray="6,5"
          opacity={keyExOp * 0.5}
        />
        <text
          x={(personA.x + personB.x) / 2}
          y={75}
          textAnchor="middle"
          fill={C.gray}
          fontSize={11}
          opacity={keyExOp * 0.7}>
          persönlich / sicherer Kanal
        </text>

        {/* Fliegendes Schlüssel-Paket */}
        {local >= keyExStart + 30 && local <= keyExStart + 110 && (
          <g
            opacity={interpolate(
              local,
              [
                keyExStart + 30,
                keyExStart + 38,
                keyExStart + 100,
                keyExStart + 110,
              ],
              [0, 1, 1, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            )}
            transform={`translate(${keyPktX}, 85)`}>
            <rect
              x={-30}
              y={-16}
              width={60}
              height={32}
              rx={5}
              fill={C.bgL}
              stroke={C.yellow}
              strokeWidth={2}
            />
            <text
              y={-3}
              textAnchor="middle"
              fill={C.gray}
              fontSize={9}
              fontWeight="700">
              SCHLÜSSEL
            </text>
            <text
              y={10}
              textAnchor="middle"
              fill={C.yellow}
              fontSize={13}
              fontWeight="700">
              🔑
            </text>
          </g>
        )}

        {/* Schlüssel bei Bob angekommen */}
        <g opacity={keyArriveOp}>
          <rect
            x={personB.x - 28}
            y={115}
            width={56}
            height={26}
            rx={5}
            fill={C.bgL}
            stroke={C.yellow}
            strokeWidth={1.5}
          />
          <text
            x={personB.x}
            y={132}
            textAnchor="middle"
            fill={C.yellow}
            fontSize={12}
            fontWeight="700">
            🔑 Schlüssel
          </text>
        </g>
      </svg>

      {/* Summary */}
      <div
        style={{
          opacity: summaryOp,
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: C.bgL,
          border: `2px solid ${C.green}`,
          borderRadius: 10,
          padding: "8px 28px",
          fontFamily: "sans-serif",
          fontSize: 13,
          color: C.fg,
          whiteSpace: "nowrap",
          textAlign: "center",
        }}>
        Bob hat jetzt: <strong style={{ color: C.red }}>Chiffrat</strong> (vom
        Netz) + <strong style={{ color: C.yellow }}>Schlüssel</strong>{" "}
        (persönlich) →{" "}
        <strong style={{ color: C.green }}>kann entschlüsseln</strong>
      </div>
    </AbsoluteFill>
  )
}

// ─── SZENE 4: Entschlüsselung mit richtigem Schlüssel ─────────
function Scene4({ frame }) {
  const { fps } = useVideoConfig()
  const local = frame - SCENE_START.s4
  const titleOp = fade(local, 0, 12)

  const cipherRowDelay = 20
  const keyRowDelay = 55
  const xorSymDelay = 90
  const plainRowDelay = 110
  const stag = 22
  const textRevealDelay = plainRowDelay + 5 * stag + 30

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Title op={titleOp}>
        Schritt 4 — Entschlüsselung mit dem richtigen Schlüssel
      </Title>

      <div
        style={{
          opacity: fade(local, 8, 15),
          position: "absolute",
          top: 58,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          alignItems: "center",
          whiteSpace: "nowrap",
        }}>
        <span style={{ color: C.gray, fontFamily: "sans-serif", fontSize: 13 }}>
          XOR ist sein eigenes Gegenteil:
        </span>
        <Tex
          src={`\\text{Chiffrat} \\oplus \\text{Schlüssel} = \\text{Klartext}`}
          color={C.gray}
          fontSize={13}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
          marginTop: 16,
        }}>
        {CIPHER_BYTES.map((cipherByte, i) => {
          const keyByte = KEY_BYTES[i]
          const plainByte = PLAIN_BYTES[i]
          const plainChar = PLAIN[i]

          const cipherOp = fade(local, cipherRowDelay + i * stag, 14)
          const keyOp = fade(local, keyRowDelay + i * stag, 14)
          const xorOp = fade(local, xorSymDelay + i * stag, 12)
          const plainOp = fade(local, plainRowDelay + i * stag, 14)

          const sp = spring({
            frame: local - (plainRowDelay + i * stag),
            fps,
            config: { damping: 12, stiffness: 130 },
          })
          const scaleChar = interpolate(sp, [0, 1], [0.3, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}>
              {/* Chiffrat-Bits */}
              <div
                style={{
                  opacity: cipherOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.red,
                    fontWeight: 700,
                  }}>
                  Chiffrat
                </div>
                <BitRow byte={cipherByte} color={C.red} highlight />
              </div>

              {/* ⊕ */}
              <div style={{ opacity: xorOp }}>
                <Tex src={`\\oplus`} color={C.blue} fontSize={20} />
              </div>

              {/* Schlüssel-Bits */}
              <div
                style={{
                  opacity: keyOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.purple,
                    fontWeight: 700,
                    marginBottom: 1,
                  }}>
                  Schlüssel
                </div>
                <BitRow byte={keyByte} color={C.purple} />
              </div>

              {/* = Linie */}
              <div
                style={{
                  opacity: xorOp,
                  width: 8 * 18 + 7 * 2,
                  height: 2,
                  background: C.bgLL,
                  borderRadius: 1,
                }}
              />

              {/* Klartext-Bits + Buchstabe */}
              <div
                style={{
                  opacity: plainOp,
                  transform: `scale(${scaleChar})`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}>
                <BitRow byte={plainByte} color={C.green} highlight />
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    color: C.gray,
                  }}>
                  ↓
                </div>
                <CharBox
                  ch={plainChar}
                  color={C.green}
                  size={42}
                  fontSize={21}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Erfolgs-Box */}
      <div
        style={{
          opacity: fade(local, textRevealDelay, 20),
          marginTop: 24,
          background: "#0d1a0d",
          border: `2px solid ${C.green}`,
          borderRadius: 10,
          padding: "12px 32px",
          display: "flex",
          gap: 14,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Tex
          src={`\\textcolor{fb4934}{\\text{Chiffrat}} \\oplus \\textcolor{fabd2f}{\\text{richtiger Schlüssel}} = \\textcolor{b8bb26}{\\texttt{HALLO}}`}
          fontSize={17}
        />
        <span style={{ fontSize: 22 }}>✓</span>
      </div>
    </AbsoluteFill>
  )
}

// ─── SZENE 5: Entschlüsselung mit falschem Schlüssel ─────────
function Scene5({ frame }) {
  const local = frame - SCENE_START.s5
  const titleOp = fade(local, 0, 12)

  const cipherRowDelay = 20
  const keyRowDelay = 50
  const xorSymDelay = 80
  const resultRowDelay = 100
  const stag = 20

  const wrongChars = WRONG_DECRYPT.map((b) => String.fromCharCode(b))

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Title op={titleOp}>Was passiert mit einem falschen Schlüssel?</Title>

      <div
        style={{
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
          marginTop: 20,
        }}>
        {CIPHER_BYTES.map((cipherByte, i) => {
          const wrongKeyByte = WRONG_KEY_BYTES[i]
          const wrongByte = WRONG_DECRYPT[i]
          // Druckbare ASCII anzeigen, nicht-druckbare als [N]
          const isPrintable = wrongByte >= 33 && wrongByte < 127
          const displayChar = isPrintable
            ? String.fromCharCode(wrongByte)
            : `[${wrongByte}]`
          const displayFontSize = isPrintable ? 21 : 13

          const cipherOp = fade(local, cipherRowDelay + i * stag, 12)
          const keyOp = fade(local, keyRowDelay + i * stag, 12)
          const xorOp = fade(local, xorSymDelay + i * stag, 10)
          const resultOp = fade(local, resultRowDelay + i * stag, 12)

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}>
              {/* Chiffrat-Bits */}
              <div
                style={{
                  opacity: cipherOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.red,
                    fontWeight: 700,
                  }}>
                  Chiffrat
                </div>
                <BitRow byte={cipherByte} color={C.red} highlight />
              </div>

              {/* ⊕ */}
              <div style={{ opacity: xorOp }}>
                <Tex src={`\\oplus`} color={C.blue} fontSize={20} />
              </div>

              {/* Falscher Schlüssel */}
              <div
                style={{
                  opacity: keyOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.orange,
                    fontWeight: 700,
                  }}>
                  ⚠ falscher Schlüssel
                </div>
                <BitRow byte={wrongKeyByte} color={C.orange} />
              </div>

              {/* = Linie */}
              <div
                style={{
                  opacity: xorOp,
                  width: 8 * 18 + 7 * 2,
                  height: 2,
                  background: C.bgLL,
                  borderRadius: 1,
                }}
              />

              {/* Falsches Ergebnis */}
              <div
                style={{
                  opacity: resultOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}>
                <BitRow byte={wrongByte} color={C.gray} />
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    color: C.gray,
                  }}>
                  ↓
                </div>
                <CharBox
                  ch={displayChar}
                  color={C.red}
                  size={isPrintable ? 42 : 58}
                  fontSize={displayFontSize}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Fehler-Box */}
      <div
        style={{
          opacity: fade(local, resultRowDelay + 5 * stag + 25, 20),
          marginTop: 24,
          background: "#2e1010",
          border: `2px solid ${C.red}`,
          borderRadius: 10,
          padding: "12px 32px",
          display: "flex",
          gap: 14,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
        <Tex
          src={`\\textcolor{fb4934}{\\text{Chiffrat}} \\oplus \\textcolor{fe8019}{\\text{falscher Schlüssel}}`}
          fontSize={17}
        />
        <Tex src={`=`} color={C.gray} fontSize={17} />
        <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {WRONG_DECRYPT.map((b, i) => {
            const isPrint = b >= 33 && b < 127
            return (
              <span
                key={i}
                style={{
                  background: C.bgL,
                  border: `1px solid ${C.red}`,
                  borderRadius: 4,
                  padding: isPrint ? "2px 6px" : "2px 5px",
                  color: C.red,
                  fontFamily: isPrint
                    ? "'Courier New', monospace"
                    : "sans-serif",
                  fontSize: isPrint ? 18 : 12,
                  fontWeight: 700,
                }}>
                {isPrint ? String.fromCharCode(b) : `[${b}]`}
              </span>
            )
          })}
        </span>
        <span style={{ fontSize: 22 }}>✗</span>
      </div>
    </AbsoluteFill>
  )
}

// ─── SZENE 6: Schlüsselraum Bits ─────────────────────────────
function Scene6({ frame }) {
  const { fps } = useVideoConfig()
  const local = frame - SCENE_START.s6
  const titleOp = fade(local, 0, 12)

  // 5 Buchstaben × 8 Bit = 40 Bit Schlüssel → 2^40 Möglichkeiten
  const keyBits = PLAIN.length * 8 // 40

  // Bit-Karten erscheinen
  const cardDelay = 20
  const cardStag = 18

  // Rechenweg erscheint
  const mathDelay = cardDelay + 5 * cardStag + 30
  const resultDelay = mathDelay + 40
  const infoDelay = resultDelay + 30

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Title op={titleOp}>Schritt 6 — Wie viele Schlüssel gibt es?</Title>

      {/* 5 Buchstaben × 8-Bit-Karten */}
      <div
        style={{
          opacity: fade(local, 10, 15),
          marginBottom: 20,
          textAlign: "center",
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <span style={{ color: C.gray, fontFamily: "sans-serif", fontSize: 14 }}>
          Unser Schlüssel hat
        </span>
        <Tex
          src={`5 \\times 8 = 40 \\text{ Bits}`}
          color={C.fg}
          fontSize={15}
        />
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {PLAIN.split("").map((_, i) => {
          const cardOp = fade(local, cardDelay + i * cardStag, 14)
          const sp = spring({
            frame: local - (cardDelay + i * cardStag),
            fps,
            config: { damping: 12, stiffness: 120 },
          })
          const scale = interpolate(sp, [0, 1], [0.4, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })

          return (
            <div
              key={i}
              style={{
                opacity: cardOp,
                transform: `scale(${scale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}>
              <div
                style={{
                  background: C.bgL,
                  border: `2px solid ${C.purple}`,
                  borderRadius: 8,
                  padding: "6px 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 11,
                    color: C.gray,
                  }}>
                  Byte {i + 1}
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div
                      key={j}
                      style={{
                        width: 14,
                        height: 18,
                        background: "#2a1f2e",
                        border: `1px solid ${C.purple}`,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 9,
                        fontWeight: 700,
                        color: C.purple,
                      }}>
                      ?
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 2 }}>
                  <Tex src={`2^8 = 256`} color={C.purple} fontSize={10} />
                </div>
              </div>
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 10,
                  color: C.gray,
                }}>
                Schlüssel-Byte {i + 1}
              </div>
            </div>
          )
        })}
      </div>

      {/* Rechenweg */}
      <div
        style={{
          opacity: fade(local, mathDelay, 18),
          textAlign: "center",
          marginBottom: 12,
        }}>
        <Tex
          src={`256 \\times 256 \\times 256 \\times 256 \\times 256 \\;=\\; 256^5 \\;=\\; 2^{40}`}
          color={C.fg}
          fontSize={18}
        />
      </div>

      <div
        style={{
          opacity: fade(local, resultDelay, 20),
          background: "#1a1a10",
          border: `2px solid ${C.yellow}`,
          borderRadius: 10,
          padding: "12px 36px",
          textAlign: "center",
          marginBottom: 14,
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Tex
          src={`2^{40} \\approx 1{,}1 \\times 10^{12}`}
          color={C.yellow}
          fontSize={22}
        />
        <span style={{ color: C.fg, fontFamily: "sans-serif", fontSize: 15 }}>
          mögliche Schlüssel — für 5 Buchstaben
        </span>
      </div>

      <div
        style={{
          opacity: fade(local, infoDelay, 20),
          background: C.bgL,
          border: `1px solid ${C.bgLL}`,
          borderRadius: 10,
          padding: "10px 28px",
          textAlign: "center",
          maxWidth: 780,
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
        <span style={{ color: C.gray, fontFamily: "sans-serif", fontSize: 13 }}>
          Bei AES-128:
        </span>
        <Tex
          src={`2^{128} \\approx 3{,}4 \\times 10^{38}`}
          color={C.blue}
          fontSize={14}
        />
        <span style={{ color: C.gray, fontFamily: "sans-serif", fontSize: 13 }}>
          Möglichkeiten — ein moderner Computer bräuchte länger als das
          Universum alt ist
        </span>
      </div>
    </AbsoluteFill>
  )
}

// ─── Hauptkomposition ─────────────────────────────────────────
function XorVizComp() {
  const frame = useCurrentFrame()

  return (
    <AbsoluteFill style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      {frame < SCENE_START.s2 && <Scene1 frame={frame} />}
      {frame >= SCENE_START.s2 && frame < SCENE_START.s3 && (
        <Scene2 frame={frame} />
      )}
      {frame >= SCENE_START.s3 && frame < SCENE_START.s4 && (
        <Scene3 frame={frame} />
      )}
      {frame >= SCENE_START.s4 && frame < SCENE_START.s5 && (
        <Scene4 frame={frame} />
      )}
      {frame >= SCENE_START.s5 && frame < SCENE_START.s6 && (
        <Scene5 frame={frame} />
      )}
      {frame >= SCENE_START.s6 && <Scene6 frame={frame} />}
    </AbsoluteFill>
  )
}

// ─── Export ───────────────────────────────────────────────────
export default function XorViz() {
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
        component={XorVizComp}
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
