import JSTerminal from "@components/JSTerminal";
import ScrollSection from "@components/ScrollSection";

export default function JSRepetitionFunktionenObjekte() {
  return (
    <>
      <h1>Repetition: Funktionen und Objekte</h1>
      <p>
        Wiederholung der wichtigsten Konzepte aus Woche 2: Funktionen,
        Parameter, Rückgabewerte, Callbacks, Objekte, Spread und Dekomposition.
      </p>

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — Titel
          ══════════════════════════════════════════════════════ */}
      <div className="title-slide">
        <h1>JavaScript</h1>
        <h2>Repetition</h2>
        <p>Funktionen · Callbacks · Objekte · Spread · Dekomposition</p>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — Funktionen: Erklärung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Funktionen</h2>
          <p>
            Eine Funktion ist ein Stück Code, das einen <strong>Namen</strong>{" "}
            hat und immer wieder aufgerufen werden kann.
          </p>
          <ul>
            <li>
              <strong>Parameter</strong> — die Werte, die hineingehen
            </li>
            <li>
              <strong>Rumpf</strong> — was die Funktion tut
            </li>
            <li>
              <strong>return</strong> — der Wert, der herauskommt
            </li>
          </ul>
          <p>
            Merksatz: Eine Funktion ist eine <em>Maschine</em>. Oben kommt etwas
            hinein, unten kommt ein Resultat heraus.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — Funktionen: Code testen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Funktionen — Code testen</h2>
          <JSTerminal filename="funktionen.js">
            {`// Funktionsdeklaration
function addiere(a, b) {
  return a + b;
}

console.log(addiere(3, 4)); // 7

// Arrow-Funktion (kurz)
const quadrat = (x) => x * x;
console.log(quadrat(5)); // 25

// Standardwerte für Parameter
function begruessung(name = "Gast") {
  return "Hallo, " + name + "!";
}

console.log(begruessung());        // "Hallo, Gast!"
console.log(begruessung("Anna"));  // "Hallo, Anna!"

// Ohne return kommt undefined zurück
function nichts() {
  console.log("Ich gebe nichts zurück");
}
console.log(nichts()); // undefined`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — Callbacks: Erklärung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Funktionen als Werte (Callbacks)</h2>
          <p>
            In JavaScript sind Funktionen ganz normale Werte. Man kann sie in
            Variablen speichern und an andere Funktionen übergeben. Eine
            Funktion, die man übergibt, heisst <strong>Callback</strong>.
          </p>
          <ul>
            <li>
              <code>forEach</code> — für jedes Element etwas tun
            </li>
            <li>
              <code>map</code> — jedes Element umwandeln (neue Liste)
            </li>
            <li>
              <code>filter</code> — Elemente aussortieren (neue Liste)
            </li>
            <li>
              <code>reduce</code> — alles zu einem Wert zusammenfassen
            </li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — Callbacks: Code testen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Callbacks — Code testen</h2>
          <JSTerminal filename="callbacks.js">
            {`const zahlen = [4, 8, 15, 16, 23, 42];

// forEach: für jedes Element etwas tun
zahlen.forEach((z) => console.log("Zahl:", z));

// map: jedes Element umwandeln
const verdoppelt = zahlen.map((z) => z * 2);
console.log(verdoppelt); // [8, 16, 30, 32, 46, 84]

// filter: nur bestimmte Elemente behalten
const grosse = zahlen.filter((z) => z > 15);
console.log(grosse); // [16, 23, 42]

// reduce: alles zu einem Wert zusammenfassen
const summe = zahlen.reduce((total, z) => total + z, 0);
console.log("Summe:", summe); // 108

// Wichtig: map und filter verändern das Original NICHT
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — Objekte: Erklärung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Objekte</h2>
          <p>
            Ein Objekt speichert Daten als <strong>Schlüssel-Wert-Paare</strong>
            . Damit gehören zusammengehörende Informationen in <em>eine</em>{" "}
            Variable.
          </p>
          <ul>
            <li>
              Erstellen mit <code>{"{ }"}</code>
            </li>
            <li>
              Zugriff mit <code>objekt.schluessel</code> oder{" "}
              <code>objekt["schluessel"]</code>
            </li>
            <li>
              <code>Object.keys()</code>, <code>Object.values()</code>,{" "}
              <code>Object.entries()</code>
            </li>
            <li>Objekte können Objekte und Arrays enthalten (verschachtelt)</li>
          </ul>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — Objekte: Code testen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Objekte — Code testen</h2>
          <JSTerminal filename="objekte.js">
            {`const person = {
  name: "Anna",
  alter: 17,
  faecher: ["Mathe", "Informatik"],
  adresse: { ort: "Bern", plz: 3000 },
};

// Zugriff
console.log(person.name);            // "Anna"
console.log(person["alter"]);        // 17
console.log(person.adresse.ort);     // "Bern"
console.log(person.faecher[1]);      // "Informatik"

// Ändern und hinzufügen
person.alter = 18;
person.hobby = "Klettern";
console.log(person);

// Über ein Objekt gehen
Object.entries(person).forEach(([schluessel, wert]) => {
  console.log(schluessel, "=>", wert);
});`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — Spread & Dekomposition: Erklärung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Spread und Dekomposition</h2>
          <p>
            Zwei sehr praktische Schreibweisen, die uns diese Woche bei den
            Algorithmen begleiten:
          </p>
          <ul>
            <li>
              <strong>Spread</strong> <code>...</code> — packt den Inhalt aus:
              kopieren, zusammenfügen, erweitern
            </li>
            <li>
              <strong>Dekomposition</strong> — holt Werte direkt in Variablen
            </li>
          </ul>
          <p>
            <strong>Wichtig für Algorithmen:</strong> Mit{" "}
            <code>const kopie = [...liste]</code> arbeiten wir auf einer Kopie
            und verändern das Original nicht.
          </p>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — Spread & Dekomposition: Code testen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Spread und Dekomposition — Code testen</h2>
          <JSTerminal filename="spread-dekomposition.js">
            {`// Arrays kopieren und verbinden
const a = [1, 2, 3];
const kopie = [...a];
const zusammen = [...a, 4, 5];
console.log(kopie, zusammen);

// Objekte kopieren und erweitern
const person = { name: "Ben", alter: 16 };
const aelter = { ...person, alter: 17, stadt: "Thun" };
console.log(person); // Original unverändert
console.log(aelter);

// Dekomposition bei Objekten
const { name, alter } = aelter;
console.log(name, alter);

// Dekomposition bei Arrays — perfekt zum Tauschen!
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// Genau so tauschen wir gleich Elemente in einer Liste
const liste = [5, 3, 8];
[liste[0], liste[1]] = [liste[1], liste[0]];
console.log(liste); // [3, 5, 8]`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — Brücke zu den Algorithmen
          ══════════════════════════════════════════════════════ */}
      <ScrollSection area="content">
        <section>
          <h2>Aufwärmen — alles zusammen</h2>
          <p>
            Diese kleine Funktion braucht alles, was wir wiederholt haben. Sie
            ist der Einstieg in die Algorithmen dieser Woche.
          </p>
          <JSTerminal filename="aufwaermen.js">
            {`const schueler = [
  { name: "Anna", note: 5.5 },
  { name: "Ben", note: 3.5 },
  { name: "Clara", note: 4.75 },
  { name: "David", note: 6 },
];

// Wer hat bestanden?
const bestanden = schueler.filter((s) => s.note >= 4);
console.log(bestanden.map((s) => s.name));

// Durchschnittsnote
const summe = schueler.reduce((total, s) => total + s.note, 0);
console.log("Durchschnitt:", summe / schueler.length);

// Beste Note suchen — ein erster echter Algorithmus!
function besteNote(liste) {
  let beste = liste[0];
  for (let i = 1; i < liste.length; i++) {
    if (liste[i].note > beste.note) {
      beste = liste[i];
    }
  }
  return beste;
}

console.log(besteNote(schueler));`}
          </JSTerminal>
        </section>
      </ScrollSection>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — Zusammenfassung
          ══════════════════════════════════════════════════════ */}
      <ScrollSection>
        <section>
          <h2>Zusammenfassung</h2>
          <ul>
            <li>
              <strong>Funktionen:</strong> Parameter hinein, <code>return</code>{" "}
              heraus
            </li>
            <li>
              <strong>Arrow-Funktionen:</strong> <code>(x) =&gt; x * x</code>
            </li>
            <li>
              <strong>Callbacks:</strong> forEach, map, filter, reduce
            </li>
            <li>
              <strong>Objekte:</strong> Schlüssel-Wert-Paare, verschachtelbar
            </li>
            <li>
              <strong>Spread:</strong> <code>[...liste]</code>,{" "}
              <code>{"{ ...objekt }"}</code>
            </li>
            <li>
              <strong>Dekomposition:</strong>{" "}
              <code>const {"{ name }"} = person</code>,{" "}
              <code>[a, b] = [b, a]</code>
            </li>
          </ul>
          <p>
            <strong>Nächster Schritt:</strong> Wir bauen daraus Algorithmen —
            Rezepte, die ein Problem Schritt für Schritt lösen.
          </p>
        </section>
      </ScrollSection>
    </>
  );
}
