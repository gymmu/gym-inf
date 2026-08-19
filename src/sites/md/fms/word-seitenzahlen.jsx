import Video from "@components/Video.jsx";
import { Link } from "react-router-dom";

export default function FmsWordSeitenzahlen() {
  return (
    <>
      <h2>Seitenzahlen, Kopf- und Fusszeilen</h2>
      <p>
        Kopf- und Fusszeilen sind Bereiche am oberen und unteren Rand jeder
        Seite, die unabhängig vom eigentlichen Text bearbeitet werden. Typische
        Inhalte sind:
      </p>
      <ul>
        <li>
          <strong>Seitenzahlen</strong> – damit Leser sich im Dokument
          orientieren können
        </li>
        <li>
          <strong>Dokumenttitel oder Kapitelname</strong> in der Kopfzeile
        </li>
        <li>
          <strong>Datum oder Autorenname</strong> in der Fusszeile
        </li>
      </ul>
      <p>
        Seitenzahlen lassen sich in Word automatisch einfügen und werden beim
        Hinzufügen oder Entfernen von Seiten selbständig angepasst. Kombiniert
        mit einem automatischen Inhaltsverzeichnis erhält man so ein
        professionell strukturiertes Dokument.
      </p>
      <p>
        Das Video zeigt, wie Kopf- und Fusszeilen eingerichtet und Seitenzahlen
        eingefügt werden.
      </p>
      <Video url="IdaPlKuehlw" />
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
          <Link to="/fms/word-probleme">Das Problem mit Word</Link>
        </li>
        <li>
          <Link to="/fms/word-latex">LaTeX mit Overleaf</Link>
        </li>
      </ul>
    </>
  );
}
