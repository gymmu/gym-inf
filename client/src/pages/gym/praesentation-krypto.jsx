import { Link } from "react-router-dom"
import Slideshow, {
  Slide,
  Stack,
  Fragment,
} from "@components/gym/Slideshow/Slideshow"
import PacketAnimation from "@components/gym/PacketAnimation/PacketAnimation"

export default function GymPraesentationKrypto() {
  return (
    <>
      <h1>Präsentation: Kryptographie, Schlüsselaustausch &amp; Passwörter</h1>
      <p>
        Diese Präsentation fasst{" "}
        <Link to="/gym/verschluesselung">Verschlüsselung</Link>,{" "}
        <Link to="/gym/schluesselaustausch">Schlüsselaustausch</Link> und{" "}
        <Link to="/gym/passwoerter">Passwörter</Link> zusammen.
      </p>

      <Slideshow title="Kryptographie, Schlüsselaustausch & Passwörter">
        {/* ══════════════════════════════════════════════════════
            BLOCK A — VERSCHLÜSSELUNG
            ══════════════════════════════════════════════════════ */}

        {/* 1. Titelfolie */}
        <Slide className="title-slide" transition="zoom">
          <h1>Kryptographie, Schlüsselaustausch &amp; Passwörter</h1>
          <Fragment as="p" animation="fade-up">
            Von Caesar bis AES, von Diffie-Hellman bis FIDO2.
          </Fragment>
          <hr />
          <div className="cols" style={{ marginTop: "0.8em" }}>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block A — Verschlüsselung</strong>
                </p>
                <ul>
                  <li>Caesar &amp; Vigenère</li>
                  <li>Schlüsselraum &amp; Brute-Force</li>
                  <li>XOR &amp; AES</li>
                  <li>Symmetrisch / Asymmetrisch</li>
                  <li>Signaturen &amp; TLS</li>
                </ul>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block B / C</strong>
                </p>
                <ul>
                  <li>Diffie-Hellman-Protokoll</li>
                  <li>Diskreter Logarithmus</li>
                  <li>Man-in-the-Middle &amp; ECDHE</li>
                  <li>Hashing &amp; Salting</li>
                  <li>2FA, FIDO2 &amp; Passwortmanager</li>
                </ul>
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* 2. Caesar + Schlüsselraum — vertikal */}
        <Stack>
          <Slide>
            <h2>Das Caesar-Verfahren</h2>
            <Fragment as="p" animation="fade-up">
              Jeder Buchstabe wird um eine feste Anzahl Stellen verschoben.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                Schlüssel 3: <strong>A → D</strong> · <strong>B → E</strong> ·
                <strong> HALLO → KDOOR</strong>
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Sender und Empfänger kennen die Verschiebung — das ist der
              Schlüssel.
            </Fragment>
          </Slide>
          <Slide>
            <h2>Schlüsselraum &amp; Brute-Force</h2>
            <Fragment as="p" animation="fade-up">
              Der <strong>Schlüsselraum</strong> ist die Menge aller möglichen
              Schlüssel. Bei Caesar: nur 26 Verschiebungen.
            </Fragment>
            <Fragment animation="fade-up">
              <table>
                <thead>
                  <tr>
                    <th>Verfahren</th>
                    <th>Schlüsselraum</th>
                    <th>Aufwand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Caesar</td>
                    <td>26</td>
                    <td style={{ color: "#fb4934" }}>Sofort</td>
                  </tr>
                  <tr>
                    <td>Vigenère (4 Zeichen)</td>
                    <td>26⁴ ≈ 460&apos;000</td>
                    <td>Sekunden</td>
                  </tr>
                  <tr>
                    <td>AES-128</td>
                    <td>2¹²⁸</td>
                    <td style={{ color: "#b8bb26" }}>Praktisch unmöglich</td>
                  </tr>
                  <tr>
                    <td>AES-256</td>
                    <td>2²⁵⁶</td>
                    <td style={{ color: "#b8bb26" }}>
                      Auch mit Quantencomputer
                    </td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.4em" }}>
                Grosser Schlüsselraum allein reicht nicht — das Verfahren muss
                auch statistisch unauffällig verschlüsseln.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* 3. Vigenère */}
        <Slide>
          <h2>Das Vigenère-Verfahren</h2>
          <Fragment as="p" animation="fade-up">
            Statt einer Verschiebung für alle: ein{" "}
            <strong>Schlüsselwort</strong>— jeder Buchstabe gibt eine andere
            Verschiebung vor (a=0, b=1, … z=25), zyklisch wiederholt.
          </Fragment>
          <Fragment animation="fade-up">
            <div className="highlight-box">
              Schlüssel <strong>KEY</strong>, Klartext <strong>HALLO</strong>:
              <br />
              H+K=R · A+E=E · L+Y=J · L+K=V · O+E=S → <strong>REJVS</strong>
            </div>
          </Fragment>
          <Fragment animation="fade-up">
            <p style={{ marginTop: "0.6em" }}>
              Schlüsselraum wächst mit Schlüssellänge <em>n</em>: 26<sup>n</sup>{" "}
              mögliche Schlüssel.
            </p>
          </Fragment>
          <div className="cols" style={{ marginTop: "0.4em" }}>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Vorteil:</strong> Viel grösserer Schlüsselraum
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="warning-box">
                <strong>Schwäche:</strong> Kasiski-Analyse bei kurzen
                Schlüsselwörtern
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* 4. XOR & AES — vertikal */}
        <Stack>
          <Slide>
            <h2>Text → Bits → Pakete (Animation)</h2>
            <PacketAnimation />
          </Slide>
          <Slide>
            <h2>Vom Text zu Bits — ASCII</h2>
            <Fragment as="p" animation="fade-up">
              Computer kennen keine Buchstaben — nur Bits. Jedes Zeichen hat
              eine Nummer (ASCII):
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <code>A = 65 = 01000001</code>
                <br />
                <code>H = 72 = 01001000</code>
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Bevor moderne Verfahren verschlüsseln können, muss Text in
              Binärdaten umgewandelt werden.
            </Fragment>
          </Slide>
          <Slide>
            <h2>XOR-Verknüpfung</h2>
            <Fragment as="p" animation="fade-up">
              XOR (⊕): 0⊕0=0 · 0⊕1=1 · 1⊕0=1 · 1⊕1=0
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <code>01001000 ⊕ 10110011 = 11111011</code> (verschlüsselt)
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.4em" }}>
                <code>11111011 ⊕ 10110011 = 01001000</code> (entschlüsselt)
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.6em" }}>
                <strong>AES</strong> baut auf XOR auf, kombiniert es aber mit
                Substitution und Permutation über mehrere Runden.
                Schlüssellänge: 128 oder 256 Bit.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* 5. Symmetrisch vs. Asymmetrisch */}
        <Slide>
          <h2>Symmetrisch vs. Asymmetrisch</h2>
          <div className="cols">
            <Fragment animation="fade-up">
              <div>
                <h3>Symmetrisch</h3>
                <p>
                  Sender und Empfänger teilen{" "}
                  <strong>denselben Schlüssel</strong>.
                </p>
                <div className="highlight-box">
                  Beispiele: Caesar, Vigenère, AES
                </div>
                <div className="warning-box" style={{ marginTop: "0.4em" }}>
                  <strong>Problem:</strong> Wie tauscht man den Schlüssel sicher
                  aus?
                </div>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div>
                <h3>Asymmetrisch</h3>
                <p>
                  Schlüsselpaar: <strong>öffentlich</strong> +{" "}
                  <strong>privat</strong>
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Public Key</strong>
                      </td>
                      <td>Verschlüsseln, Signatur prüfen</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Private Key</strong>
                      </td>
                      <td>Entschlüsseln, Signatur erstellen</td>
                    </tr>
                  </tbody>
                </table>
                <div className="info-box" style={{ marginTop: "0.4em" }}>
                  Was mit dem Public Key verschlüsselt wird, kann{" "}
                  <strong>nur</strong> mit dem Private Key entschlüsselt werden.
                </div>
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* 6. 3 Ziele + Signaturen — vertikal */}
        <Stack>
          <Slide>
            <h2>3 Ziele der Kryptographie</h2>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <strong style={{ color: "#b8bb26" }}>Vertraulichkeit</strong>
                &nbsp;— Nur Befugte können lesen
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.4em" }}>
                <strong style={{ color: "#83a598" }}>Integrität</strong>
                &nbsp;— Nachricht wurde nicht verändert
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="warning-box" style={{ marginTop: "0.4em" }}>
                <strong style={{ color: "#fabd2f" }}>Authentizität</strong>
                &nbsp;— Absender ist wirklich der, der er behauptet zu sein
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Verschlüsselung allein garantiert nur Vertraulichkeit.
              <strong> Digitale Signaturen</strong> kommen für Integrität und
              Authentizität dazu.
            </Fragment>
          </Slide>
          <Slide>
            <h2>Digitale Signaturen</h2>
            <Fragment as="p" animation="fade-up">
              Funktioniert <em>umgekehrt</em> zur Verschlüsselung:
            </Fragment>
            <div className="cols">
              <Fragment animation="fade-up">
                <div className="info-box">
                  <strong>Signieren:</strong>
                  <br />
                  Absender hasht die Nachricht und verschlüsselt den Hash mit
                  seinem <em>Private Key</em>
                </div>
              </Fragment>
              <Fragment animation="fade-up">
                <div className="info-box">
                  <strong>Verifizieren:</strong>
                  <br />
                  Empfänger entschlüsselt den Hash mit dem <em>
                    Public Key
                  </em>{" "}
                  und vergleicht
                </div>
              </Fragment>
            </div>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                Beweist: Die Nachricht stammt wirklich von diesem Absender und
                wurde nicht verändert.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* 7. TLS-Handshake + Zertifikatskette — vertikal */}
        <Stack>
          <Slide>
            <h2>TLS-Handshake</h2>
            <Fragment as="p" animation="fade-up">
              Wenn Ihr Browser <code>https://www.bank.ch</code> aufruft,
              passiert das in Millisekunden:
            </Fragment>
            <ol>
              <Fragment as="li" animation="fade-up">
                <strong>ClientHello:</strong> Browser sendet unterstützte
                Algorithmen
              </Fragment>
              <Fragment as="li" animation="fade-up">
                <strong>ServerHello:</strong> Server wählt Algorithmus, sendet
                Zertifikat
              </Fragment>
              <Fragment as="li" animation="fade-up">
                <strong>Schlüsselaustausch:</strong> ECDHE — gemeinsamer Session
                Key wird abgeleitet
              </Fragment>
              <Fragment as="li" animation="fade-up">
                <strong>Finished:</strong> Beide bestätigen, Verbindung
                verschlüsselt aktiv
              </Fragment>
            </ol>
          </Slide>
          <Slide>
            <h2>Zertifikatskette</h2>
            <Fragment as="p" animation="fade-up">
              Woher weiss der Browser, dass das Zertifikat echt ist?
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <strong>Root-CA</strong> — im Browser vorinstalliert (~150
                weltweit)
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <p style={{ textAlign: "center", margin: "0.2em 0" }}>
                ▼ signiert
              </p>
              <div className="info-box">
                <strong>Intermediate CA</strong> — z.B. Let&apos;s Encrypt R3
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <p style={{ textAlign: "center", margin: "0.2em 0" }}>
                ▼ signiert
              </p>
              <div className="info-box">
                <strong>Enduser-Zertifikat</strong> — z.B. www.bank.ch
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                HTTPS = DH-Schlüsselaustausch + Zertifikate + AES-Datentransfer
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* ══════════════════════════════════════════════════════
            BLOCK B — SCHLÜSSELAUSTAUSCH
            ══════════════════════════════════════════════════════ */}

        {/* 8. Section-Trennfolie */}
        <Slide className="section-slide" transition="zoom">
          <h2>Diffie-Hellman-Schlüsselaustausch</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Wie tauscht man einen Schlüssel über eine abhörbare Leitung aus?
          </Fragment>
        </Slide>

        {/* 9. Das Problem + Farbmischungs-Analogie — vertikal */}
        <Stack>
          <Slide>
            <h2>Das Schlüsselaustausch-Problem</h2>
            <Fragment as="p" animation="fade-up">
              Alice und Bob wollen verschlüsselt kommunizieren — Eve liest alles
              mit.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="warning-box">
                Schlüssel direkt senden → Eve liest ihn mit
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="warning-box" style={{ marginTop: "0.4em" }}>
                Vorher treffen → funktioniert nicht für Millionen täglicher
                Verbindungen
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.4em" }}>
                Diffie und Hellman lösten dieses Problem 1976 mit einem
                eleganten mathematischen Trick.
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>Die Farbmischungs-Analogie</h2>
            <p>
              Eine Farbe mischen ist einfach — trennen ist praktisch unmöglich.
            </p>
            <ol>
              <Fragment as="li" animation="fade-up">
                Gemeinsame Farbe: <strong>Gelb</strong> (öffentlich)
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Alice mischt: Gelb + Blau = <strong>Türkis</strong> → sendet
                Türkis
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Bob mischt: Gelb + Rot = <strong>Orange</strong> → sendet Orange
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Alice mischt Bobs Orange + ihr Blau
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Bob mischt Alices Türkis + sein Rot
              </Fragment>
              <Fragment as="li" animation="fade-up">
                <strong>Beide haben Gelb + Blau + Rot</strong> — Eve sah nur
                Gelb, Türkis, Orange
              </Fragment>
            </ol>
          </Slide>
        </Stack>

        {/* 10. Mathematik: Modulare Potenzierung */}
        <Slide>
          <h2>Die Mathematik: Modulare Potenzierung</h2>
          <Fragment as="p" animation="fade-up">
            Die <strong>Modulo-Operation</strong> ist der Rest einer
            ganzzahligen Division:
          </Fragment>
          <Fragment animation="fade-up">
            <div className="highlight-box">
              <code>17 mod 5 = 2</code> &nbsp;·&nbsp; <code>5⁶ mod 23 = 8</code>
            </div>
          </Fragment>
          <Fragment animation="fade-up">
            <table style={{ marginTop: "0.6em" }}>
              <thead>
                <tr>
                  <th>Schritt</th>
                  <th>Alice</th>
                  <th>Bob</th>
                  <th>Öffentlich</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    Einigen sich auf <strong>p</strong> (Primzahl) und{" "}
                    <strong>g</strong> (Generator)
                  </td>
                  <td>p, g</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Geheim <strong>a</strong>, sendet A = gᵃ mod p
                  </td>
                  <td>
                    Geheim <strong>b</strong>, sendet B = gᵇ mod p
                  </td>
                  <td>A, B</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>S = Bᵃ mod p</td>
                  <td>S = Aᵇ mod p</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </Fragment>
          <Fragment animation="fade-up">
            <div className="highlight-box" style={{ marginTop: "0.4em" }}>
              <strong>Diskreter Logarithmus:</strong> Aus A und p das a zu
              berechnen ist bei 2048-Bit-Zahlen praktisch unlösbar.
            </div>
          </Fragment>
        </Slide>

        {/* 11. Man-in-the-Middle & ECDHE — vertikal */}
        <Stack>
          <Slide>
            <h2>Man-in-the-Middle — Schwäche von DH</h2>
            <Fragment as="p" animation="fade-up">
              DH bietet keine <strong>Authentifizierung</strong>. Eve kann sich
              einschalten:
            </Fragment>
            <ol>
              <Fragment as="li" animation="fade-up">
                Alice sendet A → Eve fängt ab, antwortet mit eigenem E_a
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Bob sendet B → Eve fängt ab, antwortet mit eigenem E_b
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Eve liest alles mit — Alice und Bob bemerken nichts
              </Fragment>
            </ol>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                <strong>Lösung:</strong> Digitale Zertifikate beweisen die
                Identität des Servers.
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>ECDHE &amp; Perfect Forward Secrecy</h2>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>ECDHE</strong> — Diffie-Hellman auf elliptischen Kurven:
                <br />
                256 Bit statt 3072 Bit für gleiche Sicherheit
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.5em" }}>
                <strong>Ephemeral (E):</strong> Für jede Verbindung wird ein
                neues DH-Schlüsselpaar generiert und danach gelöscht.
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                <strong>Perfect Forward Secrecy:</strong> Auch wenn der
                Serverschlüssel gestohlen wird — vergangene Verbindungen bleiben
                sicher. TLS 1.3 erzwingt es.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* ══════════════════════════════════════════════════════
            BLOCK C — PASSWÖRTER
            ══════════════════════════════════════════════════════ */}

        {/* 12. Section-Trennfolie */}
        <Slide className="section-slide" transition="zoom">
          <h2>Passwörter &amp; Authentifizierung</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Hashing · Salting · Angriffe · 2FA · FIDO2 · Passwortmanager
          </Fragment>
        </Slide>

        {/* 13. Hashing + Salting — vertikal */}
        <Stack>
          <Slide>
            <h2>Passwörter sicher speichern</h2>
            <Fragment as="p" animation="fade-up">
              Server speichern nie das Passwort selbst — nur den{" "}
              <strong>Hash</strong>. Beim Login wird der Hash des eingegebenen
              Passworts verglichen.
            </Fragment>
            <Fragment animation="fade-up">
              <table>
                <thead>
                  <tr>
                    <th>Algorithmus</th>
                    <th>Empfehlung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bcrypt</td>
                    <td style={{ color: "#b8bb26" }}>Gut</td>
                  </tr>
                  <tr>
                    <td>Argon2</td>
                    <td style={{ color: "#b8bb26" }}>Empfohlen</td>
                  </tr>
                  <tr>
                    <td>MD5 / SHA-256</td>
                    <td style={{ color: "#fb4934" }}>Nicht geeignet!</td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
          </Slide>
          <Slide>
            <h2>Salting</h2>
            <Fragment animation="fade-up">
              <div className="warning-box">
                <strong>Problem ohne Salt:</strong> Gleiche Passwörter → gleiche
                Hashes → Rainbow Tables
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                <strong>Salt:</strong> Zufällige, einzigartige Zeichenkette wird
                ans Passwort angehängt, bevor gehasht wird.
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.5em" }}>
              Salt liegt im Klartext neben dem Hash — kein Problem, da er
              Rainbow Tables wertlos macht.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>bcrypt Work Factor 12:</strong> ~100 Hashes/Sekunde
                statt Milliarden → 76 Tage Brute-Force werden 2000 Jahre.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* 14. Angriffsmethoden */}
        <Slide>
          <h2>Angriffsmethoden</h2>
          <table>
            <thead>
              <tr>
                <th>Methode</th>
                <th>Funktionsweise</th>
                <th>Gegenmassnahme</th>
              </tr>
            </thead>
            <tbody>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Brute-Force</strong>
                </td>
                <td>Alle Kombinationen</td>
                <td>bcrypt / Argon2</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Dictionary</strong>
                </td>
                <td>
                  <code>rockyou.txt</code> testen
                </td>
                <td>Kein Wörterbuch-Passwort</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Rainbow Tables</strong>
                </td>
                <td>Vorgefertigte Hash-Tabellen</td>
                <td>Salting</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Credential Stuffing</strong>
                </td>
                <td>Gestohlene Daten woanders testen</td>
                <td>Einzigartiges PW pro Dienst</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Phishing</strong>
                </td>
                <td>Nutzer gibt PW selbst preis</td>
                <td>FIDO2 / Passkeys</td>
              </Fragment>
            </tbody>
          </table>
        </Slide>

        {/* 15. 2FA — vertikal */}
        <Stack>
          <Slide>
            <h2>Zwei-Faktor-Authentifizierung</h2>
            <p>Zwei Faktoren aus verschiedenen Kategorien:</p>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Wissen:</strong> Passwort, PIN
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.4em" }}>
                <strong>Besitz:</strong> Smartphone, Hardware-Token
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.4em" }}>
                <strong>Biometrie:</strong> Fingerabdruck, Gesichtserkennung
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>TOTP — Time-based One-Time Password</h2>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <code>TOTP = HMAC-SHA1(secret_key, floor(Unix-Zeit / 30))</code>
                <br />→ 6-stelliger Code, 30 Sekunden gültig
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <table style={{ marginTop: "0.5em" }}>
                <thead>
                  <tr>
                    <th>Methode</th>
                    <th>Sicherheit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SMS-2FA</td>
                    <td style={{ color: "#fb4934" }}>
                      Niedrig (SS7, SIM-Swapping)
                    </td>
                  </tr>
                  <tr>
                    <td>TOTP (App)</td>
                    <td>Mittel (Phishing in Echtzeit möglich)</td>
                  </tr>
                  <tr>
                    <td>Passkeys (FIDO2)</td>
                    <td style={{ color: "#b8bb26" }}>
                      Sehr hoch — phishing-resistent
                    </td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
          </Slide>
        </Stack>

        {/* 16. FIDO2 & Passwortmanager — vertikal */}
        <Stack>
          <Slide>
            <h2>FIDO2 / Passkeys</h2>
            <Fragment as="p" animation="fade-up">
              Basiert auf asymmetrischer Kryptographie:
            </Fragment>
            <ol>
              <Fragment as="li" animation="fade-up">
                <strong>Registrierung:</strong> Gerät generiert Schlüsselpaar.
                Public Key → Server. Private Key bleibt im Secure Element.
              </Fragment>
              <Fragment as="li" animation="fade-up">
                <strong>Anmeldung:</strong> Server sendet Challenge → Gerät
                signiert mit Private Key (nach Biometrie) → Server verifiziert.
              </Fragment>
            </ol>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                Domain in Signatur eingebettet → gefälschte Seiten können
                Signatur nicht verwenden → phishing-resistent
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>Passwortmanager</h2>
            <Fragment animation="fade-up">
              <div className="info-box">
                <code>Master-PW + Salt → Argon2 → Vault-Schlüssel</code>
                <br />
                <code>Vault-Daten → AES-256-GCM → verschlüsselter Blob</code>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                <strong>Zero-Knowledge:</strong> Nur der verschlüsselte Blob
                liegt auf Servern. Der Vault-Schlüssel wird lokal abgeleitet.
                Der Anbieter sieht die Passwörter niemals.
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <p style={{ marginTop: "0.5em" }}>
                Kriterien: <strong>Open Source</strong> ·{" "}
                <strong>Unabhängige Audits</strong> ·{" "}
                <strong>Zero-Knowledge</strong> ·{" "}
                <strong>2FA für den Manager selbst</strong>
              </p>
            </Fragment>
          </Slide>
        </Stack>
      </Slideshow>

      <section>
        <h2>Kapitel dieser Präsentation</h2>
        <ul>
          <li>
            <Link to="/gym/verschluesselung">Verschlüsselung</Link> — Caesar,
            Vigenère, XOR, AES, TLS
          </li>
          <li>
            <Link to="/gym/schluesselaustausch">Schlüsselaustausch</Link> —
            Diffie-Hellman, ECDHE, PFS
          </li>
          <li>
            <Link to="/gym/passwoerter">Passwörter</Link> — Hashing, 2FA, FIDO2,
            Passwortmanager
          </li>
        </ul>
      </section>
    </>
  )
}
