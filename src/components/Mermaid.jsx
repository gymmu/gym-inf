import { useEffect, useRef, useState } from "react"
import styles from "./Mermaid.module.css"

// Get mermaid from window (loaded via CDN in index.html)
const getMermaid = () => {
  if (typeof window !== "undefined" && window.mermaid) {
    return window.mermaid
  }
  return null
}

// Initialize mermaid once
let initialized = false
const initializeMermaid = () => {
  if (initialized) return
  const mermaid = getMermaid()
  if (!mermaid) return
  
  mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
      // Dark theme colors (Gruvbox palette)
      primaryColor: "#3c3836",
      primaryTextColor: "#ebdbb2",
      primaryBorderColor: "#83a598",
      lineColor: "#fabd2f",
      secondaryColor: "#504945",
      tertiaryColor: "#665c54",
      textColor: "#ebdbb2",
      fontSize: "18px",
      fontFamily: '"Kalam", "Comic Sans MS", cursive',
      nodeBorder: "#83a598",
      mainBkg: "#3c3836",
      nodeTextColor: "#ebdbb2",
      arrowheadColor: "#fabd2f",
      edgeLabelBackground: "#282828",
      clusterBkg: "#504945",
      clusterBorder: "#83a598",
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
  initialized = true
}

export default function Mermaid({ chart, id }) {
  const containerRef = useRef(null)
  const [svg, setSvg] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!chart) return

    const renderChart = async () => {
      try {
        const mermaid = getMermaid()
        if (!mermaid) {
          setError("Mermaid lädt noch...")
          setTimeout(renderChart, 100)
          return
        }
        
        initializeMermaid()
        
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
