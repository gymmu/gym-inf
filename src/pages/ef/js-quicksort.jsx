import AlgoViz, {
  quickSortCode,
  quickSortSteps,
} from "@components/gym/AlgoViz";
import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSQuickSort() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Einstieg
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Sortieren: Quicksort</h2>
          <p>
            Bubble Sort ist einfach, aber langsam. <strong>Quicksort</strong>{" "}
            ist einer der schnellsten Sortieralgorithmen überhaupt und wird in
            vielen Programmiersprachen tatsächlich eingesetzt. Sein Trick heisst{" "}
            <strong>Teile und herrsche</strong> (divide and conquer): Ein
            grosses Problem wird in kleinere Teilprobleme zerlegt.
          </p>

          <h3>Lernziele</h3>
          <ul>
            <li>
              Sie können erklären, was ein <strong>Pivot</strong> ist und was
              beim Partitionieren passiert.
            </li>
            <li>
              Sie verstehen, was Rekursion in diesem Algorithmus bedeutet.
            </li>
            <li>Sie können den Quicksort-Code Zeile für Zeile erklären.</li>
            <li>
              Sie wissen, warum Quicksort im Schnitt <code>O(n · log n)</code>{" "}
              ist, im schlechtesten Fall aber <code>O(n²)</code>.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Die Idee
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Idee: Teile und herrsche</h2>
          <ol>
            <li>
              Wähle ein Element als <strong>Pivot</strong> (wir nehmen immer das
              letzte Element des Bereichs).
            </li>
            <li>
              <strong>Partitionieren:</strong> Sortiere alle kleineren Elemente
              nach links vom Pivot, alle grösseren nach rechts.
            </li>
            <li>
              Danach steht das Pivot an seiner <strong>endgültigen</strong>{" "}
              Position — es muss nie wieder bewegt werden.
            </li>
            <li>
              Wiederhole das Ganze für den linken Teil und für den rechten Teil
              (<strong>Rekursion</strong>).
            </li>
            <li>
              Ein Bereich mit 0 oder 1 Element ist automatisch sortiert →{" "}
              <strong>Abbruchbedingung</strong>.
            </li>
          </ol>

          <h3>Analogie</h3>
          <p>
            Stellen Sie sich eine Klasse vor, die sich nach Grösse aufstellen
            soll. Eine Person stellt sich in die Mitte. Alle Kleineren gehen
            nach links, alle Grösseren nach rechts. Jetzt hat diese Person
            garantiert ihren richtigen Platz. Dann macht die linke Gruppe
            dasselbe, und die rechte auch — bis alle stehen.
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
            Lila ist das <em>Pivot</em>, gelb wird gerade{" "}
            <em>mit dem Pivot verglichen</em>, rot wird <em>getauscht</em> und
            grün steht <em>endgültig richtig</em>. Ausgegraute Balken liegen
            ausserhalb des aktuellen Bereichs.
          </p>
          <AlgoViz
            title="Quicksort (Pivot = letztes Element)"
            initialArray={[7, 2, 9, 4, 1, 8, 3]}
            generate={quickSortSteps}
            code={quickSortCode}
            legend="sort"
          />
          <p>
            <strong>Beobachten Sie:</strong> Sobald ein Balken grün wird, wird
            er nie mehr angefasst. Und der aktive Bereich wird immer kleiner.
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
            Die Funktion ruft sich <strong>selbst</strong> auf — das ist
            Rekursion. Die Parameter <code>links</code> und <code>rechts</code>{" "}
            sagen, welcher Teil der Liste gerade bearbeitet wird.
          </p>
          <JSTerminal filename="quicksort.js">
            {`function quickSort(liste, links = 0, rechts = liste.length - 1) {
  // Abbruchbedingung: 0 oder 1 Element => schon sortiert
  if (links >= rechts) return liste;

  // 1. Pivot wählen: das letzte Element des Bereichs
  const pivot = liste[rechts];

  // 2. Partitionieren
  let i = links; // Grenze: links davon ist alles kleiner als das Pivot

  for (let j = links; j < rechts; j++) {
    if (liste[j] < pivot) {
      [liste[i], liste[j]] = [liste[j], liste[i]];
      i++;
    }
  }

  // 3. Pivot an seine endgültige Position tauschen
  [liste[i], liste[rechts]] = [liste[rechts], liste[i]];

  // 4. Rekursion: linker Teil und rechter Teil
  quickSort(liste, links, i - 1);
  quickSort(liste, i + 1, rechts);

  return liste;
}

const zahlen = [7, 2, 9, 4, 1, 8, 3];
console.log(quickSort(zahlen));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Kurzvariante
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Eine kurze, gut lesbare Variante</h2>
          <p>
            Mit <code>filter</code> und Spread lässt sich Quicksort sehr elegant
            schreiben. Diese Version ist leichter zu lesen, braucht aber mehr
            Speicher, weil sie bei jedem Schritt neue Listen erzeugt.
          </p>
          <JSTerminal filename="quicksort-funktional.js">
            {`function quickSort(liste) {
  if (liste.length <= 1) return liste;

  const [pivot, ...rest] = liste;          // Dekomposition + Spread
  const kleiner = rest.filter((x) => x < pivot);
  const groesser = rest.filter((x) => x >= pivot);

  return [...quickSort(kleiner), pivot, ...quickSort(groesser)];
}

console.log(quickSort([7, 2, 9, 4, 1, 8, 3]));

// Funktioniert auch mit Wörtern
console.log(quickSort(["Kiwi", "Apfel", "Zwetschge", "Banane"]));`}
          </JSTerminal>
          <p>
            <strong>Diskussionsfrage:</strong> Welche der beiden Versionen
            würden Sie in einem Programm verwenden — die kurze oder die
            &laquo;in place&raquo;-Version? Warum?
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Eigenschaften
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Eigenschaften von Quicksort</h2>
          <ul>
            <li>
              ✅ <strong>Sehr schnell</strong> — im Schnitt{" "}
              <code>O(n · log n)</code>
            </li>
            <li>
              ✅ <strong>In place</strong> möglich (die erste Version)
            </li>
            <li>
              ❌ <strong>Schlechtester Fall</strong> <code>O(n²)</code>: wenn
              das Pivot immer der kleinste oder grösste Wert ist — z.&nbsp;B.
              bei einer bereits sortierten Liste!
            </li>
            <li>
              ❌ <strong>Nicht stabil</strong> — gleiche Werte können ihre
              Reihenfolge tauschen
            </li>
            <li>❌ Deutlich schwieriger zu verstehen als Bubble Sort</li>
          </ul>

          <h3>Bubble Sort und Quicksort im Vergleich</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Bubble Sort</th>
                <th>Quicksort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prinzip</td>
                <td>Nachbarn tauschen</td>
                <td>Teile und herrsche</td>
              </tr>
              <tr>
                <td>Bester Fall</td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n · log n)</code>
                </td>
              </tr>
              <tr>
                <td>Durchschnitt</td>
                <td>
                  <code>O(n²)</code>
                </td>
                <td>
                  <code>O(n · log n)</code>
                </td>
              </tr>
              <tr>
                <td>Schlechtester Fall</td>
                <td>
                  <code>O(n²)</code>
                </td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
              <tr>
                <td>1000 Elemente (grob)</td>
                <td>≈ 500'000 Vergleiche</td>
                <td>≈ 10'000 Vergleiche</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Tipp aus der Praxis:</strong> Ein zufällig gewähltes Pivot
            (statt immer das letzte Element) macht den schlechtesten Fall extrem
            unwahrscheinlich.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
