import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import styles from "./Mermaid.module.css"

// Initialize mermaid with XKCD-style theme
mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    primaryColor: "#fff",
    primaryTextColor: "#333",
    primaryBorderColor: "#333",
    lineColor: "#333",
    fontSize: "18px",
    fontFamily: '"Kalam", "Comic Sans MS", cursive',
  },
  securityLevel: "loose",
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: "basis",
    padding: 15,
    rankSpacing: 30,
    nodeSpacing: 40,
  },
  look: "handDrawn",
})

export default function Mermaid({ chart, id }) {
  const containerRef = useRef(null)
  const [svg, setSvg] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!chart) return

    const renderChart = async () => {
      try {
        const uniqueId =
          id || `mermaid-${Math.random().toString(36).substr(2, 9)}`

        setSvg("")
        setError(null)

        // Render the mermaid chart
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart)

        // Add Kalam font and extra padding via simple string injection
        const fontStyle = `<style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap'); 
          text, tspan { 
            font-family: "Kalam", "Comic Sans MS", cursive !important; 
            font-size: 18px !important; 
          }
          .label { 
            padding: 5px 20px !important; 
          }
          foreignObject { 
            overflow: visible !important; 
          }
        </style>`
        const styledSvg = renderedSvg.replace("<svg", fontStyle + "<svg")

        setSvg(styledSvg)
      } catch (err) {
        console.error("Mermaid rendering error:", err)
        setError(err.message || "Failed to render diagram")
      }
    }

    renderChart()
  }, [chart, id])

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <strong>Fehler beim Rendern des Diagramms:</strong>
        <pre>{error}</pre>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={styles.mermaidContainer}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
