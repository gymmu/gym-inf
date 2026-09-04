import Section from "@components/Section";

export default function JSAufgabenFP() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Funktionales Programmieren</h2>
        <p>
          <strong>10 Aufgaben</strong> zu <code>map</code>, <code>filter</code>,{" "}
          <code>reduce</code> und den Suchmethoden. Die Aufgaben 1–5 sind kurz
          (je ca. 5–10 Minuten), die Aufgaben 6–8 mittel (je ca. 20 Minuten) und
          die Aufgaben 9–10 umfangreich (je ca. 30–45 Minuten).
        </p>
        <p>
          <strong>Grundregel für alle Aufgaben:</strong> Keine <code>for</code>-
          oder <code>while</code>-Schleifen, kein <code>push</code> — ausser es
          steht ausdrücklich dabei. Verwenden Sie Array-Methoden und geben Sie
          jedes Resultat mit <code>console.log</code> aus.
        </p>
        <p>
          Legen Sie pro Aufgabe eine Datei an: <code>aufgabe-01.js</code> bis{" "}
          <code>aufgabe-10.js</code>. Beginnen Sie jede Datei mit einem kurzen
          Kommentar:
        </p>
        <pre>
          <code>
            {`// Aufgabe 1: Preise umrechnen
// Verwendet: map
// Schwierig war: ...`}
          </code>
        </pre>
      </Section>

      {/* ══════════════════════════════════════════════════════
          EINFACHE AUFGABEN
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Einfach (Aufgaben 1–5)</h2>

        {/* ── Aufgabe 1 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 1: map — Preise und Namen</h4>
          <p>
            Gegeben: <code>const preise = [12, 45.5, 8, 99.9, 23];</code> und{" "}
            <code>const namen = ["anna", "ben", "clara"];</code>
          </p>
          <ol>
            <li>
              <code>mitMwst</code> — alle Preise mit 8.1 % Mehrwertsteuer, auf 2
              Stellen gerundet.
            </li>
            <li>
              <code>gross</code> — alle Namen in Grossbuchstaben (
              <code>.toUpperCase()</code>).
            </li>
            <li>
              <code>nummeriert</code> — die Namen als <code>"1. Anna"</code>,{" "}
              <code>"2. Ben"</code>, … Der Callback von <code>map</code> bekommt
              als zweiten Parameter den Index.
            </li>
          </ol>
          <p>
            <strong>Kontrolle:</strong> Geben Sie am Schluss <code>preise</code>{" "}
            nochmals aus. Die Liste muss unverändert sein.
          </p>
        </div>

        {/* ── Aufgabe 2 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 2: filter — aussortieren</h4>
          <p>
            Gegeben:{" "}
            <code>const zahlen = [3, 12, 7, 40, 15, 8, 23, 4, 91, 16];</code>{" "}
            und{" "}
            <code>
              const woerter = ["Haus", "Ei", "Computer", "Baum", "JavaScript",
              "Uhr"];
            </code>
          </p>
          <ol>
            <li>Alle Zahlen grösser als 10.</li>
            <li>Alle ungeraden Zahlen.</li>
            <li>Alle Zahlen, die durch 4 teilbar sind.</li>
            <li>Alle Wörter mit mehr als 4 Buchstaben.</li>
            <li>
              Alle Wörter, die ein <code>"a"</code> enthalten (
              <code>.includes("a")</code>).
            </li>
          </ol>
          <p>
            <strong>Zusatzfrage als Kommentar:</strong> Wie viele Elemente hat
            eine <code>filter</code>-Liste höchstens?
          </p>
        </div>

        {/* ── Aufgabe 3 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 3: reduce — zusammenfassen</h4>
          <p>
            Gegeben: <code>const zahlen = [5, 2, 9, 1, 7, 3];</code>
          </p>
          <ol>
            <li>
              <code>summe</code> — die Summe aller Zahlen (Startwert{" "}
              <code>0</code>).
            </li>
            <li>
              <code>produkt</code> — das Produkt aller Zahlen. Überlegen Sie:
              Welcher Startwert ist hier richtig — und warum nicht 0?
            </li>
            <li>
              <code>maximum</code> — die grösste Zahl, nur mit{" "}
              <code>reduce</code>.
            </li>
            <li>
              <code>satz</code> — aus{" "}
              <code>["Ich", "lerne", "JavaScript"]</code> mit{" "}
              <code>reduce</code> den String <code>"Ich lerne JavaScript"</code>
              . Der Akkumulator ist hier ein String.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 4 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 4: Die erste Kette</h4>
          <p>
            Gegeben ist eine Liste von Produkten:
            <br />
            <code>{`{ name: "Maus", preis: 25, lager: 12 }`}</code> — erstellen
            Sie selbst mindestens 6 solche Objekte.
          </p>
          <ol>
            <li>
              Die Namen aller Produkte, die günstiger als 50 sind — als eine
              Kette <code>filter</code> → <code>map</code>.
            </li>
            <li>
              Der Gesamtwert des Lagers (<code>preis · lager</code> aufsummiert)
              — als Kette <code>map</code> → <code>reduce</code>.
            </li>
            <li>
              Die Namen der Produkte, die ausverkauft sind (
              <code>lager === 0</code>). Mindestens eines Ihrer Produkte soll
              ausverkauft sein.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 5 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 5: Suchen ohne Schleife</h4>
          <p>
            Verwenden Sie dieselbe Produktliste wie in Aufgabe 4 und beantworten
            Sie jede Frage mit <strong>genau einer</strong> Methode aus{" "}
            <code>find</code>, <code>findIndex</code>, <code>some</code>,{" "}
            <code>every</code>, <code>includes</code>.
          </p>
          <ol>
            <li>Das erste Produkt, das teurer als 40 ist.</li>
            <li>An welcher Position steht das Produkt «Maus»?</li>
            <li>Gibt es überhaupt ein Produkt unter 10 Franken?</li>
            <li>Sind alle Produkte auf Lager?</li>
            <li>
              Schreiben Sie als Kommentar dazu: Welche dieser Methoden hören
              auf, sobald sie fündig geworden sind — und welche nicht?
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          MITTLERE AUFGABEN
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Mittel (Aufgaben 6–8)</h2>

        {/* ── Aufgabe 6 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 6: Notenauswertung</h4>
          <p>
            Erstellen Sie eine Liste von mindestens 8 Schüler-Objekten mit{" "}
            <code>name</code>, <code>klasse</code> (mindestens 2 verschiedene)
            und <code>noten</code> (Array mit 3–5 Zahlen).
          </p>
          <p>Schreiben Sie folgende Funktionen — alle ohne Schleifen:</p>
          <ol>
            <li>
              <code>durchschnitt(noten)</code> — Mittelwert einer Notenliste,
              auf 2 Stellen gerundet.
            </li>
            <li>
              <code>mitSchnitt(schueler)</code> — gibt eine neue Liste zurück,
              in der jedes Objekt zusätzlich die Eigenschaft{" "}
              <code>schnitt</code> hat. Tipp: <code>map</code> mit Spread:{" "}
              <code>{`({ ...s, schnitt: durchschnitt(s.noten) })`}</code>
            </li>
            <li>
              <code>bestandene(schueler)</code> — alle mit Schnitt ≥ 4.
            </li>
            <li>
              <code>rangliste(schueler)</code> — nach Schnitt absteigend
              sortiert, als <code>"1. Anna (5.25)"</code> ausgegeben. Verwenden
              Sie <code>toSorted</code> mit einer Vergleichsfunktion.
            </li>
            <li>
              <code>klassenschnitt(schueler, klasse)</code> — Durchschnitt aller
              Noten einer Klasse.
            </li>
            <li>
              Schreiben Sie mindestens zwei <strong>benannte Prädikate</strong>{" "}
              (z.&nbsp;B. <code>istBestanden</code>, <code>istInKlasse</code>)
              und übergeben Sie diese an <code>filter</code> — ohne Klammern.
            </li>
          </ol>
          <p>
            <strong>Ausgabe:</strong> ein kurzer, sauber formatierter Bericht
            mit <code>console.log</code>.
          </p>
        </div>

        {/* ── Aufgabe 7 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 7: Zählen und Gruppieren mit reduce</h4>
          <p>
            Hier ist der Akkumulator immer ein <strong>Objekt</strong>. Das ist
            das wichtigste <code>reduce</code>-Muster überhaupt.
          </p>
          <ol>
            <li>
              <code>buchstabenZaehlen(text)</code> — zählt, wie oft jeder
              Buchstabe vorkommt. Tipp:{" "}
              <code>text.toLowerCase().split("")</code> ergibt ein Array. Testen
              Sie mit <code>"Informatik ist toll"</code> (Leerzeichen vorher
              herausfiltern).
            </li>
            <li>
              <code>haeufigsterBuchstabe(text)</code> — gibt den häufigsten
              Buchstaben zurück. Tipp: <code>Object.entries()</code> und dann{" "}
              <code>reduce</code>.
            </li>
            <li>
              <code>gruppiereNach(liste, schluessel)</code> — gruppiert eine
              Liste von Objekten nach einer Eigenschaft und gibt ein Objekt
              zurück, z.&nbsp;B. <code>{`{ "1a": [...], "1b": [...] }`}</code>.
              Testen Sie es mit Ihrer Schülerliste aus Aufgabe 6 (Schlüssel{" "}
              <code>"klasse"</code>).
            </li>
            <li>
              <code>wortHaeufigkeit(satz)</code> — zählt, wie oft jedes Wort in
              einem Satz vorkommt, und gibt die Top 3 aus.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 8 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 8: Woche 3 umschreiben</h4>
          <p>
            Nehmen Sie Ihre Lösungen der Standard-Algorithmen und schreiben Sie
            sie funktional neu. Schreiben Sie{" "}
            <strong>beide Versionen untereinander</strong> in dieselbe Datei —
            die alte Schleifenversion als Kommentar darüber.
          </p>
          <ol>
            <li>
              <code>lineareSuche(liste, gesucht)</code> → <code>findIndex</code>
            </li>
            <li>
              <code>maximum(liste)</code> und <code>minimum(liste)</code> →{" "}
              <code>reduce</code>
            </li>
            <li>
              <code>summe</code>, <code>durchschnitt</code>,{" "}
              <code>zaehleWenn(liste, bedingung)</code> → <code>reduce</code>{" "}
              bzw. <code>filter</code>
            </li>
            <li>
              <code>umkehren(liste)</code> — ohne <code>.reverse()</code>. Tipp:{" "}
              <code>reduce</code> mit einem Array als Akkumulator, neues Element
              jeweils vorne anfügen: <code>[element, ...akku]</code>
            </li>
            <li>
              <code>istPalindrom(wort)</code> — mit den Methoden von oben.
            </li>
          </ol>
          <p>
            <strong>Reflexion als Kommentar:</strong> Bei welchen der fünf
            Aufgaben ist die funktionale Version klarer, bei welchen nicht?
            Ändert sich die Laufzeit (O-Notation)?
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SCHWIERIGE AUFGABEN
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Anspruchsvoll (Aufgaben 9–10)</h2>

        {/* ── Aufgabe 9 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 9: Datenanalyse — Musik-Streaming</h4>
          <p>
            Erstellen Sie einen Datensatz von mindestens{" "}
            <strong>12 Songs</strong> mit den Eigenschaften <code>titel</code>,{" "}
            <code>artist</code>, <code>genre</code>, <code>dauer</code> (in
            Sekunden), <code>jahr</code> und <code>streams</code>. Mindestens 4
            verschiedene Genres und mindestens 2 Songs pro Artist.
          </p>
          <p>Beantworten Sie alle Fragen als Pipeline, ohne Schleifen:</p>
          <ol>
            <li>Gesamtspieldauer aller Songs, formatiert als «1h 23m 45s».</li>
            <li>
              Die 3 meistgestreamten Songs als{" "}
              <code>"1. Titel — Artist (1'200'000 Streams)"</code>.
            </li>
            <li>
              Streams pro Genre (Objekt), zusätzlich als Textdiagramm:
              <br />
              <code>Rock: ██████ (6.2 Mio)</code>
            </li>
            <li>
              Durchschnittliche Songlänge pro Genre — als Objekt{" "}
              <code>{`{ Rock: 245, Pop: 198, ... }`}</code>.
            </li>
            <li>
              Der Artist mit den meisten Gesamtstreams (nicht nur mit dem besten
              einzelnen Song).
            </li>
            <li>
              Schreiben Sie eine <strong>Funktionen-Fabrik</strong>{" "}
              <code>ausGenre(genre)</code>, die ein Prädikat zurückgibt, sowie{" "}
              <code>nach(schluessel)</code> für <code>toSorted</code>. Verwenden
              Sie beide mindestens zweimal mit unterschiedlichen Werten.
            </li>
            <li>
              <code>suche(liste, text)</code> — findet alle Songs, bei denen{" "}
              <code>text</code> im Titel <em>oder</em> im Artist vorkommt,
              unabhängig von Gross-/Kleinschreibung.
            </li>
            <li>
              <code>playlist(liste, maxDauer)</code> — stellt eine Playlist
              zusammen, die die vorgegebene Gesamtdauer nicht überschreitet.
              Songs werden von den meistgestreamten her genommen. Tipp: mit{" "}
              <code>reduce</code> und einem Akkumulator{" "}
              <code>{`{ songs: [], dauer: 0 }`}</code>.
            </li>
          </ol>
          <p>
            Geben Sie zum Schluss einen vollständigen, lesbaren Bericht aus.
          </p>
        </div>

        {/* ── Aufgabe 10 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 10: Die Werkzeuge selbst bauen</h4>
          <p>
            Zum Schluss schauen wir unter die Motorhaube. Hier{" "}
            <strong>dürfen</strong> Sie Schleifen und <code>push</code>{" "}
            verwenden — aber nur innerhalb Ihrer eigenen Werkzeuge.
          </p>
          <ol>
            <li>
              <code>meinMap(liste, callback)</code>,{" "}
              <code>meinFilter(liste, callback)</code>,{" "}
              <code>meinReduce(liste, callback, startwert)</code> — mit einer
              klassischen <code>for</code>-Schleife nachbauen. Der Callback muss
              auch den Index bekommen.
            </li>
            <li>
              Testen Sie jede Funktion gegen das Original: Ergibt{" "}
              <code>meinMap(a, f)</code> dasselbe wie <code>a.map(f)</code>?
              Schreiben Sie dafür eine kleine Hilfsfunktion{" "}
              <code>pruefe(beschreibung, erwartet, erhalten)</code>, die{" "}
              <code>OK</code> oder <code>FEHLER</code> ausgibt.
            </li>
            <li>
              <strong>Die Knacknuss:</strong> Bauen Sie <code>meinMap</code> und{" "}
              <code>meinFilter</code> ein zweites Mal — diesmal <em>ohne</em>{" "}
              Schleife, nur mit <code>reduce</code>. Damit zeigen Sie:{" "}
              <code>reduce</code> ist das allgemeinste der drei Werkzeuge.
            </li>
            <li>
              <code>pipe(...funktionen)</code> — gibt eine neue Funktion zurück,
              die alle übergebenen Funktionen nacheinander anwendet.
              <br />
              <code>
                {`const verarbeite = pipe(verdoppeln, plusEins); verarbeite(5); // 11`}
              </code>
              <br />
              Tipp: auch das ist ein <code>reduce</code> — über die Liste der
              Funktionen.
            </li>
            <li>
              Lösen Sie damit eine Auswertung aus Aufgabe 9 nochmals im
              Pipe-Stil und vergleichen Sie die Lesbarkeit.
            </li>
          </ol>
          <p>
            <strong>Reflexion als Kommentar:</strong> Warum kann man{" "}
            <code>map</code> und <code>filter</code> mit <code>reduce</code>{" "}
            bauen, aber <code>reduce</code> nicht mit <code>map</code>?
          </p>
        </div>
      </Section>

      <Section>
        <h2>Abgabe</h2>
        <p>
          Zehn Dateien <code>aufgabe-01.js</code> bis <code>aufgabe-10.js</code>{" "}
          in einem Ordner <code>woche-04-fp</code>. Jede Datei muss ohne Fehler
          laufen (<code>node aufgabe-01.js</code>) und ihre Resultate ausgeben.
        </p>
        <p>
          Die Aufgaben 1–5 sollten Sie in der ersten Lektion abschliessen
          können. Wer bei 9 und 10 nicht fertig wird: Halten Sie im Kommentar
          fest, wie weit Sie gekommen sind und wo Sie stecken geblieben sind.
        </p>
      </Section>
    </>
  );
}
