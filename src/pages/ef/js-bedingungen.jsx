import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSBedingungen() {
  return (
    <>
      <Section>
        <h2>Bedingungen</h2>
        <p>
          Mit Bedingungen kannst du dein Programm entscheiden lassen, welcher
          Code ausgeführt werden soll. Das ist wie eine Verzweigung im Weg.
        </p>
      </Section>
      <Section>
        <h2>if, else if, else</h2>
        <JSTerminal filename="bedingungen.js">
          {`let temp = 25;

if (temp > 30) {
  console.log("Es ist sehr warm!");
} else if (temp > 20) {
  console.log("Es ist angenehm warm.");
} else {
  console.log("Es ist kühl.");
}`}
        </JSTerminal>
      </Section>
      <Section>
        <h2>Vergleichsoperatoren</h2>
        <ul>
          <li><code>===</code> gleich (typfest)</li>
          <li><code>!==</code> ungleich</li>
          <li><code>&gt;</code> grösser</li>
          <li><code>&lt;</code> kleiner</li>
          <li><code>&gt;=</code> grösser oder gleich</li>
          <li><code>&lt;=</code> kleiner oder gleich</li>
        </ul>
      </Section>
      <Section>
        <h2>Logische Operatoren</h2>
        <ul>
          <li><code>&&</code> UND</li>
          <li><code>||</code> ODER</li>
          <li><code>!</code> NICHT</li>
        </ul>
      </Section>
    </>
  );
}
