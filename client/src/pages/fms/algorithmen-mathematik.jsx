import { useState } from "react"
import Section from "@components/Section"
import SolutionBlock from "@components/SolutionBlock"
import SimpleSplitView from "@components/algorithm/SimpleSplitView"
import {
  GGTAnimation,
  PrimzahlAnimation,
  FibonacciAnimation,
  FakultaetAnimation,
  PotenzAnimation,
  generateGGTSteps,
  generatePrimzahlSteps,
  generateFibonacciSteps,
  generateFakultaetSteps,
  generatePotenzSteps,
} from "@components/remotion/MathAnimation"

export default function FmsAlgorithmenMathematik() {
  const [ggtA, setGgtA] = useState(48)
  const [ggtB, setGgtB] = useState(18)
  const [primzahl, setPrimzahl] = useState(17)
  const [fibCount, setFibCount] = useState(8)
  const [fakultaetN, setFakultaetN] = useState(5)
  const [potenzBase, setPotenzBase] = useState(2)
  const [potenzExp, setPotenzExp] = useState(5)

  // Flussdiagramme
  const ggtChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Zwei Zahlen eingeben: a, b]
    Input --> Check{"b = 0?"}
    Check -->|Ja| Output[Ausgabe: a ist GGT]
    Check -->|Nein| Modulo["rest = a mod b"]
    Modulo --> Update1["a = b"]
    Update1 --> Update2["b = rest"]
    Update2 --> Check
    Output --> End([Ende])
  `

  const primzahlChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Zahl eingeben]
    Input --> CheckSmall{"n &lt;= 1?"}
    CheckSmall -->|Ja| NotPrime1[Ausgabe: Nicht prim]
    CheckSmall -->|Nein| Init["i = 2"]
    Init --> Check{"i &lt;= √n?"}
    Check -->|Nein| IsPrime[Ausgabe: Prim]
    Check -->|Ja| Mod{"n mod i = 0?"}
    Mod -->|Ja| NotPrime2[Ausgabe: Nicht prim]
    Mod -->|Nein| Incr["i = i + 1"]
    Incr --> Check
    IsPrime --> End([Ende])
    NotPrime1 --> End
    NotPrime2 --> End
  `

  const fakultaetChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Zahl n eingeben]
    Input --> CheckSmall{"n &lt;= 1?"}
    CheckSmall -->|Ja| Output1[Ausgabe: 1]
    CheckSmall -->|Nein| Init["i = 1 result = 1"]
    Init --> Check{"i &lt;= n?"}
    Check -->|Nein| Output2[Ausgabe: result]
    Check -->|Ja| Multiply["result = result × i"]
    Multiply --> Incr["i = i + 1"]
    Incr --> Check
    Output1 --> End([Ende])
    Output2 --> End
  `

  const potenzChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Basis und Exponent eingeben]
    Input --> Init["i = 0 result = 1"]
    Init --> Check{"i &lt; Exponent?"}
    Check -->|Nein| Output[Ausgabe: result]
    Check -->|Ja| Multiply["result = result × Basis"]
    Multiply --> Incr["i = i + 1"]
    Incr --> Check
    Output --> End([Ende])
  `

  const fibonacciChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Anzahl eingeben]
    Input --> Init1["F(0) = 0"]
    Init1 --> Init2["F(1) = 1"]
    Init2 --> LoopInit["i = 2"]
    LoopInit --> Check{"i &lt; Anzahl?"}
    Check -->|Nein| Output[Ausgabe: Folge]
    Check -->|Ja| Calc["F(i) = F(i-1) + F(i-2)"]
    Calc --> Incr["i = i + 1"]
    Incr --> Check
    Output --> End([Ende])
  `

  // Berechne Schritte
  const ggtSteps = generateGGTSteps(ggtA, ggtB)
  const primzahlSteps = generatePrimzahlSteps(primzahl)
  const fakultaetSteps = generateFakultaetSteps(fakultaetN)
  const potenzSteps = generatePotenzSteps(potenzBase, potenzExp)
  const fibonacciSteps = generateFibonacciSteps(fibCount)

  const ggtDescriptions = ggtSteps.map((s) => s.description)
  const primzahlDescriptions = primzahlSteps.map((s) => s.description)
  const fakultaetDescriptions = fakultaetSteps.map((s) => s.description)
  const potenzDescriptions = potenzSteps.map((s) => s.description)
  const fibonacciDescriptions = fibonacciSteps.map((s) => s.description)

  return (
    <>
      <section>
        <h2>Mathematische Algorithmen</h2>
        <p>
          Viele mathematische Probleme lassen sich mit einfachen Algorithmen
          lösen. Wir schauen uns fünf klassische Beispiele an:
        </p>
        <ol>
          <li>
            <strong>GGT (Größter gemeinsamer Teiler)</strong> - Euklid-Algorithmus
          </li>
          <li>
            <strong>Primzahltest</strong> - Ist eine Zahl prim?
          </li>
          <li>
            <strong>Fakultät</strong> - n! berechnen
          </li>
          <li>
            <strong>Potenz</strong> - a^b berechnen
          </li>
          <li>
            <strong>Fibonacci-Zahlen</strong> - Berühmte Zahlenfolge
          </li>
        </ol>
      </section>

      <Section>
        <h2>1. GGT (Größter gemeinsamer Teiler)</h2>
        <p>
          Der <strong>Euklid-Algorithmus</strong> findet den größten gemeinsamen
          Teiler zweier Zahlen. Er ist einer der ältesten bekannten Algorithmen
          (ca. 300 v. Chr.)!
        </p>

        <h3>Wie funktioniert der Algorithmus?</h3>
        <ol>
          <li>Teile die größere Zahl durch die kleinere (mit Rest)</li>
          <li>Ersetze die größere Zahl durch die kleinere</li>
          <li>Ersetze die kleinere Zahl durch den Rest</li>
          <li>Wiederhole, bis der Rest 0 ist</li>
          <li>Die übrig gebliebene Zahl ist der GGT</li>
        </ol>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Zahl a:</strong>
            <br />
            <input
              type="number"
              defaultValue={ggtA}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val > 0 && val <= 100) setGgtA(val)
              }}
              min="1"
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
          <label style={{ display: "block" }}>
            <strong>Zahl b:</strong>
            <br />
            <input
              type="number"
              defaultValue={ggtB}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val > 0 && val <= 100) setGgtB(val)
              }}
              min="1"
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
        </div>

        <SimpleSplitView
          component={GGTAnimation}
          inputProps={{ a: ggtA, b: ggtB, fps: 30 }}
          flowchart={ggtChart}
          flowchartId="ggt"
          totalSteps={ggtSteps.length}
          stepDescriptions={ggtDescriptions}
          getNodeId={(step) => ggtSteps[step]?.mermaidNode}
          fps={30}
        />

        <h3>Beispiel: GGT(48, 18)</h3>
        <ul>
          <li>48 mod 18 = 12 → GGT(18, 12)</li>
          <li>18 mod 12 = 6 → GGT(12, 6)</li>
          <li>12 mod 6 = 0 → GGT(6, 0)</li>
          <li>
            <strong>GGT = 6</strong>
          </li>
        </ul>
      </Section>

      <Section>
        <h2>2. Primzahltest</h2>
        <p>
          Ein <strong>Primzahltest</strong> prüft, ob eine Zahl nur durch 1 und
          sich selbst teilbar ist. Wir testen alle möglichen Teiler von 2 bis
          √n.
        </p>

        <h3>Warum nur bis √n?</h3>
        <p>
          Wenn n einen Teiler größer als √n hat, muss es auch einen Teiler
          kleiner als √n geben. Daher genügt es, bis √n zu testen!
        </p>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Zahl zum Testen:</strong>
            <br />
            <input
              type="number"
              defaultValue={primzahl}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 2 && val <= 100) setPrimzahl(val)
              }}
              min="2"
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
            Probieren Sie: 17 (prim), 15 (nicht prim), 29 (prim)
          </p>
        </div>

        <SimpleSplitView
          component={PrimzahlAnimation}
          inputProps={{ n: primzahl, fps: 30 }}
          flowchart={primzahlChart}
          flowchartId="primzahl"
          totalSteps={primzahlSteps.length}
          stepDescriptions={primzahlDescriptions}
          getNodeId={(step) => primzahlSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>

      <Section>
        <h2>3. Fakultät (n!)</h2>
        <p>
          Die <strong>Fakultät</strong> einer Zahl n (geschrieben als n!) ist das
          Produkt aller positiven ganzen Zahlen von 1 bis n.
        </p>

        <h3>Beispiele:</h3>
        <ul>
          <li>5! = 1 × 2 × 3 × 4 × 5 = 120</li>
          <li>3! = 1 × 2 × 3 = 6</li>
          <li>0! = 1 (per Definition)</li>
        </ul>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Zahl für Fakultät:</strong>
            <br />
            <input
              type="number"
              defaultValue={fakultaetN}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 0 && val <= 10) setFakultaetN(val)
              }}
              min="0"
              max="10"
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
            Max 10 (sonst wird die Zahl zu groß)
          </p>
        </div>

        <SimpleSplitView
          component={FakultaetAnimation}
          inputProps={{ n: fakultaetN, fps: 30 }}
          flowchart={fakultaetChart}
          flowchartId="fakultaet"
          totalSteps={fakultaetSteps.length}
          stepDescriptions={fakultaetDescriptions}
          getNodeId={(step) => fakultaetSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>

      <Section>
        <h2>4. Potenz (a^b)</h2>
        <p>
          Die <strong>Potenz</strong> berechnet a hoch b durch wiederholte
          Multiplikation: a × a × ... × a (b-mal).
        </p>

        <h3>Beispiele:</h3>
        <ul>
          <li>2^5 = 2 × 2 × 2 × 2 × 2 = 32</li>
          <li>3^4 = 3 × 3 × 3 × 3 = 81</li>
          <li>10^3 = 10 × 10 × 10 = 1000</li>
        </ul>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Basis:</strong>
            <br />
            <input
              type="number"
              defaultValue={potenzBase}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 1 && val <= 10) setPotenzBase(val)
              }}
              min="1"
              max="10"
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
          <label style={{ display: "block" }}>
            <strong>Exponent:</strong>
            <br />
            <input
              type="number"
              defaultValue={potenzExp}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 0 && val <= 10) setPotenzExp(val)
              }}
              min="0"
              max="10"
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

        <SimpleSplitView
          component={PotenzAnimation}
          inputProps={{ base: potenzBase, exponent: potenzExp, fps: 30 }}
          flowchart={potenzChart}
          flowchartId="potenz"
          totalSteps={potenzSteps.length}
          stepDescriptions={potenzDescriptions}
          getNodeId={(step) => potenzSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>

      <Section>
        <h2>5. Fibonacci-Zahlen</h2>
        <p>
          Die <strong>Fibonacci-Folge</strong> beginnt mit 0 und 1. Jede weitere
          Zahl ist die Summe der beiden vorherigen: 0, 1, 1, 2, 3, 5, 8, 13, 21,
          ...
        </p>

        <h3>Vorkommen in der Natur</h3>
        <ul>
          <li>Blütenblätter (oft Fibonacci-Zahlen)</li>
          <li>Schneckenhäuser (Spiralen)</li>
          <li>Kiefernzapfen-Muster</li>
        </ul>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>Wie viele Fibonacci-Zahlen?</strong>
            <br />
            <input
              type="number"
              defaultValue={fibCount}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (!isNaN(val) && val >= 2 && val <= 15) setFibCount(val)
              }}
              min="2"
              max="15"
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

        <SimpleSplitView
          component={FibonacciAnimation}
          inputProps={{ count: fibCount, fps: 30 }}
          flowchart={fibonacciChart}
          flowchartId="fibonacci"
          totalSteps={fibonacciSteps.length}
          stepDescriptions={fibonacciDescriptions}
          getNodeId={(step) => fibonacciSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>
    </>
  )
}
