import { useEffect, useState } from "react"

import { Circle } from "./SVG"
import SVGTransformBase from "./SVGTransformBase"
import Slider from "./Slider"
import style from "@components/Path.module.css"

export default function SVGTransform() {
  const [outputString, setOutputString] = useState("")
  const [cx, setCx] = useState(150)
  const [cy, setCy] = useState(150)

  const r = 40
  const fill = "forestgreen"

  useEffect(() => {
    setOutputString(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" />`)
  }, [cx, cy])

  return (
    <SVGTransformBase
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
          </div>
        </>
      }
      element={<Circle cx={cx} cy={cy} r={r} fill={fill}></Circle>}
      outputString={outputString}
    />
  )
}
