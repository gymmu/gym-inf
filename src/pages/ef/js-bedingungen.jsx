import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSBedingungen() {
  return (
    <>
      <Section>
        <h2>Was sind Bedingungen?</h2>
        <p>
          Bedingungen erlauben es deinem Programm, verschiedene Entscheidungen
          zu treffen. Abhängig davon, ob eine Bedingung wahr (true) oder falsch
          (false) ist, wird unterschiedlicher Code ausgeführt.
        </p>
        <p>
          Stell dir vor, du gehst zur Schule. Was du mitbringst, hängt vom
          Wetter ab:
        </p>
        <ul>
          <li>Wenn es regnet, bringst du einen Regenschirm mit</li>
          <li>Sonst wenn es sehr warm ist, bringst du Sonnencreme mit</li>
          <li>Sonst bringst du einfach dein normales Schulzeug mit</li>
        </ul>
        <p>
          Genau so funktionieren Bedingungen in JavaScript: Das Programm prüft
          eine Bedingung und führt den passenden Code aus.
        </p>
      </Section>

      <Section>
        <h2>if, else if, else</h2>
        <p>
          Die Grundstruktur einer Bedingung in JavaScript besteht aus{" "}
          <code>if</code>, <code>else if</code> (optional) und{" "}
          <code>else</code> (optional):
        </p>
        <ul>
          <li>
            <code>if</code>: Immer notwendig. Die erste Bedingung, die geprüft
            wird
          </li>
          <li>
            <code>else if</code>: Optional. Weitere Bedingungen, die geprüft
            werden, wenn die vorherige falsch war
          </li>
          <li>
            <code>else</code>: Optional. Der Code, der ausgeführt wird, wenn
            alle vorherigen Bedingungen falsch waren
          </li>
        </ul>
        <JSTerminal filename="bedingungen.js">
          {`let temp = 25;

if (temp > 30) {
  console.log("Es ist sehr warm!");
} else if (temp > 20) {
  console.log("Es ist angenehm warm.");
} else {
  console.log("Es ist kühl.");
}
// Ausgabe: "Es ist angenehm warm."`}
        </JSTerminal>
        <p>
          <strong>Wichtig:</strong> JavaScript prüft die Bedingungen von oben
          nach unten. Sobald eine Bedingung wahr ist, wird der zugehörige Code
          ausgeführt und der Rest wird ignoriert. Auch wenn mehrere Bedingungen
          wahr wären, wird nur der erste passende Block ausgeführt.
        </p>
      </Section>

      <Section>
        <h2>Bedingungen mit Variablen</h2>
        <p>
          Bedingungen arbeiten oft mit Variablen. Hier ein Beispiel, das
          verschiedene Variablen kombiniert:
        </p>
        <JSTerminal filename="bedingungen-variablen.js">
          {`let alter = 18;
let hatLegi = true;
let einkommen = 2500;

// Einfache Bedingung
if (alter >= 18) {
  console.log("Du bist volljaehrig.");
}

// Mit else
if (alter >= 18) {
  console.log("Du kannst legally wählen.");
} else {
  console.log("Du kannst noch nicht waehlen.");
}

// Mit else if
if (einkommen < 1500) {
  console.log("Geringes Einkommen");
} else if (einkommen < 3000) {
  console.log("Mittleres Einkommen");
} else {
  console.log("Hohes Einkommen");
}
// Ausgabe: "Mittleres Einkommen"

// Komplexere Bedingung
if (alter >= 18 && hatLegi) {
  console.log("Du darfst Alkohol kaufen.");
} else {
  console.log("Du darfst keinen Alkohol kaufen.");
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Vergleichsoperatoren</h2>
        <p>
          Vergleichsoperatoren vergleichen zwei Werte und geben{" "}
          <code>true</code> oder <code>false</code> zurück. Sie werden oft in
          Bedingungen verwendet:
        </p>
        <ul>
          <li>
            <code>===</code> gleich (typfest - Wert UND Typ müssen gleich sein)
          </li>
          <li>
            <code>!==</code> ungleich (typfest - Wert ODER Typ muss unterschiedlich sein)
          </li>
          <li>
            <code>==</code> gleich (nur Wert, Typ wird ignoriert)
          </li>
          <li>
            <code>!=</code> ungleich (nur Wert, Typ wird ignoriert)
          </li>
          <li><code>&gt;</code> grösser</li>
          <li><code>&lt;</code> kleiner</li>
          <li><code>&gt;=</code> grösser oder gleich</li>
          <li><code>&lt;=</code> kleiner oder gleich</li>
        </ul>
      </Section>

      <Section>
        <h2>Typfest vergleichen (=== und !==)</h2>
        <p>
          <strong>Empfehlung:</strong> Verwende immer <code>===</code> und{" "}
          <code>!==</code> zum Vergleichen. Diese Operatoren prüfen sowohl den
          Wert als auch den Typ. Das vermeidet viele Fehler.
        </p>
        <p>
          <strong>Beispiel:</strong> <code>===</code> prüft, ob zwei Werte
          identisch sind - sowohl der Wert als auch der Typ muss übereinstimmen:
        </p>
        <JSTerminal filename="typfest-vergleich.js">
          {`// ===: Typfest gleich (Wert UND Typ müssen gleich sein)
console.log(5 === 5);       // true (Zahl === Zahl, Wert gleich)
console.log("5" === "5");   // true (String === String, Wert gleich)
console.log(5 === "5");     // false (Zahl !== String, unterschiedlicher Typ!)
console.log(true === 1);    // false (boolean !== number)
console.log(false === 0);   // false
console.log(null === null); // true
console.log(undefined === undefined); // true

// !==: Typfest ungleich (Wert ODER Typ muss unterschiedlich sein)
console.log(5 !== "5");     // true (unterschiedlicher Typ)
console.log(5 !== 5);       // false (gleich)
console.log("5" !== 5);     // true (unterschiedlicher Typ)
console.log("5" !== "5");   // false (gleich)
console.log(true !== 1);    // true (unterschiedlicher Typ)
console.log(null !== undefined); // true (beides unterschiedlich)

// Praktisches Beispiel: Eingabe validieren
let eingabe = "42";
if (typeof eingabe === "string") {
  console.log("Eingabe ist ein Text."); // Wird ausgeführt
}

let zahl = 42;
if (typeof zahl === "number") {
  console.log("Eingabe ist eine Zahl."); // Wird ausgeführt
}

// Was passiert mit ==? (Nur Wert, Typ wird ignoriert)
console.log("==: Nur Wert wird verglichen");
console.log(5 == "5");      // true (Typ wird automatisch umgewandelt!)
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(null == undefined); // true (Sonderfall!)
console.log("" == 0);       // true

// Deshalb: Immer === verwenden!
console.log(5 == "5");      // true (unerwartet!)
console.log(5 === "5");     // false (korrekt!)
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Typgleichheit im Detail</h2>
        <p>
          <strong>Typgleichheit</strong> bedeutet, dass nicht nur der Wert,
          sondern auch der Datentyp identisch sein muss. Das ist wichtig, denn
          in JavaScript kann <code>"5"</code> (ein String) nicht einfach als
          <code>5</code> (eine Zahl) betrachtet werden - sie haben unterschiedliche
          Bedeutung und Funktionen.
        </p>
        <JSTerminal filename="typgleichheit.js">
          {`// Typgleichheit prüfen mit typeof und ===
let text = "42";
let zahl = 42;

// Prüfen ob text wirklich eine Zahl ist
if (typeof text === "number") {
  console.log("text ist eine Zahl"); // Wird NICHT ausgeführt
} else {
  console.log("text ist KEINE Zahl"); // Wird ausgeführt
}

// Typumwandlung und dann prüfen
let zahl2 = Number(text);
if (typeof zahl2 === "number") {
  console.log("zahl2 ist eine Zahl"); // Wird ausgeführt
}

// Verschiedene Typen vergleichen
console.log(typeof 42);           // "number"
console.log(typeof "42");         // "string"
console.log(typeof true);         // "boolean"
console.log(typeof "true");       // "string"
console.log(typeof null);         // "object" (Sonderfall!)
console.log(typeof undefined);    // "undefined"

// Typgleichheit in Bedingungen
let benutzerAlter = "18";
if (benutzerAlter === 18) {
  console.log("Alter ist 18 als Zahl"); // Wird NICHT ausgeführt
}

if (benutzerAlter === "18") {
  console.log("Alter ist '18' als Text"); // Wird ausgeführt
}

// Besser: Erst umwandeln, dann vergleichen
let alter = Number(benutzerAlter);
if (alter === 18) {
  console.log("Die Person ist 18 Jahre alt"); // Wird ausgeführt
}

// Praxis-Beispiel: Benutzereingabe verarbeiten
let benutzerEingabe = "25";

// ❌ Falsch: == erlaubt Typumwandlung
if (benutzerEingabe == 25) {
  console.log("Eingabe ist 25"); // Funktioniert, aber unklar
}

// ✅ Richtig: Typ prüfen und umwandeln
if (typeof benutzerEingabe === "string") {
  let zahl = Number(benutzerEingabe);
  if (zahl === 25) {
    console.log("Eingabe ist die Zahl 25"); // Klar und explizit
  }
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Logische Operatoren</h2>
        <p>
          Logische Operatoren kombinieren mehrere Bedingungen. Sie arbeiten
          mit booleschen Werten (true/false):
        </p>
        <ul>
          <li>
            <code>&&</code> UND: Beide Bedingungen müssen wahr sein
          </li>
          <li>
            <code>||</code> ODER: Mindestens eine Bedingung muss wahr sein
          </li>
          <li>
            <code>!</code> NICHT: Kehrt den Wahrheitswert um
          </li>
        </ul>
      </Section>

      <Section>
        <h2>UND (&&) - Beide Bedingungen müssen wahr sein</h2>
        <p>
          Der UND-Operator <code>&&</code> gibt nur dann <code>true</code>
          zurück, wenn BEIDE Bedingungen wahr sind. Wenn eine Bedingung falsch
          ist, ist das Ergebnis falsch:
        </p>
        <JSTerminal filename="und-operator.js">
          {`// UND: Beide Bedingungen muessen wahr sein
let alter = 25;
let hatLegi = true;

if (alter >= 18 && hatLegi) {
  console.log("Du darfst Alkohol kaufen."); // Wird ausgeführt
}

// Beispiele mit UND
console.log(true && true);   // true (beide wahr)
console.log(true && false);  // false (eine falsch)
console.log(false && true);  // false (eine falsch)
console.log(false && false); // false (beide falsch)

// Praktische Beispiele
let temperature = 25;
let istSonnig = true;

if (temperature > 20 && istSonnig) {
  console.log("Gutes Wetter fuer einen Spaziergang!");
}

// Mehrere Bedingungen kombinieren
let punkte = 85;
let istBestanden = punkte >= 80 && punkte <= 100;
console.log(istBestanden); // true

// Kurzschluss: Bei false wird der zweite Teil nicht mehr geprüft
let sicher = true;
let zugriffErlaubt = sicher && (10 > 5);
console.log(zugriffErlaubt); // true

// Wenn die erste Bedingung false ist:
let ergebnis = false && (10 / 0 > 5);
console.log(ergebnis); // false (zweiter Teil wird nicht ausgewertet!)
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>ODER (||) - Mindestens eine Bedingung muss wahr sein</h2>
        <p>
          Der ODER-Operator <code>||</code> gibt <code>true</code> zurück, wenn
          MINDESTENS EINE der Bedingungen wahr ist. Nur wenn BEIDE falsch sind,
          ist das Ergebnis falsch:
        </p>
        <JSTerminal filename="oder-operator.js">
          {`// ODER: Mindestens eine Bedingung muss wahr sein
let istWochenende = false;
let istFeiertag = true;

if (istWochenende || istFeiertag) {
  console.log("Du hast frei!"); // Wird ausgeführt
}

// Beispiele mit ODER
console.log(true || true);   // true (beide wahr)
console.log(true || false);  // true (eine wahr)
console.log(false || true);  // true (eine wahr)
console.log(false || false); // false (beide falsch)

// Praktische Beispiele
let schuleHeute = false;
let krank = true;

if (!schuleHeute || krank) {
  console.log("Du musst nicht zur Schule.");
}

// Mehrere Bedingungen kombinieren
let alter = 15;
let hatElternErlaubnis = true;

if (alter < 16 || hatElternErlaubnis) {
  console.log("Du darfst das Spiel spielen.");
}

// ODER mit AND kombinieren
let tag = "Montag";
let stunde = 8;

if ((tag === "Montag" || tag === "Dienstag") && stunde >= 8) {
  console.log("Mathematik Unterricht!");
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>NICHT (!) - Wahrheitswert umkehren</h2>
        <p>
          Der NICHT-Operator <code>!</code> kehrt den Wahrheitswert um:
          <code>true</code> wird zu <code>false</code> und umgekehrt:
        </p>
        <JSTerminal filename="nicht-operator.js">
          {`// NICHT: Kehrt den Wahrheitswert um
let istErwachsen = true;

if (!istErwachsen) {
  console.log("Du bist noch nicht erwachsen."); // Wird NICHT ausgeführt
} else {
  console.log("Du bist erwachsen."); // Wird ausgeführt
}

// Beispiele
console.log(!true);    // false
console.log(!false);   // true
console.log(!0);       // true (0 ist falsey)
console.log(!1);       // false (1 ist truthy)
console.log(!"");      // true (leerer String ist falsey)
console.log(!"Hallo"); // false (nicht-leerer String ist truthy)

// Praktische Beispiele
let hatRegenschirm = false;

if (!hatRegenschirm) {
  console.log("Nimm einen Regenschirm mit!");
}

// Mehrfach verwenden
let istWochenende = false;
let istFeiertag = false;

if (!istWochenende && !istFeiertag) {
  console.log("Du musst zur Schule.");
}

// Oder:
if (!(istWochenende || istFeiertag)) {
  console.log("Du musst zur Schule."); // Gleiches Ergebnis
}

// NICHT mit Typ-Pruefung kombinieren
let eingabe = "";

if (typeof eingabe !== "string") {
  console.log("Fehler: Keine gueltige Eingabe");
} else if (eingabe === "") {
  console.log("Fehler: Eingabe ist leer");
} else {
  console.log("Eingabe ist gueltig");
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Vergleichsoperatoren im Detail</h2>
        <p>
          Hier sind Beispiele, wie die verschiedenen Vergleichsoperatoren
          funktionieren:
        </p>
        <JSTerminal filename="vergleichsoperatoren.js">
          {`let a = 10;
let b = "10";
let c = 10;

// ===: Gleich (typfest)
console.log(a === c);    // true (10 === 10)
console.log(a === b);    // false (Zahl !== String)

// !==: Ungleich (typfest)
console.log(a !== c);    // false (gleich)
console.log(a !== b);    // true (unterschiedlicher Typ)

// >: Groesser
console.log(10 > 5);     // true
console.log(10 > 10);    // false
console.log(5 > 10);     // false

// <: Kleiner
console.log(10 < 5);     // false
console.log(10 < 10);    // false
console.log(5 < 10);     // true

// >=: Groesser oder gleich
console.log(10 >= 10);   // true
console.log(11 >= 10);   // true
console.log(9 >= 10);    // false

// <=: Kleiner oder gleich
console.log(10 <= 10);   // true
console.log(9 <= 10);    // true
console.log(11 <= 10);   // false

// Vergleich mit verschiedenen Typen
console.log(10 > "5");   // true ("5" wird zu 5)
console.log(10 > "15");  // false ("15" wird zu 15)
console.log("10" > "5"); // false ("10" < "5" bei String-Vergleich!)

// String-Vergleich (alphabetisch)
console.log("abc" < "abd"); // true
console.log("Z" < "a");     // true (Grossbuchstaben < Kleinbuchstaben)
`}
        </JSTerminal>
      </Section>



      <Section>
        <h2>Verzweigungen verschachteln</h2>
        <p>
          Bedingungen können ineinander verschachtelt werden. Das heisst, eine
          Bedingung kann innerhalb einer anderen stehen:
        </p>
        <JSTerminal filename="verschachtelt.js">
          {`let alter = 20;
let hatAusweis = true;

// Aeusere Bedingung
if (alter >= 18) {
  // Innere Bedingung
  if (hatAusweis) {
    console.log("Du darfst das Lokal besuchen.");
  } else {
    console.log("Bitte zeige deinen Ausweis.");
  }
} else {
  console.log("Du bist noch zu jung.");
}

// Verschachtelte Bedingungen mit mehreren Ebenen
let punkte = 85;
let istBonus = true;

if (typeof punkte === "number") {
  if (punkte >= 90) {
    if (istBonus) {
      console.log("Note 6 mit Bonus!");
    } else {
      console.log("Note 6");
    }
  } else if (punkte >= 80) {
    console.log("Note 5");
  } else if (punkte >= 70) {
    console.log("Note 4");
  } else {
    console.log("Note 3 oder tiefer");
  }
} else {
  console.log("Fehler: Punkte muessen eine Zahl sein");
}

// Besser: Logische Operatoren verwenden
if (punkte >= 90 && istBonus) {
  console.log("Note 6 mit Bonus!");
} else if (punkte >= 90) {
  console.log("Note 6");
} else if (punkte >= 80) {
  console.log("Note 5");
}
`}
        </JSTerminal>
      </Section>

      <Section>
        <h2>Häufige Fehler und Tipps</h2>
        <p>
          Hier sind einige häufige Fehler, die Anfänger machen, und wie du sie
          vermeiden kannst:
        </p>
        <JSTerminal filename="fehler-vermeiden.js">
          {`// Fehler 1: = statt === (Zuweisung statt Vergleich!)
let x = 5;
if (x = 10) {  // Das weist 10 zu, gibt true zurueck!
  console.log("Das passiert immer!"); // Wird IMMER ausgeführt
}

// Korrekt:
if (x === 10) {
  console.log("x ist 10"); // Wird NICHT ausgeführt
}

// Fehler 2: Typen nicht beachten
let antwort = "5";
if (antwort == 5) {  // Funktioniert, aber unklar!
  console.log("Richtig!");
}

// Besser: Typ prüfen und umwandeln
if (typeof antwort === "string") {
  let zahl = Number(antwort);
  if (zahl === 5) {
    console.log("Richtig!");
  }
}

// Fehler 3: Logische Operatoren falsch verwenden
let alter = 20;
let hatLegi = true;

// ❌ Falsch: || bedeutet "mindestens eine"
if (alter >= 18 || hatLegi) {
  console.log("Du darfst Alkohol kaufen."); // Auch wenn kein Ausweis!
}

// ✅ Richtig: && bedeutet "beide"
if (alter >= 18 && hatLegi) {
  console.log("Du darfst Alkohol kaufen."); // Nur wenn beides zutrifft
}

// Fehler 4: Vergessene geschweifte Klammern
let temp = 25;
if (temp > 20)
  console.log("Warm");  // Funktioniert nur bei einer Zeile
  console.log("Sehr warm"); // Wird IMMER ausgeführt!

// Besser: Immer Klammern verwenden
if (temp > 20) {
  console.log("Warm");
  console.log("Sehr warm"); // Nur wenn Bedingung wahr
}

// Fehler 5: else ohne vorheriges if
// if (true) { }
// else { } // Fehler! else muss nach einem if stehen

// Tipp: Immer === verwenden, nie ==
console.log(5 == "5");    // true (unerwartet!)
console.log(5 === "5");   // false (korrekt!)
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
            Bedingungen erlauben es dem Programm, verschiedene Entscheidungen
            zu treffen
          </li>
          <li>
            <code>if</code> prüft die erste Bedingung, <code>else if</code>{" "}
            weitere, <code>else</code> den Fallback
          </li>
          <li>
            <code>===</code> und <code>!==</code> prüfen Wert UND Typ (empfohlen!)
          </li>
          <li>
            <code>==</code> und <code>!=</code> prüfen nur den Wert (vermeiden!)
          </li>
          <li>
            <code>&&</code> (UND): Beide Bedingungen müssen wahr sein
          </li>
          <li>
            <code>||</code> (ODER): Mindestens eine Bedingung muss wahr sein
          </li>
          <li>
            <code>!</code> (NICHT): Kehrt den Wahrheitswert um
          </li>
          <li>
            Typgleichheit bedeutet, dass sowohl der Wert als auch der Typ
            identisch sein müssen
          </li>
          <li>
            Bedingungen von oben nach unten geprüft - erste passende Bedingung
            gewinnt
          </li>
        </ul>
      </Section>
    </>
  );
}
