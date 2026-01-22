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
        <p>
          Das wichtigste hier ist das Codestück in den <pre>()</pre>-Klammern.
          Das ist die Bedingung die erfüllt sein muss, damit der Code im ersten
          Block ausgeführt wird. Ist die Bedingung nicht erfüllt, wird der Code
          im <pre>else</pre>-Block ausgeführt.
        </p>
      </section>
      <section>
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
      </section>
      <Section>
        <h2>Mehrere Fälle zusammenhängen</h2>
        <p>
          Oftmals kommt es vor das Sie mehrere Fälle haben, die alle miteinander
          zu tun haben. Diese kann man dann mit Hilfe von{" "}
          <pre>else if (...)</pre> zusammenhängen.
        </p>
        <p>
          In Amerika sind die Regeln ab wann man autofahren darf, und ab wann
          man Alkohol trinken darf etwas anders als bei uns, schauen wir das in
          einem einfachen Code-Beispiel an.
        </p>
        <CodeBlock language="javascript">
          {`
            const age = Number(process.argv[2])
            
            if (age < 16) {
              console.log("Du darfst noch garnichts")
            } else if (16 <= age && age < 18) {
              console.log("Du darfst Autofahren, bist aber noch nicht volljährig")
            } else if ( 18 <= age && age < 21) {
              console.log("Du bist volljährig, darfst aber noch kein Alkohol trinken")
            } else {
              console.log("Du darfst Alkohol trinken.")
            }
          `}
        </CodeBlock>
        <p>
          Der Ausdruck in den <pre>()</pre>-Klammern ist ein Wahrheitswert. Das
          bedeutet das sein Resultat immer <pre>true</pre> oder <pre>false</pre>{" "}
          ist. Wahrheitswerte kann man mit logischen Operatoren wie{" "}
          <pre>und</pre>, <pre>oder</pre>, <pre>nicht</pre> kombinieren, um neue
          Wahrheitswerte zu bekommen.
        </p>
        <h3>
          Der <pre>und</pre>-Operator
        </h3>
        <p>
          Wenn Sie möchten das 2 Bedingungen zu gleichen Zeit erfüllt sind, wie
          wenn zum Beispiel eine Zahl zwischen 2 anderen Zahlen liegen soll,
          dann können Sie das mit dem logischen <pre>und</pre>-Operator machen.
          In Javascript ist dies <pre>&&</pre>. Also wenn eine Zahl zwischen 10
          und 20 liegen soll, dann machen Sie das wie folgt:{" "}
          <pre>{`(10 <= zahl && zahl < 20)`}</pre>.
        </p>
        <h3>
          Der <pre>oder</pre>-Operator
        </h3>
        <p>
          Oftmals kommt es vor das Sie 2 Bedingungen haben, und aber nur eine
          davon erfüllt sein muss, dann können Sie den logischen <pre>oder</pre>
          -Operator verwenden. In Javascript ist das <pre>||</pre>. Möchten Sie
          zum Beispiel das eine Zahl ausserhalb von einem Bereich liegt, also
          die Zahl ist kleiner als 10 oder grösser als 15, dann können Sie das
          so formulieren: <pre>{`(zahl < 10 || 15 < zahl)`}</pre>.
        </p>
        <h3>
          Der <pre>nicht</pre>-Operator
        </h3>
        <p>
          Diesen Operator können Sie brauchen wenn Sie eine logische Aussage
          umdrehen möchten. In Javascript wird dafür das Zeichen <pre>!</pre>
          direkt vor die Aussage geschrieben. Hier müssen Sie ein wenig
          aufpassen mit den Klammern. Als einfaches Beispiel könnten wir sagen
          eine Zahl darf <strong>nicht</strong> grösser als 50 sein. Dann können
          Sie das mit der folgenden Aussage ausdrücken:{" "}
          <pre>{`!(zahl >= 50)`}</pre>
        </p>
      </Section>
      <section>
        <h2>Truthy Werte in Javascript</h2>
        <p>
          Javascript ist ein wenig merkwürdig wenn es um Wahrheitswerte geht. Es
          gibt in Javascript das Konzept von einem <pre>truthy</pre> Wert. Das
          ist ein Ausdruck der <pre>true</pre> zurückgibt wenn er ausgewertet
          wird. In Javascript ist zum Beispiel der Wert von einer Zahl immer
          <pre>true</pre> ausser die Zahl ist 0. Wir können also Code schreiben
          der in etwa so aussieht:
        </p>
        <CodeBlock language="javascript">
          {`
            const number = Number(process.argv[2])

            if (number) {
              console.log("Die Zahl ist nicht 0.")
            } else {
              console.log("Sie haben eine 0 eingegeben.")
            }
          `}
        </CodeBlock>
        <p>
          Wir brauchen in Javascript also oftmals gar keinen
          Vergleichs-Operator, es reicht einfach einen Truthy-Wert zu haben.
          Dieses Konzept wird sehr oft verwendet wenn wir eine Eingabe
          überprüfen möchten, also ob wir überhaupt etwas vom Benutzer erhalten
          haben, so wie in dem folgenden Beispiel:
        </p>
        <CodeBlock language="javascript">
          {`
            const input = process.argv[2]

            if (!input) {
              console.log("Sie haben leider nicht eingegeben.")
            } else {
              console.log(\`Ihre Eingabe ist: \${input}\`)
            }
          `}
        </CodeBlock>
        <p>
          Dieses Konzept verwendet man oft als Funktionswächter, das werden wir
          später bei Funktionen noch genauer anschauen. Die Idee ist aber gleich
          wie oben, wenn uns eine Eingabe fehlt, dann brechen wir einfach ab.
        </p>
      </section>
    </>
  );
}
