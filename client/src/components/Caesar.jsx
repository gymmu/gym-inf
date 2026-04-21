import style from "@components/Caesar.module.css"
import { useEffect, useState } from "react"

export default function Caesar({ initMsg = "hallo", initShift = 3 }) {
  const [msg, setMsg] = useState(initMsg)
  const [shift, setShift] = useState(initShift)
  const [cipher, setCipher] = useState("")
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const cipherArray = Array.from(msg).map((char) => {
      const ascii = char.toLowerCase().charCodeAt(0)
      const shifted = ((ascii - 97 + shift + 26 * 100) % 26) + 97
      return String.fromCharCode(shifted)
    })
    setCipher(cipherArray.join(""))
  }, [msg, shift])

  const normalizedShift = ((shift % 26) + 26) % 26

  return (
    <div className={style.caesarWrapper}>
      <div className={style.controls}>
        <div className={style.formGroup}>
          <label htmlFor="caesar-input">Klartext</label>
          <input
            type="text"
            id="caesar-input"
            value={msg}
            onChange={(e) =>
              setMsg(
                e.target.value
                  .toLowerCase()
                  .split("")
                  .filter((c) => {
                    const ascii = c.charCodeAt(0)
                    return 97 <= ascii && ascii <= 122
                  })
                  .join(""),
              )
            }
            placeholder="buchstaben eingeben"
          />
        </div>

        <div className={style.shiftGroup}>
          <span>Verschiebung</span>
          <div className={style.shiftCtrl}>
            <button
              onClick={() => setShift((old) => old - 1)}
              aria-label="Verschiebung verringern">
              −
            </button>
            <span className={style.shiftValue}>{normalizedShift}</span>
            <button
              onClick={() => setShift((old) => old + 1)}
              aria-label="Verschiebung erhöhen">
              +
            </button>
          </div>
        </div>
      </div>

      <div className={style.alphabetSection}>
        <span className={style.stripLabel}>Klartextalphabet</span>
        <div className={`${style.alphabet} ${style.alphabetPlain}`}>
          {Array.from(Array(26).keys()).map((_, index) => {
            const ch = String.fromCharCode(97 + index)
            const isHov = hovered === index
            return (
              <span
                key={index}
                className={isHov ? style.highlighted : ""}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}>
                {ch}
              </span>
            )
          })}
        </div>

        <div className={style.arrow}>▼</div>

        <div className={`${style.alphabet} ${style.alphabetCipher}`}>
          {Array.from(Array(26).keys()).map((_, index) => {
            const shifted = (index + normalizedShift) % 26
            const isHov = hovered === index
            return (
              <span
                key={index}
                className={isHov ? style.highlighted : ""}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}>
                {String.fromCharCode(97 + shifted)}
              </span>
            )
          })}
        </div>
        <span className={style.stripLabel}>Geheimtextalphabet</span>
      </div>

      <div className={style.output}>
        <span className={style.outputLabel}>Verschlüsselt:</span>
        <span className={style.message}>{cipher || "—"}</span>
      </div>
    </div>
  )
}
