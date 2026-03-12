import { useState, useEffect, useRef } from "react"
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
  const [isClient, setIsClient] = useState(typeof window !== "undefined")
  const [MermaidComponent, setMermaidComponent] = useState(null)
  const [PlayerComponent, setPlayerComponent] = useState(null)
  const playerRef = useRef(null)
  const framesPerStep = fps * 1.5 // 1.5 Sekunden pro Schritt
  const durationInFrames = totalSteps * framesPerStep

  // Load components only in browser
  useEffect(() => {
    if (typeof window === "undefined") return
    
    setIsClient(true)
    
    // Use MermaidWithHighlight component which supports highlightNode prop and has zoom/pan
    Promise.all([
      import("@components/algorithm/MermaidWithHighlight"),
      import("@remotion/player")
    ]).then(([mermaidMod, playerMod]) => {
      // Use MermaidWithHighlight directly - it supports highlightNode, zoom, and pan
      setMermaidComponent(() => mermaidMod.default)
      setPlayerComponent(() => playerMod.Player)
    }).catch(err => {
      console.error("Failed to load components:", err)
    })
  }, [])

  // Listen to frame updates - use both frameupdate and timeupdate for reliability
  useEffect(() => {
    if (!PlayerComponent) {
      console.log("⚠️ Player component not loaded yet")
      return
    }

    let cleanupFn = null

    // Small delay to ensure player is mounted
    const timeoutId = setTimeout(() => {
      const { current } = playerRef
      if (!current) {
        console.log("⚠️ Player ref not ready yet")
        return
      }

      console.log("✅ Setting up frame listeners")

      const onFrameUpdate = (event) => {
        const frame = event.detail.frame
        setCurrentFrame(frame)
        const step = Math.floor(frame / framesPerStep)
        setCurrentStep(step)
        console.log("📹 Frame:", frame, "=> Step:", step)
      }

      // Use both events for better compatibility
      current.addEventListener("frameupdate", onFrameUpdate)
      current.addEventListener("timeupdate", onFrameUpdate)
      console.log("✅ Frame update listeners registered on player")
      
      // Store cleanup function
      cleanupFn = () => {
        current.removeEventListener("frameupdate", onFrameUpdate)
        current.removeEventListener("timeupdate", onFrameUpdate)
        console.log("❌ Frame update listeners removed")
      }
    }, 100)
    
    return () => {
      clearTimeout(timeoutId)
      if (cleanupFn) {
        cleanupFn()
      }
    }
  }, [framesPerStep, PlayerComponent])

  const currentDescription =
    stepDescriptions[currentStep] || "Algorithmus läuft..."
  
  const currentNodeId = getNodeId ? getNodeId(currentStep) : null
  
  console.log("🎯 Current step:", currentStep, "NodeId:", currentNodeId)

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
  
  const [isPlaying, setIsPlaying] = useState(false)
  
  const togglePlayPause = () => {
    if (playerRef.current) {
      playerRef.current.toggle()
    }
  }
  
  // Listen to play/pause events
  useEffect(() => {
    const { current } = playerRef
    if (!current) return
    
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    
    current.addEventListener("play", onPlay)
    current.addEventListener("pause", onPause)
    
    return () => {
      current.removeEventListener("play", onPlay)
      current.removeEventListener("pause", onPause)
    }
  }, [PlayerComponent])

  // Show loading state until client-side components are loaded
  if (!isClient || !MermaidComponent || !PlayerComponent) {
    return (
      <div className={style.container}>
        <div className={style.splitView}>
          <div className={style.flowchartSide}>
            <h3 className={style.sideTitle}>Flussdiagramm</h3>
            <div className={style.flowchartContainer}>
              <div style={{ padding: "40px", textAlign: "center", color: "var(--color-gray)" }}>
                Lade Diagramm...
              </div>
            </div>
          </div>
          <div className={style.animationSide}>
            <h3 className={style.sideTitle}>Visualisierung</h3>
            <div className={style.playerContainer}>
              <div style={{ padding: "40px", textAlign: "center", color: "var(--color-gray)" }}>
                Lade Animation...
              </div>
            </div>
            <div className={style.stepDescription}>
              <strong>Aktueller Schritt:</strong> Lädt...
            </div>
          </div>
        </div>
        <div className={style.stepInfo}>
          Schritt 1 von {totalSteps}
        </div>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <div className={style.splitView}>
        {/* Linke Seite: Flussdiagramm mit Highlighting */}
        <div className={style.flowchartSide}>
          <h3 className={style.sideTitle}>Flussdiagramm</h3>
          <div className={style.flowchartContainer}>
            <MermaidComponent 
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
            {/* Schritt-Anzeige innerhalb des Containers */}
            <div className={style.stepInfo}>
              Schritt {currentStep + 1} von {totalSteps}
            </div>
            
            <PlayerComponent
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
            
            {/* Schritt-Beschreibung direkt unter dem Player */}
            <div className={style.stepDescription}>
              <strong>Aktueller Schritt:</strong> {currentDescription}
            </div>
          </div>
        </div>
      </div>

      {/* Stepper-Controls */}
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
        <button 
          onClick={togglePlayPause}
          className={style.controlButton}
          style={{ backgroundColor: isPlaying ? "var(--color-red)" : "var(--color-green)" }}>
          {isPlaying ? "⏸ Pause" : "▶ Play"}
        </button>
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
