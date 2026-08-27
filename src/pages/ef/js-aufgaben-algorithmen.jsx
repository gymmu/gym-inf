import Section from "@components/Section";

export default function JSAufgabenAlgorithmen() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Algorithmen</h2>
        <p>
          In diesem Arbeitsauftrag bearbeiten Sie <strong>5 Aufgaben</strong> zu
          den Algorithmen dieser Woche. Sie beginnen mit zwei klassischen
          Rechen-Algorithmen und arbeiten sich zu den Sortieralgorithmen vor.
          Die Aufgaben sind deutlich umfangreicher als in den letzten Wochen —
          planen Sie genügend Zeit ein und arbeiten Sie in kleinen Schritten.
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
        <h2>Dokumentation</h2>
        <p>
          Beginnen Sie jede Datei mit einem Kommentarblock nach diesem Muster:
        </p>
        <pre>
          <code>
            {`// Aufgabe 1: Modulo selbst berechnen
// Idee: Solange der Divisor passt, wird er abgezogen
// Laufzeit: O(a / b), weil pro Durchgang genau einmal subtrahiert wird
// Schwierig war: ...
// Gelernt habe ich: ...`}
          </code>
        </pre>
      </Section>

      <Section>
        <h2>Aufgaben</h2>

        {/* ── Aufgabe 1 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 1: Modulo selbst berechnen</h4>
          <p>
            Der Modulo-Operator <code>%</code> gibt den{" "}
            <strong>Rest einer Division</strong> zurück:{" "}
            <code>17 % 5 === 2</code>, weil 5 dreimal in 17 passt und 2 übrig
            bleibt. In dieser Aufgabe bauen Sie diesen Operator selbst nach.
          </p>
          <p>
            <strong>Regel:</strong> Sie dürfen <code>%</code> nicht verwenden.
            Auch <code>Math.floor</code>, <code>Math.trunc</code> und ähnliche
            Abkürzungen sind nicht erlaubt. Nur <code>+</code>, <code>-</code>,{" "}
            Vergleiche und Schleifen.
          </p>
          <p>Schreiben Sie:</p>
          <ol>
            <li>
              <code>modulo(a, b)</code> — gibt den Rest von <code>a / b</code>{" "}
              zurück. Idee: Ziehen Sie <code>b</code> so lange von{" "}
              <code>a</code> ab, wie <code>a</code> noch mindestens so gross ist
              wie <code>b</code>. Was übrig bleibt, ist der Rest.
            </li>
            <li>
              <code>ganzzahlDivision(a, b)</code> — gibt zurück, wie oft{" "}
              <code>b</code> ganz in <code>a</code> passt. Das ist genau die
              Anzahl Subtraktionen aus Aufgabenteil 1.
            </li>
            <li>
              <code>teile(a, b)</code> — gibt beides zusammen als Objekt zurück:{" "}
              <code>{"{ quotient, rest }"}</code>.
            </li>
            <li>
              <code>istTeilbar(a, b)</code> — <code>true</code>, wenn der Rest 0
              ist. Testen Sie damit, welche Zahlen von 1 bis 50 durch 7 teilbar
              sind.
            </li>
          </ol>
          <p>
            <strong>Testen Sie mit:</strong> <code>modulo(17, 5)</code> → 2,{" "}
            <code>modulo(20, 4)</code> → 0, <code>modulo(3, 7)</code> → 3,{" "}
            <code>modulo(0, 5)</code> → 0. Vergleichen Sie Ihr Resultat jeweils
            mit dem eingebauten <code>%</code>, um zu prüfen, ob Sie richtig
            liegen.
          </p>
          <p>
            <strong>Sonderfälle bedenken:</strong> Was passiert bei{" "}
            <code>b === 0</code>? Und was bei negativen Zahlen? Behandeln Sie
            mindestens den Fall <code>b === 0</code> sauber (z.&nbsp;B. mit
            einer Fehlermeldung).
          </p>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Wie viele
            Durchgänge braucht Ihre Schleife bei <code>modulo(1000, 3)</code>?
            Und bei <code>modulo(1000000, 3)</code>? Die Laufzeit hängt hier
            nicht von der Länge einer Liste ab — wovon dann? Warum ist das für
            sehr grosse Zahlen ein Problem?
          </p>
        </div>

        {/* ── Aufgabe 2 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 2: Grösster gemeinsamer Teiler (GGT)</h4>
          <p>
            Der <strong>GGT</strong> zweier Zahlen ist die grösste Zahl, die
            beide ohne Rest teilt. Zum Beispiel ist{" "}
            <code>ggt(48, 18) === 6</code>. Man braucht ihn unter anderem zum
            Kürzen von Brüchen. Der <em>euklidische Algorithmus</em> dafür ist
            über 2000 Jahre alt und einer der ältesten Algorithmen überhaupt.
          </p>
          <p>Schreiben Sie drei Varianten und vergleichen Sie sie:</p>
          <ol>
            <li>
              <code>ggtBrutal(a, b)</code> — probiert alle Zahlen von 1 bis zur
              kleineren der beiden durch und merkt sich die grösste, die beide
              teilt. Verwenden Sie dafür Ihr <code>istTeilbar</code> aus Aufgabe
              1.
            </li>
            <li>
              <code>ggtSubtraktion(a, b)</code> — der ursprüngliche Euklid:
              Solange die beiden Zahlen verschieden sind, ziehe die kleinere von
              der grösseren ab. Wenn beide gleich sind, ist das der GGT.
            </li>
            <li>
              <code>ggtModulo(a, b)</code> — die moderne Version: Solange{" "}
              <code>b</code> nicht 0 ist, ersetze das Paar <code>(a, b)</code>{" "}
              durch <code>(b, a mod b)</code>. Sobald <code>b === 0</code> ist,
              ist <code>a</code> der GGT. Verwenden Sie dafür Ihre eigene{" "}
              <code>modulo</code>-Funktion aus Aufgabe 1.
            </li>
          </ol>
          <p>
            Alle drei Funktionen sollen zusätzlich die Anzahl{" "}
            <strong>Durchgänge</strong> mitzählen und ausgeben.
          </p>
          <p>
            <strong>Testen Sie mit:</strong> <code>(48, 18)</code> → 6,{" "}
            <code>(1071, 462)</code> → 21, <code>(17, 5)</code> → 1
            (teilerfremd), <code>(100, 100)</code> → 100 und{" "}
            <code>(1000000, 2)</code>.
          </p>
          <p>
            <strong>Erweiterungen:</strong>
          </p>
          <ul>
            <li>
              <code>kgv(a, b)</code> — das kleinste gemeinsame Vielfache. Tipp:{" "}
              <code>a · b / ggt(a, b)</code>.
            </li>
            <li>
              <code>kuerze(zaehler, nenner)</code> — kürzt einen Bruch
              vollständig und gibt <code>{"{ zaehler, nenner }"}</code> zurück.
              Testen Sie mit <code>48/18</code> → <code>8/3</code>.
            </li>
            <li>
              <code>ggtListe(zahlen)</code> — der GGT einer ganzen Liste von
              Zahlen (mehrfach anwenden).
            </li>
          </ul>
          <p>
            <strong>Laufzeitüberlegung (als Kommentar):</strong> Vergleichen Sie
            die Anzahl Durchgänge der drei Varianten für{" "}
            <code>(1071, 462)</code> und für <code>(1000000, 2)</code>. Welche
            Variante ist bei welcher Eingabe besonders schlecht und warum?
            Ordnen Sie <code>ggtBrutal</code> einer Laufzeitklasse zu.
          </p>
        </div>

        {/* ── Aufgabe 3 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 3: Selection Sort (Sortieren durch Auswählen)</h4>
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

        {/* ── Aufgabe 4 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 4: Insertion Sort (Sortieren durch Einfügen)</h4>
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
              Aufgabe 3 oder 4, nicht <code>sort()</code>.
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
    </>
  );
}
