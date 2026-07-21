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
  const [headerArea, setHeaderArea] = useState("header")
  const [asideArea, setAsideArea] = useState("aside")
  const [mainArea, setMainArea] = useState("main")
  const [footerArea, setFooterArea] = useState("footer")
  
  const htmlString = `<div class="grid-wrapper">
    <header style="grid-area: ${headerArea}">header</header>
    <aside style="grid-area: ${asideArea}">aside</aside>
    <main style="grid-area: ${mainArea}">main</main>
    <footer style="grid-area: ${footerArea}">footer</footer>
</div>`

  useEffect(() => {
    const newCSS = `.grid-wrapper {
    display: grid;
    height: 82vh;
    grid-template-columns: 20% 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "aside main"
        "footer footer";
}`
    handleCodeUpdate(newCSS)

  }, [headerArea, asideArea, mainArea, footerArea])

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
.grid-wrapper > * {
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
}</style>
</html>`)

    }

    return (
        <div className={style.gridContainer}>
            <div style={{gridArea: "controlls"}} className={style.controlls}>
                <h3>Kontrollelemente</h3>
                <div className={style.formControll}>
                    <label>Header Platzierung: </label>
                    <Select
                        value={headerArea}
                        onChange={(e) => setHeaderArea(e.target.value)}
                        options={["header", "aside", "main", "footer"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Aside Platzierung: </label>
                    <Select
                        value={asideArea}
                        onChange={(e) => setAsideArea(e.target.value)}
                        options={["header", "aside", "main", "footer"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Main Platzierung: </label>
                    <Select
                        value={mainArea}
                        onChange={(e) => setMainArea(e.target.value)}
                        options={["header", "aside", "main", "footer"]}
                    />
                </div>
                <div className={style.formControll}>
                    <label>Footer Platzierung: </label>
                    <Select
                        value={footerArea}
                        onChange={(e) => setFooterArea(e.target.value)}
                        options={["header", "aside", "main", "footer"]}
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
