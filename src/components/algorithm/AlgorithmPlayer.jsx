import { Player } from "@remotion/player"
import { useState } from "react"
import MermaidDark from "./MermaidDark"
import style from "./AlgorithmPlayer.module.css"

export default function AlgorithmPlayer({
  component, // Remotion-Komponente
  inputProps, // Props für die Komponente
  flowchart, // Mermaid-Chart String (optional)
  flowchartId, // Eindeutige ID für Flussdiagramm
  totalSteps, // Gesamtanzahl Schritte
  fps = 30,
  width = 800,
  height = 400,
}) {
  const [currentStep, setCurrentStep] = useState(0)
  const framesPerStep = Math.floor(fps / 2) // 2 Schritte pro Sekunde
  const durationInFrames = totalSteps * framesPerStep

  return (
    <div className={style.container}>
      {/* Flussdiagramm mit Highlighting (optional) */}
      {flowchart && (
        <div className={style.flowchart}>
          <MermaidDark chart={flowchart} id={flowchartId} />
        </div>
      )}

      {/* Remotion Player */}
      <div className={style.player}>
        <Player
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

      {/* Schritt-Anzeige */}
      <div className={style.stepInfo}>
        Schritt {currentStep + 1} von {totalSteps}
      </div>
    </div>
  )
}
