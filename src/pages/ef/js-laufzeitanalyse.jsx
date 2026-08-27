import ComplexityChart from "@components/gym/ComplexityChart";
import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSLaufzeitanalyse() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Einstieg
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Laufzeitanalyse</h2>
          <p>
            Wir haben jetzt mehrere Algorithmen gesehen, die dasselbe Problem
            lösen — zum Beispiel Bubble Sort und Quicksort. Aber welcher ist{" "}
            <strong>besser</strong>? Um das zu beantworten, brauchen wir ein
            Werkzeug: die <strong>Laufzeitanalyse</strong>.
          </p>

          <h3>Lernziele</h3>
          <ul>
            <li>
              Sie können erklären, warum man Laufzeit nicht in Sekunden misst.
            </li>
            <li>
              Sie können in einfachem Code die Anzahl Operationen abschätzen.
            </li>
            <li>
              Sie kennen die wichtigsten Klassen: <code>O(1)</code>,{" "}
              <code>O(log n)</code>, <code>O(n)</code>,{" "}
              <code>O(n · log n)</code>, <code>O(n²)</code>.
            </li>
            <li>
              Sie können die Algorithmen dieser Woche einer Klasse zuordnen und
              begründen, warum.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Warum nicht Sekunden?
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Warum messen wir nicht einfach die Zeit?</h2>
          <p>
            Man könnte einfach eine Stoppuhr laufen lassen. Das Problem: Das
            Ergebnis hängt von Dingen ab, die nichts mit dem Algorithmus zu tun
            haben.
          </p>
          <ul>
            <li>
              <strong>Hardware:</strong> Ein neuer Laptop ist schneller als ein
              alter.
            </li>
            <li>
              <strong>Programmiersprache:</strong> C ist schneller als
              JavaScript.
            </li>
            <li>
              <strong>Zufall:</strong> Andere Programme laufen gleichzeitig.
            </li>
            <li>
              <strong>Datenmenge:</strong> Mit 10 Elementen ist alles schnell.
            </li>
          </ul>
          <p>
            Deshalb zählen wir stattdessen die <strong>Anzahl Schritte</strong>{" "}
            in Abhängigkeit von der Datenmenge <code>n</code>. Die eigentliche
            Frage lautet:
          </p>
          <blockquote>
            Wie stark wächst der Aufwand, wenn die Datenmenge wächst?
          </blockquote>
          <p>
            Das ist die entscheidende Frage. Ein Algorithmus, der bei 1000
            Elementen 1 Sekunde braucht, kann bei 10'000 Elementen 10 Sekunden
            brauchen — oder 100 Sekunden. Das macht den Unterschied zwischen
            &laquo;funktioniert&raquo; und &laquo;unbrauchbar&raquo;.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Operationen zählen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Operationen zählen — selbst ausprobieren</h2>
          <p>
            Wir bauen einen Zähler in unsere Algorithmen ein und schauen, wie
            die Zahlen wachsen, wenn wir <code>n</code> verdoppeln.
          </p>
          <JSTerminal filename="operationen-zaehlen.js">
            {`// Wir zählen die Vergleiche bei Bubble Sort
function bubbleSortZaehlen(eingabe) {
  const liste = [...eingabe];
  let vergleiche = 0;

  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      vergleiche++;
      if (liste[j] > liste[j + 1]) {
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
      }
    }
  }
  return vergleiche;
}

// Zufällige Liste der Länge n erzeugen
function zufallsListe(n) {
  const liste = [];
  for (let i = 0; i < n; i++) {
    liste.push(Math.floor(Math.random() * 1000));
  }
  return liste;
}

console.log("n\\tVergleiche\\tFaktor");
let vorher = 0;
for (const n of [10, 20, 40, 80, 160]) {
  const v = bubbleSortZaehlen(zufallsListe(n));
  const faktor = vorher === 0 ? "-" : (v / vorher).toFixed(1);
  console.log(n + "\\t" + v + "\\t\\t" + faktor);
  vorher = v;
}

// Beobachtung: n verdoppeln => Vergleiche ca. VERVIERFACHEN
// Das ist typisch für O(n²)`}
          </JSTerminal>
          <p>
            <strong>Das ist der Kern der Laufzeitanalyse:</strong> Bei{" "}
            <code>O(n²)</code> führt doppelt so viel Input zu viermal so viel
            Arbeit. Bei <code>O(n)</code> nur zu doppelt so viel. Bei{" "}
            <code>O(log n)</code> praktisch zu gar nichts mehr.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Die O-Notation
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die O-Notation (Gross-O)</h2>
          <p>
            Bubble Sort braucht genau <code>n · (n − 1) / 2</code> Vergleiche.
            Ausmultipliziert: <code>0.5 · n² − 0.5 · n</code>. Für die
            Laufzeitanalyse vereinfachen wir das zu <code>O(n²)</code>. Dabei
            gelten zwei Regeln:
          </p>
          <ol>
            <li>
              <strong>Konstante Faktoren weglassen:</strong>{" "}
              <code>0.5 · n²</code> → <code>n²</code>. Ein doppelt so schneller
              Computer ändert die Klasse nicht.
            </li>
            <li>
              <strong>Nur der stärkste Term zählt:</strong>{" "}
              <code>n² + n + 100</code> → <code>n²</code>. Bei n = 1000 ist{" "}
              <code>n²</code> = 1'000'000 und <code>n</code> nur 1000 — das{" "}
              <code>n</code> fällt gar nicht mehr ins Gewicht.
            </li>
          </ol>
          <p>
            <code>O(...)</code> beschreibt also das{" "}
            <strong>Wachstumsverhalten</strong>, nicht die genaue Anzahl
            Schritte. Es ist eine <em>obere Schranke</em>: &laquo;höchstens so
            schnell wachsend wie&raquo;.
          </p>

          <h3>Drei Fälle</h3>
          <ul>
            <li>
              <strong>Bester Fall:</strong> die günstigste Eingabe (z.&nbsp;B.
              die gesuchte Zahl steht ganz vorne)
            </li>
            <li>
              <strong>Durchschnitt:</strong> typische, zufällige Eingabe — meist
              die interessanteste Angabe
            </li>
            <li>
              <strong>Schlechtester Fall:</strong> die ungünstigste Eingabe —
              die wichtigste Angabe, wenn man Garantien braucht
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Wachstum vergleichen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="breakout">
        <section>
          <h2>Wachstum vergleichen</h2>
          <p>
            Verschieben Sie den Regler und beobachten Sie, wie unterschiedlich
            die Klassen wachsen.
          </p>
          <ComplexityChart />
          <p>
            <strong>Die Schlüsselbeobachtung:</strong> Bei n = 8 sind alle
            Klassen ähnlich schnell. Bei n = 1024 liegen Welten dazwischen —
            <code>O(log n)</code> braucht 10 Schritte, <code>O(n²)</code> über
            eine Million, <code>O(2ⁿ)</code> mehr Schritte als das Universum
            Atome hat.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Klassen erkennen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Wie erkenne ich die Klasse im Code?</h2>
          <table>
            <thead>
              <tr>
                <th>Was ich im Code sehe</th>
                <th>Klasse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Keine Schleife, nur ein paar Befehle: <code>liste[0]</code>,{" "}
                  <code>liste.length</code>, <code>a + b</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>
                  Der Suchbereich wird jedes Mal <strong>halbiert</strong>
                </td>
                <td>
                  <code>O(log n)</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Eine</strong> Schleife über alle Elemente (auch{" "}
                  <code>map</code>, <code>filter</code>, <code>reduce</code>)
                </td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>
                  Halbieren <em>und</em> jedes Mal alle Elemente anschauen (
                  <code>sort()</code>)
                </td>
                <td>
                  <code>O(n · log n)</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Zwei verschachtelte</strong> Schleifen über alle
                  Elemente
                </td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
              <tr>
                <td>Alle Kombinationen / Teilmengen ausprobieren</td>
                <td>
                  <code>O(2ⁿ)</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Achtung — häufige Stolperfalle:</strong> Zwei Schleifen{" "}
            <em>nacheinander</em> sind <code>O(n) + O(n) = O(n)</code>. Nur{" "}
            <em>verschachtelte</em> Schleifen werden <code>O(n²)</code>.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Bubble Sort analysiert
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Analyse 1: Bubble Sort</h2>
          <p>
            Zwei verschachtelte Schleifen. Die äussere läuft <code>n − 1</code>{" "}
            Mal, die innere jedes Mal etwas kürzer:
          </p>
          <p>
            <code>(n−1) + (n−2) + … + 2 + 1 = n · (n−1) / 2</code>
          </p>
          <p>
            Bei 10 Elementen sind das 45 Vergleiche, bei 100 schon 4950, bei
            1000 rund 500'000.
          </p>
          <table>
            <thead>
              <tr>
                <th>Fall</th>
                <th>Wann?</th>
                <th>Laufzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bester Fall</td>
                <td>
                  Liste bereits sortiert (nur mit der Abbruch-Optimierung)
                </td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Durchschnitt</td>
                <td>zufällige Liste</td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
              <tr>
                <td>Schlechtester Fall</td>
                <td>Liste absteigend sortiert</td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Speicher:</strong> <code>O(1)</code> — es wird nur
            getauscht, keine zweite Liste angelegt.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Quicksort analysiert
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Analyse 2: Quicksort</h2>
          <p>
            Beim Partitionieren wird jedes Element des Bereichs einmal
            angeschaut — das ist <code>O(n)</code> pro &laquo;Ebene&raquo;.
            Entscheidend ist, <strong>wie viele Ebenen</strong> es gibt.
          </p>
          <ul>
            <li>
              <strong>Gutes Pivot</strong> (etwa in der Mitte): Der Bereich
              halbiert sich jedes Mal. Nach <code>log₂(n)</code> Ebenen ist
              alles fertig. Gesamt: <code>n · log n</code>. Bei n = 1024 sind
              das 10 Ebenen à 1024 Vergleiche ≈ 10'000.
            </li>
            <li>
              <strong>Schlechtes Pivot</strong> (immer das kleinste oder grösste
              Element): Der Bereich schrumpft nur um 1. Dann gibt es{" "}
              <code>n</code> Ebenen → <code>n²</code>. Genau das passiert mit
              unserer Version bei einer bereits sortierten Liste!
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>Fall</th>
                <th>Wann?</th>
                <th>Laufzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bester Fall</td>
                <td>Pivot teilt immer genau in der Mitte</td>
                <td>
                  <code>O(n · log n)</code>
                </td>
              </tr>
              <tr>
                <td>Durchschnitt</td>
                <td>zufällige Liste</td>
                <td>
                  <code>O(n · log n)</code>
                </td>
              </tr>
              <tr>
                <td>Schlechtester Fall</td>
                <td>bereits sortierte Liste (bei Pivot = letztes Element)</td>
                <td>
                  <code>O(n²)</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Deshalb:</strong> In der Praxis wählt man ein{" "}
            <em>zufälliges</em> Pivot. Dann ist der schlechteste Fall so
            unwahrscheinlich, dass er praktisch nie auftritt.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Vergleich messen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Bubble Sort gegen Quicksort — messen</h2>
          <p>
            Jetzt messen wir tatsächlich die Zeit. Achtung: Erhöhen Sie{" "}
            <code>n</code> nur vorsichtig, sonst blockiert Bubble Sort den
            Browser.
          </p>
          <JSTerminal filename="messen.js">
            {`function zufallsListe(n) {
  const liste = [];
  for (let i = 0; i < n; i++) liste.push(Math.random());
  return liste;
}

function bubbleSort(eingabe) {
  const liste = [...eingabe];
  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
      }
    }
  }
  return liste;
}

function quickSort(liste) {
  if (liste.length <= 1) return liste;
  const [pivot, ...rest] = liste;
  return [
    ...quickSort(rest.filter((x) => x < pivot)),
    pivot,
    ...quickSort(rest.filter((x) => x >= pivot)),
  ];
}

function messen(name, fn, daten) {
  const start = performance.now();
  fn(daten);
  const dauer = performance.now() - start;
  console.log(name + ": " + dauer.toFixed(1) + " ms");
}

for (const n of [500, 1000, 2000, 4000]) {
  const daten = zufallsListe(n);
  console.log("--- n = " + n + " ---");
  messen("Bubble Sort", bubbleSort, daten);
  messen("Quicksort  ", quickSort, daten);
  messen("sort()     ", (d) => [...d].sort((a, b) => a - b), daten);
}`}
          </JSTerminal>
          <p>
            <strong>Beobachten Sie:</strong> Bei jeder Verdopplung von{" "}
            <code>n</code> wird Bubble Sort etwa viermal langsamer, Quicksort
            nur gut doppelt so langsam. Bei n = 4000 ist der Unterschied schon
            gewaltig.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — Suche analysiert
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Analyse 3: Lineare und binäre Suche</h2>

          <h3>Lineare Suche — O(n)</h3>
          <ul>
            <li>
              <strong>
                Bester Fall <code>O(1)</code>:
              </strong>{" "}
              Das gesuchte Element steht an Position 0.
            </li>
            <li>
              <strong>
                Durchschnitt <code>O(n)</code>:
              </strong>{" "}
              Im Mittel muss man die halbe Liste durchsuchen — <code>n/2</code>,
              und der konstante Faktor fällt weg.
            </li>
            <li>
              <strong>
                Schlechtester Fall <code>O(n)</code>:
              </strong>{" "}
              Das Element steht am Schluss oder kommt gar nicht vor.
            </li>
          </ul>

          <h3>Binäre Suche — O(log n)</h3>
          <p>
            Jeder Schritt halbiert den Suchbereich. Die Frage lautet: Wie oft
            kann ich <code>n</code> halbieren, bis 1 übrig bleibt? Antwort:{" "}
            <code>log₂(n)</code> Mal.
          </p>
          <table>
            <thead>
              <tr>
                <th>n</th>
                <th>Lineare Suche (Vergleiche)</th>
                <th>Binäre Suche (Vergleiche)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16</td>
                <td>16</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1'024</td>
                <td>1'024</td>
                <td>10</td>
              </tr>
              <tr>
                <td>1'048'576</td>
                <td>1'048'576</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Aber Vorsicht — die versteckten Kosten:</strong> Binäre
            Suche verlangt eine sortierte Liste. Das Sortieren kostet{" "}
            <code>O(n · log n)</code>. Für <em>eine einzige</em> Suche lohnt
            sich das nicht. Wer aber tausendmal in denselben Daten sucht,
            sortiert einmal und profitiert danach immer.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — Restliche Algorithmen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Analyse 4: Die übrigen Algorithmen</h2>

          <h3>Maximum finden — O(n)</h3>
          <p>
            Eine Schleife, jedes Element genau einmal. Man kann es nicht besser
            machen: Wenn man auch nur ein Element überspringt, könnte genau das
            das Maximum gewesen sein. <code>O(n)</code> ist hier{" "}
            <strong>optimal</strong>.
          </p>

          <h3>Summe, Durchschnitt, Zählen — O(n)</h3>
          <p>
            Gleiches Argument. Auch <code>map</code>, <code>filter</code> und{" "}
            <code>reduce</code> sind <code>O(n)</code> — sie sehen nur kürzer
            aus, machen aber genau gleich viel Arbeit.
          </p>

          <h3>Zwei Zeiger (umkehren, Palindrom) — O(n)</h3>
          <p>
            Die Schleife läuft nur <code>n/2</code> Mal. Der konstante Faktor{" "}
            <code>1/2</code> fällt in der O-Notation weg, es bleibt{" "}
            <code>O(n)</code>. Es ist zwar doppelt so schnell wie eine volle
            Schleife, aber in derselben Klasse.
          </p>

          <h3>Häufigkeiten zählen — O(n)</h3>
          <p>
            Eine Schleife über alle Elemente. Der Zugriff auf eine
            Objekt-Eigenschaft wie <code>zaehler["rot"]</code> ist{" "}
            <code>O(1)</code> — er dauert gleich lang, egal wie viele Einträge
            das Objekt schon hat. Das ist der Grund, warum dieses Muster so
            beliebt ist.
          </p>

          <h3>Anagramme erkennen — zwei Wege im Vergleich</h3>
          <table>
            <thead>
              <tr>
                <th>Weg</th>
                <th>Was passiert</th>
                <th>Laufzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sortieren und vergleichen</td>
                <td>2× sortieren + 1× vergleichen</td>
                <td>
                  <code>O(n · log n)</code>
                </td>
              </tr>
              <tr>
                <td>Buchstaben zählen</td>
                <td>2× eine Schleife über die Wörter</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Bei Wörtern mit 10 Buchstaben ist der Unterschied völlig egal — dann
            nimmt man die kürzere, besser lesbare Variante. Bei einer Million
            Zeichen zählt jede Klasse.
          </p>
          <blockquote>
            Lesbarkeit schlägt Geschwindigkeit — bis die Geschwindigkeit zum
            Problem wird.
          </blockquote>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 12 — Gesamtübersicht
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Gesamtübersicht</h2>
          <table>
            <thead>
              <tr>
                <th>Algorithmus</th>
                <th>Bester Fall</th>
                <th>Durchschnitt</th>
                <th>Schlechtester Fall</th>
                <th>Speicher</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lineare Suche</td>
                <td>
                  <code>O(1)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>Binäre Suche</td>
                <td>
                  <code>O(1)</code>
                </td>
                <td>
                  <code>O(log n)</code>
                </td>
                <td>
                  <code>O(log n)</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>Maximum finden</td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>Summe / Durchschnitt</td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>Umkehren / Palindrom</td>
                <td>
                  <code>O(1)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>Häufigkeiten zählen</td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Anagramm (zählen)</td>
                <td>
                  <code>O(1)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Anagramm (sortieren)</td>
                <td>
                  <code>O(n · log n)</code>
                </td>
                <td>
                  <code>O(n · log n)</code>
                </td>
                <td>
                  <code>O(n · log n)</code>
                </td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Bubble Sort</td>
                <td>
                  <code>O(n)</code>
                </td>
                <td>
                  <code>O(n²)</code>
                </td>
                <td>
                  <code>O(n²)</code>
                </td>
                <td>
                  <code>O(1)</code>
                </td>
              </tr>
              <tr>
                <td>Quicksort</td>
                <td>
                  <code>O(n · log n)</code>
                </td>
                <td>
                  <code>O(n · log n)</code>
                </td>
                <td>
                  <code>O(n²)</code>
                </td>
                <td>
                  <code>O(log n)</code>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 13 — Merksätze
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Merksätze</h2>
          <ul>
            <li>
              Laufzeit misst man in <strong>Schritten</strong>, nicht in
              Sekunden.
            </li>
            <li>
              Die O-Notation beschreibt das <strong>Wachstum</strong>: konstante
              Faktoren und schwächere Terme fallen weg.
            </li>
            <li>
              Verschachtelte Schleifen sind das Warnzeichen für{" "}
              <code>O(n²)</code>.
            </li>
            <li>
              Halbieren ist das Erkennungsmerkmal von <code>O(log n)</code> —
              und <code>log n</code> ist unglaublich klein.
            </li>
            <li>
              Bei kleinen Datenmengen ist alles schnell genug. Die Klasse zählt
              erst, wenn die Daten wachsen.
            </li>
            <li>
              Manchmal tauscht man Speicher gegen Zeit (z.&nbsp;B. eine
              Zähler-Tabelle statt doppelter Schleifen).
            </li>
          </ul>
        </section>
      </ScrollSection>
    </>
  );
}
