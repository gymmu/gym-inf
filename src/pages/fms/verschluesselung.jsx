import Caesar from "@components/Caesar.jsx";
import { Math } from "@components/Katex.jsx";
import LearningGoals from "@components/LearningGoals.jsx";
import Section from "@components/Section.jsx";
import Vigenere from "@components/Vigenere.jsx";
import Xor from "@components/Xor.jsx";

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
        <p>
          Die Grösse eines Schlüsselraums zu bestimmen, ist im Prinzip sehr
          einfach, denn es sind einfach die Anzahl an Schlüsseln, die für das
          Verfahren möglich sind. Beim Caesar-Verfahren, sind das die Anzahl an
          Verschiebungen die möglich sind, also 26. Das ist ein extrem kleiner
          Schlüsselraum, und deshalb gilt das Caesar-Verfahren als extrem
          unsicher. Dieses Verfahren können wir sogar von Hand knacken, nicht
          einmal das braucht sehr viel Zeit.
        </p>
        <p>
          Möchten wir ein Verschlüsselungsverfahren also sicherer machen, müssen
          wir ein Verfahren mit einem grösseren Schlüsselraum erstellen. Eine
          einfache Idee ist die folgende, wir nutzen statt einer Verschiebung,
          einfach <Math>{String.raw`n`}</Math> Verschiebungen, immer für den
          nächsten Buchstaben, und wenn alle <Math>{String.raw`n`}</Math>{" "}
          Verschiebungen durch sind, dann starten wir wieder von vorne. Somit
          ist unser Schlüsselraum von der Grösse <Math>{String.raw`26^n`}</Math>
          . Wenn wir unser <Math>{String.raw`n`}</Math> gross genug wählen, dann
          sollte unser Verfahren sicher sein.
        </p>
        <p>
          Es gibt ein Verfahren das genau sowas macht. Das Verfahren ist auch
          schon sehr alt, und nicht für Computer gemacht. Wir schauen uns das
          Verfahren hier an, weil es relativ einfach zu verstehen ist. Später
          schauen wir dann Verfahren an, die für den Computer gemacht sind.
        </p>
      </Section>
      <section>
        <h2>Das Vigenère-Verfahren</h2>
        <p>
          Dieses Verfahren können wir sehr einfach als mehrstufiges
          Caesar-Verfahren betrachten. Auch hier wird jeder Buchstabe im
          Alphabet verschoben, jedoch nicht immer mit der gleichen Verschiebung,
          sondern immer mit einer neuen. Die Frage die sich hier aufwirft, ist:
          "Wie können wir all diese Verschiebungen merken, also wie können wir
          uns auf einen Schlüssel einigen?".
        </p>
        <p>
          Da es generell schwer ist sich einen Haufen von Zahlen zu merken, oder
          zu wissen wie eine grosse Zahl (z.B. 1297623152129) aufgeteilt wird,
          lösen wir dieses Problem mit einem <strong>Schlüsselwort</strong>. Der
          Trick ist sehr einfach, die Verschiebung ist immer genau die Position
          des Buchstabens im Schlüsselwort. Wählen wir zum Beispiel das
          Schlüsselwort:
          <strong style={{ color: "var(--color-red)" }}> supersicher</strong>,
          so gehen wir jeden Buchstaben im Text und im Schlüsselwort durch. Wir
          schauen schauen jeweils wo sich die beiden Treffen, und markieren
          diesen Buchstaben. So wird aus der Nachricht{" "}
          <strong style={{ color: "var(--color-green)" }}>hallowelt</strong> und
          dem Schlüsselwort{" "}
          <strong style={{ color: "var(--color-red)" }}>geheim</strong> die
          verschlüsselte Nachricht: <strong>nespwikpa</strong>.
        </p>
        <Vigenere />
        <p>
          Wenn wir einen genügend langen Text und auch ein genügend langes
          Schlüsselwort wählen, ist es nicht mehr möglich dieses Verfahren zu
          knacken.
        </p>
      </section>
      <Section classes="learning">
        <h2>Gezielte Angriffe</h2>
        <p>
          Neben dem blinden raten von Passwörtern, können wir auch gezielte
          Angriffe machen. Hier spricht man dann oftmals von einem{" "}
          <strong>Dictionary-Angriff</strong>. Hier wird versucht mit gezielten
          Wörtern und Wortkombinationen eine Verschlüsselung zu knacken. Bei der
          Vigenère-Verschlüsselung könnte sowas auch funktionieren, denn es ist
          einfacher sich ein Wort zu merken, statt einer zufälligen
          Buchstabenfolge. Genau dieser Fehler wird sehr oft gemacht wenn wir
          Passwörter verwenden. Irgendwie müssen wir uns das Passwort ja merken
          können, also darf es nicht zu kompliziert werden. Aber genau das ist
          ein Fehler, denn so wird der Schlüsselraum deutlich kleiner. Das
          spielt bei der normalen Verschlüsselung im Internet zum Glück keine
          Rolle, da wir dort den Schlüssel in der Regel nicht selber wählen.
        </p>
        <p>
          Bei gezielten Angriffen wird auch immer ausgenutzt dass der Geheimtext
          aus einer bestimmten Sprache kommt, und diese Sprache unterschiedliche
          Häufigkeiten in den Buchstaben haben. Zum Beispiel sind die Buchstaben{" "}
          <strong>a</strong> und <strong>e</strong> sehr verbreitet in der
          deutschen Sprache. So könnten wir bei einem langen Text, der mit
          Caesar verschlüsselt wurde, einfach schauen wie oft diese Buchstaben
          vorkommen, das gibt uns einen guten Hinweis für einen möglichen
          Schlüssel.
        </p>
        <p>
          Ausserdem müssen wir nicht immer den ganzen Text übersetzen, oftmals
          reicht es schon von den ersten 3 Buchstaben sagen zu können ob es ein
          deutsches Wort sein könnte, oder nicht.
        </p>
      </Section>
      <section>
        <h2>Verschlüsselung auf dem Computer</h2>
        <p>
          Der Computer verschlüsselt mit einem anderen Prinzip wie wir das mit
          dem verschieben des Alphabets machen. Wie Sie sicherlich noch wissen,
          arbeitet der Computer immer auf <strong>Bits</strong>. Und da gibt es
          eine wunderschöne einfache Methode, wie man eine Reihe von Bytes
          verschlüsseln kann, so dass man diese nur noch mit dem Schlüssel
          selber wieder entschlüsseln kann. Wir schauen uns nur das grundlegende
          Konzept an, denn alle Verschlüsselungsverfahren basieren darauf. Die
          restlichen Unterschiede bei diesen Verfahren ist dann mehr wie oft das
          ganze gemacht wird, und in wie grossen Stücken.
        </p>
        <p>
          Das wichtigste hier ist das sogenannte <strong>XOR</strong>-Verfahren.
          Das ist eine ganze einfache logische Operation, die für jedes Bit
          ausgeführt wird. Wir brauchen also einen Klartext (in Bits) und einen
          Schlüssel (in Bits), damit wir die <strong>XOR</strong>-Operation
          anwenden können.
        </p>
        <Xor />
        <p>
          Mit längeren Wörtern, werden es einfach mehr Bits die dann gedreht
          werden. Das schöne daran ist, dass das ganze unglaublich schnell geht,
          die Operation ist extrem einfach für den Computer, aber wenn Sie den
          Schlüssel nicht kennen, ist es absolut unmöglich von der
          Geheimbotschaft auf den Klartext zu kommen.
        </p>
      </section>
    </>
  );
}
