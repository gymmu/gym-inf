import { Link } from "react-router-dom";
import ByteQuiz from "@/components/gym/ByteQuiz/ByteQuiz";
import {
  BYTE_QUIZ_CHAPTERS,
  getQuestionsByChapters,
} from "@/components/gym/ByteQuiz/questions";

const CHAPTER_ID = "biit-story";

const questions = getQuestionsByChapters([CHAPTER_ID]);
const chapters = BYTE_QUIZ_CHAPTERS.filter(
  (chapter) => chapter.id === CHAPTER_ID,
);

export default function ByteQuizBitsPage() {
  return (
    <>
      <div className="page-header">
        <h1>Zwischenboss: Bau dein Byte (Bits und Bytes)</h1>
      </div>

      <p>
        Der erste Zwischenboss von Byteburg! Hier kommen die Fragen{" "}
        <strong>nur</strong> aus dem Kapitel{" "}
        <Link to="/fms/biit-story">Willkommen in der Welt der Bits</Link>.
        Beantworte acht Fragen und baue damit Bit für Bit ein Byte für Biit.
      </p>

      <ByteQuiz questions={questions} chapters={chapters} />

      <p>
        <Link to="/fms/binaria/byteburg">← Zurück nach Byteburg</Link>
      </p>
    </>
  );
}
