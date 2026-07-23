import { useEffect, useRef, useState } from "react";
import style from "./VpnTunnel.module.css";

// ─── Layout (viewBox 760 × 310) ──────────────────────────────
// CLIENT (CH) ── ISP ── [VPN-Server (US)] ── ZIEL-SERVER (US)
//
// Modi:
//   plain  — kein VPN, ISP liest mit, Ziel antwortet normal
//   vpn    — VPN-Tunnel, ISP blind, Ziel sieht VPN-IP
//   geo    — kein VPN, Ziel-Server (US) blockt CH-IP; mit VPN (US-Server) klappt es

const CLIENT = {
  x: 75,
  y: 155,
  label: "Dein Gerät",
  sub: "🇨🇭 Schweiz",
  icon: "💻",
};
const ISP = { x: 265, y: 82, label: "ISP", sub: "", icon: "👁️" };
const VPN = { x: 450, y: 155, label: "VPN-Server", sub: "🇺🇸 USA", icon: "🛡️" };
const TARGET = {
  x: 660,
  y: 155,
  label: "Ziel-Server",
  sub: "🇺🇸 USA",
  icon: "🌐",
};

// Phasendauern ms
const DUR = {
  toIsp: 600,
  atIsp: 1000,
  toVpn: 600,
  atVpn: 1000,
  toTarget: 600,
  atTarget: 1000,
  blocked: 1200, // Pause beim Geblockt-Zustand
  retToVpn: 600,
  atVpnRet: 900,
  retToIsp: 600,
  atIspRet: 900,
  retToClient: 600,
  // Rückwurf (geo ohne VPN)
  retBlockedToIsp: 600,
  atIspBlocked: 800,
  retBlockedToClient: 600,
};

function lerp(a, b, t) {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

export default function VpnTunnel() {
  const [mode, setMode] = useState("vpn"); // "plain" | "vpn" | "geo"
  const [phase, setPhase] = useState("idle");
  const [t, setT] = useState(0);
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const startRef = useRef(null);

  useEffect(
    () => () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    },
    [],
  );

  function animatePhase(name, dur, onDone) {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    setPhase(name);
    setT(0);
    startRef.current = null;
    function tick(now) {
      if (!startRef.current) startRef.current = now;
      const p = Math.min((now - startRef.current) / dur, 1);
      setT(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDone();
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  function pausePhase(name, dur, onDone) {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    setPhase(name);
    setT(1);
    timerRef.current = setTimeout(onDone, dur);
  }

  function run() {
    if (phase !== "idle" && phase !== "done") return;

    if (mode === "plain") {
      animatePhase("toIsp", DUR.toIsp, () =>
        pausePhase("atIsp", DUR.atIsp, () =>
          animatePhase("toTarget", DUR.toTarget, () =>
            pausePhase("atTarget", DUR.atTarget, () =>
              animatePhase("retToIsp", DUR.retToIsp, () =>
                pausePhase("atIspRet", DUR.atIspRet, () =>
                  animatePhase("retToClient", DUR.retToClient, () =>
                    setPhase("done"),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    } else if (mode === "vpn") {
      animatePhase("toIsp", DUR.toIsp, () =>
        pausePhase("atIsp", DUR.atIsp, () =>
          animatePhase("toVpn", DUR.toVpn, () =>
            pausePhase("atVpn", DUR.atVpn, () =>
              animatePhase("toTarget", DUR.toTarget, () =>
                pausePhase("atTarget", DUR.atTarget, () =>
                  animatePhase("retToVpn", DUR.retToVpn, () =>
                    pausePhase("atVpnRet", DUR.atVpnRet, () =>
                      animatePhase("retToIsp", DUR.retToIsp, () =>
                        pausePhase("atIspRet", DUR.atIspRet, () =>
                          animatePhase("retToClient", DUR.retToClient, () =>
                            setPhase("done"),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      );
    } else {
      // geo-Modus: zwei Szenarien je nach geoVpn
      if (!geoVpnActive) {
        // Ohne VPN: Paket fliegt bis zum Ziel, wird geblockt, fliegt zurück
        animatePhase("toIsp", DUR.toIsp, () =>
          pausePhase("atIsp", DUR.atIsp, () =>
            animatePhase("toTarget", DUR.toTarget, () =>
              pausePhase("blocked", DUR.blocked, () =>
                animatePhase("retBlockedToIsp", DUR.retBlockedToIsp, () =>
                  pausePhase("atIspBlocked", DUR.atIspBlocked, () =>
                    animatePhase(
                      "retBlockedToClient",
                      DUR.retBlockedToClient,
                      () => setPhase("done"),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      } else {
        // Mit VPN (US): wie normaler VPN-Flow, Ziel nimmt an
        animatePhase("toIsp", DUR.toIsp, () =>
          pausePhase("atIsp", DUR.atIsp, () =>
            animatePhase("toVpn", DUR.toVpn, () =>
              pausePhase("atVpn", DUR.atVpn, () =>
                animatePhase("toTarget", DUR.toTarget, () =>
                  pausePhase("atTarget", DUR.atTarget, () =>
                    animatePhase("retToVpn", DUR.retToVpn, () =>
                      pausePhase("atVpnRet", DUR.atVpnRet, () =>
                        animatePhase("retToIsp", DUR.retToIsp, () =>
                          pausePhase("atIspRet", DUR.atIspRet, () =>
                            animatePhase("retToClient", DUR.retToClient, () =>
                              setPhase("done"),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    }
  }

  // Geo-Sub-Toggle (nur im geo-Modus sichtbar)
  const [geoVpnActive, setGeoVpnActive] = useState(false);

  const isRunning = phase !== "idle" && phase !== "done";
  const isVpn = mode === "vpn" || (mode === "geo" && geoVpnActive);
  const isGeo = mode === "geo";
  const isBlocked =
    phase === "blocked" ||
    phase === "retBlockedToIsp" ||
    phase === "atIspBlocked" ||
    phase === "retBlockedToClient";

  // ─── Paketposition ────────────────────────────────────────
  let packetPos = null;
  let showPacket = false;

  if (phase === "toIsp") {
    packetPos = lerp(CLIENT, ISP, t);
    showPacket = true;
  } else if (phase === "atIsp") {
    packetPos = ISP;
    showPacket = true;
  } else if (phase === "toVpn") {
    packetPos = lerp(ISP, VPN, t);
    showPacket = true;
  } else if (phase === "atVpn") {
    packetPos = VPN;
    showPacket = true;
  } else if (phase === "toTarget") {
    packetPos = lerp(isVpn ? VPN : ISP, TARGET, t);
    showPacket = true;
  } else if (phase === "atTarget") {
    packetPos = TARGET;
    showPacket = true;
  } else if (phase === "blocked") {
    packetPos = TARGET;
    showPacket = true;
  } else if (phase === "retToVpn") {
    packetPos = lerp(TARGET, VPN, t);
    showPacket = true;
  } else if (phase === "atVpnRet") {
    packetPos = VPN;
    showPacket = true;
  } else if (phase === "retToIsp") {
    packetPos = lerp(isVpn ? VPN : TARGET, ISP, t);
    showPacket = true;
  } else if (phase === "atIspRet") {
    packetPos = ISP;
    showPacket = true;
  } else if (phase === "retToClient") {
    packetPos = lerp(ISP, CLIENT, t);
    showPacket = true;
  }
  // Geo-Rückwurf
  else if (phase === "retBlockedToIsp") {
    packetPos = lerp(TARGET, ISP, t);
    showPacket = true;
  } else if (phase === "atIspBlocked") {
    packetPos = ISP;
    showPacket = true;
  } else if (phase === "retBlockedToClient") {
    packetPos = lerp(ISP, CLIENT, t);
    showPacket = true;
  }

  // ─── Paket-Darstellung ───────────────────────────────────
  let packetColor = "#83a598";
  let packetLabel = "";
  let packetInner = "📦";

  if (mode === "plain") {
    packetColor = "#fb4934";
    packetInner = "📦";
    const isReturn = [
      "atTarget",
      "retToIsp",
      "atIspRet",
      "retToClient",
    ].includes(phase);
    packetLabel = isReturn ? "200 OK — Klartext" : "GET /video — Klartext";
  } else if (mode === "vpn") {
    if (["toIsp", "atIsp", "toVpn"].includes(phase)) {
      packetColor = "#b8bb26";
      packetLabel = "███ verschlüsselt ███";
      packetInner = "🔒";
    } else if (phase === "atVpn") {
      packetColor = "#fabd2f";
      packetLabel = "wird entpackt…";
      packetInner = "📦";
    } else if (["toTarget", "atTarget"].includes(phase)) {
      packetColor = "#83a598";
      packetLabel = "GET /video (entpackt)";
      packetInner = "📦";
    } else if (phase === "retToVpn") {
      packetColor = "#83a598";
      packetLabel = "200 OK (entpackt)";
      packetInner = "📦";
    } else if (phase === "atVpnRet") {
      packetColor = "#fabd2f";
      packetLabel = "wird eingepackt…";
      packetInner = "🔒";
    } else if (["retToIsp", "atIspRet", "retToClient"].includes(phase)) {
      packetColor = "#b8bb26";
      packetLabel = "███ verschlüsselt ███";
      packetInner = "🔒";
    }
  } else {
    // geo
    if (!geoVpnActive) {
      packetColor = "#fb4934";
      packetInner = "📦";
      if (phase === "blocked") {
        packetColor = "#fb4934";
        packetLabel = "403 Blocked 🚫";
        packetInner = "🚫";
      } else if (
        ["retBlockedToIsp", "atIspBlocked", "retBlockedToClient"].includes(
          phase,
        )
      ) {
        packetLabel = "403 Blocked — zurück";
      } else {
        packetLabel = "GET /video — 🇨🇭";
      }
    } else {
      // geo + VPN — identisch zu vpn-Modus, aber Request-Label zeigt 🇺🇸
      if (["toIsp", "atIsp", "toVpn"].includes(phase)) {
        packetColor = "#b8bb26";
        packetLabel = "███ verschlüsselt ███";
        packetInner = "🔒";
      } else if (phase === "atVpn") {
        packetColor = "#fabd2f";
        packetLabel = "wird entpackt…";
        packetInner = "📦";
      } else if (["toTarget", "atTarget"].includes(phase)) {
        packetColor = "#83a598";
        packetLabel = "GET /video — 🇺🇸 IP";
        packetInner = "📦";
      } else if (phase === "retToVpn") {
        packetColor = "#83a598";
        packetLabel = "200 OK (entpackt)";
        packetInner = "📦";
      } else if (phase === "atVpnRet") {
        packetColor = "#fabd2f";
        packetLabel = "wird eingepackt…";
        packetInner = "🔒";
      } else if (["retToIsp", "atIspRet", "retToClient"].includes(phase)) {
        packetColor = "#b8bb26";
        packetLabel = "███ verschlüsselt ███";
        packetInner = "🔒";
      }
    }
  }

  // ─── Knotenreaktionen ────────────────────────────────────
  const ispActive =
    phase === "atIsp" || phase === "atIspRet" || phase === "atIspBlocked";
  const ispSeesPlain =
    (mode === "plain" || (mode === "geo" && !geoVpnActive)) && ispActive;
  const ispBlind = isVpn && ispActive;

  const vpnAtHin = phase === "atVpn";
  const vpnAtRet = phase === "atVpnRet";

  const targetActive = phase === "atTarget";
  const targetBlocked = phase === "blocked";

  // Info-Text unten im SVG
  let legendText = "";
  if (mode === "plain")
    legendText = "ISP sieht: Verbindung + vollständigen Inhalt im Klartext";
  else if (mode === "vpn")
    legendText = "ISP sieht: Verbindung zu VPN-Server — Inhalt verschlüsselt";
  else if (mode === "geo" && !geoVpnActive)
    legendText = "Ziel-Server erkennt CH-IP → Zugriff verweigert";
  else legendText = "Ziel-Server sieht US-IP des VPN-Servers → Zugriff erlaubt";

  return (
    <div className={style.wrapper}>
      {/* ── Toggle Hauptmodus ── */}
      <div className={style.toggle}>
        <button
          className={`${style.toggleBtn} ${mode === "plain" ? style.toggleActive : ""}`}
          style={
            mode === "plain" ? { borderColor: "#fb4934", color: "#fb4934" } : {}
          }
          onClick={() => {
            setMode("plain");
            setPhase("idle");
          }}
          disabled={isRunning}
        >
          Ohne VPN
        </button>
        <button
          className={`${style.toggleBtn} ${mode === "vpn" ? style.toggleActive : ""}`}
          style={
            mode === "vpn" ? { borderColor: "#b8bb26", color: "#b8bb26" } : {}
          }
          onClick={() => {
            setMode("vpn");
            setPhase("idle");
          }}
          disabled={isRunning}
        >
          Mit VPN
        </button>
        <button
          className={`${style.toggleBtn} ${mode === "geo" ? style.toggleActive : ""}`}
          style={
            mode === "geo" ? { borderColor: "#fe8019", color: "#fe8019" } : {}
          }
          onClick={() => {
            setMode("geo");
            setPhase("idle");
          }}
          disabled={isRunning}
        >
          Geoblocking
        </button>
      </div>

      {/* ── Geo-Sub-Toggle ── */}
      {isGeo && (
        <div className={style.geoSubToggle}>
          <button
            className={`${style.geoBtn} ${!geoVpnActive ? style.geoBtnActive : ""}`}
            style={
              !geoVpnActive ? { borderColor: "#fb4934", color: "#fb4934" } : {}
            }
            onClick={() => {
              setGeoVpnActive(false);
              setPhase("idle");
            }}
            disabled={isRunning}
          >
            Ohne VPN — direkt aus 🇨🇭
          </button>
          <button
            className={`${style.geoBtn} ${geoVpnActive ? style.geoBtnActive : ""}`}
            style={
              geoVpnActive ? { borderColor: "#b8bb26", color: "#b8bb26" } : {}
            }
            onClick={() => {
              setGeoVpnActive(true);
              setPhase("idle");
            }}
            disabled={isRunning}
          >
            Mit VPN — über 🇺🇸 Server
          </button>
        </div>
      )}

      <svg
        viewBox="0 0 760 310"
        className={style.svg}
        aria-label="VPN-Tunnel-Diagramm"
      >
        {/* ── Tunnel-Box ── */}
        {isVpn && (
          <>
            <rect
              x={CLIENT.x - 32}
              y={105}
              width={VPN.x - CLIENT.x + 66}
              height={96}
              rx={14}
              fill="rgba(184,187,38,0.06)"
              stroke="#b8bb26"
              strokeWidth={1.5}
              strokeDasharray="6 4"
            />
            <text
              x={(CLIENT.x + VPN.x) / 2}
              y={101}
              textAnchor="middle"
              fill="#b8bb26"
              fontSize={9}
              style={{ userSelect: "none" }}
            >
              verschlüsselter Tunnel
            </text>
          </>
        )}

        {/* ── Geo-Grenze: vertikale Linie zwischen ISP und VPN/TARGET ── */}
        {isGeo && (
          <>
            <line
              x1={370}
              y1={20}
              x2={370}
              y2={270}
              stroke="#fe8019"
              strokeWidth={1}
              strokeDasharray="4 3"
            />
            <text
              x={310}
              y={18}
              textAnchor="middle"
              fill="#928374"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              🇨🇭 CH
            </text>
            <text
              x={430}
              y={18}
              textAnchor="middle"
              fill="#928374"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              🇺🇸 US
            </text>
          </>
        )}

        {/* ── Verbindungslinien ── */}
        <line
          x1={CLIENT.x + 30}
          y1={CLIENT.y}
          x2={ISP.x - 20}
          y2={ISP.y}
          stroke="#504945"
          strokeWidth={1.5}
          strokeDasharray="5 4"
        />

        {isVpn && (
          <line
            x1={ISP.x + 20}
            y1={ISP.y}
            x2={VPN.x - 34}
            y2={VPN.y}
            stroke="#504945"
            strokeWidth={1.5}
            strokeDasharray="5 4"
          />
        )}
        {!isVpn && (
          <line
            x1={ISP.x + 20}
            y1={ISP.y}
            x2={TARGET.x - 30}
            y2={TARGET.y}
            stroke="#504945"
            strokeWidth={1.5}
            strokeDasharray="5 4"
          />
        )}
        {isVpn && (
          <line
            x1={VPN.x + 34}
            y1={VPN.y}
            x2={TARGET.x - 30}
            y2={TARGET.y}
            stroke="#504945"
            strokeWidth={1.5}
            strokeDasharray="5 4"
          />
        )}

        {/* ── ISP-Label ── */}
        {ispSeesPlain && (
          <g>
            <rect
              x={ISP.x - 62}
              y={ISP.y + 28}
              width={124}
              height={18}
              rx={4}
              fill="#fb4934"
              opacity={0.9}
            />
            <text
              x={ISP.x}
              y={ISP.y + 41}
              textAnchor="middle"
              fill="#1d2021"
              fontSize={10}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              {mode === "geo" ? "sieht CH-IP" : "Liest mit! ⚠️"}
            </text>
          </g>
        )}
        {ispBlind && (
          <g>
            <rect
              x={ISP.x - 62}
              y={ISP.y + 28}
              width={124}
              height={18}
              rx={4}
              fill="#3c3836"
            />
            <text
              x={ISP.x}
              y={ISP.y + 41}
              textAnchor="middle"
              fill="#b8bb26"
              fontSize={10}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              Sieht nur ███
            </text>
          </g>
        )}

        {/* ── Knoten: CLIENT ── */}
        <rect
          x={CLIENT.x - 30}
          y={CLIENT.y - 42}
          width={60}
          height={84}
          rx={8}
          fill="#3c3836"
          stroke="#83a598"
          strokeWidth={2}
        />
        <text
          x={CLIENT.x}
          y={CLIENT.y - 18}
          textAnchor="middle"
          fontSize={18}
          style={{ userSelect: "none" }}
        >
          {CLIENT.icon}
        </text>
        <text
          x={CLIENT.x}
          y={CLIENT.y + 2}
          textAnchor="middle"
          fill="#83a598"
          fontSize={10}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          {CLIENT.label}
        </text>
        <text
          x={CLIENT.x}
          y={CLIENT.y + 16}
          textAnchor="middle"
          fill="#928374"
          fontSize={8}
          style={{ userSelect: "none" }}
        >
          192.168.1.10
        </text>
        <text
          x={CLIENT.x}
          y={CLIENT.y + 28}
          textAnchor="middle"
          fill="#928374"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          {CLIENT.sub}
        </text>

        {/* ── Knoten: ISP ── */}
        <rect
          x={ISP.x - 30}
          y={ISP.y - 28}
          width={60}
          height={56}
          rx={8}
          fill="#3c3836"
          stroke={ispSeesPlain ? "#fb4934" : ispBlind ? "#b8bb26" : "#504945"}
          strokeWidth={ispActive ? 2.5 : 1.5}
        />
        <text
          x={ISP.x}
          y={ISP.y - 4}
          textAnchor="middle"
          fontSize={18}
          style={{ userSelect: "none" }}
        >
          {ISP.icon}
        </text>
        <text
          x={ISP.x}
          y={ISP.y + 16}
          textAnchor="middle"
          fill="#a89984"
          fontSize={10}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          {ISP.label}
        </text>

        {/* ── Knoten: VPN-Server ── */}
        {isVpn && (
          <g>
            <rect
              x={VPN.x - 34}
              y={VPN.y - 42}
              width={68}
              height={84}
              rx={8}
              fill="#3c3836"
              stroke={vpnAtHin || vpnAtRet ? "#fabd2f" : "#b8bb26"}
              strokeWidth={2}
            />
            <text
              x={VPN.x}
              y={VPN.y - 18}
              textAnchor="middle"
              fontSize={18}
              style={{ userSelect: "none" }}
            >
              {VPN.icon}
            </text>
            <text
              x={VPN.x}
              y={VPN.y + 2}
              textAnchor="middle"
              fill="#b8bb26"
              fontSize={10}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              {VPN.label}
            </text>
            <text
              x={VPN.x}
              y={VPN.y + 16}
              textAnchor="middle"
              fill="#928374"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              185.220.0.5
            </text>
            <text
              x={VPN.x}
              y={VPN.y + 28}
              textAnchor="middle"
              fill="#928374"
              fontSize={9}
              style={{ userSelect: "none" }}
            >
              {VPN.sub}
            </text>
          </g>
        )}

        {/* ── Knoten: TARGET ── */}
        <rect
          x={TARGET.x - 30}
          y={TARGET.y - 42}
          width={60}
          height={84}
          rx={8}
          fill="#3c3836"
          stroke={
            targetBlocked ? "#fb4934" : targetActive ? "#83a598" : "#504945"
          }
          strokeWidth={targetActive || targetBlocked ? 2.5 : 1.5}
        />
        <text
          x={TARGET.x}
          y={TARGET.y - 18}
          textAnchor="middle"
          fontSize={18}
          style={{ userSelect: "none" }}
        >
          {TARGET.icon}
        </text>
        <text
          x={TARGET.x}
          y={TARGET.y + 2}
          textAnchor="middle"
          fill="#ebdbb2"
          fontSize={10}
          fontWeight="700"
          style={{ userSelect: "none" }}
        >
          {TARGET.label}
        </text>
        <text
          x={TARGET.x}
          y={TARGET.y + 16}
          textAnchor="middle"
          fill="#928374"
          fontSize={8}
          style={{ userSelect: "none" }}
        >
          {isGeo ? "nur für 🇺🇸" : "example.com"}
        </text>
        <text
          x={TARGET.x}
          y={TARGET.y + 28}
          textAnchor="middle"
          fill="#928374"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          {TARGET.sub}
        </text>

        {/* Blocked-Label beim Target */}
        {targetBlocked && (
          <g>
            <rect
              x={TARGET.x - 60}
              y={TARGET.y + 50}
              width={120}
              height={20}
              rx={4}
              fill="#fb4934"
              opacity={0.92}
            />
            <text
              x={TARGET.x}
              y={TARGET.y + 64}
              textAnchor="middle"
              fill="#1d2021"
              fontSize={11}
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              🚫 Zugriff verweigert
            </text>
          </g>
        )}

        {/* Absender-IP beim Target */}
        {(targetActive ||
          [
            "retToVpn",
            "atVpnRet",
            "retToIsp",
            "atIspRet",
            "retToClient",
            "done",
          ].includes(phase)) && (
          <g>
            <rect
              x={TARGET.x - 58}
              y={TARGET.y + 50}
              width={116}
              height={28}
              rx={4}
              fill="#1d2021"
            />
            <text
              x={TARGET.x}
              y={TARGET.y + 62}
              textAnchor="middle"
              fill="#928374"
              fontSize={8}
              style={{ userSelect: "none" }}
            >
              sieht Absender-IP:
            </text>
            <text
              x={TARGET.x}
              y={TARGET.y + 74}
              textAnchor="middle"
              fill={isVpn ? "#b8bb26" : "#fb4934"}
              fontSize={9}
              fontFamily="monospace"
              fontWeight="700"
              style={{ userSelect: "none" }}
            >
              {isVpn ? "185.220.0.5 🇺🇸" : "84.75.12.3 🇨🇭"}
            </text>
          </g>
        )}

        {/* ── Animiertes Paket ── */}
        {showPacket && packetPos && (
          <g>
            <circle
              cx={packetPos.x}
              cy={packetPos.y}
              r={20}
              fill={packetColor}
              opacity={0.93}
            />
            <text
              x={packetPos.x}
              y={packetPos.y + 6}
              textAnchor="middle"
              fontSize={14}
              style={{ userSelect: "none", pointerEvents: "none" }}
            >
              {packetInner}
            </text>
            <rect
              x={packetPos.x - 76}
              y={packetPos.y - 44}
              width={152}
              height={16}
              rx={4}
              fill="#1d2021"
              opacity={0.93}
            />
            <text
              x={packetPos.x}
              y={packetPos.y - 32}
              textAnchor="middle"
              fill={packetColor}
              fontSize={9}
              fontFamily="monospace"
              style={{ userSelect: "none", pointerEvents: "none" }}
            >
              {packetLabel}
            </text>
          </g>
        )}

        {/* ── Legende ── */}
        <text
          x={380}
          y={300}
          textAnchor="middle"
          fill="#504945"
          fontSize={9}
          style={{ userSelect: "none" }}
        >
          {legendText}
        </text>
      </svg>

      {/* Steuerung */}
      <div className={style.controls}>
        <button className={style.playBtn} onClick={run} disabled={isRunning}>
          {isRunning
            ? "Läuft…"
            : phase === "done"
              ? "▶ Nochmal"
              : "▶ Paket senden"}
        </button>
      </div>

      {/* Info-Box */}
      <div
        className={style.infoBox}
        style={{
          borderColor:
            mode === "geo" ? "#fe8019" : isVpn ? "#b8bb26" : "#fb4934",
        }}
      >
        {mode === "plain" && (
          <>
            <strong style={{ color: "#fb4934" }}>Ohne VPN:</strong> Das Paket
            läuft im Klartext über den ISP — sowohl Hin- als auch Rückweg. Der
            ISP sieht Zieladresse, Methode, Inhalt und Antwort vollständig.
          </>
        )}
        {mode === "vpn" && (
          <>
            <strong style={{ color: "#b8bb26" }}>Mit VPN:</strong> Dein Gerät
            verschlüsselt das Paket bevor es das Heimnetz verlässt. Der ISP
            sieht nur, dass du mit dem VPN-Server kommunizierst — nicht wohin
            oder was. Der gesamte Rückweg ist ebenfalls verschlüsselt.
          </>
        )}
        {mode === "geo" && !geoVpnActive && (
          <>
            <strong style={{ color: "#fe8019" }}>Geoblocking:</strong> Der
            Ziel-Server schaut auf die Absender-IP und prüft, aus welchem Land
            die Anfrage kommt. Deine Schweizer IP wird erkannt — Zugriff
            verweigert.
          </>
        )}
        {mode === "geo" && geoVpnActive && (
          <>
            <strong style={{ color: "#b8bb26" }}>
              VPN umgeht Geoblocking:
            </strong>{" "}
            Der VPN-Server steht in den USA. Der Ziel-Server sieht nur die
            amerikanische IP des VPN-Servers — und erlaubt den Zugriff.
          </>
        )}
      </div>
    </div>
  );
}
