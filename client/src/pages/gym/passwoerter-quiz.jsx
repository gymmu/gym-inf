import QuizFromJson from "@components/QuizFromJson.jsx"
import { Link } from "react-router-dom"
import quizData from "@quizzes/gym-passwoerter-quiz.json"

export default function GymPasswoerterQuiz() {
  return (
    <>
      <h1>Quiz: Passwörter und Authentifizierung</h1>
      <p>
        Testen Sie Ihr Wissen über Hashing, Salting, Angriffsmethoden,
        Zwei-Faktor-Authentifizierung und FIDO2/Passkeys!
      </p>
      <p>
        Dieses Quiz basiert auf den Inhalten des{" "}
        <Link to="/gym/passwoerter">Passwörter-Kapitels</Link>. Falls Sie
        Schwierigkeiten mit den Fragen haben, schauen Sie sich das Kapitel noch
        einmal an.
      </p>

      <QuizFromJson quizData={quizData} />

      <section>
        <h2>Zusammenfassung der Lernziele</h2>
        <ul>
          <li>Hashing und Salting als sichere Passwort-Speicherung erklären</li>
          <li>
            Die wichtigsten Angriffsmethoden und ihre Gegenmassnahmen kennen
          </li>
          <li>TOTP und SMS-2FA unterscheiden und einschätzen können</li>
          <li>Die Funktionsweise von FIDO2/Passkeys verstehen</li>
          <li>Die technische Grundlage von Passwortmanagern kennen</li>
        </ul>
        <p>
          Haben Sie Fragen? Schauen Sie sich das{" "}
          <Link to="/gym/passwoerter">Passwörter-Kapitel</Link> nochmals an!
        </p>
      </section>
    </>
  )
}
