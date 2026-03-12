import { useState } from "react"
import Section from "@components/Section"
import SolutionBlock from "@components/SolutionBlock"
import SimpleSplitView from "@components/algorithm/SimpleSplitView"
import {
  DurchschnittAnimation,
  NotenAnimation,
  SchaltjahrAnimation,
  generateDurchschnittSteps,
  generateNotenSteps,
  generateSchaltjahrSteps,
} from "@components/remotion/EverydayAnimation"

export default function FmsAlgorithmenAlltag() {
  const [zahlen, setZahlen] = useState([5, 8, 3, 9, 6])
  const [punkte, setPunkte] = useState(82)
  const [jahr, setJahr] = useState(2024)

  const durchschnittChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Array eingeben]
    Input --> Init["i = 0 sum = 0"]
    Init --> Check{"i &lt; Länge?"}
    Check -->|Nein| Calc["average = sum / Länge"]
    Check -->|Ja| Add["sum = sum + Array[i]"]
    Add --> Incr["i = i + 1"]
    Incr --> Check
    Calc --> Output[Ausgabe: average]
    Output --> End([Ende])
  `

  const notenChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Punkte eingeben]
    Input --> Check90{"Punkte &gt;= 90?"}
    Check90 -->|Ja| Note1[Note = Sehr gut]
    Check90 -->|Nein| Check75{"Punkte &gt;= 75?"}
    Check75 -->|Ja| Note2[Note = Gut]
    Check75 -->|Nein| Check60{"Punkte &gt;= 60?"}
    Check60 -->|Ja| Note3[Note = Befriedigend]
    Check60 -->|Nein| Check50{"Punkte &gt;= 50?"}
    Check50 -->|Ja| Note4[Note = Ausreichend]
    Check50 -->|Nein| Note5[Note = Ungenügend]
    Note1 --> Output[Ausgabe: Note]
    Note2 --> Output
    Note3 --> Output
    Note4 --> Output
    Note5 --> Output
    Output --> End([Ende])
  `

  const schaltjahrChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Jahr eingeben]
    Input --> Check4{"Jahr mod 4 = 0?"}
    Check4 -->|Nein| NotLeap1[Ausgabe: Kein Schaltjahr]
    Check4 -->|Ja| Check100{"Jahr mod 100 = 0?"}
    Check100 -->|Nein| IsLeap1[Ausgabe: Schaltjahr]
    Check100 -->|Ja| Check400{"Jahr mod 400 = 0?"}
    Check400 -->|Ja| IsLeap2[Ausgabe: Schaltjahr]
    Check400 -->|Nein| NotLeap2[Ausgabe: Kein Schaltjahr]
    NotLeap1 --> End([Ende])
    IsLeap1 --> End
    IsLeap2 --> End
    NotLeap2 --> End
  `

  const durchschnittSteps = generateDurchschnittSteps(zahlen)
  const notenSteps = generateNotenSteps(punkte)
  const schaltjahrSteps = generateSchaltjahrSteps(jahr)

  const durchschnittDescriptions = durchschnittSteps.map((s) => s.description)
  const notenDescriptions = notenSteps.map((s) => s.description)
  const schaltjahrDescriptions = schaltjahrSteps.map((s) => s.description)

  return (
    <>
      <section>
        <h2>Algorithmen im Alltag</h2>
        <p>
          Algorithmen begegnen uns täglich, oft ohne dass wir es merken. Hier
          sind drei praktische Beispiele, sortiert vom einfachsten zum komplexesten:
        </p>
        <ol>
          <li>
            <strong>Durchschnitt berechnen</strong> - Einfache Schleife mit Summe
          </li>
          <li>
            <strong>Notenberechnung</strong> - If-else Ketten
          </li>
          <li>
            <strong>Schaltjahr berechnen</strong> - Verschachtelte Bedingungen
          </li>
        </ol>
      </section>

      <Section>
        <h2>1. Durchschnitt berechnen</h2>
        <p>
          Der <strong>Durchschnitt</strong> (arithmetisches Mittel) einer Liste
          von Zahlen wird berechnet, indem man alle Zahlen addiert und durch die
          Anzahl teilt.
        </p>

        <h3>Formel:</h3>
        <p style={{ fontSize: "20px", textAlign: "center", margin: "20px 0" }}>
          Durchschnitt = (Summe aller Zahlen) / Anzahl
        </p>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Zahlen (mit Komma getrennt):</strong>
            <br />
            <input
              type="text"
              defaultValue={zahlen.join(", ")}
              onBlur={(e) => {
                const newArray = e.target.value
                  .split(",")
                  .map((n) => parseInt(n.trim()))
                  .filter((n) => !isNaN(n) && n >= 0 && n <= 100)
                if (newArray.length >= 3 && newArray.length <= 10) {
                  setZahlen(newArray)
                } else {
                  alert("Bitte 3-10 Zahlen zwischen 0 und 100 eingeben!")
                }
              }}
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "300px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>

        <SimpleSplitView
          component={DurchschnittAnimation}
          inputProps={{ array: zahlen, fps: 30 }}
          flowchart={durchschnittChart}
          flowchartId="durchschnitt"
          totalSteps={durchschnittSteps.length}
          stepDescriptions={durchschnittDescriptions}
          getNodeId={(step) => durchschnittSteps[step]?.mermaidNode}
          fps={30}
        />

        <h3>Anwendungen:</h3>
        <ul>
          <li>
            <strong>Notendurchschnitt:</strong> Alle Noten addieren und durch
            Anzahl teilen
          </li>
          <li>
            <strong>Temperatur:</strong> Durchschnittstemperatur über mehrere
            Tage
          </li>
          <li>
            <strong>Statistik:</strong> Mittelwert von Messwerten
          </li>
        </ul>
      </Section>

      <Section classes="exercise">
        <h3>Übung 1: Durchschnitt</h3>
        <p>
          Berechnen Sie den Durchschnitt der Zahlen: 10, 15, 8, 12, 20
        </p>
        <SolutionBlock taskId="durchschnitt-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ol>
            <li>Summe: 10 + 15 + 8 + 12 + 20 = 65</li>
            <li>Anzahl: 5</li>
            <li>Durchschnitt: 65 / 5 = 13</li>
          </ol>
          <p>
            <strong>Antwort: 13</strong>
          </p>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>2. Notenberechnung</h2>
        <p>
          Die <strong>Notenberechnung</strong> wandelt Punkte in Noten um. Dies
          ist ein klassisches Beispiel für eine <strong>if-else Kette</strong>.
        </p>

        <h3>Notenskala:</h3>
        <ul>
          <li>90-100 Punkte: Sehr gut (1)</li>
          <li>75-89 Punkte: Gut (2)</li>
          <li>60-74 Punkte: Befriedigend (3)</li>
          <li>50-59 Punkte: Ausreichend (4)</li>
          <li>0-49 Punkte: Ungenügend (5)</li>
        </ul>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Punkte (0-100):</strong>
            <br />
            <input
              type="number"
              defaultValue={punkte}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 0 && val <= 100) {
                  setPunkte(val)
                }
              }}
              min="0"
              max="100"
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
          <p style={{ fontSize: "14px", opacity: 0.8, marginTop: "10px" }}>
            Probieren Sie: 95 (Sehr gut), 80 (Gut), 65 (Befriedigend), 55 (Ausreichend), 40 (Ungenügend)
          </p>
        </div>

        <SimpleSplitView
          component={NotenAnimation}
          inputProps={{ punkte, fps: 30 }}
          flowchart={notenChart}
          flowchartId="noten"
          totalSteps={notenSteps.length}
          stepDescriptions={notenDescriptions}
          getNodeId={(step) => notenSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>

      <Section classes="exercise">
        <h3>Übung 2: Noten</h3>
        <p>Welche Noten erhalten folgende Punktzahlen?</p>
        <ul>
          <li>88 Punkte</li>
          <li>72 Punkte</li>
          <li>48 Punkte</li>
        </ul>
        <SolutionBlock taskId="noten-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ul>
            <li>
              <strong>88 Punkte:</strong> 75 ≤ 88 &lt; 90 → Gut (2)
            </li>
            <li>
              <strong>72 Punkte:</strong> 60 ≤ 72 &lt; 75 → Befriedigend (3)
            </li>
            <li>
              <strong>48 Punkte:</strong> 48 &lt; 50 → Ungenügend (5)
            </li>
          </ul>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>3. Schaltjahr berechnen</h2>
        <p>
          Ein <strong>Schaltjahr</strong> hat 366 Tage statt 365 (29. Februar).
          Die Regeln sind kompliziert und zeigen <strong>verschachtelte Bedingungen</strong>:
        </p>

        <h3>Schaltjahr-Regeln:</h3>
        <ol>
          <li>
            Das Jahr muss durch <strong>4</strong> teilbar sein
          </li>
          <li>
            <strong>ABER:</strong> Wenn es durch <strong>100</strong> teilbar
            ist, ist es <strong>kein</strong> Schaltjahr
          </li>
          <li>
            <strong>AUSSER:</strong> Es ist durch <strong>400</strong> teilbar,
            dann ist es doch ein Schaltjahr
          </li>
        </ol>

        <h3>Beispiele:</h3>
        <ul>
          <li>
            <strong>2024:</strong> Durch 4 teilbar, nicht durch 100 → ✓
            Schaltjahr
          </li>
          <li>
            <strong>2023:</strong> Nicht durch 4 teilbar → ✗ Kein Schaltjahr
          </li>
          <li>
            <strong>1900:</strong> Durch 4 und 100, aber nicht durch 400 → ✗
            Kein Schaltjahr
          </li>
          <li>
            <strong>2000:</strong> Durch 4, 100 und 400 → ✓ Schaltjahr
          </li>
        </ul>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Jahr zum Testen:</strong>
            <br />
            <input
              type="number"
              defaultValue={jahr}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 1000 && val <= 3000) {
                  setJahr(val)
                }
              }}
              min="1000"
              max="3000"
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "120px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
          <p style={{ fontSize: "14px", opacity: 0.8, marginTop: "10px" }}>
            Probieren Sie: 2024, 2023, 1900, 2000
          </p>
        </div>

        <SimpleSplitView
          component={SchaltjahrAnimation}
          inputProps={{ year: jahr, fps: 30 }}
          flowchart={schaltjahrChart}
          flowchartId="schaltjahr"
          totalSteps={schaltjahrSteps.length}
          stepDescriptions={schaltjahrDescriptions}
          getNodeId={(step) => schaltjahrSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>

      <Section classes="exercise">
        <h3>Übung 3: Schaltjahre</h3>
        <p>Sind die folgenden Jahre Schaltjahre?</p>
        <ul>
          <li>2028</li>
          <li>2100</li>
          <li>2400</li>
        </ul>
        <SolutionBlock taskId="schaltjahr-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ul>
            <li>
              <strong>2028:</strong> 2028 mod 4 = 0, 2028 mod 100 ≠ 0 → ✓
              Schaltjahr
            </li>
            <li>
              <strong>2100:</strong> 2100 mod 4 = 0, 2100 mod 100 = 0, 2100 mod
              400 ≠ 0 → ✗ Kein Schaltjahr
            </li>
            <li>
              <strong>2400:</strong> 2400 mod 4 = 0, 2400 mod 100 = 0, 2400 mod
              400 = 0 → ✓ Schaltjahr
            </li>
          </ul>
        </SolutionBlock>
      </Section>
    </>
  )
}
