import { useState } from "react"
import Checkbox from "@components/Checkbox.jsx"
import styles from "@components/SVGComponent.module.css"

export default function SVGComponent({ width = "100%", children }) {
  const [showPattern, setShowPattern] = useState(false)
  const [backgroundWhite, setBackgroundWhite] = useState(false)
  const [maxwidth, setMaxwidth] = useState(false)
  const [showBorder, setShowBorder] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer} >
        <div className={styles.optionsContainer}>
        <Checkbox labelText="Gitter anzeigen" toggle={showPattern} setToggle={setShowPattern}/>
        <Checkbox labelText="Hintergrund weiss" toggle={backgroundWhite} setToggle={setBackgroundWhite} />
        <Checkbox labelText="Rand anzeigen" toggle={showBorder} setToggle={setShowBorder} />
        <Checkbox labelText="Maximale Breite" toggle={maxwidth} setToggle={setMaxwidth} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexGrow: 1
        }}>
        <svg
          className={showBorder ? styles.border : ""}
          role="img"
          viewBox="0 0 300.5 300.5"
          xmlns="http://www.w3.org/2000/svg"
          width={maxwidth ? "100%" : width}>
          <title>SVG Image</title>
          <defs>
            <pattern
              id="smallGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="gray"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="url(#smallGrid)" />
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="gray"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          {backgroundWhite && <rect width="100%" height="100%" fill="white" />}
          {showPattern && <rect width="100%" height="100%" fill="url(#grid)" />}
          {children}
        </svg>
      </div>
      </div>
    </div>
  )
}
