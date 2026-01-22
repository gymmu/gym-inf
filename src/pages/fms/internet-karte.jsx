import ImageMagnifier from "@components/ImageMagnifier.jsx";
import Section from "@components/Section.jsx";

export default function FmsInternetKarte() {
  return (
    <>
      <h2>Karte des Internets</h2>
      <section>
        <p>
          Diese Karte zeigt die wichtigsten Komponenten des Internets und wie
          sie miteinander verbunden sind. Jedes Element spielt eine wichtige
          Rolle in der globalen Vernetzung.
        </p>
        <p>
          <em>
            Bewegen Sie die Maus über die Karte, um Details zu vergrößern.
          </em>
        </p>
      </section>

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
        <h2>Komponenten der Internet-Karte</h2>

        <h3>Client (Endgerät)</h3>
        <p>
          Der <strong>Client</strong> ist das Gerät, das Sie verwenden -
          Computer, Smartphone oder Tablet. Er sendet Anfragen an Server und
          empfängt die Antworten.
        </p>

        <h3>Router</h3>
        <p>
          Der <strong>Router</strong> verbindet Ihr lokales Netzwerk mit dem
          Internet. Er leitet Datenpakete zwischen verschiedenen Netzwerken
          weiter und sorgt dafür, dass die Daten den richtigen Weg finden.
        </p>

        <h3>ISP (Internet Service Provider)</h3>
        <p>
          Ihr <strong>Internetanbieter (ISP)</strong> stellt die Verbindung zum
          Internet her. Swisscom, Sunrise und UPC sind Beispiele für ISPs in der
          Schweiz.
        </p>

        <h3>DNS-Server (Domain Name System)</h3>
        <p>
          Der <strong>DNS-Server</strong> übersetzt lesbare Domainnamen wie
          "google.com" in IP-Adressen wie "142.250.185.46", die Computer
          verstehen können. Er funktioniert wie ein Telefonbuch des Internets.
        </p>

        <h3>Server</h3>
        <p>
          Ein <strong>Server</strong> ist ein leistungsstarker Computer, der
          Webseiten, Dateien oder Dienste bereitstellt. Wenn Sie eine Webseite
          aufrufen, antwortet ein Server mit den gewünschten Daten.
        </p>

        <h3>Backbone</h3>
        <p>
          Das <strong>Internet-Backbone</strong> besteht aus
          Hochgeschwindigkeits-Glasfaserkabeln, die Kontinente und Länder
          miteinander verbinden. Diese Hauptleitungen transportieren riesige
          Datenmengen über grosse Distanzen.
        </p>

        <h3>Firewall</h3>
        <p>
          Die <strong>Firewall</strong> schützt Netzwerke vor unerwünschten
          Zugriffen. Sie kontrolliert den Datenverkehr und blockiert verdächtige
          oder gefährliche Verbindungen.
        </p>

        <h3>Cloud-Dienste</h3>
        <p>
          <strong>Cloud-Dienste</strong> sind Server-Infrastrukturen, die
          Speicherplatz, Rechenleistung oder Anwendungen über das Internet
          bereitstellen. Beispiele sind Google Drive, iCloud oder AWS.
        </p>
      </section>

      <Section>
        <h2>Zusammenspiel der Komponenten</h2>
        <p>
          Wenn Sie eine Webseite besuchen, arbeiten alle diese Komponenten
          zusammen: Ihr Client sendet eine Anfrage über den Router zum ISP. Der
          DNS-Server übersetzt den Domainnamen in eine IP-Adresse. Die Anfrage
          wird über das Backbone zum Ziel-Server geleitet, der die Webseite
          zurückschickt. Die Firewall überwacht den gesamten Datenverkehr auf
          Sicherheitsrisiken.
        </p>
        <p>
          Diese komplexe Infrastruktur ermöglicht es, dass Daten in
          Sekundenschnelle rund um die Welt übertragen werden können.
        </p>
      </Section>
    </>
  );
}
