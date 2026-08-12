import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";

export default function JSVariablen() {
  return (
    <>
      <Section>
        <h2>Variablen</h2>
        <p>
          Variablen sind wie Behälter, in denen du Werte speichern kannst. Du
          gibst der Variable einen Namen und weist ihr einen Wert zu.
        </p>
      </Section>
      <Section>
        <h2>Variablen deklarieren</h2>
        <p>
          In JavaScript kannst du Variablen mit <code>let</code>,{" "}
          <code>const</code> oder <code>var</code> deklarieren:
        </p>
        <CodeBlock lang="javascript">
          {`
// let: kann später geändert werden
let alter = 15;
alter = 16; // geht

// const: kann nicht geändert werden
const name = "Anna";
// name = "Max"; // Fehler!

// var: veraltete Methode, besser let oder const verwenden
var alt = 14;
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Datentypen</h2>
        <p>
          JavaScript kennt verschiedene Datentypen:
        </p>
        <ul>
          <li><strong>string</strong>: Text in Anführungszeichen</li>
          <li><strong>number</strong>: Zahlen</li>
          <li><strong>boolean</strong>: true oder false</li>
          <li><strong>array</strong>: Listen von Werten</li>
          <li><strong>object</strong>: Sammlungen von Daten</li>
        </ul>
      </Section>
    </>
  );
}
