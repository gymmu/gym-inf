/**
 * Level-Quizze von Binaria.
 *
 * Am Ende jedes Levels steht ein kleines Quiz mit 4–6 Fragen. Wird es
 * bestanden, schaltet sich das nächste Level frei (siehe
 * `src/components/Binaria/useBinariaUnlock.js`).
 *
 * Aufbau eines Quiz:
 *
 *   "<levelId>": {
 *     title: "Quiz: Bitwald",            // optional
 *     questions: [
 *       {
 *         id: "q1",
 *         question: "Wie viele Bits hat ein Byte?",
 *         answers: [
 *           { text: "8", correct: true },
 *           { text: "4" },
 *           { text: "16" },
 *         ],
 *         explanation: "Ein Byte besteht aus 8 Bits.",   // optional
 *       },
 *       ...
 *     ],
 *   }
 *
 * Hinweis: Die Fragen werden später ergänzt (die Kapitel werden vorher noch
 * überarbeitet). Solange für ein Level kein Quiz hinterlegt ist, kann das
 * Level über den Button "Level abschliessen" freigegeben werden.
 */

/** Anteil richtiger Antworten, der zum Bestehen nötig ist. */
export const QUIZ_PASS_RATIO = 0.8;

/** Empfohlene Anzahl Fragen pro Level-Quiz. */
export const QUIZ_MIN_QUESTIONS = 4;
export const QUIZ_MAX_QUESTIONS = 6;

/** levelId -> Quiz */
export const binariaQuizzes = {
  // Beispiel (auskommentiert, dient als Vorlage):
  //
  // bitwald: {
  //   title: "Quiz: Bitwald",
  //   questions: [
  //     {
  //       id: "bit-1",
  //       question: "Was ist ein Bit?",
  //       answers: [
  //         { text: "Die kleinste Informationseinheit (0 oder 1)", correct: true },
  //         { text: "Ein Bild aus Pixeln" },
  //         { text: "Ein Kabel im Computer" },
  //       ],
  //       explanation: "Ein Bit kann genau zwei Zustände haben: 0 oder 1.",
  //     },
  //   ],
  // },
};

/** Liefert das Quiz eines Levels oder `null`, wenn (noch) keines existiert. */
export function getLevelQuiz(levelId) {
  const quiz = binariaQuizzes[levelId];
  if (!quiz || !Array.isArray(quiz.questions) || quiz.questions.length === 0) {
    return null;
  }
  return quiz;
}

/** Anzahl Fragen, die zum Bestehen richtig sein müssen. */
export function requiredCorrect(total) {
  return Math.ceil(total * QUIZ_PASS_RATIO);
}
