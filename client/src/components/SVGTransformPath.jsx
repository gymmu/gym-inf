import { useEffect, useState } from "react"

import { Path } from "./SVG"
import SVGTransformBase from "./SVGTransformBase"
import style from "@components/Path.module.css"

export default function SVGTransformPath() {
  const [outputString, setOutputString] = useState("")
  const [path, setPath] = useState("M 100 100 L 200 200 v -100 Z")

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
