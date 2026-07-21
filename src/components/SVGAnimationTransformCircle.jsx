import { useEffect, useState } from "react"

import SVGAnimationTransformBase from "./SVGAnimationTransformBase"
import { Circle } from "./SVG"
import Slider from "@components/Slider.jsx"
import style from "@components/Path.module.css"

export default function SVGAnimationTransformCircle() {
  const [outputString, setOutputString] = useState("<circle>")
  const [cx, setCx] = useState(150)
  const [cy, setCy] = useState(100)
  const [r, setR] = useState(20)

  const fill = "black"

  useEffect(() => {
    setOutputString(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />
    <circle cx="${cx}" cy="${cy + 100}" r="${r}" fill="${fill}" />`)
  }, [cx, cy, r])

  return (
    <SVGAnimationTransformBase
      id="circle-animation"
      element={
        <>
          <Circle cx={cx} cy={cy} r={r} fill={fill} />
          <Circle cx={cx} cy={cy + 100} r={r} fill={fill} />
        </>
      }
      outputString={outputString}
    />
  )
}
