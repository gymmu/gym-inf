import style from "./SignatureDiagram.module.css";

export default function SignatureDiagram() {
  return (
    <div className={style.container}>
      <div className={style.columns}>
        <div className={`${style.side} ${style.sign}`}>
          <div className={style.sideHeader}>Alice signiert</div>
          <div className={style.sideBody}>
            <div className={style.step}>
              <span className={style.stepNum}>1.</span>
              <span>
                <span className={`${style.tag} ${style.tagHash}`}>SHA-256</span>
                Hash des Dokuments berechnen → eindeutiger Fingerabdruck
              </span>
            </div>
            <div className={style.step}>
              <span className={style.stepNum}>2.</span>
              <span>
                <span className={`${style.tag} ${style.tagPrivate}`}>
                  Private Key
                </span>
                Hash mit Alices privatem Schlüssel verschlüsseln → Signatur
              </span>
            </div>
            <div className={style.step}>
              <span className={style.stepNum}>3.</span>
              <span>Dokument + Signatur an Bob schicken</span>
            </div>
          </div>
        </div>

        <div className={`${style.side} ${style.verify}`}>
          <div className={style.sideHeader}>Bob prüft</div>
          <div className={style.sideBody}>
            <div className={style.step}>
              <span className={style.stepNum}>1.</span>
              <span>
                <span className={`${style.tag} ${style.tagHash}`}>SHA-256</span>
                Hash des empfangenen Dokuments berechnen → Hash_B
              </span>
            </div>
            <div className={style.step}>
              <span className={style.stepNum}>2.</span>
              <span>
                <span className={`${style.tag} ${style.tagPublic}`}>
                  Public Key
                </span>
                Signatur mit Alices öffentlichem Schlüssel entschlüsseln →
                Hash_A
              </span>
            </div>
            <div className={style.step}>
              <span className={style.stepNum}>3.</span>
              <span>
                Hash_A == Hash_B? → Dokument unverändert, Absender ist Alice ✓
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.result}>
        <div className={style.resultTitle}>Was Signaturen garantieren:</div>
        <strong>Authentizität</strong> — Nur Alice hat den privaten Schlüssel,
        niemand sonst kann diese Signatur erzeugen.
        <br />
        <strong>Integrität</strong> — Jede Änderung am Dokument verändert den
        Hash → Signatur wird ungültig.
      </div>
    </div>
  );
}
