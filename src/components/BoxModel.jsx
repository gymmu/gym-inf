import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Slider from "./Slider"
import Select from "@components/Select.jsx"
import style from "@components/BoxModel.module.css"

export default function BoxModel({ children }) {
  const [bgColor, setBgColor] = useState("red")
  const [codeString, setCodeString] = useState("")
  const [margin, setMargin] = useState(10)
  const [border, setBorder] = useState(5)
  const [padding, setPadding] = useState(20)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(150)

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
                <div className={style.formControll}>
                    <label>Inhaltsfarbe: </label>
          <Select
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            options={["black", "red", "green", "blue", "white"]}
          />
          </div>
                <div className={style.formControll}>
          <Slider
            sliderText="Margin:"
            value={margin}
            setValue={setMargin}
            minVal={0}
            maxVal={40}
          />
          </div>
                <div className={style.formControll}>
          <Slider
            sliderText="Border:"
            value={border}
            setValue={setBorder}
            minVal={0}
            maxVal={20}
          />
          </div>
                <div className={style.formControll}>
          <Slider
            sliderText="Padding:"
            value={padding}
            setValue={setPadding}
            minVal={0}
            maxVal={50}
          />
          </div>
                <div className={style.formControll}>
          <Slider
            sliderText="Width:"
            value={width}
            setValue={setWidth}
            minVal={150}
            maxVal={200}
          />
          </div>
                <div className={style.formControll}>
          <Slider
            sliderText="Height:"
            value={height}
            setValue={setHeight}
            minVal={150}
            maxVal={300}
          />
          </div>
          <SyntaxHighlighter language="css" style={dark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        </div>
        <div>
        <div className={style.boxContainer}
             style={{
                boxSizing: "content-box",
                padding: `${0.1}px`,
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
