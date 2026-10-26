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

  linienschlucht: {
    title: "Quiz: Linienschlucht",
    questions: [
      {
        id: "line-1",
        question: "Welche Attribute braucht ein <line>-Element?",
        answers: [
          { text: "x1, y1, x2, y2", correct: true },
          { text: "cx, cy, r" },
          { text: "x, y, width, height" },
          { text: "points" },
        ],
        explanation:
          "Eine Linie verbindet zwei Punkte: Punkt 1 (x1/y1) und Punkt 2 (x2/y2).",
      },
      {
        id: "line-2",
        question:
          'Warum sieht man <line x1="0" y1="0" x2="100" y2="100" /> nicht?',
        answers: [
          {
            text: "Es fehlt stroke — eine Linie hat keine Füllung.",
            correct: true,
          },
          { text: "Die Linie ist zu kurz." },
          { text: "Es fehlt fill." },
          { text: "x1 und y1 dürfen nicht 0 sein." },
        ],
        explanation:
          "Eine Linie besteht nur aus ihrem Rand. Ohne stroke (und stroke-width > 0) bleibt sie unsichtbar.",
      },
      {
        id: "line-3",
        question: "Welche Linie verläuft genau waagrecht?",
        answers: [
          { text: 'x1="10" y1="50" x2="190" y2="50"', correct: true },
          { text: 'x1="50" y1="10" x2="50" y2="190"' },
          { text: 'x1="10" y1="10" x2="190" y2="190"' },
          { text: 'x1="10" y1="50" x2="10" y2="150"' },
        ],
        explanation: "Waagrecht heißt: Die Höhe bleibt gleich, also y1 = y2.",
      },
      {
        id: "line-4",
        question: 'Was bewirkt stroke-linecap="round"?',
        answers: [
          { text: "Die Enden der Linie werden abgerundet.", correct: true },
          { text: "Die Linie wird gebogen." },
          { text: "Die Linie wird gestrichelt." },
          { text: "Die Linie wird dicker." },
        ],
        explanation:
          "linecap beschreibt die Form der beiden Enden: butt, round oder square.",
      },
      {
        id: "line-5",
        question: "Wie zeichnet man eine gestrichelte Linie?",
        answers: [
          { text: 'mit stroke-dasharray, z.B. "12 8"', correct: true },
          { text: 'mit fill="none"' },
          { text: 'mit stroke-linejoin="round"' },
          { text: "mit vielen kurzen <line>-Elementen — anders geht es nicht" },
        ],
        explanation:
          "stroke-dasharray gibt abwechselnd Strichlänge und Lückenlänge an.",
      },
    ],
  },

  zickzacktal: {
    title: "Quiz: Zickzacktal",
    questions: [
      {
        id: "polyline-1",
        question: "Wie ist das Attribut points richtig geschrieben?",
        answers: [
          { text: 'points="10,20 30,40 50,60"', correct: true },
          { text: 'points="10;20;30;40"' },
          { text: 'points="x10 y20 x30 y40"' },
          { text: 'points="(10,20)(30,40)"' },
        ],
        explanation:
          "Innerhalb eines Punktes trennt ein Komma x und y, zwischen den Punkten steht ein Leerzeichen.",
      },
      {
        id: "polyline-2",
        question:
          'Wie viele Strecken zeichnet <polyline points="0,0 10,10 20,0 30,10" />?',
        answers: [
          { text: "3", correct: true },
          { text: "4" },
          { text: "2" },
          { text: "8" },
        ],
        explanation:
          "Bei 4 Punkten entstehen 3 Verbindungen — der Weg bleibt offen.",
      },
      {
        id: "polyline-3",
        question:
          'Warum schreibt man bei einer polyline fast immer fill="none"?',
        answers: [
          {
            text: "Sonst füllt SVG die Fläche zwischen den Punkten schwarz aus.",
            correct: true,
          },
          { text: "Sonst verschwindet die Linie." },
          { text: "Sonst wird die Linie gestrichelt." },
          { text: "fill=none ist nur Gewohnheit, es bewirkt nichts." },
        ],
        explanation:
          "Der Standardwert von fill ist Schwarz — auch bei einem offenen Linienzug.",
      },
      {
        id: "polyline-4",
        question: "Was passiert, wenn man die Reihenfolge der Punkte ändert?",
        answers: [
          { text: "Es entsteht ein anderes Bild.", correct: true },
          { text: "Nichts, die Punkte werden sortiert." },
          { text: "Die Linie wird unsichtbar." },
          { text: "Nur die Farbe ändert sich." },
        ],
        explanation:
          "Die Punkte werden genau in der angegebenen Reihenfolge verbunden.",
      },
      {
        id: "polyline-5",
        question: "In einem Diagramm bedeutet ein kleiner y-Wert …",
        answers: [
          { text: "… einen hohen Punkt im Bild.", correct: true },
          { text: "… einen tiefen Punkt im Bild." },
          { text: "… einen Punkt weit links." },
          { text: "… einen Punkt weit rechts." },
        ],
        explanation:
          "y wächst nach unten: y=0 ist ganz oben, grosse y-Werte liegen unten.",
      },
    ],
  },

  vieleckfeld: {
    title: "Quiz: Vieleckfeld",
    questions: [
      {
        id: "polygon-1",
        question: "Was ist der Unterschied zwischen polyline und polygon?",
        answers: [
          {
            text: "Das polygon verbindet den letzten Punkt automatisch mit dem ersten.",
            correct: true,
          },
          { text: "Das polygon kann nur drei Punkte haben." },
          { text: "Die polyline kann nicht eingefärbt werden." },
          { text: "Es gibt keinen Unterschied, nur zwei Namen." },
        ],
        explanation:
          "Ein polygon ist geschlossen, eine polyline bleibt offen — die points sind gleich aufgebaut.",
      },
      {
        id: "polygon-2",
        question: "Wie viele Punkte braucht ein Dreieck als polygon?",
        answers: [
          { text: "3", correct: true },
          { text: "4" },
          { text: "6" },
          { text: "2" },
        ],
        explanation:
          "Die dritte Seite entsteht automatisch, weil sich der Weg schliesst.",
      },
      {
        id: "polygon-3",
        question: "Wie entsteht aus einem Vieleck ein blosser Umriss?",
        answers: [
          {
            text: 'fill="none" setzen und stroke mit stroke-width angeben.',
            correct: true,
          },
          { text: "Die Hälfte der Punkte löschen." },
          { text: 'stroke="none" setzen.' },
          { text: "polygon durch polyline ersetzen." },
        ],
        explanation:
          "Genau wie beim Kreis (Ring) und beim Rechteck (Rahmen): ohne Füllung bleibt der Rand.",
      },
      {
        id: "polygon-4",
        question:
          'Welche Form ergibt <polygon points="100,40 160,100 100,160 40,100" />?',
        answers: [
          {
            text: "Eine Raute (auf der Spitze stehendes Quadrat).",
            correct: true,
          },
          { text: "Ein Dreieck." },
          { text: "Einen Kreis." },
          { text: "Einen Stern." },
        ],
        explanation:
          "Vier Punkte liegen oben, rechts, unten und links — das ergibt eine Raute.",
      },
      {
        id: "polygon-5",
        question: "Welches Element nimmt man am besten für ein Rechteck?",
        answers: [
          { text: "<rect>, weil es kürzer und klarer ist.", correct: true },
          { text: "<polygon>, weil <rect> keine Farbe kann." },
          { text: "<polyline>, weil sie geschlossen ist." },
          { text: "<line>, viermal übereinander." },
        ],
        explanation:
          "Technisch ginge beides — man nimmt immer das Element, das am besten passt.",
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
