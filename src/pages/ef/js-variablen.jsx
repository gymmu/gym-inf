import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSVariablen() {
  return (
    <>
      <Section>
        <h2>Was sind Variablen?</h2>
        <p>
          Variablen sind wie Behälter oder Boxen, in denen du Werte speichern
          kannst. Stell dir vor, du hast mehrere Schubladen in einem Schrank.
          Jede Schublade hat einen Namen (z.B. "Schulhefte", "Bücher") und
          enthält etwas (die Werte). In der Programmierung funktioniert das
          ähnlich: Eine Variable hat einen Namen und speichert einen Wert.
        </p>
        <p>
          Warum braucht man Variablen? Stell dir vor, du möchtest den Preis
          eines Produkts berechnen. Du musst den Grundpreis, den Steuernsatz
          und den Rabatt speichern und damit rechnen. Ohne Variablen müsstest
          du jede Zahl immer wieder tippen. Mit Variablen speicherst du die
          Werte einmal und kannst sie später beliebig oft verwenden.
        </p>
      </Section>

      <Section>
        <h2>Variablen deklarieren</h2>
        <p>
          In JavaScript kannst du Variablen auf drei Arten erstellen:
        </p>
        <ul>
          <li>
            <code>let</code>: Eine Variable, deren Wert später geändert werden
            kann (wie eine beschreibbare Schublade)
          </li>
          <li>
            <code>const</code>: Eine Konstante, deren Wert nie geändert werden
            darf (wie eine verschlossene Schublade)
          </li>
          <li>
            <code>var</code>: Die veraltete Methode aus alten JavaScript-Versionen
          </li>
        </ul>
        <p>
          <strong>Empfehlung:</strong> Verwende immer zuerst <code>const</code>.
          Nur wenn du den Wert später wirklich ändern musst, verwende{" "}
          <code>let</code>. So verhinderst du unbeabsichtigte Fehler.
        </p>
        <JSTerminal filename="variablen.js">
          {`
// let: Der Wert kann später geändert werden
let alter = 15;
console.log(alter); // 15
alter = 16; // geht, alter ist jetzt 16
console.log(alter); // 16

// const: Der Wert kann NICHT geändert werden
const name = "Anna";
console.log(name); // "Anna"
// name = "Max"; // Fehler! TypeError: Assignment to constant

// var: Veraltete Methode, besser nicht verwenden
var alt = 14;
console.log(alt); // 14
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Benennungsregeln für Variablen</h2>
        <p>
          Variablennamen müssen bestimmte Regeln befolgen:
        </p>
        <ul>
          <li>Dürfen nur Buchstaben, Zahlen, $ und _ enthalten</li>
          <li>Dürfen nicht mit einer Zahl beginnen</li>
          <li>Sind gross-/kleinschreibungsabhängig (alter ≠ Alter)</li>
          <li>Dürfen keine reservierten Wörter sein (wie let, const, if, ...)</li>
        </ul>
        <p>
          <strong>Gute Namenskonvention:</strong> Verwende camelCase und mache
          den Namen beschreibend:
        </p>
        <JSTerminal filename="benennung.js">
          {`
// Schlechte Namen
let a = 10;
let x = "Anna";

// Gute Namen
let schuelerAlter = 15;
let schuelerName = "Anna";
let preisInFranken = 25.50;
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Datentypen in JavaScript</h2>
        <p>
          Jeder Wert in JavaScript hat einen bestimmten Typ (eine "Klasse").
          Die wichtigsten Typen sind:
        </p>
        <ul>
          <li>
            <strong>string</strong>: Texte, geschrieben in Anführungszeichen
            ('', ", oder ``)
          </li>
          <li>
            <strong>number</strong>: Zahlen, sowohl ganze Zahlen als auch
            Dezimalzahlen
          </li>
          <li>
            <strong>boolean</strong>: Wahrheitswerte, nur true oder false
          </li>
          <li>
            <strong>array</strong>: Eine geordnete Liste von Werten
          </li>
          <li>
            <strong>object</strong>: Eine Sammlung von Schlüssel-Wert-Paaren
          </li>
          <li>
            <strong>undefined</strong>: Eine Variable, der noch kein Wert
            zugewiesen wurde
          </li>
          <li>
            <strong>null</strong>: Beabsichtigt "leer" oder "kein Wert"
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Mit typeof den Datentyp prüfen</h2>
        <p>
          JavaScript bietet den Operator <code>typeof</code>, um den Typ eines
          Werts zu überprüfen. Das ist besonders hilfreich, wenn du nicht
          sicher bist, welchen Typ eine Variable hat, oder wenn du deinen Code
          testen möchtest.
        </p>
        <p>
          <strong>Syntax:</strong> <code>typeof variable</code> gibt einen
          String zurück, der den Typ beschreibt.
        </p>
        <JSTerminal filename="typeof.js">
          {`
// Verschiedene Variablen mit ihren Typen
let name = "Anna";
let alter = 15;
let istSchueler = true;
let noten = [5, 6, 4];
let leer = undefined;
let nichts = null;

// Den Typ jeder Variable ausgeben
console.log(typeof name);       // "string"
console.log(typeof alter);      // "number"
console.log(typeof istSchueler); // "boolean"
console.log(typeof noten);      // "object" (Arrays sind Objekte!)
console.log(typeof leer);       // "undefined"
console.log(typeof nichts);     // "object" (null ist ein Sonderfall)

// Direkte Ausgabe von Typen
console.log(typeof 42);         // "number"
console.log(typeof "Hallo");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof [1, 2, 3]);  // "object"
console.log(typeof {a: 1});     // "object"
`}
        </JSTerminal>
        <p>
          <strong>Wichtig:</strong> Beachte, dass <code>typeof null</code>{" "}
          <code>"object"</code> zurückgibt. Das ist ein alter Bug in JavaScript,
          der aus Kompatibilitätsgründen bestehen bleibt. In der Praxis ist{" "}
          <code>null</code> aber kein Objekt, sondern bedeutet "kein Wert".
        </p>
      </Section>

      <Section>
        <h2>Datentypen im Detail</h2>

        <h3>Strings (Texte)</h3>
        <p>
          Strings können mit einfachen (''), doppelten (") oder Backticks{" "}
          (``) geschrieben werden. Backticks ermöglichen Template Literals,
          also das Einfügen von Variablen direkt im Text:
        </p>
        <JSTerminal filename="strings.js">
          {`
let vorname = "Anna";
let nachname = "Müller";
let alter = 15;

// Einfache Verkettung mit +
console.log(vorname + " " + nachname); // "Anna Müller"

// Template Literals mit Backticks (empfohlen!)
console.log(\`Ich heisse \${vorname} \${nachname} und bin \${alter} Jahre alt.\`);
// "Ich heisse Anna Müller und bin 15 Jahre alt."

// Typ eines Strings prüfen
console.log(typeof vorname); // "string"
`}
        </JSTerminal>

        <h3>Numbers (Zahlen)</h3>
        <p>
          Numbers umfassen sowohl ganze Zahlen als auch Dezimalzahlen. Es gibt{" "}
          keine separate Type für ganze Zahlen in JavaScript:
        </p>
        <JSTerminal filename="numbers.js">
          {`
// Ganze Zahl
let punkte = 100;
console.log(typeof punkte); // "number"

// Dezimalzahl
let preis = 19.99;
console.log(typeof preis); // "number"

// Negative Zahlen
let temperatur = -5;
console.log(typeof temperatur); // "number"

// Spezielle Zahlenwerte
console.log(typeof NaN);     // "number" (Not a Number)
console.log(typeof Infinity); // "number"
console.log(typeof -Infinity); // "number"

// Rechnen mit Zahlen
let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (Rest)
console.log(a ** b); // 1000 (Potenz)
`}
        </JSTerminal>

        <h3>Booleans (Wahrheitswerte)</h3>
        <p>
          Booleans haben nur zwei mögliche Werte: <code>true</code> und{" "}
          <code>false</code>. Sie werden oft in Bedingungen verwendet:
        </p>
        <JSTerminal filename="booleans.js">
          {`
let istErwachsen = true;
let hatHausrat = false;

console.log(typeof istErwachsen); // "boolean"

// Booleans können auch aus Vergleichen entstehen
let alter = 18;
let istVolljaehrig = alter >= 18;
console.log(istVolljaehrig); // true
console.log(typeof istVolljaehrig); // "boolean"

// Vergleiche geben immer boolean zurück
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (gleich)
console.log(5 === "5"); // false (ungleich, unterschiedlicher Typ!)
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Datentypen umwandeln (Casting)</h2>
        <p>
          Oft musst du Werte von einem Typ in einen anderen umwandeln.
          JavaScript macht das teilweise automatisch ("coercion"), aber es ist
          besser, dies explizit zu machen. Hier sind die wichtigsten Methoden:
        </p>

        <h3>Von String zu Number</h3>
        <p>
          Wenn du einen Text wie <code>"42"</code> in eine echte Zahl{" "}
          <code>42</code> umwandeln möchtest, verwende <code>Number()</code> oder{" "}
          <code>parseInt()</code> / <code>parseFloat()</code>:
        </p>
        <JSTerminal filename="string-zahl.js">
          {`
// Mit Number() - wandelt den ganzen String in eine Zahl um
let text = "42";
console.log(typeof text);       // "string"

let zahl = Number(text);
console.log(typeof zahl);       // "number"
console.log(zahl);              // 42

// Mit parseInt() -parsst eine ganze Zahl aus dem String
let textMitZahl = "25 Franken";
let ganzeZahl = parseInt(textMitZahl);
console.log(ganzeZahl);         // 25

// Mit parseFloat() - parst eine Dezimalzahl
let textMitDezimal = "19.99 EUR";
let dezimal = parseFloat(textMitDezimal);
console.log(dezimal);           // 19.99

// Was passiert bei ungültigen Strings?
console.log(Number("Hallo"));   // NaN (Not a Number)
console.log(Number(""));        // 0
console.log(parseInt("abc"));   // NaN

// Praktisches Beispiel: Benutzerinput umwandeln
let eingabe = "15";
let zahl = Number(eingabe);
console.log(zahl + 10);         // 25 (Zahlenaddition!)

// Ohne Umwandlung:
console.log(eingabe + 10);      // "1510" (String-Konkatenation!)
`}
        </JSTerminal>

        <h3>Von Number zu String</h3>
        <p>
          Um eine Zahl in einen Text umzuwandeln, verwende{" "}
          <code>.toString()</code> oder <code>String()</code>:
        </p>
        <JSTerminal filename="zahl-string.js">
          {`
let zahl = 42;
console.log(typeof zahl);       // "number"

// Methode 1: .toString()
let text1 = zahl.toString();
console.log(typeof text1);      // "string"
console.log(text1);             // "42"

// Methode 2: String()
let text2 = String(zahl);
console.log(typeof text2);      // "string"

// Methode 3: Leere String-Konkatenation
let text3 = zahl + "";
console.log(typeof text3);      // "string"

// Methode 4: Template Literal
let text4 = \`\${zahl}\`;
console.log(typeof text4);      // "string"

// Dezimalzahlen formatieren
let preis = 19.996;
console.log(preis.toFixed(2));  // "20.00" (auf 2 Dezimalstellen)
console.log(preis.toFixed(1));  // "20.0" (auf 1 Dezimalstelle)
`}
        </JSTerminal>

        <h3>Von String zu Boolean</h3>
        <p>
          Die Umwandlung von Strings zu Booleans folgt diesen Regeln:
        </p>
        <ul>
          <li>Leere Strings <code>""</code> werden zu <code>false</code></li>
          <li>Alle anderen Strings werden zu <code>true</code></li>
        </ul>
        <JSTerminal filename="string-boolean.js">
          {`
// String zu Boolean mit Boolean()
console.log(Boolean("Hallo"));  // true
console.log(Boolean("0"));      // true (nicht leer!)
console.log(Boolean(""));       // false (leer!)
console.log(Boolean("false"));  // true (nicht leer!)

// Oder mit doppeltem Negationsoperator !!
console.log(!!"Hallo");        // true
console.log(!!"");            // false

// Praktisches Beispiel: Eingabe prüfen
let benutzerEingabe = "";
if (benutzerEingabe) {
  console.log("Es wurde etwas eingegeben");
} else {
  console.log("Keine Eingabe!"); // Wird ausgeführt
}
`}
        </JSTerminal>

        <h3>Von Boolean zu Number</h3>
        <p>
          Booleans können in Zahlen umgewandelt werden:
        </p>
        <ul>
          <li><code>true</code> wird zu <code>1</code></li>
          <li><code>false</code> wird zu <code>0</code></li>
        </ul>
        <JSTerminal filename="boolean-zahl.js">
          {`
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Umgekehrt: 0 wird zu false, alles andere zu true
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true
console.log(Boolean(-1));    // true
console.log(Boolean(0.1));   // true
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Automatische Typumwandlung (Type Coercion)</h2>
        <p>
          JavaScript versucht oft, Typen automatisch umzuwandeln. Das kann
          hilfreich sein, aber auch zu unerwarteten Ergebnissen führen:
        </p>
        <JSTerminal filename="coercion.js">
          {`
// String + Zahl = String (Verkettung)
console.log("5" + 3);        // "53"

// Zahl - String = Zahl (arithmetisch)
console.log("5" - 3);        // 2

// Multiplikation funktioniert auch
console.log("5" * 3);        // 15

// Unerwartete Ergebnisse
console.log("5" + 3 + 2);    // "532" (von links nach rechts!)
console.log("5" + (3 + 2));  // "55" (Klammer zuerst)
console.log("5" - 3 + 2);   // 4

// Null und undefined
console.log("5" + null);     // "5null"
console.log("5" - null);     // 5 (null wird zu 0)
console.log("5" + undefined); // "5undefined"
console.log("5" - undefined); // NaN

// Besser: Immer explizit umwandeln!
let a = "5";
let b = 3;
console.log(Number(a) + b);  // 8 (klar und deutlich)
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Zusammenfassung</h2>
        <p>
          Hier sind die wichtigsten Punkte dieser Lektion:
        </p>
        <ul>
          <li>
            Variablen speichern Werte und können mit <code>let</code> oder{" "}
            <code>const</code> erstellt werden
          </li>
          <li>
            <code>const</code> für unveränderliche Werte, <code>let</code>{" "}
            für veränderliche Werte
          </li>
          <li>
            Die wichtigsten Typen sind: string, number, boolean, array, object
          </li>
          <li>
            <code>typeof</code> gibt den Typ einer Variable zurück
          </li>
          <li>
            Explizite Typumwandlung mit <code>Number()</code>,{" "}
            <code>String()</code>, <code>Boolean()</code> ist besser als
            automatische Umwandlung
          </li>
          <li>
            <code>parseInt()</code> und <code>parseFloat()</code> extrahieren{" "}
            Zahlen aus Strings
          </li>
        </ul>
      </Section>
    </>
  );
}
