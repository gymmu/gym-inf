import { Player } from "@remotion/player"
import { useState, useEffect, useRef } from "react"
import style from "./SynchronizedAlgorithmPlayer.module.css"

export default function SynchronizedAlgorithmPlayer({
  component, // Remotion-Komponente
  inputProps, // Props für die Komponente
  mermaidComponent, // Spezielle Mermaid-Komponente mit Highlighting
  mermaidProps, // Props für Mermaid (chart, nodeMap, etc.)
  totalSteps, // Gesamtanzahl Schritte
  fps = 30,
  width = 800,
  height = 400,
}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const playerRef = useRef(null)
  const framesPerStep = Math.floor(fps / 2) // 2 Schritte pro Sekunde
  const durationInFrames = totalSteps * framesPerStep

  // Listen to frame updates from Player
  useEffect(() => {
    const { current } = playerRef
    if (!current) {
      return
    }

    const onFrameUpdate = (event) => {
      const frame = event.detail.frame
      setCurrentFrame(frame)
      const step = Math.floor(frame / framesPerStep)
      if (step !== currentStep) {
        console.log("📍 Step changed:", currentStep, "→", step, "Frame:", frame)
        setCurrentStep(step)
      }
    }

    current.addEventListener('frameupdate', onFrameUpdate)

    return () => {
      current.removeEventListener('frameupdate', onFrameUpdate)
    }
  }, [currentStep, framesPerStep])

  // Erstelle Mermaid-Komponente mit aktuellem Node
  const MermaidComponent = mermaidComponent
  const currentNodeId = mermaidProps.getNodeId
    ? mermaidProps.getNodeId(currentStep)
    : null
  
  console.log("🎯 Render - Step:", currentStep, "Frame:", currentFrame, "Node:", currentNodeId)

  return (
    <div className={style.container}>
      <div className={style.splitView}>
        {/* Linke Seite: Mermaid Flussdiagramm mit Highlighting */}
        <div className={style.flowchartSide}>
          <h3 className={style.sideTitle}>Flussdiagramm</h3>
          <div className={style.flowchartContainer}>
            <MermaidComponent
              {...mermaidProps}
              highlightNode={currentNodeId}
              currentStep={currentStep}
            />
          </div>
          <div style={{ 
            textAlign: 'center', 
            marginTop: '10px', 
            color: 'var(--color-yellow)',
            fontSize: '14px'
          }}>
            Debug: Node = "{currentNodeId}"
          </div>
        </div>

        {/* Rechte Seite: Remotion Animation */}
        <div className={style.animationSide}>
          <h3 className={style.sideTitle}>Visualisierung</h3>
          <div className={style.playerContainer}>
            <Player
              ref={playerRef}
              component={component}
              inputProps={inputProps}
              durationInFrames={durationInFrames}
              compositionWidth={width}
              compositionHeight={height}
              fps={fps}
              controls={true}
              loop={false}
              style={{ width: "100%", maxWidth: `${width}px` }}
              playbackRate={1.0}
              showVolumeControls={false}
            />
          </div>
        </div>
      </div>

      {/* Schritt-Anzeige unten */}
      <div className={style.stepInfo}>
        Schritt {currentStep + 1} von {totalSteps}
        <span style={{ marginLeft: '20px', opacity: 0.7 }}>
          Frame: {currentFrame} / {durationInFrames}
        </span>
      </div>
    </div>
  )
}
