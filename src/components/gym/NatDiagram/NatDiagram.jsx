import { useEffect, useRef, useState } from "react";
import style from "./NatDiagram.module.css";

// Positionen (viewBox 720 × 320)
// Links: 3 Geräte im Heimnetz
// Mitte: Router
// Rechts: Internet-Server

const ROUTER_X = 360;
const ROUTER_Y = 160;

const DEVICES = [
  { id: "pc", label: "PC", icon: "💻", ip: "192.168.1.10", x: 80, y: 80 },
  {
    id: "phone",
    label: "Smartphone",
    icon: "📱",
    ip: "192.168.1.20",
    x: 80,
    y: 160,
  },
  {
    id: "tv",
    label: "Smart TV",
    icon: "📺",
    ip: "192.168.1.30",
    x: 80,
    y: 240,
  },
];

const SERVER = {
  id: "server",
  label: "Server",
  icon: "🖥️",
  ip: "142.250.74.14",
  x: 640,
  y: 160,
};

// Welches Gerät schickt gerade ein Paket?
const SCENARIOS = [
  { deviceId: "pc", srcPort: 54321, dstPort: 443, proto: "HTTPS" },
  { deviceId: "phone", srcPort: 61234, dstPort: 443, proto: "HTTPS" },
  { deviceId: "tv", srcPort: 49152, dstPort: 53, proto: "DNS" },
];

// Mapping: Gerät → externer Port
const EXT_PORT = { pc: 40001, phone: 40002, tv: 40003 };
const PUBLIC_IP = "62.0.0.1";

// Phasendauern in ms
const DURATION = {
  toRouter: 700,
  translating: 600, // "wird übersetzt…"
  translated: 1400, // neue Adresse anzeigen — lang genug zum Lesen
  toServer: 700,
  returning: 700,
};

function lerp(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export default function NatDiagram() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  // Phasen: idle | toRouter | translating | translated | toServer | returning | done
  const [phase, setPhase] = useState("idle");
  const [t, setT] = useState(0);
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const startRef = useRef(null);

  const scenario = SCENARIOS[scenarioIdx];
  const device = DEVICES.find((d) => d.id === scenario.deviceId);

  function animatePhase(phaseName, onDone) {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    const duration = DURATION[phaseName];
    setPhase(phaseName);
    setT(0);
    startRef.current = null;
    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setT(progress);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDone();
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  function pausePhase(phaseName, onDone) {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    setPhase(phaseName);
    setT(1);
    timerRef.current = setTimeout(onDone, DURATION[phaseName]);
  }

  function runAnimation() {
    if (phase !== "idle" && phase !== "done") return;
    animatePhase("toRouter", () => {
      pausePhase("translating", () => {
        pausePhase("translated", () => {
          animatePhase("toServer", () => {
            animatePhase("returning", () => {
              setPhase("done");
            });
          });
        });
      });
    });
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  // Paketposition berechnen
  const routerPos = { x: ROUTER_X, y: ROUTER_Y };
  const devicePos = { x: device.x, y: device.y };
  const serverPos = { x: SERVER.x, y: SERVER.y };

  let packetPos = null;
  let packetLabel = "";
  let packetColor = "#83a598";
  let showPacket = false;

  if (phase === "toRouter") {
    packetPos = lerp(devicePos, routerPos, t);
    packetLabel = `${device.ip}:${scenario.srcPort}`;
    packetColor = "#83a598";
    showPacket = true;
  } else if (phase === "translating") {
    packetPos = routerPos;
    packetLabel = "wird übersetzt…";
    packetColor = "#fabd2f";
    showPacket = true;
  } else if (phase === "translated") {
    packetPos = routerPos;
    packetLabel = `${PUBLIC_IP}:${EXT_PORT[device.id]}`;
    packetColor = "#fe8019";
    showPacket = true;
  } else if (phase === "toServer") {
    packetPos = lerp(routerPos, serverPos, t);
    packetLabel = `${PUBLIC_IP}:${EXT_PORT[device.id]}`;
    packetColor = "#fe8019";
    showPacket = true;
  } else if (phase === "returning") {
    packetPos = lerp(serverPos, devicePos, t);
    packetLabel = `→ ${device.ip}`;
    packetColor = "#b8bb26";
    showPacket = true;
  } else if (phase === "done") {
    showPacket = false;
  }

  // Tabellenzeile hervorheben ab "translated" (neue IP sichtbar)
  const tableHighlight =
    phase === "translated" ||
    phase === "toServer" ||
    phase === "returning" ||
    phase === "done";

  const isRunning = phase !== "idle" && phase !== "done";

  return (
    <div className={style.wrapper}>
      <svg
        viewBox="0 0 720 320"
        className={style.svg}
        aria-label="NAT-Diagramm"
      >
        {/* Verbindungslinien Geräte → Router */}
        {DEVICES.map((d) => (
          <line
            key={d.id}
            x1={d.x}
            y1={d.y}
            x2={ROUTER_X}
            y2={ROUTER_Y}
            stroke="#504945"
            strokeWidth={2}
            strokeDasharray="6 4"
          />
        ))}

        {/* Verbindung Router → Server */}
        <line
          x1={ROUTER_X}
          y1={ROUTER_Y}
          x2={SERVER.x}
          y2={SERVER.y}
          stroke="#504945"
          strokeWidth={2.5}
        />

        {/* Netz-Trennlinie */}
        <line
          x1={230}
          y1={20}
          x2={230}
          y2={300}
          stroke="#504945"
          strokeWidth={1}
          strokeDasharray="4 4"
        />
        <text x={120} y={18} textAnchor="middle" fill="#928374" fontSize={10}>
          Heimnetz (privat)
        </text>
        <text x={490} y={18} textAnchor="middle" fill="#928374" fontSize={10}>
          Internet (öffentlich)
        </text>

        {/* IP-Labels der Geräte */}
        {DEVICES.map((d) => (
          <g key={d.id}>
            <rect
              x={d.x - 52}
              y={d.y + 26}
              width={104}
              height={15}
              rx={3}
              fill="#1d2021"
              opacity={0.85}
            />
            <text
              x={d.x}
              y={d.y + 37}
              textAnchor="middle"
              fill="#83a598"
              fontSize={10}
              fontFamily="monospace"
            >
              {d.ip}
            </text>
          </g>
        ))}

        {/* Geräte-Knoten */}
        {DEVICES.map((d) => {
          const active = d.id === scenario.deviceId && phase !== "idle";
          return (
            <g key={d.id}>
              <circle
                cx={d.x}
                cy={d.y}
                r={24}
                fill={active ? "#3c3836" : "#282828"}
                stroke={active ? "#83a598" : "#504945"}
                strokeWidth={active ? 2.5 : 1.5}
              />
              <text
                x={d.x}
                y={d.y + 6}
                textAnchor="middle"
                fontSize={15}
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {d.icon}
              </text>
              <text
                x={d.x}
                y={d.y + 38 + 16}
                textAnchor="middle"
                fill={active ? "#ebdbb2" : "#928374"}
                fontSize={10}
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {d.label}
              </text>
            </g>
          );
        })}

        {/* Router */}
        <rect
          x={ROUTER_X - 52}
          y={ROUTER_Y - 44}
          width={104}
          height={88}
          rx={8}
          fill="#3c3836"
          stroke="#fabd2f"
          strokeWidth={2}
        />
        <text
          x={ROUTER_X}
          y={ROUTER_Y - 26}
          textAnchor="middle"
          fill="#fabd2f"
          fontSize={18}
          style={{ userSelect: "none" }}
        >
          🔀
        </text>
        <text
          x={ROUTER_X}
          y={ROUTER_Y - 8}
          textAnchor="middle"
          fill="#fabd2f"
          fontSize={11}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          Router
        </text>
        <text
          x={ROUTER_X}
          y={ROUTER_Y + 8}
          textAnchor="middle"
          fill="#928374"
          fontSize={9}
          fontFamily="monospace"
          style={{ userSelect: "none" }}
        >
          intern: 192.168.1.1
        </text>
        <text
          x={ROUTER_X}
          y={ROUTER_Y + 22}
          textAnchor="middle"
          fill="#fe8019"
          fontSize={9}
          fontFamily="monospace"
          style={{ userSelect: "none" }}
        >
          extern: {PUBLIC_IP}
        </text>
        <text
          x={ROUTER_X}
          y={ROUTER_Y + 36}
          textAnchor="middle"
          fill="#fabd2f"
          fontSize={8}
          style={{ userSelect: "none" }}
        >
          NAT
        </text>

        {/* Server */}
        <circle
          cx={SERVER.x}
          cy={SERVER.y}
          r={24}
          fill="#282828"
          stroke="#fb4934"
          strokeWidth={1.5}
        />
        <text
          x={SERVER.x}
          y={SERVER.y + 6}
          textAnchor="middle"
          fontSize={15}
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          {SERVER.icon}
        </text>
        <text
          x={SERVER.x}
          y={SERVER.y + 38}
          textAnchor="middle"
          fill="#928374"
          fontSize={10}
          style={{ userSelect: "none" }}
        >
          {SERVER.label}
        </text>
        <rect
          x={SERVER.x - 52}
          y={SERVER.y + 26}
          width={104}
          height={15}
          rx={3}
          fill="#1d2021"
          opacity={0.85}
        />
        <text
          x={SERVER.x}
          y={SERVER.y + 37}
          textAnchor="middle"
          fill="#fb4934"
          fontSize={10}
          fontFamily="monospace"
          style={{ userSelect: "none" }}
        >
          {SERVER.ip}
        </text>

        {/* Animiertes Paket */}
        {showPacket && packetPos && (
          <g>
            <circle
              cx={packetPos.x}
              cy={packetPos.y}
              r={18}
              fill={packetColor}
              opacity={0.92}
            />
            <text
              x={packetPos.x}
              y={packetPos.y + 5}
              textAnchor="middle"
              fill="#1d2021"
              fontSize={11}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              📦
            </text>
            {/* Label über dem Paket */}
            <rect
              x={packetPos.x - 64}
              y={packetPos.y - 38}
              width={128}
              height={16}
              rx={4}
              fill="#1d2021"
              opacity={0.9}
            />
            <text
              x={packetPos.x}
              y={packetPos.y - 26}
              textAnchor="middle"
              fill={packetColor}
              fontSize={9}
              fontFamily="monospace"
              style={{ userSelect: "none" }}
            >
              {packetLabel}
            </text>
          </g>
        )}
      </svg>

      {/* Steuerleiste */}
      <div className={style.controls}>
        <div className={style.scenarioPicker}>
          {DEVICES.map((d, i) => (
            <button
              key={d.id}
              className={`${style.scenarioBtn} ${scenarioIdx === i ? style.scenarioBtnActive : ""}`}
              onClick={() => {
                setScenarioIdx(i);
                setPhase("idle");
              }}
              disabled={isRunning}
            >
              {d.icon} {d.label}
            </button>
          ))}
        </div>
        <button
          className={style.playBtn}
          onClick={runAnimation}
          disabled={isRunning}
        >
          {isRunning
            ? "Läuft…"
            : phase === "done"
              ? "▶ Nochmal"
              : "▶ Paket senden"}
        </button>
      </div>

      {/* NAT-Tabelle */}
      <div className={style.tableWrap}>
        <div className={style.tableTitle}>NAT-Tabelle im Router:</div>
        <table className={style.natTable}>
          <thead>
            <tr>
              <th>Gerät (intern)</th>
              <th>Öffentliche Adresse</th>
            </tr>
          </thead>
          <tbody>
            {DEVICES.map((d, i) => (
              <tr
                key={d.id}
                className={
                  scenarioIdx === i && tableHighlight ? style.activeRow : ""
                }
              >
                <td>
                  <code>
                    {d.ip}:{SCENARIOS[i].srcPort}
                  </code>
                </td>
                <td>
                  <code>
                    {PUBLIC_IP}:{EXT_PORT[d.id]}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
