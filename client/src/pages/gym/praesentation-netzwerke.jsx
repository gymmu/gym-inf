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
import NatDiagram from "@components/gym/NatDiagram/NatDiagram"
import HttpDiagram from "@components/gym/HttpDiagram/HttpDiagram"
import HttpPacket from "@components/gym/HttpPacket/HttpPacket"
import VpnTunnel from "@components/gym/VpnTunnel/VpnTunnel"

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

        {/* Titelfolie */}
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
                  <li>Heimnetz &amp; Pakete</li>
                  <li>TCP/IP-Schichtenmodell</li>
                  <li>TCP vs. UDP</li>
                  <li>IP, Subnetting &amp; NAT</li>
                  <li>DNS</li>
                </ul>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block B — HTTP &amp; HTTPS</strong>
                </p>
                <ul>
                  <li>Request &amp; Response</li>
                  <li>Methoden &amp; Statuscodes</li>
                  <li>HTTP vs. HTTPS</li>
                </ul>
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div>
                <p>
                  <strong>Block C — VPN</strong>
                </p>
                <ul>
                  <li>VPN-Tunnel &amp; Geoblocking</li>
                  <li>VPN-Mythen</li>
                </ul>
              </div>
            </Fragment>
          </div>
        </Slide>

        {/* Stack: Einstieg — Heimnetzwerk / Internet / Pakete / Animation */}
        <Stack>
          <Slide>
            <h2>Das Heimnetzwerk</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Klicke auf ein Gerät für Details:
            </p>
            <NetworkDiagram />
          </Slide>
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
          <Slide>
            <h2>Text → Bits → Pakete → Netz</h2>
            <PacketAnimation />
          </Slide>
        </Stack>

        {/* Stack: TCP/IP-Schichtenmodell + Paket-Aufbau */}
        <Stack>
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
              Klicke auf &ldquo;Schichten aufklappen&rdquo; und dann auf
              einzelne Felder:
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
                  sie in einen eigenen Umschlag mit einem eigenen Header. Am
                  Ziel werden die Umschläge von aussen nach innen geöffnet.
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
                    dieselbe IP teilen können (Virtual Hosting). Der Server
                    weiss damit, welche Webseite gemeint ist.
                  </li>
                </ul>
                <p style={{ marginTop: "0.5em" }}>
                  <strong>
                    TCP-Segment (Schicht 3 — zuverlässige Übertragung):
                  </strong>
                </p>
                <ul style={{ marginTop: "0.2em", paddingLeft: "1.2em" }}>
                  <li>
                    <strong>Ports:</strong> Identifizieren den Dienst. Port 443
                    = HTTPS, Port 22 = SSH. Der Client wählt einen zufälligen
                    Quell-Port (&gt;1024), damit mehrere Verbindungen
                    gleichzeitig möglich sind.
                  </li>
                  <li>
                    <strong>Sequenz- &amp; ACK-Nummer:</strong> Ermöglichen
                    korrekte Reihenfolge und Bestätigung. Fehlt ein Paket, kann
                    der Empfänger gezielt nachfordern.
                  </li>
                  <li>
                    <strong>Flags (SYN / ACK / FIN):</strong> Steuern den
                    Verbindungsstatus. SYN = Verbindung aufbauen, FIN =
                    Verbindung beenden, RST = Verbindung abbrechen.
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
                    <strong>Quell-IP / Ziel-IP:</strong> Bleiben auf dem
                    gesamten Weg konstant (im Gegensatz zur MAC-Adresse). Anhand
                    der Ziel-IP entscheiden Router, wohin das Paket
                    weitergeleitet wird.
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
                    <strong>Ziel-MAC / Quell-MAC:</strong> Physische Adressen
                    der Netzwerkkarten. Nur im lokalen Netz gültig — an jedem
                    Router wird der Ethernet-Frame neu erstellt (MAC ändert
                    sich, IP bleibt gleich).
                  </li>
                  <li>
                    <strong>FCS (Frame Check Sequence):</strong> Prüfsumme am
                    Ende des Frames — erkennt Übertragungsfehler auf dem Kabel.
                  </li>
                </ul>
              </div>
            </details>
          </Slide>
        </Stack>

        {/* Stack: TCP / Handshake / UDP */}
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

        {/* 5. IP-Adressen, Subnetting & NAT — vertikal */}
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
          </Slide>

          <Slide>
            <h2>IP-Adressierung &amp; Subnetting</h2>
            <Fragment as="p" animation="fade-up">
              Jede IP-Adresse hat zwei Teile: den <strong>Netzwerk-Teil</strong>{" "}
              (welches Netz?) und den <strong>Geräte-Teil</strong> (welches
              Gerät im Netz?). Die Zahl nach dem Schrägstrich zeigt, wie gross
              das Netz ist.
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

          <Slide>
            <h2>NAT — Network Address Translation</h2>
            <p>
              Der Router ersetzt beim Weiterschicken die{" "}
              <strong>private IP</strong> des Geräts durch seine eigene{" "}
              <strong>öffentliche IP</strong> — und merkt sich, wem die Antwort
              gehört.
            </p>
            <NatDiagram />
          </Slide>
        </Stack>

        {/* 6. DNS — vertikal */}
        <Stack>
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

        {/* ══════════════════════════════════════════════════════
            BLOCK B — HTTP & HTTPS
            ══════════════════════════════════════════════════════ */}

        {/* Section-Trennfolie HTTP */}
        <Slide className="section-slide" transition="zoom">
          <h2>HTTP &amp; HTTPS</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Wie Webseiten übertragen werden — und warum das Schloss im Browser
            wichtig ist.
          </Fragment>
        </Slide>

        {/* Stack: gesamter HTTP-Block */}
        <Stack>
          <Slide>
            <h2>Was ist HTTP?</h2>
            <Fragment as="p" animation="fade-up">
              <strong>HTTP</strong> (HyperText Transfer Protocol) ist die
              Sprache, in der Browser und Webserver miteinander reden. Jedes
              Mal, wenn du eine Webseite öffnest, sendet dein Browser eine{" "}
              <strong>Anfrage (Request)</strong> — der Server schickt eine{" "}
              <strong>Antwort (Response)</strong> zurück.
            </Fragment>
            <Fragment animation="fade-up">
              <div className="info-box" style={{ marginTop: "0.5em" }}>
                HTTP läuft über <strong>TCP</strong> — die zuverlässige
                Transportschicht. Standard-Port: <code>80</code> (HTTP) ·{" "}
                <code>443</code> (HTTPS)
              </div>
            </Fragment>
            <Fragment animation="fade-up">
              <div
                className="cols"
                style={{ marginTop: "0.6em", gap: "0.6em" }}>
                <div className="info-box">
                  <strong>Request</strong>
                  <br />
                  Browser → Server
                  <br />
                  <code>GET /seite.html</code>
                </div>
                <div className="info-box">
                  <strong>Response</strong>
                  <br />
                  Server → Browser
                  <br />
                  <code>200 OK + HTML</code>
                </div>
              </div>
            </Fragment>
          </Slide>

          <Slide>
            <h2>HTTP-Anfrage &amp; Antwort (animiert)</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.3em" }}>
              Wähle ein Szenario und klicke auf &ldquo;Anfrage senden&rdquo;:
            </p>
            <HttpDiagram />
          </Slide>
          <Slide>
            <h2>HTTP-Methoden</h2>
            <p>
              Die Methode sagt dem Server, <em>was</em> der Client tun möchte:
            </p>
            <table style={{ marginTop: "0.4em" }}>
              <thead>
                <tr>
                  <th>Methode</th>
                  <th>Bedeutung</th>
                  <th>Beispiel</th>
                </tr>
              </thead>
              <tbody>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>GET</code>
                  </td>
                  <td>Ressource abrufen</td>
                  <td>Webseite laden, Bild anzeigen</td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>POST</code>
                  </td>
                  <td>Daten senden / erstellen</td>
                  <td>Login-Formular, Tweet abschicken</td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>PUT</code>
                  </td>
                  <td>Ressource ersetzen</td>
                  <td>Profilbild hochladen</td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>DELETE</code>
                  </td>
                  <td>Ressource löschen</td>
                  <td>Konto löschen</td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td>
                    <code>PATCH</code>
                  </td>
                  <td>Teilweise ändern</td>
                  <td>Nur E-Mail-Adresse aktualisieren</td>
                </Fragment>
              </tbody>
            </table>
          </Slide>
          <Slide>
            <h2>HTTP-Statuscodes</h2>
            <p>
              Die Antwort beginnt immer mit einem <strong>Statuscode</strong> —
              drei Ziffern, die das Ergebnis beschreiben:
            </p>
            <table style={{ marginTop: "0.4em" }}>
              <thead>
                <tr>
                  <th>Bereich</th>
                  <th>Bedeutung</th>
                  <th>Häufige Codes</th>
                </tr>
              </thead>
              <tbody>
                <Fragment as="tr" animation="fade-up">
                  <td style={{ color: "#b8bb26" }}>
                    <strong>2xx</strong>
                  </td>
                  <td>Erfolg</td>
                  <td>
                    <code>200 OK</code> · <code>201 Created</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td style={{ color: "#83a598" }}>
                    <strong>3xx</strong>
                  </td>
                  <td>Weiterleitung</td>
                  <td>
                    <code>301 Moved</code> · <code>302 Found</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td style={{ color: "#fabd2f" }}>
                    <strong>4xx</strong>
                  </td>
                  <td>Client-Fehler</td>
                  <td>
                    <code>400 Bad Request</code> · <code>401 Unauthorized</code>{" "}
                    · <code>404 Not Found</code>
                  </td>
                </Fragment>
                <Fragment as="tr" animation="fade-up">
                  <td style={{ color: "#fb4934" }}>
                    <strong>5xx</strong>
                  </td>
                  <td>Server-Fehler</td>
                  <td>
                    <code>500 Internal Server Error</code> ·{" "}
                    <code>503 Unavailable</code>
                  </td>
                </Fragment>
              </tbody>
            </table>
            <Fragment animation="fade-up">
              <div className="highlight-box" style={{ marginTop: "0.5em" }}>
                Faustregel: <strong>2xx</strong> = gut · <strong>4xx</strong> =
                dein Fehler · <strong>5xx</strong> = Server-Fehler
              </div>
            </Fragment>
          </Slide>
          <Slide>
            <h2>HTTP vs. HTTPS — was sieht ein Angreifer?</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.4em" }}>
              Klicke auf eine Schicht um die Felder zu sehen. Wechsle zwischen
              HTTP und HTTPS:
            </p>
            <HttpPacket />
          </Slide>
        </Stack>

        {/* ══════════════════════════════════════════════════════
            BLOCK C — VPN
            ══════════════════════════════════════════════════════ */}

        {/* Section-Trennfolie VPN */}
        <Slide className="section-slide" transition="zoom">
          <h2>VPN — Virtual Private Network</h2>
          <Fragment as="p" animation="fade-up" style={{ color: "#ebdbb2" }}>
            Tunnel · Geoblocking · Mythen
          </Fragment>
        </Slide>

        {/* VPN-Tunnel — vertikal */}
        <Stack>
          <Slide>
            <h2>Wie funktioniert ein VPN-Tunnel?</h2>
            <ol>
              <Fragment as="li" animation="fade-up">
                <strong>Enkapsulierung:</strong> Ihre Pakete werden in neue
                Pakete eingepackt
              </Fragment>
              <Fragment as="li" animation="fade-up">
                <strong>Verschlüsselung:</strong> Inhalt wird verschlüsselt —
                ISP sieht nur den VPN-Server
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
          <Slide>
            <h2>VPN-Tunnel (animiert)</h2>
            <p style={{ fontSize: "0.85em", marginBottom: "0.3em" }}>
              Vergleiche: Was sieht der ISP mit und ohne VPN?
            </p>
            <VpnTunnel />
          </Slide>
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
        </Stack>
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
