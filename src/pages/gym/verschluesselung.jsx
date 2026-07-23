import Caesar from "@components/Caesar";
import DataTable from "@components/DataTable/DataTable";
import AesSlide from "@components/gym/AesSlide/AesSlide";
import AesViz from "@components/gym/AesViz/AesViz";
import CaesarIntro from "@components/gym/CaesarIntro/CaesarIntro";
import {
  KeyspaceBars,
  KeyspaceBruteForce,
  KeyspaceCaesar,
} from "@components/gym/KeyspaceViz/KeyspaceViz";
import SignatureDiagram from "@components/gym/SignatureDiagram/SignatureDiagram";
import TlsHandshake from "@components/gym/TlsHandshake/TlsHandshake";
import VigenereSteps from "@components/gym/VigenereSteps/VigenereSteps";
import VigenereViz from "@components/gym/VigenereViz/VigenereViz";
import XorSlide from "@components/gym/XorSlide/XorSlide";
import XorSteps from "@components/gym/XorSteps/XorSteps";
import XorViz from "@components/gym/XorViz/XorViz";
import LearningGoals from "@components/LearningGoals.jsx";
import Section from "@components/Section.jsx";
import Vigenere from "@components/Vigenere";

export default function GymVerschluesselung() {
  return (
    <>
      <h1>Verschlüsselung</h1>
      <p>
        Jedes Datenpaket, das Sie im Internet verschicken, passiert viele
        Zwischenstationen — Router, Kabel, Mobilfunkantennen. Ohne
        Verschlüsselung kann jeder an diesen Stationen mitlesen. Verschlüsselung
        macht Daten für alle unleserlich, die den Schlüssel nicht kennen.
      </p>
      <p>
        Wir beginnen mit einfachen historischen Verfahren, um das Prinzip zu
        verstehen, und kommen dann zu den modernen Methoden, die im Internet
        wirklich eingesetzt werden.
      </p>

      <LearningGoals>
        <ul>
          <li>
            Sie können das Caesar- und das Vigenère-Verfahren auf Papier
            anwenden.
          </li>
          <li>
            Sie verstehen, was ein Schlüsselraum ist, und können seine Grösse
            bestimmen.
          </li>
          <li>
            Sie wissen, was eine Brute-Force-Attacke ist und warum ein grosser
            Schlüsselraum schützt.
          </li>
          <li>
            Sie verstehen, wie Text in Binärdaten umgewandelt wird und was
            XOR-Verschlüsselung bedeutet.
          </li>
          <li>
            Sie wissen, wie AES auf dem XOR-Prinzip aufbaut, und kennen die vier
            Operationen einer AES-Runde.
          </li>
          <li>
            Sie kennen den Unterschied zwischen symmetrischer und asymmetrischer
            Verschlüsselung.
          </li>
          <li>
            Sie verstehen, was digitale Signaturen sind und welche
            Sicherheitsziele sie erfüllen.
          </li>
          <li>Sie können den TLS-Handshake-Ablauf in Grundzügen erklären.</li>
        </ul>
      </LearningGoals>

      {/* ─── KLASSISCHE VERFAHREN ─────────────────────────────── */}

      <section>
        <h2>Das Caesar-Verfahren</h2>
        <p>
          Eines der ältesten bekannten Verschlüsselungsverfahren: Jeder
          Buchstabe wird um eine feste Anzahl Stellen im Alphabet verschoben.
          Mit dem Schlüssel 3 wird aus <strong>A</strong> ein <strong>D</strong>
          , aus <strong>B</strong> ein <strong>E</strong>, und so weiter.
        </p>
        <p>
          Sender und Empfänger kennen die Verschiebung — das ist der Schlüssel.
          Wer die Verschiebung nicht kennt, sieht eine sinnlose Buchstabenfolge.
        </p>
        <CaesarIntro />
        <h3>Interaktiv ausprobieren</h3>
        <p>
          Verschiebe das Alphabet und beobachte, wie sich der Klartext in
          Geheimtext verwandelt:
        </p>
        <Caesar />
      </section>

      <Section>
        <h2>Schlüsselraum und Brute-Force</h2>
        <p>
          Wie sicher ist das Caesar-Verfahren? Das hängt vom{" "}
          <strong>Schlüsselraum</strong> ab: der Menge aller möglichen
          Schlüssel. Beim Caesar-Verfahren gibt es genau{" "}
          <strong>26 mögliche Verschiebungen</strong> (0 bis 25).
        </p>
        <KeyspaceCaesar />
        <p>
          Eine <strong>Brute-Force-Attacke</strong> probiert systematisch alle
          Schlüssel durch. Bei Caesar reichen 26 Versuche — auch von Hand
          lösbar. Ein Computer schafft das in Nanosekunden.
        </p>
        <KeyspaceBruteForce />
        <p>
          Der Schlüsselraum muss gross genug sein, damit ein Angreifer — selbst
          mit schnellen Computern — nicht alle Möglichkeiten durchprobieren
          kann. Heute gilt: mindestens 2<sup>128</sup> mögliche Schlüssel.
        </p>
        <KeyspaceBars />
        <p>
          Neben reiner Brute-Force gibt es auch{" "}
          <strong>gezielte Angriffe</strong>: Im Deutschen kommen die Buchstaben{" "}
          <em>e</em> und <em>n</em> besonders häufig vor. Bei einem langen
          Caesar-verschlüsselten Text genügt eine Häufigkeitsanalyse, um die
          Verschiebung zu erraten. Das zeigt: Ein grosser Schlüsselraum allein
          reicht nicht — das Verfahren muss auch statistisch unauffällig
          verschlüsseln.
        </p>
      </Section>

      <section>
        <h2>Das Vigenère-Verfahren</h2>
        <p>
          Eine einfache Idee, den Schlüsselraum zu vergrössern: Statt einer
          einzigen Verschiebung für alle Buchstaben verwenden wir für jeden
          Buchstaben eine <em>andere</em> Verschiebung. Damit das handhabbar
          bleibt, nutzen wir ein <strong>Schlüsselwort</strong>: Jeder Buchstabe
          des Schlüsselworts gibt eine Verschiebung vor (a=0, b=1, … z=25). Das
          Schlüsselwort wird zyklisch wiederholt.
        </p>
        <VigenereViz />
        <p>
          Der Schlüsselraum wächst: Mit einem Schlüsselwort der Länge <em>n</em>{" "}
          gibt es 26<sup>n</sup> mögliche Schlüssel.
        </p>

        <h3>Schrittweise verschlüsseln</h3>
        <p>Hier sehen Sie, wie jeder Buchstabe einzeln verschoben wird:</p>
        <VigenereSteps />

        <h3>Das Vigenère-Quadrat</h3>
        <p>
          Alternativ kann man das Vigenère-Quadrat verwenden: Zeile =
          Schlüsselbuchstabe, Spalte = Klartextbuchstabe, Schnittpunkt =
          Geheimtextbuchstabe.
        </p>
        <Vigenere />
      </section>

      {/* ─── XOR & GRUNDLAGEN DIGITALER VERSCHLÜSSELUNG ──────────── */}

      <section>
        <h2>Vom Text zu den Daten — und das XOR-Verfahren</h2>
        <p>
          Caesar und Vigenère arbeiten mit Buchstaben. Computer kennen aber
          keine Buchstaben — sie kennen nur <strong>Zahlen</strong>, genauer
          gesagt: Folgen von Nullen und Einsen (Bits). Bevor wir verschlüsseln
          können, muss jedes Zeichen in eine Zahl umgewandelt werden. Das
          geschieht über die <strong>ASCII-Tabelle</strong>.
        </p>
        <p>
          Sobald wir Text als Binärdaten haben, können wir das{" "}
          <strong>XOR-Verfahren</strong> anwenden — eine der fundamentalen
          Operationen in der modernen Kryptographie und das Herzstück von AES.
        </p>
        <XorViz />

        <h3>Text zu Bits und Verschlüsselung — interaktiv</h3>
        <p>
          Gib Klartext und Schlüssel ein — sieh, wie jedes Zeichen Schritt für
          Schritt in Bits umgewandelt und dann mit XOR verschlüsselt wird:
        </p>
        <XorSlide defaultPlain="HALLO" defaultKey="key" />

        <h3>Schriftliches Nachrechnen</h3>
        <p>
          Hier kannst du die einzelnen XOR-Operationen auf Bit-Ebene
          nachvollziehen:
        </p>
        <XorSteps />
      </section>

      {/* ─── AES ──────────────────────────────────────────────────── */}

      <Section>
        <h2>Von XOR zu AES</h2>
        <p>
          XOR allein ist unsicher — bei bekanntem Klartext lässt sich der
          Schlüssel direkt ableiten. <strong>AES</strong> (Advanced Encryption
          Standard) kombiniert XOR mit weiteren Operationen in 10–14 Runden:
        </p>
        <DataTable
          headers={["Operation", "Beschreibung"]}
          rows={[
            [
              "SubBytes",
              "Jedes Byte wird durch eine fixe Tabelle (S-Box) ersetzt",
            ],
            [
              "ShiftRows",
              "Zeilen der 4×4-Byte-Matrix werden zyklisch verschoben",
            ],
            [
              "MixColumns",
              "Spalten werden mit einer Matrizenmultiplikation gemischt",
            ],
            [
              "AddRoundKey",
              "XOR mit dem Rundenschlüssel — hier kommt XOR zum Einsatz",
            ],
          ]}
        />
        <p>
          Schlüssellänge 128 Bit → 2<sup>128</sup> mögliche Schlüssel —
          praktisch unknackbar, selbst für die schnellsten Supercomputer.
        </p>
        <AesViz />

        <h3>Eine AES-Runde — Schritt für Schritt</h3>
        <p>
          Verfolge, wie sich die 16 Bytes durch SubBytes, ShiftRows, MixColumns
          und AddRoundKey verändern:
        </p>
        <AesSlide />
      </Section>

      {/* ─── MODERNE KRYPTOGRAPHIE ──────────────────────────────── */}

      <Section>
        <h2>Symmetrische vs. asymmetrische Verschlüsselung</h2>
        <p>
          Caesar und Vigenère sind <strong>symmetrisch</strong>: Sender und
          Empfänger brauchen denselben Schlüssel. Das Problem: Wie tauschen sie
          ihn sicher aus? Im Internet unmöglich — sie kennen sich ja nicht.
        </p>
        <p>
          <strong>Asymmetrische Verschlüsselung</strong> löst das mit einem
          Schlüsselpaar:
        </p>
        <DataTable
          headers={["Schlüssel", "Sichtbarkeit", "Verwendung"]}
          rows={[
            [
              "Öffentlicher Schlüssel (Public Key)",
              "Darf jeder wissen",
              "Verschlüsseln, Signaturen prüfen",
            ],
            [
              "Privater Schlüssel (Private Key)",
              "Streng geheim",
              "Entschlüsseln, Signaturen erstellen",
            ],
          ]}
        />
        <p>
          Was mit dem öffentlichen Schlüssel verschlüsselt wird, kann{" "}
          <strong>nur</strong> mit dem privaten Schlüssel entschlüsselt werden.
          Der private Schlüssel verlässt das Gerät nie.
        </p>
      </Section>

      <section>
        <h2>Drei Ziele der Kryptographie</h2>
        <DataTable
          headers={["Ziel", "Bedeutung", "Beispiel"]}
          rows={[
            [
              "Vertraulichkeit",
              "Nur Befugte können lesen",
              "Verschlüsselte Verbindung",
            ],
            [
              "Integrität",
              "Nachricht wurde nicht verändert",
              "Prüfsumme, HTTPS",
            ],
            [
              "Authentizität",
              "Absender ist wirklich der, der er behauptet zu sein",
              "Digitale Signatur",
            ],
          ]}
        />
        <p>
          Verschlüsselung allein garantiert nur Vertraulichkeit.{" "}
          <strong>Digitale Signaturen</strong> kommen für Integrität und
          Authentizität dazu.
        </p>
      </section>

      <Section>
        <h2>Digitale Signaturen</h2>
        <p>
          Eine digitale Signatur funktioniert umgekehrt zur Verschlüsselung: Der
          Absender signiert mit seinem <em>privaten</em> Schlüssel, jeder kann
          mit dem <em>öffentlichen</em> Schlüssel prüfen. Das beweist: Herkunft
          und Unverändertheit.
        </p>
        <SignatureDiagram />
      </Section>

      <section>
        <h2>TLS-Handshake — Schritt für Schritt</h2>
        <p>
          Wenn Ihr Browser <code>https://www.bank.ch</code> aufruft, läuft im
          Hintergrund dieser Prozess ab — in Millisekunden:
        </p>
        <TlsHandshake />
      </section>

      <Section>
        <h2>Zertifikatskette und Vertrauen</h2>
        <p>
          Woher weiss Ihr Browser, dass das Zertifikat echt ist? Durch eine{" "}
          <strong>Zertifikatskette</strong>:
        </p>
        <DataTable
          headers={["Ebene", "Beschreibung"]}
          rows={[
            [
              "Root-CA",
              "Im Browser vorinstalliert, bedingungslos vertrauenswürdig (~150 Root-CAs)",
            ],
            ["Intermediate CA", "Von Root-CA signiert (z.B. Let's Encrypt R3)"],
            [
              "Enduser-Zertifikat",
              "Von Intermediate CA signiert (z.B. www.bank.ch)",
            ],
          ]}
        />
        <p>
          HTTPS kombiniert alles: Diffie-Hellman für den Schlüsselaustausch,
          Zertifikate für die Identitätsprüfung, AES für den eigentlichen
          Datentransfer. Das Verfahren von Diffie-Hellman ist auf der
          Schlüsselaustausch-Seite genauer erklärt.
        </p>
      </Section>
    </>
  );
}
