import React from "react";
import { Answer, Answers, Question, Quiz } from "./Quiz";

const QuizFromJson = ({ quizData }) => {
  if (!quizData || !quizData.questions) {
    return (
      <div style={{ padding: "1rem", color: "red" }}>
        Fehler: Keine Quiz-Daten vorhanden.
      </div>
    );
  }

  const questions = quizData.questions;

  return (
    <div>
      {questions.map((q, index) => (
        <Quiz key={q.id || index}>
          <Question>{q.question}</Question>
          <Answers>
            {q.answers.map((answer, aIndex) => (
              <Answer key={aIndex} correct={answer.correct ? "yes" : "no"}>
                {answer.text}
              </Answer>
            ))}
          </Answers>
        </Quiz>
      ))}
    </div>
  );
};

export default QuizFromJson;
