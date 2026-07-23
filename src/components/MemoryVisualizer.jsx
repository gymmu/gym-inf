import { useState } from "react";

export default function MemoryVisualizer() {
  const [selectedAddress, setSelectedAddress] = useState(0);

  const memory = [
    { address: 0, bits: "0100 0001", char: "A", description: "Buchstabe 'A'" },
    { address: 1, bits: "0100 0010", char: "B", description: "Buchstabe 'B'" },
    { address: 2, bits: "0100 0011", char: "C", description: "Buchstabe 'C'" },
    { address: 3, bits: "0011 0000", char: "0", description: "Ziffer '0'" },
    { address: 4, bits: "0011 0001", char: "1", description: "Ziffer '1'" },
    { address: 5, bits: "0010 0000", char: "·", description: "Leerzeichen" },
    { address: 6, bits: "0100 0100", char: "D", description: "Buchstabe 'D'" },
    { address: 7, bits: "0100 0101", char: "E", description: "Buchstabe 'E'" },
    {
      address: 8,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 9,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 10,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 11,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 12,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 13,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 14,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
    {
      address: 15,
      bits: "0000 0000",
      char: "-",
      description: "Freier Speicher",
    },
  ];

  const getBitColor = (bit) => {
    if (bit === "1") return "var(--color-green)";
    if (bit === "0") return "var(--color-fg)";
    return "var(--color-gray)";
  };

  const styles = {
    container: {
      display: "flex",
      gap: "2rem",
      alignItems: "start",
      flexWrap: "wrap",
    },
    memoryGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "0.5rem",
    },
    addressCell: {
      width: "70px",
      height: "80px",
      border: "2px solid #333",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor:
        selectedAddress === memory[selectedAddress]?.address
          ? "#e3f2fd"
          : "#fafafa",
    },
    addressLabel: {
      fontSize: "0.7rem",
      fontWeight: "bold",
      marginBottom: "4px",
      color: "#666",
    },
    bitsContainer: {
      display: "flex",
      gap: "2px",
      fontSize: "0.65rem",
    },
    bitCell: {
      width: "12px",
      height: "18px",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      transition: "transform 0.3s ease",
    },
    detailsPanel: {
      flex: "1",
      minWidth: "250px",
      padding: "1rem",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      borderLeft: "4px solid #2196f3",
    },
    detailTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    detailRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.5rem 0",
      borderBottom: "1px solid #ddd",
    },
    detailLabel: {
      fontWeight: "600",
      color: "#666",
    },
    detailValue: {
      fontFamily: "monospace",
      fontSize: "1.1rem",
    },
    highlightBox: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "#fff3e0",
      borderRadius: "8px",
      border: "1px solid #ffcc80",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.memoryGrid}>
        {memory.map((cell) => (
          <button
            key={cell.address}
            style={styles.addressCell}
            onClick={() => setSelectedAddress(cell.address)}
            type="button"
          >
            <span style={styles.addressLabel}>Adresse {cell.address}</span>
            <div style={styles.bitsContainer}>
              {cell.bits.split(" ").map((byte, byteIdx) => (
                <span key={byteIdx} style={{ display: "flex", gap: "1px" }}>
                  {byte.split("").map((bit, bitIdx) => (
                    <span
                      key={`${byteIdx}-${bitIdx}`}
                      style={{
                        ...styles.bitCell,
                        backgroundColor: getBitColor(bit),
                        color: bit === "1" ? "#fff" : "#333",
                      }}
                    >
                      {bit}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div style={styles.detailsPanel}>
        <h3 style={styles.detailTitle}>Speicherdetails</h3>

        {memory.map(
          (cell) =>
            selectedAddress === cell.address && (
              <div key={cell.address} style={styles.highlightBox}>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Adresse:</span>
                  <span style={styles.detailValue}>{cell.address}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Bits:</span>
                  <span style={styles.detailValue}>{cell.bits}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Byte (Zeichen):</span>
                  <span
                    style={{
                      ...styles.detailValue,
                      fontFamily: "monospace",
                      fontSize: "1.5rem",
                      color: cell.char === "-" ? "#999" : "#333",
                    }}
                  >
                    {cell.char === "-" ? "leer" : `"${cell.char}"`}
                  </span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Beschreibung:</span>
                  <span>{cell.description}</span>
                </div>
              </div>
            ),
        )}

        {selectedAddress !== memory[selectedAddress]?.address && (
          <div style={{ color: "#666", fontStyle: "italic" }}>
            Klicke auf eine Speicherzelle, um Details zu sehen.
          </div>
        )}
      </div>
    </div>
  );
}
