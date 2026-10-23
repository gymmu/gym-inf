import DataTable from "@components/DataTable/DataTable";
import Section from "@components/Section";

export default function KIHausaufgabenPaper() {
  return (
    <>
      <Section>
        <h2>Hausaufgaben: Paper vorbereiten</h2>
        <p>
          Nächste Woche lesen wir ein <strong>wissenschaftliches Paper</strong>{" "}
          — gemeinsam, in der Unterrichtszeit. Damit das funktioniert, müssen
          Sie es vorher einmal <strong>überflogen</strong> haben.
        </p>
        <p>
          <strong>
            Hannah Bast, Daniel Delling, Andrew Goldberg, Matthias
            Müller-Hannemann, Thomas Pajor, Peter Sanders, Dorothea Wagner,
            Renato Werneck: «Route Planning in Transportation Networks» (2015).
          </strong>
        </p>
        <ul>
          <li>
            <a
              href="https://arxiv.org/abs/1504.05140"
              target="_blank"
              rel="noopener noreferrer"
            >
              arxiv.org/abs/1504.05140
            </a>{" "}
            (Übersicht)
          </li>
          <li>
            <a
              href="https://arxiv.org/pdf/1504.05140"
              target="_blank"
              rel="noopener noreferrer"
            >
              Direkt zum PDF
            </a>
          </li>
        </ul>
        <p>
          <strong>Auftrag:</strong> das Paper überfliegen und sich Notizen
          machen — Gliederung, fünf Fachbegriffe, drei Fragen. Rechnen Sie mit{" "}
          <strong>mindestens 30 und höchstens 60 Minuten</strong>. Fällig ist
          das <strong>auf die erste Lektion</strong> nächste Woche, nicht
          später: Wir haben alle drei Lektionen am Stück.
        </p>
      </Section>

      {/* ══════════════════════════════════════════════════════
          DIE HAUSAUFGABE
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Die Hausaufgabe</h2>
        <p>
          Das Paper ist 60 Seiten lang — das lesen Sie <strong>nicht</strong> zu
          Hause. <strong>Überfliegen</strong> heisst: durchblättern,
          Überschriften lesen, Abbildungen und Tabellen anschauen, Abstract
          lesen, hängenbleiben wo es interessant aussieht. Sie müssen nichts
          verstanden haben — Sie sollen nur wissen, was auf Sie zukommt.
        </p>
        <p>
          Nach spätestens <strong>60 Minuten</strong> hören Sie auf, auch wenn
          Sie noch nicht durch sind. Notieren Sie dann, wie weit Sie gekommen
          sind.
        </p>

        <div className="aufgabe">
          <h4>Aufgabe: Das Paper überfliegen (30–60 Minuten)</h4>
          <ol>
            <li>
              <strong>(ca. 10 Min.)</strong> Lesen Sie den{" "}
              <strong>Abstract</strong> und die{" "}
              <strong>Einleitung (Abschnitt 1)</strong> ganz.
            </li>
            <li>
              <strong>(ca. 10 Min.)</strong> Blättern Sie durch das ganze Paper
              und notieren Sie die <strong>Gliederung</strong>: Welche
              Hauptabschnitte gibt es, und worum geht es dort grob? Ein
              Stichwort pro Abschnitt genügt.
            </li>
            <li>
              <strong>(ca. 5 Min.)</strong> Suchen Sie die{" "}
              <strong>Laufzeittabelle</strong> am Ende von Abschnitt 2. Notieren
              Sie, was dort überhaupt verglichen wird.
            </li>
            <li>
              <strong>(ca. 5 Min.)</strong> Notieren Sie{" "}
              <strong>fünf englische Fachbegriffe</strong>, die Ihnen beim
              Durchblättern immer wieder begegnen (z.&nbsp;B. <em>query</em>,{" "}
              <em>preprocessing</em>, <em>shortcut</em>, …).
            </li>
            <li>
              <strong>(ca. 5 Min.)</strong> Notieren Sie{" "}
              <strong>drei Fragen</strong> oder drei Stellen, die Sie nicht
              verstanden haben. Genau diese Fragen nehmen wir in der dritten
              Lektion wieder auf.
            </li>
          </ol>
          <p>
            Bleibt Zeit übrig: Blättern Sie weiter und notieren Sie, welche
            Abbildung Sie am meisten interessiert.
          </p>
        </div>

        <div className="aufgabe">
          <h4>Was nicht Hausaufgabe ist</h4>
          <ul>
            <li>Das Paper gründlich oder vollständig lesen.</li>
            <li>Alle unbekannten Begriffe nachschlagen.</li>
            <li>Die Verfahren verstehen.</li>
            <li>
              Sich das Paper von einem LLM zusammenfassen lassen — damit
              arbeiten wir in der dritten Lektion, und zwar bewusst und
              kontrolliert.
            </li>
          </ul>
          <p>Das alles machen wir gemeinsam im Unterricht.</p>
        </div>

        <div className="aufgabe">
          <h4>Format der Notizen</h4>
          <p>
            Papier oder eine Datei <code>paper-notizen.md</code> in Ihrem Repo —
            Sie entscheiden. Hauptsache, Sie haben sie nächste Woche dabei und
            können damit arbeiten. Stichworte genügen, ganze Sätze sind nicht
            nötig.
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          LEKTIONSSKIZZE
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>So läuft nächste Woche ab</h2>
        <p>
          Wir haben die <strong>drei Lektionen am Stück</strong>. Dazwischen
          gibt es also keine Hausaufgaben mehr — alles, was Sie vorbereiten
          müssen, steht oben und muss vorher erledigt sein.
        </p>
        <DataTable
          headers={["Lektion", "Was wir tun", "Ziel"]}
          rows={[
            [
              "1",
              "Grundkonzepte aus dem Paper kurz und oberflächlich in der Theorie anschauen: Dijkstra im Strassennetz, bidirektionale Suche, Hierarchie und Shortcuts",
              "Sie kennen die Ideen, bevor Sie sie auf Englisch lesen",
            ],
            [
              "2",
              "Das Paper im Detail lesen — in Ruhe, mit Zeit, Abschnitt für Abschnitt",
              "Sie können einen Fachtext lesen, ohne jedes Wort zu verstehen",
            ],
            [
              "3",
              "Fragen an das Paper stellen und es in Gruppen diskutieren, mit NotebookLM oder einem ähnlichen Werkzeug",
              "Sie nutzen ein LLM als Lesehilfe — und prüfen, was es behauptet",
            ],
          ]}
          caption="Lektionsskizze: drei Lektionen am Stück"
        />

        <h3>Lektion 1 — Grundkonzepte vorbereiten</h3>
        <p>
          Ein Fachtext ist viel einfacher zu lesen, wenn man die Ideen schon
          kennt und nur noch die englischen Namen dafür lernen muss. Wir schauen
          uns deshalb zuerst <strong>oberflächlich</strong> an, was im Paper
          vorkommt: Dijkstra als unser UCS, bidirektionale Suche, und die Idee
          der Hierarchie mit Shortcuts. Nicht in der Tiefe — nur so weit, dass
          Ihnen die Begriffe beim Lesen nicht fremd sind. Dazu legen wir eine
          Begriffsliste Englisch ↔ Deutsch an.
        </p>

        <h3>Lektion 2 — Das Paper im Detail lesen</h3>
        <p>
          Jetzt haben Sie Zeit zum Lesen. Ein Paper liest man nicht wie einen
          Roman: Sie werden nicht jeden Satz verstehen, und das ist normal.
          Pflicht sind nicht alle 60 Seiten, sondern Abschnitt 1, Abschnitt 2.1,
          Abschnitt 2.3 und die Laufzeittabelle am Ende von Abschnitt 2. Dazu
          bekommen Sie ein Leseprotokoll mit gezielten Fragen.
        </p>

        <h3>Lektion 3 — Fragen stellen und diskutieren</h3>
        <p>
          Sie stellen Ihre Fragen an das Paper — zuerst an{" "}
          <strong>NotebookLM</strong> oder ein ähnliches Werkzeug, dann in der
          Gruppe. Es gilt die bekannte Rollenverteilung:{" "}
          <strong>Sie sind der Senior, das LLM ist Ihr Junior.</strong> Der
          Junior darf zusammenfassen und erklären — aber was er sagt, ist eine
          Behauptung. Verifiziert wird im Paper selbst, Stelle für Stelle. Zum
          Schluss diskutieren wir in Gruppen und tragen die Ergebnisse zusammen.
        </p>
      </Section>
    </>
  );
}
