import QuizFromJson from "@components/QuizFromJson.jsx"
import { Link } from "react-router-dom"
import quizData from "@quizzes/gym-verschluesselung-quiz.json"

export default function GymVerschluesselungQuiz() {
  return (
    <>
      <h1>Quiz: Verschlüsselung und digitale Signaturen</h1>
      <p>
        Testen Sie Ihr Wissen über symmetrische und asymmetrische
        Verschlüsselung, digitale Signaturen, TLS-Handshake und Perfect Forward
        Secrecy!
      </p>
      <p>
        Dieses Quiz basiert auf den Inhalten des{" "}
        <Link to="/gym/verschluesselung">Verschlüsselung-Kapitels</Link>. Falls
        Sie Schwierigkeiten mit den Fragen haben, schauen Sie sich das Kapitel
        noch einmal an.
      </p>

      <QuizFromJson quizData={quizData} />

      <section>
        <h2>Zusammenfassung der Lernziele</h2>
        <ul>
          <li>
            Das Schlüsselaustausch-Problem und den Unterschied
            symmetrisch/asymmetrisch erklären
          </li>
          <li>Den vollständigen TLS-Handshake beschreiben können</li>
          <li>Digitale Signaturen und ihre Sicherheitsziele verstehen</li>
          <li>Die Zertifikatskette und das Vertrauensmodell kennen</li>
          <li>
            Perfect Forward Secrecy und ephemere Schlüssel erklären können
          </li>
        </ul>
        <p>
          Haben Sie Fragen? Schauen Sie sich das{" "}
          <Link to="/gym/verschluesselung">Verschlüsselung-Kapitel</Link>{" "}
          nochmals an!
        </p>
      </section>
    </>
  )
}
