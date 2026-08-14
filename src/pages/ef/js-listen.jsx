import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSListen() {
  return (
    <>
      <Section>
        <h2>Listen (Arrays)</h2>
        <p>
          Arrays sind Listen von Werten, die du in einer Variable speichern
          kannst. Du kannst auf die einzelnen Elemente über ihren Index
          zugreifen.
        </p>
      </Section>
      <Section>
        <h2>Arrays erstellen</h2>
        <JSTerminal filename="arrays-erstellen.js">
          {`// Ein Array mit Fruchtnamen
const fruechte = ["Apfel", "Banane", "Kirsche"];

// Zugriff auf Elemente (Index beginnt bei 0!)
console.log(fruechte[0]); // "Apfel"
console.log(fruechte[1]); // "Banane"

// Länge des Arrays
console.log(fruechte.length); // 3`}
        </JSTerminal>
      </Section>
      <Section>
        <h2>Arrays verändern</h2>
        <JSTerminal filename="arrays-aendern.js">
          {`const zahlen = [1, 2, 3];

// Element hinzufügen
zahlen.push(4);        // [1, 2, 3, 4]
zahlen.unshift(0);     // [0, 1, 2, 3, 4]

// Element entfernen
zahlen.pop();          // [0, 1, 2, 3]
zahlen.shift();        // [1, 2, 3]

// Element ändern
zahlen[0] = 10;       // [10, 2, 3]`}
        </JSTerminal>
      </Section>
      <Section>
        <h2>Wichtige Array-Methoden</h2>
        <ul>
          <li><code>push()</code> – am Ende hinzufügen</li>
          <li><code>pop()</code> – letztes Element entfernen</li>
          <li><code>shift()</code> – erstes Element entfernen</li>
          <li><code>unshift()</code> – am Anfang hinzufügen</li>
          <li><code>indexOf()</code> – Position finden</li>
          <li><code>slice()</code> – Teil des Arrays kopieren</li>
        </ul>
      </Section>
    </>
  );
}
