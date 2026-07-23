export default function VonNeumannDiagram() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
    },
    title: {
      marginBottom: "2rem",
      color: "#333",
    },
    diagram: {
      position: "relative",
      width: "700px",
      height: "350px",
    },
    componentBox: (x, y, width, height, color) => ({
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem 0.5rem",
      boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
    }),
    componentLabel: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "var(--color-white)",
      textAlign: "center",
    },
    ramSubLabel: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#fff",
    },
    busCenterBox: (x, y, width, height, color) => ({
      position: "absolute",
      left: `${x}px`,
      top: `${y}px`,
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem 2rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }),
    busCenterLabel: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      color: "#000",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Von-Neumann-Architektur</h2>

      <div style={styles.diagram}>
        {/* CPU - links positioniert */}
        <div
          style={styles.componentBox(60, 40, 160, 90, "var(--color-purple)")}
        >
          <span style={styles.componentLabel}>CPU</span>
          <span
            style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff" }}
          >
            Prozessor
          </span>
        </div>

        {/* RAM - rechts positioniert */}
        <div
          style={styles.componentBox(480, 40, 160, 90, "var(--color-blue)")}
        >
          <span style={styles.componentLabel}>RAM</span>
          <span
            style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff" }}
          >
            Arbeitsspeicher
          </span>
        </div>

        {/* Tastatur - unten links */}
        <div
          style={styles.componentBox(50, 170, 130, 70, "var(--color-green)")}
        >
          <span style={styles.componentLabel}>Tastatur</span>
        </div>

        {/* Bildschirm - unten rechts */}
        <div
          style={styles.componentBox(520, 170, 130, 70, "var(--color-orange)")}
        >
          <span style={{ ...styles.componentLabel, padding: "0.5rem" }}>
            Bildschirm
          </span>
        </div>

        {/* BUS - zentrale Position tiefer */}
        <div style={styles.busCenterBox(280, 160, 140, 80, "#ff9800")}>
          <span style={styles.busCenterLabel}>BUS</span>
          <span
            style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#000" }}
          >
            Daten- & Adressbus
          </span>
        </div>

        {/* Verbindungen mit SVG */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "700px",
            height: "350px",
          }}
          aria-label="Von-Neumann-Architektur mit Datenfluss"
        >
          {/* Eingabe (Tastatur) → BUS */}
          <line
            x1="180"
            y1="205"
            x2="280"
            y2="200"
            stroke="var(--color-green)"
            strokeWidth="2"
          />

          {/* BUS → Ausgabe (Bildschirm) */}
          <line
            x1="420"
            y1="200"
            x2="520"
            y2="205"
            stroke="var(--color-orange)"
            strokeWidth="2"
          />

          {/* CPU → BUS */}
          <line
            x1="220"
            y1="85"
            x2="350"
            y2="160"
            stroke="var(--color-purple)"
            strokeWidth="2"
          />

          {/* RAM → BUS (Lesen/Schreiben) */}
          <line
            x1="480"
            y1="85"
            x2="350"
            y2="160"
            stroke="var(--color-blue)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          backgroundColor: "var(--color-bg-lighter)",
          borderRadius: "8px",
          maxWidth: "600px",
        }}
      >
        <h3 style={{ marginBottom: "1rem", color: "#333" }}>
          Wie arbeitet die Architektur?
        </h3>

        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--color-white)",
            borderRadius: "8px",
            marginBottom: "1rem",
            borderLeft: "4px solid #9c27b0",
          }}
        >
          <strong>1. CPU holt Instruktion:</strong>
          Die CPU sendet eine Adresse über den Adressbus an RAM und fragt die
          Instruktion ab. Diese kommt zurück über den Datenbus.
        </div>

        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--color-white)",
            borderRadius: "8px",
            marginBottom: "1rem",
            borderLeft: "4px solid #ff9800",
          }}
        >
          <strong>2. CPU dekodiert:</strong>
          Die CPU versteht die Instruktion und bereitet die Ausführung vor.
        </div>

        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--color-white)",
            borderRadius: "8px",
            marginBottom: "1rem",
            borderLeft: "4px solid #2196f3",
          }}
        >
          <strong>3. CPU führt aus:</strong>
          Bei Bedarf liest/schreibt die CPU Daten vom/zum RAM über den Datenbus.
        </div>

        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--color-white)",
            borderRadius: "8px",
            borderLeft: "4px solid #388e3c",
          }}
        >
          <strong>4. Ergebnis ausgeben:</strong>
          Die CPU sendet das Ergebnis an Ausgabegeräte (z.B. Bildschirm).
        </div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "#fff3e0",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <strong>Wichtig:</strong> In der Von-Neumann-Architektur werden
        <span style={{ fontWeight: "bold", color: "#e65100" }}>
          {" "}
          Daten und Instruktionen
        </span>
        im gleichen RAM gespeichert. Der Computer unterscheidet nicht zwischen
        beiden — es sind einfach nur Bits!
      </div>
    </div>
  );
}
