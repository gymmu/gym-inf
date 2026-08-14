import JSTerminal from "@components/JSTerminal";
import Section from "@components/Section";

export default function JSGrundlagen() {
  return (
    <>
      <Section>
        <h2>Arbeitsauftrag: Grundinstallation</h2>
        <p>
          Bevor wir mit dem Programmieren beginnen, musst du deine Entwicklungsumgebung
          einrichten. Am Ende dieser Installation musst du folgende Punkte erledigt haben:
        </p>

        <h3>Was am Ende installiert sein muss:</h3>
        <ol>
          <li>
            <strong>Ein Editor zum Bearbeiten von JavaScript-Code</strong>
            <ul>
              <li>Empfehlung: Visual Studio Code (VSCode)</li>
              <li>Alternativen: Zed, VSCodium, Neovim, Sublime Text, WebStorm</li>
            </ul>
          </li>
          <li>
            <strong>Eine Umgebung zum Ausführen von JavaScript</strong>
            <ul>
              <li>Empfehlung: Node.js</li>
              <li>Alternativen: Deno, Bun</li>
              <li>Oder: JavaScript im Browser (Developer Tools)</li>
            </ul>
          </li>
          <li>
            <strong>Git als Versionierungswerkzeug</strong>
            <ul>
              <li>Git muss auf deinem Computer installiert und konfiguriert sein</li>
              <li>Dein Name und E-Mail müssen als Git-Identität gesetzt sein</li>
            </ul>
          </li>
          <li>
            <strong>Ein GitHub-Account mit einem Repository für JavaScript-Aufgaben</strong>
            <ul>
              <li>Erstelle ein <strong>privates Repository</strong> auf GitHub</li>
              <li>Dieses Repository dient als Ablage für alle deine JavaScript-Aufgaben</li>
            </ul>
          </li>
          <li>
            <strong>Lehrperson als Collaborator hinzugefügt</strong>
            <ul>
              <li>GitHub-Alias der Lehrperson: <strong>cedricgeissmann</strong></li>
              <li>Füge diese Person als Collaborator in deinem Repository hinzu</li>
            </ul>
          </li>
        </ol>

        <p>
          <strong>Wichtig:</strong> Erledige alle fünf Punkte bevor du mit den ersten
          Programmieraufgaben beginnst. Ohne diese Grundinstallation kannst du deine
          Aufgaben nicht korrekt abgeben.
        </p>
      </Section>

      <Section>
        <h2>JavaScript ausführen</h2>
        <p>JavaScript-Code kann auf verschiedene Arten ausgeführt werden:</p>
        <ul>
          <li>
            <strong>Im Browser:</strong> Öffne die Developer Tools (F12) und
            gehe zum Tab «Console»
          </li>
          <li>
            <strong>Im Terminal:</strong> Speichere den Code in einer{" "}
            <code>.js</code>-Datei und führe ihn mit Node.js aus
          </li>
          <li>
            <strong>Online:</strong> Verwende den JSTerminal hier auf dieser
            Seite oder Online-Editoren wie{" "}
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodePen
            </a>{" "}
            oder{" "}
            <a
              href="https://jsfiddle.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSFiddle
            </a>
          </li>
        </ul>
      </Section>

      <Section>
        <h2>Arbeitsauftrag: Deine Entwicklungsumgebung einrichten</h2>

        <h3>1. Code direkt ausprobieren — JSTerminal</h3>
        <p>
          Am einfachsten kannst du JavaScript direkt hier im folgenden Terminal
          ausprobieren. Schreibe Code in den Editor und klicke auf{" "}
          <strong>«▶ Ausführen»</strong>, um das Programm zu starten. Die
          Ausgabe erscheint im Terminal darunter. Du kannst den Code beliebig
          verändern und erneut ausführen!
        </p>

        <h3>2. Lokale Entwicklungsumgebung</h3>
        <p>
          Für das Programmieren auf deinem eigenen Computer brauchst du ein
          Werkzeug, das JavaScript-Code ausführen kann. Du darfst selbst
          entscheiden, welches Werkzeug du verwendest — hier bist du frei!
          Wichtig ist nur, dass du JavaScript im Browser <em>und</em> lokal
          ausführen kannst.
        </p>
        <p>
          <strong>Empfohlene Laufzeit-Umgebungen:</strong>
        </p>
        <ul>
          <li>
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>{" "}
            (empfohlen für Einsteiger)
          </li>
          <li>
            <a
              href="https://deno.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deno
            </a>{" "}
            (moderne Alternative zu Node.js)
          </li>
          <li>
            <a href="https://bun.sh" target="_blank" rel="noopener noreferrer">
              Bun
            </a>{" "}
            (schnelle JavaScript-Engine)
          </li>
        </ul>
        <p>
          Alle drei ermöglichen es dir, <code>.js</code>-Dateien lokal über das
          Terminal auszuführen. Node.js ist am weitesten verbreitet und wird in
          der Industrie am häufigsten verwendet — es ist daher die
          empfehlenswertes Wahl für den Einstieg.
        </p>

        <h3>3. Empfohlene Editoren</h3>
        <p>
          Ein guter Code-Editor macht das Programmieren viel einfacher. Hier
          sind einige empfehlenswerte Editoren:
        </p>
        <ul>
          <li>
            <a
              href="https://code.visualstudio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code (VSCode)
            </a>{" "}
            (am weitesten verbreitet, kostenlos, viele Erweiterungen)
          </li>
          <li>
            <a href="https://zed.dev" target="_blank" rel="noopener noreferrer">
              Zed
            </a>{" "}
            (schneller, moderner Editor)
          </li>
          <li>
            <a
              href="https://vscodium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              VSCodium
            </a>{" "}
            (kostenlose, open-source Version von VSCode)
          </li>
          <li>
            <a
              href="https://neovim.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neovim
            </a>{" "}
            (für Fortgeschrittene, terminalbasiert)
          </li>
          <li>
            <a
              href="https://www.sublimetext.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sublime Text
            </a>{" "}
            (leichtgewichtig und schnell)
          </li>
          <li>
            <a
              href="https://www.jetbrains.com/webstorm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebStorm
            </a>{" "}
            (IDE von JetBrains, kostenpflichtig, kostenlose Testversion)
          </li>
        </ul>
        <p>
          Alle genannten Editoren sind kostenlos oder haben eine kostenlose
          Version. Du kannst selbst ausprobieren, welcher dir am besten liegt.
        </p>

        <h3>4. Wichtige Regel: Lernen durch eigenes Coden</h3>
        <p>
          <strong>
            Coding-Agents (wie ChatGPT, Claude, Cursor-Agent, etc.) sollen
            während dem Lernprozess nicht verwendet werden, um Code zu
            generieren.
          </strong>{" "}
          Du lernst Programmieren nur, wenn du selbst direkt mit dem Code
          arbeitest und ihn verstehst.
        </p>
        <p>
          <strong>Was du verwenden darfst:</strong>
        </p>
        <ul>
          <li>
            Kurze, einfache Code-Snippets (auch generiert) — jedoch nicht
            einfach kopieren, vor allem am Anfang nicht!
          </li>
          <li>
            Erklärungen zum Code — du darfst dir von Coding-Agents erklären
            lassen, was ein Code-Snippet macht
          </li>
          <li>
            Dokumentation und Tutorials — z.B. die offizielle{" "}
            <a
              href="https://developer.mozilla.org/de/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN JavaScript Dokumentation
            </a>
          </li>
        </ul>
        <p>
          <strong>Merke:</strong> Wenn du den Code nicht selbst schreiben und
          erklären kannst, hast du nichts gelernt. Der Weg zum Ziel ist das
          Programmieren selbst — nicht das Resultat.
        </p>

        <h3>5. Versionierung mit Git und GitHub</h3>
        <p>
          Bei der Arbeit mit Code braucht es immer Versionierungstools. Hier
          verwenden wir <strong>Git</strong> in Kombination mit{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          <strong>Was du tun musst:</strong>
        </p>
        <ol>
          <li>
            Erstelle ein <strong>privates Repository</strong> auf GitHub
          </li>
          <li>
            Füge mich als Collaborator hinzu — mein GitHub-Alias ist{" "}
            <strong>cedricgeissmann</strong>
          </li>
          <li>Speichere deine Programme in diesem Repository</li>
        </ol>
        <p>
          <strong>Organisation:</strong> Die Struktur deines Repositories ist
          dir selbst überlassen — es gibt keine Vorgaben. Du kannst dich dazu
          einlesen, was sinnvoll ist. Eine mögliche Struktur:
        </p>
        <pre>
          <code>
            {`my-javascript-work/
├── 01-variablen/
│   └── hello.js
├── 02-bedingungen/
│   └── alter-check.js
├── 03-schleifen/
│   └── zaehlen.js
└── README.md`}
          </code>
        </pre>
        <p>
          <strong>Entscheidung: Browser vs. Terminal</strong> — Du kannst selbst
          entscheiden, ob du deinen Code lieber über JavaScript im Browser
          ausführst oder lokal mit Node.js über das Terminal. Beide Wege haben
          ihre Vorteile und sind wichtige Fertigkeiten.
        </p>
      </Section>

      <Section>
        <h2>Dein erstes Programm</h2>
        <p>
          Der einfachste Weg, JavaScript zu starten, ist die{" "}
          <code>console.log</code>-Funktion:
        </p>
        <JSTerminal filename="hello.js">
          {`// Das ist ein Kommentar - er wird nicht ausgeführt

// Ausgabe in der Konsole
console.log("Hallo Welt!");
console.log("Ich lerne JavaScript!");
console.log("Programmieren macht Spass!");`}
        </JSTerminal>
      </Section>
    </>
  );
}
