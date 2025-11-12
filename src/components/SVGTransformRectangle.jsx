import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Rectangle, Transform } from "./SVG"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGTransformRectangle() {
  const [svgDisplayCode, setSvgDisplayCode] = useState("")
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [width, setWidth] = useState(20)
  const [height, setHeight] = useState(20)

  const fill = "pink"

  useEffect(() => {
    setSvgDisplayCode(`<svg viewBox="0 0 300 300" width="300">
  <g translate="transform(${dx}, ${dy}) rotate(${rotation}) scale=(${scale})">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" />
  </g>
</svg>`)
  }, [dx, dy, rotation, scale, x, y, width, height])

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
          <h3>Kontrollelemente Rechteck</h3>
          <div className={style.controlls}>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Eckpunkt x = ${x}`}
                value={x}
                setValue={setX}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Eckpunkt y = ${y}`}
                value={y}
                setValue={setY}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Breite = ${width}`}
                value={width}
                setValue={setWidth}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Höhe = ${height}`}
                value={height}
                setValue={setHeight}
                minVal={0}
                maxVal={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={style.gridBox}>
        <h3>Resultat</h3>
        <SVGComponent>
          <Transform tx={dx} ty={dy} rot={rotation} scale={scale}>
            <Rectangle
              x={x}
              y={y}
              width={width}
              height={height}
              fill={fill}></Rectangle>
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
