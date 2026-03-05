import Mermaid from "@components/Mermaid"
import Section from "@components/Section" 


export default function FmsAlgorithmen() {
  // Einfaches Beispiel: Zahlenprüfung
  const zahlenPruefung = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Zahl eingeben]
    Input --> Check{Ist Zahl > 0?}
    Check -->|Ja| Positive[Ausgabe: Positiv]
    Check -->|Nein| CheckZero{Ist Zahl = 0?}
    CheckZero -->|Ja| Zero[Ausgabe: Null]
    CheckZero -->|Nein| Negative[Ausgabe: Negativ]
    Positive --> End([Ende])
    Zero --> End
    Negative --> End
  `

  // Komplexeres Beispiel: Maximum von drei Zahlen finden
  const maximumFinder = `
%%{init: {'theme':'base', 'themeVariables': {'fontSize':'18px'}}}%%
flowchart TD
    Start([Start]) --> Input[Drei Zahlen eingeben:<br/>a, b, c]
    Input --> Max[max = a]
    Max --> CheckB{Ist b > max?}
    CheckB -->|Ja| SetB[max = b]
    CheckB -->|Nein| CheckC{Ist c > max?}
    SetB --> CheckC
    CheckC -->|Ja| SetC[max = c]
    CheckC -->|Nein| Output[Ausgabe: max]
    SetC --> Output
    Output --> End([Ende])
  `

  return (
    <>
      <section>
        <h2>Was sind Algorithmen?</h2>
        <p>
          Ein Algorithmus ist eine Beschreibung von einem Lösungsverfahren. Er
          besteht aus 3 Teilen, der <strong>Eingabe</strong>, der
          <strong>Ausgabe</strong> und der <strong>Beschreibung</strong>. Wir
          kümmern uns meistens um die <strong>Beschreibung</strong>, denn da
          passieren die spannenden Dinge.
        </p>
        <p>
          Man kann einen Algorithmus auf ganz verschiedene Arten darstellen.
          Oftmals wird <em>Pseudo-Code</em> oder sogar direkt Programmier-Code
          verwendet, denn diese Darstellung ist am flexibelsten, jedoch auch
          sehr kompliziert. Wir werden fast nur <strong>Flussdiagramme</strong>
          verwenden, denn damit lässt sich die Struktur des Algorithmus am
          einfachsten darstellen.
        </p>
      </section>
      <section>
        <h3>Flussdiagramm - Einfaches Beispiel</h3>
        <p>
          Ein einfacher Algorithmus prüft, ob eine Zahl positiv, negativ oder
          null ist:
        </p>
        <Mermaid chart={zahlenPruefung} id="zahlen-pruefung" />
      <p>
          Wie Sie sehen können, besteht ein Algorithmus immer aus mindestens 2 
          Teilen. Sie haben ein <strong>Start</strong> und ein <strong>Ende</strong>. 
          Diese Knoten sind speziell, und können nur einmal vorkommen. Es ist
          wichtig das ein Algorithmus <strong>endlich</strong> ist. Es muss
          also einen Weg vom <strong>Start</strong> zum <strong>Ende</strong>
          geben, ansonsten zählt es nicht als Algorithmus.
      </p>
        <p>
          Neben diesen beiden speziellen Knoten, gibt es in einem Flussdiagramm
          noch 2 weitere Arten von Knoten: <strong>Anweisungen</strong> und 
          <strong>Entscheidungen</strong>. Das sind die einzigen Elemente die
          wir in einem Flussdiagramm verwenden werden.
        </p>
      </section>
      <Section>
        <h3>Anweisungen</h3>
        <p>
          In einem Anweisungsknoten, beschreiben wir was für eine Aktion
          gemacht werden soll. Beim Programmieren müssen das später Funktionen
          sein die in der Programmiersprache vorhanden sind, und sie müssen der
          korrekten Syntax folgen, so wie Sie das eigentlich aus der Mathematik
          kennen. Hier in den Flussdiagrammen können wir viel flexibler sein,
          und das ganze in natürlicher Sprache erklären. Dabei muss man aber
          beachten, das alles was man in einem solchen <strong>Anweisungsknoten</strong>
          angibt, mit einem eigenen Algorithmus lösbar sein muss. Beispiele
          dazu werden wir später noch sehen.
        </p>
        <h3>Entscheidungsknoten</h3>
        <p>
          Bei einem <strong>Entscheidungsknoten</strong>, stellen wir meistens
          eine <strong>Wahr-Falsch-Frage</strong>, und können dann den
          jeweiligen Weg aufzeichnen. So können wir unterschiedliche Wege durch
          ein Flussdiagramm wählen. Es gibt auch die Möglichkeit mehr als nur 2
          Antwortmöglichkeiten zu verwenden, dann gibt es einfach mehr Pfeile
          die von einem <strong>Entscheidungsknoten</strong> wegführen.
        </p>
      </Section>
      <section>
        <h3>Flussdiagramm - Komplexeres Beispiel</h3>
        <p>Flussdiagramme können recht schnell gross und auch komplex werden.
          Wenn Sie ein solches Flussdiagramm ausführen möchten, ist es wichtig
        dass Sie den genauen Weg durch das Diagramm festhalten, und sich alle
          Werte die verwendet werden, bei jedem Schritt aufschreiben.</p>
        <p>
          Dieser Algorithmus findet die grösste von 3 Zahlen, wenn Sie diesen
          ausführen, erhalten Sie die folgenden Schritte:
        </p>
        {/* TODO: schriebe hier die schritte mit den werten auf. */}
        <Mermaid chart={maximumFinder} id="maximum-finder" />
      </section>
    </>
  )
}
