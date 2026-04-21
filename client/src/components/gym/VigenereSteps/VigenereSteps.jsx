import { useState } from "react"
import style from "./VigenereSteps.module.css"

function onlyLetters(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((c) => c >= "a" && c <= "z")
    .join("")
}

function caesarShift(ch, shift) {
  const code = ch.charCodeAt(0) - 97
  return String.fromCharCode(((code + shift + 26) % 26) + 97)
}

export default function VigenereSteps() {
  const [plaintext, setPlaintext] = useState("hallo")
  const [keyword, setKeyword] = useState("geheim")

  const plain = onlyLetters(plaintext)
  const key = onlyLetters(keyword)

  const steps =
    plain.length > 0 && key.length > 0
      ? plain.split("").map((ch, i) => {
          const keyChar = key[i % key.length]
          const shift = keyChar.charCodeAt(0) - 97
          const cipher = caesarShift(ch, shift)
          return { plain: ch, keyChar, shift, cipher }
        })
      : []

  const ciphertext = steps.map((s) => s.cipher).join("")

  return (
    <div className={style.container}>
      <div className={style.inputs}>
        <div className={style.inputGroup}>
          <label className={style.label} htmlFor="vig-plain">
            Klartext
          </label>
          <input
            id="vig-plain"
            className={style.input}
            type="text"
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            placeholder="hallo"
          />
        </div>
        <div className={style.inputGroup}>
          <label className={style.label} htmlFor="vig-key">
            Schlüsselwort
          </label>
          <input
            id="vig-key"
            className={style.input}
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="geheim"
          />
        </div>
      </div>

      {steps.length > 0 && (
        <>
          <div className={style.tableWrapper}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Position</th>
                  {steps.map((_, i) => (
                    <th key={i}>{i + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={style.rowLabel}>Klartext</td>
                  {steps.map((s, i) => (
                    <td key={i} className={style.plain}>
                      {s.plain}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={style.rowLabel}>Schlüssel</td>
                  {steps.map((s, i) => (
                    <td
                      key={i}
                      className={`${style.key} ${i >= key.length ? style.keyRepeat : ""}`}>
                      {s.keyChar}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={style.rowLabel}>Verschiebung</td>
                  {steps.map((s, i) => (
                    <td key={i} className={style.shift}>
                      +{s.shift}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className={style.rowLabel}>Geheimtext</td>
                  {steps.map((s, i) => (
                    <td key={i} className={style.cipher}>
                      {s.cipher}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className={style.result}>
            <span className={style.resultLabel}>Geheimtext:</span>
            <span className={style.resultValue}>{ciphertext}</span>
          </div>

          <div className={style.hint}>
            Das Schlüsselwort <span className={style.keyInline}>{key}</span>{" "}
            wird zyklisch wiederholt. Jeder Klartextbuchstabe wird um die
            Position seines Schlüsselbuchstabens im Alphabet verschoben (a=0,
            b=1, … z=25).
          </div>
        </>
      )}

      {steps.length === 0 && (
        <div className={style.empty}>
          Bitte Klartext und Schlüsselwort eingeben.
        </div>
      )}
    </div>
  )
}
