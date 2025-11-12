import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Circle, Transform } from "./SVG"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGTransformBase({ elementControlls, element }) {
  const [svgDisplayCode, setSvgDisplayCode] = useState("")
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [cx, setCx] = useState(0)
  const [cy, setCy] = useState(0)

  const r = 20
  const fill = "pink"

  //const elementControlls = React.Children.toArray(children).find(child => child.type === ElementControlls)

  useEffect(() => {
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  <g translate="transform(${dx}, ${dy}) rotate(${rotation}) scale=(${scale})">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />
  </g>
</svg>`)
  }, [dx, dy, rotation, scale])

  return (
    <div className={style.gridContainer}>
      <div className={style.gridBox}>
        <h3>Kontrollelemente Transformation</h3>
        <div className={style.controlls}>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Verschiebung x = ${dx}`}
              value={dx}
              setValue={setDx}
              minVal={0}
              maxVal={300}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Verschiebung y = ${dy}`}
              value={dy}
              setValue={setDy}
              minVal={0}
              maxVal={300}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText={`Rotation = ${rotation}deg`}
              value={rotation}
              setValue={setRotation}
              minVal={0}
              maxVal={360}
            />
          </div>
          <div className={style.formGroup}>
            <Slider
              sliderText="Skalierung"
              value={scale}
              setValue={setScale}
              minVal={0.1}
              maxVal={3}
              step={0.1}
            />
          </div>
          {elementControlls}
        </div>
      </div>

      <div className={style.gridBox}>
        <h3>Resultat</h3>
        <SVGComponent>
          <Transform tx={dx} ty={dy} rot={rotation} scale={scale}>
            {element}
          </Transform>
        </SVGComponent>
      </div>
      <div className={style.gridBox}>
        <h3>SVG Code</h3>
        <SyntaxHighlighter language="svg" style={dark}>
          {svgDisplayCode}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
