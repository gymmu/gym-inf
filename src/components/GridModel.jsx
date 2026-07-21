import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Slider from "./Slider"
import Select from "@components/Select.jsx"
import Editor from "@components/Editor.jsx"
import style from "@components/BoxModel.module.css"

export default function GridModel() {
  const [srcDoc, setSrcDoc] = useState("")
  const [codeString, setCodeString] = useState("")
  const [display, setDisplay] = useState("grid")
  const [cols, setCols] = useState(3)
  const [gap, setGap] = useState(16)
  const [alignContent, setAlignContent] = useState("normal") 
  const [justifyContent, setJustifyContent] = useState("start") 
  
  const htmlString = `<div class="grid-wrapper">
    <div>box 1</div>
    <div>box 2</div>
    <div>box 3</div>
    <div>box 4</div>
    <div>box 5</div>
    <div>box 6</div>
</div>`

  useEffect(() => {
    const newCSS = `.grid-wrapper {
    display: ${display};
    grid-template-columns: repeat(${cols}, 200px);
    gap: ${gap}px;
    align-content: ${alignContent};
    justify-content: ${justifyContent};
}`
    handleCodeUpdate(newCSS)

  }, [display, cols,  gap, alignContent, justifyContent])

    function handleCodeUpdate(code) {
    setCodeString(code)

    setSrcDoc(`<html>
    <body>${htmlString}</body>
    <style>${code}</style>
    <style>
body {
    margin: 0;
    padding: 0;
}
.grid-wrapper {
    border: 1px solid black;
    width: 100%;
    height: 100%;
}
.grid-wrapper > div {
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    color: black;
    font-weight: bold;
    border-radius: 0.5rem;
    font-size: 1.6rem;
}</style>
</html>`)

    }

    return (
        <div className={style.gridContainer}>
            <div style={{gridArea: "controlls"}} className={style.controlls}>
                <h3>Kontrollelemente</h3>
                <div className={style.formControll}>
                    <label>Display: </label>
                    <Select
                        value={display}
                        onChange={(e) => setDisplay(e.target.value)}
                        options={["grid", "flex"]}
                    />
                </div>
                <div className={style.formControll}>
                    <Slider
                        sliderText="Spalten:"
                        value={cols}
                        setValue={setCols}
                        minVal={1}
                        maxVal={6} />
                </div>
                <div className={style.formControll}>
                    <Slider
                        sliderText="Abstand:"
                        value={gap}
                        setValue={setGap}
                        minVal={0}
                        maxVal={128} />
                </div>
                <div className={style.formControll}>
                    <label>Ausrichtung Inhalt: </label>
                    <Select
                        value={justifyContent}
                        onChange={(e) => setJustifyContent(e.target.value)}
                        options={["start", "center", "end", "space-around", "space-between", "space-evenly"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Ausrichtung Cross-Achse: </label>
                    <Select
                        value={alignContent}
                        onChange={(e) => setAlignContent(e.target.value)}
                        options={["start", "center", "end", "space-evenly", "space-around", "space-between"]}
                    />
                </div>
            </div>
            <div style={{gridArea: "css"}}>
                <h3>CSS Code</h3>
                <Editor title="CSS" language="css" value={codeString} handleChange={handleCodeUpdate} />
            </div>
            <div style={{gridArea: "html"}}>
                <h3>HTML Code</h3>
                <SyntaxHighlighter language="html" style={dark}>
                    {htmlString}
                </SyntaxHighlighter>
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
    )
}
