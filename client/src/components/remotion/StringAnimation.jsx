import { useCurrentFrame, AbsoluteFill } from "remotion"
import { useMemo } from "react"

// ==================== HELPER FUNCTIONS ====================

// Generiere alle Schritte für Palindrom-Prüfung
export function generatePalindromSteps(str) {
  const steps = []
  const chars = str.toLowerCase().split("")
  const n = chars.length

  steps.push({
    chars,
    left: -1,
    right: -1,
    isPalindrom: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    chars,
    left: -1,
    right: -1,
    isPalindrom: null,
    description: `String eingeben: "${str}"`,
    mermaidNode: "String eingeben",
    variables: { str, n },
  })

  let left = 0
  let right = n - 1

  steps.push({
    chars,
    left,
    right,
    isPalindrom: null,
    description: `Initialisiere: left = 0, right = ${n - 1}`,
    mermaidNode: "left = 0 right = Länge - 1",
    variables: { left, right },
  })

  while (left < right) {
    // Check
    steps.push({
      chars,
      left,
      right,
      isPalindrom: null,
      description: `Prüfe: left=${left} < right=${right}?`,
      mermaidNode: "left < right?",
      variables: { left, right },
    })

    // Compare
    steps.push({
      chars,
      left,
      right,
      isPalindrom: null,
      description: `Vergleiche: '${chars[left]}' === '${chars[right]}'?`,
      mermaidNode: "String[left] === String[right]?",
      variables: { left, right, charLeft: chars[left], charRight: chars[right] },
    })

    if (chars[left] !== chars[right]) {
      steps.push({
        chars,
        left,
        right,
        isPalindrom: false,
        description: `Unterschiedlich! "${str}" ist kein Palindrom`,
        mermaidNode: "Ausgabe: Kein Palindrom",
        variables: {},
      })

      steps.push({
        chars,
        left,
        right,
        isPalindrom: false,
        description: "Ende",
        mermaidNode: "Ende",
        variables: {},
      })

      return steps
    }

    // Increment/decrement
    steps.push({
      chars,
      left,
      right,
      isPalindrom: null,
      description: `Gleich! Bewege Zeiger: left++, right--`,
      mermaidNode: "left = left + 1 right = right - 1",
      variables: { left: left + 1, right: right - 1 },
    })

    left++
    right--
  }

  // Final check
  steps.push({
    chars,
    left,
    right,
    isPalindrom: null,
    description: `Prüfe: left=${left} < right=${right}? Nein`,
    mermaidNode: "left < right?",
    variables: { left, right },
  })

  steps.push({
    chars,
    left,
    right,
    isPalindrom: true,
    description: `"${str}" ist ein Palindrom!`,
    mermaidNode: "Ausgabe: Palindrom",
    variables: {},
  })

  steps.push({
    chars,
    left,
    right,
    isPalindrom: true,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Zeichenzählung
export function generateCharCountSteps(str) {
  const steps = []
  const chars = str.toLowerCase().split("")
  const counts = {}

  steps.push({
    chars,
    i: -1,
    currentChar: null,
    counts: {},
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    chars,
    i: -1,
    currentChar: null,
    counts: {},
    description: `String eingeben: "${str}"`,
    mermaidNode: "String eingeben",
    variables: { str, n: chars.length },
  })

  steps.push({
    chars,
    i: 0,
    currentChar: null,
    counts: {},
    description: "Initialisiere: i = 0, counts = {}",
    mermaidNode: "i = 0 counts = {}",
    variables: { i: 0 },
  })

  for (let i = 0; i < chars.length; i++) {
    // Loop check
    steps.push({
      chars,
      i,
      currentChar: null,
      counts: { ...counts },
      description: `Prüfe: i=${i} < ${chars.length}?`,
      mermaidNode: "i < Länge?",
      variables: { i, n: chars.length },
    })

    const char = chars[i]

    steps.push({
      chars,
      i,
      currentChar: char,
      counts: { ...counts },
      description: `Zeichen: '${char}'`,
      mermaidNode: "char = String[i]",
      variables: { i, char },
    })

    // Check if char exists
    steps.push({
      chars,
      i,
      currentChar: char,
      counts: { ...counts },
      description: `Prüfe: '${char}' bereits in counts?`,
      mermaidNode: "char in counts?",
      variables: { char, count: counts[char] || 0 },
    })

    if (counts[char]) {
      counts[char]++
      steps.push({
        chars,
        i,
        currentChar: char,
        counts: { ...counts },
        description: `Ja! Erhöhe: counts['${char}'] = ${counts[char]}`,
        mermaidNode: "counts[char] = counts[char] + 1",
        variables: { char, count: counts[char] },
      })
    } else {
      counts[char] = 1
      steps.push({
        chars,
        i,
        currentChar: char,
        counts: { ...counts },
        description: `Nein! Neu: counts['${char}'] = 1`,
        mermaidNode: "counts[char] = 1",
        variables: { char, count: 1 },
      })
    }

    steps.push({
      chars,
      i,
      currentChar: char,
      counts: { ...counts },
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "i = i + 1",
      variables: { i: i + 1 },
    })
  }

  // Final check
  steps.push({
    chars,
    i: chars.length,
    currentChar: null,
    counts: { ...counts },
    description: `Prüfe: i=${chars.length} < ${chars.length}? Nein`,
    mermaidNode: "i < Länge?",
    variables: { i: chars.length },
  })

  steps.push({
    chars,
    i: chars.length,
    currentChar: null,
    counts: { ...counts },
    description: `Fertig! Häufigkeiten: ${JSON.stringify(counts)}`,
    mermaidNode: "Ausgabe: counts",
    variables: counts,
  })

  steps.push({
    chars,
    i: chars.length,
    currentChar: null,
    counts: { ...counts },
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// ==================== VISUALISIERUNG ====================

function StringVisualization({ chars, leftIndex = -1, rightIndex = -1 }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      {chars.map((char, index) => {
        let backgroundColor = "#3c3836"
        let borderColor = "#504945"

        if (index === leftIndex || index === rightIndex) {
          backgroundColor = "#FFC107"
          borderColor = "#FFC107"
        }

        return (
          <div
            key={index}
            style={{
              width: "50px",
              height: "60px",
              backgroundColor,
              border: `3px solid ${borderColor}`,
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#ebdbb2",
              fontSize: "24px",
              fontWeight: "bold",
            }}>
            <div style={{ fontSize: "12px", opacity: 0.7 }}>[{index}]</div>
            <div>{char}</div>
          </div>
        )
      })}
    </div>
  )
}

function CharCountTable({ counts, currentChar = null }) {
  const entries = Object.entries(counts).sort()

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
        gap: "10px",
        maxWidth: "600px",
      }}>
      {entries.map(([char, count]) => (
        <div
          key={char}
          style={{
            padding: "15px",
            backgroundColor:
              char === currentChar ? "#b8bb26" : "#3c3836",
            color: char === currentChar ? "#282828" : "#ebdbb2",
            borderRadius: "8px",
            textAlign: "center",
            border:
              char === currentChar
                ? "3px solid #b8bb26"
                : "2px solid #504945",
          }}>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>'{char}'</div>
          <div style={{ fontSize: "20px", marginTop: "5px" }}>
            × {count}
          </div>
        </div>
      ))}
    </div>
  )
}

// ==================== REMOTION COMPONENTS ====================

export function PalindromAnimation({ str = "anna", fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generatePalindromSteps(str), [str])

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
        Palindrom-Prüfung - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {currentStep.variables && Object.keys(currentStep.variables).length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: 30,
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
              <span style={{ color: "#b8bb26", fontWeight: "bold" }}>
                {typeof value === "string" ? `"${value}"` : value}
              </span>
            </div>
          ))}
        </div>
      )}

      <StringVisualization
        chars={currentStep.chars}
        leftIndex={currentStep.left}
        rightIndex={currentStep.right}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: "20px",
          fontWeight: 500,
          color:
            currentStep.isPalindrom === false
              ? "#fb4934"
              : currentStep.isPalindrom === true
                ? "#b8bb26"
                : "#ebdbb2",
        }}>
        {currentStep.description}
      </div>

      {currentStep.isPalindrom !== null && (
        <div
          style={{
            marginTop: 30,
            fontSize: "48px",
            fontWeight: "bold",
            color: currentStep.isPalindrom ? "#b8bb26" : "#fb4934",
          }}>
          {currentStep.isPalindrom ? "✓ PALINDROM" : "✗ KEIN PALINDROM"}
        </div>
      )}
    </AbsoluteFill>
  )
}

export function CharCountAnimation({ str = "hello", fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateCharCountSteps(str), [str])

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
        Zeichenhäufigkeit - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {currentStep.variables && Object.keys(currentStep.variables).length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: 30,
            padding: "10px 20px",
            backgroundColor: "#3c3836",
            borderRadius: "8px",
            fontSize: "18px",
            color: "#ebdbb2",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
          {Object.entries(currentStep.variables).map(([key, value]) => (
            <div key={key}>
              <span style={{ color: "#83a598", fontWeight: "bold" }}>{key}</span>
              {" = "}
              <span style={{ color: "#b8bb26", fontWeight: "bold" }}>
                {typeof value === "string" ? `"${value}"` : value}
              </span>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginBottom: 30 }}>
        <StringVisualization
          chars={currentStep.chars}
          leftIndex={currentStep.i}
        />
      </div>

      {Object.keys(currentStep.counts).length > 0 && (
        <CharCountTable
          counts={currentStep.counts}
          currentChar={currentStep.currentChar}
        />
      )}

      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: "20px",
          fontWeight: 500,
          color: "#ebdbb2",
        }}>
        {currentStep.description}
      </div>
    </AbsoluteFill>
  )
}
