import { useState, useRef, useEffect } from "react"
import katex from "katex"
import "katex/dist/katex.css"
import s from "./ModExpSlide.module.css"

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

// -- Clock face SVG -------------------------------------------------------

const CLOCK_R = 148
const SVG_SIZE = 370

function ClockFace({ a, m }) {
  const result = ((a % m) + m) % m
  const cx = SVG_SIZE / 2
  const cy = SVG_SIZE / 2

  function ang(i) {
    return (2 * Math.PI * i) / m - Math.PI / 2
  }
  function pt(i, r) {
    return { x: cx + r * Math.cos(ang(i)), y: cy + r * Math.sin(ang(i)) }
  }

  function arcPath() {
    if (a === 0) return ""
    const r = CLOCK_R
    const sa = -Math.PI / 2
    const ea = (2 * Math.PI * result) / m - Math.PI / 2
    const x1 = cx + r * Math.cos(sa)
    const y1 = cy + r * Math.sin(sa)
    if (result === 0) {
      return `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x1 - 0.01} ${y1}`
    }
    const sweep = ea - sa
    const large = sweep > Math.PI ? 1 : 0
    const x2 = cx + r * Math.cos(ea)
    const y2 = cy + r * Math.sin(ea)
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`
  }

  const arcD = arcPath()
  const rPt = pt(result, CLOCK_R)

  return (
    <svg
      width={SVG_SIZE}
      height={SVG_SIZE}
      className={s.clockSvg}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}>
      <circle
        cx={cx}
        cy={cy}
        r={CLOCK_R}
        fill="none"
        stroke="#3c3836"
        strokeWidth="1.5"
      />
      {arcD && (
        <path
          d={arcD}
          fill="none"
          stroke="#fabd2f"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.5"
        />
      )}
      {Array.from({ length: m }, (_, i) => {
        const isRes = i === result
        const isZero = i === 0
        const pin = pt(i, CLOCK_R - 9)
        const pout = pt(i, CLOCK_R + 9)
        const plabel = pt(i, CLOCK_R + 24)
        return (
          <g key={i}>
            <line
              x1={pin.x}
              y1={pin.y}
              x2={pout.x}
              y2={pout.y}
              stroke={isRes ? "#fabd2f" : isZero ? "#83a598" : "#504945"}
              strokeWidth={isRes ? 3 : 1.5}
            />
            <text
              x={plabel.x}
              y={plabel.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isRes ? "#fabd2f" : isZero ? "#83a598" : "#928374"}
              fontSize={isRes ? 15 : 13}
              fontWeight={isRes ? 700 : 400}
              fontFamily="monospace">
              {i}
            </text>
          </g>
        )
      })}
      <line
        x1={cx}
        y1={cy}
        x2={rPt.x}
        y2={rPt.y}
        stroke="#fabd2f"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {(() => {
        const angle = ang(result)
        const dx = Math.cos(angle)
        const dy = Math.sin(angle)
        const px = -dy
        const py = dx
        const hs = 8
        return (
          <polygon
            points={`${rPt.x},${rPt.y} ${rPt.x - dx * hs + px * 4},${rPt.y - dy * hs + py * 4} ${rPt.x - dx * hs - px * 4},${rPt.y - dy * hs - py * 4}`}
            fill="#fabd2f"
          />
        )
      })()}
      <circle cx={cx} cy={cy} r={5} fill="#fabd2f" />
      {a > 0 && (
        <text
          x={cx}
          y={cy - CLOCK_R - 16}
          textAnchor="middle"
          fill="#928374"
          fontSize="12"
          fontFamily="monospace">
          {Math.floor(a / m)} {Math.floor(a / m) === 1 ? "Runde" : "Runden"},
          Rest {result}
        </text>
      )}
      <text
        x={cx}
        y={cy + CLOCK_R + 40}
        textAnchor="middle"
        fill="#fabd2f"
        fontSize="17"
        fontWeight="700"
        fontFamily="monospace">
        = {result}
      </text>
    </svg>
  )
}

// -- Number input hook ----------------------------------------------------

function useNum(def) {
  const [raw, setRaw] = useState(String(def))
  const n = parseInt(raw, 10)
  return { raw, setRaw, value: isNaN(n) ? NaN : n }
}

// -- Main component -------------------------------------------------------

export default function ModExpSlide() {
  const aField = useNum(17)
  const mField = useNum(5)
  const a = isNaN(aField.value) ? 0 : Math.max(0, Math.min(aField.value, 999))
  const m =
    isNaN(mField.value) || mField.value < 2 ? 2 : Math.min(mField.value, 16)
  const result = ((a % m) + m) % m

  return (
    <div className={s.root}>
      {/* inputs */}
      <div className={s.clockRow}>
        <div className={s.clockInputGroup}>
          <label className={s.clockLabel}>Zahl a</label>
          <input
            className={s.clockInput}
            type="number"
            min={0}
            max={999}
            value={aField.raw}
            onChange={(e) => aField.setRaw(e.target.value)}
          />
        </div>
        <div className={s.clockOp}>mod</div>
        <div className={s.clockInputGroup}>
          <label className={s.clockLabel}>Modulus m</label>
          <input
            className={s.clockInput}
            type="number"
            min={2}
            max={16}
            value={mField.raw}
            onChange={(e) => mField.setRaw(e.target.value)}
          />
        </div>
        <div className={s.clockOp}>=</div>
        <div className={s.clockAnswer}>{result}</div>
      </div>

      {/* formula */}
      <div className={s.clockFormula}>
        <Tex
          display>{`${a} = ${Math.floor(a / m)} \\times ${m} + ${result}`}</Tex>
      </div>

      {/* clock */}
      <div className={s.clockWrap}>
        <ClockFace a={a} m={m} />
      </div>

      {/* caption */}
      <div className={s.caption}>
        Wie eine Uhr mit {m} Positionen — nach {m} beginnt die Zaehlung bei 0.{" "}
        {Math.floor(a / m)}{" "}
        {Math.floor(a / m) === 1 ? "volle Runde" : "volle Runden"}, dann noch{" "}
        <strong style={{ color: "#fabd2f" }}>{result} Schritte</strong>.
      </div>
    </div>
  )
}
