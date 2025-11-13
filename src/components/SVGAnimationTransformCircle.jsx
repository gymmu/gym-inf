import { useEffect, useState } from "react"

import SVGAnimationTransformBase from "./SVGAnimationTransformBase"
import { Circle } from "./SVG"
import Slider from "@components/Slider.jsx"
import style from "@components/Path.module.css"

export default function SVGAnimationTransformCircle() {
  const [outputString, setOutputString] = useState("<circle>")
  const [cx, setCx] = useState(150)
  const [cy, setCy] = useState(150)
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
      elementControlls={
        <>
          <h3>Kontrollelemente Kreis</h3>
          <div className={style.controlls}>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Mittelpunkt x = ${cx}`}
                value={cx}
                setValue={setCx}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Mittelpunkt y = ${cy}`}
                value={cy}
                setValue={setCy}
                minVal={0}
                maxVal={300}
              />
            </div>
            <div className={style.formGroup}>
              <Slider
                sliderText={`Radius r = ${r}`}
                value={r}
                setValue={setR}
                minVal={5}
                maxVal={150}
              />
            </div>
          </div>
        </>
      }
      outputString={outputString}
    />
  )
}
