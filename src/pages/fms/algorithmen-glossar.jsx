import Section from "@components/Section";

export default function FmsAlgorithmenGlossar() {
  return (
    <>
      <section>
        <h1>Flowchart-Glossar</h1>
        <p>
          In den Flowcharts verwenden wir eine vereinfachte, natürliche Sprache,
          damit die Algorithmen leichter zu verstehen sind. Hier findest du eine
          Übersicht aller verwendeten Begriffe und Symbole.
        </p>
      </section>

      <Section>
        <h2>1. Flowchart-Symbole</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          <div
            style={{
              padding: "15px",
              backgroundColor: "var(--color-bg-light)",
              borderRadius: "8px",
              borderLeft: "4px solid var(--color-primary)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>🟢 Start / Ende (Oval)</h3>
            <p>Markiert den Anfang und das Ende des Algorithmus.</p>
            <p>
              <strong>Beispiel:</strong> <code>Start</code>, <code>Ende</code>
            </p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "var(--color-bg-light)",
              borderRadius: "8px",
              borderLeft: "4px solid var(--color-secondary)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>🔷 Aktion (Rechteck)</h3>
            <p>Eine Anweisung oder Berechnung, die ausgeführt wird.</p>
            <p>
              <strong>Beispiel:</strong> <code>Setze Summe auf 0</code>,{" "}
              <code>Addiere Zahl zu Summe</code>
            </p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "var(--color-bg-light)",
              borderRadius: "8px",
              borderLeft: "4px solid #fabd2f",
            }}
          >
            <h3 style={{ marginTop: 0 }}>🔶 Entscheidung (Raute)</h3>
            <p>
              Eine Frage mit Ja/Nein-Antwort, die den weiteren Ablauf bestimmt.
            </p>
            <p>
              <strong>Beispiel:</strong> <code>Ist Zahl ≤ 10?</code>,{" "}
              <code>Noch Elemente vorhanden?</code>
            </p>
          </div>

          <div
            style={{
              padding: "15px",
              backgroundColor: "var(--color-bg-light)",
              borderRadius: "8px",
              borderLeft: "4px solid #83a598",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              📥 Eingabe/Ausgabe (Parallelogramm)
            </h3>
            <p>Daten werden eingelesen oder ausgegeben.</p>
            <p>
              <strong>Beispiel:</strong> <code>Gib zwei Zahlen ein</code>,{" "}
              <code>Gib Summe aus</code>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2>2. Variablen und Zuweisungen</h2>

        <h3>Setzen von Werten</h3>
        <ul>
          <li>
            <strong>"Setze X auf Y"</strong> = Der Variable X wird der Wert Y
            zugewiesen
          </li>
          <li>
            <strong>"Setze X auf den Wert von Y"</strong> = X bekommt den
            aktuellen Wert von Y
          </li>
          <li>
            <strong>Beispiele:</strong>
            <ul>
              <li>
                <code>Setze Summe auf 0</code> → Die Variable Summe hat jetzt
                den Wert 0
              </li>
              <li>
                <code>Setze a auf den Wert von b</code> → a bekommt den Wert,
                den b gerade hat
              </li>
            </ul>
          </li>
        </ul>

        <h3>Erhöhen und Verringern</h3>
        <ul>
          <li>
            <strong>"Erhöhe X um Y"</strong> = Addiere Y zu X (X = X + Y)
          </li>
          <li>
            <strong>"Verringere X um Y"</strong> = Subtrahiere Y von X (X = X -
            Y)
          </li>
          <li>
            <strong>"Addiere Y zu X"</strong> = Dasselbe wie "Erhöhe X um Y"
          </li>
          <li>
            <strong>Beispiele:</strong>
            <ul>
              <li>
                <code>Erhöhe Zahl um 1</code> → Zahl wird um 1 grösser
              </li>
              <li>
                <code>Verringere Zähler um 1</code> → Zähler wird um 1 kleiner
              </li>
              <li>
                <code>Addiere Zahl zu Summe</code> → Summe = Summe + Zahl
              </li>
            </ul>
          </li>
        </ul>

        <h3>Multiplizieren</h3>
        <ul>
          <li>
            <strong>"Multipliziere X mit Y"</strong> = X = X × Y
          </li>
          <li>
            <strong>Beispiel:</strong>
            <ul>
              <li>
                <code>Multipliziere Ergebnis mit i</code> → Ergebnis = Ergebnis
                × i
              </li>
            </ul>
          </li>
        </ul>

        <h3>Spezielle Variablennamen</h3>
        <ul>
          <li>
            <strong>i, j, k</strong> = Index-Variablen (Zählvariablen für
            Schleifen)
          </li>
          <li>
            <strong>Summe</strong> = Summe von Zahlen
          </li>
          <li>
            <strong>Maximum</strong> = Grösster Wert
          </li>
          <li>
            <strong>Minimum</strong> = Kleinster Wert
          </li>
          <li>
            <strong>Ergebnis</strong> = Das Resultat einer Berechnung
          </li>
          <li>
            <strong>Zähler</strong> = Eine Variable, die hoch- oder runterzählt
          </li>
        </ul>
      </Section>

      <Section>
        <h2>3. Vergleichsoperatoren</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "var(--color-bg-light)" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid var(--color-gray)",
                }}
              >
                Symbol
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid var(--color-gray)",
                }}
              >
                Bedeutung
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderBottom: "2px solid var(--color-gray)",
                }}
              >
                Beispiel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                <code>=</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                ist gleich
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                Ist b = 0?
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                <code>≠</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                ist ungleich
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                Ist i ≠ minIndex?
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                <code>&lt;</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                ist kleiner als
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                Ist i &lt; Länge?
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                <code>&gt;</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                ist grösser als
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                Ist Zähler &gt; 0?
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                <code>≤</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                ist kleiner oder gleich
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                Ist Zahl ≤ 10?
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                <code>≥</code>
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                ist grösser oder gleich
              </td>
              <td
                style={{
                  padding: "12px",
                  borderBottom: "1px solid var(--color-gray)",
                }}
              >
                Ist Punkte ≥ 90?
              </td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section>
        <h2>4. Mathematische Operationen</h2>

        <ul>
          <li>
            <strong>"geteilt durch"</strong> = Division (÷)
          </li>
          <li>
            <strong>"multipliziert mit"</strong> = Multiplikation (×)
          </li>
          <li>
            <strong>"Rest bei Division durch"</strong> = Modulo-Operation (%)
            <ul>
              <li>Gibt den Rest zurück, der bei einer Division übrig bleibt</li>
              <li>Beispiel: 17 mod 5 = 2 (weil 17 ÷ 5 = 3 Rest 2)</li>
            </ul>
          </li>
          <li>
            <strong>"Berechne Rest von X geteilt durch Y"</strong> = X mod Y
          </li>
        </ul>
      </Section>

      <Section>
        <h2>5. Datenstrukturen</h2>

        <h3>Listen (Arrays)</h3>
        <ul>
          <li>
            <strong>"Element an Position i"</strong> = Das i-te Element der
            Liste (Array[i])
          </li>
          <li>
            <strong>"Erstes Element"</strong> = Element an Position 0
          </li>
          <li>
            <strong>"Letztes Element"</strong> = Element an Position (Länge - 1)
          </li>
          <li>
            <strong>"Aktuelles Element"</strong> = Das Element, bei dem wir
            gerade sind
          </li>
          <li>
            <strong>"Länge"</strong> = Anzahl der Elemente in der Liste
          </li>
        </ul>

        <h3>Beispiel</h3>
        <p>
          Gegeben ist die Liste: <code>[5, 12, 8, 20, 3]</code>
        </p>
        <ul>
          <li>Erstes Element = 5 (Position 0)</li>
          <li>Element an Position 2 = 8</li>
          <li>Letztes Element = 3 (Position 4)</li>
          <li>Länge = 5</li>
        </ul>

        <h3>Strings (Zeichenketten)</h3>
        <ul>
          <li>
            <strong>"Zeichen an Position i"</strong> = Das i-te Zeichen des
            Strings (String[i])
          </li>
          <li>
            <strong>"Zeichen links/rechts"</strong> = Zeichen an der
            linken/rechten Position
          </li>
        </ul>
      </Section>

      <Section>
        <h2>6. Abstrakte vs. Explizite Formulierungen</h2>

        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-bg-light)",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Warum verwenden wir beide Arten?</h3>
          <p>
            In den Flowcharts findest du manchmal <strong>abstrakte</strong> und
            manchmal <strong>explizite</strong> Formulierungen. Das hat einen
            guten Grund:
          </p>

          <h4>Abstrakte Formulierungen (für Listen-Durchläufe)</h4>
          <p>
            Bei reinen Index-Variablen (i, j, k) verwenden wir oft abstrakte
            Sprache:
          </p>
          <ul>
            <li>
              <strong>"Gehe zum nächsten Element"</strong> statt "Erhöhe i um 1"
            </li>
            <li>
              <strong>"Noch Elemente vorhanden?"</strong> statt "Ist i &lt;
              Länge?"
            </li>
          </ul>
          <p>
            <em>Vorteil:</em> Fokussiert auf die Logik, nicht auf technische
            Details.
          </p>

          <h4>Explizite Formulierungen (für wichtige Zählvariablen)</h4>
          <p>
            Bei bedeutungsvollen Variablen zeigen wir die Operation explizit:
          </p>
          <ul>
            <li>
              <strong>"Erhöhe Zahl um 1"</strong> (bei Summe von 1 bis 10)
            </li>
            <li>
              <strong>"Verringere Zähler um 1"</strong> (bei Countdown)
            </li>
            <li>
              <strong>"Multipliziere Ergebnis mit i"</strong> (bei Fakultät)
            </li>
          </ul>
          <p>
            <em>Vorteil:</em> Du siehst genau, wie die wichtigen Werte verändert
            werden.
          </p>

          <h4>Wann wird was verwendet?</h4>
          <table
            style={{
              width: "100%",
              marginTop: "15px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "var(--color-bg)" }}>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                    borderBottom: "2px solid var(--color-gray)",
                  }}
                >
                  Situation
                </th>
                <th
                  style={{
                    padding: "10px",
                    textAlign: "left",
                    borderBottom: "2px solid var(--color-gray)",
                  }}
                >
                  Formulierung
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid var(--color-gray)",
                  }}
                >
                  Index-Variable (i, j, k) für Listen-Durchlauf
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid var(--color-gray)",
                  }}
                >
                  Abstrakt: "Gehe zum nächsten Element"
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid var(--color-gray)",
                  }}
                >
                  Wichtige Zählvariable (Zahl, Zähler, Summe)
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid var(--color-gray)",
                  }}
                >
                  Explizit: "Erhöhe Zahl um 1"
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid var(--color-gray)",
                  }}
                >
                  Berechnungen (Fakultät, Potenz)
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid var(--color-gray)",
                  }}
                >
                  Explizit: "Multipliziere Ergebnis mit i"
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2>7. Häufige Fragen</h2>

        <h3>Was bedeutet "Noch Elemente vorhanden?"</h3>
        <p>
          Diese Frage prüft, ob wir alle Elemente einer Liste bereits
          durchlaufen haben. Technisch gesehen bedeutet das:{" "}
          <code>i &lt; Länge</code>
        </p>

        <h3>
          Warum steht manchmal "Gehe zum nächsten Element" statt "i = i + 1"?
        </h3>
        <p>
          Beide bedeuten dasselbe! Wir verwenden die abstrakte Form, wenn die
          genaue Index-Variable nicht wichtig ist. So kannst du dich auf die
          Algorithmen-Logik konzentrieren.
        </p>

        <h3>
          Was ist der Unterschied zwischen "Setze X auf Y" und "Erhöhe X um Y"?
        </h3>
        <ul>
          <li>
            <strong>"Setze X auf Y":</strong> X bekommt genau den Wert Y (X = Y)
          </li>
          <li>
            <strong>"Erhöhe X um Y":</strong> Y wird zu X addiert (X = X + Y)
          </li>
        </ul>
        <p>
          <strong>Beispiel:</strong>
        </p>
        <ul>
          <li>"Setze Summe auf 0" → Summe = 0</li>
          <li>"Erhöhe Summe um 5" → Summe = Summe + 5</li>
        </ul>

        <h3>Was bedeutet "Rest bei Division durch"?</h3>
        <p>
          Das ist die Modulo-Operation. Sie gibt den Rest zurück, der bei einer
          Division übrig bleibt.
        </p>
        <p>
          <strong>Beispiele:</strong>
        </p>
        <ul>
          <li>10 mod 3 = 1 (weil 10 ÷ 3 = 3 Rest 1)</li>
          <li>15 mod 4 = 3 (weil 15 ÷ 4 = 3 Rest 3)</li>
          <li>20 mod 5 = 0 (weil 20 ÷ 5 = 4 Rest 0)</li>
        </ul>
      </Section>

      <Section>
        <h2>8. Tipps zum Lesen von Flowcharts</h2>

        <ol>
          <li>
            <strong>Starte beim Start-Symbol</strong> (Oval oben)
          </li>
          <li>
            <strong>Folge den Pfeilen</strong> - sie zeigen die Reihenfolge
          </li>
          <li>
            <strong>Bei Entscheidungen (Rauten):</strong> Es gibt zwei Wege
            (Ja/Nein)
          </li>
          <li>
            <strong>Schleifen erkennst du:</strong> Ein Pfeil führt zurück zu
            einem früheren Schritt
          </li>
          <li>
            <strong>Ende beim Ende-Symbol</strong> (Oval unten)
          </li>
        </ol>

        <div
          style={{
            padding: "15px",
            backgroundColor: "var(--color-bg-light)",
            borderRadius: "8px",
            marginTop: "20px",
            borderLeft: "4px solid #b8bb26",
          }}
        >
          <strong>💡 Tipp:</strong> Wenn du einen Begriff nicht verstehst, komm
          zurück zu diesem Glossar. Mit der Zeit werden dir die Formulierungen
          immer vertrauter!
        </div>
      </Section>
    </>
  );
}
