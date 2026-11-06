import LearningGoals from "@components/LearningGoals";
import MCTSTree from "@components/mcts/MCTSTree";
import SlipperyGridWorld from "@components/probabilistic/SlipperyGridWorld";
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
              <strong>Zustand</strong> <code>s</code> — wo bin ich?
            </li>
            <li>
              <strong>Aktion</strong> <code>a</code> — was versuche ich?
            </li>
            <li>
              <strong>Übergangswahrscheinlichkeit</strong>{" "}
              <code>P(s&apos; | s, a)</code> — wie wahrscheinlich lande ich in
              <code>s&apos;</code>, wenn ich in <code>s</code> die Aktion{" "}
              <code>a</code> versuche?
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
          SECTION 4 — Plan vs. Strategie
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Plan oder Strategie?</h2>
          <p>Es gibt zwei grundsätzlich verschiedene Antworten:</p>
          <ul>
            <li>
              <strong>Plan (offene Schleife)</strong> — eine feste Liste von
              Aktionen: «hoch, rechts, rechts, …». Wird stur abgearbeitet. Geht
              etwas schief, merkt es niemand.
            </li>
            <li>
              <strong>Strategie / Policy (geschlossene Schleife)</strong> — eine
              Vorschrift, die jedem Zustand eine Aktion zuordnet:{" "}
              <code>π(s) = a</code>. Nach jedem Schritt wird geschaut, wo man
              wirklich ist, und neu entschieden.
            </li>
          </ul>
          <p>
            Je unsicherer die Welt, desto wertloser der Plan und desto wichtiger
            die Strategie. Ein Navi macht genau das: Es berechnet nicht einmal
            eine Route, sondern plant bei jeder Abweichung neu.
          </p>
        </section>
      </ScrollSection>

      <SlipperyGridWorld />

      <ScrollSection>
        <section>
          <h2>Was Sie im Widget sehen sollten</h2>
          <p>
            <strong>Erstens:</strong> Der kurze Plan der Klippe entlang ist bei{" "}
            <code>p = 0</code> optimal — und bricht zusammen, sobald es rutschig
            wird. Der kürzeste Weg ist eben nicht der sicherste.
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
            Plan hat 9 Aktionen mit je 3 möglichen Ausgängen — das sind schon
            rund 20&apos;000 Verläufe, und es wächst exponentiell mit der
            Planlänge.
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

      <SlipperyGridWorld title="Monte-Carlo: dieselbe Welt, jetzt als Statistik" />

      <ScrollSection>
        <section>
          <h2>Der Preis: Genauigkeit wächst nur mit √n</h2>
          <p>
            Drücken Sie oben mehrmals «+100» und beobachten Sie die
            Erfolgsquote. Am Anfang springt sie wild (40 %, 55 %, 48 % …), nach
            ein paar tausend Durchgängen bewegt sie sich kaum mehr. Die
            Schätzung ist aber <strong>nie</strong> exakt — der typische Fehler
            sinkt nur mit <code>1/√n</code>:
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
        </section>
      </ScrollSection>

      <MCTSTree title="Monte-Carlo-Baumsuche: eine Phase nach der anderen" />

      <ScrollSection>
        <section>
          <h2>Was Sie im MCTS-Widget sehen sollten</h2>
          <p>
            <strong>Erstens:</strong> MCTS baut den Baum <em>ungleichmässig</em>
            . Aussichtsreiche Züge werden tief und oft untersucht, schlechte
            Äste bleiben dünn. Genau deshalb kommt die Methode mit riesigen
            Spielbäumen zurecht.
          </p>
          <p>
            <strong>Zweitens:</strong> Ein einzelnes Rollout sagt fast nichts —
            erst die Summe vieler Durchgänge macht die Schätzung stabil. Das ist
            dasselbe <code>1/√n</code> wie beim rutschigen Roboter.
          </p>
          <p>
            <strong>Drittens:</strong> Stellen Sie den Explorationsfaktor auf{" "}
            <code>c = 0</code> und drücken Sie «100 Iterationen». Die Suche
            klammert sich an den Zug, der zufällig zuerst gut lief, und findet
            den wirklich besten Zug womöglich nie. Mit grossem <code>c</code>{" "}
            werden dagegen alle Züge etwa gleich oft probiert — viel Aufwand für
            wenig Tiefe. Gute Werte liegen dazwischen.
          </p>
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
            aber nur mit <code>1/√n</code>.
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
