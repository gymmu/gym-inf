import { useCallback, useMemo, useState } from "react";
import Biit from "@/components/gym/Biit/Biit";
import styles from "./ByteQuiz.module.css";
import {
  BYTE_QUIZ_CHAPTERS,
  BYTE_QUIZ_QUESTIONS,
  getQuestionsByChapters,
} from "./questions";

const BIT_COUNT = 8;

/** Fisher-Yates-Shuffle (nicht mutierend). */
function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

const EASY_COUNT = BIT_COUNT / 2;

/**
 * Wählt die Fragen für ein Byte aus: die ersten vier Bits erhalten einfache
 * Fragen, die letzten vier Bits schwere. Fehlen Fragen einer Stufe, wird mit
 * den übrigen Fragen aufgefüllt.
 */
function pickQuestions(catalog, count = BIT_COUNT) {
  const easy = shuffle(catalog.filter((q) => q.difficulty !== "hard"));
  const hard = shuffle(catalog.filter((q) => q.difficulty === "hard"));

  const picked = [
    ...easy.slice(0, EASY_COUNT),
    ...hard.slice(0, count - EASY_COUNT),
  ];

  if (picked.length < count) {
    const rest = shuffle(catalog).filter((q) => !picked.includes(q));
    picked.push(...rest.slice(0, count - picked.length));
  }

  // Notfall: Reicht der Katalog nicht für ein ganzes Byte, werden Fragen
  // wiederholt, damit das Quiz trotzdem spielbar bleibt.
  while (picked.length < count && catalog.length > 0) {
    picked.push(catalog[picked.length % catalog.length]);
  }

  return picked.slice(0, count);
}

function randomByte() {
  return Math.floor(Math.random() * 256);
}

const bitAt = (byte, index) => (byte >> index) & 1;

const toHex = (byte) => byte.toString(16).toUpperCase().padStart(2, "0");

const toBinary = (byte) => byte.toString(2).padStart(BIT_COUNT, "0");

/** Reaktionen von Biit, abhängig von der Anzahl übereinstimmender Bits. */
const REACTIONS = [
  {
    min: 8,
    mood: "happy",
    title: "Biit ist überglücklich!",
    text: "Du hast die Gruppe exakt gefunden – Biit hat seine Freunde wieder!",
  },
  {
    min: 7,
    mood: "happy",
    title: "Biit strahlt.",
    text: "Nur ein Bit daneben – fast die richtige Gruppe.",
  },
  {
    min: 6,
    mood: "happy",
    title: "Biit ist erfreut.",
    text: "Die Gruppe sieht schon sehr vertraut aus.",
  },
  {
    min: 5,
    mood: "neutral",
    title: "Biit ist zuversichtlich.",
    text: "Mehr als die Hälfte stimmt – aber es fehlt noch etwas.",
  },
  {
    min: 4,
    mood: "neutral",
    title: "Biit ist unsicher.",
    text: "Die Hälfte passt. Ist das nun seine Gruppe oder nicht?",
  },
  {
    min: 3,
    mood: "sad",
    title: "Biit ist enttäuscht.",
    text: "Das sind eher Fremde als Freunde.",
  },
  {
    min: 1,
    mood: "sad",
    title: "Biit ist traurig.",
    text: "Diese Gruppe hat kaum etwas mit seiner gemeinsam.",
  },
  {
    min: 0,
    mood: "sad",
    title: "Biit ist völlig niedergeschlagen.",
    text: "Kein einziges Bit stimmt – seine Gruppe ist verloren.",
  },
];

const getReaction = (matches) =>
  REACTIONS.find((reaction) => matches >= reaction.min);

/** Normalisiert eine Zahleneingabe, damit sie einfach verglichen werden kann. */
function normalizeNumber(input) {
  return String(input)
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/^0X/, "")
    .replace(/^0B/, "")
    .replace(/,/g, ".")
    .replace(/^0+(?=\d)/, "");
}

function isCorrect(question, answer) {
  if (question.type === "number") {
    return normalizeNumber(answer) === normalizeNumber(question.answer);
  }
  if (question.type === "mc") {
    return Number(answer) === Number(question.answer);
  }
  // truefalse
  return answer === question.answer;
}

/**
 * ByteQuiz – finde die Gruppe von Biit.
 *
 * Zu Beginn wird ein zufälliges Ziel-Byte erzeugt, das nur als Hexwert
 * angezeigt wird (die Bits erscheinen beim Darüberfahren mit der Maus).
 * Jede Frage baut ein Bit des eigenen Bytes: richtig beantwortet = 1,
 * falsch = 0, unbeantwortet = grau. Die Fragen füllen das Byte von hinten
 * nach vorne (Frage 1 = kleinstes Bit, rechts).
 *
 * Während des Spiels reagiert Biit direkt auf richtig/falsch. Ob ein Bit zur
 * gesuchten Gruppe passt, muss die spielende Person selbst herausfinden – erst
 * am Schluss richtet sich Biits Stimmung nach der Anzahl übereinstimmender
 * Bits.
 *
 * Vor dem Start wählt die spielende Person aus, aus welchen Kapiteln die
 * Fragen kommen sollen (mehrere Kapitel sind möglich).
 *
 * @param {Array} [questions] Fragekatalog (Standard: alle Fragen)
 * @param {Array} [chapters] Kapitel-Metadaten (Standard: alle Kapitel)
 */
export default function ByteQuiz({
  questions = BYTE_QUIZ_QUESTIONS,
  chapters = BYTE_QUIZ_CHAPTERS,
}) {
  // Kapitel, die im Katalog tatsächlich Fragen haben.
  const availableChapters = useMemo(
    () =>
      chapters
        .map((chapter) => ({
          ...chapter,
          count: questions.filter((q) => q.chapter === chapter.id).length,
        }))
        .filter((chapter) => chapter.count > 0),
    [chapters, questions],
  );

  const [started, setStarted] = useState(false);
  const [chapterIds, setChapterIds] = useState(() =>
    availableChapters.map((chapter) => chapter.id),
  );
  const [selected, setSelected] = useState(() => questions.slice(0, BIT_COUNT));
  const [target, setTarget] = useState(0);
  const [results, setResults] = useState(() => Array(BIT_COUNT).fill(null));
  const [current, setCurrent] = useState(0);
  const [draft, setDraft] = useState("");

  const pool = useMemo(
    () => getQuestionsByChapters(chapterIds, questions),
    [chapterIds, questions],
  );

  const toggleChapter = (id) => {
    setChapterIds((prev) =>
      prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id],
    );
  };

  /** Startet ein neues Byte mit den Fragen der gewählten Kapitel. */
  const start = useCallback(() => {
    if (pool.length === 0) return;
    setSelected(pickQuestions(pool, BIT_COUNT));
    setTarget(randomByte());
    setResults(Array(BIT_COUNT).fill(null));
    setCurrent(0);
    setDraft("");
    setStarted(true);
  }, [pool]);

  /** Zurück zur Kapitelauswahl. */
  const backToSetup = useCallback(() => {
    setStarted(false);
    setResults(Array(BIT_COUNT).fill(null));
    setCurrent(0);
    setDraft("");
  }, []);

  const byteValue = useMemo(
    () =>
      results.reduce(
        (acc, result, index) => (result === true ? acc | (1 << index) : acc),
        0,
      ),
    [results],
  );

  const matches = useMemo(
    () =>
      results.reduce((acc, result, index) => {
        if (result === null) return acc;
        const ownBit = result ? 1 : 0;
        return ownBit === bitAt(target, index) ? acc + 1 : acc;
      }, 0),
    [results, target],
  );

  const answeredCount = results.filter((r) => r !== null).length;
  const finished = answeredCount === BIT_COUNT;
  const question = selected[current];

  const answer = (value) => {
    if (!question || results[current] !== null) return;
    setResults((prev) => {
      const next = [...prev];
      next[current] = isCorrect(question, value);
      return next;
    });
  };

  const goNext = () => {
    setDraft("");
    setCurrent((prev) => Math.min(prev + 1, BIT_COUNT - 1));
  };

  const result = results[current];
  const answered = result !== null;
  const reaction = getReaction(matches);

  const chapterTitle = (id) =>
    availableChapters.find((chapter) => chapter.id === id)?.title ?? id;

  /* --- Startbildschirm: Kapitelauswahl ----------------------------- */
  if (!started) {
    return (
      <div className={styles.quiz}>
        <div className={styles.setup}>
          <div className={styles.setupBiit}>
            <Biit variant="large" size={150} animate={false} value="neutral" />
          </div>

          <div className={styles.setupBody}>
            <h3 className={styles.setupTitle}>
              Woraus sollen die Fragen kommen?
            </h3>
            <p className={styles.setupHint}>
              Wähle ein oder mehrere Kapitel aus. Danach stellt Biit dir{" "}
              {BIT_COUNT} Fragen – jede richtige Antwort setzt ein Bit auf 1.
            </p>

            <ul className={styles.chapterList}>
              {availableChapters.map((chapter) => {
                const checked = chapterIds.includes(chapter.id);
                return (
                  <li key={chapter.id}>
                    <label
                      className={`${styles.chapterOption} ${
                        checked ? styles.chapterChecked : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleChapter(chapter.id)}
                      />
                      <span>
                        <strong>{chapter.title}</strong>
                        <span className={styles.chapterMeta}>
                          {chapter.count} Fragen
                        </span>
                        {chapter.description && (
                          <span className={styles.chapterDescription}>
                            {chapter.description}
                          </span>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <p className={styles.setupHint}>
              {pool.length > 0
                ? `Ausgewählt: ${pool.length} Fragen`
                : "Bitte mindestens ein Kapitel auswählen."}
            </p>

            <button
              type="button"
              className={styles.next}
              disabled={pool.length === 0}
              onClick={start}
            >
              Quiz starten
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      {/* --- Ziel-Byte: nur Hex, Bits beim Hovern ---------------------- */}
      <div className={styles.targetBox}>
        <span className={styles.targetLabel}>Biits Gruppe</span>
        <button type="button" className={styles.target}>
          0x{toHex(target)}
          <span className={styles.targetBits}>{toBinary(target)}</span>
        </button>
      </div>

      {/* --- Eigenes Byte ---------------------------------------------- */}
      <div className={styles.byteBox}>
        <div className={styles.bits}>
          {Array.from({ length: BIT_COUNT }, (_, displayIndex) => {
            const questionIndex = BIT_COUNT - 1 - displayIndex;
            const state = results[questionIndex];
            const bit = state === true ? 1 : 0;
            const matched =
              state !== null && bit === bitAt(target, questionIndex);
            const stateClass =
              state === null
                ? styles.pending
                : state
                  ? styles.one
                  : styles.zero;

            return (
              <div className={styles.bitCell} key={`bit-${questionIndex}`}>
                <span
                  className={`${styles.bit} ${stateClass} ${
                    questionIndex === current && !finished ? styles.active : ""
                  } ${finished && matched ? styles.matched : ""} ${
                    finished && !matched ? styles.mismatched : ""
                  }`}
                >
                  {bit}
                </span>
                <span className={styles.bitLabel}>{questionIndex + 1}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.values}>
          <span className={styles.hex}>0x{toHex(byteValue)}</span>
          {finished && (
            <span className={styles.dec}>
              {matches} von {BIT_COUNT} Bits stimmen
            </span>
          )}
        </div>
      </div>

      {/* --- Frage ------------------------------------------------------ */}
      {question && (
        <div className={styles.stage}>
          <div className={styles.progress}>
            Frage {current + 1} von {BIT_COUNT} –{" "}
            {question.difficulty === "hard" ? "schwer" : "einfach"} –{" "}
            {chapterTitle(question.chapter)}
          </div>

          <div className={styles.questionRow}>
            <div className={styles.questionBody}>
              <p className={styles.questionText}>{question.question}</p>

              {question.type === "truefalse" && (
                <div className={styles.options}>
                  {[
                    { label: "Wahr", value: true },
                    { label: "Falsch", value: false },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      className={styles.option}
                      disabled={answered}
                      onClick={() => answer(option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {question.type === "mc" && (
                <div className={styles.options}>
                  {question.options.map((option, index) => (
                    <button
                      key={option}
                      type="button"
                      className={styles.option}
                      disabled={answered}
                      onClick={() => answer(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {question.type === "number" && (
                <form
                  className={styles.numberForm}
                  onSubmit={(event) => {
                    event.preventDefault();
                    answer(draft);
                  }}
                >
                  <input
                    className={styles.numberInput}
                    type="text"
                    inputMode="text"
                    value={draft}
                    disabled={answered}
                    placeholder={question.placeholder ?? "Antwort"}
                    onChange={(event) => setDraft(event.target.value)}
                  />
                  <button
                    type="submit"
                    className={styles.option}
                    disabled={answered || draft.trim() === ""}
                  >
                    Prüfen
                  </button>
                </form>
              )}

              {answered && (
                <div
                  className={`${styles.feedback} ${
                    result ? styles.feedbackOk : styles.feedbackBad
                  }`}
                >
                  <strong>{result ? "Richtig." : "Falsch."}</strong>
                  {question.explanation && <span> {question.explanation}</span>}
                </div>
              )}

              {answered && !finished && (
                <button type="button" className={styles.next} onClick={goNext}>
                  Weiter
                </button>
              )}
            </div>

            <div className={styles.biit}>
              <Biit
                variant="large"
                size={170}
                animate={false}
                value={answered ? (result ? 1 : 0) : "neutral"}
              />
            </div>
          </div>
        </div>
      )}

      {/* --- Abschluss -------------------------------------------------- */}
      {finished && (
        <div className={styles.summary}>
          <div className={styles.summaryBiit}>
            <Biit
              variant="large"
              size={200}
              animate={false}
              value={matches / BIT_COUNT}
              mood={reaction.mood}
            />
          </div>
          <div>
            <h3 className={styles.summaryTitle}>{reaction.title}</h3>
            <p>{reaction.text}</p>
            <p>
              Gesuchte Gruppe: <strong>0x{toHex(target)}</strong> (
              {toBinary(target)})
              <br />
              Dein Byte: <strong>0x{toHex(byteValue)}</strong> (
              {toBinary(byteValue)})
              <br />
              Übereinstimmende Bits: <strong>{matches}</strong> von {BIT_COUNT}
            </p>
            <div className={styles.summaryActions}>
              <button type="button" className={styles.next} onClick={start}>
                Neue Gruppe suchen
              </button>
              <button
                type="button"
                className={styles.secondary}
                onClick={backToSetup}
              >
                Kapitel ändern
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
