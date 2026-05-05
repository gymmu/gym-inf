import { Link } from "react-router-dom"
import Slideshow, {
  Slide,
  Stack,
  Fragment,
} from "@components/gym/Slideshow/Slideshow"
import PacketAnimation from "@components/gym/PacketAnimation/PacketAnimation"
import Caesar from "@components/Caesar"
import CaesarIntro from "@components/gym/CaesarIntro/CaesarIntro"
import {
  KeyspaceCaesar,
  KeyspaceVigenere,
  KeyspaceBruteForce,
  KeyspaceBars,
  KeyspaceTimes,
} from "@components/gym/KeyspaceViz/KeyspaceViz"
import Vigenere from "@components/Vigenere"
import VigenereViz from "@components/gym/VigenereViz/VigenereViz"
import VigenereSteps from "@components/gym/VigenereSteps/VigenereSteps"
import XorSteps from "@components/gym/XorSteps/XorSteps"
import XorViz from "@components/gym/XorViz/XorViz"
import SignatureDiagram from "@components/gym/SignatureDiagram/SignatureDiagram"
import TlsHandshake from "@components/gym/TlsHandshake/TlsHandshake"
import DhColorAnalogy from "@components/gym/DhColorAnalogy/DhColorAnalogy"
import DhSteps from "@components/gym/DhSteps/DhSteps"
import PlainPasswordDatabase from "@components/PlainPasswordDatabase"
import HashedPasswordDatabase from "@components/HashedPasswordDatabase"
import SaltedPasswordDatabase from "@components/SaltedPasswordDatabase"
import RainbowTable from "@components/RainbowTable"

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
            TITELFOLIE
            ══════════════════════════════════════════════════════ */}
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
                  <strong>Block B — Schlüsselaustausch</strong>
                </p>
                <ul>
                  <li>Diffie-Hellman-Protokoll</li>
                  <li>Diskreter Logarithmus</li>
                  <li>Man-in-the-Middle &amp; ECDHE</li>
                  <li>Perfect Forward Secrecy</li>
                </ul>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block C — Passwörter</strong>
                </p>
                <ul>
                  <li>Hashing &amp; Salting</li>
                  <li>Angriffsmethoden</li>
                  <li>2FA &amp; FIDO2</li>
                  <li>Passwortmanager</li>
                </ul>
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            BLOCK A — VERSCHLÜSSELUNG
            ══════════════════════════════════════════════════════ */}

        {/* Stack: Caesar + Schlüsselraum */}
        <Stack>
          <Slide>
            <CaesarIntro />
          </Slide>
          <Slide>
            <h2>Das Caesar-Verfahren</h2>
            <Fragment as="p" animation="fade-up">
              Jeder Buchstabe wird um eine feste Anzahl Stellen verschoben.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <p>Schlüssel 3:</p>
                <p>
                  <strong>A → D</strong>
                </p>
                <p>
                  <strong>B → E</strong>
                </p>
                <p>
                  <strong>H → K</strong>
                </p>
                <p>
                  <strong>HALLO → KDOOR</strong>
                </p>
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Sender und Empfänger kennen die Verschiebung — das ist der
              Schlüssel.
            </Fragment>
          </Slide>
          <Slide>
            <h2>Caesar — interaktiv</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Verschiebe das Alphabet und beobachte die Verschlüsselung live:
            </p>
            <Caesar />
          </Slide>
          <Slide>
            <h2>Schlüsselraum — was ist das?</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Der <strong>Schlüsselraum</strong> ist die Menge aller möglichen
              Schlüssel. Bei Caesar: alle 26 Verschiebungen.
            </p>
            <KeyspaceCaesar />
          </Slide>
          <Slide>
            <h2>Schlüsselraum — Vigenère</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Bei Vigenère wächst der Schlüsselraum mit jedem Buchstaben des
              Schlüsselworts um Faktor 26.
            </p>
            <KeyspaceVigenere />
          </Slide>
          <Slide>
            <h2>Brute-Force</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Ein Angreifer probiert einfach alle Schlüssel durch — bei Caesar
              dauert das Millisekunden.
            </p>
            <KeyspaceBruteForce />
          </Slide>
          <Slide>
            <h2>Schlüsselräume im Vergleich</h2>
            <KeyspaceBars />
          </Slide>
          <Slide>
            <h2>Wie lange dauert Brute-Force?</h2>
            <KeyspaceTimes />
          </Slide>
          <Slide>
            <h2>Schutz vor Brute-Force: ein riesiger Schlüsselraum</h2>
            <Fragment as="p" animation="fade-up">
              Je grösser der Schlüsselraum, desto mehr Versuche braucht ein
              Angreifer — bei{" "}
              <strong>
                2<sup>128</sup>
              </strong>{" "}
              Möglichkeiten ist selbst der schnellste Computer chancenlos.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                Ein moderner Computer schafft ~10<sup>12</sup> Versuche pro
                Sekunde. Um 2<sup>128</sup> Schlüssel zu testen, bräuchte er
                länger als das Universum alt ist.
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="warning-box" style={{ marginTop: "0.6em" }}>
                <strong>Aber:</strong> Ein grosser Schlüsselraum nützt nichts,
                wenn der Schlüssel schlecht gewählt ist. Wer <em>«password»</em>{" "}
                oder seinen Geburtstag als Schlüssel nimmt, schrumpft den
                effektiven Schlüsselraum auf wenige Tausend Möglichkeiten — egal
                wie gross er theoretisch wäre.
                <br />
                <strong>
                  Der Schlüssel muss zufällig und gleichmässig aus dem gesamten
                  Raum gewählt werden.
                </strong>
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* Stack: Vigenère */}
        <Stack>
          <Slide>
            <h2>Das Vigenère-Verfahren</h2>
            <VigenereViz />
          </Slide>
          <Slide>
            <h2>Das Vigenère-Verfahren</h2>
            <Fragment as="p" animation="fade-up">
              Statt einer Verschiebung für alle: ein{" "}
              <strong>Schlüsselwort</strong> — jeder Buchstabe gibt eine andere
              Verschiebung vor (a=0, b=1, … z=25), zyklisch wiederholt.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <p>
                  Schlüssel <strong>KEY</strong>, Klartext{" "}
                  <strong>HALLO</strong>:
                </p>
                <table
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: "1em 0.5em",
                    margin: "0 auto",
                  }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}>
                        Klartext
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}>
                        Schlüssel
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}>
                        Verschiebung
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}>
                        Chiffrat
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["H", "K", 10, "R"],
                      ["A", "E", 4, "E"],
                      ["L", "Y", 24, "J"],
                      ["L", "K", 10, "V"],
                      ["O", "E", 4, "S"],
                    ].map(([p, k, s, c]) => (
                      <tr key={p + k}>
                        <td style={{ textAlign: "center" }}>
                          <strong>{p}</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>{k}</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>+{s}</td>
                        <td style={{ textAlign: "center" }}>
                          <strong>{c}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ marginTop: "0.4em" }}>
                  → <strong>REJVS</strong>
                </p>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <p style={{ marginTop: "0.6em" }}>
                Schlüsselraum wächst mit Schlüssellänge <em>n</em>: 26
                <sup>n</sup> mögliche Schlüssel.
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
          <Slide>
            <h2>Vigenère — Schrittweise</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Gib Klartext und Schlüsselwort ein — sieh, wie jeder Buchstabe
              einzeln verschoben wird:
            </p>
            <VigenereSteps />
          </Slide>
          <Slide>
            <h2>Das Vigenère-Quadrat</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Gib Klartext und Schlüssel ein — die Schnittpunkte im Quadrat
              zeigen das Chiffrat.
            </p>
            <Vigenere defaultPlain="HALLO" defaultKey="KEY" />
          </Slide>
        </Stack>

        {/* Stack: Text → Bits → XOR → Übertragung → Entschlüsselung */}
        <Stack>
          <Slide>
            <h2>XOR-Verschlüsselung — Animation</h2>
            <XorViz />
          </Slide>
          <Slide>
            <h2>Vom Text zu Bits — ASCII</h2>
            <Fragment as="p" animation="fade-up">
              Computer kennen keine Buchstaben — nur Bits. Jedes Zeichen hat
              eine Nummer (ASCII):
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <table
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: "1.2em 0.6em",
                    margin: "0 auto",
                  }}>
                  <thead>
                    <tr>
                      <th
                        style={{ color: "var(--color-fg)", textAlign: "left" }}>
                        Zeichen
                      </th>
                      <th
                        style={{
                          color: "var(--color-fg)",
                          textAlign: "right",
                        }}>
                        Dezimal
                      </th>
                      <th
                        style={{
                          color: "var(--color-fg)",
                          textAlign: "right",
                        }}>
                        Binär
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>A</code>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <code>65</code>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <code>01000001</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>H</code>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <code>72</code>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <code>01001000</code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>!</code>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <code>33</code>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <code>00100001</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
          <Slide>
            <h2>XOR — interaktiv</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Gib Text und Schlüssel ein — sieh die XOR-Verschlüsselung Bit für
              Bit:
            </p>
            <XorSteps />
          </Slide>
        </Stack>

        {/* Symmetrisch vs. Asymmetrisch */}
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

        {/* Stack: 3 Ziele + Signaturen */}
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
          <Slide>
            <h2>Digitale Signaturen — Diagramm</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Wie Alice eine Nachricht signiert und Bob sie verifiziert:
            </p>
            <SignatureDiagram />
          </Slide>
        </Stack>

        {/* Stack: TLS-Handshake + Zertifikatskette */}
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
            <h2>TLS-Handshake — Diagramm</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Der vollständige TLS 1.3 Ablauf zwischen Browser und Server:
            </p>
            <TlsHandshake />
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

        <Slide className="section-slide" transition="zoom">
          <h2>Diffie-Hellman-Schlüsselaustausch</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Wie tauscht man einen Schlüssel über eine abhörbare Leitung aus?
          </Fragment>
        </Slide>

        {/* Stack: Das Problem + Farbmischungs-Analogie */}
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
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Eine Farbe mischen ist einfach — trennen ist praktisch unmöglich.
              Klicke dich durch die Schritte:
            </p>
            <DhColorAnalogy />
          </Slide>
        </Stack>

        {/* Stack: Mathematik + Interaktiver Simulator */}
        <Stack>
          <Slide>
            <h2>Die Mathematik: Modulare Potenzierung</h2>
            <Fragment as="p" animation="fade-up">
              Die <strong>Modulo-Operation</strong> ist der Rest einer
              ganzzahligen Division:
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <code>17 mod 5 = 2</code> &nbsp;·&nbsp;{" "}
                <code>5⁶ mod 23 = 8</code>
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
          <Slide>
            <h2>Diffie-Hellman — interaktiv</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Wähle eigene Werte für p, g, a, b — und sieh den
              Schlüsselaustausch in Echtzeit:
            </p>
            <DhSteps />
          </Slide>
        </Stack>

        {/* Stack: Man-in-the-Middle + ECDHE */}
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

        <Slide className="section-slide" transition="zoom">
          <h2>Passwörter &amp; Authentifizierung</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Hashing · Salting · Angriffe · 2FA · FIDO2 · Passwortmanager
          </Fragment>
        </Slide>

        {/* Stack: Passwort-Hashing — von Klartext zu Salted */}
        <Stack>
          <Slide>
            <h2>Passwörter im Klartext — gefährlich</h2>
            <Fragment as="p" animation="fade-up">
              Viele frühe Datenbanken speicherten Passwörter im Klartext. Bei
              einem Datenleck sind alle Passwörter sofort lesbar.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="warning-box" style={{ marginTop: "0.5em" }}>
                Füge ein Passwort hinzu und sieh es unverschlüsselt in der
                Datenbank:
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <PlainPasswordDatabase />
            </Fragment>
          </Slide>
          <Slide>
            <h2>Passwörter hashen</h2>
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
            <Fragment animation="fade-up">
              <HashedPasswordDatabase />
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
            <Fragment animation="fade-up">
              <SaltedPasswordDatabase />
            </Fragment>
          </Slide>
        </Stack>

        {/* Stack: Angriffsmethoden + Rainbow Table Demo */}
        <Stack>
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
          <Slide>
            <h2>Rainbow Tables — Demo</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Füge Passwörter hinzu oder generiere bekannte Passwörter — dann
              suche nach einem Hash:
            </p>
            <RainbowTable />
            <Fragment animation="fade-up">
              <div className="warning-box" style={{ marginTop: "0.5em" }}>
                Salting macht Rainbow Tables wertlos — jeder Salt erfordert eine
                komplett neue Tabelle.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* Stack: 2FA + TOTP */}
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

        {/* Stack: FIDO2 + Passwortmanager */}
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
