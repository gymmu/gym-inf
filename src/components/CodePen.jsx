import styles from "@components/CodePen.module.css"
import { useEffect } from "react"
import { useState } from "react"

export default function CodePen() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
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
        <Editor title="HTML" />
        <Editor title="CSS" />
        <Editor title="JS" />
      </div>
      <div className={styles.pane}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  )
}

function Editor(props) {
  const { title } = props
  return <h2>{title}</h2>
}
