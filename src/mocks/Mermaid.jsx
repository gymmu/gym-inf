// Mock for Mermaid component during SSR
import React from "react"

// Mock Mermaid component for SSR
const Mermaid = ({ chart, id, ...props }) => {
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
    chart,
  )
}

export default Mermaid
