import { useEffect, useRef, useState } from "react"
import styles from "./MermaidHighlightable.module.css"

export default function MermaidHighlightable({
  chart,
  id,
  highlightNode = null,
}) {
  const containerRef = useRef(null)
  const [isReady, setIsReady] = useState(false)
  const [mermaidReady, setMermaidReady] = useState(false)

  // Wait for window.mermaid
  useEffect(() => {
    if (typeof window !== "undefined" && window.mermaid) {
      setMermaidReady(true)
    } else {
      const checkMermaid = setInterval(() => {
        if (typeof window !== "undefined" && window.mermaid) {
          setMermaidReady(true)
          clearInterval(checkMermaid)
        }
      }, 100)
      return () => clearInterval(checkMermaid)
    }
  }, [])

  // Render chart once
  useEffect(() => {
    if (!chart || !containerRef.current || !mermaidReady || !window.mermaid) return

    const renderChart = async () => {
      try {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            fontSize: "18px",
            fontFamily: '"Kalam", "Comic Sans MS", cursive',
          },
          securityLevel: "loose",
          flowchart: {
            useMaxWidth: true,
            htmlLabels: false,
            curve: "basis",
          },
        })

        const uniqueId = id || `mermaid-${Date.now()}`
        const { svg } = await window.mermaid.render(uniqueId, chart)
        
        containerRef.current.innerHTML = svg
        setIsReady(true)
        console.log("✅ Mermaid chart rendered")
      } catch (err) {
        console.error("Mermaid error:", err)
      }
    }

    renderChart()
  }, [chart, id, mermaidReady])

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
