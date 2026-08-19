import Video from "@components/Video.jsx";
import { Link } from "react-router-dom";

export default function FmsWordInhaltsverzeichnis() {
  return (
    <>
      <h2>Automatisches Inhaltsverzeichnis</h2>
      <p>
        Ein Inhaltsverzeichnis von Hand zu erstellen und bei jeder Änderung neu
        anzupassen ist mühsam und fehleranfällig. Word kann das automatisch
        erledigen – vorausgesetzt, im Dokument wurden konsequent{" "}
        <strong>Formatvorlagen</strong> (Überschrift 1, Überschrift 2, usw.)
        verwendet.
      </p>
      <p>
        Word liest dann alle so markierten Überschriften aus, listet sie mit der
        entsprechenden Seitenzahl auf und aktualisiert das Verzeichnis auf
        Knopfdruck, sobald sich etwas im Dokument ändert.
      </p>
      <p>
        Das Video zeigt, wie ein automatisches Inhaltsverzeichnis eingefügt und
        aktualisiert wird.
      </p>
      <Video url="5yCwZlf-8aw" />
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
