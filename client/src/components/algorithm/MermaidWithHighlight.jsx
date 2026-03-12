import { useEffect, useRef, useState } from "react"
import styles from "./MermaidDark.module.css"

export default function MermaidWithHighlight({
  chart,
  id,
  highlightNode = null,
}) {
  const containerRef = useRef(null)
  const [svgReady, setSvgReady] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // Render Mermaid once
  useEffect(() => {
    if (!chart || !containerRef.current) return

    const renderChart = async () => {
      try {
        // Use window.mermaid (CDN)
        const mermaidInstance = typeof window !== "undefined" && window.mermaid
        
        if (!mermaidInstance) {
          // Wait for mermaid to load from CDN
          setTimeout(renderChart, 100)
          return
        }
        
        // Initialize mermaid with Gruvbox dark theme
        mermaidInstance.initialize({
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
            fontSize: "20px",
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
            htmlLabels: true,
            useMaxWidth: true,
            curve: "basis",
          },
          look: "handDrawn",
        })
        
        const uniqueId = id || `mermaid-${Date.now()}`
        
        const { svg } = await mermaidInstance.render(uniqueId, chart)
        
        // Inject CSS for highlighting and fonts
        const styleTag = `<style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
          text, tspan {
            font-family: "Kalam", "Comic Sans MS", cursive !important;
            font-size: 20px !important;
          }
          .highlight-overlay {
            fill: none !important;
            stroke: #fb4934 !important;
            stroke-width: 8px !important;
            filter: drop-shadow(0 0 15px rgba(251, 73, 52, 1)) !important;
            animation: pulse 1s ease-in-out infinite !important;
            pointer-events: none !important;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        </style>`
        
        const modifiedSvg = svg.replace('<svg', styleTag + '<svg')
        containerRef.current.innerHTML = modifiedSvg
        setSvgReady(true)
      } catch (err) {
        console.error("Mermaid render error:", err)
      }
    }

    renderChart()
  }, [chart, id])

  // Apply highlighting when highlightNode changes
  useEffect(() => {
    if (!svgReady || !containerRef.current) return

    const svg = containerRef.current.querySelector("svg")
    if (!svg) return

    // Remove previous overlays
    svg.querySelectorAll("[data-overlay='true']").forEach(el => el.remove())
    
    // If no highlightNode, just clear and return
    if (!highlightNode) return
    
    console.log("🔍 Highlighting node:", highlightNode)

    // Find foreignObjects
    const allForeignObjects = svg.querySelectorAll("foreignObject")
    
    console.log("📊 Total foreignObjects found:", allForeignObjects.length)
    
    // First pass: find ALL potential matches
    const potentialMatches = []
    
    allForeignObjects.forEach((fo, index) => {
      const content = fo.textContent?.trim() || ""
      if (!content) return
      
      // Normalize both for comparison (handle line breaks, multiple spaces)
      const contentNorm = content
        .replace(/[\n\r]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[?!.:,;]+$/, '')
        .trim()
      
      const highlightNorm = highlightNode
        .replace(/[\n\r]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[?!.:,;]+$/, '')
        .trim()
      
      if (content === highlightNode || 
          contentNorm === highlightNorm ||
          content.replace(/\s+/g, ' ').trim() === highlightNode) {
        potentialMatches.push({ fo, content, index })
        console.log("✅ Match found:", content)
      }
    })
    
    console.log("🎯 Total matches:", potentialMatches.length)
    
    // Use only the FIRST match
    if (potentialMatches.length > 0) {
      const { fo } = potentialMatches[0]
      console.log("🎨 Creating highlight overlay for first match")
      
      // Found match, find parent shapes
      let parent = fo.parentElement
      let attempts = 0
      let overlayCreated = false
      
      while (parent && parent.tagName !== "svg" && attempts < 5 && !overlayCreated) {
        const shapes = parent.querySelectorAll("rect, ellipse, circle, polygon, path")
        
        if (shapes.length > 0) {
          // Find largest shape
          let largestShape = null
          let largestArea = 0
          
          shapes.forEach(shape => {
            const bbox = shape.getBBox()
            const area = bbox.width * bbox.height
            
            if (area > largestArea) {
              largestArea = area
              largestShape = shape
            }
          })
          
          if (largestShape && largestArea > 0) {
            try {
              // Get screen coordinates and convert to SVG coordinates
              const screenBBox = largestShape.getBoundingClientRect()
              const svgScreenCTM = svg.getScreenCTM()
              
              if (svgScreenCTM) {
                // Convert top-left corner
                const topLeft = svg.createSVGPoint()
                topLeft.x = screenBBox.left
                topLeft.y = screenBBox.top
                const svgTopLeft = topLeft.matrixTransform(svgScreenCTM.inverse())
                
                // Convert bottom-right corner
                const bottomRight = svg.createSVGPoint()
                bottomRight.x = screenBBox.right
                bottomRight.y = screenBBox.bottom
                const svgBottomRight = bottomRight.matrixTransform(svgScreenCTM.inverse())
                
                const x = svgTopLeft.x
                const y = svgTopLeft.y
                const width = Math.abs(svgBottomRight.x - svgTopLeft.x)
                const height = Math.abs(svgBottomRight.y - svgTopLeft.y)
                
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
                overlayCreated = true
              }
            } catch (err) {
              // Silently fail
            }
          }
        }
        
        parent = parent.parentElement
        attempts++
      }
    }
  }, [svgReady, highlightNode])

  // Mouse handlers for pan
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add wheel event listener with { passive: false } to allow preventDefault
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      // Always prevent page scroll when hovering over chart
      e.preventDefault()
      e.stopPropagation()
      
      // Only zoom with Ctrl/Cmd key pressed
      if (e.ctrlKey || e.metaKey) {
        const delta = e.deltaY > 0 ? 0.9 : 1.1
        setZoom((prev) => Math.max(0.5, Math.min(3, prev * delta)))
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  const resetView = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      height: "100%",
      overflow: "hidden",
      borderRadius: "8px"
    }}>
      {/* Zoom Controls - Kompakter */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 10,
          display: "flex",
          gap: "4px",
          backgroundColor: "rgba(60, 56, 54, 0.95)",
          padding: "4px",
          borderRadius: "6px",
          border: "1px solid var(--color-gray)",
        }}>
        <button
          onClick={() => setZoom((z) => Math.min(3, z * 1.2))}
          title="Zoom in"
          style={{
            padding: "6px 10px",
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}>
          +
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(0.5, z * 0.8))}
          title="Zoom out"
          style={{
            padding: "6px 10px",
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}>
          −
        </button>
        <button
          onClick={resetView}
          title="Zurücksetzen"
          style={{
            padding: "6px 10px",
            backgroundColor: "var(--color-purple)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}>
          ↺
        </button>
        <div
          style={{
            padding: "6px 10px",
            backgroundColor: "transparent",
            color: "var(--color-yellow)",
            fontSize: "13px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}>
          {Math.round(zoom * 100)}%
        </div>
      </div>



      <div
        ref={containerRef}
        className={styles.mermaidContainer}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          position: "relative",
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: "center center",
          transition: isDragging ? "none" : "transform 0.1s ease-out",
          userSelect: "none",
        }}
      />
    </div>
  )
}
