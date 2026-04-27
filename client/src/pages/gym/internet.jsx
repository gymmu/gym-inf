import DataTable from "@components/DataTable/DataTable"
import Figure from "@components/Figure.jsx"
import DnsResolver from "@components/gym/DnsResolver/DnsResolver"
import TcpIpLayers from "@components/gym/TcpIpLayers/TcpIpLayers"
import TcpHandshakeAnim from "@components/gym/TcpHandshake/TcpHandshake"
import PacketDiagram from "@components/gym/PacketDiagram/PacketDiagram"
import PacketAnimation from "@components/gym/PacketAnimation/PacketAnimation"
import HttpDiagram from "@components/gym/HttpDiagram/HttpDiagram"
import HttpPacket from "@components/gym/HttpPacket/HttpPacket"
import LearningGoals from "@components/LearningGoals.jsx"
import Section from "@components/Section.jsx"

export default function GymInternet() {
  return (
    <>
      <h1>Das Internet</h1>
      <p>
        Das Internet ist ein globales Netzwerk aus Millionen von Computern,
        Servern und Routern. Es verbindet Geräte auf der ganzen Welt miteinander
        und ermöglicht den Austausch von Daten in Millisekunden. Um zu
        verstehen, wie das Internet funktioniert, müssen wir uns anschauen, wie
        Daten tatsächlich übertragen werden — von der physischen
        Signalübertragung bis hin zu Protokollen, die sicherstellen, dass die
        richtigen Daten beim richtigen Empfänger ankommen.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie wissen, wie Daten in Paketen übertragen werden und warum diese
            Aufteilung sinnvoll ist.
          </li>
          <li>Sie verstehen das TCP/IP-Modell mit seinen vier Schichten.</li>
          <li>
            Sie kennen den Aufbau eines IP-Pakets mit seinen verschachtelten
            Schichten (Ethernet, IP, TCP, HTTP).
          </li>
          <li>
            Sie kennen den Unterschied zwischen TCP und UDP und wissen, wann
            welches Protokoll verwendet wird.
          </li>
          <li>
            Sie können den Ablauf einer DNS-Auflösung vom Browser bis zum
            autoritativen Nameserver erklären.
          </li>
          <li>
            Sie verstehen, wie HTTP funktioniert: Methoden, Statuscodes,
            Request- und Response-Aufbau.
          </li>
          <li>
            Sie verstehen, was HTTP und HTTPS sind und was HTTPS tatsächlich
            schützt — und was nicht.
          </li>
        </ul>
      </LearningGoals>

      <section>
        <h2>Was ist das Internet?</h2>
        <p>
          Das Internet ist kein einzelnes Gerät und kein einzelnes Unternehmen —
          es ist ein <strong>Netzwerk von Netzwerken</strong>. Tausende von
          Internet Service Providers (ISPs), Universitäten, Unternehmen und
          Regierungen betreiben eigene Netzwerke, die alle miteinander verbunden
          sind. Das Herzstück dieser Verbindungen sind <strong>Router</strong>:
          Geräte, die Datenpakete entgegennehmen und gezielt weiterleiten.
        </p>

        <Figure
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230420093202/Internet-image-(2).webp"
          alt="Darstellung des Internets"
          caption="Das Internet als Netzwerk von Netzwerken"
          origin="https://www.geeksforgeeks.org/computer-science-fundamentals/what-is-internet-definition-uses-working-advantages-and-disadvantages/"
        />
      </section>

      <Section>
        <h2>Wie werden Daten übertragen? — Pakete</h2>
        <p>
          Wenn Sie eine Webseite aufrufen, wird die Anfrage nicht als ganzes
          Stück verschickt, sondern in viele kleine <strong>Pakete</strong>{" "}
          aufgeteilt. Jedes Paket:
        </p>
        <ul>
          <li>enthält einen Teil der Daten (Nutzdaten / Payload)</li>
          <li>
            hat einen <strong>Header</strong> mit Metainformationen:
            Absender-IP, Empfänger-IP, Paketnummer, Prüfsumme
          </li>
          <li>
            kann einen anderen Weg durch das Netz nehmen als andere Pakete der
            gleichen Übertragung
          </li>
          <li>
            wird am Ziel wieder in der richtigen Reihenfolge zusammengesetzt
          </li>
        </ul>
        <p>
          Diese Aufteilung hat grosse Vorteile: Wenn ein Paket verloren geht,
          muss nur dieses eine Paket wiederholt werden. Ausserdem kann das Netz
          die Last auf verschiedene Wege verteilen (
          <strong>Load Balancing</strong>).
        </p>

        <p>
          Die folgende Animation zeigt, wie ein Text in Bits zerlegt, in Pakete
          aufgeteilt und über das Netz verschickt wird:
        </p>
        <PacketAnimation />
      </Section>

      <section>
        <h2>Das TCP/IP-Modell (Internet-Schichtenmodell)</h2>
        <p>
          Um die Komplexität des Internets zu bewältigen, wurde der
          Protokoll-Stack in <strong>Schichten</strong> aufgeteilt. Jede Schicht
          hat eine klar definierte Aufgabe und kommuniziert nur mit der Schicht
          direkt darunter und darüber.
        </p>
        <TcpIpLayers />
        <p>
          Das Schichtenmodell ermöglicht <strong>Modularität</strong>: Wenn
          Ethernet durch eine neue Technologie ersetzt wird, müssen TCP, IP und
          HTTP nicht verändert werden. Die Schichten arbeiten unabhängig
          voneinander.
        </p>

        <h3>Aufbau eines realen IP-Pakets</h3>
        <p>
          In der Praxis werden die Schichten ineinandergeschachtelt — wie
          Briefumschläge im Briefumschlag. Klicke auf &ldquo;Schichten
          aufklappen&rdquo; und dann auf einzelne Felder, um zu sehen, was in
          jedem Header steckt:
        </p>
        <PacketDiagram />
      </section>

      <Section>
        <h2>TCP vs. UDP — Zuverlässig oder schnell?</h2>
        <p>
          Die Transportschicht kennt zwei grundlegende Protokolle, die ganz
          unterschiedliche Ziele verfolgen:
        </p>

        <h3>TCP — Transmission Control Protocol</h3>
        <p>
          TCP garantiert, dass alle Pakete ankommen und in der richtigen
          Reihenfolge zusammengesetzt werden:
        </p>
        <ol>
          <li>
            <strong>Verbindungsaufbau</strong> (3-Way-Handshake): Client schickt{" "}
            <code>SYN</code> → Server antwortet <code>SYN-ACK</code> → Client
            bestätigt <code>ACK</code>
          </li>
          <li>
            <strong>Zuverlässige Übertragung</strong>: Jedes Paket wird
            quittiert (<code>ACK</code>). Fehlende Pakete werden automatisch
            wiederholt.
          </li>
          <li>
            <strong>Flusskontrolle</strong>: Die Übertragungsrate wird an den
            langsameren Partner angepasst.
          </li>
          <li>
            <strong>Verbindungsabbau</strong>: Sauberer Abschluss mit{" "}
            <code>FIN</code>-Paketen.
          </li>
        </ol>
        <p>
          <strong>Verwendet für:</strong> HTTP/HTTPS, E-Mail (SMTP, IMAP), SSH,
          Dateitransfer (FTP)
        </p>
        <p>
          Die folgende Animation zeigt den 3-Way-Handshake Schritt für Schritt:
        </p>
        <TcpHandshakeAnim />

        <h3>UDP — User Datagram Protocol</h3>
        <p>
          UDP ist ein verbindungsloses Protokoll ohne Garantien — &ldquo;fire
          and forget&rdquo;: kein Verbindungsaufbau, keine Quittierungen, sehr
          geringe Latenz.
        </p>
        <p>
          <strong>Verwendet für:</strong> DNS-Anfragen, Video-Streaming,
          Online-Gaming, VoIP
        </p>
        <p>
          Bei einem Video-Stream ist ein verlorenes Paket unwichtig — besser ein
          kurzer Aussetzer als eine Verzögerung durch Wiederholung.
        </p>

        <DataTable
          headers={["Eigenschaft", "TCP", "UDP"]}
          rows={[
            ["Verbindung", "Ja (Handshake)", "Nein"],
            ["Zuverlässigkeit", "Garantiert", "Keine Garantie"],
            ["Reihenfolge", "Garantiert", "Keine Garantie"],
            ["Latenz", "Höher", "Sehr niedrig"],
            ["Overhead", "Höher", "Minimal"],
            [
              "Typische Anwendung",
              "HTTP, E-Mail, SSH",
              "DNS, Streaming, Gaming",
            ],
          ]}
        />
      </Section>

      <section>
        <h2>IP-Adressen — Die Postadresse des Internets</h2>
        <p>
          Jedes Gerät im Internet benötigt eine eindeutige Adresse: die{" "}
          <strong>IP-Adresse</strong>.
        </p>

        <h3>IPv4</h3>
        <p>
          Eine IPv4-Adresse besteht aus 4 Bytes (32 Bit), z.B.{" "}
          <code>192.168.1.42</code>. Maximale Anzahl: 2³² ={" "}
          <strong>4.294.967.296</strong> — zu wenig für alle Geräte weltweit!
        </p>
        <DataTable
          caption="Private IP-Adressbereiche (nicht öffentlich routbar)"
          headers={["Adressbereich", "Typische Verwendung"]}
          rows={[
            [<code key="a">10.0.0.0/8</code>, "Grosses Firmennetzwerk"],
            [<code key="b">172.16.0.0/12</code>, "Mittleres Netzwerk"],
            [
              <code key="c">192.168.0.0/16</code>,
              "Heimnetzwerk (z.B. 192.168.1.1)",
            ],
            [<code key="d">127.0.0.1</code>, "Loopback (localhost)"],
          ]}
        />

        <h3>IPv6</h3>
        <p>
          IPv6 löst das Adressenknappheitsproblem mit 128-Bit-Adressen (z.B.{" "}
          <code>2001:0db8:85a3::8a2e:0370:7334</code>). Maximale Anzahl: 2¹²⁸ ≈{" "}
          <strong>340 Sextillionen</strong> Adressen.
        </p>

        <h3>NAT — Network Address Translation</h3>
        <p>
          Da nicht jedes Gerät eine öffentliche IPv4-Adresse bekommt, verwendet
          Ihr Router <strong>NAT</strong>: Er übersetzt die privaten IP-Adressen
          in Ihrem Heimnetz in seine eine öffentliche IP-Adresse. Mehr dazu im
          Kapitel <a href="/gym/netzwerke">Netzwerkkomponenten</a>.
        </p>
      </section>

      <Section>
        <h2>DNS — Das Telefonbuch des Internets</h2>

        <h3>Was ist DNS und warum brauchen wir es?</h3>
        <p>
          Computer im Internet kommunizieren ausschliesslich über{" "}
          <strong>IP-Adressen</strong> wie <code>140.82.121.4</code>. Menschen
          merken sich aber keine Zahlenreihen — sie tippen{" "}
          <code>github.com</code> ein. Das{" "}
          <strong>Domain Name System (DNS)</strong> ist der weltweite Dienst,
          der Domainnamen automatisch in IP-Adressen übersetzt.
        </p>
        <p>
          Ohne DNS müsste man für jeden Webseitenaufruf die genaue IP-Adresse
          kennen — so wie ein Telefon ohne Kontaktliste, bei dem man jede Nummer
          auswendig lernen müsste. DNS ist also das globale
          &ldquo;Telefonbuch&rdquo; des Internets: Man gibt den Namen ein, DNS
          liefert die Nummer.
        </p>
        <p>
          DNS ist dabei <strong>hierarchisch</strong> aufgebaut — ähnlich wie
          eine Postadresse, die von grob (Land) nach fein (Hausnummer) wird:
        </p>
        <ul>
          <li>
            <strong>Root-Ebene (.)</strong> — die oberste Instanz; 13
            Root-Nameserver-Gruppen (A–M) weltweit kennen alle Top-Level-Domains
          </li>
          <li>
            <strong>Top-Level-Domain (TLD)</strong> — <code>.com</code>,{" "}
            <code>.ch</code>, <code>.org</code> usw.; TLD-Nameserver wissen,
            welche Nameserver für jede Domain zuständig sind
          </li>
          <li>
            <strong>Second-Level-Domain</strong> — z. B. <code>github</code> in{" "}
            <code>github.com</code>; hier liegt der autoritative Nameserver der
            Organisation
          </li>
          <li>
            <strong>Subdomain</strong> — z. B. <code>www</code> oder{" "}
            <code>mail</code>; wird vom autoritativen Nameserver der
            Organisation selbst verwaltet
          </li>
        </ul>

        <h3>DNS-Record-Typen</h3>
        <p>
          Ein DNS-Server speichert nicht nur IP-Adressen. Er verwaltet
          verschiedene <strong>Record-Typen</strong>, die unterschiedliche
          Aufgaben erfüllen:
        </p>
        <DataTable
          headers={["Typ", "Bedeutung", "Beispiel"]}
          rows={[
            [
              <code key="a">A</code>,
              "IPv4-Adresse einer Domain",
              <span key="av">
                <code>github.com</code> → <code>140.82.121.4</code>
              </span>,
            ],
            [
              <code key="aaaa">AAAA</code>,
              "IPv6-Adresse einer Domain",
              <span key="aaaav">
                <code>github.com</code> → <code>2606:50c0::1</code>
              </span>,
            ],
            [
              <code key="cname">CNAME</code>,
              "Alias — verweist auf einen anderen Domainnamen",
              <span key="cnamev">
                <code>www.github.com</code> → <code>github.com</code>
              </span>,
            ],
            [
              <code key="mx">MX</code>,
              "Mail Exchange — zuständiger Mailserver",
              <span key="mxv">
                E-Mails an <code>@github.com</code> → Mailserver
              </span>,
            ],
            [
              <code key="txt">TXT</code>,
              "Beliebiger Text — oft für Verifikation oder Anti-Spam (SPF)",
              "Domain-Inhaber-Nachweis, SPF-Regeln",
            ],
            [
              <code key="ns">NS</code>,
              "Nameserver — welche Server für diese Domain zuständig sind",
              <span key="nsv">
                <code>github.com</code> NS → <code>ns1.p16.dynect.net</code>
              </span>,
            ],
          ]}
        />

        <h3>Wie läuft eine DNS-Auflösung ab?</h3>
        <p>
          Wenn Sie <code>https://www.github.com</code> eingeben, läuft folgende
          Auflösung ab. Klicken Sie auf die einzelnen Schritte, um zu sehen, was
          dabei passiert:
        </p>
        <DnsResolver />
        <p>
          <strong>Sicherheitsaspekt:</strong> DNS-Anfragen sind standardmässig{" "}
          <strong>unverschlüsselt</strong> (UDP Port 53) — der ISP und jeder
          Router auf dem Weg können mitlesen, welche Domains Sie aufrufen, auch
          wenn die eigentliche Verbindung per HTTPS verschlüsselt ist. Lösungen:{" "}
          <strong>DNS over HTTPS (DoH)</strong> oder{" "}
          <strong>DNS over TLS (DoT)</strong> verschlüsseln auch die
          DNS-Anfrage.
        </p>
      </Section>

      <section>
        <h2>HTTP — Die Sprache des Webs</h2>
        <p>
          <strong>HTTP</strong> (HyperText Transfer Protocol) ist das Protokoll,
          mit dem Browser und Webserver miteinander kommunizieren. Jede
          Interaktion folgt dem gleichen Muster: Der Browser schickt eine{" "}
          <strong>Anfrage (Request)</strong>, der Server antwortet mit einer{" "}
          <strong>Antwort (Response)</strong>.
        </p>
        <p>
          HTTP läuft über <strong>TCP</strong> auf Port <code>80</code> (HTTP)
          bzw. Port <code>443</code> (HTTPS).
        </p>

        <h3>HTTP-Methoden</h3>
        <p>
          Die Methode gibt an, <em>was</em> der Client vom Server möchte:
        </p>
        <DataTable
          headers={["Methode", "Bedeutung", "Beispiel"]}
          rows={[
            ["GET", "Ressource abrufen", "Webseite laden, Bild anzeigen"],
            [
              "POST",
              "Daten senden / erstellen",
              "Login-Formular, Tweet abschicken",
            ],
            ["PUT", "Ressource ersetzen", "Profilbild hochladen"],
            ["DELETE", "Ressource löschen", "Konto löschen"],
            [
              "PATCH",
              "Ressource teilweise ändern",
              "Nur E-Mail-Adresse aktualisieren",
            ],
          ]}
        />

        <h3>HTTP-Statuscodes</h3>
        <p>
          Jede Antwort beginnt mit einem dreistelligen{" "}
          <strong>Statuscode</strong>:
        </p>
        <DataTable
          headers={["Bereich", "Bedeutung", "Häufige Codes"]}
          rows={[
            ["2xx", "Erfolg", "200 OK · 201 Created"],
            ["3xx", "Weiterleitung", "301 Moved Permanently · 302 Found"],
            [
              "4xx",
              "Client-Fehler",
              "400 Bad Request · 401 Unauthorized · 404 Not Found",
            ],
            [
              "5xx",
              "Server-Fehler",
              "500 Internal Server Error · 503 Service Unavailable",
            ],
          ]}
        />

        <h3>Request &amp; Response animiert</h3>
        <p>
          Die folgende Visualisierung zeigt, wie Request und Response zwischen
          Browser und Server ausgetauscht werden — inklusive der wichtigsten
          Header-Felder:
        </p>
        <HttpDiagram />
      </section>

      <Section>
        <h2>Das Problem: Alles ist öffentlich sichtbar</h2>
        <p>
          Standardmässig sind alle IP-Pakete <strong>unverschlüsselt</strong>.
          Das bedeutet: Jeder Knoten auf dem Weg (Router, ISP, öffentliches
          WLAN) kann die Paketinhalte lesen — wie Postkarten statt verschlossene
          Briefe.
        </p>
        <ul>
          <li>
            <strong>ISP</strong> sieht alle Domains, die Sie aufrufen
          </li>
          <li>
            Im <strong>öffentlichen WLAN</strong> kann jeder im gleichen Netz
            mitlauschen
          </li>
          <li>
            <strong>Passwörter, Kreditkartendaten</strong> können bei
            unverschlüsselten Verbindungen gestohlen werden
          </li>
          <li>
            <strong>Man-in-the-Middle-Angriffe</strong>: Jemand schaltet sich in
            die Verbindung ein und liest/manipuliert den Datenverkehr
          </li>
        </ul>
      </Section>

      <section>
        <h2>HTTP vs. HTTPS</h2>
        <p>
          <strong>HTTP</strong> überträgt alle Daten im Klartext.{" "}
          <strong>HTTPS</strong> (HTTP Secure) verschlüsselt die Verbindung mit{" "}
          <strong>TLS</strong> (Transport Layer Security). Die folgende
          Visualisierung zeigt schematisch, welche Teile eines Pakets bei HTTP
          offen sichtbar sind — und was HTTPS tatsächlich schützt:
        </p>
        <HttpPacket />
        <DataTable
          headers={["Aspekt", "HTTP", "HTTPS"]}
          rows={[
            ["Inhalt verschlüsselt", "Nein", "Ja (TLS)"],
            ["Integrität", "Keine Garantie", "Manipulationsschutz"],
            ["Server-Authentizität", "Nein", "Ja (Zertifikat)"],
            ["ISP sieht Domain", "Ja", "Ja (via SNI — nicht via Host-Header)"],
            ["ISP sieht Pfad & Inhalt", "Ja", "Nein — verschlüsselt"],
            ["Metadaten (IP, Zeit)", "Sichtbar", "Sichtbar"],
          ]}
        />
        <p>
          <strong>Wichtig:</strong> HTTPS schützt den <em>Inhalt</em>, nicht die
          Metadaten. Der ISP sieht weiterhin, welche Domains besucht werden —
          allerdings über <strong>SNI</strong> (Server Name Indication) im
          TLS-Handshake, nicht über den HTTP-<code>Host</code>-Header (der ist
          verschlüsselt). Wer auch das verstecken will, braucht ein VPN oder
          Tor.
        </p>
      </section>

      <Section>
        <h2>Router und das Routing-Protokoll</h2>
        <p>
          Router entscheiden, wohin jedes Paket als nächstes gesendet wird. Sie
          bauen <strong>Routing-Tabellen</strong> auf, die den besten Weg zu
          jedem Netzwerk beschreiben.
        </p>
        <p>
          Im Internet kommunizieren Router untereinander über{" "}
          <strong>BGP</strong> (Border Gateway Protocol): Das
          &ldquo;Klebeprotokoll des Internets&rdquo;, das die Routen zwischen
          den grossen Netzwerken (Autonomous Systems, AS) aushandelt.
        </p>
        <p>
          <strong>Traceroute</strong> zeigt Ihnen, über welche Router ein Paket
          läuft: <code>traceroute github.com</code>
        </p>
      </Section>

      <section>
        <h2>Zusammenfassung</h2>
        <p>
          Das Internet ist ein Netzwerk von Netzwerken, das auf dem{" "}
          <strong>TCP/IP-Schichtenmodell</strong> basiert. Daten werden in{" "}
          <strong>Pakete</strong> aufgeteilt und über <strong>Router</strong>{" "}
          weitergeleitet. <strong>IP-Adressen</strong> identifizieren Geräte,{" "}
          <strong>DNS</strong> übersetzt Domainnamen in IP-Adressen.{" "}
          <strong>TCP</strong> garantiert zuverlässige Übertragung mit
          3-Way-Handshake, <strong>UDP</strong> maximiert die Geschwindigkeit.{" "}
          <strong>HTTP</strong> ist die Sprache des Webs — Methoden wie{" "}
          <code>GET</code> und <code>POST</code> sowie Statuscodes wie{" "}
          <code>200</code> und <code>404</code> steuern den Datenaustausch.{" "}
          <strong>HTTPS</strong> verschlüsselt den Inhalt über TLS, schützt aber
          nicht vollständig vor Metadaten-Analyse.
        </p>
      </section>
    </>
  )
}
