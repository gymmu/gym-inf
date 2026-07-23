import DataTable from "@components/DataTable/DataTable";
import Figure from "@components/Figure.jsx";
import FirewallZones from "@components/gym/FirewallZones/FirewallZones";
import NatDiagram from "@components/gym/NatDiagram/NatDiagram";
import NetworkDiagram from "@components/gym/NetworkDiagram/NetworkDiagram";
import LearningGoals from "@components/LearningGoals.jsx";
import Section from "@components/Section.jsx";

export default function GymNetzwerke() {
  return (
    <>
      <h1>Netzwerkkomponenten und -sicherheit</h1>
      <p>
        Hinter dem scheinbar einfachen Vorgang &ldquo;Webseite aufrufen&rdquo;
        steckt eine komplexe Infrastruktur aus Netzwerkgeräten, Protokollen und
        Sicherheitsmechanismen. In diesem Kapitel betrachten wir die wichtigsten
        Netzwerkkomponenten, wie IP-Adressen strukturiert sind (Subnetting), wie
        NAT funktioniert und wie Firewalls den Datenfluss kontrollieren.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie kennen die Funktionen von Router, Switch, Hub und Access Point
            und können sie unterscheiden.
          </li>
          <li>
            Sie verstehen IP-Adressierung und können einfache
            Subnetting-Berechnungen durchführen.
          </li>
          <li>
            Sie verstehen NAT detailliert: Wie der Router Verbindungen verfolgt
            und weiterleitet.
          </li>
          <li>
            Sie wissen, wie Firewalls Datenverkehr filtern (stateless vs.
            stateful).
          </li>
          <li>Sie verstehen Port-Forwarding und können es konfigurieren.</li>
        </ul>
      </LearningGoals>

      <section>
        <h2>Das Heimnetzwerk</h2>
        <p>
          Ein typisches Heimnetzwerk besteht aus mehreren Geräten, die über
          einen <strong>Router</strong> miteinander und mit dem Internet
          verbunden sind. Klicke auf ein Gerät, um mehr über seine Rolle im
          Netzwerk zu erfahren:
        </p>
        <NetworkDiagram />
      </section>

      <section>
        <h2>Netzwerkkomponenten</h2>

        <h3>Hub (veraltet)</h3>
        <p>
          Ein <strong>Hub</strong> ist das primitivste Netzwerkgerät: Er sendet
          jedes eingehende Paket an <strong>alle</strong> angeschlossenen
          Geräte. Das Zielgerät nimmt das Paket entgegen, alle anderen verwerfen
          es. <strong>Problem:</strong> Alle Geräte teilen sich die Bandbreite
          und können alle Pakete mitlesen — ein massives Sicherheitsrisiko. Hubs
          sind heute vollständig durch Switches ersetzt.
        </p>

        <h3>Switch</h3>
        <p>
          Ein <strong>Switch</strong> lernt, welches Gerät an welchem Port
          angeschlossen ist (MAC-Adresse-zu-Port-Tabelle). Er leitet Pakete nur
          an den <strong>richtigen Port</strong> weiter — nicht an alle.
        </p>
        <p>
          <strong>MAC-Adresse:</strong> Eine 48-Bit-Hardware-Adresse, die jedem
          Netzwerkinterface werksseitig zugewiesen ist (z.B.{" "}
          <code>00:1A:2B:3C:4D:5E</code>). Switches arbeiten auf Schicht 2 mit
          MAC-Adressen.
        </p>
        <DataTable
          caption="Hub vs. Switch im Vergleich"
          headers={["Eigenschaft", "Hub", "Switch"]}
          rows={[
            ["Pakete senden", "An alle Ports", "Nur an Ziel-Port"],
            ["Bandbreite", "Geteilt", "Voll für jede Verbindung"],
            ["Sicherheit", "Alle können mitlesen", "Isolierter Datenverkehr"],
            ["Schicht", "Schicht 1", "Schicht 2 (MAC)"],
          ]}
        />

        <h3>Router</h3>
        <p>
          Ein <strong>Router</strong> verbindet verschiedene Netzwerke
          miteinander und arbeitet auf Schicht 3 mit{" "}
          <strong>IP-Adressen</strong>. Er entscheidet anhand seiner{" "}
          <strong>Routing-Tabelle</strong>, wohin ein Paket als nächstes
          gesendet werden soll.
        </p>

        <h3>Wireless Access Point (WAP)</h3>
        <p>
          Ein <strong>Access Point</strong> erweitert ein kabelgebundenes
          Netzwerk ins WLAN. Der Heimrouter kombiniert Router + Switch + Access
          Point in einem Gerät.
        </p>
        <DataTable
          caption="WLAN-Sicherheitsprotokolle"
          headers={["Standard", "Sicherheit", "Empfehlung"]}
          rows={[
            [
              "WEP",
              "Komplett unsicher, in Minuten knackbar",
              "Nicht verwenden",
            ],
            ["WPA2 (AES)", "Sicher bei starkem Passwort", "Akzeptabel"],
            ["WPA3", "Neuester Standard, SAE-Authentifizierung", "Empfohlen"],
          ]}
        />

        <Figure
          src="https://www.cloudflare.com/img/learning/network-layer/what-is-a-router/router-network-diagram.svg"
          alt="Router im Netzwerk"
          caption="Router verbinden verschiedene Netzwerke und entscheiden, wohin Pakete gehen"
          origin="https://www.cloudflare.com/learning/network-layer/what-is-a-router/"
        />
      </section>

      <Section>
        <h2>IP-Adressierung und Subnetting</h2>
        <p>
          IP-Adressen werden in <strong>Netz-</strong> und{" "}
          <strong>Host-Teil</strong> aufgeteilt. Die Subnetzmaske
          (CIDR-Notation) gibt an, wie viele Bits zum Netzwerk gehören.
        </p>
        <p>
          Beispiel <code>192.168.1.0/24</code>: Die ersten 24 Bits sind der
          Netzwerkanteil → 2⁸ - 2 = <strong>254 Hosts</strong> verfügbar (minus
          Netzwerkadresse und Broadcast).
        </p>

        <DataTable
          headers={["CIDR", "Subnetzmaske", "Hosts", "Verwendung"]}
          rows={[
            ["/8", "255.0.0.0", "16'777'214", "Klasse A (Grossunternehmen)"],
            ["/16", "255.255.0.0", "65'534", "Klasse B (mittlere Unternehmen)"],
            ["/24", "255.255.255.0", "254", "Heimnetzwerk"],
            ["/28", "255.255.255.240", "14", "Kleine Segmente"],
            ["/30", "255.255.255.252", "2", "Point-to-Point-Links"],
          ]}
        />

        <h3>Subnetting-Beispiel</h3>
        <p>
          Gegeben: Netzwerk <code>172.16.0.0/24</code>, aufzuteilen in 4 gleich
          grosse Subnetze. 4 Subnetze → 2² = 4 → 2 zusätzliche Bits. Neues
          Prefix: <code>/26</code>
        </p>
        <DataTable
          headers={["Subnetz", "Netzwerkadresse", "Hosts", "Broadcast"]}
          rows={[
            ["1", "172.16.0.0/26", ".1 – .62", "172.16.0.63"],
            ["2", "172.16.0.64/26", ".65 – .126", "172.16.0.127"],
            ["3", "172.16.0.128/26", ".129 – .190", "172.16.0.191"],
            ["4", "172.16.0.192/26", ".193 – .254", "172.16.0.255"],
          ]}
        />

        <DataTable
          caption="Private IP-Adressbereiche (RFC 1918)"
          headers={["Bereich", "CIDR", "Typische Verwendung"]}
          rows={[
            ["10.0.0.0 – 10.255.255.255", "/8", "Grosse Unternehmensnetze"],
            ["172.16.0.0 – 172.31.255.255", "/12", "Mittlere Netzwerke"],
            ["192.168.0.0 – 192.168.255.255", "/16", "Heimnetzwerke"],
          ]}
        />
      </Section>

      <section>
        <h2>NAT — Network Address Translation im Detail</h2>
        <p>
          IPv4 hat nur ca. 4 Milliarden Adressen. <strong>NAT</strong> löst das
          Problem, indem viele Geräte mit privaten IPs eine einzige öffentliche
          IP-Adresse teilen. Der Router merkt sich dabei in einer{" "}
          <strong>NAT-Tabelle</strong>, welches interne Gerät welche externe
          Port-Nummer verwendet, um Antworten korrekt zuzuordnen.
        </p>
        <NatDiagram />
        <p>
          <strong>Ablauf:</strong> Wenn Ihr Computer eine Verbindung öffnet,
          übersetzt der Router die private Quell-IP auf seine öffentliche IP und
          speichert die Übersetzung in der NAT-Tabelle. Eingehende Antworten
          werden anhand des Ports dem richtigen Gerät zugeordnet.
        </p>
        <p>
          NAT bietet als Nebeneffekt einen gewissen Schutz: Verbindungen von
          aussen können nicht direkt ein Gerät im Heimnetz ansprechen. Das ist
          aber <strong>kein Ersatz für eine echte Firewall</strong>.
        </p>
      </section>

      <Section>
        <h2>Firewalls</h2>
        <p>
          Eine <strong>Firewall</strong> kontrolliert den Datenverkehr zwischen
          Netzwerken anhand von definierten <strong>Regeln</strong>. Sie
          entscheidet: Dieses Paket darf passieren, jenes wird verworfen.
        </p>

        <DataTable
          headers={["Typ", "Funktionsweise", "Vorteil", "Nachteil"]}
          rows={[
            [
              "Stateless (Paketfilter)",
              "Jedes Paket einzeln nach IP/Port bewertet",
              "Einfach, schnell",
              "Kennt keinen Verbindungszustand",
            ],
            [
              "Stateful",
              "Verfolgt Verbindungszustände in Connection-Tracking-Tabelle",
              "Antwortpakete automatisch erlaubt",
              "Höherer Ressourcenbedarf",
            ],
            [
              "NGFW (Next-Gen)",
              "Tiefenpaketanalyse (DPI), Anwendungserkennung, IDS/IPS",
              "Sehr granulare Kontrolle",
              "Komplex, teuer",
            ],
          ]}
        />

        <h3>Zonenarchitektur</h3>
        <p>
          Typische Netzwerke sind in Vertrauenszonen aufgeteilt. Die DMZ
          (Demilitarized Zone) trennt öffentlich zugängliche Server vom internen
          Netzwerk:
        </p>
        <FirewallZones />
      </Section>

      <section>
        <h2>Port-Forwarding</h2>
        <p>
          NAT verhindert eingehende Verbindungen von aussen. Mit{" "}
          <strong>Port-Forwarding</strong> konfigurieren Sie Ihren Router so,
          dass er Verbindungen an einem bestimmten Port direkt an ein internes
          Gerät weiterleitet.
        </p>
        <DataTable
          caption="Beispiel-Konfiguration Port-Forwarding"
          headers={["Externer Port", "Internes Ziel", "Dienst"]}
          rows={[
            ["8080", "192.168.1.100:80", "Webserver"],
            ["2222", "192.168.1.100:22", "SSH-Zugang"],
            ["25565", "192.168.1.50:25565", "Minecraft-Server"],
          ]}
        />
        <p>
          <strong>Sicherheitshinweise:</strong> Nur wirklich benötigte Ports
          öffnen. Standard-SSH-Port 22 ist ständigen Brute-Force-Attacken
          ausgesetzt → anderen Port wählen oder SSH-Key-Authentifizierung
          erzwingen.
        </p>
      </section>

      <Section>
        <h2>DNS im lokalen Netzwerk &amp; VLAN</h2>

        <h3>Lokaler DNS-Server</h3>
        <p>
          In lokalen Netzwerken gibt es oft einen eigenen DNS-Server (z.B.
          Pi-hole, dnsmasq), der lokale Hostnamen auflöst, Anfragen weiterleitet
          und optional Werbung blockiert (<strong>DNS-Sinkhole</strong>).
        </p>
        <p>
          Ein DNS-Sinkhole blockiert bekannte Werbe- und Tracking-Domains, indem
          es auf Anfragen mit einer ungültigen IP-Adresse antwortet (
          <code>0.0.0.0</code> oder <code>NXDOMAIN</code>).
        </p>

        <h3>VLAN — Virtuelle Netzwerksegmentierung</h3>
        <p>
          Ein <strong>VLAN</strong> (Virtual LAN) teilt ein physisches Netzwerk
          logisch in mehrere getrennte Netzwerke auf, ohne separate Hardware zu
          benötigen.
        </p>
        <DataTable
          caption="Typische VLAN-Anwendungsfälle"
          headers={["VLAN", "Inhalt", "Sicherheitsziel"]}
          rows={[
            [
              "Gäste-WLAN",
              "Besuchernetzwerk",
              "Internetzugang ohne Zugang zum internen Netz",
            ],
            [
              "IoT",
              "Smart-Home-Geräte",
              "Kompromittierte Geräte können nicht ins Heimnetz",
            ],
            [
              "Management",
              "Netzwerkgeräte, Server",
              "Zugangskontrolle für Administratoren",
            ],
          ]}
        />
      </Section>

      <section>
        <h2>Zusammenfassung</h2>
        <p>
          <strong>Hubs</strong> senden an alle, <strong>Switches</strong>{" "}
          gezielt, <strong>Router</strong> verbinden Netze.{" "}
          <strong>Subnetting</strong> teilt IP-Adressbereiche strukturiert auf:
          CIDR-Notation gibt den Netzwerkanteil an. <strong>NAT</strong>{" "}
          ermöglicht vielen privaten Geräten die gemeinsame Nutzung einer
          öffentlichen IP durch Port-Translation.{" "}
          <strong>Stateful Firewalls</strong> verfolgen Verbindungszustände.{" "}
          <strong>Port-Forwarding</strong> öffnet spezifische Ports für
          eingehende Verbindungen. <strong>VLANs</strong> ermöglichen logische
          Netzwerksegmentierung ohne zusätzliche Hardware.
        </p>
      </section>
    </>
  );
}
