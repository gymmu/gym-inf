import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import styles from "./MermaidDark.module.css"

// Separate mermaid instance for algorithm visualizations
const algorithmMermaid = mermaid.mermaidAPI

// Initialize with dark theme optimized for algorithms
algorithmMermaid.initialize({
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

export default function MermaidDark({ chart, id, highlightNode = null }) {
  const containerRef = useRef(null)
  const [svg, setSvg] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!chart) return

    const renderChart = async () => {
      try {
        const uniqueId =
          id || `mermaid-dark-${Math.random().toString(36).substr(2, 9)}`

        setSvg("")
        setError(null)

        // Render the mermaid chart
        const { svg: renderedSvg } = await algorithmMermaid.render(
          uniqueId,
          chart,
        )

        // Add Kalam font and extra padding via simple string injection
        const fontStyle = `<style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap'); 
          text, tspan { 
            font-family: "Kalam", "Comic Sans MS", cursive !important; 
            font-size: 18px !important; 
            fill: #ebdbb2 !important;
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

  // Apply highlighting when highlightNode changes
  useEffect(() => {
    if (!containerRef.current || !highlightNode) return

    // Remove all previous highlights
    const allHighlighted = containerRef.current.querySelectorAll(
      `.${styles.highlight}`,
    )
    allHighlighted.forEach((el) => el.classList.remove(styles.highlight))

    // Add highlight to the specified node
    const node = containerRef.current.querySelector(`#${highlightNode}`)
    if (node) {
      node.classList.add(styles.highlight)
    }
  }, [highlightNode, svg])

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
