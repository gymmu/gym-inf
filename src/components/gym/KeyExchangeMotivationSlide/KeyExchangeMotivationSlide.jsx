import { useState } from "react";
import s from "./KeyExchangeMotivationSlide.module.css";

// -- Scenario data ---------------------------------------------------------

const STEPS = [
  {
    id: "problem",
    label: "Das Problem",
    desc: "Alice und Bob wollen verschluesselt kommunizieren -- aber sie haben noch keinen gemeinsamen Schluessel.",
  },
  {
    id: "send-key",
    label: "Schluessel senden?",
    desc: "Alice sendet den Schluessel ueber den unsicheren Kanal. Eve liest alles mit -- der Schluessel ist kompromittiert.",
    eveGetsKey: true,
  },
  {
    id: "meet",
    label: "Persoenlich treffen?",
    desc: "Treffen funktioniert fuer zwei Personen -- aber nicht fuer Millionen taeglich neuer HTTPS-Verbindungen.",
    eveGetsKey: false,
    impractical: true,
  },
  {
    id: "dh",
    label: "Diffie-Hellman!",
    desc: "Beide senden nur oeffentliche Werte. Eve sieht alles -- kann daraus aber den gemeinsamen Schluessel nicht ableiten.",
    eveGetsKey: false,
    dh: true,
  },
];

// -- SVG diagram -----------------------------------------------------------

function ChannelDiagram({ step }) {
  const eveGetsKey = step?.eveGetsKey ?? false;
  const isDh = step?.dh ?? false;
  const isImpractical = step?.impractical ?? false;

  // Colors
  const aliceCol = "#83a598";
  const bobCol = "#b8bb26";
  const eveCol = "#fb4934";
  const keyCol = "#fabd2f";
  const dhPubCol = "#d3869b";

  const W = 700;
  const H = 310;

  // Positions
  const aliceX = 90;
  const bobX = 610;
  const eveX = 350;
  // lineY=110: Kreis Mitte. Oben (y<80): Labels/Pakete. Unten (y>140): Name+KBox. Eve: y=250+
  const lineY = 110;
  const personR = 28;
  // derived
  const circleBottom = lineY + personR; // 138
  const nameY = circleBottom + 16; // 154  -- "Alice"/"Bob" label
  const kBoxY = circleBottom + 34; // 172  -- K-Box top
  const kBoxH = 24;
  const eveY = kBoxY + kBoxH + 40; // 236  -- Eve circle center

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" className={s.diagramSvg}>
      {/* -- channel line -- */}
      <line
        x1={aliceX + personR}
        y1={lineY}
        x2={bobX - personR}
        y2={lineY}
        stroke="#3c3836"
        strokeWidth="3"
        strokeDasharray="8 5"
      />
      <text
        x={W / 2}
        y={lineY - 18}
        textAnchor="middle"
        fill="#504945"
        fontSize="11"
        fontFamily="monospace"
      >
        unsicherer Kanal (Internet)
      </text>

      {/* -- Eve tap line -- */}
      {!isImpractical && (
        <line
          x1={eveX}
          y1={lineY}
          x2={eveX}
          y2={eveY - personR - 2}
          stroke={eveCol}
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.5"
        />
      )}

      {/* -- Alice -- */}
      <circle
        cx={aliceX}
        cy={lineY}
        r={personR}
        fill="#1d2021"
        stroke={aliceCol}
        strokeWidth="2"
      />
      <text
        x={aliceX}
        y={lineY + 5}
        textAnchor="middle"
        fill={aliceCol}
        fontSize="13"
        fontFamily="monospace"
        fontWeight="700"
      >
        A
      </text>
      <text
        x={aliceX}
        y={nameY}
        textAnchor="middle"
        fill={aliceCol}
        fontSize="11"
        fontFamily="monospace"
      >
        Alice
      </text>

      {/* -- Bob -- */}
      <circle
        cx={bobX}
        cy={lineY}
        r={personR}
        fill="#1d2021"
        stroke={bobCol}
        strokeWidth="2"
      />
      <text
        x={bobX}
        y={lineY + 5}
        textAnchor="middle"
        fill={bobCol}
        fontSize="13"
        fontFamily="monospace"
        fontWeight="700"
      >
        B
      </text>
      <text
        x={bobX}
        y={nameY}
        textAnchor="middle"
        fill={bobCol}
        fontSize="11"
        fontFamily="monospace"
      >
        Bob
      </text>

      {/* -- Eve -- */}
      {!isImpractical && (
        <>
          <circle
            cx={eveX}
            cy={eveY}
            r={personR}
            fill="#1d2021"
            stroke={eveCol}
            strokeWidth="2"
          />
          <text
            x={eveX}
            y={eveY + 5}
            textAnchor="middle"
            fill={eveCol}
            fontSize="13"
            fontFamily="monospace"
            fontWeight="700"
          >
            E
          </text>
          <text
            x={eveX}
            y={eveY + personR + 14}
            textAnchor="middle"
            fill={eveCol}
            fontSize="11"
            fontFamily="monospace"
          >
            Eve
          </text>
        </>
      )}

      {/* -- Scenario: send-key -- */}
      {step?.id === "send-key" && (
        <>
          <defs>
            <marker
              id="arr"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={keyCol} />
            </marker>
            <marker
              id="arr-eve"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={eveCol} />
            </marker>
          </defs>

          {/* Key packet on wire */}
          <rect
            x={eveX - 18}
            y={lineY - 14}
            width={36}
            height={26}
            rx="5"
            fill="#2a2000"
            stroke={keyCol}
            strokeWidth="1.5"
          />
          <text
            x={eveX}
            y={lineY + 4}
            textAnchor="middle"
            fill={keyCol}
            fontSize="12"
            fontFamily="monospace"
            fontWeight="700"
          >
            K
          </text>

          {/* Arrow alice -> packet */}
          <line
            x1={aliceX + personR + 4}
            y1={lineY}
            x2={eveX - 22}
            y2={lineY}
            stroke={keyCol}
            strokeWidth="1.5"
            markerEnd="url(#arr)"
          />

          {/* Eve tap arrow down to Eve circle */}
          <line
            x1={eveX}
            y1={lineY + 14}
            x2={eveX}
            y2={eveY - personR - 4}
            stroke={eveCol}
            strokeWidth="2"
            markerEnd="url(#arr-eve)"
          />

          {/* "liest K!" label next to Eve */}
          <rect
            x={eveX + personR + 8}
            y={eveY - 13}
            width={70}
            height={24}
            rx="4"
            fill="rgba(251,73,52,0.12)"
            stroke={eveCol}
            strokeWidth="1"
          />
          <text
            x={eveX + personR + 43}
            y={eveY + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={eveCol}
            fontSize="11"
            fontFamily="monospace"
            fontWeight="700"
          >
            liest K!
          </text>
        </>
      )}

      {/* -- Scenario: meet -- */}
      {step?.id === "meet" && (
        <>
          {/* "physisches Treffen" label above line */}
          <text
            x={W / 2}
            y={lineY - 48}
            textAnchor="middle"
            fill="#928374"
            fontSize="10"
            fontFamily="monospace"
          >
            physisches Treffen
          </text>

          {/* Key packet above line */}
          <rect
            x={W / 2 - 18}
            y={lineY - 40}
            width={36}
            height={26}
            rx="5"
            fill="#1a2a00"
            stroke={bobCol}
            strokeWidth="1.5"
          />
          <text
            x={W / 2}
            y={lineY - 24}
            textAnchor="middle"
            fill={bobCol}
            fontSize="12"
            fontFamily="monospace"
            fontWeight="700"
          >
            K
          </text>

          {/* ? on wire */}
          <text
            x={W / 2}
            y={lineY + 6}
            textAnchor="middle"
            fill="#504945"
            fontSize="20"
            fontFamily="monospace"
            opacity="0.5"
          >
            ?
          </text>

          {/* scale problem box -- positioned at fixed Y below nameY */}
          <rect
            x={W / 2 - 100}
            y={nameY + 20}
            width={200}
            height={24}
            rx="4"
            fill="rgba(254,128,25,0.1)"
            stroke="#fe8019"
            strokeWidth="1"
          />
          <text
            x={W / 2}
            y={nameY + 32}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#fe8019"
            fontSize="10"
            fontFamily="monospace"
          >
            Milliarden Verbindungen / Tag
          </text>
        </>
      )}

      {/* -- Scenario: dh -- */}
      {step?.id === "dh" && (
        <>
          <defs>
            <marker
              id="arr-dh"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={dhPubCol} />
            </marker>
            <marker
              id="arr-dh2"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill={dhPubCol} />
            </marker>
          </defs>

          {/* -- Packets float ABOVE the channel line (y=60..100) -- */}

          {/* Alice -> g^a mod p packet, left half */}
          <rect
            x={140}
            y={lineY - 42}
            width={82}
            height={26}
            rx="5"
            fill="#280028"
            stroke={dhPubCol}
            strokeWidth="1.5"
          />
          <text
            x={181}
            y={lineY - 25}
            textAnchor="middle"
            fill={dhPubCol}
            fontSize="11"
            fontFamily="monospace"
            fontWeight="700"
          >
            g^a mod p
          </text>
          {/* arrow on wire from alice toward bob */}
          <line
            x1={aliceX + personR + 4}
            y1={lineY}
            x2={bobX - personR - 4}
            y2={lineY}
            stroke={dhPubCol}
            strokeWidth="1.5"
            markerEnd="url(#arr-dh)"
          />

          {/* Bob -> g^b mod p packet, right half */}
          <rect
            x={478}
            y={lineY - 42}
            width={82}
            height={26}
            rx="5"
            fill="#280028"
            stroke={dhPubCol}
            strokeWidth="1.5"
          />
          <text
            x={519}
            y={lineY - 25}
            textAnchor="middle"
            fill={dhPubCol}
            fontSize="11"
            fontFamily="monospace"
            fontWeight="700"
          >
            g^b mod p
          </text>

          {/* -- K boxes under Alice and Bob (at kBoxY) -- */}
          <rect
            x={aliceX - 46}
            y={kBoxY}
            width={92}
            height={kBoxH}
            rx="4"
            fill="rgba(131,165,152,0.1)"
            stroke={aliceCol}
            strokeWidth="1.5"
          />
          <text
            x={aliceX}
            y={kBoxY + kBoxH / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={aliceCol}
            fontSize="10"
            fontFamily="monospace"
          >
            K = g^(ab) mod p
          </text>

          <rect
            x={bobX - 46}
            y={kBoxY}
            width={92}
            height={kBoxH}
            rx="4"
            fill="rgba(184,187,38,0.1)"
            stroke={bobCol}
            strokeWidth="1.5"
          />
          <text
            x={bobX}
            y={kBoxY + kBoxH / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={bobCol}
            fontSize="10"
            fontFamily="monospace"
          >
            K = g^(ab) mod p
          </text>

          {/* "gleicher K" label centered between the two boxes */}
          <text
            x={W / 2}
            y={kBoxY + kBoxH / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#b8bb26"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="700"
          >
            gleicher K!
          </text>

          {/* -- Eve box directly above Eve circle -- */}
          <rect
            x={eveX - 90}
            y={eveY - personR - 34}
            width={180}
            height={24}
            rx="4"
            fill="rgba(251,73,52,0.07)"
            stroke={eveCol}
            strokeWidth="1"
          />
          <text
            x={eveX}
            y={eveY - personR - 22}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={eveCol}
            fontSize="10"
            fontFamily="monospace"
          >
            sieht g^a, g^b -- kann K nicht berechnen
          </text>
        </>
      )}

      {/* -- Scenario: problem (initial) -- */}
      {step?.id === "problem" && (
        <>
          {/* ? on wire */}
          <text
            x={W / 2}
            y={lineY + 6}
            textAnchor="middle"
            fill="#504945"
            fontSize="24"
            fontFamily="monospace"
            fontWeight="700"
          >
            ?
          </text>

          {/* kein K boxes at kBoxY */}
          <rect
            x={aliceX - 30}
            y={kBoxY}
            width={60}
            height={kBoxH}
            rx="4"
            fill="rgba(131,165,152,0.06)"
            stroke={aliceCol}
            strokeWidth="1"
          />
          <text
            x={aliceX}
            y={kBoxY + kBoxH / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#928374"
            fontSize="10"
            fontFamily="monospace"
          >
            kein K
          </text>

          <rect
            x={bobX - 30}
            y={kBoxY}
            width={60}
            height={kBoxH}
            rx="4"
            fill="rgba(184,187,38,0.06)"
            stroke={bobCol}
            strokeWidth="1"
          />
          <text
            x={bobX}
            y={kBoxY + kBoxH / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#928374"
            fontSize="10"
            fontFamily="monospace"
          >
            kein K
          </text>
        </>
      )}
    </svg>
  );
}

// -- Main component -------------------------------------------------------

export default function KeyExchangeMotivationSlide() {
  const [stepIdx, setStepIdx] = useState(0);
  const step = STEPS[stepIdx];

  return (
    <div className={s.root}>
      {/* -- Step buttons -- */}
      <div className={s.stepRow}>
        {STEPS.map((st, i) => (
          <button
            key={st.id}
            className={`${s.stepBtn} ${i === stepIdx ? s.stepBtnActive : ""} ${i < stepIdx ? s.stepBtnDone : ""}`}
            onClick={() => setStepIdx(i)}
          >
            <span className={s.stepNum}>{i + 1}</span>
            <span className={s.stepLabel}>{st.label}</span>
          </button>
        ))}
      </div>

      {/* -- Diagram -- */}
      <div className={s.diagramWrap}>
        <ChannelDiagram step={step} />
      </div>

      {/* -- Description -- */}
      <div
        className={`${s.descBox} ${step.eveGetsKey ? s.descBoxDanger : step.dh ? s.descBoxSuccess : step.impractical ? s.descBoxWarn : s.descBoxNeutral}`}
      >
        {step.desc}
      </div>

      {/* -- Key insight row -- */}
      <div className={s.insightRow}>
        <div className={s.insightCard} style={{ borderColor: "#fb4934" }}>
          <span className={s.insightTitle} style={{ color: "#fb4934" }}>
            Das Problem
          </span>
          <span className={s.insightVal}>
            Schluessel direkt senden -- Eve liest mit
          </span>
        </div>
        <div className={s.insightCard} style={{ borderColor: "#fe8019" }}>
          <span className={s.insightTitle} style={{ color: "#fe8019" }}>
            Nicht skalierbar
          </span>
          <span className={s.insightVal}>
            Physisch treffen fuer jede Verbindung unmoeglich
          </span>
        </div>
        <div className={s.insightCard} style={{ borderColor: "#b8bb26" }}>
          <span className={s.insightTitle} style={{ color: "#b8bb26" }}>
            Loesung: DH
          </span>
          <span className={s.insightVal}>
            Oeffentliche Werte austauschen -- privater Schluessel bleibt geheim
          </span>
        </div>
      </div>
    </div>
  );
}
