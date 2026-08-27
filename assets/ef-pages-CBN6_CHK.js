import{r as p,j as e}from"./react-vendor-7TcISLYx.js";import{J as q,S as l,L as Q,c as s,d as v}from"./gym-pages-B-wyVlBl.js";const L=p.createContext({});function $n(){return p.useContext(L)}function X({children:r}){const[n,c]=p.useState(!1),[t,d]=p.useState(!1);return e.jsx(L.Provider,{value:{fullscreen:n,setFullscreen:c,menuVisible:t,setMenuVisible:d},children:r})}const Y="gym-inf-visit-store",E="visits",ee=1,F="gym-inf-last-visit",Z="gym-inf-section";function M(){return new Promise((r,n)=>{if(!("indexedDB"in window)){n(new Error("IndexedDB not supported"));return}const c=indexedDB.open(Y,ee);c.onupgradeneeded=()=>{const t=c.result;t.objectStoreNames.contains(E)||t.createObjectStore(E)},c.onsuccess=()=>r(c.result),c.onerror=()=>n(c.error)})}function I(r){return M().then(n=>new Promise((c,t)=>{const m=n.transaction(E,"readonly").objectStore(E).get(r);m.onsuccess=()=>c(m.result),m.onerror=()=>t(m.error)}))}function K(r,n){return M().then(c=>new Promise((t,d)=>{const a=c.transaction(E,"readwrite");a.objectStore(E).put(n,r),a.oncomplete=()=>t(),a.onerror=()=>d(a.error)}))}function ne(r){return M().then(n=>new Promise((c,t)=>{const d=n.transaction(E,"readwrite");d.objectStore(E).delete(r),d.oncomplete=()=>c(),d.onerror=()=>t(d.error)}))}function J(r){try{const n=localStorage.getItem(r);return n?JSON.parse(n):null}catch{return null}}function H(r,n){try{return localStorage.setItem(r,JSON.stringify(n)),!0}catch{return!1}}function ie(r){try{localStorage.removeItem(r)}catch{}}async function Un(r){if(!H(F,{path:r,timestamp:Date.now()}))try{await K("lastVisit",{path:r,timestamp:Date.now()})}catch{}}async function qn(){let r=J(F);if(r)return r.path;try{if(r=await I("lastVisit"),r)return r.path}catch{}return null}async function Qn(){ie(F);try{await ne("lastVisit")}catch{}}async function se(r){if(!H(Z,r))try{await K("section",r)}catch{}}async function re(){let r=J(Z);if(r!==null)return r;try{if(r=await I("section"),r!==null)return r}catch{}return null}const le=p.createContext({});function te({children:r}){const[n,c]=p.useState(!1),[t,d]=p.useState("gym");return p.useEffect(()=>{re().then(a=>{a!==null&&d(a)})},[]),p.useEffect(()=>{se(t)},[t]),e.jsx(le.Provider,{value:{visible:n,setVisible:c,section:t,setSection:d},children:r})}function ce({filename:r,initialCode:n,defaultCode:c}){return e.jsx(q,{filename:r,initialCode:n,defaultCode:c,monacoHeight:"calc(100vh - 300px)",wrapperHeight:"100vh",isFullscreen:!0})}function de(){return e.jsx(X,{children:e.jsx(te,{children:e.jsx(ce,{filename:"editor.js",defaultCode:`// Deine JavaScript-Datei
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
console.log(a + " * " + b + " = " + (a * b));`})})})}const Xn=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));function oe(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Willkommen zu Programmieren mit JavaScript"}),e.jsx("p",{children:"In diesem Kurs lernst du die Grundlagen der Programmierung mit JavaScript. JavaScript ist eine der beliebtesten Programmiersprachen der Welt und wird verwendet, um interaktive Webseiten zu erstellen, Server zu programmieren, Spiele zu entwickeln und vieles mehr."}),e.jsx("p",{children:"Du wirst Schritt für Schritt die wichtigsten Konzepte der Programmierung kennenlernen – von Variablen über Bedingungen bis hin zu Funktionen und Objekten."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Was ist JavaScript?"}),e.jsxs("p",{children:["JavaScript ist eine ",e.jsx("strong",{children:"Allzweck-Programmiersprache"})," ","(general-purpose programming language). Das bedeutet, dass man damit praktisch alles programmieren kann – von einfachen Berechnungen bis hin zu komplexen Anwendungen. JavaScript wurde 1995 von Brendan Eich in nur 10 Tagen entwickelt und hat sich seitdem zur meistverbreiteten Programmiersprache der Welt entwickelt."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Warum JavaScript?"}),e.jsx("p",{children:"Es gibt viele Programmiersprachen – doch JavaScript hat einige besondere Vorteile:"}),e.jsx("h3",{children:"1. Das Web basiert auf JavaScript"}),e.jsxs("p",{children:["Jede moderne Webseite verwendet JavaScript. Ohne JavaScript wären Webseiten statisch – sie könnten keine Interaktionen verarbeiten, keine Daten nachladen und keine dynamischen Inhalte anzeigen. JavaScript ist die ",e.jsx("em",{children:"einzige"})," Sprache, die direkt im Browser läuft und somit jedes Internetprogramm steuern kann."]}),e.jsx("h3",{children:"2. Browser-Automatisierung"}),e.jsx("p",{children:"Mit JavaScript kann man den Browser automatisieren – zum Beispiel kann man Programme schreiben, die automatisch Webseiten öffnen, Formulare ausfüllen oder Daten von Webseiten sammeln. Das ist nützlich für repetitive Aufgaben oder zum Testen von Webseiten."}),e.jsx("h3",{children:"3. Full-Stack: Frontend und Backend"}),e.jsxs("p",{children:["JavaScript läuft nicht nur im Browser (Frontend), sondern auch auf Servern (Backend). Mit ",e.jsx("strong",{children:"Node.js"})," kann man JavaScript als serverseitige Sprache verwenden. Das bedeutet, du kannst mit derselben Sprache sowohl die Benutzeroberfläche als auch die Server-Logik programmieren."]}),e.jsx("h3",{children:"4. KI-Interaktion"}),e.jsx("p",{children:"JavaScript wird häufig verwendet, um mit KI-Systemen zu interagieren. Man kann damit APIs von KI-Diensten aufrufen, Chatbots bauen, oder sogar lokale KI-Modelle im Browser ausführen. Das macht JavaScript zu einer idealen Sprache für KI-Projekte."}),e.jsx("h3",{children:"5. Unterschiedliche Programmierparadigmen"}),e.jsx("p",{children:"JavaScript unterstützt verschiedene Programmierstile (Paradigmen):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Prozedural:"})," Schritt-für-Schritt-Anweisungen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekt-orientiert:"})," Programme als Sammlung von Objekten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktional:"})," Programme als Kombination von Funktionen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ereignisgesteuert:"})," Programme reagieren auf Ereignisse (Klicks, Eingaben, etc.)"]})]})]})]})}const Yn=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));function he(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"JavaScript-Einstieg: Ein kurzer Überblick"}),e.jsxs("p",{children:["In diesem Kapitel siehst du eine ",e.jsx("strong",{children:"schnelle Übersicht"}),"über die wichtigsten JavaScript-Konzepte. Du wirst viele verschiedene Code-Beispiele anschauen, ausführen und kleine Änderungen ausprobieren."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es geht jetzt nicht darum, jede Syntax im Detail zu verstehen – das lernen wir in den folgenden Kapiteln. Schau dir die Beispiele an, führe sie aus und überlege, was du beobachten kannst. Was passiert, wenn du den Code änderst?"]})]}),e.jsx(l,{children:e.jsx(Q,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Code mit ",e.jsx("code",{children:"console.log()"})," ausgeben und verstehen"]}),e.jsxs("li",{children:["Variablen mit ",e.jsx("code",{children:"const"})," und ",e.jsx("code",{children:"let"})," verwenden"]}),e.jsx("li",{children:"Einfache Berechnungen mit Operatoren durchführen"}),e.jsxs("li",{children:["Bedingungen mit ",e.jsx("code",{children:"if/else"})," erkennen"]}),e.jsx("li",{children:"Schleifen zum Wiederholen von Code verstehen"}),e.jsx("li",{children:"Arrays als Listen von Werten verwenden"}),e.jsx("li",{children:"Funktionen als wiederverwendbare Code-Blöcke kennenlernen"})]})})}),e.jsxs(l,{children:[e.jsx("h2",{children:"Code direkt ausprobieren"}),e.jsxs("p",{children:["Unten kannst du JavaScript-Code schreiben und direkt ausführen. Klicke auf ",e.jsx("strong",{children:"«Ausführen»"}),", um das Programm zu starten. Die Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig verändern und erneut ausführen!"]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 1: Ausgabe in der Konsole"}),e.jsxs("p",{children:["Der einfachste Einstieg ist ",e.jsx("code",{children:"console.log()"}),". Dieser Befehl gibt Text in der Konsole aus. Probiere aus, wie der Text sich verändert, wenn du die Wörter im Code änderst!"]}),e.jsx(s,{filename:"ausgabe.js",children:`// Text in der Konsole ausgeben
console.log("Hallo zusammen!");
console.log("Willkommen zu JavaScript!");

// Mit + kannst du Texte verbinden
const name = "Lena";
console.log("Hallo " + name + "!");

// Du kannst auch Zahlen ausgeben
console.log("Das Jahr ist 2025.");
console.log(2025);`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 2: Variablen – Werte speichern"}),e.jsxs("p",{children:["Variablen sind wie Behälter, die Werte speichern. Mit"," ",e.jsx("code",{children:"const"})," definieren wir eine Variable, die nicht verändert werden kann. Mit ",e.jsx("code",{children:"let"})," können wir den Wert später ändern. Probiere aus, was passiert, wenn du Zahlen oder Texte änderst!"]}),e.jsx(s,{filename:"variablen.js",children:`// const: Wert kann NICHT geändert werden
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
// schulname = "Andere Schule"; // Fehler!`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 3: Berechnungen"}),e.jsx("p",{children:"Mit JavaScript kannst du einfache und komplexe Berechnungen durchführen. Probiere verschiedene Operatoren aus!"}),e.jsx(s,{filename:"berechnungen.js",children:`// Grundrechenarten
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
console.log("Neuer Preis: " + neupreis + " CHF");`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 4: Bedingungen – Programme steuern"}),e.jsxs("p",{children:["Mit ",e.jsx("code",{children:"if"})," und ",e.jsx("code",{children:"else"})," kannst du Programme unterschiedlich reagieren lassen, je nach Bedingung. Ändere die Werte und überlege, welcher Teil ausgeführt wird!"]}),e.jsx(s,{filename:"bedingungen.js",children:`// Alter prüfen
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
}`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 5: Arrays – Listen von Werten"}),e.jsx("p",{children:"Arrays sind Listen von Werten. Sie ermöglichen es, mehrere Werte in einer Variable zu speichern. Ändere die Einträge und probiere aus!"}),e.jsx(s,{filename:"arrays.js",children:`// Ein Array erstellen
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
console.log(lieblingsessen);`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 6: Funktionen – Code wiederverwenden"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Code-Blöcke. Sie helfen, Code zu organisieren und Duplikate zu vermeiden. Probiere andere Namen und Zahlen aus!"}),e.jsx(s,{filename:"funktionen.js",children:`// Funktion definieren
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
console.log("100 * 2 = " + verdoppeln(100));`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Beispiel 7: Schleifen – Code wiederholen"}),e.jsxs("p",{children:["Schleifen wiederholen Code mehrere Male. Die ",e.jsx("code",{children:"for"}),"-Schleife ist die häufigste Form. Probiere andere Zahlen für die Grenzen aus!"]}),e.jsx(s,{filename:"schleifen.js",children:`// Einfache Schleife: Zahlen ausgeben
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
console.log("  Start! 🚀");`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Weiter geht's mit den Grundlagen"}),e.jsx("p",{children:"In den folgenden Kapiteln wirst du die einzelnen Konzepte detailliert kennenlernen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variablen:"})," Datentypen, Zuweisungen, const vs. let"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingungen:"})," if/else, Vergleichsoperatoren, logische Operatoren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Listen:"})," Arrays, Methoden, Durchlaufen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schleifen:"})," for, while, for...of"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," Definition, Parameter, Rückgabewerte"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekte:"})," Eigenschaften, Methoden, this"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionales Programmieren:"})," Map, Filter, Reduce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Klassen:"})," Vererbung, OOP-Prinzipien"]})]})]})]})}const ei=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));function ae(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Arbeitsauftrag: Grundinstallation"}),e.jsx("p",{children:"Bevor wir mit dem Programmieren beginnen, musst du deine Entwicklungsumgebung einrichten. Am Ende dieser Installation musst du folgende Punkte erledigt haben:"}),e.jsx("h3",{children:"Was am Ende installiert sein muss:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ein Editor zum Bearbeiten von JavaScript-Code"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Empfehlung: Visual Studio Code (VSCode)"}),e.jsx("li",{children:"Alternativen: Zed, VSCodium, Neovim, Sublime Text, WebStorm"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Eine Umgebung zum Ausführen von JavaScript"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Empfehlung: Node.js"}),e.jsx("li",{children:"Alternativen: Deno, Bun"}),e.jsx("li",{children:"Oder: JavaScript im Browser (Developer Tools)"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Git als Versionierungswerkzeug"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Git muss auf deinem Computer installiert und konfiguriert sein"}),e.jsx("li",{children:"Dein Name und E-Mail müssen als Git-Identität gesetzt sein"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ein GitHub-Account mit einem Repository für JavaScript-Aufgaben"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstelle ein ",e.jsx("strong",{children:"privates Repository"})," auf GitHub"]}),e.jsx("li",{children:"Dieses Repository dient als Ablage für alle deine JavaScript-Aufgaben"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lehrperson als Collaborator hinzugefügt"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["GitHub-Alias der Lehrperson: ",e.jsx("strong",{children:"cedricgeissmann"})]}),e.jsx("li",{children:"Füge diese Person als Collaborator in deinem Repository hinzu"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Erledige alle fünf Punkte bevor du mit den ersten Programmieraufgaben beginnst. Ohne diese Grundinstallation kannst du deine Aufgaben nicht korrekt abgeben."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"JavaScript ausführen"}),e.jsx("p",{children:"JavaScript-Code kann auf verschiedene Arten ausgeführt werden:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Im Browser:"})," Öffne die Developer Tools (F12) und gehe zum Tab «Console»"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Im Terminal:"})," Speichere den Code in einer"," ",e.jsx("code",{children:".js"}),"-Datei und führe ihn mit Node.js aus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Online:"})," Verwende den JSTerminal hier auf dieser Seite oder Online-Editoren wie"," ",e.jsx("a",{href:"https://codepen.io",target:"_blank",rel:"noopener noreferrer",children:"CodePen"})," ","oder"," ",e.jsx("a",{href:"https://jsfiddle.net",target:"_blank",rel:"noopener noreferrer",children:"JSFiddle"})]})]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Arbeitsauftrag: Deine Entwicklungsumgebung einrichten"}),e.jsx("h3",{children:"1. Code direkt ausprobieren — JSTerminal"}),e.jsxs("p",{children:["Am einfachsten kannst du JavaScript direkt hier im folgenden Terminal ausprobieren. Schreibe Code in den Editor und klicke auf"," ",e.jsx("strong",{children:"«▶ Ausführen»"}),", um das Programm zu starten. Die Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig verändern und erneut ausführen!"]}),e.jsx("h3",{children:"2. Lokale Entwicklungsumgebung"}),e.jsxs("p",{children:["Für das Programmieren auf deinem eigenen Computer brauchst du ein Werkzeug, das JavaScript-Code ausführen kann. Du darfst selbst entscheiden, welches Werkzeug du verwendest — hier bist du frei! Wichtig ist nur, dass du JavaScript im Browser ",e.jsx("em",{children:"und"})," lokal ausführen kannst."]}),e.jsx("p",{children:e.jsx("strong",{children:"Empfohlene Laufzeit-Umgebungen:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer",children:"Node.js"})," ","(empfohlen für Einsteiger)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://deno.com",target:"_blank",rel:"noopener noreferrer",children:"Deno"})," ","(moderne Alternative zu Node.js)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://bun.sh",target:"_blank",rel:"noopener noreferrer",children:"Bun"})," ","(schnelle JavaScript-Engine)"]})]}),e.jsxs("p",{children:["Alle drei ermöglichen es dir, ",e.jsx("code",{children:".js"}),"-Dateien lokal über das Terminal auszuführen. Node.js ist am weitesten verbreitet und wird in der Industrie am häufigsten verwendet — es ist daher die empfehlenswertes Wahl für den Einstieg."]}),e.jsx("h3",{children:"3. Empfohlene Editoren"}),e.jsx("p",{children:"Ein guter Code-Editor macht das Programmieren viel einfacher. Hier sind einige empfehlenswerte Editoren:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer",children:"Visual Studio Code (VSCode)"})," ","(am weitesten verbreitet, kostenlos, viele Erweiterungen)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://zed.dev",target:"_blank",rel:"noopener noreferrer",children:"Zed"})," ","(schneller, moderner Editor)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://vscodium.com",target:"_blank",rel:"noopener noreferrer",children:"VSCodium"})," ","(kostenlose, open-source Version von VSCode)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://neovim.io",target:"_blank",rel:"noopener noreferrer",children:"Neovim"})," ","(für Fortgeschrittene, terminalbasiert)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.sublimetext.com",target:"_blank",rel:"noopener noreferrer",children:"Sublime Text"})," ","(leichtgewichtig und schnell)"]}),e.jsxs("li",{children:[e.jsx("a",{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer",children:"WebStorm"})," ","(IDE von JetBrains, kostenpflichtig, kostenlose Testversion)"]})]}),e.jsx("p",{children:"Alle genannten Editoren sind kostenlos oder haben eine kostenlose Version. Du kannst selbst ausprobieren, welcher dir am besten liegt."}),e.jsx("h3",{children:"4. Wichtige Regel: Lernen durch eigenes Coden"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Coding-Agents (wie ChatGPT, Claude, Cursor-Agent, etc.) sollen während dem Lernprozess nicht verwendet werden, um Code zu generieren."})," ","Du lernst Programmieren nur, wenn du selbst direkt mit dem Code arbeitest und ihn verstehst."]}),e.jsx("p",{children:e.jsx("strong",{children:"Was du verwenden darfst:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"Kurze, einfache Code-Snippets (auch generiert) — jedoch nicht einfach kopieren, vor allem am Anfang nicht!"}),e.jsx("li",{children:"Erklärungen zum Code — du darfst dir von Coding-Agents erklären lassen, was ein Code-Snippet macht"}),e.jsxs("li",{children:["Dokumentation und Tutorials — z.B. die offizielle"," ",e.jsx("a",{href:"https://developer.mozilla.org/de/docs/Web/JavaScript",target:"_blank",rel:"noopener noreferrer",children:"MDN JavaScript Dokumentation"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Wenn du den Code nicht selbst schreiben und erklären kannst, hast du nichts gelernt. Der Weg zum Ziel ist das Programmieren selbst — nicht das Resultat."]}),e.jsx("h3",{children:"5. Versionierung mit Git und GitHub"}),e.jsxs("p",{children:["Bei der Arbeit mit Code braucht es immer Versionierungstools. Hier verwenden wir ",e.jsx("strong",{children:"Git"})," in Kombination mit"," ",e.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Was du tun musst:"})}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstelle ein ",e.jsx("strong",{children:"privates Repository"})," auf GitHub"]}),e.jsxs("li",{children:["Füge mich als Collaborator hinzu — mein GitHub-Alias ist"," ",e.jsx("strong",{children:"cedricgeissmann"})]}),e.jsx("li",{children:"Speichere deine Programme in diesem Repository"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Organisation:"})," Die Struktur deines Repositories ist dir selbst überlassen — es gibt keine Vorgaben. Du kannst dich dazu einlesen, was sinnvoll ist. Eine mögliche Struktur:"]}),e.jsx("pre",{children:e.jsx("code",{children:`my-javascript-work/
├── 01-variablen/
│   └── hello.js
├── 02-bedingungen/
│   └── alter-check.js
├── 03-schleifen/
│   └── zaehlen.js
└── README.md`})}),e.jsxs("p",{children:[e.jsx("strong",{children:"Entscheidung: Browser vs. Terminal"})," — Du kannst selbst entscheiden, ob du deinen Code lieber über JavaScript im Browser ausführst oder lokal mit Node.js über das Terminal. Beide Wege haben ihre Vorteile und sind wichtige Fertigkeiten."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Dein erstes Programm"}),e.jsxs("p",{children:["Der einfachste Weg, JavaScript zu starten, ist die"," ",e.jsx("code",{children:"console.log"}),"-Funktion:"]}),e.jsx(s,{filename:"hello.js",children:`// Das ist ein Kommentar - er wird nicht ausgeführt

// Ausgabe in der Konsole
console.log("Hallo Welt!");
console.log("Ich lerne JavaScript!");
console.log("Programmieren macht Spass!");`})]})]})}const ni=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));function ue(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Arbeitsauftrag 01: JavaScript-Einsteigeraufgaben"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie 20 kleine Programmieraufgaben. Sie decken die vier zentralen Themen ab: ",e.jsx("strong",{children:"Variablen"}),","," ",e.jsx("strong",{children:"Bedingungen"}),", ",e.jsx("strong",{children:"Listen"})," und"," ",e.jsx("strong",{children:"Schleifen"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen oder Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte durch eigenes Ausprobieren zu verstehen."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Abgabe über GitHub"}),e.jsx("p",{children:"Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie diesen Schritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstellen Sie in Ihrem Repository einen Ordner"," ",e.jsx("code",{children:"aufgaben-01"})]}),e.jsxs("li",{children:["Speichern Sie jede Aufgabe als eigene ",e.jsx("code",{children:".js"}),"-Datei (z.B."," ",e.jsx("code",{children:"01-variablen-interview.js"}),")"]}),e.jsx("li",{children:"Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht"}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"letzte Commit"})," muss die Nachricht"," ",e.jsx("code",{children:"Arbeitsauftrag 01 bearbeitet"})," enthalten"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Beispiel:"})}),e.jsx("pre",{children:e.jsx("code",{children:`git add .
git commit -m "Arbeitsauftrag 01 bearbeitet"`})})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Interview-Programm
// Was ich gemacht habe: Variablen für Name, Alter und Beruf erstellt
// Was ich gelernt habe: const kann nicht geändert werden, let schon
// Schwierigkeit: leicht`})}),e.jsxs("p",{children:["Sie können auch eine ",e.jsx("code",{children:"README.md"})," im Ordner"," ",e.jsx("code",{children:"aufgaben-01"})," erstellen, wo Sie alle Aufgaben auflisten."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsx("h3",{children:"Teil 1: Variablen (Aufgabe 1–5)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Persönliches Interview"}),e.jsxs("p",{children:["Erstellen Sie ein Programm, das eine Person vorstellt. Definieren Sie Variablen für Name, Alter, Wohnort und Lieblingsfach. Geben Sie alle Informationen mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Umrechnungstool"}),e.jsx("p",{children:"Schreiben Sie ein Programm, das einen Betrag in CHF in EUR umrechnet (verwenden Sie einen fiktiven Wechselkurs, z.B. 1 CHF = 0.95 EUR). Definieren Sie den Betrag und den Kurs als Variablen."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Flächberechnung"}),e.jsx("p",{children:"Berechnen Sie die Fläche und den Umfang eines Rechtecks. Definieren Sie Länge und Breite als Variablen und geben Sie die Resultate aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Geschwindigkeit berechnen"}),e.jsx("p",{children:"Berechnen Sie die Durchschnittsgeschwindigkeit: Eine Person läuft 42 km in 3 Stunden und 15 Minuten. Definieren Sie die Strecke und die Zeit als Variablen und berechnen Sie die Geschwindigkeit in km/h."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Persönliches Profil"}),e.jsxs("p",{children:["Definieren Sie mehrere Variablen für ein fiktives Profil: Name, Alter, Hobby und Lieblingsessen. Geben Sie alle Informationen in einer zusammenhängenden Vorstellung mit ",e.jsx("code",{children:"console.log"})," ","aus. Nutzen Sie mindestens vier Variablen."]})]}),e.jsx("h3",{children:"Teil 2: Bedingungen (Aufgabe 6–10)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Altersprüfung"}),e.jsx("p",{children:"Prüfen Sie, ob eine Person volljährig ist (≥ 18 Jahre). Geben Sie eine passende Meldung aus. Testen Sie das Programm mit verschiedenen Alterswerten."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Notensystem"}),e.jsxs("p",{children:["Definieren Sie eine Note (1–6) als Variable und geben Sie mit"," ",e.jsx("code",{children:"if / else if / else"}),' eine Textbeschreibung aus (z.B. 6 = "Sehr gut", 5 = "Gut" usw.).']})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Parität prüfen"}),e.jsxs("p",{children:["Prüfen Sie, ob eine Zahl gerade oder ungerade ist. Verwenden Sie den Modulo-Operator (",e.jsx("code",{children:"%"}),")."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Jahreszeit bestimmen"}),e.jsx("p",{children:"Definieren Sie eine Variable für den Monat (1–12) und geben Sie die passende Jahreszeit aus (Frühling: 3–5, Sommer: 6–8, Herbst: 9–11, Winter: 12, 1–2)."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Login-System"}),e.jsx("p",{children:"Prüfen Sie, ob ein Benutzername und ein Passwort korrekt sind. Definieren Sie den erwarteten Benutzernamen und das Passwort als Variablen und vergleichen Sie sie mit den Benutzereingaben (ebenfalls Variablen). Geben Sie eine passende Meldung aus."})]}),e.jsx("h3",{children:"Teil 3: Listen / Arrays (Aufgabe 11–15)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 11: Einkaufsliste"}),e.jsx("p",{children:"Erstellen Sie ein Array mit mindestens 5 Einkaufsartikeln. Geben Sie jeden Artikel mit einer Nummer aus (1. Milch, 2. Brot usw.). Fügen Sie noch einen Artikel hinzu und löschen Sie den letzten."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 12: Durchschnitt berechnen"}),e.jsx("p",{children:"Definieren Sie ein Array mit mindestens 5 Noten. Berechnen Sie den Durchschnittswert und geben Sie ihn aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 13: Grösstes Element finden"}),e.jsx("p",{children:"Definieren Sie ein Array mit Temperaturwerten. Finden Sie die höchste und die tiefste Temperatur und geben Sie beide aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 14: Array umdrehen"}),e.jsx("p",{children:"Erstellen Sie ein Array mit den Wochentagen. Kehren Sie die Reihenfolge um (von Sonntag bis Montag statt Montag bis Sonntag) und geben Sie das neue Array aus."})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 15: Filtern"}),e.jsx("p",{children:"Definieren Sie ein Array mit Zahlen. Erstellen Sie ein neues Array, das nur die geraden Zahlen enthält, und geben Sie es aus."})]}),e.jsx("h3",{children:"Teil 4: Schleifen (Aufgabe 16–20)"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 16: Multiplikationstabelle"}),e.jsxs("p",{children:["Schreiben Sie eine ",e.jsx("code",{children:"for"}),"-Schleife, die das kleine Einmaleins von 1 bis 10 ausgibt."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 17: Summe berechnen"}),e.jsxs("p",{children:["Berechnen Sie die Summe aller Zahlen von 1 bis 100 mit einer"," ",e.jsx("code",{children:"for"}),"-Schleife. Geben Sie das Resultat aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 18: Fakultät"}),e.jsxs("p",{children:["Berechnen Sie die Fakultät einer Zahl (z.B. 5! = 5 × 4 × 3 × 2 × 1) mit einer ",e.jsx("code",{children:"for"}),"-Schleife."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 19: Array mit Schleife durchlaufen"}),e.jsxs("p",{children:["Erstellen Sie ein Array mit Ihren Lieblingsfilmen. Durchlaufen Sie es mit einer ",e.jsx("code",{children:"for...of"}),"-Schleife und geben Sie jeden Film mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 20: Palindrom-Prüfer"}),e.jsxs("p",{children:["Erstellen Sie ein Skript, das prüft, ob ein über"," ",e.jsx("code",{children:"process.argv"}),'(Index 2) übergebenes Wort ein Palindrom ist. Ein Palindrom liest sich vorwärts und rückwärts gleich (z.B. "anna", "otto", "abba").']}),e.jsx("p",{children:e.jsx("strong",{children:"Aufgaben:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Lesen Sie das Wort aus ",e.jsx("code",{children:"process.argv[2]"})," aus"]}),e.jsxs("li",{children:["Erzeugen Sie die umgekehrte Version des Wortes (z.B. mit"," ",e.jsx("code",{children:"split('')"}),", ",e.jsx("code",{children:"reverse()"}),","," ",e.jsx("code",{children:"join('')"}),")"]}),e.jsx("li",{children:"Vergleichen Sie beide Versionen"}),e.jsxs("li",{children:["Geben Sie ",e.jsx("code",{children:'"<Wort> ist ein Palindrom"'})," oder"," ",e.jsx("code",{children:'"<Wort> ist kein Palindrom"'})," aus"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Testen Sie im Terminal:"})}),e.jsxs("p",{children:[e.jsx("code",{children:"node palindrom.js Anna"})," →"," ",e.jsx("code",{children:"Anna ist ein Palindrom"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"node palindrom.js Hallo"})," →"," ",e.jsx("code",{children:"Hallo ist kein Palindrom"})]})]})]})]})}const ii=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));function je(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Was sind Variablen?"}),e.jsx("p",{children:'Variablen sind wie Behälter oder Boxen, in denen du Werte speichern kannst. Stell dir vor, du hast mehrere Schubladen in einem Schrank. Jede Schublade hat einen Namen (z.B. "Schulhefte", "Bücher") und enthält etwas (die Werte). In der Programmierung funktioniert das ähnlich: Eine Variable hat einen Namen und speichert einen Wert.'}),e.jsx("p",{children:"Warum braucht man Variablen? Stell dir vor, du möchtest den Preis eines Produkts berechnen. Du musst den Grundpreis, den Steuernsatz und den Rabatt speichern und damit rechnen. Ohne Variablen müsstest du jede Zahl immer wieder tippen. Mit Variablen speicherst du die Werte einmal und kannst sie später beliebig oft verwenden."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Variablen deklarieren"}),e.jsx("p",{children:"In JavaScript kannst du Variablen auf drei Arten erstellen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"let"}),": Eine Variable, deren Wert später geändert werden kann (wie eine beschreibbare Schublade)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"}),": Eine Konstante, deren Wert nie geändert werden darf (wie eine verschlossene Schublade)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"var"}),": Die veraltete Methode aus alten JavaScript-Versionen"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Empfehlung:"})," Verwende immer zuerst ",e.jsx("code",{children:"const"}),". Nur wenn du den Wert später wirklich ändern musst, verwende"," ",e.jsx("code",{children:"let"}),". So verhinderst du unbeabsichtigte Fehler."]}),e.jsx(s,{filename:"variablen.js",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Benennungsregeln für Variablen"}),e.jsx("p",{children:"Variablennamen müssen bestimmte Regeln befolgen:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Dürfen nur Buchstaben, Zahlen, $ und _ enthalten"}),e.jsx("li",{children:"Dürfen nicht mit einer Zahl beginnen"}),e.jsx("li",{children:"Sind gross-/kleinschreibungsabhängig (alter ≠ Alter)"}),e.jsx("li",{children:"Dürfen keine reservierten Wörter sein (wie let, const, if, ...)"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gute Namenskonvention:"})," Verwende camelCase und mache den Namen beschreibend:"]}),e.jsx(s,{filename:"benennung.js",children:`
// Schlechte Namen
let a = 10;
let x = "Anna";

// Gute Namen
let schuelerAlter = 15;
let schuelerName = "Anna";
let preisInFranken = 25.50;
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Datentypen in JavaScript"}),e.jsx("p",{children:'Jeder Wert in JavaScript hat einen bestimmten Typ (eine "Klasse"). Die wichtigsten Typen sind:'}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"string"}),": Texte, geschrieben in Anführungszeichen ('', \", oder ``)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"number"}),": Zahlen, sowohl ganze Zahlen als auch Dezimalzahlen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"boolean"}),": Wahrheitswerte, nur true oder false"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"array"}),": Eine geordnete Liste von Werten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"object"}),": Eine Sammlung von Schlüssel-Wert-Paaren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"undefined"}),": Eine Variable, der noch kein Wert zugewiesen wurde"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"null"}),': Beabsichtigt "leer" oder "kein Wert"']})]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Mit typeof den Datentyp prüfen"}),e.jsxs("p",{children:["JavaScript bietet den Operator ",e.jsx("code",{children:"typeof"}),", um den Typ eines Werts zu überprüfen. Das ist besonders hilfreich, wenn du nicht sicher bist, welchen Typ eine Variable hat, oder wenn du deinen Code testen möchtest."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsx("code",{children:"typeof variable"})," gibt einen String zurück, der den Typ beschreibt."]}),e.jsx(s,{filename:"typeof.js",children:`
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
`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Beachte, dass ",e.jsx("code",{children:"typeof null"})," ",e.jsx("code",{children:'"object"'})," zurückgibt. Das ist ein alter Bug in JavaScript, der aus Kompatibilitätsgründen bestehen bleibt. In der Praxis ist"," ",e.jsx("code",{children:"null"}),' aber kein Objekt, sondern bedeutet "kein Wert".']})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Datentypen im Detail"}),e.jsx("h3",{children:"Strings (Texte)"}),e.jsx("p",{children:"Strings können mit einfachen (''), doppelten (\") oder Backticks (``) geschrieben werden. Backticks ermöglichen Template Literals, also das Einfügen von Variablen direkt im Text:"}),e.jsx(s,{filename:"strings.js",children:`
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
`}),e.jsx("h3",{children:"Numbers (Zahlen)"}),e.jsxs("p",{children:["Numbers umfassen sowohl ganze Zahlen als auch Dezimalzahlen. Es gibt"," ","keine separate Type für ganze Zahlen in JavaScript:"]}),e.jsx(s,{filename:"numbers.js",children:`
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
`}),e.jsx("h3",{children:"Booleans (Wahrheitswerte)"}),e.jsxs("p",{children:["Booleans haben nur zwei mögliche Werte: ",e.jsx("code",{children:"true"})," und"," ",e.jsx("code",{children:"false"}),". Sie werden oft in Bedingungen verwendet:"]}),e.jsx(s,{filename:"booleans.js",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Datentypen umwandeln (Casting)"}),e.jsx("p",{children:'Oft musst du Werte von einem Typ in einen anderen umwandeln. JavaScript macht das teilweise automatisch ("coercion"), aber es ist besser, dies explizit zu machen. Hier sind die wichtigsten Methoden:'}),e.jsx("h3",{children:"Von String zu Number"}),e.jsxs("p",{children:["Wenn du einen Text wie ",e.jsx("code",{children:'"42"'})," in eine echte Zahl"," ",e.jsx("code",{children:"42"})," umwandeln möchtest, verwende ",e.jsx("code",{children:"Number()"})," ","oder ",e.jsx("code",{children:"parseInt()"})," / ",e.jsx("code",{children:"parseFloat()"}),":"]}),e.jsx(s,{filename:"string-zahl.js",children:`
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
`}),e.jsx("h3",{children:"Von Number zu String"}),e.jsxs("p",{children:["Um eine Zahl in einen Text umzuwandeln, verwende"," ",e.jsx("code",{children:".toString()"})," oder ",e.jsx("code",{children:"String()"}),":"]}),e.jsx(s,{filename:"zahl-string.js",children:`
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
`}),e.jsx("h3",{children:"Von String zu Boolean"}),e.jsx("p",{children:"Die Umwandlung von Strings zu Booleans folgt diesen Regeln:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Leere Strings ",e.jsx("code",{children:'""'})," werden zu ",e.jsx("code",{children:"false"})]}),e.jsxs("li",{children:["Alle anderen Strings werden zu ",e.jsx("code",{children:"true"})]})]}),e.jsx(s,{filename:"string-boolean.js",children:`
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
`}),e.jsx("h3",{children:"Von Boolean zu Number"}),e.jsx("p",{children:"Booleans können in Zahlen umgewandelt werden:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"true"})," wird zu ",e.jsx("code",{children:"1"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"false"})," wird zu ",e.jsx("code",{children:"0"})]})]}),e.jsx(s,{filename:"boolean-zahl.js",children:`
console.log(Number(true));   // 1
console.log(Number(false));  // 0

// Umgekehrt: 0 wird zu false, alles andere zu true
console.log(Boolean(0));     // false
console.log(Boolean(1));     // true
console.log(Boolean(-1));    // true
console.log(Boolean(0.1));   // true
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Automatische Typumwandlung (Type Coercion)"}),e.jsx("p",{children:"JavaScript versucht oft, Typen automatisch umzuwandeln. Das kann hilfreich sein, aber auch zu unerwarteten Ergebnissen führen:"}),e.jsx(s,{filename:"coercion.js",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Variablen speichern Werte und können mit ",e.jsx("code",{children:"let"})," oder"," ",e.jsx("code",{children:"const"})," erstellt werden"]}),e.jsxs("li",{children:[e.jsx("code",{children:"const"})," für unveränderliche Werte, ",e.jsx("code",{children:"let"})," für veränderliche Werte"]}),e.jsx("li",{children:"Die wichtigsten Typen sind: string, number, boolean, array, object"}),e.jsxs("li",{children:[e.jsx("code",{children:"typeof"})," gibt den Typ einer Variable zurück"]}),e.jsxs("li",{children:["Explizite Typumwandlung mit ",e.jsx("code",{children:"Number()"}),","," ",e.jsx("code",{children:"String()"}),", ",e.jsx("code",{children:"Boolean()"})," ist besser als automatische Umwandlung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"parseInt()"})," und ",e.jsx("code",{children:"parseFloat()"})," extrahieren"," ","Zahlen aus Strings"]})]})]})]})}const si=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));function xe(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Was sind Bedingungen?"}),e.jsx("p",{children:"Bedingungen erlauben es deinem Programm, verschiedene Entscheidungen zu treffen. Abhängig davon, ob eine Bedingung wahr (true) oder falsch (false) ist, wird unterschiedlicher Code ausgeführt."}),e.jsx("p",{children:"Stell dir vor, du gehst zur Schule. Was du mitbringst, hängt vom Wetter ab:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Wenn es regnet, bringst du einen Regenschirm mit"}),e.jsx("li",{children:"Sonst wenn es sehr warm ist, bringst du Sonnencreme mit"}),e.jsx("li",{children:"Sonst bringst du einfach dein normales Schulzeug mit"})]}),e.jsx("p",{children:"Genau so funktionieren Bedingungen in JavaScript: Das Programm prüft eine Bedingung und führt den passenden Code aus."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"if, else if, else"}),e.jsxs("p",{children:["Die Grundstruktur einer Bedingung in JavaScript besteht aus"," ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"else if"})," (optional) und ",e.jsx("code",{children:"else"})," ","(optional):"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if"}),": Immer notwendig. Die erste Bedingung, die geprüft wird"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else if"}),": Optional. Weitere Bedingungen, die geprüft werden, wenn die vorherige falsch war"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"}),": Optional. Der Code, der ausgeführt wird, wenn alle vorherigen Bedingungen falsch waren"]})]}),e.jsx(s,{filename:"bedingungen.js",children:`let temp = 25;

if (temp > 30) {
  console.log("Es ist sehr warm!");
} else if (temp > 20) {
  console.log("Es ist angenehm warm.");
} else {
  console.log("Es ist kühl.");
}
// Ausgabe: "Es ist angenehm warm."`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," JavaScript prüft die Bedingungen von oben nach unten. Sobald eine Bedingung wahr ist, wird der zugehörige Code ausgeführt und der Rest wird ignoriert. Auch wenn mehrere Bedingungen wahr wären, wird nur der erste passende Block ausgeführt."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Bedingungen mit Variablen"}),e.jsx("p",{children:"Bedingungen arbeiten oft mit Variablen. Hier ein Beispiel, das verschiedene Variablen kombiniert:"}),e.jsx(s,{filename:"bedingungen-variablen.js",children:`let alter = 18;
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Vergleichsoperatoren"}),e.jsxs("p",{children:["Vergleichsoperatoren vergleichen zwei Werte und geben"," ",e.jsx("code",{children:"true"})," oder ",e.jsx("code",{children:"false"})," zurück. Sie werden oft in Bedingungen verwendet:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"==="})," gleich (typfest - Wert UND Typ müssen gleich sein)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!=="})," ungleich (typfest - Wert ODER Typ muss unterschiedlich sein)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," gleich (nur Wert, Typ wird ignoriert)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!="})," ungleich (nur Wert, Typ wird ignoriert)"]}),e.jsxs("li",{children:[e.jsx("code",{children:">"})," grösser"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<"})," kleiner"]}),e.jsxs("li",{children:[e.jsx("code",{children:">="})," grösser oder gleich"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<="})," kleiner oder gleich"]})]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Typfest vergleichen (=== und !==)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Empfehlung:"})," Verwende immer ",e.jsx("code",{children:"==="})," und"," ",e.jsx("code",{children:"!=="})," zum Vergleichen. Diese Operatoren prüfen sowohl den Wert als auch den Typ. Das vermeidet viele Fehler."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beispiel:"})," ",e.jsx("code",{children:"==="})," prüft, ob zwei Werte identisch sind - sowohl der Wert als auch der Typ muss übereinstimmen:"]}),e.jsx(s,{filename:"typfest-vergleich.js",children:`// ===: Typfest gleich (Wert UND Typ müssen gleich sein)
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Typgleichheit im Detail"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Typgleichheit"})," bedeutet, dass nicht nur der Wert, sondern auch der Datentyp identisch sein muss. Das ist wichtig, denn in JavaScript kann ",e.jsx("code",{children:'"5"'})," (ein String) nicht einfach als",e.jsx("code",{children:"5"})," (eine Zahl) betrachtet werden - sie haben unterschiedliche Bedeutung und Funktionen."]}),e.jsx(s,{filename:"typgleichheit.js",children:`// Typgleichheit prüfen mit typeof und ===
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Logische Operatoren"}),e.jsx("p",{children:"Logische Operatoren kombinieren mehrere Bedingungen. Sie arbeiten mit booleschen Werten (true/false):"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," UND: Beide Bedingungen müssen wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," ODER: Mindestens eine Bedingung muss wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!"})," NICHT: Kehrt den Wahrheitswert um"]})]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"UND (&&) - Beide Bedingungen müssen wahr sein"}),e.jsxs("p",{children:["Der UND-Operator ",e.jsx("code",{children:"&&"})," gibt nur dann ",e.jsx("code",{children:"true"}),"zurück, wenn BEIDE Bedingungen wahr sind. Wenn eine Bedingung falsch ist, ist das Ergebnis falsch:"]}),e.jsx(s,{filename:"und-operator.js",children:`// UND: Beide Bedingungen muessen wahr sein
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"ODER (||) - Mindestens eine Bedingung muss wahr sein"}),e.jsxs("p",{children:["Der ODER-Operator ",e.jsx("code",{children:"||"})," gibt ",e.jsx("code",{children:"true"})," zurück, wenn MINDESTENS EINE der Bedingungen wahr ist. Nur wenn BEIDE falsch sind, ist das Ergebnis falsch:"]}),e.jsx(s,{filename:"oder-operator.js",children:`// ODER: Mindestens eine Bedingung muss wahr sein
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"NICHT (!) - Wahrheitswert umkehren"}),e.jsxs("p",{children:["Der NICHT-Operator ",e.jsx("code",{children:"!"})," kehrt den Wahrheitswert um:",e.jsx("code",{children:"true"})," wird zu ",e.jsx("code",{children:"false"})," und umgekehrt:"]}),e.jsx(s,{filename:"nicht-operator.js",children:`// NICHT: Kehrt den Wahrheitswert um
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Vergleichsoperatoren im Detail"}),e.jsx("p",{children:"Hier sind Beispiele, wie die verschiedenen Vergleichsoperatoren funktionieren:"}),e.jsx(s,{filename:"vergleichsoperatoren.js",children:`let a = 10;
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Verzweigungen verschachteln"}),e.jsx("p",{children:"Bedingungen können ineinander verschachtelt werden. Das heisst, eine Bedingung kann innerhalb einer anderen stehen:"}),e.jsx(s,{filename:"verschachtelt.js",children:`let alter = 20;
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Häufige Fehler und Tipps"}),e.jsx("p",{children:"Hier sind einige häufige Fehler, die Anfänger machen, und wie du sie vermeiden kannst:"}),e.jsx(s,{filename:"fehler-vermeiden.js",children:`// Fehler 1: = statt === (Zuweisung statt Vergleich!)
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bedingungen erlauben es dem Programm, verschiedene Entscheidungen zu treffen"}),e.jsxs("li",{children:[e.jsx("code",{children:"if"})," prüft die erste Bedingung, ",e.jsx("code",{children:"else if"})," ","weitere, ",e.jsx("code",{children:"else"})," den Fallback"]}),e.jsxs("li",{children:[e.jsx("code",{children:"==="})," und ",e.jsx("code",{children:"!=="})," prüfen Wert UND Typ (empfohlen!)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"=="})," und ",e.jsx("code",{children:"!="})," prüfen nur den Wert (vermeiden!)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"&&"})," (UND): Beide Bedingungen müssen wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"||"})," (ODER): Mindestens eine Bedingung muss wahr sein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"!"})," (NICHT): Kehrt den Wahrheitswert um"]}),e.jsx("li",{children:"Typgleichheit bedeutet, dass sowohl der Wert als auch der Typ identisch sein müssen"}),e.jsx("li",{children:"Bedingungen von oben nach unten geprüft - erste passende Bedingung gewinnt"})]})]})]})}const ri=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));function ge(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Was sind Listen (Arrays)?"}),e.jsx("p",{children:'Listen (in JavaScript "Arrays" genannt) sind Sammlungen von Werten, die du in einer einzigen Variable speichern kannst. Stell dir eine Liste wie einen Einkaufszettel vor: Du schreibst alle Punkte nacheinander auf, und jeder Punkt hat eine bestimmte Position auf der Liste.'}),e.jsx("p",{children:"Listen sind sehr nützlich, wenn du mehrere zusammengehörige Werte verwalten möchtest, zum Beispiel:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Namen deiner Klassenfreunde"}),e.jsx("li",{children:"Noten in einem Fach"}),e.jsx("li",{children:"Wochentage"}),e.jsx("li",{children:"Preise von Produkten"})]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Arrays erstellen"}),e.jsxs("p",{children:["Ein Array erstellst du mit eckigen Klammern ",e.jsx("code",{children:"[]"}),". Die einzelnen Werte werden mit Kommas getrennt:"]}),e.jsx(s,{filename:"arrays-erstellen.js",children:`// Ein Array mit Fruchtnamen
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Index und Position"}),e.jsxs("p",{children:["Jedes Element in einem Array hat eine Position, den sogenannten"," ",e.jsx("strong",{children:"Index"}),". Der Index beginnt bei ",e.jsx("strong",{children:"0"}),", nicht bei 1! Das ist eine wichtige Konvention in der Programmierung."]}),e.jsx(s,{filename:"index-beispiel.js",children:`// Wochentage mit Index
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Arrays verändern"}),e.jsx("p",{children:"Du kannst Arrays auf verschiedene Weise verändern: Elemente hinzufügen, entfernen oder ändern:"}),e.jsx(s,{filename:"arrays-aendern.js",children:`let zahlen = [1, 2, 3];

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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Wichtige Array-Methoden"}),e.jsx("p",{children:"JavaScript bietet viele eingebaute Methoden für Arrays. Hier die wichtigsten:"}),e.jsx(s,{filename:"array-methoden.js",children:`let zahlen = [10, 20, 30, 40, 50];

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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Arrays durchlaufen"}),e.jsxs("p",{children:["Oft möchtest du alle Elemente eines Arrays bearbeiten. Dazu gibt es verschiedene Methoden. Die einfachste ist die ",e.jsx("code",{children:"for...of"}),"-Schleife:"]}),e.jsx(s,{filename:"array-durchlaufen.js",children:`const schueler = ["Anna", "Beat", "Claudia", "Daniel"];

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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Praktische Beispiele"}),e.jsx(s,{children:`// Beispiel 1: Einkaufsliste
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsx("p",{children:"Hier sind die wichtigsten Punkte dieser Lektion:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arrays speichern mehrere Werte in einer Variable"}),e.jsxs("li",{children:["Der Index beginnt bei 0, das erste Element ist also"," ",e.jsx("code",{children:"array[0]"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"array.length"})," gibt die Anzahl der Elemente zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"push()"})," und ",e.jsx("code",{children:"unshift()"})," hinzufügen Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:"pop()"})," und ",e.jsx("code",{children:"shift()"})," entfernen Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:"indexOf()"})," findet die Position, ",e.jsx("code",{children:"includes()"})," ","prüft das Vorhandensein"]}),e.jsxs("li",{children:[e.jsx("code",{children:"slice()"})," kopiert Teile, ",e.jsx("code",{children:"splice()"})," verändert das Original"]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...of"})," durchläuft alle Elemente einfach"]})]})]})]})}const li=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"}));function me(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Was sind Schleifen?"}),e.jsx("p",{children:"Schleifen erlauben es dir, Code-Blöcke wiederholt auszuführen. Statt denselben Code immer und immer wieder schreiben zu müssen, definierst du einmal, was wiederholt werden soll, und wie oft."}),e.jsx("p",{children:"Stell dir vor, du musst 100 Briefe schreiben. Du könntest jeden Brief einzeln abschreiben, oder du schreibst eine Vorlage und kopierst sie 100 Mal. Schleifen funktionieren ähnlich: Du schreibst den Code einmal und lässt ihn mehrfach ausführen."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"for-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"for"}),"-Schleife ist die häufigste Schleife. Sie wird verwendet, wenn du genau weisst, wie oft der Code ausgeführt werden soll."]}),e.jsx("p",{children:"Eine for-Schleife hat drei Teile in der Klammer:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Initialisierung"}),": Eine Variable wird erstellt und gestartet (z.B. ",e.jsx("code",{children:"let i = 0"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingung"}),": Solange diese Bedingung wahr ist, wird die Schleife ausgeführt (z.B. ",e.jsx("code",{children:"i < 5"}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Update"}),": Nach jedem Durchlauf wird die Variable geändert (z.B. ",e.jsx("code",{children:"i++"}),")"]})]}),e.jsx(s,{filename:"for-schleife.js",children:`// Zählt von 0 bis 4
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"while-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"while"}),"-Schleife führt den Code so lange aus, wie die Bedingung wahr ist. Sie wird verwendet, wenn du nicht genau weisst, wie oft die Schleife durchlaufen wird."]}),e.jsx(s,{filename:"while-schleife.js",children:`let count = 0;
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"for...of-Schleife"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"for...of"}),"-Schleife durchläuft alle Elemente eines Arrays oder Strings. Sie ist besonders einfach und übersichtlich."]}),e.jsx(s,{filename:"for-of.js",children:`const farben = ["rot", "gruen", "blau"];

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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"break und continue"}),e.jsxs("p",{children:[e.jsx("code",{children:"break"})," beendet die Schleife komplett, während"," ",e.jsx("code",{children:"continue"})," den aktuellen Durchlauf überspringt und mit dem nächsten weitermacht:"]}),e.jsx(s,{filename:"break-continue.js",children:`// break: Schleife sofort beenden
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Praktische Beispiele"}),e.jsx(s,{children:`// Beispiel 1: Summe berechnen
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Wichtige Unterschiede"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"for"}),": Wenn du genau weisst, wie oft"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"while"}),": Wenn die Bedingung variabel ist"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"for...of"}),": Wenn du alle Elemente durchlaufen willst"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"break"}),": Schleife komplett beenden"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"continue"}),": Nur aktuellen Durchlauf ueberspringen"]})]})]})]})}const ti=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));function be(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Tipps: User Input"}),e.jsx("p",{children:"In den bisherigen Beispielen haben wir Code ausschliesslich in der Konsole ausgeführt. Manchmal möchte man aber auch Eingaben von Benutzer:innen entgegennehmen. Hier schauen wir uns zwei Methoden an, um Eingaben in JavaScript zu lesen."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Eingaben mit readline"}),e.jsxs("p",{children:["Die ",e.jsx("code",{children:"readline"}),"-Modul ist eine eingebaute Node.js-Funktion, die es ermöglicht, Zeilen von der Eingabe zu lesen. Das folgende Beispiel fragt den Namen der Person ab und begrüsst sie:"]}),e.jsx(s,{filename:"readline-eingabe.js",children:`const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Was ist dein Name? ', (answer) => {
  console.log('Hallo, ' + answer + '!');
  rl.close();
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Die ",e.jsx("code",{children:"readline"}),"-Methode funktioniert nur in Node.js, nicht im Browser. Du kannst diesen Code mit ",e.jsx("code",{children:"node readline-eingabe.js"}),"ausführen."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Mehrere Eingaben mit readline"}),e.jsxs("p",{children:[e.jsx("code",{children:"rl.question()"})," ist ",e.jsx("em",{children:"asynchron"}),": Der Code nach dem Aufruf läuft sofort weiter, ohne auf die Eingabe zu warten. Wenn du mehrere Werte nacheinander abfragen möchtest, musst du die Aufrufe deshalb ",e.jsx("strong",{children:"verschachteln"})," – die nächste Frage wird erst innerhalb der Callback-Funktion der vorherigen Frage gestellt:"]}),e.jsx(s,{filename:"mehrere-eingaben.js",children:`const readline = require('readline');

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
});`}),e.jsxs("p",{children:["Jede weitere Frage kommt eine Ebene tiefer. Das funktioniert auch mit drei oder mehr Eingaben – wird aber schnell unübersichtlich (man nennt das ",e.jsx("em",{children:"Callback-Hell"}),"):"]}),e.jsx(s,{filename:"drei-eingaben.js",children:`rl.question('Vorname? ', (vorname) => {
  rl.question('Nachname? ', (nachname) => {
    rl.question('Lieblingsfarbe? ', (farbe) => {
      console.log(vorname + ' ' + nachname + ' mag ' + farbe + '.');
      rl.close();
    });
  });
});`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Merke:"})," Die Variablen der äusseren Fragen (",e.jsx("code",{children:"vorname"}),", ",e.jsx("code",{children:"nachname"}),") sind in den inneren Callbacks weiterhin verfügbar. ",e.jsx("code",{children:"rl.close()"})," wird nur",e.jsx("em",{children:" einmal"})," ganz zuletzt aufgerufen, sonst werden die weiteren Fragen nicht mehr gestellt."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Kommandozeilenargumente lesen"}),e.jsx("p",{children:"Eine weitere Möglichkeit, Eingaben zu lesen, ist die Verwendung von Kommandozeilenargumenten. Diese werden beim Start des Programms übergeben:"}),e.jsx(s,{filename:"argumente.js",children:`// Kommandozeilenargumente lesen
// Aufruf: node argumente.js Max 25

const name = process.argv[2];
const alter = process.argv[3];

console.log('Hallo ' + name + '!');
console.log('Du bist ' + alter + ' Jahre alt.');`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Kommandozeilenargumente werden immer als"," ",e.jsx("code",{children:"string"}),"gelesen, auch wenn es Zahlen sind! Wenn du mit Zahlen rechnen möchtest, musst du sie zuerst konvertieren:"]}),e.jsx(s,{filename:"argumente-mit-konvertierung.js",children:`// Kommandozeilenargumente als Zahlen konvertieren
const alter = Number(process.argv[3]);
const alterImNextenJahr = alter + 1;

console.log('Im nächsten Jahr bist du ' + alterImNextenJahr + ' Jahre alt.');`}),e.jsxs("p",{children:["Ohne ",e.jsx("code",{children:"Number()"})," würde ",e.jsx("code",{children:"'25' + 1"})," zu"," ",e.jsx("code",{children:"'251'"}),"führen, da JavaScript die Werte als Text zusammenhängt statt zu addieren."]})]})]})}const ci=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"}));function fe(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe erfüllen. Du kannst ihnen Werte übergeben (Parameter) und sie können Werte zurückgeben."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Funktionen definieren"}),e.jsx(v,{lang:"javascript",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Pfeilfunktionen (Arrow Functions)"}),e.jsx("p",{children:"Eine kompakte Schreibweise für Funktionen:"}),e.jsx(v,{lang:"javascript",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Parameter und Rückgabewerte"}),e.jsxs("p",{children:["Funktionen können mehrere Parameter haben. Mit ",e.jsx("code",{children:"return"})," ","gibst du ein Ergebnis zurück. Ohne ",e.jsx("code",{children:"return"})," gibt eine"," ","Funktion ",e.jsx("code",{children:"undefined"})," zurück."]})]})]})}const di=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));function pe(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Objekte"}),e.jsx("p",{children:"Objekte speichern mehrere Werte als Paar von Eigenschaftsnamen und Werten. Sie sind wie kleine Datenbanken, die zusammenhängende Informationen organisieren."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Objekte erstellen"}),e.jsx(v,{lang:"javascript",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Eigenschaften verändern"}),e.jsx(v,{lang:"javascript",children:`
// Neue Eigenschaft hinzufügen
person.email = "anna@example.com";

// Eigenschaft verändern
person.alter = 17;

// Eigenschaft löschen
delete person.hobby;
`})]}),e.jsxs(l,{children:[e.jsxs("h2",{children:["Das ",e.jsx("code",{children:"this"})," Keyword"]}),e.jsxs("p",{children:["In Methoden zeigt ",e.jsx("code",{children:"this"})," auf das Objekt selbst. Damit kannst du auf die Eigenschaften des eigenen Objekts zugreifen."]})]})]})}const oi=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));function ke(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Funktionales Programmieren"}),e.jsxs("p",{children:["Funktionales Programmieren ist ein Programmierparadigma, bei dem Funktionen erste Bürger sind. Du arbeitest viel mit höherwertigen Funktionen wie ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"}),"."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"map – Alle Elemente verändern"}),e.jsx(v,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5];

// Jede Zahl verdoppeln
const verdoppelt = zahlen.map(zahl => zahl * 2);
// [2, 4, 6, 8, 10]
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"filter – Elemente auswählen"}),e.jsx(v,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8];

// Nur gerade Zahlen behalten
const gerade = zahlen.filter(zahl => zahl % 2 === 0);
// [2, 4, 6, 8]
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"reduce – Alles zusammenfassen"}),e.jsx(v,{lang:"javascript",children:`
const zahlen = [1, 2, 3, 4, 5];

// Alle Zahlen addieren
const summe = zahlen.reduce((akkumulator, zahl) => {
  return akkumulator + zahl;
}, 0);
// 15
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Warum funktionales Programmieren?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Code wird lesbarer und wartbarer"}),e.jsx("li",{children:"Funktionen sind rein und vorhersagbar"}),e.jsx("li",{children:"Weniger Seiteneffekte"}),e.jsx("li",{children:"Einfacher zu testen"})]})]})]})}const hi=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));function Se(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Klassen und Vererbung"}),e.jsx("p",{children:"Klassen sind Baupläne für Objekte. Sie definieren, welche Eigenschaften und Methoden ein Objekt hat. Vererbung ermöglicht es dir, neue Klassen auf bestehenden aufzubauen."})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Klassen definieren"}),e.jsx(v,{lang:"javascript",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Vererbung mit extends"}),e.jsx(v,{lang:"javascript",children:`
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
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Überschreiben von Methoden"}),e.jsx("p",{children:"Eine Unterklasse kann Methoden der Oberklasse überschreiben, um ihr eigenes Verhalten zu definieren:"}),e.jsx(v,{lang:"javascript",children:`
class Hund extends Tier {
  // ...
  
  vorstellung() {
    return \`Wuff! Ich bin \${this.name}, ein Hund.\`;
  }
}
`})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Wichtige Konzepte"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"class"})," – definiert eine Klasse"]}),e.jsxs("li",{children:[e.jsx("code",{children:"constructor"})," – Initialisierung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"extends"})," – Vererbung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"super"})," – Zugriff auf die Oberklasse"]}),e.jsxs("li",{children:[e.jsx("code",{children:"new"})," – erstellt eine Instanz"]})]})]})]})}const ai=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"}));function i({children:r,area:n="content"}){return e.jsx("div",{className:`scroll-section ${n}`,children:e.jsx("div",{className:"scroll-section-content",children:r})})}function we(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"JS-Repetition"}),e.jsx("p",{children:"Wiederholung der wichtigsten JavaScript-Konzepte: Variablen, Bedingungen, Listen und Schleifen."}),e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("h2",{children:"Repetition"}),e.jsx("p",{children:"Variablen · Bedingungen · Listen · Schleifen"})]}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen"}),e.jsx("p",{children:'Variablen sind "Boxen", in denen wir Werte speichern.'}),e.jsx("div",{className:"cols",children:e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"var"})," — alt (global)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"let"})," — neu (block-scope, veränderbar)"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"const"})," — neu (block-scope, unveränderbar)"]})]})})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Variablen — Code testen"}),e.jsx(s,{filename:"variablen.js",children:`// Variablen erstellen
let name = "Anna";
const alter = 16;

// Werte ausgeben
console.log("Name:", name);
console.log("Alter:", alter);

// Wert ändern (nur mit let)
name = "Anna Maria";
console.log("Neuer Name:", name);`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Datentypen"}),e.jsx("p",{children:"JavaScript kennt verschiedene Typen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"string"})," — Text (in Anführungszeichen)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"number"})," — Zahlen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"boolean"})," — true oder false"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"array"})," — Liste von Werten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"object"})," — Schlüssel-Wert-Paare"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Datentypen — Code testen"}),e.jsx(s,{filename:"typen.js",children:`// String (Text)
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
console.log(Array.isArray(farben)); // true`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen"}),e.jsx("p",{children:"Bedingungen erlauben es, Code nur auszuführen wenn eine Bedingung erfüllt ist:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"if (...)"})," — wenn Bedingung wahr"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else if (...)"})," — weitere Bedingung"]}),e.jsxs("li",{children:[e.jsx("code",{children:"else"})," — sonst"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Operatoren:"})," ===, !==, <, >, &&, ||"]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bedingungen — Code testen"}),e.jsx(s,{filename:"bedingungen.js",children:`let score = 85;

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
console.log(status);`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Listen (Arrays)"}),e.jsx("p",{children:"Eine Liste speichert mehrere Werte unter einem Namen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstellen mit ",e.jsx("code",{children:"[]"})]}),e.jsxs("li",{children:["Index beginnt bei ",e.jsx("strong",{children:"0"})]}),e.jsxs("li",{children:[e.jsx("code",{children:".length"})," — Anzahl Elemente"]}),e.jsxs("li",{children:[e.jsx("code",{children:".push()"})," — Element hinzufügen"]}),e.jsxs("li",{children:[e.jsx("code",{children:".pop()"})," — letztes Element entfernen"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Listen — Code testen"}),e.jsx(s,{filename:"arrays.js",children:`// Liste erstellen
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
});`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen"}),e.jsx("p",{children:"Schleifen wiederholen Code mehrere Male:"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("code",{children:"for (let i = 0; i < n; i++)"})}),e.jsx("li",{children:e.jsx("code",{children:"while (Bedingung) { ... }"})}),e.jsxs("li",{children:[e.jsx("code",{children:"for ... of"})," — über Array-Elemente"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Schleifen — Code testen"}),e.jsx(s,{filename:"schleifen.js",children:`// for-Schleife
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
}`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsx("p",{children:"Funktionen sind wiederverwendbare Code-Blöcke:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Declaration:"})," ",e.jsx("code",{children:"function name() { ... }"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expression:"})," ",e.jsx("code",{children:"const name = () => { ... }"})]}),e.jsx("li",{children:"Parameter: Werte die man übergibt"}),e.jsx("li",{children:"Return-Wert: Ergebnis zurückgeben"})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen — Code testen"}),e.jsx(s,{filename:"funktionen.js",children:`// Funktion mit Parameter
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
console.log("3 + 4 =", addiere(3, 4));`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variablen:"})," let, const"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Datentypen:"})," string, number, boolean, array, object"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Bedingungen:"})," if, else if, else"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Listen:"})," [], .length, .push()"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schleifen:"})," for, while, for ... of"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," function, =>"]})]})]})})]})}const ui=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));function ze(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Theorie: Funktionen"}),e.jsx("p",{children:"Funktionen sind eines der wichtigsten Konzepte in JavaScript. Sie erlauben uns, Code-Blöcke zu definieren und wiederzuverwenden. In diesem Kapitel lernen wir, wie man Funktionen erstellt, den Unterschied zwischen normalen Funktionen und Arrow-Funktionen kennen, und wie man Callback-Funktionen verwendet."}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen, wie man eine Funktion mit ",e.jsx("code",{children:"function"})," ","definiert."]}),e.jsx("li",{children:"Sie kennen den Unterschied zwischen normalen Funktionen und Arrow-Funktionen."}),e.jsx("li",{children:"Sie verstehen, was Parameter und Rückgabewerte sind."}),e.jsxs("li",{children:["Sie können ",e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"}),","," ",e.jsx("code",{children:"filter"})," und ",e.jsx("code",{children:"reduce"})," verwenden."]}),e.jsx("li",{children:"Sie wissen, wie man Schleifen mit Callback-Funktionen ersetzt."})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was ist eine Funktion?"}),e.jsxs("p",{children:["Eine Funktion ist ein Block von Code, der einen bestimmten Namen hat und bei Bedarf ausgeführt werden kann. Funktionen können"," ",e.jsx("strong",{children:"Parameter"})," (Eingabewerte) haben und einen"," ",e.jsx("strong",{children:"Rückgabewert"})," (Ausgabewert) liefern."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"function"})," ist das Schlüsselwort zum Definieren"]}),e.jsx("li",{children:"Der Funktionsname benennt die Funktion"}),e.jsxs("li",{children:[e.jsx("code",{children:"(a, b)"})," sind die Parameter"]}),e.jsxs("li",{children:[e.jsx("code",{children:"return"})," gibt einen Wert zurück"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Einfache Funktion ohne Parameter"}),e.jsx(s,{filename:"funktion-definieren.js",children:`
// Funktion definieren
function begruessen() {
  console.log("Hallo Welt!");
}

// Funktion aufrufen
begruessen(); // Ausgabe: "Hallo Welt!"
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Funktion mit Parametern und Rückgabewert"}),e.jsx(s,{filename:"funktion-params.js",children:`
// Funktion mit Parametern definieren
function addiere(a, b) {
  return a + b;
}

// Funktion aufrufen und Ergebnis speichern
let resultat = addiere(5, 3);
console.log(resultat); // Ausgabe: 8
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen vs. Arrow-Funktionen"}),e.jsxs("p",{children:["In JavaScript gibt es zwei Hauptarten, Funktionen zu definieren:"," ",e.jsx("strong",{children:"normale Funktionen"})," und"," ",e.jsx("strong",{children:"Arrow-Funktionen"})," (Pfeil-Funktionen)."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Normale Funktion"}),e.jsx(s,{filename:"normale-funktion.js",children:`
// Normale Funktion definieren
function Quadrat(x) {
  return x * x;
}

console.log(Quadrat(5)); // Ausgabe: 25
`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktion"}),e.jsx(s,{filename:"arrow-funktion.js",children:`
// Arrow-Funktion definieren
const Quadrat = (x) => {
  return x * x;
};

console.log(Quadrat(5)); // Ausgabe: 25
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktionen: Details"}),e.jsx("h4",{children:"Einfache Arrow-Funktion mit einem Parameter"}),e.jsx("p",{children:"Bei einem Parameter können die Klammern weggelassen werden:"}),e.jsx("h4",{children:"Arrow-Funktion ohne Klammern und ohne Block"}),e.jsxs("p",{children:["Wenn die Funktion nur einen Rückgabewert hat, können wir"," ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"})," und ",e.jsx("code",{children:"return"})," ","weglassen:"]}),e.jsx("h4",{children:"Zusammenfassung der Unterschiede"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Merkmal"}),e.jsx("th",{children:"Normale Funktion"}),e.jsx("th",{children:"Arrow-Funktion"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Schlüsselwort"}),e.jsx("td",{children:e.jsx("code",{children:"function"})}),e.jsxs("td",{children:[e.jsx("code",{children:"const"})," / ",e.jsx("code",{children:"let"})," / ",e.jsx("code",{children:"var"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Syntax"}),e.jsxs("td",{children:[e.jsxs("code",{children:["function name() ","{"]})," ",e.jsx("code",{children:"}"})]}),e.jsxs("td",{children:[e.jsxs("code",{children:["const name = () => ","{"]})," ",e.jsx("code",{children:"}"})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"this"}),"-Binding"]}),e.jsx("td",{children:"Dynamisch"}),e.jsx("td",{children:"Lexikalisch"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Als Konstruktor"}),e.jsxs("td",{children:["Ja (",e.jsx("code",{children:"new"}),")"]}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"arguments"}),"-Objekt"]}),e.jsx("td",{children:"Ja"}),e.jsx("td",{children:"Nein"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Arrow-Funktionen haben kein eigenes"," ",e.jsx("code",{children:"this"}),". Sie erben ",e.jsx("code",{children:"this"})," vom umgebenden Kontext. Das ist besonders nützlich in Callbacks und Event-Handlern."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Arrow-Funktionen: Code testen"}),e.jsx("h4",{children:"Mit und ohne Klammern"}),e.jsx(s,{filename:"arrow-einfach.js",children:`
// Mit Klammern
const verdoppeln = (x) => {
  return x * 2;
};

// Ohne Klammern bei einem Parameter
const verdoppeln = x => x * 2;
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Vollständige vs. Kurzschreibweise"}),e.jsx(s,{filename:"arrow-kurz.js",children:`
// Vollständige Schreibweise
const begruessen = (name) => {
  return "Hallo " + name;
};

// Kurzschreibweise (impliziter Return)
const begruessen = (name) => "Hallo " + name;
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callback-Funktionen"}),e.jsxs("p",{children:["Eine ",e.jsx("strong",{children:"Callback-Funktion"})," ist eine Funktion, die als Argument an eine andere Funktion übergeben wird. Die aufgerufene Funktion kann dann den Callback zu einem bestimmten Zeitpunkt ausführen."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callback-Funktion — Code testen"}),e.jsx(s,{filename:"callback-beispiel.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"forEach - Elemente durchgehen"}),e.jsxs("p",{children:[e.jsx("code",{children:"forEach"})," führt eine Funktion für jedes Element eines Arrays aus."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Unterschied zur for-Schleife:"})," ",e.jsx("code",{children:"forEach"})," ","ist kürzer und lesbarer. Die normale Schleife gibt Ihnen mehr Kontrolle (z.B. frühes Beenden mit ",e.jsx("code",{children:"break"}),")."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"forEach — Code testen"}),e.jsx("h4",{children:"Mit forEach"}),e.jsx(s,{filename:"forEach-beispiel.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(s,{filename:"for-schleife-vergleich.js",children:`
const namen = ["Anna", "Beat", "Claudia", "Daniel"];

// for-Schleife
for (let i = 0; i < namen.length; i++) {
  console.log((i + 1) + ": " + namen[i]);
}
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"map - Array transformieren"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"})," erstellt ein neues Array, indem die Callback-Funktion auf jedes Element angewendet wird."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," ",e.jsx("code",{children:"map"})," verändert das Original-Array ",e.jsx("strong",{children:"nicht"}),". Es erstellt immer ein neues Array."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"map — Code testen"}),e.jsx("h4",{children:"Mit map"}),e.jsx(s,{filename:"map-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// map: Jedes Element verdoppeln
const verdoppelte = zahlen.map((zahl) => {
  return zahl * 2;
});

console.log(verdoppelte); // [2, 4, 6, 8, 10]
console.log(zahlen);      // [1, 2, 3, 4, 5] (original bleibt unverändert)
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(s,{filename:"map-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife mit neuem Array
const verdoppelte = [];
for (let i = 0; i < zahlen.length; i++) {
  verdoppelte.push(zahlen[i] * 2);
}

console.log(verdoppelte); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: HTML-Elemente erstellen"}),e.jsx(s,{filename:"map-html-beispiel.js",children:`
const namen = ["Anna", "Beat", "Claudia"];

// Jedes Element als HTML-Listenelement
const liElemente = namen.map((name) => {
  return "<li>" + name + "</li>";
});

const ulElement = "<ul>" + liElemente.join("") + "</ul>";
console.log(ulElement);
// <ul><li>Anna</li><li>Beat</li><li>Claudia</li></ul>
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter - Elemente herausfiltern"}),e.jsxs("p",{children:[e.jsx("code",{children:"filter"})," erstellt ein neues Array mit allen Elementen, die die Bedingung erfüllen."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"filter — Code testen"}),e.jsx("h4",{children:"Mit filter"}),e.jsx(s,{filename:"filter-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Nur gerade Zahlen filtern
const geradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 === 0;
});

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(s,{filename:"filter-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for-Schleife mit neuem Array
const geradeZahlen = [];
for (let i = 0; i < zahlen.length; i++) {
  if (zahlen[i] % 2 === 0) {
    geradeZahlen.push(zahlen[i]);
  }
}

console.log(geradeZahlen); // [2, 4, 6, 8, 10]
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: Namen filtern"}),e.jsx(s,{filename:"filter-objekte.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce - Werte zusammenrechnen"}),e.jsxs("p",{children:[e.jsx("code",{children:"reduce"})," reduziert ein Array auf einen einzelnen Wert. Es ist sehr flexibel und wird für Berechnungen, Gruppierungen und Transformationen verwendet."]}),e.jsx("p",{children:e.jsx("strong",{children:"Erklärung:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"accumulator"})," ist der gesammelte Wert (wächst mit jedem Schritt)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"zahl"})," ist das aktuelle Element"]}),e.jsxs("li",{children:[e.jsx("code",{children:"0"})," ist der Startwert des Akkumulators"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"reduce — Code testen"}),e.jsx("h4",{children:"Mit reduce"}),e.jsx(s,{filename:"reduce-beispiel.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// Summe berechnen
const summe = zahlen.reduce((accumulator, zahl) => {
  return accumulator + zahl;
}, 0); // 0 ist der Startwert

console.log(summe); // 15
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"reduce Schritt für Schritt"}),e.jsx(s,{filename:"reduce-schritte.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// reduce berechnet:
// Schritt 1: 0 + 1 = 1
// Schritt 2: 1 + 2 = 3
// Schritt 3: 3 + 3 = 6
// Schritt 4: 6 + 4 = 10
// Schritt 5: 10 + 5 = 15
// Ergebnis: 15
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Mit normaler Schleife (Alternative)"}),e.jsx(s,{filename:"reduce-schleife-vergleich.js",children:`
const zahlen = [1, 2, 3, 4, 5];

// for-Schleife
let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
  summe = summe + zahlen[i];
}

console.log(summe); // 15
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"Praktisches Beispiel: Produkt berechnen"}),e.jsx(s,{filename:"reduce-produkt.js",children:`
const zahlen = [2, 3, 4, 5];

// Produkt aller Zahlen
const produkt = zahlen.reduce((accumulator, zahl) => {
  return accumulator * zahl;
}, 1); // Startwert ist 1 (neutrales Element der Multiplikation)

console.log(produkt); // 120 (2 * 3 * 4 * 5)
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h4",{children:"reduce mit Objekten"}),e.jsx(s,{filename:"reduce-objekte.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Vergleich: Alle Methoden im Überblick"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Zweck"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Verändert Original?"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"forEach"})}),e.jsx("td",{children:"Code für jedes Element ausführen"}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"map"})}),e.jsx("td",{children:"Element transformieren"}),e.jsx("td",{children:"Neues Array"}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"filter"})}),e.jsx("td",{children:"Elemente herausfiltern"}),e.jsx("td",{children:"Neues Array"}),e.jsx("td",{children:"Nein"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"reduce"})}),e.jsx("td",{children:"Werte zusammenrechnen"}),e.jsx("td",{children:"Einzelner Wert"}),e.jsx("td",{children:"Nein"})]})]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kombinierte Beispiele"}),e.jsx("p",{children:"Oft werden mehrere Methoden kombiniert:"})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kombinierte Beispiele — Code testen"}),e.jsx("h3",{children:"Beispiel: Namen filtern und transformieren"}),e.jsx(s,{filename:"kombiniert-filter-map.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Beispiel: Summe der Noten von erwachsenen Schülern"}),e.jsx(s,{filename:"kombiniert-filter-reduce.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Methode verwenden?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"forEach"})}),": Wenn Sie etwas mit jedem Element tun möchten (z.B. DOM-Elemente erstellen, console.log)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"map"})}),": Wenn Sie ein neues Array mit transformierten Werten brauchen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"filter"})}),": Wenn Sie eine Teilmenge des Arrays brauchen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"reduce"})}),": Wenn Sie einen einzelnen Wert aus dem Array berechnen wollen"]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("p",{children:["Funktionen sind ein fundamentales Konzept in JavaScript. Sie erlauben uns, Code zu organisieren und wiederzuverwenden. Der Unterschied zwischen normalen Funktionen und Arrow-Funktionen liegt vor allem in der Syntax und im Verhalten von ",e.jsx("code",{children:"this"}),". Callback-Funktionen sind Funktionen, die als Argument übergeben werden, und werden häufig bei Array-Methoden wie"," ",e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"})," verwendet. Diese Methoden machen den Umgang mit Arrays viel eleganter und lesbarer als normale Schleifen."]})]})})]})}const ji=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));function ve(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Theorie: Objekte"}),e.jsxs("p",{children:["Objekte sind eines der wichtigsten Datenstrukturen in JavaScript. Sie erlauben uns, komplexe Daten in Form von ",e.jsx("strong",{children:"Schlüssel-Wert-Paaren"})," ","zu organisieren. In diesem Kapitel lernen wir, wie man Objekte erstellt, auf ihre Eigenschaften zugreift, sie iteriert, neue Objekte erstellt und wie man die spezielle JavaScript-Syntax für Spread und Dekomposition verwendet."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie wissen, wie man ein Objekt mit ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"})," definiert."]}),e.jsx("li",{children:"Sie können auf Eigenschaften mit Punkt- und Klammernotation zugreifen."}),e.jsxs("li",{children:["Sie verstehen, wie man mit ",e.jsx("code",{children:"Object.keys()"}),","," ",e.jsx("code",{children:"Object.values()"})," und ",e.jsx("code",{children:"for...in"})," über Objekte iteriert."]}),e.jsxs("li",{children:["Sie können Objekte mit der ",e.jsx("code",{children:"spread"}),"-Syntax kopieren und erweitern."]}),e.jsxs("li",{children:["Sie verstehen die ",e.jsx("code",{children:"decomposition"}),"-Syntax zum Herauslesen von Eigenschaften."]}),e.jsx("li",{children:"Sie können Funktionen schreiben, die neue Objekte erstellen und zurückgeben."})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Was ist ein Objekt?"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Objekt"})," ist eine Sammlung von"," ",e.jsx("strong",{children:"Schlüssel-Wert-Paaren"}),". Jeder Schlüssel ist ein String (oder Symbol) und jeder Wert kann ein beliebiger JavaScript-Typ sein — eine Zahl, ein String, ein Array, eine Funktion oder sogar ein anderes Objekt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"{"})," und ",e.jsx("code",{children:"}"})," definieren das Objekt"]}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"Schlüssel"})," (links vom ",e.jsx("code",{children:":"}),") benennt die Eigenschaft"]}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"Wert"})," (rechts vom ",e.jsx("code",{children:":"}),") ist der gespeicherte Wert"]}),e.jsxs("li",{children:["Kommas ",e.jsx("code",{children:","})," trennen die Schlüssel-Wert-Paare"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Vergleich mit Arrays:"})," Arrays verwenden numerische Indizes, während Objekte benannte Schlüssel verwenden. Arrays sind für geordnete Listen, Objekte für strukturierte Daten."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Ein einfaches Objekt erstellen"}),e.jsx(s,{filename:"objekt-erstellen.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h3",{children:"Objekt mit einer Funktion als Wert"}),e.jsx(s,{filename:"objekt-methode.js",children:`
// Eine Funktion als Wert (auch "Methode" genannt)
const calculator = {
  addiere: function(a, b) {
    return a + b;
  },
  subtrahiere: (a, b) => a - b
};

console.log(calculator.addiere(5, 3)); // 8
console.log(calculator.subtrahiere(10, 4)); // 6
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zugriff auf Eigenschaften"}),e.jsxs("p",{children:["Es gibt zwei Arten, auf die Eigenschaften eines Objekts zuzugreifen:"," ",e.jsx("strong",{children:"Punkt-Notation"})," und ",e.jsx("strong",{children:"Klammernotation"}),"."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Punkt-Notation"}),e.jsx("p",{children:"Die Punkt-Notation ist die einfachste Art, wenn der Schlüssel ein gültiger Bezeichner ist:"}),e.jsx(s,{filename:"punkt-notation.js",children:`
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
`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Klammernotation"}),e.jsx("p",{children:"Die Klammernotation wird verwendet, wenn der Schlüssel ein Ausdruck ist oder kein gültiger Bezeichner:"}),e.jsx(s,{filename:"klammer-notation.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Punkt- vs. Klammernotation"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Merkmal"}),e.jsx("th",{children:"Punkt-Notation"}),e.jsx("th",{children:"Klammernotation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Syntax"}),e.jsx("td",{children:e.jsx("code",{children:"obj.key"})}),e.jsx("td",{children:e.jsx("code",{children:'obj["key"]'})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dynamische Schlüssel"}),e.jsx("td",{children:"Nein"}),e.jsx("td",{children:"Ja"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spezielle Zeichen"}),e.jsx("td",{children:"Nein"}),e.jsx("td",{children:"Ja"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Autocomplete"}),e.jsx("td",{children:"Ja"}),e.jsx("td",{children:"Nein"})]})]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Eigenschaften hinzufügen und entfernen"}),e.jsx(s,{filename:"eigenschaften-aendern.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Über Objekte iterieren"}),e.jsx("p",{children:"Es gibt mehrere Möglichkeiten, über die Eigenschaften eines Objekts zu iterieren:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys(obj)"})," — gibt ein Array aller Schlüssel zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.values(obj)"})," — gibt ein Array aller Werte zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.entries(obj)"})," — gibt ein Array von"," ",e.jsx("code",{children:"[key, value]"}),"-Paaren zurück"]}),e.jsxs("li",{children:[e.jsx("code",{children:"for...in"})," — Schleife über alle Schlüssel"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Object.keys(), Object.values(), Object.entries()"}),e.jsx(s,{filename:"object-methoden.js",children:`
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
`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"for...in Schleife"}),e.jsx(s,{filename:"for-in.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Welche Iterations-Methode verwenden?"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Methode"}),e.jsx("th",{children:"Gibt zurück"}),e.jsx("th",{children:"Verwendung"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.keys()"})}),e.jsx("td",{children:"Array von Schlüsseln"}),e.jsx("td",{children:"Wenn Sie die Namen der Eigenschaften brauchen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.values()"})}),e.jsx("td",{children:"Array von Werten"}),e.jsx("td",{children:"Wenn Sie nur die Werte brauchen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Object.entries()"})}),e.jsx("td",{children:"Array von [key, value]"}),e.jsx("td",{children:"Wenn Sie beide brauchen, z.B. für map/filter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"for...in"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Wenn Sie jede Eigenschaft einzeln verarbeiten"})]})]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread-Syntax (...)"}),e.jsxs("p",{children:["Die ",e.jsx("strong",{children:"Spread-Syntax"})," (",e.jsx("code",{children:"..."}),') ermöglicht es, ein Objekt zu "expandieren" — also seine Eigenschaften an einer anderen Stelle einzufügen. Damit können wir Objekte kopieren und erweitern, ohne das Original zu verändern.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Copy:"})," ",e.jsxs("code",{children:["{","...obj","}"]})," erstellt eine flache Kopie"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extend:"})," ",e.jsxs("code",{children:["{","...obj, neu: wert","}"]})," ","fügt neue Eigenschaften hinzu"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Merge:"})," ",e.jsxs("code",{children:["{","...obj1, ...obj2","}"]})," verbindet zwei Objekte"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Die Spread-Syntax erstellt nur eine"," ",e.jsx("strong",{children:"flache Kopie"}),". Verschachtelte Objekte werden nicht kopiert, sondern referenziert."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Objekte kopieren und erweitern"}),e.jsx(s,{filename:"spread-beispiel.js",children:`
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
`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Vorsicht bei verschachtelten Objekten"}),e.jsx(s,{filename:"spread-verschachtelt.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Dekomposition (Destructuring)"}),e.jsxs("p",{children:["Die ",e.jsx("strong",{children:"Dekomposition"})," (",e.jsx("code",{children:"destructure"}),") ist die"," ",e.jsx("strong",{children:"umgekehrte Operation"}),' zur Spread-Syntax. Statt Eigenschaften zu "expandieren", "extrahieren" wir sie aus einem Objekt und weisen sie Variablen zu.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Extrahieren:"})," ",e.jsxs("code",{children:["const ","{"," name, alter ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Umbenennen:"})," ",e.jsxs("code",{children:["const ","{"," name: n ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default-Werte:"})," ",e.jsxs("code",{children:["const ","{"," alter = 0 ","}"," = person;"]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rest-Properties:"})," ",e.jsxs("code",{children:["const ","{"," name, ...rest ","}"," = person;"]})]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Dekomposition — Code testen"}),e.jsx(s,{filename:"dekomposition-beispiel.js",children:`
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
`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Rest-Properties mit Dekomposition"}),e.jsx(s,{filename:"dekomposition-rest.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread vs. Dekomposition"}),e.jsxs("p",{children:["Spread und Dekomposition sind ",e.jsx("strong",{children:"komplementäre Operationen"}),":"]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Aktion"}),e.jsx("th",{children:"Syntax"}),e.jsx("th",{children:"Richtung"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Expandieren"}),e.jsx("td",{children:e.jsxs("code",{children:["{","...obj","}"]})}),e.jsx("td",{children:"Objekt → Eigenschaften"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extrahieren"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," key ","}"," = obj;"]})}),e.jsx("td",{children:"Eigenschaften → Variable"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Kopieren"}),e.jsx("td",{children:e.jsxs("code",{children:["const kopie = ","{","...obj","}"]})}),e.jsx("td",{children:"Objekt → neues Objekt"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Rest-Eigenschaften"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," a, ...rest ","}"," = obj;"]})}),e.jsx("td",{children:"Bestimmte → Rest"})]})]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen die neue Objekte erstellen"}),e.jsx("p",{children:"Eine häufige Aufgabe ist es, Funktionen zu schreiben, die basierend auf Eingabeparametern neue Objekte erstellen und zurückgeben. Das ist besonders nützlich für:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Factory-Funktionen:"})," Erstellen von Objekten nach einem Muster"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Transformations-Funktionen:"})," Ändern von Objekten und Zurückgeben neuer Instanzen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Kombinations-Funktionen:"})," Verbinden mehrerer Objekte"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Bester Stil:"})," Verwenden Sie die Spread-Syntax, um neue Objekte zu erstellen, statt das Original zu verändern. Das macht den Code vorhersehbarer und vermeidet Seiteneffekte."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Factory-Funktion: Personen erstellen"}),e.jsx(s,{filename:"factory-funktion.js",children:`
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
`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h3",{children:"Transformations-Funktion: Neues Objekt erstellen"}),e.jsx(s,{filename:"transformations-funktion.js",children:`
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
`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte vs. Arrays"}),e.jsx("p",{children:"Wann verwenden wir ein Objekt und wann ein Array? Oft werden beide kombiniert:"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Kriterium"}),e.jsx("th",{children:"Objekt"}),e.jsx("th",{children:"Array"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Struktur"}),e.jsx("td",{children:"Schlüssel-Wert-Paare"}),e.jsx("td",{children:"Geordnete Liste"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Zugriff"}),e.jsx("td",{children:e.jsx("code",{children:"obj.name"})}),e.jsx("td",{children:e.jsx("code",{children:"arr[0]"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Grösse"}),e.jsx("td",{children:"Dynamisch"}),e.jsx("td",{children:e.jsx("code",{children:"arr.length"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Iteration"}),e.jsxs("td",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"for...in"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"forEach"}),", ",e.jsx("code",{children:"map"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Beispiel"}),e.jsx("td",{children:"Person, Adresse"}),e.jsx("td",{children:"Liste von Personen"})]})]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung der Konzepte"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Konzept"}),e.jsx("th",{children:"Syntax"}),e.jsx("th",{children:"Zweck"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Objekt erstellen"}),e.jsx("td",{children:e.jsxs("code",{children:["{"," key: value ","}"]})}),e.jsx("td",{children:"Schlüssel-Wert-Paare speichern"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eigenschaft lesen"}),e.jsxs("td",{children:[e.jsx("code",{children:"obj.key"})," oder ",e.jsx("code",{children:'obj["key"]'})]}),e.jsx("td",{children:"Auf Werte zugreifen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Eigenschaft setzen"}),e.jsx("td",{children:e.jsx("code",{children:"obj.key = value"})}),e.jsx("td",{children:"Werte ändern oder hinzufügen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Iterieren"}),e.jsxs("td",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"for...in"})]}),e.jsx("td",{children:"Alle Eigenschaften durchgehen"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Spread"}),e.jsx("td",{children:e.jsxs("code",{children:["{","...obj","}"]})}),e.jsx("td",{children:"Objekt kopieren/erweitern"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dekomposition"}),e.jsx("td",{children:e.jsxs("code",{children:["const ","{"," key ","}"," = obj;"]})}),e.jsx("td",{children:"Werte extrahieren"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Factory-Funktion"}),e.jsx("td",{children:e.jsxs("code",{children:["function create() ","{"," return obj ","}"]})}),e.jsx("td",{children:"Neue Objekte erstellen"})]})]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wann welche Technik verwenden?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Punkt-Notation:"})," Wenn der Schlüssel bekannt und ein gültiger Bezeichner ist (am häufigsten verwendet)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Klammernotation:"})," Wenn der Schlüssel dynamisch ist oder Sonderzeichen enthält"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object.keys/values/entries:"})," Wenn Sie alle Eigenschaften programmatisch durchgehen müssen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread:"})," Wenn Sie ein Objekt kopieren oder erweitern möchten, ohne das Original zu verändern"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition:"})," Wenn Sie bestimmte Eigenschaften aus einem Objekt extrahieren und in Variablen speichern möchten"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Factory-Funktionen:"})," Wenn Sie mehrere Objekte nach demselben Muster erstellen möchten"]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("p",{children:["Objekte sind die grundlegende Datenstruktur in JavaScript für"," ",e.jsx("strong",{children:"benannte Eigenschaften"}),". Sie erstellen Objekte mit"," ",e.jsx("code",{children:"{"})," ",e.jsx("code",{children:"}"}),", greifen mit Punkt- oder Klammernotation darauf zu und iterieren mit"," ",e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"Object.values()"}),","," ",e.jsx("code",{children:"Object.entries()"})," oder ",e.jsx("code",{children:"for...in"}),". Die"," ",e.jsx("strong",{children:"Spread-Syntax"})," (",e.jsx("code",{children:"..."}),") ermöglicht das Kopieren und Erweitern von Objekten, während die"," ",e.jsx("strong",{children:"Dekomposition"})," das Extrahieren von Eigenschaften in Variablen erlaubt. Funktionen, die neue Objekte erstellen,"," ",e.jsx("strong",{children:"Factory-Funktionen"})," genannt, sind ein wichtiges Muster, um Objekte nach einem bestimmten Schema zu erzeugen. Spread und Dekomposition sind komplementäre Operationen und gehören zu den mächtigsten Werkzeugen im modernen JavaScript."]})]})})]})}const xi=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));function Ae(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Aufgaben: Objekte, Spread und Dekomposition"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie 10 kleine Programmieraufgaben zu JavaScript-Objekten. Sie decken die zentralen Konzepte ab:",e.jsx("strong",{children:"Objekte erstellen"}),", ",e.jsx("strong",{children:"Eigenschaften zugreifen"}),",",e.jsx("strong",{children:"über Objekte iterieren"}),", ",e.jsx("strong",{children:"Spread-Syntax"}),",",e.jsx("strong",{children:"Dekomposition"})," und ",e.jsx("strong",{children:"Factory-Funktionen"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen oder Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte durch eigenes Ausprobieren zu verstehen."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Abgabe über GitHub"}),e.jsx("p",{children:"Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie diesen Schritten:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Erstellen Sie in Ihrem Repository einen Ordner"," ",e.jsx("code",{children:"aufgaben-objekte"})]}),e.jsxs("li",{children:["Speichern Sie jede Aufgabe als eigene ",e.jsx("code",{children:".js"}),"-Datei (z.B.",e.jsx("code",{children:"01-person-erstellen.js"}),")"]}),e.jsx("li",{children:"Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht"}),e.jsxs("li",{children:["Der ",e.jsx("strong",{children:"letzte Commit"})," muss die Nachricht"," ",e.jsx("code",{children:"Arbeitsauftrag Objekte bearbeitet"})," enthalten"]})]}),e.jsx("p",{children:e.jsx("strong",{children:"Beispiel:"})}),e.jsx("pre",{children:e.jsx("code",{children:`git add .
git commit -m "Arbeitsauftrag Objekte bearbeitet"`})})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Person-Objekt erstellen
// Was ich gemacht habe: Objekt mit Schlüssel-Wert-Paaren definiert
// Was ich gelernt habe: Eigenschaften mit Punkt-Notation zugänglich
// Schwierigkeit: leicht`})}),e.jsxs("p",{children:["Sie können auch eine ",e.jsx("code",{children:"README.md"})," im Ordner"," ",e.jsx("code",{children:"aufgaben-objekte"})," erstellen, wo Sie alle Aufgaben auflisten."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Person-Objekt erstellen"}),e.jsxs("p",{children:["Erstellen Sie ein Objekt ",e.jsx("code",{children:"person"})," mit den Eigenschaften",e.jsx("code",{children:"name"})," (String), ",e.jsx("code",{children:"alter"})," (Zahl),",e.jsx("code",{children:"adresse"})," (verschachteltes Objekt mit ",e.jsx("code",{children:"strasse"}),"und ",e.jsx("code",{children:"plz"}),") und ",e.jsx("code",{children:"faecher"})," (Array mit Strings). Geben Sie das Objekt mit ",e.jsx("code",{children:"console.log"})," aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Eigenschaften mit Punkt- und Klammernotation"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"produkt"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"gewicht"})," und"," ",e.jsx("code",{children:'"erste-kauft"'})," (Schlüssel mit Bindestrich). Lesen Sie alle vier Eigenschaften — zuerst mit Punkt-Notation, anschliessend mit Klammernotation. Ändern Sie den ",e.jsx("code",{children:"preis"}),"um 10% und geben Sie das Ergebnis aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Eigenschaften hinzufügen und entfernen"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"schueler"})," mit den Eigenschaften",e.jsx("code",{children:"name"})," und ",e.jsx("code",{children:"klasse"}),". Fügen Sie dynamisch die Eigenschaften ",e.jsx("code",{children:"note"})," (Zahl) und ",e.jsx("code",{children:"telefon"}),"(String) hinzu. Entfernen Sie anschliessend die Eigenschaft"," ",e.jsx("code",{children:"klasse"})," mit ",e.jsx("code",{children:"delete"}),". Prüfen Sie mit"," ",e.jsx("code",{children:"in"}),", ob ",e.jsx("code",{children:"klasse"})," noch existiert."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Object.keys/values/entries verwenden"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"person"})," mit mindestens vier Eigenschaften. Verwenden Sie ",e.jsx("code",{children:"Object.keys()"}),",",e.jsx("code",{children:"Object.values()"})," und ",e.jsx("code",{children:"Object.entries()"}),", um die Schlüssel, Werte und Paare zu erhalten. Geben Sie jedes Ergebnis aus. Verwenden Sie ",e.jsx("code",{children:"forEach"})," über ",e.jsx("code",{children:"Object.entries()"}),", um ",e.jsx("code",{children:'"Schlüssel: Wert"'})," auszugeben."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: for...in Schleife"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"warenkorb"})," mit mindestens fünf Eigenschaften (jeweils Artikelname als Schlüssel und Preis als Wert). Verwenden Sie eine ",e.jsx("code",{children:"for...in"}),"-Schleife, um alle Artikel und Preise auszugeben. Berechnen Sie gleichzeitig die Gesamtsumme."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 6: Spread — Objekt kopieren und erweitern"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"person"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"alter"})," und ",e.jsx("code",{children:"stadt"}),". Erstellen Sie mit der Spread-Syntax eine Kopie ",e.jsx("code",{children:"personNeu"}),". Fügen Sie in der Kopie die neue Eigenschaft ",e.jsx("code",{children:"beruf"})," hinzu und ändern Sie den ",e.jsx("code",{children:"alter"})," um 1. Prüfen Sie, dass das Original"," ",e.jsx("code",{children:"person"})," unverändert bleibt."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 7: Spread — Objekte verbinden"}),e.jsxs("p",{children:["Definieren Sie zwei Objekte: ",e.jsx("code",{children:"adresse"})," (mit"," ",e.jsx("code",{children:"strasse"}),", ",e.jsx("code",{children:"plz"}),", ",e.jsx("code",{children:"ort"}),") und"," ",e.jsx("code",{children:"kontakt"})," (mit ",e.jsx("code",{children:"email"}),", ",e.jsx("code",{children:"telefon"}),"). Verbinden Sie beide Objekte mit der Spread-Syntax zu einem neuen Objekt ",e.jsx("code",{children:"profil"}),". Überschreiben Sie dabei den ",e.jsx("code",{children:"ort"}),"mit einem neuen Wert. Geben Sie das Resultat aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 8: Dekomposition — Eigenschaften extrahieren"}),e.jsxs("p",{children:["Definieren Sie ein Objekt ",e.jsx("code",{children:"produkt"})," mit den Eigenschaften",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"gewicht"})," und"," ",e.jsx("code",{children:"kategorie"}),". Verwenden Sie Dekomposition, um ",e.jsx("code",{children:"name"}),"und ",e.jsx("code",{children:"preis"})," direkt in Variablen zu extrahieren. Extrahieren Sie anschliessend nur ",e.jsx("code",{children:"kategorie"})," und speichern Sie den Rest in ",e.jsx("code",{children:"rest"}),". Geben Sie alle Ergebnisse aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 9: Factory-Funktion — Objekte erstellen"}),e.jsxs("p",{children:["Schreiben Sie eine Factory-Funktion ",e.jsx("code",{children:"erstelleProdukt(name, preis, kategorie)"}),", die ein Produkt-Objekt zurückgibt mit den Eigenschaften"," ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"preis"}),", ",e.jsx("code",{children:"kategorie"}),","," ",e.jsx("code",{children:"mwst"})," (immer 8.1%) und ",e.jsx("code",{children:"preisMitMwst"})," (berechnete Funktion, die den Preis mit MwSt. zurückgibt). Erstellen Sie drei verschiedene Produkte und geben Sie sie aus."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 10: Kombinierte Aufgabe — Datenverwaltung"}),e.jsxs("p",{children:["Definieren Sie ein Array ",e.jsx("code",{children:"personen"})," mit mindestens vier Personen-Objekten (jeweils ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"alter"}),","," ",e.jsx("code",{children:"stadt"}),"). Schreiben Sie eine Funktion"," ",e.jsx("code",{children:"erwachseneErstellen(pers)"}),", die nur die Personen ab"," ",e.jsx("strong",{children:"18"})," Jahren auswählt und für jede ein neues Objekt erstellt mit:",e.jsx("br",{}),e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"stadt"})," und"," ",e.jsx("code",{children:"status"})," (",e.jsx("code",{children:'"Erwachsen"'})," oder"," ",e.jsx("code",{children:'"Minderjährig"'}),"). Verwenden Sie dabei ",e.jsx("code",{children:"filter"}),","," ",e.jsx("code",{children:"map"})," und die Spread-Syntax."]})]})]})]})}const gi=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"}));function Ee(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Repetition: Funktionen und Objekte"}),e.jsx("p",{children:"Wiederholung der wichtigsten Konzepte aus Woche 2: Funktionen, Parameter, Rückgabewerte, Callbacks, Objekte, Spread und Dekomposition."}),e.jsxs("div",{className:"title-slide",children:[e.jsx("h1",{children:"JavaScript"}),e.jsx("h2",{children:"Repetition"}),e.jsx("p",{children:"Funktionen · Callbacks · Objekte · Spread · Dekomposition"})]}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen"}),e.jsxs("p",{children:["Eine Funktion ist ein Stück Code, das einen ",e.jsx("strong",{children:"Namen"})," ","hat und immer wieder aufgerufen werden kann."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Parameter"})," — die Werte, die hineingehen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rumpf"})," — was die Funktion tut"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"return"})," — der Wert, der herauskommt"]})]}),e.jsxs("p",{children:["Merksatz: Eine Funktion ist eine ",e.jsx("em",{children:"Maschine"}),". Oben kommt etwas hinein, unten kommt ein Resultat heraus."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen — Code testen"}),e.jsx(s,{filename:"funktionen.js",children:`// Funktionsdeklaration
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
console.log(nichts()); // undefined`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Funktionen als Werte (Callbacks)"}),e.jsxs("p",{children:["In JavaScript sind Funktionen ganz normale Werte. Man kann sie in Variablen speichern und an andere Funktionen übergeben. Eine Funktion, die man übergibt, heisst ",e.jsx("strong",{children:"Callback"}),"."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"forEach"})," — für jedes Element etwas tun"]}),e.jsxs("li",{children:[e.jsx("code",{children:"map"})," — jedes Element umwandeln (neue Liste)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"filter"})," — Elemente aussortieren (neue Liste)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"reduce"})," — alles zu einem Wert zusammenfassen"]})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Callbacks — Code testen"}),e.jsx(s,{filename:"callbacks.js",children:`const zahlen = [4, 8, 15, 16, 23, 42];

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
console.log(zahlen); // [4, 8, 15, 16, 23, 42]`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte"}),e.jsxs("p",{children:["Ein Objekt speichert Daten als ",e.jsx("strong",{children:"Schlüssel-Wert-Paare"}),". Damit gehören zusammengehörende Informationen in ",e.jsx("em",{children:"eine"})," ","Variable."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Erstellen mit ",e.jsx("code",{children:"{ }"})]}),e.jsxs("li",{children:["Zugriff mit ",e.jsx("code",{children:"objekt.schluessel"})," oder"," ",e.jsx("code",{children:'objekt["schluessel"]'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Object.keys()"}),", ",e.jsx("code",{children:"Object.values()"}),","," ",e.jsx("code",{children:"Object.entries()"})]}),e.jsx("li",{children:"Objekte können Objekte und Arrays enthalten (verschachtelt)"})]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Objekte — Code testen"}),e.jsx(s,{filename:"objekte.js",children:`const person = {
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
});`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread und Dekomposition"}),e.jsx("p",{children:"Zwei sehr praktische Schreibweisen, die uns diese Woche bei den Algorithmen begleiten:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Spread"})," ",e.jsx("code",{children:"..."})," — packt den Inhalt aus: kopieren, zusammenfügen, erweitern"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition"})," — holt Werte direkt in Variablen"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig für Algorithmen:"})," Mit"," ",e.jsx("code",{children:"const kopie = [...liste]"})," arbeiten wir auf einer Kopie und verändern das Original nicht."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Spread und Dekomposition — Code testen"}),e.jsx(s,{filename:"spread-dekomposition.js",children:`// Arrays kopieren und verbinden
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
console.log(liste); // [3, 5, 8]`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Aufwärmen — alles zusammen"}),e.jsx("p",{children:"Diese kleine Funktion braucht alles, was wir wiederholt haben. Sie ist der Einstieg in die Algorithmen dieser Woche."}),e.jsx(s,{filename:"aufwaermen.js",children:`const schueler = [
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

console.log(besteNote(schueler));`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Zusammenfassung"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Funktionen:"})," Parameter hinein, ",e.jsx("code",{children:"return"})," ","heraus"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Arrow-Funktionen:"})," ",e.jsx("code",{children:"(x) => x * x"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Callbacks:"})," forEach, map, filter, reduce"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objekte:"})," Schlüssel-Wert-Paare, verschachtelbar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spread:"})," ",e.jsx("code",{children:"[...liste]"}),","," ",e.jsx("code",{children:"{ ...objekt }"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dekomposition:"})," ",e.jsxs("code",{children:["const ","{ name }"," = person"]}),","," ",e.jsx("code",{children:"[a, b] = [b, a]"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Nächster Schritt:"})," Wir bauen daraus Algorithmen — Rezepte, die ein Problem Schritt für Schritt lösen."]})]})})]})}const mi=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"})),ye="_container_3h59p_1",Oe="_title_3h59p_9",De="_inputRow_3h59p_17",Be="_inputLabel_3h59p_26",Ne="_input_3h59p_17",We="_smallButton_3h59p_47",Pe="_stage_3h59p_63",Fe="_bars_3h59p_69",Me="_barSlot_3h59p_77",Te="_bar_3h59p_69",_e="_barValue_3h59p_101",Ve="_barIndex_3h59p_108",Ce="_compare_3h59p_115",Le="_swap_3h59p_119",Ze="_sorted_3h59p_123",Ie="_pivot_3h59p_127",Ke="_found_3h59p_131",Je="_dimmed_3h59p_135",He="_description_3h59p_141",Re="_stepBadge_3h59p_148",Ge="_vars_3h59p_158",$e="_varChip_3h59p_165",Ue="_controls_3h59p_175",qe="_button_3h59p_182",Qe="_play_3h59p_201",Xe="_pause_3h59p_207",Ye="_slider_3h59p_213",en="_legend_3h59p_221",nn="_legendItem_3h59p_230",sn="_dot_3h59p_236",rn="_dimmedDot_3h59p_243",ln="_code_3h59p_250",tn="_codeLine_3h59p_261",cn="_activeLine_3h59p_268",dn="_lineNo_3h59p_274",u={container:ye,title:Oe,inputRow:De,inputLabel:Be,input:Ne,smallButton:We,stage:Pe,bars:Fe,barSlot:Me,bar:Te,barValue:_e,barIndex:Ve,compare:Ce,swap:Le,sorted:Ze,pivot:Ie,found:Ke,dimmed:Je,description:He,stepBadge:Re,vars:Ge,varChip:$e,controls:Ue,button:qe,play:Qe,pause:Xe,slider:Ye,legend:en,legendItem:nn,dot:sn,dimmedDot:rn,code:ln,codeLine:tn,activeLine:cn,lineNo:dn};function y({initialArray:r=[5,3,8,1,9,2],generate:n,title:c,code:t=null,editable:d=!0,speed:a=700,legend:m="sort"}){const[h,o]=p.useState(r),[A,w]=p.useState(r.join(", ")),[g,f]=p.useState(0),[D,B]=p.useState(!1),T=p.useRef(null),N=p.useMemo(()=>{try{const x=n(h);return Array.isArray(x)&&x.length>0?x:[{array:h,description:"Keine Schritte"}]}catch{return[{array:h,description:"Fehler beim Erzeugen der Schritte"}]}},[h,n]),z=N.length,S=N[Math.min(g,z-1)]??{},_=S.array??h,G=Math.max(1,..._.map(x=>Math.abs(Number(x)||0))),O=p.useCallback(()=>B(!1),[]);p.useEffect(()=>{if(D)return T.current=setInterval(()=>{f(x=>x>=z-1?(B(!1),x):x+1)},a),()=>clearInterval(T.current)},[D,a,z]),p.useEffect(()=>{f(0),B(!1)},[N]);const W=()=>{const x=A.split(",").map(b=>Number.parseInt(b.trim(),10)).filter(b=>!Number.isNaN(b));if(x.length<2||x.length>12){w(h.join(", "));return}o(x)},$=()=>{const x=[...h];for(let b=x.length-1;b>0;b--){const P=Math.floor(Math.random()*(b+1));[x[b],x[P]]=[x[P],x[b]]}o(x),w(x.join(", "))},U=x=>{const b=[u.bar];return!S.range||x>=S.range[0]&&x<=S.range[1]||b.push(u.dimmed),S.sorted?.includes(x)&&b.push(u.sorted),S.compare?.includes(x)&&b.push(u.compare),S.swap?.includes(x)&&b.push(u.swap),S.pivot===x&&b.push(u.pivot),S.found===x&&b.push(u.found),b.join(" ")},V=t?t.replace(/^\n/,"").split(`
`):null;return e.jsxs("div",{className:u.container,children:[c?e.jsx("div",{className:u.title,children:c}):null,d?e.jsxs("div",{className:u.inputRow,children:[e.jsx("label",{className:u.inputLabel,htmlFor:`${c}-input`,children:"Eigene Zahlen (mit Komma getrennt):"}),e.jsx("input",{id:`${c}-input`,className:u.input,value:A,onChange:x=>w(x.target.value),onBlur:W,onKeyDown:x=>x.key==="Enter"&&W()}),e.jsx("button",{type:"button",className:u.smallButton,onClick:W,children:"Übernehmen"}),e.jsx("button",{type:"button",className:u.smallButton,onClick:$,children:"Mischen"})]}):null,e.jsx("div",{className:u.stage,children:e.jsx("div",{className:u.bars,children:_.map((x,b)=>e.jsxs("div",{className:u.barSlot,children:[e.jsx("div",{className:U(b),style:{height:`${Math.max(8,Math.abs(x)/G*100)}%`},children:e.jsx("span",{className:u.barValue,children:x})}),e.jsx("span",{className:u.barIndex,children:b})]},b))})}),e.jsxs("div",{className:u.description,children:[e.jsxs("span",{className:u.stepBadge,children:["Schritt ",Math.min(g+1,z)," / ",z]}),S.description??""]}),S.vars&&Object.keys(S.vars).length>0?e.jsx("div",{className:u.vars,children:Object.entries(S.vars).map(([x,b])=>e.jsxs("span",{className:u.varChip,children:[e.jsx("strong",{children:x})," = ",String(b)]},x))}):null,e.jsxs("div",{className:u.controls,children:[e.jsx("button",{type:"button",className:u.button,onClick:()=>{O(),f(0)},disabled:g===0,children:"⏮ Anfang"}),e.jsx("button",{type:"button",className:u.button,onClick:()=>{O(),f(x=>Math.max(0,x-1))},disabled:g===0,children:"◀ Zurück"}),e.jsx("button",{type:"button",className:`${u.button} ${D?u.pause:u.play}`,onClick:()=>B(x=>!x),disabled:g>=z-1,children:D?"⏸ Pause":"▶ Abspielen"}),e.jsx("button",{type:"button",className:u.button,onClick:()=>{O(),f(x=>Math.min(z-1,x+1))},disabled:g>=z-1,children:"Weiter ▶"}),e.jsx("button",{type:"button",className:u.button,onClick:()=>{O(),f(z-1)},disabled:g>=z-1,children:"Ende ⏭"})]}),e.jsx("input",{type:"range",className:u.slider,min:0,max:Math.max(0,z-1),value:Math.min(g,z-1),onChange:x=>{O(),f(Number(x.target.value))},"aria-label":"Schritt wählen"}),e.jsx("div",{className:u.legend,children:m==="search"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.compare}`})," geprüft"]}),e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.pivot}`})," Mitte"]}),e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.found}`})," gefunden"]}),e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.dimmedDot}`})," ausgeschlossen"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.compare}`})," Vergleich"]}),e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.swap}`})," Tausch"]}),e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.pivot}`})," Pivot"]}),e.jsxs("span",{className:u.legendItem,children:[e.jsx("i",{className:`${u.dot} ${u.sorted}`})," fertig"]})]})}),V?e.jsx("pre",{className:u.code,children:V.map((x,b)=>e.jsxs("div",{className:S.line===b+1?`${u.codeLine} ${u.activeLine}`:u.codeLine,children:[e.jsx("span",{className:u.lineNo,children:b+1}),e.jsx("span",{children:x})]},b))}):null]})}const j=r=>r.map(n=>n),on=`function bubbleSort(liste) {
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
}`;function hn(r){const n=j(r),c=n.length,t=[],d=[];let a=0,m=0;t.push({array:j(n),description:"Start: Die Liste ist noch unsortiert.",line:1,vars:{länge:c}});for(let h=0;h<c-1;h++){t.push({array:j(n),sorted:j(d),description:`Durchlauf ${h+1}: Das grösste noch unsortierte Element wandert ganz nach rechts.`,line:2,vars:{i:h,Vergleiche:a,Tausche:m}});for(let o=0;o<c-1-h;o++)a++,t.push({array:j(n),compare:[o,o+1],sorted:j(d),description:`Vergleiche liste[${o}] = ${n[o]} mit liste[${o+1}] = ${n[o+1]}.`,line:4,vars:{i:h,j:o,Vergleiche:a,Tausche:m}}),n[o]>n[o+1]?(m++,t.push({array:j(n),swap:[o,o+1],sorted:j(d),description:`${n[o]} > ${n[o+1]} → die beiden werden getauscht.`,line:6,vars:{i:h,j:o,Vergleiche:a,Tausche:m}}),[n[o],n[o+1]]=[n[o+1],n[o]],t.push({array:j(n),swap:[o,o+1],sorted:j(d),description:"Getauscht. Der grössere Wert ist eine Position weiter rechts.",line:7,vars:{i:h,j:o,Vergleiche:a,Tausche:m}})):t.push({array:j(n),compare:[o,o+1],sorted:j(d),description:`${n[o]} ≤ ${n[o+1]} → kein Tausch nötig.`,line:4,vars:{i:h,j:o,Vergleiche:a,Tausche:m}});d.push(c-1-h),t.push({array:j(n),sorted:j(d),description:`Position ${c-1-h} ist endgültig richtig: ${n[c-1-h]} ist an seinem Platz.`,line:9,vars:{i:h,Vergleiche:a,Tausche:m}})}return d.push(0),t.push({array:j(n),sorted:n.map((h,o)=>o),description:`Fertig! Die Liste ist sortiert. (${a} Vergleiche, ${m} Tausche)`,line:11,vars:{Vergleiche:a,Tausche:m}}),t}const an=`function quickSort(liste, links = 0, rechts = liste.length - 1) {
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
}`;function un(r){const n=j(r),c=[],t=[];let d=0,a=0;c.push({array:j(n),description:"Start: Wir sortieren die ganze Liste.",line:1,vars:{länge:n.length}});const m=(h,o,A)=>{if(h>o)return;if(h===o){t.push(h),c.push({array:j(n),sorted:j(t),range:[h,o],description:`Nur ein Element übrig (Position ${h}) → schon sortiert.`,line:2,vars:{links:h,rechts:o,Tiefe:A}});return}c.push({array:j(n),sorted:j(t),range:[h,o],pivot:o,description:`Neuer Bereich [${h} … ${o}]. Pivot ist das letzte Element: ${n[o]}.`,line:4,vars:{links:h,rechts:o,Pivot:n[o],Tiefe:A}});const w=n[o];let g=h;for(let f=h;f<o;f++)d++,c.push({array:j(n),sorted:j(t),range:[h,o],pivot:o,compare:[f],description:`Ist liste[${f}] = ${n[f]} kleiner als der Pivot ${w}?`,line:8,vars:{links:h,rechts:o,i:g,j:f,Pivot:w,Vergleiche:d}}),n[f]<w?(a++,c.push({array:j(n),sorted:j(t),range:[h,o],pivot:o,swap:[g,f],description:`Ja → ${n[f]} kommt in den linken Teil: tausche Position ${g} und ${f}.`,line:9,vars:{links:h,rechts:o,i:g,j:f,Pivot:w,Tausche:a}}),[n[g],n[f]]=[n[f],n[g]],g++,c.push({array:j(n),sorted:j(t),range:[h,o],pivot:o,compare:[g-1],description:`Die Grenze des linken Teils rückt weiter: i = ${g}.`,line:10,vars:{links:h,rechts:o,i:g,j:f,Pivot:w,Tausche:a}})):c.push({array:j(n),sorted:j(t),range:[h,o],pivot:o,compare:[f],description:`Nein → ${n[f]} bleibt im rechten Teil.`,line:8,vars:{links:h,rechts:o,i:g,j:f,Pivot:w,Vergleiche:d}});a++,c.push({array:j(n),sorted:j(t),range:[h,o],swap:[g,o],description:`Der Pivot ${w} wird an seine endgültige Position ${g} getauscht.`,line:14,vars:{links:h,rechts:o,i:g,Pivot:w,Tausche:a}}),[n[g],n[o]]=[n[o],n[g]],t.push(g),c.push({array:j(n),sorted:j(t),range:[h,o],description:`Position ${g} ist fertig. Links davon sind alle kleiner, rechts alle grösser.`,line:14,vars:{links:h,rechts:o,i:g,Pivot:w}}),c.push({array:j(n),sorted:j(t),range:[h,Math.max(h,g-1)],description:`Jetzt der linke Teil [${h} … ${g-1}] (rekursiver Aufruf).`,line:16,vars:{links:h,rechts:g-1,Tiefe:A+1}}),m(h,g-1,A+1),c.push({array:j(n),sorted:j(t),range:[Math.min(g+1,o),o],description:`Jetzt der rechte Teil [${g+1} … ${o}] (rekursiver Aufruf).`,line:17,vars:{links:g+1,rechts:o,Tiefe:A+1}}),m(g+1,o,A+1)};return m(0,n.length-1,0),c.push({array:j(n),sorted:n.map((h,o)=>o),description:`Fertig! Die Liste ist sortiert. (${d} Vergleiche, ${a} Tausche)`,line:18,vars:{Vergleiche:d,Tausche:a}}),c}const jn=`function lineareSuche(liste, gesucht) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === gesucht) {
      return i;
    }
  }
  return -1;
}`;function xn(r){return n=>{const c=j(n),t=[{array:j(c),description:`Wir suchen die Zahl ${r} und starten ganz links.`,line:1,vars:{gesucht:r}}];for(let d=0;d<c.length;d++){const a=c[d]===r;if(t.push({array:j(c),compare:a?[]:[d],found:a?d:void 0,description:a?`Treffer! liste[${d}] = ${c[d]} ist die gesuchte Zahl. Rückgabe: ${d}.`:`liste[${d}] = ${c[d]} ist nicht ${r} → weiter nach rechts.`,line:a?4:3,vars:{i:d,gesucht:r,Vergleiche:d+1}}),a)return t}return t.push({array:j(c),description:`${r} kommt in der Liste nicht vor. Rückgabe: -1.`,line:7,vars:{gesucht:r,Vergleiche:c.length}}),t}}const gn=`function binaereSuche(liste, gesucht) {
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
}`;function mn(r){return n=>{const c=j(n).sort((h,o)=>h-o),t=[{array:j(c),description:`Die Liste ist sortiert. Wir suchen ${r} und halbieren den Bereich immer wieder.`,line:1,vars:{gesucht:r}}];let d=0,a=c.length-1,m=0;for(;d<=a;){m++;const h=Math.floor((d+a)/2);if(t.push({array:j(c),range:[d,a],pivot:h,description:`Bereich [${d} … ${a}] → Mitte ist Position ${h} mit dem Wert ${c[h]}.`,line:6,vars:{links:d,rechts:a,mitte:h,Schritte:m}}),c[h]===r)return t.push({array:j(c),range:[d,a],found:h,description:`Treffer! ${r} steht an Position ${h}. Gefunden in ${m} Schritten.`,line:8,vars:{mitte:h,Schritte:m}}),t;c[h]<r?(d=h+1,t.push({array:j(c),range:[d,a],description:`${c[h]} < ${r} → die linke Hälfte fällt weg.`,line:10,vars:{links:d,rechts:a,Schritte:m}})):(a=h-1,t.push({array:j(c),range:[d,Math.max(d,a)],description:`${c[h]} > ${r} → die rechte Hälfte fällt weg.`,line:12,vars:{links:d,rechts:a,Schritte:m}}))}return t.push({array:j(c),description:`${r} kommt nicht vor. Rückgabe: -1 (nach ${m} Schritten).`,line:15,vars:{Schritte:m}}),t}}const bn=`function maximum(liste) {
  let groesstes = liste[0];

  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > groesstes) {
      groesstes = liste[i];
    }
  }
  return groesstes;
}`;function fn(r){const n=j(r),c=[{array:j(n),found:0,description:`Wir merken uns das erste Element als bisher grösstes: ${n[0]}.`,line:2,vars:{grösstes:n[0],"bester Index":0}}];let t=0;for(let d=1;d<n.length;d++)c.push({array:j(n),compare:[d],found:t,description:`Ist liste[${d}] = ${n[d]} grösser als ${n[t]}?`,line:5,vars:{i:d,grösstes:n[t]}}),n[d]>n[t]?(t=d,c.push({array:j(n),found:t,description:`Ja → neues Maximum: ${n[t]}.`,line:6,vars:{i:d,grösstes:n[t],"bester Index":t}})):c.push({array:j(n),found:t,description:`Nein → ${n[t]} bleibt das Maximum.`,line:5,vars:{i:d,grösstes:n[t]}});return c.push({array:j(n),found:t,description:`Das Maximum ist ${n[t]} (Position ${t}).`,line:9,vars:{grösstes:n[t]}}),c}const pn=`function umkehren(liste) {
  let links = 0;
  let rechts = liste.length - 1;

  while (links < rechts) {
    [liste[links], liste[rechts]] = [liste[rechts], liste[links]];
    links++;
    rechts--;
  }
  return liste;
}`;function kn(r){const n=j(r),c=[{array:j(n),description:"Zwei Zeiger: einer ganz links, einer ganz rechts.",line:2,vars:{links:0,rechts:n.length-1}}];let t=0,d=n.length-1;for(;t<d;)c.push({array:j(n),swap:[t,d],description:`Tausche Position ${t} (${n[t]}) mit Position ${d} (${n[d]}).`,line:6,vars:{links:t,rechts:d}}),[n[t],n[d]]=[n[d],n[t]],c.push({array:j(n),swap:[t,d],description:"Getauscht. Beide Zeiger rücken einen Schritt nach innen.",line:7,vars:{links:t+1,rechts:d-1}}),t++,d--;return c.push({array:j(n),sorted:n.map((a,m)=>m),description:"Die Zeiger haben sich getroffen — die Liste ist umgekehrt.",line:10,vars:{links:t,rechts:d}}),c}const Sn=xn(9),wn=mn(9);function zn(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Einfache Standard-Algorithmen"}),e.jsxs("p",{children:["Ein ",e.jsx("strong",{children:"Algorithmus"})," ist eine eindeutige Handlungsvorschrift, die ein Problem in endlich vielen Schritten löst — ein Rezept. In fast jedem Programm tauchen dabei dieselben kleinen Bausteine immer wieder auf. Wer diese"," ",e.jsx("strong",{children:"Muster"})," kennt, löst neue Probleme viel schneller — man erkennt: «Ah, das ist ja im Grunde eine Suche.»"]}),e.jsxs("p",{children:["Wir starten mit den einfachen Mustern. Erst danach nehmen wir uns mit ",e.jsx("strong",{children:"Bubble Sort"})," und ",e.jsx("strong",{children:"Quicksort"})," die anspruchsvolleren Sortieralgorithmen vor."]}),e.jsx("h3",{children:"Die sechs Muster dieser Seite"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Suchen"})," — lineare Suche und binäre Suche"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extremwert finden"})," — Maximum und Minimum"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Akkumulieren"})," — Summe, Durchschnitt, Zählen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zwei Zeiger"})," — umkehren, Palindrom prüfen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Häufigkeiten zählen"})," — mit einem Objekt als Zähler-Tabelle"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Vergleichen und normalisieren"})," — Anagramme erkennen"]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"1a. Lineare Suche"}),e.jsx("p",{children:"Die einfachste Suche überhaupt: von vorne nach hinten durchgehen und jedes Element anschauen, bis man das gesuchte findet. Wie wenn man eine unsortierte Schublade durchwühlt."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Funktioniert immer — die Liste muss nicht sortiert sein."}),e.jsxs("li",{children:["Gibt üblicherweise den ",e.jsx("strong",{children:"Index"})," zurück, oder"," ",e.jsx("code",{children:"-1"}),", wenn nichts gefunden wurde."]}),e.jsxs("li",{children:["Im schlechtesten Fall müssen alle ",e.jsx("code",{children:"n"})," Elemente geprüft werden → ",e.jsx("code",{children:"O(n)"}),"."]})]})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Lineare Suche — Visualisierung"}),e.jsxs("p",{children:["Gesucht wird die ",e.jsx("strong",{children:"9"}),". Gelb heisst «wird gerade geprüft», türkis heisst «gefunden»."]}),e.jsx(y,{title:"Lineare Suche nach der 9",initialArray:[4,7,2,9,1,5],generate:Sn,code:jn,legend:"search"})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Lineare Suche — Code"}),e.jsx(s,{filename:"lineare-suche.js",children:`function lineareSuche(liste, gesucht) {
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
console.log(zahlen.find((z) => z > 5)); // 7`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"1b. Binäre Suche"}),e.jsxs("p",{children:["Wenn die Liste ",e.jsx("strong",{children:"sortiert"})," ist, geht es viel schneller. Wir schauen in die Mitte und können danach die Hälfte der Liste sofort ausschliessen — wie beim Nachschlagen im Wörterbuch oder beim Zahlenraten «höher oder tiefer?»."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Warum das so stark ist:"})," Bei 1'000'000 Einträgen braucht die lineare Suche bis zu 1'000'000 Vergleiche, die binäre Suche nur ",e.jsx("strong",{children:"20"}),". Jeder Schritt halbiert die Möglichkeiten."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Anzahl Elemente"}),e.jsx("th",{children:"Lineare Suche"}),e.jsx("th",{children:"Binäre Suche"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"10"}),e.jsx("td",{children:"10"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'000"}),e.jsx("td",{children:"1'000"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'000'000"}),e.jsx("td",{children:"1'000'000"}),e.jsx("td",{children:"20"})]})]})]})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Binäre Suche — Visualisierung"}),e.jsxs("p",{children:["Gesucht wird wieder die ",e.jsx("strong",{children:"9"}),". Die Liste wird automatisch sortiert. Lila ist die geprüfte Mitte, ausgegraute Balken sind bereits ausgeschlossen."]}),e.jsx(y,{title:"Binäre Suche nach der 9",initialArray:[1,3,4,6,8,9,11,14],generate:wn,code:gn,legend:"search"})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Binäre Suche — Code"}),e.jsx(s,{filename:"binaere-suche.js",children:`function binaereSuche(liste, gesucht) {
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

// Achtung: bei unsortierten Listen liefert sie falsche Resultate!`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"2. Extremwert finden (Maximum / Minimum)"}),e.jsx("p",{children:"Das Muster: Wir merken uns einen «bisherigen Champion» und vergleichen ihn mit jedem weiteren Element. Ist ein Element besser, wird es der neue Champion."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Als Startwert nehmen wir das"," ",e.jsx("em",{children:"erste Element"})," der Liste — nicht 0! Sonst funktioniert der Algorithmus bei negativen Zahlen nicht."]})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Maximum — Visualisierung"}),e.jsx(y,{title:"Das grösste Element finden",initialArray:[3,8,2,9,4,6],generate:fn,code:bn,legend:"search"})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Maximum — Code"}),e.jsx(s,{filename:"maximum.js",children:`function maximum(liste) {
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
console.log(beste);`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"3. Akkumulieren (Summe, Durchschnitt, Zählen)"}),e.jsxs("p",{children:["Das wohl häufigste Muster überhaupt: Wir starten mit einem"," ",e.jsx("strong",{children:"Sammelbehälter"})," (meist ",e.jsx("code",{children:"0"})," oder eine leere Liste) und fügen bei jedem Element etwas hinzu."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Summe:"})," Behälter = 0, jedes Element addieren"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Durchschnitt:"})," Summe geteilt durch Anzahl"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zählen:"})," Behälter = 0, bei jedem Treffer +1"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Produkt:"})," Behälter = 1, jedes Element multiplizieren"]})]}),e.jsxs("p",{children:["Laufzeit: immer ",e.jsx("code",{children:"O(n)"})," — jedes Element wird genau einmal angeschaut."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Akkumulieren — Code"}),e.jsx(s,{filename:"akkumulieren.js",children:`const noten = [5.5, 4, 6, 3.5, 4.5, 5];

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
console.log("Ungenügende:", noten.filter((n) => n < 4).length);`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"4. Zwei Zeiger (umkehren, Palindrom)"}),e.jsxs("p",{children:["Statt nur einen Index zu verwenden, arbeiten wir mit"," ",e.jsx("strong",{children:"zwei"}),": einer startet links, einer rechts. Beide bewegen sich aufeinander zu, bis sie sich treffen. Damit ist man in der Mitte fertig — man braucht nur ",e.jsx("code",{children:"n / 2"})," Durchgänge."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Umkehren:"})," die beiden Elemente tauschen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Palindrom prüfen:"})," die beiden Elemente vergleichen"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Paar mit Zielsumme suchen"})," (in sortierter Liste)"]})]})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Umkehren — Visualisierung"}),e.jsx(y,{title:"Liste umkehren mit zwei Zeigern",initialArray:[1,2,3,4,5,6],generate:kn,code:pn,legend:"sort"})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Umkehren und Palindrom — Code"}),e.jsx(s,{filename:"zwei-zeiger.js",children:`// Liste umkehren
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
console.log(istPalindrom("Informatik"));               // false`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"5. Häufigkeiten zählen"}),e.jsxs("p",{children:["Hier zahlt sich Woche 2 richtig aus: Wir benutzen ein"," ",e.jsx("strong",{children:"Objekt als Zähler-Tabelle"}),". Der Schlüssel ist das, was wir zählen, der Wert ist die Anzahl."]}),e.jsxs("p",{children:["Dieses Muster braucht man ständig: Wortstatistiken, Stimmenzählen, Duplikate finden, Anagramme prüfen. Und es ist ",e.jsx("code",{children:"O(n)"})," — man muss die Daten nur ein einziges Mal durchgehen."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Häufigkeiten — Code"}),e.jsx(s,{filename:"haeufigkeiten.js",children:`function haeufigkeiten(liste) {
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
console.log([...new Set(farben)]); // ["rot", "blau", "grün"]`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"6. Anagramme erkennen"}),e.jsxs("p",{children:["Zwei Wörter sind ",e.jsx("strong",{children:"Anagramme"}),", wenn sie aus genau denselben Buchstaben bestehen — nur in anderer Reihenfolge. Beispiele: ",e.jsx("code",{children:"Lager"})," / ",e.jsx("code",{children:"Regal"}),","," ",e.jsx("code",{children:"Ampel"})," / ",e.jsx("code",{children:"Lampe"}),"."]}),e.jsx("p",{children:"Es gibt zwei schöne Lösungswege, und beide benutzen etwas, das wir schon kennen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Sortieren:"})," Beide Wörter buchstabenweise sortieren und vergleichen. Kurz und elegant, Laufzeit"," ",e.jsx("code",{children:"O(n · log n)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zählen:"})," Die Buchstabenhäufigkeiten beider Wörter vergleichen. Etwas länger, aber schneller: ",e.jsx("code",{children:"O(n)"}),"."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig ist das Normalisieren"})," vorher: Grossschreibung und Leerzeichen sollen keine Rolle spielen."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Anagramme — Code"}),e.jsx(s,{filename:"anagramme.js",children:`// Hilfsfunktion: normalisieren
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
console.log(istAnagramm2("Informatik", "Informatiker"));`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Übersicht der Muster"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Muster"}),e.jsx("th",{children:"Typische Frage"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lineare Suche"}),e.jsx("td",{children:"Kommt X vor? Wo?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binäre Suche"}),e.jsx("td",{children:"Wo ist X in einer sortierten Liste?"}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Extremwert"}),e.jsx("td",{children:"Was ist der grösste / kleinste Wert?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Akkumulieren"}),e.jsx("td",{children:"Wie viel insgesamt? Wie viele davon?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Zwei Zeiger"}),e.jsx("td",{children:"Umkehren, Palindrom, Paare finden"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Häufigkeiten zählen"}),e.jsx("td",{children:"Wie oft kommt was vor?"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Sortieren (nächste Seiten)"}),e.jsx("td",{children:"Reihenfolge herstellen"}),e.jsxs("td",{children:[e.jsx("code",{children:"O(n²)"})," bzw. ",e.jsx("code",{children:"O(n · log n)"})]})]})]})]}),e.jsxs("p",{children:["Auf den nächsten Seiten geht es weiter mit den"," ",e.jsx("strong",{children:"Sortieralgorithmen"}),". Ganz am Schluss schauen wir uns an, was diese ",e.jsx("code",{children:"O(...)"}),"-Angaben genau bedeuten und warum sie so wichtig sind."]})]})})]})}const bi=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"}));function vn(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Sortieren: Bubble Sort"}),e.jsxs("p",{children:["Sortieren ist eine der häufigsten Aufgaben in der Informatik. Eine sortierte Liste lässt sich viel schneller durchsuchen, besser darstellen und leichter vergleichen. Wir beginnen mit dem einfachsten und bekanntesten Sortierverfahren:"," ",e.jsx("strong",{children:"Bubble Sort"}),"."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können die Idee von Bubble Sort in eigenen Worten erklären."}),e.jsx("li",{children:"Sie können Bubble Sort für eine kleine Liste von Hand durchführen."}),e.jsx("li",{children:"Sie verstehen den JavaScript-Code Zeile für Zeile."}),e.jsxs("li",{children:["Sie wissen, warum Bubble Sort ",e.jsx("code",{children:"O(n²)"})," Vergleiche braucht."]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee"}),e.jsxs("p",{children:["Bubble Sort vergleicht immer ",e.jsx("strong",{children:"zwei Nachbarn"}),". Steht der grössere Wert links, werden die beiden getauscht. So wandert die grösste Zahl bei jedem Durchlauf wie eine Luftblase nach rechts — daher der Name."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Gehe die Liste von links nach rechts durch."}),e.jsxs("li",{children:["Vergleiche jedes Paar von Nachbarn: ",e.jsx("code",{children:"liste[j]"})," und"," ",e.jsx("code",{children:"liste[j + 1]"}),"."]}),e.jsxs("li",{children:["Ist der linke Wert grösser, ",e.jsx("strong",{children:"tausche"})," die beiden."]}),e.jsx("li",{children:"Am Ende eines Durchlaufs steht die grösste Zahl ganz rechts — sie ist fertig."}),e.jsx("li",{children:"Wiederhole das mit dem verbleibenden, noch unsortierten Teil."})]}),e.jsxs("p",{children:["Bei ",e.jsx("code",{children:"n"})," Elementen genügen ",e.jsx("code",{children:"n - 1"})," Durchläufe. Nach jedem Durchlauf ist ein Element mehr an seinem endgültigen Platz."]})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Visualisierung"}),e.jsxs("p",{children:["Gehen Sie Schritt für Schritt durch. Gelb bedeutet"," ",e.jsx("em",{children:"wird verglichen"}),", rot ",e.jsx("em",{children:"wird getauscht"})," und grün"," ",e.jsx("em",{children:"steht endgültig richtig"}),". Rechts unten sehen Sie, welche Codezeile gerade ausgeführt wird."]}),e.jsx(y,{title:"Bubble Sort",initialArray:[5,3,8,1,9,2],generate:hn,code:on,legend:"sort"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Probieren Sie aus:"})," Geben Sie oben eine bereits sortierte Liste ein (z. B. ",e.jsx("code",{children:"1, 2, 3, 4, 5"}),"). Wie viele Vergleiche braucht der Algorithmus? Und wie viele Tausche?"]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Code"}),e.jsx("p",{children:"Zwei verschachtelte Schleifen: Die äussere zählt die Durchläufe, die innere vergleicht die Nachbarn. Führen Sie den Code aus und ändern Sie die Liste."}),e.jsx(s,{filename:"bubblesort.js",children:`function bubbleSort(liste) {
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
console.log(bubbleSort(zahlen));`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Kürzer tauschen — und das Original schonen"}),e.jsxs("p",{children:["Mit der Dekomposition aus Woche 2 geht das Tauschen in einer Zeile. Und mit ",e.jsx("code",{children:"[...liste]"})," arbeiten wir auf einer Kopie, so bleibt das Original erhalten."]}),e.jsx(s,{filename:"bubblesort-kurz.js",children:`function bubbleSort(eingabe) {
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
console.log("Sortiert: ", sortiert);`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Optimierung: frühzeitig aufhören"}),e.jsxs("p",{children:["Wenn in einem ganzen Durchlauf ",e.jsx("strong",{children:"kein"})," Tausch mehr passiert, ist die Liste bereits sortiert. Dann können wir abbrechen. Bei einer schon sortierten Liste braucht der Algorithmus so nur noch einen einzigen Durchlauf."]}),e.jsx(s,{filename:"bubblesort-optimiert.js",children:`function bubbleSortOptimiert(eingabe) {
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
console.log(bubbleSortOptimiert([1, 2, 3, 4, 5, 6])); // nur 1 Durchlauf`})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaften von Bubble Sort"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sehr einfach"})," zu verstehen und zu programmieren"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"In place"})," — braucht kaum zusätzlichen Speicher"]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Stabil"})," — gleiche Werte behalten ihre Reihenfolge"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Langsam"})," — bei doppelt so vielen Elementen braucht er rund ",e.jsx("em",{children:"viermal"})," so lange"]}),e.jsx("li",{children:"❌ In der Praxis wird er nie verwendet (aber überall unterrichtet)"})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Vergleiche"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall (sortiert, optimiert)"}),e.jsx("td",{children:"n − 1"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"≈ n² / 2"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall (umgekehrt sortiert)"}),e.jsx("td",{children:"n · (n − 1) / 2"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:["Was ",e.jsx("code",{children:"O(n²)"})," genau bedeutet, schauen wir auf der Seite zur"," ",e.jsx("strong",{children:"Laufzeitanalyse"})," an."]})]})})]})}const fi=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"}));function An(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Sortieren: Quicksort"}),e.jsxs("p",{children:["Bubble Sort ist einfach, aber langsam. ",e.jsx("strong",{children:"Quicksort"})," ","ist einer der schnellsten Sortieralgorithmen überhaupt und wird in vielen Programmiersprachen tatsächlich eingesetzt. Sein Trick heisst"," ",e.jsx("strong",{children:"Teile und herrsche"})," (divide and conquer): Ein grosses Problem wird in kleinere Teilprobleme zerlegt."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Sie können erklären, was ein ",e.jsx("strong",{children:"Pivot"})," ist und was beim Partitionieren passiert."]}),e.jsx("li",{children:"Sie verstehen, was Rekursion in diesem Algorithmus bedeutet."}),e.jsx("li",{children:"Sie können den Quicksort-Code Zeile für Zeile erklären."}),e.jsxs("li",{children:["Sie wissen, warum Quicksort im Schnitt ",e.jsx("code",{children:"O(n · log n)"})," ","ist, im schlechtesten Fall aber ",e.jsx("code",{children:"O(n²)"}),"."]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die Idee: Teile und herrsche"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Wähle ein Element als ",e.jsx("strong",{children:"Pivot"})," (wir nehmen immer das letzte Element des Bereichs)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Partitionieren:"})," Sortiere alle kleineren Elemente nach links vom Pivot, alle grösseren nach rechts."]}),e.jsxs("li",{children:["Danach steht das Pivot an seiner ",e.jsx("strong",{children:"endgültigen"})," ","Position — es muss nie wieder bewegt werden."]}),e.jsxs("li",{children:["Wiederhole das Ganze für den linken Teil und für den rechten Teil (",e.jsx("strong",{children:"Rekursion"}),")."]}),e.jsxs("li",{children:["Ein Bereich mit 0 oder 1 Element ist automatisch sortiert →"," ",e.jsx("strong",{children:"Abbruchbedingung"}),"."]})]}),e.jsx("h3",{children:"Analogie"}),e.jsx("p",{children:"Stellen Sie sich eine Klasse vor, die sich nach Grösse aufstellen soll. Eine Person stellt sich in die Mitte. Alle Kleineren gehen nach links, alle Grösseren nach rechts. Jetzt hat diese Person garantiert ihren richtigen Platz. Dann macht die linke Gruppe dasselbe, und die rechte auch — bis alle stehen."})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Visualisierung"}),e.jsxs("p",{children:["Lila ist das ",e.jsx("em",{children:"Pivot"}),", gelb wird gerade"," ",e.jsx("em",{children:"mit dem Pivot verglichen"}),", rot wird ",e.jsx("em",{children:"getauscht"})," und grün steht ",e.jsx("em",{children:"endgültig richtig"}),". Ausgegraute Balken liegen ausserhalb des aktuellen Bereichs."]}),e.jsx(y,{title:"Quicksort (Pivot = letztes Element)",initialArray:[7,2,9,4,1,8,3],generate:un,code:an,legend:"sort"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beobachten Sie:"})," Sobald ein Balken grün wird, wird er nie mehr angefasst. Und der aktive Bereich wird immer kleiner."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Der Code"}),e.jsxs("p",{children:["Die Funktion ruft sich ",e.jsx("strong",{children:"selbst"})," auf — das ist Rekursion. Die Parameter ",e.jsx("code",{children:"links"})," und ",e.jsx("code",{children:"rechts"})," ","sagen, welcher Teil der Liste gerade bearbeitet wird."]}),e.jsx(s,{filename:"quicksort.js",children:`function quickSort(liste, links = 0, rechts = liste.length - 1) {
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
console.log(quickSort(zahlen));`})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eine kurze, gut lesbare Variante"}),e.jsxs("p",{children:["Mit ",e.jsx("code",{children:"filter"})," und Spread lässt sich Quicksort sehr elegant schreiben. Diese Version ist leichter zu lesen, braucht aber mehr Speicher, weil sie bei jedem Schritt neue Listen erzeugt."]}),e.jsx(s,{filename:"quicksort-funktional.js",children:`function quickSort(liste) {
  if (liste.length <= 1) return liste;

  const [pivot, ...rest] = liste;          // Dekomposition + Spread
  const kleiner = rest.filter((x) => x < pivot);
  const groesser = rest.filter((x) => x >= pivot);

  return [...quickSort(kleiner), pivot, ...quickSort(groesser)];
}

console.log(quickSort([7, 2, 9, 4, 1, 8, 3]));

// Funktioniert auch mit Wörtern
console.log(quickSort(["Kiwi", "Apfel", "Zwetschge", "Banane"]));`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Diskussionsfrage:"})," Welche der beiden Versionen würden Sie in einem Programm verwenden — die kurze oder die «in place»-Version? Warum?"]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Eigenschaften von Quicksort"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"Sehr schnell"})," — im Schnitt"," ",e.jsx("code",{children:"O(n · log n)"})]}),e.jsxs("li",{children:["✅ ",e.jsx("strong",{children:"In place"})," möglich (die erste Version)"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Schlechtester Fall"})," ",e.jsx("code",{children:"O(n²)"}),": wenn das Pivot immer der kleinste oder grösste Wert ist — z. B. bei einer bereits sortierten Liste!"]}),e.jsxs("li",{children:["❌ ",e.jsx("strong",{children:"Nicht stabil"})," — gleiche Werte können ihre Reihenfolge tauschen"]}),e.jsx("li",{children:"❌ Deutlich schwieriger zu verstehen als Bubble Sort"})]}),e.jsx("h3",{children:"Bubble Sort und Quicksort im Vergleich"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Bubble Sort"}),e.jsx("th",{children:"Quicksort"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Prinzip"}),e.jsx("td",{children:"Nachbarn tauschen"}),e.jsx("td",{children:"Teile und herrsche"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1000 Elemente (grob)"}),e.jsx("td",{children:"≈ 500'000 Vergleiche"}),e.jsx("td",{children:"≈ 10'000 Vergleiche"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tipp aus der Praxis:"})," Ein zufällig gewähltes Pivot (statt immer das letzte Element) macht den schlechtesten Fall extrem unwahrscheinlich."]})]})})]})}const pi=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"})),En="_container_1hqpd_1",yn="_header_1hqpd_9",On="_sliderLabel_1hqpd_13",Dn="_slider_1hqpd_13",Bn="_rows_1hqpd_24",Nn="_row_1hqpd_24",Wn="_rowLabel_1hqpd_37",Pn="_rowName_1hqpd_42",Fn="_rowExample_1hqpd_48",Mn="_barTrack_1hqpd_53",Tn="_bar_1hqpd_53",_n="_rowValue_1hqpd_66",Vn="_ops_1hqpd_73",Cn="_time_1hqpd_78",Ln="_note_1hqpd_83",k={container:En,header:yn,sliderLabel:On,slider:Dn,rows:Bn,row:Nn,rowLabel:Wn,rowName:Pn,rowExample:Fn,barTrack:Mn,bar:Tn,rowValue:_n,ops:Vn,time:Cn,note:Ln},Zn=[{key:"O(1)",label:"O(1) — konstant",example:"liste[5], liste.length",fn:()=>1,color:"var(--color-green)"},{key:"O(log n)",label:"O(log n) — logarithmisch",example:"Binäre Suche",fn:r=>Math.max(1,Math.ceil(Math.log2(r))),color:"var(--color-aqua)"},{key:"O(n)",label:"O(n) — linear",example:"Lineare Suche, Summe, Maximum",fn:r=>r,color:"var(--color-blue)"},{key:"O(n log n)",label:"O(n · log n) — linear-logarithmisch",example:"Quicksort (Durchschnitt), sort()",fn:r=>Math.ceil(r*Math.max(1,Math.log2(r))),color:"var(--color-yellow)"},{key:"O(n²)",label:"O(n²) — quadratisch",example:"Bubble Sort, alle Paare vergleichen",fn:r=>r*r,color:"var(--color-orange)"},{key:"O(2^n)",label:"O(2ⁿ) — exponentiell",example:"Alle Teilmengen ausprobieren",fn:r=>2**r,color:"var(--color-red)"}],C=[8,16,32,64,128,256,512,1024];function R(r){return Number.isFinite(r)?r>=1e15?r.toExponential(1).replace("e+"," · 10^"):Math.round(r).toLocaleString("de-CH"):"∞"}function In(r){const n=r/1e8;return Number.isFinite(n)?n<1e-6?"< 1 µs":n<.001?`${(n*1e6).toFixed(0)} µs`:n<1?`${(n*1e3).toFixed(1)} ms`:n<60?`${n.toFixed(1)} s`:n<3600?`${(n/60).toFixed(1)} min`:n<86400?`${(n/3600).toFixed(1)} h`:n<315e5?`${(n/86400).toFixed(1)} Tage`:`${R(n/315e5)} Jahre`:"unendlich"}function Kn(){const[r,n]=p.useState(3),c=C[r],t=Zn.map(a=>({...a,operations:a.fn(c)})),d=Math.max(...t.map(a=>Math.log10(a.operations+1)));return e.jsxs("div",{className:k.container,children:[e.jsxs("div",{className:k.header,children:[e.jsxs("label",{className:k.sliderLabel,htmlFor:"complexity-n",children:["Anzahl Elemente ",e.jsxs("strong",{children:["n = ",c.toLocaleString("de-CH")]})]}),e.jsx("input",{id:"complexity-n",className:k.slider,type:"range",min:0,max:C.length-1,value:r,onChange:a=>n(Number(a.target.value))})]}),e.jsx("div",{className:k.rows,children:t.map(a=>e.jsxs("div",{className:k.row,children:[e.jsxs("div",{className:k.rowLabel,children:[e.jsx("span",{className:k.rowName,children:a.label}),e.jsx("span",{className:k.rowExample,children:a.example})]}),e.jsx("div",{className:k.barTrack,children:e.jsx("div",{className:k.bar,style:{width:`${Math.max(2,Math.log10(a.operations+1)/d*100)}%`,backgroundColor:a.color}})}),e.jsxs("div",{className:k.rowValue,children:[e.jsx("span",{className:k.ops,children:R(a.operations)}),e.jsx("span",{className:k.time,children:In(a.operations)})]})]},a.key))}),e.jsxs("p",{className:k.note,children:["Die Balken sind ",e.jsx("strong",{children:"logarithmisch"})," skaliert — sonst wäre bei grossem n nur noch der rote Balken sichtbar. Die Zeitangabe rechts nimmt an, dass ein Computer 100 Millionen Operationen pro Sekunde schafft."]})]})}function Jn(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Laufzeitanalyse"}),e.jsxs("p",{children:["Wir haben jetzt mehrere Algorithmen gesehen, die dasselbe Problem lösen — zum Beispiel Bubble Sort und Quicksort. Aber welcher ist"," ",e.jsx("strong",{children:"besser"}),"? Um das zu beantworten, brauchen wir ein Werkzeug: die ",e.jsx("strong",{children:"Laufzeitanalyse"}),"."]}),e.jsx("h3",{children:"Lernziele"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Sie können erklären, warum man Laufzeit nicht in Sekunden misst."}),e.jsx("li",{children:"Sie können in einfachem Code die Anzahl Operationen abschätzen."}),e.jsxs("li",{children:["Sie kennen die wichtigsten Klassen: ",e.jsx("code",{children:"O(1)"}),","," ",e.jsx("code",{children:"O(log n)"}),", ",e.jsx("code",{children:"O(n)"}),","," ",e.jsx("code",{children:"O(n · log n)"}),", ",e.jsx("code",{children:"O(n²)"}),"."]}),e.jsx("li",{children:"Sie können die Algorithmen dieser Woche einer Klasse zuordnen und begründen, warum."})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Warum messen wir nicht einfach die Zeit?"}),e.jsx("p",{children:"Man könnte einfach eine Stoppuhr laufen lassen. Das Problem: Das Ergebnis hängt von Dingen ab, die nichts mit dem Algorithmus zu tun haben."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Hardware:"})," Ein neuer Laptop ist schneller als ein alter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Programmiersprache:"})," C ist schneller als JavaScript."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zufall:"})," Andere Programme laufen gleichzeitig."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Datenmenge:"})," Mit 10 Elementen ist alles schnell."]})]}),e.jsxs("p",{children:["Deshalb zählen wir stattdessen die ",e.jsx("strong",{children:"Anzahl Schritte"})," ","in Abhängigkeit von der Datenmenge ",e.jsx("code",{children:"n"}),". Die eigentliche Frage lautet:"]}),e.jsx("blockquote",{children:"Wie stark wächst der Aufwand, wenn die Datenmenge wächst?"}),e.jsx("p",{children:"Das ist die entscheidende Frage. Ein Algorithmus, der bei 1000 Elementen 1 Sekunde braucht, kann bei 10'000 Elementen 10 Sekunden brauchen — oder 100 Sekunden. Das macht den Unterschied zwischen «funktioniert» und «unbrauchbar»."})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Die O-Notation (Gross-O)"}),e.jsxs("p",{children:["Bubble Sort braucht genau ",e.jsx("code",{children:"n · (n − 1) / 2"})," Vergleiche. Ausmultipliziert: ",e.jsx("code",{children:"0.5 · n² − 0.5 · n"}),". Für die Laufzeitanalyse vereinfachen wir das zu ",e.jsx("code",{children:"O(n²)"}),". Dabei gelten zwei Regeln:"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Konstante Faktoren weglassen:"})," ",e.jsx("code",{children:"0.5 · n²"})," → ",e.jsx("code",{children:"n²"}),". Ein doppelt so schneller Computer ändert die Klasse nicht."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Nur der stärkste Term zählt:"})," ",e.jsx("code",{children:"n² + n + 100"})," → ",e.jsx("code",{children:"n²"}),". Bei n = 1000 ist"," ",e.jsx("code",{children:"n²"})," = 1'000'000 und ",e.jsx("code",{children:"n"})," nur 1000 — das"," ",e.jsx("code",{children:"n"})," fällt gar nicht mehr ins Gewicht."]})]}),e.jsxs("p",{children:[e.jsx("code",{children:"O(...)"})," beschreibt also das"," ",e.jsx("strong",{children:"Wachstumsverhalten"}),", nicht die genaue Anzahl Schritte. Es ist eine ",e.jsx("em",{children:"obere Schranke"}),": «höchstens so schnell wachsend wie»."]}),e.jsx("h3",{children:"Drei Fälle"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bester Fall:"})," die günstigste Eingabe (z. B. die gesuchte Zahl steht ganz vorne)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Durchschnitt:"})," typische, zufällige Eingabe — meist die interessanteste Angabe"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schlechtester Fall:"})," die ungünstigste Eingabe — die wichtigste Angabe, wenn man Garantien braucht"]})]})]})}),e.jsx(i,{area:"breakout",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wachstum vergleichen"}),e.jsx("p",{children:"Verschieben Sie den Regler und beobachten Sie, wie unterschiedlich die Klassen wachsen."}),e.jsx(Kn,{}),e.jsxs("p",{children:[e.jsx("strong",{children:"Die Schlüsselbeobachtung:"})," Bei n = 8 sind alle Klassen ähnlich schnell. Bei n = 1024 liegen Welten dazwischen —",e.jsx("code",{children:"O(log n)"})," braucht 10 Schritte, ",e.jsx("code",{children:"O(n²)"})," über eine Million, ",e.jsx("code",{children:"O(2ⁿ)"})," mehr Schritte als das Universum Atome hat."]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Wie erkenne ich die Klasse im Code?"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Was ich im Code sehe"}),e.jsx("th",{children:"Klasse"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{children:["Keine Schleife, nur ein paar Befehle: ",e.jsx("code",{children:"liste[0]"}),","," ",e.jsx("code",{children:"liste.length"}),", ",e.jsx("code",{children:"a + b"})]}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Der Suchbereich wird jedes Mal ",e.jsx("strong",{children:"halbiert"})]}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Eine"})," Schleife über alle Elemente (auch"," ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"reduce"}),")"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:["Halbieren ",e.jsx("em",{children:"und"})," jedes Mal alle Elemente anschauen (",e.jsx("code",{children:"sort()"}),")"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("strong",{children:"Zwei verschachtelte"})," Schleifen über alle Elemente"]}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Alle Kombinationen / Teilmengen ausprobieren"}),e.jsx("td",{children:e.jsx("code",{children:"O(2ⁿ)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Achtung — häufige Stolperfalle:"})," Zwei Schleifen"," ",e.jsx("em",{children:"nacheinander"})," sind ",e.jsx("code",{children:"O(n) + O(n) = O(n)"}),". Nur"," ",e.jsx("em",{children:"verschachtelte"})," Schleifen werden ",e.jsx("code",{children:"O(n²)"}),"."]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 1: Lineare und binäre Suche"}),e.jsx("h3",{children:"Lineare Suche — O(n)"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Bester Fall ",e.jsx("code",{children:"O(1)"}),":"]})," ","Das gesuchte Element steht an Position 0."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Durchschnitt ",e.jsx("code",{children:"O(n)"}),":"]})," ","Im Mittel muss man die halbe Liste durchsuchen — ",e.jsx("code",{children:"n/2"}),", und der konstante Faktor fällt weg."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Schlechtester Fall ",e.jsx("code",{children:"O(n)"}),":"]})," ","Das Element steht am Schluss oder kommt gar nicht vor."]})]}),e.jsx("h3",{children:"Binäre Suche — O(log n)"}),e.jsxs("p",{children:["Jeder Schritt halbiert den Suchbereich. Die Frage lautet: Wie oft kann ich ",e.jsx("code",{children:"n"})," halbieren, bis 1 übrig bleibt? Antwort:"," ",e.jsx("code",{children:"log₂(n)"})," Mal."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"n"}),e.jsx("th",{children:"Lineare Suche (Vergleiche)"}),e.jsx("th",{children:"Binäre Suche (Vergleiche)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"16"}),e.jsx("td",{children:"16"}),e.jsx("td",{children:"4"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'024"}),e.jsx("td",{children:"1'024"}),e.jsx("td",{children:"10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"1'048'576"}),e.jsx("td",{children:"1'048'576"}),e.jsx("td",{children:"20"})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Aber Vorsicht — die versteckten Kosten:"})," Binäre Suche verlangt eine sortierte Liste. Das Sortieren kostet"," ",e.jsx("code",{children:"O(n · log n)"}),". Für ",e.jsx("em",{children:"eine einzige"})," Suche lohnt sich das nicht. Wer aber tausendmal in denselben Daten sucht, sortiert einmal und profitiert danach immer."]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 2: Die übrigen einfachen Algorithmen"}),e.jsx("h3",{children:"Maximum finden — O(n)"}),e.jsxs("p",{children:["Eine Schleife, jedes Element genau einmal. Man kann es nicht besser machen: Wenn man auch nur ein Element überspringt, könnte genau das das Maximum gewesen sein. ",e.jsx("code",{children:"O(n)"})," ist hier"," ",e.jsx("strong",{children:"optimal"}),"."]}),e.jsx("h3",{children:"Summe, Durchschnitt, Zählen — O(n)"}),e.jsxs("p",{children:["Gleiches Argument. Auch ",e.jsx("code",{children:"map"}),", ",e.jsx("code",{children:"filter"})," und"," ",e.jsx("code",{children:"reduce"})," sind ",e.jsx("code",{children:"O(n)"})," — sie sehen nur kürzer aus, machen aber genau gleich viel Arbeit."]}),e.jsx("h3",{children:"Zwei Zeiger (umkehren, Palindrom) — O(n)"}),e.jsxs("p",{children:["Die Schleife läuft nur ",e.jsx("code",{children:"n/2"})," Mal. Der konstante Faktor"," ",e.jsx("code",{children:"1/2"})," fällt in der O-Notation weg, es bleibt"," ",e.jsx("code",{children:"O(n)"}),". Es ist zwar doppelt so schnell wie eine volle Schleife, aber in derselben Klasse."]}),e.jsx("h3",{children:"Häufigkeiten zählen — O(n)"}),e.jsxs("p",{children:["Eine Schleife über alle Elemente. Der Zugriff auf eine Objekt-Eigenschaft wie ",e.jsx("code",{children:'zaehler["rot"]'})," ist"," ",e.jsx("code",{children:"O(1)"})," — er dauert gleich lang, egal wie viele Einträge das Objekt schon hat. Das ist der Grund, warum dieses Muster so beliebt ist."]}),e.jsx("h3",{children:"Anagramme erkennen — zwei Wege im Vergleich"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Weg"}),e.jsx("th",{children:"Was passiert"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Sortieren und vergleichen"}),e.jsx("td",{children:"2× sortieren + 1× vergleichen"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Buchstaben zählen"}),e.jsx("td",{children:"2× eine Schleife über die Wörter"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]})]})]}),e.jsx("p",{children:"Bei Wörtern mit 10 Buchstaben ist der Unterschied völlig egal — dann nimmt man die kürzere, besser lesbare Variante. Bei einer Million Zeichen zählt jede Klasse."}),e.jsx("blockquote",{children:"Lesbarkeit schlägt Geschwindigkeit — bis die Geschwindigkeit zum Problem wird."})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Operationen zählen — selbst ausprobieren"}),e.jsxs("p",{children:["Bisher waren alle einfachen Algorithmen ",e.jsx("code",{children:"O(n)"})," oder besser. Jetzt kommen wir zu den Sortieralgorithmen — und dort wird es spannend. Wir bauen dazu einen Zähler in den Algorithmus ein und schauen, wie die Zahlen wachsen, wenn wir ",e.jsx("code",{children:"n"})," verdoppeln."]}),e.jsx(s,{filename:"operationen-zaehlen.js",children:`// Wir zählen die Vergleiche bei Bubble Sort
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
// Das ist typisch für O(n²)`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Das ist der Kern der Laufzeitanalyse:"})," Bei"," ",e.jsx("code",{children:"O(n²)"})," führt doppelt so viel Input zu viermal so viel Arbeit. Bei ",e.jsx("code",{children:"O(n)"})," nur zu doppelt so viel. Bei"," ",e.jsx("code",{children:"O(log n)"})," praktisch zu gar nichts mehr."]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 3: Bubble Sort"}),e.jsxs("p",{children:["Zwei verschachtelte Schleifen. Die äussere läuft ",e.jsx("code",{children:"n − 1"})," ","Mal, die innere jedes Mal etwas kürzer:"]}),e.jsx("p",{children:e.jsx("code",{children:"(n−1) + (n−2) + … + 2 + 1 = n · (n−1) / 2"})}),e.jsx("p",{children:"Bei 10 Elementen sind das 45 Vergleiche, bei 100 schon 4950, bei 1000 rund 500'000."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Wann?"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:"Liste bereits sortiert (nur mit der Abbruch-Optimierung)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"zufällige Liste"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:"Liste absteigend sortiert"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Speicher:"})," ",e.jsx("code",{children:"O(1)"})," — es wird nur getauscht, keine zweite Liste angelegt."]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Analyse 4: Quicksort"}),e.jsxs("p",{children:["Beim Partitionieren wird jedes Element des Bereichs einmal angeschaut — das ist ",e.jsx("code",{children:"O(n)"})," pro «Ebene». Entscheidend ist, ",e.jsx("strong",{children:"wie viele Ebenen"})," es gibt."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Gutes Pivot"})," (etwa in der Mitte): Der Bereich halbiert sich jedes Mal. Nach ",e.jsx("code",{children:"log₂(n)"})," Ebenen ist alles fertig. Gesamt: ",e.jsx("code",{children:"n · log n"}),". Bei n = 1024 sind das 10 Ebenen à 1024 Vergleiche ≈ 10'000."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Schlechtes Pivot"})," (immer das kleinste oder grösste Element): Der Bereich schrumpft nur um 1. Dann gibt es"," ",e.jsx("code",{children:"n"})," Ebenen → ",e.jsx("code",{children:"n²"}),". Genau das passiert mit unserer Version bei einer bereits sortierten Liste!"]})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fall"}),e.jsx("th",{children:"Wann?"}),e.jsx("th",{children:"Laufzeit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Bester Fall"}),e.jsx("td",{children:"Pivot teilt immer genau in der Mitte"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Durchschnitt"}),e.jsx("td",{children:"zufällige Liste"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Schlechtester Fall"}),e.jsx("td",{children:"bereits sortierte Liste (bei Pivot = letztes Element)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})})]})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deshalb:"})," In der Praxis wählt man ein"," ",e.jsx("em",{children:"zufälliges"})," Pivot. Dann ist der schlechteste Fall so unwahrscheinlich, dass er praktisch nie auftritt."]})]})}),e.jsx(i,{area:"content",children:e.jsxs("section",{children:[e.jsx("h2",{children:"Bubble Sort gegen Quicksort — messen"}),e.jsxs("p",{children:["Jetzt messen wir tatsächlich die Zeit. Achtung: Erhöhen Sie"," ",e.jsx("code",{children:"n"})," nur vorsichtig, sonst blockiert Bubble Sort den Browser."]}),e.jsx(s,{filename:"messen.js",children:`function zufallsListe(n) {
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
}`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Beobachten Sie:"})," Bei jeder Verdopplung von"," ",e.jsx("code",{children:"n"})," wird Bubble Sort etwa viermal langsamer, Quicksort nur gut doppelt so langsam. Bei n = 4000 ist der Unterschied schon gewaltig."]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Gesamtübersicht"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Algorithmus"}),e.jsx("th",{children:"Bester Fall"}),e.jsx("th",{children:"Durchschnitt"}),e.jsx("th",{children:"Schlechtester Fall"}),e.jsx("th",{children:"Speicher"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Lineare Suche"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Binäre Suche"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Maximum finden"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Summe / Durchschnitt"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Umkehren / Palindrom"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Häufigkeiten zählen"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Anagramm (zählen)"}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Anagramm (sortieren)"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Bubble Sort"}),e.jsx("td",{children:e.jsx("code",{children:"O(n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(1)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Quicksort"}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n · log n)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(n²)"})}),e.jsx("td",{children:e.jsx("code",{children:"O(log n)"})})]})]})]})]})}),e.jsx(i,{children:e.jsxs("section",{children:[e.jsx("h2",{children:"Merksätze"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Laufzeit misst man in ",e.jsx("strong",{children:"Schritten"}),", nicht in Sekunden."]}),e.jsxs("li",{children:["Die O-Notation beschreibt das ",e.jsx("strong",{children:"Wachstum"}),": konstante Faktoren und schwächere Terme fallen weg."]}),e.jsxs("li",{children:["Verschachtelte Schleifen sind das Warnzeichen für"," ",e.jsx("code",{children:"O(n²)"}),"."]}),e.jsxs("li",{children:["Halbieren ist das Erkennungsmerkmal von ",e.jsx("code",{children:"O(log n)"})," — und ",e.jsx("code",{children:"log n"})," ist unglaublich klein."]}),e.jsx("li",{children:"Bei kleinen Datenmengen ist alles schnell genug. Die Klasse zählt erst, wenn die Daten wachsen."}),e.jsx("li",{children:"Manchmal tauscht man Speicher gegen Zeit (z. B. eine Zähler-Tabelle statt doppelter Schleifen)."})]})]})})]})}const ki=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"}));function Hn(){return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx("h2",{children:"Aufgaben: Algorithmen"}),e.jsxs("p",{children:["In diesem Arbeitsauftrag bearbeiten Sie ",e.jsx("strong",{children:"5 Aufgaben"})," zu den Algorithmen dieser Woche. Sie beginnen mit zwei klassischen Rechen-Algorithmen und arbeiten sich zu den Sortieralgorithmen vor. Die Aufgaben sind deutlich umfangreicher als in den letzten Wochen — planen Sie genügend Zeit ein und arbeiten Sie in kleinen Schritten."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Wichtig:"})," Es gibt keine Musterlösungen. Sie schreiben alles selbst. Sie dürfen die Algorithmen aus der Theorie als Vorlage verwenden, müssen sie aber verstehen und anpassen können."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Zu jeder Aufgabe gehört eine kurze Laufzeitüberlegung."})," ","Diese schreiben Sie als Kommentar in die Datei. Wir besprechen sie gemeinsam im Unterricht."]})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Dokumentation"}),e.jsx("p",{children:"Beginnen Sie jede Datei mit einem Kommentarblock nach diesem Muster:"}),e.jsx("pre",{children:e.jsx("code",{children:`// Aufgabe 1: Modulo selbst berechnen
// Idee: Solange der Divisor passt, wird er abgezogen
// Laufzeit: O(a / b), weil pro Durchgang genau einmal subtrahiert wird
// Schwierig war: ...
// Gelernt habe ich: ...`})})]}),e.jsxs(l,{children:[e.jsx("h2",{children:"Aufgaben"}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 1: Modulo selbst berechnen"}),e.jsxs("p",{children:["Der Modulo-Operator ",e.jsx("code",{children:"%"})," gibt den"," ",e.jsx("strong",{children:"Rest einer Division"})," zurück:"," ",e.jsx("code",{children:"17 % 5 === 2"}),", weil 5 dreimal in 17 passt und 2 übrig bleibt. In dieser Aufgabe bauen Sie diesen Operator selbst nach."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Regel:"})," Sie dürfen ",e.jsx("code",{children:"%"})," nicht verwenden. Auch ",e.jsx("code",{children:"Math.floor"}),", ",e.jsx("code",{children:"Math.trunc"})," und ähnliche Abkürzungen sind nicht erlaubt. Nur ",e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"}),","," ","Vergleiche und Schleifen."]}),e.jsx("p",{children:"Schreiben Sie:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"modulo(a, b)"})," — gibt den Rest von ",e.jsx("code",{children:"a / b"})," ","zurück. Idee: Ziehen Sie ",e.jsx("code",{children:"b"})," so lange von"," ",e.jsx("code",{children:"a"})," ab, wie ",e.jsx("code",{children:"a"})," noch mindestens so gross ist wie ",e.jsx("code",{children:"b"}),". Was übrig bleibt, ist der Rest."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ganzzahlDivision(a, b)"})," — gibt zurück, wie oft"," ",e.jsx("code",{children:"b"})," ganz in ",e.jsx("code",{children:"a"})," passt. Das ist genau die Anzahl Subtraktionen aus Aufgabenteil 1."]}),e.jsxs("li",{children:[e.jsx("code",{children:"teile(a, b)"})," — gibt beides zusammen als Objekt zurück:"," ",e.jsx("code",{children:"{ quotient, rest }"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"istTeilbar(a, b)"})," — ",e.jsx("code",{children:"true"}),", wenn der Rest 0 ist. Testen Sie damit, welche Zahlen von 1 bis 50 durch 7 teilbar sind."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"modulo(17, 5)"})," → 2,"," ",e.jsx("code",{children:"modulo(20, 4)"})," → 0, ",e.jsx("code",{children:"modulo(3, 7)"})," → 3,"," ",e.jsx("code",{children:"modulo(0, 5)"})," → 0. Vergleichen Sie Ihr Resultat jeweils mit dem eingebauten ",e.jsx("code",{children:"%"}),", um zu prüfen, ob Sie richtig liegen."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sonderfälle bedenken:"})," Was passiert bei"," ",e.jsx("code",{children:"b === 0"}),"? Und was bei negativen Zahlen? Behandeln Sie mindestens den Fall ",e.jsx("code",{children:"b === 0"})," sauber (z. B. mit einer Fehlermeldung)."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Wie viele Durchgänge braucht Ihre Schleife bei ",e.jsx("code",{children:"modulo(1000, 3)"}),"? Und bei ",e.jsx("code",{children:"modulo(1000000, 3)"}),"? Die Laufzeit hängt hier nicht von der Länge einer Liste ab — wovon dann? Warum ist das für sehr grosse Zahlen ein Problem?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 2: Grösster gemeinsamer Teiler (GGT)"}),e.jsxs("p",{children:["Der ",e.jsx("strong",{children:"GGT"})," zweier Zahlen ist die grösste Zahl, die beide ohne Rest teilt. Zum Beispiel ist"," ",e.jsx("code",{children:"ggt(48, 18) === 6"}),". Man braucht ihn unter anderem zum Kürzen von Brüchen. Der ",e.jsx("em",{children:"euklidische Algorithmus"})," dafür ist über 2000 Jahre alt und einer der ältesten Algorithmen überhaupt."]}),e.jsx("p",{children:"Schreiben Sie drei Varianten und vergleichen Sie sie:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"ggtBrutal(a, b)"})," — probiert alle Zahlen von 1 bis zur kleineren der beiden durch und merkt sich die grösste, die beide teilt. Verwenden Sie dafür Ihr ",e.jsx("code",{children:"istTeilbar"})," aus Aufgabe 1."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtSubtraktion(a, b)"})," — der ursprüngliche Euklid: Solange die beiden Zahlen verschieden sind, ziehe die kleinere von der grösseren ab. Wenn beide gleich sind, ist das der GGT."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtModulo(a, b)"})," — die moderne Version: Solange"," ",e.jsx("code",{children:"b"})," nicht 0 ist, ersetze das Paar ",e.jsx("code",{children:"(a, b)"})," ","durch ",e.jsx("code",{children:"(b, a mod b)"}),". Sobald ",e.jsx("code",{children:"b === 0"})," ist, ist ",e.jsx("code",{children:"a"})," der GGT. Verwenden Sie dafür Ihre eigene"," ",e.jsx("code",{children:"modulo"}),"-Funktion aus Aufgabe 1."]})]}),e.jsxs("p",{children:["Alle drei Funktionen sollen zusätzlich die Anzahl"," ",e.jsx("strong",{children:"Durchgänge"})," mitzählen und ausgeben."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"(48, 18)"})," → 6,"," ",e.jsx("code",{children:"(1071, 462)"})," → 21, ",e.jsx("code",{children:"(17, 5)"})," → 1 (teilerfremd), ",e.jsx("code",{children:"(100, 100)"})," → 100 und"," ",e.jsx("code",{children:"(1000000, 2)"}),"."]}),e.jsx("p",{children:e.jsx("strong",{children:"Erweiterungen:"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"kgv(a, b)"})," — das kleinste gemeinsame Vielfache. Tipp:"," ",e.jsx("code",{children:"a · b / ggt(a, b)"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"kuerze(zaehler, nenner)"})," — kürzt einen Bruch vollständig und gibt ",e.jsx("code",{children:"{ zaehler, nenner }"})," zurück. Testen Sie mit ",e.jsx("code",{children:"48/18"})," → ",e.jsx("code",{children:"8/3"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"ggtListe(zahlen)"})," — der GGT einer ganzen Liste von Zahlen (mehrfach anwenden)."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Vergleichen Sie die Anzahl Durchgänge der drei Varianten für"," ",e.jsx("code",{children:"(1071, 462)"})," und für ",e.jsx("code",{children:"(1000000, 2)"}),". Welche Variante ist bei welcher Eingabe besonders schlecht und warum? Ordnen Sie ",e.jsx("code",{children:"ggtBrutal"})," einer Laufzeitklasse zu."]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 3: Selection Sort (Sortieren durch Auswählen)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Idee:"})," Suche in der unsortierten Restliste das"," ",e.jsx("em",{children:"kleinste"})," Element und tausche es an den Anfang dieser Restliste. Wiederhole das, bis alles sortiert ist."]}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("code",{children:"selectionSort(liste)"}),", die eine ",e.jsx("strong",{children:"neue, sortierte Liste"})," zurückgibt. Das Original darf nicht verändert werden (Tipp: ",e.jsx("code",{children:"[...liste]"}),")."]}),e.jsx("p",{children:"Ihre Funktion soll ausserdem:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["die Anzahl ",e.jsx("strong",{children:"Vergleiche"})," und"," ",e.jsx("strong",{children:"Tausche"})," mitzählen und am Schluss mit"," ",e.jsx("code",{children:"console.log"})," ausgeben"]}),e.jsx("li",{children:"nach jedem Durchlauf den Zwischenstand der Liste ausgeben, damit man den Ablauf nachvollziehen kann"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testen Sie mit:"})," ",e.jsx("code",{children:"[5, 3, 8, 1, 9, 2]"}),","," ",e.jsx("code",{children:"[1, 2, 3, 4, 5]"})," (bereits sortiert),"," ",e.jsx("code",{children:"[5, 4, 3, 2, 1]"})," (umgekehrt) und einer leeren Liste"," ",e.jsx("code",{children:"[]"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Erweiterung:"})," Bauen Sie einen zweiten Parameter"," ",e.jsx("code",{children:"absteigend"})," ein (Standardwert ",e.jsx("code",{children:"false"}),"), mit dem man die Sortierrichtung umdrehen kann."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Wie viele Vergleiche braucht Selection Sort bei einer bereits sortierten Liste? Vergleichen Sie das mit dem optimierten Bubble Sort aus der Theorie. Warum verhalten sich die beiden hier unterschiedlich?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 4: Insertion Sort (Sortieren durch Einfügen)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Idee:"})," Wie beim Sortieren von Jasskarten auf der Hand. Die linke Seite der Liste ist immer schon sortiert. Man nimmt die nächste Karte und schiebt sie so weit nach links, bis sie am richtigen Ort liegt."]}),e.jsxs("p",{children:["Schreiben Sie eine Funktion ",e.jsx("code",{children:"insertionSort(liste)"}),", die eine neue sortierte Liste zurückgibt."]}),e.jsx("p",{children:"Anforderungen:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Verwenden Sie eine ",e.jsx("code",{children:"while"}),"-Schleife für das Nach-links-Schieben."]}),e.jsxs("li",{children:["Zählen Sie die ",e.jsx("strong",{children:"Verschiebungen"})," und geben Sie sie aus."]}),e.jsxs("li",{children:["Schreiben Sie eine zweite Funktion"," ",e.jsx("code",{children:"insertionSortObjekte(liste, schluessel)"}),", die eine Liste von ",e.jsx("strong",{children:"Objekten"})," nach einer beliebigen Eigenschaft sortiert. Beispiel:",e.jsx("br",{}),e.jsx("code",{children:'insertionSortObjekte(schueler, "note")'})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Testdaten für die Objekt-Variante:"})," mindestens fünf Schüler-Objekte mit ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"note"})," und"," ",e.jsx("code",{children:"alter"}),". Sortieren Sie einmal nach ",e.jsx("code",{children:"note"})," und einmal nach ",e.jsx("code",{children:"alter"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Bei welcher Eingabe ist Insertion Sort ",e.jsx("code",{children:"O(n)"})," und bei welcher"," ",e.jsx("code",{children:"O(n²)"}),"? Warum gilt Insertion Sort für"," ",e.jsx("em",{children:"fast sortierte"})," Listen als sehr gut?"]})]}),e.jsxs("div",{className:"aufgabe",children:[e.jsx("h4",{children:"Aufgabe 5: Notenstatistik — alles zusammen"}),e.jsxs("p",{children:["Eine Anwendung, die mehrere Algorithmen dieser Woche kombiniert. Gegeben ist eine Liste von Schüler-Objekten mit ",e.jsx("code",{children:"name"}),","," ",e.jsx("code",{children:"klasse"})," und ",e.jsx("code",{children:"noten"})," (Array mit mindestens drei Zahlen). Erstellen Sie mindestens ",e.jsx("strong",{children:"8"})," solche Objekte aus mindestens 2 Klassen."]}),e.jsx("p",{children:"Schreiben Sie folgende Funktionen:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"durchschnitt(noten)"})," — Mittelwert einer Notenliste, auf 2 Stellen gerundet. Leere Liste ⇒ ",e.jsx("code",{children:"0"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"besteSchuelerin(schueler)"})," — das Objekt mit dem höchsten Durchschnitt (Muster: Maximum finden, ",e.jsx("em",{children:"nicht"})," ","sortieren)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rangliste(schueler)"})," — eine ",e.jsx("strong",{children:"neue"})," ","Liste, absteigend nach Durchschnitt sortiert. Verwenden Sie einen"," ",e.jsx("strong",{children:"selbst geschriebenen"})," Sortieralgorithmus aus Aufgabe 3 oder 4, nicht ",e.jsx("code",{children:"sort()"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"notenverteilung(schueler)"})," — zählt mit einem Objekt, wie oft jede gerundete Note (1–6) insgesamt vorkommt. Ausgabe zusätzlich als kleines Textdiagramm, z. B.",e.jsx("br",{}),e.jsx("code",{children:"5: ████ (4)"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"klassenstatistik(schueler)"})," — gruppiert nach"," ",e.jsx("code",{children:"klasse"})," und gibt pro Klasse Anzahl, Durchschnitt und Anzahl ungenügender Noten (< 4) zurück."]})]}),e.jsxs("p",{children:["Geben Sie zum Schluss einen sauber formatierten Bericht mit"," ",e.jsx("code",{children:"console.log"})," aus."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Laufzeitüberlegung (als Kommentar):"})," Bestimmen Sie für jede der fünf Funktionen die Laufzeit in Abhängigkeit von der Anzahl Schüler ",e.jsx("code",{children:"n"}),". Welche Funktion ist die teuerste und warum? Wie ändert sich die Gesamtlaufzeit, wenn Sie in"," ",e.jsx("code",{children:"rangliste"})," Quicksort statt Bubble Sort verwenden würden?"]})]})]})]})}const Si=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"}));export{X as A,pi as B,ki as C,Si as D,le as N,te as a,Yn as b,Qn as c,ei as d,ni as e,ii as f,si as g,ri as h,li as i,Xn as j,ti as k,qn as l,ci as m,di as n,oi as o,hi as p,ai as q,ui as r,Un as s,ji as t,$n as u,xi as v,gi as w,mi as x,bi as y,fi as z};
