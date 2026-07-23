import { useEffect, useRef, useState } from "react";
import style from "./HttpDiagram.module.css";

// ─── Szenarien ────────────────────────────────────────────────
const SCENARIOS = [
  {
    id: "get",
    label: "GET (Seite laden)",
    method: "GET",
    path: "/index.html",
    requestHeaders: [
      { name: "GET /index.html HTTP/1.1", type: "method" },
      { name: "Host:", value: "example.com" },
      { name: "Accept:", value: "text/html" },
      { name: "User-Agent:", value: "Chrome/120" },
    ],
    statusCode: "200 OK",
    statusColor: "#b8bb26",
    responseHeaders: [
      { name: "HTTP/1.1 200 OK", type: "status" },
      { name: "Content-Type:", value: "text/html" },
      { name: "Content-Length:", value: "2483" },
      { name: "Cache-Control:", value: "max-age=3600" },
    ],
    responseBody: "<html>…</html>",
  },
  {
    id: "post",
    label: "POST (Formular)",
    method: "POST",
    path: "/login",
    requestHeaders: [
      { name: "POST /login HTTP/1.1", type: "method" },
      { name: "Host:", value: "example.com" },
      { name: "Content-Type:", value: "application/json" },
      { name: "Content-Length:", value: "42" },
    ],
    requestBody: '{"user":"anna","pass":"…"}',
    statusCode: "302 Found",
    statusColor: "#fabd2f",
    responseHeaders: [
      { name: "HTTP/1.1 302 Found", type: "status" },
      { name: "Location:", value: "/dashboard" },
      { name: "Set-Cookie:", value: "session=abc123" },
    ],
    responseBody: null,
  },
  {
    id: "notfound",
    label: "404 (nicht gefunden)",
    method: "GET",
    path: "/about.html",
    requestHeaders: [
      { name: "GET /about.html HTTP/1.1", type: "method" },
      { name: "Host:", value: "example.com" },
      { name: "Accept:", value: "text/html" },
    ],
    statusCode: "404 Not Found",
    statusColor: "#fb4934",
    responseHeaders: [
      { name: "HTTP/1.1 404 Not Found", type: "status" },
      { name: "Content-Type:", value: "text/html" },
    ],
    responseBody: "<h1>404 Not Found</h1>",
  },
];

// Phasendauern in ms
const DURATION = {
  request: 700, // Pfeil Browser → Server
  processing: 600, // Server "denkt nach"
  response: 700, // Pfeil Server → Browser
};

function useAnimationLoop(duration, onDone) {
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const [progress, setProgress] = useState(0);

  function start() {
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    setProgress(0);
    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const p = Math.min((now - startRef.current) / duration, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDone();
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return { progress, start };
}

export default function HttpDiagram() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  // phase: idle | request | processing | response | done
  const [phase, setPhase] = useState("idle");
  const timerRef = useRef(null);

  const scenario = SCENARIOS[scenarioIdx];

  // Animation für Request-Pfeil
  const reqAnim = useAnimationLoop(DURATION.request, () => {
    setPhase("processing");
    timerRef.current = setTimeout(() => {
      setPhase("response");
      resAnim.start();
    }, DURATION.processing);
  });

  // Animation für Response-Pfeil
  const resAnim = useAnimationLoop(DURATION.response, () => {
    setPhase("done");
  });

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function runAnimation() {
    if (phase !== "idle" && phase !== "done") return;
    setPhase("request");
    reqAnim.start();
  }

  const isRunning = phase !== "idle" && phase !== "done";

  // SVG-Koordinaten
  const BROWSER_X = 100;
  const SERVER_X = 620;
  const MID_Y = 90;
  const LINE_Y = MID_Y;

  // Pfeil-Positionen
  const reqX =
    BROWSER_X +
    55 +
    (SERVER_X - BROWSER_X - 110) *
      (phase === "request" ? reqAnim.progress : phase !== "idle" ? 1 : 0);
  const resX =
    SERVER_X -
    55 -
    (SERVER_X - BROWSER_X - 110) *
      (phase === "response" ? resAnim.progress : phase === "done" ? 1 : 0);

  const showReqArrow =
    phase === "request" ||
    phase === "processing" ||
    phase === "response" ||
    phase === "done";
  const showResArrow = phase === "response" || phase === "done";
  const showReqLabels =
    phase === "processing" || phase === "response" || phase === "done";
  const showResLabels = phase === "done";

  return (
    <div className={style.wrapper}>
      {/* SVG: Diagramm */}
      <svg
        viewBox="0 0 720 200"
        className={style.svg}
        aria-label="HTTP-Diagramm"
      >
        {/* Verbindungslinie */}
        <line
          x1={BROWSER_X + 50}
          y1={LINE_Y}
          x2={SERVER_X - 50}
          y2={LINE_Y}
          stroke="#3c3836"
          strokeWidth={1.5}
          strokeDasharray="5 4"
        />

        {/* Browser */}
        <rect
          x={BROWSER_X - 50}
          y={LINE_Y - 50}
          width={100}
          height={100}
          rx={10}
          fill="#3c3836"
          stroke="#83a598"
          strokeWidth={2}
        />
        <text
          x={BROWSER_X}
          y={LINE_Y - 16}
          textAnchor="middle"
          fontSize={22}
          style={{ userSelect: "none" }}
        >
          🌐
        </text>
        <text
          x={BROWSER_X}
          y={LINE_Y + 4}
          textAnchor="middle"
          fill="#83a598"
          fontSize={11}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          Browser
        </text>
        <text
          x={BROWSER_X}
          y={LINE_Y + 20}
          textAnchor="middle"
          fill="#928374"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          Client
        </text>

        {/* Server */}
        <rect
          x={SERVER_X - 50}
          y={LINE_Y - 50}
          width={100}
          height={100}
          rx={10}
          fill="#3c3836"
          stroke={
            phase === "processing"
              ? "#fabd2f"
              : phase === "response" || phase === "done"
                ? scenario.statusColor
                : "#504945"
          }
          strokeWidth={
            phase === "processing" || phase === "response" || phase === "done"
              ? 2.5
              : 1.5
          }
        />
        <text
          x={SERVER_X}
          y={LINE_Y - 16}
          textAnchor="middle"
          fontSize={22}
          style={{ userSelect: "none" }}
        >
          🖥️
        </text>
        <text
          x={SERVER_X}
          y={LINE_Y + 4}
          textAnchor="middle"
          fill="#ebdbb2"
          fontSize={11}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          Server
        </text>
        <text
          x={SERVER_X}
          y={LINE_Y + 20}
          textAnchor="middle"
          fill="#928374"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          example.com
        </text>

        {/* Processing-Label */}
        {phase === "processing" && (
          <text
            x={SERVER_X}
            y={LINE_Y + 42}
            textAnchor="middle"
            fill="#fabd2f"
            fontSize={9}
            style={{ userSelect: "none" }}
          >
            verarbeitet…
          </text>
        )}

        {/* Request-Pfeil */}
        {showReqArrow && (
          <g>
            <defs>
              <marker
                id="arrowRight"
                markerWidth="7"
                markerHeight="7"
                refX="3"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 7 3.5, 0 7" fill="#83a598" />
              </marker>
            </defs>
            <line
              x1={BROWSER_X + 55}
              y1={LINE_Y - 18}
              x2={phase === "request" ? reqX : SERVER_X - 55}
              y2={LINE_Y - 18}
              stroke="#83a598"
              strokeWidth={2}
              markerEnd="url(#arrowRight)"
            />
            {/* Request-Label auf dem Pfeil */}
            <rect
              x={300}
              y={LINE_Y - 46}
              width={120}
              height={16}
              rx={3}
              fill="#1d2021"
              opacity={0.9}
            />
            <text
              x={360}
              y={LINE_Y - 34}
              textAnchor="middle"
              fill="#83a598"
              fontSize={9}
              fontFamily="monospace"
              style={{ userSelect: "none" }}
            >
              {scenario.method} {scenario.path}
            </text>
          </g>
        )}

        {/* Response-Pfeil */}
        {showResArrow && (
          <g>
            <defs>
              <marker
                id="arrowLeft"
                markerWidth="7"
                markerHeight="7"
                refX="4"
                refY="3.5"
                orient="auto-start-reverse"
              >
                <polygon points="0 0, 7 3.5, 0 7" fill={scenario.statusColor} />
              </marker>
            </defs>
            <line
              x1={SERVER_X - 55}
              y1={LINE_Y + 18}
              x2={phase === "response" ? resX : BROWSER_X + 55}
              y2={LINE_Y + 18}
              stroke={scenario.statusColor}
              strokeWidth={2}
              markerStart="url(#arrowLeft)"
            />
            <rect
              x={300}
              y={LINE_Y + 26}
              width={120}
              height={16}
              rx={3}
              fill="#1d2021"
              opacity={0.9}
            />
            <text
              x={360}
              y={LINE_Y + 38}
              textAnchor="middle"
              fill={scenario.statusColor}
              fontSize={9}
              fontFamily="monospace"
              style={{ userSelect: "none" }}
            >
              {scenario.statusCode}
            </text>
          </g>
        )}

        {/* Status-Beschriftungen */}
        <text
          x={360}
          y={185}
          textAnchor="middle"
          fill="#504945"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          HTTP/1.1 · TCP Port 80 (HTTP) / 443 (HTTPS)
        </text>
      </svg>

      {/* Steuerleiste */}
      <div className={style.controls}>
        <div className={style.scenarioPicker}>
          {SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              className={`${style.scenarioBtn} ${scenarioIdx === i ? style.scenarioBtnActive : ""}`}
              onClick={() => {
                setScenarioIdx(i);
                setPhase("idle");
              }}
              disabled={isRunning}
            >
              {s.label}
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
              : "▶ Anfrage senden"}
        </button>
      </div>

      {/* Headers-Panels */}
      <div className={style.panelsRow}>
        {/* Request */}
        <div
          className={`${style.panel} ${showReqLabels ? style.panelVisible : ""}`}
        >
          <div className={style.panelTitle}>Request (Browser → Server)</div>
          <div className={style.headerList}>
            {scenario.requestHeaders.map((h, i) => (
              <div
                key={i}
                className={`${style.headerRow} ${h.type === "method" ? style.headerMethod : ""}`}
              >
                <span className={style.headerName}>{h.name}</span>
                {h.value && (
                  <span className={style.headerValue}> {h.value}</span>
                )}
              </div>
            ))}
            {scenario.requestBody && (
              <div className={style.bodyRow}>
                <span className={style.bodyLabel}>Body:</span>
                <span className={style.bodyValue}>{scenario.requestBody}</span>
              </div>
            )}
          </div>
        </div>

        {/* Response */}
        <div
          className={`${style.panel} ${showResLabels ? style.panelVisible : ""}`}
        >
          <div className={style.panelTitle}>Response (Server → Browser)</div>
          <div className={style.headerList}>
            {scenario.responseHeaders.map((h, i) => (
              <div
                key={i}
                className={`${style.headerRow} ${h.type === "status" ? style.headerStatus : ""}`}
                style={
                  h.type === "status" ? { color: scenario.statusColor } : {}
                }
              >
                <span className={style.headerName}>{h.name}</span>
                {h.value && (
                  <span className={style.headerValue}> {h.value}</span>
                )}
              </div>
            ))}
            {scenario.responseBody && (
              <div className={style.bodyRow}>
                <span className={style.bodyLabel}>Body:</span>
                <span className={style.bodyValue}>{scenario.responseBody}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
