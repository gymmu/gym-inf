import { Player } from "@remotion/player"
import { useState, useEffect, useRef } from "react"
import MermaidWithHighlight from "@components/algorithm/MermaidWithHighlight"
import style from "./SimpleSplitView.module.css"

export default function SimpleSplitView({
  component, // Remotion-Komponente
  inputProps, // Props für die Komponente
  flowchart, // Mermaid-Chart String
  flowchartId, // ID für Mermaid
  totalSteps, // Gesamtanzahl Schritte
  stepDescriptions = [], // Array mit Beschreibungen für jeden Schritt
  getNodeId = null, // Funktion: step => nodeName für Highlighting
  fps = 30,
  width = 800,
  height = 400,
}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const playerRef = useRef(null)
  const framesPerStep = fps * 1.5 // 1.5 Sekunden pro Schritt (vorher 0.5 Sekunden)
  const durationInFrames = totalSteps * framesPerStep

  // Listen to frame updates
  useEffect(() => {
    const { current } = playerRef
    if (!current) return

    const onFrameUpdate = (event) => {
      const frame = event.detail.frame
      setCurrentFrame(frame)
      const step = Math.floor(frame / framesPerStep)
      setCurrentStep(step)
    }

    current.addEventListener("frameupdate", onFrameUpdate)
    return () => current.removeEventListener("frameupdate", onFrameUpdate)
  }, [framesPerStep])

  const currentDescription =
    stepDescriptions[currentStep] || "Algorithmus läuft..."
  
  const currentNodeId = getNodeId ? getNodeId(currentStep) : null

  // Manual step controls
  const goToStep = (step) => {
    const newStep = Math.max(0, Math.min(step, totalSteps - 1))
    setCurrentStep(newStep)
    const targetFrame = newStep * framesPerStep
    if (playerRef.current) {
      playerRef.current.seekTo(targetFrame)
    }
  }

  const nextStep = () => goToStep(currentStep + 1)
  const prevStep = () => goToStep(currentStep - 1)
  const reset = () => goToStep(0)

  return (
    <div className={style.container}>
      <div className={style.splitView}>
        {/* Linke Seite: Flussdiagramm mit Highlighting */}
        <div className={style.flowchartSide}>
          <h3 className={style.sideTitle}>Flussdiagramm</h3>
          <div className={style.flowchartContainer}>
            <MermaidWithHighlight 
              chart={flowchart} 
              id={flowchartId}
              highlightNode={currentNodeId}
            />
          </div>
        </div>

        {/* Rechte Seite: Animation */}
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
          
          {/* Schritt-Beschreibung direkt unter dem Player */}
          <div className={style.stepDescription}>
            <strong>Aktueller Schritt:</strong> {currentDescription}
          </div>
        </div>
      </div>

      {/* Schritt-Anzeige mit Stepper-Controls */}
      <div className={style.stepControls}>
        <button 
          onClick={reset} 
          disabled={currentStep === 0}
          className={style.controlButton}>
          ⏮ Zurücksetzen
        </button>
        <button 
          onClick={prevStep} 
          disabled={currentStep === 0}
          className={style.controlButton}>
          ◀ Zurück
        </button>
        <div className={style.stepInfo}>
          Schritt {currentStep + 1} von {totalSteps}
        </div>
        <button 
          onClick={nextStep} 
          disabled={currentStep === totalSteps - 1}
          className={style.controlButton}>
          Weiter ▶
        </button>
        <button 
          onClick={() => goToStep(totalSteps - 1)} 
          disabled={currentStep === totalSteps - 1}
          className={style.controlButton}>
          Zum Ende ⏭
        </button>
      </div>
    </div>
  )
}
