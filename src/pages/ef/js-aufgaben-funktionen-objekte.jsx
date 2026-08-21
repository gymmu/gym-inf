import Section from "@components/Section";

export default function JSAufgabenFunktionenObjekte() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Objekte, Spread und Dekomposition</h2>
        <p>
          In diesem Arbeitsauftrag bearbeiten Sie 10 kleine Programmieraufgaben
          zu JavaScript-Objekten. Sie decken die zentralen Konzepte ab:
          <strong>Objekte erstellen</strong>, <strong>Eigenschaften zugreifen</strong>,
          <strong>über Objekte iterieren</strong>, <strong>Spread-Syntax</strong>,
          <strong>Dekomposition</strong> und <strong>Factory-Funktionen</strong>.
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
            <code>aufgaben-objekte</code>
          </li>
          <li>
            Speichern Sie jede Aufgabe als eigene <code>.js</code>-Datei (z.B.
            <code>01-person-erstellen.js</code>)
          </li>
          <li>
            Committen Sie Ihre Dateien regelmässig mit einer sinnvollen
            Nachricht
          </li>
          <li>
            Der <strong>letzte Commit</strong> muss die Nachricht{" "}
            <code>Arbeitsauftrag Objekte bearbeitet</code> enthalten
          </li>
        </ol>
        <p>
          <strong>Beispiel:</strong>
        </p>
        <pre>
          <code>
            {`git add .
git commit -m "Arbeitsauftrag Objekte bearbeitet"`}
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
            {`// Aufgabe 1: Person-Objekt erstellen
// Was ich gemacht habe: Objekt mit Schlüssel-Wert-Paaren definiert
// Was ich gelernt habe: Eigenschaften mit Punkt-Notation zugänglich
// Schwierigkeit: leicht`}
          </code>
        </pre>
        <p>
          Sie können auch eine <code>README.md</code> im Ordner{" "}
          <code>aufgaben-objekte</code> erstellen, wo Sie alle Aufgaben
          auflisten.
        </p>
      </Section>

      <Section>
        <h2>Aufgaben</h2>

        <div className="aufgabe">
          <h4>Aufgabe 1: Person-Objekt erstellen</h4>
          <p>
            Erstellen Sie ein Objekt <code>person</code> mit den Eigenschaften
            <code>name</code> (String), <code>alter</code> (Zahl),
            <code>adresse</code> (verschachteltes Objekt mit <code>strasse</code>
            und <code>plz</code>) und <code>faecher</code> (Array mit Strings).
            Geben Sie das Objekt mit <code>console.log</code> aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 2: Eigenschaften mit Punkt- und Klammernotation</h4>
          <p>
            Definieren Sie ein Objekt <code>produkt</code> mit den Eigenschaften
            <code>name</code>, <code>preis</code>, <code>gewicht</code> und{" "}
            <code>"erste-kauft"</code> (Schlüssel mit Bindestrich).
            Lesen Sie alle vier Eigenschaften — zuerst mit Punkt-Notation,
            anschliessend mit Klammernotation. Ändern Sie den <code>preis</code>
            um 10% und geben Sie das Ergebnis aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 3: Eigenschaften hinzufügen und entfernen</h4>
          <p>
            Definieren Sie ein Objekt <code>schueler</code> mit den Eigenschaften
            <code>name</code> und <code>klasse</code>. Fügen Sie dynamisch die
            Eigenschaften <code>note</code> (Zahl) und <code>telefon</code>
            (String) hinzu. Entfernen Sie anschliessend die Eigenschaft{" "}
            <code>klasse</code> mit <code>delete</code>. Prüfen Sie mit{" "}
            <code>in</code>, ob <code>klasse</code> noch existiert.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 4: Object.keys/values/entries verwenden</h4>
          <p>
            Definieren Sie ein Objekt <code>person</code> mit mindestens vier
            Eigenschaften. Verwenden Sie <code>Object.keys()</code>,
            <code>Object.values()</code> und <code>Object.entries()</code>, um
            die Schlüssel, Werte und Paare zu erhalten. Geben Sie jedes Ergebnis
            aus. Verwenden Sie <code>forEach</code> über <code>Object.entries()</code>,
            um <code>"Schlüssel: Wert"</code> auszugeben.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 5: for...in Schleife</h4>
          <p>
            Definieren Sie ein Objekt <code>warenkorb</code> mit mindestens fünf
            Eigenschaften (jeweils Artikelname als Schlüssel und Preis als Wert).
            Verwenden Sie eine <code>for...in</code>-Schleife, um alle Artikel
            und Preise auszugeben. Berechnen Sie gleichzeitig die Gesamtsumme.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 6: Spread — Objekt kopieren und erweitern</h4>
          <p>
            Definieren Sie ein Objekt <code>person</code> mit den Eigenschaften
            <code>name</code>, <code>alter</code> und <code>stadt</code>. Erstellen
            Sie mit der Spread-Syntax eine Kopie <code>personNeu</code>. Fügen Sie
            in der Kopie die neue Eigenschaft <code>beruf</code> hinzu und ändern
            Sie den <code>alter</code> um 1. Prüfen Sie, dass das Original{" "}
            <code>person</code> unverändert bleibt.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 7: Spread — Objekte verbinden</h4>
          <p>
            Definieren Sie zwei Objekte: <code>adresse</code> (mit{" "}
            <code>strasse</code>, <code>plz</code>, <code>ort</code>) und{" "}
            <code>kontakt</code> (mit <code>email</code>, <code>telefon</code>).
            Verbinden Sie beide Objekte mit der Spread-Syntax zu einem neuen
            Objekt <code>profil</code>. Überschreiben Sie dabei den <code>ort</code>
            mit einem neuen Wert. Geben Sie das Resultat aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 8: Dekomposition — Eigenschaften extrahieren</h4>
          <p>
            Definieren Sie ein Objekt <code>produkt</code> mit den Eigenschaften
            <code>name</code>, <code>preis</code>, <code>gewicht</code> und{" "}
            <code>kategorie</code>. Verwenden Sie Dekomposition, um <code>name</code>
            und <code>preis</code> direkt in Variablen zu extrahieren.
            Extrahieren Sie anschliessend nur <code>kategorie</code> und speichern
            Sie den Rest in <code>rest</code>. Geben Sie alle Ergebnisse aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 9: Factory-Funktion — Objekte erstellen</h4>
          <p>
            Schreiben Sie eine Factory-Funktion <code>erstelleProdukt(name, preis, kategorie)</code>,
            die ein Produkt-Objekt zurückgibt mit den Eigenschaften{" "}
            <code>name</code>, <code>preis</code>, <code>kategorie</code>,{" "}
            <code>mwst</code> (immer 8.1%) und <code>preisMitMwst</code> (berechnete
            Funktion, die den Preis mit MwSt. zurückgibt). Erstellen Sie drei
            verschiedene Produkte und geben Sie sie aus.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 10: Kombinierte Aufgabe — Datenverwaltung</h4>
          <p>
            Definieren Sie ein Array <code>personen</code> mit mindestens vier
            Personen-Objekten (jeweils <code>name</code>, <code>alter</code>,{" "}
            <code>stadt</code>). Schreiben Sie eine Funktion{" "}
            <code>erwachseneErstellen(pers)</code>, die nur die Personen ab{" "}
            <strong>18</strong> Jahren auswählt und für jede ein neues Objekt
            erstellt mit:<br />
            <code>name</code>, <code>stadt</code> und{" "}
            <code>status</code> (<code>"Erwachsen"</code> oder{" "}
            <code>"Minderjährig"</code>). Verwenden Sie dabei <code>filter</code>,{" "}
            <code>map</code> und die Spread-Syntax.
          </p>
        </div>
      </Section>
    </>
  );
}
