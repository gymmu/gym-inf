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
 *
 * Ausserdem gehört jede Frage zu genau einem Kapitel:
 *
 *     chapter: "biit-story" | "von-neumann"
 *
 * Die Kapitel sind in BYTE_QUIZ_CHAPTERS beschrieben und können im Quiz
 * einzeln oder in Kombination ausgewählt werden.
 */

/** Alle Kapitel, aus denen Fragen ausgewählt werden können. */
export const BYTE_QUIZ_CHAPTERS = [
  {
    id: "biit-story",
    title: "Bits und Bytes",
    description:
      "Biits Reise durch Binaria: Bits, Bytes, Ränge, ASCII, Hexadezimal, Farben und Bilder.",
    path: "/fms/biit-story",
  },
  {
    id: "von-neumann",
    title: "Von-Neumann-Architektur",
    description:
      "Wie ein Computer denkt: Aufbau der CPU, Speicher und Bus, Rechnen, Logik, negative Zahlen, Kommazahlen, Text und Dateien.",
    path: "/fms/von-neumann-story",
  },
];

export const BYTE_QUIZ_QUESTIONS = [
  /* --- Einfach ---------------------------------------------------------- */
  {
    id: "easy-1",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Ein Byte besteht aus 8 Bits.",
    answer: true,
    explanation: "Genau: 8 Bits bilden gemeinsam ein Byte.",
  },
  {
    id: "easy-2",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Ein Bit kann die Werte 0, 1 und 2 annehmen.",
    answer: false,
    explanation: "Ein Bit kennt nur zwei Zustände: 0 oder 1.",
  },
  {
    id: "easy-3",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Mit einem Byte lassen sich 256 verschiedene Werte darstellen.",
    answer: true,
    explanation: "2^8 = 256 mögliche Kombinationen.",
  },
  {
    id: "easy-4",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Das ganz linke Bit in einem Byte ist das kleinste Bit.",
    answer: false,
    explanation: "Links steht das grösste Bit, rechts das kleinste.",
  },
  {
    id: "easy-5",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Die ASCII-Tabelle beschreibt 128 Zeichen.",
    answer: true,
    explanation: "Die klassische ASCII-Tabelle umfasst 128 Zeichen.",
  },
  {
    id: "easy-6",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Im Hexadezimalsystem gibt es 10 verschiedene Ziffern.",
    answer: false,
    explanation: "Es sind 16 Ziffern: 0 bis 9 und A bis F.",
  },
  {
    id: "easy-7",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Ein Pixel besteht im RGB-Modell aus drei Bytes.",
    answer: true,
    explanation: "Je ein Byte für Rot, Grün und Blau.",
  },
  {
    id: "easy-8",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Ein halbes Byte (4 Bits) entspricht einer Hex-Ziffer.",
    answer: true,
    explanation:
      "4 Bits können Werte von 0 bis 15 annehmen – genau 16 Ziffern.",
  },
  {
    id: "easy-9",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Der Alpha-Kanal bestimmt die Helligkeit eines Pixels.",
    answer: false,
    explanation: "Der Alpha-Kanal bestimmt die Sichtbarkeit (Transparenz).",
  },
  {
    id: "easy-10",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Das Byte 00000000 hat den Hexwert 00.",
    answer: true,
    explanation: "Alle Bits auf 0 ergeben den Wert 0, also Hex 00.",
  },
  {
    id: "easy-11",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Wie viele Zustände kann ein einzelnes Bit annehmen?",
    options: ["1", "2", "8", "16"],
    answer: 1,
    explanation: "Ein Bit ist binär: entweder 0 oder 1.",
  },
  {
    id: "easy-12",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Welche Ziffern gibt es im Hexadezimalsystem?",
    options: ["0–9", "0–9 und A–F", "0 und 1", "A–Z"],
    answer: 1,
    explanation: "Dr. Hex erweitert die Ziffern auf 0–F, das sind 16 Ziffern.",
  },
  {
    id: "easy-13",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Welchen Dezimalwert hat das Byte 00000001?",
    answer: "1",
    placeholder: "z. B. 42",
    explanation: "Nur das Bit mit Rang 0 ist gesetzt: 2^0 = 1.",
  },
  {
    id: "easy-15",
    type: "number",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Wie viele Bits hat ein Byte?",
    answer: "8",
    placeholder: "Zahl",
    explanation: "Die Gruppengrösse der Binären ist immer 8.",
  },
  {
    id: "easy-16",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Ein Bit ändert seinen Zustand, sobald man es beobachtet.",
    answer: false,
    explanation:
      "Sobald ein Bit beobachtet wird, hat es einen festen Zustand, der sich nicht mehr ändert.",
  },
  {
    id: "easy-17",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Wie schreibt man den grössten Wert eines Bytes im Hexsystem?",
    options: ["0x99", "0xF0", "0xFF", "0x100"],
    answer: 2,
    explanation: "Alle 8 Bits auf 1 ergeben 255, also 0xFF.",
  },

  {
    id: "easy-19",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Wie viele verschiedene Zustände hat eine Gruppe aus 2 Bits?",
    options: ["2", "3", "4", "8"],
    answer: 2,
    explanation: "00, 01, 10, 11 – also 2^2 = 4 Zustände.",
  },
  {
    id: "easy-20",
    type: "truefalse",
    difficulty: "easy",
    chapter: "biit-story",
    question: "Der grösste Wert, den ein Byte darstellen kann, ist 255.",
    answer: true,
    explanation: "Gezählt wird von 0 bis 255 – das sind 256 Werte.",
  },
  {
    id: "easy-21",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Welchen Wert hat ein gesetztes Bit mit Rang 3?",
    answer: "8",
    placeholder: "Zahl",
    explanation: "2^3 = 8.",
  },
  {
    id: "easy-23",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Buchstaben werden im Computer über Zahlen (Bytes) dargestellt.",
    answer: true,
    explanation:
      "Jedem Zeichen ist eine Nummer in der ASCII-Tabelle zugeordnet.",
  },
  {
    id: "easy-25",
    type: "number",
    difficulty: "easy",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Wie viel ergibt 2^8?",
    options: ["16", "64", "256", "512"],
    answer: 2,
    explanation: "8 Bits mit je 2 Zuständen ergeben 256 Kombinationen.",
  },
  {
    id: "easy-27",
    type: "mc",
    difficulty: "easy",
    chapter: "biit-story",
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
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Welchen Dezimalwert hat das Byte 00101101?",
    answer: "45",
    placeholder: "z. B. 42",
    explanation: "2^5 + 2^3 + 2^2 + 2^0 = 32 + 8 + 4 + 1 = 45.",
  },
  {
    id: "hard-2",
    type: "number",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welchen Hexwert hat das Byte 10110110? (ohne 0x)",
    answer: "B6",
    placeholder: "z. B. 2F",
    explanation: "1011 = B und 0110 = 6, also B6.",
  },
  {
    id: "hard-3",
    type: "mc",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welche Bitfolge entspricht dem Hexwert 0x4E?",
    options: ["01001110", "01000111", "11100100", "01011110"],
    answer: 0,
    explanation: "4 = 0100 und E = 1110, zusammen 01001110.",
  },
  {
    id: "hard-4",
    type: "number",
    difficulty: "hard",
    chapter: "biit-story",
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
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Welchen Dezimalwert hat der Hexwert 0xC3?",
    answer: "195",
    placeholder: "Zahl",
    explanation: "C = 12 → 12 · 16 = 192, plus 3 = 195.",
  },
  {
    id: "hard-7",
    type: "truefalse",
    difficulty: "hard",
    chapter: "biit-story",
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
    chapter: "biit-story",
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
    chapter: "biit-story",
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
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Das Byte 11111111 entspricht dem Dezimalwert 256.",
    answer: false,
    explanation: "Es entspricht 255, denn gezählt wird von 0 bis 255.",
  },
  {
    id: "hard-12",
    type: "number",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welchen Hexwert hat der Dezimalwert 173? (ohne 0x)",
    answer: "AD",
    placeholder: "z. B. 2F",
    explanation: "173 = 10 · 16 + 13 → A und D, also AD.",
  },
  {
    id: "hard-13",
    type: "number",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welchen Dezimalwert hat das Byte 01010101?",
    answer: "85",
    placeholder: "Zahl",
    explanation: "64 + 16 + 4 + 1 = 85.",
  },
  {
    id: "hard-14",
    type: "number",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welchen Hexwert hat das Byte 00111100? (zweistellig, ohne 0x)",
    answer: "3C",
    placeholder: "z. B. 2F",
    explanation: "0011 = 3 und 1100 = C, also 3C.",
  },
  {
    id: "hard-15",
    type: "mc",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welchen Wert hat ein gesetztes Bit mit Rang 7?",
    options: ["7", "64", "128", "256"],
    answer: 2,
    explanation: "2^7 = 128.",
  },
  {
    id: "hard-16",
    type: "number",
    difficulty: "hard",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Wie viele Kombinationen ergeben zwei Bytes zusammen?",
    options: ["512", "1 024", "65 536", "16 777 216"],
    answer: 2,
    explanation: "256 · 256 = 65 536, denn 16 Bits ergeben 2^16.",
  },
  {
    id: "hard-18",
    type: "truefalse",
    difficulty: "hard",
    chapter: "biit-story",
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
    chapter: "biit-story",
    question: "Welchen Hexwert hat der Dezimalwert 200? (zweistellig, ohne 0x)",
    answer: "C8",
    placeholder: "z. B. 2F",
    explanation: "200 = 12 · 16 + 8 → C und 8.",
  },
  {
    id: "hard-20",
    type: "mc",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welchen Dezimalwert hat 0x1F?",
    options: ["15", "16", "31", "255"],
    answer: 2,
    explanation: "1 · 16 + 15 = 31.",
  },
  {
    id: "hard-21",
    type: "mc",
    difficulty: "hard",
    chapter: "biit-story",
    question: "Welches Byte entspricht dem Dezimalwert 100?",
    options: ["01100100", "01000110", "00110010", "10010100"],
    answer: 0,
    explanation: "64 + 32 + 4 = 100.",
  },
  {
    id: "hard-22",
    type: "truefalse",
    difficulty: "hard",
    chapter: "biit-story",
    question:
      "Setzt man in einem Byte das linke Bit von 0 auf 1, steigt der Wert um 128.",
    answer: true,
    explanation: "Das linke Bit hat Rang 7 und damit den Wert 2^7 = 128.",
  },

  /* === Von-Neumann-Architektur ========================================= */

  /* --- Einfach ---------------------------------------------------------- */
  {
    id: "vn-easy-1",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Aus wie vielen Teilen besteht die von-Neumann-Architektur?",
    options: ["2", "3", "4", "8"],
    answer: 2,
    explanation:
      "Steuerwerk, Rechenwerk, Speicher sowie Ein- und Ausgabe – also vier Teile.",
  },
  {
    id: "vn-easy-2",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Welche beiden Teile bilden zusammen die CPU?",
    options: [
      "Speicher und Bus",
      "Steuerwerk und Rechenwerk",
      "Ein- und Ausgabe",
      "Rechenwerk und Speicher",
    ],
    answer: 1,
    explanation: "Steuerwerk und Rechenwerk zusammen sind der Prozessor (CPU).",
  },
  {
    id: "vn-easy-3",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "In jeder Speicherzelle wohnt genau ein Byte.",
    answer: true,
    explanation: "Der Speicher ist ein Raster aus Zellen mit je einem Byte.",
  },
  {
    id: "vn-easy-4",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Jede Speicherzelle hat eine feste Adresse.",
    answer: true,
    explanation:
      "Über die Adresse findet die CPU jedes Byte im Speicher wieder.",
  },
  {
    id: "vn-easy-5",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Wozu dient der Bus in der von-Neumann-Architektur?",
    options: [
      "Er speichert Bytes dauerhaft.",
      "Er verbindet alle Teile, damit Daten hin und her reisen können.",
      "Er rechnet Zahlen zusammen.",
      "Er zeigt Bilder auf dem Bildschirm.",
    ],
    answer: 1,
    explanation:
      "Alle Teile hängen am gemeinsamen Bus – Daten reisen der Reihe nach darüber.",
  },
  {
    id: "vn-easy-6",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question:
      "Weil alle Teile am selben Bus hängen, kann die CPU beliebig viele Daten gleichzeitig übertragen.",
    answer: false,
    explanation:
      "Der gemeinsame Bus ist ein Nadelöhr: Es geht immer nur ein Päckchen auf einmal.",
  },
  {
    id: "vn-easy-7",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "In welchem Teil des Computers arbeitet Frau ADD?",
    options: [
      "Im Speicher",
      "Im Rechenwerk",
      "Im Steuerwerk",
      "In der Ausgabe",
    ],
    answer: 1,
    explanation: "Gerechnet wird im Rechenwerk.",
  },
  {
    id: "vn-easy-8",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Beim Addieren rechnet das Rechenwerk von rechts nach links.",
    answer: true,
    explanation:
      "Wie beim schriftlichen Addieren: rechts beginnen, Übertrag wandert nach links.",
  },
  {
    id: "vn-easy-9",
    type: "number",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Bis zu welcher Zahl kann ein einzelnes Byte zählen?",
    answer: "255",
    placeholder: "Zahl",
    explanation: "Ein Byte reicht von 0 bis 255; danach kommt es zum Überlauf.",
  },
  {
    id: "vn-easy-10",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Was passiert bei einem Überlauf (Overflow) in einem Byte?",
    options: [
      "Das Byte wird automatisch grösser.",
      "Der Übertrag aus dem grössten Bit fällt heraus und das Ergebnis wird falsch.",
      "Der Computer stürzt immer ab.",
      "Das Ergebnis wird auf 255 aufgerundet und bleibt richtig.",
    ],
    answer: 1,
    explanation:
      "Für das neunte Bit ist kein Platz – es geht verloren, das Ergebnis stimmt nicht mehr.",
  },
  {
    id: "vn-easy-11",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Wie lautet die Regel von XOR für zwei Bits?",
    options: [
      "Gleiche Bits ergeben 0, verschiedene Bits ergeben 1.",
      "Gleiche Bits ergeben 1, verschiedene Bits ergeben 0.",
      "Das Ergebnis ist immer 1.",
      "Das Ergebnis ist 1, wenn beide Bits 1 sind.",
    ],
    answer: 0,
    explanation: "XOR heisst „exklusiv oder“: nur bei Unterschied wird es 1.",
  },
  {
    id: "vn-easy-12",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question:
      "Bei AND wird das Ergebnis-Bit nur dann 1, wenn beide Bits 1 sind.",
    answer: true,
    explanation:
      "AND ist die strengste Operation – deshalb blendet sie Bits aus.",
  },
  {
    id: "vn-easy-13",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Welche logische Operation braucht nur ein einziges Byte?",
    options: ["AND", "OR", "XOR", "NOT"],
    answer: 3,
    explanation: "NOT dreht die Bits eines einzelnen Bytes um.",
  },
  {
    id: "vn-easy-14",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Wie subtrahiert ein Computer zwei Zahlen?",
    options: [
      "Er zieht Bit für Bit ab, mit einem Übertrag nach links.",
      "Er addiert die negative Zahl.",
      "Er zählt rückwärts, bis das Ergebnis stimmt.",
      "Er kann gar nicht subtrahieren, das macht der Speicher.",
    ],
    answer: 1,
    explanation: "Aus a − b wird a + (−b) – das Rechenwerk addiert nur.",
  },
  {
    id: "vn-easy-15",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question:
      "Beim Zweierkomplement wird das grösste Bit als Vorzeichen gedeutet.",
    answer: true,
    explanation: "Ist das linke Bit 1, gilt die Zahl als negativ.",
  },
  {
    id: "vn-easy-16",
    type: "number",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Wie viele Bits ergeben zwei Bytes zusammen?",
    answer: "16",
    placeholder: "Zahl",
    explanation: "2 · 8 = 16 Bit, damit sind Werte bis 65'535 möglich.",
  },
  {
    id: "vn-easy-17",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Wie viele Bytes reserviert Prof. FLOAT für eine Kommazahl?",
    options: ["1", "2", "4", "8"],
    answer: 2,
    explanation: "Eine einfache Gleitkommazahl belegt 4 Bytes, also 32 Bit.",
  },
  {
    id: "vn-easy-18",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question:
      "Ein Text liegt im Speicher als zusammenhängende Folge von Bytes, die über die ASCII-Tabelle gelesen werden.",
    answer: true,
    explanation:
      "Jede Zelle enthält ein Zeichen; nebeneinander ergeben sie ein Wort.",
  },
  {
    id: "vn-easy-19",
    type: "mc",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Was merkt sich der Archivar DATEI zu jeder Datei?",
    options: [
      "Nur den Namen der Datei",
      "Wo sie beginnt, wie lang sie ist und wie ihre Bytes zu deuten sind",
      "Die Farbe jedes einzelnen Pixels",
      "Wer die Datei erstellt hat",
    ],
    answer: 1,
    explanation: "Anfang, Länge und Deutung – mehr braucht es nicht.",
  },
  {
    id: "vn-easy-20",
    type: "truefalse",
    difficulty: "easy",
    chapter: "von-neumann",
    question: "Eine Bilddatei besteht nur aus Pixeln, ohne weitere Angaben.",
    answer: false,
    explanation:
      "Am Anfang stehen Signatur und Header mit Breite und Höhe, erst danach die Pixel.",
  },

  /* --- Schwer ----------------------------------------------------------- */
  {
    id: "vn-hard-1",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Was ergibt 200 + 100 in einem einzelnen Byte (mit Überlauf)?",
    answer: "44",
    placeholder: "Zahl",
    explanation:
      "300 passt nicht in ein Byte: 300 − 256 = 44, der Übertrag fällt heraus.",
  },
  {
    id: "vn-hard-2",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Was ergibt 11001010 XOR 10101010 als Hexwert? (ohne 0x)",
    answer: "60",
    placeholder: "z. B. 2F",
    explanation: "Unterschiedliche Bits werden 1: 01100000 = 0x60.",
  },
  {
    id: "vn-hard-3",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Was ergibt 11110000 AND 10101010?",
    options: ["10100000", "11111010", "01011010", "10101010"],
    answer: 0,
    explanation: "Nur wo in beiden Bytes eine 1 steht, bleibt eine 1 stehen.",
  },
  {
    id: "vn-hard-4",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Was ergibt 11110000 OR 00001111?",
    options: ["00000000", "11111111", "11110000", "00001111"],
    answer: 1,
    explanation: "Eine einzige 1 pro Spalte genügt – alle Bits werden 1.",
  },
  {
    id: "vn-hard-5",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Welchen Dezimalwert hat NOT 00001111 (als Zahl ohne Vorzeichen)?",
    answer: "240",
    placeholder: "Zahl",
    explanation: "NOT dreht alle Bits: 11110000 = 240.",
  },
  {
    id: "vn-hard-6",
    type: "truefalse",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Ein Byte XOR mit sich selbst ergibt immer 00000000.",
    answer: true,
    explanation: "Alle Bits sind gleich, deshalb wird jedes Ergebnis-Bit 0.",
  },
  {
    id: "vn-hard-7",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Welchen Wertebereich beschreibt ein Byte, wenn man es als Zweierkomplement liest?",
    options: ["0 bis 255", "−128 bis 127", "−255 bis 255", "−127 bis 128"],
    answer: 1,
    explanation:
      "Dasselbe Byte bedeutet 0…255 oder −128…127 – je nach Deutung.",
  },
  {
    id: "vn-hard-8",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Wie bildet man das Zweierkomplement einer Zahl?",
    options: [
      "Alle Bits umdrehen",
      "Alle Bits umdrehen und 1 addieren",
      "1 addieren und dann alle Bits umdrehen",
      "Das linke Bit auf 1 setzen",
    ],
    answer: 1,
    explanation: "Bits invertieren (NOT) und danach 1 addieren.",
  },
  {
    id: "vn-hard-9",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Welches Byte stellt im Zweierkomplement die Zahl −1 dar?",
    options: ["10000001", "11111111", "00000001", "10000000"],
    answer: 1,
    explanation: "NOT 00000001 = 11111110, plus 1 ergibt 11111111.",
  },
  {
    id: "vn-hard-10",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Welchen Dezimalwert hat 10000000, wenn man das Byte als Zweierkomplement liest?",
    answer: "-128",
    placeholder: "z. B. -42",
    explanation:
      "Das Vorzeichenbit ist gesetzt und alle übrigen Bits sind 0: das ist −128.",
  },
  {
    id: "vn-hard-11",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Wie viele verschiedene Werte kann man mit zwei Bytes darstellen?",
    answer: "65536",
    placeholder: "Zahl",
    explanation: "2^16 = 65'536 Werte, also 0 bis 65'535.",
  },
  {
    id: "vn-hard-12",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Bei einer Zahl aus zwei Bytes: Welchen Wert hat eine 1 im kleinsten Bit des hohen Bytes?",
    options: ["1", "128", "256", "65 535"],
    answer: 2,
    explanation: "Das hohe Byte zählt in Schritten von 256, denn 2^8 = 256.",
  },
  {
    id: "vn-hard-13",
    type: "truefalse",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Bei einer Addition über zwei Bytes wandert der Übertrag aus dem niedrigen Byte ins hohe Byte weiter.",
    answer: true,
    explanation:
      "Der Übertrag springt über die Byte-Grenze – so geht nichts verloren.",
  },
  {
    id: "vn-hard-14",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Wie teilt eine 32-Bit-Gleitkommazahl ihre Bits auf?",
    options: [
      "1 Bit Vorzeichen, 8 Bit Exponent, 23 Bit Mantisse",
      "8 Bit Vorzeichen, 8 Bit Exponent, 16 Bit Mantisse",
      "1 Bit Vorzeichen, 23 Bit Exponent, 8 Bit Mantisse",
      "16 Bit Exponent und 16 Bit Mantisse",
    ],
    answer: 0,
    explanation:
      "Ein Vorzeichenbit, acht Bit Exponent, der Rest ist die Mantisse.",
  },
  {
    id: "vn-hard-15",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question: "Wozu dient der Exponent bei einer Gleitkommazahl?",
    options: [
      "Er gibt an, wohin das Komma rutscht (Zweierpotenz).",
      "Er speichert das Vorzeichen der Zahl.",
      "Er zählt die Ziffern der Zahl.",
      "Er gibt die Länge der Datei an.",
    ],
    answer: 0,
    explanation: "6,25 = 1,1001₂ · 2² – der Exponent verschiebt das Komma.",
  },
  {
    id: "vn-hard-16",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Wie viele Bytes belegt der Text „Hallo“ im Speicher (ein Byte pro Zeichen)?",
    answer: "5",
    placeholder: "Zahl",
    explanation: "Fünf Zeichen, also fünf benachbarte Speicherzellen.",
  },
  {
    id: "vn-hard-17",
    type: "number",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Wie viele Bytes brauchen die Pixel eines PNG-Bildes mit 4 × 4 Pixeln (RGB, ohne Header)?",
    answer: "48",
    placeholder: "Zahl",
    explanation: "16 Pixel · 3 Bytes = 48 Bytes.",
  },
  {
    id: "vn-hard-18",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Dieselben Bytes im Speicher können Text, Zahl oder Farbe bedeuten. Wovon hängt das ab?",
    options: [
      "Von der Adresse der Zelle",
      "Von der Deutung, mit der die Bytes gelesen werden",
      "Von der Grösse des Speichers",
      "Vom Bus, über den sie transportiert werden",
    ],
    answer: 1,
    explanation:
      "Bytes sind neutral – erst die Deutung macht daraus Text, Zahl oder Farbe.",
  },
  {
    id: "vn-hard-19",
    type: "truefalse",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Mit AND, OR, NOT und XOR lässt sich jede Rechnung eines Computers zusammensetzen.",
    answer: true,
    explanation:
      "Diese logischen Grundbausteine genügen dem Rechenwerk für alles.",
  },
  {
    id: "vn-hard-20",
    type: "mc",
    difficulty: "hard",
    chapter: "von-neumann",
    question:
      "Warum ist der gemeinsame Bus als „von-Neumann-Flaschenhals“ bekannt?",
    options: [
      "Weil er zu wenig Strom liefert",
      "Weil Daten und Befehle nur nacheinander darüber transportiert werden können",
      "Weil er nur Bytes, aber keine Bits transportiert",
      "Weil er den Speicher zu klein macht",
    ],
    answer: 1,
    explanation:
      "Alles läuft über denselben Weg – das begrenzt die Geschwindigkeit.",
  },
];

/** Fragen der gewählten Kapitel (leere Auswahl = alle Fragen). */
export function getQuestionsByChapters(
  chapterIds,
  catalog = BYTE_QUIZ_QUESTIONS,
) {
  if (!chapterIds || chapterIds.length === 0) return catalog;
  return catalog.filter((question) => chapterIds.includes(question.chapter));
}

export default BYTE_QUIZ_QUESTIONS;
