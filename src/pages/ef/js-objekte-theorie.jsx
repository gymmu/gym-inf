import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSObjekteTheorie() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Theorie: Objekte</h2>

          <p>
            Objekte sind eines der wichtigsten Datenstrukturen in JavaScript.
            Sie erlauben uns, komplexe Daten in Form von <strong>Schlüssel-Wert-Paaren</strong>{" "}
            zu organisieren. In diesem Kapitel lernen wir, wie man Objekte erstellt,
            auf ihre Eigenschaften zugreift, sie iteriert, neue Objekte erstellt
            und wie man die spezielle JavaScript-Syntax für Spread und
            Dekomposition verwendet.
          </p>

          <h3>Lernziele</h3>
          <ul>
            <li>
              Sie wissen, wie man ein Objekt mit <code>{"{"}</code>{" "}
              <code>{"}"}</code> definiert.
            </li>
            <li>
              Sie können auf Eigenschaften mit Punkt- und Klammernotation
              zugreifen.
            </li>
            <li>
              Sie verstehen, wie man mit <code>Object.keys()</code>,{" "}
              <code>Object.values()</code> und <code>for...in</code> über
              Objekte iteriert.
            </li>
            <li>
              Sie können Objekte mit der <code>spread</code>-Syntax kopieren und
              erweitern.
            </li>
            <li>
              Sie verstehen die <code>decomposition</code>-Syntax zum
              Herauslesen von Eigenschaften.
            </li>
            <li>
              Sie können Funktionen schreiben, die neue Objekte erstellen und
              zurückgeben.
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Was ist ein Objekt? (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Was ist ein Objekt?</h2>
          <p>
            Ein <strong>Objekt</strong> ist eine Sammlung von{" "}
            <strong>Schlüssel-Wert-Paaren</strong>. Jeder Schlüssel ist ein
            String (oder Symbol) und jeder Wert kann ein beliebiger JavaScript-Typ
            sein — eine Zahl, ein String, ein Array, eine Funktion oder sogar ein
            anderes Objekt.
          </p>
          <ul>
            <li>
              <code>{"{"}</code> und <code>{"}"}</code> definieren das Objekt
            </li>
            <li>
              Der <strong>Schlüssel</strong> (links vom <code>:</code>) benennt
              die Eigenschaft
            </li>
            <li>
              Der <strong>Wert</strong> (rechts vom <code>:</code>) ist der
              gespeicherte Wert
            </li>
            <li>
              Kommas <code>,</code> trennen die Schlüssel-Wert-Paare
            </li>
          </ul>
          <p>
            <strong>Vergleich mit Arrays:</strong> Arrays verwenden numerische
            Indizes, während Objekte benannte Schlüssel verwenden. Arrays sind
            für geordnete Listen, Objekte für strukturierte Daten.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Objekt definieren (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Ein einfaches Objekt erstellen</h3>
          <JSTerminal filename="objekt-erstellen.js">
            {`
// Objekt mit Schlüssel-Wert-Paaren
const person = {
  name: "Anna",
  alter: 16,
  adresse: {
    strasse: "Hauptstrasse 1",
    plz: 8000
  },
  faecher: ["Mathe", "Physik", "Informatik"]
};

console.log(person);
// {
//   name: "Anna",
//   alter: 16,
//   adresse: { strasse: "Hauptstrasse 1", plz: 8000 },
//   faecher: ["Mathe", "Physik", "Informatik"]
// }
`}
          </JSTerminal>
        </section>
      </ScrollSection>
      <ScrollSection>
        <section>
          <h3>Objekt mit einer Funktion als Wert</h3>
          <JSTerminal filename="objekt-methode.js">
            {`
// Eine Funktion als Wert (auch "Methode" genannt)
const calculator = {
  addiere: function(a, b) {
    return a + b;
  },
  subtrahiere: (a, b) => a - b
};

console.log(calculator.addiere(5, 3)); // 8
console.log(calculator.subtrahiere(10, 4)); // 6
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Zugriff auf Eigenschaften (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zugriff auf Eigenschaften</h2>
          <p>
            Es gibt zwei Arten, auf die Eigenschaften eines Objekts zuzugreifen:{" "}
            <strong>Punkt-Notation</strong> und <strong>Klammernotation</strong>.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Punkt-Notation (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Punkt-Notation</h3>
          <p>
            Die Punkt-Notation ist die einfachste Art, wenn der Schlüssel ein
            gültiger Bezeichner ist:
          </p>
          <JSTerminal filename="punkt-notation.js">
            {`
const person = {
  name: "Anna",
  alter: 16
};

// Zugriff mit Punkt-Notation
console.log(person.name);   // "Anna"
console.log(person.alter);  // 16

// Änderung einer Eigenschaft
person.alter = 17;
console.log(person.alter);  // 17
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Klammernotation (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Klammernotation</h3>
          <p>
            Die Klammernotation wird verwendet, wenn der Schlüssel ein
            Ausdruck ist oder kein gültiger Bezeichner:
          </p>
          <JSTerminal filename="klammer-notation.js">
            {`
const person = {
  name: "Anna",
  "erste-note": 5.5
};

// Zugriff mit Klammernotation
console.log(person["name"]);           // "Anna"
console.log(person["erste-note"]);     // 5.5

// Dynamischer Zugriff
const key = "name";
console.log(person[key]);              // "Anna"

// Eigenschaft mit Leerzeichen im Namen
const daten = {
  "vornamen": "Anna",
  "nachnamen": "Meier"
};
console.log(daten["vornamen"]);        // "Anna"
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Vergleich Zugriff (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Punkt- vs. Klammernotation</h2>
          <table>
            <thead>
              <tr>
                <th>Merkmal</th>
                <th>Punkt-Notation</th>
                <th>Klammernotation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Syntax</td>
                <td><code>obj.key</code></td>
                <td><code>obj["key"]</code></td>
              </tr>
              <tr>
                <td>Dynamische Schlüssel</td>
                <td>Nein</td>
                <td>Ja</td>
              </tr>
              <tr>
                <td>Spezielle Zeichen</td>
                <td>Nein</td>
                <td>Ja</td>
              </tr>
              <tr>
                <td>Autocomplete</td>
                <td>Ja</td>
                <td>Nein</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Eigenschaften hinzufügen/entfernen (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Eigenschaften hinzufügen und entfernen</h3>
          <JSTerminal filename="eigenschaften-aendern.js">
            {`
const person = {
  name: "Anna",
  alter: 16
};

// Neue Eigenschaft hinzufügen
person.email = "anna@example.com";
person["telefon"] = "079 123 45 67";

console.log(person);
// { name: "Anna", alter: 16, email: "anna@example.com", telefon: "079 123 45 67" }

// Eigenschaft entfernen
delete person.telefon;

console.log(person);
// { name: "Anna", alter: 16, email: "anna@example.com" }

// Existenz prüfen
console.log("name" in person);    // true
console.log("email" in person);   // true
console.log("telefon" in person); // false
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Über Objekte iterieren (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Über Objekte iterieren</h2>
          <p>
            Es gibt mehrere Möglichkeiten, über die Eigenschaften eines Objekts
            zu iterieren:
          </p>
          <ul>
            <li>
              <code>Object.keys(obj)</code> — gibt ein Array aller Schlüssel
              zurück
            </li>
            <li>
              <code>Object.values(obj)</code> — gibt ein Array aller Werte
              zurück
            </li>
            <li>
              <code>Object.entries(obj)</code> — gibt ein Array von{" "}
              <code>[key, value]</code>-Paaren zurück
            </li>
            <li>
              <code>for...in</code> — Schleife über alle Schlüssel
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — Object.keys/values/entries (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Object.keys(), Object.values(), Object.entries()</h3>
          <JSTerminal filename="object-methoden.js">
            {`
const person = {
  name: "Anna",
  alter: 16,
  adresse: "Zürich"
};

// Alle Schlüssel erhalten
const keys = Object.keys(person);
console.log(keys); // ["name", "alter", "adresse"]

// Alle Werte erhalten
const values = Object.values(person);
console.log(values); // ["Anna", 16, "Zürich"]

// Als [key, value]-Paare
const entries = Object.entries(person);
console.log(entries);
// [["name", "Anna"], ["alter", 16], ["adresse", "Zürich"]]

// Mit forEach über entries iterieren
entries.forEach(([key, value]) => {
  console.log(key + ": " + value);
});
// name: Anna
// alter: 16
// adresse: Zürich
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — for...in (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>for...in Schleife</h3>
          <JSTerminal filename="for-in.js">
            {`
const person = {
  name: "Anna",
  alter: 16,
  adresse: "Zürich"
};

// for...in über alle Schlüssel
for (const key in person) {
  console.log(key + ": " + person[key]);
}
// name: Anna
// alter: 16
// adresse: Zürich

// Nur eigene Eigenschaften prüfen
const obj = { name: "Test" };
obj.prototype.eigenschaft = "geerbt";

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ": " + obj[key]);
  }
}
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 12 — Iteration Vergleich (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Welche Iterations-Methode verwenden?</h2>
          <table>
            <thead>
              <tr>
                <th>Methode</th>
                <th>Gibt zurück</th>
                <th>Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Object.keys()</code></td>
                <td>Array von Schlüsseln</td>
                <td>Wenn Sie die Namen der Eigenschaften brauchen</td>
              </tr>
              <tr>
                <td><code>Object.values()</code></td>
                <td>Array von Werten</td>
                <td>Wenn Sie nur die Werte brauchen</td>
              </tr>
              <tr>
                <td><code>Object.entries()</code></td>
                <td>Array von [key, value]</td>
                <td>Wenn Sie beide brauchen, z.B. für map/filter</td>
              </tr>
              <tr>
                <td><code>for...in</code></td>
                <td>-</td>
                <td>Wenn Sie jede Eigenschaft einzeln verarbeiten</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 13 — Spread-Syntax (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Spread-Syntax (...)</h2>
          <p>
            Die <strong>Spread-Syntax</strong> (<code>...</code>) ermöglicht es,
            ein Objekt zu "expandieren" — also seine Eigenschaften an einer
            anderen Stelle einzufügen. Damit können wir Objekte kopieren und
            erweitern, ohne das Original zu verändern.
          </p>
          <ul>
            <li>
              <strong>Copy:</strong> <code>{"{"}...obj{"}"}</code> erstellt eine
              flache Kopie
            </li>
            <li>
              <strong>Extend:</strong> <code>{"{"}...obj, neu: wert{"}"}</code>{" "}
              fügt neue Eigenschaften hinzu
            </li>
            <li>
              <strong>Merge:</strong>{" "}
              <code>{"{"}...obj1, ...obj2{"}"}</code> verbindet zwei Objekte
            </li>
          </ul>
          <p>
            <strong>Wichtig:</strong> Die Spread-Syntax erstellt nur eine{" "}
            <strong>flache Kopie</strong>. Verschachtelte Objekte werden nicht
            kopiert, sondern referenziert.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 14 — Spread: Code (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Objekte kopieren und erweitern</h3>
          <JSTerminal filename="spread-beispiel.js">
            {`
const person = {
  name: "Anna",
  alter: 16
};

// 1. Objekt kopieren (flache Kopie)
const kopie = { ...person };
console.log(kopie); // { name: "Anna", alter: 16 }

// 2. Eigenschaften hinzufügen
const erweitert = { ...person, email: "anna@example.com" };
console.log(erweitert);
// { name: "Anna", alter: 16, email: "anna@example.com" }

// 3. Eigenschaften überschreiben
const geaendert = { ...person, alter: 17 };
console.log(geaendert);
// { name: "Anna", alter: 17 }
console.log(person);
// { name: "Anna", alter: 16 } (Original bleibt unverändert!)

// 4. Zwei Objekte verbinden
const adresse = { strasse: "Hauptstrasse 1", plz: 8000 };
const kombiniert = { ...person, ...adresse };
console.log(kombiniert);
// { name: "Anna", alter: 16, strasse: "Hauptstrasse 1", plz: 8000 }
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 15 — Spread: Verschachtelte Objekte (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Vorsicht bei verschachtelten Objekten</h3>
          <JSTerminal filename="spread-verschachtelt.js">
            {`
const adresse = { strasse: "Hauptstrasse 1" };

const person = {
  name: "Anna",
  adresse: adresse
};

// Flache Kopie — adresse wird NICHT kopiert!
const kopie = { ...person };

// Änderung wirkt sich auf beide aus!
kopie.adresse.strasse = "Neue Strasse 10";

console.log(person.adresse.strasse);
// "Neue Strasse 10" (Original wurde verändert!)

// Tiefe Kopie mit manueller Verschachtelung
const tiefeKopie = {
  ...person,
  adresse: { ...person.adresse }
};

tiefeKopie.adresse.strasse = "Andere Strasse";
console.log(person.adresse.strasse);
// "Neue Strasse 10" (Original bleibt sicher)
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 16 — Dekomposition (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Dekomposition (Destructuring)</h2>
          <p>
            Die <strong>Dekomposition</strong> (<code>destructure</code>) ist die{" "}
            <strong>umgekehrte Operation</strong> zur Spread-Syntax. Statt
            Eigenschaften zu "expandieren", "extrahieren" wir sie aus einem
            Objekt und weisen sie Variablen zu.
          </p>
          <ul>
            <li>
              <strong>Extrahieren:</strong>{" "}
              <code>const {"{"} name, alter {"}"} = person;</code>
            </li>
            <li>
              <strong>Umbenennen:</strong>{" "}
              <code>const {"{"} name: n {"}"} = person;</code>
            </li>
            <li>
              <strong>Default-Werte:</strong>{" "}
              <code>const {"{"} alter = 0 {"}"} = person;</code>
            </li>
            <li>
              <strong>Rest-Properties:</strong>{" "}
              <code>const {"{"} name, ...rest {"}"} = person;</code>
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 17 — Dekomposition: Code (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Dekomposition — Code testen</h3>
          <JSTerminal filename="dekomposition-beispiel.js">
            {`
const person = {
  name: "Anna",
  alter: 16,
  adresse: "Zürich"
};

// 1. Eigenschaften extrahieren
const { name, alter } = person;
console.log(name);  // "Anna"
console.log(alter); // 16

// 2. Variablen umbenennen
const { name: firstname, alter: age } = person;
console.log(firstname); // "Anna"
console.log(age);       // 16

// 3. Default-Werte bei fehlenden Eigenschaften
const { phone = "nicht angegeben" } = person;
console.log(phone); // "nicht angegeben"

// 4. Nur bestimmte Eigenschaften
const { adresse } = person;
console.log(adresse); // "Zürich"

// 5. Verschachtelte Dekomposition
const produkt = {
  name: "Laptop",
  preis: 1200,
  versand: { kostelos: true, dauer: "3 Tage" }
};

const { preis, versand: { kostelos } } = produkt;
console.log(preis);     // 1200
console.log(kostelos);  // true
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 18 — Rest-Properties (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Rest-Properties mit Dekomposition</h3>
          <JSTerminal filename="dekomposition-rest.js">
            {`
const person = {
  name: "Anna",
  alter: 16,
  adresse: "Zürich",
  telefon: "079 123 45 67"
};

// name und alter extrahieren, alles andere in rest
const { name, alter, ...rest } = person;

console.log(name);   // "Anna"
console.log(alter);  // 16
console.log(rest);
// { adresse: "Zürich", telefon: "079 123 45 67" }

// Praktisch: Eigenschaft entfernen
const { telefon, ...ohneTelefon } = person;
console.log(ohneTelefon);
// { name: "Anna", alter: 16, adresse: "Zürich" }
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 19 — Spread vs. Dekomposition (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Spread vs. Dekomposition</h2>
          <p>
            Spread und Dekomposition sind <strong>komplementäre Operationen</strong>:
          </p>
          <table>
            <thead>
              <tr>
                <th>Aktion</th>
                <th>Syntax</th>
                <th>Richtung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Expandieren</td>
                <td><code>{"{"}...obj{"}"}</code></td>
                <td>Objekt → Eigenschaften</td>
              </tr>
              <tr>
                <td>Extrahieren</td>
                <td><code>const {"{"} key {"}"} = obj;</code></td>
                <td>Eigenschaften → Variable</td>
              </tr>
              <tr>
                <td>Kopieren</td>
                <td><code>const kopie = {"{"}...obj{"}"}</code></td>
                <td>Objekt → neues Objekt</td>
              </tr>
              <tr>
                <td>Rest-Eigenschaften</td>
                <td><code>const {"{"} a, ...rest {"}"} = obj;</code></td>
                <td>Bestimmte → Rest</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 20 — Funktionen die Objekte erstellen (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Funktionen die neue Objekte erstellen</h2>
          <p>
            Eine häufige Aufgabe ist es, Funktionen zu schreiben, die basierend
            auf Eingabeparametern neue Objekte erstellen und zurückgeben. Das ist
            besonders nützlich für:
          </p>
          <ul>
            <li>
              <strong>Factory-Funktionen:</strong> Erstellen von Objekten nach
              einem Muster
            </li>
            <li>
              <strong>Transformations-Funktionen:</strong> Ändern von Objekten
              und Zurückgeben neuer Instanzen
            </li>
            <li>
              <strong>Kombinations-Funktionen:</strong> Verbinden mehrerer
              Objekte
            </li>
          </ul>
          <p>
            <strong>Bester Stil:</strong> Verwenden Sie die Spread-Syntax, um
            neue Objekte zu erstellen, statt das Original zu verändern. Das
            macht den Code vorhersehbarer und vermeidet Seiteneffekte.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 21 — Factory-Funktionen (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Factory-Funktion: Personen erstellen</h3>
          <JSTerminal filename="factory-funktion.js">
            {`
// Factory-Funktion zum Erstellen von Person-Objekten
function erstellePerson(name, alter, adresse) {
  return {
    name: name,
    alter: alter,
    adresse: adresse,
    begruessen: function() {
      return "Hallo, ich bin " + this.name;
    }
  };
}

// Personen erstellen
const anna = erstellePerson("Anna", 16, "Zürich");
const beat = erstellePerson("Beat", 17, "Bern");

console.log(anna.begruessen()); // "Hallo, ich bin Anna"

// Array von Personen
const schueler = [
  erstellePerson("Anna", 16, "Zürich"),
  erstellePerson("Beat", 17, "Bern"),
  erstellePerson("Claudia", 15, "Basel")
];

console.log(schueler);
// [
//   { name: "Anna", alter: 16, adresse: "Zürich", begruessen: [Function] },
//   { name: "Beat", alter: 17, adresse: "Bern", begruessen: [Function] },
//   { name: "Claudia", alter: 15, adresse: "Basel", begruessen: [Function] }
// ]
`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 22 — Transformations-Funktionen (Code)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h3>Transformations-Funktion: Neues Objekt erstellen</h3>
          <JSTerminal filename="transformations-funktion.js">
            {`
// Funktion, die ein neues Objekt mit geänderten Werten zurückgibt
function alterErgaenzen(person, note) {
  return {
    ...person,
    note: note,
    noteBewertung: note >= 5.0 ? "gut" : "ausreichend"
  };
}

const anna = { name: "Anna", alter: 16 };

// Neues Objekt mit Note
const annaMitNote = alterErgaenzen(anna, 5.5);
console.log(annaMitNote);
// { name: "Anna", alter: 16, note: 5.5, noteBewertung: "gut" }

// Original bleibt unverändert
console.log(anna);
// { name: "Anna", alter: 16 }

// Funktion die Objekte filtert und neue erstellt
function erwachsenePersonen(schueler) {
  return schueler
    .filter(p => p.alter >= 16)
    .map(p => ({
      ...p,
      status: "Erwachsener"
    }));
}

const schueler = [
  { name: "Anna", alter: 16 },
  { name: "Beat", alter: 14 },
  { name: "Claudia", alter: 18 }
];

const erwachsene = erwachsenePersonen(schueler);
console.log(erwachsene);
// [
//   { name: "Anna", alter: 16, status: "Erwachsener" },
//   { name: "Claudia", alter: 18, status: "Erwachsener" }
// ]
`}
          </JSTerminal>
        </section>
      </ScrollSection>


      {/* ══════════════════════════════════════════════════════
          SECTION 24 — Objekte vs. Arrays (Theorie)
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Objekte vs. Arrays</h2>
          <p>
            Wann verwenden wir ein Objekt und wann ein Array? Oft werden beide
            kombiniert:
          </p>
          <table>
            <thead>
              <tr>
                <th>Kriterium</th>
                <th>Objekt</th>
                <th>Array</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Struktur</td>
                <td>Schlüssel-Wert-Paare</td>
                <td>Geordnete Liste</td>
              </tr>
              <tr>
                <td>Zugriff</td>
                <td><code>obj.name</code></td>
                <td><code>arr[0]</code></td>
              </tr>
              <tr>
                <td>Grösse</td>
                <td>Dynamisch</td>
                <td><code>arr.length</code></td>
              </tr>
              <tr>
                <td>Iteration</td>
                <td><code>Object.keys()</code>, <code>for...in</code></td>
                <td><code>forEach</code>, <code>map</code></td>
              </tr>
              <tr>
                <td>Beispiel</td>
                <td>Person, Adresse</td>
                <td>Liste von Personen</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 26 — Zusammenfassung der Konzepte
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zusammenfassung der Konzepte</h2>
          <table>
            <thead>
              <tr>
                <th>Konzept</th>
                <th>Syntax</th>
                <th>Zweck</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objekt erstellen</td>
                <td><code>{"{"} key: value {"}"}</code></td>
                <td>Schlüssel-Wert-Paare speichern</td>
              </tr>
              <tr>
                <td>Eigenschaft lesen</td>
                <td><code>obj.key</code> oder <code>obj["key"]</code></td>
                <td>Auf Werte zugreifen</td>
              </tr>
              <tr>
                <td>Eigenschaft setzen</td>
                <td><code>obj.key = value</code></td>
                <td>Werte ändern oder hinzufügen</td>
              </tr>
              <tr>
                <td>Iterieren</td>
                <td><code>Object.keys()</code>, <code>for...in</code></td>
                <td>Alle Eigenschaften durchgehen</td>
              </tr>
              <tr>
                <td>Spread</td>
                <td><code>{"{"}...obj{"}"}</code></td>
                <td>Objekt kopieren/erweitern</td>
              </tr>
              <tr>
                <td>Dekomposition</td>
                <td><code>const {"{"} key {"}"} = obj;</code></td>
                <td>Werte extrahieren</td>
              </tr>
              <tr>
                <td>Factory-Funktion</td>
                <td><code>function create() {"{"} return obj {"}"}</code></td>
                <td>Neue Objekte erstellen</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 27 — Wann welche Technik?
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Wann welche Technik verwenden?</h2>
          <ul>
            <li>
              <strong>Punkt-Notation:</strong> Wenn der Schlüssel bekannt und
              ein gültiger Bezeichner ist (am häufigsten verwendet)
            </li>
            <li>
              <strong>Klammernotation:</strong> Wenn der Schlüssel dynamisch ist
              oder Sonderzeichen enthält
            </li>
            <li>
              <strong>Object.keys/values/entries:</strong> Wenn Sie alle
              Eigenschaften programmatisch durchgehen müssen
            </li>
            <li>
              <strong>Spread:</strong> Wenn Sie ein Objekt kopieren oder
              erweitern möchten, ohne das Original zu verändern
            </li>
            <li>
              <strong>Dekomposition:</strong> Wenn Sie bestimmte Eigenschaften
              aus einem Objekt extrahieren und in Variablen speichern möchten
            </li>
            <li>
              <strong>Factory-Funktionen:</strong> Wenn Sie mehrere Objekte nach
              demselben Muster erstellen möchten
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 28 — Zusammenfassung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zusammenfassung</h2>
          <p>
            Objekte sind die grundlegende Datenstruktur in JavaScript für{" "}
            <strong>benannte Eigenschaften</strong>. Sie erstellen Objekte mit{" "}
            <code>{"{"}</code> <code>{"}"}</code>, greifen mit Punkt- oder
            Klammernotation darauf zu und iterieren mit{" "}
            <code>Object.keys()</code>, <code>Object.values()</code>,{" "}
            <code>Object.entries()</code> oder <code>for...in</code>. Die{" "}
            <strong>Spread-Syntax</strong> (<code>...</code>) ermöglicht das
            Kopieren und Erweitern von Objekten, während die{" "}
            <strong>Dekomposition</strong> das Extrahieren von Eigenschaften in
            Variablen erlaubt. Funktionen, die neue Objekte erstellen,{" "}
            <strong>Factory-Funktionen</strong> genannt, sind ein wichtiges
            Muster, um Objekte nach einem bestimmten Schema zu erzeugen.
            Spread und Dekomposition sind komplementäre Operationen und gehören
            zu den mächtigsten Werkzeugen im modernen JavaScript.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
