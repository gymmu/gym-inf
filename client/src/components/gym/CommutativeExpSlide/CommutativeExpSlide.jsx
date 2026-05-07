import { useState, useRef, useEffect } from "react"
import katex from "katex"
import "katex/dist/katex.css"
import s from "./CommutativeExpSlide.module.css"

// -- KaTeX helper ---------------------------------------------------------

function Tex({ children, display = false }) {
  const el = useRef(null)
  useEffect(() => {
    if (!el.current) return
    katex.render(children, el.current, {
      throwOnError: false,
      displayMode: display,
    })
  }, [children, display])
  return display ? (
    <div ref={el} className={s.displayMath} />
  ) : (
    <span ref={el} className={s.inlineMath} />
  )
}

// -- Math -----------------------------------------------------------------

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

// -- Multiplication chain visualisation -----------------------------------
// Shows b multiplication steps for both:
//   Route A: start with g^a (full, no mod yet), multiply by g^a each step, mod p at the end
//   Route B: start with A = g^a mod p, multiply by A each step, mod p at each step
// Demonstrates that the running mod never changes the final result.

function ModChain({ g, p, a, b }) {
  // Route A: (g^a)^b  -- accumulate without intermediate mod, then mod p
  // Route B: A^b mod p -- start with A = g^a mod p, then multiply by A mod p each step

  const A = modPow(g, a, p) // g^a mod p  (what Alice sends)
  const gPowA_exact = BigInt(g) ** BigInt(a) // g^a exact (small enough for display)

  // Build step-by-step for route B: multiply by A, take mod p each step
  const stepsB = []
  let acc = 1
  for (let i = 1; i <= b; i++) {
    const before = acc
    const product = acc * A
    acc = product % p
    stepsB.push({ step: i, before, factor: A, product, after: acc })
  }

  // The final result
  const K = modPow(A, b, p)

  // Also show that g^(a*b) mod p = K
  const K2 = modPow(g, a * b, p)

  const maxShow = 5 // cap display to 5 steps for space
  const shown = stepsB.slice(0, maxShow)
  const clipped = stepsB.length > maxShow

  return (
    <div className={s.chainWrap}>
      {/* -- The key property: mod is multiplicatively compatible -- */}
      <div className={s.propBox}>
        <div className={s.propTitle}>
          Schluesseleigenschaft der Modulo-Arithmetik
        </div>
        <div className={s.propFormula}>
          <Tex
            display>{`(x \\cdot y) \\bmod p \\;=\\; ((x \\bmod p) \\cdot y) \\bmod p`}</Tex>
        </div>
        <div className={s.propExplain}>
          Das Zwischenresultat mod p zu nehmen veraendert das Endergebnis nicht
          — jeder Multiplikationsschritt &quot;sieht&quot; denselben Rest.
        </div>
      </div>

      {/* -- Two routes side by side -- */}
      <div className={s.routeRow}>
        {/* Route A: mathematisch korrekt (ohne Zwischenmod) */}
        <div className={s.route}>
          <div
            className={s.routeHeader}
            style={{ borderColor: "#83a598", color: "#83a598" }}>
            <span className={s.routeTag}>Ohne Trick</span>
            <span className={s.routeFormula}>
              <Tex>{`(g^a)^b \\bmod p`}</Tex>
            </span>
          </div>
          <div className={s.routeBody}>
            <div className={s.routeDesc}>
              Erst <Tex>{`g^{${a}} = ${gPowA_exact}`}</Tex>, dann hoch {b}, dann
              mod {p}
            </div>
            <div className={s.routeCalc}>
              <Tex
                display>{`g^{a \\cdot b} \\bmod p = ${g}^{${a * b}} \\bmod ${p} = ${K2}`}</Tex>
            </div>
            <div className={s.routeNote}>
              Funktioniert — aber g^a kann riesig werden. Nicht praktisch.
            </div>
          </div>
        </div>

        {/* equals arrow */}
        <div className={s.routeEquals}>
          <div className={s.routeEqualsLine} />
          <div className={s.routeEqualsLabel}>gleich!</div>
          <div className={s.routeEqualsLine} />
        </div>

        {/* Route B: mit Zwischenmod (was DH wirklich macht) */}
        <div className={s.route}>
          <div
            className={s.routeHeader}
            style={{ borderColor: "#d3869b", color: "#d3869b" }}>
            <span className={s.routeTag}>Mit Zwischenmod (DH)</span>
            <span className={s.routeFormula}>
              <Tex>{`(g^a \\bmod p)^b \\bmod p`}</Tex>
            </span>
          </div>
          <div className={s.routeBody}>
            <div className={s.routeDesc}>
              Erst <Tex>{`A = g^a \\bmod p = ${A}`}</Tex>, dann b-mal mit A
              multiplizieren, jeweils mod p
            </div>

            {/* step table */}
            <div className={s.chainTable}>
              <div className={s.chainTableHead}>
                <span>Schritt</span>
                <span>Rechnung</span>
                <span>Ergebnis</span>
              </div>
              <div className={s.chainTableRow} style={{ color: "#fabd2f" }}>
                <span>Start</span>
                <span>—</span>
                <span>1</span>
              </div>
              {shown.map(({ step, before, factor, product, after }) => (
                <div
                  key={step}
                  className={s.chainTableRow}
                  style={{ color: step === b ? "#b8bb26" : "#ebdbb2" }}>
                  <span>&times; {factor}</span>
                  <span>
                    ({before} &times; {factor}) mod {p} = {product} mod {p}
                  </span>
                  <span style={{ fontWeight: step === b ? 700 : 400 }}>
                    {after}
                  </span>
                </div>
              ))}
              {clipped && (
                <div className={s.chainTableClip}>
                  … {stepsB.length - maxShow} weitere Schritte
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* -- Result comparison -- */}
      <div className={s.resultRow}>
        <div className={s.resultBox} style={{ borderColor: "#83a598" }}>
          <span className={s.resultLabel}>(g^a)^b mod p</span>
          <span className={s.resultVal}>{K2}</span>
        </div>
        <div className={s.resultEq}>=</div>
        <div className={s.resultBox} style={{ borderColor: "#d3869b" }}>
          <span className={s.resultLabel}>(g^a mod p)^b mod p</span>
          <span className={s.resultVal}>{K}</span>
        </div>
        <div className={s.resultEq}>=</div>
        <div className={s.resultBox} style={{ borderColor: "#b8bb26" }}>
          <span className={s.resultLabel}>g^(ab) mod p</span>
          <span className={s.resultVal} style={{ color: "#b8bb26" }}>
            {K2}
          </span>
        </div>
      </div>
    </div>
  )
}

// -- Full protocol overview (compact) ------------------------------------

function ProtocolSteps({ g, p, a, b }) {
  const A = modPow(g, a, p)
  const B = modPow(g, b, p)
  const KA = modPow(B, a, p)
  const KB = modPow(A, b, p)

  return (
    <div className={s.protocol}>
      <div className={s.protocolTitle}>Das DH-Protokoll mit echten Zahlen</div>

      <div className={s.protocolRow}>
        <div className={s.protocolCol} style={{ "--col-color": "#83a598" }}>
          <div className={s.protocolName}>Alice</div>
          <div className={s.protocolStep}>
            Geheim: <strong>a = {a}</strong>
          </div>
          <div className={s.protocolStep}>
            <Tex>{`A = ${g}^{${a}} \\bmod ${p} = ${A}`}</Tex>
          </div>
          <div className={s.protocolSend} style={{ color: "#83a598" }}>
            sendet A = {A} &rarr;
          </div>
          <div className={s.protocolStep} style={{ color: "#b8bb26" }}>
            <Tex>{`K = ${B}^{${a}} \\bmod ${p} = ${KA}`}</Tex>
          </div>
        </div>

        <div className={s.protocolMiddle}>
          <div className={s.protocolPublic}>
            <div className={s.protocolPublicLabel}>Oeffentlich sichtbar</div>
            <div>
              <Tex>{`p=${p},\\; g=${g}`}</Tex>
            </div>
            <div>
              <Tex>{`A=${A},\\; B=${B}`}</Tex>
            </div>
          </div>
          <div className={s.protocolShared}>
            <div className={s.protocolSharedLabel}>Gemeinsamer Schluessel</div>
            <div className={s.protocolSharedVal}>K = {KA}</div>
            <div className={s.protocolSharedEq}>
              <Tex>{`= g^{ab} \\bmod p = ${g}^{${a * b}} \\bmod ${p}`}</Tex>
            </div>
          </div>
        </div>

        <div className={s.protocolCol} style={{ "--col-color": "#d3869b" }}>
          <div className={s.protocolName} style={{ color: "#d3869b" }}>
            Bob
          </div>
          <div className={s.protocolStep}>
            Geheim: <strong>b = {b}</strong>
          </div>
          <div className={s.protocolStep}>
            <Tex>{`B = ${g}^{${b}} \\bmod ${p} = ${B}`}</Tex>
          </div>
          <div className={s.protocolSend} style={{ color: "#d3869b" }}>
            &larr; sendet B = {B}
          </div>
          <div className={s.protocolStep} style={{ color: "#b8bb26" }}>
            <Tex>{`K = ${A}^{${b}} \\bmod ${p} = ${KB}`}</Tex>
          </div>
        </div>
      </div>
    </div>
  )
}

// -- Input helpers --------------------------------------------------------

function useNum(def) {
  const [raw, setRaw] = useState(String(def))
  const n = parseInt(raw, 10)
  return { raw, setRaw, value: isNaN(n) ? NaN : n }
}

// -- Presets --------------------------------------------------------------

const PRESETS = [
  { p: 7, g: 3 },
  { p: 11, g: 2 },
  { p: 23, g: 5 },
]

// -- Main -----------------------------------------------------------------

export default function CommutativeExpSlide() {
  const [presetIdx, setPresetIdx] = useState(2)
  const preset = PRESETS[presetIdx]

  const aField = useNum(4)
  const bField = useNum(3)

  const a = Math.max(
    1,
    Math.min(isNaN(aField.value) ? 4 : aField.value, preset.p - 2),
  )
  const b = Math.max(
    1,
    Math.min(isNaN(bField.value) ? 3 : bField.value, preset.p - 2),
  )

  return (
    <div className={s.root}>
      {/* -- controls -- */}
      <div className={s.controls}>
        <div className={s.controlGroup}>
          <span className={s.controlLabel}>p &amp; g</span>
          <div className={s.presetBtns}>
            {PRESETS.map((pr, i) => (
              <button
                key={pr.p}
                className={`${s.presetBtn} ${i === presetIdx ? s.presetBtnActive : ""}`}
                onClick={() => setPresetIdx(i)}>
                p={pr.p}, g={pr.g}
              </button>
            ))}
          </div>
        </div>
        <div className={s.controlGroup}>
          <span className={s.controlLabel} style={{ color: "#83a598" }}>
            a (Alice)
          </span>
          <input
            className={s.numInput}
            type="number"
            min={1}
            max={preset.p - 2}
            value={aField.raw}
            onChange={(e) => aField.setRaw(e.target.value)}
            style={{ borderColor: "#83a598" }}
          />
        </div>
        <div className={s.controlGroup}>
          <span className={s.controlLabel} style={{ color: "#d3869b" }}>
            b (Bob)
          </span>
          <input
            className={s.numInput}
            type="number"
            min={1}
            max={preset.p - 2}
            value={bField.raw}
            onChange={(e) => bField.setRaw(e.target.value)}
            style={{ borderColor: "#d3869b" }}
          />
        </div>
      </div>

      {/* -- multiplication chain: the core explanation -- */}
      <ModChain g={preset.g} p={preset.p} a={a} b={b} />

      {/* -- full protocol recap -- */}
      <ProtocolSteps g={preset.g} p={preset.p} a={a} b={b} />
    </div>
  )
}
