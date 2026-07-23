import { useState } from "react";
import style from "./PacketDiagram.module.css";

const LAYERS = [
  {
    id: "http",
    label: "HTTP-Nachricht (Anwendungsschicht)",
    color: "#b8bb26",
    textColor: "#1d2021",
    fields: [
      {
        name: "Methode",
        size: "",
        value: "GET",
        desc: "HTTP-Methode: GET (lesen), POST (senden), PUT, DELETE …",
      },
      {
        name: "Pfad",
        size: "",
        value: "/index.html",
        desc: "Welche Ressource auf dem Server angefordert wird",
      },
      {
        name: "Host",
        size: "",
        value: "github.com",
        desc: "Domain des Servers — wichtig wenn mehrere Domains auf einer IP liegen (Virtual Hosting)",
      },
      {
        name: "Nutzdaten",
        size: "",
        value: "(leer bei GET)",
        desc: "Bei POST: die gesendeten Formulardaten oder JSON-Daten",
      },
    ],
    desc: "Die eigentliche Anwendungsnachricht. Bei HTTPS ist dieser gesamte HTTP-Header für Dritte nicht lesbar.",
  },
  {
    id: "tcp",
    label: "TCP-Segment (Transportschicht)",
    color: "#fabd2f",
    textColor: "#1d2021",
    fields: [
      {
        name: "Quell-Port",
        size: "2 Byte",
        value: "54321",
        desc: "Zufällig gewählter Port des Clients — identifiziert die Verbindung auf Clientseite",
      },
      {
        name: "Ziel-Port",
        size: "2 Byte",
        value: "443 (HTTPS)",
        desc: "Dienst-Port des Servers. 80=HTTP, 443=HTTPS, 22=SSH",
      },
      {
        name: "Sequenznummer",
        size: "4 Byte",
        value: "seq=1001",
        desc: "Zählt Bytes — ermöglicht korrekte Reihenfolge beim Empfänger",
      },
      {
        name: "ACK-Nummer",
        size: "4 Byte",
        value: "ack=501",
        desc: "Nächste erwartete Sequenznummer — bestätigt Empfang bis zu dieser Nummer",
      },
      {
        name: "Flags",
        size: "6 Bit",
        value: "SYN / ACK / FIN",
        desc: "Steuerbits: SYN=Verbindungsaufbau, ACK=Bestätigung, FIN=Verbindungsende",
      },
    ],
    payload: "HTTP-Request (Nutzdaten)",
    desc: "Stellt zuverlässige, geordnete Übertragung sicher. Ports identifizieren den Dienst.",
  },
  {
    id: "ip",
    label: "IP-Paket (Internetschicht)",
    color: "#83a598",
    textColor: "#1d2021",
    fields: [
      {
        name: "Version",
        size: "4 Bit",
        value: "IPv4 (4)",
        desc: "IP-Version: 4 oder 6",
      },
      {
        name: "TTL",
        size: "1 Byte",
        value: "64",
        desc: "Time to Live — wird an jedem Router um 1 dekrementiert. Bei 0: Paket verworfen.",
      },
      {
        name: "Protokoll",
        size: "1 Byte",
        value: "6 (TCP)",
        desc: "Welches Transportprotokoll verwendet wird (6=TCP, 17=UDP)",
      },
      {
        name: "Quell-IP",
        size: "4 Byte",
        value: "192.168.1.10",
        desc: "IP-Adresse des Absenders",
      },
      {
        name: "Ziel-IP",
        size: "4 Byte",
        value: "140.82.121.4",
        desc: "IP-Adresse des Empfängers — bleibt auf dem gesamten Weg konstant",
      },
    ],
    payload: "TCP-Segment (Nutzdaten)",
    desc: "Adressiert das Paket global. Enthält Quell- und Ziel-IP-Adresse. Router lesen diesen Header.",
  },
  {
    id: "eth",
    label: "Ethernet-Frame (Netzzugang)",
    color: "#928374",
    textColor: "#ebdbb2",
    fields: [
      {
        name: "Ziel-MAC",
        size: "6 Byte",
        value: "AA:BB:CC:DD:EE:FF",
        desc: "MAC-Adresse des nächsten Hops (Router oder Zielgerät im selben Netz)",
      },
      {
        name: "Quell-MAC",
        size: "6 Byte",
        value: "11:22:33:44:55:66",
        desc: "MAC-Adresse des Absenders",
      },
      {
        name: "Typ",
        size: "2 Byte",
        value: "0x0800 (IPv4)",
        desc: "Welches Protokoll der Nutzdaten-Teil enthält",
      },
    ],
    payload: "IP-Paket (Nutzdaten)",
    trailer: {
      name: "FCS (Prüfsumme)",
      size: "4 Byte",
      desc: "Frame Check Sequence — prüft auf Übertragungsfehler",
    },
    desc: "Die unterste Schicht — überträgt Daten im lokalen Netz (LAN). Wird an jedem Router neu erstellt.",
  },
];

export default function PacketDiagram() {
  const [activeLayer, setActiveLayer] = useState("ip");
  const [activeField, setActiveField] = useState(null);
  const [exploded, setExploded] = useState(false);

  const layer = LAYERS.find((l) => l.id === activeLayer);
  const field = activeField
    ? layer?.fields.find((f) => f.name === activeField)
    : null;

  return (
    <div className={style.wrapper}>
      {/* ── Controls ─────────────────────────────────────────── */}
      <div className={style.controls}>
        <span className={style.hint}>
          Klicke auf eine Schicht oder ein Feld:
        </span>
        <button
          className={`${style.toggleBtn} ${exploded ? style.active : ""}`}
          onClick={() => setExploded((e) => !e)}
        >
          {exploded ? "▲ Schichten zuklappen" : "▼ Schichten aufklappen"}
        </button>
      </div>

      {/* ── Packet stack ─────────────────────────────────────── */}
      <div className={`${style.stack} ${exploded ? style.exploded : ""}`}>
        {LAYERS.map((l, i) => {
          const isActive = l.id === activeLayer;
          const offset = exploded ? 0 : i * 4;

          return (
            <div
              key={l.id}
              className={`${style.layer} ${isActive ? style.activeLayer : ""}`}
              style={{
                background: l.color,
                color: l.textColor,
                transform: exploded ? "none" : `translateY(${offset}px)`,
                zIndex: LAYERS.length - i,
              }}
              onClick={() => {
                setActiveLayer(l.id);
                setActiveField(null);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveLayer(l.id)}
            >
              <span className={style.layerLabel}>{l.label}</span>
              {exploded && (
                <div className={style.fields}>
                  {l.fields.map((f) => (
                    <div
                      key={f.name}
                      className={`${style.field} ${activeField === f.name && isActive ? style.activeField : ""}`}
                      style={{ borderColor: l.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLayer(l.id);
                        setActiveField(activeField === f.name ? null : f.name);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        (setActiveLayer(l.id), setActiveField(f.name))
                      }
                    >
                      <span className={style.fieldName}>{f.name}</span>
                      {f.size && (
                        <span className={style.fieldSize}>{f.size}</span>
                      )}
                      <span className={style.fieldValue}>{f.value}</span>
                    </div>
                  ))}
                  {l.payload && (
                    <div className={style.payloadField}>↓ {l.payload}</div>
                  )}
                  {l.trailer && (
                    <div
                      className={`${style.field} ${activeField === l.trailer.name && isActive ? style.activeField : ""}`}
                      style={{
                        borderColor: l.color,
                        background: "rgba(0,0,0,0.15)",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLayer(l.id);
                        setActiveField(l.trailer.name);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        (setActiveLayer(l.id), setActiveField(l.trailer.name))
                      }
                    >
                      <span className={style.fieldName}>{l.trailer.name}</span>
                      <span className={style.fieldSize}>{l.trailer.size}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Info panel ───────────────────────────────────────── */}
      <div className={style.info}>
        {field ? (
          <>
            <div className={style.infoTitle} style={{ color: layer.color }}>
              {layer.label} — <strong>{field.name}</strong>
              {field.size && (
                <span className={style.infoSize}>{field.size}</span>
              )}
            </div>
            <div className={style.infoValue}>
              <code>{field.value}</code>
            </div>
            <div className={style.infoDesc}>{field.desc}</div>
          </>
        ) : layer ? (
          <>
            <div className={style.infoTitle} style={{ color: layer.color }}>
              {layer.label}
            </div>
            <div className={style.infoDesc}>{layer.desc}</div>
            {!exploded && (
              <div className={style.infoHint}>
                Klappe die Schichten auf um einzelne Felder zu sehen.
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
