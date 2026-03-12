import { useCurrentFrame, AbsoluteFill } from "remotion"
import { useMemo } from "react"

// ==================== HELPER FUNCTIONS ====================

// Generiere alle Schritte für Lineare Suche
export function generateLinearSearchSteps(array, target) {
  const steps = []

  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: `Suche nach ${target} im Array`,
  })

  for (let i = 0; i < array.length; i++) {
    steps.push({
      array: [...array],
      currentIndex: i,
      found: false,
      foundIndex: -1,
      description: `Prüfe Index ${i}: ${array[i]} === ${target}?`,
    })

    if (array[i] === target) {
      steps.push({
        array: [...array],
        currentIndex: i,
        found: true,
        foundIndex: i,
        description: `Gefunden! ${target} ist an Index ${i}`,
      })
      return steps
    }
  }

  // Nicht gefunden
  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: `${target} wurde nicht gefunden`,
  })

  return steps
}

// Generiere alle Schritte für Binäre Suche
export function generateBinarySearchSteps(array, target) {
  const steps = []
  const sortedArray = [...array].sort((a, b) => a - b)

  steps.push({
    array: sortedArray,
    left: 0,
    right: sortedArray.length - 1,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: `Suche nach ${target} im sortierten Array`,
  })

  let left = 0
  let right = sortedArray.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    steps.push({
      array: sortedArray,
      left,
      right,
      mid,
      found: false,
      foundIndex: -1,
      description: `Prüfe Mitte bei Index ${mid}: ${sortedArray[mid]}`,
    })

    if (sortedArray[mid] === target) {
      steps.push({
        array: sortedArray,
        left,
        right,
        mid,
        found: true,
        foundIndex: mid,
        description: `Gefunden! ${target} ist an Index ${mid}`,
      })
      return steps
    } else if (sortedArray[mid] < target) {
      steps.push({
        array: sortedArray,
        left: mid + 1,
        right,
        mid,
        found: false,
        foundIndex: -1,
        description: `${sortedArray[mid]} < ${target} → Suche rechts weiter`,
      })
      left = mid + 1
    } else {
      steps.push({
        array: sortedArray,
        left,
        right: mid - 1,
        mid,
        found: false,
        foundIndex: -1,
        description: `${sortedArray[mid]} > ${target} → Suche links weiter`,
      })
      right = mid - 1
    }
  }

  // Nicht gefunden
  steps.push({
    array: sortedArray,
    left,
    right,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: `${target} wurde nicht gefunden`,
  })

  return steps
}

// ==================== ARRAY VISUALISIERUNG ====================

function SearchArrayBars({
  array,
  currentIndex = -1,
  foundIndex = -1,
  left = -1,
  right = -1,
  mid = -1,
}) {
  const maxValue = Math.max(...array)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "250px",
        gap: "10px",
      }}>
      {array.map((value, index) => {
        let backgroundColor = "#666" // Grau = Nicht im Suchbereich
        let label = value.toString()

        // Binäre Suche: Markiere Suchbereich
        if (left >= 0 && right >= 0) {
          if (index >= left && index <= right) {
            backgroundColor = "#2196F3" // Blau = Im Suchbereich
          }
          if (index === mid) {
            backgroundColor = "#FFC107" // Gelb = Aktuelle Mitte
            label = `${value} (M)`
          }
        }

        // Lineare Suche: Markiere aktuellen Index
        if (currentIndex === index && left < 0) {
          backgroundColor = "#FFC107" // Gelb = Wird gerade geprüft
        }

        // Gefunden
        if (foundIndex === index) {
          backgroundColor = "#4CAF50" // Grün = Gefunden!
          label = `${value} ✓`
        }

        return (
          <div
            key={`${index}-${value}`}
            style={{
              width: "50px",
              height: `${(value / maxValue) * 200}px`,
              minHeight: "40px",
              backgroundColor,
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
              position: "relative",
            }}>
            <div style={{ fontSize: "18px", marginBottom: "5px" }}>
              {label}
            </div>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>[{index}]</div>
          </div>
        )
      })}
    </div>
  )
}

// ==================== REMOTION COMPONENTS ====================

export function LinearSearchAnimation({
  array = [5, 2, 8, 1, 9, 4, 7],
  target = 9,
  fps = 30,
}) {
  const frame = useCurrentFrame()
  const framesPerStep = Math.floor(fps / 2) // 2 Schritte pro Sekunde

  const steps = useMemo(() => generateLinearSearchSteps(array, target), [
    array,
    target,
  ])

  const currentStepIndex = Math.min(
    Math.floor(frame / framesPerStep),
    steps.length - 1,
  )

  const currentStep = steps[currentStepIndex]

  return (
    <AbsoluteFill
      style={{
        background: "#282828",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "#fabd2f",
          fontSize: "28px",
        }}>
        Lineare Suche - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      <div
        style={{
          marginBottom: 20,
          fontSize: "20px",
          color: "#ebdbb2",
          fontWeight: "bold",
        }}>
        Suche nach: <span style={{ color: "#4CAF50" }}>{target}</span>
      </div>

      <SearchArrayBars
        array={currentStep.array}
        currentIndex={currentStep.currentIndex}
        foundIndex={currentStep.foundIndex}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: "20px",
          fontWeight: 500,
          color: currentStep.found ? "#4CAF50" : "#ebdbb2",
        }}>
        {currentStep.description}
      </div>

      {currentStep.found && (
        <div
          style={{
            marginTop: 20,
            fontSize: "32px",
            color: "#4CAF50",
          }}>
          ✓ Erfolgreich!
        </div>
      )}
    </AbsoluteFill>
  )
}

export function BinarySearchAnimation({
  array = [1, 2, 4, 5, 7, 8, 9],
  target = 7,
  fps = 30,
}) {
  const frame = useCurrentFrame()
  const framesPerStep = Math.floor(fps / 2)

  const steps = useMemo(() => generateBinarySearchSteps(array, target), [
    array,
    target,
  ])

  const currentStepIndex = Math.min(
    Math.floor(frame / framesPerStep),
    steps.length - 1,
  )

  const currentStep = steps[currentStepIndex]

  return (
    <AbsoluteFill
      style={{
        background: "#282828",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "#fabd2f",
          fontSize: "28px",
        }}>
        Binäre Suche - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      <div
        style={{
          marginBottom: 20,
          fontSize: "20px",
          color: "#ebdbb2",
          fontWeight: "bold",
        }}>
        Suche nach: <span style={{ color: "#4CAF50" }}>{target}</span>
        {currentStep.left >= 0 && currentStep.right >= 0 && (
          <span style={{ marginLeft: 20, fontSize: "18px", opacity: 0.8 }}>
            | Bereich: [{currentStep.left}...{currentStep.right}]
          </span>
        )}
      </div>

      <SearchArrayBars
        array={currentStep.array}
        left={currentStep.left}
        right={currentStep.right}
        mid={currentStep.mid}
        foundIndex={currentStep.foundIndex}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: "20px",
          fontWeight: 500,
          color: currentStep.found ? "#4CAF50" : "#ebdbb2",
        }}>
        {currentStep.description}
      </div>

      {currentStep.found && (
        <div
          style={{
            marginTop: 20,
            fontSize: "32px",
            color: "#4CAF50",
          }}>
          ✓ Erfolgreich!
        </div>
      )}
    </AbsoluteFill>
  )
}
