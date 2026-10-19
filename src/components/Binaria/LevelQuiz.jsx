import Biit from "@components/gym/Biit/Biit";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getLevelQuiz, requiredCorrect } from "@/data/binariaQuizzes";
import style from "./LevelQuiz.module.css";
import { useBinariaUnlock } from "./useBinariaUnlock";

/** Deterministisches Mischen (gleicher Versuch → gleiche Reihenfolge). */
function shuffle(items, seed) {
  const copy = [...items];
  let value = seed * 9301 + 49297;
  for (let i = copy.length - 1; i > 0; i--) {
    value = (value * 9301 + 49297) % 233280;
    const j = Math.floor((value / 233280) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function LevelQuiz({ world, level }) {
  const { markLevelPassed, isLevelPassed, getNextLevel } = useBinariaUnlock();
  const quiz = getLevelQuiz(level.id);

  const [attempt, setAttempt] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = useMemo(() => {
    if (!quiz) return [];
    return quiz.questions.map((question, index) => ({
      ...question,
      key: question.id || `q${index}`,
      shuffled: shuffle(question.answers, index + 1 + attempt * 31),
    }));
  }, [quiz, attempt]);

  const alreadyPassed = isLevelPassed(world.id, level.id);
  const next = getNextLevel(world.id, level.id);
  const total = questions.length;
  const needed = requiredCorrect(total);
  const answeredAll = total > 0 && Object.keys(answers).length === total;

  function handleSelect(questionKey, answerText) {
    if (result) return;
    setAnswers((prev) => ({ ...prev, [questionKey]: answerText }));
  }

  function handleSubmit() {
    const correct = questions.filter((question) => {
      const chosen = answers[question.key];
      return question.answers.some((a) => a.text === chosen && a.correct);
    }).length;
    const passed = correct >= needed;
    setResult({ correct, passed });
    if (passed) markLevelPassed(world.id, level.id);
  }

  function handleRetry() {
    setAnswers({});
    setResult(null);
    setAttempt((a) => a + 1);
  }

  // --- Noch kein Quiz hinterlegt -----------------------------------------
  if (!quiz) {
    return (
      <div className={style.quiz} style={{ "--node-accent": world.accent }}>
        <header className={style.header}>
          <h2 className={style.title}>
            <span aria-hidden="true">{level.icon}</span> Level-Quiz:{" "}
            {level.name}
          </h2>
          <p className={style.subtitle}>{world.name}</p>
        </header>

        <p className={style.placeholder}>
          Für dieses Level sind die Quizfragen noch in Arbeit. Du kannst das
          Level trotzdem abschliessen und weiterziehen.
        </p>

        {alreadyPassed ? (
          <p className={style.passed}>✅ Dieses Level ist abgeschlossen.</p>
        ) : (
          <button
            type="button"
            className={style.primaryButton}
            onClick={() => markLevelPassed(world.id, level.id)}
          >
            Level abschliessen
          </button>
        )}

        <Footer world={world} next={next} unlocked={alreadyPassed} />
      </div>
    );
  }

  // --- Quiz ---------------------------------------------------------------
  return (
    <div className={style.quiz} style={{ "--node-accent": world.accent }}>
      <header className={style.header}>
        <h2 className={style.title}>
          <span aria-hidden="true">{level.icon}</span>{" "}
          {quiz.title || `Level-Quiz: ${level.name}`}
        </h2>
        <p className={style.subtitle}>
          {world.name} · {total} Fragen · {needed} richtige zum Bestehen
        </p>
      </header>

      <ol className={style.questionList}>
        {questions.map((question, index) => {
          const chosen = answers[question.key];
          return (
            <li key={question.key} className={style.question}>
              <p className={style.questionText}>
                <span className={style.questionNumber}>{index + 1}.</span>{" "}
                {question.question}
              </p>
              <ul className={style.answerList}>
                {question.shuffled.map((answer) => {
                  const selected = chosen === answer.text;
                  let state = "";
                  if (result) {
                    if (answer.correct) state = style.right;
                    else if (selected) state = style.wrong;
                  } else if (selected) {
                    state = style.selected;
                  }
                  return (
                    <li key={answer.text}>
                      <button
                        type="button"
                        className={`${style.answer} ${state}`}
                        onClick={() => handleSelect(question.key, answer.text)}
                        disabled={Boolean(result)}
                      >
                        {answer.text}
                      </button>
                    </li>
                  );
                })}
              </ul>
              {result && question.explanation && (
                <p className={style.explanation}>{question.explanation}</p>
              )}
            </li>
          );
        })}
      </ol>

      {!result && (
        <button
          type="button"
          className={style.primaryButton}
          onClick={handleSubmit}
          disabled={!answeredAll}
        >
          {answeredAll
            ? "Antworten prüfen"
            : `Noch ${total - Object.keys(answers).length} Frage(n) offen`}
        </button>
      )}

      {result && (
        <div
          className={`${style.result} ${result.passed ? style.resultPass : style.resultFail}`}
        >
          {result.passed ? (
            <>
              <Biit variant="small" size={90} animate />
              <p className={style.passed}>
                🎉 Bestanden! {result.correct} von {total} richtig.
                {next && " Das nächste Level ist freigeschaltet."}
              </p>
            </>
          ) : (
            <p>
              {result.correct} von {total} richtig — du brauchst {needed}. Schau
              dir die Kapitel nochmals an und versuche es erneut.
            </p>
          )}
          <button
            type="button"
            className={style.secondaryButton}
            onClick={handleRetry}
          >
            Nochmals versuchen
          </button>
        </div>
      )}

      <Footer
        world={world}
        next={next}
        unlocked={alreadyPassed || result?.passed}
      />
    </div>
  );
}

function Footer({ world, next, unlocked }) {
  return (
    <nav className={style.footer}>
      <Link to={`/fms/binaria/${world.id}`} className={style.backLink}>
        ← Zurück zur Karte von {world.name}
      </Link>
      {unlocked && next && (
        <Link
          to={`/fms/binaria/${next.world.id}`}
          className={style.primaryButton}
        >
          ▶ Weiter zu {next.level.name}
        </Link>
      )}
    </nav>
  );
}
