import { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"
import styles from "./MermaidDark.module.css"

// Initialize mermaid with Gruvbox dark theme
mermaid.initialize({
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
    htmlLabels: true,
    useMaxWidth: true,
    curve: "basis",
  },
  look: "handDrawn",
})

export default function MermaidWithHighlight({
  chart,
  id,
  highlightNode = null,
}) {
  const containerRef = useRef(null)
  const [svgReady, setSvgReady] = useState(false)

  // Render Mermaid once
  useEffect(() => {
    if (!chart || !containerRef.current) return

    const renderChart = async () => {
      try {
        const uniqueId = id || `mermaid-${Date.now()}`
        
        const { svg } = await mermaid.render(uniqueId, chart)
        
        // Inject CSS for highlighting and fonts
        const styleTag = `<style>
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
          text, tspan {
            font-family: "Kalam", "Comic Sans MS", cursive !important;
            font-size: 18px !important;
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
    if (!svgReady || !containerRef.current || !highlightNode) return

    const svg = containerRef.current.querySelector("svg")
    if (!svg) return

    // Remove previous overlays
    svg.querySelectorAll("[data-overlay='true']").forEach(el => el.remove())

    // Find foreignObjects
    const allForeignObjects = svg.querySelectorAll("foreignObject")
    
    // First pass: find ALL potential matches
    const potentialMatches = []
    
    allForeignObjects.forEach((fo, index) => {
      const content = fo.textContent?.trim() || ""
      if (!content) return
      
      // Match with or without trailing punctuation
      const contentClean = content.replace(/[?!.:,;]+$/, '').trim()
      const nodeNameClean = highlightNode.replace(/[?!.:,;]+$/, '').trim()
      
      if (content === highlightNode || contentClean === nodeNameClean) {
        potentialMatches.push({ fo, content, index })
      }
    })
    
    console.log(`🔍 Searching for: "${highlightNode}", found ${potentialMatches.length} matches`)
    
    // Use only the FIRST match
    if (potentialMatches.length > 0) {
      const { fo, content, index } = potentialMatches[0]
      console.log(`✅ Using first match at FO ${index}: "${content}"`)
      
      // Found match, find parent shapes
      let parent = fo.parentElement
      let attempts = 0
        
        while (parent && parent.tagName !== "svg" && attempts < 5) {
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
            
            if (!largestShape || largestArea === 0) {
              parent = parent.parentElement
              attempts++
              continue
            }
            
            try {
              // Use the transformed bounding box directly
              const bbox = largestShape.getBBox()
              const ctm = largestShape.getCTM()
              
              if (!ctm) {
                parent = parent.parentElement
                attempts++
                continue
              }
              
              // Get the bounding box in USER space (after all transforms)
              // This is more reliable than manual transformation
              const svgRect = svg.createSVGRect()
              svgRect.x = bbox.x
              svgRect.y = bbox.y
              svgRect.width = bbox.width
              svgRect.height = bbox.height
              
              // Get bounding box of the transformed rectangle
              const transformedBBox = svgRect
              
              // Get screen coordinates and convert to SVG coordinates
              const screenBBox = largestShape.getBoundingClientRect()
              const svgScreenCTM = svg.getScreenCTM()
              
              if (!svgScreenCTM) {
                parent = parent.parentElement
                attempts++
                continue
              }
              
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
              
              console.log(`  Screen: x=${screenBBox.left}, y=${screenBBox.top}, w=${screenBBox.width}, h=${screenBBox.height}`)
              console.log(`  SVG coords: x=${x.toFixed(1)}, y=${y.toFixed(1)}, w=${width.toFixed(1)}, h=${height.toFixed(1)}`)
              
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
              
              console.log(`  ✅ Overlay created`)
            } catch (err) {
              console.error("Error creating overlay:", err)
            }
            break
          }
          
        parent = parent.parentElement
        attempts++
      }
    } else {
      console.log(`❌ No exact match found for: "${highlightNode}"`)
    }
  }, [svgReady, highlightNode])

  return <div ref={containerRef} className={styles.mermaidContainer} />
}
