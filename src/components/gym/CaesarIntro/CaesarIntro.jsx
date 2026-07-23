import { Player } from "@remotion/player";
import { useRef } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

// ─── Gruvbox colours ──────────────────────────────────────────
const C = {
  bg: "#1d2021",
  bgL: "#3c3836",
  bgLL: "#504945",
  fg: "#ebdbb2",
  gray: "#928374",
  yellow: "#fabd2f",
  green: "#b8bb26",
  blue: "#83a598",
  orange: "#fe8019",
  red: "#fb4934",
};

// ─── Wörter ──────────────────────────────────────────────────
const ENCRYPTED = "YHUVFKOXHVVHOXQJ"; // VERSCHLUESSELUNG + 3
const DECRYPTED = "VERSCHLUESSELUNG";
const SHIFT = 3;

const FPS = 30;

// ─── Timing ───────────────────────────────────────────────────
// Jeder Buchstabe dreht sich in SPIN_FRAMES durch SHIFT Halbschritte.
// Pro Schritt (= 1 Buchstaben-Sprung): SPIN_FRAMES / SHIFT Frames.
const SPIN_FRAMES = 36; // Frames für einen vollständigen Spin (alle 3 Schritte)

// Wann startet der erste Buchstabe
const FIRST_START = 20;
const FIRST_END = FIRST_START + SPIN_FRAMES;

// Pause nach dem ersten Buchstaben bevor der zweite beginnt
const PAUSE_AFTER_FIRST = 18;

// Stagger-Funktion: beschleunigt von Buchstabe 2..N
// i=1 → Buchstabe 2, i=12 → Buchstabe 13
// Stagger[i] = max(4, 14 - i)  → beginnt bei 14, fällt auf 4
function staggerFor(i) {
  return Math.max(4, 14 - (i - 1));
}

// Startframe für jeden Buchstaben berechnen
const START_FRAMES = ENCRYPTED.split("").map((_, i) => {
  if (i === 0) return FIRST_START;
  if (i === 1) return FIRST_END + PAUSE_AFTER_FIRST;
  // i >= 2: kumulierter Stagger ab Buchstabe 2
  let f = FIRST_END + PAUSE_AFTER_FIRST;
  for (let j = 1; j < i; j++) {
    f += staggerFor(j);
  }
  return f;
});

const LAST_LETTER_END = START_FRAMES[START_FRAMES.length - 1] + SPIN_FRAMES;
const TOTAL_FRAMES = LAST_LETTER_END + 55;

// ─── Hilfsfunktionen ─────────────────────────────────────────
function prevLetter(ch, steps) {
  const base = 65; // alles Großbuchstaben
  return String.fromCharCode(
    ((ch.charCodeAt(0) - base - steps + 26) % 26) + base,
  );
}

// ─── Einzelner Buchstaben-Würfel ──────────────────────────────
// Echter 3D Y-Achsen-Flip: Buchstabe dreht sich von 0° → 90° (verschwindet),
// nächster kommt von -90° → 0°. Das passiert SHIFT mal hintereinander.
function LetterCube({ encChar, decChar, startFrame, frame }) {
  const localFrame = frame - startFrame;
  const notStarted = localFrame < 0;
  // +1 Toleranz: finished sobald der letzte Schritt vollständig ist
  const finished = localFrame >= SPIN_FRAMES - 1;

  // Fortschritt 0..1 über alle SHIFT Schritte — nur solange noch nicht fertig
  const progress = interpolate(localFrame, [0, SPIN_FRAMES - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Welcher Schritt (0..SHIFT-1) und wie weit darin (0..1)
  const stepFloat = Math.min(progress * SHIFT, SHIFT - 0.001);
  const stepIndex = Math.floor(stepFloat);
  const stepProgress = stepFloat - stepIndex;

  // Buchstaben für aktuellen und nächsten Slot
  const currentChar = prevLetter(encChar, stepIndex);
  const nextChar =
    stepIndex + 1 >= SHIFT ? decChar : prevLetter(encChar, stepIndex + 1);

  // X-Rotation: erste Hälfte jedes Schritts dreht von 0 → 90° (current geht weg),
  // zweite Hälfte von -90° → 0° (next kommt rein)
  const showNext = stepProgress >= 0.5;
  const displayChar = showNext ? nextChar : currentChar;

  const rotateX = showNext
    ? interpolate(stepProgress, [0.5, 1.0], [-90, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : interpolate(stepProgress, [0.0, 0.5], [0, 90], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  // Farbe
  const isDone = finished;
  const isOrig = notStarted || (stepIndex === 0 && stepProgress < 0.5);
  const borderColor = isDone ? C.green : isOrig ? C.red : C.gray;
  const textColor = isDone ? C.green : isOrig ? C.red : C.fg;
  const glowColor = isDone ? C.green : isOrig ? C.red : "transparent";

  const boxStyle = {
    width: 58,
    height: 66,
    background: C.bgL,
    border: `2px solid ${borderColor}`,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: 700,
    color: isDone ? C.green : isOrig && !notStarted ? C.red : textColor,
    fontFamily: "'Courier New', monospace",
    boxShadow: `0 0 12px ${glowColor}55`,
    // 3D-Rotation frame-genau (kein CSS transition!)
    transform:
      notStarted || finished ? "rotateX(0deg)" : `rotateX(${rotateX}deg)`,
    backfaceVisibility: "hidden",
  };

  // Angezeigter Buchstabe: immer eindeutig
  const shownChar = notStarted ? encChar : finished ? decChar : displayChar;

  return (
    <div style={{ perspective: "400px" }}>
      <div style={boxStyle}>{shownChar}</div>
    </div>
  );
}

// ─── Hauptkomposition ─────────────────────────────────────────
function CaesarIntroComposition() {
  const frame = useCurrentFrame();

  // Frage immer sichtbar
  const questionOp = 1;

  // Hinweis erscheint wenn alle fertig sind
  const hintOp = interpolate(
    frame,
    [LAST_LETTER_END, LAST_LETTER_END + 18],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        fontFamily: "'Noto Sans', sans-serif",
      }}
    >
      {/* Frage */}
      <div
        style={{
          opacity: questionOp,
          color: C.yellow,
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 44,
          letterSpacing: 1,
        }}
      >
        Können Sie das entschlüsseln?
      </div>

      {/* Buchstaben-Reihe */}
      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "nowrap",
        }}
      >
        {ENCRYPTED.split("").map((encChar, i) => (
          <LetterCube
            key={i}
            encChar={encChar}
            decChar={DECRYPTED[i]}
            startFrame={START_FRAMES[i]}
            frame={frame}
          />
        ))}
      </div>

      {/* Hinweis */}
      <div
        style={{
          opacity: hintOp,
          marginTop: 40,
          color: C.gray,
          fontSize: 18,
          letterSpacing: 0.5,
        }}
      >
        Schlüssel: <span style={{ color: C.yellow, fontWeight: 700 }}>+3</span>
        {"  ·  "}
        Jeder Buchstabe 3 Stellen vorwärts im Alphabet
      </div>
    </AbsoluteFill>
  );
}

// ─── Exportierter React-Player ────────────────────────────────
export default function CaesarIntro() {
  const playerRef = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 8,
        overflow: "hidden",
        border: `1px solid #504945`,
      }}
    >
      <Player
        ref={playerRef}
        component={CaesarIntroComposition}
        durationInFrames={TOTAL_FRAMES}
        compositionWidth={1280}
        compositionHeight={720}
        fps={FPS}
        style={{ width: "100%", aspectRatio: "16/9" }}
        controls
        loop={false}
        autoPlay={false}
        acknowledgeRemotionLicense
        onEnded={() => {
          playerRef.current?.seekTo(TOTAL_FRAMES - 1);
          playerRef.current?.pause();
        }}
      />
    </div>
  );
}
