import Mermaid from "@components/Mermaid"
import Section from "@components/Section"
import SolutionBlock from "@components/SolutionBlock.jsx"

export default function FmsAlgorithmenAufgaben() {
  // Aufgabe 1: Einfacher Zähler
  const zaehler = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init[zaehler = 0]
    Init --> Add[zaehler = zaehler + 5]
    Add --> Output[Ausgabe: zaehler]
    Output --> End([Ende])
  `

  // Aufgabe 3: Gerade oder ungerade
  const geradeUngerade = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Zahl eingeben]
    Input --> Check{Ist Zahl % 2 = 0?}
    Check -->|Ja| Gerade[Ausgabe: Gerade]
    Check -->|Nein| Ungerade[Ausgabe: Ungerade]
    Gerade --> End([Ende])
    Ungerade --> End
  `

  // Aufgabe 5: Temperaturprüfung
  const temperatur = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Temperatur eingeben]
    Input --> Check1{Temp < 0?}
    Check1 -->|Ja| Cold[Ausgabe: Eiskalt]
    Check1 -->|Nein| Check2{Temp < 15?}
    Check2 -->|Ja| Cool[Ausgabe: Kalt]
    Check2 -->|Nein| Check3{Temp < 25?}
    Check3 -->|Ja| Warm[Ausgabe: Angenehm]
    Check3 -->|Nein| Hot[Ausgabe: Heiss]
    Cold --> End([Ende])
    Cool --> End
    Warm --> End
    Hot --> End
  `

  // Aufgabe 7: Summe von zwei Zahlen
  const summe = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input1[a eingeben]
    Input1 --> Input2[b eingeben]
    Input2 --> Calc[summe = a + b]
    Calc --> Output[Ausgabe: summe]
    Output --> End([Ende])
  `

  // Aufgabe 6: Rabatt-Berechnung
  const rabatt = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Betrag eingeben]
    Input --> Check{Ist Betrag > 100?}
    Check -->|Ja| Discount[preis = Betrag * 0.9]
    Check -->|Nein| NoDiscount[preis = Betrag]
    Discount --> Output[Ausgabe: preis]
    NoDiscount --> Output
    Output --> End([Ende])
  `

  // Aufgabe 8: Produkt von zwei Zahlen
  const produkt = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input1[a eingeben]
    Input1 --> Input2[b eingeben]
    Input2 --> Calc[produkt = a * b]
    Calc --> Output[Ausgabe: produkt]
    Output --> End([Ende])
  `

  // Aufgabe 9: Schaltjahr-Prüfung (vereinfacht)
  const schaltjahr = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Jahr eingeben]
    Input --> Check{Ist Jahr % 4 = 0?}
    Check -->|Ja| Leap[Ausgabe: Schaltjahr]
    Check -->|Nein| Normal[Ausgabe: Normales Jahr]
    Leap --> End([Ende])
    Normal --> End
  `

  // Aufgabe 10: Passwort-Check
  const passwort = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Passwort eingeben]
    Input --> Check{Ist Passwort = geheim123?}
    Check -->|Ja| Grant[Ausgabe: Zugang gewährt]
    Check -->|Nein| Deny[Ausgabe: Zugang verweigert]
    Grant --> End([Ende])
    Deny --> End
  `

  // Aufgabe 12: Countdown von 5 bis 0
  const countdownLoop = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init[zaehler = 5]
    Init --> Check{zaehler >= 0?}
    Check -->|Ja| Output[Ausgabe: zaehler]
    Output --> Decrement[zaehler = zaehler - 1]
    Decrement --> Check
    Check -->|Nein| End([Ende])
  `

  // Aufgabe 14: Summe von 1 bis n
  const summeN = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[n eingeben]
    Input --> Init1[summe = 0]
    Init1 --> Init2[zahl = 1]
    Init2 --> Check{zahl <= n?}
    Check -->|Ja| Add[summe = summe + zahl]
    Add --> Increment[zahl = zahl + 1]
    Increment --> Check
    Check -->|Nein| Output[Ausgabe: summe]
    Output --> End([Ende])
  `

  // Aufgabe 16: Gerade Zahlen zählen in einer Liste
  const geradeZaehlen = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Liste eingeben]
    Input --> Init[anzahl = 0]
    Init --> Check{Noch Elemente<br/>vorhanden?}
    Check -->|Ja| Next[Gehe zum nächsten Element]
    Next --> IsEven{Element % 2 = 0?}
    IsEven -->|Ja| Count[anzahl = anzahl + 1]
    IsEven -->|Nein| Check
    Count --> Check
    Check -->|Nein| Output[Ausgabe: anzahl]
    Output --> End([Ende])
  `

  // Aufgabe 18: Minimum aus einer Liste
  const minListe = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Liste eingeben]
    Input --> Init[min = erstes Element]
    Init --> Check{Noch Elemente<br/>vorhanden?}
    Check -->|Ja| Next[Gehe zum nächsten Element]
    Next --> Compare{Element < min?}
    Compare -->|Ja| Update[min = Element]
    Compare -->|Nein| Check
    Update --> Check
    Check -->|Nein| Output[Ausgabe: min]
    Output --> End([Ende])
  `

  // Aufgabe 13: Zahlen 1 bis 5
  const zahlen1bis5 = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init[zahl = 1]
    Init --> Check{zahl <= 5?}
    Check -->|Ja| Output[Ausgabe: zahl]
    Output --> Increment[zahl = zahl + 1]
    Increment --> Check
    Check -->|Nein| End([Ende])
  `

  // Aufgabe 17: Ungerade Zahlen 1 bis 9
  const ungerade1bis9 = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init[zahl = 1]
    Init --> Check{zahl <= 9?}
    Check -->|Ja| Output[Ausgabe: zahl]
    Output --> Add[zahl = zahl + 2]
    Add --> Check
    Check -->|Nein| End([Ende])
  `

  // Aufgabe 20: Alle Zahlen durch 3 teilbar
  const teilbarDrei = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Init[zahl = 3]
    Init --> Check{zahl <= 30?}
    Check -->|Ja| Output[Ausgabe: zahl]
    Output --> Add[zahl = zahl + 3]
    Add --> Check
    Check -->|Nein| End([Ende])
  `

  return (
    <>
      <section>
        <h2>Algorithmen - Aufgaben</h2>
        <p>
          Hier findest du verschiedene Aufgaben zum Thema Algorithmen und
          Flussdiagramme. Die Aufgaben reichen vom einfachen Ausführen von
          Diagrammen bis zum Erstellen eigener Algorithmen.
        </p>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 1: Flussdiagramm ausführen (Zähler)</h3>
        <p>Führe das folgende Flussdiagramm aus:</p>
        <Mermaid chart={zaehler} id="aufgabe-1" />
        <SolutionBlock
          taskId="algo-aufgabe-1"
          hint="Führe jeden Schritt des Flussdiagramms nacheinander aus und schreibe dir die Werte der Variablen auf.">
          <ol>
            <li>Start</li>
            <li>zaehler = 0</li>
            <li>zaehler = zaehler + 5 → zaehler = 5</li>
            <li>Ausgabe: 5</li>
            <li>Ende</li>
          </ol>
          <p>
            <strong>Ergebnis:</strong> Der Algorithmus gibt die Zahl 5 aus.
          </p>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 2: Algorithmus beschreiben</h3>
        <p>
          Beschreibe in eigenen Worten, was der Algorithmus aus Aufgabe 1 macht.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-2"
          hint="Beschreibe jeden Schritt mit eigenen Worten: Was wird gemacht und warum?">
          <p>
            Der Algorithmus initialisiert eine Variable "zaehler" mit dem Wert
            0, addiert dann 5 zu dieser Variable und gibt das Ergebnis aus. Das
            Programm zeigt also die Zahl 5 an.
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 3: Flussdiagramm ausführen (Gerade/Ungerade)</h3>
        <p>
          Führe das folgende Flussdiagramm mit den Eingaben <strong>8</strong>{" "}
          und <strong>13</strong> aus:
        </p>
        <Mermaid chart={geradeUngerade} id="aufgabe-3" />
        <SolutionBlock
          taskId="algo-aufgabe-3"
          hint="Prüfe bei jeder Entscheidung, ob die Bedingung wahr oder falsch ist. Der Modulo-Operator (%) gibt den Rest einer Division zurück.">
          <h4>Durchlauf 1: Eingabe = 8</h4>
          <ol>
            <li>Start</li>
            <li>Zahl eingeben: 8</li>
            <li>Ist 8 % 2 = 0? → Ja (8 geteilt durch 2 hat Rest 0)</li>
            <li>Ausgabe: Gerade</li>
            <li>Ende</li>
          </ol>
          <h4>Durchlauf 2: Eingabe = 13</h4>
          <ol>
            <li>Start</li>
            <li>Zahl eingeben: 13</li>
            <li>Ist 13 % 2 = 0? → Nein (13 geteilt durch 2 hat Rest 1)</li>
            <li>Ausgabe: Ungerade</li>
            <li>Ende</li>
          </ol>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 4: Algorithmus beschreiben</h3>
        <p>
          Was macht der Algorithmus aus Aufgabe 3? Erkläre auch, was der
          Modulo-Operator (%) bedeutet.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-4"
          hint="Überlege: Was bedeutet % (Modulo)? Was passiert wenn man eine Zahl durch 2 teilt?">
          <p>
            Der Algorithmus prüft, ob eine eingegebene Zahl gerade oder ungerade
            ist. Der Modulo-Operator (%) berechnet den Rest einer Division. Wenn
            eine Zahl durch 2 geteilt wird und der Rest 0 ist, dann ist die Zahl
            gerade. Ist der Rest nicht 0 (also 1), dann ist die Zahl ungerade.
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 5: Flussdiagramm ausführen (Temperatur)</h3>
        <p>
          Führe das folgende Flussdiagramm mit den Temperaturen{" "}
          <strong>-5°C</strong>, <strong>10°C</strong> und <strong>30°C</strong>{" "}
          aus:
        </p>
        <Mermaid chart={temperatur} id="aufgabe-5" />
        <SolutionBlock
          taskId="algo-aufgabe-5"
          hint="Folge dem Diagramm Schritt für Schritt. Bei jeder Entscheidung wähle den richtigen Pfad (Ja oder Nein) basierend auf dem Wert.">
          <h4>Durchlauf 1: Temperatur = -5</h4>
          <ol>
            <li>Start</li>
            <li>Temperatur eingeben: -5</li>
            <li>Ist -5 {"<"} 0? → Ja</li>
            <li>Ausgabe: Eiskalt</li>
            <li>Ende</li>
          </ol>
          <h4>Durchlauf 2: Temperatur = 10</h4>
          <ol>
            <li>Start</li>
            <li>Temperatur eingeben: 10</li>
            <li>Ist 10 {"<"} 0? → Nein</li>
            <li>Ist 10 {"<"} 15? → Ja</li>
            <li>Ausgabe: Kalt</li>
            <li>Ende</li>
          </ol>
          <h4>Durchlauf 3: Temperatur = 30</h4>
          <ol>
            <li>Start</li>
            <li>Temperatur eingeben: 30</li>
            <li>Ist 30 {"<"} 0? → Nein</li>
            <li>Ist 30 {"<"} 15? → Nein</li>
            <li>Ist 30 {"<"} 25? → Nein</li>
            <li>Ausgabe: Heiss</li>
            <li>Ende</li>
          </ol>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 6: Eigenes Flussdiagramm zeichnen (Rabatt)</h3>
        <p>
          Zeichne ein Flussdiagramm für folgenden Algorithmus: Ein Kunde gibt
          einen Einkaufsbetrag ein. Wenn der Betrag über 100 CHF liegt, erhält
          der Kunde 10% Rabatt. Gib den finalen Preis aus.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-6"
          hint="Du brauchst: Start, Eingabe (Betrag), eine Entscheidung (Betrag > 100?), zwei Berechnungen (mit/ohne Rabatt), Ausgabe, Ende.">
          <p>Ein mögliches Flussdiagramm könnte so aussehen:</p>
          <Mermaid chart={rabatt} id="loesung-6" />
          <p>
            Erklärung: Prüfe, ob der Betrag grösser als 100 ist. Falls ja,
            berechne den Preis mit 10% Rabatt (multipliziere mit 0.9). Falls
            nein, bleibt der Preis gleich dem Betrag. Am Ende wird der finale
            Preis ausgegeben.
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 7: Flussdiagramm ausführen (Summe)</h3>
        <p>
          Führe das folgende Flussdiagramm mit a = <strong>15</strong> und b ={" "}
          <strong>27</strong> aus:
        </p>
        <Mermaid chart={summe} id="aufgabe-7" />
        <SolutionBlock
          taskId="algo-aufgabe-7"
          hint="Gehe jeden Schritt durch und berechne die Summe mit den gegebenen Werten für a und b.">
          <ol>
            <li>Start</li>
            <li>a eingeben: 15</li>
            <li>b eingeben: 27</li>
            <li>summe = 15 + 27 = 42</li>
            <li>Ausgabe: 42</li>
            <li>Ende</li>
          </ol>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 8: Flussdiagramm abändern</h3>
        <p>
          Ändere das Flussdiagramm aus Aufgabe 7 so ab, dass es nicht die Summe,
          sondern das Produkt (a * b) der beiden Zahlen berechnet. Beschreibe,
          welche Änderungen du vornehmen würdest.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-8"
          hint="Ersetze das + durch * und ändere den Variablennamen von 'summe' zu 'produkt'.">
          <p>Folgende Änderungen sind nötig:</p>
          <ol>
            <li>
              Im Knoten "summe = a + b" ändern wir die Berechnung zu "produkt =
              a * b"
            </li>
            <li>
              Im Ausgabe-Knoten ändern wir "Ausgabe: summe" zu "Ausgabe:
              produkt"
            </li>
          </ol>
          <p>Das abgeänderte Flussdiagramm sieht dann so aus:</p>
          <Mermaid chart={produkt} id="loesung-8" />
          <p>
            Mit den Werten a = 15 und b = 27 würde das Ergebnis dann 405 sein
            (15 * 27 = 405).
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 9: Flussdiagramm ausführen (Schaltjahr)</h3>
        <p>
          Führe das folgende Flussdiagramm mit den Jahren <strong>2024</strong>{" "}
          und <strong>2023</strong> aus:
        </p>
        <Mermaid chart={schaltjahr} id="aufgabe-9" />
        <p>
          <em>
            Hinweis: Dies ist eine vereinfachte Schaltjahr-Prüfung. In der
            Realität ist die Regel komplexer.
          </em>
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-9"
          hint="Prüfe, ob das Jahr durch 4 teilbar ist (Rest = 0). Das kannst du mit dem Modulo-Operator % prüfen.">
          <h4>Durchlauf 1: Jahr = 2024</h4>
          <ol>
            <li>Start</li>
            <li>Jahr eingeben: 2024</li>
            <li>Ist 2024 % 4 = 0? → Ja (2024 / 4 = 506, Rest 0)</li>
            <li>Ausgabe: Schaltjahr</li>
            <li>Ende</li>
          </ol>
          <h4>Durchlauf 2: Jahr = 2023</h4>
          <ol>
            <li>Start</li>
            <li>Jahr eingeben: 2023</li>
            <li>Ist 2023 % 4 = 0? → Nein (2023 / 4 = 505.75, Rest 3)</li>
            <li>Ausgabe: Normales Jahr</li>
            <li>Ende</li>
          </ol>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 10: Eigenes Flussdiagramm zeichnen (Passwort)</h3>
        <p>
          Entwirf ein Flussdiagramm für einen einfachen Passwort-Check: Der
          Benutzer gibt ein Passwort ein. Wenn das Passwort "geheim123" ist,
          wird "Zugang gewährt" ausgegeben, ansonsten "Zugang verweigert".
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-10"
          hint="Benötigt: Start, Eingabe (Passwort), eine Entscheidung (Passwort = 'geheim123'?), zwei Ausgaben (Zugang gewährt/verweigert), Ende.">
          <p>Ein mögliches Flussdiagramm:</p>
          <Mermaid chart={passwort} id="loesung-10" />
          <p>
            Wichtig: In diesem Diagramm haben wir eine Entscheidung mit zwei
            möglichen Ausgängen (Ja/Nein), die zu unterschiedlichen
            Ausgabe-Knoten führen. Beide Wege enden beim gleichen Ende-Knoten.
          </p>
        </SolutionBlock>
      </section>

      <section>
        <h2>Aufgaben mit Schleifen (11-20)</h2>
        <p>
          Die folgenden Aufgaben behandeln Algorithmen mit Schleifen. Schau dir
          zuerst die Seite "Schleifen" an, wenn du noch nicht mit diesem Thema
          vertraut bist.
        </p>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 11: Algorithmus beschreiben (Schleife)</h3>
        <p>
          Beschreibe in eigenen Worten, was eine Schleife in einem Algorithmus
          macht und wofür man sie verwendet.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-11"
          hint="Überlege: Was passiert, wenn ein Pfeil auf einen bereits besuchten Knoten zurückzeigt?">
          <p>
            Eine Schleife ist eine Wiederholung von Schritten in einem
            Algorithmus. Sie entsteht, wenn ein Pfeil auf einen Knoten
            zurückzeigt, den wir bereits durchlaufen haben. Schleifen werden
            verwendet, um Aktionen mehrfach auszuführen, zum Beispiel um alle
            Zahlen von 1 bis 10 zu addieren oder um alle Elemente einer Liste zu
            durchlaufen. Eine Schleife hat immer eine Bedingung, die bestimmt,
            wann die Wiederholung endet.
          </p>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 12: Flussdiagramm ausführen (Countdown)</h3>
        <p>Führe das folgende Flussdiagramm aus. Was wird ausgegeben?</p>
        <Mermaid chart={countdownLoop} id="aufgabe-12" />
        <SolutionBlock
          taskId="algo-aufgabe-12"
          hint="Beginne mit zaehler = 5 und folge der Schleife. Was passiert bei jedem Durchlauf?">
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
                  Aktion / Bedingung
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  }}>
                  zaehler
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Start
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = 5
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist zaehler {">="} 0? → 5 {">="} 0? → Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 5
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = zaehler - 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>6</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist zaehler {">="} 0? → 4 {">="} 0? → Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>7</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 4
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>8</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = zaehler - 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>9</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 3
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>10</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = zaehler - 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>11</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 2
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>12</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = zaehler - 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>13</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>14</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = zaehler - 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>15</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 0
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>16</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zaehler = zaehler - 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>17</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist zaehler {">="} 0? → -1 {">="} 0? → Nein
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>18</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ende
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-1</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Ausgabe:</strong> 5, 4, 3, 2, 1, 0
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 13: Eigenes Flussdiagramm (Zahlen 1 bis 5)</h3>
        <p>
          Zeichne ein Flussdiagramm, das alle Zahlen von 1 bis 5 ausgibt.
          Verwende eine Schleife.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-13"
          hint="Du brauchst eine Zählvariable, die bei 1 startet und bei jedem Durchlauf um 1 erhöht wird. Die Schleife läuft, solange die Variable <= 5 ist.">
          <p>Ein mögliches Flussdiagramm:</p>
          <Mermaid chart={zahlen1bis5} id="loesung-13" />
          <p>
            Der Algorithmus gibt 1, 2, 3, 4, 5 aus. Nach der Ausgabe von 5 wird
            zahl auf 6 erhöht, die Bedingung ist dann falsch und die Schleife
            endet.
          </p>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 14: Flussdiagramm ausführen (Summe bis n)</h3>
        <p>
          Führe das folgende Flussdiagramm mit <strong>n = 4</strong> aus:
        </p>
        <Mermaid chart={summeN} id="aufgabe-14" />
        <SolutionBlock
          taskId="algo-aufgabe-14"
          hint="Schreibe bei jedem Schritt die Werte von summe und zahl auf.">
          <h4>Durchlauf mit n = 4:</h4>
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
                  Aktion / Bedingung
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  }}>
                  zahl
                </th>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "8px",
                    textAlign: "left",
                  }}>
                  summe
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Start, n = 4
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  summe = 0
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>-</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zahl = 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist 1 {"<="} 4? → Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  summe = 0 + 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>6</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zahl = 1 + 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>7</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist 2 {"<="} 4? → Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>8</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  summe = 1 + 2
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>9</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zahl = 2 + 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>10</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist 3 {"<="} 4? → Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>11</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  summe = 3 + 3
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>6</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>12</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zahl = 3 + 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>6</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>13</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist 4 {"<="} 4? → Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>6</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>14</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  summe = 6 + 4
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>10</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>15</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  zahl = 4 + 1
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>10</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>16</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ist 5 {"<="} 4? → Nein
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>10</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>17</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Ausgabe: 10, Ende
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>10</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Ergebnis:</strong> 1 + 2 + 3 + 4 = 10
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 15: Algorithmus beschreiben (Summe)</h3>
        <p>
          Was macht der Algorithmus aus Aufgabe 14? Erkläre in eigenen Worten.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-15"
          hint="Der Algorithmus addiert Zahlen. Welche Zahlen genau?">
          <p>
            Der Algorithmus berechnet die Summe aller Zahlen von 1 bis zu einer
            eingegebenen Zahl n. Er verwendet eine Schleife, die bei 1 beginnt
            und bis n zählt. In jedem Durchlauf wird die aktuelle Zahl zur Summe
            addiert. Am Ende wird die Gesamtsumme ausgegeben. Zum Beispiel: Wenn
            n = 4, dann rechnet der Algorithmus 1 + 2 + 3 + 4 = 10.
          </p>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 16: Flussdiagramm ausführen (Gerade Zahlen zählen)</h3>
        <p>
          Führe das folgende Flussdiagramm mit der Liste{" "}
          <strong>[4, 7, 10, 13, 16]</strong> aus:
        </p>
        <Mermaid chart={geradeZaehlen} id="aufgabe-16" />
        <SolutionBlock
          taskId="algo-aufgabe-16"
          hint="Eine Zahl ist gerade, wenn sie durch 2 teilbar ist (Rest = 0). Zähle, wie viele gerade Zahlen in der Liste sind.">
          <h4>Durchlauf mit [4, 7, 10, 13, 16]:</h4>
          <ol>
            <li>Start, Liste eingeben: [4, 7, 10, 13, 16]</li>
            <li>anzahl = 0</li>
            <li>Noch Elemente? Ja → Element: 4</li>
            <li>Ist 4 % 2 = 0? Ja → anzahl = 1</li>
            <li>Noch Elemente? Ja → Element: 7</li>
            <li>Ist 7 % 2 = 0? Nein</li>
            <li>Noch Elemente? Ja → Element: 10</li>
            <li>Ist 10 % 2 = 0? Ja → anzahl = 2</li>
            <li>Noch Elemente? Ja → Element: 13</li>
            <li>Ist 13 % 2 = 0? Nein</li>
            <li>Noch Elemente? Ja → Element: 16</li>
            <li>Ist 16 % 2 = 0? Ja → anzahl = 3</li>
            <li>Noch Elemente? Nein</li>
            <li>Ausgabe: 3</li>
          </ol>
          <p>
            <strong>Ergebnis:</strong> In der Liste gibt es 3 gerade Zahlen (4,
            10, 16).
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 17: Eigenes Flussdiagramm (Ungerade Zahlen)</h3>
        <p>
          Zeichne ein Flussdiagramm, das alle ungeraden Zahlen von 1 bis 9
          ausgibt.
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-17"
          hint="Du kannst entweder in 2er-Schritten zählen (1, 3, 5, ...) oder jede Zahl prüfen, ob sie ungerade ist.">
          <p>Möglichkeit 1: In 2er-Schritten zählen</p>
          <Mermaid chart={ungerade1bis9} id="loesung-17" />
          <p>
            <strong>Ausgabe:</strong> 1, 3, 5, 7, 9
          </p>
          <p>
            Diese Lösung ist effizienter, da wir direkt die ungeraden Zahlen
            generieren und nicht jede Zahl prüfen müssen.
          </p>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 18: Flussdiagramm ausführen (Minimum)</h3>
        <p>
          Führe das folgende Flussdiagramm mit der Liste{" "}
          <strong>[15, 8, 23, 4, 19]</strong> aus:
        </p>
        <Mermaid chart={minListe} id="aufgabe-18" />
        <SolutionBlock
          taskId="algo-aufgabe-18"
          hint="Ähnlich wie beim Maximum-Finden, aber diesmal suchen wir die kleinste Zahl.">
          <h4>Durchlauf mit [15, 8, 23, 4, 19]:</h4>
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
                  Element
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
                  min
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>15</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Erstes Element
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>15</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>2</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>8</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  8 {"<"} 15? Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>8</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>3</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>23</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  23 {"<"} 8? Nein
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>8</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  4 {"<"} 8? Ja
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>5</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>19</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  19 {"<"} 4? Nein
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>4</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Ergebnis:</strong> Das Minimum ist 4
          </p>
        </SolutionBlock>
      </section>

      <Section classes="exercise">
        <h3>Aufgabe 19: Algorithmus abändern</h3>
        <p>
          Wie müsste man den Algorithmus aus Aufgabe 16 ändern, damit er statt
          der geraden Zahlen die <strong>ungeraden</strong> Zahlen zählt?
        </p>
        <SolutionBlock
          taskId="algo-aufgabe-19"
          hint="Der einzige Unterschied liegt in der Bedingung. Was ist der Unterschied zwischen geraden und ungeraden Zahlen beim Modulo?">
          <p>
            Man muss nur die Bedingung ändern. Statt{" "}
            <code>Element % 2 = 0?</code> (gerade) verwendet man{" "}
            <code>Element % 2 != 0?</code> oder <code>Element % 2 = 1?</code>{" "}
            (ungerade).
          </p>
          <p>Der Rest des Algorithmus bleibt gleich:</p>
          <ul>
            <li>Gehe durch alle Elemente der Liste</li>
            <li>
              Prüfe für jedes Element, ob es ungerade ist (Rest bei Division
              durch 2 ist nicht 0)
            </li>
            <li>Falls ja, erhöhe den Zähler</li>
            <li>Am Ende gib die Anzahl aus</li>
          </ul>
        </SolutionBlock>
      </Section>

      <section>
        <h3>Aufgabe 20: Flussdiagramm ausführen (Vielfache von 3)</h3>
        <p>Führe das folgende Flussdiagramm aus. Was wird ausgegeben?</p>
        <Mermaid chart={teilbarDrei} id="aufgabe-20" />
        <SolutionBlock
          taskId="algo-aufgabe-20"
          hint="Beginne mit 3 und addiere bei jedem Durchlauf 3 dazu. Die Schleife läuft, solange die Zahl <= 30 ist.">
          <p>Der Algorithmus gibt alle Vielfachen von 3 bis 30 aus:</p>
          <ol>
            <li>zahl = 3, Ausgabe: 3, zahl wird zu 6</li>
            <li>zahl = 6, Ausgabe: 6, zahl wird zu 9</li>
            <li>zahl = 9, Ausgabe: 9, zahl wird zu 12</li>
            <li>zahl = 12, Ausgabe: 12, zahl wird zu 15</li>
            <li>zahl = 15, Ausgabe: 15, zahl wird zu 18</li>
            <li>zahl = 18, Ausgabe: 18, zahl wird zu 21</li>
            <li>zahl = 21, Ausgabe: 21, zahl wird zu 24</li>
            <li>zahl = 24, Ausgabe: 24, zahl wird zu 27</li>
            <li>zahl = 27, Ausgabe: 27, zahl wird zu 30</li>
            <li>zahl = 30, Ausgabe: 30, zahl wird zu 33</li>
            <li>
              zahl = 33, Bedingung ist falsch (nicht mehr {"<="} 30), Ende
            </li>
          </ol>
          <p>
            <strong>Ausgabe:</strong> 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
          </p>
        </SolutionBlock>
      </section>

      <section>
        <h3>Zusatzaufgaben</h3>
        <p>Wenn du alle Aufgaben gelöst hast, versuche Folgendes:</p>
        <ul>
          <li>
            Erstelle ein Flussdiagramm, das die kleinste von drei Zahlen findet
            (das Gegenteil vom Maximum-Finder aus der Theorie-Seite)
          </li>
          <li>
            Zeichne ein Flussdiagramm für einen Taschenrechner, der zwei Zahlen
            und eine Operation (+, -, *, /) als Eingabe nimmt
          </li>
          <li>
            Zeichne ein Flussdiagramm, das die Summe aller ungeraden Zahlen von
            1 bis 50 berechnet
          </li>
          <li>
            Erstelle ein Flussdiagramm, das prüft, ob alle Zahlen in einer Liste
            positiv sind (Ausgabe: Ja/Nein)
          </li>
          <li>
            Überlege dir ein eigenes Beispiel aus dem Alltag und erstelle dazu
            einen Algorithmus als Flussdiagramm
          </li>
        </ul>
      </section>
    </>
  )
}
