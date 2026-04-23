import { useState } from "react"
import style from "./NetworkDiagram.module.css"

// Layout (viewBox 0 0 760 560), Radius R=28, Label bei y+44
//
// Horizontales Raster: cx-Abstände mind. 100px (2×R + 44px Luft)
// Vertikale Ebenen: 110px auseinander (genug für Kreis + Label + Linienlabel)
//
//  Ebene 1 (y= 50):  Internet                          cx=380
//  Ebene 2 (y=160):  ISP-Router                        cx=380
//  Ebene 3 (y=270):  Heimrouter                        cx=380
//  Ebene 4 (y=390):  Smartphone  Switch  Smart TV      cx=100 / 380 / 660
//  Ebene 5 (y=510):  PC  Laptop  NAS  Drucker          cx=230 / 340 / 450 / 560

const R = 28 // Kreisradius

const DEVICES = {
  internet: {
    id: "internet",
    label: "Internet",
    x: 380,
    y: 50,
    icon: "🌐",
    color: "#fb4934",
    desc: "Das globale Netzwerk — Millionen von Routern und Servern weltweit verbunden.",
  },
  isp: {
    id: "isp",
    label: "ISP-Router",
    x: 380,
    y: 160,
    icon: "📡",
    color: "#fe8019",
    desc: "Der Router Ihres Internetanbieters (ISP). Vergibt Ihrem Heimrouter eine öffentliche IP-Adresse.",
  },
  router: {
    id: "router",
    label: "Heimrouter",
    x: 380,
    y: 270,
    icon: "🔀",
    color: "#fabd2f",
    desc: "Verbindet Ihr Heimnetz mit dem Internet. Führt NAT durch, vergibt private IPs per DHCP, enthält Firewall und WLAN-Access-Point.",
  },
  phone: {
    id: "phone",
    label: "Smartphone",
    x: 90,
    y: 390,
    icon: "📱",
    color: "#b8bb26",
    desc: "Verbunden per WLAN (Wi-Fi). Erhält ebenfalls eine private IP vom Router.",
  },
  switch: {
    id: "switch",
    label: "Switch",
    x: 380,
    y: 390,
    icon: "🔌",
    color: "#83a598",
    desc: "Verbindet kabelgebundene Geräte im LAN. Lernt MAC-Adressen und leitet Pakete gezielt weiter (nicht an alle).",
  },
  tv: {
    id: "tv",
    label: "Smart TV",
    x: 670,
    y: 390,
    icon: "📺",
    color: "#d3869b",
    desc: "IoT-Gerät im WLAN. Empfehlung: in eigenem IoT-VLAN isolieren — Smart TVs können kompromittiert werden.",
  },
  pc1: {
    id: "pc1",
    label: "PC",
    x: 220,
    y: 510,
    icon: "💻",
    color: "#8ec07c",
    desc: "Erhält vom Router eine private IP (z.B. 192.168.1.10). Kommuniziert über den Switch mit dem Router.",
  },
  pc2: {
    id: "pc2",
    label: "Laptop",
    x: 330,
    y: 510,
    icon: "🖥️",
    color: "#8ec07c",
    desc: "Zweites kabelgebundenes Gerät im LAN (z.B. 192.168.1.11).",
  },
  nas: {
    id: "nas",
    label: "NAS",
    x: 440,
    y: 510,
    icon: "💾",
    color: "#8ec07c",
    desc: "Network Attached Storage — Netzwerkspeicher im LAN. Oft im Management-VLAN isoliert.",
  },
  printer: {
    id: "printer",
    label: "Drucker",
    x: 550,
    y: 510,
    icon: "🖨️",
    color: "#8ec07c",
    desc: "Netzwerkdrucker im LAN. Sicherheitsempfehlung: in eigenem VLAN isolieren.",
  },
}

// labelDx/labelDy: Versatz des Label-Texts vom Linienmittelpunkt
const LINKS = [
  {
    from: "internet",
    to: "isp",
    label: "WAN",
    dashed: false,
    color: "#fb4934",
    labelDx: 8,
    labelDy: -4,
  },
  {
    from: "isp",
    to: "router",
    label: "DSL/Fiber",
    dashed: false,
    color: "#fe8019",
    labelDx: 8,
    labelDy: -4,
  },
  {
    from: "router",
    to: "switch",
    label: "LAN (1 Gbit)",
    dashed: false,
    color: "#83a598",
    labelDx: 10,
    labelDy: -4,
  },
  {
    from: "router",
    to: "phone",
    label: "WLAN",
    dashed: true,
    color: "#b8bb26",
    labelDx: -36,
    labelDy: -6,
  },
  {
    from: "router",
    to: "tv",
    label: "WLAN",
    dashed: true,
    color: "#d3869b",
    labelDx: 8,
    labelDy: -6,
  },
  { from: "switch", to: "pc1", label: "", dashed: false, color: "#8ec07c" },
  { from: "switch", to: "pc2", label: "", dashed: false, color: "#8ec07c" },
  { from: "switch", to: "nas", label: "", dashed: false, color: "#8ec07c" },
  { from: "switch", to: "printer", label: "", dashed: false, color: "#8ec07c" },
]

function midpoint(a, b) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
}

export default function NetworkDiagram() {
  const [active, setActive] = useState("router")
  const dev = DEVICES[active]

  return (
    <div className={style.wrapper}>
      <svg
        viewBox="0 0 760 570"
        className={style.svg}
        role="img"
        aria-label="Heimnetzwerk-Diagramm">
        {/* ── Links ─────────────────────────────────────────── */}
        {LINKS.map((lnk, i) => {
          const a = DEVICES[lnk.from]
          const b = DEVICES[lnk.to]
          const mid = midpoint(a, b)
          return (
            <g key={i}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={lnk.color}
                strokeWidth={lnk.dashed ? 2 : 2.5}
                strokeDasharray={lnk.dashed ? "8 5" : undefined}
                strokeOpacity={0.55}
              />
              {lnk.label &&
                (() => {
                  const tx = mid.x + (lnk.labelDx ?? 6)
                  const ty = mid.y + (lnk.labelDy ?? -5)
                  const charW = 6.5
                  const w = lnk.label.length * charW
                  return (
                    <g style={{ pointerEvents: "none", userSelect: "none" }}>
                      <rect
                        x={tx - 3}
                        y={ty - 11}
                        width={w + 6}
                        height={14}
                        rx={3}
                        fill="#1d2021"
                        opacity={0.82}
                      />
                      <text
                        x={tx}
                        y={ty}
                        fill={lnk.color}
                        fontSize={10}
                        fontFamily="monospace">
                        {lnk.label}
                      </text>
                    </g>
                  )
                })()}
            </g>
          )
        })}

        {/* ── NAT / DHCP label rechts neben dem Router ──────── */}
        <rect
          x={416}
          y={263}
          width={178}
          height={18}
          rx={4}
          fill="#3c3836"
          opacity={0.85}
        />
        <text x={505} y={276} textAnchor="middle" fill="#fabd2f" fontSize={10}>
          NAT · DHCP · Firewall · WLAN
        </text>

        {/* ── VLAN hint unter Smart TV ──────────────────────── */}
        <rect
          x={592}
          y={432}
          width={136}
          height={18}
          rx={3}
          fill="#3c3836"
          opacity={0.8}
        />
        <text x={660} y={445} textAnchor="middle" fill="#d3869b" fontSize={10}>
          ⚠ IoT-VLAN empfohlen
        </text>

        {/* ── Devices ───────────────────────────────────────── */}
        {Object.values(DEVICES).map((d) => {
          const isActive = d.id === active
          return (
            <g
              key={d.id}
              className={style.node}
              onClick={() => setActive(d.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActive(d.id)}
              aria-label={d.label}>
              <circle
                cx={d.x}
                cy={d.y}
                r={R}
                fill={isActive ? d.color : "#3c3836"}
                stroke={d.color}
                strokeWidth={isActive ? 3 : 2}
                className={style.circle}
              />
              <text
                x={d.x}
                y={d.y + 6}
                textAnchor="middle"
                fontSize={16}
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {d.icon}
              </text>
              <text
                x={d.x}
                y={d.y + R + 16}
                textAnchor="middle"
                fill={isActive ? d.color : "#928374"}
                fontSize={11}
                fontWeight={isActive ? "700" : "400"}
                style={{ pointerEvents: "none", userSelect: "none" }}>
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>

      {/* ── Info panel ────────────────────────────────────────── */}
      <div className={style.info}>
        <span style={{ fontSize: 24 }}>{dev.icon}</span>
        <div>
          <div className={style.infoLabel} style={{ color: dev.color }}>
            {dev.label}
          </div>
          <div className={style.infoDesc}>{dev.desc}</div>
        </div>
      </div>
    </div>
  )
}
