import AlgoViz, {
  binarySearchCode,
  linearSearchCode,
  makeBinarySearchSteps,
  makeLinearSearchSteps,
  maximumCode,
  maximumSteps,
  reverseCode,
  reverseSteps,
} from "@components/gym/AlgoViz";
import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

const linearSearch = makeLinearSearchSteps(9);
const binarySearch = makeBinarySearchSteps(9);

export default function JSStandardAlgorithmen() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Einstieg
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Einfache Standard-Algorithmen</h2>
          <p>
            Ein <strong>Algorithmus</strong> ist eine eindeutige
            Handlungsvorschrift, die ein Problem in endlich vielen Schritten
            löst — ein Rezept. In fast jedem Programm tauchen dabei dieselben
            kleinen Bausteine immer wieder auf. Wer diese{" "}
            <strong>Muster</strong> kennt, löst neue Probleme viel schneller —
            man erkennt: &laquo;Ah, das ist ja im Grunde eine Suche.&raquo;
          </p>
          <p>
            Wir starten mit den einfachen Mustern. Erst danach nehmen wir uns
            mit <strong>Bubble Sort</strong> und <strong>Quicksort</strong> die
            anspruchsvolleren Sortieralgorithmen vor.
          </p>

          <h3>Die sechs Muster dieser Seite</h3>
          <ol>
            <li>
              <strong>Suchen</strong> — lineare Suche und binäre Suche
            </li>
            <li>
              <strong>Extremwert finden</strong> — Maximum und Minimum
            </li>
            <li>
              <strong>Akkumulieren</strong> — Summe, Durchschnitt, Zählen
            </li>
            <li>
              <strong>Zwei Zeiger</strong> — umkehren, Palindrom prüfen
            </li>
            <li>
              <strong>Häufigkeiten zählen</strong> — mit einem Objekt als
              Zähler-Tabelle
            </li>
            <li>
              <strong>Vergleichen und normalisieren</strong> — Anagramme
              erkennen
            </li>
          </ol>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Lineare Suche: Idee
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>1a. Lineare Suche</h2>
          <p>
            Die einfachste Suche überhaupt: von vorne nach hinten durchgehen und
            jedes Element anschauen, bis man das gesuchte findet. Wie wenn man
            eine unsortierte Schublade durchwühlt.
          </p>
          <ul>
            <li>Funktioniert immer — die Liste muss nicht sortiert sein.</li>
            <li>
              Gibt üblicherweise den <strong>Index</strong> zurück, oder{" "}
              <code>-1</code>, wenn nichts gefunden wurde.
            </li>
            <li>
              Im schlechtesten Fall müssen alle <code>n</code> Elemente geprüft
              werden → <code>O(n)</code>.
            </li>
          </ul>
        </section>
      </ScrollSection>

      <ScrollSection area="breakout">
        <section>
          <h2>Lineare Suche — Visualisierung</h2>
          <p>
            Gesucht wird die <strong>9</strong>. Gelb heisst &laquo;wird gerade
            geprüft&raquo;, türkis heisst &laquo;gefunden&raquo;.
          </p>
          <AlgoViz
            title="Lineare Suche nach der 9"
            initialArray={[4, 7, 2, 9, 1, 5]}
            generate={linearSearch}
            code={linearSearchCode}
            legend="search"
          />
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Lineare Suche — Code</h2>
          <JSTerminal filename="lineare-suche.js">
            {`function lineareSuche(liste, gesucht) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === gesucht) {
      return i; // gefunden -> Index zurückgeben, Funktion beenden
    }
  }
  return -1; // nicht gefunden
}

const zahlen = [4, 7, 2, 9, 1, 5];
console.log(lineareSuche(zahlen, 9));  // 3
console.log(lineareSuche(zahlen, 42)); // -1

// JavaScript hat das eingebaut:
console.log(zahlen.indexOf(9));     // 3
console.log(zahlen.includes(42));   // false
console.log(zahlen.find((z) => z > 5)); // 7`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Binäre Suche
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>1b. Binäre Suche</h2>
          <p>
            Wenn die Liste <strong>sortiert</strong> ist, geht es viel
            schneller. Wir schauen in die Mitte und können danach die Hälfte der
            Liste sofort ausschliessen — wie beim Nachschlagen im Wörterbuch
            oder beim Zahlenraten &laquo;höher oder tiefer?&raquo;.
          </p>
          <p>
            <strong>Warum das so stark ist:</strong> Bei 1'000'000 Einträgen
            braucht die lineare Suche bis zu 1'000'000 Vergleiche, die binäre
            Suche nur <strong>20</strong>. Jeder Schritt halbiert die
            Möglichkeiten.
          </p>
          <table>
            <thead>
              <tr>
                <th>Anzahl Elemente</th>
                <th>Lineare Suche</th>
                <th>Binäre Suche</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>10</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1'000</td>
                <td>1'000</td>
                <td>10</td>
              </tr>
              <tr>
                <td>1'000'000</td>
                <td>1'000'000</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      <ScrollSection area="breakout">
        <section>
          <h2>Binäre Suche — Visualisierung</h2>
          <p>
            Gesucht wird wieder die <strong>9</strong>. Die Liste wird
            automatisch sortiert. Lila ist die geprüfte Mitte, ausgegraute
            Balken sind bereits ausgeschlossen.
          </p>
          <AlgoViz
            title="Binäre Suche nach der 9"
            initialArray={[1, 3, 4, 6, 8, 9, 11, 14]}
            generate={binarySearch}
            code={binarySearchCode}
            legend="search"
          />
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Binäre Suche — Code</h2>
          <JSTerminal filename="binaere-suche.js">
            {`function binaereSuche(liste, gesucht) {
  let links = 0;
  let rechts = liste.length - 1;
  let schritte = 0;

  while (links <= rechts) {
    schritte++;
    const mitte = Math.floor((links + rechts) / 2);

    if (liste[mitte] === gesucht) {
      console.log("Gefunden nach " + schritte + " Schritten");
      return mitte;
    }

    if (liste[mitte] < gesucht) {
      links = mitte + 1;   // rechte Hälfte weitersuchen
    } else {
      rechts = mitte - 1;  // linke Hälfte weitersuchen
    }
  }
  return -1;
}

const sortiert = [1, 3, 4, 6, 8, 9, 11, 14];
console.log(binaereSuche(sortiert, 9));   // 5
console.log(binaereSuche(sortiert, 10));  // -1

// Achtung: bei unsortierten Listen liefert sie falsche Resultate!`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Maximum
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>2. Extremwert finden (Maximum / Minimum)</h2>
          <p>
            Das Muster: Wir merken uns einen &laquo;bisherigen Champion&raquo;
            und vergleichen ihn mit jedem weiteren Element. Ist ein Element
            besser, wird es der neue Champion.
          </p>
          <p>
            <strong>Wichtig:</strong> Als Startwert nehmen wir das{" "}
            <em>erste Element</em> der Liste — nicht 0! Sonst funktioniert der
            Algorithmus bei negativen Zahlen nicht.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="breakout">
        <section>
          <h2>Maximum — Visualisierung</h2>
          <AlgoViz
            title="Das grösste Element finden"
            initialArray={[3, 8, 2, 9, 4, 6]}
            generate={maximumSteps}
            code={maximumCode}
            legend="search"
          />
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Maximum — Code</h2>
          <JSTerminal filename="maximum.js">
            {`function maximum(liste) {
  let groesstes = liste[0]; // Startwert: erstes Element!

  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > groesstes) {
      groesstes = liste[i];
    }
  }
  return groesstes;
}

console.log(maximum([3, 8, 2, 9, 4, 6]));    // 9
console.log(maximum([-5, -2, -9]));          // -2

// Variante: Position des Maximums
function maximumIndex(liste) {
  let besterIndex = 0;
  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > liste[besterIndex]) besterIndex = i;
  }
  return besterIndex;
}

console.log(maximumIndex([3, 8, 2, 9, 4, 6])); // 3

// Variante: Objekt mit dem grössten Wert
const schueler = [
  { name: "Anna", note: 5.5 },
  { name: "Ben", note: 4 },
  { name: "Clara", note: 6 },
];

const beste = schueler.reduce((a, b) => (b.note > a.note ? b : a));
console.log(beste);`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Akkumulieren
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>3. Akkumulieren (Summe, Durchschnitt, Zählen)</h2>
          <p>
            Das wohl häufigste Muster überhaupt: Wir starten mit einem{" "}
            <strong>Sammelbehälter</strong> (meist <code>0</code> oder eine
            leere Liste) und fügen bei jedem Element etwas hinzu.
          </p>
          <ul>
            <li>
              <strong>Summe:</strong> Behälter = 0, jedes Element addieren
            </li>
            <li>
              <strong>Durchschnitt:</strong> Summe geteilt durch Anzahl
            </li>
            <li>
              <strong>Zählen:</strong> Behälter = 0, bei jedem Treffer +1
            </li>
            <li>
              <strong>Produkt:</strong> Behälter = 1, jedes Element
              multiplizieren
            </li>
          </ul>
          <p>
            Laufzeit: immer <code>O(n)</code> — jedes Element wird genau einmal
            angeschaut.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Akkumulieren — Code</h2>
          <JSTerminal filename="akkumulieren.js">
            {`const noten = [5.5, 4, 6, 3.5, 4.5, 5];

// Summe mit einer Schleife
function summe(liste) {
  let total = 0;              // Sammelbehälter
  for (const wert of liste) {
    total = total + wert;     // hinzufügen
  }
  return total;
}

console.log("Summe:", summe(noten));

// Durchschnitt
function durchschnitt(liste) {
  if (liste.length === 0) return 0; // Sonderfall!
  return summe(liste) / liste.length;
}

console.log("Durchschnitt:", durchschnitt(noten).toFixed(2));

// Zählen mit Bedingung
function zaehleUngenuegende(liste) {
  let anzahl = 0;
  for (const note of liste) {
    if (note < 4) anzahl++;
  }
  return anzahl;
}

console.log("Ungenügende:", zaehleUngenuegende(noten));

// Dasselbe mit reduce und filter (Woche 2!)
console.log("Summe:", noten.reduce((a, b) => a + b, 0));
console.log("Ungenügende:", noten.filter((n) => n < 4).length);`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Zwei Zeiger
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>4. Zwei Zeiger (umkehren, Palindrom)</h2>
          <p>
            Statt nur einen Index zu verwenden, arbeiten wir mit{" "}
            <strong>zwei</strong>: einer startet links, einer rechts. Beide
            bewegen sich aufeinander zu, bis sie sich treffen. Damit ist man in
            der Mitte fertig — man braucht nur <code>n / 2</code> Durchgänge.
          </p>
          <ul>
            <li>
              <strong>Umkehren:</strong> die beiden Elemente tauschen
            </li>
            <li>
              <strong>Palindrom prüfen:</strong> die beiden Elemente vergleichen
            </li>
            <li>
              <strong>Paar mit Zielsumme suchen</strong> (in sortierter Liste)
            </li>
          </ul>
        </section>
      </ScrollSection>

      <ScrollSection area="breakout">
        <section>
          <h2>Umkehren — Visualisierung</h2>
          <AlgoViz
            title="Liste umkehren mit zwei Zeigern"
            initialArray={[1, 2, 3, 4, 5, 6]}
            generate={reverseSteps}
            code={reverseCode}
            legend="sort"
          />
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Umkehren und Palindrom — Code</h2>
          <JSTerminal filename="zwei-zeiger.js">
            {`// Liste umkehren
function umkehren(eingabe) {
  const liste = [...eingabe];
  let links = 0;
  let rechts = liste.length - 1;

  while (links < rechts) {
    [liste[links], liste[rechts]] = [liste[rechts], liste[links]];
    links++;
    rechts--;
  }
  return liste;
}

console.log(umkehren([1, 2, 3, 4, 5]));
console.log([1, 2, 3, 4, 5].reverse()); // eingebaut (verändert das Original!)

// Palindrom prüfen: vorwärts wie rückwärts gleich
function istPalindrom(text) {
  // Normalisieren: klein schreiben, nur Buchstaben behalten
  const sauber = text.toLowerCase().replace(/[^a-zäöü]/g, "");

  let links = 0;
  let rechts = sauber.length - 1;

  while (links < rechts) {
    if (sauber[links] !== sauber[rechts]) return false;
    links++;
    rechts--;
  }
  return true;
}

console.log(istPalindrom("Anna"));                     // true
console.log(istPalindrom("Regallager"));               // true
console.log(istPalindrom("Ein Esel lese nie"));        // true
console.log(istPalindrom("Informatik"));               // false`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Häufigkeiten zählen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>5. Häufigkeiten zählen</h2>
          <p>
            Hier zahlt sich Woche 2 richtig aus: Wir benutzen ein{" "}
            <strong>Objekt als Zähler-Tabelle</strong>. Der Schlüssel ist das,
            was wir zählen, der Wert ist die Anzahl.
          </p>
          <p>
            Dieses Muster braucht man ständig: Wortstatistiken, Stimmenzählen,
            Duplikate finden, Anagramme prüfen. Und es ist <code>O(n)</code> —
            man muss die Daten nur ein einziges Mal durchgehen.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Häufigkeiten — Code</h2>
          <JSTerminal filename="haeufigkeiten.js">
            {`function haeufigkeiten(liste) {
  const zaehler = {}; // leeres Objekt als Tabelle

  for (const element of liste) {
    if (zaehler[element] === undefined) {
      zaehler[element] = 1;   // zum ersten Mal gesehen
    } else {
      zaehler[element]++;     // schon bekannt -> erhöhen
    }
  }
  return zaehler;
}

const farben = ["rot", "blau", "rot", "grün", "rot", "blau"];
console.log(haeufigkeiten(farben));
// { rot: 3, blau: 2, grün: 1 }

// Kurzform mit ||
function haeufigkeitenKurz(liste) {
  const zaehler = {};
  for (const e of liste) {
    zaehler[e] = (zaehler[e] || 0) + 1;
  }
  return zaehler;
}

// Buchstaben in einem Wort zählen
console.log(haeufigkeitenKurz("banane".split("")));

// Das häufigste Element finden
function haeufigstes(liste) {
  const zaehler = haeufigkeitenKurz(liste);
  let bestes = null;
  for (const [wert, anzahl] of Object.entries(zaehler)) {
    if (bestes === null || anzahl > zaehler[bestes]) bestes = wert;
  }
  return bestes;
}

console.log(haeufigstes(farben)); // "rot"

// Duplikate entfernen
console.log([...new Set(farben)]); // ["rot", "blau", "grün"]`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Anagramme
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>6. Anagramme erkennen</h2>
          <p>
            Zwei Wörter sind <strong>Anagramme</strong>, wenn sie aus genau
            denselben Buchstaben bestehen — nur in anderer Reihenfolge.
            Beispiele: <code>Lager</code> / <code>Regal</code>,{" "}
            <code>Ampel</code> / <code>Lampe</code>.
          </p>
          <p>
            Es gibt zwei schöne Lösungswege, und beide benutzen etwas, das wir
            schon kennen:
          </p>
          <ol>
            <li>
              <strong>Sortieren:</strong> Beide Wörter buchstabenweise sortieren
              und vergleichen. Kurz und elegant, Laufzeit{" "}
              <code>O(n · log n)</code>.
            </li>
            <li>
              <strong>Zählen:</strong> Die Buchstabenhäufigkeiten beider Wörter
              vergleichen. Etwas länger, aber schneller: <code>O(n)</code>.
            </li>
          </ol>
          <p>
            <strong>Wichtig ist das Normalisieren</strong> vorher:
            Grossschreibung und Leerzeichen sollen keine Rolle spielen.
          </p>
        </section>
      </ScrollSection>

      <ScrollSection area="content">
        <section>
          <h2>Anagramme — Code</h2>
          <JSTerminal filename="anagramme.js">
            {`// Hilfsfunktion: normalisieren
function normalisieren(wort) {
  return wort.toLowerCase().replace(/[^a-zäöü]/g, "");
}

// Weg 1: sortieren und vergleichen
function istAnagramm(a, b) {
  const sortiere = (w) => normalisieren(w).split("").sort().join("");
  return sortiere(a) === sortiere(b);
}

console.log(istAnagramm("Lager", "Regal"));   // true
console.log(istAnagramm("Ampel", "Lampe"));   // true
console.log(istAnagramm("Hallo", "Welt"));    // false

// Weg 2: Buchstaben zählen
function istAnagramm2(a, b) {
  const x = normalisieren(a);
  const y = normalisieren(b);
  if (x.length !== y.length) return false; // schneller Ausschluss

  const zaehler = {};
  for (const buchstabe of x) {
    zaehler[buchstabe] = (zaehler[buchstabe] || 0) + 1;
  }
  for (const buchstabe of y) {
    if (!zaehler[buchstabe]) return false;  // fehlt oder schon aufgebraucht
    zaehler[buchstabe]--;
  }
  return true;
}

console.log(istAnagramm2("Die Post", "Depots i"));
console.log(istAnagramm2("Informatik", "Informatiker"));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Übersicht
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Übersicht der Muster</h2>
          <table>
            <thead>
              <tr>
                <th>Muster</th>
                <th>Typische Frage</th>
                <th>Laufzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lineare Suche</td>
                <td>Kommt X vor? Wo?</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Binäre Suche</td>
                <td>Wo ist X in einer sortierten Liste?</td>
                <td>
                  <code>O(log n)</code>
                </td>
              </tr>
              <tr>
                <td>Extremwert</td>
                <td>Was ist der grösste / kleinste Wert?</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Akkumulieren</td>
                <td>Wie viel insgesamt? Wie viele davon?</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Zwei Zeiger</td>
                <td>Umkehren, Palindrom, Paare finden</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Häufigkeiten zählen</td>
                <td>Wie oft kommt was vor?</td>
                <td>
                  <code>O(n)</code>
                </td>
              </tr>
              <tr>
                <td>Sortieren (nächste Seiten)</td>
                <td>Reihenfolge herstellen</td>
                <td>
                  <code>O(n²)</code> bzw. <code>O(n · log n)</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Auf den nächsten Seiten geht es weiter mit den{" "}
            <strong>Sortieralgorithmen</strong>. Ganz am Schluss schauen wir uns
            an, was diese <code>O(...)</code>-Angaben genau bedeuten und warum
            sie so wichtig sind.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
