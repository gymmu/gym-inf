import DataTable from "@components/DataTable/DataTable";
import Section from "@components/Section";

export default function KIAufgabenHeuristikenHand() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Heuristiken von Hand</h2>
        <p>
          In diesem Kapitel arbeiten Sie wieder <strong>ohne Computer</strong>.
          Sie rechnen Heuristiken aus, führen A<sup>*</sup> und Greedy
          Best-First von Hand aus und prüfen die Eigenschaften, die wir in der
          Theorie behauptet haben.
        </p>
        <p>
          <strong>Material:</strong> Papier (A4 quer für die Tabellen), ein
          Bleistift, ein Radiergummi. Für das Schiebepuzzle helfen wieder acht
          beschriftete Zettel.
        </p>
        <p>
          <strong>Das Ziel:</strong> Am Ende sollen Sie nicht nur wissen, dass A
          <sup>*</sup> den kürzesten Weg findet, sondern an Ihrem eigenen Blatt
          zeigen können, <em>warum</em> — und wo Greedy danebengreift.
        </p>
        <p>Zielstellung ist wie immer:</p>
        <pre>
          <code>{`1  2  3
4  5  6
7  8  ·`}</code>
        </pre>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 1 — Heuristiken ausrechnen
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 1 — Schätzen lernen</h2>

        <div className="aufgabe">
          <h4>Aufgabe 1: h₁ und h₂ ausrechnen</h4>
          <p>
            Rechnen Sie für die vier Stellungen beide Heuristiken aus:{" "}
            <strong>
              h<sub>1</sub>
            </strong>{" "}
            = Anzahl Steine am falschen Platz (das leere Feld zählt{" "}
            <em>nicht</em> mit),{" "}
            <strong>
              h<sub>2</sub>
            </strong>{" "}
            = Manhattan-Distanz.
          </p>
          <pre>
            <code>{`Stellung A        Stellung B        Stellung C        Stellung D
·  1  3           2  8  3           1  8  2           3  5  6
4  2  5           1  ·  5           5  ·  3           1  7  2
7  8  6           4  7  6           4  6  7           4  8  ·`}</code>
          </pre>
          <ol>
            <li>
              Schreiben Sie bei h<sub>2</sub> für jeden Stein einzeln auf, wie
              weit er von seinem Zielplatz entfernt ist, und bilden Sie erst
              dann die Summe. Diese Zwischenrechnung brauchen Sie später.
            </li>
            <li>Füllen Sie die Tabelle aus.</li>
            <li>
              Bei welcher Stellung sind h<sub>1</sub> und h<sub>2</sub> gleich?
              Woran liegt das?
            </li>
          </ol>
          <DataTable
            headers={["Stellung", "h₁ (falsche Plätze)", "h₂ (Manhattan)"]}
            rows={[
              ["A", "…", "…"],
              ["B", "…", "…"],
              ["C", "…", "…"],
              ["D", "…", "…"],
            ]}
            caption="Kontrolle: Bei A ist h₁ = h₂ = 4."
          />
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 2: h gegen die Wahrheit</h4>
          <p>
            Die tatsächlichen kürzesten Wege sind: A = 4 Züge, B = 8 Züge, C =
            12 Züge, D = 14 Züge. Diese Zahl nennen wir{" "}
            <strong>
              h<sup>*</sup>
            </strong>{" "}
            — den echten Restweg.
          </p>
          <ol>
            <li>
              Tragen Sie h<sup>*</sup> neben Ihre Werte aus Aufgabe 1. Wie gross
              ist der Fehler <code>h* − h</code> jeweils?
            </li>
            <li>
              Schätzen beide Heuristiken immer <em>zu wenig</em> oder gibt es
              eine Stellung, bei der eine zu viel schätzt?
            </li>
            <li>
              Welche der beiden Heuristiken liegt durchgehend näher an der
              Wahrheit? Formulieren Sie Ihre Beobachtung als Satz, der für{" "}
              <em>alle</em> Stellungen gilt.
            </li>
            <li>
              Wie gross wäre der Fehler einer Heuristik, die immer{" "}
              <code>0</code> liefert? Welcher Algorithmus entsteht aus A
              <sup>*</sup>, wenn man sie benutzt?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 3: Zulässigkeit begründen</h4>
          <ol>
            <li>
              Begründen Sie in zwei bis drei Sätzen, warum h<sub>1</sub>{" "}
              <strong>zulässig</strong> ist. Tipp: Überlegen Sie, wie viele
              Steine ein einzelner Zug höchstens an ihren Platz bringen kann.
            </li>
            <li>
              Begründen Sie dasselbe für h<sub>2</sub>. Um wie viel kann ein
              einzelner Zug die Manhattan-Summe höchstens verkleinern?
            </li>
            <li>
              Jemand schlägt vor:{" "}
              <code>
                h<sub>3</sub> = 3 · h<sub>2</sub>
              </code>
              . Prüfen Sie an Stellung A nach, ob h<sub>3</sub> zulässig ist.
            </li>
            <li>
              Jemand schlägt vor:{" "}
              <code>
                h<sub>4</sub> = h<sub>1</sub> + h<sub>2</sub>
              </code>
              . Ist das zulässig? Finden Sie eine Stellung, die Ihre Antwort
              belegt (Stellung B hilft).
            </li>
            <li>
              Welche der vier Heuristiken dürfen wir für A<sup>*</sup> benutzen,
              wenn wir den kürzesten Weg garantiert finden wollen?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 4: Konsistenz an einer Kante prüfen</h4>
          <p>
            Konsistent heisst: <code>h(n) ≤ cost(n, n′) + h(n′)</code>. Beim
            Puzzle ist <code>cost</code> immer 1, die Bedingung lautet also:{" "}
            <code>h(n) − h(n′) ≤ 1</code> für jeden Zug.
          </p>
          <ol>
            <li>
              Schreiben Sie alle Nachfolger von Stellung B auf (es sind vier)
              und rechnen Sie für jeden h<sub>2</sub> aus.
            </li>
            <li>
              Prüfen Sie für jede der vier Kanten, ob die Bedingung erfüllt ist.
            </li>
            <li>
              Kann die Manhattan-Distanz bei einem Zug je um 2 fallen? Begründen
              Sie mit der Definition.
            </li>
            <li>
              Prüfen Sie dieselben vier Kanten für h<sub>3</sub> = 3 · h
              <sub>2</sub>. Was fällt auf?
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 2 — A* von Hand
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>
          Teil 2 — A<sup>*</sup> von Hand
        </h2>
        <p>
          Jetzt führen Sie den Algorithmus selbst aus. Sie führen dabei zwei
          Listen, genau wie letzte Woche: die <strong>Grenze</strong> (hier
          sortiert nach <code>f</code>) und die Menge <strong>Besucht</strong>.
        </p>

        <div className="aufgabe">
          <h4>
            Aufgabe 5: A<sup>*</sup> auf Stellung A
          </h4>
          <p>
            Führen Sie A<sup>*</sup> mit h<sub>2</sub> auf Stellung A aus.
            Notieren Sie jeden Schleifendurchlauf in einer Zeile:
          </p>
          <DataTable
            headers={[
              "Schritt",
              "herausgenommen (g | h | f)",
              "neue Nachfolger (g | h | f)",
              "Grenze danach, nach f sortiert",
            ]}
            rows={[
              ["1", "START 0 | 4 | 4", "…", "…"],
              ["2", "…", "…", "…"],
              ["3", "…", "…", "…"],
              ["…", "…", "…", "…"],
            ]}
            caption="Bei Gleichstand von f nehmen Sie den Knoten mit dem kleineren h zuerst."
          />
          <ol>
            <li>
              Wie viele Knoten haben Sie expandiert, bis Sie das Ziel
              herausgenommen haben?
            </li>
            <li>
              Wie lang ist der gefundene Weg? Stimmt er mit h<sup>*</sup> = 4
              überein?
            </li>
            <li>
              Schauen Sie sich die <code>f</code>-Werte der ganzen Spur an. Was
              fällt Ihnen auf? Formulieren Sie es als Regel.
            </li>
            <li>
              Was bedeutet es, wenn <code>f</code> entlang eines Weges{" "}
              <em>konstant</em> bleibt? Was sagt das über die Heuristik aus?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>
            Aufgabe 6: A<sup>*</sup> auf Stellung B
          </h4>
          <p>
            Dasselbe mit Stellung B — hier wird es interessanter, weil A
            <sup>*</sup> zwischendurch die Richtung wechselt.
          </p>
          <ol>
            <li>
              Führen Sie die Tabelle für die ersten <strong>acht</strong>{" "}
              Schritte. Das genügt; Sie müssen nicht bis zum Ziel rechnen.
            </li>
            <li>
              Markieren Sie jeden Schritt, bei dem A<sup>*</sup> einen Knoten
              nimmt, der <em>nicht</em> ein Nachfolger des zuletzt expandierten
              Knotens ist. Was passiert dort anschaulich?
            </li>
            <li>Notieren Sie, wie gross die Grenze nach acht Schritten ist.</li>
            <li>
              <strong>Zur Kontrolle:</strong> A<sup>*</sup> mit h<sub>2</sub>{" "}
              expandiert auf Stellung B insgesamt 10 Knoten und findet einen Weg
              mit 8 Zügen. Mit h<sub>1</sub> sind es 15 Knoten.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 7: Greedy Best-First auf Stellung B</h4>
          <p>
            Jetzt dieselbe Stellung, aber die Grenze wird nur nach{" "}
            <code>h</code> sortiert — <code>g</code> interessiert nicht.
          </p>
          <ol>
            <li>
              Führen Sie dieselbe Tabelle (ohne die Spalte <code>f</code>) für
              acht Schritte.
            </li>
            <li>
              Vergleichen Sie Schritt für Schritt mit Aufgabe 6: Ab welchem
              Schritt unterscheiden sich die beiden Algorithmen zum ersten Mal?
              Warum genau dort?
            </li>
            <li>
              Welcher der beiden hat nach acht Schritten die kleinere Grenze?
              Welcher ist näher am Ziel?
            </li>
            <li>
              Greedy findet auf Stellung B einen Weg mit 8 Zügen — also den
              kürzesten. Heisst das, Greedy ist optimal? Begründen Sie
              sorgfältig.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 8: Greedy in die Falle locken</h4>
          <p>
            Greedy ist nicht optimal — das soll man sehen können. Konstruieren
            Sie ein kleines Beispiel von Hand, bei dem Greedy danebenliegt.
          </p>
          <p>
            Nehmen Sie dazu einen einfachen Landkarten-Graphen: Knoten S (Start)
            und Z (Ziel), dazu A und B. Sie dürfen die Kantenkosten und die{" "}
            <code>h</code>-Werte frei wählen, solange <code>h</code> zulässig
            bleibt (also nie grösser als der echte Restweg ist).
          </p>
          <ol>
            <li>
              Zeichnen Sie Ihren Graphen mit Kantenkosten und schreiben Sie zu
              jedem Knoten sein <code>h</code>.
            </li>
            <li>
              Führen Sie Greedy aus und zeigen Sie, dass er den{" "}
              <strong>längeren</strong> Weg findet.
            </li>
            <li>
              Führen Sie A<sup>*</sup> auf demselben Graphen aus und zeigen Sie,
              dass er den kürzeren findet.
            </li>
            <li>
              Erklären Sie in einem Satz, welche Information Greedy fehlt.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>
            Aufgabe 9: A<sup>*</sup> mit einer unzulässigen Heuristik
          </h4>
          <p>
            Nehmen Sie h<sub>3</sub> = 3 · h<sub>2</sub> und führen Sie A
            <sup>*</sup> auf Stellung A aus.
          </p>
          <ol>
            <li>Wie viele Knoten expandieren Sie? Wie lang ist der Weg?</li>
            <li>
              Vergleichen Sie mit Aufgabe 5. Was hat man gewonnen, was verloren?
            </li>
            <li>
              Zeichnen Sie auf, an welcher Stelle im Optimalitätsbeweis aus der
              Theorie das Argument zusammenbricht, wenn <code>h</code>{" "}
              überschätzt.
            </li>
            <li>
              In der Praxis benutzt man trotzdem manchmal eine überschätzende
              Heuristik (man nennt das <em>weighted A*</em>). Nennen Sie eine
              Situation, in der das sinnvoll sein kann.
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 3 — Vorhersagen
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 3 — Vorhersagen für nächste Lektion</h2>
        <p>
          Im nächsten Kapitel lassen Sie A<sup>*</sup> und Greedy über zwölf
          vorbereitete Stellungen laufen. Bevor Sie die Zahlen sehen, legen Sie
          sich fest.
        </p>

        <div className="aufgabe">
          <h4>Aufgabe 10: Wetten, dass …</h4>
          <p>
            Schreiben Sie Ihre Vermutungen auf ein Blatt, das Sie in die nächste
            Lektion mitbringen. Für jede Zeile: Vermutung <em>und</em>{" "}
            Begründung in einem Satz.
          </p>
          <DataTable
            headers={["Frage", "meine Vermutung", "Begründung"]}
            rows={[
              ["Wer expandiert weniger Knoten: A* oder Greedy?", "…", "…"],
              ["Wer findet die kürzeren Wege?", "…", "…"],
              [
                "Um welchen Faktor ist A* mit h₂ sparsamer als mit h₁?",
                "…",
                "…",
              ],
              [
                "Wie verändert sich der Aufwand, wenn der kürzeste Weg doppelt so lang ist?",
                "…",
                "…",
              ],
              [
                "Findet Greedy je einen Weg, der mehr als doppelt so lang ist wie nötig?",
                "…",
                "…",
              ],
            ]}
            caption="Diese Tabelle füllen Sie nächste Lektion mit den echten Messwerten ein."
          />
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 11: Eine eigene Heuristik erfinden</h4>
          <p>
            Suchen Sie sich eines der Probleme aus dem letzten Kapitel aus:
            Pfannkuchen-Stapel, Wolf/Ziege/Kohl, das Zahlenspiel oder Ihr
            eigenes Problem.
          </p>
          <ol>
            <li>
              Welche Regel des Problems würden Sie weglassen, um eine Heuristik
              zu gewinnen (Relaxation)?
            </li>
            <li>
              Schreiben Sie <code>h(state)</code> in Worten auf — so genau, dass
              man es programmieren könnte.
            </li>
            <li>
              Rechnen Sie Ihre Heuristik für den Startzustand und für zwei
              weitere Zustände aus.
            </li>
            <li>
              Argumentieren Sie, ob Ihre Heuristik zulässig ist. Wenn Sie es
              nicht sicher wissen: Was müssten Sie prüfen?
            </li>
            <li>
              Gibt es eine zweite, <em>bessere</em> Heuristik für dasselbe
              Problem? Dominiert sie Ihre erste?
            </li>
          </ol>
        </div>
      </Section>

      <Section>
        <h2>Abgabe</h2>
        <ul>
          <li>
            Ihre Blätter mit den ausgefüllten Tabellen der Aufgaben 1–2 und den
            Begründungen zu 3–4.
          </li>
          <li>
            Die vollständigen Spuren zu den Aufgaben 5, 6 und 7 — sauber
            beschriftet, damit man sie nachvollziehen kann.
          </li>
          <li>Ihr Gegenbeispiel aus Aufgabe 8 als saubere Zeichnung.</li>
          <li>
            Das Vorhersage-Blatt aus Aufgabe 10 — bringen Sie es unbedingt in
            die nächste Lektion mit.
          </li>
        </ul>
        <p>
          Aufgaben 1–4 schaffen Sie in der ersten Lektion, 5–8 in der zweiten.
          Aufgabe 9 ist für alle, die schnell sind.
        </p>
      </Section>
    </>
  );
}
