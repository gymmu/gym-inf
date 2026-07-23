import QuizFromJson from "@components/QuizFromJson.jsx";
import quizData from "@quizzes/gym-schluesselaustausch-quiz.json";
import { Link } from "react-router-dom";

export default function GymSchluesselaustauschQuiz() {
  return (
    <>
      <h1>Quiz: Diffie-Hellman-Schlüsselaustausch</h1>
      <p>
        Testen Sie Ihr Wissen über das Diffie-Hellman-Protokoll, modulare
        Arithmetik, diskreten Logarithmus, Man-in-the-Middle und ECDH!
      </p>
      <p>
        Dieses Quiz basiert auf den Inhalten des{" "}
        <Link to="/gym/schluesselaustausch">Schlüsselaustausch-Kapitels</Link>.
        Falls Sie Schwierigkeiten mit den Fragen haben, schauen Sie sich das
        Kapitel noch einmal an.
      </p>

      <QuizFromJson quizData={quizData} />

      <section>
        <h2>Zusammenfassung der Lernziele</h2>
        <ul>
          <li>
            Das Schlüsselaustausch-Problem und warum es nicht trivial lösbar ist
          </li>
          <li>
            Den Diffie-Hellman-Schlüsselaustausch Schritt für Schritt erklären
          </li>
          <li>
            Das Konzept des diskreten Logarithmus als Sicherheitsgrundlage
          </li>
          <li>
            Die Schwäche von DH und wie Man-in-the-Middle-Angriffe funktionieren
          </li>
          <li>Ephemeral DH und Perfect Forward Secrecy verstehen</li>
        </ul>
        <p>
          Haben Sie Fragen? Schauen Sie sich das{" "}
          <Link to="/gym/schluesselaustausch">Schlüsselaustausch-Kapitel</Link>{" "}
          nochmals an!
        </p>
      </section>
    </>
  );
}
