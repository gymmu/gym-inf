import LearningGoals from "@components/LearningGoals";
import BidirectionalDijkstra from "@components/routing/BidirectionalDijkstra";
import DijkstraViz from "@components/routing/DijkstraViz";
import MapToGraph from "@components/routing/MapToGraph";
import ScrollSection from "@components/ScrollSection";

export default function KIRoutenplanung() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Kürzeste Wege</h1>
        <h2>Dijkstra und die Routenplanung</h2>
        <p>Wie ein Navigationsgerät rechnet</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Einstieg
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Frage hinter jedem Navi</h2>
          <p>
            Sie tippen ein Ziel ein und bekommen eine halbe Sekunde später eine
            Route. Dahinter steckt kein maschinelles Lernen, sondern ein
            Algorithmus von 1956: <strong>Dijkstra</strong>. Er beantwortet eine
            einzige Frage, dafür aber beweisbar korrekt:
          </p>
          <blockquote>
            Was ist der <em>billigste</em> Weg von A nach B, wenn jede
            Verbindung einen Preis hat?
          </blockquote>
          <p>
            «Billig» kann alles heissen: Kilometer, Minuten, Benzin, Franken,
            Höhenmeter. Für uns ist es die <strong>Fahrzeit</strong>.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Von der Karte zum Graphen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zuerst: eine Karte ist kein Graph</h2>
          <p>
            Ein Algorithmus kann mit einem Bild nichts anfangen. Bevor
            irgendetwas gerechnet wird, muss die Karte in eine{" "}
            <strong>Datenstruktur</strong> übersetzt werden. Dabei wird fast
            alles weggeworfen: Häuser, Flüsse, die genaue Form der Strassen.
            Übrig bleiben nur drei Dinge:
          </p>
          <ul>
            <li>
              <strong>Knoten</strong> — Orte, an denen man sich entscheiden kann
              (Kreuzungen, Ziele)
            </li>
            <li>
              <strong>Kanten</strong> — Strassenabschnitte zwischen zwei Knoten
            </li>
            <li>
              <strong>Gewichte</strong> — was eine Kante kostet, hier die
              Fahrzeit in Minuten
            </li>
          </ul>
        </section>
      </ScrollSection>

      <MapToGraph />

      <ScrollSection>
        <section>
          <h2>Was dabei verloren geht — und warum das gut ist</h2>
          <p>
            Ob die Bahnhofstrasse eine Rechtskurve macht, ändert nichts an der
            Fahrzeit. Genau deshalb darf man sie weglassen. Der Graph behält
            nur, was für die <em>Entscheidung</em> zählt: Welche Orte sind
            direkt verbunden, und wie teuer ist die Verbindung?
          </p>
          <p>
            Gespeichert wird das als <strong>Adjazenzliste</strong>: zu jedem
            Knoten eine Liste seiner Nachbarn mit dem jeweiligen Gewicht. Mehr
            braucht der Algorithmus nicht.
          </p>
          <p>
            Einbahnstrassen wären übrigens kein Problem: Dann stünde die
            Verbindung nur in <em>einer</em> Richtung in der Liste.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Die Idee von Dijkstra
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Idee: der Ölfleck</h2>
          <p>
            Stellen Sie sich vor, Sie giessen am Startort Öl auf die Karte. Es
            breitet sich in alle Richtungen aus, aber auf schnellen Strassen
            schneller als auf langsamen. Nach <code>t</code> Minuten hat das Öl
            genau die Orte erreicht, die in <code>t</code> Minuten erreichbar
            sind.
          </p>
          <p>Dijkstra macht genau das, nur in Einzelschritten:</p>
          <ol>
            <li>
              Jeder Ort bekommt eine <strong>Distanz</strong> (anfangs ∞, der
              Start 0) und einen <strong>Vorgänger</strong>.
            </li>
            <li>
              Nimm aus der <strong>Grenze</strong> den Ort mit der{" "}
              <em>kleinsten</em> bekannten Distanz.
            </li>
            <li>
              Dieser Wert ist jetzt <strong>endgültig</strong> — kein späterer
              Weg kann kürzer sein.
            </li>
            <li>
              Prüfe alle Nachbarn: Ist der Weg über diesen Ort besser als der
              bisher bekannte? Dann eintragen (<em>Relaxation</em>).
            </li>
            <li>Zurück zu Schritt 2, bis das Ziel endgültig ist.</li>
          </ol>
          <p>
            Schritt 3 ist der Kern. Warum darf man so sicher sein? Weil alle
            Gewichte <strong>positiv</strong> sind: Ein Umweg über einen noch
            teureren Ort kann nie billiger werden. Genau deshalb funktioniert
            Dijkstra <em>nicht</em> mit negativen Kosten.
          </p>
        </section>
      </ScrollSection>

      <DijkstraViz />

      <ScrollSection>
        <section>
          <h2>Beobachten Sie zwei Dinge</h2>
          <p>
            <strong>Erstens:</strong> Die Distanz eines Ortes kann sich mehrmals
            verbessern, solange er in der Grenze liegt. Erst wenn er gewählt
            wird, ist Schluss.
          </p>
          <p>
            <strong>Zweitens:</strong> Dijkstra schaut <em>nicht</em> Richtung
            Ziel. Er expandiert auch in die komplett falsche Richtung, nur weil
            es dort gerade billig ist. Bei einer Fahrt von Zürich nach Genf
            würde er fleissig auch Richtung München suchen.
          </p>
          <p>
            Letzte Woche haben wir dagegen bereits ein Mittel gesehen: A
            <sup>*</sup> benutzt eine Heuristik und zieht die Suche Richtung
            Ziel. Dijkstra ist übrigens genau A<sup>*</sup> mit{" "}
            <code>h(n) = 0</code>.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Die Route zurückverfolgen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Wo ist eigentlich die Route?</h2>
          <p>
            Dijkstra rechnet die ganze Zeit mit <strong>Distanzen</strong> — die
            Route selbst steht nirgends im Speicher. Sie entsteht erst am
            Schluss, und zwar rückwärts: Jeder Ort merkt sich beim Eintragen
            seiner Distanz, von welchem <strong>Vorgänger</strong> aus er
            gefunden wurde.
          </p>
          <p>
            Vom Ziel aus folgt man dieser Kette von Vorgängern rückwärts bis zum
            Start und dreht sie am Ende um. Das kostet fast nichts — und es ist
            der Grund, warum die Spalte «Vorgänger» in der Tabelle so wichtig
            ist.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Bidirektional
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zwei kleine Kreise statt einem grossen</h2>
          <p>
            Der Ölfleck wächst ungefähr kreisförmig. Ein Kreis mit Radius{" "}
            <code>r</code> hat die Fläche <code>π·r²</code>. Zwei Kreise mit
            Radius <code>r/2</code> haben zusammen nur{" "}
            <code>2·π·(r/2)² = π·r²/2</code> — also die <strong>Hälfte</strong>.
          </p>
          <p>
            Genau das macht der <strong>bidirektionale Dijkstra</strong>: Er
            startet zwei Suchen gleichzeitig, eine beim Start vorwärts und eine
            beim Ziel rückwärts. Treffen sie sich in der Mitte, ist die Route
            zusammengesetzt aus beiden Hälften.
          </p>
          <p>
            Der Haken ist das <strong>Abbruchkriterium</strong>. Sobald sich die
            beiden Suchräume berühren, kennt man <em>einen</em> Weg — aber nicht
            unbedingt den kürzesten. Man merkt sich deshalb den besten bisher
            gefundenen Gesamtweg als <code>µ</code> und darf erst aufhören, wenn
            gilt:
          </p>
          <blockquote>
            <code>top(vorwärts) + top(rückwärts) ≥ µ</code>
          </blockquote>
          <p>
            Dann kann kein noch unentdeckter Weg mehr kürzer sein als{" "}
            <code>µ</code>.
          </p>
        </section>
      </ScrollSection>

      <BidirectionalDijkstra />

      <ScrollSection>
        <section>
          <h2>Warum das in der Praxis zählt</h2>
          <p>
            Auf unserem Spielnetz mit 13 Orten spart man ein paar Knoten. Das
            Strassennetz von Europa hat rund <strong>50 Millionen</strong>{" "}
            Knoten. Dort ist die Halbierung des Suchraums der Unterschied
            zwischen «mehrere Sekunden» und «sofort».
          </p>
          <p>
            Echte Routenplaner gehen noch weiter und kombinieren mehrere Tricks:
          </p>
          <ul>
            <li>
              <strong>
                A<sup>*</sup>
              </strong>{" "}
              mit Luftlinie als Heuristik — zieht die Suche Richtung Ziel
            </li>
            <li>
              <strong>Bidirektionale Suche</strong> — halbiert den Suchraum
            </li>
            <li>
              <strong>Contraction Hierarchies</strong> — Autobahnen werden
              vorberechnet «abgekürzt», so dass die Fernfahrt nur wenige Kanten
              kostet
            </li>
          </ul>
          <p>
            Alle diese Verfahren bauen auf derselben Grundidee auf, die Sie
            gerade Schritt für Schritt gesehen haben.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Lernziele
          ══════════════════════════════════════════════════════ */}
      <LearningGoals>
        <ul>
          <li>
            Ich kann erklären, wie aus einer Karte ein gewichteter Graph wird
            und was dabei weggelassen wird.
          </li>
          <li>
            Ich kann einen kleinen Graphen als Adjazenzliste aufschreiben.
          </li>
          <li>
            Ich kann Dijkstra von Hand ausführen und dabei die Tabelle mit
            Distanz und Vorgänger korrekt nachführen.
          </li>
          <li>
            Ich kann begründen, warum ein aus der Grenze gewählter Knoten
            endgültig ist — und warum das negative Gewichte ausschliesst.
          </li>
          <li>Ich kann aus den Vorgängern die Route rekonstruieren.</li>
          <li>
            Ich kann die Idee des bidirektionalen Dijkstra erklären und sagen,
            warum man beim ersten Treffen der beiden Suchen noch nicht aufhören
            darf.
          </li>
          <li>
            Ich kann den Zusammenhang zwischen Dijkstra und A<sup>*</sup>{" "}
            benennen (<code>h(n) = 0</code>).
          </li>
        </ul>
      </LearningGoals>
    </>
  );
}
