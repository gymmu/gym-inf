import { Math as Tex } from "@components/Katex.jsx";
import LearningGoals from "@components/LearningGoals";
import GridMCTS from "@components/probabilistic/GridMCTS";
import SlipperyGridWorld from "@components/probabilistic/SlipperyGridWorld";
import StateSpaceGraph from "@components/probabilistic/StateSpaceGraph";
import ScrollSection from "@components/ScrollSection";

export default function KIProbabilistischesPlanen() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Planen im Ungewissen</h1>
        <h2>Probabilistisches Planen und Monte-Carlo-Simulation</h2>
        <p>Wenn der kürzeste Weg nicht mehr der beste ist</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Einstieg
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Bisher war die Welt berechenbar</h2>
          <p>
            In den letzten Wochen galt eine stille Annahme: Wenn der Algorithmus
            sagt «fahre nach Norden», dann fährt der Roboter nach Norden. Eine
            Aktion hatte genau <strong>ein</strong> Ergebnis. Deshalb konnten
            wir einen Plan einmal berechnen und blind ausführen.
          </p>
          <p>Die echte Welt hält sich nicht daran:</p>
          <ul>
            <li>Der Roboter rutscht auf nassem Boden weg.</li>
            <li>Die Strasse ist plötzlich gesperrt, der Zug hat Verspätung.</li>
            <li>Der Sensor misst 2.3 m, obwohl es 2.1 m sind.</li>
            <li>Der Gegner im Spiel macht etwas Unerwartetes.</li>
          </ul>
          <blockquote>
            Sobald eine Aktion mehrere mögliche Ergebnisse hat, gibt es keinen
            «richtigen Weg» mehr — nur noch <em>Wahrscheinlichkeiten</em>.
          </blockquote>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Modell
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Das Modell: Zustand, Aktion, Übergangswahrscheinlichkeit</h2>
          <p>
            Wir behalten unser Vokabular aus der Graphensuche und erweitern es
            um eine einzige Zahl:
          </p>
          <ul>
            <li>
              <strong>Zustand</strong> <Tex>{"s"}</Tex> — wo bin ich?
            </li>
            <li>
              <strong>Aktion</strong> <Tex>{"a"}</Tex> — was versuche ich?
            </li>
            <li>
              <strong>Übergangswahrscheinlichkeit</strong>{" "}
              <Tex>{"P(s' \\mid s, a)"}</Tex> — wie wahrscheinlich lande ich in{" "}
              <Tex>{"s'"}</Tex>, wenn ich in <Tex>{"s"}</Tex> die Aktion{" "}
              <Tex>{"a"}</Tex> versuche?
            </li>
            <li>
              <strong>Belohnung / Kosten</strong> — was ist das Ergebnis wert?
            </li>
          </ul>
          <p>
            Ein Graph wird so zu einem{" "}
            <strong>Markow-Entscheidungsprozess</strong> (MDP). «Markow» heisst:
            Nur der aktuelle Zustand zählt, nicht wie man dorthin gekommen ist.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Plan vs. Strategie, erlebt
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Plan oder Strategie?</h2>
          <p>
            Auf dieselbe Unsicherheit gibt es zwei grundsätzlich verschiedene
            Antworten:
          </p>
          <ul>
            <li>
              <strong>Plan (offene Schleife)</strong> — eine feste Liste von
              Aktionen: «hoch, rechts, rechts, …». Wird stur abgearbeitet. Geht
              etwas schief, merkt es niemand.
            </li>
            <li>
              <strong>Strategie / Policy (geschlossene Schleife)</strong> — eine
              Vorschrift, die jedem Zustand eine Aktion zuordnet:{" "}
              <Tex>{"\\pi(s) = a"}</Tex>. Nach jedem Schritt wird geschaut, wo
              man wirklich ist, und neu entschieden.
            </li>
          </ul>
          <p>
            Probieren Sie beides im Widget aus. Stellen Sie zuerst{" "}
            <Tex>{"p = 0"}</Tex> ein — dann sind Plan und Strategie noch
            ununterscheidbar. Schieben Sie <Tex>{"p"}</Tex> danach langsam nach
            oben.
          </p>
        </section>
      </ScrollSection>

      <SlipperyGridWorld />

      <ScrollSection>
        <section>
          <h2>Was Sie im Widget sehen sollten</h2>
          <p>
            <strong>Erstens:</strong> Der kurze Plan der Klippe entlang ist bei{" "}
            <Tex>{"p = 0"}</Tex> optimal — und bricht zusammen, sobald es
            rutschig wird. Der kürzeste Weg ist eben nicht der sicherste.
          </p>
          <p>
            <strong>Zweitens:</strong> Der sichere Plan ist länger, hält aber
            Abstand zum Risiko. Das ist der Preis der Sicherheit, gemessen in
            Schritten.
          </p>
          <p>
            <strong>Drittens:</strong> Die Strategie schlägt beide Pläne, weil
            sie nach jedem Rutscher korrigiert. Sie kostet dafür ständige
            Rückmeldung über den eigenen Zustand.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4b — Welche Probleme entstehen dadurch?
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Vier Probleme, die der Zufall mitbringt</h2>
          <p>
            Die Strategie gewinnt — nur: Woher nimmt man sie? Bevor wir sie
            berechnen können, müssen wir verstehen, was am probabilistischen
            Planen eigentlich schwierig ist. Vier Dinge gehen kaputt, die bei
            BFS, Dijkstra und A* selbstverständlich waren:
          </p>
          <ol>
            <li>
              <strong>
                Ein Plan hat kein Ergebnis mehr, sondern eine Verteilung.
              </strong>{" "}
              «Ist dieser Plan gut?» ist keine Ja/Nein-Frage mehr. Die Antwort
              lautet: «mit 61 % am Ziel, mit 34 % in der Klippe, mit 5 % noch
              irgendwo unterwegs».
            </li>
            <li>
              <strong>Der kürzeste Weg ist nicht mehr der beste.</strong> Länge
              und Risiko ziehen in verschiedene Richtungen. Es gibt kein
              «optimal» mehr, solange man nicht sagt, wie teuer ein Absturz im
              Vergleich zu einem Umweg ist.
            </li>
            <li>
              <strong>Pläne werden gar nie fertig.</strong> Jeder Rutscher
              kostet einen Schritt. Ein Plan mit 9 Aktionen schafft die 9
              nötigen Felder nur, wenn nichts schiefgeht. Und egal wie viele
              Aktionen man anhängt: Es gibt <em>keine</em> Planlänge, die
              Ankunft garantiert.
            </li>
            <li>
              <strong>Der Suchraum explodiert doppelt.</strong> Vorher
              verzweigte die Suche nur über die Aktionen. Jetzt verzweigt sie
              zusätzlich über die Ausgänge jeder Aktion — aus 4 Möglichkeiten
              pro Schritt werden <Tex>{"4 \\cdot 3 = 12"}</Tex>.
            </li>
          </ol>
          <p>
            Die Punkte 3 und 4 sind der eigentliche Grund, warum wir die Technik
            wechseln müssen. Schauen wir sie uns direkt am Zustandsraum an.
          </p>
        </section>
      </ScrollSection>

      <StateSpaceGraph />

      <ScrollSection>
        <section>
          <h2>Was der Vergleich der beiden Reiter zeigt</h2>
          <p>
            Im Reiter <strong>«klassisch»</strong> ist der Zustandsraum des
            Plans eine <em>Kette</em>: Jede Aktion hat genau einen Nachfolger,
            also gibt es pro Schritt genau einen Zustand. Das ist ein
            deterministischer Automat, den man einfach ablaufen kann — und genau
            die Annahme hinter BFS, Dijkstra und A*. Der Plan <em>ist</em>{" "}
            bereits die Lösung.
          </p>
          <p>
            Im Reiter <strong>«probabilistisch»</strong> steht hinter derselben
            Aktion eine Verteilung <Tex>{"P(s' \\mid s, a)"}</Tex>. Aus einer
            Kante werden mehrere, und die Summe ihrer Wahrscheinlichkeiten ist{" "}
            <Tex>{"1"}</Tex>. Aus der Kette wird ein Baum: Derselbe Plan hat nun
            nicht mehr ein Ergebnis, sondern eine ganze{" "}
            <em>Verteilung über mögliche Verläufe</em>.
          </p>
          <p>
            Achten Sie auf die Zeile <strong>«noch unterwegs»</strong>. Sie ist
            der sichtbare Beweis für Problem 3: Ein grosser Teil der Verläufe
            ist nach dem letzten Planschritt <em>weder</em> am Ziel{" "}
            <em>noch</em> in der Klippe — der Plan ist zu Ende, der Roboter
            steht irgendwo. Hängen Sie Aktionen an, und die Zahl sinkt zwar,
            wird aber nie null. Man müsste beliebig tief suchen.
          </p>
          <p>
            Und jetzt zählen Sie die Knoten: Der Baum verbreitert sich pro
            Schritt um den Faktor 3, und das ist nur die Verzweigung{" "}
            <em>eines einzigen</em> Plans. Will man die <em>beste</em> Aktion
            wissen, kommen in jedem Zustand noch 4 Aktionen dazu. Eine Strategie
            für die grosse Welt zu suchen heisst, unter{" "}
            <Tex>{"4^{32} \\approx 1.8 \\cdot 10^{19}"}</Tex> möglichen
            Strategien die richtige zu finden. Vollständiges Durchrechnen fällt
            damit aus.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Monte-Carlo
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Wie bewertet man einen Plan, der nicht reproduzierbar ist?</h2>
          <p>
            Beim Dijkstra konnten wir einen Weg einfach ausrechnen: 42 Minuten,
            fertig. Jetzt liefert derselbe Plan bei jedem Durchgang ein anderes
            Ergebnis — einmal kommt der Roboter an, einmal liegt er in der
            Klippe. Ein einzelner Durchgang ist deshalb <em>kein</em> Beweis,
            weder für noch gegen den Plan.
          </p>
          <p>
            Exakt rechnen könnte man theoretisch: Man müsste alle möglichen
            Verläufe aufzählen und ihre Wahrscheinlichkeiten addieren. Der kurze
            Plan hat 9 Aktionen mit je 3 möglichen Ausgängen — das sind{" "}
            <Tex>{"3^9 = 19'683"}</Tex> Verläufe, und es wächst exponentiell mit
            der Planlänge.
          </p>
          <p>Deshalb der Trick der Monte-Carlo-Methode:</p>
          <ol>
            <li>Simuliere einen Durchgang mit Zufallszahlen.</li>
            <li>Notiere das Ergebnis (angekommen? wie viele Schritte?).</li>
            <li>Wiederhole das sehr oft.</li>
            <li>Nimm den Durchschnitt als Schätzung.</li>
          </ol>
          <p>
            Statt <em>Rechnen</em> also <em>Ausprobieren und Zählen</em>. Der
            Name stammt vom Casino in Monte Carlo; entwickelt wurde die Methode
            in den 1940er-Jahren von Stanisław Ulam und John von Neumann.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection>
        <section>
          <h2>
            Der Preis: Genauigkeit wächst nur mit <Tex>{"\\sqrt{n}"}</Tex>
          </h2>
          <p>
            Gehen Sie zum Gitterwelt-Widget zurück, drücken Sie mehrmals «+100»
            und beobachten Sie die Erfolgsquote. Am Anfang springt sie wild (40
            %, 55 %, 48 % …), nach ein paar tausend Durchgängen bewegt sie sich
            kaum mehr. Die Schätzung ist aber <strong>nie</strong> exakt — der
            typische Fehler sinkt nur mit <Tex>{"1/\\sqrt{n}"}</Tex>:
          </p>
          <ul>
            <li>100-mal mehr Durchgänge → nur 10-mal genauer</li>
            <li>eine zusätzliche Dezimalstelle kostet 100-mal mehr Rechnung</li>
          </ul>
          <p>
            Wichtig ist deshalb: Ein Unterschied von 61 % zu 63 % nach 50
            Durchgängen bedeutet gar nichts. Ein Unterschied von 61 % zu 94 %
            nach 5000 Durchgängen ist dagegen handfest.
          </p>
          <p>
            Dafür ist Monte-Carlo erstaunlich unempfindlich gegenüber
            Komplexität: Ob die Welt 32 Felder hat oder 5 Millionen Zustände,
            ein Durchgang bleibt ein Durchgang. Genau deshalb wird die Methode
            überall dort eingesetzt, wo exaktes Rechnen aussichtslos ist — von
            der Finanzwelt über die Physik bis zur Spiele-KI.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Ausblick
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Ausblick: von der Simulation zur Entscheidung</h2>
          <p>
            Bis jetzt haben wir einen fertigen Plan nur <em>bewertet</em>. Der
            nächste Schritt ist, die Simulation zum <em>Entscheiden</em> zu
            benutzen: Simuliere für jede mögliche Aktion viele Fortsetzungen und
            wähle die Aktion mit dem besten Durchschnitt.
          </p>
          <p>
            Damit schliesst sich der Kreis zur Strategie: Fragt man dieses
            Verfahren in <em>jedem</em> Zustand neu, erhält man für jedes Feld
            eine Aktion — also genau ein <Tex>{"\\pi(s)"}</Tex>. Niemand muss
            die Strategie mehr von Hand hinschreiben; sie wird{" "}
            <em>ausgewürfelt</em>.
          </p>
          <p>
            Genau das macht die <strong>Monte-Carlo-Baumsuche</strong> (MCTS),
            die hinter AlphaGo steckt. Sie verbindet unsere Baumsuche aus Woche
            7 mit den Zufallssimulationen von heute — und löst damit Spiele, in
            denen vollständige Suche unmöglich ist.
          </p>
          <p>
            Das Problem dabei: Simulieren kostet Zeit, und man hat nie genug
            davon für alle Züge. Also muss die Suche entscheiden, wo sie ihre
            Durchgänge investiert — bei dem Zug, der bisher am besten aussieht (
            <strong>Ausbeutung</strong>), oder bei dem, über den man noch fast
            nichts weiss (<strong>Erkundung</strong>). Die Formel{" "}
            <code>UCT</code> wägt genau das gegeneinander ab.
          </p>
          <p>Eine MCTS-Iteration besteht immer aus denselben vier Phasen:</p>
          <ol>
            <li>
              <strong>Selection</strong> — vom Start aus mit <code>UCT</code>{" "}
              durch die <em>bereits bekannten</em> Knoten absteigen.
            </li>
            <li>
              <strong>Expansion</strong> — einen einzigen neuen Knoten an den
              Baum hängen.
            </li>
            <li>
              <strong>Simulation (Rollout)</strong> — ab dort zufällig zu Ende
              spielen und das Ergebnis notieren.
            </li>
            <li>
              <strong>Backpropagation</strong> — das Ergebnis entlang des
              gewählten Pfades zurücktragen: <Tex>{"n"}</Tex> und{" "}
              <Tex>{"w"}</Tex> aktualisieren.
            </li>
          </ol>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6b — MCTS baut die Strategie
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zurück in die rutschige Welt</h2>
          <p>
            In einem gewöhnlichen Spielbaum hat jeder Zug genau einen
            Nachfolger. In unserer Welt ist das anders — und <em>das</em> ist
            der Punkt, an dem alles zusammenkommt. Der Suchbaum verzweigt hier
            zweifach:
          </p>
          <ul>
            <li>
              <strong>Entscheidung:</strong> 4 Aktionen, zwischen denen{" "}
              <code>UCT</code> wählt — das kontrollieren wir.
            </li>
            <li>
              <strong>Zufall:</strong> 3 mögliche Ausgänge pro Aktion, gezogen
              aus <Tex>{"P(s' \\mid s, a)"}</Tex> — das würfelt die Welt.
            </li>
          </ul>
          <p>
            Belohnt wird ein Rollout mit{" "}
            <Tex>{"\\gamma^{\\text{Schritte}}"}</Tex> (mit{" "}
            <Tex>{"\\gamma = 0.95"}</Tex>), wenn es das Ziel erreicht, und mit{" "}
            <Tex>{"0"}</Tex> bei einem Absturz. Dadurch ist ein kurzer Weg mehr
            wert als ein langer — aber ein Absturz kostet alles. Der
            Zielkonflikt «schnell gegen sicher» muss also nicht programmiert
            werden; er entsteht von selbst aus den Belohnungen.
          </p>
          <p>
            Ein praktisches Detail: Ein vollkommen zufälliger Roboter erreicht
            in dieser Welt das Ziel nur in etwa 1 % der Fälle — fast jedes
            Rollout liefert 0, und die Suche erfährt nichts. Darum bekommt der
            Zufallslauf eine simple Faustregel mit: Zu 50 % geht er grob
            Richtung Ziel. Echte MCTS-Programme machen genau dasselbe; man nennt
            solche Rollouts <em>heavy playouts</em>.
          </p>
          <p>
            Und jetzt der entscheidende Unterschied zu allem bisherigen: MCTS
            liefert <strong>keinen Plan</strong>. Es beantwortet für{" "}
            <em>einen</em> Zustand die Frage «welche Aktion ist hier die
            beste?». Macht man das für jedes Feld, hat man{" "}
            <Tex>{"\\pi(s)"}</Tex> — die Strategie aus dem ersten Widget, nur
            dass sie diesmal niemand von Hand hingeschrieben hat.
          </p>
        </section>
      </ScrollSection>

      <GridMCTS />

      <ScrollSection>
        <section>
          <h2>Was Sie hier ausprobieren sollten</h2>
          <p>
            <strong>Erstens — eine Iteration von Hand.</strong> Klicken Sie
            viermal auf den grün umrandeten Knopf. Er sagt jeweils, welche Phase
            er ausführt; danach steht in der Box, <em>was passiert ist</em>, und
            im Gitter sieht man es:
          </p>
          <ul>
            <li>
              <strong>Selection</strong> — orange Linie durch Felder, die im
              Baum <em>schon existieren</em>, nummeriert 0, 1, 2 … Es wird nur
              ausgewählt, der Baum wächst nicht.
            </li>
            <li>
              <strong>Expansion</strong> — ein einziges Feld bekommt einen
              violetten Rahmen und die Beschriftung «neu». <em>Das</em> ist der
              Unterschied: Hier entsteht ein Knoten, der vorher nicht da war.
            </li>
            <li>
              <strong>Simulation</strong> — ab diesem violetten Feld läuft die
              graue gestrichelte Linie zufällig weiter, bis{" "}
              <Tex>{"\\checkmark"}</Tex> (Ziel) oder <Tex>{"\\times"}</Tex>{" "}
              (Klippe). Kein einziges dieser Felder kommt in den Baum.
            </li>
            <li>
              <strong>Backpropagation</strong> — türkis steht{" "}
              <code>+Belohnung</code> neben genau den Knoten des orangen Pfades,
              deren <Tex>{"n"}</Tex> und <Tex>{"w"}</Tex> sich soeben geändert
              haben.
            </li>
          </ul>
          <p>
            <strong>Zweitens — der Explorationsfaktor.</strong> Die Tabelle
            unten im Widget zerlegt <code>UCT</code> in seine zwei Summanden.
            Setzen Sie <Tex>{"c = 0"}</Tex>: Der rechte Summand verschwindet,
            die Suche klammert sich an die Aktion, die zufällig zuerst gut lief.
            Setzen Sie <Tex>{"c = 2"}</Tex>: Der rechte Summand dominiert, alle
            vier Aktionen werden etwa gleich oft besucht — der Baum wird breit
            statt tief. Am Baum sieht man beides sofort an den Besuchszahlen.
          </p>
          <p>
            <strong>Drittens — der Zufall im Baum.</strong> Schauen Sie sich an,
            wie unter derselben Aktion mehrere Kinder hängen. Bei{" "}
            <Tex>{"p = 0"}</Tex> hat jede Aktion genau ein Kind (der Baum ist
            schlank), bei <Tex>{"p = 0.4"}</Tex> sind es bis zu drei — das ist
            der Blowup von vorhin, jetzt mitten in der Suche.
          </p>
          <p>
            <strong>Viertens — Feld wechseln.</strong> Starten Sie die Suche auf
            einem Feld direkt über der Klippe und auf einem Feld in der obersten
            Zeile. Vergleichen Sie, welche Aktion gewinnt: über der Klippe wird
            MCTS bei hohem <Tex>{"p"}</Tex> lieber nach oben ausweichen, oben
            dagegen einfach nach rechts marschieren.
          </p>
          <p>
            <strong>Fünftens — die Strategie.</strong> Drücken Sie «Strategie
            für alle Felder berechnen». Jetzt steht in jedem Feld ein Pfeil: das
            Ergebnis von 1500 Simulationen pro Feld. Stellen Sie{" "}
            <Tex>{"p"}</Tex> auf 0 und berechnen Sie neu — die Pfeile führen
            plötzlich direkt der Klippe entlang. Dieselbe Welt, dieselbe Suche,
            ein anderes <Tex>{"p"}</Tex>: eine andere Strategie.
          </p>
          <p>
            <strong>Sechstens — wo es kippt.</strong> Bei <Tex>{"p = 0.4"}</Tex>{" "}
            werden einzelne Pfeile wirr: Sie zeigen gegen eine Wand oder im
            Kreis. Das ist kein Programmierfehler, sondern{" "}
            <Tex>{"1/\\sqrt{n}"}</Tex> in Aktion. Wenn alle Aktionen fast gleich
            schlecht sind, braucht die Schätzung sehr viele Durchgänge, um den
            winzigen Unterschied überhaupt zu sehen.
          </p>
          <blockquote>
            Die Strategie wurde nicht hergeleitet, sondern <em>ausgewürfelt</em>{" "}
            — und sie ist trotzdem gut. Das ist der Kern der
            Monte-Carlo-Baumsuche.
          </blockquote>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Lernziele
          ══════════════════════════════════════════════════════ */}
      <LearningGoals>
        <ul>
          <li>
            Ich kann erklären, warum deterministische Suche in einer unsicheren
            Welt nicht mehr genügt.
          </li>
          <li>
            Ich kann die Begriffe Zustand, Aktion, Übergangswahrscheinlichkeit
            und Belohnung an einem Beispiel erklären.
          </li>
          <li>
            Ich kann den Unterschied zwischen einem Plan und einer Strategie
            (Policy) beschreiben und sagen, wann welcher Ansatz passt.
          </li>
          <li>
            Ich kann die vier Schritte einer Monte-Carlo-Simulation aufzählen
            und am Beispiel des rutschigen Roboters anwenden.
          </li>
          <li>
            Ich kann begründen, warum mehr Durchgänge die Schätzung verbessern,
            aber nur mit <Tex>{"1/\\sqrt{n}"}</Tex>.
          </li>
          <li>
            Ich kann eine einfache Monte-Carlo-Simulation (rutschiger Roboter)
            in JavaScript schreiben und das Ergebnis interpretieren.
          </li>
          <li>
            Ich kann die vier Phasen der Monte-Carlo-Baumsuche (Selection,
            Expansion, Simulation, Backpropagation) benennen und am Suchbaum
            zeigen.
          </li>
          <li>
            Ich kann erklären, was Ausbeutung und Erkundung bedeuten und wie
            <code>UCT</code> beides ausbalanciert.
          </li>
        </ul>
      </LearningGoals>
    </>
  );
}
