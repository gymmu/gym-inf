import { Player } from "@remotion/player";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ─── Colours (Gruvbox) ────────────────────────────────────────
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

// ─── Nachrichten ──────────────────────────────────────────────
const MSG_SHORT = "HALLO";
const MSG_LONG = "HALLO NETZ";

const FPS = 30;

function toBin(ch) {
  return ch.charCodeAt(0).toString(2).padStart(8, "0");
}

// ─── Pakete aus langer Nachricht ─────────────────────────────
const LONG_CHARS = MSG_LONG.split("");
const PACKET_GROUPS = [
  LONG_CHARS.slice(0, 4), // "HALL"  → Paket 1
  LONG_CHARS.slice(4, 7), // "O N"   → Paket 2
  LONG_CHARS.slice(7, 10), // "ETZ"   → Paket 3
];

// ─── TCP-Demo: Ankunftsreihenfolge absichtlich falsch ─────────
// Pakete werden gesendet als 1,2,3 aber kommen an als 3,1,2
const SEND_ORDER = [0, 1, 2]; // Sendeindizes (Paket 1,2,3)
const ARRIVE_ORDER = [2, 0, 1]; // Ankunftsreihenfolge (Paket 3 kommt zuerst an)

// ─── Router für Szene 4 ───────────────────────────────────────
const ROUTER_COLORS = [C.orange, C.purple, C.aqua];
const ROUTER_LABELS = ["Router A", "Router B", "Router C"];

// ─── Timing (frames) ─────────────────────────────────────────
const T = {
  // Szene 1: HALLO → ASCII
  textAppear: 0,
  asciiStart: 40,
  scene1End: 160,

  // Szene 2: lange Nachricht → Bits
  scene2Start: 160,
  bytesReveal: 175,
  scene2End: 400,

  // Szene 3: Bits in Pakete verpacken
  scene3Start: 400,
  packetsSpring: 415,
  scene3End: 620,

  // Szene 4: Pakete reisen, kommen in falscher Reihenfolge an
  scene4Start: 620,
  packetsLeave: 640,
  // Jedes Paket hat eigene Ankunftszeit (ARRIVE_ORDER[i] bestimmt Stagger)
  reorderShow: 820, // Reorder-Erklärung erscheint
  scene4End: 940,

  // Szene 5: Empfänger — Bits → Zeichen → Text
  scene5Start: 940,
  bitsAppear: 960,
  decodeStart: 1060,
  textReveal: 1160,
  totalFrames: 1320,
};

// ─── Wiederverwendbare Bit-Zellen-Komponente (HTML) ───────────
function BitCells({ bits, color }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {bits.split("").map((b, j) => (
        <div
          key={j}
          style={{
            width: 15,
            height: 19,
            background: b === "1" ? C.green : C.bgLL,
            border: `1px solid ${b === "1" ? C.green : C.bgL}`,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 9,
            fontWeight: 700,
            color: b === "1" ? C.bg : C.gray,
          }}
        >
          {b}
        </div>
      ))}
    </div>
  );
}

// ─── Zeichenbox (Brief/Leerzeichen-aware) ────────────────────
function CharBox({ ch, size = 40, fontSize = 20, borderColor }) {
  const isSpace = ch === " ";
  return (
    <div
      style={{
        width: size,
        height: size,
        background: isSpace ? "transparent" : C.bgL,
        border: isSpace
          ? `2px dashed ${C.gray}`
          : `2px solid ${borderColor || C.blue}`,
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isSpace ? 9 : fontSize,
        fontWeight: 700,
        color: isSpace ? C.gray : C.yellow,
      }}
    >
      {isSpace ? "space" : ch}
    </div>
  );
}

// ─── SCENE 1: HALLO → ASCII (unverändert) ────────────────────
function SceneTextToAscii({ frame }) {
  const chars = MSG_SHORT.split("");

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 36,
          color: C.yellow,
          fontSize: 20,
          fontWeight: 700,
          opacity: interpolate(
            frame,
            [T.textAppear, T.textAppear + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Schritt 1: Text → ASCII-Nummern
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        {chars.map((ch, i) => {
          const delay = T.textAppear + i * 8;
          const charOp = interpolate(frame, [delay, delay + 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const asciiProg = interpolate(
            frame,
            [T.asciiStart + i * 10, T.asciiStart + i * 10 + 20],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const ascii = ch.charCodeAt(0);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                opacity: charOp,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: C.bgL,
                  border: `2px solid ${C.blue}`,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: 700,
                  color: C.yellow,
                }}
              >
                {ch}
              </div>
              <div style={{ color: C.gray, fontSize: 18, opacity: asciiProg }}>
                ↓
              </div>
              <div
                style={{
                  width: 64,
                  height: 40,
                  background: C.bgLL,
                  border: `2px solid ${C.orange}`,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.orange,
                  opacity: asciiProg,
                }}
              >
                {ascii}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

// ─── SCENE 2: Lange Nachricht → Bits ─────────────────────────
function SceneLongMessageBytes({ frame }) {
  const chars = LONG_CHARS;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.yellow,
          fontSize: 20,
          fontWeight: 700,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [T.scene2Start, T.scene2Start + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Schritt 2: Längere Nachricht → Bits
      </div>

      <div
        style={{
          position: "absolute",
          top: 72,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.gray,
          fontSize: 14,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [T.bytesReveal + 10, T.bytesReveal + 30],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Jedes Zeichen wird in 8 Bits umgewandelt
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          maxWidth: 860,
          marginTop: 20,
        }}
      >
        {chars.map((ch, i) => {
          const delay = T.bytesReveal + i * 10;
          const op = interpolate(frame, [delay, delay + 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const bits = toBin(ch);

          return (
            <div
              key={i}
              style={{
                opacity: op,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <CharBox ch={ch} size={46} fontSize={22} />
              <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                {bits.split("").map((b, j) => {
                  const bitDelay = delay + j * 3;
                  const bitOp = interpolate(
                    frame,
                    [bitDelay, bitDelay + 6],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                  );
                  return (
                    <div
                      key={j}
                      style={{
                        width: 16,
                        height: 20,
                        background: b === "1" ? C.green : C.bgLL,
                        border: `1px solid ${b === "1" ? C.green : C.bgL}`,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        fontWeight: 700,
                        color: b === "1" ? C.bg : C.gray,
                        opacity: bitOp,
                      }}
                    >
                      {b}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          background: C.bgL,
          border: `1px solid ${C.bgLL}`,
          borderRadius: 8,
          padding: "10px 24px",
          color: C.fg,
          fontSize: 14,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [
              T.bytesReveal + chars.length * 10 + 20,
              T.bytesReveal + chars.length * 10 + 40,
            ],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        {MSG_LONG.length} Zeichen = {MSG_LONG.length * 8} Bits → werden in{" "}
        <strong style={{ color: C.orange }}>3 Pakete</strong> aufgeteilt
      </div>
    </AbsoluteFill>
  );
}

// ─── SCENE 3: Bits in Pakete verpacken ───────────────────────
function SceneBitsToPackets({ frame, fps }) {
  const packetColors = ROUTER_COLORS;

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.yellow,
          fontSize: 20,
          fontWeight: 700,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [T.scene3Start, T.scene3Start + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Schritt 3: Bits werden in Pakete verpackt
      </div>

      <div style={{ display: "flex", gap: 22, marginTop: 20 }}>
        {PACKET_GROUPS.map((group, i) => {
          const delay = T.packetsSpring + i * 22;
          const sp = spring({
            frame: frame - delay,
            fps,
            config: { damping: 14, stiffness: 100 },
          });
          const scale = interpolate(sp, [0, 1], [0.5, 1]);
          const op = interpolate(frame, [delay, delay + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const color = packetColors[i];

          return (
            <div
              key={i}
              style={{
                opacity: op,
                transform: `scale(${scale})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              {/* Paket-Box */}
              <div
                style={{
                  background: C.bgL,
                  border: `2px solid ${color}`,
                  borderRadius: 10,
                  padding: "8px 10px",
                  width: 220,
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: color,
                    color: C.bg,
                    borderRadius: "6px 6px 0 0",
                    padding: "3px 8px",
                    fontSize: 11,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  Paket #{i + 1} | Seq: {i + 1} | Src: PC | Dst: SRV
                </div>
                {/* Zeichen mit Bits */}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 5 }}
                >
                  {group.map((ch, j) => (
                    <div
                      key={j}
                      style={{ display: "flex", alignItems: "center", gap: 6 }}
                    >
                      <CharBox
                        ch={ch}
                        size={28}
                        fontSize={13}
                        borderColor={color}
                      />
                      <BitCells bits={toBin(ch)} color={color} />
                    </div>
                  ))}
                </div>
              </div>
              {/* Routenhinweis */}
              <div
                style={{
                  color: ROUTER_COLORS[i],
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                → via {ROUTER_LABELS[i]}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.gray,
          fontSize: 13,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [T.packetsSpring + 90, T.packetsSpring + 110],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Jedes Paket trägt eine{" "}
        <strong style={{ color: C.fg }}>Sequenznummer</strong> — TCP stellt
        damit die richtige Reihenfolge sicher
      </div>
    </AbsoluteFill>
  );
}

// ─── SCENE 4: Routen + TCP Reordering ────────────────────────
function ScenePacketTravel({ frame }) {
  const W = 900,
    H = 500;
  const SVG_TOP = 55;

  const pc = { x: 55, y: 210 };
  const server = { x: 580, y: 210 };

  const routers = [
    { x: 320, y: 90, label: "Router A", color: C.orange },
    { x: 320, y: 210, label: "Router B", color: C.purple },
    { x: 320, y: 330, label: "Router C", color: C.aqua },
  ];

  // Pakete werden gesendet in Reihenfolge 1,2,3
  // aber kommen an in Reihenfolge 3,1,2 (ARRIVE_ORDER = [2,0,1])
  // stagger für Abfahrt: gleichmässig
  // stagger für Ankunft: Paket 3 kommt als erstes an (frame 700), dann 1 (730), dann 2 (760)
  const DEPART_FRAMES = [
    T.packetsLeave,
    T.packetsLeave + 18,
    T.packetsLeave + 36,
  ];
  const ARRIVE_FRAMES = [
    T.packetsLeave + 120,
    T.packetsLeave + 90,
    T.packetsLeave + 150,
  ];
  // → Paket 1 kommt bei +120, Paket 2 bei +150, Paket 3 bei +90 → Reihenfolge: 3,1,2

  const lineOp = interpolate(
    frame,
    [T.scene4Start, T.scene4Start + 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const packetDefs = PACKET_GROUPS.map((group, i) => {
    const router = routers[i];
    const leaveFrame = DEPART_FRAMES[i];
    const midFrame = leaveFrame + (ARRIVE_FRAMES[i] - leaveFrame) / 2;
    const endFrame = ARRIVE_FRAMES[i];

    const p1 = interpolate(frame, [leaveFrame, midFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const p2 = interpolate(frame, [midFrame, endFrame], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    let x, y;
    if (p2 > 0) {
      x = interpolate(p2, [0, 1], [router.x, server.x]);
      y = interpolate(p2, [0, 1], [router.y, server.y]);
    } else {
      x = interpolate(p1, [0, 1], [pc.x, router.x]);
      y = interpolate(p1, [0, 1], [pc.y, router.y]);
    }

    const fadeOut = interpolate(frame, [endFrame + 5, endFrame + 25], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const visible = frame >= leaveFrame && frame <= endFrame + 25;

    return {
      x,
      y,
      visible,
      fadeOut,
      color: ROUTER_COLORS[i],
      i,
      endFrame,
      group,
    };
  });

  // Reihenfolge der angekommenen Pakete (für Empfangs-Slots)
  // Slot-Positionen am Server (3 Slots untereinander)
  const SLOT_Y = [130, 215, 300];
  // Welches Paket (Index) liegt in welchem Slot?
  // Pakete kommen an: zuerst Paket 3 (i=2) → Slot 0, dann Paket 1 (i=0) → Slot 1, dann Paket 2 (i=1) → Slot 2
  const ARRIVAL_SEQUENCE = [2, 0, 1]; // in dieser Reihenfolge kommen sie an
  const slotForPacket = [1, 2, 0]; // Paket 0 → Slot 1, Paket 1 → Slot 2, Paket 2 → Slot 0

  const lastArrival = Math.max(...ARRIVE_FRAMES);
  const reorderOp = interpolate(
    frame,
    [T.reorderShow, T.reorderShow + 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <div
        style={{
          position: "absolute",
          top: 18,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.yellow,
          fontSize: 19,
          fontWeight: 700,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [T.scene4Start, T.scene4Start + 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Schritt 4: Pakete reisen — verschiedene Wege, falsche Reihenfolge
      </div>

      <svg
        width={W}
        height={H - 30}
        style={{ position: "absolute", top: SVG_TOP }}
        overflow="visible"
      >
        {/* Leitungen */}
        {routers.map((r, i) => (
          <g key={i} opacity={lineOp}>
            <line
              x1={pc.x}
              y1={pc.y}
              x2={r.x}
              y2={r.y}
              stroke={r.color}
              strokeWidth={1.5}
              strokeDasharray="6,5"
              opacity={0.4}
            />
            <line
              x1={r.x}
              y1={r.y}
              x2={server.x}
              y2={server.y}
              stroke={r.color}
              strokeWidth={1.5}
              strokeDasharray="6,5"
              opacity={0.4}
            />
          </g>
        ))}

        {/* PC */}
        <g>
          <circle
            cx={pc.x}
            cy={pc.y}
            r={30}
            fill={C.bgL}
            stroke={C.blue}
            strokeWidth={2.5}
          />
          <text x={pc.x} y={pc.y + 6} textAnchor="middle" fontSize={20}>
            💻
          </text>
          <text
            x={pc.x}
            y={pc.y + 46}
            textAnchor="middle"
            fill={C.blue}
            fontSize={13}
            fontWeight="700"
          >
            PC
          </text>
        </g>

        {/* Router */}
        {routers.map((r, i) => (
          <g key={i}>
            <circle
              cx={r.x}
              cy={r.y}
              r={26}
              fill={C.bgL}
              stroke={r.color}
              strokeWidth={2.5}
            />
            <text x={r.x} y={r.y + 6} textAnchor="middle" fontSize={17}>
              📡
            </text>
            <text
              x={r.x}
              y={r.y + 42}
              textAnchor="middle"
              fill={r.color}
              fontSize={11}
              fontWeight="700"
            >
              {r.label}
            </text>
          </g>
        ))}

        {/* Server */}
        <g>
          <circle
            cx={server.x}
            cy={server.y}
            r={30}
            fill={C.bgL}
            stroke={C.green}
            strokeWidth={2.5}
          />
          <text x={server.x} y={server.y + 6} textAnchor="middle" fontSize={20}>
            🖥️
          </text>
          <text
            x={server.x}
            y={server.y + 46}
            textAnchor="middle"
            fill={C.green}
            fontSize={13}
            fontWeight="700"
          >
            Server
          </text>
        </g>

        {/* Bewegende Pakete */}
        {packetDefs.map((pkt) => {
          if (!pkt.visible) return null;
          return (
            <g
              key={pkt.i}
              transform={`translate(${pkt.x}, ${pkt.y})`}
              opacity={pkt.fadeOut}
            >
              <rect
                x={-24}
                y={-15}
                width={48}
                height={30}
                rx={5}
                fill={C.bgL}
                stroke={pkt.color}
                strokeWidth={2}
              />
              <text
                y={-3}
                textAnchor="middle"
                fill={C.gray}
                fontSize={8}
                fontWeight="700"
              >
                PKT {pkt.i + 1}
              </text>
              <text
                y={9}
                textAnchor="middle"
                fill={pkt.color}
                fontSize={10}
                fontWeight="700"
              >
                Seq:{pkt.i + 1}
              </text>
            </g>
          );
        })}

        {/* Empfangs-Slots am Server: zeigen Pakete in Ankunftsreihenfolge */}
        {ARRIVAL_SEQUENCE.map((pktIdx, slotPos) => {
          const arriveFrame = ARRIVE_FRAMES[pktIdx];
          const slotOp = interpolate(
            frame,
            [arriveFrame + 25, arriveFrame + 40],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          if (slotOp <= 0) return null;
          const color = ROUTER_COLORS[pktIdx];
          const slotX = server.x + 50;
          const slotY = SLOT_Y[slotPos] - 10;

          return (
            <g key={pktIdx} opacity={slotOp}>
              <rect
                x={slotX}
                y={slotY}
                width={80}
                height={26}
                rx={4}
                fill={C.bgL}
                stroke={color}
                strokeWidth={1.5}
              />
              <text
                x={slotX + 40}
                y={slotY + 10}
                textAnchor="middle"
                fill={C.gray}
                fontSize={8}
                fontWeight="700"
              >
                angekommen
              </text>
              <text
                x={slotX + 40}
                y={slotY + 21}
                textAnchor="middle"
                fill={color}
                fontSize={10}
                fontWeight="700"
              >
                PKT {pktIdx + 1} (Seq:{pktIdx + 1})
              </text>
            </g>
          );
        })}

        {/* Reorder-Pfeil + Label */}
        {reorderOp > 0 && (
          <g opacity={reorderOp}>
            {/* Bracket */}
            <rect
              x={server.x + 47}
              y={118}
              width={82}
              height={200}
              rx={6}
              fill="none"
              stroke={C.yellow}
              strokeWidth={1.5}
              strokeDasharray="4,3"
            />
            <text
              x={server.x + 88}
              y={113}
              textAnchor="middle"
              fill={C.yellow}
              fontSize={11}
              fontWeight="700"
            >
              TCP sortiert →
            </text>
            {/* Sortierte Reihenfolge */}
            {[0, 1, 2].map((idx, pos) => (
              <g key={idx}>
                <rect
                  x={server.x + 140}
                  y={SLOT_Y[pos] - 10}
                  width={76}
                  height={26}
                  rx={4}
                  fill={C.bgL}
                  stroke={ROUTER_COLORS[idx]}
                  strokeWidth={1.5}
                />
                <text
                  x={server.x + 178}
                  y={SLOT_Y[pos] + 1}
                  textAnchor="middle"
                  fill={C.gray}
                  fontSize={8}
                  fontWeight="700"
                >
                  richtige Pos.
                </text>
                <text
                  x={server.x + 178}
                  y={SLOT_Y[pos] + 12}
                  textAnchor="middle"
                  fill={ROUTER_COLORS[idx]}
                  fontSize={10}
                  fontWeight="700"
                >
                  PKT {idx + 1} (Seq:{idx + 1})
                </text>
                {/* Pfeil von unsortiert → sortiert */}
                <line
                  x1={server.x + 129}
                  y1={SLOT_Y[slotForPacket[idx]] + 3}
                  x2={server.x + 140}
                  y2={SLOT_Y[pos] + 3}
                  stroke={ROUTER_COLORS[idx]}
                  strokeWidth={1.2}
                  markerEnd="url(#arr)"
                  opacity={0.7}
                />
              </g>
            ))}
            <defs>
              <marker
                id="arr"
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L6,3 z" fill={C.fg} />
              </marker>
            </defs>
          </g>
        )}
      </svg>

      {/* Legende */}
      <div
        style={{
          position: "absolute",
          top: 62,
          left: 16,
          display: "flex",
          flexDirection: "column",
          gap: 5,
          opacity: lineOp,
        }}
      >
        {routers.map((r, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 5 }}
          >
            <div
              style={{
                width: 14,
                height: 3,
                background: r.color,
                borderRadius: 2,
              }}
            />
            <span style={{ color: r.color, fontSize: 11, fontWeight: 700 }}>
              Pkt {i + 1} via {r.label}
            </span>
          </div>
        ))}
      </div>

      {/* TCP-Erklärung unten */}
      <div
        style={{
          position: "absolute",
          bottom: 18,
          left: "50%",
          transform: "translateX(-50%)",
          background: C.bgL,
          border: `2px solid ${C.yellow}`,
          borderRadius: 8,
          padding: "8px 22px",
          textAlign: "center",
          whiteSpace: "nowrap",
          opacity: reorderOp,
        }}
      >
        <span style={{ color: C.gray, fontSize: 13 }}>
          TCP: Sequenznummern garantieren die{" "}
          <strong style={{ color: C.yellow }}>richtige Reihenfolge</strong> —
          egal welchen Weg die Pakete nehmen
        </span>
      </div>
    </AbsoluteFill>
  );
}

// ─── SCENE 5: Empfänger — Bits → Zeichen → Text ──────────────
function SceneReceiver({ frame, fps }) {
  const chars = LONG_CHARS;

  // Phase A (bitsAppear): alle Bit-Blöcke erscheinen nacheinander
  // Phase B (decodeStart): jeder Block wird zu einem Zeichen
  // Phase C (textReveal): Zeichen fügen sich zum finalen Text zusammen

  const titleOp = interpolate(
    frame,
    [T.scene5Start, T.scene5Start + 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const finalTextOp = interpolate(
    frame,
    [T.textReveal, T.textReveal + 25],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: C.bg,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.yellow,
          fontSize: 20,
          fontWeight: 700,
          whiteSpace: "nowrap",
          opacity: titleOp,
        }}
      >
        Schritt 5: Empfänger — Bits → Zeichen → Nachricht
      </div>

      <div
        style={{
          position: "absolute",
          top: 74,
          left: "50%",
          transform: "translateX(-50%)",
          color: C.gray,
          fontSize: 13,
          whiteSpace: "nowrap",
          opacity: interpolate(
            frame,
            [T.bitsAppear + 10, T.bitsAppear + 30],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        Der Server empfängt die Bits und dekodiert sie zurück
      </div>

      {/* Bit-Blöcke mit Dekodierung */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          maxWidth: 860,
          marginTop: 20,
        }}
      >
        {chars.map((ch, i) => {
          const bits = toBin(ch);
          const blockDelay = T.bitsAppear + i * 12;
          const blockOp = interpolate(
            frame,
            [blockDelay, blockDelay + 14],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          const decodeDelay = T.decodeStart + i * 10;
          const decodeOp = interpolate(
            frame,
            [decodeDelay, decodeDelay + 14],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          // Während finalTextOp > 0.5: ganzer Block verschwindet
          const blockFade = interpolate(
            frame,
            [T.textReveal - 10, T.textReveal + 5],
            [1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          return (
            <div
              key={i}
              style={{
                opacity: blockOp * blockFade,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              {/* Bits */}
              <div style={{ display: "flex", gap: 2 }}>
                {bits.split("").map((b, j) => (
                  <div
                    key={j}
                    style={{
                      width: 15,
                      height: 19,
                      background: b === "1" ? C.green : C.bgLL,
                      border: `1px solid ${b === "1" ? C.green : C.bgL}`,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      fontWeight: 700,
                      color: b === "1" ? C.bg : C.gray,
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
              {/* Pfeil + dekodiertes Zeichen */}
              <div
                style={{
                  opacity: decodeOp,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <div style={{ color: C.gray, fontSize: 14 }}>↓</div>
                <CharBox
                  ch={ch}
                  size={36}
                  fontSize={17}
                  borderColor={C.green}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Finale Nachricht */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: finalTextOp,
          background: C.bgL,
          border: `2px solid ${C.green}`,
          borderRadius: 12,
          padding: "16px 40px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ color: C.gray, fontSize: 13, marginBottom: 6 }}>
          Bits dekodiert — Nachricht:
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          {MSG_LONG.split("").map((ch, i) => {
            const sp = spring({
              frame: frame - (T.textReveal + i * 6),
              fps,
              config: { damping: 12, stiffness: 140 },
            });
            const scale = interpolate(sp, [0, 1], [0.3, 1]);
            return (
              <div key={i} style={{ transform: `scale(${scale})` }}>
                <CharBox
                  ch={ch}
                  size={40}
                  fontSize={20}
                  borderColor={C.green}
                />
              </div>
            );
          })}
        </div>
        <div
          style={{
            color: C.yellow,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          {MSG_LONG}
        </div>
      </div>
    </AbsoluteFill>
  );
}

// ─── Main Composition ─────────────────────────────────────────
function PacketComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const showScene1 = frame < T.scene2Start;
  const showScene2 = frame >= T.scene2Start && frame < T.scene3Start;
  const showScene3 = frame >= T.scene3Start && frame < T.scene4Start;
  const showScene4 = frame >= T.scene4Start && frame < T.scene5Start;
  const showScene5 = frame >= T.scene5Start;

  return (
    <AbsoluteFill style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      {showScene1 && <SceneTextToAscii frame={frame} fps={fps} />}
      {showScene2 && <SceneLongMessageBytes frame={frame} fps={fps} />}
      {showScene3 && <SceneBitsToPackets frame={frame} fps={fps} />}
      {showScene4 && <ScenePacketTravel frame={frame} fps={fps} />}
      {showScene5 && <SceneReceiver frame={frame} fps={fps} />}
    </AbsoluteFill>
  );
}

// ─── Exported React component with Player ────────────────────
export default function PacketAnimation() {
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
        component={PacketComposition}
        durationInFrames={T.totalFrames}
        compositionWidth={900}
        compositionHeight={500}
        fps={FPS}
        style={{ width: "100%", aspectRatio: "9/5" }}
        controls
        loop
        autoPlay={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
