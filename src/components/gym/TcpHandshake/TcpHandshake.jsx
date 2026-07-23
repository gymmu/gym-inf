import { useEffect, useState } from "react";
import style from "./TcpHandshake.module.css";

const STEPS = [
  {
    id: 0,
    phase: "Verbindungsaufbau",
    from: "client",
    to: "server",
    flag: "SYN",
    flagColor: "#fabd2f",
    label: "SYN",
    seq: "seq=100",
    desc: "Client möchte eine Verbindung aufbauen. Sendet SYN-Paket mit zufälliger Sequenznummer (seq=100).",
    clientState: "SYN_SENT",
    serverState: "LISTEN",
  },
  {
    id: 1,
    phase: "Verbindungsaufbau",
    from: "server",
    to: "client",
    flag: "SYN-ACK",
    flagColor: "#83a598",
    label: "SYN-ACK",
    seq: "seq=300, ack=101",
    desc: "Server bestätigt (ACK=101 = seq+1) und sendet seine eigene Sequenznummer (seq=300). Verbindung halb offen.",
    clientState: "SYN_SENT",
    serverState: "SYN_RECEIVED",
  },
  {
    id: 2,
    phase: "Verbindungsaufbau",
    from: "client",
    to: "server",
    flag: "ACK",
    flagColor: "#b8bb26",
    label: "ACK",
    seq: "ack=301",
    desc: "Client bestätigt die Sequenznummer des Servers (ack=301). Verbindung ist jetzt beidseitig hergestellt.",
    clientState: "ESTABLISHED",
    serverState: "ESTABLISHED",
  },
  {
    id: 3,
    phase: "Datentransfer",
    from: "client",
    to: "server",
    flag: "DATA",
    flagColor: "#8ec07c",
    label: "GET /index.html",
    seq: "seq=101",
    desc: "Verbindung steht — Daten fliessen. Jedes Datenpaket wird mit ACK bestätigt.",
    clientState: "ESTABLISHED",
    serverState: "ESTABLISHED",
  },
  {
    id: 4,
    phase: "Verbindungsabbau",
    from: "server",
    to: "client",
    flag: "DATA+ACK",
    flagColor: "#8ec07c",
    label: "200 OK + Daten",
    seq: "seq=301",
    desc: "Server antwortet mit den angeforderten Daten und einem ACK für die Anfrage.",
    clientState: "ESTABLISHED",
    serverState: "ESTABLISHED",
  },
  {
    id: 5,
    phase: "Verbindungsabbau",
    from: "client",
    to: "server",
    flag: "FIN",
    flagColor: "#d3869b",
    label: "FIN",
    seq: "seq=200",
    desc: "Client signalisiert: keine weiteren Daten. Verbindungsabbau eingeleitet (4-Way-FIN).",
    clientState: "FIN_WAIT",
    serverState: "ESTABLISHED",
  },
  {
    id: 6,
    phase: "Verbindungsabbau",
    from: "server",
    to: "client",
    flag: "FIN-ACK",
    flagColor: "#d3869b",
    label: "FIN-ACK",
    seq: "ack=201",
    desc: "Server bestätigt den FIN. Danach sendet er selbst einen FIN um die Verbindung vollständig zu schliessen.",
    clientState: "FIN_WAIT",
    serverState: "CLOSE_WAIT",
  },
];

function Arrow({ toServer, color, flag, seq, visible, animating }) {
  return (
    <div
      className={`${style.arrowRow} ${visible ? style.visible : ""} ${animating ? style.animating : ""}`}
    >
      {toServer ? (
        <>
          <div className={style.arrowSpacer} />
          <div className={style.arrowTrack}>
            <div className={style.arrowLine} style={{ background: color }} />
            <div
              className={style.arrowHead}
              style={{ borderLeft: `10px solid ${color}` }}
            />
            <div className={style.arrowPacket} style={{ borderColor: color }}>
              <span className={style.flagLabel} style={{ color }}>
                {flag}
              </span>
              <span className={style.seqLabel}>{seq}</span>
            </div>
          </div>
          <div className={style.arrowSpacer} />
        </>
      ) : (
        <>
          <div className={style.arrowSpacer} />
          <div className={style.arrowTrackRev}>
            <div
              className={style.arrowHeadRev}
              style={{ borderRight: `10px solid ${color}` }}
            />
            <div className={style.arrowLine} style={{ background: color }} />
            <div
              className={style.arrowPacketRev}
              style={{ borderColor: color }}
            >
              <span className={style.flagLabel} style={{ color }}>
                {flag}
              </span>
              <span className={style.seqLabel}>{seq}</span>
            </div>
          </div>
          <div className={style.arrowSpacer} />
        </>
      )}
    </div>
  );
}

export default function TcpHandshakeAnim() {
  const [current, setCurrent] = useState(-1);
  const [animating, setAnimating] = useState(false);
  const [auto, setAuto] = useState(false);

  const step = STEPS[current] ?? null;

  function advance() {
    if (animating) return;
    if (current < STEPS.length - 1) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 700);
      setCurrent((c) => c + 1);
    }
  }

  function reset() {
    setAuto(false);
    setCurrent(-1);
  }

  useEffect(() => {
    if (!auto) return;
    if (current >= STEPS.length - 1) {
      setAuto(false);
      return;
    }
    const t = setTimeout(advance, 1200);
    return () => clearTimeout(t);
  }, [auto, current]);

  const clientState = step?.clientState ?? "CLOSED";
  const serverState = step?.serverState ?? "LISTEN";

  // Group steps by phase
  const phases = ["Verbindungsaufbau", "Datentransfer", "Verbindungsabbau"];

  return (
    <div className={style.wrapper}>
      {/* ── Diagram ─────────────────────────────────────────── */}
      <div className={style.diagram}>
        {/* Column headers */}
        <div className={style.colHeader}>
          <div className={style.endpoint} style={{ borderColor: "#83a598" }}>
            <span>💻</span>
            <strong style={{ color: "#83a598" }}>Client</strong>
            <span
              className={style.stateTag}
              style={{ background: "#3c3836", color: "#fabd2f" }}
            >
              {clientState}
            </span>
          </div>
          <div className={style.colCenter} />
          <div className={style.endpoint} style={{ borderColor: "#fe8019" }}>
            <span>🖥️</span>
            <strong style={{ color: "#fe8019" }}>Server</strong>
            <span
              className={style.stateTag}
              style={{ background: "#3c3836", color: "#fabd2f" }}
            >
              {serverState}
            </span>
          </div>
        </div>

        {/* Timeline lines */}
        <div className={style.timelines}>
          <div className={style.timeline} style={{ borderColor: "#83a598" }} />
          <div className={style.timelineCenter} />
          <div className={style.timeline} style={{ borderColor: "#fe8019" }} />
        </div>

        {/* Steps */}
        {STEPS.map((s) => (
          <Arrow
            key={s.id}
            toServer={s.from === "client"}
            color={s.flagColor}
            flag={s.label}
            seq={s.seq}
            visible={current >= s.id}
            animating={current === s.id && animating}
          />
        ))}
      </div>

      {/* ── Info box ─────────────────────────────────────────── */}
      <div className={style.infoBox}>
        {step ? (
          <>
            <div className={style.infoPhase} style={{ color: step.flagColor }}>
              {step.phase} — <strong>{step.label}</strong>
              <span className={style.seqInfo}>{step.seq}</span>
            </div>
            <div className={style.infoDesc}>{step.desc}</div>
          </>
        ) : (
          <div className={style.infoDesc} style={{ color: "#928374" }}>
            Klicke auf &ldquo;Nächster Schritt&rdquo; um den TCP-Handshake zu
            starten.
          </div>
        )}
      </div>

      {/* ── Controls ─────────────────────────────────────────── */}
      <div className={style.controls}>
        <button
          className={style.btn}
          onClick={advance}
          disabled={current >= STEPS.length - 1 || animating}
        >
          Nächster Schritt →
        </button>
        <button
          className={`${style.btn} ${style.btnSecondary}`}
          onClick={() => {
            setAuto(true);
            if (current === -1) setCurrent(-1);
          }}
          disabled={auto || current >= STEPS.length - 1}
        >
          ▶ Auto
        </button>
        <button
          className={`${style.btn} ${style.btnSecondary}`}
          onClick={reset}
        >
          ↺ Zurücksetzen
        </button>
        <span className={style.stepCounter}>
          {current < 0 ? "—" : `${current + 1} / ${STEPS.length}`}
        </span>
      </div>

      {/* ── Phase legend ─────────────────────────────────────── */}
      <div className={style.legend}>
        {phases.map((ph) => {
          const phSteps = STEPS.filter((s) => s.phase === ph);
          const done = phSteps.every((s) => current >= s.id);
          const active = phSteps.some((s) => current === s.id);
          return (
            <div
              key={ph}
              className={`${style.legendItem} ${done ? style.legendDone : ""} ${active ? style.legendActive : ""}`}
            >
              {ph}
            </div>
          );
        })}
      </div>
    </div>
  );
}
