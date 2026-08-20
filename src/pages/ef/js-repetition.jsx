import Slideshow, { Slide } from "@components/gym/Slideshow/Slideshow";
import JSTerminal from "@components/JSTerminal";

export default function JSRepetition() {
  return (
    <>
      <h1>JS-Repetition</h1>
      <p>
        Wiederholung der wichtigsten JavaScript-Konzepte: Variablen,
        Bedingungen, Listen und Schleifen.
      </p>

      <Slideshow title="JS-Repetition">
        {/* ══════════════════════════════════════════════════════
            SLIDE 1 — Titel
            ══════════════════════════════════════════════════════ */}
        <Slide className="title-slide" transition="zoom">
          <h1>JavaScript</h1>
          <h2>Repetition</h2>
          <p>Variablen · Bedingungen · Listen · Schleifen</p>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 2 — Variablen: Erklärung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Variablen</h2>
          <p>Variablen sind "Boxen", in denen wir Werte speichern.</p>
          <div className="cols">
            <div>
              <p><strong>var</strong> — alt (global)</p>
              <p><strong>let</strong> — neu (block-scope, veränderbar)</p>
              <p><strong>const</strong> — neu (block-scope, unveränderbar)</p>
            </div>
          </div>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 3 — Variablen: JSTerminal
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Variablen — Code testen</h2>
          <JSTerminal
            filename="variablen.js"
            wrapperHeight="500px"
            height="400px"
          >
            {`// Variablen erstellen
let name = "Anna";
const alter = 16;

// Werte ausgeben
console.log("Name:", name);
console.log("Alter:", alter);

// Wert ändern (nur mit let)
name = "Anna Maria";
console.log("Neuer Name:", name);`}
          </JSTerminal>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 4 — Datentypen: Erklärung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Datentypen</h2>
          <p>JavaScript kennt verschiedene Typen:</p>
          <ul>
            <li><strong>string</strong> — Text (in Anführungszeichen)</li>
            <li><strong>number</strong> — Zahlen</li>
            <li><strong>boolean</strong> — true oder false</li>
            <li><strong>array</strong> — Liste von Werten</li>
            <li><strong>object</strong> — Schlüssel-Wert-Paare</li>
          </ul>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 5 — Datentypen: JSTerminal
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Datentypen — Code testen</h2>
          <JSTerminal
            filename="typen.js"
            wrapperHeight="500px"
            height="400px"
          >
            {`// String (Text)
let text = "Hallo";
console.log(typeof text); // "string"

// Number (Zahl)
let zahl = 42;
console.log(typeof zahl); // "number"

// Boolean (Wahrheitswert)
let aktiv = true;
console.log(typeof aktiv); // "boolean"

// Array (Liste)
let farben = ["rot", "blau", "grün"];
console.log(typeof farben); // "object"

// Object
let person = { name: "Max", alter: 25 };
console.log(typeof person); // "object"

// Prüfen ob Array
console.log(Array.isArray(farben)); // true`}
          </JSTerminal>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 6 — Bedingungen: Erklärung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Bedingungen</h2>
          <p>Bedingungen erlauben es, Code nur auszuführen wenn eine Bedingung erfüllt ist:</p>
          <ul>
            <li><code>if (...)</code> — wenn Bedingung wahr</li>
            <li><code>else if (...)</code> — weitere Bedingung</li>
            <li><code>else</code> — sonst</li>
          </ul>
          <p><strong>Operatoren:</strong> ===, !==, &lt;, &gt;, &amp;&amp;, ||</p>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 7 — Bedingungen: JSTerminal
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Bedingungen — Code testen</h2>
          <JSTerminal
            filename="bedingungen.js"
            wrapperHeight="500px"
            height="400px"
          >
            {`let score = 85;

if (score >= 90) {
  console.log("Sehr gut!");
} else if (score >= 70) {
  console.log("Gut!");
} else {
  console.log("Nicht bestanden");
}

// Mehrere Bedingungen
let alter = 20;
let hatLizenz = true;

if (alter >= 18 && hatLizenz) {
  console.log("Darf Auto fahren!");
} else {
  console.log("Darf nicht Auto fahren");
}

// Ternary Operator (kurze if-else)
let status = (score >= 50) ? "bestanden" : "nicht bestanden";
console.log(status);`}
          </JSTerminal>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 8 — Listen: Erklärung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Listen (Arrays)</h2>
          <p>Eine Liste speichert mehrere Werte unter einem Namen:</p>
          <ul>
            <li>Erstellen mit <code>[]</code></li>
            <li>Index beginnt bei <strong>0</strong></li>
            <li><code>.length</code> — Anzahl Elemente</li>
            <li><code>.push()</code> — Element hinzufügen</li>
            <li><code>.pop()</code> — letztes Element entfernen</li>
          </ul>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 9 — Listen: JSTerminal
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Listen — Code testen</h2>
          <JSTerminal
            filename="arrays.js"
            wrapperHeight="500px"
            height="400px"
          >
            {`// Liste erstellen
let kinder = ["Anna", "Ben", "Clara"];

// Auf Elemente zugreifen
console.log(kinder[0]);   // "Anna"
console.log(kinder[1]);   // "Ben"
console.log(kinder.length); // 3

// Elemente hinzufügen und entfernen
kinder.push("David");
console.log(kinder); // ["Anna", "Ben", "Clara", "David"]

kinder.pop();
console.log(kinder); // ["Anna", "Ben", "Clara"]

// Alle Elemente durchgehen
kinder.forEach(function(kind) {
  console.log("Hallo " + kind + "!");
});`}
          </JSTerminal>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 10 — Schleifen: Erklärung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Schleifen</h2>
          <p>Schleifen wiederholen Code mehrere Male:</p>
          <ul>
            <li><code>for (let i = 0; i &lt; n; i++)</code></li>
            <li><code>while (Bedingung) &#123; ... &#125;</code></li>
            <li><code>for ... of</code> — über Array-Elemente</li>
          </ul>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 11 — Schleifen: JSTerminal
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Schleifen — Code testen</h2>
          <JSTerminal
            filename="schleifen.js"
            wrapperHeight="500px"
            height="400px"
          >
            {`// for-Schleife
console.log("for-Schleife:");
for (let i = 1; i <= 5; i++) {
  console.log("Zahl:", i);
}

// while-Schleife
console.log("\\nwhile-Schleife:");
let count = 3;
while (count > 0) {
  console.log(count, "...");
  count--;
}
console.log("Los!");

// for ... of
console.log("\\nfor ... of:");
let fruits = ["🍎", "🍌", "🍒"];
for (let fruit of fruits) {
  console.log(fruit);
}`}
          </JSTerminal>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 12 — Funktionen: Erklärung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Funktionen</h2>
          <p>Funktionen sind wiederverwendbare Code-Blöcke:</p>
          <ul>
            <li><strong>Declaration:</strong> <code>function name() &#123; ... &#125;</code></li>
            <li><strong>Expression:</strong> <code>const name = () =&gt; &#123; ... &#125;</code></li>
            <li>Parameter: Werte die man übergibt</li>
            <li>Return-Wert: Ergebnis zurückgeben</li>
          </ul>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 13 — Funktionen: JSTerminal
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Funktionen — Code testen</h2>
          <JSTerminal
            filename="funktionen.js"
            wrapperHeight="500px"
            height="400px"
          >
            {`// Funktion mit Parameter
function begruessung(name) {
  return "Hallo, " + name + "!";
}

console.log(begruessung("Anna"));
console.log(begruessung("Ben"));

// Arrow Function
const quadrat = (x) => x * x;
console.log("Quadrat von 5:", quadrat(5));

// Funktion ohne Return
function sageHallo(name) {
  console.log("Hallo " + name + "!");
}

sageHallo("Clara");

// Funktion mit mehreren Parametern
const addiere = (a, b) => a + b;
console.log("3 + 4 =", addiere(3, 4));`}
          </JSTerminal>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            SLIDE 14 — Zusammenfassung
            ══════════════════════════════════════════════════════ */}
        <Slide>
          <h2>Zusammenfassung</h2>
          <ul>
            <li><strong>Variablen:</strong> let, const</li>
            <li><strong>Datentypen:</strong> string, number, boolean, array, object</li>
            <li><strong>Bedingungen:</strong> if, else if, else</li>
            <li><strong>Listen:</strong> [], .length, .push()</li>
            <li><strong>Schleifen:</strong> for, while, for ... of</li>
            <li><strong>Funktionen:</strong> function, =&gt;</li>
          </ul>
        </Slide>
      </Slideshow>
    </>
  );
}
