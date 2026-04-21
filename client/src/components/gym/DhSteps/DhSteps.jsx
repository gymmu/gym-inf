import { useRef, useState } from "react"
import style from "./DhSteps.module.css"

function modPow(base, exp, mod) {
  if (mod === 1) return 0
  let result = 1
  base = base % mod
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod
    exp = Math.floor(exp / 2)
    base = (base * base) % mod
  }
  return result
}

function isPrime(n) {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }
  return true
}

function isPrimitiveRoot(g, p) {
  if (!isPrime(p)) return false
  const order = p - 1
  const factors = primeFactors(order)
  for (const f of factors) {
    if (modPow(g, order / f, p) === 1) return false
  }
  return true
}

function primeFactors(n) {
  const factors = new Set()
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) {
      factors.add(d)
      n = Math.floor(n / d)
    }
  }
  if (n > 1) factors.add(n)
  return factors
}

function useNumberInput(defaultValue) {
  const [raw, setRaw] = useState(String(defaultValue))
  const parsed = parseInt(raw, 10)
  const valid = !isNaN(parsed) && parsed === Number(raw)
  return {
    raw,
    setRaw,
    value: valid ? parsed : NaN,
    touched: raw !== String(defaultValue),
  }
}

export default function DhSteps() {
  const pField = useNumberInput(23)
  const gField = useNumberInput(5)
  const aField = useNumberInput(6)
  const bField = useNumberInput(15)

  const p = pField.value
  const g = gField.value
  const a = aField.value
  const b = bField.value

  const pValid = !isNaN(p) && isPrime(p) && p >= 5
  const gValid = !isNaN(g) && g >= 2 && g < p && isPrimitiveRoot(g, p)
  const aValid = !isNaN(a) && a >= 2 && a < p - 1
  const bValid = !isNaN(b) && b >= 2 && b < p - 1

  const ready = pValid && gValid && aValid && bValid

  // Keep last valid values so the result area stays rendered when inputs become invalid
  const lastValid = useRef(null)
  if (ready) {
    const A = modPow(g, a, p)
    const B = modPow(g, b, p)
    lastValid.current = { p, g, a, b, A, B, K: modPow(B, a, p) }
  }
  const display = lastValid.current

  return (
    <div className={style.container}>
      <div className={style.inputGrid}>
        <div className={style.inputGroup}>
          <label className={style.inputLabel}>
            <span className={style.inputName}>p</span>
            <span className={style.inputDesc}>Primzahl (öffentlich)</span>
          </label>
          <input
            className={`${style.input} ${!pValid ? style.inputError : ""}`}
            type="number"
            value={pField.raw}
            onChange={(e) => pField.setRaw(e.target.value)}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.inputLabel}>
            <span className={style.inputName}>g</span>
            <span className={style.inputDesc}>Generator (öffentlich)</span>
          </label>
          <input
            className={`${style.input} ${!gValid ? style.inputError : ""}`}
            type="number"
            value={gField.raw}
            onChange={(e) => gField.setRaw(e.target.value)}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.inputLabel}>
            <span className={style.inputName}>a</span>
            <span className={style.inputDesc}>Alices Geheimzahl</span>
          </label>
          <input
            className={`${style.input} ${!aValid ? style.inputError : ""}`}
            type="number"
            value={aField.raw}
            onChange={(e) => aField.setRaw(e.target.value)}
          />
        </div>

        <div className={style.inputGroup}>
          <label className={style.inputLabel}>
            <span className={style.inputName}>b</span>
            <span className={style.inputDesc}>Bobs Geheimzahl</span>
          </label>
          <input
            className={`${style.input} ${!bValid ? style.inputError : ""}`}
            type="number"
            value={bField.raw}
            onChange={(e) => bField.setRaw(e.target.value)}
          />
        </div>
      </div>

      {display && (
        <>
          <div className={style.resultWrapper}>
            <div className={`${style.resultArea} ${!ready ? style.stale : ""}`}>
              <div className={style.columns}>
                <div className={`${style.person} ${style.alice}`}>
                  <div className={style.personHeader}>Alice</div>
                  <div className={style.personBody}>
                    <div className={style.calcLine}>
                      Geheimzahl:{" "}
                      <span className={style.secret}>a = {display.a}</span>
                    </div>
                    <div className={style.calcLine}>
                      A = {display.g}
                      <sup>{display.a}</sup> mod {display.p} ={" "}
                      <span className={style.public}>{display.A}</span>
                    </div>
                    <div className={style.calcLine}>
                      Sendet{" "}
                      <span className={style.public}>A = {display.A}</span> an
                      Bob
                    </div>
                    <div
                      className={style.calcLine}
                      style={{ marginTop: "0.5rem" }}>
                      Empfängt{" "}
                      <span className={style.public}>B = {display.B}</span>
                    </div>
                    <div className={style.calcLine}>
                      K = {display.B}
                      <sup>{display.a}</sup> mod {display.p} ={" "}
                      <span className={style.shared}>{display.K}</span>
                    </div>
                  </div>
                </div>

                <div className={`${style.person} ${style.bob}`}>
                  <div className={style.personHeader}>Bob</div>
                  <div className={style.personBody}>
                    <div className={style.calcLine}>
                      Geheimzahl:{" "}
                      <span className={style.secret}>b = {display.b}</span>
                    </div>
                    <div className={style.calcLine}>
                      B = {display.g}
                      <sup>{display.b}</sup> mod {display.p} ={" "}
                      <span className={style.public}>{display.B}</span>
                    </div>
                    <div className={style.calcLine}>
                      Sendet{" "}
                      <span className={style.public}>B = {display.B}</span> an
                      Alice
                    </div>
                    <div
                      className={style.calcLine}
                      style={{ marginTop: "0.5rem" }}>
                      Empfängt{" "}
                      <span className={style.public}>A = {display.A}</span>
                    </div>
                    <div className={style.calcLine}>
                      K = {display.A}
                      <sup>{display.b}</sup> mod {display.p} ={" "}
                      <span className={style.shared}>
                        {modPow(display.A, display.b, display.p)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.result}>
                Gemeinsamer Schlüssel:{" "}
                <span className={style.shared}>K = {display.K}</span> — ohne ihn
                je zu übertragen!
              </div>

              <div className={style.eveBox}>
                <div className={style.eveTitle}>Was Eve sieht:</div>
                <code>
                  p = {display.p}, g = {display.g}, A = {display.A}, B ={" "}
                  {display.B}
                </code>
                <br />
                Um K zu finden, müsste Eve{" "}
                <code>
                  {display.g}^a mod {display.p} = {display.A}
                </code>{" "}
                lösen → diskreter Logarithmus.
              </div>
            </div>
            {!ready && (
              <div className={style.invalidOverlay}>
                <span className={style.invalidIcon}>!</span>
                {invalidReason(
                  pValid,
                  gValid,
                  aValid,
                  bValid,
                  p,
                  g,
                  pField.raw,
                  gField.raw,
                  aField.raw,
                  bField.raw,
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function findGenerator(p) {
  if (!isPrime(p)) return "—"
  for (let g = 2; g < p; g++) {
    if (isPrimitiveRoot(g, p)) return g
  }
  return "—"
}

function orderOf(g, p) {
  // smallest k > 0 such that g^k mod p === 1
  let val = 1
  for (let k = 1; k < p; k++) {
    val = (val * g) % p
    if (val === 1) return k
  }
  return p - 1
}

function invalidReason(
  pValid,
  gValid,
  aValid,
  bValid,
  p,
  g,
  pRaw,
  gRaw,
  aRaw,
  bRaw,
) {
  const pNum = parseInt(pRaw, 10)
  const gNum = parseInt(gRaw, 10)
  const aNum = parseInt(aRaw, 10)
  const bNum = parseInt(bRaw, 10)

  if (!pValid) {
    if (isNaN(pNum) || pNum < 2) return "p muss eine ganze Zahl ≥ 2 sein."
    if (pNum < 5) return "p muss mindestens 5 sein."
    return `${pNum} ist keine Primzahl. Versuche z.B. ${findNextPrime(pNum)}.`
  }
  if (!gValid) {
    if (isNaN(gNum) || gNum < 2) return "g muss eine ganze Zahl ≥ 2 sein."
    if (gNum >= p) return `g muss kleiner als p (${p}) sein.`
    const ord = orderOf(gNum, p)
    return (
      `g = ${gNum} ist für p = ${p} kein gültiger Generator. ` +
      `${gNum}^${ord} mod ${p} = 1, also erzeugt g nur ${ord} von ${p - 1} möglichen Werten. ` +
      `Versuche g = ${findGenerator(p)}.`
    )
  }
  if (!aValid) {
    if (isNaN(aNum) || aNum < 2) return "a muss eine ganze Zahl ≥ 2 sein."
    return `a muss kleiner als p−1 = ${p - 1} sein.`
  }
  if (!bValid) {
    if (isNaN(bNum) || bNum < 2) return "b muss eine ganze Zahl ≥ 2 sein."
    return `b muss kleiner als p−1 = ${p - 1} sein.`
  }
  return "Ungültige Eingabe."
}

function findNextPrime(n) {
  let candidate = n % 2 === 0 ? n + 1 : n + 2
  while (!isPrime(candidate)) candidate += 2
  return candidate
}
