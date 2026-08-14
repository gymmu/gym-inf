import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSSchleifen() {
  return (
    <>
      <Section>
        <h2>Schleifen</h2>
        <p>
          Schleifen ermöglichen es dir, Code wiederholt auszuführen. Das ist
          nützlich, wenn du etwas mehrmals machen willst, ohne den Code immer
          wieder schreiben zu müssen.
        </p>
      </Section>
      <Section>
        <h2>for-Schleife</h2>
        <JSTerminal filename="for-schleife.js">
          {`// Zählt von 0 bis 4
for (let i = 0; i < 5; i++) {
  console.log("Zahl: " + i);
}`}
        </JSTerminal>
        <p>
          Eine for-Schleife hat drei Teile:
        </p>
        <ul>
          <li><strong>Initialisierung</strong>: Wo beginnt die Zählung?</li>
          <li><strong>Bedingung</strong>: Wann hört sie auf?</li>
          <li><strong>Update</strong>: Wie wird gezählt?</li>
        </ul>
      </Section>
      <Section>
        <h2>while-Schleife</h2>
        <JSTerminal filename="while-schleife.js">
          {`let count = 0;
while (count < 5) {
  console.log("Noch " + (5 - count) + " mal.");
  count++;
}`}
        </JSTerminal>
      </Section>
      <Section>
        <h2>for...of-Schleife</h2>
        <JSTerminal filename="for-of.js">
          {`const farben = ["rot", "grün", "blau"];

for (const farbe of farben) {
  console.log(farbe);
}`}
        </JSTerminal>
      </Section>
      <Section>
        <h2>break und continue</h2>
        <p>
          <code>break</code> beendet die Schleife komplett, während{" "}
          <code>continue</code> den aktuellen Durchlauf überspringt und mit
          dem nächsten weitermacht.
        </p>
      </Section>
    </>
  );
}
