import { Link } from "react-router-dom";
import ByteQuiz from "@/components/gym/ByteQuiz/ByteQuiz";

export default function ByteQuizPage() {
  return (
    <>
      <div className="page-header">
        <h1>Quiz: Finde Biits Gruppe</h1>
      </div>

      <p>
        Hilf Biit, seine Gruppe zu finden. 
      </p>

      <ByteQuiz />
    </>
  );
}
