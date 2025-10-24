import { useEffect } from "react"
import { useState } from "react"
import { Editor as MEditor } from "@monaco-editor/react"
import "crypto"

import styles from "@components/CodePen.module.css"

export default function RegexEditor({
  defaultInput = "#00FF00",
  defaultRegex = "[0-9A-F][0-9A-F]",
}) {
  const [regex, setRegex] = useState(defaultRegex)
  const [output, setOutput] = useState(defaultInput)
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        const matches = [...output.matchAll(regex)]
        setMatches([...matches])
        matches.forEach((elem) => {
          console.log(elem)
        })
      } catch {
        console.error(
          "There is an error in the regular expression that is parsed. This is expected behavior, so do not panic!!!",
        )
      }
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [regex, output])

  return (
    <div className={`${styles.codePenWrapper} full-width`}>
      <div className={`${styles.pane} ${styles.paneLeft}`}>
        <h3>Eingabe Text</h3>
        <input
          type="text"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
        <Editor
          title="Regex"
          language="text"
          handleChange={setRegex}
          value={regex}
        />
      </div>
      <div className={styles.pane}>
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
  const [res, setResult] = useState([])
  // Gehe durch den Output und markiere alle Teile die matches getroffen werden. Der Rest wird ohne Highlights eingefügt.
  useEffect(() => {
    let currentIndex = 0
    const result = []
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i]
      if (currentIndex < match.index) {
        result.push({
          hl: false,
          content: output.substring(currentIndex, match.index),
        })
        currentIndex = match.index
        i--
      } else {
        result.push({
          hl: true,
          content: output.substring(match.index, match.index + match[0].length),
        })
        currentIndex += match[0].length
      }
    }
    setResult(result)
  }, [matches, output])

  return (
    <div>
      {res?.map((elem) => {
        return <Mark key={crypto.randomUUID()} elem={elem} />
      })}
    </div>
  )
}

function Mark({ elem }) {
  const { hl = true, content } = elem
  return (
    <span
      className={hl ? `${styles.markgroup} ${styles.mark}` : styles.markgroup}>
      {content}
    </span>
  )
}
