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

// ─── Gruvbox colours ──────────────────────────────────────────
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

function tex(src) {
  return katex.renderToString(src, {
    throwOnError: false,
    output: "html",
  })
}

function makePlayer(Component, durationInFrames, height = 720) {
  return function Wrapper() {
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
          component={Component}
          durationInFrames={durationInFrames}
          compositionWidth={1280}
          compositionHeight={height}
          fps={FPS}
          style={{ width: "100%", aspectRatio: `1280/${height}` }}
          controls
          loop={false}
          autoPlay={false}
          acknowledgeRemotionLicense
          onEnded={() => {
            playerRef.current?.seekTo(durationInFrames - 1)
            playerRef.current?.pause()
          }}
        />
      </div>
    )
  }
}

// ═══════════════════════════════════════════════════════════════
// 1. CAESAR SCHLÜSSELRAUM — alle 26 Verschiebungen
// ═══════════════════════════════════════════════════════════════

function decryptCaesar(word, shift) {
  return word
    .split("")
    .map((c) =>
      String.fromCharCode(((c.charCodeAt(0) - 65 - shift + 26) % 26) + 65),
    )
    .join("")
}

const CAESAR_DEMO_WORD = "HALLO"

function CaesarKeyspaceComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const titleOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          opacity: titleOp,
          color: C.yellow,
          fontSize: 26,
          fontWeight: 700,
          marginBottom: 8,
          fontFamily: "sans-serif",
        }}>
        Schlüsselraum Caesar — alle 26 Möglichkeiten
      </div>
      <div
        style={{
          opacity: titleOp,
          color: C.gray,
          fontSize: 15,
          marginBottom: 28,
          fontFamily: "sans-serif",
        }}>
        Klartext:{" "}
        <span
          style={{
            color: C.fg,
            fontFamily: "'Courier New', monospace",
            fontWeight: 700,
          }}>
          {CAESAR_DEMO_WORD}
        </span>
        {"  —  jede Verschiebung ergibt ein anderes Chiffrat"}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          maxWidth: 1100,
        }}>
        {Array.from({ length: 26 }, (_, i) => {
          const delay = 15 + i * 6
          const sp = spring({
            frame: frame - delay,
            fps,
            config: { damping: 14, stiffness: 120 },
          })
          const scale = interpolate(sp, [0, 1], [0.5, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
          const op = interpolate(frame, [delay, delay + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
          const encrypted = decryptCaesar(CAESAR_DEMO_WORD, 26 - i) // +i shift
          const isCorrect = i === 3

          return (
            <div
              key={i}
              style={{
                opacity: op,
                transform: `scale(${scale})`,
                width: 88,
                background: isCorrect ? "#1a2e1a" : C.bgL,
                border: `2px solid ${isCorrect ? C.green : C.bgLL}`,
                borderRadius: 10,
                padding: "8px 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                boxShadow: isCorrect ? `0 0 16px ${C.green}55` : "none",
              }}>
              <div
                style={{
                  fontSize: 11,
                  color: C.gray,
                  fontFamily: "sans-serif",
                }}>
                k = {i}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontFamily: "'Courier New', monospace",
                  fontWeight: 700,
                  color: isCorrect ? C.green : C.yellow,
                  letterSpacing: 1,
                }}>
                {encrypted}
              </div>
              {isCorrect && (
                <div
                  style={{
                    fontSize: 10,
                    color: C.green,
                    fontFamily: "sans-serif",
                  }}>
                  ← k=3
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div
        style={{
          opacity: interpolate(frame, [15 + 26 * 6, 15 + 26 * 6 + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          marginTop: 24,
          background: C.bgL,
          border: `1px solid ${C.bgLL}`,
          borderRadius: 10,
          padding: "10px 28px",
          fontFamily: "sans-serif",
          fontSize: 16,
          color: C.gray,
        }}>
        Genau <span style={{ color: C.yellow, fontWeight: 700 }}>26</span>{" "}
        mögliche Schlüssel — ein Computer probiert alle in Millisekunden
      </div>
    </AbsoluteFill>
  )
}

export const KeyspaceCaesar = makePlayer(
  CaesarKeyspaceComp,
  15 + 26 * 6 + 60,
  500,
)

// ═══════════════════════════════════════════════════════════════
// 2. VIGENÈRE SCHLÜSSELRAUM — Auswahl von Schlüsselwörtern
// ═══════════════════════════════════════════════════════════════

// Zeigt: bei Schlüssellänge 1 → 26, bei Länge 2 → 676, bei Länge 3 → 17576, bei Länge 4 → 457976
// Visualisierung: pro Länge eine Zeile mit einigen Beispiel-Schlüsselwörtern + "... und X weitere"

const VIG_LEVELS = [
  {
    len: 1,
    total: 26,
    examples: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    more: 0,
    latex: "26",
    color: C.red,
  },
  {
    len: 2,
    total: 676,
    examples: ["AA", "AB", "AC", "AZ", "BA", "BE", "HI", "OK", "ZA", "ZZ"],
    more: 666,
    latex: "26^2 = 676",
    color: C.orange,
  },
  {
    len: 3,
    total: 17576,
    examples: ["KEY", "ABC", "XOR", "WAR", "ZAP", "HEX", "CAT", "DOG", "AES"],
    more: 17567,
    latex: "26^3 = 17{,}576",
    color: C.yellow,
  },
  {
    len: 4,
    total: 456976,
    examples: ["CODE", "HACK", "WORD", "SALT", "OPEN", "LOCK", "JAVA", "RUST"],
    more: 456968,
    latex: "26^4 \\approx 457{,}000",
    color: C.green,
  },
  {
    len: 8,
    total: 208827064576,
    examples: [
      "SECURITY",
      "PASSWORD",
      "KEYBOARD",
      "ABCDEFGH",
      "DARKMODE",
      "INTERNET",
    ],
    more: 208827064570,
    latex: "26^8 \\approx 2{,}09 \\cdot 10^{11}",
    color: C.aqua,
  },
]

// Stagger-Timing: Level i beginnt nach Level i-1 fertig ist
const VIG_LEVEL_DELAY = 55

function VigenereKeyspaceComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const titleOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 50px",
      }}>
      <div
        style={{
          opacity: titleOp,
          color: C.yellow,
          fontSize: 26,
          fontWeight: 700,
          marginBottom: 6,
          fontFamily: "sans-serif",
        }}>
        Schlüsselraum Vigenère — Länge des Schlüsselworts entscheidet
      </div>
      <div
        style={{
          opacity: titleOp,
          color: C.gray,
          fontSize: 15,
          marginBottom: 30,
          fontFamily: "sans-serif",
        }}>
        Jeder Buchstabe im Schlüssel hat 26 Möglichkeiten
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}>
        {VIG_LEVELS.map((level, li) => {
          const levelStart = 20 + li * VIG_LEVEL_DELAY
          const headerOp = interpolate(
            frame,
            [levelStart, levelStart + 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )

          return (
            <div key={li} style={{ opacity: headerOp }}>
              {/* Header-Zeile */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 8,
                }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 14,
                    color: level.color,
                    fontWeight: 700,
                  }}>
                  Länge {level.len}:
                </div>
                <div
                  style={{ color: level.color, fontSize: 15 }}
                  dangerouslySetInnerHTML={{ __html: tex(level.latex) }}
                />
                <div
                  style={{
                    color: C.gray,
                    fontSize: 13,
                    fontFamily: "sans-serif",
                  }}>
                  mögliche Schlüssel
                </div>
              </div>

              {/* Beispiel-Wörter */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  alignItems: "center",
                }}>
                {level.examples.map((word, wi) => {
                  const wordDelay = levelStart + 10 + wi * 4
                  const wordOp = interpolate(
                    frame,
                    [wordDelay, wordDelay + 8],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                  )
                  const sp = spring({
                    frame: frame - wordDelay,
                    fps,
                    config: { damping: 16, stiffness: 140 },
                  })
                  const scale = interpolate(sp, [0, 1], [0.6, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  })
                  return (
                    <div
                      key={wi}
                      style={{
                        opacity: wordOp,
                        transform: `scale(${scale})`,
                        background: C.bgL,
                        border: `1.5px solid ${level.color}88`,
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontFamily: "'Courier New', monospace",
                        fontSize: 14,
                        fontWeight: 700,
                        color: level.color,
                      }}>
                      {word}
                    </div>
                  )
                })}
                {level.more > 0 && (
                  <div
                    style={{
                      opacity: interpolate(
                        frame,
                        [
                          levelStart + 10 + level.examples.length * 4,
                          levelStart + 10 + level.examples.length * 4 + 12,
                        ],
                        [0, 1],
                        { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                      ),
                      color: C.gray,
                      fontSize: 13,
                      fontFamily: "sans-serif",
                      fontStyle: "italic",
                    }}>
                    … und {level.more.toLocaleString("de-CH")} weitere
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Fazit */}
      <div
        style={{
          opacity: interpolate(
            frame,
            [20 + 5 * VIG_LEVEL_DELAY + 20, 20 + 5 * VIG_LEVEL_DELAY + 40],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          marginTop: 24,
          background: C.bgL,
          border: `1px solid ${C.green}`,
          borderRadius: 10,
          padding: "10px 28px",
          fontFamily: "sans-serif",
          fontSize: 15,
          color: C.gray,
        }}>
        Länge 8:{" "}
        <span style={{ color: C.aqua, fontWeight: 700 }}>
          209 Milliarden Schlüssel
        </span>
        {" — "}aber mit moderner Hardware immer noch angreifbar
      </div>
    </AbsoluteFill>
  )
}

export const KeyspaceVigenere = makePlayer(
  VigenereKeyspaceComp,
  20 + 5 * VIG_LEVEL_DELAY + 80,
  560,
)

// ═══════════════════════════════════════════════════════════════
// 3. BALKENDIAGRAMM — linearer Massstab, schrumpfend
// ═══════════════════════════════════════════════════════════════

const S2_ANIM = 70
const S2_HOLD = 30
const S2_STEP = S2_ANIM + S2_HOLD
const MAX_BAR_WIDTH = 780
const MIN_VISIBLE_PX = 1 // unter diesem Wert: kein Balken

// Echte lineare Verhältnisse via BigInt (da 2^256 JS-Float sprengt).
// Wir berechnen: (keyspace_j / keyspace_currentStep) * MAX_BAR_WIDTH
// als Float über den Umweg: Number(j_bigint * 10000n / current_bigint) / 10000 * MAX_BAR_WIDTH
const KEYSPACES_BIGINT = [
  26n,
  456976n, // 26^4
  BigInt("0x" + "1" + "0".repeat(32)), // Annäherung — wir rechnen direkt
]

// Für die Verhältnisse nutzen wir Logarithmen base-2 als Float — aber NUR um
// den Pixel-Wert zu berechnen. Das IST linear: px = (keyspace_j / keyspace_i) * MAX
// Da die Zahlen außerhalb von Float64 liegen, nutzen wir log2 nur als Hilfsmittel
// für die Division — das Ergebnis ist identisch mit echter linearer Division.
const LOG2_VALS = [
  Math.log2(26), //  ≈ 4.70
  4 * Math.log2(26), //  ≈ 18.80
  8 * Math.log2(26), //  ≈ 37.60
  128, // exakt
  256, // exakt
]

// Lineares Pixelverhältnis j relativ zu i (als hätte i die volle Balkenbreite)
// = 2^(log2_j - log2_i) * MAX_BAR_WIDTH
function linearPx(fromIdx, toIdx) {
  const exponent = LOG2_VALS[fromIdx] - LOG2_VALS[toIdx]
  // exponent ist immer negativ (j < i), also sehr kleine Zahl
  return Math.pow(2, exponent) * MAX_BAR_WIDTH
}

const BAR_DATA = [
  {
    label: "Caesar",
    latex: "26",
    number: "26",
    color: C.red,
    time: "< 1 Sekunde",
    timeColor: C.red,
  },
  {
    label: "Vigenère (4 Stellen)",
    latex: "26^4 \\approx 460{,}000",
    number: "26^4",
    color: C.orange,
    time: "Sekunden bis Minuten",
    timeColor: C.orange,
  },
  {
    label: "Vigenère (8 Stellen)",
    latex: "26^8 \\approx 2{,}09 \\cdot 10^{11}",
    number: "26^8",
    color: C.yellow,
    time: "Stunden bis Tage",
    timeColor: C.yellow,
  },
  {
    label: "AES-128",
    latex: "2^{128}",
    number: "2^{128}",
    color: C.green,
    time: "Länger als das Universum alt ist",
    timeColor: C.green,
  },
  {
    label: "AES-256",
    latex: "2^{256}",
    number: null,
    color: C.aqua,
    time: "Auch mit Quantencomputer sicher",
    timeColor: C.aqua,
  },
]

const BARS_TOTAL = 5 * S2_STEP + 40

function BarsComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const titleOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
  const currentStep = Math.min(Math.floor(frame / S2_STEP), BAR_DATA.length - 1)
  const stepLocalFrame = frame - currentStep * S2_STEP
  const animProg = interpolate(stepLocalFrame, [0, S2_ANIM], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  // Ziel-Pixelbreite von Balken j wenn currentStep der neue Massstab ist
  function targetPx(j, step) {
    if (j === step) return MAX_BAR_WIDTH
    return linearPx(j, step) // echte lineare Verhältnisse
  }

  const barWidths = BAR_DATA.map((_, j) => {
    if (j > currentStep) return null
    if (j === currentStep) {
      const sp = spring({
        frame: frame - j * S2_STEP,
        fps,
        config: { damping: 18, stiffness: 100 },
      })
      return interpolate(sp, [0, 1], [0, MAX_BAR_WIDTH], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    }
    const fromW =
      j === currentStep - 1 ? MAX_BAR_WIDTH : targetPx(j, currentStep - 1)
    const toW = targetPx(j, currentStep)
    return interpolate(animProg, [0, 1], [fromW, toW], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  })

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
      }}>
      <div
        style={{
          opacity: titleOp,
          color: C.yellow,
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 6,
          fontFamily: "sans-serif",
        }}>
        Schlüsselraum im Vergleich
      </div>
      <div
        style={{
          opacity: titleOp,
          color: C.gray,
          fontSize: 15,
          marginBottom: 38,
          fontFamily: "sans-serif",
        }}>
        Jede neue Zahl setzt den Massstab — die Skala ist linear
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 980,
          display: "flex",
          flexDirection: "column",
          gap: 26,
        }}>
        {BAR_DATA.map((d, i) => {
          const w = barWidths[i]
          if (w === null) return null
          const labelOp = interpolate(
            frame,
            [i * S2_STEP, i * S2_STEP + 20],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          )
          // Balken zu klein zum Zeichnen?
          const tooSmall = w < MIN_VISIBLE_PX && i < currentStep
          return (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 170,
                  textAlign: "right",
                  fontFamily: "sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: d.color,
                  flexShrink: 0,
                  lineHeight: 1.3,
                  opacity: labelOp,
                }}>
                {d.label}
              </div>
              <div
                style={{
                  width: MAX_BAR_WIDTH,
                  height: 46,
                  background: tooSmall ? "transparent" : C.bgL,
                  borderRadius: 6,
                  position: "relative",
                  flexShrink: 0,
                  overflow: "visible",
                }}>
                {tooSmall ? (
                  /* Balken nicht darstellbar — nur KaTeX wenn Platz */
                  d.number ? (
                    <div
                      style={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: labelOp,
                        color: d.color,
                        fontSize: 15,
                      }}
                      dangerouslySetInnerHTML={{ __html: tex(d.number) }}
                    />
                  ) : null
                ) : (
                  <>
                    <div
                      style={{
                        width: Math.max(w, 0),
                        height: "100%",
                        background: d.color,
                        borderRadius: 6,
                        opacity: 0.88,
                        boxShadow: `0 0 12px ${d.color}55`,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: Math.max(w + 10, 4),
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: labelOp,
                        color: d.color,
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                      }}
                      dangerouslySetInnerHTML={{ __html: tex(d.latex) }}
                    />
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

export const KeyspaceBars = makePlayer(BarsComp, BARS_TOTAL)

// ═══════════════════════════════════════════════════════════════
// 4. BRUTE-FORCE ZEITEN
// ═══════════════════════════════════════════════════════════════

const TIMES_TOTAL = 20 + BAR_DATA.length * 40 + 60

function TimesComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const titleOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          opacity: titleOp,
          color: C.yellow,
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 36,
          fontFamily: "sans-serif",
        }}>
        Wie lange dauert Brute-Force?
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          width: "100%",
          maxWidth: 800,
        }}>
        {BAR_DATA.map((d, i) => {
          const delay = 20 + i * 40
          const sp = spring({
            frame: frame - delay,
            fps,
            config: { damping: 13, stiffness: 100 },
          })
          const translateX = interpolate(sp, [0, 1], [-60, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
          const op = interpolate(frame, [delay, delay + 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
          return (
            <div
              key={i}
              style={{
                opacity: op,
                transform: `translateX(${translateX}px)`,
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: C.bgL,
                border: `2px solid ${d.color}`,
                borderRadius: 12,
                padding: "12px 24px",
                boxShadow: `0 0 14px ${d.color}22`,
              }}>
              <div style={{ width: 200, flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: d.color,
                    marginBottom: 4,
                  }}>
                  {d.label}
                </div>
                <div
                  style={{ color: d.color, fontSize: 15 }}
                  dangerouslySetInnerHTML={{ __html: tex(d.latex) }}
                />
              </div>
              <div
                style={{
                  width: 2,
                  height: 38,
                  background: C.bgLL,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: d.timeColor,
                }}>
                {d.time}
              </div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

export const KeyspaceTimes = makePlayer(TimesComp, TIMES_TOTAL)

// ═══════════════════════════════════════════════════════════════
// 5. BRUTE-FORCE SCANNER (Caesar) — als eigener Slide
// ═══════════════════════════════════════════════════════════════

const SCAN_END = 20 + 26 * 5
const HIGHLIGHT = SCAN_END + 15
const FOUND_LABEL = HIGHLIGHT + 20
const SCAN_TOTAL = FOUND_LABEL + 60

function BruteForceComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const titleOp = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
  const scanProgress = interpolate(frame, [20, SCAN_END], [0, 26], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
  const activeKey = Math.floor(scanProgress)
  const scanning = frame < HIGHLIGHT
  const foundOp = interpolate(frame, [HIGHLIGHT, HIGHLIGHT + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
  const labelOp = interpolate(frame, [FOUND_LABEL, FOUND_LABEL + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          opacity: titleOp,
          color: C.yellow,
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 24,
          fontFamily: "sans-serif",
        }}>
        Brute-Force: Caesar
      </div>
      <div
        style={{
          opacity: titleOp,
          fontFamily: "'Courier New', monospace",
          fontSize: 20,
          color: C.gray,
          marginBottom: 22,
          letterSpacing: 2,
        }}>
        Chiffrat: <span style={{ color: C.red, fontWeight: 700 }}>KDOOR</span>
        {"  →  Probiere alle Schlüssel..."}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          maxWidth: 950,
        }}>
        {Array.from({ length: 26 }, (_, i) => {
          const isActive = scanning && i === activeKey
          const isPast = scanning && i < activeKey
          const isCorrect = !scanning && i === 3
          const decrypted = decryptCaesar("KDOOR", i)
          const sp = isCorrect
            ? spring({
                frame: frame - HIGHLIGHT,
                fps,
                config: { damping: 12, stiffness: 120 },
              })
            : 1
          const scale = isCorrect ? interpolate(sp, [0, 1], [0.8, 1]) : 1
          let bg = C.bgL,
            border = C.bgLL,
            textCol = C.gray
          if (isActive) {
            bg = C.bgLL
            border = C.yellow
            textCol = C.yellow
          }
          if (isPast) {
            border = C.bgLL
            textCol = C.bgLL
          }
          if (isCorrect) {
            bg = "#1a2e1a"
            border = C.green
            textCol = C.green
          }
          return (
            <div
              key={i}
              style={{
                width: 72,
                height: 56,
                background: bg,
                border: `2px solid ${border}`,
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${scale})`,
                boxShadow: isCorrect
                  ? `0 0 18px ${C.green}66`
                  : isActive
                    ? `0 0 10px ${C.yellow}44`
                    : "none",
              }}>
              <div
                style={{
                  fontSize: 11,
                  color: isActive ? C.yellow : C.gray,
                  fontFamily: "sans-serif",
                }}>
                k={i}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: textCol,
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: 1,
                }}>
                {decrypted}
              </div>
            </div>
          )
        })}
      </div>

      <div
        style={{
          opacity: labelOp * foundOp,
          marginTop: 24,
          background: "#1a2e1a",
          border: `2px solid ${C.green}`,
          borderRadius: 10,
          padding: "10px 32px",
          fontFamily: "sans-serif",
          fontSize: 20,
          color: C.green,
          fontWeight: 700,
          boxShadow: `0 0 20px ${C.green}44`,
        }}>
        Schlüssel k=3 gefunden —{" "}
        <span style={{ color: C.yellow }}>3 Versuche</span> von 26 möglichen
      </div>
    </AbsoluteFill>
  )
}

export const KeyspaceBruteForce = makePlayer(BruteForceComp, SCAN_TOTAL)

// Legacy default export (nicht mehr in Verwendung)
export default KeyspaceBars
