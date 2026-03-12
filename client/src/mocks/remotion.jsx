// Mock for Remotion core during SSR
import React from "react"

// Mock useCurrentFrame hook
export const useCurrentFrame = () => 0

// Mock AbsoluteFill component
export const AbsoluteFill = ({ children, style }) => {
  return React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        ...style,
      },
    },
    children
  )
}

// Mock interpolate function
export const interpolate = (input, inputRange, outputRange) => {
  return outputRange[0]
}

// Mock other common Remotion exports
export const useVideoConfig = () => ({
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 100,
})

export const Sequence = ({ children }) => children

export default {
  useCurrentFrame,
  AbsoluteFill,
  interpolate,
  useVideoConfig,
  Sequence,
}
