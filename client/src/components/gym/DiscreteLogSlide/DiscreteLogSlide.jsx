import { useState, useRef, useEffect, useCallback } from "react"
import katex from "katex"
import "katex/dist/katex.css"
import s from "./DiscreteLogSlide.module.css"

// -- local KaTeX helper ---------------------------------------------------

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

// -- Math helpers ---------------------------------------------------------

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
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false
  return true
}

function findGenerator(p) {
  if (!isPrime(p)) return 2
  for (let g = 2; g < p; g++) {
    const seen = new Set()
    let v = 1
    for (let k = 1; k < p; k++) {
      v = (v * g) % p
      seen.add(v)
    }
    if (seen.size === p - 1) return g
  }
  return 2
}

// -- Keyspace scale data --------------------------------------------------

// Log10 of number of possible x values (= p-1) for each bit size
const KEY_SIZES = [
  { label: "p = 23", bits: 5, log10: Math.log10(22), example: "~22 Werte" },
  {
    label: "512 Bit",
    bits: 512,
    log10: 512 * Math.log10(2),
    example: "~10^154",
  },
  {
    label: "1024 Bit",
    bits: 1024,
    log10: 1024 * Math.log10(2),
    example: "~10^308",
  },
  {
    label: "2048 Bit",
    bits: 2048,
    log10: 2048 * Math.log10(2),
    example: "~10^616",
  },
]

// -- Bar chart constants --------------------------------------------------

const CHART_H = 150
const SMALL_PRIMES = [7, 11, 13, 17, 19, 23]

// -- Bar chart component --------------------------------------------------

function BarChart({
  p,
  g,
  entries,
  targetA,
  searchStep,
  foundAtStep,
  searchDone,
}) {
  const barW = Math.max(20, Math.min(36, Math.floor(520 / (p - 1)) - 5))
  const gap = 5
  const totalW = (barW + gap) * (p - 1) + gap + 20 // +20 for y-axis margin

  return (
    <div className={s.chartWrap}>
      <svg
        width={totalW}
        height={CHART_H + 46}
        className={s.chartSvg}
        viewBox={`0 0 ${totalW} ${CHART_H + 46}`}>
        {/* y-axis */}
        <line
          x1={18}
          y1={0}
          x2={18}
          y2={CHART_H + 2}
          stroke="#3c3836"
          strokeWidth="1"
        />
        <text
          x={15}
          y={CHART_H}
          textAnchor="end"
          dominantBaseline="middle"
          fill="#504945"
          fontSize="9"
          fontFamily="monospace">
          0
        </text>
        <text
          x={15}
          y={2}
          textAnchor="end"
          dominantBaseline="middle"
          fill="#504945"
          fontSize="9"
          fontFamily="monospace">
          {p - 1}
        </text>

        {entries.map(({ x, y }, idx) => {
          const barH = Math.max(2, Math.round((y / (p - 1)) * CHART_H))
          const bx = 20 + gap + idx * (barW + gap)
          const by = CHART_H - barH
          const isTarget = y === targetA
          const isSearched = searchStep !== null && idx < searchStep
          const isFound = searchDone && idx === foundAtStep

          let fill = "#3c3836"
          if (isFound) fill = "#b8bb26"
          else if (isTarget && !searchDone) fill = "#fabd2f"
          else if (isSearched) fill = "#83a598"
          else if (isTarget) fill = "#fabd2f"

          const opacity = isSearched || isTarget || isFound ? 1 : 0.4

          return (
            <g key={x}>
              <rect
                x={bx}
                y={by}
                width={barW}
                height={barH}
                fill={fill}
                rx="2"
                opacity={opacity}
              />
              {/* value label on top */}
              {(isTarget || isFound) && (
                <text
                  x={bx + barW / 2}
                  y={by - 5}
                  textAnchor="middle"
                  fill={isFound ? "#b8bb26" : "#fabd2f"}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="700">
                  {y}
                </text>
              )}
              {/* x label below */}
              <text
                x={bx + barW / 2}
                y={CHART_H + 15}
                textAnchor="middle"
                fill={isFound ? "#b8bb26" : isSearched ? "#83a598" : "#504945"}
                fontSize="10"
                fontFamily="monospace"
                fontWeight={isFound ? 700 : 400}>
                {x}
              </text>
            </g>
          )
        })}

        {/* axis labels */}
        <text
          x={20 + totalW / 2 - 10}
          y={CHART_H + 32}
          textAnchor="middle"
          fill="#504945"
          fontSize="9"
          fontFamily="monospace">
          Exponent x (geheim)
        </text>
        <text
          x={8}
          y={CHART_H / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#504945"
          fontSize="9"
          fontFamily="monospace"
          transform={`rotate(-90, 8, ${CHART_H / 2})`}>
          Ergebnis
        </text>
      </svg>
    </div>
  )
}

// -- Keyspace comparison bar chart ----------------------------------------

function KeyspaceBar() {
  const maxLog = KEY_SIZES[KEY_SIZES.length - 1].log10
  const barH = 26
  const gap = 10

  return (
    <div className={s.ksWrap}>
      {KEY_SIZES.map((ks, i) => {
        const frac = ks.log10 / maxLog
        const isSmall = i === 0
        return (
          <div key={ks.label} className={s.ksRow}>
            <span className={s.ksLabel}>{ks.label}</span>
            <div className={s.ksBarTrack}>
              <div
                className={s.ksBarFill}
                style={{
                  width: `${Math.max(frac * 100, 0.3)}%`,
                  background: isSmall
                    ? "#fb4934"
                    : i === 1
                      ? "#fe8019"
                      : i === 2
                        ? "#fabd2f"
                        : "#b8bb26",
                  minWidth: isSmall ? "4px" : undefined,
                }}
              />
            </div>
            <span className={s.ksExample}>{ks.example}</span>
          </div>
        )
      })}
      <div className={s.ksNote}>
        Balkenlaenge = log(Schluesselraum) — 2048 Bit ist buchstaeblich
        undarstellbar gross im Vergleich zu p=23
      </div>
    </div>
  )
}

// -- Main component -------------------------------------------------------

const DEFAULT_P_IDX = 5 // p = 23

export default function DiscreteLogSlide() {
  const [pIdx, setPIdx] = useState(DEFAULT_P_IDX)
  const p = SMALL_PRIMES[pIdx]
  const g = findGenerator(p)

  const entries = []
  for (let x = 1; x < p; x++) {
    entries.push({ x, y: modPow(g, x, p) })
  }

  const [targetA, setTargetA] = useState(entries[2]?.y ?? 1)
  const [searchStep, setSearchStep] = useState(null)
  const timerRef = useRef(null)

  const foundAtStep =
    searchStep !== null
      ? entries.slice(0, searchStep).findIndex((e) => e.y === targetA)
      : -1
  const searchDone = foundAtStep >= 0

  const runSearch = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    setSearchStep(0)
    let step = 0
    timerRef.current = setInterval(() => {
      step++
      setSearchStep(step)
      if (entries[step - 1]?.y === targetA || step >= entries.length) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }, 280)
  }, [entries, targetA])

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current)
    },
    [],
  )

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    setSearchStep(null)
    const newEntries = []
    for (let x = 1; x < p; x++)
      newEntries.push({ x, y: modPow(findGenerator(p), x, p) })
    setTargetA(newEntries[2]?.y ?? 1)
  }, [p]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={s.root}>
      {/* ===== Top row: chart + Eve demo ===== */}
      <div className={s.topRow}>
        {/* Left: bar chart */}
        <div className={s.chartPanel}>
          <div className={s.panelTitleRow}>
            <span className={s.panelTitle}>
              <Tex>{`${g}^{x} \\bmod ${p}`}</Tex>
              <span className={s.panelTitleSub}> fuer x = 1 … {p - 1}</span>
            </span>
            <div className={s.pSelector}>
              {SMALL_PRIMES.map((pr, i) => (
                <button
                  key={pr}
                  className={`${s.pBtn} ${i === pIdx ? s.pBtnActive : ""}`}
                  onClick={() => setPIdx(i)}>
                  p={pr}
                </button>
              ))}
            </div>
          </div>

          <BarChart
            p={p}
            g={g}
            entries={entries}
            targetA={targetA}
            searchStep={searchStep}
            foundAtStep={foundAtStep}
            searchDone={searchDone}
          />

          {/* Direction chips */}
          <div className={s.dirRow}>
            <div className={s.dirChip} style={{ borderColor: "#b8bb26" }}>
              <span className={s.dirLabel} style={{ color: "#b8bb26" }}>
                Vorwaerts — trivial
              </span>
              <span className={s.dirVal}>
                x &rarr; <Tex>{`g^x \\bmod p`}</Tex> mit schneller Potenzierung
                in ms
              </span>
            </div>
            <div className={s.dirChip} style={{ borderColor: "#fb4934" }}>
              <span className={s.dirLabel} style={{ color: "#fb4934" }}>
                Rueckwaerts — kein Muster
              </span>
              <span className={s.dirVal}>
                Balken springen willkuerlich — kein Weg ausser alle x
                durchprobieren
              </span>
            </div>
          </div>
        </div>

        {/* Right: Eve brute-force demo */}
        <div className={s.evePanel}>
          <div className={s.evePanelTitle}>Eve sucht x</div>
          <div className={s.eveDesc}>
            Eve kennt <Tex>{`g=${g},\\; p=${p}`}</Tex> und faengt{" "}
            <Tex>{`A`}</Tex> ab. Sie muss x finden sodass{" "}
            <Tex>{`${g}^x \\bmod ${p} = A`}</Tex>.
          </div>

          <div className={s.eveInputRow}>
            <span className={s.eveInputLabel}>Welches A?</span>
            <select
              className={s.eveSelect}
              value={targetA}
              onChange={(e) => {
                setTargetA(Number(e.target.value))
                setSearchStep(null)
              }}>
              {entries.map(({ x, y }) => (
                <option key={x} value={y}>
                  A = {y}
                </option>
              ))}
            </select>
          </div>

          <button
            className={s.eveBtn}
            onClick={runSearch}
            disabled={searchStep !== null && !searchDone}>
            {searchStep === null
              ? "Brute-Force starten"
              : searchDone
                ? "Nochmal"
                : "sucht..."}
          </button>

          <div className={s.eveLog}>
            {searchStep === null && (
              <div className={s.eveLogIdle}>
                Probiert x = 1, 2, 3, … bis Treffer
              </div>
            )}
            {searchStep !== null &&
              entries
                .slice(0, Math.min(searchStep, entries.length))
                .map((e, i) => {
                  const isTried = true
                  const isHit = e.y === targetA
                  return (
                    <div
                      key={e.x}
                      className={`${s.eveLogLine} ${isHit ? s.eveLogHit : s.eveLogMiss}`}>
                      <Tex>{`${g}^{${e.x}} \\bmod ${p} = ${e.y}`}</Tex>
                      <span>
                        {isHit ? " = A" : " \\ne A"}
                        {isHit ? "" : ""}
                      </span>
                      {isHit ? (
                        <span className={s.eveLogCheck}>&#10003;</span>
                      ) : (
                        <span className={s.eveLogCross}>&#10007;</span>
                      )}
                    </div>
                  )
                })}
          </div>

          {searchDone && (
            <div className={s.eveFound}>
              <span className={s.eveFoundLabel}>Gefunden:</span>
              <span className={s.eveFoundVal}>
                x = {entries[foundAtStep].x}
              </span>
              <span className={s.eveFoundNote}>
                nach {foundAtStep + 1} Versuchen
              </span>
            </div>
          )}

          <div className={s.eveHint}>
            Bei p=23 kein Problem. Bei 2048-Bit-Primzahlen: bis zu{" "}
            <strong style={{ color: "#fb4934" }}>
              ~10<sup>616</sup>
            </strong>{" "}
            Versuche.
          </div>
        </div>
      </div>

      {/* ===== Bottom row: why large numbers matter ===== */}
      <div className={s.bottomRow}>
        <div className={s.bigNumPanel}>
          <div className={s.bigNumTitle}>Warum brauchen wir grosse Zahlen?</div>
          <div className={s.bigNumBody}>
            Bei kleinen Primzahlen (p=23) kann Eve alle Moeglichkeiten in
            Millisekunden durchprobieren. Die Sicherheit kommt ausschliesslich
            aus der <strong>Groesse des Schluesselraums</strong>.
          </div>

          <div className={s.bigNumRow}>
            <div className={s.bigNumCard} style={{ borderColor: "#fb4934" }}>
              <div className={s.bigNumCardLabel} style={{ color: "#fb4934" }}>
                p = 23
              </div>
              <div className={s.bigNumCardVal}>22 moegliche x</div>
              <div className={s.bigNumCardNote}>Brute-Force: Mikrosekunden</div>
            </div>
            <div className={s.bigNumArrow}>&rarr;</div>
            <div className={s.bigNumCard} style={{ borderColor: "#fe8019" }}>
              <div className={s.bigNumCardLabel} style={{ color: "#fe8019" }}>
                512 Bit
              </div>
              <div className={s.bigNumCardVal}>
                ~10<sup>154</sup> moegliche x
              </div>
              <div className={s.bigNumCardNote}>Heute unsicher</div>
            </div>
            <div className={s.bigNumArrow}>&rarr;</div>
            <div className={s.bigNumCard} style={{ borderColor: "#fabd2f" }}>
              <div className={s.bigNumCardLabel} style={{ color: "#fabd2f" }}>
                2048 Bit
              </div>
              <div className={s.bigNumCardVal}>
                ~10<sup>616</sup> moegliche x
              </div>
              <div className={s.bigNumCardNote}>NIST-Standard heute</div>
            </div>
            <div className={s.bigNumArrow}>&rarr;</div>
            <div className={s.bigNumCard} style={{ borderColor: "#b8bb26" }}>
              <div className={s.bigNumCardLabel} style={{ color: "#b8bb26" }}>
                ECDH 256 Bit
              </div>
              <div className={s.bigNumCardVal}>
                ~10<sup>77</sup> moegliche x
              </div>
              <div className={s.bigNumCardNote}>
                Gleiche Sicherheit, kleiner Schluessel
              </div>
            </div>
          </div>
        </div>

        <div className={s.ksPanel}>
          <div className={s.ksPanelTitle}>Schluesselraeume im Vergleich</div>
          <KeyspaceBar />
        </div>
      </div>
    </div>
  )
}
