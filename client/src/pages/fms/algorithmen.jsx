import Mermaid from "@components/Mermaid"

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
      </section>
      <section>
        <h3>Flussdiagramm - Komplexeres Beispiel</h3>
        <p>Dieser Algorithmus findet die größte von drei Zahlen:</p>
        <Mermaid chart={maximumFinder} id="maximum-finder" />
      </section>
    </>
  )
}
