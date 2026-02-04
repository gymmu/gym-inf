// Mock for react-syntax-highlighter during SSR
import React from "react";

// Mock Prism component
export const Prism = ({ children, language, style, ...props }) => {
  return React.createElement(
    "pre",
    {
      className: `language-${language}`,
      style: { background: "#1e1e1e", padding: "1em", overflow: "auto" },
    },
    React.createElement("code", null, children),
  );
};

// Mock Light component
export const Light = Prism;

// Mock default export
export default Prism;

// Mock styles
export const dark = {};
export const gruvboxDark = {};
