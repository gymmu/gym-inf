import Mermaid from "@components/Mermaid"
import Section from "@components/Section"

export default function FmsAlgorithmenLoops() {
  // Beispiel 1: Summe von 1 bis 10
  const summe1bis10 = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init1[summe = 0]
    Init1 --> Init2[zahl = 1]
    Init2 --> Check{zahl <= 10?}
    Check -->|Ja| Add[summe = summe + zahl]
    Add --> Increment[zahl = zahl + 1]
    Increment --> Check
    Check -->|Nein| Output[Ausgabe: summe]
    Output --> End([Ende])
  `

  // Beispiel 2: Countdown
  const countdown = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init[zaehler = 10]
    Init --> Check{zaehler > 0?}
    Check -->|Ja| Output1[Ausgabe: zaehler]
    Output1 --> Decrement[zaehler = zaehler - 1]
    Decrement --> Check
    Check -->|Nein| Output2[Ausgabe: Start!]
    Output2 --> End([Ende])
  `

  // Beispiel 3: Maximum aus einer Liste
  const maxListe = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Liste eingeben]
    Input --> Init[max = erstes Element]
    Init --> CheckEnd{Noch Elemente<br/>vorhanden?}
    CheckEnd -->|Ja| Next[Gehe zum nächsten Element]
    Next --> Compare{Element > max?}
    Compare -->|Ja| Update[max = Element]
    Compare -->|Nein| CheckEnd
    Update --> CheckEnd
    CheckEnd -->|Nein| Output[Ausgabe: max]
    Output --> End([Ende])
  `

  return (
    <>
      <section>
        <h2>Algorithmen mit Schleifen</h2>
        <p>
          Bis jetzt haben wir nur Algorithmen angeschaut, die einen direkten,
          linearen Fluss haben. In der Praxis müssen wir aber oft Aktionen
          wiederholen. Dafür verwenden wir <strong>Schleifen</strong> (auch
          Loops genannt).
        </p>
        <p>
          Eine Schleife entsteht in einem Flussdiagramm, wenn ein Pfeil auf
          einen Knoten zurückzeigt, den wir bereits durchlaufen haben. Dadurch
          können wir bestimmte Schritte mehrfach ausführen, bis eine Bedingung
          erfüllt ist.
        </p>
      </section>

      <Section>
        <h3>Beispiel 1: Summe von 1 bis 10</h3>
        <p>
          Ein klassisches Beispiel ist das Addieren aller Zahlen von 1 bis 10.
          Der Algorithmus verwendet eine Schleife, um nacheinander alle Zahlen
          zu addieren:
        </p>
        <Mermaid chart={summe1bis10} id="summe-1-bis-10" />
        <h4>Wie funktioniert dieser Algorithmus?</h4>
        <ol>
          <li>
            Wir starten mit <code>summe = 0</code> und <code>zahl = 1</code>
          </li>
          <li>
            Wir prüfen: Ist <code>zahl {"<="} 10</code>?
          </li>
          <li>
            Falls ja: Addiere <code>zahl</code> zur <code>summe</code> und
            erhöhe <code>zahl</code> um 1
          </li>
          <li>Springe zurück zur Prüfung (Schleife!)</li>
          <li>
            Falls nein: Die Schleife endet, wir geben <code>summe</code> aus
          </li>
        </ol>
        <p>
          <strong>Ergebnis:</strong> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
        </p>
        <p>
          Der <strong>Rückwärtspfeil</strong> vom Knoten "zahl = zahl + 1"
          zurück zur Entscheidung "zahl {"<="} 10?" erzeugt die Schleife. Diese
          wird so lange wiederholt, bis die Bedingung nicht mehr erfüllt ist.
        </p>
      </Section>

      <section>
        <h3>Beispiel 2: Countdown</h3>
        <p>
          Schleifen können auch rückwärts zählen. Hier ist ein Countdown von 10
          bis 0:
        </p>
        <Mermaid chart={countdown} id="countdown" />
        <h4>Ablauf des Countdowns:</h4>
        <ol>
          <li>
            Starte mit <code>zaehler = 10</code>
          </li>
          <li>
            Prüfe: Ist <code>zaehler {">"} 0</code>?
          </li>
          <li>
            Falls ja: Gib <code>zaehler</code> aus (10, 9, 8, ...)
          </li>
          <li>
            Verringere <code>zaehler</code> um 1
          </li>
          <li>Springe zurück zur Prüfung</li>
          <li>Falls nein: Gib "Start!" aus und beende</li>
        </ol>
        <p>
          <strong>Ausgabe:</strong> 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Start!
        </p>
      </section>

      <Section>
        <h2>Schleifen mit Listen</h2>
        <p>
          Schleifen werden besonders häufig verwendet, um{" "}
          <strong>Listen</strong> (auch Arrays genannt) zu durchlaufen. Eine
          Liste ist eine Sammlung von Werten, zum Beispiel: [5, 12, 8, 20, 3].
        </p>
        <p>
          Mit einer Schleife können wir jedes Element der Liste nacheinander
          verarbeiten. Ein häufiges Beispiel ist das Finden des{" "}
          <strong>Maximum-Werts</strong> in einer Liste.
        </p>
      </Section>

      <section>
        <h3>Beispiel 3: Maximum aus einer Liste finden</h3>
        <p>
          Dieser Algorithmus findet die grösste Zahl in einer Liste beliebiger
          Länge:
        </p>
        <Mermaid chart={maxListe} id="max-liste" />
        <h4>So funktioniert der Algorithmus:</h4>
        <ol>
          <li>
            Wir nehmen das <strong>erste Element</strong> der Liste als
            bisheriges Maximum
          </li>
          <li>
            Wir gehen zum <strong>nächsten Element</strong> in der Liste
          </li>
          <li>Wir prüfen: Sind noch Elemente vorhanden?</li>
          <li>
            Falls ja: Vergleichen wir das aktuelle Element mit unserem Maximum
          </li>
          <li>Wenn das Element grösser ist, wird es das neue Maximum</li>
          <li>Dann gehen wir wieder zum nächsten Element (Schleife!)</li>
          <li>
            Falls keine Elemente mehr vorhanden sind: Geben wir das Maximum aus
          </li>
        </ol>
        <h4>Beispiel-Durchlauf mit der Liste [5, 12, 8, 20, 3]:</h4>
        <table
          style={{
            marginBottom: "1.5rem",
            width: "100%",
            borderCollapse: "collapse",
          }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}>
                Schritt
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}>
                Aktuelles Element
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}>
                Noch Elemente?
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}>
                Vergleich
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}>
                max
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Erstes Element
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>12</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Ja</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                12 {">"} 5? Ja
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>12</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>8</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Ja</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                8 {">"} 12? Nein
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>12</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>20</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Ja</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                20 {">"} 12? Ja
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>20</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Ja</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                3 {">"} 20? Nein
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>20</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>6</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Nein</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                Liste zu Ende
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>20</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Ergebnis:</strong> Das Maximum ist 20
        </p>
      </section>

      <Section>
        <h2>Wichtige Konzepte bei Schleifen</h2>
        <h3>1. Schleifenbedingung</h3>
        <p>
          Jede Schleife braucht eine <strong>Bedingung</strong>, die bestimmt,
          wann die Schleife weiterlaufen soll. Beispiele:
        </p>
        <ul>
          <li>
            <code>zahl {"<="} 10</code> - Solange die Zahl kleiner oder gleich
            10 ist
          </li>
          <li>
            <code>zaehler {">"} 0</code> - Solange der Zähler grösser als 0 ist
          </li>
          <li>
            <code>index {"<="} Länge</code> - Solange wir nicht am Ende der
            Liste sind
          </li>
        </ul>

        <h3>2. Schleifenvariable</h3>
        <p>
          Die Variable, die in der Schleife verändert wird (z.B.{" "}
          <code>zahl</code>, <code>zaehler</code>), nennt man{" "}
          <strong>Schleifenvariable</strong> oder <strong>Zählvariable</strong>.
        </p>

        <h3>3. Endlosschleifen vermeiden</h3>
        <p>
          <strong>Achtung:</strong> Eine Schleife muss irgendwann enden! Wenn
          die Schleifenbedingung immer wahr bleibt, läuft die Schleife ewig
          weiter (Endlosschleife). Deshalb ist es wichtig, dass die
          Schleifenvariable in jedem Durchlauf angepasst wird.
        </p>

        <h3>4. Schleifenarten</h3>
        <p>Es gibt verschiedene Arten von Schleifen:</p>
        <ul>
          <li>
            <strong>Zählschleifen:</strong> Wiederholen eine bestimmte Anzahl
            (z.B. 10 mal)
          </li>
          <li>
            <strong>Bedingungsschleifen:</strong> Wiederholen, solange eine
            Bedingung wahr ist
          </li>
          <li>
            <strong>Listen-Schleifen:</strong> Durchlaufen alle Elemente einer
            Liste
          </li>
        </ul>
      </Section>
    </>
  )
}
