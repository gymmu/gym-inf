import { Editor as MEditor } from "@monaco-editor/react"
import styles from "@components/CodePen.module.css"

export default function Editor(props) {
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
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  )
}
