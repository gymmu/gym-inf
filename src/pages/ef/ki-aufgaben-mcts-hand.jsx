import {
  Abgabe,
  Aufgabe,
  Blattkopf,
  Box,
  Figur,
  Teil,
} from "@components/Aufgabenblatt/Aufgabenblatt";
import DataTable from "@components/DataTable/DataTable";
import { Math as Tex } from "@components/Katex.jsx";
import ValueTree, { ValueTreeReihe } from "@components/probabilistic/ValueTree";
import Section from "@components/Section";

export default function KIAufgabenMCTSHand() {
  return (
    <>
      <Section>
        <Blattkopf
          kicker="Woche 10 · Papier"
          titel="Aufgaben: Planen im Ungewissen — von Hand"
          meta={[
            { label: "Material", value: "Papier, Bleistift, Würfel" },
            { label: "Umfang", value: "zwei Lektionen" },
            { label: "Abgabe", value: "Ihre Blätter, siehe unten" },
          ]}
        >
          <p>
            In diesem Kapitel arbeiten Sie <strong>ohne Computer</strong>. Sie
            würfeln, zählen, rechnen Mittelwerte aus, führen eine
            Monte-Carlo-Baumsuche von Hand durch und schreiben am Ende eine{" "}
            <strong>Strategie</strong> auf.
          </p>
          <p>
            Es geht <em>nicht</em> um Rechenakrobatik. Sie sollen einmal selbst
            erlebt haben, wie aus lauter Zufallsdurchgängen eine Entscheidung
            wird — und wie man das Ergebnis als Strategie <Tex>{"\\pi(s)"}</Tex>{" "}
            hinschreibt.
          </p>
        </Blattkopf>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 0 — Das Beispiel mit Lösung
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Teil 0" titel="Ein winziges Beispiel, komplett vorgelöst">
          Lesen Sie diesen Teil zuerst in Ruhe durch. Er ist keine Aufgabe,
          sondern die Vorlage für alles, was danach kommt.
        </Teil>

        <h3>Die Welt: der rutschige Flur</h3>
        <p>
          Vier Felder in einer Reihe. Der Roboter startet auf <code>B</code>.
          Links liegt ein <strong>Loch</strong>, rechts das{" "}
          <strong>Ziel</strong>.
        </p>
        <Figur caption="Der rutschige Flur. L und Z sind Endzustände — dort ist der Durchgang vorbei.">
          {`  L       A       B       Z
 Loch                    Ziel

   \u2190 links          rechts \u2192`}
        </Figur>
        <ul>
          <li>
            Aktionen: <code>links</code> und <code>rechts</code>.
          </li>
          <li>
            Die Aktion klappt mit Wahrscheinlichkeit <Tex>{"0.8"}</Tex>. Mit{" "}
            <Tex>{"0.2"}</Tex> rutscht der Roboter in die <em>Gegenrichtung</em>
            .
          </li>
          <li>Wer gegen eine Wand läuft, bleibt stehen.</li>
          <li>
            Belohnung: <Tex>{"+1"}</Tex> für <code>Z</code>, <Tex>{"0"}</Tex>{" "}
            für <code>L</code>.
          </li>
        </ul>

        <h3>Wie gut ist eine Aktion? Durchschnitt statt Rechnung</h3>
        <p>
          Wir wollen für jedes Feld wissen, welche Aktion die bessere ist. Statt
          das auszurechnen, <strong>probieren wir es aus</strong> — genau wie
          MCTS es später tut.
        </p>
        <Box art="regel" titel="Ein Durchgang (Rollout)">
          <ol>
            <li>Im Feld starten und die Aktion ausführen, die geprüft wird.</li>
            <li>
              Danach einfach weiterlaufen, bis <code>Z</code> oder{" "}
              <code>L</code> erreicht ist. (Wir laufen hier stur weiter in
              dieselbe Richtung.)
            </li>
            <li>
              Ergebnis notieren: <Tex>{"1"}</Tex>, wenn der Durchgang im Ziel
              endet, sonst <Tex>{"0"}</Tex>.
            </li>
          </ol>
        </Box>
        <p>
          Ein einzelner Durchgang sagt nichts — er ist entweder 1 oder 0. Also
          wiederholen wir ihn. Für jede Aktion zählen wir mit: <Tex>{"n"}</Tex>{" "}
          = Anzahl Durchgänge, <Tex>{"w"}</Tex> = davon im Ziel gelandet.
        </p>
        <Box art="regel" titel="Die ganze Idee in einer Zeile">
          <p style={{ textAlign: "center" }}>
            <Tex>{"\\text{Wert einer Aktion} \\;\\approx\\; \\frac{w}{n}"}</Tex>
          </p>
          <p>
            Mehr steckt nicht dahinter. Keine Gleichungen, kein Auflösen —
            zählen und teilen.
          </p>
        </Box>

        <p>
          Hier das Ergebnis von je <strong>20 Durchgängen</strong> pro Aktion,
          für beide Felder nebeneinander. Die Kante trägt jetzt keine
          Wahrscheinlichkeit, sondern die <em>Anzahl</em>:
        </p>

        <ValueTreeReihe>
          <ValueTree
            zustand="B"
            aktionen={[
              {
                name: "rechts",
                best: true,
                formel: "19 / 20 = 0.95",
                marke: "← bester Durchschnitt",
                ergebnisse: [
                  { label: "✓", p: "19×", wert: "im Ziel", art: "ziel" },
                  { label: "✗", p: "1×", wert: "im Loch", art: "loch" },
                ],
              },
              {
                name: "links",
                formel: "16 / 20 = 0.80",
                ergebnisse: [
                  { label: "✓", p: "16×", wert: "im Ziel", art: "ziel" },
                  { label: "✗", p: "4×", wert: "im Loch", art: "loch" },
                ],
              },
            ]}
            caption="Feld B: knapp. 0.95 gegen 0.80 — bei nur 20 Durchgängen ist das noch kein sicherer Unterschied."
          />
          <ValueTree
            zustand="A"
            aktionen={[
              {
                name: "rechts",
                best: true,
                formel: "15 / 20 = 0.75",
                marke: "← bester Durchschnitt",
                ergebnisse: [
                  { label: "✓", p: "15×", wert: "im Ziel", art: "ziel" },
                  { label: "✗", p: "5×", wert: "im Loch", art: "loch" },
                ],
              },
              {
                name: "links",
                formel: "4 / 20 = 0.20",
                ergebnisse: [
                  { label: "✓", p: "4×", wert: "im Ziel", art: "ziel" },
                  { label: "✗", p: "16×", wert: "im Loch", art: "loch" },
                ],
              },
            ]}
            caption="Feld A: eindeutig. Wer hier nach links geht, fällt meistens ins Loch."
          />
        </ValueTreeReihe>

        <Box art="achtung" titel="Zwei Dinge, die Sie hier schon sehen">
          <ol>
            <li>
              Die Zahlen sind <strong>Schätzungen</strong>. Mit anderen Würfeln
              käme bei <code>B</code> vielleicht 18/20 und 17/20 heraus — dann
              wäre die Reihenfolge plötzlich fraglich. Bei <code>A</code> kippt
              dagegen nichts.
            </li>
            <li>
              Wo es knapp ist, braucht man <em>mehr</em> Durchgänge. Genau diese
              Entscheidung — wo investiere ich meine Durchgänge? — trifft{" "}
              <code>UCT</code> in Teil 2.
            </li>
          </ol>
        </Box>
        <p>
          Zur Kontrolle: Exakt ausgerechnet wären die Werte{" "}
          <Tex>{"V(B) = 0.952"}</Tex> und <Tex>{"V(A) = 0.762"}</Tex>. Unsere 20
          Durchgänge liegen also schon erstaunlich nahe dran — ganz ohne
          Rechnung.
        </p>
        <h3>So schreibt man eine Strategie auf</h3>
        <p>
          Eine <strong>Strategie</strong> (Policy) <Tex>{"\\pi"}</Tex> ordnet{" "}
          <em>jedem</em> Zustand genau eine Aktion zu. Es gibt drei übliche
          Schreibweisen. Alle drei sind korrekt, Sie dürfen wählen — solange
          klar ist, was in <em>jedem</em> Zustand passiert.
        </p>

        <Box
          art="loesung"
          titel="1 · Als Tabelle (immer erlaubt, am sichersten)"
        >
          <DataTable
            headers={["Zustand s", "π(s)", "geschätzter Wert w/n"]}
            rows={[
              ["A", "rechts", "15/20 = 0.75"],
              ["B", "rechts", "19/20 = 0.95"],
              ["L", "— (Endzustand)", "0"],
              ["Z", "— (Endzustand)", "1"],
            ]}
            caption="Endzustände bekommen keine Aktion — dort ist der Durchgang vorbei."
          />
        </Box>

        <Box art="loesung" titel="2 · Als Bild — ein Pfeil pro Feld">
          <Figur>{`  L       A       B       Z
  \u2715       \u2192       \u2192       \u2713`}</Figur>
        </Box>

        <Box art="loesung" titel="3 · Als Regel in Worten">
          <p>
            <Tex>{"\\pi(s) = \\texttt{rechts}"}</Tex> für alle Felder ausser den
            Endzuständen. Anders gesagt: immer Richtung Ziel, egal wie nahe das
            Loch ist.
          </p>
          <p>
            Diese Form geht nur, wenn die Strategie ein erkennbares Muster hat.
            Im Zweifel nehmen Sie die Tabelle.
          </p>
        </Box>

        <Box art="regel" titel="Plan oder Strategie?">
          <p>
            Ein <strong>Plan</strong> wäre die Liste «rechts, rechts» — fertig,
            egal was passiert. Die <strong>Strategie</strong> schaut nach jedem
            Schritt neu nach, wo der Roboter wirklich steht, und entscheidet
            dann. Genau dieser Unterschied ist der Grund, warum die Strategie
            gewinnt.
          </p>
        </Box>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 1 — Selber würfeln
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil
          nummer="Teil 1"
          titel="Selber würfeln: die Zahlen aus Teil 0 nachprüfen"
        >
          In Teil 0 standen die Zahlen einfach da. Jetzt erzeugen Sie sie selbst
          — und sehen dabei, wie wackelig so eine Schätzung ist.
        </Teil>

        <Box art="regel" titel="Würfelregel (gilt für den ganzen Teil 1)">
          <p>
            Würfeln Sie für <em>jeden Schritt</em>: <strong>1–5</strong> = die
            Aktion klappt, <strong>6</strong> = der Roboter rutscht in die
            Gegenrichtung. Danach läuft der Durchgang stur in dieselbe Richtung
            weiter, bis <code>Z</code> oder <code>L</code> erreicht ist.
          </p>
        </Box>

        <Aufgabe nummer="1" titel="Zehn Durchgänge für Feld A">
          <p>
            Prüfen Sie die linke Hälfte des Baums von Feld <code>A</code> nach:
            zehn Durchgänge für <code>rechts</code>, zehn für <code>links</code>
            .
          </p>
          <ol>
            <li>
              Notieren Sie pro Durchgang die Würfelzahlen und das Ergebnis (
              <Tex>{"1"}</Tex> = im Ziel, <Tex>{"0"}</Tex> = im Loch).
            </li>
            <li>
              Füllen Sie die Tabelle aus und rechnen Sie <Tex>{"w/n"}</Tex> für
              beide Aktionen aus.
            </li>
            <li>
              Zeichnen Sie Ihr Ergebnis als Baum — genau wie in Teil 0, mit den
              Anzahlen an den Kanten.
            </li>
            <li>
              Welche Aktion ist nach Ihren Zahlen besser? Stimmt das mit Teil 0
              überein?
            </li>
          </ol>
          <DataTable
            headers={[
              "Aktion",
              "Ergebnisse der 10 Durchgänge",
              "w",
              "n",
              "w/n",
            ]}
            rows={[
              ["rechts", "…", "…", "10", "…"],
              ["links", "…", "…", "10", "…"],
            ]}
            caption="Teil 0 kam auf 0.75 und 0.20 — bei Ihnen werden andere Zahlen herauskommen."
          />
        </Aufgabe>

        <Aufgabe nummer="2" titel="Wie verlässlich ist Ihre Zahl?">
          <ol>
            <li>
              Vergleichen Sie Ihre beiden Werte mit denen Ihrer Nachbarin. Wie
              weit liegen die Schätzungen für <em>dieselbe</em> Aktion
              auseinander?
            </li>
            <li>
              Legen Sie Ihre Zahlen mit denen von vier Mitschülerinnen zusammen:
              Jetzt haben Sie <Tex>{"n = 50"}</Tex>. Rechnen Sie{" "}
              <Tex>{"w/n"}</Tex> neu. Liegt dieser Wert näher an{" "}
              <Tex>{"0.75"}</Tex> beziehungsweise <Tex>{"0.20"}</Tex>?
            </li>
            <li>
              Bei welcher der beiden Aktionen war die Entscheidung schon nach
              zehn Durchgängen klar, bei welcher nicht? Woran liegt das?
            </li>
            <li>
              Wie viele Durchgänge bräuchte man wohl, um <code>0.75</code> von{" "}
              <code>0.80</code> zu unterscheiden? Schätzen Sie — begründen Sie
              Ihre Schätzung in einem Satz.
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe nummer="3" titel="Plan gegen Strategie">
          <p>
            Jetzt der Vergleich aus der Theorie. Ein <strong>Plan</strong> ist
            eine feste Liste: <code>[rechts, rechts]</code> ab <code>A</code>,
            stur ausgeführt, danach ist Schluss — auch wenn der Roboter noch
            nicht am Ziel ist.
          </p>
          <ol>
            <li>
              Würfeln Sie zehn Durchgänge mit diesem Plan. Wie oft endet er im
              Ziel, wie oft im Loch, wie oft <em>irgendwo dazwischen</em>?
            </li>
            <li>
              Die Strategie aus Teil 0 schafft es in rund 75 % der Fälle. Warum
              schneidet der Plan schlechter ab? Ein Satz genügt.
            </li>
            <li>
              Hilft es, den Plan auf <code>[rechts, rechts, rechts]</code> zu
              verlängern? Und auf zehn Aktionen? Gibt es eine Länge, die Ankunft{" "}
              <em>garantiert</em>?
            </li>
            <li>
              Zeichnen Sie für den Plan <code>[rechts, rechts]</code> den Baum
              aller möglichen Verläufe mit den echten Wahrscheinlichkeiten{" "}
              <Tex>{"0.8"}</Tex> und <Tex>{"0.2"}</Tex>. Wie viele Blätter hat
              er? Wie viele hätte er bei zehn Aktionen?
            </li>
          </ol>
          <DataTable
            headers={["Ergebnis", "Strichliste", "Anzahl", "Anteil"]}
            rows={[
              ["Ziel Z", "…", "…", "…"],
              ["Loch L", "…", "…", "…"],
              ["noch unterwegs", "…", "…", "…"],
            ]}
            caption="Die Zeile «noch unterwegs» gibt es nur beim Plan — eine Strategie hört nie einfach auf."
          />
        </Aufgabe>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 2 — MCTS von Hand
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Teil 2" titel="Monte-Carlo-Baumsuche von Hand">
          Bisher haben wir jeder Aktion gleich viele Durchgänge gegeben. MCTS
          macht es schlauer: Es verteilt die Durchgänge dorthin, wo sie am
          meisten bringen.
        </Teil>

        <Box art="regel" titel="Warum man überhaupt erkunden muss">
          <p>
            Stellen Sie sich zwei Pizzerien vor. In der einen waren Sie zehnmal,
            achtmal war es gut: <Tex>{"8/10 = 0.8"}</Tex>. In der anderen waren
            Sie <em>einmal</em>, und es war schlecht: <Tex>{"0/1 = 0"}</Tex>.
          </p>
          <p>
            Gehen Sie da nie wieder hin? Ein einziger Besuch sagt fast nichts —
            vielleicht hatten Sie bloss Pech. Genau das ist das Problem der
            Suche: Eine Aktion, die zufällig schlecht angefangen hat, darf nicht
            für immer durchfallen.
          </p>
          <p>
            Darum bekommt jede Aktion einen{" "}
            <strong>Bonus für Unsicherheit</strong>: Je seltener sie probiert
            wurde, desto grösser der Bonus. Wird sie öfter probiert, schrumpft
            er wieder — man weiss ja jetzt mehr.
          </p>
        </Box>

        <Box art="regel" titel="UCT = Durchschnitt + Bonus">
          <p style={{ textAlign: "center" }}>
            <Tex>
              {
                "\\underbrace{\\frac{w}{n}}_{\\text{wie gut lief es}} \\;+\\; c \\cdot \\underbrace{\\sqrt{\\frac{\\ln N}{n}}}_{\\text{wie wenig weiss ich}}"
              }
            </Tex>
          </p>
          <ul>
            <li>
              <Tex>{"n"}</Tex> — wie oft <em>diese</em> Aktion probiert wurde,{" "}
              <Tex>{"w"}</Tex> — wie oft sie dabei ins Ziel führte.
            </li>
            <li>
              <Tex>{"N"}</Tex> — wie viele Durchgänge es insgesamt schon gab.
            </li>
            <li>
              <Tex>{"c"}</Tex> — wie stark der Bonus zählt. Wir rechnen mit{" "}
              <Tex>{"c = 1"}</Tex>.
            </li>
          </ul>
          <p>
            Gewählt wird immer die Aktion mit dem <strong>grössten</strong>{" "}
            Gesamtwert. Eine noch nie probierte Aktion (<Tex>{"n = 0"}</Tex>)
            kommt immer zuerst dran.
          </p>
        </Box>

        <Box art="tipp" titel="Den Bonus müssen Sie nicht ausrechnen">
          <p>
            Der Bonus <Tex>{"\\sqrt{\\ln N / n}"}</Tex> steht fertig in dieser
            Tabelle. Zeile = <Tex>{"N"}</Tex> (Durchgänge insgesamt), Spalte ={" "}
            <Tex>{"n"}</Tex> (Durchgänge dieser Aktion). Ablesen, addieren,
            fertig.
          </p>
          <DataTable
            headers={["N ↓ / n →", "1", "2", "3", "4", "5"]}
            rows={[
              ["2", "0.83", "0.59", "0.48", "0.42", "0.37"],
              ["3", "1.05", "0.74", "0.61", "0.52", "0.47"],
              ["4", "1.18", "0.83", "0.68", "0.59", "0.53"],
              ["5", "1.27", "0.90", "0.73", "0.63", "0.57"],
              ["6", "1.34", "0.95", "0.77", "0.67", "0.60"],
              ["7", "1.40", "0.99", "0.81", "0.70", "0.62"],
              ["8", "1.44", "1.02", "0.83", "0.72", "0.64"],
            ]}
            caption="Lesebeispiel: 5 Durchgänge insgesamt, davon 4 für diese Aktion → Bonus 0.63."
          />
        </Box>

        <Aufgabe nummer="4" titel="Die ersten fünf Iterationen">
          <p>
            Wir suchen wieder im Feld <code>A</code>, mit den beiden Aktionen{" "}
            <code>rechts</code> und <code>links</code>. Damit alle dasselbe
            Ergebnis bekommen, sind die Durchgänge <strong>vorgegeben</strong> —
            Sie würfeln nicht, Sie lesen der Reihe nach ab:
          </p>
          <Figur caption="Ergebnis des 1., 2., 3., … Durchgangs. Wer den Durchgang bekommt, entscheidet UCT.">
            {`1,  0,  0,  1,  1,  0,  0,  1`}
          </Figur>
          <p>Eine Iteration läuft immer gleich ab:</p>
          <ol>
            <li>
              <strong>Auswählen:</strong> Für jede Aktion Durchschnitt + Bonus
              ausrechnen, die grössere gewinnt.
            </li>
            <li>
              <strong>Durchgang:</strong> Das nächste Ergebnis aus der Liste
              nehmen.
            </li>
            <li>
              <strong>Zurücktragen:</strong> Bei der gewählten Aktion{" "}
              <Tex>{"n"}</Tex> um 1 erhöhen und <Tex>{"w"}</Tex> um das
              Ergebnis. Auch <Tex>{"N"}</Tex> wächst um 1.
            </li>
          </ol>
          <ol start={4}>
            <li>
              Führen Sie die <strong>Iterationen 1 bis 5</strong> aus. Die
              ersten beiden sind geschenkt: Jede Aktion ist einmal unbesucht und
              kommt deshalb dran.
            </li>
            <li>
              Ab Iteration 3 schreiben Sie für <em>beide</em> Aktionen die
              Rechnung hin — <strong>Durchschnitt und Bonus einzeln</strong>,
              nicht nur das Resultat.
            </li>
            <li>
              Füllen Sie die Tabelle aus. Die ersten drei Zeilen sind zur
              Kontrolle schon da.
            </li>
          </ol>
          <DataTable
            headers={[
              "Iteration",
              "Rechnung rechts",
              "Rechnung links",
              "gewählt",
              "Ergebnis",
              "rechts (n/w)",
              "links (n/w)",
            ]}
            rows={[
              ["1", "unbesucht", "unbesucht", "rechts", "1", "1 / 1", "0 / 0"],
              ["2", "—", "unbesucht", "links", "0", "1 / 1", "1 / 0"],
              [
                "3",
                "1.00 + 0.83 = 1.83",
                "0.00 + 0.83 = 0.83",
                "rechts",
                "0",
                "2 / 1",
                "1 / 0",
              ],
              ["4", "…", "…", "…", "…", "…", "…"],
              ["5", "…", "…", "…", "…", "…", "…"],
            ]}
            caption="Kontrolle: Nach Iteration 5 steht rechts bei 4 / 3 und links bei 1 / 0."
          />
        </Aufgabe>

        <Aufgabe nummer="5" titel="Der zweite Versuch für links">
          <p>
            Jetzt kommt die interessante Stelle. <code>links</code> hat bisher
            genau einen Durchgang, und der ging schief — trotzdem wird es
            irgendwann wieder drankommen.
          </p>
          <ol>
            <li>
              Führen Sie die <strong>Iterationen 6, 7 und 8</strong> aus.
            </li>
            <li>
              In welcher Iteration wird <code>links</code> zum zweiten Mal
              gewählt? Schreiben Sie die beiden Rechnungen dieser Iteration
              nebeneinander und erklären Sie in einem Satz, <em>warum</em>{" "}
              <code>links</code> gewinnt, obwohl sein Durchschnitt{" "}
              <code>0</code> ist.
            </li>
            <li>
              Was passiert direkt danach? Begründen Sie, warum die Suche wieder
              zu <code>rechts</code> zurückkehrt.
            </li>
            <li>
              Welche Aktion wählen Sie am Ende als <Tex>{"\\pi(A)"}</Tex>? Nach
              dem besseren Durchschnitt oder nach der höheren Besuchszahl? Hier
              liefern beide dieselbe Antwort — überlegen Sie trotzdem, welches
              Kriterium Sie bei knappen Zahlen lieber hätten.
            </li>
            <li>
              Vergleichen Sie Ihre Endzahlen mit den exakten Werten{" "}
              <Tex>{"0.76"}</Tex> (rechts) und <Tex>{"0.19"}</Tex> (links). Wie
              gut liegen Sie nach nur acht Durchgängen?
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe nummer="6" titel="Den Faktor c verstehen">
          <p>
            <Tex>{"c"}</Tex> entscheidet, wie laut der Bonus mitredet.
            Wiederholen Sie dieselben acht Iterationen mit anderen Werten — die
            Ergebnisliste bleibt gleich.
          </p>
          <ol>
            <li>
              <Tex>{"c = 0"}</Tex>: Der Bonus fällt komplett weg, es zählt nur
              der Durchschnitt. Wie oft wird <code>links</code> jetzt noch
              gewählt? Was heisst das, wenn <code>links</code> in Wahrheit die{" "}
              <em>bessere</em> Aktion wäre und bloss Pech hatte?
            </li>
            <li>
              <Tex>{"c = 3"}</Tex>: Der Bonus dominiert. Zählen Sie, wie sich
              die acht Durchgänge auf die beiden Aktionen verteilen. Am Ende
              können Sie <em>keine</em> der beiden Aktionen als Siegerin
              benennen — warum nicht? Was ist daran schlecht, wenn man nur wenig
              Zeit hat?
            </li>
            <li>Füllen Sie die Vergleichstabelle aus.</li>
            <li>
              Formulieren Sie in zwei Sätzen, was <Tex>{"c"}</Tex> steuert — je
              ein Satz für «zu klein» und «zu gross».
            </li>
          </ol>
          <DataTable
            headers={[
              "c",
              "rechts (n/w)",
              "links (n/w)",
              "π(A)",
              "Problem dabei",
            ]}
            rows={[
              ["0", "…", "…", "…", "…"],
              ["1", "6 / 4", "2 / 0", "rechts", "—"],
              ["3", "…", "…", "…", "…"],
            ]}
            caption="Die Zeile für c = 1 ist Ihr Ergebnis aus den Aufgaben 4 und 5."
          />
        </Aufgabe>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 3 — Eine Strategie aufschreiben
          ══════════════════════════════════════════════════════ */}
      <Section>
        <Teil nummer="Teil 3" titel="Eine eigene Strategie aufschreiben">
          Eine Aktion pro Feld — und zwar in einer der drei Schreibweisen aus
          Teil 0.
        </Teil>

        <Aufgabe nummer="7" titel="Der längere Flur">
          <p>
            Dieselbe Idee, nur mit sechs Feldern. Die Aktion klappt jetzt mit{" "}
            <Tex>{"0.7"}</Tex> und rutscht mit <Tex>{"0.3"}</Tex>:
          </p>
          <Figur caption="Sechs Felder statt vier. Gewürfelt wird wie gehabt — nur ist der Weg länger.">
            {`  L       A       B       C       D       Z
 Loch                                    Ziel`}
          </Figur>
          <ol>
            <li>
              Schätzen Sie den Wert von Feld <code>D</code>: zehn Durchgänge für{" "}
              <code>rechts</code>, zehn für <code>links</code>, dann{" "}
              <Tex>{"w/n"}</Tex>. Zeichnen Sie das Ergebnis als Baum.
            </li>
            <li>
              Machen Sie dasselbe für Feld <code>A</code> (direkt neben dem
              Loch). Bei welchem der beiden Felder war die Entscheidung
              deutlicher?
            </li>
            <li>
              Schreiben Sie die Strategie <Tex>{"\\pi(s)"}</Tex> für{" "}
              <code>A</code> bis <code>D</code> als Tabelle auf. Für die Felder,
              die Sie nicht gewürfelt haben, dürfen Sie argumentieren statt
              messen.
            </li>
            <li>Zeichnen Sie die Strategie zusätzlich als Pfeilbild.</li>
            <li>
              Formulieren Sie sie zum Schluss als <em>Regel in einem Satz</em>.
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe nummer="8" titel="Schnell oder sicher?">
          <p>
            Bisher zählte nur <em>ob</em> der Roboter ankommt. Jetzt soll er
            auch <em>schnell</em> ankommen. Dafür ändern wir die Belohnung eines
            Durchgangs:
          </p>
          <Box art="regel" titel="Neue Belohnung">
            <p>
              Ein Durchgang, der nach <Tex>{"k"}</Tex> Schritten im Ziel
              ankommt, zählt <Tex>{"0.95^k"}</Tex> statt <Tex>{"1"}</Tex>. Ein
              Durchgang im Loch zählt weiterhin <Tex>{"0"}</Tex>.
            </p>
            <DataTable
              headers={["k", "1", "2", "3", "4", "5", "6", "8", "10"]}
              rows={[
                [
                  "0.95^k",
                  "0.95",
                  "0.90",
                  "0.86",
                  "0.81",
                  "0.77",
                  "0.74",
                  "0.66",
                  "0.60",
                ],
              ]}
              caption="Je länger der Weg, desto weniger ist die Ankunft wert — aber ein Absturz kostet immer alles."
            />
          </Box>
          <p>
            Wir vergleichen im Feld <code>B</code> zwei Aktionen. Neu gibt es{" "}
            <code>warten</code>: Der Roboter bleibt garantiert stehen, ohne zu
            rutschen — das kostet einen Schritt, kann aber nicht ins Loch
            führen. Hier sechs vorgegebene Durchgänge pro Aktion:
          </p>
          <DataTable
            headers={["Aktion", "Durchgang 1–6 (Schritte bis Ziel, × = Loch)"]}
            rows={[
              ["rechts", "1, 1, 3, 1, ×, 1"],
              ["warten", "2, 2, 4, 2, 2, 6"],
            ]}
            caption="«1» heisst: nach einem Schritt im Ziel. «×» heisst: im Loch gelandet."
          />
          <ol>
            <li>
              Rechnen Sie für beide Aktionen den Durchschnitt aus: Werte aus der{" "}
              <Tex>{"0.95^k"}</Tex>-Tabelle ablesen, addieren, durch 6 teilen.
            </li>
            <li>
              Welche Aktion gewinnt? Rechnen Sie zum Vergleich auch die alte
              Belohnung aus (jede Ankunft zählt <Tex>{"1"}</Tex>, egal wie
              lang). Ändert sich der Sieger? Was sagt Ihnen das über{" "}
              <Tex>{"0.95"}</Tex>?
            </li>
            <li>
              Jetzt wird die Zeit teuer: Ersetzen Sie <Tex>{"0.95"}</Tex> durch{" "}
              <Tex>{"0.5"}</Tex> — ein Schritt kostet also die Hälfte (
              <Tex>{"0.5,\\; 0.25,\\; 0.125,\\; \\dots"}</Tex>). Rechnen Sie{" "}
              <em>beide</em> Zeilen neu. Wer gewinnt jetzt?
            </li>
            <li>
              Formulieren Sie in einem Satz: Wovon hängt es ab, ob eine
              Strategie «mutig» (kurz, riskant) oder «vorsichtig» (lang, sicher)
              wird?
            </li>
          </ol>
        </Aufgabe>

        <Aufgabe
          nummer="9"
          titel="Vorhersagen für das Code-Kapitel"
          tag="ins Code-Kapitel mitbringen"
        >
          <p>
            Im nächsten Kapitel lassen Sie MCTS auf die rutschige Gitterwelt los
            — dieselbe Idee, nur mit vier Aktionen und 32 Feldern. Legen Sie
            sich <em>vorher</em> fest, eine Begründung pro Zeile.
          </p>
          <DataTable
            headers={["Frage", "meine Vermutung", "Begründung"]}
            rows={[
              ["Bei p = 0: Führt die Strategie der Klippe entlang?", "…", "…"],
              ["Ab welchem p weicht sie nach oben aus?", "…", "…"],
              [
                "Was ist besser bei p = 0.3: der A*-Pfad oder die MCTS-Strategie?",
                "…",
                "…",
              ],
              [
                "Wie viele Durchgänge pro Feld braucht es für stabile Pfeile?",
                "…",
                "…",
              ],
              [
                "Was passiert mit der Erfolgsquote, wenn man 10× mehr simuliert?",
                "…",
                "…",
              ],
            ]}
            caption="Diese Tabelle füllen Sie im Code-Kapitel mit echten Messwerten."
          />
        </Aufgabe>
      </Section>

      <Section>
        <Abgabe>
          <ul>
            <li>
              Ihre Würfelprotokolle und die ausgefüllten Tabellen der Aufgaben 1
              bis 3, inklusive der gezeichneten Bäume.
            </li>
            <li>
              Die vollständige MCTS-Spur zu den Aufgaben 4 und 5 — Durchschnitt
              und Bonus für <em>beide</em> Aktionen sichtbar, nicht nur das
              Resultat.
            </li>
            <li>Die Vergleichstabelle zu den drei Werten von c (Aufgabe 6).</li>
            <li>
              Strategie-Tabelle, Pfeilbild und Regel aus Aufgabe 7 sowie Ihre
              Rechnungen aus Aufgabe 8.
            </li>
            <li>
              Das Vorhersage-Blatt aus Aufgabe 9 — bringen Sie es ins
              Code-Kapitel mit.
            </li>
          </ul>
          <p>
            Teil 0 und 1 schaffen Sie in der ersten Lektion, Teil 2 und 3 in der
            zweiten. Aufgabe 8 ist für alle, die schnell sind.
          </p>
        </Abgabe>
      </Section>
    </>
  );
}
