import DataTable from "@components/DataTable/DataTable";
import LearningGoals from "@components/LearningGoals";
import ContractionHierarchies from "@components/routing/ContractionHierarchies";
import ScrollSection from "@components/ScrollSection";

export default function KIRoutenplanungPaper() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Wie echte Routenplaner rechnen</h1>
        <h2>Die Ideen aus dem Paper — kurz und oberflächlich</h2>
        <p>Bast et al.: «Route Planning in Transportation Networks» (2015)</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Warum Dijkstra nicht reicht
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Warum Dijkstra allein nicht reicht</h2>
          <p>
            Das Strassennetz von Westeuropa, mit dem in der Forschung gerechnet
            wird, hat rund <strong>18 Millionen Kreuzungen</strong> und{" "}
            <strong>42 Millionen Strassenabschnitte</strong>. Dijkstra findet
            dort zuverlässig den kürzesten Weg — er braucht dafür aber mehrere{" "}
            <strong>Sekunden</strong> und schaut im Extremfall das halbe Netz
            an.
          </p>
          <p>
            Die besten Verfahren im Paper beantworten dieselbe Frage in{" "}
            <strong>einer Millionstel Sekunde</strong>. Das ist kein besserer
            Computer, das ist eine bessere Idee: Man rechnet{" "}
            <strong>vorher</strong> etwas aus, das bei <em>jeder</em> Anfrage
            hilft.
          </p>
          <blockquote>
            Alle Verfahren liefern <em>exakt</em> denselben kürzesten Weg wie
            Dijkstra. Sie sind nur schneller dort, wo sie suchen.
          </blockquote>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Die drei Stellschrauben
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Drei Stellschrauben, die man gegeneinander tauscht</h2>
          <p>
            Es gibt nicht das «beste» Verfahren. Jedes ist ein Kompromiss
            zwischen drei Grössen — genau deshalb zeigt das Paper so viele
            Tabellen und Diagramme:
          </p>
          <ul>
            <li>
              <strong>Vorverarbeitung</strong> (<em>preprocessing</em>) — wie
              lange rechnet man einmalig im Voraus? Minuten bis Stunden.
            </li>
            <li>
              <strong>Speicher</strong> (<em>space</em>) — wie viel muss man
              sich merken? Megabyte bis viele Gigabyte.
            </li>
            <li>
              <strong>Antwortzeit</strong> (<em>query time</em>) — wie lange
              dauert eine einzelne Anfrage? Millisekunden bis Nanosekunden.
            </li>
          </ul>
          <p>
            Dazu kommt eine praktische Frage: Was passiert bei einem{" "}
            <strong>Stau</strong>? Wenn sich die Fahrzeiten ändern, ist eine
            teuer vorberechnete Tabelle plötzlich falsch. Verfahren, die man
            schnell neu «einstellen» kann, sind deshalb in der Praxis oft
            wertvoller als die allerschnellsten.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Familie 1: zielgerichtet
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Familie 1: zielgerichtet suchen</h2>
          <p>
            Die erste Idee kennen Sie schon: Statt in alle Richtungen zu
            wachsen, zieht man die Suche Richtung Ziel.
          </p>
          <ul>
            <li>
              <strong>
                A<sup>*</sup>
              </strong>{" "}
              mit Luftlinie als Schätzung — unsere Heuristik aus der letzten
              Woche.
            </li>
            <li>
              <strong>ALT</strong> — statt der Luftlinie nimmt man{" "}
              <em>Landmarken</em>: einige wenige Orte, zu denen alle Distanzen
              vorberechnet sind. Über die Dreiecksungleichung ergibt das eine
              viel bessere Schätzung als die Luftlinie.
            </li>
            <li>
              <strong>Arc Flags</strong> — das Land wird in Regionen zerlegt.
              Jede Strasse bekommt ein Kästchen pro Region, angekreuzt heisst:
              «über mich führt ein kürzester Weg in diese Region». Strassen ohne
              Kreuzchen werden bei der Suche gar nicht erst angeschaut.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Familie 2: Hierarchie (mit Widget)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Familie 2: die Hierarchie im Netz ausnutzen</h2>
          <p>
            Ein Strassennetz ist nicht gleichmässig. Es ist{" "}
            <strong>hierarchisch</strong> aufgebaut:
          </p>
          <ul>
            <li>ganz unten die Quartierstrassen — viele, aber unwichtig</li>
            <li>darüber die Haupt- und Durchgangsstrassen</li>
            <li>zuoberst die Autobahnen — wenige, aber sehr wichtig</li>
          </ul>
          <p>
            Jede längere Fahrt sieht gleich aus: ein paar kleine Strassen
            hinauf, dann lange oben bleiben, dann wieder ein paar kleine
            Strassen hinunter. Niemand fährt von Zürich nach Genf mitten in der
            Strecke durch ein Wohnquartier.
          </p>
          <p>
            Das Problem: Diese Wichtigkeit steht nicht in den Daten — jedenfalls
            nicht verlässlich. Also berechnet man sie, und zwar so, dass das
            Ergebnis beweisbar korrekt bleibt.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection>
        <section>
          <h2>Contraction Hierarchies: Abkürzungen einbauen</h2>
          <p>
            Das wichtigste Verfahren dieser Familie heisst{" "}
            <strong>Contraction Hierarchies</strong> (CH). Die Idee in einem
            Satz: Man nimmt die unwichtigen Orte nacheinander aus dem Netz
            heraus und ersetzt sie durch <strong>Abkürzungen</strong> (
            <em>shortcuts</em>), damit keine einzige Fahrzeit verfälscht wird.
          </p>
          <ol>
            <li>
              <strong>Rang vergeben:</strong> Jeder Ort bekommt eine
              Wichtigkeit.
            </li>
            <li>
              <strong>Kontrahieren:</strong> Der unwichtigste Ort wird entfernt.
              Für jedes Nachbarpaar wird geprüft, ob man wirklich über ihn
              fahren muss. Nur dann kommt eine Abkürzung ins Netz.
            </li>
            <li>
              <strong>Anfragen:</strong> Zwei Suchen, eine vom Start und eine
              vom Ziel, laufen nur noch <em>bergauf</em> — also immer zu
              wichtigeren Orten. Sie treffen sich irgendwo oben, auf der
              Autobahn.
            </li>
          </ol>
          <p>
            Die Suche darf nie bergab laufen. Dadurch wird aus dem riesigen
            Ölfleck ein kurzer Aufstieg auf beiden Seiten — und genau das macht
            die Anfrage tausendfach schneller.
          </p>
        </section>
      </ScrollSection>

      <ContractionHierarchies />

      <ScrollSection>
        <section>
          <h2>Noch zwei Begriffe aus derselben Familie</h2>
          <ul>
            <li>
              <strong>Reach</strong> — jeder Ort bekommt eine Zahl: Wie weit
              reicht er? Ein Ort, der nur auf kurzen Wegen vorkommt, wird bei
              langen Fahrten einfach übersprungen.
            </li>
            <li>
              <strong>CRP</strong> (<em>Customizable Route Planning</em>) — das
              Land wird in Zellen zerlegt; pro Zelle merkt man sich nur, wie
              teuer die Durchfahrt von Rand zu Rand ist. Der Clou: Ändert sich
              die Verkehrslage, muss man nur diese Zellen neu durchrechnen,
              nicht das ganze Netz. Deshalb benutzt Bing Maps dieses Verfahren.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Familie 3: alles vorberechnen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Familie 3: möglichst viel vorberechnen</h2>
          <p>
            Die radikalste Idee: gar nicht mehr suchen, sondern{" "}
            <strong>nachschlagen</strong>. Alle Distanzen zwischen allen
            Ortspaaren zu speichern, ist unmöglich — bei 18 Millionen Orten
            wären das 324 Billionen Zahlen. Also speichert man geschickt
            weniger:
          </p>
          <ul>
            <li>
              <strong>Hub Labels</strong> — jeder Ort merkt sich eine kleine
              Liste von «Drehscheiben» samt Distanz. Für eine Anfrage vergleicht
              man nur die beiden Listen von Start und Ziel und nimmt die beste
              gemeinsame Drehscheibe. Das sind die schnellsten bekannten
              Anfragen überhaupt — dafür braucht es sehr viel Speicher.
            </li>
            <li>
              <strong>Transit Node Routing</strong> — man wählt einige tausend{" "}
              <em>Transitknoten</em> (im Wesentlichen die Autobahnauffahrten)
              und speichert alle Distanzen dazwischen in einer Tabelle. Eine
              lange Fahrt ist dann: zur Auffahrt, Tabelle nachschlagen, von der
              Ausfahrt ans Ziel. Nur für kurze Fahrten in der Nähe braucht es
              einen Rückfall auf ein anderes Verfahren.
            </li>
          </ul>
          <p>
            Und natürlich kann man kombinieren: <strong>CHASE</strong> ist CH
            plus Arc Flags, <strong>REAL</strong> ist Reach plus ALT. Fast jedes
            Spitzenverfahren im Paper ist so eine Mischung.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Die Verfahren im Überblick</h2>
          <p>
            Grob und gerundet — die genauen Zahlen stehen im Paper in Abschnitt
            3. Wichtig ist das Muster: Je mehr man vorher rechnet und speichert,
            desto schneller wird die Anfrage.
          </p>
          <DataTable
            headers={[
              "Verfahren",
              "Idee",
              "Vorverarbeitung",
              "Anfrage (Europa)",
            ]}
            rows={[
              ["Dijkstra", "einfach suchen", "keine", "~ 2 Sekunden"],
              ["Bidirektional", "von beiden Seiten", "keine", "~ 1 Sekunde"],
              ["ALT", "Landmarken als Heuristik", "Minuten", "~ 100 ms"],
              ["Arc Flags", "Wegweiser pro Region", "Stunden", "~ 1 ms"],
              ["CRP", "Zellen, schnell anpassbar", "Minuten", "~ 1 ms"],
              [
                "Contraction Hierarchies",
                "Abkürzungen, nur bergauf",
                "Minuten",
                "~ 0.1 ms",
              ],
              [
                "Transit Node Routing",
                "Tabelle für Fernfahrten",
                "~ 1 Stunde",
                "~ 0.003 ms",
              ],
              [
                "Hub Labels",
                "zwei Listen vergleichen",
                "~ 1 Stunde",
                "~ 0.0005 ms",
              ],
            ]}
            caption="Je mehr Vorarbeit, desto schneller die Anfrage"
          />
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Öffentlicher Verkehr
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Und der öffentliche Verkehr?</h2>
          <p>
            Die zweite Hälfte des Papers handelt von Bus, Tram und Zug. Das ist{" "}
            <strong>schwieriger</strong> als das Strassennetz, und zwar aus zwei
            Gründen:
          </p>
          <ul>
            <li>
              <strong>Die Zeit spielt mit.</strong> Eine Kante «kostet» nicht
              immer gleich viel: Um 07:12 fährt der Zug in zwei Minuten, um
              01:12 erst in fünf Stunden.
            </li>
            <li>
              <strong>Es gibt nicht die eine beste Verbindung.</strong> Schnell,
              wenig Umsteigen und billig sind drei verschiedene Ziele. Man sucht
              deshalb mehrere Verbindungen, von denen keine in allen Punkten
              schlechter ist als eine andere.
            </li>
          </ul>
          <p>
            Die bekannten Verfahren dazu heissen <strong>RAPTOR</strong> (geht
            rundenweise vor: null Umstiege, ein Umstieg, zwei Umstiege …),{" "}
            <strong>CSA</strong> (geht einfach alle Abfahrten der Reihe nach
            durch) und <strong>Transfer Patterns</strong> (merkt sich, über
            welche Haltestellen sinnvolle Verbindungen überhaupt laufen — das
            steckt seit 2010 in Google Maps).
          </p>
          <p>
            Noch eine Stufe schwieriger ist <strong>multimodal</strong>: zu Fuss
            zum Bus, Bus zum Bahnhof, Zug, dann Velo. Hier liefern selbst die
            besten Verfahren oft nur noch gute Näherungen. Ein weltweiter,
            multimodaler Routenplaner ist laut Paper das ungelöste Ziel.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Begriffsliste
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Begriffe für die Lektüre</h2>
          <p>
            Das Paper ist auf Englisch. Mit dieser Liste erkennen Sie beim
            Überfliegen sofort, wovon ein Abschnitt handelt.
          </p>
          <DataTable
            headers={["Englisch", "Deutsch", "Das steckt dahinter"]}
            rows={[
              [
                "vertex / arc",
                "Knoten / Kante",
                "Kreuzung / Strassenabschnitt",
              ],
              ["query", "Anfrage", "eine einzelne Routenberechnung"],
              [
                "preprocessing",
                "Vorverarbeitung",
                "einmaliges Rechnen im Voraus",
              ],
              ["shortcut", "Abkürzung", "künstliche Kante über mehrere Knoten"],
              ["to settle / scan", "endgültig festlegen", "wie bei Dijkstra"],
              ["search space", "Suchraum", "wie viele Orte angeschaut werden"],
              [
                "speedup technique",
                "Beschleunigungsverfahren",
                "alles in diesem Kapitel",
              ],
              ["hierarchy", "Hierarchie", "Quartierstrasse bis Autobahn"],
              ["landmark", "Landmarke", "Stützpunkt für bessere Schätzungen"],
              [
                "bidirectional search",
                "bidirektionale Suche",
                "von beiden Seiten gleichzeitig",
              ],
              [
                "multicriteria",
                "mehrkriteriell",
                "schnell UND billig UND wenig Umsteigen",
              ],
              [
                "time-dependent",
                "zeitabhängig",
                "Kosten hängen von der Uhrzeit ab",
              ],
            ]}
            caption="Begriffsliste Englisch ↔ Deutsch"
          />
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Praxis
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Das läuft wirklich im Einsatz</h2>
          <p>
            Diese Verfahren sind keine Theorie. Sie stecken in Programmen, die
            täglich Millionen Menschen benutzen:
          </p>
          <ul>
            <li>
              <strong>Bing Maps</strong> rechnet mit CRP — weil sich damit
              Verkehrsdaten schnell einarbeiten lassen.
            </li>
            <li>
              <strong>OSRM</strong>, der freie Routenplaner für OpenStreetMap,
              benutzt Contraction Hierarchies.
            </li>
            <li>
              <strong>Google Maps</strong> benutzt für den öffentlichen Verkehr
              Transfer Patterns.
            </li>
            <li>
              <strong>TomTom</strong> benutzt eine Variante von Arc Flags mit
              Abkürzungen.
            </li>
          </ul>
          <p>
            Zwischen «wir haben da eine Idee» und «das rechnet jetzt für
            Millionen von Leuten» lagen in diesem Gebiet oft nur wenige Jahre.
            Und der Fortschritt kam fast nie von schnellerer Hardware, sondern
            davon, dass jemand eine Eigenschaft des Netzes entdeckt hat, die man
            ausnutzen kann.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — Lernziele
          ══════════════════════════════════════════════════════ */}
      <LearningGoals>
        <ul>
          <li>
            Ich kann erklären, warum Dijkstra für ein Land zu langsam ist,
            obwohl er korrekt rechnet.
          </li>
          <li>
            Ich kann die drei Stellschrauben Vorverarbeitung, Speicher und
            Antwortzeit benennen und gegeneinander abwägen.
          </li>
          <li>
            Ich kann beschreiben, was mit der Hierarchie eines Strassennetzes
            gemeint ist.
          </li>
          <li>
            Ich kann die Idee von Contraction Hierarchies in eigenen Worten
            erklären: Orte kontrahieren, Abkürzungen einfügen, bei der Anfrage
            nur bergauf suchen.
          </li>
          <li>
            Ich kann grob sagen, was ALT, Arc Flags, CRP, Hub Labels und Transit
            Node Routing jeweils ausnutzen.
          </li>
          <li>
            Ich kann begründen, warum Fahrpläne schwieriger sind als
            Strassennetze.
          </li>
          <li>
            Ich kenne die wichtigsten englischen Fachbegriffe aus dem Paper und
            kann damit einen Abschnitt grob einordnen.
          </li>
        </ul>
      </LearningGoals>
    </>
  );
}
