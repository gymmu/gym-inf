import CodeBlock from "@components/CodeBlock";
import JSTerminal from "@components/JSTerminal";
import { DMath } from "@components/Katex.jsx";
import Section from "@components/Section";

export default function GymJSConditions() {
  return (
    <>
      <section>
        <h2>Bedingungen</h2>
        <p>
          Beim Programmieren kommt es ganz häufig vor, das Sie je nach Zustand
          des Programms, etwas unterschiedliches antworten möchten. Und dafür
          können Sie nicht im voraus ein eigenes Programm für jeden Fall
          schreiben. Also brauchen wir eine Möglichkeit wie Sie im Programm
          selbst eine Fallunterscheidung machen können. Das ist aber ganz
          einfach.
        </p>
        <p>
          Nehmen Sie an Sie haben ein Programm, das testen soll ob Sie bereits
          volljährig sind. Sie geben dem Programm über die Kommandozeile ein
          Alter ein. Das Programm muss dann nur noch prüfen ob das Alter über 18
          ist, dann kann es eine Antwort geben, und ansonsten sagt das Programm
          Sie sind noch nicht volljährig. Das geht mit dem ganz einfachen Code
          hier:
        </p>
        <CodeBlock language="javascript">
          {`
            const age = process.argv[2]

            if (age >= 18) {
              console.log("Sie sind volljährig")
            } else {
              console.log("Sie sind noch nicht volljährig")
            }
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>Code testen</h2>
        <p>Den Code können Sie gleich hier testen</p>
        <JSTerminal
          filename="example-01.js"
          height="300px" // optional
          terminalHeight="250px" // optional
        >
          {`
            const age = process.argv[2]

            if (age >= 18) {
              console.log("Sie sind volljährig")
            } else {
              console.log("Sie sind noch nicht volljährig")
            }
          `}
        </JSTerminal>
      </Section>
    </>
  );
}
