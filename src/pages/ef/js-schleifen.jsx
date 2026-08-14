import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSSchleifen() {
  return (
    <>
      <Section>
        <h2>Was sind Schleifen?</h2>
        <p>
          Schleifen erlauben es dir, Code-Blöcke wiederholt auszuführen. Statt
          denselben Code immer und immer wieder schreiben zu müssen, definierst
          du einmal, was wiederholt werden soll, und wie oft.
        </p>
        <p>
          Stell dir vor, du musst 100 Briefe schreiben. Du könntest jeden Brief
          einzeln abschreiben, oder du schreibst eine Vorlage und kopierst sie
          100 Mal. Schleifen funktionieren ähnlich: Du schreibst den Code einmal
          und lässt ihn mehrfach ausführen.
        </p>
      </Section>

      <Section>
        <h2>for-Schleife</h2>
        <p>
          Die <code>for</code>-Schleife ist die häufigste Schleife. Sie wird
          verwendet, wenn du genau weisst, wie oft der Code ausgeführt werden
          soll.
        </p>
        <p>
          Eine for-Schleife hat drei Teile in der Klammer:
        </p>
        <ul>
          <li>
            <strong>Initialisierung</strong>: Eine Variable wird erstellt und
            gestartet (z.B. <code>let i = 0</code>)
          </li>
          <li>
            <strong>Bedingung</strong>: Solange diese Bedingung wahr ist, wird
            die Schleife ausgeführt (z.B. <code>i &lt; 5</code>)
          </li>
          <li>
            <strong>Update</strong>: Nach jedem Durchlauf wird die Variable
            geändert (z.B. <code>i++</code>)
          </li>
        </ul>
        <JSTerminal filename="for-schleife.js">
          {`// Zählt von 0 bis 4
for (let i = 0; i < 5; i++) {
  console.log("Zahl: " + i);
}
// Ausgabe:
// Zahl: 0
// Zahl: 1
// Zahl: 2
// Zahl: 3
// Zahl: 4

// Zählen von 1 bis 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Zählen in Schritten von 2
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}

// Zuruertzählen
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Fertig!"); // 10, 9, 8, ..., 1, "Fertig!"

// Schleife mit Array
const wochentage = ["Mo", "Di", "Mi", "Do", "Fr"];
for (let i = 0; i < wochentage.length; i++) {
  console.log(wochentage[i]);
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>while-Schleife</h2>
        <p>
          Die <code>while</code>-Schleife führt den Code so lange aus, wie die
          Bedingung wahr ist. Sie wird verwendet, wenn du nicht genau weisst,
          wie oft die Schleife durchlaufen wird.
        </p>
        <JSTerminal filename="while-schleife.js">
          {`let count = 0;
while (count < 5) {
  console.log("Noch " + (5 - count) + " mal.");
  count++;
}
// Ausgabe:
// Noch 5 mal.
// Noch 4 mal.
// Noch 3 mal.
// Noch 2 mal.
// Noch 1 mal.

// Warten bis eine Bedingung erfuellt ist
let eingabe = "";
while (eingabe === "") {
  eingabe = prompt("Bitte gib etwas ein:");
}
console.log("Eingegeben: " + eingabe);

// Berechnung mit while
let zahl = 1;
let potenz = 1;

while (potenz < 1000) {
  potenz = potenz * 2;
  console.log("2^" + zahl + " = " + potenz);
  zahl++;
}
// 2^1 = 2, 2^2 = 4, ..., 2^10 = 1024
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>for...of-Schleife</h2>
        <p>
          Die <code>for...of</code>-Schleife durchläuft alle Elemente eines
          Arrays oder Strings. Sie ist besonders einfach und übersichtlich.
        </p>
        <JSTerminal filename="for-of.js">
          {`const farben = ["rot", "gruen", "blau"];

for (const farbe of farben) {
  console.log(farbe);
}
// Ausgabe:
// rot
// gruen
// blau

// Mit Index (Index beginnt bei 0)
const tiere = ["Hund", "Katze", "Maus"];
for (let i = 0; i < tiere.length; i++) {
  console.log((i + 1) + ". Tier: " + tiere[i]);
}
// Ausgabe:
// 1. Tier: Hund
// 2. Tier: Katze
// 3. Tier: Maus

// String durchlaufen
const text = "Hallo";
for (const buchstabe of text) {
  console.log(buchstabe);
}
// Ausgabe:
// H
// a
// l
// l
// o
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>break und continue</h2>
        <p>
          <code>break</code> beendet die Schleife komplett, während{" "}
          <code>continue</code> den aktuellen Durchlauf überspringt und mit
          dem nächsten weitermacht:
        </p>
        <JSTerminal filename="break-continue.js">
          {`// break: Schleife sofort beenden
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Schleife abbrechen
  }
  console.log(i);
}
// Ausgabe: 0, 1, 2, 3, 4 (nicht bis 9!)

// continue: aktuellen Durchlauf ueberspringen
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Gerade Zahlen ueberspringen
  }
  console.log(i);
}
// Ausgabe: 1, 3, 5, 7, 9 (nur ungrade Zahlen)

// break: Suche nach einem Element
const namen = ["Anna", "Beat", "Claudia", "Daniel"];
const suche = "Claudia";

for (let i = 0; i < namen.length; i++) {
  if (namen[i] === suche) {
    console.log(suche + " gefunden an Position " + i);
    break; // Nicht weiter suchen
  }
}

// continue: Bestimmte Werte ueberspringen
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // 5 ueberspringen
  }
  console.log(i);
}
// Ausgabe: 1, 2, 3, 4, 6, 7, 8, 9, 10
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Praktische Beispiele</h2>
        <JSTerminal>
          {`// Beispiel 1: Summe berechnen
let summe = 0;
for (let i = 1; i <= 100; i++) {
  summe = summe + i;
}
console.log("Summe 1-100: " + summe); // 5050

// Beispiel 2: Alle geraden Zahlen
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Beispiel 3: Produkte berechnen
let produkt = 1;
for (let i = 1; i <= 5; i++) {
  produkt = produkt * i;
}
console.log("5! = " + produkt); // 120

// Beispiel 4: Notendurchschnitt
const noten = [5, 6, 4, 5, 6, 4];
let gesamt = 0;
for (let i = 0; i < noten.length; i++) {
  gesamt = gesamt + noten[i];
}
const durchschnitt = gesamt / noten.length;
console.log("Durchschnitt: " + durchschnitt); // 5

// Beispiel 5: Schleife mit Array und break
const kunden = ["Anna", "Beat", "Claudia", "Daniel"];
const suchName = "Beat";

for (let i = 0; i < kunden.length; i++) {
  if (kunden[i] === suchName) {
    console.log(suchName + " ist Kunde Nummer " + (i + 1));
    break;
  }
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Wichtige Unterschiede</h2>
        <ul>
          <li>
            <strong>for</strong>: Wenn du genau weisst, wie oft
          </li>
          <li>
            <strong>while</strong>: Wenn die Bedingung variabel ist
          </li>
          <li>
            <strong>for...of</strong>: Wenn du alle Elemente durchlaufen willst
          </li>
          <li>
            <strong>break</strong>: Schleife komplett beenden
          </li>
          <li>
            <strong>continue</strong>: Nur aktuellen Durchlauf ueberspringen
          </li>
        </ul>
      </Section>
    </>
  );
}
