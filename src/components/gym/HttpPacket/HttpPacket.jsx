import { useState } from "react";
import style from "./HttpPacket.module.css";

// Schichten des Pakets (von aussen nach innen)
// Jede Schicht hat: label, sublabel, fields[], color
// Für HTTPS: encrypted=true markiert Felder als verschlüsselt

const LAYERS = [
  {
    id: "ethernet",
    label: "Ethernet-Frame",
    sublabel: "Schicht 1 — Netzzugang",
    color: "#504945",
    textColor: "#a89984",
    fields: [
      { name: "Ziel-MAC", value: "AA:BB:CC:DD:EE:FF", encrypted: false },
      { name: "Quell-MAC", value: "11:22:33:44:55:66", encrypted: false },
      { name: "FCS", value: "Prüfsumme", encrypted: false },
    ],
    alwaysOpen: true,
    note: "MAC-Adressen sind lokal — ändern sich an jedem Router. Immer sichtbar.",
  },
  {
    id: "ip",
    label: "IP-Paket",
    sublabel: "Schicht 2 — Internet",
    color: "#458588",
    textColor: "#83a598",
    fields: [
      { name: "Quell-IP", value: "192.168.1.10", encrypted: false },
      { name: "Ziel-IP", value: "93.184.216.34", encrypted: false },
      { name: "TTL", value: "64", encrypted: false },
      { name: "Protokoll", value: "TCP (6)", encrypted: false },
    ],
    alwaysOpen: true,
    note: "IP-Adressen müssen für Router sichtbar sein — auch bei HTTPS immer offen.",
  },
  {
    id: "tcp",
    label: "TCP-Segment",
    sublabel: "Schicht 3 — Transport",
    color: "#689d6a",
    textColor: "#8ec07c",
    fields: [
      { name: "Quell-Port", value: "54832", encrypted: false },
      { name: "Ziel-Port", value: "443 (HTTPS)", encrypted: false },
      { name: "Seq-Nr.", value: "1001", encrypted: false },
      { name: "Flags", value: "ACK", encrypted: false },
    ],
    alwaysOpen: true,
    note: "TCP-Ports und Sequenznummern bleiben sichtbar — werden für Routing benötigt.",
  },
  {
    id: "tls",
    label: "TLS-Schicht",
    sublabel: "nur bei HTTPS",
    color: "#d79921",
    textColor: "#fabd2f",
    httpsOnly: true,
    fields: [
      { name: "TLS-Record-Typ", value: "Application Data", encrypted: false },
      { name: "TLS-Version", value: "1.3", encrypted: false },
      { name: "Länge", value: "1337 Byte", encrypted: false },
    ],
    note: "TLS umhüllt den HTTP-Inhalt — der Record-Header ist sichtbar, der Inhalt nicht.",
  },
  {
    id: "http",
    label: "HTTP-Nachricht",
    sublabel: "Schicht 4 — Anwendung",
    color: "#cc241d",
    textColor: "#fb4934",
    fields: [
      {
        name: "Methode + Pfad",
        value: "GET /konto/übersicht",
        encrypted: true,
      },
      { name: "Host", value: "meine-bank.ch", encrypted: true },
      { name: "Cookie", value: "session=geheim123", encrypted: true },
      { name: "Body", value: "username=anna&pw=…", encrypted: true },
    ],
    note: "Der gesamte HTTP-Inhalt — Methode, Pfad, Header, Body — ist bei HTTPS verschlüsselt.",
  },
];

// Was ein Angreifer (z. B. ISP) sieht
const ATTACKER_SEES = {
  http: [
    "Quell-IP und Ziel-IP (wer kommuniziert mit wem)",
    "Ziel-Port 80 → weiss: HTTP",
    "Methode & Pfad: GET /konto/übersicht",
    "Host-Header: meine-bank.ch",
    "Cookie & Body: Anmeldedaten im Klartext!",
  ],
  https: [
    "Quell-IP und Ziel-IP (wer kommuniziert mit wem)",
    "Ziel-Port 443 → weiss: HTTPS",
    "SNI (Server Name Indication): meine-bank.ch",
    "Datenmenge (ungefähr)",
    "Methode, Pfad, Cookie, Body: verschlüsselt ✓",
  ],
};

export default function HttpPacket() {
  const [mode, setMode] = useState("http"); // "http" | "https"
  const [expanded, setExpanded] = useState(null);

  const isHttps = mode === "https";

  const visibleLayers = LAYERS.filter((l) => !l.httpsOnly || isHttps);

  return (
    <div className={style.wrapper}>
      {/* Toggle */}
      <div className={style.toggle}>
        <button
          className={`${style.toggleBtn} ${!isHttps ? style.toggleBtnActive : ""}`}
          style={!isHttps ? { borderColor: "#fb4934", color: "#fb4934" } : {}}
          onClick={() => {
            setMode("http");
            setExpanded(null);
          }}
        >
          HTTP
        </button>
        <button
          className={`${style.toggleBtn} ${isHttps ? style.toggleBtnActive : ""}`}
          style={isHttps ? { borderColor: "#b8bb26", color: "#b8bb26" } : {}}
          onClick={() => {
            setMode("https");
            setExpanded(null);
          }}
        >
          HTTPS
        </button>
      </div>

      <div className={style.main}>
        {/* Paket-Stack */}
        <div className={style.packetCol}>
          <div className={style.packetLabel}>Datenpaket (schematisch)</div>
          <div className={style.packetStack}>
            {visibleLayers.map((layer) => {
              const isExpanded = expanded === layer.id;
              const isHttpLayer = layer.id === "http";
              const isTlsLayer = layer.id === "tls";

              return (
                <div
                  key={layer.id}
                  className={`${style.layer} ${isExpanded ? style.layerExpanded : ""}`}
                  style={{
                    borderColor: layer.color,
                    "--layer-color": layer.color,
                  }}
                  onClick={() => setExpanded(isExpanded ? null : layer.id)}
                >
                  {/* Layer-Header */}
                  <div className={style.layerHeader}>
                    <div>
                      <span
                        className={style.layerName}
                        style={{ color: layer.textColor }}
                      >
                        {layer.label}
                      </span>
                      <span className={style.layerSub}>
                        {" "}
                        — {layer.sublabel}
                      </span>
                    </div>
                    <div className={style.layerRight}>
                      {/* Schloss-Icon */}
                      {isHttpLayer && (
                        <span
                          className={style.lockIcon}
                          title={isHttps ? "Verschlüsselt" : "Offen"}
                        >
                          {isHttps ? "🔒" : "🔓"}
                        </span>
                      )}
                      {isTlsLayer && <span className={style.lockIcon}>🛡️</span>}
                      <span className={style.expandHint}>
                        {isExpanded ? "▲" : "▼"}
                      </span>
                    </div>
                  </div>

                  {/* Felder (aufgeklappt) */}
                  {isExpanded && (
                    <div className={style.fields}>
                      {layer.fields.map((f, i) => {
                        const isEnc = f.encrypted && isHttps;
                        return (
                          <div
                            key={i}
                            className={`${style.field} ${isEnc ? style.fieldEncrypted : style.fieldOpen}`}
                          >
                            <span className={style.fieldName}>{f.name}:</span>
                            <span className={style.fieldValue}>
                              {isEnc ? (
                                <span className={style.encValue}>
                                  █████████
                                </span>
                              ) : (
                                f.value
                              )}
                            </span>
                            <span className={style.fieldBadge}>
                              {isEnc ? (
                                <span className={style.badgeEnc}>
                                  verschlüsselt
                                </span>
                              ) : (
                                <span className={style.badgeOpen}>
                                  sichtbar
                                </span>
                              )}
                            </span>
                          </div>
                        );
                      })}
                      <div className={style.layerNote}>{layer.note}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className={style.packetHint}>
            Auf eine Schicht klicken für Details
          </div>
        </div>

        {/* Angreifer-Sicht */}
        <div className={style.attackerCol}>
          <div className={style.attackerTitle}>
            Was sieht ein Angreifer (z. B. ISP)?
          </div>
          <ul className={style.attackerList}>
            {ATTACKER_SEES[mode].map((item, i) => {
              const isLastHttp = !isHttps && i >= 2;
              const isLastHttps = isHttps && i === 4;
              return (
                <li
                  key={i}
                  className={`${style.attackerItem} ${isLastHttp ? style.attackerDanger : ""} ${isLastHttps ? style.attackerSafe : ""}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div
            className={style.attackerSummary}
            style={{
              borderColor: isHttps ? "#b8bb26" : "#fb4934",
              color: isHttps ? "#b8bb26" : "#fb4934",
            }}
          >
            {isHttps
              ? "HTTPS: Inhalt geschützt — nur Metadaten sichtbar."
              : "HTTP: Alle Inhalte im Klartext sichtbar!"}
          </div>
        </div>
      </div>
    </div>
  );
}
