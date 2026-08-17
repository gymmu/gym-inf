import { Link } from "react-router-dom";

export default function FmsWordProbleme() {
  return (
    <>
      <h2>Das Problem mit Word</h2>
      <p>
        Word folgt dem Prinzip <strong>WYSIWYG</strong> – &quot;What You See Is
        What You Get&quot;. Was auf dem Bildschirm zu sehen ist, entspricht
        direkt dem gedruckten Ergebnis. Das klingt intuitiv und ist es für
        einfache Dokumente auch. Doch bei längeren oder komplexeren Arbeiten
        zeigen sich die Grenzen dieses Ansatzes schnell.
      </p>
      <h2>Was ist das Problem mit WYSIWYG?</h2>
      <p>
        Bei WYSIWYG-Programmen wie Word vermischen sich <strong>Inhalt</strong>{" "}
        und <strong>Darstellung</strong> ständig. Wer schreibt, denkt
        gleichzeitig über Schriftgrösse, Abstände und Einrückungen nach – statt
        über den Text selbst. Das führt zu typischen Problemen:
      </p>
      <ul>
        <li>
          Eine Formatierung lässt sich nicht mehr rückgängig machen, ohne andere
          Teile des Dokuments zu zerstören.
        </li>
        <li>
          Bilder &quot;springen&quot; beim Einfügen neuen Textes an ungewollte
          Stellen.
        </li>
        <li>
          Zwei Absätze sehen gleich aus, haben aber unterschiedliche
          Formatierungen – und man sieht es erst, wenn das Dokument auf einem
          anderen Gerät geöffnet wird.
        </li>
        <li>
          Querverweise und Fussnoten müssen manuell gepflegt werden und stimmen
          schnell nicht mehr.
        </li>
      </ul>
      <p>
        Das grundlegende Problem: Word speichert nicht nur was geschrieben
        steht, sondern auch wie jeder einzelne Absatz, jedes Zeichen und jeder
        Abstand aussehen soll. Dieses Durcheinander von Inhalt und Form wächst
        mit jedem Edit und wird mit der Zeit immer schwieriger zu beherrschen.
      </p>
      <h2>Der andere Ansatz: Inhalt und Form trennen</h2>
      <p>
        Eine saubere Alternative ist das Prinzip <strong>WYSIWYM</strong> –
        &quot;What You See Is What You <strong>Mean</strong>&quot;. Hier
        schreibt man reinen Text und beschreibt die Struktur mit einfachen
        Befehlen oder Zeichen. Das Programm übernimmt die Formatierung
        automatisch und konsequent.
      </p>
      <h3>Markdown</h3>
      <p>
        Markdown ist das einfachste Beispiel dieses Prinzips und wird auch in
        diesem Kurs bei Obsidian verwendet. Ein <code>#</code> vor einer Zeile
        macht sie zur Überschrift, <code>**fett**</code> macht Text fett. Das
        Ergebnis ist immer konsistent – ohne dass man manuell formatiert.
      </p>
      <p>
        Markdown ist ideal für kurze bis mittellange Texte, Notizen und
        Webinhalte. Für wissenschaftliche Arbeiten mit Literaturverzeichnis,
        Formeln und präzisem Layout stösst es jedoch an Grenzen.
      </p>
      <p>
        Markdown kann in vielen verschiedenen Programmen geschrieben werden:
      </p>
      <p>
        <strong>Im Browser:</strong>
      </p>
      <ul>
        <li>
          <a href="https://obsidian.md" target="_blank" rel="noreferrer">
            Obsidian
          </a>{" "}
          – kennen Sie bereits aus dem Kurs (Desktop-App mit Browser-ähnlichem
          Erlebnis)
        </li>
        <li>
          <a href="https://dillinger.io" target="_blank" rel="noreferrer">
            Dillinger
          </a>{" "}
          – einfacher Online-Editor mit Live-Vorschau
        </li>
        <li>
          <a href="https://stackedit.io" target="_blank" rel="noreferrer">
            StackEdit
          </a>{" "}
          – umfangreicherer Online-Editor mit Synchronisation zu Google Drive
          und Dropbox
        </li>
      </ul>
      <p>
        <strong>Lokale Apps:</strong>
      </p>
      <ul>
        <li>
          <a href="https://www.zettlr.com" target="_blank" rel="noreferrer">
            Zettlr
          </a>{" "}
          – leistungsstarker Editor für längere Texte und wissenschaftliches
          Schreiben, mit Literaturverwaltung
        </li>
        <li>
          <a href="https://panwriter.com" target="_blank" rel="noreferrer">
            Panwriter
          </a>{" "}
          – minimalistischer Editor mit direktem Export in viele Formate (PDF,
          Word, EPUB)
        </li>
      </ul>
      <h3>LaTeX</h3>
      <p>
        LaTeX ist das Standardformat für wissenschaftliche Publikationen in
        Mathematik, Physik und vielen anderen Fachbereichen. Man schreibt reinen
        Text mit Befehlen, zum Beispiel:
      </p>
      <pre>
        <code>
          {`\\section{Einleitung}
Dies ist ein \\textbf{wichtiger} Satz mit einer Formel: $E = mc^2$.`}
        </code>
      </pre>
      <p>
        LaTeX übernimmt dann das gesamte Layout automatisch – Abstände,
        Seitenumbrüche, Nummerierungen, Inhaltsverzeichnis und
        Literaturverzeichnis. Das Ergebnis ist typografisch hochwertig und auf
        allen Geräten identisch.
      </p>
      <p>
        Der Nachteil: LaTeX hat eine steile Lernkurve. Der Einstieg ist
        aufwändiger als bei Word. Als Editor verwenden wir{" "}
        <a href="https://www.overleaf.com" target="_blank" rel="noreferrer">
          Overleaf
        </a>{" "}
        – einen kostenlosen Online-Editor, der keine Installation erfordert.
      </p>
      <h3>Typst</h3>
      <p>
        Typst ist eine moderne Alternative zu LaTeX, die viele der Stärken
        übernimmt – automatisches Layout, Formeln, Literaturverweise – aber mit
        einer deutlich einfacheren Syntax. Ein Beispiel:
      </p>
      <pre>
        <code>
          {`= Einleitung
Dies ist ein *wichtiger* Satz mit einer Formel: $E = m c^2$.`}
        </code>
      </pre>
      <p>
        Typst ist direkt im Browser unter{" "}
        <a href="https://typst.app" target="_blank" rel="noreferrer">
          typst.app
        </a>{" "}
        nutzbar, kompiliert blitzschnell und eignet sich sehr gut für Berichte
        und Abschlussarbeiten. Das automatische Verlinken und Verwalten von
        Quellen funktioniert dabei zuverlässig und ohne manuellen Aufwand.
      </p>
      <h2>Warum das trotzdem relevant ist</h2>
      <p>
        Word bleibt im Alltag weit verbreitet und ist für viele Aufgaben
        ausreichend. Aber wer längere Texte schreibt oder präzises,
        reproduzierbares Layout braucht, ist mit einem WYSIWYM-Ansatz deutlich
        besser bedient. Das nächste Kapitel zeigt, wie LaTeX mit Overleaf
        konkret eingesetzt wird – inklusive automatischer Quellenverwaltung.
      </p>
      <hr />
      <h3>Weitere Word-Kapitel</h3>
      <ul>
        <li>
          <Link to="/fms/word-archive">Einstieg in Word</Link>
        </li>
        <li>
          <Link to="/fms/word-formatvorlagen">Formatvorlagen</Link>
        </li>
        <li>
          <Link to="/fms/word-inhaltsverzeichnis">Inhaltsverzeichnis</Link>
        </li>
        <li>
          <Link to="/fms/word-seitenzahlen">Kopf- und Fusszeilen</Link>
        </li>
        <li>
          <Link to="/fms/word-latex">LaTeX mit Overleaf</Link>
        </li>
      </ul>
    </>
  );
}
