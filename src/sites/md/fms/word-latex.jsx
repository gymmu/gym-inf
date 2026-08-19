import Video from "@components/Video.jsx";
import { Link } from "react-router-dom";

export default function FmsWordLatex() {
  return (
    <>
      <h2>LaTeX mit Overleaf</h2>
      <p>
        LaTeX wird über <strong>Overleaf</strong> im Browser verwendet – ähnlich
        wie Word über office.com. Overleaf ist ein kostenloser Online-Editor für
        LaTeX-Dokumente, der keine lokale Installation erfordert und auf allen
        Geräten gleich funktioniert.
      </p>
      <p>
        Das Video zeigt den Einstieg in LaTeX mit Overleaf: wie ein Dokument
        angelegt wird, wie Überschriften, Formatierungen und Formeln
        funktionieren, und wie Quellen automatisch verwaltet und im Text
        verlinkt werden.
      </p>
      <Video url="Xw7GqruFFWI" />
      <p>
        Overleaf direkt öffnen:{" "}
        <a href="https://www.overleaf.com" target="_blank" rel="noreferrer">
          www.overleaf.com
        </a>
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
          <Link to="/fms/word-probleme">Das Problem mit Word</Link>
        </li>
      </ul>
    </>
  );
}
