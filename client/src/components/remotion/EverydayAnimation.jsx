import { useCurrentFrame, AbsoluteFill } from "remotion"
import { useMemo } from "react"

// ==================== HELPER FUNCTIONS ====================

// Generiere alle Schritte für Schaltjahr-Berechnung
export function generateSchaltjahrSteps(year) {
  const steps = []

  steps.push({
    year,
    isLeap: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    year,
    isLeap: null,
    description: `Jahr eingeben: ${year}`,
    mermaidNode: "Jahr eingeben",
    variables: { year },
  })

  // Check 1: Teilbar durch 4?
  steps.push({
    year,
    isLeap: null,
    description: `Prüfe: ${year} mod 4 = ${year % 4}`,
    mermaidNode: "Jahr mod 4 = 0?",
    variables: { year, rest4: year % 4 },
  })

  if (year % 4 !== 0) {
    steps.push({
      year,
      isLeap: false,
      description: `Nein! ${year} ist kein Schaltjahr`,
      mermaidNode: "Ausgabe: Kein Schaltjahr",
      variables: {},
    })

    steps.push({
      year,
      isLeap: false,
      description: "Ende",
      mermaidNode: "Ende",
      variables: {},
    })

    return steps
  }

  // Check 2: Teilbar durch 100?
  steps.push({
    year,
    isLeap: null,
    description: `Ja! Prüfe weiter: ${year} mod 100 = ${year % 100}`,
    mermaidNode: "Jahr mod 100 = 0?",
    variables: { year, rest100: year % 100 },
  })

  if (year % 100 !== 0) {
    steps.push({
      year,
      isLeap: true,
      description: `Nein! ${year} ist ein Schaltjahr`,
      mermaidNode: "Ausgabe: Schaltjahr",
      variables: {},
    })

    steps.push({
      year,
      isLeap: true,
      description: "Ende",
      mermaidNode: "Ende",
      variables: {},
    })

    return steps
  }

  // Check 3: Teilbar durch 400?
  steps.push({
    year,
    isLeap: null,
    description: `Ja! Letzte Prüfung: ${year} mod 400 = ${year % 400}`,
    mermaidNode: "Jahr mod 400 = 0?",
    variables: { year, rest400: year % 400 },
  })

  if (year % 400 === 0) {
    steps.push({
      year,
      isLeap: true,
      description: `Ja! ${year} ist ein Schaltjahr`,
      mermaidNode: "Ausgabe: Schaltjahr",
      variables: {},
    })
  } else {
    steps.push({
      year,
      isLeap: false,
      description: `Nein! ${year} ist kein Schaltjahr`,
      mermaidNode: "Ausgabe: Kein Schaltjahr",
      variables: {},
    })
  }

  steps.push({
    year,
    isLeap: year % 400 === 0,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Durchschnittsberechnung
export function generateDurchschnittSteps(array) {
  const steps = []
  const n = array.length
  let sum = 0

  steps.push({
    array,
    i: -1,
    sum: 0,
    average: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    array,
    i: -1,
    sum: 0,
    average: null,
    description: `Array eingeben: [${array.join(", ")}]`,
    mermaidNode: "Array eingeben",
    variables: { n },
  })

  steps.push({
    array,
    i: 0,
    sum: 0,
    average: null,
    description: "Initialisiere: i = 0, sum = 0",
    mermaidNode: "i = 0 sum = 0",
    variables: { i: 0, sum: 0 },
  })

  for (let i = 0; i < n; i++) {
    // Loop check
    steps.push({
      array,
      i,
      sum,
      average: null,
      description: `Prüfe: i=${i} < ${n}?`,
      mermaidNode: "i < Länge?",
      variables: { i, n, sum },
    })

    // Add to sum
    sum += array[i]

    steps.push({
      array,
      i,
      sum,
      average: null,
      description: `Addiere: sum = ${sum - array[i]} + ${array[i]} = ${sum}`,
      mermaidNode: "sum = sum + Array[i]",
      variables: { i, sum },
    })

    steps.push({
      array,
      i,
      sum,
      average: null,
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "i = i + 1",
      variables: { i: i + 1, sum },
    })
  }

  // Final loop check
  steps.push({
    array,
    i: n,
    sum,
    average: null,
    description: `Prüfe: i=${n} < ${n}? Nein`,
    mermaidNode: "i < Länge?",
    variables: { i: n, sum },
  })

  const average = sum / n

  steps.push({
    array,
    i: n,
    sum,
    average,
    description: `Berechne: average = ${sum} / ${n} = ${average.toFixed(2)}`,
    mermaidNode: "average = sum / Länge",
    variables: { sum, n, average: average.toFixed(2) },
  })

  steps.push({
    array,
    i: n,
    sum,
    average,
    description: `Durchschnitt: ${average.toFixed(2)}`,
    mermaidNode: "Ausgabe: average",
    variables: { average: average.toFixed(2) },
  })

  steps.push({
    array,
    i: n,
    sum,
    average,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Notenberechnung
export function generateNotenSteps(punkte) {
  const steps = []

  steps.push({
    punkte,
    note: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    punkte,
    note: null,
    description: `Punkte eingeben: ${punkte}`,
    mermaidNode: "Punkte eingeben",
    variables: { punkte },
  })

  let note = null

  // Check >= 90
  steps.push({
    punkte,
    note: null,
    description: `Prüfe: ${punkte} >= 90?`,
    mermaidNode: "Punkte >= 90?",
    variables: { punkte },
  })

  if (punkte >= 90) {
    note = "Sehr gut (1)"
    steps.push({
      punkte,
      note,
      description: `Ja! Note = ${note}`,
      mermaidNode: "Note = Sehr gut",
      variables: { punkte, note },
    })
  } else {
    // Check >= 75
    steps.push({
      punkte,
      note: null,
      description: `Nein. Prüfe: ${punkte} >= 75?`,
      mermaidNode: "Punkte >= 75?",
      variables: { punkte },
    })

    if (punkte >= 75) {
      note = "Gut (2)"
      steps.push({
        punkte,
        note,
        description: `Ja! Note = ${note}`,
        mermaidNode: "Note = Gut",
        variables: { punkte, note },
      })
    } else {
      // Check >= 60
      steps.push({
        punkte,
        note: null,
        description: `Nein. Prüfe: ${punkte} >= 60?`,
        mermaidNode: "Punkte >= 60?",
        variables: { punkte },
      })

      if (punkte >= 60) {
        note = "Befriedigend (3)"
        steps.push({
          punkte,
          note,
          description: `Ja! Note = ${note}`,
          mermaidNode: "Note = Befriedigend",
          variables: { punkte, note },
        })
      } else {
        // Check >= 50
        steps.push({
          punkte,
          note: null,
          description: `Nein. Prüfe: ${punkte} >= 50?`,
          mermaidNode: "Punkte >= 50?",
          variables: { punkte },
        })

        if (punkte >= 50) {
          note = "Ausreichend (4)"
          steps.push({
            punkte,
            note,
            description: `Ja! Note = ${note}`,
            mermaidNode: "Note = Ausreichend",
            variables: { punkte, note },
          })
        } else {
          note = "Ungenügend (5)"
          steps.push({
            punkte,
            note,
            description: `Nein. Note = ${note}`,
            mermaidNode: "Note = Ungenügend",
            variables: { punkte, note },
          })
        }
      }
    }
  }

  steps.push({
    punkte,
    note,
    description: `Ausgabe: ${note}`,
    mermaidNode: "Ausgabe: Note",
    variables: { note },
  })

  steps.push({
    punkte,
    note,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// ==================== VISUALISIERUNG ====================

function YearDisplay({ year, isLeap }) {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#3c3836",
        borderRadius: "12px",
        border: `4px solid ${
          isLeap === null ? "#504945" : isLeap ? "#b8bb26" : "#fb4934"
        }`,
      }}>
      <div
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "#fabd2f",
          textAlign: "center",
        }}>
        {year}
      </div>
    </div>
  )
}

function ArraySumVisualization({ array, currentIndex = -1, sum = 0 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {array.map((num, index) => (
          <div
            key={index}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: index === currentIndex ? "#FFC107" :
                              index < currentIndex ? "#4CAF50" : "#3c3836",
              border: `3px solid ${index === currentIndex ? "#FFC107" : 
                                   index < currentIndex ? "#4CAF50" : "#504945"}`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ebdbb2",
              fontSize: "24px",
              fontWeight: "bold",
            }}>
            {num}
          </div>
        ))}
      </div>

      <div
        style={{
          fontSize: "32px",
          color: "#b8bb26",
          fontWeight: "bold",
        }}>
        Summe: {sum}
      </div>
    </div>
  )
}

function NotenDisplay({ punkte, note }) {
  const getNoteColor = (note) => {
    if (!note) return "#504945"
    if (note.includes("1") || note.includes("Sehr gut")) return "#b8bb26"
    if (note.includes("2") || note.includes("Gut")) return "#8ec07c"
    if (note.includes("3") || note.includes("Befriedigend")) return "#fabd2f"
    if (note.includes("4") || note.includes("Ausreichend")) return "#fe8019"
    return "#fb4934"
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
      <div
        style={{
          padding: "40px",
          backgroundColor: "#3c3836",
          borderRadius: "12px",
          border: `4px solid ${getNoteColor(note)}`,
        }}>
        <div style={{ fontSize: "24px", color: "#83a598", marginBottom: "10px", textAlign: "center" }}>
          Punkte:
        </div>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "#fabd2f", textAlign: "center" }}>
          {punkte}
        </div>
      </div>

      {note && (
        <div
          style={{
            padding: "30px 40px",
            backgroundColor: getNoteColor(note),
            color: "#282828",
            borderRadius: "12px",
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
          }}>
          {note}
        </div>
      )}
    </div>
  )
}

// ==================== REMOTION COMPONENTS ====================

export function SchaltjahrAnimation({ year = 2024, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateSchaltjahrSteps(year), [year])

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
        Schaltjahr - Schritt {currentStepIndex + 1} / {steps.length}
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
              <span style={{ color: "#b8bb26", fontWeight: "bold" }}>{value}</span>
            </div>
          ))}
        </div>
      )}

      <YearDisplay year={currentStep.year} isLeap={currentStep.isLeap} />

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

      {currentStep.isLeap !== null && (
        <div
          style={{
            marginTop: 30,
            fontSize: "48px",
            fontWeight: "bold",
            color: currentStep.isLeap ? "#b8bb26" : "#fb4934",
          }}>
          {currentStep.isLeap ? "✓ SCHALTJAHR" : "✗ KEIN SCHALTJAHR"}
        </div>
      )}
    </AbsoluteFill>
  )
}

export function DurchschnittAnimation({ array = [5, 8, 3, 9, 6], fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateDurchschnittSteps(array), [array])

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
        Durchschnitt - Schritt {currentStepIndex + 1} / {steps.length}
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
              <span style={{ color: "#b8bb26", fontWeight: "bold" }}>{value}</span>
            </div>
          ))}
        </div>
      )}

      <ArraySumVisualization
        array={currentStep.array}
        currentIndex={currentStep.i}
        sum={currentStep.sum}
      />

      {currentStep.average !== null && (
        <div
          style={{
            marginTop: 30,
            padding: "20px 40px",
            backgroundColor: "#3c3836",
            borderRadius: "12px",
            border: "4px solid #b8bb26",
          }}>
          <div style={{ fontSize: "20px", color: "#83a598", marginBottom: "10px" }}>
            Durchschnitt:
          </div>
          <div style={{ fontSize: "48px", fontWeight: "bold", color: "#b8bb26" }}>
            {currentStep.average.toFixed(2)}
          </div>
        </div>
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

export function NotenAnimation({ punkte = 82, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateNotenSteps(punkte), [punkte])

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
        Notenberechnung - Schritt {currentStepIndex + 1} / {steps.length}
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

      <NotenDisplay punkte={currentStep.punkte} note={currentStep.note} />

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
