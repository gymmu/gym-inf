import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Editor from "@components/Editor.jsx"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGAnimation({
  defaultPath = "M 100 100\nL 200 200\nL 200 100\nZ",
}) {
  const [path, setPath] = useState(defaultPath)
  const [strokeColor, setStrokeColor] = useState("black")
  const [strokeWidth, setStrokeWidth] = useState(3)
  const [fill, setFill] = useState("none")
  const [attribute, setAttribute] = useState("cx")
  const [values, setValues] = useState("0")
  const [srcDoc, setSrcDoc] = useState("")
  const [codeString, setCodeString] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>
          </body>
          <style>svg { background-color: white}</style>
          <style>body { margin: 0; padding: 0; overflow: hidden;}</style>
        </html>
      `)
      const formatPath = path
        .split("\n")
        .map((line, index) => {
          if (index === 0) {
            return line
          } else {
            return `\t\t   ${line}`
          }
        })
        .join("\n")

      setCodeString(`<path stroke="${strokeColor}"
        stroke-width="${strokeWidth}"
        fill="${fill}"
        d="
           ${formatPath}
          "
    />`)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [path, fill, strokeColor, strokeWidth])

  function appendToPath(str) {
    setPath((oldPath) => {
      if (oldPath.match(/[zZ]$/)) {
        // Append before Z
        const pathWithoutClosing = oldPath.split(/\n[zZ]/)[0]
        return `${pathWithoutClosing}\n${str}\nZ`
      } else {
        return `${oldPath}\n${str}`
      }
    })
  }

  function rand() {
    return Math.floor(Math.random() * 300)
  }

  function addLineAbsolute() {
    appendToPath(`L ${rand()} ${rand()}`)
  }

  function addMoveAbsolute() {
    appendToPath(`M ${rand()} ${rand()}`)
  }

  function addVerticalAbsolute() {
    appendToPath(`V ${rand()}`)
  }

  function addHorizontalAbsolute() {
    appendToPath(`H ${rand()}`)
  }

  function addQuadraticAbsolute() {
    appendToPath(`Q ${rand()} ${rand()} ${rand()} ${rand()}`)
  }

  function addQuadraticContinuationAbsolute() {
    appendToPath(`T ${rand()} ${rand()}`)
  }

  function addLineRelative() {
    appendToPath(`l ${rand()} ${rand()}`)
  }

  function addMoveRelative() {
    appendToPath(`m ${rand()} ${rand()}`)
  }

  function addVerticalRelative() {
    appendToPath(`v ${rand()}`)
  }

  function addHorizontalRelative() {
    appendToPath(`h ${rand()}`)
  }

  function addQuadraticRelative() {
    appendToPath(`q ${rand()} ${rand()} ${rand()} ${rand()}`)
  }

  function addQuadraticContinuationRelative() {
    appendToPath(`t ${rand()} ${rand()}`)
  }

  function resetPath() {
    setPath("M 100 100\nL 200 200\nL 200 100\nZ")
  }

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
        </div>
      </div>
      <div className={style.gridBox}>
        <h2>Resultat</h2>
        <SVGComponent>
          <Path
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            fill={fill}
            d={path}
          />
          <Circle>
            <Animation
              attributeName={attribute}
              values={values}
              dur="2s"
              repeat="indefinite"
            />
          </Circle>
        </SVGComponent>
      </div>
      <div className={style.gridBox}>
        <Editor
          title="Pfad"
          language="text"
          value={path}
          handleChange={setPath}
        />
      </div>
      <div className={style.gridBox}>
        <h2>SVG Code</h2>
        <SyntaxHighlighter language="css" style={dark}>
          {codeString}
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
  attributeName,
  values,
  dur = "1s",
  repeat = "indefinite",
}) {
  return (
    <animate
      attributeName={attributeName}
      values={values}
      dur={dur}
      repeatCount={repeat}
    />
  )
}
