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
 * Aktuell sind nur Dummy-Fragen (Wahr / Falsch) enthalten. Die echten Fragen
 * werden später ergänzt.
 */
export const BYTE_QUIZ_QUESTIONS = [
  {
    id: "dummy-1",
    type: "truefalse",
    question: "Ein Byte besteht aus 8 Bits.",
    answer: true,
    explanation: "Genau: 8 Bits bilden gemeinsam ein Byte.",
  },
  {
    id: "dummy-2",
    type: "truefalse",
    question: "Ein Bit kann die Werte 0, 1 und 2 annehmen.",
    answer: false,
    explanation: "Ein Bit kennt nur zwei Zustände: 0 oder 1.",
  },
  {
    id: "dummy-3",
    type: "truefalse",
    question: "Mit einem Byte lassen sich 256 verschiedene Werte darstellen.",
    answer: true,
    explanation: "2^8 = 256 mögliche Kombinationen.",
  },
  {
    id: "dummy-4",
    type: "truefalse",
    question: "Das ganz linke Bit in einem Byte ist das kleinste Bit.",
    answer: false,
    explanation: "Links steht das grösste Bit, rechts das kleinste.",
  },
  {
    id: "dummy-5",
    type: "truefalse",
    question: "Die ASCII-Tabelle beschreibt 128 Zeichen.",
    answer: true,
    explanation: "Die klassische ASCII-Tabelle umfasst 128 Zeichen.",
  },
  {
    id: "dummy-6",
    type: "truefalse",
    question: "Im Hexadezimalsystem gibt es 10 verschiedene Ziffern.",
    answer: false,
    explanation: "Es sind 16 Ziffern: 0 bis 9 und A bis F.",
  },
  {
    id: "dummy-7",
    type: "truefalse",
    question: "Ein Pixel besteht im RGB-Modell aus drei Bytes.",
    answer: true,
    explanation: "Je ein Byte für Rot, Grün und Blau.",
  },
  {
    id: "dummy-8",
    type: "truefalse",
    question: "Ein halbes Byte (4 Bits) entspricht einer Hex-Ziffer.",
    answer: true,
    explanation:
      "4 Bits können Werte von 0 bis 15 annehmen – genau 16 Ziffern.",
  },
  {
    id: "dummy-9",
    type: "truefalse",
    question: "Der Alpha-Kanal bestimmt die Helligkeit eines Pixels.",
    answer: false,
    explanation: "Der Alpha-Kanal bestimmt die Sichtbarkeit (Transparenz).",
  },
  {
    id: "dummy-10",
    type: "truefalse",
    question: "Das Byte 00000000 hat den Hexwert 00.",
    answer: true,
    explanation: "Alle Bits auf 0 ergeben den Wert 0, also Hex 00.",
  },
];

export default BYTE_QUIZ_QUESTIONS;
