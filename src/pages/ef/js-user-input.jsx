import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSUserInput() {
  return (
    <>
      <Section>
        <h2>Tipps: User Input</h2>
        <p>
          In den bisherigen Beispielen haben wir Code ausschliesslich in der Konsole ausgeführt.
          Manchmal möchte man aber auch Eingaben von Benutzer:innen entgegennehmen.
          Hier schauen wir uns zwei Methoden an, um Eingaben in JavaScript zu lesen.
        </p>
      </Section>

      <Section>
        <h2>Eingaben mit readline</h2>
        <p>
          Die <code>readline</code>-Modul ist eine eingebaute Node.js-Funktion,
          die es ermöglicht, Zeilen von der Eingabe zu lesen. Das folgende Beispiel
          fragt den Namen der Person ab und begrüsst sie:
        </p>
        <JSTerminal filename="readline-eingabe.js">
          {`const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Was ist dein Name? ', (answer) => {
  console.log('Hallo, ' + answer + '!');
  rl.close();
});`}
        </JSTerminal>
        <p>
          <strong>Wichtig:</strong> Die <code>readline</code>-Methode funktioniert nur in
          Node.js, nicht im Browser. Du kannst diesen Code mit <code>node readline-eingabe.js</code>
          ausführen.
        </p>
      </Section>

      <Section>
        <h2>Kommandozeilenargumente lesen</h2>
        <p>
          Eine weitere Möglichkeit, Eingaben zu lesen, ist die Verwendung von
          Kommandozeilenargumenten. Diese werden beim Start des Programms übergeben:
        </p>
        <JSTerminal filename="argumente.js">
          {`// Kommandozeilenargumente lesen
// Aufruf: node argumente.js Max 25

const name = process.argv[2];
const alter = process.argv[3];

console.log('Hallo ' + name + '!');
console.log('Du bist ' + alter + ' Jahre alt.');`}
        </JSTerminal>
        <p>
          <strong>Wichtig:</strong> Kommandozeilenargumente werden immer als <code>string</code>
          gelesen, auch wenn es Zahlen sind! Wenn du mit Zahlen rechnen möchtest,
          musst du sie zuerst konvertieren:
        </p>
        <JSTerminal filename="argumente-mit-konvertierung.js">
          {`// Kommandozeilenargumente als Zahlen konvertieren
const alter = Number(process.argv[3]);
const alterImNextenJahr = alter + 1;

console.log('Im nächsten Jahr bist du ' + alterImNextenJahr + ' Jahre alt.');`}
        </JSTerminal>
        <p>
          Ohne <code>Number()</code> würde <code>'25' + 1</code> zu <code>'251'</code>
          führen, da JavaScript die Werte als Text zusammenhängt statt zu addieren.
        </p>
      </Section>
    </>
  );
}
