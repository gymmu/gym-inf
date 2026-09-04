import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSFPTheorie() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>Funktionales Programmieren</h1>
        <h2>map · filter · reduce</h2>
        <p>Beschreiben, was herauskommen soll — nicht, wie man dahin kommt</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Die Idee
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Die Idee in einem Satz</h2>
          <p>
            Bisher haben wir <strong>imperativ</strong> programmiert: Wir sagen
            dem Computer Schritt für Schritt, <em>wie</em> er etwas tun soll.
            Funktional heisst: Wir beschreiben, <em>was</em> herauskommen soll.
          </p>
          <ul>
            <li>
              <strong>Imperativ:</strong> «Leere Liste anlegen, von 0 bis Ende
              laufen, jedes Element verdoppeln, anhängen.»
            </li>
            <li>
              <strong>Funktional:</strong> «Die Liste, in der jedes Element
              verdoppelt ist.»
            </li>
          </ul>
          <p>
            Drei Werkzeuge decken den grössten Teil ab:{" "}
            <strong>
              <code>map</code> verändert
            </strong>
            ,{" "}
            <strong>
              <code>filter</code> wählt aus
            </strong>
            ,{" "}
            <strong>
              <code>reduce</code> fasst zusammen
            </strong>
            .
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — map
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>map — jedes Element umwandeln</h2>
          <p>
            <code>map</code> geht durch die Liste, wendet auf jedes Element den
            Callback an und gibt eine <strong>neue Liste</strong> zurück. Die
            neue Liste ist immer <strong>gleich lang</strong> wie die alte.
          </p>
          <p>
            Merkbild: Ein Fliessband, auf dem jedes Teil dieselbe Bearbeitung
            bekommt.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>map — Code</h2>
          <JSTerminal filename="map.js">
            {`const zahlen = [1, 2, 3, 4];

// vorher (imperativ)
const alt = [];
for (const z of zahlen) {
  alt.push(z * 2);
}

// nachher (funktional)
const neu = zahlen.map((z) => z * 2);

console.log(alt); // [2, 4, 6, 8]
console.log(neu); // [2, 4, 6, 8]

// Das Original bleibt unverändert!
console.log(zahlen); // [1, 2, 3, 4]

// Auch mit Objekten
const personen = [
  { name: "Anna", alter: 17 },
  { name: "Ben", alter: 16 },
];

const namen = personen.map((p) => p.name);
console.log(namen); // ["Anna", "Ben"]

// Der Callback bekommt optional auch den Index
console.log(namen.map((n, i) => (i + 1) + ". " + n));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — filter
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>filter — Elemente auswählen</h2>
          <p>
            <code>filter</code> behält nur die Elemente, für die der Callback{" "}
            <code>true</code> zurückgibt. Die neue Liste ist{" "}
            <strong>gleich lang oder kürzer</strong>, die Elemente selbst
            bleiben unverändert.
          </p>
          <p>
            Merkbild: Ein Sieb. Der Callback beantwortet für jedes Element die
            Frage «darfst du bleiben?».
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>filter — Code</h2>
          <JSTerminal filename="filter.js">
            {`const zahlen = [4, 8, 15, 16, 23, 42];

const gerade = zahlen.filter((z) => z % 2 === 0);
console.log(gerade); // [4, 8, 16, 42]

const grosse = zahlen.filter((z) => z > 15);
console.log(grosse); // [16, 23, 42]

const schueler = [
  { name: "Anna", note: 5.5 },
  { name: "Ben", note: 3.5 },
  { name: "Clara", note: 4.0 },
];

const bestanden = schueler.filter((s) => s.note >= 4);
console.log(bestanden.length + " von " + schueler.length);

// Typischer Fehler: return vergessen
// const falsch = zahlen.filter((z) => { z > 15; }); // [] !!
// Mit geschweiften Klammern braucht es ein return.`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — reduce
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>reduce — alles zu einem Wert zusammenfassen</h2>
          <p>
            <code>reduce</code> ist das mächtigste der drei. Es hat einen{" "}
            <strong>Akkumulator</strong> — eine Variable, die von Element zu
            Element weitergereicht wird.
          </p>
          <ul>
            <li>
              <code>liste.reduce((akku, element) =&gt; ..., startwert)</code>
            </li>
            <li>
              Was der Callback zurückgibt, ist der <code>akku</code> im nächsten
              Durchgang.
            </li>
            <li>
              Der Akkumulator kann alles sein: Zahl, String, Array oder Objekt.
            </li>
          </ul>
          <p>
            Merkbild: Ein Schneeball, der die Liste hinunterrollt und alles
            aufsammelt.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>reduce — Code</h2>
          <JSTerminal filename="reduce.js">
            {`const zahlen = [4, 8, 15, 16, 23, 42];

// Summe (Startwert 0)
const summe = zahlen.reduce((akku, z) => akku + z, 0);
console.log("Summe:", summe); // 108

// Schritt für Schritt sichtbar machen
zahlen.reduce((akku, z) => {
  console.log(akku, "+", z, "=", akku + z);
  return akku + z;
}, 0);

// Maximum (Startwert = erstes Element)
const max = zahlen.reduce((akku, z) => (z > akku ? z : akku), zahlen[0]);
console.log("Maximum:", max); // 42

// Zählen mit einem Objekt als Akkumulator
const woerter = ["a", "b", "a", "c", "a"];
const anzahl = woerter.reduce((akku, w) => {
  akku[w] = (akku[w] || 0) + 1;
  return akku;
}, {});
console.log(anzahl); // { a: 3, b: 1, c: 1 }`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Die kleinen Geschwister
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Die kleinen Geschwister</h2>
          <p>
            Für die Suchmuster aus Woche 3 gibt es fertige Methoden. Jede
            ersetzt eine ganze Schleife:
          </p>
          <table>
            <thead>
              <tr>
                <th>Methode</th>
                <th>Gibt zurück</th>
                <th>Ersetzt Muster</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>find</code>
                </td>
                <td>erstes passendes Element</td>
                <td>lineare Suche</td>
              </tr>
              <tr>
                <td>
                  <code>findIndex</code>
                </td>
                <td>Index davon (oder −1)</td>
                <td>lineare Suche</td>
              </tr>
              <tr>
                <td>
                  <code>some</code>
                </td>
                <td>
                  <code>true</code>, wenn mindestens eines passt
                </td>
                <td>«gibt es ein …?»</td>
              </tr>
              <tr>
                <td>
                  <code>every</code>
                </td>
                <td>
                  <code>true</code>, wenn alle passen
                </td>
                <td>«sind alle …?»</td>
              </tr>
              <tr>
                <td>
                  <code>includes</code>
                </td>
                <td>
                  <code>true</code>, wenn Wert vorkommt
                </td>
                <td>einfache Suche</td>
              </tr>
              <tr>
                <td>
                  <code>toSorted</code>
                </td>
                <td>neue, sortierte Liste</td>
                <td>Bubble Sort &amp; Co.</td>
              </tr>
            </tbody>
          </table>
          <JSTerminal filename="geschwister.js">
            {`const zahlen = [4, 8, 15, 16, 23, 42];

console.log(zahlen.find((z) => z > 10));      // 15
console.log(zahlen.findIndex((z) => z > 10)); // 2
console.log(zahlen.some((z) => z > 40));      // true
console.log(zahlen.every((z) => z > 3));      // true
console.log(zahlen.includes(15));             // true

// toSorted braucht eine Vergleichsfunktion für Zahlen
console.log(zahlen.toSorted((a, b) => a - b)); // aufsteigend
console.log(zahlen.toSorted((a, b) => b - a)); // absteigend

// a - b  negativ -> a kommt zuerst
//        positiv -> b kommt zuerst

// toSorted gibt eine NEUE Liste zurück,
// das Original bleibt unverändert:
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Verketten
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Verketten — die Pipeline</h2>
          <p>
            Weil <code>map</code> und <code>filter</code> wieder eine Liste
            zurückgeben, kann man sie direkt aneinanderhängen. Lesen Sie eine
            Kette immer von oben nach unten wie ein Rezept.
          </p>
          <JSTerminal filename="pipeline.js">
            {`const schueler = [
  { name: "Anna", note: 5.5, klasse: "1a" },
  { name: "Ben", note: 3.5, klasse: "1a" },
  { name: "Clara", note: 4.75, klasse: "1b" },
  { name: "David", note: 6, klasse: "1b" },
];

// Namen aller Bestandenen, alphabetisch
const namen = schueler
  .filter((s) => s.note >= 4)     // auswählen
  .map((s) => s.name)             // umwandeln
  .toSorted();                    // sortieren

console.log(namen); // ["Anna", "Clara", "David"]

// Durchschnitt der Klasse 1b
const noten1b = schueler
  .filter((s) => s.klasse === "1b")
  .map((s) => s.note);

const schnitt =
  noten1b.reduce((a, n) => a + n, 0) / noten1b.length;

console.log("Schnitt 1b:", schnitt);

// Faustregel: zuerst filter (weniger Daten),
// dann map, zuletzt reduce.`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Eigene Funktionen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Eigene Funktionen im funktionalen Stil</h2>
          <p>
            Bis jetzt haben wir die Callbacks immer direkt hineingeschrieben.
            Das ist bei kurzen Ausdrücken praktisch — aber sobald eine Regel
            mehrfach vorkommt oder komplizierter wird, gibt man ihr besser einen{" "}
            <strong>Namen</strong>.
          </p>
          <p>Zwei Bausteine, die man immer wieder selbst schreibt:</p>
          <ol>
            <li>
              <strong>Prädikate</strong> — Funktionen, die eine Frage mit{" "}
              <code>true</code>/<code>false</code> beantworten. Sie kommen in{" "}
              <code>filter</code>, <code>find</code>, <code>some</code> und{" "}
              <code>every</code> zum Einsatz. Namenskonvention:{" "}
              <code>istBestanden</code>, <code>hatLager</code>.
            </li>
            <li>
              <strong>Transformationen</strong> — Funktionen, die einen Wert in
              einen anderen umwandeln. Sie kommen in <code>map</code> zum
              Einsatz. Namenskonvention: <code>zuAnzeigename</code>,{" "}
              <code>mitMwst</code>.
            </li>
          </ol>
          <p>
            Wichtig: Eine solche Funktion soll <strong>rein</strong> sein — sie
            arbeitet nur mit ihren Parametern, verändert nichts von aussen und
            gibt immer dasselbe Resultat für dieselbe Eingabe. Dadurch kann man
            sie isoliert testen und überall wiederverwenden.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Beispiel 1 — Benannte Bausteine</h2>
          <p>
            Dieselbe Auswertung zweimal: einmal mit anonymen Callbacks, einmal
            mit benannten Funktionen. Der zweite Block liest sich fast wie ein
            deutscher Satz.
          </p>
          <JSTerminal filename="eigene-funktionen.js">
            {`const produkte = [
  { name: "Maus", preis: 25, lager: 12 },
  { name: "Tastatur", preis: 89, lager: 0 },
  { name: "Monitor", preis: 249, lager: 3 },
  { name: "Kabel", preis: 9.9, lager: 40 },
];

// --- Variante A: alles inline ---
console.log(
  produkte
    .filter((p) => p.lager > 0)
    .map((p) => p.name + ": " + (p.preis * 1.081).toFixed(2) + " CHF")
);

// --- Variante B: eigene Funktionen ---

// Prädikat: beantwortet eine Frage
const istVerfuegbar = (produkt) => produkt.lager > 0;

// Transformation: rechnet einen Wert um
const mitMwst = (preis) => Math.round(preis * 1.081 * 100) / 100;

// Transformation: baut einen Anzeigetext
function zuAnzeigetext(produkt) {
  return produkt.name + ": " + mitMwst(produkt.preis) + " CHF";
}

console.log(
  produkte
    .filter(istVerfuegbar)   // ohne Klammern! wir übergeben die Funktion
    .map(zuAnzeigetext)
);

// Die Bausteine lassen sich einzeln testen ...
console.log(mitMwst(100));                  // 108.1
console.log(istVerfuegbar(produkte[1]));    // false

// ... und überall wiederverwenden
console.log(produkte.some(istVerfuegbar));  // true
console.log(produkte.every(istVerfuegbar)); // false`}
          </JSTerminal>
          <p>
            <strong>Achtung:</strong> <code>filter(istVerfuegbar)</code> —{" "}
            <em>ohne</em> Klammern. Wir übergeben die Funktion selbst.{" "}
            <code>filter(istVerfuegbar())</code> würde sie sofort aufrufen und
            das Resultat übergeben — das ergibt einen Fehler.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Beispiel 2 — Funktionen, die Funktionen bauen</h2>
          <p>
            Manchmal braucht man dasselbe Prädikat mit unterschiedlichen Werten:{" "}
            <em>teurer als 50</em>, <em>teurer als 100</em>. Statt jedes Mal
            eine neue Funktion zu schreiben, schreibt man eine{" "}
            <strong>Funktionen-Fabrik</strong>: eine Funktion, die eine Funktion
            zurückgibt.
          </p>
          <JSTerminal filename="funktionen-fabrik.js">
            {`const produkte = [
  { name: "Maus", preis: 25, lager: 12 },
  { name: "Tastatur", preis: 89, lager: 0 },
  { name: "Monitor", preis: 249, lager: 3 },
  { name: "Kabel", preis: 9.9, lager: 40 },
];

// Eine Funktion, die ein Prädikat zurückgibt
function teurerAls(grenze) {
  return (produkt) => produkt.preis > grenze;
}

// teurerAls(50) ERGIBT eine Funktion:
const istTeuer = teurerAls(50);
console.log(typeof istTeuer);       // "function"
console.log(istTeuer(produkte[0])); // false (25)

// Damit lassen sich Filter massschneidern
console.log(produkte.filter(teurerAls(50)).map((p) => p.name));
console.log(produkte.filter(teurerAls(200)).map((p) => p.name));

// Dasselbe für Transformationen
const rabattVon = (prozent) => (preis) => preis * (1 - prozent / 100);

const mit20Prozent = rabattVon(20);
console.log(produkte.map((p) => p.preis).map(mit20Prozent));

// Sehr nützlich: Sortier-Funktionen erzeugen
const nach = (schluessel) => (a, b) => a[schluessel] - b[schluessel];

console.log(produkte.toSorted(nach("preis")).map((p) => p.name));
console.log(produkte.toSorted(nach("lager")).map((p) => p.name));`}
          </JSTerminal>
          <p>
            Der Trick: <code>teurerAls(50)</code> merkt sich den Wert{" "}
            <code>50</code> in der zurückgegebenen Funktion. Damit baut man aus
            einer Vorlage beliebig viele konkrete Prüfungen.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Zusammenfassung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Spickzettel</h2>
          <ul>
            <li>
              <code>map</code> — gleich viele Elemente, verändert
            </li>
            <li>
              <code>filter</code> — weniger Elemente, unverändert
            </li>
            <li>
              <code>reduce</code> — ein einziger Wert am Schluss
            </li>
            <li>
              <code>find</code>, <code>some</code>, <code>every</code> —
              Suchfragen
            </li>
            <li>
              Alle drei erzeugen <strong>neue</strong> Listen — das Original
              bleibt heil — auch <code>toSorted</code>. Nur das ältere{" "}
              <code>sort</code> und <code>push</code> verändern direkt.
            </li>
            <li>
              Arrow-Funktion ohne Klammern gibt automatisch zurück:{" "}
              <code>(x) =&gt; x * 2</code>. Mit <code>&#123; &#125;</code>{" "}
              braucht es ein <code>return</code>.
            </li>
            <li>
              Eigene <strong>Prädikate</strong> und{" "}
              <strong>Transformationen</strong> benennen — übergeben ohne
              Klammern: <code>filter(istVerfuegbar)</code>.
            </li>
            <li>
              Eine <strong>Funktionen-Fabrik</strong> gibt eine Funktion zurück:{" "}
              <code>filter(teurerAls(50))</code>.
            </li>
          </ul>
          <p>
            <strong>Jetzt geht es an die Aufgaben.</strong> Halten Sie diese
            Seite als Nachschlagewerk offen.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
