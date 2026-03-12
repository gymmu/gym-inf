import { useState, useRef, useEffect } from "react"
import mermaid from "mermaid"

export default function MermaidTest() {
  const [highlightTarget, setHighlightTarget] = useState(null)
  const containerRef = useRef(null)
  const [svgReady, setSvgReady] = useState(false)

  const testChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Eingabe]
    Input --> Check{Prüfung?}
    Check -->|Ja| Action1[Aktion A]
    Check -->|Nein| Action2[Aktion B]
    Action1 --> End([Ende])
    Action2 --> End
  `

  // Render Mermaid
  useEffect(() => {
    if (!containerRef.current) return

    const renderChart = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          flowchart: {
            htmlLabels: true, // Use HTML labels (foreignObject)
          },
        })

        const { svg } = await mermaid.render("test-chart", testChart)
        
        // Inject custom CSS directly into SVG
        const styleTag = `<style>
          .highlight-node {
            stroke: #ff0000 !important;
            stroke-width: 15px !important;
            fill: #ffff00 !important;
            opacity: 1 !important;
          }
          .highlight-overlay {
            fill: none !important;
            stroke: #fb4934 !important;
            stroke-width: 8px !important;
            filter: drop-shadow(0 0 20px rgba(251, 73, 52, 1)) !important;
            animation: pulse 1s ease-in-out infinite !important;
            pointer-events: none !important;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
        </style>`
        
        const modifiedSvg = svg.replace('<svg', styleTag + '<svg')
        containerRef.current.innerHTML = modifiedSvg
        setSvgReady(true)
        console.log("✅ Chart rendered")
      } catch (err) {
        console.error("Error:", err)
      }
    }

    renderChart()
  }, [])

  // Apply highlighting
  const highlightNode = (nodeName) => {
    setHighlightTarget(nodeName)

    if (!containerRef.current) return

    const svg = containerRef.current.querySelector("svg")
    if (!svg) return

    console.log("🔍 Highlighting:", nodeName)

    // Remove all previous overlays
    svg.querySelectorAll("[data-overlay='true']").forEach(el => el.remove())

    // Find ALL foreignObjects (for htmlLabels: true)
    const allForeignObjects = svg.querySelectorAll("foreignObject")
    console.log("Total foreignObjects:", allForeignObjects.length)

    allForeignObjects.forEach((fo, index) => {
      const content = fo.textContent?.trim() || ""
      if (content) console.log(`FO ${index}: "${content}"`)

      // Match with or without trailing punctuation
      const contentClean = content.replace(/[?!.:,;]+$/, '').trim()
      const nodeNameClean = nodeName.replace(/[?!.:,;]+$/, '').trim()
      
      if (content === nodeName || contentClean === nodeNameClean || content.startsWith(nodeName)) {
        console.log("✅✅✅ MATCH at FO", index, `"${content}" matches "${nodeName}"`)
        
        // Find the parent group
        let parent = fo.parentElement
        let attempts = 0
        
        while (parent && parent.tagName !== "svg" && attempts < 5) {
          // Look for ALL shapes in this parent (including nested)
          const shapes = parent.querySelectorAll("rect, ellipse, circle, polygon, path")
          
          console.log(`  Checking parent ${attempts}, found ${shapes.length} shapes total`)
          
          if (shapes.length > 0) {
            // Find the shape with the largest area
            let largestShape = null
            let largestArea = 0
            
            shapes.forEach(shape => {
              const bbox = shape.getBBox()
              const area = bbox.width * bbox.height
              if (area > 0) {
                console.log(`  Shape ${shape.tagName}: area=${area}`)
              }
              
              if (area > largestArea) {
                largestArea = area
                largestShape = shape
              }
            })
            
            if (!largestShape || largestArea === 0) {
              console.log(`  ❌ No shape with area > 0 at level ${attempts}, going up...`)
              parent = parent.parentElement
              attempts++
              continue
            }
            
            console.log(`  ✅ Using largest shape: ${largestShape.tagName} with area ${largestArea}`)
            
            try {
              const bbox = largestShape.getBBox()
              const ctm = largestShape.getCTM()
              
              if (!ctm) {
                console.log("  No CTM")
                parent = parent.parentElement
                attempts++
                continue
              }
              
              // Transform bbox to absolute SVG coordinates
              const x = bbox.x * ctm.a + bbox.y * ctm.c + ctm.e
              const y = bbox.x * ctm.b + bbox.y * ctm.d + ctm.f
              const width = bbox.width * Math.abs(ctm.a)
              const height = bbox.height * Math.abs(ctm.d)
              
              console.log(`  Final: (${x}, ${y}), size: ${width}x${height}`)
              
              // Create overlay
              const padding = 10
              const overlay = document.createElementNS("http://www.w3.org/2000/svg", "rect")
              overlay.setAttribute("x", x - padding)
              overlay.setAttribute("y", y - padding)
              overlay.setAttribute("width", width + padding * 2)
              overlay.setAttribute("height", height + padding * 2)
              overlay.setAttribute("rx", 10)
              overlay.classList.add("highlight-overlay")
              overlay.setAttribute("data-overlay", "true")
              
              svg.appendChild(overlay)
              
              console.log(`  ✅ Created overlay`)
            } catch (err) {
              console.error("  ❌ Error:", err)
            }
            break
          }
          
          parent = parent.parentElement
          attempts++
        }
      }
    })
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mermaid Highlighting Test</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => highlightNode("Start")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>
          Highlight "Start"
        </button>
        <button
          onClick={() => highlightNode("Eingabe")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>
          Highlight "Eingabe"
        </button>
        <button
          onClick={() => highlightNode("Prüfung")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>
          Highlight "Prüfung"
        </button>
        <button
          onClick={() => highlightNode("Aktion A")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}>
          Highlight "Aktion A"
        </button>
      </div>

      <div style={{ marginBottom: "20px", color: "var(--color-yellow)" }}>
        Current target: <strong>{highlightTarget || "None"}</strong>
      </div>

      <div
        ref={containerRef}
        style={{
          padding: "20px",
          backgroundColor: "var(--color-bg-light)",
          border: "1px solid var(--color-gray)",
          borderRadius: "8px",
        }}
      />

      <div style={{ marginTop: "20px", color: "var(--color-gray)" }}>
        <p>
          <strong>Öffnen Sie die Browser-Konsole (F12)</strong> um die
          Debug-Ausgaben zu sehen!
        </p>
        <p>Status: {svgReady ? "✅ SVG Ready" : "⏳ Loading..."}</p>
      </div>
    </div>
  )
}
