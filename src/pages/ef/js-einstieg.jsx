import Section from "@components/Section";

export default function JSEinstieg() {
  return (
    <>
      <Section>
        <h2>Willkommen zu Programmieren mit JavaScript</h2>
        <p>
          In diesem Kurs lernst du die Grundlagen der Programmierung mit
          JavaScript. JavaScript ist eine der beliebtesten Programmiersprachen
          der Welt und wird verwendet, um interaktive Webseiten zu erstellen,
          Server zu programmieren, Spiele zu entwickeln und vieles mehr.
        </p>
        <p>
          Du wirst Schritt für Schritt die wichtigsten Konzepte der
          Programmierung kennenlernen – von Variablen über Bedingungen bis hin
          zu Funktionen und Objekten.
        </p>
      </Section>

      <Section>
        <h2>Was ist JavaScript?</h2>
        <p>
          JavaScript ist eine <strong>Allzweck-Programmiersprache</strong>{" "}
          (general-purpose programming language). Das bedeutet, dass man damit
          praktisch alles programmieren kann – von einfachen Berechnungen bis
          hin zu komplexen Anwendungen. JavaScript wurde 1995 von Brendan Eich
          in nur 10 Tagen entwickelt und hat sich seitdem zur meistverbreiteten
          Programmiersprache der Welt entwickelt.
        </p>
      </Section>

      <Section>
        <h2>Warum JavaScript?</h2>
        <p>
          Es gibt viele Programmiersprachen – doch JavaScript hat einige
          besondere Vorteile:
        </p>

        <h3>1. Das Web basiert auf JavaScript</h3>
        <p>
          Jede moderne Webseite verwendet JavaScript. Ohne JavaScript wären
          Webseiten statisch – sie könnten keine Interaktionen verarbeiten,
          keine Daten nachladen und keine dynamischen Inhalte anzeigen.
          JavaScript ist die <em>einzige</em> Sprache, die direkt im Browser
          läuft und somit jedes Internetprogramm steuern kann.
        </p>

        <h3>2. Browser-Automatisierung</h3>
        <p>
          Mit JavaScript kann man den Browser automatisieren – zum Beispiel kann
          man Programme schreiben, die automatisch Webseiten öffnen, Formulare
          ausfüllen oder Daten von Webseiten sammeln. Das ist nützlich für
          repetitive Aufgaben oder zum Testen von Webseiten.
        </p>

        <h3>3. Full-Stack: Frontend und Backend</h3>
        <p>
          JavaScript läuft nicht nur im Browser (Frontend), sondern auch auf
          Servern (Backend). Mit <strong>Node.js</strong> kann man JavaScript
          als serverseitige Sprache verwenden. Das bedeutet, du kannst mit
          derselben Sprache sowohl die Benutzeroberfläche als auch die
          Server-Logik programmieren.
        </p>

        <h3>4. KI-Interaktion</h3>
        <p>
          JavaScript wird häufig verwendet, um mit KI-Systemen zu interagieren.
          Man kann damit APIs von KI-Diensten aufrufen, Chatbots bauen, oder
          sogar lokale KI-Modelle im Browser ausführen. Das macht JavaScript zu
          einer idealen Sprache für KI-Projekte.
        </p>

        <h3>5. Unterschiedliche Programmierparadigmen</h3>
        <p>
          JavaScript unterstützt verschiedene Programmierstile (Paradigmen):
        </p>
        <ul>
          <li>
            <strong>Prozedural:</strong> Schritt-für-Schritt-Anweisungen
          </li>
          <li>
            <strong>Objekt-orientiert:</strong> Programme als Sammlung von
            Objekten
          </li>
          <li>
            <strong>Funktional:</strong> Programme als Kombination von
            Funktionen
          </li>
          <li>
            <strong>Ereignisgesteuert:</strong> Programme reagieren auf
            Ereignisse (Klicks, Eingaben, etc.)
          </li>
        </ul>
      </Section>
    </>
  );
}
