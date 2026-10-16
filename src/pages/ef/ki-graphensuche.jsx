import CodeBlock from "@components/CodeBlock";
import AlgoTable from "@components/graph-search/AlgoTable";
import PancakeSpace from "@components/graph-search/PancakeSpace";
import PuzzleBoard from "@components/graph-search/PuzzleBoard";
import PuzzleSearch from "@components/graph-search/PuzzleSearch";
import StateSpace from "@components/graph-search/StateSpace";
import Successors from "@components/graph-search/Successors";
import TreeVsGraph from "@components/graph-search/TreeVsGraph";
import LearningGoals from "@components/LearningGoals";
import ScrollSection from "@components/ScrollSection";

export default function KIGraphensuche() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Klassische KI</h1>
        <h2>Probleme lösen mit Graphensuche</h2>
        <p>Alles am Beispiel des Schiebepuzzles</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — KI ohne Lernen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>KI ohne Lernen</h2>
          <p>
            Wenn heute von KI die Rede ist, meint man fast immer{" "}
            <strong>maschinelles Lernen</strong>: ein System, das aus Daten
            Muster zieht. Die KI, die Schach spielt, eine Route plant oder ein
            Rätsel löst, funktioniert anders. Sie lernt nichts. Sie{" "}
            <strong>sucht</strong>.
          </p>
          <p>
            Wir schauen uns das an einem einzigen Beispiel an, das wir die ganze
            Woche nicht mehr loslassen: dem <strong>Schiebepuzzle</strong>. Acht
            Steine, ein leeres Feld, und die Frage: Wie kommt man mit möglichst
            wenigen Zügen zur geordneten Stellung?
          </p>
        </section>
      </ScrollSection>

      <PuzzleBoard title="Zuerst selbst: Lösen Sie das Puzzle von Hand" />

      <ScrollSection>
        <section>
          <h2>Was haben Sie gerade getan?</h2>
          <p>
            Sie haben ein Feld angeschaut, überlegt, welcher Zug sinnvoll ist,
            ihn gemacht und von vorne begonnen. Vielleicht haben Sie einen Zug
            zurückgenommen, weil er in eine Sackgasse führte.
          </p>
          <p>
            Genau das macht ein Suchalgorithmus auch — nur ohne Intuition, dafür
            unermüdlich und systematisch. Damit er das kann, müssen wir drei
            Dinge sauber aufschreiben: <strong>Zustand</strong>,{" "}
            <strong>Aktion</strong> und <strong>Ziel</strong>.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Zustand
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Der Zustand</h2>
          <p>
            Ein <strong>Zustand</strong> ist eine vollständige Momentaufnahme:
            alles, was man wissen muss, um weiterzuspielen. Beim Schiebepuzzle
            ist das die Position jedes Steins — mehr nicht. Wie viele Züge wir
            schon gemacht haben, gehört <em>nicht</em> zum Zustand.
          </p>
          <CodeBlock lang="javascript" filename="zustand.js">
            {`// Die Stellung
//   1  2  3
//   4  5  6
//   7  ·  8
// schreiben wir einfach als Liste, 0 ist das leere Feld:
const state = [1, 2, 3, 4, 5, 6, 7, 0, 8];

// Der Zielzustand ist fix:
const GOAL = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// Zieltest: sind wir da?
const isGoal = (state) => state.join() === GOAL.join();

// Und ein eindeutiger Schlüssel, damit wir erkennen,
// ob wir diese Stellung schon einmal gesehen haben:
const key = (state) => state.join(",");

console.log(key(state));   // "1,2,3,4,5,6,7,0,8"
console.log(isGoal(state)); // false`}
          </CodeBlock>
          <p>
            Diese Schlüssel-Funktion ist wichtiger, als sie aussieht. Zwei
            Arrays mit gleichem Inhalt sind in JavaScript nicht gleich (
            <code>[1,2] === [1,2]</code> ist <code>false</code>). Über den
            Schlüssel können wir Zustände trotzdem in einem <code>Set</code>{" "}
            sammeln.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Aktion und Nachfolger
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Aktionen und Nachfolger</h2>
          <p>
            Eine <strong>Aktion</strong> führt von einem Zustand in einen
            anderen. Beim Schiebepuzzle schiebt sie einen Stein ins leere Feld.
            Je nachdem, wo das leere Feld liegt, gibt es unterschiedlich viele
            Möglichkeiten:
          </p>
          <ul>
            <li>leeres Feld in der Ecke: 2 Züge</li>
            <li>leeres Feld am Rand: 3 Züge</li>
            <li>leeres Feld in der Mitte: 4 Züge</li>
          </ul>
          <p>
            Im Schnitt sind das etwa 3 — der <strong>Verzweigungsgrad</strong>{" "}
            <code>b</code>. Die Funktion <code>successors(state)</code> liefert
            alle Nachfolger auf einmal. Probieren Sie sie unten aus: Jeder Klick
            ist ein Zug, jeder Zug erzeugt eine neue Liste von Möglichkeiten.
          </p>
        </section>
      </ScrollSection>

      <Successors title="successors(state): ein Zustand, alle Folgezustände" />

      <ScrollSection area="content">
        <section>
          <h2>Nachfolger im Code</h2>
          <CodeBlock lang="javascript" filename="successors.js">
            {`function successors(state) {
  const leer = state.indexOf(0);
  const zeile = Math.floor(leer / 3);
  const spalte = leer % 3;
  const ergebnis = [];

  const richtungen = [
    { name: "hoch", dz: -1, ds: 0 },
    { name: "runter", dz: 1, ds: 0 },
    { name: "links", dz: 0, ds: -1 },
    { name: "rechts", dz: 0, ds: 1 },
  ];

  for (const r of richtungen) {
    const z = zeile + r.dz;
    const s = spalte + r.ds;
    if (z < 0 || z > 2 || s < 0 || s > 2) continue; // Brettrand

    const von = z * 3 + s;
    const next = [...state];      // WICHTIG: Kopie!
    next[leer] = next[von];
    next[von] = 0;
    ergebnis.push({ action: \`\${next[leer]} \${r.name}\`, cost: 1, state: next });
  }
  return ergebnis;
}`}
          </CodeBlock>
          <p>
            <strong>Die Kopie ist Pflicht.</strong> Würden wir{" "}
            <code>state</code> direkt verändern, würden wir auch alle schon
            gespeicherten Knoten verändern, die auf dasselbe Array zeigen. Die
            Suche würde ihre eigene Vergangenheit zerstören.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Zustandsraum
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Der Zustandsraum</h2>
          <p>
            Alle erreichbaren Zustände zusammen bilden den{" "}
            <strong>Zustandsraum</strong>. Er ist ein <strong>Graph</strong>:
            Knoten sind Stellungen, Kanten sind Züge.
          </p>
          <p>
            Beim 3×3-Puzzle gibt es <code>9! = 362'880</code> Anordnungen. Davon
            ist genau die Hälfte erreichbar: <strong>181'440 Zustände</strong>.
            Die andere Hälfte ist unlösbar — man kommt von dort nie zum Ziel,
            egal wie lange man schiebt. (Probieren Sie oben die Stellung
            «unlösbar».)
          </p>
          <p>
            <strong>Der zentrale Trick:</strong> Wir zeichnen diesen Graphen
            nie. Wir kennen nur den Startzustand und die Funktion{" "}
            <code>successors</code>. Der Algorithmus klappt den Graphen genau so
            weit auf, wie er ihn braucht.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <StateSpace title="Spielen Sie — und der Zustandsraum entsteht" />
      </div>

      <ScrollSection>
        <section>
          <h2>Was Sie dabei sehen</h2>
          <ul>
            <li>
              Jeder Knoten zeigt die <strong>Stellung als Zahlen</strong> — das
              ist genau das Array <code>[1,2,3,…]</code>, mit dem der
              Algorithmus rechnet.
            </li>
            <li>
              Von der aktuellen Stellung aus sind{" "}
              <strong>immer alle Nachfolger</strong> eingezeichnet (grau). Ein
              Klick darauf — oder auf einen Stein links — führt den Zug aus.
            </li>
            <li>
              Gezeichnet wird wie bei BFS:{" "}
              <strong>jede Zeile ist ein Zug weiter</strong> vom Start weg. Die
              Stellungen stehen also nach Tiefe geordnet — und das Bild bleibt
              stabil.
            </li>
            <li>
              Landen Sie auf einer Stellung, die Sie schon besucht haben,
              entsteht <strong>kein neuer Knoten</strong>: übrig bleibt eine
              zusätzliche Kante — eine <strong>Schleife</strong> (violett
              gestrichelt, frisch geschlossen rot). Genau daran erkennt man,
              dass der Zustandsraum ein Graph ist und kein Baum.
            </li>
            <li>
              Mit <em>Tiefe 2</em> bzw. <em>Tiefe 3</em> klappen Sie alles
              systematisch auf. Nach drei Zügen stehen schon über 20 Zustände da
              — bei 181'440 insgesamt.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════
          Zweites Problem: Pfannkuchen sortieren
          ══════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Dasselbe nochmal: Pfannkuchen sortieren</h2>
          <p>
            Damit klar wird, dass an all dem nichts
            <em> puzzle</em>-spezifisch ist, hier ein zweites Problem. Auf einem
            Teller liegt ein Stapel Pfannkuchen, alle verschieden gross. Sie
            haben nur einen Wender: Sie schieben ihn irgendwo in den Stapel und
            drehen <strong>alles darüber</strong> auf einmal um. Ziel: kleinster
            Pfannkuchen oben, grösster unten.
          </p>
          <ul>
            <li>
              <strong>Zustand:</strong> die Reihenfolge der Grössen, z. B.{" "}
              <code>[3,1,4,2]</code> — oben die 3, unten die 2.
            </li>
            <li>
              <strong>Aktion:</strong> <code>wende k</code> dreht die obersten{" "}
              <code>k</code> Pfannkuchen um.
            </li>
            <li>
              <strong>Verzweigungsgrad:</strong> immer genau <code>n − 1</code>{" "}
              — bei vier Pfannkuchen also 3, egal wie der Stapel aussieht.
            </li>
            <li>
              <strong>Zustandsraum:</strong> alle Reihenfolgen, also{" "}
              <code>n!</code> — bei fünf Pfannkuchen 120 Stück.
            </li>
          </ul>
          <p>
            Die Suchalgorithmen interessiert das nicht: Sie brauchen nur{" "}
            <code>key</code>, <code>successors</code> und <code>isGoal</code>.
            Spielen Sie unten — der Graph entsteht genau gleich wie beim Puzzle.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PancakeSpace title="Pfannkuchen wenden — derselbe Zustandsraum, ein anderes Problem" />
      </div>

      <ScrollSection area="breakout">
        <section>
          <h2>Suchbaum ist nicht Zustandsraum</h2>
          <p>
            Wenn wir vom Start aus alle Züge aufklappen, entsteht ein{" "}
            <strong>Suchbaum</strong>. Darin kommt dieselbe Stellung immer
            wieder vor — jeder Zug lässt sich ja sofort rückgängig machen:
          </p>
          <TreeVsGraph title="Derselbe Ausschnitt — einmal als Baum, einmal als Graph" />
          <p>
            Ohne Gegenmassnahme wächst der Suchbaum unendlich, obwohl der
            Zustandsraum endlich ist. Darum führt jede Suche eine Menge{" "}
            <strong>besucht</strong> mit und wirft Zustände weg, die sie schon
            kennt. Aus dem Baum wird so wieder ein Graph.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Der Algorithmus
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die zwei Mengen</h2>
          <p>Jede Graphensuche verwaltet genau zwei Mengen:</p>
          <ul>
            <li>
              <strong>Grenze</strong> (<em>frontier</em>) — Zustände, die wir
              kennen, aber noch nicht untersucht haben. Der Rand unseres
              Wissens.
            </li>
            <li>
              <strong>Besucht</strong> (<em>visited</em>) — Zustände, die wir
              bereits abgehakt haben. Ohne diese Menge dreht sich die Suche im
              Kreis.
            </li>
          </ul>
          <p>
            Dazu merkt sich jeder Knoten seinen <strong>Vorgänger</strong>. Erst
            dadurch können wir am Schluss den Weg rückwärts zusammensetzen — die
            Suche findet ja nicht «den Weg», sondern nur den Zielknoten.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Der Kern in 15 Zeilen</h2>
          <CodeBlock lang="javascript" filename="search.js">
            {`function search(start, frontier) {
  frontier.push({ state: start, parent: null, action: null });
  const visited = new Set();

  while (frontier.size > 0) {
    const node = frontier.pop();          // <- hier entscheidet sich alles

    if (visited.has(key(node.state))) continue;   // schon gesehen
    visited.add(key(node.state));

    if (isGoal(node.state)) return pfadZurueck(node);

    for (const edge of successors(node.state)) {
      frontier.push({ state: edge.state, parent: node, action: edge.action });
    }
  }
  return null;  // kein Weg gefunden
}`}
          </CodeBlock>
          <p>
            <strong>Das ist der ganze Algorithmus.</strong> BFS, DFS, UCS,
            Greedy und A<sup>*</sup> unterscheiden sich einzig darin, welchen
            Knoten <code>frontier.pop()</code> zurückgibt.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — BFS beobachten
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Breitensuche (BFS)</h2>
          <p>
            Die Grenze ist eine <strong>Warteschlange</strong> (FIFO): Wer
            zuerst gefunden wurde, wird zuerst untersucht. Dadurch wird der
            Graph in Ringen abgearbeitet — zuerst alle Stellungen nach einem
            Zug, dann alle nach zwei Zügen, und so weiter.
          </p>
          <p>
            Schauen Sie der Suche unten zu. Achten Sie auf drei Dinge: Der gelb
            markierte Eintrag in der Grenze ist immer der{" "}
            <strong>oberste</strong>. Neue Knoten kommen immer{" "}
            <strong>unten</strong> dazu. Und der Suchbaum wächst{" "}
            <strong>Spalte für Spalte</strong>, nicht in die Tiefe.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PuzzleSearch
          strategies={["bfs"]}
          title="Breitensuche beobachten — Schritt für Schritt"
        />
      </div>

      <ScrollSection>
        <section>
          <h2>Was BFS kann und was es kostet</h2>
          <ul>
            <li>
              <strong>Vollständig:</strong> ja. Wenn es eine Lösung gibt, findet
              BFS sie.
            </li>
            <li>
              <strong>Optimal:</strong> ja — aber nur, weil beim Puzzle jeder
              Zug gleich viel kostet. BFS zählt Züge, nicht Kosten.
            </li>
            <li>
              <strong>Preis:</strong> der Speicher. Bei Verzweigungsgrad{" "}
              <code>b</code> und Lösungstiefe <code>d</code> liegen bis zu{" "}
              <code>b^d</code> Knoten gleichzeitig in der Grenze.
            </li>
          </ul>
          <p>
            Beim 14-Zug-Puzzle sind das rund 2'900 expandierte Knoten und eine
            Grenze von etwa 2'000 Einträgen — für ein Rätsel, das Sie in zwei
            Minuten von Hand lösen. Beim 4×4-Puzzle mit seinen 10<sup>13</sup>{" "}
            Zuständen ist BFS chancenlos.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — DFS beobachten
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Tiefensuche (DFS)</h2>
          <p>
            Wir ändern <strong>eine einzige Zeile</strong>: Die Grenze ist jetzt
            ein <strong>Stapel</strong> (LIFO), der zuletzt gefundene Zustand
            kommt zuerst dran. Die Suche rennt einem Pfad nach, so tief sie
            kann.
          </p>
          <p>
            Beobachten Sie denselben Startzustand mit DFS. Der Suchbaum wird zu
            einem langen Faden, der immer tiefer läuft — und die gefundene
            «Lösung» hat Hunderte von Zügen. Oft bricht die Demo sogar vorher
            ab: Nach 6'000 expandierten Knoten hört sie im Browser auf, obwohl
            die Stellung in vier Zügen lösbar wäre.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PuzzleSearch
          strategies={["dfs", "bfs"]}
          title="Tiefensuche — dieselbe Stellung, ein anderer Zugriff"
        />
      </div>

      <ScrollSection>
        <section>
          <h2>DFS im Urteil</h2>
          <ul>
            <li>
              <strong>Speicher:</strong> hervorragend — nur der aktuelle Pfad
              plus Abzweigungen, also <code>b · d</code> statt <code>b^d</code>.
            </li>
            <li>
              <strong>Optimal:</strong> nein, überhaupt nicht. Lässt man DFS im
              Repo ohne Abbruchgrenze laufen, findet sie für die 14-Zug-Stellung
              einen Weg mit <strong>113'358 Zügen</strong>.
            </li>
            <li>
              <strong>Vollständig:</strong> nur mit Besucht-Menge und endlichem
              Zustandsraum. Sonst läuft DFS für immer in eine Richtung.
            </li>
          </ul>
          <p>
            Beides sind gültige Lösungen — jeder einzelne Zug ist erlaubt, und
            am Ende steht die Zielstellung. Nur würde kein Mensch die zweite
            «Lösung» nennen. <em>Gültig</em> und <em>gut</em> ist nicht
            dasselbe.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — UCS
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Iterative Tiefensuche (IDS)</h2>
          <p>
            DFS braucht wenig Speicher, findet aber irgendeinen Weg. BFS findet
            den kürzesten, frisst aber Speicher. Die{" "}
            <strong>iterative Tiefensuche</strong> nimmt von beiden das Gute —
            mit einem Trick, der zuerst verschwenderisch aussieht:
          </p>
          <ol>
            <li>
              Mache eine Tiefensuche, die bei Tiefe <code>0</code> stoppt.
            </li>
            <li>Nichts gefunden? Fang von vorne an, diesmal bis Tiefe 1.</li>
            <li>
              Nichts gefunden? Von vorne bis Tiefe 2 — und so weiter, bis das
              Ziel auftaucht.
            </li>
          </ol>
          <p>
            Jede Runde ist eine ganz normale Tiefensuche mit einem{" "}
            <strong>Tiefenlimit</strong>. Weil die Runden der Reihe nach immer
            tiefer gehen, wird das Ziel zuerst auf seiner kleinsten Tiefe
            gefunden — genau wie bei BFS. Gespeichert wird aber immer nur ein
            Pfad, also <code>b · d</code> statt <code>b^d</code>.
          </p>
          <p>
            «Aber da wird doch alles mehrfach durchsucht!» — stimmt, und es
            macht wenig aus. Bei Verzweigungsgrad <code>b ≈ 3</code> liegen in
            der untersten Ebene etwa so viele Knoten wie in allen Ebenen darüber
            zusammen. Die wiederholten Runden kosten darum nur einen konstanten
            Faktor, ungefähr <code>b / (b - 1)</code> — also rund 1.5-mal so
            viel Arbeit wie eine einzige Suche bis zur richtigen Tiefe.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection>
        <section>
          <h2>IDS beobachten</h2>
          <p>
            Wichtig beim Zuschauen: Die Demo zeigt immer nur{" "}
            <strong>eine Runde</strong>. Ist die Grenze leer, war in dieser
            Tiefe kein Ziel — dann beginnt alles wieder beim Startzustand, der
            Suchbaum wird gelöscht und wächst eine Stufe tiefer neu auf. Das ist
            kein Fehler, sondern genau der Trick. Die Leiste über der Anzeige
            protokolliert die bisherigen Runden mit ihrem Tiefenlimit, und beim
            Abspielen hält die Demo an jedem Rundenwechsel kurz an.
          </p>
          <p>
            Der gefundene Weg ist am Ende gleich lang wie bei BFS, die Grenze
            bleibt aber die ganze Zeit winzig — vergleichen Sie die Zeile «in
            der Grenze (max.)» mit derjenigen von BFS.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PuzzleSearch
          strategies={["ids", "dfs", "bfs"]}
          maxExpansions={40000}
          speed={60}
          title="Iterative Tiefensuche — Runde für Runde eine Stufe tiefer"
        />
      </div>

      <ScrollSection>
        <section>
          <h2>IDS im Urteil</h2>
          <ul>
            <li>
              <strong>Speicher:</strong> so gut wie DFS — <code>b · d</code>.
            </li>
            <li>
              <strong>Optimal:</strong> ja, wenn alle Züge gleich viel kosten —
              wie bei BFS.
            </li>
            <li>
              <strong>Vollständig:</strong> ja, auch in unendlich tiefen Räumen,
              weil kein Ast unendlich weit verfolgt wird.
            </li>
            <li>
              <strong>Preis:</strong> dieselben Knoten werden mehrfach besucht —
              Rechenzeit gegen Speicher getauscht.
            </li>
          </ul>
          <p>
            Darum ist IDS das Standardverfahren, wenn man uninformiert sucht,
            den kürzesten Weg braucht und der Speicher knapp ist.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection>
        <section>
          <h2>Kostensuche (UCS)</h2>
          <p>
            Beim Puzzle kostet jeder Zug gleich viel. In der Realität nicht:
            Eine Autobahn ist nicht gleich teuer wie ein Feldweg. Darum bekommt
            jede Kante Kosten, und jeder Knoten merkt sich <code>g</code> — die
            Summe der Kosten vom Start bis hierher.
          </p>
          <p>
            Die Grenze wird zur <strong>Prioritätswarteschlange</strong>: Immer
            der Knoten mit dem kleinsten <code>g</code> kommt dran. Das ist
            exakt der <strong>Dijkstra-Algorithmus</strong>.
          </p>
          <p>
            Stellen Sie unten UCS ein. Sie werden kaum einen Unterschied zu BFS
            sehen — und das ist die richtige Beobachtung: Wenn alle Kanten 1
            kosten, ist <code>g</code> nichts anderes als die Anzahl Züge.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PuzzleSearch
          strategies={["bfs", "dfs", "ids", "ucs"]}
          title="Alle vier im direkten Vergleich"
        />
      </div>

      <ScrollSection area="breakout">
        <section>
          <h2>Die vier Algorithmen auf einen Blick</h2>
          <AlgoTable caption="b = Verzweigungsgrad (≈ 3 beim Schiebepuzzle), d = Tiefe der Lösung." />
          <p>
            Alle vier sind <strong>uninformiert</strong>: Sie wissen nichts über
            das Puzzle, ausser welche Züge erlaubt sind. Sie suchen gleichmässig
            in alle Richtungen — auch dorthin, wo das Ziel sicher nicht liegt.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — Ausblick Heuristiken
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Ausblick: eine Ahnung vom Ziel</h2>
          <p>
            Als Sie das Puzzle oben von Hand gelöst haben, haben Sie nicht 2'900
            Stellungen durchprobiert. Sie haben gesehen, dass ein Zug «besser
            aussieht» als ein anderer. Diese Ahnung kann man ausrechnen — zum
            Beispiel so:
          </p>
          <ul>
            <li>
              <strong>Falsche Plätze:</strong> Wie viele Steine liegen nicht
              dort, wo sie hingehören?
            </li>
            <li>
              <strong>Manhattan-Distanz:</strong> Wie weit muss jeder Stein
              mindestens laufen — Zeilen- plus Spaltenabstand, aufsummiert?
            </li>
          </ul>
          <p>
            Schalten Sie unten «Abstände zeigen» ein: Jeder Stein bekommt seinen
            Abstand zum Zielplatz als kleine gelbe Zahl, unten stehen die beiden
            Summen. Ziehen Sie ein paar Steine und beobachten Sie, wie sich die
            Manhattan-Distanz verändert.
          </p>
        </section>
      </ScrollSection>

      <PuzzleBoard
        showHeuristics
        title="Heuristiken sichtbar gemacht — wie weit ist es noch?"
      />

      <ScrollSection>
        <section>
          <h2>Die Heuristik im Zustandsraum</h2>
          <p>
            Dieselbe Zahl noch einmal — aber jetzt im Zustandsraum von vorhin.
            Unter jedem Knoten steht sein <code>h</code>-Wert:{" "}
            <span style={{ color: "var(--color-green)" }}>grün</span>, wenn
            diese Stellung näher am Ziel ist als die aktuelle,{" "}
            <span style={{ color: "var(--color-red)" }}>rot</span>, wenn sie
            weiter weg ist.
          </p>
          <p>
            Es ist genau dieselbe Spielwiese wie oben: Drücken Sie links im
            Puzzle herum, und der Graph wächst mit. Klappen Sie zusätzlich «bis
            Tiefe 2» oder «bis Tiefe 3» auf — dann bilden die Zahlen eine
            Landschaft, die zum Ziel hin abfällt. Die informierten Algorithmen
            tun nichts anderes, als dieser Landschaft bergab zu folgen, statt
            gleichmässig in alle Richtungen zu suchen. Mit der Auswahl oben
            können Sie zwischen Manhattan-Distanz und falschen Plätzen wechseln
            — die Manhattan-Werte sind grösser und damit aussagekräftiger.
          </p>
          <p>
            Mit dem Häkchen <code>f = g + h</code> kommt die zweite Zahl dazu:{" "}
            <code>g</code> ist die Anzahl Züge, die wir vom Start bis zu diesem
            Knoten schon gebraucht haben, <code>h</code> die Schätzung für den
            Rest. Die Summe <code>f</code> ist die geschätzte Länge des ganzen
            Weges — genau die Zahl, nach der A<sup>*</sup> den nächsten Knoten
            auswählt. Greedy würde nur auf <code>h</code> schauen, UCS nur auf{" "}
            <code>g</code>.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <StateSpace
          showHeuristics
          title="Spielen Sie — und beobachten Sie, wie h kleiner wird"
        />
      </div>

      <ScrollSection>
        <section>
          <h2>Nächste Woche</h2>
          <p>
            Eine solche Schätzung heisst <strong>Heuristik</strong>{" "}
            <code>h(state)</code>. Damit entstehen zwei neue Algorithmen —
            dieselben 15 Zeilen, nur eine andere Zahl in der
            Prioritätswarteschlange:
          </p>
          <ul>
            <li>
              <strong>Greedy Best-First:</strong> nimmt den Knoten mit dem
              kleinsten <code>h</code>. Schnell, aber nicht optimal.
            </li>
            <li>
              <strong>
                A<sup>*</sup>:
              </strong>{" "}
              nimmt den Knoten mit dem kleinsten <code>f = g + h</code>.
              Optimal, solange <code>h</code> nie zu viel schätzt.
            </li>
          </ul>
          <p>
            Zum Vergleich auf der 14-Zug-Stellung: BFS expandiert rund 2'900
            Knoten, A<sup>*</sup> mit Manhattan-Distanz weniger als 100 — und
            findet denselben kürzesten Weg. Probieren Sie es gleich aus.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PuzzleSearch
          strategies={["astar", "greedy", "bfs", "ucs", "dfs", "ids"]}
          start={[0, 8, 2, 5, 7, 3, 1, 4, 6]}
          title="Vorgeschmack: alle sechs Algorithmen auf derselben Stellung"
        />
      </div>

      <LearningGoals>
        <ul>
          <li>
            Ich kann erklären, was ein Zustand, eine Aktion und ein Zustandsraum
            ist — am Beispiel des Schiebepuzzles.
          </li>
          <li>
            Ich kann eine Puzzle-Stellung als Datenstruktur aufschreiben und
            erklären, wozu <code>key(state)</code> gebraucht wird.
          </li>
          <li>
            Ich kann die Nachfolger einer Stellung von Hand bestimmen und den
            Suchbaum bis Tiefe 2 zeichnen.
          </li>
          <li>
            Ich kann erklären, warum Suchbaum und Zustandsraum nicht dasselbe
            sind und wozu die Besucht-Menge dient.
          </li>
          <li>
            Ich kann BFS und DFS von Hand ausführen und dabei Grenze und
            Besucht-Menge nachführen.
          </li>
          <li>
            Ich kann begründen, warum BFS den kürzesten Weg findet, DFS aber
            nicht — und was das für den Speicher bedeutet.
          </li>
          <li>
            Ich kann die iterative Tiefensuche erklären und begründen, warum sie
            den kürzesten Weg mit dem Speicherbedarf einer Tiefensuche findet.
          </li>
          <li>
            Ich kann ein eigenes Problem in JavaScript implementieren, sodass
            die vorhandene Suche es löst.
          </li>
        </ul>
      </LearningGoals>
    </>
  );
}
