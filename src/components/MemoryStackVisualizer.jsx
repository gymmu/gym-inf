import { useState, useCallback } from "react";
import styles from "@components/MemoryStackVisualizer.module.css";

export default function MemoryStackVisualizer({
  mode = "static",
  initialText = "Hallo Welt!",
}) {
  const isInteractive = mode === "interactive";

  // Initialize memory from text or defaults
  const initMemory = useCallback(() => {
    const chars = initialText.split("");
    const memory = chars.map((char) => ({
      char,
      ascii: char.charCodeAt(0),
      bits: char.charCodeAt(0).toString(2).padStart(8, "0"),
    }));
    // Add free cells (minimum 4)
    const freeCells = Math.max(4, 12 - memory.length);
    for (let i = 0; i < freeCells; i++) {
      memory.push({ address: null, bits: "00000000", char: "." });
    }
    return memory;
  }, [initialText]);

  const [memory, setMemory] = useState(() => initMemory());
  const [inputValue, setInputValue] = useState(initialText);

  const baseAddress = 0x1000;

  // Split memory into used and free cells
  const usedMemory = memory.filter((cell) => cell.char !== "." || cell.ascii !== undefined);
  const freeMemory = memory.filter((cell) => cell.char === "." && cell.ascii === undefined);

  // Memory above (showing it continues upward)
  const upperMemory = [
    { address: baseAddress - 3, bits: "10101010", char: "." },
    { address: baseAddress - 2, bits: "01010101", char: "." },
    { address: baseAddress - 1, bits: "11001100", char: "." },
  ];

  const resetMemory = () => {
    setMemory(() => {
      const newMemory = [];
      for (let i = 0; i < 4; i++) {
        newMemory.push({ address: null, bits: "00000000", char: "." });
      }
      return newMemory;
    });
    setInputValue("");
  };

  const applyText = (text) => {
    setInputValue(text);
    const chars = text.split("");
    const usedCells = chars.map((char) => ({
      char,
      ascii: char.charCodeAt(0),
      bits: char.charCodeAt(0).toString(2).padStart(8, "0"),
    }));

    setMemory((prev) => {
      const currentUsed = prev.filter((cell) => cell.char !== "." || cell.ascii !== undefined);
      const currentFree = prev.filter((cell) => cell.char === "." && cell.ascii === undefined);

      // Check if we need to expand (double the free cells)
      const neededFree = Math.max(4, Math.max(8, usedCells.length));
      if (currentFree.length < neededFree) {
        const newFreeCount = currentFree.length * 2;
        const newFree = [];
        for (let i = 0; i < newFreeCount; i++) {
          newFree.push({ address: null, bits: "00000000", char: "." });
        }
        return [...usedCells, ...newFree];
      }
      return [...usedCells, ...currentFree];
    });
  };

  const handleInputChange = (e) => {
    applyText(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      applyText(e.target.value);
    }
  };

  const getBitClass = (bit) => {
    return bit === "1" ? styles.one : styles.zero;
  };

  const getRowClass = (address) => {
    const offset = address - baseAddress;
    return offset % 2 === 0 ? styles.evenRow : styles.oddRow;
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
      {/* Interactive Controls */}
      {isInteractive && (
        <section className={styles.controlsSection}>
          <div className={styles.controlsRow}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Text eingeben..."
              className={styles.textInput}
            />
            <button onClick={resetMemory} className={styles.resetButton}>
              Reset Memory
            </button>
          </div>
        </section>
      )}

      {/* BEFORE SECTION: Einführung */}
      <section className={styles.beforeSection}>
        <h2 className={styles.sectionTitle}>Speicherstack (Top-Down)</h2>
        <p className={styles.sectionIntro}>
          Dieser Visualizer zeigt den Speicherinhalt im RAM. Der Stack ist in drei
          Bereiche unterteilt: Before (oben), Text (mitte) und After (unten).
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

       {/* BEFORE SECTION: Speicher oberhalb des Textes */}
       <section className={styles.memorySection}>
         <div className={styles.memoryWindow}>
           {upperMemory.map((cell) => (
             <div key={cell.address} className={`${styles.cell} ${getRowClass(cell.address)}`}>
               <span className={styles.address}>
                 0x{cell.address.toString(16).padStart(4, "0")}
               </span>
               {formatBitsForDisplay(cell.bits, cell.address)}
               <span className={styles.charDisplay}>{cell.char}</span>
             </div>
           ))}
         </div>

       {/* TEXT SECTION: Der eigentliche Textinhalt */}
         <div className={styles.memoryWindow}>
           {usedMemory.map((item, idx) => {
             const address = baseAddress + idx;

             return (
               <div
                 key={address}
                 className={`${styles.cell} ${getRowClass(address)}`}
               >
                 <span className={styles.address}>
                   0x{address.toString(16).padStart(4, "0")}
                 </span>
                 {formatBitsForDisplay(item.bits, address)}
                 <span
                   className={`${styles.charDisplay} ${
                     item.char !== " " ? styles.visibleChar : ""
                   }`}
                 >
                   {item.char !== " " ? item.char : "\u00A0"}
                 </span>
               </div>
             );
           })}
         </div>

       {/* AFTER SECTION: Freier Speicher nach dem Text */}
         <div className={styles.memoryWindow}>
           {freeMemory.map((cell, idx) => {
             const address = baseAddress + usedMemory.length + idx;
             return (
               <div
                 key={address}
                 className={`${styles.cell} ${getRowClass(address)}`}
               >
                 <span className={styles.address}>
                   0x{address.toString(16).padStart(4, "0")}
                 </span>
                 {formatBitsForDisplay(cell.bits, address)}
                 <span className={styles.charDisplay}>{cell.char}</span>
               </div>
             );
           })}
         </div>
       </section>
    </div>
  );
}
