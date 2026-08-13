import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSEinstieg() {
  return (
    <>
      <Section>
        <h2>Willkommen zu Programmieren mit JavaScript</h2>
        <p>
          In diesem Kurs lernst du die Grundlagen der Programmierung mit
          JavaScript. JavaScript ist eine der beliebtesten Programmiersprachen
          der Welt und wird verwendet, um interaktive Webseiten zu erstellen,
          Server zu programmieren, Spiele zu entwickeln und vieles mehr.
        </p>
        <p>
          Du wirst Schritt für Schritt die wichtigsten Konzepte der
          Programmierung kennenlernen – von Variablen über Bedingungen bis hin
          zu Funktionen und Objekten.
        </p>
      </Section>

      <Section>
        <h2>Was ist JavaScript?</h2>
        <p>
          JavaScript ist eine <strong>Allzweck-Programmiersprache</strong>{" "}
          (general-purpose programming language). Das bedeutet, dass man damit
          praktisch alles programmieren kann – von einfachen Berechnungen bis
          hin zu komplexen Anwendungen. JavaScript wurde 1995 von Brendan Eich
          in nur 10 Tagen entwickelt und hat sich seitdem zur meistverbreiteten
          Programmiersprache der Welt entwickelt.
        </p>
      </Section>

      <Section>
        <h2>Warum JavaScript?</h2>
        <p>
          Es gibt viele Programmiersprachen – doch JavaScript hat einige
          besondere Vorteile:
        </p>

        <h3>1. Das Web basiert auf JavaScript</h3>
        <p>
          Jede moderne Webseite verwendet JavaScript. Ohne JavaScript wären
          Webseiten statisch – sie könnten keine Interaktionen verarbeiten,
          keine Daten nachladen und keine dynamischen Inhalte anzeigen.
          JavaScript ist die <em>einzige</em> Sprache, die direkt im Browser
          läuft und somit jedes Internetprogramm steuern kann.
        </p>

        <h3>2. Browser-Automatisierung</h3>
        <p>
          Mit JavaScript kann man den Browser automatisieren – zum Beispiel kann
          man Programme schreiben, die automatisch Webseiten öffnen, Formulare
          ausfüllen oder Daten von Webseiten sammeln. Das ist nützlich für
          repetitive Aufgaben oder zum Testen von Webseiten.
        </p>

        <h3>3. Full-Stack: Frontend und Backend</h3>
        <p>
          JavaScript läuft nicht nur im Browser (Frontend), sondern auch auf
          Servern (Backend). Mit <strong>Node.js</strong> kann man JavaScript
          als serverseitige Sprache verwenden. Das bedeutet, du kannst mit
          derselben Sprache sowohl die Benutzeroberfläche als auch die
          Server-Logik programmieren.
        </p>

        <h3>4. KI-Interaktion</h3>
        <p>
          JavaScript wird häufig verwendet, um mit KI-Systemen zu interagieren.
          Man kann damit APIs von KI-Diensten aufrufen, Chatbots bauen, oder
          sogar lokale KI-Modelle im Browser ausführen. Das macht JavaScript zu
          einer idealen Sprache für KI-Projekte.
        </p>

        <h3>5. Unterschiedliche Programmierparadigmen</h3>
        <p>
          JavaScript unterstützt verschiedene Programmierstile (Paradigmen):
        </p>
        <ul>
          <li>
            <strong>Prozedural:</strong> Schritt-für-Schritt-Anweisungen
          </li>
          <li>
            <strong>Objekt-orientiert:</strong> Programme als Sammlung von
            Objekten
          </li>
          <li>
            <strong>Funktional:</strong> Programme als Kombination von
            Funktionen
          </li>
          <li>
            <strong>Ereignisgesteuert:</strong> Programme reagieren auf
            Ereignisse (Klicks, Eingaben, etc.)
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Lernziele</h2>
        <ul>
          <li>Grundlegende Programmierkonzepte verstehen</li>
          <li>Mit Variablen und Datentypen arbeiten</li>
          <li>Bedingungen und Schleifen verwenden</li>
          <li>Funktionen schreiben und wiederverwenden</li>
          <li>Mit Objekten und Arrays arbeiten</li>
          <li>Erste Programme selbstständig schreiben</li>
        </ul>
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
        <h2>Beispiel 1: Dein erstes Programm</h2>
        <p>
          Der einfachste Einstieg ist <code>console.log()</code>. Dieser Befehl
          gibt Text in der Konsole aus.
        </p>
        <JSTerminal filename="hello.js">
          {`// Das ist ein Kommentar - er wird nicht ausgeführt

// Ausgabe in der Konsole
console.log("Hallo Welt!");
console.log("Ich lerne JavaScript!");
console.log("Programmieren macht Spass!");`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 2: Variablen und Berechnungen</h2>
        <p>
          Variablen sind wie Behälter, die Werte speichern. Mit{" "}
          <code>const</code> definieren wir eine Variable, die nicht verändert
          werden kann. Mit <code>let</code> können wir den Wert später ändern.
        </p>
        <JSTerminal filename="variablen.js">
          {`// Variablen mit const definieren (kann nicht geändert werden)
const name = "Anna";
const alter = 16;

// Werte ausgeben
console.log("Name: " + name);
console.log("Alter: " + alter);

// Berechnungen
const geburtsjahr = 2025 - alter;
console.log("Geburtsjahr: " + geburtsjahr);

// Mit let kann man Werte später ändern
let punkte = 10;
console.log("Punkte: " + punkte);

punkte = punkte + 5; // Punkte erhöhen
console.log("Punkte nach Bonus: " + punkte);`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 3: Bedingungen</h2>
        <p>
          Mit <code>if</code> und <code>else</code> kannst du Programme
          unterschiedlich reagieren lassen, je nach Bedingung.
        </p>
        <JSTerminal filename="bedingungen.js">
          {`// Alter eingeben
const alter = 17;

// Bedingung prüfen
if (alter >= 18) {
  console.log("Du bist volljährig.");
} else {
  console.log("Du bist noch minderjährig.");
}

// Mehrere Fälle mit else if
const temperature = 25;

if (temperature < 0) {
  console.log("Es ist eisig kalt!");
} else if (temperature < 10) {
  console.log("Es ist kalt.");
} else if (temperature < 20) {
  console.log("Es ist kühl.");
} else if (temperature < 30) {
  console.log("Es ist warm.");
} else {
  console.log("Es ist sehr heiss!");
}

// Ternary Operator (kurze if-else Schreibweise)
const istWochentag = true;
const resultat = istWochentag ? "Zur Schule!" : "Freizeit!";
console.log(resultat);`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 4: Schleifen</h2>
        <p>
          Schleifen wiederholen Code mehrere Male. Die <code>for</code>-Schleife
          ist die häufigste Form.
        </p>
        <JSTerminal filename="schleifen.js">
          {`// For-Schleife: Zähle von 1 bis 5
console.log("Zählen von 1 bis 5:");
for (let i = 1; i <= 5; i++) {
  console.log("  " + i);
}

// For-Schleife: Quadratzahlen berechnen
console.log("\\nQuadratzahlen:");
for (let i = 1; i <= 10; i++) {
  const quadrat = i * i;
  console.log("  " + i + "² = " + quadrat);
}

// For-Schleife: Summe berechnen
let summe = 0;
for (let i = 1; i <= 100; i++) {
  summe = summe + i;
}
console.log("\\nDie Summe von 1 bis 100 ist: " + summe);`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 5: Arrays (Listen)</h2>
        <p>
          Arrays sind Listen von Werten. Sie ermöglichen es, mehrere Werte in
          einer Variable zu speichern.
        </p>
        <JSTerminal filename="arrays.js">
          {`// Ein Array erstellen
const lieblingsfaecher = ["Informatik", "Mathematik", "Physik"];

// Elemente ausgeben
console.log("Meine Lieblingsfächer:");
for (let i = 0; i < lieblingsfaecher.length; i++) {
  console.log("  " + (i + 1) + ". " + lieblingsfaecher[i]);
}

// Array mit for...of durchlaufen
console.log("\\nAlle Fächer:");
for (const fach of lieblingsfaecher) {
  console.log("  - " + fach);
}

// Arrays können verschiedene Typen enthalten
const mischung = [42, "Hallo", true, 3.14];
console.log("\\nGemischtes Array:");
console.log(mischung);`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Beispiel 6: Funktionen</h2>
        <p>
          Funktionen sind wiederverwendbare Code-Blöcke. Sie helfen, Code zu
          organisieren und Duplikate zu vermeiden.
        </p>
        <JSTerminal filename="funktionen.js">
          {`// Funktion definieren
function begruessen(name) {
  return "Hallo " + name + "!";
}

// Funktion aufrufen
console.log(begruessen("Anna"));
console.log(begruessen("Bob"));
console.log(begruessen("Chiara"));

// Funktion mit Berechnung
function quadrat(zahl) {
  return zahl * zahl;
}

console.log("\\nQuadratzahlen:");
for (let i = 1; i <= 5; i++) {
  console.log("  " + i + "² = " + quadrat(i));
}

// Pfeil-Funktion (moderne Schreibweise)
const addieren = (a, b) => a + b;

console.log("\\nPfeil-Funktionen:");
console.log("5 + 3 = " + addieren(5, 3));
console.log("10 + 20 = " + addieren(10, 20));`}
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
