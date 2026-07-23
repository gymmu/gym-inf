import Caesar from "@components/Caesar";
import AesSlide from "@components/gym/AesSlide/AesSlide";
import AesViz from "@components/gym/AesViz/AesViz";
import CaesarIntro from "@components/gym/CaesarIntro/CaesarIntro";
import CommutativeExpSlide from "@components/gym/CommutativeExpSlide/CommutativeExpSlide";
import DhColorAnalogy from "@components/gym/DhColorAnalogy/DhColorAnalogy";
import DhSlide from "@components/gym/DhSlide/DhSlide";
import DhSteps from "@components/gym/DhSteps/DhSteps";
import DiscreteLogSlide from "@components/gym/DiscreteLogSlide/DiscreteLogSlide";
import KeyExchangeMotivationSlide from "@components/gym/KeyExchangeMotivationSlide/KeyExchangeMotivationSlide";
import {
  KeyspaceBars,
  KeyspaceBruteForce,
  KeyspaceCaesar,
} from "@components/gym/KeyspaceViz/KeyspaceViz";
import ModExpSlide from "@components/gym/ModExpSlide/ModExpSlide";
import PacketAnimation from "@components/gym/PacketAnimation/PacketAnimation";
import SignatureDiagram from "@components/gym/SignatureDiagram/SignatureDiagram";
import Slideshow, {
  Fragment,
  Slide,
  Stack,
} from "@components/gym/Slideshow/Slideshow";
import TlsHandshake from "@components/gym/TlsHandshake/TlsHandshake";
import VigenereSteps from "@components/gym/VigenereSteps/VigenereSteps";
import VigenereViz from "@components/gym/VigenereViz/VigenereViz";
import XorSlide from "@components/gym/XorSlide/XorSlide";
import XorSteps from "@components/gym/XorSteps/XorSteps";
import XorViz from "@components/gym/XorViz/XorViz";
import HashedPasswordDatabase from "@components/HashedPasswordDatabase";
import PlainPasswordDatabase from "@components/PlainPasswordDatabase";
import RainbowTable from "@components/RainbowTable";
import SaltedPasswordDatabase from "@components/SaltedPasswordDatabase";
import Vigenere from "@components/Vigenere";
import { Link } from "react-router-dom";

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
            Von Caesar bis AES, von Diffie-Hellman bis Passwoertern.
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
                  <li>Das Schlüsselaustausch-Problem</li>
                  <li>Modulare Potenzierung</li>
                  <li>Diskreter Logarithmus</li>
                  <li>Diffie-Hellman interaktiv</li>
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
                  <li>Zwei-Faktor-Authentifizierung</li>
                  <li>Passwortmanager</li>
                </ul>
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            BLOCK A — VERSCHLÜSSELUNG
            ══════════════════════════════════════════════════════ */}

        {/* Stack: Caesar + Schluesselraum */}
        <Stack>
          <Slide>
            <CaesarIntro />
          </Slide>
          <Slide>
            <h2>Caesar — interaktiv</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Verschiebe das Alphabet und beobachte die Verschluesselung live:
            </p>
            <Caesar />
          </Slide>
          <Slide>
            <h2>Schluesselraum — was ist das?</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Der <strong>Schluesselraum</strong> ist die Menge aller moeglichen
              Schluessel. Bei Caesar: alle 26 Verschiebungen.
            </p>
            <KeyspaceCaesar />
          </Slide>
          <Slide>
            <h2>Brute-Force</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Ein Angreifer probiert einfach alle Schluessel durch — bei Caesar
              dauert das Millisekunden. Ein grosser Schluesselraum macht das
              unpraktikabel.
            </p>
            <KeyspaceBruteForce />
          </Slide>
          <Slide>
            <h2>Schluesselraeume im Vergleich</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Je groesser der Schluesselraum, desto mehr Versuche braucht ein
              Angreifer — bei 2<sup>128</sup> Moeglichkeiten ist selbst der
              schnellste Computer chancenlos.
            </p>
            <KeyspaceBars />
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
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}
                      >
                        Klartext
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}
                      >
                        Schlüssel
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}
                      >
                        Verschiebung
                      </th>
                      <th
                        style={{
                          textAlign: "center",
                          color: "var(--color-fg)",
                        }}
                      >
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "4px 5px",
                  padding: "10px 14px",
                  background: "var(--color-bg-light, #3c3836)",
                  border: "1.5px solid var(--color-bg-lighter, #504945)",
                  borderRadius: 10,
                  marginTop: "0.5em",
                }}
              >
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((ch) => {
                  const byte = ch.charCodeAt(0);
                  const bits = byte.toString(2).padStart(8, "0");
                  const isHallo = "HALO".includes(ch);
                  return (
                    <div
                      key={ch}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                        background: isHallo
                          ? "#2a2418"
                          : "var(--color-bg, #1d2021)",
                        border: `1.5px solid ${isHallo ? "#fabd2f" : "var(--color-bg-lighter, #504945)"}`,
                        borderRadius: 5,
                        padding: "3px 2px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: "1.1em",
                          fontWeight: 700,
                          color: isHallo
                            ? "#fabd2f"
                            : "var(--color-gray, #928374)",
                          lineHeight: 1,
                        }}
                      >
                        {ch}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: "0.8em",
                          fontWeight: 600,
                          color: isHallo
                            ? "#fe8019"
                            : "var(--color-bg-lighter, #504945)",
                          lineHeight: 1,
                        }}
                      >
                        {byte}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: "0.7em",
                          fontWeight: 500,
                          color: isHallo
                            ? "#b8bb26"
                            : "var(--color-bg-lighter, #504945)",
                          lineHeight: 1,
                        }}
                      >
                        {bits}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Bevor moderne Verfahren verschlüsseln können, muss Text in
              Binärdaten umgewandelt werden.
            </Fragment>
          </Slide>
          {/* Folie: XOR-Tabelle */}
          <Slide>
            <h2>XOR-Verknüpfung</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.8em" }}>
              XOR (⊕) — wie Addition ohne Übertrag: gleiche Bits → 0,
              verschiedene Bits → 1
            </p>
            <table
              style={{
                borderCollapse: "collapse",
                fontSize: "1.15em",
                margin: "0 auto",
                textAlign: "center",
                tableLayout: "fixed",
                width: "28em",
              }}
            >
              <colgroup>
                <col style={{ width: "8em" }} />
                <col style={{ width: "10em" }} />
                <col style={{ width: "10em" }} />
              </colgroup>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "0.5em 1.2em",
                      textAlign: "center",
                      borderBottom: "3px solid #ebdbb2",
                      borderRight: "3px solid #ebdbb2",
                      color: "#928374",
                      fontFamily: "monospace",
                    }}
                  >
                    A ⊕ B
                  </th>
                  <th
                    style={{
                      padding: "0.5em 1.2em",
                      textAlign: "center",
                      borderBottom: "3px solid #ebdbb2",
                      color: "#83a598",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                  >
                    B = 0
                  </th>
                  <th
                    style={{
                      padding: "0.5em 1.2em",
                      textAlign: "center",
                      borderBottom: "3px solid #ebdbb2",
                      color: "#83a598",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                  >
                    B = 1
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: "3.5em" }}>
                  <td
                    style={{
                      padding: "0.6em 1.2em",
                      verticalAlign: "middle",
                      borderRight: "3px solid #ebdbb2",
                      color: "#83a598",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                  >
                    A = 0
                  </td>
                  <td
                    style={{ padding: "0.6em 1.2em", verticalAlign: "middle" }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "#928374",
                        fontSize: "0.85em",
                      }}
                    >
                      0 ⊕ 0 ={" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1.2em",
                        fontWeight: 700,
                        color: "#b8bb26",
                      }}
                    >
                      0
                    </span>
                  </td>
                  <td
                    style={{ padding: "0.6em 1.2em", verticalAlign: "middle" }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "#928374",
                        fontSize: "0.85em",
                      }}
                    >
                      0 ⊕ 1 ={" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1.2em",
                        fontWeight: 700,
                        color: "#b8bb26",
                      }}
                    >
                      1
                    </span>
                  </td>
                </tr>
                <tr style={{ height: "3.5em" }}>
                  <td
                    style={{
                      padding: "0.6em 1.2em",
                      verticalAlign: "middle",
                      borderRight: "3px solid #ebdbb2",
                      color: "#83a598",
                      fontFamily: "monospace",
                      fontWeight: 700,
                    }}
                  >
                    A = 1
                  </td>
                  <td
                    style={{ padding: "0.6em 1.2em", verticalAlign: "middle" }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "#928374",
                        fontSize: "0.85em",
                      }}
                    >
                      1 ⊕ 0 ={" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1.2em",
                        fontWeight: 700,
                        color: "#b8bb26",
                      }}
                    >
                      1
                    </span>
                  </td>
                  <td
                    style={{ padding: "0.6em 1.2em", verticalAlign: "middle" }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        color: "#928374",
                        fontSize: "0.85em",
                      }}
                    >
                      1 ⊕ 1 ={" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "1.2em",
                        fontWeight: 700,
                        color: "#b8bb26",
                      }}
                    >
                      0
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Slide>

          {/* Folie 3: XOR interaktiv (folientauglich) */}
          <Slide>
            <h2>XOR — Text zu Bits und Verschlüsselung</h2>
            <XorSlide defaultPlain="HALLO" defaultKey="key" />
          </Slide>

          {/* Folie 5: Von XOR zu AES */}
          <Slide>
            <h2>Von XOR zu AES</h2>
            <Fragment as="p" animation="fade-up">
              XOR allein ist unsicher — bei bekanntem Klartext lässt sich der
              Schlüssel direkt ableiten.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>AES</strong> kombiniert XOR mit weiteren Operationen
                über 10–14 Runden:
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <table style={{ marginTop: "0.5em" }}>
                <tbody>
                  <tr>
                    <td>
                      <strong>SubBytes</strong>
                    </td>
                    <td>
                      Jedes Byte wird durch eine fixe Tabelle (S-Box) ersetzt
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ShiftRows</strong>
                    </td>
                    <td>
                      Zeilen der 4×4-Byte-Matrix werden zyklisch verschoben
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>MixColumns</strong>
                    </td>
                    <td>
                      Spalten werden mit einer Matrizen-Multiplikation gemischt
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>AddRoundKey</strong>
                    </td>
                    <td>
                      XOR mit dem Rundenschlüssel — hier kommt XOR zum Einsatz
                    </td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                Schlüssellänge 128 Bit → 2<sup>128</sup> mögliche Schlüssel —
                praktisch unknackbar
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* Stack: AES */}
        <Stack>
          {/* Folie 7: AES — Visualisierung */}
          <Slide>
            <h2>AES — Wie funktioniert es?</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.6em" }}>
              AES verschlüsselt in 10 Runden — jede Runde kombiniert vier
              Operationen:
            </p>
            <AesViz />
          </Slide>

          {/* Folie 8: AES — eine Runde interaktiv */}
          <Slide>
            <h2>AES — eine Runde Schritt für Schritt</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.6em" }}>
              Verfolge, wie sich die 16 Bytes durch SubBytes, ShiftRows,
              MixColumns und AddRoundKey verändern:
            </p>
            <AesSlide />
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
                  Empfänger entschlüsselt den Hash mit dem <em>Public Key</em>{" "}
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

        {/* Stack: Warum Schluesselaustausch + Mathematik + Diskreter Log + Interaktiver Simulator */}
        <Stack>
          <Slide>
            <h2>Warum braucht es einen Schluesselaustausch?</h2>
            <p style={{ fontSize: "0.82em", marginBottom: "0.6em" }}>
              Alice und Bob wollen verschluesselt kommunizieren -- aber wie
              kommen sie an einen gemeinsamen Schluessel, ohne ihn einfach zu
              senden?
            </p>
            <KeyExchangeMotivationSlide />
          </Slide>
          <Slide>
            <h2>Die Mathematik: Modulare Potenzierung</h2>
            <p style={{ fontSize: "0.82em", marginBottom: "0.6em" }}>
              Modulo ist der Rest einer Division — wie ein Uhrzeiger, der nach{" "}
              <em>m</em> Schritten wieder bei 0 beginnt.
            </p>
            <ModExpSlide />
          </Slide>
          <Slide>
            <h2>Diskreter Logarithmus — warum schwer?</h2>
            <p style={{ fontSize: "0.82em", marginBottom: "0.6em" }}>
              Vorwaerts (Potenz berechnen) ist trivial. Rueckwaerts (Exponent
              finden) hat kein Muster — und wird mit grossen Zahlen praktisch
              unmoeglich.
            </p>
            <DiscreteLogSlide />
          </Slide>
          <Slide>
            <h2>Warum funktioniert der Schlüsselaustausch?</h2>
            <p style={{ fontSize: "0.82em", marginBottom: "0.6em" }}>
              Alice und Bob landen beim selben Schlüssel, weil{" "}
              <strong>(g^a)^b = g^(ab) = (g^b)^a</strong> — die Reihenfolge der
              Exponenten spielt keine Rolle.
            </p>
            <CommutativeExpSlide />
          </Slide>
          <Slide>
            <h2>Diffie-Hellman — interaktiv</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Wähle eigene Werte für p, g, a, b — und sieh den
              Schlüsselaustausch in Echtzeit:
            </p>
            <DhSlide />
          </Slide>
        </Stack>

        {/* Man-in-the-Middle */}
        <Slide>
          <h2>Man-in-the-Middle — Schwaeche von DH</h2>
          <Fragment as="p" animation="fade-up">
            DH bietet keine <strong>Authentifizierung</strong>. Eve kann sich
            einschalten:
          </Fragment>
          <ol>
            <Fragment as="li" animation="fade-up">
              Alice sendet A → Eve faengt ab, antwortet mit eigenem E_a
            </Fragment>
            <Fragment as="li" animation="fade-up">
              Bob sendet B → Eve faengt ab, antwortet mit eigenem E_b
            </Fragment>
            <Fragment as="li" animation="fade-up">
              Eve liest alles mit — Alice und Bob bemerken nichts
            </Fragment>
          </ol>
          <Fragment animation="fade-up">
            <div className="highlight-box" style={{ marginTop: "0.5em" }}>
              <strong>Loesung:</strong> Digitale Zertifikate beweisen die
              Identitaet des Servers — deshalb braucht DH TLS.
            </div>
          </Fragment>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            BLOCK C — PASSWÖRTER
            ══════════════════════════════════════════════════════ */}

        <Slide className="section-slide" transition="zoom">
          <h2>Passwörter &amp; Authentifizierung</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Hashing · Salting · Angriffe · 2FA · Passwortmanager
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
                  <td>Passkeys / Hardware-Token</td>
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

        {/* Folie: 2FA */}
        <Slide>
          <h2>Zwei-Faktor-Authentifizierung (2FA)</h2>
          <Fragment as="p" animation="fade-up">
            Ein Passwort allein reicht nicht — wer es kennt, kommt rein. 2FA
            verlangt einen <strong>zweiten Beweis</strong> aus einer anderen
            Kategorie.
          </Fragment>
          <div className="cols" style={{ marginTop: "0.5em" }}>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Wissen</strong>
                <br />
                Passwort, PIN
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Besitz</strong>
                <br />
                Smartphone-App (TOTP), Hardware-Token
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Biometrie</strong>
                <br />
                Fingerabdruck, Gesicht
              </div>
            </Fragment>
          </div>
          <Fragment animation="fade-up">
            <div className="highlight-box" style={{ marginTop: "0.6em" }}>
              Selbst wenn ein Angreifer das Passwort kennt, fehlt ihm der zweite
              Faktor — das Gerät in deiner Tasche.
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
                  <td>SMS-Code</td>
                  <td style={{ color: "#fb4934" }}>
                    Schwach — SIM-Swapping möglich
                  </td>
                </tr>
                <tr>
                  <td>Authenticator-App (TOTP)</td>
                  <td style={{ color: "#fabd2f" }}>Gut — kein SMS nötig</td>
                </tr>
                <tr>
                  <td>Hardware-Token / Passkey</td>
                  <td style={{ color: "#b8bb26" }}>
                    Sehr stark — Phishing-resistent
                  </td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        </Slide>

        {/* Folie: Passwortmanager */}
        <Slide>
          <h2>Passwortmanager</h2>
          <Fragment as="p" animation="fade-up">
            Ein starkes, einzigartiges Passwort pro Dienst ist unmöglich
            auswendig zu lernen. Ein Passwortmanager löst das Problem.
          </Fragment>
          <div className="cols" style={{ marginTop: "0.5em" }}>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Wie es funktioniert</strong>
                <br />
                Ein <em>Master-Passwort</em> entsperrt einen verschlüsselten
                Tresor. Alle anderen Passwörter werden darin gespeichert —
                zufällig generiert, lang, einzigartig.
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                <strong>Zero-Knowledge</strong>
                <br />
                Der Anbieter speichert nur den verschlüsselten Blob.
                Entschlüsseln kann nur du — mit deinem Master-Passwort.
              </div>
            </Fragment>
          </div>
          <Fragment animation="fade-up">
            <table style={{ marginTop: "0.5em" }}>
              <thead>
                <tr>
                  <th>Empfehlung</th>
                  <th>Hinweis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Bitwarden</strong>
                  </td>
                  <td>Open Source, kostenlos, cloud-basiert</td>
                </tr>
                <tr>
                  <td>
                    <strong>KeePassXC</strong>
                  </td>
                  <td>Lokal, kein Cloud-Konto nötig</td>
                </tr>
                <tr>
                  <td>
                    <strong>1Password</strong>
                  </td>
                  <td>Komfortabel, kostenpflichtig</td>
                </tr>
              </tbody>
            </table>
          </Fragment>
          <Fragment animation="fade-up">
            <div className="warning-box" style={{ marginTop: "0.5em" }}>
              Das Master-Passwort muss stark sein und darf nirgends sonst
              verwendet werden — es ist der einzige Schlüssel zum Tresor.
            </div>
          </Fragment>
        </Slide>
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
            Diffie-Hellman, Diskreter Logarithmus, Man-in-the-Middle
          </li>
          <li>
            <Link to="/gym/passwoerter">Passwörter</Link> — Hashing, 2FA,
            Passwortmanager
          </li>
        </ul>
      </section>
    </>
  );
}
