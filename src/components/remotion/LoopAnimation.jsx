import { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// ==================== HELPER FUNCTIONS ====================

// Generiere Schritte für Summe 1-10
export function generateSumme1Bis10Steps() {
  const steps = [];
  let summe = 0;
  let zahl = 1;

  steps.push({
    summe: 0,
    zahl: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  });

  steps.push({
    summe: 0,
    zahl: null,
    description: "Setze die Summe auf 0",
    mermaidNode: "Setze Summe auf 0",
    variables: { summe: 0 },
  });

  steps.push({
    summe: 0,
    zahl: 1,
    description: "Beginne mit der Zahl 1",
    mermaidNode: "Setze Zahl auf 1",
    variables: { zahl: 1 },
  });

  while (zahl <= 10) {
    steps.push({
      summe,
      zahl,
      description: `Ist ${zahl} kleiner oder gleich 10? Ja`,
      mermaidNode: "Ist Zahl ≤ 10?",
      variables: { summe, zahl },
    });

    summe += zahl;

    steps.push({
      summe,
      zahl,
      description: `Addiere ${zahl} zur Summe: ${summe - zahl} + ${zahl} = ${summe}`,
      mermaidNode: "Addiere Zahl zu Summe",
      variables: { summe, zahl },
    });

    steps.push({
      summe,
      zahl,
      description: `Gehe zur nächsten Zahl: ${zahl + 1}`,
      mermaidNode: "Erhöhe Zahl um 1",
      variables: { zahl: zahl + 1 },
    });

    zahl++;
  }

  steps.push({
    summe,
    zahl,
    description: `Ist ${zahl} kleiner oder gleich 10? Nein`,
    mermaidNode: "Ist Zahl ≤ 10?",
    variables: { summe, zahl },
  });

  steps.push({
    summe,
    zahl,
    description: `Das Ergebnis ist: ${summe}`,
    mermaidNode: "Gib Summe aus",
    variables: { summe },
  });

  steps.push({
    summe,
    zahl,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  });

  return steps;
}

// Generiere Schritte für Countdown
export function generateCountdownSteps() {
  const steps = [];
  let zaehler = 10;

  steps.push({
    zaehler: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  });

  steps.push({
    zaehler: 10,
    description: "Setze den Zähler auf 10",
    mermaidNode: "Setze Zähler auf 10",
    variables: { zaehler: 10 },
  });

  while (zaehler > 0) {
    steps.push({
      zaehler,
      description: `Ist ${zaehler} grösser als 0? Ja`,
      mermaidNode: "Ist Zähler > 0?",
      variables: {},
    });

    steps.push({
      zaehler,
      description: `Gib die Zahl ${zaehler} aus`,
      mermaidNode: "Gib Zähler aus",
      variables: {},
    });

    steps.push({
      zaehler,
      description: `Zähle einen Schritt runter zu ${zaehler - 1}`,
      mermaidNode: "Verringere Zähler um 1",
      variables: { zaehler: zaehler - 1 },
    });

    zaehler--;
  }

  steps.push({
    zaehler,
    description: `Ist ${zaehler} grösser als 0? Nein`,
    mermaidNode: "Ist Zähler > 0?",
    variables: {},
  });

  steps.push({
    zaehler,
    description: "Gib 'Start!' aus",
    mermaidNode: "Gib 'Start!' aus",
    variables: {},
  });

  while (zaehler > 0) {
    steps.push({
      zaehler,
      description: `Ist ${zaehler} größer als 0? Ja`,
      mermaidNode: "zaehler > 0?",
      variables: {},
    });

    steps.push({
      zaehler,
      description: `Gib die Zahl ${zaehler} aus`,
      mermaidNode: "Ausgabe: zaehler",
      variables: {},
    });

    steps.push({
      zaehler,
      description: `Zähle einen Schritt runter zu ${zaehler - 1}`,
      mermaidNode: "zaehler = zaehler - 1",
      variables: { zaehler: zaehler - 1 },
    });

    zaehler--;
  }

  steps.push({
    zaehler,
    description: `Ist ${zaehler} größer als 0? Nein`,
    mermaidNode: "zaehler > 0?",
    variables: {},
  });

  steps.push({
    zaehler,
    description: "Gib 'Start!' aus",
    mermaidNode: "Ausgabe: Start!",
    variables: {},
  });

  steps.push({
    zaehler,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  });

  return steps;
}

// Generiere Schritte für Maximum aus Liste
export function generateMaxListeSteps(array) {
  const steps = [];
  const n = array.length;
  let max = array[0];
  let i = 1;

  steps.push({
    array,
    max: null,
    i: null,
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  });

  steps.push({
    array,
    max: null,
    i: null,
    description: `Gegeben ist die Liste: [${array.join(", ")}]`,
    mermaidNode: "Liste eingeben",
    variables: { n },
  });

  steps.push({
    array,
    max: array[0],
    i: 0,
    description: `Nehme das erste Element (${array[0]}) als bisheriges Maximum`,
    mermaidNode: "Setze Maximum auf erstes Element",
    variables: { max: array[0] },
  });

  i = 1;

  while (i < n) {
    steps.push({
      array,
      max,
      i,
      description: `Noch nicht alle Elemente angeschaut`,
      mermaidNode: "Noch Elemente vorhanden?",
      variables: {},
    });

    steps.push({
      array,
      max,
      i,
      description: `Schaue das nächste Element an: ${array[i]}`,
      mermaidNode: "Gehe zum nächsten Element",
      variables: { current: array[i] },
    });

    const currentElement = array[i];
    const isLarger = currentElement > max;

    steps.push({
      array,
      max,
      i,
      description: `Ist ${currentElement} grösser als das bisherige Maximum (${max})?`,
      mermaidNode: "Ist Element > Maximum?",
      variables: { current: currentElement, max },
    });

    if (isLarger) {
      max = currentElement;
      steps.push({
        array,
        max,
        i,
        description: `Ja! ${max} ist das neue Maximum`,
        mermaidNode: "Setze Maximum auf Element",
        variables: { max },
      });
    }

    i++;
  }

  steps.push({
    array,
    max,
    i,
    description: `Alle Elemente wurden angeschaut`,
    mermaidNode: "Noch Elemente vorhanden?",
    variables: {},
  });

  steps.push({
    array,
    max,
    i,
    description: `Das Maximum ist: ${max}`,
    mermaidNode: "Gib Maximum aus",
    variables: { max },
  });

  steps.push({
    array,
    max,
    i,
    description: "Ende",
    mermaidNode: "Ende",
    variables: {},
  });

  return steps;
}

// ==================== VISUALISIERUNG ====================

function SummeVisualization({ summe, zahl }) {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "30px 50px",
          backgroundColor: "#3c3836",
          borderRadius: "12px",
          border: "4px solid #b8bb26",
        }}
      >
        <div
          style={{ fontSize: "24px", color: "#83a598", marginBottom: "10px" }}
        >
          Summe:
        </div>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "#b8bb26" }}>
          {summe}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {numbers.map((num) => (
          <div
            key={num}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor:
                zahl !== null && num <= zahl
                  ? "#4CAF50"
                  : zahl !== null && num === zahl + 1
                    ? "#FFC107"
                    : "#3c3836",
              border: `3px solid ${zahl !== null && num === zahl ? "#FFC107" : "#504945"}`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ebdbb2",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function CountdownVisualization({ zaehler }) {
  return (
    <div
      style={{
        padding: "60px 80px",
        backgroundColor: "#3c3836",
        borderRadius: "20px",
        border: "6px solid #fabd2f",
      }}
    >
      <div
        style={{
          fontSize: "120px",
          fontWeight: "bold",
          color: zaehler > 0 ? "#fabd2f" : "#b8bb26",
          textAlign: "center",
        }}
      >
        {zaehler !== null ? (zaehler > 0 ? zaehler : "START!") : "?"}
      </div>
    </div>
  );
}

function MaxListeVisualization({ array, max, i }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "30px 50px",
          backgroundColor: "#3c3836",
          borderRadius: "12px",
          border: "4px solid #fb4934",
        }}
      >
        <div
          style={{ fontSize: "24px", color: "#83a598", marginBottom: "10px" }}
        >
          Aktuelles Maximum:
        </div>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "#fb4934" }}>
          {max !== null ? max : "?"}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {array.map((num, index) => (
          <div
            key={index}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor:
                i !== null && index < i
                  ? "#4CAF50"
                  : i !== null && index === i
                    ? "#FFC107"
                    : "#3c3836",
              border: `3px solid ${i !== null && index === i ? "#FFC107" : "#504945"}`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ebdbb2",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== REMOTION COMPONENTS ====================

export function Summe1Bis10Animation({ fps = 30 }) {
  const frame = useCurrentFrame();
  const framesPerStep = fps * 1.5;

  const steps = useMemo(() => generateSumme1Bis10Steps(), []);

  const currentStepIndex = Math.min(
    Math.floor(frame / framesPerStep),
    steps.length - 1,
  );

  const currentStep = steps[currentStepIndex];

  return (
    <AbsoluteFill
      style={{
        background: "#282828",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
          color: "#fabd2f",
          fontSize: "28px",
        }}
      >
        Summe 1-10 - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {currentStep.variables &&
        Object.keys(currentStep.variables).length > 0 && (
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
            }}
          >
            {Object.entries(currentStep.variables).map(([key, value]) => (
              <div key={key}>
                <span style={{ color: "#83a598", fontWeight: "bold" }}>
                  {key}
                </span>
                {" = "}
                <span style={{ color: "#b8bb26", fontWeight: "bold" }}>
                  {value}
                </span>
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
        }}
      >
        {currentStep.description}
      </div>
    </AbsoluteFill>
  );
}

export function CountdownAnimation({ fps = 30 }) {
  const frame = useCurrentFrame();
  const framesPerStep = fps * 1.5;

  const steps = useMemo(() => generateCountdownSteps(), []);

  const currentStepIndex = Math.min(
    Math.floor(frame / framesPerStep),
    steps.length - 1,
  );

  const currentStep = steps[currentStepIndex];

  return (
    <AbsoluteFill
      style={{
        background: "#282828",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
          color: "#fabd2f",
          fontSize: "28px",
        }}
      >
        Countdown - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {currentStep.variables &&
        Object.keys(currentStep.variables).length > 0 && (
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
            }}
          >
            {Object.entries(currentStep.variables).map(([key, value]) => (
              <div key={key}>
                <span style={{ color: "#83a598", fontWeight: "bold" }}>
                  {key}
                </span>
                {" = "}
                <span style={{ color: "#b8bb26", fontWeight: "bold" }}>
                  {value}
                </span>
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
        }}
      >
        {currentStep.description}
      </div>
    </AbsoluteFill>
  );
}

export function MaxListeAnimation({ array = [7, 3, 9, 2, 8], fps = 30 }) {
  const frame = useCurrentFrame();
  const framesPerStep = fps * 1.5;

  const steps = useMemo(() => generateMaxListeSteps(array), [array]);

  const currentStepIndex = Math.min(
    Math.floor(frame / framesPerStep),
    steps.length - 1,
  );

  const currentStep = steps[currentStepIndex];

  return (
    <AbsoluteFill
      style={{
        background: "#282828",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
          color: "#fabd2f",
          fontSize: "28px",
        }}
      >
        Maximum finden - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {currentStep.variables &&
        Object.keys(currentStep.variables).length > 0 && (
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
            }}
          >
            {Object.entries(currentStep.variables).map(([key, value]) => (
              <div key={key}>
                <span style={{ color: "#83a598", fontWeight: "bold" }}>
                  {key}
                </span>
                {" = "}
                <span style={{ color: "#b8bb26", fontWeight: "bold" }}>
                  {value}
                </span>
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
        }}
      >
        {currentStep.description}
      </div>
    </AbsoluteFill>
  );
}
