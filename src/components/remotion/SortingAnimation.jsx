import { useMemo } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// ==================== HELPER FUNCTIONS ====================

// Generiere alle Schritte für Bubble Sort
export function generateBubbleSortSteps(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  steps.push({
    array: [...arr],
    compare: [],
    swapped: false,
    highlight: [],
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  });

  steps.push({
    array: [...arr],
    compare: [],
    swapped: false,
    highlight: [],
    description: "Array eingeben",
    mermaidNode: "Gib Liste ein",
    variables: { n },
  });

  steps.push({
    array: [...arr],
    compare: [],
    swapped: false,
    highlight: [],
    description: "Initialisiere: i = 0",
    mermaidNode: "Setze i auf 0",
    variables: { i: 0, n },
  });

  for (let i = 0; i < n - 1; i++) {
    // Outer loop check
    steps.push({
      array: [...arr],
      compare: [],
      swapped: false,
      highlight: [],
      description: `Prüfe: i=${i} < ${n - 1}?`,
      mermaidNode: "Ist i < Länge minus 1?",
      variables: { i, n },
    });

    // Initialize inner loop
    steps.push({
      array: [...arr],
      compare: [],
      swapped: false,
      highlight: [],
      description: `Starte innere Schleife: j = 0`,
      mermaidNode: "Setze j auf 0",
      variables: { i, j: 0 },
    });

    for (let j = 0; j < n - i - 1; j++) {
      // Inner loop check
      steps.push({
        array: [...arr],
        compare: [],
        swapped: false,
        highlight: [],
        description: `Prüfe: j=${j} < ${n - i - 1}?`,
        mermaidNode: "Ist j < Länge minus i minus 1?",
        variables: { i, j },
      });

      // Vergleichsschritt
      steps.push({
        array: [...arr],
        compare: [j, j + 1],
        swapped: false,
        highlight: [],
        description: `Vergleiche ${arr[j]} und ${arr[j + 1]}`,
        mermaidNode: "Ist Element an j > Element an j+1?",
        variables: { i, j },
      });

      if (arr[j] > arr[j + 1]) {
        // Tausch
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          compare: [j, j + 1],
          swapped: true,
          highlight: [j, j + 1],
          description: `Tausche ${arr[j]} und ${arr[j + 1]}`,
          mermaidNode: "Tausche Element an j mit Element an j+1",
          variables: { i, j },
        });
      }

      // Increment j
      steps.push({
        array: [...arr],
        compare: [],
        swapped: false,
        highlight: [],
        description: `j erhöhen: ${j} → ${j + 1}`,
        mermaidNode: "Erhöhe j um 1",
        variables: { i, j: j + 1 },
      });
    }

    // Inner loop exit check
    steps.push({
      array: [...arr],
      compare: [],
      swapped: false,
      highlight: Array.from({ length: i + 1 }, (_, idx) => n - 1 - idx),
      description: `Prüfe: j=${n - i - 1} < ${n - i - 1}? Nein`,
      mermaidNode: "Ist j < Länge minus i minus 1?",
      variables: { i, j: n - i - 1 },
    });

    // Increment i
    steps.push({
      array: [...arr],
      compare: [],
      swapped: false,
      highlight: Array.from({ length: i + 1 }, (_, idx) => n - 1 - idx),
      description: `i erhöhen: ${i} → ${i + 1}. Element ${arr[n - 1 - i]} sortiert`,
      mermaidNode: "Erhöhe i um 1",
      variables: { i: i + 1 },
    });
  }

  // Final outer loop check
  steps.push({
    array: [...arr],
    compare: [],
    swapped: false,
    highlight: Array.from({ length: n }, (_, i) => i),
    description: `Prüfe: i=${n - 1} < ${n - 1}? Nein - Fertig!`,
    mermaidNode: "Ist i < Länge minus 1?",
    variables: { i: n - 1 },
  });

  // Finale Ansicht
  steps.push({
    array: [...arr],
    compare: [],
    swapped: false,
    highlight: Array.from({ length: n }, (_, i) => i),
    description: "Array vollständig sortiert!",
    mermaidNode: "Ende - Liste sortiert",
    variables: {},
  });

  return steps;
}

// Generiere alle Schritte für Selection Sort
export function generateSelectionSortSteps(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: [],
    description: "Array wurde eingegeben",
    mermaidNode: "Input",
    variables: { n },
  });

  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: [],
    description: "Initialisiere äußere Schleife: i = 0",
    mermaidNode: "OuterInit",
    variables: { i: 0, n },
  });

  for (let i = 0; i < n - 1; i++) {
    // Outer loop check
    steps.push({
      array: [...arr],
      minIndex: -1,
      currentIndex: -1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Prüfe: i=${i} < ${n - 1}?`,
      mermaidNode: "OuterCheck",
      variables: { i, n },
    });

    let minIndex = i;

    // Initialize minIndex
    steps.push({
      array: [...arr],
      minIndex: i,
      currentIndex: i,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Setze minIndex = ${i}`,
      mermaidNode: "MinInit",
      variables: { i, minIndex: i },
    });

    // Initialize inner loop
    steps.push({
      array: [...arr],
      minIndex,
      currentIndex: i + 1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Starte innere Schleife: j = ${i + 1}`,
      mermaidNode: "InnerInit",
      variables: { i, j: i + 1, minIndex },
    });

    for (let j = i + 1; j < n; j++) {
      // Inner loop check
      steps.push({
        array: [...arr],
        minIndex,
        currentIndex: j,
        highlight: Array.from({ length: i }, (_, idx) => idx),
        description: `Prüfe: j=${j} < ${n}?`,
        mermaidNode: "InnerCheck",
        variables: { i, j, minIndex },
      });

      // Vergleichsschritt
      steps.push({
        array: [...arr],
        minIndex,
        currentIndex: j,
        highlight: Array.from({ length: i }, (_, idx) => idx),
        description: `Vergleiche ${arr[j]} mit aktuellem Minimum ${arr[minIndex]}`,
        mermaidNode: "Compare",
        variables: { i, j, minIndex },
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        steps.push({
          array: [...arr],
          minIndex,
          currentIndex: j,
          highlight: Array.from({ length: i }, (_, idx) => idx),
          description: `Neues Minimum gefunden: ${arr[minIndex]}`,
          mermaidNode: "UpdateMin",
          variables: { i, j, minIndex },
        });
      }

      // Increment j (happens always after comparison)
      steps.push({
        array: [...arr],
        minIndex,
        currentIndex: j,
        highlight: Array.from({ length: i }, (_, idx) => idx),
        description: `j erhöhen: ${j} → ${j + 1}`,
        mermaidNode: "InnerIncr",
        variables: { i, j: j + 1, minIndex },
      });
    }

    // Final j < Länge? check (when j == n, exit loop)
    steps.push({
      array: [...arr],
      minIndex,
      currentIndex: -1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Prüfe: j=${n} < ${n}? Nein - Innere Schleife beendet`,
      mermaidNode: "InnerCheck",
      variables: { i, j: n, minIndex },
    });

    // Swap check
    steps.push({
      array: [...arr],
      minIndex,
      currentIndex: -1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Prüfe ob Tausch nötig: i=${i} != minIndex=${minIndex}?`,
      mermaidNode: "SwapCheck",
      variables: { i, minIndex },
    });

    // Tausche oder nicht
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      steps.push({
        array: [...arr],
        minIndex: i,
        currentIndex: minIndex,
        highlight: Array.from({ length: i + 1 }, (_, idx) => idx),
        description: `Tausche: Position ${i} ↔ Position ${minIndex}`,
        mermaidNode: "Swap",
        variables: { i, minIndex },
      });
    }

    // Increment i
    steps.push({
      array: [...arr],
      minIndex: -1,
      currentIndex: -1,
      highlight: Array.from({ length: i + 1 }, (_, idx) => idx),
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "OuterIncr",
      variables: { i: i + 1 },
    });
  }

  // Final outer loop check
  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: Array.from({ length: n }, (_, i) => i),
    description: `Prüfe: i=${n - 1} < ${n - 1}? Nein - Fertig!`,
    mermaidNode: "OuterCheck",
    variables: { i: n - 1 },
  });

  // Finale Ansicht
  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: [],
    description: "Array wurde eingegeben",
    mermaidNode: "Gib Liste ein",
    variables: { n },
  });

  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: [],
    description: "Initialisiere äußere Schleife: i = 0",
    mermaidNode: "Setze i auf 0",
    variables: { i: 0, n },
  });

  for (let i = 0; i < n - 1; i++) {
    // Outer loop check
    steps.push({
      array: [...arr],
      minIndex: -1,
      currentIndex: -1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Prüfe: i=${i} < ${n - 1}?`,
      mermaidNode: "Ist i < Länge minus 1?",
      variables: { i, n },
    });

    let minIndex = i;

    // Initialize minIndex
    steps.push({
      array: [...arr],
      minIndex: i,
      currentIndex: i,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Setze minIndex = ${i}`,
      mermaidNode: "Setze Minimum-Index auf i",
      variables: { i, minIndex: i },
    });

    // Initialize inner loop
    steps.push({
      array: [...arr],
      minIndex,
      currentIndex: i + 1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Starte innere Schleife: j = ${i + 1}`,
      mermaidNode: "Setze j auf i plus 1",
      variables: { i, j: i + 1, minIndex },
    });

    for (let j = i + 1; j < n; j++) {
      // Inner loop check
      steps.push({
        array: [...arr],
        minIndex,
        currentIndex: j,
        highlight: Array.from({ length: i }, (_, idx) => idx),
        description: `Prüfe: j=${j} < ${n}?`,
        mermaidNode: "Ist j < Länge?",
        variables: { i, j, minIndex },
      });

      // Vergleichsschritt
      steps.push({
        array: [...arr],
        minIndex,
        currentIndex: j,
        highlight: Array.from({ length: i }, (_, idx) => idx),
        description: `Vergleiche ${arr[j]} mit aktuellem Minimum ${arr[minIndex]}`,
        mermaidNode: "Ist Element an j < Element an Minimum-Index?",
        variables: { i, j, minIndex },
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        steps.push({
          array: [...arr],
          minIndex,
          currentIndex: j,
          highlight: Array.from({ length: i }, (_, idx) => idx),
          description: `Neues Minimum gefunden: ${arr[minIndex]}`,
          mermaidNode: "Setze Minimum-Index auf j",
          variables: { i, j, minIndex },
        });
      }

      // Increment j (happens always after comparison)
      steps.push({
        array: [...arr],
        minIndex,
        currentIndex: j,
        highlight: Array.from({ length: i }, (_, idx) => idx),
        description: `j erhöhen: ${j} → ${j + 1}`,
        mermaidNode: "Erhöhe j um 1",
        variables: { i, j: j + 1, minIndex },
      });
    }

    // Final j < Länge? check (when j == n, exit loop)
    steps.push({
      array: [...arr],
      minIndex,
      currentIndex: -1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Prüfe: j=${n} < ${n}? Nein - Innere Schleife beendet`,
      mermaidNode: "Ist j < Länge?",
      variables: { i, j: n, minIndex },
    });

    // Swap check
    steps.push({
      array: [...arr],
      minIndex,
      currentIndex: -1,
      highlight: Array.from({ length: i }, (_, idx) => idx),
      description: `Prüfe ob Tausch nötig: i=${i} != minIndex=${minIndex}?`,
      mermaidNode: "Ist i ≠ Minimum-Index?",
      variables: { i, minIndex },
    });

    // Tausche oder nicht
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      steps.push({
        array: [...arr],
        minIndex: i,
        currentIndex: minIndex,
        highlight: Array.from({ length: i + 1 }, (_, idx) => idx),
        description: `Tausche: Position ${i} ↔ Position ${minIndex}`,
        mermaidNode: "Tausche Element an i mit Element an Minimum-Index",
        variables: { i, minIndex },
      });
    }

    // Increment i
    steps.push({
      array: [...arr],
      minIndex: -1,
      currentIndex: -1,
      highlight: Array.from({ length: i + 1 }, (_, idx) => idx),
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "Erhöhe i um 1",
      variables: { i: i + 1 },
    });
  }

  // Final outer loop check
  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: Array.from({ length: n }, (_, i) => i),
    description: `Prüfe: i=${n - 1} < ${n - 1}? Nein - Fertig!`,
    mermaidNode: "Ist i < Länge minus 1?",
    variables: { i: n - 1 },
  });

  // Finale Ansicht
  steps.push({
    array: [...arr],
    minIndex: -1,
    currentIndex: -1,
    highlight: Array.from({ length: n }, (_, i) => i),
    description: "Array vollständig sortiert!",
    mermaidNode: "Ende - Liste sortiert",
    variables: {},
  });

  return steps;
}

// Generiere alle Schritte für Insertion Sort
export function generateInsertionSortSteps(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  steps.push({
    array: [...arr],
    current: -1,
    sorted: [0],
    comparing: [],
    description: "Start",
    mermaidNode: "Start",
    variables: {},
  });

  steps.push({
    array: [...arr],
    current: -1,
    sorted: [0],
    comparing: [],
    description: "Array eingeben",
    mermaidNode: "Gib Liste ein",
    variables: { n },
  });

  steps.push({
    array: [...arr],
    current: -1,
    sorted: [0],
    comparing: [],
    description: "Initialisiere: i = 1 (erstes Element als sortiert)",
    mermaidNode: "Setze i auf 1",
    variables: { i: 1, n },
  });

  for (let i = 1; i < n; i++) {
    // Outer loop check
    steps.push({
      array: [...arr],
      current: i,
      sorted: Array.from({ length: i }, (_, idx) => idx),
      comparing: [],
      description: `Prüfe: i=${i} < ${n}?`,
      mermaidNode: "Ist i < Länge?",
      variables: { i, n },
    });

    const key = arr[i];

    steps.push({
      array: [...arr],
      current: i,
      sorted: Array.from({ length: i }, (_, idx) => idx),
      comparing: [],
      description: `Speichere key = ${key} (Array[${i}])`,
      mermaidNode: "Merke Element an Position i als Schlüssel",
      variables: { i, key },
    });

    steps.push({
      array: [...arr],
      current: i,
      sorted: Array.from({ length: i }, (_, idx) => idx),
      comparing: [],
      description: `Setze j = ${i - 1}`,
      mermaidNode: "Setze j auf i minus 1",
      variables: { i, j: i - 1, key },
    });

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      // Inner loop check
      steps.push({
        array: [...arr],
        current: j + 1,
        sorted: Array.from({ length: i }, (_, idx) => idx),
        comparing: [j, j + 1],
        description: `Prüfe: j=${j} >= 0 UND Array[${j}]=${arr[j]} > key=${key}?`,
        mermaidNode: "Ist j ≥ 0 UND Element an j > Schlüssel?",
        variables: { i, j, key },
      });

      // Shift
      steps.push({
        array: [...arr],
        current: j + 1,
        sorted: Array.from({ length: i }, (_, idx) => idx),
        comparing: [j, j + 1],
        description: `Verschiebe ${arr[j]} nach rechts`,
        mermaidNode: "Verschiebe Element an j nach rechts",
        variables: { i, j, key },
      });

      arr[j + 1] = arr[j];

      steps.push({
        array: [...arr],
        current: j,
        sorted: Array.from({ length: i }, (_, idx) => idx),
        comparing: [j],
        description: `j verringern: ${j} → ${j - 1}`,
        mermaidNode: "Verringere j um 1",
        variables: { i, j: j - 1, key },
      });

      j--;
    }

    // Final check (loop exit)
    const exitReason = j < 0 ? "j < 0" : `Array[${j}]=${arr[j]} <= key=${key}`;
    steps.push({
      array: [...arr],
      current: j + 1,
      sorted: Array.from({ length: i }, (_, idx) => idx),
      comparing: j >= 0 ? [j] : [],
      description: `Prüfe: ${exitReason}? Nein - Schleife beendet`,
      mermaidNode: "Ist j ≥ 0 UND Element an j > Schlüssel?",
      variables: { i, j, key },
    });

    // Insert key
    arr[j + 1] = key;

    steps.push({
      array: [...arr],
      current: j + 1,
      sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
      comparing: [],
      description: `Füge key=${key} an Position ${j + 1} ein`,
      mermaidNode: "Setze Element an Position j+1 auf Schlüssel",
      variables: { i, j: j + 1, key },
    });

    // Increment i
    steps.push({
      array: [...arr],
      current: -1,
      sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
      comparing: [],
      description: `i erhöhen: ${i} → ${i + 1}`,
      mermaidNode: "Erhöhe i um 1",
      variables: { i: i + 1 },
    });
  }

  // Final outer loop check
  steps.push({
    array: [...arr],
    current: -1,
    sorted: Array.from({ length: n }, (_, i) => i),
    comparing: [],
    description: `Prüfe: i=${n} < ${n}? Nein - Fertig!`,
    mermaidNode: "Ist i < Länge?",
    variables: { i: n },
  });

  // Finale Ansicht
  steps.push({
    array: [...arr],
    current: -1,
    sorted: Array.from({ length: n }, (_, i) => i),
    comparing: [],
    description: "Array vollständig sortiert!",
    mermaidNode: "Ende - Liste sortiert",
    variables: {},
  });

  return steps;
}

// ==================== ARRAY VISUALISIERUNG ====================

function ArrayBars({ array, highlightIndices = [], compareIndices = [] }) {
  const maxValue = Math.max(...array);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "250px",
        gap: "10px",
      }}
    >
      {array.map((value, index) => {
        const isHighlighted = highlightIndices.includes(index);
        const isComparing = compareIndices.includes(index);

        let backgroundColor = "#2196F3"; // Blau = Unsortiert
        if (isHighlighted) backgroundColor = "#4CAF50"; // Grün = Sortiert
        if (isComparing) backgroundColor = "#FFC107"; // Gelb = Vergleich

        return (
          <div
            key={`${index}-${value}`}
            style={{
              width: "50px",
              height: `${(value / maxValue) * 200}px`,
              minHeight: "30px",
              backgroundColor,
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}

// ==================== REMOTION COMPONENTS ====================

export function BubbleSortAnimation({ array = [5, 2, 8, 1, 9], fps = 30 }) {
  const frame = useCurrentFrame();
  const framesPerStep = fps * 1.5; // 1.5 Sekunden pro Schritt (langsamer)

  const steps = useMemo(() => generateBubbleSortSteps(array), [array]);

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
        Bubble Sort - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Zählvariablen anzeigen */}
      {currentStep.variables &&
        Object.keys(currentStep.variables).length > 0 && (
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

      <ArrayBars
        array={currentStep.array}
        highlightIndices={currentStep.highlight}
        compareIndices={currentStep.compare}
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

export function SelectionSortAnimation({ array = [5, 2, 8, 1, 9], fps = 30 }) {
  const frame = useCurrentFrame();
  const framesPerStep = fps * 1.5; // 1.5 Sekunden pro Schritt

  const steps = useMemo(() => generateSelectionSortSteps(array), [array]);

  const currentStepIndex = Math.min(
    Math.floor(frame / framesPerStep),
    steps.length - 1,
  );

  const currentStep = steps[currentStepIndex];

  // Mark minIndex and currentIndex for highlighting
  const compareIndices = [];
  if (currentStep.minIndex >= 0) compareIndices.push(currentStep.minIndex);
  if (
    currentStep.currentIndex >= 0 &&
    currentStep.currentIndex !== currentStep.minIndex
  ) {
    compareIndices.push(currentStep.currentIndex);
  }

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
        Selection Sort - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Zählvariablen anzeigen */}
      {currentStep.variables && (
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

      <ArrayBars
        array={currentStep.array}
        highlightIndices={currentStep.highlight}
        compareIndices={compareIndices}
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

export function InsertionSortAnimation({ array = [5, 2, 8, 1, 9], fps = 30 }) {
  const frame = useCurrentFrame();
  const framesPerStep = fps * 1.5; // 1.5 Sekunden pro Schritt

  const steps = useMemo(() => generateInsertionSortSteps(array), [array]);

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
        Insertion Sort - Schritt {currentStepIndex + 1} / {steps.length}
      </h2>

      {/* Zählvariablen anzeigen */}
      {currentStep.variables &&
        Object.keys(currentStep.variables).length > 0 && (
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

      <ArrayBars
        array={currentStep.array}
        highlightIndices={currentStep.sorted}
        compareIndices={currentStep.comparing}
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
