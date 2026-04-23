import { Link } from "react-router-dom"
import Slideshow, {
  Slide,
  Stack,
  Fragment,
} from "@components/gym/Slideshow/Slideshow"
import NetworkDiagram from "@components/gym/NetworkDiagram/NetworkDiagram"
import PacketDiagram from "@components/gym/PacketDiagram/PacketDiagram"
import PacketAnimation from "@components/gym/PacketAnimation/PacketAnimation"
import TcpHandshakeAnim from "@components/gym/TcpHandshake/TcpHandshake"
import DnsResolver from "@components/gym/DnsResolver/DnsResolver"

export default function GymPraesentationNetzwerke() {
  return (
    <>
      <h1>Präsentation: Netzwerke, Internet &amp; VPN</h1>
      <p>
        Diese Präsentation fasst <Link to="/gym/internet">Internet</Link>,{" "}
        <Link to="/gym/netzwerke">Netzwerke</Link> und{" "}
        <Link to="/gym/vpn">VPN</Link> zusammen.
      </p>

      <Slideshow title="Netzwerke, Internet & VPN">
        {/* ══════════════════════════════════════════════════════
            BLOCK A — DAS INTERNET
            ══════════════════════════════════════════════════════ */}

        {/* 1. Titelfolie */}
        <Slide className="title-slide" transition="zoom">
          <h1>Netzwerke, Internet &amp; VPN</h1>
          <Fragment as="p" animation="fade-up">
            Wie Daten durch das Internet fliessen — von Paketen über Router bis
            zu verschlüsselten Tunneln.
          </Fragment>
          <hr />
          <div className="cols" style={{ marginTop: "0.8em" }}>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block A — Internet</strong>
                </p>
                <ul>
                  <li>Pakete &amp; TCP/IP</li>
                  <li>TCP vs. UDP</li>
                  <li>IP-Adressen &amp; DNS</li>
                  <li>HTTP vs. HTTPS</li>
                </ul>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block B / C</strong>
                </p>
                <ul>
                  <li>Subnetting &amp; NAT</li>
                  <li>VPN-Tunnel</li>
                  <li>VPN-Mythen</li>
                </ul>
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* 2. Netzwerk-Illustration */}
        <Slide>
          <h2>Das Heimnetzwerk</h2>
          <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
            Klicke auf ein Gerät für Details:
          </p>
          <NetworkDiagram />
        </Slide>

        {/* 3. Was ist das Internet + Pakete — vertikal */}
        <Stack>
          <Slide>
            <h2>Was ist das Internet?</h2>
            <Fragment as="p" animation="fade-up">
              Das Internet ist ein <strong>Netzwerk von Netzwerken</strong> —
              Tausende ISPs, Universitäten, Unternehmen verbinden ihre Netze
              über <strong>Router</strong>.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                Kein einzelnes Gerät, kein einzelnes Unternehmen besitzt das
                Internet.
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>Datenpakete</h2>
            <p>
              Daten werden in kleine <strong>Pakete</strong> aufgeteilt.
            </p>
            <Fragment animation="fade-up">
              <div className="info-box">
                <strong>Header:</strong> Absender-IP, Empfänger-IP, Paketnummer,
                Prüfsumme
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.4em" }}>
                <strong>Payload:</strong> Der eigentliche Dateninhalt
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Pakete können verschiedene Wege nehmen. Verloren gegangene Pakete
              werden einzeln wiederholt — nicht die gesamte Übertragung.
            </Fragment>
          </Slide>
        </Stack>

        {/* 4. TCP/IP-Schichtenmodell */}
        <Slide>
          <h2>Das TCP/IP-Schichtenmodell</h2>
          <table>
            <thead>
              <tr>
                <th>Schicht</th>
                <th>Was passiert hier?</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Anwendung</strong>
                </td>
                <td>Programme kommunizieren miteinander</td>
                <td>
                  <code>HTTP</code> (Webseite laden)
                </td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Transport</strong>
                </td>
                <td>Daten zuverlässig übermitteln</td>
                <td>
                  <code>TCP</code> (alles ankommt)
                </td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Internet</strong>
                </td>
                <td>Richtigen Empfänger finden</td>
                <td>
                  <code>IP</code> (Adressierung)
                </td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>
                  <strong>Netzzugang</strong>
                </td>
                <td>Bits über ein Kabel / WLAN senden</td>
                <td>
                  <code>Ethernet</code>, <code>WLAN</code>
                </td>
              </Fragment>
            </tbody>
          </table>
          <Fragment animation="fade-up">
            <div className="info-box" style={{ marginTop: "0.6em" }}>
              Jede Schicht erledigt eine klar abgegrenzte Aufgabe — sie müssen
              nicht wissen, was die anderen Schichten intern machen.
            </div>
          </Fragment>
        </Slide>

        {/* 5. Paket-Aufbau */}
        <Slide>
          <h2>Aufbau eines IP-Pakets</h2>
          <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
            Klicke auf &ldquo;Schichten aufklappen&rdquo; und dann auf einzelne
            Felder:
          </p>
          <PacketDiagram />
          <details style={{ marginTop: "0.8em" }}>
            <summary
              style={{
                cursor: "pointer",
                fontSize: "0.82em",
                color: "#928374",
                userSelect: "none",
              }}>
              Notizen (zum Verstehen)
            </summary>
            <div
              style={{
                marginTop: "0.5em",
                fontSize: "0.82em",
                lineHeight: "1.55",
                color: "#ebdbb2",
                background: "var(--color-bg-light, #282828)",
                border: "1px solid #3c3836",
                borderRadius: "6px",
                padding: "0.75em 1em",
              }}>
              <p>
                <strong>Grundidee — Schichten wie Briefumschläge:</strong> Die
                Anwendung schreibt eine Nachricht, jede Schicht darunter packt
                sie in einen eigenen Umschlag mit einem eigenen Header. Am Ziel
                werden die Umschläge von aussen nach innen geöffnet.
              </p>
              <p style={{ marginTop: "0.5em" }}>
                <strong>HTTP-Nachricht (Schicht 4 — Anwendung):</strong>
              </p>
              <ul style={{ marginTop: "0.2em", paddingLeft: "1.2em" }}>
                <li>
                  Bei <strong>HTTPS</strong> ist der gesamte HTTP-Inhalt
                  (Methode, Pfad, Header, Body) verschlüsselt — ein Angreifer
                  sieht nur, dass eine Verbindung zu einer bestimmten Domain
                  besteht, aber nicht was übertragen wird.
                </li>
                <li>
                  <strong>Host-Header:</strong> Nötig, weil viele Domains
                  dieselbe IP teilen können (Virtual Hosting). Der Server weiss
                  damit, welche Webseite gemeint ist.
                </li>
              </ul>
              <p style={{ marginTop: "0.5em" }}>
                <strong>
                  TCP-Segment (Schicht 3 — zuverlässige Übertragung):
                </strong>
              </p>
              <ul style={{ marginTop: "0.2em", paddingLeft: "1.2em" }}>
                <li>
                  <strong>Ports:</strong> Identifizieren den Dienst. Port 443 =
                  HTTPS, Port 22 = SSH. Der Client wählt einen zufälligen
                  Quell-Port (&gt;1024), damit mehrere Verbindungen gleichzeitig
                  möglich sind.
                </li>
                <li>
                  <strong>Sequenz- &amp; ACK-Nummer:</strong> Ermöglichen
                  korrekte Reihenfolge und Bestätigung. Fehlt ein Paket, kann
                  der Empfänger gezielt nachfordern.
                </li>
                <li>
                  <strong>Flags (SYN / ACK / FIN):</strong> Steuern den
                  Verbindungsstatus. SYN = Verbindung aufbauen, FIN = Verbindung
                  beenden, RST = Verbindung abbrechen.
                </li>
              </ul>
              <p style={{ marginTop: "0.5em" }}>
                <strong>IP-Paket (Schicht 2 — globales Routing):</strong>
              </p>
              <ul style={{ marginTop: "0.2em", paddingLeft: "1.2em" }}>
                <li>
                  <strong>TTL (Time to Live):</strong> Verhindert, dass Pakete
                  ewig im Netz kreisen. Startet bei 64 oder 128, wird an jedem
                  Router um 1 verringert. Erreicht TTL 0, wird das Paket
                  verworfen.
                </li>
                <li>
                  <strong>Quell-IP / Ziel-IP:</strong> Bleiben auf dem gesamten
                  Weg konstant (im Gegensatz zur MAC-Adresse). Anhand der
                  Ziel-IP entscheiden Router, wohin das Paket weitergeleitet
                  wird.
                </li>
                <li>
                  <strong>Protokollfeld:</strong> Sagt dem Empfänger, was im
                  IP-Paket steckt: 6 = TCP, 17 = UDP.
                </li>
              </ul>
              <p style={{ marginTop: "0.5em" }}>
                <strong>Ethernet-Frame (Schicht 1 — lokales Netz):</strong>
              </p>
              <ul style={{ marginTop: "0.2em", paddingLeft: "1.2em" }}>
                <li>
                  <strong>Ziel-MAC / Quell-MAC:</strong> Physische Adressen der
                  Netzwerkkarten. Nur im lokalen Netz gültig — an jedem Router
                  wird der Ethernet-Frame neu erstellt (MAC ändert sich, IP
                  bleibt gleich).
                </li>
                <li>
                  <strong>FCS (Frame Check Sequence):</strong> Prüfsumme am Ende
                  des Frames — erkennt Übertragungsfehler auf dem Kabel.
                </li>
              </ul>
            </div>
          </details>
        </Slide>

        {/* 6. Paket-Animation */}
        <Slide>
          <h2>Text → Bits → Pakete → Netz</h2>
          <PacketAnimation />
        </Slide>

        {/* 7. TCP vs. UDP — vertikal */}
        <Stack>
          <Slide>
            <h2>TCP — zuverlässig</h2>
            <p>TCP garantiert Ankunft und Reihenfolge aller Pakete:</p>
            <ol>
              <Fragment as="li" animation="fade-up">
                <strong>3-Way-Handshake:</strong> SYN → SYN-ACK → ACK
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Jedes Paket wird quittiert (<code>ACK</code>). Fehlende Pakete
                werden wiederholt.
              </Fragment>
              <Fragment as="li" animation="fade-up">
                Flusskontrolle passt Rate an den langsameren Partner an.
              </Fragment>
            </ol>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                Verwendet für: <strong>HTTP/HTTPS, E-Mail, SSH</strong>
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>TCP — 3-Way-Handshake (animiert)</h2>
            <TcpHandshakeAnim />
          </Slide>
          <Slide>
            <h2>UDP — schnell</h2>
            <p>
              UDP ist verbindungslos — kein Handshake, keine Quittierungen,
              minimale Latenz.
            </p>
            <Fragment animation="fade-up">
              <div className="highlight-box">
                Verwendet für: <strong>DNS, Streaming, Gaming, VoIP</strong>
              </div>
            </Fragment>
            <Fragment as="p" animation="fade-up" style={{ marginTop: "0.6em" }}>
              Bei einem Video-Stream ist ein verlorenes Paket unwichtig — besser
              ein kurzer Aussetzer als eine Verzögerung durch Wiederholung.
            </Fragment>
          </Slide>
        </Stack>

        {/* 5. IP-Adressen & DNS — vertikal */}
        <Stack>
          <Slide>
            <h2>IP-Adressen</h2>
            <Fragment as="p" animation="fade-up">
              <strong>IPv4:</strong> 32 Bit → max. 4.3 Milliarden Adressen — zu
              wenig.
            </Fragment>
            <Fragment as="p" animation="fade-up">
              <strong>IPv6:</strong> 128 Bit → 340 Sextillionen Adressen.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                Private Bereiche: <code>192.168.x.x</code> ·{" "}
                <code>10.x.x.x</code> · <code>172.16–31.x.x</code>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.4em" }}>
                <strong>NAT</strong> überbrückt die IPv4-Knappheit: viele Geräte
                teilen eine öffentliche IP.
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>DNS — Was ist das und wozu brauchen wir es?</h2>
            <p>
              Computer kommunizieren über <strong>IP-Adressen</strong> wie{" "}
              <code>140.82.121.4</code> — Menschen merken sich aber{" "}
              <code>github.com</code>. Das{" "}
              <strong>Domain Name System (DNS)</strong> übersetzt Domainnamen
              automatisch in IP-Adressen.
            </p>
            <Fragment animation="fade-up">
              <p>
                DNS ist <strong>hierarchisch</strong> aufgebaut:
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Ebene</th>
                    <th>Beispiel</th>
                    <th>Zuständig für</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Root (.)</td>
                    <td>Root-Server A–M</td>
                    <td>Kennt alle TLD-Nameserver</td>
                  </tr>
                  <tr>
                    <td>TLD</td>
                    <td>
                      <code>.com</code>, <code>.ch</code>
                    </td>
                    <td>Kennt autoritativen NS je Domain</td>
                  </tr>
                  <tr>
                    <td>Domain</td>
                    <td>
                      <code>github.com</code>
                    </td>
                    <td>Autoritativer NS der Organisation</td>
                  </tr>
                  <tr>
                    <td>Subdomain</td>
                    <td>
                      <code>www</code>, <code>mail</code>
                    </td>
                    <td>Vom Auth-NS der Org. verwaltet</td>
                  </tr>
                </tbody>
              </table>
            </Fragment>
          </Slide>

          <Slide>
            <h2>DNS-Record-Typen</h2>
            <p>
              Ein DNS-Server speichert verschiedene{" "}
              <strong>Record-Typen</strong>:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Typ</th>
                  <th>Bedeutung</th>
                  <th>Beispiel</th>
                </tr>
              </thead>
              <tbody>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>A</code>
                  </td>
                  <td>IPv4-Adresse</td>
                  <td>
                    <code>github.com → 140.82.121.4</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>AAAA</code>
                  </td>
                  <td>IPv6-Adresse</td>
                  <td>
                    <code>github.com → 2606:50c0::1</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>CNAME</code>
                  </td>
                  <td>Alias → anderer Domainname</td>
                  <td>
                    <code>www.github.com → github.com</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>MX</code>
                  </td>
                  <td>Mailserver der Domain</td>
                  <td>
                    E-Mails an <code>@github.com</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>TXT</code>
                  </td>
                  <td>Beliebiger Text (SPF, Verifikation)</td>
                  <td>Anti-Spam-Regeln</td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>NS</code>
                  </td>
                  <td>Zuständige Nameserver</td>
                  <td>
                    <code>ns1.p16.dynect.net</code>
                  </td>
                </Fragment>
              </tbody>
            </table>
          </Slide>

          <Slide>
            <h2>DNS-Auflösung — Schritt für Schritt</h2>
            <p>
              Was passiert, wenn Sie <code>github.com</code> eingeben?
            </p>
            <DnsResolver />
            <Fragment animation="fade-up">
              <div className="warning-box" style={{ marginTop: "0.4em" }}>
                DNS-Anfragen sind standardmässig{" "}
                <strong>unverschlüsselt</strong> (UDP Port 53) — der ISP sieht
                alle aufgerufenen Domains. Lösung: <strong>DoH</strong> oder{" "}
                <strong>DoT</strong>.
              </div>
            </Fragment>
          </Slide>
        </Stack>

        {/* 6. HTTP vs. HTTPS */}
        <Slide>
          <h2>HTTP vs. HTTPS</h2>
          <table>
            <thead>
              <tr>
                <th>Aspekt</th>
                <th>HTTP</th>
                <th>HTTPS</th>
              </tr>
            </thead>
            <tbody>
              <Fragment as="tr" animation="fade-up">
                <td>Inhalt verschlüsselt</td>
                <td style={{ color: "#fb4934" }}>Nein</td>
                <td style={{ color: "#b8bb26" }}>Ja (TLS)</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>Integrität</td>
                <td style={{ color: "#fb4934" }}>Keine Garantie</td>
                <td style={{ color: "#b8bb26" }}>Manipulationsschutz</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>Server-Authentizität</td>
                <td style={{ color: "#fb4934" }}>Nein</td>
                <td style={{ color: "#b8bb26" }}>Ja (Zertifikat)</td>
              </Fragment>
              <Fragment as="tr" animation="fade-up">
                <td>ISP sieht Domain</td>
                <td style={{ color: "#fb4934" }}>Ja</td>
                <td>Ja (nur Domain, nicht Pfad)</td>
              </Fragment>
            </tbody>
          </table>
          <Fragment animation="fade-up">
            <div className="warning-box" style={{ marginTop: "0.5em" }}>
              HTTPS schützt den <em>Inhalt</em>, nicht die Metadaten. ISP sieht
              weiterhin, welche Domains besucht werden.
            </div>
          </Fragment>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            BLOCK B — NETZWERKKOMPONENTEN
            ══════════════════════════════════════════════════════ */}

        {/* 7. Section-Trennfolie */}
        <Slide className="section-slide" transition="zoom">
          <h2>Netzwerkkomponenten</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Subnetting · NAT
          </Fragment>
        </Slide>

        {/* 9. Subnetting */}
        <Slide>
          <h2>IP-Adressierung &amp; Subnetting</h2>
          <Fragment as="p" animation="fade-up">
            Jede IP-Adresse hat zwei Teile: den <strong>Netzwerk-Teil</strong>{" "}
            (welches Netz?) und den <strong>Geräte-Teil</strong> (welches Gerät
            im Netz?). Die Zahl nach dem Schrägstrich zeigt, wie gross das Netz
            ist.
          </Fragment>
          <Fragment animation="fade-up">
            <div className="highlight-box" style={{ marginTop: "0.5em" }}>
              <code>192.168.1.0/24</code> → Heimnetzwerk mit Platz für{" "}
              <strong>254 Geräte</strong>
            </div>
          </Fragment>
          <Fragment animation="fade-up">
            <table style={{ marginTop: "0.6em" }}>
              <thead>
                <tr>
                  <th>Notation</th>
                  <th>Netzgrösse</th>
                  <th>Typische Verwendung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>/8</code>
                  </td>
                  <td>Sehr grosse Netze (Millionen Geräte)</td>
                  <td>Grossunternehmen, ISPs</td>
                </tr>
                <tr>
                  <td>
                    <code>/24</code>
                  </td>
                  <td>Kleines Netz (bis 254 Geräte)</td>
                  <td>Heimnetzwerk, Schulnetz</td>
                </tr>
              </tbody>
            </table>
          </Fragment>
        </Slide>

        {/* 10. NAT */}
        <Slide>
          <h2>NAT — Network Address Translation</h2>
          <Fragment as="p" animation="fade-up">
            IPv4 hat nur ~4 Milliarden Adressen. <strong>PAT</strong> lässt
            viele Geräte eine öffentliche IP teilen.
          </Fragment>
          <ol>
            <Fragment as="li" animation="fade-up">
              Gerät (<code>192.168.1.10:5432</code>) öffnet Verbindung
            </Fragment>
            <Fragment as="li" animation="fade-up">
              Router trägt ein:{" "}
              <code>192.168.1.10:5432 → 203.0.113.1:41234</code>
            </Fragment>
            <Fragment as="li" animation="fade-up">
              Paket verlässt das Netz mit öffentlicher IP als Absender
            </Fragment>
            <Fragment as="li" animation="fade-up">
              Antwort auf Port 41234 → Router leitet zurück an{" "}
              <code>192.168.1.10</code>
            </Fragment>
          </ol>
          <Fragment animation="fade-up">
            <div className="info-box" style={{ marginTop: "0.5em" }}>
              NAT bietet als Nebeneffekt Schutz — aber{" "}
              <strong>kein Ersatz für eine echte Firewall.</strong>
            </div>
          </Fragment>
        </Slide>

        {/* ══════════════════════════════════════════════════════
            BLOCK C — VPN
            ══════════════════════════════════════════════════════ */}

        {/* 12. Section-Trennfolie */}
        <Slide className="section-slide" transition="zoom">
          <h2>VPN — Virtual Private Network</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Tunnel · Mythen
          </Fragment>
        </Slide>

        {/* 13. VPN-Tunnel */}
        <Slide>
          <h2>Wie funktioniert ein VPN-Tunnel?</h2>
          <ol>
            <Fragment as="li" animation="fade-up">
              <strong>Enkapsulierung:</strong> Ihre Pakete werden in neue Pakete
              eingepackt
            </Fragment>
            <Fragment as="li" animation="fade-up">
              <strong>Verschlüsselung:</strong> Inhalt wird verschlüsselt — ISP
              sieht nur den VPN-Server
            </Fragment>
            <Fragment as="li" animation="fade-up">
              <strong>Neue Absenderadresse:</strong> Alle sehen die IP des
              VPN-Servers, nicht Ihre
            </Fragment>
            <Fragment as="li" animation="fade-up">
              <strong>Entpacken beim Server:</strong> VPN-Server entschlüsselt
              und leitet weiter
            </Fragment>
          </ol>
          <Fragment animation="fade-up">
            <div className="warning-box" style={{ marginTop: "0.5em" }}>
              Der <strong>VPN-Anbieter</strong> sieht alle Ihre Anfragen — das
              Vertrauensproblem verschiebt sich nur.
            </div>
          </Fragment>
        </Slide>

        {/* 15. VPN-Mythen */}
        <Slide>
          <h2>VPN-Mythen</h2>
          <Fragment animation="fade-up">
            <div className="warning-box">
              <strong>„Mit VPN bin ich 100% anonym"</strong>
              <br />
              Falsch. Der VPN-Anbieter kennt Ihre echte IP und alle Anfragen.
            </div>
          </Fragment>
          <Fragment animation="fade-up">
            <div className="warning-box" style={{ marginTop: "0.5em" }}>
              <strong>„VPN schützt vor Malware"</strong>
              <br />
              Falsch. VPN verschlüsselt nur die Übertragung.
            </div>
          </Fragment>
          <Fragment animation="fade-up">
            <div className="warning-box" style={{ marginTop: "0.5em" }}>
              <strong>„Kostenlose VPNs sind gleichwertig"</strong>
              <br />
              Falsch. Oft werden Nutzungsdaten verkauft.
            </div>
          </Fragment>
        </Slide>
      </Slideshow>

      <section>
        <h2>Kapitel dieser Präsentation</h2>
        <ul>
          <li>
            <Link to="/gym/internet">Das Internet</Link> — TCP/IP, DNS, HTTP vs.
            HTTPS
          </li>
          <li>
            <Link to="/gym/netzwerke">Netzwerkkomponenten</Link> — Subnetting,
            NAT
          </li>
          <li>
            <Link to="/gym/vpn">VPN</Link> — Tunnel, Mythen
          </li>
        </ul>
      </section>
    </>
  )
}
