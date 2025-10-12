import mermaid from "mermaid"
import { useEffect } from "react"

export default function Mermaid({ children }) {
  useEffect(() => {
    mermaid.initialize({ securityLevel: "loose", theme: "base" })
  }, [])
  return <pre className="mermaid">{children}</pre>
}
