import React from "react"
import Presentation, { Slide } from "../../components/Reveal"
import Example from "../../components/Example"
import URLComponent from "../../components/URL"

export default function NetworkIntroSlides() {
  return (
    <Presentation>
      <Slide>
        <h2 id="networks">Netzwerke</h2>
        <p>
          Computernetzwerke werden verwendet um Daten zwischen verschiedenen
          Geräten auszutauschen. Das einfachste Beispiel ist der Besuch einer
          Webseite. Damit das funktionieren kann, müssen Sie von Ihrem Gerät
          eine Anfrage an ein anderen Gerät schicken, und sagen welche Webseite
          sie angezeigt haben möchten. Dieses Kommunikationsmodell bezeichnet
          man als ein <strong>Server-Client</strong>-Modell.
        </p>
      </Slide>

      <Slide>
        <Example id="server-client" title="Server-Client Modell">
          <p>
            Beim <strong>Server-Client</strong>-Modell sind immer 2 Parteien
            involviert. Der <strong>Client</strong>
            ist die Anwendung, die eine Anfrage stellt. Der{" "}
            <strong>Server</strong> ist die Anwendung, die die Antwort zur
            Verfügung stellt. Das kann auf dem gleichen Gerät passieren, oder
            wie meistens über das Internet. Damit diese Anwendungen miteinander
            kommunizieren können, braucht es ein Protokoll. Beim Abrufen von
            Webseiten wird dabei <strong>HTTP</strong> verwendet. Dabei steht{" "}
            <strong>HTTP</strong> für{" "}
            <strong>Hypertext Transfer Protocol</strong>. Wenn die Verbindung
            verschlüsselt sein soll, dann ist es <strong>HTTPS</strong>.
          </p>
        </Example>
      </Slide>

      <Slide>
        <h3 id="url">Webadressen</h3>
        <p>
          Um auf eine Webseite zugreifen zu können, brauchen wir einen Link bzw.
          eine Webadresse. Der korrekte Begriff dafür ist <strong>URL</strong>{" "}
          (Uniform Resource Locator). Eine <strong>URL</strong> ist nach dem
          folgenden Schema aufgebaut:
        </p>
        <URLComponent url="https://www.gym-muttenz.ch/index.php" />
      </Slide>

      <Slide>
        <ul>
          <li>
            <strong>Protokoll (Protocol):</strong> Gibt an, wie der Computer mit
            der Webseite kommuniziert (z.B. http, https).
          </li>
          <li>
            <strong>Benutzername (Username):</strong> Optionaler Name zur
            Anmeldung auf der Webseite.
          </li>
          <li>
            <strong>Passwort (Password):</strong> Optionales Passwort zur
            Anmeldung.
          </li>
          <li>
            <strong>Host (Host):</strong> Die Adresse der Webseite (z.B.
            www.beispiel.de).
          </li>
          <li>
            <strong>Pfad (Pathname):</strong> Zeigt die genaue Seite oder Datei
            auf der Webseite an (z.B. /startseite).
          </li>
          <li>
            <strong>Suchparameter (Search):</strong> Zusätzliche Informationen,
            die an die Webseite übergeben werden (z.B. ?suche=blumen).
          </li>
          <li>
            <strong>Anker (Hash):</strong> Verweist auf eine bestimmte Stelle
            auf der Webseite (z.B. #kontakt).
          </li>
        </ul>
      </Slide>

      <Slide>
        <p>
          Wenn Sie bei Google etwas suchen möchten, dann können Sie das direkt
          in der
          <strong>URL</strong> angeben. Es ist nicht immer <code>q=</code> aber
          das können Sie schnell herausfinden wenn Sie eine Suche mit der
          jeweiligen Suchmaschine machen.
        </p>
        <URLComponent url="https://www.google.com/search?q=netzwerke" />
      </Slide>
    </Presentation>
  )
}
