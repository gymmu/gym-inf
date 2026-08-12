import CodeBlock from "@components/CodeBlock";
import Section from "@components/Section";

export default function JSFunktionalesProgrammieren() {
  return (
    <>
      <Section>
        <h2>Funktionales Programmieren</h2>
        <p>
          Funktionales Programmieren ist ein Programmierparadigma, bei dem
          Funktionen erste Bürger sind. Du arbeitest viel mit
          höherwertigen Funktionen wie <code>map</code>,{" "}
          <code>filter</code> und <code>reduce</code>.
        </p>
      </Section>
      <Section>
        <h2>map – Alle Elemente verändern</h2>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// Jede Zahl verdoppeln
const verdoppelt = zahlen.map(zahl => zahl * 2);
// [2, 4, 6, 8, 10]
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>filter – Elemente auswählen</h2>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8];

// Nur gerade Zahlen behalten
const gerade = zahlen.filter(zahl => zahl % 2 === 0);
// [2, 4, 6, 8]
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>reduce – Alles zusammenfassen</h2>
        <CodeBlock lang="javascript">
          {`
const zahlen = [1, 2, 3, 4, 5];

// Alle Zahlen addieren
const summe = zahlen.reduce((akkumulator, zahl) => {
  return akkumulator + zahl;
}, 0);
// 15
`}
        </CodeBlock>
      </Section>
      <Section>
        <h2>Warum funktionales Programmieren?</h2>
        <ul>
          <li>Code wird lesbarer und wartbarer</li>
          <li>Funktionen sind rein und vorhersagbar</li>
          <li>Weniger Seiteneffekte</li>
          <li>Einfacher zu testen</li>
        </ul>
      </Section>
    </>
  );
}
