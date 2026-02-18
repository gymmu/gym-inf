import LearningGoals from "@components/LearningGoals.jsx";
import Section from "@components/Section.jsx";
import { DH1, DH2, DH3 } from "@components/DiffieHellman.jsx";
import ModuloClock from "@components/ModuloClock.jsx";

export default function Schluesselaustausch() {
  return (
    <>
      <h1>Schlüsselaustausch</h1>
      <section>
        <p>
          Sie wissen nun wie Verschlüsselung funktioniert und wann es sicher
          ist. Die offensichtliche Frage die sich jetzt noch stellt: "Wie können
          Sie einen Schlüssel austauschen?"
        </p>
      </section>
      <LearningGoals>
        <ul>
          <li>Sie wissen weshalb es einen Schlüsselaustausch braucht?</li>
          <li>Sie können ein Verfahren für den Schlüsselaustausch benennen.</li>
          <li>
            Sie können das Diffie-Hellman-Verfahren in groben Zügen erklären.
          </li>
        </ul>
      </LearningGoals>
      <section>
        <h2>Symmetrische Verschlüsselungsverfahren</h2>
        <p>
          Bisher wurden nur symmetrische Verschlüsselungsverfahren betrachtet.
          Das sind Verfahren, bei denen der gleiche Schlüssel für die Ver- und
          Entschlüsselung verwendet wird. Das macht diese Verfahren sehr
          praktisch für einen grossen Datenaustausch zwischen zwei Parteien. Und
          sobald ein gemeinsamer Schlüssel vorhanden ist, sind diese Verfahren
          auch sicher. Aber wie kommt man zu einem gemeinsamen Schlüssel, ohne
          dass jemand anderes an den Schlüssel kommt? Das scheint kein einfaches
          Problem zu sein.
        </p>
      </section>
      <section>
        <h2>Alles unverschlüsselt</h2>
        <p>
          Das Hauptproblem ist, dass das Internet grundsätzlich nicht
          verschlüsselt ist. Dies wurde bereits mehrfach besprochen, aber es ist
          wirklich wichtig dass Sie das verstehen:
          <strong>
            Die elektronische Übertragung von Daten kann nicht verschlüsselt
            sein, und alle mit Zugang zum Netzwerk können die Daten lesen.
          </strong>
          Das bedeutet, die Daten müssen vor dem Versenden verschlüsselt werden.
          Wie Sie im letzten Kapitel gesehen haben, gibt es auch genügend
          Verfahren mit denen das möglich ist, aber alle brauchen einen
          Schlüssel. Also wie kann man den Schlüssel - der geheim bleiben muss -
          zwischen zwei Parteien austauschen, ohne eine verschlüsselte
          Verbindung zu haben?
        </p>
        <h3>Geheimdienst</h3>
        <p>
          Eine Möglichkeit wäre es wie ein Spion um die Welt zu reisen, und
          einen super geheimen Schlüssel auf einem USB-Stick mitzunehmen, und
          diesen mit dem Dienst auszutauschen. Das klingt zwar witzig, ist aber
          absolut unpraktikabel. Überlegen Sie sich schon nur einmal wie viele
          verschiedene Dienste Sie verwenden, alle diese zu besuchen, ist völlig
          unmöglich, und das Internet ist viel zu dynamisch, als das Sie einen
          Schlüssel für längere Zeit bei einem Dienst liegen haben können. Es
          braucht also ganz klar eine andere Lösung.
        </p>
        <h3>Gleicher Initialschlüssel</h3>
        <p>
          Das Problem ist ja nur das die erste Verbindung nicht verschlüsselt
          ist, was wäre also wenn wir pro Dienst alle den gleichen
          Initialschlüssel verwenden würden? Dann wäre die Verbindung
          verschlüsselt, und Sie könnten sicher einen neuen Schlüssel
          austauschen.
        </p>
        <p>
          Diese Idee klingt zwar einleuchtend, funktioniert aber leider auch
          überhaupt nicht. Wenn alle den gleichen Schlüssel verwenden, dann
          könnte man einfach eine Verbindung mit dem Dienst öffnen, man bekommt
          den gleichen Schlüssel wie alle anderen, und kann somit alle
          Initialverschlüsselungen aufheben, dadurch könnte man sämtliche
          Schlüssel die dann erzeugt werden, einfach auslesen. Das ist etwa
          gleich sicher wie keine Verschlüsselung zu verwenden, und hoffen das
          niemand zuhört.
        </p>
        <h3>Zufällige Schlüssel</h3>
        <p>
          Wir könnten einfach einen komplett zufälligen Schlüssel erzeugen. Das
          Problem dabei ist aber, das nicht beide Parteien auf den gleichen
          Schlüssel kommen werden, das geht also ebenfalls nicht.
        </p>
        <h3>Asymmetrische Verschlüsselung</h3>
        <p>
          Neben der symmetrischen Verschlüsselung, gibt es noch die
          asymmetrische Verschlüsselung. Hier werden nicht die gleichen
          Schlüssel für die Ver- und Entschlüsselung verwendet. Hier könnten wir
          also einen öffentlichen Schlüssel des Servers verwenden, um eine
          Nachricht zu verschlüsseln, diese kann dann nur vom Server
          entschlüsselt werden, so können wir den Schlüssel austauschen, und
          dann nur mit diesem Schlüssel weiter kommunizieren. Das würde zwar
          funktionieren, wird aber in der Praxis oftmals nicht angewendet,
          wahrscheinlich weil bei dieser Variante der Client alleine über den
          Schlüssel bestimmen kann, und dies zu Sicherheitslücken führen könnte.
          Oder, wenn der Schlüssel des Servers geknackt werden kann, dann können
          alle neuen Schlüssel direkt ausgelesen werden.
        </p>
      </section>
      <Section>
        <h2>Diffie-Hellman-Schlüsselaustausch</h2>
        <p>
          Damit man all die Probleme von oben umgehen kann, gibt es ein geniales
          mathematisches Verfahren, mit dem man sich auf eine gemeinsame Zahl
          einigen kann, so dass nur die beiden kommunizierenden Parteien auf
          diese Zahl kommen können. Das Verfahren ist relativ einfach und
          braucht nur zwei Runden der Kommunikation.
        </p>
        <h3>Die Farben-Analogie: Diffie-Hellman einfach erklärt</h3>
        <p>
          Bevor wir in die Mathematik eintauchen, schauen wir uns eine intuitive
          Analogie an. Stellen Sie sich vor, Alice und Bob möchten einen
          gemeinsamen geheimen "Farbton" erzeugen:
        </p>
        <ol>
          <li>
            <strong>Öffentliche Farbe:</strong> Alice und Bob einigen sich
            öffentlich auf Gelb als Startfarbe. Diese Farbe kann jeder sehen.
          </li>
          <li>
            <strong>Geheime Farben:</strong> Alice wählt geheim die Farbe Rot,
            Bob wählt geheim die Farbe Blau. Diese Farben bleiben privat.
          </li>
          <li>
            <strong>Mischen:</strong> Alice mischt Gelb + Rot = Orange. Bob
            mischt Gelb + Blau = Grün.
          </li>
          <li>
            <strong>Austausch:</strong> Alice schickt ihre Orange Mischung zu
            Bob, Bob schickt seine Grüne Mischung zu Alice. Ein Angreifer kann
            beide Mischungen sehen!
          </li>
          <li>
            <strong>Finaler Schlüssel:</strong> Alice nimmt die empfangene Grüne
            Mischung von Bob und fügt ihre geheime rote Farbe hinzu = Braun. Bob
            nimmt die empfangene Orange Mischung von Alice und fügt seine
            geheime blaue Farbe hinzu = Braun.
          </li>
        </ol>
        <p>
          <strong>Das Geniale:</strong> Beide haben jetzt die gleiche braune
          Farbe, obwohl sie nie ausgetauscht wurde! Ein Angreifer sieht nur
          Gelb, Orange und Grün. Aus der orangen Mischung die rote Farbe
          "herauszufiltern" ist praktisch unmöglich - genau wie in der
          Kryptographie das Zurückrechnen der geheimen Zahlen aus den
          öffentlichen Werten extrem schwierig ist.
        </p>
        <h3>Erste Runde</h3>
        <p>
          In einer ersten Kommunikationsrunde einigen sich die beiden Parteien
          auf 2 Zahlen. Diese Zahlen sind allgemein bekannt, und können über das
          unverschlüsselte Internet übertragen werden. Dann wählt jede Partei
          noch eine eigene Geheimzahl. Diese Zahl wird niemals übertragen.
        </p>
        <DH1 />
        <h3>Modulo-Rechnung verstehen</h3>
        <p>
          Bevor wir zum zweiten Schritt kommen, müssen wir die{" "}
          <strong>Modulo-Rechnung</strong> verstehen. Die Modulo-Operation gibt
          uns den Rest einer Division zurück. Eine intuitive Art, sich dies
          vorzustellen, ist eine Uhr: Wenn es jetzt 10 Uhr ist und Sie 5 Stunden
          hinzufügen, ist es 3 Uhr - nicht 15 Uhr. Das ist, weil eine Uhr
          "modulo 12" funktioniert.
        </p>
        <p>
          Mathematisch ausgedrückt: <em>17 mod 12 = 5</em>, weil 17 geteilt
          durch 12 gleich 1 Rest 5 ist. Die Zahl macht eine volle Runde um die
          Uhr und landet bei 5.
        </p>
        <ModuloClock />
        <p>
          Die Modulo-Operation ist extrem wichtig für die Sicherheit des
          Diffie-Hellman-Verfahrens. Selbst wenn jemand die öffentlichen Werte
          kennt, ist es praktisch unmöglich, die ursprünglichen Geheimzahlen
          zurückzurechnen - besonders bei sehr grossen Primzahlen.
        </p>
        <h3>Zweite Runde: Berechnung der öffentlichen Werte</h3>
        <p>
          Im zweiten Schritt berechnen Alice und Bob jeweils einen öffentlichen
          Wert aus ihrer Geheimzahl und den gemeinsamen öffentlichen Parametern.
          Diese Berechnung verwendet Potenzierung und die Modulo-Operation:
        </p>
        <ul>
          <li>
            Alice berechnet: A = g<sup>a</sup> mod p
          </li>
          <li>
            Bob berechnet: B = g<sup>b</sup> mod p
          </li>
        </ul>
        <p>
          Diese berechneten Werte <em>A</em> und <em>B</em> werden dann über das
          unsichere Netzwerk ausgetauscht. Aber aufgrund der Modulo-Operation
          kann niemand, der diese Werte abfängt, die ursprünglichen Geheimzahlen{" "}
          <em>a</em> und <em>b</em> zurückberechnen.
        </p>
        <DH2 />
        <h3>Dritte Runde: Berechnung des gemeinsamen Schlüssels</h3>
        <p>
          Im finalen Schritt tauschen Alice und Bob ihre öffentlichen Werte{" "}
          <em>A</em> und <em>B</em> über das Netzwerk aus. Jede Partei verwendet
          dann den empfangenen öffentlichen Wert zusammen mit ihrer eigenen
          Geheimzahl, um den gemeinsamen Schlüssel zu berechnen:
        </p>
        <ul>
          <li>
            Alice berechnet: s = B<sup>a</sup> mod p (empfangenes <em>B</em> mit
            eigenem geheimen <em>a</em>)
          </li>
          <li>
            Bob berechnet: s = A<sup>b</sup> mod p (empfangenes <em>A</em> mit
            eigenem geheimen <em>b</em>)
          </li>
        </ul>
        <p>
          Die Magie des Diffie-Hellman-Verfahrens liegt darin, dass beide
          Berechnungen zum <strong>gleichen Ergebnis</strong> führen! Dies
          funktioniert aufgrund der mathematischen Eigenschaft:
        </p>
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          (g<sup>a</sup>)<sup>b</sup> mod p = (g<sup>b</sup>)<sup>a</sup> mod p
          = g<sup>ab</sup> mod p
        </p>
        <p>
          Beide Parteien haben nun denselben geheimen Schlüssel <em>s</em>, ohne
          dass dieser jemals über das Netzwerk übertragen wurde. Ein Angreifer,
          der alle öffentlichen Werte (<em>p</em>, <em>g</em>, <em>A</em>,{" "}
          <em>B</em>) kennt, kann den Schlüssel nicht berechnen, da er die
          geheimen Zahlen <em>a</em> und <em>b</em> nicht kennt - und diese aus
          den öffentlichen Werten zurückzurechnen ist bei ausreichend grossen
          Primzahlen praktisch unmöglich (das sogenannte{" "}
          <strong>Diskrete-Logarithmus-Problem</strong>).
        </p>
        <DH3 />
        <h3>Sicherheit in der Praxis</h3>
        <p>
          In unserem Beispiel haben wir zur Veranschaulichung kleine Zahlen
          verwendet (<em>p = 23</em>). In der realen Anwendung werden jedoch
          Primzahlen mit mehreren hundert oder tausend Stellen verwendet, was
          das Verfahren extrem sicher macht. Das Diffie-Hellman-Verfahren ist
          ein fundamentaler Baustein der modernen Internet-Sicherheit und wird
          in Protokollen wie TLS/SSL verwendet, um sichere HTTPS-Verbindungen
          aufzubauen.
        </p>
        <h3>Schwachstelle: Man-in-the-Middle-Angriff</h3>
        <p>
          Trotz seiner Genialität hat Diffie-Hellman eine wichtige
          Schwachstelle: Es authentifiziert die Kommunikationspartner nicht! Das
          bedeutet, dass ein Angreifer sich unbemerkt in die Mitte stellen
          könnte:
        </p>
        <ol>
          <li>
            Alice möchte einen Schlüssel mit Bob austauschen und sendet ihren
            öffentlichen Wert <em>A</em>
          </li>
          <li>
            Der Angreifer (nennen wir ihn Mallory) fängt diese Nachricht ab und
            leitet sie nicht an Bob weiter
          </li>
          <li>
            Stattdessen führt Mallory einen eigenen Schlüsselaustausch mit Alice
            durch - Alice denkt, sie kommuniziert mit Bob
          </li>
          <li>
            Gleichzeitig führt Mallory einen separaten Schlüsselaustausch mit
            Bob durch - Bob denkt, er kommuniziert mit Alice
          </li>
          <li>
            Nun kann Mallory alle Nachrichten von Alice entschlüsseln (mit dem
            Alice-Mallory-Schlüssel), lesen, wieder verschlüsseln (mit dem
            Mallory-Bob-Schlüssel) und an Bob weiterleiten
          </li>
        </ol>
        <p>
          <strong>Die Lösung: Digitale Signaturen und Zertifikate!</strong> In
          der Praxis wird Diffie-Hellman niemals alleine verwendet. Es wird mit
          digitalen Zertifikaten kombiniert, die die Identität der
          Kommunikationspartner bestätigen. Wenn Sie eine HTTPS-Verbindung
          aufbauen, prüft Ihr Browser das Zertifikat der Webseite. Dieses
          Zertifikat wurde von einer vertrauenswürdigen Certificate Authority
          (CA) signiert und bestätigt: "Diese öffentlichen Werte gehören
          wirklich zu dieser Webseite." So wird verhindert, dass sich jemand in
          die Mitte stellt.
        </p>
        <p>
          Zusätzlich bietet eine moderne Variante namens{" "}
          <strong>Ephemeral Diffie-Hellman (DHE)</strong> sogenannte{" "}
          <strong>Perfect Forward Secrecy</strong>: Für jede Sitzung werden neue
          temporäre Schlüssel generiert. Selbst wenn der private Schlüssel des
          Servers später kompromittiert wird, bleiben alte Kommunikationen
          sicher, weil die temporären Schlüssel nicht mehr existieren.
        </p>
      </Section>
      <section>
        <h2>Zusammenfassung</h2>
        <p>
          Sie haben nun gelernt, wie das geniale Diffie-Hellman-Verfahren das
          fundamentale Problem des Schlüsselaustauschs löst. Hier sind die
          wichtigsten Punkte:
        </p>
        <ul>
          <li>
            <strong>Das Problem:</strong> Wie tauscht man einen geheimen
            Schlüssel über eine unsichere Verbindung aus, ohne dass ein
            Angreifer ihn abfangen kann?
          </li>
          <li>
            <strong>Die Lösung:</strong> Diffie-Hellman ermöglicht es beiden
            Parteien, unabhängig voneinander den gleichen Schlüssel zu
            berechnen, ohne ihn jemals zu übertragen.
          </li>
          <li>
            <strong>Die Mathematik:</strong> Das Verfahren nutzt modulare
            Arithmetik und die Tatsache, dass es praktisch unmöglich ist, aus
            den öffentlichen Werten die geheimen Zahlen zurückzurechnen (das
            Diskrete-Logarithmus-Problem).
          </li>
          <li>
            <strong>Die Farben-Analogie:</strong> Wie beim Mischen von Farben
            ist es einfach, Farben zu kombinieren, aber extrem schwierig, eine
            Mischung wieder in ihre Einzelfarben zu zerlegen.
          </li>
          <li>
            <strong>Die Schwachstelle:</strong> Diffie-Hellman alleine
            authentifiziert die Kommunikationspartner nicht und ist anfällig für
            Man-in-the-Middle-Angriffe.
          </li>
          <li>
            <strong>Die Praxis:</strong> In der realen Anwendung (HTTPS,
            TLS/SSL) wird Diffie-Hellman immer mit digitalen Zertifikaten
            kombiniert, um die Identität der Partner zu bestätigen. Zusätzlich
            werden sehr grosse Primzahlen verwendet (mehrere hundert oder
            tausend Stellen).
          </li>
          <li>
            <strong>Moderne Varianten:</strong> Ephemeral Diffie-Hellman (DHE)
            bietet Perfect Forward Secrecy, indem für jede Sitzung neue
            temporäre Schlüssel generiert werden.
          </li>
        </ul>
        <p>
          Das Diffie-Hellman-Verfahren ist einer der wichtigsten Bausteine der
          modernen Internet-Sicherheit. Ohne diese Erfindung wären sichere
          Online-Kommunikation, E-Banking und E-Commerce, wie wir sie heute
          kennen, nicht möglich. Sie verstehen nun, warum das kleine grüne
          Vorhängeschloss-Symbol in Ihrem Browser so wichtig ist - es
          garantiert, dass Ihre Verbindung durch diese mathematisch elegante
          Methode geschützt wird.
        </p>
      </section>
    </>
  );
}
