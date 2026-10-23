import DataTable from "@components/DataTable/DataTable";
import AlgoTable from "@components/graph-search/AlgoTable";
import GridSearchRace from "@components/graph-search/GridSearchRace";
import HeuristicTree from "@components/graph-search/HeuristicTree";
import PuzzleBoard from "@components/graph-search/PuzzleBoard";
import PuzzleSearch from "@components/graph-search/PuzzleSearch";
import StateSpace from "@components/graph-search/StateSpace";
import LearningGoals from "@components/LearningGoals";
import ScrollSection from "@components/ScrollSection";

export default function KIHeuristiken() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Heuristiken</h1>
        <h2>
          Greedy Best-First und A<sup>*</sup>
        </h2>
        <p>Suchen mit einer Ahnung, wo das Ziel liegt</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Rückblick
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Wo wir stehen</h2>
          <p>
            Letzte Woche haben alle unsere Algorithmen dasselbe gemacht: Knoten
            aus der <strong>Grenze</strong> holen, expandieren, Nachfolger
            zurücklegen. Der einzige Unterschied war die Frage, <em>welchen</em>{" "}
            Knoten sie als Nächstes nehmen:
          </p>
          <ul>
            <li>
              <strong>BFS</strong> — den ältesten (Warteschlange)
            </li>
            <li>
              <strong>DFS</strong> — den neuesten (Stapel)
            </li>
            <li>
              <strong>UCS</strong> — den mit dem kleinsten <code>g</code>, also
              den bisher billigsten
            </li>
          </ul>
          <p>
            Alle drei sind <strong>blind</strong>: Sie wissen nicht, ob eine
            Stellung dem Ziel näher ist als eine andere. Sie sehen nur, was
            hinter ihnen liegt. Deshalb expandiert BFS auf der 14-Zug-Stellung
            rund 2'900 Knoten — obwohl ein Mensch dort oft in 20 Zügen durch
            ist.
          </p>
          <p>
            Sie selbst haben beim Spielen von Hand nie blind gesucht. Sie haben
            eine Stellung angeschaut und gedacht: «Die sieht besser aus.»{" "}
            <strong>
              Diese Ahnung bauen wir diese Woche in den Algorithmus ein.
            </strong>
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 2b — Einstieg: drei Suchen nebeneinander
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Dieselbe Aufgabe, drei Suchräume</h2>
          <p>
            Bevor wir Formeln anschauen, sehen wir uns die drei Verfahren
            gleichzeitig bei der Arbeit an. Alle drei suchen denselben Weg durch
            dasselbe Gitter. Jedes Feld ist ein Zustand, jeder Schritt nach
            oben, unten, links oder rechts kostet 1.
          </p>
          <ul>
            <li>
              <strong>UCS</strong> nimmt immer den Knoten mit dem kleinsten{" "}
              <code>g</code> — er weiss nichts über die Richtung des Ziels.
            </li>
            <li>
              <strong>Greedy Best-First</strong> nimmt immer den Knoten mit dem
              kleinsten <code>h</code> — er schaut nur nach vorne.
            </li>
            <li>
              <strong>
                A<sup>*</sup>
              </strong>{" "}
              nimmt den Knoten mit dem kleinsten <code>f = g + h</code> — er
              verrechnet beides.
            </li>
          </ul>
          <p>
            Die Heuristik <code>h</code> ist hier die{" "}
            <strong>Manhattan-Distanz</strong> zum Ziel: wie viele Felder man
            noch waagrecht und senkrecht zurücklegen müsste, wenn keine Wände im
            Weg wären.
          </p>
        </section>
      </ScrollSection>

      <GridSearchRace layout="mauer" />

      <ScrollSection area="content">
        <section>
          <h2>Was man dabei sieht</h2>
          <ul>
            <li>
              <strong>UCS färbt einen Kreis.</strong> Er expandiert alles, was
              nahe am Start liegt — auch in die völlig falsche Richtung. Dafür
              ist sein Weg garantiert der kürzeste.
            </li>
            <li>
              <strong>GBFS färbt einen schmalen Strahl.</strong> Er ist meist
              als Erster fertig und schaut nur wenige Felder an — aber in der
              Sackgassen-Variante läuft er in die Falle und sein Weg ist länger
              als nötig.
            </li>
            <li>
              <strong>
                A<sup>*</sup> färbt einen Keil Richtung Ziel.
              </strong>{" "}
              Deutlich weniger Felder als UCS, und trotzdem dieselbe Weglänge
              wie UCS.
            </li>
          </ul>
          <p>
            Probieren Sie die verschiedenen Hindernis-Layouts aus und zeichnen
            Sie eigene Wände ins Gitter. Vergleichen Sie jeweils die Zahl der
            besuchten Felder und die Weglänge:{" "}
            <strong>
              Wer sucht weniger? Wer findet trotzdem den kürzesten Weg?
            </strong>
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Was ist eine Heuristik
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>
            Die Heuristik <code>h(state)</code>
          </h2>
          <p>
            Eine <strong>Heuristik</strong> ist eine Funktion, die zu jedem
            Zustand schätzt, wie weit es von dort <em>noch</em> bis zum Ziel
            ist:
          </p>
          <p>
            Sie bekommt einen Zustand und liefert eine Zahl <code>≥ 0</code>{" "}
            zurück. Für den Zielzustand muss sie <code>0</code> liefern — von
            dort ist es nicht mehr weit.
          </p>
          <p>
            Das Entscheidende: Eine Heuristik ist <strong>billig</strong>. Sie
            schaut sich den Zustand an und rechnet eine Zahl aus — sie führt
            keine eigene Suche durch. Deshalb darf sie auch falsch liegen; sie
            ist eine Schätzung, kein Orakel.
          </p>
          <p>Für das Schiebepuzzle kennen wir schon zwei:</p>
          <ul>
            <li>
              <strong>
                h<sub>1</sub> — falsche Plätze:
              </strong>{" "}
              Wie viele Steine liegen nicht dort, wo sie hingehören? (Das leere
              Feld zählt nicht mit.)
            </li>
            <li>
              <strong>
                h<sub>2</sub> — Manhattan-Distanz:
              </strong>{" "}
              Wie weit muss jeder Stein mindestens laufen — Zeilen- plus
              Spaltenabstand, aufsummiert?
            </li>
          </ul>
          <p>
            Beide sind in wenigen Zeilen auszurechnen — man zählt bzw. summiert
            nur, ohne irgendeinen Zug auszuprobieren. Genau deshalb kann man sie
            bei jedem einzelnen Knoten der Suche aufrufen.
          </p>
        </section>
      </ScrollSection>

      <PuzzleBoard
        showHeuristics
        title="Beide Heuristiken an derselben Stellung"
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Woher kommt eine Heuristik
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Woher nimmt man eine Heuristik?</h2>
          <p>
            Nicht aus dem Bauch. Der übliche Trick heisst{" "}
            <strong>Relaxation</strong>: Man lässt eine Regel des Problems weg
            und löst das einfachere Problem exakt. Dessen Lösung ist nie länger
            als die echte — und damit eine brauchbare Schätzung.
          </p>
          <ul>
            <li>
              Regel «ein Stein darf nur ins leere Feld rutschen» weglassen →
              jeder Stein darf frei herumspringen → man braucht einen Zug pro
              falsch platziertem Stein ={" "}
              <strong>
                h<sub>1</sub>
              </strong>
              .
            </li>
            <li>
              Nur die Regel «das Zielfeld muss leer sein» weglassen → jeder
              Stein läuft auf direktem Weg zu seinem Platz ={" "}
              <strong>
                h<sub>2</sub>
              </strong>
              .
            </li>
            <li>
              Beim <strong>Routenplanen</strong> lässt man die Strassen weg →
              Luftlinie zwischen zwei Orten.
            </li>
            <li>
              Beim <strong>Pfannkuchen-Problem</strong> lässt man die Grösse der
              Wendeaktion weg → Anzahl «Brüche» im Stapel (gap heuristic).
            </li>
          </ul>
          <p>
            Weil man eine Regel nur <em>wegnimmt</em>, kann das relaxierte
            Problem nie teurer sein als das echte. Genau das brauchen wir
            gleich.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Greedy
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Greedy Best-First: nur auf h schauen</h2>
          <p>
            Der naheliegendste Einfall: Nimm immer den Knoten aus der Grenze,
            der am <em>nächsten</em> am Ziel zu sein scheint — also den mit dem
            kleinsten <code>h</code>. Das ist{" "}
            <strong>Greedy Best-First Search</strong>, «gierige Bestensuche».
          </p>
          <p>
            Es ist derselbe Algorithmus wie immer — dieselbe Schleife, dieselbe
            Grenze. Nur die Zahl, nach der die Prioritätswarteschlange sortiert,
            ist eine andere: statt <code>g</code> nimmt sie <code>h</code>.
          </p>
          <p>
            Greedy ist oft verblüffend schnell. Aber er hat ein Problem: Er
            vergisst vollständig, was ihn der Weg bisher gekostet hat. Wer nahe
            am Ziel <em>aussieht</em>, kommt dran — auch wenn er über einen
            gewaltigen Umweg dorthin gekommen ist.
          </p>
          <p>
            Die Folge: Greedy findet meist <strong>irgendeinen</strong> Weg,
            nicht den kürzesten. Auf unseren Testfällen liefert er regelmässig
            Lösungen mit 50 Zügen, wo der kürzeste Weg 24 Züge hat.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <PuzzleSearch
          strategies={["greedy", "bfs"]}
          start={[0, 7, 1, 2, 6, 3, 8, 5, 4]}
          title="Greedy stürmt zum Ziel — aber auf welchem Weg?"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — A*
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>
            A<sup>*</sup>: g und h zusammenzählen
          </h2>
          <p>
            Greedy schaut nur nach vorne, UCS nur nach hinten. A<sup>*</sup>{" "}
            (gesprochen «A-Stern») macht beides gleichzeitig:
          </p>
          <p>
            <strong>f(n) = g(n) + h(n)</strong>
          </p>
          <ul>
            <li>
              <code>g(n)</code> — was uns der Weg vom Start bis <code>n</code>{" "}
              gekostet hat (bekannt, exakt)
            </li>
            <li>
              <code>h(n)</code> — was uns der Rest von <code>n</code> bis zum
              Ziel kosten wird (geschätzt)
            </li>
            <li>
              <code>f(n)</code> — die geschätzten Gesamtkosten eines Weges{" "}
              <em>durch</em> <code>n</code>
            </li>
          </ul>
          <p>
            Mehr ist es nicht. Dieselbe Schleife, dieselbe Grenze, dieselbe
            Besucht-Menge — nur die Zahl, nach der sortiert wird, ist anders.
            Und damit entstehen aus einem Algorithmus vier:
          </p>
          <DataTable
            headers={["Priorität", "Algorithmus", "schaut auf"]}
            rows={[
              ["g", "UCS / Dijkstra", "nur zurück"],
              ["h", "Greedy Best-First", "nur nach vorne"],
              ["g + h", "A*", "beides"],
              ["g + 0", "UCS", "A* mit h = 0 ist genau UCS"],
            ]}
            caption="Nur die Priorität unterscheidet diese Algorithmen — sonst nichts."
          />
          <p>
            <code>f</code> ist die geschätzte Länge des <em>ganzen</em> Weges,
            wenn er durch diesen Knoten führt. A<sup>*</sup> arbeitet also immer
            an dem Weg weiter, der insgesamt am vielversprechendsten aussieht —
            und nicht an dem, dessen Ende zufällig nahe am Ziel liegt.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection>
        <section>
          <h2>A* von Hand nachvollziehen</h2>
          <p>
            Unten können Sie den Zustandsraum selbst erkunden. Links steht jetzt
            nicht mehr nur die Nachfolgerliste, sondern die{" "}
            <strong>ganze Grenze</strong> — sortiert nach <code>f = g + h</code>
            , also genau in der Reihenfolge, in der A<sup>*</sup> sie abarbeiten
            würde.
          </p>
          <ul>
            <li>
              <span style={{ color: "var(--color-orange)" }}>orange</span> — der
              Knoten, den A<sup>*</sup> als Nächstes expandiert (kleinstes{" "}
              <code>f</code>)
            </li>
            <li>
              <span style={{ color: "var(--color-blue)" }}>blau</span> — die
              übrige Grenze: bekannt, aber noch nicht expandiert
            </li>
            <li>
              <span style={{ color: "var(--color-gray)" }}>grau</span> — schon
              besucht und abgehakt
            </li>
          </ul>
          <p>
            Drücken Sie mehrmals «nächsten Knoten expandieren» und beobachten
            Sie, wie sich die Liste ständig neu sortiert. Vergleichen Sie, was
            passiert, wenn Sie <code>f = g + h</code> ausschalten und nur{" "}
            <code>h</code> betrachten: Das wäre Greedy.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <StateSpace
          showHeuristics
          title="Die Grenze, sortiert nach f — so wählt A* aus"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Eigenschaften von Heuristiken
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Eigenschaft 1: zulässig (admissible)</h2>
          <p>
            Eine Heuristik heisst <strong>zulässig</strong>, wenn sie{" "}
            <strong>nie zu viel schätzt</strong>:
          </p>
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            <code>h(n) ≤ h*(n)</code> für alle Zustände <code>n</code>
          </p>
          <p>
            Dabei ist <code>h*(n)</code> der tatsächliche Restweg — den kennen
            wir natürlich nicht, sonst müssten wir nicht suchen. Eine zulässige
            Heuristik ist also <em>optimistisch</em>: Sie verspricht nie mehr,
            als sie halten kann.
          </p>
          <p>
            <strong>
              Das ist die Bedingung dafür, dass A<sup>*</sup> den kürzesten Weg
              findet.
            </strong>{" "}
            Die Begründung ist kurz: Angenommen, A<sup>*</sup> wollte einen zu
            teuren Zielknoten <code>G₂</code> herausnehmen. Dann liegt irgendwo
            in der Grenze noch ein Knoten <code>n</code> auf dem wirklich
            kürzesten Weg. Für den gilt{" "}
            <code>f(n) = g(n) + h(n) ≤ g(n) + h*(n) = </code> Kosten der
            optimalen Lösung <code> &lt; f(G₂)</code>. Also wäre <code>n</code>{" "}
            vorher drangekommen — Widerspruch.
          </p>
          <p>
            Beide Puzzle-Heuristiken sind zulässig: Jeder Zug bringt höchstens
            einen Stein an seinen Platz (
            <code>
              h<sub>1</sub>
            </code>
            ) und verringert die Manhattan-Summe um höchstens 1 (
            <code>
              h<sub>2</sub>
            </code>
            ). Multipliziert man aber <code>h₂</code> mit 3, ist die Heuristik
            nicht mehr zulässig — A<sup>*</sup> wird schneller, findet aber
            Lösungen, die zu lang sind.
          </p>
          <p>
            Am besten sieht man das an einem Ausschnitt eines Suchbaums.
            Derselbe Baum, dieselben Kosten — nur eine einzige Schätzung ist zu
            gross:
          </p>
          <p>
            <em>Hinweis:</em> Der Baum unten ist <strong>nicht</strong> das
            Puzzle, sondern ein kleines Beispiel mit{" "}
            <strong>unterschiedlichen Kantenkosten</strong> (wie eine
            Landkarte). Im Puzzle kostet jeder Zug genau <code>1</code>, dann
            wären alle Kanten gleich lang und man sähe den Effekt viel
            schlechter.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <HeuristicTree
          mode="zulaessig"
          title="Zulässigkeit: was passiert, wenn eine Schätzung zu gross ist?"
        />
      </div>

      <ScrollSection area="content">
        <section>
          <h2>Eigenschaft 2: konsistent (monoton)</h2>
          <p>
            Etwas strenger ist die <strong>Konsistenz</strong>. Sie verlangt,
            dass die Schätzung entlang jeder Kante nicht zu schnell fällt:
          </p>
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            <code>h(n) ≤ cost(n, n′) + h(n′)</code>
          </p>
          <p>
            Dabei ist <code>n</code> der aktuelle Knoten und <code>n′</code> («n
            Strich») ein direkter <strong>Nachfolger</strong> von <code>n</code>
            , also ein Nachbar, den man über genau eine Kante erreicht.{" "}
            <code>cost(n, n′)</code> sind die Kosten dieser Kante. Die Bedingung
            muss für jede solche Kante <code>n → n′</code> im Graphen gelten. Im
            Schiebepuzzle kostet jeder Zug <code>1</code>, dort heisst die
            Bedingung also schlicht <code>h(n) ≤ 1 + h(n′)</code>: Ein einzelner
            Zug darf die Schätzung höchstens um <code>1</code> senken. Der Baum
            im Widget unten hat dagegen bewusst unterschiedliche Kantenkosten.
          </p>
          <p>
            Das ist die Dreiecksungleichung: Der Umweg über einen Nachbarn darf
            nie günstiger erscheinen als die direkte Schätzung. Konsistenz ist
            der Grund, warum unsere <strong>Besucht-Menge</strong> überhaupt
            erlaubt ist: Bei einer konsistenten Heuristik wächst <code>f</code>{" "}
            entlang jedes Pfades nie, und wenn A<sup>*</sup> einen Knoten
            herausnimmt, hat er ihn garantiert schon auf dem billigsten Weg
            gefunden. Man darf ihn also abhaken und nie wieder anschauen.
          </p>
          <p>
            Ist <code>h</code> nur zulässig, aber nicht konsistent, kann man
            einen Knoten später auf einem billigeren Weg wiederfinden. Dann muss
            man ihn erneut in die Grenze legen («reopening»), sonst verliert man
            die Optimalität. Praktisch gilt:{" "}
            <em>Jede konsistente Heuristik ist zulässig</em>, und fast alle
            Heuristiken, die aus einer Relaxation entstehen, sind automatisch
            konsistent — auch unsere beiden.
          </p>
          <p>
            Im selben Baum steht die Bedingung jetzt an jeder Kante. Achten Sie
            auf die <code>f</code>-Werte: Solange die Heuristik konsistent ist,
            werden sie von links nach rechts nie kleiner.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <HeuristicTree
          mode="konsistent"
          title="Konsistenz: die Bedingung an jeder einzelnen Kante"
        />
      </div>

      <ScrollSection area="content">
        <section>
          <h2>Eigenschaft 3: Dominanz — je grösser, desto besser</h2>
          <p>
            Zwei zulässige Heuristiken vergleicht man so: <code>h₂</code>{" "}
            <strong>dominiert</strong> <code>h₁</code>, wenn{" "}
            <code>h₂(n) ≥ h₁(n)</code> für alle <code>n</code> gilt. Die
            grössere zulässige Heuristik ist immer die bessere — sie ist näher
            an der Wahrheit und schneidet mehr Zweige weg.
          </p>
          <p>
            Die Manhattan-Distanz dominiert die falschen Plätze: Jeder Stein am
            falschen Platz steuert mindestens 1 bei, meist mehr.
          </p>
          <p>
            Was das bewirkt, zeigt wieder der Suchbaum: Je grösser{" "}
            <code>h</code>, desto früher steigt <code>f = g + h</code> über die
            Kosten der optimalen Lösung — und alles darüber schaut A<sup>*</sup>{" "}
            gar nie an.
          </p>
        </section>
      </ScrollSection>

      <div className="breakout">
        <HeuristicTree
          mode="dominanz"
          title="Dominanz: die grössere zulässige Heuristik schneidet mehr weg"
        />
      </div>

      <ScrollSection area="content">
        <section>
          <p>
            Bei echten Problemen ist der Effekt dramatisch. Dieselben
            Stellungen, dieselben Lösungen — nur die Anzahl angeschauter Knoten
            unterscheidet sich:
          </p>
          <DataTable
            headers={[
              "Startstellung",
              "kürzester Weg",
              "BFS",
              "A* mit falschen Plätzen",
              "A* mit Manhattan",
            ]}
            rows={[
              ["2,8,3,1,0,5,4,7,6", "8 Züge", "206", "15", "10"],
              ["1,8,2,5,0,3,4,6,7", "12 Züge", "1'647", "112", "38"],
              ["3,5,6,1,7,2,4,8,0", "14 Züge", "3'883", "211", "54"],
              ["3,1,2,4,0,5,6,7,8", "20 Züge", "61'075", "4'259", "696"],
              ["1,5,6,8,3,2,0,7,4", "24 Züge", "119'564", "19'368", "3'281"],
              ["6,2,1,5,8,4,3,7,0", "28 Züge", "179'208", "71'908", "7'845"],
            ]}
            caption="Expandierte Knoten. Alle drei finden denselben kürzesten Weg — mit sehr unterschiedlichem Aufwand."
          />
          <p>
            Die Grenze der Idee: <code>h = h*</code> wäre perfekt, A<sup>*</sup>{" "}
            würde schnurgerade zum Ziel laufen. Aber <code>h*</code>{" "}
            auszurechnen heisst, das Problem zu lösen. Eine gute Heuristik ist
            immer ein <strong>Kompromiss</strong> zwischen «möglichst genau» und
            «möglichst billig auszurechnen».
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Exkurs: Muss es immer dieselbe Heuristik sein?</h2>
          <p>
            Nein. Wir haben bisher <em>eine</em> Heuristik gewählt und sie
            während der ganzen Suche behalten. Man kann aber auch mehrere
            gleichzeitig benutzen:
          </p>
          <ul>
            <li>
              <strong>Maximum:</strong> <code>h(n) = max(h₁(n), h₂(n))</code>.
              Sind beide zulässig (bzw. konsistent), ist das Maximum es auch —
              und es dominiert beide. Für A<sup>*</sup> der sichere Weg.
            </li>
            <li>
              <strong>Summe:</strong> <code>h₁(n) + h₂(n)</code> ist grösser,
              aber in der Regel <em>nicht mehr zulässig</em> — die Optimalität
              ist weg.
            </li>
            <li>
              <strong>Abwechseln:</strong> pro Heuristik eine eigene Grenze
              führen und reihum einmal aus der einen, einmal aus der anderen
              expandieren («alternation»).
            </li>
          </ul>
          <p>
            Genau das letzte untersuchen Gabriele Röger und Malte Helmert in{" "}
            <a
              href="https://ai.dmi.unibas.ch/papers/roeger-helmert-icaps2010.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <em>
                The More, the Merrier: Combining Heuristic Estimators for
                Satisficing Planning
              </em>
            </a>{" "}
            (ICAPS 2010). Ihr Befund: Wenn man nur <strong>irgendeine</strong>{" "}
            Lösung schnell will («satisficing»), ist das Abwechseln zwischen den
            Heuristiken deutlich besser, als sie zu einem einzigen Wert zu
            verrechnen. Der Grund ist anschaulich: Jede Heuristik hat ihre
            eigenen blinden Flecken («Plateaus»), in denen sie die Suche in die
            Irre führt. Steckt die eine fest, zieht die andere die Suche wieder
            heraus.
          </p>
          <p>
            Wichtig für uns: Das gilt für die Suche <em>ohne</em>{" "}
            Optimalitätsgarantie. Sobald wir wie bei A<sup>*</sup> den{" "}
            <strong>kürzesten</strong> Weg garantieren wollen, bleibt es beim
            Maximum zulässiger Heuristiken. Die Regel «je grösser, desto besser»
            gilt also nur innerhalb der zulässigen Heuristiken — und «eine
            Heuristik pro Suche» ist eine Vereinfachung, keine Notwendigkeit.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Vergleich
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>
            A<sup>*</sup> gegen Greedy
          </h2>
          <p>
            Beide benutzen dieselbe Heuristik, beide benutzen eine
            Prioritätswarteschlange. Der ganze Unterschied ist das{" "}
            <code>g</code> in der Formel — und er ist riesig:
          </p>
          <ul>
            <li>
              <strong>Greedy</strong> expandiert oft weniger Knoten, liefert
              aber lange, krumme Wege. Er ist nicht optimal.
            </li>
            <li>
              <strong>
                A<sup>*</sup>
              </strong>{" "}
              expandiert mehr Knoten, findet mit einer zulässigen Heuristik aber
              garantiert den kürzesten Weg. Mehr noch: Kein optimaler
              Algorithmus, der dieselbe Heuristik benutzt, expandiert weniger
              Knoten — A<sup>*</sup> ist in diesem Sinn optimal effizient.
            </li>
            <li>
              Beide haben dasselbe Problem wie BFS: Sie behalten die ganze
              Grenze im Speicher. Bei grossen Problemen geht zuerst der{" "}
              <strong>Speicher</strong> aus, nicht die Zeit.
            </li>
          </ul>
        </section>
      </ScrollSection>

      <AlgoTable
        rows={[
          {
            name: "Breitensuche",
            kurz: "BFS",
            frontier: "Warteschlange",
            pick: "ältester Knoten",
            vollstaendig: { wert: "ja" },
            optimal: { wert: "teils", text: "nur bei gleichen Kosten" },
            speicher: { wert: "schlecht" },
          },
          {
            name: "Kostensuche",
            kurz: "UCS / Dijkstra",
            frontier: "Prioritätswarteschlange",
            pick: "kleinstes g",
            vollstaendig: { wert: "ja" },
            optimal: { wert: "ja" },
            speicher: { wert: "schlecht" },
          },
          {
            name: "Greedy Best-First",
            kurz: "GBFS",
            frontier: "Prioritätswarteschlange",
            pick: "kleinstes h",
            vollstaendig: { wert: "teils", text: "mit Besucht-Menge" },
            optimal: { wert: "nein" },
            speicher: { wert: "mittel" },
          },
          {
            name: "A*",
            kurz: "f = g + h",
            frontier: "Prioritätswarteschlange",
            pick: "kleinstes f",
            vollstaendig: { wert: "ja" },
            optimal: { wert: "teils", text: "wenn h zulässig ist" },
            speicher: { wert: "schlecht" },
          },
        ]}
        caption="Greedy ist schnell, A* ist richtig. Mit h = 0 wird A* wieder zu UCS."
      />

      <div className="breakout">
        <PuzzleSearch
          strategies={["astar", "greedy", "ucs", "bfs", "dfs", "ids"]}
          start={[0, 8, 2, 5, 7, 3, 1, 4, 6]}
          title="Alle sechs auf derselben Stellung — achten Sie auf Weglänge UND expandierte Knoten"
        />
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Wo A* überall steckt
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>
            Wo A<sup>*</sup> überall steckt
          </h2>
          <ul>
            <li>
              <strong>Computerspiele:</strong> Jede Einheit, die auf einem
              Raster um Hindernisse läuft, benutzt A<sup>*</sup> — Heuristik ist
              meist die Manhattan- oder Luftliniendistanz.
            </li>
            <li>
              <strong>Roboter:</strong> Pfadplanung auf einer Karte, oft mit
              Varianten wie D<sup>*</sup>, die auf Änderungen reagieren können.
            </li>
            <li>
              <strong>Routenplaner:</strong> A<sup>*</sup> mit Luftlinie ist der
              Einstieg. Für ganz Europa reicht das nicht — dort kommen
              hierarchische Verfahren dazu. Genau das schauen wir nächste Woche
              an.
            </li>
            <li>
              <strong>Planung und Logistik:</strong> Reihenfolge von
              Arbeitsschritten, Packprobleme, Rätsel aller Art.
            </li>
          </ul>
          <p>
            <strong>Nächste Woche:</strong> kürzeste Pfade in echten Netzen. Wir
            schauen uns <strong>Dijkstra</strong> am Beispiel des Routenplanens
            an — das ist unser UCS, nur ohne Heuristik und auf einem Graphen,
            den wir wirklich haben. Und wir lesen nach, mit welchen Tricks ein
            Dienst wie Google Maps daraus eine Antwort in Millisekunden macht.
          </p>
        </section>
      </ScrollSection>

      <LearningGoals>
        <ul>
          <li>
            Ich kann erklären, was eine Heuristik <code>h(state)</code> ist und
            wie man sie durch Relaxation eines Problems findet.
          </li>
          <li>
            Ich kann die Manhattan-Distanz und die Anzahl falscher Plätze für
            eine gegebene Stellung von Hand ausrechnen.
          </li>
          <li>
            Ich kann <code>g</code>, <code>h</code> und <code>f = g + h</code>{" "}
            für einen Knoten bestimmen und erklären, was jede Zahl bedeutet.
          </li>
          <li>
            Ich kann A<sup>*</sup> von Hand ausführen und dabei die Grenze nach{" "}
            <code>f</code> sortiert nachführen.
          </li>
          <li>
            Ich kann den Unterschied zwischen Greedy Best-First und A
            <sup>*</sup> erklären und an einem Beispiel zeigen, warum Greedy
            nicht optimal ist.
          </li>
          <li>
            Ich kann erklären, was eine zulässige und was eine konsistente
            Heuristik ist, und warum A<sup>*</sup> nur mit einer zulässigen
            Heuristik den kürzesten Weg findet.
          </li>
          <li>
            Ich kann begründen, warum von zwei zulässigen Heuristiken die
            grössere die bessere ist (Dominanz).
          </li>
          <li>
            Ich kann A<sup>*</sup> und Greedy Best-First in bestehenden Code
            einbauen und ihre Statistiken vergleichen und interpretieren.
          </li>
        </ul>
      </LearningGoals>
    </>
  );
}
