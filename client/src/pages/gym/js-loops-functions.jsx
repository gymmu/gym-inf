import CodeBlock from "@components/CodeBlock";
import JSTerminal from "@components/JSTerminal";
import LearningGoals from "@components/LearningGoals";
import Section from "@components/Section";

export default function GymJSLoopsFunctions() {
  return (
    <>
      <section>
        <h2>Schleifen mit Funktionen</h2>
        <p>
          In Javascript gibt es neben den klassischen <pre>for</pre> und{" "}
          <pre>while</pre> Schleifen auch spezielle Funktionen, die durch Listen
          iterieren können. Diese Funktionen sind eine moderne Alternative zu
          normalen Schleifen und werden oft verwendet, weil der Code dadurch
          lesbarer wird.
        </p>
        <p>
          <strong>Wichtig:</strong> Diese Funktionen sind optional! Sie können
          alles auch mit normalen <pre>for</pre>-Schleifen machen. Aber es ist
          gut zu wissen dass es diese Alternative gibt, weil Sie diese oft in
          modernem Code sehen werden.
        </p>
      </section>
      <LearningGoals>
        <ul>
          <li>
            Sie kennen <pre>forEach</pre> als Alternative zur <pre>for</pre>
            -Schleife.
          </li>
          <li>
            Sie wissen wie man mit <pre>map</pre> eine Liste transformiert.
          </li>
          <li>
            Sie wissen wie man mit <pre>filter</pre> eine Liste filtert.
          </li>
          <li>
            Sie verstehen den Unterschied zwischen diesen Funktionen und
            normalen Schleifen.
          </li>
        </ul>
      </LearningGoals>
      <section>
        <h2>forEach - Jedes Element durchlaufen</h2>
        <p>
          Die <pre>forEach</pre> Funktion führt für jedes Element in einer Liste
          eine Aktion aus. Sie ist eine einfache Alternative zur <pre>for</pre>
          -Schleife.
        </p>
        <p>
          Vergleichen wir zuerst eine normale <pre>for</pre>-Schleife:
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit for-Schleife
            for (let i = 0; i < fruits.length; i++) {
              console.log(\`Frucht: \${fruits[i]}\`)
            }
          `}
        </CodeBlock>
        <p>
          Das gleiche mit <pre>forEach</pre>:
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit forEach
            fruits.forEach(function(fruit) {
              console.log(\`Frucht: \${fruit}\`)
            })
          `}
        </CodeBlock>
        <p>
          Beachten Sie: Bei <pre>forEach</pre> müssen Sie sich nicht um den
          Index kümmern. Die Funktion gibt Ihnen direkt jedes Element.
        </p>
        <p>Ein weiteres einfaches Beispiel mit Zahlen:</p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5]
            
            numbers.forEach(function(number) {
              console.log(\`Das Doppelte von \${number} ist \${number * 2}\`)
            })
          `}
        </CodeBlock>
        <h3>Alternative Syntax: for...of</h3>
        <p>
          Es gibt noch eine weitere moderne Syntax um durch Listen zu iterieren:
          die <pre>for...of</pre> Schleife. Sie ist sehr ähnlich zu{" "}
          <pre>forEach</pre>, aber verwendet die klassische Schleifen-Syntax:
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit for...of
            for (const fruit of fruits) {
              console.log(\`Frucht: \${fruit}\`)
            }
          `}
        </CodeBlock>
        <p>
          Der Vorteil von <pre>for...of</pre>: Sie können <pre>break</pre> und{" "}
          <pre>continue</pre> verwenden, was bei <pre>forEach</pre> nicht geht.
        </p>
        <h3>Alternative Syntax: for...in</h3>
        <p>
          Die <pre>for...in</pre> Schleife iteriert über die Indizes (nicht die
          Werte!) einer Liste:
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange"]
            
            // Mit for...in (gibt Indizes zurück)
            for (const index in fruits) {
              console.log(\`Index \${index}: \${fruits[index]}\`)
            }
          `}
        </CodeBlock>
        <p>
          <strong>Wichtig:</strong> <pre>for...in</pre> wird hauptsächlich für
          Objekte verwendet, nicht für Listen. Für Listen ist{" "}
          <pre>for...of</pre> die bessere Wahl.
        </p>
        <h3>Zusammenfassung der Varianten</h3>
        <CodeBlock language="javascript">
          {`
            const numbers = [10, 20, 30]
            
            // 1. Klassische for-Schleife (mit Index)
            for (let i = 0; i < numbers.length; i++) {
              console.log(numbers[i])
            }
            
            // 2. forEach (ohne Index)
            numbers.forEach(function(num) {
              console.log(num)
            })
            
            // 3. for...of (ohne Index, mit break/continue möglich)
            for (const num of numbers) {
              console.log(num)
            }
            
            // 4. for...in (mit Index, nicht empfohlen für Listen)
            for (const index in numbers) {
              console.log(numbers[index])
            }
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>map - Eine Liste transformieren</h2>
        <p>
          Die <pre>map</pre> Funktion erstellt eine neue Liste, indem sie jedes
          Element transformiert. Sie ist sehr nützlich wenn Sie aus einer Liste
          eine neue Liste machen möchten.
        </p>
        <p>Beispiel: Verdoppeln Sie alle Zahlen in einer Liste:</p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5]
            
            // Mit for-Schleife
            const doubled = []
            for (let i = 0; i < numbers.length; i++) {
              doubled.push(numbers[i] * 2)
            }
            console.log(doubled)  // [2, 4, 6, 8, 10]
          `}
        </CodeBlock>
        <p>
          Das gleiche mit <pre>map</pre>:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5]
            
            // Mit map
            const doubled = numbers.map(function(number) {
              return number * 2
            })
            console.log(doubled)  // [2, 4, 6, 8, 10]
          `}
        </CodeBlock>
        <p>
          <strong>Wichtig:</strong> <pre>map</pre> gibt immer eine neue Liste
          zurück. Die alte Liste bleibt unverändert.
        </p>
        <p>Ein Beispiel mit Strings:</p>
        <CodeBlock language="javascript">
          {`
            const names = ["anna", "bob", "charlie"]
            
            const uppercased = names.map(function(name) {
              return name.toUpperCase()
            })
            
            console.log(uppercased)  // ["ANNA", "BOB", "CHARLIE"]
            console.log(names)       // ["anna", "bob", "charlie"] - unverändert
          `}
        </CodeBlock>
      </Section>
      <section>
        <h2>filter - Eine Liste filtern</h2>
        <p>
          Die <pre>filter</pre> Funktion erstellt eine neue Liste, die nur die
          Elemente enthält, die eine Bedingung erfüllen.
        </p>
        <p>Beispiel: Finden Sie alle Zahlen die grösser als 10 sind:</p>
        <CodeBlock language="javascript">
          {`
            const numbers = [5, 12, 8, 130, 44, 3]
            
            // Mit for-Schleife
            const bigNumbers = []
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] > 10) {
                bigNumbers.push(numbers[i])
              }
            }
            console.log(bigNumbers)  // [12, 130, 44]
          `}
        </CodeBlock>
        <p>
          Das gleiche mit <pre>filter</pre>:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [5, 12, 8, 130, 44, 3]
            
            // Mit filter
            const bigNumbers = numbers.filter(function(number) {
              return number > 10
            })
            console.log(bigNumbers)  // [12, 130, 44]
          `}
        </CodeBlock>
        <p>Ein Beispiel mit Strings:</p>
        <CodeBlock language="javascript">
          {`
            const words = ["Hallo", "Hi", "Guten Tag", "Hey", "Grüezi"]
            
            // Finde alle Wörter die länger als 4 Buchstaben sind
            const longWords = words.filter(function(word) {
              return word.length > 4
            })
            
            console.log(longWords)  // ["Hallo", "Guten Tag", "Grüezi"]
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>Funktionen kombinieren</h2>
        <p>
          Das Besondere an <pre>map</pre> und <pre>filter</pre> ist, dass Sie
          diese kombinieren können. Weil beide eine neue Liste zurückgeben,
          können Sie das Resultat von <pre>filter</pre> direkt an <pre>map</pre>{" "}
          weitergeben.
        </p>
        <p>Beispiel: Finde alle geraden Zahlen und verdopple sie dann.</p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            
            // Schritt 1: Filtere alle geraden Zahlen
            const evenNumbers = numbers.filter(function(number) {
              return number % 2 === 0
            })
            console.log(evenNumbers)  // [2, 4, 6, 8, 10]
            
            // Schritt 2: Verdopple diese Zahlen
            const doubled = evenNumbers.map(function(number) {
              return number * 2
            })
            console.log(doubled)  // [4, 8, 12, 16, 20]
          `}
        </CodeBlock>
        <p>
          So sehen Sie klar was in jedem Schritt passiert: Erst wird gefiltert,
          dann wird transformiert.
        </p>
      </Section>
      <section>
        <h2>Wann welche Methode verwenden?</h2>
        <p>Hier ist eine einfache Übersicht:</p>
        <ul>
          <li>
            <pre>forEach</pre> - Wenn Sie für jedes Element etwas tun möchten
            (z.B. ausgeben, in Datenbank speichern)
          </li>
          <li>
            <pre>map</pre> - Wenn Sie eine neue Liste mit transformierten
            Elementen erstellen möchten
          </li>
          <li>
            <pre>filter</pre> - Wenn Sie eine neue Liste mit ausgewählten
            Elementen erstellen möchten
          </li>
          <li>
            <pre>for</pre>-Schleife - Wenn Sie volle Kontrolle brauchen (z.B.
            break, continue, Index ist wichtig)
          </li>
        </ul>
        <p>
          <strong>Merke:</strong> Alle diese Methoden erreichen das gleiche
          Ziel. Es ist eine Frage des Stils und der Lesbarkeit. Verwenden Sie
          was für Sie am verständlichsten ist.
        </p>
      </section>
      <section>
        <h2>Code testen</h2>
        <p>Hier können Sie mit den verschiedenen Funktionen experimentieren:</p>
        <JSTerminal
          filename="example-loop-functions.js"
          height="400px"
          terminalHeight="300px"
        >
          {`
            const numbers = [1, 2, 3, 4, 5]
            
            // forEach - Jedes Element ausgeben
            console.log("forEach:")
            numbers.forEach(function(number) {
              console.log(\`Zahl: \${number}\`)
            })
          `}
        </JSTerminal>
      </section>
    </>
  );
}
