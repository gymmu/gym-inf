import QuizFromJson from "@components/QuizFromJson.jsx";
import quizData from "@quizzes/gym-internet-quiz.json";
import { Link } from "react-router-dom";

export default function GymInternetQuiz() {
  return (
    <>
      <h1>Quiz: Internet und Netzwerke</h1>
      <p>
        Testen Sie Ihr Wissen über das Internet, das TCP/IP-Modell,
        DNS-Auflösung, TCP vs. UDP und mehr!
      </p>
      <p>
        Dieses Quiz basiert auf den Inhalten des{" "}
        <Link to="/gym/internet">Internet-Kapitels</Link>. Falls Sie
        Schwierigkeiten mit den Fragen haben, schauen Sie sich das Kapitel noch
        einmal an.
      </p>

      <QuizFromJson quizData={quizData} />

      <section>
        <h2>Zusammenfassung der Lernziele</h2>
        <ul>
          <li>
            Das TCP/IP-Schichtenmodell und die Aufgaben der vier Schichten
            kennen
          </li>
          <li>
            Den Unterschied zwischen TCP (zuverlässig) und UDP (schnell)
            erklären können
          </li>
          <li>
            Den vollständigen Ablauf einer DNS-Auflösung beschreiben können
          </li>
          <li>Verstehen, was HTTPS schützt und was nicht</li>
          <li>Die Bedeutung von NAT und IPv6-Adressierung kennen</li>
        </ul>
        <p>
          Haben Sie Fragen? Schauen Sie sich das{" "}
          <Link to="/gym/internet">Internet-Kapitel</Link> nochmals an!
        </p>
      </section>
    </>
  );
}
