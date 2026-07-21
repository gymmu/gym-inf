import DataTable from "@components/DataTable/DataTable"
import LearningGoals from "@components/LearningGoals.jsx"
import Section from "@components/Section.jsx"

export default function GymPasswoerter() {
  return (
    <>
      <h1>Passwörter und Authentifizierung</h1>
      <p>
        Passwörter sind die älteste und verbreitetste Methode zur
        Authentifizierung im Internet. Aber wie sicher sind sie wirklich? In
        diesem Kapitel schauen wir uns an, wie Passwörter serverseitig
        gespeichert werden, welche Angriffe es gibt, wie moderne
        Authentifizierungsverfahren Passwörter ergänzen oder ersetzen, und wie
        ein Passwortmanager technisch funktioniert.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie verstehen, wie Passwörter mit Hashing und Salting sicher
            gespeichert werden.
          </li>
          <li>
            Sie kennen die wichtigsten Angriffsmethoden (Brute-Force, Rainbow
            Tables, Credential Stuffing, Phishing).
          </li>
          <li>
            Sie wissen, wie Zwei-Faktor-Authentifizierung (2FA) funktioniert und
            welche Typen es gibt.
          </li>
          <li>
            Sie kennen FIDO2/Passkeys als passwortlosen
            Authentifizierungsstandard und seine technische Grundlage.
          </li>
          <li>
            Sie verstehen, wie ein Passwortmanager Passwörter sicher speichert
            und abruft.
          </li>
        </ul>
      </LearningGoals>

      <section>
        <h2>Wie werden Passwörter gespeichert?</h2>

        <h3>Schlechte Methode: Klartext</h3>
        <p>
          Passwörter im Klartext zu speichern ist das Schlimmste, was ein Dienst
          tun kann. Bei einem Datenbankeinbruch sind alle Passwörter sofort
          lesbar. Leider passiert das bis heute: RockYou (2009): 32 Mio.
          Passwörter im Klartext, Adobe (2013): 150 Mio. schwach verschlüsselte
          Passwörter.
        </p>

        <h3>Hashing</h3>
        <p>
          <strong>Hash-Funktionen</strong> sind mathematische Einwegfunktionen:
          deterministisch (gleiche Eingabe → gleicher Hash), Einweg (kein
          Rückweg), kollisionsresistent.
        </p>
        <p>
          Beim Login berechnet der Server den Hash des eingegebenen Passworts
          und vergleicht ihn mit dem gespeicherten Hash. Der Server kennt das
          Passwort selbst nie.
        </p>
        <DataTable
          caption="Geeignete Hash-Algorithmen für Passwörter"
          headers={["Algorithmus", "Eigenschaft", "Empfehlung"]}
          rows={[
            [
              "bcrypt",
              "Eingebautes Salting, einstellbarer Work Factor",
              "Weit verbreitet, gut",
            ],
            [
              "Argon2",
              "Gewinner Password Hashing Competition 2015",
              "Aktuell empfohlen",
            ],
            ["scrypt", "Speicher-intensiv, erschwert GPU-Angriffe", "Gut"],
            [
              "SHA-256 / MD5",
              "Zu schnell! Milliarden Hashes/Sekunde auf GPU",
              "Nicht geeignet!",
            ],
          ]}
        />

        <h3>Salting</h3>
        <p>
          <strong>Problem mit einfachem Hashing:</strong> Gleiche Passwörter
          erzeugen gleiche Hashes → Rainbow Tables.
        </p>
        <p>
          <strong>Lösung: Salt</strong> — eine zufällige, einzigartige
          Zeichenkette, die vor dem Hashing ans Passwort angehängt wird. Der
          Salt wird im Klartext neben dem Hash gespeichert — unproblematisch,
          denn er macht Rainbow Tables unbrauchbar. Ein Angreifer müsste für
          jeden Nutzer neu eine Brute-Force-Attacke starten.
        </p>
      </section>

      <Section>
        <h2>Angriffsmethoden</h2>

        <h3>Brute-Force</h3>
        <p>Systematisches Durchprobieren aller möglichen Kombinationen:</p>
        <DataTable
          caption="Brute-Force-Zeiten bei 10⁹ Hashes/Sekunde (SHA-256, ohne Salt)"
          headers={["Zeichensatz", "Passwortlänge 8", "Zeit"]}
          rows={[
            ["Nur Ziffern (10 Zeichen)", "10⁸ = 100 Mio.", "< 1 Sekunde"],
            ["Nur Kleinbuchstaben (26)", "26⁸ ≈ 200 Mrd.", "~3 Minuten"],
            ["Klein+Gross+Ziffern (62)", "62⁸ ≈ 218 Bio.", "~60 Stunden"],
            ["Alle Sonderzeichen (95)", "95⁸ ≈ 6.6 Bio.", "~76 Tage"],
          ]}
        />
        <p>
          <strong>Mit bcrypt (Work Factor 12):</strong> Nur ~100 Hashes/Sekunde
          → 76 Tage werden zu 2000 Jahren!
        </p>

        <DataTable
          caption="Übersicht Angriffsmethoden"
          headers={["Methode", "Funktionsweise", "Gegenmassnahme"]}
          rows={[
            [
              "Brute-Force",
              "Alle Kombinationen durchprobieren",
              "bcrypt/Argon2, langsame Hashes",
            ],
            [
              "Dictionary-Angriff",
              "Bekannte Passwörter aus rockyou.txt ausprobieren",
              "Kein Wörterbuch-Passwort verwenden",
            ],
            [
              "Rainbow Tables",
              "Vorgefertigte Hash→Passwort-Tabellen",
              "Salting macht sie wertlos",
            ],
            [
              "Credential Stuffing",
              "Gestohlene Login-Daten bei anderen Diensten testen",
              "Einzigartiges Passwort pro Dienst",
            ],
            [
              "Phishing",
              "Nutzer gibt Passwort selbst preis",
              "FIDO2/Passkeys, Aufmerksamkeit",
            ],
          ]}
        />
      </Section>

      <section>
        <h2>Zwei-Faktor-Authentifizierung (2FA)</h2>
        <p>
          Das Prinzip von 2FA: Authentifizierung durch{" "}
          <strong>zwei verschiedene Faktoren</strong> aus unterschiedlichen
          Kategorien:
        </p>
        <DataTable
          headers={["Faktor", "Kategorie", "Beispiel"]}
          rows={[
            ["Etwas, das Sie wissen", "Knowledge", "Passwort, PIN"],
            [
              "Etwas, das Sie haben",
              "Possession",
              "Smartphone, Hardware-Token",
            ],
            [
              "Etwas, das Sie sind",
              "Inherence",
              "Fingerabdruck, Gesichtserkennung",
            ],
          ]}
        />

        <h3>TOTP — Time-based One-Time Password (RFC 6238)</h3>
        <p>Das verbreitetste 2FA-Verfahren für Web-Dienste:</p>
        <ol>
          <li>
            Bei der Einrichtung teilt der Server einen{" "}
            <strong>Secret Key</strong> (Base32-kodiert) mit der
            Authenticator-App (oft als QR-Code).
          </li>
          <li>
            Beim Login berechnen sowohl Server als auch App unabhängig:{" "}
            <code>TOTP = HMAC-SHA1(secret_key, floor(Unix-Zeit / 30))</code>
          </li>
          <li>
            Das Ergebnis wird auf 6 Stellen gekürzt und ist{" "}
            <strong>30 Sekunden gültig</strong>.
          </li>
        </ol>
        <p>
          Jeder Code ist einmalig und zeitgebunden. Phishing ist trotzdem
          möglich (Echtzeit-Weitergabe), daher besser: FIDO2.
        </p>

        <DataTable
          caption="2FA-Methoden im Vergleich"
          headers={["Methode", "Sicherheitsniveau", "Bemerkung"]}
          rows={[
            ["SMS-2FA", "Niedrig", "SS7-Angriffe, SIM-Swapping möglich"],
            [
              "TOTP (Authenticator-App)",
              "Mittel",
              "Phishing in Echtzeit noch möglich",
            ],
            [
              "Hardware-Token (FIDO U2F)",
              "Hoch",
              "Stärkstes 2FA für kontobasierte Dienste",
            ],
            ["Passkeys (FIDO2)", "Sehr hoch", "Vollständig phishing-resistent"],
          ]}
        />
      </section>

      <Section>
        <h2>FIDO2 / Passkeys — Die passwortlose Zukunft</h2>
        <p>
          <strong>FIDO2</strong> ist ein offener Standard der FIDO Alliance, der
          Passwörter durch kryptographisch starke Authentifizierung ersetzt.{" "}
          <strong>Passkeys</strong> sind die Implementierung von FIDO2 in iOS,
          Android, Windows und macOS.
        </p>

        <h3>Wie Passkeys funktionieren</h3>
        <p>FIDO2 basiert auf asymmetrischer Kryptographie:</p>
        <DataTable
          caption="Registrierung und Anmeldung mit Passkeys"
          headers={["Phase", "Ablauf"]}
          rows={[
            [
              "Registrierung",
              "Gerät generiert Schlüsselpaar. Öffentlicher Schlüssel → Server. Privater Schlüssel bleibt im sicheren Element (Secure Enclave, TPM).",
            ],
            [
              "Anmeldung",
              "Server schickt zufällige Challenge. Gerät signiert Challenge mit privatem Schlüssel (nach Biometrie/PIN). Server verifiziert Signatur mit öffentlichem Schlüssel.",
            ],
          ]}
        />

        <DataTable
          caption="Passwort + TOTP vs. Passkey"
          headers={["Eigenschaft", "Passwort + TOTP", "Passkey"]}
          rows={[
            [
              "Phishing-resistent",
              "Nein (Echtzeit-Weitergabe möglich)",
              "Ja (Domain in Signatur eingebettet)",
            ],
            [
              "Brute-Force möglich",
              "Ja",
              "Nein (privater Schlüssel niemals übertragen)",
            ],
            [
              "Datenbank-Einbruch",
              "Passwort-Hash gestohlen",
              "Nur öffentlicher Schlüssel → wertlos",
            ],
            [
              "Benutzerfreundlichkeit",
              "Mühsam (Passwort + Code)",
              "Einfach (Fingerabdruck)",
            ],
          ]}
        />
        <p>
          <strong>Phishing-Schutz durch Domain-Binding:</strong> Die Challenge
          enthält die Domain des Servers. Eine gefälschte Seite{" "}
          <code>examp1e.com</code> kann die Signatur für{" "}
          <code>example.com</code> nicht verwenden.
        </p>
      </Section>

      <section>
        <h2>Passwortmanager — Wie funktionieren sie technisch?</h2>
        <p>
          Ein guter Passwortmanager speichert für jeden Dienst ein
          einzigartiges, langes, zufälliges Passwort — Credential Stuffing wird
          wirkungslos.
        </p>

        <h3>Technischer Aufbau</h3>
        <p>
          <strong>Master-Passwort → Schlüsselableitung:</strong>
        </p>
        <p>
          <code>
            Master-Passwort + Salt → PBKDF2/Argon2 → Vault-Schlüssel (256 Bit)
          </code>
        </p>
        <p>
          PBKDF2 ist absichtlich langsam — das macht Brute-Force gegen das
          Master-Passwort teuer.
        </p>
        <p>
          <strong>Vault-Verschlüsselung:</strong>{" "}
          <code>Vault-Daten (JSON) → AES-256-GCM → verschlüsselter Blob</code>
        </p>

        <h3>Zero-Knowledge-Architektur</h3>
        <p>
          Bei Diensten wie Bitwarden oder 1Password wird nur der verschlüsselte
          Blob auf Servern gespeichert. Der Vault-Schlüssel wird aus dem
          Master-Passwort <strong>lokal abgeleitet</strong>. Der Anbieter sieht
          die Passwörter <strong>niemals</strong>.
        </p>

        <DataTable
          caption="Wichtige Kriterien bei der Wahl eines Passwortmanagers"
          headers={["Kriterium", "Bedeutung"]}
          rows={[
            [
              "Open Source",
              "Code öffentlich → unabhängige Prüfung möglich (z.B. Bitwarden)",
            ],
            [
              "Unabhängige Audits",
              "Externe Sicherheitsfirmen prüfen regelmässig",
            ],
            [
              "Zero-Knowledge",
              "Anbieter kann nicht auf Ihre Passwörter zugreifen",
            ],
            ["2FA für den Manager selbst", "Besonders wichtig!"],
          ]}
        />
      </section>

      <Section>
        <h2>Zusammenfassung</h2>
        <p>
          Passwörter werden sicher durch <strong>Hashing + Salting</strong>{" "}
          (idealerweise bcrypt oder Argon2) gespeichert. Angriffe wie
          Brute-Force, Rainbow Tables und Credential Stuffing unterstreichen,
          warum einzigartige, lange Passwörter nötig sind.{" "}
          <strong>Zwei-Faktor-Authentifizierung</strong> mit TOTP erhöht die
          Sicherheit erheblich; SMS-2FA ist unsicher.{" "}
          <strong>FIDO2/Passkeys</strong> ersetzen Passwörter durch
          kryptographisch starke Public-Key-Authentifizierung und sind als
          einzige Methode komplett phishing-resistent.{" "}
          <strong>Passwortmanager</strong> ermöglichen einzigartige Passwörter
          für alle Dienste und schützen sie mit Zero-Knowledge-Verschlüsselung.
        </p>
      </Section>
    </>
  )
}
