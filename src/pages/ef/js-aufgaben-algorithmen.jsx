import Section from "@components/Section";

export default function JSAufgabenAlgorithmen() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Algorithmen</h2>
        <p>
          In diesem Arbeitsauftrag bearbeiten Sie <strong>5 Aufgaben</strong> zu
          den Algorithmen dieser Woche. Die Aufgaben sind deutlich umfangreicher
          als in den letzten Wochen — planen Sie pro Aufgabe genügend Zeit ein
          und arbeiten Sie in kleinen Schritten.
        </p>
        <p>
          <strong>Wichtig:</strong> Es gibt keine Musterlösungen. Sie schreiben
          alles selbst. Sie dürfen die Algorithmen aus der Theorie als Vorlage
          verwenden, müssen sie aber verstehen und anpassen können.
        </p>
        <p>
          <strong>
            Zu jeder Aufgabe gehört eine kurze Laufzeitüberlegung.
          </strong>{" "}
          Diese schreiben Sie als Kommentar in die Datei. Wir besprechen sie
          gemeinsam im Unterricht.
        </p>
      </Section>

      <Section>
        <h2>Abgabe über GitHub</h2>
        <ol>
          <li>
            Erstellen Sie in Ihrem Repository einen Ordner{" "}
            <code>aufgaben-algorithmen</code>
          </li>
          <li>
            Speichern Sie jede Aufgabe als eigene <code>.js</code>-Datei
            (z.&nbsp;B. <code>01-selection-sort.js</code>)
          </li>
          <li>Committen Sie regelmässig mit sinnvollen Nachrichten</li>
          <li>
            Der <strong>letzte Commit</strong> muss die Nachricht{" "}
            <code>Arbeitsauftrag Algorithmen bearbeitet</code> enthalten
          </li>
        </ol>
        <pre>
          <code>
            {`git add .
git commit -m "Arbeitsauftrag Algorithmen bearbeitet"`}
          </code>
        </pre>
      </Section>

      <Section>
        <h2>Dokumentation</h2>
        <p>
          Beginnen Sie jede Datei mit einem Kommentarblock nach diesem Muster:
        </p>
        <pre>
          <code>
            {`// Aufgabe 1: Selection Sort
// Idee: Suche das kleinste Element und tausche es nach vorne
// Laufzeit: O(n²), weil zwei verschachtelte Schleifen
// Schwierig war: ...
// Gelernt habe ich: ...`}
          </code>
        </pre>
        <p>
          Erstellen Sie zusätzlich eine <code>README.md</code> im Ordner{" "}
          <code>aufgaben-algorithmen</code> mit einer Tabelle: Aufgabe,
          Algorithmus, Laufzeit, Bemerkung.
        </p>
      </Section>

      <Section>
        <h2>Aufgaben</h2>

        {/* ── Aufgabe 1 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 1: Selection Sort (Sortieren durch Auswählen)</h4>
          <p>
            <strong>Idee:</strong> Suche in der unsortierten Restliste das{" "}
            <em>kleinste</em> Element und tausche es an den Anfang dieser
            Restliste. Wiederhole das, bis alles sortiert ist.
          </p>
          <p>
            Schreiben Sie eine Funktion <code>selectionSort(liste)</code>, die
            eine <strong>neue, sortierte Liste</strong> zurückgibt. Das Original
            darf nicht verändert werden (Tipp: <code>[...liste]</code>).
          </p>
          <p>Ihre Funktion soll ausserdem:</p>
          <ul>
            <li>
              die Anzahl <strong>Vergleiche</strong> und{" "}
              <strong>Tausche</strong> mitzählen und am Schluss mit{" "}
              <code>console.log</code> ausgeben
            </li>
            <li>
              nach jedem Durchlauf den Zwischenstand der Liste ausgeben, damit
              man den Ablauf nachvollziehen kann
            </li>
          </ul>
          <p>
            <strong>Testen Sie mit:</strong> <code>[5, 3, 8, 1, 9, 2]</code>,{" "}
            <code>[1, 2, 3, 4, 5]</code> (bereits sortiert),{" "}
            <code>[5, 4, 3, 2, 1]</code> (umgekehrt) und einer leeren Liste{" "}
            <code>[]</code>.
          </p>
          <p>
            <strong>Erweiterung:</strong> Bauen Sie einen zweiten Parameter{" "}
            <code>absteigend</code> ein (Standardwert <code>false</code>), mit
            dem man die Sortierrichtung umdrehen kann.
          </p>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Wie viele
            Vergleiche braucht Selection Sort bei einer bereits sortierten
            Liste? Vergleichen Sie das mit dem optimierten Bubble Sort aus der
            Theorie. Warum verhalten sich die beiden hier unterschiedlich?
          </p>
        </div>

        {/* ── Aufgabe 2 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 2: Insertion Sort (Sortieren durch Einfügen)</h4>
          <p>
            <strong>Idee:</strong> Wie beim Sortieren von Jasskarten auf der
            Hand. Die linke Seite der Liste ist immer schon sortiert. Man nimmt
            die nächste Karte und schiebt sie so weit nach links, bis sie am
            richtigen Ort liegt.
          </p>
          <p>
            Schreiben Sie eine Funktion <code>insertionSort(liste)</code>, die
            eine neue sortierte Liste zurückgibt.
          </p>
          <p>Anforderungen:</p>
          <ul>
            <li>
              Verwenden Sie eine <code>while</code>-Schleife für das
              Nach-links-Schieben.
            </li>
            <li>
              Zählen Sie die <strong>Verschiebungen</strong> und geben Sie sie
              aus.
            </li>
            <li>
              Schreiben Sie eine zweite Funktion{" "}
              <code>insertionSortObjekte(liste, schluessel)</code>, die eine
              Liste von <strong>Objekten</strong> nach einer beliebigen
              Eigenschaft sortiert. Beispiel:
              <br />
              <code>insertionSortObjekte(schueler, "note")</code>
            </li>
          </ul>
          <p>
            <strong>Testdaten für die Objekt-Variante:</strong> mindestens fünf
            Schüler-Objekte mit <code>name</code>, <code>note</code> und{" "}
            <code>alter</code>. Sortieren Sie einmal nach <code>note</code> und
            einmal nach <code>alter</code>.
          </p>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Bei welcher
            Eingabe ist Insertion Sort <code>O(n)</code> und bei welcher{" "}
            <code>O(n²)</code>? Warum gilt Insertion Sort für{" "}
            <em>fast sortierte</em> Listen als sehr gut?
          </p>
        </div>

        {/* ── Aufgabe 3 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 3: Anagramme erkennen</h4>
          <p>
            Zwei Wörter sind Anagramme, wenn sie aus genau denselben Buchstaben
            bestehen — nur in anderer Reihenfolge. Zum Beispiel{" "}
            <code>Lager</code> und <code>Regal</code>.
          </p>
          <p>Schreiben Sie:</p>
          <ol>
            <li>
              Eine Funktion <code>normalisieren(wort)</code>, die
              Grossschreibung, Leerzeichen und Satzzeichen entfernt.
            </li>
            <li>
              Eine Funktion <code>istAnagramm(a, b)</code>, die{" "}
              <code>true</code> oder <code>false</code> zurückgibt. Lösen Sie
              sie über <strong>Buchstaben zählen</strong> mit einem Objekt
              (nicht über Sortieren).
            </li>
            <li>
              Eine Funktion <code>findeAnagramme(wort, liste)</code>, die aus
              einer Wortliste alle Anagramme des gesuchten Wortes zurückgibt.
            </li>
          </ol>
          <p>
            <strong>Testen Sie mit:</strong> <code>"Lager"</code> /{" "}
            <code>"Regal"</code>, <code>"Ampel"</code> / <code>"Lampe"</code>,{" "}
            <code>"Hallo"</code> / <code>"Hallo"</code>,{" "}
            <code>"Informatik"</code> / <code>"Informatiker"</code> und einer
            Wortliste mit mindestens 10 Wörtern.
          </p>
          <p>
            <strong>Erweiterung:</strong> Schreiben Sie{" "}
            <code>gruppiereAnagramme(liste)</code>, die eine Wortliste in
            Gruppen von Anagrammen einteilt. Ergebnis z.&nbsp;B.:
            <br />
            <code>
              {'{ aegl: ["Lager", "Regal"], aelmp: ["Ampel", "Lampe"] }'}
            </code>
            <br />
            Tipp: Das sortierte Wort eignet sich hervorragend als Schlüssel.
          </p>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Welche Laufzeit
            hat Ihre Zähl-Lösung, welche hätte die Sortier-Lösung? Und welche
            Laufzeit hat <code>findeAnagramme</code>, wenn die Wortliste{" "}
            <code>m</code> Wörter mit je <code>n</code> Buchstaben enthält?
          </p>
        </div>

        {/* ── Aufgabe 4 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 4: Suchen im Vergleich</h4>
          <p>
            Implementieren Sie beide Suchverfahren selbst und vergleichen Sie
            sie experimentell.
          </p>
          <ol>
            <li>
              <code>lineareSuche(liste, gesucht)</code> — gibt ein Objekt
              zurück: <code>{"{ index, vergleiche }"}</code>. Nicht gefunden ⇒{" "}
              <code>index: -1</code>.
            </li>
            <li>
              <code>binaereSuche(liste, gesucht)</code> — gleiche Rückgabe.
              Voraussetzung: die Liste ist sortiert.
            </li>
            <li>
              <code>vergleiche(n)</code> — erzeugt eine sortierte Liste mit{" "}
              <code>n</code> Zahlen und sucht darin <strong>jede</strong>{" "}
              enthaltene Zahl einmal mit beiden Verfahren. Geben Sie die{" "}
              <em>durchschnittliche</em> Anzahl Vergleiche pro Suche aus.
            </li>
          </ol>
          <p>
            Rufen Sie <code>vergleiche(n)</code> für{" "}
            <code>n = 10, 100, 1000, 10000</code> auf und stellen Sie das
            Ergebnis als Tabelle in Ihrer <code>README.md</code> dar.
          </p>
          <p>
            <strong>Erweiterung:</strong> Schreiben Sie eine{" "}
            <strong>rekursive</strong> Version der binären Suche mit den
            Parametern <code>links</code> und <code>rechts</code>.
          </p>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Wie verändert
            sich die Anzahl Vergleiche, wenn <code>n</code> verzehnfacht wird —
            bei der linearen und bei der binären Suche? Passt Ihre Messung zu{" "}
            <code>O(n)</code> bzw. <code>O(log n)</code>? Und: Ab wie vielen
            Suchvorgängen lohnt es sich, die Liste vorher zu sortieren?
          </p>
        </div>

        {/* ── Aufgabe 5 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 5: Notenstatistik — alles zusammen</h4>
          <p>
            Eine Anwendung, die mehrere Algorithmen dieser Woche kombiniert.
            Gegeben ist eine Liste von Schüler-Objekten mit <code>name</code>,{" "}
            <code>klasse</code> und <code>noten</code> (Array mit mindestens
            drei Zahlen). Erstellen Sie mindestens <strong>8</strong> solche
            Objekte aus mindestens 2 Klassen.
          </p>
          <p>Schreiben Sie folgende Funktionen:</p>
          <ol>
            <li>
              <code>durchschnitt(noten)</code> — Mittelwert einer Notenliste,
              auf 2 Stellen gerundet. Leere Liste ⇒ <code>0</code>.
            </li>
            <li>
              <code>besteSchuelerin(schueler)</code> — das Objekt mit dem
              höchsten Durchschnitt (Muster: Maximum finden, <em>nicht</em>{" "}
              sortieren).
            </li>
            <li>
              <code>rangliste(schueler)</code> — eine <strong>neue</strong>{" "}
              Liste, absteigend nach Durchschnitt sortiert. Verwenden Sie einen{" "}
              <strong>selbst geschriebenen</strong> Sortieralgorithmus aus
              Aufgabe 1 oder 2, nicht <code>sort()</code>.
            </li>
            <li>
              <code>notenverteilung(schueler)</code> — zählt mit einem Objekt,
              wie oft jede gerundete Note (1–6) insgesamt vorkommt. Ausgabe
              zusätzlich als kleines Textdiagramm, z.&nbsp;B.
              <br />
              <code>5: ████ (4)</code>
            </li>
            <li>
              <code>klassenstatistik(schueler)</code> — gruppiert nach{" "}
              <code>klasse</code> und gibt pro Klasse Anzahl, Durchschnitt und
              Anzahl ungenügender Noten (&lt; 4) zurück.
            </li>
          </ol>
          <p>
            Geben Sie zum Schluss einen sauber formatierten Bericht mit{" "}
            <code>console.log</code> aus.
          </p>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Bestimmen Sie
            für jede der fünf Funktionen die Laufzeit in Abhängigkeit von der
            Anzahl Schüler <code>n</code>. Welche Funktion ist die teuerste und
            warum? Wie ändert sich die Gesamtlaufzeit, wenn Sie in{" "}
            <code>rangliste</code> Quicksort statt Bubble Sort verwenden würden?
          </p>
        </div>
      </Section>

      <Section>
        <h2>Bewertungskriterien</h2>
        <ul>
          <li>
            <strong>Korrektheit:</strong> Die Algorithmen liefern für alle
            Testfälle (inklusive Sonderfälle wie leere Liste) das richtige
            Ergebnis.
          </li>
          <li>
            <strong>Selbst geschrieben:</strong> Die Sortier- und
            Suchalgorithmen sind von Hand implementiert, nicht mit{" "}
            <code>sort()</code> oder <code>indexOf()</code> abgekürzt.
          </li>
          <li>
            <strong>Lesbarkeit:</strong> sprechende Namen, sinnvolle Kommentare,
            saubere Einrückung.
          </li>
          <li>
            <strong>Laufzeitüberlegungen:</strong> zu jeder Aufgabe vorhanden
            und nachvollziehbar begründet.
          </li>
          <li>
            <strong>Abgabe:</strong> alle Dateien im richtigen Ordner, README
            vorhanden, letzter Commit korrekt benannt.
          </li>
        </ul>
      </Section>
    </>
  );
}
