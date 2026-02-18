import { useEffect } from "react"
import { useState } from "react"
import { Editor as MEditor } from "@monaco-editor/react"

import styles from "@components/CodePen.module.css"

export default function CodePen() {
  const [html, setHtml] = useState(`<header>
  <h1>Hello World!</h1>
</header>`)
  const [css, setCss] = useState(`body {
  color: white;
}
`)
  const [js, setJs] = useState("document.body.style.backgroundColor = 'green'")
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [html, css, js])

  return (
    <div className={styles.codePenWrapper}>
      <div className={`${styles.pane} ${styles.paneLeft}`}>
        <Editor
          title="HTML"
          language="html"
          handleChange={setHtml}
          value={html}
        />
        <Editor title="CSS" language="css" value={css} handleChange={setCss} />
        <Editor
          title="JS"
          language="javascript"
          value={js}
          handleChange={setJs}
        />
      </div>
      <div className={styles.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  )
}

function Editor(props) {
  const { title, language, value, handleChange } = props
  return (
    <div className={styles.editorWrapper}>
      <h2>{title}</h2>
      <MEditor
        defaultLanguage={language}
        value={value}
        theme="vs-dark"
        onChange={handleChange}
        height="300px"
      />
    </div>
  )
}
