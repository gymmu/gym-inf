import LearningGoals from "@components/LearningGoals";
import Section from "@components/Section";

export default function Passwoerter() {
  return (
    <>
      <h1>Passwörter</h1>
      <p>
        Das ein sicherer Umgang mit Passwörtern wichtig ist, und das welche
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
          Dienst ein anderes Passwort? Falls nicht, weshalb nicht? Erschient es
          Ihnen nicht unlogisch, das Sie für Meta das Passwort zu Ihrem
          Google-Account geben und umgekehrt?
        </p>
        <p>
          Damit Ihr Passwort verifiziert werden kann, muss Ihr Passwort ja
          irgendwo gespeichert sein. Vielleicht ist Ihr Passwort ja
          verschlüsselt, das bedeutet aber trotzdem, dass der Onlinedienst Ihr
          Passwort kennt, denn er könnte es ja entschlüsseln. Diese Überlegung
          stellt uns vor ein riesiges Vertrauensproblem im Internet. Und alleine
          diese Überlegung sollte Ihnen klar machen, dass Sie pro Dienst ein
          unterschiedliches Passwort verwenden sollten.
        </p>
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
          Wie bereits bei der Verschlüsselung, ist es wichtig das die Ergebnisse
          nach der Verschlüsselung eindeutig sind. Diese Eindeutigkeit können
          wir verwenden um zu testen ob die Eingabe identisch ist. Genau das
          brauchen wir für Passwörter. Hier ist es nicht wichtig das Passwort zu
          kennen, wir müssen nur testen können, ob das richtige Passwort
          eingegeben wurde. Am besten wir schauen und ein Beispiel an, dann
          sollte alles viel klarer werden.
        </p>
        {/* 
          Beispiel für Datenbankauszug mit Passwörter, bzw den Hashes.
          */}
        <p>
          Ein Online-Dienstanbieter, speichert also nur den Hash zu Ihrem
          Passwort. Wenn dann eine Login-Anfrage von Ihnen kommt, wird Ihr
          Passwort direkt gehashed und mit dem Eintrag in der Datenbank
          verglichen. So kann einfach getestet werde, ob Sie das richtige
          Passwort kennen, ohne das der Dienstanbieter Ihr eigentliches Passwort
          jemals gesehen hat. Das ist für unser Gewissen super gut, denn so
          müssen wir uns nicht darum kümmern was der Dienstanbieter mit diesem
          Passwort macht.
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
          Sie sehen also das diese mühsamen Richtlinien über die Länge und
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
          werden. Das Ziel dabei ist immer möglichst viel lange Arbeit für den
          Hacker zu machen, so das er nicht mehrere Konten mit nur einem Aufwand
          knacken kann, sondern nur eines, und auch dieses nur mit unglaublich
          viel Aufwand. So lohnt es sich für einen Angreifer schnell nicht mehr,
          also müssen andere Arten des Passwort-Knackens erfunden werden.
        </p>
      </Section>
      <section>
        <h2>Phishing</h2>
      </section>
    </>
  );
}
