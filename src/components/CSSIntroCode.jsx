import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Editor from "@components/Editor.jsx"

import Slider from "./Slider"
import style from "@components/BoxModel.module.css"

export default function CSSIntroCode({htmlCode, cssCode}) {
  const [bgColor, setBgColor] = useState("white")
  const [fgColor, setFgColor] = useState("black")
  const [fontSize, setFontSize] = useState(16)
  const [codeString, setCodeString] = useState("")
    const [html, setHTML] = useState(htmlCode)
    const [css, setCSS] = useState(cssCode)
    const [srcDoc, setSrcDoc] = useState(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
        </html>
`)

  useEffect(() => {
    const newCodeString = `.title {
    background-color: ${bgColor};
    color: ${fgColor};
    font-size: ${fontSize}pt;
}`

    setCodeString(newCodeString)
    setCSS(newCodeString)
    // Update previous values
  }, [bgColor, fgColor, fontSize])

    useEffect(() => {
    const timeout = setTimeout(() => {
        setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
        </html>
`)
    }, 1000)
    return () => clearTimeout(timeout)
    }, [css, html])

    function handleCodeUpdate({target}) {
        const {value} = target
        setCodeString(value)
        setCSS(value)
    }

  return (
    <>
      <div className={style.gridContainer}>
                <div className={style.leftContainer}>
        <div className={style.controlls}>

        <div className={style.formControll}>
            <label>Hintergrundfarbe: </label>
          <select
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          >
            <option>white</option>
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>black</option>
          </select>
          </div>
        <div className={style.formControll}>
            <label>Schriftfarbe: </label>
          <select
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
          >
            <option>white</option>
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>black</option>
          </select>
          </div>
        <div className={style.formControll}>
          <Slider
            sliderText="Schriftgrösse"
            value={fontSize}
            setValue={setFontSize}
            minVal={4}
            maxVal={56}
          />
          </div>
          <SyntaxHighlighter language="html" style={dark}>
            {html}
          </SyntaxHighlighter>
                <Editor title="CSS" language="css" value={codeString} handleChange={handleCodeUpdate} />
        </div>
        </div>
        <div>
            <iframe 
                    srcDoc={srcDoc}
                    title="output"
                    frameBorder="0"
                    height="300px"
                    width="300px"
            />
        </div>
        </div>
    </>
  )
}
