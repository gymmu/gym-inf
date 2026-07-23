import ConverterVisualizer from "@components/ConverterVisualizer";
import MemoryStackVisualizer from "@components/MemoryStackVisualizer";
import VonNeumannDiagram from "@components/VonNeumannDiagram";

export default function FmsHardware() {
  return (
    <>
      <section>
        <h2>Was ist ein Computer?</h2>
        <p>
          Der Begriff <strong>Computer</strong> kommt vom englischen Wort{" "}
          <em>compute</em>, das so viel bedeutet wie <em>berechnen</em>. Ein
          Computer ist also in seinem Kern eine Rechenmaschine — sehr
          fortgeschritten, aber trotzdem nur eine Rechenmaschine.
        </p>
        <p>
          Wichtig zu verstehen: Der Computer kennt{" "}
          <strong>nur zwei Zustände</strong>! Er kann etwas entweder{" "}
          <strong>laden</strong> oder <strong>nicht laden</strong>. Es gibt
          keine Dimmfunktion, keine grauen Zwischentöne. Nur{" "}
          <span style={{ color: "var(--color-red)", fontWeight: "bold" }}>
            0
          </span>{" "}
          und{" "}
          <span style={{ color: "var(--color-green)", fontWeight: "bold" }}>
            1
          </span>
          .
        </p>
      </section>

      <section
        className="highlight"
        style={{
          padding: "2rem",
          marginBottom: "var(--space-xl)",
          borderRadius: "var(--radius-2xl)",
        }}
      >
        <h2>Die Von-Neumann-Architektur</h2>
        <p>
          Moderner Computer folgen der <strong>Von-Neumann-Architektur</strong>,
          benannt nach dem Mathematiker John von Neumann. Diese Architektur
          beschreibt, wie die wichtigsten Komponenten eines Computers
          zusammenarbeiten.
        </p>
        <VonNeumannDiagram />
        <p>In dieser Architektur gibt es drei zentrale Bestandteile:</p>
        <ul>
          <li>
            <strong>CPU</strong> (Central Processing Unit): Die zentrale
            Recheneinheit, die Befehle ausführt
          </li>
          <li>
            <strong>RAM</strong> (Random Access Memory): Der Arbeitsspeicher,
            der Daten und Programme speichert
          </li>
          <li>
            <strong>Eingabe/Ausgabe</strong>: Geräte wie Tastatur, Maus,
            Bildschirm
          </li>
        </ul>
      </section>

      <section>
        <h2>Der Speicher: Wo alles gespeichert wird</h2>
        <p>
          Der <strong>Speicher</strong> ist das Herzstück jedes Computers. Er
          speichert alle Daten — den Text, den du gerade liest, die Bilder, die
          Musik, ja sogar die Programme selbst!
        </p>
        <MemoryStackVisualizer />
      </section>

      <section
        className="highlight"
        style={{
          padding: "2rem",
          marginBottom: "var(--space-xl)",
          borderRadius: "var(--radius-2xl)",
        }}
      >
        <h2>Wie ist 'Hallo Welt!' im Speicher gespeichert?</h2>
        <p>
          Der Text <strong>Hallo Welt!</strong> besteht aus 11 Zeichen. Jedes
          Zeichen wird im Speicher als ein Byte (8 Bits) abgelegt.
        </p>
        <ul>
          <li>
            Ein Byte besteht aus exactly 8 bits, die jeweils den Zustand 0 oder 1
            haben können
          </li>
          <li>
            Durch die Kombination dieser 8 bits kann jedes Zeichen eine Zahl von
            0 bis 255 darstellen — das ist der ASCII-Wert
          </li>
          <li>
            Der Computer speichert also nicht "H", "a", etc. direkt, sondern nur
            die Binärzahlen, die diesen Zeichen entsprechen
          </li>
        </ul>

        <h3>ASCII-Werte und binäre Darstellung</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>Zeichen</th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>ASCII-Wert</th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>Binär (8-bit)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>H</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>72</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01001000</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>a</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>97</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01100001</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>l</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>108</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01101100</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>l</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>108</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01101100</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>o</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>111</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01101111</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}> </td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>32</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>00100000</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>W</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>87</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01010111</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>e</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>101</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01100101</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>l</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>108</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01101100</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>t</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>116</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>01110100</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>!</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px" }}>33</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace" }}>00100001</td>
            </tr>
          </tbody>
        </table>

        <p>
          Nach dem Text "Hallo Welt!" folgen im Speicher freie Zellen (hier als
          Punkte dargestellt), die noch keine Daten enthalten. Der Speicher setzt
          sich in beide Richtungen unendlich fort — nach oben hin mit immer
          höheren Adressen und nach unten hin mit immer niedrigeren Adressen.
        </p>

        <MemoryStackVisualizer />
      </section>

      <section>
        <h2>Von der Realwelt zu den Bits</h2>
        <p>
          Um Daten auf dem Computer zu speichern, müssen wir sie von unserer
          Welt in die Welt der{" "}
          <span style={{ color: "var(--color-red)", fontWeight: "bold" }}>
            0
          </span>{" "}
          und{" "}
          <span style={{ color: "var(--color-green)", fontWeight: "bold" }}>
            1
          </span>{" "}
          übersetzen. Dieser Prozess ist der Schlüssel zum Verständnis, wie
          Computer arbeiten.
        </p>
        <ConverterVisualizer />
      </section>

      <section>
        <h2>Wie der Computer Daten verarbeitet</h2>
        <p>Wenn du eine Taste drückst, passiert Folgendes:</p>
        <ol>
          <li>
            <strong>Eingabe:</strong> Die Tastatur sendet ein elektrisches
            Signal
          </li>
          <li>
            <strong>Übersetzung:</strong> Das Signal wird in Bits umgewandelt
          </li>
          <li>
            <strong>Speicherung:</strong> DieBits werden im RAM gespeichert
          </li>
          <li>
            <strong>Verarbeitung:</strong> Die CPU liest die Daten aus dem RAM
            und verarbeitet sie
          </li>
        </ol>
        <p>
          Wichtig zu verstehen: Es gibt für den Computer keinen Unterschied
          zwischen einem Buchstaben, einer Zahl oder einem Befehl. Alles ist nur
          eine Bitfolge!
        </p>
      </section>

      <section
        className="highlight"
        style={{
          padding: "2rem",
          marginBottom: "var(--space-xl)",
          borderRadius: "var(--radius-2xl)",
        }}
      >
        <h2>RAM vs. Festplatte</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-xl)",
          }}
        >
          <div
            className="highlight"
            style={{
              padding: "1.5rem",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <h3 style={{ color: "var(--color-blue)" }}>
              RAM (Arbeitsspeicher)
            </h3>
            <ul>
              <li>Sehr schnell</li>
              <li>Flüchtig — Daten gehen verloren bei Stromausfall</li>
              <li>Wird für laufende Programme verwendet</li>
              <li>Kostenintensiver pro Speichereinheit</li>
            </ul>
          </div>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--color-rgb-61-61-61)",
              borderRadius: "var(--radius-xl)",
              borderLeft: "4px solid var(--color-green)",
            }}
          >
            <h3 style={{ color: "var(--color-green)" }}>
              Festplatte (Langzeitspeicher)
            </h3>
            <ul>
              <li>Langsam</li>
              <li>Dauerhaft — Daten bleiben auch ohne Strom erhalten</li>
              <li>Wird für gespeicherte Dateien verwendet</li>
              <li>Günstiger pro Speichereinheit</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="important"
        style={{
          padding: "2rem",
          marginBottom: "var(--space-xl)",
          borderRadius: "var(--radius-2xl)",
        }}
      >
        <h2>Zusammenfassung</h2>
        <div
          style={{
            padding: "1.5rem",
            backgroundColor: "var(--color-rgb-61-61-61)",
            borderRadius: "var(--radius-xl)",
            borderLeft: "4px solid var(--color-purple)",
          }}
        >
          <strong>Wichtige Erkenntnisse:</strong>
          <ul>
            <li>
              Ein Computer ist eine Rechenmaschine, die nur mit{" "}
              <span style={{ color: "var(--color-red)", fontWeight: "bold" }}>
                0
              </span>{" "}
              und{" "}
              <span style={{ color: "var(--color-green)", fontWeight: "bold" }}>
                1
              </span>{" "}
              arbeitet
            </li>
            <li>
              Der Speicher (RAM) ist das Herzstück — er hält alle Daten als
              Bitfolgen
            </li>
            <li>
              Daten aus der Realwelt müssen erst in Bits übersetzt werden, bevor
              der Computer damit arbeiten kann
            </li>
            <li>
              Die Von-Neumann-Architektur beschreibt, wie CPU, RAM und
              Eingabe/Ausgabe zusammenarbeiten
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

