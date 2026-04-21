import style from "./TcpIpLayers.module.css"

const LAYERS = [
  {
    num: 4,
    name: "Anwendungsschicht",
    task: "Direkte Kommunikation mit der Anwendung",
    protocols: ["HTTP", "HTTPS", "DNS", "SMTP", "FTP"],
  },
  {
    num: 3,
    name: "Transportschicht",
    task: "Zuverlässige Ende-zu-Ende-Übertragung",
    protocols: ["TCP", "UDP"],
  },
  {
    num: 2,
    name: "Internetschicht",
    task: "Adressierung und Routing",
    protocols: ["IPv4", "IPv6", "ICMP"],
  },
  {
    num: 1,
    name: "Netzzugangsschicht",
    task: "Physische Übertragung im lokalen Netz",
    protocols: ["Ethernet", "WLAN"],
  },
]

const ENCAP_LINES = [
  { label: "Anwendungsschicht", content: "[HTTP-Header | HTTP-Daten]" },
  { label: "Transportschicht", content: "[TCP-Header | HTTP-Header | Daten]" },
  { label: "Internetschicht", content: "[IP-Header | TCP-Header | … ]" },
  { label: "Netzzugangsschicht", content: "[Ethernet-Header | IP-Header | …]" },
]

export default function TcpIpLayers() {
  return (
    <div className={style.container}>
      <div className={style.layers}>
        {LAYERS.map((l) => (
          <div className={style.layer} key={l.num}>
            <div className={style.layerNum}>{l.num}</div>
            <div className={style.layerName}>{l.name}</div>
            <div className={style.layerTask}>{l.task}</div>
            <div className={style.layerProto}>
              {l.protocols.map((p) => (
                <span className={style.proto} key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={style.encap}>
        <div className={style.encapTitle}>Enkapsulierung beim Senden:</div>
        {ENCAP_LINES.map((line, i) => (
          <div key={i}>
            <span>{line.content}</span>
            {"  "}
            <span style={{ opacity: 0.5 }}>← {line.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
