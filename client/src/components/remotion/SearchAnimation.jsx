import { useCurrentFrame, AbsoluteFill } from "remotion"
import { useMemo } from "react"

// ==================== HELPER FUNCTIONS ====================

// Generiere alle Schritte für Lineare Suche
export function generateLinearSearchSteps(array, target) {
  const steps = []
  const n = array.length

  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: `Array und Zielwert ${target} eingeben`,
    mermaidNode: "Array und Zielwert eingeben",
    variables: { target, n },
  })

  steps.push({
    array: [...array],
    currentIndex: 0,
    found: false,
    foundIndex: -1,
    description: "Initialisiere: i = 0",
    mermaidNode: "i = 0",
    variables: { i: 0, target },
  })

  for (let i = 0; i < array.length; i++) {
    // Loop check
    steps.push({
      array: [...array],
      currentIndex: i,
      found: false,
      foundIndex: -1,
      description: `Prüfe: i=${i} < ${n}?`,
      mermaidNode: "i < Länge?",
      variables: { i, target, n },
    })

    // Comparison
    steps.push({
      array: [...array],
      currentIndex: i,
      found: false,
      foundIndex: -1,
      description: `Vergleiche: Array[${i}]=${array[i]} === ${target}?`,
      mermaidNode: "Array[i] === Zielwert?",
      variables: { i, target },
    })

    if (array[i] === target) {
      steps.push({
        array: [...array],
        currentIndex: i,
        found: true,
        foundIndex: i,
        description: `Gefunden! ${target} ist an Index ${i}`,
        mermaidNode: "Ausgabe: Gefunden bei Index i",
        variables: { i, target },
      })
      
      steps.push({
        array: [...array],
        currentIndex: i,
        found: true,
        foundIndex: i,
        description: "Ende - Erfolgreich gefunden",
        mermaidNode: "Ende",
        variables: {},
      })
      
      return steps
    }

    // Increment i
    steps.push({
      array: [...array],
      currentIndex: i,
      found: false,
      foundIndex: -1,
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "i = i + 1",
      variables: { i: i + 1, target },
    })
  }

  // Loop exit - not found
  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: `Prüfe: i=${n} < ${n}? Nein`,
    mermaidNode: "i < Länge?",
    variables: { i: n, n },
  })

  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: `${target} wurde nicht gefunden`,
    mermaidNode: "Ausgabe: Nicht gefunden",
    variables: {},
  })

  steps.push({
    array: [...array],
    currentIndex: -1,
    found: false,
    foundIndex: -1,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Binäre Suche
export function generateBinarySearchSteps(array, target) {
  const steps = []
  const sortedArray = [...array].sort((a, b) => a - b)
  const n = sortedArray.length

  steps.push({
    array: sortedArray,
    left: 0,
    right: n - 1,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    array: sortedArray,
    left: 0,
    right: n - 1,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: `Sortiertes Array und Zielwert ${target} eingeben`,
    mermaidNode: "Sortiertes Array und Zielwert eingeben",
    variables: { target, n },
  })

  let left = 0
  let right = n - 1

  steps.push({
    array: sortedArray,
    left,
    right,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: `Initialisiere: left = 0, right = ${n - 1}`,
    mermaidNode: "left = 0 right = Länge - 1",
    variables: { left, right, target },
  })

  while (left <= right) {
    // Loop check
    steps.push({
      array: sortedArray,
      left,
      right,
      mid: -1,
      found: false,
      foundIndex: -1,
      description: `Prüfe: left=${left} <= right=${right}? Ja`,
      mermaidNode: "left <= right?",
      variables: { left, right, target },
    })

    const mid = Math.floor((left + right) / 2)

    steps.push({
      array: sortedArray,
      left,
      right,
      mid,
      found: false,
      foundIndex: -1,
      description: `Berechne Mitte: mid = ⌊(${left} + ${right}) / 2⌋ = ${mid}`,
      mermaidNode: "mid = (left + right) / 2 abgerundet",
      variables: { left, right, mid, target },
    })

    steps.push({
      array: sortedArray,
      left,
      right,
      mid,
      found: false,
      foundIndex: -1,
      description: `Vergleiche: Array[${mid}]=${sortedArray[mid]} === ${target}?`,
      mermaidNode: "Array[mid] === Zielwert?",
      variables: { left, right, mid, target },
    })

    if (sortedArray[mid] === target) {
      steps.push({
        array: sortedArray,
        left,
        right,
        mid,
        found: true,
        foundIndex: mid,
        description: `Ja! Gefunden bei Index ${mid}`,
        mermaidNode: "Ausgabe: Gefunden bei Index mid",
        variables: { mid, target },
      })
      
      steps.push({
        array: sortedArray,
        left,
        right,
        mid,
        found: true,
        foundIndex: mid,
        description: "Ende - Erfolgreich",
        mermaidNode: "Ende",
        variables: {},
      })
      
      return steps
    }
    
    // Check which direction
    steps.push({
      array: sortedArray,
      left,
      right,
      mid,
      found: false,
      foundIndex: -1,
      description: `Prüfe: Array[${mid}]=${sortedArray[mid]} < ${target}?`,
      mermaidNode: "Array[mid] < Zielwert?",
      variables: { left, right, mid, target },
    })
    
    if (sortedArray[mid] < target) {
      left = mid + 1
      
      steps.push({
        array: sortedArray,
        left,
        right,
        mid,
        found: false,
        foundIndex: -1,
        description: `Ja! Setze left = mid + 1 = ${left}`,
        mermaidNode: "left = mid + 1",
        variables: { left, right, target },
      })
    } else {
      right = mid - 1
      
      steps.push({
        array: sortedArray,
        left,
        right,
        mid,
        found: false,
        foundIndex: -1,
        description: `Nein! Setze right = mid - 1 = ${right}`,
        mermaidNode: "right = mid - 1",
        variables: { left, right, target },
      })
    }
  }

  // Loop exit - not found
  steps.push({
    array: sortedArray,
    left,
    right,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: `Prüfe: left=${left} <= right=${right}? Nein`,
    mermaidNode: "left <= right?",
    variables: { left, right },
  })

  steps.push({
    array: sortedArray,
    left,
    right,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: `${target} wurde nicht gefunden`,
    mermaidNode: "Ausgabe: Nicht gefunden",
    variables: {},
  })

  steps.push({
    array: sortedArray,
    left,
    right,
    mid: -1,
    found: false,
    foundIndex: -1,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
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
  const framesPerStep = fps * 1.5 // 1.5 Sekunden pro Schritt

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
          marginBottom: 20,
          color: "#fabd2f",
          fontSize: "28px",
        }}>
        Lineare Suche - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Zählvariablen anzeigen */}
      {currentStep.variables && Object.keys(currentStep.variables).length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: 20,
            padding: "10px 20px",
            backgroundColor: "#3c3836",
            borderRadius: "8px",
            fontSize: "18px",
            color: "#ebdbb2",
          }}>
          {Object.entries(currentStep.variables).map(([key, value]) => (
            <div key={key}>
              <span style={{ color: "#83a598", fontWeight: "bold" }}>{key}</span>
              {" = "}
              <span style={{ color: "#b8bb26", fontWeight: "bold" }}>{value}</span>
            </div>
          ))}
        </div>
      )}

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
  const framesPerStep = fps * 1.5 // 1.5 Sekunden pro Schritt

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
          marginBottom: 20,
          color: "#fabd2f",
          fontSize: "28px",
        }}>
        Binäre Suche - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Zählvariablen anzeigen */}
      {currentStep.variables && Object.keys(currentStep.variables).length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: 20,
            padding: "10px 20px",
            backgroundColor: "#3c3836",
            borderRadius: "8px",
            fontSize: "18px",
            color: "#ebdbb2",
          }}>
          {Object.entries(currentStep.variables).map(([key, value]) => (
            <div key={key}>
              <span style={{ color: "#83a598", fontWeight: "bold" }}>{key}</span>
              {" = "}
              <span style={{ color: "#b8bb26", fontWeight: "bold" }}>{value}</span>
            </div>
          ))}
        </div>
      )}

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
