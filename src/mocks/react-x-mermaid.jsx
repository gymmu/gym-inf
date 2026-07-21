// Mock for react-x-mermaid during SSR
import React from "react"

// Mock RenderMermaid component for SSR
const RenderMermaid = ({ mermaidCode, mermaidConfig, ...props }) => {
  return React.createElement(
    "div",
    {
      className: "mermaid-placeholder",
      style: {
        background: "#f5f5f5",
        padding: "2em",
        borderRadius: "4px",
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
      },
    },
    mermaidCode,
  )
}

// Mock default export
export default RenderMermaid
