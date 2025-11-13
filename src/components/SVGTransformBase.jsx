import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Transform, Origin } from "./SVG"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGTransformBase({
  elementControlls,
  element,
  outputString = "",
}) {
  const [svgDisplayCode, setSvgDisplayCode] = useState("")
  const [originX, setOriginX] = useState(0)
  const [originY, setOriginY] = useState(0)
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [skewX, setSkewX] = useState(0)
  const [skewY, setSkewY] = useState(0)

  //const elementControlls = React.Children.toArray(children).find(child => child.type === ElementControlls)

  useEffect(() => {
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  <g transform-origin="${originX} ${originY}"
     transform="translate(${dx}, ${dy}) rotate(${rotation}) scale(${scale}) skewX(${skewX}) skewY(${skewY})">
      ${outputString}
  </g>
</svg>`)
  }, [dx, dy, rotation, scale, originX, originY, skewX, skewY, outputString])

  return (
    <div className={style.gridContainer}>
      <div className={style.gridBox}>
        <h3>Kontrollelemente Transformation</h3>
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
            <Slider
              sliderText={`Verschiebung x = ${dx}`}
              value={dx}
              setValue={setDx}
              minVal={-300}
              maxVal={300}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Verschiebung y = ${dy}`}
              value={dy}
              setValue={setDy}
              minVal={-300}
              maxVal={300}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Rotation = ${rotation}°`}
              value={rotation}
              setValue={setRotation}
              minVal={0}
              maxVal={360}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Skalierung = ${scale}`}
              value={scale}
              setValue={setScale}
              minVal={0.1}
              maxVal={3}
              step={0.1}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Verzerrung x = ${skewX}°`}
              value={skewX}
              setValue={setSkewX}
              minVal={-100}
              maxVal={100}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Verzerrung y = ${skewY}°`}
              value={skewY}
              setValue={setSkewY}
              minVal={-100}
              maxVal={100}
            />
          </div>
          {elementControlls}
        </div>
      </div>

      <div className={style.gridBox}>
        <h3>Resultat</h3>
        <SVGComponent>
          <Transform
            originX={originX}
            originY={originY}
            tx={dx}
            ty={dy}
            rot={rotation}
            scale={scale}
            skewX={skewX}
            skewY={skewY}>
            {element}
          </Transform>
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
