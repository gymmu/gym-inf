import { useState } from "react"
import Section from "@components/Section"
import SolutionBlock from "@components/SolutionBlock"
import SimpleSplitView from "@components/algorithm/SimpleSplitView"
import {
  SelectionSortAnimation,
  InsertionSortAnimation,
  BubbleSortAnimation,
  generateSelectionSortSteps,
  generateInsertionSortSteps,
  generateBubbleSortSteps,
} from "@components/remotion/SortingAnimation"

export default function FmsAlgorithmenSortieren() {
  const [selectionArray, setSelectionArray] = useState([7, 3, 9, 2, 5])
  const [insertionArray, setInsertionArray] = useState([4, 8, 2, 6, 1])
  const [bubbleArray, setBubbleArray] = useState([5, 2, 8, 1, 9])

  // Flussdiagramme
  const selectionSortChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Array eingeben]
    Input --> OuterInit["i = 0"]
    OuterInit --> OuterCheck{"i &lt; Länge - 1?"}
    OuterCheck -->|Nein| End([Ende - Array sortiert])
    OuterCheck -->|Ja| MinInit["minIndex = i"]
    MinInit --> InnerInit["j = i + 1"]
    InnerInit --> InnerCheck{"j &lt; Länge?"}
    InnerCheck -->|Nein| SwapCheck{"i != minIndex?"}
    InnerCheck -->|Ja| Compare{"Array[j] &lt; Array[minIndex]?"}
    Compare -->|Ja| UpdateMin["minIndex = j"]
    Compare -->|Nein| InnerIncr["j = j + 1"]
    UpdateMin --> InnerIncr
    InnerIncr --> InnerCheck
    SwapCheck -->|Ja| Swap["Tausche Array[i] mit Array[minIndex]"]
    SwapCheck -->|Nein| OuterIncr["i = i + 1"]
    Swap --> OuterIncr
    OuterIncr --> OuterCheck
  `

  const insertionSortChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Array eingeben]
    Input --> OuterInit["i = 1"]
    OuterInit --> OuterCheck{"i &lt; Länge?"}
    OuterCheck -->|Nein| End([Ende - Array sortiert])
    OuterCheck -->|Ja| Key["key = Array[i]"]
    Key --> JInit["j = i - 1"]
    JInit --> InnerCheck{"j &gt;= 0 UND<br/>Array[j] &gt; key?"}
    InnerCheck -->|Nein| Insert["Array[j+1] = key"]
    InnerCheck -->|Ja| Shift["Array[j+1] = Array[j]"]
    Shift --> JDecr["j = j - 1"]
    JDecr --> InnerCheck
    Insert --> OuterIncr["i = i + 1"]
    OuterIncr --> OuterCheck
  `

  const bubbleSortChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Array eingeben]
    Input --> OuterInit["i = 0"]
    OuterInit --> OuterCheck{"i &lt; Länge - 1?"}
    OuterCheck -->|Nein| End([Ende - Array sortiert])
    OuterCheck -->|Ja| InnerInit["j = 0"]
    InnerInit --> InnerCheck{"j &lt; Länge - i - 1?"}
    InnerCheck -->|Nein| OuterIncr["i = i + 1"]
    InnerCheck -->|Ja| Compare{"Array[j] &gt; Array[j+1]?"}
    Compare -->|Ja| Swap["Tausche Array[j] mit Array[j+1]"]
    Compare -->|Nein| InnerIncr["j = j + 1"]
    Swap --> InnerIncr
    InnerIncr --> InnerCheck
    OuterIncr --> OuterCheck
  `

  // Berechne Schritte
  const selectionSteps = generateSelectionSortSteps(selectionArray)
  const insertionSteps = generateInsertionSortSteps(insertionArray)
  const bubbleSteps = generateBubbleSortSteps(bubbleArray)

  // Schritt-Beschreibungen extrahieren
  const selectionDescriptions = selectionSteps.map((s) => s.description)
  const insertionDescriptions = insertionSteps.map((s) => s.description)
  const bubbleDescriptions = bubbleSteps.map((s) => s.description)

  return (
    <>
      <section>
        <h2>Sortieralgorithmen</h2>
        <p>
          Sortieren ist eine der häufigsten Aufgaben in der Informatik. Ein
          sortiertes Array ermöglicht schnelleres Suchen und macht Daten
          übersichtlicher. Wir schauen uns drei grundlegende Sortieralgorithmen
          an, vom einfachsten zum komplexesten:
        </p>
        <ol>
          <li>
            <strong>Selection Sort</strong> - Am einfachsten zu verstehen
          </li>
          <li>
            <strong>Insertion Sort</strong> - Intuitiv wie Kartensortieren
          </li>
          <li>
            <strong>Bubble Sort</strong> - Klassiker, aber etwas abstrakter
          </li>
        </ol>
        <p>
          Alle drei haben eine ähnliche Geschwindigkeit (O(n²)), sind aber
          unterschiedlich in ihrer Herangehensweise.
        </p>
      </section>

      <Section>
        <h2>1. Selection Sort (Auswahl-Sortierung)</h2>
        <p>
          <strong>Selection Sort</strong> ist der einfachste Sortieralgorithmus
          zu verstehen. Die Idee ist simpel:
        </p>
        <ol>
          <li>Suche das <strong>kleinste Element</strong> im Array</li>
          <li>Setze es an die <strong>erste Position</strong></li>
          <li>Suche das <strong>zweitkleinste Element</strong></li>
          <li>Setze es an die <strong>zweite Position</strong></li>
          <li>... und so weiter</li>
        </ol>

        <h3>Visualisierung</h3>
        <p>
          <strong>Links:</strong> Flussdiagramm des Algorithmus
          <br />
          <strong>Rechts:</strong> Animation mit Schritt-Beschreibung
          <br />
          <em>
            Tipp: Nutzen Sie die Player-Controls um Schritt für Schritt
            durchzugehen!
          </em>
        </p>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Eigenes Array (Zahlen mit Komma getrennt):</strong>
            <br />
            <input
              type="text"
              defaultValue={selectionArray.join(", ")}
              onBlur={(e) => {
                const newArray = e.target.value
                  .split(",")
                  .map((n) => parseInt(n.trim()))
                  .filter((n) => !isNaN(n) && n > 0 && n <= 20)
                if (newArray.length >= 3 && newArray.length <= 10) {
                  setSelectionArray(newArray)
                } else {
                  alert("Bitte 3-10 Zahlen zwischen 1 und 20 eingeben!")
                }
              }}
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>

        <SimpleSplitView
          component={SelectionSortAnimation}
          inputProps={{ array: selectionArray, fps: 30 }}
          flowchart={selectionSortChart}
          flowchartId="selection-sort"
          totalSteps={selectionSteps.length}
          stepDescriptions={selectionDescriptions}
          getNodeId={(step) => selectionSteps[step]?.mermaidNode}
          fps={30}
        />

        <h3>Eigenschaften von Selection Sort</h3>
        <ul>
          <li>
            ✅ <strong>Einfach zu verstehen</strong> - "Finde das Minimum"
          </li>
          <li>
            ✅ <strong>Wenige Tauschoperationen</strong> - Maximal n-1
          </li>
          <li>
            ❌ <strong>Langsam</strong> - O(n²) Vergleiche
          </li>
          <li>
            ❌ <strong>Nicht stabil</strong> - Gleiche Elemente können
            Reihenfolge ändern
          </li>
        </ul>
      </Section>

      <Section classes="exercise">
        <h3>Übung 1: Selection Sort</h3>
        <p>
          Sortieren Sie das Array [9, 4, 7, 2] mit Selection Sort. Geben Sie
          für jeden Durchlauf an, welches Element als Minimum gefunden wird.
        </p>
        <SolutionBlock taskId="selection-sort-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ol>
            <li>
              <strong>Durchlauf 1:</strong> Suche Minimum in [9, 4, 7, 2] →
              Minimum ist 2 (Index 3) → Tausche mit Position 0 → [
              <strong>2</strong>, 4, 7, 9]
            </li>
            <li>
              <strong>Durchlauf 2:</strong> Suche Minimum in [4, 7, 9] →
              Minimum ist 4 (Index 1) → Bereits richtig → [2,{" "}
              <strong>4</strong>, 7, 9]
            </li>
            <li>
              <strong>Durchlauf 3:</strong> Suche Minimum in [7, 9] → Minimum
              ist 7 → Bereits richtig → [2, 4, <strong>7</strong>, 9]
            </li>
            <li>
              <strong>Fertig!</strong> → [2, 4, 7, 9]
            </li>
          </ol>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>2. Insertion Sort (Einfüge-Sortierung)</h2>
        <p>
          <strong>Insertion Sort</strong> funktioniert wie das Sortieren von
          Spielkarten auf der Hand:
        </p>
        <ol>
          <li>Das erste Element ist "sortiert"</li>
          <li>Nimm das nächste Element</li>
          <li>
            Füge es an der <strong>richtigen Stelle</strong> im sortierten Teil
            ein
          </li>
          <li>Verschiebe größere Elemente nach rechts</li>
          <li>Wiederhole für alle Elemente</li>
        </ol>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Eigenes Array:</strong>
            <br />
            <input
              type="text"
              defaultValue={insertionArray.join(", ")}
              onBlur={(e) => {
                const newArray = e.target.value
                  .split(",")
                  .map((n) => parseInt(n.trim()))
                  .filter((n) => !isNaN(n) && n > 0 && n <= 20)
                if (newArray.length >= 3 && newArray.length <= 10) {
                  setInsertionArray(newArray)
                } else {
                  alert("Bitte 3-10 Zahlen zwischen 1 und 20 eingeben!")
                }
              }}
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>

        <SimpleSplitView
          component={InsertionSortAnimation}
          inputProps={{ array: insertionArray, fps: 30 }}
          flowchart={insertionSortChart}
          flowchartId="insertion-sort"
          totalSteps={insertionSteps.length}
          stepDescriptions={insertionDescriptions}
          getNodeId={(step) => insertionSteps[step]?.mermaidNode}
          fps={30}
        />

        <h3>Eigenschaften von Insertion Sort</h3>
        <ul>
          <li>
            ✅ <strong>Intuitiv</strong> - Jeder kennt das Prinzip von Karten
          </li>
          <li>
            ✅ <strong>Effizient bei fast sortierten Daten</strong> - Kann O(n)
            erreichen
          </li>
          <li>
            ✅ <strong>Stabil</strong> - Gleiche Elemente bleiben in
            Reihenfolge
          </li>
          <li>
            ✅ <strong>In-Place</strong> - Benötigt keinen extra Speicher
          </li>
          <li>
            ❌ <strong>Langsam bei umgekehrt sortierten Daten</strong> - O(n²)
          </li>
        </ul>
      </Section>

      <Section classes="exercise">
        <h3>Übung 2: Insertion Sort</h3>
        <p>
          Sortieren Sie das Array [5, 2, 8, 3] mit Insertion Sort. Beschreiben
          Sie für jedes eingefügte Element den Vorgang.
        </p>
        <SolutionBlock taskId="insertion-sort-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ol>
            <li>
              Start: [<strong>5</strong>, 2, 8, 3] - Erstes Element als
              sortiert
            </li>
            <li>
              <strong>Füge 2 ein:</strong> 2 &lt; 5 → Verschiebe 5 rechts →
              Füge 2 vorne ein → [<strong>2, 5</strong>, 8, 3]
            </li>
            <li>
              <strong>Füge 8 ein:</strong> 8 &gt; 5 → Keine Verschiebung → [
              <strong>2, 5, 8</strong>, 3]
            </li>
            <li>
              <strong>Füge 3 ein:</strong> 3 &gt; 2 aber 3 &lt; 5 → Verschiebe
              8 und 5 → Füge 3 nach 2 ein → [<strong>2, 3, 5, 8</strong>]
            </li>
          </ol>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>3. Bubble Sort (Blasen-Sortierung)</h2>
        <p>
          <strong>Bubble Sort</strong> vergleicht benachbarte Elemente und
          tauscht sie, wenn sie in falscher Reihenfolge sind. Größere Werte
          "blubbern" wie Blasen nach oben (ans Ende).
        </p>

        <h3>Wie funktioniert Bubble Sort?</h3>
        <ol>
          <li>Durchlaufe das Array von vorne nach hinten</li>
          <li>Vergleiche jedes Element mit seinem Nachbarn</li>
          <li>Wenn das linke größer ist: Tausche</li>
          <li>Nach jedem Durchlauf ist das größte Element am Ende</li>
          <li>Wiederhole für die restlichen Elemente</li>
        </ol>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Eigenes Array:</strong>
            <br />
            <input
              type="text"
              defaultValue={bubbleArray.join(", ")}
              onBlur={(e) => {
                const newArray = e.target.value
                  .split(",")
                  .map((n) => parseInt(n.trim()))
                  .filter((n) => !isNaN(n) && n > 0 && n <= 20)
                if (newArray.length >= 3 && newArray.length <= 10) {
                  setBubbleArray(newArray)
                } else {
                  alert("Bitte 3-10 Zahlen zwischen 1 und 20 eingeben!")
                }
              }}
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "100%",
                maxWidth: "400px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>

        <SimpleSplitView
          component={BubbleSortAnimation}
          inputProps={{ array: bubbleArray, fps: 30 }}
          flowchart={bubbleSortChart}
          flowchartId="bubble-sort"
          totalSteps={bubbleSteps.length}
          stepDescriptions={bubbleDescriptions}
          getNodeId={(step) => bubbleSteps[step]?.mermaidNode}
          fps={30}
        />

        <h3>Eigenschaften von Bubble Sort</h3>
        <ul>
          <li>
            ✅ <strong>Einfach zu implementieren</strong> - Wenige Codezeilen
          </li>
          <li>
            ✅ <strong>Stabil</strong> - Gleiche Elemente bleiben in
            Reihenfolge
          </li>
          <li>
            ❌ <strong>Ineffizient</strong> - Viele Tauschoperationen
          </li>
          <li>
            ❌ <strong>Langsam</strong> - O(n²) in fast allen Fällen
          </li>
          <li>
            ⚠️ <strong>Nur für Lehrzwecke</strong> - In Praxis selten verwendet
          </li>
        </ul>
      </Section>

      <Section classes="exercise">
        <h3>Übung 3: Bubble Sort</h3>
        <p>
          Sortieren Sie das Array [6, 3, 8, 2] mit Bubble Sort. Wie viele
          Tauschoperationen sind nötig?
        </p>
        <SolutionBlock taskId="bubble-sort-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <p>
            <strong>Durchlauf 1:</strong>
          </p>
          <ol>
            <li>6 &gt; 3 → Tausche → [3, 6, 8, 2]</li>
            <li>6 &lt; 8 → Kein Tausch → [3, 6, 8, 2]</li>
            <li>
              8 &gt; 2 → Tausche → [3, 6, 2, <strong>8</strong>]
            </li>
          </ol>
          <p>
            <strong>Durchlauf 2:</strong>
          </p>
          <ol start="4">
            <li>3 &lt; 6 → Kein Tausch → [3, 6, 2, 8]</li>
            <li>6 &gt; 2 → Tausche → [3, 2, <strong>6, 8</strong>]</li>
          </ol>
          <p>
            <strong>Durchlauf 3:</strong>
          </p>
          <ol start="6">
            <li>
              3 &gt; 2 → Tausche → [<strong>2, 3, 6, 8</strong>]
            </li>
          </ol>
          <p>
            <strong>Antwort: 4 Tauschoperationen</strong>
          </p>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>Zusammenfassung: Welcher Algorithmus wann?</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Kriterium
              </th>
              <th
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Selection Sort
              </th>
              <th
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Insertion Sort
              </th>
              <th
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Bubble Sort
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                <strong>Verständlichkeit</strong>
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                ⭐⭐⭐ Am einfachsten
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                ⭐⭐ Intuitiv
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                ⭐ Etwas abstrakt
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                <strong>Tauschoperationen</strong>
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Wenige (n-1 max)
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Mittel
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Viele
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                <strong>Praktische Verwendung</strong>
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Kleine Arrays
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Fast sortierte Daten
              </td>
              <td
                style={{
                  border: "1px solid var(--color-gray)",
                  padding: "12px",
                }}>
                Nur Lehrzwecke
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: "30px" }}>Empfehlung</h3>
        <ul>
          <li>
            <strong>Zum Lernen:</strong> Selection Sort → Insertion Sort →
            Bubble Sort
          </li>
          <li>
            <strong>In der Praxis:</strong> Verwende eingebaute
            Sort-Funktionen (z.B. <code>Array.sort()</code> in JavaScript)
          </li>
          <li>
            <strong>Für große Daten:</strong> Quicksort oder Mergesort (O(n log
            n))
          </li>
        </ul>
      </Section>
    </>
  )
}
