import Section from "@components/Section";

export default function Aufgaben() {
  return (
    <>
      <Section>
        <h2>Arbeitsauftrag 01: JavaScript-Einsteigeraufgaben</h2>
        <p>
          In diesem Arbeitsauftrag bearbeiten Sie 20 kleine Programmieraufgaben.
          Sie decken die vier zentralen Themen ab: <strong>Variablen</strong>,{" "}
          <strong>Bedingungen</strong>, <strong>Listen</strong> und{" "}
          <strong>Schleifen</strong>.
        </p>
        <p>
          <strong>Wichtig:</strong> Es gibt keine Musterlösungen oder
          Code-Snippets. Sie schreiben alles selbst. Das Ziel ist, die Konzepte
          durch eigenes Ausprobieren zu verstehen.
        </p>
      </Section>

      <Section>
        <h2>Abgabe über GitHub</h2>
        <p>
          Alle Aufgaben werden in Ihrem GitHub-Repository abgegeben. Folgen Sie
          diesen Schritten:
        </p>
        <ol>
          <li>
            Erstellen Sie in Ihrem Repository einen Ordner <code>aufgaben-01</code>
          </li>
          <li>
            Speichern Sie jede Aufgabe als eigene <code>.js</code>-Datei (z.B.{" "}
            <code>01-variablen-interview.js</code>)
          </li>
          <li>
            Committen Sie Ihre Dateien regelmässig mit einer sinnvollen Nachricht
          </li>
          <li>
            Der <strong>letzte Commit</strong> muss die Nachricht{" "}
            <code>Arbeitsauftrag 01 bearbeitet</code> enthalten
          </li>
        </ol>
        <p>
          <strong>Beispiel:</strong>
        </p>
        <pre>
          <code>
            {`git add .
git commit -m "Arbeitsauftrag 01 bearbeitet"`}
          </code>
        </pre>
      </Section>

      <Section>
        <h2>Dokumentation</h2>
        <p>
          Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was Sie
          gemacht haben und was Sie gelernt haben. Zum Beispiel:
        </p>
        <pre>
          <code>
            {`// Aufgabe 1: Interview-Programm
// Was ich gemacht habe: Variablen für Name, Alter und Beruf erstellt
// Was ich gelernt habe: const kann nicht geändert werden, let schon
// Schwierigkeit: leicht`}
          </code>
        </pre>
        <p>
          Sie können auch eine <code>README.md</code> im Ordner{" "}
          <code>aufgaben-01</code> erstellen, wo Sie alle Aufgaben auflisten.
        </p>
      </Section>

      <Section>
        <h2>Aufgaben</h2>

        <h3>Teil 1: Variablen (Aufgabe 1–5)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 1: Persönliches Interview</h4>
          <p>
            Erstellen Sie ein Programm, das eine Person vorstellt. Definieren Sie
            Variablen für Name, Alter, Wohnort und Lieblingsfach. Geben Sie alle
            Informationen mit <code>console.log</code> aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 2: Umrechnungstool</h4>
          <p>
            Schreiben Sie ein Programm, das einen Betrag in CHF in EUR umrechnet
            (verwenden Sie einen fiktiven Wechselkurs, z.B. 1 CHF = 0.95 EUR).
            Definieren Sie den Betrag und den Kurs als Variablen.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 3: Flächberechnung</h4>
          <p>
            Berechnen Sie die Fläche und den Umfang eines Rechtecks. Definieren Sie Länge
            und Breite als Variablen und geben Sie die Resultate aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 4: Geschwindigkeit berechnen</h4>
          <p>
            Berechnen Sie die Durchschnittsgeschwindigkeit: Eine Person läuft 42 km
            in 3 Stunden und 15 Minuten. Definieren Sie die Strecke und die Zeit als
            Variablen und berechnen Sie die Geschwindigkeit in km/h.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 5: Persönliches Profil</h4>
          <p>
            Definieren Sie mehrere Variablen für ein fiktives Profil: Name, Alter,
            Hobby und Lieblingsessen. Geben Sie alle Informationen in einer
            zusammenhängenden Vorstellung mit <code>console.log</code> aus.
            Nutzen Sie mindestens vier Variablen.
          </p>
        </div>

        <h3>Teil 2: Bedingungen (Aufgabe 6–10)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 6: Altersprüfung</h4>
          <p>
            Prüfen Sie, ob eine Person volljährig ist (≥ 18 Jahre). Geben Sie eine passende
            Meldung aus. Testen Sie das Programm mit verschiedenen Alterswerten.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 7: Notensystem</h4>
          <p>
            Definieren Sie eine Note (1–6) als Variable und geben Sie mit <code>if / else if
            / else</code> eine Textbeschreibung aus (z.B. 6 = "Sehr gut", 5 = "Gut" usw.).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 8: Parität prüfen</h4>
          <p>
            Prüfen Sie, ob eine Zahl gerade oder ungerade ist. Verwenden Sie den
            Modulo-Operator (<code>%</code>).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 9: Jahreszeit bestimmen</h4>
          <p>
            Definieren Sie eine Variable für den Monat (1–12) und geben Sie die passende
            Jahreszeit aus (Frühling: 3–5, Sommer: 6–8, Herbst: 9–11, Winter:
            12, 1–2).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 10: Login-System</h4>
          <p>
            Prüfen Sie, ob ein Benutzername und ein Passwort korrekt sind. Definieren Sie
            den erwarteten Benutzernamen und das Passwort als Variablen und
            vergleichen Sie sie mit den Benutzereingaben (ebenfalls Variablen). Geben Sie eine
            passende Meldung aus.
          </p>
        </div>

        <h3>Teil 3: Listen / Arrays (Aufgabe 11–15)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 11: Einkaufsliste</h4>
          <p>
            Erstellen Sie ein Array mit mindestens 5 Einkaufsartikeln. Geben Sie jeden
            Artikel mit einer Nummer aus (1. Milch, 2. Brot usw.). Fügen Sie noch
            einen Artikel hinzu und löschen Sie den letzten.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 12: Durchschnitt berechnen</h4>
          <p>
            Definieren Sie ein Array mit mindestens 5 Noten. Berechnen Sie den
            Durchschnittswert und geben Sie ihn aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 13: Grösstes Element finden</h4>
          <p>
            Definieren Sie ein Array mit Temperaturwerten. Finden Sie die höchste und die
            tiefste Temperatur und geben Sie beide aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 14: Array umdrehen</h4>
          <p>
            Erstellen Sie ein Array mit den Wochentagen. Kehren Sie die Reihenfolge um (von
            Sonntag bis Montag statt Montag bis Sonntag) und geben Sie das neue Array
            aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 15: Filtern</h4>
          <p>
            Definieren Sie ein Array mit Zahlen. Erstellen Sie ein neues Array, das nur
            die geraden Zahlen enthält, und geben Sie es aus.
          </p>
        </div>

        <h3>Teil 4: Schleifen (Aufgabe 16–20)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 16: Multiplikationstabelle</h4>
          <p>
            Schreiben Sie eine <code>for</code>-Schleife, die das kleine Einmaleins
            von 1 bis 10 ausgibt.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 17: Summe berechnen</h4>
          <p>
            Berechnen Sie die Summe aller Zahlen von 1 bis 100 mit einer{" "}
            <code>for</code>-Schleife. Geben Sie das Resultat aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 18: Fakultät</h4>
          <p>
            Berechnen Sie die Fakultät einer Zahl (z.B. 5! = 5 × 4 × 3 × 2 × 1) mit
            einer <code>for</code>-Schleife.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 19: Array mit Schleife durchlaufen</h4>
          <p>
            Erstellen Sie ein Array mit Ihren Lieblingsfilmen. Durchlaufen Sie es mit
            einer <code>for...of</code>-Schleife und geben Sie jeden Film mit{" "}
            <code>console.log</code> aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 20: Palindrom-Prüfer</h4>
          <p>
            Erstellen Sie ein Skript, das prüft, ob ein über <code>process.argv</code>
            (Index 2) übergebenes Wort ein Palindrom ist.
            Ein Palindrom liest sich vorwärts und rückwärts gleich (z.B. "anna", "otto", "abba").
          </p>
          <p>
            <strong>Aufgaben:</strong>
          </p>
          <ul>
            <li>Lesen Sie das Wort aus <code>process.argv[2]</code> aus</li>
            <li>Erzeugen Sie die umgekehrte Version des Wortes (z.B. mit <code>split('')</code>, <code>reverse()</code>, <code>join('')</code>)</li>
            <li>Vergleichen Sie beide Versionen</li>
            <li>Geben Sie <code>"&lt;Wort&gt; ist ein Palindrom"</code> oder <code>"&lt;Wort&gt; ist kein Palindrom"</code> aus</li>
          </ul>
          <p>
            <strong>Testen Sie im Terminal:</strong>
          </p>
          <p>
            <code>node palindrom.js Anna</code> → <code>Anna ist ein Palindrom</code>
          </p>
          <p>
            <code>node palindrom.js Hallo</code> → <code>Hallo ist kein Palindrom</code>
          </p>
        </div>
      </Section>
    </>
  );
}
