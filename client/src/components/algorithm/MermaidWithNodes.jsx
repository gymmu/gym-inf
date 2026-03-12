import { useEffect, useRef, useState } from "react"
import styles from "./MermaidDark.module.css"

export default function MermaidWithNodes({
  chart,
  id,
  highlightNode = null,
  nodeMap = {},
}) {
  const containerRef = useRef(null)
  const [svg, setSvg] = useState("")
  const [error, setError] = useState(null)
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

  useEffect(() => {
    if (!chart || !mermaidReady || !window.mermaid) return

    const renderChart = async () => {
      try {
        window.mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
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
          look: "classic",
        })

        const uniqueId =
          id || `mermaid-nodes-${Math.random().toString(36).substr(2, 9)}`

        setSvg("")
        setError(null)

        const { svg: renderedSvg } = await window.mermaid.render(
          uniqueId,
          chart,
        )

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
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.03); }
          }
          [data-highlighted="true"] {
            stroke: #fb4934 !important;
            stroke-width: 6px !important;
            filter: drop-shadow(0 0 12px rgba(251, 73, 52, 1)) !important;
            animation: pulse 1s ease-in-out infinite !important;
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
  }, [chart, id, mermaidReady])

  // Apply highlighting when highlightNode changes
  useEffect(() => {
    if (!containerRef.current || !highlightNode || !svg) {
      return
    }

    const applyHighlight = () => {
      const svgElement = containerRef.current?.querySelector("svg")
      
      if (!svgElement) {
        console.log("⏳ SVG not in DOM yet, waiting...")
        return
      }
      
      console.log("🔍 Looking for node:", highlightNode)

      // Remove all previous highlights
      const shapesToReset = svgElement.querySelectorAll(
        "rect, circle, ellipse, polygon, path",
      )
      shapesToReset.forEach((el) => {
        el.removeAttribute('data-highlighted')
        el.style.removeProperty('stroke')
        el.style.removeProperty('stroke-width')
        el.style.removeProperty('filter')
        el.style.removeProperty('animation')
      })

      // Mermaid uses foreignObject for labels when htmlLabels is true
      const allForeignObjects = svgElement.querySelectorAll("foreignObject")
      console.log("📝 ForeignObject elements found:", allForeignObjects.length)
      console.log("📍 Looking for:", highlightNode)
      
      let found = false
      const normalizedHighlight = highlightNode.replace(/\s+/g, ' ').trim()
      
      allForeignObjects.forEach((fo, index) => {
        const textContent = fo.textContent?.trim() || ""
        
        // Skip empty foreignObjects (used for edges/arrows)
        if (!textContent) return
        
        if (index < 15) console.log(`  FO ${index}: "${textContent}"`)
        
        const normalizedText = textContent.replace(/\s+/g, ' ').trim()

        const isMatch = 
          normalizedText === normalizedHighlight ||
          (normalizedText.length > 0 && normalizedText.includes(normalizedHighlight)) || 
          (normalizedHighlight.length > 0 && normalizedHighlight.includes(normalizedText))

        if (isMatch) {
          found = true
          console.log("✅ MATCH found at FO", index, ":", normalizedText)
          
          // Get ALL parent <g> elements up the tree
          let currentParent = fo.parentElement
          let attempts = 0
          
          while (currentParent && currentParent !== svgElement && attempts < 5) {
            // Look for shapes in this parent or siblings
            const shapesInParent = currentParent.querySelectorAll("rect, circle, ellipse, polygon, path")
            
            if (shapesInParent.length > 0) {
              console.log(`✅ Found ${shapesInParent.length} shapes in parent at level ${attempts}`)
              
              shapesInParent.forEach((shape) => {
                // Check if shape is not inside a foreignObject
                if (!shape.closest('foreignObject')) {
                  console.log(`  🎨 Highlighting ${shape.tagName}`)
                  console.log(`  Shape element:`, shape)
                  console.log(`  Before - stroke:`, shape.getAttribute('stroke'), 'fill:', shape.getAttribute('fill'))
                  console.log(`  Has class:`, shape.className)
                  
                  // NUCLEAR OPTION: Set EVERYTHING
                  shape.setAttribute('stroke', 'red')
                  shape.setAttribute('stroke-width', '20')
                  shape.setAttribute('fill', 'yellow')
                  shape.setAttribute('opacity', '1')
                  shape.setAttribute('data-highlighted', 'true')
                  
                  shape.style.stroke = 'red'
                  shape.style.strokeWidth = '20px'
                  shape.style.fill = 'yellow'
                  shape.style.opacity = '1'
                  
                  // Force repaint
                  shape.style.display = 'none'
                  setTimeout(() => {
                    shape.style.display = ''
                  }, 10)
                  
                  console.log(`  After - stroke attr:`, shape.getAttribute('stroke'))
                  console.log(`  After - style.stroke:`, shape.style.stroke)
                  console.log(`  Computed style:`, window.getComputedStyle(shape).stroke)
                }
              })
              break
            }
            
            currentParent = currentParent.parentElement
            attempts++
          }
        }
      })
      
      if (!found) {
        console.warn("❌ No match for:", highlightNode)
      }
    }

    // Apply immediately if SVG is ready, otherwise wait
    const svgEl = containerRef.current?.querySelector("svg")
    if (svgEl && svgEl.querySelectorAll("foreignObject").length > 0) {
      console.log("✅ SVG ready, applying highlight immediately")
      applyHighlight()
    } else {
      console.log("⏳ SVG not ready, waiting...")
      const timer = setTimeout(() => {
        if (containerRef.current?.querySelector("svg")) {
          applyHighlight()
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [highlightNode, svg, nodeMap])

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <strong>Fehler beim Rendern des Diagramms:</strong>
        <pre>{error}</pre>
      </div>
    )
  }

  // Set innerHTML manually to ensure proper rendering
  useEffect(() => {
    if (containerRef.current && svg) {
      containerRef.current.innerHTML = svg
      console.log("✅ SVG inserted into DOM")
      
      // Debug: Check what's actually in the DOM
      const svgEl = containerRef.current.querySelector("svg")
      console.log("SVG element:", svgEl)
      if (svgEl) {
        const texts = svgEl.querySelectorAll("text, tspan")
        const foreignObjects = svgEl.querySelectorAll("foreignObject")
        const divs = svgEl.querySelectorAll("div")
        const spans = svgEl.querySelectorAll("span")
        
        console.log("Text elements:", texts.length)
        console.log("ForeignObjects:", foreignObjects.length)
        console.log("Divs:", divs.length)
        console.log("Spans:", spans.length)
        
        // Check foreignObject content
        foreignObjects.forEach((fo, i) => {
          if (i < 5) console.log(`  FO ${i}: "${fo.textContent?.trim()}"`)
        })
      }
    }
  }, [svg])

  return (
    <div
      ref={containerRef}
      className={styles.mermaidContainer}
    />
  )
}
