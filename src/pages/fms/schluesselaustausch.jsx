import LearningGoals from "@components/LearningGoals.jsx";
import Section from "@components/Section.jsx";
import { DH1, DH2 } from "@components/DiffieHellman.jsx";
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
          Wir haben uns bis jetzt nur symmetrische Verschlüsselungsverfahren
          angeschaut. Das sind verfahren, bei denen der gleiche Schlüssel für
          die Ver- und Entschlüsselung verwendet werden. Das macht diese
          Verfahren sehr praktisch für einen grossen Datenaustausch zwischen 2
          Parteien. Und sobald wir einen Schlüssel haben, sind diese Verfahren
          auch sicher. Aber wie kommen wir zu einem gemeinsamen Schlüssel, ohne
          das jemand anderes an den Schlüssel kommt? Das scheint kein einfaches
          Problem zu sein.
        </p>
      </section>
      <section>
        <h2>Alles unverschlüsselt</h2>
        <p>
          Das Hauptproblem ist dass das Internet einfach nicht verschlüsselt
          ist. Wir haben dies bereits einige male besprochen, aber es ist
          wirklich wichtig dass Sie das verstehen:
          <strong>
            Die elektronische Übertragung von Daten, kann nicht verschlüsselt
            sein, und alle mit Zugang zum Netzwerk, können die Daten lesen.
          </strong>
          Das bedeutet, die Daten müssen vor dem Versenden verschlüsselt werden.
          Wie wir im letzten Kapitel gesehen haben, gibt es auch genügend
          Verfahren mit denen wir das machen können, aber alle brauchen einen
          Schlüssel. Also wie können wir den Schlüssel - der geheim bleiben muss
          - zwischen 2 Parteien austauschen, ohne ein verschlüsselte Verbindung
          zu haben?
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
          einigen kann, so das nur die beiden kommunizierenden Parteien auf
          diese Zahl kommen können. Das Verfahren ist relativ einfach und brauch
          nur 2 Runden der Kommunikation.
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
      </Section>
    </>
  );
}
