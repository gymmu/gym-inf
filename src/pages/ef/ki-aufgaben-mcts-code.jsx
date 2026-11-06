import {
  Abgabe,
  Aufgabe,
  Blattkopf,
  Box,
  Teil,
} from "@components/Aufgabenblatt/Aufgabenblatt";
import CodeBlock from "@components/CodeBlock";
import DataTable from "@components/DataTable/DataTable";
import { Math as Tex } from "@components/Katex.jsx";
import Section from "@components/Section";

export default function KIAufgabenMCTSCode() {
  return (
    <>
      <Section>
        <Blattkopf
          kicker="Woche 10 · Code"
          titel="Aufgaben: Probabilistisches Planen implementieren"
          meta={[
            { label: "Repo", value: "gymmu/graph-search" },
            { label: "LLM", value: "erlaubt — als Junior" },
            { label: "Umfang", value: "zwei Lektionen" },
          ]}
        >
          <p>
            Sie arbeiten im selben Repository wie bisher:{" "}
            <a
              href="https://github.com/gymmu/graph-search"
              target="_blank"
              rel="noopener noreferrer"
            >
              gymmu/graph-search
            </a>
            . Bisher kann es nur <strong>deterministisch</strong> planen: Eine
            Aktion führt zu genau einem Nachfolger. In diesem Kapitel erweitern
            Sie das Repo so, dass es auch mit <strong>Zufall</strong> umgehen
            kann — mit der <strong>rutschigen Gitterwelt</strong> als Testfall.
          </p>
          <p>
            <strong>Voraussetzung:</strong> Ihr Repo mit laufendem{" "}
            <code>search.js</code> und funktionierendem A<sup>*</sup> (Sie
            brauchen es am Ende zum Vergleich) sowie Ihr{" "}
            <strong>Vorhersage-Blatt</strong> aus Aufgabe 9 des Papier-Kapitels.
          </p>
        </Blattkopf>
      </Section>

      {/* ══════════════════════════════════════════════════════
          KI-REGELN
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil titel="Ihre Rolle: Sie sind der Senior-Developer">
          Wie im Heuristiken-Kapitel dürfen Sie ein LLM einsetzen. Die
          Rollenverteilung bleibt dieselbe: Sie sind Senior, das LLM ist Ihr
          Junior.
        </Teil>
        <ol>
          <li>
            <strong>Delegieren ist erlaubt.</strong> Beschreiben Sie dem Junior
            genau, was die Funktion tun soll — in Ihren eigenen Worten, bevor
            Sie fragen.
          </li>
          <li>
            <strong>Nichts kommt ungelesen ins Repo.</strong> Jede eingefügte
            Zeile müssen Sie erklären können.
          </li>
          <li>
            <strong>Prüfen heisst nicht nur ausführen.</strong> Und hier ist es
            schlimmer als bisher: Ein Programm mit Zufall gibt{" "}
            <em>immer plausible Zahlen</em> aus. Eine kaputte Übergangsfunktion
            sieht genau so aus wie eine korrekte — nur mit anderen Prozenten.
          </li>
          <li>
            <strong>Entscheidungen dokumentieren.</strong> Führen Sie{" "}
            <code>ki-protokoll.md</code> weiter: Auftrag, Antwort, was Sie
            geändert haben, <strong>wie Sie geprüft haben</strong>.
          </li>
        </ol>
        <Box art="achtung" titel="Ihr wichtigstes Testwerkzeug: Determinismus">
          <p>
            Mit <Tex>{"p = 0"}</Tex> muss Ihre probabilistische Welt{" "}
            <em>exakt</em> dieselben Ergebnisse liefern wie Ihr A<sup>*</sup>{" "}
            aus dem letzten Kapitel. Tut sie das nicht, ist etwas falsch — und
            zwar bevor Sie überhaupt mit Zufall anfangen.
          </p>
        </Box>
        <p>
          In der Besprechung zeige ich auf eine beliebige Stelle und Sie
          erklären sie. «Das hat die KI so gemacht» ist keine Antwort, die ein
          Senior geben darf.
        </p>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 1 — Die Welt
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Teil 1" titel="Die rutschige Gitterwelt">
          Bisher bot ein Problem nur <code>successors(state)</code> an. Für den
          Zufall brauchen wir eine zweite Methode — und das ist der eigentliche
          Umbau.
        </Teil>

        <Aufgabe nummer="1" titel="Die Schnittstelle entwerfen" tag="ohne Code">
          <p>
            Bevor Sie Code schreiben: Legen Sie fest, wie ein{" "}
            <strong>probabilistisches Problem</strong> in Ihrem Repo aussieht.
            Schreiben Sie das in <code>antworten.md</code> auf.
          </p>
          <ol>
            <li>
              Welche Methoden braucht es zusätzlich zu <code>start()</code>,{" "}
              <code>isGoal(s)</code> und <code>actions(s)</code>? Begründen Sie
              jede.
            </li>
            <li>
              Entscheiden Sie: <code>transitions(s, a)</code> (gibt eine{" "}
              <em>Liste</em> von <code>{"{ next, p }"}</code> zurück) oder{" "}
              <code>sample(s, a)</code> (gibt <em>einen</em> gewürfelten
              Nachfolger zurück) — oder beides? Was kann man mit dem einen, was
              mit dem anderen nicht geht?
            </li>
            <li>
              Wo kommt die Belohnung her? Schlagen Sie{" "}
              <code>reward(s, a, next)</code> vor und sagen Sie, welche Werte
              sie in unserer Welt liefert.
            </li>
            <li>
              Ist <code>successors(s)</code> aus dem alten Code ein Spezialfall
              von <code>transitions(s, a)</code>? Argumentieren Sie.
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe nummer="2" titel="src/problems/slippery-grid.js schreiben">
          <p>Die Welt ist ein Gitter aus Zeichen:</p>
          <CodeBlock lang="javascript" filename="src/problems/slippery-grid.js">
            {`// '.' frei   '#' Wand   'C' Klippe   'S' Start   'G' Ziel
export const WELT = [
  "........",
  "........",
  "........",
  "SCCCCCCG",
];

export const AKTIONEN = ["oben", "rechts", "unten", "links"];

export class SlipperyGrid {
  constructor(grid = WELT, p = 0.2) {
    // p = Wahrscheinlichkeit, dass der Roboter NICHT geradeaus geht,
    // sondern seitlich wegrutscht.
    // TODO
  }

  start() { /* TODO: Position von 'S' */ }

  isTerminal(s) { /* TODO: Ziel oder Klippe */ }

  actions(s) { return AKTIONEN; }

  // Liefert [{ next, p }, ...]. Die Summe aller p muss 1 ergeben.
  transitions(s, a) { /* TODO */ }

  // Zieht EINEN Nachfolger gemaess transitions().
  sample(s, a, rng = Math.random) { /* TODO */ }

  reward(s, a, next) { /* TODO: +1 im Ziel, 0 sonst, -1 in der Klippe? */ }
}`}
          </CodeBlock>
          <Box art="regel" titel="Die Rutschregel">
            <p>
              Mit <Tex>{"1 - p"}</Tex> geht der Roboter in die gewünschte
              Richtung, mit je <Tex>{"p/2"}</Tex> um 90° nach links oder rechts
              versetzt. Rückwärts rutscht er nie. Wer gegen eine Wand oder aus
              dem Gitter läuft, bleibt stehen.
            </p>
          </Box>
          <ol>
            <li>
              Implementieren Sie die Klasse. Fangen Sie mit{" "}
              <code>transitions</code> an und bauen Sie <code>sample</code>{" "}
              darauf auf, nicht umgekehrt.
            </li>
            <li>
              Behandeln Sie den Fall «zwei Ergebnisse führen auf dasselbe Feld»
              (z.&nbsp;B. an einer Wand). Fassen Sie sie zu <em>einem</em>{" "}
              Eintrag mit addierter Wahrscheinlichkeit zusammen. Warum ist das
              wichtig?
            </li>
            <li>
              Schreiben Sie <code>zeichne(grid, s)</code>, das die Welt mit dem
              Roboter auf der Konsole ausgibt. Sie werden es dauernd brauchen.
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe nummer="3" titel="Testen, nicht hoffen">
          <p>
            Legen Sie <code>test-grid.js</code> an. Jeder Test soll eine klare
            Fehlermeldung ausgeben, wenn er fehlschlägt.
          </p>
          <ol>
            <li>
              Für <strong>jeden</strong> freien Zustand und jede Aktion: Die
              Summe der Wahrscheinlichkeiten in <code>transitions</code> ist 1
              (auf 10 Nachkommastellen genau).
            </li>
            <li>
              Bei <Tex>{"p = 0"}</Tex> hat <code>transitions</code> genau{" "}
              <strong>einen</strong> Eintrag mit <Tex>{"p = 1"}</Tex>.
            </li>
            <li>
              Kein Nachfolger liegt ausserhalb des Gitters oder auf einer Wand.
            </li>
            <li>
              Rufen Sie <code>sample(s, "rechts")</code> 100&nbsp;000-mal auf
              und zählen Sie die Ergebnisse. Weichen die Anteile um mehr als 1 %
              von <code>transitions</code> ab? Dann stimmt etwas nicht.
            </li>
            <li>
              Bauen Sie absichtlich einen Fehler ein (z.&nbsp;B. auch rückwärts
              rutschen) und prüfen Sie, welche Ihrer Tests ihn fangen. Machen
              Sie ihn danach rückgängig.
            </li>
          </ol>
        </Aufgabe>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 2 — Monte-Carlo
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Teil 2" titel="Pläne bewerten mit Monte-Carlo">
          Simulieren, zählen, mitteln — und dann sehen, wie wenig ein einzelner
          Durchgang wert ist.
        </Teil>

        <Aufgabe nummer="4" titel="Einen Plan simulieren">
          <p>
            Schreiben Sie <code>src/simulate.js</code> mit zwei Funktionen.
          </p>
          <CodeBlock lang="javascript" filename="src/simulate.js">
            {`// Fuehrt EINEN Durchgang aus. Gibt { ergebnis, schritte } zurueck,
// ergebnis ist "ziel", "klippe" oder "unterwegs".
export function laufPlan(problem, plan) { /* TODO */ }

// Fuehrt n Durchgaenge aus und gibt die Statistik zurueck.
export function bewertePlan(problem, plan, n = 10000) { /* TODO */ }`}
          </CodeBlock>
          <ol>
            <li>
              Implementieren Sie beide. <code>bewertePlan</code> liefert
              Erfolgsquote, Klippenquote und die durchschnittliche Schrittzahl
              der erfolgreichen Durchgänge.
            </li>
            <li>
              Lassen Sie A<sup>*</sup> auf derselben Welt mit{" "}
              <Tex>{"p = 0"}</Tex> laufen und machen Sie aus dem Pfad einen Plan
              (eine Liste von Aktionen). Das ist der <strong>kurze Plan</strong>
              .
            </li>
            <li>
              Schreiben Sie von Hand einen <strong>sicheren Plan</strong>, der
              oben herum geht. Bewerten Sie beide bei{" "}
              <Tex>{"p \\in \\{0, 0.1, 0.2, 0.3, 0.4\\}"}</Tex>.
            </li>
            <li>
              Ab welchem <Tex>{"p"}</Tex> ist der sichere Plan besser? Finden
              Sie den Umschlagpunkt auf 0.01 genau.
            </li>
          </ol>
          <DataTable
            headers={[
              "p",
              "kurzer Plan: Erfolg / Klippe",
              "sicherer Plan: Erfolg / Klippe",
            ]}
            rows={[
              ["0.0", "…", "…"],
              ["0.1", "…", "…"],
              ["0.2", "…", "…"],
              ["0.3", "…", "…"],
              ["0.4", "…", "…"],
            ]}
            caption="Jede Zelle mit mindestens 10'000 Durchgängen."
          />
        </Aufgabe>

        <Aufgabe nummer="5" titel="Wie genau ist die Schätzung wirklich?">
          <ol>
            <li>
              Bewerten Sie denselben Plan mit <Tex>{"n = 10"}</Tex>,{" "}
              <Tex>{"100"}</Tex>, <Tex>{"1000"}</Tex>, <Tex>{"10^4"}</Tex>,{" "}
              <Tex>{"10^5"}</Tex> — und zwar <strong>je zehnmal</strong>.
            </li>
            <li>
              Notieren Sie für jedes <Tex>{"n"}</Tex> den kleinsten und den
              grössten der zehn Werte. Wie schrumpft die Spannweite?
            </li>
            <li>
              Zeichnen Sie Spannweite gegen <Tex>{"n"}</Tex> auf, mit{" "}
              <strong>logarithmischen</strong> Achsen. Was müsste man ablesen
              können, wenn <Tex>{"1/\\sqrt{n}"}</Tex> stimmt?
            </li>
            <li>
              Wie viele Durchgänge brauchen Sie, damit zwei Pläne mit 61 % und
              63 % sicher unterscheidbar sind? Begründen Sie mit Ihren Zahlen.
            </li>
          </ol>
        </Aufgabe>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 3 — MCTS
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Teil 3" titel="MCTS und die Strategie">
          Vier Phasen, vier Funktionen — und am Ende ein Pfeil in jedem Feld.
        </Teil>

        <Aufgabe nummer="6" titel="Die vier Phasen implementieren">
          <p>
            Schreiben Sie <code>src/mcts.js</code>. Halten Sie sich an die vier
            Phasen: eine Funktion pro Phase, nicht alles in einer Schleife.
          </p>
          <CodeBlock lang="javascript" filename="src/mcts.js">
            {`function neuerKnoten(state, parent = null, action = null) {
  return { state, parent, action, kinder: [], n: 0, w: 0, offen: null };
}

export function uct(kind, N, c) {
  if (kind.n === 0) return Infinity;
  // TODO: Ausbeutung + c * Erkundung
}

function selection(knoten, problem, c) { /* TODO */ }
function expansion(knoten, problem)    { /* TODO */ }
function simulation(state, problem, maxSchritte = 100) { /* TODO */ }
function backpropagation(knoten, belohnung) { /* TODO */ }

export function mcts(problem, state, { iterationen = 1000, c = 1.4, gamma = 0.95 } = {}) {
  const wurzel = neuerKnoten(state);
  for (let i = 0; i < iterationen; i++) {
    // TODO: die vier Phasen nacheinander
  }
  // TODO: beste Aktion zurueckgeben - nach Besuchszahl, nicht nach Mittelwert
}`}
          </CodeBlock>
          <Box art="tipp" titel="Prüfen Sie uct gegen Ihr Papier">
            <p>
              Implementieren Sie zuerst <code>uct</code> und rechnen Sie damit
              Ihre Handrechnung aus den{" "}
              <strong>Aufgaben 4 und 5 des Papier-Kapitels</strong> nach: acht
              Iterationen, zwei Aktionen, die Ergebnisliste{" "}
              <code>1, 0, 0, 1, 1, 0, 0, 1</code>. Am Ende muss{" "}
              <code>rechts</code> bei <code>6 / 4</code> und <code>links</code>{" "}
              bei <code>2 / 0</code> stehen. Stimmt das nicht, ist Ihr{" "}
              <code>uct</code> falsch — und zwar bevor Sie überhaupt mit der
              Gitterwelt anfangen.
            </p>
          </Box>
          <ol>
            <li>
              Implementieren Sie <code>uct</code> und prüfen Sie es wie oben
              beschrieben.
            </li>
            <li>
              Achtung beim Zufall: Unter <em>einer</em> Aktion können{" "}
              <em>mehrere</em> Kinder hängen (eines pro möglichem Ausgang).
              Überlegen Sie, wie Sie in <code>selection</code> erst die Aktion
              per <code>UCT</code> wählen und dann den Ausgang per{" "}
              <code>sample</code> würfeln.
            </li>
            <li>
              Belohnen Sie ein Rollout mit{" "}
              <Tex>{"\\gamma^{\\text{Schritte}}"}</Tex> bei Zielerreichung und{" "}
              <Tex>{"0"}</Tex> bei Absturz. Warum entsteht dadurch der
              Zielkonflikt «schnell gegen sicher» von selbst?
            </li>
            <li>
              Messen Sie, wie oft ein rein zufälliges Rollout das Ziel erreicht.
              Bauen Sie dann ein <em>heavy playout</em> ein: mit 50 %
              Wahrscheinlichkeit grob Richtung Ziel. Messen Sie erneut und
              vergleichen Sie die Qualität der MCTS-Entscheidungen.
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe nummer="7" titel="Die Strategie berechnen">
          <p>
            Jetzt der Schritt vom Plan zur Strategie. Schreiben Sie{" "}
            <code>policy.js</code>.
          </p>
          <ol>
            <li>
              Rufen Sie MCTS für <strong>jedes</strong> begehbare Feld auf und
              speichern Sie die beste Aktion in einer Tabelle{" "}
              <Tex>{"\\pi(s)"}</Tex>.
            </li>
            <li>
              Geben Sie <Tex>{"\\pi"}</Tex> als Pfeilbild auf der Konsole aus (
              <code>↑ → ↓ ←</code>).
            </li>
            <li>
              Berechnen Sie <Tex>{"\\pi"}</Tex> für <Tex>{"p = 0"}</Tex>,{" "}
              <Tex>{"0.2"}</Tex> und <Tex>{"0.4"}</Tex>. Drucken Sie alle drei
              Bilder in <code>antworten.md</code> ab und beschreiben Sie den
              Unterschied.
            </li>
            <li>
              Lassen Sie die Strategie laufen — nach jedem Schritt neu
              nachschauen, nicht blind ausführen — und bewerten Sie sie mit
              10&nbsp;000 Durchgängen. Vergleichen Sie mit den beiden Plänen aus
              Aufgabe 4.
            </li>
            <li>
              Bei <Tex>{"p = 0.4"}</Tex> zeigen einzelne Pfeile gegen eine Wand
              oder im Kreis. Zeigen Sie, dass das <em>kein</em> Bug ist:
              Berechnen Sie <Tex>{"\\pi"}</Tex> dreimal mit demselben{" "}
              <Tex>{"p"}</Tex> und vergleichen Sie, welche Felder wackeln.
              Erhöhen Sie dann die Iterationen und messen Sie erneut.
            </li>
          </ol>
          <DataTable
            headers={[
              "Verfahren",
              "Erfolgsquote",
              "Ø Schritte",
              "Klippenquote",
            ]}
            rows={[
              ["kurzer Plan (A*)", "…", "…", "…"],
              ["sicherer Plan", "…", "…", "…"],
              ["MCTS-Strategie", "…", "…", "…"],
            ]}
            caption="Alle drei bei p = 0.3, je 10'000 Durchgänge."
          />
        </Aufgabe>

        <Aufgabe nummer="8" titel="Auswertung">
          <ol>
            <li>
              Holen Sie Ihr Vorhersage-Blatt (Aufgabe 9 im Papier-Kapitel)
              hervor. Welche Vermutungen haben sich bestätigt, welche nicht?
              Schreiben Sie zu jeder falschen Vermutung einen Satz, warum Sie
              danebenlagen.
            </li>
            <li>
              Variieren Sie <Tex>{"c"}</Tex> in{" "}
              <Tex>{"\\{0, 0.5, 1.4, 5\\}"}</Tex> und messen Sie die
              Erfolgsquote der resultierenden Strategie. Wo liegt das Optimum?
            </li>
            <li>
              Wie viele Iterationen pro Feld braucht es, bis die Strategie
              stabil ist? Messen Sie, statt zu raten.
            </li>
            <li>
              Vergleichen Sie die Rechenzeit: A<sup>*</sup> für einen Plan gegen
              MCTS für die ganze Strategie. Was kostet die Robustheit?
            </li>
          </ol>
        </Aufgabe>
      </Section>

      {/* ══════════════════════════════════════════════════════
          ZUSATZ
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Zusatz" titel="Für Schnelle">
          Freiwillig — aber beides lohnt sich.
        </Teil>

        <Aufgabe nummer="9" titel="Eine eigene Welt" bonus tag="freiwillig">
          <ol>
            <li>
              Bauen Sie eine zweite Welt mit Wänden, einem Engpass und zwei
              Wegen: einem kurzen riskanten und einem langen sicheren.
            </li>
            <li>
              Sagen Sie <em>vorher</em> voraus, ab welchem <Tex>{"p"}</Tex> die
              Strategie den Weg wechselt. Messen Sie dann nach.
            </li>
            <li>
              Ergänzen Sie eine dritte Aktion <code>warten</code> (ohne
              Rutschen, aber mit Schrittkosten). Benutzt die Strategie sie
              jemals? Unter welchen Belohnungen schon?
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe
          nummer="10"
          titel="Exakt statt gewürfelt"
          bonus
          tag="freiwillig"
        >
          <p>
            Unsere Welt ist klein genug, dass man die <em>optimale</em>{" "}
            Strategie exakt ausrechnen kann — ohne jeden Zufall. Damit haben Sie
            einen <strong>Goldstandard</strong>, gegen den Sie Ihre gewürfelte
            Strategie halten können.
          </p>
          <ol>
            <li>
              Implementieren Sie <strong>Value Iteration</strong>: Setzen Sie{" "}
              <Tex>{"V(s) = 0"}</Tex> für alle Felder und wiederholen Sie{" "}
              <Tex>
                {
                  "V(s) \\leftarrow \\max_a \\sum_{s'} P(s' \\mid s,a)\\,[r + \\gamma V(s')]"
                }
              </Tex>
              , bis sich nichts mehr ändert.
            </li>
            <li>
              Vergleichen Sie Feld für Feld mit Ihrer MCTS-Strategie. Bei wie
              vielen Feldern stimmen sie überein?
            </li>
            <li>
              Wenn Value Iteration exakt ist — warum benutzt man dann überhaupt
              MCTS? Antworten Sie mit einer Zahl: Wie viele Zustände hätte ein
              Go-Brett?
            </li>
          </ol>
        </Aufgabe>
      </Section>

      <Section>
        <Abgabe>
          <ul>
            <li>
              Ihr Repo mit <code>src/problems/slippery-grid.js</code>,{" "}
              <code>src/simulate.js</code>, <code>src/mcts.js</code>,{" "}
              <code>policy.js</code> und <code>test-grid.js</code>.
            </li>
            <li>
              <code>antworten.md</code> mit allen Tabellen, den drei
              Pfeilbildern und den schriftlichen Antworten zu den Aufgaben 1, 5,
              7 und 8.
            </li>
            <li>
              <code>ki-protokoll.md</code> mit Ihren Aufträgen an den Junior und
              — besonders wichtig — <strong>wie Sie geprüft haben</strong>, dass
              der Zufallscode stimmt.
            </li>
          </ul>
          <p>
            Teil 1 und 2 schaffen Sie in der ersten Lektion, Teil 3 in der
            zweiten. Der Zusatz ist freiwillig.
          </p>
        </Abgabe>
      </Section>
    </>
  );
}
