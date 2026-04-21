import DataTable from "@components/DataTable/DataTable"
import Figure from "@components/Figure.jsx"
import DnsResolver from "@components/gym/DnsResolver/DnsResolver"
import TcpIpLayers from "@components/gym/TcpIpLayers/TcpIpLayers"
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
            Sie kennen den Unterschied zwischen TCP und UDP und wissen, wann
            welches Protokoll verwendet wird.
          </li>
          <li>
            Sie können den Ablauf einer DNS-Auflösung vom Browser bis zum
            autoritativen Nameserver erklären.
          </li>
          <li>
            Sie verstehen, was HTTP und HTTPS sind und was HTTPS tatsächlich
            schützt.
          </li>
          <li>
            Sie wissen, warum alle Verbindungen ohne Verschlüsselung öffentlich
            einsehbar sind.
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
        <Figure
          src="https://cdn.kastatic.org/ka-perseus-images/337190cba133e19ee9d8b5878453f915971a59cd.svg"
          alt="Visualisierung von IP-Paketen"
          caption="Daten werden in Pakete aufgeteilt und können verschiedene Wege nehmen"
          origin="https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:routing-with-redundancy/a/ip-packets"
        />
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
            [<code>10.0.0.0/8</code>, "Grosses Firmennetzwerk"],
            [<code>172.16.0.0/12</code>, "Mittleres Netzwerk"],
            [<code>192.168.0.0/16</code>, "Heimnetzwerk (z.B. 192.168.1.1)"],
            [<code>127.0.0.1</code>, "Loopback (localhost)"],
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
          in Ihrem Heimnetz in seine eine öffentliche IP-Adresse.
        </p>
        <Figure
          src="https://www.cloudflare.com/img/learning/network-layer/what-is-nat/nat-example.svg"
          alt="NAT Beispiel"
          caption="NAT: Mehrere Geräte im Heimnetz teilen sich eine öffentliche IP-Adresse"
          origin="https://www.cloudflare.com/learning/network-layer/what-is-nat/"
        />
      </section>

      <Section>
        <h2>DNS — Das Telefonbuch des Internets</h2>
        <p>
          Menschen merken sich Domainnamen wie <code>github.com</code> —
          Computer sprechen aber ausschliesslich über IP-Adressen. Das{" "}
          <strong>Domain Name System (DNS)</strong> übersetzt Domainnamen in
          IP-Adressen.
        </p>
        <p>
          Wenn Sie <code>https://www.github.com</code> eingeben, läuft folgende
          Auflösung ab:
        </p>
        <DnsResolver />
        <p>
          <strong>Sicherheitsaspekt:</strong> DNS-Anfragen sind standardmässig{" "}
          <strong>unverschlüsselt</strong> (UDP Port 53)! Lösungen:{" "}
          <strong>DNS over HTTPS (DoH)</strong> oder{" "}
          <strong>DNS over TLS (DoT)</strong>.
        </p>
      </Section>

      <section>
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
      </section>

      <Section>
        <h2>HTTP vs. HTTPS</h2>
        <p>
          <strong>HTTP</strong> (HyperText Transfer Protocol) überträgt alle
          Daten im Klartext. <strong>HTTPS</strong> (HTTP Secure) verschlüsselt
          die Verbindung mit <strong>TLS</strong> (Transport Layer Security).
        </p>
        <DataTable
          headers={["Aspekt", "HTTP", "HTTPS"]}
          rows={[
            ["Inhalt verschlüsselt", "Nein", "Ja (TLS)"],
            ["Integrität", "Keine Garantie", "Manipulationsschutz"],
            ["Server-Authentizität", "Nein", "Ja (Zertifikat)"],
            ["ISP sieht Domain", "Ja", "Ja (nur Domain, nicht Pfad/Inhalt)"],
            ["Metadaten (IP, Zeit)", "Sichtbar", "Sichtbar"],
          ]}
        />
        <Figure
          src="https://www.cloudflare.com/img/learning/security/glossary/what-is-ssl/http-vs-https.svg"
          alt="HTTP vs HTTPS"
          caption="Vergleich: Unverschlüsselte HTTP- vs. verschlüsselte HTTPS-Verbindung"
          origin="https://www.cloudflare.com/de-de/learning/ssl/why-is-http-not-secure/"
        />
      </Section>

      <section>
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
      </section>

      <Section>
        <h2>Zusammenfassung</h2>
        <p>
          Das Internet ist ein Netzwerk von Netzwerken, das auf dem{" "}
          <strong>TCP/IP-Schichtenmodell</strong> basiert. Daten werden in{" "}
          <strong>Pakete</strong> aufgeteilt und über <strong>Router</strong>{" "}
          weitergeleitet. <strong>IP-Adressen</strong> identifizieren Geräte,{" "}
          <strong>DNS</strong> übersetzt Domainnamen. <strong>TCP</strong>{" "}
          garantiert zuverlässige Übertragung, <strong>UDP</strong> maximiert
          die Geschwindigkeit. Standardmässig sind alle Verbindungen öffentlich
          lesbar — <strong>HTTPS</strong> verschlüsselt den Inhalt, schützt aber
          nicht vollständig vor Metadaten-Analyse.
        </p>
      </Section>
    </>
  )
}
