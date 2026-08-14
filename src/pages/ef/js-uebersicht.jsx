import LearningGoals from "@components/LearningGoals";
import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSUebersicht() {
  return (
    <>
      <Section>
        <h2>JavaScript-Einstieg: Ein kurzer Überblick</h2>
        <p>
          In diesem Kapitel siehst du eine <strong>schnelle Übersicht</strong>
          über die wichtigsten JavaScript-Konzepte. Du wirst viele verschiedene
          Code-Beispiele anschauen, ausführen und kleine Änderungen ausprobieren.
        </p>
        <p>
          <strong>Wichtig:</strong> Es geht jetzt nicht darum, jede Syntax im
          Detail zu verstehen – das lernen wir in den folgenden Kapiteln.
          Schau dir die Beispiele an, führe sie aus und überlege, was du
          beobachten kannst. Was passiert, wenn du den Code änderst?
        </p>
      </Section>

      <Section>
        <LearningGoals>
          <ul>
            <li>
              Code mit <code>console.log()</code> ausgeben und verstehen
            </li>
            <li>
              Variablen mit <code>const</code> und <code>let</code> verwenden
            </li>
            <li>
              Einfache Berechnungen mit Operatoren durchführen
            </li>
            <li>
              Bedingungen mit <code>if/else</code> erkennen
            </li>
            <li>
              Schleifen zum Wiederholen von Code verstehen
            </li>
            <li>
              Arrays als Listen von Werten verwenden
            </li>
            <li>
              Funktionen als wiederverwendbare Code-Blöcke kennenlernen
            </li>
          </ul>
        </LearningGoals>
      </Section>

      <Section>
        <h2>Code direkt ausprobieren</h2>
        <p>
          Unten kannst du JavaScript-Code schreiben und direkt ausführen. Klicke
          auf <strong>«Ausführen»</strong>, um das Programm zu starten. Die
          Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig
          verändern und erneut ausführen!
        </p>
      </Section>

      <Section>
        <h2>Beispiel 1: Ausgabe in der Konsole</h2>
        <p>
          Der einfachste Einstieg ist <code>console.log()</code>. Dieser Befehl
          gibt Text in der Konsole aus. Probiere aus, wie der Text sich
          verändert, wenn du die Wörter im Code änderst!
        </p>
        <JSTerminal filename="ausgabe.js">
          {`// Text in der Konsole ausgeben
console.log("Hallo zusammen!");
console.log("Willkommen zu JavaScript!");

// Mit + kannst du Texte verbinden
const name = "Lena";
console.log("Hallo " + name + "!");

// Du kannst auch Zahlen ausgeben
console.log("Das Jahr ist 2025.");
console.log(2025);`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 2: Variablen – Werte speichern</h2>
        <p>
          Variablen sind wie Behälter, die Werte speichern. Mit{" "}
          <code>const</code> definieren wir eine Variable, die nicht verändert
          werden kann. Mit <code>let</code> können wir den Wert später ändern.
          Probiere aus, was passiert, wenn du Zahlen oder Texte änderst!
        </p>
        <JSTerminal filename="variablen.js">
          {`// const: Wert kann NICHT geändert werden
const schulname = "Gymnasium";
const klasse = "1OIn1";

console.log("Schule: " + schulname);
console.log("Klasse: " + klasse);

// let: Wert kann später GEÄNDERT werden
let punktestand = 100;
console.log("\\nPunktestand: " + punktestand);

// Wert ändern
punktestand = punktestand + 50;
console.log("Nach Bonus: " + punktestand);

// Mit const geht das NICHT:
// schulname = "Andere Schule"; // Fehler!`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 3: Berechnungen</h2>
        <p>
          Mit JavaScript kannst du einfache und komplexe Berechnungen
          durchführen. Probiere verschiedene Operatoren aus!
        </p>
        <JSTerminal filename="berechnungen.js">
          {`// Grundrechenarten
console.log("Addition: " + (10 + 5));
console.log("Subtraktion: " + (10 - 5));
console.log("Multiplikation: " + (10 * 5));
console.log("Division: " + (10 / 5));

// Prozent und Modulo (Rest einer Division)
console.log("\\n10 % 3 = " + (10 % 3)); // Rest = 1

// Variablen für Berechnungen verwenden
const stundensatz = 25;
const arbeitsstunden = 8;
const tagessaldo = stundensatz * arbeitsstunden;

console.log("\\nTagessaldo: " + tagessaldo + " CHF");

// Berechnung mit Variablen
const preis = 150;
const rabatt = 0.2; // 20%
const neupreis = preis - (preis * rabatt);

console.log("\\nOriginalpreis: " + preis + " CHF");
console.log("Nach " + (rabatt * 100) + "% Rabatt:");
console.log("Neuer Preis: " + neupreis + " CHF");`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 4: Bedingungen – Programme steuern</h2>
        <p>
          Mit <code>if</code> und <code>else</code> kannst du Programme
          unterschiedlich reagieren lassen, je nach Bedingung. Ändere die
          Werte und überlege, welcher Teil ausgeführt wird!
        </p>
        <JSTerminal filename="bedingungen.js">
          {`// Alter prüfen
const alter = 16;

if (alter >= 18) {
  console.log("Du darfst wählen gehen.");
} else {
  console.log("Du bist noch nicht wahlberechtigt.");
}

// Verkehrsmittel je nach Strecke
const entfernung = 5; // in km

if (entfernung < 2) {
  console.log("\\nDu gehst zu Fuss.");
} else if (entfernung < 10) {
  console.log("\\nDu fährst mit dem Bike.");
} else {
  console.log("\\nDu nimmst den Bus/Zug.");
}

// Punktestand prüfen
const punkte = 85;

if (punkte >= 90) {
  console.log("\\nNote: 6 (sehr gut)");
} else if (punkte >= 80) {
  console.log("\\nNote: 5 (gut)");
} else if (punkte >= 70) {
  console.log("\\nNote: 4 (befriedigend)");
} else {
  console.log("\\nNote: unter 4");
}`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 5: Arrays – Listen von Werten</h2>
        <p>
          Arrays sind Listen von Werten. Sie ermöglichen es, mehrere Werte in
          einer Variable zu speichern. Ändere die Einträge und probiere aus!
        </p>
        <JSTerminal filename="arrays.js">
          {`// Ein Array erstellen
const lieblingsessen = ["Pizza", "Sushi", "Raclette"];

// Erstes und letztes Element
console.log("Lieblingsessen:");
console.log("1. Wahl: " + lieblingsessen[0]);
console.log("Letztes: " + lieblingsessen[2]);

// Alle Elemente mit einer Schleife ausgeben
console.log("\\nAlle Lieblingsessen:");
for (let i = 0; i < lieblingsessen.length; i++) {
  console.log("  " + lieblingsessen[i]);
}

// Mit for...of (moderne Schreibweise)
console.log("\\nNochmal mit for...of:");
for (const essen of lieblingsessen) {
  console.log("  - " + essen);
}

// Array erweitern
lieblingsessen.push("Tiramisu");
console.log("\\nNach Hinzufügen:");
console.log(lieblingsessen);`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 6: Funktionen – Code wiederverwenden</h2>
        <p>
          Funktionen sind wiederverwendbare Code-Blöcke. Sie helfen, Code zu
          organisieren und Duplikate zu vermeiden. Probiere andere Namen und
          Zahlen aus!
        </p>
        <JSTerminal filename="funktionen.js">
          {`// Funktion definieren
function begruessen(name) {
  return "Hallo " + name + "!";
}

// Funktion aufrufen
console.log(begruessen("Lena"));
console.log(begruessen("Marco"));
console.log(begruessen("Sina"));

// Funktion mit Berechnung
function berechneSteuer(preis, steuer) {
  const steuerbetrag = preis * steuer;
  const gesamt = preis + steuerbetrag;
  return gesamt;
}

console.log("\\nPreis: 100 CHF, Steuer: 8.1%:");
console.log("Gesamt: " + berechneSteuer(100, 0.081) + " CHF");

// Pfeil-Funktion (moderne Schreibweise)
const verdoppeln = (zahl) => zahl * 2;

console.log("\\nVerdoppeln:");
console.log("5 * 2 = " + verdoppeln(5));
console.log("10 * 2 = " + verdoppeln(10));
console.log("100 * 2 = " + verdoppeln(100));`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 7: Schleifen – Code wiederholen</h2>
        <p>
          Schleifen wiederholen Code mehrere Male. Die <code>for</code>-Schleife
          ist die häufigste Form. Probiere andere Zahlen für die Grenzen aus!
        </p>
        <JSTerminal filename="schleifen.js">
          {`// Einfache Schleife: Zahlen ausgeben
console.log("Zahlen von 1 bis 5:");
for (let i = 1; i <= 5; i++) {
  console.log("  " + i);
}

// Schleife mit Berechnung: Verdopplung
console.log("\\nVerdopplung:");
for (let i = 1; i <= 5; i++) {
  console.log("  2 * " + i + " = " + (2 * i));
}

// Schleife mit Array
const faecher = ["Mathe", "Informatik", "Physik"];
console.log("\\nMeine Fächer:");
for (let i = 0; i < faecher.length; i++) {
  console.log("  " + (i + 1) + ". " + faecher[i]);
}

// While-Schleife: Countdown
console.log("\\nCountdown:");
let zeit = 5;
while (zeit > 0) {
  console.log("  " + zeit + "...");
  zeit = zeit - 1;
}
console.log("  Start! 🚀");`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Weiter geht's mit den Grundlagen</h2>
        <p>
          In den folgenden Kapiteln wirst du die einzelnen Konzepte detailliert
          kennenlernen:
        </p>
        <ul>
          <li>
            <strong>Variablen:</strong> Datentypen, Zuweisungen, const vs. let
          </li>
          <li>
            <strong>Bedingungen:</strong> if/else, Vergleichsoperatoren,
            logische Operatoren
          </li>
          <li>
            <strong>Listen:</strong> Arrays, Methoden, Durchlaufen
          </li>
          <li>
            <strong>Schleifen:</strong> for, while, for...of
          </li>
          <li>
            <strong>Funktionen:</strong> Definition, Parameter, Rückgabewerte
          </li>
          <li>
            <strong>Objekte:</strong> Eigenschaften, Methoden, this
          </li>
          <li>
            <strong>Funktionales Programmieren:</strong> Map, Filter, Reduce
          </li>
          <li>
            <strong>Klassen:</strong> Vererbung, OOP-Prinzipien
          </li>
        </ul>
      </Section>
    </>
  );
}
