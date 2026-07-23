import styles from "@components/MemoryStackVisualizer.module.css";

export default function MemoryStackVisualizer() {
  const baseAddress = 0x1000;

  // "Hallo Welt!" in ASCII with binary representation
  const textMemory = [
    { char: "H", ascii: 72, bits: "01001000" },
    { char: "a", ascii: 97, bits: "01100001" },
    { char: "l", ascii: 108, bits: "01101100" },
    { char: "l", ascii: 108, bits: "01101100" },
    { char: "o", ascii: 111, bits: "01101111" },
    { char: " ", ascii: 32, bits: "00100000" },
    { char: "W", ascii: 87, bits: "01010111" },
    { char: "e", ascii: 101, bits: "01100101" },
    { char: "l", ascii: 108, bits: "01101100" },
    { char: "t", ascii: 116, bits: "01110100" },
    { char: "!", ascii: 33, bits: "00100001" },
  ];

  // Free memory cells after the text
  const freeMemory = [
    { address: baseAddress + textMemory.length, bits: "00000000", char: "." },
    {
      address: baseAddress + textMemory.length + 1,
      bits: "00000000",
      char: ".",
    },
    {
      address: baseAddress + textMemory.length + 2,
      bits: "00000000",
      char: ".",
    },
    {
      address: baseAddress + textMemory.length + 3,
      bits: "00000000",
      char: ".",
    },
  ];

  // Memory above (showing it continues upward)
  const upperMemory = [
    { address: baseAddress - 4, bits: "11111111", char: "." },
    { address: baseAddress - 3, bits: "10101010", char: "." },
    { address: baseAddress - 2, bits: "01010101", char: "." },
    { address: baseAddress - 1, bits: "11001100", char: "." },
  ];

  // Combine all memory for display (top-down order: higher addresses at top)
  const displayedMemory = [
    ...upperMemory,
    ...textMemory.map((item, idx) => ({
      address: baseAddress + idx,
      bits: item.bits,
      char: item.char,
    })),
    ...freeMemory,
  ];

  const getBitClass = (bit) => {
    return bit === "1" ? styles.one : styles.zero;
  };

   const formatBitsForDisplay = (bits, address) => {
     return (
       <span key={address} className={styles.byteGroup}>
         {bits.split("").map((bit, idx) => (
           <span
             key={`${address}-${idx}`}
             className={`${styles.bitCell} ${getBitClass(bit)}`}
           >
             {bit}
           </span>
         ))}
       </span>
     );
   };

  return (
    <div className={styles.container}>
      {/* BEFORE SECTION: Einführung */}
      <section className={styles.beforeSection}>
        <h2 className={styles.sectionTitle}>Speicherstack (Top-Down)</h2>
        <p className={styles.sectionIntro}>
          Dieser Visualizer zeigt den Speicherinhalt im RAM. Jede Zeile stellt
          eine Speicherzelle mit einer Adresse dar.
        </p>
      </section>

      {/* Legend */}
      <section className={styles.legendSection}>
        <div className={styles.keyRow}>
          <span>Adresse</span>
          <span>Byte (8-bits)</span>
          <span>Zeichen</span>
        </div>
      </section>

      {/* TEXT SECTION: Interaktives Grid */}
      <section className={styles.memoryGridSection}>
        <div className={styles.memoryWindow}>
          {displayedMemory.map((cell, index) => {
            const isText = index >= 4 && index <= 14;
            const isEvenRow = index % 2 === 0;

            return (
              <div
                key={cell.address}
                className={`${styles.cell} ${isEvenRow ? styles.evenRow : ""}`}
              >
                <span className={styles.address}>
                  0x{cell.address.toString(16).padStart(4, "0")}
                </span>

                {formatBitsForDisplay(cell.bits, cell.address)}

                <span
                  className={`${styles.charDisplay} ${
                    isText && cell.char !== "." ? styles.visibleChar : ""
                  }`}
                >
                  {isText && cell.char !== " "
                    ? cell.char
                    : cell.char === " "
                      ? "\u00A0"
                      :                   "."}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
