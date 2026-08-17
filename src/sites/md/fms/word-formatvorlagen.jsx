import Video from "@components/Video.jsx";
import { Link } from "react-router-dom";

export default function FmsWordFormatvorlagen() {
  return (
    <>
      <h2>Formatvorlagen</h2>
      <p>
        Formatvorlagen sind eines der mächtigsten Werkzeuge in Word – und
        gleichzeitig das, was die meisten Probleme verhindert. Statt jeden Titel
        manuell fett, gross und blau einzufärben, definiert man einmal eine
        Vorlage (z.B. &quot;Überschrift 1&quot;) und wendet sie überall an.
      </p>
      <p>Das hat mehrere Vorteile:</p>
      <ul>
        <li>
          <strong>Konsistenz</strong>: Alle Überschriften gleicher Ebene sehen
          automatisch gleich aus.
        </li>
        <li>
          <strong>Effizienz</strong>: Eine Änderung an der Vorlage wirkt sich
          sofort auf das gesamte Dokument aus – kein manuelles Suchen und
          Ersetzen.
        </li>
        <li>
          <strong>Automatisierung</strong>: Nur mit korrekt verwendeten
          Formatvorlagen funktionieren automatische Inhaltsverzeichnisse.
        </li>
      </ul>
      <p>
        Das Video zeigt, wie Formatvorlagen in Word im Browser angewendet und
        angepasst werden.
      </p>
      <Video url="VPjJYkeCEy8" />
      <hr />
      <h3>Weitere Word-Kapitel</h3>
      <ul>
        <li>
          <Link to="/fms/word-archive">Einstieg in Word</Link>
        </li>
        <li>
          <Link to="/fms/word-inhaltsverzeichnis">Inhaltsverzeichnis</Link>
        </li>
        <li>
          <Link to="/fms/word-seitenzahlen">Kopf- und Fusszeilen</Link>
        </li>
        <li>
          <Link to="/fms/word-probleme">Das Problem mit Word</Link>
        </li>
        <li>
          <Link to="/fms/word-latex">LaTeX mit Overleaf</Link>
        </li>
      </ul>
    </>
  );
}
