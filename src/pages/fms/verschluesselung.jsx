import Caesar from "@components/Caesar.jsx";
import { DMath, Math } from "@components/Katex.jsx";
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
          Geheimbotschaft auf den Klartext zu kommen. Genau das machen sich
          moderne Verschlüsselungsverfahren zu nutzen.
        </p>
      </section>
      <Section>
        <h2>AES - Advanced Encryption Standard</h2>
        <p>
          Das <strong>AES</strong>-Verfahren ist ein modernen
          Verschlüsselungsverfahren, welches oftmals auf dem Computer angewendet
          wird. Es wird zum Beispiel bei WLAN-Verbindungen mit Verschlüsselung
          eingesetzt, wie auch bei <strong>https</strong>.
        </p>
        <p>
          Das AES-Verfahren verwendet mehrere Runden der Verschlüsselung (10 -
          14) und jede Runde besteht aus 4 Phasen. Wir werden uns diese Phasen
          nicht genau anschauen, Sie müssen jedoch wissen wofür diese Phasen
          verwendet werden.
        </p>
        <h3>4 Phasen von AES</h3>
        <p>
          Der Verschlüsselungsschritt in AES ist die letzte Phase pro Runde, da
          wird das <strong>XOR</strong>-Verfahren von weiter oben verwendet. Wie
          wir bereits gesehen haben, ist es nicht möglich wegen der Grösse des
          Schlüsselraums auf diesen Schlüssel zu kommen. Jedoch können wir
          klevere Tricks anwenden, denn wir wissen ja, das ein Text herauskommen
          sollte. So können wir wegen dem <strong>XOR</strong>-Verfahren
          versuchen den Schlüssel systematisch zu erraten, was den potenziellen
          Schlüsselraum deutlich kleiner macht. Um dieses Problem zu umgehen,
          führt <strong>AES</strong> diese ersten 3 Schritte ein. Da werden im
          Prinzip einfach Bits nach einem Schema vermischt, so das wir keine
          systematische Analyse mehr machen können. Dadurch bleibt der
          Schlüsselraum so gross wie er eigentlich sein sollte.
          <DMath>{String.raw`2^{128}=340282366920938463463374607431768211456`}</DMath>
        </p>
        <ol>
          <li>
            <strong>Sub Bytes:</strong> Hier werden Bytes nach einem fixen
            Muster ersetzt.
          </li>
          <li>
            <strong>Shift Row:</strong> Hier werden die Reihen nach einem fixen
            Muster verschoben.
          </li>
          <li>
            <strong>Mix Column:</strong> Hier werden die Zeilen nach einem fixen
            Muster durchmischt.
          </li>
          <li>
            <strong>Key Addition:</strong> Dies ist der Verschlüsselungsschritt,
            hier wird die
            <strong>XOR</strong>-Operation mit Schlüssel und den gemischten
            Bytes angewendet. Ohne diese Operation wäre das Verfahren nicht
            verschlüsselt, da alle anderen Schritte auch ohne Schlüssel
            umkehrbar sind.
          </li>
        </ol>
        <p>
          Die Details hier sind absichtlich weggelassen worden, denn für Sie ist
          nur wichtig zu wissen, die Verschlüsselung passiert nur im
          <strong>XOR</strong>-Schritt. Alle anderen Schritte sind nur dazu
          gedacht, dass man nicht systematisch nach dem Schlüssel raten kann.
        </p>
      </Section>
      <section>
        <h2>Systematisches Raten</h2>
        <p>
          Wieso ist es denn wichtig, das wir uns vor dem systematischen Erraten
          schützen können, der Schlüsselraum ist ja viel zu gross. Um das zu
          verstehen, müssen wir besser verstehen was denn eigentlich passiert.
          <strong>AES</strong> verschlüsselt alle Daten in Blöcken, und
          verwendet für diese Blöcke den gleichen Schlüssel. Wir nehmen für
          unser Beispiel mal an, das wir nur Text im ASCII-Format verschicken,
          dann passen genau <Math>{String.raw`128 : 8 = 16`}</Math> Buchstaben
          in einen Block.
        </p>
        <p>
          Als Hacker würden wir nun ganz viele von diesen Blöcken sammeln. Da
          wir hier von Text ausgehen, können wir davon ausgehen dass das
          <pre>Leerzeichen</pre> am häufigsten vorkommt. Somit können wir nach
          dem häufigsten Byte suchen, und die <strong>XOR</strong>-Operation für
          dieses Byte mit dem <pre>Leerzeichen</pre> durchführen. So können wir
          bereits einige Stellen des Schlüssels erraten. Da in 16 Buchstaben das{" "}
          <pre>Leerzeichen</pre> mit grosser Wahrscheinlichkeit mindestens 1-mal
          vorkommt, können wir sehr gut danach suchen.
        </p>
        <p>
          Auch wenn dies jetzt relativ einfach klingt, in der Praxis ist das
          überhaupt nicht einfach, und oft brauchen Sie sehr viele Blöcke um ein
          solches Verfahren wirklich anzugehen. Damit man solche Methoden aber
          keinesfalls anwenden kann, hat man beim <strong>AES</strong>
          mehrere Runden und auch diese Vermischungsschritte eingeführt.
        </p>
        <p>
          Aktuell geht man davon aus, dass das <strong>AES</strong>-Verfahren
          sicher ist, jedoch gilt es zu Bedenken den Schlüssel auf 256-Bits zu
          vergrössern, denn man rechnet damit dass die Computer so schnell
          werden, dass ein 128-Bit Schlüssel und absehbarer Zukunft geknackt
          werden kann. Das ist jedoch kein Problem, diese Verfahren werden
          bereits automatisch durchgeführt, und sind bereits oder werden noch
          auf 256-Bits hochgestuft.
        </p>
      </section>
      <Section>
        <h2>Sichere Verbindung prüfen</h2>
        <p>
          Nun wissen Sie alles über Verschlüsselung und weshalb es wichtig ist,
          um genügend Angst zu haben eine nicht verschlüsselte Verbindung zu
          haben. Also wie können Sie das ganze Prüfen? Oftmals ist das ganz
          einfach, denn Sie haben ein kleines Vorhängeschloss in Ihrer URL-Bar.
          Wenn das Schloss angezeigt wird, dann sind Sie sicher.
        </p>
        <p>
          Wenn Sie jetzt aber noch mehr Informationen möchten, weil Ihnen etwas
          merkwürdig erscheint, dann können Sie auf das Schloss klicken, und die
          Details anschauen, oder Sie öffnen die Entwickerwerkzeuge des Browsers
          mit <pre>CRTL + SHIFT + I</pre> und suchen nach einem Tab das mit{" "}
          <pre>Sicherheit</pre> angeschrieben ist. Dort finden Sie alles nötige
          zur Verbindung, und Sie sehen auch welcher Algorithmus verwendet
          wurde. Wenn Sie das für diese Seite machen, dann ist es vermutlich ein{" "}
          <pre>AES-128</pre>.
        </p>
      </Section>
    </>
  );
}
