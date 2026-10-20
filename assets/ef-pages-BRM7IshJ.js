import{r as S,j as e}from"./react-vendor-BlooTsb4.js";import{J as un,b as o,c as Q,d as fe}from"./gym-pages-eYVK8spt.js";import{l as jn,s as xn,S as j,L as Ue}from"./fms-pages-BfzwCjKh.js";const qe=S.createContext({});function tl(){return S.useContext(qe)}function gn({children:s}){const[n,r]=S.useState(!1),[l,c]=S.useState(!1);return e.jsx(qe.Provider,{value:{fullscreen:n,setFullscreen:r,menuVisible:l,setMenuVisible:c},children:s})}const mn=S.createContext({});function bn({children:s}){const[n,r]=S.useState(!1),[l,c]=S.useState("gym");return S.useEffect(()=>{jn().then(d=>{d!==null&&c(d)})},[]),S.useEffect(()=>{xn(l)},[l]),e.jsx(mn.Provider,{value:{visible:n,setVisible:r,section:l,setSection:c},children:s})}function fn({filename:s,initialCode:n,defaultCode:r}){return e.jsx(un,{filename:s,initialCode:n,defaultCode:r,monacoHeight:"calc(100vh - 300px)",wrapperHeight:"100vh",isFullscreen:!0})}function pn(){return e.jsx(gn,{children:e.jsx(bn,{children:e.jsx(fn,{filename:"editor.js",defaultCode:`// Deine JavaScript-Datei
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
console.log(a + " * " + b + " = " + (a * b));`})})})}const cl=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));function kn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Willkommen zu Programmieren mit JavaScript"}),e.jsx("p",{children:"In diesem Kurs lernst du die Grundlagen der Programmierung mit JavaScript. JavaScript ist eine der beliebtesten Programmiersprachen der Welt und wird verwendet, um interaktive Webseiten zu erstellen, Server zu programmieren, Spiele zu entwickeln und vieles mehr."}),e.jsx("p",{children:"Du wirst Schritt für Schritt die wichtigsten Konzepte der Programmierung kennenlernen – von Variablen über Bedingungen bis hin zu Funktionen und Objekten."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Was ist JavaScript?"}),e.jsxs("p",{children:["JavaScript ist eine ",e.jsx("strong",{children:"Allzweck-Programmiersprache"})," ","(general-purpose programming language). Das bedeutet, dass man damit praktisch alles programmieren kann – von einfachen Berechnungen bis hin zu komplexen Anwendungen. JavaScript wurde 1995 von Brendan Eich in nur 10 Tagen entwickelt und hat sich seitdem zur meistverbreiteten Programmiersprache der Welt entwickelt."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Warum JavaScript?"}),e.jsx("p",{children:"Es gibt viele Programmiersprachen – doch JavaScript hat einige besondere Vorteile:"}),e.jsx("h3",{children:"1. Das Web basiert auf JavaScript"}),e.jsxs("p",{children:["Jede moderne Webseite verwendet JavaScript. Ohne JavaScript wären Webseiten statisch – sie könnten keine Interaktionen verarbeiten, keine Daten nachladen und keine dynamischen Inhalte anzeigen. JavaScript ist die ",e.jsx("em",{children:"einzige"})," Sprache, die direkt im Browser läuft und somit jedes Internetprogramm steuern kann."]}),e.jsx("h3",{children:"2. Browser-Automatisierung"}),e.jsx("p",{children:"Mit JavaScript kann man den Browser automatisieren – zum Beispiel kann man Programme schreiben, die automatisch Webseiten öffnen, Formulare ausfüllen oder Daten von Webseiten sammeln. Das ist nützlich für repetitive Aufgaben oder zum Testen von Webseiten."}),e.jsx("h3",{children:"3. Full-Stack: Frontend und Backend"}),e.jsxs("p",{children:["JavaScript läuft nicht nur im Browser (Frontend), sondern auch auf Servern (Backend). Mit ",e.jsx("strong",{children:"Node.js"})," kann man JavaScript als serverseitige Sprache verwenden. Das bedeutet, du kannst mit derselben Sprache sowohl die Benutzeroberfläche als auch die Server-Logik programmieren."]}),e.jsx("h3",{children:"4. KI-Interaktion"}),e.jsx("p",{children:"JavaScript wird häufig verwendet, um mit KI-Systemen zu interagieren. Man kann damit APIs von KI-Diensten aufrufen, Chatbots bauen, oder sogar lokale KI-Modelle im Browser ausführen. Das macht JavaScript zu einer idealen Sprache für KI-Projekte."}),e.jsx("h3",{children:"5. Unterschiedliche Programmierparadigmen"}),e.jsx("p",{children:"JavaScript unterstützt verschiedene Programmierstile (Paradigmen):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prozedural:"})," Schritt-für-Schritt-Anweisungen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekt-orientiert:"})," Programme als Sammlung von Objekten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktional:"})," Programme als Kombination von Funktionen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ereignisgesteuert:"})," Programme reagieren auf Ereignisse (Klicks, Eingaben, etc.)"]})]})]})]})}const dl=Object.freeze(Object.defineProperty({__proto__:null,default:kn},Symbol.toStringTag,{value:"Module"}));function Sn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"JavaScript-Einstieg: Ein kurzer Überblick"}),e.jsxs("p",{children:["In diesem Kapitel siehst du eine ",e.jsx("strong",{children:"schnelle Übersicht"}),"über die wichtigsten JavaScript-Konzepte. Du wirst viele verschiedene Code-Beispiele anschauen, ausführen und kleine Änderungen ausprobieren."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es geht jetzt nicht darum, jede Syntax im Detail zu verstehen – das lernen wir in den folgenden Kapiteln. Schau dir die Beispiele an, führe sie aus und überlege, was du beobachten kannst. Was passiert, wenn du den Code änderst?"]})]}),e.jsx(j,{children:e.jsx(Ue,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Code mit ",e.jsx("code",{children:"console.log()"})," ausgeben und verstehen"]}),e.jsxs("li",{children:["Variablen mit ",e.jsx("code",{children:"const"})," und ",e.jsx("code",{children:"let"})," verwenden"]}),e.jsx("li",{children:"Einfache Berechnungen mit Operatoren durchführen"}),e.jsxs("li",{children:["Bedingungen mit ",e.jsx("code",{children:"if/else"})," erkennen"]}),e.jsx("li",{children:"Schleifen zum Wiederholen von Code verstehen"}),e.jsx("li",{children:"Arrays als Listen von Werten verwenden"}),e.jsx("li",{children:"Funktionen als wiederverwendbare Code-Blöcke kennenlernen"})]})})}),e.jsxs(j,{children:[e.jsx("h2",{children:"Code direkt ausprobieren"}),e.jsxs("p",{children:["Unten kannst du JavaScript-Code schreiben und direkt ausführen. Klicke auf ",e.jsx("strong",{children:"«Ausführen»"}),", um das Programm zu starten. Die Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig verändern und erneut ausführen!"]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 1: Ausgabe in der Konsole"}),e.jsxs("p",{children:["Der einfachste Einstieg ist ",e.jsx("code",{children:"console.log()"}),". Dieser Befehl gibt Text in der Konsole aus. Probiere aus, wie der Text sich verändert, wenn du die Wörter im Code änderst!"]}),e.jsx(o,{filename:"ausgabe.js",children:`// Text in der Konsole ausgeben
console.log("Hallo zusammen!");
console.log("Willkommen zu JavaScript!");

// Mit + kannst du Texte verbinden
const name = "Lena";
console.log("Hallo " + name + "!");

// Du kannst auch Zahlen ausgeben
console.log("Das Jahr ist 2025.");
console.log(2025);`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 2: Variablen – Werte speichern"}),e.jsxs("p",{children:["Variablen sind wie Behälter, die Werte speichern. Mit"," ",e.jsx("code",{children:"const"})," definieren wir eine Variable, die nicht verändert werden kann. Mit ",e.jsx("code",{children:"let"})," können wir den Wert später ändern. Probiere aus, was passiert, wenn du Zahlen oder Texte änderst!"]}),e.jsx(o,{filename:"variablen.js",children:`// const: Wert kann NICHT geändert werden
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
// schulname = "Andere Schule"; // Fehler!`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 3: Berechnungen"}),e.jsx("p",{children:"Mit JavaScript kannst du einfache und komplexe Berechnungen durchführen. Probiere verschiedene Operatoren aus!"}),e.jsx(o,{filename:"berechnungen.js",children:`// Grundrechenarten
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
console.log("Neuer Preis: " + neupreis + " CHF");`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 4: Bedingungen – Programme steuern"}),e.jsxs("p",{children:["Mit ",e.jsx("code",{children:"if"})," und ",e.jsx("code",{children:"else"})," kannst du Programme unterschiedlich reagieren lassen, je nach Bedingung. Ändere die Werte und überlege, welcher Teil ausgeführt wird!"]}),e.jsx(o,{filename:"bedingungen.js",children:`// Alter prüfen
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
}`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 5: Arrays – Listen von Werten"}),e.jsx("p",{children:"Arrays sind Listen von Werten. Sie ermöglichen es, mehrere Werte in einer Variable zu speichern. Ändere die Einträge und probiere aus!"}),e.jsx(o,{filename:"arrays.js",children:`// Ein Array erstellen
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
console.log(lieblingsessen);`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 6: Funktionen – Code wiederverwenden"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Code-Blöcke. Sie helfen, Code zu organisieren und Duplikate zu vermeiden. Probiere andere Namen und Zahlen aus!"}),e.jsx(o,{filename:"funktionen.js",children:`// Funktion definieren
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
console.log("100 * 2 = " + verdoppeln(100));`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Beispiel 7: Schleifen – Code wiederholen"}),e.jsxs("p",{children:["Schleifen wiederholen Code mehrere Male. Die ",e.jsx("code",{children:"for"}),"-Schleife ist die häufigste Form. Probiere andere Zahlen für die Grenzen aus!"]}),e.jsx(o,{filename:"schleifen.js",children:`// Einfache Schleife: Zahlen ausgeben
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
console.log("  Start! 🚀");`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Weiter geht's mit den Grundlagen"}),e.jsx("p",{children:"In den folgenden Kapiteln wirst du die einzelnen Konzepte detailliert kennenlernen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variablen:"})," Datentypen, Zuweisungen, const vs. let"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingungen:"})," if/else, Vergleichsoperatoren, logische Operatoren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Listen:"})," Arrays, Methoden, Durchlaufen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schleifen:"})," for, while, for...of"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," Definition, Parameter, Rückgabewerte"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekte:"})," Eigenschaften, Methoden, this"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionales Programmieren:"})," Map, Filter, Reduce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Klassen:"})," Vererbung, OOP-Prinzipien"]})]})]})]})}const al=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"}));function zn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Arbeitsauftrag: Grundinstallation"}),e.jsx("p",{children:"Bevor wir mit dem Programmieren beginnen, musst du deine Entwicklungsumgebung einrichten. Am Ende dieser Installation musst du folgende Punkte erledigt haben:"}),e.jsx("h3",{children:"Was am Ende installiert sein muss:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ein Editor zum Bearbeiten von JavaScript-Code"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Empfehlung: Visual Studio Code (VSCode)"}),e.jsx("li",{children:"Alternativen: Zed, VSCodium, Neovim, Sublime Text, WebStorm"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Eine Umgebung zum Ausführen von JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Empfehlung: Node.js"}),e.jsx("li",{children:"Alternativen: Deno, Bun"}),e.jsx("li",{children:"Oder: JavaScript im Browser (Developer Tools)"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git als Versionierungswerkzeug"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Git muss auf deinem Computer installiert und konfiguriert sein"}),e.jsx("li",{children:"Dein Name und E-Mail müssen als Git-Identität gesetzt sein"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ein GitHub-Account mit einem Repository für JavaScript-Aufgaben"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstelle ein ",e.jsx("strong",{children:"privates Repository"})," auf GitHub"]}),e.jsx("li",{children:"Dieses Repository dient als Ablage für alle deine JavaScript-Aufgaben"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lehrperson als Collaborator hinzugefügt"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["GitHub-Alias der Lehrperson: ",e.jsx("strong",{children:"cedricgeissmann"})]}),e.jsx("li",{children:"Füge diese Person als Collaborator in deinem Repository hinzu"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Erledige alle fünf Punkte bevor du mit den ersten Programmieraufgaben beginnst. Ohne diese Grundinstallation kannst du deine Aufgaben nicht korrekt abgeben."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"JavaScript ausführen"}),e.jsx("p",{children:"JavaScript-Code kann auf verschiedene Arten ausgeführt werden:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Im Browser:"})," Öffne die Developer Tools (F12) und gehe zum Tab «Console»"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Im Terminal:"})," Speichere den Code in einer"," ",e.jsx("code",{children:".js"}),"-Datei und führe ihn mit Node.js aus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Online:"})," Verwende den JSTerminal hier auf dieser Seite oder Online-Editoren wie"," ",e.jsx("a",{href:"https://codepen.io",target:"_blank",rel:"noopener noreferrer",children:"CodePen"})," ","oder"," ",e.jsx("a",{href:"https://jsfiddle.net",target:"_blank",rel:"noopener noreferrer",children:"JSFiddle"})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Arbeitsauftrag: Deine Entwicklungsumgebung einrichten"}),e.jsx("h3",{children:"1. Code direkt ausprobieren — JSTerminal"}),e.jsxs("p",{children:["Am einfachsten kannst du JavaScript direkt hier im folgenden Terminal ausprobieren. Schreibe Code in den Editor und klicke auf"," ",e.jsx("strong",{children:"«▶ Ausführen»"}),", um das Programm zu starten. Die Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig verändern und erneut ausführen!"]}),e.jsx("h3",{children:"2. Lokale Entwicklungsumgebung"}),e.jsxs("p",{children:["Für das Programmieren auf deinem eigenen Computer brauchst du ein Werkzeug, das JavaScript-Code ausführen kann. Du darfst selbst entscheiden, welches Werkzeug du verwendest — hier bist du frei! Wichtig ist nur, dass du JavaScript im Browser ",e.jsx("em",{children:"und"})," lokal ausführen kannst."]}),e.jsx("p",{children:e.jsx("strong",{children:"Empfohlene Laufzeit-Umgebungen:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})," ","(empfohlen für Einsteiger)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://deno.com",target:"_blank",rel:"noopener noreferrer",children:"Deno"})," ","(moderne Alternative zu Node.js)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://bun.sh",target:"_blank",rel:"noopener noreferrer",children:"Bun"})," ","(schnelle JavaScript-Engine)"]})]}),e.jsxs("p",{children:["Alle drei ermöglichen es dir, ",e.jsx("code",{children:".js"}),"-Dateien lokal über das Terminal auszuführen. Node.js ist am weitesten verbreitet und wird in der Industrie am häufigsten verwendet — es ist daher die empfehlenswertes Wahl für den Einstieg."]}),e.jsx("h3",{children:"3. Empfohlene Editoren"}),e.jsx("p",{children:"Ein guter Code-Editor macht das Programmieren viel einfacher. Hier sind einige empfehlenswerte Editoren:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer",children:"Visual Studio Code (VSCode)"})," ","(am weitesten verbreitet, kostenlos, viele Erweiterungen)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://zed.dev",target:"_blank",rel:"noopener noreferrer",children:"Zed"})," ","(schneller, moderner Editor)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://vscodium.com",target:"_blank",rel:"noopener noreferrer",children:"VSCodium"})," ","(kostenlose, open-source Version von VSCode)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://neovim.io",target:"_blank",rel:"noopener noreferrer",children:"Neovim"})," ","(für Fortgeschrittene, terminalbasiert)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.sublimetext.com",target:"_blank",rel:"noopener noreferrer",children:"Sublime Text"})," ","(leichtgewichtig und schnell)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer",children:"WebStorm"})," ","(IDE von JetBrains, kostenpflichtig, kostenlose Testversion)"]})]}),e.jsx("p",{children:"Alle genannten Editoren sind kostenlos oder haben eine kostenlose Version. Du kannst selbst ausprobieren, welcher dir am besten liegt."}),e.jsx("h3",{children:"4. Wichtige Regel: Lernen durch eigenes Coden"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Coding-Agents (wie ChatGPT, Claude, Cursor-Agent, etc.) sollen während dem Lernprozess nicht verwendet werden, um Code zu generieren."})," ","Du lernst Programmieren nur, wenn du selbst direkt mit dem Code arbeitest und ihn verstehst."]}),e.jsx("p",{children:e.jsx("strong",{children:"Was du verwenden darfst:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Kurze, einfache Code-Snippets (auch generiert) — jedoch nicht einfach kopieren, vor allem am Anfang nicht!"}),e.jsx("li",{children:"Erklärungen zum Code — du darfst dir von Coding-Agents erklären lassen, was ein Code-Snippet macht"}),e.jsxs("li",{children:["Dokumentation und Tutorials — z.B. die offizielle"," ",e.jsx("a",{href:"https://developer.mozilla.org/de/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer",children:"MDN JavaScript Dokumentation"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Wenn du den Code nicht selbst schreiben und erklären kannst, hast du nichts gelernt. Der Weg zum Ziel ist das Programmieren selbst — nicht das Resultat."]}),e.jsx("h3",{children:"5. Versionierung mit Git und GitHub"}),e.jsxs("p",{children:["Bei der Arbeit mit Code braucht es immer Versionierungstools. Hier verwenden wir ",e.jsx("strong",{children:"Git"})," in Kombination mit"," ",e.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Was du tun musst:"})}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstelle ein ",e.jsx("strong",{children:"privates Repository"})," auf GitHub"]}),e.jsxs("li",{children:["Füge mich als Collaborator hinzu — mein GitHub-Alias ist"," ",e.jsx("strong",{children:"cedricgeissmann"})]}),e.jsx("li",{children:"Speichere deine Programme in diesem Repository"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Organisation:"})," Die Struktur deines Repositories ist dir selbst überlassen — es gibt keine Vorgaben. Du kannst dich dazu einlesen, was sinnvoll ist. Eine mögliche Struktur:"]}),e.jsx("pre",{children:e.jsx("code",{children:`my-javascript-work/
├── 01-variablen/
│   └── hello.js
├── 02-bedingungen/
│   └── alter-check.js
├── 03-schleifen/
│   └── zaehlen.js
└── README.md`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Entscheidung: Browser vs. Terminal"})," — Du kannst selbst entscheiden, ob du deinen Code lieber über JavaScript im Browser ausführst oder lokal mit Node.js über das Terminal. Beide Wege haben ihre Vorteile und sind wichtige Fertigkeiten."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Dein erstes Programm"}),e.jsxs("p",{children:["Der einfachste Weg, JavaScript zu starten, ist die"," ",e.jsx("code",{children:"console.log"}),"-Funktion:"]}),e.jsx(o,{filename:"hello.js",children:`// Das ist ein Kommentar - er wird nicht ausgeführt

// Ausgabe in der Konsole
console.log("Hallo Welt!");
console.log("Ich lerne JavaScript!");
console.log("Programmieren macht Spass!");`})]})]})}const hl=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"}));function wn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Arbeitsauftrag 01: JavaScript-Einsteigeraufgaben"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie 20 kleine Programmieraufgaben. Sie decken die vier zentralen Themen ab: ",e.jsx("strong",{children:"Variablen"}),","," ",e.jsx("strong",{children:"Bedingungen"}),", ",e.jsx("strong",{children:"Listen"})," und"," ",e.jsx("strong",{children:"Schleifen"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen oder Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte durch eigenes Ausprobieren zu verstehen."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Abgabe über GitHub"}),e.jsx("p",{children:"Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie diesen Schritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstellen Sie in Ihrem Repository einen Ordner"," ",e.jsx("code",{children:"aufgaben-01"})]}),e.jsxs("li",{children:["Speichern Sie jede Aufgabe als eigene ",e.jsx("code",{children:".js"}),"-Datei (z.B."," ",e.jsx("code",{children:"01-variablen-interview.js"}),")"]}),e.jsx("li",{children:"Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht"}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"letzte Commit"})," muss die Nachricht"," ",e.jsx("code",{children:"Arbeitsauftrag 01 bearbeitet"})," enthalten"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Beispiel:"})}),e.jsx("pre",{children:e.jsx("code",{children:`git add .
git commit -m "Arbeitsauftrag 01 bearbeitet"`})})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Interview-Programm
// Was ich gemacht habe: Variablen für Name, Alter und Beruf erstellt
// Was ich gelernt habe: const kann nicht geändert werden, let schon
// Schwierigkeit: leicht`})}),e.jsxs("p",{children:["Sie können auch eine ",e.jsx("code",{children:"README.md"})," im Ordner"," ",e.jsx("code",{children:"aufgaben-01"})," erstellen, wo Sie alle Aufgaben auflisten."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsx("h3",{children:"Teil 1: Variablen (Aufgabe 1–5)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Persönliches Interview"}),e.jsxs("p",{children:["Erstellen Sie ein Programm, das eine Person vorstellt. Definieren Sie Variablen für Name, Alter, Wohnort und Lieblingsfach. Geben Sie alle Informationen mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Umrechnungstool"}),e.jsx("p",{children:"Schreiben Sie ein Programm, das einen Betrag in CHF in EUR umrechnet (verwenden Sie einen fiktiven Wechselkurs, z.B. 1 CHF = 0.95 EUR). Definieren Sie den Betrag und den Kurs als Variablen."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Flächberechnung"}),e.jsx("p",{children:"Berechnen Sie die Fläche und den Umfang eines Rechtecks. Definieren Sie Länge und Breite als Variablen und geben Sie die Resultate aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Geschwindigkeit berechnen"}),e.jsx("p",{children:"Berechnen Sie die Durchschnittsgeschwindigkeit: Eine Person läuft 42 km in 3 Stunden und 15 Minuten. Definieren Sie die Strecke und die Zeit als Variablen und berechnen Sie die Geschwindigkeit in km/h."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Persönliches Profil"}),e.jsxs("p",{children:["Definieren Sie mehrere Variablen für ein fiktives Profil: Name, Alter, Hobby und Lieblingsessen. Geben Sie alle Informationen in einer zusammenhängenden Vorstellung mit ",e.jsx("code",{children:"console.log"})," ","aus. Nutzen Sie mindestens vier Variablen."]})]}),e.jsx("h3",{children:"Teil 2: Bedingungen (Aufgabe 6–10)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Altersprüfung"}),e.jsx("p",{children:"Prüfen Sie, ob eine Person volljährig ist (≥ 18 Jahre). Geben Sie eine passende Meldung aus. Testen Sie das Programm mit verschiedenen Alterswerten."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Notensystem"}),e.jsxs("p",{children:["Definieren Sie eine Note (1–6) als Variable und geben Sie mit"," ",e.jsx("code",{children:"if / else if / else"}),' eine Textbeschreibung aus (z.B. 6 = "Sehr gut", 5 = "Gut" usw.).']})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Parität prüfen"}),e.jsxs("p",{children:["Prüfen Sie, ob eine Zahl gerade oder ungerade ist. Verwenden Sie den Modulo-Operator (",e.jsx("code",{children:"%"}),")."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Jahreszeit bestimmen"}),e.jsx("p",{children:"Definieren Sie eine Variable für den Monat (1–12) und geben Sie die passende Jahreszeit aus (Frühling: 3–5, Sommer: 6–8, Herbst: 9–11, Winter: 12, 1–2)."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Login-System"}),e.jsx("p",{children:"Prüfen Sie, ob ein Benutzername und ein Passwort korrekt sind. Definieren Sie den erwarteten Benutzernamen und das Passwort als Variablen und vergleichen Sie sie mit den Benutzereingaben (ebenfalls Variablen). Geben Sie eine passende Meldung aus."})]}),e.jsx("h3",{children:"Teil 3: Listen / Arrays (Aufgabe 11–15)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Einkaufsliste"}),e.jsx("p",{children:"Erstellen Sie ein Array mit mindestens 5 Einkaufsartikeln. Geben Sie jeden Artikel mit einer Nummer aus (1. Milch, 2. Brot usw.). Fügen Sie noch einen Artikel hinzu und löschen Sie den letzten."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 12: Durchschnitt berechnen"}),e.jsx("p",{children:"Definieren Sie ein Array mit mindestens 5 Noten. Berechnen Sie den Durchschnittswert und geben Sie ihn aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 13: Grösstes Element finden"}),e.jsx("p",{children:"Definieren Sie ein Array mit Temperaturwerten. Finden Sie die höchste und die tiefste Temperatur und geben Sie beide aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 14: Array umdrehen"}),e.jsx("p",{children:"Erstellen Sie ein Array mit den Wochentagen. Kehren Sie die Reihenfolge um (von Sonntag bis Montag statt Montag bis Sonntag) und geben Sie das neue Array aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 15: Filtern"}),e.jsx("p",{children:"Definieren Sie ein Array mit Zahlen. Erstellen Sie ein neues Array, das nur die geraden Zahlen enthält, und geben Sie es aus."})]}),e.jsx("h3",{children:"Teil 4: Schleifen (Aufgabe 16–20)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 16: Multiplikationstabelle"}),e.jsxs("p",{children:["Schreiben Sie eine ",e.jsx("code",{children:"for"}),"-Schleife, die das kleine Einmaleins von 1 bis 10 ausgibt."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 17: Summe berechnen"}),e.jsxs("p",{children:["Berechnen Sie die Summe aller Zahlen von 1 bis 100 mit einer"," ",e.jsx("code",{children:"for"}),"-Schleife. Geben Sie das Resultat aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 18: Fakultät"}),e.jsxs("p",{children:["Berechnen Sie die Fakultät einer Zahl (z.B. 5! = 5 × 4 × 3 × 2 × 1) mit einer ",e.jsx("code",{children:"for"}),"-Schleife."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 19: Array mit Schleife durchlaufen"}),e.jsxs("p",{children:["Erstellen Sie ein Array mit Ihren Lieblingsfilmen. Durchlaufen Sie es mit einer ",e.jsx("code",{children:"for...of"}),"-Schleife und geben Sie jeden Film mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 20: Palindrom-Prüfer"}),e.jsxs("p",{children:["Erstellen Sie ein Skript, das prüft, ob ein über"," ",e.jsx("code",{children:"process.argv"}),'(Index 2) übergebenes Wort ein Palindrom ist. Ein Palindrom liest sich vorwärts und rückwärts gleich (z.B. "anna", "otto", "abba").']}),e.jsx("p",{children:e.jsx("strong",{children:"Aufgaben:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Lesen Sie das Wort aus ",e.jsx("code",{children:"process.argv[2]"})," aus"]}),e.jsxs("li",{children:["Erzeugen Sie die umgekehrte Version des Wortes (z.B. mit"," ",e.jsx("code",{children:"split('')"}),", ",e.jsx("code",{children:"reverse()"}),","," ",e.jsx("code",{children:"join('')"}),")"]}),e.jsx("li",{children:"Vergleichen Sie beide Versionen"}),e.jsxs("li",{children:["Geben Sie ",e.jsx("code",{children:'"<Wort> ist ein Palindrom"'})," oder"," ",e.jsx("code",{children:'"<Wort> ist kein Palindrom"'})," aus"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Testen Sie im Terminal:"})}),e.jsxs("p",{children:[e.jsx("code",{children:"node palindrom.js Anna"})," →"," ",e.jsx("code",{children:"Anna ist ein Palindrom"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"node palindrom.js Hallo"})," →"," ",e.jsx("code",{children:"Hallo ist kein Palindrom"})]})]})]})]})}const ol=Object.freeze(Object.defineProperty({__proto__:null,default:wn},Symbol.toStringTag,{value:"Module"}));function vn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Was sind Variablen?"}),e.jsx("p",{children:'Variablen sind wie Behälter oder Boxen, in denen du Werte speichern kannst. Stell dir vor, du hast mehrere Schubladen in einem Schrank. Jede Schublade hat einen Namen (z.B. "Schulhefte", "Bücher") und enthält etwas (die Werte). In der Programmierung funktioniert das ähnlich: Eine Variable hat einen Namen und speichert einen Wert.'}),e.jsx("p",{children:"Warum braucht man Variablen? Stell dir vor, du möchtest den Preis eines Produkts berechnen. Du musst den Grundpreis, den Steuernsatz und den Rabatt speichern und damit rechnen. Ohne Variablen müsstest du jede Zahl immer wieder tippen. Mit Variablen speicherst du die Werte einmal und kannst sie später beliebig oft verwenden."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Variablen deklarieren"}),e.jsx("p",{children:"In JavaScript kannst du Variablen auf drei Arten erstellen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"let"}),": Eine Variable, deren Wert später geändert werden kann (wie eine beschreibbare Schublade)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"}),": Eine Konstante, deren Wert nie geändert werden darf (wie eine verschlossene Schublade)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var"}),": Die veraltete Methode aus alten JavaScript-Versionen"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Empfehlung:"})," Verwende immer zuerst ",e.jsx("code",{children:"const"}),". Nur wenn du den Wert später wirklich ändern musst, verwende"," ",e.jsx("code",{children:"let"}),". So verhinderst du unbeabsichtigte Fehler."]}),e.jsx(o,{filename:"variablen.js",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Benennungsregeln für Variablen"}),e.jsx("p",{children:"Variablennamen müssen bestimmte Regeln befolgen:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dürfen nur Buchstaben, Zahlen, $ und _ enthalten"}),e.jsx("li",{children:"Dürfen nicht mit einer Zahl beginnen"}),e.jsx("li",{children:"Sind gross-/kleinschreibungsabhängig (alter ≠ Alter)"}),e.jsx("li",{children:"Dürfen keine reservierten Wörter sein (wie let, const, if, ...)"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gute Namenskonvention:"})," Verwende camelCase und mache den Namen beschreibend:"]}),e.jsx(o,{filename:"benennung.js",children:`
// Schlechte Namen
let a = 10;
let x = "Anna";

// Gute Namen
let schuelerAlter = 15;
let schuelerName = "Anna";
let preisInFranken = 25.50;
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Datentypen in JavaScript"}),e.jsx("p",{children:'Jeder Wert in JavaScript hat einen bestimmten Typ (eine "Klasse"). Die wichtigsten Typen sind:'}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"string"}),": Texte, geschrieben in Anführungszeichen ('', \", oder ``)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"number"}),": Zahlen, sowohl ganze Zahlen als auch Dezimalzahlen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"boolean"}),": Wahrheitswerte, nur true oder false"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"array"}),": Eine geordnete Liste von Werten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"object"}),": Eine Sammlung von Schlüssel-Wert-Paaren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"undefined"}),": Eine Variable, der noch kein Wert zugewiesen wurde"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"null"}),': Beabsichtigt "leer" oder "kein Wert"']})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Mit typeof den Datentyp prüfen"}),e.jsxs("p",{children:["JavaScript bietet den Operator ",e.jsx("code",{children:"typeof"}),", um den Typ eines Werts zu überprüfen. Das ist besonders hilfreich, wenn du nicht sicher bist, welchen Typ eine Variable hat, oder wenn du deinen Code testen möchtest."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"typeof variable"})," gibt einen String zurück, der den Typ beschreibt."]}),e.jsx(o,{filename:"typeof.js",children:`
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
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Beachte, dass ",e.jsx("code",{children:"typeof null"})," ",e.jsx("code",{children:'"object"'})," zurückgibt. Das ist ein alter Bug in JavaScript, der aus Kompatibilitätsgründen bestehen bleibt. In der Praxis ist"," ",e.jsx("code",{children:"null"}),' aber kein Objekt, sondern bedeutet "kein Wert".']})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Datentypen im Detail"}),e.jsx("h3",{children:"Strings (Texte)"}),e.jsx("p",{children:"Strings können mit einfachen (''), doppelten (\") oder Backticks (``) geschrieben werden. Backticks ermöglichen Template Literals, also das Einfügen von Variablen direkt im Text:"}),e.jsx(o,{filename:"strings.js",children:`
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
`}),e.jsx("h3",{children:"Numbers (Zahlen)"}),e.jsxs("p",{children:["Numbers umfassen sowohl ganze Zahlen als auch Dezimalzahlen. Es gibt"," ","keine separate Type für ganze Zahlen in JavaScript:"]}),e.jsx(o,{filename:"numbers.js",children:`
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
`}),e.jsx("h3",{children:"Booleans (Wahrheitswerte)"}),e.jsxs("p",{children:["Booleans haben nur zwei mögliche Werte: ",e.jsx("code",{children:"true"})," und"," ",e.jsx("code",{children:"false"}),". Sie werden oft in Bedingungen verwendet:"]}),e.jsx(o,{filename:"booleans.js",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Datentypen umwandeln (Casting)"}),e.jsx("p",{children:'Oft musst du Werte von einem Typ in einen anderen umwandeln. JavaScript macht das teilweise automatisch ("coercion"), aber es ist besser, dies explizit zu machen. Hier sind die wichtigsten Methoden:'}),e.jsx("h3",{children:"Von String zu Number"}),e.jsxs("p",{children:["Wenn du einen Text wie ",e.jsx("code",{children:'"42"'})," in eine echte Zahl"," ",e.jsx("code",{children:"42"})," umwandeln möchtest, verwende ",e.jsx("code",{children:"Number()"})," ","oder ",e.jsx("code",{children:"parseInt()"})," / ",e.jsx("code",{children:"parseFloat()"}),":"]}),e.jsx(o,{filename:"string-zahl.js",children:`
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
`}),e.jsx("h3",{children:"Von Number zu String"}),e.jsxs("p",{children:["Um eine Zahl in einen Text umzuwandeln, verwende"," ",e.jsx("code",{children:".toString()"})," oder ",e.jsx("code",{children:"String()"}),":"]}),e.jsx(o,{filename:"zahl-string.js",children:`
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
`}),e.jsx("h3",{children:"Von String zu Boolean"}),e.jsx("p",{children:"Die Umwandlung von Strings zu Booleans folgt diesen Regeln:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Leere Strings ",e.jsx("code",{children:'""'})," werden zu ",e.jsx("code",{children:"false"})]}),e.jsxs("li",{children:["Alle anderen Strings werden zu ",e.jsx("code",{children:"true"})]})]}),e.jsx(o,{filename:"string-boolean.js",children:`
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
`}),e.jsx("h3",{children:"Von Boolean zu Number"}),e.jsx("p",{children:"Booleans können in Zahlen umgewandelt werden:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"true"})," wird zu ",e.jsx("code",{children:"1"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"false"})," wird zu ",e.jsx("code",{children:"0"})]})]}),e.jsx(o,{filename:"boolean-zahl.js",children:`
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Umgekehrt: 0 wird zu false, alles andere zu true
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true
console.log(Boolean(-1));    // true
console.log(Boolean(0.1));   // true
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Automatische Typumwandlung (Type Coercion)"}),e.jsx("p",{children:"JavaScript versucht oft, Typen automatisch umzuwandeln. Das kann hilfreich sein, aber auch zu unerwarteten Ergebnissen führen:"}),e.jsx(o,{filename:"coercion.js",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Variablen speichern Werte und können mit ",e.jsx("code",{children:"let"})," oder"," ",e.jsx("code",{children:"const"})," erstellt werden"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"})," für unveränderliche Werte, ",e.jsx("code",{children:"let"})," für veränderliche Werte"]}),e.jsx("li",{children:"Die wichtigsten Typen sind: string, number, boolean, array, object"}),e.jsxs("li",{children:[e.jsx("code",{children:"typeof"})," gibt den Typ einer Variable zurück"]}),e.jsxs("li",{children:["Explizite Typumwandlung mit ",e.jsx("code",{children:"Number()"}),","," ",e.jsx("code",{children:"String()"}),", ",e.jsx("code",{children:"Boolean()"})," ist besser als automatische Umwandlung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"parseInt()"})," und ",e.jsx("code",{children:"parseFloat()"})," extrahieren"," ","Zahlen aus Strings"]})]})]})]})}const ul=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"}));function An(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Was sind Bedingungen?"}),e.jsx("p",{children:"Bedingungen erlauben es deinem Programm, verschiedene Entscheidungen zu treffen. Abhängig davon, ob eine Bedingung wahr (true) oder falsch (false) ist, wird unterschiedlicher Code ausgeführt."}),e.jsx("p",{children:"Stell dir vor, du gehst zur Schule. Was du mitbringst, hängt vom Wetter ab:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Wenn es regnet, bringst du einen Regenschirm mit"}),e.jsx("li",{children:"Sonst wenn es sehr warm ist, bringst du Sonnencreme mit"}),e.jsx("li",{children:"Sonst bringst du einfach dein normales Schulzeug mit"})]}),e.jsx("p",{children:"Genau so funktionieren Bedingungen in JavaScript: Das Programm prüft eine Bedingung und führt den passenden Code aus."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"if, else if, else"}),e.jsxs("p",{children:["Die Grundstruktur einer Bedingung in JavaScript besteht aus"," ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"else if"})," (optional) und ",e.jsx("code",{children:"else"})," ","(optional):"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if"}),": Immer notwendig. Die erste Bedingung, die geprüft wird"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else if"}),": Optional. Weitere Bedingungen, die geprüft werden, wenn die vorherige falsch war"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"}),": Optional. Der Code, der ausgeführt wird, wenn alle vorherigen Bedingungen falsch waren"]})]}),e.jsx(o,{filename:"bedingungen.js",children:`let temp = 25;

if (temp > 30) {
  console.log("Es ist sehr warm!");
} else if (temp > 20) {
  console.log("Es ist angenehm warm.");
} else {
  console.log("Es ist kühl.");
}
// Ausgabe: "Es ist angenehm warm."`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," JavaScript prüft die Bedingungen von oben nach unten. Sobald eine Bedingung wahr ist, wird der zugehörige Code ausgeführt und der Rest wird ignoriert. Auch wenn mehrere Bedingungen wahr wären, wird nur der erste passende Block ausgeführt."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Bedingungen mit Variablen"}),e.jsx("p",{children:"Bedingungen arbeiten oft mit Variablen. Hier ein Beispiel, das verschiedene Variablen kombiniert:"}),e.jsx(o,{filename:"bedingungen-variablen.js",children:`let alter = 18;
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Vergleichsoperatoren"}),e.jsxs("p",{children:["Vergleichsoperatoren vergleichen zwei Werte und geben"," ",e.jsx("code",{children:"true"})," oder ",e.jsx("code",{children:"false"})," zurück. Sie werden oft in Bedingungen verwendet:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"==="})," gleich (typfest - Wert UND Typ müssen gleich sein)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!=="})," ungleich (typfest - Wert ODER Typ muss unterschiedlich sein)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," gleich (nur Wert, Typ wird ignoriert)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!="})," ungleich (nur Wert, Typ wird ignoriert)"]}),e.jsxs("li",{children:[e.jsx("code",{children:">"})," grösser"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<"})," kleiner"]}),e.jsxs("li",{children:[e.jsx("code",{children:">="})," grösser oder gleich"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<="})," kleiner oder gleich"]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Typfest vergleichen (=== und !==)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Empfehlung:"})," Verwende immer ",e.jsx("code",{children:"==="})," und"," ",e.jsx("code",{children:"!=="})," zum Vergleichen. Diese Operatoren prüfen sowohl den Wert als auch den Typ. Das vermeidet viele Fehler."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beispiel:"})," ",e.jsx("code",{children:"==="})," prüft, ob zwei Werte identisch sind - sowohl der Wert als auch der Typ muss übereinstimmen:"]}),e.jsx(o,{filename:"typfest-vergleich.js",children:`// ===: Typfest gleich (Wert UND Typ müssen gleich sein)
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Typgleichheit im Detail"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Typgleichheit"})," bedeutet, dass nicht nur der Wert, sondern auch der Datentyp identisch sein muss. Das ist wichtig, denn in JavaScript kann ",e.jsx("code",{children:'"5"'})," (ein String) nicht einfach als",e.jsx("code",{children:"5"})," (eine Zahl) betrachtet werden - sie haben unterschiedliche Bedeutung und Funktionen."]}),e.jsx(o,{filename:"typgleichheit.js",children:`// Typgleichheit prüfen mit typeof und ===
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Logische Operatoren"}),e.jsx("p",{children:"Logische Operatoren kombinieren mehrere Bedingungen. Sie arbeiten mit booleschen Werten (true/false):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," UND: Beide Bedingungen müssen wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," ODER: Mindestens eine Bedingung muss wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!"})," NICHT: Kehrt den Wahrheitswert um"]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"UND (&&) - Beide Bedingungen müssen wahr sein"}),e.jsxs("p",{children:["Der UND-Operator ",e.jsx("code",{children:"&&"})," gibt nur dann ",e.jsx("code",{children:"true"}),"zurück, wenn BEIDE Bedingungen wahr sind. Wenn eine Bedingung falsch ist, ist das Ergebnis falsch:"]}),e.jsx(o,{filename:"und-operator.js",children:`// UND: Beide Bedingungen muessen wahr sein
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"ODER (||) - Mindestens eine Bedingung muss wahr sein"}),e.jsxs("p",{children:["Der ODER-Operator ",e.jsx("code",{children:"||"})," gibt ",e.jsx("code",{children:"true"})," zurück, wenn MINDESTENS EINE der Bedingungen wahr ist. Nur wenn BEIDE falsch sind, ist das Ergebnis falsch:"]}),e.jsx(o,{filename:"oder-operator.js",children:`// ODER: Mindestens eine Bedingung muss wahr sein
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"NICHT (!) - Wahrheitswert umkehren"}),e.jsxs("p",{children:["Der NICHT-Operator ",e.jsx("code",{children:"!"})," kehrt den Wahrheitswert um:",e.jsx("code",{children:"true"})," wird zu ",e.jsx("code",{children:"false"})," und umgekehrt:"]}),e.jsx(o,{filename:"nicht-operator.js",children:`// NICHT: Kehrt den Wahrheitswert um
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Vergleichsoperatoren im Detail"}),e.jsx("p",{children:"Hier sind Beispiele, wie die verschiedenen Vergleichsoperatoren funktionieren:"}),e.jsx(o,{filename:"vergleichsoperatoren.js",children:`let a = 10;
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Verzweigungen verschachteln"}),e.jsx("p",{children:"Bedingungen können ineinander verschachtelt werden. Das heisst, eine Bedingung kann innerhalb einer anderen stehen:"}),e.jsx(o,{filename:"verschachtelt.js",children:`let alter = 20;
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Häufige Fehler und Tipps"}),e.jsx("p",{children:"Hier sind einige häufige Fehler, die Anfänger machen, und wie du sie vermeiden kannst:"}),e.jsx(o,{filename:"fehler-vermeiden.js",children:`// Fehler 1: = statt === (Zuweisung statt Vergleich!)
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bedingungen erlauben es dem Programm, verschiedene Entscheidungen zu treffen"}),e.jsxs("li",{children:[e.jsx("code",{children:"if"})," prüft die erste Bedingung, ",e.jsx("code",{children:"else if"})," ","weitere, ",e.jsx("code",{children:"else"})," den Fallback"]}),e.jsxs("li",{children:[e.jsx("code",{children:"==="})," und ",e.jsx("code",{children:"!=="})," prüfen Wert UND Typ (empfohlen!)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," und ",e.jsx("code",{children:"!="})," prüfen nur den Wert (vermeiden!)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," (UND): Beide Bedingungen müssen wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," (ODER): Mindestens eine Bedingung muss wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!"})," (NICHT): Kehrt den Wahrheitswert um"]}),e.jsx("li",{children:"Typgleichheit bedeutet, dass sowohl der Wert als auch der Typ identisch sein müssen"}),e.jsx("li",{children:"Bedingungen von oben nach unten geprüft - erste passende Bedingung gewinnt"})]})]})]})}const jl=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"}));function yn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Was sind Listen (Arrays)?"}),e.jsx("p",{children:'Listen (in JavaScript "Arrays" genannt) sind Sammlungen von Werten, die du in einer einzigen Variable speichern kannst. Stell dir eine Liste wie einen Einkaufszettel vor: Du schreibst alle Punkte nacheinander auf, und jeder Punkt hat eine bestimmte Position auf der Liste.'}),e.jsx("p",{children:"Listen sind sehr nützlich, wenn du mehrere zusammengehörige Werte verwalten möchtest, zum Beispiel:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Namen deiner Klassenfreunde"}),e.jsx("li",{children:"Noten in einem Fach"}),e.jsx("li",{children:"Wochentage"}),e.jsx("li",{children:"Preise von Produkten"})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Arrays erstellen"}),e.jsxs("p",{children:["Ein Array erstellst du mit eckigen Klammern ",e.jsx("code",{children:"[]"}),". Die einzelnen Werte werden mit Kommas getrennt:"]}),e.jsx(o,{filename:"arrays-erstellen.js",children:`// Ein Array mit Fruchtnamen
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Index und Position"}),e.jsxs("p",{children:["Jedes Element in einem Array hat eine Position, den sogenannten"," ",e.jsx("strong",{children:"Index"}),". Der Index beginnt bei ",e.jsx("strong",{children:"0"}),", nicht bei 1! Das ist eine wichtige Konvention in der Programmierung."]}),e.jsx(o,{filename:"index-beispiel.js",children:`// Wochentage mit Index
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Arrays verändern"}),e.jsx("p",{children:"Du kannst Arrays auf verschiedene Weise verändern: Elemente hinzufügen, entfernen oder ändern:"}),e.jsx(o,{filename:"arrays-aendern.js",children:`let zahlen = [1, 2, 3];

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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Wichtige Array-Methoden"}),e.jsx("p",{children:"JavaScript bietet viele eingebaute Methoden für Arrays. Hier die wichtigsten:"}),e.jsx(o,{filename:"array-methoden.js",children:`let zahlen = [10, 20, 30, 40, 50];

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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Arrays durchlaufen"}),e.jsxs("p",{children:["Oft möchtest du alle Elemente eines Arrays bearbeiten. Dazu gibt es verschiedene Methoden. Die einfachste ist die ",e.jsx("code",{children:"for...of"}),"-Schleife:"]}),e.jsx(o,{filename:"array-durchlaufen.js",children:`const schueler = ["Anna", "Beat", "Claudia", "Daniel"];

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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Praktische Beispiele"}),e.jsx(o,{children:`// Beispiel 1: Einkaufsliste
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arrays speichern mehrere Werte in einer Variable"}),e.jsxs("li",{children:["Der Index beginnt bei 0, das erste Element ist also"," ",e.jsx("code",{children:"array[0]"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"array.length"})," gibt die Anzahl der Elemente zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"push()"})," und ",e.jsx("code",{children:"unshift()"})," hinzufügen Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:"pop()"})," und ",e.jsx("code",{children:"shift()"})," entfernen Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:"indexOf()"})," findet die Position, ",e.jsx("code",{children:"includes()"})," ","prüft das Vorhandensein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"slice()"})," kopiert Teile, ",e.jsx("code",{children:"splice()"})," verändert das Original"]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...of"})," durchläuft alle Elemente einfach"]})]})]})]})}const xl=Object.freeze(Object.defineProperty({__proto__:null,default:yn},Symbol.toStringTag,{value:"Module"}));function Nn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Was sind Schleifen?"}),e.jsx("p",{children:"Schleifen erlauben es dir, Code-Blöcke wiederholt auszuführen. Statt denselben Code immer und immer wieder schreiben zu müssen, definierst du einmal, was wiederholt werden soll, und wie oft."}),e.jsx("p",{children:"Stell dir vor, du musst 100 Briefe schreiben. Du könntest jeden Brief einzeln abschreiben, oder du schreibst eine Vorlage und kopierst sie 100 Mal. Schleifen funktionieren ähnlich: Du schreibst den Code einmal und lässt ihn mehrfach ausführen."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"for-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"for"}),"-Schleife ist die häufigste Schleife. Sie wird verwendet, wenn du genau weisst, wie oft der Code ausgeführt werden soll."]}),e.jsx("p",{children:"Eine for-Schleife hat drei Teile in der Klammer:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initialisierung"}),": Eine Variable wird erstellt und gestartet (z.B. ",e.jsx("code",{children:"let i = 0"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingung"}),": Solange diese Bedingung wahr ist, wird die Schleife ausgeführt (z.B. ",e.jsx("code",{children:"i < 5"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Update"}),": Nach jedem Durchlauf wird die Variable geändert (z.B. ",e.jsx("code",{children:"i++"}),")"]})]}),e.jsx(o,{filename:"for-schleife.js",children:`// Zählt von 0 bis 4
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"while-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"while"}),"-Schleife führt den Code so lange aus, wie die Bedingung wahr ist. Sie wird verwendet, wenn du nicht genau weisst, wie oft die Schleife durchlaufen wird."]}),e.jsx(o,{filename:"while-schleife.js",children:`let count = 0;
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"for...of-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"for...of"}),"-Schleife durchläuft alle Elemente eines Arrays oder Strings. Sie ist besonders einfach und übersichtlich."]}),e.jsx(o,{filename:"for-of.js",children:`const farben = ["rot", "gruen", "blau"];

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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"break und continue"}),e.jsxs("p",{children:[e.jsx("code",{children:"break"})," beendet die Schleife komplett, während"," ",e.jsx("code",{children:"continue"})," den aktuellen Durchlauf überspringt und mit dem nächsten weitermacht:"]}),e.jsx(o,{filename:"break-continue.js",children:`// break: Schleife sofort beenden
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Praktische Beispiele"}),e.jsx(o,{children:`// Beispiel 1: Summe berechnen
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Wichtige Unterschiede"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for"}),": Wenn du genau weisst, wie oft"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while"}),": Wenn die Bedingung variabel ist"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...of"}),": Wenn du alle Elemente durchlaufen willst"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"break"}),": Schleife komplett beenden"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"continue"}),": Nur aktuellen Durchlauf ueberspringen"]})]})]})]})}const gl=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"}));function En(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Tipps: User Input"}),e.jsx("p",{children:"In den bisherigen Beispielen haben wir Code ausschliesslich in der Konsole ausgeführt. Manchmal möchte man aber auch Eingaben von Benutzer:innen entgegennehmen. Hier schauen wir uns zwei Methoden an, um Eingaben in JavaScript zu lesen."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Eingaben mit readline"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"readline"}),"-Modul ist eine eingebaute Node.js-Funktion, die es ermöglicht, Zeilen von der Eingabe zu lesen. Das folgende Beispiel fragt den Namen der Person ab und begrüsst sie:"]}),e.jsx(o,{filename:"readline-eingabe.js",children:`const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Was ist dein Name? ', (answer) => {
  console.log('Hallo, ' + answer + '!');
  rl.close();
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Die ",e.jsx("code",{children:"readline"}),"-Methode funktioniert nur in Node.js, nicht im Browser. Du kannst diesen Code mit ",e.jsx("code",{children:"node readline-eingabe.js"}),"ausführen."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Mehrere Eingaben mit readline"}),e.jsxs("p",{children:[e.jsx("code",{children:"rl.question()"})," ist ",e.jsx("em",{children:"asynchron"}),": Der Code nach dem Aufruf läuft sofort weiter, ohne auf die Eingabe zu warten. Wenn du mehrere Werte nacheinander abfragen möchtest, musst du die Aufrufe deshalb ",e.jsx("strong",{children:"verschachteln"})," – die nächste Frage wird erst innerhalb der Callback-Funktion der vorherigen Frage gestellt:"]}),e.jsx(o,{filename:"mehrere-eingaben.js",children:`const readline = require('readline');

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
});`}),e.jsxs("p",{children:["Jede weitere Frage kommt eine Ebene tiefer. Das funktioniert auch mit drei oder mehr Eingaben – wird aber schnell unübersichtlich (man nennt das ",e.jsx("em",{children:"Callback-Hell"}),"):"]}),e.jsx(o,{filename:"drei-eingaben.js",children:`rl.question('Vorname? ', (vorname) => {
  rl.question('Nachname? ', (nachname) => {
    rl.question('Lieblingsfarbe? ', (farbe) => {
      console.log(vorname + ' ' + nachname + ' mag ' + farbe + '.');
      rl.close();
    });
  });
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Die Variablen der äusseren Fragen (",e.jsx("code",{children:"vorname"}),", ",e.jsx("code",{children:"nachname"}),") sind in den inneren Callbacks weiterhin verfügbar. ",e.jsx("code",{children:"rl.close()"})," wird nur",e.jsx("em",{children:" einmal"})," ganz zuletzt aufgerufen, sonst werden die weiteren Fragen nicht mehr gestellt."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Kommandozeilenargumente lesen"}),e.jsx("p",{children:"Eine weitere Möglichkeit, Eingaben zu lesen, ist die Verwendung von Kommandozeilenargumenten. Diese werden beim Start des Programms übergeben:"}),e.jsx(o,{filename:"argumente.js",children:`// Kommandozeilenargumente lesen
// Aufruf: node argumente.js Max 25

const name = process.argv[2];
const alter = process.argv[3];

console.log('Hallo ' + name + '!');
console.log('Du bist ' + alter + ' Jahre alt.');`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Kommandozeilenargumente werden immer als"," ",e.jsx("code",{children:"string"}),"gelesen, auch wenn es Zahlen sind! Wenn du mit Zahlen rechnen möchtest, musst du sie zuerst konvertieren:"]}),e.jsx(o,{filename:"argumente-mit-konvertierung.js",children:`// Kommandozeilenargumente als Zahlen konvertieren
const alter = Number(process.argv[3]);
const alterImNextenJahr = alter + 1;

console.log('Im nächsten Jahr bist du ' + alterImNextenJahr + ' Jahre alt.');`}),e.jsxs("p",{children:["Ohne ",e.jsx("code",{children:"Number()"})," würde ",e.jsx("code",{children:"'25' + 1"})," zu"," ",e.jsx("code",{children:"'251'"}),"führen, da JavaScript die Werte als Text zusammenhängt statt zu addieren."]})]})]})}const ml=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"}));function Dn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe erfüllen. Du kannst ihnen Werte übergeben (Parameter) und sie können Werte zurückgeben."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Funktionen definieren"}),e.jsx(Q,{lang:"javascript",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Pfeilfunktionen (Arrow Functions)"}),e.jsx("p",{children:"Eine kompakte Schreibweise für Funktionen:"}),e.jsx(Q,{lang:"javascript",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Parameter und Rückgabewerte"}),e.jsxs("p",{children:["Funktionen können mehrere Parameter haben. Mit ",e.jsx("code",{children:"return"})," ","gibst du ein Ergebnis zurück. Ohne ",e.jsx("code",{children:"return"})," gibt eine"," ","Funktion ",e.jsx("code",{children:"undefined"})," zurück."]})]})]})}const bl=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"}));function Bn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Objekte"}),e.jsx("p",{children:"Objekte speichern mehrere Werte als Paar von Eigenschaftsnamen und Werten. Sie sind wie kleine Datenbanken, die zusammenhängende Informationen organisieren."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Objekte erstellen"}),e.jsx(Q,{lang:"javascript",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Eigenschaften verändern"}),e.jsx(Q,{lang:"javascript",children:`
// Neue Eigenschaft hinzufügen
person.email = "anna@example.com";

// Eigenschaft verändern
person.alter = 17;

// Eigenschaft löschen
delete person.hobby;
`})]}),e.jsxs(j,{children:[e.jsxs("h2",{children:["Das ",e.jsx("code",{children:"this"})," Keyword"]}),e.jsxs("p",{children:["In Methoden zeigt ",e.jsx("code",{children:"this"})," auf das Objekt selbst. Damit kannst du auf die Eigenschaften des eigenen Objekts zugreifen."]})]})]})}const fl=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"}));function Wn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Funktionales Programmieren"}),e.jsxs("p",{children:["Funktionales Programmieren ist ein Programmierparadigma, bei dem Funktionen erste Bürger sind. Du arbeitest viel mit höherwertigen Funktionen wie ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"}),"."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"map – Alle Elemente verändern"}),e.jsx(Q,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5];

// Jede Zahl verdoppeln
const verdoppelt = zahlen.map(zahl => zahl * 2);
// [2, 4, 6, 8, 10]
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"filter – Elemente auswählen"}),e.jsx(Q,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8];

// Nur gerade Zahlen behalten
const gerade = zahlen.filter(zahl => zahl % 2 === 0);
// [2, 4, 6, 8]
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"reduce – Alles zusammenfassen"}),e.jsx(Q,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5];

// Alle Zahlen addieren
const summe = zahlen.reduce((akkumulator, zahl) => {
  return akkumulator + zahl;
}, 0);
// 15
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Warum funktionales Programmieren?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code wird lesbarer und wartbarer"}),e.jsx("li",{children:"Funktionen sind rein und vorhersagbar"}),e.jsx("li",{children:"Weniger Seiteneffekte"}),e.jsx("li",{children:"Einfacher zu testen"})]})]})]})}const pl=Object.freeze(Object.defineProperty({__proto__:null,default:Wn},Symbol.toStringTag,{value:"Module"}));function Fn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Klassen und Vererbung"}),e.jsx("p",{children:"Klassen sind Baupläne für Objekte. Sie definieren, welche Eigenschaften und Methoden ein Objekt hat. Vererbung ermöglicht es dir, neue Klassen auf bestehenden aufzubauen."})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Klassen definieren"}),e.jsx(Q,{lang:"javascript",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Vererbung mit extends"}),e.jsx(Q,{lang:"javascript",children:`
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
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Überschreiben von Methoden"}),e.jsx("p",{children:"Eine Unterklasse kann Methoden der Oberklasse überschreiben, um ihr eigenes Verhalten zu definieren:"}),e.jsx(Q,{lang:"javascript",children:`
class Hund extends Tier {
  // ...
  
  vorstellung() {
    return \`Wuff! Ich bin \${this.name}, ein Hund.\`;
  }
}
`})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Wichtige Konzepte"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class"})," – definiert eine Klasse"]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor"})," – Initialisierung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"extends"})," – Vererbung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"super"})," – Zugriff auf die Oberklasse"]}),e.jsxs("li",{children:[e.jsx("code",{children:"new"})," – erstellt eine Instanz"]})]})]})]})}const kl=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"}));function t({children:s,area:n="content"}){return e.jsx("div",{className:`scroll-section ${n}`,children:e.jsx("div",{className:"scroll-section-content",children:s})})}function On(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"JS-Repetition"}),e.jsx("p",{children:"Wiederholung der wichtigsten JavaScript-Konzepte: Variablen, Bedingungen, Listen und Schleifen."}),e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("h2",{children:"Repetition"}),e.jsx("p",{children:"Variablen · Bedingungen · Listen · Schleifen"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen"}),e.jsx("p",{children:'Variablen sind "Boxen", in denen wir Werte speichern.'}),e.jsx("div",{className:"cols",children:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"var"})," — alt (global)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"let"})," — neu (block-scope, veränderbar)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"const"})," — neu (block-scope, unveränderbar)"]})]})})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen — Code testen"}),e.jsx(o,{filename:"variablen.js",children:`// Variablen erstellen
let name = "Anna";
const alter = 16;

// Werte ausgeben
console.log("Name:", name);
console.log("Alter:", alter);

// Wert ändern (nur mit let)
name = "Anna Maria";
console.log("Neuer Name:", name);`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Datentypen"}),e.jsx("p",{children:"JavaScript kennt verschiedene Typen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"string"})," — Text (in Anführungszeichen)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"number"})," — Zahlen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"boolean"})," — true oder false"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"array"})," — Liste von Werten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"object"})," — Schlüssel-Wert-Paare"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Datentypen — Code testen"}),e.jsx(o,{filename:"typen.js",children:`// String (Text)
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
console.log(Array.isArray(farben)); // true`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen"}),e.jsx("p",{children:"Bedingungen erlauben es, Code nur auszuführen wenn eine Bedingung erfüllt ist:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if (...)"})," — wenn Bedingung wahr"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else if (...)"})," — weitere Bedingung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"})," — sonst"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Operatoren:"})," ===, !==, <, >, &&, ||"]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen — Code testen"}),e.jsx(o,{filename:"bedingungen.js",children:`let score = 85;

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
console.log(status);`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Listen (Arrays)"}),e.jsx("p",{children:"Eine Liste speichert mehrere Werte unter einem Namen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstellen mit ",e.jsx("code",{children:"[]"})]}),e.jsxs("li",{children:["Index beginnt bei ",e.jsx("strong",{children:"0"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," — Anzahl Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:".push()"})," — Element hinzufügen"]}),e.jsxs("li",{children:[e.jsx("code",{children:".pop()"})," — letztes Element entfernen"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Listen — Code testen"}),e.jsx(o,{filename:"arrays.js",children:`// Liste erstellen
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
});`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen"}),e.jsx("p",{children:"Schleifen wiederholen Code mehrere Male:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"for (let i = 0; i < n; i++)"})}),e.jsx("li",{children:e.jsx("code",{children:"while (Bedingung) { ... }"})}),e.jsxs("li",{children:[e.jsx("code",{children:"for ... of"})," — über Array-Elemente"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen — Code testen"}),e.jsx(o,{filename:"schleifen.js",children:`// for-Schleife
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
}`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Code-Blöcke:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Declaration:"})," ",e.jsx("code",{children:"function name() { ... }"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expression:"})," ",e.jsx("code",{children:"const name = () => { ... }"})]}),e.jsx("li",{children:"Parameter: Werte die man übergibt"}),e.jsx("li",{children:"Return-Wert: Ergebnis zurückgeben"})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen — Code testen"}),e.jsx(o,{filename:"funktionen.js",children:`// Funktion mit Parameter
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
console.log("3 + 4 =", addiere(3, 4));`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variablen:"})," let, const"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Datentypen:"})," string, number, boolean, array, object"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingungen:"})," if, else if, else"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Listen:"})," [], .length, .push()"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schleifen:"})," for, while, for ... of"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," function, =>"]})]})]})})]})}const Sl=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"}));function Pn(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Theorie: Funktionen"}),e.jsx("p",{children:"Funktionen sind eines der wichtigsten Konzepte in JavaScript. Sie erlauben uns, Code-Blöcke zu definieren und wiederzuverwenden. In diesem Kapitel lernen wir, wie man Funktionen erstellt, den Unterschied zwischen normalen Funktionen und Arrow-Funktionen kennen, und wie man Callback-Funktionen verwendet."}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen, wie man eine Funktion mit ",e.jsx("code",{children:"function"})," ","definiert."]}),e.jsx("li",{children:"Sie kennen den Unterschied zwischen normalen Funktionen und Arrow-Funktionen."}),e.jsx("li",{children:"Sie verstehen, was Parameter und Rückgabewerte sind."}),e.jsxs("li",{children:["Sie können ",e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"})," und ",e.jsx("code",{children:"reduce"})," verwenden."]}),e.jsx("li",{children:"Sie wissen, wie man Schleifen mit Callback-Funktionen ersetzt."})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was ist eine Funktion?"}),e.jsxs("p",{children:["Eine Funktion ist ein Block von Code, der einen bestimmten Namen hat und bei Bedarf ausgeführt werden kann. Funktionen können"," ",e.jsx("strong",{children:"Parameter"})," (Eingabewerte) haben und einen"," ",e.jsx("strong",{children:"Rückgabewert"})," (Ausgabewert) liefern."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"function"})," ist das Schlüsselwort zum Definieren"]}),e.jsx("li",{children:"Der Funktionsname benennt die Funktion"}),e.jsxs("li",{children:[e.jsx("code",{children:"(a, b)"})," sind die Parameter"]}),e.jsxs("li",{children:[e.jsx("code",{children:"return"})," gibt einen Wert zurück"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Einfache Funktion ohne Parameter"}),e.jsx(o,{filename:"funktion-definieren.js",children:`
// Funktion definieren
function begruessen() {
  console.log("Hallo Welt!");
}

// Funktion aufrufen
begruessen(); // Ausgabe: "Hallo Welt!"
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Funktion mit Parametern und Rückgabewert"}),e.jsx(o,{filename:"funktion-params.js",children:`
// Funktion mit Parametern definieren
function addiere(a, b) {
  return a + b;
}

// Funktion aufrufen und Ergebnis speichern
let resultat = addiere(5, 3);
console.log(resultat); // Ausgabe: 8
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen vs. Arrow-Funktionen"}),e.jsxs("p",{children:["In JavaScript gibt es zwei Hauptarten, Funktionen zu definieren:"," ",e.jsx("strong",{children:"normale Funktionen"})," und"," ",e.jsx("strong",{children:"Arrow-Funktionen"})," (Pfeil-Funktionen)."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Normale Funktion"}),e.jsx(o,{filename:"normale-funktion.js",children:`
// Normale Funktion definieren
function Quadrat(x) {
  return x * x;
}

console.log(Quadrat(5)); // Ausgabe: 25
`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktion"}),e.jsx(o,{filename:"arrow-funktion.js",children:`
// Arrow-Funktion definieren
const Quadrat = (x) => {
  return x * x;
};

console.log(Quadrat(5)); // Ausgabe: 25
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktionen: Details"}),e.jsx("h4",{children:"Einfache Arrow-Funktion mit einem Parameter"}),e.jsx("p",{children:"Bei einem Parameter können die Klammern weggelassen werden:"}),e.jsx("h4",{children:"Arrow-Funktion ohne Klammern und ohne Block"}),e.jsxs("p",{children:["Wenn die Funktion nur einen Rückgabewert hat, können wir"," ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"})," und ",e.jsx("code",{children:"return"})," ","weglassen:"]}),e.jsx("h4",{children:"Zusammenfassung der Unterschiede"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Merkmal"}),e.jsx("th",{children:"Normale Funktion"}),e.jsx("th",{children:"Arrow-Funktion"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Schlüsselwort"}),e.jsx("td",{children:e.jsx("code",{children:"function"})}),e.jsxs("td",{children:[e.jsx("code",{children:"const"})," / ",e.jsx("code",{children:"let"})," / ",e.jsx("code",{children:"var"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Syntax"}),e.jsxs("td",{children:[e.jsxs("code",{children:["function name() ","{"]})," ",e.jsx("code",{children:"}"})]}),e.jsxs("td",{children:[e.jsxs("code",{children:["const name = () => ","{"]})," ",e.jsx("code",{children:"}"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"this"}),"-Binding"]}),e.jsx("td",{children:"Dynamisch"}),e.jsx("td",{children:"Lexikalisch"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Als Konstruktor"}),e.jsxs("td",{children:["Ja (",e.jsx("code",{children:"new"}),")"]}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"arguments"}),"-Objekt"]}),e.jsx("td",{children:"Ja"}),e.jsx("td",{children:"Nein"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Arrow-Funktionen haben kein eigenes"," ",e.jsx("code",{children:"this"}),". Sie erben ",e.jsx("code",{children:"this"})," vom umgebenden Kontext. Das ist besonders nützlich in Callbacks und Event-Handlern."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktionen: Code testen"}),e.jsx("h4",{children:"Mit und ohne Klammern"}),e.jsx(o,{filename:"arrow-einfach.js",children:`
// Mit Klammern
const verdoppeln = (x) => {
  return x * 2;
};

// Ohne Klammern bei einem Parameter
const verdoppeln = x => x * 2;
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Vollständige vs. Kurzschreibweise"}),e.jsx(o,{filename:"arrow-kurz.js",children:`
// Vollständige Schreibweise
const begruessen = (name) => {
  return "Hallo " + name;
};

// Kurzschreibweise (impliziter Return)
const begruessen = (name) => "Hallo " + name;
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callback-Funktionen"}),e.jsxs("p",{children:["Eine ",e.jsx("strong",{children:"Callback-Funktion"})," ist eine Funktion, die als Argument an eine andere Funktion übergeben wird. Die aufgerufene Funktion kann dann den Callback zu einem bestimmten Zeitpunkt ausführen."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callback-Funktion — Code testen"}),e.jsx(o,{filename:"callback-beispiel.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"forEach - Elemente durchgehen"}),e.jsxs("p",{children:[e.jsx("code",{children:"forEach"})," führt eine Funktion für jedes Element eines Arrays aus."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Unterschied zur for-Schleife:"})," ",e.jsx("code",{children:"forEach"})," ","ist kürzer und lesbarer. Die normale Schleife gibt Ihnen mehr Kontrolle (z.B. frühes Beenden mit ",e.jsx("code",{children:"break"}),")."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"forEach — Code testen"}),e.jsx("h4",{children:"Mit forEach"}),e.jsx(o,{filename:"forEach-beispiel.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(o,{filename:"for-schleife-vergleich.js",children:`
const namen = ["Anna", "Beat", "Claudia", "Daniel"];

// for-Schleife
for (let i = 0; i < namen.length; i++) {
  console.log((i + 1) + ": " + namen[i]);
}
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"map - Array transformieren"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"})," erstellt ein neues Array, indem die Callback-Funktion auf jedes Element angewendet wird."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," ",e.jsx("code",{children:"map"})," verändert das Original-Array ",e.jsx("strong",{children:"nicht"}),". Es erstellt immer ein neues Array."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — Code testen"}),e.jsx("h4",{children:"Mit map"}),e.jsx(o,{filename:"map-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// map: Jedes Element verdoppeln
const verdoppelte = zahlen.map((zahl) => {
  return zahl * 2;
});

console.log(verdoppelte); // [2, 4, 6, 8, 10]
console.log(zahlen);      // [1, 2, 3, 4, 5] (original bleibt unverändert)
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(o,{filename:"map-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife mit neuem Array
const verdoppelte = [];
for (let i = 0; i < zahlen.length; i++) {
  verdoppelte.push(zahlen[i] * 2);
}

console.log(verdoppelte); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: HTML-Elemente erstellen"}),e.jsx(o,{filename:"map-html-beispiel.js",children:`
const namen = ["Anna", "Beat", "Claudia"];

// Jedes Element als HTML-Listenelement
const liElemente = namen.map((name) => {
  return "<li>" + name + "</li>";
});

const ulElement = "<ul>" + liElemente.join("") + "</ul>";
console.log(ulElement);
// <ul><li>Anna</li><li>Beat</li><li>Claudia</li></ul>
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter - Elemente herausfiltern"}),e.jsxs("p",{children:[e.jsx("code",{children:"filter"})," erstellt ein neues Array mit allen Elementen, die die Bedingung erfüllen."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Code testen"}),e.jsx("h4",{children:"Mit filter"}),e.jsx(o,{filename:"filter-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Nur gerade Zahlen filtern
const geradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 === 0;
});

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(o,{filename:"filter-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for-Schleife mit neuem Array
const geradeZahlen = [];
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: Namen filtern"}),e.jsx(o,{filename:"filter-objekte.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce - Werte zusammenrechnen"}),e.jsxs("p",{children:[e.jsx("code",{children:"reduce"})," reduziert ein Array auf einen einzelnen Wert. Es ist sehr flexibel und wird für Berechnungen, Gruppierungen und Transformationen verwendet."]}),e.jsx("p",{children:e.jsx("strong",{children:"Erklärung:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"accumulator"})," ist der gesammelte Wert (wächst mit jedem Schritt)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"zahl"})," ist das aktuelle Element"]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," ist der Startwert des Akkumulators"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — Code testen"}),e.jsx("h4",{children:"Mit reduce"}),e.jsx(o,{filename:"reduce-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// Summe berechnen
const summe = zahlen.reduce((accumulator, zahl) => {
  return accumulator + zahl;
}, 0); // 0 ist der Startwert

console.log(summe); // 15
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"reduce Schritt für Schritt"}),e.jsx(o,{filename:"reduce-schritte.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// reduce berechnet:
// Schritt 1: 0 + 1 = 1
// Schritt 2: 1 + 2 = 3
// Schritt 3: 3 + 3 = 6
// Schritt 4: 6 + 4 = 10
// Schritt 5: 10 + 5 = 15
// Ergebnis: 15
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(o,{filename:"reduce-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife
let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
  summe = summe + zahlen[i];
}

console.log(summe); // 15
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: Produkt berechnen"}),e.jsx(o,{filename:"reduce-produkt.js",children:`
const zahlen = [2, 3, 4, 5];

// Produkt aller Zahlen
const produkt = zahlen.reduce((accumulator, zahl) => {
  return accumulator * zahl;
}, 1); // Startwert ist 1 (neutrales Element der Multiplikation)

console.log(produkt); // 120 (2 * 3 * 4 * 5)
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"reduce mit Objekten"}),e.jsx(o,{filename:"reduce-objekte.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vergleich: Alle Methoden im Überblick"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Zweck"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Verändert Original?"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"forEach"})}),e.jsx("td",{children:"Code für jedes Element ausführen"}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"map"})}),e.jsx("td",{children:"Element transformieren"}),e.jsx("td",{children:"Neues Array"}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"filter"})}),e.jsx("td",{children:"Elemente herausfiltern"}),e.jsx("td",{children:"Neues Array"}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"reduce"})}),e.jsx("td",{children:"Werte zusammenrechnen"}),e.jsx("td",{children:"Einzelner Wert"}),e.jsx("td",{children:"Nein"})]})]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kombinierte Beispiele"}),e.jsx("p",{children:"Oft werden mehrere Methoden kombiniert:"})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kombinierte Beispiele — Code testen"}),e.jsx("h3",{children:"Beispiel: Namen filtern und transformieren"}),e.jsx(o,{filename:"kombiniert-filter-map.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Beispiel: Summe der Noten von erwachsenen Schülern"}),e.jsx(o,{filename:"kombiniert-filter-reduce.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Methode verwenden?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"forEach"})}),": Wenn Sie etwas mit jedem Element tun möchten (z.B. DOM-Elemente erstellen, console.log)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"map"})}),": Wenn Sie ein neues Array mit transformierten Werten brauchen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"filter"})}),": Wenn Sie eine Teilmenge des Arrays brauchen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"reduce"})}),": Wenn Sie einen einzelnen Wert aus dem Array berechnen wollen"]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("p",{children:["Funktionen sind ein fundamentales Konzept in JavaScript. Sie erlauben uns, Code zu organisieren und wiederzuverwenden. Der Unterschied zwischen normalen Funktionen und Arrow-Funktionen liegt vor allem in der Syntax und im Verhalten von ",e.jsx("code",{children:"this"}),". Callback-Funktionen sind Funktionen, die als Argument übergeben werden, und werden häufig bei Array-Methoden wie"," ",e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"})," verwendet. Diese Methoden machen den Umgang mit Arrays viel eleganter und lesbarer als normale Schleifen."]})]})})]})}const zl=Object.freeze(Object.defineProperty({__proto__:null,default:Pn},Symbol.toStringTag,{value:"Module"}));function Zn(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Theorie: Objekte"}),e.jsxs("p",{children:["Objekte sind eines der wichtigsten Datenstrukturen in JavaScript. Sie erlauben uns, komplexe Daten in Form von ",e.jsx("strong",{children:"Schlüssel-Wert-Paaren"})," ","zu organisieren. In diesem Kapitel lernen wir, wie man Objekte erstellt, auf ihre Eigenschaften zugreift, sie iteriert, neue Objekte erstellt und wie man die spezielle JavaScript-Syntax für Spread und Dekomposition verwendet."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen, wie man ein Objekt mit ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"})," definiert."]}),e.jsx("li",{children:"Sie können auf Eigenschaften mit Punkt- und Klammernotation zugreifen."}),e.jsxs("li",{children:["Sie verstehen, wie man mit ",e.jsx("code",{children:"Object.keys()"}),","," ",e.jsx("code",{children:"Object.values()"})," und ",e.jsx("code",{children:"for...in"})," über Objekte iteriert."]}),e.jsxs("li",{children:["Sie können Objekte mit der ",e.jsx("code",{children:"spread"}),"-Syntax kopieren und erweitern."]}),e.jsxs("li",{children:["Sie verstehen die ",e.jsx("code",{children:"decomposition"}),"-Syntax zum Herauslesen von Eigenschaften."]}),e.jsx("li",{children:"Sie können Funktionen schreiben, die neue Objekte erstellen und zurückgeben."})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was ist ein Objekt?"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Objekt"})," ist eine Sammlung von"," ",e.jsx("strong",{children:"Schlüssel-Wert-Paaren"}),". Jeder Schlüssel ist ein String (oder Symbol) und jeder Wert kann ein beliebiger JavaScript-Typ sein — eine Zahl, ein String, ein Array, eine Funktion oder sogar ein anderes Objekt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"{"})," und ",e.jsx("code",{children:"}"})," definieren das Objekt"]}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"Schlüssel"})," (links vom ",e.jsx("code",{children:":"}),") benennt die Eigenschaft"]}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"Wert"})," (rechts vom ",e.jsx("code",{children:":"}),") ist der gespeicherte Wert"]}),e.jsxs("li",{children:["Kommas ",e.jsx("code",{children:","})," trennen die Schlüssel-Wert-Paare"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Vergleich mit Arrays:"})," Arrays verwenden numerische Indizes, während Objekte benannte Schlüssel verwenden. Arrays sind für geordnete Listen, Objekte für strukturierte Daten."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Ein einfaches Objekt erstellen"}),e.jsx(o,{filename:"objekt-erstellen.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Objekt mit einer Funktion als Wert"}),e.jsx(o,{filename:"objekt-methode.js",children:`
// Eine Funktion als Wert (auch "Methode" genannt)
const calculator = {
  addiere: function(a, b) {
    return a + b;
  },
  subtrahiere: (a, b) => a - b
};

console.log(calculator.addiere(5, 3)); // 8
console.log(calculator.subtrahiere(10, 4)); // 6
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zugriff auf Eigenschaften"}),e.jsxs("p",{children:["Es gibt zwei Arten, auf die Eigenschaften eines Objekts zuzugreifen:"," ",e.jsx("strong",{children:"Punkt-Notation"})," und ",e.jsx("strong",{children:"Klammernotation"}),"."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Punkt-Notation"}),e.jsx("p",{children:"Die Punkt-Notation ist die einfachste Art, wenn der Schlüssel ein gültiger Bezeichner ist:"}),e.jsx(o,{filename:"punkt-notation.js",children:`
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
`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Klammernotation"}),e.jsx("p",{children:"Die Klammernotation wird verwendet, wenn der Schlüssel ein Ausdruck ist oder kein gültiger Bezeichner:"}),e.jsx(o,{filename:"klammer-notation.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Punkt- vs. Klammernotation"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Merkmal"}),e.jsx("th",{children:"Punkt-Notation"}),e.jsx("th",{children:"Klammernotation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Syntax"}),e.jsx("td",{children:e.jsx("code",{children:"obj.key"})}),e.jsx("td",{children:e.jsx("code",{children:'obj["key"]'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dynamische Schlüssel"}),e.jsx("td",{children:"Nein"}),e.jsx("td",{children:"Ja"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spezielle Zeichen"}),e.jsx("td",{children:"Nein"}),e.jsx("td",{children:"Ja"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Autocomplete"}),e.jsx("td",{children:"Ja"}),e.jsx("td",{children:"Nein"})]})]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Eigenschaften hinzufügen und entfernen"}),e.jsx(o,{filename:"eigenschaften-aendern.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Über Objekte iterieren"}),e.jsx("p",{children:"Es gibt mehrere Möglichkeiten, über die Eigenschaften eines Objekts zu iterieren:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys(obj)"})," — gibt ein Array aller Schlüssel zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.values(obj)"})," — gibt ein Array aller Werte zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.entries(obj)"})," — gibt ein Array von"," ",e.jsx("code",{children:"[key, value]"}),"-Paaren zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...in"})," — Schleife über alle Schlüssel"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Object.keys(), Object.values(), Object.entries()"}),e.jsx(o,{filename:"object-methoden.js",children:`
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
`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"for...in Schleife"}),e.jsx(o,{filename:"for-in.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Welche Iterations-Methode verwenden?"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Verwendung"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.keys()"})}),e.jsx("td",{children:"Array von Schlüsseln"}),e.jsx("td",{children:"Wenn Sie die Namen der Eigenschaften brauchen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.values()"})}),e.jsx("td",{children:"Array von Werten"}),e.jsx("td",{children:"Wenn Sie nur die Werte brauchen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.entries()"})}),e.jsx("td",{children:"Array von [key, value]"}),e.jsx("td",{children:"Wenn Sie beide brauchen, z.B. für map/filter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"for...in"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Wenn Sie jede Eigenschaft einzeln verarbeiten"})]})]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread-Syntax (...)"}),e.jsxs("p",{children:["Die ",e.jsx("strong",{children:"Spread-Syntax"})," (",e.jsx("code",{children:"..."}),') ermöglicht es, ein Objekt zu "expandieren" — also seine Eigenschaften an einer anderen Stelle einzufügen. Damit können wir Objekte kopieren und erweitern, ohne das Original zu verändern.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Copy:"})," ",e.jsxs("code",{children:["{","...obj","}"]})," erstellt eine flache Kopie"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extend:"})," ",e.jsxs("code",{children:["{","...obj, neu: wert","}"]})," ","fügt neue Eigenschaften hinzu"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Merge:"})," ",e.jsxs("code",{children:["{","...obj1, ...obj2","}"]})," verbindet zwei Objekte"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Die Spread-Syntax erstellt nur eine"," ",e.jsx("strong",{children:"flache Kopie"}),". Verschachtelte Objekte werden nicht kopiert, sondern referenziert."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Objekte kopieren und erweitern"}),e.jsx(o,{filename:"spread-beispiel.js",children:`
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
`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Vorsicht bei verschachtelten Objekten"}),e.jsx(o,{filename:"spread-verschachtelt.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Dekomposition (Destructuring)"}),e.jsxs("p",{children:["Die ",e.jsx("strong",{children:"Dekomposition"})," (",e.jsx("code",{children:"destructure"}),") ist die"," ",e.jsx("strong",{children:"umgekehrte Operation"}),' zur Spread-Syntax. Statt Eigenschaften zu "expandieren", "extrahieren" wir sie aus einem Objekt und weisen sie Variablen zu.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Extrahieren:"})," ",e.jsxs("code",{children:["const ","{"," name, alter ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Umbenennen:"})," ",e.jsxs("code",{children:["const ","{"," name: n ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default-Werte:"})," ",e.jsxs("code",{children:["const ","{"," alter = 0 ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rest-Properties:"})," ",e.jsxs("code",{children:["const ","{"," name, ...rest ","}"," = person;"]})]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Dekomposition — Code testen"}),e.jsx(o,{filename:"dekomposition-beispiel.js",children:`
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
`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Rest-Properties mit Dekomposition"}),e.jsx(o,{filename:"dekomposition-rest.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread vs. Dekomposition"}),e.jsxs("p",{children:["Spread und Dekomposition sind ",e.jsx("strong",{children:"komplementäre Operationen"}),":"]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aktion"}),e.jsx("th",{children:"Syntax"}),e.jsx("th",{children:"Richtung"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Expandieren"}),e.jsx("td",{children:e.jsxs("code",{children:["{","...obj","}"]})}),e.jsx("td",{children:"Objekt → Eigenschaften"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extrahieren"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," key ","}"," = obj;"]})}),e.jsx("td",{children:"Eigenschaften → Variable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Kopieren"}),e.jsx("td",{children:e.jsxs("code",{children:["const kopie = ","{","...obj","}"]})}),e.jsx("td",{children:"Objekt → neues Objekt"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Rest-Eigenschaften"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," a, ...rest ","}"," = obj;"]})}),e.jsx("td",{children:"Bestimmte → Rest"})]})]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen die neue Objekte erstellen"}),e.jsx("p",{children:"Eine häufige Aufgabe ist es, Funktionen zu schreiben, die basierend auf Eingabeparametern neue Objekte erstellen und zurückgeben. Das ist besonders nützlich für:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Factory-Funktionen:"})," Erstellen von Objekten nach einem Muster"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transformations-Funktionen:"})," Ändern von Objekten und Zurückgeben neuer Instanzen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kombinations-Funktionen:"})," Verbinden mehrerer Objekte"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bester Stil:"})," Verwenden Sie die Spread-Syntax, um neue Objekte zu erstellen, statt das Original zu verändern. Das macht den Code vorhersehbarer und vermeidet Seiteneffekte."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Factory-Funktion: Personen erstellen"}),e.jsx(o,{filename:"factory-funktion.js",children:`
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
`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Transformations-Funktion: Neues Objekt erstellen"}),e.jsx(o,{filename:"transformations-funktion.js",children:`
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
`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte vs. Arrays"}),e.jsx("p",{children:"Wann verwenden wir ein Objekt und wann ein Array? Oft werden beide kombiniert:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Kriterium"}),e.jsx("th",{children:"Objekt"}),e.jsx("th",{children:"Array"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Struktur"}),e.jsx("td",{children:"Schlüssel-Wert-Paare"}),e.jsx("td",{children:"Geordnete Liste"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Zugriff"}),e.jsx("td",{children:e.jsx("code",{children:"obj.name"})}),e.jsx("td",{children:e.jsx("code",{children:"arr[0]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Grösse"}),e.jsx("td",{children:"Dynamisch"}),e.jsx("td",{children:e.jsx("code",{children:"arr.length"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Iteration"}),e.jsxs("td",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"for...in"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Beispiel"}),e.jsx("td",{children:"Person, Adresse"}),e.jsx("td",{children:"Liste von Personen"})]})]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung der Konzepte"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Konzept"}),e.jsx("th",{children:"Syntax"}),e.jsx("th",{children:"Zweck"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Objekt erstellen"}),e.jsx("td",{children:e.jsxs("code",{children:["{"," key: value ","}"]})}),e.jsx("td",{children:"Schlüssel-Wert-Paare speichern"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eigenschaft lesen"}),e.jsxs("td",{children:[e.jsx("code",{children:"obj.key"})," oder ",e.jsx("code",{children:'obj["key"]'})]}),e.jsx("td",{children:"Auf Werte zugreifen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eigenschaft setzen"}),e.jsx("td",{children:e.jsx("code",{children:"obj.key = value"})}),e.jsx("td",{children:"Werte ändern oder hinzufügen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Iterieren"}),e.jsxs("td",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"for...in"})]}),e.jsx("td",{children:"Alle Eigenschaften durchgehen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spread"}),e.jsx("td",{children:e.jsxs("code",{children:["{","...obj","}"]})}),e.jsx("td",{children:"Objekt kopieren/erweitern"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dekomposition"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," key ","}"," = obj;"]})}),e.jsx("td",{children:"Werte extrahieren"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Factory-Funktion"}),e.jsx("td",{children:e.jsxs("code",{children:["function create() ","{"," return obj ","}"]})}),e.jsx("td",{children:"Neue Objekte erstellen"})]})]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Technik verwenden?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Punkt-Notation:"})," Wenn der Schlüssel bekannt und ein gültiger Bezeichner ist (am häufigsten verwendet)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Klammernotation:"})," Wenn der Schlüssel dynamisch ist oder Sonderzeichen enthält"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object.keys/values/entries:"})," Wenn Sie alle Eigenschaften programmatisch durchgehen müssen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread:"})," Wenn Sie ein Objekt kopieren oder erweitern möchten, ohne das Original zu verändern"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition:"})," Wenn Sie bestimmte Eigenschaften aus einem Objekt extrahieren und in Variablen speichern möchten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Factory-Funktionen:"})," Wenn Sie mehrere Objekte nach demselben Muster erstellen möchten"]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("p",{children:["Objekte sind die grundlegende Datenstruktur in JavaScript für"," ",e.jsx("strong",{children:"benannte Eigenschaften"}),". Sie erstellen Objekte mit"," ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"}),", greifen mit Punkt- oder Klammernotation darauf zu und iterieren mit"," ",e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"Object.values()"}),","," ",e.jsx("code",{children:"Object.entries()"})," oder ",e.jsx("code",{children:"for...in"}),". Die"," ",e.jsx("strong",{children:"Spread-Syntax"})," (",e.jsx("code",{children:"..."}),") ermöglicht das Kopieren und Erweitern von Objekten, während die"," ",e.jsx("strong",{children:"Dekomposition"})," das Extrahieren von Eigenschaften in Variablen erlaubt. Funktionen, die neue Objekte erstellen,"," ",e.jsx("strong",{children:"Factory-Funktionen"})," genannt, sind ein wichtiges Muster, um Objekte nach einem bestimmten Schema zu erzeugen. Spread und Dekomposition sind komplementäre Operationen und gehören zu den mächtigsten Werkzeugen im modernen JavaScript."]})]})})]})}const wl=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"}));function Mn(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben: Objekte, Spread und Dekomposition"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie 10 kleine Programmieraufgaben zu JavaScript-Objekten. Sie decken die zentralen Konzepte ab:",e.jsx("strong",{children:"Objekte erstellen"}),", ",e.jsx("strong",{children:"Eigenschaften zugreifen"}),",",e.jsx("strong",{children:"über Objekte iterieren"}),", ",e.jsx("strong",{children:"Spread-Syntax"}),",",e.jsx("strong",{children:"Dekomposition"})," und ",e.jsx("strong",{children:"Factory-Funktionen"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen oder Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte durch eigenes Ausprobieren zu verstehen."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Abgabe über GitHub"}),e.jsx("p",{children:"Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie diesen Schritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstellen Sie in Ihrem Repository einen Ordner"," ",e.jsx("code",{children:"aufgaben-objekte"})]}),e.jsxs("li",{children:["Speichern Sie jede Aufgabe als eigene ",e.jsx("code",{children:".js"}),"-Datei (z.B.",e.jsx("code",{children:"01-person-erstellen.js"}),")"]}),e.jsx("li",{children:"Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht"}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"letzte Commit"})," muss die Nachricht"," ",e.jsx("code",{children:"Arbeitsauftrag Objekte bearbeitet"})," enthalten"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Beispiel:"})}),e.jsx("pre",{children:e.jsx("code",{children:`git add .
git commit -m "Arbeitsauftrag Objekte bearbeitet"`})})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Person-Objekt erstellen
// Was ich gemacht habe: Objekt mit Schlüssel-Wert-Paaren definiert
// Was ich gelernt habe: Eigenschaften mit Punkt-Notation zugänglich
// Schwierigkeit: leicht`})}),e.jsxs("p",{children:["Sie können auch eine ",e.jsx("code",{children:"README.md"})," im Ordner"," ",e.jsx("code",{children:"aufgaben-objekte"})," erstellen, wo Sie alle Aufgaben auflisten."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Person-Objekt erstellen"}),e.jsxs("p",{children:["Erstellen Sie ein Objekt ",e.jsx("code",{children:"person"})," mit den Eigenschaften",e.jsx("code",{children:"name"})," (String), ",e.jsx("code",{children:"alter"})," (Zahl),",e.jsx("code",{children:"adresse"})," (verschachteltes Objekt mit ",e.jsx("code",{children:"strasse"}),"und ",e.jsx("code",{children:"plz"}),") und ",e.jsx("code",{children:"faecher"})," (Array mit Strings). Geben Sie das Objekt mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Eigenschaften mit Punkt- und Klammernotation"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"produkt"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"gewicht"})," und"," ",e.jsx("code",{children:'"erste-kauft"'})," (Schlüssel mit Bindestrich). Lesen Sie alle vier Eigenschaften — zuerst mit Punkt-Notation, anschliessend mit Klammernotation. Ändern Sie den ",e.jsx("code",{children:"preis"}),"um 10% und geben Sie das Ergebnis aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Eigenschaften hinzufügen und entfernen"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"schueler"})," mit den Eigenschaften",e.jsx("code",{children:"name"})," und ",e.jsx("code",{children:"klasse"}),". Fügen Sie dynamisch die Eigenschaften ",e.jsx("code",{children:"note"})," (Zahl) und ",e.jsx("code",{children:"telefon"}),"(String) hinzu. Entfernen Sie anschliessend die Eigenschaft"," ",e.jsx("code",{children:"klasse"})," mit ",e.jsx("code",{children:"delete"}),". Prüfen Sie mit"," ",e.jsx("code",{children:"in"}),", ob ",e.jsx("code",{children:"klasse"})," noch existiert."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Object.keys/values/entries verwenden"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"person"})," mit mindestens vier Eigenschaften. Verwenden Sie ",e.jsx("code",{children:"Object.keys()"}),",",e.jsx("code",{children:"Object.values()"})," und ",e.jsx("code",{children:"Object.entries()"}),", um die Schlüssel, Werte und Paare zu erhalten. Geben Sie jedes Ergebnis aus. Verwenden Sie ",e.jsx("code",{children:"forEach"})," über ",e.jsx("code",{children:"Object.entries()"}),", um ",e.jsx("code",{children:'"Schlüssel: Wert"'})," auszugeben."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: for...in Schleife"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"warenkorb"})," mit mindestens fünf Eigenschaften (jeweils Artikelname als Schlüssel und Preis als Wert). Verwenden Sie eine ",e.jsx("code",{children:"for...in"}),"-Schleife, um alle Artikel und Preise auszugeben. Berechnen Sie gleichzeitig die Gesamtsumme."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Spread — Objekt kopieren und erweitern"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"person"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"alter"})," und ",e.jsx("code",{children:"stadt"}),". Erstellen Sie mit der Spread-Syntax eine Kopie ",e.jsx("code",{children:"personNeu"}),". Fügen Sie in der Kopie die neue Eigenschaft ",e.jsx("code",{children:"beruf"})," hinzu und ändern Sie den ",e.jsx("code",{children:"alter"})," um 1. Prüfen Sie, dass das Original"," ",e.jsx("code",{children:"person"})," unverändert bleibt."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Spread — Objekte verbinden"}),e.jsxs("p",{children:["Definieren Sie zwei Objekte: ",e.jsx("code",{children:"adresse"})," (mit"," ",e.jsx("code",{children:"strasse"}),", ",e.jsx("code",{children:"plz"}),", ",e.jsx("code",{children:"ort"}),") und"," ",e.jsx("code",{children:"kontakt"})," (mit ",e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"telefon"}),"). Verbinden Sie beide Objekte mit der Spread-Syntax zu einem neuen Objekt ",e.jsx("code",{children:"profil"}),". Überschreiben Sie dabei den ",e.jsx("code",{children:"ort"}),"mit einem neuen Wert. Geben Sie das Resultat aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Dekomposition — Eigenschaften extrahieren"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"produkt"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"gewicht"})," und"," ",e.jsx("code",{children:"kategorie"}),". Verwenden Sie Dekomposition, um ",e.jsx("code",{children:"name"}),"und ",e.jsx("code",{children:"preis"})," direkt in Variablen zu extrahieren. Extrahieren Sie anschliessend nur ",e.jsx("code",{children:"kategorie"})," und speichern Sie den Rest in ",e.jsx("code",{children:"rest"}),". Geben Sie alle Ergebnisse aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Factory-Funktion — Objekte erstellen"}),e.jsxs("p",{children:["Schreiben Sie eine Factory-Funktion ",e.jsx("code",{children:"erstelleProdukt(name, preis, kategorie)"}),", die ein Produkt-Objekt zurückgibt mit den Eigenschaften"," ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"kategorie"}),","," ",e.jsx("code",{children:"mwst"})," (immer 8.1%) und ",e.jsx("code",{children:"preisMitMwst"})," (berechnete Funktion, die den Preis mit MwSt. zurückgibt). Erstellen Sie drei verschiedene Produkte und geben Sie sie aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Kombinierte Aufgabe — Datenverwaltung"}),e.jsxs("p",{children:["Definieren Sie ein Array ",e.jsx("code",{children:"personen"})," mit mindestens vier Personen-Objekten (jeweils ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"alter"}),","," ",e.jsx("code",{children:"stadt"}),"). Schreiben Sie eine Funktion"," ",e.jsx("code",{children:"erwachseneErstellen(pers)"}),", die nur die Personen ab"," ",e.jsx("strong",{children:"18"})," Jahren auswählt und für jede ein neues Objekt erstellt mit:",e.jsx("br",{}),e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"stadt"})," und"," ",e.jsx("code",{children:"status"})," (",e.jsx("code",{children:'"Erwachsen"'})," oder"," ",e.jsx("code",{children:'"Minderjährig"'}),"). Verwenden Sie dabei ",e.jsx("code",{children:"filter"}),","," ",e.jsx("code",{children:"map"})," und die Spread-Syntax."]})]})]})]})}const vl=Object.freeze(Object.defineProperty({__proto__:null,default:Mn},Symbol.toStringTag,{value:"Module"}));function _n(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Repetition: Funktionen und Objekte"}),e.jsx("p",{children:"Wiederholung der wichtigsten Konzepte aus Woche 2: Funktionen, Parameter, Rückgabewerte, Callbacks, Objekte, Spread und Dekomposition."}),e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("h2",{children:"Repetition"}),e.jsx("p",{children:"Funktionen · Callbacks · Objekte · Spread · Dekomposition"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsxs("p",{children:["Eine Funktion ist ein Stück Code, das einen ",e.jsx("strong",{children:"Namen"})," ","hat und immer wieder aufgerufen werden kann."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Parameter"})," — die Werte, die hineingehen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rumpf"})," — was die Funktion tut"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"return"})," — der Wert, der herauskommt"]})]}),e.jsxs("p",{children:["Merksatz: Eine Funktion ist eine ",e.jsx("em",{children:"Maschine"}),". Oben kommt etwas hinein, unten kommt ein Resultat heraus."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen — Code testen"}),e.jsx(o,{filename:"funktionen.js",children:`// Funktionsdeklaration
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
console.log(nichts()); // undefined`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen als Werte (Callbacks)"}),e.jsxs("p",{children:["In JavaScript sind Funktionen ganz normale Werte. Man kann sie in Variablen speichern und an andere Funktionen übergeben. Eine Funktion, die man übergibt, heisst ",e.jsx("strong",{children:"Callback"}),"."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"forEach"})," — für jedes Element etwas tun"]}),e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — jedes Element umwandeln (neue Liste)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — Elemente aussortieren (neue Liste)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — alles zu einem Wert zusammenfassen"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callbacks — Code testen"}),e.jsx(o,{filename:"callbacks.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte"}),e.jsxs("p",{children:["Ein Objekt speichert Daten als ",e.jsx("strong",{children:"Schlüssel-Wert-Paare"}),". Damit gehören zusammengehörende Informationen in ",e.jsx("em",{children:"eine"})," ","Variable."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstellen mit ",e.jsx("code",{children:"{ }"})]}),e.jsxs("li",{children:["Zugriff mit ",e.jsx("code",{children:"objekt.schluessel"})," oder"," ",e.jsx("code",{children:'objekt["schluessel"]'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"Object.values()"}),","," ",e.jsx("code",{children:"Object.entries()"})]}),e.jsx("li",{children:"Objekte können Objekte und Arrays enthalten (verschachtelt)"})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte — Code testen"}),e.jsx(o,{filename:"objekte.js",children:`const person = {
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
});`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread und Dekomposition"}),e.jsx("p",{children:"Zwei sehr praktische Schreibweisen, die uns diese Woche bei den Algorithmen begleiten:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Spread"})," ",e.jsx("code",{children:"..."})," — packt den Inhalt aus: kopieren, zusammenfügen, erweitern"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition"})," — holt Werte direkt in Variablen"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig für Algorithmen:"})," Mit"," ",e.jsx("code",{children:"const kopie = [...liste]"})," arbeiten wir auf einer Kopie und verändern das Original nicht."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread und Dekomposition — Code testen"}),e.jsx(o,{filename:"spread-dekomposition.js",children:`// Arrays kopieren und verbinden
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
console.log(liste); // [3, 5, 8]`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Aufwärmen — alles zusammen"}),e.jsx("p",{children:"Diese kleine Funktion braucht alles, was wir wiederholt haben. Sie ist der Einstieg in die Algorithmen dieser Woche."}),e.jsx(o,{filename:"aufwaermen.js",children:`const schueler = [
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

console.log(besteNote(schueler));`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," Parameter hinein, ",e.jsx("code",{children:"return"})," ","heraus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrow-Funktionen:"})," ",e.jsx("code",{children:"(x) => x * x"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Callbacks:"})," forEach, map, filter, reduce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekte:"})," Schlüssel-Wert-Paare, verschachtelbar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread:"})," ",e.jsx("code",{children:"[...liste]"}),","," ",e.jsx("code",{children:"{ ...objekt }"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition:"})," ",e.jsxs("code",{children:["const ","{ name }"," = person"]}),","," ",e.jsx("code",{children:"[a, b] = [b, a]"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Nächster Schritt:"})," Wir bauen daraus Algorithmen — Rezepte, die ein Problem Schritt für Schritt lösen."]})]})})]})}const Al=Object.freeze(Object.defineProperty({__proto__:null,default:_n},Symbol.toStringTag,{value:"Module"})),Tn="_container_3h59p_1",Kn="_title_3h59p_9",In="_inputRow_3h59p_17",Ln="_inputLabel_3h59p_26",Cn="_input_3h59p_17",Vn="_smallButton_3h59p_47",Gn="_stage_3h59p_63",Hn="_bars_3h59p_69",Rn="_barSlot_3h59p_77",$n="_bar_3h59p_69",Jn="_barValue_3h59p_101",Un="_barIndex_3h59p_108",qn="_compare_3h59p_115",Qn="_swap_3h59p_119",Xn="_sorted_3h59p_123",Yn="_pivot_3h59p_127",es="_found_3h59p_131",ns="_dimmed_3h59p_135",ss="_description_3h59p_141",is="_stepBadge_3h59p_148",rs="_vars_3h59p_158",ls="_varChip_3h59p_165",ts="_controls_3h59p_175",cs="_button_3h59p_182",ds="_play_3h59p_201",as="_pause_3h59p_207",hs="_slider_3h59p_213",os="_legend_3h59p_221",us="_legendItem_3h59p_230",js="_dot_3h59p_236",xs="_dimmedDot_3h59p_243",gs="_code_3h59p_250",ms="_codeLine_3h59p_261",bs="_activeLine_3h59p_268",fs="_lineNo_3h59p_274",w={container:Tn,title:Kn,inputRow:In,inputLabel:Ln,input:Cn,smallButton:Vn,stage:Gn,bars:Hn,barSlot:Rn,bar:$n,barValue:Jn,barIndex:Un,compare:qn,swap:Qn,sorted:Xn,pivot:Yn,found:es,dimmed:ns,description:ss,stepBadge:is,vars:rs,varChip:ls,controls:ts,button:cs,play:ds,pause:as,slider:hs,legend:os,legendItem:us,dot:js,dimmedDot:xs,code:gs,codeLine:ms,activeLine:bs,lineNo:fs};function ue({initialArray:s=[5,3,8,1,9,2],generate:n,title:r,code:l=null,editable:c=!0,speed:d=700,legend:u="sort"}){const[a,h]=S.useState(s),[z,N]=S.useState(s.join(", ")),[x,b]=S.useState(0),[E,p]=S.useState(!1),y=S.useRef(null),g=S.useMemo(()=>{try{const v=n(a);return Array.isArray(v)&&v.length>0?v:[{array:a,description:"Keine Schritte"}]}catch{return[{array:a,description:"Fehler beim Erzeugen der Schritte"}]}},[a,n]),f=g.length,D=g[Math.min(x,f-1)]??{},O=D.array??a,T=Math.max(1,...O.map(v=>Math.abs(Number(v)||0))),I=S.useCallback(()=>p(!1),[]);S.useEffect(()=>{if(E)return y.current=setInterval(()=>{b(v=>v>=f-1?(p(!1),v):v+1)},d),()=>clearInterval(y.current)},[E,d,f]),S.useEffect(()=>{b(0),p(!1)},[g]);const K=()=>{const v=z.split(",").map(m=>Number.parseInt(m.trim(),10)).filter(m=>!Number.isNaN(m));if(v.length<2||v.length>12){N(a.join(", "));return}h(v)},L=()=>{const v=[...a];for(let m=v.length-1;m>0;m--){const F=Math.floor(Math.random()*(m+1));[v[m],v[F]]=[v[F],v[m]]}h(v),N(v.join(", "))},_=v=>{const m=[w.bar];return!D.range||v>=D.range[0]&&v<=D.range[1]||m.push(w.dimmed),D.sorted?.includes(v)&&m.push(w.sorted),D.compare?.includes(v)&&m.push(w.compare),D.swap?.includes(v)&&m.push(w.swap),D.pivot===v&&m.push(w.pivot),D.found===v&&m.push(w.found),m.join(" ")},Z=l?l.replace(/^\n/,"").split(`
`):null;return e.jsxs("div",{className:w.container,children:[r?e.jsx("div",{className:w.title,children:r}):null,c?e.jsxs("div",{className:w.inputRow,children:[e.jsx("label",{className:w.inputLabel,htmlFor:`${r}-input`,children:"Eigene Zahlen (mit Komma getrennt):"}),e.jsx("input",{id:`${r}-input`,className:w.input,value:z,onChange:v=>N(v.target.value),onBlur:K,onKeyDown:v=>v.key==="Enter"&&K()}),e.jsx("button",{type:"button",className:w.smallButton,onClick:K,children:"Übernehmen"}),e.jsx("button",{type:"button",className:w.smallButton,onClick:L,children:"Mischen"})]}):null,e.jsx("div",{className:w.stage,children:e.jsx("div",{className:w.bars,children:O.map((v,m)=>e.jsxs("div",{className:w.barSlot,children:[e.jsx("div",{className:_(m),style:{height:`${Math.max(8,Math.abs(v)/T*100)}%`},children:e.jsx("span",{className:w.barValue,children:v})}),e.jsx("span",{className:w.barIndex,children:m})]},m))})}),e.jsxs("div",{className:w.description,children:[e.jsxs("span",{className:w.stepBadge,children:["Schritt ",Math.min(x+1,f)," / ",f]}),D.description??""]}),D.vars&&Object.keys(D.vars).length>0?e.jsx("div",{className:w.vars,children:Object.entries(D.vars).map(([v,m])=>e.jsxs("span",{className:w.varChip,children:[e.jsx("strong",{children:v})," = ",String(m)]},v))}):null,e.jsxs("div",{className:w.controls,children:[e.jsx("button",{type:"button",className:w.button,onClick:()=>{I(),b(0)},disabled:x===0,children:"⏮ Anfang"}),e.jsx("button",{type:"button",className:w.button,onClick:()=>{I(),b(v=>Math.max(0,v-1))},disabled:x===0,children:"◀ Zurück"}),e.jsx("button",{type:"button",className:`${w.button} ${E?w.pause:w.play}`,onClick:()=>p(v=>!v),disabled:x>=f-1,children:E?"⏸ Pause":"▶ Abspielen"}),e.jsx("button",{type:"button",className:w.button,onClick:()=>{I(),b(v=>Math.min(f-1,v+1))},disabled:x>=f-1,children:"Weiter ▶"}),e.jsx("button",{type:"button",className:w.button,onClick:()=>{I(),b(f-1)},disabled:x>=f-1,children:"Ende ⏭"})]}),e.jsx("input",{type:"range",className:w.slider,min:0,max:Math.max(0,f-1),value:Math.min(x,f-1),onChange:v=>{I(),b(Number(v.target.value))},"aria-label":"Schritt wählen"}),e.jsx("div",{className:w.legend,children:u==="search"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.compare}`})," geprüft"]}),e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.pivot}`})," Mitte"]}),e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.found}`})," gefunden"]}),e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.dimmedDot}`})," ausgeschlossen"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.compare}`})," Vergleich"]}),e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.swap}`})," Tausch"]}),e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.pivot}`})," Pivot"]}),e.jsxs("span",{className:w.legendItem,children:[e.jsx("i",{className:`${w.dot} ${w.sorted}`})," fertig"]})]})}),Z?e.jsx("pre",{className:w.code,children:Z.map((v,m)=>e.jsxs("div",{className:D.line===m+1?`${w.codeLine} ${w.activeLine}`:w.codeLine,children:[e.jsx("span",{className:w.lineNo,children:m+1}),e.jsx("span",{children:v})]},m))}):null]})}const A=s=>s.map(n=>n),ps=`function bubbleSort(liste) {
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
}`;function ks(s){const n=A(s),r=n.length,l=[],c=[];let d=0,u=0;l.push({array:A(n),description:"Start: Die Liste ist noch unsortiert.",line:1,vars:{länge:r}});for(let a=0;a<r-1;a++){l.push({array:A(n),sorted:A(c),description:`Durchlauf ${a+1}: Das grösste noch unsortierte Element wandert ganz nach rechts.`,line:2,vars:{i:a,Vergleiche:d,Tausche:u}});for(let h=0;h<r-1-a;h++)d++,l.push({array:A(n),compare:[h,h+1],sorted:A(c),description:`Vergleiche liste[${h}] = ${n[h]} mit liste[${h+1}] = ${n[h+1]}.`,line:4,vars:{i:a,j:h,Vergleiche:d,Tausche:u}}),n[h]>n[h+1]?(u++,l.push({array:A(n),swap:[h,h+1],sorted:A(c),description:`${n[h]} > ${n[h+1]} → die beiden werden getauscht.`,line:6,vars:{i:a,j:h,Vergleiche:d,Tausche:u}}),[n[h],n[h+1]]=[n[h+1],n[h]],l.push({array:A(n),swap:[h,h+1],sorted:A(c),description:"Getauscht. Der grössere Wert ist eine Position weiter rechts.",line:7,vars:{i:a,j:h,Vergleiche:d,Tausche:u}})):l.push({array:A(n),compare:[h,h+1],sorted:A(c),description:`${n[h]} ≤ ${n[h+1]} → kein Tausch nötig.`,line:4,vars:{i:a,j:h,Vergleiche:d,Tausche:u}});c.push(r-1-a),l.push({array:A(n),sorted:A(c),description:`Position ${r-1-a} ist endgültig richtig: ${n[r-1-a]} ist an seinem Platz.`,line:9,vars:{i:a,Vergleiche:d,Tausche:u}})}return c.push(0),l.push({array:A(n),sorted:n.map((a,h)=>h),description:`Fertig! Die Liste ist sortiert. (${d} Vergleiche, ${u} Tausche)`,line:11,vars:{Vergleiche:d,Tausche:u}}),l}const Ss=`function quickSort(liste, links = 0, rechts = liste.length - 1) {
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
}`;function zs(s){const n=A(s),r=[],l=[];let c=0,d=0;r.push({array:A(n),description:"Start: Wir sortieren die ganze Liste.",line:1,vars:{länge:n.length}});const u=(a,h,z)=>{if(a>h)return;if(a===h){l.push(a),r.push({array:A(n),sorted:A(l),range:[a,h],description:`Nur ein Element übrig (Position ${a}) → schon sortiert.`,line:2,vars:{links:a,rechts:h,Tiefe:z}});return}r.push({array:A(n),sorted:A(l),range:[a,h],pivot:h,description:`Neuer Bereich [${a} … ${h}]. Pivot ist das letzte Element: ${n[h]}.`,line:4,vars:{links:a,rechts:h,Pivot:n[h],Tiefe:z}});const N=n[h];let x=a;for(let b=a;b<h;b++)c++,r.push({array:A(n),sorted:A(l),range:[a,h],pivot:h,compare:[b],description:`Ist liste[${b}] = ${n[b]} kleiner als der Pivot ${N}?`,line:8,vars:{links:a,rechts:h,i:x,j:b,Pivot:N,Vergleiche:c}}),n[b]<N?(d++,r.push({array:A(n),sorted:A(l),range:[a,h],pivot:h,swap:[x,b],description:`Ja → ${n[b]} kommt in den linken Teil: tausche Position ${x} und ${b}.`,line:9,vars:{links:a,rechts:h,i:x,j:b,Pivot:N,Tausche:d}}),[n[x],n[b]]=[n[b],n[x]],x++,r.push({array:A(n),sorted:A(l),range:[a,h],pivot:h,compare:[x-1],description:`Die Grenze des linken Teils rückt weiter: i = ${x}.`,line:10,vars:{links:a,rechts:h,i:x,j:b,Pivot:N,Tausche:d}})):r.push({array:A(n),sorted:A(l),range:[a,h],pivot:h,compare:[b],description:`Nein → ${n[b]} bleibt im rechten Teil.`,line:8,vars:{links:a,rechts:h,i:x,j:b,Pivot:N,Vergleiche:c}});d++,r.push({array:A(n),sorted:A(l),range:[a,h],swap:[x,h],description:`Der Pivot ${N} wird an seine endgültige Position ${x} getauscht.`,line:14,vars:{links:a,rechts:h,i:x,Pivot:N,Tausche:d}}),[n[x],n[h]]=[n[h],n[x]],l.push(x),r.push({array:A(n),sorted:A(l),range:[a,h],description:`Position ${x} ist fertig. Links davon sind alle kleiner, rechts alle grösser.`,line:14,vars:{links:a,rechts:h,i:x,Pivot:N}}),r.push({array:A(n),sorted:A(l),range:[a,Math.max(a,x-1)],description:`Jetzt der linke Teil [${a} … ${x-1}] (rekursiver Aufruf).`,line:16,vars:{links:a,rechts:x-1,Tiefe:z+1}}),u(a,x-1,z+1),r.push({array:A(n),sorted:A(l),range:[Math.min(x+1,h),h],description:`Jetzt der rechte Teil [${x+1} … ${h}] (rekursiver Aufruf).`,line:17,vars:{links:x+1,rechts:h,Tiefe:z+1}}),u(x+1,h,z+1)};return u(0,n.length-1,0),r.push({array:A(n),sorted:n.map((a,h)=>h),description:`Fertig! Die Liste ist sortiert. (${c} Vergleiche, ${d} Tausche)`,line:18,vars:{Vergleiche:c,Tausche:d}}),r}const ws=`function lineareSuche(liste, gesucht) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === gesucht) {
      return i;
    }
  }
  return -1;
}`;function vs(s){return n=>{const r=A(n),l=[{array:A(r),description:`Wir suchen die Zahl ${s} und starten ganz links.`,line:1,vars:{gesucht:s}}];for(let c=0;c<r.length;c++){const d=r[c]===s;if(l.push({array:A(r),compare:d?[]:[c],found:d?c:void 0,description:d?`Treffer! liste[${c}] = ${r[c]} ist die gesuchte Zahl. Rückgabe: ${c}.`:`liste[${c}] = ${r[c]} ist nicht ${s} → weiter nach rechts.`,line:d?4:3,vars:{i:c,gesucht:s,Vergleiche:c+1}}),d)return l}return l.push({array:A(r),description:`${s} kommt in der Liste nicht vor. Rückgabe: -1.`,line:7,vars:{gesucht:s,Vergleiche:r.length}}),l}}const As=`function binaereSuche(liste, gesucht) {
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
}`;function ys(s){return n=>{const r=A(n).sort((a,h)=>a-h),l=[{array:A(r),description:`Die Liste ist sortiert. Wir suchen ${s} und halbieren den Bereich immer wieder.`,line:1,vars:{gesucht:s}}];let c=0,d=r.length-1,u=0;for(;c<=d;){u++;const a=Math.floor((c+d)/2);if(l.push({array:A(r),range:[c,d],pivot:a,description:`Bereich [${c} … ${d}] → Mitte ist Position ${a} mit dem Wert ${r[a]}.`,line:6,vars:{links:c,rechts:d,mitte:a,Schritte:u}}),r[a]===s)return l.push({array:A(r),range:[c,d],found:a,description:`Treffer! ${s} steht an Position ${a}. Gefunden in ${u} Schritten.`,line:8,vars:{mitte:a,Schritte:u}}),l;r[a]<s?(c=a+1,l.push({array:A(r),range:[c,d],description:`${r[a]} < ${s} → die linke Hälfte fällt weg.`,line:10,vars:{links:c,rechts:d,Schritte:u}})):(d=a-1,l.push({array:A(r),range:[c,Math.max(c,d)],description:`${r[a]} > ${s} → die rechte Hälfte fällt weg.`,line:12,vars:{links:c,rechts:d,Schritte:u}}))}return l.push({array:A(r),description:`${s} kommt nicht vor. Rückgabe: -1 (nach ${u} Schritten).`,line:15,vars:{Schritte:u}}),l}}const Ns=`function maximum(liste) {
  let groesstes = liste[0];

  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > groesstes) {
      groesstes = liste[i];
    }
  }
  return groesstes;
}`;function Es(s){const n=A(s),r=[{array:A(n),found:0,description:`Wir merken uns das erste Element als bisher grösstes: ${n[0]}.`,line:2,vars:{grösstes:n[0],"bester Index":0}}];let l=0;for(let c=1;c<n.length;c++)r.push({array:A(n),compare:[c],found:l,description:`Ist liste[${c}] = ${n[c]} grösser als ${n[l]}?`,line:5,vars:{i:c,grösstes:n[l]}}),n[c]>n[l]?(l=c,r.push({array:A(n),found:l,description:`Ja → neues Maximum: ${n[l]}.`,line:6,vars:{i:c,grösstes:n[l],"bester Index":l}})):r.push({array:A(n),found:l,description:`Nein → ${n[l]} bleibt das Maximum.`,line:5,vars:{i:c,grösstes:n[l]}});return r.push({array:A(n),found:l,description:`Das Maximum ist ${n[l]} (Position ${l}).`,line:9,vars:{grösstes:n[l]}}),r}const Ds=`function umkehren(liste) {
  let links = 0;
  let rechts = liste.length - 1;

  while (links < rechts) {
    [liste[links], liste[rechts]] = [liste[rechts], liste[links]];
    links++;
    rechts--;
  }
  return liste;
}`;function Bs(s){const n=A(s),r=[{array:A(n),description:"Zwei Zeiger: einer ganz links, einer ganz rechts.",line:2,vars:{links:0,rechts:n.length-1}}];let l=0,c=n.length-1;for(;l<c;)r.push({array:A(n),swap:[l,c],description:`Tausche Position ${l} (${n[l]}) mit Position ${c} (${n[c]}).`,line:6,vars:{links:l,rechts:c}}),[n[l],n[c]]=[n[c],n[l]],r.push({array:A(n),swap:[l,c],description:"Getauscht. Beide Zeiger rücken einen Schritt nach innen.",line:7,vars:{links:l+1,rechts:c-1}}),l++,c--;return r.push({array:A(n),sorted:n.map((d,u)=>u),description:"Die Zeiger haben sich getroffen — die Liste ist umgekehrt.",line:10,vars:{links:l,rechts:c}}),r}const Ws=vs(9),Fs=ys(9);function Os(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Einfache Standard-Algorithmen"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Algorithmus"})," ist eine eindeutige Handlungsvorschrift, die ein Problem in endlich vielen Schritten löst — ein Rezept. In fast jedem Programm tauchen dabei dieselben kleinen Bausteine immer wieder auf. Wer diese"," ",e.jsx("strong",{children:"Muster"})," kennt, löst neue Probleme viel schneller — man erkennt: «Ah, das ist ja im Grunde eine Suche.»"]}),e.jsxs("p",{children:["Wir starten mit den einfachen Mustern. Erst danach nehmen wir uns mit ",e.jsx("strong",{children:"Bubble Sort"})," und ",e.jsx("strong",{children:"Quicksort"})," die anspruchsvolleren Sortieralgorithmen vor."]}),e.jsx("h3",{children:"Die sechs Muster dieser Seite"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Suchen"})," — lineare Suche und binäre Suche"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extremwert finden"})," — Maximum und Minimum"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Akkumulieren"})," — Summe, Durchschnitt, Zählen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zwei Zeiger"})," — umkehren, Palindrom prüfen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Häufigkeiten zählen"})," — mit einem Objekt als Zähler-Tabelle"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vergleichen und normalisieren"})," — Anagramme erkennen"]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"1a. Lineare Suche"}),e.jsx("p",{children:"Die einfachste Suche überhaupt: von vorne nach hinten durchgehen und jedes Element anschauen, bis man das gesuchte findet. Wie wenn man eine unsortierte Schublade durchwühlt."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Funktioniert immer — die Liste muss nicht sortiert sein."}),e.jsxs("li",{children:["Gibt üblicherweise den ",e.jsx("strong",{children:"Index"})," zurück, oder"," ",e.jsx("code",{children:"-1"}),", wenn nichts gefunden wurde."]}),e.jsxs("li",{children:["Im schlechtesten Fall müssen alle ",e.jsx("code",{children:"n"})," Elemente geprüft werden → ",e.jsx("code",{children:"O(n)"}),"."]})]})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Lineare Suche — Visualisierung"}),e.jsxs("p",{children:["Gesucht wird die ",e.jsx("strong",{children:"9"}),". Gelb heisst «wird gerade geprüft», türkis heisst «gefunden»."]}),e.jsx(ue,{title:"Lineare Suche nach der 9",initialArray:[4,7,2,9,1,5],generate:Ws,code:ws,legend:"search"})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Lineare Suche — Code"}),e.jsx(o,{filename:"lineare-suche.js",children:`function lineareSuche(liste, gesucht) {
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
console.log(zahlen.find((z) => z > 5)); // 7`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"1b. Binäre Suche"}),e.jsxs("p",{children:["Wenn die Liste ",e.jsx("strong",{children:"sortiert"})," ist, geht es viel schneller. Wir schauen in die Mitte und können danach die Hälfte der Liste sofort ausschliessen — wie beim Nachschlagen im Wörterbuch oder beim Zahlenraten «höher oder tiefer?»."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Warum das so stark ist:"})," Bei 1'000'000 Einträgen braucht die lineare Suche bis zu 1'000'000 Vergleiche, die binäre Suche nur ",e.jsx("strong",{children:"20"}),". Jeder Schritt halbiert die Möglichkeiten."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Anzahl Elemente"}),e.jsx("th",{children:"Lineare Suche"}),e.jsx("th",{children:"Binäre Suche"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsx("td",{children:"10"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'000"}),e.jsx("td",{children:"1'000"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'000'000"}),e.jsx("td",{children:"1'000'000"}),e.jsx("td",{children:"20"})]})]})]})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Binäre Suche — Visualisierung"}),e.jsxs("p",{children:["Gesucht wird wieder die ",e.jsx("strong",{children:"9"}),". Die Liste wird automatisch sortiert. Lila ist die geprüfte Mitte, ausgegraute Balken sind bereits ausgeschlossen."]}),e.jsx(ue,{title:"Binäre Suche nach der 9",initialArray:[1,3,4,6,8,9,11,14],generate:Fs,code:As,legend:"search"})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Binäre Suche — Code"}),e.jsx(o,{filename:"binaere-suche.js",children:`function binaereSuche(liste, gesucht) {
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

// Achtung: bei unsortierten Listen liefert sie falsche Resultate!`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"2. Extremwert finden (Maximum / Minimum)"}),e.jsx("p",{children:"Das Muster: Wir merken uns einen «bisherigen Champion» und vergleichen ihn mit jedem weiteren Element. Ist ein Element besser, wird es der neue Champion."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Als Startwert nehmen wir das"," ",e.jsx("em",{children:"erste Element"})," der Liste — nicht 0! Sonst funktioniert der Algorithmus bei negativen Zahlen nicht."]})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Maximum — Visualisierung"}),e.jsx(ue,{title:"Das grösste Element finden",initialArray:[3,8,2,9,4,6],generate:Es,code:Ns,legend:"search"})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Maximum — Code"}),e.jsx(o,{filename:"maximum.js",children:`function maximum(liste) {
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
console.log(beste);`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"3. Akkumulieren (Summe, Durchschnitt, Zählen)"}),e.jsxs("p",{children:["Das wohl häufigste Muster überhaupt: Wir starten mit einem"," ",e.jsx("strong",{children:"Sammelbehälter"})," (meist ",e.jsx("code",{children:"0"})," oder eine leere Liste) und fügen bei jedem Element etwas hinzu."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Summe:"})," Behälter = 0, jedes Element addieren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Durchschnitt:"})," Summe geteilt durch Anzahl"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zählen:"})," Behälter = 0, bei jedem Treffer +1"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Produkt:"})," Behälter = 1, jedes Element multiplizieren"]})]}),e.jsxs("p",{children:["Laufzeit: immer ",e.jsx("code",{children:"O(n)"})," — jedes Element wird genau einmal angeschaut."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Akkumulieren — Code"}),e.jsx(o,{filename:"akkumulieren.js",children:`const noten = [5.5, 4, 6, 3.5, 4.5, 5];

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
console.log("Ungenügende:", noten.filter((n) => n < 4).length);`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"4. Zwei Zeiger (umkehren, Palindrom)"}),e.jsxs("p",{children:["Statt nur einen Index zu verwenden, arbeiten wir mit"," ",e.jsx("strong",{children:"zwei"}),": einer startet links, einer rechts. Beide bewegen sich aufeinander zu, bis sie sich treffen. Damit ist man in der Mitte fertig — man braucht nur ",e.jsx("code",{children:"n / 2"})," Durchgänge."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Umkehren:"})," die beiden Elemente tauschen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Palindrom prüfen:"})," die beiden Elemente vergleichen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Paar mit Zielsumme suchen"})," (in sortierter Liste)"]})]})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Umkehren — Visualisierung"}),e.jsx(ue,{title:"Liste umkehren mit zwei Zeigern",initialArray:[1,2,3,4,5,6],generate:Bs,code:Ds,legend:"sort"})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Umkehren und Palindrom — Code"}),e.jsx(o,{filename:"zwei-zeiger.js",children:`// Liste umkehren
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
console.log(istPalindrom("Informatik"));               // false`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"5. Häufigkeiten zählen"}),e.jsxs("p",{children:["Hier zahlt sich Woche 2 richtig aus: Wir benutzen ein"," ",e.jsx("strong",{children:"Objekt als Zähler-Tabelle"}),". Der Schlüssel ist das, was wir zählen, der Wert ist die Anzahl."]}),e.jsxs("p",{children:["Dieses Muster braucht man ständig: Wortstatistiken, Stimmenzählen, Duplikate finden, Anagramme prüfen. Und es ist ",e.jsx("code",{children:"O(n)"})," — man muss die Daten nur ein einziges Mal durchgehen."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Häufigkeiten — Code"}),e.jsx(o,{filename:"haeufigkeiten.js",children:`function haeufigkeiten(liste) {
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
console.log([...new Set(farben)]); // ["rot", "blau", "grün"]`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"6. Anagramme erkennen"}),e.jsxs("p",{children:["Zwei Wörter sind ",e.jsx("strong",{children:"Anagramme"}),", wenn sie aus genau denselben Buchstaben bestehen — nur in anderer Reihenfolge. Beispiele: ",e.jsx("code",{children:"Lager"})," / ",e.jsx("code",{children:"Regal"}),","," ",e.jsx("code",{children:"Ampel"})," / ",e.jsx("code",{children:"Lampe"}),"."]}),e.jsx("p",{children:"Es gibt zwei schöne Lösungswege, und beide benutzen etwas, das wir schon kennen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sortieren:"})," Beide Wörter buchstabenweise sortieren und vergleichen. Kurz und elegant, Laufzeit"," ",e.jsx("code",{children:"O(n · log n)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zählen:"})," Die Buchstabenhäufigkeiten beider Wörter vergleichen. Etwas länger, aber schneller: ",e.jsx("code",{children:"O(n)"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig ist das Normalisieren"})," vorher: Grossschreibung und Leerzeichen sollen keine Rolle spielen."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Anagramme — Code"}),e.jsx(o,{filename:"anagramme.js",children:`// Hilfsfunktion: normalisieren
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
console.log(istAnagramm2("Informatik", "Informatiker"));`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Übersicht der Muster"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Muster"}),e.jsx("th",{children:"Typische Frage"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lineare Suche"}),e.jsx("td",{children:"Kommt X vor? Wo?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binäre Suche"}),e.jsx("td",{children:"Wo ist X in einer sortierten Liste?"}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extremwert"}),e.jsx("td",{children:"Was ist der grösste / kleinste Wert?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Akkumulieren"}),e.jsx("td",{children:"Wie viel insgesamt? Wie viele davon?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Zwei Zeiger"}),e.jsx("td",{children:"Umkehren, Palindrom, Paare finden"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Häufigkeiten zählen"}),e.jsx("td",{children:"Wie oft kommt was vor?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sortieren (nächste Seiten)"}),e.jsx("td",{children:"Reihenfolge herstellen"}),e.jsxs("td",{children:[e.jsx("code",{children:"O(n²)"})," bzw. ",e.jsx("code",{children:"O(n · log n)"})]})]})]})]}),e.jsxs("p",{children:["Auf den nächsten Seiten geht es weiter mit den"," ",e.jsx("strong",{children:"Sortieralgorithmen"}),". Ganz am Schluss schauen wir uns an, was diese ",e.jsx("code",{children:"O(...)"}),"-Angaben genau bedeuten und warum sie so wichtig sind."]})]})})]})}const yl=Object.freeze(Object.defineProperty({__proto__:null,default:Os},Symbol.toStringTag,{value:"Module"}));function Ps(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Sortieren: Bubble Sort"}),e.jsxs("p",{children:["Sortieren ist eine der häufigsten Aufgaben in der Informatik. Eine sortierte Liste lässt sich viel schneller durchsuchen, besser darstellen und leichter vergleichen. Wir beginnen mit dem einfachsten und bekanntesten Sortierverfahren:"," ",e.jsx("strong",{children:"Bubble Sort"}),"."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können die Idee von Bubble Sort in eigenen Worten erklären."}),e.jsx("li",{children:"Sie können Bubble Sort für eine kleine Liste von Hand durchführen."}),e.jsx("li",{children:"Sie verstehen den JavaScript-Code Zeile für Zeile."}),e.jsxs("li",{children:["Sie wissen, warum Bubble Sort ",e.jsx("code",{children:"O(n²)"})," Vergleiche braucht."]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee"}),e.jsxs("p",{children:["Bubble Sort vergleicht immer ",e.jsx("strong",{children:"zwei Nachbarn"}),". Steht der grössere Wert links, werden die beiden getauscht. So wandert die grösste Zahl bei jedem Durchlauf wie eine Luftblase nach rechts — daher der Name."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Gehe die Liste von links nach rechts durch."}),e.jsxs("li",{children:["Vergleiche jedes Paar von Nachbarn: ",e.jsx("code",{children:"liste[j]"})," und"," ",e.jsx("code",{children:"liste[j + 1]"}),"."]}),e.jsxs("li",{children:["Ist der linke Wert grösser, ",e.jsx("strong",{children:"tausche"})," die beiden."]}),e.jsx("li",{children:"Am Ende eines Durchlaufs steht die grösste Zahl ganz rechts — sie ist fertig."}),e.jsx("li",{children:"Wiederhole das mit dem verbleibenden, noch unsortierten Teil."})]}),e.jsxs("p",{children:["Bei ",e.jsx("code",{children:"n"})," Elementen genügen ",e.jsx("code",{children:"n - 1"})," Durchläufe. Nach jedem Durchlauf ist ein Element mehr an seinem endgültigen Platz."]})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Visualisierung"}),e.jsxs("p",{children:["Gehen Sie Schritt für Schritt durch. Gelb bedeutet"," ",e.jsx("em",{children:"wird verglichen"}),", rot ",e.jsx("em",{children:"wird getauscht"})," und grün"," ",e.jsx("em",{children:"steht endgültig richtig"}),". Rechts unten sehen Sie, welche Codezeile gerade ausgeführt wird."]}),e.jsx(ue,{title:"Bubble Sort",initialArray:[5,3,8,1,9,2],generate:ks,code:ps,legend:"sort"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Probieren Sie aus:"})," Geben Sie oben eine bereits sortierte Liste ein (z. B. ",e.jsx("code",{children:"1, 2, 3, 4, 5"}),"). Wie viele Vergleiche braucht der Algorithmus? Und wie viele Tausche?"]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Code"}),e.jsx("p",{children:"Zwei verschachtelte Schleifen: Die äussere zählt die Durchläufe, die innere vergleicht die Nachbarn. Führen Sie den Code aus und ändern Sie die Liste."}),e.jsx(o,{filename:"bubblesort.js",children:`function bubbleSort(liste) {
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
console.log(bubbleSort(zahlen));`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kürzer tauschen — und das Original schonen"}),e.jsxs("p",{children:["Mit der Dekomposition aus Woche 2 geht das Tauschen in einer Zeile. Und mit ",e.jsx("code",{children:"[...liste]"})," arbeiten wir auf einer Kopie, so bleibt das Original erhalten."]}),e.jsx(o,{filename:"bubblesort-kurz.js",children:`function bubbleSort(eingabe) {
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
console.log("Sortiert: ", sortiert);`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Optimierung: frühzeitig aufhören"}),e.jsxs("p",{children:["Wenn in einem ganzen Durchlauf ",e.jsx("strong",{children:"kein"})," Tausch mehr passiert, ist die Liste bereits sortiert. Dann können wir abbrechen. Bei einer schon sortierten Liste braucht der Algorithmus so nur noch einen einzigen Durchlauf."]}),e.jsx(o,{filename:"bubblesort-optimiert.js",children:`function bubbleSortOptimiert(eingabe) {
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
console.log(bubbleSortOptimiert([1, 2, 3, 4, 5, 6])); // nur 1 Durchlauf`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaften von Bubble Sort"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sehr einfach"})," zu verstehen und zu programmieren"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"In place"})," — braucht kaum zusätzlichen Speicher"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Stabil"})," — gleiche Werte behalten ihre Reihenfolge"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Langsam"})," — bei doppelt so vielen Elementen braucht er rund ",e.jsx("em",{children:"viermal"})," so lange"]}),e.jsx("li",{children:"❌ In der Praxis wird er nie verwendet (aber überall unterrichtet)"})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Vergleiche"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall (sortiert, optimiert)"}),e.jsx("td",{children:"n − 1"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"≈ n² / 2"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall (umgekehrt sortiert)"}),e.jsx("td",{children:"n · (n − 1) / 2"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:["Was ",e.jsx("code",{children:"O(n²)"})," genau bedeutet, schauen wir auf der Seite zur"," ",e.jsx("strong",{children:"Laufzeitanalyse"})," an."]})]})})]})}const Nl=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"}));function Zs(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Sortieren: Quicksort"}),e.jsxs("p",{children:["Bubble Sort ist einfach, aber langsam. ",e.jsx("strong",{children:"Quicksort"})," ","ist einer der schnellsten Sortieralgorithmen überhaupt und wird in vielen Programmiersprachen tatsächlich eingesetzt. Sein Trick heisst"," ",e.jsx("strong",{children:"Teile und herrsche"})," (divide and conquer): Ein grosses Problem wird in kleinere Teilprobleme zerlegt."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie können erklären, was ein ",e.jsx("strong",{children:"Pivot"})," ist und was beim Partitionieren passiert."]}),e.jsx("li",{children:"Sie verstehen, was Rekursion in diesem Algorithmus bedeutet."}),e.jsx("li",{children:"Sie können den Quicksort-Code Zeile für Zeile erklären."}),e.jsxs("li",{children:["Sie wissen, warum Quicksort im Schnitt ",e.jsx("code",{children:"O(n · log n)"})," ","ist, im schlechtesten Fall aber ",e.jsx("code",{children:"O(n²)"}),"."]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee: Teile und herrsche"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Wähle ein Element als ",e.jsx("strong",{children:"Pivot"})," (wir nehmen immer das letzte Element des Bereichs)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Partitionieren:"})," Sortiere alle kleineren Elemente nach links vom Pivot, alle grösseren nach rechts."]}),e.jsxs("li",{children:["Danach steht das Pivot an seiner ",e.jsx("strong",{children:"endgültigen"})," ","Position — es muss nie wieder bewegt werden."]}),e.jsxs("li",{children:["Wiederhole das Ganze für den linken Teil und für den rechten Teil (",e.jsx("strong",{children:"Rekursion"}),")."]}),e.jsxs("li",{children:["Ein Bereich mit 0 oder 1 Element ist automatisch sortiert →"," ",e.jsx("strong",{children:"Abbruchbedingung"}),"."]})]}),e.jsx("h3",{children:"Analogie"}),e.jsx("p",{children:"Stellen Sie sich eine Klasse vor, die sich nach Grösse aufstellen soll. Eine Person stellt sich in die Mitte. Alle Kleineren gehen nach links, alle Grösseren nach rechts. Jetzt hat diese Person garantiert ihren richtigen Platz. Dann macht die linke Gruppe dasselbe, und die rechte auch — bis alle stehen."})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Visualisierung"}),e.jsxs("p",{children:["Lila ist das ",e.jsx("em",{children:"Pivot"}),", gelb wird gerade"," ",e.jsx("em",{children:"mit dem Pivot verglichen"}),", rot wird ",e.jsx("em",{children:"getauscht"})," und grün steht ",e.jsx("em",{children:"endgültig richtig"}),". Ausgegraute Balken liegen ausserhalb des aktuellen Bereichs."]}),e.jsx(ue,{title:"Quicksort (Pivot = letztes Element)",initialArray:[7,2,9,4,1,8,3],generate:zs,code:Ss,legend:"sort"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beobachten Sie:"})," Sobald ein Balken grün wird, wird er nie mehr angefasst. Und der aktive Bereich wird immer kleiner."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Code"}),e.jsxs("p",{children:["Die Funktion ruft sich ",e.jsx("strong",{children:"selbst"})," auf — das ist Rekursion. Die Parameter ",e.jsx("code",{children:"links"})," und ",e.jsx("code",{children:"rechts"})," ","sagen, welcher Teil der Liste gerade bearbeitet wird."]}),e.jsx(o,{filename:"quicksort.js",children:`function quickSort(liste, links = 0, rechts = liste.length - 1) {
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
console.log(quickSort(zahlen));`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eine kurze, gut lesbare Variante"}),e.jsxs("p",{children:["Mit ",e.jsx("code",{children:"filter"})," und Spread lässt sich Quicksort sehr elegant schreiben. Diese Version ist leichter zu lesen, braucht aber mehr Speicher, weil sie bei jedem Schritt neue Listen erzeugt."]}),e.jsx(o,{filename:"quicksort-funktional.js",children:`function quickSort(liste) {
  if (liste.length <= 1) return liste;

  const [pivot, ...rest] = liste;          // Dekomposition + Spread
  const kleiner = rest.filter((x) => x < pivot);
  const groesser = rest.filter((x) => x >= pivot);

  return [...quickSort(kleiner), pivot, ...quickSort(groesser)];
}

console.log(quickSort([7, 2, 9, 4, 1, 8, 3]));

// Funktioniert auch mit Wörtern
console.log(quickSort(["Kiwi", "Apfel", "Zwetschge", "Banane"]));`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Diskussionsfrage:"})," Welche der beiden Versionen würden Sie in einem Programm verwenden — die kurze oder die «in place»-Version? Warum?"]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaften von Quicksort"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sehr schnell"})," — im Schnitt"," ",e.jsx("code",{children:"O(n · log n)"})]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"In place"})," möglich (die erste Version)"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Schlechtester Fall"})," ",e.jsx("code",{children:"O(n²)"}),": wenn das Pivot immer der kleinste oder grösste Wert ist — z. B. bei einer bereits sortierten Liste!"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Nicht stabil"})," — gleiche Werte können ihre Reihenfolge tauschen"]}),e.jsx("li",{children:"❌ Deutlich schwieriger zu verstehen als Bubble Sort"})]}),e.jsx("h3",{children:"Bubble Sort und Quicksort im Vergleich"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Bubble Sort"}),e.jsx("th",{children:"Quicksort"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Prinzip"}),e.jsx("td",{children:"Nachbarn tauschen"}),e.jsx("td",{children:"Teile und herrsche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1000 Elemente (grob)"}),e.jsx("td",{children:"≈ 500'000 Vergleiche"}),e.jsx("td",{children:"≈ 10'000 Vergleiche"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tipp aus der Praxis:"})," Ein zufällig gewähltes Pivot (statt immer das letzte Element) macht den schlechtesten Fall extrem unwahrscheinlich."]})]})})]})}const El=Object.freeze(Object.defineProperty({__proto__:null,default:Zs},Symbol.toStringTag,{value:"Module"})),Ms="_container_1hqpd_1",_s="_header_1hqpd_9",Ts="_sliderLabel_1hqpd_13",Ks="_slider_1hqpd_13",Is="_rows_1hqpd_24",Ls="_row_1hqpd_24",Cs="_rowLabel_1hqpd_37",Vs="_rowName_1hqpd_42",Gs="_rowExample_1hqpd_48",Hs="_barTrack_1hqpd_53",Rs="_bar_1hqpd_53",$s="_rowValue_1hqpd_66",Js="_ops_1hqpd_73",Us="_time_1hqpd_78",qs="_note_1hqpd_83",R={container:Ms,header:_s,sliderLabel:Ts,slider:Ks,rows:Is,row:Ls,rowLabel:Cs,rowName:Vs,rowExample:Gs,barTrack:Hs,bar:Rs,rowValue:$s,ops:Js,time:Us,note:qs},Qs=[{key:"O(1)",label:"O(1) — konstant",example:"liste[5], liste.length",fn:()=>1,color:"var(--color-green)"},{key:"O(log n)",label:"O(log n) — logarithmisch",example:"Binäre Suche",fn:s=>Math.max(1,Math.ceil(Math.log2(s))),color:"var(--color-aqua)"},{key:"O(n)",label:"O(n) — linear",example:"Lineare Suche, Summe, Maximum",fn:s=>s,color:"var(--color-blue)"},{key:"O(n log n)",label:"O(n · log n) — linear-logarithmisch",example:"Quicksort (Durchschnitt), sort()",fn:s=>Math.ceil(s*Math.max(1,Math.log2(s))),color:"var(--color-yellow)"},{key:"O(n²)",label:"O(n²) — quadratisch",example:"Bubble Sort, alle Paare vergleichen",fn:s=>s*s,color:"var(--color-orange)"},{key:"O(2^n)",label:"O(2ⁿ) — exponentiell",example:"Alle Teilmengen ausprobieren",fn:s=>2**s,color:"var(--color-red)"}],Ie=[8,16,32,64,128,256,512,1024];function Qe(s){return Number.isFinite(s)?s>=1e15?s.toExponential(1).replace("e+"," · 10^"):Math.round(s).toLocaleString("de-CH"):"∞"}function Xs(s){const n=s/1e8;return Number.isFinite(n)?n<1e-6?"< 1 µs":n<.001?`${(n*1e6).toFixed(0)} µs`:n<1?`${(n*1e3).toFixed(1)} ms`:n<60?`${n.toFixed(1)} s`:n<3600?`${(n/60).toFixed(1)} min`:n<86400?`${(n/3600).toFixed(1)} h`:n<315e5?`${(n/86400).toFixed(1)} Tage`:`${Qe(n/315e5)} Jahre`:"unendlich"}function Ys(){const[s,n]=S.useState(3),r=Ie[s],l=Qs.map(d=>({...d,operations:d.fn(r)})),c=Math.max(...l.map(d=>Math.log10(d.operations+1)));return e.jsxs("div",{className:R.container,children:[e.jsxs("div",{className:R.header,children:[e.jsxs("label",{className:R.sliderLabel,htmlFor:"complexity-n",children:["Anzahl Elemente ",e.jsxs("strong",{children:["n = ",r.toLocaleString("de-CH")]})]}),e.jsx("input",{id:"complexity-n",className:R.slider,type:"range",min:0,max:Ie.length-1,value:s,onChange:d=>n(Number(d.target.value))})]}),e.jsx("div",{className:R.rows,children:l.map(d=>e.jsxs("div",{className:R.row,children:[e.jsxs("div",{className:R.rowLabel,children:[e.jsx("span",{className:R.rowName,children:d.label}),e.jsx("span",{className:R.rowExample,children:d.example})]}),e.jsx("div",{className:R.barTrack,children:e.jsx("div",{className:R.bar,style:{width:`${Math.max(2,Math.log10(d.operations+1)/c*100)}%`,backgroundColor:d.color}})}),e.jsxs("div",{className:R.rowValue,children:[e.jsx("span",{className:R.ops,children:Qe(d.operations)}),e.jsx("span",{className:R.time,children:Xs(d.operations)})]})]},d.key))}),e.jsxs("p",{className:R.note,children:["Die Balken sind ",e.jsx("strong",{children:"logarithmisch"})," skaliert — sonst wäre bei grossem n nur noch der rote Balken sichtbar. Die Zeitangabe rechts nimmt an, dass ein Computer 100 Millionen Operationen pro Sekunde schafft."]})]})}function ei(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Laufzeitanalyse"}),e.jsxs("p",{children:["Wir haben jetzt mehrere Algorithmen gesehen, die dasselbe Problem lösen — zum Beispiel Bubble Sort und Quicksort. Aber welcher ist"," ",e.jsx("strong",{children:"besser"}),"? Um das zu beantworten, brauchen wir ein Werkzeug: die ",e.jsx("strong",{children:"Laufzeitanalyse"}),"."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können erklären, warum man Laufzeit nicht in Sekunden misst."}),e.jsx("li",{children:"Sie können in einfachem Code die Anzahl Operationen abschätzen."}),e.jsxs("li",{children:["Sie kennen die wichtigsten Klassen: ",e.jsx("code",{children:"O(1)"}),","," ",e.jsx("code",{children:"O(log n)"}),", ",e.jsx("code",{children:"O(n)"}),","," ",e.jsx("code",{children:"O(n · log n)"}),", ",e.jsx("code",{children:"O(n²)"}),"."]}),e.jsx("li",{children:"Sie können die Algorithmen dieser Woche einer Klasse zuordnen und begründen, warum."})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Warum messen wir nicht einfach die Zeit?"}),e.jsx("p",{children:"Man könnte einfach eine Stoppuhr laufen lassen. Das Problem: Das Ergebnis hängt von Dingen ab, die nichts mit dem Algorithmus zu tun haben."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Hardware:"})," Ein neuer Laptop ist schneller als ein alter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Programmiersprache:"})," C ist schneller als JavaScript."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zufall:"})," Andere Programme laufen gleichzeitig."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Datenmenge:"})," Mit 10 Elementen ist alles schnell."]})]}),e.jsxs("p",{children:["Deshalb zählen wir stattdessen die ",e.jsx("strong",{children:"Anzahl Schritte"})," ","in Abhängigkeit von der Datenmenge ",e.jsx("code",{children:"n"}),". Die eigentliche Frage lautet:"]}),e.jsx("blockquote",{children:"Wie stark wächst der Aufwand, wenn die Datenmenge wächst?"}),e.jsx("p",{children:"Das ist die entscheidende Frage. Ein Algorithmus, der bei 1000 Elementen 1 Sekunde braucht, kann bei 10'000 Elementen 10 Sekunden brauchen — oder 100 Sekunden. Das macht den Unterschied zwischen «funktioniert» und «unbrauchbar»."})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die O-Notation (Gross-O)"}),e.jsxs("p",{children:["Bubble Sort braucht genau ",e.jsx("code",{children:"n · (n − 1) / 2"})," Vergleiche. Ausmultipliziert: ",e.jsx("code",{children:"0.5 · n² − 0.5 · n"}),". Für die Laufzeitanalyse vereinfachen wir das zu ",e.jsx("code",{children:"O(n²)"}),". Dabei gelten zwei Regeln:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Konstante Faktoren weglassen:"})," ",e.jsx("code",{children:"0.5 · n²"})," → ",e.jsx("code",{children:"n²"}),". Ein doppelt so schneller Computer ändert die Klasse nicht."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nur der stärkste Term zählt:"})," ",e.jsx("code",{children:"n² + n + 100"})," → ",e.jsx("code",{children:"n²"}),". Bei n = 1000 ist"," ",e.jsx("code",{children:"n²"})," = 1'000'000 und ",e.jsx("code",{children:"n"})," nur 1000 — das"," ",e.jsx("code",{children:"n"})," fällt gar nicht mehr ins Gewicht."]})]}),e.jsxs("p",{children:[e.jsx("code",{children:"O(...)"})," beschreibt also das"," ",e.jsx("strong",{children:"Wachstumsverhalten"}),", nicht die genaue Anzahl Schritte. Es ist eine ",e.jsx("em",{children:"obere Schranke"}),": «höchstens so schnell wachsend wie»."]}),e.jsx("h3",{children:"Drei Fälle"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bester Fall:"})," die günstigste Eingabe (z. B. die gesuchte Zahl steht ganz vorne)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Durchschnitt:"})," typische, zufällige Eingabe — meist die interessanteste Angabe"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schlechtester Fall:"})," die ungünstigste Eingabe — die wichtigste Angabe, wenn man Garantien braucht"]})]})]})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wachstum vergleichen"}),e.jsx("p",{children:"Verschieben Sie den Regler und beobachten Sie, wie unterschiedlich die Klassen wachsen."}),e.jsx(Ys,{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Die Schlüsselbeobachtung:"})," Bei n = 8 sind alle Klassen ähnlich schnell. Bei n = 1024 liegen Welten dazwischen —",e.jsx("code",{children:"O(log n)"})," braucht 10 Schritte, ",e.jsx("code",{children:"O(n²)"})," über eine Million, ",e.jsx("code",{children:"O(2ⁿ)"})," mehr Schritte als das Universum Atome hat."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wie erkenne ich die Klasse im Code?"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Was ich im Code sehe"}),e.jsx("th",{children:"Klasse"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:["Keine Schleife, nur ein paar Befehle: ",e.jsx("code",{children:"liste[0]"}),","," ",e.jsx("code",{children:"liste.length"}),", ",e.jsx("code",{children:"a + b"})]}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Der Suchbereich wird jedes Mal ",e.jsx("strong",{children:"halbiert"})]}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Eine"})," Schleife über alle Elemente (auch"," ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"reduce"}),")"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Halbieren ",e.jsx("em",{children:"und"})," jedes Mal alle Elemente anschauen (",e.jsx("code",{children:"sort()"}),")"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Zwei verschachtelte"})," Schleifen über alle Elemente"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Alle Kombinationen / Teilmengen ausprobieren"}),e.jsx("td",{children:e.jsx("code",{children:"O(2ⁿ)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achtung — häufige Stolperfalle:"})," Zwei Schleifen"," ",e.jsx("em",{children:"nacheinander"})," sind ",e.jsx("code",{children:"O(n) + O(n) = O(n)"}),". Nur"," ",e.jsx("em",{children:"verschachtelte"})," Schleifen werden ",e.jsx("code",{children:"O(n²)"}),"."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 1: Lineare und binäre Suche"}),e.jsx("h3",{children:"Lineare Suche — O(n)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Bester Fall ",e.jsx("code",{children:"O(1)"}),":"]})," ","Das gesuchte Element steht an Position 0."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Durchschnitt ",e.jsx("code",{children:"O(n)"}),":"]})," ","Im Mittel muss man die halbe Liste durchsuchen — ",e.jsx("code",{children:"n/2"}),", und der konstante Faktor fällt weg."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Schlechtester Fall ",e.jsx("code",{children:"O(n)"}),":"]})," ","Das Element steht am Schluss oder kommt gar nicht vor."]})]}),e.jsx("h3",{children:"Binäre Suche — O(log n)"}),e.jsxs("p",{children:["Jeder Schritt halbiert den Suchbereich. Die Frage lautet: Wie oft kann ich ",e.jsx("code",{children:"n"})," halbieren, bis 1 übrig bleibt? Antwort:"," ",e.jsx("code",{children:"log₂(n)"})," Mal."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"n"}),e.jsx("th",{children:"Lineare Suche (Vergleiche)"}),e.jsx("th",{children:"Binäre Suche (Vergleiche)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"16"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'024"}),e.jsx("td",{children:"1'024"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'048'576"}),e.jsx("td",{children:"1'048'576"}),e.jsx("td",{children:"20"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Aber Vorsicht — die versteckten Kosten:"})," Binäre Suche verlangt eine sortierte Liste. Das Sortieren kostet"," ",e.jsx("code",{children:"O(n · log n)"}),". Für ",e.jsx("em",{children:"eine einzige"})," Suche lohnt sich das nicht. Wer aber tausendmal in denselben Daten sucht, sortiert einmal und profitiert danach immer."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 2: Die übrigen einfachen Algorithmen"}),e.jsx("h3",{children:"Maximum finden — O(n)"}),e.jsxs("p",{children:["Eine Schleife, jedes Element genau einmal. Man kann es nicht besser machen: Wenn man auch nur ein Element überspringt, könnte genau das das Maximum gewesen sein. ",e.jsx("code",{children:"O(n)"})," ist hier"," ",e.jsx("strong",{children:"optimal"}),"."]}),e.jsx("h3",{children:"Summe, Durchschnitt, Zählen — O(n)"}),e.jsxs("p",{children:["Gleiches Argument. Auch ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"})," sind ",e.jsx("code",{children:"O(n)"})," — sie sehen nur kürzer aus, machen aber genau gleich viel Arbeit."]}),e.jsx("h3",{children:"Zwei Zeiger (umkehren, Palindrom) — O(n)"}),e.jsxs("p",{children:["Die Schleife läuft nur ",e.jsx("code",{children:"n/2"})," Mal. Der konstante Faktor"," ",e.jsx("code",{children:"1/2"})," fällt in der O-Notation weg, es bleibt"," ",e.jsx("code",{children:"O(n)"}),". Es ist zwar doppelt so schnell wie eine volle Schleife, aber in derselben Klasse."]}),e.jsx("h3",{children:"Häufigkeiten zählen — O(n)"}),e.jsxs("p",{children:["Eine Schleife über alle Elemente. Der Zugriff auf eine Objekt-Eigenschaft wie ",e.jsx("code",{children:'zaehler["rot"]'})," ist"," ",e.jsx("code",{children:"O(1)"})," — er dauert gleich lang, egal wie viele Einträge das Objekt schon hat. Das ist der Grund, warum dieses Muster so beliebt ist."]}),e.jsx("h3",{children:"Anagramme erkennen — zwei Wege im Vergleich"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Weg"}),e.jsx("th",{children:"Was passiert"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Sortieren und vergleichen"}),e.jsx("td",{children:"2× sortieren + 1× vergleichen"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Buchstaben zählen"}),e.jsx("td",{children:"2× eine Schleife über die Wörter"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]})]})]}),e.jsx("p",{children:"Bei Wörtern mit 10 Buchstaben ist der Unterschied völlig egal — dann nimmt man die kürzere, besser lesbare Variante. Bei einer Million Zeichen zählt jede Klasse."}),e.jsx("blockquote",{children:"Lesbarkeit schlägt Geschwindigkeit — bis die Geschwindigkeit zum Problem wird."})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Operationen zählen — selbst ausprobieren"}),e.jsxs("p",{children:["Bisher waren alle einfachen Algorithmen ",e.jsx("code",{children:"O(n)"})," oder besser. Jetzt kommen wir zu den Sortieralgorithmen — und dort wird es spannend. Wir bauen dazu einen Zähler in den Algorithmus ein und schauen, wie die Zahlen wachsen, wenn wir ",e.jsx("code",{children:"n"})," verdoppeln."]}),e.jsx(o,{filename:"operationen-zaehlen.js",children:`// Wir zählen die Vergleiche bei Bubble Sort
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
// Das ist typisch für O(n²)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Das ist der Kern der Laufzeitanalyse:"})," Bei"," ",e.jsx("code",{children:"O(n²)"})," führt doppelt so viel Input zu viermal so viel Arbeit. Bei ",e.jsx("code",{children:"O(n)"})," nur zu doppelt so viel. Bei"," ",e.jsx("code",{children:"O(log n)"})," praktisch zu gar nichts mehr."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 3: Bubble Sort"}),e.jsxs("p",{children:["Zwei verschachtelte Schleifen. Die äussere läuft ",e.jsx("code",{children:"n − 1"})," ","Mal, die innere jedes Mal etwas kürzer:"]}),e.jsx("p",{children:e.jsx("code",{children:"(n−1) + (n−2) + … + 2 + 1 = n · (n−1) / 2"})}),e.jsx("p",{children:"Bei 10 Elementen sind das 45 Vergleiche, bei 100 schon 4950, bei 1000 rund 500'000."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Wann?"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:"Liste bereits sortiert (nur mit der Abbruch-Optimierung)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"zufällige Liste"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:"Liste absteigend sortiert"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Speicher:"})," ",e.jsx("code",{children:"O(1)"})," — es wird nur getauscht, keine zweite Liste angelegt."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 4: Quicksort"}),e.jsxs("p",{children:["Beim Partitionieren wird jedes Element des Bereichs einmal angeschaut — das ist ",e.jsx("code",{children:"O(n)"})," pro «Ebene». Entscheidend ist, ",e.jsx("strong",{children:"wie viele Ebenen"})," es gibt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Gutes Pivot"})," (etwa in der Mitte): Der Bereich halbiert sich jedes Mal. Nach ",e.jsx("code",{children:"log₂(n)"})," Ebenen ist alles fertig. Gesamt: ",e.jsx("code",{children:"n · log n"}),". Bei n = 1024 sind das 10 Ebenen à 1024 Vergleiche ≈ 10'000."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schlechtes Pivot"})," (immer das kleinste oder grösste Element): Der Bereich schrumpft nur um 1. Dann gibt es"," ",e.jsx("code",{children:"n"})," Ebenen → ",e.jsx("code",{children:"n²"}),". Genau das passiert mit unserer Version bei einer bereits sortierten Liste!"]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Wann?"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:"Pivot teilt immer genau in der Mitte"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"zufällige Liste"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:"bereits sortierte Liste (bei Pivot = letztes Element)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deshalb:"})," In der Praxis wählt man ein"," ",e.jsx("em",{children:"zufälliges"})," Pivot. Dann ist der schlechteste Fall so unwahrscheinlich, dass er praktisch nie auftritt."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bubble Sort gegen Quicksort — messen"}),e.jsxs("p",{children:["Jetzt messen wir tatsächlich die Zeit. Achtung: Erhöhen Sie"," ",e.jsx("code",{children:"n"})," nur vorsichtig, sonst blockiert Bubble Sort den Browser."]}),e.jsx(o,{filename:"messen.js",children:`function zufallsListe(n) {
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
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beobachten Sie:"})," Bei jeder Verdopplung von"," ",e.jsx("code",{children:"n"})," wird Bubble Sort etwa viermal langsamer, Quicksort nur gut doppelt so langsam. Bei n = 4000 ist der Unterschied schon gewaltig."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Gesamtübersicht"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Algorithmus"}),e.jsx("th",{children:"Bester Fall"}),e.jsx("th",{children:"Durchschnitt"}),e.jsx("th",{children:"Schlechtester Fall"}),e.jsx("th",{children:"Speicher"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lineare Suche"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binäre Suche"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Maximum finden"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Summe / Durchschnitt"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Umkehren / Palindrom"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Häufigkeiten zählen"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Anagramm (zählen)"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Anagramm (sortieren)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bubble Sort"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Quicksort"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]})]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Merksätze"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Laufzeit misst man in ",e.jsx("strong",{children:"Schritten"}),", nicht in Sekunden."]}),e.jsxs("li",{children:["Die O-Notation beschreibt das ",e.jsx("strong",{children:"Wachstum"}),": konstante Faktoren und schwächere Terme fallen weg."]}),e.jsxs("li",{children:["Verschachtelte Schleifen sind das Warnzeichen für"," ",e.jsx("code",{children:"O(n²)"}),"."]}),e.jsxs("li",{children:["Halbieren ist das Erkennungsmerkmal von ",e.jsx("code",{children:"O(log n)"})," — und ",e.jsx("code",{children:"log n"})," ist unglaublich klein."]}),e.jsx("li",{children:"Bei kleinen Datenmengen ist alles schnell genug. Die Klasse zählt erst, wenn die Daten wachsen."}),e.jsx("li",{children:"Manchmal tauscht man Speicher gegen Zeit (z. B. eine Zähler-Tabelle statt doppelter Schleifen)."})]})]})})]})}const Dl=Object.freeze(Object.defineProperty({__proto__:null,default:ei},Symbol.toStringTag,{value:"Module"}));function ni(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben: Algorithmen"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie ",e.jsx("strong",{children:"5 Aufgaben"})," zu den Algorithmen dieser Woche. Sie beginnen mit zwei klassischen Rechen-Algorithmen und arbeiten sich zu den Sortieralgorithmen vor. Die Aufgaben sind deutlich umfangreicher als in den letzten Wochen — planen Sie genügend Zeit ein und arbeiten Sie in kleinen Schritten."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen. Sie schreiben alles selbst. Sie dürfen die Algorithmen aus der Theorie als Vorlage verwenden, müssen sie aber verstehen und anpassen können."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zu jeder Aufgabe gehört eine kurze Laufzeitüberlegung."})," ","Diese schreiben Sie als Kommentar in die Datei. Wir besprechen sie gemeinsam im Unterricht."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Beginnen Sie jede Datei mit einem Kommentarblock nach diesem Muster:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Modulo selbst berechnen
// Idee: Solange der Divisor passt, wird er abgezogen
// Laufzeit: O(a / b), weil pro Durchgang genau einmal subtrahiert wird
// Schwierig war: ...
// Gelernt habe ich: ...`})})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Modulo selbst berechnen"}),e.jsxs("p",{children:["Der Modulo-Operator ",e.jsx("code",{children:"%"})," gibt den"," ",e.jsx("strong",{children:"Rest einer Division"})," zurück:"," ",e.jsx("code",{children:"17 % 5 === 2"}),", weil 5 dreimal in 17 passt und 2 übrig bleibt. In dieser Aufgabe bauen Sie diesen Operator selbst nach."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Regel:"})," Sie dürfen ",e.jsx("code",{children:"%"})," nicht verwenden. Auch ",e.jsx("code",{children:"Math.floor"}),", ",e.jsx("code",{children:"Math.trunc"})," und ähnliche Abkürzungen sind nicht erlaubt. Nur ",e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"}),","," ","Vergleiche und Schleifen."]}),e.jsx("p",{children:"Schreiben Sie:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"modulo(a, b)"})," — gibt den Rest von ",e.jsx("code",{children:"a / b"})," ","zurück. Idee: Ziehen Sie ",e.jsx("code",{children:"b"})," so lange von"," ",e.jsx("code",{children:"a"})," ab, wie ",e.jsx("code",{children:"a"})," noch mindestens so gross ist wie ",e.jsx("code",{children:"b"}),". Was übrig bleibt, ist der Rest."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ganzzahlDivision(a, b)"})," — gibt zurück, wie oft"," ",e.jsx("code",{children:"b"})," ganz in ",e.jsx("code",{children:"a"})," passt. Das ist genau die Anzahl Subtraktionen aus Aufgabenteil 1."]}),e.jsxs("li",{children:[e.jsx("code",{children:"teile(a, b)"})," — gibt beides zusammen als Objekt zurück:"," ",e.jsx("code",{children:"{ quotient, rest }"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"istTeilbar(a, b)"})," — ",e.jsx("code",{children:"true"}),", wenn der Rest 0 ist. Testen Sie damit, welche Zahlen von 1 bis 50 durch 7 teilbar sind."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"modulo(17, 5)"})," → 2,"," ",e.jsx("code",{children:"modulo(20, 4)"})," → 0, ",e.jsx("code",{children:"modulo(3, 7)"})," → 3,"," ",e.jsx("code",{children:"modulo(0, 5)"})," → 0. Vergleichen Sie Ihr Resultat jeweils mit dem eingebauten ",e.jsx("code",{children:"%"}),", um zu prüfen, ob Sie richtig liegen."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sonderfälle bedenken:"})," Was passiert bei"," ",e.jsx("code",{children:"b === 0"}),"? Und was bei negativen Zahlen? Behandeln Sie mindestens den Fall ",e.jsx("code",{children:"b === 0"})," sauber (z. B. mit einer Fehlermeldung)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Wie viele Durchgänge braucht Ihre Schleife bei ",e.jsx("code",{children:"modulo(1000, 3)"}),"? Und bei ",e.jsx("code",{children:"modulo(1000000, 3)"}),"? Die Laufzeit hängt hier nicht von der Länge einer Liste ab — wovon dann? Warum ist das für sehr grosse Zahlen ein Problem?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Grösster gemeinsamer Teiler (GGT)"}),e.jsxs("p",{children:["Der ",e.jsx("strong",{children:"GGT"})," zweier Zahlen ist die grösste Zahl, die beide ohne Rest teilt. Zum Beispiel ist"," ",e.jsx("code",{children:"ggt(48, 18) === 6"}),". Man braucht ihn unter anderem zum Kürzen von Brüchen. Der ",e.jsx("em",{children:"euklidische Algorithmus"})," dafür ist über 2000 Jahre alt und einer der ältesten Algorithmen überhaupt."]}),e.jsx("p",{children:"Schreiben Sie drei Varianten und vergleichen Sie sie:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"ggtBrutal(a, b)"})," — probiert alle Zahlen von 1 bis zur kleineren der beiden durch und merkt sich die grösste, die beide teilt. Verwenden Sie dafür Ihr ",e.jsx("code",{children:"istTeilbar"})," aus Aufgabe 1."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtSubtraktion(a, b)"})," — der ursprüngliche Euklid: Solange die beiden Zahlen verschieden sind, ziehe die kleinere von der grösseren ab. Wenn beide gleich sind, ist das der GGT."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtModulo(a, b)"})," — die moderne Version: Solange"," ",e.jsx("code",{children:"b"})," nicht 0 ist, ersetze das Paar ",e.jsx("code",{children:"(a, b)"})," ","durch ",e.jsx("code",{children:"(b, a mod b)"}),". Sobald ",e.jsx("code",{children:"b === 0"})," ist, ist ",e.jsx("code",{children:"a"})," der GGT. Verwenden Sie dafür Ihre eigene"," ",e.jsx("code",{children:"modulo"}),"-Funktion aus Aufgabe 1."]})]}),e.jsxs("p",{children:["Alle drei Funktionen sollen zusätzlich die Anzahl"," ",e.jsx("strong",{children:"Durchgänge"})," mitzählen und ausgeben."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"(48, 18)"})," → 6,"," ",e.jsx("code",{children:"(1071, 462)"})," → 21, ",e.jsx("code",{children:"(17, 5)"})," → 1 (teilerfremd), ",e.jsx("code",{children:"(100, 100)"})," → 100 und"," ",e.jsx("code",{children:"(1000000, 2)"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Erweiterungen:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"kgv(a, b)"})," — das kleinste gemeinsame Vielfache. Tipp:"," ",e.jsx("code",{children:"a · b / ggt(a, b)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"kuerze(zaehler, nenner)"})," — kürzt einen Bruch vollständig und gibt ",e.jsx("code",{children:"{ zaehler, nenner }"})," zurück. Testen Sie mit ",e.jsx("code",{children:"48/18"})," → ",e.jsx("code",{children:"8/3"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtListe(zahlen)"})," — der GGT einer ganzen Liste von Zahlen (mehrfach anwenden)."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Vergleichen Sie die Anzahl Durchgänge der drei Varianten für"," ",e.jsx("code",{children:"(1071, 462)"})," und für ",e.jsx("code",{children:"(1000000, 2)"}),". Welche Variante ist bei welcher Eingabe besonders schlecht und warum? Ordnen Sie ",e.jsx("code",{children:"ggtBrutal"})," einer Laufzeitklasse zu."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Selection Sort (Sortieren durch Auswählen)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Idee:"})," Suche in der unsortierten Restliste das"," ",e.jsx("em",{children:"kleinste"})," Element und tausche es an den Anfang dieser Restliste. Wiederhole das, bis alles sortiert ist."]}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("code",{children:"selectionSort(liste)"}),", die eine ",e.jsx("strong",{children:"neue, sortierte Liste"})," zurückgibt. Das Original darf nicht verändert werden (Tipp: ",e.jsx("code",{children:"[...liste]"}),")."]}),e.jsx("p",{children:"Ihre Funktion soll ausserdem:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["die Anzahl ",e.jsx("strong",{children:"Vergleiche"})," und"," ",e.jsx("strong",{children:"Tausche"})," mitzählen und am Schluss mit"," ",e.jsx("code",{children:"console.log"})," ausgeben"]}),e.jsx("li",{children:"nach jedem Durchlauf den Zwischenstand der Liste ausgeben, damit man den Ablauf nachvollziehen kann"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"[5, 3, 8, 1, 9, 2]"}),","," ",e.jsx("code",{children:"[1, 2, 3, 4, 5]"})," (bereits sortiert),"," ",e.jsx("code",{children:"[5, 4, 3, 2, 1]"})," (umgekehrt) und einer leeren Liste"," ",e.jsx("code",{children:"[]"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Erweiterung:"})," Bauen Sie einen zweiten Parameter"," ",e.jsx("code",{children:"absteigend"})," ein (Standardwert ",e.jsx("code",{children:"false"}),"), mit dem man die Sortierrichtung umdrehen kann."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Wie viele Vergleiche braucht Selection Sort bei einer bereits sortierten Liste? Vergleichen Sie das mit dem optimierten Bubble Sort aus der Theorie. Warum verhalten sich die beiden hier unterschiedlich?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Insertion Sort (Sortieren durch Einfügen)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Idee:"})," Wie beim Sortieren von Jasskarten auf der Hand. Die linke Seite der Liste ist immer schon sortiert. Man nimmt die nächste Karte und schiebt sie so weit nach links, bis sie am richtigen Ort liegt."]}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("code",{children:"insertionSort(liste)"}),", die eine neue sortierte Liste zurückgibt."]}),e.jsx("p",{children:"Anforderungen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Verwenden Sie eine ",e.jsx("code",{children:"while"}),"-Schleife für das Nach-links-Schieben."]}),e.jsxs("li",{children:["Zählen Sie die ",e.jsx("strong",{children:"Verschiebungen"})," und geben Sie sie aus."]}),e.jsxs("li",{children:["Schreiben Sie eine zweite Funktion"," ",e.jsx("code",{children:"insertionSortObjekte(liste, schluessel)"}),", die eine Liste von ",e.jsx("strong",{children:"Objekten"})," nach einer beliebigen Eigenschaft sortiert. Beispiel:",e.jsx("br",{}),e.jsx("code",{children:'insertionSortObjekte(schueler, "note")'})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testdaten für die Objekt-Variante:"})," mindestens fünf Schüler-Objekte mit ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"note"})," und"," ",e.jsx("code",{children:"alter"}),". Sortieren Sie einmal nach ",e.jsx("code",{children:"note"})," und einmal nach ",e.jsx("code",{children:"alter"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Bei welcher Eingabe ist Insertion Sort ",e.jsx("code",{children:"O(n)"})," und bei welcher"," ",e.jsx("code",{children:"O(n²)"}),"? Warum gilt Insertion Sort für"," ",e.jsx("em",{children:"fast sortierte"})," Listen als sehr gut?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Notenstatistik — alles zusammen"}),e.jsxs("p",{children:["Eine Anwendung, die mehrere Algorithmen dieser Woche kombiniert. Gegeben ist eine Liste von Schüler-Objekten mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"klasse"})," und ",e.jsx("code",{children:"noten"})," (Array mit mindestens drei Zahlen). Erstellen Sie mindestens ",e.jsx("strong",{children:"8"})," solche Objekte aus mindestens 2 Klassen."]}),e.jsx("p",{children:"Schreiben Sie folgende Funktionen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"durchschnitt(noten)"})," — Mittelwert einer Notenliste, auf 2 Stellen gerundet. Leere Liste ⇒ ",e.jsx("code",{children:"0"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"besteSchuelerin(schueler)"})," — das Objekt mit dem höchsten Durchschnitt (Muster: Maximum finden, ",e.jsx("em",{children:"nicht"})," ","sortieren)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rangliste(schueler)"})," — eine ",e.jsx("strong",{children:"neue"})," ","Liste, absteigend nach Durchschnitt sortiert. Verwenden Sie einen"," ",e.jsx("strong",{children:"selbst geschriebenen"})," Sortieralgorithmus aus Aufgabe 3 oder 4, nicht ",e.jsx("code",{children:"sort()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"notenverteilung(schueler)"})," — zählt mit einem Objekt, wie oft jede gerundete Note (1–6) insgesamt vorkommt. Ausgabe zusätzlich als kleines Textdiagramm, z. B.",e.jsx("br",{}),e.jsx("code",{children:"5: ████ (4)"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"klassenstatistik(schueler)"})," — gruppiert nach"," ",e.jsx("code",{children:"klasse"})," und gibt pro Klasse Anzahl, Durchschnitt und Anzahl ungenügender Noten (< 4) zurück."]})]}),e.jsxs("p",{children:["Geben Sie zum Schluss einen sauber formatierten Bericht mit"," ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Bestimmen Sie für jede der fünf Funktionen die Laufzeit in Abhängigkeit von der Anzahl Schüler ",e.jsx("code",{children:"n"}),". Welche Funktion ist die teuerste und warum? Wie ändert sich die Gesamtlaufzeit, wenn Sie in"," ",e.jsx("code",{children:"rangliste"})," Quicksort statt Bubble Sort verwenden würden?"]})]})]})]})}const Bl=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"}));function si(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Repetition"}),e.jsx("h2",{children:"Von den Algorithmen zum funktionalen Stil"}),e.jsx("p",{children:"Schleifenmuster · Funktionen als Werte"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Woche 3 in drei Zeilen"}),e.jsx("p",{children:"Fast alle Algorithmen der letzten Woche folgten demselben Bauplan: eine Schleife über eine Liste, plus eine Variable, die sich merkt, was bisher passiert ist."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Suchen"})," — durchgehen, bis etwas passt"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extremwert"})," — die bisher beste Zahl merken"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Akkumulieren"})," — Summe, Anzahl, Durchschnitt"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Häufigkeiten"})," — mit einem Objekt mitzählen"]})]}),e.jsx("p",{children:"Wir haben also viermal fast dasselbe Gerüst geschrieben. Genau da setzt diese Woche an."})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Muster als Code"}),e.jsx(o,{filename:"repetition-muster.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
// nur die Zeile in der Mitte ist verschieden.`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen sind Werte"}),e.jsxs("p",{children:["Das zweite Puzzleteil kennen Sie schon: In JavaScript ist eine Funktion ein ganz normaler Wert. Man kann sie in einer Variablen speichern und an eine andere Funktion ",e.jsx("em",{children:"übergeben"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"function quadrat(x) { return x * x; }"})}),e.jsxs("li",{children:["kurz als Arrow-Funktion:"," ",e.jsx("code",{children:"const quadrat = (x) => x * x"})]}),e.jsxs("li",{children:["Eine übergebene Funktion heisst ",e.jsx("strong",{children:"Callback"}),"."]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callbacks — kurz getestet"}),e.jsx(o,{filename:"callbacks.js",children:`// Funktion in einer Variablen
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
//          quadrat(5) = das Resultat des Aufrufs`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Brücke zu dieser Woche"}),e.jsx("p",{children:"Das Gerüst der Schleife ist immer gleich — nur der Kern ändert sich. Also: Gerüst einmal bauen, den Kern als Callback übergeben."}),e.jsxs("p",{children:["Genau das sind ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"}),". Damit schrumpfen die Algorithmen von Woche 3 auf je eine Zeile."]})]})})]})}const Wl=Object.freeze(Object.defineProperty({__proto__:null,default:si},Symbol.toStringTag,{value:"Module"}));function ii(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Funktionales Programmieren"}),e.jsx("h2",{children:"map · filter · reduce"}),e.jsx("p",{children:"Beschreiben, was herauskommen soll — nicht, wie man dahin kommt"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee in einem Satz"}),e.jsxs("p",{children:["Bisher haben wir ",e.jsx("strong",{children:"imperativ"})," programmiert: Wir sagen dem Computer Schritt für Schritt, ",e.jsx("em",{children:"wie"})," er etwas tun soll. Funktional heisst: Wir beschreiben, ",e.jsx("em",{children:"was"})," herauskommen soll."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Imperativ:"})," «Leere Liste anlegen, von 0 bis Ende laufen, jedes Element verdoppeln, anhängen.»"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktional:"})," «Die Liste, in der jedes Element verdoppelt ist.»"]})]}),e.jsxs("p",{children:["Drei Werkzeuge decken den grössten Teil ab:"," ",e.jsxs("strong",{children:[e.jsx("code",{children:"map"})," verändert"]}),","," ",e.jsxs("strong",{children:[e.jsx("code",{children:"filter"})," wählt aus"]}),","," ",e.jsxs("strong",{children:[e.jsx("code",{children:"reduce"})," fasst zusammen"]}),"."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — jedes Element umwandeln"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"})," geht durch die Liste, wendet auf jedes Element den Callback an und gibt eine ",e.jsx("strong",{children:"neue Liste"})," zurück. Die neue Liste ist immer ",e.jsx("strong",{children:"gleich lang"})," wie die alte."]}),e.jsx("p",{children:"Merkbild: Ein Fliessband, auf dem jedes Teil dieselbe Bearbeitung bekommt."})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — Code"}),e.jsx(o,{filename:"map.js",children:`const zahlen = [1, 2, 3, 4];

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
console.log(namen.map((n, i) => (i + 1) + ". " + n));`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Elemente auswählen"}),e.jsxs("p",{children:[e.jsx("code",{children:"filter"})," behält nur die Elemente, für die der Callback"," ",e.jsx("code",{children:"true"})," zurückgibt. Die neue Liste ist"," ",e.jsx("strong",{children:"gleich lang oder kürzer"}),", die Elemente selbst bleiben unverändert."]}),e.jsx("p",{children:"Merkbild: Ein Sieb. Der Callback beantwortet für jedes Element die Frage «darfst du bleiben?»."})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Code"}),e.jsx(o,{filename:"filter.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
// Mit geschweiften Klammern braucht es ein return.`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — alles zu einem Wert zusammenfassen"}),e.jsxs("p",{children:[e.jsx("code",{children:"reduce"})," ist das mächtigste der drei. Es hat einen"," ",e.jsx("strong",{children:"Akkumulator"})," — eine Variable, die von Element zu Element weitergereicht wird."]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"liste.reduce((akku, element) => ..., startwert)"})}),e.jsxs("li",{children:["Was der Callback zurückgibt, ist der ",e.jsx("code",{children:"akku"})," im nächsten Durchgang."]}),e.jsx("li",{children:"Der Akkumulator kann alles sein: Zahl, String, Array oder Objekt."})]}),e.jsx("p",{children:"Merkbild: Ein Schneeball, der die Liste hinunterrollt und alles aufsammelt."})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — Code"}),e.jsx(o,{filename:"reduce.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
console.log(anzahl); // { a: 3, b: 1, c: 1 }`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die kleinen Geschwister"}),e.jsx("p",{children:"Für die Suchmuster aus Woche 3 gibt es fertige Methoden. Jede ersetzt eine ganze Schleife:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Ersetzt Muster"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"find"})}),e.jsx("td",{children:"erstes passendes Element"}),e.jsx("td",{children:"lineare Suche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findIndex"})}),e.jsx("td",{children:"Index davon (oder −1)"}),e.jsx("td",{children:"lineare Suche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"some"})}),e.jsxs("td",{children:[e.jsx("code",{children:"true"}),", wenn mindestens eines passt"]}),e.jsx("td",{children:"«gibt es ein …?»"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"every"})}),e.jsxs("td",{children:[e.jsx("code",{children:"true"}),", wenn alle passen"]}),e.jsx("td",{children:"«sind alle …?»"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"includes"})}),e.jsxs("td",{children:[e.jsx("code",{children:"true"}),", wenn Wert vorkommt"]}),e.jsx("td",{children:"einfache Suche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"toSorted"})}),e.jsx("td",{children:"neue, sortierte Liste"}),e.jsx("td",{children:"Bubble Sort & Co."})]})]})]}),e.jsx(o,{filename:"geschwister.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Verketten — die Pipeline"}),e.jsxs("p",{children:["Weil ",e.jsx("code",{children:"map"})," und ",e.jsx("code",{children:"filter"})," wieder eine Liste zurückgeben, kann man sie direkt aneinanderhängen. Lesen Sie eine Kette immer von oben nach unten wie ein Rezept."]}),e.jsx(o,{filename:"pipeline.js",children:`const schueler = [
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
// dann map, zuletzt reduce.`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigene Funktionen im funktionalen Stil"}),e.jsxs("p",{children:["Bis jetzt haben wir die Callbacks immer direkt hineingeschrieben. Das ist bei kurzen Ausdrücken praktisch — aber sobald eine Regel mehrfach vorkommt oder komplizierter wird, gibt man ihr besser einen"," ",e.jsx("strong",{children:"Namen"}),"."]}),e.jsx("p",{children:"Zwei Bausteine, die man immer wieder selbst schreibt:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prädikate"})," — Funktionen, die eine Frage mit"," ",e.jsx("code",{children:"true"}),"/",e.jsx("code",{children:"false"})," beantworten. Sie kommen in"," ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"some"})," und"," ",e.jsx("code",{children:"every"})," zum Einsatz. Namenskonvention:"," ",e.jsx("code",{children:"istBestanden"}),", ",e.jsx("code",{children:"hatLager"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transformationen"})," — Funktionen, die einen Wert in einen anderen umwandeln. Sie kommen in ",e.jsx("code",{children:"map"})," zum Einsatz. Namenskonvention: ",e.jsx("code",{children:"zuAnzeigename"}),","," ",e.jsx("code",{children:"mitMwst"}),"."]})]}),e.jsxs("p",{children:["Wichtig: Eine solche Funktion soll ",e.jsx("strong",{children:"rein"})," sein — sie arbeitet nur mit ihren Parametern, verändert nichts von aussen und gibt immer dasselbe Resultat für dieselbe Eingabe. Dadurch kann man sie isoliert testen und überall wiederverwenden."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 1 — Benannte Bausteine"}),e.jsx("p",{children:"Dieselbe Auswertung zweimal: einmal mit anonymen Callbacks, einmal mit benannten Funktionen. Der zweite Block liest sich fast wie ein deutscher Satz."}),e.jsx(o,{filename:"eigene-funktionen.js",children:`const produkte = [
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
console.log(produkte.every(istVerfuegbar)); // false`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achtung:"})," ",e.jsx("code",{children:"filter(istVerfuegbar)"})," —"," ",e.jsx("em",{children:"ohne"})," Klammern. Wir übergeben die Funktion selbst."," ",e.jsx("code",{children:"filter(istVerfuegbar())"})," würde sie sofort aufrufen und das Resultat übergeben — das ergibt einen Fehler."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 2 — Funktionen, die Funktionen bauen"}),e.jsxs("p",{children:["Manchmal braucht man dasselbe Prädikat mit unterschiedlichen Werten:"," ",e.jsx("em",{children:"teurer als 50"}),", ",e.jsx("em",{children:"teurer als 100"}),". Statt jedes Mal eine neue Funktion zu schreiben, schreibt man eine"," ",e.jsx("strong",{children:"Funktionen-Fabrik"}),": eine Funktion, die eine Funktion zurückgibt."]}),e.jsx(o,{filename:"funktionen-fabrik.js",children:`const produkte = [
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
console.log(produkte.toSorted(nach("lager")).map((p) => p.name));`}),e.jsxs("p",{children:["Der Trick: ",e.jsx("code",{children:"teurerAls(50)"})," merkt sich den Wert"," ",e.jsx("code",{children:"50"})," in der zurückgegebenen Funktion. Damit baut man aus einer Vorlage beliebig viele konkrete Prüfungen."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spickzettel"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — gleich viele Elemente, verändert"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — weniger Elemente, unverändert"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — ein einziger Wert am Schluss"]}),e.jsxs("li",{children:[e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"some"}),", ",e.jsx("code",{children:"every"})," — Suchfragen"]}),e.jsxs("li",{children:["Alle drei erzeugen ",e.jsx("strong",{children:"neue"})," Listen — das Original bleibt heil — auch ",e.jsx("code",{children:"toSorted"}),". Nur das ältere"," ",e.jsx("code",{children:"sort"})," und ",e.jsx("code",{children:"push"})," verändern direkt."]}),e.jsxs("li",{children:["Arrow-Funktion ohne Klammern gibt automatisch zurück:"," ",e.jsx("code",{children:"(x) => x * 2"}),". Mit ",e.jsx("code",{children:"{ }"})," ","braucht es ein ",e.jsx("code",{children:"return"}),"."]}),e.jsxs("li",{children:["Eigene ",e.jsx("strong",{children:"Prädikate"})," und"," ",e.jsx("strong",{children:"Transformationen"})," benennen — übergeben ohne Klammern: ",e.jsx("code",{children:"filter(istVerfuegbar)"}),"."]}),e.jsxs("li",{children:["Eine ",e.jsx("strong",{children:"Funktionen-Fabrik"})," gibt eine Funktion zurück:"," ",e.jsx("code",{children:"filter(teurerAls(50))"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Jetzt geht es an die Aufgaben."})," Halten Sie diese Seite als Nachschlagewerk offen."]})]})})]})}const Fl=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));function ri(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben: Funktionales Programmieren"}),e.jsxs("p",{children:[e.jsx("strong",{children:"10 Aufgaben"})," zu ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),","," ",e.jsx("code",{children:"reduce"})," und den Suchmethoden. Die Aufgaben 1–5 sind kurz (je ca. 5–10 Minuten), die Aufgaben 6–8 mittel (je ca. 20 Minuten) und die Aufgaben 9–10 umfangreich (je ca. 30–45 Minuten)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Grundregel für alle Aufgaben:"})," Keine ",e.jsx("code",{children:"for"}),"- oder ",e.jsx("code",{children:"while"}),"-Schleifen, kein ",e.jsx("code",{children:"push"})," — ausser es steht ausdrücklich dabei. Verwenden Sie Array-Methoden und geben Sie jedes Resultat mit ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("p",{children:["Legen Sie pro Aufgabe eine Datei an: ",e.jsx("code",{children:"aufgabe-01.js"})," bis"," ",e.jsx("code",{children:"aufgabe-10.js"}),". Beginnen Sie jede Datei mit einem kurzen Kommentar:"]}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Preise umrechnen
// Verwendet: map
// Schwierig war: ...`})})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Einfach (Aufgaben 1–5)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: map — Preise und Namen"}),e.jsxs("p",{children:["Gegeben: ",e.jsx("code",{children:"const preise = [12, 45.5, 8, 99.9, 23];"})," und"," ",e.jsx("code",{children:'const namen = ["anna", "ben", "clara"];'})]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"mitMwst"})," — alle Preise mit 8.1 % Mehrwertsteuer, auf 2 Stellen gerundet."]}),e.jsxs("li",{children:[e.jsx("code",{children:"gross"})," — alle Namen in Grossbuchstaben (",e.jsx("code",{children:".toUpperCase()"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"nummeriert"})," — die Namen als ",e.jsx("code",{children:'"1. Anna"'}),","," ",e.jsx("code",{children:'"2. Ben"'}),", … Der Callback von ",e.jsx("code",{children:"map"})," bekommt als zweiten Parameter den Index."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Kontrolle:"})," Geben Sie am Schluss ",e.jsx("code",{children:"preise"})," ","nochmals aus. Die Liste muss unverändert sein."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: filter — aussortieren"}),e.jsxs("p",{children:["Gegeben:"," ",e.jsx("code",{children:"const zahlen = [3, 12, 7, 40, 15, 8, 23, 4, 91, 16];"})," ","und"," ",e.jsx("code",{children:'const woerter = ["Haus", "Ei", "Computer", "Baum", "JavaScript", "Uhr"];'})]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Alle Zahlen grösser als 10."}),e.jsx("li",{children:"Alle ungeraden Zahlen."}),e.jsx("li",{children:"Alle Zahlen, die durch 4 teilbar sind."}),e.jsx("li",{children:"Alle Wörter mit mehr als 4 Buchstaben."}),e.jsxs("li",{children:["Alle Wörter, die ein ",e.jsx("code",{children:'"a"'})," enthalten (",e.jsx("code",{children:'.includes("a")'}),")."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zusatzfrage als Kommentar:"})," Wie viele Elemente hat eine ",e.jsx("code",{children:"filter"}),"-Liste höchstens?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: reduce — zusammenfassen"}),e.jsxs("p",{children:["Gegeben: ",e.jsx("code",{children:"const zahlen = [5, 2, 9, 1, 7, 3];"})]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"summe"})," — die Summe aller Zahlen (Startwert"," ",e.jsx("code",{children:"0"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"produkt"})," — das Produkt aller Zahlen. Überlegen Sie: Welcher Startwert ist hier richtig — und warum nicht 0?"]}),e.jsxs("li",{children:[e.jsx("code",{children:"maximum"})," — die grösste Zahl, nur mit"," ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"satz"})," — aus"," ",e.jsx("code",{children:'["Ich", "lerne", "JavaScript"]'})," mit"," ",e.jsx("code",{children:"reduce"})," den String ",e.jsx("code",{children:'"Ich lerne JavaScript"'}),". Der Akkumulator ist hier ein String."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Die erste Kette"}),e.jsxs("p",{children:["Gegeben ist eine Liste von Produkten:",e.jsx("br",{}),e.jsx("code",{children:'{ name: "Maus", preis: 25, lager: 12 }'})," — erstellen Sie selbst mindestens 6 solche Objekte."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Die Namen aller Produkte, die günstiger als 50 sind — als eine Kette ",e.jsx("code",{children:"filter"})," → ",e.jsx("code",{children:"map"}),"."]}),e.jsxs("li",{children:["Der Gesamtwert des Lagers (",e.jsx("code",{children:"preis · lager"})," aufsummiert) — als Kette ",e.jsx("code",{children:"map"})," → ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("li",{children:["Die Namen der Produkte, die ausverkauft sind (",e.jsx("code",{children:"lager === 0"}),"). Mindestens eines Ihrer Produkte soll ausverkauft sein."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Suchen ohne Schleife"}),e.jsxs("p",{children:["Verwenden Sie dieselbe Produktliste wie in Aufgabe 4 und beantworten Sie jede Frage mit ",e.jsx("strong",{children:"genau einer"})," Methode aus"," ",e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"findIndex"}),", ",e.jsx("code",{children:"some"}),","," ",e.jsx("code",{children:"every"}),", ",e.jsx("code",{children:"includes"}),"."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Das erste Produkt, das teurer als 40 ist."}),e.jsx("li",{children:"An welcher Position steht das Produkt «Maus»?"}),e.jsx("li",{children:"Gibt es überhaupt ein Produkt unter 10 Franken?"}),e.jsx("li",{children:"Sind alle Produkte auf Lager?"}),e.jsx("li",{children:"Schreiben Sie als Kommentar dazu: Welche dieser Methoden hören auf, sobald sie fündig geworden sind — und welche nicht?"})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Mittel (Aufgaben 6–8)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Notenauswertung"}),e.jsxs("p",{children:["Erstellen Sie eine Liste von mindestens 8 Schüler-Objekten mit"," ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"klasse"})," (mindestens 2 verschiedene) und ",e.jsx("code",{children:"noten"})," (Array mit 3–5 Zahlen)."]}),e.jsx("p",{children:"Schreiben Sie folgende Funktionen — alle ohne Schleifen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"durchschnitt(noten)"})," — Mittelwert einer Notenliste, auf 2 Stellen gerundet."]}),e.jsxs("li",{children:[e.jsx("code",{children:"mitSchnitt(schueler)"})," — gibt eine neue Liste zurück, in der jedes Objekt zusätzlich die Eigenschaft"," ",e.jsx("code",{children:"schnitt"})," hat. Tipp: ",e.jsx("code",{children:"map"})," mit Spread:"," ",e.jsx("code",{children:"({ ...s, schnitt: durchschnitt(s.noten) })"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"bestandene(schueler)"})," — alle mit Schnitt ≥ 4."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rangliste(schueler)"})," — nach Schnitt absteigend sortiert, als ",e.jsx("code",{children:'"1. Anna (5.25)"'})," ausgegeben. Verwenden Sie ",e.jsx("code",{children:"toSorted"})," mit einer Vergleichsfunktion."]}),e.jsxs("li",{children:[e.jsx("code",{children:"klassenschnitt(schueler, klasse)"})," — Durchschnitt aller Noten einer Klasse."]}),e.jsxs("li",{children:["Schreiben Sie mindestens zwei ",e.jsx("strong",{children:"benannte Prädikate"})," ","(z. B. ",e.jsx("code",{children:"istBestanden"}),", ",e.jsx("code",{children:"istInKlasse"}),") und übergeben Sie diese an ",e.jsx("code",{children:"filter"})," — ohne Klammern."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Ausgabe:"})," ein kurzer, sauber formatierter Bericht mit ",e.jsx("code",{children:"console.log"}),"."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Zählen und Gruppieren mit reduce"}),e.jsxs("p",{children:["Hier ist der Akkumulator immer ein ",e.jsx("strong",{children:"Objekt"}),". Das ist das wichtigste ",e.jsx("code",{children:"reduce"}),"-Muster überhaupt."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"buchstabenZaehlen(text)"})," — zählt, wie oft jeder Buchstabe vorkommt. Tipp:"," ",e.jsx("code",{children:'text.toLowerCase().split("")'})," ergibt ein Array. Testen Sie mit ",e.jsx("code",{children:'"Informatik ist toll"'})," (Leerzeichen vorher herausfiltern)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"haeufigsterBuchstabe(text)"})," — gibt den häufigsten Buchstaben zurück. Tipp: ",e.jsx("code",{children:"Object.entries()"})," und dann"," ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"gruppiereNach(liste, schluessel)"})," — gruppiert eine Liste von Objekten nach einer Eigenschaft und gibt ein Objekt zurück, z. B. ",e.jsx("code",{children:'{ "1a": [...], "1b": [...] }'}),". Testen Sie es mit Ihrer Schülerliste aus Aufgabe 6 (Schlüssel"," ",e.jsx("code",{children:'"klasse"'}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"wortHaeufigkeit(satz)"})," — zählt, wie oft jedes Wort in einem Satz vorkommt, und gibt die Top 3 aus."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Woche 3 umschreiben"}),e.jsxs("p",{children:["Nehmen Sie Ihre Lösungen der Standard-Algorithmen und schreiben Sie sie funktional neu. Schreiben Sie"," ",e.jsx("strong",{children:"beide Versionen untereinander"})," in dieselbe Datei — die alte Schleifenversion als Kommentar darüber."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"lineareSuche(liste, gesucht)"})," → ",e.jsx("code",{children:"findIndex"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"maximum(liste)"})," und ",e.jsx("code",{children:"minimum(liste)"})," →"," ",e.jsx("code",{children:"reduce"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"summe"}),", ",e.jsx("code",{children:"durchschnitt"}),","," ",e.jsx("code",{children:"zaehleWenn(liste, bedingung)"})," → ",e.jsx("code",{children:"reduce"})," ","bzw. ",e.jsx("code",{children:"filter"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"umkehren(liste)"})," — ohne ",e.jsx("code",{children:".reverse()"}),". Tipp:"," ",e.jsx("code",{children:"reduce"})," mit einem Array als Akkumulator, neues Element jeweils vorne anfügen: ",e.jsx("code",{children:"[element, ...akku]"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"istPalindrom(wort)"})," — mit den Methoden von oben."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reflexion als Kommentar:"})," Bei welchen der fünf Aufgaben ist die funktionale Version klarer, bei welchen nicht? Ändert sich die Laufzeit (O-Notation)?"]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Anspruchsvoll (Aufgaben 9–10)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Datenanalyse — Musik-Streaming"}),e.jsxs("p",{children:["Erstellen Sie einen Datensatz von mindestens"," ",e.jsx("strong",{children:"12 Songs"})," mit den Eigenschaften ",e.jsx("code",{children:"titel"}),","," ",e.jsx("code",{children:"artist"}),", ",e.jsx("code",{children:"genre"}),", ",e.jsx("code",{children:"dauer"})," (in Sekunden), ",e.jsx("code",{children:"jahr"})," und ",e.jsx("code",{children:"streams"}),". Mindestens 4 verschiedene Genres und mindestens 2 Songs pro Artist."]}),e.jsx("p",{children:"Beantworten Sie alle Fragen als Pipeline, ohne Schleifen:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Gesamtspieldauer aller Songs, formatiert als «1h 23m 45s»."}),e.jsxs("li",{children:["Die 3 meistgestreamten Songs als"," ",e.jsx("code",{children:`"1. Titel — Artist (1'200'000 Streams)"`}),"."]}),e.jsxs("li",{children:["Streams pro Genre (Objekt), zusätzlich als Textdiagramm:",e.jsx("br",{}),e.jsx("code",{children:"Rock: ██████ (6.2 Mio)"})]}),e.jsxs("li",{children:["Durchschnittliche Songlänge pro Genre — als Objekt"," ",e.jsx("code",{children:"{ Rock: 245, Pop: 198, ... }"}),"."]}),e.jsx("li",{children:"Der Artist mit den meisten Gesamtstreams (nicht nur mit dem besten einzelnen Song)."}),e.jsxs("li",{children:["Schreiben Sie eine ",e.jsx("strong",{children:"Funktionen-Fabrik"})," ",e.jsx("code",{children:"ausGenre(genre)"}),", die ein Prädikat zurückgibt, sowie"," ",e.jsx("code",{children:"nach(schluessel)"})," für ",e.jsx("code",{children:"toSorted"}),". Verwenden Sie beide mindestens zweimal mit unterschiedlichen Werten."]}),e.jsxs("li",{children:[e.jsx("code",{children:"suche(liste, text)"})," — findet alle Songs, bei denen"," ",e.jsx("code",{children:"text"})," im Titel ",e.jsx("em",{children:"oder"})," im Artist vorkommt, unabhängig von Gross-/Kleinschreibung."]}),e.jsxs("li",{children:[e.jsx("code",{children:"playlist(liste, maxDauer)"})," — stellt eine Playlist zusammen, die die vorgegebene Gesamtdauer nicht überschreitet. Songs werden von den meistgestreamten her genommen. Tipp: mit"," ",e.jsx("code",{children:"reduce"})," und einem Akkumulator"," ",e.jsx("code",{children:"{ songs: [], dauer: 0 }"}),"."]})]}),e.jsx("p",{children:"Geben Sie zum Schluss einen vollständigen, lesbaren Bericht aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Die Werkzeuge selbst bauen"}),e.jsxs("p",{children:["Zum Schluss schauen wir unter die Motorhaube. Hier"," ",e.jsx("strong",{children:"dürfen"})," Sie Schleifen und ",e.jsx("code",{children:"push"})," ","verwenden — aber nur innerhalb Ihrer eigenen Werkzeuge."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"meinMap(liste, callback)"}),","," ",e.jsx("code",{children:"meinFilter(liste, callback)"}),","," ",e.jsx("code",{children:"meinReduce(liste, callback, startwert)"})," — mit einer klassischen ",e.jsx("code",{children:"for"}),"-Schleife nachbauen. Der Callback muss auch den Index bekommen."]}),e.jsxs("li",{children:["Testen Sie jede Funktion gegen das Original: Ergibt"," ",e.jsx("code",{children:"meinMap(a, f)"})," dasselbe wie ",e.jsx("code",{children:"a.map(f)"}),"? Schreiben Sie dafür eine kleine Hilfsfunktion"," ",e.jsx("code",{children:"pruefe(beschreibung, erwartet, erhalten)"}),", die"," ",e.jsx("code",{children:"OK"})," oder ",e.jsx("code",{children:"FEHLER"})," ausgibt."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Die Knacknuss:"})," Bauen Sie ",e.jsx("code",{children:"meinMap"})," und"," ",e.jsx("code",{children:"meinFilter"})," ein zweites Mal — diesmal ",e.jsx("em",{children:"ohne"})," ","Schleife, nur mit ",e.jsx("code",{children:"reduce"}),". Damit zeigen Sie:"," ",e.jsx("code",{children:"reduce"})," ist das allgemeinste der drei Werkzeuge."]}),e.jsxs("li",{children:[e.jsx("code",{children:"pipe(...funktionen)"})," — gibt eine neue Funktion zurück, die alle übergebenen Funktionen nacheinander anwendet.",e.jsx("br",{}),e.jsx("code",{children:"const verarbeite = pipe(verdoppeln, plusEins); verarbeite(5); // 11"}),e.jsx("br",{}),"Tipp: auch das ist ein ",e.jsx("code",{children:"reduce"})," — über die Liste der Funktionen."]}),e.jsx("li",{children:"Lösen Sie damit eine Auswertung aus Aufgabe 9 nochmals im Pipe-Stil und vergleichen Sie die Lesbarkeit."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Reflexion als Kommentar:"})," Warum kann man"," ",e.jsx("code",{children:"map"})," und ",e.jsx("code",{children:"filter"})," mit ",e.jsx("code",{children:"reduce"})," ","bauen, aber ",e.jsx("code",{children:"reduce"})," nicht mit ",e.jsx("code",{children:"map"}),"?"]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("p",{children:["Zehn Dateien ",e.jsx("code",{children:"aufgabe-01.js"})," bis ",e.jsx("code",{children:"aufgabe-10.js"})," ","in einem Ordner ",e.jsx("code",{children:"woche-04-fp"}),". Jede Datei muss ohne Fehler laufen (",e.jsx("code",{children:"node aufgabe-01.js"}),") und ihre Resultate ausgeben."]}),e.jsx("p",{children:"Die Aufgaben 1–5 sollten Sie in der ersten Lektion abschliessen können. Wer bei 9 und 10 nicht fertig wird: Halten Sie im Kommentar fest, wie weit Sie gekommen sind und wo Sie stecken geblieben sind."})]})]})}const Ol=Object.freeze(Object.defineProperty({__proto__:null,default:ri},Symbol.toStringTag,{value:"Module"}));function li(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Repetition"}),e.jsx("h2",{children:"Vom funktionalen Stil zu Objekten"}),e.jsx("p",{children:"map · filter · reduce · Objekte als Datensätze"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Woche 4 in Kürze"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — gleich viele Elemente, umgewandelt"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — weniger Elemente, unverändert"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — ein einziger Wert am Schluss"]}),e.jsxs("li",{children:[e.jsx("code",{children:"find"}),", ",e.jsx("code",{children:"some"}),", ",e.jsx("code",{children:"every"}),","," ",e.jsx("code",{children:"toSorted"})," — die Suchfragen"]}),e.jsxs("li",{children:["Eigene ",e.jsx("strong",{children:"Prädikate"})," und"," ",e.jsx("strong",{children:"Transformationen"}),", übergeben ohne Klammern"]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eine Pipeline zum Aufwärmen"}),e.jsx(o,{filename:"repetition-fp.js",children:`const konten = [
  { inhaber: "Anna", stand: 1250, typ: "Sparkonto" },
  { inhaber: "Ben", stand: -80, typ: "Privatkonto" },
  { inhaber: "Clara", stand: 640, typ: "Privatkonto" },
];

const istImPlus = (k) => k.stand > 0;

console.log(konten.filter(istImPlus).map((k) => k.inhaber));
console.log(konten.reduce((a, k) => a + k.stand, 0));`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte — bisher nur Daten"}),e.jsxs("p",{children:["Seit Woche 2 verwenden wir Objekte als ",e.jsx("strong",{children:"Datensätze"}),": mehrere zusammengehörende Werte unter einem Namen. Die Funktionen, die mit diesen Daten arbeiten, liegen aber irgendwo daneben."]}),e.jsxs("p",{children:["Ein Objekt kann jedoch auch ",e.jsx("strong",{children:"Funktionen"})," enthalten. Eine Funktion, die in einem Objekt steckt, heisst"," ",e.jsx("strong",{children:"Methode"}),". Mit ",e.jsx("code",{children:"this"})," greift sie auf die eigenen Daten zu."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Von Daten zu Methoden"}),e.jsx(o,{filename:"objekte-methoden.js",children:`// bisher: Daten hier, Funktion dort
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
console.log(konto2.info()); // "Ben: 750 CHF"`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Das Problem: 100 Konten"}),e.jsxs("p",{children:["So ein Objekt von Hand zu schreiben, ist für ",e.jsx("em",{children:"ein"})," Konto in Ordnung. Aber für hundert Konten müssten wir hundertmal denselben Bauplan abtippen — inklusive aller Methoden."]}),e.jsxs("p",{children:["Was wir brauchen, ist der ",e.jsx("strong",{children:"Bauplan"})," als eigenes Sprachmittel: einmal beschreiben, beliebig oft daraus Objekte erzeugen. Das ist eine ",e.jsx("strong",{children:"Klasse"})," — und damit sind wir beim Thema dieser Woche."]})]})})]})}const Pl=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"}));function ti(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Objektorientierte Programmierung"}),e.jsx("h2",{children:"Klassen · Objekte · Vererbung"}),e.jsx("p",{children:"Daten und Verhalten gehören zusammen"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee"}),e.jsxs("p",{children:["Funktional heisst: Daten fliessen durch Funktionen."," ",e.jsx("strong",{children:"Objektorientiert"})," heisst: Daten und die Funktionen, die zu ihnen gehören, werden zu einer Einheit zusammengepackt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Klasse"})," — der Bauplan. Beschreibt, welche Daten und welche Methoden ein Objekt hat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekt / Instanz"})," — ein konkretes Exemplar, mit"," ",e.jsx("code",{children:"new"})," aus der Klasse erzeugt."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attribut (Eigenschaft)"})," — ein Datenfeld des Objekts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Methode"})," — eine Funktion, die zum Objekt gehört."]})]}),e.jsx("p",{children:"Bild: Die Klasse ist der Bauplan eines Hauses, die Objekte sind die gebauten Häuser. Alle folgen demselben Plan, haben aber unterschiedliche Farben, Bewohner und Adressen."})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 1 — Ein Bankkonto"}),e.jsx("p",{children:"Die drei Bestandteile jeder Klasse:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Name { ... }"})," — der Bauplan. Der Name beginnt gross."]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor(...)"})," — läuft automatisch bei"," ",e.jsx("code",{children:"new"})," und setzt die Startwerte."]}),e.jsxs("li",{children:["Methoden — wie Funktionen, aber ohne ",e.jsx("code",{children:"function"})," ","geschrieben."]})]}),e.jsxs("p",{children:[e.jsx("code",{children:"this"})," bedeutet innerhalb der Klasse immer:"," ",e.jsx("em",{children:"dieses eine Objekt, an dem gerade gearbeitet wird"}),"."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 1 — Code"}),e.jsx(o,{filename:"konto.js",children:`class Konto {
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
console.log(b.bewegungen); // []`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 2 — Eine Spielfigur"}),e.jsx("p",{children:"Ein zweites Beispiel, das zeigt: Methoden dürfen sich gegenseitig aufrufen, und ein Objekt darf andere Objekte als Attribute enthalten."})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beispiel 2 — Code"}),e.jsx(o,{filename:"spielfigur.js",children:`class Spielfigur {
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
console.log(ork.name, ork.lebensbalken());`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kapselung — nicht alles nach aussen zeigen"}),e.jsxs("p",{children:["Bisher kann jeder von aussen ",e.jsx("code",{children:"konto.stand = 1000000"})," ","schreiben und alle Regeln umgehen. ",e.jsx("strong",{children:"Kapselung"})," ","heisst: Die Daten werden geschützt, Zugriff gibt es nur über Methoden."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ein ",e.jsx("code",{children:"#"})," vor dem Namen macht ein Feld"," ",e.jsx("strong",{children:"privat"}),": ",e.jsx("code",{children:"#stand"}),". Von aussen ist es nicht mehr erreichbar."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Getter"})," geben kontrolliert Auskunft,"," ",e.jsx("strong",{children:"Setter"})," prüfen, bevor sie etwas ändern."]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kapselung — Code"}),e.jsx(o,{filename:"kapselung.js",children:`class Konto {
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

// console.log(k.#stand);  // Fehler: privat!`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vererbung — Gemeinsames nur einmal schreiben"}),e.jsxs("p",{children:["Ein Sparkonto ist ein Konto — mit einem Zusatz. Statt alles abzuschreiben, ",e.jsx("strong",{children:"erbt"})," die neue Klasse von der alten."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Sparkonto extends Konto"})," — Sparkonto übernimmt alle Attribute und Methoden."]}),e.jsxs("li",{children:[e.jsx("code",{children:"super(...)"})," im Konstruktor ruft den Konstruktor der Oberklasse auf. Er muss ",e.jsx("strong",{children:"zuerst"})," kommen."]}),e.jsxs("li",{children:["Eine Methode kann ",e.jsx("strong",{children:"überschrieben"})," werden — die Unterklasse definiert sie einfach neu."]})]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vererbung — Code"}),e.jsx(o,{filename:"vererbung.js",children:`class Konto {
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
console.log(alle.map((k) => k.info()));`}),e.jsxs("p",{children:["Der letzte Block ist ",e.jsx("strong",{children:"Polymorphie"}),": Wir rufen überall"," ",e.jsx("code",{children:"info()"})," auf, und jedes Objekt weiss selbst, welche Version die richtige ist."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Beide Welten zusammen"}),e.jsx("p",{children:"OOP und FP sind keine Gegensätze. Eine Liste von Objekten wertet man am besten mit den Werkzeugen aus Woche 4 aus."}),e.jsx(o,{filename:"oop-und-fp.js",children:`class Schueler {
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
console.log("Klassenschnitt:", schnitt.toFixed(2));`})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spickzettel"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Name { ... }"})," — Bauplan,"," ",e.jsx("code",{children:"new Name(...)"})," — Objekt"]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor"})," setzt die Startwerte, ",e.jsx("code",{children:"this"})," ","meint das eigene Objekt"]}),e.jsxs("li",{children:[e.jsx("code",{children:"#feld"})," ist privat — Zugriff über ",e.jsx("code",{children:"get"})," /"," ",e.jsx("code",{children:"set"})," oder Methoden"]}),e.jsxs("li",{children:[e.jsx("code",{children:"extends"})," erbt, ",e.jsx("code",{children:"super(...)"})," ruft die Oberklasse, Methoden lassen sich überschreiben"]}),e.jsxs("li",{children:["Listen von Objekten: weiterhin mit ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"reduce"})," auswerten"]})]})]})})]})}const Zl=Object.freeze(Object.defineProperty({__proto__:null,default:ti},Symbol.toStringTag,{value:"Module"}));function ci(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Projekt: Das Dungeon-Duell"}),e.jsxs("p",{children:["Diese Woche gibt es ",e.jsx("strong",{children:"eine"})," grosse Aufgabe statt vieler kleiner: ein rundenbasiertes Kampfspiel, das nur in der Konsole läuft. Sie bauen es in ",e.jsx("strong",{children:"acht Teilen"})," auf. Jeder Teil funktioniert für sich — testen Sie nach jedem Teil, bevor Sie weitergehen."]}),e.jsx("p",{children:"Die Teile 1–5 sind Pflicht, Teil 6 und 7 vervollständigen das Spiel, Teil 8 ist die Kür. Es gibt keine Musterlösung: Namen, Zahlen und Spielwelt dürfen Sie frei wählen, solange die geforderte Struktur stimmt."}),e.jsx("h3",{children:"Das fertige Klassenmodell"}),e.jsx("pre",{children:e.jsx("code",{children:`Wesen                (Basisklasse: name, leben, staerke)
 ├── Held             (erbt: level, erfahrung, waffe, inventar)
 └── Monster          (erbt: beute)

Waffe                 (name, schaden, tempo)     -> Held HAT eine Waffe
Gegenstand            (name, wirkung, wert)      -> Inventar HAT Gegenstände
Inventar              (Liste von Gegenständen)   -> Held HAT ein Inventar
Kampf                 (zwei Wesen, Rundenlogik)
Spiel                 (Held + mehrere Monster, Ablauf)`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achten Sie auf den Unterschied:"})," ",e.jsx("code",{children:"Held"})," und"," ",e.jsx("code",{children:"Monster"})," ",e.jsx("strong",{children:"erben"})," von ",e.jsx("code",{children:"Wesen"})," — sie erweitern eine bestehende Klasse. ",e.jsx("code",{children:"Waffe"}),","," ",e.jsx("code",{children:"Gegenstand"})," und ",e.jsx("code",{children:"Inventar"})," sind dagegen eigene Klassen, die als ",e.jsx("strong",{children:"Attribut"})," in einem Objekt stecken."]}),e.jsx("h3",{children:"Dateien"}),e.jsxs("p",{children:["Legen Sie einen Ordner ",e.jsx("code",{children:"woche-05-dungeon"})," an. Arbeiten Sie in einer einzigen Datei ",e.jsx("code",{children:"spiel.js"})," und markieren Sie die Teile mit Kommentaren:"]}),e.jsx("pre",{children:e.jsx("code",{children:`// ===== TEIL 1: Klasse Wesen =====
// Idee: ...
// Schwierig war: ...`})})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Pflichtteil"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 1: Die Basisklasse Wesen"}),e.jsxs("p",{children:["Alles im Spiel, das kämpfen kann, ist ein ",e.jsx("code",{children:"Wesen"}),". Schreiben Sie diese Klasse zuerst."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Konstruktor"})," mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"leben"})," und ",e.jsx("code",{children:"staerke"}),". Merken Sie sich das Startleben zusätzlich als ",e.jsx("code",{children:"maxLeben"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"lebt()"})," — gibt ",e.jsx("code",{children:"true"})," zurück, solange die Lebenspunkte über 0 sind."]}),e.jsxs("li",{children:[e.jsx("code",{children:"nimmSchaden(menge)"})," — zieht Leben ab, aber nie unter 0. Gibt eine Meldung aus, wenn das Wesen dabei besiegt wird."]}),e.jsxs("li",{children:[e.jsx("code",{children:"heilen(menge)"})," — heilt, aber höchstens bis"," ",e.jsx("code",{children:"maxLeben"}),". Ein besiegtes Wesen kann nicht geheilt werden."]}),e.jsxs("li",{children:[e.jsx("code",{children:"angreifen(ziel)"})," — fügt dem Ziel"," ",e.jsx("code",{children:"this.staerke"})," Schaden zu und gibt aus, was passiert ist."]}),e.jsxs("li",{children:[e.jsx("code",{children:"lebensbalken()"})," — gibt einen Textbalken zurück, z. B."," ",e.jsx("code",{children:"[#######...] 70/100"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"info()"})," — eine Zeile mit Name und Lebensbalken."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Zwei Wesen erzeugen, sich gegenseitig angreifen lassen, bis eines besiegt ist. Nach jedem Angriff"," ",e.jsx("code",{children:"info()"})," beider Wesen ausgeben."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 2: Kapselung der Lebenspunkte"}),e.jsxs("p",{children:["Im Moment kann man ",e.jsx("code",{children:"held.leben = 99999"})," schreiben und schummeln. Das ändern wir."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Machen Sie das Lebensfeld privat: ",e.jsx("code",{children:"#leben"}),". Alle Methoden der Klasse verwenden ab jetzt ",e.jsx("code",{children:"this.#leben"}),"."]}),e.jsxs("li",{children:["Ergänzen Sie einen ",e.jsx("strong",{children:"Getter"})," ",e.jsx("code",{children:"get leben()"}),", damit man den Wert weiterhin lesen kann."]}),e.jsxs("li",{children:["Ergänzen Sie einen ",e.jsx("strong",{children:"Setter"})," ",e.jsx("code",{children:"set leben(neu)"}),", der den Wert auf den Bereich zwischen 0 und ",e.jsx("code",{children:"maxLeben"})," begrenzt."]}),e.jsxs("li",{children:["Ergänzen Sie einen Getter ",e.jsx("code",{children:"get zustand()"}),", der je nach Prozentsatz ",e.jsx("code",{children:'"frisch"'}),", ",e.jsx("code",{children:'"verletzt"'}),","," ",e.jsx("code",{children:'"kritisch"'})," oder ",e.jsx("code",{children:'"besiegt"'})," zurückgibt."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Versuchen Sie, von aussen zu schummeln (",e.jsx("code",{children:"wesen.leben = 99999"})," und, als Kommentar,"," ",e.jsx("code",{children:"wesen.#leben"}),"). Halten Sie im Kommentar fest, was jeweils passiert und warum."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 3: Held und Monster erben"}),e.jsxs("p",{children:["Jetzt kommen zwei Unterklassen dazu. Beide verwenden"," ",e.jsx("code",{children:"extends"})," und rufen im Konstruktor zuerst"," ",e.jsx("code",{children:"super(...)"})," auf."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Held extends Wesen"})," — zusätzlich"," ",e.jsx("code",{children:"level"})," (Start 1) und ",e.jsx("code",{children:"erfahrung"})," (Start 0)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"erfahrungGeben(menge)"})," — zählt Erfahrung dazu. Ab 100 Punkten steigt der Held ein Level auf: Erfahrung um 100 reduzieren, ",e.jsx("code",{children:"maxLeben"})," +20, voll heilen,"," ",e.jsx("code",{children:"staerke"})," +5. Ein Levelaufstieg soll auch mehrfach hintereinander möglich sein."]}),e.jsxs("li",{children:[e.jsx("code",{children:"class Monster extends Wesen"})," — zusätzlich"," ",e.jsx("code",{children:"beute"})," (Erfahrungspunkte, die es beim Besiegen gibt)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Überschreiben:"})," Beide Klassen überschreiben"," ",e.jsx("code",{children:"info()"})," und verwenden dabei ",e.jsx("code",{children:"super.info()"})," ","weiter. Beim Held wird das Level ergänzt, beim Monster die Beute."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Überschreiben mit Extra:"})," Das Monster überschreibt"," ",e.jsx("code",{children:"angreifen(ziel)"})," so, dass es mit einer Wahrscheinlichkeit von 20 % daneben schlägt (",e.jsx("code",{children:"Math.random()"}),")."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Legen Sie ein Array mit einem Held und drei verschiedenen Monstern an und geben Sie mit einer ",e.jsx("code",{children:"map"}),"-Kette alle ",e.jsx("code",{children:"info()"}),"-Zeilen aus. Jedes Objekt muss seine eigene Version von ",e.jsx("code",{children:"info()"})," verwenden — das ist"," ",e.jsx("strong",{children:"Polymorphie"}),"."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 4: Waffen als eigene Klasse"}),e.jsxs("p",{children:["Eine Waffe kämpft nicht selbst — sie wird darum nicht von"," ",e.jsx("code",{children:"Wesen"})," abgeleitet, sondern als eigene Klasse gebaut und dem Held als Attribut mitgegeben."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Waffe"})," mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"schaden"})," und ",e.jsx("code",{children:"tempo"})," (Angriffe pro Runde, 1 oder 2)."]}),e.jsxs("li",{children:["Methode ",e.jsx("code",{children:"beschreibung()"}),", z. B."," ",e.jsx("code",{children:'"Kurzschwert (12 Schaden, 2x)"'}),"."]}),e.jsxs("li",{children:["Der ",e.jsx("code",{children:"Held"})," bekommt ein Attribut ",e.jsx("code",{children:"waffe"}),"(Startwert: eine Faust-Waffe mit wenig Schaden) und eine Methode"," ",e.jsx("code",{children:"ausruesten(waffe)"}),", die die alte Waffe zurückgibt."]}),e.jsxs("li",{children:["Der Held überschreibt ",e.jsx("code",{children:"angreifen(ziel)"}),": Der Schaden ist jetzt ",e.jsx("code",{children:"staerke + waffe.schaden"}),", und der Angriff wird ",e.jsx("code",{children:"waffe.tempo"}),"-mal ausgeführt."]}),e.jsx("li",{children:"Erstellen Sie mindestens drei verschiedene Waffen und lassen Sie den Held sie ausprobieren."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Frage als Kommentar:"})," Warum wäre"," ",e.jsx("code",{children:"class Waffe extends Wesen"})," hier falsch? Welche geerbten Methoden würden für eine Waffe überhaupt keinen Sinn ergeben?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 5: Gegenstände und Inventar"}),e.jsxs("p",{children:["Hier treffen die beiden Wochen aufeinander: Das Inventar ist eine Klasse, die intern eine Liste verwaltet — ausgewertet mit"," ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und ",e.jsx("code",{children:"reduce"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Gegenstand"})," mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"art"})," (",e.jsx("code",{children:'"trank"'})," oder ",e.jsx("code",{children:'"schatz"'}),"), ",e.jsx("code",{children:"wirkung"})," (Heilung) und ",e.jsx("code",{children:"wert"})," (Gold)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"class Inventar"})," mit einem privaten Array"," ",e.jsx("code",{children:"#gegenstaende"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hinzufuegen(gegenstand)"})," und"," ",e.jsx("code",{children:"entfernen(name)"})," — entfernen mit ",e.jsx("code",{children:"filter"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"get anzahl()"}),", ",e.jsx("code",{children:"get gesamtwert()"})," (mit"," ",e.jsx("code",{children:"reduce"}),") und ",e.jsx("code",{children:"get traenke()"})," (mit"," ",e.jsx("code",{children:"filter"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"anzeigen()"})," — eine nummerierte Liste, erzeugt mit"," ",e.jsx("code",{children:"map"}),"."]}),e.jsxs("li",{children:["Der Held bekommt ein ",e.jsx("code",{children:"inventar"})," und die Methode"," ",e.jsx("code",{children:"trinken()"}),": nimmt den ersten Trank, heilt sich damit und entfernt ihn aus dem Inventar. Ohne Trank: passende Meldung."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Held verletzen, drei Gegenstände einsammeln, Inventar anzeigen, zweimal trinken, Gesamtwert ausgeben."]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Das Spiel zusammensetzen"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 6: Die Klasse Kampf"}),e.jsx("p",{children:"Bis jetzt haben wir die Angriffe von Hand aufgerufen. Eine eigene Klasse übernimmt nun den Ablauf einer ganzen Auseinandersetzung."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Kampf"})," mit Konstruktor"," ",e.jsx("code",{children:"(held, monster)"}),". Zusätzlich ",e.jsx("code",{children:"runde"})," (Start 0) und ",e.jsx("code",{children:"protokoll"})," (leeres Array)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"notiz(text)"})," — hängt eine Zeile ans Protokoll an und gibt sie mit ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("li",{children:[e.jsx("code",{children:"eineRunde()"})," — Rundenzähler erhöhen, Held greift an, danach das Monster (falls es noch lebt). Wenn der Held unter 30 % Leben fällt, trinkt er automatisch einen Trank."]}),e.jsxs("li",{children:[e.jsx("code",{children:"starten()"})," — führt Runden aus, bis einer besiegt ist oder 20 Runden vorbei sind. Gibt am Schluss den Sieger zurück."]}),e.jsxs("li",{children:["Gewinnt der Held, bekommt er die ",e.jsx("code",{children:"beute"})," des Monsters als Erfahrung."]}),e.jsxs("li",{children:[e.jsx("code",{children:"zusammenfassung()"})," — Anzahl Runden, Sieger und verbleibende Lebenspunkte."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Test:"})," Ein Kampf Held gegen Monster, vollständig protokolliert."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 7: Die Klasse Spiel"}),e.jsx("p",{children:"Zum Schluss die oberste Ebene: ein Dungeon mit mehreren Räumen."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class Spiel"})," mit Konstruktor"," ",e.jsx("code",{children:"(held, monsterListe)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"starten()"})," — der Held kämpft nacheinander gegen alle Monster. Nach jedem Sieg: kurze Pause-Meldung, 20 % Heilung und ein zufälliger Gegenstand ins Inventar. Bei einer Niederlage endet das Spiel sofort."]}),e.jsxs("li",{children:[e.jsx("code",{children:"bericht()"})," — Auswertung am Ende, vollständig mit den Werkzeugen aus Woche 4:",e.jsxs("ul",{children:[e.jsxs("li",{children:["Anzahl besiegter Monster (",e.jsx("code",{children:"filter"}),")"]}),e.jsxs("li",{children:["gesamte gesammelte Erfahrung und Gold (",e.jsx("code",{children:"reduce"}),")"]}),e.jsx("li",{children:"Name des stärksten besiegten Monsters"}),e.jsxs("li",{children:["Liste aller Monster mit Status (",e.jsx("code",{children:"map"}),")"]}),e.jsx("li",{children:"Level und Endzustand des Helden"})]})]}),e.jsxs("li",{children:["Erzeugen Sie mindestens ",e.jsx("strong",{children:"5 Monster"})," mit steigender Schwierigkeit und lassen Sie das Spiel laufen."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Balancing:"})," Passen Sie die Zahlen so an, dass das Spiel weder immer gewonnen noch immer verloren wird. Lassen Sie es dafür mehrmals laufen und halten Sie Ihre Beobachtungen im Kommentar fest."]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Kür"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Teil 8: Erweiterungen (freiwillig)"}),e.jsx("p",{children:"Wählen Sie mindestens zwei Erweiterungen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Heldenklassen:"})," ",e.jsx("code",{children:"Krieger"}),","," ",e.jsx("code",{children:"Magier"})," und ",e.jsx("code",{children:"Bogenschuetze"})," erben von"," ",e.jsx("code",{children:"Held"})," und überschreiben"," ",e.jsx("code",{children:"spezialangriff(ziel)"})," unterschiedlich (z. B. doppelter Schaden alle 3 Runden, Flächenzauber, sicherer Treffer). Rufen Sie die Methode für alle Helden in einer Schleife auf — dieselbe Zeile, unterschiedliches Verhalten."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kritische Treffer:"})," 10 % Chance auf doppelten Schaden, mit eigener Meldung. Der Schadenswert soll in einer eigenen Methode ",e.jsx("code",{children:"berechneSchaden()"})," entstehen, damit ihn alle Unterklassen erben."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bosskampf:"})," Ein ",e.jsx("code",{children:"Boss extends Monster"})," ","mit zwei Phasen: Unter 50 % Leben verdoppelt sich seine Stärke, mit einer entsprechenden Ankündigung."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Reflexion (für alle)"}),e.jsx("p",{children:"Beantworten Sie am Ende der Datei als Kommentar:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Welche Methoden mussten Sie dank ",e.jsx("code",{children:"extends"})," nur"," ",e.jsx("strong",{children:"einmal"})," schreiben?"]}),e.jsx("li",{children:"Was hätte sich geändert, wenn Sie das Spiel rein funktional gebaut hätten — mit Objekten als reinen Datensätzen und separaten Funktionen? Nennen Sie je einen Vorteil beider Ansätze."}),e.jsxs("li",{children:["Wo im Programm haben Sie ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," ","oder ",e.jsx("code",{children:"reduce"})," verwendet? War das jeweils klarer als eine Schleife?"]}),e.jsx("li",{children:"Welche Stelle würden Sie als Erstes umbauen, wenn Sie mehr Zeit hätten — und warum?"})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("p",{children:["Eine lauffähige Datei ",e.jsx("code",{children:"spiel.js"})," im Ordner"," ",e.jsx("code",{children:"woche-05-dungeon"}),". ",e.jsx("code",{children:"node spiel.js"})," muss ohne Fehler einen vollständigen Spieldurchgang inklusive Schlussbericht ausgeben."]}),e.jsxs("p",{children:["Mindestanforderung für eine vollständige Lösung: die Teile 1 bis 7 mit mindestens ",e.jsx("strong",{children:"sieben Klassen"}),", davon mindestens"," ",e.jsx("strong",{children:"zwei Vererbungsbeziehungen"}),", ein"," ",e.jsx("strong",{children:"privates Feld"})," mit Getter/Setter und mindestens"," ",e.jsx("strong",{children:"drei Stellen"}),", an denen Sie ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"})," oder ",e.jsx("code",{children:"reduce"})," einsetzen."]}),e.jsx("p",{children:"Wer nicht fertig wird: Halten Sie im Kommentar fest, bis zu welchem Teil Sie gekommen sind und woran es gehakt hat."})]})]})}const Ml=Object.freeze(Object.defineProperty({__proto__:null,default:ci},Symbol.toStringTag,{value:"Module"})),di="_wrapper_n84bl_3",ai="_title_n84bl_12",hi="_controls_n84bl_19",oi="_button_n84bl_27",ui="_buttonPrimary_n84bl_48",ji="_select_n84bl_53",xi="_label_n84bl_63",gi="_checkbox_n84bl_70",mi="_puzzleLayout_n84bl_81",bi="_board_n84bl_88",fi="_tile_n84bl_98",pi="_tileMovable_n84bl_117",ki="_tileEmpty_n84bl_127",Si="_tileCorrect_n84bl_134",zi="_tileBadge_n84bl_139",wi="_panel_n84bl_148",vi="_statGrid_n84bl_153",Ai="_statKey_n84bl_161",yi="_statValue_n84bl_165",Ni="_moveList_n84bl_170",Ei="_solved_n84bl_183",Di="_unsolvable_n84bl_189",Bi="_searchLayout_n84bl_197",Wi="_column_n84bl_210",Fi="_columnTitle_n84bl_214",Oi="_message_n84bl_224",Pi="_messageDone_n84bl_231",Zi="_messageFail_n84bl_235",Mi="_miniBoard_n84bl_241",_i="_miniCell_n84bl_251",Ti="_miniCellEmpty_n84bl_262",Ki="_frontierList_n84bl_269",Ii="_frontierItem_n84bl_278",Li="_frontierItemNext_n84bl_291",Ci="_frontierItemNew_n84bl_297",Vi="_frontierMeta_n84bl_301",Gi="_frontierAction_n84bl_306",Hi="_frontierHint_n84bl_313",Ri="_visitedGrid_n84bl_319",$i="_empty_n84bl_327",Ji="_spaceLayout_n84bl_335",Ui="_diagramPair_n84bl_350",qi="_diagram_n84bl_350",Qi="_diagramNote_n84bl_367",Xi="_cycleNote_n84bl_374",Yi="_graphBox_n84bl_381",er="_treeBox_n84bl_397",nr="_legend_n84bl_405",sr="_legendItem_n84bl_414",ir="_legendDot_n84bl_420",rr="_pathStrip_n84bl_429",lr="_pathStep_n84bl_437",tr="_rounds_n84bl_448",cr="_roundsHint_n84bl_452",dr="_roundsList_n84bl_459",ar="_roundChip_n84bl_465",hr="_roundChipAktiv_n84bl_475",or="_messageRound_n84bl_480",ur="_algoTableWrapper_n84bl_487",jr="_algoTable_n84bl_487",xr="_algoName_n84bl_527",gr="_algoKurz_n84bl_534",mr="_marke_n84bl_540",br="_markeJa_n84bl_550",fr="_markeTeils_n84bl_554",pr="_markeNein_n84bl_558",kr="_algoCaption_n84bl_562",Sr="_pancakeStack_n84bl_616",zr="_pancake_n84bl_616",wr="_pancakeCorrect_n84bl_653",vr="_pancakeTop_n84bl_658",Ar="_pancakePlate_n84bl_662",i={wrapper:di,title:ai,controls:hi,button:oi,buttonPrimary:ui,select:ji,label:xi,checkbox:gi,puzzleLayout:mi,board:bi,tile:fi,tileMovable:pi,tileEmpty:ki,tileCorrect:Si,tileBadge:zi,panel:wi,statGrid:vi,statKey:Ai,statValue:yi,moveList:Ni,solved:Ei,unsolvable:Di,searchLayout:Bi,column:Wi,columnTitle:Fi,message:Oi,messageDone:Pi,messageFail:Zi,miniBoard:Mi,miniCell:_i,miniCellEmpty:Ti,frontierList:Ki,frontierItem:Ii,frontierItemNext:Li,frontierItemNew:Ci,frontierMeta:Vi,frontierAction:Gi,frontierHint:Hi,visitedGrid:Ri,empty:$i,spaceLayout:Ji,diagramPair:Ui,diagram:qi,diagramNote:Qi,cycleNote:Xi,graphBox:Yi,treeBox:er,legend:nr,legendItem:sr,legendDot:ir,pathStrip:rr,pathStep:lr,rounds:tr,roundsHint:cr,roundsList:dr,roundChip:ar,roundChipAktiv:hr,messageRound:or,algoTableWrapper:ur,algoTable:jr,algoName:xr,algoKurz:gr,marke:mr,markeJa:br,markeTeils:fr,markeNein:pr,algoCaption:kr,pancakeStack:Sr,pancake:zr,pancakeCorrect:wr,pancakeTop:vr,pancakePlate:Ar};function yr({rows:s=Er,caption:n}){return e.jsxs("div",{className:i.algoTableWrapper,children:[e.jsxs("table",{className:i.algoTable,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Algorithmus"}),e.jsx("th",{children:"Grenze"}),e.jsx("th",{children:"nimmt zuerst"}),e.jsx("th",{children:"vollständig"}),e.jsx("th",{children:"optimal"}),e.jsx("th",{children:"Speicher"})]})}),e.jsx("tbody",{children:s.map(r=>e.jsxs("tr",{children:[e.jsxs("td",{"data-label":"Algorithmus",children:[e.jsx("span",{className:i.algoName,children:r.name}),r.kurz&&e.jsx("span",{className:i.algoKurz,children:r.kurz})]}),e.jsx("td",{"data-label":"Grenze",children:r.frontier}),e.jsx("td",{"data-label":"nimmt zuerst",children:r.pick}),e.jsx("td",{"data-label":"vollständig",children:e.jsx(Ee,{...r.vollstaendig})}),e.jsx("td",{"data-label":"optimal",children:e.jsx(Ee,{...r.optimal})}),e.jsx("td",{"data-label":"Speicher",children:e.jsx(Ee,{...r.speicher})})]},r.name))})]}),n&&e.jsx("p",{className:i.algoCaption,children:n})]})}const Nr={ja:i.markeJa,gut:i.markeJa,teils:i.markeTeils,mittel:i.markeTeils,nein:i.markeNein,schlecht:i.markeNein};function Ee({wert:s,text:n}){return e.jsx("span",{className:`${i.marke} ${Nr[s]??""}`,children:n??s})}const Er=[{name:"BFS",kurz:"Breitensuche",frontier:"Warteschlange (FIFO)",pick:"ältester Knoten",vollstaendig:{wert:"ja",text:"ja"},optimal:{wert:"ja",text:"ja, bei gleichen Kosten"},speicher:{wert:"schlecht",text:"schlecht · b^d"}},{name:"DFS",kurz:"Tiefensuche",frontier:"Stapel (LIFO)",pick:"neuester Knoten",vollstaendig:{wert:"teils",text:"nur im Endlichen"},optimal:{wert:"nein",text:"nein"},speicher:{wert:"gut",text:"gut · b · d"}},{name:"IDS",kurz:"iterative Tiefensuche",frontier:"Stapel mit Tiefenlimit",pick:"neuester Knoten bis Limit",vollstaendig:{wert:"ja",text:"ja"},optimal:{wert:"ja",text:"ja, bei gleichen Kosten"},speicher:{wert:"gut",text:"gut · b · d"}},{name:"UCS",kurz:"Kostensuche / Dijkstra",frontier:"Prioritätswarteschlange",pick:"kleinstes g",vollstaendig:{wert:"ja",text:"ja"},optimal:{wert:"ja",text:"ja"},speicher:{wert:"schlecht",text:"schlecht"}}];function de(s){return s.join(",")}function Dr(s){return Array.from({length:s},(n,r)=>r+1)}function Me(s){return s.every((n,r)=>n===r+1)}function Xe(s,n){return n<2||n>s.length?null:[...s.slice(0,n).reverse(),...s.slice(n)]}function De(s){const n=[];for(let r=2;r<=s.length;r++)n.push({action:`wende ${r}`,k:r,cost:1,state:Xe(s,r)});return n}function Be(s){const n=s.length;let r=0;for(let l=0;l<n-1;l++)Math.abs(s[l]-s[l+1])!==1&&r++;return s[n-1]!==n&&r++,r}function Ye(s){const n=Dr(s);for(let r=n.length-1;r>0;r--){const l=Math.floor(Math.random()*(r+1));[n[r],n[l]]=[n[l],n[r]]}return Me(n)?Ye(s):n}const Le=[{label:"3 Pfannkuchen",state:[2,3,1]},{label:"4 Pfannkuchen",state:[3,1,4,2]},{label:"5 Pfannkuchen",state:[4,2,5,1,3]}];function ve(s,n,r){const l={nodes:new Map,edges:new Set,adj:new Map,keyOf:n,successorsOf:r},c=n(s);return l.nodes.set(c,{key:c,state:s,gespielt:!0}),l.adj.set(c,[]),l}function _e(s,n,r=!1){const l=s.keyOf(n),c=s.nodes.get(l);if(c)return r||(c.gespielt=!0),c;const d={key:l,state:n,gespielt:!r};return s.nodes.set(l,d),s.adj.set(l,[]),d}function Br(s,n){for(const r of s.successorsOf(n))_e(s,r.state,!0),Te(s,s.keyOf(n),s.keyOf(r.state))}function xe(s,n){return s<n?`${s}|${n}`:`${n}|${s}`}function Te(s,n,r){const l=xe(n,r);s.edges.has(l)||(s.edges.add(l),s.adj.get(n)?.push(r),s.adj.get(r)?.push(n))}function Ae(s,n,r){const l=s.keyOf(n),c=s.keyOf(r),d=s.nodes.get(c)?.gespielt===!0,u=d?Wr(s,l,c):null;return _e(s,r),Te(s,l,c),Br(s,r),{schonBesucht:d,kreis:u&&u.length>2?u:null}}function Wr(s,n,r){const l=xe(n,r),c=new Map([[r,null]]),d=[r];for(;d.length>0;){const u=d.shift();if(u===n){const a=[];let h=n;for(;h!==null;)a.push(h),h=c.get(h);return a}for(const a of s.adj.get(u)??[])xe(u,a)!==l&&(c.has(a)||s.nodes.get(a)?.gespielt&&(c.set(a,u),d.push(a)))}return null}function en(s,n,r){if(n===r)return[n];const l=new Map([[n,null]]),c=[n];for(;c.length>0;){const d=c.shift();for(const u of s.adj.get(d)??[])if(!l.has(u)){if(l.set(u,d),u===r){const a=[];let h=u;for(;h!=null;)a.unshift(h),h=l.get(h);return a}c.push(u)}}return null}function nn(s){const n=new Set;if(!s||s.length<2)return n;for(let r=0;r<s.length-1;r++)n.add(xe(s[r],s[r+1]));return n.add(xe(s[s.length-1],s[0])),n}function je(s,n,r){let l=[n];const c=new Set([s.keyOf(n)]);for(let d=0;d<r;d++){const u=[];for(const a of l)for(const h of s.successorsOf(a)){const z=s.keyOf(h.state);_e(s,h.state,!0),Te(s,s.keyOf(a),z),c.has(z)||(c.add(z),u.push(h.state))}l=u}}function sn(s,n,{spalte:r,zeile:l}){const c=new Map,d=new Map([[n,0]]),u=[],a=new Set([n]),h=[n];for(const p of s.nodes.keys())c.set(p,[]);for(;h.length>0;){const p=h.shift();for(const y of s.adj.get(p)??[])a.has(y)||(a.add(y),d.set(y,(d.get(p)??0)+1),c.get(p).push(y),u.push({id:xe(p,y),von:p,nach:y}),h.push(y))}const z=new Set(u.map(p=>p.id)),N=[];for(const p of s.edges){if(z.has(p))continue;const[y,g]=p.split("|");N.push({id:p,von:y,nach:g})}const x=new Map;let b=0;const E=p=>{const y=c.get(p)??[];let g;if(y.length===0)g=b*r,b+=1;else{const f=y.map(E);g=(Math.min(...f)+Math.max(...f))/2}return x.set(p,{x:g,y:(d.get(p)??0)*l}),g};s.nodes.has(n)&&E(n);for(const p of s.nodes.keys())x.has(p)||(x.set(p,{x:b*r,y:0}),b+=1);return{pos:x,tiefe:d,baumKanten:u,schleifen:N}}function rn(s,{rand:n=30,ratio:r=1.3}={}){const l=[...s.values()];if(l.length===0)return{x:-100,y:-100,w:200,h:200};const c=Math.min(...l.map(p=>p.x))-n,d=Math.max(...l.map(p=>p.x))+n,u=Math.min(...l.map(p=>p.y))-n,a=Math.max(...l.map(p=>p.y))+n,h=Math.max(200,d-c),z=Math.max(150,a-u),N=Math.max(h,z*r),x=N/r,b=(c+d)/2,E=(u+a)/2;return{x:b-N/2,y:E-x/2,w:N,h:x}}function ln(s,n){const r=(s.y+n.y)/2;return`M ${s.x} ${s.y} C ${s.x} ${r}, ${n.x} ${r}, ${n.x} ${n.y}`}function tn(s,n){const r=n.x-s.x,l=n.y-s.y,c=Math.hypot(r,l)||1,d=-l/c*Math.min(40,c*.35),u=r/c*Math.min(40,c*.35),a=(s.x+n.x)/2+d,h=(s.y+n.y)/2+u;return`M ${s.x} ${s.y} Q ${a} ${h}, ${n.x} ${n.y}`}const Fr=34,Or=52,ze=3.4,We=22;function Pr({initial:s=Le[1].state,title:n="Pfannkuchen sortieren — derselbe Zustandsraum, ein anderes Problem"}){const r=S.useRef(null),[,l]=S.useState(0),c=S.useCallback(()=>l(B=>B+1),[]),[d,u]=S.useState(s),[a,h]=S.useState(s),[z,N]=S.useState(0),[x,b]=S.useState(0),[E,p]=S.useState(null),[y,g]=S.useState(!0);r.current===null&&(r.current=ve(s,de,De),je(r.current,s,1));const f=r.current,D=S.useCallback(B=>{r.current=ve(B,de,De),je(r.current,B,1),u(B),h(B),N(0),b(0),p(null),c()},[c]),O=S.useCallback((B,W)=>{const{schonBesucht:$,kreis:Y}=Ae(f,B,W);h(W),N(H=>H+1),$&&b(H=>H+1),p(Y),c()},[f,c]),T=S.useCallback(B=>{if(B===de(a))return;const W=en(f,de(a),B);if(!W)return;let $=a,Y=0,H=null;for(const C of W.slice(1)){const oe=f.nodes.get(C)?.state;if(!oe)break;const{schonBesucht:le,kreis:te}=Ae(f,$,oe);le&&(Y+=1),H=te,$=oe}h($),N(C=>C+W.length-1),b(C=>C+Y),p(H),c()},[f,a,c]),I=S.useCallback(B=>{je(f,d,B),p(null),c()},[f,d,c]),K=B=>{const W=Xe(a,B+1);W&&O(a,W)},L=a.length,_=de(a),Z=De(a),v=nn(E),m=Me(a),F=Be(a),{pos:M,baumKanten:X,schleifen:G}=sn(f,de(d),{spalte:Fr,zeile:Or}),U=rn(M,{rand:L*ze+14+(y?10:0)});return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.title,children:n}),e.jsxs("div",{className:i.controls,children:[e.jsx("span",{className:i.label,children:"Stapel"}),Le.map(B=>e.jsx("button",{type:"button",className:i.button,onClick:()=>D(B.state),children:B.label},B.label)),e.jsx("button",{type:"button",className:i.button,onClick:()=>D(Ye(L)),children:"mischen"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>D(d),disabled:z===0,children:"Baum leeren"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>I(2),children:"bis Tiefe 2"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>I(3),children:"bis Tiefe 3"}),e.jsxs("label",{className:i.checkbox,children:[e.jsx("input",{type:"checkbox",checked:y,onChange:B=>g(B.target.checked)}),"h zeigen (Bruchstellen)"]})]}),e.jsxs("div",{className:i.spaceLayout,children:[e.jsxs("div",{children:[e.jsx("p",{className:i.columnTitle,children:"wenden"}),e.jsxs("div",{className:i.pancakeStack,children:[a.map((B,W)=>e.jsx("button",{type:"button",className:[i.pancake,B===W+1?i.pancakeCorrect:"",W===0?i.pancakeTop:""].filter(Boolean).join(" "),style:{width:`${B/L*100}%`},onClick:()=>K(W),disabled:W===0,title:W===0?"Den obersten allein zu wenden ändert nichts":`Wender hier einschieben: die obersten ${W+1} umdrehen`,children:B},W)),e.jsx("span",{className:i.pancakePlate})]}),e.jsx("p",{className:i.frontierHint,children:"Klick auf einen Pfannkuchen: Der Wender fährt darunter, und alles darüber wird umgedreht. Der oberste allein bringt nichts."}),e.jsxs("div",{className:i.statGrid,style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:i.statKey,children:"key(state)"}),e.jsx("span",{className:i.statValue,children:_}),e.jsx("span",{className:i.statKey,children:"Verzweigungsgrad b"}),e.jsxs("span",{className:i.statValue,children:[L-1," (immer gleich)"]}),e.jsx("span",{className:i.statKey,children:"Züge gemacht"}),e.jsx("span",{className:i.statValue,children:z}),y&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.statKey,children:"h — Bruchstellen"}),e.jsxs("span",{className:i.statValue,children:[F,F===0?" — sortiert":""]})]}),e.jsx("span",{className:i.statKey,children:"Knoten (Zustände)"}),e.jsx("span",{className:i.statValue,children:f.nodes.size}),e.jsx("span",{className:i.statKey,children:"Kanten (Züge)"}),e.jsx("span",{className:i.statValue,children:f.edges.size}),e.jsx("span",{className:i.statKey,children:"Schleifen im Graph"}),e.jsx("span",{className:i.statValue,children:G.length}),e.jsx("span",{className:i.statKey,children:"schon bekannt"}),e.jsx("span",{className:i.statValue,children:x}),e.jsx("span",{className:i.statKey,children:"Zustandsraum gesamt"}),e.jsxs("span",{className:i.statValue,children:[Mr(L)," Stapel (n!)"]})]}),m&&e.jsxs("p",{className:i.cycleNote,children:["Sortiert! Kleinster oben, grösster unten — in ",z," Zügen."]}),e.jsxs("p",{className:i.columnTitle,children:["Nachfolger (",Z.length,") — klicken zum Wenden"]}),e.jsx("div",{className:i.frontierList,children:Z.map(B=>{const W=f.nodes.get(de(B.state))?.gespielt===!0;return e.jsxs("button",{type:"button",className:[i.frontierItem,W?"":i.frontierItemNew].filter(Boolean).join(" "),style:{cursor:"pointer",textAlign:"left"},onClick:()=>O(a,B.state),children:[e.jsx("span",{className:i.frontierAction,children:B.action}),e.jsx("span",{className:i.frontierMeta,children:de(B.state)}),y&&e.jsxs("span",{className:i.frontierMeta,children:["h=",Be(B.state)]}),e.jsx("span",{className:i.frontierMeta,children:W?"bekannt":"neu"})]},B.action)})})]}),e.jsxs("div",{className:i.column,children:[e.jsxs("p",{className:i.columnTitle,children:["Zustandsraum als Suchbaum — ",f.nodes.size," Knoten, ",f.edges.size," ","Kanten"]}),e.jsx("div",{className:i.graphBox,children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:`${U.x} ${U.y} ${U.w} ${U.h}`,role:"img","aria-label":"Zustandsraum des Pfannkuchen-Problems",children:[e.jsx("title",{children:"Zustandsraum: Knoten sind Stapel, Kanten sind Wende-Züge"}),X.map(({id:B,von:W,nach:$})=>{const Y=M.get(W),H=M.get($);if(!Y||!H)return null;const C=W===_||$===_;return e.jsx("path",{d:ln(Y,H),fill:"none",stroke:C?"var(--color-yellow)":"var(--color-bg-lighter)",strokeWidth:C?2:1.2},B)}),G.map(({id:B,von:W,nach:$})=>{const Y=M.get(W),H=M.get($);if(!Y||!H)return null;const C=v.has(B);return e.jsx("path",{d:tn(Y,H),fill:"none",stroke:C?"var(--color-red)":"var(--color-purple)",strokeWidth:C?2.5:1.2,strokeDasharray:C?"none":"4 3",opacity:C?1:.7},B)}),[...f.nodes.values()].map(B=>{const W=M.get(B.key);return W?e.jsx(Zr,{node:B,x:W.x,y:W.y,aktiv:B.key===_,imKreis:E?.includes(B.key)??!1,hWert:y?Be(B.state):null,hAktuell:F,onClick:()=>T(B.key)},B.key):null})]})}),e.jsxs("div",{className:i.legend,children:[e.jsx(ge,{farbe:"var(--color-yellow)",text:"aktueller Stapel"}),e.jsx(ge,{farbe:"var(--color-aqua)",text:"sortiert (Ziel)"}),e.jsx(ge,{farbe:"var(--color-blue)",text:"selbst besucht"}),e.jsx(ge,{farbe:"var(--color-gray)",text:"nur aufgedeckt"}),e.jsx(ge,{farbe:"var(--color-purple)",text:"Schleife (Rückkante)"}),e.jsx("span",{children:"Jede Zeile = ein Wende-Zug weiter vom Start weg"}),e.jsx("span",{children:"Klick auf einen Knoten: dorthin springen"})]})]})]})]})}function Zr({node:s,x:n,y:r,aktiv:l,imKreis:c,hWert:d,hAktuell:u,onClick:a}){const h=s.state.length,z=Me(s.state),N=l?"var(--color-yellow)":c?"var(--color-red)":z?"var(--color-aqua)":s.gespielt?"var(--color-blue)":"var(--color-gray)",x=d===null?"transparent":d===0?"var(--color-aqua)":d<u?"var(--color-green)":d>u?"var(--color-red)":"var(--color-gray-light)",b=h*ze,E=r-b/2;return e.jsxs("g",{role:"button",tabIndex:0,"aria-label":`Stapel ${s.key}`,onClick:a,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&a()},style:{cursor:"pointer"},children:[e.jsx("title",{children:s.key}),e.jsx("rect",{x:n-We/2-2,y:E-2,width:We+4,height:b+4,rx:2,fill:"var(--color-bg)",stroke:N,strokeWidth:l||c?2:1}),s.state.map((p,y)=>{const g=p/h*We;return e.jsx("rect",{x:n-g/2,y:E+y*ze+.4,width:g,height:ze-.8,rx:.8,fill:s.gespielt?N:"var(--color-gray)",opacity:s.gespielt?.85:.5},y)}),d!==null&&e.jsxs("text",{x:n,y:E+b+8,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:8,fontWeight:l?700:400,fill:x,children:["h=",d]})]})}function ge({farbe:s,text:n}){return e.jsxs("span",{className:i.legendItem,children:[e.jsx("span",{className:i.legendDot,style:{backgroundColor:s}}),n]})}function Mr(s){let n=1;for(let r=2;r<=s;r++)n*=r;return n}const V=3,he=[1,2,3,4,5,6,7,8,0];function J(s){return s.join(",")}function Ke(s){return J(s)===J(he)}const _r=[{name:"hoch",dz:-1,ds:0},{name:"runter",dz:1,ds:0},{name:"links",dz:0,ds:-1},{name:"rechts",dz:0,ds:1}];function ae(s){const n=s.indexOf(0),r=Math.floor(n/V),l=n%V,c=[];for(const d of _r){const u=r+d.dz,a=l+d.ds;if(u<0||u>=V||a<0||a>=V)continue;const h=u*V+a,z=[...s];z[n]=z[h],z[h]=0,c.push({action:`${z[n]} ${d.name}`,tile:z[n],cost:1,state:z})}return c}function Ze(s,n){const r=s.indexOf(0),l=Math.floor(r/V),c=r%V,d=Math.floor(n/V),u=n%V;if(Math.abs(l-d)+Math.abs(c-u)!==1)return null;const a=[...s];return a[r]=a[n],a[n]=0,a}function ye(s){let n=0;for(let r=0;r<s.length;r++)s[r]!==0&&s[r]!==he[r]&&n++;return n}function pe(s){let n=0;for(let r=0;r<s.length;r++){const l=s[r];if(l===0)continue;const c=he.indexOf(l);n+=Math.abs(Math.floor(r/V)-Math.floor(c/V))+Math.abs(r%V-c%V)}return n}function Tr(s,n){const r=s[n];if(r===0)return 0;const l=he.indexOf(r);return Math.abs(Math.floor(n/V)-Math.floor(l/V))+Math.abs(n%V-l%V)}function Kr(s){const n=s.filter(l=>l!==0);let r=0;for(let l=0;l<n.length;l++)for(let c=l+1;c<n.length;c++)n[l]>n[c]&&r++;return r%2===0}function cn(s=20,n=he){let r=[...n],l=null;for(let c=0;c<s;c++){const d=ae(r).filter(a=>a.tile!==l),u=d[Math.floor(Math.random()*d.length)];r=u.state,l=u.tile}return r}const ce=[{label:"2 Züge",state:[1,2,3,4,5,6,0,7,8]},{label:"4 Züge",state:[0,1,3,4,2,6,7,5,8]},{label:"8 Züge",state:[1,2,3,7,5,6,8,4,0]},{label:"12 Züge",state:[7,1,2,4,0,3,8,6,5]},{label:"14 Züge",state:[0,8,2,5,7,3,1,4,6]},{label:"18 Züge",state:[0,7,1,2,6,3,8,5,4]},{label:"unlösbar",state:[2,8,3,1,6,4,7,0,5]}];function Ce({initial:s=ce[3].state,showHeuristics:n=!1,title:r="Schiebepuzzle — probieren Sie es aus"}){const[l,c]=S.useState(s),[d,u]=S.useState(s),[a,h]=S.useState([]),[z,N]=S.useState(n),x=Ke(d),b=Kr(d),E=new Set(ae(d).map(g=>g.tile)),p=g=>{if(x)return;const f=Ze(d,g);f&&(h([...a,`${d[g]} → ${Ir(d,g)}`]),u(f))},y=g=>{c(g),u(g),h([])};return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.title,children:r}),e.jsxs("div",{className:i.controls,children:[e.jsx("span",{className:i.label,children:"Stellung"}),ce.map(g=>e.jsx("button",{type:"button",className:i.button,onClick:()=>y(g.state),children:g.label},g.label)),e.jsx("button",{type:"button",className:i.button,onClick:()=>y(cn(40)),children:"mischen"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>y(l),disabled:a.length===0,children:"zurücksetzen"}),e.jsxs("label",{className:i.checkbox,children:[e.jsx("input",{type:"checkbox",checked:z,onChange:g=>N(g.target.checked)}),"Abstände zeigen"]})]}),e.jsxs("div",{className:i.puzzleLayout,children:[e.jsx("div",{className:i.board,children:d.map((g,f)=>{const D=g!==0&&g===he[f],O=E.has(g)&&!x,T=Tr(d,f);return e.jsxs("button",{type:"button",className:[i.tile,g===0?i.tileEmpty:"",O?i.tileMovable:"",D?i.tileCorrect:""].filter(Boolean).join(" "),onClick:()=>p(f),disabled:g===0,children:[g===0?"":g,z&&g!==0&&T>0&&e.jsx("span",{className:i.tileBadge,children:T})]},f)})}),e.jsxs("div",{className:i.panel,children:[x&&e.jsxs("p",{className:i.solved,children:["Gelöst! ",a.length," Züge."]}),!b&&e.jsx("p",{className:i.unsolvable,children:"Diese Stellung ist unlösbar — kein Weg führt zum Ziel."}),e.jsxs("div",{className:i.statGrid,children:[e.jsx("span",{className:i.statKey,children:"Züge bisher"}),e.jsx("span",{className:i.statValue,children:a.length}),e.jsx("span",{className:i.statKey,children:"mögliche Züge"}),e.jsx("span",{className:i.statValue,children:E.size}),z&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.statKey,children:"falsche Plätze"}),e.jsx("span",{className:i.statValue,children:ye(d)}),e.jsx("span",{className:i.statKey,children:"Manhattan-Distanz"}),e.jsx("span",{className:i.statValue,children:pe(d)})]})]}),e.jsx("p",{className:i.columnTitle,children:"Ihre Züge"}),e.jsx("div",{className:i.moveList,children:a.length===0?e.jsx("span",{className:i.empty,children:"Klicken Sie einen Stein neben dem leeren Feld an."}):a.map((g,f)=>e.jsxs("div",{children:[f+1,". ",g]},f))})]})]})]})}function Ir(s,n){const r=s.indexOf(0);return r===n-3?"hoch":r===n+3?"runter":r===n-1?"links":"rechts"}function we({state:s,title:n}){return e.jsx("div",{className:i.miniBoard,title:n,children:s.map((r,l)=>e.jsx("div",{className:[i.miniCell,r===0?i.miniCellEmpty:""].filter(Boolean).join(" "),children:r===0?"":r},l))})}const Lr=30,Ve=13,Cr=1200,ke=18,Fe=600;function Vr({snapshot:s}){const{nodes:n,frontier:r,visited:l,current:c,path:d}=s,u=n.slice(0,Fe),a=u.reduce((g,f)=>Math.max(g,f.depth),0),h=Math.min(Lr,Math.max(3,Cr/(a+1))),z=new Map,N=new Map;for(const g of u){const f=z.get(g.depth)??0;z.set(g.depth,f+1),N.set(g.id,{x:ke+g.depth*h,y:ke+f*Ve})}const x=new Set(r.map(g=>g.id)),b=new Set((d??[]).map(g=>g.id)),E=ke*2+(a+1)*h,p=ke*2+[...z.values()].reduce((g,f)=>Math.max(g,f),1)*Ve,y=g=>c&&g.id===c.id?"var(--color-yellow)":b.has(g.id)?"var(--color-aqua)":x.has(g.id)?"var(--color-blue)":l.has(g.state.join(","))?"var(--color-gray)":"var(--color-bg-lighter)";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:i.treeBox,children:e.jsxs("svg",{width:E,height:p,viewBox:`0 0 ${E} ${p}`,role:"img","aria-label":"Suchbaum",children:[e.jsx("title",{children:"Suchbaum: erzeugte Knoten nach Tiefe"}),u.map(g=>{if(!g.parent)return null;const f=N.get(g.parent.id),D=N.get(g.id);if(!f||!D)return null;const O=b.has(g.id)&&b.has(g.parent.id);return e.jsx("line",{x1:f.x,y1:f.y,x2:D.x,y2:D.y,stroke:O?"var(--color-aqua)":"var(--color-bg-lighter)",strokeWidth:O?2:1},`e${g.id}`)}),u.map(g=>{const f=N.get(g.id),D=c&&g.id===c.id;return e.jsx("circle",{cx:f.x,cy:f.y,r:D?5:Math.min(3.5,h/2),fill:y(g),children:e.jsx("title",{children:`Tiefe ${g.depth} · g=${g.g}${g.h?` · h=${g.h}`:""}
${g.action??"Start"}`})},`n${g.id}`)})]})}),e.jsxs("div",{className:i.legend,children:[e.jsx(Se,{farbe:"var(--color-yellow)",text:"wird untersucht"}),e.jsx(Se,{farbe:"var(--color-blue)",text:"Grenze"}),e.jsx(Se,{farbe:"var(--color-gray)",text:"besucht"}),e.jsx(Se,{farbe:"var(--color-aqua)",text:"Lösungsweg"}),n.length>Fe&&e.jsxs("span",{children:["… ",n.length-Fe," weitere Knoten nicht gezeichnet"]})]})]})}function Se({farbe:s,text:n}){return e.jsxs("span",{className:i.legendItem,children:[e.jsx("span",{className:i.legendDot,style:{backgroundColor:s}}),n]})}const dn={keine:()=>0,falschePlaetze:ye,manhattan:pe},Ge={bfs:{label:"Breitensuche (BFS)",frontier:"Warteschlange (FIFO)",pick:"der älteste Knoten",useHeuristic:!1},dfs:{label:"Tiefensuche (DFS)",frontier:"Stapel (LIFO)",pick:"der neueste Knoten",useHeuristic:!1},ids:{label:"Iterative Tiefensuche (IDS)",frontier:"Stapel (LIFO) mit Tiefenlimit",pick:"der neueste Knoten",useHeuristic:!1},ucs:{label:"Kostensuche (UCS)",frontier:"Prioritätswarteschlange",pick:"kleinstes g",useHeuristic:!1},greedy:{label:"Greedy Best-First",frontier:"Prioritätswarteschlange",pick:"kleinstes h",useHeuristic:!0},astar:{label:"A*",frontier:"Prioritätswarteschlange",pick:"kleinstes f = g + h",useHeuristic:!0}};let Gr=0;function He(s,n,r,l){return{id:Gr++,state:s,parent:n,action:r,g:n?n.g+1:0,depth:n?n.depth+1:0,h:l(s)}}function Re(s,n){switch(n){case"ucs":return s.g;case"greedy":return s.h;case"astar":return s.g+s.h;default:return 0}}function Hr(s,n){if(s.length===0)return-1;if(n==="bfs")return 0;if(n==="dfs"||n==="ids")return s.length-1;let r=0;for(let l=1;l<s.length;l++)Re(s[l],n)<Re(s[r],n)&&(r=l);return r}function Rr(s){const n=[];let r=s;for(;r;)n.unshift(r),r=r.parent;return n}function $r(s,n="bfs",r={}){const l=r.heuristic??dn.keine,c=r.maxExpansions??6e3,d=n==="ids",u=r.maxLimit??30,a=He(s,null,null,l);let h=[a];const z=new Set,N=new Map;let x=[a],b=d?0:Number.POSITIVE_INFINITY,E=!1;const p=[];let y=0,g=0,f=1,D=1,O="bereit",T=null,I=[],K=null;function L(F){return{status:O,message:F,current:T,children:I,frontier:[...h],visited:new Set(z),nodes:[...x],goalNode:K,path:K?Rr(K):null,limit:d?b:null,neueRunde:E,runden:d?[...p,{limit:b,expanded:y}]:null,stats:{expanded:g,generated:f,maxFrontier:D,frontierSize:h.length,visitedSize:z.size}}}const _=()=>O==="gefunden"||O==="erschöpft"||O==="abgebrochen";function Z(){if(E=!1,_())return"Die Suche ist beendet.";if(h.length===0)return d&&b<u?(p.push({limit:b,expanded:y}),b++,y=0,h=[a],z.clear(),N.clear(),x=[a],T=null,I=[],O="läuft",E=!0,`Runde ${b+1}: Bis Tiefe ${b-1} war kein Ziel — die Suche beginnt wieder ganz vorne, jetzt mit Tiefenlimit ${b}.`):(O="erschöpft",T=null,I=[],"Die Grenze ist leer — es gibt keinen Weg zum Ziel.");const F=Hr(h,n),M=h[F];h=h.filter((G,U)=>U!==F),T=M,I=[];const X=J(M.state);if(d){const G=N.get(X);if(G!==void 0&&G<=M.depth)return O="läuft","Diesen Zustand kennen wir schon (nicht tiefer) — überspringen.";N.set(X,M.depth)}else if(z.has(X))return O="läuft","Diesen Zustand kennen wir schon — überspringen.";if(z.add(X),Ke(M.state))return K=M,O="gefunden",d?`Ziel gefunden in Runde ${b+1}, nach ${M.depth} Zügen.`:`Ziel gefunden nach ${M.depth} Zügen.`;if(M.depth>=b)return O="läuft",`Tiefenlimit ${b} erreicht — dieser Ast wird abgeschnitten.`;if(g++,y++,g>=c)return O="abgebrochen",`Abbruch nach ${c} expandierten Knoten — so weit kommt diese Suche hier nicht.`;for(const G of ae(M.state)){if(!d&&z.has(J(G.state)))continue;const U=He(G.state,M,G.action,l);h.push(U),x.push(U),I.push(U),f++}return h.length>D&&(D=h.length),O="läuft",`Expandiert: ${M.action??"Startzustand"} — ${I.length} neue Knoten in die Grenze.`}function v(){return L(Z())}function m(F){let M="";for(let X=0;X<F&&!_();X++)M=Z();return L(M)}return{step:v,run:m,snapshot:()=>L("Bereit. Die Grenze enthält nur den Startzustand.")}}const $e=40;function me({strategies:s=["bfs","dfs","ucs"],start:n=ce[1].state,title:r="Graphensuche Schritt für Schritt",speed:l=220,maxExpansions:c=6e3}){const[d,u]=S.useState(s[0]),[a,h]=S.useState("manhattan"),[z,N]=S.useState(n),[x,b]=S.useState(null),[E,p]=S.useState(!1),y=S.useRef(null),g=Ge[d],f=S.useCallback(()=>{const m=$r(z,d,{heuristic:dn[g.useHeuristic?a:"keine"],maxExpansions:c});y.current=m,b(m.snapshot()),p(!1)},[z,d,a,g.useHeuristic,c]);S.useEffect(()=>{f()},[f]);const D=S.useCallback((m=1)=>{const F=y.current;F&&b(m===1?F.step():F.run(m))},[]);S.useEffect(()=>{if(!E)return;const m=setInterval(()=>{const F=y.current?.step();F&&(b(F),F.neueRunde&&p(!1),F.status!=="läuft"&&F.status!=="bereit"&&p(!1))},l);return()=>clearInterval(m)},[E,l]);const O=S.useMemo(()=>x&&["gefunden","erschöpft","abgebrochen"].includes(x.status),[x]);if(!x)return null;const T=Jr(x.frontier,d),I=new Set(x.children.map(m=>m.id)),K=Math.max(0,x.frontier.length-$e),L=d==="ids",_=d==="dfs"||L,Z=_?K:0,v=_?x.frontier.slice(Z):x.frontier.slice(0,$e);return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.title,children:r}),e.jsxs("div",{className:i.controls,children:[e.jsx("span",{className:i.label,children:"Algorithmus"}),e.jsx("select",{className:i.select,value:d,onChange:m=>u(m.target.value),children:s.map(m=>e.jsx("option",{value:m,children:Ge[m].label},m))}),g.useHeuristic&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.label,children:"Heuristik"}),e.jsxs("select",{className:i.select,value:a,onChange:m=>h(m.target.value),children:[e.jsx("option",{value:"manhattan",children:"Manhattan-Distanz"}),e.jsx("option",{value:"falschePlaetze",children:"falsche Plätze"}),e.jsx("option",{value:"keine",children:"keine (h = 0)"})]})]}),e.jsx("span",{className:i.label,children:"Start"}),e.jsx("select",{className:i.select,value:ce.findIndex(m=>m.state.join()===z.join()),onChange:m=>N(ce[Number(m.target.value)].state),children:ce.map((m,F)=>e.jsx("option",{value:F,children:m.label},m.label))})]}),e.jsxs("div",{className:i.controls,children:[e.jsx("button",{type:"button",className:`${i.button} ${i.buttonPrimary}`,onClick:()=>D(1),disabled:O,children:"1 Schritt"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>D(10),disabled:O,children:"10 Schritte"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>p(!E),disabled:O,children:E?"Pause":"abspielen"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>D(Number.POSITIVE_INFINITY),disabled:O,children:"bis zum Ende"}),e.jsx("button",{type:"button",className:i.button,onClick:f,children:"zurücksetzen"})]}),e.jsx("p",{className:[i.message,x.status==="gefunden"?i.messageDone:"",x.neueRunde?i.messageRound:"",x.status==="erschöpft"||x.status==="abgebrochen"?i.messageFail:""].filter(Boolean).join(" "),children:x.message}),e.jsxs("div",{className:i.statGrid,children:[e.jsx("span",{className:i.statKey,children:"Grenze nimmt"}),e.jsxs("span",{className:i.statValue,children:[g.pick," — ",g.frontier]}),L&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.statKey,children:"Runde"}),e.jsxs("span",{className:i.statValue,children:[x.limit+1," — Tiefenlimit ",x.limit]})]}),e.jsx("span",{className:i.statKey,children:"expandiert"}),e.jsx("span",{className:i.statValue,children:x.stats.expanded}),e.jsx("span",{className:i.statKey,children:"erzeugt"}),e.jsx("span",{className:i.statValue,children:x.stats.generated}),e.jsx("span",{className:i.statKey,children:"in der Grenze"}),e.jsxs("span",{className:i.statValue,children:[x.stats.frontierSize," (max. ",x.stats.maxFrontier,")"]}),e.jsx("span",{className:i.statKey,children:"besucht"}),e.jsx("span",{className:i.statValue,children:x.stats.visitedSize})]}),L&&e.jsxs("div",{className:i.rounds,children:[e.jsx("span",{className:i.roundsHint,children:"IDS sucht mehrmals: Jede Runde fängt wieder beim Startzustand an, darf aber eine Stufe tiefer gehen."}),e.jsx("div",{className:i.roundsList,children:x.runden.map((m,F)=>e.jsxs("span",{className:[i.roundChip,F===x.runden.length-1?i.roundChipAktiv:""].filter(Boolean).join(" "),children:["Runde ",m.limit+1," · Tiefe ≤ ",m.limit," · ",m.expanded," exp.",F<x.runden.length-1?" · kein Ziel":""]},m.limit))})]}),e.jsxs("div",{className:i.searchLayout,children:[e.jsxs("div",{className:i.column,children:[e.jsxs("p",{className:i.columnTitle,children:["Grenze (",x.stats.frontierSize,")"]}),e.jsxs("p",{className:i.frontierHint,children:[d==="bfs"&&"BFS nimmt den obersten Eintrag — den ältesten.",d==="dfs"&&"DFS nimmt den untersten Eintrag — den neuesten.",d==="ids"&&"IDS nimmt wie DFS den untersten Eintrag — aber nur bis zum Tiefenlimit.",!_&&d!=="bfs"&&`Gelb markiert ist der Knoten mit ${g.pick}.`]}),e.jsxs("div",{className:i.frontierList,children:[x.frontier.length===0&&e.jsx("span",{className:i.empty,children:"leer"}),K>0&&_&&e.jsxs("span",{className:i.empty,children:["… ",K," weitere darüber"]}),v.map((m,F)=>e.jsxs("div",{className:[i.frontierItem,F+Z===T?i.frontierItemNext:"",I.has(m.id)?i.frontierItemNew:""].filter(Boolean).join(" "),children:[e.jsx(we,{state:m.state}),e.jsx("span",{className:i.frontierAction,children:m.action??"Start"}),e.jsxs("span",{className:i.frontierMeta,children:["g=",m.g,g.useHeuristic?` h=${m.h} f=${m.g+m.h}`:""]})]},m.id)),K>0&&!_&&e.jsxs("span",{className:i.empty,children:["… ",K," weitere darunter"]})]}),e.jsxs("p",{className:i.columnTitle,style:{marginTop:"1rem"},children:["Besucht (",x.stats.visitedSize,")"]}),e.jsxs("div",{className:i.visitedGrid,children:[x.stats.visitedSize===0&&e.jsx("span",{className:i.empty,children:"noch nichts"}),[...x.visited].slice(-60).map(m=>e.jsx(we,{state:m.split(",").map(Number),title:m},m))]})]}),e.jsxs("div",{className:i.column,children:[e.jsxs("p",{className:i.columnTitle,children:["Suchbaum",L?` — Runde ${x.limit+1}`:""]}),L&&e.jsx("p",{className:i.frontierHint,children:"Der Baum zeigt nur die aktuelle Runde — bei jedem Rundenwechsel beginnt er neu beim Startzustand."}),e.jsx(Vr,{snapshot:x}),x.path&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:i.columnTitle,style:{marginTop:"1rem"},children:["Lösungsweg (",x.path.length-1," Züge)"]}),e.jsx("div",{className:i.pathStrip,children:x.path.map(m=>e.jsxs("div",{className:i.pathStep,children:[e.jsx(we,{state:m.state}),e.jsx("span",{children:m.action??"Start"})]},m.id))})]})]})]})]})}function Jr(s,n){if(s.length===0)return-1;if(n==="bfs")return 0;if(n==="dfs"||n==="ids")return s.length-1;const r=c=>n==="ucs"?c.g:n==="greedy"?c.h:c.g+c.h;let l=0;for(let c=1;c<s.length;c++)r(s[c])<r(s[l])&&(l=c);return l}const Oe={manhattan:{label:"Manhattan-Distanz",fn:pe},falschePlaetze:{label:"falsche Plätze",fn:ye}};function Je({initial:s=ce[0].state,showHeuristics:n=!1,title:r="Der Zustandsraum entsteht beim Spielen"}){const l=S.useRef(null),[,c]=S.useState(0),d=S.useCallback(()=>c(k=>k+1),[]),[u,a]=S.useState(s),[h,z]=S.useState(s),[N,x]=S.useState(0),[b,E]=S.useState(0),[p,y]=S.useState(null),[g,f]=S.useState(!0),[D,O]=S.useState(n),[T,I]=S.useState(n),[K,L]=S.useState("manhattan"),_=Oe[K].fn;l.current===null&&(l.current=ve(s,J,ae),je(l.current,s,1));const Z=l.current,v=S.useCallback(k=>{l.current=ve(k,J,ae),je(l.current,k,1),a(k),z(k),x(0),E(0),y(null),d()},[d]),m=S.useCallback((k,P)=>{const{schonBesucht:ee,kreis:re}=Ae(Z,k,P);z(P),x(ne=>ne+1),ee&&E(ne=>ne+1),y(re),d()},[Z,d]),F=S.useCallback(k=>{if(k===J(h))return;const P=en(Z,J(h),k);if(!P)return;let ee=h,re=0,ne=null;for(const q of P.slice(1)){const Ne=Z.nodes.get(q)?.state;if(!Ne)break;const{schonBesucht:hn,kreis:on}=Ae(Z,ee,Ne);hn&&(re+=1),ne=on,ee=Ne}z(ee),x(q=>q+P.length-1),E(q=>q+re),y(ne),d()},[Z,h,d]),M=k=>{const P=Ze(h,k);P&&m(h,P)},X=S.useCallback(k=>{je(Z,u,k),y(null),d()},[Z,u,d]),G=J(h),U=ae(h),B=nn(p),{pos:W,tiefe:$,baumKanten:Y,schleifen:H}=sn(Z,J(u),{spalte:qr,zeile:Qr}),C=rn(W,{rand:(g?3*an:16)+10+(D?10:0)+(D&&T?10:0)}),oe=k=>$.get(k)??0,le=_(h),te=oe(G);return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.title,children:r}),e.jsxs("div",{className:i.controls,children:[e.jsx("span",{className:i.label,children:"Stellung"}),ce.slice(0,4).map(k=>e.jsx("button",{type:"button",className:i.button,onClick:()=>v(k.state),children:k.label},k.label)),e.jsx("button",{type:"button",className:i.button,onClick:()=>v(cn(30)),children:"mischen"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>v(u),disabled:N===0,children:"Baum leeren"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>X(2),children:"bis Tiefe 2"}),e.jsx("button",{type:"button",className:i.button,onClick:()=>X(3),children:"bis Tiefe 3"}),e.jsxs("label",{className:i.checkbox,children:[e.jsx("input",{type:"checkbox",checked:g,onChange:k=>f(k.target.checked)}),"Zahlen zeigen"]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("label",{className:i.checkbox,children:[e.jsx("input",{type:"checkbox",checked:D,onChange:k=>O(k.target.checked)}),"h zeigen"]}),e.jsxs("label",{className:i.checkbox,children:[e.jsx("input",{type:"checkbox",checked:T,onChange:k=>I(k.target.checked),disabled:!D}),"f = g + h"]}),e.jsx("select",{className:i.select,value:K,onChange:k=>L(k.target.value),disabled:!D,children:Object.entries(Oe).map(([k,{label:P}])=>e.jsx("option",{value:k,children:P},k))})]})]}),e.jsxs("div",{className:i.spaceLayout,children:[e.jsxs("div",{children:[e.jsx("p",{className:i.columnTitle,children:"spielen"}),e.jsx("div",{className:i.board,children:h.map((k,P)=>{const ee=Ze(h,P)!==null;return e.jsx("button",{type:"button",className:[i.tile,k===0?i.tileEmpty:"",ee?i.tileMovable:"",k!==0&&k===he[P]?i.tileCorrect:""].filter(Boolean).join(" "),onClick:()=>M(P),disabled:k===0,children:k===0?"":k},P)})}),e.jsxs("div",{className:i.statGrid,style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:i.statKey,children:"key(state)"}),e.jsx("span",{className:i.statValue,children:G}),e.jsx("span",{className:i.statKey,children:"Züge gemacht"}),e.jsx("span",{className:i.statValue,children:N}),D&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:i.statKey,children:["h(state) — ",Oe[K].label]}),e.jsxs("span",{className:i.statValue,children:[le,le===0?" — am Ziel":""]})]}),D&&T&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.statKey,children:"g(state) — Züge vom Start"}),e.jsx("span",{className:i.statValue,children:te}),e.jsx("span",{className:i.statKey,children:"f = g + h"}),e.jsxs("span",{className:i.statValue,children:[te," + ",le," = ",te+le]})]}),e.jsx("span",{className:i.statKey,children:"Knoten (Zustände)"}),e.jsx("span",{className:i.statValue,children:Z.nodes.size}),e.jsx("span",{className:i.statKey,children:"Kanten (Züge)"}),e.jsx("span",{className:i.statValue,children:Z.edges.size}),e.jsx("span",{className:i.statKey,children:"Schleifen im Graph"}),e.jsx("span",{className:i.statValue,children:H.length}),e.jsx("span",{className:i.statKey,children:"schon bekannt"}),e.jsx("span",{className:i.statValue,children:b})]}),p?e.jsxs("p",{className:i.cycleNote,children:["Schleife! Diese Stellung kannten wir schon — der Zug schliesst einen Kreis aus ",p.length," Zuständen."]}):e.jsx("p",{className:i.frontierHint,children:"Jeder Zug legt einen Knoten an — ausser die Stellung gibt es schon. Tipp: Klicken Sie rechts im Baum auf einen beliebigen Knoten, dann wandert das Puzzle dorthin."}),e.jsxs("p",{className:i.columnTitle,children:["Nachfolger (",U.length,") — klicken zum Ziehen"]}),e.jsx("div",{className:i.frontierList,children:U.map(k=>{const P=Z.nodes.get(J(k.state))?.gespielt===!0;return e.jsxs("button",{type:"button",className:[i.frontierItem,P?"":i.frontierItemNew].filter(Boolean).join(" "),style:{cursor:"pointer",textAlign:"left"},onClick:()=>m(h,k.state),children:[e.jsx("span",{className:i.frontierAction,children:k.action}),e.jsx("span",{className:i.frontierMeta,children:J(k.state)}),D&&e.jsxs("span",{className:i.frontierMeta,children:["h=",_(k.state)," ",_(k.state)<le?"↓ näher":_(k.state)>le?"↑ weiter":"→ gleich"]}),D&&T&&e.jsxs("span",{className:i.frontierMeta,children:["g=",Math.min(te+1,$.get(J(k.state))??te+1)," ","f=",Math.min(te+1,$.get(J(k.state))??te+1)+_(k.state)]}),e.jsx("span",{className:i.frontierMeta,children:P?"bekannt":"neu"})]},k.action)})})]}),e.jsxs("div",{className:i.column,children:[e.jsxs("p",{className:i.columnTitle,children:["Zustandsraum als Suchbaum — ",Z.nodes.size," Knoten, ",Z.edges.size," ","Kanten"]}),e.jsx("div",{className:i.graphBox,children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:`${C.x} ${C.y} ${C.w} ${C.h}`,role:"img","aria-label":"Zustandsraum als Suchbaum",children:[e.jsx("title",{children:"Zustandsraum: Knoten sind Stellungen, Kanten sind Züge"}),Y.map(({id:k,von:P,nach:ee})=>{const re=W.get(P),ne=W.get(ee);if(!re||!ne)return null;const q=P===G||ee===G;return e.jsx("path",{d:ln(re,ne),fill:"none",stroke:q?"var(--color-yellow)":"var(--color-bg-lighter)",strokeWidth:q?2:1.2},k)}),H.map(({id:k,von:P,nach:ee})=>{const re=W.get(P),ne=W.get(ee);if(!re||!ne)return null;const q=B.has(k);return e.jsx("path",{d:tn(re,ne),fill:"none",stroke:q?"var(--color-red)":"var(--color-purple)",strokeWidth:q?2.5:1.2,strokeDasharray:q?"none":"4 3",opacity:q?1:.7},k)}),[...Z.nodes.values()].map(k=>{const P=W.get(k.key);return P?e.jsx(Ur,{node:k,x:P.x,y:P.y,aktiv:k.key===G,imKreis:p?.includes(k.key)??!1,zeigeZahlen:g,hWert:D?_(k.state):null,hAktuell:le,gWert:D&&T?oe(k.key):null,onClick:()=>F(k.key)},k.key):null})]})}),e.jsxs("div",{className:i.legend,children:[e.jsx(be,{farbe:"var(--color-yellow)",text:"aktuelle Stellung"}),e.jsx(be,{farbe:"var(--color-aqua)",text:"Zielstellung"}),e.jsx(be,{farbe:"var(--color-blue)",text:"selbst besucht"}),e.jsx(be,{farbe:"var(--color-gray)",text:"nur aufgedeckt"}),e.jsx(be,{farbe:"var(--color-purple)",text:"Schleife (Rückkante)"}),e.jsx("span",{children:"Jede Zeile = ein Zug weiter vom Start weg"}),e.jsx("span",{children:"Klick auf einen Knoten: dorthin springen"}),D&&e.jsxs("span",{children:["Die Zahl unter jedem Knoten ist ",e.jsx("code",{children:"h"})," — grün: näher am Ziel als jetzt, rot: weiter weg"]}),D&&T&&e.jsxs("span",{children:["Darunter ",e.jsx("code",{children:"g"})," (Züge vom Start) und"," ",e.jsx("code",{children:"f = g + h"})," — die Zahl, nach der A",e.jsx("sup",{children:"*"})," ","auswählt"]})]})]})]})]})}function Ur({node:s,x:n,y:r,aktiv:l,imKreis:c,zeigeZahlen:d,hWert:u,hAktuell:a,gWert:h,onClick:z}){const N=Ke(s.state),x=l?"var(--color-yellow)":c?"var(--color-red)":N?"var(--color-aqua)":s.gespielt?"var(--color-blue)":"var(--color-gray)",b=u===null?"transparent":u===0?"var(--color-aqua)":u<a?"var(--color-green)":u>a?"var(--color-red)":"var(--color-gray-light)";if(!d)return e.jsxs("g",{role:"button",tabIndex:0,"aria-label":`Stellung ${s.key}`,onClick:z,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&z()},style:{cursor:"pointer"},children:[e.jsx("title",{children:s.key}),e.jsx("circle",{cx:n,cy:r,r:l?8:s.gespielt?6:4,fill:x}),u!==null&&e.jsx("text",{x:n,y:r+13,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:9,fontWeight:l?700:400,fill:b,children:u}),u!==null&&h!==null&&e.jsxs("text",{x:n,y:r+23,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:8,fill:"var(--color-gray-light)",children:["f=",h+u]})]});const E=an,p=n-3*E/2,y=r-3*E/2;return e.jsxs("g",{role:"button",tabIndex:0,"aria-label":`Stellung ${s.key}`,onClick:z,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&z()},style:{cursor:"pointer"},children:[e.jsx("title",{children:s.key}),e.jsx("rect",{x:p-2,y:y-2,width:3*E+4,height:3*E+4,rx:3,fill:"var(--color-bg)",stroke:x,strokeWidth:l||c?2.5:1.2}),s.state.map((g,f)=>e.jsx("text",{x:p+f%3*E+E/2,y:y+Math.floor(f/3)*E+E/2,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:E*.72,fill:g===0?"transparent":s.gespielt?"var(--color-fg)":"var(--color-gray-light)",children:g},f)),u!==null&&e.jsxs("text",{x:n,y:y+3*E+9,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:9,fontWeight:l?700:400,fill:b,children:["h=",u]}),u!==null&&h!==null&&e.jsxs("text",{x:n,y:y+3*E+19,textAnchor:"middle",dominantBaseline:"central",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",fontSize:8,fontWeight:l?700:400,fill:"var(--color-gray-light)",children:["g=",h," f=",h+u]})]})}function be({farbe:s,text:n}){return e.jsxs("span",{className:i.legendItem,children:[e.jsx("span",{className:i.legendDot,style:{backgroundColor:s}}),n]})}const an=9,qr=42,Qr=56;function Xr({start:s=ce[2].state,showHeuristics:n=!1,title:r="Ein Zustand und seine Nachfolger"}){const[l,c]=S.useState(s),d=ae(l);return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.title,children:r}),e.jsxs("div",{className:i.puzzleLayout,children:[e.jsxs("div",{children:[e.jsx("p",{className:i.columnTitle,children:"Zustand"}),e.jsx("div",{className:i.board,style:{gridTemplateColumns:"repeat(3, 44px)",gridTemplateRows:"repeat(3, 44px)"},children:l.map((u,a)=>e.jsx("div",{className:[i.tile,u===0?i.tileEmpty:""].filter(Boolean).join(" "),style:{fontSize:"1.1rem"},children:u===0?"":u},a))}),e.jsxs("div",{className:i.statGrid,style:{marginTop:"0.75rem"},children:[e.jsx("span",{className:i.statKey,children:"key(state)"}),e.jsx("span",{className:i.statValue,children:l.join(",")}),e.jsx("span",{className:i.statKey,children:"Nachfolger"}),e.jsx("span",{className:i.statValue,children:d.length}),n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:i.statKey,children:"Manhattan"}),e.jsx("span",{className:i.statValue,children:pe(l)}),e.jsx("span",{className:i.statKey,children:"falsche Plätze"}),e.jsx("span",{className:i.statValue,children:ye(l)})]})]})]}),e.jsxs("div",{className:i.panel,children:[e.jsx("p",{className:i.columnTitle,children:"successors(state) — klicken Sie einen Nachfolger an"}),e.jsx("div",{className:i.frontierList,children:d.map(u=>e.jsxs("button",{type:"button",className:i.frontierItem,style:{cursor:"pointer",textAlign:"left"},onClick:()=>c(u.state),children:[e.jsx(we,{state:u.state}),e.jsx("span",{className:i.frontierAction,children:u.action}),e.jsxs("span",{className:i.frontierMeta,children:["Kosten ",u.cost,n?` · h=${pe(u.state)}`:""]})]},u.action))}),e.jsx("div",{className:i.controls,style:{marginTop:"0.75rem"},children:e.jsx("button",{type:"button",className:i.button,onClick:()=>c(s),children:"zurücksetzen"})})]})]})]})}function Yr({title:s="Suchbaum ist nicht Zustandsraum"}){return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.title,children:s}),e.jsxs("div",{className:i.diagramPair,children:[e.jsxs("figure",{className:i.diagram,children:[e.jsx("figcaption",{className:i.columnTitle,children:"Suchbaum — klappt immer weiter auf"}),e.jsxs("svg",{viewBox:"0 0 360 250",width:"100%",height:"250",role:"img","aria-label":"Suchbaum mit doppelt vorkommenden Zuständen",fontFamily:"inherit",children:[e.jsx("title",{children:"Suchbaum: der Startzustand taucht nach zwei Zügen wieder auf"}),e.jsx(ie,{x1:180,y1:46,x2:95,y2:104,label:"Zug a"}),e.jsx(ie,{x1:180,y1:46,x2:265,y2:104,label:"Zug b"}),e.jsx(ie,{x1:95,y1:136,x2:50,y2:194,label:"zurück"}),e.jsx(ie,{x1:95,y1:136,x2:140,y2:194}),e.jsx(ie,{x1:265,y1:136,x2:220,y2:194,label:"zurück"}),e.jsx(ie,{x1:265,y1:136,x2:310,y2:194}),e.jsx(se,{x:180,y:30,text:"Start",farbe:"var(--color-yellow)"}),e.jsx(se,{x:95,y:120,text:"A"}),e.jsx(se,{x:265,y:120,text:"B"}),e.jsx(se,{x:50,y:210,text:"Start",farbe:"var(--color-red)"}),e.jsx(se,{x:140,y:210,text:"C"}),e.jsx(se,{x:220,y:210,text:"Start",farbe:"var(--color-red)"}),e.jsx(se,{x:310,y:210,text:"D"})]}),e.jsx("p",{className:i.diagramNote,children:"Rot: schon bekannte Stellungen, die der Baum trotzdem noch einmal erzeugt. Ohne Gegenmassnahme wächst er unendlich."})]}),e.jsxs("figure",{className:i.diagram,children:[e.jsx("figcaption",{className:i.columnTitle,children:"Zustandsraum — endlicher Graph"}),e.jsxs("svg",{viewBox:"0 0 360 250",width:"100%",height:"250",role:"img","aria-label":"Derselbe Ausschnitt als Graph",fontFamily:"inherit",children:[e.jsx("title",{children:"Zustandsraum: gleiche Zustände sind ein einziger Knoten"}),e.jsx(ie,{x1:180,y1:46,x2:95,y2:104,label:"Zug a",beidseitig:!0}),e.jsx(ie,{x1:180,y1:46,x2:265,y2:104,label:"Zug b",beidseitig:!0}),e.jsx(ie,{x1:95,y1:136,x2:140,y2:194,beidseitig:!0}),e.jsx(ie,{x1:265,y1:136,x2:220,y2:194,beidseitig:!0}),e.jsx(ie,{x1:140,y1:210,x2:220,y2:210,beidseitig:!0}),e.jsx(se,{x:180,y:30,text:"Start",farbe:"var(--color-yellow)"}),e.jsx(se,{x:95,y:120,text:"A"}),e.jsx(se,{x:265,y:120,text:"B"}),e.jsx(se,{x:140,y:210,text:"C"}),e.jsx(se,{x:220,y:210,text:"D"})]}),e.jsx("p",{className:i.diagramNote,children:"Jeder Zustand kommt genau einmal vor. Jede Kante lässt sich in beide Richtungen gehen — deshalb entstehen Kreise."})]})]})]})}function se({x:s,y:n,text:r,farbe:l="var(--color-blue)"}){const c=r.length>2?62:40;return e.jsxs("g",{children:[e.jsx("rect",{x:s-c/2,y:n-16,width:c,height:32,rx:6,fill:"var(--color-bg)",stroke:l,strokeWidth:2}),e.jsx("text",{x:s,y:n,textAnchor:"middle",dominantBaseline:"central",fontSize:14,fill:l,children:r})]})}function ie({x1:s,y1:n,x2:r,y2:l,label:c,beidseitig:d=!1}){const u=(s+r)/2,a=(n+l)/2;return e.jsxs("g",{children:[e.jsx("line",{x1:s,y1:n,x2:r,y2:l,stroke:"var(--color-gray)",strokeWidth:1.5}),d&&e.jsxs(e.Fragment,{children:[e.jsx(Pe,{x1:s,y1:n,x2:r,y2:l}),e.jsx(Pe,{x1:r,y1:l,x2:s,y2:n})]}),!d&&e.jsx(Pe,{x1:s,y1:n,x2:r,y2:l}),c&&e.jsx("text",{x:u+6,y:a,textAnchor:"start",dominantBaseline:"central",fontSize:11,fill:"var(--color-gray)",children:c})]})}function Pe({x1:s,y1:n,x2:r,y2:l}){const c=r-s,d=l-n,u=Math.hypot(c,d)||1,a=c/u,h=d/u,z=r-a*2,N=l-h*2,x=7,b=3.5,E=`${z},${N}`,p=`${z-a*x-h*b},${N-h*x+a*b}`,y=`${z-a*x+h*b},${N-h*x-a*b}`;return e.jsx("polygon",{points:`${E} ${p} ${y}`,fill:"var(--color-gray)"})}function el(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"Klassische KI"}),e.jsx("h2",{children:"Probleme lösen mit Graphensuche"}),e.jsx("p",{children:"Alles am Beispiel des Schiebepuzzles"})]}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"KI ohne Lernen"}),e.jsxs("p",{children:["Wenn heute von KI die Rede ist, meint man fast immer"," ",e.jsx("strong",{children:"maschinelles Lernen"}),": ein System, das aus Daten Muster zieht. Die KI, die Schach spielt, eine Route plant oder ein Rätsel löst, funktioniert anders. Sie lernt nichts. Sie"," ",e.jsx("strong",{children:"sucht"}),"."]}),e.jsxs("p",{children:["Wir schauen uns das an einem einzigen Beispiel an, das wir die ganze Woche nicht mehr loslassen: dem ",e.jsx("strong",{children:"Schiebepuzzle"}),". Acht Steine, ein leeres Feld, und die Frage: Wie kommt man mit möglichst wenigen Zügen zur geordneten Stellung?"]})]})}),e.jsx(Ce,{title:"Zuerst selbst: Lösen Sie das Puzzle von Hand"}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was haben Sie gerade getan?"}),e.jsx("p",{children:"Sie haben ein Feld angeschaut, überlegt, welcher Zug sinnvoll ist, ihn gemacht und von vorne begonnen. Vielleicht haben Sie einen Zug zurückgenommen, weil er in eine Sackgasse führte."}),e.jsxs("p",{children:["Genau das macht ein Suchalgorithmus auch — nur ohne Intuition, dafür unermüdlich und systematisch. Damit er das kann, müssen wir drei Dinge sauber aufschreiben: ",e.jsx("strong",{children:"Zustand"}),","," ",e.jsx("strong",{children:"Aktion"})," und ",e.jsx("strong",{children:"Ziel"}),"."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Zustand"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Zustand"})," ist eine vollständige Momentaufnahme: alles, was man wissen muss, um weiterzuspielen. Beim Schiebepuzzle ist das die Position jedes Steins — mehr nicht. Wie viele Züge wir schon gemacht haben, gehört ",e.jsx("em",{children:"nicht"})," zum Zustand."]}),e.jsx(Q,{lang:"javascript",filename:"zustand.js",children:`// Die Stellung
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
console.log(isGoal(state)); // false`}),e.jsxs("p",{children:["Diese Schlüssel-Funktion ist wichtiger, als sie aussieht. Zwei Arrays mit gleichem Inhalt sind in JavaScript nicht gleich (",e.jsx("code",{children:"[1,2] === [1,2]"})," ist ",e.jsx("code",{children:"false"}),"). Über den Schlüssel können wir Zustände trotzdem in einem ",e.jsx("code",{children:"Set"})," ","sammeln."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Aktionen und Nachfolger"}),e.jsxs("p",{children:["Eine ",e.jsx("strong",{children:"Aktion"})," führt von einem Zustand in einen anderen. Beim Schiebepuzzle schiebt sie einen Stein ins leere Feld. Je nachdem, wo das leere Feld liegt, gibt es unterschiedlich viele Möglichkeiten:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"leeres Feld in der Ecke: 2 Züge"}),e.jsx("li",{children:"leeres Feld am Rand: 3 Züge"}),e.jsx("li",{children:"leeres Feld in der Mitte: 4 Züge"})]}),e.jsxs("p",{children:["Im Schnitt sind das etwa 3 — der ",e.jsx("strong",{children:"Verzweigungsgrad"})," ",e.jsx("code",{children:"b"}),". Die Funktion ",e.jsx("code",{children:"successors(state)"})," liefert alle Nachfolger auf einmal. Probieren Sie sie unten aus: Jeder Klick ist ein Zug, jeder Zug erzeugt eine neue Liste von Möglichkeiten."]})]})}),e.jsx(Xr,{title:"successors(state): ein Zustand, alle Folgezustände"}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Nachfolger im Code"}),e.jsx(Q,{lang:"javascript",filename:"successors.js",children:`function successors(state) {
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
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Die Kopie ist Pflicht."})," Würden wir"," ",e.jsx("code",{children:"state"})," direkt verändern, würden wir auch alle schon gespeicherten Knoten verändern, die auf dasselbe Array zeigen. Die Suche würde ihre eigene Vergangenheit zerstören."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Zustandsraum"}),e.jsxs("p",{children:["Alle erreichbaren Zustände zusammen bilden den"," ",e.jsx("strong",{children:"Zustandsraum"}),". Er ist ein ",e.jsx("strong",{children:"Graph"}),": Knoten sind Stellungen, Kanten sind Züge."]}),e.jsxs("p",{children:["Beim 3×3-Puzzle gibt es ",e.jsx("code",{children:"9! = 362'880"})," Anordnungen. Davon ist genau die Hälfte erreichbar: ",e.jsx("strong",{children:"181'440 Zustände"}),". Die andere Hälfte ist unlösbar — man kommt von dort nie zum Ziel, egal wie lange man schiebt. (Probieren Sie oben die Stellung «unlösbar».)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Der zentrale Trick:"})," Wir zeichnen diesen Graphen nie. Wir kennen nur den Startzustand und die Funktion"," ",e.jsx("code",{children:"successors"}),". Der Algorithmus klappt den Graphen genau so weit auf, wie er ihn braucht."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Je,{title:"Spielen Sie — und der Zustandsraum entsteht"})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was Sie dabei sehen"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Jeder Knoten zeigt die ",e.jsx("strong",{children:"Stellung als Zahlen"})," — das ist genau das Array ",e.jsx("code",{children:"[1,2,3,…]"}),", mit dem der Algorithmus rechnet."]}),e.jsxs("li",{children:["Von der aktuellen Stellung aus sind"," ",e.jsx("strong",{children:"immer alle Nachfolger"})," eingezeichnet (grau). Ein Klick darauf — oder auf einen Stein links — führt den Zug aus."]}),e.jsxs("li",{children:["Gezeichnet wird wie bei BFS:"," ",e.jsx("strong",{children:"jede Zeile ist ein Zug weiter"})," vom Start weg. Die Stellungen stehen also nach Tiefe geordnet — und das Bild bleibt stabil."]}),e.jsxs("li",{children:["Landen Sie auf einer Stellung, die Sie schon besucht haben, entsteht ",e.jsx("strong",{children:"kein neuer Knoten"}),": übrig bleibt eine zusätzliche Kante — eine ",e.jsx("strong",{children:"Schleife"})," (violett gestrichelt, frisch geschlossen rot). Genau daran erkennt man, dass der Zustandsraum ein Graph ist und kein Baum."]}),e.jsxs("li",{children:["Mit ",e.jsx("em",{children:"Tiefe 2"})," bzw. ",e.jsx("em",{children:"Tiefe 3"})," klappen Sie alles systematisch auf. Nach drei Zügen stehen schon über 20 Zustände da — bei 181'440 insgesamt."]})]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Dasselbe nochmal: Pfannkuchen sortieren"}),e.jsxs("p",{children:["Damit klar wird, dass an all dem nichts",e.jsx("em",{children:" puzzle"}),"-spezifisch ist, hier ein zweites Problem. Auf einem Teller liegt ein Stapel Pfannkuchen, alle verschieden gross. Sie haben nur einen Wender: Sie schieben ihn irgendwo in den Stapel und drehen ",e.jsx("strong",{children:"alles darüber"})," auf einmal um. Ziel: kleinster Pfannkuchen oben, grösster unten."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Zustand:"})," die Reihenfolge der Grössen, z. B."," ",e.jsx("code",{children:"[3,1,4,2]"})," — oben die 3, unten die 2."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Aktion:"})," ",e.jsx("code",{children:"wende k"})," dreht die obersten"," ",e.jsx("code",{children:"k"})," Pfannkuchen um."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Verzweigungsgrad:"})," immer genau ",e.jsx("code",{children:"n − 1"})," ","— bei vier Pfannkuchen also 3, egal wie der Stapel aussieht."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zustandsraum:"})," alle Reihenfolgen, also"," ",e.jsx("code",{children:"n!"})," — bei fünf Pfannkuchen 120 Stück."]})]}),e.jsxs("p",{children:["Die Suchalgorithmen interessiert das nicht: Sie brauchen nur"," ",e.jsx("code",{children:"key"}),", ",e.jsx("code",{children:"successors"})," und ",e.jsx("code",{children:"isGoal"}),". Spielen Sie unten — der Graph entsteht genau gleich wie beim Puzzle."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Pr,{title:"Pfannkuchen wenden — derselbe Zustandsraum, ein anderes Problem"})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Suchbaum ist nicht Zustandsraum"}),e.jsxs("p",{children:["Wenn wir vom Start aus alle Züge aufklappen, entsteht ein"," ",e.jsx("strong",{children:"Suchbaum"}),". Darin kommt dieselbe Stellung immer wieder vor — jeder Zug lässt sich ja sofort rückgängig machen:"]}),e.jsx(Yr,{title:"Derselbe Ausschnitt — einmal als Baum, einmal als Graph"}),e.jsxs("p",{children:["Ohne Gegenmassnahme wächst der Suchbaum unendlich, obwohl der Zustandsraum endlich ist. Darum führt jede Suche eine Menge"," ",e.jsx("strong",{children:"besucht"})," mit und wirft Zustände weg, die sie schon kennt. Aus dem Baum wird so wieder ein Graph."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die zwei Mengen"}),e.jsx("p",{children:"Jede Graphensuche verwaltet genau zwei Mengen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Grenze"})," (",e.jsx("em",{children:"frontier"}),") — Zustände, die wir kennen, aber noch nicht untersucht haben. Der Rand unseres Wissens."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Besucht"})," (",e.jsx("em",{children:"visited"}),") — Zustände, die wir bereits abgehakt haben. Ohne diese Menge dreht sich die Suche im Kreis."]})]}),e.jsxs("p",{children:["Dazu merkt sich jeder Knoten seinen ",e.jsx("strong",{children:"Vorgänger"}),". Erst dadurch können wir am Schluss den Weg rückwärts zusammensetzen — die Suche findet ja nicht «den Weg», sondern nur den Zielknoten."]})]})}),e.jsx(t,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Kern in 15 Zeilen"}),e.jsx(Q,{lang:"javascript",filename:"search.js",children:`function search(start, frontier) {
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
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Das ist der ganze Algorithmus."})," BFS, DFS, UCS, Greedy und A",e.jsx("sup",{children:"*"})," unterscheiden sich einzig darin, welchen Knoten ",e.jsx("code",{children:"frontier.pop()"})," zurückgibt."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Breitensuche (BFS)"}),e.jsxs("p",{children:["Die Grenze ist eine ",e.jsx("strong",{children:"Warteschlange"})," (FIFO): Wer zuerst gefunden wurde, wird zuerst untersucht. Dadurch wird der Graph in Ringen abgearbeitet — zuerst alle Stellungen nach einem Zug, dann alle nach zwei Zügen, und so weiter."]}),e.jsxs("p",{children:["Schauen Sie der Suche unten zu. Achten Sie auf drei Dinge: Der gelb markierte Eintrag in der Grenze ist immer der"," ",e.jsx("strong",{children:"oberste"}),". Neue Knoten kommen immer"," ",e.jsx("strong",{children:"unten"})," dazu. Und der Suchbaum wächst"," ",e.jsx("strong",{children:"Spalte für Spalte"}),", nicht in die Tiefe."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(me,{strategies:["bfs"],title:"Breitensuche beobachten — Schritt für Schritt"})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was BFS kann und was es kostet"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Vollständig:"})," ja. Wenn es eine Lösung gibt, findet BFS sie."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimal:"})," ja — aber nur, weil beim Puzzle jeder Zug gleich viel kostet. BFS zählt Züge, nicht Kosten."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preis:"})," der Speicher. Bei Verzweigungsgrad"," ",e.jsx("code",{children:"b"})," und Lösungstiefe ",e.jsx("code",{children:"d"})," liegen bis zu"," ",e.jsx("code",{children:"b^d"})," Knoten gleichzeitig in der Grenze."]})]}),e.jsxs("p",{children:["Beim 14-Zug-Puzzle sind das rund 2'900 expandierte Knoten und eine Grenze von etwa 2'000 Einträgen — für ein Rätsel, das Sie in zwei Minuten von Hand lösen. Beim 4×4-Puzzle mit seinen 10",e.jsx("sup",{children:"13"})," ","Zuständen ist BFS chancenlos."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Tiefensuche (DFS)"}),e.jsxs("p",{children:["Wir ändern ",e.jsx("strong",{children:"eine einzige Zeile"}),": Die Grenze ist jetzt ein ",e.jsx("strong",{children:"Stapel"})," (LIFO), der zuletzt gefundene Zustand kommt zuerst dran. Die Suche rennt einem Pfad nach, so tief sie kann."]}),e.jsx("p",{children:"Beobachten Sie denselben Startzustand mit DFS. Der Suchbaum wird zu einem langen Faden, der immer tiefer läuft — und die gefundene «Lösung» hat Hunderte von Zügen. Oft bricht die Demo sogar vorher ab: Nach 6'000 expandierten Knoten hört sie im Browser auf, obwohl die Stellung in vier Zügen lösbar wäre."})]})}),e.jsx("div",{className:"breakout",children:e.jsx(me,{strategies:["dfs","bfs"],title:"Tiefensuche — dieselbe Stellung, ein anderer Zugriff"})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"DFS im Urteil"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Speicher:"})," hervorragend — nur der aktuelle Pfad plus Abzweigungen, also ",e.jsx("code",{children:"b · d"})," statt ",e.jsx("code",{children:"b^d"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimal:"})," nein, überhaupt nicht. Lässt man DFS im Repo ohne Abbruchgrenze laufen, findet sie für die 14-Zug-Stellung einen Weg mit ",e.jsx("strong",{children:"113'358 Zügen"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vollständig:"})," nur mit Besucht-Menge und endlichem Zustandsraum. Sonst läuft DFS für immer in eine Richtung."]})]}),e.jsxs("p",{children:["Beides sind gültige Lösungen — jeder einzelne Zug ist erlaubt, und am Ende steht die Zielstellung. Nur würde kein Mensch die zweite «Lösung» nennen. ",e.jsx("em",{children:"Gültig"})," und ",e.jsx("em",{children:"gut"})," ist nicht dasselbe."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Iterative Tiefensuche (IDS)"}),e.jsxs("p",{children:["DFS braucht wenig Speicher, findet aber irgendeinen Weg. BFS findet den kürzesten, frisst aber Speicher. Die"," ",e.jsx("strong",{children:"iterative Tiefensuche"})," nimmt von beiden das Gute — mit einem Trick, der zuerst verschwenderisch aussieht:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Mache eine Tiefensuche, die bei Tiefe ",e.jsx("code",{children:"0"})," stoppt."]}),e.jsx("li",{children:"Nichts gefunden? Fang von vorne an, diesmal bis Tiefe 1."}),e.jsx("li",{children:"Nichts gefunden? Von vorne bis Tiefe 2 — und so weiter, bis das Ziel auftaucht."})]}),e.jsxs("p",{children:["Jede Runde ist eine ganz normale Tiefensuche mit einem"," ",e.jsx("strong",{children:"Tiefenlimit"}),". Weil die Runden der Reihe nach immer tiefer gehen, wird das Ziel zuerst auf seiner kleinsten Tiefe gefunden — genau wie bei BFS. Gespeichert wird aber immer nur ein Pfad, also ",e.jsx("code",{children:"b · d"})," statt ",e.jsx("code",{children:"b^d"}),"."]}),e.jsxs("p",{children:["«Aber da wird doch alles mehrfach durchsucht!» — stimmt, und es macht wenig aus. Bei Verzweigungsgrad ",e.jsx("code",{children:"b ≈ 3"})," liegen in der untersten Ebene etwa so viele Knoten wie in allen Ebenen darüber zusammen. Die wiederholten Runden kosten darum nur einen konstanten Faktor, ungefähr ",e.jsx("code",{children:"b / (b - 1)"})," — also rund 1.5-mal so viel Arbeit wie eine einzige Suche bis zur richtigen Tiefe."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"IDS beobachten"}),e.jsxs("p",{children:["Wichtig beim Zuschauen: Die Demo zeigt immer nur"," ",e.jsx("strong",{children:"eine Runde"}),". Ist die Grenze leer, war in dieser Tiefe kein Ziel — dann beginnt alles wieder beim Startzustand, der Suchbaum wird gelöscht und wächst eine Stufe tiefer neu auf. Das ist kein Fehler, sondern genau der Trick. Die Leiste über der Anzeige protokolliert die bisherigen Runden mit ihrem Tiefenlimit, und beim Abspielen hält die Demo an jedem Rundenwechsel kurz an."]}),e.jsx("p",{children:"Der gefundene Weg ist am Ende gleich lang wie bei BFS, die Grenze bleibt aber die ganze Zeit winzig — vergleichen Sie die Zeile «in der Grenze (max.)» mit derjenigen von BFS."})]})}),e.jsx("div",{className:"breakout",children:e.jsx(me,{strategies:["ids","dfs","bfs"],maxExpansions:4e4,speed:60,title:"Iterative Tiefensuche — Runde für Runde eine Stufe tiefer"})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"IDS im Urteil"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Speicher:"})," so gut wie DFS — ",e.jsx("code",{children:"b · d"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Optimal:"})," ja, wenn alle Züge gleich viel kosten — wie bei BFS."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vollständig:"})," ja, auch in unendlich tiefen Räumen, weil kein Ast unendlich weit verfolgt wird."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preis:"})," dieselben Knoten werden mehrfach besucht — Rechenzeit gegen Speicher getauscht."]})]}),e.jsx("p",{children:"Darum ist IDS das Standardverfahren, wenn man uninformiert sucht, den kürzesten Weg braucht und der Speicher knapp ist."})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kostensuche (UCS)"}),e.jsxs("p",{children:["Beim Puzzle kostet jeder Zug gleich viel. In der Realität nicht: Eine Autobahn ist nicht gleich teuer wie ein Feldweg. Darum bekommt jede Kante Kosten, und jeder Knoten merkt sich ",e.jsx("code",{children:"g"})," — die Summe der Kosten vom Start bis hierher."]}),e.jsxs("p",{children:["Die Grenze wird zur ",e.jsx("strong",{children:"Prioritätswarteschlange"}),": Immer der Knoten mit dem kleinsten ",e.jsx("code",{children:"g"})," kommt dran. Das ist exakt der ",e.jsx("strong",{children:"Dijkstra-Algorithmus"}),"."]}),e.jsxs("p",{children:["Stellen Sie unten UCS ein. Sie werden kaum einen Unterschied zu BFS sehen — und das ist die richtige Beobachtung: Wenn alle Kanten 1 kosten, ist ",e.jsx("code",{children:"g"})," nichts anderes als die Anzahl Züge."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(me,{strategies:["bfs","dfs","ids","ucs"],title:"Alle vier im direkten Vergleich"})}),e.jsx(t,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die vier Algorithmen auf einen Blick"}),e.jsx(yr,{caption:"b = Verzweigungsgrad (≈ 3 beim Schiebepuzzle), d = Tiefe der Lösung."}),e.jsxs("p",{children:["Alle vier sind ",e.jsx("strong",{children:"uninformiert"}),": Sie wissen nichts über das Puzzle, ausser welche Züge erlaubt sind. Sie suchen gleichmässig in alle Richtungen — auch dorthin, wo das Ziel sicher nicht liegt."]})]})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Ausblick: eine Ahnung vom Ziel"}),e.jsx("p",{children:"Als Sie das Puzzle oben von Hand gelöst haben, haben Sie nicht 2'900 Stellungen durchprobiert. Sie haben gesehen, dass ein Zug «besser aussieht» als ein anderer. Diese Ahnung kann man ausrechnen — zum Beispiel so:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Falsche Plätze:"})," Wie viele Steine liegen nicht dort, wo sie hingehören?"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Manhattan-Distanz:"})," Wie weit muss jeder Stein mindestens laufen — Zeilen- plus Spaltenabstand, aufsummiert?"]})]}),e.jsx("p",{children:"Schalten Sie unten «Abstände zeigen» ein: Jeder Stein bekommt seinen Abstand zum Zielplatz als kleine gelbe Zahl, unten stehen die beiden Summen. Ziehen Sie ein paar Steine und beobachten Sie, wie sich die Manhattan-Distanz verändert."})]})}),e.jsx(Ce,{showHeuristics:!0,title:"Heuristiken sichtbar gemacht — wie weit ist es noch?"}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Heuristik im Zustandsraum"}),e.jsxs("p",{children:["Dieselbe Zahl noch einmal — aber jetzt im Zustandsraum von vorhin. Unter jedem Knoten steht sein ",e.jsx("code",{children:"h"}),"-Wert:"," ",e.jsx("span",{style:{color:"var(--color-green)"},children:"grün"}),", wenn diese Stellung näher am Ziel ist als die aktuelle,"," ",e.jsx("span",{style:{color:"var(--color-red)"},children:"rot"}),", wenn sie weiter weg ist."]}),e.jsx("p",{children:"Es ist genau dieselbe Spielwiese wie oben: Drücken Sie links im Puzzle herum, und der Graph wächst mit. Klappen Sie zusätzlich «bis Tiefe 2» oder «bis Tiefe 3» auf — dann bilden die Zahlen eine Landschaft, die zum Ziel hin abfällt. Die informierten Algorithmen tun nichts anderes, als dieser Landschaft bergab zu folgen, statt gleichmässig in alle Richtungen zu suchen. Mit der Auswahl oben können Sie zwischen Manhattan-Distanz und falschen Plätzen wechseln — die Manhattan-Werte sind grösser und damit aussagekräftiger."}),e.jsxs("p",{children:["Mit dem Häkchen ",e.jsx("code",{children:"f = g + h"})," kommt die zweite Zahl dazu:"," ",e.jsx("code",{children:"g"})," ist die Anzahl Züge, die wir vom Start bis zu diesem Knoten schon gebraucht haben, ",e.jsx("code",{children:"h"})," die Schätzung für den Rest. Die Summe ",e.jsx("code",{children:"f"})," ist die geschätzte Länge des ganzen Weges — genau die Zahl, nach der A",e.jsx("sup",{children:"*"})," den nächsten Knoten auswählt. Greedy würde nur auf ",e.jsx("code",{children:"h"})," schauen, UCS nur auf"," ",e.jsx("code",{children:"g"}),"."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(Je,{showHeuristics:!0,title:"Spielen Sie — und beobachten Sie, wie h kleiner wird"})}),e.jsx(t,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Nächste Woche"}),e.jsxs("p",{children:["Eine solche Schätzung heisst ",e.jsx("strong",{children:"Heuristik"})," ",e.jsx("code",{children:"h(state)"}),". Damit entstehen zwei neue Algorithmen — dieselben 15 Zeilen, nur eine andere Zahl in der Prioritätswarteschlange:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Greedy Best-First:"})," nimmt den Knoten mit dem kleinsten ",e.jsx("code",{children:"h"}),". Schnell, aber nicht optimal."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["A",e.jsx("sup",{children:"*"}),":"]})," ","nimmt den Knoten mit dem kleinsten ",e.jsx("code",{children:"f = g + h"}),". Optimal, solange ",e.jsx("code",{children:"h"})," nie zu viel schätzt."]})]}),e.jsxs("p",{children:["Zum Vergleich auf der 14-Zug-Stellung: BFS expandiert rund 2'900 Knoten, A",e.jsx("sup",{children:"*"})," mit Manhattan-Distanz weniger als 100 — und findet denselben kürzesten Weg. Probieren Sie es gleich aus."]})]})}),e.jsx("div",{className:"breakout",children:e.jsx(me,{strategies:["astar","greedy","bfs","ucs","dfs","ids"],start:[0,8,2,5,7,3,1,4,6],title:"Vorgeschmack: alle sechs Algorithmen auf derselben Stellung"})}),e.jsx(Ue,{children:e.jsxs("ul",{children:[e.jsx("li",{children:"Ich kann erklären, was ein Zustand, eine Aktion und ein Zustandsraum ist — am Beispiel des Schiebepuzzles."}),e.jsxs("li",{children:["Ich kann eine Puzzle-Stellung als Datenstruktur aufschreiben und erklären, wozu ",e.jsx("code",{children:"key(state)"})," gebraucht wird."]}),e.jsx("li",{children:"Ich kann die Nachfolger einer Stellung von Hand bestimmen und den Suchbaum bis Tiefe 2 zeichnen."}),e.jsx("li",{children:"Ich kann erklären, warum Suchbaum und Zustandsraum nicht dasselbe sind und wozu die Besucht-Menge dient."}),e.jsx("li",{children:"Ich kann BFS und DFS von Hand ausführen und dabei Grenze und Besucht-Menge nachführen."}),e.jsx("li",{children:"Ich kann begründen, warum BFS den kürzesten Weg findet, DFS aber nicht — und was das für den Speicher bedeutet."}),e.jsx("li",{children:"Ich kann die iterative Tiefensuche erklären und begründen, warum sie den kürzesten Weg mit dem Speicherbedarf einer Tiefensuche findet."}),e.jsx("li",{children:"Ich kann ein eigenes Problem in JavaScript implementieren, sodass die vorhandene Suche es löst."})]})})]})}const _l=Object.freeze(Object.defineProperty({__proto__:null,default:el},Symbol.toStringTag,{value:"Module"}));function nl(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben: Graphensuche von Hand"}),e.jsxs("p",{children:["In diesem Kapitel arbeiten Sie ",e.jsx("strong",{children:"ohne Computer"})," — nur mit Stift, Papier und Ihrem Kopf. Sie lösen drei klassische Probleme von Hand und zeichnen dabei auf, was Sie dabei tun: den"," ",e.jsx("strong",{children:"Suchbaum"}),"."]}),e.jsxs("p",{children:["Das Ziel ist nicht, möglichst schnell eine Lösung zu haben. Das Ziel ist, dass Sie ",e.jsx("strong",{children:"spüren"}),", wo die Probleme liegen: wie schnell die Anzahl Möglichkeiten wächst, wie leicht man im Kreis läuft, und wie unterschiedlich zwei Lösungen für dasselbe Problem aussehen können."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Material:"})," mehrere Blätter Papier (A4 quer eignet sich gut für Suchbäume), ein Bleistift, ein Radiergummi und zwei Farbstifte für Start und Ziel. Für das Schiebepuzzle helfen acht beschriftete Zettel."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 1 — Schiebepuzzle"}),e.jsxs("p",{children:["Ein 3×3-Raster mit acht nummerierten Steinen und einem leeren Feld (",e.jsx("code",{children:"·"}),"). Ein Zug schiebt einen Stein, der neben dem leeren Feld liegt, in das leere Feld. Ziel ist immer dieselbe Stellung:"]}),e.jsx("pre",{children:e.jsx("code",{children:`1  2  3
4  5  6
7  8  ·`})}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Drei Stellungen lösen"}),e.jsxs("p",{children:["Zeichnen Sie ein 3×3-Raster auf Papier und schneiden Sie acht kleine Zettel mit den Zahlen 1–8 aus. Lösen Sie die drei Stellungen"," ",e.jsx("strong",{children:"der Reihe nach"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`Stellung A        Stellung B        Stellung C
1  3  ·           1  8  2           ·  8  2
4  2  5           ·  4  3           5  7  3
7  8  6           7  6  5           1  4  6`})}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Lösen Sie jede Stellung. Schreiben Sie jeden Zug auf, z. B."," ",e.jsx("code",{children:"3 rechts"}),", ",e.jsx("code",{children:"2 hoch"}),", … Benennen Sie den Zug immer nach dem ",e.jsx("strong",{children:"Stein"}),", der sich bewegt."]}),e.jsx("li",{children:"Stoppen Sie für jede Stellung die Zeit und zählen Sie Ihre Züge. Tragen Sie beides in die Tabelle unten ein."}),e.jsx("li",{children:"Lassen Sie eine Mitschülerin oder einen Mitschüler Ihre Zugfolge nachspielen. Kommt sie oder er am Ziel an? Wenn nicht: Wo liegt der Fehler?"})]}),e.jsx(fe,{headers:["Stellung","Anzahl Züge","benötigte Zeit","Fehlversuche / Rückzüge"],rows:[["A","…","…","…"],["B","…","…","…"],["C","…","…","…"]],caption:"Ihre eigenen Werte — diese Zahlen brauchen Sie im nächsten Kapitel wieder."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zur Kontrolle:"})," Die kürzesten Lösungen brauchen 4 (A), 9 (B) und 14 (C) Züge. Wenn Sie deutlich mehr gebraucht haben, ist das völlig normal — notieren Sie es ehrlich."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Ihre Strategie beschreiben"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Beschreiben Sie in drei bis vier Sätzen, wie Sie vorgegangen sind. Haben Sie zuerst die obere Zeile fertiggestellt? Zuerst die 1 platziert?"}),e.jsxs("li",{children:["Wenn zwei Züge möglich waren: Woran haben Sie entschieden, welchen Sie nehmen? Versuchen Sie, Ihre Entscheidung als"," ",e.jsx("strong",{children:"Regel"})," zu formulieren, die man ausrechnen könnte («nimm den Zug, bei dem …»)."]}),e.jsx("li",{children:"Haben Sie je einen Zug wieder zurückgenommen? Warum? Was hat Ihnen gesagt, dass Sie in eine Sackgasse laufen?"}),e.jsx("li",{children:"Stellung C hat Sie vermutlich am meisten Zeit gekostet. Woran lag das — am Suchen oder am Ausprobieren?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Wie gross ist das Problem?"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Legen Sie eine Schreibweise fest, mit der Sie eine Stellung in"," ",e.jsx("strong",{children:"einer Zeile"})," eindeutig aufschreiben können. Geben Sie Stellung A in Ihrer Schreibweise an."]}),e.jsxs("li",{children:["Wie viele Züge sind möglich, wenn das leere Feld in einer"," ",e.jsx("strong",{children:"Ecke"}),", am ",e.jsx("strong",{children:"Rand"})," oder in der"," ",e.jsx("strong",{children:"Mitte"})," liegt? Was ist der durchschnittliche Verzweigungsgrad ",e.jsx("code",{children:"b"}),"?"]}),e.jsxs("li",{children:["Zeichnen Sie den ",e.jsx("strong",{children:"Suchbaum"})," ab Stellung A bis Tiefe 2. Wie viele Knoten sind das? Markieren Sie alle Knoten, deren Stellung schon weiter oben im Baum vorkommt."]}),e.jsxs("li",{children:["Schätzen Sie mit ",e.jsx("code",{children:"b^d"})," ab, wie viele Knoten eine Breitensuche bis Tiefe 14 (Stellung C!) erzeugen würde."]}),e.jsx("li",{children:"Es gibt insgesamt nur 181'440 erreichbare Stellungen. Vergleichen Sie das mit Ihrer Schätzung. Warum ist die Schätzung so viel grösser? Was heisst das für einen Algorithmus, der sich merkt, wo er schon war?"})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 2 — Das Pancake-Problem"}),e.jsxs("p",{children:["Ein Stapel Pfannkuchen unterschiedlicher Grösse. Wir schreiben ihn von oben nach unten: ",e.jsx("code",{children:"[3, 1, 4, 2]"})," heisst, dass der Pfannkuchen der Grösse 3 zuoberst liegt und der Grösse 2 zuunterst."]}),e.jsxs("p",{children:["Erlaubter Zug: den Wendeheber an einer Stelle einschieben und"," ",e.jsx("strong",{children:"alles darüber umdrehen"}),". ",e.jsx("code",{children:"flip k"})," dreht die obersten ",e.jsx("code",{children:"k"})," Pfannkuchen um."]}),e.jsx("pre",{children:e.jsx("code",{children:`[3, 1, 4, 2]  --flip 3-->  [4, 1, 3, 2]
[4, 1, 3, 2]  --flip 4-->  [2, 3, 1, 4]`})}),e.jsxs("p",{children:["Ziel: der Stapel ist sortiert, der grösste zuunterst —"," ",e.jsx("code",{children:"[1, 2, 3, 4]"}),". Ein ",e.jsx("code",{children:"flip 1"})," ändert nichts, es gibt also nur die Züge ",e.jsx("code",{children:"flip 2"})," bis ",e.jsx("code",{children:"flip n"}),"."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Aufwärmen mit drei Pfannkuchen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Sortieren Sie ",e.jsx("code",{children:"[3, 1, 2]"}),". Wie viele Flips brauchen Sie?"]}),e.jsx("li",{children:"Wie viele Züge hat ein Zustand bei drei Pfannkuchen? Wie viele verschiedene Stapel gibt es insgesamt?"}),e.jsxs("li",{children:["Zeichnen Sie den ",e.jsx("strong",{children:"vollständigen Suchbaum"})," ab"," ",e.jsx("code",{children:"[3, 1, 2]"})," bis Tiefe 3. Schreiben Sie in jeden Knoten den Stapel, an jede Kante den Zug (",e.jsx("code",{children:"flip 2"})," oder"," ",e.jsx("code",{children:"flip 3"}),")."]}),e.jsx("li",{children:"Streichen Sie jeden Knoten durch, dessen Stapel im Baum schon einmal vorkommt. Wie viele Knoten bleiben übrig? Vergleichen Sie mit Ihrer Antwort aus Punkt 2."})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Vier Pfannkuchen — lösen und Suchbaum zeichnen"}),e.jsxs("p",{children:["Sortieren Sie ",e.jsx("code",{children:"[3, 1, 4, 2]"}),". Arbeiten Sie"," ",e.jsx("strong",{children:"systematisch wie eine Breitensuche"}),": Sie zeichnen den Suchbaum Ebene für Ebene auf und hören erst auf, wenn das Ziel auftaucht."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schreiben Sie ",e.jsx("code",{children:"[3, 1, 4, 2]"})," als Wurzel oben auf ein Blatt im Querformat."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ebene 1:"})," Zeichnen Sie alle Nachfolger (",e.jsx("code",{children:"flip 2"}),", ",e.jsx("code",{children:"flip 3"}),", ",e.jsx("code",{children:"flip 4"}),"). Beschriften Sie die Kanten."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ebene 2:"})," Zeichnen Sie für jeden Knoten der Ebene 1 wieder alle Nachfolger."," ",e.jsx("strong",{children:"Streichen Sie dabei jeden Stapel durch, der im Baum schon vorkommt"})," ","— an durchgestrichenen Knoten wird nicht weitergebaut."]}),e.jsxs("li",{children:["Fahren Sie so fort, bis ",e.jsx("code",{children:"[1, 2, 3, 4]"})," auftaucht. Zeichnen Sie den Weg von der Wurzel dorthin farbig nach."]}),e.jsx("li",{children:"Wie viele Flips braucht die kürzeste Lösung? Wie viele Knoten haben Sie insgesamt gezeichnet, wie viele davon durchgestrichen?"}),e.jsxs("li",{children:["Es gibt nur ",e.jsx("code",{children:"4! = 24"})," verschiedene Stapel. Wie viele Knoten hätte Ihr Baum ohne das Durchstreichen auf Ihrer letzten Ebene gehabt? Rechnen Sie es mit ",e.jsx("code",{children:"b^d"})," nach."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zur Kontrolle:"})," Die kürzeste Lösung braucht 4 Flips. Wenn Sie eine mit 5 gefunden haben, haben Sie eine Ebene zu früh aufgehört zu prüfen — suchen Sie den Fehler."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Eine Regel für Pfannkuchen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Gibt es eine Strategie, die ",e.jsx("strong",{children:"immer"})," funktioniert? Tipp: Wie bringen Sie den grössten Pfannkuchen ganz nach unten — mit wie vielen Flips?"]}),e.jsxs("li",{children:["Wie viele Flips braucht Ihre Strategie bei ",e.jsx("code",{children:"n"})," ","Pfannkuchen im schlimmsten Fall? Begründen Sie."]}),e.jsxs("li",{children:["Ist Ihre Strategie für ",e.jsx("code",{children:"[3, 1, 4, 2]"})," gleich kurz wie Ihre Lösung aus Aufgabe 5? Was ist der Unterschied zwischen «eine Lösung finden» und «die kürzeste Lösung finden»?"]})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 3 — Wolf, Ziege und Kohl"}),e.jsxs("p",{children:["Ein Bauer steht mit einem Wolf, einer Ziege und einem Kohlkopf am linken Flussufer. Das Boot trägt den Bauer und höchstens"," ",e.jsx("strong",{children:"eines"})," der drei. Lässt er Wolf und Ziege ohne Aufsicht zurück, ist die Ziege weg; lässt er Ziege und Kohl zurück, ist der Kohl weg. Alle vier sollen ans rechte Ufer."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Rätsel lösen"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Lösen Sie das Rätsel. Schreiben Sie die Lösung als nummerierte Liste von Fahrten auf."}),e.jsx("li",{children:"Wie viele Fahrten brauchen Sie? Wie lange haben Sie gebraucht, wie viele Fehlversuche gab es?"}),e.jsx("li",{children:"Welcher Zug war der «unlogische», auf den man zuerst nicht kommt? Warum fällt er so schwer?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Zustände aufschreiben und zählen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Zustand:"})," Legen Sie eine Schreibweise fest, mit der Sie jede Situation eindeutig aufschreiben können, z. B."," ",e.jsx("code",{children:"BWZK | ---"})," oder ",e.jsx("code",{children:"{B,W,K} ~ {Z}"}),". Jedes Objekt ist entweder links oder rechts — und der Bauer auch."]}),e.jsx("li",{children:"Wie viele Zustände wären theoretisch möglich, wenn es keine Regeln gäbe? Rechnen Sie es vor."}),e.jsx("li",{children:"Listen Sie alle Zustände auf und streichen Sie die verbotenen. Wie viele erlaubte bleiben übrig?"}),e.jsxs("li",{children:["Wie viele Nachfolger hat ein Zustand höchstens? Was ist der Verzweigungsgrad ",e.jsx("code",{children:"b"})," — und wie unterscheidet er sich vom Schiebepuzzle?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Suchbaum zeichnen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Zeichnen Sie den ",e.jsx("strong",{children:"Suchbaum"})," ab dem Startzustand, Ebene für Ebene, genau wie beim Pancake-Problem. Knoten = Zustand, Kante = eine Fahrt (beschriften!)."]}),e.jsx("li",{children:"Streichen Sie verbotene Zustände sofort weg — sie werden gar nicht erst zu Knoten."}),e.jsx("li",{children:"Streichen Sie Zustände durch, die im Baum schon vorkommen. Bauen Sie bis zur Ebene, in der das Ziel auftaucht."}),e.jsx("li",{children:"Markieren Sie Start und Ziel farbig und zeichnen Sie Ihre Lösung aus Aufgabe 7 als Weg ein."}),e.jsx("li",{children:"Gibt es eine zweite, gleich kurze Lösung? Suchen Sie sie in Ihrem Baum und begründen Sie Ihre Antwort."}),e.jsxs("li",{children:["Zeichnen Sie zusätzlich den ",e.jsx("strong",{children:"Zustandsgraphen"}),": alle erlaubten Zustände als Knoten, jede mögliche Fahrt als Kante — jeder Zustand kommt dabei nur ",e.jsx("strong",{children:"einmal"})," vor. Vergleichen Sie: Wie viele Knoten hat der Graph, wie viele Ihr Baum?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Der Algorithmus sind Sie"}),e.jsxs("p",{children:["Führen Sie auf Ihrem Zustandsgraphen aus Aufgabe 9 die beiden Algorithmen ",e.jsx("strong",{children:"von Hand"})," aus. Führen Sie dabei eine Tabelle mit zwei Spalten: ",e.jsx("strong",{children:"Grenze"})," und"," ",e.jsx("strong",{children:"Besucht"}),". Nach jedem Schritt eine neue Zeile."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Breitensuche:"})," Die Grenze ist eine Warteschlange — hinten anfügen, vorne herausnehmen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tiefensuche:"})," Die Grenze ist ein Stapel — hinten anfügen, hinten herausnehmen."]}),e.jsx("li",{children:"Notieren Sie für beide: die Reihenfolge der besuchten Zustände, die Anzahl untersuchter Zustände und die Länge des gefundenen Weges."}),e.jsx("li",{children:"Kontrollieren Sie Ihre Tabellen mit der Visualisierung auf der Theorieseite: Stimmen Grenze und Besucht-Menge Schritt für Schritt mit Ihren überein?"}),e.jsxs("li",{children:["Was passiert bei der Tiefensuche, wenn Sie die"," ",e.jsx("strong",{children:"Besucht"}),"-Menge weglassen? Probieren Sie es für drei, vier Schritte aus und beschreiben Sie, was schiefgeht."]})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 4 — Zurückschauen"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Die drei Probleme vergleichen"}),e.jsx(fe,{headers:["Problem","Zustände insgesamt","Verzweigungsgrad b","Länge Ihrer Lösung","schwierig war …"],rows:[["Schiebepuzzle C","181'440","…","…","…"],["Pancake [3,1,4,2]","…","…","…","…"],["Wolf, Ziege, Kohl","…","…","…","…"]],caption:"Füllen Sie die Tabelle aus Ihren Notizen der Aufgaben 1–10."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Bei welchem Problem konnten Sie den ganzen Suchbaum zeichnen, bei welchem nicht? Woran liegt das?"}),e.jsxs("li",{children:["Wo haben Sie beim Lösen ",e.jsx("em",{children:"nachgedacht"})," und wo haben Sie einfach ",e.jsx("em",{children:"ausprobiert"}),"? Schreiben Sie pro Problem einen Satz."]}),e.jsx("li",{children:"Das Durchstreichen doppelter Zustände hat Ihnen viel Arbeit gespart. Beschreiben Sie in eigenen Worten, was ein Computer dafür können muss."}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zum Nachdenken:"})," Könnten Sie eine Zahl ausrechnen, die sagt «dieser Zustand ist vermutlich näher am Ziel»? Machen Sie für jedes der drei Probleme einen Vorschlag."]})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Ihre Papierlösungen, fotografiert oder eingescannt. Lesbar sein müssen: die Zugfolgen aus Aufgabe 1, der Suchbaum aus Aufgabe 5, der Suchbaum und der Zustandsgraph aus Aufgabe 9 sowie die Schritttabellen aus Aufgabe 10."}),e.jsx("li",{children:"Ihre ausgefüllten Tabellen aus Aufgabe 1 und Aufgabe 11 — die Zahlen brauchen Sie im nächsten Kapitel für den Vergleich mit der Maschine."})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Heben Sie alle Blätter auf."})," Im Kapitel «Graphensuche mit Code» lassen Sie dieselben Probleme vom Computer lösen und vergleichen seine Lösungswege mit Ihren."]})]})]})}const Tl=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"}));function sl(){return e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:[e.jsx("h2",{children:"Aufgaben: Graphensuche mit Code"}),e.jsxs("p",{children:["Im Kapitel ",e.jsx("strong",{children:"«Graphensuche von Hand»"})," haben Sie drei Probleme auf Papier gelöst. Jetzt lassen Sie dieselben Probleme von der Maschine lösen, vergleichen ihre Lösungswege mit Ihren eigenen und bauen am Schluss zwei Suchalgorithmen selbst."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Voraussetzung:"})," Sie brauchen Ihre Blätter aus dem ersten Kapitel — besonders die Zugfolgen, die Suchbäume und die ausgefüllten Tabellen. Ohne sie ist der Vergleich wertlos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Werkzeuge:"})," Node.js, Git und ein Editor. Eine Installation von Paketen ist nicht nötig."]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 1 — Das Repository"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Klonen und zum Laufen bringen"}),e.jsx("pre",{children:e.jsx("code",{children:`git clone https://github.com/gymmu/graph-search.git
cd graph-search
node index.js wzk bfs`})}),e.jsxs("ol",{children:[e.jsx("li",{children:"Klonen Sie das Repository und führen Sie den Befehl oben aus. Sie sollten eine Lösung und eine Statistik sehen."}),e.jsxs("li",{children:["Führen Sie ",e.jsx("code",{children:"node index.js"})," ohne weitere Angaben aus. Welche Probleme und welche Algorithmen kennt das Programm?"]}),e.jsxs("li",{children:["Verschaffen Sie sich einen Überblick über die Dateien. Beantworten Sie schriftlich in je ein bis zwei Sätzen: Was steht in"," ",e.jsx("code",{children:"index.js"}),", was in ",e.jsx("code",{children:"src/problem.js"}),", was in"," ",e.jsx("code",{children:"src/search.js"}),", was in ",e.jsx("code",{children:"src/problems/"}),"?"]}),e.jsxs("li",{children:["Öffnen Sie ",e.jsx("code",{children:"src/problems/wolf-goat-cabbage.js"}),". Wie wird dort ein Zustand dargestellt? Vergleichen Sie mit der Schreibweise, die Sie im ersten Kapitel selbst erfunden haben."]}),e.jsxs("li",{children:["Wozu dient die Methode ",e.jsx("code",{children:"key(state)"}),"? Erklären Sie es mit dem Durchstreichen doppelter Knoten aus Ihrem Papier-Suchbaum."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Die Suche lesen"}),e.jsxs("p",{children:["Öffnen Sie ",e.jsx("code",{children:"src/search.js"}),". Alle Algorithmen benutzen dieselbe Funktion ",e.jsx("code",{children:"search()"}),". Sie unterscheiden sich nur darin, ",e.jsx("strong",{children:"welche Grenze"})," sie ihr mitgeben."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Suchen Sie in ",e.jsx("code",{children:"search()"})," die beiden Stellen, die der Menge ",e.jsx("strong",{children:"Besucht"})," und der Menge"," ",e.jsx("strong",{children:"Grenze"})," aus Ihrer Tabelle (Aufgabe 10, erstes Kapitel) entsprechen. Notieren Sie die Zeilennummern."]}),e.jsxs("li",{children:["Was bedeuten ",e.jsx("code",{children:"expanded"}),", ",e.jsx("code",{children:"generated"})," und"," ",e.jsx("code",{children:"maxFrontier"})," in der Statistik? Erklären Sie jede Zahl mit einem Satz."]}),e.jsxs("li",{children:["Die Klasse ",e.jsx("code",{children:"Queue"})," ist fertig implementiert. Erklären Sie, warum ",e.jsx("code",{children:"push"})," und ",e.jsx("code",{children:"pop"})," dort an"," ",e.jsx("em",{children:"verschiedenen"})," Enden arbeiten."]}),e.jsxs("li",{children:["In der Datei stehen Rümpfe für ",e.jsx("code",{children:"Stack"})," und"," ",e.jsx("code",{children:"PriorityQueue"}),", die noch nichts tun. Diese bauen Sie in Teil 3 selbst."]})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 2 — Mensch gegen Maschine"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Wolf, Ziege und Kohl"}),e.jsx("pre",{children:e.jsx("code",{children:"node index.js wzk bfs"})}),e.jsxs("ol",{children:[e.jsx("li",{children:"Schreiben Sie die Lösung des Programms Zug für Zug neben Ihre Papierlösung aus Aufgabe 7 des ersten Kapitels."}),e.jsxs("li",{children:["Sind die beiden identisch? Wenn nein: Ist die Maschinenlösung besser, schlechter oder nur ",e.jsx("em",{children:"anders"}),"? Begründen Sie."]}),e.jsxs("li",{children:["Vergleichen Sie die Zahl ",e.jsx("code",{children:"expandierte Knoten"})," mit der Anzahl Knoten in Ihrem Papier-Suchbaum. Wer hat mehr Zustände angeschaut?"]}),e.jsx("li",{children:"Suchen Sie den Weg, den BFS gefunden hat, in Ihrem Zustandsgraphen aus Aufgabe 9 und zeichnen Sie ihn in einer zweiten Farbe ein."})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Schiebepuzzle"}),e.jsxs("p",{children:["Das Programm startet standardmässig mit Stellung C aus dem ersten Kapitel. Die Startstellung steht im Konstruktor von"," ",e.jsx("code",{children:"src/problems/sliding-puzzle.js"})," — ändern Sie sie dort, um auch Stellung A und B zu lösen. Das leere Feld ist die"," ",e.jsx("code",{children:"0"}),"."]}),e.jsx("pre",{children:e.jsx("code",{children:`Stellung A  ->  [1, 3, 0, 4, 2, 5, 7, 8, 6]
Stellung B  ->  [1, 8, 2, 0, 4, 3, 7, 6, 5]
Stellung C  ->  [0, 8, 2, 5, 7, 3, 1, 4, 6]   (Standard)

node index.js puzzle bfs`})}),e.jsx(fe,{headers:["Stellung","Löser","Anzahl Züge","expandierte Knoten","grösste Grenze","Zeit"],rows:[["A","ich, auf Papier","…","—","—","…"],["A","bfs","…","…","…","…"],["B","ich, auf Papier","…","—","—","…"],["B","bfs","…","…","…","…"],["C","ich, auf Papier","…","—","—","…"],["C","bfs","…","…","…","…"]],caption:"Die Werte für «ich» stehen in Ihrer Tabelle aus Aufgabe 1 des ersten Kapitels."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Füllen Sie die Tabelle aus."}),e.jsx("li",{children:"Wer braucht weniger Züge — Sie oder BFS? Bei welcher Stellung ist der Unterschied am grössten?"}),e.jsx("li",{children:"Sie haben beim Lösen von Stellung C vermutlich deutlich weniger Stellungen angeschaut als BFS. Was können Sie, was BFS nicht kann?"}),e.jsx("li",{children:"Umgekehrt: Was kann die Maschine, was Sie nicht können? Nennen Sie mindestens zwei Punkte."}),e.jsxs("li",{children:["Vergleichen Sie ",e.jsx("code",{children:"expandierte Knoten"})," bei Stellung C mit Ihrer ",e.jsx("code",{children:"b^d"}),"-Schätzung aus Aufgabe 3 des ersten Kapitels. Um welchen Faktor lagen Sie daneben? Woher kommt der Unterschied?"]})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 3 — Das Pancake-Problem implementieren"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: pancake.js fertigstellen"}),e.jsxs("p",{children:["Öffnen Sie ",e.jsx("code",{children:"src/problems/pancake.js"}),". Die Datei enthält ein Gerüst mit zwei TODOs."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"isGoal(state)"}),": wahr, wenn der Stapel aufsteigend sortiert ist."]}),e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"successors(state)"}),": für jedes"," ",e.jsx("code",{children:"k"})," von 2 bis ",e.jsx("code",{children:"state.length"})," einen Nachfolger"," ",e.jsx("code",{children:'{ action: "flip " + k, cost: 1, state: … }'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Achtung:"})," ",e.jsx("code",{children:"successors"})," darf den übergebenen Zustand ",e.jsx("strong",{children:"nie"})," verändern. Erstellen Sie immer eine Kopie (",e.jsx("code",{children:"[...state]"}),"). Prüfen Sie Ihren Code darauf, bevor Sie weiterlesen."]}),e.jsxs("li",{children:["Testen Sie mit ",e.jsx("code",{children:"node index.js pancake bfs"}),". Der Standard ist ",e.jsx("code",{children:"[3, 1, 4, 2]"})," — genau Ihr Papier-Beispiel."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Mit dem Papier-Suchbaum vergleichen"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Stimmt die Anzahl Flips mit Ihrer Handlösung aus Aufgabe 5 des ersten Kapitels überein? Ist es ",e.jsx("em",{children:"dieselbe"})," Zugfolge?"]}),e.jsxs("li",{children:["Vergleichen Sie ",e.jsx("code",{children:"expandierte Knoten"})," mit der Anzahl Knoten, die Sie von Hand gezeichnet haben (ohne die durchgestrichenen). Wie nahe liegen die beiden Zahlen beieinander? Was sagt Ihnen das darüber, ",e.jsx("em",{children:"was"})," Sie von Hand getan haben?"]}),e.jsx("li",{children:"Zeichnen Sie die Zugfolge des Programms in Ihrem Papier-Suchbaum farbig nach. Taucht sie dort auf?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Grössere Stapel"}),e.jsxs("p",{children:["Den Startstapel ändern Sie im Konstruktor von ",e.jsx("code",{children:"Pancake"}),". Nehmen Sie jeweils eine gut durchmischte Reihenfolge, nicht die sortierte."]}),e.jsx(fe,{headers:["Länge n","Startstapel","Anzahl Flips","expandierte Knoten","erzeugte Knoten","Zeit"],rows:[["4","[3, 1, 4, 2]","…","…","…","…"],["6","…","…","…","…","…"],["8","…","…","…","…","…"],["9","…","…","…","…","…"]],caption:"Messen Sie die Zeit z. B. mit «time node index.js pancake bfs»."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Wie viele Nachfolger hat ein Zustand bei ",e.jsx("code",{children:"n"})," ","Pfannkuchen? Wie viele Zustände gibt es insgesamt?"]}),e.jsx("li",{children:"Füllen Sie die Tabelle aus. Ab welcher Länge wird es unangenehm?"}),e.jsxs("li",{children:["Zeichnen Sie die expandierten Knoten gegen ",e.jsx("code",{children:"n"})," auf. Wie wächst die Kurve — linear, quadratisch, schlimmer?"]}),e.jsx("li",{children:"Schätzen Sie ab, wie lange ein Stapel der Länge 12 dauern würde. Würden Sie es ausprobieren?"})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 4 — Zwei Algorithmen selbst bauen"}),e.jsxs("p",{children:["Bisher konnten Sie nur ",e.jsx("code",{children:"bfs"})," benutzen. Jetzt bauen Sie die beiden fehlenden Grenzen und damit zwei weitere Algorithmen. Sie müssen dafür ",e.jsx("strong",{children:"nichts"})," an ",e.jsx("code",{children:"search()"})," ändern."]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Tiefensuche implementieren"}),e.jsxs("p",{children:["Die Tiefensuche nimmt immer den ",e.jsx("strong",{children:"zuletzt"})," gefundenen Knoten aus der Grenze. Die Grenze ist also ein"," ",e.jsx("strong",{children:"Stapel"})," (LIFO) statt einer Warteschlange (FIFO)."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie in ",e.jsx("code",{children:"src/search.js"})," die Klasse"," ",e.jsx("code",{children:"Stack"})," mit ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"push(node)"})," ","und ",e.jsx("code",{children:"pop()"}),". Ein JavaScript-Array kann bereits alles, was Sie brauchen."]}),e.jsxs("li",{children:["Vergleichen Sie Ihre Klasse mit ",e.jsx("code",{children:"Queue"}),". Wie viele Zeilen sind wirklich anders? Notieren Sie es."]}),e.jsxs("li",{children:["Testen Sie mit ",e.jsx("code",{children:"node index.js wzk dfs"}),". Vergleichen Sie die Reihenfolge der besuchten Zustände mit Ihrer DFS-Schritttabelle aus Aufgabe 10 des ersten Kapitels. Stimmt sie überein? Falls nein: Liegt es an der Reihenfolge, in der"," ",e.jsx("code",{children:"successors"})," die Züge liefert?"]}),e.jsxs("li",{children:["Lassen Sie ",e.jsx("code",{children:"dfs"})," auf das Schiebepuzzle (Stellung C) los. Wie lang ist die Lösung? Die Lösung ist gültig — warum würde sie trotzdem niemand verwenden? Was bedeutet das für den Begriff «Lösung»?"]}),e.jsxs("li",{children:["Kommentieren Sie testweise die Zeile aus, die Knoten aus"," ",e.jsx("code",{children:"visited"})," überspringt, und starten Sie"," ",e.jsx("code",{children:"wzk dfs"})," erneut. Was passiert? Erklären Sie es mit dem, was Sie in Aufgabe 10 auf Papier beobachtet haben. Machen Sie die Änderung danach wieder rückgängig."]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Kostensuche implementieren"}),e.jsxs("p",{children:["Bis jetzt kostet jeder Zug gleich viel. Die uniforme Kostensuche (Uniform Cost Search, UCS) nimmt immer den Knoten mit den"," ",e.jsx("strong",{children:"kleinsten Gesamtkosten"})," ",e.jsx("code",{children:"g"})," aus der Grenze. Die Grenze ist also eine"," ",e.jsx("strong",{children:"Prioritätswarteschlange"}),"."]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Implementieren Sie die Klasse ",e.jsx("code",{children:"PriorityQueue"}),". Sie bekommt im Konstruktor eine Funktion ",e.jsx("code",{children:"priority(node)"})," ","und gibt bei ",e.jsx("code",{children:"pop()"})," den Knoten mit dem"," ",e.jsx("strong",{children:"kleinsten"})," Wert zurück."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Einfache Variante zuerst:"})," ",e.jsx("code",{children:"push"})," hängt einfach an, ",e.jsx("code",{children:"pop"})," sucht das Minimum linear und entfernt es mit ",e.jsx("code",{children:"splice"}),". Das ist langsam, aber korrekt — und darum geht es zuerst."]}),e.jsxs("li",{children:["Testen Sie mit ",e.jsx("code",{children:"node index.js wzk ucs"})," und"," ",e.jsx("code",{children:"node index.js puzzle ucs"}),". Vergleichen Sie Lösung und Statistik mit ",e.jsx("code",{children:"bfs"}),". Erklären Sie, warum beide dasselbe Ergebnis liefern."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jetzt wird es interessant:"})," Ändern Sie in"," ",e.jsx("code",{children:"pancake.js"})," die Kosten eines Zuges von ",e.jsx("code",{children:"1"})," ","auf ",e.jsx("code",{children:"k"})," — je mehr Pfannkuchen Sie wenden, desto teurer. Lassen Sie ",e.jsx("code",{children:"bfs"})," und ",e.jsx("code",{children:"ucs"})," auf demselben Stapel laufen."]}),e.jsxs("li",{children:["Finden die beiden denselben Weg? Vergleichen Sie"," ",e.jsx("code",{children:"Anzahl Züge"})," und ",e.jsx("code",{children:"Kosten"}),". Welcher Weg ist «besser» — und wer entscheidet das?"]}),e.jsx("li",{children:"Begründen Sie in zwei, drei Sätzen: Warum findet BFS bei gleichen Kosten immer den billigsten Weg, bei unterschiedlichen Kosten aber nicht mehr?"})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Die drei Algorithmen gegeneinander"}),e.jsx(fe,{headers:["Problem","Algorithmus","Anzahl Züge","Kosten","expandierte Knoten","grösste Grenze"],rows:[["WZK","bfs","…","…","…","…"],["WZK","dfs","…","…","…","…"],["WZK","ucs","…","…","…","…"],["Puzzle C","bfs","…","…","…","…"],["Puzzle C","dfs","…","…","…","…"],["Puzzle C","ucs","…","…","…","…"],["Pancake","bfs","…","…","…","…"],["Pancake","dfs","…","…","…","…"],["Pancake","ucs","…","…","…","…"]],caption:"Neun Läufe — alle Zahlen stehen in der Ausgabe des Programms."}),e.jsxs("ol",{children:[e.jsx("li",{children:"Füllen Sie die Tabelle vollständig aus."}),e.jsx("li",{children:"Welcher Algorithmus braucht am wenigsten Speicher (Spalte «grösste Grenze»)? Welcher findet die kürzesten Lösungen? Erklären Sie den Zusammenhang."}),e.jsx("li",{children:"Formulieren Sie für jeden Algorithmus einen Satz: «Nimm mich, wenn …»."})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Teil 5 — Knacknüsse"}),e.jsx("p",{children:"Für alle, die mit den Aufgaben 1–10 fertig sind."}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Wo die Suche aufgibt"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Starten Sie das Schiebepuzzle mit einer Stellung, die mindestens 20 Züge von der Lösung entfernt ist, z. B."," ",e.jsx("code",{children:"[8, 6, 7, 2, 5, 4, 3, 0, 1]"}),". Wie lange braucht BFS? Wie gross wird die Grenze?"]}),e.jsxs("li",{children:["Genau die Hälfte aller 362'880 Anordnungen ist"," ",e.jsx("strong",{children:"unlösbar"}),". Probieren Sie"," ",e.jsx("code",{children:"[2, 8, 3, 1, 6, 4, 7, 0, 5]"}),". Was macht die Suche? Wie lange dauert es, bis sie es merkt — und woran merkt sie es?"]}),e.jsxs("li",{children:["Bauen Sie in ",e.jsx("code",{children:"search.js"})," einen Zähler ein, der alle 10'000 expandierten Knoten den Fortschritt ausgibt."]}),e.jsxs("li",{children:["Ersetzen Sie in Ihrer ",e.jsx("code",{children:"PriorityQueue"})," die lineare Suche durch einen Min-Heap. Messen Sie vorher und nachher die Laufzeit von ",e.jsx("code",{children:"puzzle ucs"}),". Wie gross ist der Unterschied?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 12: Ein eigenes Problem"}),e.jsxs("p",{children:["Modellieren Sie ein ",e.jsx("strong",{children:"selbst gewähltes"})," Problem als neue Datei in ",e.jsx("code",{children:"src/problems/"})," und tragen Sie es in"," ",e.jsx("code",{children:"index.js"})," bei ",e.jsx("code",{children:"PROBLEME"})," ein. Vorschläge:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Wasserkrüge:"})," ein 5-Liter- und ein 3-Liter-Krug, genau 4 Liter abmessen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Springende Frösche:"})," drei Frösche links, drei rechts, ein freier Stein in der Mitte — die Seiten tauschen."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zahlenspiel:"})," von 1 zu 100, erlaubt sind"," ",e.jsx("code",{children:"+1"}),", ",e.jsx("code",{children:"·2"})," und ",e.jsx("code",{children:"-3"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Türme von Hanoi"})," mit drei oder vier Scheiben."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Routenplaner:"})," zehn Schweizer Städte mit echten Distanzen als Kantenkosten. Hier lohnt sich ",e.jsx("code",{children:"ucs"}),"!"]})]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Schreiben Sie ",e.jsx("em",{children:"vor"})," dem Programmieren in zwei Sätzen auf, was bei Ihnen ein Zustand ist und was eine Aktion."]}),e.jsxs("li",{children:["Implementieren Sie ",e.jsx("code",{children:"startState"}),", ",e.jsx("code",{children:"isGoal"}),","," ",e.jsx("code",{children:"successors"}),", ",e.jsx("code",{children:"key"})," und ",e.jsx("code",{children:"format"}),"."]}),e.jsxs("li",{children:["Lösen Sie es mit ",e.jsx("code",{children:"bfs"})," und prüfen Sie die Lösung von Hand nach: Ist jeder einzelne Zug erlaubt?"]}),e.jsxs("li",{children:["Wenn Ihr Problem unterschiedliche Kantenkosten hat: Vergleichen Sie ",e.jsx("code",{children:"bfs"})," und ",e.jsx("code",{children:"ucs"}),". Finden sie denselben Weg? Warum (nicht)?"]})]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 13: Zum Nachdenken für nächste Woche"}),e.jsx("p",{children:"Alle drei Algorithmen suchen blind — keiner weiss, ob ein Zustand dem Ziel näher ist als ein anderer. Sie selbst wussten das beim Lösen von Hand sehr wohl."}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Nehmen Sie Ihre Antwort aus Aufgabe 11 des ersten Kapitels hervor. Wie liesse sich Ihre Idee als Funktion ",e.jsx("code",{children:"h(state)"})," ","schreiben?"]}),e.jsxs("li",{children:["Schauen Sie sich ",e.jsx("code",{children:"src/heuristics.js"})," an. Welche Ihrer Ideen kommt den Funktionen dort am nächsten?"]}),e.jsx("li",{children:"Bringen Sie Ihren Vorschlag in die nächste Lektion mit."})]})]})]}),e.jsxs(j,{children:[e.jsx("h2",{children:"Abgabe"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ihr Fork bzw. Ihre Kopie des Repos mit der fertigen"," ",e.jsx("code",{children:"pancake.js"})," sowie ",e.jsx("code",{children:"Stack"})," und"," ",e.jsx("code",{children:"PriorityQueue"})," in ",e.jsx("code",{children:"search.js"}),"."]}),e.jsxs("li",{children:["Eine Datei ",e.jsx("code",{children:"antworten.md"})," im Repo mit den schriftlichen Antworten und den ausgefüllten Tabellen der Aufgaben 1–10."]}),e.jsxs("li",{children:["Falls Sie Aufgabe 12 gemacht haben: Ihr eigenes Problem in"," ",e.jsx("code",{children:"src/problems/"}),", eingetragen in ",e.jsx("code",{children:"index.js"}),"."]})]}),e.jsx("p",{children:"Die Aufgaben 1–7 sollten Sie in der ersten Lektion schaffen, 8–10 in der zweiten. Teil 4 ist der Kern dieses Kapitels — nehmen Sie sich dafür Zeit."})]})]})}const Kl=Object.freeze(Object.defineProperty({__proto__:null,default:sl},Symbol.toStringTag,{value:"Module"}));export{gn as A,Wl as B,Fl as C,Ol as D,Pl as E,Zl as F,Ml as G,_l as H,Tl as I,Kl as J,mn as N,bn as a,dl as b,al as c,hl as d,ol as e,ul as f,jl as g,xl as h,gl as i,cl as j,ml as k,bl as l,fl as m,pl as n,kl as o,Sl as p,zl as q,wl as r,vl as s,Al as t,tl as u,yl as v,Nl as w,El as x,Dl as y,Bl as z};
