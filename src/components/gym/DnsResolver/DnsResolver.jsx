import { useState } from "react";
import style from "./DnsResolver.module.css";

// ─── Schritte ────────────────────────────────────────────────
const DNS_STEPS = [
  {
    id: 0,
    from: "browser",
    to: "browser",
    title: "1. Browser-Cache prüfen",
    text: "Zuerst schaut der Browser in seinen eigenen Cache: Hat er die IP-Adresse von github.com in letzter Zeit schon nachgeschlagen? Falls ja, wird sie direkt verwendet — kein Netzwerkaufruf nötig.",
    query: "github.com im Cache?",
    answer: "Nein — Cache leer",
    answerColor: "#fb4934",
  },
  {
    id: 1,
    from: "browser",
    to: "os",
    title: "2. Betriebssystem-Cache / hosts-Datei",
    text: "Der Browser fragt das Betriebssystem: Kennt du github.com? Das OS prüft seinen eigenen DNS-Cache und die Datei /etc/hosts (Linux/macOS) bzw. C:\\Windows\\System32\\drivers\\etc\\hosts (Windows). Dort können Admins Domains manuell auf IPs zeigen lassen.",
    query: "github.com → OS-Cache / /etc/hosts?",
    answer: "Nein — nicht gefunden",
    answerColor: "#fb4934",
  },
  {
    id: 2,
    from: "os",
    to: "resolver",
    title: "3. Anfrage an den Resolver",
    text: "Das OS sendet eine DNS-Anfrage an den konfigurierten Resolver — meistens der Router (z.B. 192.168.1.1) oder ein ISP-Server. Dieser rekursive Resolver übernimmt die gesamte weitere Suche und antwortet dem Client, sobald er eine Antwort hat.",
    query: "Wer ist github.com?",
    answer: "Ich kümmere mich darum...",
    answerColor: "#fabd2f",
  },
  {
    id: 3,
    from: "resolver",
    to: "root",
    title: "4. Resolver → Root-Nameserver",
    text: 'Der Resolver kennt github.com nicht im Cache und fragt einen der 13 Root-Nameserver-Gruppen (A–M, weltweit verteilt). Der Root-Server kennt keine IPs für Domains, aber er weiss: "Für .com-Domains ist dieser TLD-Nameserver zuständig."',
    query: "Wer kennt .com?",
    answer: "TLD-NS: a.gtld-servers.net",
    answerColor: "#83a598",
  },
  {
    id: 4,
    from: "resolver",
    to: "tld",
    title: "5. Resolver → TLD-Nameserver",
    text: 'Der Resolver fragt den TLD-Nameserver für .com. Dieser verwaltet alle .com-Domains und antwortet: "Für github.com ist Nameserver ns1.p16.dynect.net zuständig." Er kennt die IP aber noch nicht selbst.',
    query: "Wer kennt github.com?",
    answer: "Auth-NS: ns1.p16.dynect.net",
    answerColor: "#83a598",
  },
  {
    id: 5,
    from: "resolver",
    to: "auth",
    title: "6. Resolver → Autoritativer Nameserver",
    text: "Der Resolver fragt den autoritativen Nameserver von GitHub — das ist der einzige Server, der die offizielle, verbindliche Antwort kennt. Er antwortet mit dem A-Record: github.com → 140.82.121.4.",
    query: "A-Record für github.com?",
    answer: "140.82.121.4 (TTL: 60s)",
    answerColor: "#b8bb26",
  },
  {
    id: 6,
    from: "resolver",
    to: "browser",
    title: "7. Resolver gibt Antwort zurück",
    text: "Der Resolver speichert die IP-Adresse im Cache (TTL = 60 Sekunden — danach muss neu nachgefragt werden) und sendet die Antwort zurück zum Browser. Der Browser kann jetzt die TCP-Verbindung zu 140.82.121.4 aufbauen.",
    query: "Antwort zurück",
    answer: "github.com = 140.82.121.4",
    answerColor: "#b8bb26",
  },
];

// ─── Knoten (ViewBox 620 × 280) ──────────────────────────────
// Layout: Client-Bereich links (Browser, OS), Resolver Mitte,
//         drei Nameserver rechts in einer Fächerform
const NODES = {
  browser: { x: 55, y: 140, label: "Browser", icon: "🌐", color: "#83a598" },
  os: { x: 175, y: 140, label: "OS / Router", icon: "💻", color: "#fabd2f" },
  resolver: {
    x: 310,
    y: 140,
    label: "Resolver (ISP)",
    icon: "📡",
    color: "#fe8019",
  },
  root: { x: 470, y: 45, label: "Root-NS", icon: "🌍", color: "#d3869b" },
  tld: { x: 540, y: 140, label: "TLD-NS (.com)", icon: "🗂️", color: "#8ec07c" },
  auth: { x: 470, y: 235, label: "Auth-NS", icon: "🏢", color: "#b8bb26" },
};

// ─── Kanten ───────────────────────────────────────────────────
const EDGES = [
  ["browser", "os"],
  ["os", "resolver"],
  ["resolver", "root"],
  ["resolver", "tld"],
  ["resolver", "auth"],
  // Resolver→browser ist Schritt 6 (Rückweg); als gestrichelte Linie immer sichtbar
  ["resolver", "browser"],
];

const NODE_R = 26;

// Berechnet einen Punkt auf dem Kreisrand zwischen zwei Knoten
function edgeEndpoints(fromId, toId) {
  const a = NODES[fromId];
  const b = NODES[toId];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist === 0) return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
  const ux = dx / dist;
  const uy = dy / dist;
  return {
    x1: a.x + ux * NODE_R,
    y1: a.y + uy * NODE_R,
    x2: b.x - ux * NODE_R,
    y2: b.y - uy * NODE_R,
  };
}

function EdgeLine({ from, to, active }) {
  const { x1, y1, x2, y2 } = edgeEndpoints(from, to);
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={active ? "#fabd2f" : "#504945"}
      strokeWidth={active ? 2.5 : 1.5}
      strokeDasharray={active ? "none" : "5,4"}
      opacity={active ? 1 : 0.45}
    />
  );
}

function NodeCircle({ id, active, done }) {
  const n = NODES[id];
  return (
    <g>
      <circle
        cx={n.x}
        cy={n.y}
        r={NODE_R}
        fill="#3c3836"
        stroke={active ? n.color : done ? n.color : "#504945"}
        strokeWidth={active ? 2.5 : 1.5}
        opacity={active ? 1 : done ? 0.85 : 0.5}
      />
      <text x={n.x} y={n.y + 6} textAnchor="middle" fontSize={17}>
        {n.icon}
      </text>
      <text
        x={n.x}
        y={n.y + NODE_R + 14}
        textAnchor="middle"
        fill={active ? n.color : done ? n.color : "#928374"}
        fontSize={10}
        fontWeight={active ? "700" : "400"}
      >
        {n.label}
      </text>
    </g>
  );
}

// Pfeilspitze am Ende der aktiven Kante
function ArrowHead({ from, to, color }) {
  const { x1, y1, x2, y2 } = edgeEndpoints(from, to);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist === 0) return null;
  const ux = dx / dist;
  const uy = dy / dist;
  const size = 7;
  // Spitze bei (x2,y2), Basis 2*size zurück
  const bx = x2 - ux * size * 2;
  const by = y2 - uy * size * 2;
  const nx = -uy;
  const ny = ux;
  const p1 = `${x2},${y2}`;
  const p2 = `${bx + nx * size},${by + ny * size}`;
  const p3 = `${bx - nx * size},${by - ny * size}`;
  return <polygon points={`${p1} ${p2} ${p3}`} fill={color} opacity={0.9} />;
}

export default function DnsResolver() {
  const [current, setCurrent] = useState(-1);

  const step = DNS_STEPS[current] ?? null;
  const isLast = current >= DNS_STEPS.length - 1;
  const activeNodes = new Set(step ? [step.from, step.to] : []);
  const doneNodes = new Set(
    DNS_STEPS.slice(0, current).flatMap((s) => [s.from, s.to]),
  );
  const activeEdge =
    step && step.from !== step.to ? [step.from, step.to] : null;

  function isEdgeActive(a, b) {
    if (!activeEdge) return false;
    return (
      (activeEdge[0] === a && activeEdge[1] === b) ||
      (activeEdge[0] === b && activeEdge[1] === a)
    );
  }

  function advance() {
    if (!isLast) setCurrent((c) => c + 1);
  }
  function reset() {
    setCurrent(-1);
  }

  return (
    <div className={style.container}>
      {/* ── Topologie-Diagramm ─────────────────────────────── */}
      <div className={style.svgWrapper}>
        <svg
          viewBox="0 0 620 295"
          width="100%"
          style={{ display: "block", margin: "0 auto" }}
        >
          {/* Kanten — immer sichtbar, aktive hervorgehoben */}
          {EDGES.map(([a, b], i) => (
            <EdgeLine key={i} from={a} to={b} active={isEdgeActive(a, b)} />
          ))}

          {/* Pfeilspitze auf der aktiven Kante */}
          {activeEdge && (
            <ArrowHead
              from={activeEdge[0]}
              to={activeEdge[1]}
              color="#fabd2f"
            />
          )}

          {/* Knoten — über den Kanten zeichnen */}
          {Object.keys(NODES).map((id) => (
            <NodeCircle
              key={id}
              id={id}
              active={activeNodes.has(id)}
              done={doneNodes.has(id)}
            />
          ))}
        </svg>
      </div>

      {/* ── Aktive Nachricht ───────────────────────────────── */}
      <div className={style.messageRow}>
        {step && activeEdge ? (
          <>
            <span className={style.msgFrom}>
              {NODES[activeEdge[0]].icon} {NODES[activeEdge[0]].label}
            </span>
            <span className={style.msgArrow}>→</span>
            <span className={style.msgTo}>
              {NODES[activeEdge[1]].icon} {NODES[activeEdge[1]].label}
            </span>
            <span className={style.msgQuery}>&ldquo;{step.query}&rdquo;</span>
            <span
              className={style.msgReply}
              style={{ color: step.answerColor }}
            >
              ↩ {step.answer}
            </span>
          </>
        ) : step && step.from === "browser" && step.to === "browser" ? (
          <>
            <span className={style.msgFrom}>🌐 Browser</span>
            <span className={style.msgQuery}>{step.query}</span>
            <span
              className={style.msgReply}
              style={{ color: step.answerColor }}
            >
              ↩ {step.answer}
            </span>
          </>
        ) : (
          <span className={style.msgPlaceholder}>
            Starte die Simulation um die Kommunikation zu sehen
          </span>
        )}
      </div>

      {/* ── Info-Box ───────────────────────────────────────── */}
      <div className={style.infoBox}>
        {step ? (
          <>
            <div className={style.infoTitle}>{step.title}</div>
            <p className={style.infoText}>{step.text}</p>
          </>
        ) : (
          <p className={style.infoPlaceholder}>
            Klicke auf &ldquo;Simulation starten&rdquo;, um die DNS-Auflösung
            von <code>github.com</code> Schritt für Schritt zu verfolgen.
          </p>
        )}
      </div>

      {/* ── Schritt-Punkte ─────────────────────────────────── */}
      <div className={style.dotRow}>
        {DNS_STEPS.map((s, i) => (
          <div
            key={i}
            className={`${style.dot} ${
              i === current ? style.dotActive : i < current ? style.dotDone : ""
            }`}
            title={s.title}
          />
        ))}
      </div>

      {/* ── Steuerung ──────────────────────────────────────── */}
      <div className={style.controls}>
        <button className={style.btn} onClick={advance} disabled={isLast}>
          {current < 0 ? "Simulation starten →" : "Nächster Schritt →"}
        </button>
        <button
          className={`${style.btn} ${style.btnSecondary}`}
          onClick={reset}
          disabled={current < 0}
        >
          ↺ Zurücksetzen
        </button>
        {current >= 0 && (
          <span className={style.counter}>
            {current + 1} / {DNS_STEPS.length}
          </span>
        )}
      </div>

      {/* ── Vollständige Flow-Übersicht am Ende ────────────── */}
      {isLast && (
        <div className={style.flow}>
          {`Browser → OS-Cache → Resolver → Root-NS → TLD-NS (.com) → Auth-NS (github.com)\n                                                              ← IP: 140.82.121.4`}
        </div>
      )}
    </div>
  );
}
