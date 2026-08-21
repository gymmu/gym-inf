import Section from "@components/Section";

export default function JSAufgabenFunktionenObjekte() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Funktionen und Objekte</h2>
        <p>
          In diesem Arbeitsauftrag bearbeiten Sie 10 kleine Programmieraufgaben
          zu Funktionen und Array-Methoden. Sie decken die vier zentralen
          Methoden ab: <strong>forEach</strong>, <strong>map</strong>,
          <strong>filter</strong> und <strong>reduce</strong>.
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
            Erstellen Sie in Ihrem Repository einen Ordner{" "}
            <code>aufgaben-funktionen</code>
          </li>
          <li>
            Speichern Sie jede Aufgabe als eigene <code>.js</code>-Datei (z.B.
            <code>01-wochentage.js</code>)
          </li>
          <li>
            Committen Sie Ihre Dateien regelmässig mit einer sinnvollen
            Nachricht
          </li>
          <li>
            Der <strong>letzte Commit</strong> muss die Nachricht{" "}
            <code>Arbeitsauftrag Funktionen bearbeitet</code> enthalten
          </li>
        </ol>
        <p>
          <strong>Beispiel:</strong>
        </p>
        <pre>
          <code>
            {`git add .
git commit -m "Arbeitsauftrag Funktionen bearbeitet"`}
          </code>
        </pre>
      </Section>

      <Section>
        <h2>Dokumentation</h2>
        <p>
          Zu jeder Aufgabe schreiben Sie kurz in den Code (als Kommentar), was
          Sie gemacht haben und was Sie gelernt haben. Zum Beispiel:
        </p>
        <pre>
          <code>
            {`// Aufgabe 1: Wochentage ausgeben
// Was ich gemacht habe: forEach mit Arrow-Funktion verwendet
// Was ich gelernt habe: Der Index beginnt bei 0
// Schwierigkeit: leicht`}
          </code>
        </pre>
        <p>
          Sie können auch eine <code>README.md</code> im Ordner{" "}
          <code>aufgaben-funktionen</code> erstellen, wo Sie alle Aufgaben
          auflisten.
        </p>
      </Section>

      <Section>
        <h2>Aufgaben</h2>

        <div className="aufgabe">
          <h4>Aufgabe 1: Wochentage ausgeben</h4>
          <p>
            Definieren Sie ein Array mit den Wochentagen{" "}
            <code>
              ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]
            </code>
            . Verwenden Sie <code>forEach</code>, um jeden Wochentag mit seiner
            Nummer auszugeben. Das Format soll <code>"Tag 1: Montag"</code>{" "}
            sein.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 2: Preise mit Mehrwertsteuer</h4>
          <p>
            Definieren Sie ein Array mit Preisen{" "}
            <code>[10, 20, 30, 40, 50]</code>. Erstellen Sie mit{" "}
            <code>map</code> ein neues Array, das die Preise inklusive 8%
            Mehrwertsteuer enthält (jeder Preis wird mit 1.08 multipliziert).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 3: Positive Zahlen filtern</h4>
          <p>
            Definieren Sie ein Array mit positiven und negativen Zahlen
            <code>[1, -2, 3, -4, 5, -6, 7, -8]</code>. Verwenden Sie{" "}
            <code>filter</code>, um nur die positiven Zahlen herauszufiltern.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 4: Produkt berechnen</h4>
          <p>
            Definieren Sie ein Array mit Zahlen <code>[5, 10, 15, 20, 25]</code>
            . Verwenden Sie <code>reduce</code>, um das Produkt aller Werte zu
            berechnen.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 5: Namen gross schreiben</h4>
          <p>
            Definieren Sie ein Array mit Namen{" "}
            <code>["anna", "beat", "claudia", "daniel"]</code>. Verwenden Sie{" "}
            <code>map</code>, um ein neues Array zu erstellen, in dem alle Namen
            in Grossbuchstaben sind.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 6: Schüler ab 16 Jahren filtern</h4>
          <p>
            Definieren Sie ein Array mit Schüler-Objekten (jeweils mit den
            Eigenschaften name und alter). Verwenden Sie <code>filter</code>, um
            nur die Schüler ab 16 Jahren auszuwählen.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 7: Summe der Noten berechnen</h4>
          <p>
            Definieren Sie ein Array mit Notenzahlen. Verwenden Sie{" "}
            <code>reduce</code>, um die Summe aller Noten zu berechnen. Geben
            Sie anschliessend auch den Durchschnitt aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 8: Gerade Zahlen verdoppeln</h4>
          <p>
            Definieren Sie ein Array mit den Zahlen 1 bis 10. Verwenden Sie{" "}
            <code>filter</code>, um nur die geraden Zahlen auszuwählen, und
            anschliessend <code>map</code>, um diese Zahlen zu verdoppeln.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 9: Produkte mit Rabatt auflisten</h4>
          <p>
            Definieren Sie ein Array mit Produkt-Objekten (jeweils mit den
            Eigenschaften name, preis und rabatt). Verwenden Sie{" "}
            <code>map</code>, um ein neues Array mit den reduzierten Preisen zu
            erstellen (Preis * (1 - Rabatt)).
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 10: Gesamteinkauf berechnen</h4>
          <p>
            Definieren Sie ein Array mit Einkaufs-Objekten (jeweils mit den
            Eigenschaften artikel und preis). Verwenden Sie <code>reduce</code>,
            um die Gesamtkosten zu berechnen. Geben Sie das Resultat mit dem
            Format <code>"Gesamtkosten: X.XX CHF"</code> aus.
          </p>
        </div>
      </Section>
    </>
  );
}
