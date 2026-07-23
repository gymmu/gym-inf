import { Player } from "@remotion/player";
import { useRef } from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ─── Gruvbox ──────────────────────────────────────────────────
const C = {
  bg: "#1d2021",
  bgL: "#3c3836",
  bgLL: "#504945",
  fg: "#ebdbb2",
  gray: "#928374",
  yellow: "#fabd2f",
  green: "#b8bb26",
  blue: "#83a598",
  aqua: "#8ec07c",
  orange: "#fe8019",
  red: "#fb4934",
  purple: "#d3869b",
};

const FPS = 30;

// ─── Hilfsfunktionen ──────────────────────────────────────────
function enc(ch, shift) {
  return String.fromCharCode(((ch.charCodeAt(0) - 65 + shift + 26) % 26) + 65);
}
function encWord(word, shifts) {
  return word
    .split("")
    .map((c, i) => enc(c, shifts[i % shifts.length]))
    .join("");
}

// ─── Shared Komponenten ───────────────────────────────────────
function Box({
  ch,
  color,
  size = 62,
  fontSize = 30,
  rotateX = 0,
  dim = false,
  glow = false,
}) {
  return (
    <div
      style={{
        width: size,
        height: size + 6,
        background: C.bgL,
        border: `2px solid ${dim ? C.bgLL : color}`,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontWeight: 700,
        color: dim ? C.bgLL : color,
        fontFamily: "'Courier New', monospace",
        transform: `rotateX(${rotateX}deg)`,
        backfaceVisibility: "hidden",
        boxShadow: glow ? `0 0 14px ${color}66` : "none",
        flexShrink: 0,
      }}
    >
      {ch}
    </div>
  );
}

function Label({ children, color = C.gray, size = 12 }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        fontSize: size,
        color,
        textAlign: "center",
        marginTop: 3,
      }}
    >
      {children}
    </div>
  );
}

function Title({ children, op = 1 }) {
  return (
    <div
      style={{
        opacity: op,
        color: C.yellow,
        fontSize: 26,
        fontWeight: 700,
        marginBottom: 28,
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

// X-Flip durch `shift` Schritte — immer maximal FLIP_MAX_DUR Frames
const FLIP_MAX_DUR = 30; // feste maximale Dauer egal wie gross shift ist

function FlipBox({
  plain,
  shift,
  startFrame,
  frame,
  size = 62,
  fontSize = 30,
}) {
  const local = frame - startFrame;
  if (local < 0)
    return <Box ch={plain} color={C.yellow} size={size} fontSize={fontSize} />;
  const dur = shift === 0 ? 1 : FLIP_MAX_DUR;
  if (local >= dur)
    return (
      <Box
        ch={enc(plain, shift)}
        color={C.green}
        size={size}
        fontSize={fontSize}
        glow
      />
    );
  const framesPerStep = dur / Math.max(shift, 1);
  const stepFloat = local / framesPerStep;
  const stepIdx = Math.min(Math.floor(stepFloat), shift - 1);
  const stepProg = stepFloat - Math.floor(stepFloat);
  const curCh = String.fromCharCode(
    ((plain.charCodeAt(0) - 65 + stepIdx) % 26) + 65,
  );
  const nxtCh = String.fromCharCode(
    ((plain.charCodeAt(0) - 65 + Math.min(stepIdx + 1, shift)) % 26) + 65,
  );
  const showNext = stepProg >= 0.5;
  const displayCh = showNext ? nxtCh : curCh;
  const rotateX = showNext
    ? interpolate(stepProg, [0.5, 1], [-90, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : interpolate(stepProg, [0, 0.5], [0, 90], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
  return (
    <div style={{ perspective: "300px" }}>
      <Box
        ch={displayCh}
        color={stepIdx === 0 && !showNext ? C.yellow : C.fg}
        rotateX={rotateX}
        size={size}
        fontSize={fontSize}
      />
    </div>
  );
}

// ─── TIMING ───────────────────────────────────────────────────
// Jede Szene: Animationsende + grosszügige Pause damit alles lesbar bleibt
const HOLD = 60; // Frames Pause nach dem letzten Element jeder Szene
const S_DUR = {
  s1: 200, // Caesar +3 gleichmässig
  s2: 215, // Verschiedene Verschiebungen
  s3: 150, // Zahlen + Problem-Highlight
  s4: 410, // Alphabet + Buchstaben ablesen
  s5: 245, // DCBAZ als Schlüssel
  s6: 245, // KEY als Schlüssel
};

const SCENE_START = (() => {
  const keys = Object.keys(S_DUR);
  const acc = {};
  let t = 0;
  for (const k of keys) {
    acc[k] = t;
    t += S_DUR[k];
  }
  acc.total = t;
  return acc;
})();

const TOTAL = SCENE_START.total;

// ─── SZENE 1: Caesar +3 für alle ─────────────────────────────
function Scene1({ frame }) {
  const { fps } = useVideoConfig();
  const local = frame - SCENE_START.s1;
  const PLAIN = "HALLO";
  const SHIFTS = [3, 3, 3, 3, 3];
  const CIPHER = encWord(PLAIN, SHIFTS);

  const titleOp = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flipStart = 30;
  const flipOffset = 20;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title op={titleOp}>
        Schritt 1 — eine Verschiebung für alle Buchstaben
      </Title>

      {/* Verschiebung */}
      <div
        style={{
          opacity: titleOp,
          marginBottom: 20,
          fontFamily: "sans-serif",
          fontSize: 17,
          color: C.gray,
        }}
      >
        Verschiebung:{" "}
        <span style={{ color: C.orange, fontWeight: 700, fontSize: 22 }}>
          +3
        </span>{" "}
        für jeden Buchstaben — das ist Caesar
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {PLAIN.split("").map((ch, i) => {
          const fStart = flipStart + i * flipOffset;
          const plainOp = interpolate(local, [i * 8, i * 8 + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                opacity: plainOp,
              }}
            >
              <Box ch={ch} color={C.yellow} />
              <div
                style={{
                  color: C.orange,
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                +3
              </div>
              <FlipBox
                plain={ch}
                shift={3}
                startFrame={SCENE_START.s1 + fStart}
                frame={frame}
              />
            </div>
          );
        })}
      </div>

      {/* Ergebnis */}
      <div
        style={{
          opacity: interpolate(
            local,
            [
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 8,
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 22,
            ],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          marginTop: 28,
          fontFamily: "'Courier New', monospace",
          fontSize: 22,
          fontWeight: 700,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <span style={{ color: C.yellow }}>{PLAIN}</span>
        <span style={{ color: C.gray }}>→</span>
        <span style={{ color: C.green }}>{CIPHER}</span>
      </div>
    </AbsoluteFill>
  );
}

// ─── SZENE 2: Verschiedene Verschiebungen ─────────────────────
function Scene2({ frame }) {
  const { fps } = useVideoConfig();
  const local = frame - SCENE_START.s2;
  const PLAIN = "HALLO";
  const SHIFTS = [3, 2, 1, 0, 25];
  const CIPHER = encWord(PLAIN, SHIFTS);
  const SHIFT_COLORS = [C.blue, C.orange, C.purple, C.aqua, C.red];

  const titleOp = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flipStart = 35;
  const flipOffset = 22;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title op={titleOp}>
        Schritt 2 — verschiedene Verschiebungen pro Buchstabe
      </Title>

      <div
        style={{
          opacity: titleOp,
          marginBottom: 20,
          fontFamily: "sans-serif",
          fontSize: 16,
          color: C.gray,
        }}
      >
        Jeder Buchstabe bekommt eine{" "}
        <strong style={{ color: C.fg }}>eigene</strong> Verschiebung
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {PLAIN.split("").map((ch, i) => {
          const fStart = flipStart + i * flipOffset;
          const plainOp = interpolate(local, [i * 8, i * 8 + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const col = SHIFT_COLORS[i];
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                opacity: plainOp,
              }}
            >
              <Box ch={ch} color={C.yellow} />
              <div
                style={{
                  color: col,
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                +{SHIFTS[i]}
              </div>
              <FlipBox
                plain={ch}
                shift={SHIFTS[i] === 0 ? 0 : SHIFTS[i]}
                startFrame={SCENE_START.s2 + fStart}
                frame={frame}
              />
            </div>
          );
        })}
      </div>

      {/* Verschiebungsfolge */}
      <div
        style={{
          opacity: interpolate(local, [10, 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          marginTop: 22,
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        {SHIFTS.map((s, i) => (
          <div
            key={i}
            style={{
              width: 42,
              height: 42,
              background: C.bgL,
              border: `2px solid ${SHIFT_COLORS[i]}`,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Courier New', monospace",
              fontSize: 18,
              fontWeight: 700,
              color: SHIFT_COLORS[i],
            }}
          >
            {s}
          </div>
        ))}
      </div>
      <div
        style={{
          opacity: interpolate(local, [12, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: C.gray,
          fontFamily: "sans-serif",
          fontSize: 13,
          marginTop: 6,
        }}
      >
        Verschiebungsfolge
      </div>

      {/* Ergebnis */}
      <div
        style={{
          opacity: interpolate(
            local,
            [
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 8,
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 22,
            ],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          marginTop: 20,
          fontFamily: "'Courier New', monospace",
          fontSize: 22,
          fontWeight: 700,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <span style={{ color: C.yellow }}>{PLAIN}</span>
        <span style={{ color: C.gray }}>→</span>
        <span style={{ color: C.green }}>{CIPHER}</span>
      </div>
    </AbsoluteFill>
  );
}

// ─── SZENE 3: Zahlen als Schlüssel, Problem 25 ────────────────
function Scene3({ frame }) {
  const local = frame - SCENE_START.s3;
  const SHIFTS = [3, 2, 1, 0, 25];
  const SHIFT_COLORS = [C.blue, C.orange, C.purple, C.aqua, C.red];

  const titleOp = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numsOp = interpolate(local, [10, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // 25 wird hervorgehoben
  const highlightOp = interpolate(local, [40, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const problemOp = interpolate(local, [55, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title op={titleOp}>Die Verschiebungsfolge ist der Schlüssel</Title>

      {/* Zahlen */}
      <div
        style={{
          opacity: numsOp,
          display: "flex",
          gap: 20,
          alignItems: "center",
        }}
      >
        {SHIFTS.map((s, i) => {
          const isProb = s === 25;
          const scale = isProb
            ? interpolate(local, [40, 55], [1, 1.3], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            : 1;
          return (
            <div
              key={i}
              style={{
                transform: `scale(${scale})`,
                width: isProb ? 60 : 52,
                height: isProb ? 60 : 52,
                background: isProb
                  ? interpolate(local, [40, 55], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }) > 0.5
                    ? "#2e1a1a"
                    : C.bgL
                  : C.bgL,
                border: `2px solid ${isProb && local > 45 ? C.red : SHIFT_COLORS[i]}`,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Courier New', monospace",
                fontSize: isProb ? 24 : 20,
                fontWeight: 700,
                color: isProb && local > 45 ? C.red : SHIFT_COLORS[i],
                boxShadow:
                  isProb && local > 45 ? `0 0 14px ${C.red}55` : "none",
              }}
            >
              {s}
            </div>
          );
        })}
      </div>

      {/* Problem-Hinweis */}
      <div
        style={{
          opacity: problemOp,
          marginTop: 28,
          background: "#2e1a1a",
          border: `2px solid ${C.red}`,
          borderRadius: 10,
          padding: "12px 28px",
          fontFamily: "sans-serif",
          fontSize: 17,
          color: C.fg,
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        <span style={{ color: C.red, fontWeight: 700 }}>Problem:</span> Die Zahl{" "}
        <span style={{ color: C.red, fontWeight: 700 }}>25</span> ist
        zweistellig — wie viele Stellen hat eine Zahl im Schlüssel? Das macht
        die Übertragung umständlich.
      </div>

      {/* Lösung-Hinweis */}
      <div
        style={{
          opacity: interpolate(local, [75, 90], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          marginTop: 16,
          fontFamily: "sans-serif",
          fontSize: 16,
          color: C.gray,
        }}
      >
        Lösung: Statt Zahlen →{" "}
        <span style={{ color: C.yellow, fontWeight: 700 }}>Buchstaben</span>{" "}
        verwenden
      </div>
    </AbsoluteFill>
  );
}

// ─── SZENE 4: Alphabet + Positionen ablesen ───────────────────
function Scene4({ frame }) {
  const { fps } = useVideoConfig();
  const local = frame - SCENE_START.s4;
  const SHIFTS = [3, 2, 1, 0, 25];
  const SHIFT_COLORS = [C.blue, C.orange, C.purple, C.aqua, C.red];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const KEY_LETTERS = SHIFTS.map((s) => ALPHABET[s]); // D, C, B, A, Z

  const titleOp = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Alphabet erscheint
  const alphaStart = 15;
  const alphaStag = 5;
  // Markierungen erscheinen
  const markStart = alphaStart + 26 * alphaStag + 10;
  const markStag = 14;
  // Buchstaben werden abgelesen
  const readStart = markStart + SHIFTS.length * markStag + 20;
  const readStag = 16;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title op={titleOp}>Buchstabe statt Zahl: Position im Alphabet</Title>

      {/* Alphabet-Streifen */}
      <div
        style={{
          display: "flex",
          gap: 4,
          flexWrap: "nowrap",
          marginBottom: 16,
        }}
      >
        {ALPHABET.split("").map((letter, idx) => {
          const markedAt = SHIFTS.indexOf(idx);
          const isMarked = markedAt >= 0;
          const markOp = isMarked
            ? interpolate(
                local,
                [
                  markStart + markedAt * markStag,
                  markStart + markedAt * markStag + 12,
                ],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
              )
            : 0;
          const alphaOp = interpolate(
            local,
            [alphaStart + idx * alphaStag, alphaStart + idx * alphaStag + 8],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const col = isMarked ? SHIFT_COLORS[markedAt] : C.gray;

          return (
            <div
              key={idx}
              style={{
                opacity: alphaOp,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: isMarked && markOp > 0.3 ? C.bgLL : C.bgL,
                  border: `1.5px solid ${isMarked && markOp > 0.3 ? col : C.bgLL}`,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    isMarked && markOp > 0.5 ? `0 0 10px ${col}55` : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: isMarked && markOp > 0.3 ? col : C.gray,
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {letter}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: C.gray,
                    fontFamily: "sans-serif",
                  }}
                >
                  {idx}
                </div>
              </div>
              {/* Pfeil nach unten für markierte */}
              {isMarked && (
                <div
                  style={{
                    opacity: markOp,
                    color: col,
                    fontSize: 14,
                    lineHeight: 1,
                    marginTop: 2,
                  }}
                >
                  ↓
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Ablese-Ergebnis: Zahlen → Buchstaben */}
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
          marginTop: 8,
        }}
      >
        {SHIFTS.map((s, i) => {
          const readOp = interpolate(
            local,
            [readStart + i * readStag, readStart + i * readStag + 14],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const sp = spring({
            frame: local - (readStart + i * readStag),
            fps,
            config: { damping: 13, stiffness: 120 },
          });
          const scale = interpolate(sp, [0, 1], [0.5, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                opacity: readOp,
                transform: `scale(${scale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: 18,
                  fontWeight: 700,
                  color: SHIFT_COLORS[i],
                }}
              >
                {s}
              </div>
              <div
                style={{
                  color: SHIFT_COLORS[i],
                  fontSize: 13,
                  fontFamily: "sans-serif",
                }}
              >
                ↓
              </div>
              <Box
                ch={KEY_LETTERS[i]}
                color={SHIFT_COLORS[i]}
                size={52}
                fontSize={24}
                glow
              />
            </div>
          );
        })}
      </div>

      {/* Schlüsselwort */}
      <div
        style={{
          opacity: interpolate(
            local,
            [readStart + 5 * readStag + 10, readStart + 5 * readStag + 25],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          marginTop: 20,
          fontFamily: "sans-serif",
          fontSize: 17,
          color: C.gray,
        }}
      >
        Schlüsselwort:{" "}
        {KEY_LETTERS.map((l, i) => (
          <span
            key={i}
            style={{
              color: SHIFT_COLORS[i],
              fontFamily: "'Courier New', monospace",
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            {l}
          </span>
        ))}{" "}
        — statt{" "}
        <span style={{ color: C.gray, fontFamily: "'Courier New', monospace" }}>
          3·2·1·0·25
        </span>
      </div>
    </AbsoluteFill>
  );
}

// ─── SZENE 5: DCBAZ als Schlüssel ────────────────────────────
function Scene5({ frame }) {
  const { fps } = useVideoConfig();
  const local = frame - SCENE_START.s5;
  const PLAIN = "HALLO";
  const KEY_WORD = "DCBAZ";
  const SHIFTS = KEY_WORD.split("").map((k) => k.charCodeAt(0) - 65);
  const KEY_COLORS = [C.blue, C.orange, C.purple, C.aqua, C.red];
  const CIPHER = encWord(PLAIN, SHIFTS);

  const titleOp = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const colsIn = 20;
  const flipStart = 55;
  const flipOffset = 22;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title op={titleOp}>Schlüsselwort «DCBAZ» — das Vigenère-Verfahren</Title>

      <div style={{ display: "flex", gap: 20 }}>
        {PLAIN.split("").map((ch, i) => {
          const col = KEY_COLORS[i];
          const colOp = interpolate(
            local,
            [colsIn + i * 8, colsIn + i * 8 + 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const fStart = flipStart + i * flipOffset;
          return (
            <div
              key={i}
              style={{
                opacity: colOp,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box ch={ch} color={C.yellow} />
              <div
                style={{
                  color: col,
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {KEY_WORD[i]} = +{SHIFTS[i]}
              </div>
              <FlipBox
                plain={ch}
                shift={SHIFTS[i]}
                startFrame={SCENE_START.s5 + fStart}
                frame={frame}
              />
            </div>
          );
        })}
      </div>

      <div
        style={{
          opacity: interpolate(
            local,
            [
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 8,
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 22,
            ],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          marginTop: 24,
          fontFamily: "'Courier New', monospace",
          fontSize: 22,
          fontWeight: 700,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <span style={{ color: C.yellow }}>{PLAIN}</span>
        <span style={{ color: C.gray }}>+</span>
        <span style={{ fontWeight: 700 }}>
          {KEY_WORD.split("").map((k, i) => (
            <span key={i} style={{ color: KEY_COLORS[i] }}>
              {k}
            </span>
          ))}
        </span>
        <span style={{ color: C.gray }}>=</span>
        <span style={{ color: C.green }}>{CIPHER}</span>
      </div>
    </AbsoluteFill>
  );
}

// ─── SZENE 6: KEY als Schlüssel ───────────────────────────────
function Scene6({ frame }) {
  const { fps } = useVideoConfig();
  const local = frame - SCENE_START.s6;
  const PLAIN = "HALLO";
  const KEY_WORD = "KEY";
  const SHIFTS = PLAIN.split("").map(
    (_, i) => KEY_WORD[i % KEY_WORD.length].charCodeAt(0) - 65,
  );
  const KEY_COLORS = [C.blue, C.orange, C.purple, C.blue, C.orange];
  const CIPHER = encWord(PLAIN, SHIFTS);

  const titleOp = interpolate(local, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const colsIn = 20;
  const flipStart = 55;
  const flipOffset = 22;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title op={titleOp}>Schlüsselwort «KEY» — zyklisch wiederholt</Title>

      {/* Zyklus-Anzeige */}
      <div
        style={{
          opacity: interpolate(local, [8, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          marginBottom: 18,
          fontFamily: "'Courier New', monospace",
          fontSize: 17,
          color: C.gray,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        {PLAIN.split("").map((_, i) => (
          <div
            key={i}
            style={{
              width: 32,
              height: 32,
              background: C.bgL,
              border: `1.5px solid ${KEY_COLORS[i]}`,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: 700,
              color: KEY_COLORS[i],
              fontFamily: "'Courier New', monospace",
            }}
          >
            {KEY_WORD[i % KEY_WORD.length]}
          </div>
        ))}
        <span style={{ color: C.gray, fontSize: 14, fontFamily: "sans-serif" }}>
          (KEY wiederholt sich)
        </span>
      </div>

      <div style={{ display: "flex", gap: 20 }}>
        {PLAIN.split("").map((ch, i) => {
          const col = KEY_COLORS[i];
          const keyLetter = KEY_WORD[i % KEY_WORD.length];
          const colOp = interpolate(
            local,
            [colsIn + i * 8, colsIn + i * 8 + 12],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const fStart = flipStart + i * flipOffset;
          return (
            <div
              key={i}
              style={{
                opacity: colOp,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box ch={ch} color={C.yellow} />
              <div
                style={{
                  color: col,
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {keyLetter} = +{SHIFTS[i]}
              </div>
              <FlipBox
                plain={ch}
                shift={SHIFTS[i]}
                startFrame={SCENE_START.s6 + fStart}
                frame={frame}
              />
            </div>
          );
        })}
      </div>

      <div
        style={{
          opacity: interpolate(
            local,
            [
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 8,
              flipStart + 4 * flipOffset + FLIP_MAX_DUR + 22,
            ],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          marginTop: 24,
          fontFamily: "'Courier New', monospace",
          fontSize: 22,
          fontWeight: 700,
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <span style={{ color: C.yellow }}>{PLAIN}</span>
        <span style={{ color: C.gray }}>+</span>
        <span>
          {PLAIN.split("").map((_, i) => (
            <span key={i} style={{ color: KEY_COLORS[i] }}>
              {KEY_WORD[i % KEY_WORD.length]}
            </span>
          ))}
        </span>
        <span style={{ color: C.gray }}>=</span>
        <span style={{ color: C.green }}>{CIPHER}</span>
      </div>
    </AbsoluteFill>
  );
}

// ─── Hauptkomposition ─────────────────────────────────────────
function VigenereVizComp() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      {frame < SCENE_START.s2 && <Scene1 frame={frame} />}
      {frame >= SCENE_START.s2 && frame < SCENE_START.s3 && (
        <Scene2 frame={frame} />
      )}
      {frame >= SCENE_START.s3 && frame < SCENE_START.s4 && (
        <Scene3 frame={frame} />
      )}
      {frame >= SCENE_START.s4 && frame < SCENE_START.s5 && (
        <Scene4 frame={frame} />
      )}
      {frame >= SCENE_START.s5 && frame < SCENE_START.s6 && (
        <Scene5 frame={frame} />
      )}
      {frame >= SCENE_START.s6 && <Scene6 frame={frame} />}
    </AbsoluteFill>
  );
}

// ─── Export ───────────────────────────────────────────────────
export default function VigenereViz() {
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
        component={VigenereVizComp}
        durationInFrames={TOTAL}
        compositionWidth={1280}
        compositionHeight={720}
        fps={FPS}
        style={{ width: "100%", aspectRatio: "16/9" }}
        controls
        loop={false}
        autoPlay={false}
        acknowledgeRemotionLicense
        onEnded={() => {
          playerRef.current?.seekTo(TOTAL - 1);
          playerRef.current?.pause();
        }}
      />
    </div>
  );
}
