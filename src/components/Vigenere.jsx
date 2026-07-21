import style from "@components/Vigenere.module.css"
import { useState, useMemo } from "react"

function toIndex(ch) {
  return ch.toLowerCase().charCodeAt(0) - 97
}

function sanitize(str) {
  return str.toUpperCase().replace(/[^A-Z]/g, "")
}

export default function Vigenere({
  defaultPlain = "HALLO",
  defaultKey = "KEY",
}) {
  const [plain, setPlain] = useState(defaultPlain)
  const [key, setKey] = useState(defaultKey)
  const [hovRow, setHovRow] = useState(null)
  const [hovCol, setHovCol] = useState(null)

  const plainClean = sanitize(plain)
  const keyClean = sanitize(key) || "A"

  // Berechne Beispiel-Paare aus Klartext + Schlüssel
  const example = useMemo(
    () =>
      plainClean.split("").map((ch, i) => ({
        col: toIndex(ch),
        row: toIndex(keyClean[i % keyClean.length]),
      })),
    [plainClean, keyClean],
  )

  // Chiffrat
  const cipher = useMemo(
    () =>
      example
        .map(({ row, col }) => String.fromCharCode(97 + ((row + col) % 26)))
        .join("")
        .toUpperCase(),
    [example],
  )

  const exampleSet = new Set(example.map(({ row, col }) => `${row},${col}`))
  const exampleRows = new Set(example.map(({ row }) => row))
  const exampleCols = new Set(example.map(({ col }) => col))

  const activeRow = hovRow
  const activeCol = hovCol
  const activeCell =
    activeRow !== null && activeCol !== null
      ? (activeRow + activeCol) % 26
      : null

  return (
    <div className={style.vigenereContainer}>
      {/* ── Eingabe + Ergebnis ─────────────────────────────── */}
      <div className={style.inputRow}>
        <label className={style.inputGroup}>
          <span className={style.inputLabel} style={{ color: "#0984e3" }}>
            Klartext
          </span>
          <input
            className={style.inputField}
            value={plain}
            maxLength={10}
            onChange={(e) =>
              setPlain(e.target.value.toUpperCase().replace(/[^A-Za-z]/g, ""))
            }
            spellCheck={false}
          />
        </label>

        <span className={style.inputPlus}>+</span>

        <label className={style.inputGroup}>
          <span className={style.inputLabel} style={{ color: "#d63031" }}>
            Schlüssel
          </span>
          <input
            className={style.inputField}
            value={key}
            maxLength={10}
            onChange={(e) =>
              setKey(e.target.value.toUpperCase().replace(/[^A-Za-z]/g, ""))
            }
            spellCheck={false}
          />
        </label>

        <span className={style.inputPlus}>=</span>

        <div className={style.inputGroup}>
          <span className={style.inputLabel} style={{ color: "#6c5ce7" }}>
            Chiffrat
          </span>
          <div className={style.cipherDisplay}>{cipher || "—"}</div>
        </div>
      </div>

      {/* ── Legende ───────────────────────────────────────── */}
      <div className={style.legend}>
        <span className={style.legendKey}>Zeile = Schlüsselbuchstabe</span>
        <span className={style.legendPlain}>Spalte = Klartextbuchstabe</span>
        <span className={style.legendCipher}>Schnittpunkt = Geheimtext</span>
      </div>

      {/* ── Hover-Info ────────────────────────────────────── */}
      <div className={style.activeInfo}>
        {activeCell !== null ? (
          <>
            Schlüssel{" "}
            <span className={style.legendKey}>
              {String.fromCharCode(97 + activeRow)}
            </span>
            {" + "}Klartext{" "}
            <span className={style.legendPlain}>
              {String.fromCharCode(97 + activeCol)}
            </span>
            {" → "}Geheimtext{" "}
            <span className={style.legendCipher}>
              {String.fromCharCode(97 + activeCell)}
            </span>
          </>
        ) : (
          <span className={style.activeInfoHint}>
            Fahren Sie mit der Maus über eine Zelle …
          </span>
        )}
      </div>

      {/* ── Quadrat ───────────────────────────────────────── */}
      <div className={style.scrollWrapper}>
        <table
          className={style.square}
          onMouseLeave={() => {
            setHovRow(null)
            setHovCol(null)
          }}>
          <thead>
            <tr>
              <th className={style.cornerCell} />
              {Array.from(Array(26)).map((_, ci) => (
                <th
                  key={ci}
                  className={`${style.colHeader} ${ci === activeCol ? style.colHeaderActive : ""} ${exampleCols.has(ci) ? style.colHeaderExample : ""}`}
                  onMouseEnter={() => setHovCol(ci)}>
                  {String.fromCharCode(97 + ci)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(26)).map((_, ri) => (
              <tr key={ri}>
                <td
                  className={`${style.rowHeader} ${ri === activeRow ? style.rowHeaderActive : ""} ${exampleRows.has(ri) ? style.rowHeaderExample : ""}`}
                  onMouseEnter={() => setHovRow(ri)}>
                  {String.fromCharCode(97 + ri)}
                </td>
                {Array.from(Array(26)).map((_, ci) => {
                  const letter = String.fromCharCode(97 + ((ri + ci) % 26))
                  const isActive = ri === activeRow && ci === activeCol
                  const inRow = ri === activeRow && ci !== activeCol
                  const inCol = ci === activeCol && ri !== activeRow
                  const isExample = exampleSet.has(`${ri},${ci}`)
                  return (
                    <td
                      key={ci}
                      className={`${style.cell} ${isActive ? style.cellActive : ""} ${inRow ? style.cellInRow : ""} ${inCol ? style.cellInCol : ""} ${isExample ? style.cellExample : ""}`}
                      onMouseEnter={() => {
                        setHovRow(ri)
                        setHovCol(ci)
                      }}>
                      {letter}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
