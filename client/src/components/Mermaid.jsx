import { useEffect, useRef, useState } from "react"

export default function Mermaid({ children }) {
  const elementRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [svg, setSvg] = useState("")

  useEffect(() => {
    let mounted = true

    // Dynamically import mermaid only when component is mounted
    import("mermaid")
      .then((mermaidModule) => {
        if (!mounted) return

        const mermaid = mermaidModule.default

        // Initialize mermaid
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "dark",
        })

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

        // Render the diagram
        mermaid
          .render(id, children)
          .then(({ svg: renderedSvg }) => {
            if (mounted) {
              setSvg(renderedSvg)
              setIsLoaded(true)
            }
          })
          .catch((error) => {
            console.error("Mermaid rendering error:", error)
            if (mounted) {
              setIsLoaded(true)
            }
          })
      })
      .catch((error) => {
        console.error("Failed to load mermaid:", error)
      })

    return () => {
      mounted = false
    }
  }, [children])

  if (!isLoaded) {
    return <pre className="mermaid">{children}</pre>
  }

  return (
    <div
      ref={elementRef}
      className="mermaid"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
