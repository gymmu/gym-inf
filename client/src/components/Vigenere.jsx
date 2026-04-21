import style from "@components/Vigenere.module.css"
import { useState } from "react"

export default function Vigenere() {
  const [hovRow, setHovRow] = useState(null) // Schlüsselbuchstabe (Zeilenindex)
  const [hovCol, setHovCol] = useState(null) // Klartextbuchstabe (Spaltenindex)

  const activeRow = hovRow
  const activeCol = hovCol
  const activeCell =
    activeRow !== null && activeCol !== null
      ? (activeRow + activeCol) % 26
      : null

  return (
    <div className={style.vigenereContainer}>
      <div className={style.legend}>
        <span className={style.legendKey}>Zeile = Schlüsselbuchstabe</span>
        <span className={style.legendPlain}>Spalte = Klartextbuchstabe</span>
        <span className={style.legendCipher}>Schnittpunkt = Geheimtext</span>
      </div>

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

      <div className={style.scrollWrapper}>
        <table
          className={style.square}
          onMouseLeave={() => {
            setHovRow(null)
            setHovCol(null)
          }}>
          <thead>
            <tr>
              {/* corner cell */}
              <th className={style.cornerCell} />
              {Array.from(Array(26)).map((_, ci) => (
                <th
                  key={ci}
                  className={`${style.colHeader} ${ci === activeCol ? style.colHeaderActive : ""}`}
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
                  className={`${style.rowHeader} ${ri === activeRow ? style.rowHeaderActive : ""}`}
                  onMouseEnter={() => setHovRow(ri)}>
                  {String.fromCharCode(97 + ri)}
                </td>
                {Array.from(Array(26)).map((_, ci) => {
                  const letter = String.fromCharCode(97 + ((ri + ci) % 26))
                  const isActive = ri === activeRow && ci === activeCol
                  const inRow = ri === activeRow && ci !== activeCol
                  const inCol = ci === activeCol && ri !== activeRow
                  return (
                    <td
                      key={ci}
                      className={`${style.cell} ${isActive ? style.cellActive : ""} ${inRow ? style.cellInRow : ""} ${inCol ? style.cellInCol : ""}`}
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
