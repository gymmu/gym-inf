import style from "./TlsHandshake.module.css";

const PHASES = [
  {
    phase: "1",
    left: {
      label: "ClientHello",
      text: "TLS 1.3, Cipher Suites, Nonce, unterstützte Kurven",
    },
    arrow: "→",
    right: null,
  },
  {
    phase: "2",
    left: null,
    arrow: "←",
    right: {
      label: "ServerHello + Zertifikat",
      text: "gewählte Cipher Suite, Nonce, Zertifikat (Public Key + CA-Signatur)",
    },
  },
  {
    phase: "3",
    left: {
      label: "Zertifikat prüfen",
      text: "CA-Signatur, Ablaufdatum, Domain, OCSP-Status",
    },
    arrow: null,
    right: null,
  },
  {
    phase: "4",
    left: {
      label: "ECDHE-Schlüsselaustausch",
      text: "Beide Seiten einigen sich auf Sitzungsschlüssel (ohne Übertragung)",
    },
    arrow: "↔",
    right: {
      label: "ECDHE-Schlüsselaustausch",
      text: "Sitzungsschlüssel K wird lokal berechnet",
    },
  },
  {
    phase: "5",
    left: { label: "Finished (verschlüsselt mit K)", text: "" },
    arrow: "→",
    right: null,
  },
  {
    phase: "5",
    left: null,
    arrow: "←",
    right: { label: "Finished (Bestätigung)", text: "" },
  },
];

export default function TlsHandshake() {
  return (
    <div className={style.container}>
      <div className={style.columns}>
        <div className={style.colHeader}>Browser (Client)</div>
        <div />
        <div className={style.colHeader}>Server</div>
      </div>

      <div className={style.timeline}>
        {PHASES.map((p, i) => (
          <div key={i} className={style.phase}>
            <div className={p.left ? style.phaseLeft : style.empty}>
              {p.left && (
                <>
                  <strong>{p.left.label}</strong>
                  {p.left.text && (
                    <>
                      <br />
                      {p.left.text}
                    </>
                  )}
                </>
              )}
            </div>
            <div className={style.phaseCenter}>
              {p.arrow && <span className={style.phaseArrow}>{p.arrow}</span>}
              <span className={style.phaseLabel}>Phase {p.phase}</span>
            </div>
            <div className={p.right ? style.phaseRight : style.empty}>
              {p.right && (
                <>
                  <strong>{p.right.label}</strong>
                  {p.right.text && (
                    <>
                      <br />
                      {p.right.text}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={style.finalBanner}>
        Ab Phase 5: Alle Daten mit AES-256-GCM verschlüsselt — HTTPS aktiv
      </div>
    </div>
  );
}
