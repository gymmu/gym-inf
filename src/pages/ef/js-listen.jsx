import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSListen() {
  return (
    <>
      <Section>
        <h2>Was sind Listen (Arrays)?</h2>
        <p>
          Listen (in JavaScript "Arrays" genannt) sind Sammlungen von Werten,
          die du in einer einzigen Variable speichern kannst. Stell dir eine
          Liste wie einen Einkaufszettel vor: Du schreibst alle Punkte nacheinander
          auf, und jeder Punkt hat eine bestimmte Position auf der Liste.
        </p>
        <p>
          Listen sind sehr nützlich, wenn du mehrere zusammengehörige Werte
          verwalten möchtest, zum Beispiel:
        </p>
        <ul>
          <li>Namen deiner Klassenfreunde</li>
          <li>Noten in einem Fach</li>
          <li>Wochentage</li>
          <li>Preise von Produkten</li>
        </ul>
      </Section>

      <Section>
        <h2>Arrays erstellen</h2>
        <p>
          Ein Array erstellst du mit eckigen Klammern <code>[]</code>. Die
          einzelnen Werte werden mit Kommas getrennt:
        </p>
        <JSTerminal filename="arrays-erstellen.js">
          {`// Ein Array mit Fruchtnamen
const fruechte = ["Apfel", "Banane", "Kirsche"];

// Zugriff auf Elemente (Index beginnt bei 0!)
console.log(fruechte[0]); // "Apfel" (erstes Element)
console.log(fruechte[1]); // "Banane" (zweites Element)
console.log(fruechte[2]); // "Kirsche" (drittes Element)

// Länge des Arrays (Anzahl der Elemente)
console.log(fruechte.length); // 3

// Zugriff auf das letzte Element
console.log(fruechte[fruechte.length - 1]); // "Kirsche"

// Ein Array mit Zahlen
const zahlen = [10, 20, 30, 40, 50];
console.log(zahlen[0]);   // 10
console.log(zahlen[4]);   // 50

// Gemischte Typen im selben Array (möglich, aber oft unübersichtlich)
const gemischt = ["Anna", 15, true, "Schuelerin"];
console.log(gemischt[0]); // "Anna" (string)
console.log(gemischt[1]); // 15 (number)
console.log(gemischt[2]); // true (boolean)
console.log(gemischt[3]); // "Schuelerin" (string)

// Leeres Array erstellen
const leer = [];
console.log(leer.length); // 0

// Array mit einem Element
const einzel = ["einzelner Wert"];
console.log(einzel.length); // 1
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Index und Position</h2>
        <p>
          Jedes Element in einem Array hat eine Position, den sogenannten{" "}
          <strong>Index</strong>. Der Index beginnt bei <strong>0</strong>,
          nicht bei 1! Das ist eine wichtige Konvention in der Programmierung.
        </p>
        <JSTerminal filename="index-beispiel.js">
          {`// Wochentage mit Index
const wochentage = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

// Index 0 = erstes Element
console.log(wochentage[0]); // "Mo"

// Index 4 = fünftes Element
console.log(wochentage[4]); // "Fr"

// Index 6 = letztes Element
console.log(wochentage[6]); // "So"

// Was passiert bei ungültigen Indices?
console.log(wochentage[7]); // undefined (es gibt kein 8. Element)
console.log(wochentage[-1]); // undefined (negativer Index geht nicht)

// Prüfen ob ein Element existiert
if (wochentage[4] !== undefined) {
  console.log("Element existiert"); // Wird ausgeführt
} else {
  console.log("Element existiert nicht");
}

// Mit length das letzte Element finden
const letzterTag = wochentage[wochentage.length - 1];
console.log(letzterTag); // "So"
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Arrays verändern</h2>
        <p>
          Du kannst Arrays auf verschiedene Weise verändern: Elemente hinzufügen,
          entfernen oder ändern:
        </p>
        <JSTerminal filename="arrays-aendern.js">
          {`let zahlen = [1, 2, 3];

// --- Elemente hinzufügen ---

// push(): Element am ENDE hinzufügen
zahlen.push(4);
console.log(zahlen); // [1, 2, 3, 4]

zahlen.push(5, 6); // Mehrere Elemente gleichzeitig
console.log(zahlen); // [1, 2, 3, 4, 5, 6]

// unshift(): Element am ANFANG hinzufügen
zahlen.unshift(0);
console.log(zahlen); // [0, 1, 2, 3, 4, 5, 6]

// --- Elemente entfernen ---

// pop():letztes Element entfernen
zahlen.pop();
console.log(zahlen); // [0, 1, 2, 3, 4, 5]

// shift(): erstes Element entfernen
zahlen.shift();
console.log(zahlen); // [1, 2, 3, 4, 5]

// --- Elemente ändern ---

// Direkter Zugriff über Index
zahlen[0] = 10; // Erstes Element ändern
console.log(zahlen); // [10, 2, 3, 4, 5]

zahlen[2] = 30; // Drittes Element ändern
console.log(zahlen); // [10, 2, 30, 4, 5]

// Element an einer bestimmten Position einfügen
zahlen.splice(1, 0, 20); // Ab Index 1, 0 entfernen, 20 einfuegen
console.log(zahlen); // [10, 20, 2, 30, 4, 5]

// --- Element auf undefined setzen ---

// delete loescht das Element, laesst aber "Loecher" im Array
delete zahlen[2];
console.log(zahlen); // [10, 20, <1 empty item>, 30, 4, 5]
// Achtung: length bleibt gleich!
console.log(zahlen.length); // 6
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Wichtige Array-Methoden</h2>
        <p>
          JavaScript bietet viele eingebaute Methoden für Arrays. Hier die
          wichtigsten:
        </p>
        <JSTerminal filename="array-methoden.js">
          {`let zahlen = [10, 20, 30, 40, 50];

// indexOf(): Position eines Elements finden
console.log(zahlen.indexOf(30)); // 2 (Index des Elements 30)
console.log(zahlen.indexOf(99)); // -1 (nicht gefunden)

// includes(): Prüfen ob ein Element enthalten ist
console.log(zahlen.includes(30)); // true
console.log(zahlen.includes(99)); // false

// slice(): Teil des Arrays kopieren (original bleibt unveraendert)
const teil = zahlen.slice(1, 4);
console.log(teil); // [20, 30, 40] (ab Index 1 bis Index 4, ohne 4)

// splice(): Elemente einfuegen/entfernen (veraendert das Original!)
zahlen.splice(2, 1, 35);
// Ab Index 2, 1 Element entfernen, 35 einfuegen
console.log(zahlen); // [10, 20, 35, 40, 50]

// concat(): Zwei Arrays zusammenfuegen
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b);
console.log(c); // [1, 2, 3, 4, 5, 6]

// Mehrere Arrays zusammenfuegen
const d = a.concat(b, [7, 8]);
console.log(d); // [1, 2, 3, 4, 5, 6, 7, 8]

// Praktisches Beispiel: Notendurchschnitt berechnen
const noten = [5, 6, 4, 5, 6];
const summe = noten.reduce((summe, note) => summe + note, 0);
const durchschnitt = summe / noten.length;
console.log(durchschnitt); // 5.2
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Arrays durchlaufen</h2>
        <p>
          Oft möchtest du alle Elemente eines Arrays bearbeiten. Dazu gibt es
          verschiedene Methoden. Die einfachste ist die{" "}
          <code>for...of</code>-Schleife:
        </p>
        <JSTerminal filename="array-durchlaufen.js">
          {`const schueler = ["Anna", "Beat", "Claudia", "Daniel"];

// for...of: Einfach und uebersichtlich
for (const name of schueler) {
  console.log("Hallo " + name + "!");
}
// Ausgabe:
// Hallo Anna!
// Hallo Beat!
// Hallo Claudia!
// Hallo Daniel!

// forEach(): Methode mit Funktion
schueler.forEach((name, index) => {
  console.log(index + ": " + name);
});
// Ausgabe:
// 0: Anna
// 1: Beat
// 2: Claudia
// 3: Daniel

// for-Schleife mit Index
for (let i = 0; i < schueler.length; i++) {
  console.log(i + ". Schueler: " + schueler[i]);
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Praktische Beispiele</h2>
        <JSTerminal>
          {`// Beispiel 1: Einkaufsliste
const einkaufsliste = ["Milch", "Brot", "Kaease", "Obst"];

console.log("Einkaufsliste:");
for (let i = 0; i < einkaufsliste.length; i++) {
  console.log((i + 1) + ". " + einkaufsliste[i]);
}

// Beispiel 2: Noten ueberpruefen
const noten = [5, 6, 4, 5, 6, 3];
let besteNote = noten[0];
let schlechtesteNote = noten[0];

for (let i = 1; i < noten.length; i++) {
  if (noten[i] > besteNote) {
    besteNote = noten[i];
  }
  if (noten[i] < schlechtesteNote) {
    schlechtesteNote = noten[i];
  }
}
console.log("Beste Note: " + besteNote); // 6
console.log("Schlechteste Note: " + schlechtesteNote); // 3

// Beispiel 3: Liste filtern
const alter = [15, 18, 12, 20, 16, 14];
const erwachsene = [];

for (let i = 0; i < alter.length; i++) {
  if (alter[i] >= 18) {
    erwachsene.push(alter[i]);
  }
}
console.log(erwachsene); // [18, 20]

// Beispiel 4: Element suchen
const kunden = ["Anna", "Beat", "Claudia", "Daniel"];
const suchName = "Beat";
let gefunden = false;

for (let i = 0; i < kunden.length; i++) {
  if (kunden[i] === suchName) {
    console.log(suchName + " gefunden an Position " + i);
    gefunden = true;
    break; // Schleife abbrechen
  }
}

if (!gefunden) {
  console.log(suchName + " nicht gefunden");
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Zusammenfassung</h2>
        <p>
          Hier sind die wichtigsten Punkte dieser Lektion:
        </p>
        <ul>
          <li>Arrays speichern mehrere Werte in einer Variable</li>
          <li>
            Der Index beginnt bei 0, das erste Element ist also{" "}
            <code>array[0]</code>
          </li>
          <li>
            <code>array.length</code> gibt die Anzahl der Elemente zurück
          </li>
          <li>
            <code>push()</code> und <code>unshift()</code> hinzufügen Elemente
          </li>
          <li>
            <code>pop()</code> und <code>shift()</code> entfernen Elemente
          </li>
          <li>
            <code>indexOf()</code> findet die Position, <code>includes()</code>{" "}
            prüft das Vorhandensein
          </li>
          <li>
            <code>slice()</code> kopiert Teile, <code>splice()</code>{" "}
            verändert das Original
          </li>
          <li>
            <code>for...of</code> durchläuft alle Elemente einfach
          </li>
        </ul>
      </Section>
    </>
  );
}
