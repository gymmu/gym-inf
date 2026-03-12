// Mock for Remotion Player during SSR
import React from "react"

// Mock Player component for SSR
export const Player = React.forwardRef(({ component, inputProps, ...props }, ref) => {
  return React.createElement(
    "div",
    {
      ref,
      className: "remotion-player-placeholder",
      style: {
        width: props.style?.width || "100%",
        maxWidth: props.style?.maxWidth || "800px",
        height: "400px",
        background: "#282828",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid #504945",
        color: "#ebdbb2",
      },
    },
    "Animation wird im Browser geladen..."
  )
})

Player.displayName = "Player"

export default { Player }
