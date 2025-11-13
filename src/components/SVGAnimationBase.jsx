import { useEffect, useState, useRef } from "react"
import { renderToString } from "react-dom/server"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Circle, Animation } from "./SVG"
import Editor from "@components/Editor.jsx"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGAnimationBase({
  id = "placeholder",
  elementControlls,
  element,
  outputString = "<circle>",
}) {
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
    const closing = outputString.match(/^<[a-z]+/)[0].substring(1)
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  ${outputString}
    <animate attributeName="${attribute}"
              from="${values}"
              begin="${begin}s"
              dur="${dur}s"
              repeatCount="${repeatCount}"
    />
  </${closing}>
</svg>`)
    if (animateRef) {
      animateRef.current.beginElement()
    }
  }, [attribute, values, dur, repeatCount, begin, outputString])

  return (
    <div className={style.gridContainer}>
      <div className={style.gridBox}>
        <h3>Kontrollelemente</h3>
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
        <h3>Resultat</h3>
        <SVGComponent>
          <Animation
            target={`${id}`}
            animateRef={animateRef}
            attributeName={attribute}
            begin={`${begin}s`}
            values={values}
            dur={`${dur}s`}
            repeat={repeatCount}
          />
          <Circle id={id} cx={cx} cy={cy} r={r}></Circle>
        </SVGComponent>
      </div>
      <div className={style.gridBox} style={{ gridColumn: "1 / span 2" }}>
        <h3>SVG Code</h3>
        <SyntaxHighlighter language="svg" style={dark}>
          {svgDisplayCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
