import { useEffect, useState } from "react"
import Editor from "@components/Editor.jsx"

import styles from "@components/CodePen.module.css"

export default function CodePenSVG({
  initialCode = `<svg viewBox="0 0 500 500" width="300">
    <circle cx="250" cy="250" r="150" fill="#CB6400" />
</svg>`,
  withCSS = false,
}) {
  const [svg, setSvg] = useState(initialCode)
  const [css, setCss] = useState(`svg {
  background: white;
}
`)
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${svg}</body>
          <style>${css}</style>
          <style>body { margin: 0; padding: 0; overflow: hidden;}</style>
        </html>
      `)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [svg, css])

  return (
    <div className={styles.codePenWrapper}>
      <div className={`${styles.pane} ${styles.paneLeft}`}>
        <Editor title="SVG" language="html" handleChange={setSvg} value={svg} />
        {withCSS && (
          <Editor
            title="CSS"
            language="css"
            value={css}
            handleChange={setCss}
          />
        )}
      </div>
      <div className={`${styles.pane} ${styles.outputPane}`}>
        <h2>Result</h2>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="300px"
          width="300px"
        />
      </div>
    </div>
  )
}
