import mermaid from "mermaid"
import { useEffect } from "react"

export default function Mermaid({ children }) {
  useEffect(() => {
    mermaid.initialize({ securityLevel: "loose", theme: "dark" })
  }, [])
  return <pre className="mermaid">{children}</pre>
}
