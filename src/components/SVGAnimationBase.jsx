import { useEffect, useState, useRef } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Animation } from "./SVG"
import Slider from "@components/Slider"
import Select from "@components/Select.jsx"
import style from "@components/Path.module.css"

export default function SVGAnimationBase({
  id = "placeholder",
  attributes = [],
  elementControlls,
  element,
  outputString = "<circle>",
}) {
  const [attribute, setAttribute] = useState(attributes[0] || "none")
  const [values, setValues] = useState("0;300;0")
  const [dur, setDur] = useState(2)
  const [repeatCount, setRepeatCount] = useState("indefinite")
  const [svgDisplayCode, setSvgDisplayCode] = useState("")

  const animateRef = useRef(null)

  useEffect(() => {
    const closing = outputString.match(/^<[a-z]+/)[0].substring(1)
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  ${outputString}
    <animate attributeName="${attribute}"
              values="${values}"
              dur="${dur}s"
              repeatCount="${repeatCount}"
    />
  </${closing}>
</svg>`)
    if (animateRef) {
      animateRef.current.beginElement()
    }
  }, [attribute, values, dur, repeatCount, outputString])

  return (
    <div className={style.gridContainer}>
      <div className={style.gridBox}>
        <h3>Kontrollelemente</h3>
        <div className={style.controlls}>
          <div className={style.formGroup}>
            <label htmlFor="attribteField">Animations Attribut</label>
            <Select
              id="attributeField"
              value={attribute}
              onChange={(e) => setAttribute(e.target.value)}
              options={[...attributes]}
            />
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
              sliderText={`Dauer ${dur}s`}
              value={dur}
              setValue={setDur}
              minVal={0.1}
              maxVal={10}
              step={0.1}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Wiederholungen ${repeatCount}-mal`}
              value={repeatCount}
              setValue={setRepeatCount}
              minVal={1}
              maxVal={10}
            />
          </div>
        </div>
        {elementControlls}
      </div>
      <div className={style.gridBox}>
        <h3>Resultat</h3>
        <SVGComponent>
          <Animation
            target={`${id}`}
            animateRef={animateRef}
            attributeName={attribute}
            values={values}
            dur={`${dur}s`}
            repeat={repeatCount}
          />
          {element}
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
