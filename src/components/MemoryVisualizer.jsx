import styles from "@components/MemoryVisualizer.module.css";
import { useState } from "react";

export default function MemoryVisualizer() {
  const [selectedAddress, setSelectedAddress] = useState(null);

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

  const handleCellClick = (address) => {
    if (selectedAddress === address) {
      setSelectedAddress(null);
    } else {
      setSelectedAddress(address);
    }
  };

  const getBitClass = (bit) => {
    return bit === "1" ? styles.one : styles.zero;
  };

  const formatBitsForDisplay = (bits, address) => {
    const bytes = bits.split(" ");
    return bytes.map((byte, byteIdx) => (
      <span key={`${address}-${byte}`} className={styles.bitsContainer}>
        {byte.split("").map((bit, bitIdx) => (
          <span
            key={`${address}-${byte}-${bit}`}
            className={`${styles.bitCell} ${getBitClass(bit)}`}
          >
            {bit}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div className={styles.visualizerContainer}>
      {/* BEFORE SECTION: Einführung */}
      <section className={styles.beforeSection}>
        <h2 className={styles.sectionTitle}>Speichermemory Visualisierung</h2>
        <p className={styles.sectionIntro}>
          Dieser Visualizer zeigt, wie Daten im Arbeitsspeicher (RAM) als Bits
          und Bytes gespeichert werden. Jede Speicherzelle hat eine Adresse und
          speichert 8 Bits (1 Byte), die als Zeichen interpretiert werden
          können.
        </p>
      </section>

      {/* TEXT SECTION: Interaktives Grid */}
      <section className={styles.memoryGridSection}>
        <div className={styles.memoryGrid}>
          {memory.map((cell) => (
            <button
              key={cell.address}
              onClick={() => handleCellClick(cell.address)}
              type="button"
              className={styles.addressCell}
            >
              <span className={styles.addressLabel}>Addr {cell.address}</span>
              {formatBitsForDisplay(cell.bits, cell.address)}
            </button>
          ))}
        </div>
      </section>

      {/* AFTER SECTION: Details */}
      <section className={styles.afterSection}>
        <h2 className={styles.sectionTitle}>Speicherdetails</h2>

        {selectedAddress !== null ? (
          <div key={selectedAddress} className={styles.detailItem}>
            <div className={styles.detailHeader}>
              <span className={styles.detailAddress}>
                Adresse {selectedAddress}
              </span>
              <div className={styles.detailCharContainer}>
                <div className={styles.detailCharDisplay}>
                  {memory[selectedAddress].char === "-"
                    ? "empty"
                    : `"${memory[selectedAddress].char}"`}
                </div>
                <code className={styles.detailCharText}>
                  "
                  {memory[selectedAddress].char === "-"
                    ? "leer"
                    : memory[selectedAddress].char}
                  "
                </code>
              </div>
            </div>

            <div className={styles.detailBits}>
              {memory[selectedAddress].bits}
            </div>

            <p className={styles.detailDescription}>
              {memory[selectedAddress].description}
            </p>
          </div>
        ) : (
          <p className={styles.emptyState}>
            Klicke auf eine Speicherzelle, um Details anzuzeigen.
          </p>
        )}
      </section>
    </div>
  );
}
