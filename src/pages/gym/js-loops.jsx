import CodeBlock from "@components/CodeBlock";
import JSTerminal from "@components/JSTerminal";
import LearningGoals from "@components/LearningGoals";
import Section from "@components/Section";

export default function GymJSLoops() {
  return (
    <>
      <section>
        <h2>Schleifen</h2>
        <p>
          Schleifen sind eines der wichtigsten Konzepte in der Programmierung.
          Sie erlauben es Ihnen, Code mehrfach auszuführen, ohne ihn immer
          wieder schreiben zu müssen. Das ist besonders nützlich wenn Sie mit
          Listen arbeiten, oder wenn Sie eine Aufgabe mehrfach wiederholen
          möchten.
        </p>
      </section>
      <LearningGoals>
        <ul>
          <li>
            Sie wissen wie man eine <pre>for</pre>-Schleife in Javascript
            schreibt.
          </li>
          <li>
            Sie wissen wie man mit einer <pre>for</pre>-Schleife durch eine
            Liste iteriert.
          </li>
          <li>
            Sie wissen wie man eine <pre>while</pre>-Schleife in Javascript
            schreibt.
          </li>
          <li>
            Sie verstehen den Unterschied zwischen <pre>for</pre> und{" "}
            <pre>while</pre> Schleifen.
          </li>
          <li>
            Sie wissen wie man mit <pre>break</pre> eine Schleife vorzeitig
            verlassen kann.
          </li>
          <li>
            Sie wissen wie man mit <pre>continue</pre> zum nächsten
            Schleifendurchlauf springt.
          </li>
        </ul>
      </LearningGoals>
      <section>
        <h2>Die for-Schleife</h2>
        <p>
          Die <pre>for</pre>-Schleife ist die am häufigsten verwendete Schleife.
          Sie besteht aus drei Teilen: dem Startwert, der Bedingung, und der
          Aktualisierung. Hier ist ein einfaches Beispiel das die Zahlen von 1
          bis 5 ausgibt:
        </p>
        <CodeBlock language="javascript">
          {`
            for (let i = 1; i <= 5; i++) {
              console.log(\`Zahl: \${i}\`)
            }
          `}
        </CodeBlock>
        <p>
          Die <pre>for</pre>-Schleife funktioniert wie folgt:
        </p>
        <ul>
          <li>
            <pre>let i = 1</pre> - Startwert: Die Variable <pre>i</pre> wird mit
            1 initialisiert
          </li>
          <li>
            <pre>i &lt;= 5</pre> - Bedingung: Die Schleife läuft solange{" "}
            <pre>i</pre> kleiner oder gleich 5 ist
          </li>
          <li>
            <pre>i++</pre> - Aktualisierung: Nach jedem Durchlauf wird{" "}
            <pre>i</pre> um 1 erhöht
          </li>
        </ul>
      </section>
      <Section>
        <h2>Durch Listen iterieren</h2>
        <p>
          Ein sehr häufiger Anwendungsfall für Schleifen ist das Durchlaufen von
          Listen. Sie können jeden Eintrag einer Liste besuchen und etwas damit
          machen:
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]
            
            for (let i = 0; i < fruits.length; i++) {
              console.log(\`Frucht \${i}: \${fruits[i]}\`)
            }
          `}
        </CodeBlock>
        <p>
          <strong>Wichtig:</strong> Beachten Sie dass wir bei 0 anfangen (weil
          Listen bei 0 beginnen) und die Bedingung{" "}
          <pre>i &lt; fruits.length</pre> verwenden (nicht <pre>&lt;=</pre>),
          weil der letzte Index immer <pre>length - 1</pre> ist.
        </p>
        <p>
          Ein praktisches Beispiel: Summieren Sie alle Zahlen in einer Liste:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [10, 20, 30, 40, 50]
            let sum = 0
            
            for (let i = 0; i < numbers.length; i++) {
              sum = sum + numbers[i]
            }
            
            console.log(\`Die Summe ist: \${sum}\`)  // Die Summe ist: 150
          `}
        </CodeBlock>
      </Section>
      <section>
        <h2>Die while-Schleife</h2>
        <p>
          Die <pre>while</pre>-Schleife ist einfacher als die <pre>for</pre>
          -Schleife. Sie läuft solange eine Bedingung erfüllt ist. Hier ist das
          gleiche Beispiel wie oben, aber mit einer <pre>while</pre>-Schleife:
        </p>
        <CodeBlock language="javascript">
          {`
            let i = 1
            
            while (i <= 5) {
              console.log(\`Zahl: \${i}\`)
              i++
            }
          `}
        </CodeBlock>
        <p>
          Die <pre>while</pre>-Schleife ist besonders nützlich wenn Sie nicht im
          Voraus wissen wie oft die Schleife laufen soll. Zum Beispiel wenn Sie
          Zahlen verdoppeln bis ein Grenzwert erreicht ist:
        </p>
        <CodeBlock language="javascript">
          {`
            let number = 1
            
            while (number < 100) {
              console.log(\`Aktuelle Zahl: \${number}\`)
              number = number * 2
            }
            
            console.log(\`Endergebnis: \${number}\`)
            // Gibt aus: 1, 2, 4, 8, 16, 32, 64, dann stoppt bei 128
          `}
        </CodeBlock>
        <p>
          Ein weiteres Beispiel: Zählen Sie wie viele Schritte nötig sind, um
          von einem Startwert auf 0 zu kommen:
        </p>
        <CodeBlock language="javascript">
          {`
            let value = 100
            let steps = 0
            
            while (value > 0) {
              value = value - 7
              steps++
              console.log(\`Schritt \${steps}: Wert ist jetzt \${value}\`)
            }
            
            console.log(\`Benötigte Schritte: \${steps}\`)
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>Der Unterschied zwischen for und while</h2>
        <p>
          Beide Schleifentypen können das gleiche tun, aber sie haben
          unterschiedliche Anwendungsfälle:
        </p>
        <ul>
          <li>
            Verwenden Sie <pre>for</pre>, wenn Sie wissen wie oft die Schleife
            laufen soll (z.B. durch eine Liste iterieren, von 1 bis 10 zählen)
          </li>
          <li>
            Verwenden Sie <pre>while</pre>, wenn die Anzahl der Durchläufe von
            einer Bedingung abhängt (z.B. bis eine bestimmte Eingabe kommt, bis
            ein Wert erreicht wird)
          </li>
        </ul>
        <p>
          Als Faustregel: <pre>for</pre> für Listen, <pre>while</pre> für
          Bedingungen.
        </p>
      </Section>
      <section>
        <h2>Die Schleife vorzeitig beenden mit break</h2>
        <p>
          Manchmal möchten Sie eine Schleife vorzeitig verlassen, wenn eine
          bestimmte Bedingung erfüllt ist. Dafür verwenden Sie das Schlüsselwort{" "}
          <pre>break</pre>:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [5, 12, 8, 130, 44, 3]
            
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] > 100) {
                console.log(\`Gefunden! \${numbers[i]} ist grösser als 100\`)
                break  // Stoppe die Schleife
              }
              console.log(\`Prüfe: \${numbers[i]}\`)
            }
          `}
        </CodeBlock>
        <p>
          In diesem Beispiel stoppt die Schleife sobald eine Zahl grösser als
          100 gefunden wird. Die restlichen Elemente werden nicht mehr
          überprüft.
        </p>
      </section>
      <Section>
        <h2>Einen Durchlauf überspringen mit continue</h2>
        <p>
          Das Schlüsselwort <pre>continue</pre> überspringt den restlichen Code
          im aktuellen Durchlauf und springt direkt zum nächsten:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] % 2 === 0) {
                continue  // Überspringe gerade Zahlen
              }
              console.log(\`Ungerade Zahl: \${numbers[i]}\`)
            }
          `}
        </CodeBlock>
        <p>
          Dieses Beispiel gibt nur die ungeraden Zahlen aus. Bei geraden Zahlen
          wird <pre>continue</pre> ausgeführt und der <pre>console.log</pre>{" "}
          übersprungen.
        </p>
        <p>
          Ein weiteres Beispiel: Filtern Sie eine Liste und ignorieren Sie leere
          Strings:
        </p>
        <CodeBlock language="javascript">
          {`
            const words = ["Hallo", "", "Welt", "", "JavaScript", ""]
            
            for (let i = 0; i < words.length; i++) {
              if (words[i] === "") {
                continue  // Überspringe leere Strings
              }
              console.log(\`Wort: \${words[i]}\`)
            }
          `}
        </CodeBlock>
      </Section>
      <section>
        <h2>Verschachtelte Schleifen</h2>
        <p>
          Sie können Schleifen auch ineinander verschachteln. Das ist nützlich
          wenn Sie mit mehrdimensionalen Daten arbeiten oder alle Kombinationen
          von Elementen durchgehen möchten:
        </p>
        <CodeBlock language="javascript">
          {`
            const colors = ["rot", "grün", "blau"]
            const sizes = ["S", "M", "L"]
            
            for (let i = 0; i < colors.length; i++) {
              for (let j = 0; j < sizes.length; j++) {
                console.log(\`\${colors[i]} in Grösse \${sizes[j]}\`)
              }
            }
          `}
        </CodeBlock>
        <p>
          Dieses Beispiel gibt alle möglichen Kombinationen von Farben und
          Grössen aus: "rot in Grösse S", "rot in Grösse M", usw.
        </p>
      </section>
      <section>
        <h2>Code testen</h2>
        <p>
          Hier können Sie mit Schleifen experimentieren. Probieren Sie
          verschiedene Beispiele aus:
        </p>
        <JSTerminal
          filename="example-loops.js"
          height="400px"
          terminalHeight="300px"
        >
          {`
            // Zähle von 1 bis 5
            console.log("For-Schleife:")
            for (let i = 1; i <= 5; i++) {
              console.log(\`Zahl: \${i}\`)
            }
            
            // Durchlaufe eine Liste
            console.log("\\nDurch Liste iterieren:")
            const fruits = ["Apfel", "Banane", "Orange"]
            for (let i = 0; i < fruits.length; i++) {
              console.log(\`Frucht \${i}: \${fruits[i]}\`)
            }
            
            // Summiere Zahlen
            console.log("\\nSumme berechnen:")
            const numbers = [10, 20, 30]
            let sum = 0
            for (let i = 0; i < numbers.length; i++) {
              sum = sum + numbers[i]
            }
            console.log(\`Summe: \${sum}\`)
          `}
        </JSTerminal>
      </section>
    </>
  );
}
