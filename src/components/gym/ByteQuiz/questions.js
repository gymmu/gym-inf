/**
 * Fragekatalog für das ByteQuiz.
 *
 * Unterstützte Fragetypen:
 *
 *  1. Wahr / Falsch
 *     { id, type: "truefalse", question, answer: true, explanation? }
 *
 *  2. Multiple Choice (genau eine richtige Antwort)
 *     { id, type: "mc", question, options: ["A", "B", "C"], answer: 1, explanation? }
 *
 *  3. Formatierte Zahl (Eingabe wird normalisiert verglichen)
 *     { id, type: "number", question, answer: "2F", prefix?: "0x", explanation? }
 *
 * Zusätzlich hat jede Frage eine Schwierigkeitsstufe:
 *
 *     difficulty: "easy" | "hard"
 *
 * Die einfachen Fragen werden für die ersten vier Bits (Frage 1–4) verwendet,
 * die schweren Fragen für die letzten vier Bits (Frage 5–8).
 */
export const BYTE_QUIZ_QUESTIONS = [
  /* --- Einfach ---------------------------------------------------------- */
  {
    id: "easy-1",
    type: "truefalse",
    difficulty: "easy",
    question: "Ein Byte besteht aus 8 Bits.",
    answer: true,
    explanation: "Genau: 8 Bits bilden gemeinsam ein Byte.",
  },
  {
    id: "easy-2",
    type: "truefalse",
    difficulty: "easy",
    question: "Ein Bit kann die Werte 0, 1 und 2 annehmen.",
    answer: false,
    explanation: "Ein Bit kennt nur zwei Zustände: 0 oder 1.",
  },
  {
    id: "easy-3",
    type: "truefalse",
    difficulty: "easy",
    question: "Mit einem Byte lassen sich 256 verschiedene Werte darstellen.",
    answer: true,
    explanation: "2^8 = 256 mögliche Kombinationen.",
  },
  {
    id: "easy-4",
    type: "truefalse",
    difficulty: "easy",
    question: "Das ganz linke Bit in einem Byte ist das kleinste Bit.",
    answer: false,
    explanation: "Links steht das grösste Bit, rechts das kleinste.",
  },
  {
    id: "easy-5",
    type: "truefalse",
    difficulty: "easy",
    question: "Die ASCII-Tabelle beschreibt 128 Zeichen.",
    answer: true,
    explanation: "Die klassische ASCII-Tabelle umfasst 128 Zeichen.",
  },
  {
    id: "easy-6",
    type: "truefalse",
    difficulty: "easy",
    question: "Im Hexadezimalsystem gibt es 10 verschiedene Ziffern.",
    answer: false,
    explanation: "Es sind 16 Ziffern: 0 bis 9 und A bis F.",
  },
  {
    id: "easy-7",
    type: "truefalse",
    difficulty: "easy",
    question: "Ein Pixel besteht im RGB-Modell aus drei Bytes.",
    answer: true,
    explanation: "Je ein Byte für Rot, Grün und Blau.",
  },
  {
    id: "easy-8",
    type: "truefalse",
    difficulty: "easy",
    question: "Ein halbes Byte (4 Bits) entspricht einer Hex-Ziffer.",
    answer: true,
    explanation:
      "4 Bits können Werte von 0 bis 15 annehmen – genau 16 Ziffern.",
  },
  {
    id: "easy-9",
    type: "truefalse",
    difficulty: "easy",
    question: "Der Alpha-Kanal bestimmt die Helligkeit eines Pixels.",
    answer: false,
    explanation: "Der Alpha-Kanal bestimmt die Sichtbarkeit (Transparenz).",
  },
  {
    id: "easy-10",
    type: "truefalse",
    difficulty: "easy",
    question: "Das Byte 00000000 hat den Hexwert 00.",
    answer: true,
    explanation: "Alle Bits auf 0 ergeben den Wert 0, also Hex 00.",
  },
  {
    id: "easy-11",
    type: "mc",
    difficulty: "easy",
    question: "Wie viele Zustände kann ein einzelnes Bit annehmen?",
    options: ["1", "2", "8", "16"],
    answer: 1,
    explanation: "Ein Bit ist binär: entweder 0 oder 1.",
  },
  {
    id: "easy-12",
    type: "mc",
    difficulty: "easy",
    question: "Welche Ziffern gibt es im Hexadezimalsystem?",
    options: ["0–9", "0–9 und A–F", "0 und 1", "A–Z"],
    answer: 1,
    explanation: "Dr. Hex erweitert die Ziffern auf 0–F, das sind 16 Ziffern.",
  },
  {
    id: "easy-13",
    type: "mc",
    difficulty: "easy",
    question: "Welchen Rang hat das ganz rechte Bit in einem Byte?",
    options: ["Rang 0", "Rang 1", "Rang 7", "Rang 8"],
    answer: 0,
    explanation:
      "Die Ränge zählen von rechts nach links: rechts Rang 0, links Rang 7.",
  },
  {
    id: "easy-14",
    type: "number",
    difficulty: "easy",
    question: "Welchen Dezimalwert hat das Byte 00000001?",
    answer: "1",
    placeholder: "z. B. 42",
    explanation: "Nur das Bit mit Rang 0 ist gesetzt: 2^0 = 1.",
  },
  {
    id: "easy-15",
    type: "number",
    difficulty: "easy",
    question: "Wie viele Bits hat ein Byte?",
    answer: "8",
    placeholder: "Zahl",
    explanation: "Die Gruppengrösse der Binären ist immer 8.",
  },
  {
    id: "easy-16",
    type: "truefalse",
    difficulty: "easy",
    question: "Ein Bit ändert seinen Zustand, sobald man es beobachtet.",
    answer: false,
    explanation:
      "Sobald ein Bit beobachtet wird, hat es einen festen Zustand, der sich nicht mehr ändert.",
  },
  {
    id: "easy-17",
    type: "mc",
    difficulty: "easy",
    question: "Wie viele Gruppen (Bytes) hat Professor ASCII untersucht?",
    options: ["8", "16", "128", "256"],
    answer: 2,
    explanation:
      "Er hat nur die ersten 128 Gruppen untersucht – der Rest ist Theorie.",
  },
  {
    id: "easy-18",
    type: "mc",
    difficulty: "easy",
    question: "Wie schreibt man den grössten Wert eines Bytes im Hexsystem?",
    options: ["0x99", "0xF0", "0xFF", "0x100"],
    answer: 2,
    explanation: "Alle 8 Bits auf 1 ergeben 255, also 0xFF.",
  },

  {
    id: "easy-19",
    type: "mc",
    difficulty: "easy",
    question: "Wie viele verschiedene Zustände hat eine Gruppe aus 2 Bits?",
    options: ["2", "3", "4", "8"],
    answer: 2,
    explanation: "00, 01, 10, 11 – also 2^2 = 4 Zustände.",
  },
  {
    id: "easy-20",
    type: "truefalse",
    difficulty: "easy",
    question: "Der grösste Wert, den ein Byte darstellen kann, ist 255.",
    answer: true,
    explanation: "Gezählt wird von 0 bis 255 – das sind 256 Werte.",
  },
  {
    id: "easy-21",
    type: "mc",
    difficulty: "easy",
    question: "Welches Zahlensystem verwendet nur die Ziffern 0 und 1?",
    options: [
      "Dezimalsystem",
      "Binärsystem",
      "Hexadezimalsystem",
      "Römische Zahlen",
    ],
    answer: 1,
    explanation: "Binär = zwei Ziffern, genau wie die Zustände eines Bits.",
  },
  {
    id: "easy-22",
    type: "number",
    difficulty: "easy",
    question: "Welchen Wert hat ein gesetztes Bit mit Rang 3?",
    answer: "8",
    placeholder: "Zahl",
    explanation: "2^3 = 8.",
  },
  {
    id: "easy-23",
    type: "mc",
    difficulty: "easy",
    question:
      "Wie viele Bits werden durch eine einzige Hex-Ziffer dargestellt?",
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: "Eine Hex-Ziffer deckt 16 Werte ab – das sind 4 Bits.",
  },
  {
    id: "easy-24",
    type: "truefalse",
    difficulty: "easy",
    question: "Buchstaben werden im Computer über Zahlen (Bytes) dargestellt.",
    answer: true,
    explanation:
      "Jedem Zeichen ist eine Nummer in der ASCII-Tabelle zugeordnet.",
  },
  {
    id: "easy-25",
    type: "number",
    difficulty: "easy",
    question:
      "Wie viele der 256 möglichen Bytes sind in der klassischen ASCII-Tabelle nicht belegt?",
    answer: "128",
    placeholder: "Zahl",
    explanation: "256 − 128 = 128 Bytes sind nicht vergeben.",
  },
  {
    id: "easy-26",
    type: "mc",
    difficulty: "easy",
    question: "Wie viel ergibt 2^8?",
    options: ["16", "64", "256", "512"],
    answer: 2,
    explanation: "8 Bits mit je 2 Zuständen ergeben 256 Kombinationen.",
  },
  {
    id: "easy-27",
    type: "mc",
    difficulty: "easy",
    question: "Welches Bit eines Bytes hat den grössten Wert?",
    options: [
      "das ganz linke Bit",
      "das ganz rechte Bit",
      "das mittlere Bit",
      "alle Bits sind gleich viel wert",
    ],
    answer: 0,
    explanation: "Links steht Rang 7 mit dem Wert 2^7 = 128.",
  },
  {
    id: "easy-28",
    type: "mc",
    difficulty: "easy",
    question: "Welche Schreibweise braucht für ein Byte am wenigsten Stellen?",
    options: ["binär", "dezimal", "hexadezimal", "alle gleich viele"],
    answer: 2,
    explanation:
      "Binär 8 Stellen, dezimal bis 3 Stellen, hexadezimal immer nur 2.",
  },

  /* --- Schwer ----------------------------------------------------------- */
  {
    id: "hard-1",
    type: "number",
    difficulty: "hard",
    question: "Welchen Dezimalwert hat das Byte 00101101?",
    answer: "45",
    placeholder: "z. B. 42",
    explanation: "2^5 + 2^3 + 2^2 + 2^0 = 32 + 8 + 4 + 1 = 45.",
  },
  {
    id: "hard-2",
    type: "number",
    difficulty: "hard",
    question: "Welchen Hexwert hat das Byte 10110110? (ohne 0x)",
    answer: "B6",
    placeholder: "z. B. 2F",
    explanation: "1011 = B und 0110 = 6, also B6.",
  },
  {
    id: "hard-3",
    type: "mc",
    difficulty: "hard",
    question: "Welche Bitfolge entspricht dem Hexwert 0x4E?",
    options: ["01001110", "01000111", "11100100", "01011110"],
    answer: 0,
    explanation: "4 = 0100 und E = 1110, zusammen 01001110.",
  },
  {
    id: "hard-4",
    type: "number",
    difficulty: "hard",
    question:
      "Der Buchstabe A hat in der ASCII-Tabelle die Nummer 65. Welche Nummer hat D?",
    answer: "68",
    placeholder: "Zahl",
    explanation: "A = 65, B = 66, C = 67, D = 68.",
  },
  {
    id: "hard-5",
    type: "mc",
    difficulty: "hard",
    question:
      "Wie viele verschiedene Farben lassen sich mit RGB (je 1 Byte pro Kanal) darstellen?",
    options: ["256", "65 536", "16 777 216", "4 294 967 296"],
    answer: 2,
    explanation: "256 · 256 · 256 = 16 777 216 Farben.",
  },
  {
    id: "hard-6",
    type: "number",
    difficulty: "hard",
    question: "Welchen Dezimalwert hat der Hexwert 0xC3?",
    answer: "195",
    placeholder: "Zahl",
    explanation: "C = 12 → 12 · 16 = 192, plus 3 = 195.",
  },
  {
    id: "hard-7",
    type: "truefalse",
    difficulty: "hard",
    question:
      "Dr. Dezimal braucht für die Nummerierung aller 256 Bytes höchstens 3 Stellen, Dr. Hex immer genau 2.",
    answer: true,
    explanation:
      "Dezimal 0–255 (bis 3 Stellen), hexadezimal 00–FF (immer 2 Stellen).",
  },
  {
    id: "hard-8",
    type: "mc",
    difficulty: "hard",
    question:
      "Ein Byte hat den Wert 0x80. Welche Aussage über seine Bits stimmt?",
    options: [
      "Nur das Bit mit Rang 0 ist 1",
      "Nur das Bit mit Rang 7 ist 1",
      "Alle Bits sind 1",
      "Die vier rechten Bits sind 1",
    ],
    answer: 1,
    explanation: "0x80 = 128 = 2^7, also nur das linke Bit (Rang 7) ist 1.",
  },
  {
    id: "hard-9",
    type: "number",
    difficulty: "hard",
    question:
      "Welchen Dezimalwert hat das Byte, bei dem nur die vier linken Bits 1 sind?",
    answer: "240",
    placeholder: "Zahl",
    explanation: "11110000 = 128 + 64 + 32 + 16 = 240 (Hex F0).",
  },
  {
    id: "hard-10",
    type: "mc",
    difficulty: "hard",
    question:
      "Wie viele der dreistelligen Dezimalzahlen (100–999) nutzt Dr. Dezimal für Bytes?",
    options: ["ca. 10 %", "ca. 17 %", "ca. 25 %", "alle dreistelligen Zahlen"],
    answer: 1,
    explanation:
      "Nur 100–255, also 156 von 900 Zahlen ≈ 17 % – Dr. Hex spricht von ca. 25 %.",
  },
  {
    id: "hard-11",
    type: "truefalse",
    difficulty: "hard",
    question: "Das Byte 11111111 entspricht dem Dezimalwert 256.",
    answer: false,
    explanation: "Es entspricht 255, denn gezählt wird von 0 bis 255.",
  },
  {
    id: "hard-12",
    type: "number",
    difficulty: "hard",
    question: "Welchen Hexwert hat der Dezimalwert 173? (ohne 0x)",
    answer: "AD",
    placeholder: "z. B. 2F",
    explanation: "173 = 10 · 16 + 13 → A und D, also AD.",
  },
  {
    id: "hard-13",
    type: "number",
    difficulty: "hard",
    question: "Welchen Dezimalwert hat das Byte 01010101?",
    answer: "85",
    placeholder: "Zahl",
    explanation: "64 + 16 + 4 + 1 = 85.",
  },
  {
    id: "hard-14",
    type: "number",
    difficulty: "hard",
    question: "Welchen Hexwert hat das Byte 00111100? (zweistellig, ohne 0x)",
    answer: "3C",
    placeholder: "z. B. 2F",
    explanation: "0011 = 3 und 1100 = C, also 3C.",
  },
  {
    id: "hard-15",
    type: "mc",
    difficulty: "hard",
    question: "Welchen Wert hat ein gesetztes Bit mit Rang 7?",
    options: ["7", "64", "128", "256"],
    answer: 2,
    explanation: "2^7 = 128.",
  },
  {
    id: "hard-16",
    type: "number",
    difficulty: "hard",
    question:
      "Wie viele Bits braucht man mindestens, um 128 verschiedene Zeichen zu unterscheiden?",
    answer: "7",
    placeholder: "Zahl",
    explanation: "2^7 = 128 – sieben Bits genügen für die ASCII-Tabelle.",
  },
  {
    id: "hard-17",
    type: "mc",
    difficulty: "hard",
    question: "Wie viele Kombinationen ergeben zwei Bytes zusammen?",
    options: ["512", "1 024", "65 536", "16 777 216"],
    answer: 2,
    explanation: "256 · 256 = 65 536, denn 16 Bits ergeben 2^16.",
  },
  {
    id: "hard-18",
    type: "truefalse",
    difficulty: "hard",
    question:
      "Für alle von Professor ASCII untersuchten Zeichen genügen 7 Bits – das achte Bit ist immer 0.",
    answer: true,
    explanation:
      "Die ersten 128 Gruppen reichen von 00000000 bis 01111111, links steht immer eine 0.",
  },
  {
    id: "hard-19",
    type: "number",
    difficulty: "hard",
    question: "Welchen Hexwert hat der Dezimalwert 200? (zweistellig, ohne 0x)",
    answer: "C8",
    placeholder: "z. B. 2F",
    explanation: "200 = 12 · 16 + 8 → C und 8.",
  },
  {
    id: "hard-20",
    type: "mc",
    difficulty: "hard",
    question: "Welchen Dezimalwert hat 0x1F?",
    options: ["15", "16", "31", "255"],
    answer: 2,
    explanation: "1 · 16 + 15 = 31.",
  },
  {
    id: "hard-21",
    type: "mc",
    difficulty: "hard",
    question: "Welches Byte entspricht dem Dezimalwert 100?",
    options: ["01100100", "01000110", "00110010", "10010100"],
    answer: 0,
    explanation: "64 + 32 + 4 = 100.",
  },
  {
    id: "hard-22",
    type: "truefalse",
    difficulty: "hard",
    question:
      "Setzt man in einem Byte das linke Bit von 0 auf 1, steigt der Wert um 128.",
    answer: true,
    explanation: "Das linke Bit hat Rang 7 und damit den Wert 2^7 = 128.",
  },
];

export default BYTE_QUIZ_QUESTIONS;
