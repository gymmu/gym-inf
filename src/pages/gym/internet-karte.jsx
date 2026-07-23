import ImageMagnifier from "@components/ImageMagnifier.jsx";
import Section from "@components/Section.jsx";

export default function GymInternetKarte() {
  return (
    <>
      <h1>Karte des Internets</h1>
      <p>
        Diese Karte zeigt, wie die wichtigsten Komponenten des Internets
        zusammenhängen — von Ihrem Gerät zuhause bis zum Server auf einem
        anderen Kontinent. Jede Station auf dieser Karte spielt eine Rolle
        dabei, wie Daten übertragen werden und wo Sicherheitsmechanismen wie
        Verschlüsselung und Firewalls wirken.
      </p>
      <p>
        <em>Bewegen Sie die Maus über die Karte, um Details zu vergrössern.</em>
      </p>

      <Section>
        <div
          style={{
            textAlign: "center",
            margin: "2rem 0",
            backgroundColor: "white",
            padding: "1rem",
          }}
        >
          <ImageMagnifier
            src="/gym-inf/svg/map-of-the-internet.svg"
            alt="Karte des Internets"
            magnifierRadius={400}
            zoomLevel={1.75}
          />
        </div>
      </Section>

      <section>
        <h2>Der Weg eines Datenpakets</h2>
        <p>
          Wenn Sie <code>https://www.bank.ch</code> aufrufen, passiert Ihr
          Datenpaket der Reihe nach alle folgenden Stationen — in beide
          Richtungen, hin und zurück:
        </p>

        <h3>1. Client (Ihr Gerät)</h3>
        <p>
          Alles beginnt bei Ihrem <strong>Client</strong> — Computer, Smartphone
          oder Tablet. Ihr Browser baut eine verschlüsselte TLS-Verbindung auf,
          bevor das erste Nutzdatenpaket gesendet wird. Das bedeutet: Ihr Gerät
          ist der Ort, wo die Verschlüsselung entsteht und wieder aufgelöst
          wird. Kein Zwischenknoten kann den Inhalt lesen.
        </p>

        <h3>2. Modem und Router (Heimnetzwerk)</h3>
        <p>
          Das <strong>Modem</strong> wandelt digitale Datenpakete in Signale um,
          die über die physische Leitung (Glasfaser, Koaxialkabel, DSL) zum ISP
          übertragen werden können. Der <strong>Router</strong> entscheidet,
          wohin jedes Paket weitergeleitet wird — er ist die Kreuzung Ihres
          Heimnetzwerks. Die Firewall Ihres Routers blockiert dabei unerwünschte
          eingehende Verbindungen.
        </p>

        <h3>3. ISP (Internetanbieter)</h3>
        <p>
          Ihr <strong>Internet Service Provider</strong> (z.B. Swisscom,
          Sunrise, Salt) stellt die physische Verbindung zum Internet bereit.
          Der ISP kann sehen, mit welcher IP-Adresse Sie kommunizieren — aber{" "}
          <em>nicht</em>, was Sie übertragen, solange HTTPS aktiv ist. Genau das
          ist der Sinn der Ende-zu-Ende-Verschlüsselung: Selbst
          vertrauenswürdige Zwischenstationen haben keinen Zugriff auf den
          Inhalt.
        </p>

        <h3>4. DNS-Server</h3>
        <p>
          Bevor das erste Paket an den Zielserver gesendet werden kann, muss der{" "}
          <strong>DNS-Server</strong> den Domainnamen <code>www.bank.ch</code>{" "}
          in eine IP-Adresse übersetzen. DNS ist traditionell unverschlüsselt —
          ein Angreifer im Netzwerk könnte mitlesen, welche Domains Sie
          aufrufen. Neuere Protokolle wie <strong>DNS over HTTPS (DoH)</strong>{" "}
          verschlüsseln auch diese Anfragen.
        </p>

        <h3>5. Backbone-Router (Transatlantik)</h3>
        <p>
          Die <strong>Backbone-Router</strong> sind die
          Hochgeschwindigkeitsknoten im Kern des Internets. Sie verbinden ISPs,
          Kontinente und grosse Rechenzentren miteinander. Die eigentlichen
          Datenleitungen sind Glasfaserkabel — auch Unterseekabel für
          Verbindungen zwischen Kontinenten. Auf dieser Ebene sind die Pakete
          bereits verschlüsselt; die Router kennen nur Quell- und Ziel-IP, nicht
          den Inhalt.
        </p>

        <h3>6. Rechenzentrum und Server</h3>
        <p>
          Im Rechenzentrum (z.B. Amazon AWS, Google Cloud) stehen die
          eigentlichen
          <strong> Server</strong>. Vor dem Server befindet sich oft eine{" "}
          <strong>Firewall</strong>, die unerwünschte Verbindungen blockiert,
          sowie ein <strong>Load Balancer</strong>, der Anfragen auf mehrere
          Server verteilt. Erst hier wird die TLS-Verschlüsselung aufgelöst —
          der Server entschlüsselt Ihre Anfrage und sendet eine verschlüsselte
          Antwort zurück.
        </p>

        <h3>7. VPN (optional)</h3>
        <p>
          Ein <strong>VPN</strong> (Virtual Private Network) fügt eine
          zusätzliche Verschlüsselungsschicht hinzu: Alle Ihre Pakete werden
          zuerst verschlüsselt zum VPN-Server gesendet, der sie dann
          weiterschickt. Für den ISP ist der VPN-Server das einzige sichtbare
          Ziel. VPNs werden für Datenschutz oder für den Zugang zu internen
          Firmennetzen eingesetzt.
        </p>
      </section>

      <Section>
        <h2>Wo greift Verschlüsselung?</h2>
        <p>
          Auf der Karte sehen Sie mehrere Verbindungen. Wichtig ist zu
          verstehen, auf welchem Abschnitt welche Art von Verschlüsselung aktiv
          ist:
        </p>
        <ul>
          <li>
            <strong>TLS (HTTPS):</strong> Ende-zu-Ende vom Client zum
            Zielserver. Kein Zwischenknoten kann den Inhalt lesen — nicht der
            ISP, nicht die Backbone-Router.
          </li>
          <li>
            <strong>VPN-Tunnel:</strong> Verschlüsselt den gesamten Datenverkehr
            vom Client zum VPN-Server, einschliesslich DNS-Anfragen. Der
            VPN-Server ist danach die sichtbare Quelle.
          </li>
          <li>
            <strong>DNS (unverschlüsselt):</strong> Standardmässig im Klartext —
            nur die aufgerufene Domain, nicht der Inhalt. Mit DoH oder DoT auch
            verschlüsselbar.
          </li>
        </ul>
        <p>
          Das Prinzip: Verschlüsselung schützt den <strong>Inhalt</strong>, aber
          Metadaten (wer kommuniziert mit wem, wann, wie viel) sind oft trotzdem
          sichtbar. Totale Anonymität erfordert zusätzliche Massnahmen wie Tor
          oder VPN.
        </p>
      </Section>

      <Section>
        <h2>Bekannte Dienste auf der Karte</h2>
        <p>
          Auf der Karte sind einige der grössten Internet-Dienste eingezeichnet.
          Sie alle betreiben eigene riesige Rechenzentren und sind über das
          Backbone mit dem Rest des Internets verbunden:
        </p>
        <ul>
          <li>
            <strong>Google:</strong> Suchmaschine, Gmail, YouTube — eigenes
            globales Glasfasernetz.
          </li>
          <li>
            <strong>Meta:</strong> Facebook, Instagram, WhatsApp — Milliarden
            Nutzer, eigene Unterseekabel.
          </li>
          <li>
            <strong>Netflix:</strong> Videodienst — platziert Server direkt bei
            ISPs (CDN), um Ladezeiten zu minimieren.
          </li>
          <li>
            <strong>Amazon (AWS):</strong> Grösste Cloud-Plattform der Welt —
            sowohl US- als auch EU-Rechenzentren (wichtig für DSGVO).
          </li>
        </ul>
        <p>
          Diese Dienste stehen alle hinter HTTPS. Wenn Sie sie benutzen, läuft
          im Hintergrund der TLS-Handshake ab — derselbe Prozess, den Sie auf
          der Verschlüsselungsseite detailliert kennengelernt haben.
        </p>
      </Section>
    </>
  );
}
