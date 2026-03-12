import { useCurrentFrame, AbsoluteFill } from "remotion"
import { useMemo } from "react"

// ==================== HELPER FUNCTIONS ====================

// Generiere Schritte für Summe 1-10
export function generateSumme1Bis10Steps() {
  const steps = []
  let summe = 0
  let zahl = 1

  steps.push({
    summe: 0,
    zahl: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    summe: 0,
    zahl: null,
    description: "Initialisiere: summe = 0",
    mermaidNode: "summe = 0",
    variables: { summe: 0 },
  })

  steps.push({
    summe: 0,
    zahl: 1,
    description: "Initialisiere: zahl = 1",
    mermaidNode: "zahl = 1",
    variables: { summe: 0, zahl: 1 },
  })

  while (zahl <= 10) {
    steps.push({
      summe,
      zahl,
      description: `Prüfe: zahl=${zahl} <= 10?`,
      mermaidNode: "zahl <= 10?",
      variables: { summe, zahl },
    })

    summe += zahl

    steps.push({
      summe,
      zahl,
      description: `Addiere: summe = ${summe - zahl} + ${zahl} = ${summe}`,
      mermaidNode: "summe = summe + zahl",
      variables: { summe, zahl },
    })

    steps.push({
      summe,
      zahl,
      description: `Erhöhe: zahl = ${zahl} + 1 = ${zahl + 1}`,
      mermaidNode: "zahl = zahl + 1",
      variables: { summe, zahl: zahl + 1 },
    })

    zahl++
  }

  steps.push({
    summe,
    zahl,
    description: `Prüfe: zahl=${zahl} <= 10? Nein`,
    mermaidNode: "zahl <= 10?",
    variables: { summe, zahl },
  })

  steps.push({
    summe,
    zahl,
    description: `Ergebnis: summe = ${summe}`,
    mermaidNode: "Ausgabe: summe",
    variables: { summe },
  })

  steps.push({
    summe,
    zahl,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere Schritte für Countdown
export function generateCountdownSteps() {
  const steps = []
  let zaehler = 10

  steps.push({
    zaehler: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    zaehler: 10,
    description: "Initialisiere: zaehler = 10",
    mermaidNode: "zaehler = 10",
    variables: { zaehler: 10 },
  })

  while (zaehler > 0) {
    steps.push({
      zaehler,
      description: `Prüfe: zaehler=${zaehler} > 0?`,
      mermaidNode: "zaehler > 0?",
      variables: { zaehler },
    })

    steps.push({
      zaehler,
      description: `Ausgabe: ${zaehler}`,
      mermaidNode: "Ausgabe: zaehler",
      variables: { zaehler },
    })

    steps.push({
      zaehler,
      description: `Verringere: zaehler = ${zaehler} - 1 = ${zaehler - 1}`,
      mermaidNode: "zaehler = zaehler - 1",
      variables: { zaehler: zaehler - 1 },
    })

    zaehler--
  }

  steps.push({
    zaehler,
    description: `Prüfe: zaehler=${zaehler} > 0? Nein`,
    mermaidNode: "zaehler > 0?",
    variables: { zaehler },
  })

  steps.push({
    zaehler,
    description: "Ausgabe: Start!",
    mermaidNode: "Ausgabe: Start!",
    variables: {},
  })

  steps.push({
    zaehler,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere Schritte für Maximum aus Liste
export function generateMaxListeSteps(array) {
  const steps = []
  const n = array.length
  let max = array[0]
  let i = 1

  steps.push({
    array,
    max: null,
    i: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    array,
    max: null,
    i: null,
    description: `Liste eingeben: [${array.join(", ")}]`,
    mermaidNode: "Liste eingeben",
    variables: { n },
  })

  steps.push({
    array,
    max: array[0],
    i: 0,
    description: `Initialisiere: max = erstes Element = ${array[0]}`,
    mermaidNode: "max = erstes Element",
    variables: { max: array[0], i: 0 },
  })

  steps.push({
    array,
    max,
    i: 1,
    description: `Starte bei: i = 1`,
    mermaidNode: "i = 1",
    variables: { max, i: 1 },
  })

  while (i < n) {
    steps.push({
      array,
      max,
      i,
      description: `Prüfe: i=${i} < ${n}?`,
      mermaidNode: "Noch Elemente vorhanden?",
      variables: { max, i, n },
    })

    steps.push({
      array,
      max,
      i,
      description: `Betrachte Element: Array[${i}] = ${array[i]}`,
      mermaidNode: "Gehe zum nächsten Element",
      variables: { max, i, current: array[i] },
    })

    steps.push({
      array,
      max,
      i,
      description: `Vergleiche: ${array[i]} > ${max}?`,
      mermaidNode: "Element > max?",
      variables: { max, i, current: array[i] },
    })

    if (array[i] > max) {
      max = array[i]
      steps.push({
        array,
        max,
        i,
        description: `Ja! Neues Maximum: max = ${max}`,
        mermaidNode: "max = Element",
        variables: { max, i },
      })
    }

    i++

    steps.push({
      array,
      max,
      i,
      description: `Weiter zum nächsten: i = ${i}`,
      mermaidNode: "i = i + 1",
      variables: { max, i },
    })
  }

  steps.push({
    array,
    max,
    i,
    description: `Prüfe: i=${i} < ${n}? Nein`,
    mermaidNode: "Noch Elemente vorhanden?",
    variables: { i, n },
  })

  steps.push({
    array,
    max,
    i,
    description: `Maximum gefunden: ${max}`,
    mermaidNode: "Ausgabe: max",
    variables: { max },
  })

  steps.push({
    array,
    max,
    i,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// ==================== VISUALISIERUNG ====================

function SummeVisualization({ summe, zahl }) {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
      <div
        style={{
          padding: "30px 50px",
          backgroundColor: "#3c3836",
          borderRadius: "12px",
          border: "4px solid #b8bb26",
        }}>
        <div style={{ fontSize: "24px", color: "#83a598", marginBottom: "10px" }}>
          Summe:
        </div>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "#b8bb26" }}>
          {summe}
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
        {numbers.map((num) => (
          <div
            key={num}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: zahl !== null && num <= zahl ? "#4CAF50" :
                              zahl !== null && num === zahl + 1 ? "#FFC107" : "#3c3836",
              border: `3px solid ${zahl !== null && num === zahl ? "#FFC107" : "#504945"}`,
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
    </div>
  )
}

function CountdownVisualization({ zaehler }) {
  return (
    <div
      style={{
        padding: "60px 80px",
        backgroundColor: "#3c3836",
        borderRadius: "20px",
        border: "6px solid #fabd2f",
      }}>
      <div
        style={{
          fontSize: "120px",
          fontWeight: "bold",
          color: zaehler > 0 ? "#fabd2f" : "#b8bb26",
          textAlign: "center",
        }}>
        {zaehler !== null ? (zaehler > 0 ? zaehler : "START!") : "?"}
      </div>
    </div>
  )
}

function MaxListeVisualization({ array, max, i }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>
      <div
        style={{
          padding: "30px 50px",
          backgroundColor: "#3c3836",
          borderRadius: "12px",
          border: "4px solid #fb4934",
        }}>
        <div style={{ fontSize: "24px", color: "#83a598", marginBottom: "10px" }}>
          Aktuelles Maximum:
        </div>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "#fb4934" }}>
          {max !== null ? max : "?"}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {array.map((num, index) => (
          <div
            key={index}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: i !== null && index < i ? "#4CAF50" :
                              i !== null && index === i ? "#FFC107" : "#3c3836",
              border: `3px solid ${i !== null && index === i ? "#FFC107" : "#504945"}`,
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
    </div>
  )
}

// ==================== REMOTION COMPONENTS ====================

export function Summe1Bis10Animation({ fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateSumme1Bis10Steps(), [])

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
        Summe 1-10 - Schritt {currentStepIndex + 1} / {steps.length}
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

      <SummeVisualization summe={currentStep.summe} zahl={currentStep.zahl} />

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

export function CountdownAnimation({ fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateCountdownSteps(), [])

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
        Countdown - Schritt {currentStepIndex + 1} / {steps.length}
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

      <CountdownVisualization zaehler={currentStep.zaehler} />

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

export function MaxListeAnimation({ array = [7, 3, 9, 2, 8], fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateMaxListeSteps(array), [array])

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
        Maximum finden - Schritt {currentStepIndex + 1} / {steps.length}
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

      <MaxListeVisualization
        array={currentStep.array}
        max={currentStep.max}
        i={currentStep.i}
      />

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
