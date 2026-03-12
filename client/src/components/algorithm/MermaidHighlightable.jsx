import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import styles from "./MermaidHighlightable.module.css"

// Simple mermaid config without handDrawn
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    fontSize: "18px",
    fontFamily: '"Kalam", "Comic Sans MS", cursive',
  },
  securityLevel: "loose",
  flowchart: {
    useMaxWidth: true,
    htmlLabels: false, // Use SVG text instead of HTML
    curve: "basis",
  },
})

export default function MermaidHighlightable({
  chart,
  id,
  highlightNode = null,
}) {
  const containerRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  // Render chart once
  useEffect(() => {
    if (!chart || !containerRef.current) return

    const renderChart = async () => {
      try {
        const uniqueId = id || `mermaid-${Date.now()}`
        const { svg } = await mermaid.render(uniqueId, chart)
        
        containerRef.current.innerHTML = svg
        setIsReady(true)
        console.log("✅ Mermaid chart rendered")
      } catch (err) {
        console.error("Mermaid error:", err)
      }
    }

    renderChart()
  }, [chart, id])

  // Apply highlighting when node changes
  useEffect(() => {
    if (!isReady || !containerRef.current || !highlightNode) return

    const svg = containerRef.current.querySelector("svg")
    if (!svg) return

    console.log("🔍 Highlighting:", highlightNode)

    // Remove previous highlights
    svg.querySelectorAll("[data-highlight]").forEach((el) => {
      el.removeAttribute("data-highlight")
    })

    // Find all text elements (SVG text, not HTML)
    const texts = svg.querySelectorAll("text")
    console.log("Found text elements:", texts.length)

    texts.forEach((text, i) => {
      const content = text.textContent?.trim() || ""
      if (i < 10) console.log(`  Text ${i}:`, content)

      if (content.includes(highlightNode) || highlightNode.includes(content)) {
        console.log("✅ Match:", content)

        // Find parent g element
        let parent = text.parentElement
        while (parent && parent.tagName !== "g") {
          parent = parent.parentElement
        }

        if (parent) {
          const shapes = parent.querySelectorAll("rect, polygon, ellipse, path")
          shapes.forEach((shape) => {
            shape.setAttribute("data-highlight", "true")
            console.log("✅ Highlighted shape:", shape.tagName)
          })
        }
      }
    })
  }, [isReady, highlightNode])

  return <div ref={containerRef} className={styles.container} />
}
