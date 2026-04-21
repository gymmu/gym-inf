import style from "./DnsResolver.module.css"

const DNS_STEPS = [
  {
    title: "Browser-Cache prüfen",
    text: "Hat der Browser die IP-Adresse kürzlich abgefragt? → direkt verwenden (kein weiterer DNS-Aufruf nötig)",
  },
  {
    title: "Betriebssystem-Cache / hosts-Datei",
    text: "Ist die Adresse lokal gespeichert? (/etc/hosts auf Linux/macOS)",
  },
  {
    title: "Anfrage an den Resolver",
    text: "Ihr Router oder ISP betreibt einen DNS-Resolver (rekursiver Nameserver). Dieser übernimmt die weitere Suche für Sie.",
  },
  {
    title: "Resolver fragt Root-Nameserver",
    text: 'Es gibt 13 Root-Nameserver-Gruppen weltweit (A bis M). Der Resolver fragt: "Wer ist zuständig für .com?"',
  },
  {
    title: "TLD-Nameserver",
    text: 'Der Root-Server verweist auf den TLD-Nameserver für .com. Dieser weiss: "Für github.com ist Nameserver X zuständig."',
  },
  {
    title: "Autoritativer Nameserver",
    text: "Dieser kennt die tatsächliche IP-Adresse von www.github.com und antwortet mit z.B. 140.82.121.4.",
  },
  {
    title: "Resolver gibt Antwort zurück",
    text: "Der Resolver speichert die Antwort im Cache (TTL = Time to Live) und gibt sie an Ihren Browser weiter.",
  },
]

export default function DnsResolver() {
  return (
    <div className={style.container}>
      <div className={style.steps}>
        {DNS_STEPS.map((step, i) => (
          <div key={i}>
            <div className={style.step}>
              <div className={style.stepNumber}>{i + 1}</div>
              <div className={style.stepContent}>
                <strong>{step.title}</strong>
                {step.text}
              </div>
            </div>
            {i < DNS_STEPS.length - 1 && (
              <div className={style.step}>
                <div className={style.connector}>
                  <div className={style.connectorLine} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={style.flow}>
        {`Browser → Resolver → Root-NS → TLD-NS (.com) → Autoritativer NS (github.com)
                                                         ← IP: 140.82.121.4`}
      </div>
    </div>
  )
}
