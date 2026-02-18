import style from "@components/AsciiConverter.module.css";
import { useState } from "react";

// Formatiert Binär mit Lücke nach 4 Stellen (z.B. "0100 0001")
const formatBinary = (binary) => {
  if (binary.length !== 8) return binary;
  return `${binary.slice(0, 4)} ${binary.slice(4)}`;
};

// Entfernt Leerzeichen aus formatierter Binär-Darstellung
const unformatBinary = (formatted) => {
  return formatted.replace(/\s/g, "");
};

export default function AsciiConverter({ initChar = "A" }) {
  const [char, setChar] = useState(initChar);
  const [ascii, setAscii] = useState(initChar.charCodeAt(0).toString());
  const [binary, setBinary] = useState(
    formatBinary(initChar.charCodeAt(0).toString(2).padStart(8, "0")),
  );

  // Validierung: nur Buchstaben, Zahlen, Leerzeichen
  const isValidChar = (str) => /^[a-zA-Z0-9 ]$/.test(str);

  const handleCharChange = (e) => {
    const newChar = e.target.value.slice(-1); // nur letztes Zeichen
    if (newChar === "" || isValidChar(newChar)) {
      setChar(newChar);
      if (newChar !== "") {
        const asciiVal = newChar.charCodeAt(0);
        setAscii(asciiVal.toString());
        setBinary(formatBinary(asciiVal.toString(2).padStart(8, "0")));
      }
    }
  };

  const handleAsciiChange = (e) => {
    const newAscii = e.target.value;
    // Nur Zahlen erlauben
    if (/^\d*$/.test(newAscii)) {
      setAscii(newAscii);
      const asciiNum = parseInt(newAscii, 10);
      // Prüfen ob gültiger ASCII-Wert (32-126 für druckbare Zeichen)
      if (!isNaN(asciiNum) && asciiNum >= 32 && asciiNum <= 126) {
        const newChar = String.fromCharCode(asciiNum);
        if (isValidChar(newChar)) {
          setChar(newChar);
          setBinary(formatBinary(asciiNum.toString(2).padStart(8, "0")));
        }
      }
    }
  };

  const handleBinaryChange = (e) => {
    const newBinary = e.target.value;
    const cleanBinary = unformatBinary(newBinary);

    // Nur 0, 1 und Leerzeichen erlauben, max 9 Zeichen (8 Bits + 1 Leerzeichen)
    if (/^[01 ]{0,9}$/.test(newBinary) && cleanBinary.length <= 8) {
      setBinary(newBinary);
      if (cleanBinary.length === 8) {
        const asciiNum = parseInt(cleanBinary, 2);
        if (asciiNum >= 32 && asciiNum <= 126) {
          const newChar = String.fromCharCode(asciiNum);
          if (isValidChar(newChar)) {
            setChar(newChar);
            setAscii(asciiNum.toString());
            // Formatierung sicherstellen
            setBinary(formatBinary(cleanBinary));
          }
        }
      }
    }
  };

  return (
    <div className={style.converterContainer}>
      <div className={style.inputGroup}>
        <label htmlFor="char">Zeichen:</label>
        <input
          id="char"
          type="text"
          value={char}
          onChange={handleCharChange}
          maxLength={1}
          className={style.inputChar}
        />
      </div>
      <div className={style.inputGroup}>
        <label htmlFor="ascii">ASCII (Dezimal):</label>
        <input
          id="ascii"
          type="text"
          value={ascii}
          onChange={handleAsciiChange}
          maxLength={3}
          className={style.inputAscii}
        />
      </div>
      <div className={style.inputGroup}>
        <label htmlFor="binary">Binär (8-Bit):</label>
        <input
          id="binary"
          type="text"
          value={binary}
          onChange={handleBinaryChange}
          maxLength={9}
          className={style.inputBinary}
          placeholder="0000 0000"
        />
      </div>
    </div>
  );
}
