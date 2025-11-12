import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Circle, Transform } from "./SVG"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGTransform() {
  const [svgDisplayCode, setSvgDisplayCode] = useState("")
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)

  const cx = 0
  const cy = 0
  const r = 20
  const fill = "pink"

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
        <h2>Kontrollelemente</h2>
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
              minVal={-360}
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
        </div>
      </div>
      <div className={style.gridBox}>
        <h2>Resultat</h2>
        <SVGComponent>
          <Transform tx={dx} ty={dy} rot={rotation} scale={scale}>
            <Circle cx={cx} cy={cy} r={r}></Circle>
          </Transform>
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
