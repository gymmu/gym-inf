import { useEffect } from "react"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function BoxModel({ children }) {
  const [bgColor, setBgColor] = useState("blue")
  const [codeString, setCodeString] = useState("")

  useEffect(() => {
    setCodeString(`.box {
        background-color: ${bgColor};
        color: black;
      }
      `)
  }, [bgColor])

  return (
    <>
      <input
        type="text"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
      <SyntaxHighlighter language="css" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}

function Updater({ children }) {
  return <span>{children}</span>
}
