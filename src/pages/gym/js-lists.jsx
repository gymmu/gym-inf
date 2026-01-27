import CodeBlock from "@components/CodeBlock";
import JSTerminal from "@components/JSTerminal";
import LearningGoals from "@components/LearningGoals";
import Section from "@components/Section";

export default function GymJSLists() {
  return (
    <>
      <section>
        <h2>Listen</h2>
        <p>
          Listen sind eine häufig verwendete Datenstruktur. Die kommen in allen
          Programmiersprachen vor, und Funktionieren immer ähnlich. Eine Liste
          ist einfach nur eine Variable, die mehrere Einträge enthält. So müssen
          wir nicht für jeden einzelnen Eintrag einen neuen Namen erfinden, wir
          können die Einträge über die Position in der Liste ansprechen.
        </p>
      </section>
      <LearningGoals>
        <ul>
          <li>Sie wissen wie man eine Liste in Javascript erstellt.</li>
          <li>
            Sie wissen wie man die Länge einer Liste in Javascript bestimmt.
          </li>
          <li>
            Sie wissen wie man ein bestimmtes Element aus einer Liste abrufen
            kann.
          </li>
          <li>
            Sie wissen wie man ein Element vorne oder hinten in einer Liste
            anhängen kann.
          </li>
          <li>Sie wissen wie man ein Element in einer Liste ersetzen kann.</li>
          <li>Sie wissen wie man ein Element aus einer Liste löschen kann.</li>
          <li>
            Sie wissen das <pre>process.argv</pre> eine Liste ist, und können
            bestimmte Elemente daraus auslesen.
          </li>
        </ul>
      </LearningGoals>
      <section>
        <h2>Listen erstellen</h2>
        <p>
          Eine Liste in Javascript zu erstellen ist sehr einfach. Sie verwenden
          dafür eckige Klammern <pre>[]</pre> und schreiben die Einträge darin
          mit Komma getrennt. Hier ist ein einfaches Beispiel mit einer
          Einkaufsliste:
        </p>
        <CodeBlock language="javascript">
          {`
            const shoppingList = ["Milch", "Brot", "Eier", "Butter"]
            console.log(shoppingList)
          `}
        </CodeBlock>
        <p>
          Sie können in einer Liste beliebige Werte speichern: Texte, Zahlen,
          oder sogar andere Listen. Hier ist eine Liste mit verschiedenen
          Datentypen:
        </p>
        <CodeBlock language="javascript">
          {`
            const mixedList = ["Text", 42, true, 3.14]
            console.log(mixedList)
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>Die Länge einer Liste bestimmen</h2>
        <p>
          Oftmals möchten Sie wissen wie viele Einträge in einer Liste sind.
          Dafür hat jede Liste in Javascript eine Eigenschaft namens{" "}
          <pre>length</pre>. Diese gibt Ihnen die Anzahl der Elemente zurück:
        </p>
        <CodeBlock language="javascript">
          {`
            const shoppingList = ["Milch", "Brot", "Eier", "Butter"]
            console.log(\`Die Liste hat \${shoppingList.length} Einträge\`)
            
            const numbers = [10, 20, 30, 40, 50]
            console.log(\`Diese Liste hat \${numbers.length} Zahlen\`)
          `}
        </CodeBlock>
      </Section>
      <section>
        <h2>Elemente aus einer Liste abrufen</h2>
        <p>
          Um ein bestimmtes Element aus einer Liste zu bekommen, verwenden Sie
          eckige Klammern mit der Position des Elements.{" "}
          <strong>Wichtig:</strong> In der Programmierung fangen wir immer bei 0
          an zu zählen! Das erste Element ist also an Position 0, das zweite an
          Position 1, und so weiter.
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]
            
            console.log(\`Erste Frucht: \${fruits[0]}\`)    // Apfel
            console.log(\`Zweite Frucht: \${fruits[1]}\`)   // Banane
            console.log(\`Dritte Frucht: \${fruits[2]}\`)   // Orange
            console.log(\`Vierte Frucht: \${fruits[3]}\`)   // Erdbeere
          `}
        </CodeBlock>
        <p>
          Sie können auch vom Ende der Liste zählen. Dafür verwenden Sie
          negative Zahlen. <pre>-1</pre> ist das letzte Element, <pre>-2</pre>{" "}
          das vorletzte, und so weiter:
        </p>
        <CodeBlock language="javascript">
          {`
            const fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]
            
            console.log(\`Letzte Frucht: \${fruits[fruits.length - 1]}\`)    // Erdbeere
            console.log(\`Vorletzte Frucht: \${fruits[fruits.length - 2]}\`) // Orange
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>Elemente zu einer Liste hinzufügen</h2>
        <p>
          Es gibt zwei wichtige Methoden um Elemente zu einer Liste
          hinzuzufügen:
        </p>
        <h3>
          Hinten anhängen mit <pre>push()</pre>
        </h3>
        <p>
          Die Methode <pre>push()</pre> fügt ein Element am Ende der Liste
          hinzu:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3]
            console.log(\`Vorher: \${numbers}\`)
            
            numbers.push(4)
            console.log(\`Nachher: \${numbers}\`)  // [1, 2, 3, 4]
            
            numbers.push(5)
            console.log(\`Jetzt: \${numbers}\`)    // [1, 2, 3, 4, 5]
          `}
        </CodeBlock>
        <h3>
          Vorne einfügen mit <pre>unshift()</pre>
        </h3>
        <p>
          Die Methode <pre>unshift()</pre> fügt ein Element am Anfang der Liste
          ein:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3]
            console.log(\`Vorher: \${numbers}\`)
            
            numbers.unshift(0)
            console.log(\`Nachher: \${numbers}\`)  // [0, 1, 2, 3]
            
            numbers.unshift(-1)
            console.log(\`Jetzt: \${numbers}\`)    // [-1, 0, 1, 2, 3]
          `}
        </CodeBlock>
      </Section>
      <section>
        <h2>Elemente in einer Liste ersetzen</h2>
        <p>
          Um ein Element in einer Liste zu ersetzen, greifen Sie einfach über
          den Index darauf zu und weisen einen neuen Wert zu:
        </p>
        <CodeBlock language="javascript">
          {`
            const animals = ["Katze", "Hund", "Maus"]
            console.log(\`Vorher: \${animals}\`)
            
            animals[1] = "Vogel"
            console.log(\`Nachher: \${animals}\`)  // ["Katze", "Vogel", "Maus"]
            
            animals[0] = "Tiger"
            console.log(\`Jetzt: \${animals}\`)    // ["Tiger", "Vogel", "Maus"]
          `}
        </CodeBlock>
      </section>
      <Section>
        <h2>Elemente aus einer Liste löschen</h2>
        <p>
          Es gibt mehrere Möglichkeiten um Elemente aus einer Liste zu löschen:
        </p>
        <h3>
          Letztes Element entfernen mit <pre>pop()</pre>
        </h3>
        <p>
          Die Methode <pre>pop()</pre> entfernt das letzte Element und gibt es
          zurück:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5]
            console.log(\`Vorher: \${numbers}\`)
            
            const lastItem = numbers.pop()
            console.log(\`Entfernt: \${lastItem}\`)  // 5
            console.log(\`Nachher: \${numbers}\`)    // [1, 2, 3, 4]
          `}
        </CodeBlock>
        <h3>
          Erstes Element entfernen mit <pre>shift()</pre>
        </h3>
        <p>
          Die Methode <pre>shift()</pre> entfernt das erste Element und gibt es
          zurück:
        </p>
        <CodeBlock language="javascript">
          {`
            const numbers = [1, 2, 3, 4, 5]
            console.log(\`Vorher: \${numbers}\`)
            
            const firstItem = numbers.shift()
            console.log(\`Entfernt: \${firstItem}\`)  // 1
            console.log(\`Nachher: \${numbers}\`)   // [2, 3, 4, 5]
          `}
        </CodeBlock>
        <h3>
          Element an beliebiger Position entfernen mit <pre>splice()</pre>
        </h3>
        <p>
          Die Methode <pre>splice()</pre> kann Elemente an jeder Position
          entfernen. Der erste Parameter ist die Position, der zweite wie viele
          Elemente entfernt werden sollen:
        </p>
        <CodeBlock language="javascript">
          {`
            const colors = ["rot", "grün", "blau", "gelb", "orange"]
            console.log(\`Vorher: \${colors}\`)
            
            // Entferne 1 Element an Position 2
            colors.splice(2, 1)
            console.log(\`Nachher: \${colors}\`)  // ["rot", "grün", "gelb", "orange"]
            
            // Entferne 2 Elemente an Position 1
            colors.splice(1, 2)
            console.log(\`Jetzt: \${colors}\`)    // ["rot", "orange"]
          `}
        </CodeBlock>
      </Section>
      <section>
        <h2>process.argv ist eine Liste</h2>
        <p>
          Sie haben bereits <pre>process.argv</pre> kennengelernt, um Eingaben
          von der Kommandozeile zu bekommen. <pre>process.argv</pre> ist
          tatsächlich eine Liste! Diese Liste enthält alle Argumente die beim
          Programmstart übergeben wurden.
        </p>
        <p>
          Die ersten zwei Einträge sind immer der Pfad zu Node.js und der Pfad
          zu Ihrer Datei. Ihre eigenen Argumente fangen bei Index 2 an:
        </p>
        <CodeBlock language="javascript">
          {`
            console.log("Alle Argumente:")
            console.log(process.argv)
            
            console.log(\`\\nDas erste Argument: \${process.argv[2]}\`)
            console.log(\`Das zweite Argument: \${process.argv[3]}\`)
            console.log(\`Das dritte Argument: \${process.argv[4]}\`)
            
            console.log(\`\\nAnzahl der Argumente: \${process.argv.length}\`)
          `}
        </CodeBlock>
        <p>
          Das ist besonders nützlich wenn Sie mehrere Eingaben haben. Zum
          Beispiel ein Programm das zwei Zahlen addiert:
        </p>
        <CodeBlock language="javascript">
          {`
            const number1 = Number(process.argv[2])
            const number2 = Number(process.argv[3])
            
            const sum = number1 + number2
            console.log(\`\${number1} + \${number2} = \${sum}\`)
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Code testen</h2>
        <p>
          Hier können Sie mit Listen experimentieren. Probieren Sie die
          verschiedenen Methoden aus:
        </p>
        <JSTerminal
          filename="example-lists.js"
          height="400px"
          terminalHeight="300px"
        >
          {`
            // Erstelle eine Liste mit Ihren Lieblingsspeisen
            const foods = ["Pizza", "Pasta", "Salat"]
            console.log(\`Meine Speisen: \${foods}\`)
            console.log(\`Anzahl: \${foods.length}\`)
            
            // Füge eine neue Speise hinzu
            foods.push("Burger")
            console.log(\`\\nNach push: \${foods}\`)
            
            // Greife auf einzelne Elemente zu
            console.log(\`\\nErste Speise: \${foods[0]}\`)
            console.log(\`Letzte Speise: \${foods[foods.length - 1]}\`)
            
            // Ändere eine Speise
            foods[1] = "Lasagne"
            console.log(\`\\nNach Änderung: \${foods}\`)
            
            // Entferne die letzte Speise
            const removed = foods.pop()
            console.log(\`\\nEntfernt: \${removed}\`)
            console.log(\`Finale Liste: \${foods}\`)
          `}
        </JSTerminal>
      </section>
    </>
  );
}
