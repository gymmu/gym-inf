import QuizFromJson from "@components/QuizFromJson.jsx"
import { Link } from "react-router-dom"
import quizData from "@quizzes/gym-netzwerke-quiz.json"

export default function GymNetzwerkeQuiz() {
  return (
    <>
      <h1>Quiz: Netzwerkkomponenten und -sicherheit</h1>
      <p>
        Testen Sie Ihr Wissen über Netzwerkgeräte, Subnetting, NAT, Firewalls
        und Port-Forwarding!
      </p>
      <p>
        Dieses Quiz basiert auf den Inhalten des{" "}
        <Link to="/gym/netzwerke">Netzwerke-Kapitels</Link>. Falls Sie
        Schwierigkeiten mit den Fragen haben, schauen Sie sich das Kapitel noch
        einmal an.
      </p>

      <QuizFromJson quizData={quizData} />

      <section>
        <h2>Zusammenfassung der Lernziele</h2>
        <ul>
          <li>
            Den Unterschied zwischen Hub, Switch und Router erklären können
          </li>
          <li>Einfache Subnetting-Berechnungen durchführen können</li>
          <li>Die NAT-Tabelle und ihre Funktion beschreiben können</li>
          <li>Stateless vs. stateful Firewalls unterscheiden können</li>
          <li>
            Port-Forwarding konfigurieren und seine Sicherheitsimplikationen
            kennen
          </li>
        </ul>
        <p>
          Haben Sie Fragen? Schauen Sie sich das{" "}
          <Link to="/gym/netzwerke">Netzwerke-Kapitel</Link> nochmals an!
        </p>
      </section>
    </>
  )
}
