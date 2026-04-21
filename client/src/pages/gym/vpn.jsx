import DataTable from "@components/DataTable/DataTable"
import Figure from "@components/Figure.jsx"
import TorOnion from "@components/gym/TorOnion/TorOnion"
import LearningGoals from "@components/LearningGoals.jsx"
import Section from "@components/Section.jsx"

export default function GymVPN() {
  return (
    <>
      <h1>VPN — Virtual Private Network</h1>
      <p>
        Ein VPN ist mehr als nur ein Werkzeug für Anonymität. Es ist eine
        Netzwerktechnik, die ursprünglich entwickelt wurde, damit Mitarbeitende
        von überall sicher auf Firmennetzwerke zugreifen können — daher der Name
        &ldquo;Virtual <strong>Private</strong> Network&rdquo;.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie verstehen, wie ein VPN-Tunnel technisch aufgebaut wird und
            welche Protokolle dabei eingesetzt werden.
          </li>
          <li>Sie kennen den Unterschied zwischen WireGuard und OpenVPN.</li>
          <li>Sie wissen, was Split Tunneling ist und wann es sinnvoll ist.</li>
          <li>
            Sie verstehen die Grenzen von VPN in Bezug auf Anonymität und
            Sicherheit.
          </li>
          <li>
            Sie kennen das Tor-Netzwerk als Alternative und dessen Vor- und
            Nachteile gegenüber VPN.
          </li>
        </ul>
      </LearningGoals>

      <section>
        <h2>Wie funktioniert ein VPN-Tunnel?</h2>
        <p>
          Ein VPN erstellt einen <strong>verschlüsselten Tunnel</strong>{" "}
          zwischen Ihrem Gerät und dem VPN-Server. Technisch gesehen geschieht
          folgendes:
        </p>
        <ol>
          <li>
            <strong>Tunneling:</strong> Ihre IP-Pakete werden in neue Pakete
            eingepackt (Enkapsulierung). Das originale Paket wird zum Inhalt des
            neuen Pakets.
          </li>
          <li>
            <strong>Verschlüsselung:</strong> Der Inhalt des Tunnels wird
            verschlüsselt, sodass niemand auf dem Weg — auch nicht Ihr ISP — den
            Inhalt lesen kann.
          </li>
          <li>
            <strong>Neue Absenderadresse:</strong> Die äussere Hülle trägt Ihre
            IP und die Adresse des VPN-Servers. Alle auf dem Weg sehen nur diese
            Verbindung.
          </li>
          <li>
            <strong>Entpacken beim VPN-Server:</strong> Dort wird entschlüsselt
            und das originale Paket an das Ziel weitergeleitet.
          </li>
          <li>
            <strong>Rückweg:</strong> Die Antwort kommt zum VPN-Server, wird
            verschlüsselt und durch den Tunnel zurück zu Ihnen geschickt.
          </li>
        </ol>

        <Figure
          src="https://www.auvik.com/wp-content/uploads/2021/01/pasted-image-1.png"
          alt="VPN Tunnel Visualisierung"
          caption="Ein VPN-Tunnel: Daten werden verschlüsselt durch ein fremdes Netz geleitet"
          origin="https://www.auvik.com/franklyit/blog/vpn-split-tunneling/"
        />

        <h3>Was sieht wer?</h3>
        <DataTable
          headers={["Beobachter", "Ohne VPN", "Mit VPN"]}
          rows={[
            [
              "ISP",
              "Alle Domains und IPs",
              'Nur: "verbunden mit VPN-Server X"',
            ],
            [
              "Lokales WLAN",
              "Alle unverschlüsselten Daten",
              "Nur verschlüsselte Pakete zum VPN",
            ],
            ["Ziel-Webseite", "Ihre echte IP-Adresse", "IP des VPN-Servers"],
            ["VPN-Anbieter", "—", "Alle Ihre Anfragen (!)"],
          ]}
        />
      </section>

      <Section>
        <h2>VPN-Protokolle: WireGuard vs. OpenVPN</h2>
        <p>
          Nicht alle VPNs sind gleich. Das verwendete <strong>Protokoll</strong>{" "}
          bestimmt die Sicherheit, Geschwindigkeit und
          Implementierungskomplexität.
        </p>

        <h3>OpenVPN</h3>
        <p>
          OpenVPN ist seit 2001 der De-facto-Standard für kommerzielle
          VPN-Dienste: nutzt TLS/SSL für den Schlüsselaustausch, AES-256-GCM für
          Datenverschlüsselung, RSA oder ECDH für den Schlüsselaustausch. Läuft
          über TCP oder UDP. Ca. 70.000 Zeilen Code — gross und komplex.
        </p>

        <h3>WireGuard</h3>
        <p>
          WireGuard ist ein modernes VPN-Protokoll (2015) mit radikalem
          Designprinzip: ChaCha20 für Verschlüsselung, Poly1305 für
          Authentifizierung, Curve25519 für Schlüsselaustausch. Nur ca. 4.000
          Zeilen Code, deutlich schneller, seit Linux 5.6 im Kernel integriert.
        </p>

        <DataTable
          headers={["Eigenschaft", "OpenVPN", "WireGuard"]}
          rows={[
            ["Codegrösse", "~70'000 Zeilen", "~4'000 Zeilen"],
            ["Geschwindigkeit", "Mittel", "Sehr schnell"],
            ["Verschlüsselung", "AES-256", "ChaCha20-Poly1305"],
            ["Reife", "Sehr erprobt (seit 2001)", "Modern (seit 2015)"],
            ["Mobilgeräte", "Gut", "Ausgezeichnet"],
          ]}
        />
        <p>
          <strong>Empfehlung:</strong> WireGuard ist heute für die meisten
          Anwendungsfälle die bessere Wahl.
        </p>
      </Section>

      <section>
        <h2>Split Tunneling — Nicht alles durch den Tunnel</h2>
        <p>
          Standardmässig leitet ein VPN <strong>allen</strong> Datenverkehr
          durch den Tunnel. <strong>Split Tunneling</strong> ermöglicht es, nur
          bestimmten Datenverkehr durch den VPN-Tunnel zu leiten.
        </p>
        <DataTable
          caption="Einsatzszenarien Split Tunneling"
          headers={["Szenario", "Durch VPN", "Direkt"]}
          rows={[
            ["Firmennetzwerk", "Interne Firmenanwendungen", "Normal-Browsing"],
            [
              "Streaming",
              "E-Mails, Banking",
              "Netflix (bessere Geschwindigkeit)",
            ],
            [
              "Geo-Bypass",
              "Spezifische Streaming-App",
              "Restlicher Datenverkehr",
            ],
          ]}
        />
        <Figure
          src="https://www.auvik.com/wp-content/uploads/2021/01/split-tunneling-1.png"
          alt="Split Tunneling Visualisierung"
          caption="Split Tunneling: Nur ein Teil des Datenverkehrs geht durch den VPN-Tunnel"
          origin="https://www.auvik.com/franklyit/blog/vpn-split-tunneling/"
        />
        <p>
          <strong>Sicherheitsrisiko:</strong> Mit Split Tunneling kann
          nicht-getunnelter Datenverkehr weiterhin vom ISP eingesehen werden. In
          Unternehmensumgebungen kann das zu Datenlecks führen.
        </p>
      </section>

      <Section>
        <h2>VPN vs. HTTPS — Zwei verschiedene Schutzschichten</h2>
        <p>
          VPN und HTTPS lösen <strong>unterschiedliche Probleme</strong> und
          ergänzen sich:
        </p>
        <DataTable
          headers={["Schutz gegen…", "HTTPS", "VPN"]}
          rows={[
            ["ISP sieht Inhalte", "Ja", "Ja"],
            ["ISP sieht besuchte Domains", "Nein", "Ja"],
            ["Mitlauschen im WLAN", "Ja", "Ja"],
            ["Webseite sieht Ihre IP", "Nein", "Ja"],
            ["VPN-Anbieter sieht Inhalte", "—", "Nein (bei HTTPS)"],
          ]}
        />
        <p>
          <strong>Die beste Kombination:</strong> HTTPS + VPN. VPN schützt vor
          Ihrem ISP und dem lokalen Netz, HTTPS schützt die Inhalte sogar vor
          dem VPN-Anbieter.
        </p>
      </Section>

      <section>
        <h2>Das Tor-Netzwerk — Anonymität durch Zwiebel-Routing</h2>
        <p>
          <strong>Tor</strong> (The Onion Router) verfolgt maximale Anonymität.
          Anstatt einen einzigen VPN-Server zu nutzen, leitet Tor Ihren
          Datenverkehr durch <strong>drei zufällig ausgewählte Relais</strong>:
        </p>
        <TorOnion />
        <p>
          <strong>Mehrschichtige Verschlüsselung:</strong> Die Daten werden
          dreifach verschlüsselt. Jeder Knoten kann nur seine eigene Schicht
          entschlüsseln. <strong>Kein einzelner Knoten</strong> kennt sowohl den
          Absender als auch das Ziel.
        </p>

        <DataTable
          headers={["Eigenschaft", "VPN", "Tor"]}
          rows={[
            [
              "Anonymität",
              "Mittel (VPN-Anbieter kennt alles)",
              "Hoch (kein Knoten kennt alles)",
            ],
            ["Geschwindigkeit", "Gut", "Langsam (3 Hops)"],
            ["Vertrauen benötigt", "VPN-Anbieter", "Niemanden (dezentral)"],
            [
              "Geeignet für",
              "Alltag, Streaming",
              "Hohe Anonymitätsanforderungen",
            ],
            [".onion-Seiten", "Nein", "Ja"],
          ]}
        />
        <p>
          <strong>Grenzen von Tor:</strong> Geschwindigkeit (3 Hops = höhere
          Latenz), Exit-Node sieht unverschlüsselten HTTP-Datenverkehr, Browser-
          Fingerprinting kann trotzdem zur Identifizierung führen.
        </p>
      </section>

      <Section>
        <h2>Grenzen von VPN — Mythen vs. Realität</h2>
        <DataTable
          headers={["Mythos", "Realität"]}
          rows={[
            [
              '"Mit VPN bin ich 100% anonym"',
              "Falsch. Der VPN-Anbieter kennt Ihre echte IP und alle Ihre Anfragen.",
            ],
            [
              '"VPN schützt vor Malware"',
              "Falsch. VPN verschlüsselt nur die Übertragung, schützt nicht das Gerät.",
            ],
            [
              '"Kostenlose VPNs sind gleichwertig"',
              "Falsch. Oft werden Nutzungsdaten verkauft oder Bandbreite weitervermittelt.",
            ],
          ]}
        />

        <h3>No-Logs-Policy</h3>
        <p>
          Viele VPN-Anbieter werben mit &ldquo;No-Logs-Policy&rdquo;. Achten Sie
          auf:
        </p>
        <ul>
          <li>
            <strong>Unabhängige Audits</strong> durch bekannte Sicherheitsfirmen
          </li>
          <li>
            <strong>Gerichtsbarkeit:</strong> Ist der Anbieter in einem Land,
            das keine Datenherausgabe erzwingen kann?
          </li>
          <li>
            <strong>Open-Source-Code:</strong> Ist der Client-Code öffentlich
            einsehbar?
          </li>
        </ul>
      </Section>

      <section>
        <h2>Zusammenfassung</h2>
        <p>
          Ein VPN erstellt einen verschlüsselten Tunnel durch Enkapsulierung und
          Verschlüsselung von Paketen. <strong>WireGuard</strong> ist das
          moderne, schlanke Protokoll der Wahl; <strong>OpenVPN</strong> ist
          erprobt und weit kompatibel. <strong>Split Tunneling</strong>{" "}
          ermöglicht selektives Routing, birgt aber Sicherheitsrisiken. Das{" "}
          <strong>Tor-Netzwerk</strong> bietet durch Mehrschicht-Verschlüsselung
          über drei Knoten deutlich höhere Anonymität auf Kosten der
          Geschwindigkeit. Kein VPN garantiert vollständige Anonymität — es
          verschiebt das Vertrauensproblem nur vom ISP zum VPN-Anbieter.
        </p>
      </section>
    </>
  )
}
