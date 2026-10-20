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
  // --- Vektoria -----------------------------------------------------------
  "svg-tor": {
    title: "Quiz am Tor von Vektoria",
    questions: [
      {
        id: "svg-tor-1",
        question:
          "Wie wird in SVG eine Eigenschaft (ein Attribut) geschrieben?",
        answers: [
          { text: 'name="wert"', correct: true },
          { text: "name: wert;" },
          { text: "name(wert)" },
          { text: "name = wert" },
        ],
        explanation:
          'Attribute stehen im Starttag und werden immer als name="wert" mit Anführungszeichen geschrieben.',
      },
      {
        id: "svg-tor-2",
        question: "Welche Schreibweise zeichnet einen korrekten Kreis?",
        answers: [
          { text: '<circle cx="50" cy="50" r="20" />', correct: true },
          { text: '<circle x="50" y="50" r="20" />' },
          { text: '<circle cx="50" cy="50" width="20" />' },
          { text: '<kreis cx="50" cy="50" r="20" />' },
        ],
        explanation:
          "Ein Kreis braucht Mittelpunkt (cx, cy) und Radius (r). Da er keinen Inhalt hat, steht er in der Kurzform mit />.",
      },
      {
        id: "svg-tor-3",
        question: "Wo liegt der Punkt 0 / 0 in einem SVG?",
        answers: [
          { text: "Oben links; y wächst nach unten.", correct: true },
          { text: "Unten links; y wächst nach oben." },
          { text: "Genau in der Mitte der Leinwand." },
          { text: "Oben rechts; x wächst nach links." },
        ],
        explanation:
          "Das Koordinatensystem startet oben links. Ein grösseres y verschiebt eine Form nach unten.",
      },
      {
        id: "svg-tor-4",
        question: "Was bewirken die Attribute fill und stroke bei einer Form?",
        answers: [
          {
            text: "fill ist die Füllfarbe, stroke die Randfarbe.",
            correct: true,
          },
          { text: "fill ist die Randfarbe, stroke die Füllfarbe." },
          { text: "fill ist die Breite, stroke die Höhe." },
          { text: "Beide bestimmen die Position der Form." },
        ],
        explanation:
          "fill füllt die Fläche, stroke zeichnet den Rand. Wie dick dieser Rand ist, legt stroke-width fest.",
      },
    ],
  },

  kreisbucht: {
    title: "Quiz: Kreisbucht",
    questions: [
      {
        id: "kreis-1",
        question: "Wofür steht das Attribut cx?",
        answers: [
          {
            text: "Für die horizontale Position des Mittelpunkts.",
            correct: true,
          },
          { text: "Für die Breite des Kreises." },
          { text: "Für die linke Kante des Kreises." },
          { text: "Für die Farbe des Kreises." },
        ],
        explanation: "cx = center x, also die x-Koordinate des Mittelpunkts.",
      },
      {
        id: "kreis-2",
        question:
          'Ein Kreis hat cx="100" cy="40". Was passiert, wenn cy auf 120 erhöht wird?',
        answers: [
          { text: "Der Kreis wandert nach unten.", correct: true },
          { text: "Der Kreis wandert nach oben." },
          { text: "Der Kreis wird grösser." },
          { text: "Der Kreis wandert nach rechts." },
        ],
        explanation: "In SVG wächst y nach unten.",
      },
      {
        id: "kreis-3",
        question: "Wie entsteht aus einem Kreis ein Ring (nur Rand sichtbar)?",
        answers: [
          {
            text: 'fill="none" setzen und stroke mit stroke-width angeben.',
            correct: true,
          },
          { text: 'r="0" setzen.' },
          { text: 'stroke="none" setzen.' },
          { text: "Zwei Kreise mit gleicher Farbe übereinanderlegen." },
        ],
        explanation:
          "Ohne Füllung bleibt nur der Rand sichtbar — das ergibt einen Ring.",
      },
      {
        id: "kreis-4",
        question:
          "Wie gross darf r höchstens sein, damit ein Kreis mit cx=100 und cy=100 auf einer Leinwand von 200 × 200 vollständig sichtbar bleibt?",
        answers: [
          { text: "100", correct: true },
          { text: "200" },
          { text: "50" },
          { text: "400" },
        ],
        explanation:
          "Vom Mittelpunkt (100/100) sind es bis zu jedem Rand genau 100 Einheiten.",
      },
      {
        id: "kreis-5",
        question:
          "Zwei Kreise überlappen sich. Welcher liegt im Bild weiter vorne?",
        answers: [
          { text: "Der, der im Code weiter unten steht.", correct: true },
          { text: "Der, der im Code weiter oben steht." },
          { text: "Der mit dem grösseren Radius." },
          { text: "Der mit der helleren Farbe." },
        ],
        explanation:
          "SVG zeichnet von oben nach unten — spätere Elemente überdecken frühere.",
      },
    ],
  },

  rechteckstadt: {
    title: "Quiz: Rechteckstadt",
    questions: [
      {
        id: "rect-1",
        question: 'Worauf zeigen `x` und `y` bei <rect x="20" y="40" … />?',
        answers: [
          { text: "Auf die obere linke Ecke.", correct: true },
          { text: "Auf die Mitte des Rechtecks." },
          { text: "Auf die untere rechte Ecke." },
          { text: "Auf die Breite und die Höhe." },
        ],
        explanation:
          "Beim Kreis gibt man die Mitte an (cx/cy), beim Rechteck die obere linke Ecke (x/y).",
      },
      {
        id: "rect-2",
        question:
          'Ein Rechteck hat x="50" width="100". Wo liegt seine rechte Kante?',
        answers: [
          { text: "Bei 150.", correct: true },
          { text: "Bei 100." },
          { text: "Bei 50." },
          { text: "Bei 200." },
        ],
        explanation: "Die rechte Kante liegt bei x + width, also 50 + 100.",
      },
      {
        id: "rect-3",
        question: "Was bewirkt das Attribut rx bei einem Rechteck?",
        answers: [
          { text: "Es rundet die Ecken ab.", correct: true },
          { text: "Es dreht das Rechteck." },
          { text: "Es macht das Rechteck breiter." },
          { text: "Es verschiebt das Rechteck nach rechts." },
        ],
        explanation:
          "rx ist der Radius der abgerundeten Ecken — je grösser, desto runder.",
      },
      {
        id: "rect-4",
        question: "Wie entsteht aus einem Rechteck ein blosser Rahmen?",
        answers: [
          {
            text: 'fill="none" setzen und stroke mit stroke-width angeben.',
            correct: true,
          },
          { text: 'width="0" setzen.' },
          { text: 'rx="0" setzen.' },
          { text: "Zwei Rechtecke übereinanderlegen." },
        ],
        explanation:
          "Ohne Füllung bleibt nur der Rand sichtbar — genau wie der Ring beim Kreis.",
      },
      {
        id: "rect-5",
        question:
          "Ein Kreis und ein Rechteck überlappen. Welche Form liegt vorne?",
        answers: [
          { text: "Die, die weiter unten im Code steht.", correct: true },
          { text: "Die, die weiter oben im Code steht." },
          { text: "Immer der Kreis." },
          { text: "Immer das Rechteck." },
        ],
        explanation:
          "Die Reihenfolge im Code bestimmt die Reihenfolge beim Zeichnen.",
      },
    ],
  },

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
