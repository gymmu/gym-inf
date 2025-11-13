import { useEffect, useState, useRef } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, AnimationTransform, Origin } from "./SVG"
import Slider from "@components/Slider"
import Select from "@components/Select.jsx"
import style from "@components/Path.module.css"

export default function SVGAnimationTransformBase({
  id = "placeholder",
  attributes = ["none", "rotate", "scale", "skewX", "skewY", "translate"],
  elementControlls,
  element,
  outputString = "<circle>",
}) {
  const [attribute, setAttribute] = useState(attributes[0] || "none")
  const [originX, setOriginX] = useState(0)
  const [originY, setOriginY] = useState(0)
  const [values, setValues] = useState("0;300;0")
  const [dur, setDur] = useState(2)
  const [repeatCount, setRepeatCount] = useState("indefinite")
  const [svgDisplayCode, setSvgDisplayCode] = useState("")

  const animateRef = useRef(null)

  useEffect(() => {
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  <g transform-origin="${originX} ${originY}">
    ${outputString}
    <animateTransform attributeName="transform"
              type="${attribute}"
              values="${values}"
              dur="${dur}s"
              repeatCount="${repeatCount}"
    />
  </g>
</svg>`)
    if (animateRef) {
      animateRef.current.beginElement()
    }
  }, [attribute, values, dur, repeatCount, outputString, originX, originY])

  return (
    <div className={style.gridContainer}>
      <div className={style.gridBox}>
        <h3>Kontrollelemente</h3>
        <div className={style.controlls}>
          <div className={style.formGroup} style={{ accentColor: "red" }}>
            <Slider
              sliderText={`Ursprung x = ${originX}`}
              value={originX}
              setValue={setOriginX}
              minVal={0}
              maxVal={300}
            />
          </div>
          <div className={style.formGroup} style={{ accentColor: "red" }}>
            <Slider
              sliderText={`Ursprung y = ${originY}`}
              value={originY}
              setValue={setOriginY}
              minVal={0}
              maxVal={300}
            />
          </div>
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
          <AnimationTransform
            target={`${id}`}
            animateRef={animateRef}
            attributeType={attribute}
            values={values}
            dur={`${dur}s`}
            repeat={repeatCount}
          />
          <g id={id} transform-origin={`${originX} ${originY}`}>
            {element}
          </g>
          <Origin x={originX} y={originY} />
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
