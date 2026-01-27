import CodeBlock from "@components/CodeBlock";
import JSTerminal from "@components/JSTerminal";
import { Math } from "@components/Katex";
import Section from "@components/Section";

export default function GymJSFunctions() {
  return (
    <>
      <section>
        <h2>Funktionen</h2>
        <p>
          Funktionen sind wie kleine Unterprogramme die wir im Code laufen
          lassen können. Das macht es für uns super praktisch, denn wir können
          unseren Code in einfache kleine logische Einheiten aufteilen.
        </p>
        <p>
          Sie möchten zum Beispiel wissen ob eine Zahl gerade ist oder nicht,
          dann können wir dafür eine eigene kleine Funktion schreiben, zum
          Beispiel <pre>isEven(...)</pre>. Diese Funktion gibt uns dann einen
          Wahrheitswert zurück, den können wir dann genau so verwenden wie
          zuvor.
        </p>
        <CodeBlock language="javascript">
          {`
            function isEven(number) {
              if (number % 2 === 0) {
                return true
              } else {
                return false
              }
            }

            const input = Number(process.argv[2])

            if (isEven(input)) {
              console.log("Die Zahl ist gerade")
            } else {
              console.log("Die Zahl ist nicht gerade")
            }
          `}
        </CodeBlock>
        <p>
          Wir haben nun unsere Logik in eine eigene Funktion geladen, und diese
          Funktion können wir immer wieder verwenden. Das praktische daran ist,
          der Name der Funktion beschreibt immer schön was denn passieren soll,
          das macht den Code deutlich lesbarer, denn wir müssen nicht unbedingt
          wissen wie man prüft ob eine Zahl gerade ist, wir müssen nur wissen
          das Die Funktion genau das macht, aber nicht wie Sie das macht. Somit
          wird der Code an anderen Stellen für uns einfacher zu lesen.
        </p>
      </section>
      <section>
        <JSTerminal
          filename="example-01.js"
          height="300px" // optional
          terminalHeight="250px" // optional
        >
          {`
            function isOdd(number) {
              if (number % 2 === 0) {
                return false
              } else {
                return true
              }
            }

            const input = Number(process.argv[2])

            if (isEven(input)) {
              console.log("Die Zahl ist ungerade")
            } else {
              console.log("Die Zahl ist nicht ungerade")
            }
          `}
        </JSTerminal>
      </section>
      <Section>
        <h2>Funktionswächter</h2>
        <p>
          Bei Funktionen kann es sein dass diese mit Argumenten aufgerufen
          werden, die keinen Sinn ergeben, oder das Argumente fehlen die Sie
          eigentlich brauchen. Für solche Fälle verwendet man Funktionswächter.
        </p>
        <p>
          Ein Funktionswächter prüft die Argumente und bricht die Funktion ab,
          wenn die Argumente keinen Sinn ergeben. Nehmen Sie an Sie haben die
          Funktion <Math>{`f(x) = 2 \\cdot x + 3`}</Math> und nun möchten Sie
          <Math>{`f(2)`}</Math> bestimmen. Falls keine Zahl eingegeben wird,
          brechen Sie die Funktion ab, und geben einfach nichts zurück.
        </p>
        <CodeBlock language="javascript">
          {`
            function f(input) {
              const x = Number(input)
              if (!x) {
                console.error("Sie müssen eine Zahl eingeben")
                return
              }

              return 2 * x + 3
            }


            console.log(f(process.argv[2]))
          `}
        </CodeBlock>
      </Section>
    </>
  );
}
