import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";

export default function JSFunktionenTheorie() {
  return (
    <>
      <Section>
        <h2>Theorie: Funktionen</h2>

        <p>
          Funktionen sind eines der wichtigsten Konzepte in JavaScript. Sie
          erlauben uns, Code-Blöcke zu definieren und wiederzuverwenden. In
          diesem Kapitel lernen wir, wie man Funktionen erstellt, den
          Unterschied zwischen normalen Funktionen und Arrow-Funktionen kennen,
          und wie man Callback-Funktionen verwendet.
        </p>

        <h3>Lernziele</h3>
        <ul>
          <li>
            Sie wissen, wie man eine Funktion mit <code>function</code>{" "}
            definiert.
          </li>
          <li>
            Sie kennen den Unterschied zwischen normalen Funktionen und
            Arrow-Funktionen.
          </li>
          <li>Sie verstehen, was Parameter und Rückgabewerte sind.</li>
          <li>
            Sie können <code>forEach</code>, <code>map</code>,{" "}
            <code>filter</code> und <code>reduce</code> verwenden.
          </li>
          <li>
            Sie wissen, wie man Schleifen mit Callback-Funktionen ersetzt.
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Was ist eine Funktion?</h2>
        <p>
          Eine Funktion ist ein Block von Code, der einen bestimmten Namen hat
          und bei Bedarf ausgeführt werden kann. Funktionen können{" "}
          <strong>Parameter</strong> (Eingabewerte) haben und einen{" "}
          <strong>Rückgabewert</strong> (Ausgabewert) liefern.
        </p>

        <h3>Einfache Funktion ohne Parameter</h3>
        <CodeBlock lang="javascript">
          {`
// Funktion definieren
function begruessen() {
  console.log("Hallo Welt!");
}

// Funktion aufrufen
begruessen(); // Ausgabe: "Hallo Welt!"
`}
        </CodeBlock>

        <h3>Funktion mit Parametern und Rückgabewert</h3>
        <CodeBlock lang="javascript">
          {`
// Funktion mit Parametern definieren
function addiere(a, b) {
  return a + b;
}

// Funktion aufrufen und Ergebnis speichern
let resultat = addiere(5, 3);
console.log(resultat); // Ausgabe: 8
`}
        </CodeBlock>

        <p>Hier sehen Sie:</p>
        <ul>
          <li>
            <code>function</code> ist das Schlüsselwort zum Definieren einer
            Funktion
          </li>
          <li>
            <code>addiere</code> ist der Name der Funktion
          </li>
          <li>
            <code>(a, b)</code> sind die Parameter
          </li>
          <li>
            <code>return</code> gibt einen Wert zurück
          </li>
          <li>
            <code>addiere(5, 3)</code> ruft die Funktion auf und übergibt die
            Argumente
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Funktionen vs. Arrow-Funktionen</h2>
        <p>
          In JavaScript gibt es zwei Hauptarten, Funktionen zu definieren:{" "}
          <strong>normale Funktionen</strong> und{" "}
          <strong>Arrow-Funktionen</strong> (Pfeil-Funktionen).
        </p>

        <h3>Normale Funktion</h3>
        <CodeBlock lang="javascript">
          {`
// Normale Funktion definieren
function Quadrat(x) {
  return x * x;
}

console.log(Quadrat(5)); // Ausgabe: 25
`}
        </CodeBlock>

        <h3>Arrow-Funktion</h3>
        <CodeBlock lang="javascript">
          {`
// Arrow-Funktion definieren
const Quadrat = (x) => {
  return x * x;
};

console.log(Quadrat(5)); // Ausgabe: 25
`}
        </CodeBlock>

        <h3>Unterschiede im Detail</h3>

        <h4>Einfache Arrow-Funktion mit einem Parameter</h4>
        <p>Bei einem Parameter können die Klammern weggelassen werden:</p>
        <CodeBlock lang="javascript">
          {`
// Mit Klammern
const verdoppeln = (x) => {
  return x * 2;
};

// Ohne Klammern bei einem Parameter
const verdoppeln = x => x * 2;
`}
        </CodeBlock>

        <h4>Arrow-Funktion ohne Klammern und ohne Block</h4>
        <p>
          Wenn die Funktion nur einen Rückgabewert hat, können wir{" "}
          <code>{"{"}</code> <code>{"}"}</code> und <code>return</code>{" "}
          weglassen:
        </p>
        <CodeBlock lang="javascript">
          {`
// Vollständige Schreibweise
const begruessen = (name) => {
  return "Hallo " + name;
};

// Kurzschreibweise (impliziter Return)
const begruessen = (name) => "Hallo " + name;
`}
        </CodeBlock>

        <h4>Zusammenfassung der Unterschiede</h4>
        <table>
          <thead>
            <tr>
              <th>Merkmal</th>
              <th>Normale Funktion</th>
              <th>Arrow-Funktion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Schlüsselwort</td>
              <td>
                <code>function</code>
              </td>
              <td>
                <code>const</code> / <code>let</code> / <code>var</code>
              </td>
            </tr>
            <tr>
              <td>Syntax</td>
              <td>
                <code>function name() {"{"}</code> <code>{"}"}</code>
              </td>
              <td>
                <code>const name = () =&gt; {"{"}</code> <code>{"}"}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>this</code>-Binding
              </td>
              <td>Dynamisch</td>
              <td>Lexikalisch</td>
            </tr>
            <tr>
              <td>Als Konstruktor</td>
              <td>
                Ja (<code>new</code>)
              </td>
              <td>Nein</td>
            </tr>
            <tr>
              <td>
                <code>arguments</code>-Objekt
              </td>
              <td>Ja</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Wichtig:</strong> Arrow-Funktionen haben kein eigenes{" "}
          <code>this</code>. Das bedeutet, sie erben <code>this</code> vom
          umgebenden Kontext. Das ist besonders nützlich in Callbacks und
          Event-Handlern.
        </p>
      </Section>

      <Section>
        <h2>Callback-Funktionen</h2>
        <p>
          Eine <strong>Callback-Funktion</strong> ist eine Funktion, die als
          Argument an eine andere Funktion übergeben wird. Die aufgerufene
          Funktion kann dann den Callback zu einem bestimmten Zeitpunkt
          ausführen.
        </p>

        <h3>Einfaches Beispiel</h3>
        <CodeBlock lang="javascript">
          {`
// Normale Funktion
function begruessen(name) {
  console.log("Hallo " + name);
}

// Callback-Funktion (anonyme Funktion)
function wiederhole(action, count) {
  for (let i = 0; i < count; i++) {
    action();
  }
}

// Callback übergeben
wiederhole(() => begruessen("Maria"), 3);
// Ausgabe:
// "Hallo Maria"
// "Hallo Maria"
// "Hallo Maria"
`}
        </CodeBlock>
      </Section>

      <Section>
        <h2>Array-Methoden mit Callbacks</h2>
        <p>
          JavaScript-Arrays bieten mehrere eingebaute Methoden, die
          Callback-Funktionen verwenden. Diese machen den Umgang mit Daten viel
          einfacher und lesbarer.
        </p>

        <h3>forEach - Elemente durchgehen</h3>
        <p>
          <code>forEach</code> führt eine Funktion für jedes Element eines
          Arrays aus.
        </p>

        <h4>Mit forEach</h4>
        <CodeBlock lang="javascript">
          {`
const namen = ["Anna", "Beat", "Claudia", "Daniel"];

// forEach mit Arrow-Funktion
namen.forEach((name, index) => {
  console.log((index + 1) + ": " + name);
});

// Ausgabe:
// 1: Anna
// 2: Beat
// 3: Claudia
// 4: Daniel
`}
        </CodeBlock>

        <h4>Mit normaler Schleife (Alternative)</h4>
        <CodeBlock lang="javascript">
          {`
const namen = ["Anna", "Beat", "Claudia", "Daniel"];

// for-Schleife
for (let i = 0; i < namen.length; i++) {
  console.log((i + 1) + ": " + namen[i]);
}
`}
        </CodeBlock>

        <p>
          <strong>Unterschied:</strong> <code>forEach</code> ist kürzer und
          lesbarer. Die normale Schleife gibt Ihnen mehr Kontrolle (z.B. frühes
          Beenden mit <code>break</code>).
        </p>

        <h3>map - Array transformieren</h3>
        <p>
          <code>map</code> erstellt ein neues Array, indem die Callback-Funktion
          auf jedes Element angewendet wird.
        </p>

        <h4>Mit map</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// map: Jedes Element verdoppeln
const verdoppelte = zahlen.map((zahl) => {
  return zahl * 2;
});

console.log(verdoppelte); // [2, 4, 6, 8, 10]
console.log(zahlen);      // [1, 2, 3, 4, 5] (original bleibt unverändert)
`}
        </CodeBlock>

        <h4>Mit normaler Schleife (Alternative)</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife mit neuem Array
const verdoppelte = [];
for (let i = 0; i < zahlen.length; i++) {
  verdoppelte.push(zahlen[i] * 2);
}

console.log(verdoppelte); // [2, 4, 6, 8, 10]
`}
        </CodeBlock>

        <p>
          <strong>Wichtig:</strong> <code>map</code> verändert das
          Original-Array <strong>nicht</strong>. Es erstellt immer ein neues
          Array.
        </p>

        <h4>Praktisches Beispiel: HTML-Elemente erstellen</h4>
        <CodeBlock lang="javascript">
          {`
const namen = ["Anna", "Beat", "Claudia"];

// Jedes Element als HTML-Listenelement
const liElemente = namen.map((name) => {
  return "<li>" + name + "</li>";
});

const ulElement = "<ul>" + liElemente.join("") + "</ul>";
console.log(ulElement);
// <ul><li>Anna</li><li>Beat</li><li>Claudia</li></ul>
`}
        </CodeBlock>

        <h3>filter - Elemente herausfiltern</h3>
        <p>
          <code>filter</code> erstellt ein neues Array mit allen Elementen, die
          die Bedingung erfüllen.
        </p>

        <h4>Mit filter</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Nur gerade Zahlen filtern
const geradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 === 0;
});

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`}
        </CodeBlock>

        <h4>Mit normaler Schleife (Alternative)</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for-Schleife mit neuem Array
const geradeZahlen = [];
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`}
        </CodeBlock>

        <h4>Praktisches Beispiel: Namen filtern</h4>
        <CodeBlock lang="javascript">
          {`
const schueler = [
  { name: "Anna", alter: 16 },
  { name: "Beat", alter: 14 },
  { name: "Claudia", alter: 18 },
  { name: "Daniel", alter: 15 },
];

// Nur Erwachsene (ab 16 Jahre) filtern
const erwachsene = schueler.filter((person) => {
  return person.alter >= 16;
});

console.log(erwachsene);
// [{ name: "Anna", alter: 16 }, { name: "Claudia", alter: 18 }]
`}
        </CodeBlock>

        <h3>reduce - Werte zusammenrechnen</h3>
        <p>
          <code>reduce</code> reduziert ein Array auf einen einzelnen Wert. Es
          ist sehr flexibel und wird für Berechnungen, Gruppierungen und
          Transformationen verwendet.
        </p>

        <h4>Mit reduce</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// Summe berechnen
const summe = zahlen.reduce((accumulator, zahl) => {
  return accumulator + zahl;
}, 0); // 0 ist der Startwert

console.log(summe); // 15
`}
        </CodeBlock>

        <p>
          <strong>Erklärung:</strong>
        </p>
        <ul>
          <li>
            <code>accumulator</code> ist der gesammelte Wert (wächst mit jedem
            Schritt)
          </li>
          <li>
            <code>zahl</code> ist das aktuelle Element
          </li>
          <li>
            <code>0</code> ist der Startwert des Akkumulators
          </li>
        </ul>

        <h4>reduce Schritt für Schritt</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// reduce berechnet:
// Schritt 1: 0 + 1 = 1
// Schritt 2: 1 + 2 = 3
// Schritt 3: 3 + 3 = 6
// Schritt 4: 6 + 4 = 10
// Schritt 5: 10 + 5 = 15
// Ergebnis: 15
`}
        </CodeBlock>

        <h4>Mit normaler Schleife (Alternative)</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife
let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
  summe = summe + zahlen[i];
}

console.log(summe); // 15
`}
        </CodeBlock>

        <h4>Praktisches Beispiel: Produkt berechnen</h4>
        <CodeBlock lang="javascript">
          {`
const zahlen = [2, 3, 4, 5];

// Produkt aller Zahlen
const produkt = zahlen.reduce((accumulator, zahl) => {
  return accumulator * zahl;
}, 1); // Startwert ist 1 (neutrales Element der Multiplikation)

console.log(produkt); // 120 (2 * 3 * 4 * 5)
`}
        </CodeBlock>

        <h4>reduce mit Objekten</h4>
        <CodeBlock lang="javascript">
          {`
const schueler = [
  { name: "Anna", note: 5.5 },
  { name: "Beat", note: 4.0 },
  { name: "Claudia", note: 5.0 },
  { name: "Daniel", note: 6.0 },
];

// Durchschnittsnote berechnen
const durchschnitt = schueler.reduce((summe, schueler) => {
  return summe + schueler.note;
}, 0) / schueler.length;

console.log(durchschnitt); // 5.125
`}
        </CodeBlock>
      </Section>

      <Section>
        <h2>Vergleich: Alle Methoden im Überblick</h2>
        <table>
          <thead>
            <tr>
              <th>Methode</th>
              <th>Zweck</th>
              <th>Gibt zurück</th>
              <th>Verändert Original?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>forEach</code>
              </td>
              <td>Code für jedes Element ausführen</td>
              <td>
                <code>undefined</code>
              </td>
              <td>Nein</td>
            </tr>
            <tr>
              <td>
                <code>map</code>
              </td>
              <td>Element transformieren</td>
              <td>Neues Array</td>
              <td>Nein</td>
            </tr>
            <tr>
              <td>
                <code>filter</code>
              </td>
              <td>Elemente herausfiltern</td>
              <td>Neues Array</td>
              <td>Nein</td>
            </tr>
            <tr>
              <td>
                <code>reduce</code>
              </td>
              <td>Werte zusammenrechnen</td>
              <td>Einzelner Wert</td>
              <td>Nein</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section>
        <h2>Kombinierte Beispiele</h2>
        <p>Oft werden mehrere Methoden kombiniert:</p>

        <h3>Beispiel: Namen filtern und transformieren</h3>
        <CodeBlock lang="javascript">
          {`
const schueler = [
  { name: "Anna", alter: 16 },
  { name: "Beat", alter: 14 },
  { name: "Claudia", alter: 18 },
  { name: "Daniel", alter: 15 },
];

// Nur Erwachsene auswählen und Namen gross schreiben
const erwachseneNamen = schueler
  .filter((person) => person.alter >= 16)
  .map((person) => person.name.toUpperCase());

console.log(erwachseneNamen); // ["ANNA", "CLAUDIA"]
`}
        </CodeBlock>

        <h3>Beispiel: Summe der Noten von erwachsenen Schülern</h3>
        <CodeBlock lang="javascript">
          {`
const schueler = [
  { name: "Anna", note: 5.5, alter: 16 },
  { name: "Beat", note: 4.0, alter: 14 },
  { name: "Claudia", note: 5.0, alter: 18 },
  { name: "Daniel", note: 6.0, alter: 15 },
];

// Summe der Noten von erwachsenen Schülern
const noteSumme = schueler
  .filter((person) => person.alter >= 16)
  .reduce((summe, person) => summe + person.note, 0);

console.log(noteSumme); // 10.5
`}
        </CodeBlock>
      </Section>

      <Section>
        <h2>Übungen</h2>

        <h3>Übung 1: forEach mit console.log</h3>
        <CodeBlock lang="javascript">
          {`
const wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

// Aufgabe: Verwende forEach, um jeden Wochentag auszugeben
// mit dem Format: "Tag 1: Montag"
`}
        </CodeBlock>

        <details>
          <summary>Lösung anzeigen</summary>
          <CodeBlock lang="javascript">
            {`
wochentage.forEach((tag, index) => {
  console.log("Tag " + (index + 1) + ": " + tag);
});
`}
          </CodeBlock>
        </details>

        <h3>Übung 2: map zur Transformation</h3>
        <CodeBlock lang="javascript">
          {`
const preise = [10, 20, 30, 40, 50];

// Aufgabe: Erstelle ein neues Array mit den Preisen inkl. 8% MwSt.
// (Preis * 1.08)
`}
        </CodeBlock>

        <details>
          <summary>Lösung anzeigen</summary>
          <CodeBlock lang="javascript">
            {`
const preiseMwst = preise.map((preis) => {
  return preis * 1.08;
});

console.log(preiseMwst); // [10.8, 21.6, 32.4, 43.2, 54]
`}
          </CodeBlock>
        </details>

        <h3>Übung 3: filter mit Bedingung</h3>
        <CodeBlock lang="javascript">
          {`
const werte = [1, -2, 3, -4, 5, -6, 7, -8];

// Aufgabe: Filtere alle positiven Zahlen
`}
        </CodeBlock>

        <details>
          <summary>Lösung anzeigen</summary>
          <CodeBlock lang="javascript">
            {`
const positiveWerte = werte.filter((wert) => {
  return wert > 0;
});

console.log(positiveWerte); // [1, 3, 5, 7]
`}
          </CodeBlock>
        </details>

        <h3>Übung 4: reduce zur Berechnung</h3>
        <CodeBlock lang="javascript">
          {`
const werte = [5, 10, 15, 20, 25];

// Aufgabe: Berechne das Produkt aller Werte
`}
        </CodeBlock>

        <details>
          <summary>Lösung anzeigen</summary>
          <CodeBlock lang="javascript">
            {`
const produkt = werte.reduce((accumulator, wert) => {
  return accumulator * wert;
}, 1);

console.log(produkt); // 1875000
`}
          </CodeBlock>
        </details>
      </Section>

      <Section>
        <h2>Wann welche Methode verwenden?</h2>
        <ul>
          <li>
            <strong>
              <code>forEach</code>
            </strong>
            : Wenn Sie etwas mit jedem Element tun möchten (z.B. DOM-Elemente
            erstellen, console.log)
          </li>
          <li>
            <strong>
              <code>map</code>
            </strong>
            : Wenn Sie ein neues Array mit transformierten Werten brauchen
          </li>
          <li>
            <strong>
              <code>filter</code>
            </strong>
            : Wenn Sie eine Teilmenge des Arrays brauchen
          </li>
          <li>
            <strong>
              <code>reduce</code>
            </strong>
            : Wenn Sie einen einzelnen Wert aus dem Array berechnen wollen
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Zusammenfassung</h2>
        <p>
          Funktionen sind ein fundamentales Konzept in JavaScript. Sie erlauben
          uns, Code zu organisieren und wiederzuverwenden. Der Unterschied
          zwischen normalen Funktionen und Arrow-Funktionen liegt vor allem in
          der Syntax und im Verhalten von <code>this</code>. Callback-Funktionen
          sind Funktionen, die als Argument übergeben werden, und werden häufig
          bei Array-Methoden wie <code>forEach</code>, <code>map</code>,{" "}
          <code>filter</code> und <code>reduce</code> verwendet. Diese Methoden
          machen den Umgang mit Arrays viel eleganter und lesbarer als normale
          Schleifen.
        </p>
      </Section>
    </>
  );
}
