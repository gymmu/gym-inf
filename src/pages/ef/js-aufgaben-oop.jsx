import Section from "@components/Section";

export default function JSAufgabenOOP() {
  return (
    <>
      <Section>
        <h2>Projekt: Das Dungeon-Duell</h2>
        <p>
          Diese Woche gibt es <strong>eine</strong> grosse Aufgabe statt vieler
          kleiner: ein rundenbasiertes Kampfspiel, das nur in der Konsole läuft.
          Sie bauen es in <strong>acht Teilen</strong> auf. Jeder Teil
          funktioniert für sich — testen Sie nach jedem Teil, bevor Sie
          weitergehen.
        </p>
        <p>
          Die Teile 1–5 sind Pflicht, Teil 6 und 7 vervollständigen das Spiel,
          Teil 8 ist die Kür. Es gibt keine Musterlösung: Namen, Zahlen und
          Spielwelt dürfen Sie frei wählen, solange die geforderte Struktur
          stimmt.
        </p>

        <h3>Das fertige Klassenmodell</h3>
        <pre>
          <code>
            {`Wesen                (Basisklasse: name, leben, staerke)
 ├── Held             (erbt: level, erfahrung, waffe, inventar)
 └── Monster          (erbt: beute)

Waffe                 (name, schaden, tempo)     -> Held HAT eine Waffe
Gegenstand            (name, wirkung, wert)      -> Inventar HAT Gegenstände
Inventar              (Liste von Gegenständen)   -> Held HAT ein Inventar
Kampf                 (zwei Wesen, Rundenlogik)
Spiel                 (Held + mehrere Monster, Ablauf)`}
          </code>
        </pre>
        <p>
          <strong>Achten Sie auf den Unterschied:</strong> <code>Held</code> und{" "}
          <code>Monster</code> <strong>erben</strong> von <code>Wesen</code> —
          sie erweitern eine bestehende Klasse. <code>Waffe</code>,{" "}
          <code>Gegenstand</code> und <code>Inventar</code> sind dagegen eigene
          Klassen, die als <strong>Attribut</strong> in einem Objekt stecken.
        </p>

        <h3>Dateien</h3>
        <p>
          Legen Sie einen Ordner <code>woche-05-dungeon</code> an. Arbeiten Sie
          in einer einzigen Datei <code>spiel.js</code> und markieren Sie die
          Teile mit Kommentaren:
        </p>
        <pre>
          <code>
            {`// ===== TEIL 1: Klasse Wesen =====
// Idee: ...
// Schwierig war: ...`}
          </code>
        </pre>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 1
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Pflichtteil</h2>

        <div className="aufgabe">
          <h4>Teil 1: Die Basisklasse Wesen</h4>
          <p>
            Alles im Spiel, das kämpfen kann, ist ein <code>Wesen</code>.
            Schreiben Sie diese Klasse zuerst.
          </p>
          <ol>
            <li>
              <strong>Konstruktor</strong> mit <code>name</code>,{" "}
              <code>leben</code> und <code>staerke</code>. Merken Sie sich das
              Startleben zusätzlich als <code>maxLeben</code>.
            </li>
            <li>
              <code>lebt()</code> — gibt <code>true</code> zurück, solange die
              Lebenspunkte über 0 sind.
            </li>
            <li>
              <code>nimmSchaden(menge)</code> — zieht Leben ab, aber nie unter
              0. Gibt eine Meldung aus, wenn das Wesen dabei besiegt wird.
            </li>
            <li>
              <code>heilen(menge)</code> — heilt, aber höchstens bis{" "}
              <code>maxLeben</code>. Ein besiegtes Wesen kann nicht geheilt
              werden.
            </li>
            <li>
              <code>angreifen(ziel)</code> — fügt dem Ziel{" "}
              <code>this.staerke</code> Schaden zu und gibt aus, was passiert
              ist.
            </li>
            <li>
              <code>lebensbalken()</code> — gibt einen Textbalken zurück, z. B.{" "}
              <code>[#######...] 70/100</code>.
            </li>
            <li>
              <code>info()</code> — eine Zeile mit Name und Lebensbalken.
            </li>
          </ol>
          <p>
            <strong>Test:</strong> Zwei Wesen erzeugen, sich gegenseitig
            angreifen lassen, bis eines besiegt ist. Nach jedem Angriff{" "}
            <code>info()</code> beider Wesen ausgeben.
          </p>
        </div>

        {/* ── Teil 2 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Teil 2: Kapselung der Lebenspunkte</h4>
          <p>
            Im Moment kann man <code>held.leben = 99999</code> schreiben und
            schummeln. Das ändern wir.
          </p>
          <ol>
            <li>
              Machen Sie das Lebensfeld privat: <code>#leben</code>. Alle
              Methoden der Klasse verwenden ab jetzt <code>this.#leben</code>.
            </li>
            <li>
              Ergänzen Sie einen <strong>Getter</strong>{" "}
              <code>get leben()</code>, damit man den Wert weiterhin lesen kann.
            </li>
            <li>
              Ergänzen Sie einen <strong>Setter</strong>{" "}
              <code>set leben(neu)</code>, der den Wert auf den Bereich zwischen
              0 und <code>maxLeben</code> begrenzt.
            </li>
            <li>
              Ergänzen Sie einen Getter <code>get zustand()</code>, der je nach
              Prozentsatz <code>"frisch"</code>, <code>"verletzt"</code>,{" "}
              <code>"kritisch"</code> oder <code>"besiegt"</code> zurückgibt.
            </li>
          </ol>
          <p>
            <strong>Test:</strong> Versuchen Sie, von aussen zu schummeln (
            <code>wesen.leben = 99999</code> und, als Kommentar,{" "}
            <code>wesen.#leben</code>). Halten Sie im Kommentar fest, was
            jeweils passiert und warum.
          </p>
        </div>

        {/* ── Teil 3 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Teil 3: Held und Monster erben</h4>
          <p>
            Jetzt kommen zwei Unterklassen dazu. Beide verwenden{" "}
            <code>extends</code> und rufen im Konstruktor zuerst{" "}
            <code>super(...)</code> auf.
          </p>
          <ol>
            <li>
              <code>class Held extends Wesen</code> — zusätzlich{" "}
              <code>level</code> (Start 1) und <code>erfahrung</code> (Start 0).
            </li>
            <li>
              <code>erfahrungGeben(menge)</code> — zählt Erfahrung dazu. Ab 100
              Punkten steigt der Held ein Level auf: Erfahrung um 100
              reduzieren, <code>maxLeben</code> +20, voll heilen,{" "}
              <code>staerke</code> +5. Ein Levelaufstieg soll auch mehrfach
              hintereinander möglich sein.
            </li>
            <li>
              <code>class Monster extends Wesen</code> — zusätzlich{" "}
              <code>beute</code> (Erfahrungspunkte, die es beim Besiegen gibt).
            </li>
            <li>
              <strong>Überschreiben:</strong> Beide Klassen überschreiben{" "}
              <code>info()</code> und verwenden dabei <code>super.info()</code>{" "}
              weiter. Beim Held wird das Level ergänzt, beim Monster die Beute.
            </li>
            <li>
              <strong>Überschreiben mit Extra:</strong> Das Monster überschreibt{" "}
              <code>angreifen(ziel)</code> so, dass es mit einer
              Wahrscheinlichkeit von 20 % daneben schlägt (
              <code>Math.random()</code>).
            </li>
          </ol>
          <p>
            <strong>Test:</strong> Legen Sie ein Array mit einem Held und drei
            verschiedenen Monstern an und geben Sie mit einer <code>map</code>
            -Kette alle <code>info()</code>-Zeilen aus. Jedes Objekt muss seine
            eigene Version von <code>info()</code> verwenden — das ist{" "}
            <strong>Polymorphie</strong>.
          </p>
        </div>

        {/* ── Teil 4 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Teil 4: Waffen als eigene Klasse</h4>
          <p>
            Eine Waffe kämpft nicht selbst — sie wird darum nicht von{" "}
            <code>Wesen</code> abgeleitet, sondern als eigene Klasse gebaut und
            dem Held als Attribut mitgegeben.
          </p>
          <ol>
            <li>
              <code>class Waffe</code> mit <code>name</code>,{" "}
              <code>schaden</code> und <code>tempo</code> (Angriffe pro Runde, 1
              oder 2).
            </li>
            <li>
              Methode <code>beschreibung()</code>, z. B.{" "}
              <code>"Kurzschwert (12 Schaden, 2x)"</code>.
            </li>
            <li>
              Der <code>Held</code> bekommt ein Attribut <code>waffe</code>
              (Startwert: eine Faust-Waffe mit wenig Schaden) und eine Methode{" "}
              <code>ausruesten(waffe)</code>, die die alte Waffe zurückgibt.
            </li>
            <li>
              Der Held überschreibt <code>angreifen(ziel)</code>: Der Schaden
              ist jetzt <code>staerke + waffe.schaden</code>, und der Angriff
              wird <code>waffe.tempo</code>-mal ausgeführt.
            </li>
            <li>
              Erstellen Sie mindestens drei verschiedene Waffen und lassen Sie
              den Held sie ausprobieren.
            </li>
          </ol>
          <p>
            <strong>Frage als Kommentar:</strong> Warum wäre{" "}
            <code>class Waffe extends Wesen</code> hier falsch? Welche geerbten
            Methoden würden für eine Waffe überhaupt keinen Sinn ergeben?
          </p>
        </div>

        {/* ── Teil 5 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Teil 5: Gegenstände und Inventar</h4>
          <p>
            Hier treffen die beiden Wochen aufeinander: Das Inventar ist eine
            Klasse, die intern eine Liste verwaltet — ausgewertet mit{" "}
            <code>map</code>, <code>filter</code> und <code>reduce</code>.
          </p>
          <ol>
            <li>
              <code>class Gegenstand</code> mit <code>name</code>,{" "}
              <code>art</code> (<code>"trank"</code> oder <code>"schatz"</code>
              ), <code>wirkung</code> (Heilung) und <code>wert</code> (Gold).
            </li>
            <li>
              <code>class Inventar</code> mit einem privaten Array{" "}
              <code>#gegenstaende</code>.
            </li>
            <li>
              <code>hinzufuegen(gegenstand)</code> und{" "}
              <code>entfernen(name)</code> — entfernen mit <code>filter</code>.
            </li>
            <li>
              <code>get anzahl()</code>, <code>get gesamtwert()</code> (mit{" "}
              <code>reduce</code>) und <code>get traenke()</code> (mit{" "}
              <code>filter</code>).
            </li>
            <li>
              <code>anzeigen()</code> — eine nummerierte Liste, erzeugt mit{" "}
              <code>map</code>.
            </li>
            <li>
              Der Held bekommt ein <code>inventar</code> und die Methode{" "}
              <code>trinken()</code>: nimmt den ersten Trank, heilt sich damit
              und entfernt ihn aus dem Inventar. Ohne Trank: passende Meldung.
            </li>
          </ol>
          <p>
            <strong>Test:</strong> Held verletzen, drei Gegenstände einsammeln,
            Inventar anzeigen, zweimal trinken, Gesamtwert ausgeben.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 6 & 7
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Das Spiel zusammensetzen</h2>

        <div className="aufgabe">
          <h4>Teil 6: Die Klasse Kampf</h4>
          <p>
            Bis jetzt haben wir die Angriffe von Hand aufgerufen. Eine eigene
            Klasse übernimmt nun den Ablauf einer ganzen Auseinandersetzung.
          </p>
          <ol>
            <li>
              <code>class Kampf</code> mit Konstruktor{" "}
              <code>(held, monster)</code>. Zusätzlich <code>runde</code> (Start
              0) und <code>protokoll</code> (leeres Array).
            </li>
            <li>
              <code>notiz(text)</code> — hängt eine Zeile ans Protokoll an und
              gibt sie mit <code>console.log</code> aus.
            </li>
            <li>
              <code>eineRunde()</code> — Rundenzähler erhöhen, Held greift an,
              danach das Monster (falls es noch lebt). Wenn der Held unter 30 %
              Leben fällt, trinkt er automatisch einen Trank.
            </li>
            <li>
              <code>starten()</code> — führt Runden aus, bis einer besiegt ist
              oder 20 Runden vorbei sind. Gibt am Schluss den Sieger zurück.
            </li>
            <li>
              Gewinnt der Held, bekommt er die <code>beute</code> des Monsters
              als Erfahrung.
            </li>
            <li>
              <code>zusammenfassung()</code> — Anzahl Runden, Sieger und
              verbleibende Lebenspunkte.
            </li>
          </ol>
          <p>
            <strong>Test:</strong> Ein Kampf Held gegen Monster, vollständig
            protokolliert.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Teil 7: Die Klasse Spiel</h4>
          <p>Zum Schluss die oberste Ebene: ein Dungeon mit mehreren Räumen.</p>
          <ol>
            <li>
              <code>class Spiel</code> mit Konstruktor{" "}
              <code>(held, monsterListe)</code>.
            </li>
            <li>
              <code>starten()</code> — der Held kämpft nacheinander gegen alle
              Monster. Nach jedem Sieg: kurze Pause-Meldung, 20 % Heilung und
              ein zufälliger Gegenstand ins Inventar. Bei einer Niederlage endet
              das Spiel sofort.
            </li>
            <li>
              <code>bericht()</code> — Auswertung am Ende, vollständig mit den
              Werkzeugen aus Woche 4:
              <ul>
                <li>
                  Anzahl besiegter Monster (<code>filter</code>)
                </li>
                <li>
                  gesamte gesammelte Erfahrung und Gold (<code>reduce</code>)
                </li>
                <li>Name des stärksten besiegten Monsters</li>
                <li>
                  Liste aller Monster mit Status (<code>map</code>)
                </li>
                <li>Level und Endzustand des Helden</li>
              </ul>
            </li>
            <li>
              Erzeugen Sie mindestens <strong>5 Monster</strong> mit steigender
              Schwierigkeit und lassen Sie das Spiel laufen.
            </li>
          </ol>
          <p>
            <strong>Balancing:</strong> Passen Sie die Zahlen so an, dass das
            Spiel weder immer gewonnen noch immer verloren wird. Lassen Sie es
            dafür mehrmals laufen und halten Sie Ihre Beobachtungen im Kommentar
            fest.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          TEIL 8 — Kür
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Kür</h2>

        <div className="aufgabe">
          <h4>Teil 8: Erweiterungen (freiwillig)</h4>
          <p>Wählen Sie mindestens zwei Erweiterungen:</p>
          <ol>
            <li>
              <strong>Heldenklassen:</strong> <code>Krieger</code>,{" "}
              <code>Magier</code> und <code>Bogenschuetze</code> erben von{" "}
              <code>Held</code> und überschreiben{" "}
              <code>spezialangriff(ziel)</code> unterschiedlich (z. B. doppelter
              Schaden alle 3 Runden, Flächenzauber, sicherer Treffer). Rufen Sie
              die Methode für alle Helden in einer Schleife auf — dieselbe
              Zeile, unterschiedliches Verhalten.
            </li>
            <li>
              <strong>Kritische Treffer:</strong> 10 % Chance auf doppelten
              Schaden, mit eigener Meldung. Der Schadenswert soll in einer
              eigenen Methode <code>berechneSchaden()</code> entstehen, damit
              ihn alle Unterklassen erben.
            </li>
            <li>
              <strong>Bosskampf:</strong> Ein <code>Boss extends Monster</code>{" "}
              mit zwei Phasen: Unter 50 % Leben verdoppelt sich seine Stärke,
              mit einer entsprechenden Ankündigung.
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Reflexion (für alle)</h4>
          <p>Beantworten Sie am Ende der Datei als Kommentar:</p>
          <ol>
            <li>
              Welche Methoden mussten Sie dank <code>extends</code> nur{" "}
              <strong>einmal</strong> schreiben?
            </li>
            <li>
              Was hätte sich geändert, wenn Sie das Spiel rein funktional gebaut
              hätten — mit Objekten als reinen Datensätzen und separaten
              Funktionen? Nennen Sie je einen Vorteil beider Ansätze.
            </li>
            <li>
              Wo im Programm haben Sie <code>map</code>, <code>filter</code>{" "}
              oder <code>reduce</code> verwendet? War das jeweils klarer als
              eine Schleife?
            </li>
            <li>
              Welche Stelle würden Sie als Erstes umbauen, wenn Sie mehr Zeit
              hätten — und warum?
            </li>
          </ol>
        </div>
      </Section>

      <Section>
        <h2>Abgabe</h2>
        <p>
          Eine lauffähige Datei <code>spiel.js</code> im Ordner{" "}
          <code>woche-05-dungeon</code>. <code>node spiel.js</code> muss ohne
          Fehler einen vollständigen Spieldurchgang inklusive Schlussbericht
          ausgeben.
        </p>
        <p>
          Mindestanforderung für eine vollständige Lösung: die Teile 1 bis 7 mit
          mindestens <strong>sieben Klassen</strong>, davon mindestens{" "}
          <strong>zwei Vererbungsbeziehungen</strong>, ein{" "}
          <strong>privates Feld</strong> mit Getter/Setter und mindestens{" "}
          <strong>drei Stellen</strong>, an denen Sie <code>map</code>,{" "}
          <code>filter</code> oder <code>reduce</code> einsetzen.
        </p>
        <p>
          Wer nicht fertig wird: Halten Sie im Kommentar fest, bis zu welchem
          Teil Sie gekommen sind und woran es gehakt hat.
        </p>
      </Section>
    </>
  );
}
