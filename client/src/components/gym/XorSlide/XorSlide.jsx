// XorSlide — interaktive, folientaugliche XOR-Visualisierung
// Schritt 1: Text → Binär + Schlüssel → Binär (mit Wiederholung abgegraut)
// Schritt 2: XOR-Verschlüsselung (Spalten, schriftliche Rechnung)
// Keine automatische Uppercase-Konvertierung

import { useState, useMemo } from "react"

// --- Gruvbox-Farben ---
const C = {
  fg: "#ebdbb2",
  gray: "#928374",
  grayDim: "#665c54", // für 0-Bits und abgegrenzte Wiederholungen
  yellow: "#fabd2f",
  yellowDim: "#7a5c00", // abgegraut für wiederholte Schlüsselzeichen
  green: "#b8bb26",
  orange: "#fe8019",
  red: "#fb4934",
  purple: "#d3869b",
  purpleDim: "#6b3d57", // abgegraut für wiederholte Schlüsselzeichen
  bgL: "#3c3836",
  bgLL: "#504945",
  bg: "#1d2021",
}

// --- Hilfsfunktionen ---
function toBin8(n) {
  return n.toString(2).padStart(8, "0")
}

function onlyPrintable(str) {
  return str
    .split("")
    .filter((c) => {
      const code = c.charCodeAt(0)
      return code >= 32 && code <= 126
    })
    .join("")
}

function computeChars(plain, key) {
  if (!plain || !key) return []
  return plain.split("").map((ch, i) => {
    const keyChar = key[i % key.length]
    const isRepeat = i >= key.length // dieser Schlüsselbuchstabe ist eine Wiederholung
    const pCode = ch.charCodeAt(0)
    const kCode = keyChar.charCodeAt(0)
    const eCode = pCode ^ kCode
    const printable = eCode >= 33 && eCode <= 126
    return {
      plain: ch,
      keyChar,
      isRepeat,
      pCode,
      kCode,
      eCode,
      pBin: toBin8(pCode),
      kBin: toBin8(kCode),
      eBin: toBin8(eCode),
      printable,
      eChar: printable ? String.fromCharCode(eCode) : `[${eCode}]`,
    }
  })
}

// --- BinByte — 8 Bit mit Nibble-Trennung ---
function BinByte({ value, color = C.fg, dim = false }) {
  const hi = value.slice(0, 4)
  const lo = value.slice(4)
  const zeroColor = dim ? C.bgLL : C.grayDim
  const oneColor = dim ? C.bgLL : color
  return (
    <span
      style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "1em",
        display: "inline-flex",
        alignItems: "center",
        letterSpacing: "0.06em",
        whiteSpace: "nowrap",
      }}>
      {hi.split("").map((b, i) => (
        <span
          key={i}
          style={{
            color: b === "1" ? oneColor : zeroColor,
            fontWeight: b === "1" ? 700 : 400,
          }}>
          {b}
        </span>
      ))}
      <span style={{ display: "inline-block", width: "0.45em" }} />
      {lo.split("").map((b, i) => (
        <span
          key={i + 4}
          style={{
            color: b === "1" ? oneColor : zeroColor,
            fontWeight: b === "1" ? 700 : 400,
          }}>
          {b}
        </span>
      ))}
    </span>
  )
}

// --- CharBox — Zeichen in einem Kästchen ---
function CharBox({ ch, color, borderColor }) {
  const isPrintSingle = ch.length === 1
  const border = borderColor || color
  return (
    <div
      style={{
        minWidth: "2.2em",
        height: "2.2em",
        background: C.bgL,
        border: `2px solid ${border}`,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        fontSize: isPrintSingle ? "1.2em" : "0.75em",
        fontWeight: 700,
        color,
        flexShrink: 0,
        padding: isPrintSingle ? 0 : "0 0.2em",
        whiteSpace: "nowrap",
      }}>
      {ch}
    </div>
  )
}

// --- Eingabezeile ---
function InputRow({ plain, setPlain, keytext, setKey }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2em",
        alignItems: "flex-end",
        marginBottom: "0.5em",
      }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
        <span style={labelStyle}>Klartext</span>
        <input
          value={plain}
          onChange={(e) => setPlain(onlyPrintable(e.target.value).slice(0, 10))}
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "1.1em",
            padding: "0.3em 0.6em",
            background: C.bg,
            border: `2px solid ${C.yellow}`,
            borderRadius: 4,
            color: C.yellow,
            width: "9em",
            outline: "none",
          }}
          spellCheck={false}
        />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
        <span style={labelStyle}>Schlüssel</span>
        <input
          value={keytext}
          onChange={(e) => setKey(onlyPrintable(e.target.value).slice(0, 10))}
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "1.1em",
            padding: "0.3em 0.6em",
            background: C.bg,
            border: `2px solid ${C.purple}`,
            borderRadius: 4,
            color: C.purple,
            width: "9em",
            outline: "none",
          }}
          spellCheck={false}
        />
      </label>
    </div>
  )
}

// --- Schritt 1: ASCII-Tabelle (Klartext + Schlüssel) ---
function StepAscii({ chars, keyLen }) {
  if (chars.length === 0)
    return (
      <p style={{ color: C.gray, fontStyle: "italic", fontSize: "1em" }}>
        Bitte Klartext und Schlüssel eingeben.
      </p>
    )
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ borderCollapse: "collapse", whiteSpace: "nowrap" }}>
        <tbody>
          {/* ── Klartext ── */}
          <tr>
            <td style={tdLabelStyle}>Klartext</td>
            {chars.map((c, i) => (
              <td
                key={i}
                style={{ padding: "0.3em 0.8em", textAlign: "center" }}>
                <CharBox ch={c.plain} color={C.yellow} />
              </td>
            ))}
          </tr>
          <tr>
            <td style={tdLabelStyle}>ASCII</td>
            {chars.map((c, i) => (
              <td
                key={i}
                style={{
                  textAlign: "center",
                  padding: "0.35em 0.8em",
                  fontFamily: "'Courier New', monospace",
                  color: C.orange,
                  fontWeight: 700,
                  fontSize: "1.05em",
                }}>
                {c.pCode}
              </td>
            ))}
          </tr>
          <tr>
            <td style={tdLabelStyle}>Binär</td>
            {chars.map((c, i) => (
              <td
                key={i}
                style={{ textAlign: "center", padding: "0.35em 0.8em" }}>
                <BinByte value={c.pBin} color={C.green} />
              </td>
            ))}
          </tr>

          {/* ── Leerzeile als Trenner ── */}
          <tr>
            <td colSpan={chars.length + 1} style={{ height: "1.1em" }} />
          </tr>

          {/* ── Schlüssel (wiederholt) ── */}
          <tr>
            <td style={tdLabelStyle}>Schlüssel</td>
            {chars.map((c, i) => (
              <td
                key={i}
                style={{
                  padding: "0.3em 0.8em",
                  textAlign: "center",
                  position: "relative",
                }}>
                <CharBox
                  ch={c.keyChar}
                  color={c.isRepeat ? C.purpleDim : C.purple}
                  borderColor={c.isRepeat ? C.bgLL : C.purple}
                />
                {/* Wiederholungs-Marker */}
                {c.isRepeat && (
                  <span
                    style={{
                      position: "absolute",
                      top: "0.1em",
                      right: "0.35em",
                      fontSize: "0.6em",
                      color: C.bgLL,
                      fontFamily: "sans-serif",
                    }}>
                    ↺
                  </span>
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td style={tdLabelStyle}>ASCII</td>
            {chars.map((c, i) => (
              <td
                key={i}
                style={{
                  textAlign: "center",
                  padding: "0.35em 0.8em",
                  fontFamily: "'Courier New', monospace",
                  color: c.isRepeat ? C.bgLL : C.orange,
                  fontWeight: 700,
                  fontSize: "1.05em",
                }}>
                {c.kCode}
              </td>
            ))}
          </tr>
          <tr>
            <td style={tdLabelStyle}>Binär</td>
            {chars.map((c, i) => (
              <td
                key={i}
                style={{ textAlign: "center", padding: "0.35em 0.8em" }}>
                <BinByte value={c.kBin} color={C.purple} dim={c.isRepeat} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// --- Schritt 2: XOR-Verschlüsselung ---
function StepXor({ chars }) {
  if (chars.length === 0)
    return (
      <p style={{ color: C.gray, fontStyle: "italic", fontSize: "1em" }}>
        Bitte Klartext und Schlüssel eingeben.
      </p>
    )

  const H = { char: "2.6em", bits: "2em", sep: "1em" }

  const labels = [
    { text: "Klartext", h: H.char, color: C.yellow },
    { text: "Binär", h: H.bits, color: C.gray },
    { text: "Binär", h: H.bits, color: C.gray },
    { text: "Schlüssel", h: H.char, color: C.purple },
    { text: "", h: H.sep, color: C.gray },
    { text: "Binär", h: H.bits, color: C.gray },
    { text: "Chiffrat", h: H.char, color: C.red },
  ]

  return (
    <div style={{ overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: "0.8em",
          alignItems: "center",
          minWidth: "min-content",
        }}>
        {/* Zeilenbeschriftungen */}
        <div
          style={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
          {labels.map(({ text, h, color }, i) => (
            <div
              key={i}
              style={{
                height: h,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                fontSize: "0.78em",
                fontFamily: "sans-serif",
                color,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                paddingRight: "0.8em",
              }}>
              {text}
            </div>
          ))}
        </div>

        {/* Spalten pro Zeichen */}
        {chars.map((c, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0.5em 0.8em",
              background: "rgba(0,0,0,0.2)",
              border: `1px solid ${C.bgLL}`,
              borderRadius: 8,
            }}>
            {/* Klartext: Zeichen oben, Bits unten */}
            <div
              style={{
                height: H.char,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <CharBox ch={c.plain} color={C.yellow} />
            </div>
            <div
              style={{
                height: H.bits,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <BinByte value={c.pBin} color={C.yellow} />
            </div>

            {/* Schlüssel: Bits oben, Zeichen unten */}
            <div
              style={{
                height: H.bits,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <BinByte value={c.kBin} color={C.purple} dim={c.isRepeat} />
            </div>
            <div
              style={{
                height: H.char,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <CharBox
                ch={c.keyChar}
                color={c.isRepeat ? C.purpleDim : C.purple}
                borderColor={c.isRepeat ? C.bgLL : C.purple}
              />
            </div>

            {/* Trennlinie */}
            <div
              style={{
                height: H.sep,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}>
              <div
                style={{
                  width: "100%",
                  height: 2,
                  background: C.bgLL,
                  borderRadius: 1,
                }}
              />
            </div>

            {/* Chiffrat: Bits oben, Zeichen unten */}
            <div
              style={{
                height: H.bits,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <BinByte value={c.eBin} color={C.red} />
            </div>
            <div
              style={{
                height: H.char,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <CharBox ch={c.eChar} color={C.red} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Shared Styles ---
const labelStyle = {
  fontSize: "0.75em",
  fontFamily: "sans-serif",
  color: C.gray,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
}

const tdLabelStyle = {
  fontSize: "0.75em",
  fontFamily: "sans-serif",
  color: C.gray,
  fontWeight: 600,
  paddingRight: "1.2em",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
}

// --- Tab-Button ---
function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        borderBottom: `2px solid ${active ? C.yellow : "transparent"}`,
        color: active ? C.yellow : C.gray,
        fontFamily: "sans-serif",
        fontSize: "0.9em",
        fontWeight: 600,
        padding: "0.35em 1em 0.45em",
        cursor: "pointer",
        transition: "color 0.15s, border-color 0.15s",
        opacity: active ? 1 : 0.55,
      }}>
      {children}
    </button>
  )
}

// --- Hauptkomponente ---
export default function XorSlide({
  defaultPlain = "HALLO",
  defaultKey = "key",
}) {
  const [plain, setPlain] = useState(defaultPlain)
  const [keytext, setKey] = useState(defaultKey)
  const [step, setStep] = useState(1)

  const chars = useMemo(
    () => computeChars(plain, keytext || "k"),
    [plain, keytext],
  )

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        padding: "1.4em 1.8em",
        background: C.bgL,
        border: `1px solid ${C.bgLL}`,
        borderRadius: 8,
        fontSize: "1rem",
      }}>
      <InputRow
        plain={plain}
        setPlain={setPlain}
        keytext={keytext}
        setKey={setKey}
      />

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 0,
          borderBottom: `1px solid ${C.bgLL}`,
          marginBottom: "0.1em",
        }}>
        <TabBtn active={step === 1} onClick={() => setStep(1)}>
          Schritt 1 — Text &amp; Schlüssel → Bits
        </TabBtn>
        <TabBtn active={step === 2} onClick={() => setStep(2)}>
          Schritt 2 — XOR-Verschlüsselung
        </TabBtn>
      </div>

      {step === 1 && <StepAscii chars={chars} keyLen={keytext.length} />}
      {step === 2 && <StepXor chars={chars} />}
    </div>
  )
}
