import { useState } from "react"
import { Player } from "@remotion/player"
import Section from "@components/Section"
import SolutionBlock from "@components/SolutionBlock"
import MermaidDark from "@components/algorithm/MermaidDark"
import {
  BubbleSortAnimation,
  SelectionSortAnimation,
  InsertionSortAnimation,
  generateBubbleSortSteps,
  generateSelectionSortSteps,
  generateInsertionSortSteps,
} from "@components/remotion/SortingAnimation"

export default function FmsAlgorithmenSortieren() {
  const [bubbleArray, setBubbleArray] = useState([5, 2, 8, 1, 9])
  const [selectionArray, setSelectionArray] = useState([7, 3, 9, 2, 5])
  const [insertionArray, setInsertionArray] = useState([4, 8, 2, 6, 1])

  // Flussdiagramme
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

  // Berechne Schritte für die Tabellen
  const bubbleSteps = generateBubbleSortSteps(bubbleArray)
  const selectionSteps = generateSelectionSortSteps(selectionArray)
  const insertionSteps = generateInsertionSortSteps(insertionArray)

  return (
    <>
      <section>
        <h2>Sortieralgorithmen</h2>
        <p>
          Sortieren ist eine der häufigsten Aufgaben in der Informatik. Ein
          sortiertes Array ermöglicht schnelleres Suchen und macht Daten
          übersichtlicher. Wir schauen uns drei grundlegende Sortieralgorithmen
          an: <strong>Bubble Sort</strong>, <strong>Selection Sort</strong> und{" "}
          <strong>Insertion Sort</strong>.
        </p>
        <p>
          Alle drei Algorithmen haben eine ähnliche Komplexität (O(n²)), sind
          aber unterschiedlich in ihrer Herangehensweise. Sie eignen sich gut
          für kleine Arrays und sind einfach zu verstehen.
        </p>
      </section>

      <Section>
        <h2>Bubble Sort</h2>
        <p>
          <strong>Bubble Sort</strong> ist der einfachste Sortieralgorithmus.
          Der Name kommt daher, dass die größeren Elemente wie "Blasen" nach
          oben (ans Ende des Arrays) steigen.
        </p>

        <h3>Wie funktioniert Bubble Sort?</h3>
        <ol>
          <li>Durchlaufe das Array von vorne nach hinten</li>
          <li>Vergleiche jedes Element mit seinem Nachbarn</li>
          <li>Wenn das linke Element größer ist, tausche beide</li>
          <li>
            Wiederhole den Prozess, bis keine Tausche mehr nötig sind
          </li>
          <li>
            Nach jedem Durchlauf ist das größte Element am Ende an der
            richtigen Position
          </li>
        </ol>

        <MermaidDark chart={bubbleSortChart} id="bubble-sort-chart" />

        <h3>Interaktive Visualisierung</h3>
        <p>
          Schauen Sie sich an, wie Bubble Sort Schritt für Schritt
          funktioniert:
        </p>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Eigenes Array eingeben (Zahlen mit Komma getrennt):</strong>
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}>
          <Player
            component={BubbleSortAnimation}
            inputProps={{ array: bubbleArray, fps: 30 }}
            durationInFrames={bubbleSteps.length * 15}
            compositionWidth={800}
            compositionHeight={400}
            fps={30}
            controls={true}
            loop={false}
            style={{ width: "100%", maxWidth: "800px" }}
            playbackRate={1.0}
            showVolumeControls={false}
          />
        </div>

        <h4>Beispiel-Durchlauf: Array [{bubbleArray.join(", ")}]</h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Schritt
              </th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Beschreibung
              </th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Array
              </th>
            </tr>
          </thead>
          <tbody>
            {bubbleSteps.slice(0, 12).map((step, index) => (
              <tr key={index}>
                <td
                  style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                  {index + 1}
                </td>
                <td
                  style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                  {step.description}
                </td>
                <td
                  style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                  [{step.array.join(", ")}]
                </td>
              </tr>
            ))}
            {bubbleSteps.length > 12 && (
              <tr>
                <td
                  colSpan="3"
                  style={{
                    border: "1px solid var(--color-gray)",
                    padding: "8px",
                    textAlign: "center",
                    fontStyle: "italic",
                  }}>
                  ... weitere {bubbleSteps.length - 12} Schritte ...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Section>

      <Section classes="exercise">
        <h3>Übung 1: Bubble Sort nachvollziehen</h3>
        <p>
          Sortieren Sie das Array [6, 3, 8, 2] mit Bubble Sort. Schreiben Sie
          die ersten 5 Vergleiche und Tauschoperationen auf.
        </p>
        <SolutionBlock taskId="bubble-sort-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ol>
            <li>
              Vergleiche 6 und 3: 6 &gt; 3 → <strong>Tausche</strong> → [3, 6,
              8, 2]
            </li>
            <li>
              Vergleiche 6 und 8: 6 &lt; 8 → Kein Tausch → [3, 6, 8, 2]
            </li>
            <li>
              Vergleiche 8 und 2: 8 &gt; 2 → <strong>Tausche</strong> → [3, 6,
              2, 8]
            </li>
            <li>
              Vergleiche 3 und 6: 3 &lt; 6 → Kein Tausch → [3, 6, 2, 8]
            </li>
            <li>
              Vergleiche 6 und 2: 6 &gt; 2 → <strong>Tausche</strong> → [3, 2,
              6, 8]
            </li>
            <li>
              Vergleiche 3 und 2: 3 &gt; 2 → <strong>Tausche</strong> → [2, 3,
              6, 8]
            </li>
            <li>
              <strong>Fertig!</strong> → [2, 3, 6, 8]
            </li>
          </ol>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>Selection Sort</h2>
        <p>
          <strong>Selection Sort</strong> funktioniert nach dem Prinzip "Suche
          das kleinste Element und setze es an die richtige Position". In jedem
          Durchgang wird das Minimum des unsortierten Teils gesucht und mit dem
          ersten Element des unsortierten Teils getauscht.
        </p>

        <h3>Wie funktioniert Selection Sort?</h3>
        <ol>
          <li>Finde das kleinste Element im unsortierten Teil</li>
          <li>Tausche es mit dem ersten Element des unsortierten Teils</li>
          <li>Der sortierte Teil wächst um ein Element</li>
          <li>Wiederhole, bis das gesamte Array sortiert ist</li>
        </ol>

        <MermaidDark chart={selectionSortChart} id="selection-sort-chart" />

        <h3>Interaktive Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Eigenes Array eingeben (Zahlen mit Komma getrennt):</strong>
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}>
          <Player
            component={SelectionSortAnimation}
            inputProps={{ array: selectionArray, fps: 30 }}
            durationInFrames={selectionSteps.length * 15}
            compositionWidth={800}
            compositionHeight={400}
            fps={30}
            controls={true}
            loop={false}
            style={{ width: "100%", maxWidth: "800px" }}
            playbackRate={1.0}
            showVolumeControls={false}
          />
        </div>

        <h3>Vergleich: Bubble Sort vs. Selection Sort</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Kriterium
              </th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Bubble Sort
              </th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Selection Sort
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Vergleiche
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Viele (in jeder Iteration)
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Viele (in jeder Iteration)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Tauschoperationen
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Viele (bei jedem Vergleich möglich)
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Wenige (maximal 1 pro Durchlauf)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Besonderheit
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Große Werte "blubbern" nach oben
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>
                Sucht aktiv das Minimum
              </td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section classes="exercise">
        <h3>Übung 2: Selection Sort</h3>
        <p>
          Sortieren Sie das Array [9, 4, 7, 2] mit Selection Sort. Geben Sie
          für jeden Durchlauf an, welches Element als Minimum gefunden wird und
          wo es hingetauscht wird.
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
              Minimum ist 4 (Index 1) → Bereits an richtiger Position → [2,{" "}
              <strong>4</strong>, 7, 9]
            </li>
            <li>
              <strong>Durchlauf 3:</strong> Suche Minimum in [7, 9] → Minimum
              ist 7 (Index 2) → Bereits an richtiger Position → [2, 4,{" "}
              <strong>7</strong>, 9]
            </li>
            <li>
              <strong>Fertig!</strong> → [2, 4, 7, 9]
            </li>
          </ol>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>Insertion Sort</h2>
        <p>
          <strong>Insertion Sort</strong> funktioniert wie das Sortieren von
          Spielkarten auf der Hand. Man nimmt ein Element nach dem anderen und
          fügt es an der richtigen Stelle in den bereits sortierten Teil ein.
        </p>

        <h3>Wie funktioniert Insertion Sort?</h3>
        <ol>
          <li>Beginne mit dem zweiten Element (das erste ist "sortiert")</li>
          <li>Speichere das aktuelle Element (key)</li>
          <li>Verschiebe alle größeren Elemente im sortierten Teil nach rechts</li>
          <li>Füge key an der freigewordenen Position ein</li>
          <li>Wiederhole für alle Elemente</li>
        </ol>

        <MermaidDark chart={insertionSortChart} id="insertion-sort-chart" />

        <h3>Interaktive Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Eigenes Array eingeben (Zahlen mit Komma getrennt):</strong>
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}>
          <Player
            component={InsertionSortAnimation}
            inputProps={{ array: insertionArray, fps: 30 }}
            durationInFrames={insertionSteps.length * 15}
            compositionWidth={800}
            compositionHeight={400}
            fps={30}
            controls={true}
            loop={false}
            style={{ width: "100%", maxWidth: "800px" }}
            playbackRate={1.0}
            showVolumeControls={false}
          />
        </div>

        <h3>Wann ist welcher Algorithmus am besten?</h3>
        <ul>
          <li>
            <strong>Bubble Sort:</strong> Gut zum Lernen, aber in der Praxis
            langsam
          </li>
          <li>
            <strong>Selection Sort:</strong> Wenige Tauschoperationen, gut wenn
            Tauschen teuer ist
          </li>
          <li>
            <strong>Insertion Sort:</strong> Sehr effizient für fast sortierte
            Arrays und kleine Datenmengen
          </li>
        </ul>

        <p>
          <strong>Tipp:</strong> In der Praxis werden für große Datenmengen
          schnellere Algorithmen wie <em>Quicksort</em> oder <em>Mergesort</em>{" "}
          verwendet, die eine Komplexität von O(n log n) haben.
        </p>
      </Section>

      <Section classes="exercise">
        <h3>Übung 3: Insertion Sort</h3>
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
              sortiert betrachten
            </li>
            <li>
              <strong>Füge 2 ein:</strong>
              <ul>
                <li>key = 2</li>
                <li>Verschiebe 5 nach rechts (5 &gt; 2)</li>
                <li>Füge 2 an Position 0 ein</li>
                <li>Ergebnis: [<strong>2, 5</strong>, 8, 3]</li>
              </ul>
            </li>
            <li>
              <strong>Füge 8 ein:</strong>
              <ul>
                <li>key = 8</li>
                <li>8 ist größer als 5, keine Verschiebung nötig</li>
                <li>Ergebnis: [<strong>2, 5, 8</strong>, 3]</li>
              </ul>
            </li>
            <li>
              <strong>Füge 3 ein:</strong>
              <ul>
                <li>key = 3</li>
                <li>Verschiebe 8 nach rechts (8 &gt; 3)</li>
                <li>Verschiebe 5 nach rechts (5 &gt; 3)</li>
                <li>3 &gt; 2, stoppe hier</li>
                <li>Füge 3 an Position 1 ein</li>
                <li>
                  Ergebnis: [<strong>2, 3, 5, 8</strong>]
                </li>
              </ul>
            </li>
            <li>
              <strong>Fertig!</strong> → [2, 3, 5, 8]
            </li>
          </ol>
        </SolutionBlock>
      </Section>

      <Section classes="exercise">
        <h3>Übung 4: Algorithmen vergleichen</h3>
        <p>
          Welcher der drei Algorithmen macht die wenigsten Tauschoperationen
          beim Sortieren des Arrays [3, 1, 4, 2]? Begründen Sie Ihre Antwort.
        </p>
        <SolutionBlock taskId="sorting-comparison-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <p>
            <strong>Selection Sort</strong> macht die wenigsten
            Tauschoperationen!
          </p>
          <ul>
            <li>
              <strong>Bubble Sort:</strong> Tauscht bei jedem Vergleich, wenn
              nötig → viele Tausche
            </li>
            <li>
              <strong>Selection Sort:</strong> Maximal 1 Tausch pro Durchlauf →{" "}
              <strong>wenige Tausche (hier: 3)</strong>
            </li>
            <li>
              <strong>Insertion Sort:</strong> Verschiebt Elemente mehrfach →
              mittlere Anzahl
            </li>
          </ul>
          <p>
            <strong>Durchlauf für [3, 1, 4, 2] mit Selection Sort:</strong>
          </p>
          <ol>
            <li>Finde Minimum (1) → Tausche mit Position 0 → [1, 3, 4, 2]</li>
            <li>Finde Minimum (2) → Tausche mit Position 1 → [1, 2, 4, 3]</li>
            <li>Finde Minimum (3) → Tausche mit Position 2 → [1, 2, 3, 4]</li>
            <li>
              <strong>3 Tauschoperationen insgesamt!</strong>
            </li>
          </ol>
        </SolutionBlock>
      </Section>
    </>
  )
}
