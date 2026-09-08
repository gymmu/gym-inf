import { Link } from "react-router-dom";
import ByteQuiz from "@/components/gym/ByteQuiz/ByteQuiz";

export default function ByteQuizPage() {
  return (
    <>
      <div className="page-header">
        <h1>Quiz: Finde Biits Gruppe</h1>
      </div>

      <p>
        Hilf Biit, seine Gruppe zu finden. Wähle zuerst aus, aus welchen
        Kapiteln die Fragen kommen sollen – aus{" "}
        <Link to="/fms/biit-story">Bits und Bytes</Link>, aus der{" "}
        <Link to="/fms/von-neumann-story">Von-Neumann-Architektur</Link> oder
        aus beiden. Danach startest du das Quiz.
      </p>

      <ByteQuiz />
    </>
  );
}
