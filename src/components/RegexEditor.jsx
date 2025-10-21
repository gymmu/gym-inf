import { useEffect } from "react"
import { useState } from "react"
import { Editor as MEditor } from "@monaco-editor/react"
import "crypto"

import styles from "@components/CodePen.module.css"

export default function RegexEditor() {
  const [regex, setRegex] = useState(`[0-9A-F][0-9A-F]`)
  const [output, setOutput] = useState("#00FF00")
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const matches = [...output.matchAll(regex)]
      setMatches([...matches])
      matches.forEach((elem) => {
        console.log(elem)
      })
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [regex, output])

  return (
    <div className={`${styles.codePenWrapper} full-width`}>
      <div className={`${styles.pane} ${styles.paneLeft}`}>
        <Editor
          title="Regex"
          language="text"
          handleChange={setRegex}
          value={regex}
        />
      </div>
      <div className={styles.pane}>
        <input
          type="text"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
        <div>
          <h3>Erkannte Teile</h3>
          <Highlight matches={matches} output={output} />
        </div>
        <div>
          <h3>Matches</h3>
          <div>
            {matches.map((match) => {
              return <Match key={crypto.randomUUID()} elem={match} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function Match({ elem }) {
  const { index } = elem
  return (
    <div>
      {index}: {elem}
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

function Highlight({ matches, output }) {
  // Gehe durch den Output und markiere alle Teile die matches getroffen werden. Der Rest wird ohne Highlights eingefügt.
  return (
    <div>
      {matches?.map((match) => (
        <span key={crypto.randomUUID()} className={styles.mark}>
          {match}
        </span>
      ))}
    </div>
  )
}
