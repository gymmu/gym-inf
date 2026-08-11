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

      <section
        className="important"
        style={{
          padding: "2rem",
          marginBottom: "var(--space-xl)",
          borderRadius: "var(--radius-2xl)",
        }}
      >
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
        <h2>Wie wird Text im Computer gespeichert?</h2>
        <p>
          Bevor wir uns mit der Von-Neumann-Architektur auseinandersetzen, müssen
          wir verstehen was der <strong>Speicher</strong> eigentlich macht. Denn
          der Speicher ist der Ort an dem alles passiert — hier werden Daten
          gespeichert, verarbeitet und wieder ausgelesen.
        </p>

        <h3>Alles beginnt mit Bits</h3>
        <p>
          Der wichtigste Punkt den Sie verstehen müssen ist dieser: <strong>Der
          Computer muss zuerst absolut alles in Bits umwandeln.</strong> Egal ob
          Text, Bilder, Musik oder Programme — alles wird zu einer Sequenz von
          <span style={{ color: "var(--color-red)", fontWeight: "bold" }}> 0 </span>
          und
          <span style={{ color: "var(--color-green)", fontWeight: "bold" }}> 1 </span>
          .
        </p>
        <p>
          Stellen Sie sich vor Sie möchten den Text <strong>abc</strong> auf dem
          Computer speichern. Für Sie als Benutzer ist das ganz einfach: Sie tippen
          die Buchstaben auf die Tastatur, und der Text erscheint auf dem
          Bildschirm. Aber was passiert im Inneren des Computers?
        </p>
        <p>
          Der Computer kann keinen Text speichern. Der Computer kennt überhaupt
          keine Buchstaben, keine Wörter und keine Sätze. Der Computer kennt nur
          <strong>Bits</strong>. Das sind winzige elektronische Zellen die
          entweder den Wert <span style={{ color: "var(--color-red)" }}> 0 </span>
          oder
          <span style={{ color: "var(--color-green)" }}> 1 </span>
          haben können.
        </p>

        <h3>Vom Buchstaben zur Bit-Sequenz</h3>
        <p>
          Wenn Sie den Buchstaben <strong>a</strong> auf der Tastatur tippen, dann
          muss der Computer diesen Buchstaben zuerst in eine Sequenz von Bits
          umwandeln. Stellen Sie sich vor, der Computer hat eine Vereinbarung
          getroffen: Immer wenn er die folgende Sequenz von Bits sieht, interpretiert
          er diese als den Buchstaben <strong>a</strong>:
        </p>
        <div
          style={{
            backgroundColor: "var(--color-rgb-61-61-61)",
            padding: "1.5rem",
            borderRadius: "var(--radius-xl)",
            fontFamily: "monospace",
            fontSize: "1.2rem",
            textAlign: "center",
            letterSpacing: "0.3em",
          }}
        >
          0110 0001
        </div>
        <p>
          Das gleiche passiert mit den Buchstaben <strong>b</strong> und
          <strong>c</strong>:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "var(--space-md)",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>a</div>
            <div style={{ fontFamily: "monospace", fontSize: "1.1rem" }}>0110 0001</div>
          </div>
          <div>
            <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>b</div>
            <div style={{ fontFamily: "monospace", fontSize: "1.1rem" }}>0110 0010</div>
          </div>
          <div>
            <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>c</div>
            <div style={{ fontFamily: "monospace", fontSize: "1.1rem" }}>0110 0011</div>
          </div>
        </div>

        <h3>Der Speicherblock als Textfabrik</h3>
        <p>
          Und jetzt wird es interessant: Wenn Sie <strong>abc</strong> tippen, dann
          speichert der Computer einfach alle diese Bit-Sequenzen hintereinander im
          <strong>Speicher</strong> ab:
        </p>
        <div
          style={{
            backgroundColor: "var(--color-rgb-61-61-61)",
            padding: "1.5rem",
            borderRadius: "var(--radius-xl)",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            textAlign: "center",
            letterSpacing: "0.2em",
            overflowX: "auto",
          }}
        >
          0110 0001 0110 0010 0110 0011
        </div>
        <p>
          Und so entsteht ein Text auf dem Computer! Nichts weiter als eine lange
          Reihe von <span style={{ color: "var(--color-red)" }}> 0 </span>-en und
          <span style={{ color: "var(--color-green)" }}> 1 </span>-en, die der
          Computer als Buchstaben interpretiert.
        </p>

        <h3>Bits im Speicherblock zusammengesetzt</h3>
        <p>
          Stellen Sie sich den <strong>Speicherblock</strong> als eine lange Reihe
          von Zellen vor, jede Zelle speichert ein <strong>Byte</strong> (8 Bits).
          Wenn wir einen Text speichern, dann werden die Bits für jeden Buchstaben
          einfach hintereinander in diese Zellen geschrieben:
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px", backgroundColor: "var(--color-rgb-61-61-61)" }}>Speicherzelle</th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px", backgroundColor: "var(--color-rgb-61-61-61)" }}>Bits</th>
              <th style={{ border: "1px solid var(--color-gray)", padding: "8px", backgroundColor: "var(--color-rgb-61-61-61)" }}>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", textAlign: "center" }}>1</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace", textAlign: "center" }}>0110 0001</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", textAlign: "center" }}><strong>a</strong></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", textAlign: "center" }}>2</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace", textAlign: "center" }}>0110 0010</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", textAlign: "center" }}><strong>b</strong></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", textAlign: "center" }}>3</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", fontFamily: "monospace", textAlign: "center" }}>0110 0011</td>
              <td style={{ border: "1px solid var(--color-gray)", padding: "8px", textAlign: "center" }}><strong>c</strong></td>
            </tr>
          </tbody>
        </table>
        <p>
          Jeder Buchstabe bekommt seine eigene Speicherzelle. Zusammen ergeben
          diese Zellen den vollständigen Text. Der Computer muss sich nur merken
          wo jeder Buchstabe beginnt und wo er aufhört.
        </p>

        <div
          style={{
            backgroundColor: "var(--color-rgb-61-61-61)",
            padding: "1.5rem",
            borderRadius: "var(--radius-xl)",
            borderLeft: "4px solid var(--color-purple)",
          }}
        >
          <strong>Der entscheidende Punkt:</strong> Der Speicherblock ist wie eine
          <strong>Textfabrik</strong>. Er nimmt einzelne Buchstaben, wandelt sie in
          Bits um, und speichert diese Bits hintereinander. Wenn wir den Text wieder
          auslesen, macht der Computer genau das Gegenteil: Er liest die Bits aus
          und wandelt sie wieder in Buchstaben um.
        </div>

        <h3>Was die Lernenden verstehen sollen</h3>
        <p>
          Der wichtigste Punkt den Sie sich merken sollten ist dieser:
          <strong> Der Computer muss zuerst absolut alles in Bits umwandeln.</strong>
          Egal ob Text, Bilder, Musik oder Programme — alles wird zu einer Sequenz
          von <span style={{ color: "var(--color-red)" }}> 0 </span>-en und
          <span style={{ color: "var(--color-green)" }}> 1 </span>-en.
        </p>
        <p>
          Das bedeutet nicht dass der Computer die Bits tatsächlich umwandelt. Der
          Computer arbeitet nur mit den Bits die ihm zur Verfügung gestellt werden.
          Die Umwandlung von Buchstaben in Bits geschieht durch die Vereinbarung
          die wir treffen.
        </p>

        <MemoryStackVisualizer mode="interactive" />
      </section>

      <section
        className="highlight"
        style={{
          padding: "2rem",
          marginBottom: "var(--space-xl)",
          borderRadius: "var(--radius-2xl)",
        }}
      >
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
        <p>
          Denken Sie daran: Der Computer kennt keine Buchstaben, keine Bilder und
          keine Musik. Der Computer kennt nur Bits. Alles was wir auf dem Computer
          speichern, muss zuerst in eine Sequenz von Bits umgewandelt werden.
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
