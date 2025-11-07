import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Editor from "@components/Editor.jsx"
import Select from "@components/Select.jsx"

import Slider from "./Slider"
import style from "@components/BoxModel.module.css"

/**
 * TODO: Im Moment lädt das iframe nicht nach. Das muss ich noch herausfinden.
 * Dann soll das ganze modularer werden, so das ich schnell unterschiedliche
 * Dinge zeigen kann. Die Interaktivität muss in beide richtungen
 * funktionieren, das muss ich noch sicherstellen und suaber dokumentieren.
 *
 */

export default function CSSIntroCode({htmlCode, cssCode}) {
    const [bgColor, setBgColor] = useState("white")
    const [fgColor, setFgColor] = useState("black")
    const [fontSize, setFontSize] = useState(32)
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

        setCSS(newCodeString)
        // Update previous values
    }, [bgColor, fgColor, fontSize])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
<html>
<body>${html}</body>
<style>${css}</style>
</html>
`)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [css, html])

    function handleCodeUpdate(value) {
        setCSS(value)
    }

    return (
        <div className={style.wrapper}>
        <div className={style.gridContainer}>

            <div className={style.controlls} style={{gridArea: "controlls"}}>
                <h3>Kontrollelemente</h3>
                <div className={style.formControll}>
                    <label>Hintergrundfarbe: </label>
                    <Select value={bgColor} onChange={(e) => setBgColor(e.target.value)} 
                        options={["white", "red", "green", "blue", "black"]} />
                </div>
                <div className={style.formControll}>
                    <label>Schriftfarbe: </label>
                    <Select
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        options={["white", "red", "green", "blue", "black"]}
                    />
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
            </div>
            <div style={{gridArea: "html"}}>
                <h3>HTML</h3>
                <SyntaxHighlighter language="html" style={dark}>
                    {html}
                </SyntaxHighlighter>
            </div>
            <div style={{gridArea: "css"}}>
                <Editor title="CSS" language="css" value={css} handleChange={handleCodeUpdate} />
            </div>
            <div style={{gridArea: "iframe"}}>
                <h3>Resultat</h3>
                <iframe 
                    srcDoc={srcDoc}
                    title="output"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                />
            </div>
        </div>
        </div>
    )
}
