import SimpleSplitView from "@components/algorithm/SimpleSplitView";
import {
  CharCountAnimation,
  generateCharCountSteps,
  generatePalindromSteps,
  PalindromAnimation,
} from "@components/remotion/StringAnimation";
import Section from "@components/Section";
import SolutionBlock from "@components/SolutionBlock";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FmsAlgorithmenStrings() {
  const [palindromStr, setPalindromStr] = useState("anna");
  const [charCountStr, setCharCountStr] = useState("hello");

  const palindromChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Gib String ein]
    Input --> Init1[Setze links auf 0]
    Init1 --> Init2[Setze rechts auf Länge minus 1]
    Init2 --> Check{Ist links &lt; rechts?}
    Check -->|Nein| IsPalindrom[Gib aus: Palindrom]
    Check -->|Ja| Compare{Ist Zeichen links = Zeichen rechts?}
    Compare -->|Nein| NotPalindrom[Gib aus: Kein Palindrom]
    Compare -->|Ja| Move1[Erhöhe links um 1]
    Move1 --> Move2[Verringere rechts um 1]
    Move2 --> Check
    IsPalindrom --> End([Ende])
    NotPalindrom --> End
  `;

  const charCountChart = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Gib String ein]
    Input --> Init1[Setze i auf 0]
    Init1 --> Init2[Erstelle leere Zähltabelle]
    Init2 --> Check{Ist i &lt; Länge?}
    Check -->|Nein| Output[Gib Zähltabelle aus]
    Check -->|Ja| GetChar[Hole Zeichen an Position i]
    GetChar --> Exists{Ist Zeichen schon in Tabelle?}
    Exists -->|Ja| Increment[Erhöhe Zähler für Zeichen um 1]
    Exists -->|Nein| InitCount[Setze Zähler für Zeichen auf 1]
    Increment --> Next[Gehe zum nächsten Zeichen]
    InitCount --> Next
    Next --> Check
    Output --> End([Ende])
  `;

  const palindromSteps = generatePalindromSteps(palindromStr);
  const charCountSteps = generateCharCountSteps(charCountStr);

  const palindromDescriptions = palindromSteps.map((s) => s.description);
  const charCountDescriptions = charCountSteps.map((s) => s.description);

  return (
    <>
      <section>
        <h2>String-Algorithmen</h2>

        <div
          style={{
            backgroundColor: "var(--color-bg-light)",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
            borderLeft: "4px solid var(--color-primary)",
          }}
        >
          <strong>💡 Hinweis:</strong> Die Flowcharts verwenden eine
          vereinfachte Sprache. Wenn dir Begriffe unklar sind, schaue im{" "}
          <Link to="/fms/algorithmen-glossar">Flowchart-Glossar</Link> nach.
        </div>

        <p>
          Strings (Zeichenketten) sind in der Programmierung allgegenwärtig. Wir
          schauen uns zwei grundlegende String-Algorithmen an:
        </p>
        <ol>
          <li>
            <strong>Palindrom-Prüfung</strong> - Vorwärts = Rückwärts?
          </li>
          <li>
            <strong>Zeichenhäufigkeit</strong> - Wie oft kommt welcher Buchstabe
            vor?
          </li>
        </ol>
      </section>

      <Section>
        <h2>1. Palindrom-Prüfung</h2>
        <p>
          Ein <strong>Palindrom</strong> ist ein Wort, das vorwärts und
          rückwärts gleich gelesen wird. Beispiele: "anna", "otto", "racecar".
        </p>

        <h3>Die Zwei-Zeiger-Technik</h3>
        <ol>
          <li>Setze einen Zeiger an den Anfang (left)</li>
          <li>Setze einen Zeiger ans Ende (right)</li>
          <li>Vergleiche die Zeichen an beiden Positionen</li>
          <li>Wenn unterschiedlich: Kein Palindrom!</li>
          <li>Wenn gleich: Bewege beide Zeiger zur Mitte</li>
          <li>Wiederhole, bis sich die Zeiger treffen</li>
        </ol>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>String zum Testen:</strong>
            <br />
            <input
              type="text"
              defaultValue={palindromStr}
              onChange={(e) => {
                const val = e.target.value.toLowerCase().replace(/[^a-z]/g, "");
                if (val.length >= 2 && val.length <= 15) {
                  setPalindromStr(val);
                }
              }}
              maxLength={15}
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "200px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
          <p style={{ fontSize: "14px", opacity: 0.8, marginTop: "10px" }}>
            Probieren Sie: anna, otto, racecar, hello
          </p>
        </div>

        <SimpleSplitView
          component={PalindromAnimation}
          inputProps={{ str: palindromStr, fps: 30 }}
          flowchart={palindromChart}
          flowchartId="palindrom"
          totalSteps={palindromSteps.length}
          stepDescriptions={palindromDescriptions}
          getNodeId={(step) => palindromSteps[step]?.mermaidNode}
          fps={30}
        />
      </Section>

      <Section classes="exercise">
        <h3>Übung 1: Palindrome</h3>
        <p>Welche der folgenden Wörter sind Palindrome?</p>
        <ul>
          <li>radar</li>
          <li>level</li>
          <li>hello</li>
          <li>noon</li>
        </ul>
        <SolutionBlock taskId="palindrom-exercise-1">
          <p>
            <strong>Lösung:</strong>
          </p>
          <ul>
            <li>
              <strong>radar</strong> - ✓ Palindrom (r-a-d-a-r)
            </li>
            <li>
              <strong>level</strong> - ✓ Palindrom (l-e-v-e-l)
            </li>
            <li>
              <strong>hello</strong> - ✗ Kein Palindrom (h≠o)
            </li>
            <li>
              <strong>noon</strong> - ✓ Palindrom (n-o-o-n)
            </li>
          </ul>
        </SolutionBlock>
      </Section>

      <Section>
        <h2>2. Zeichenhäufigkeit zählen</h2>
        <p>
          Oft möchte man wissen, wie oft jeder Buchstabe in einem Text vorkommt.
          Dies ist nützlich für Verschlüsselung, Textanalyse oder Kompression.
        </p>

        <h3>Wie funktioniert es?</h3>
        <ol>
          <li>Erstelle ein leeres Zähl-Objekt (counts)</li>
          <li>Gehe durch jeden Buchstaben im String</li>
          <li>Wenn der Buchstabe schon existiert: Erhöhe den Zähler um 1</li>
          <li>Wenn nicht: Initialisiere mit 1</li>
          <li>Am Ende hast du eine Häufigkeitstabelle</li>
        </ol>

        <h3>Visualisierung</h3>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block" }}>
            <strong>String zum Analysieren:</strong>
            <br />
            <input
              type="text"
              defaultValue={charCountStr}
              onChange={(e) => {
                const val = e.target.value.toLowerCase().replace(/[^a-z]/g, "");
                if (val.length >= 2 && val.length <= 15) {
                  setCharCountStr(val);
                }
              }}
              maxLength={15}
              style={{
                marginTop: "10px",
                padding: "8px",
                width: "200px",
                backgroundColor: "var(--color-bg-light)",
                color: "var(--color-fg)",
                border: "1px solid var(--color-gray)",
                borderRadius: "4px",
              }}
            />
          </label>
        </div>

        <SimpleSplitView
          component={CharCountAnimation}
          inputProps={{ str: charCountStr, fps: 30 }}
          flowchart={charCountChart}
          flowchartId="charcount"
          totalSteps={charCountSteps.length}
          stepDescriptions={charCountDescriptions}
          getNodeId={(step) => charCountSteps[step]?.mermaidNode}
          fps={30}
        />

        <h3>Anwendungen</h3>
        <ul>
          <li>
            <strong>Kryptoanalyse:</strong> Häufigkeitsanalyse bei
            Verschlüsselungen
          </li>
          <li>
            <strong>Datenkompression:</strong> Häufige Zeichen kürzer codieren
          </li>
          <li>
            <strong>Sprachanalyse:</strong> Welche Buchstaben kommen oft vor?
          </li>
        </ul>
      </Section>
    </>
  );
}
