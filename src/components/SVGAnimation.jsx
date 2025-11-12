import { useEffect, useState, useRef } from "react"
import { renderToString } from "react-dom/server"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Editor from "@components/Editor.jsx"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGAnimation() {
  const [fill, setFill] = useState("none")
  const [attribute, setAttribute] = useState("cx")
  const [values, setValues] = useState("0;300;0")
  const [begin, setBegin] = useState(2)
  const [dur, setDur] = useState(2)
  const [repeatCount, setRepeatCount] = useState("indefinite")
  const [svgDisplayCode, setSvgDisplayCode] = useState("")

  const animateRef = useRef(null)

  const cx = 150
  const cy = 150
  const r = 20

  useEffect(() => {
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}">
    <animate attributeName="${attribute}"
              from="${values}"
              begin="${begin}s"
              dur="${dur}s"
              repeatCount="${repeatCount}"
    />
  </circle>
</svg>`)
    if (animateRef) {
      animateRef.current.beginElement()
    }
  }, [attribute, values, dur, repeatCount, animateRef])

  return (
    <div className={style.gridContainer}>
      <div className={style.gridBox}>
        <h2>Kontrollelemente</h2>
        <div className={style.controlls}>
          <div className={style.formGroup}>
            <label htmlFor="attribteField">Animations Attribut</label>
            <select
              id="attributeField"
              value={attribute}
              onChange={(e) => setAttribute(e.target.value)}>
              <option>cx</option>
              <option>cy</option>
              <option>r</option>
            </select>
          </div>
          <div className={style.formGroup}>
            <label htmlFor="valuesField">Animations-Werte</label>
            <input
              type="text"
              id="valuesField"
              value={values}
              onChange={(e) => setValues(e.target.value)}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText="Dauer"
              value={dur}
              setValue={setDur}
              minVal={0.1}
              maxVal={10}
              step={0.1}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText="Wiederholungen"
              value={repeatCount}
              setValue={setRepeatCount}
              minVal={1}
              maxVal={10}
            />
          </div>
        </div>
      </div>
      <div className={style.gridBox}>
        <h2>Resultat</h2>
        <SVGComponent>
          <Circle cx={cx} cy={cy} r={r}>
            <Animation
              animateRef={animateRef}
              attributeName={attribute}
              begin={`${begin}s`}
              values={values}
              dur={`${dur}s`}
              repeat={repeatCount}
            />
          </Circle>
        </SVGComponent>
      </div>
      <div className={style.gridBox}>
        <h2>SVG Code</h2>
        <SyntaxHighlighter language="svg" style={dark}>
          {svgDisplayCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

function SVGComponent({ children }) {
  return (
    <svg
      style={{ backgroundColor: "white" }}
      viewBox="-25 -25 350 350"
      width="300">
      <defs>
        <pattern
          id="smallGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="gray"
            stroke-width="0.5"
          />
        </pattern>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="url(#smallGrid)" />
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="gray"
            stroke-width="1"
          />
        </pattern>
      </defs>
      <rect width="301" height="301" fill="url(#grid)" />
      <g id="xAxisLabels">
        <text x="-5" y="-5">
          0
        </text>
        <text x="40" y="-5">
          50
        </text>
        <text x="85" y="-5">
          100
        </text>
        <text x="135" y="-5">
          150
        </text>
        <text x="185" y="-5">
          200
        </text>
        <text x="235" y="-5">
          250
        </text>
        <text x="285" y="-5">
          300
        </text>
      </g>
      <g id="yAxisLabels">
        <text x="-15" y="5">
          0
        </text>
        <text x="-20" y="55">
          50
        </text>
        <text x="-25" y="105">
          100
        </text>
        <text x="-25" y="155">
          150
        </text>
        <text x="-25" y="205">
          200
        </text>
        <text x="-25" y="255">
          250
        </text>
        <text x="-25" y="305">
          300
        </text>
      </g>
      {children}
    </svg>
  )
}

function Path({
  strokeWidth = 2,
  strokeColor = "black",
  fill = "none",
  d = "",
}) {
  return (
    <path strokeWidth={strokeWidth} stroke={strokeColor} fill={fill} d={d} />
  )
}

function Circle({
  cx = 0,
  cy = 0,
  r = 10,
  fill = "black",
  stroke = "none",
  children,
}) {
  return (
    <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke}>
      {children}
    </circle>
  )
}

function Animation({
  animateRef,
  attributeName,
  values,
  begin,
  dur = "1s",
  repeat = "indefinite",
}) {
  return (
    <animate
      ref={animateRef}
      attributeName={attributeName}
      values={values}
      begin={begin}
      dur={dur}
      repeatCount={repeat}
      restart="always"
    />
  )
}
