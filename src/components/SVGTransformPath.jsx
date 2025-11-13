import { useEffect, useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { SVGComponent, Rectangle, Transform, Path } from "./SVG"
import Slider from "./Slider"
import SVGTransformBase from "./SVGTransformBase"
import style from "@components/Path.module.css"

export default function SVGTransformPath() {
  const [svgDisplayCode, setSvgDisplayCode] = useState("")
  const [outputString, setOutputString] = useState("")
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [width, setWidth] = useState(20)
  const [height, setHeight] = useState(20)
  const [path, setPath] = useState("M 100 100 L 200 200 v -100 z")

  const fill = "pink"

  useEffect(() => {
    setOutputString(`<path fill="${fill}" d="${path}" />`)
  }, [path])

  return (
    <SVGTransformBase
      elementControlls={
        <>
          <h3>Kontrollelemente Pfad</h3>
          <div className={style.formGroup}>
            <label htmlFor="pathField">Pfad: </label>
            <input
              id="pathField"
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
            />
          </div>
        </>
      }
      element={<Path stroke="black" d={path} fill={fill} />}
      outputString={outputString}
    />
  )
}
