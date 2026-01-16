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
      </Section>
    </>
  );
}
