import Caesar from "@components/Caesar.jsx";
import LearningGoals from "@components/LearningGoals.jsx";
import Section from "@components/Section.jsx";

export default function FmsVerschluesselung() {
  return (
    <>
      <h2>Verschlüsselung</h2>
      <section>
        <p>
          Bei der digitalen Übertragen ist es jeder Partei möglich sämtliche
          Daten auszulesen, die über tragen werden. Das ist als würde man
          sämtliche Nachrichten auf unverschlossenen Postkarten verschicken,
          oder einfach in einen Raum voller Leute herausrufen.
        </p>
        <p>
          Dies wird sehr schnell zum Problem, wenn man "geheime" Daten
          übermitteln möchte, wie zum Beispiel <strong>Passwörter</strong>. Aber
          genau das müssen wir im Internet sehr oft machen, daher brauchen wir
          Verfahren mit denen wir diese Daten für unbefugte unlesbar machen
          können. Dies nennt man <strong>Verschlüsselung</strong>.
        </p>
        <p>
          In diesem Kapitel schauen wir uns sehr einfache
          Verschlüsselungsverfahren an, diese sind absolut nicht für den
          Computer geeignet, und wir entwickeln ein theoretisches Verständnis
          dafür, was ein Verschlüsselungsverfahren <strong>sicher</strong>{" "}
          macht.
        </p>
      </section>
      <LearningGoals>
        <ul>
          <li>Sie wissen weshalb Verschlüsselungsverfahren benötigt werden.</li>
          <li>
            Sie kennen einfache Verschlüsselungsverfahren und können diese auf
            Papier anwenden.
          </li>
          <li>
            Sie können moderne Verschlüsselungsverfahren benennen und deren
            Tauglichkeit für Computer beurteilen.
          </li>
          <li>
            Sie wissen was der Schlüsselraum ist, und was dieser mit der
            Sicherheit eines Verschlüsselungsverfahrens zu tun hat.
          </li>
          <li>
            Sie können die Grösse des Schlüsselraums von verschiedenen
            Verschlüsselungsverfahren angeben.
          </li>
          <li>
            Sie wissen was eine Brute-Force-Attacke ist, und wie man sich davor
            schützen kann.
          </li>
        </ul>
      </LearningGoals>
      <section>
        <h2>Ziele der Verschlüsselung</h2>
        <p>
          Bei der Verschlüsselung ist unser Ziel immer die Daten für nur genau 2
          Parteien lesbar zu machen. Das ist der Sender und der Empfänger. Alle
          anderen dürfen die Nachricht lesen können, aber können den Inhalt
          nicht entziffern. Wichtig bei dem Verschlüsselungsverfahren, ist immer
          dass der Empfänger die Nachricht aber wieder entziffern kann. Es gibt
          auch Verfahren (Hashing) die verwendet werden um den Inhalt einer
          Nachricht zu prüfen, diese aber nicht entschlüsseln können. Solche
          Verfahren werden beim Speichern von Passwörtern verwendet, und wir
          werden dass in einem späteren Kapitel anschauen.
        </p>
        <p>
          Eines der einfachsten Verschlüsselungsverfahren ist das
          Caesar-Verfahren. Die ist bereits sehr alt, und gilt als absolut
          unsicher. Es eignet sich jedoch sehr gut um Verschlüsselungsverfahren
          zu erlernen.
        </p>
      </section>
      <Section>
        <h2>Das Caesar-Verfahren</h2>
        <p>
          Bei diesem Verfahren einigen sich die beiden Kommunikationspartner auf
          einen gemeinsamen Schlüssel, zum Beispiel 7. Dann wird jeder Buchstabe
          in der Nachricht, um 7 Stellen im Alphabet verschoben, und so entsteht
          eine sinnlose Geheimnachricht, die Sie nur lesen können, wenn Sie das
          Alphabet wieder um 7 Stellen zurück verschieben.
        </p>
        <Caesar />
        <h3>Aufgabe</h3>
        <p>
          Suchen Sie sich eine beliebige Nachricht aus und verschlüsseln Sie
          diese mit dem Caesar-Verfahren. Nun nehmen Sie die verschlüsselte
          Nachricht, und geben diese als Klartext ein. Schieben Sie das Alphabet
          so lange herum, bis eine sinnvolle Nachricht erscheint. Wie schwer war
          es diese Nachricht zu knacken?
        </p>
      </Section>
      <section>
        <h2>Verschlüsselungen knacken</h2>
        <p>
          Eine Verschlüsselung knacken zu können, ist für einen Hacker immer
          interessant. Denn man könnte ja an ein Passwort, oder andere geheime
          Dinge kommen. Aber wie würde man vorgehen um eine Verschlüsselung zu
          knacken?
        </p>
        <p>
          Im Prinzip ist es ganz einfach. Sie wählen ein
          Verschlüsselungsverfahren aus, dieses kennen Sie meistens schon im
          voraus, denn im Internet müssen die Kommunikationspartner zuvor
          abmachen, welches Verfahren Sie verwenden möchten. Wir nehmen jetzt
          hier mal das Caesar-Verfahren, auch wenn dieses im digitalen niemals
          verwendet wird.
        </p>
        <p>
          Jetzt wo wir das Verfahren kennen, raten wir einfach drauf los, also
          wir testen systematisch alle möglichen Schlüssel für dieses Verfahren
          durch. Eine solche Attacke nennt man eine{" "}
          <strong>Brute-Force-Attacke</strong>. Eine solche Attacke funktioniert
          besonders gut, wenn es nicht so viele Schlüssel gibt, also wenn der{" "}
          <strong>Schlüsselraum</strong> relativ klein ist.
        </p>
        <p>
          Aber wieso funktioniert eine solche Attacke? Das ist ganz einfach, der
          Computer kann extrem schnell rechnen, und mehrere Millionen
          Möglichkeiten in der Sekunde ausprobieren. Der Computer gibt auch
          nicht auf vor Ermüdung, sondern er rechnet einfach weiter, bis alle
          Schlüssel durch sind, oder eine Nachricht entschlüsselt werden konnte.
        </p>
      </section>
      <Section>
        <h2>Schlüsselraum und Sicherheit</h2>
        <p>
          Das aller wichtigste bei einem Verschlüsselungsverfahren, ist die
          Grösse des <strong>Schlüsselraums</strong>. Wenn es genügend viele
          Schlüssel gibt, die ein Hacker nicht gezielt erraten kann, dann ist
          das Verfahren vor <strong>Brute-Force-Attacken</strong> sicher. Aber
          wie gross muss ein solcher Schlüsselraum sein, und wie können wir die
          Grösse von einem Schlüsselraum bestimmen?
        </p>
      </Section>
    </>
  );
}
