import CodeBlockWithHintsAndSolution from "@components/CodeBlockWithHintsAndSolution";
import Section from "@components/Section";

export default function GymJSAufgaben() {
  return (
    <>
      <section>
        <h2>Aufgaben: Funktionen, Listen und Schleifen</h2>
        <p>
          Hier finden Sie 20 Aufgaben um Ihr Wissen über Funktionen, Listen und
          Schleifen zu festigen. Die ersten 15 Aufgaben sind einfacher, die
          letzten 5 etwas anspruchsvoller.
        </p>
        <p>
          <strong>Tipp:</strong> Erstellen Sie für jede Aufgabe eine neue Datei
          (z.B. <pre>aufgabe-01.js</pre>) und testen Sie Ihren Code mit{" "}
          <pre>node aufgabe-01.js</pre>.
        </p>
      </section>

      <Section>
        <h2>Hinweise zum Lösen der Aufgaben</h2>
        <ul>
          <li>
            Beginnen Sie mit den einfachen Aufgaben und arbeiten Sie sich nach
            oben.
          </li>
          <li>
            Testen Sie Ihren Code mit verschiedenen Eingaben um sicherzustellen
            dass er funktioniert.
          </li>
          <li>
            Bei den Kommandozeilen-Aufgaben: Vergessen Sie nicht{" "}
            <pre>process.argv[2]</pre>, <pre>process.argv[3]</pre> usw. zu
            verwenden.
          </li>
          <li>
            Verwenden Sie <pre>Number()</pre> um Strings in Zahlen umzuwandeln.
          </li>
          <li>
            Bei den anspruchsvolleren Aufgaben: Brechen Sie das Problem in
            kleinere Schritte auf.
          </li>
          <li>
            Es gibt oft mehrere richtige Lösungen - wichtig ist dass Ihr Code
            funktioniert und Sie ihn verstehen.
          </li>
          <li>
            Verwenden Sie die Hinweise wenn Sie nicht weiterkommen - dort steht
            wo Sie den Code hinzufügen müssen.
          </li>
          <li>
            Schauen Sie sich die Lösung erst an wenn Sie es wirklich selbst
            versucht haben! Die Lösung verschwindet nach 15 Sekunden und ist
            dann für 5 Minuten gesperrt.
          </li>
        </ul>
      </Section>

      <section>
        <h2>Einfache Aufgaben (1-15)</h2>

        <h3>Aufgabe 1: Begrüssung</h3>
        <p>
          Schreiben Sie eine Funktion <pre>greet(name)</pre>, die einen Namen
          als Parameter erhält und eine Begrüssung ausgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-01"
          example={`
            // Beispiel-Aufruf:
            greet("Anna")
            // Ausgabe: Hallo Anna!
          `}
          hint={`
            function greet(name) {
              // TODO: Geben Sie "Hallo" gefolgt vom Namen und einem "!" aus
              // Tipp: Verwenden Sie Template Literals mit \${name}
            }
            
            greet("Anna")
          `}
          solution={`
            // Funktion die einen Namen entgegennimmt und eine Begrüssung ausgibt
            function greet(name) {
              // Verwende Template Literals um den Namen in die Begrüssung einzufügen
              console.log(\`Hallo \${name}!\`)
            }
            
            // Teste die Funktion
            greet("Anna")
            greet("Bob")
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 2: Zahlen verdoppeln</h3>
        <p>
          Schreiben Sie eine Funktion <pre>double(number)</pre>, die eine Zahl
          verdoppelt und das Ergebnis zurückgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-02"
          example={`
            // Beispiel-Aufruf:
            const result = double(5)
            console.log(result)  // 10
          `}
          hint={`
            function double(number) {
              // TODO: Multiplizieren Sie die Zahl mit 2 und geben Sie das Ergebnis zurück
              // Tipp: Verwenden Sie 'return'
            }
            
            const result = double(5)
            console.log(result)
          `}
          solution={`
            // Funktion die eine Zahl verdoppelt
            function double(number) {
              // Multipliziere die Zahl mit 2 und gib das Ergebnis zurück
              return number * 2
            }
            
            // Teste die Funktion mit verschiedenen Zahlen
            console.log(double(5))   // 10
            console.log(double(7))   // 14
            console.log(double(100)) // 200
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 3: Maximum von zwei Zahlen</h3>
        <p>
          Schreiben Sie eine Funktion <pre>max(a, b)</pre>, die die grössere von
          zwei Zahlen zurückgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-03"
          example={`
            // Beispiel-Aufruf:
            console.log(max(5, 10))  // 10
            console.log(max(20, 15)) // 20
          `}
          hint={`
            function max(a, b) {
              // TODO: Vergleichen Sie a und b mit einer if-Bedingung
              // Geben Sie die grössere Zahl zurück
              // Tipp: if (a > b) { return ... } else { return ... }
            }
            
            console.log(max(5, 10))
          `}
          solution={`
            // Funktion die das Maximum von zwei Zahlen zurückgibt
            function max(a, b) {
              // Prüfe welche Zahl grösser ist
              if (a > b) {
                // Wenn a grösser ist, gib a zurück
                return a
              } else {
                // Sonst gib b zurück
                return b
              }
            }
            
            // Teste die Funktion
            console.log(max(5, 10))  // 10
            console.log(max(20, 15)) // 20
            console.log(max(7, 7))   // 7
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 4: Gerade oder ungerade</h3>
        <p>
          Schreiben Sie eine Funktion <pre>isEven(number)</pre>, die{" "}
          <pre>true</pre> zurückgibt wenn die Zahl gerade ist, sonst{" "}
          <pre>false</pre>.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-04"
          example={`
            // Beispiel-Aufruf:
            console.log(isEven(4))  // true
            console.log(isEven(7))  // false
          `}
          hint={`
            function isEven(number) {
              // TODO: Prüfen Sie ob die Zahl durch 2 teilbar ist
              // Tipp: Verwenden Sie den Modulo-Operator %
              // Wenn number % 2 === 0, dann ist die Zahl gerade
            }
            
            console.log(isEven(4))
          `}
          solution={`
            // Funktion die prüft ob eine Zahl gerade ist
            function isEven(number) {
              // Der Modulo-Operator % gibt den Rest einer Division zurück
              // Wenn eine Zahl durch 2 teilbar ist, ist der Rest 0
              return number % 2 === 0
            }
            
            // Teste die Funktion
            console.log(isEven(4))  // true
            console.log(isEven(7))  // false
            console.log(isEven(0))  // true
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 5: Zahlen von 1 bis N</h3>
        <p>
          Schreiben Sie eine Funktion <pre>printNumbers(n)</pre>, die alle
          Zahlen von 1 bis n ausgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-05"
          example={`
            // Beispiel-Aufruf:
            printNumbers(5)
            // Ausgabe: 1, 2, 3, 4, 5
          `}
          hint={`
            function printNumbers(n) {
              // TODO: Verwenden Sie eine for-Schleife von 1 bis n
              // Tipp: for (let i = 1; i <= n; i++) { ... }
            }
            
            printNumbers(5)
          `}
          solution={`
            // Funktion die alle Zahlen von 1 bis n ausgibt
            function printNumbers(n) {
              // Schleife von 1 bis n (inklusive)
              for (let i = 1; i <= n; i++) {
                // Gib die aktuelle Zahl aus
                console.log(i)
              }
            }
            
            // Teste die Funktion
            printNumbers(5)
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 6: Summe von 1 bis N</h3>
        <p>
          Schreiben Sie eine Funktion <pre>sumUpTo(n)</pre>, die die Summe aller
          Zahlen von 1 bis n berechnet und zurückgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-06"
          example={`
            // Beispiel-Aufruf:
            console.log(sumUpTo(5))  // 15 (weil 1+2+3+4+5 = 15)
            console.log(sumUpTo(10)) // 55
          `}
          hint={`
            function sumUpTo(n) {
              // TODO: Erstellen Sie eine Variable sum = 0
              // Verwenden Sie eine Schleife und addieren Sie jede Zahl zu sum
              // Geben Sie sum am Ende zurück
            }
            
            console.log(sumUpTo(5))
          `}
          solution={`
            // Funktion die die Summe von 1 bis n berechnet
            function sumUpTo(n) {
              // Variable um die Summe zu speichern, startet bei 0
              let sum = 0
              
              // Schleife von 1 bis n
              for (let i = 1; i <= n; i++) {
                // Addiere die aktuelle Zahl zur Summe
                sum = sum + i
              }
              
              // Gib die finale Summe zurück
              return sum
            }
            
            // Teste die Funktion
            console.log(sumUpTo(5))   // 15
            console.log(sumUpTo(10))  // 55
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 7: Liste ausgeben</h3>
        <p>
          Schreiben Sie eine Funktion <pre>printList(list)</pre>, die alle
          Elemente einer Liste ausgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-07"
          example={`
            // Beispiel-Aufruf:
            const fruits = ["Apfel", "Banane", "Orange"]
            printList(fruits)
            // Ausgabe: Apfel, Banane, Orange
          `}
          hint={`
            function printList(list) {
              // TODO: Verwenden Sie eine for-Schleife um durch die Liste zu iterieren
              // Tipp: for (let i = 0; i < list.length; i++) { ... }
              // Geben Sie jedes Element mit console.log(list[i]) aus
            }
            
            const fruits = ["Apfel", "Banane", "Orange"]
            printList(fruits)
          `}
          solution={`
            // Funktion die alle Elemente einer Liste ausgibt
            function printList(list) {
              // Iteriere durch die gesamte Liste
              for (let i = 0; i < list.length; i++) {
                // Gib das Element am Index i aus
                console.log(list[i])
              }
            }
            
            // Teste die Funktion
            const fruits = ["Apfel", "Banane", "Orange"]
            printList(fruits)
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 8: Summe einer Liste</h3>
        <p>
          Schreiben Sie eine Funktion <pre>sumList(numbers)</pre>, die die Summe
          aller Zahlen in einer Liste berechnet.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-08"
          example={`
            // Beispiel-Aufruf:
            const numbers = [10, 20, 30, 40]
            console.log(sumList(numbers))  // 100
          `}
          hint={`
            function sumList(numbers) {
              // TODO: Erstellen Sie eine Variable sum = 0
              // Durchlaufen Sie die Liste und addieren Sie jede Zahl zu sum
              // Geben Sie sum zurück
            }
            
            const numbers = [10, 20, 30, 40]
            console.log(sumList(numbers))
          `}
          solution={`
            // Funktion die die Summe aller Zahlen in einer Liste berechnet
            function sumList(numbers) {
              // Variable für die Summe
              let sum = 0
              
              // Durchlaufe alle Zahlen in der Liste
              for (let i = 0; i < numbers.length; i++) {
                // Addiere die aktuelle Zahl zur Summe
                sum = sum + numbers[i]
              }
              
              // Gib die Summe zurück
              return sum
            }
            
            // Teste die Funktion
            const numbers = [10, 20, 30, 40]
            console.log(sumList(numbers))  // 100
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 9: Durchschnitt berechnen</h3>
        <p>
          Schreiben Sie eine Funktion <pre>average(numbers)</pre>, die den
          Durchschnitt aller Zahlen in einer Liste berechnet.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-09"
          example={`
            // Beispiel-Aufruf:
            const numbers = [10, 20, 30]
            console.log(average(numbers))  // 20
          `}
          hint={`
            function average(numbers) {
              // TODO: Berechnen Sie zuerst die Summe aller Zahlen
              // Teilen Sie dann die Summe durch die Anzahl der Elemente
              // Tipp: numbers.length gibt die Anzahl der Elemente
            }
            
            const numbers = [10, 20, 30]
            console.log(average(numbers))
          `}
          solution={`
            // Funktion die den Durchschnitt einer Liste berechnet
            function average(numbers) {
              // Zuerst die Summe berechnen
              let sum = 0
              for (let i = 0; i < numbers.length; i++) {
                sum = sum + numbers[i]
              }
              
              // Durchschnitt = Summe / Anzahl
              const avg = sum / numbers.length
              
              // Gib den Durchschnitt zurück
              return avg
            }
            
            // Teste die Funktion
            const numbers = [10, 20, 30]
            console.log(average(numbers))  // 20
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 10: Maximum in Liste finden</h3>
        <p>
          Schreiben Sie eine Funktion <pre>findMax(numbers)</pre>, die die
          grösste Zahl in einer Liste findet.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-10"
          example={`
            // Beispiel-Aufruf:
            const numbers = [5, 12, 8, 130, 44]
            console.log(findMax(numbers))  // 130
          `}
          hint={`
            function findMax(numbers) {
              // TODO: Speichern Sie das erste Element als maximal
              // Durchlaufen Sie die Liste und vergleichen Sie jede Zahl
              // Wenn eine Zahl grösser ist, aktualisieren Sie das Maximum
            }
            
            const numbers = [5, 12, 8, 130, 44]
            console.log(findMax(numbers))
          `}
          solution={`
            // Funktion die die grösste Zahl in einer Liste findet
            function findMax(numbers) {
              // Starte mit dem ersten Element als Maximum
              let max = numbers[0]
              
              // Durchlaufe alle anderen Elemente
              for (let i = 1; i < numbers.length; i++) {
                // Wenn die aktuelle Zahl grösser ist als unser Maximum
                if (numbers[i] > max) {
                  // Aktualisiere das Maximum
                  max = numbers[i]
                }
              }
              
              // Gib das Maximum zurück
              return max
            }
            
            // Teste die Funktion
            const numbers = [5, 12, 8, 130, 44]
            console.log(findMax(numbers))  // 130
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 11: Countdown</h3>
        <p>
          Schreiben Sie eine Funktion <pre>countdown(n)</pre>, die von n bis 0
          herunterzählt und die Zahlen ausgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-11"
          example={`
            // Beispiel-Aufruf:
            countdown(5)
            // Ausgabe: 5, 4, 3, 2, 1, 0
          `}
          hint={`
            function countdown(n) {
              // TODO: Verwenden Sie eine for-Schleife die von n bis 0 läuft
              // Tipp: for (let i = n; i >= 0; i--) { ... }
              // i-- bedeutet i wird um 1 verkleinert
            }
            
            countdown(5)
          `}
          solution={`
            // Funktion die von n bis 0 herunterzählt
            function countdown(n) {
              // Schleife die bei n startet und bis 0 läuft
              for (let i = n; i >= 0; i--) {
                // Gib die aktuelle Zahl aus
                console.log(i)
              }
            }
            
            // Teste die Funktion
            countdown(5)
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 12: Liste umkehren</h3>
        <p>
          Schreiben Sie eine Funktion <pre>reverseList(list)</pre>, die eine
          neue Liste zurückgibt mit allen Elementen in umgekehrter Reihenfolge.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-12"
          example={`
            // Beispiel-Aufruf:
            const numbers = [1, 2, 3, 4, 5]
            const reversed = reverseList(numbers)
            console.log(reversed)  // [5, 4, 3, 2, 1]
          `}
          hint={`
            function reverseList(list) {
              // TODO: Erstellen Sie eine leere Liste
              // Durchlaufen Sie die originale Liste von hinten nach vorne
              // Fügen Sie jedes Element zur neuen Liste hinzu
              // Tipp: for (let i = list.length - 1; i >= 0; i--) { ... }
            }
            
            const numbers = [1, 2, 3, 4, 5]
            console.log(reverseList(numbers))
          `}
          solution={`
            // Funktion die eine Liste umkehrt
            function reverseList(list) {
              // Neue leere Liste für das Ergebnis
              const reversed = []
              
              // Durchlaufe die Liste von hinten nach vorne
              for (let i = list.length - 1; i >= 0; i--) {
                // Füge das Element zur neuen Liste hinzu
                reversed.push(list[i])
              }
              
              // Gib die umgekehrte Liste zurück
              return reversed
            }
            
            // Teste die Funktion
            const numbers = [1, 2, 3, 4, 5]
            console.log(reverseList(numbers))  // [5, 4, 3, 2, 1]
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 13: Kommandozeilen-Rechner</h3>
        <p>
          Lesen Sie zwei Zahlen von der Kommandozeile ein und geben Sie deren
          Summe, Differenz, Produkt und Quotient aus.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-13"
          example={`
            // Aufruf: node aufgabe-13.js 10 5
            // Ausgabe:
            // Summe: 15
            // Differenz: 5
            // Produkt: 50
            // Quotient: 2
          `}
          hint={`
            // TODO: Lesen Sie die beiden Zahlen von der Kommandozeile
            // Tipp: const a = Number(process.argv[2])
            // Tipp: const b = Number(process.argv[3])
            // Berechnen Sie dann die vier Operationen und geben Sie sie aus
          `}
          solution={`
            // Lese die beiden Zahlen von der Kommandozeile
            // process.argv[0] ist node, [1] ist der Dateiname, [2] und [3] sind die Argumente
            const a = Number(process.argv[2])
            const b = Number(process.argv[3])
            
            // Berechne die vier Grundrechenarten
            const sum = a + b
            const difference = a - b
            const product = a * b
            const quotient = a / b
            
            // Gib die Ergebnisse aus
            console.log(\`Summe: \${sum}\`)
            console.log(\`Differenz: \${difference}\`)
            console.log(\`Produkt: \${product}\`)
            console.log(\`Quotient: \${quotient}\`)
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 14: Namen aus Kommandozeile</h3>
        <p>
          Lesen Sie mehrere Namen von der Kommandozeile ein und begrüssen Sie
          jeden Namen einzeln.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-14"
          example={`
            // Aufruf: node aufgabe-14.js Anna Bob Charlie
            // Ausgabe:
            // Hallo Anna!
            // Hallo Bob!
            // Hallo Charlie!
          `}
          hint={`
            // TODO: Verwenden Sie eine Schleife von Index 2 bis Ende von process.argv
            // Tipp: for (let i = 2; i < process.argv.length; i++) { ... }
            // Geben Sie für jeden Namen eine Begrüssung aus
          `}
          solution={`
            // Durchlaufe alle Argumente ab Index 2
            // Index 0 ist node, Index 1 ist der Dateiname
            for (let i = 2; i < process.argv.length; i++) {
              // Hole den Namen am aktuellen Index
              const name = process.argv[i]
              
              // Gib eine Begrüssung aus
              console.log(\`Hallo \${name}!\`)
            }
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 15: Zahlen zählen</h3>
        <p>
          Schreiben Sie eine Funktion <pre>countInRange(list, min, max)</pre>,
          die zählt wie viele Zahlen in einer Liste zwischen min und max liegen
          (inklusive).
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-15"
          example={`
            // Beispiel-Aufruf:
            const numbers = [1, 5, 10, 15, 20, 25]
            console.log(countInRange(numbers, 10, 20))  // 3 (10, 15, 20)
          `}
          hint={`
            function countInRange(list, min, max) {
              // TODO: Erstellen Sie eine Variable count = 0
              // Durchlaufen Sie die Liste
              // Wenn eine Zahl >= min und <= max ist, erhöhen Sie count
              // Geben Sie count zurück
            }
            
            const numbers = [1, 5, 10, 15, 20, 25]
            console.log(countInRange(numbers, 10, 20))
          `}
          solution={`
            // Funktion die zählt wie viele Zahlen im Bereich [min, max] liegen
            function countInRange(list, min, max) {
              // Zähler für Zahlen im Bereich
              let count = 0
              
              // Durchlaufe alle Zahlen in der Liste
              for (let i = 0; i < list.length; i++) {
                // Prüfe ob die Zahl im Bereich liegt
                if (list[i] >= min && list[i] <= max) {
                  // Erhöhe den Zähler
                  count++
                }
              }
              
              // Gib die Anzahl zurück
              return count
            }
            
            // Teste die Funktion
            const numbers = [1, 5, 10, 15, 20, 25]
            console.log(countInRange(numbers, 10, 20))  // 3
          `}
        />
      </section>

      <Section>
        <h2>Anspruchsvollere Aufgaben (16-20)</h2>

        <h3>Aufgabe 16: Multiplikationstabelle</h3>
        <p>
          Schreiben Sie eine Funktion <pre>multiplicationTable(n)</pre>, die
          eine Multiplikationstabelle von 1 bis n ausgibt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-16"
          example={`
            // Beispiel-Aufruf:
            multiplicationTable(3)
            // Ausgabe:
            // 1 x 1 = 1
            // 1 x 2 = 2
            // 1 x 3 = 3
            // 2 x 1 = 2
            // 2 x 2 = 4
            // 2 x 3 = 6
            // 3 x 1 = 3
            // 3 x 2 = 6
            // 3 x 3 = 9
          `}
          hint={`
            function multiplicationTable(n) {
              // TODO: Verwenden Sie zwei verschachtelte Schleifen
              // Äussere Schleife: for (let i = 1; i <= n; i++)
              // Innere Schleife: for (let j = 1; j <= n; j++)
              // Geben Sie aus: \${i} x \${j} = \${i * j}
            }
            
            multiplicationTable(3)
          `}
          solution={`
            // Funktion die eine Multiplikationstabelle ausgibt
            function multiplicationTable(n) {
              // Äussere Schleife für die erste Zahl
              for (let i = 1; i <= n; i++) {
                // Innere Schleife für die zweite Zahl
                for (let j = 1; j <= n; j++) {
                  // Berechne das Produkt
                  const product = i * j
                  
                  // Gib die Multiplikation aus
                  console.log(\`\${i} x \${j} = \${product}\`)
                }
              }
            }
            
            // Teste die Funktion
            multiplicationTable(3)
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 17: Primzahl prüfen</h3>
        <p>
          Schreiben Sie eine Funktion <pre>isPrime(number)</pre>, die prüft ob
          eine Zahl eine Primzahl ist.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-17"
          example={`
            // Beispiel-Aufruf:
            console.log(isPrime(7))   // true
            console.log(isPrime(10))  // false
            console.log(isPrime(13))  // true
          `}
          hint={`
            function isPrime(number) {
              // TODO: Zahlen kleiner als 2 sind keine Primzahlen
              // Prüfen Sie ob die Zahl durch irgendeine Zahl von 2 bis number-1 teilbar ist
              // Wenn ja, ist es keine Primzahl
              // Wenn nein, ist es eine Primzahl
              // Tipp: Verwenden Sie den Modulo-Operator %
            }
            
            console.log(isPrime(7))
          `}
          solution={`
            // Funktion die prüft ob eine Zahl eine Primzahl ist
            function isPrime(number) {
              // Zahlen kleiner als 2 sind keine Primzahlen
              if (number < 2) {
                return false
              }
              
              // Prüfe ob die Zahl durch irgendeine Zahl von 2 bis number-1 teilbar ist
              for (let i = 2; i < number; i++) {
                // Wenn die Zahl durch i teilbar ist (Rest ist 0)
                if (number % i === 0) {
                  // Dann ist es keine Primzahl
                  return false
                }
              }
              
              // Wenn wir hier ankommen, ist es eine Primzahl
              return true
            }
            
            // Teste die Funktion
            console.log(isPrime(7))   // true
            console.log(isPrime(10))  // false
            console.log(isPrime(13))  // true
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 18: Fibonacci-Folge</h3>
        <p>
          Schreiben Sie eine Funktion <pre>fibonacci(n)</pre>, die die ersten n
          Zahlen der Fibonacci-Folge in einer Liste zurückgibt. Die
          Fibonacci-Folge beginnt mit 0 und 1, jede weitere Zahl ist die Summe
          der beiden vorherigen.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-18"
          example={`
            // Beispiel-Aufruf:
            console.log(fibonacci(8))
            // [0, 1, 1, 2, 3, 5, 8, 13]
          `}
          hint={`
            function fibonacci(n) {
              // TODO: Erstellen Sie eine Liste mit [0, 1]
              // Verwenden Sie eine Schleife um die restlichen Zahlen zu berechnen
              // Jede Zahl ist die Summe der beiden vorherigen
              // Tipp: const next = list[list.length - 1] + list[list.length - 2]
            }
            
            console.log(fibonacci(8))
          `}
          solution={`
            // Funktion die die ersten n Fibonacci-Zahlen berechnet
            function fibonacci(n) {
              // Spezialfall: wenn n <= 0
              if (n <= 0) {
                return []
              }
              
              // Spezialfall: wenn n == 1
              if (n === 1) {
                return [0]
              }
              
              // Starte mit den ersten zwei Fibonacci-Zahlen
              const fib = [0, 1]
              
              // Berechne die restlichen n-2 Zahlen
              for (let i = 2; i < n; i++) {
                // Die nächste Zahl ist die Summe der beiden vorherigen
                const next = fib[fib.length - 1] + fib[fib.length - 2]
                
                // Füge sie zur Liste hinzu
                fib.push(next)
              }
              
              // Gib die Liste zurück
              return fib
            }
            
            // Teste die Funktion
            console.log(fibonacci(8))   // [0, 1, 1, 2, 3, 5, 8, 13]
          `}
        />
      </Section>

      <section>
        <h3>Aufgabe 19: Duplikate entfernen</h3>
        <p>
          Schreiben Sie eine Funktion <pre>removeDuplicates(list)</pre>, die
          eine neue Liste zurückgibt, in der jedes Element nur einmal vorkommt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-19"
          example={`
            // Beispiel-Aufruf:
            const numbers = [1, 2, 2, 3, 4, 4, 5]
            console.log(removeDuplicates(numbers))
            // [1, 2, 3, 4, 5]
          `}
          hint={`
            function removeDuplicates(list) {
              // TODO: Erstellen Sie eine leere Ergebnis-Liste
              // Durchlaufen Sie die originale Liste
              // Für jedes Element: Prüfen Sie ob es schon in der Ergebnis-Liste ist
              // Wenn nicht, fügen Sie es hinzu
              // Tipp: result.includes(element) prüft ob element in result ist
            }
            
            const numbers = [1, 2, 2, 3, 4, 4, 5]
            console.log(removeDuplicates(numbers))
          `}
          solution={`
            // Funktion die Duplikate aus einer Liste entfernt
            function removeDuplicates(list) {
              // Neue leere Liste für das Ergebnis
              const result = []
              
              // Durchlaufe alle Elemente der originalen Liste
              for (let i = 0; i < list.length; i++) {
                // Hole das aktuelle Element
                const element = list[i]
                
                // Prüfe ob das Element schon in der Ergebnis-Liste ist
                // includes() gibt true zurück wenn das Element gefunden wird
                if (!result.includes(element)) {
                  // Wenn es noch nicht drin ist, füge es hinzu
                  result.push(element)
                }
              }
              
              // Gib die Liste ohne Duplikate zurück
              return result
            }
            
            // Teste die Funktion
            const numbers = [1, 2, 2, 3, 4, 4, 5]
            console.log(removeDuplicates(numbers))  // [1, 2, 3, 4, 5]
          `}
        />
      </section>

      <Section>
        <h3>Aufgabe 20: Wörter zählen</h3>
        <p>
          Schreiben Sie eine Funktion <pre>wordCount(text)</pre>, die zählt wie
          oft jedes Wort in einem Text vorkommt. Der Text wird als String
          übergeben, die Wörter sind durch Leerzeichen getrennt.
        </p>
        <CodeBlockWithHintsAndSolution
          taskId="task-20"
          example={`
            // Beispiel-Aufruf:
            const text = "der Hund und die Katze und der Vogel"
            wordCount(text)
            // Ausgabe:
            // der: 2
            // Hund: 1
            // und: 2
            // die: 1
            // Katze: 1
            // Vogel: 1
          `}
          hint={`
            function wordCount(text) {
              // TODO: Verwenden Sie text.split(" ") um eine Liste von Wörtern zu bekommen
              // Erstellen Sie ein leeres Objekt für die Zählung: const counts = {}
              // Durchlaufen Sie alle Wörter
              // Für jedes Wort: Wenn es noch nicht im Objekt ist, setzen Sie es auf 1
              // Sonst erhöhen Sie den Zähler um 1
              // Geben Sie am Ende alle Wörter und ihre Anzahl aus
            }
            
            const text = "der Hund und die Katze und der Vogel"
            wordCount(text)
          `}
          solution={`
            // Funktion die zählt wie oft jedes Wort vorkommt
            function wordCount(text) {
              // Teile den Text in einzelne Wörter auf
              const words = text.split(" ")
              
              // Objekt um die Anzahl für jedes Wort zu speichern
              const counts = {}
              
              // Durchlaufe alle Wörter
              for (let i = 0; i < words.length; i++) {
                const word = words[i]
                
                // Prüfe ob das Wort schon im Objekt ist
                if (counts[word]) {
                  // Wenn ja, erhöhe den Zähler um 1
                  counts[word] = counts[word] + 1
                } else {
                  // Wenn nein, setze den Zähler auf 1
                  counts[word] = 1
                }
              }
              
              // Gib alle Wörter und ihre Anzahl aus
              for (const word in counts) {
                console.log(\`\${word}: \${counts[word]}\`)
              }
            }
            
            // Teste die Funktion
            const text = "der Hund und die Katze und der Vogel"
            wordCount(text)
          `}
        />
      </Section>
    </>
  );
}
