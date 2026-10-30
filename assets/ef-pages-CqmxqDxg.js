import{r as D,j as e}from"./react-vendor-BlooTsb4.js";import{J as Zs,b as y,c as Q,d as le}from"./gym-pages-DjeA9R1a.js";import{l as Ks,s as Ms,S as A,L as en}from"./fms-pages-lcHOdWDl.js";const hs=D.createContext({});function sd(){return D.useContext(hs)}function Os({children:s}){const[n,i]=D.useState(!1),[r,t]=D.useState(!1);return e.jsx(hs.Provider,{value:{fullscreen:n,setFullscreen:i,menuVisible:r,setMenuVisible:t},children:s})}const Ts=D.createContext({});function Is({children:s}){const[n,i]=D.useState(!1),[r,t]=D.useState("gym");return D.useEffect(()=>{Ks().then(l=>{l!==null&&t(l)})},[]),D.useEffect(()=>{Ms(r)},[r]),e.jsx(Ts.Provider,{value:{visible:n,setVisible:i,section:r,setSection:t},children:s})}function Ls({filename:s,initialCode:n,defaultCode:i}){return e.jsx(Zs,{filename:s,initialCode:n,defaultCode:i,monacoHeight:"calc(100vh - 300px)",wrapperHeight:"100vh",isFullscreen:!0})}function Cs(){return e.jsx(Os,{children:e.jsx(Is,{children:e.jsx(Ls,{filename:"editor.js",defaultCode:`// Deine JavaScript-Datei
// Schreibe hier deinen Code und klicke "▶ Ausführen"

console.log("Hallo Welt!");
console.log("Willkommen zum JavaScript-Editor!");

// Probiere es aus:
const name = "Lena";
console.log("Hallo " + name + "!");

// Berechnungen
const a = 5;
const b = 3;
console.log(a + " + " + b + " = " + (a + b));
console.log(a + " * " + b + " = " + (a * b));`})})})}const id=Object.freeze(Object.defineProperty({__proto__:null,default:Cs},Symbol.toStringTag,{value:"Module"}));function Gs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Willkommen zu Programmieren mit JavaScript"}),e.jsx("p",{children:"In diesem Kurs lernst du die Grundlagen der Programmierung mit JavaScript. JavaScript ist eine der beliebtesten Programmiersprachen der Welt und wird verwendet, um interaktive Webseiten zu erstellen, Server zu programmieren, Spiele zu entwickeln und vieles mehr."}),e.jsx("p",{children:"Du wirst Schritt für Schritt die wichtigsten Konzepte der Programmierung kennenlernen – von Variablen über Bedingungen bis hin zu Funktionen und Objekten."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Was ist JavaScript?"}),e.jsxs("p",{children:["JavaScript ist eine ",e.jsx("strong",{children:"Allzweck-Programmiersprache"})," ","(general-purpose programming language). Das bedeutet, dass man damit praktisch alles programmieren kann – von einfachen Berechnungen bis hin zu komplexen Anwendungen. JavaScript wurde 1995 von Brendan Eich in nur 10 Tagen entwickelt und hat sich seitdem zur meistverbreiteten Programmiersprache der Welt entwickelt."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Warum JavaScript?"}),e.jsx("p",{children:"Es gibt viele Programmiersprachen – doch JavaScript hat einige besondere Vorteile:"}),e.jsx("h3",{children:"1. Das Web basiert auf JavaScript"}),e.jsxs("p",{children:["Jede moderne Webseite verwendet JavaScript. Ohne JavaScript wären Webseiten statisch – sie könnten keine Interaktionen verarbeiten, keine Daten nachladen und keine dynamischen Inhalte anzeigen. JavaScript ist die ",e.jsx("em",{children:"einzige"})," Sprache, die direkt im Browser läuft und somit jedes Internetprogramm steuern kann."]}),e.jsx("h3",{children:"2. Browser-Automatisierung"}),e.jsx("p",{children:"Mit JavaScript kann man den Browser automatisieren – zum Beispiel kann man Programme schreiben, die automatisch Webseiten öffnen, Formulare ausfüllen oder Daten von Webseiten sammeln. Das ist nützlich für repetitive Aufgaben oder zum Testen von Webseiten."}),e.jsx("h3",{children:"3. Full-Stack: Frontend und Backend"}),e.jsxs("p",{children:["JavaScript läuft nicht nur im Browser (Frontend), sondern auch auf Servern (Backend). Mit ",e.jsx("strong",{children:"Node.js"})," kann man JavaScript als serverseitige Sprache verwenden. Das bedeutet, du kannst mit derselben Sprache sowohl die Benutzeroberfläche als auch die Server-Logik programmieren."]}),e.jsx("h3",{children:"4. KI-Interaktion"}),e.jsx("p",{children:"JavaScript wird häufig verwendet, um mit KI-Systemen zu interagieren. Man kann damit APIs von KI-Diensten aufrufen, Chatbots bauen, oder sogar lokale KI-Modelle im Browser ausführen. Das macht JavaScript zu einer idealen Sprache für KI-Projekte."}),e.jsx("h3",{children:"5. Unterschiedliche Programmierparadigmen"}),e.jsx("p",{children:"JavaScript unterstützt verschiedene Programmierstile (Paradigmen):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prozedural:"})," Schritt-für-Schritt-Anweisungen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekt-orientiert:"})," Programme als Sammlung von Objekten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktional:"})," Programme als Kombination von Funktionen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ereignisgesteuert:"})," Programme reagieren auf Ereignisse (Klicks, Eingaben, etc.)"]})]})]})]})}const rd=Object.freeze(Object.defineProperty({__proto__:null,default:Gs},Symbol.toStringTag,{value:"Module"}));function $s(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"JavaScript-Einstieg: Ein kurzer Überblick"}),e.jsxs("p",{children:["In diesem Kapitel siehst du eine ",e.jsx("strong",{children:"schnelle Übersicht"}),"über die wichtigsten JavaScript-Konzepte. Du wirst viele verschiedene Code-Beispiele anschauen, ausführen und kleine Änderungen ausprobieren."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es geht jetzt nicht darum, jede Syntax im Detail zu verstehen – das lernen wir in den folgenden Kapiteln. Schau dir die Beispiele an, führe sie aus und überlege, was du beobachten kannst. Was passiert, wenn du den Code änderst?"]})]}),e.jsx(A,{children:e.jsx(en,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Code mit ",e.jsx("code",{children:"console.log()"})," ausgeben und verstehen"]}),e.jsxs("li",{children:["Variablen mit ",e.jsx("code",{children:"const"})," und ",e.jsx("code",{children:"let"})," verwenden"]}),e.jsx("li",{children:"Einfache Berechnungen mit Operatoren durchführen"}),e.jsxs("li",{children:["Bedingungen mit ",e.jsx("code",{children:"if/else"})," erkennen"]}),e.jsx("li",{children:"Schleifen zum Wiederholen von Code verstehen"}),e.jsx("li",{children:"Arrays als Listen von Werten verwenden"}),e.jsx("li",{children:"Funktionen als wiederverwendbare Code-Blöcke kennenlernen"})]})})}),e.jsxs(A,{children:[e.jsx("h2",{children:"Code direkt ausprobieren"}),e.jsxs("p",{children:["Unten kannst du JavaScript-Code schreiben und direkt ausführen. Klicke auf ",e.jsx("strong",{children:"«Ausführen»"}),", um das Programm zu starten. Die Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig verändern und erneut ausführen!"]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 1: Ausgabe in der Konsole"}),e.jsxs("p",{children:["Der einfachste Einstieg ist ",e.jsx("code",{children:"console.log()"}),". Dieser Befehl gibt Text in der Konsole aus. Probiere aus, wie der Text sich verändert, wenn du die Wörter im Code änderst!"]}),e.jsx(y,{filename:"ausgabe.js",children:`// Text in der Konsole ausgeben
console.log("Hallo zusammen!");
console.log("Willkommen zu JavaScript!");

// Mit + kannst du Texte verbinden
const name = "Lena";
console.log("Hallo " + name + "!");

// Du kannst auch Zahlen ausgeben
console.log("Das Jahr ist 2025.");
console.log(2025);`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 2: Variablen – Werte speichern"}),e.jsxs("p",{children:["Variablen sind wie Behälter, die Werte speichern. Mit"," ",e.jsx("code",{children:"const"})," definieren wir eine Variable, die nicht verändert werden kann. Mit ",e.jsx("code",{children:"let"})," können wir den Wert später ändern. Probiere aus, was passiert, wenn du Zahlen oder Texte änderst!"]}),e.jsx(y,{filename:"variablen.js",children:`// const: Wert kann NICHT geändert werden
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
// schulname = "Andere Schule"; // Fehler!`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 3: Berechnungen"}),e.jsx("p",{children:"Mit JavaScript kannst du einfache und komplexe Berechnungen durchführen. Probiere verschiedene Operatoren aus!"}),e.jsx(y,{filename:"berechnungen.js",children:`// Grundrechenarten
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
console.log("Neuer Preis: " + neupreis + " CHF");`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 4: Bedingungen – Programme steuern"}),e.jsxs("p",{children:["Mit ",e.jsx("code",{children:"if"})," und ",e.jsx("code",{children:"else"})," kannst du Programme unterschiedlich reagieren lassen, je nach Bedingung. Ändere die Werte und überlege, welcher Teil ausgeführt wird!"]}),e.jsx(y,{filename:"bedingungen.js",children:`// Alter prüfen
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
}`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 5: Arrays – Listen von Werten"}),e.jsx("p",{children:"Arrays sind Listen von Werten. Sie ermöglichen es, mehrere Werte in einer Variable zu speichern. Ändere die Einträge und probiere aus!"}),e.jsx(y,{filename:"arrays.js",children:`// Ein Array erstellen
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
console.log(lieblingsessen);`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 6: Funktionen – Code wiederverwenden"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Code-Blöcke. Sie helfen, Code zu organisieren und Duplikate zu vermeiden. Probiere andere Namen und Zahlen aus!"}),e.jsx(y,{filename:"funktionen.js",children:`// Funktion definieren
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
console.log("100 * 2 = " + verdoppeln(100));`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Beispiel 7: Schleifen – Code wiederholen"}),e.jsxs("p",{children:["Schleifen wiederholen Code mehrere Male. Die ",e.jsx("code",{children:"for"}),"-Schleife ist die häufigste Form. Probiere andere Zahlen für die Grenzen aus!"]}),e.jsx(y,{filename:"schleifen.js",children:`// Einfache Schleife: Zahlen ausgeben
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
console.log("  Start! 🚀");`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Weiter geht's mit den Grundlagen"}),e.jsx("p",{children:"In den folgenden Kapiteln wirst du die einzelnen Konzepte detailliert kennenlernen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variablen:"})," Datentypen, Zuweisungen, const vs. let"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingungen:"})," if/else, Vergleichsoperatoren, logische Operatoren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Listen:"})," Arrays, Methoden, Durchlaufen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schleifen:"})," for, while, for...of"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," Definition, Parameter, Rückgabewerte"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekte:"})," Eigenschaften, Methoden, this"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionales Programmieren:"})," Map, Filter, Reduce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Klassen:"})," Vererbung, OOP-Prinzipien"]})]})]})]})}const td=Object.freeze(Object.defineProperty({__proto__:null,default:$s},Symbol.toStringTag,{value:"Module"}));function Vs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Arbeitsauftrag: Grundinstallation"}),e.jsx("p",{children:"Bevor wir mit dem Programmieren beginnen, musst du deine Entwicklungsumgebung einrichten. Am Ende dieser Installation musst du folgende Punkte erledigt haben:"}),e.jsx("h3",{children:"Was am Ende installiert sein muss:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ein Editor zum Bearbeiten von JavaScript-Code"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Empfehlung: Visual Studio Code (VSCode)"}),e.jsx("li",{children:"Alternativen: Zed, VSCodium, Neovim, Sublime Text, WebStorm"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Eine Umgebung zum Ausführen von JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Empfehlung: Node.js"}),e.jsx("li",{children:"Alternativen: Deno, Bun"}),e.jsx("li",{children:"Oder: JavaScript im Browser (Developer Tools)"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git als Versionierungswerkzeug"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Git muss auf deinem Computer installiert und konfiguriert sein"}),e.jsx("li",{children:"Dein Name und E-Mail müssen als Git-Identität gesetzt sein"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ein GitHub-Account mit einem Repository für JavaScript-Aufgaben"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstelle ein ",e.jsx("strong",{children:"privates Repository"})," auf GitHub"]}),e.jsx("li",{children:"Dieses Repository dient als Ablage für alle deine JavaScript-Aufgaben"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lehrperson als Collaborator hinzugefügt"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["GitHub-Alias der Lehrperson: ",e.jsx("strong",{children:"cedricgeissmann"})]}),e.jsx("li",{children:"Füge diese Person als Collaborator in deinem Repository hinzu"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Erledige alle fünf Punkte bevor du mit den ersten Programmieraufgaben beginnst. Ohne diese Grundinstallation kannst du deine Aufgaben nicht korrekt abgeben."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"JavaScript ausführen"}),e.jsx("p",{children:"JavaScript-Code kann auf verschiedene Arten ausgeführt werden:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Im Browser:"})," Öffne die Developer Tools (F12) und gehe zum Tab «Console»"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Im Terminal:"})," Speichere den Code in einer"," ",e.jsx("code",{children:".js"}),"-Datei und führe ihn mit Node.js aus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Online:"})," Verwende den JSTerminal hier auf dieser Seite oder Online-Editoren wie"," ",e.jsx("a",{href:"https://codepen.io",target:"_blank",rel:"noopener noreferrer",children:"CodePen"})," ","oder"," ",e.jsx("a",{href:"https://jsfiddle.net",target:"_blank",rel:"noopener noreferrer",children:"JSFiddle"})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Arbeitsauftrag: Deine Entwicklungsumgebung einrichten"}),e.jsx("h3",{children:"1. Code direkt ausprobieren — JSTerminal"}),e.jsxs("p",{children:["Am einfachsten kannst du JavaScript direkt hier im folgenden Terminal ausprobieren. Schreibe Code in den Editor und klicke auf"," ",e.jsx("strong",{children:"«▶ Ausführen»"}),", um das Programm zu starten. Die Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig verändern und erneut ausführen!"]}),e.jsx("h3",{children:"2. Lokale Entwicklungsumgebung"}),e.jsxs("p",{children:["Für das Programmieren auf deinem eigenen Computer brauchst du ein Werkzeug, das JavaScript-Code ausführen kann. Du darfst selbst entscheiden, welches Werkzeug du verwendest — hier bist du frei! Wichtig ist nur, dass du JavaScript im Browser ",e.jsx("em",{children:"und"})," lokal ausführen kannst."]}),e.jsx("p",{children:e.jsx("strong",{children:"Empfohlene Laufzeit-Umgebungen:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})," ","(empfohlen für Einsteiger)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://deno.com",target:"_blank",rel:"noopener noreferrer",children:"Deno"})," ","(moderne Alternative zu Node.js)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://bun.sh",target:"_blank",rel:"noopener noreferrer",children:"Bun"})," ","(schnelle JavaScript-Engine)"]})]}),e.jsxs("p",{children:["Alle drei ermöglichen es dir, ",e.jsx("code",{children:".js"}),"-Dateien lokal über das Terminal auszuführen. Node.js ist am weitesten verbreitet und wird in der Industrie am häufigsten verwendet — es ist daher die empfehlenswertes Wahl für den Einstieg."]}),e.jsx("h3",{children:"3. Empfohlene Editoren"}),e.jsx("p",{children:"Ein guter Code-Editor macht das Programmieren viel einfacher. Hier sind einige empfehlenswerte Editoren:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer",children:"Visual Studio Code (VSCode)"})," ","(am weitesten verbreitet, kostenlos, viele Erweiterungen)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://zed.dev",target:"_blank",rel:"noopener noreferrer",children:"Zed"})," ","(schneller, moderner Editor)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://vscodium.com",target:"_blank",rel:"noopener noreferrer",children:"VSCodium"})," ","(kostenlose, open-source Version von VSCode)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://neovim.io",target:"_blank",rel:"noopener noreferrer",children:"Neovim"})," ","(für Fortgeschrittene, terminalbasiert)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.sublimetext.com",target:"_blank",rel:"noopener noreferrer",children:"Sublime Text"})," ","(leichtgewichtig und schnell)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer",children:"WebStorm"})," ","(IDE von JetBrains, kostenpflichtig, kostenlose Testversion)"]})]}),e.jsx("p",{children:"Alle genannten Editoren sind kostenlos oder haben eine kostenlose Version. Du kannst selbst ausprobieren, welcher dir am besten liegt."}),e.jsx("h3",{children:"4. Wichtige Regel: Lernen durch eigenes Coden"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Coding-Agents (wie ChatGPT, Claude, Cursor-Agent, etc.) sollen während dem Lernprozess nicht verwendet werden, um Code zu generieren."})," ","Du lernst Programmieren nur, wenn du selbst direkt mit dem Code arbeitest und ihn verstehst."]}),e.jsx("p",{children:e.jsx("strong",{children:"Was du verwenden darfst:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Kurze, einfache Code-Snippets (auch generiert) — jedoch nicht einfach kopieren, vor allem am Anfang nicht!"}),e.jsx("li",{children:"Erklärungen zum Code — du darfst dir von Coding-Agents erklären lassen, was ein Code-Snippet macht"}),e.jsxs("li",{children:["Dokumentation und Tutorials — z.B. die offizielle"," ",e.jsx("a",{href:"https://developer.mozilla.org/de/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer",children:"MDN JavaScript Dokumentation"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Wenn du den Code nicht selbst schreiben und erklären kannst, hast du nichts gelernt. Der Weg zum Ziel ist das Programmieren selbst — nicht das Resultat."]}),e.jsx("h3",{children:"5. Versionierung mit Git und GitHub"}),e.jsxs("p",{children:["Bei der Arbeit mit Code braucht es immer Versionierungstools. Hier verwenden wir ",e.jsx("strong",{children:"Git"})," in Kombination mit"," ",e.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Was du tun musst:"})}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstelle ein ",e.jsx("strong",{children:"privates Repository"})," auf GitHub"]}),e.jsxs("li",{children:["Füge mich als Collaborator hinzu — mein GitHub-Alias ist"," ",e.jsx("strong",{children:"cedricgeissmann"})]}),e.jsx("li",{children:"Speichere deine Programme in diesem Repository"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Organisation:"})," Die Struktur deines Repositories ist dir selbst überlassen — es gibt keine Vorgaben. Du kannst dich dazu einlesen, was sinnvoll ist. Eine mögliche Struktur:"]}),e.jsx("pre",{children:e.jsx("code",{children:`my-javascript-work/
├── 01-variablen/
│   └── hello.js
├── 02-bedingungen/
│   └── alter-check.js
├── 03-schleifen/
│   └── zaehlen.js
└── README.md`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Entscheidung: Browser vs. Terminal"})," — Du kannst selbst entscheiden, ob du deinen Code lieber über JavaScript im Browser ausführst oder lokal mit Node.js über das Terminal. Beide Wege haben ihre Vorteile und sind wichtige Fertigkeiten."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Dein erstes Programm"}),e.jsxs("p",{children:["Der einfachste Weg, JavaScript zu starten, ist die"," ",e.jsx("code",{children:"console.log"}),"-Funktion:"]}),e.jsx(y,{filename:"hello.js",children:`// Das ist ein Kommentar - er wird nicht ausgeführt

// Ausgabe in der Konsole
console.log("Hallo Welt!");
console.log("Ich lerne JavaScript!");
console.log("Programmieren macht Spass!");`})]})]})}const ld=Object.freeze(Object.defineProperty({__proto__:null,default:Vs},Symbol.toStringTag,{value:"Module"}));function Rs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Arbeitsauftrag 01: JavaScript-Einsteigeraufgaben"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie 20 kleine Programmieraufgaben. Sie decken die vier zentralen Themen ab: ",e.jsx("strong",{children:"Variablen"}),","," ",e.jsx("strong",{children:"Bedingungen"}),", ",e.jsx("strong",{children:"Listen"})," und"," ",e.jsx("strong",{children:"Schleifen"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen oder Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte durch eigenes Ausprobieren zu verstehen."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe über GitHub"}),e.jsx("p",{children:"Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie diesen Schritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstellen Sie in Ihrem Repository einen Ordner"," ",e.jsx("code",{children:"aufgaben-01"})]}),e.jsxs("li",{children:["Speichern Sie jede Aufgabe als eigene ",e.jsx("code",{children:".js"}),"-Datei (z.B."," ",e.jsx("code",{children:"01-variablen-interview.js"}),")"]}),e.jsx("li",{children:"Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht"}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"letzte Commit"})," muss die Nachricht"," ",e.jsx("code",{children:"Arbeitsauftrag 01 bearbeitet"})," enthalten"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Beispiel:"})}),e.jsx("pre",{children:e.jsx("code",{children:`git add .
git commit -m "Arbeitsauftrag 01 bearbeitet"`})})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Interview-Programm
// Was ich gemacht habe: Variablen für Name, Alter und Beruf erstellt
// Was ich gelernt habe: const kann nicht geändert werden, let schon
// Schwierigkeit: leicht`})}),e.jsxs("p",{children:["Sie können auch eine ",e.jsx("code",{children:"README.md"})," im Ordner"," ",e.jsx("code",{children:"aufgaben-01"})," erstellen, wo Sie alle Aufgaben auflisten."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsx("h3",{children:"Teil 1: Variablen (Aufgabe 1–5)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Persönliches Interview"}),e.jsxs("p",{children:["Erstellen Sie ein Programm, das eine Person vorstellt. Definieren Sie Variablen für Name, Alter, Wohnort und Lieblingsfach. Geben Sie alle Informationen mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Umrechnungstool"}),e.jsx("p",{children:"Schreiben Sie ein Programm, das einen Betrag in CHF in EUR umrechnet (verwenden Sie einen fiktiven Wechselkurs, z.B. 1 CHF = 0.95 EUR). Definieren Sie den Betrag und den Kurs als Variablen."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Flächberechnung"}),e.jsx("p",{children:"Berechnen Sie die Fläche und den Umfang eines Rechtecks. Definieren Sie Länge und Breite als Variablen und geben Sie die Resultate aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Geschwindigkeit berechnen"}),e.jsx("p",{children:"Berechnen Sie die Durchschnittsgeschwindigkeit: Eine Person läuft 42 km in 3 Stunden und 15 Minuten. Definieren Sie die Strecke und die Zeit als Variablen und berechnen Sie die Geschwindigkeit in km/h."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Persönliches Profil"}),e.jsxs("p",{children:["Definieren Sie mehrere Variablen für ein fiktives Profil: Name, Alter, Hobby und Lieblingsessen. Geben Sie alle Informationen in einer zusammenhängenden Vorstellung mit ",e.jsx("code",{children:"console.log"})," ","aus. Nutzen Sie mindestens vier Variablen."]})]}),e.jsx("h3",{children:"Teil 2: Bedingungen (Aufgabe 6–10)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Altersprüfung"}),e.jsx("p",{children:"Prüfen Sie, ob eine Person volljährig ist (≥ 18 Jahre). Geben Sie eine passende Meldung aus. Testen Sie das Programm mit verschiedenen Alterswerten."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Notensystem"}),e.jsxs("p",{children:["Definieren Sie eine Note (1–6) als Variable und geben Sie mit"," ",e.jsx("code",{children:"if / else if / else"}),' eine Textbeschreibung aus (z.B. 6 = "Sehr gut", 5 = "Gut" usw.).']})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Parität prüfen"}),e.jsxs("p",{children:["Prüfen Sie, ob eine Zahl gerade oder ungerade ist. Verwenden Sie den Modulo-Operator (",e.jsx("code",{children:"%"}),")."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Jahreszeit bestimmen"}),e.jsx("p",{children:"Definieren Sie eine Variable für den Monat (1–12) und geben Sie die passende Jahreszeit aus (Frühling: 3–5, Sommer: 6–8, Herbst: 9–11, Winter: 12, 1–2)."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Login-System"}),e.jsx("p",{children:"Prüfen Sie, ob ein Benutzername und ein Passwort korrekt sind. Definieren Sie den erwarteten Benutzernamen und das Passwort als Variablen und vergleichen Sie sie mit den Benutzereingaben (ebenfalls Variablen). Geben Sie eine passende Meldung aus."})]}),e.jsx("h3",{children:"Teil 3: Listen / Arrays (Aufgabe 11–15)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Einkaufsliste"}),e.jsx("p",{children:"Erstellen Sie ein Array mit mindestens 5 Einkaufsartikeln. Geben Sie jeden Artikel mit einer Nummer aus (1. Milch, 2. Brot usw.). Fügen Sie noch einen Artikel hinzu und löschen Sie den letzten."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 12: Durchschnitt berechnen"}),e.jsx("p",{children:"Definieren Sie ein Array mit mindestens 5 Noten. Berechnen Sie den Durchschnittswert und geben Sie ihn aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 13: Grösstes Element finden"}),e.jsx("p",{children:"Definieren Sie ein Array mit Temperaturwerten. Finden Sie die höchste und die tiefste Temperatur und geben Sie beide aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 14: Array umdrehen"}),e.jsx("p",{children:"Erstellen Sie ein Array mit den Wochentagen. Kehren Sie die Reihenfolge um (von Sonntag bis Montag statt Montag bis Sonntag) und geben Sie das neue Array aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 15: Filtern"}),e.jsx("p",{children:"Definieren Sie ein Array mit Zahlen. Erstellen Sie ein neues Array, das nur die geraden Zahlen enthält, und geben Sie es aus."})]}),e.jsx("h3",{children:"Teil 4: Schleifen (Aufgabe 16–20)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 16: Multiplikationstabelle"}),e.jsxs("p",{children:["Schreiben Sie eine ",e.jsx("code",{children:"for"}),"-Schleife, die das kleine Einmaleins von 1 bis 10 ausgibt."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 17: Summe berechnen"}),e.jsxs("p",{children:["Berechnen Sie die Summe aller Zahlen von 1 bis 100 mit einer"," ",e.jsx("code",{children:"for"}),"-Schleife. Geben Sie das Resultat aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 18: Fakultät"}),e.jsxs("p",{children:["Berechnen Sie die Fakultät einer Zahl (z.B. 5! = 5 × 4 × 3 × 2 × 1) mit einer ",e.jsx("code",{children:"for"}),"-Schleife."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 19: Array mit Schleife durchlaufen"}),e.jsxs("p",{children:["Erstellen Sie ein Array mit Ihren Lieblingsfilmen. Durchlaufen Sie es mit einer ",e.jsx("code",{children:"for...of"}),"-Schleife und geben Sie jeden Film mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 20: Palindrom-Prüfer"}),e.jsxs("p",{children:["Erstellen Sie ein Skript, das prüft, ob ein über"," ",e.jsx("code",{children:"process.argv"}),'(Index 2) übergebenes Wort ein Palindrom ist. Ein Palindrom liest sich vorwärts und rückwärts gleich (z.B. "anna", "otto", "abba").']}),e.jsx("p",{children:e.jsx("strong",{children:"Aufgaben:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Lesen Sie das Wort aus ",e.jsx("code",{children:"process.argv[2]"})," aus"]}),e.jsxs("li",{children:["Erzeugen Sie die umgekehrte Version des Wortes (z.B. mit"," ",e.jsx("code",{children:"split('')"}),", ",e.jsx("code",{children:"reverse()"}),","," ",e.jsx("code",{children:"join('')"}),")"]}),e.jsx("li",{children:"Vergleichen Sie beide Versionen"}),e.jsxs("li",{children:["Geben Sie ",e.jsx("code",{children:'"<Wort> ist ein Palindrom"'})," oder"," ",e.jsx("code",{children:'"<Wort> ist kein Palindrom"'})," aus"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Testen Sie im Terminal:"})}),e.jsxs("p",{children:[e.jsx("code",{children:"node palindrom.js Anna"})," →"," ",e.jsx("code",{children:"Anna ist ein Palindrom"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"node palindrom.js Hallo"})," →"," ",e.jsx("code",{children:"Hallo ist kein Palindrom"})]})]})]})]})}const cd=Object.freeze(Object.defineProperty({__proto__:null,default:Rs},Symbol.toStringTag,{value:"Module"}));function Hs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Was sind Variablen?"}),e.jsx("p",{children:'Variablen sind wie Behälter oder Boxen, in denen du Werte speichern kannst. Stell dir vor, du hast mehrere Schubladen in einem Schrank. Jede Schublade hat einen Namen (z.B. "Schulhefte", "Bücher") und enthält etwas (die Werte). In der Programmierung funktioniert das ähnlich: Eine Variable hat einen Namen und speichert einen Wert.'}),e.jsx("p",{children:"Warum braucht man Variablen? Stell dir vor, du möchtest den Preis eines Produkts berechnen. Du musst den Grundpreis, den Steuernsatz und den Rabatt speichern und damit rechnen. Ohne Variablen müsstest du jede Zahl immer wieder tippen. Mit Variablen speicherst du die Werte einmal und kannst sie später beliebig oft verwenden."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Variablen deklarieren"}),e.jsx("p",{children:"In JavaScript kannst du Variablen auf drei Arten erstellen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"let"}),": Eine Variable, deren Wert später geändert werden kann (wie eine beschreibbare Schublade)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"}),": Eine Konstante, deren Wert nie geändert werden darf (wie eine verschlossene Schublade)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var"}),": Die veraltete Methode aus alten JavaScript-Versionen"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Empfehlung:"})," Verwende immer zuerst ",e.jsx("code",{children:"const"}),". Nur wenn du den Wert später wirklich ändern musst, verwende"," ",e.jsx("code",{children:"let"}),". So verhinderst du unbeabsichtigte Fehler."]}),e.jsx(y,{filename:"variablen.js",children:`
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Benennungsregeln für Variablen"}),e.jsx("p",{children:"Variablennamen müssen bestimmte Regeln befolgen:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dürfen nur Buchstaben, Zahlen, $ und _ enthalten"}),e.jsx("li",{children:"Dürfen nicht mit einer Zahl beginnen"}),e.jsx("li",{children:"Sind gross-/kleinschreibungsabhängig (alter ≠ Alter)"}),e.jsx("li",{children:"Dürfen keine reservierten Wörter sein (wie let, const, if, ...)"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gute Namenskonvention:"})," Verwende camelCase und mache den Namen beschreibend:"]}),e.jsx(y,{filename:"benennung.js",children:`
// Schlechte Namen
let a = 10;
let x = "Anna";

// Gute Namen
let schuelerAlter = 15;
let schuelerName = "Anna";
let preisInFranken = 25.50;
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Datentypen in JavaScript"}),e.jsx("p",{children:'Jeder Wert in JavaScript hat einen bestimmten Typ (eine "Klasse"). Die wichtigsten Typen sind:'}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"string"}),": Texte, geschrieben in Anführungszeichen ('', \", oder ``)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"number"}),": Zahlen, sowohl ganze Zahlen als auch Dezimalzahlen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"boolean"}),": Wahrheitswerte, nur true oder false"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"array"}),": Eine geordnete Liste von Werten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"object"}),": Eine Sammlung von Schlüssel-Wert-Paaren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"undefined"}),": Eine Variable, der noch kein Wert zugewiesen wurde"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"null"}),': Beabsichtigt "leer" oder "kein Wert"']})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Mit typeof den Datentyp prüfen"}),e.jsxs("p",{children:["JavaScript bietet den Operator ",e.jsx("code",{children:"typeof"}),", um den Typ eines Werts zu überprüfen. Das ist besonders hilfreich, wenn du nicht sicher bist, welchen Typ eine Variable hat, oder wenn du deinen Code testen möchtest."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"typeof variable"})," gibt einen String zurück, der den Typ beschreibt."]}),e.jsx(y,{filename:"typeof.js",children:`
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
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Beachte, dass ",e.jsx("code",{children:"typeof null"})," ",e.jsx("code",{children:'"object"'})," zurückgibt. Das ist ein alter Bug in JavaScript, der aus Kompatibilitätsgründen bestehen bleibt. In der Praxis ist"," ",e.jsx("code",{children:"null"}),' aber kein Objekt, sondern bedeutet "kein Wert".']})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Datentypen im Detail"}),e.jsx("h3",{children:"Strings (Texte)"}),e.jsx("p",{children:"Strings können mit einfachen (''), doppelten (\") oder Backticks (``) geschrieben werden. Backticks ermöglichen Template Literals, also das Einfügen von Variablen direkt im Text:"}),e.jsx(y,{filename:"strings.js",children:`
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
`}),e.jsx("h3",{children:"Numbers (Zahlen)"}),e.jsxs("p",{children:["Numbers umfassen sowohl ganze Zahlen als auch Dezimalzahlen. Es gibt"," ","keine separate Type für ganze Zahlen in JavaScript:"]}),e.jsx(y,{filename:"numbers.js",children:`
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
`}),e.jsx("h3",{children:"Booleans (Wahrheitswerte)"}),e.jsxs("p",{children:["Booleans haben nur zwei mögliche Werte: ",e.jsx("code",{children:"true"})," und"," ",e.jsx("code",{children:"false"}),". Sie werden oft in Bedingungen verwendet:"]}),e.jsx(y,{filename:"booleans.js",children:`
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Datentypen umwandeln (Casting)"}),e.jsx("p",{children:'Oft musst du Werte von einem Typ in einen anderen umwandeln. JavaScript macht das teilweise automatisch ("coercion"), aber es ist besser, dies explizit zu machen. Hier sind die wichtigsten Methoden:'}),e.jsx("h3",{children:"Von String zu Number"}),e.jsxs("p",{children:["Wenn du einen Text wie ",e.jsx("code",{children:'"42"'})," in eine echte Zahl"," ",e.jsx("code",{children:"42"})," umwandeln möchtest, verwende ",e.jsx("code",{children:"Number()"})," ","oder ",e.jsx("code",{children:"parseInt()"})," / ",e.jsx("code",{children:"parseFloat()"}),":"]}),e.jsx(y,{filename:"string-zahl.js",children:`
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
`}),e.jsx("h3",{children:"Von Number zu String"}),e.jsxs("p",{children:["Um eine Zahl in einen Text umzuwandeln, verwende"," ",e.jsx("code",{children:".toString()"})," oder ",e.jsx("code",{children:"String()"}),":"]}),e.jsx(y,{filename:"zahl-string.js",children:`
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
`}),e.jsx("h3",{children:"Von String zu Boolean"}),e.jsx("p",{children:"Die Umwandlung von Strings zu Booleans folgt diesen Regeln:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Leere Strings ",e.jsx("code",{children:'""'})," werden zu ",e.jsx("code",{children:"false"})]}),e.jsxs("li",{children:["Alle anderen Strings werden zu ",e.jsx("code",{children:"true"})]})]}),e.jsx(y,{filename:"string-boolean.js",children:`
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
`}),e.jsx("h3",{children:"Von Boolean zu Number"}),e.jsx("p",{children:"Booleans können in Zahlen umgewandelt werden:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"true"})," wird zu ",e.jsx("code",{children:"1"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"false"})," wird zu ",e.jsx("code",{children:"0"})]})]}),e.jsx(y,{filename:"boolean-zahl.js",children:`
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Umgekehrt: 0 wird zu false, alles andere zu true
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true
console.log(Boolean(-1));    // true
console.log(Boolean(0.1));   // true
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Automatische Typumwandlung (Type Coercion)"}),e.jsx("p",{children:"JavaScript versucht oft, Typen automatisch umzuwandeln. Das kann hilfreich sein, aber auch zu unerwarteten Ergebnissen führen:"}),e.jsx(y,{filename:"coercion.js",children:`
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Variablen speichern Werte und können mit ",e.jsx("code",{children:"let"})," oder"," ",e.jsx("code",{children:"const"})," erstellt werden"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"})," für unveränderliche Werte, ",e.jsx("code",{children:"let"})," für veränderliche Werte"]}),e.jsx("li",{children:"Die wichtigsten Typen sind: string, number, boolean, array, object"}),e.jsxs("li",{children:[e.jsx("code",{children:"typeof"})," gibt den Typ einer Variable zurück"]}),e.jsxs("li",{children:["Explizite Typumwandlung mit ",e.jsx("code",{children:"Number()"}),","," ",e.jsx("code",{children:"String()"}),", ",e.jsx("code",{children:"Boolean()"})," ist besser als automatische Umwandlung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"parseInt()"})," und ",e.jsx("code",{children:"parseFloat()"})," extrahieren"," ","Zahlen aus Strings"]})]})]})]})}const ad=Object.freeze(Object.defineProperty({__proto__:null,default:Hs},Symbol.toStringTag,{value:"Module"}));function Js(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Was sind Bedingungen?"}),e.jsx("p",{children:"Bedingungen erlauben es deinem Programm, verschiedene Entscheidungen zu treffen. Abhängig davon, ob eine Bedingung wahr (true) oder falsch (false) ist, wird unterschiedlicher Code ausgeführt."}),e.jsx("p",{children:"Stell dir vor, du gehst zur Schule. Was du mitbringst, hängt vom Wetter ab:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Wenn es regnet, bringst du einen Regenschirm mit"}),e.jsx("li",{children:"Sonst wenn es sehr warm ist, bringst du Sonnencreme mit"}),e.jsx("li",{children:"Sonst bringst du einfach dein normales Schulzeug mit"})]}),e.jsx("p",{children:"Genau so funktionieren Bedingungen in JavaScript: Das Programm prüft eine Bedingung und führt den passenden Code aus."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"if, else if, else"}),e.jsxs("p",{children:["Die Grundstruktur einer Bedingung in JavaScript besteht aus"," ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"else if"})," (optional) und ",e.jsx("code",{children:"else"})," ","(optional):"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if"}),": Immer notwendig. Die erste Bedingung, die geprüft wird"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else if"}),": Optional. Weitere Bedingungen, die geprüft werden, wenn die vorherige falsch war"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"}),": Optional. Der Code, der ausgeführt wird, wenn alle vorherigen Bedingungen falsch waren"]})]}),e.jsx(y,{filename:"bedingungen.js",children:`let temp = 25;

if (temp > 30) {
  console.log("Es ist sehr warm!");
} else if (temp > 20) {
  console.log("Es ist angenehm warm.");
} else {
  console.log("Es ist kühl.");
}
// Ausgabe: "Es ist angenehm warm."`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," JavaScript prüft die Bedingungen von oben nach unten. Sobald eine Bedingung wahr ist, wird der zugehörige Code ausgeführt und der Rest wird ignoriert. Auch wenn mehrere Bedingungen wahr wären, wird nur der erste passende Block ausgeführt."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Bedingungen mit Variablen"}),e.jsx("p",{children:"Bedingungen arbeiten oft mit Variablen. Hier ein Beispiel, das verschiedene Variablen kombiniert:"}),e.jsx(y,{filename:"bedingungen-variablen.js",children:`let alter = 18;
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Vergleichsoperatoren"}),e.jsxs("p",{children:["Vergleichsoperatoren vergleichen zwei Werte und geben"," ",e.jsx("code",{children:"true"})," oder ",e.jsx("code",{children:"false"})," zurück. Sie werden oft in Bedingungen verwendet:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"==="})," gleich (typfest - Wert UND Typ müssen gleich sein)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!=="})," ungleich (typfest - Wert ODER Typ muss unterschiedlich sein)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," gleich (nur Wert, Typ wird ignoriert)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!="})," ungleich (nur Wert, Typ wird ignoriert)"]}),e.jsxs("li",{children:[e.jsx("code",{children:">"})," grösser"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<"})," kleiner"]}),e.jsxs("li",{children:[e.jsx("code",{children:">="})," grösser oder gleich"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<="})," kleiner oder gleich"]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Typfest vergleichen (=== und !==)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Empfehlung:"})," Verwende immer ",e.jsx("code",{children:"==="})," und"," ",e.jsx("code",{children:"!=="})," zum Vergleichen. Diese Operatoren prüfen sowohl den Wert als auch den Typ. Das vermeidet viele Fehler."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beispiel:"})," ",e.jsx("code",{children:"==="})," prüft, ob zwei Werte identisch sind - sowohl der Wert als auch der Typ muss übereinstimmen:"]}),e.jsx(y,{filename:"typfest-vergleich.js",children:`// ===: Typfest gleich (Wert UND Typ müssen gleich sein)
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Typgleichheit im Detail"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Typgleichheit"})," bedeutet, dass nicht nur der Wert, sondern auch der Datentyp identisch sein muss. Das ist wichtig, denn in JavaScript kann ",e.jsx("code",{children:'"5"'})," (ein String) nicht einfach als",e.jsx("code",{children:"5"})," (eine Zahl) betrachtet werden - sie haben unterschiedliche Bedeutung und Funktionen."]}),e.jsx(y,{filename:"typgleichheit.js",children:`// Typgleichheit prüfen mit typeof und ===
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Logische Operatoren"}),e.jsx("p",{children:"Logische Operatoren kombinieren mehrere Bedingungen. Sie arbeiten mit booleschen Werten (true/false):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," UND: Beide Bedingungen müssen wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," ODER: Mindestens eine Bedingung muss wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!"})," NICHT: Kehrt den Wahrheitswert um"]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"UND (&&) - Beide Bedingungen müssen wahr sein"}),e.jsxs("p",{children:["Der UND-Operator ",e.jsx("code",{children:"&&"})," gibt nur dann ",e.jsx("code",{children:"true"}),"zurück, wenn BEIDE Bedingungen wahr sind. Wenn eine Bedingung falsch ist, ist das Ergebnis falsch:"]}),e.jsx(y,{filename:"und-operator.js",children:`// UND: Beide Bedingungen muessen wahr sein
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"ODER (||) - Mindestens eine Bedingung muss wahr sein"}),e.jsxs("p",{children:["Der ODER-Operator ",e.jsx("code",{children:"||"})," gibt ",e.jsx("code",{children:"true"})," zurück, wenn MINDESTENS EINE der Bedingungen wahr ist. Nur wenn BEIDE falsch sind, ist das Ergebnis falsch:"]}),e.jsx(y,{filename:"oder-operator.js",children:`// ODER: Mindestens eine Bedingung muss wahr sein
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"NICHT (!) - Wahrheitswert umkehren"}),e.jsxs("p",{children:["Der NICHT-Operator ",e.jsx("code",{children:"!"})," kehrt den Wahrheitswert um:",e.jsx("code",{children:"true"})," wird zu ",e.jsx("code",{children:"false"})," und umgekehrt:"]}),e.jsx(y,{filename:"nicht-operator.js",children:`// NICHT: Kehrt den Wahrheitswert um
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Vergleichsoperatoren im Detail"}),e.jsx("p",{children:"Hier sind Beispiele, wie die verschiedenen Vergleichsoperatoren funktionieren:"}),e.jsx(y,{filename:"vergleichsoperatoren.js",children:`let a = 10;
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Verzweigungen verschachteln"}),e.jsx("p",{children:"Bedingungen können ineinander verschachtelt werden. Das heisst, eine Bedingung kann innerhalb einer anderen stehen:"}),e.jsx(y,{filename:"verschachtelt.js",children:`let alter = 20;
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Häufige Fehler und Tipps"}),e.jsx("p",{children:"Hier sind einige häufige Fehler, die Anfänger machen, und wie du sie vermeiden kannst:"}),e.jsx(y,{filename:"fehler-vermeiden.js",children:`// Fehler 1: = statt === (Zuweisung statt Vergleich!)
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bedingungen erlauben es dem Programm, verschiedene Entscheidungen zu treffen"}),e.jsxs("li",{children:[e.jsx("code",{children:"if"})," prüft die erste Bedingung, ",e.jsx("code",{children:"else if"})," ","weitere, ",e.jsx("code",{children:"else"})," den Fallback"]}),e.jsxs("li",{children:[e.jsx("code",{children:"==="})," und ",e.jsx("code",{children:"!=="})," prüfen Wert UND Typ (empfohlen!)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," und ",e.jsx("code",{children:"!="})," prüfen nur den Wert (vermeiden!)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," (UND): Beide Bedingungen müssen wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," (ODER): Mindestens eine Bedingung muss wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!"})," (NICHT): Kehrt den Wahrheitswert um"]}),e.jsx("li",{children:"Typgleichheit bedeutet, dass sowohl der Wert als auch der Typ identisch sein müssen"}),e.jsx("li",{children:"Bedingungen von oben nach unten geprüft - erste passende Bedingung gewinnt"})]})]})]})}const dd=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"}));function Us(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Was sind Listen (Arrays)?"}),e.jsx("p",{children:'Listen (in JavaScript "Arrays" genannt) sind Sammlungen von Werten, die du in einer einzigen Variable speichern kannst. Stell dir eine Liste wie einen Einkaufszettel vor: Du schreibst alle Punkte nacheinander auf, und jeder Punkt hat eine bestimmte Position auf der Liste.'}),e.jsx("p",{children:"Listen sind sehr nützlich, wenn du mehrere zusammengehörige Werte verwalten möchtest, zum Beispiel:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Namen deiner Klassenfreunde"}),e.jsx("li",{children:"Noten in einem Fach"}),e.jsx("li",{children:"Wochentage"}),e.jsx("li",{children:"Preise von Produkten"})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Arrays erstellen"}),e.jsxs("p",{children:["Ein Array erstellst du mit eckigen Klammern ",e.jsx("code",{children:"[]"}),". Die einzelnen Werte werden mit Kommas getrennt:"]}),e.jsx(y,{filename:"arrays-erstellen.js",children:`// Ein Array mit Fruchtnamen
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Index und Position"}),e.jsxs("p",{children:["Jedes Element in einem Array hat eine Position, den sogenannten"," ",e.jsx("strong",{children:"Index"}),". Der Index beginnt bei ",e.jsx("strong",{children:"0"}),", nicht bei 1! Das ist eine wichtige Konvention in der Programmierung."]}),e.jsx(y,{filename:"index-beispiel.js",children:`// Wochentage mit Index
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Arrays verändern"}),e.jsx("p",{children:"Du kannst Arrays auf verschiedene Weise verändern: Elemente hinzufügen, entfernen oder ändern:"}),e.jsx(y,{filename:"arrays-aendern.js",children:`let zahlen = [1, 2, 3];

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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Wichtige Array-Methoden"}),e.jsx("p",{children:"JavaScript bietet viele eingebaute Methoden für Arrays. Hier die wichtigsten:"}),e.jsx(y,{filename:"array-methoden.js",children:`let zahlen = [10, 20, 30, 40, 50];

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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Arrays durchlaufen"}),e.jsxs("p",{children:["Oft möchtest du alle Elemente eines Arrays bearbeiten. Dazu gibt es verschiedene Methoden. Die einfachste ist die ",e.jsx("code",{children:"for...of"}),"-Schleife:"]}),e.jsx(y,{filename:"array-durchlaufen.js",children:`const schueler = ["Anna", "Beat", "Claudia", "Daniel"];

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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Praktische Beispiele"}),e.jsx(y,{children:`// Beispiel 1: Einkaufsliste
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arrays speichern mehrere Werte in einer Variable"}),e.jsxs("li",{children:["Der Index beginnt bei 0, das erste Element ist also"," ",e.jsx("code",{children:"array[0]"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"array.length"})," gibt die Anzahl der Elemente zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"push()"})," und ",e.jsx("code",{children:"unshift()"})," hinzufügen Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:"pop()"})," und ",e.jsx("code",{children:"shift()"})," entfernen Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:"indexOf()"})," findet die Position, ",e.jsx("code",{children:"includes()"})," ","prüft das Vorhandensein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"slice()"})," kopiert Teile, ",e.jsx("code",{children:"splice()"})," verändert das Original"]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...of"})," durchläuft alle Elemente einfach"]})]})]})]})}const hd=Object.freeze(Object.defineProperty({__proto__:null,default:Us},Symbol.toStringTag,{value:"Module"}));function qs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Was sind Schleifen?"}),e.jsx("p",{children:"Schleifen erlauben es dir, Code-Blöcke wiederholt auszuführen. Statt denselben Code immer und immer wieder schreiben zu müssen, definierst du einmal, was wiederholt werden soll, und wie oft."}),e.jsx("p",{children:"Stell dir vor, du musst 100 Briefe schreiben. Du könntest jeden Brief einzeln abschreiben, oder du schreibst eine Vorlage und kopierst sie 100 Mal. Schleifen funktionieren ähnlich: Du schreibst den Code einmal und lässt ihn mehrfach ausführen."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"for-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"for"}),"-Schleife ist die häufigste Schleife. Sie wird verwendet, wenn du genau weisst, wie oft der Code ausgeführt werden soll."]}),e.jsx("p",{children:"Eine for-Schleife hat drei Teile in der Klammer:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initialisierung"}),": Eine Variable wird erstellt und gestartet (z.B. ",e.jsx("code",{children:"let i = 0"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingung"}),": Solange diese Bedingung wahr ist, wird die Schleife ausgeführt (z.B. ",e.jsx("code",{children:"i < 5"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Update"}),": Nach jedem Durchlauf wird die Variable geändert (z.B. ",e.jsx("code",{children:"i++"}),")"]})]}),e.jsx(y,{filename:"for-schleife.js",children:`// Zählt von 0 bis 4
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"while-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"while"}),"-Schleife führt den Code so lange aus, wie die Bedingung wahr ist. Sie wird verwendet, wenn du nicht genau weisst, wie oft die Schleife durchlaufen wird."]}),e.jsx(y,{filename:"while-schleife.js",children:`let count = 0;
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"for...of-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"for...of"}),"-Schleife durchläuft alle Elemente eines Arrays oder Strings. Sie ist besonders einfach und übersichtlich."]}),e.jsx(y,{filename:"for-of.js",children:`const farben = ["rot", "gruen", "blau"];

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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"break und continue"}),e.jsxs("p",{children:[e.jsx("code",{children:"break"})," beendet die Schleife komplett, während"," ",e.jsx("code",{children:"continue"})," den aktuellen Durchlauf überspringt und mit dem nächsten weitermacht:"]}),e.jsx(y,{filename:"break-continue.js",children:`// break: Schleife sofort beenden
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Praktische Beispiele"}),e.jsx(y,{children:`// Beispiel 1: Summe berechnen
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
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Wichtige Unterschiede"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for"}),": Wenn du genau weisst, wie oft"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while"}),": Wenn die Bedingung variabel ist"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...of"}),": Wenn du alle Elemente durchlaufen willst"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"break"}),": Schleife komplett beenden"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"continue"}),": Nur aktuellen Durchlauf ueberspringen"]})]})]})]})}const od=Object.freeze(Object.defineProperty({__proto__:null,default:qs},Symbol.toStringTag,{value:"Module"}));function Qs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Tipps: User Input"}),e.jsx("p",{children:"In den bisherigen Beispielen haben wir Code ausschliesslich in der Konsole ausgeführt. Manchmal möchte man aber auch Eingaben von Benutzer:innen entgegennehmen. Hier schauen wir uns zwei Methoden an, um Eingaben in JavaScript zu lesen."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Eingaben mit readline"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"readline"}),"-Modul ist eine eingebaute Node.js-Funktion, die es ermöglicht, Zeilen von der Eingabe zu lesen. Das folgende Beispiel fragt den Namen der Person ab und begrüsst sie:"]}),e.jsx(y,{filename:"readline-eingabe.js",children:`const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Was ist dein Name? ', (answer) => {
  console.log('Hallo, ' + answer + '!');
  rl.close();
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Die ",e.jsx("code",{children:"readline"}),"-Methode funktioniert nur in Node.js, nicht im Browser. Du kannst diesen Code mit ",e.jsx("code",{children:"node readline-eingabe.js"}),"ausführen."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Mehrere Eingaben mit readline"}),e.jsxs("p",{children:[e.jsx("code",{children:"rl.question()"})," ist ",e.jsx("em",{children:"asynchron"}),": Der Code nach dem Aufruf läuft sofort weiter, ohne auf die Eingabe zu warten. Wenn du mehrere Werte nacheinander abfragen möchtest, musst du die Aufrufe deshalb ",e.jsx("strong",{children:"verschachteln"})," – die nächste Frage wird erst innerhalb der Callback-Funktion der vorherigen Frage gestellt:"]}),e.jsx(y,{filename:"mehrere-eingaben.js",children:`const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Wie heisst du? ', (name) => {
  // Zweite Frage erst hier, nachdem der Name eingegeben wurde
  rl.question('Wie alt bist du? ', (alter) => {
    const alterAlsZahl = Number(alter);

    console.log('Hallo ' + name + '!');
    console.log('Im nächsten Jahr bist du ' + (alterAlsZahl + 1) + '.');

    rl.close();
  });
});`}),e.jsxs("p",{children:["Jede weitere Frage kommt eine Ebene tiefer. Das funktioniert auch mit drei oder mehr Eingaben – wird aber schnell unübersichtlich (man nennt das ",e.jsx("em",{children:"Callback-Hell"}),"):"]}),e.jsx(y,{filename:"drei-eingaben.js",children:`rl.question('Vorname? ', (vorname) => {
  rl.question('Nachname? ', (nachname) => {
    rl.question('Lieblingsfarbe? ', (farbe) => {
      console.log(vorname + ' ' + nachname + ' mag ' + farbe + '.');
      rl.close();
    });
  });
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Die Variablen der äusseren Fragen (",e.jsx("code",{children:"vorname"}),", ",e.jsx("code",{children:"nachname"}),") sind in den inneren Callbacks weiterhin verfügbar. ",e.jsx("code",{children:"rl.close()"})," wird nur",e.jsx("em",{children:" einmal"})," ganz zuletzt aufgerufen, sonst werden die weiteren Fragen nicht mehr gestellt."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Kommandozeilenargumente lesen"}),e.jsx("p",{children:"Eine weitere Möglichkeit, Eingaben zu lesen, ist die Verwendung von Kommandozeilenargumenten. Diese werden beim Start des Programms übergeben:"}),e.jsx(y,{filename:"argumente.js",children:`// Kommandozeilenargumente lesen
// Aufruf: node argumente.js Max 25

const name = process.argv[2];
const alter = process.argv[3];

console.log('Hallo ' + name + '!');
console.log('Du bist ' + alter + ' Jahre alt.');`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Kommandozeilenargumente werden immer als"," ",e.jsx("code",{children:"string"}),"gelesen, auch wenn es Zahlen sind! Wenn du mit Zahlen rechnen möchtest, musst du sie zuerst konvertieren:"]}),e.jsx(y,{filename:"argumente-mit-konvertierung.js",children:`// Kommandozeilenargumente als Zahlen konvertieren
const alter = Number(process.argv[3]);
const alterImNextenJahr = alter + 1;

console.log('Im nächsten Jahr bist du ' + alterImNextenJahr + ' Jahre alt.');`}),e.jsxs("p",{children:["Ohne ",e.jsx("code",{children:"Number()"})," würde ",e.jsx("code",{children:"'25' + 1"})," zu"," ",e.jsx("code",{children:"'251'"}),"führen, da JavaScript die Werte als Text zusammenhängt statt zu addieren."]})]})]})}const ud=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"}));function Xs(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe erfüllen. Du kannst ihnen Werte übergeben (Parameter) und sie können Werte zurückgeben."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Funktionen definieren"}),e.jsx(Q,{lang:"javascript",children:`
// Funktion ohne Parameter
function begruessen() {
  console.log("Hallo!");
}

// Funktion mit Parametern
function begruessenName(name) {
  console.log("Hallo, " + name + "!");
}

// Funktion mit Rückgabewert
function addiere(a, b) {
  return a + b;
}

const ergebnis = addiere(3, 5); // 8
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Pfeilfunktionen (Arrow Functions)"}),e.jsx("p",{children:"Eine kompakte Schreibweise für Funktionen:"}),e.jsx(Q,{lang:"javascript",children:`
// Klassische Funktion
function quadrieren(x) {
  return x * x;
}

// Als Pfeilfunktion
const quadrieren = (x) => {
  return x * x;
};

// Noch kompakter (bei einem Parameter und einem Return)
const quadrieren = x => x * x;
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Parameter und Rückgabewerte"}),e.jsxs("p",{children:["Funktionen können mehrere Parameter haben. Mit ",e.jsx("code",{children:"return"})," ","gibst du ein Ergebnis zurück. Ohne ",e.jsx("code",{children:"return"})," gibt eine"," ","Funktion ",e.jsx("code",{children:"undefined"})," zurück."]})]})]})}const xd=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"}));function Ys(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Objekte"}),e.jsx("p",{children:"Objekte speichern mehrere Werte als Paar von Eigenschaftsnamen und Werten. Sie sind wie kleine Datenbanken, die zusammenhängende Informationen organisieren."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Objekte erstellen"}),e.jsx(Q,{lang:"javascript",children:`
const person = {
  name: "Anna",
  alter: 16,
  hobby: "Programmieren",
  begruessen: function() {
    console.log("Hallo, ich bin " + this.name);
  }
};

// Zugriff auf Eigenschaften
console.log(person.name);        // "Anna"
console.log(person["alter"]);    // 16

// Methode aufrufen
person.begruessen();
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Eigenschaften verändern"}),e.jsx(Q,{lang:"javascript",children:`
// Neue Eigenschaft hinzufügen
person.email = "anna@example.com";

// Eigenschaft verändern
person.alter = 17;

// Eigenschaft löschen
delete person.hobby;
`})]}),e.jsxs(A,{children:[e.jsxs("h2",{children:["Das ",e.jsx("code",{children:"this"})," Keyword"]}),e.jsxs("p",{children:["In Methoden zeigt ",e.jsx("code",{children:"this"})," auf das Objekt selbst. Damit kannst du auf die Eigenschaften des eigenen Objekts zugreifen."]})]})]})}const jd=Object.freeze(Object.defineProperty({__proto__:null,default:Ys},Symbol.toStringTag,{value:"Module"}));function ei(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Funktionales Programmieren"}),e.jsxs("p",{children:["Funktionales Programmieren ist ein Programmierparadigma, bei dem Funktionen erste Bürger sind. Du arbeitest viel mit höherwertigen Funktionen wie ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"}),"."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"map – Alle Elemente verändern"}),e.jsx(Q,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5];

// Jede Zahl verdoppeln
const verdoppelt = zahlen.map(zahl => zahl * 2);
// [2, 4, 6, 8, 10]
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"filter – Elemente auswählen"}),e.jsx(Q,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8];

// Nur gerade Zahlen behalten
const gerade = zahlen.filter(zahl => zahl % 2 === 0);
// [2, 4, 6, 8]
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"reduce – Alles zusammenfassen"}),e.jsx(Q,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5];

// Alle Zahlen addieren
const summe = zahlen.reduce((akkumulator, zahl) => {
  return akkumulator + zahl;
}, 0);
// 15
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Warum funktionales Programmieren?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code wird lesbarer und wartbarer"}),e.jsx("li",{children:"Funktionen sind rein und vorhersagbar"}),e.jsx("li",{children:"Weniger Seiteneffekte"}),e.jsx("li",{children:"Einfacher zu testen"})]})]})]})}const gd=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"}));function ni(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Klassen und Vererbung"}),e.jsx("p",{children:"Klassen sind Baupläne für Objekte. Sie definieren, welche Eigenschaften und Methoden ein Objekt hat. Vererbung ermöglicht es dir, neue Klassen auf bestehenden aufzubauen."})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Klassen definieren"}),e.jsx(Q,{lang:"javascript",children:`
class Tier {
  constructor(name, art) {
    this.name = name;
    this.art = art;
  }

  vorstellung() {
    return \`Ich bin \${this.name}, ein/e \${this.art}.\`;
  }
}

// Instanz erstellen
const hund = new Tier("Bello", "Hund");
console.log(hund.vorstellung());
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Vererbung mit extends"}),e.jsx(Q,{lang:"javascript",children:`
class Hund extends Tier {
  constructor(name) {
    super(name, "Hund");
    this.farbe = "braun";
  }

  bell() {
    return "Wuff! Wuff!";
  }
}

const rex = new Hund("Rex");
console.log(rex.vorstellung()); // "Ich bin Rex, ein Hund."
console.log(rex.bell());       // "Wuff! Wuff!"
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Überschreiben von Methoden"}),e.jsx("p",{children:"Eine Unterklasse kann Methoden der Oberklasse überschreiben, um ihr eigenes Verhalten zu definieren:"}),e.jsx(Q,{lang:"javascript",children:`
class Hund extends Tier {
  // ...
  
  vorstellung() {
    return \`Wuff! Ich bin \${this.name}, ein Hund.\`;
  }
}
`})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Wichtige Konzepte"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class"})," – definiert eine Klasse"]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor"})," – Initialisierung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"extends"})," – Vererbung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"super"})," – Zugriff auf die Oberklasse"]}),e.jsxs("li",{children:[e.jsx("code",{children:"new"})," – erstellt eine Instanz"]})]})]})]})}const md=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"}));function x({children:s,area:n="content"}){return e.jsx("div",{className:`scroll-section ${n}`,children:e.jsx("div",{className:"scroll-section-content",children:s})})}function si(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"JS-Repetition"}),e.jsx("p",{children:"Wiederholung der wichtigsten JavaScript-Konzepte: Variablen, Bedingungen, Listen und Schleifen."}),e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("h2",{children:"Repetition"}),e.jsx("p",{children:"Variablen · Bedingungen · Listen · Schleifen"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen"}),e.jsx("p",{children:'Variablen sind "Boxen", in denen wir Werte speichern.'}),e.jsx("div",{className:"cols",children:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"var"})," — alt (global)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"let"})," — neu (block-scope, veränderbar)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"const"})," — neu (block-scope, unveränderbar)"]})]})})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen — Code testen"}),e.jsx(y,{filename:"variablen.js",children:`// Variablen erstellen
let name = "Anna";
const alter = 16;

// Werte ausgeben
console.log("Name:", name);
console.log("Alter:", alter);

// Wert ändern (nur mit let)
name = "Anna Maria";
console.log("Neuer Name:", name);`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Datentypen"}),e.jsx("p",{children:"JavaScript kennt verschiedene Typen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"string"})," — Text (in Anführungszeichen)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"number"})," — Zahlen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"boolean"})," — true oder false"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"array"})," — Liste von Werten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"object"})," — Schlüssel-Wert-Paare"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Datentypen — Code testen"}),e.jsx(y,{filename:"typen.js",children:`// String (Text)
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
console.log(Array.isArray(farben)); // true`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen"}),e.jsx("p",{children:"Bedingungen erlauben es, Code nur auszuführen wenn eine Bedingung erfüllt ist:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if (...)"})," — wenn Bedingung wahr"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else if (...)"})," — weitere Bedingung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"})," — sonst"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Operatoren:"})," ===, !==, <, >, &&, ||"]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen — Code testen"}),e.jsx(y,{filename:"bedingungen.js",children:`let score = 85;

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
console.log(status);`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Listen (Arrays)"}),e.jsx("p",{children:"Eine Liste speichert mehrere Werte unter einem Namen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstellen mit ",e.jsx("code",{children:"[]"})]}),e.jsxs("li",{children:["Index beginnt bei ",e.jsx("strong",{children:"0"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," — Anzahl Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:".push()"})," — Element hinzufügen"]}),e.jsxs("li",{children:[e.jsx("code",{children:".pop()"})," — letztes Element entfernen"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Listen — Code testen"}),e.jsx(y,{filename:"arrays.js",children:`// Liste erstellen
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
});`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen"}),e.jsx("p",{children:"Schleifen wiederholen Code mehrere Male:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"for (let i = 0; i < n; i++)"})}),e.jsx("li",{children:e.jsx("code",{children:"while (Bedingung) { ... }"})}),e.jsxs("li",{children:[e.jsx("code",{children:"for ... of"})," — über Array-Elemente"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen — Code testen"}),e.jsx(y,{filename:"schleifen.js",children:`// for-Schleife
console.log("for-Schleife:");
for (let i = 1; i <= 5; i++) {
  console.log("Zahl:", i);
}

// while-Schleife
console.log("
while-Schleife:");
let count = 3;
while (count > 0) {
  console.log(count, "...");
  count--;
}
console.log("Los!");

// for ... of
console.log("
for ... of:");
let fruits = ["🍎", "🍌", "🍒"];
for (let fruit of fruits) {
  console.log(fruit);
}`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Code-Blöcke:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Declaration:"})," ",e.jsx("code",{children:"function name() { ... }"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expression:"})," ",e.jsx("code",{children:"const name = () => { ... }"})]}),e.jsx("li",{children:"Parameter: Werte die man übergibt"}),e.jsx("li",{children:"Return-Wert: Ergebnis zurückgeben"})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen — Code testen"}),e.jsx(y,{filename:"funktionen.js",children:`// Funktion mit Parameter
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
console.log("3 + 4 =", addiere(3, 4));`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variablen:"})," let, const"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Datentypen:"})," string, number, boolean, array, object"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingungen:"})," if, else if, else"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Listen:"})," [], .length, .push()"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schleifen:"})," for, while, for ... of"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," function, =>"]})]})]})})]})}const bd=Object.freeze(Object.defineProperty({__proto__:null,default:si},Symbol.toStringTag,{value:"Module"}));function ii(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Theorie: Funktionen"}),e.jsx("p",{children:"Funktionen sind eines der wichtigsten Konzepte in JavaScript. Sie erlauben uns, Code-Blöcke zu definieren und wiederzuverwenden. In diesem Kapitel lernen wir, wie man Funktionen erstellt, den Unterschied zwischen normalen Funktionen und Arrow-Funktionen kennen, und wie man Callback-Funktionen verwendet."}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen, wie man eine Funktion mit ",e.jsx("code",{children:"function"})," ","definiert."]}),e.jsx("li",{children:"Sie kennen den Unterschied zwischen normalen Funktionen und Arrow-Funktionen."}),e.jsx("li",{children:"Sie verstehen, was Parameter und Rückgabewerte sind."}),e.jsxs("li",{children:["Sie können ",e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"})," und ",e.jsx("code",{children:"reduce"})," verwenden."]}),e.jsx("li",{children:"Sie wissen, wie man Schleifen mit Callback-Funktionen ersetzt."})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was ist eine Funktion?"}),e.jsxs("p",{children:["Eine Funktion ist ein Block von Code, der einen bestimmten Namen hat und bei Bedarf ausgeführt werden kann. Funktionen können"," ",e.jsx("strong",{children:"Parameter"})," (Eingabewerte) haben und einen"," ",e.jsx("strong",{children:"Rückgabewert"})," (Ausgabewert) liefern."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"function"})," ist das Schlüsselwort zum Definieren"]}),e.jsx("li",{children:"Der Funktionsname benennt die Funktion"}),e.jsxs("li",{children:[e.jsx("code",{children:"(a, b)"})," sind die Parameter"]}),e.jsxs("li",{children:[e.jsx("code",{children:"return"})," gibt einen Wert zurück"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Einfache Funktion ohne Parameter"}),e.jsx(y,{filename:"funktion-definieren.js",children:`
// Funktion definieren
function begruessen() {
  console.log("Hallo Welt!");
}

// Funktion aufrufen
begruessen(); // Ausgabe: "Hallo Welt!"
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Funktion mit Parametern und Rückgabewert"}),e.jsx(y,{filename:"funktion-params.js",children:`
// Funktion mit Parametern definieren
function addiere(a, b) {
  return a + b;
}

// Funktion aufrufen und Ergebnis speichern
let resultat = addiere(5, 3);
console.log(resultat); // Ausgabe: 8
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen vs. Arrow-Funktionen"}),e.jsxs("p",{children:["In JavaScript gibt es zwei Hauptarten, Funktionen zu definieren:"," ",e.jsx("strong",{children:"normale Funktionen"})," und"," ",e.jsx("strong",{children:"Arrow-Funktionen"})," (Pfeil-Funktionen)."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Normale Funktion"}),e.jsx(y,{filename:"normale-funktion.js",children:`
// Normale Funktion definieren
function Quadrat(x) {
  return x * x;
}

console.log(Quadrat(5)); // Ausgabe: 25
`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktion"}),e.jsx(y,{filename:"arrow-funktion.js",children:`
// Arrow-Funktion definieren
const Quadrat = (x) => {
  return x * x;
};

console.log(Quadrat(5)); // Ausgabe: 25
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktionen: Details"}),e.jsx("h4",{children:"Einfache Arrow-Funktion mit einem Parameter"}),e.jsx("p",{children:"Bei einem Parameter können die Klammern weggelassen werden:"}),e.jsx("h4",{children:"Arrow-Funktion ohne Klammern und ohne Block"}),e.jsxs("p",{children:["Wenn die Funktion nur einen Rückgabewert hat, können wir"," ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"})," und ",e.jsx("code",{children:"return"})," ","weglassen:"]}),e.jsx("h4",{children:"Zusammenfassung der Unterschiede"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Merkmal"}),e.jsx("th",{children:"Normale Funktion"}),e.jsx("th",{children:"Arrow-Funktion"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Schlüsselwort"}),e.jsx("td",{children:e.jsx("code",{children:"function"})}),e.jsxs("td",{children:[e.jsx("code",{children:"const"})," / ",e.jsx("code",{children:"let"})," / ",e.jsx("code",{children:"var"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Syntax"}),e.jsxs("td",{children:[e.jsxs("code",{children:["function name() ","{"]})," ",e.jsx("code",{children:"}"})]}),e.jsxs("td",{children:[e.jsxs("code",{children:["const name = () => ","{"]})," ",e.jsx("code",{children:"}"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"this"}),"-Binding"]}),e.jsx("td",{children:"Dynamisch"}),e.jsx("td",{children:"Lexikalisch"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Als Konstruktor"}),e.jsxs("td",{children:["Ja (",e.jsx("code",{children:"new"}),")"]}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"arguments"}),"-Objekt"]}),e.jsx("td",{children:"Ja"}),e.jsx("td",{children:"Nein"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Arrow-Funktionen haben kein eigenes"," ",e.jsx("code",{children:"this"}),". Sie erben ",e.jsx("code",{children:"this"})," vom umgebenden Kontext. Das ist besonders nützlich in Callbacks und Event-Handlern."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktionen: Code testen"}),e.jsx("h4",{children:"Mit und ohne Klammern"}),e.jsx(y,{filename:"arrow-einfach.js",children:`
// Mit Klammern
const verdoppeln = (x) => {
  return x * 2;
};

// Ohne Klammern bei einem Parameter
const verdoppeln = x => x * 2;
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Vollständige vs. Kurzschreibweise"}),e.jsx(y,{filename:"arrow-kurz.js",children:`
// Vollständige Schreibweise
const begruessen = (name) => {
  return "Hallo " + name;
};

// Kurzschreibweise (impliziter Return)
const begruessen = (name) => "Hallo " + name;
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callback-Funktionen"}),e.jsxs("p",{children:["Eine ",e.jsx("strong",{children:"Callback-Funktion"})," ist eine Funktion, die als Argument an eine andere Funktion übergeben wird. Die aufgerufene Funktion kann dann den Callback zu einem bestimmten Zeitpunkt ausführen."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callback-Funktion — Code testen"}),e.jsx(y,{filename:"callback-beispiel.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"forEach - Elemente durchgehen"}),e.jsxs("p",{children:[e.jsx("code",{children:"forEach"})," führt eine Funktion für jedes Element eines Arrays aus."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Unterschied zur for-Schleife:"})," ",e.jsx("code",{children:"forEach"})," ","ist kürzer und lesbarer. Die normale Schleife gibt Ihnen mehr Kontrolle (z.B. frühes Beenden mit ",e.jsx("code",{children:"break"}),")."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"forEach — Code testen"}),e.jsx("h4",{children:"Mit forEach"}),e.jsx(y,{filename:"forEach-beispiel.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(y,{filename:"for-schleife-vergleich.js",children:`
const namen = ["Anna", "Beat", "Claudia", "Daniel"];

// for-Schleife
for (let i = 0; i < namen.length; i++) {
  console.log((i + 1) + ": " + namen[i]);
}
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"map - Array transformieren"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"})," erstellt ein neues Array, indem die Callback-Funktion auf jedes Element angewendet wird."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," ",e.jsx("code",{children:"map"})," verändert das Original-Array ",e.jsx("strong",{children:"nicht"}),". Es erstellt immer ein neues Array."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — Code testen"}),e.jsx("h4",{children:"Mit map"}),e.jsx(y,{filename:"map-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// map: Jedes Element verdoppeln
const verdoppelte = zahlen.map((zahl) => {
  return zahl * 2;
});

console.log(verdoppelte); // [2, 4, 6, 8, 10]
console.log(zahlen);      // [1, 2, 3, 4, 5] (original bleibt unverändert)
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(y,{filename:"map-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife mit neuem Array
const verdoppelte = [];
for (let i = 0; i < zahlen.length; i++) {
  verdoppelte.push(zahlen[i] * 2);
}

console.log(verdoppelte); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: HTML-Elemente erstellen"}),e.jsx(y,{filename:"map-html-beispiel.js",children:`
const namen = ["Anna", "Beat", "Claudia"];

// Jedes Element als HTML-Listenelement
const liElemente = namen.map((name) => {
  return "<li>" + name + "</li>";
});

const ulElement = "<ul>" + liElemente.join("") + "</ul>";
console.log(ulElement);
// <ul><li>Anna</li><li>Beat</li><li>Claudia</li></ul>
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter - Elemente herausfiltern"}),e.jsxs("p",{children:[e.jsx("code",{children:"filter"})," erstellt ein neues Array mit allen Elementen, die die Bedingung erfüllen."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Code testen"}),e.jsx("h4",{children:"Mit filter"}),e.jsx(y,{filename:"filter-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Nur gerade Zahlen filtern
const geradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 === 0;
});

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(y,{filename:"filter-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for-Schleife mit neuem Array
const geradeZahlen = [];
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: Namen filtern"}),e.jsx(y,{filename:"filter-objekte.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce - Werte zusammenrechnen"}),e.jsxs("p",{children:[e.jsx("code",{children:"reduce"})," reduziert ein Array auf einen einzelnen Wert. Es ist sehr flexibel und wird für Berechnungen, Gruppierungen und Transformationen verwendet."]}),e.jsx("p",{children:e.jsx("strong",{children:"Erklärung:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"accumulator"})," ist der gesammelte Wert (wächst mit jedem Schritt)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"zahl"})," ist das aktuelle Element"]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," ist der Startwert des Akkumulators"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — Code testen"}),e.jsx("h4",{children:"Mit reduce"}),e.jsx(y,{filename:"reduce-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// Summe berechnen
const summe = zahlen.reduce((accumulator, zahl) => {
  return accumulator + zahl;
}, 0); // 0 ist der Startwert

console.log(summe); // 15
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"reduce Schritt für Schritt"}),e.jsx(y,{filename:"reduce-schritte.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// reduce berechnet:
// Schritt 1: 0 + 1 = 1
// Schritt 2: 1 + 2 = 3
// Schritt 3: 3 + 3 = 6
// Schritt 4: 6 + 4 = 10
// Schritt 5: 10 + 5 = 15
// Ergebnis: 15
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(y,{filename:"reduce-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife
let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
  summe = summe + zahlen[i];
}

console.log(summe); // 15
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: Produkt berechnen"}),e.jsx(y,{filename:"reduce-produkt.js",children:`
const zahlen = [2, 3, 4, 5];

// Produkt aller Zahlen
const produkt = zahlen.reduce((accumulator, zahl) => {
  return accumulator * zahl;
}, 1); // Startwert ist 1 (neutrales Element der Multiplikation)

console.log(produkt); // 120 (2 * 3 * 4 * 5)
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"reduce mit Objekten"}),e.jsx(y,{filename:"reduce-objekte.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vergleich: Alle Methoden im Überblick"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Zweck"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Verändert Original?"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"forEach"})}),e.jsx("td",{children:"Code für jedes Element ausführen"}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"map"})}),e.jsx("td",{children:"Element transformieren"}),e.jsx("td",{children:"Neues Array"}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"filter"})}),e.jsx("td",{children:"Elemente herausfiltern"}),e.jsx("td",{children:"Neues Array"}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"reduce"})}),e.jsx("td",{children:"Werte zusammenrechnen"}),e.jsx("td",{children:"Einzelner Wert"}),e.jsx("td",{children:"Nein"})]})]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kombinierte Beispiele"}),e.jsx("p",{children:"Oft werden mehrere Methoden kombiniert:"})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kombinierte Beispiele — Code testen"}),e.jsx("h3",{children:"Beispiel: Namen filtern und transformieren"}),e.jsx(y,{filename:"kombiniert-filter-map.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Beispiel: Summe der Noten von erwachsenen Schülern"}),e.jsx(y,{filename:"kombiniert-filter-reduce.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Methode verwenden?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"forEach"})}),": Wenn Sie etwas mit jedem Element tun möchten (z.B. DOM-Elemente erstellen, console.log)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"map"})}),": Wenn Sie ein neues Array mit transformierten Werten brauchen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"filter"})}),": Wenn Sie eine Teilmenge des Arrays brauchen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"reduce"})}),": Wenn Sie einen einzelnen Wert aus dem Array berechnen wollen"]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("p",{children:["Funktionen sind ein fundamentales Konzept in JavaScript. Sie erlauben uns, Code zu organisieren und wiederzuverwenden. Der Unterschied zwischen normalen Funktionen und Arrow-Funktionen liegt vor allem in der Syntax und im Verhalten von ",e.jsx("code",{children:"this"}),". Callback-Funktionen sind Funktionen, die als Argument übergeben werden, und werden häufig bei Array-Methoden wie"," ",e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"})," verwendet. Diese Methoden machen den Umgang mit Arrays viel eleganter und lesbarer als normale Schleifen."]})]})})]})}const fd=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));function ri(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Theorie: Objekte"}),e.jsxs("p",{children:["Objekte sind eines der wichtigsten Datenstrukturen in JavaScript. Sie erlauben uns, komplexe Daten in Form von ",e.jsx("strong",{children:"Schlüssel-Wert-Paaren"})," ","zu organisieren. In diesem Kapitel lernen wir, wie man Objekte erstellt, auf ihre Eigenschaften zugreift, sie iteriert, neue Objekte erstellt und wie man die spezielle JavaScript-Syntax für Spread und Dekomposition verwendet."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen, wie man ein Objekt mit ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"})," definiert."]}),e.jsx("li",{children:"Sie können auf Eigenschaften mit Punkt- und Klammernotation zugreifen."}),e.jsxs("li",{children:["Sie verstehen, wie man mit ",e.jsx("code",{children:"Object.keys()"}),","," ",e.jsx("code",{children:"Object.values()"})," und ",e.jsx("code",{children:"for...in"})," über Objekte iteriert."]}),e.jsxs("li",{children:["Sie können Objekte mit der ",e.jsx("code",{children:"spread"}),"-Syntax kopieren und erweitern."]}),e.jsxs("li",{children:["Sie verstehen die ",e.jsx("code",{children:"decomposition"}),"-Syntax zum Herauslesen von Eigenschaften."]}),e.jsx("li",{children:"Sie können Funktionen schreiben, die neue Objekte erstellen und zurückgeben."})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was ist ein Objekt?"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Objekt"})," ist eine Sammlung von"," ",e.jsx("strong",{children:"Schlüssel-Wert-Paaren"}),". Jeder Schlüssel ist ein String (oder Symbol) und jeder Wert kann ein beliebiger JavaScript-Typ sein — eine Zahl, ein String, ein Array, eine Funktion oder sogar ein anderes Objekt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"{"})," und ",e.jsx("code",{children:"}"})," definieren das Objekt"]}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"Schlüssel"})," (links vom ",e.jsx("code",{children:":"}),") benennt die Eigenschaft"]}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"Wert"})," (rechts vom ",e.jsx("code",{children:":"}),") ist der gespeicherte Wert"]}),e.jsxs("li",{children:["Kommas ",e.jsx("code",{children:","})," trennen die Schlüssel-Wert-Paare"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Vergleich mit Arrays:"})," Arrays verwenden numerische Indizes, während Objekte benannte Schlüssel verwenden. Arrays sind für geordnete Listen, Objekte für strukturierte Daten."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Ein einfaches Objekt erstellen"}),e.jsx(y,{filename:"objekt-erstellen.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Objekt mit einer Funktion als Wert"}),e.jsx(y,{filename:"objekt-methode.js",children:`
// Eine Funktion als Wert (auch "Methode" genannt)
const calculator = {
  addiere: function(a, b) {
    return a + b;
  },
  subtrahiere: (a, b) => a - b
};

console.log(calculator.addiere(5, 3)); // 8
console.log(calculator.subtrahiere(10, 4)); // 6
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zugriff auf Eigenschaften"}),e.jsxs("p",{children:["Es gibt zwei Arten, auf die Eigenschaften eines Objekts zuzugreifen:"," ",e.jsx("strong",{children:"Punkt-Notation"})," und ",e.jsx("strong",{children:"Klammernotation"}),"."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Punkt-Notation"}),e.jsx("p",{children:"Die Punkt-Notation ist die einfachste Art, wenn der Schlüssel ein gültiger Bezeichner ist:"}),e.jsx(y,{filename:"punkt-notation.js",children:`
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
`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Klammernotation"}),e.jsx("p",{children:"Die Klammernotation wird verwendet, wenn der Schlüssel ein Ausdruck ist oder kein gültiger Bezeichner:"}),e.jsx(y,{filename:"klammer-notation.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Punkt- vs. Klammernotation"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Merkmal"}),e.jsx("th",{children:"Punkt-Notation"}),e.jsx("th",{children:"Klammernotation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Syntax"}),e.jsx("td",{children:e.jsx("code",{children:"obj.key"})}),e.jsx("td",{children:e.jsx("code",{children:'obj["key"]'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dynamische Schlüssel"}),e.jsx("td",{children:"Nein"}),e.jsx("td",{children:"Ja"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spezielle Zeichen"}),e.jsx("td",{children:"Nein"}),e.jsx("td",{children:"Ja"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Autocomplete"}),e.jsx("td",{children:"Ja"}),e.jsx("td",{children:"Nein"})]})]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Eigenschaften hinzufügen und entfernen"}),e.jsx(y,{filename:"eigenschaften-aendern.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Über Objekte iterieren"}),e.jsx("p",{children:"Es gibt mehrere Möglichkeiten, über die Eigenschaften eines Objekts zu iterieren:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys(obj)"})," — gibt ein Array aller Schlüssel zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.values(obj)"})," — gibt ein Array aller Werte zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.entries(obj)"})," — gibt ein Array von"," ",e.jsx("code",{children:"[key, value]"}),"-Paaren zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...in"})," — Schleife über alle Schlüssel"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Object.keys(), Object.values(), Object.entries()"}),e.jsx(y,{filename:"object-methoden.js",children:`
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
`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"for...in Schleife"}),e.jsx(y,{filename:"for-in.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Welche Iterations-Methode verwenden?"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Verwendung"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.keys()"})}),e.jsx("td",{children:"Array von Schlüsseln"}),e.jsx("td",{children:"Wenn Sie die Namen der Eigenschaften brauchen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.values()"})}),e.jsx("td",{children:"Array von Werten"}),e.jsx("td",{children:"Wenn Sie nur die Werte brauchen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.entries()"})}),e.jsx("td",{children:"Array von [key, value]"}),e.jsx("td",{children:"Wenn Sie beide brauchen, z.B. für map/filter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"for...in"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Wenn Sie jede Eigenschaft einzeln verarbeiten"})]})]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread-Syntax (...)"}),e.jsxs("p",{children:["Die ",e.jsx("strong",{children:"Spread-Syntax"})," (",e.jsx("code",{children:"..."}),') ermöglicht es, ein Objekt zu "expandieren" — also seine Eigenschaften an einer anderen Stelle einzufügen. Damit können wir Objekte kopieren und erweitern, ohne das Original zu verändern.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Copy:"})," ",e.jsxs("code",{children:["{","...obj","}"]})," erstellt eine flache Kopie"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extend:"})," ",e.jsxs("code",{children:["{","...obj, neu: wert","}"]})," ","fügt neue Eigenschaften hinzu"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Merge:"})," ",e.jsxs("code",{children:["{","...obj1, ...obj2","}"]})," verbindet zwei Objekte"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Die Spread-Syntax erstellt nur eine"," ",e.jsx("strong",{children:"flache Kopie"}),". Verschachtelte Objekte werden nicht kopiert, sondern referenziert."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Objekte kopieren und erweitern"}),e.jsx(y,{filename:"spread-beispiel.js",children:`
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
`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Vorsicht bei verschachtelten Objekten"}),e.jsx(y,{filename:"spread-verschachtelt.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Dekomposition (Destructuring)"}),e.jsxs("p",{children:["Die ",e.jsx("strong",{children:"Dekomposition"})," (",e.jsx("code",{children:"destructure"}),") ist die"," ",e.jsx("strong",{children:"umgekehrte Operation"}),' zur Spread-Syntax. Statt Eigenschaften zu "expandieren", "extrahieren" wir sie aus einem Objekt und weisen sie Variablen zu.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Extrahieren:"})," ",e.jsxs("code",{children:["const ","{"," name, alter ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Umbenennen:"})," ",e.jsxs("code",{children:["const ","{"," name: n ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default-Werte:"})," ",e.jsxs("code",{children:["const ","{"," alter = 0 ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rest-Properties:"})," ",e.jsxs("code",{children:["const ","{"," name, ...rest ","}"," = person;"]})]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Dekomposition — Code testen"}),e.jsx(y,{filename:"dekomposition-beispiel.js",children:`
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
`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Rest-Properties mit Dekomposition"}),e.jsx(y,{filename:"dekomposition-rest.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread vs. Dekomposition"}),e.jsxs("p",{children:["Spread und Dekomposition sind ",e.jsx("strong",{children:"komplementäre Operationen"}),":"]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aktion"}),e.jsx("th",{children:"Syntax"}),e.jsx("th",{children:"Richtung"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Expandieren"}),e.jsx("td",{children:e.jsxs("code",{children:["{","...obj","}"]})}),e.jsx("td",{children:"Objekt → Eigenschaften"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extrahieren"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," key ","}"," = obj;"]})}),e.jsx("td",{children:"Eigenschaften → Variable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Kopieren"}),e.jsx("td",{children:e.jsxs("code",{children:["const kopie = ","{","...obj","}"]})}),e.jsx("td",{children:"Objekt → neues Objekt"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Rest-Eigenschaften"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," a, ...rest ","}"," = obj;"]})}),e.jsx("td",{children:"Bestimmte → Rest"})]})]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen die neue Objekte erstellen"}),e.jsx("p",{children:"Eine häufige Aufgabe ist es, Funktionen zu schreiben, die basierend auf Eingabeparametern neue Objekte erstellen und zurückgeben. Das ist besonders nützlich für:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Factory-Funktionen:"})," Erstellen von Objekten nach einem Muster"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transformations-Funktionen:"})," Ändern von Objekten und Zurückgeben neuer Instanzen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kombinations-Funktionen:"})," Verbinden mehrerer Objekte"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bester Stil:"})," Verwenden Sie die Spread-Syntax, um neue Objekte zu erstellen, statt das Original zu verändern. Das macht den Code vorhersehbarer und vermeidet Seiteneffekte."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Factory-Funktion: Personen erstellen"}),e.jsx(y,{filename:"factory-funktion.js",children:`
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
`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Transformations-Funktion: Neues Objekt erstellen"}),e.jsx(y,{filename:"transformations-funktion.js",children:`
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
`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte vs. Arrays"}),e.jsx("p",{children:"Wann verwenden wir ein Objekt und wann ein Array? Oft werden beide kombiniert:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Kriterium"}),e.jsx("th",{children:"Objekt"}),e.jsx("th",{children:"Array"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Struktur"}),e.jsx("td",{children:"Schlüssel-Wert-Paare"}),e.jsx("td",{children:"Geordnete Liste"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Zugriff"}),e.jsx("td",{children:e.jsx("code",{children:"obj.name"})}),e.jsx("td",{children:e.jsx("code",{children:"arr[0]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Grösse"}),e.jsx("td",{children:"Dynamisch"}),e.jsx("td",{children:e.jsx("code",{children:"arr.length"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Iteration"}),e.jsxs("td",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"for...in"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Beispiel"}),e.jsx("td",{children:"Person, Adresse"}),e.jsx("td",{children:"Liste von Personen"})]})]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung der Konzepte"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Konzept"}),e.jsx("th",{children:"Syntax"}),e.jsx("th",{children:"Zweck"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Objekt erstellen"}),e.jsx("td",{children:e.jsxs("code",{children:["{"," key: value ","}"]})}),e.jsx("td",{children:"Schlüssel-Wert-Paare speichern"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eigenschaft lesen"}),e.jsxs("td",{children:[e.jsx("code",{children:"obj.key"})," oder ",e.jsx("code",{children:'obj["key"]'})]}),e.jsx("td",{children:"Auf Werte zugreifen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eigenschaft setzen"}),e.jsx("td",{children:e.jsx("code",{children:"obj.key = value"})}),e.jsx("td",{children:"Werte ändern oder hinzufügen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Iterieren"}),e.jsxs("td",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"for...in"})]}),e.jsx("td",{children:"Alle Eigenschaften durchgehen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spread"}),e.jsx("td",{children:e.jsxs("code",{children:["{","...obj","}"]})}),e.jsx("td",{children:"Objekt kopieren/erweitern"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dekomposition"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," key ","}"," = obj;"]})}),e.jsx("td",{children:"Werte extrahieren"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Factory-Funktion"}),e.jsx("td",{children:e.jsxs("code",{children:["function create() ","{"," return obj ","}"]})}),e.jsx("td",{children:"Neue Objekte erstellen"})]})]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Technik verwenden?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Punkt-Notation:"})," Wenn der Schlüssel bekannt und ein gültiger Bezeichner ist (am häufigsten verwendet)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Klammernotation:"})," Wenn der Schlüssel dynamisch ist oder Sonderzeichen enthält"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object.keys/values/entries:"})," Wenn Sie alle Eigenschaften programmatisch durchgehen müssen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread:"})," Wenn Sie ein Objekt kopieren oder erweitern möchten, ohne das Original zu verändern"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition:"})," Wenn Sie bestimmte Eigenschaften aus einem Objekt extrahieren und in Variablen speichern möchten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Factory-Funktionen:"})," Wenn Sie mehrere Objekte nach demselben Muster erstellen möchten"]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("p",{children:["Objekte sind die grundlegende Datenstruktur in JavaScript für"," ",e.jsx("strong",{children:"benannte Eigenschaften"}),". Sie erstellen Objekte mit"," ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"}),", greifen mit Punkt- oder Klammernotation darauf zu und iterieren mit"," ",e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"Object.values()"}),","," ",e.jsx("code",{children:"Object.entries()"})," oder ",e.jsx("code",{children:"for...in"}),". Die"," ",e.jsx("strong",{children:"Spread-Syntax"})," (",e.jsx("code",{children:"..."}),") ermöglicht das Kopieren und Erweitern von Objekten, während die"," ",e.jsx("strong",{children:"Dekomposition"})," das Extrahieren von Eigenschaften in Variablen erlaubt. Funktionen, die neue Objekte erstellen,"," ",e.jsx("strong",{children:"Factory-Funktionen"})," genannt, sind ein wichtiges Muster, um Objekte nach einem bestimmten Schema zu erzeugen. Spread und Dekomposition sind komplementäre Operationen und gehören zu den mächtigsten Werkzeugen im modernen JavaScript."]})]})})]})}const pd=Object.freeze(Object.defineProperty({__proto__:null,default:ri},Symbol.toStringTag,{value:"Module"}));function ti(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben: Objekte, Spread und Dekomposition"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie 10 kleine Programmieraufgaben zu JavaScript-Objekten. Sie decken die zentralen Konzepte ab:",e.jsx("strong",{children:"Objekte erstellen"}),", ",e.jsx("strong",{children:"Eigenschaften zugreifen"}),",",e.jsx("strong",{children:"über Objekte iterieren"}),", ",e.jsx("strong",{children:"Spread-Syntax"}),",",e.jsx("strong",{children:"Dekomposition"})," und ",e.jsx("strong",{children:"Factory-Funktionen"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen oder Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte durch eigenes Ausprobieren zu verstehen."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe über GitHub"}),e.jsx("p",{children:"Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie diesen Schritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstellen Sie in Ihrem Repository einen Ordner"," ",e.jsx("code",{children:"aufgaben-objekte"})]}),e.jsxs("li",{children:["Speichern Sie jede Aufgabe als eigene ",e.jsx("code",{children:".js"}),"-Datei (z.B.",e.jsx("code",{children:"01-person-erstellen.js"}),")"]}),e.jsx("li",{children:"Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht"}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"letzte Commit"})," muss die Nachricht"," ",e.jsx("code",{children:"Arbeitsauftrag Objekte bearbeitet"})," enthalten"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Beispiel:"})}),e.jsx("pre",{children:e.jsx("code",{children:`git add .
git commit -m "Arbeitsauftrag Objekte bearbeitet"`})})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Person-Objekt erstellen
// Was ich gemacht habe: Objekt mit Schlüssel-Wert-Paaren definiert
// Was ich gelernt habe: Eigenschaften mit Punkt-Notation zugänglich
// Schwierigkeit: leicht`})}),e.jsxs("p",{children:["Sie können auch eine ",e.jsx("code",{children:"README.md"})," im Ordner"," ",e.jsx("code",{children:"aufgaben-objekte"})," erstellen, wo Sie alle Aufgaben auflisten."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Person-Objekt erstellen"}),e.jsxs("p",{children:["Erstellen Sie ein Objekt ",e.jsx("code",{children:"person"})," mit den Eigenschaften",e.jsx("code",{children:"name"})," (String), ",e.jsx("code",{children:"alter"})," (Zahl),",e.jsx("code",{children:"adresse"})," (verschachteltes Objekt mit ",e.jsx("code",{children:"strasse"}),"und ",e.jsx("code",{children:"plz"}),") und ",e.jsx("code",{children:"faecher"})," (Array mit Strings). Geben Sie das Objekt mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Eigenschaften mit Punkt- und Klammernotation"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"produkt"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"gewicht"})," und"," ",e.jsx("code",{children:'"erste-kauft"'})," (Schlüssel mit Bindestrich). Lesen Sie alle vier Eigenschaften — zuerst mit Punkt-Notation, anschliessend mit Klammernotation. Ändern Sie den ",e.jsx("code",{children:"preis"}),"um 10% und geben Sie das Ergebnis aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Eigenschaften hinzufügen und entfernen"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"schueler"})," mit den Eigenschaften",e.jsx("code",{children:"name"})," und ",e.jsx("code",{children:"klasse"}),". Fügen Sie dynamisch die Eigenschaften ",e.jsx("code",{children:"note"})," (Zahl) und ",e.jsx("code",{children:"telefon"}),"(String) hinzu. Entfernen Sie anschliessend die Eigenschaft"," ",e.jsx("code",{children:"klasse"})," mit ",e.jsx("code",{children:"delete"}),". Prüfen Sie mit"," ",e.jsx("code",{children:"in"}),", ob ",e.jsx("code",{children:"klasse"})," noch existiert."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Object.keys/values/entries verwenden"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"person"})," mit mindestens vier Eigenschaften. Verwenden Sie ",e.jsx("code",{children:"Object.keys()"}),",",e.jsx("code",{children:"Object.values()"})," und ",e.jsx("code",{children:"Object.entries()"}),", um die Schlüssel, Werte und Paare zu erhalten. Geben Sie jedes Ergebnis aus. Verwenden Sie ",e.jsx("code",{children:"forEach"})," über ",e.jsx("code",{children:"Object.entries()"}),", um ",e.jsx("code",{children:'"Schlüssel: Wert"'})," auszugeben."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: for...in Schleife"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"warenkorb"})," mit mindestens fünf Eigenschaften (jeweils Artikelname als Schlüssel und Preis als Wert). Verwenden Sie eine ",e.jsx("code",{children:"for...in"}),"-Schleife, um alle Artikel und Preise auszugeben. Berechnen Sie gleichzeitig die Gesamtsumme."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Spread — Objekt kopieren und erweitern"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"person"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"alter"})," und ",e.jsx("code",{children:"stadt"}),". Erstellen Sie mit der Spread-Syntax eine Kopie ",e.jsx("code",{children:"personNeu"}),". Fügen Sie in der Kopie die neue Eigenschaft ",e.jsx("code",{children:"beruf"})," hinzu und ändern Sie den ",e.jsx("code",{children:"alter"})," um 1. Prüfen Sie, dass das Original"," ",e.jsx("code",{children:"person"})," unverändert bleibt."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Spread — Objekte verbinden"}),e.jsxs("p",{children:["Definieren Sie zwei Objekte: ",e.jsx("code",{children:"adresse"})," (mit"," ",e.jsx("code",{children:"strasse"}),", ",e.jsx("code",{children:"plz"}),", ",e.jsx("code",{children:"ort"}),") und"," ",e.jsx("code",{children:"kontakt"})," (mit ",e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"telefon"}),"). Verbinden Sie beide Objekte mit der Spread-Syntax zu einem neuen Objekt ",e.jsx("code",{children:"profil"}),". Überschreiben Sie dabei den ",e.jsx("code",{children:"ort"}),"mit einem neuen Wert. Geben Sie das Resultat aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Dekomposition — Eigenschaften extrahieren"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"produkt"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"gewicht"})," und"," ",e.jsx("code",{children:"kategorie"}),". Verwenden Sie Dekomposition, um ",e.jsx("code",{children:"name"}),"und ",e.jsx("code",{children:"preis"})," direkt in Variablen zu extrahieren. Extrahieren Sie anschliessend nur ",e.jsx("code",{children:"kategorie"})," und speichern Sie den Rest in ",e.jsx("code",{children:"rest"}),". Geben Sie alle Ergebnisse aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Factory-Funktion — Objekte erstellen"}),e.jsxs("p",{children:["Schreiben Sie eine Factory-Funktion ",e.jsx("code",{children:"erstelleProdukt(name, preis, kategorie)"}),", die ein Produkt-Objekt zurückgibt mit den Eigenschaften"," ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"kategorie"}),","," ",e.jsx("code",{children:"mwst"})," (immer 8.1%) und ",e.jsx("code",{children:"preisMitMwst"})," (berechnete Funktion, die den Preis mit MwSt. zurückgibt). Erstellen Sie drei verschiedene Produkte und geben Sie sie aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Kombinierte Aufgabe — Datenverwaltung"}),e.jsxs("p",{children:["Definieren Sie ein Array ",e.jsx("code",{children:"personen"})," mit mindestens vier Personen-Objekten (jeweils ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"alter"}),","," ",e.jsx("code",{children:"stadt"}),"). Schreiben Sie eine Funktion"," ",e.jsx("code",{children:"erwachseneErstellen(pers)"}),", die nur die Personen ab"," ",e.jsx("strong",{children:"18"})," Jahren auswählt und für jede ein neues Objekt erstellt mit:",e.jsx("br",{}),e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"stadt"})," und"," ",e.jsx("code",{children:"status"})," (",e.jsx("code",{children:'"Erwachsen"'})," oder"," ",e.jsx("code",{children:'"Minderjährig"'}),"). Verwenden Sie dabei ",e.jsx("code",{children:"filter"}),","," ",e.jsx("code",{children:"map"})," und die Spread-Syntax."]})]})]})]})}const kd=Object.freeze(Object.defineProperty({__proto__:null,default:ti},Symbol.toStringTag,{value:"Module"}));function li(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Repetition: Funktionen und Objekte"}),e.jsx("p",{children:"Wiederholung der wichtigsten Konzepte aus Woche 2: Funktionen, Parameter, Rückgabewerte, Callbacks, Objekte, Spread und Dekomposition."}),e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("h2",{children:"Repetition"}),e.jsx("p",{children:"Funktionen · Callbacks · Objekte · Spread · Dekomposition"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsxs("p",{children:["Eine Funktion ist ein Stück Code, das einen ",e.jsx("strong",{children:"Namen"})," ","hat und immer wieder aufgerufen werden kann."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Parameter"})," — die Werte, die hineingehen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rumpf"})," — was die Funktion tut"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"return"})," — der Wert, der herauskommt"]})]}),e.jsxs("p",{children:["Merksatz: Eine Funktion ist eine ",e.jsx("em",{children:"Maschine"}),". Oben kommt etwas hinein, unten kommt ein Resultat heraus."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen — Code testen"}),e.jsx(y,{filename:"funktionen.js",children:`// Funktionsdeklaration
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
console.log(nichts()); // undefined`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen als Werte (Callbacks)"}),e.jsxs("p",{children:["In JavaScript sind Funktionen ganz normale Werte. Man kann sie in Variablen speichern und an andere Funktionen übergeben. Eine Funktion, die man übergibt, heisst ",e.jsx("strong",{children:"Callback"}),"."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"forEach"})," — für jedes Element etwas tun"]}),e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — jedes Element umwandeln (neue Liste)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — Elemente aussortieren (neue Liste)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — alles zu einem Wert zusammenfassen"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callbacks — Code testen"}),e.jsx(y,{filename:"callbacks.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte"}),e.jsxs("p",{children:["Ein Objekt speichert Daten als ",e.jsx("strong",{children:"Schlüssel-Wert-Paare"}),". Damit gehören zusammengehörende Informationen in ",e.jsx("em",{children:"eine"})," ","Variable."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstellen mit ",e.jsx("code",{children:"{ }"})]}),e.jsxs("li",{children:["Zugriff mit ",e.jsx("code",{children:"objekt.schluessel"})," oder"," ",e.jsx("code",{children:'objekt["schluessel"]'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"Object.values()"}),","," ",e.jsx("code",{children:"Object.entries()"})]}),e.jsx("li",{children:"Objekte können Objekte und Arrays enthalten (verschachtelt)"})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte — Code testen"}),e.jsx(y,{filename:"objekte.js",children:`const person = {
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
});`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread und Dekomposition"}),e.jsx("p",{children:"Zwei sehr praktische Schreibweisen, die uns diese Woche bei den Algorithmen begleiten:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Spread"})," ",e.jsx("code",{children:"..."})," — packt den Inhalt aus: kopieren, zusammenfügen, erweitern"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition"})," — holt Werte direkt in Variablen"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig für Algorithmen:"})," Mit"," ",e.jsx("code",{children:"const kopie = [...liste]"})," arbeiten wir auf einer Kopie und verändern das Original nicht."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread und Dekomposition — Code testen"}),e.jsx(y,{filename:"spread-dekomposition.js",children:`// Arrays kopieren und verbinden
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
console.log(liste); // [3, 5, 8]`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Aufwärmen — alles zusammen"}),e.jsx("p",{children:"Diese kleine Funktion braucht alles, was wir wiederholt haben. Sie ist der Einstieg in die Algorithmen dieser Woche."}),e.jsx(y,{filename:"aufwaermen.js",children:`const schueler = [
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

console.log(besteNote(schueler));`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," Parameter hinein, ",e.jsx("code",{children:"return"})," ","heraus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrow-Funktionen:"})," ",e.jsx("code",{children:"(x) => x * x"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Callbacks:"})," forEach, map, filter, reduce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekte:"})," Schlüssel-Wert-Paare, verschachtelbar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread:"})," ",e.jsx("code",{children:"[...liste]"}),","," ",e.jsx("code",{children:"{ ...objekt }"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition:"})," ",e.jsxs("code",{children:["const ","{ name }"," = person"]}),","," ",e.jsx("code",{children:"[a, b] = [b, a]"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Nächster Schritt:"})," Wir bauen daraus Algorithmen — Rezepte, die ein Problem Schritt für Schritt lösen."]})]})})]})}const Sd=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"})),ci="_container_3h59p_1",ai="_title_3h59p_9",di="_inputRow_3h59p_17",hi="_inputLabel_3h59p_26",oi="_input_3h59p_17",ui="_smallButton_3h59p_47",xi="_stage_3h59p_63",ji="_bars_3h59p_69",gi="_barSlot_3h59p_77",mi="_bar_3h59p_69",bi="_barValue_3h59p_101",fi="_barIndex_3h59p_108",pi="_compare_3h59p_115",ki="_swap_3h59p_119",Si="_sorted_3h59p_123",zi="_pivot_3h59p_127",wi="_found_3h59p_131",vi="_dimmed_3h59p_135",Ai="_description_3h59p_141",yi="_stepBadge_3h59p_148",Ni="_vars_3h59p_158",Di="_varChip_3h59p_165",Ei="_controls_3h59p_175",Bi="_button_3h59p_182",Wi="_play_3h59p_201",_i="_pause_3h59p_207",Fi="_slider_3h59p_213",Pi="_legend_3h59p_221",Zi="_legendItem_3h59p_230",Ki="_dot_3h59p_236",Mi="_dimmedDot_3h59p_243",Oi="_code_3h59p_250",Ti="_codeLine_3h59p_261",Ii="_activeLine_3h59p_268",Li="_lineNo_3h59p_274",P={container:ci,title:ai,inputRow:di,inputLabel:hi,input:oi,smallButton:ui,stage:xi,bars:ji,barSlot:gi,bar:mi,barValue:bi,barIndex:fi,compare:pi,swap:ki,sorted:Si,pivot:zi,found:wi,dimmed:vi,description:Ai,stepBadge:yi,vars:Ni,varChip:Di,controls:Ei,button:Bi,play:Wi,pause:_i,slider:Fi,legend:Pi,legendItem:Zi,dot:Ki,dimmedDot:Mi,code:Oi,codeLine:Ti,activeLine:Ii,lineNo:Li};function Me({initialArray:s=[5,3,8,1,9,2],generate:n,title:i,code:r=null,editable:t=!0,speed:l=700,legend:j="sort"}){const[c,a]=D.useState(s),[o,z]=D.useState(s.join(", ")),[h,g]=D.useState(0),[E,b]=D.useState(!1),f=D.useRef(null),S=D.useMemo(()=>{try{const w=n(c);return Array.isArray(w)&&w.length>0?w:[{array:c,description:"Keine Schritte"}]}catch{return[{array:c,description:"Fehler beim Erzeugen der Schritte"}]}},[c,n]),k=S.length,u=S[Math.min(h,k-1)]??{},v=u.array??c,_=Math.max(1,...v.map(w=>Math.abs(Number(w)||0))),F=D.useCallback(()=>b(!1),[]);D.useEffect(()=>{if(E)return f.current=setInterval(()=>{g(w=>w>=k-1?(b(!1),w):w+1)},l),()=>clearInterval(f.current)},[E,l,k]),D.useEffect(()=>{g(0),b(!1)},[S]);const B=()=>{const w=o.split(",").map(m=>Number.parseInt(m.trim(),10)).filter(m=>!Number.isNaN(m));if(w.length<2||w.length>12){z(c.join(", "));return}a(w)},K=()=>{const w=[...c];for(let m=w.length-1;m>0;m--){const N=Math.floor(Math.random()*(m+1));[w[m],w[N]]=[w[N],w[m]]}a(w),z(w.join(", "))},O=w=>{const m=[P.bar];return!u.range||w>=u.range[0]&&w<=u.range[1]||m.push(P.dimmed),u.sorted?.includes(w)&&m.push(P.sorted),u.compare?.includes(w)&&m.push(P.compare),u.swap?.includes(w)&&m.push(P.swap),u.pivot===w&&m.push(P.pivot),u.found===w&&m.push(P.found),m.join(" ")},I=r?r.replace(/^\n/,"").split(`
`):null;return e.jsxs("div",{className:P.container,children:[i?e.jsx("div",{className:P.title,children:i}):null,t?e.jsxs("div",{className:P.inputRow,children:[e.jsx("label",{className:P.inputLabel,htmlFor:`${i}-input`,children:"Eigene Zahlen (mit Komma getrennt):"}),e.jsx("input",{id:`${i}-input`,className:P.input,value:o,onChange:w=>z(w.target.value),onBlur:B,onKeyDown:w=>w.key==="Enter"&&B()}),e.jsx("button",{type:"button",className:P.smallButton,onClick:B,children:"Übernehmen"}),e.jsx("button",{type:"button",className:P.smallButton,onClick:K,children:"Mischen"})]}):null,e.jsx("div",{className:P.stage,children:e.jsx("div",{className:P.bars,children:v.map((w,m)=>e.jsxs("div",{className:P.barSlot,children:[e.jsx("div",{className:O(m),style:{height:`${Math.max(8,Math.abs(w)/_*100)}%`},children:e.jsx("span",{className:P.barValue,children:w})}),e.jsx("span",{className:P.barIndex,children:m})]},m))})}),e.jsxs("div",{className:P.description,children:[e.jsxs("span",{className:P.stepBadge,children:["Schritt ",Math.min(h+1,k)," / ",k]}),u.description??""]}),u.vars&&Object.keys(u.vars).length>0?e.jsx("div",{className:P.vars,children:Object.entries(u.vars).map(([w,m])=>e.jsxs("span",{className:P.varChip,children:[e.jsx("strong",{children:w})," = ",String(m)]},w))}):null,e.jsxs("div",{className:P.controls,children:[e.jsx("button",{type:"button",className:P.button,onClick:()=>{F(),g(0)},disabled:h===0,children:"⏮ Anfang"}),e.jsx("button",{type:"button",className:P.button,onClick:()=>{F(),g(w=>Math.max(0,w-1))},disabled:h===0,children:"◀ Zurück"}),e.jsx("button",{type:"button",className:`${P.button} ${E?P.pause:P.play}`,onClick:()=>b(w=>!w),disabled:h>=k-1,children:E?"⏸ Pause":"▶ Abspielen"}),e.jsx("button",{type:"button",className:P.button,onClick:()=>{F(),g(w=>Math.min(k-1,w+1))},disabled:h>=k-1,children:"Weiter ▶"}),e.jsx("button",{type:"button",className:P.button,onClick:()=>{F(),g(k-1)},disabled:h>=k-1,children:"Ende ⏭"})]}),e.jsx("input",{type:"range",className:P.slider,min:0,max:Math.max(0,k-1),value:Math.min(h,k-1),onChange:w=>{F(),g(Number(w.target.value))},"aria-label":"Schritt wählen"}),e.jsx("div",{className:P.legend,children:j==="search"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.compare}`})," geprüft"]}),e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.pivot}`})," Mitte"]}),e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.found}`})," gefunden"]}),e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.dimmedDot}`})," ausgeschlossen"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.compare}`})," Vergleich"]}),e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.swap}`})," Tausch"]}),e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.pivot}`})," Pivot"]}),e.jsxs("span",{className:P.legendItem,children:[e.jsx("i",{className:`${P.dot} ${P.sorted}`})," fertig"]})]})}),I?e.jsx("pre",{className:P.code,children:I.map((w,m)=>e.jsxs("div",{className:u.line===m+1?`${P.codeLine} ${P.activeLine}`:P.codeLine,children:[e.jsx("span",{className:P.lineNo,children:m+1}),e.jsx("span",{children:w})]},m))}):null]})}const Z=s=>s.map(n=>n),Ci=`function bubbleSort(liste) {
  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        const temp = liste[j];
        liste[j] = liste[j + 1];
        liste[j + 1] = temp;
      }
    }
  }
  return liste;
}`;function Gi(s){const n=Z(s),i=n.length,r=[],t=[];let l=0,j=0;r.push({array:Z(n),description:"Start: Die Liste ist noch unsortiert.",line:1,vars:{länge:i}});for(let c=0;c<i-1;c++){r.push({array:Z(n),sorted:Z(t),description:`Durchlauf ${c+1}: Das grösste noch unsortierte Element wandert ganz nach rechts.`,line:2,vars:{i:c,Vergleiche:l,Tausche:j}});for(let a=0;a<i-1-c;a++)l++,r.push({array:Z(n),compare:[a,a+1],sorted:Z(t),description:`Vergleiche liste[${a}] = ${n[a]} mit liste[${a+1}] = ${n[a+1]}.`,line:4,vars:{i:c,j:a,Vergleiche:l,Tausche:j}}),n[a]>n[a+1]?(j++,r.push({array:Z(n),swap:[a,a+1],sorted:Z(t),description:`${n[a]} > ${n[a+1]} → die beiden werden getauscht.`,line:6,vars:{i:c,j:a,Vergleiche:l,Tausche:j}}),[n[a],n[a+1]]=[n[a+1],n[a]],r.push({array:Z(n),swap:[a,a+1],sorted:Z(t),description:"Getauscht. Der grössere Wert ist eine Position weiter rechts.",line:7,vars:{i:c,j:a,Vergleiche:l,Tausche:j}})):r.push({array:Z(n),compare:[a,a+1],sorted:Z(t),description:`${n[a]} ≤ ${n[a+1]} → kein Tausch nötig.`,line:4,vars:{i:c,j:a,Vergleiche:l,Tausche:j}});t.push(i-1-c),r.push({array:Z(n),sorted:Z(t),description:`Position ${i-1-c} ist endgültig richtig: ${n[i-1-c]} ist an seinem Platz.`,line:9,vars:{i:c,Vergleiche:l,Tausche:j}})}return t.push(0),r.push({array:Z(n),sorted:n.map((c,a)=>a),description:`Fertig! Die Liste ist sortiert. (${l} Vergleiche, ${j} Tausche)`,line:11,vars:{Vergleiche:l,Tausche:j}}),r}const $i=`function quickSort(liste, links = 0, rechts = liste.length - 1) {
  if (links >= rechts) return liste;

  const pivot = liste[rechts];
  let i = links;

  for (let j = links; j < rechts; j++) {
    if (liste[j] < pivot) {
      [liste[i], liste[j]] = [liste[j], liste[i]];
      i++;
    }
  }

  [liste[i], liste[rechts]] = [liste[rechts], liste[i]];

  quickSort(liste, links, i - 1);
  quickSort(liste, i + 1, rechts);
  return liste;
}`;function Vi(s){const n=Z(s),i=[],r=[];let t=0,l=0;i.push({array:Z(n),description:"Start: Wir sortieren die ganze Liste.",line:1,vars:{länge:n.length}});const j=(c,a,o)=>{if(c>a)return;if(c===a){r.push(c),i.push({array:Z(n),sorted:Z(r),range:[c,a],description:`Nur ein Element übrig (Position ${c}) → schon sortiert.`,line:2,vars:{links:c,rechts:a,Tiefe:o}});return}i.push({array:Z(n),sorted:Z(r),range:[c,a],pivot:a,description:`Neuer Bereich [${c} … ${a}]. Pivot ist das letzte Element: ${n[a]}.`,line:4,vars:{links:c,rechts:a,Pivot:n[a],Tiefe:o}});const z=n[a];let h=c;for(let g=c;g<a;g++)t++,i.push({array:Z(n),sorted:Z(r),range:[c,a],pivot:a,compare:[g],description:`Ist liste[${g}] = ${n[g]} kleiner als der Pivot ${z}?`,line:8,vars:{links:c,rechts:a,i:h,j:g,Pivot:z,Vergleiche:t}}),n[g]<z?(l++,i.push({array:Z(n),sorted:Z(r),range:[c,a],pivot:a,swap:[h,g],description:`Ja → ${n[g]} kommt in den linken Teil: tausche Position ${h} und ${g}.`,line:9,vars:{links:c,rechts:a,i:h,j:g,Pivot:z,Tausche:l}}),[n[h],n[g]]=[n[g],n[h]],h++,i.push({array:Z(n),sorted:Z(r),range:[c,a],pivot:a,compare:[h-1],description:`Die Grenze des linken Teils rückt weiter: i = ${h}.`,line:10,vars:{links:c,rechts:a,i:h,j:g,Pivot:z,Tausche:l}})):i.push({array:Z(n),sorted:Z(r),range:[c,a],pivot:a,compare:[g],description:`Nein → ${n[g]} bleibt im rechten Teil.`,line:8,vars:{links:c,rechts:a,i:h,j:g,Pivot:z,Vergleiche:t}});l++,i.push({array:Z(n),sorted:Z(r),range:[c,a],swap:[h,a],description:`Der Pivot ${z} wird an seine endgültige Position ${h} getauscht.`,line:14,vars:{links:c,rechts:a,i:h,Pivot:z,Tausche:l}}),[n[h],n[a]]=[n[a],n[h]],r.push(h),i.push({array:Z(n),sorted:Z(r),range:[c,a],description:`Position ${h} ist fertig. Links davon sind alle kleiner, rechts alle grösser.`,line:14,vars:{links:c,rechts:a,i:h,Pivot:z}}),i.push({array:Z(n),sorted:Z(r),range:[c,Math.max(c,h-1)],description:`Jetzt der linke Teil [${c} … ${h-1}] (rekursiver Aufruf).`,line:16,vars:{links:c,rechts:h-1,Tiefe:o+1}}),j(c,h-1,o+1),i.push({array:Z(n),sorted:Z(r),range:[Math.min(h+1,a),a],description:`Jetzt der rechte Teil [${h+1} … ${a}] (rekursiver Aufruf).`,line:17,vars:{links:h+1,rechts:a,Tiefe:o+1}}),j(h+1,a,o+1)};return j(0,n.length-1,0),i.push({array:Z(n),sorted:n.map((c,a)=>a),description:`Fertig! Die Liste ist sortiert. (${t} Vergleiche, ${l} Tausche)`,line:18,vars:{Vergleiche:t,Tausche:l}}),i}const Ri=`function lineareSuche(liste, gesucht) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === gesucht) {
      return i;
    }
  }
  return -1;
}`;function Hi(s){return n=>{const i=Z(n),r=[{array:Z(i),description:`Wir suchen die Zahl ${s} und starten ganz links.`,line:1,vars:{gesucht:s}}];for(let t=0;t<i.length;t++){const l=i[t]===s;if(r.push({array:Z(i),compare:l?[]:[t],found:l?t:void 0,description:l?`Treffer! liste[${t}] = ${i[t]} ist die gesuchte Zahl. Rückgabe: ${t}.`:`liste[${t}] = ${i[t]} ist nicht ${s} → weiter nach rechts.`,line:l?4:3,vars:{i:t,gesucht:s,Vergleiche:t+1}}),l)return r}return r.push({array:Z(i),description:`${s} kommt in der Liste nicht vor. Rückgabe: -1.`,line:7,vars:{gesucht:s,Vergleiche:i.length}}),r}}const Ji=`function binaereSuche(liste, gesucht) {
  let links = 0;
  let rechts = liste.length - 1;

  while (links <= rechts) {
    const mitte = Math.floor((links + rechts) / 2);

    if (liste[mitte] === gesucht) return mitte;
    if (liste[mitte] < gesucht) {
      links = mitte + 1;
    } else {
      rechts = mitte - 1;
    }
  }
  return -1;
}`;function Ui(s){return n=>{const i=Z(n).sort((c,a)=>c-a),r=[{array:Z(i),description:`Die Liste ist sortiert. Wir suchen ${s} und halbieren den Bereich immer wieder.`,line:1,vars:{gesucht:s}}];let t=0,l=i.length-1,j=0;for(;t<=l;){j++;const c=Math.floor((t+l)/2);if(r.push({array:Z(i),range:[t,l],pivot:c,description:`Bereich [${t} … ${l}] → Mitte ist Position ${c} mit dem Wert ${i[c]}.`,line:6,vars:{links:t,rechts:l,mitte:c,Schritte:j}}),i[c]===s)return r.push({array:Z(i),range:[t,l],found:c,description:`Treffer! ${s} steht an Position ${c}. Gefunden in ${j} Schritten.`,line:8,vars:{mitte:c,Schritte:j}}),r;i[c]<s?(t=c+1,r.push({array:Z(i),range:[t,l],description:`${i[c]} < ${s} → die linke Hälfte fällt weg.`,line:10,vars:{links:t,rechts:l,Schritte:j}})):(l=c-1,r.push({array:Z(i),range:[t,Math.max(t,l)],description:`${i[c]} > ${s} → die rechte Hälfte fällt weg.`,line:12,vars:{links:t,rechts:l,Schritte:j}}))}return r.push({array:Z(i),description:`${s} kommt nicht vor. Rückgabe: -1 (nach ${j} Schritten).`,line:15,vars:{Schritte:j}}),r}}const qi=`function maximum(liste) {
  let groesstes = liste[0];

  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > groesstes) {
      groesstes = liste[i];
    }
  }
  return groesstes;
}`;function Qi(s){const n=Z(s),i=[{array:Z(n),found:0,description:`Wir merken uns das erste Element als bisher grösstes: ${n[0]}.`,line:2,vars:{grösstes:n[0],"bester Index":0}}];let r=0;for(let t=1;t<n.length;t++)i.push({array:Z(n),compare:[t],found:r,description:`Ist liste[${t}] = ${n[t]} grösser als ${n[r]}?`,line:5,vars:{i:t,grösstes:n[r]}}),n[t]>n[r]?(r=t,i.push({array:Z(n),found:r,description:`Ja → neues Maximum: ${n[r]}.`,line:6,vars:{i:t,grösstes:n[r],"bester Index":r}})):i.push({array:Z(n),found:r,description:`Nein → ${n[r]} bleibt das Maximum.`,line:5,vars:{i:t,grösstes:n[r]}});return i.push({array:Z(n),found:r,description:`Das Maximum ist ${n[r]} (Position ${r}).`,line:9,vars:{grösstes:n[r]}}),i}const Xi=`function umkehren(liste) {
  let links = 0;
  let rechts = liste.length - 1;

  while (links < rechts) {
    [liste[links], liste[rechts]] = [liste[rechts], liste[links]];
    links++;
    rechts--;
  }
  return liste;
}`;function Yi(s){const n=Z(s),i=[{array:Z(n),description:"Zwei Zeiger: einer ganz links, einer ganz rechts.",line:2,vars:{links:0,rechts:n.length-1}}];let r=0,t=n.length-1;for(;r<t;)i.push({array:Z(n),swap:[r,t],description:`Tausche Position ${r} (${n[r]}) mit Position ${t} (${n[t]}).`,line:6,vars:{links:r,rechts:t}}),[n[r],n[t]]=[n[t],n[r]],i.push({array:Z(n),swap:[r,t],description:"Getauscht. Beide Zeiger rücken einen Schritt nach innen.",line:7,vars:{links:r+1,rechts:t-1}}),r++,t--;return i.push({array:Z(n),sorted:n.map((l,j)=>j),description:"Die Zeiger haben sich getroffen — die Liste ist umgekehrt.",line:10,vars:{links:r,rechts:t}}),i}const er=Hi(9),nr=Ui(9);function sr(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Einfache Standard-Algorithmen"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Algorithmus"})," ist eine eindeutige Handlungsvorschrift, die ein Problem in endlich vielen Schritten löst — ein Rezept. In fast jedem Programm tauchen dabei dieselben kleinen Bausteine immer wieder auf. Wer diese"," ",e.jsx("strong",{children:"Muster"})," kennt, löst neue Probleme viel schneller — man erkennt: «Ah, das ist ja im Grunde eine Suche.»"]}),e.jsxs("p",{children:["Wir starten mit den einfachen Mustern. Erst danach nehmen wir uns mit ",e.jsx("strong",{children:"Bubble Sort"})," und ",e.jsx("strong",{children:"Quicksort"})," die anspruchsvolleren Sortieralgorithmen vor."]}),e.jsx("h3",{children:"Die sechs Muster dieser Seite"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Suchen"})," — lineare Suche und binäre Suche"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extremwert finden"})," — Maximum und Minimum"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Akkumulieren"})," — Summe, Durchschnitt, Zählen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zwei Zeiger"})," — umkehren, Palindrom prüfen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Häufigkeiten zählen"})," — mit einem Objekt als Zähler-Tabelle"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vergleichen und normalisieren"})," — Anagramme erkennen"]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"1a. Lineare Suche"}),e.jsx("p",{children:"Die einfachste Suche überhaupt: von vorne nach hinten durchgehen und jedes Element anschauen, bis man das gesuchte findet. Wie wenn man eine unsortierte Schublade durchwühlt."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Funktioniert immer — die Liste muss nicht sortiert sein."}),e.jsxs("li",{children:["Gibt üblicherweise den ",e.jsx("strong",{children:"Index"})," zurück, oder"," ",e.jsx("code",{children:"-1"}),", wenn nichts gefunden wurde."]}),e.jsxs("li",{children:["Im schlechtesten Fall müssen alle ",e.jsx("code",{children:"n"})," Elemente geprüft werden → ",e.jsx("code",{children:"O(n)"}),"."]})]})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Lineare Suche — Visualisierung"}),e.jsxs("p",{children:["Gesucht wird die ",e.jsx("strong",{children:"9"}),". Gelb heisst «wird gerade geprüft», türkis heisst «gefunden»."]}),e.jsx(Me,{title:"Lineare Suche nach der 9",initialArray:[4,7,2,9,1,5],generate:er,code:Ri,legend:"search"})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Lineare Suche — Code"}),e.jsx(y,{filename:"lineare-suche.js",children:`function lineareSuche(liste, gesucht) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === gesucht) {
      return i; // gefunden -> Index zurückgeben, Funktion beenden
    }
  }
  return -1; // nicht gefunden
}

const zahlen = [4, 7, 2, 9, 1, 5];
console.log(lineareSuche(zahlen, 9));  // 3
console.log(lineareSuche(zahlen, 42)); // -1

// JavaScript hat das eingebaut:
console.log(zahlen.indexOf(9));     // 3
console.log(zahlen.includes(42));   // false
console.log(zahlen.find((z) => z > 5)); // 7`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"1b. Binäre Suche"}),e.jsxs("p",{children:["Wenn die Liste ",e.jsx("strong",{children:"sortiert"})," ist, geht es viel schneller. Wir schauen in die Mitte und können danach die Hälfte der Liste sofort ausschliessen — wie beim Nachschlagen im Wörterbuch oder beim Zahlenraten «höher oder tiefer?»."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Warum das so stark ist:"})," Bei 1'000'000 Einträgen braucht die lineare Suche bis zu 1'000'000 Vergleiche, die binäre Suche nur ",e.jsx("strong",{children:"20"}),". Jeder Schritt halbiert die Möglichkeiten."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Anzahl Elemente"}),e.jsx("th",{children:"Lineare Suche"}),e.jsx("th",{children:"Binäre Suche"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsx("td",{children:"10"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'000"}),e.jsx("td",{children:"1'000"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'000'000"}),e.jsx("td",{children:"1'000'000"}),e.jsx("td",{children:"20"})]})]})]})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Binäre Suche — Visualisierung"}),e.jsxs("p",{children:["Gesucht wird wieder die ",e.jsx("strong",{children:"9"}),". Die Liste wird automatisch sortiert. Lila ist die geprüfte Mitte, ausgegraute Balken sind bereits ausgeschlossen."]}),e.jsx(Me,{title:"Binäre Suche nach der 9",initialArray:[1,3,4,6,8,9,11,14],generate:nr,code:Ji,legend:"search"})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Binäre Suche — Code"}),e.jsx(y,{filename:"binaere-suche.js",children:`function binaereSuche(liste, gesucht) {
  let links = 0;
  let rechts = liste.length - 1;
  let schritte = 0;

  while (links <= rechts) {
    schritte++;
    const mitte = Math.floor((links + rechts) / 2);

    if (liste[mitte] === gesucht) {
      console.log("Gefunden nach " + schritte + " Schritten");
      return mitte;
    }

    if (liste[mitte] < gesucht) {
      links = mitte + 1;   // rechte Hälfte weitersuchen
    } else {
      rechts = mitte - 1;  // linke Hälfte weitersuchen
    }
  }
  return -1;
}

const sortiert = [1, 3, 4, 6, 8, 9, 11, 14];
console.log(binaereSuche(sortiert, 9));   // 5
console.log(binaereSuche(sortiert, 10));  // -1

// Achtung: bei unsortierten Listen liefert sie falsche Resultate!`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"2. Extremwert finden (Maximum / Minimum)"}),e.jsx("p",{children:"Das Muster: Wir merken uns einen «bisherigen Champion» und vergleichen ihn mit jedem weiteren Element. Ist ein Element besser, wird es der neue Champion."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Als Startwert nehmen wir das"," ",e.jsx("em",{children:"erste Element"})," der Liste — nicht 0! Sonst funktioniert der Algorithmus bei negativen Zahlen nicht."]})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Maximum — Visualisierung"}),e.jsx(Me,{title:"Das grösste Element finden",initialArray:[3,8,2,9,4,6],generate:Qi,code:qi,legend:"search"})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Maximum — Code"}),e.jsx(y,{filename:"maximum.js",children:`function maximum(liste) {
  let groesstes = liste[0]; // Startwert: erstes Element!

  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > groesstes) {
      groesstes = liste[i];
    }
  }
  return groesstes;
}

console.log(maximum([3, 8, 2, 9, 4, 6]));    // 9
console.log(maximum([-5, -2, -9]));          // -2

// Variante: Position des Maximums
function maximumIndex(liste) {
  let besterIndex = 0;
  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > liste[besterIndex]) besterIndex = i;
  }
  return besterIndex;
}

console.log(maximumIndex([3, 8, 2, 9, 4, 6])); // 3

// Variante: Objekt mit dem grössten Wert
const schueler = [
  { name: "Anna", note: 5.5 },
  { name: "Ben", note: 4 },
  { name: "Clara", note: 6 },
];

const beste = schueler.reduce((a, b) => (b.note > a.note ? b : a));
console.log(beste);`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"3. Akkumulieren (Summe, Durchschnitt, Zählen)"}),e.jsxs("p",{children:["Das wohl häufigste Muster überhaupt: Wir starten mit einem"," ",e.jsx("strong",{children:"Sammelbehälter"})," (meist ",e.jsx("code",{children:"0"})," oder eine leere Liste) und fügen bei jedem Element etwas hinzu."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Summe:"})," Behälter = 0, jedes Element addieren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Durchschnitt:"})," Summe geteilt durch Anzahl"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zählen:"})," Behälter = 0, bei jedem Treffer +1"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Produkt:"})," Behälter = 1, jedes Element multiplizieren"]})]}),e.jsxs("p",{children:["Laufzeit: immer ",e.jsx("code",{children:"O(n)"})," — jedes Element wird genau einmal angeschaut."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Akkumulieren — Code"}),e.jsx(y,{filename:"akkumulieren.js",children:`const noten = [5.5, 4, 6, 3.5, 4.5, 5];

// Summe mit einer Schleife
function summe(liste) {
  let total = 0;              // Sammelbehälter
  for (const wert of liste) {
    total = total + wert;     // hinzufügen
  }
  return total;
}

console.log("Summe:", summe(noten));

// Durchschnitt
function durchschnitt(liste) {
  if (liste.length === 0) return 0; // Sonderfall!
  return summe(liste) / liste.length;
}

console.log("Durchschnitt:", durchschnitt(noten).toFixed(2));

// Zählen mit Bedingung
function zaehleUngenuegende(liste) {
  let anzahl = 0;
  for (const note of liste) {
    if (note < 4) anzahl++;
  }
  return anzahl;
}

console.log("Ungenügende:", zaehleUngenuegende(noten));

// Dasselbe mit reduce und filter (Woche 2!)
console.log("Summe:", noten.reduce((a, b) => a + b, 0));
console.log("Ungenügende:", noten.filter((n) => n < 4).length);`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"4. Zwei Zeiger (umkehren, Palindrom)"}),e.jsxs("p",{children:["Statt nur einen Index zu verwenden, arbeiten wir mit"," ",e.jsx("strong",{children:"zwei"}),": einer startet links, einer rechts. Beide bewegen sich aufeinander zu, bis sie sich treffen. Damit ist man in der Mitte fertig — man braucht nur ",e.jsx("code",{children:"n / 2"})," Durchgänge."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Umkehren:"})," die beiden Elemente tauschen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Palindrom prüfen:"})," die beiden Elemente vergleichen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Paar mit Zielsumme suchen"})," (in sortierter Liste)"]})]})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Umkehren — Visualisierung"}),e.jsx(Me,{title:"Liste umkehren mit zwei Zeigern",initialArray:[1,2,3,4,5,6],generate:Yi,code:Xi,legend:"sort"})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Umkehren und Palindrom — Code"}),e.jsx(y,{filename:"zwei-zeiger.js",children:`// Liste umkehren
function umkehren(eingabe) {
  const liste = [...eingabe];
  let links = 0;
  let rechts = liste.length - 1;

  while (links < rechts) {
    [liste[links], liste[rechts]] = [liste[rechts], liste[links]];
    links++;
    rechts--;
  }
  return liste;
}

console.log(umkehren([1, 2, 3, 4, 5]));
console.log([1, 2, 3, 4, 5].reverse()); // eingebaut (verändert das Original!)

// Palindrom prüfen: vorwärts wie rückwärts gleich
function istPalindrom(text) {
  // Normalisieren: klein schreiben, nur Buchstaben behalten
  const sauber = text.toLowerCase().replace(/[^a-zäöü]/g, "");

  let links = 0;
  let rechts = sauber.length - 1;

  while (links < rechts) {
    if (sauber[links] !== sauber[rechts]) return false;
    links++;
    rechts--;
  }
  return true;
}

console.log(istPalindrom("Anna"));                     // true
console.log(istPalindrom("Regallager"));               // true
console.log(istPalindrom("Ein Esel lese nie"));        // true
console.log(istPalindrom("Informatik"));               // false`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"5. Häufigkeiten zählen"}),e.jsxs("p",{children:["Hier zahlt sich Woche 2 richtig aus: Wir benutzen ein"," ",e.jsx("strong",{children:"Objekt als Zähler-Tabelle"}),". Der Schlüssel ist das, was wir zählen, der Wert ist die Anzahl."]}),e.jsxs("p",{children:["Dieses Muster braucht man ständig: Wortstatistiken, Stimmenzählen, Duplikate finden, Anagramme prüfen. Und es ist ",e.jsx("code",{children:"O(n)"})," — man muss die Daten nur ein einziges Mal durchgehen."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Häufigkeiten — Code"}),e.jsx(y,{filename:"haeufigkeiten.js",children:`function haeufigkeiten(liste) {
  const zaehler = {}; // leeres Objekt als Tabelle

  for (const element of liste) {
    if (zaehler[element] === undefined) {
      zaehler[element] = 1;   // zum ersten Mal gesehen
    } else {
      zaehler[element]++;     // schon bekannt -> erhöhen
    }
  }
  return zaehler;
}

const farben = ["rot", "blau", "rot", "grün", "rot", "blau"];
console.log(haeufigkeiten(farben));
// { rot: 3, blau: 2, grün: 1 }

// Kurzform mit ||
function haeufigkeitenKurz(liste) {
  const zaehler = {};
  for (const e of liste) {
    zaehler[e] = (zaehler[e] || 0) + 1;
  }
  return zaehler;
}

// Buchstaben in einem Wort zählen
console.log(haeufigkeitenKurz("banane".split("")));

// Das häufigste Element finden
function haeufigstes(liste) {
  const zaehler = haeufigkeitenKurz(liste);
  let bestes = null;
  for (const [wert, anzahl] of Object.entries(zaehler)) {
    if (bestes === null || anzahl > zaehler[bestes]) bestes = wert;
  }
  return bestes;
}

console.log(haeufigstes(farben)); // "rot"

// Duplikate entfernen
console.log([...new Set(farben)]); // ["rot", "blau", "grün"]`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"6. Anagramme erkennen"}),e.jsxs("p",{children:["Zwei Wörter sind ",e.jsx("strong",{children:"Anagramme"}),", wenn sie aus genau denselben Buchstaben bestehen — nur in anderer Reihenfolge. Beispiele: ",e.jsx("code",{children:"Lager"})," / ",e.jsx("code",{children:"Regal"}),","," ",e.jsx("code",{children:"Ampel"})," / ",e.jsx("code",{children:"Lampe"}),"."]}),e.jsx("p",{children:"Es gibt zwei schöne Lösungswege, und beide benutzen etwas, das wir schon kennen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sortieren:"})," Beide Wörter buchstabenweise sortieren und vergleichen. Kurz und elegant, Laufzeit"," ",e.jsx("code",{children:"O(n · log n)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zählen:"})," Die Buchstabenhäufigkeiten beider Wörter vergleichen. Etwas länger, aber schneller: ",e.jsx("code",{children:"O(n)"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig ist das Normalisieren"})," vorher: Grossschreibung und Leerzeichen sollen keine Rolle spielen."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Anagramme — Code"}),e.jsx(y,{filename:"anagramme.js",children:`// Hilfsfunktion: normalisieren
function normalisieren(wort) {
  return wort.toLowerCase().replace(/[^a-zäöü]/g, "");
}

// Weg 1: sortieren und vergleichen
function istAnagramm(a, b) {
  const sortiere = (w) => normalisieren(w).split("").sort().join("");
  return sortiere(a) === sortiere(b);
}

console.log(istAnagramm("Lager", "Regal"));   // true
console.log(istAnagramm("Ampel", "Lampe"));   // true
console.log(istAnagramm("Hallo", "Welt"));    // false

// Weg 2: Buchstaben zählen
function istAnagramm2(a, b) {
  const x = normalisieren(a);
  const y = normalisieren(b);
  if (x.length !== y.length) return false; // schneller Ausschluss

  const zaehler = {};
  for (const buchstabe of x) {
    zaehler[buchstabe] = (zaehler[buchstabe] || 0) + 1;
  }
  for (const buchstabe of y) {
    if (!zaehler[buchstabe]) return false;  // fehlt oder schon aufgebraucht
    zaehler[buchstabe]--;
  }
  return true;
}

console.log(istAnagramm2("Die Post", "Depots i"));
console.log(istAnagramm2("Informatik", "Informatiker"));`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Übersicht der Muster"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Muster"}),e.jsx("th",{children:"Typische Frage"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lineare Suche"}),e.jsx("td",{children:"Kommt X vor? Wo?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binäre Suche"}),e.jsx("td",{children:"Wo ist X in einer sortierten Liste?"}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extremwert"}),e.jsx("td",{children:"Was ist der grösste / kleinste Wert?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Akkumulieren"}),e.jsx("td",{children:"Wie viel insgesamt? Wie viele davon?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Zwei Zeiger"}),e.jsx("td",{children:"Umkehren, Palindrom, Paare finden"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Häufigkeiten zählen"}),e.jsx("td",{children:"Wie oft kommt was vor?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sortieren (nächste Seiten)"}),e.jsx("td",{children:"Reihenfolge herstellen"}),e.jsxs("td",{children:[e.jsx("code",{children:"O(n²)"})," bzw. ",e.jsx("code",{children:"O(n · log n)"})]})]})]})]}),e.jsxs("p",{children:["Auf den nächsten Seiten geht es weiter mit den"," ",e.jsx("strong",{children:"Sortieralgorithmen"}),". Ganz am Schluss schauen wir uns an, was diese ",e.jsx("code",{children:"O(...)"}),"-Angaben genau bedeuten und warum sie so wichtig sind."]})]})})]})}const zd=Object.freeze(Object.defineProperty({__proto__:null,default:sr},Symbol.toStringTag,{value:"Module"}));function ir(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Sortieren: Bubble Sort"}),e.jsxs("p",{children:["Sortieren ist eine der häufigsten Aufgaben in der Informatik. Eine sortierte Liste lässt sich viel schneller durchsuchen, besser darstellen und leichter vergleichen. Wir beginnen mit dem einfachsten und bekanntesten Sortierverfahren:"," ",e.jsx("strong",{children:"Bubble Sort"}),"."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können die Idee von Bubble Sort in eigenen Worten erklären."}),e.jsx("li",{children:"Sie können Bubble Sort für eine kleine Liste von Hand durchführen."}),e.jsx("li",{children:"Sie verstehen den JavaScript-Code Zeile für Zeile."}),e.jsxs("li",{children:["Sie wissen, warum Bubble Sort ",e.jsx("code",{children:"O(n²)"})," Vergleiche braucht."]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee"}),e.jsxs("p",{children:["Bubble Sort vergleicht immer ",e.jsx("strong",{children:"zwei Nachbarn"}),". Steht der grössere Wert links, werden die beiden getauscht. So wandert die grösste Zahl bei jedem Durchlauf wie eine Luftblase nach rechts — daher der Name."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Gehe die Liste von links nach rechts durch."}),e.jsxs("li",{children:["Vergleiche jedes Paar von Nachbarn: ",e.jsx("code",{children:"liste[j]"})," und"," ",e.jsx("code",{children:"liste[j + 1]"}),"."]}),e.jsxs("li",{children:["Ist der linke Wert grösser, ",e.jsx("strong",{children:"tausche"})," die beiden."]}),e.jsx("li",{children:"Am Ende eines Durchlaufs steht die grösste Zahl ganz rechts — sie ist fertig."}),e.jsx("li",{children:"Wiederhole das mit dem verbleibenden, noch unsortierten Teil."})]}),e.jsxs("p",{children:["Bei ",e.jsx("code",{children:"n"})," Elementen genügen ",e.jsx("code",{children:"n - 1"})," Durchläufe. Nach jedem Durchlauf ist ein Element mehr an seinem endgültigen Platz."]})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Visualisierung"}),e.jsxs("p",{children:["Gehen Sie Schritt für Schritt durch. Gelb bedeutet"," ",e.jsx("em",{children:"wird verglichen"}),", rot ",e.jsx("em",{children:"wird getauscht"})," und grün"," ",e.jsx("em",{children:"steht endgültig richtig"}),". Rechts unten sehen Sie, welche Codezeile gerade ausgeführt wird."]}),e.jsx(Me,{title:"Bubble Sort",initialArray:[5,3,8,1,9,2],generate:Gi,code:Ci,legend:"sort"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Probieren Sie aus:"})," Geben Sie oben eine bereits sortierte Liste ein (z. B. ",e.jsx("code",{children:"1, 2, 3, 4, 5"}),"). Wie viele Vergleiche braucht der Algorithmus? Und wie viele Tausche?"]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Code"}),e.jsx("p",{children:"Zwei verschachtelte Schleifen: Die äussere zählt die Durchläufe, die innere vergleicht die Nachbarn. Führen Sie den Code aus und ändern Sie die Liste."}),e.jsx(y,{filename:"bubblesort.js",children:`function bubbleSort(liste) {
  // Äussere Schleife: ein Durchlauf pro Element
  for (let i = 0; i < liste.length - 1; i++) {

    // Innere Schleife: vergleiche Nachbarn
    // "- i", weil die letzten i Elemente schon fertig sind
    for (let j = 0; j < liste.length - 1 - i; j++) {

      if (liste[j] > liste[j + 1]) {
        // Tauschen mit Hilfsvariable
        const temp = liste[j];
        liste[j] = liste[j + 1];
        liste[j + 1] = temp;
      }
    }
  }
  return liste;
}

const zahlen = [5, 3, 8, 1, 9, 2];
console.log(bubbleSort(zahlen));`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kürzer tauschen — und das Original schonen"}),e.jsxs("p",{children:["Mit der Dekomposition aus Woche 2 geht das Tauschen in einer Zeile. Und mit ",e.jsx("code",{children:"[...liste]"})," arbeiten wir auf einer Kopie, so bleibt das Original erhalten."]}),e.jsx(y,{filename:"bubblesort-kurz.js",children:`function bubbleSort(eingabe) {
  const liste = [...eingabe]; // Kopie, Original bleibt unverändert

  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        // Tauschen mit Dekomposition
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
      }
    }
  }
  return liste;
}

const zahlen = [5, 3, 8, 1, 9, 2];
const sortiert = bubbleSort(zahlen);

console.log("Original: ", zahlen);   // unverändert
console.log("Sortiert: ", sortiert);`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Optimierung: frühzeitig aufhören"}),e.jsxs("p",{children:["Wenn in einem ganzen Durchlauf ",e.jsx("strong",{children:"kein"})," Tausch mehr passiert, ist die Liste bereits sortiert. Dann können wir abbrechen. Bei einer schon sortierten Liste braucht der Algorithmus so nur noch einen einzigen Durchlauf."]}),e.jsx(y,{filename:"bubblesort-optimiert.js",children:`function bubbleSortOptimiert(eingabe) {
  const liste = [...eingabe];
  let durchlaeufe = 0;

  for (let i = 0; i < liste.length - 1; i++) {
    let getauscht = false;
    durchlaeufe++;

    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
        getauscht = true;
      }
    }

    // Kein Tausch => bereits sortiert => abbrechen
    if (!getauscht) break;
  }

  console.log("Durchläufe:", durchlaeufe);
  return liste;
}

console.log(bubbleSortOptimiert([5, 3, 8, 1, 9, 2])); // viele Durchläufe
console.log(bubbleSortOptimiert([1, 2, 3, 4, 5, 6])); // nur 1 Durchlauf`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaften von Bubble Sort"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sehr einfach"})," zu verstehen und zu programmieren"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"In place"})," — braucht kaum zusätzlichen Speicher"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Stabil"})," — gleiche Werte behalten ihre Reihenfolge"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Langsam"})," — bei doppelt so vielen Elementen braucht er rund ",e.jsx("em",{children:"viermal"})," so lange"]}),e.jsx("li",{children:"❌ In der Praxis wird er nie verwendet (aber überall unterrichtet)"})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Vergleiche"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall (sortiert, optimiert)"}),e.jsx("td",{children:"n − 1"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"≈ n² / 2"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall (umgekehrt sortiert)"}),e.jsx("td",{children:"n · (n − 1) / 2"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:["Was ",e.jsx("code",{children:"O(n²)"})," genau bedeutet, schauen wir auf der Seite zur"," ",e.jsx("strong",{children:"Laufzeitanalyse"})," an."]})]})})]})}const wd=Object.freeze(Object.defineProperty({__proto__:null,default:ir},Symbol.toStringTag,{value:"Module"}));function rr(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Sortieren: Quicksort"}),e.jsxs("p",{children:["Bubble Sort ist einfach, aber langsam. ",e.jsx("strong",{children:"Quicksort"})," ","ist einer der schnellsten Sortieralgorithmen überhaupt und wird in vielen Programmiersprachen tatsächlich eingesetzt. Sein Trick heisst"," ",e.jsx("strong",{children:"Teile und herrsche"})," (divide and conquer): Ein grosses Problem wird in kleinere Teilprobleme zerlegt."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie können erklären, was ein ",e.jsx("strong",{children:"Pivot"})," ist und was beim Partitionieren passiert."]}),e.jsx("li",{children:"Sie verstehen, was Rekursion in diesem Algorithmus bedeutet."}),e.jsx("li",{children:"Sie können den Quicksort-Code Zeile für Zeile erklären."}),e.jsxs("li",{children:["Sie wissen, warum Quicksort im Schnitt ",e.jsx("code",{children:"O(n · log n)"})," ","ist, im schlechtesten Fall aber ",e.jsx("code",{children:"O(n²)"}),"."]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee: Teile und herrsche"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Wähle ein Element als ",e.jsx("strong",{children:"Pivot"})," (wir nehmen immer das letzte Element des Bereichs)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Partitionieren:"})," Sortiere alle kleineren Elemente nach links vom Pivot, alle grösseren nach rechts."]}),e.jsxs("li",{children:["Danach steht das Pivot an seiner ",e.jsx("strong",{children:"endgültigen"})," ","Position — es muss nie wieder bewegt werden."]}),e.jsxs("li",{children:["Wiederhole das Ganze für den linken Teil und für den rechten Teil (",e.jsx("strong",{children:"Rekursion"}),")."]}),e.jsxs("li",{children:["Ein Bereich mit 0 oder 1 Element ist automatisch sortiert →"," ",e.jsx("strong",{children:"Abbruchbedingung"}),"."]})]}),e.jsx("h3",{children:"Analogie"}),e.jsx("p",{children:"Stellen Sie sich eine Klasse vor, die sich nach Grösse aufstellen soll. Eine Person stellt sich in die Mitte. Alle Kleineren gehen nach links, alle Grösseren nach rechts. Jetzt hat diese Person garantiert ihren richtigen Platz. Dann macht die linke Gruppe dasselbe, und die rechte auch — bis alle stehen."})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Visualisierung"}),e.jsxs("p",{children:["Lila ist das ",e.jsx("em",{children:"Pivot"}),", gelb wird gerade"," ",e.jsx("em",{children:"mit dem Pivot verglichen"}),", rot wird ",e.jsx("em",{children:"getauscht"})," und grün steht ",e.jsx("em",{children:"endgültig richtig"}),". Ausgegraute Balken liegen ausserhalb des aktuellen Bereichs."]}),e.jsx(Me,{title:"Quicksort (Pivot = letztes Element)",initialArray:[7,2,9,4,1,8,3],generate:Vi,code:$i,legend:"sort"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beobachten Sie:"})," Sobald ein Balken grün wird, wird er nie mehr angefasst. Und der aktive Bereich wird immer kleiner."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Code"}),e.jsxs("p",{children:["Die Funktion ruft sich ",e.jsx("strong",{children:"selbst"})," auf — das ist Rekursion. Die Parameter ",e.jsx("code",{children:"links"})," und ",e.jsx("code",{children:"rechts"})," ","sagen, welcher Teil der Liste gerade bearbeitet wird."]}),e.jsx(y,{filename:"quicksort.js",children:`function quickSort(liste, links = 0, rechts = liste.length - 1) {
  // Abbruchbedingung: 0 oder 1 Element => schon sortiert
  if (links >= rechts) return liste;

  // 1. Pivot wählen: das letzte Element des Bereichs
  const pivot = liste[rechts];

  // 2. Partitionieren
  let i = links; // Grenze: links davon ist alles kleiner als das Pivot

  for (let j = links; j < rechts; j++) {
    if (liste[j] < pivot) {
      [liste[i], liste[j]] = [liste[j], liste[i]];
      i++;
    }
  }

  // 3. Pivot an seine endgültige Position tauschen
  [liste[i], liste[rechts]] = [liste[rechts], liste[i]];

  // 4. Rekursion: linker Teil und rechter Teil
  quickSort(liste, links, i - 1);
  quickSort(liste, i + 1, rechts);

  return liste;
}

const zahlen = [7, 2, 9, 4, 1, 8, 3];
console.log(quickSort(zahlen));`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eine kurze, gut lesbare Variante"}),e.jsxs("p",{children:["Mit ",e.jsx("code",{children:"filter"})," und Spread lässt sich Quicksort sehr elegant schreiben. Diese Version ist leichter zu lesen, braucht aber mehr Speicher, weil sie bei jedem Schritt neue Listen erzeugt."]}),e.jsx(y,{filename:"quicksort-funktional.js",children:`function quickSort(liste) {
  if (liste.length <= 1) return liste;

  const [pivot, ...rest] = liste;          // Dekomposition + Spread
  const kleiner = rest.filter((x) => x < pivot);
  const groesser = rest.filter((x) => x >= pivot);

  return [...quickSort(kleiner), pivot, ...quickSort(groesser)];
}

console.log(quickSort([7, 2, 9, 4, 1, 8, 3]));

// Funktioniert auch mit Wörtern
console.log(quickSort(["Kiwi", "Apfel", "Zwetschge", "Banane"]));`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Diskussionsfrage:"})," Welche der beiden Versionen würden Sie in einem Programm verwenden — die kurze oder die «in place»-Version? Warum?"]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaften von Quicksort"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sehr schnell"})," — im Schnitt"," ",e.jsx("code",{children:"O(n · log n)"})]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"In place"})," möglich (die erste Version)"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Schlechtester Fall"})," ",e.jsx("code",{children:"O(n²)"}),": wenn das Pivot immer der kleinste oder grösste Wert ist — z. B. bei einer bereits sortierten Liste!"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Nicht stabil"})," — gleiche Werte können ihre Reihenfolge tauschen"]}),e.jsx("li",{children:"❌ Deutlich schwieriger zu verstehen als Bubble Sort"})]}),e.jsx("h3",{children:"Bubble Sort und Quicksort im Vergleich"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Bubble Sort"}),e.jsx("th",{children:"Quicksort"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Prinzip"}),e.jsx("td",{children:"Nachbarn tauschen"}),e.jsx("td",{children:"Teile und herrsche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1000 Elemente (grob)"}),e.jsx("td",{children:"≈ 500'000 Vergleiche"}),e.jsx("td",{children:"≈ 10'000 Vergleiche"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tipp aus der Praxis:"})," Ein zufällig gewähltes Pivot (statt immer das letzte Element) macht den schlechtesten Fall extrem unwahrscheinlich."]})]})})]})}const vd=Object.freeze(Object.defineProperty({__proto__:null,default:rr},Symbol.toStringTag,{value:"Module"})),tr="_container_1hqpd_1",lr="_header_1hqpd_9",cr="_sliderLabel_1hqpd_13",ar="_slider_1hqpd_13",dr="_rows_1hqpd_24",hr="_row_1hqpd_24",or="_rowLabel_1hqpd_37",ur="_rowName_1hqpd_42",xr="_rowExample_1hqpd_48",jr="_barTrack_1hqpd_53",gr="_bar_1hqpd_53",mr="_rowValue_1hqpd_66",br="_ops_1hqpd_73",fr="_time_1hqpd_78",pr="_note_1hqpd_83",ne={container:tr,header:lr,sliderLabel:cr,slider:ar,rows:dr,row:hr,rowLabel:or,rowName:ur,rowExample:xr,barTrack:jr,bar:gr,rowValue:mr,ops:br,time:fr,note:pr},kr=[{key:"O(1)",label:"O(1) — konstant",example:"liste[5], liste.length",fn:()=>1,color:"var(--color-green)"},{key:"O(log n)",label:"O(log n) — logarithmisch",example:"Binäre Suche",fn:s=>Math.max(1,Math.ceil(Math.log2(s))),color:"var(--color-aqua)"},{key:"O(n)",label:"O(n) — linear",example:"Lineare Suche, Summe, Maximum",fn:s=>s,color:"var(--color-blue)"},{key:"O(n log n)",label:"O(n · log n) — linear-logarithmisch",example:"Quicksort (Durchschnitt), sort()",fn:s=>Math.ceil(s*Math.max(1,Math.log2(s))),color:"var(--color-yellow)"},{key:"O(n²)",label:"O(n²) — quadratisch",example:"Bubble Sort, alle Paare vergleichen",fn:s=>s*s,color:"var(--color-orange)"},{key:"O(2^n)",label:"O(2ⁿ) — exponentiell",example:"Alle Teilmengen ausprobieren",fn:s=>2**s,color:"var(--color-red)"}],$n=[8,16,32,64,128,256,512,1024];function os(s){return Number.isFinite(s)?s>=1e15?s.toExponential(1).replace("e+"," · 10^"):Math.round(s).toLocaleString("de-CH"):"∞"}function Sr(s){const n=s/1e8;return Number.isFinite(n)?n<1e-6?"< 1 µs":n<.001?`${(n*1e6).toFixed(0)} µs`:n<1?`${(n*1e3).toFixed(1)} ms`:n<60?`${n.toFixed(1)} s`:n<3600?`${(n/60).toFixed(1)} min`:n<86400?`${(n/3600).toFixed(1)} h`:n<315e5?`${(n/86400).toFixed(1)} Tage`:`${os(n/315e5)} Jahre`:"unendlich"}function zr(){const[s,n]=D.useState(3),i=$n[s],r=kr.map(l=>({...l,operations:l.fn(i)})),t=Math.max(...r.map(l=>Math.log10(l.operations+1)));return e.jsxs("div",{className:ne.container,children:[e.jsxs("div",{className:ne.header,children:[e.jsxs("label",{className:ne.sliderLabel,htmlFor:"complexity-n",children:["Anzahl Elemente ",e.jsxs("strong",{children:["n = ",i.toLocaleString("de-CH")]})]}),e.jsx("input",{id:"complexity-n",className:ne.slider,type:"range",min:0,max:$n.length-1,value:s,onChange:l=>n(Number(l.target.value))})]}),e.jsx("div",{className:ne.rows,children:r.map(l=>e.jsxs("div",{className:ne.row,children:[e.jsxs("div",{className:ne.rowLabel,children:[e.jsx("span",{className:ne.rowName,children:l.label}),e.jsx("span",{className:ne.rowExample,children:l.example})]}),e.jsx("div",{className:ne.barTrack,children:e.jsx("div",{className:ne.bar,style:{width:`${Math.max(2,Math.log10(l.operations+1)/t*100)}%`,backgroundColor:l.color}})}),e.jsxs("div",{className:ne.rowValue,children:[e.jsx("span",{className:ne.ops,children:os(l.operations)}),e.jsx("span",{className:ne.time,children:Sr(l.operations)})]})]},l.key))}),e.jsxs("p",{className:ne.note,children:["Die Balken sind ",e.jsx("strong",{children:"logarithmisch"})," skaliert — sonst wäre bei grossem n nur noch der rote Balken sichtbar. Die Zeitangabe rechts nimmt an, dass ein Computer 100 Millionen Operationen pro Sekunde schafft."]})]})}function wr(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Laufzeitanalyse"}),e.jsxs("p",{children:["Wir haben jetzt mehrere Algorithmen gesehen, die dasselbe Problem lösen — zum Beispiel Bubble Sort und Quicksort. Aber welcher ist"," ",e.jsx("strong",{children:"besser"}),"? Um das zu beantworten, brauchen wir ein Werkzeug: die ",e.jsx("strong",{children:"Laufzeitanalyse"}),"."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können erklären, warum man Laufzeit nicht in Sekunden misst."}),e.jsx("li",{children:"Sie können in einfachem Code die Anzahl Operationen abschätzen."}),e.jsxs("li",{children:["Sie kennen die wichtigsten Klassen: ",e.jsx("code",{children:"O(1)"}),","," ",e.jsx("code",{children:"O(log n)"}),", ",e.jsx("code",{children:"O(n)"}),","," ",e.jsx("code",{children:"O(n · log n)"}),", ",e.jsx("code",{children:"O(n²)"}),"."]}),e.jsx("li",{children:"Sie können die Algorithmen dieser Woche einer Klasse zuordnen und begründen, warum."})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Warum messen wir nicht einfach die Zeit?"}),e.jsx("p",{children:"Man könnte einfach eine Stoppuhr laufen lassen. Das Problem: Das Ergebnis hängt von Dingen ab, die nichts mit dem Algorithmus zu tun haben."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Hardware:"})," Ein neuer Laptop ist schneller als ein alter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Programmiersprache:"})," C ist schneller als JavaScript."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zufall:"})," Andere Programme laufen gleichzeitig."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Datenmenge:"})," Mit 10 Elementen ist alles schnell."]})]}),e.jsxs("p",{children:["Deshalb zählen wir stattdessen die ",e.jsx("strong",{children:"Anzahl Schritte"})," ","in Abhängigkeit von der Datenmenge ",e.jsx("code",{children:"n"}),". Die eigentliche Frage lautet:"]}),e.jsx("blockquote",{children:"Wie stark wächst der Aufwand, wenn die Datenmenge wächst?"}),e.jsx("p",{children:"Das ist die entscheidende Frage. Ein Algorithmus, der bei 1000 Elementen 1 Sekunde braucht, kann bei 10'000 Elementen 10 Sekunden brauchen — oder 100 Sekunden. Das macht den Unterschied zwischen «funktioniert» und «unbrauchbar»."})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die O-Notation (Gross-O)"}),e.jsxs("p",{children:["Bubble Sort braucht genau ",e.jsx("code",{children:"n · (n − 1) / 2"})," Vergleiche. Ausmultipliziert: ",e.jsx("code",{children:"0.5 · n² − 0.5 · n"}),". Für die Laufzeitanalyse vereinfachen wir das zu ",e.jsx("code",{children:"O(n²)"}),". Dabei gelten zwei Regeln:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Konstante Faktoren weglassen:"})," ",e.jsx("code",{children:"0.5 · n²"})," → ",e.jsx("code",{children:"n²"}),". Ein doppelt so schneller Computer ändert die Klasse nicht."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nur der stärkste Term zählt:"})," ",e.jsx("code",{children:"n² + n + 100"})," → ",e.jsx("code",{children:"n²"}),". Bei n = 1000 ist"," ",e.jsx("code",{children:"n²"})," = 1'000'000 und ",e.jsx("code",{children:"n"})," nur 1000 — das"," ",e.jsx("code",{children:"n"})," fällt gar nicht mehr ins Gewicht."]})]}),e.jsxs("p",{children:[e.jsx("code",{children:"O(...)"})," beschreibt also das"," ",e.jsx("strong",{children:"Wachstumsverhalten"}),", nicht die genaue Anzahl Schritte. Es ist eine ",e.jsx("em",{children:"obere Schranke"}),": «höchstens so schnell wachsend wie»."]}),e.jsx("h3",{children:"Drei Fälle"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bester Fall:"})," die günstigste Eingabe (z. B. die gesuchte Zahl steht ganz vorne)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Durchschnitt:"})," typische, zufällige Eingabe — meist die interessanteste Angabe"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schlechtester Fall:"})," die ungünstigste Eingabe — die wichtigste Angabe, wenn man Garantien braucht"]})]})]})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wachstum vergleichen"}),e.jsx("p",{children:"Verschieben Sie den Regler und beobachten Sie, wie unterschiedlich die Klassen wachsen."}),e.jsx(zr,{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Die Schlüsselbeobachtung:"})," Bei n = 8 sind alle Klassen ähnlich schnell. Bei n = 1024 liegen Welten dazwischen —",e.jsx("code",{children:"O(log n)"})," braucht 10 Schritte, ",e.jsx("code",{children:"O(n²)"})," über eine Million, ",e.jsx("code",{children:"O(2ⁿ)"})," mehr Schritte als das Universum Atome hat."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wie erkenne ich die Klasse im Code?"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Was ich im Code sehe"}),e.jsx("th",{children:"Klasse"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:["Keine Schleife, nur ein paar Befehle: ",e.jsx("code",{children:"liste[0]"}),","," ",e.jsx("code",{children:"liste.length"}),", ",e.jsx("code",{children:"a + b"})]}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Der Suchbereich wird jedes Mal ",e.jsx("strong",{children:"halbiert"})]}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Eine"})," Schleife über alle Elemente (auch"," ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"reduce"}),")"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Halbieren ",e.jsx("em",{children:"und"})," jedes Mal alle Elemente anschauen (",e.jsx("code",{children:"sort()"}),")"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Zwei verschachtelte"})," Schleifen über alle Elemente"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Alle Kombinationen / Teilmengen ausprobieren"}),e.jsx("td",{children:e.jsx("code",{children:"O(2ⁿ)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achtung — häufige Stolperfalle:"})," Zwei Schleifen"," ",e.jsx("em",{children:"nacheinander"})," sind ",e.jsx("code",{children:"O(n) + O(n) = O(n)"}),". Nur"," ",e.jsx("em",{children:"verschachtelte"})," Schleifen werden ",e.jsx("code",{children:"O(n²)"}),"."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 1: Lineare und binäre Suche"}),e.jsx("h3",{children:"Lineare Suche — O(n)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Bester Fall ",e.jsx("code",{children:"O(1)"}),":"]})," ","Das gesuchte Element steht an Position 0."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Durchschnitt ",e.jsx("code",{children:"O(n)"}),":"]})," ","Im Mittel muss man die halbe Liste durchsuchen — ",e.jsx("code",{children:"n/2"}),", und der konstante Faktor fällt weg."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Schlechtester Fall ",e.jsx("code",{children:"O(n)"}),":"]})," ","Das Element steht am Schluss oder kommt gar nicht vor."]})]}),e.jsx("h3",{children:"Binäre Suche — O(log n)"}),e.jsxs("p",{children:["Jeder Schritt halbiert den Suchbereich. Die Frage lautet: Wie oft kann ich ",e.jsx("code",{children:"n"})," halbieren, bis 1 übrig bleibt? Antwort:"," ",e.jsx("code",{children:"log₂(n)"})," Mal."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"n"}),e.jsx("th",{children:"Lineare Suche (Vergleiche)"}),e.jsx("th",{children:"Binäre Suche (Vergleiche)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"16"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'024"}),e.jsx("td",{children:"1'024"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'048'576"}),e.jsx("td",{children:"1'048'576"}),e.jsx("td",{children:"20"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Aber Vorsicht — die versteckten Kosten:"})," Binäre Suche verlangt eine sortierte Liste. Das Sortieren kostet"," ",e.jsx("code",{children:"O(n · log n)"}),". Für ",e.jsx("em",{children:"eine einzige"})," Suche lohnt sich das nicht. Wer aber tausendmal in denselben Daten sucht, sortiert einmal und profitiert danach immer."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 2: Die übrigen einfachen Algorithmen"}),e.jsx("h3",{children:"Maximum finden — O(n)"}),e.jsxs("p",{children:["Eine Schleife, jedes Element genau einmal. Man kann es nicht besser machen: Wenn man auch nur ein Element überspringt, könnte genau das das Maximum gewesen sein. ",e.jsx("code",{children:"O(n)"})," ist hier"," ",e.jsx("strong",{children:"optimal"}),"."]}),e.jsx("h3",{children:"Summe, Durchschnitt, Zählen — O(n)"}),e.jsxs("p",{children:["Gleiches Argument. Auch ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"})," sind ",e.jsx("code",{children:"O(n)"})," — sie sehen nur kürzer aus, machen aber genau gleich viel Arbeit."]}),e.jsx("h3",{children:"Zwei Zeiger (umkehren, Palindrom) — O(n)"}),e.jsxs("p",{children:["Die Schleife läuft nur ",e.jsx("code",{children:"n/2"})," Mal. Der konstante Faktor"," ",e.jsx("code",{children:"1/2"})," fällt in der O-Notation weg, es bleibt"," ",e.jsx("code",{children:"O(n)"}),". Es ist zwar doppelt so schnell wie eine volle Schleife, aber in derselben Klasse."]}),e.jsx("h3",{children:"Häufigkeiten zählen — O(n)"}),e.jsxs("p",{children:["Eine Schleife über alle Elemente. Der Zugriff auf eine Objekt-Eigenschaft wie ",e.jsx("code",{children:'zaehler["rot"]'})," ist"," ",e.jsx("code",{children:"O(1)"})," — er dauert gleich lang, egal wie viele Einträge das Objekt schon hat. Das ist der Grund, warum dieses Muster so beliebt ist."]}),e.jsx("h3",{children:"Anagramme erkennen — zwei Wege im Vergleich"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Weg"}),e.jsx("th",{children:"Was passiert"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Sortieren und vergleichen"}),e.jsx("td",{children:"2× sortieren + 1× vergleichen"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Buchstaben zählen"}),e.jsx("td",{children:"2× eine Schleife über die Wörter"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]})]})]}),e.jsx("p",{children:"Bei Wörtern mit 10 Buchstaben ist der Unterschied völlig egal — dann nimmt man die kürzere, besser lesbare Variante. Bei einer Million Zeichen zählt jede Klasse."}),e.jsx("blockquote",{children:"Lesbarkeit schlägt Geschwindigkeit — bis die Geschwindigkeit zum Problem wird."})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Operationen zählen — selbst ausprobieren"}),e.jsxs("p",{children:["Bisher waren alle einfachen Algorithmen ",e.jsx("code",{children:"O(n)"})," oder besser. Jetzt kommen wir zu den Sortieralgorithmen — und dort wird es spannend. Wir bauen dazu einen Zähler in den Algorithmus ein und schauen, wie die Zahlen wachsen, wenn wir ",e.jsx("code",{children:"n"})," verdoppeln."]}),e.jsx(y,{filename:"operationen-zaehlen.js",children:`// Wir zählen die Vergleiche bei Bubble Sort
function bubbleSortZaehlen(eingabe) {
  const liste = [...eingabe];
  let vergleiche = 0;

  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      vergleiche++;
      if (liste[j] > liste[j + 1]) {
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
      }
    }
  }
  return vergleiche;
}

// Zufällige Liste der Länge n erzeugen
function zufallsListe(n) {
  const liste = [];
  for (let i = 0; i < n; i++) {
    liste.push(Math.floor(Math.random() * 1000));
  }
  return liste;
}

console.log("n\\tVergleiche\\tFaktor");
let vorher = 0;
for (const n of [10, 20, 40, 80, 160]) {
  const v = bubbleSortZaehlen(zufallsListe(n));
  const faktor = vorher === 0 ? "-" : (v / vorher).toFixed(1);
  console.log(n + "\\t" + v + "\\t\\t" + faktor);
  vorher = v;
}

// Beobachtung: n verdoppeln => Vergleiche ca. VERVIERFACHEN
// Das ist typisch für O(n²)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Das ist der Kern der Laufzeitanalyse:"})," Bei"," ",e.jsx("code",{children:"O(n²)"})," führt doppelt so viel Input zu viermal so viel Arbeit. Bei ",e.jsx("code",{children:"O(n)"})," nur zu doppelt so viel. Bei"," ",e.jsx("code",{children:"O(log n)"})," praktisch zu gar nichts mehr."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 3: Bubble Sort"}),e.jsxs("p",{children:["Zwei verschachtelte Schleifen. Die äussere läuft ",e.jsx("code",{children:"n − 1"})," ","Mal, die innere jedes Mal etwas kürzer:"]}),e.jsx("p",{children:e.jsx("code",{children:"(n−1) + (n−2) + … + 2 + 1 = n · (n−1) / 2"})}),e.jsx("p",{children:"Bei 10 Elementen sind das 45 Vergleiche, bei 100 schon 4950, bei 1000 rund 500'000."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Wann?"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:"Liste bereits sortiert (nur mit der Abbruch-Optimierung)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"zufällige Liste"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:"Liste absteigend sortiert"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Speicher:"})," ",e.jsx("code",{children:"O(1)"})," — es wird nur getauscht, keine zweite Liste angelegt."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 4: Quicksort"}),e.jsxs("p",{children:["Beim Partitionieren wird jedes Element des Bereichs einmal angeschaut — das ist ",e.jsx("code",{children:"O(n)"})," pro «Ebene». Entscheidend ist, ",e.jsx("strong",{children:"wie viele Ebenen"})," es gibt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Gutes Pivot"})," (etwa in der Mitte): Der Bereich halbiert sich jedes Mal. Nach ",e.jsx("code",{children:"log₂(n)"})," Ebenen ist alles fertig. Gesamt: ",e.jsx("code",{children:"n · log n"}),". Bei n = 1024 sind das 10 Ebenen à 1024 Vergleiche ≈ 10'000."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schlechtes Pivot"})," (immer das kleinste oder grösste Element): Der Bereich schrumpft nur um 1. Dann gibt es"," ",e.jsx("code",{children:"n"})," Ebenen → ",e.jsx("code",{children:"n²"}),". Genau das passiert mit unserer Version bei einer bereits sortierten Liste!"]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Wann?"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:"Pivot teilt immer genau in der Mitte"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"zufällige Liste"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:"bereits sortierte Liste (bei Pivot = letztes Element)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deshalb:"})," In der Praxis wählt man ein"," ",e.jsx("em",{children:"zufälliges"})," Pivot. Dann ist der schlechteste Fall so unwahrscheinlich, dass er praktisch nie auftritt."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bubble Sort gegen Quicksort — messen"}),e.jsxs("p",{children:["Jetzt messen wir tatsächlich die Zeit. Achtung: Erhöhen Sie"," ",e.jsx("code",{children:"n"})," nur vorsichtig, sonst blockiert Bubble Sort den Browser."]}),e.jsx(y,{filename:"messen.js",children:`function zufallsListe(n) {
  const liste = [];
  for (let i = 0; i < n; i++) liste.push(Math.random());
  return liste;
}

function bubbleSort(eingabe) {
  const liste = [...eingabe];
  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        [liste[j], liste[j + 1]] = [liste[j + 1], liste[j]];
      }
    }
  }
  return liste;
}

function quickSort(liste) {
  if (liste.length <= 1) return liste;
  const [pivot, ...rest] = liste;
  return [
    ...quickSort(rest.filter((x) => x < pivot)),
    pivot,
    ...quickSort(rest.filter((x) => x >= pivot)),
  ];
}

function messen(name, fn, daten) {
  const start = performance.now();
  fn(daten);
  const dauer = performance.now() - start;
  console.log(name + ": " + dauer.toFixed(1) + " ms");
}

for (const n of [500, 1000, 2000, 4000]) {
  const daten = zufallsListe(n);
  console.log("--- n = " + n + " ---");
  messen("Bubble Sort", bubbleSort, daten);
  messen("Quicksort  ", quickSort, daten);
  messen("sort()     ", (d) => [...d].sort((a, b) => a - b), daten);
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beobachten Sie:"})," Bei jeder Verdopplung von"," ",e.jsx("code",{children:"n"})," wird Bubble Sort etwa viermal langsamer, Quicksort nur gut doppelt so langsam. Bei n = 4000 ist der Unterschied schon gewaltig."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Gesamtübersicht"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Algorithmus"}),e.jsx("th",{children:"Bester Fall"}),e.jsx("th",{children:"Durchschnitt"}),e.jsx("th",{children:"Schlechtester Fall"}),e.jsx("th",{children:"Speicher"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lineare Suche"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binäre Suche"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Maximum finden"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Summe / Durchschnitt"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Umkehren / Palindrom"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Häufigkeiten zählen"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Anagramm (zählen)"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Anagramm (sortieren)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bubble Sort"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Quicksort"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]})]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Merksätze"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Laufzeit misst man in ",e.jsx("strong",{children:"Schritten"}),", nicht in Sekunden."]}),e.jsxs("li",{children:["Die O-Notation beschreibt das ",e.jsx("strong",{children:"Wachstum"}),": konstante Faktoren und schwächere Terme fallen weg."]}),e.jsxs("li",{children:["Verschachtelte Schleifen sind das Warnzeichen für"," ",e.jsx("code",{children:"O(n²)"}),"."]}),e.jsxs("li",{children:["Halbieren ist das Erkennungsmerkmal von ",e.jsx("code",{children:"O(log n)"})," — und ",e.jsx("code",{children:"log n"})," ist unglaublich klein."]}),e.jsx("li",{children:"Bei kleinen Datenmengen ist alles schnell genug. Die Klasse zählt erst, wenn die Daten wachsen."}),e.jsx("li",{children:"Manchmal tauscht man Speicher gegen Zeit (z. B. eine Zähler-Tabelle statt doppelter Schleifen)."})]})]})})]})}const Ad=Object.freeze(Object.defineProperty({__proto__:null,default:wr},Symbol.toStringTag,{value:"Module"}));function vr(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben: Algorithmen"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie ",e.jsx("strong",{children:"5 Aufgaben"})," zu den Algorithmen dieser Woche. Sie beginnen mit zwei klassischen Rechen-Algorithmen und arbeiten sich zu den Sortieralgorithmen vor. Die Aufgaben sind deutlich umfangreicher als in den letzten Wochen — planen Sie genügend Zeit ein und arbeiten Sie in kleinen Schritten."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen. Sie schreiben alles selbst. Sie dürfen die Algorithmen aus der Theorie als Vorlage verwenden, müssen sie aber verstehen und anpassen können."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zu jeder Aufgabe gehört eine kurze Laufzeitüberlegung."})," ","Diese schreiben Sie als Kommentar in die Datei. Wir besprechen sie gemeinsam im Unterricht."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Beginnen Sie jede Datei mit einem Kommentarblock nach diesem Muster:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Modulo selbst berechnen
// Idee: Solange der Divisor passt, wird er abgezogen
// Laufzeit: O(a / b), weil pro Durchgang genau einmal subtrahiert wird
// Schwierig war: ...
// Gelernt habe ich: ...`})})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Modulo selbst berechnen"}),e.jsxs("p",{children:["Der Modulo-Operator ",e.jsx("code",{children:"%"})," gibt den"," ",e.jsx("strong",{children:"Rest einer Division"})," zurück:"," ",e.jsx("code",{children:"17 % 5 === 2"}),", weil 5 dreimal in 17 passt und 2 übrig bleibt. In dieser Aufgabe bauen Sie diesen Operator selbst nach."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Regel:"})," Sie dürfen ",e.jsx("code",{children:"%"})," nicht verwenden. Auch ",e.jsx("code",{children:"Math.floor"}),", ",e.jsx("code",{children:"Math.trunc"})," und ähnliche Abkürzungen sind nicht erlaubt. Nur ",e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"}),","," ","Vergleiche und Schleifen."]}),e.jsx("p",{children:"Schreiben Sie:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"modulo(a, b)"})," — gibt den Rest von ",e.jsx("code",{children:"a / b"})," ","zurück. Idee: Ziehen Sie ",e.jsx("code",{children:"b"})," so lange von"," ",e.jsx("code",{children:"a"})," ab, wie ",e.jsx("code",{children:"a"})," noch mindestens so gross ist wie ",e.jsx("code",{children:"b"}),". Was übrig bleibt, ist der Rest."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ganzzahlDivision(a, b)"})," — gibt zurück, wie oft"," ",e.jsx("code",{children:"b"})," ganz in ",e.jsx("code",{children:"a"})," passt. Das ist genau die Anzahl Subtraktionen aus Aufgabenteil 1."]}),e.jsxs("li",{children:[e.jsx("code",{children:"teile(a, b)"})," — gibt beides zusammen als Objekt zurück:"," ",e.jsx("code",{children:"{ quotient, rest }"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"istTeilbar(a, b)"})," — ",e.jsx("code",{children:"true"}),", wenn der Rest 0 ist. Testen Sie damit, welche Zahlen von 1 bis 50 durch 7 teilbar sind."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"modulo(17, 5)"})," → 2,"," ",e.jsx("code",{children:"modulo(20, 4)"})," → 0, ",e.jsx("code",{children:"modulo(3, 7)"})," → 3,"," ",e.jsx("code",{children:"modulo(0, 5)"})," → 0. Vergleichen Sie Ihr Resultat jeweils mit dem eingebauten ",e.jsx("code",{children:"%"}),", um zu prüfen, ob Sie richtig liegen."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sonderfälle bedenken:"})," Was passiert bei"," ",e.jsx("code",{children:"b === 0"}),"? Und was bei negativen Zahlen? Behandeln Sie mindestens den Fall ",e.jsx("code",{children:"b === 0"})," sauber (z. B. mit einer Fehlermeldung)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Wie viele Durchgänge braucht Ihre Schleife bei ",e.jsx("code",{children:"modulo(1000, 3)"}),"? Und bei ",e.jsx("code",{children:"modulo(1000000, 3)"}),"? Die Laufzeit hängt hier nicht von der Länge einer Liste ab — wovon dann? Warum ist das für sehr grosse Zahlen ein Problem?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Grösster gemeinsamer Teiler (GGT)"}),e.jsxs("p",{children:["Der ",e.jsx("strong",{children:"GGT"})," zweier Zahlen ist die grösste Zahl, die beide ohne Rest teilt. Zum Beispiel ist"," ",e.jsx("code",{children:"ggt(48, 18) === 6"}),". Man braucht ihn unter anderem zum Kürzen von Brüchen. Der ",e.jsx("em",{children:"euklidische Algorithmus"})," dafür ist über 2000 Jahre alt und einer der ältesten Algorithmen überhaupt."]}),e.jsx("p",{children:"Schreiben Sie drei Varianten und vergleichen Sie sie:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"ggtBrutal(a, b)"})," — probiert alle Zahlen von 1 bis zur kleineren der beiden durch und merkt sich die grösste, die beide teilt. Verwenden Sie dafür Ihr ",e.jsx("code",{children:"istTeilbar"})," aus Aufgabe 1."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtSubtraktion(a, b)"})," — der ursprüngliche Euklid: Solange die beiden Zahlen verschieden sind, ziehe die kleinere von der grösseren ab. Wenn beide gleich sind, ist das der GGT."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtModulo(a, b)"})," — die moderne Version: Solange"," ",e.jsx("code",{children:"b"})," nicht 0 ist, ersetze das Paar ",e.jsx("code",{children:"(a, b)"})," ","durch ",e.jsx("code",{children:"(b, a mod b)"}),". Sobald ",e.jsx("code",{children:"b === 0"})," ist, ist ",e.jsx("code",{children:"a"})," der GGT. Verwenden Sie dafür Ihre eigene"," ",e.jsx("code",{children:"modulo"}),"-Funktion aus Aufgabe 1."]})]}),e.jsxs("p",{children:["Alle drei Funktionen sollen zusätzlich die Anzahl"," ",e.jsx("strong",{children:"Durchgänge"})," mitzählen und ausgeben."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"(48, 18)"})," → 6,"," ",e.jsx("code",{children:"(1071, 462)"})," → 21, ",e.jsx("code",{children:"(17, 5)"})," → 1 (teilerfremd), ",e.jsx("code",{children:"(100, 100)"})," → 100 und"," ",e.jsx("code",{children:"(1000000, 2)"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Erweiterungen:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"kgv(a, b)"})," — das kleinste gemeinsame Vielfache. Tipp:"," ",e.jsx("code",{children:"a · b / ggt(a, b)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"kuerze(zaehler, nenner)"})," — kürzt einen Bruch vollständig und gibt ",e.jsx("code",{children:"{ zaehler, nenner }"})," zurück. Testen Sie mit ",e.jsx("code",{children:"48/18"})," → ",e.jsx("code",{children:"8/3"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtListe(zahlen)"})," — der GGT einer ganzen Liste von Zahlen (mehrfach anwenden)."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Vergleichen Sie die Anzahl Durchgänge der drei Varianten für"," ",e.jsx("code",{children:"(1071, 462)"})," und für ",e.jsx("code",{children:"(1000000, 2)"}),". Welche Variante ist bei welcher Eingabe besonders schlecht und warum? Ordnen Sie ",e.jsx("code",{children:"ggtBrutal"})," einer Laufzeitklasse zu."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Selection Sort (Sortieren durch Auswählen)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Idee:"})," Suche in der unsortierten Restliste das"," ",e.jsx("em",{children:"kleinste"})," Element und tausche es an den Anfang dieser Restliste. Wiederhole das, bis alles sortiert ist."]}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("code",{children:"selectionSort(liste)"}),", die eine ",e.jsx("strong",{children:"neue, sortierte Liste"})," zurückgibt. Das Original darf nicht verändert werden (Tipp: ",e.jsx("code",{children:"[...liste]"}),")."]}),e.jsx("p",{children:"Ihre Funktion soll ausserdem:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["die Anzahl ",e.jsx("strong",{children:"Vergleiche"})," und"," ",e.jsx("strong",{children:"Tausche"})," mitzählen und am Schluss mit"," ",e.jsx("code",{children:"console.log"})," ausgeben"]}),e.jsx("li",{children:"nach jedem Durchlauf den Zwischenstand der Liste ausgeben, damit man den Ablauf nachvollziehen kann"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"[5, 3, 8, 1, 9, 2]"}),","," ",e.jsx("code",{children:"[1, 2, 3, 4, 5]"})," (bereits sortiert),"," ",e.jsx("code",{children:"[5, 4, 3, 2, 1]"})," (umgekehrt) und einer leeren Liste"," ",e.jsx("code",{children:"[]"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Erweiterung:"})," Bauen Sie einen zweiten Parameter"," ",e.jsx("code",{children:"absteigend"})," ein (Standardwert ",e.jsx("code",{children:"false"}),"), mit dem man die Sortierrichtung umdrehen kann."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Wie viele Vergleiche braucht Selection Sort bei einer bereits sortierten Liste? Vergleichen Sie das mit dem optimierten Bubble Sort aus der Theorie. Warum verhalten sich die beiden hier unterschiedlich?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Insertion Sort (Sortieren durch Einfügen)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Idee:"})," Wie beim Sortieren von Jasskarten auf der Hand. Die linke Seite der Liste ist immer schon sortiert. Man nimmt die nächste Karte und schiebt sie so weit nach links, bis sie am richtigen Ort liegt."]}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("code",{children:"insertionSort(liste)"}),", die eine neue sortierte Liste zurückgibt."]}),e.jsx("p",{children:"Anforderungen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Verwenden Sie eine ",e.jsx("code",{children:"while"}),"-Schleife für das Nach-links-Schieben."]}),e.jsxs("li",{children:["Zählen Sie die ",e.jsx("strong",{children:"Verschiebungen"})," und geben Sie sie aus."]}),e.jsxs("li",{children:["Schreiben Sie eine zweite Funktion"," ",e.jsx("code",{children:"insertionSortObjekte(liste, schluessel)"}),", die eine Liste von ",e.jsx("strong",{children:"Objekten"})," nach einer beliebigen Eigenschaft sortiert. Beispiel:",e.jsx("br",{}),e.jsx("code",{children:'insertionSortObjekte(schueler, "note")'})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testdaten für die Objekt-Variante:"})," mindestens fünf Schüler-Objekte mit ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"note"})," und"," ",e.jsx("code",{children:"alter"}),". Sortieren Sie einmal nach ",e.jsx("code",{children:"note"})," und einmal nach ",e.jsx("code",{children:"alter"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Bei welcher Eingabe ist Insertion Sort ",e.jsx("code",{children:"O(n)"})," und bei welcher"," ",e.jsx("code",{children:"O(n²)"}),"? Warum gilt Insertion Sort für"," ",e.jsx("em",{children:"fast sortierte"})," Listen als sehr gut?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Notenstatistik — alles zusammen"}),e.jsxs("p",{children:["Eine Anwendung, die mehrere Algorithmen dieser Woche kombiniert. Gegeben ist eine Liste von Schüler-Objekten mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"klasse"})," und ",e.jsx("code",{children:"noten"})," (Array mit mindestens drei Zahlen). Erstellen Sie mindestens ",e.jsx("strong",{children:"8"})," solche Objekte aus mindestens 2 Klassen."]}),e.jsx("p",{children:"Schreiben Sie folgende Funktionen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"durchschnitt(noten)"})," — Mittelwert einer Notenliste, auf 2 Stellen gerundet. Leere Liste ⇒ ",e.jsx("code",{children:"0"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"besteSchuelerin(schueler)"})," — das Objekt mit dem höchsten Durchschnitt (Muster: Maximum finden, ",e.jsx("em",{children:"nicht"})," ","sortieren)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rangliste(schueler)"})," — eine ",e.jsx("strong",{children:"neue"})," ","Liste, absteigend nach Durchschnitt sortiert. Verwenden Sie einen"," ",e.jsx("strong",{children:"selbst geschriebenen"})," Sortieralgorithmus aus Aufgabe 3 oder 4, nicht ",e.jsx("code",{children:"sort()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"notenverteilung(schueler)"})," — zählt mit einem Objekt, wie oft jede gerundete Note (1–6) insgesamt vorkommt. Ausgabe zusätzlich als kleines Textdiagramm, z. B.",e.jsx("br",{}),e.jsx("code",{children:"5: ████ (4)"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"klassenstatistik(schueler)"})," — gruppiert nach"," ",e.jsx("code",{children:"klasse"})," und gibt pro Klasse Anzahl, Durchschnitt und Anzahl ungenügender Noten (< 4) zurück."]})]}),e.jsxs("p",{children:["Geben Sie zum Schluss einen sauber formatierten Bericht mit"," ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Bestimmen Sie für jede der fünf Funktionen die Laufzeit in Abhängigkeit von der Anzahl Schüler ",e.jsx("code",{children:"n"}),". Welche Funktion ist die teuerste und warum? Wie ändert sich die Gesamtlaufzeit, wenn Sie in"," ",e.jsx("code",{children:"rangliste"})," Quicksort statt Bubble Sort verwenden würden?"]})]})]})]})}const yd=Object.freeze(Object.defineProperty({__proto__:null,default:vr},Symbol.toStringTag,{value:"Module"}));function Ar(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Repetition"}),e.jsx("h2",{children:"Von den Algorithmen zum funktionalen Stil"}),e.jsx("p",{children:"Schleifenmuster · Funktionen als Werte"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Woche 3 in drei Zeilen"}),e.jsx("p",{children:"Fast alle Algorithmen der letzten Woche folgten demselben Bauplan: eine Schleife über eine Liste, plus eine Variable, die sich merkt, was bisher passiert ist."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Suchen"})," — durchgehen, bis etwas passt"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extremwert"})," — die bisher beste Zahl merken"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Akkumulieren"})," — Summe, Anzahl, Durchschnitt"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Häufigkeiten"})," — mit einem Objekt mitzählen"]})]}),e.jsx("p",{children:"Wir haben also viermal fast dasselbe Gerüst geschrieben. Genau da setzt diese Woche an."})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Muster als Code"}),e.jsx(y,{filename:"repetition-muster.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

// 1. Suchen
let index = -1;
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] === 16) { index = i; break; }
}
console.log("Index:", index);

// 2. Maximum
let max = zahlen[0];
for (let i = 1; i < zahlen.length; i++) {
  if (zahlen[i] > max) max = zahlen[i];
}
console.log("Maximum:", max);

// 3. Summe
let summe = 0;
for (const z of zahlen) {
  summe = summe + z;
}
console.log("Summe:", summe);

// Fällt auf: dreimal das gleiche Gerüst,
// nur die Zeile in der Mitte ist verschieden.`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen sind Werte"}),e.jsxs("p",{children:["Das zweite Puzzleteil kennen Sie schon: In JavaScript ist eine Funktion ein ganz normaler Wert. Man kann sie in einer Variablen speichern und an eine andere Funktion ",e.jsx("em",{children:"übergeben"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"function quadrat(x) { return x * x; }"})}),e.jsxs("li",{children:["kurz als Arrow-Funktion:"," ",e.jsx("code",{children:"const quadrat = (x) => x * x"})]}),e.jsxs("li",{children:["Eine übergebene Funktion heisst ",e.jsx("strong",{children:"Callback"}),"."]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callbacks — kurz getestet"}),e.jsx(y,{filename:"callbacks.js",children:`// Funktion in einer Variablen
const quadrat = (x) => x * x;
console.log(quadrat(5)); // 25

// Funktion als Argument übergeben
function wendeAn(liste, funktion) {
  const resultat = [];
  for (const wert of liste) {
    resultat.push(funktion(wert));
  }
  return resultat;
}

console.log(wendeAn([1, 2, 3], quadrat));       // [1, 4, 9]
console.log(wendeAn([1, 2, 3], (x) => x + 10)); // [11, 12, 13]

// Achtung: quadrat  = die Funktion selbst
//          quadrat(5) = das Resultat des Aufrufs`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Brücke zu dieser Woche"}),e.jsx("p",{children:"Das Gerüst der Schleife ist immer gleich — nur der Kern ändert sich. Also: Gerüst einmal bauen, den Kern als Callback übergeben."}),e.jsxs("p",{children:["Genau das sind ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"}),". Damit schrumpfen die Algorithmen von Woche 3 auf je eine Zeile."]})]})})]})}const Nd=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"}));function yr(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Funktionales Programmieren"}),e.jsx("h2",{children:"map · filter · reduce"}),e.jsx("p",{children:"Beschreiben, was herauskommen soll — nicht, wie man dahin kommt"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee in einem Satz"}),e.jsxs("p",{children:["Bisher haben wir ",e.jsx("strong",{children:"imperativ"})," programmiert: Wir sagen dem Computer Schritt für Schritt, ",e.jsx("em",{children:"wie"})," er etwas tun soll. Funktional heisst: Wir beschreiben, ",e.jsx("em",{children:"was"})," herauskommen soll."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Imperativ:"})," «Leere Liste anlegen, von 0 bis Ende laufen, jedes Element verdoppeln, anhängen.»"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktional:"})," «Die Liste, in der jedes Element verdoppelt ist.»"]})]}),e.jsxs("p",{children:["Drei Werkzeuge decken den grössten Teil ab:"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"map"})," verändert"]}),","," ",e.jsxs("strong",{children:[e.jsx("code",{children:"filter"})," wählt aus"]}),","," ",e.jsxs("strong",{children:[e.jsx("code",{children:"reduce"})," fasst zusammen"]}),"."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — jedes Element umwandeln"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"})," geht durch die Liste, wendet auf jedes Element den Callback an und gibt eine ",e.jsx("strong",{children:"neue Liste"})," zurück. Die neue Liste ist immer ",e.jsx("strong",{children:"gleich lang"})," wie die alte."]}),e.jsx("p",{children:"Merkbild: Ein Fliessband, auf dem jedes Teil dieselbe Bearbeitung bekommt."})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — Code"}),e.jsx(y,{filename:"map.js",children:`const zahlen = [1, 2, 3, 4];

// vorher (imperativ)
const alt = [];
for (const z of zahlen) {
  alt.push(z * 2);
}

// nachher (funktional)
const neu = zahlen.map((z) => z * 2);

console.log(alt); // [2, 4, 6, 8]
console.log(neu); // [2, 4, 6, 8]

// Das Original bleibt unverändert!
console.log(zahlen); // [1, 2, 3, 4]

// Auch mit Objekten
const personen = [
  { name: "Anna", alter: 17 },
  { name: "Ben", alter: 16 },
];

const namen = personen.map((p) => p.name);
console.log(namen); // ["Anna", "Ben"]

// Der Callback bekommt optional auch den Index
console.log(namen.map((n, i) => (i + 1) + ". " + n));`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Elemente auswählen"}),e.jsxs("p",{children:[e.jsx("code",{children:"filter"})," behält nur die Elemente, für die der Callback"," ",e.jsx("code",{children:"true"})," zurückgibt. Die neue Liste ist"," ",e.jsx("strong",{children:"gleich lang oder kürzer"}),", die Elemente selbst bleiben unverändert."]}),e.jsx("p",{children:"Merkbild: Ein Sieb. Der Callback beantwortet für jedes Element die Frage «darfst du bleiben?»."})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Code"}),e.jsx(y,{filename:"filter.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

const gerade = zahlen.filter((z) => z % 2 === 0);
console.log(gerade); // [4, 8, 16, 42]

const grosse = zahlen.filter((z) => z > 15);
console.log(grosse); // [16, 23, 42]

const schueler = [
  { name: "Anna", note: 5.5 },
  { name: "Ben", note: 3.5 },
  { name: "Clara", note: 4.0 },
];

const bestanden = schueler.filter((s) => s.note >= 4);
console.log(bestanden.length + " von " + schueler.length);

// Typischer Fehler: return vergessen
// const falsch = zahlen.filter((z) => { z > 15; }); // [] !!
// Mit geschweiften Klammern braucht es ein return.`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — alles zu einem Wert zusammenfassen"}),e.jsxs("p",{children:[e.jsx("code",{children:"reduce"})," ist das mächtigste der drei. Es hat einen"," ",e.jsx("strong",{children:"Akkumulator"})," — eine Variable, die von Element zu Element weitergereicht wird."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"liste.reduce((akku, element) => ..., startwert)"})}),e.jsxs("li",{children:["Was der Callback zurückgibt, ist der ",e.jsx("code",{children:"akku"})," im nächsten Durchgang."]}),e.jsx("li",{children:"Der Akkumulator kann alles sein: Zahl, String, Array oder Objekt."})]}),e.jsx("p",{children:"Merkbild: Ein Schneeball, der die Liste hinunterrollt und alles aufsammelt."})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — Code"}),e.jsx(y,{filename:"reduce.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

// Summe (Startwert 0)
const summe = zahlen.reduce((akku, z) => akku + z, 0);
console.log("Summe:", summe); // 108

// Schritt für Schritt sichtbar machen
zahlen.reduce((akku, z) => {
  console.log(akku, "+", z, "=", akku + z);
  return akku + z;
}, 0);

// Maximum (Startwert = erstes Element)
const max = zahlen.reduce((akku, z) => (z > akku ? z : akku), zahlen[0]);
console.log("Maximum:", max); // 42

// Zählen mit einem Objekt als Akkumulator
const woerter = ["a", "b", "a", "c", "a"];
const anzahl = woerter.reduce((akku, w) => {
  akku[w] = (akku[w] || 0) + 1;
  return akku;
}, {});
console.log(anzahl); // { a: 3, b: 1, c: 1 }`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die kleinen Geschwister"}),e.jsx("p",{children:"Für die Suchmuster aus Woche 3 gibt es fertige Methoden. Jede ersetzt eine ganze Schleife:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Ersetzt Muster"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"find"})}),e.jsx("td",{children:"erstes passendes Element"}),e.jsx("td",{children:"lineare Suche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findIndex"})}),e.jsx("td",{children:"Index davon (oder −1)"}),e.jsx("td",{children:"lineare Suche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"some"})}),e.jsxs("td",{children:[e.jsx("code",{children:"true"}),", wenn mindestens eines passt"]}),e.jsx("td",{children:"«gibt es ein …?»"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"every"})}),e.jsxs("td",{children:[e.jsx("code",{children:"true"}),", wenn alle passen"]}),e.jsx("td",{children:"«sind alle …?»"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"includes"})}),e.jsxs("td",{children:[e.jsx("code",{children:"true"}),", wenn Wert vorkommt"]}),e.jsx("td",{children:"einfache Suche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toSorted"})}),e.jsx("td",{children:"neue, sortierte Liste"}),e.jsx("td",{children:"Bubble Sort & Co."})]})]})]}),e.jsx(y,{filename:"geschwister.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

console.log(zahlen.find((z) => z > 10));      // 15
console.log(zahlen.findIndex((z) => z > 10)); // 2
console.log(zahlen.some((z) => z > 40));      // true
console.log(zahlen.every((z) => z > 3));      // true
console.log(zahlen.includes(15));             // true

// toSorted braucht eine Vergleichsfunktion für Zahlen
console.log(zahlen.toSorted((a, b) => a - b)); // aufsteigend
console.log(zahlen.toSorted((a, b) => b - a)); // absteigend

// a - b  negativ -> a kommt zuerst
//        positiv -> b kommt zuerst

// toSorted gibt eine NEUE Liste zurück,
// das Original bleibt unverändert:
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Verketten — die Pipeline"}),e.jsxs("p",{children:["Weil ",e.jsx("code",{children:"map"})," und ",e.jsx("code",{children:"filter"})," wieder eine Liste zurückgeben, kann man sie direkt aneinanderhängen. Lesen Sie eine Kette immer von oben nach unten wie ein Rezept."]}),e.jsx(y,{filename:"pipeline.js",children:`const schueler = [
  { name: "Anna", note: 5.5, klasse: "1a" },
  { name: "Ben", note: 3.5, klasse: "1a" },
  { name: "Clara", note: 4.75, klasse: "1b" },
  { name: "David", note: 6, klasse: "1b" },
];

// Namen aller Bestandenen, alphabetisch
const namen = schueler
  .filter((s) => s.note >= 4)     // auswählen
  .map((s) => s.name)             // umwandeln
  .toSorted();                    // sortieren

console.log(namen); // ["Anna", "Clara", "David"]

// Durchschnitt der Klasse 1b
const noten1b = schueler
  .filter((s) => s.klasse === "1b")
  .map((s) => s.note);

const schnitt =
  noten1b.reduce((a, n) => a + n, 0) / noten1b.length;

console.log("Schnitt 1b:", schnitt);

// Faustregel: zuerst filter (weniger Daten),
// dann map, zuletzt reduce.`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigene Funktionen im funktionalen Stil"}),e.jsxs("p",{children:["Bis jetzt haben wir die Callbacks immer direkt hineingeschrieben. Das ist bei kurzen Ausdrücken praktisch — aber sobald eine Regel mehrfach vorkommt oder komplizierter wird, gibt man ihr besser einen"," ",e.jsx("strong",{children:"Namen"}),"."]}),e.jsx("p",{children:"Zwei Bausteine, die man immer wieder selbst schreibt:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prädikate"})," — Funktionen, die eine Frage mit"," ",e.jsx("code",{children:"true"}),"/",e.jsx("code",{children:"false"})," beantworten. Sie kommen in"," ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"some"})," und"," ",e.jsx("code",{children:"every"})," zum Einsatz. Namenskonvention:"," ",e.jsx("code",{children:"istBestanden"}),", ",e.jsx("code",{children:"hatLager"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transformationen"})," — Funktionen, die einen Wert in einen anderen umwandeln. Sie kommen in ",e.jsx("code",{children:"map"})," zum Einsatz. Namenskonvention: ",e.jsx("code",{children:"zuAnzeigename"}),","," ",e.jsx("code",{children:"mitMwst"}),"."]})]}),e.jsxs("p",{children:["Wichtig: Eine solche Funktion soll ",e.jsx("strong",{children:"rein"})," sein — sie arbeitet nur mit ihren Parametern, verändert nichts von aussen und gibt immer dasselbe Resultat für dieselbe Eingabe. Dadurch kann man sie isoliert testen und überall wiederverwenden."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 1 — Benannte Bausteine"}),e.jsx("p",{children:"Dieselbe Auswertung zweimal: einmal mit anonymen Callbacks, einmal mit benannten Funktionen. Der zweite Block liest sich fast wie ein deutscher Satz."}),e.jsx(y,{filename:"eigene-funktionen.js",children:`const produkte = [
  { name: "Maus", preis: 25, lager: 12 },
  { name: "Tastatur", preis: 89, lager: 0 },
  { name: "Monitor", preis: 249, lager: 3 },
  { name: "Kabel", preis: 9.9, lager: 40 },
];

// --- Variante A: alles inline ---
console.log(
  produkte
    .filter((p) => p.lager > 0)
    .map((p) => p.name + ": " + (p.preis * 1.081).toFixed(2) + " CHF")
);

// --- Variante B: eigene Funktionen ---

// Prädikat: beantwortet eine Frage
const istVerfuegbar = (produkt) => produkt.lager > 0;

// Transformation: rechnet einen Wert um
const mitMwst = (preis) => Math.round(preis * 1.081 * 100) / 100;

// Transformation: baut einen Anzeigetext
function zuAnzeigetext(produkt) {
  return produkt.name + ": " + mitMwst(produkt.preis) + " CHF";
}

console.log(
  produkte
    .filter(istVerfuegbar)   // ohne Klammern! wir übergeben die Funktion
    .map(zuAnzeigetext)
);

// Die Bausteine lassen sich einzeln testen ...
console.log(mitMwst(100));                  // 108.1
console.log(istVerfuegbar(produkte[1]));    // false

// ... und überall wiederverwenden
console.log(produkte.some(istVerfuegbar));  // true
console.log(produkte.every(istVerfuegbar)); // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achtung:"})," ",e.jsx("code",{children:"filter(istVerfuegbar)"})," —"," ",e.jsx("em",{children:"ohne"})," Klammern. Wir übergeben die Funktion selbst."," ",e.jsx("code",{children:"filter(istVerfuegbar())"})," würde sie sofort aufrufen und das Resultat übergeben — das ergibt einen Fehler."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 2 — Funktionen, die Funktionen bauen"}),e.jsxs("p",{children:["Manchmal braucht man dasselbe Prädikat mit unterschiedlichen Werten:"," ",e.jsx("em",{children:"teurer als 50"}),", ",e.jsx("em",{children:"teurer als 100"}),". Statt jedes Mal eine neue Funktion zu schreiben, schreibt man eine"," ",e.jsx("strong",{children:"Funktionen-Fabrik"}),": eine Funktion, die eine Funktion zurückgibt."]}),e.jsx(y,{filename:"funktionen-fabrik.js",children:`const produkte = [
  { name: "Maus", preis: 25, lager: 12 },
  { name: "Tastatur", preis: 89, lager: 0 },
  { name: "Monitor", preis: 249, lager: 3 },
  { name: "Kabel", preis: 9.9, lager: 40 },
];

// Eine Funktion, die ein Prädikat zurückgibt
function teurerAls(grenze) {
  return (produkt) => produkt.preis > grenze;
}

// teurerAls(50) ERGIBT eine Funktion:
const istTeuer = teurerAls(50);
console.log(typeof istTeuer);       // "function"
console.log(istTeuer(produkte[0])); // false (25)

// Damit lassen sich Filter massschneidern
console.log(produkte.filter(teurerAls(50)).map((p) => p.name));
console.log(produkte.filter(teurerAls(200)).map((p) => p.name));

// Dasselbe für Transformationen
const rabattVon = (prozent) => (preis) => preis * (1 - prozent / 100);

const mit20Prozent = rabattVon(20);
console.log(produkte.map((p) => p.preis).map(mit20Prozent));

// Sehr nützlich: Sortier-Funktionen erzeugen
const nach = (schluessel) => (a, b) => a[schluessel] - b[schluessel];

console.log(produkte.toSorted(nach("preis")).map((p) => p.name));
console.log(produkte.toSorted(nach("lager")).map((p) => p.name));`}),e.jsxs("p",{children:["Der Trick: ",e.jsx("code",{children:"teurerAls(50)"})," merkt sich den Wert"," ",e.jsx("code",{children:"50"})," in der zurückgegebenen Funktion. Damit baut man aus einer Vorlage beliebig viele konkrete Prüfungen."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spickzettel"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — gleich viele Elemente, verändert"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — weniger Elemente, unverändert"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — ein einziger Wert am Schluss"]}),e.jsxs("li",{children:[e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"some"}),", ",e.jsx("code",{children:"every"})," — Suchfragen"]}),e.jsxs("li",{children:["Alle drei erzeugen ",e.jsx("strong",{children:"neue"})," Listen — das Original bleibt heil — auch ",e.jsx("code",{children:"toSorted"}),". Nur das ältere"," ",e.jsx("code",{children:"sort"})," und ",e.jsx("code",{children:"push"})," verändern direkt."]}),e.jsxs("li",{children:["Arrow-Funktion ohne Klammern gibt automatisch zurück:"," ",e.jsx("code",{children:"(x) => x * 2"}),". Mit ",e.jsx("code",{children:"{ }"})," ","braucht es ein ",e.jsx("code",{children:"return"}),"."]}),e.jsxs("li",{children:["Eigene ",e.jsx("strong",{children:"Prädikate"})," und"," ",e.jsx("strong",{children:"Transformationen"})," benennen — übergeben ohne Klammern: ",e.jsx("code",{children:"filter(istVerfuegbar)"}),"."]}),e.jsxs("li",{children:["Eine ",e.jsx("strong",{children:"Funktionen-Fabrik"})," gibt eine Funktion zurück:"," ",e.jsx("code",{children:"filter(teurerAls(50))"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Jetzt geht es an die Aufgaben."})," Halten Sie diese Seite als Nachschlagewerk offen."]})]})})]})}const Dd=Object.freeze(Object.defineProperty({__proto__:null,default:yr},Symbol.toStringTag,{value:"Module"}));function Nr(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben: Funktionales Programmieren"}),e.jsxs("p",{children:[e.jsx("strong",{children:"10 Aufgaben"})," zu ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),","," ",e.jsx("code",{children:"reduce"})," und den Suchmethoden. Die Aufgaben 1–5 sind kurz (je ca. 5–10 Minuten), die Aufgaben 6–8 mittel (je ca. 20 Minuten) und die Aufgaben 9–10 umfangreich (je ca. 30–45 Minuten)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Grundregel für alle Aufgaben:"})," Keine ",e.jsx("code",{children:"for"}),"- oder ",e.jsx("code",{children:"while"}),"-Schleifen, kein ",e.jsx("code",{children:"push"})," — ausser es steht ausdrücklich dabei. Verwenden Sie Array-Methoden und geben Sie jedes Resultat mit ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("p",{children:["Legen Sie pro Aufgabe eine Datei an: ",e.jsx("code",{children:"aufgabe-01.js"})," bis"," ",e.jsx("code",{children:"aufgabe-10.js"}),". Beginnen Sie jede Datei mit einem kurzen Kommentar:"]}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Preise umrechnen
// Verwendet: map
// Schwierig war: ...`})})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Einfach (Aufgaben 1–5)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: map — Preise und Namen"}),e.jsxs("p",{children:["Gegeben: ",e.jsx("code",{children:"const preise = [12, 45.5, 8, 99.9, 23];"})," und"," ",e.jsx("code",{children:'const namen = ["anna", "ben", "clara"];'})]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"mitMwst"})," — alle Preise mit 8.1 % Mehrwertsteuer, auf 2 Stellen gerundet."]}),e.jsxs("li",{children:[e.jsx("code",{children:"gross"})," — alle Namen in Grossbuchstaben (",e.jsx("code",{children:".toUpperCase()"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"nummeriert"})," — die Namen als ",e.jsx("code",{children:'"1. Anna"'}),","," ",e.jsx("code",{children:'"2. Ben"'}),", … Der Callback von ",e.jsx("code",{children:"map"})," bekommt als zweiten Parameter den Index."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Kontrolle:"})," Geben Sie am Schluss ",e.jsx("code",{children:"preise"})," ","nochmals aus. Die Liste muss unverändert sein."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: filter — aussortieren"}),e.jsxs("p",{children:["Gegeben:"," ",e.jsx("code",{children:"const zahlen = [3, 12, 7, 40, 15, 8, 23, 4, 91, 16];"})," ","und"," ",e.jsx("code",{children:'const woerter = ["Haus", "Ei", "Computer", "Baum", "JavaScript", "Uhr"];'})]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Alle Zahlen grösser als 10."}),e.jsx("li",{children:"Alle ungeraden Zahlen."}),e.jsx("li",{children:"Alle Zahlen, die durch 4 teilbar sind."}),e.jsx("li",{children:"Alle Wörter mit mehr als 4 Buchstaben."}),e.jsxs("li",{children:["Alle Wörter, die ein ",e.jsx("code",{children:'"a"'})," enthalten (",e.jsx("code",{children:'.includes("a")'}),")."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zusatzfrage als Kommentar:"})," Wie viele Elemente hat eine ",e.jsx("code",{children:"filter"}),"-Liste höchstens?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: reduce — zusammenfassen"}),e.jsxs("p",{children:["Gegeben: ",e.jsx("code",{children:"const zahlen = [5, 2, 9, 1, 7, 3];"})]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"summe"})," — die Summe aller Zahlen (Startwert"," ",e.jsx("code",{children:"0"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"produkt"})," — das Produkt aller Zahlen. Überlegen Sie: Welcher Startwert ist hier richtig — und warum nicht 0?"]}),e.jsxs("li",{children:[e.jsx("code",{children:"maximum"})," — die grösste Zahl, nur mit"," ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"satz"})," — aus"," ",e.jsx("code",{children:'["Ich", "lerne", "JavaScript"]'})," mit"," ",e.jsx("code",{children:"reduce"})," den String ",e.jsx("code",{children:'"Ich lerne JavaScript"'}),". Der Akkumulator ist hier ein String."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Die erste Kette"}),e.jsxs("p",{children:["Gegeben ist eine Liste von Produkten:",e.jsx("br",{}),e.jsx("code",{children:'{ name: "Maus", preis: 25, lager: 12 }'})," — erstellen Sie selbst mindestens 6 solche Objekte."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Die Namen aller Produkte, die günstiger als 50 sind — als eine Kette ",e.jsx("code",{children:"filter"})," → ",e.jsx("code",{children:"map"}),"."]}),e.jsxs("li",{children:["Der Gesamtwert des Lagers (",e.jsx("code",{children:"preis · lager"})," aufsummiert) — als Kette ",e.jsx("code",{children:"map"})," → ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("li",{children:["Die Namen der Produkte, die ausverkauft sind (",e.jsx("code",{children:"lager === 0"}),"). Mindestens eines Ihrer Produkte soll ausverkauft sein."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Suchen ohne Schleife"}),e.jsxs("p",{children:["Verwenden Sie dieselbe Produktliste wie in Aufgabe 4 und beantworten Sie jede Frage mit ",e.jsx("strong",{children:"genau einer"})," Methode aus"," ",e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"findIndex"}),", ",e.jsx("code",{children:"some"}),","," ",e.jsx("code",{children:"every"}),", ",e.jsx("code",{children:"includes"}),"."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Das erste Produkt, das teurer als 40 ist."}),e.jsx("li",{children:"An welcher Position steht das Produkt «Maus»?"}),e.jsx("li",{children:"Gibt es überhaupt ein Produkt unter 10 Franken?"}),e.jsx("li",{children:"Sind alle Produkte auf Lager?"}),e.jsx("li",{children:"Schreiben Sie als Kommentar dazu: Welche dieser Methoden hören auf, sobald sie fündig geworden sind — und welche nicht?"})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Mittel (Aufgaben 6–8)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Notenauswertung"}),e.jsxs("p",{children:["Erstellen Sie eine Liste von mindestens 8 Schüler-Objekten mit"," ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"klasse"})," (mindestens 2 verschiedene) und ",e.jsx("code",{children:"noten"})," (Array mit 3–5 Zahlen)."]}),e.jsx("p",{children:"Schreiben Sie folgende Funktionen — alle ohne Schleifen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"durchschnitt(noten)"})," — Mittelwert einer Notenliste, auf 2 Stellen gerundet."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mitSchnitt(schueler)"})," — gibt eine neue Liste zurück, in der jedes Objekt zusätzlich die Eigenschaft"," ",e.jsx("code",{children:"schnitt"})," hat. Tipp: ",e.jsx("code",{children:"map"})," mit Spread:"," ",e.jsx("code",{children:"({ ...s, schnitt: durchschnitt(s.noten) })"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"bestandene(schueler)"})," — alle mit Schnitt ≥ 4."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rangliste(schueler)"})," — nach Schnitt absteigend sortiert, als ",e.jsx("code",{children:'"1. Anna (5.25)"'})," ausgegeben. Verwenden Sie ",e.jsx("code",{children:"toSorted"})," mit einer Vergleichsfunktion."]}),e.jsxs("li",{children:[e.jsx("code",{children:"klassenschnitt(schueler, klasse)"})," — Durchschnitt aller Noten einer Klasse."]}),e.jsxs("li",{children:["Schreiben Sie mindestens zwei ",e.jsx("strong",{children:"benannte Prädikate"})," ","(z. B. ",e.jsx("code",{children:"istBestanden"}),", ",e.jsx("code",{children:"istInKlasse"}),") und übergeben Sie diese an ",e.jsx("code",{children:"filter"})," — ohne Klammern."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Ausgabe:"})," ein kurzer, sauber formatierter Bericht mit ",e.jsx("code",{children:"console.log"}),"."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Zählen und Gruppieren mit reduce"}),e.jsxs("p",{children:["Hier ist der Akkumulator immer ein ",e.jsx("strong",{children:"Objekt"}),". Das ist das wichtigste ",e.jsx("code",{children:"reduce"}),"-Muster überhaupt."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"buchstabenZaehlen(text)"})," — zählt, wie oft jeder Buchstabe vorkommt. Tipp:"," ",e.jsx("code",{children:'text.toLowerCase().split("")'})," ergibt ein Array. Testen Sie mit ",e.jsx("code",{children:'"Informatik ist toll"'})," (Leerzeichen vorher herausfiltern)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"haeufigsterBuchstabe(text)"})," — gibt den häufigsten Buchstaben zurück. Tipp: ",e.jsx("code",{children:"Object.entries()"})," und dann"," ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"gruppiereNach(liste, schluessel)"})," — gruppiert eine Liste von Objekten nach einer Eigenschaft und gibt ein Objekt zurück, z. B. ",e.jsx("code",{children:'{ "1a": [...], "1b": [...] }'}),". Testen Sie es mit Ihrer Schülerliste aus Aufgabe 6 (Schlüssel"," ",e.jsx("code",{children:'"klasse"'}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"wortHaeufigkeit(satz)"})," — zählt, wie oft jedes Wort in einem Satz vorkommt, und gibt die Top 3 aus."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Woche 3 umschreiben"}),e.jsxs("p",{children:["Nehmen Sie Ihre Lösungen der Standard-Algorithmen und schreiben Sie sie funktional neu. Schreiben Sie"," ",e.jsx("strong",{children:"beide Versionen untereinander"})," in dieselbe Datei — die alte Schleifenversion als Kommentar darüber."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"lineareSuche(liste, gesucht)"})," → ",e.jsx("code",{children:"findIndex"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"maximum(liste)"})," und ",e.jsx("code",{children:"minimum(liste)"})," →"," ",e.jsx("code",{children:"reduce"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"summe"}),", ",e.jsx("code",{children:"durchschnitt"}),","," ",e.jsx("code",{children:"zaehleWenn(liste, bedingung)"})," → ",e.jsx("code",{children:"reduce"})," ","bzw. ",e.jsx("code",{children:"filter"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"umkehren(liste)"})," — ohne ",e.jsx("code",{children:".reverse()"}),". Tipp:"," ",e.jsx("code",{children:"reduce"})," mit einem Array als Akkumulator, neues Element jeweils vorne anfügen: ",e.jsx("code",{children:"[element, ...akku]"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"istPalindrom(wort)"})," — mit den Methoden von oben."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reflexion als Kommentar:"})," Bei welchen der fünf Aufgaben ist die funktionale Version klarer, bei welchen nicht? Ändert sich die Laufzeit (O-Notation)?"]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Anspruchsvoll (Aufgaben 9–10)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Datenanalyse — Musik-Streaming"}),e.jsxs("p",{children:["Erstellen Sie einen Datensatz von mindestens"," ",e.jsx("strong",{children:"12 Songs"})," mit den Eigenschaften ",e.jsx("code",{children:"titel"}),","," ",e.jsx("code",{children:"artist"}),", ",e.jsx("code",{children:"genre"}),", ",e.jsx("code",{children:"dauer"})," (in Sekunden), ",e.jsx("code",{children:"jahr"})," und ",e.jsx("code",{children:"streams"}),". Mindestens 4 verschiedene Genres und mindestens 2 Songs pro Artist."]}),e.jsx("p",{children:"Beantworten Sie alle Fragen als Pipeline, ohne Schleifen:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Gesamtspieldauer aller Songs, formatiert als «1h 23m 45s»."}),e.jsxs("li",{children:["Die 3 meistgestreamten Songs als"," ",e.jsx("code",{children:`"1. Titel — Artist (1'200'000 Streams)"`}),"."]}),e.jsxs("li",{children:["Streams pro Genre (Objekt), zusätzlich als Textdiagramm:",e.jsx("br",{}),e.jsx("code",{children:"Rock: ██████ (6.2 Mio)"})]}),e.jsxs("li",{children:["Durchschnittliche Songlänge pro Genre — als Objekt"," ",e.jsx("code",{children:"{ Rock: 245, Pop: 198, ... }"}),"."]}),e.jsx("li",{children:"Der Artist mit den meisten Gesamtstreams (nicht nur mit dem besten einzelnen Song)."}),e.jsxs("li",{children:["Schreiben Sie eine ",e.jsx("strong",{children:"Funktionen-Fabrik"})," ",e.jsx("code",{children:"ausGenre(genre)"}),", die ein Prädikat zurückgibt, sowie"," ",e.jsx("code",{children:"nach(schluessel)"})," für ",e.jsx("code",{children:"toSorted"}),". Verwenden Sie beide mindestens zweimal mit unterschiedlichen Werten."]}),e.jsxs("li",{children:[e.jsx("code",{children:"suche(liste, text)"})," — findet alle Songs, bei denen"," ",e.jsx("code",{children:"text"})," im Titel ",e.jsx("em",{children:"oder"})," im Artist vorkommt, unabhängig von Gross-/Kleinschreibung."]}),e.jsxs("li",{children:[e.jsx("code",{children:"playlist(liste, maxDauer)"})," — stellt eine Playlist zusammen, die die vorgegebene Gesamtdauer nicht überschreitet. Songs werden von den meistgestreamten her genommen. Tipp: mit"," ",e.jsx("code",{children:"reduce"})," und einem Akkumulator"," ",e.jsx("code",{children:"{ songs: [], dauer: 0 }"}),"."]})]}),e.jsx("p",{children:"Geben Sie zum Schluss einen vollständigen, lesbaren Bericht aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Die Werkzeuge selbst bauen"}),e.jsxs("p",{children:["Zum Schluss schauen wir unter die Motorhaube. Hier"," ",e.jsx("strong",{children:"dürfen"})," Sie Schleifen und ",e.jsx("code",{children:"push"})," ","verwenden — aber nur innerhalb Ihrer eigenen Werkzeuge."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"meinMap(liste, callback)"}),","," ",e.jsx("code",{children:"meinFilter(liste, callback)"}),","," ",e.jsx("code",{children:"meinReduce(liste, callback, startwert)"})," — mit einer klassischen ",e.jsx("code",{children:"for"}),"-Schleife nachbauen. Der Callback muss auch den Index bekommen."]}),e.jsxs("li",{children:["Testen Sie jede Funktion gegen das Original: Ergibt"," ",e.jsx("code",{children:"meinMap(a, f)"})," dasselbe wie ",e.jsx("code",{children:"a.map(f)"}),"? Schreiben Sie dafür eine kleine Hilfsfunktion"," ",e.jsx("code",{children:"pruefe(beschreibung, erwartet, erhalten)"}),", die"," ",e.jsx("code",{children:"OK"})," oder ",e.jsx("code",{children:"FEHLER"})," ausgibt."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Die Knacknuss:"})," Bauen Sie ",e.jsx("code",{children:"meinMap"})," und"," ",e.jsx("code",{children:"meinFilter"})," ein zweites Mal — diesmal ",e.jsx("em",{children:"ohne"})," ","Schleife, nur mit ",e.jsx("code",{children:"reduce"}),". Damit zeigen Sie:"," ",e.jsx("code",{children:"reduce"})," ist das allgemeinste der drei Werkzeuge."]}),e.jsxs("li",{children:[e.jsx("code",{children:"pipe(...funktionen)"})," — gibt eine neue Funktion zurück, die alle übergebenen Funktionen nacheinander anwendet.",e.jsx("br",{}),e.jsx("code",{children:"const verarbeite = pipe(verdoppeln, plusEins); verarbeite(5); // 11"}),e.jsx("br",{}),"Tipp: auch das ist ein ",e.jsx("code",{children:"reduce"})," — über die Liste der Funktionen."]}),e.jsx("li",{children:"Lösen Sie damit eine Auswertung aus Aufgabe 9 nochmals im Pipe-Stil und vergleichen Sie die Lesbarkeit."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reflexion als Kommentar:"})," Warum kann man"," ",e.jsx("code",{children:"map"})," und ",e.jsx("code",{children:"filter"})," mit ",e.jsx("code",{children:"reduce"})," ","bauen, aber ",e.jsx("code",{children:"reduce"})," nicht mit ",e.jsx("code",{children:"map"}),"?"]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("p",{children:["Zehn Dateien ",e.jsx("code",{children:"aufgabe-01.js"})," bis ",e.jsx("code",{children:"aufgabe-10.js"})," ","in einem Ordner ",e.jsx("code",{children:"woche-04-fp"}),". Jede Datei muss ohne Fehler laufen (",e.jsx("code",{children:"node aufgabe-01.js"}),") und ihre Resultate ausgeben."]}),e.jsx("p",{children:"Die Aufgaben 1–5 sollten Sie in der ersten Lektion abschliessen können. Wer bei 9 und 10 nicht fertig wird: Halten Sie im Kommentar fest, wie weit Sie gekommen sind und wo Sie stecken geblieben sind."})]})]})}const Ed=Object.freeze(Object.defineProperty({__proto__:null,default:Nr},Symbol.toStringTag,{value:"Module"}));function Dr(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Repetition"}),e.jsx("h2",{children:"Vom funktionalen Stil zu Objekten"}),e.jsx("p",{children:"map · filter · reduce · Objekte als Datensätze"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Woche 4 in Kürze"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — gleich viele Elemente, umgewandelt"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — weniger Elemente, unverändert"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — ein einziger Wert am Schluss"]}),e.jsxs("li",{children:[e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"some"}),", ",e.jsx("code",{children:"every"}),","," ",e.jsx("code",{children:"toSorted"})," — die Suchfragen"]}),e.jsxs("li",{children:["Eigene ",e.jsx("strong",{children:"Prädikate"})," und"," ",e.jsx("strong",{children:"Transformationen"}),", übergeben ohne Klammern"]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eine Pipeline zum Aufwärmen"}),e.jsx(y,{filename:"repetition-fp.js",children:`const konten = [
  { inhaber: "Anna", stand: 1250, typ: "Sparkonto" },
  { inhaber: "Ben", stand: -80, typ: "Privatkonto" },
  { inhaber: "Clara", stand: 640, typ: "Privatkonto" },
];

const istImPlus = (k) => k.stand > 0;

console.log(konten.filter(istImPlus).map((k) => k.inhaber));
console.log(konten.reduce((a, k) => a + k.stand, 0));`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte — bisher nur Daten"}),e.jsxs("p",{children:["Seit Woche 2 verwenden wir Objekte als ",e.jsx("strong",{children:"Datensätze"}),": mehrere zusammengehörende Werte unter einem Namen. Die Funktionen, die mit diesen Daten arbeiten, liegen aber irgendwo daneben."]}),e.jsxs("p",{children:["Ein Objekt kann jedoch auch ",e.jsx("strong",{children:"Funktionen"})," enthalten. Eine Funktion, die in einem Objekt steckt, heisst"," ",e.jsx("strong",{children:"Methode"}),". Mit ",e.jsx("code",{children:"this"})," greift sie auf die eigenen Daten zu."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Von Daten zu Methoden"}),e.jsx(y,{filename:"objekte-methoden.js",children:`// bisher: Daten hier, Funktion dort
const konto = { inhaber: "Anna", stand: 1250 };

function einzahlen(konto, betrag) {
  konto.stand = konto.stand + betrag;
}

einzahlen(konto, 100);
console.log(konto.stand); // 1350

// neu: die Funktion gehört ins Objekt
const konto2 = {
  inhaber: "Ben",
  stand: 500,
  einzahlen(betrag) {
    this.stand = this.stand + betrag;   // this = dieses Objekt
  },
  info() {
    return this.inhaber + ": " + this.stand + " CHF";
  },
};

konto2.einzahlen(250);
console.log(konto2.info()); // "Ben: 750 CHF"`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Das Problem: 100 Konten"}),e.jsxs("p",{children:["So ein Objekt von Hand zu schreiben, ist für ",e.jsx("em",{children:"ein"})," Konto in Ordnung. Aber für hundert Konten müssten wir hundertmal denselben Bauplan abtippen — inklusive aller Methoden."]}),e.jsxs("p",{children:["Was wir brauchen, ist der ",e.jsx("strong",{children:"Bauplan"})," als eigenes Sprachmittel: einmal beschreiben, beliebig oft daraus Objekte erzeugen. Das ist eine ",e.jsx("strong",{children:"Klasse"})," — und damit sind wir beim Thema dieser Woche."]})]})})]})}const Bd=Object.freeze(Object.defineProperty({__proto__:null,default:Dr},Symbol.toStringTag,{value:"Module"}));function Er(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Objektorientierte Programmierung"}),e.jsx("h2",{children:"Klassen · Objekte · Vererbung"}),e.jsx("p",{children:"Daten und Verhalten gehören zusammen"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee"}),e.jsxs("p",{children:["Funktional heisst: Daten fliessen durch Funktionen."," ",e.jsx("strong",{children:"Objektorientiert"})," heisst: Daten und die Funktionen, die zu ihnen gehören, werden zu einer Einheit zusammengepackt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Klasse"})," — der Bauplan. Beschreibt, welche Daten und welche Methoden ein Objekt hat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekt / Instanz"})," — ein konkretes Exemplar, mit"," ",e.jsx("code",{children:"new"})," aus der Klasse erzeugt."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attribut (Eigenschaft)"})," — ein Datenfeld des Objekts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methode"})," — eine Funktion, die zum Objekt gehört."]})]}),e.jsx("p",{children:"Bild: Die Klasse ist der Bauplan eines Hauses, die Objekte sind die gebauten Häuser. Alle folgen demselben Plan, haben aber unterschiedliche Farben, Bewohner und Adressen."})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 1 — Ein Bankkonto"}),e.jsx("p",{children:"Die drei Bestandteile jeder Klasse:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Name { ... }"})," — der Bauplan. Der Name beginnt gross."]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor(...)"})," — läuft automatisch bei"," ",e.jsx("code",{children:"new"})," und setzt die Startwerte."]}),e.jsxs("li",{children:["Methoden — wie Funktionen, aber ohne ",e.jsx("code",{children:"function"})," ","geschrieben."]})]}),e.jsxs("p",{children:[e.jsx("code",{children:"this"})," bedeutet innerhalb der Klasse immer:"," ",e.jsx("em",{children:"dieses eine Objekt, an dem gerade gearbeitet wird"}),"."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 1 — Code"}),e.jsx(y,{filename:"konto.js",children:`class Konto {
  // 1. Der Konstruktor: legt die Startwerte fest
  constructor(inhaber, startguthaben) {
    this.inhaber = inhaber;
    this.stand = startguthaben;
    this.bewegungen = [];
  }

  // 2. Methoden: das Verhalten
  einzahlen(betrag) {
    if (betrag <= 0) return false;
    this.stand = this.stand + betrag;
    this.bewegungen.push(betrag);
    return true;
  }

  abheben(betrag) {
    if (betrag > this.stand) {
      console.log("Nicht genug Guthaben für " + this.inhaber);
      return false;
    }
    this.stand = this.stand - betrag;
    this.bewegungen.push(-betrag);
    return true;
  }

  info() {
    return this.inhaber + ": " + this.stand.toFixed(2) + " CHF";
  }
}

// 3. Objekte erzeugen
const a = new Konto("Anna", 1000);
const b = new Konto("Ben", 50);

a.einzahlen(250);
b.abheben(80);          // scheitert
a.abheben(100);

console.log(a.info());  // Anna: 1150.00 CHF
console.log(b.info());  // Ben: 50.00 CHF

// Jedes Objekt hat seine EIGENEN Daten
console.log(a.bewegungen); // [250, -100]
console.log(b.bewegungen); // []`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 2 — Eine Spielfigur"}),e.jsx("p",{children:"Ein zweites Beispiel, das zeigt: Methoden dürfen sich gegenseitig aufrufen, und ein Objekt darf andere Objekte als Attribute enthalten."})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 2 — Code"}),e.jsx(y,{filename:"spielfigur.js",children:`class Spielfigur {
  constructor(name, leben, staerke) {
    this.name = name;
    this.leben = leben;
    this.maxLeben = leben;
    this.staerke = staerke;
  }

  lebt() {
    return this.leben > 0;
  }

  nimmSchaden(menge) {
    this.leben = Math.max(0, this.leben - menge);
    if (!this.lebt()) {           // Methode ruft Methode auf
      console.log(this.name + " ist besiegt!");
    }
  }

  angreifen(ziel) {
    console.log(this.name + " greift " + ziel.name + " an.");
    ziel.nimmSchaden(this.staerke);
  }

  lebensbalken() {
    const anteil = Math.round((this.leben / this.maxLeben) * 10);
    return "[" + "#".repeat(anteil) + ".".repeat(10 - anteil) + "] "
      + this.leben + "/" + this.maxLeben;
  }
}

const held = new Spielfigur("Held", 100, 25);
const ork = new Spielfigur("Ork", 60, 15);

held.angreifen(ork);
ork.angreifen(held);
held.angreifen(ork);
held.angreifen(ork);

console.log(held.name, held.lebensbalken());
console.log(ork.name, ork.lebensbalken());`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kapselung — nicht alles nach aussen zeigen"}),e.jsxs("p",{children:["Bisher kann jeder von aussen ",e.jsx("code",{children:"konto.stand = 1000000"})," ","schreiben und alle Regeln umgehen. ",e.jsx("strong",{children:"Kapselung"})," ","heisst: Die Daten werden geschützt, Zugriff gibt es nur über Methoden."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ein ",e.jsx("code",{children:"#"})," vor dem Namen macht ein Feld"," ",e.jsx("strong",{children:"privat"}),": ",e.jsx("code",{children:"#stand"}),". Von aussen ist es nicht mehr erreichbar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Getter"})," geben kontrolliert Auskunft,"," ",e.jsx("strong",{children:"Setter"})," prüfen, bevor sie etwas ändern."]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kapselung — Code"}),e.jsx(y,{filename:"kapselung.js",children:`class Konto {
  #stand;                    // privates Feld

  constructor(inhaber, startguthaben) {
    this.inhaber = inhaber;
    this.#stand = startguthaben;
  }

  // Getter: liest sich wie eine Eigenschaft
  get stand() {
    return this.#stand;
  }

  // Setter: prüft, bevor er ändert
  set stand(neu) {
    if (neu < 0) {
      console.log("Negativer Kontostand nicht erlaubt.");
      return;
    }
    this.#stand = neu;
  }

  einzahlen(betrag) {
    if (betrag > 0) this.#stand += betrag;
  }
}

const k = new Konto("Anna", 500);

k.einzahlen(100);
console.log(k.stand);   // 600  -> Getter, ohne Klammern!

k.stand = -50;          // Setter greift ein
console.log(k.stand);   // 600

k.stand = 900;          // erlaubt
console.log(k.stand);   // 900

// console.log(k.#stand);  // Fehler: privat!`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vererbung — Gemeinsames nur einmal schreiben"}),e.jsxs("p",{children:["Ein Sparkonto ist ein Konto — mit einem Zusatz. Statt alles abzuschreiben, ",e.jsx("strong",{children:"erbt"})," die neue Klasse von der alten."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Sparkonto extends Konto"})," — Sparkonto übernimmt alle Attribute und Methoden."]}),e.jsxs("li",{children:[e.jsx("code",{children:"super(...)"})," im Konstruktor ruft den Konstruktor der Oberklasse auf. Er muss ",e.jsx("strong",{children:"zuerst"})," kommen."]}),e.jsxs("li",{children:["Eine Methode kann ",e.jsx("strong",{children:"überschrieben"})," werden — die Unterklasse definiert sie einfach neu."]})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vererbung — Code"}),e.jsx(y,{filename:"vererbung.js",children:`class Konto {
  constructor(inhaber, stand) {
    this.inhaber = inhaber;
    this.stand = stand;
  }

  info() {
    return this.inhaber + ": " + this.stand.toFixed(2) + " CHF";
  }
}

class Sparkonto extends Konto {
  constructor(inhaber, stand, zinssatz) {
    super(inhaber, stand);        // zuerst die Oberklasse!
    this.zinssatz = zinssatz;
  }

  verzinsen() {
    this.stand = this.stand * (1 + this.zinssatz / 100);
  }

  // Methode überschreiben, Original mit super. weiterverwenden
  info() {
    return super.info() + " (Sparkonto, " + this.zinssatz + "%)";
  }
}

class Jugendkonto extends Sparkonto {
  constructor(inhaber, stand) {
    super(inhaber, stand, 2.5);   // besserer Zins
  }

  info() {
    return super.info() + " [Jugend]";
  }
}

const s = new Sparkonto("Anna", 1000, 1.5);
const j = new Jugendkonto("Ben", 400);

s.verzinsen();
j.verzinsen();

console.log(s.info());
console.log(j.info());

// Alle sind Konten -> gemeinsam behandelbar
const alle = [s, j, new Konto("Clara", 250)];
console.log(alle.map((k) => k.info()));`}),e.jsxs("p",{children:["Der letzte Block ist ",e.jsx("strong",{children:"Polymorphie"}),": Wir rufen überall"," ",e.jsx("code",{children:"info()"})," auf, und jedes Objekt weiss selbst, welche Version die richtige ist."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beide Welten zusammen"}),e.jsx("p",{children:"OOP und FP sind keine Gegensätze. Eine Liste von Objekten wertet man am besten mit den Werkzeugen aus Woche 4 aus."}),e.jsx(y,{filename:"oop-und-fp.js",children:`class Schueler {
  constructor(name, klasse, noten) {
    this.name = name;
    this.klasse = klasse;
    this.noten = noten;
  }

  schnitt() {
    const summe = this.noten.reduce((a, n) => a + n, 0);
    return Math.round((summe / this.noten.length) * 100) / 100;
  }

  hatBestanden() {
    return this.schnitt() >= 4;
  }
}

const liste = [
  new Schueler("Anna", "1a", [5, 5.5, 6]),
  new Schueler("Ben", "1a", [3, 4, 3.5]),
  new Schueler("Clara", "1b", [4.5, 5, 4]),
];

console.log(liste.filter((s) => s.hatBestanden()).map((s) => s.name));

console.log(
  liste.toSorted((a, b) => b.schnitt() - a.schnitt()).map((s) => s.name)
);

const schnitt =
  liste.reduce((a, s) => a + s.schnitt(), 0) / liste.length;
console.log("Klassenschnitt:", schnitt.toFixed(2));`})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spickzettel"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Name { ... }"})," — Bauplan,"," ",e.jsx("code",{children:"new Name(...)"})," — Objekt"]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor"})," setzt die Startwerte, ",e.jsx("code",{children:"this"})," ","meint das eigene Objekt"]}),e.jsxs("li",{children:[e.jsx("code",{children:"#feld"})," ist privat — Zugriff über ",e.jsx("code",{children:"get"})," /"," ",e.jsx("code",{children:"set"})," oder Methoden"]}),e.jsxs("li",{children:[e.jsx("code",{children:"extends"})," erbt, ",e.jsx("code",{children:"super(...)"})," ruft die Oberklasse, Methoden lassen sich überschreiben"]}),e.jsxs("li",{children:["Listen von Objekten: weiterhin mit ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"reduce"})," auswerten"]})]})]})})]})}const Wd=Object.freeze(Object.defineProperty({__proto__:null,default:Er},Symbol.toStringTag,{value:"Module"}));function Br(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Projekt: Das Dungeon-Duell"}),e.jsxs("p",{children:["Diese Woche gibt es ",e.jsx("strong",{children:"eine"})," grosse Aufgabe statt vieler kleiner: ein rundenbasiertes Kampfspiel, das nur in der Konsole läuft. Sie bauen es in ",e.jsx("strong",{children:"acht Teilen"})," auf. Jeder Teil funktioniert für sich — testen Sie nach jedem Teil, bevor Sie weitergehen."]}),e.jsx("p",{children:"Die Teile 1–5 sind Pflicht, Teil 6 und 7 vervollständigen das Spiel, Teil 8 ist die Kür. Es gibt keine Musterlösung: Namen, Zahlen und Spielwelt dürfen Sie frei wählen, solange die geforderte Struktur stimmt."}),e.jsx("h3",{children:"Das fertige Klassenmodell"}),e.jsx("pre",{children:e.jsx("code",{children:`Wesen                (Basisklasse: name, leben, staerke)
 ├── Held             (erbt: level, erfahrung, waffe, inventar)
 └── Monster          (erbt: beute)

Waffe                 (name, schaden, tempo)     -> Held HAT eine Waffe
Gegenstand            (name, wirkung, wert)      -> Inventar HAT Gegenstände
Inventar              (Liste von Gegenständen)   -> Held HAT ein Inventar
Kampf                 (zwei Wesen, Rundenlogik)
Spiel                 (Held + mehrere Monster, Ablauf)`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achten Sie auf den Unterschied:"})," ",e.jsx("code",{children:"Held"})," und"," ",e.jsx("code",{children:"Monster"})," ",e.jsx("strong",{children:"erben"})," von ",e.jsx("code",{children:"Wesen"})," — sie erweitern eine bestehende Klasse. ",e.jsx("code",{children:"Waffe"}),","," ",e.jsx("code",{children:"Gegenstand"})," und ",e.jsx("code",{children:"Inventar"})," sind dagegen eigene Klassen, die als ",e.jsx("strong",{children:"Attribut"})," in einem Objekt stecken."]}),e.jsx("h3",{children:"Dateien"}),e.jsxs("p",{children:["Legen Sie einen Ordner ",e.jsx("code",{children:"woche-05-dungeon"})," an. Arbeiten Sie in einer einzigen Datei ",e.jsx("code",{children:"spiel.js"})," und markieren Sie die Teile mit Kommentaren:"]}),e.jsx("pre",{children:e.jsx("code",{children:`// ===== TEIL 1: Klasse Wesen =====
// Idee: ...
// Schwierig war: ...`})})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Pflichtteil"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 1: Die Basisklasse Wesen"}),e.jsxs("p",{children:["Alles im Spiel, das kämpfen kann, ist ein ",e.jsx("code",{children:"Wesen"}),". Schreiben Sie diese Klasse zuerst."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Konstruktor"})," mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"leben"})," und ",e.jsx("code",{children:"staerke"}),". Merken Sie sich das Startleben zusätzlich als ",e.jsx("code",{children:"maxLeben"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"lebt()"})," — gibt ",e.jsx("code",{children:"true"})," zurück, solange die Lebenspunkte über 0 sind."]}),e.jsxs("li",{children:[e.jsx("code",{children:"nimmSchaden(menge)"})," — zieht Leben ab, aber nie unter 0. Gibt eine Meldung aus, wenn das Wesen dabei besiegt wird."]}),e.jsxs("li",{children:[e.jsx("code",{children:"heilen(menge)"})," — heilt, aber höchstens bis"," ",e.jsx("code",{children:"maxLeben"}),". Ein besiegtes Wesen kann nicht geheilt werden."]}),e.jsxs("li",{children:[e.jsx("code",{children:"angreifen(ziel)"})," — fügt dem Ziel"," ",e.jsx("code",{children:"this.staerke"})," Schaden zu und gibt aus, was passiert ist."]}),e.jsxs("li",{children:[e.jsx("code",{children:"lebensbalken()"})," — gibt einen Textbalken zurück, z. B."," ",e.jsx("code",{children:"[#######...] 70/100"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"info()"})," — eine Zeile mit Name und Lebensbalken."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Zwei Wesen erzeugen, sich gegenseitig angreifen lassen, bis eines besiegt ist. Nach jedem Angriff"," ",e.jsx("code",{children:"info()"})," beider Wesen ausgeben."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 2: Kapselung der Lebenspunkte"}),e.jsxs("p",{children:["Im Moment kann man ",e.jsx("code",{children:"held.leben = 99999"})," schreiben und schummeln. Das ändern wir."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Machen Sie das Lebensfeld privat: ",e.jsx("code",{children:"#leben"}),". Alle Methoden der Klasse verwenden ab jetzt ",e.jsx("code",{children:"this.#leben"}),"."]}),e.jsxs("li",{children:["Ergänzen Sie einen ",e.jsx("strong",{children:"Getter"})," ",e.jsx("code",{children:"get leben()"}),", damit man den Wert weiterhin lesen kann."]}),e.jsxs("li",{children:["Ergänzen Sie einen ",e.jsx("strong",{children:"Setter"})," ",e.jsx("code",{children:"set leben(neu)"}),", der den Wert auf den Bereich zwischen 0 und ",e.jsx("code",{children:"maxLeben"})," begrenzt."]}),e.jsxs("li",{children:["Ergänzen Sie einen Getter ",e.jsx("code",{children:"get zustand()"}),", der je nach Prozentsatz ",e.jsx("code",{children:'"frisch"'}),", ",e.jsx("code",{children:'"verletzt"'}),","," ",e.jsx("code",{children:'"kritisch"'})," oder ",e.jsx("code",{children:'"besiegt"'})," zurückgibt."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Versuchen Sie, von aussen zu schummeln (",e.jsx("code",{children:"wesen.leben = 99999"})," und, als Kommentar,"," ",e.jsx("code",{children:"wesen.#leben"}),"). Halten Sie im Kommentar fest, was jeweils passiert und warum."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 3: Held und Monster erben"}),e.jsxs("p",{children:["Jetzt kommen zwei Unterklassen dazu. Beide verwenden"," ",e.jsx("code",{children:"extends"})," und rufen im Konstruktor zuerst"," ",e.jsx("code",{children:"super(...)"})," auf."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Held extends Wesen"})," — zusätzlich"," ",e.jsx("code",{children:"level"})," (Start 1) und ",e.jsx("code",{children:"erfahrung"})," (Start 0)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"erfahrungGeben(menge)"})," — zählt Erfahrung dazu. Ab 100 Punkten steigt der Held ein Level auf: Erfahrung um 100 reduzieren, ",e.jsx("code",{children:"maxLeben"})," +20, voll heilen,"," ",e.jsx("code",{children:"staerke"})," +5. Ein Levelaufstieg soll auch mehrfach hintereinander möglich sein."]}),e.jsxs("li",{children:[e.jsx("code",{children:"class Monster extends Wesen"})," — zusätzlich"," ",e.jsx("code",{children:"beute"})," (Erfahrungspunkte, die es beim Besiegen gibt)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Überschreiben:"})," Beide Klassen überschreiben"," ",e.jsx("code",{children:"info()"})," und verwenden dabei ",e.jsx("code",{children:"super.info()"})," ","weiter. Beim Held wird das Level ergänzt, beim Monster die Beute."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Überschreiben mit Extra:"})," Das Monster überschreibt"," ",e.jsx("code",{children:"angreifen(ziel)"})," so, dass es mit einer Wahrscheinlichkeit von 20 % daneben schlägt (",e.jsx("code",{children:"Math.random()"}),")."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Legen Sie ein Array mit einem Held und drei verschiedenen Monstern an und geben Sie mit einer ",e.jsx("code",{children:"map"}),"-Kette alle ",e.jsx("code",{children:"info()"}),"-Zeilen aus. Jedes Objekt muss seine eigene Version von ",e.jsx("code",{children:"info()"})," verwenden — das ist"," ",e.jsx("strong",{children:"Polymorphie"}),"."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 4: Waffen als eigene Klasse"}),e.jsxs("p",{children:["Eine Waffe kämpft nicht selbst — sie wird darum nicht von"," ",e.jsx("code",{children:"Wesen"})," abgeleitet, sondern als eigene Klasse gebaut und dem Held als Attribut mitgegeben."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Waffe"})," mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"schaden"})," und ",e.jsx("code",{children:"tempo"})," (Angriffe pro Runde, 1 oder 2)."]}),e.jsxs("li",{children:["Methode ",e.jsx("code",{children:"beschreibung()"}),", z. B."," ",e.jsx("code",{children:'"Kurzschwert (12 Schaden, 2x)"'}),"."]}),e.jsxs("li",{children:["Der ",e.jsx("code",{children:"Held"})," bekommt ein Attribut ",e.jsx("code",{children:"waffe"}),"(Startwert: eine Faust-Waffe mit wenig Schaden) und eine Methode"," ",e.jsx("code",{children:"ausruesten(waffe)"}),", die die alte Waffe zurückgibt."]}),e.jsxs("li",{children:["Der Held überschreibt ",e.jsx("code",{children:"angreifen(ziel)"}),": Der Schaden ist jetzt ",e.jsx("code",{children:"staerke + waffe.schaden"}),", und der Angriff wird ",e.jsx("code",{children:"waffe.tempo"}),"-mal ausgeführt."]}),e.jsx("li",{children:"Erstellen Sie mindestens drei verschiedene Waffen und lassen Sie den Held sie ausprobieren."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Frage als Kommentar:"})," Warum wäre"," ",e.jsx("code",{children:"class Waffe extends Wesen"})," hier falsch? Welche geerbten Methoden würden für eine Waffe überhaupt keinen Sinn ergeben?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 5: Gegenstände und Inventar"}),e.jsxs("p",{children:["Hier treffen die beiden Wochen aufeinander: Das Inventar ist eine Klasse, die intern eine Liste verwaltet — ausgewertet mit"," ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Gegenstand"})," mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"art"})," (",e.jsx("code",{children:'"trank"'})," oder ",e.jsx("code",{children:'"schatz"'}),"), ",e.jsx("code",{children:"wirkung"})," (Heilung) und ",e.jsx("code",{children:"wert"})," (Gold)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"class Inventar"})," mit einem privaten Array"," ",e.jsx("code",{children:"#gegenstaende"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hinzufuegen(gegenstand)"})," und"," ",e.jsx("code",{children:"entfernen(name)"})," — entfernen mit ",e.jsx("code",{children:"filter"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"get anzahl()"}),", ",e.jsx("code",{children:"get gesamtwert()"})," (mit"," ",e.jsx("code",{children:"reduce"}),") und ",e.jsx("code",{children:"get traenke()"})," (mit"," ",e.jsx("code",{children:"filter"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"anzeigen()"})," — eine nummerierte Liste, erzeugt mit"," ",e.jsx("code",{children:"map"}),"."]}),e.jsxs("li",{children:["Der Held bekommt ein ",e.jsx("code",{children:"inventar"})," und die Methode"," ",e.jsx("code",{children:"trinken()"}),": nimmt den ersten Trank, heilt sich damit und entfernt ihn aus dem Inventar. Ohne Trank: passende Meldung."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Held verletzen, drei Gegenstände einsammeln, Inventar anzeigen, zweimal trinken, Gesamtwert ausgeben."]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Das Spiel zusammensetzen"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 6: Die Klasse Kampf"}),e.jsx("p",{children:"Bis jetzt haben wir die Angriffe von Hand aufgerufen. Eine eigene Klasse übernimmt nun den Ablauf einer ganzen Auseinandersetzung."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Kampf"})," mit Konstruktor"," ",e.jsx("code",{children:"(held, monster)"}),". Zusätzlich ",e.jsx("code",{children:"runde"})," (Start 0) und ",e.jsx("code",{children:"protokoll"})," (leeres Array)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"notiz(text)"})," — hängt eine Zeile ans Protokoll an und gibt sie mit ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("li",{children:[e.jsx("code",{children:"eineRunde()"})," — Rundenzähler erhöhen, Held greift an, danach das Monster (falls es noch lebt). Wenn der Held unter 30 % Leben fällt, trinkt er automatisch einen Trank."]}),e.jsxs("li",{children:[e.jsx("code",{children:"starten()"})," — führt Runden aus, bis einer besiegt ist oder 20 Runden vorbei sind. Gibt am Schluss den Sieger zurück."]}),e.jsxs("li",{children:["Gewinnt der Held, bekommt er die ",e.jsx("code",{children:"beute"})," des Monsters als Erfahrung."]}),e.jsxs("li",{children:[e.jsx("code",{children:"zusammenfassung()"})," — Anzahl Runden, Sieger und verbleibende Lebenspunkte."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Ein Kampf Held gegen Monster, vollständig protokolliert."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 7: Die Klasse Spiel"}),e.jsx("p",{children:"Zum Schluss die oberste Ebene: ein Dungeon mit mehreren Räumen."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Spiel"})," mit Konstruktor"," ",e.jsx("code",{children:"(held, monsterListe)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"starten()"})," — der Held kämpft nacheinander gegen alle Monster. Nach jedem Sieg: kurze Pause-Meldung, 20 % Heilung und ein zufälliger Gegenstand ins Inventar. Bei einer Niederlage endet das Spiel sofort."]}),e.jsxs("li",{children:[e.jsx("code",{children:"bericht()"})," — Auswertung am Ende, vollständig mit den Werkzeugen aus Woche 4:",e.jsxs("ul",{children:[e.jsxs("li",{children:["Anzahl besiegter Monster (",e.jsx("code",{children:"filter"}),")"]}),e.jsxs("li",{children:["gesamte gesammelte Erfahrung und Gold (",e.jsx("code",{children:"reduce"}),")"]}),e.jsx("li",{children:"Name des stärksten besiegten Monsters"}),e.jsxs("li",{children:["Liste aller Monster mit Status (",e.jsx("code",{children:"map"}),")"]}),e.jsx("li",{children:"Level und Endzustand des Helden"})]})]}),e.jsxs("li",{children:["Erzeugen Sie mindestens ",e.jsx("strong",{children:"5 Monster"})," mit steigender Schwierigkeit und lassen Sie das Spiel laufen."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Balancing:"})," Passen Sie die Zahlen so an, dass das Spiel weder immer gewonnen noch immer verloren wird. Lassen Sie es dafür mehrmals laufen und halten Sie Ihre Beobachtungen im Kommentar fest."]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Kür"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 8: Erweiterungen (freiwillig)"}),e.jsx("p",{children:"Wählen Sie mindestens zwei Erweiterungen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Heldenklassen:"})," ",e.jsx("code",{children:"Krieger"}),","," ",e.jsx("code",{children:"Magier"})," und ",e.jsx("code",{children:"Bogenschuetze"})," erben von"," ",e.jsx("code",{children:"Held"})," und überschreiben"," ",e.jsx("code",{children:"spezialangriff(ziel)"})," unterschiedlich (z. B. doppelter Schaden alle 3 Runden, Flächenzauber, sicherer Treffer). Rufen Sie die Methode für alle Helden in einer Schleife auf — dieselbe Zeile, unterschiedliches Verhalten."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kritische Treffer:"})," 10 % Chance auf doppelten Schaden, mit eigener Meldung. Der Schadenswert soll in einer eigenen Methode ",e.jsx("code",{children:"berechneSchaden()"})," entstehen, damit ihn alle Unterklassen erben."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bosskampf:"})," Ein ",e.jsx("code",{children:"Boss extends Monster"})," ","mit zwei Phasen: Unter 50 % Leben verdoppelt sich seine Stärke, mit einer entsprechenden Ankündigung."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Reflexion (für alle)"}),e.jsx("p",{children:"Beantworten Sie am Ende der Datei als Kommentar:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Welche Methoden mussten Sie dank ",e.jsx("code",{children:"extends"})," nur"," ",e.jsx("strong",{children:"einmal"})," schreiben?"]}),e.jsx("li",{children:"Was hätte sich geändert, wenn Sie das Spiel rein funktional gebaut hätten — mit Objekten als reinen Datensätzen und separaten Funktionen? Nennen Sie je einen Vorteil beider Ansätze."}),e.jsxs("li",{children:["Wo im Programm haben Sie ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," ","oder ",e.jsx("code",{children:"reduce"})," verwendet? War das jeweils klarer als eine Schleife?"]}),e.jsx("li",{children:"Welche Stelle würden Sie als Erstes umbauen, wenn Sie mehr Zeit hätten — und warum?"})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("p",{children:["Eine lauffähige Datei ",e.jsx("code",{children:"spiel.js"})," im Ordner"," ",e.jsx("code",{children:"woche-05-dungeon"}),". ",e.jsx("code",{children:"node spiel.js"})," muss ohne Fehler einen vollständigen Spieldurchgang inklusive Schlussbericht ausgeben."]}),e.jsxs("p",{children:["Mindestanforderung für eine vollständige Lösung: die Teile 1 bis 7 mit mindestens ",e.jsx("strong",{children:"sieben Klassen"}),", davon mindestens"," ",e.jsx("strong",{children:"zwei Vererbungsbeziehungen"}),", ein"," ",e.jsx("strong",{children:"privates Feld"})," mit Getter/Setter und mindestens"," ",e.jsx("strong",{children:"drei Stellen"}),", an denen Sie ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"})," oder ",e.jsx("code",{children:"reduce"})," einsetzen."]}),e.jsx("p",{children:"Wer nicht fertig wird: Halten Sie im Kommentar fest, bis zu welchem Teil Sie gekommen sind und woran es gehakt hat."})]})]})}const _d=Object.freeze(Object.defineProperty({__proto__:null,default:Br},Symbol.toStringTag,{value:"Module"})),Wr="_wrapper_117io_3",_r="_title_117io_12",Fr="_controls_117io_19",Pr="_button_117io_27",Zr="_buttonPrimary_117io_48",Kr="_select_117io_53",Mr="_label_117io_63",Or="_checkbox_117io_70",Tr="_puzzleLayout_117io_81",Ir="_board_117io_88",Lr="_tile_117io_98",Cr="_tileMovable_117io_117",Gr="_tileEmpty_117io_127",$r="_tileCorrect_117io_134",Vr="_tileBadge_117io_139",Rr="_panel_117io_148",Hr="_statGrid_117io_153",Jr="_statKey_117io_161",Ur="_statValue_117io_165",qr="_moveList_117io_170",Qr="_solved_117io_183",Xr="_unsolvable_117io_189",Yr="_searchLayout_117io_197",et="_column_117io_210",nt="_columnTitle_117io_214",st="_message_117io_224",it="_messageDone_117io_231",rt="_messageFail_117io_235",tt="_miniBoard_117io_241",lt="_miniCell_117io_251",ct="_miniCellEmpty_117io_262",at="_frontierList_117io_269",dt="_frontierItem_117io_278",ht="_frontierItemNext_117io_291",ot="_frontierItemNew_117io_297",ut="_frontierMeta_117io_301",xt="_frontierAction_117io_306",jt="_frontierHint_117io_313",gt="_visitedGrid_117io_319",mt="_empty_117io_327",bt="_spaceLayout_117io_335",ft="_diagramPair_117io_350",pt="_diagram_117io_350",kt="_diagramNote_117io_367",St="_goalNote_117io_374",zt="_cycleNote_117io_384",wt="_graphBox_117io_391",vt="_treeBox_117io_407",At="_legend_117io_415",yt="_legendItem_117io_424",Nt="_legendDot_117io_430",Dt="_pathStrip_117io_439",Et="_pathStep_117io_447",Bt="_rounds_117io_458",Wt="_roundsHint_117io_462",_t="_roundsList_117io_469",Ft="_roundChip_117io_475",Pt="_roundChipAktiv_117io_485",Zt="_messageRound_117io_490",Kt="_algoTableWrapper_117io_497",Mt="_algoTable_117io_497",Ot="_algoName_117io_537",Tt="_algoKurz_117io_544",It="_marke_117io_550",Lt="_markeJa_117io_560",Ct="_markeTeils_117io_564",Gt="_markeNein_117io_568",$t="_algoCaption_117io_572",Vt="_pancakeStack_117io_626",Rt="_pancake_117io_626",Ht="_pancakeCorrect_117io_663",Jt="_pancakeTop_117io_668",Ut="_pancakePlate_117io_672",d={wrapper:Wr,title:_r,controls:Fr,button:Pr,buttonPrimary:Zr,select:Kr,label:Mr,checkbox:Or,puzzleLayout:Tr,board:Ir,tile:Lr,tileMovable:Cr,tileEmpty:Gr,tileCorrect:$r,tileBadge:Vr,panel:Rr,statGrid:Hr,statKey:Jr,statValue:Ur,moveList:qr,solved:Qr,unsolvable:Xr,searchLayout:Yr,column:et,columnTitle:nt,message:st,messageDone:it,messageFail:rt,miniBoard:tt,miniCell:lt,miniCellEmpty:ct,frontierList:at,frontierItem:dt,frontierItemNext:ht,frontierItemNew:ot,frontierMeta:ut,frontierAction:xt,frontierHint:jt,visitedGrid:gt,empty:mt,spaceLayout:bt,diagramPair:ft,diagram:pt,diagramNote:kt,goalNote:St,cycleNote:zt,graphBox:wt,treeBox:vt,legend:At,legendItem:yt,legendDot:Nt,pathStrip:Dt,pathStep:Et,rounds:Bt,roundsHint:Wt,roundsList:_t,roundChip:Ft,roundChipAktiv:Pt,messageRound:Zt,algoTableWrapper:Kt,algoTable:Mt,algoName:Ot,algoKurz:Tt,marke:It,markeJa:Lt,markeTeils:Ct,markeNein:Gt,algoCaption:$t,pancakeStack:Vt,pancake:Rt,pancakeCorrect:Ht,pancakeTop:Jt,pancakePlate:Ut};function us({rows:s=Qt,caption:n}){return e.jsxs("div",{className:d.algoTableWrapper,children:[e.jsxs("table",{className:d.algoTable,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Algorithmus"}),e.jsx("th",{children:"Grenze"}),e.jsx("th",{children:"nimmt zuerst"}),e.jsx("th",{children:"vollständig"}),e.jsx("th",{children:"optimal"}),e.jsx("th",{children:"Speicher"})]})}),e.jsx("tbody",{children:s.map(i=>e.jsxs("tr",{children:[e.jsxs("td",{"data-label":"Algorithmus",children:[e.jsx("span",{className:d.algoName,children:i.name}),i.kurz&&e.jsx("span",{className:d.algoKurz,children:i.kurz})]}),e.jsx("td",{"data-label":"Grenze",children:i.frontier}),e.jsx("td",{"data-label":"nimmt zuerst",children:i.pick}),e.jsx("td",{"data-label":"vollständig",children:e.jsx(zn,{...i.vollstaendig})}),e.jsx("td",{"data-label":"optimal",children:e.jsx(zn,{...i.optimal})}),e.jsx("td",{"data-label":"Speicher",children:e.jsx(zn,{...i.speicher})})]},i.name))})]}),n&&e.jsx("p",{className:d.algoCaption,children:n})]})}const qt={ja:d.markeJa,gut:d.markeJa,teils:d.markeTeils,mittel:d.markeTeils,nein:d.markeNein,schlecht:d.markeNein};function zn({wert:s,text:n}){return e.jsx("span",{className:`${d.marke} ${qt[s]??""}`,children:n??s})}const Qt=[{name:"BFS",kurz:"Breitensuche",frontier:"Warteschlange (FIFO)",pick:"ältester Knoten",vollstaendig:{wert:"ja",text:"ja"},optimal:{wert:"ja",text:"ja, bei gleichen Kosten"},speicher:{wert:"schlecht",text:"schlecht · b^d"}},{name:"DFS",kurz:"Tiefensuche",frontier:"Stapel (LIFO)",pick:"neuester Knoten",vollstaendig:{wert:"teils",text:"nur im Endlichen"},optimal:{wert:"nein",text:"nein"},speicher:{wert:"gut",text:"gut · b · d"}},{name:"IDS",kurz:"iterative Tiefensuche",frontier:"Stapel mit Tiefenlimit",pick:"neuester Knoten bis Limit",vollstaendig:{wert:"ja",text:"ja"},optimal:{wert:"ja",text:"ja, bei gleichen Kosten"},speicher:{wert:"gut",text:"gut · b · d"}},{name:"UCS",kurz:"Kostensuche / Dijkstra",frontier:"Prioritätswarteschlange",pick:"kleinstes g",vollstaendig:{wert:"ja",text:"ja"},optimal:{wert:"ja",text:"ja"},speicher:{wert:"schlecht",text:"schlecht"}}];function pe(s){return s.join(",")}function Xt(s){return Array.from({length:s},(n,i)=>i+1)}function In(s){return s.every((n,i)=>n===i+1)}function xs(s,n){return n<2||n>s.length?null:[...s.slice(0,n).reverse(),...s.slice(n)]}function wn(s){const n=[];for(let i=2;i<=s.length;i++)n.push({action:`wende ${i}`,k:i,cost:1,state:xs(s,i)});return n}function vn(s){const n=s.length;let i=0;for(let r=0;r<n-1;r++)Math.abs(s[r]-s[r+1])!==1&&i++;return s[n-1]!==n&&i++,i}function js(s){const n=Xt(s);for(let i=n.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return In(n)?js(s):n}const Vn=[{label:"3 Pfannkuchen",state:[2,3,1]},{label:"4 Pfannkuchen",state:[3,1,4,2]},{label:"5 Pfannkuchen",state:[4,2,5,1,3]}];function xn(s,n,i){const r={nodes:new Map,edges:new Set,adj:new Map,keyOf:n,successorsOf:i},t=n(s);return r.nodes.set(t,{key:t,state:s,gespielt:!0}),r.adj.set(t,[]),r}function Ln(s,n,i=!1){const r=s.keyOf(n),t=s.nodes.get(r);if(t)return i||(t.gespielt=!0),t;const l={key:r,state:n,gespielt:!i};return s.nodes.set(r,l),s.adj.set(r,[]),l}function Yt(s,n){for(const i of s.successorsOf(n))Ln(s,i.state,!0),Cn(s,s.keyOf(n),s.keyOf(i.state))}function el(s,n){for(const i of s.successorsOf(n.state))if(!s.nodes.has(s.keyOf(i.state)))return!1;return!0}function nl(s){return[...s.nodes.values()].filter(n=>!el(s,n))}function Le(s,n){return s<n?`${s}|${n}`:`${n}|${s}`}function Cn(s,n,i){const r=Le(n,i);s.edges.has(r)||(s.edges.add(r),s.adj.get(n)?.push(i),s.adj.get(i)?.push(n))}function jn(s,n,i){const r=s.keyOf(n),t=s.keyOf(i),l=s.nodes.get(t)?.gespielt===!0,j=l?sl(s,r,t):null;return Ln(s,i),Cn(s,r,t),Yt(s,i),{schonBesucht:l,kreis:j&&j.length>2?j:null}}function sl(s,n,i){const r=Le(n,i),t=new Map([[i,null]]),l=[i];for(;l.length>0;){const j=l.shift();if(j===n){const c=[];let a=n;for(;a!==null;)c.push(a),a=t.get(a);return c}for(const c of s.adj.get(j)??[])Le(j,c)!==r&&(t.has(c)||s.nodes.get(c)?.gespielt&&(t.set(c,j),l.push(c)))}return null}function gs(s,n,i){if(n===i)return[n];const r=new Map([[n,null]]),t=[n];for(;t.length>0;){const l=t.shift();for(const j of s.adj.get(l)??[])if(!r.has(j)){if(r.set(j,l),j===i){const c=[];let a=j;for(;a!=null;)c.unshift(a),a=r.get(a);return c}t.push(j)}}return null}function ms(s){const n=new Set;if(!s||s.length<2)return n;for(let i=0;i<s.length-1;i++)n.add(Le(s[i],s[i+1]));return n.add(Le(s[s.length-1],s[0])),n}function Te(s,n,i){let r=[n];const t=new Set([s.keyOf(n)]);for(let l=0;l<i;l++){const j=[];for(const c of r)for(const a of s.successorsOf(c)){const o=s.keyOf(a.state);Ln(s,a.state,!0),Cn(s,s.keyOf(c),o),t.has(o)||(t.add(o),j.push(a.state))}r=j}}function bs(s,n,{spalte:i,zeile:r}){const t=new Map,l=new Map([[n,0]]),j=[],c=new Set([n]),a=[n];for(const b of s.nodes.keys())t.set(b,[]);for(;a.length>0;){const b=a.shift();for(const f of s.adj.get(b)??[])c.has(f)||(c.add(f),l.set(f,(l.get(b)??0)+1),t.get(b).push(f),j.push({id:Le(b,f),von:b,nach:f}),a.push(f))}const o=new Set(j.map(b=>b.id)),z=[];for(const b of s.edges){if(o.has(b))continue;const[f,S]=b.split("|");z.push({id:b,von:f,nach:S})}const h=new Map;let g=0;const E=b=>{const f=t.get(b)??[];let S;if(f.length===0)S=g*i,g+=1;else{const k=f.map(E);S=(Math.min(...k)+Math.max(...k))/2}return h.set(b,{x:S,y:(l.get(b)??0)*r}),S};s.nodes.has(n)&&E(n);for(const b of s.nodes.keys())h.has(b)||(h.set(b,{x:g*i,y:0}),g+=1);return{pos:h,tiefe:l,baumKanten:j,schleifen:z}}function fs(s,{rand:n=30,ratio:i=1.3}={}){const r=[...s.values()];if(r.length===0)return{x:-100,y:-100,w:200,h:200};const t=Math.min(...r.map(b=>b.x))-n,l=Math.max(...r.map(b=>b.x))+n,j=Math.min(...r.map(b=>b.y))-n,c=Math.max(...r.map(b=>b.y))+n,a=Math.max(200,l-t),o=Math.max(150,c-j),z=Math.max(a,o*i),h=z/i,g=(t+l)/2,E=(j+c)/2;return{x:g-z/2,y:E-h/2,w:z,h}}function ps(s,n){const i=(s.y+n.y)/2;return`M ${s.x} ${s.y} C ${s.x} ${i}, ${n.x} ${i}, ${n.x} ${n.y}`}function ks(s,n){const i=n.x-s.x,r=n.y-s.y,t=Math.hypot(i,r)||1,l=-r/t*Math.min(40,t*.35),j=i/t*Math.min(40,t*.35),c=(s.x+n.x)/2+l,a=(s.y+n.y)/2+j;return`M ${s.x} ${s.y} Q ${c} ${a}, ${n.x} ${n.y}`}const il=34,rl=52,on=3.4,An=22;function tl({initial:s=Vn[1].state,title:n="Pfannkuchen sortieren — derselbe Zustandsraum, ein anderes Problem"}){const i=D.useRef(null),[,r]=D.useState(0),t=D.useCallback(()=>r(T=>T+1),[]),[l,j]=D.useState(s),[c,a]=D.useState(s),[o,z]=D.useState(0),[h,g]=D.useState(0),[E,b]=D.useState(null),[f,S]=D.useState(!0);i.current===null&&(i.current=xn(s,pe,wn),Te(i.current,s,1));const k=i.current,u=D.useCallback(T=>{i.current=xn(T,pe,wn),Te(i.current,T,1),j(T),a(T),z(0),g(0),b(null),t()},[t]),v=D.useCallback((T,G)=>{const{schonBesucht:he,kreis:U}=jn(k,T,G);a(G),z(ie=>ie+1),he&&g(ie=>ie+1),b(U),t()},[k,t]),_=D.useCallback(T=>{if(T===pe(c))return;const G=gs(k,pe(c),T);if(!G)return;let he=c,U=0,ie=null;for(const ee of G.slice(1)){const We=k.nodes.get(ee)?.state;if(!We)break;const{schonBesucht:_e,kreis:Ce}=jn(k,he,We);_e&&(U+=1),ie=Ce,he=We}a(he),z(ee=>ee+G.length-1),g(ee=>ee+U),b(ie),t()},[k,c,t]),F=D.useCallback(T=>{Te(k,l,T),b(null),t()},[k,l,t]),B=T=>{const G=xs(c,T+1);G&&v(c,G)},K=c.length,O=pe(c),I=wn(c),w=ms(E),m=In(c),N=vn(c),{pos:M,baumKanten:Y,schleifen:ce}=bs(k,pe(l),{spalte:il,zeile:rl}),X=fs(M,{rand:K*on+14+(f?10:0)});return e.jsxs("div",{className:d.wrapper,children:[e.jsx("p",{className:d.title,children:n}),e.jsxs("div",{className:d.controls,children:[e.jsx("span",{className:d.label,children:"Stapel"}),Vn.map(T=>e.jsx("button",{type:"button",className:d.button,onClick:()=>u(T.state),children:T.label},T.label)),e.jsx("button",{type:"button",className:d.button,onClick:()=>u(js(K)),children:"mischen"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>u(l),disabled:o===0,children:"Baum leeren"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>F(2),children:"bis Tiefe 2"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>F(3),children:"bis Tiefe 3"}),e.jsxs("label",{className:d.checkbox,children:[e.jsx("input",{type:"checkbox",checked:f,onChange:T=>S(T.target.checked)}),"h zeigen (Bruchstellen)"]})]}),e.jsxs("div",{className:d.spaceLayout,children:[e.jsxs("div",{children:[e.jsx("p",{className:d.columnTitle,children:"wenden"}),e.jsxs("div",{className:d.pancakeStack,children:[c.map((T,G)=>e.jsx("button",{type:"button",className:[d.pancake,T===G+1?d.pancakeCorrect:"",G===0?d.pancakeTop:""].filter(Boolean).join(" "),style:{width:`${T/K*100}%`},onClick:()=>B(G),disabled:G===0,title:G===0?"Den obersten allein zu wenden ändert nichts":`Wender hier einschieben: die obersten ${G+1} umdrehen`,children:T},G)),e.jsx("span",{className:d.pancakePlate})]}),e.jsx("p",{className:d.frontierHint,children:"Klick auf einen Pfannkuchen: Der Wender fährt darunter, und alles darüber wird umgedreht. Der oberste allein bringt nichts."}),e.jsxs("div",{className:d.statGrid,style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:d.statKey,children:"key(state)"}),e.jsx("span",{className:d.statValue,children:O}),e.jsx("span",{className:d.statKey,children:"Verzweigungsgrad b"}),e.jsxs("span",{className:d.statValue,children:[K-1," (immer gleich)"]}),e.jsx("span",{className:d.statKey,children:"Züge gemacht"}),e.jsx("span",{className:d.statValue,children:o}),f&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d.statKey,children:"h — Bruchstellen"}),e.jsxs("span",{className:d.statValue,children:[N,N===0?" — sortiert":""]})]}),e.jsx("span",{className:d.statKey,children:"Knoten (Zustände)"}),e.jsx("span",{className:d.statValue,children:k.nodes.size}),e.jsx("span",{className:d.statKey,children:"Kanten (Züge)"}),e.jsx("span",{className:d.statValue,children:k.edges.size}),e.jsx("span",{className:d.statKey,children:"Schleifen im Graph"}),e.jsx("span",{className:d.statValue,children:ce.length}),e.jsx("span",{className:d.statKey,children:"schon bekannt"}),e.jsx("span",{className:d.statValue,children:h}),e.jsx("span",{className:d.statKey,children:"Zustandsraum gesamt"}),e.jsxs("span",{className:d.statValue,children:[cl(K)," Stapel (n!)"]})]}),m&&e.jsxs("p",{className:d.cycleNote,children:["Sortiert! Kleinster oben, grösster unten — in ",o," Zügen."]}),e.jsxs("p",{className:d.columnTitle,children:["Nachfolger (",I.length,") — klicken zum Wenden"]}),e.jsx("div",{className:d.frontierList,children:I.map(T=>{const G=k.nodes.get(pe(T.state))?.gespielt===!0;return e.jsxs("button",{type:"button",className:[d.frontierItem,G?"":d.frontierItemNew].filter(Boolean).join(" "),style:{cursor:"pointer",textAlign:"left"},onClick:()=>v(c,T.state),children:[e.jsx("span",{className:d.frontierAction,children:T.action}),e.jsx("span",{className:d.frontierMeta,children:pe(T.state)}),f&&e.jsxs("span",{className:d.frontierMeta,children:["h=",vn(T.state)]}),e.jsx("span",{className:d.frontierMeta,children:G?"bekannt":"neu"})]},T.action)})})]}),e.jsxs("div",{className:d.column,children:[e.jsxs("p",{className:d.columnTitle,children:["Zustandsraum als Suchbaum — ",k.nodes.size," Knoten, ",k.edges.size," ","Kanten"]}),e.jsx("div",{className:d.graphBox,children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:`${X.x} ${X.y} ${X.w} ${X.h}`,role:"img","aria-label":"Zustandsraum des Pfannkuchen-Problems",children:[e.jsx("title",{children:"Zustandsraum: Knoten sind Stapel, Kanten sind Wende-Züge"}),Y.map(({id:T,von:G,nach:he})=>{const U=M.get(G),ie=M.get(he);if(!U||!ie)return null;const ee=G===O||he===O;return e.jsx("path",{d:ps(U,ie),fill:"none",stroke:ee?"var(--color-yellow)":"var(--color-bg-lighter)",strokeWidth:ee?2:1.2},T)}),ce.map(({id:T,von:G,nach:he})=>{const U=M.get(G),ie=M.get(he);if(!U||!ie)return null;const ee=w.has(T);return e.jsx("path",{d:ks(U,ie),fill:"none",stroke:ee?"var(--color-red)":"var(--color-purple)",strokeWidth:ee?2.5:1.2,strokeDasharray:ee?"none":"4 3",opacity:ee?1:.7},T)}),[...k.nodes.values()].map(T=>{const G=M.get(T.key);return G?e.jsx(ll,{node:T,x:G.x,y:G.y,aktiv:T.key===O,imKreis:E?.includes(T.key)??!1,hWert:f?vn(T.state):null,hAktuell:N,onClick:()=>_(T.key)},T.key):null})]})}),e.jsxs("div",{className:d.legend,children:[e.jsx(Ve,{farbe:"var(--color-yellow)",text:"aktueller Stapel"}),e.jsx(Ve,{farbe:"var(--color-aqua)",text:"sortiert (Ziel)"}),e.jsx(Ve,{farbe:"var(--color-blue)",text:"selbst besucht"}),e.jsx(Ve,{farbe:"var(--color-gray)",text:"nur aufgedeckt"}),e.jsx(Ve,{farbe:"var(--color-purple)",text:"Schleife (Rückkante)"}),e.jsx("span",{children:"Jede Zeile = ein Wende-Zug weiter vom Start weg"}),e.jsx("span",{children:"Klick auf einen Knoten: dorthin springen"})]})]})]})]})}function ll({node:s,x:n,y:i,aktiv:r,imKreis:t,hWert:l,hAktuell:j,onClick:c}){const a=s.state.length,o=In(s.state),z=r?"var(--color-yellow)":t?"var(--color-red)":o?"var(--color-aqua)":s.gespielt?"var(--color-blue)":"var(--color-gray)",h=l===null?"transparent":l===0?"var(--color-aqua)":l<j?"var(--color-green)":l>j?"var(--color-red)":"var(--color-gray-light)",g=a*on,E=i-g/2;return e.jsxs("g",{role:"button",tabIndex:0,"aria-label":`Stapel ${s.key}`,onClick:c,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&c()},style:{cursor:"pointer"},children:[e.jsx("title",{children:s.key}),e.jsx("rect",{x:n-An/2-2,y:E-2,width:An+4,height:g+4,rx:2,fill:"var(--color-bg)",stroke:z,strokeWidth:r||t?2:1}),s.state.map((b,f)=>{const S=b/a*An;return e.jsx("rect",{x:n-S/2,y:E+f*on+.4,width:S,height:on-.8,rx:.8,fill:s.gespielt?z:"var(--color-gray)",opacity:s.gespielt?.85:.5},f)}),l!==null&&e.jsxs("text",{x:n,y:E+g+8,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:8,fontWeight:r?700:400,fill:h,children:["h=",l]})]})}function Ve({farbe:s,text:n}){return e.jsxs("span",{className:d.legendItem,children:[e.jsx("span",{className:d.legendDot,style:{backgroundColor:s}}),n]})}function cl(s){let n=1;for(let i=2;i<=s;i++)n*=i;return n}const q=3,Be=[1,2,3,4,5,6,7,8,0];function je(s){return s.join(",")}function fn(s){return je(s)===je(Be)}const al=[{name:"hoch",dz:-1,ds:0},{name:"runter",dz:1,ds:0},{name:"links",dz:0,ds:-1},{name:"rechts",dz:0,ds:1}];function Ae(s){const n=s.indexOf(0),i=Math.floor(n/q),r=n%q,t=[];for(const l of al){const j=i+l.dz,c=r+l.ds;if(j<0||j>=q||c<0||c>=q)continue;const a=j*q+c,o=[...s];o[n]=o[a],o[a]=0,t.push({action:`${o[n]} ${l.name}`,tile:o[n],cost:1,state:o})}return t}function Pn(s,n){const i=s.indexOf(0),r=Math.floor(i/q),t=i%q,l=Math.floor(n/q),j=n%q;if(Math.abs(r-l)+Math.abs(t-j)!==1)return null;const c=[...s];return c[i]=c[n],c[n]=0,c}function pn(s){let n=0;for(let i=0;i<s.length;i++)s[i]!==0&&s[i]!==Be[i]&&n++;return n}function Ye(s){let n=0;for(let i=0;i<s.length;i++){const r=s[i];if(r===0)continue;const t=Be.indexOf(r);n+=Math.abs(Math.floor(i/q)-Math.floor(t/q))+Math.abs(i%q-t%q)}return n}function dl(s,n){const i=s[n];if(i===0)return 0;const r=Be.indexOf(i);return Math.abs(Math.floor(n/q)-Math.floor(r/q))+Math.abs(n%q-r%q)}function hl(s){const n=s.filter(r=>r!==0);let i=0;for(let r=0;r<n.length;r++)for(let t=r+1;t<n.length;t++)n[r]>n[t]&&i++;return i%2===0}function Ss(s=20,n=Be){let i=[...n],r=null;for(let t=0;t<s;t++){const l=Ae(i).filter(c=>c.tile!==r),j=l[Math.floor(Math.random()*l.length)];i=j.state,r=j.tile}return i}const me=[{label:"2 Züge",state:[1,2,3,4,5,6,0,7,8]},{label:"4 Züge",state:[0,1,3,4,2,6,7,5,8]},{label:"8 Züge",state:[1,2,3,7,5,6,8,4,0]},{label:"12 Züge",state:[7,1,2,4,0,3,8,6,5]},{label:"14 Züge",state:[0,8,2,5,7,3,1,4,6]},{label:"18 Züge",state:[0,7,1,2,6,3,8,5,4]},{label:"unlösbar",state:[2,8,3,1,6,4,7,0,5]}];function Zn({initial:s=me[3].state,showHeuristics:n=!1,title:i="Schiebepuzzle — probieren Sie es aus"}){const[r,t]=D.useState(s),[l,j]=D.useState(s),[c,a]=D.useState([]),[o,z]=D.useState(n),h=fn(l),g=hl(l),E=new Set(Ae(l).map(S=>S.tile)),b=S=>{if(h)return;const k=Pn(l,S);k&&(a([...c,`${l[S]} → ${ol(l,S)}`]),j(k))},f=S=>{t(S),j(S),a([])};return e.jsxs("div",{className:d.wrapper,children:[e.jsx("p",{className:d.title,children:i}),e.jsxs("div",{className:d.controls,children:[e.jsx("span",{className:d.label,children:"Stellung"}),me.map(S=>e.jsx("button",{type:"button",className:d.button,onClick:()=>f(S.state),children:S.label},S.label)),e.jsx("button",{type:"button",className:d.button,onClick:()=>f(Ss(40)),children:"mischen"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>f(r),disabled:c.length===0,children:"zurücksetzen"}),e.jsxs("label",{className:d.checkbox,children:[e.jsx("input",{type:"checkbox",checked:o,onChange:S=>z(S.target.checked)}),"Abstände zeigen"]})]}),e.jsxs("div",{className:d.puzzleLayout,children:[e.jsx("div",{className:d.board,children:l.map((S,k)=>{const u=S!==0&&S===Be[k],v=E.has(S)&&!h,_=dl(l,k);return e.jsxs("button",{type:"button",className:[d.tile,S===0?d.tileEmpty:"",v?d.tileMovable:"",u?d.tileCorrect:""].filter(Boolean).join(" "),onClick:()=>b(k),disabled:S===0,children:[S===0?"":S,o&&S!==0&&_>0&&e.jsx("span",{className:d.tileBadge,children:_})]},k)})}),e.jsxs("div",{className:d.panel,children:[h&&e.jsxs("p",{className:d.solved,children:["Gelöst! ",c.length," Züge."]}),!g&&e.jsx("p",{className:d.unsolvable,children:"Diese Stellung ist unlösbar — kein Weg führt zum Ziel."}),e.jsxs("div",{className:d.statGrid,children:[e.jsx("span",{className:d.statKey,children:"Züge bisher"}),e.jsx("span",{className:d.statValue,children:c.length}),e.jsx("span",{className:d.statKey,children:"mögliche Züge"}),e.jsx("span",{className:d.statValue,children:E.size}),o&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d.statKey,children:"falsche Plätze"}),e.jsx("span",{className:d.statValue,children:pn(l)}),e.jsx("span",{className:d.statKey,children:"Manhattan-Distanz"}),e.jsx("span",{className:d.statValue,children:Ye(l)})]})]}),e.jsx("p",{className:d.columnTitle,children:"Ihre Züge"}),e.jsx("div",{className:d.moveList,children:c.length===0?e.jsx("span",{className:d.empty,children:"Klicken Sie einen Stein neben dem leeren Feld an."}):c.map((S,k)=>e.jsxs("div",{children:[k+1,". ",S]},k))})]})]})]})}function ol(s,n){const i=s.indexOf(0);return i===n-3?"hoch":i===n+3?"runter":i===n-1?"links":"rechts"}function un({state:s,title:n}){return e.jsx("div",{className:d.miniBoard,title:n,children:s.map((i,r)=>e.jsx("div",{className:[d.miniCell,i===0?d.miniCellEmpty:""].filter(Boolean).join(" "),children:i===0?"":i},r))})}const ul=30,Rn=13,xl=1200,sn=18,yn=600;function jl({snapshot:s}){const{nodes:n,frontier:i,visited:r,current:t,path:l}=s,j=n.slice(0,yn),c=j.reduce((S,k)=>Math.max(S,k.depth),0),a=Math.min(ul,Math.max(3,xl/(c+1))),o=new Map,z=new Map;for(const S of j){const k=o.get(S.depth)??0;o.set(S.depth,k+1),z.set(S.id,{x:sn+S.depth*a,y:sn+k*Rn})}const h=new Set(i.map(S=>S.id)),g=new Set((l??[]).map(S=>S.id)),E=sn*2+(c+1)*a,b=sn*2+[...o.values()].reduce((S,k)=>Math.max(S,k),1)*Rn,f=S=>t&&S.id===t.id?"var(--color-yellow)":g.has(S.id)?"var(--color-aqua)":h.has(S.id)?"var(--color-blue)":r.has(S.state.join(","))?"var(--color-gray)":"var(--color-bg-lighter)";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:d.treeBox,children:e.jsxs("svg",{width:E,height:b,viewBox:`0 0 ${E} ${b}`,role:"img","aria-label":"Suchbaum",children:[e.jsx("title",{children:"Suchbaum: erzeugte Knoten nach Tiefe"}),j.map(S=>{if(!S.parent)return null;const k=z.get(S.parent.id),u=z.get(S.id);if(!k||!u)return null;const v=g.has(S.id)&&g.has(S.parent.id);return e.jsx("line",{x1:k.x,y1:k.y,x2:u.x,y2:u.y,stroke:v?"var(--color-aqua)":"var(--color-bg-lighter)",strokeWidth:v?2:1},`e${S.id}`)}),j.map(S=>{const k=z.get(S.id),u=t&&S.id===t.id;return e.jsx("circle",{cx:k.x,cy:k.y,r:u?5:Math.min(3.5,a/2),fill:f(S),children:e.jsx("title",{children:`Tiefe ${S.depth} · g=${S.g}${S.h?` · h=${S.h}`:""}
${S.action??"Start"}`})},`n${S.id}`)})]})}),e.jsxs("div",{className:d.legend,children:[e.jsx(rn,{farbe:"var(--color-yellow)",text:"wird untersucht"}),e.jsx(rn,{farbe:"var(--color-blue)",text:"Grenze"}),e.jsx(rn,{farbe:"var(--color-gray)",text:"besucht"}),e.jsx(rn,{farbe:"var(--color-aqua)",text:"Lösungsweg"}),n.length>yn&&e.jsxs("span",{children:["… ",n.length-yn," weitere Knoten nicht gezeichnet"]})]})]})}function rn({farbe:s,text:n}){return e.jsxs("span",{className:d.legendItem,children:[e.jsx("span",{className:d.legendDot,style:{backgroundColor:s}}),n]})}const zs={keine:()=>0,falschePlaetze:pn,manhattan:Ye},Hn={bfs:{label:"Breitensuche (BFS)",frontier:"Warteschlange (FIFO)",pick:"der älteste Knoten",useHeuristic:!1},dfs:{label:"Tiefensuche (DFS)",frontier:"Stapel (LIFO)",pick:"der neueste Knoten",useHeuristic:!1},ids:{label:"Iterative Tiefensuche (IDS)",frontier:"Stapel (LIFO) mit Tiefenlimit",pick:"der neueste Knoten",useHeuristic:!1},ucs:{label:"Kostensuche (UCS)",frontier:"Prioritätswarteschlange",pick:"kleinstes g",useHeuristic:!1},greedy:{label:"Greedy Best-First",frontier:"Prioritätswarteschlange",pick:"kleinstes h",useHeuristic:!0},astar:{label:"A*",frontier:"Prioritätswarteschlange",pick:"kleinstes f = g + h",useHeuristic:!0}};let gl=0;function Jn(s,n,i,r){return{id:gl++,state:s,parent:n,action:i,g:n?n.g+1:0,depth:n?n.depth+1:0,h:r(s)}}function Un(s,n){switch(n){case"ucs":return s.g;case"greedy":return s.h;case"astar":return s.g+s.h;default:return 0}}function ml(s,n){if(s.length===0)return-1;if(n==="bfs")return 0;if(n==="dfs"||n==="ids")return s.length-1;let i=0;for(let r=1;r<s.length;r++)Un(s[r],n)<Un(s[i],n)&&(i=r);return i}function bl(s){const n=[];let i=s;for(;i;)n.unshift(i),i=i.parent;return n}function fl(s,n="bfs",i={}){const r=i.heuristic??zs.keine,t=i.maxExpansions??6e3,l=n==="ids",j=i.maxLimit??30,c=Jn(s,null,null,r);let a=[c];const o=new Set,z=new Map;let h=[c],g=l?0:Number.POSITIVE_INFINITY,E=!1;const b=[];let f=0,S=0,k=1,u=1,v="bereit",_=null,F=[],B=null;function K(N){return{status:v,message:N,current:_,children:F,frontier:[...a],visited:new Set(o),nodes:[...h],goalNode:B,path:B?bl(B):null,limit:l?g:null,neueRunde:E,runden:l?[...b,{limit:g,expanded:f}]:null,stats:{expanded:S,generated:k,maxFrontier:u,frontierSize:a.length,visitedSize:o.size}}}const O=()=>v==="gefunden"||v==="erschöpft"||v==="abgebrochen";function I(){if(E=!1,O())return"Die Suche ist beendet.";if(a.length===0)return l&&g<j?(b.push({limit:g,expanded:f}),g++,f=0,a=[c],o.clear(),z.clear(),h=[c],_=null,F=[],v="läuft",E=!0,`Runde ${g+1}: Bis Tiefe ${g-1} war kein Ziel — die Suche beginnt wieder ganz vorne, jetzt mit Tiefenlimit ${g}.`):(v="erschöpft",_=null,F=[],"Die Grenze ist leer — es gibt keinen Weg zum Ziel.");const N=ml(a,n),M=a[N];a=a.filter((ce,X)=>X!==N),_=M,F=[];const Y=je(M.state);if(l){const ce=z.get(Y);if(ce!==void 0&&ce<=M.depth)return v="läuft","Diesen Zustand kennen wir schon (nicht tiefer) — überspringen.";z.set(Y,M.depth)}else if(o.has(Y))return v="läuft","Diesen Zustand kennen wir schon — überspringen.";if(o.add(Y),fn(M.state))return B=M,v="gefunden",l?`Ziel gefunden in Runde ${g+1}, nach ${M.depth} Zügen.`:`Ziel gefunden nach ${M.depth} Zügen.`;if(M.depth>=g)return v="läuft",`Tiefenlimit ${g} erreicht — dieser Ast wird abgeschnitten.`;if(S++,f++,S>=t)return v="abgebrochen",`Abbruch nach ${t} expandierten Knoten — so weit kommt diese Suche hier nicht.`;for(const ce of Ae(M.state)){if(!l&&o.has(je(ce.state)))continue;const X=Jn(ce.state,M,ce.action,r);a.push(X),h.push(X),F.push(X),k++}return a.length>u&&(u=a.length),v="läuft",`Expandiert: ${M.action??"Startzustand"} — ${F.length} neue Knoten in die Grenze.`}function w(){return K(I())}function m(N){let M="";for(let Y=0;Y<N&&!O();Y++)M=I();return K(M)}return{step:w,run:m,snapshot:()=>K("Bereit. Die Grenze enthält nur den Startzustand.")}}const qn=40;function ve({strategies:s=["bfs","dfs","ucs"],start:n=me[1].state,title:i="Graphensuche Schritt für Schritt",speed:r=220,maxExpansions:t=6e3}){const[l,j]=D.useState(s[0]),[c,a]=D.useState("manhattan"),[o,z]=D.useState(n),[h,g]=D.useState(null),[E,b]=D.useState(!1),f=D.useRef(null),S=Hn[l],k=D.useCallback(()=>{const m=fl(o,l,{heuristic:zs[S.useHeuristic?c:"keine"],maxExpansions:t});f.current=m,g(m.snapshot()),b(!1)},[o,l,c,S.useHeuristic,t]);D.useEffect(()=>{k()},[k]);const u=D.useCallback((m=1)=>{const N=f.current;N&&g(m===1?N.step():N.run(m))},[]);D.useEffect(()=>{if(!E)return;const m=setInterval(()=>{const N=f.current?.step();N&&(g(N),N.neueRunde&&b(!1),N.status!=="läuft"&&N.status!=="bereit"&&b(!1))},r);return()=>clearInterval(m)},[E,r]);const v=D.useMemo(()=>h&&["gefunden","erschöpft","abgebrochen"].includes(h.status),[h]);if(!h)return null;const _=pl(h.frontier,l),F=new Set(h.children.map(m=>m.id)),B=Math.max(0,h.frontier.length-qn),K=l==="ids",O=l==="dfs"||K,I=O?B:0,w=O?h.frontier.slice(I):h.frontier.slice(0,qn);return e.jsxs("div",{className:d.wrapper,children:[e.jsx("p",{className:d.title,children:i}),e.jsxs("div",{className:d.controls,children:[e.jsx("span",{className:d.label,children:"Algorithmus"}),e.jsx("select",{className:d.select,value:l,onChange:m=>j(m.target.value),children:s.map(m=>e.jsx("option",{value:m,children:Hn[m].label},m))}),S.useHeuristic&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d.label,children:"Heuristik"}),e.jsxs("select",{className:d.select,value:c,onChange:m=>a(m.target.value),children:[e.jsx("option",{value:"manhattan",children:"Manhattan-Distanz"}),e.jsx("option",{value:"falschePlaetze",children:"falsche Plätze"}),e.jsx("option",{value:"keine",children:"keine (h = 0)"})]})]}),e.jsx("span",{className:d.label,children:"Start"}),e.jsx("select",{className:d.select,value:me.findIndex(m=>m.state.join()===o.join()),onChange:m=>z(me[Number(m.target.value)].state),children:me.map((m,N)=>e.jsx("option",{value:N,children:m.label},m.label))})]}),e.jsxs("div",{className:d.controls,children:[e.jsx("button",{type:"button",className:`${d.button} ${d.buttonPrimary}`,onClick:()=>u(1),disabled:v,children:"1 Schritt"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>u(10),disabled:v,children:"10 Schritte"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>b(!E),disabled:v,children:E?"Pause":"abspielen"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>u(Number.POSITIVE_INFINITY),disabled:v,children:"bis zum Ende"}),e.jsx("button",{type:"button",className:d.button,onClick:k,children:"zurücksetzen"})]}),e.jsx("p",{className:[d.message,h.status==="gefunden"?d.messageDone:"",h.neueRunde?d.messageRound:"",h.status==="erschöpft"||h.status==="abgebrochen"?d.messageFail:""].filter(Boolean).join(" "),children:h.message}),e.jsxs("div",{className:d.statGrid,children:[e.jsx("span",{className:d.statKey,children:"Grenze nimmt"}),e.jsxs("span",{className:d.statValue,children:[S.pick," — ",S.frontier]}),K&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d.statKey,children:"Runde"}),e.jsxs("span",{className:d.statValue,children:[h.limit+1," — Tiefenlimit ",h.limit]})]}),e.jsx("span",{className:d.statKey,children:"expandiert"}),e.jsx("span",{className:d.statValue,children:h.stats.expanded}),e.jsx("span",{className:d.statKey,children:"erzeugt"}),e.jsx("span",{className:d.statValue,children:h.stats.generated}),e.jsx("span",{className:d.statKey,children:"in der Grenze"}),e.jsxs("span",{className:d.statValue,children:[h.stats.frontierSize," (max. ",h.stats.maxFrontier,")"]}),e.jsx("span",{className:d.statKey,children:"besucht"}),e.jsx("span",{className:d.statValue,children:h.stats.visitedSize})]}),K&&e.jsxs("div",{className:d.rounds,children:[e.jsx("span",{className:d.roundsHint,children:"IDS sucht mehrmals: Jede Runde fängt wieder beim Startzustand an, darf aber eine Stufe tiefer gehen."}),e.jsx("div",{className:d.roundsList,children:h.runden.map((m,N)=>e.jsxs("span",{className:[d.roundChip,N===h.runden.length-1?d.roundChipAktiv:""].filter(Boolean).join(" "),children:["Runde ",m.limit+1," · Tiefe ≤ ",m.limit," · ",m.expanded," exp.",N<h.runden.length-1?" · kein Ziel":""]},m.limit))})]}),e.jsxs("div",{className:d.searchLayout,children:[e.jsxs("div",{className:d.column,children:[e.jsxs("p",{className:d.columnTitle,children:["Grenze (",h.stats.frontierSize,")"]}),e.jsxs("p",{className:d.frontierHint,children:[l==="bfs"&&"BFS nimmt den obersten Eintrag — den ältesten.",l==="dfs"&&"DFS nimmt den untersten Eintrag — den neuesten.",l==="ids"&&"IDS nimmt wie DFS den untersten Eintrag — aber nur bis zum Tiefenlimit.",!O&&l!=="bfs"&&`Gelb markiert ist der Knoten mit ${S.pick}.`]}),e.jsxs("div",{className:d.frontierList,children:[h.frontier.length===0&&e.jsx("span",{className:d.empty,children:"leer"}),B>0&&O&&e.jsxs("span",{className:d.empty,children:["… ",B," weitere darüber"]}),w.map((m,N)=>e.jsxs("div",{className:[d.frontierItem,N+I===_?d.frontierItemNext:"",F.has(m.id)?d.frontierItemNew:""].filter(Boolean).join(" "),children:[e.jsx(un,{state:m.state}),e.jsx("span",{className:d.frontierAction,children:m.action??"Start"}),e.jsxs("span",{className:d.frontierMeta,children:["g=",m.g,S.useHeuristic?` h=${m.h} f=${m.g+m.h}`:""]})]},m.id)),B>0&&!O&&e.jsxs("span",{className:d.empty,children:["… ",B," weitere darunter"]})]}),e.jsxs("p",{className:d.columnTitle,style:{marginTop:"1rem"},children:["Besucht (",h.stats.visitedSize,")"]}),e.jsxs("div",{className:d.visitedGrid,children:[h.stats.visitedSize===0&&e.jsx("span",{className:d.empty,children:"noch nichts"}),[...h.visited].slice(-60).map(m=>e.jsx(un,{state:m.split(",").map(Number),title:m},m))]})]}),e.jsxs("div",{className:d.column,children:[e.jsxs("p",{className:d.columnTitle,children:["Suchbaum",K?` — Runde ${h.limit+1}`:""]}),K&&e.jsx("p",{className:d.frontierHint,children:"Der Baum zeigt nur die aktuelle Runde — bei jedem Rundenwechsel beginnt er neu beim Startzustand."}),e.jsx(jl,{snapshot:h}),h.path&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:d.columnTitle,style:{marginTop:"1rem"},children:["Lösungsweg (",h.path.length-1," Züge)"]}),e.jsx("div",{className:d.pathStrip,children:h.path.map(m=>e.jsxs("div",{className:d.pathStep,children:[e.jsx(un,{state:m.state}),e.jsx("span",{children:m.action??"Start"})]},m.id))})]})]})]})]})}function pl(s,n){if(s.length===0)return-1;if(n==="bfs")return 0;if(n==="dfs"||n==="ids")return s.length-1;const i=t=>n==="ucs"?t.g:n==="greedy"?t.h:t.g+t.h;let r=0;for(let t=1;t<s.length;t++)i(s[t])<i(s[r])&&(r=t);return r}const Nn={manhattan:{label:"Manhattan-Distanz",fn:Ye},falschePlaetze:{label:"falsche Plätze",fn:pn}};function Kn({initial:s=me[0].state,showHeuristics:n=!1,title:i="Der Zustandsraum entsteht beim Spielen"}){const r=D.useRef(null),[,t]=D.useState(0),l=D.useCallback(()=>t(W=>W+1),[]),[j,c]=D.useState(s),[a,o]=D.useState(s),[z,h]=D.useState(0),[g,E]=D.useState(0),[b,f]=D.useState(null),[S,k]=D.useState(!0),[u,v]=D.useState(n),[_,F]=D.useState(n),[B,K]=D.useState("manhattan"),O=Nn[B].fn,I=fn(a);r.current===null&&(r.current=xn(s,je,Ae),Te(r.current,s,1));const w=r.current,m=D.useCallback(W=>{r.current=xn(W,je,Ae),Te(r.current,W,1),c(W),o(W),h(0),E(0),f(null),l()},[l]),N=D.useCallback((W,L)=>{if(I)return;const{schonBesucht:H,kreis:ge}=jn(w,W,L);o(L),h(oe=>oe+1),H&&E(oe=>oe+1),f(ge),l()},[w,l,I]),M=D.useCallback(W=>{if(I||W===je(a))return;const L=gs(w,je(a),W);if(!L)return;let H=a,ge=0,oe=null;for(const ae of L.slice(1)){const Sn=w.nodes.get(ae)?.state;if(!Sn)break;const{schonBesucht:Fs,kreis:Ps}=jn(w,H,Sn);Fs&&(ge+=1),oe=Ps,H=Sn}o(H),h(ae=>ae+L.length-1),E(ae=>ae+ge),f(oe),l()},[w,a,l,I]),Y=W=>{const L=Pn(a,W);L&&N(a,L)},ce=D.useCallback(W=>{I||(Te(w,j,W),f(null),l())},[w,j,l,I]),X=je(a),T=Ae(a),G=ms(b),he=new Set(T.map(W=>je(W.state))),{pos:U,tiefe:ie,baumKanten:ee,schleifen:We}=bs(w,je(j),{spalte:Sl,zeile:zl}),_e=fs(U,{rand:(S?3*ws:16)+10+(u?10:0)+(u&&_?10:0)}),Ce=W=>ie.get(W)??0,Ge=O(a),$e=Ce(X),Fe=nl(w).map(W=>{const L=Ce(W.key),H=O(W.state);return{key:W.key,state:W.state,g:L,h:H,f:L+H}}).sort((W,L)=>u?W.f-L.f||W.h-L.h||W.key.localeCompare(L.key):W.g-L.g||W.key.localeCompare(L.key)),nn=Fe[0]?.key??null,_s=new Set(Fe.map(W=>W.key));return e.jsxs("div",{className:d.wrapper,children:[e.jsx("p",{className:d.title,children:i}),e.jsxs("div",{className:d.controls,children:[e.jsx("span",{className:d.label,children:"Stellung"}),me.slice(0,4).map(W=>e.jsx("button",{type:"button",className:d.button,onClick:()=>m(W.state),children:W.label},W.label)),e.jsx("button",{type:"button",className:d.button,onClick:()=>m(Ss(30)),children:"mischen"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>m(j),disabled:z===0,children:"Baum leeren"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>ce(2),disabled:I,children:"bis Tiefe 2"}),e.jsx("button",{type:"button",className:d.button,onClick:()=>ce(3),disabled:I,children:"bis Tiefe 3"}),e.jsxs("label",{className:d.checkbox,children:[e.jsx("input",{type:"checkbox",checked:S,onChange:W=>k(W.target.checked)}),"Zahlen zeigen"]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:d.checkbox,children:[e.jsx("input",{type:"checkbox",checked:u,onChange:W=>v(W.target.checked)}),"h zeigen"]}),e.jsxs("label",{className:d.checkbox,children:[e.jsx("input",{type:"checkbox",checked:_,onChange:W=>F(W.target.checked),disabled:!u}),"f = g + h"]}),e.jsx("select",{className:d.select,value:B,onChange:W=>K(W.target.value),disabled:!u,children:Object.entries(Nn).map(([W,{label:L}])=>e.jsx("option",{value:W,children:L},W))})]})]}),e.jsxs("div",{className:d.spaceLayout,children:[e.jsxs("div",{children:[e.jsx("p",{className:d.columnTitle,children:"spielen"}),e.jsx("div",{className:d.board,children:a.map((W,L)=>{const H=Pn(a,L)!==null;return e.jsx("button",{type:"button",className:[d.tile,W===0?d.tileEmpty:"",H?d.tileMovable:"",W!==0&&W===Be[L]?d.tileCorrect:""].filter(Boolean).join(" "),onClick:()=>Y(L),disabled:W===0||I,children:W===0?"":W},L)})}),e.jsxs("div",{className:d.statGrid,style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:d.statKey,children:"key(state)"}),e.jsx("span",{className:d.statValue,children:X}),e.jsx("span",{className:d.statKey,children:"Züge gemacht"}),e.jsx("span",{className:d.statValue,children:z}),u&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:d.statKey,children:["h(state) — ",Nn[B].label]}),e.jsxs("span",{className:d.statValue,children:[Ge,Ge===0?" — am Ziel":""]})]}),u&&_&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d.statKey,children:"g(state) — Züge vom Start"}),e.jsx("span",{className:d.statValue,children:$e}),e.jsx("span",{className:d.statKey,children:"f = g + h"}),e.jsxs("span",{className:d.statValue,children:[$e," + ",Ge," = ",$e+Ge]})]}),e.jsx("span",{className:d.statKey,children:"Knoten (Zustände)"}),e.jsx("span",{className:d.statValue,children:w.nodes.size}),e.jsx("span",{className:d.statKey,children:"Kanten (Züge)"}),e.jsx("span",{className:d.statValue,children:w.edges.size}),e.jsx("span",{className:d.statKey,children:"Grenze (noch offen)"}),e.jsx("span",{className:d.statValue,children:Fe.length}),e.jsx("span",{className:d.statKey,children:"Schleifen im Graph"}),e.jsx("span",{className:d.statValue,children:We.length}),e.jsx("span",{className:d.statKey,children:"schon bekannt"}),e.jsx("span",{className:d.statValue,children:g})]}),I?e.jsxs("p",{className:d.goalNote,children:["Ziel erreicht — die Suche bricht ab. Der gefundene Weg ist"," ",$e," ",$e===1?"Zug":"Züge"," lang; die restliche Grenze wird nie mehr expandiert. Mit «Baum leeren» oder einer neuen Stellung geht es weiter."]}):b?e.jsxs("p",{className:d.cycleNote,children:["Schleife! Diese Stellung kannten wir schon — der Zug schliesst einen Kreis aus ",b.length," Zuständen."]}):e.jsx("p",{className:d.frontierHint,children:"Jeder Zug legt einen Knoten an — ausser die Stellung gibt es schon. Tipp: Klicken Sie rechts im Baum auf einen beliebigen Knoten, dann wandert das Puzzle dorthin."}),e.jsxs("p",{className:d.columnTitle,children:["Grenze (",Fe.length,") — sortiert nach"," ",u?"f = g + h":"g (Tiefe)"]}),e.jsxs("p",{className:d.frontierHint,children:["Das ist die ganze Warteschlange, nicht nur die Nachfolger der aktuellen Stellung. Oben steht der Knoten, den"," ",u?e.jsxs(e.Fragment,{children:["A",e.jsx("sup",{children:"*"})]}):"die Breitensuche"," ","als Nächstes expandieren würde — er ist im Baum"," ",e.jsx("span",{style:{color:"var(--color-orange)"},children:"orange"})," ","umrandet. Ein Klick expandiert ihn (das Puzzle wandert dorthin)."]}),e.jsx("div",{className:d.controls,style:{marginBottom:"0.5rem"},children:e.jsx("button",{type:"button",className:d.button,onClick:()=>nn&&M(nn),disabled:!nn||I,children:"nächsten Knoten expandieren"})}),e.jsxs("div",{className:d.frontierList,children:[Fe.map((W,L)=>{const H=he.has(W.key);return e.jsxs("button",{type:"button",className:[d.frontierItem,L===0?d.frontierItemNext:"",H?d.frontierItemNew:""].filter(Boolean).join(" "),style:{cursor:I?"default":"pointer",textAlign:"left"},onClick:()=>M(W.key),disabled:I,children:[e.jsxs("span",{className:d.frontierMeta,children:[L+1,"."]}),e.jsx("span",{className:d.frontierAction,children:W.key}),e.jsx("span",{className:d.frontierMeta,children:u?`g=${W.g} h=${W.h} f=${W.f}`:`g=${W.g}`}),H&&e.jsx("span",{className:d.frontierMeta,children:"ein Zug"})]},W.key)}),Fe.length===0&&e.jsx("p",{className:d.empty,children:"Die Grenze ist leer."})]})]}),e.jsxs("div",{className:d.column,children:[e.jsxs("p",{className:d.columnTitle,children:["Zustandsraum als Suchbaum — ",w.nodes.size," Knoten, ",w.edges.size," ","Kanten"]}),e.jsx("div",{className:d.graphBox,children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:`${_e.x} ${_e.y} ${_e.w} ${_e.h}`,role:"img","aria-label":"Zustandsraum als Suchbaum",children:[e.jsx("title",{children:"Zustandsraum: Knoten sind Stellungen, Kanten sind Züge"}),ee.map(({id:W,von:L,nach:H})=>{const ge=U.get(L),oe=U.get(H);if(!ge||!oe)return null;const ae=L===X||H===X;return e.jsx("path",{d:ps(ge,oe),fill:"none",stroke:ae?"var(--color-yellow)":"var(--color-bg-lighter)",strokeWidth:ae?2:1.2},W)}),We.map(({id:W,von:L,nach:H})=>{const ge=U.get(L),oe=U.get(H);if(!ge||!oe)return null;const ae=G.has(W);return e.jsx("path",{d:ks(ge,oe),fill:"none",stroke:ae?"var(--color-red)":"var(--color-purple)",strokeWidth:ae?2.5:1.2,strokeDasharray:ae?"none":"4 3",opacity:ae?1:.7},W)}),[...w.nodes.values()].map(W=>{const L=U.get(W.key);return L?e.jsx(kl,{node:W,x:L.x,y:L.y,aktiv:W.key===X,inGrenze:_s.has(W.key),istNaechster:W.key===nn,imKreis:b?.includes(W.key)??!1,zeigeZahlen:S,hWert:u?O(W.state):null,hAktuell:Ge,gWert:u&&_?Ce(W.key):null,onClick:()=>M(W.key)},W.key):null})]})}),e.jsxs("div",{className:d.legend,children:[e.jsx(Pe,{farbe:"var(--color-yellow)",text:"aktuelle Stellung"}),e.jsx(Pe,{farbe:"var(--color-orange)",text:"als Nächstes dran (kleinstes f)"}),e.jsx(Pe,{farbe:"var(--color-blue)",text:"Grenze (noch offen)"}),e.jsx(Pe,{farbe:"var(--color-gray)",text:"besucht / expandiert"}),e.jsx(Pe,{farbe:"var(--color-aqua)",text:"Zielstellung"}),e.jsx(Pe,{farbe:"var(--color-purple)",text:"Schleife (Rückkante)"}),e.jsx("span",{children:"Jede Zeile = ein Zug weiter vom Start weg"}),e.jsx("span",{children:"Klick auf einen Knoten: dorthin springen"}),u&&e.jsxs("span",{children:["Die Zahl unter jedem Knoten ist ",e.jsx("code",{children:"h"})," — grün: näher am Ziel als jetzt, rot: weiter weg"]}),u&&_&&e.jsxs("span",{children:["Darunter ",e.jsx("code",{children:"g"})," (Züge vom Start) und"," ",e.jsx("code",{children:"f = g + h"})," — die Zahl, nach der A",e.jsx("sup",{children:"*"})," ","auswählt"]})]})]})]})]})}function kl({node:s,x:n,y:i,aktiv:r,inGrenze:t,istNaechster:l,imKreis:j,zeigeZahlen:c,hWert:a,hAktuell:o,gWert:z,onClick:h}){const g=fn(s.state),E=r?"var(--color-yellow)":j?"var(--color-red)":l?"var(--color-orange)":g?"var(--color-aqua)":t?"var(--color-blue)":"var(--color-gray)",b=a===null?"transparent":a===0?"var(--color-aqua)":a<o?"var(--color-green)":a>o?"var(--color-red)":"var(--color-gray-light)";if(!c)return e.jsxs("g",{role:"button",tabIndex:0,"aria-label":`Stellung ${s.key}`,onClick:h,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&h()},style:{cursor:"pointer"},children:[e.jsx("title",{children:s.key}),e.jsx("circle",{cx:n,cy:i,r:r||l?8:t?5:4,fill:E}),a!==null&&e.jsx("text",{x:n,y:i+13,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:9,fontWeight:r?700:400,fill:b,children:a}),a!==null&&z!==null&&e.jsxs("text",{x:n,y:i+23,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:8,fill:"var(--color-gray-light)",children:["f=",z+a]})]});const f=ws,S=n-3*f/2,k=i-3*f/2;return e.jsxs("g",{role:"button",tabIndex:0,"aria-label":`Stellung ${s.key}`,onClick:h,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&h()},style:{cursor:"pointer"},children:[e.jsx("title",{children:s.key}),e.jsx("rect",{x:S-2,y:k-2,width:3*f+4,height:3*f+4,rx:3,fill:"var(--color-bg)",stroke:E,strokeWidth:r||j||l?2.5:1.2}),s.state.map((u,v)=>e.jsx("text",{x:S+v%3*f+f/2,y:k+Math.floor(v/3)*f+f/2,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:f*.72,fill:u===0?"transparent":r||l||t?"var(--color-fg)":"var(--color-gray)",children:u},v)),a!==null&&e.jsxs("text",{x:n,y:k+3*f+9,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:9,fontWeight:r?700:400,fill:b,children:["h=",a]}),a!==null&&z!==null&&e.jsxs("text",{x:n,y:k+3*f+19,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:8,fontWeight:r?700:400,fill:"var(--color-gray-light)",children:["g=",z," f=",z+a]})]})}function Pe({farbe:s,text:n}){return e.jsxs("span",{className:d.legendItem,children:[e.jsx("span",{className:d.legendDot,style:{backgroundColor:s}}),n]})}const ws=9,Sl=42,zl=56;function wl({start:s=me[2].state,showHeuristics:n=!1,title:i="Ein Zustand und seine Nachfolger"}){const[r,t]=D.useState(s),l=Ae(r);return e.jsxs("div",{className:d.wrapper,children:[e.jsx("p",{className:d.title,children:i}),e.jsxs("div",{className:d.puzzleLayout,children:[e.jsxs("div",{children:[e.jsx("p",{className:d.columnTitle,children:"Zustand"}),e.jsx("div",{className:d.board,style:{gridTemplateColumns:"repeat(3, 44px)",gridTemplateRows:"repeat(3, 44px)"},children:r.map((j,c)=>e.jsx("div",{className:[d.tile,j===0?d.tileEmpty:""].filter(Boolean).join(" "),style:{fontSize:"1.1rem"},children:j===0?"":j},c))}),e.jsxs("div",{className:d.statGrid,style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:d.statKey,children:"key(state)"}),e.jsx("span",{className:d.statValue,children:r.join(",")}),e.jsx("span",{className:d.statKey,children:"Nachfolger"}),e.jsx("span",{className:d.statValue,children:l.length}),n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d.statKey,children:"Manhattan"}),e.jsx("span",{className:d.statValue,children:Ye(r)}),e.jsx("span",{className:d.statKey,children:"falsche Plätze"}),e.jsx("span",{className:d.statValue,children:pn(r)})]})]})]}),e.jsxs("div",{className:d.panel,children:[e.jsx("p",{className:d.columnTitle,children:"successors(state) — klicken Sie einen Nachfolger an"}),e.jsx("div",{className:d.frontierList,children:l.map(j=>e.jsxs("button",{type:"button",className:d.frontierItem,style:{cursor:"pointer",textAlign:"left"},onClick:()=>t(j.state),children:[e.jsx(un,{state:j.state}),e.jsx("span",{className:d.frontierAction,children:j.action}),e.jsxs("span",{className:d.frontierMeta,children:["Kosten ",j.cost,n?` · h=${Ye(j.state)}`:""]})]},j.action))}),e.jsx("div",{className:d.controls,style:{marginTop:"0.75rem"},children:e.jsx("button",{type:"button",className:d.button,onClick:()=>t(s),children:"zurücksetzen"})})]})]})]})}function vl({title:s="Suchbaum ist nicht Zustandsraum"}){return e.jsxs("div",{className:d.wrapper,children:[e.jsx("p",{className:d.title,children:s}),e.jsxs("div",{className:d.diagramPair,children:[e.jsxs("figure",{className:d.diagram,children:[e.jsx("figcaption",{className:d.columnTitle,children:"Suchbaum — klappt immer weiter auf"}),e.jsxs("svg",{viewBox:"0 0 360 250",width:"100%",height:"250",role:"img","aria-label":"Suchbaum mit doppelt vorkommenden Zuständen",fontFamily:"inherit",children:[e.jsx("title",{children:"Suchbaum: der Startzustand taucht nach zwei Zügen wieder auf"}),e.jsx(xe,{x1:180,y1:46,x2:95,y2:104,label:"Zug a"}),e.jsx(xe,{x1:180,y1:46,x2:265,y2:104,label:"Zug b"}),e.jsx(xe,{x1:95,y1:136,x2:50,y2:194,label:"zurück"}),e.jsx(xe,{x1:95,y1:136,x2:140,y2:194}),e.jsx(xe,{x1:265,y1:136,x2:220,y2:194,label:"zurück"}),e.jsx(xe,{x1:265,y1:136,x2:310,y2:194}),e.jsx(ue,{x:180,y:30,text:"Start",farbe:"var(--color-yellow)"}),e.jsx(ue,{x:95,y:120,text:"A"}),e.jsx(ue,{x:265,y:120,text:"B"}),e.jsx(ue,{x:50,y:210,text:"Start",farbe:"var(--color-red)"}),e.jsx(ue,{x:140,y:210,text:"C"}),e.jsx(ue,{x:220,y:210,text:"Start",farbe:"var(--color-red)"}),e.jsx(ue,{x:310,y:210,text:"D"})]}),e.jsx("p",{className:d.diagramNote,children:"Rot: schon bekannte Stellungen, die der Baum trotzdem noch einmal erzeugt. Ohne Gegenmassnahme wächst er unendlich."})]}),e.jsxs("figure",{className:d.diagram,children:[e.jsx("figcaption",{className:d.columnTitle,children:"Zustandsraum — endlicher Graph"}),e.jsxs("svg",{viewBox:"0 0 360 250",width:"100%",height:"250",role:"img","aria-label":"Derselbe Ausschnitt als Graph",fontFamily:"inherit",children:[e.jsx("title",{children:"Zustandsraum: gleiche Zustände sind ein einziger Knoten"}),e.jsx(xe,{x1:180,y1:46,x2:95,y2:104,label:"Zug a",beidseitig:!0}),e.jsx(xe,{x1:180,y1:46,x2:265,y2:104,label:"Zug b",beidseitig:!0}),e.jsx(xe,{x1:95,y1:136,x2:140,y2:194,beidseitig:!0}),e.jsx(xe,{x1:265,y1:136,x2:220,y2:194,beidseitig:!0}),e.jsx(xe,{x1:140,y1:210,x2:220,y2:210,beidseitig:!0}),e.jsx(ue,{x:180,y:30,text:"Start",farbe:"var(--color-yellow)"}),e.jsx(ue,{x:95,y:120,text:"A"}),e.jsx(ue,{x:265,y:120,text:"B"}),e.jsx(ue,{x:140,y:210,text:"C"}),e.jsx(ue,{x:220,y:210,text:"D"})]}),e.jsx("p",{className:d.diagramNote,children:"Jeder Zustand kommt genau einmal vor. Jede Kante lässt sich in beide Richtungen gehen — deshalb entstehen Kreise."})]})]})]})}function ue({x:s,y:n,text:i,farbe:r="var(--color-blue)"}){const t=i.length>2?62:40;return e.jsxs("g",{children:[e.jsx("rect",{x:s-t/2,y:n-16,width:t,height:32,rx:6,fill:"var(--color-bg)",stroke:r,strokeWidth:2}),e.jsx("text",{x:s,y:n,textAnchor:"middle",dominantBaseline:"central",fontSize:14,fill:r,children:i})]})}function xe({x1:s,y1:n,x2:i,y2:r,label:t,beidseitig:l=!1}){const j=(s+i)/2,c=(n+r)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:s,y1:n,x2:i,y2:r,stroke:"var(--color-gray)",strokeWidth:1.5}),l&&e.jsxs(e.Fragment,{children:[e.jsx(Dn,{x1:s,y1:n,x2:i,y2:r}),e.jsx(Dn,{x1:i,y1:r,x2:s,y2:n})]}),!l&&e.jsx(Dn,{x1:s,y1:n,x2:i,y2:r}),t&&e.jsx("text",{x:j+6,y:c,textAnchor:"start",dominantBaseline:"central",fontSize:11,fill:"var(--color-gray)",children:t})]})}function Dn({x1:s,y1:n,x2:i,y2:r}){const t=i-s,l=r-n,j=Math.hypot(t,l)||1,c=t/j,a=l/j,o=i-c*2,z=r-a*2,h=7,g=3.5,E=`${o},${z}`,b=`${o-c*h-a*g},${z-a*h+c*g}`,f=`${o-c*h+a*g},${z-a*h-c*g}`;return e.jsx("polygon",{points:`${E} ${b} ${f}`,fill:"var(--color-gray)"})}function Al(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Klassische KI"}),e.jsx("h2",{children:"Probleme lösen mit Graphensuche"}),e.jsx("p",{children:"Alles am Beispiel des Schiebepuzzles"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"KI ohne Lernen"}),e.jsxs("p",{children:["Wenn heute von KI die Rede ist, meint man fast immer"," ",e.jsx("strong",{children:"maschinelles Lernen"}),": ein System, das aus Daten Muster zieht. Die KI, die Schach spielt, eine Route plant oder ein Rätsel löst, funktioniert anders. Sie lernt nichts. Sie"," ",e.jsx("strong",{children:"sucht"}),"."]}),e.jsxs("p",{children:["Wir schauen uns das an einem einzigen Beispiel an, das wir die ganze Woche nicht mehr loslassen: dem ",e.jsx("strong",{children:"Schiebepuzzle"}),". Acht Steine, ein leeres Feld, und die Frage: Wie kommt man mit möglichst wenigen Zügen zur geordneten Stellung?"]})]})}),e.jsx(Zn,{title:"Zuerst selbst: Lösen Sie das Puzzle von Hand"}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was haben Sie gerade getan?"}),e.jsx("p",{children:"Sie haben ein Feld angeschaut, überlegt, welcher Zug sinnvoll ist, ihn gemacht und von vorne begonnen. Vielleicht haben Sie einen Zug zurückgenommen, weil er in eine Sackgasse führte."}),e.jsxs("p",{children:["Genau das macht ein Suchalgorithmus auch — nur ohne Intuition, dafür unermüdlich und systematisch. Damit er das kann, müssen wir drei Dinge sauber aufschreiben: ",e.jsx("strong",{children:"Zustand"}),","," ",e.jsx("strong",{children:"Aktion"})," und ",e.jsx("strong",{children:"Ziel"}),"."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Zustand"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Zustand"})," ist eine vollständige Momentaufnahme: alles, was man wissen muss, um weiterzuspielen. Beim Schiebepuzzle ist das die Position jedes Steins — mehr nicht. Wie viele Züge wir schon gemacht haben, gehört ",e.jsx("em",{children:"nicht"})," zum Zustand."]}),e.jsx(Q,{lang:"javascript",filename:"zustand.js",children:`// Die Stellung
//   1  2  3
//   4  5  6
//   7  ·  8
// schreiben wir einfach als Liste, 0 ist das leere Feld:
const state = [1, 2, 3, 4, 5, 6, 7, 0, 8];

// Der Zielzustand ist fix:
const GOAL = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// Zieltest: sind wir da?
const isGoal = (state) => state.join() === GOAL.join();

// Und ein eindeutiger Schlüssel, damit wir erkennen,
// ob wir diese Stellung schon einmal gesehen haben:
const key = (state) => state.join(",");

console.log(key(state));   // "1,2,3,4,5,6,7,0,8"
console.log(isGoal(state)); // false`}),e.jsxs("p",{children:["Diese Schlüssel-Funktion ist wichtiger, als sie aussieht. Zwei Arrays mit gleichem Inhalt sind in JavaScript nicht gleich (",e.jsx("code",{children:"[1,2] === [1,2]"})," ist ",e.jsx("code",{children:"false"}),"). Über den Schlüssel können wir Zustände trotzdem in einem ",e.jsx("code",{children:"Set"})," ","sammeln."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Aktionen und Nachfolger"}),e.jsxs("p",{children:["Eine ",e.jsx("strong",{children:"Aktion"})," führt von einem Zustand in einen anderen. Beim Schiebepuzzle schiebt sie einen Stein ins leere Feld. Je nachdem, wo das leere Feld liegt, gibt es unterschiedlich viele Möglichkeiten:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"leeres Feld in der Ecke: 2 Züge"}),e.jsx("li",{children:"leeres Feld am Rand: 3 Züge"}),e.jsx("li",{children:"leeres Feld in der Mitte: 4 Züge"})]}),e.jsxs("p",{children:["Im Schnitt sind das etwa 3 — der ",e.jsx("strong",{children:"Verzweigungsgrad"})," ",e.jsx("code",{children:"b"}),". Die Funktion ",e.jsx("code",{children:"successors(state)"})," liefert alle Nachfolger auf einmal. Probieren Sie sie unten aus: Jeder Klick ist ein Zug, jeder Zug erzeugt eine neue Liste von Möglichkeiten."]})]})}),e.jsx(wl,{title:"successors(state): ein Zustand, alle Folgezustände"}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Nachfolger im Code"}),e.jsx(Q,{lang:"javascript",filename:"successors.js",children:`function successors(state) {
  const leer = state.indexOf(0);
  const zeile = Math.floor(leer / 3);
  const spalte = leer % 3;
  const ergebnis = [];

  const richtungen = [
    { name: "hoch", dz: -1, ds: 0 },
    { name: "runter", dz: 1, ds: 0 },
    { name: "links", dz: 0, ds: -1 },
    { name: "rechts", dz: 0, ds: 1 },
  ];

  for (const r of richtungen) {
    const z = zeile + r.dz;
    const s = spalte + r.ds;
    if (z < 0 || z > 2 || s < 0 || s > 2) continue; // Brettrand

    const von = z * 3 + s;
    const next = [...state];      // WICHTIG: Kopie!
    next[leer] = next[von];
    next[von] = 0;
    ergebnis.push({ action: \`\${next[leer]} \${r.name}\`, cost: 1, state: next });
  }
  return ergebnis;
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Die Kopie ist Pflicht."})," Würden wir"," ",e.jsx("code",{children:"state"})," direkt verändern, würden wir auch alle schon gespeicherten Knoten verändern, die auf dasselbe Array zeigen. Die Suche würde ihre eigene Vergangenheit zerstören."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Zustandsraum"}),e.jsxs("p",{children:["Alle erreichbaren Zustände zusammen bilden den"," ",e.jsx("strong",{children:"Zustandsraum"}),". Er ist ein ",e.jsx("strong",{children:"Graph"}),": Knoten sind Stellungen, Kanten sind Züge."]}),e.jsxs("p",{children:["Beim 3×3-Puzzle gibt es ",e.jsx("code",{children:"9! = 362'880"})," Anordnungen. Davon ist genau die Hälfte erreichbar: ",e.jsx("strong",{children:"181'440 Zustände"}),". Die andere Hälfte ist unlösbar — man kommt von dort nie zum Ziel, egal wie lange man schiebt. (Probieren Sie oben die Stellung «unlösbar».)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Der zentrale Trick:"})," Wir zeichnen diesen Graphen nie. Wir kennen nur den Startzustand und die Funktion"," ",e.jsx("code",{children:"successors"}),". Der Algorithmus klappt den Graphen genau so weit auf, wie er ihn braucht."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Kn,{title:"Spielen Sie — und der Zustandsraum entsteht"})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was Sie dabei sehen"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Jeder Knoten zeigt die ",e.jsx("strong",{children:"Stellung als Zahlen"})," — das ist genau das Array ",e.jsx("code",{children:"[1,2,3,…]"}),", mit dem der Algorithmus rechnet."]}),e.jsxs("li",{children:["Von der aktuellen Stellung aus sind"," ",e.jsx("strong",{children:"immer alle Nachfolger"})," eingezeichnet (grau). Ein Klick darauf — oder auf einen Stein links — führt den Zug aus."]}),e.jsxs("li",{children:["Gezeichnet wird wie bei BFS:"," ",e.jsx("strong",{children:"jede Zeile ist ein Zug weiter"})," vom Start weg. Die Stellungen stehen also nach Tiefe geordnet — und das Bild bleibt stabil."]}),e.jsxs("li",{children:["Landen Sie auf einer Stellung, die Sie schon besucht haben, entsteht ",e.jsx("strong",{children:"kein neuer Knoten"}),": übrig bleibt eine zusätzliche Kante — eine ",e.jsx("strong",{children:"Schleife"})," (violett gestrichelt, frisch geschlossen rot). Genau daran erkennt man, dass der Zustandsraum ein Graph ist und kein Baum."]}),e.jsxs("li",{children:["Mit ",e.jsx("em",{children:"Tiefe 2"})," bzw. ",e.jsx("em",{children:"Tiefe 3"})," klappen Sie alles systematisch auf. Nach drei Zügen stehen schon über 20 Zustände da — bei 181'440 insgesamt."]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Dasselbe nochmal: Pfannkuchen sortieren"}),e.jsxs("p",{children:["Damit klar wird, dass an all dem nichts",e.jsx("em",{children:" puzzle"}),"-spezifisch ist, hier ein zweites Problem. Auf einem Teller liegt ein Stapel Pfannkuchen, alle verschieden gross. Sie haben nur einen Wender: Sie schieben ihn irgendwo in den Stapel und drehen ",e.jsx("strong",{children:"alles darüber"})," auf einmal um. Ziel: kleinster Pfannkuchen oben, grösster unten."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Zustand:"})," die Reihenfolge der Grössen, z. B."," ",e.jsx("code",{children:"[3,1,4,2]"})," — oben die 3, unten die 2."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Aktion:"})," ",e.jsx("code",{children:"wende k"})," dreht die obersten"," ",e.jsx("code",{children:"k"})," Pfannkuchen um."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Verzweigungsgrad:"})," immer genau ",e.jsx("code",{children:"n − 1"})," ","— bei vier Pfannkuchen also 3, egal wie der Stapel aussieht."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zustandsraum:"})," alle Reihenfolgen, also"," ",e.jsx("code",{children:"n!"})," — bei fünf Pfannkuchen 120 Stück."]})]}),e.jsxs("p",{children:["Die Suchalgorithmen interessiert das nicht: Sie brauchen nur"," ",e.jsx("code",{children:"key"}),", ",e.jsx("code",{children:"successors"})," und ",e.jsx("code",{children:"isGoal"}),". Spielen Sie unten — der Graph entsteht genau gleich wie beim Puzzle."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(tl,{title:"Pfannkuchen wenden — derselbe Zustandsraum, ein anderes Problem"})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Suchbaum ist nicht Zustandsraum"}),e.jsxs("p",{children:["Wenn wir vom Start aus alle Züge aufklappen, entsteht ein"," ",e.jsx("strong",{children:"Suchbaum"}),". Darin kommt dieselbe Stellung immer wieder vor — jeder Zug lässt sich ja sofort rückgängig machen:"]}),e.jsx(vl,{title:"Derselbe Ausschnitt — einmal als Baum, einmal als Graph"}),e.jsxs("p",{children:["Ohne Gegenmassnahme wächst der Suchbaum unendlich, obwohl der Zustandsraum endlich ist. Darum führt jede Suche eine Menge"," ",e.jsx("strong",{children:"besucht"})," mit und wirft Zustände weg, die sie schon kennt. Aus dem Baum wird so wieder ein Graph."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die zwei Mengen"}),e.jsx("p",{children:"Jede Graphensuche verwaltet genau zwei Mengen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Grenze"})," (",e.jsx("em",{children:"frontier"}),") — Zustände, die wir kennen, aber noch nicht untersucht haben. Der Rand unseres Wissens."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Besucht"})," (",e.jsx("em",{children:"visited"}),") — Zustände, die wir bereits abgehakt haben. Ohne diese Menge dreht sich die Suche im Kreis."]})]}),e.jsxs("p",{children:["Dazu merkt sich jeder Knoten seinen ",e.jsx("strong",{children:"Vorgänger"}),". Erst dadurch können wir am Schluss den Weg rückwärts zusammensetzen — die Suche findet ja nicht «den Weg», sondern nur den Zielknoten."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Kern in 15 Zeilen"}),e.jsx(Q,{lang:"javascript",filename:"search.js",children:`function search(start, frontier) {
  frontier.push({ state: start, parent: null, action: null });
  const visited = new Set();

  while (frontier.size > 0) {
    const node = frontier.pop();          // <- hier entscheidet sich alles

    if (visited.has(key(node.state))) continue;   // schon gesehen
    visited.add(key(node.state));

    if (isGoal(node.state)) return pfadZurueck(node);

    for (const edge of successors(node.state)) {
      frontier.push({ state: edge.state, parent: node, action: edge.action });
    }
  }
  return null;  // kein Weg gefunden
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Das ist der ganze Algorithmus."})," BFS, DFS, UCS, Greedy und A",e.jsx("sup",{children:"*"})," unterscheiden sich einzig darin, welchen Knoten ",e.jsx("code",{children:"frontier.pop()"})," zurückgibt."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Breitensuche (BFS)"}),e.jsxs("p",{children:["Die Grenze ist eine ",e.jsx("strong",{children:"Warteschlange"})," (FIFO): Wer zuerst gefunden wurde, wird zuerst untersucht. Dadurch wird der Graph in Ringen abgearbeitet — zuerst alle Stellungen nach einem Zug, dann alle nach zwei Zügen, und so weiter."]}),e.jsxs("p",{children:["Schauen Sie der Suche unten zu. Achten Sie auf drei Dinge: Der gelb markierte Eintrag in der Grenze ist immer der"," ",e.jsx("strong",{children:"oberste"}),". Neue Knoten kommen immer"," ",e.jsx("strong",{children:"unten"})," dazu. Und der Suchbaum wächst"," ",e.jsx("strong",{children:"Spalte für Spalte"}),", nicht in die Tiefe."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["bfs"],title:"Breitensuche beobachten — Schritt für Schritt"})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was BFS kann und was es kostet"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Vollständig:"})," ja. Wenn es eine Lösung gibt, findet BFS sie."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimal:"})," ja — aber nur, weil beim Puzzle jeder Zug gleich viel kostet. BFS zählt Züge, nicht Kosten."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preis:"})," der Speicher. Bei Verzweigungsgrad"," ",e.jsx("code",{children:"b"})," und Lösungstiefe ",e.jsx("code",{children:"d"})," liegen bis zu"," ",e.jsx("code",{children:"b^d"})," Knoten gleichzeitig in der Grenze."]})]}),e.jsxs("p",{children:["Beim 14-Zug-Puzzle sind das rund 2'900 expandierte Knoten und eine Grenze von etwa 2'000 Einträgen — für ein Rätsel, das Sie in zwei Minuten von Hand lösen. Beim 4×4-Puzzle mit seinen 10",e.jsx("sup",{children:"13"})," ","Zuständen ist BFS chancenlos."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Tiefensuche (DFS)"}),e.jsxs("p",{children:["Wir ändern ",e.jsx("strong",{children:"eine einzige Zeile"}),": Die Grenze ist jetzt ein ",e.jsx("strong",{children:"Stapel"})," (LIFO), der zuletzt gefundene Zustand kommt zuerst dran. Die Suche rennt einem Pfad nach, so tief sie kann."]}),e.jsx("p",{children:"Beobachten Sie denselben Startzustand mit DFS. Der Suchbaum wird zu einem langen Faden, der immer tiefer läuft — und die gefundene «Lösung» hat Hunderte von Zügen. Oft bricht die Demo sogar vorher ab: Nach 6'000 expandierten Knoten hört sie im Browser auf, obwohl die Stellung in vier Zügen lösbar wäre."})]})}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["dfs","bfs"],title:"Tiefensuche — dieselbe Stellung, ein anderer Zugriff"})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"DFS im Urteil"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Speicher:"})," hervorragend — nur der aktuelle Pfad plus Abzweigungen, also ",e.jsx("code",{children:"b · d"})," statt ",e.jsx("code",{children:"b^d"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimal:"})," nein, überhaupt nicht. Lässt man DFS im Repo ohne Abbruchgrenze laufen, findet sie für die 14-Zug-Stellung einen Weg mit ",e.jsx("strong",{children:"113'358 Zügen"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vollständig:"})," nur mit Besucht-Menge und endlichem Zustandsraum. Sonst läuft DFS für immer in eine Richtung."]})]}),e.jsxs("p",{children:["Beides sind gültige Lösungen — jeder einzelne Zug ist erlaubt, und am Ende steht die Zielstellung. Nur würde kein Mensch die zweite «Lösung» nennen. ",e.jsx("em",{children:"Gültig"})," und ",e.jsx("em",{children:"gut"})," ist nicht dasselbe."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Iterative Tiefensuche (IDS)"}),e.jsxs("p",{children:["DFS braucht wenig Speicher, findet aber irgendeinen Weg. BFS findet den kürzesten, frisst aber Speicher. Die"," ",e.jsx("strong",{children:"iterative Tiefensuche"})," nimmt von beiden das Gute — mit einem Trick, der zuerst verschwenderisch aussieht:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Mache eine Tiefensuche, die bei Tiefe ",e.jsx("code",{children:"0"})," stoppt."]}),e.jsx("li",{children:"Nichts gefunden? Fang von vorne an, diesmal bis Tiefe 1."}),e.jsx("li",{children:"Nichts gefunden? Von vorne bis Tiefe 2 — und so weiter, bis das Ziel auftaucht."})]}),e.jsxs("p",{children:["Jede Runde ist eine ganz normale Tiefensuche mit einem"," ",e.jsx("strong",{children:"Tiefenlimit"}),". Weil die Runden der Reihe nach immer tiefer gehen, wird das Ziel zuerst auf seiner kleinsten Tiefe gefunden — genau wie bei BFS. Gespeichert wird aber immer nur ein Pfad, also ",e.jsx("code",{children:"b · d"})," statt ",e.jsx("code",{children:"b^d"}),"."]}),e.jsxs("p",{children:["«Aber da wird doch alles mehrfach durchsucht!» — stimmt, und es macht wenig aus. Bei Verzweigungsgrad ",e.jsx("code",{children:"b ≈ 3"})," liegen in der untersten Ebene etwa so viele Knoten wie in allen Ebenen darüber zusammen. Die wiederholten Runden kosten darum nur einen konstanten Faktor, ungefähr ",e.jsx("code",{children:"b / (b - 1)"})," — also rund 1.5-mal so viel Arbeit wie eine einzige Suche bis zur richtigen Tiefe."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"IDS beobachten"}),e.jsxs("p",{children:["Wichtig beim Zuschauen: Die Demo zeigt immer nur"," ",e.jsx("strong",{children:"eine Runde"}),". Ist die Grenze leer, war in dieser Tiefe kein Ziel — dann beginnt alles wieder beim Startzustand, der Suchbaum wird gelöscht und wächst eine Stufe tiefer neu auf. Das ist kein Fehler, sondern genau der Trick. Die Leiste über der Anzeige protokolliert die bisherigen Runden mit ihrem Tiefenlimit, und beim Abspielen hält die Demo an jedem Rundenwechsel kurz an."]}),e.jsx("p",{children:"Der gefundene Weg ist am Ende gleich lang wie bei BFS, die Grenze bleibt aber die ganze Zeit winzig — vergleichen Sie die Zeile «in der Grenze (max.)» mit derjenigen von BFS."})]})}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["ids","dfs","bfs"],maxExpansions:4e4,speed:60,title:"Iterative Tiefensuche — Runde für Runde eine Stufe tiefer"})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"IDS im Urteil"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Speicher:"})," so gut wie DFS — ",e.jsx("code",{children:"b · d"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimal:"})," ja, wenn alle Züge gleich viel kosten — wie bei BFS."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vollständig:"})," ja, auch in unendlich tiefen Räumen, weil kein Ast unendlich weit verfolgt wird."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preis:"})," dieselben Knoten werden mehrfach besucht — Rechenzeit gegen Speicher getauscht."]})]}),e.jsx("p",{children:"Darum ist IDS das Standardverfahren, wenn man uninformiert sucht, den kürzesten Weg braucht und der Speicher knapp ist."})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kostensuche (UCS)"}),e.jsxs("p",{children:["Beim Puzzle kostet jeder Zug gleich viel. In der Realität nicht: Eine Autobahn ist nicht gleich teuer wie ein Feldweg. Darum bekommt jede Kante Kosten, und jeder Knoten merkt sich ",e.jsx("code",{children:"g"})," — die Summe der Kosten vom Start bis hierher."]}),e.jsxs("p",{children:["Die Grenze wird zur ",e.jsx("strong",{children:"Prioritätswarteschlange"}),": Immer der Knoten mit dem kleinsten ",e.jsx("code",{children:"g"})," kommt dran. Das ist exakt der ",e.jsx("strong",{children:"Dijkstra-Algorithmus"}),"."]}),e.jsxs("p",{children:["Stellen Sie unten UCS ein. Sie werden kaum einen Unterschied zu BFS sehen — und das ist die richtige Beobachtung: Wenn alle Kanten 1 kosten, ist ",e.jsx("code",{children:"g"})," nichts anderes als die Anzahl Züge."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["bfs","dfs","ids","ucs"],title:"Alle vier im direkten Vergleich"})}),e.jsx(x,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die vier Algorithmen auf einen Blick"}),e.jsx(us,{caption:"b = Verzweigungsgrad (≈ 3 beim Schiebepuzzle), d = Tiefe der Lösung."}),e.jsxs("p",{children:["Alle vier sind ",e.jsx("strong",{children:"uninformiert"}),": Sie wissen nichts über das Puzzle, ausser welche Züge erlaubt sind. Sie suchen gleichmässig in alle Richtungen — auch dorthin, wo das Ziel sicher nicht liegt."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Ausblick: eine Ahnung vom Ziel"}),e.jsx("p",{children:"Als Sie das Puzzle oben von Hand gelöst haben, haben Sie nicht 2'900 Stellungen durchprobiert. Sie haben gesehen, dass ein Zug «besser aussieht» als ein anderer. Diese Ahnung kann man ausrechnen — zum Beispiel so:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Falsche Plätze:"})," Wie viele Steine liegen nicht dort, wo sie hingehören?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Manhattan-Distanz:"})," Wie weit muss jeder Stein mindestens laufen — Zeilen- plus Spaltenabstand, aufsummiert?"]})]}),e.jsx("p",{children:"Schalten Sie unten «Abstände zeigen» ein: Jeder Stein bekommt seinen Abstand zum Zielplatz als kleine gelbe Zahl, unten stehen die beiden Summen. Ziehen Sie ein paar Steine und beobachten Sie, wie sich die Manhattan-Distanz verändert."})]})}),e.jsx(Zn,{showHeuristics:!0,title:"Heuristiken sichtbar gemacht — wie weit ist es noch?"}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Heuristik im Zustandsraum"}),e.jsxs("p",{children:["Dieselbe Zahl noch einmal — aber jetzt im Zustandsraum von vorhin. Unter jedem Knoten steht sein ",e.jsx("code",{children:"h"}),"-Wert:"," ",e.jsx("span",{style:{color:"var(--color-green)"},children:"grün"}),", wenn diese Stellung näher am Ziel ist als die aktuelle,"," ",e.jsx("span",{style:{color:"var(--color-red)"},children:"rot"}),", wenn sie weiter weg ist."]}),e.jsx("p",{children:"Es ist genau dieselbe Spielwiese wie oben: Drücken Sie links im Puzzle herum, und der Graph wächst mit. Klappen Sie zusätzlich «bis Tiefe 2» oder «bis Tiefe 3» auf — dann bilden die Zahlen eine Landschaft, die zum Ziel hin abfällt. Die informierten Algorithmen tun nichts anderes, als dieser Landschaft bergab zu folgen, statt gleichmässig in alle Richtungen zu suchen. Mit der Auswahl oben können Sie zwischen Manhattan-Distanz und falschen Plätzen wechseln — die Manhattan-Werte sind grösser und damit aussagekräftiger."}),e.jsxs("p",{children:["Mit dem Häkchen ",e.jsx("code",{children:"f = g + h"})," kommt die zweite Zahl dazu:"," ",e.jsx("code",{children:"g"})," ist die Anzahl Züge, die wir vom Start bis zu diesem Knoten schon gebraucht haben, ",e.jsx("code",{children:"h"})," die Schätzung für den Rest. Die Summe ",e.jsx("code",{children:"f"})," ist die geschätzte Länge des ganzen Weges — genau die Zahl, nach der A",e.jsx("sup",{children:"*"})," den nächsten Knoten auswählt. Greedy würde nur auf ",e.jsx("code",{children:"h"})," schauen, UCS nur auf"," ",e.jsx("code",{children:"g"}),"."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Kn,{showHeuristics:!0,title:"Spielen Sie — und beobachten Sie, wie h kleiner wird"})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Nächste Woche"}),e.jsxs("p",{children:["Eine solche Schätzung heisst ",e.jsx("strong",{children:"Heuristik"})," ",e.jsx("code",{children:"h(state)"}),". Damit entstehen zwei neue Algorithmen — dieselben 15 Zeilen, nur eine andere Zahl in der Prioritätswarteschlange:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Greedy Best-First:"})," nimmt den Knoten mit dem kleinsten ",e.jsx("code",{children:"h"}),". Schnell, aber nicht optimal."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"}),":"]})," ","nimmt den Knoten mit dem kleinsten ",e.jsx("code",{children:"f = g + h"}),". Optimal, solange ",e.jsx("code",{children:"h"})," nie zu viel schätzt."]})]}),e.jsxs("p",{children:["Zum Vergleich auf der 14-Zug-Stellung: BFS expandiert rund 2'900 Knoten, A",e.jsx("sup",{children:"*"})," mit Manhattan-Distanz weniger als 100 — und findet denselben kürzesten Weg. Probieren Sie es gleich aus."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["astar","greedy","bfs","ucs","dfs","ids"],start:[0,8,2,5,7,3,1,4,6],title:"Vorgeschmack: alle sechs Algorithmen auf derselben Stellung"})}),e.jsx(en,{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Ich kann erklären, was ein Zustand, eine Aktion und ein Zustandsraum ist — am Beispiel des Schiebepuzzles."}),e.jsxs("li",{children:["Ich kann eine Puzzle-Stellung als Datenstruktur aufschreiben und erklären, wozu ",e.jsx("code",{children:"key(state)"})," gebraucht wird."]}),e.jsx("li",{children:"Ich kann die Nachfolger einer Stellung von Hand bestimmen und den Suchbaum bis Tiefe 2 zeichnen."}),e.jsx("li",{children:"Ich kann erklären, warum Suchbaum und Zustandsraum nicht dasselbe sind und wozu die Besucht-Menge dient."}),e.jsx("li",{children:"Ich kann BFS und DFS von Hand ausführen und dabei Grenze und Besucht-Menge nachführen."}),e.jsx("li",{children:"Ich kann begründen, warum BFS den kürzesten Weg findet, DFS aber nicht — und was das für den Speicher bedeutet."}),e.jsx("li",{children:"Ich kann die iterative Tiefensuche erklären und begründen, warum sie den kürzesten Weg mit dem Speicherbedarf einer Tiefensuche findet."}),e.jsx("li",{children:"Ich kann ein eigenes Problem in JavaScript implementieren, sodass die vorhandene Suche es löst."})]})})]})}const Fd=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"})),tn={w:800,h:480},J=[{id:"A",label:"Bahnhof",x:90,y:380},{id:"B",label:"Markt",x:240,y:330},{id:"C",label:"Dom",x:205,y:185},{id:"D",label:"Hafen",x:95,y:110},{id:"E",label:"Schule",x:355,y:115},{id:"F",label:"Park",x:395,y:255},{id:"G",label:"Spital",x:300,y:430},{id:"H",label:"Brücke",x:520,y:330},{id:"I",label:"Museum",x:540,y:185},{id:"J",label:"Stadion",x:690,y:105},{id:"K",label:"Zoo",x:720,y:265},{id:"L",label:"Flughafen",x:660,y:420},{id:"M",label:"Uni",x:430,y:55}],Ie=Object.fromEntries(J.map(s=>[s.id,s])),V=s=>Ie[s]?.label??s,yl=[{a:"A",b:"B",strasse:"Bahnhofstrasse",typ:"haupt",c:{x:160,y:370}},{a:"A",b:"D",strasse:"Hafenweg",typ:"neben",c:{x:40,y:240}},{a:"A",b:"G",strasse:"Südring",typ:"haupt",c:{x:175,y:435}},{a:"B",b:"C",strasse:"Domgasse",typ:"neben",c:{x:200,y:262}},{a:"B",b:"F",strasse:"Parkallee",typ:"haupt",c:{x:320,y:300}},{a:"B",b:"G",strasse:"Spitalweg",typ:"neben",c:{x:256,y:392}},{a:"C",b:"D",strasse:"Uferstrasse",typ:"neben",c:{x:128,y:140}},{a:"C",b:"E",strasse:"Schulstrasse",typ:"haupt",c:{x:282,y:136}},{a:"C",b:"F",strasse:"Altstadtring",typ:"neben",c:{x:318,y:212}},{a:"E",b:"M",strasse:"Campusweg",typ:"neben",c:{x:382,y:70}},{a:"E",b:"F",strasse:"Parkweg",typ:"neben",c:{x:392,y:182}},{a:"E",b:"I",strasse:"Museumsstrasse",typ:"haupt",c:{x:462,y:132}},{a:"M",b:"J",strasse:"Nordautobahn",typ:"autobahn",c:{x:560,y:50}},{a:"F",b:"H",strasse:"Brückenstrasse",typ:"haupt",c:{x:458,y:302}},{a:"F",b:"G",strasse:"Südweg",typ:"neben",c:{x:330,y:352}},{a:"G",b:"L",strasse:"Flughafenstrasse",typ:"haupt",c:{x:470,y:465}},{a:"H",b:"I",strasse:"Hügelweg",typ:"neben",c:{x:556,y:258}},{a:"H",b:"K",strasse:"Ostring",typ:"haupt",c:{x:636,y:300}},{a:"H",b:"L",strasse:"Zubringer",typ:"neben",c:{x:604,y:386}},{a:"I",b:"J",strasse:"Stadionweg",typ:"haupt",c:{x:622,y:128}},{a:"J",b:"K",strasse:"Zoostrasse",typ:"neben",c:{x:748,y:178}},{a:"K",b:"L",strasse:"Ostautobahn",typ:"autobahn",c:{x:722,y:348}}],gn={autobahn:{label:"Autobahn",tempo:2.4,breite:16,farbe:"#d5c4a1"},haupt:{label:"Hauptstrasse",tempo:1.5,breite:12,farbe:"#bdae93"},neben:{label:"Nebenstrasse",tempo:1,breite:8,farbe:"#a89984"}};function vs(s,n,i,r){const t=1-r;return{x:t*t*s.x+2*t*r*n.x+r*r*i.x,y:t*t*s.y+2*t*r*n.y+r*r*i.y}}function Nl(s,n,i,r=24){let t=0,l=s;for(let j=1;j<=r;j++){const c=vs(s,n,i,j/r);t+=Math.hypot(c.x-l.x,c.y-l.y),l=c}return t}const ye=(s,n)=>s<n?`${s}|${n}`:`${n}|${s}`,Se=yl.map(s=>{const n=Ie[s.a],i=Ie[s.b],r=Nl(n,s.c,i),t=Math.max(1,Math.round(r/(18*gn[s.typ].tempo)));return{...s,key:ye(s.a,s.b),laenge:r,w:t}});Object.fromEntries(Se.map(s=>[s.key,s]));const As=(()=>{const s={};for(const n of J)s[n.id]=[];for(const n of Se)s[n.a].push({to:n.b,w:n.w,key:n.key}),s[n.b].push({to:n.a,w:n.w,key:n.key});for(const n of Object.keys(s))s[n].sort((i,r)=>i.to.localeCompare(r.to));return s})(),Dl="M -20 20 C 120 140 230 190 330 252 C 420 308 470 322 530 336 C 624 358 664 424 706 500",ln={cx:398,cy:252,rx:78,ry:56},El=[{x:150,y:290,w:46,h:30},{x:206,y:282,w:36,h:26},{x:160,y:212,w:34,h:40},{x:232,y:206,w:40,h:30},{x:108,y:330,w:40,h:28},{x:268,y:140,w:44,h:28},{x:480,y:150,w:42,h:30},{x:582,y:220,w:36,h:28},{x:636,y:150,w:40,h:26},{x:330,y:400,w:50,h:30},{x:606,y:452,w:60,h:24}];function Mn(s,n){const i=[];let r=n;for(;r;)i.unshift(r),r=s[r];return i}function ys(s){const n=new Set;for(let i=0;i+1<s.length;i++)n.add(ye(s[i],s[i+1]));return n}function Ns(s,n){const i={},r={};for(const a of J)i[a.id]=1/0,r[a.id]=null;i[s]=0;const t=new Set,l=new Set([s]),j=[],c=a=>j.push({dist:{...i},prev:{...r},besucht:[...t],grenze:[...l].map(o=>({id:o,d:i[o]})).sort((o,z)=>o.d-z.d||o.id.localeCompare(z.id)),aktuell:null,pruefKante:null,pfad:null,...a});for(c({phase:"init",text:`Start ist ${V(s)}. Distanz dorthin: 0 Minuten. Alle anderen Orte: noch unbekannt (∞).`});l.size>0;){let a=null;for(const o of l)(a===null||i[o]<i[a])&&(a=o);if(l.delete(a),t.add(a),c({phase:"waehle",aktuell:a,text:`Kleinste bekannte Distanz in der Grenze: ${V(a)} mit ${i[a]} min. Dieser Wert kann nicht mehr kleiner werden — ${V(a)} ist endgültig.`}),a===n){const o=Mn(r,n);return c({phase:"fertig",aktuell:a,pfad:o,text:`Ziel ${V(n)} wurde endgültig festgelegt: ${i[n]} min. Über die Vorgänger lesen wir die Route rückwärts ab.`}),{schritte:j,dist:i,prev:r,pfad:o,besuchtAnzahl:t.size}}for(const{to:o,w:z}of As[a]){if(t.has(o))continue;const h=i[o],g=i[a]+z,E=g<h;E&&(i[o]=g,r[o]=a,l.add(o));const b=h===1/0?"∞":`${h}`;c({phase:"pruef",aktuell:a,pruefKante:{von:a,nach:o,w:z,besser:E},text:E?`${V(a)} → ${V(o)}: ${i[a]} + ${z} = ${g} ist besser als ${b}. Neue Distanz ${g}, Vorgänger ${V(a)}.`:`${V(a)} → ${V(o)}: ${i[a]} + ${z} = ${g} ist nicht besser als ${b}. Nichts ändert sich.`})}}return c({phase:"leer",text:"Die Grenze ist leer — es gibt keinen Weg zum Ziel."}),{schritte:j,dist:i,prev:r,pfad:null,besuchtAnzahl:t.size}}function Qn(s){const n={},i={};for(const r of J)n[r.id]=1/0,i[r.id]=null;return n[s]=0,{dist:n,prev:i,besucht:new Set,grenze:new Set([s])}}const Xn=s=>{let n=null;for(const i of s.grenze)(n===null||s.dist[i]<s.dist[n])&&(n=i);return n};function Bl(s,n){const i=Qn(s),r=Qn(n),t=[];let l=1/0,j=null;const c=z=>t.push({distV:{...i.dist},distR:{...r.dist},prevV:{...i.prev},prevR:{...r.prev},besuchtV:[...i.besucht],besuchtR:[...r.besucht],grenzeV:[...i.grenze].map(h=>({id:h,d:i.dist[h]})).sort((h,g)=>h.d-g.d||h.id.localeCompare(g.id)),grenzeR:[...r.grenze].map(h=>({id:h,d:r.dist[h]})).sort((h,g)=>h.d-g.d||h.id.localeCompare(g.id)),mu:l,treff:j,aktuell:null,seite:null,pruefKante:null,pfad:null,...z}),a=()=>{if(j===null)return null;const z=Mn(i.prev,j),h=Mn(r.prev,j);return h.reverse(),[...z,...h.slice(1)]};if(c({phase:"init",text:`Zwei Suchen starten gleichzeitig: eine bei ${V(s)} (vorwärts), eine bei ${V(n)} (rückwärts). µ ist der beste bisher bekannte Gesamtweg und startet bei ∞.`}),s===n)return j=s,c({phase:"fertig",pfad:[s],text:"Start und Ziel sind derselbe Ort."}),{schritte:t,pfad:[s],besuchtAnzahl:0,mu:0};for(;i.grenze.size>0&&r.grenze.size>0;){const z=Xn(i),h=Xn(r),g=i.dist[z],E=r.dist[h];if(g+E>=l){const v=a();return c({phase:"fertig",pfad:v,text:`Abbruch: ${g} + ${E} = ${g+E} ≥ µ = ${l}. Kein unentdeckter Weg kann noch kürzer sein. Die Route über ${V(j)} dauert ${l} min.`}),{schritte:t,pfad:v,besuchtAnzahl:i.besucht.size+r.besucht.size,mu:l}}const b=g<=E,f=b?i:r,S=b?r:i,k=b?"V":"R",u=b?z:h;f.grenze.delete(u),f.besucht.add(u),c({phase:"waehle",seite:k,aktuell:u,text:`${b?"Vorwärts":"Rückwärts"}-Suche ist dran (${g} ${b?"≤":">"} ${E}): ${V(u)} mit ${f.dist[u]} min wird endgültig.`});for(const{to:v,w:_}of As[u]){if(f.besucht.has(v))continue;const F=f.dist[v],B=f.dist[u]+_,K=B<F;K&&(f.dist[v]=B,f.prev[v]=u,f.grenze.add(v));let O="";if(S.dist[v]<1/0){const w=f.dist[v]+S.dist[v];w<l&&(l=w,j=v,O=` Beide Suchen kennen ${V(v)}: ${f.dist[v]} + ${S.dist[v]} = ${w} → neues µ = ${l}.`)}const I=F===1/0?"∞":`${F}`;c({phase:"pruef",seite:k,aktuell:u,pruefKante:{von:u,nach:v,w:_,besser:K},text:(K?`${V(u)} → ${V(v)}: ${f.dist[u]} + ${_} = ${B} < ${I} → eintragen.`:`${V(u)} → ${V(v)}: ${f.dist[u]} + ${_} = ${B} ≥ ${I} → nichts ändert sich.`)+O})}}const o=a();return c({phase:"fertig",pfad:o,text:o?`Eine Seite ist erschöpft. Beste gefundene Route: ${l} min.`:"Es gibt keinen Weg."}),{schritte:t,pfad:o,besuchtAnzahl:i.besucht.size+r.besucht.size,mu:l}}const Wl="_wrapper_1ahwh_3",_l="_title_1ahwh_12",Fl="_hinweis_1ahwh_19",Pl="_controls_1ahwh_28",Zl="_button_1ahwh_36",Kl="_buttonPrimary_1ahwh_57",Ml="_select_1ahwh_62",Ol="_label_1ahwh_72",Tl="_spacer_1ahwh_79",Il="_stufen_1ahwh_85",Ll="_stufe_1ahwh_85",Cl="_stufeAktiv_1ahwh_104",Gl="_canvas_1ahwh_112",$l="_svg_1ahwh_119",Vl="_kante_1ahwh_125",Rl="_knotenId_1ahwh_132",Hl="_knotenName_1ahwh_138",Jl="_knotenWert_1ahwh_143",Ul="_strassenName_1ahwh_150",ql="_gewicht_1ahwh_156",Ql="_knotenKlick_1ahwh_162",Xl="_erklaerung_1ahwh_168",Yl="_schrittZaehler_1ahwh_180",ec="_panels_1ahwh_188",nc="_panelsZwei_1ahwh_196",sc="_panel_1ahwh_188",ic="_panelTitel_1ahwh_208",rc="_queue_1ahwh_218",tc="_chip_1ahwh_225",lc="_chipR_1ahwh_235",cc="_chipLeer_1ahwh_241",ac="_tabelle_1ahwh_248",dc="_zeileBesucht_1ahwh_269",hc="_zeileGrenze_1ahwh_277",oc="_zeileAktuell_1ahwh_281",uc="_stats_1ahwh_289",xc="_stat_1ahwh_289",jc="_ergebnis_1ahwh_303",gc="_legende_1ahwh_315",mc="_legendeItem_1ahwh_324",bc="_swatch_1ahwh_330",fc="_erklaerBox_1ahwh_339",pc="_erklaerTitel_1ahwh_347",kc="_erklaerListe_1ahwh_354",Sc="_erklaerSchluss_1ahwh_367",p={wrapper:Wl,title:_l,hinweis:Fl,controls:Pl,button:Zl,buttonPrimary:Kl,select:Ml,label:Ol,spacer:Tl,stufen:Il,stufe:Ll,stufeAktiv:Cl,canvas:Gl,svg:$l,kante:Vl,knotenId:Rl,knotenName:Hl,knotenWert:Jl,strassenName:Ul,gewicht:ql,knotenKlick:Ql,erklaerung:Xl,schrittZaehler:Yl,panels:ec,panelsZwei:nc,panel:sc,panelTitel:ic,queue:rc,chip:tc,chipR:lc,chipLeer:cc,tabelle:ac,zeileBesucht:dc,zeileGrenze:hc,zeileAktuell:oc,stats:uc,stat:xc,ergebnis:jc,legende:gc,legendeItem:mc,swatch:bc,erklaerBox:fc,erklaerTitel:pc,erklaerListe:kc,erklaerSchluss:Sc};function Gn({t:s=0,deko:n=1,zeigeKnoten:i=!0,zeigeNamen:r=!0,zeigeGewichte:t=!1,zeigeStrassennamen:l=!1,knotenStatus:j={},kantenStatus:c={},knotenText:a={},onKnoten:o=null,hoehe:z=440}){const h=D.useMemo(()=>Se.map(g=>{const E=Ie[g.a],b=Ie[g.b],f=(E.x+b.x)/2,S=(E.y+b.y)/2,k={x:g.c.x+(f-g.c.x)*s,y:g.c.y+(S-g.c.y)*s},u=vs(E,k,b,.5);return{...g,d:`M ${E.x} ${E.y} Q ${k.x} ${k.y} ${b.x} ${b.y}`,mitte:u}}),[s]);return e.jsxs("svg",{className:p.svg,viewBox:`0 0 ${tn.w} ${tn.h}`,style:{maxHeight:z},role:"img","aria-label":"Strassennetz als Karte und Graph",children:[e.jsx("title",{children:"Strassennetz"}),e.jsxs("g",{opacity:n,children:[e.jsx("rect",{x:"0",y:"0",width:tn.w,height:tn.h,fill:"#32302f"}),El.map(g=>e.jsx("rect",{x:g.x,y:g.y,width:g.w,height:g.h,rx:"3",fill:"#3c3836",stroke:"#504945"},`${g.x}-${g.y}`)),e.jsx("ellipse",{cx:ln.cx,cy:ln.cy,rx:ln.rx,ry:ln.ry,fill:"#4a5340"}),e.jsx("path",{d:Dl,fill:"none",stroke:"#45545c",strokeWidth:"22",strokeLinecap:"round"})]}),e.jsxs("g",{children:[h.map(g=>e.jsx("path",{d:g.d,fill:"none",stroke:gn[g.typ].farbe,strokeWidth:gn[g.typ].breite*(1-.6*s),strokeLinecap:"round",opacity:n*.9},`u-${g.key}`)),h.map(g=>{const E=c[g.key];return e.jsx("path",{className:p.kante,d:g.d,fill:"none",stroke:En[E]??"#7c6f64",strokeWidth:zc[E]??2.5,strokeLinecap:"round",opacity:E?1:.35+.45*s},`k-${g.key}`)})]}),l&&e.jsx("g",{children:h.map(g=>e.jsx("text",{x:g.mitte.x,y:g.mitte.y-8,className:p.strassenName,textAnchor:"middle",children:g.strasse},`s-${g.key}`))}),t&&e.jsx("g",{children:h.map(g=>{const E=!!c[g.key];return e.jsxs("g",{children:[e.jsx("rect",{x:g.mitte.x-13,y:g.mitte.y-11,width:"26",height:"19",rx:"4",fill:"#1d2021",stroke:E?En[c[g.key]]:"#504945"}),e.jsx("text",{x:g.mitte.x,y:g.mitte.y+2,className:p.gewicht,textAnchor:"middle",fill:E?En[c[g.key]]:"#ebdbb2",children:g.w})]},`g-${g.key}`)})}),i&&e.jsx("g",{children:Object.values(Ie).map(g=>{const E=j[g.id]??"offen",b=Yn[E]??Yn.offen,f=E==="aktuell"||E==="treff"?17:13;return e.jsxs("g",{className:o?p.knotenKlick:void 0,role:o?"button":void 0,tabIndex:o?0:void 0,"aria-label":o?`${g.label} als Ziel wählen`:void 0,onClick:o?()=>o(g.id):void 0,onKeyDown:o?S=>{(S.key==="Enter"||S.key===" ")&&o(g.id)}:void 0,children:[E==="aktuell"&&e.jsx("circle",{cx:g.x,cy:g.y,r:"24",fill:"none",stroke:b.stroke,strokeWidth:"1.5",opacity:"0.5"}),e.jsx("circle",{cx:g.x,cy:g.y,r:f,fill:b.fill,stroke:b.stroke,strokeWidth:b.breite??2.5}),e.jsx("text",{x:g.x,y:g.y+4,className:p.knotenId,textAnchor:"middle",fill:b.text,children:g.id}),r&&e.jsx("text",{x:g.x,y:g.y-20,className:p.knotenName,textAnchor:"middle",children:g.label}),a[g.id]!==void 0&&e.jsx("text",{x:g.x,y:g.y+30,className:p.knotenWert,textAnchor:"middle",children:a[g.id]})]},g.id)})})]})}const En={pruef:"#fabd2f",pruefBesser:"#b8bb26",baum:"#83a598",baumR:"#d3869b",pfad:"#fe8019",hervor:"#ebdbb2"},zc={pruef:5,pruefBesser:5,baum:4,baumR:4,pfad:7,hervor:4},Yn={offen:{fill:"#1d2021",stroke:"#665c54",text:"#928374"},grenze:{fill:"#4a4327",stroke:"#fabd2f",text:"#fabd2f"},grenzeR:{fill:"#4a2f3a",stroke:"#d3869b",text:"#d3869b"},besucht:{fill:"#2f4a4f",stroke:"#83a598",text:"#83a598"},besuchtR:{fill:"#4a3340",stroke:"#d3869b",text:"#d3869b"},aktuell:{fill:"#5a3410",stroke:"#fe8019",text:"#fe8019",breite:3.5},start:{fill:"#2f4a2a",stroke:"#8ec07c",text:"#8ec07c",breite:3.5},ziel:{fill:"#4a2a2a",stroke:"#fb4934",text:"#fb4934",breite:3.5},treff:{fill:"#5a3410",stroke:"#fe8019",text:"#fe8019",breite:4}},es={langsam:{label:"langsam",ms:900},normal:{label:"normal",ms:420},schnell:{label:"schnell",ms:160}};function wc({start:s="D",ziel:n="J",title:i="Bidirektionaler Dijkstra: von beiden Seiten gleichzeitig"}){const[r,t]=D.useState(s),[l,j]=D.useState(n),[c,a]=D.useState(0),[o,z]=D.useState(!1),[h,g]=D.useState("normal"),E=D.useMemo(()=>Bl(r,l),[r,l]),b=D.useMemo(()=>Ns(r,l),[r,l]),f=E.schritte,S=f.length-1,k=f[Math.min(c,S)],u=D.useCallback(N=>M=>{N(M.target.value),a(0),z(!1)},[]);D.useEffect(()=>{if(!o)return;const N=setInterval(()=>{a(M=>M>=S?(z(!1),M):M+1)},es[h].ms);return()=>clearInterval(N)},[o,h,S]);const v=new Set(k.besuchtV),_=new Set(k.besuchtR),F=new Set(k.grenzeV.map(N=>N.id)),B=new Set(k.grenzeR.map(N=>N.id)),K={};for(const N of J)v.has(N.id)?K[N.id]="besucht":_.has(N.id)?K[N.id]="besuchtR":F.has(N.id)?K[N.id]="grenze":B.has(N.id)&&(K[N.id]="grenzeR");k.treff&&(K[k.treff]="treff"),k.aktuell&&(K[k.aktuell]="aktuell"),K[r]="start",K[l]="ziel";const O={};for(const N of J){const M=k.prevV[N.id];M&&(O[ye(M,N.id)]="baum")}for(const N of J){const M=k.prevR[N.id];M&&(O[ye(M,N.id)]="baumR")}if(k.pruefKante&&(O[ye(k.pruefKante.von,k.pruefKante.nach)]=k.pruefKante.besser?"pruefBesser":"pruef"),k.pfad)for(const N of ys(k.pfad))O[N]="pfad";const I={};for(const N of J){const M=k.distV[N.id],Y=k.distR[N.id];M===1/0&&Y===1/0||(I[N.id]=`${M===1/0?"∞":M}|${Y===1/0?"∞":Y}`)}const w=k.besuchtV.length+k.besuchtR.length,m=k.phase==="fertig";return e.jsxs("div",{className:p.wrapper,children:[e.jsx("p",{className:p.title,children:i}),e.jsxs("p",{className:p.hinweis,children:["Dijkstra breitet sich wie ein Ölfleck in ",e.jsx("em",{children:"alle"})," Richtungen aus. Bei einer Fahrt von Zürich nach Genf würde er auch halb Deutschland durchsuchen. Die Idee hier: zwei Suchen gleichzeitig — eine vom Start vorwärts (",e.jsx("span",{style:{color:"#83a598"},children:"blau"}),") und eine vom Ziel rückwärts (",e.jsx("span",{style:{color:"#d3869b"},children:"rosa"}),"). Zwei kleine Kreise sind zusammen viel kleiner als ein grosser."]}),e.jsxs("div",{className:p.controls,children:[e.jsx("button",{type:"button",className:`${p.button} ${p.buttonPrimary}`,onClick:()=>z(N=>!N),disabled:c>=S,children:o?"Pause":"Abspielen"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>a(N=>Math.max(0,N-1)),disabled:c===0,children:"◀ Schritt"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>a(N=>Math.min(S,N+1)),disabled:c>=S,children:"Schritt ▶"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>{a(0),z(!1)},children:"Zurücksetzen"}),e.jsx("span",{className:p.label,children:"Start"}),e.jsx("select",{className:p.select,value:r,onChange:u(t),children:J.map(N=>e.jsxs("option",{value:N.id,disabled:N.id===l,children:[N.id," — ",N.label]},N.id))}),e.jsx("span",{className:p.label,children:"Ziel"}),e.jsx("select",{className:p.select,value:l,onChange:u(j),children:J.map(N=>e.jsxs("option",{value:N.id,disabled:N.id===r,children:[N.id," — ",N.label]},N.id))}),e.jsx("span",{className:p.label,children:"Tempo"}),e.jsx("select",{className:p.select,value:h,onChange:N=>g(N.target.value),children:Object.entries(es).map(([N,M])=>e.jsx("option",{value:N,children:M.label},N))})]}),e.jsx("div",{className:p.canvas,children:e.jsx(Gn,{t:.35,deko:.12,zeigeGewichte:!0,knotenStatus:K,kantenStatus:O,knotenText:I})}),e.jsxs("p",{className:p.hinweis,style:{marginTop:"var(--space-xs)"},children:["Unter jedem Ort steht ",e.jsx("code",{children:"Distanz vom Start | Distanz zum Ziel"}),"."]}),e.jsxs("p",{className:p.erklaerung,children:[e.jsxs("span",{className:p.schrittZaehler,children:["Schritt ",c+1," / ",f.length," ·"," "]}),k.text]}),e.jsxs("div",{className:`${p.panels} ${p.panelsZwei}`,children:[e.jsxs("div",{className:p.panel,children:[e.jsxs("p",{className:p.panelTitel,children:["Grenze vorwärts (von ",V(r),")"]}),e.jsx("div",{className:p.queue,children:k.grenzeV.length===0?e.jsx("span",{className:p.chipLeer,children:"leer"}):k.grenzeV.map(N=>e.jsxs("span",{className:p.chip,children:[N.id," : ",N.d]},N.id))})]}),e.jsxs("div",{className:p.panel,children:[e.jsxs("p",{className:p.panelTitel,children:["Grenze rückwärts (von ",V(l),")"]}),e.jsx("div",{className:p.queue,children:k.grenzeR.length===0?e.jsx("span",{className:p.chipLeer,children:"leer"}):k.grenzeR.map(N=>e.jsxs("span",{className:`${p.chip} ${p.chipR}`,children:[N.id," : ",N.d]},N.id))})]})]}),e.jsxs("div",{className:p.stats,children:[e.jsxs("span",{className:p.stat,children:["µ (bester bekannter Weg):"," ",e.jsx("strong",{children:k.mu===1/0?"∞":`${k.mu} min`})]}),e.jsxs("span",{className:p.stat,children:["Treffpunkt: ",e.jsx("strong",{children:k.treff?V(k.treff):"—"})]}),e.jsxs("span",{className:p.stat,children:["endgültig vorwärts: ",e.jsx("strong",{children:k.besuchtV.length})]}),e.jsxs("span",{className:p.stat,children:["endgültig rückwärts: ",e.jsx("strong",{children:k.besuchtR.length})]}),e.jsxs("span",{className:p.stat,children:["zusammen: ",e.jsx("strong",{children:w})]})]}),m&&k.pfad&&e.jsxs("div",{className:p.ergebnis,children:[e.jsx("strong",{children:"Route:"})," ",k.pfad.map(N=>V(N)).join(" → ")," ·"," ",e.jsxs("strong",{children:[k.mu," min"]}),e.jsx("br",{}),"Bidirektional wurden ",e.jsx("strong",{children:w})," Orte endgültig festgelegt, der normale Dijkstra brauchte dafür"," ",e.jsx("strong",{children:b.besuchtAnzahl}),". Auf diesem kleinen Netz ist der Unterschied klein — bei einem Strassennetz mit Millionen Knoten spart dieselbe Idee einen grossen Teil der Rechenzeit."]}),e.jsxs("div",{className:p.legende,children:[e.jsx(Ze,{farbe:"#8ec07c",text:"Start"}),e.jsx(Ze,{farbe:"#fb4934",text:"Ziel"}),e.jsx(Ze,{farbe:"#83a598",text:"vorwärts endgültig"}),e.jsx(Ze,{farbe:"#d3869b",text:"rückwärts endgültig"}),e.jsx(Ze,{farbe:"#fabd2f",text:"Grenze vorwärts"}),e.jsx(Ze,{farbe:"#fe8019",text:"aktuell / Treffpunkt / Route"})]})]})}function Ze({farbe:s,text:n}){return e.jsxs("span",{className:p.legendeItem,children:[e.jsx("span",{className:p.swatch,style:{backgroundColor:s}}),n]})}const ns={langsam:{label:"langsam",ms:900},normal:{label:"normal",ms:450},schnell:{label:"schnell",ms:180}};function vc({start:s="D",ziel:n="J",title:i="Dijkstra: der kürzeste Weg, Schritt für Schritt"}){const[r,t]=D.useState(s),[l,j]=D.useState(n),[c,a]=D.useState(0),[o,z]=D.useState(!1),[h,g]=D.useState("normal"),[E,b]=D.useState(!0),S=D.useMemo(()=>Ns(r,l),[r,l]).schritte,k=S.length-1,u=S[Math.min(c,k)],v=D.useCallback(w=>m=>{w(m.target.value),a(0),z(!1)},[]);D.useEffect(()=>{if(!o)return;const w=setInterval(()=>{a(m=>m>=k?(z(!1),m):m+1)},ns[h].ms);return()=>clearInterval(w)},[o,h,k]);const _=new Set(u.grenze.map(w=>w.id)),F=new Set(u.besucht),B={};for(const w of J)F.has(w.id)?B[w.id]="besucht":_.has(w.id)&&(B[w.id]="grenze");u.aktuell&&(B[u.aktuell]="aktuell"),B[r]="start",B[l]="ziel";const K={};for(const w of J){const m=u.prev[w.id];m&&(K[ye(m,w.id)]="baum")}if(u.pruefKante&&(K[ye(u.pruefKante.von,u.pruefKante.nach)]=u.pruefKante.besser?"pruefBesser":"pruef"),u.pfad)for(const w of ys(u.pfad))K[w]="pfad";const O={};for(const w of J){const m=u.dist[w.id];m<1/0&&(O[w.id]=`${m}`)}const I=u.phase==="fertig";return e.jsxs("div",{className:p.wrapper,children:[e.jsx("p",{className:p.title,children:i}),e.jsxs("p",{className:p.hinweis,children:["Dijkstra verwaltet für jeden Ort die"," ",e.jsx("strong",{children:"bisher kürzeste bekannte Fahrzeit"})," vom Start und einen"," ",e.jsx("strong",{children:"Vorgänger"}),". In jedem Durchgang nimmt er den Ort aus der Grenze, dessen bekannte Zeit am kleinsten ist — dieser Wert ist dann endgültig. Danach prüft er alle Nachbarn: Kommt man über den gerade gewählten Ort schneller hin?"]}),e.jsxs("div",{className:p.controls,children:[e.jsx("button",{type:"button",className:`${p.button} ${p.buttonPrimary}`,onClick:()=>z(w=>!w),disabled:c>=k,children:o?"Pause":"Abspielen"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>a(w=>Math.max(0,w-1)),disabled:c===0,children:"◀ Schritt"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>a(w=>Math.min(k,w+1)),disabled:c>=k,children:"Schritt ▶"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>{a(0),z(!1)},children:"Zurücksetzen"}),e.jsx("span",{className:p.label,children:"Start"}),e.jsx("select",{className:p.select,value:r,onChange:v(t),children:J.map(w=>e.jsxs("option",{value:w.id,disabled:w.id===l,children:[w.id," — ",w.label]},w.id))}),e.jsx("span",{className:p.label,children:"Ziel"}),e.jsx("select",{className:p.select,value:l,onChange:v(j),children:J.map(w=>e.jsxs("option",{value:w.id,disabled:w.id===r,children:[w.id," — ",w.label]},w.id))}),e.jsx("span",{className:p.label,children:"Tempo"}),e.jsx("select",{className:p.select,value:h,onChange:w=>g(w.target.value),children:Object.entries(ns).map(([w,m])=>e.jsx("option",{value:w,children:m.label},w))}),e.jsxs("label",{className:p.label,style:{display:"flex",gap:6,alignItems:"center"},children:[e.jsx("input",{type:"checkbox",checked:E,onChange:w=>b(w.target.checked)}),"Ortsnamen"]})]}),e.jsx("div",{className:p.canvas,children:e.jsx(Gn,{t:.35,deko:.12,zeigeNamen:E,zeigeGewichte:!0,knotenStatus:B,kantenStatus:K,knotenText:O,onKnoten:w=>{w!==r&&(j(w),a(0),z(!1))}})}),e.jsxs("p",{className:p.erklaerung,children:[e.jsxs("span",{className:p.schrittZaehler,children:["Schritt ",c+1," / ",S.length," ·"," "]}),u.text]}),e.jsxs("div",{className:`${p.panels} ${p.panelsZwei}`,children:[e.jsxs("div",{className:p.panel,children:[e.jsx("p",{className:p.panelTitel,children:"Grenze / Priority Queue — immer nach Distanz sortiert"}),e.jsx("div",{className:p.queue,children:u.grenze.length===0?e.jsx("span",{className:p.chipLeer,children:"leer"}):u.grenze.map(w=>e.jsxs("span",{className:p.chip,children:[w.id," : ",w.d]},w.id))}),e.jsxs("div",{className:p.stats,children:[e.jsxs("span",{className:p.stat,children:["endgültig: ",e.jsx("strong",{children:u.besucht.length})]}),e.jsxs("span",{className:p.stat,children:["in der Grenze: ",e.jsx("strong",{children:u.grenze.length})]})]})]}),e.jsxs("div",{className:p.panel,children:[e.jsx("p",{className:p.panelTitel,children:"Distanzen und Vorgänger"}),e.jsxs("table",{className:p.tabelle,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Ort"}),e.jsx("th",{children:"Distanz"}),e.jsx("th",{children:"Vorgänger"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:J.map(w=>{const m=u.dist[w.id],N=F.has(w.id)?p.zeileBesucht:_.has(w.id)?p.zeileGrenze:"";return e.jsxs("tr",{className:u.aktuell===w.id?p.zeileAktuell:N,children:[e.jsxs("td",{children:[w.id," ",w.label]}),e.jsx("td",{children:m===1/0?"∞":m}),e.jsx("td",{children:u.prev[w.id]??"—"}),e.jsx("td",{children:F.has(w.id)?"endgültig":_.has(w.id)?"Grenze":"unbekannt"})]},w.id)})})]})]})]}),I&&u.pfad&&e.jsxs("div",{className:p.ergebnis,children:[e.jsx("strong",{children:"Route gefunden:"})," ",u.pfad.map(w=>V(w)).join(" → ")," ·"," ",e.jsxs("strong",{children:[u.dist[l]," min"]})," · dafür musste Dijkstra"," ",e.jsx("strong",{children:u.besucht.length})," von ",J.length," Orten endgültig festlegen."]}),e.jsxs("div",{className:p.legende,children:[e.jsx(Re,{farbe:"#8ec07c",text:"Start"}),e.jsx(Re,{farbe:"#fb4934",text:"Ziel"}),e.jsx(Re,{farbe:"#fe8019",text:"gerade gewählt / fertige Route"}),e.jsx(Re,{farbe:"#fabd2f",text:"Grenze (bekannt, noch nicht sicher)"}),e.jsx(Re,{farbe:"#83a598",text:"endgültig + Vorgängerkante"})]})]})}function Re({farbe:s,text:n}){return e.jsxs("span",{className:p.legendeItem,children:[e.jsx("span",{className:p.swatch,style:{backgroundColor:s}}),n]})}const He=[{titel:"1 · Die Karte",t:0,deko:1,knoten:!1,namen:!1,gewichte:!1,strassen:!1,text:"So sieht die Welt für uns aus: Häuser, ein Fluss, ein Park und Strassen, die irgendwie verlaufen. Für einen Computer ist das zunächst nur ein Bild. Er kann damit nichts rechnen."},{titel:"2 · Kreuzungen werden zu Knoten",t:0,deko:.85,knoten:!0,namen:!0,gewichte:!1,strassen:!1,text:"Interessant ist nur, wo man eine Entscheidung treffen kann: an Kreuzungen und Zielorten. Jeder solche Punkt wird ein Knoten. Alles dazwischen — die genaue Form der Strasse — ist für die Entscheidung egal."},{titel:"3 · Strassen werden zu Kanten",t:.15,deko:.45,knoten:!0,namen:!0,gewichte:!1,strassen:!0,text:"Jeder Strassenabschnitt zwischen zwei Knoten wird eine Kante. Der Name der Strasse ist dabei nur noch Beschriftung — entscheidend ist, dass eine Verbindung existiert."},{titel:"4 · Fahrzeit wird zum Gewicht",t:.35,deko:.25,knoten:!0,namen:!0,gewichte:!0,strassen:!1,text:"Jede Kante bekommt eine Zahl: das Gewicht. Hier ist es die Fahrzeit in Minuten. Sie hängt von der Länge UND vom Strassentyp ab — auf der Autobahn ist man pro Kilometer schneller unterwegs als in der Altstadt."},{titel:"5 · Der fertige Graph",t:1,deko:0,knoten:!0,namen:!0,gewichte:!0,strassen:!1,text:"Die Karte ist verschwunden. Übrig bleibt ein gewichteter Graph: 13 Knoten, 22 Kanten, auf jeder Kante eine Zahl. Wie die Strassen in Wirklichkeit gebogen sind, spielt für die Routenberechnung keine Rolle mehr."}];function Ac({title:s="Von der Karte zum Graphen"}){const[n,i]=D.useState(0),r=He[n],t=D.useRef({t:r.t,deko:r.deko}),[,l]=D.useState(0);D.useEffect(()=>{let o=0;const z=()=>{const h=t.current;h.t+=(r.t-h.t)*.12,h.deko+=(r.deko-h.deko)*.12;const g=Math.abs(r.t-h.t)<.002&&Math.abs(r.deko-h.deko)<.002;g&&(h.t=r.t,h.deko=r.deko),l(E=>E+1),g||(o=requestAnimationFrame(z))};return o=requestAnimationFrame(z),()=>cancelAnimationFrame(o)},[r.t,r.deko]);const{t:j,deko:c}=t.current,a={};if(n>=2)for(const o of Se)a[o.key]="hervor";return e.jsxs("div",{className:p.wrapper,children:[e.jsx("p",{className:p.title,children:s}),e.jsxs("p",{className:p.hinweis,children:["Ein Navigationsgerät rechnet nie auf einer Karte. Es rechnet auf einem"," ",e.jsx("strong",{children:"Graphen"}),". Klicken Sie sich durch die fünf Stufen und beobachten Sie, was dabei alles verloren geht — und warum das nicht schlimm ist."]}),e.jsx("div",{className:p.stufen,children:He.map((o,z)=>e.jsx("button",{type:"button",className:`${p.stufe} ${z===n?p.stufeAktiv:""}`,onClick:()=>i(z),children:o.titel},o.titel))}),e.jsx("div",{className:p.canvas,children:e.jsx(Gn,{t:j,deko:c,zeigeKnoten:r.knoten,zeigeNamen:r.namen,zeigeGewichte:r.gewichte,zeigeStrassennamen:r.strassen,kantenStatus:a})}),e.jsxs("div",{className:p.controls,style:{marginTop:"var(--space-md)"},children:[e.jsx("button",{type:"button",className:p.button,onClick:()=>i(o=>Math.max(0,o-1)),disabled:n===0,children:"◀ Zurück"}),e.jsx("button",{type:"button",className:`${p.button} ${p.buttonPrimary}`,onClick:()=>i(o=>Math.min(He.length-1,o+1)),disabled:n===He.length-1,children:"Weiter ▶"}),e.jsxs("span",{className:p.schrittZaehler,children:["Stufe ",n+1," / ",He.length]})]}),e.jsx("p",{className:p.erklaerung,children:r.text}),n>=3&&e.jsxs("div",{className:`${p.panels} ${p.panelsZwei}`,children:[e.jsxs("div",{className:p.panel,children:[e.jsx("p",{className:p.panelTitel,children:"Strassentypen"}),e.jsxs("table",{className:p.tabelle,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Typ"}),e.jsx("th",{children:"Tempo"}),e.jsx("th",{children:"Beispiel"})]})}),e.jsx("tbody",{children:Object.entries(gn).map(([o,z])=>{const h=Se.find(g=>g.typ===o);return e.jsxs("tr",{children:[e.jsx("td",{style:{color:z.farbe},children:z.label}),e.jsxs("td",{children:[z.tempo,"×"]}),e.jsxs("td",{children:[h.strasse," (",h.w," min)"]})]},o)})})]})]}),e.jsxs("div",{className:p.panel,children:[e.jsx("p",{className:p.panelTitel,children:"So steht der Graph im Code"}),e.jsx("pre",{style:{margin:0,fontSize:"0.75rem",lineHeight:1.5,color:"var(--color-fg)",overflowX:"auto"},children:yc()})]})]}),n>=1&&e.jsxs("div",{className:p.stats,children:[e.jsxs("span",{className:p.stat,children:["Knoten: ",e.jsx("strong",{children:J.length})]}),e.jsxs("span",{className:p.stat,children:["Kanten: ",e.jsx("strong",{children:Se.length})]}),n>=3&&e.jsxs("span",{className:p.stat,children:["Gesamtfahrzeit aller Strassen:"," ",e.jsxs("strong",{children:[Se.reduce((o,z)=>o+z.w,0)," min"]})]})]})]})}function yc(){const s=["const graph = {"];for(const n of["A","B","C"]){const i=Se.filter(r=>r.a===n||r.b===n).map(r=>`${r.a===n?r.b:r.a}: ${r.w}`);s.push(`  ${n}: { ${i.join(", ")} },`)}return s.push("  // ..."),s.push("};"),s.join(`
`)}function Nc(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Kürzeste Wege"}),e.jsx("h2",{children:"Dijkstra und die Routenplanung"}),e.jsx("p",{children:"Wie ein Navigationsgerät rechnet"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Frage hinter jedem Navi"}),e.jsxs("p",{children:["Sie tippen ein Ziel ein und bekommen eine halbe Sekunde später eine Route. Dahinter steckt kein maschinelles Lernen, sondern ein Algorithmus von 1956: ",e.jsx("strong",{children:"Dijkstra"}),". Er beantwortet eine einzige Frage, dafür aber beweisbar korrekt:"]}),e.jsxs("blockquote",{children:["Was ist der ",e.jsx("em",{children:"billigste"})," Weg von A nach B, wenn jede Verbindung einen Preis hat?"]}),e.jsxs("p",{children:["«Billig» kann alles heissen: Kilometer, Minuten, Benzin, Franken, Höhenmeter. Für uns ist es die ",e.jsx("strong",{children:"Fahrzeit"}),"."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zuerst: eine Karte ist kein Graph"}),e.jsxs("p",{children:["Ein Algorithmus kann mit einem Bild nichts anfangen. Bevor irgendetwas gerechnet wird, muss die Karte in eine"," ",e.jsx("strong",{children:"Datenstruktur"})," übersetzt werden. Dabei wird fast alles weggeworfen: Häuser, Flüsse, die genaue Form der Strassen. Übrig bleiben nur drei Dinge:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Knoten"})," — Orte, an denen man sich entscheiden kann (Kreuzungen, Ziele)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kanten"})," — Strassenabschnitte zwischen zwei Knoten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gewichte"})," — was eine Kante kostet, hier die Fahrzeit in Minuten"]})]})]})}),e.jsx(Ac,{}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was dabei verloren geht — und warum das gut ist"}),e.jsxs("p",{children:["Ob die Bahnhofstrasse eine Rechtskurve macht, ändert nichts an der Fahrzeit. Genau deshalb darf man sie weglassen. Der Graph behält nur, was für die ",e.jsx("em",{children:"Entscheidung"})," zählt: Welche Orte sind direkt verbunden, und wie teuer ist die Verbindung?"]}),e.jsxs("p",{children:["Gespeichert wird das als ",e.jsx("strong",{children:"Adjazenzliste"}),": zu jedem Knoten eine Liste seiner Nachbarn mit dem jeweiligen Gewicht. Mehr braucht der Algorithmus nicht."]}),e.jsxs("p",{children:["Einbahnstrassen wären übrigens kein Problem: Dann stünde die Verbindung nur in ",e.jsx("em",{children:"einer"})," Richtung in der Liste."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee: der Ölfleck"}),e.jsxs("p",{children:["Stellen Sie sich vor, Sie giessen am Startort Öl auf die Karte. Es breitet sich in alle Richtungen aus, aber auf schnellen Strassen schneller als auf langsamen. Nach ",e.jsx("code",{children:"t"})," Minuten hat das Öl genau die Orte erreicht, die in ",e.jsx("code",{children:"t"})," Minuten erreichbar sind."]}),e.jsx("p",{children:"Dijkstra macht genau das, nur in Einzelschritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Jeder Ort bekommt eine ",e.jsx("strong",{children:"Distanz"})," (anfangs ∞, der Start 0) und einen ",e.jsx("strong",{children:"Vorgänger"}),"."]}),e.jsxs("li",{children:["Nimm aus der ",e.jsx("strong",{children:"Grenze"})," den Ort mit der"," ",e.jsx("em",{children:"kleinsten"})," bekannten Distanz."]}),e.jsxs("li",{children:["Dieser Wert ist jetzt ",e.jsx("strong",{children:"endgültig"})," — kein späterer Weg kann kürzer sein."]}),e.jsxs("li",{children:["Prüfe alle Nachbarn: Ist der Weg über diesen Ort besser als der bisher bekannte? Dann eintragen (",e.jsx("em",{children:"Relaxation"}),")."]}),e.jsx("li",{children:"Zurück zu Schritt 2, bis das Ziel endgültig ist."})]}),e.jsxs("p",{children:["Schritt 3 ist der Kern. Warum darf man so sicher sein? Weil alle Gewichte ",e.jsx("strong",{children:"positiv"})," sind: Ein Umweg über einen noch teureren Ort kann nie billiger werden. Genau deshalb funktioniert Dijkstra ",e.jsx("em",{children:"nicht"})," mit negativen Kosten."]})]})}),e.jsx(vc,{}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beobachten Sie zwei Dinge"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Erstens:"})," Die Distanz eines Ortes kann sich mehrmals verbessern, solange er in der Grenze liegt. Erst wenn er gewählt wird, ist Schluss."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zweitens:"})," Dijkstra schaut ",e.jsx("em",{children:"nicht"})," Richtung Ziel. Er expandiert auch in die komplett falsche Richtung, nur weil es dort gerade billig ist. Bei einer Fahrt von Zürich nach Genf würde er fleissig auch Richtung München suchen."]}),e.jsxs("p",{children:["Letzte Woche haben wir dagegen bereits ein Mittel gesehen: A",e.jsx("sup",{children:"*"})," benutzt eine Heuristik und zieht die Suche Richtung Ziel. Dijkstra ist übrigens genau A",e.jsx("sup",{children:"*"})," mit"," ",e.jsx("code",{children:"h(n) = 0"}),"."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wo ist eigentlich die Route?"}),e.jsxs("p",{children:["Dijkstra rechnet die ganze Zeit mit ",e.jsx("strong",{children:"Distanzen"})," — die Route selbst steht nirgends im Speicher. Sie entsteht erst am Schluss, und zwar rückwärts: Jeder Ort merkt sich beim Eintragen seiner Distanz, von welchem ",e.jsx("strong",{children:"Vorgänger"})," aus er gefunden wurde."]}),e.jsx("p",{children:"Vom Ziel aus folgt man dieser Kette von Vorgängern rückwärts bis zum Start und dreht sie am Ende um. Das kostet fast nichts — und es ist der Grund, warum die Spalte «Vorgänger» in der Tabelle so wichtig ist."})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zwei kleine Kreise statt einem grossen"}),e.jsxs("p",{children:["Der Ölfleck wächst ungefähr kreisförmig. Ein Kreis mit Radius"," ",e.jsx("code",{children:"r"})," hat die Fläche ",e.jsx("code",{children:"π·r²"}),". Zwei Kreise mit Radius ",e.jsx("code",{children:"r/2"})," haben zusammen nur"," ",e.jsx("code",{children:"2·π·(r/2)² = π·r²/2"})," — also die ",e.jsx("strong",{children:"Hälfte"}),"."]}),e.jsxs("p",{children:["Genau das macht der ",e.jsx("strong",{children:"bidirektionale Dijkstra"}),": Er startet zwei Suchen gleichzeitig, eine beim Start vorwärts und eine beim Ziel rückwärts. Treffen sie sich in der Mitte, ist die Route zusammengesetzt aus beiden Hälften."]}),e.jsxs("p",{children:["Der Haken ist das ",e.jsx("strong",{children:"Abbruchkriterium"}),". Sobald sich die beiden Suchräume berühren, kennt man ",e.jsx("em",{children:"einen"})," Weg — aber nicht unbedingt den kürzesten. Man merkt sich deshalb den besten bisher gefundenen Gesamtweg als ",e.jsx("code",{children:"µ"})," und darf erst aufhören, wenn gilt:"]}),e.jsx("blockquote",{children:e.jsx("code",{children:"top(vorwärts) + top(rückwärts) ≥ µ"})}),e.jsxs("p",{children:["Dann kann kein noch unentdeckter Weg mehr kürzer sein als"," ",e.jsx("code",{children:"µ"}),"."]})]})}),e.jsx(wc,{}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Warum das in der Praxis zählt"}),e.jsxs("p",{children:["Auf unserem Spielnetz mit 13 Orten spart man ein paar Knoten. Das Strassennetz von Europa hat rund ",e.jsx("strong",{children:"50 Millionen"})," ","Knoten. Dort ist die Halbierung des Suchraums der Unterschied zwischen «mehrere Sekunden» und «sofort»."]}),e.jsx("p",{children:"Echte Routenplaner gehen noch weiter und kombinieren mehrere Tricks:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"})]})," ","mit Luftlinie als Heuristik — zieht die Suche Richtung Ziel"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bidirektionale Suche"})," — halbiert den Suchraum"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Contraction Hierarchies"})," — Autobahnen werden vorberechnet «abgekürzt», so dass die Fernfahrt nur wenige Kanten kostet"]})]}),e.jsx("p",{children:"Alle diese Verfahren bauen auf derselben Grundidee auf, die Sie gerade Schritt für Schritt gesehen haben."})]})}),e.jsx(en,{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Ich kann erklären, wie aus einer Karte ein gewichteter Graph wird und was dabei weggelassen wird."}),e.jsx("li",{children:"Ich kann einen kleinen Graphen als Adjazenzliste aufschreiben."}),e.jsx("li",{children:"Ich kann Dijkstra von Hand ausführen und dabei die Tabelle mit Distanz und Vorgänger korrekt nachführen."}),e.jsx("li",{children:"Ich kann begründen, warum ein aus der Grenze gewählter Knoten endgültig ist — und warum das negative Gewichte ausschliesst."}),e.jsx("li",{children:"Ich kann aus den Vorgängern die Route rekonstruieren."}),e.jsx("li",{children:"Ich kann die Idee des bidirektionalen Dijkstra erklären und sagen, warum man beim ersten Treffen der beiden Suchen noch nicht aufhören darf."}),e.jsxs("li",{children:["Ich kann den Zusammenhang zwischen Dijkstra und A",e.jsx("sup",{children:"*"})," ","benennen (",e.jsx("code",{children:"h(n) = 0"}),")."]})]})})]})}const Pd=Object.freeze(Object.defineProperty({__proto__:null,default:Nc},Symbol.toStringTag,{value:"Module"})),mn={w:820,h:480},de=[{id:"S",label:"Wohnquartier",x:62,y:320,ebene:0},{id:"E",label:"Schule",x:105,y:440,ebene:0},{id:"A",label:"Dorfplatz",x:155,y:255,ebene:0},{id:"K",label:"Klinik",x:180,y:160,ebene:0},{id:"B",label:"Markt",x:215,y:395,ebene:0},{id:"F",label:"Bahnhof",x:285,y:290,ebene:1},{id:"P",label:"Auffahrt West",x:330,y:170,ebene:2},{id:"W",label:"Rastplatz",x:400,y:85,ebene:1},{id:"Q",label:"Autobahnkreuz",x:480,y:58,ebene:2},{id:"X",label:"Tunnel",x:565,y:95,ebene:1},{id:"R",label:"Ausfahrt Ost",x:625,y:185,ebene:2},{id:"G",label:"Industrie",x:670,y:295,ebene:1},{id:"D",label:"Gewerbe",x:700,y:400,ebene:0},{id:"T",label:"Hotel",x:782,y:325,ebene:0}],On=Object.fromEntries(de.map(s=>[s.id,s])),$=s=>On[s]?.label??s,ss=s=>s===1?"1 Strasse fällt weg":`${s} Strassen fallen weg`,Bn=s=>s===1?"1 Abkürzung":`${s} Abkürzungen`,ze=[{a:"S",b:"E",w:3,typ:"neben"},{a:"E",b:"B",w:5,typ:"neben"},{a:"S",b:"A",w:4,typ:"neben"},{a:"A",b:"B",w:3,typ:"neben"},{a:"A",b:"K",w:2,typ:"neben"},{a:"K",b:"F",w:4,typ:"neben"},{a:"B",b:"F",w:4,typ:"neben"},{a:"F",b:"P",w:3,typ:"haupt"},{a:"P",b:"W",w:3,typ:"autobahn"},{a:"W",b:"Q",w:4,typ:"autobahn"},{a:"Q",b:"X",w:4,typ:"autobahn"},{a:"X",b:"R",w:3,typ:"autobahn"},{a:"R",b:"G",w:3,typ:"haupt"},{a:"G",b:"D",w:4,typ:"neben"},{a:"D",b:"T",w:5,typ:"neben"}],te=(s,n)=>s<n?`${s}|${n}`:`${n}|${s}`;function Ds(s){const n={};for(const i of de)n[i.id]=new Map;for(const i of s){const r=n[i.a].get(i.b);(r===void 0||i.w<r)&&(n[i.a].set(i.b,i.w),n[i.b].set(i.a,i.w))}return n}function Es(s,n,i,r,t,l){const j={[i]:0},c=new Set,a=new Set([i]);for(;a.size>0;){let o=null;for(const z of a)(o===null||j[z]<j[o])&&(o=z);if(a.delete(o),c.add(o),o===r)return j[o];if(j[o]>l)return 1/0;for(const[z,h]of s[o]){if(z===t||!n.has(z)||c.has(z))continue;const g=j[o]+h;(j[z]===void 0||g<j[z])&&(j[z]=g,a.add(z))}}return 1/0}function Dc(s,n,i){const r=[...s[i].keys()].filter(j=>n.has(j)&&j!==i),t=[];for(let j=0;j<r.length;j++)for(let c=j+1;c<r.length;c++){const a=r[j],o=r[c],z=s[i].get(a)+s[i].get(o),h=Es(s,new Set([...n].filter(g=>g!==i)),a,o,i,z);t.push({u:a,w:o,v:i,ueber:z,ohne:h,noetig:h>z})}const l=t.filter(j=>j.noetig).length;return{nachbarn:r,paare:t,noetig:l,weg:r.length,prio:l-r.length}}function Ec(){const s=Ds(ze),n=new Set(de.map(a=>a.id)),i=[],r=[],t={},l=[],j=a=>r.push({kontrahiert:[],aktuell:null,pruefung:null,prioritaeten:null,probe:null,shortcuts:i.map(o=>({...o})),rang:{...t},...a});j({phase:"start",text:"Die Wichtigkeit der Orte ist nicht vorgegeben — sie wird ausgerechnet. Dazu wird bei jedem Ort nur *probiert*, ihn wegzunehmen: Priorität = (Abkürzungen, die man danach bräuchte) − (Strassen, die dabei wegfallen). Kleinste Priorität = unwichtigster Ort → kommt zuerst weg und bekommt Rang 1."});let c=0;for(;n.size>0;){c+=1;const a=[...n].map(b=>({id:b,...Dc(s,n,b)}));if(c===1){const b=[];for(const f of a){b.push({id:f.id,noetig:f.noetig,weg:f.weg,prio:f.prio,gewaehlt:!1});const S=f.paare.map(k=>`${k.u}–${k.w}: über ${f.id} ${k.ueber} min, ohne ${f.id} ${k.ohne===1/0?"gar nicht":`${k.ohne} min`} → ${k.noetig?"Abkürzung nötig":"keine nötig"}`);j({phase:"probe",aktuell:f.id,kontrahiert:[...l],probe:{id:f.id,nachbarn:f.nachbarn,paare:f.paare,noetig:f.noetig,weg:f.weg,prio:f.prio},prioritaeten:b.map(k=>({...k})),text:`Probe: Was würde es kosten, ${$(f.id)} wegzunehmen? Nachbarn: ${f.nachbarn.map($).join(", ")||"keine"} → ${f.paare.length} Nachbarpaar${f.paare.length===1?"":"e"} prüfen. `+(S.length>0?`${S.join("; ")}. `:"")+`Also: ${Bn(f.noetig)} nötig, ${ss(f.weg)} → Priorität ${f.noetig} − ${f.weg} = ${f.prio}.`})}}const o=a.sort((b,f)=>b.prio-f.prio||On[b.id].ebene-On[f.id].ebene||b.id.localeCompare(f.id)),z=o[0],h=z.id,g=o.filter(b=>b.prio===z.prio).length;j({phase:"wichtigkeit",aktuell:h,kontrahiert:[...l],prioritaeten:o.map(b=>({id:b.id,noetig:b.noetig,weg:b.weg,prio:b.prio,gewaehlt:b.id===h})),text:`Runde ${c}: alle Proben nebeneinander, sortiert nach Priorität (= nötige Abkürzungen − wegfallende Strassen). ${$(h)} ist am günstigsten: ${Bn(z.noetig)} nötig, ${ss(z.weg)} → Priorität ${z.prio}. `+(g>1?`${g} Orte liegen gleichauf — bei Gleichstand kommt die kleinere Strassenkategorie zuerst weg (Quartier vor Haupt vor Autobahn). `:"")+`${$(h)} bekommt Rang ${c}.`}),t[h]=c;const{nachbarn:E}=z;E.length<2&&j({phase:"pruef",aktuell:h,kontrahiert:[...l],text:E.length===1?`${$(h)} hat nur noch einen Nachbarn. Durch den Ort führt kein Weg mehr hindurch — es braucht keine Abkürzung.`:`${$(h)} hat gar keine Nachbarn mehr — der letzte Ort. Nichts mehr zu tun.`});for(let b=0;b<E.length;b++)for(let f=b+1;f<E.length;f++){const S=E[b],k=E[f],u=s[h].get(S)+s[h].get(k),v=Es(s,new Set([...n].filter(F=>F!==h)),S,k,h,u),_=v>u;_&&(s[S].set(k,u),s[k].set(S,u),i.push({a:S,b:k,w:u,ueber:h,key:te(S,k)})),j({phase:"pruef",aktuell:h,kontrahiert:[...l],pruefung:{u:S,w:k,v:h,ueber:u,ohne:v,noetig:_},text:_?`${$(S)} → ${$(k)} dauert über ${$(h)} ${u} min. Ohne ${$(h)} wäre es ${v===1/0?"gar nicht möglich":`${v} min`} — also kommt eine Abkürzung ${S}–${k} mit ${u} min ins Netz.`:`${$(S)} → ${$(k)} dauert über ${$(h)} ${u} min, es geht aber auch ohne ${$(h)} in ${v} min. Keine Abkürzung nötig.`})}n.delete(h),l.push(h),j({phase:"entfernt",aktuell:null,kontrahiert:[...l],text:`${$(h)} ist kontrahiert und hat Rang ${c}. Insgesamt ${Bn(i.length)} bisher. Die Abkürzungen bleiben im Netz — sie ersetzen die Wege durch die weggenommenen Orte.`})}return j({phase:"fertig",kontrahiert:[...l],text:`Fertig. Jeder Ort hat jetzt einen Rang (★), und das Netz hat ${ze.length} echte Strassen plus ${i.length} Abkürzungen. Die Reihenfolge der Kontraktion *ist* die Hierarchie: kleine Quartierstrassen unten, Autobahn oben.`}),{schritte:r,shortcuts:i,rang:t}}let Wn=null;function kn(){return Wn||(Wn=Ec()),Wn}const se=s=>kn().rang[s]??0;function Bc(){const{shortcuts:s}=kn();return{kanten:[...ze.map(i=>({...i,key:te(i.a,i.b),shortcut:!1})),...s.map(i=>({...i,shortcut:!0}))],shortcuts:s}}function Wc(s){const n={};for(const i of de)n[i.id]=[];for(const i of s)se(i.a)<se(i.b)?n[i.a].push({to:i.b,w:i.w,e:i}):n[i.b].push({to:i.a,w:i.w,e:i});for(const i of Object.keys(n))n[i].sort((r,t)=>se(r.to)-se(t.to));return n}function _c(s="S",n="T"){const{kanten:i,shortcuts:r}=Bc(),t=Wc(i),l=v=>{const _={};for(const F of de)_[F.id]=1/0;return _[v]=0,{dist:_,prev:{},besucht:new Set,offen:new Set([v])}},j=l(s),c=l(n),a=[];let o={knoten:null,summe:1/0};const z=v=>a.push({distV:{...j.dist},distR:{...c.dist},besuchtV:[...j.besucht],besuchtR:[...c.besucht],aktuell:null,seite:null,kante:null,bestes:{...o},pfad:null,pfadKanten:null,...v}),h=v=>{const _=i.filter(B=>B.a===v||B.b===v),F=t[v].length;return{hoch:F,ab:_.length-F}},g=h(s),E=h(n);z({phase:"start",text:`Zwei Suchen starten: eine bei ${$(s)}, eine bei ${$(n)}. Beide dürfen nur zu *wichtigeren* Orten weiterlaufen (höherer Rang ★), nie bergab. ${$(s)} hat ${g.ab} Strasse${g.ab===1?"":"n"} bergab (gesperrt) und nur ${g.hoch} Verbindung${g.hoch===1?"":"en"} bergauf, ${$(n)} ebenso ${E.hoch}. Genau dafür gibt es die Abkürzungen.`});const b=(v,_,F)=>{let B=null;for(const O of v.offen)(B===null||v.dist[O]<v.dist[B])&&(B=O);if(B===null)return!1;v.offen.delete(B),v.besucht.add(B),_.dist[B]<1/0&&v.dist[B]+_.dist[B]<o.summe&&(o={knoten:B,summe:v.dist[B]+_.dist[B]});const K=v.dist[B]>o.summe;if(z({phase:"waehle",aktuell:B,seite:F,text:`${F==="V"?"Vorwärts":"Rückwärts"}: ${$(B)} ist dran (${v.dist[B]} min).${o.knoten===B?` Beide Suchen kennen diesen Ort — zusammen ${o.summe} min, das ist der beste Treffer bisher.`:""}${K?` Das ist bereits mehr als der beste bekannte Weg (${o.summe} min) — hier wird abgeschnitten.`:""}`}),K)return!0;if(t[B].length===0)return z({phase:"pruef",aktuell:B,seite:F,text:`${$(B)} ist der wichtigste Ort auf diesem Ast — von hier geht es nicht weiter bergauf.`}),!0;for(const{to:O,w:I,e:w}of t[B]){const m=v.dist[B]+I,N=m<v.dist[O];N&&(v.dist[O]=m,v.prev[O]={von:B,e:w},v.offen.add(O));const M=w.shortcut?` — das ist die Abkürzung über ${$(w.ueber)}, eine echte Strasse gibt es hier nicht`:"";z({phase:"pruef",aktuell:B,seite:F,kante:{key:w.key??te(w.a,w.b),besser:N,shortcut:w.shortcut},text:`${$(B)} → ${$(O)}: ${v.dist[B]} + ${I} = ${m}${N?" → eintragen":" → nicht besser"}${M}.`})}return!0};let f=!0;for(;f;){const v=j.offen.size>0?b(j,c,"V"):!1,_=c.offen.size>0?b(c,j,"R"):!1;f=v||_}const S=o.knoten?Fc(j,c,o.knoten):null,k=S?Pc(S):null,u=(S??[]).filter(v=>v.shortcut);return z({phase:"fertig",pfad:k,pfadKanten:S,text:o.knoten?`Treffpunkt ist ${$(o.knoten)} mit insgesamt ${o.summe} min. `+(u.length>0?`Der gefundene Weg benutzt ${u.length} Abkürzung${u.length===1?"":"en"} (${u.map(v=>`${v.von}–${v.nach}`).join(", ")}). Zum Schluss werden sie wieder «ausgepackt» — dann sieht man die echte Route.`:"Hier wurde keine Abkürzung gebraucht."):"Es gibt keinen Weg."}),{schritte:a,shortcuts:r,kanten:i,pfad:k,pfadKanten:S,bestes:o}}function Fc(s,n,i){const r=[];let t=i;for(;s.prev[t];){const{von:j,e:c}=s.prev[t];r.unshift({von:j,nach:t,w:c.w,shortcut:!!c.shortcut,ueber:c.ueber}),t=j}const l=[];for(t=i;n.prev[t];){const{von:j,e:c}=n.prev[t];l.push({von:t,nach:j,w:c.w,shortcut:!!c.shortcut,ueber:c.ueber}),t=j}return[...r,...l]}function bn(s,n){if(ze.some(l=>te(l.a,l.b)===te(s,n)))return[s,n];const{shortcuts:r}=kn(),t=r.find(l=>l.key===te(s,n));return t?[...bn(s,t.ueber),...bn(t.ueber,n).slice(1)]:[s,n]}function Pc(s){if(s.length===0)return[];let n=[s[0].von];for(const i of s)n=[...n,...bn(i.von,i.nach).slice(1)];return n}function Zc(s,n){return bn(s,n)}function Kc(s){const n=Object.fromEntries(ze.map(r=>[te(r.a,r.b),r.w]));let i=0;for(let r=0;r+1<s.length;r++)i+=n[te(s[r],s[r+1])]??0;return i}function Mc(s,n){const i=Ds(ze),r={};for(const j of de)r[j.id]=1/0;r[s]=0;const t=new Set,l=new Set([s]);for(;l.size>0;){let j=null;for(const c of l)(j===null||r[c]<r[j])&&(j=c);if(l.delete(j),t.add(j),j===n)break;for(const[c,a]of i[j]){if(t.has(c))continue;const o=r[j]+a;o<r[c]&&(r[c]=o,l.add(c))}}return{dauer:r[n],besucht:t.size}}const is={langsam:{label:"langsam",ms:1100},normal:{label:"normal",ms:550},schnell:{label:"schnell",ms:220}},rs=Math.max(...de.map(s=>se(s.id)));function Oc(s,n){return n?{x:55+[...de].sort((t,l)=>t.x-l.x).findIndex(t=>t.id===s.id)*(mn.w-110)/(de.length-1),y:40+(rs-se(s.id))*(mn.h-90)/(rs-1)}:{x:s.x,y:s.y}}function Tc({title:s="Contraction Hierarchies: Abkürzungen vorberechnen"}){const[n,i]=D.useState("pre"),[r,t]=D.useState(0),[l,j]=D.useState(!1),[c,a]=D.useState("normal"),[o,z]=D.useState(!1),[h,g]=D.useState(!1),E=D.useMemo(()=>kn(),[]),b=D.useMemo(()=>_c("S","T"),[]),f=D.useMemo(()=>Mc("S","T"),[]),S=n==="pre"?E.schritte:b.schritte,k=S.length-1,u=S[Math.min(r,k)],v=D.useCallback(m=>{i(m),t(0),j(!1)},[]);D.useEffect(()=>{if(!l)return;const m=setInterval(()=>{t(N=>N>=k?(j(!1),N):N+1)},is[c].ms);return()=>clearInterval(m)},[l,c,k]);const _=n==="pre"?u.shortcuts:b.shortcuts.map(m=>({...m})),F={},B={},K={};if(n==="pre"){for(const m of u.kontrahiert)F[m]="weg";if(u.probe)for(const m of u.probe.nachbarn)F[m]="paar",K[te(u.probe.id,m)]="paar";u.aktuell&&(F[u.aktuell]="aktuell"),u.pruefung&&(F[u.pruefung.u]="paar",F[u.pruefung.w]="paar",K[te(u.pruefung.u,u.pruefung.v)]="paar",K[te(u.pruefung.v,u.pruefung.w)]="paar")}else{for(const m of u.besuchtV)F[m]="besuchtV";for(const m of u.besuchtR)F[m]="besuchtR";u.aktuell&&(F[u.aktuell]="aktuell"),u.bestes?.knoten&&(F[u.bestes.knoten]="treff"),F.S="start",F.T="ziel";for(const m of de){const N=u.distV[m.id],M=u.distR[m.id];N===1/0&&M===1/0||(B[m.id]=`${N===1/0?"∞":N}|${M===1/0?"∞":M}`)}if(u.kante&&(K[u.kante.key]=u.kante.besser?"gut":"pruef"),u.pfad)for(let m=0;m+1<u.pfad.length;m++)K[te(u.pfad[m],u.pfad[m+1])]="pfad"}const O=n==="anfrage"&&u.pfad?u.pfad:null,I=n==="anfrage"&&u.pfadKanten?u.pfadKanten:null,w=new Set((b.pfadKanten??[]).filter(m=>m.shortcut).map(m=>te(m.von,m.nach)));return e.jsxs("div",{className:p.wrapper,children:[e.jsx("p",{className:p.title,children:s}),e.jsxs("p",{className:p.hinweis,children:["Ein Strassennetz ist ",e.jsx("strong",{children:"hierarchisch"}),": Quartierstrassen unten, Hauptstrassen in der Mitte, Autobahnen oben. Das Verfahren arbeitet in zwei Schritten. ",e.jsx("strong",{children:"1. Vorverarbeitung:"})," Die Wichtigkeit (★ Rang) jedes Ortes wird ",e.jsx("em",{children:"ausgerechnet"}),", mit der Formel"," ",e.jsx("code",{children:"Priorität = nötige Abkürzungen − wegfallende Strassen"}),". Der Ort mit der kleinsten Priorität kommt als Nächster weg und bekommt den nächsten Rang. ",e.jsx("strong",{children:"2. Anfrage:"})," Beide Suchen laufen nur noch bergauf. Aus dem Quartier führt dann keine echte Strasse mehr nach oben — die Suche ",e.jsx("em",{children:"muss"})," die vorberechneten Abkürzungen benutzen. Genau das macht sie so schnell."]}),e.jsxs("div",{className:p.controls,children:[e.jsx("button",{type:"button",className:`${p.button} ${n==="pre"?p.buttonPrimary:""}`,onClick:()=>v("pre"),children:"1. Vorverarbeitung"}),e.jsx("button",{type:"button",className:`${p.button} ${n==="anfrage"?p.buttonPrimary:""}`,onClick:()=>v("anfrage"),children:"2. Anfrage"}),e.jsx("span",{className:p.spacer}),e.jsx("button",{type:"button",className:p.button,onClick:()=>z(m=>!m),children:o?"Als Karte zeigen":"Nach Wichtigkeit stapeln"}),n==="anfrage"&&e.jsx("button",{type:"button",className:p.button,onClick:()=>g(m=>!m),children:h?"Richtungspfeile aus":"Richtungspfeile an"})]}),e.jsxs("details",{className:p.erklaerBox,open:n==="pre",children:[e.jsx("summary",{className:p.erklaerTitel,children:"So wird die Wichtigkeit (★ Rang) berechnet"}),e.jsxs("ol",{className:p.erklaerListe,children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Nur probieren, noch nichts ändern."})," Für einen Ort"," ",e.jsx("code",{children:"v"})," wird gedanklich durchgespielt: Was wäre, wenn es ihn nicht mehr gäbe?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jedes Nachbarpaar prüfen."})," Für zwei Nachbarn"," ",e.jsx("code",{children:"u"})," und ",e.jsx("code",{children:"w"})," von ",e.jsx("code",{children:"v"})," wird die Fahrzeit ",e.jsx("code",{children:"u→v→w"})," (Summe der beiden Strassen) mit dem kürzesten Weg ",e.jsx("em",{children:"ohne"})," ",e.jsx("code",{children:"v"})," verglichen («Witness Search»: Gibt es einen Zeugen, dass es auch anders geht?). Nur wenn der Weg über ",e.jsx("code",{children:"v"})," echt kürzer ist, wäre eine"," ",e.jsx("strong",{children:"Abkürzung"})," ",e.jsx("code",{children:"u–w"})," nötig — sonst nicht."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Priorität ausrechnen:"})," ",e.jsx("code",{children:"Priorität = nötige Abkürzungen − Anzahl Strassen, die wegfallen"}),". Beispiel «Markt»: Nachbarn Schule, Dorfplatz, Bahnhof → 3 Paare, davon braucht nur Schule–Bahnhof eine Abkürzung (9 min über den Markt, 13 min ohne ihn) → ",e.jsx("code",{children:"1 − 3 = −2"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kleinste Priorität gewinnt."})," Dieser Ort ist am «billigsten» wegzunehmen, wird wirklich kontrahiert, bekommt den nächsten Rang (★1 = zuerst weg = unwichtigster Ort) und seine Abkürzungen kommen fest ins Netz. Bei Gleichstand kommt die kleinere Strassenkategorie zuerst (Quartier → Haupt → Autobahn)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Neu rechnen."})," Durch das Wegnehmen ändert sich die Nachbarschaft, deshalb werden die Prioritäten vor jeder Runde neu bestimmt — bis alle Orte einen Rang haben."]})]}),e.jsx("p",{className:p.erklaerSchluss,children:"Warum das sinnvoll ist: Wer kaum Abkürzungen kostet, liegt auf wenigen kürzesten Wegen — eine Sackgasse, ein Quartier, eine Schule. Echte Durchgangsorte (Auffahrt, Autobahnkreuz) würden viele Abkürzungen erzwingen und bleiben deshalb bis zuletzt übrig. So entsteht von selbst die Hierarchie: kleine Strassen unten, Autobahn oben."})]}),e.jsxs("div",{className:p.controls,children:[e.jsx("button",{type:"button",className:`${p.button} ${p.buttonPrimary}`,onClick:()=>j(m=>!m),disabled:r>=k,children:l?"Pause":"Abspielen"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>t(m=>Math.max(0,m-1)),disabled:r===0,children:"◀ Schritt"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>t(m=>Math.min(k,m+1)),disabled:r>=k,children:"Schritt ▶"}),e.jsx("button",{type:"button",className:p.button,onClick:()=>{t(0),j(!1)},children:"Zurücksetzen"}),e.jsx("span",{className:p.label,children:"Tempo"}),e.jsx("select",{className:p.select,value:c,onChange:m=>a(m.target.value),children:Object.entries(is).map(([m,N])=>e.jsx("option",{value:m,children:N.label},m))})]}),e.jsx("div",{className:p.canvas,children:e.jsx(Ic,{hierarchie:o,shortcuts:_,knotenStatus:F,knotenText:B,kantenStatus:K,richtungen:n==="anfrage"&&h,raenge:n==="pre"?u.rang:Object.fromEntries(de.map(m=>[m.id,se(m.id)]))})}),e.jsxs("p",{className:p.erklaerung,children:[e.jsxs("span",{className:p.schrittZaehler,children:["Schritt ",Math.min(r,k)+1," / ",S.length," ·"," "]}),u.text]}),e.jsxs("div",{className:p.panels,children:[n==="pre"&&e.jsxs("div",{className:p.panel,children:[e.jsx("p",{className:p.panelTitel,children:"Wichtigkeit: Priorität = Abkürzungen − Strassen"}),e.jsx("p",{className:p.chipLeer,children:"Pro Ort wird probiert: Wie viele Abkürzungen bräuchte es, wenn er weg wäre? Wie viele Strassen fallen weg? Kleinste Priorität = unwichtigster Ort → wird als Nächster kontrahiert (bei Gleichstand Quartier vor Haupt vor Autobahn)."}),u.probe&&e.jsxs("div",{className:p.queue,children:[u.probe.paare.length===0?e.jsxs("span",{className:p.chipLeer,children:[u.probe.id,": ",u.probe.nachbarn.length," Nachbar",u.probe.nachbarn.length===1?"":"n"," → kein Paar zu prüfen"]}):u.probe.paare.map(m=>e.jsxs("span",{className:m.noetig?p.chipR:p.chip,children:[m.u,"–",m.w,": über ",u.probe.id," ",m.ueber," / ohne"," ",m.ohne===1/0?"∞":m.ohne," ",m.noetig?"→ Abkürzung":"→ unnötig"]},`${m.u}-${m.w}`)),e.jsxs("span",{className:p.chip,children:["= ",u.probe.noetig," − ",u.probe.weg," = Priorität ",u.probe.prio]})]}),u.prioritaeten?e.jsxs("table",{className:p.tabelle,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Ort"}),e.jsx("th",{children:"Abk. nötig"}),e.jsx("th",{children:"Strassen weg"}),e.jsx("th",{children:"Rechnung"}),e.jsx("th",{children:"Priorität"})]})}),e.jsx("tbody",{children:u.prioritaeten.map(m=>e.jsxs("tr",{className:m.gewaehlt?p.zeileAktuell:"",children:[e.jsxs("td",{children:[m.id," · ",$(m.id)]}),e.jsx("td",{children:m.noetig}),e.jsx("td",{children:m.weg}),e.jsxs("td",{children:[m.noetig," − ",m.weg]}),e.jsx("td",{children:m.prio})]},m.id))})]}):e.jsxs("p",{className:p.chipLeer,children:["Vergebene Ränge:"," ",Object.keys(u.rang??{}).length===0?"noch keine":Object.entries(u.rang).sort((m,N)=>m[1]-N[1]).map(([m,N])=>`${m}=★${N}`).join(", ")]})]}),e.jsxs("div",{className:p.panel,children:[e.jsx("p",{className:p.panelTitel,children:"Abkürzungen (Shortcuts)"}),e.jsx("div",{className:p.queue,children:_.length===0?e.jsx("span",{className:p.chipLeer,children:"noch keine"}):_.map(m=>{const N=Zc(m.a,m.b),M=n==="anfrage"&&w.has(m.key);return e.jsxs("span",{className:M?p.chipR:p.chip,children:[m.a,"–",m.b," : ",m.w," min = ",N.join("–"),M?" ✓ im Weg benutzt":""]},m.key)})})]})]}),e.jsxs("div",{className:p.stats,children:[e.jsxs("span",{className:p.stat,children:["echte Strassen: ",e.jsx("strong",{children:ze.length})]}),e.jsxs("span",{className:p.stat,children:["Abkürzungen: ",e.jsx("strong",{children:_.length})]}),n==="anfrage"&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:p.stat,children:["angeschaut vorwärts: ",e.jsx("strong",{children:u.besuchtV.length})]}),e.jsxs("span",{className:p.stat,children:["angeschaut rückwärts: ",e.jsx("strong",{children:u.besuchtR.length})]}),e.jsxs("span",{className:p.stat,children:["Abkürzungen im Weg: ",e.jsx("strong",{children:w.size})]}),e.jsxs("span",{className:p.stat,children:["bester Treffer:"," ",e.jsx("strong",{children:u.bestes.knoten?`${$(u.bestes.knoten)} (${u.bestes.summe} min)`:"—"})]})]})]}),O&&e.jsxs("div",{className:p.ergebnis,children:[e.jsx("strong",{children:"Gefunden in der Hierarchie:"})," ",I?.map(m=>`${m.von}${m.shortcut?` ⇢(Abk. ${m.w}) `:` →(${m.w}) `}${m.nach}`).join("  "),e.jsx("br",{}),e.jsx("strong",{children:"Ausgepackte Route:"})," ",O.map(m=>$(m)).join(" → ")," ·"," ",e.jsxs("strong",{children:[Kc(O)," min"]}),e.jsx("br",{}),"Genau dasselbe Ergebnis wie der normale Dijkstra (",f.dauer," ","min) — nur hat Dijkstra dafür ",e.jsx("strong",{children:f.besucht})," ","Orte angeschaut, die Anfrage mit Abkürzungen nur"," ",e.jsx("strong",{children:u.besuchtV.length+u.besuchtR.length}),". Im echten Strassennetz Europas wird aus diesem kleinen Unterschied ein Faktor von rund ",e.jsx("strong",{children:"einer Million"}),"."]}),e.jsxs("div",{className:p.legende,children:[e.jsx(Je,{farbe:"#d3869b",text:"Abkürzung (Shortcut)"}),e.jsx(Je,{farbe:"#fe8019",text:"aktueller Ort"}),e.jsx(Je,{farbe:"#504945",text:"schon kontrahiert"}),n==="anfrage"&&h&&e.jsx("span",{className:p.legendeItem,children:"▸ erlaubte Richtung (bergauf)"}),n==="anfrage"&&e.jsxs(e.Fragment,{children:[e.jsx(Je,{farbe:"#83a598",text:"vorwärts angeschaut"}),e.jsx(Je,{farbe:"#d3869b",text:"rückwärts angeschaut"})]})]})]})}function Ic({hierarchie:s,shortcuts:n,knotenStatus:i,knotenText:r,kantenStatus:t,richtungen:l=!1,raenge:j={}}){const c=Object.fromEntries(de.map(o=>[o.id,Oc(o,s)])),a=(o,z,h=0)=>{const g=c[o],E=c[z],b=(g.x+E.x)/2,f=(g.y+E.y)/2;if(h===0)return`M ${g.x} ${g.y} L ${E.x} ${E.y}`;const S=E.x-g.x,k=E.y-g.y,u=Math.hypot(S,k)||1,v=b-k/u*h,_=f+S/u*h;return`M ${g.x} ${g.y} Q ${v} ${_} ${E.x} ${E.y}`};return e.jsxs("svg",{className:p.svg,viewBox:`0 0 ${mn.w} ${mn.h}`,style:{maxHeight:460},role:"img","aria-label":"Contraction Hierarchies im kleinen Strassennetz",children:[e.jsx("title",{children:"Contraction Hierarchies"}),ze.map(o=>{const z=te(o.a,o.b),h=t[z];return e.jsxs("g",{children:[e.jsx("path",{d:a(o.a,o.b),fill:"none",stroke:Ue[h]??"#665c54",strokeWidth:h?5:2.5,strokeLinecap:"round",opacity:h?1:.7}),l&&e.jsx(ts,{von:c[se(o.a)<se(o.b)?o.a:o.b],nach:c[se(o.a)<se(o.b)?o.b:o.a],farbe:Ue[h]??"#665c54"}),e.jsx(Lc,{a:c[o.a],b:c[o.b],wert:o.w,farbe:Ue[h]??"#a89984"})]},`e-${z}`)}),n.map(o=>{const z=t[o.key];return e.jsxs("g",{children:[e.jsx("path",{d:a(o.a,o.b,46),fill:"none",stroke:z?Ue[z]??"#d3869b":"#d3869b",strokeWidth:z?5:3,strokeDasharray:"8 6",strokeLinecap:"round"}),l&&e.jsx(ts,{von:c[se(o.a)<se(o.b)?o.a:o.b],nach:c[se(o.a)<se(o.b)?o.b:o.a],farbe:z?Ue[z]??"#d3869b":"#d3869b",bogen:46}),e.jsx(Cc,{a:c[o.a],b:c[o.b],bogen:46,text:`${o.w}`})]},`sc-${o.key}`)}),de.map(o=>{const z=i[o.id]??"offen",h=ls[z]??ls.offen,g=c[o.id];return e.jsxs("g",{opacity:z==="weg"?.4:1,children:[e.jsx("circle",{cx:g.x,cy:g.y,r:z==="aktuell"||z==="treff"?17:14,fill:h.fill,stroke:h.stroke,strokeWidth:h.breite??2.5}),e.jsx("text",{x:g.x,y:g.y+4,className:p.knotenId,textAnchor:"middle",fill:h.text,children:o.id}),!s&&e.jsx("text",{x:g.x,y:g.y-21,className:p.knotenName,textAnchor:"middle",children:o.label}),e.jsxs("text",{x:g.x+20,y:g.y+20,className:p.gewicht,textAnchor:"middle",fill:"#b8bb26",children:["★",j[o.id]??"?"]}),r[o.id]!==void 0&&e.jsx("text",{x:g.x,y:g.y+32,className:p.knotenWert,textAnchor:"middle",children:r[o.id]})]},o.id)})]})}function ts({von:s,nach:n,farbe:i,bogen:r=0}){const t=n.x-s.x,l=n.y-s.y,j=Math.hypot(t,l)||1,c=t/j,a=l/j,o=s.x+c*j*.72-a*r/2.6,z=s.y+a*j*.72+c*r/2.6,h=7,g=[[o+c*h,z+a*h],[o-c*h-a*h*.7,z-a*h+c*h*.7],[o-c*h+a*h*.7,z-a*h-c*h*.7]];return e.jsx("polygon",{points:g.map(([E,b])=>`${E},${b}`).join(" "),fill:i,opacity:.9})}function Lc({a:s,b:n,wert:i,farbe:r}){const t=(s.x+n.x)/2,l=(s.y+n.y)/2;return e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:t-12,y:l-10,width:"24",height:"18",rx:"4",fill:"#1d2021",stroke:"#504945"}),e.jsx("text",{x:t,y:l+3,className:p.gewicht,textAnchor:"middle",fill:r,children:i})]})}function Cc({a:s,b:n,bogen:i,text:r}){const t=(s.x+n.x)/2,l=(s.y+n.y)/2,j=n.x-s.x,c=n.y-s.y,a=Math.hypot(j,c)||1,o=t-c/a*(i/2),z=l+j/a*(i/2);return e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:o-13,y:z-10,width:"26",height:"18",rx:"4",fill:"#1d2021",stroke:"#d3869b"}),e.jsx("text",{x:o,y:z+3,className:p.gewicht,textAnchor:"middle",fill:"#d3869b",children:r})]})}function Je({farbe:s,text:n}){return e.jsxs("span",{className:p.legendeItem,children:[e.jsx("span",{className:p.swatch,style:{backgroundColor:s}}),n]})}const Ue={paar:"#fabd2f",gut:"#b8bb26",pruef:"#fabd2f",pfad:"#fe8019"},ls={offen:{fill:"#1d2021",stroke:"#665c54",text:"#ebdbb2"},weg:{fill:"#1d2021",stroke:"#504945",text:"#665c54"},paar:{fill:"#4a4327",stroke:"#fabd2f",text:"#fabd2f"},aktuell:{fill:"#5a3410",stroke:"#fe8019",text:"#fe8019",breite:3.5},besuchtV:{fill:"#2f4a4f",stroke:"#83a598",text:"#83a598"},besuchtR:{fill:"#4a3340",stroke:"#d3869b",text:"#d3869b"},treff:{fill:"#5a3410",stroke:"#fe8019",text:"#fe8019",breite:4},start:{fill:"#2f4a2a",stroke:"#8ec07c",text:"#8ec07c",breite:3.5},ziel:{fill:"#4a2a2a",stroke:"#fb4934",text:"#fb4934",breite:3.5}};function Gc(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Wie echte Routenplaner rechnen"}),e.jsx("h2",{children:"Die Ideen aus dem Paper — kurz und oberflächlich"}),e.jsx("p",{children:"Bast et al.: «Route Planning in Transportation Networks» (2015)"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Warum Dijkstra allein nicht reicht"}),e.jsxs("p",{children:["Das Strassennetz von Westeuropa, mit dem in der Forschung gerechnet wird, hat rund ",e.jsx("strong",{children:"18 Millionen Kreuzungen"})," und"," ",e.jsx("strong",{children:"42 Millionen Strassenabschnitte"}),". Dijkstra findet dort zuverlässig den kürzesten Weg — er braucht dafür aber mehrere"," ",e.jsx("strong",{children:"Sekunden"})," und schaut im Extremfall das halbe Netz an."]}),e.jsxs("p",{children:["Die besten Verfahren im Paper beantworten dieselbe Frage in"," ",e.jsx("strong",{children:"einer Millionstel Sekunde"}),". Das ist kein besserer Computer, das ist eine bessere Idee: Man rechnet"," ",e.jsx("strong",{children:"vorher"})," etwas aus, das bei ",e.jsx("em",{children:"jeder"})," Anfrage hilft."]}),e.jsxs("blockquote",{children:["Alle Verfahren liefern ",e.jsx("em",{children:"exakt"})," denselben kürzesten Weg wie Dijkstra. Sie sind nur schneller dort, wo sie suchen."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Drei Stellschrauben, die man gegeneinander tauscht"}),e.jsx("p",{children:"Es gibt nicht das «beste» Verfahren. Jedes ist ein Kompromiss zwischen drei Grössen — genau deshalb zeigt das Paper so viele Tabellen und Diagramme:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Vorverarbeitung"})," (",e.jsx("em",{children:"preprocessing"}),") — wie lange rechnet man einmalig im Voraus? Minuten bis Stunden."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Speicher"})," (",e.jsx("em",{children:"space"}),") — wie viel muss man sich merken? Megabyte bis viele Gigabyte."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Antwortzeit"})," (",e.jsx("em",{children:"query time"}),") — wie lange dauert eine einzelne Anfrage? Millisekunden bis Nanosekunden."]})]}),e.jsxs("p",{children:["Dazu kommt eine praktische Frage: Was passiert bei einem"," ",e.jsx("strong",{children:"Stau"}),"? Wenn sich die Fahrzeiten ändern, ist eine teuer vorberechnete Tabelle plötzlich falsch. Verfahren, die man schnell neu «einstellen» kann, sind deshalb in der Praxis oft wertvoller als die allerschnellsten."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Familie 1: zielgerichtet suchen"}),e.jsx("p",{children:"Die erste Idee kennen Sie schon: Statt in alle Richtungen zu wachsen, zieht man die Suche Richtung Ziel."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"})]})," ","mit Luftlinie als Schätzung — unsere Heuristik aus der letzten Woche."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ALT"})," — statt der Luftlinie nimmt man"," ",e.jsx("em",{children:"Landmarken"}),": einige wenige Orte, zu denen alle Distanzen vorberechnet sind. Über die Dreiecksungleichung ergibt das eine viel bessere Schätzung als die Luftlinie."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arc Flags"})," — das Land wird in Regionen zerlegt. Jede Strasse bekommt ein Kästchen pro Region, angekreuzt heisst: «über mich führt ein kürzester Weg in diese Region». Strassen ohne Kreuzchen werden bei der Suche gar nicht erst angeschaut."]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Familie 2: die Hierarchie im Netz ausnutzen"}),e.jsxs("p",{children:["Ein Strassennetz ist nicht gleichmässig. Es ist"," ",e.jsx("strong",{children:"hierarchisch"})," aufgebaut:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"ganz unten die Quartierstrassen — viele, aber unwichtig"}),e.jsx("li",{children:"darüber die Haupt- und Durchgangsstrassen"}),e.jsx("li",{children:"zuoberst die Autobahnen — wenige, aber sehr wichtig"})]}),e.jsx("p",{children:"Jede längere Fahrt sieht gleich aus: ein paar kleine Strassen hinauf, dann lange oben bleiben, dann wieder ein paar kleine Strassen hinunter. Niemand fährt von Zürich nach Genf mitten in der Strecke durch ein Wohnquartier."}),e.jsx("p",{children:"Das Problem: Diese Wichtigkeit steht nicht in den Daten — jedenfalls nicht verlässlich. Also berechnet man sie, und zwar so, dass das Ergebnis beweisbar korrekt bleibt."})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Contraction Hierarchies: Abkürzungen einbauen"}),e.jsxs("p",{children:["Das wichtigste Verfahren dieser Familie heisst"," ",e.jsx("strong",{children:"Contraction Hierarchies"})," (CH). Die Idee in einem Satz: Man nimmt die unwichtigen Orte nacheinander aus dem Netz heraus und ersetzt sie durch ",e.jsx("strong",{children:"Abkürzungen"})," (",e.jsx("em",{children:"shortcuts"}),"), damit keine einzige Fahrzeit verfälscht wird."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Rang vergeben:"})," Jeder Ort bekommt eine Wichtigkeit."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kontrahieren:"})," Der unwichtigste Ort wird entfernt. Für jedes Nachbarpaar wird geprüft, ob man wirklich über ihn fahren muss. Nur dann kommt eine Abkürzung ins Netz."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Anfragen:"})," Zwei Suchen, eine vom Start und eine vom Ziel, laufen nur noch ",e.jsx("em",{children:"bergauf"})," — also immer zu wichtigeren Orten. Sie treffen sich irgendwo oben, auf der Autobahn."]})]}),e.jsx("p",{children:"Die Suche darf nie bergab laufen. Dadurch wird aus dem riesigen Ölfleck ein kurzer Aufstieg auf beiden Seiten — und genau das macht die Anfrage tausendfach schneller."})]})}),e.jsx(Tc,{}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Noch zwei Begriffe aus derselben Familie"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Reach"})," — jeder Ort bekommt eine Zahl: Wie weit reicht er? Ein Ort, der nur auf kurzen Wegen vorkommt, wird bei langen Fahrten einfach übersprungen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CRP"})," (",e.jsx("em",{children:"Customizable Route Planning"}),") — das Land wird in Zellen zerlegt; pro Zelle merkt man sich nur, wie teuer die Durchfahrt von Rand zu Rand ist. Der Clou: Ändert sich die Verkehrslage, muss man nur diese Zellen neu durchrechnen, nicht das ganze Netz. Deshalb benutzt Bing Maps dieses Verfahren."]})]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Familie 3: möglichst viel vorberechnen"}),e.jsxs("p",{children:["Die radikalste Idee: gar nicht mehr suchen, sondern"," ",e.jsx("strong",{children:"nachschlagen"}),". Alle Distanzen zwischen allen Ortspaaren zu speichern, ist unmöglich — bei 18 Millionen Orten wären das 324 Billionen Zahlen. Also speichert man geschickt weniger:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Hub Labels"})," — jeder Ort merkt sich eine kleine Liste von «Drehscheiben» samt Distanz. Für eine Anfrage vergleicht man nur die beiden Listen von Start und Ziel und nimmt die beste gemeinsame Drehscheibe. Das sind die schnellsten bekannten Anfragen überhaupt — dafür braucht es sehr viel Speicher."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transit Node Routing"})," — man wählt einige tausend"," ",e.jsx("em",{children:"Transitknoten"})," (im Wesentlichen die Autobahnauffahrten) und speichert alle Distanzen dazwischen in einer Tabelle. Eine lange Fahrt ist dann: zur Auffahrt, Tabelle nachschlagen, von der Ausfahrt ans Ziel. Nur für kurze Fahrten in der Nähe braucht es einen Rückfall auf ein anderes Verfahren."]})]}),e.jsxs("p",{children:["Und natürlich kann man kombinieren: ",e.jsx("strong",{children:"CHASE"})," ist CH plus Arc Flags, ",e.jsx("strong",{children:"REAL"})," ist Reach plus ALT. Fast jedes Spitzenverfahren im Paper ist so eine Mischung."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Verfahren im Überblick"}),e.jsx("p",{children:"Grob und gerundet — die genauen Zahlen stehen im Paper in Abschnitt 3. Wichtig ist das Muster: Je mehr man vorher rechnet und speichert, desto schneller wird die Anfrage."}),e.jsx(le,{headers:["Verfahren","Idee","Vorverarbeitung","Anfrage (Europa)"],rows:[["Dijkstra","einfach suchen","keine","~ 2 Sekunden"],["Bidirektional","von beiden Seiten","keine","~ 1 Sekunde"],["ALT","Landmarken als Heuristik","Minuten","~ 100 ms"],["Arc Flags","Wegweiser pro Region","Stunden","~ 1 ms"],["CRP","Zellen, schnell anpassbar","Minuten","~ 1 ms"],["Contraction Hierarchies","Abkürzungen, nur bergauf","Minuten","~ 0.1 ms"],["Transit Node Routing","Tabelle für Fernfahrten","~ 1 Stunde","~ 0.003 ms"],["Hub Labels","zwei Listen vergleichen","~ 1 Stunde","~ 0.0005 ms"]],caption:"Je mehr Vorarbeit, desto schneller die Anfrage"})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Und der öffentliche Verkehr?"}),e.jsxs("p",{children:["Die zweite Hälfte des Papers handelt von Bus, Tram und Zug. Das ist"," ",e.jsx("strong",{children:"schwieriger"})," als das Strassennetz, und zwar aus zwei Gründen:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Die Zeit spielt mit."})," Eine Kante «kostet» nicht immer gleich viel: Um 07:12 fährt der Zug in zwei Minuten, um 01:12 erst in fünf Stunden."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Es gibt nicht die eine beste Verbindung."})," Schnell, wenig Umsteigen und billig sind drei verschiedene Ziele. Man sucht deshalb mehrere Verbindungen, von denen keine in allen Punkten schlechter ist als eine andere."]})]}),e.jsxs("p",{children:["Die bekannten Verfahren dazu heissen ",e.jsx("strong",{children:"RAPTOR"})," (geht rundenweise vor: null Umstiege, ein Umstieg, zwei Umstiege …),"," ",e.jsx("strong",{children:"CSA"})," (geht einfach alle Abfahrten der Reihe nach durch) und ",e.jsx("strong",{children:"Transfer Patterns"})," (merkt sich, über welche Haltestellen sinnvolle Verbindungen überhaupt laufen — das steckt seit 2010 in Google Maps)."]}),e.jsxs("p",{children:["Noch eine Stufe schwieriger ist ",e.jsx("strong",{children:"multimodal"}),": zu Fuss zum Bus, Bus zum Bahnhof, Zug, dann Velo. Hier liefern selbst die besten Verfahren oft nur noch gute Näherungen. Ein weltweiter, multimodaler Routenplaner ist laut Paper das ungelöste Ziel."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Begriffe für die Lektüre"}),e.jsx("p",{children:"Das Paper ist auf Englisch. Mit dieser Liste erkennen Sie beim Überfliegen sofort, wovon ein Abschnitt handelt."}),e.jsx(le,{headers:["Englisch","Deutsch","Das steckt dahinter"],rows:[["vertex / arc","Knoten / Kante","Kreuzung / Strassenabschnitt"],["query","Anfrage","eine einzelne Routenberechnung"],["preprocessing","Vorverarbeitung","einmaliges Rechnen im Voraus"],["shortcut","Abkürzung","künstliche Kante über mehrere Knoten"],["to settle / scan","endgültig festlegen","wie bei Dijkstra"],["search space","Suchraum","wie viele Orte angeschaut werden"],["speedup technique","Beschleunigungsverfahren","alles in diesem Kapitel"],["hierarchy","Hierarchie","Quartierstrasse bis Autobahn"],["landmark","Landmarke","Stützpunkt für bessere Schätzungen"],["bidirectional search","bidirektionale Suche","von beiden Seiten gleichzeitig"],["multicriteria","mehrkriteriell","schnell UND billig UND wenig Umsteigen"],["time-dependent","zeitabhängig","Kosten hängen von der Uhrzeit ab"]],caption:"Begriffsliste Englisch ↔ Deutsch"})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Das läuft wirklich im Einsatz"}),e.jsx("p",{children:"Diese Verfahren sind keine Theorie. Sie stecken in Programmen, die täglich Millionen Menschen benutzen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bing Maps"})," rechnet mit CRP — weil sich damit Verkehrsdaten schnell einarbeiten lassen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"OSRM"}),", der freie Routenplaner für OpenStreetMap, benutzt Contraction Hierarchies."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Google Maps"})," benutzt für den öffentlichen Verkehr Transfer Patterns."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TomTom"})," benutzt eine Variante von Arc Flags mit Abkürzungen."]})]}),e.jsx("p",{children:"Zwischen «wir haben da eine Idee» und «das rechnet jetzt für Millionen von Leuten» lagen in diesem Gebiet oft nur wenige Jahre. Und der Fortschritt kam fast nie von schnellerer Hardware, sondern davon, dass jemand eine Eigenschaft des Netzes entdeckt hat, die man ausnutzen kann."})]})}),e.jsx(en,{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Ich kann erklären, warum Dijkstra für ein Land zu langsam ist, obwohl er korrekt rechnet."}),e.jsx("li",{children:"Ich kann die drei Stellschrauben Vorverarbeitung, Speicher und Antwortzeit benennen und gegeneinander abwägen."}),e.jsx("li",{children:"Ich kann beschreiben, was mit der Hierarchie eines Strassennetzes gemeint ist."}),e.jsx("li",{children:"Ich kann die Idee von Contraction Hierarchies in eigenen Worten erklären: Orte kontrahieren, Abkürzungen einfügen, bei der Anfrage nur bergauf suchen."}),e.jsx("li",{children:"Ich kann grob sagen, was ALT, Arc Flags, CRP, Hub Labels und Transit Node Routing jeweils ausnutzen."}),e.jsx("li",{children:"Ich kann begründen, warum Fahrpläne schwieriger sind als Strassennetze."}),e.jsx("li",{children:"Ich kenne die wichtigsten englischen Fachbegriffe aus dem Paper und kann damit einen Abschnitt grob einordnen."})]})})]})}const Zd=Object.freeze(Object.defineProperty({__proto__:null,default:Gc},Symbol.toStringTag,{value:"Module"}));function $c(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben: Graphensuche von Hand"}),e.jsxs("p",{children:["In diesem Kapitel arbeiten Sie ",e.jsx("strong",{children:"ohne Computer"})," — nur mit Stift, Papier und Ihrem Kopf. Sie lösen drei klassische Probleme von Hand und zeichnen dabei auf, was Sie dabei tun: den"," ",e.jsx("strong",{children:"Suchbaum"}),"."]}),e.jsxs("p",{children:["Das Ziel ist nicht, möglichst schnell eine Lösung zu haben. Das Ziel ist, dass Sie ",e.jsx("strong",{children:"spüren"}),", wo die Probleme liegen: wie schnell die Anzahl Möglichkeiten wächst, wie leicht man im Kreis läuft, und wie unterschiedlich zwei Lösungen für dasselbe Problem aussehen können."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Material:"})," mehrere Blätter Papier (A4 quer eignet sich gut für Suchbäume), ein Bleistift, ein Radiergummi und zwei Farbstifte für Start und Ziel. Für das Schiebepuzzle helfen acht beschriftete Zettel."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 1 — Schiebepuzzle"}),e.jsxs("p",{children:["Ein 3×3-Raster mit acht nummerierten Steinen und einem leeren Feld (",e.jsx("code",{children:"·"}),"). Ein Zug schiebt einen Stein, der neben dem leeren Feld liegt, in das leere Feld. Ziel ist immer dieselbe Stellung:"]}),e.jsx("pre",{children:e.jsx("code",{children:`1  2  3
4  5  6
7  8  ·`})}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Drei Stellungen lösen"}),e.jsxs("p",{children:["Zeichnen Sie ein 3×3-Raster auf Papier und schneiden Sie acht kleine Zettel mit den Zahlen 1–8 aus. Lösen Sie die drei Stellungen"," ",e.jsx("strong",{children:"der Reihe nach"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`Stellung A        Stellung B        Stellung C
1  3  ·           1  8  2           ·  8  2
4  2  5           ·  4  3           5  7  3
7  8  6           7  6  5           1  4  6`})}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Lösen Sie jede Stellung. Schreiben Sie jeden Zug auf, z. B."," ",e.jsx("code",{children:"3 rechts"}),", ",e.jsx("code",{children:"2 hoch"}),", … Benennen Sie den Zug immer nach dem ",e.jsx("strong",{children:"Stein"}),", der sich bewegt."]}),e.jsx("li",{children:"Stoppen Sie für jede Stellung die Zeit und zählen Sie Ihre Züge. Tragen Sie beides in die Tabelle unten ein."}),e.jsx("li",{children:"Lassen Sie eine Mitschülerin oder einen Mitschüler Ihre Zugfolge nachspielen. Kommt sie oder er am Ziel an? Wenn nicht: Wo liegt der Fehler?"})]}),e.jsx(le,{headers:["Stellung","Anzahl Züge","benötigte Zeit","Fehlversuche / Rückzüge"],rows:[["A","…","…","…"],["B","…","…","…"],["C","…","…","…"]],caption:"Ihre eigenen Werte — diese Zahlen brauchen Sie im nächsten Kapitel wieder."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zur Kontrolle:"})," Die kürzesten Lösungen brauchen 4 (A), 9 (B) und 14 (C) Züge. Wenn Sie deutlich mehr gebraucht haben, ist das völlig normal — notieren Sie es ehrlich."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Ihre Strategie beschreiben"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Beschreiben Sie in drei bis vier Sätzen, wie Sie vorgegangen sind. Haben Sie zuerst die obere Zeile fertiggestellt? Zuerst die 1 platziert?"}),e.jsxs("li",{children:["Wenn zwei Züge möglich waren: Woran haben Sie entschieden, welchen Sie nehmen? Versuchen Sie, Ihre Entscheidung als"," ",e.jsx("strong",{children:"Regel"})," zu formulieren, die man ausrechnen könnte («nimm den Zug, bei dem …»)."]}),e.jsx("li",{children:"Haben Sie je einen Zug wieder zurückgenommen? Warum? Was hat Ihnen gesagt, dass Sie in eine Sackgasse laufen?"}),e.jsx("li",{children:"Stellung C hat Sie vermutlich am meisten Zeit gekostet. Woran lag das — am Suchen oder am Ausprobieren?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Wie gross ist das Problem?"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Legen Sie eine Schreibweise fest, mit der Sie eine Stellung in"," ",e.jsx("strong",{children:"einer Zeile"})," eindeutig aufschreiben können. Geben Sie Stellung A in Ihrer Schreibweise an."]}),e.jsxs("li",{children:["Wie viele Züge sind möglich, wenn das leere Feld in einer"," ",e.jsx("strong",{children:"Ecke"}),", am ",e.jsx("strong",{children:"Rand"})," oder in der"," ",e.jsx("strong",{children:"Mitte"})," liegt? Was ist der durchschnittliche Verzweigungsgrad ",e.jsx("code",{children:"b"}),"?"]}),e.jsxs("li",{children:["Zeichnen Sie den ",e.jsx("strong",{children:"Suchbaum"})," ab Stellung A bis Tiefe 2. Wie viele Knoten sind das? Markieren Sie alle Knoten, deren Stellung schon weiter oben im Baum vorkommt."]}),e.jsxs("li",{children:["Schätzen Sie mit ",e.jsx("code",{children:"b^d"})," ab, wie viele Knoten eine Breitensuche bis Tiefe 14 (Stellung C!) erzeugen würde."]}),e.jsx("li",{children:"Es gibt insgesamt nur 181'440 erreichbare Stellungen. Vergleichen Sie das mit Ihrer Schätzung. Warum ist die Schätzung so viel grösser? Was heisst das für einen Algorithmus, der sich merkt, wo er schon war?"})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 2 — Das Pancake-Problem"}),e.jsxs("p",{children:["Ein Stapel Pfannkuchen unterschiedlicher Grösse. Wir schreiben ihn von oben nach unten: ",e.jsx("code",{children:"[3, 1, 4, 2]"})," heisst, dass der Pfannkuchen der Grösse 3 zuoberst liegt und der Grösse 2 zuunterst."]}),e.jsxs("p",{children:["Erlaubter Zug: den Wendeheber an einer Stelle einschieben und"," ",e.jsx("strong",{children:"alles darüber umdrehen"}),". ",e.jsx("code",{children:"flip k"})," dreht die obersten ",e.jsx("code",{children:"k"})," Pfannkuchen um."]}),e.jsx("pre",{children:e.jsx("code",{children:`[3, 1, 4, 2]  --flip 3-->  [4, 1, 3, 2]
[4, 1, 3, 2]  --flip 4-->  [2, 3, 1, 4]`})}),e.jsxs("p",{children:["Ziel: der Stapel ist sortiert, der grösste zuunterst —"," ",e.jsx("code",{children:"[1, 2, 3, 4]"}),". Ein ",e.jsx("code",{children:"flip 1"})," ändert nichts, es gibt also nur die Züge ",e.jsx("code",{children:"flip 2"})," bis ",e.jsx("code",{children:"flip n"}),"."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Aufwärmen mit drei Pfannkuchen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Sortieren Sie ",e.jsx("code",{children:"[3, 1, 2]"}),". Wie viele Flips brauchen Sie?"]}),e.jsx("li",{children:"Wie viele Züge hat ein Zustand bei drei Pfannkuchen? Wie viele verschiedene Stapel gibt es insgesamt?"}),e.jsxs("li",{children:["Zeichnen Sie den ",e.jsx("strong",{children:"vollständigen Suchbaum"})," ab"," ",e.jsx("code",{children:"[3, 1, 2]"})," bis Tiefe 3. Schreiben Sie in jeden Knoten den Stapel, an jede Kante den Zug (",e.jsx("code",{children:"flip 2"})," oder"," ",e.jsx("code",{children:"flip 3"}),")."]}),e.jsx("li",{children:"Streichen Sie jeden Knoten durch, dessen Stapel im Baum schon einmal vorkommt. Wie viele Knoten bleiben übrig? Vergleichen Sie mit Ihrer Antwort aus Punkt 2."})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Vier Pfannkuchen — lösen und Suchbaum zeichnen"}),e.jsxs("p",{children:["Sortieren Sie ",e.jsx("code",{children:"[3, 1, 4, 2]"}),". Arbeiten Sie"," ",e.jsx("strong",{children:"systematisch wie eine Breitensuche"}),": Sie zeichnen den Suchbaum Ebene für Ebene auf und hören erst auf, wenn das Ziel auftaucht."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schreiben Sie ",e.jsx("code",{children:"[3, 1, 4, 2]"})," als Wurzel oben auf ein Blatt im Querformat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ebene 1:"})," Zeichnen Sie alle Nachfolger (",e.jsx("code",{children:"flip 2"}),", ",e.jsx("code",{children:"flip 3"}),", ",e.jsx("code",{children:"flip 4"}),"). Beschriften Sie die Kanten."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ebene 2:"})," Zeichnen Sie für jeden Knoten der Ebene 1 wieder alle Nachfolger."," ",e.jsx("strong",{children:"Streichen Sie dabei jeden Stapel durch, der im Baum schon vorkommt"})," ","— an durchgestrichenen Knoten wird nicht weitergebaut."]}),e.jsxs("li",{children:["Fahren Sie so fort, bis ",e.jsx("code",{children:"[1, 2, 3, 4]"})," auftaucht. Zeichnen Sie den Weg von der Wurzel dorthin farbig nach."]}),e.jsx("li",{children:"Wie viele Flips braucht die kürzeste Lösung? Wie viele Knoten haben Sie insgesamt gezeichnet, wie viele davon durchgestrichen?"}),e.jsxs("li",{children:["Es gibt nur ",e.jsx("code",{children:"4! = 24"})," verschiedene Stapel. Wie viele Knoten hätte Ihr Baum ohne das Durchstreichen auf Ihrer letzten Ebene gehabt? Rechnen Sie es mit ",e.jsx("code",{children:"b^d"})," nach."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zur Kontrolle:"})," Die kürzeste Lösung braucht 4 Flips. Wenn Sie eine mit 5 gefunden haben, haben Sie eine Ebene zu früh aufgehört zu prüfen — suchen Sie den Fehler."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Eine Regel für Pfannkuchen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Gibt es eine Strategie, die ",e.jsx("strong",{children:"immer"})," funktioniert? Tipp: Wie bringen Sie den grössten Pfannkuchen ganz nach unten — mit wie vielen Flips?"]}),e.jsxs("li",{children:["Wie viele Flips braucht Ihre Strategie bei ",e.jsx("code",{children:"n"})," ","Pfannkuchen im schlimmsten Fall? Begründen Sie."]}),e.jsxs("li",{children:["Ist Ihre Strategie für ",e.jsx("code",{children:"[3, 1, 4, 2]"})," gleich kurz wie Ihre Lösung aus Aufgabe 5? Was ist der Unterschied zwischen «eine Lösung finden» und «die kürzeste Lösung finden»?"]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 3 — Wolf, Ziege und Kohl"}),e.jsxs("p",{children:["Ein Bauer steht mit einem Wolf, einer Ziege und einem Kohlkopf am linken Flussufer. Das Boot trägt den Bauer und höchstens"," ",e.jsx("strong",{children:"eines"})," der drei. Lässt er Wolf und Ziege ohne Aufsicht zurück, ist die Ziege weg; lässt er Ziege und Kohl zurück, ist der Kohl weg. Alle vier sollen ans rechte Ufer."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Rätsel lösen"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Lösen Sie das Rätsel. Schreiben Sie die Lösung als nummerierte Liste von Fahrten auf."}),e.jsx("li",{children:"Wie viele Fahrten brauchen Sie? Wie lange haben Sie gebraucht, wie viele Fehlversuche gab es?"}),e.jsx("li",{children:"Welcher Zug war der «unlogische», auf den man zuerst nicht kommt? Warum fällt er so schwer?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Zustände aufschreiben und zählen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Zustand:"})," Legen Sie eine Schreibweise fest, mit der Sie jede Situation eindeutig aufschreiben können, z. B."," ",e.jsx("code",{children:"BWZK | ---"})," oder ",e.jsx("code",{children:"{B,W,K} ~ {Z}"}),". Jedes Objekt ist entweder links oder rechts — und der Bauer auch."]}),e.jsx("li",{children:"Wie viele Zustände wären theoretisch möglich, wenn es keine Regeln gäbe? Rechnen Sie es vor."}),e.jsx("li",{children:"Listen Sie alle Zustände auf und streichen Sie die verbotenen. Wie viele erlaubte bleiben übrig?"}),e.jsxs("li",{children:["Wie viele Nachfolger hat ein Zustand höchstens? Was ist der Verzweigungsgrad ",e.jsx("code",{children:"b"})," — und wie unterscheidet er sich vom Schiebepuzzle?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Suchbaum zeichnen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Zeichnen Sie den ",e.jsx("strong",{children:"Suchbaum"})," ab dem Startzustand, Ebene für Ebene, genau wie beim Pancake-Problem. Knoten = Zustand, Kante = eine Fahrt (beschriften!)."]}),e.jsx("li",{children:"Streichen Sie verbotene Zustände sofort weg — sie werden gar nicht erst zu Knoten."}),e.jsx("li",{children:"Streichen Sie Zustände durch, die im Baum schon vorkommen. Bauen Sie bis zur Ebene, in der das Ziel auftaucht."}),e.jsx("li",{children:"Markieren Sie Start und Ziel farbig und zeichnen Sie Ihre Lösung aus Aufgabe 7 als Weg ein."}),e.jsx("li",{children:"Gibt es eine zweite, gleich kurze Lösung? Suchen Sie sie in Ihrem Baum und begründen Sie Ihre Antwort."}),e.jsxs("li",{children:["Zeichnen Sie zusätzlich den ",e.jsx("strong",{children:"Zustandsgraphen"}),": alle erlaubten Zustände als Knoten, jede mögliche Fahrt als Kante — jeder Zustand kommt dabei nur ",e.jsx("strong",{children:"einmal"})," vor. Vergleichen Sie: Wie viele Knoten hat der Graph, wie viele Ihr Baum?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Der Algorithmus sind Sie"}),e.jsxs("p",{children:["Führen Sie auf Ihrem Zustandsgraphen aus Aufgabe 9 die beiden Algorithmen ",e.jsx("strong",{children:"von Hand"})," aus. Führen Sie dabei eine Tabelle mit zwei Spalten: ",e.jsx("strong",{children:"Grenze"})," und"," ",e.jsx("strong",{children:"Besucht"}),". Nach jedem Schritt eine neue Zeile."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Breitensuche:"})," Die Grenze ist eine Warteschlange — hinten anfügen, vorne herausnehmen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tiefensuche:"})," Die Grenze ist ein Stapel — hinten anfügen, hinten herausnehmen."]}),e.jsx("li",{children:"Notieren Sie für beide: die Reihenfolge der besuchten Zustände, die Anzahl untersuchter Zustände und die Länge des gefundenen Weges."}),e.jsx("li",{children:"Kontrollieren Sie Ihre Tabellen mit der Visualisierung auf der Theorieseite: Stimmen Grenze und Besucht-Menge Schritt für Schritt mit Ihren überein?"}),e.jsxs("li",{children:["Was passiert bei der Tiefensuche, wenn Sie die"," ",e.jsx("strong",{children:"Besucht"}),"-Menge weglassen? Probieren Sie es für drei, vier Schritte aus und beschreiben Sie, was schiefgeht."]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 4 — Zurückschauen"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Die drei Probleme vergleichen"}),e.jsx(le,{headers:["Problem","Zustände insgesamt","Verzweigungsgrad b","Länge Ihrer Lösung","schwierig war …"],rows:[["Schiebepuzzle C","181'440","…","…","…"],["Pancake [3,1,4,2]","…","…","…","…"],["Wolf, Ziege, Kohl","…","…","…","…"]],caption:"Füllen Sie die Tabelle aus Ihren Notizen der Aufgaben 1–10."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Bei welchem Problem konnten Sie den ganzen Suchbaum zeichnen, bei welchem nicht? Woran liegt das?"}),e.jsxs("li",{children:["Wo haben Sie beim Lösen ",e.jsx("em",{children:"nachgedacht"})," und wo haben Sie einfach ",e.jsx("em",{children:"ausprobiert"}),"? Schreiben Sie pro Problem einen Satz."]}),e.jsx("li",{children:"Das Durchstreichen doppelter Zustände hat Ihnen viel Arbeit gespart. Beschreiben Sie in eigenen Worten, was ein Computer dafür können muss."}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zum Nachdenken:"})," Könnten Sie eine Zahl ausrechnen, die sagt «dieser Zustand ist vermutlich näher am Ziel»? Machen Sie für jedes der drei Probleme einen Vorschlag."]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Ihre Papierlösungen, fotografiert oder eingescannt. Lesbar sein müssen: die Zugfolgen aus Aufgabe 1, der Suchbaum aus Aufgabe 5, der Suchbaum und der Zustandsgraph aus Aufgabe 9 sowie die Schritttabellen aus Aufgabe 10."}),e.jsx("li",{children:"Ihre ausgefüllten Tabellen aus Aufgabe 1 und Aufgabe 11 — die Zahlen brauchen Sie im nächsten Kapitel für den Vergleich mit der Maschine."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Heben Sie alle Blätter auf."})," Im Kapitel «Graphensuche mit Code» lassen Sie dieselben Probleme vom Computer lösen und vergleichen seine Lösungswege mit Ihren."]})]})]})}const Kd=Object.freeze(Object.defineProperty({__proto__:null,default:$c},Symbol.toStringTag,{value:"Module"}));function Vc(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben: Graphensuche mit Code"}),e.jsxs("p",{children:["Im Kapitel ",e.jsx("strong",{children:"«Graphensuche von Hand»"})," haben Sie drei Probleme auf Papier gelöst. Jetzt lassen Sie dieselben Probleme von der Maschine lösen, vergleichen ihre Lösungswege mit Ihren eigenen und bauen am Schluss zwei Suchalgorithmen selbst."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Voraussetzung:"})," Sie brauchen Ihre Blätter aus dem ersten Kapitel — besonders die Zugfolgen, die Suchbäume und die ausgefüllten Tabellen. Ohne sie ist der Vergleich wertlos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Werkzeuge:"})," Node.js, Git und ein Editor. Eine Installation von Paketen ist nicht nötig."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 1 — Das Repository"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Klonen und zum Laufen bringen"}),e.jsx("pre",{children:e.jsx("code",{children:`git clone https://github.com/gymmu/graph-search.git
cd graph-search
node index.js wzk bfs`})}),e.jsxs("ol",{children:[e.jsx("li",{children:"Klonen Sie das Repository und führen Sie den Befehl oben aus. Sie sollten eine Lösung und eine Statistik sehen."}),e.jsxs("li",{children:["Führen Sie ",e.jsx("code",{children:"node index.js"})," ohne weitere Angaben aus. Welche Probleme und welche Algorithmen kennt das Programm?"]}),e.jsxs("li",{children:["Verschaffen Sie sich einen Überblick über die Dateien. Beantworten Sie schriftlich in je ein bis zwei Sätzen: Was steht in"," ",e.jsx("code",{children:"index.js"}),", was in ",e.jsx("code",{children:"src/problem.js"}),", was in"," ",e.jsx("code",{children:"src/search.js"}),", was in ",e.jsx("code",{children:"src/problems/"}),"?"]}),e.jsxs("li",{children:["Öffnen Sie ",e.jsx("code",{children:"src/problems/wolf-goat-cabbage.js"}),". Wie wird dort ein Zustand dargestellt? Vergleichen Sie mit der Schreibweise, die Sie im ersten Kapitel selbst erfunden haben."]}),e.jsxs("li",{children:["Wozu dient die Methode ",e.jsx("code",{children:"key(state)"}),"? Erklären Sie es mit dem Durchstreichen doppelter Knoten aus Ihrem Papier-Suchbaum."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Die Suche lesen"}),e.jsxs("p",{children:["Öffnen Sie ",e.jsx("code",{children:"src/search.js"}),". Alle Algorithmen benutzen dieselbe Funktion ",e.jsx("code",{children:"search()"}),". Sie unterscheiden sich nur darin, ",e.jsx("strong",{children:"welche Grenze"})," sie ihr mitgeben."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Suchen Sie in ",e.jsx("code",{children:"search()"})," die beiden Stellen, die der Menge ",e.jsx("strong",{children:"Besucht"})," und der Menge"," ",e.jsx("strong",{children:"Grenze"})," aus Ihrer Tabelle (Aufgabe 10, erstes Kapitel) entsprechen. Notieren Sie die Zeilennummern."]}),e.jsxs("li",{children:["Was bedeuten ",e.jsx("code",{children:"expanded"}),", ",e.jsx("code",{children:"generated"})," und"," ",e.jsx("code",{children:"maxFrontier"})," in der Statistik? Erklären Sie jede Zahl mit einem Satz."]}),e.jsxs("li",{children:["Die Klasse ",e.jsx("code",{children:"Queue"})," ist fertig implementiert. Erklären Sie, warum ",e.jsx("code",{children:"push"})," und ",e.jsx("code",{children:"pop"})," dort an"," ",e.jsx("em",{children:"verschiedenen"})," Enden arbeiten."]}),e.jsxs("li",{children:["In der Datei stehen Rümpfe für ",e.jsx("code",{children:"Stack"})," und"," ",e.jsx("code",{children:"PriorityQueue"}),", die noch nichts tun. Diese bauen Sie in Teil 3 selbst."]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 2 — Mensch gegen Maschine"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Wolf, Ziege und Kohl"}),e.jsx("pre",{children:e.jsx("code",{children:"node index.js wzk bfs"})}),e.jsxs("ol",{children:[e.jsx("li",{children:"Schreiben Sie die Lösung des Programms Zug für Zug neben Ihre Papierlösung aus Aufgabe 7 des ersten Kapitels."}),e.jsxs("li",{children:["Sind die beiden identisch? Wenn nein: Ist die Maschinenlösung besser, schlechter oder nur ",e.jsx("em",{children:"anders"}),"? Begründen Sie."]}),e.jsxs("li",{children:["Vergleichen Sie die Zahl ",e.jsx("code",{children:"expandierte Knoten"})," mit der Anzahl Knoten in Ihrem Papier-Suchbaum. Wer hat mehr Zustände angeschaut?"]}),e.jsx("li",{children:"Suchen Sie den Weg, den BFS gefunden hat, in Ihrem Zustandsgraphen aus Aufgabe 9 und zeichnen Sie ihn in einer zweiten Farbe ein."})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Schiebepuzzle"}),e.jsxs("p",{children:["Das Programm startet standardmässig mit Stellung C aus dem ersten Kapitel. Die Startstellung steht im Konstruktor von"," ",e.jsx("code",{children:"src/problems/sliding-puzzle.js"})," — ändern Sie sie dort, um auch Stellung A und B zu lösen. Das leere Feld ist die"," ",e.jsx("code",{children:"0"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`Stellung A  ->  [1, 3, 0, 4, 2, 5, 7, 8, 6]
Stellung B  ->  [1, 8, 2, 0, 4, 3, 7, 6, 5]
Stellung C  ->  [0, 8, 2, 5, 7, 3, 1, 4, 6]   (Standard)

node index.js puzzle bfs`})}),e.jsx(le,{headers:["Stellung","Löser","Anzahl Züge","expandierte Knoten","grösste Grenze","Zeit"],rows:[["A","ich, auf Papier","…","—","—","…"],["A","bfs","…","…","…","…"],["B","ich, auf Papier","…","—","—","…"],["B","bfs","…","…","…","…"],["C","ich, auf Papier","…","—","—","…"],["C","bfs","…","…","…","…"]],caption:"Die Werte für «ich» stehen in Ihrer Tabelle aus Aufgabe 1 des ersten Kapitels."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Füllen Sie die Tabelle aus."}),e.jsx("li",{children:"Wer braucht weniger Züge — Sie oder BFS? Bei welcher Stellung ist der Unterschied am grössten?"}),e.jsx("li",{children:"Sie haben beim Lösen von Stellung C vermutlich deutlich weniger Stellungen angeschaut als BFS. Was können Sie, was BFS nicht kann?"}),e.jsx("li",{children:"Umgekehrt: Was kann die Maschine, was Sie nicht können? Nennen Sie mindestens zwei Punkte."}),e.jsxs("li",{children:["Vergleichen Sie ",e.jsx("code",{children:"expandierte Knoten"})," bei Stellung C mit Ihrer ",e.jsx("code",{children:"b^d"}),"-Schätzung aus Aufgabe 3 des ersten Kapitels. Um welchen Faktor lagen Sie daneben? Woher kommt der Unterschied?"]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 3 — Das Pancake-Problem implementieren"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: pancake.js fertigstellen"}),e.jsxs("p",{children:["Öffnen Sie ",e.jsx("code",{children:"src/problems/pancake.js"}),". Die Datei enthält ein Gerüst mit zwei TODOs."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"isGoal(state)"}),": wahr, wenn der Stapel aufsteigend sortiert ist."]}),e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"successors(state)"}),": für jedes"," ",e.jsx("code",{children:"k"})," von 2 bis ",e.jsx("code",{children:"state.length"})," einen Nachfolger"," ",e.jsx("code",{children:'{ action: "flip " + k, cost: 1, state: … }'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Achtung:"})," ",e.jsx("code",{children:"successors"})," darf den übergebenen Zustand ",e.jsx("strong",{children:"nie"})," verändern. Erstellen Sie immer eine Kopie (",e.jsx("code",{children:"[...state]"}),"). Prüfen Sie Ihren Code darauf, bevor Sie weiterlesen."]}),e.jsxs("li",{children:["Testen Sie mit ",e.jsx("code",{children:"node index.js pancake bfs"}),". Der Standard ist ",e.jsx("code",{children:"[3, 1, 4, 2]"})," — genau Ihr Papier-Beispiel."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Mit dem Papier-Suchbaum vergleichen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Stimmt die Anzahl Flips mit Ihrer Handlösung aus Aufgabe 5 des ersten Kapitels überein? Ist es ",e.jsx("em",{children:"dieselbe"})," Zugfolge?"]}),e.jsxs("li",{children:["Vergleichen Sie ",e.jsx("code",{children:"expandierte Knoten"})," mit der Anzahl Knoten, die Sie von Hand gezeichnet haben (ohne die durchgestrichenen). Wie nahe liegen die beiden Zahlen beieinander? Was sagt Ihnen das darüber, ",e.jsx("em",{children:"was"})," Sie von Hand getan haben?"]}),e.jsx("li",{children:"Zeichnen Sie die Zugfolge des Programms in Ihrem Papier-Suchbaum farbig nach. Taucht sie dort auf?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Grössere Stapel"}),e.jsxs("p",{children:["Den Startstapel ändern Sie im Konstruktor von ",e.jsx("code",{children:"Pancake"}),". Nehmen Sie jeweils eine gut durchmischte Reihenfolge, nicht die sortierte."]}),e.jsx(le,{headers:["Länge n","Startstapel","Anzahl Flips","expandierte Knoten","erzeugte Knoten","Zeit"],rows:[["4","[3, 1, 4, 2]","…","…","…","…"],["6","…","…","…","…","…"],["8","…","…","…","…","…"],["9","…","…","…","…","…"]],caption:"Messen Sie die Zeit z. B. mit «time node index.js pancake bfs»."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Wie viele Nachfolger hat ein Zustand bei ",e.jsx("code",{children:"n"})," ","Pfannkuchen? Wie viele Zustände gibt es insgesamt?"]}),e.jsx("li",{children:"Füllen Sie die Tabelle aus. Ab welcher Länge wird es unangenehm?"}),e.jsxs("li",{children:["Zeichnen Sie die expandierten Knoten gegen ",e.jsx("code",{children:"n"})," auf. Wie wächst die Kurve — linear, quadratisch, schlimmer?"]}),e.jsx("li",{children:"Schätzen Sie ab, wie lange ein Stapel der Länge 12 dauern würde. Würden Sie es ausprobieren?"})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 4 — Zwei Algorithmen selbst bauen"}),e.jsxs("p",{children:["Bisher konnten Sie nur ",e.jsx("code",{children:"bfs"})," benutzen. Jetzt bauen Sie die beiden fehlenden Grenzen und damit zwei weitere Algorithmen. Sie müssen dafür ",e.jsx("strong",{children:"nichts"})," an ",e.jsx("code",{children:"search()"})," ändern."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Tiefensuche implementieren"}),e.jsxs("p",{children:["Die Tiefensuche nimmt immer den ",e.jsx("strong",{children:"zuletzt"})," gefundenen Knoten aus der Grenze. Die Grenze ist also ein"," ",e.jsx("strong",{children:"Stapel"})," (LIFO) statt einer Warteschlange (FIFO)."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie in ",e.jsx("code",{children:"src/search.js"})," die Klasse"," ",e.jsx("code",{children:"Stack"})," mit ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"push(node)"})," ","und ",e.jsx("code",{children:"pop()"}),". Ein JavaScript-Array kann bereits alles, was Sie brauchen."]}),e.jsxs("li",{children:["Vergleichen Sie Ihre Klasse mit ",e.jsx("code",{children:"Queue"}),". Wie viele Zeilen sind wirklich anders? Notieren Sie es."]}),e.jsxs("li",{children:["Testen Sie mit ",e.jsx("code",{children:"node index.js wzk dfs"}),". Vergleichen Sie die Reihenfolge der besuchten Zustände mit Ihrer DFS-Schritttabelle aus Aufgabe 10 des ersten Kapitels. Stimmt sie überein? Falls nein: Liegt es an der Reihenfolge, in der"," ",e.jsx("code",{children:"successors"})," die Züge liefert?"]}),e.jsxs("li",{children:["Lassen Sie ",e.jsx("code",{children:"dfs"})," auf das Schiebepuzzle (Stellung C) los. Wie lang ist die Lösung? Die Lösung ist gültig — warum würde sie trotzdem niemand verwenden? Was bedeutet das für den Begriff «Lösung»?"]}),e.jsxs("li",{children:["Kommentieren Sie testweise die Zeile aus, die Knoten aus"," ",e.jsx("code",{children:"visited"})," überspringt, und starten Sie"," ",e.jsx("code",{children:"wzk dfs"})," erneut. Was passiert? Erklären Sie es mit dem, was Sie in Aufgabe 10 auf Papier beobachtet haben. Machen Sie die Änderung danach wieder rückgängig."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Kostensuche implementieren"}),e.jsxs("p",{children:["Bis jetzt kostet jeder Zug gleich viel. Die uniforme Kostensuche (Uniform Cost Search, UCS) nimmt immer den Knoten mit den"," ",e.jsx("strong",{children:"kleinsten Gesamtkosten"})," ",e.jsx("code",{children:"g"})," aus der Grenze. Die Grenze ist also eine"," ",e.jsx("strong",{children:"Prioritätswarteschlange"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie die Klasse ",e.jsx("code",{children:"PriorityQueue"}),". Sie bekommt im Konstruktor eine Funktion ",e.jsx("code",{children:"priority(node)"})," ","und gibt bei ",e.jsx("code",{children:"pop()"})," den Knoten mit dem"," ",e.jsx("strong",{children:"kleinsten"})," Wert zurück."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Einfache Variante zuerst:"})," ",e.jsx("code",{children:"push"})," hängt einfach an, ",e.jsx("code",{children:"pop"})," sucht das Minimum linear und entfernt es mit ",e.jsx("code",{children:"splice"}),". Das ist langsam, aber korrekt — und darum geht es zuerst."]}),e.jsxs("li",{children:["Testen Sie mit ",e.jsx("code",{children:"node index.js wzk ucs"})," und"," ",e.jsx("code",{children:"node index.js puzzle ucs"}),". Vergleichen Sie Lösung und Statistik mit ",e.jsx("code",{children:"bfs"}),". Erklären Sie, warum beide dasselbe Ergebnis liefern."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jetzt wird es interessant:"})," Ändern Sie in"," ",e.jsx("code",{children:"pancake.js"})," die Kosten eines Zuges von ",e.jsx("code",{children:"1"})," ","auf ",e.jsx("code",{children:"k"})," — je mehr Pfannkuchen Sie wenden, desto teurer. Lassen Sie ",e.jsx("code",{children:"bfs"})," und ",e.jsx("code",{children:"ucs"})," auf demselben Stapel laufen."]}),e.jsxs("li",{children:["Finden die beiden denselben Weg? Vergleichen Sie"," ",e.jsx("code",{children:"Anzahl Züge"})," und ",e.jsx("code",{children:"Kosten"}),". Welcher Weg ist «besser» — und wer entscheidet das?"]}),e.jsx("li",{children:"Begründen Sie in zwei, drei Sätzen: Warum findet BFS bei gleichen Kosten immer den billigsten Weg, bei unterschiedlichen Kosten aber nicht mehr?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Die drei Algorithmen gegeneinander"}),e.jsx(le,{headers:["Problem","Algorithmus","Anzahl Züge","Kosten","expandierte Knoten","grösste Grenze"],rows:[["WZK","bfs","…","…","…","…"],["WZK","dfs","…","…","…","…"],["WZK","ucs","…","…","…","…"],["Puzzle C","bfs","…","…","…","…"],["Puzzle C","dfs","…","…","…","…"],["Puzzle C","ucs","…","…","…","…"],["Pancake","bfs","…","…","…","…"],["Pancake","dfs","…","…","…","…"],["Pancake","ucs","…","…","…","…"]],caption:"Neun Läufe — alle Zahlen stehen in der Ausgabe des Programms."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Füllen Sie die Tabelle vollständig aus."}),e.jsx("li",{children:"Welcher Algorithmus braucht am wenigsten Speicher (Spalte «grösste Grenze»)? Welcher findet die kürzesten Lösungen? Erklären Sie den Zusammenhang."}),e.jsx("li",{children:"Formulieren Sie für jeden Algorithmus einen Satz: «Nimm mich, wenn …»."})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 5 — Knacknüsse"}),e.jsx("p",{children:"Für alle, die mit den Aufgaben 1–10 fertig sind."}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Wo die Suche aufgibt"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Starten Sie das Schiebepuzzle mit einer Stellung, die mindestens 20 Züge von der Lösung entfernt ist, z. B."," ",e.jsx("code",{children:"[8, 6, 7, 2, 5, 4, 3, 0, 1]"}),". Wie lange braucht BFS? Wie gross wird die Grenze?"]}),e.jsxs("li",{children:["Genau die Hälfte aller 362'880 Anordnungen ist"," ",e.jsx("strong",{children:"unlösbar"}),". Probieren Sie"," ",e.jsx("code",{children:"[2, 8, 3, 1, 6, 4, 7, 0, 5]"}),". Was macht die Suche? Wie lange dauert es, bis sie es merkt — und woran merkt sie es?"]}),e.jsxs("li",{children:["Bauen Sie in ",e.jsx("code",{children:"search.js"})," einen Zähler ein, der alle 10'000 expandierten Knoten den Fortschritt ausgibt."]}),e.jsxs("li",{children:["Ersetzen Sie in Ihrer ",e.jsx("code",{children:"PriorityQueue"})," die lineare Suche durch einen Min-Heap. Messen Sie vorher und nachher die Laufzeit von ",e.jsx("code",{children:"puzzle ucs"}),". Wie gross ist der Unterschied?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 12: Ein eigenes Problem"}),e.jsxs("p",{children:["Modellieren Sie ein ",e.jsx("strong",{children:"selbst gewähltes"})," Problem als neue Datei in ",e.jsx("code",{children:"src/problems/"})," und tragen Sie es in"," ",e.jsx("code",{children:"index.js"})," bei ",e.jsx("code",{children:"PROBLEME"})," ein. Vorschläge:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Wasserkrüge:"})," ein 5-Liter- und ein 3-Liter-Krug, genau 4 Liter abmessen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Springende Frösche:"})," drei Frösche links, drei rechts, ein freier Stein in der Mitte — die Seiten tauschen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zahlenspiel:"})," von 1 zu 100, erlaubt sind"," ",e.jsx("code",{children:"+1"}),", ",e.jsx("code",{children:"·2"})," und ",e.jsx("code",{children:"-3"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Türme von Hanoi"})," mit drei oder vier Scheiben."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Routenplaner:"})," zehn Schweizer Städte mit echten Distanzen als Kantenkosten. Hier lohnt sich ",e.jsx("code",{children:"ucs"}),"!"]})]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schreiben Sie ",e.jsx("em",{children:"vor"})," dem Programmieren in zwei Sätzen auf, was bei Ihnen ein Zustand ist und was eine Aktion."]}),e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"startState"}),", ",e.jsx("code",{children:"isGoal"}),","," ",e.jsx("code",{children:"successors"}),", ",e.jsx("code",{children:"key"})," und ",e.jsx("code",{children:"format"}),"."]}),e.jsxs("li",{children:["Lösen Sie es mit ",e.jsx("code",{children:"bfs"})," und prüfen Sie die Lösung von Hand nach: Ist jeder einzelne Zug erlaubt?"]}),e.jsxs("li",{children:["Wenn Ihr Problem unterschiedliche Kantenkosten hat: Vergleichen Sie ",e.jsx("code",{children:"bfs"})," und ",e.jsx("code",{children:"ucs"}),". Finden sie denselben Weg? Warum (nicht)?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 13: Zum Nachdenken für nächste Woche"}),e.jsx("p",{children:"Alle drei Algorithmen suchen blind — keiner weiss, ob ein Zustand dem Ziel näher ist als ein anderer. Sie selbst wussten das beim Lösen von Hand sehr wohl."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Nehmen Sie Ihre Antwort aus Aufgabe 11 des ersten Kapitels hervor. Wie liesse sich Ihre Idee als Funktion ",e.jsx("code",{children:"h(state)"})," ","schreiben?"]}),e.jsxs("li",{children:["Schauen Sie sich ",e.jsx("code",{children:"src/heuristics.js"})," an. Welche Ihrer Ideen kommt den Funktionen dort am nächsten?"]}),e.jsx("li",{children:"Bringen Sie Ihren Vorschlag in die nächste Lektion mit."})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ihr Fork bzw. Ihre Kopie des Repos mit der fertigen"," ",e.jsx("code",{children:"pancake.js"})," sowie ",e.jsx("code",{children:"Stack"})," und"," ",e.jsx("code",{children:"PriorityQueue"})," in ",e.jsx("code",{children:"search.js"}),"."]}),e.jsxs("li",{children:["Eine Datei ",e.jsx("code",{children:"antworten.md"})," im Repo mit den schriftlichen Antworten und den ausgefüllten Tabellen der Aufgaben 1–10."]}),e.jsxs("li",{children:["Falls Sie Aufgabe 12 gemacht haben: Ihr eigenes Problem in"," ",e.jsx("code",{children:"src/problems/"}),", eingetragen in ",e.jsx("code",{children:"index.js"}),"."]})]}),e.jsx("p",{children:"Die Aufgaben 1–7 sollten Sie in der ersten Lektion schaffen, 8–10 in der zweiten. Teil 4 ist der Kern dieses Kapitels — nehmen Sie sich dafür Zeit."})]})]})}const Md=Object.freeze(Object.defineProperty({__proto__:null,default:Vc},Symbol.toStringTag,{value:"Module"})),Ne={FREI:0,WAND:1},Oe={GRENZE:1,BESUCHT:2},Bs={ucs:{label:"UCS (Dijkstra)",kurz:"UCS",formel:"wählt kleinstes g",erklaerung:"Blind: Sucht gleichmässig in alle Richtungen, weil nur die bisherigen Kosten zählen.",prioritaet:s=>s.g,farbe:"var(--color-blue)"},gbfs:{label:"Greedy Best-First",kurz:"GBFS",formel:"wählt kleinstes h",erklaerung:"Gierig: Läuft stur Richtung Ziel — schnell, aber der Weg kann ein Umweg sein.",prioritaet:s=>s.h,farbe:"var(--color-yellow)"},astar:{label:"A*",kurz:"A*",formel:"wählt kleinstes f = g + h",erklaerung:"Kombiniert beides: Sucht zielgerichtet und findet trotzdem den kürzesten Weg.",prioritaet:s=>s.g+s.h,farbe:"var(--color-aqua)"}};function cs(s,n,i){return Math.abs(s-i.x)+Math.abs(n-i.y)}const be=25,fe=17,De={x:2,y:8},Ee={x:22,y:8};function qe(){return Array.from({length:fe},()=>new Array(be).fill(Ne.FREI))}function Qe(s,n,i){n<0||i<0||n>=be||i>=fe||n===De.x&&i===De.y||n===Ee.x&&i===Ee.y||(s[i][n]=Ne.WAND)}function cn(s,n,i,r=3){for(let t=0;t<fe;t++)t>=i&&t<i+r||Qe(s,n,t)}const an={frei:{label:"Freie Fläche",hinweis:"Ohne Hindernisse sieht man den Unterschied am deutlichsten: UCS sucht einen Kreis, GBFS einen Strahl.",bauen:()=>qe()},mauer:{label:"Mauer mit Tür",hinweis:"Eine Wand zwingt alle drei zum Umweg — GBFS rennt zuerst in die Wand.",bauen:()=>{const s=qe();return cn(s,12,2,3),s}},falle:{label:"Falle für Greedy",hinweis:"Die Tür direkt vor der Nase führt in ein Schlangen-Labyrinth, der Umweg unten herum ist kürzer. GBFS nimmt die verlockende Tür und findet einen zu langen Weg — A* nicht.",bauen:()=>{const s=qe();for(let n=0;n<fe;n++)n===8||n===fe-1||Qe(s,12,n);for(let n=4;n<=fe-2;n++)Qe(s,15,n);for(let n=0;n<=12;n++)Qe(s,18,n);return s}},zickzack:{label:"Zickzack",hinweis:"Drei Mauern mit versetzten Türen — ein typisches Labyrinth-Problem.",bauen:()=>{const s=qe();return cn(s,7,0,4),cn(s,13,13,4),cn(s,18,1,4),s}},bloecke:{label:"Blöcke",hinweis:"Viele kleine Hindernisse — alle drei müssen laufend ausweichen.",bauen:()=>{const s=qe(),n=[[6,2],[6,3],[7,3],[9,6],[9,7],[10,7],[10,8],[8,11],[9,11],[9,12],[13,1],[13,2],[14,2],[14,9],[15,9],[15,10],[15,11],[12,13],[13,13],[18,4],[18,5],[19,5],[19,12],[20,12],[20,11],[5,8],[5,9],[6,9]];for(const[i,r]of n)Qe(s,i,r);return s}}},Rc=[[0,-1],[1,0],[0,1],[-1,0]];function as(s,n,i=De,r=Ee){const t=Bs[n].prioritaet,l=new Uint8Array(be*fe),j=(k,u)=>u*be+k,a=[{x:i.x,y:i.y,g:0,h:cs(i.x,i.y,r),parent:null}];l[j(i.x,i.y)]=Oe.GRENZE;let o=0,z="bereit",h=[],g=null,E=0;function b(k){const u=[];let v=k;for(;v;)u.push({x:v.x,y:v.y}),v=v.parent;return u.reverse()}function f(){return{marken:Uint8Array.from(l),pfad:h,aktuell:g,expandiert:o,grenzeGroesse:a.length,kosten:E,status:z}}function S(){if(z==="gefunden"||z==="erschöpft")return f();if(a.length===0)return z="erschöpft",f();z="läuft";let k=0,u=t(a[0]);for(let _=1;_<a.length;_++){const F=t(a[_]);F<u&&(u=F,k=_)}const v=a.splice(k,1)[0];if(g={x:v.x,y:v.y},l[j(v.x,v.y)]=Oe.BESUCHT,o++,v.x===r.x&&v.y===r.y)return h=b(v),E=v.g,z="gefunden",f();for(const[_,F]of Rc){const B=v.x+_,K=v.y+F;if(B<0||K<0||B>=be||K>=fe||s[K][B]===Ne.WAND)continue;const O=j(B,K);if(l[O]===Oe.BESUCHT)continue;const I=v.g+1,w=a.find(m=>m.x===B&&m.y===K);if(w){I<w.g&&(w.g=I,w.parent=v);continue}a.push({x:B,y:K,g:I,h:cs(B,K,r),parent:v}),l[O]=Oe.GRENZE}return f()}return{step:S,snapshot:f,fertig:()=>z==="gefunden"||z==="erschöpft"}}const Hc="_wrapper_qs2r4_1",Jc="_title_qs2r4_10",Uc="_hinweis_qs2r4_17",qc="_controls_qs2r4_25",Qc="_label_qs2r4_33",Xc="_button_qs2r4_40",Yc="_buttonPrimary_qs2r4_61",ea="_select_qs2r4_66",na="_panels_qs2r4_78",sa="_panel_qs2r4_78",ia="_panelKopf_qs2r4_99",ra="_panelName_qs2r4_107",ta="_panelFormel_qs2r4_112",la="_panelText_qs2r4_118",ca="_grid_qs2r4_128",aa="_cell_qs2r4_139",da="_wand_qs2r4_144",ha="_grenze_qs2r4_148",oa="_besucht_qs2r4_152",ua="_pfad_qs2r4_156",xa="_aktuell_qs2r4_160",ja="_start_qs2r4_164",ga="_ziel_qs2r4_168",ma="_stats_qs2r4_174",ba="_stat_qs2r4_174",fa="_statusZeile_qs2r4_188",pa="_legende_qs2r4_194",ka="_legendeItem_qs2r4_203",Sa="_swatch_qs2r4_209",C={wrapper:Hc,title:Jc,hinweis:Uc,controls:qc,label:Qc,button:Xc,buttonPrimary:Yc,select:ea,panels:na,panel:sa,panelKopf:ia,panelName:ra,panelFormel:ta,panelText:la,grid:ca,cell:aa,wand:da,grenze:ha,besucht:oa,pfad:ua,aktuell:xa,start:ja,ziel:ga,stats:ma,stat:ba,statusZeile:fa,legende:pa,legendeItem:ka,swatch:Sa},_n=["ucs","gbfs","astar"],ds={langsam:{label:"langsam",ms:120,schritte:1},normal:{label:"normal",ms:40,schritte:1},schnell:{label:"schnell",ms:20,schritte:3},sehrSchnell:{label:"sehr schnell",ms:16,schritte:10}};function za({title:s="UCS, Greedy Best-First und A* im Vergleich",layout:n="mauer",tempo:i="normal"}){const[r,t]=D.useState(n),[l,j]=D.useState(i),[c,a]=D.useState(()=>an[r].bauen()),[o,z]=D.useState(null),[h,g]=D.useState(!1),E=D.useRef([]),b=D.useCallback((u=c)=>{const v=_n.map(_=>as(u,_));E.current=v,z(v.map(_=>_.snapshot())),g(!1)},[c]);D.useEffect(()=>{const u=an[r].bauen();a(u);const v=_n.map(_=>as(u,_));E.current=v,z(v.map(_=>_.snapshot())),g(!1)},[r]);const f=D.useCallback((u=1)=>{const v=E.current;if(v.length===0)return!0;let _=!0;const F=v.map(B=>{let K=B.snapshot();for(let O=0;O<u&&!B.fertig();O++)K=B.step();return B.fertig()||(_=!1),K});return z(F),_},[]);D.useEffect(()=>{if(!h)return;const{ms:u,schritte:v}=ds[l],_=setInterval(()=>{f(v)&&g(!1)},u);return()=>clearInterval(_)},[h,l,f]);const S=D.useMemo(()=>o?.every(u=>u.status==="gefunden"||u.status==="erschöpft")??!1,[o]),k=D.useCallback((u,v)=>{if(u===De.x&&v===De.y||u===Ee.x&&v===Ee.y)return;const _=c.map(F=>F.slice());_[v][u]=_[v][u]===Ne.WAND?Ne.FREI:Ne.WAND,a(_),b(_)},[c,b]);return o?e.jsxs("div",{className:C.wrapper,children:[e.jsx("p",{className:C.title,children:s}),e.jsxs("p",{className:C.hinweis,children:["Alle drei suchen denselben Weg von ",e.jsx("strong",{children:"Start"})," nach"," ",e.jsx("strong",{children:"Ziel"}),". Die Kosten pro Schritt sind überall 1, die Heuristik ist die Manhattan-Distanz zum Ziel. Achten Sie darauf,"," ",e.jsx("em",{children:"wie viele"})," Felder jeder Algorithmus anschaut — und ob der gefundene Weg wirklich der kürzeste ist. Klicken Sie ins Gitter, um eigene Hindernisse zu setzen."]}),e.jsxs("div",{className:C.controls,children:[e.jsx("button",{type:"button",className:`${C.button} ${C.buttonPrimary}`,onClick:()=>g(u=>!u),disabled:S,children:h?"Pause":"Abspielen"}),e.jsx("button",{type:"button",className:C.button,onClick:()=>f(1),disabled:h||S,children:"1 Schritt"}),e.jsx("button",{type:"button",className:C.button,onClick:()=>f(10),disabled:h||S,children:"10 Schritte"}),e.jsx("button",{type:"button",className:C.button,onClick:()=>b(),children:"Zurücksetzen"}),e.jsx("span",{className:C.label,children:"Hindernisse"}),e.jsx("select",{className:C.select,value:r,onChange:u=>t(u.target.value),children:Object.entries(an).map(([u,v])=>e.jsx("option",{value:u,children:v.label},u))}),e.jsx("span",{className:C.label,children:"Tempo"}),e.jsx("select",{className:C.select,value:l,onChange:u=>j(u.target.value),children:Object.entries(ds).map(([u,v])=>e.jsx("option",{value:u,children:v.label},u))})]}),e.jsx("div",{className:C.panels,children:_n.map((u,v)=>e.jsx(wa,{algo:u,gitter:c,snapshot:o[v],onZelle:k},u))}),e.jsxs("div",{className:C.legende,children:[e.jsx(Ke,{farbe:"var(--color-green)",text:"Start"}),e.jsx(Ke,{farbe:"var(--color-purple)",text:"Ziel"}),e.jsx(Ke,{farbe:"var(--color-gray)",text:"Wand"}),e.jsx(Ke,{farbe:"#3c4c5a",text:"besucht (expandiert)"}),e.jsx(Ke,{farbe:"#665c54",text:"Grenze (bekannt, noch offen)"}),e.jsx(Ke,{farbe:"var(--color-orange)",text:"gefundener Weg"})]}),e.jsx("p",{className:C.hinweis,style:{marginTop:"var(--space-sm)"},children:an[r].hinweis})]}):null}function wa({algo:s,gitter:n,snapshot:i,onZelle:r}){const t=Bs[s],{marken:l,pfad:j,aktuell:c,expandiert:a,grenzeGroesse:o,kosten:z,status:h}=i,g=D.useMemo(()=>new Set(j.map(b=>`${b.x},${b.y}`)),[j]),E=[];for(let b=0;b<fe;b++)for(let f=0;f<be;f++){const S=[C.cell];n[b][f]===Ne.WAND?S.push(C.wand):g.has(`${f},${b}`)?S.push(C.pfad):l[b*be+f]===Oe.BESUCHT?S.push(C.besucht):l[b*be+f]===Oe.GRENZE&&S.push(C.grenze),c&&c.x===f&&c.y===b&&h==="läuft"&&S.push(C.aktuell),f===De.x&&b===De.y&&S.push(C.start),f===Ee.x&&b===Ee.y&&S.push(C.ziel),E.push(e.jsx("div",{className:S.join(" "),"data-x":f,"data-y":b},`${f}-${b}`))}return e.jsxs("div",{className:C.panel,style:{borderTopColor:t.farbe},children:[e.jsxs("div",{className:C.panelKopf,children:[e.jsx("span",{className:C.panelName,style:{color:t.farbe},children:t.label}),e.jsx("span",{className:C.panelFormel,children:t.formel})]}),e.jsx("p",{className:C.panelText,children:t.erklaerung}),e.jsx("div",{className:C.grid,style:{gridTemplateColumns:`repeat(${be}, 1fr)`},onMouseDown:b=>{const f=b.target,S=Number(f.dataset?.x),k=Number(f.dataset?.y);Number.isInteger(S)&&Number.isInteger(k)&&r(S,k)},children:E}),e.jsxs("div",{className:C.stats,children:[e.jsxs("span",{className:C.stat,children:["besucht: ",e.jsx("strong",{children:a})]}),e.jsxs("span",{className:C.stat,children:["Grenze: ",e.jsx("strong",{children:o})]}),e.jsxs("span",{className:C.stat,children:["Weglänge: ",e.jsx("strong",{children:h==="gefunden"?z:"—"})]})]}),e.jsx("div",{className:C.statusZeile,style:{color:h==="gefunden"?"var(--color-orange)":t.farbe},children:va(h,z)})]})}function va(s,n){return s==="gefunden"?`Ziel gefunden — Weglänge ${n}`:s==="erschöpft"?"Kein Weg gefunden":s==="läuft"?"sucht …":"bereit"}function Ke({farbe:s,text:n}){return e.jsxs("span",{className:C.legendeItem,children:[e.jsx("span",{className:C.swatch,style:{backgroundColor:s}}),n]})}const Aa="_wrapper_199ib_1",ya="_title_199ib_10",Na="_controls_199ib_17",Da="_button_199ib_25",Ea="_buttonAktiv_199ib_41",Ba="_treeBox_199ib_46",Wa="_knotenName_199ib_54",_a="_knotenWert_199ib_59",Fa="_knotenF_199ib_64",Pa="_kantenLabel_199ib_70",Za="_legend_199ib_75",Ka="_legendItem_199ib_84",Ma="_legendDot_199ib_90",Oa="_stats_199ib_97",Ta="_gut_199ib_118",Ia="_schlecht_199ib_122",La="_text_199ib_126",R={wrapper:Aa,title:ya,controls:Na,button:Da,buttonAktiv:Ea,treeBox:Ba,knotenName:Wa,knotenWert:_a,knotenF:Fa,kantenLabel:Pa,legend:Za,legendItem:Ka,legendDot:Ma,stats:Oa,gut:Ta,schlecht:Ia,text:La},re={S:{label:"S",x:70,y:150,g:0,parent:null,kosten:0,hStern:4},A:{label:"A",x:235,y:70,g:2,parent:"S",kosten:2,hStern:5},B:{label:"B",x:235,y:240,g:3,parent:"S",kosten:3,hStern:1},C:{label:"C",x:410,y:30,g:4,parent:"A",kosten:2,hStern:3},D:{label:"D",x:410,y:130,g:3,parent:"A",kosten:1,hStern:6},G2:{label:"G₂",x:410,y:240,g:4,parent:"B",kosten:1,hStern:0},G1:{label:"G₁",x:585,y:30,g:7,parent:"C",kosten:3,hStern:0},G3:{label:"G₃",x:585,y:130,g:9,parent:"D",kosten:6,hStern:0}},Tn=Object.keys(re),Ca=new Set(["G1","G2","G3"]),dn=4,Ws=Tn.reduce((s,n)=>{const i=re[n].parent;return i&&(s[i]=[...s[i]??[],n]),s},{}),Xe={S:3,A:4,B:1,C:3,D:5,G1:0,G2:0,G3:0},Ga={...Xe,B:4},$a={...Xe,A:0},Va={S:0,A:0,B:0,C:0,D:0,G1:0,G2:0,G3:0},Ra={S:1,A:1,B:1,C:1,D:1,G1:0,G2:0,G3:0},Ha={zulaessig:{zeigeHStern:!0,varianten:[{key:"gut",label:"zulässig",h:Xe,text:e.jsxs(e.Fragment,{children:["Jede Schätzung bleibt unter dem echten Restweg:"," ",e.jsx("code",{children:"h(n) ≤ h*(n)"}),". A",e.jsx("sup",{children:"*"})," findet den kürzesten Weg"," ",e.jsx("strong",{children:"S → B → G₂"})," mit Kosten 4."]})},{key:"ueber",label:"überschätzt bei B",h:Ga,text:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"h(B) = 4"}),", in Wirklichkeit ist es nur noch"," ",e.jsx("code",{children:"1"}),". B sieht dadurch teurer aus, als er ist — A",e.jsx("sup",{children:"*"})," legt ihn beiseite und liefert den Weg über G₁ mit Kosten 7. ",e.jsx("strong",{children:"Die Optimalität ist weg."})]})}]},konsistent:{zeigeKanten:!0,varianten:[{key:"ok",label:"konsistent",h:Xe,text:e.jsxs(e.Fragment,{children:["An jeder Kante gilt ",e.jsx("code",{children:"h(n) ≤ c(n,n′) + h(n′)"}),". Deshalb fällt ",e.jsx("code",{children:"f"})," entlang keines Pfades — die Zahlen in den Kästchen werden von links nach rechts nie kleiner. A",e.jsx("sup",{children:"*"})," ","darf jeden herausgenommenen Knoten abhaken."]})},{key:"nicht",label:"zulässig, aber nicht konsistent",h:$a,text:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"h(A) = 0"})," ist zulässig (0 ≤ 5), aber an der Kante S → A gilt ",e.jsx("code",{children:"3 ≤ 2 + 0"})," nicht. Man sieht es sofort an"," ",e.jsx("code",{children:"f"}),": Es fällt von 3 auf 2. In einem Graphen kann man einen Knoten dann später auf einem billigeren Weg wiederfinden und muss ihn erneut in die Grenze legen («reopening»)."]})}]},dominanz:{zeigeSchnitt:!0,varianten:[{key:"null",label:"h = 0 (UCS)",h:Va,text:e.jsxs(e.Fragment,{children:["Ohne Heuristik ist A",e.jsx("sup",{children:"*"})," genau UCS: ",e.jsx("code",{children:"f = g"}),". Alles mit ",e.jsx("code",{children:"g ≤ 4"})," kommt dran."]})},{key:"schwach",label:"h₁ (schwach)",h:Ra,text:e.jsxs(e.Fragment,{children:["Schon eine grobe Schätzung schneidet den Ast über C weg:"," ",e.jsx("code",{children:"f(C) = 4 + 1 = 5 > 4"}),"."]})},{key:"stark",label:"h₂ (stark)",h:Xe,text:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"h₂ ≥ h₁"})," an jedem Knoten — h₂ ",e.jsx("strong",{children:"dominiert"})," ","h₁. Die Schätzungen liegen näher an ",e.jsx("code",{children:"h*"}),", dadurch steigt"," ",e.jsx("code",{children:"f"})," früher über die 4 und ganze Teilbäume fallen weg."]})}]}};function Ja(s){const n=[{id:"S",f:s.S,h:s.S}],i=[];for(;n.length>0;){n.sort((t,l)=>t.f-l.f||t.h-l.h||t.id.localeCompare(l.id));const r=n.shift();if(i.push(r.id),Ca.has(r.id)){const t=[];for(let l=r.id;l;l=re[l].parent)t.unshift(l);return{expandiert:i,pfad:t,kosten:re[r.id].g}}for(const t of Ws[r.id]??[])n.push({id:t,f:re[t].g+s[t],h:s[t]})}return{expandiert:i,pfad:[],kosten:null}}const ke=86,we=56;function Fn({mode:s="zulaessig",title:n}){const i=Ha[s],[r,t]=D.useState(i.varianten[0].key),l=i.varianten.find(b=>b.key===r),j=l.h,c=Ja(j),a=new Set(c.pfad),o=new Set(c.expandiert),z=b=>j[b]>re[b].hStern,h=b=>{const f=re[b].parent;return f!=null&&j[f]>re[b].kosten+j[b]},g=b=>re[b].g+j[b]>dn,E=b=>i.zeigeHStern&&z(b)||i.zeigeKanten&&(h(b)||Ws[b]?.some(h))?"var(--color-red)":a.has(b)?"var(--color-aqua)":o.has(b)?"var(--color-yellow)":i.zeigeSchnitt&&g(b)?"var(--color-bg-light)":"var(--color-bg-lighter)";return e.jsxs("div",{className:R.wrapper,children:[n&&e.jsx("p",{className:R.title,children:n}),e.jsx("div",{className:R.controls,children:i.varianten.map(b=>e.jsx("button",{type:"button",className:`${R.button} ${b.key===r?R.buttonAktiv:""}`,onClick:()=>t(b.key),children:b.label},b.key))}),e.jsx("div",{className:R.treeBox,children:e.jsxs("svg",{viewBox:"0 0 700 300",width:"100%",role:"img","aria-label":"Ausschnitt aus einem Suchbaum mit g, h und f",children:[e.jsx("title",{children:"Ausschnitt aus einem Suchbaum"}),Tn.map(b=>{const f=re[b];if(!f.parent)return null;const S=re[f.parent],k=i.zeigeKanten&&h(b),u=a.has(b)&&a.has(f.parent),v=k?"var(--color-red)":u?"var(--color-aqua)":"var(--color-bg-lighter)";return e.jsxs("g",{children:[e.jsx("line",{x1:S.x+ke/2,y1:S.y,x2:f.x-ke/2,y2:f.y,stroke:v,strokeWidth:k||u?3:1.5}),e.jsx("text",{className:R.kantenLabel,x:(S.x+f.x)/2,y:(S.y+f.y)/2-6,textAnchor:"middle",fill:v,children:i.zeigeKanten?`${j[f.parent]} ${k?">":"≤"} ${f.kosten}+${j[b]}`:f.kosten})]},`kante-${b}`)}),Tn.map(b=>{const f=re[b],S=E(b),k=i.zeigeSchnitt&&g(b);return e.jsxs("g",{opacity:k?.45:1,children:[e.jsx("rect",{x:f.x-ke/2,y:f.y-we/2,width:ke,height:we,rx:"8",fill:"var(--color-bg)",stroke:S,strokeWidth:"2.5",strokeDasharray:k?"4 3":void 0}),e.jsx("text",{className:R.knotenName,x:f.x-ke/2+8,y:f.y-we/2+17,fill:S,children:f.label}),e.jsxs("text",{className:R.knotenWert,x:f.x+ke/2-8,y:f.y-we/2+17,textAnchor:"end",fill:"var(--color-gray-light)",children:["g=",f.g]}),e.jsxs("text",{className:R.knotenWert,x:f.x-ke/2+8,y:f.y+we/2-20,fill:i.zeigeHStern&&z(b)?"var(--color-red)":"var(--color-fg)",children:["h=",j[b]]}),i.zeigeHStern&&e.jsxs("text",{className:R.knotenWert,x:f.x+ke/2-8,y:f.y+we/2-20,textAnchor:"end",fill:"var(--color-gray)",children:["h*=",f.hStern]}),e.jsxs("text",{className:R.knotenF,x:f.x,y:f.y+we/2-5,textAnchor:"middle",fill:i.zeigeSchnitt&&g(b)?"var(--color-gray)":"var(--color-orange)",children:["f=",f.g+j[b]]})]},`knoten-${b}`)}),i.zeigeSchnitt&&e.jsx("text",{className:R.kantenLabel,x:"700",y:"292",textAnchor:"end",fill:"var(--color-gray)",children:"gestrichelt: f > 4 — diese Knoten nimmt A* nie heraus"})]})}),e.jsxs("div",{className:R.legend,children:[e.jsx(hn,{farbe:"var(--color-yellow)",text:"von A* expandiert"}),e.jsx(hn,{farbe:"var(--color-aqua)",text:"gefundener Weg"}),i.zeigeHStern&&e.jsx(hn,{farbe:"var(--color-red)",text:"h > h* (überschätzt)"}),i.zeigeKanten&&e.jsx(hn,{farbe:"var(--color-red)",text:"Kante verletzt die Bedingung"})]}),e.jsxs("dl",{className:R.stats,children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Gefundener Weg"}),e.jsx("dd",{children:c.pfad.map(b=>re[b].label).join(" → ")})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Kosten"}),e.jsxs("dd",{className:c.kosten>dn?R.schlecht:R.gut,children:[c.kosten,c.kosten>dn?` (optimal wären ${dn})`:" (optimal)"]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Expandierte Knoten"}),e.jsxs("dd",{children:[c.expandiert.length," ·"," ",c.expandiert.map(b=>re[b].label).join(", ")]})]})]}),e.jsx("p",{className:R.text,children:l.text})]})}function hn({farbe:s,text:n}){return e.jsxs("span",{className:R.legendItem,children:[e.jsx("span",{className:R.legendDot,style:{backgroundColor:s}}),n]})}function Ua(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Heuristiken"}),e.jsxs("h2",{children:["Greedy Best-First und A",e.jsx("sup",{children:"*"})]}),e.jsx("p",{children:"Suchen mit einer Ahnung, wo das Ziel liegt"})]}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wo wir stehen"}),e.jsxs("p",{children:["Letzte Woche haben alle unsere Algorithmen dasselbe gemacht: Knoten aus der ",e.jsx("strong",{children:"Grenze"})," holen, expandieren, Nachfolger zurücklegen. Der einzige Unterschied war die Frage, ",e.jsx("em",{children:"welchen"})," ","Knoten sie als Nächstes nehmen:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"BFS"})," — den ältesten (Warteschlange)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DFS"})," — den neuesten (Stapel)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UCS"})," — den mit dem kleinsten ",e.jsx("code",{children:"g"}),", also den bisher billigsten"]})]}),e.jsxs("p",{children:["Alle drei sind ",e.jsx("strong",{children:"blind"}),": Sie wissen nicht, ob eine Stellung dem Ziel näher ist als eine andere. Sie sehen nur, was hinter ihnen liegt. Deshalb expandiert BFS auf der 14-Zug-Stellung rund 2'900 Knoten — obwohl ein Mensch dort oft in 20 Zügen durch ist."]}),e.jsxs("p",{children:["Sie selbst haben beim Spielen von Hand nie blind gesucht. Sie haben eine Stellung angeschaut und gedacht: «Die sieht besser aus.»"," ",e.jsx("strong",{children:"Diese Ahnung bauen wir diese Woche in den Algorithmus ein."})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Dieselbe Aufgabe, drei Suchräume"}),e.jsx("p",{children:"Bevor wir Formeln anschauen, sehen wir uns die drei Verfahren gleichzeitig bei der Arbeit an. Alle drei suchen denselben Weg durch dasselbe Gitter. Jedes Feld ist ein Zustand, jeder Schritt nach oben, unten, links oder rechts kostet 1."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"UCS"})," nimmt immer den Knoten mit dem kleinsten"," ",e.jsx("code",{children:"g"})," — er weiss nichts über die Richtung des Ziels."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Greedy Best-First"})," nimmt immer den Knoten mit dem kleinsten ",e.jsx("code",{children:"h"})," — er schaut nur nach vorne."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"})]})," ","nimmt den Knoten mit dem kleinsten ",e.jsx("code",{children:"f = g + h"})," — er verrechnet beides."]})]}),e.jsxs("p",{children:["Die Heuristik ",e.jsx("code",{children:"h"})," ist hier die"," ",e.jsx("strong",{children:"Manhattan-Distanz"})," zum Ziel: wie viele Felder man noch waagrecht und senkrecht zurücklegen müsste, wenn keine Wände im Weg wären."]})]})}),e.jsx(za,{layout:"mauer"}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was man dabei sieht"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"UCS färbt einen Kreis."})," Er expandiert alles, was nahe am Start liegt — auch in die völlig falsche Richtung. Dafür ist sein Weg garantiert der kürzeste."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GBFS färbt einen schmalen Strahl."})," Er ist meist als Erster fertig und schaut nur wenige Felder an — aber in der Sackgassen-Variante läuft er in die Falle und sein Weg ist länger als nötig."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"})," färbt einen Keil Richtung Ziel."]})," ","Deutlich weniger Felder als UCS, und trotzdem dieselbe Weglänge wie UCS."]})]}),e.jsxs("p",{children:["Probieren Sie die verschiedenen Hindernis-Layouts aus und zeichnen Sie eigene Wände ins Gitter. Vergleichen Sie jeweils die Zahl der besuchten Felder und die Weglänge:"," ",e.jsx("strong",{children:"Wer sucht weniger? Wer findet trotzdem den kürzesten Weg?"})]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsxs("h2",{children:["Die Heuristik ",e.jsx("code",{children:"h(state)"})]}),e.jsxs("p",{children:["Eine ",e.jsx("strong",{children:"Heuristik"})," ist eine Funktion, die zu jedem Zustand schätzt, wie weit es von dort ",e.jsx("em",{children:"noch"})," bis zum Ziel ist:"]}),e.jsxs("p",{children:["Sie bekommt einen Zustand und liefert eine Zahl ",e.jsx("code",{children:"≥ 0"})," ","zurück. Für den Zielzustand muss sie ",e.jsx("code",{children:"0"})," liefern — von dort ist es nicht mehr weit."]}),e.jsxs("p",{children:["Das Entscheidende: Eine Heuristik ist ",e.jsx("strong",{children:"billig"}),". Sie schaut sich den Zustand an und rechnet eine Zahl aus — sie führt keine eigene Suche durch. Deshalb darf sie auch falsch liegen; sie ist eine Schätzung, kein Orakel."]}),e.jsx("p",{children:"Für das Schiebepuzzle kennen wir schon zwei:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["h",e.jsx("sub",{children:"1"})," — falsche Plätze:"]})," ","Wie viele Steine liegen nicht dort, wo sie hingehören? (Das leere Feld zählt nicht mit.)"]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["h",e.jsx("sub",{children:"2"})," — Manhattan-Distanz:"]})," ","Wie weit muss jeder Stein mindestens laufen — Zeilen- plus Spaltenabstand, aufsummiert?"]})]}),e.jsx("p",{children:"Beide sind in wenigen Zeilen auszurechnen — man zählt bzw. summiert nur, ohne irgendeinen Zug auszuprobieren. Genau deshalb kann man sie bei jedem einzelnen Knoten der Suche aufrufen."})]})}),e.jsx(Zn,{showHeuristics:!0,title:"Beide Heuristiken an derselben Stellung"}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Woher nimmt man eine Heuristik?"}),e.jsxs("p",{children:["Nicht aus dem Bauch. Der übliche Trick heisst"," ",e.jsx("strong",{children:"Relaxation"}),": Man lässt eine Regel des Problems weg und löst das einfachere Problem exakt. Dessen Lösung ist nie länger als die echte — und damit eine brauchbare Schätzung."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Regel «ein Stein darf nur ins leere Feld rutschen» weglassen → jeder Stein darf frei herumspringen → man braucht einen Zug pro falsch platziertem Stein ="," ",e.jsxs("strong",{children:["h",e.jsx("sub",{children:"1"})]}),"."]}),e.jsxs("li",{children:["Nur die Regel «das Zielfeld muss leer sein» weglassen → jeder Stein läuft auf direktem Weg zu seinem Platz ="," ",e.jsxs("strong",{children:["h",e.jsx("sub",{children:"2"})]}),"."]}),e.jsxs("li",{children:["Beim ",e.jsx("strong",{children:"Routenplanen"})," lässt man die Strassen weg → Luftlinie zwischen zwei Orten."]}),e.jsxs("li",{children:["Beim ",e.jsx("strong",{children:"Pfannkuchen-Problem"})," lässt man die Grösse der Wendeaktion weg → Anzahl «Brüche» im Stapel (gap heuristic)."]})]}),e.jsxs("p",{children:["Weil man eine Regel nur ",e.jsx("em",{children:"wegnimmt"}),", kann das relaxierte Problem nie teurer sein als das echte. Genau das brauchen wir gleich."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Greedy Best-First: nur auf h schauen"}),e.jsxs("p",{children:["Der naheliegendste Einfall: Nimm immer den Knoten aus der Grenze, der am ",e.jsx("em",{children:"nächsten"})," am Ziel zu sein scheint — also den mit dem kleinsten ",e.jsx("code",{children:"h"}),". Das ist"," ",e.jsx("strong",{children:"Greedy Best-First Search"}),", «gierige Bestensuche»."]}),e.jsxs("p",{children:["Es ist derselbe Algorithmus wie immer — dieselbe Schleife, dieselbe Grenze. Nur die Zahl, nach der die Prioritätswarteschlange sortiert, ist eine andere: statt ",e.jsx("code",{children:"g"})," nimmt sie ",e.jsx("code",{children:"h"}),"."]}),e.jsxs("p",{children:["Greedy ist oft verblüffend schnell. Aber er hat ein Problem: Er vergisst vollständig, was ihn der Weg bisher gekostet hat. Wer nahe am Ziel ",e.jsx("em",{children:"aussieht"}),", kommt dran — auch wenn er über einen gewaltigen Umweg dorthin gekommen ist."]}),e.jsxs("p",{children:["Die Folge: Greedy findet meist ",e.jsx("strong",{children:"irgendeinen"})," Weg, nicht den kürzesten. Auf unseren Testfällen liefert er regelmässig Lösungen mit 50 Zügen, wo der kürzeste Weg 24 Züge hat."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["greedy","bfs"],start:[0,7,1,2,6,3,8,5,4],title:"Greedy stürmt zum Ziel — aber auf welchem Weg?"})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsxs("h2",{children:["A",e.jsx("sup",{children:"*"}),": g und h zusammenzählen"]}),e.jsxs("p",{children:["Greedy schaut nur nach vorne, UCS nur nach hinten. A",e.jsx("sup",{children:"*"})," ","(gesprochen «A-Stern») macht beides gleichzeitig:"]}),e.jsx("p",{children:e.jsx("strong",{children:"f(n) = g(n) + h(n)"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"g(n)"})," — was uns der Weg vom Start bis ",e.jsx("code",{children:"n"})," ","gekostet hat (bekannt, exakt)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"h(n)"})," — was uns der Rest von ",e.jsx("code",{children:"n"})," bis zum Ziel kosten wird (geschätzt)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"f(n)"})," — die geschätzten Gesamtkosten eines Weges"," ",e.jsx("em",{children:"durch"})," ",e.jsx("code",{children:"n"})]})]}),e.jsx("p",{children:"Mehr ist es nicht. Dieselbe Schleife, dieselbe Grenze, dieselbe Besucht-Menge — nur die Zahl, nach der sortiert wird, ist anders. Und damit entstehen aus einem Algorithmus vier:"}),e.jsx(le,{headers:["Priorität","Algorithmus","schaut auf"],rows:[["g","UCS / Dijkstra","nur zurück"],["h","Greedy Best-First","nur nach vorne"],["g + h","A*","beides"],["g + 0","UCS","A* mit h = 0 ist genau UCS"]],caption:"Nur die Priorität unterscheidet diese Algorithmen — sonst nichts."}),e.jsxs("p",{children:[e.jsx("code",{children:"f"})," ist die geschätzte Länge des ",e.jsx("em",{children:"ganzen"})," Weges, wenn er durch diesen Knoten führt. A",e.jsx("sup",{children:"*"})," arbeitet also immer an dem Weg weiter, der insgesamt am vielversprechendsten aussieht — und nicht an dem, dessen Ende zufällig nahe am Ziel liegt."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"A* von Hand nachvollziehen"}),e.jsxs("p",{children:["Unten können Sie den Zustandsraum selbst erkunden. Links steht jetzt nicht mehr nur die Nachfolgerliste, sondern die"," ",e.jsx("strong",{children:"ganze Grenze"})," — sortiert nach ",e.jsx("code",{children:"f = g + h"}),", also genau in der Reihenfolge, in der A",e.jsx("sup",{children:"*"})," sie abarbeiten würde."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("span",{style:{color:"var(--color-orange)"},children:"orange"})," — der Knoten, den A",e.jsx("sup",{children:"*"})," als Nächstes expandiert (kleinstes"," ",e.jsx("code",{children:"f"}),")"]}),e.jsxs("li",{children:[e.jsx("span",{style:{color:"var(--color-blue)"},children:"blau"})," — die übrige Grenze: bekannt, aber noch nicht expandiert"]}),e.jsxs("li",{children:[e.jsx("span",{style:{color:"var(--color-gray)"},children:"grau"})," — schon besucht und abgehakt"]})]}),e.jsxs("p",{children:["Drücken Sie mehrmals «nächsten Knoten expandieren» und beobachten Sie, wie sich die Liste ständig neu sortiert. Vergleichen Sie, was passiert, wenn Sie ",e.jsx("code",{children:"f = g + h"})," ausschalten und nur"," ",e.jsx("code",{children:"h"})," betrachten: Das wäre Greedy."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Kn,{showHeuristics:!0,title:"Die Grenze, sortiert nach f — so wählt A* aus"})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaft 1: zulässig (admissible)"}),e.jsxs("p",{children:["Eine Heuristik heisst ",e.jsx("strong",{children:"zulässig"}),", wenn sie"," ",e.jsx("strong",{children:"nie zu viel schätzt"}),":"]}),e.jsxs("p",{style:{textAlign:"center",fontSize:"1.2rem"},children:[e.jsx("code",{children:"h(n) ≤ h*(n)"})," für alle Zustände ",e.jsx("code",{children:"n"})]}),e.jsxs("p",{children:["Dabei ist ",e.jsx("code",{children:"h*(n)"})," der tatsächliche Restweg — den kennen wir natürlich nicht, sonst müssten wir nicht suchen. Eine zulässige Heuristik ist also ",e.jsx("em",{children:"optimistisch"}),": Sie verspricht nie mehr, als sie halten kann."]}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Das ist die Bedingung dafür, dass A",e.jsx("sup",{children:"*"})," den kürzesten Weg findet."]})," ","Die Begründung ist kurz: Angenommen, A",e.jsx("sup",{children:"*"})," wollte einen zu teuren Zielknoten ",e.jsx("code",{children:"G₂"})," herausnehmen. Dann liegt irgendwo in der Grenze noch ein Knoten ",e.jsx("code",{children:"n"})," auf dem wirklich kürzesten Weg. Für den gilt"," ",e.jsx("code",{children:"f(n) = g(n) + h(n) ≤ g(n) + h*(n) = "})," Kosten der optimalen Lösung ",e.jsx("code",{children:" < f(G₂)"}),". Also wäre ",e.jsx("code",{children:"n"})," ","vorher drangekommen — Widerspruch."]}),e.jsxs("p",{children:["Beide Puzzle-Heuristiken sind zulässig: Jeder Zug bringt höchstens einen Stein an seinen Platz (",e.jsxs("code",{children:["h",e.jsx("sub",{children:"1"})]}),") und verringert die Manhattan-Summe um höchstens 1 (",e.jsxs("code",{children:["h",e.jsx("sub",{children:"2"})]}),"). Multipliziert man aber ",e.jsx("code",{children:"h₂"})," mit 3, ist die Heuristik nicht mehr zulässig — A",e.jsx("sup",{children:"*"})," wird schneller, findet aber Lösungen, die zu lang sind."]}),e.jsx("p",{children:"Am besten sieht man das an einem Ausschnitt eines Suchbaums. Derselbe Baum, dieselben Kosten — nur eine einzige Schätzung ist zu gross:"}),e.jsxs("p",{children:[e.jsx("em",{children:"Hinweis:"})," Der Baum unten ist ",e.jsx("strong",{children:"nicht"})," das Puzzle, sondern ein kleines Beispiel mit"," ",e.jsx("strong",{children:"unterschiedlichen Kantenkosten"})," (wie eine Landkarte). Im Puzzle kostet jeder Zug genau ",e.jsx("code",{children:"1"}),", dann wären alle Kanten gleich lang und man sähe den Effekt viel schlechter."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Fn,{mode:"zulaessig",title:"Zulässigkeit: was passiert, wenn eine Schätzung zu gross ist?"})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaft 2: konsistent (monoton)"}),e.jsxs("p",{children:["Etwas strenger ist die ",e.jsx("strong",{children:"Konsistenz"}),". Sie verlangt, dass die Schätzung entlang jeder Kante nicht zu schnell fällt:"]}),e.jsx("p",{style:{textAlign:"center",fontSize:"1.2rem"},children:e.jsx("code",{children:"h(n) ≤ cost(n, n′) + h(n′)"})}),e.jsxs("p",{children:["Dabei ist ",e.jsx("code",{children:"n"})," der aktuelle Knoten und ",e.jsx("code",{children:"n′"})," («n Strich») ein direkter ",e.jsx("strong",{children:"Nachfolger"})," von ",e.jsx("code",{children:"n"}),", also ein Nachbar, den man über genau eine Kante erreicht."," ",e.jsx("code",{children:"cost(n, n′)"})," sind die Kosten dieser Kante. Die Bedingung muss für jede solche Kante ",e.jsx("code",{children:"n → n′"})," im Graphen gelten. Im Schiebepuzzle kostet jeder Zug ",e.jsx("code",{children:"1"}),", dort heisst die Bedingung also schlicht ",e.jsx("code",{children:"h(n) ≤ 1 + h(n′)"}),": Ein einzelner Zug darf die Schätzung höchstens um ",e.jsx("code",{children:"1"})," senken. Der Baum im Widget unten hat dagegen bewusst unterschiedliche Kantenkosten."]}),e.jsxs("p",{children:["Das ist die Dreiecksungleichung: Der Umweg über einen Nachbarn darf nie günstiger erscheinen als die direkte Schätzung. Konsistenz ist der Grund, warum unsere ",e.jsx("strong",{children:"Besucht-Menge"})," überhaupt erlaubt ist: Bei einer konsistenten Heuristik wächst ",e.jsx("code",{children:"f"})," ","entlang jedes Pfades nie, und wenn A",e.jsx("sup",{children:"*"})," einen Knoten herausnimmt, hat er ihn garantiert schon auf dem billigsten Weg gefunden. Man darf ihn also abhaken und nie wieder anschauen."]}),e.jsxs("p",{children:["Ist ",e.jsx("code",{children:"h"})," nur zulässig, aber nicht konsistent, kann man einen Knoten später auf einem billigeren Weg wiederfinden. Dann muss man ihn erneut in die Grenze legen («reopening»), sonst verliert man die Optimalität. Praktisch gilt:"," ",e.jsx("em",{children:"Jede konsistente Heuristik ist zulässig"}),", und fast alle Heuristiken, die aus einer Relaxation entstehen, sind automatisch konsistent — auch unsere beiden."]}),e.jsxs("p",{children:["Im selben Baum steht die Bedingung jetzt an jeder Kante. Achten Sie auf die ",e.jsx("code",{children:"f"}),"-Werte: Solange die Heuristik konsistent ist, werden sie von links nach rechts nie kleiner."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Fn,{mode:"konsistent",title:"Konsistenz: die Bedingung an jeder einzelnen Kante"})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaft 3: Dominanz — je grösser, desto besser"}),e.jsxs("p",{children:["Zwei zulässige Heuristiken vergleicht man so: ",e.jsx("code",{children:"h₂"})," ",e.jsx("strong",{children:"dominiert"})," ",e.jsx("code",{children:"h₁"}),", wenn"," ",e.jsx("code",{children:"h₂(n) ≥ h₁(n)"})," für alle ",e.jsx("code",{children:"n"})," gilt. Die grössere zulässige Heuristik ist immer die bessere — sie ist näher an der Wahrheit und schneidet mehr Zweige weg."]}),e.jsx("p",{children:"Die Manhattan-Distanz dominiert die falschen Plätze: Jeder Stein am falschen Platz steuert mindestens 1 bei, meist mehr."}),e.jsxs("p",{children:["Was das bewirkt, zeigt wieder der Suchbaum: Je grösser"," ",e.jsx("code",{children:"h"}),", desto früher steigt ",e.jsx("code",{children:"f = g + h"})," über die Kosten der optimalen Lösung — und alles darüber schaut A",e.jsx("sup",{children:"*"})," ","gar nie an."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Fn,{mode:"dominanz",title:"Dominanz: die grössere zulässige Heuristik schneidet mehr weg"})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("p",{children:"Bei echten Problemen ist der Effekt dramatisch. Dieselben Stellungen, dieselben Lösungen — nur die Anzahl angeschauter Knoten unterscheidet sich:"}),e.jsx(le,{headers:["Startstellung","kürzester Weg","BFS","A* mit falschen Plätzen","A* mit Manhattan"],rows:[["2,8,3,1,0,5,4,7,6","8 Züge","206","15","10"],["1,8,2,5,0,3,4,6,7","12 Züge","1'647","112","38"],["3,5,6,1,7,2,4,8,0","14 Züge","3'883","211","54"],["3,1,2,4,0,5,6,7,8","20 Züge","61'075","4'259","696"],["1,5,6,8,3,2,0,7,4","24 Züge","119'564","19'368","3'281"],["6,2,1,5,8,4,3,7,0","28 Züge","179'208","71'908","7'845"]],caption:"Expandierte Knoten. Alle drei finden denselben kürzesten Weg — mit sehr unterschiedlichem Aufwand."}),e.jsxs("p",{children:["Die Grenze der Idee: ",e.jsx("code",{children:"h = h*"})," wäre perfekt, A",e.jsx("sup",{children:"*"})," ","würde schnurgerade zum Ziel laufen. Aber ",e.jsx("code",{children:"h*"})," ","auszurechnen heisst, das Problem zu lösen. Eine gute Heuristik ist immer ein ",e.jsx("strong",{children:"Kompromiss"})," zwischen «möglichst genau» und «möglichst billig auszurechnen»."]})]})}),e.jsx(x,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Exkurs: Muss es immer dieselbe Heuristik sein?"}),e.jsxs("p",{children:["Nein. Wir haben bisher ",e.jsx("em",{children:"eine"})," Heuristik gewählt und sie während der ganzen Suche behalten. Man kann aber auch mehrere gleichzeitig benutzen:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Maximum:"})," ",e.jsx("code",{children:"h(n) = max(h₁(n), h₂(n))"}),". Sind beide zulässig (bzw. konsistent), ist das Maximum es auch — und es dominiert beide. Für A",e.jsx("sup",{children:"*"})," der sichere Weg."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Summe:"})," ",e.jsx("code",{children:"h₁(n) + h₂(n)"})," ist grösser, aber in der Regel ",e.jsx("em",{children:"nicht mehr zulässig"})," — die Optimalität ist weg."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Abwechseln:"})," pro Heuristik eine eigene Grenze führen und reihum einmal aus der einen, einmal aus der anderen expandieren («alternation»)."]})]}),e.jsxs("p",{children:["Genau das letzte untersuchen Gabriele Röger und Malte Helmert in"," ",e.jsx("a",{href:"https://ai.dmi.unibas.ch/papers/roeger-helmert-icaps2010.pdf",target:"_blank",rel:"noreferrer",children:e.jsx("em",{children:"The More, the Merrier: Combining Heuristic Estimators for Satisficing Planning"})})," ","(ICAPS 2010). Ihr Befund: Wenn man nur ",e.jsx("strong",{children:"irgendeine"})," ","Lösung schnell will («satisficing»), ist das Abwechseln zwischen den Heuristiken deutlich besser, als sie zu einem einzigen Wert zu verrechnen. Der Grund ist anschaulich: Jede Heuristik hat ihre eigenen blinden Flecken («Plateaus»), in denen sie die Suche in die Irre führt. Steckt die eine fest, zieht die andere die Suche wieder heraus."]}),e.jsxs("p",{children:["Wichtig für uns: Das gilt für die Suche ",e.jsx("em",{children:"ohne"})," ","Optimalitätsgarantie. Sobald wir wie bei A",e.jsx("sup",{children:"*"})," den"," ",e.jsx("strong",{children:"kürzesten"})," Weg garantieren wollen, bleibt es beim Maximum zulässiger Heuristiken. Die Regel «je grösser, desto besser» gilt also nur innerhalb der zulässigen Heuristiken — und «eine Heuristik pro Suche» ist eine Vereinfachung, keine Notwendigkeit."]})]})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsxs("h2",{children:["A",e.jsx("sup",{children:"*"})," gegen Greedy"]}),e.jsxs("p",{children:["Beide benutzen dieselbe Heuristik, beide benutzen eine Prioritätswarteschlange. Der ganze Unterschied ist das"," ",e.jsx("code",{children:"g"})," in der Formel — und er ist riesig:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Greedy"})," expandiert oft weniger Knoten, liefert aber lange, krumme Wege. Er ist nicht optimal."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"})]})," ","expandiert mehr Knoten, findet mit einer zulässigen Heuristik aber garantiert den kürzesten Weg. Mehr noch: Kein optimaler Algorithmus, der dieselbe Heuristik benutzt, expandiert weniger Knoten — A",e.jsx("sup",{children:"*"})," ist in diesem Sinn optimal effizient."]}),e.jsxs("li",{children:["Beide haben dasselbe Problem wie BFS: Sie behalten die ganze Grenze im Speicher. Bei grossen Problemen geht zuerst der"," ",e.jsx("strong",{children:"Speicher"})," aus, nicht die Zeit."]})]})]})}),e.jsx(us,{rows:[{name:"Breitensuche",kurz:"BFS",frontier:"Warteschlange",pick:"ältester Knoten",vollstaendig:{wert:"ja"},optimal:{wert:"teils",text:"nur bei gleichen Kosten"},speicher:{wert:"schlecht"}},{name:"Kostensuche",kurz:"UCS / Dijkstra",frontier:"Prioritätswarteschlange",pick:"kleinstes g",vollstaendig:{wert:"ja"},optimal:{wert:"ja"},speicher:{wert:"schlecht"}},{name:"Greedy Best-First",kurz:"GBFS",frontier:"Prioritätswarteschlange",pick:"kleinstes h",vollstaendig:{wert:"teils",text:"mit Besucht-Menge"},optimal:{wert:"nein"},speicher:{wert:"mittel"}},{name:"A*",kurz:"f = g + h",frontier:"Prioritätswarteschlange",pick:"kleinstes f",vollstaendig:{wert:"ja"},optimal:{wert:"teils",text:"wenn h zulässig ist"},speicher:{wert:"schlecht"}}],caption:"Greedy ist schnell, A* ist richtig. Mit h = 0 wird A* wieder zu UCS."}),e.jsx("div",{className:"breakout",children:e.jsx(ve,{strategies:["astar","greedy","ucs","bfs","dfs","ids"],start:[0,8,2,5,7,3,1,4,6],title:"Alle sechs auf derselben Stellung — achten Sie auf Weglänge UND expandierte Knoten"})}),e.jsx(x,{children:e.jsxs("section",{children:[e.jsxs("h2",{children:["Wo A",e.jsx("sup",{children:"*"})," überall steckt"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Computerspiele:"})," Jede Einheit, die auf einem Raster um Hindernisse läuft, benutzt A",e.jsx("sup",{children:"*"})," — Heuristik ist meist die Manhattan- oder Luftliniendistanz."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Roboter:"})," Pfadplanung auf einer Karte, oft mit Varianten wie D",e.jsx("sup",{children:"*"}),", die auf Änderungen reagieren können."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Routenplaner:"})," A",e.jsx("sup",{children:"*"})," mit Luftlinie ist der Einstieg. Für ganz Europa reicht das nicht — dort kommen hierarchische Verfahren dazu. Genau das schauen wir nächste Woche an."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Planung und Logistik:"})," Reihenfolge von Arbeitsschritten, Packprobleme, Rätsel aller Art."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Nächste Woche:"})," kürzeste Pfade in echten Netzen. Wir schauen uns ",e.jsx("strong",{children:"Dijkstra"})," am Beispiel des Routenplanens an — das ist unser UCS, nur ohne Heuristik und auf einem Graphen, den wir wirklich haben. Und wir lesen nach, mit welchen Tricks ein Dienst wie Google Maps daraus eine Antwort in Millisekunden macht."]})]})}),e.jsx(en,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Ich kann erklären, was eine Heuristik ",e.jsx("code",{children:"h(state)"})," ist und wie man sie durch Relaxation eines Problems findet."]}),e.jsx("li",{children:"Ich kann die Manhattan-Distanz und die Anzahl falscher Plätze für eine gegebene Stellung von Hand ausrechnen."}),e.jsxs("li",{children:["Ich kann ",e.jsx("code",{children:"g"}),", ",e.jsx("code",{children:"h"})," und ",e.jsx("code",{children:"f = g + h"})," ","für einen Knoten bestimmen und erklären, was jede Zahl bedeutet."]}),e.jsxs("li",{children:["Ich kann A",e.jsx("sup",{children:"*"})," von Hand ausführen und dabei die Grenze nach"," ",e.jsx("code",{children:"f"})," sortiert nachführen."]}),e.jsxs("li",{children:["Ich kann den Unterschied zwischen Greedy Best-First und A",e.jsx("sup",{children:"*"})," erklären und an einem Beispiel zeigen, warum Greedy nicht optimal ist."]}),e.jsxs("li",{children:["Ich kann erklären, was eine zulässige und was eine konsistente Heuristik ist, und warum A",e.jsx("sup",{children:"*"})," nur mit einer zulässigen Heuristik den kürzesten Weg findet."]}),e.jsx("li",{children:"Ich kann begründen, warum von zwei zulässigen Heuristiken die grössere die bessere ist (Dominanz)."}),e.jsxs("li",{children:["Ich kann A",e.jsx("sup",{children:"*"})," und Greedy Best-First in bestehenden Code einbauen und ihre Statistiken vergleichen und interpretieren."]})]})})]})}const Od=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"}));function qa(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Aufgaben: Heuristiken von Hand"}),e.jsxs("p",{children:["In diesem Kapitel arbeiten Sie wieder ",e.jsx("strong",{children:"ohne Computer"}),". Sie rechnen Heuristiken aus, führen A",e.jsx("sup",{children:"*"})," und Greedy Best-First von Hand aus und prüfen die Eigenschaften, die wir in der Theorie behauptet haben."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Material:"})," Papier (A4 quer für die Tabellen), ein Bleistift, ein Radiergummi. Für das Schiebepuzzle helfen wieder acht beschriftete Zettel."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Das Ziel:"})," Am Ende sollen Sie nicht nur wissen, dass A",e.jsx("sup",{children:"*"})," den kürzesten Weg findet, sondern an Ihrem eigenen Blatt zeigen können, ",e.jsx("em",{children:"warum"})," — und wo Greedy danebengreift."]}),e.jsx("p",{children:"Zielstellung ist wie immer:"}),e.jsx("pre",{children:e.jsx("code",{children:`1  2  3
4  5  6
7  8  ·`})})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 1 — Schätzen lernen"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: h₁ und h₂ ausrechnen"}),e.jsxs("p",{children:["Rechnen Sie für die vier Stellungen beide Heuristiken aus:"," ",e.jsxs("strong",{children:["h",e.jsx("sub",{children:"1"})]})," ","= Anzahl Steine am falschen Platz (das leere Feld zählt"," ",e.jsx("em",{children:"nicht"})," mit),"," ",e.jsxs("strong",{children:["h",e.jsx("sub",{children:"2"})]})," ","= Manhattan-Distanz."]}),e.jsx("pre",{children:e.jsx("code",{children:`Stellung A        Stellung B        Stellung C        Stellung D
·  1  3           2  8  3           1  8  2           3  5  6
4  2  5           1  ·  5           5  ·  3           1  7  2
7  8  6           4  7  6           4  6  7           4  8  ·`})}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schreiben Sie bei h",e.jsx("sub",{children:"2"})," für jeden Stein einzeln auf, wie weit er von seinem Zielplatz entfernt ist, und bilden Sie erst dann die Summe. Diese Zwischenrechnung brauchen Sie später."]}),e.jsx("li",{children:"Füllen Sie die Tabelle aus."}),e.jsxs("li",{children:["Bei welcher Stellung sind h",e.jsx("sub",{children:"1"})," und h",e.jsx("sub",{children:"2"})," gleich? Woran liegt das?"]})]}),e.jsx(le,{headers:["Stellung","h₁ (falsche Plätze)","h₂ (Manhattan)"],rows:[["A","…","…"],["B","…","…"],["C","…","…"],["D","…","…"]],caption:"Kontrolle: Bei A ist h₁ = h₂ = 4."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: h gegen die Wahrheit"}),e.jsxs("p",{children:["Die tatsächlichen kürzesten Wege sind: A = 4 Züge, B = 8 Züge, C = 12 Züge, D = 14 Züge. Diese Zahl nennen wir"," ",e.jsxs("strong",{children:["h",e.jsx("sup",{children:"*"})]})," ","— den echten Restweg."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Tragen Sie h",e.jsx("sup",{children:"*"})," neben Ihre Werte aus Aufgabe 1. Wie gross ist der Fehler ",e.jsx("code",{children:"h* − h"})," jeweils?"]}),e.jsxs("li",{children:["Schätzen beide Heuristiken immer ",e.jsx("em",{children:"zu wenig"})," oder gibt es eine Stellung, bei der eine zu viel schätzt?"]}),e.jsxs("li",{children:["Welche der beiden Heuristiken liegt durchgehend näher an der Wahrheit? Formulieren Sie Ihre Beobachtung als Satz, der für"," ",e.jsx("em",{children:"alle"})," Stellungen gilt."]}),e.jsxs("li",{children:["Wie gross wäre der Fehler einer Heuristik, die immer"," ",e.jsx("code",{children:"0"})," liefert? Welcher Algorithmus entsteht aus A",e.jsx("sup",{children:"*"}),", wenn man sie benutzt?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Zulässigkeit begründen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Begründen Sie in zwei bis drei Sätzen, warum h",e.jsx("sub",{children:"1"})," ",e.jsx("strong",{children:"zulässig"})," ist. Tipp: Überlegen Sie, wie viele Steine ein einzelner Zug höchstens an ihren Platz bringen kann."]}),e.jsxs("li",{children:["Begründen Sie dasselbe für h",e.jsx("sub",{children:"2"}),". Um wie viel kann ein einzelner Zug die Manhattan-Summe höchstens verkleinern?"]}),e.jsxs("li",{children:["Jemand schlägt vor:"," ",e.jsxs("code",{children:["h",e.jsx("sub",{children:"3"})," = 3 · h",e.jsx("sub",{children:"2"})]}),". Prüfen Sie an Stellung A nach, ob h",e.jsx("sub",{children:"3"})," zulässig ist."]}),e.jsxs("li",{children:["Jemand schlägt vor:"," ",e.jsxs("code",{children:["h",e.jsx("sub",{children:"4"})," = h",e.jsx("sub",{children:"1"})," + h",e.jsx("sub",{children:"2"})]}),". Ist das zulässig? Finden Sie eine Stellung, die Ihre Antwort belegt (Stellung B hilft)."]}),e.jsxs("li",{children:["Welche der vier Heuristiken dürfen wir für A",e.jsx("sup",{children:"*"})," benutzen, wenn wir den kürzesten Weg garantiert finden wollen?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Konsistenz an einer Kante prüfen"}),e.jsxs("p",{children:["Konsistent heisst: ",e.jsx("code",{children:"h(n) ≤ cost(n, n′) + h(n′)"}),". Beim Puzzle ist ",e.jsx("code",{children:"cost"})," immer 1, die Bedingung lautet also:"," ",e.jsx("code",{children:"h(n) − h(n′) ≤ 1"})," für jeden Zug."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schreiben Sie alle Nachfolger von Stellung B auf (es sind vier) und rechnen Sie für jeden h",e.jsx("sub",{children:"2"})," aus."]}),e.jsx("li",{children:"Prüfen Sie für jede der vier Kanten, ob die Bedingung erfüllt ist."}),e.jsx("li",{children:"Kann die Manhattan-Distanz bei einem Zug je um 2 fallen? Begründen Sie mit der Definition."}),e.jsxs("li",{children:["Prüfen Sie dieselben vier Kanten für h",e.jsx("sub",{children:"3"})," = 3 · h",e.jsx("sub",{children:"2"}),". Was fällt auf?"]})]})]})]}),e.jsxs(A,{children:[e.jsxs("h2",{children:["Teil 2 — A",e.jsx("sup",{children:"*"})," von Hand"]}),e.jsxs("p",{children:["Jetzt führen Sie den Algorithmus selbst aus. Sie führen dabei zwei Listen, genau wie letzte Woche: die ",e.jsx("strong",{children:"Grenze"})," (hier sortiert nach ",e.jsx("code",{children:"f"}),") und die Menge ",e.jsx("strong",{children:"Besucht"}),"."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsxs("h4",{children:["Aufgabe 5: A",e.jsx("sup",{children:"*"})," auf Stellung A"]}),e.jsxs("p",{children:["Führen Sie A",e.jsx("sup",{children:"*"})," mit h",e.jsx("sub",{children:"2"})," auf Stellung A aus. Notieren Sie jeden Schleifendurchlauf in einer Zeile:"]}),e.jsx(le,{headers:["Schritt","herausgenommen (g | h | f)","neue Nachfolger (g | h | f)","Grenze danach, nach f sortiert"],rows:[["1","START 0 | 4 | 4","…","…"],["2","…","…","…"],["3","…","…","…"],["…","…","…","…"]],caption:"Bei Gleichstand von f nehmen Sie den Knoten mit dem kleineren h zuerst."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Wie viele Knoten haben Sie expandiert, bis Sie das Ziel herausgenommen haben?"}),e.jsxs("li",{children:["Wie lang ist der gefundene Weg? Stimmt er mit h",e.jsx("sup",{children:"*"})," = 4 überein?"]}),e.jsxs("li",{children:["Schauen Sie sich die ",e.jsx("code",{children:"f"}),"-Werte der ganzen Spur an. Was fällt Ihnen auf? Formulieren Sie es als Regel."]}),e.jsxs("li",{children:["Was bedeutet es, wenn ",e.jsx("code",{children:"f"})," entlang eines Weges"," ",e.jsx("em",{children:"konstant"})," bleibt? Was sagt das über die Heuristik aus?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsxs("h4",{children:["Aufgabe 6: A",e.jsx("sup",{children:"*"})," auf Stellung B"]}),e.jsxs("p",{children:["Dasselbe mit Stellung B — hier wird es interessanter, weil A",e.jsx("sup",{children:"*"})," zwischendurch die Richtung wechselt."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Führen Sie die Tabelle für die ersten ",e.jsx("strong",{children:"acht"})," ","Schritte. Das genügt; Sie müssen nicht bis zum Ziel rechnen."]}),e.jsxs("li",{children:["Markieren Sie jeden Schritt, bei dem A",e.jsx("sup",{children:"*"})," einen Knoten nimmt, der ",e.jsx("em",{children:"nicht"})," ein Nachfolger des zuletzt expandierten Knotens ist. Was passiert dort anschaulich?"]}),e.jsx("li",{children:"Notieren Sie, wie gross die Grenze nach acht Schritten ist."}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zur Kontrolle:"})," A",e.jsx("sup",{children:"*"})," mit h",e.jsx("sub",{children:"2"})," ","expandiert auf Stellung B insgesamt 10 Knoten und findet einen Weg mit 8 Zügen. Mit h",e.jsx("sub",{children:"1"})," sind es 15 Knoten."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Greedy Best-First auf Stellung B"}),e.jsxs("p",{children:["Jetzt dieselbe Stellung, aber die Grenze wird nur nach"," ",e.jsx("code",{children:"h"})," sortiert — ",e.jsx("code",{children:"g"})," interessiert nicht."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Führen Sie dieselbe Tabelle (ohne die Spalte ",e.jsx("code",{children:"f"}),") für acht Schritte."]}),e.jsx("li",{children:"Vergleichen Sie Schritt für Schritt mit Aufgabe 6: Ab welchem Schritt unterscheiden sich die beiden Algorithmen zum ersten Mal? Warum genau dort?"}),e.jsx("li",{children:"Welcher der beiden hat nach acht Schritten die kleinere Grenze? Welcher ist näher am Ziel?"}),e.jsx("li",{children:"Greedy findet auf Stellung B einen Weg mit 8 Zügen — also den kürzesten. Heisst das, Greedy ist optimal? Begründen Sie sorgfältig."})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Greedy in die Falle locken"}),e.jsx("p",{children:"Greedy ist nicht optimal — das soll man sehen können. Konstruieren Sie ein kleines Beispiel von Hand, bei dem Greedy danebenliegt."}),e.jsxs("p",{children:["Nehmen Sie dazu einen einfachen Landkarten-Graphen: Knoten S (Start) und Z (Ziel), dazu A und B. Sie dürfen die Kantenkosten und die"," ",e.jsx("code",{children:"h"}),"-Werte frei wählen, solange ",e.jsx("code",{children:"h"})," zulässig bleibt (also nie grösser als der echte Restweg ist)."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Zeichnen Sie Ihren Graphen mit Kantenkosten und schreiben Sie zu jedem Knoten sein ",e.jsx("code",{children:"h"}),"."]}),e.jsxs("li",{children:["Führen Sie Greedy aus und zeigen Sie, dass er den"," ",e.jsx("strong",{children:"längeren"})," Weg findet."]}),e.jsxs("li",{children:["Führen Sie A",e.jsx("sup",{children:"*"})," auf demselben Graphen aus und zeigen Sie, dass er den kürzeren findet."]}),e.jsx("li",{children:"Erklären Sie in einem Satz, welche Information Greedy fehlt."})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsxs("h4",{children:["Aufgabe 9: A",e.jsx("sup",{children:"*"})," mit einer unzulässigen Heuristik"]}),e.jsxs("p",{children:["Nehmen Sie h",e.jsx("sub",{children:"3"})," = 3 · h",e.jsx("sub",{children:"2"})," und führen Sie A",e.jsx("sup",{children:"*"})," auf Stellung A aus."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Wie viele Knoten expandieren Sie? Wie lang ist der Weg?"}),e.jsx("li",{children:"Vergleichen Sie mit Aufgabe 5. Was hat man gewonnen, was verloren?"}),e.jsxs("li",{children:["Zeichnen Sie auf, an welcher Stelle im Optimalitätsbeweis aus der Theorie das Argument zusammenbricht, wenn ",e.jsx("code",{children:"h"})," ","überschätzt."]}),e.jsxs("li",{children:["In der Praxis benutzt man trotzdem manchmal eine überschätzende Heuristik (man nennt das ",e.jsx("em",{children:"weighted A*"}),"). Nennen Sie eine Situation, in der das sinnvoll sein kann."]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 3 — Vorhersagen für nächste Lektion"}),e.jsxs("p",{children:["Im nächsten Kapitel lassen Sie A",e.jsx("sup",{children:"*"})," und Greedy über zwölf vorbereitete Stellungen laufen. Bevor Sie die Zahlen sehen, legen Sie sich fest."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Wetten, dass …"}),e.jsxs("p",{children:["Schreiben Sie Ihre Vermutungen auf ein Blatt, das Sie in die nächste Lektion mitbringen. Für jede Zeile: Vermutung ",e.jsx("em",{children:"und"})," ","Begründung in einem Satz."]}),e.jsx(le,{headers:["Frage","meine Vermutung","Begründung"],rows:[["Wer expandiert weniger Knoten: A* oder Greedy?","…","…"],["Wer findet die kürzeren Wege?","…","…"],["Um welchen Faktor ist A* mit h₂ sparsamer als mit h₁?","…","…"],["Wie verändert sich der Aufwand, wenn der kürzeste Weg doppelt so lang ist?","…","…"],["Findet Greedy je einen Weg, der mehr als doppelt so lang ist wie nötig?","…","…"]],caption:"Diese Tabelle füllen Sie nächste Lektion mit den echten Messwerten ein."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Eine eigene Heuristik erfinden"}),e.jsx("p",{children:"Suchen Sie sich eines der Probleme aus dem letzten Kapitel aus: Pfannkuchen-Stapel, Wolf/Ziege/Kohl, das Zahlenspiel oder Ihr eigenes Problem."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Welche Regel des Problems würden Sie weglassen, um eine Heuristik zu gewinnen (Relaxation)?"}),e.jsxs("li",{children:["Schreiben Sie ",e.jsx("code",{children:"h(state)"})," in Worten auf — so genau, dass man es programmieren könnte."]}),e.jsx("li",{children:"Rechnen Sie Ihre Heuristik für den Startzustand und für zwei weitere Zustände aus."}),e.jsx("li",{children:"Argumentieren Sie, ob Ihre Heuristik zulässig ist. Wenn Sie es nicht sicher wissen: Was müssten Sie prüfen?"}),e.jsxs("li",{children:["Gibt es eine zweite, ",e.jsx("em",{children:"bessere"})," Heuristik für dasselbe Problem? Dominiert sie Ihre erste?"]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Ihre Blätter mit den ausgefüllten Tabellen der Aufgaben 1–2 und den Begründungen zu 3–4."}),e.jsx("li",{children:"Die vollständigen Spuren zu den Aufgaben 5, 6 und 7 — sauber beschriftet, damit man sie nachvollziehen kann."}),e.jsx("li",{children:"Ihr Gegenbeispiel aus Aufgabe 8 als saubere Zeichnung."}),e.jsx("li",{children:"Das Vorhersage-Blatt aus Aufgabe 10 — bringen Sie es unbedingt in die nächste Lektion mit."})]}),e.jsx("p",{children:"Aufgaben 1–4 schaffen Sie in der ersten Lektion, 5–8 in der zweiten. Aufgabe 9 ist für alle, die schnell sind."})]})]})}const Td=Object.freeze(Object.defineProperty({__proto__:null,default:qa},Symbol.toStringTag,{value:"Module"}));function Qa(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsxs("h2",{children:["Aufgaben: A",e.jsx("sup",{children:"*"})," und Greedy implementieren"]}),e.jsxs("p",{children:["Sie arbeiten im selben Repository wie letzte Woche:"," ",e.jsx("a",{href:"https://github.com/gymmu/graph-search",target:"_blank",rel:"noopener noreferrer",children:"gymmu/graph-search"}),". Diesmal bauen Sie die ",e.jsx("strong",{children:"Heuristiken"})," ein, bringen"," ",e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"})]})," ","und ",e.jsx("strong",{children:"Greedy Best-First"})," zum Laufen und lassen sie anschliessend auf zwölf vorbereitete Stellungen los. Aus den Messwerten erarbeiten Sie den Unterschied der beiden Algorithmen."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Voraussetzung:"})," Ihr Repo aus dem letzten Kapitel mit funktionierendem ",e.jsx("code",{children:"Stack"})," und ",e.jsx("code",{children:"PriorityQueue"}),". Falls ",e.jsx("code",{children:"node index.js puzzle ucs"})," bei Ihnen noch nicht läuft, holen Sie das zuerst nach — ohne Prioritätswarteschlange gibt es kein A",e.jsx("sup",{children:"*"}),"."]}),e.jsxs("p",{children:["Und: Sie brauchen Ihr ",e.jsx("strong",{children:"Vorhersage-Blatt"})," aus Aufgabe 10 des Papier-Kapitels."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Ihre Rolle: Sie sind der Senior-Developer"}),e.jsxs("p",{children:["In diesem Kapitel arbeiten Sie am Computer und dürfen ein"," ",e.jsx("strong",{children:"LLM"})," einsetzen — ChatGPT, Copilot, Claude, was Sie wollen. Aber mit einer klaren Rollenverteilung:"," ",e.jsx("strong",{children:"Sie sind die Senior-Entwicklerin bzw. der Senior-Entwickler, das LLM ist Ihr Junior."})]}),e.jsx("p",{children:"Ein Senior schreibt längst nicht mehr jede Zeile selbst. Er gibt die Aufgabe weiter, bekommt Code zurück — und ist trotzdem dafür verantwortlich, was am Ende im Projekt landet. Genau das üben Sie hier."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Delegieren ist erlaubt."})," Sie müssen den Code nicht alles selber tippen. Beschreiben Sie dem Junior möglichst genau, was die Funktion tun soll — am besten in einem Satz, den Sie sich vorher selbst überlegt haben."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sie müssen den Code verstehen, den Sie einfügen."})," ","Nichts kommt ungelesen ins Repo. Gehen Sie jede eingefügte Zeile durch: Was passiert hier, und warum steht es so da?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kritisch prüfen, ob der Code wirklich das tut, was Sie wollen."})," ","Das geht ",e.jsx("em",{children:"nicht nur"})," über das Ausführen. Ein Programm, das läuft und eine Zahl ausgibt, kann trotzdem falsch sein — eine Heuristik mit Vorzeichenfehler fällt beim Ausführen nicht auf. Sie müssen den Code ",e.jsx("strong",{children:"lesen"})," und mit dem vergleichen, was Sie eigentlich beabsichtigt haben."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Der Junior darf auch beim Verstehen helfen."})," Sie dürfen sich vom LLM erklären lassen, was ein Stück Code tut — das ist ausdrücklich erwünscht. Aber: Diese Erklärung ist eine"," ",e.jsx("em",{children:"Behauptung"}),", kein Beweis. Verifizieren Sie sie, z. B. mit einem kleinen Testfall, einer Handrechnung an einem Beispiel oder indem Sie einen Wert ausgeben lassen und mit Ihrer Erwartung vergleichen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Entscheidungen dokumentieren."})," Legen Sie im Repo eine Datei ",e.jsx("code",{children:"ki-protokoll.md"})," an. Für jede Stelle, an der Sie delegiert haben: Ihr Auftrag an den Junior, was zurückkam, was Sie daran geändert oder verworfen haben und"," ",e.jsx("strong",{children:"wie Sie geprüft haben, dass es stimmt"}),". Auch Fehlversuche — gerade die sind interessant."]})]}),e.jsx("p",{children:"In der Besprechung zeige ich auf eine beliebige Stelle Ihres Codes und Sie erklären, was dort passiert und warum Sie ihm vertrauen. «Das hat die KI so gemacht» ist keine Antwort, die ein Senior geben darf."}),e.jsxs("p",{children:["Der Grund ist einfach: Diese Algorithmen sind so bekannt, dass jedes LLM sie fehlerfrei hinschreibt. Interessant ist nicht mehr das Tippen, sondern ob Sie ",e.jsx("em",{children:"beurteilen"})," können, ob das Ergebnis stimmt."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 1 — Die Heuristiken"}),e.jsxs("div",{className:"aufgabe",children:[e.jsxs("h4",{children:["Aufgabe 1: ",e.jsx("code",{children:"src/heuristics.js"})," fertigstellen"]}),e.jsxs("p",{children:["In der Datei stehen drei Funktionen mit einem ",e.jsx("code",{children:"TODO"}),":"," ",e.jsx("code",{children:"falschePlaetze"}),", ",e.jsx("code",{children:"manhattan"})," und"," ",e.jsx("code",{children:"gap"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"falschePlaetze(state)"}),". Achtung: Das leere Feld (",e.jsx("code",{children:"0"}),") zählt ",e.jsx("em",{children:"nicht"})," mit. Warum eigentlich nicht? Notieren Sie die Antwort als Kommentar über der Funktion."]}),e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"manhattan(state)"}),". Rechnen Sie für jeden Stein Zeilen- und Spaltenabstand zum Zielplatz aus."]}),e.jsx("li",{children:"Prüfen Sie beide an den vier Stellungen aus dem Papier-Kapitel nach. Stimmen die Zahlen mit Ihren Handrechnungen überein? Wenn nicht: Wer hat recht?"}),e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"gap(state)"})," für den Pfannkuchen-Stapel: Zwei benachbarte Pfannkuchen, deren Grössen sich um mehr als 1 unterscheiden, bilden einen «Bruch». Zählen Sie die Brüche."]})]}),e.jsx(Q,{lang:"bash",filename:"terminal",children:`node index.js puzzle astar manhattan
node index.js puzzle astar falschePlaetze
node index.js puzzle greedy manhattan
node index.js pancake astar gap`})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Die Heuristik testen, nicht hoffen"}),e.jsxs("p",{children:["Eine Heuristik mit einem Vorzeichenfehler fällt nicht auf — das Programm läuft einfach weiter und gibt zu lange Wege aus. Schreiben Sie deshalb eine kleine Testdatei ",e.jsx("code",{children:"test-heuristics.js"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Testen Sie: ",e.jsx("code",{children:"h(ZIEL) === 0"})," für beide Puzzle-Heuristiken."]}),e.jsxs("li",{children:["Testen Sie an mindestens fünf Stellungen, dass"," ",e.jsx("code",{children:"manhattan(s) ≥ falschePlaetze(s)"})," gilt. Wie heisst diese Eigenschaft in der Theorie?"]}),e.jsxs("li",{children:["Testen Sie die ",e.jsx("strong",{children:"Konsistenz"}),": Erzeugen Sie für zwanzig zufällige Stellungen alle Nachfolger und prüfen Sie, dass"," ",e.jsx("code",{children:"h(n) − h(n′) ≤ 1"})," gilt. Lassen Sie den Test eine Fehlermeldung ausgeben, wenn er fehlschlägt."]}),e.jsx("li",{children:"Bauen Sie absichtlich einen Fehler ein (z. B. das leere Feld bei Manhattan mitzählen) und prüfen Sie, ob Ihr Test ihn findet. Machen Sie den Fehler danach wieder rückgängig."})]})]})]}),e.jsxs(A,{children:[e.jsxs("h2",{children:["Teil 2 — Greedy und A",e.jsx("sup",{children:"*"})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Die beiden Zeilen lesen"}),e.jsxs("p",{children:["In ",e.jsx("code",{children:"src/search.js"})," stehen am Ende zwei Funktionen. Der ganze Unterschied zwischen den Algorithmen steckt in der Funktion, die der ",e.jsx("code",{children:"PriorityQueue"})," übergeben wird."]}),e.jsx(Q,{lang:"javascript",filename:"src/search.js",children:`export function greedy(problem, h, options) {
  return search(problem, new PriorityQueue((node) => h(node.state)), options);
}

export function astar(problem, h, options) {
  return search(
    problem,
    new PriorityQueue((node) => node.g + h(node.state)),
    options,
  );
}`}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erklären Sie schriftlich, was ",e.jsx("code",{children:"node.g"})," ist und woher der Wert kommt. Suchen Sie die Stelle in ",e.jsx("code",{children:"makeNode"}),"."]}),e.jsxs("li",{children:["Was passiert, wenn Sie A",e.jsx("sup",{children:"*"})," mit"," ",e.jsx("code",{children:"nullHeuristik"})," aufrufen? Probieren Sie es aus und vergleichen Sie die Statistik mit ",e.jsx("code",{children:"ucs"}),". Erklären Sie das Ergebnis."]}),e.jsxs("li",{children:["Ändern Sie testweise die Priorität von A",e.jsx("sup",{children:"*"})," auf"," ",e.jsx("code",{children:"node.g + 3 * h(node.state)"}),". Wie verändern sich Weglänge und expandierte Knoten? Machen Sie die Änderung danach rückgängig."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Gleichstände brechen"}),e.jsxs("p",{children:["Sehr oft haben mehrere Knoten dasselbe ",e.jsx("code",{children:"f"}),". Welchen Ihre"," ",e.jsx("code",{children:"PriorityQueue"})," dann nimmt, ist Zufall — und das kostet messbar."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erweitern Sie Ihre ",e.jsx("code",{children:"PriorityQueue"})," so, dass bei gleichem ",e.jsx("code",{children:"f"})," der Knoten mit dem"," ",e.jsxs("strong",{children:["kleineren ",e.jsx("code",{children:"h"})]})," ","(also dem grösseren ",e.jsx("code",{children:"g"}),") zuerst herauskommt."]}),e.jsxs("li",{children:["Messen Sie vorher und nachher die expandierten Knoten auf der Stellung ",e.jsx("code",{children:"6,2,1,5,8,4,3,7,0"}),". Wie gross ist der Unterschied?"]}),e.jsxs("li",{children:["Erklären Sie, warum dieser Tie-Break hilft. Tipp: Welche Knoten liegen bei A",e.jsx("sup",{children:"*"})," mit gleichem ",e.jsx("code",{children:"f"})," näher am Ziel?"]}),e.jsxs("li",{children:["Bleibt A",e.jsx("sup",{children:"*"})," mit diesem Tie-Break optimal? Begründen Sie."]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 3 — Das Experiment"}),e.jsxs("p",{children:["Einzelne Aufrufe auf der Kommandozeile sagen wenig. Jetzt bauen Sie sich eine kleine ",e.jsx("strong",{children:"Messreihe"}),": dieselben zwölf Stellungen, vier Verfahren, eine Tabelle."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Die Testfälle anlegen"}),e.jsxs("p",{children:["Legen Sie die Datei ",e.jsx("code",{children:"src/instanzen.js"})," an. Die zwölf Stellungen sind so erzeugt worden, dass ihr kürzester Weg bekannt ist — damit können Sie jede Lösung überprüfen."]}),e.jsx(Q,{lang:"javascript",filename:"src/instanzen.js",children:`// Zwölf Schiebepuzzle-Stellungen mit bekanntem kürzestem Weg.
// "opt" ist die Länge der optimalen Lösung in Zügen.
export const INSTANZEN = [
  { name: "I01", start: [0, 1, 3, 4, 2, 5, 7, 8, 6], opt: 4 },
  { name: "I02", start: [2, 8, 3, 1, 0, 5, 4, 7, 6], opt: 8 },
  { name: "I03", start: [5, 1, 0, 2, 6, 3, 4, 7, 8], opt: 10 },
  { name: "I04", start: [1, 8, 2, 5, 0, 3, 4, 6, 7], opt: 12 },
  { name: "I05", start: [3, 5, 6, 1, 7, 2, 4, 8, 0], opt: 14 },
  { name: "I06", start: [2, 3, 6, 7, 0, 1, 4, 5, 8], opt: 16 },
  { name: "I07", start: [4, 3, 8, 7, 1, 5, 0, 6, 2], opt: 18 },
  { name: "I08", start: [3, 1, 2, 4, 0, 5, 6, 7, 8], opt: 20 },
  { name: "I09", start: [5, 4, 1, 8, 0, 7, 6, 2, 3], opt: 22 },
  { name: "I10", start: [1, 5, 6, 8, 3, 2, 0, 7, 4], opt: 24 },
  { name: "I11", start: [8, 7, 1, 2, 0, 4, 3, 5, 6], opt: 26 },
  { name: "I12", start: [6, 2, 1, 5, 8, 4, 3, 7, 0], opt: 28 },
];`}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Lösen Sie ",e.jsx("code",{children:"I01"})," und ",e.jsx("code",{children:"I02"})," zuerst von Hand oder mit ",e.jsx("code",{children:"bfs"})," und prüfen Sie, dass die Angabe"," ",e.jsx("code",{children:"opt"})," stimmt."]}),e.jsxs("li",{children:["Rechnen Sie für alle zwölf Stellungen"," ",e.jsx("code",{children:"manhattan(start)"})," aus und vergleichen Sie mit"," ",e.jsx("code",{children:"opt"}),". Ist die Heuristik je grösser als der echte Weg? Was hiesse das?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Das Messprogramm"}),e.jsxs("p",{children:["Schreiben Sie ",e.jsx("code",{children:"bench.js"})," im Wurzelverzeichnis. Hier dürfen Sie delegieren — aber das Gerüst und die Spalten geben Sie als Senior vor, und jede Zeile, die zurückkommt, lesen Sie durch, bevor sie ins Repo kommt."]}),e.jsx(Q,{lang:"javascript",filename:"bench.js",children:`import { INSTANZEN } from "./src/instanzen.js";
import { SlidingPuzzle } from "./src/problems/sliding-puzzle.js";
import { bfs, astar, greedy } from "./src/search.js";
import { falschePlaetze, manhattan } from "./src/heuristics.js";

const VERFAHREN = [
  { label: "astar+manhattan", lauf: (p) => astar(p, manhattan) },
  { label: "astar+falsche",   lauf: (p) => astar(p, falschePlaetze) },
  { label: "greedy+manhattan", lauf: (p) => greedy(p, manhattan) },
  { label: "greedy+falsche",  lauf: (p) => greedy(p, falschePlaetze) },
  // { label: "bfs", lauf: (p) => bfs(p) },   // Achtung: ab I08 sehr langsam
];

const zeilen = [];
for (const inst of INSTANZEN) {
  for (const v of VERFAHREN) {
    const problem = new SlidingPuzzle(inst.start);
    const t0 = performance.now();
    const r = v.lauf(problem);
    const ms = Math.round(performance.now() - t0);

    zeilen.push({
      instanz: inst.name,
      verfahren: v.label,
      opt: inst.opt,
      laenge: r.path.length - 1,
      optimal: r.path.length - 1 === inst.opt ? "ja" : "NEIN",
      expandiert: r.expanded,
      erzeugt: r.generated,
      maxGrenze: r.maxFrontier,
      ms,
    });
  }
}

console.table(zeilen);

// TODO: zusätzlich als CSV ausgeben, damit Sie es in eine
// Tabellenkalkulation laden und ein Diagramm zeichnen können.`}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Bringen Sie ",e.jsx("code",{children:"bench.js"})," zum Laufen:"," ",e.jsx("code",{children:"node bench.js"}),"."]}),e.jsxs("li",{children:["Ergänzen Sie die CSV-Ausgabe (eine Zeile pro Messung, Spalten mit"," ",e.jsx("code",{children:";"})," getrennt) und schreiben Sie sie in eine Datei"," ",e.jsx("code",{children:"messungen.csv"}),"."]}),e.jsxs("li",{children:["Ergänzen Sie eine Spalte ",e.jsx("code",{children:"ueberschuss"}),": um wie viele Züge ist der gefundene Weg länger als ",e.jsx("code",{children:"opt"}),"?"]}),e.jsxs("li",{children:["Lassen Sie BFS zusätzlich mitlaufen, aber nur für ",e.jsx("code",{children:"I01"})," ","bis ",e.jsx("code",{children:"I07"}),". Begründen Sie im Kommentar, warum Sie es bei den grossen Instanzen weglassen."]})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Teil 4 — Auswertung"}),e.jsxs("p",{children:["Jetzt kommt der eigentliche Teil dieses Kapitels. Messen kann die Maschine — ",e.jsx("strong",{children:"interpretieren"})," müssen Sie."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Die Haupttabelle"}),e.jsxs("p",{children:["Übertragen Sie Ihre Messwerte in ",e.jsx("code",{children:"antworten.md"}),". Eine Zeile pro Instanz:"]}),e.jsx(le,{headers:["Instanz","opt","A*+man: Länge / expandiert","A*+falsche: Länge / expandiert","Greedy+man: Länge / expandiert","Greedy+falsche: Länge / expandiert"],rows:[["I01","4","…","…","…","…"],["I04","12","…","…","…","…"],["I08","20","…","…","…","…"],["I12","28","…","…","…","…"],["…","…","…","…","…","…"]],caption:"Zur Kontrolle: Auf I12 expandiert A*+Manhattan rund 7'800 Knoten, A*+falsche Plätze rund 72'000."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Holen Sie Ihr Vorhersage-Blatt hervor. Welche Ihrer Vermutungen haben sich bestätigt, welche nicht?"}),e.jsxs("li",{children:["Bei wie vielen Instanzen hat Greedy den kürzesten Weg gefunden? Bei wie vielen A",e.jsx("sup",{children:"*"}),"?"]}),e.jsx("li",{children:"Suchen Sie die Instanz, bei der Greedy am schlechtesten abschneidet. Wie viel länger ist sein Weg?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Dominanz messen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Bilden Sie für jede Instanz den Quotienten"," ",e.jsx("code",{children:"expandiert(A*+falsche) / expandiert(A*+manhattan)"}),"."]}),e.jsxs("li",{children:["Zeichnen Sie ein Diagramm: x-Achse ",e.jsx("code",{children:"opt"}),", y-Achse expandierte Knoten, eine Kurve pro Verfahren. Nehmen Sie für die y-Achse eine ",e.jsx("strong",{children:"logarithmische"})," Skala und erklären Sie, warum das hier nötig ist."]}),e.jsxs("li",{children:["Wie verhält sich der Aufwand, wenn ",e.jsx("code",{children:"opt"})," um 2 wächst? Ungefähr konstant, linear oder multiplikativ? Lesen Sie es am Diagramm ab."]}),e.jsxs("li",{children:["Formulieren Sie die Dominanz von h",e.jsx("sub",{children:"2"})," über h",e.jsx("sub",{children:"1"})," ","anhand Ihrer Zahlen in zwei Sätzen — einmal in Formelsprache, einmal für eine Mitschülerin, die den Unterricht verpasst hat."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsxs("h4",{children:["Aufgabe 9: Greedy gegen A",e.jsx("sup",{children:"*"})," — der Handel"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Vergleichen Sie für die grossen Instanzen (I09–I12) die expandierten Knoten von Greedy und A",e.jsx("sup",{children:"*"}),". Wer ist sparsamer, und um welchen Faktor?"]}),e.jsx("li",{children:"Vergleichen Sie jetzt die Weglängen. Formulieren Sie den Handel, den man mit Greedy eingeht, in einem Satz."}),e.jsxs("li",{children:["Nennen Sie zwei konkrete Anwendungen: eine, bei der Greedy völlig genügt, und eine, bei der man unbedingt A",e.jsx("sup",{children:"*"})," braucht. Begründen Sie beide."]}),e.jsxs("li",{children:["Interessanterweise expandiert Greedy nicht immer weniger als A",e.jsx("sup",{children:"*"})," — suchen Sie in Ihren Messwerten eine Instanz, bei der Greedy ",e.jsx("em",{children:"mehr"})," expandiert. Woran kann das liegen?"]}),e.jsxs("li",{children:["Überlegen Sie sich ein Verfahren «dazwischen»:"," ",e.jsx("code",{children:"f = g + w · h"})," mit ",e.jsx("code",{children:"w = 2"}),". Messen Sie es für drei Instanzen. Wo liegt es in Bezug auf Aufwand und Weglänge?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Speicher statt Zeit"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schauen Sie sich die Spalte ",e.jsx("code",{children:"maxGrenze"})," an. Wie gross wird die Grenze bei A",e.jsx("sup",{children:"*"})," auf I12? Wie gross bei BFS auf I07?"]}),e.jsxs("li",{children:["Schätzen Sie ab: Wie viel Arbeitsspeicher bräuchte BFS für eine Stellung mit ",e.jsx("code",{children:"opt = 28"}),"? Rechnen Sie grob mit 100 Byte pro Knoten."]}),e.jsx("li",{children:"Was würde passieren, wenn wir ein 4×4-Puzzle (15-Puzzle) lösen wollten? Recherchieren Sie die Anzahl erreichbarer Zustände und überlegen Sie, welcher der Algorithmen überhaupt noch eine Chance hat."}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zusatz:"})," Suchen Sie, was ",e.jsx("strong",{children:"IDA*"})," ","macht, und erklären Sie in drei Sätzen, welches Problem es löst."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Ein zweites Problem"}),e.jsx("p",{children:"Alles, was Sie gemessen haben, gilt bisher für ein einziges Problem."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Lassen Sie A",e.jsx("sup",{children:"*"})," mit ",e.jsx("code",{children:"gap"})," und Greedy mit"," ",e.jsx("code",{children:"gap"})," auf mindestens fünf Pfannkuchen-Stapel los (verschiedene Grössen)."]}),e.jsxs("li",{children:["Vergleichen Sie mit ",e.jsx("code",{children:"bfs"}),": Wie viel bringt die Heuristik hier?"]}),e.jsxs("li",{children:["Ist ",e.jsx("code",{children:"gap"})," zulässig? Überlegen Sie, wie viele Brüche ein einzelner Wende-Zug beseitigen kann."]}),e.jsx("li",{children:"Bleiben Ihre Schlussfolgerungen aus Aufgabe 9 auch hier gültig?"})]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ihr Repo mit fertiger ",e.jsx("code",{children:"src/heuristics.js"}),","," ",e.jsx("code",{children:"src/instanzen.js"}),", ",e.jsx("code",{children:"bench.js"})," und"," ",e.jsx("code",{children:"test-heuristics.js"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"messungen.csv"})," mit Ihrer vollständigen Messreihe."]}),e.jsxs("li",{children:[e.jsx("code",{children:"antworten.md"})," mit den Tabellen und den schriftlichen Antworten zu den Aufgaben 7–11, inklusive Diagramm (als Bild im Repo)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ki-protokoll.md"})," mit Ihren Aufträgen an den Junior, was Sie daran geändert und wie Sie es geprüft haben."]})]}),e.jsx("p",{children:"Teil 1 und 2 schaffen Sie in der ersten Lektion, Teil 3 und 4 in der zweiten."})]})]})}const Id=Object.freeze(Object.defineProperty({__proto__:null,default:Qa},Symbol.toStringTag,{value:"Module"}));function Xa(){return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx("h2",{children:"Hausaufgaben: Paper vorbereiten"}),e.jsxs("p",{children:["Nächste Woche lesen wir ein ",e.jsx("strong",{children:"wissenschaftliches Paper"})," ","— gemeinsam, in der Unterrichtszeit. Damit das funktioniert, müssen Sie es vorher einmal ",e.jsx("strong",{children:"überflogen"})," haben."]}),e.jsx("p",{children:e.jsx("strong",{children:"Hannah Bast, Daniel Delling, Andrew Goldberg, Matthias Müller-Hannemann, Thomas Pajor, Peter Sanders, Dorothea Wagner, Renato Werneck: «Route Planning in Transportation Networks» (2015)."})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://arxiv.org/abs/1504.05140",target:"_blank",rel:"noopener noreferrer",children:"arxiv.org/abs/1504.05140"})," ","(Übersicht)"]}),e.jsx("li",{children:e.jsx("a",{href:"https://arxiv.org/pdf/1504.05140",target:"_blank",rel:"noopener noreferrer",children:"Direkt zum PDF"})})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Auftrag:"})," das Paper überfliegen und sich Notizen machen — Gliederung, fünf Fachbegriffe, drei Fragen. Rechnen Sie mit"," ",e.jsx("strong",{children:"mindestens 30 und höchstens 60 Minuten"}),". Fällig ist das ",e.jsx("strong",{children:"auf die erste Lektion"})," nächste Woche, nicht später: Wir haben alle drei Lektionen am Stück."]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"Die Hausaufgabe"}),e.jsxs("p",{children:["Das Paper ist 60 Seiten lang — das lesen Sie ",e.jsx("strong",{children:"nicht"})," zu Hause. ",e.jsx("strong",{children:"Überfliegen"})," heisst: durchblättern, Überschriften lesen, Abbildungen und Tabellen anschauen, Abstract lesen, hängenbleiben wo es interessant aussieht. Sie müssen nichts verstanden haben — Sie sollen nur wissen, was auf Sie zukommt."]}),e.jsxs("p",{children:["Nach spätestens ",e.jsx("strong",{children:"60 Minuten"})," hören Sie auf, auch wenn Sie noch nicht durch sind. Notieren Sie dann, wie weit Sie gekommen sind."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe: Das Paper überfliegen (30–60 Minuten)"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"(ca. 10 Min.)"})," Lesen Sie den"," ",e.jsx("strong",{children:"Abstract"})," und die"," ",e.jsx("strong",{children:"Einleitung (Abschnitt 1)"})," ganz."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"(ca. 10 Min.)"})," Blättern Sie durch das ganze Paper und notieren Sie die ",e.jsx("strong",{children:"Gliederung"}),": Welche Hauptabschnitte gibt es, und worum geht es dort grob? Ein Stichwort pro Abschnitt genügt."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"(ca. 5 Min.)"})," Suchen Sie ",e.jsx("strong",{children:"Figure 7"})," ","in Abschnitt 3. Notieren Sie, was dort überhaupt verglichen wird."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"(ca. 5 Min.)"})," Notieren Sie"," ",e.jsx("strong",{children:"fünf englische Fachbegriffe"}),", die Ihnen beim Durchblättern immer wieder begegnen (z. B. ",e.jsx("em",{children:"query"}),","," ",e.jsx("em",{children:"preprocessing"}),", ",e.jsx("em",{children:"shortcut"}),", …)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"(ca. 5 Min.)"})," Notieren Sie"," ",e.jsx("strong",{children:"drei Fragen"})," oder drei Stellen, die Sie nicht verstanden haben. Genau diese Fragen nehmen wir in der dritten Lektion wieder auf."]})]}),e.jsx("p",{children:"Bleibt Zeit übrig: Blättern Sie weiter und notieren Sie, welche Abbildung Sie am meisten interessiert."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Was nicht Hausaufgabe ist"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Das Paper gründlich oder vollständig lesen."}),e.jsx("li",{children:"Alle unbekannten Begriffe nachschlagen."}),e.jsx("li",{children:"Die Verfahren verstehen."}),e.jsx("li",{children:"Sich das Paper von einem LLM zusammenfassen lassen — damit arbeiten wir in der dritten Lektion, und zwar bewusst und kontrolliert."})]}),e.jsx("p",{children:"Das alles machen wir gemeinsam im Unterricht."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Format der Notizen"}),e.jsxs("p",{children:["Papier oder eine Datei ",e.jsx("code",{children:"paper-notizen.md"})," in Ihrem Repo — Sie entscheiden. Hauptsache, Sie haben sie nächste Woche dabei und können damit arbeiten. Stichworte genügen, ganze Sätze sind nicht nötig."]})]})]}),e.jsxs(A,{children:[e.jsx("h2",{children:"So läuft nächste Woche ab"}),e.jsxs("p",{children:["Wir haben die ",e.jsx("strong",{children:"drei Lektionen am Stück"}),". Dazwischen gibt es also keine Hausaufgaben mehr — alles, was Sie vorbereiten müssen, steht oben und muss vorher erledigt sein."]}),e.jsx(le,{headers:["Lektion","Was wir tun","Ziel"],rows:[["1","Grundkonzepte aus dem Paper kurz und oberflächlich in der Theorie anschauen: Dijkstra im Strassennetz, bidirektionale Suche, Hierarchie und Shortcuts","Sie kennen die Ideen, bevor Sie sie auf Englisch lesen"],["2","Das Paper im Detail lesen — in Ruhe, mit Zeit, Abschnitt für Abschnitt","Sie können einen Fachtext lesen, ohne jedes Wort zu verstehen"],["3","Fragen an das Paper stellen und es in Gruppen diskutieren, mit NotebookLM oder einem ähnlichen Werkzeug","Sie nutzen ein LLM als Lesehilfe — und prüfen, was es behauptet"]],caption:"Lektionsskizze: drei Lektionen am Stück"}),e.jsx("h3",{children:"Lektion 1 — Grundkonzepte vorbereiten"}),e.jsxs("p",{children:["Ein Fachtext ist viel einfacher zu lesen, wenn man die Ideen schon kennt und nur noch die englischen Namen dafür lernen muss. Wir schauen uns deshalb zuerst ",e.jsx("strong",{children:"oberflächlich"})," an, was im Paper vorkommt: Dijkstra als unser UCS, bidirektionale Suche, und die Idee der Hierarchie mit Shortcuts. Nicht in der Tiefe — nur so weit, dass Ihnen die Begriffe beim Lesen nicht fremd sind. Dazu legen wir eine Begriffsliste Englisch ↔ Deutsch an."]}),e.jsx("h3",{children:"Lektion 2 — Das Paper im Detail lesen"}),e.jsxs("p",{children:["Jetzt haben Sie Zeit zum Lesen. Ein Paper liest man nicht wie einen Roman: Sie werden nicht jeden Satz verstehen, und das ist normal. Das Paper hat 65 Seiten — wir lesen davon nur die folgende Auswahl. Diese Abschnitte schauen wir uns ",e.jsx("strong",{children:"im Detail"})," an, alles andere ist für uns höchstens Nachschlagewerk. Die Seitenzahlen beziehen sich auf die PDF-Version von arXiv. Dazu bekommen Sie ein Leseprotokoll mit gezielten Fragen."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"2 Shortest Paths Algorithms (S. 3)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"2.2 Goal-Directed Techniques"})," (S. 5) — davon:"," ",e.jsx("em",{children:"A* Search"})," (S. 5) und ",e.jsx("em",{children:"Arc Flags"})," (S. 6)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"2.4 Hierarchical Techniques"})," (S. 9) — davon:"," ",e.jsx("em",{children:"Contraction Hierarchies"})," (S. 9) und ",e.jsx("em",{children:"Reach"})," (S. 10)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"2.7 Extensions"})," (S. 14) — davon:"," ",e.jsx("em",{children:"2.7.1 Path Retrieval"})," (S. 14) und"," ",e.jsx("em",{children:"2.7.3 Dynamic Networks"})," (S. 16)"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"3 Route Planning in Road Networks"}),e.jsx("ul",{children:e.jsxs("li",{children:["Nur ",e.jsx("strong",{children:"Figure 7"})," — das Diagramm mit dem Vergleich der Verfahren (Vorverarbeitung, Speicher, Antwortzeit)."]})})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"4 Journey Planning in Public Transit Networks (S. 28)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"4.1 Modeling"})," (S. 29) — davon:"," ",e.jsx("em",{children:"Time-Expanded Model"})," (S. 29)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"4.2 Algorithms without Preprocessing"})," (S. 31) — davon: ",e.jsx("em",{children:"Multicriteria Problem"})," (S. 33)"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"5 Multimodal Journey Planning (S. 41)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Overview"})," (S. 42)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"5.1 Combining Costs"})," (S. 42)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"5.2 Label-Constrained Shortest Paths"})," (S. 42) — davon: ",e.jsx("em",{children:"Contraction Hierarchies"})," (S. 44)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"5.3 Multicriteria Optimization"})," (S. 44)"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"6 Final Remarks (S. 45)"}),e.jsx("ul",{children:e.jsx("li",{children:"Ganz lesen — hier steht, was offen geblieben ist."})})]}),e.jsx("h3",{children:"Lektion 3 — Fragen stellen und diskutieren"}),e.jsxs("p",{children:["Sie stellen Ihre Fragen an das Paper — zuerst an"," ",e.jsx("strong",{children:"NotebookLM"})," oder ein ähnliches Werkzeug, dann in der Gruppe. Es gilt die bekannte Rollenverteilung:"," ",e.jsx("strong",{children:"Sie sind der Senior, das LLM ist Ihr Junior."})," Der Junior darf zusammenfassen und erklären — aber was er sagt, ist eine Behauptung. Verifiziert wird im Paper selbst, Stelle für Stelle. Zum Schluss diskutieren wir in Gruppen und tragen die Ergebnisse zusammen."]})]})]})}const Ld=Object.freeze(Object.defineProperty({__proto__:null,default:Xa},Symbol.toStringTag,{value:"Module"}));export{Os as A,Nd as B,Dd as C,Ed as D,Bd as E,Wd as F,_d as G,Fd as H,Pd as I,Zd as J,Kd as K,Md as L,Od as M,Ts as N,Td as O,Id as P,Ld as Q,Is as a,rd as b,td as c,ld as d,cd as e,ad as f,dd as g,hd as h,od as i,id as j,ud as k,xd as l,jd as m,gd as n,md as o,bd as p,fd as q,pd as r,kd as s,Sd as t,sd as u,zd as v,wd as w,vd as x,Ad as y,yd as z};
