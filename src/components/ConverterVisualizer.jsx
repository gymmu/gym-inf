import { useState } from "react";

export default function ConverterVisualizer() {
  const [input, setInput] = useState("A");

  const convertToASCII = (char) => {
    if (!char || char.length === 0) return null;
    return char.charCodeAt(0);
  };

  const convertToBinary = (ascii) => {
    if (ascii === null) return "";
    return ascii.toString(2).padStart(8, "0");
  };

  const formatBinary = (binary) => {
    return binary.replace(/(.{4})/g, "$1 ").trim();
  };

  const asciiValue = convertToASCII(input);
  const binaryValue = asciiValue !== null ? convertToBinary(asciiValue) : "";
  const formattedBinary = formatBinary(binaryValue);

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "var(--color-rgb-61-61-61)",
      borderRadius: "16px",
      maxWidth: "700px",
      margin: "0 auto",
    },
    title: {
      textAlign: "center",
      marginBottom: "2rem",
      color: "var(--color-fg)",
    },
    inputSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "2rem",
    },
    inputField: {
      width: "80px",
      height: "60px",
      fontSize: "2rem",
      textAlign: "center",
      border: "3px solid #2196f3",
      borderRadius: "12px",
      fontWeight: "bold",
      backgroundColor: "var(--color-white)",
    },
    arrowContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    },
    arrow: {
      width: "2px",
      height: "40px",
      backgroundColor: "#999",
      position: "relative",
    },
    arrowHead: {
      width: "0",
      height: "0",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderTop: "12px solid #999",
    },
    stepContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      gap: "1rem",
      flexWrap: "wrap",
    },
    stepBox: {
      flex: "1",
      minWidth: "180px",
      padding: "1.5rem",
      borderRadius: "12px",
      textAlign: "center",
      transition: "all 0.3s ease",
    },
    stepTitle: {
      fontSize: "0.9rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    stepValue: {
      fontSize: "2rem",
      fontFamily: "monospace",
      fontWeight: "bold",
      padding: "0.5rem",
      backgroundColor: "var(--color-white)",
      borderRadius: "8px",
      border: "2px solid #333",
    },
    highlightBit: (bit) => ({
      display: "inline-block",
      padding: "2px 6px",
      margin: "1px",
      borderRadius: "4px",
      backgroundColor: bit === "1" ? "#e8f5e9" : "#eceff1",
      color: bit === "1" ? "#2e7d32" : "#616161",
      fontWeight: "bold",
    }),
    note: {
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#fff3e0",
      borderRadius: "8px",
      fontSize: "0.9rem",
      color: "#e65100",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Von der Realwelt zu den Bits</h2>

      <div style={styles.inputSection}>
        <label htmlFor="charInput">Dein Zeichen:</label>
        <input
          id="charInput"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, 1))}
          style={styles.inputField}
          maxLength={1}
        />
      </div>

      <div style={styles.arrowContainer}>
        <div style={styles.arrow}>
          <div style={styles.arrowHead}></div>
        </div>
      </div>

      <div style={styles.stepContainer}>
        <div style={{ ...styles.stepBox, backgroundColor: "#e3f2fd" }}>
          <div style={styles.stepTitle}>Realwelt</div>
          <div style={styles.stepValue}>{input || "—"}</div>
        </div>

        <div style={styles.arrowContainer}>
          <div style={styles.arrow}></div>
          <div style={styles.arrowHead}></div>
        </div>

        <div style={{ ...styles.stepBox, backgroundColor: "#e0f7fa" }}>
          <div style={styles.stepTitle}>ASCII-Code</div>
          <div style={styles.stepValue}>
            {asciiValue !== null ? asciiValue : "—"}
          </div>
        </div>

        <div style={styles.arrowContainer}>
          <div style={styles.arrow}></div>
          <div style={styles.arrowHead}></div>
        </div>

        <div style={{ ...styles.stepBox, backgroundColor: "#e8f5e9" }}>
          <div style={styles.stepTitle}>Binär (Bits)</div>
          <div
            style={{
              ...styles.stepValue,
              fontFamily: "monospace",
              fontSize: "1.3rem",
            }}
          >
            {binaryValue.split("").map((bit, bitIdx) => (
              <span key={bitIdx} style={styles.highlightBit(bit)}>
                {bit}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.arrowContainer}>
          <div style={styles.arrow}></div>
          <div style={styles.arrowHead}></div>
        </div>

        <div style={{ ...styles.stepBox, backgroundColor: "#f3e5f5" }}>
          <div style={styles.stepTitle}>Elektrischer Status</div>
          <div
            style={{
              ...styles.stepValue,
              fontFamily: "monospace",
              fontSize: "1rem",
            }}
          >
            {binaryValue.split(" ").map((byte, idx) => (
              <div key={idx} style={{ marginBottom: "4px" }}>
                {byte.split("").map((bit, bitIdx) => (
                  <span
                    key={bitIdx}
                    style={{
                      padding: "2px 6px",
                      margin: "1px",
                      borderRadius: "4px",
                      backgroundColor: bit === "1" ? "#2e7d32" : "#cfd8dc",
                      color: "var(--color-white)",
                      fontWeight: "bold",
                    }}
                  >
                    {bit}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.note}>
        <strong>Wichtig:</strong> Der Computer sieht nur Bits! Das Zeichen "A"
        ist für ihn nur die Bitfolge {formattedBinary}. Er kennt keine
        Buchstaben, Zahlen oder Bilder — nur Nullen und Einsen.
      </div>
    </div>
  );
}
