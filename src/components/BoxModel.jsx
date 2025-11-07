import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Slider from "./Slider"
import style from "@components/BoxModel.module.css"

export default function BoxModel({ children }) {
  const [bgColor, setBgColor] = useState("red")
  const [codeString, setCodeString] = useState("")
  const [margin, setMargin] = useState(10)
  const [border, setBorder] = useState(2)
  const [padding, setPadding] = useState(10)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(100)

  useEffect(() => {
    const newCodeString = `.box {
    margin: ${margin}px;
    border: ${border}px solid black;
    padding: ${padding}px;
    width: ${width}px;
    height: ${height}px;
    background-color: ${bgColor};
}`

    setCodeString(newCodeString)
    // Update previous values
  }, [bgColor, margin, border, padding, width, height])

  return (
    <div>
      <div className={style.gridContainer}>
                <div className={style.leftContainer}>
        <div className={style.controlls}>
          <select
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          >
            <option>red</option>
            <option>green</option>
            <option>blue</option>
          </select>
          <Slider
            sliderText="Margin"
            value={margin}
            setValue={setMargin}
            minVal={0}
            maxVal={100}
          />
          <Slider
            sliderText="Border"
            value={border}
            setValue={setBorder}
            minVal={0}
            maxVal={20}
          />
          <Slider
            sliderText="Padding"
            value={padding}
            setValue={setPadding}
            minVal={0}
            maxVal={100}
          />
          <Slider
            sliderText="Width"
            value={width}
            setValue={setWidth}
            minVal={50}
            maxVal={500}
          />
          <Slider
            sliderText="Height"
            value={height}
            setValue={setHeight}
            minVal={50}
            maxVal={500}
          />
          <SyntaxHighlighter language="css" style={dark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        </div>
        <div>
        <div className={style.boxContainer}
             style={{
                            padding: `${margin}px`
                        }}>
        <div
          className={style.box}
          style={{
            backgroundColor: bgColor,
            margin: `${margin}px`,
            border: `${border}px solid black`,
            padding: `${padding}px`,
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
        </div>
        </div>
      </div>
    </div>
  )
}
