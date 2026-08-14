import Section from "@components/Section";

export default function Aufgaben() {
  return (
    <>
      <Section>
        <h2>Arbeitsauftrag 01: JavaScript-Einsteigeraufgaben</h2>
        <p>
          In diesem Arbeitsauftrag bearbeitest du 20 kleine Programmieraufgaben.
          Sie decken die vier zentralen Themen ab: <strong>Variablen</strong>,{" "}
          <strong>Bedingungen</strong>, <strong>Listen</strong> und{" "}
          <strong>Schleifen</strong>.
        </p>
        <p>
          <strong>Wichtig:</strong> Es gibt keine Musterlösungen oder
          Code-Snippets. Du schreibst alles selbst. Das Ziel ist, die Konzepte
          durch eigenes Ausprobieren zu verstehen.
        </p>
      </Section>

      <Section>
        <h2>Abgabe über GitHub</h2>
        <p>
          Alle Aufgaben werden in deinem GitHub-Repository abgegeben. Folge
          diesen Schritten:
        </p>
        <ol>
          <li>
            Erstelle in deinem Repository einen Ordner <code>aufgaben-01</code>
          </li>
          <li>
            Speichere jede Aufgabe als eigene <code>.js</code>-Datei (z.B.{" "}
            <code>01-variablen-interview.js</code>)
          </li>
          <li>
            Commite deine Dateien regelmässig mit einer sinnvollen Nachricht
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
          Zu jeder Aufgabe schreibst du kurz in den Code (als Kommentar), was du
          gemacht hast und was du gelernt hast. Zum Beispiel:
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
          Du kannst auch eine <code>README.md</code> im Ordner{" "}
          <code>aufgaben-01</code> erstellen, wo du alle Aufgaben auflistest.
        </p>
      </Section>

      <Section>
        <h2>Aufgaben</h2>

        <h3>Teil 1: Variablen (Aufgabe 1–5)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 1: Persönliches Interview</h4>
          <p>
            Erstelle ein Programm, das eine Person vorstellt. Definiere
            Variablen für Name, Alter, Wohnort und Lieblingsfach. Gib alle
            Informationen mit <code>console.log</code> aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 2: Umrechnungstool</h4>
          <p>
            Schreibe ein Programm, das einen Betrag in CHF in EUR umrechnet
            (Verwende einen fiktiven Wechselkurs, z.B. 1 CHF = 0.95 EUR).
            Definiere den Betrag und den Kurs als Variablen.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 3: Flächberechnung</h4>
          <p>
            Berechne die Fläche und den Umfang eines Rechtecks. Definiere Länge
            und Breite als Variablen und gib die Resultate aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 4: Geschwindigkeit berechnen</h4>
          <p>
            Berechne die Durchschnittsgeschwindigkeit: Eine Person läuft 42 km
            in 3 Stunden und 15 Minuten. Definiere Strecke und Zeit als
            Variablen und berechne die Geschwindigkeit in km/h.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 5: Variablen austauschen</h4>
          <p>
            Definiere zwei Variablen mit verschiedenen Werten. Tausche die Werte
            der beiden Variablen (ohne die ursprünglichen Werte direkt zu
            schreiben) und gib sie danach aus.
          </p>
        </div>

        <h3>Teil 2: Bedingungen (Aufgabe 6–10)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 6: Altersprüfung</h4>
          <p>
            Prüfe ob eine Person volljährig ist (≥ 18 Jahre). Gib eine passende
            Meldung aus. Teste mit verschiedenen Alterswerten.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 7: Notensystem</h4>
          <p>
            Schreibe ein Programm, das eine Note (1–6) als Variable definiert
            und mit <code>if / else if / else</code> eine Textbeschreibung
            ausgibt (z.B. 6 = "Sehr gut", 5 = "Gut", etc.).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 8: Parität prüfen</h4>
          <p>
            Prüfe ob eine Zahl gerade oder ungerade ist. Verwende den
            Modulo-Operator (<code>%</code>).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 9: Jahreszeit bestimmen</h4>
          <p>
            Definiere einen Monat (1–12) als Variable und gib die passende
            Jahreszeit aus (Frühling: 3–5, Sommer: 6–8, Herbst: 9–11, Winter:
            12, 1–2).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 10: Login-System</h4>
          <p>
            Prüfe ob ein Benutzername und ein Passwort korrekt sind. Definiere
            den erwarteten Benutzernamen und das Passwort als Variablen und
            vergleiche sie mit Benutzereingaben (Variablen). Gib eine passende
            Meldung aus.
          </p>
        </div>

        <h3>Teil 3: Listen / Arrays (Aufgabe 11–15)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 11: Einkaufsliste</h4>
          <p>
            Erstelle ein Array mit mindestens 5 Einkaufsartikeln. Gib jeden
            Artikel mit einer Nummer aus (1. Milch, 2. Brot, etc.). Füge noch
            einen Artikel hinzu und lösche den letzten.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 12: Durchschnitt berechnen</h4>
          <p>
            Definiere ein Array mit mindestens 5 Noten. Berechne den
            Durchschnitt und gib ihn aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 13: Grösstes Element finden</h4>
          <p>
            Definiere ein Array mit Temperaturen. Finde die höchste und die
            tiefste Temperatur und gib sie aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 14: Array umdrehen</h4>
          <p>
            Erstelle ein Array mit Wochentagen. Drehe die Reihenfolge um (von
            Sonntag bis Montag statt Montag bis Sonntag) und gib das neue Array
            aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 15: Filtern</h4>
          <p>
            Definiere ein Array mit Zahlen. Erstelle ein neues Array, das nur
            die geraden Zahlen enthält. Gib das gefilterte Array aus.
          </p>
        </div>

        <h3>Teil 4: Schleifen (Aufgabe 16–20)</h3>

        <div className="aufgabe">
          <h4>Aufgabe 16: Multiplikationstabelle</h4>
          <p>
            Schreibe eine <code>for</code>-Schleife, die die 1×1
            Multiplikationstabelle von 1 bis 10 ausgibt.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 17: Summe berechnen</h4>
          <p>
            Berechne die Summe aller Zahlen von 1 bis 100 mit einer{" "}
            <code>for</code>-Schleife. Gib das Resultat aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 18: Fakultät</h4>
          <p>
            Berechne die Fakultät einer Zahl (z.B. 5! = 5 × 4 × 3 × 2 × 1) mit
            einer <code>for</code>-Schleife.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 19: Array mit Schleife durchlaufen</h4>
          <p>
            Erstelle ein Array mit deinen Lieblingsfilmen. Durchlaufe es mit
            einer <code>for...of</code>-Schleife und gib jeden Film mit{" "}
            <code>console.log</code> aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 20: Zahlenraten</h4>
          <p>
            Definiere eine zufällige Zahl zwischen 1 und 10 (verwende{" "}
            <code>Math.floor(Math.random() * 10) + 1</code>). Prüfe mit einer{" "}
            <code>while</code>-Schleife, ob eine geratene Zahl korrekt ist. Gib
            Hinweise ("zu hoch" / "zu tief") bis die Zahl richtig ist.
          </p>
        </div>
      </Section>
    </>
  );
}
