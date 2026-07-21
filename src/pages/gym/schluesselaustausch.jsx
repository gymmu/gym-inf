import DhSteps from "@components/gym/DhSteps/DhSteps"
import LearningGoals from "@components/LearningGoals.jsx"
import Section from "@components/Section.jsx"

export default function GymSchluesselaustausch() {
  return (
    <>
      <h1>Diffie-Hellman-Schlüsselaustausch</h1>
      <p>
        Wie können Alice und Bob über eine abhörbare Leitung einen gemeinsamen
        geheimen Schlüssel vereinbaren, ohne ihn jemals zu übertragen? Das ist
        das Schlüsselaustausch-Problem — und Diffie-Hellman löst es mit
        Mathematik.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie verstehen das Schlüsselaustausch-Problem und warum es nicht
            trivial lösbar ist.
          </li>
          <li>
            Sie können den Diffie-Hellman-Schlüsselaustausch Schritt für Schritt
            mit eigenen Zahlen durchführen.
          </li>
          <li>
            Sie verstehen, warum der diskrete Logarithmus den Angreifer
            blockiert.
          </li>
          <li>
            Sie kennen die Schwäche von DH: fehlende Authentifizierung und
            Man-in-the-Middle-Angriffe.
          </li>
        </ul>
      </LearningGoals>

      <section>
        <h2>Das Problem</h2>
        <p>
          Alice und Bob möchten verschlüsselt kommunizieren und brauchen einen
          gemeinsamen geheimen Schlüssel. Aber alles, was sie schreiben, wird
          von Eve mitgelesen.
        </p>
        <ul>
          <li>Alice schickt den Schlüssel direkt → Eve liest ihn mit.</li>
          <li>
            Alice und Bob treffen sich vorher — funktioniert nicht für Millionen
            täglicher Verbindungen im Internet.
          </li>
        </ul>
        <p>
          Diffie und Hellman lösten dieses Problem 1976 mit einem eleganten
          mathematischen Trick.
        </p>
      </section>

      <Section>
        <h2>Die Farbmischungs-Analogie</h2>
        <p>
          Eine Farbe mischen ist einfach. Eine Mischfarbe wieder in ihre
          Bestandteile trennen ist praktisch unmöglich.
        </p>
        <ol>
          <li>
            Alice und Bob einigen sich öffentlich auf eine gemeinsame Farbe:{" "}
            <strong>Gelb</strong>.
          </li>
          <li>
            Alice wählt ihre geheime Farbe <strong>Blau</strong>, mischt: Gelb +
            Blau = <strong>Türkis</strong>. Schickt Türkis an Bob.
          </li>
          <li>
            Bob wählt seine geheime Farbe <strong>Rot</strong>, mischt: Gelb +
            Rot = <strong>Orange</strong>. Schickt Orange an Alice.
          </li>
          <li>Alice mischt Bobs Orange mit ihrem Blau: Gelb + Rot + Blau.</li>
          <li>Bob mischt Alices Türkis mit seinem Rot: Gelb + Blau + Rot.</li>
          <li>
            <strong>Beide haben die gleiche Mischfarbe</strong> — obwohl Eve nur
            Gelb, Türkis und Orange gesehen hat. Die Mischfarbe wurde nie
            übertragen.
          </li>
        </ol>
        <p>Diffie-Hellman macht genau das — nur mit Zahlen statt Farben.</p>
      </Section>

      <section>
        <h2>Die Mathematik: Modulare Potenzierung</h2>
        <p>
          Das mathematische Werkzeug ist die <strong>Modulo-Operation</strong>:
          der Rest einer ganzzahligen Division. Beispiel:{" "}
          <code>17 mod 5 = 2</code>.
        </p>
        <p>
          Modulare Potenzen sind leicht zu berechnen:{" "}
          <code>5⁶ mod 23 = 15625 mod 23 = 8</code>.
        </p>
        <p>
          Die Umkehrung aber — gegeben <code>8</code>, Basis <code>5</code>,
          Modulus <code>23</code>: was ist der Exponent? — ist das{" "}
          <strong>diskrete Logarithmus-Problem</strong>. Bei kleinen Zahlen
          lösbar, bei grossen Zahlen (2048 Bit) praktisch unlösbar. Genau das
          ist die Sicherheitsgrundlage.
        </p>
      </section>

      <Section>
        <h2>Das Protokoll — ausprobieren</h2>
        <p>
          Alice und Bob einigen sich öffentlich auf <strong>p</strong> (eine
          Primzahl) und <strong>g</strong> (einen Generator). Beide wählen je
          eine geheime Zahl (<strong>a</strong> bzw. <strong>b</strong>),
          berechnen daraus einen öffentlichen Wert, tauschen diesen aus und
          leiten unabhängig denselben gemeinsamen Schlüssel ab.
        </p>
        <p>
          Sie können die Zahlen selbst eingeben und das Verfahren live
          nachvollziehen:
        </p>
        <DhSteps />
      </Section>

      <section>
        <h2>Man-in-the-Middle — die Schwäche von DH</h2>
        <p>
          Diffie-Hellman löst das Schlüsselaustausch-Problem, bietet aber keine{" "}
          <strong>Authentifizierung</strong>. Eve kann sich als Mittelsmann
          einschalten:
        </p>
        <ul>
          <li>Alice schickt A → Eve fängt ab, antwortet mit eigenem E_a.</li>
          <li>Bob schickt B → Eve fängt ab, antwortet mit eigenem E_b.</li>
          <li>
            Eve führt zwei separate DH-Verbindungen — eine mit Alice, eine mit
            Bob — und kann alles lesen.
          </li>
        </ul>
        <p>
          <strong>Lösung:</strong> Digitale Zertifikate. Der Server beweist
          seine Identität durch eine von einer Zertifizierungsstelle signierte
          Unterschrift. Das ist Teil der Verschlüsselungsseite.
        </p>
      </section>

      <Section>
        <h2>Im echten Internet</h2>
        <p>
          In der Praxis (TLS/HTTPS) wird Diffie-Hellman auf elliptischen Kurven
          gerechnet (<strong>ECDHE</strong>). Das Prinzip ist identisch, aber
          die Zahlen sind kompakter — 256 Bit statt 3072 Bit für gleiche
          Sicherheit. Ausserdem werden die DH-Schlüssel für jede Verbindung neu
          generiert und danach gelöscht (<strong>Ephemeral</strong>): Selbst
          wenn der Serverschlüssel irgendwann kompromittiert wird, können
          vergangene Verbindungen nicht mehr entschlüsselt werden.
        </p>
        <p>
          Das nennt man <strong>Perfect Forward Secrecy</strong> — TLS 1.3
          erzwingt es.
        </p>
      </Section>
    </>
  )
}
