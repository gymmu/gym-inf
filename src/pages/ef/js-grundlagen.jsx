import Section from "@components/Section";

export default function JSGrundlagen() {
  return (
    <>
      <Section>
        <h2>Grundlagen von JavaScript</h2>
        <p>
          Bevor wir mit dem Programmieren beginnen, solltest du wissen, wie
          JavaScript ausgeführt wird und wo du Code schreiben kannst.
        </p>
      </Section>
      <Section>
        <h2>JavaScript ausführen</h2>
        <p>
          JavaScript-Code kann auf verschiedene Arten ausgeführt werden:
        </p>
        <ul>
          <li>
            Im Browser: Öffne die Developer Tools (F12) und gehe zum Tab
            "Console"
          </li>
          <li>In Node.js: Speichere den Code in einer .js Datei</li>
          <li>
            Online: Verwende Online-Editoren wie CodePen oder JSFiddle
          </li>
        </ul>
      </Section>
      <Section>
        <h2>Dein erstes Programm</h2>
        <p>
          Der einfachste Weg, JavaScript zu starten, ist die <code>console.log</code>{" "}
          Funktion:
        </p>
        <pre>
          <code>
            {`console.log("Hallo Welt!");`}
          </code>
        </pre>
        <p>
          Dieser Befehl gibt den Text "Hallo Welt!" in der Konsole aus.
        </p>
      </Section>
    </>
  );
}
