import HashedPasswordDatabase from "@components/HashedPasswordDatabase";
import LearningGoals from "@components/LearningGoals";
import PlainPasswordDatabase from "@components/PlainPasswordDatabase";
import RainbowTable from "@components/RainbowTable";
import SaltedPasswordDatabase from "@components/SaltedPasswordDatabase";
import Section from "@components/Section";

export default function Passwoerter() {
  return (
    <>
      <h1>Passwörter</h1>
      <p>
        Dass ein sicherer Umgang mit Passwörtern wichtig ist, und dass welche
        Sicherheitsmassnahmen gut sind, sollte relativ offensichtlich sein. Das
        Problem dabei ist aber immer, es ist mühsam so viele unterschiedliche
        und auch sichere Passwörter zu kennen. Wir können uns hier leider nicht
        anschauen wie man sowas besser oder einfacher machen kann. Was wir uns
        aber anschauen können, ist wie denn Passwörter überhaupt gespeichert
        werden, und was denn ein Passwort sicher macht.
      </p>
      <LearningGoals>
        <ul>
          <li>
            Sie wissen wie Passwörter bei einem Online-Dienst gespeichert
            werden.
          </li>
          <li>Sie wissen was Hashing ist.</li>
          <li>
            Sie kennen den Unterschied zwischen Hashing und Verschlüsselung.
          </li>
          <li>Sie wissen was Rainbow-Tables sind.</li>
          <li>Sie kennen Massnahmen um gegen Rainbow-Tables vorzugehen.</li>
        </ul>
      </LearningGoals>
      <section>
        <h2>Wie werden Passwörter gespeichert</h2>
        <p>
          Haben Sie sich schon einmal überlegt was eigentlich passiert wenn Sie
          Ihr Passwort bei einem Onlinedienst angeben? Verwenden Sie für jeden
          Dienst ein anderes Passwort? Falls nicht, weshalb nicht? Erscheint es
          Ihnen nicht unlogisch, dass Sie für Meta das Passwort zu Ihrem
          Google-Account geben und umgekehrt?
        </p>
        <p>
          Damit Ihr Passwort verifiziert werden kann, muss Ihr Passwort ja
          irgendwo gespeichert sein. Vielleicht ist Ihr Passwort ja
          verschlüsselt, dass bedeutet aber trotzdem, dass der Onlinedienst Ihr
          Passwort kennt, denn er könnte es ja entschlüsseln. Diese Überlegung
          stellt uns vor ein riesiges Vertrauensproblem im Internet. Und alleine
          diese Überlegung sollte Ihnen klar machen, dass Sie pro Dienst ein
          unterschiedliches Passwort verwenden sollten.
        </p>
        <PlainPasswordDatabase />
        <p>
          Zum Glück gibt es aber spezielle "Verschlüsselungsverfahren" die nur
          in eine Richtung funktionieren. Diese Verfahren nennt man "Hashing".
        </p>
      </section>
      <Section>
        <h2>Hashing</h2>
        <p>
          Ein Hashing-Verfahren können Sie sich wie eine Verschlüsselung ohne
          Entschlüsselung vorstellen. Aber wozu ist so etwas gut? Das ist ganz
          einfach, sie können das Ergebnis von einem Hashing-Verfahren
          verwenden, um auf den korrekten Inhalt zu testen.
        </p>
        <p>
          Wie bereits bei der Verschlüsselung, ist es wichtig dass die
          Ergebnisse nach der Verschlüsselung eindeutig sind. Diese
          Eindeutigkeit können wir verwenden um zu testen ob die Eingabe
          identisch ist. Genau das brauchen wir für Passwörter. Hier ist es
          nicht wichtig das Passwort zu kennen, wir müssen nur testen können, ob
          das richtige Passwort eingegeben wurde. Am besten wir schauen uns ein
          Beispiel an, dann sollte alles viel klarer werden.
        </p>
        <HashedPasswordDatabase />
        <p>
          Ein Online-Dienstanbieter, speichert also nur den Hash zu Ihrem
          Passwort. Wenn dann eine Login-Anfrage von Ihnen kommt, wird Ihr
          Passwort direkt gehashed und mit dem Eintrag in der Datenbank
          verglichen. So kann einfach getestet werden, ob Sie das richtige
          Passwort kennen, ohne dass der Dienstanbieter Ihr eigentliches
          Passwort jemals gesehen hat. Das ist für unser Gewissen super gut,
          denn so müssen wir uns nicht darum kümmern was der Dienstanbieter mit
          diesem Passwort macht.
        </p>
      </Section>
      <section>
        <h2>Passwort Hacking</h2>
        <p>
          Wie Sie aber sicher schon erraten haben, ist das Hacken von
          Passwörtern sehr lukrativ. Hacker haben also sicher bereits einen Weg
          gesucht wie man diese Hashes umgehen kann. Und tatsächlich kann man
          das auch sehr einfach. Das ganze funktioniert mit einer einfachen
          <em>Brute-Force</em>-Attacke, wie wir das schon von der
          Verschlüsselung kennen. Wir versuchen also einfach das Passwort zu
          raten, denn wir können ja systematisch alle möglichen Passwörter
          durchgehen und jeweils den Hash prüfen.
        </p>
        <p>
          Von diesem Verfahren gibt es noch eine verbesserte Variante, denn man
          kann sich ganz einfach das Resultat auch speichern, dann werden diese
          Hash-Funktionen quasi umkehrbar, denn Sie können einfach die Hashes in
          der Datenbank suchen. Dieses Verfahren nennt man Rainbow-Tables.
        </p>
        <RainbowTable />
      </section>
      <Section>
        <h2>Rainbow-Tables</h2>
        <p>
          Eine Rainbow-Table ist im Prinzip etwas ganz einfaches. Es ist einfach
          nur eine Datenbank, in der alle bekannten Passwörter mit deren Hashes
          gespeichert werden. Einen Grundstock kann man ganz einfach selber
          schnell erzeugen, denn wir könnten alle möglichen Passwörter bis zur
          Länge 8 einfach generieren und deren Hashes berechnen lassen. Diese
          Resultate speichert man dann in einer Datenbank, und kann das auch mit
          anderen Teilen.
        </p>
        <p>
          Der Online-Dienst{" "}
          <a href="https://haveibeenpwned.com/">Have I Been Pwned</a> kann Ihnen
          anzeigen ob Ihre Passwörter in einer bekannten Rainbow-Table
          vorkommen, da können Sie das also schnell prüfen, und nötigenfalls
          Ihre Passwörter gleich ändern.
        </p>
        <p>
          Gegen schwache / kurze Passwörter ist eine solche Attacke sehr
          effektiv, denn wir können kurze Passwörter sehr schnell erzeugen und
          auch deren Hashes, so können wir unglaublich schnell testen was das
          eigentliche Passwort ist. Passwörter mit beliebigen Zeichen aber nur
          bis zu einer Länge von 6 Zeichen, können mit einem herkömmlichen
          Laptop in ca. 10 Minuten geknackt werden, und dafür wurden noch nicht
          einmal alle Kerne im Prozessor verwendet. Mit Zugriff zu mehreren
          starken GPUs, können kurze Passwörter sehr schnell geknackt werden,
          bzw man kann systematisch ganze Rainbow-Tables erzeugen und diese mit
          anderen Hackern teilen.
        </p>
        <p>
          Sie sehen also dass diese mühsamen Richtlinien über die Länge und
          Komplexität Ihres Passwortes durchaus ernst zu nehmen sind, denn
          ansonsten kann Ihr Passwort ganz schnell und einfach geknackt werden.
        </p>
        <h2>Schutz vor Rainbow-Tables</h2>
        <p>
          So wie das hier klingt, ist es nur eine Frage der Zeit bis alle
          Passwörter bis zu einer gewissen Länge geknackt sind, und man diese in
          einer Rainbow-Table finden kann. Zum Glück ist das nicht ganz so
          einfach wie es hier klingt, denn es gibt den einfachen Trick das
          Passwort zu <em>salzen</em>. Hier wird an einer bestimmten Position im
          Passwort ein zufälliger Text angehängt, und dann wird davon der Hash
          genommen und gespeichert. Auf diese Art wird eigentlich nur Ihr
          Passwort künstlich länger gemacht, so kann der Hash der gespeichert
          ist, nicht mehr in einer Rainbow-Table auftreten, und Ihr Passwort ist
          sicher. Oftmals werden für zusätzliche Sicherheit mehrere Runden des
          Hashes durchgeführt, oder es können auch mehrere Salze angewendet
          werden. Das Ziel dabei ist immer möglichst langwierige Arbeit für den
          Hacker zu machen, so dass er nicht mehrere Konten mit nur einem
          Aufwand knacken kann, sondern nur eines, und auch dieses nur mit
          unglaublich viel Aufwand. So lohnt es sich für einen Angreifer schnell
          nicht mehr, also müssen andere Arten des Passwort-Knackens erfunden
          werden.
        </p>
        <SaltedPasswordDatabase />
      </Section>
      <section>
        <h2>Phishing</h2>
        <p>
          Wie Sie gesehen haben, sind Passwörter sehr schwer zu knacken,{" "}
          <em>wenn</em> die richtigen Methoden angewendet werden. Da ein Hacker
          aber oft ein Passwort braucht um Zugang zu einem System zu bekommen,
          braucht es andere Methoden, um an Passwörter zu kommen. Sehr häufig
          wird dann <strong>social hacking</strong> verwendet. Hier geht es
          darum von einer Person das Passwort direkt zu erhalten. Die
          beliebteste Methode hier ist das <strong>Phishing</strong>.
        </p>
        <p>
          Beim <strong>Phishing</strong> werden sehr oft E-Mails versendet, mit
          der Aufforderung sich irgendwo einzuloggen. Was dann eigentlich
          passiert, ist das man sein Passwort und seine E-Mailadresse, oftmals
          noch den Benutzernamen an den Hacker direkt verschickt. So kann ein
          Hacker versuchen sich überall mit Ihren Zugangsdaten einzuloggen.
          Sollte er Zugriff auf Ihren Haupt-E-Mail-Account bekommen, ist das
          absolut verheerend, dann so kann er die Passwörter von all Ihren
          Accounts einfach zurücksetzen. Deshalb sollten Sie Ihren
          Haupt-E-Mail-Account so gut wie möglich schützen, am besten mit
          2-Faktor-Authentifizierung.
        </p>
        <p>
          Dank modernen KIs wird es immer wie schwieriger einen Phishing-Angriff
          zu erkennen. Die E-Mails können in guter Sprache verfasst werden, und
          die Webseite auf der Sie sich einloggen sieht aus wie das Original.
          Somit ist es also wichtig dass Sie immer prüfen wo Sie ein Link
          hinführt, ob dieser <strong>HTTPS</strong> aktiviert hat und auch ob
          die E-Mail von einer vertrauenswürdigen Adresse kommt.
        </p>
      </section>
      <Section>
        <h2>Passwort-Manager</h2>
        <p>
          Es ist schwierig sich so viele Passwörter zu merken und dann auch für
          jeden Account ein starkes Passwort zu haben, hier können Sie
          Passwort-Manager verwenden. Diese tippen die Passwörter automatisch
          für Sie ein, und Sie müssen sich die Passwörter nicht merken. So
          können Sie für jeden Account ein eigenes starkes Passwort machen.
          Falls der Passwort-Manager einmal nicht funktionieren sollte, können
          Sie das Passwort ja auch zurücksetzen lassen, und trotzdem Zugriff zum
          Dienst bekommen. So müssen Sie sich nur noch ganz wenige Passwörter
          merken können, und zwar:
        </p>
        <ul>
          <li>Passwort-Manager</li>
          <li>Haupt-E-Mail-Account</li>
          <li>Passwort für Ihren Computer</li>
          <li>Passwort zum Schulnetz</li>
          <li>Passwort für Ihr Smartphone</li>
        </ul>
        <p>
          Diese Liste kann natürlich variieren, vielleicht haben Sie noch mehr
          wichtige Dinge zu denen Sie Zugriff ohne Passwort-Manager brauchen,
          oder Sie haben den Zugriff zum Smartphone oder Computer nur über
          biometrische Sensoren ermöglicht.
        </p>
        <h3>Gefahren eines Passwort-Managers</h3>
        <p>
          Das Problem bei einem Passwort-Manager ist die Verschlüsselung. Hier
          können die Passwörter nicht gehashed gespeichert werden, da man die
          Passwörter ja entschlüsseln und eintippen können muss. Und immer wenn
          es Verschlüsselung gibt, ist es potenziell möglich diese zu knacken,
          oder den Dienst so auszunutzen, das er ein Passwort eintippt. Alles
          was es für uns komfortabler macht, mit der digitalen Welt umzugehen,
          ist meistens ein direktes Sicherheitsrisiko. Für Hacker ist es
          natürlich auch Interessant einen Dienst wie einen grossen
          Online-Passwort-Manager zu hacken, denn damit bekommen Sie direkt fast
          überall Zugriff. Das sollten Sie also alles bedenken wenn Sie einen
          Passwort-Manager auswählen.
        </p>
      </Section>
    </>
  );
}
