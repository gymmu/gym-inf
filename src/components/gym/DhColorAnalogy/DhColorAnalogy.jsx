import { useState } from "react";
import style from "./DhColorAnalogy.module.css";

// ─── Farbmischungs-Analogie für Diffie-Hellman ──────────────────
//
// Schritte:
//   0 — Ausgangszustand: gemeinsame Farbe (Gelb) liegt offen
//   1 — Alice mischt ihre Geheimfarbe (Blau) dazu → Türkis
//   2 — Bob mischt seine Geheimfarbe (Rot) dazu → Orange
//   3 — Austausch: Alice sendet Türkis, Bob sendet Orange
//   4 — Alice mischt ihr Blau zu Bobs Orange → Braun/Oliv
//   5 — Bob mischt sein Rot zu Alices Türkis → Braun/Oliv
//   6 — Ergebnis: Beide haben dieselbe Farbe!

const STEPS = [
  {
    title: "Die gemeinsame Farbe",
    desc: "Eine öffentliche Farbe wird vereinbart — jeder kann sie sehen. Das entspricht den öffentlichen Parametern p und g.",
    eve: "Eve sieht: Gelb",
  },
  {
    title: "Alice mischt ihre Geheimfarbe",
    desc: "Alice mischt ihre geheime Farbe Blau mit dem gemeinsamen Gelb. Das Ergebnis ist Türkis — ihre öffentliche Komponente.",
    eve: "Eve sieht: Gelb, Türkis",
  },
  {
    title: "Bob mischt seine Geheimfarbe",
    desc: "Bob mischt seine geheime Farbe Rot mit dem gemeinsamen Gelb. Das Ergebnis ist Orange — seine öffentliche Komponente.",
    eve: "Eve sieht: Gelb, Türkis, Orange",
  },
  {
    title: "Austausch: Türkis und Orange werden geteilt",
    desc: "Alice schickt Türkis an Bob. Bob schickt Orange an Alice. Eve sieht beide Farben — aber nicht Blau oder Rot.",
    eve: "Eve sieht: Gelb, Türkis, Orange — kann sie nicht trennen!",
  },
  {
    title: "Alice mischt ihr Blau zu Bobs Orange",
    desc: "Alice nimmt Bobs Orange und mischt ihr geheimes Blau dazu. Sie erhält Gelb+Rot+Blau.",
    eve: "Eve kennt nur Orange, nicht das Blau",
  },
  {
    title: "Bob mischt sein Rot zu Alices Türkis",
    desc: "Bob nimmt Alices Türkis und mischt sein geheimes Rot dazu. Er erhält Gelb+Blau+Rot.",
    eve: "Eve kennt nur Türkis, nicht das Rot",
  },
  {
    title: "Gemeinsamer geheimer Schlüssel!",
    desc: "Beide haben nun Gelb+Blau+Rot — denselben gemeinsamen Farbton. Eve sah nur Gelb, Türkis und Orange — sie kann den geheimen Farbton nicht rekonstruieren.",
    eve: "Eve kann die Einzelfarben nicht aus Türkis/Orange herauslösen.",
  },
];

// Farbdefinitionen (CSS-kompatibel)
const YELLOW = "#fabd2f";
const BLUE = "#458588";
const RED = "#cc241d";
const TEAL = "#689d6a"; // Gelb + Blau → Türkis
const ORANGE = "#d65d0e"; // Gelb + Rot → Orange
const MIXED = "#7c6f64"; // Gelb + Blau + Rot → Dunkeloliv

// Transparenz für "versteckte" Farben
const HIDDEN = "#3c3836";

export default function DhColorAnalogy() {
  const [step, setStep] = useState(0);

  const isLast = step === STEPS.length - 1;

  function next() {
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function reset() {
    setStep(0);
  }

  // ── Bestimme was sichtbar ist je nach Schritt ─────────────
  // Alice-Seite: Geheimfarbe Blau
  const aliceSecretVisible = false; // nie sichtbar für Aussenansicht
  // Bob-Seite: Geheimfarbe Rot
  const bobSecretVisible = false; // nie sichtbar

  // Gemeinsame Farbe: immer sichtbar ab Schritt 0
  const sharedVisible = step >= 0;

  // Alices Mischung (Türkis): ab Schritt 1
  const aliceMixVisible = step >= 1;

  // Bobs Mischung (Orange): ab Schritt 2
  const bobMixVisible = step >= 2;

  // Pfeil Alice→Bob: ab Schritt 3
  const arrowAliceBob = step >= 3;

  // Pfeil Bob→Alice: ab Schritt 3
  const arrowBobAlice = step >= 3;

  // Alices Endfarbmischung: ab Schritt 4
  const aliceFinalVisible = step >= 4;

  // Bobs Endfarbmischung: ab Schritt 5
  const bobFinalVisible = step >= 5;

  // Gemeinsamer Schlüssel Banner: Schritt 6
  const successVisible = step >= 6;

  // ── SVG-Aufbau: viewBox 700 × 340 ────────────────────────
  // Links: Alice  |  Mitte: Gemeinsam + Eve  |  Rechts: Bob

  const ALICE_X = 120;
  const BOB_X = 580;
  const MID_X = 350;
  const ROW1_Y = 90; // Gemeinsame Farbe + Geheimnisse
  const ROW2_Y = 210; // Mischungen
  const ROW3_Y = 290; // Endresultat

  const R = 30; // Kreisradius

  return (
    <div className={style.wrapper}>
      <svg
        viewBox="0 0 700 340"
        className={style.svg}
        aria-label="Diffie-Hellman Farbmischungs-Analogie"
      >
        {/* ── Labels Personen ─────────────────────────────── */}
        <text
          x={ALICE_X}
          y={28}
          textAnchor="middle"
          fill="#83a598"
          fontSize={13}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          Alice
        </text>
        <text
          x={BOB_X}
          y={28}
          textAnchor="middle"
          fill="#fabd2f"
          fontSize={13}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          Bob
        </text>
        <text
          x={MID_X}
          y={28}
          textAnchor="middle"
          fill="#928374"
          fontSize={11}
          style={{ userSelect: "none" }}
        >
          Öffentlicher Kanal
        </text>

        {/* ── Eve-Label ──────────────────────────────────── */}
        <text
          x={MID_X}
          y={320}
          textAnchor="middle"
          fill="#928374"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          👁 Eve — {STEPS[step].eve}
        </text>

        {/* ══ REIHE 1: Ausgangsmaterial ══ */}

        {/* Gemeinsame Farbe (Gelb) — Mitte oben */}
        {sharedVisible && (
          <g>
            <circle cx={MID_X} cy={ROW1_Y} r={R} fill={YELLOW} opacity={0.95} />
            <text
              x={MID_X}
              y={ROW1_Y + 5}
              textAnchor="middle"
              fill="#1d2021"
              fontSize={9}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              Gelb
            </text>
            <text
              x={MID_X}
              y={ROW1_Y + 44}
              textAnchor="middle"
              fill="#a89984"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              gemeinsam (öffentlich)
            </text>
          </g>
        )}

        {/* Alice: Geheimfarbe Blau — immer verdeckt */}
        <g>
          <circle
            cx={ALICE_X}
            cy={ROW1_Y}
            r={R}
            fill={step >= 1 ? BLUE : HIDDEN}
            opacity={0.9}
          />
          <text
            x={ALICE_X}
            y={ROW1_Y + 5}
            textAnchor="middle"
            fill={step >= 1 ? "#ebdbb2" : "#504945"}
            fontSize={9}
            fontWeight="700"
            style={{ userSelect: "none" }}
          >
            {step >= 1 ? "Blau" : "?"}
          </text>
          <text
            x={ALICE_X}
            y={ROW1_Y + 44}
            textAnchor="middle"
            fill="#928374"
            fontSize={8}
            style={{ userSelect: "none" }}
          >
            {step >= 1 ? "Alices Geheimnis" : "Alices Geheimnis"}
          </text>
        </g>

        {/* Bob: Geheimfarbe Rot — immer verdeckt */}
        <g>
          <circle
            cx={BOB_X}
            cy={ROW1_Y}
            r={R}
            fill={step >= 2 ? RED : HIDDEN}
            opacity={0.9}
          />
          <text
            x={BOB_X}
            y={ROW1_Y + 5}
            textAnchor="middle"
            fill={step >= 2 ? "#ebdbb2" : "#504945"}
            fontSize={9}
            fontWeight="700"
            style={{ userSelect: "none" }}
          >
            {step >= 2 ? "Rot" : "?"}
          </text>
          <text
            x={BOB_X}
            y={ROW1_Y + 44}
            textAnchor="middle"
            fill="#928374"
            fontSize={8}
            style={{ userSelect: "none" }}
          >
            {step >= 2 ? "Bobs Geheimnis" : "Bobs Geheimnis"}
          </text>
        </g>

        {/* ══ Pfeile: Gelb → Alice / Gelb → Bob ══ */}
        {step >= 1 && (
          <line
            x1={MID_X - R - 4}
            y1={ROW1_Y}
            x2={ALICE_X + R + 4}
            y2={ROW1_Y}
            stroke="#504945"
            strokeWidth={1.5}
            strokeDasharray="4 3"
            markerEnd="url(#arrow)"
          />
        )}
        {step >= 2 && (
          <line
            x1={MID_X + R + 4}
            y1={ROW1_Y}
            x2={BOB_X - R - 4}
            y2={ROW1_Y}
            stroke="#504945"
            strokeWidth={1.5}
            strokeDasharray="4 3"
            markerEnd="url(#arrow)"
          />
        )}

        {/* ══ REIHE 2: Mischungen ══ */}

        {/* Alices Mischung: Gelb+Blau = Türkis */}
        {aliceMixVisible && (
          <g>
            <circle cx={ALICE_X} cy={ROW2_Y} r={R} fill={TEAL} opacity={0.95} />
            <text
              x={ALICE_X}
              y={ROW2_Y + 5}
              textAnchor="middle"
              fill="#ebdbb2"
              fontSize={9}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              Türkis
            </text>
            <text
              x={ALICE_X}
              y={ROW2_Y + 44}
              textAnchor="middle"
              fill="#a89984"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              Alices öffentl. Wert
            </text>
            {/* Pfeil von Reihe 1 nach Reihe 2 bei Alice */}
            <line
              x1={ALICE_X}
              y1={ROW1_Y + R + 4}
              x2={ALICE_X}
              y2={ROW2_Y - R - 4}
              stroke="#504945"
              strokeWidth={1.5}
              markerEnd="url(#arrow)"
            />
          </g>
        )}

        {/* Bobs Mischung: Gelb+Rot = Orange */}
        {bobMixVisible && (
          <g>
            <circle cx={BOB_X} cy={ROW2_Y} r={R} fill={ORANGE} opacity={0.95} />
            <text
              x={BOB_X}
              y={ROW2_Y + 5}
              textAnchor="middle"
              fill="#ebdbb2"
              fontSize={9}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              Orange
            </text>
            <text
              x={BOB_X}
              y={ROW2_Y + 44}
              textAnchor="middle"
              fill="#a89984"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              Bobs öffentl. Wert
            </text>
            {/* Pfeil von Reihe 1 nach Reihe 2 bei Bob */}
            <line
              x1={BOB_X}
              y1={ROW1_Y + R + 4}
              x2={BOB_X}
              y2={ROW2_Y - R - 4}
              stroke="#504945"
              strokeWidth={1.5}
              markerEnd="url(#arrow)"
            />
          </g>
        )}

        {/* ══ Austausch-Pfeile (Schritt 3) ══ */}
        {arrowAliceBob && (
          <g>
            {/* Türkis fliegt zu Bob */}
            <path
              d={`M ${ALICE_X + R + 4} ${ROW2_Y} Q ${MID_X} ${ROW2_Y - 40} ${BOB_X - R - 4} ${ROW2_Y}`}
              fill="none"
              stroke={TEAL}
              strokeWidth={2}
              strokeDasharray={step >= 4 ? "none" : "5 3"}
              markerEnd="url(#arrowTeal)"
            />
            <text
              x={MID_X}
              y={ROW2_Y - 46}
              textAnchor="middle"
              fill={TEAL}
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              Türkis →
            </text>
          </g>
        )}
        {arrowBobAlice && (
          <g>
            {/* Orange fliegt zu Alice */}
            <path
              d={`M ${BOB_X - R - 4} ${ROW2_Y + 20} Q ${MID_X} ${ROW2_Y + 60} ${ALICE_X + R + 4} ${ROW2_Y + 20}`}
              fill="none"
              stroke={ORANGE}
              strokeWidth={2}
              strokeDasharray={step >= 5 ? "none" : "5 3"}
              markerEnd="url(#arrowOrange)"
            />
            <text
              x={MID_X}
              y={ROW2_Y + 70}
              textAnchor="middle"
              fill={ORANGE}
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              ← Orange
            </text>
          </g>
        )}

        {/* ══ REIHE 3: Endresultat ══ */}

        {/* Alice: Orange + Blau = Gemischt */}
        {aliceFinalVisible && (
          <g>
            <circle
              cx={ALICE_X}
              cy={ROW3_Y}
              r={R}
              fill={MIXED}
              opacity={0.95}
            />
            <text
              x={ALICE_X}
              y={ROW3_Y + 4}
              textAnchor="middle"
              fill="#ebdbb2"
              fontSize={8}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              G+B+R
            </text>
            <text
              x={ALICE_X}
              y={ROW3_Y + 44}
              textAnchor="middle"
              fill={successVisible ? "#b8bb26" : "#a89984"}
              fontSize={8}
              fontWeight={successVisible ? "700" : "400"}
              style={{ userSelect: "none" }}
            >
              {successVisible ? "= Gemeinsamer Schlüssel!" : "Alices Endfarbe"}
            </text>
          </g>
        )}

        {/* Bob: Türkis + Rot = Gemischt */}
        {bobFinalVisible && (
          <g>
            <circle cx={BOB_X} cy={ROW3_Y} r={R} fill={MIXED} opacity={0.95} />
            <text
              x={BOB_X}
              y={ROW3_Y + 4}
              textAnchor="middle"
              fill="#ebdbb2"
              fontSize={8}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              G+B+R
            </text>
            <text
              x={BOB_X}
              y={ROW3_Y + 44}
              textAnchor="middle"
              fill={successVisible ? "#b8bb26" : "#a89984"}
              fontSize={8}
              fontWeight={successVisible ? "700" : "400"}
              style={{ userSelect: "none" }}
            >
              {successVisible ? "= Gemeinsamer Schlüssel!" : "Bobs Endfarbe"}
            </text>
          </g>
        )}

        {/* Erfolgs-Banner in der Mitte */}
        {successVisible && (
          <g>
            <rect
              x={MID_X - 90}
              y={ROW3_Y - 16}
              width={180}
              height={32}
              rx={6}
              fill="#1d2021"
              stroke="#b8bb26"
              strokeWidth={1.5}
            />
            <text
              x={MID_X}
              y={ROW3_Y + 4}
              textAnchor="middle"
              fill="#b8bb26"
              fontSize={10}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              Beide haben K = G+B+R!
            </text>
            <text
              x={MID_X}
              y={ROW3_Y + 18}
              textAnchor="middle"
              fill="#928374"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              Eve kannte nur Türkis und Orange — K bleibt geheim
            </text>
          </g>
        )}

        {/* ── Pfeilspitzen-Definitionen ─────────────────── */}
        <defs>
          <marker
            id="arrow"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 Z" fill="#504945" />
          </marker>
          <marker
            id="arrowTeal"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 Z" fill={TEAL} />
          </marker>
          <marker
            id="arrowOrange"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L6,3 Z" fill={ORANGE} />
          </marker>
        </defs>
      </svg>

      {/* ── Schrittbeschreibung ──────────────────────────── */}
      <div
        className={style.infoBox}
        style={{ borderColor: successVisible ? "#b8bb26" : "#504945" }}
      >
        <strong style={{ color: successVisible ? "#b8bb26" : "#83a598" }}>
          Schritt {step + 1} / {STEPS.length}: {STEPS[step].title}
        </strong>
        <p
          style={{
            margin: "0.3em 0 0 0",
            fontSize: "0.82em",
            color: "#ebdbb2",
          }}
        >
          {STEPS[step].desc}
        </p>
      </div>

      {/* ── Steuerung ───────────────────────────────────── */}
      <div className={style.controls}>
        <button
          className={style.resetBtn}
          onClick={reset}
          disabled={step === 0}
        >
          ↺ Zurücksetzen
        </button>
        <button className={style.nextBtn} onClick={next} disabled={isLast}>
          {isLast ? "Fertig!" : "Nächster Schritt →"}
        </button>
      </div>
    </div>
  );
}
