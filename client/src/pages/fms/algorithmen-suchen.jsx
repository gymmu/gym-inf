import { useState } from "react"
import { Player } from "@remotion/player"
import Section from "@components/Section"
import SolutionBlock from "@components/SolutionBlock"
import MermaidDark from "@components/algorithm/MermaidDark"
import {
  LinearSearchAnimation,
  BinarySearchAnimation,
  generateLinearSearchSteps,
  generateBinarySearchSteps,
} from "@components/remotion/SearchAnimation"

export default function FmsAlgorithmenSuchen() {
  const [linearArray, setLinearArray] = useState([5, 2, 8, 1, 9, 4, 7])
  const [linearTarget, setLinearTarget] = useState(9)
  const [binaryArray, setBinaryArray] = useState([1, 3, 5, 7, 9, 11, 13])
  const [binaryTarget, setBinaryTarget] = useState(7)

  // Flussdiagramme
  const linearSearchChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Array und Zielwert eingeben]
    Input --> Init["i = 0"]
    Init --> Check{"i &lt; Länge?"}
    Check -->|Nein| NotFound[Ausgabe: Nicht gefunden]
    NotFound --> End([Ende])
    Check -->|Ja| Compare{"Array[i] === Zielwert?"}
    Compare -->|Ja| Found["Ausgabe: Gefunden bei Index i"]
    Found --> End
    Compare -->|Nein| Increment["i = i + 1"]
    Increment --> Check
  `

  const binarySearchChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input["Sortiertes Array und<br/>Zielwert eingeben"]
    Input --> Init["left = 0<br/>right = Länge - 1"]
    Init --> Check{"left &lt;= right?"}
    Check -->|Nein| NotFound[Ausgabe: Nicht gefunden]
    NotFound --> End([Ende])
    Check -->|Ja| Mid["mid = (left + right) / 2<br/>abgerundet"]
    Mid --> Compare{"Array[mid] === Zielwert?"}
    Compare -->|Ja| Found["Ausgabe: Gefunden bei Index mid"]
    Found --> End
    Compare -->|Nein| LessOrGreater{"Array[mid] &lt; Zielwert?"}
    LessOrGreater -->|Ja| MoveLeft["left = mid + 1"]
    LessOrGreater -->|Nein| MoveRight["right = mid - 1"]
    MoveLeft --> Check
    MoveRight --> Check
  `

  // Berechne Schritte
  const linearSteps = generateLinearSearchSteps(linearArray, linearTarget)
  const binarySteps = generateBinarySearchSteps(binaryArray, binaryTarget)

  return (
    <>
      <section>
        <h2>Suchalgorithmen</h2>
        <p>
          Suchen ist eine der häufigsten Operationen in der Informatik. Egal ob
          Sie nach einem Namen in einer Liste, einer Datei auf Ihrem Computer
          oder einem Produkt in einem Online-Shop suchen – überall werden
          Suchalgorithmen verwendet.
        </p>
        <p>
          Wir schauen uns zwei grundlegende Suchalgorithmen an:{" "}
          <strong>Lineare Suche</strong> (einfach aber langsam) und{" "}
          <strong>Binäre Suche</strong> (schnell aber benötigt sortierte Daten).
        </p>
      </section>

      <Section>
        <h2>Lineare Suche (Linear Search)</h2>
        <p>
          Die <strong>Lineare Suche</strong> ist der einfachste Suchalgorithmus.
          Man geht das Array von Anfang bis Ende durch und vergleicht jedes
          Element mit dem Zielwert.
        </p>

        <h3>Wie funktioniert Lineare Suche?</h3>
        <ol>
          <li>Starte beim ersten Element (Index 0)</li>
          <li>Vergleiche das aktuelle Element mit dem Zielwert</li>
          <li>
            Wenn es übereinstimmt: <strong>Gefunden!</strong> Gib den Index
            zurück
          </li>
          <li>Wenn nicht: Gehe zum nächsten Element</li>
          <li>Wiederhole, bis entweder gefunden oder das Ende erreicht ist</li>
        </ol>

        <MermaidDark chart={linearSearchChart} id="linear-search-chart" />

        <h3>Eigenschaften</h3>
        <ul>
          <li>
            <strong>Best Case:</strong> O(1) - Element ist gleich das erste
          </li>
          <li>
            <strong>Average Case:</strong> O(n/2) - Element ist in der Mitte
          </li>
          <li>
            <strong>Worst Case:</strong> O(n) - Element ist das letzte oder nicht
            vorhanden
          </li>
          <li>
            <strong>Vorteil:</strong> Funktioniert mit unsortierten Arrays
          </li>
          <li>
            <strong>Nachteil:</strong> Langsam bei großen Datenmengen
          </li>
        </ul>

        <h3>Interaktive Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Array (Zahlen mit Komma getrennt):</strong>
            <br />
            <input
              type="text"
              defaultValue={linearArray.join(", ")}
              onBlur={(e) => {
                const newArray = e.target.value
                  .split(",")
                  .map((n) => parseInt(n.trim()))
                  .filter((n) => !isNaN(n) && n > 0 && n <= 20)
                if (newArray.length >= 3 && newArray.length <= 10) {
                  setLinearArray(newArray)
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
          <label style={{ display: "block", marginTop: "15px" }}>
            <strong>Zielwert (was soll gesucht werden?):</strong>
            <br />
            <input
              type="number"
              defaultValue={linearTarget}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val > 0 && val <= 20) {
                  setLinearTarget(val)
                }
              }}
              min="1"
              max="20"
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "100px",
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
            component={LinearSearchAnimation}
            inputProps={{ array: linearArray, target: linearTarget, fps: 30 }}
            durationInFrames={linearSteps.length * 15}
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
      </Section>

      <Section classes="exercise">
        <h3>Übung 1: Lineare Suche</h3>
        <p>
          Suchen Sie die Zahl <strong>6</strong> im Array [3, 7, 2, 6, 9, 1].
          Wie viele Vergleiche sind nötig?
        </p>
        <SolutionBlock taskId="linear-search-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ol>
            <li>Vergleich: 3 === 6? Nein</li>
            <li>Vergleich: 7 === 6? Nein</li>
            <li>Vergleich: 2 === 6? Nein</li>
            <li>Vergleich: 6 === 6? <strong>Ja! Gefunden bei Index 3</strong></li>
          </ol>
          <p><strong>Antwort: 4 Vergleiche</strong></p>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>Binäre Suche (Binary Search)</h2>
        <p>
          Die <strong>Binäre Suche</strong> ist viel schneller als die lineare
          Suche, funktioniert aber nur mit <strong>sortierten Arrays</strong>.
          Sie basiert auf dem "Teile und Herrsche"-Prinzip.
        </p>

        <h3>Wie funktioniert Binäre Suche?</h3>
        <ol>
          <li>Schaue auf das Element in der Mitte des Arrays</li>
          <li>
            Wenn es der Zielwert ist: <strong>Gefunden!</strong>
          </li>
          <li>
            Wenn der Zielwert kleiner ist: Suche in der <strong>linken</strong>{" "}
            Hälfte weiter
          </li>
          <li>
            Wenn der Zielwert größer ist: Suche in der <strong>rechten</strong>{" "}
            Hälfte weiter
          </li>
          <li>Wiederhole, bis gefunden oder der Suchbereich leer ist</li>
        </ol>

        <MermaidDark chart={binarySearchChart} id="binary-search-chart" />

        <h3>Eigenschaften</h3>
        <ul>
          <li>
            <strong>Best Case:</strong> O(1) - Element ist in der Mitte
          </li>
          <li>
            <strong>Average Case:</strong> O(log n) - Sehr schnell!
          </li>
          <li>
            <strong>Worst Case:</strong> O(log n) - Immer noch sehr schnell
          </li>
          <li>
            <strong>Voraussetzung:</strong> Array muss sortiert sein
          </li>
          <li>
            <strong>Vorteil:</strong> Extrem schnell bei großen Datenmengen
          </li>
        </ul>

        <h3>Interaktive Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            <strong>Array (wird automatisch sortiert):</strong>
            <br />
            <input
              type="text"
              defaultValue={binaryArray.join(", ")}
              onBlur={(e) => {
                const newArray = e.target.value
                  .split(",")
                  .map((n) => parseInt(n.trim()))
                  .filter((n) => !isNaN(n) && n > 0 && n <= 20)
                if (newArray.length >= 3 && newArray.length <= 10) {
                  setBinaryArray(newArray.sort((a, b) => a - b))
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
          <label style={{ display: "block", marginTop: "15px" }}>
            <strong>Zielwert:</strong>
            <br />
            <input
              type="number"
              defaultValue={binaryTarget}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val > 0 && val <= 20) {
                  setBinaryTarget(val)
                }
              }}
              min="1"
              max="20"
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "100px",
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
            component={BinarySearchAnimation}
            inputProps={{ array: binaryArray, target: binaryTarget, fps: 30 }}
            durationInFrames={binarySteps.length * 15}
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
      </Section>

      <Section classes="exercise">
        <h3>Übung 2: Binäre Suche</h3>
        <p>
          Suchen Sie die Zahl <strong>7</strong> im sortierten Array [1, 3, 5,
          7, 9, 11, 13, 15]. Beschreiben Sie jeden Schritt.
        </p>
        <SolutionBlock taskId="binary-search-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ol>
            <li>
              <strong>Schritt 1:</strong> left=0, right=7, mid=3 → Array[3] = 7
              → <strong>Gefunden!</strong>
            </li>
          </ol>
          <p>
            <strong>Antwort: Nur 1 Vergleich nötig!</strong> (Best Case - Element
            war zufällig in der Mitte)
          </p>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>Vergleich: Linear vs. Binär</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Kriterium
              </th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Lineare Suche
              </th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Binäre Suche
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Voraussetzung
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Keine (auch unsortiert)
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Array muss sortiert sein
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Komplexität
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                O(n) - Linear
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                O(log n) - Logarithmisch
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Bei 1.000 Elementen
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                ~500 Vergleiche (Durchschnitt)
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                ~10 Vergleiche (Maximum!)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Bei 1.000.000 Elementen
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                ~500.000 Vergleiche
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                ~20 Vergleiche (!)
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Wann verwenden?
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Kleine Arrays oder unsortierte Daten
              </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "12px" }}>
                Große sortierte Arrays
              </td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: "30px" }}>Warum ist Binäre Suche so schnell?</h3>
        <p>
          Bei jedem Schritt <strong>halbiert</strong> die binäre Suche den
          Suchbereich. Das bedeutet:
        </p>
        <ul>
          <li>Nach 1 Schritt: 1.000.000 → 500.000 Elemente</li>
          <li>Nach 2 Schritten: 500.000 → 250.000 Elemente</li>
          <li>Nach 3 Schritten: 250.000 → 125.000 Elemente</li>
          <li>...</li>
          <li>Nach ~20 Schritten: nur noch 1 Element übrig!</li>
        </ul>
        <p>
          <strong>Analogie:</strong> Stellen Sie sich vor, Sie suchen eine Seite
          in einem Telefonbuch. Lineare Suche würde bedeuten, dass Sie bei Seite
          1 anfangen und jede Seite durchblättern. Binäre Suche ist wie das
          Aufschlagen in der Mitte und dann entscheiden "links oder rechts?" –
          viel schneller!
        </p>
      </Section>

      <Section classes="exercise">
        <h3>Übung 3: Welcher Algorithmus?</h3>
        <p>
          Entscheiden Sie für jede Situation, welcher Suchalgorithmus besser
          geeignet ist:
        </p>
        <ol style={{ listStyleType: "lower-alpha" }}>
          <li>
            Suche nach einem Namen in einer unsortierten Liste von 50 Schülern
          </li>
          <li>
            Suche nach einer Telefonnummer in einem Telefonbuch (alphabetisch
            sortiert) mit 100.000 Einträgen
          </li>
          <li>
            Suche nach einer Zahl in einem kleinen Array [4, 2, 7, 1] (nicht
            sortiert)
          </li>
        </ol>
        <SolutionBlock taskId="search-comparison-1">
          <p>
            <strong>Lösungen:</strong>
          </p>
          <ol style={{ listStyleType: "lower-alpha" }}>
            <li>
              <strong>Lineare Suche</strong> - Die Liste ist unsortiert und mit
              50 Elementen relativ klein
            </li>
            <li>
              <strong>Binäre Suche</strong> - Das Telefonbuch ist sortiert und
              sehr groß (100.000 Einträge). Binäre Suche braucht nur ~17
              Vergleiche statt durchschnittlich 50.000!
            </li>
            <li>
              <strong>Lineare Suche</strong> - Array ist unsortiert und sehr klein
              (4 Elemente), nicht lohnenswert zu sortieren
            </li>
          </ol>
        </SolutionBlock>
      </Section>
    </>
  )
}
