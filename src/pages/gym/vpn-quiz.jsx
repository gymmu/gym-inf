import QuizFromJson from "@components/QuizFromJson.jsx";
import quizData from "@quizzes/gym-vpn-quiz.json";
import { Link } from "react-router-dom";

export default function GymVPNQuiz() {
  return (
    <>
      <h1>Quiz: VPN und Anonymität</h1>
      <p>
        Testen Sie Ihr Wissen über VPN-Protokolle, Split Tunneling, das
        Tor-Netzwerk und die Grenzen von Anonymität im Internet!
      </p>
      <p>
        Dieses Quiz basiert auf den Inhalten des{" "}
        <Link to="/gym/vpn">VPN-Kapitels</Link>. Falls Sie Schwierigkeiten mit
        den Fragen haben, schauen Sie sich das Kapitel noch einmal an.
      </p>

      <QuizFromJson quizData={quizData} />

      <section>
        <h2>Zusammenfassung der Lernziele</h2>
        <ul>
          <li>
            Die technische Funktionsweise eines VPN-Tunnels erklären können
          </li>
          <li>Den Unterschied zwischen WireGuard und OpenVPN kennen</li>
          <li>Split Tunneling und seine Sicherheitsimplikationen verstehen</li>
          <li>Die Grenzen von VPN bezüglich Anonymität kennen</li>
          <li>
            Das Tor-Netzwerk und seinen Unterschied zu VPN beschreiben können
          </li>
        </ul>
        <p>
          Haben Sie Fragen? Schauen Sie sich das{" "}
          <Link to="/gym/vpn">VPN-Kapitel</Link> nochmals an!
        </p>
      </section>
    </>
  );
}
