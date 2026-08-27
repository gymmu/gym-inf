import AlgoViz, {
  bubbleSortCode,
  bubbleSortSteps,
} from "@components/gym/AlgoViz";
import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSBubbleSort() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Einstieg
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Sortieren: Bubble Sort</h2>
          <p>
            Sortieren ist eine der häufigsten Aufgaben in der Informatik. Eine
            sortierte Liste lässt sich viel schneller durchsuchen, besser
            darstellen und leichter vergleichen. Wir beginnen mit dem
            einfachsten und bekanntesten Sortierverfahren:{" "}
            <strong>Bubble Sort</strong>.
          </p>

          <h3>Lernziele</h3>
          <ul>
            <li>
              Sie können die Idee von Bubble Sort in eigenen Worten erklären.
            </li>
            <li>
              Sie können Bubble Sort für eine kleine Liste von Hand durchführen.
            </li>
            <li>Sie verstehen den JavaScript-Code Zeile für Zeile.</li>
            <li>
              Sie wissen, warum Bubble Sort <code>O(n²)</code> Vergleiche
              braucht.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Die Idee
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Idee</h2>
          <p>
            Bubble Sort vergleicht immer <strong>zwei Nachbarn</strong>. Steht
            der grössere Wert links, werden die beiden getauscht. So wandert die
            grösste Zahl bei jedem Durchlauf wie eine Luftblase nach rechts —
            daher der Name.
          </p>
          <ol>
            <li>Gehe die Liste von links nach rechts durch.</li>
            <li>
              Vergleiche jedes Paar von Nachbarn: <code>liste[j]</code> und{" "}
              <code>liste[j + 1]</code>.
            </li>
            <li>
              Ist der linke Wert grösser, <strong>tausche</strong> die beiden.
            </li>
            <li>
              Am Ende eines Durchlaufs steht die grösste Zahl ganz rechts — sie
              ist fertig.
            </li>
            <li>
              Wiederhole das mit dem verbleibenden, noch unsortierten Teil.
            </li>
          </ol>
          <p>
            Bei <code>n</code> Elementen genügen <code>n - 1</code> Durchläufe.
            Nach jedem Durchlauf ist ein Element mehr an seinem endgültigen
            Platz.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Visualisierung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="breakout">
        <section>
          <h2>Visualisierung</h2>
          <p>
            Gehen Sie Schritt für Schritt durch. Gelb bedeutet{" "}
            <em>wird verglichen</em>, rot <em>wird getauscht</em> und grün{" "}
            <em>steht endgültig richtig</em>. Rechts unten sehen Sie, welche
            Codezeile gerade ausgeführt wird.
          </p>
          <AlgoViz
            title="Bubble Sort"
            initialArray={[5, 3, 8, 1, 9, 2]}
            generate={bubbleSortSteps}
            code={bubbleSortCode}
            legend="sort"
          />
          <p>
            <strong>Probieren Sie aus:</strong> Geben Sie oben eine bereits
            sortierte Liste ein (z.&nbsp;B. <code>1, 2, 3, 4, 5</code>). Wie
            viele Vergleiche braucht der Algorithmus? Und wie viele Tausche?
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Der Code
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Der Code</h2>
          <p>
            Zwei verschachtelte Schleifen: Die äussere zählt die Durchläufe, die
            innere vergleicht die Nachbarn. Führen Sie den Code aus und ändern
            Sie die Liste.
          </p>
          <JSTerminal filename="bubblesort.js">
            {`function bubbleSort(liste) {
  // Äussere Schleife: ein Durchlauf pro Element
  for (let i = 0; i < liste.length - 1; i++) {

    // Innere Schleife: vergleiche Nachbarn
    // "- i", weil die letzten i Elemente schon fertig sind
    for (let j = 0; j < liste.length - 1 - i; j++) {

      if (liste[j] > liste[j + 1]) {
        // Tauschen mit Hilfsvariable
        const temp = liste[j];
        liste[j] = liste[j + 1];
        liste[j + 1] = temp;
      }
    }
  }
  return liste;
}

const zahlen = [5, 3, 8, 1, 9, 2];
console.log(bubbleSort(zahlen));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Tauschen mit Dekomposition
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Kürzer tauschen — und das Original schonen</h2>
          <p>
            Mit der Dekomposition aus Woche 2 geht das Tauschen in einer Zeile.
            Und mit <code>[...liste]</code> arbeiten wir auf einer Kopie, so
            bleibt das Original erhalten.
          </p>
          <JSTerminal filename="bubblesort-kurz.js">
            {`function bubbleSort(eingabe) {
  const liste = [...eingabe]; // Kopie, Original bleibt unverändert

  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        // Tauschen mit Dekomposition
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
      }
    }
  }
  return liste;
}

const zahlen = [5, 3, 8, 1, 9, 2];
const sortiert = bubbleSort(zahlen);

console.log("Original: ", zahlen);   // unverändert
console.log("Sortiert: ", sortiert);`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Optimierung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Optimierung: frühzeitig aufhören</h2>
          <p>
            Wenn in einem ganzen Durchlauf <strong>kein</strong> Tausch mehr
            passiert, ist die Liste bereits sortiert. Dann können wir abbrechen.
            Bei einer schon sortierten Liste braucht der Algorithmus so nur noch
            einen einzigen Durchlauf.
          </p>
          <JSTerminal filename="bubblesort-optimiert.js">
            {`function bubbleSortOptimiert(eingabe) {
  const liste = [...eingabe];
  let durchlaeufe = 0;

  for (let i = 0; i < liste.length - 1; i++) {
    let getauscht = false;
    durchlaeufe++;

    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
        getauscht = true;
      }
    }

    // Kein Tausch => bereits sortiert => abbrechen
    if (!getauscht) break;
  }

  console.log("Durchläufe:", durchlaeufe);
  return liste;
}

console.log(bubbleSortOptimiert([5, 3, 8, 1, 9, 2])); // viele Durchläufe
console.log(bubbleSortOptimiert([1, 2, 3, 4, 5, 6])); // nur 1 Durchlauf`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Eigenschaften
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Eigenschaften von Bubble Sort</h2>
          <ul>
            <li>
              ✅ <strong>Sehr einfach</strong> zu verstehen und zu programmieren
            </li>
            <li>
              ✅ <strong>In place</strong> — braucht kaum zusätzlichen Speicher
            </li>
            <li>
              ✅ <strong>Stabil</strong> — gleiche Werte behalten ihre
              Reihenfolge
            </li>
            <li>
              ❌ <strong>Langsam</strong> — bei doppelt so vielen Elementen
              braucht er rund <em>viermal</em> so lange
            </li>
            <li>
              ❌ In der Praxis wird er nie verwendet (aber überall unterrichtet)
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Fall</th>
                <th>Vergleiche</th>
                <th>Laufzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bester Fall (sortiert, optimiert)</td>
                <td>n − 1</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Durchschnitt</td>
                <td>≈ n² / 2</td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
              <tr>
                <td>Schlechtester Fall (umgekehrt sortiert)</td>
                <td>n · (n − 1) / 2</td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Was <code>O(n²)</code> genau bedeutet, schauen wir auf der Seite zur{" "}
            <strong>Laufzeitanalyse</strong> an.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
