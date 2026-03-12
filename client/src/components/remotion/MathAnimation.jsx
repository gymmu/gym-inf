import { useCurrentFrame, AbsoluteFill } from "remotion"
import { useMemo } from "react"

// ==================== HELPER FUNCTIONS ====================

// Generiere alle Schritte für GGT (Euklid)
export function generateGGTSteps(a, b) {
  const steps = []
  let num1 = a
  let num2 = b

  steps.push({
    a: num1,
    b: num2,
    rest: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    a: num1,
    b: num2,
    rest: null,
    description: `Zwei Zahlen eingeben: a=${num1}, b=${num2}`,
    mermaidNode: "Zwei Zahlen eingeben: a, b",
    variables: { a: num1, b: num2 },
  })

  while (num2 !== 0) {
    // Check b = 0?
    steps.push({
      a: num1,
      b: num2,
      rest: null,
      description: `Prüfe: b=${num2} = 0?`,
      mermaidNode: "b = 0?",
      variables: { a: num1, b: num2 },
    })

    const rest = num1 % num2

    steps.push({
      a: num1,
      b: num2,
      rest,
      description: `Berechne: rest = ${num1} mod ${num2} = ${rest}`,
      mermaidNode: "rest = a mod b",
      variables: { a: num1, b: num2, rest },
    })

    steps.push({
      a: num2,
      b: num2,
      rest,
      description: `Setze a = b = ${num2}`,
      mermaidNode: "a = b",
      variables: { a: num2, b: num2, rest },
    })

    num1 = num2
    num2 = rest

    steps.push({
      a: num1,
      b: num2,
      rest,
      description: `Setze b = rest = ${num2}`,
      mermaidNode: "b = rest",
      variables: { a: num1, b: num2 },
    })
  }

  // Final check
  steps.push({
    a: num1,
    b: num2,
    rest: null,
    description: `Prüfe: b=${num2} = 0? Ja!`,
    mermaidNode: "b = 0?",
    variables: { a: num1, b: num2 },
  })

  steps.push({
    a: num1,
    b: num2,
    rest: null,
    description: `GGT gefunden: ${num1}`,
    mermaidNode: "Ausgabe: a ist GGT",
    variables: { ggt: num1 },
  })

  steps.push({
    a: num1,
    b: num2,
    rest: null,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Primzahltest
export function generatePrimzahlSteps(n) {
  const steps = []

  steps.push({
    n,
    i: null,
    isPrime: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    n,
    i: null,
    isPrime: null,
    description: `Zahl eingeben: ${n}`,
    mermaidNode: "Zahl eingeben",
    variables: { n },
  })

  // Check n <= 1
  steps.push({
    n,
    i: null,
    isPrime: null,
    description: `Prüfe: ${n} <= 1?`,
    mermaidNode: "n <= 1?",
    variables: { n },
  })

  if (n <= 1) {
    steps.push({
      n,
      i: null,
      isPrime: false,
      description: `${n} ist nicht prim (zu klein)`,
      mermaidNode: "Ausgabe: Nicht prim",
      variables: { n },
    })

    steps.push({
      n,
      i: null,
      isPrime: false,
      description: "Ende",
      mermaidNode: "Ende",
      variables: {},
    })

    return steps
  }

  // Initialize i = 2
  steps.push({
    n,
    i: 2,
    isPrime: null,
    description: "Starte Teilersuche: i = 2",
    mermaidNode: "i = 2",
    variables: { n, i: 2 },
  })

  const sqrtN = Math.floor(Math.sqrt(n))

  for (let i = 2; i <= sqrtN; i++) {
    // Check i <= sqrt(n)
    steps.push({
      n,
      i,
      isPrime: null,
      description: `Prüfe: i=${i} <= √${n}≈${sqrtN}?`,
      mermaidNode: "i <= √n?",
      variables: { n, i, sqrtN },
    })

    // Check divisibility
    steps.push({
      n,
      i,
      isPrime: null,
      description: `Prüfe: ${n} mod ${i} = ${n % i}`,
      mermaidNode: "n mod i = 0?",
      variables: { n, i, rest: n % i },
    })

    if (n % i === 0) {
      steps.push({
        n,
        i,
        isPrime: false,
        description: `${n} ist durch ${i} teilbar → Nicht prim!`,
        mermaidNode: "Ausgabe: Nicht prim",
        variables: { n, i },
      })

      steps.push({
        n,
        i,
        isPrime: false,
        description: "Ende",
        mermaidNode: "Ende",
        variables: {},
      })

      return steps
    }

    // Increment i
    steps.push({
      n,
      i,
      isPrime: null,
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "i = i + 1",
      variables: { n, i: i + 1 },
    })
  }

  // Final check
  steps.push({
    n,
    i: sqrtN + 1,
    isPrime: null,
    description: `Prüfe: i=${sqrtN + 1} <= √${n}≈${sqrtN}? Nein`,
    mermaidNode: "i <= √n?",
    variables: { n, i: sqrtN + 1 },
  })

  steps.push({
    n,
    i: null,
    isPrime: true,
    description: `${n} ist prim!`,
    mermaidNode: "Ausgabe: Prim",
    variables: { n },
  })

  steps.push({
    n,
    i: null,
    isPrime: true,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Fibonacci
export function generateFibonacciSteps(count) {
  const steps = []
  const sequence = []

  steps.push({
    sequence: [],
    i: null,
    current: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    sequence: [],
    i: null,
    current: null,
    description: `Anzahl eingeben: ${count} Fibonacci-Zahlen`,
    mermaidNode: "Anzahl eingeben",
    variables: { count },
  })

  // Initialize
  steps.push({
    sequence: [0],
    i: 0,
    current: 0,
    description: "Erste Zahl: F(0) = 0",
    mermaidNode: "F(0) = 0",
    variables: { i: 0 },
  })

  sequence.push(0)

  if (count > 1) {
    steps.push({
      sequence: [0, 1],
      i: 1,
      current: 1,
      description: "Zweite Zahl: F(1) = 1",
      mermaidNode: "F(1) = 1",
      variables: { i: 1 },
    })

    sequence.push(1)

    steps.push({
      sequence: [0, 1],
      i: 2,
      current: null,
      description: "Starte Schleife: i = 2",
      mermaidNode: "i = 2",
      variables: { i: 2, count },
    })

    for (let i = 2; i < count; i++) {
      // Loop check
      steps.push({
        sequence: [...sequence],
        i,
        current: null,
        description: `Prüfe: i=${i} < ${count}?`,
        mermaidNode: "i < Anzahl?",
        variables: { i, count },
      })

      const next = sequence[i - 1] + sequence[i - 2]

      steps.push({
        sequence: [...sequence],
        i,
        current: next,
        description: `Berechne: F(${i}) = F(${i - 1}) + F(${i - 2}) = ${sequence[i - 1]} + ${sequence[i - 2]} = ${next}`,
        mermaidNode: "F(i) = F(i-1) + F(i-2)",
        variables: { i, prev1: sequence[i - 1], prev2: sequence[i - 2], current: next },
      })

      sequence.push(next)

      steps.push({
        sequence: [...sequence],
        i,
        current: next,
        description: `i erhöhen: ${i} → ${i + 1}`,
        mermaidNode: "i = i + 1",
        variables: { i: i + 1 },
      })
    }

    // Final loop check
    steps.push({
      sequence: [...sequence],
      i: count,
      current: null,
      description: `Prüfe: i=${count} < ${count}? Nein`,
      mermaidNode: "i < Anzahl?",
      variables: { i: count, count },
    })
  }

  steps.push({
    sequence: [...sequence],
    i: null,
    current: null,
    description: `Fertig! Fibonacci-Folge: [${sequence.join(", ")}]`,
    mermaidNode: "Ausgabe: Folge",
    variables: {},
  })

  steps.push({
    sequence: [...sequence],
    i: null,
    current: null,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Fakultät
export function generateFakultaetSteps(n) {
  const steps = []
  let result = 1

  steps.push({
    n,
    i: null,
    result: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    n,
    i: null,
    result: null,
    description: `Zahl eingeben: ${n}`,
    mermaidNode: "Zahl n eingeben",
    variables: { n },
  })

  // Check n <= 1
  steps.push({
    n,
    i: null,
    result: null,
    description: `Prüfe: ${n} <= 1?`,
    mermaidNode: "n <= 1?",
    variables: { n },
  })

  if (n <= 1) {
    steps.push({
      n,
      i: null,
      result: 1,
      description: `Ja! ${n}! = 1`,
      mermaidNode: "Ausgabe: 1",
      variables: { result: 1 },
    })

    steps.push({
      n,
      i: null,
      result: 1,
      description: "Ende",
      mermaidNode: "Ende",
      variables: {},
    })

    return steps
  }

  // Initialize
  steps.push({
    n,
    i: 1,
    result: 1,
    description: "Initialisiere: i = 1, result = 1",
    mermaidNode: "i = 1 result = 1",
    variables: { i: 1, result: 1 },
  })

  for (let i = 1; i <= n; i++) {
    // Loop check
    steps.push({
      n,
      i,
      result,
      description: `Prüfe: i=${i} <= ${n}?`,
      mermaidNode: "i <= n?",
      variables: { i, n, result },
    })

    result *= i

    steps.push({
      n,
      i,
      result,
      description: `Multipliziere: result = ${result / i} × ${i} = ${result}`,
      mermaidNode: "result = result × i",
      variables: { i, result },
    })

    steps.push({
      n,
      i,
      result,
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "i = i + 1",
      variables: { i: i + 1, result },
    })
  }

  // Final check
  steps.push({
    n,
    i: n + 1,
    result,
    description: `Prüfe: i=${n + 1} <= ${n}? Nein`,
    mermaidNode: "i <= n?",
    variables: { i: n + 1, n },
  })

  steps.push({
    n,
    i: n + 1,
    result,
    description: `${n}! = ${result}`,
    mermaidNode: "Ausgabe: result",
    variables: { result },
  })

  steps.push({
    n,
    i: n + 1,
    result,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// Generiere alle Schritte für Potenz
export function generatePotenzSteps(base, exponent) {
  const steps = []
  let result = 1

  steps.push({
    base,
    exponent,
    i: null,
    result: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  })

  steps.push({
    base,
    exponent,
    i: null,
    result: null,
    description: `Basis und Exponent eingeben: ${base}^${exponent}`,
    mermaidNode: "Basis und Exponent eingeben",
    variables: { base, exponent },
  })

  steps.push({
    base,
    exponent,
    i: 0,
    result: 1,
    description: "Initialisiere: i = 0, result = 1",
    mermaidNode: "i = 0 result = 1",
    variables: { i: 0, result: 1 },
  })

  for (let i = 0; i < exponent; i++) {
    // Loop check
    steps.push({
      base,
      exponent,
      i,
      result,
      description: `Prüfe: i=${i} < ${exponent}?`,
      mermaidNode: "i < Exponent?",
      variables: { i, exponent, result },
    })

    result *= base

    steps.push({
      base,
      exponent,
      i,
      result,
      description: `Multipliziere: result = ${result / base} × ${base} = ${result}`,
      mermaidNode: "result = result × Basis",
      variables: { base, i, result },
    })

    steps.push({
      base,
      exponent,
      i,
      result,
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "i = i + 1",
      variables: { i: i + 1, result },
    })
  }

  // Final check
  steps.push({
    base,
    exponent,
    i: exponent,
    result,
    description: `Prüfe: i=${exponent} < ${exponent}? Nein`,
    mermaidNode: "i < Exponent?",
    variables: { i: exponent, exponent },
  })

  steps.push({
    base,
    exponent,
    i: exponent,
    result,
    description: `${base}^${exponent} = ${result}`,
    mermaidNode: "Ausgabe: result",
    variables: { result },
  })

  steps.push({
    base,
    exponent,
    i: exponent,
    result,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  })

  return steps
}

// ==================== VISUALISIERUNG KOMPONENTEN ====================

function NumberDisplay({ label, value, color = "#ebdbb2" }) {
  return (
    <div
      style={{
        padding: "20px 40px",
        backgroundColor: "#3c3836",
        borderRadius: "8px",
        fontSize: "32px",
        fontWeight: "bold",
        color,
        border: "2px solid " + color,
        minWidth: "150px",
        textAlign: "center",
      }}>
      <div style={{ fontSize: "18px", opacity: 0.8, marginBottom: "10px" }}>
        {label}
      </div>
      <div>{value ?? "?"}</div>
    </div>
  )
}

function FibonacciSequence({ sequence, highlightIndex = -1 }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "700px",
      }}>
      {sequence.map((num, index) => (
        <div
          key={index}
          style={{
            padding: "15px 20px",
            backgroundColor: index === highlightIndex ? "#b8bb26" : "#3c3836",
            color: index === highlightIndex ? "#282828" : "#ebdbb2",
            borderRadius: "8px",
            fontSize: "24px",
            fontWeight: "bold",
            border: index === highlightIndex ? "3px solid #b8bb26" : "2px solid #504945",
            minWidth: "60px",
            textAlign: "center",
          }}>
          <div style={{ fontSize: "12px", opacity: 0.7 }}>F({index})</div>
          <div>{num}</div>
        </div>
      ))}
    </div>
  )
}

// ==================== REMOTION COMPONENTS ====================

export function GGTAnimation({ a = 48, b = 18, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateGGTSteps(a, b), [a, b])

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
        GGT (Euklid) - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Zählvariablen */}
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

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginBottom: 40,
        }}>
        <NumberDisplay label="a" value={currentStep.a} color="#83a598" />
        <NumberDisplay label="b" value={currentStep.b} color="#d3869b" />
        {currentStep.rest !== null && (
          <NumberDisplay label="rest" value={currentStep.rest} color="#fabd2f" />
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 500,
          color: "#ebdbb2",
        }}>
        {currentStep.description}
      </div>
    </AbsoluteFill>
  )
}

export function PrimzahlAnimation({ n = 17, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generatePrimzahlSteps(n), [n])

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
        Primzahltest - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Variablen */}
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

      <div style={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: 40 }}>
        <NumberDisplay label="n" value={currentStep.n} color="#83a598" />
        {currentStep.i !== null && (
          <NumberDisplay label="i (Teiler?)" value={currentStep.i} color="#fabd2f" />
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 500,
          color: currentStep.isPrime === false ? "#fb4934" : 
                 currentStep.isPrime === true ? "#b8bb26" : "#ebdbb2",
        }}>
        {currentStep.description}
      </div>

      {currentStep.isPrime !== null && (
        <div
          style={{
            marginTop: 30,
            fontSize: "48px",
            fontWeight: "bold",
            color: currentStep.isPrime ? "#b8bb26" : "#fb4934",
          }}>
          {currentStep.isPrime ? "✓ PRIM" : "✗ NICHT PRIM"}
        </div>
      )}
    </AbsoluteFill>
  )
}

export function FibonacciAnimation({ count = 8, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateFibonacciSteps(count), [count])

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
        Fibonacci - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Variablen */}
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

      <FibonacciSequence
        sequence={currentStep.sequence}
        highlightIndex={currentStep.i}
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

export function FakultaetAnimation({ n = 5, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generateFakultaetSteps(n), [n])

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
        Fakultät - Schritt {currentStepIndex + 1} / {steps.length}
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

      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <NumberDisplay label="n" value={currentStep.n} color="#83a598" />
        {currentStep.i !== null && (
          <NumberDisplay label="i" value={currentStep.i} color="#fabd2f" />
        )}
        {currentStep.result !== null && (
          <NumberDisplay label="result" value={currentStep.result} color="#b8bb26" />
        )}
      </div>

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

export function PotenzAnimation({ base = 2, exponent = 5, fps = 30 }) {
  const frame = useCurrentFrame()
  const framesPerStep = fps * 1.5

  const steps = useMemo(() => generatePotenzSteps(base, exponent), [base, exponent])

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
        Potenz - Schritt {currentStepIndex + 1} / {steps.length}
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

      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <NumberDisplay label="base" value={currentStep.base} color="#83a598" />
        <div style={{ fontSize: "48px", color: "#ebdbb2" }}>^</div>
        <NumberDisplay label="exponent" value={currentStep.exponent} color="#d3869b" />
        {currentStep.result !== null && (
          <>
            <div style={{ fontSize: "48px", color: "#ebdbb2" }}>=</div>
            <NumberDisplay label="result" value={currentStep.result} color="#b8bb26" />
          </>
        )}
      </div>

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

