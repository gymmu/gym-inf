import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Slider from "./Slider"
import Select from "@components/Select.jsx"
import Editor from "@components/Editor.jsx"
import style from "@components/BoxModel.module.css"

export default function FlexboxModel() {
  const [srcDoc, setSrcDoc] = useState("")
  const [codeString, setCodeString] = useState("")
  const [display, setDisplay] = useState("flex")
  const [flexDirection, setFlexDirection] = useState("row")
  const [gap, setGap] = useState(16)
  const [alignItems, setAlignItems] = useState("normal") 
  const [justifyContent, setJustifyContent] = useState("flex-start") 
  const [wrap, setWrap] = useState("nowrap") 
  const [grow, setGrow] = useState(0) 
  const [shrink, setShrink] = useState(1) 
  
  const htmlString = `<div class="flex-wrapper">
    <div>box 1</div>
    <div>box 2</div>
    <div>box 3</div>
    <div>box 4</div>
    <div>box 5</div>
    <div>box 6</div>
</div>`

  useEffect(() => {
    const newCSS = `.flex-wrapper {
    display: ${display};
    flex-direction: ${flexDirection};
    gap: ${gap}px;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${wrap};
}

.flex-wrapper > div {
    flex-grow: ${grow};
    flex-shrink: ${shrink};
    flex-basis: auto;
}`
    handleCodeUpdate(newCSS)

  }, [display, flexDirection, gap, alignItems, justifyContent, wrap, grow, shrink])

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
.flex-wrapper > div {
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    color: white;
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
                        options={["block", "flex"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Flex Richtung: </label>
                    <Select
                        value={flexDirection}
                        onChange={(e) => setFlexDirection(e.target.value)}
                        options={["row", "column", "row-reverse", "column-reverse"]}
                    />
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
                    <label>Ausrichtung Hauptachse: </label>
                    <Select
                        value={justifyContent}
                        onChange={(e) => setJustifyContent(e.target.value)}
                        options={["flex-start", "center", "flex-end", "space-around", "space-between", "space-evenly"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Ausrichtung Cross-Achse: </label>
                    <Select
                        value={alignItems}
                        onChange={(e) => setAlignItems(e.target.value)}
                        options={["normal", "flex-start", "center", "flex-end", "strech", "baseline"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Umbrechen: </label>
                    <Select
                        value={wrap}
                        onChange={(e) => setWrap(e.target.value)}
                        options={["nowrap", "wrap"]}
                    />
                </div>
                <div className={style.formControll}>
                    <Slider
                        sliderText="Wachsen:"
                        value={grow}
                        setValue={setGrow}
                        minVal={0}
                        maxVal={5} />
                </div>
                <div className={style.formControll}>
                    <Slider
                        sliderText="Schrumpfen:"
                        value={shrink}
                        setValue={setShrink}
                        minVal={0}
                        maxVal={5} />
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
