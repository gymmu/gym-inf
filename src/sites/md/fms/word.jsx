import Video from "@components/Video.jsx";

export default function FmsWord() {
  return (
    <>
      <details>
        <summary>📚 Alte Word-Kapitel anzeigen</summary>
        <p>
          Die Word-Einführung wurde neu organisiert. Die folgenden Kapitel sind
          weiterhin verfügbar:
        </p>
        <ul>
          <li>
            <a href="/gym-inf/fms/word-archive">
              Einstieg in Word (archiviert)
            </a>
          </li>
          <li>
            <a href="/gym-inf/fms/word-formatvorlagen">Formatvorlagen</a>
          </li>
          <li>
            <a href="/gym-inf/fms/word-inhaltsverzeichnis">
              Inhaltsverzeichnis
            </a>
          </li>
          <li>
            <a href="/gym-inf/fms/word-seitenzahlen">Kopf- und Fusszeilen</a>
          </li>
          <li>
            <a href="/gym-inf/fms/word-probleme">Das Problem mit Word</a>
          </li>
          <li>
            <a href="/gym-inf/fms/word-latex">LaTeX mit Overleaf</a>
          </li>
        </ul>
      </details>
      <hr />
      <h2>Was ist Microsoft Word?</h2>
      <p>
        Microsoft Word ist ein weit verbreitetes Textverarbeitungsprogramm, das
        zur Erstellung, Bearbeitung und Formatierung von Dokumenten dient. Es
        ist Teil der Microsoft Office-Suite (bzw. Microsoft 365) und wird von
        Millionen von Nutzern in Unternehmen, Bildungseinrichtungen und im
        privaten Bereich eingesetzt.
      </p>
      <h2>Wofür ist Word gut?</h2>
      <p>
        Word eignet sich hervorragend für die Erstellung von Briefen, Berichten,
        Zusammenfassungen, Lebensläufen, Flyern und vielen anderen Dokumenten.
        Besonders stark ist Word bei der Kombination von Text mit Bildern,
        Tabellen und anderen Elementen. Es bietet umfangreiche Funktionen zur
        Textformatierung, Rechtschreibprüfung, Vorlagenverwaltung und
        Zusammenarbeit in Echtzeit.
      </p>
      <Video url="ATi6mh2761U" />
      <h2>Formatvorlagen</h2>
      <p>
        Formatvorlagen (auch &quot;Styles&quot; genannt) sind eine der
        wichtigsten Funktionen in Word. Sie ermöglichen es, Textelemente wie
        Überschriften, Zwischenüberschriften und Fließtext einheitlich zu
        formatieren. Mit Formatvorlagen können Sie die Schriftart, -größe,
        -farbe und den Zeilenabstand für ganze Dokumentabschnitte auf einmal
        ändern. Dies spart nicht nur Zeit, sondern stellt auch eine konsistente
        Optik über das gesamte Dokument sicher. Formatvorlagen bilden zudem die
        Grundlage für automatische Funktionen wie das Inhaltsverzeichnis.
      </p>
      <h2>Inhaltsverzeichnis</h2>
      <p>
        Ein Inhaltsverzeichnis in Word wird automatisch aus den mit
        Formatvorlagen (insbesondere Überschriften) versehenen Textabschnitten
        erstellt. Word erkennt die Überschriftenstruktur und generiert daraus
        eine nummerierte Liste mit Titel und Seitenzahl. Bei Änderungen im
        Dokument kann das Inhaltsverzeichnis mit einem Klick aktualisiert
        werden. Dies macht die Pflege langer Dokumente wie Abschlussarbeiten,
        Berichte oder Handbücher erheblich einfacher.
      </p>
      <h2>Kopf- und Fusszeilen</h2>
      <p>
        Kopf- und Fusszeilen sind Bereiche am oberen bzw. unteren Rand jeder
        Seite eines Dokuments. Sie werden häufig für Seitenzahlen,
        Dokumenttitel, Autorennamen, Datumsangaben oder Logos verwendet. In Word
        können Kopf- und Fusszeilen unabhängig vom Haupttext formatiert werden.
        Sie erscheinen automatisch auf jeder Seite und müssen nicht manuell
        wiederholt werden. Für besondere Dokumente lassen sich Kopf- und
        Fusszeilen auch für die erste Seite oder unterschiedliche Abschnitte
        deaktivieren.
      </p>
    </>
  );
}
