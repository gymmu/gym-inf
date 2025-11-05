import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Slider from "./Slider"

export default function BoxModel({ children }) {
  const [bgColor, setBgColor] = useState("blue")
  const [codeString, setCodeString] = useState("")
  const [margin, setMargin] = useState(10)
  const [border, setBorder] = useState(2)
  const [padding, setPadding] = useState(10)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(100)
  const [prevMargin, setPrevMargin] = useState(margin)
  const [prevBorder, setPrevBorder] = useState(border)
  const [prevPadding, setPrevPadding] = useState(padding)
  const [prevWidth, setPrevWidth] = useState(width)
  const [prevHeight, setPrevHeight] = useState(height)
  const [blinkingValues, setBlinkingValues] = useState({})

  useEffect(() => {
    const newCodeString = `.box {\n        margin: ${margin}px;\n        border: ${border}px solid black;\n        padding: ${padding}px;\n        width: ${width}px;\n        height: ${height}px;\n        background-color: ${bgColor};`

    setCodeString(newCodeString)

    // Check for changes and set blinking values
    const newBlinkingValues = {}
    if (margin !== prevMargin) newBlinkingValues.margin = true
    if (border !== prevBorder) newBlinkingValues.border = true
    if (padding !== prevPadding) newBlinkingValues.padding = true
    if (width !== prevWidth) newBlinkingValues.width = true
    if (height !== prevHeight) newBlinkingValues.height = true

    setBlinkingValues(newBlinkingValues)

    // Reset blinking state after 200ms
    const timer = setTimeout(() => {
      setBlinkingValues({})
    }, 200)

    // Update previous values
    setPrevMargin(margin)
    setPrevBorder(border)
    setPrevPadding(padding)
    setPrevWidth(width)
    setPrevHeight(height)

    return () => clearTimeout(timer)
  }, [bgColor, margin, border, padding, width, height])

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <input
            type="text"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
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
        <div
          className="box"
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
    </>
  )
}

function Updater({ children }) {
  return <span>{children}</span>
}
