import CodeBlock from "@components/CodeBlock";
import DataTable from "@components/DataTable/DataTable";
import Section from "@components/Section";

export default function KIAufgabenHeuristikenCode() {
  return (
    <>
      <Section>
        <h2>
          Aufgaben: A<sup>*</sup> und Greedy implementieren
        </h2>
        <p>
          Sie arbeiten im selben Repository wie letzte Woche:{" "}
          <a
            href="https://github.com/gymmu/graph-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            gymmu/graph-search
          </a>
          . Diesmal bauen Sie die <strong>Heuristiken</strong> ein, bringen{" "}
          <strong>
            A<sup>*</sup>
          </strong>{" "}
          und <strong>Greedy Best-First</strong> zum Laufen und lassen sie
          anschliessend auf zwölf vorbereitete Stellungen los. Aus den
          Messwerten erarbeiten Sie den Unterschied der beiden Algorithmen.
        </p>
        <p>
          <strong>Voraussetzung:</strong> Ihr Repo aus dem letzten Kapitel mit
          funktionierendem <code>Stack</code> und <code>PriorityQueue</code>.
          Falls <code>node index.js puzzle ucs</code> bei Ihnen noch nicht
          läuft, holen Sie das zuerst nach — ohne Prioritätswarteschlange gibt
          es kein A<sup>*</sup>.
        </p>
        <p>
          Und: Sie brauchen Ihr <strong>Vorhersage-Blatt</strong> aus Aufgabe 10
          des Papier-Kapitels.
        </p>
      </Section>

      {/* ══════════════════════════════════════════════════════
          KI-REGELN
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Ihre Rolle: Sie sind der Senior-Developer</h2>
        <p>
          In diesem Kapitel arbeiten Sie am Computer und dürfen ein{" "}
          <strong>LLM</strong> einsetzen — ChatGPT, Copilot, Claude, was Sie
          wollen. Aber mit einer klaren Rollenverteilung:{" "}
          <strong>
            Sie sind die Senior-Entwicklerin bzw. der Senior-Entwickler, das LLM
            ist Ihr Junior.
          </strong>
        </p>
        <p>
          Ein Senior schreibt längst nicht mehr jede Zeile selbst. Er gibt die
          Aufgabe weiter, bekommt Code zurück — und ist trotzdem dafür
          verantwortlich, was am Ende im Projekt landet. Genau das üben Sie
          hier.
        </p>
        <ol>
          <li>
            <strong>Delegieren ist erlaubt.</strong> Sie müssen den Code nicht
            alles selber tippen. Beschreiben Sie dem Junior möglichst genau, was
            die Funktion tun soll — am besten in einem Satz, den Sie sich vorher
            selbst überlegt haben.
          </li>
          <li>
            <strong>Sie müssen den Code verstehen, den Sie einfügen.</strong>{" "}
            Nichts kommt ungelesen ins Repo. Gehen Sie jede eingefügte Zeile
            durch: Was passiert hier, und warum steht es so da?
          </li>
          <li>
            <strong>
              Kritisch prüfen, ob der Code wirklich das tut, was Sie wollen.
            </strong>{" "}
            Das geht <em>nicht nur</em> über das Ausführen. Ein Programm, das
            läuft und eine Zahl ausgibt, kann trotzdem falsch sein — eine
            Heuristik mit Vorzeichenfehler fällt beim Ausführen nicht auf. Sie
            müssen den Code <strong>lesen</strong> und mit dem vergleichen, was
            Sie eigentlich beabsichtigt haben.
          </li>
          <li>
            <strong>Der Junior darf auch beim Verstehen helfen.</strong> Sie
            dürfen sich vom LLM erklären lassen, was ein Stück Code tut — das
            ist ausdrücklich erwünscht. Aber: Diese Erklärung ist eine{" "}
            <em>Behauptung</em>, kein Beweis. Verifizieren Sie sie, z.&nbsp;B.
            mit einem kleinen Testfall, einer Handrechnung an einem Beispiel
            oder indem Sie einen Wert ausgeben lassen und mit Ihrer Erwartung
            vergleichen.
          </li>
          <li>
            <strong>Entscheidungen dokumentieren.</strong> Legen Sie im Repo
            eine Datei <code>ki-protokoll.md</code> an. Für jede Stelle, an der
            Sie delegiert haben: Ihr Auftrag an den Junior, was zurückkam, was
            Sie daran geändert oder verworfen haben und{" "}
            <strong>wie Sie geprüft haben, dass es stimmt</strong>. Auch
            Fehlversuche — gerade die sind interessant.
          </li>
        </ol>
        <p>
          In der Besprechung zeige ich auf eine beliebige Stelle Ihres Codes und
          Sie erklären, was dort passiert und warum Sie ihm vertrauen. «Das hat
          die KI so gemacht» ist keine Antwort, die ein Senior geben darf.
        </p>
        <p>
          Der Grund ist einfach: Diese Algorithmen sind so bekannt, dass jedes
          LLM sie fehlerfrei hinschreibt. Interessant ist nicht mehr das Tippen,
          sondern ob Sie <em>beurteilen</em> können, ob das Ergebnis stimmt.
        </p>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 1 — Heuristiken
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 1 — Die Heuristiken</h2>

        <div className="aufgabe">
          <h4>
            Aufgabe 1: <code>src/heuristics.js</code> fertigstellen
          </h4>
          <p>
            In der Datei stehen drei Funktionen mit einem <code>TODO</code>:{" "}
            <code>falschePlaetze</code>, <code>manhattan</code> und{" "}
            <code>gap</code>.
          </p>
          <ol>
            <li>
              Implementieren Sie <code>falschePlaetze(state)</code>. Achtung:
              Das leere Feld (<code>0</code>) zählt <em>nicht</em> mit. Warum
              eigentlich nicht? Notieren Sie die Antwort als Kommentar über der
              Funktion.
            </li>
            <li>
              Implementieren Sie <code>manhattan(state)</code>. Rechnen Sie für
              jeden Stein Zeilen- und Spaltenabstand zum Zielplatz aus.
            </li>
            <li>
              Prüfen Sie beide an den vier Stellungen aus dem Papier-Kapitel
              nach. Stimmen die Zahlen mit Ihren Handrechnungen überein? Wenn
              nicht: Wer hat recht?
            </li>
            <li>
              Implementieren Sie <code>gap(state)</code> für den
              Pfannkuchen-Stapel: Zwei benachbarte Pfannkuchen, deren Grössen
              sich um mehr als 1 unterscheiden, bilden einen «Bruch». Zählen Sie
              die Brüche.
            </li>
          </ol>
          <CodeBlock lang="bash" filename="terminal">
            {`node index.js puzzle astar manhattan
node index.js puzzle astar falschePlaetze
node index.js puzzle greedy manhattan
node index.js pancake astar gap`}
          </CodeBlock>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 2: Die Heuristik testen, nicht hoffen</h4>
          <p>
            Eine Heuristik mit einem Vorzeichenfehler fällt nicht auf — das
            Programm läuft einfach weiter und gibt zu lange Wege aus. Schreiben
            Sie deshalb eine kleine Testdatei <code>test-heuristics.js</code>.
          </p>
          <ol>
            <li>
              Testen Sie: <code>h(ZIEL) === 0</code> für beide
              Puzzle-Heuristiken.
            </li>
            <li>
              Testen Sie an mindestens fünf Stellungen, dass{" "}
              <code>manhattan(s) ≥ falschePlaetze(s)</code> gilt. Wie heisst
              diese Eigenschaft in der Theorie?
            </li>
            <li>
              Testen Sie die <strong>Konsistenz</strong>: Erzeugen Sie für
              zwanzig zufällige Stellungen alle Nachfolger und prüfen Sie, dass{" "}
              <code>h(n) − h(n′) ≤ 1</code> gilt. Lassen Sie den Test eine
              Fehlermeldung ausgeben, wenn er fehlschlägt.
            </li>
            <li>
              Bauen Sie absichtlich einen Fehler ein (z.&nbsp;B. das leere Feld
              bei Manhattan mitzählen) und prüfen Sie, ob Ihr Test ihn findet.
              Machen Sie den Fehler danach wieder rückgängig.
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 2 — Die Algorithmen
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>
          Teil 2 — Greedy und A<sup>*</sup>
        </h2>

        <div className="aufgabe">
          <h4>Aufgabe 3: Die beiden Zeilen lesen</h4>
          <p>
            In <code>src/search.js</code> stehen am Ende zwei Funktionen. Der
            ganze Unterschied zwischen den Algorithmen steckt in der Funktion,
            die der <code>PriorityQueue</code> übergeben wird.
          </p>
          <CodeBlock lang="javascript" filename="src/search.js">
            {`export function greedy(problem, h, options) {
  return search(problem, new PriorityQueue((node) => h(node.state)), options);
}

export function astar(problem, h, options) {
  return search(
    problem,
    new PriorityQueue((node) => node.g + h(node.state)),
    options,
  );
}`}
          </CodeBlock>
          <ol>
            <li>
              Erklären Sie schriftlich, was <code>node.g</code> ist und woher
              der Wert kommt. Suchen Sie die Stelle in <code>makeNode</code>.
            </li>
            <li>
              Was passiert, wenn Sie A<sup>*</sup> mit{" "}
              <code>nullHeuristik</code> aufrufen? Probieren Sie es aus und
              vergleichen Sie die Statistik mit <code>ucs</code>. Erklären Sie
              das Ergebnis.
            </li>
            <li>
              Ändern Sie testweise die Priorität von A<sup>*</sup> auf{" "}
              <code>node.g + 3 * h(node.state)</code>. Wie verändern sich
              Weglänge und expandierte Knoten? Machen Sie die Änderung danach
              rückgängig.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 4: Gleichstände brechen</h4>
          <p>
            Sehr oft haben mehrere Knoten dasselbe <code>f</code>. Welchen Ihre{" "}
            <code>PriorityQueue</code> dann nimmt, ist Zufall — und das kostet
            messbar.
          </p>
          <ol>
            <li>
              Erweitern Sie Ihre <code>PriorityQueue</code> so, dass bei
              gleichem <code>f</code> der Knoten mit dem{" "}
              <strong>
                kleineren <code>h</code>
              </strong>{" "}
              (also dem grösseren <code>g</code>) zuerst herauskommt.
            </li>
            <li>
              Messen Sie vorher und nachher die expandierten Knoten auf der
              Stellung <code>6,2,1,5,8,4,3,7,0</code>. Wie gross ist der
              Unterschied?
            </li>
            <li>
              Erklären Sie, warum dieser Tie-Break hilft. Tipp: Welche Knoten
              liegen bei A<sup>*</sup> mit gleichem <code>f</code> näher am
              Ziel?
            </li>
            <li>
              Bleibt A<sup>*</sup> mit diesem Tie-Break optimal? Begründen Sie.
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 3 — Das Experiment
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 3 — Das Experiment</h2>
        <p>
          Einzelne Aufrufe auf der Kommandozeile sagen wenig. Jetzt bauen Sie
          sich eine kleine <strong>Messreihe</strong>: dieselben zwölf
          Stellungen, vier Verfahren, eine Tabelle.
        </p>

        <div className="aufgabe">
          <h4>Aufgabe 5: Die Testfälle anlegen</h4>
          <p>
            Legen Sie die Datei <code>src/instanzen.js</code> an. Die zwölf
            Stellungen sind so erzeugt worden, dass ihr kürzester Weg bekannt
            ist — damit können Sie jede Lösung überprüfen.
          </p>
          <CodeBlock lang="javascript" filename="src/instanzen.js">
            {`// Zwölf Schiebepuzzle-Stellungen mit bekanntem kürzestem Weg.
// "opt" ist die Länge der optimalen Lösung in Zügen.
export const INSTANZEN = [
  { name: "I01", start: [0, 1, 3, 4, 2, 5, 7, 8, 6], opt: 4 },
  { name: "I02", start: [2, 8, 3, 1, 0, 5, 4, 7, 6], opt: 8 },
  { name: "I03", start: [5, 1, 0, 2, 6, 3, 4, 7, 8], opt: 10 },
  { name: "I04", start: [1, 8, 2, 5, 0, 3, 4, 6, 7], opt: 12 },
  { name: "I05", start: [3, 5, 6, 1, 7, 2, 4, 8, 0], opt: 14 },
  { name: "I06", start: [2, 3, 6, 7, 0, 1, 4, 5, 8], opt: 16 },
  { name: "I07", start: [4, 3, 8, 7, 1, 5, 0, 6, 2], opt: 18 },
  { name: "I08", start: [3, 1, 2, 4, 0, 5, 6, 7, 8], opt: 20 },
  { name: "I09", start: [5, 4, 1, 8, 0, 7, 6, 2, 3], opt: 22 },
  { name: "I10", start: [1, 5, 6, 8, 3, 2, 0, 7, 4], opt: 24 },
  { name: "I11", start: [8, 7, 1, 2, 0, 4, 3, 5, 6], opt: 26 },
  { name: "I12", start: [6, 2, 1, 5, 8, 4, 3, 7, 0], opt: 28 },
];`}
          </CodeBlock>
          <ol>
            <li>
              Lösen Sie <code>I01</code> und <code>I02</code> zuerst von Hand
              oder mit <code>bfs</code> und prüfen Sie, dass die Angabe{" "}
              <code>opt</code> stimmt.
            </li>
            <li>
              Rechnen Sie für alle zwölf Stellungen{" "}
              <code>manhattan(start)</code> aus und vergleichen Sie mit{" "}
              <code>opt</code>. Ist die Heuristik je grösser als der echte Weg?
              Was hiesse das?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 6: Das Messprogramm</h4>
          <p>
            Schreiben Sie <code>bench.js</code> im Wurzelverzeichnis. Hier
            dürfen Sie delegieren — aber das Gerüst und die Spalten geben Sie
            als Senior vor, und jede Zeile, die zurückkommt, lesen Sie durch,
            bevor sie ins Repo kommt.
          </p>
          <CodeBlock lang="javascript" filename="bench.js">
            {`import { INSTANZEN } from "./src/instanzen.js";
import { SlidingPuzzle } from "./src/problems/sliding-puzzle.js";
import { bfs, astar, greedy } from "./src/search.js";
import { falschePlaetze, manhattan } from "./src/heuristics.js";

const VERFAHREN = [
  { label: "astar+manhattan", lauf: (p) => astar(p, manhattan) },
  { label: "astar+falsche",   lauf: (p) => astar(p, falschePlaetze) },
  { label: "greedy+manhattan", lauf: (p) => greedy(p, manhattan) },
  { label: "greedy+falsche",  lauf: (p) => greedy(p, falschePlaetze) },
  // { label: "bfs", lauf: (p) => bfs(p) },   // Achtung: ab I08 sehr langsam
];

const zeilen = [];
for (const inst of INSTANZEN) {
  for (const v of VERFAHREN) {
    const problem = new SlidingPuzzle(inst.start);
    const t0 = performance.now();
    const r = v.lauf(problem);
    const ms = Math.round(performance.now() - t0);

    zeilen.push({
      instanz: inst.name,
      verfahren: v.label,
      opt: inst.opt,
      laenge: r.path.length - 1,
      optimal: r.path.length - 1 === inst.opt ? "ja" : "NEIN",
      expandiert: r.expanded,
      erzeugt: r.generated,
      maxGrenze: r.maxFrontier,
      ms,
    });
  }
}

console.table(zeilen);

// TODO: zusätzlich als CSV ausgeben, damit Sie es in eine
// Tabellenkalkulation laden und ein Diagramm zeichnen können.`}
          </CodeBlock>
          <ol>
            <li>
              Bringen Sie <code>bench.js</code> zum Laufen:{" "}
              <code>node bench.js</code>.
            </li>
            <li>
              Ergänzen Sie die CSV-Ausgabe (eine Zeile pro Messung, Spalten mit{" "}
              <code>;</code> getrennt) und schreiben Sie sie in eine Datei{" "}
              <code>messungen.csv</code>.
            </li>
            <li>
              Ergänzen Sie eine Spalte <code>ueberschuss</code>: um wie viele
              Züge ist der gefundene Weg länger als <code>opt</code>?
            </li>
            <li>
              Lassen Sie BFS zusätzlich mitlaufen, aber nur für <code>I01</code>{" "}
              bis <code>I07</code>. Begründen Sie im Kommentar, warum Sie es bei
              den grossen Instanzen weglassen.
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 4 — Auswertung
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 4 — Auswertung</h2>
        <p>
          Jetzt kommt der eigentliche Teil dieses Kapitels. Messen kann die
          Maschine — <strong>interpretieren</strong> müssen Sie.
        </p>

        <div className="aufgabe">
          <h4>Aufgabe 7: Die Haupttabelle</h4>
          <p>
            Übertragen Sie Ihre Messwerte in <code>antworten.md</code>. Eine
            Zeile pro Instanz:
          </p>
          <DataTable
            headers={[
              "Instanz",
              "opt",
              "A*+man: Länge / expandiert",
              "A*+falsche: Länge / expandiert",
              "Greedy+man: Länge / expandiert",
              "Greedy+falsche: Länge / expandiert",
            ]}
            rows={[
              ["I01", "4", "…", "…", "…", "…"],
              ["I04", "12", "…", "…", "…", "…"],
              ["I08", "20", "…", "…", "…", "…"],
              ["I12", "28", "…", "…", "…", "…"],
              ["…", "…", "…", "…", "…", "…"],
            ]}
            caption="Zur Kontrolle: Auf I12 expandiert A*+Manhattan rund 7'800 Knoten, A*+falsche Plätze rund 72'000."
          />
          <ol>
            <li>
              Holen Sie Ihr Vorhersage-Blatt hervor. Welche Ihrer Vermutungen
              haben sich bestätigt, welche nicht?
            </li>
            <li>
              Bei wie vielen Instanzen hat Greedy den kürzesten Weg gefunden?
              Bei wie vielen A<sup>*</sup>?
            </li>
            <li>
              Suchen Sie die Instanz, bei der Greedy am schlechtesten
              abschneidet. Wie viel länger ist sein Weg?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 8: Dominanz messen</h4>
          <ol>
            <li>
              Bilden Sie für jede Instanz den Quotienten{" "}
              <code>expandiert(A*+falsche) / expandiert(A*+manhattan)</code>.
            </li>
            <li>
              Zeichnen Sie ein Diagramm: x-Achse <code>opt</code>, y-Achse
              expandierte Knoten, eine Kurve pro Verfahren. Nehmen Sie für die
              y-Achse eine <strong>logarithmische</strong> Skala und erklären
              Sie, warum das hier nötig ist.
            </li>
            <li>
              Wie verhält sich der Aufwand, wenn <code>opt</code> um 2 wächst?
              Ungefähr konstant, linear oder multiplikativ? Lesen Sie es am
              Diagramm ab.
            </li>
            <li>
              Formulieren Sie die Dominanz von h<sub>2</sub> über h<sub>1</sub>{" "}
              anhand Ihrer Zahlen in zwei Sätzen — einmal in Formelsprache,
              einmal für eine Mitschülerin, die den Unterricht verpasst hat.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>
            Aufgabe 9: Greedy gegen A<sup>*</sup> — der Handel
          </h4>
          <ol>
            <li>
              Vergleichen Sie für die grossen Instanzen (I09–I12) die
              expandierten Knoten von Greedy und A<sup>*</sup>. Wer ist
              sparsamer, und um welchen Faktor?
            </li>
            <li>
              Vergleichen Sie jetzt die Weglängen. Formulieren Sie den Handel,
              den man mit Greedy eingeht, in einem Satz.
            </li>
            <li>
              Nennen Sie zwei konkrete Anwendungen: eine, bei der Greedy völlig
              genügt, und eine, bei der man unbedingt A<sup>*</sup> braucht.
              Begründen Sie beide.
            </li>
            <li>
              Interessanterweise expandiert Greedy nicht immer weniger als A
              <sup>*</sup> — suchen Sie in Ihren Messwerten eine Instanz, bei
              der Greedy <em>mehr</em> expandiert. Woran kann das liegen?
            </li>
            <li>
              Überlegen Sie sich ein Verfahren «dazwischen»:{" "}
              <code>f = g + w · h</code> mit <code>w = 2</code>. Messen Sie es
              für drei Instanzen. Wo liegt es in Bezug auf Aufwand und Weglänge?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 10: Speicher statt Zeit</h4>
          <ol>
            <li>
              Schauen Sie sich die Spalte <code>maxGrenze</code> an. Wie gross
              wird die Grenze bei A<sup>*</sup> auf I12? Wie gross bei BFS auf
              I07?
            </li>
            <li>
              Schätzen Sie ab: Wie viel Arbeitsspeicher bräuchte BFS für eine
              Stellung mit <code>opt = 28</code>? Rechnen Sie grob mit 100 Byte
              pro Knoten.
            </li>
            <li>
              Was würde passieren, wenn wir ein 4×4-Puzzle (15-Puzzle) lösen
              wollten? Recherchieren Sie die Anzahl erreichbarer Zustände und
              überlegen Sie, welcher der Algorithmen überhaupt noch eine Chance
              hat.
            </li>
            <li>
              <strong>Zusatz:</strong> Suchen Sie, was <strong>IDA*</strong>{" "}
              macht, und erklären Sie in drei Sätzen, welches Problem es löst.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 11: Ein zweites Problem</h4>
          <p>
            Alles, was Sie gemessen haben, gilt bisher für ein einziges Problem.
          </p>
          <ol>
            <li>
              Lassen Sie A<sup>*</sup> mit <code>gap</code> und Greedy mit{" "}
              <code>gap</code> auf mindestens fünf Pfannkuchen-Stapel los
              (verschiedene Grössen).
            </li>
            <li>
              Vergleichen Sie mit <code>bfs</code>: Wie viel bringt die
              Heuristik hier?
            </li>
            <li>
              Ist <code>gap</code> zulässig? Überlegen Sie, wie viele Brüche ein
              einzelner Wende-Zug beseitigen kann.
            </li>
            <li>
              Bleiben Ihre Schlussfolgerungen aus Aufgabe 9 auch hier gültig?
            </li>
          </ol>
        </div>
      </Section>

      <Section>
        <h2>Abgabe</h2>
        <ul>
          <li>
            Ihr Repo mit fertiger <code>src/heuristics.js</code>,{" "}
            <code>src/instanzen.js</code>, <code>bench.js</code> und{" "}
            <code>test-heuristics.js</code>.
          </li>
          <li>
            <code>messungen.csv</code> mit Ihrer vollständigen Messreihe.
          </li>
          <li>
            <code>antworten.md</code> mit den Tabellen und den schriftlichen
            Antworten zu den Aufgaben 7–11, inklusive Diagramm (als Bild im
            Repo).
          </li>
          <li>
            <code>ki-protokoll.md</code> mit Ihren Aufträgen an den Junior, was
            Sie daran geändert und wie Sie es geprüft haben.
          </li>
        </ul>
        <p>
          Teil 1 und 2 schaffen Sie in der ersten Lektion, Teil 3 und 4 in der
          zweiten.
        </p>
      </Section>
    </>
  );
}
