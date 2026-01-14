import style from "@components/Xor.module.css";
import { useMemo, useState } from "react";

export default function Xor({ initMsg = "hallo", initKey = "KEY" }) {
  const [plaintext, setPlaintext] = useState(initMsg);
  const [key, setKey] = useState(initKey);

  // Validierung: nur druckbare ASCII-Zeichen (32-126)
  const isPrintableChar = (char) => {
    const code = char.charCodeAt(0);
    return code >= 32 && code <= 126;
  };

  const isValidInput = (str) => {
    // Alle Zeichen müssen druckbar sein
    return str.split("").every(isPrintableChar);
  };

  // Prüfe ob XOR-Ergebnis druckbar ist
  const isPrintableResult = (plainCode, keyCode) => {
    const encryptedCode = plainCode ^ keyCode;
    return encryptedCode >= 32 && encryptedCode <= 126;
  };

  // Berechne XOR für jeden Buchstaben und prüfe ob Ergebnis druckbar
  const encryptedData = useMemo(() => {
    if (!plaintext || !key) return { data: [], hasNonPrintable: false };

    const result = [];
    let hasNonPrintable = false;

    for (let i = 0; i < plaintext.length; i++) {
      const plainChar = plaintext[i];
      const keyChar = key[i % key.length]; // Schlüssel wiederholen
      const plainCode = plainChar.charCodeAt(0);
      const keyCode = keyChar.charCodeAt(0);
      const encryptedCode = plainCode ^ keyCode;
      const isPrintable = encryptedCode >= 32 && encryptedCode <= 126;

      if (!isPrintable) {
        hasNonPrintable = true;
      }

      result.push({
        plainChar,
        keyChar,
        encryptedChar: String.fromCharCode(encryptedCode),
        encryptedCode,
        plainBinary: padWithZero(plainCode.toString(2)),
        keyBinary: padWithZero(keyCode.toString(2)),
        encryptedBinary: padWithZero(encryptedCode.toString(2)),
        isPrintable,
      });
    }
    return { data: result, hasNonPrintable };
  }, [plaintext, key]);

  const handlePlaintextChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 16 && isValidInput(newValue)) {
      setPlaintext(newValue);
    }
  };

  const handleKeyChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= 16 && isValidInput(newValue)) {
      setKey(newValue);
    }
  };

  return (
    <div className={style.xorWrapper}>
      <div className={style.inputContainer}>
        <div className={style.inputGroup}>
          <label htmlFor="plaintext">Klartext:</label>
          <input
            id="plaintext"
            type="text"
            value={plaintext}
            onChange={handlePlaintextChange}
            maxLength={16}
            placeholder="Text eingeben..."
          />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="key">Schlüssel:</label>
          <input
            id="key"
            type="text"
            value={key}
            onChange={handleKeyChange}
            maxLength={16}
            placeholder="Schlüssel eingeben..."
          />
        </div>
      </div>

      {encryptedData.hasNonPrintable && (
        <div className={style.warning}>
          ! Achtung: Einige verschlüsselte Zeichen liegen außerhalb des
          druckbaren ASCII-Bereichs (32-126) und werden rot markiert. Versuchen
          Sie einen anderen Schlüssel für bessere Lesbarkeit.
        </div>
      )}

      <div className={style.xorContainer}>
        <div className={style.scrollWrapper}>
          {encryptedData.data.map((data, index) => (
            <div key={index} className={style.column}>
              <div className={style.row}>
                <pre className={style.char}>{data.plainChar}</pre>
                <pre className={style.binary}>{data.plainBinary}</pre>
              </div>
              <div className={`${style.row} ${style.borderBottom}`}>
                <pre className={style.char}>{data.keyChar}</pre>
                <pre className={style.binary}>{data.keyBinary}</pre>
              </div>
              <div
                className={`${style.row} ${!data.isPrintable ? style.nonPrintable : ""}`}
              >
                <pre className={style.char}>
                  {data.isPrintable ? data.encryptedChar : "�"}
                </pre>
                <pre className={style.binary}>{data.encryptedBinary}</pre>
                {!data.isPrintable && (
                  <small className={style.codeHint}>
                    (Code: {data.encryptedCode})
                  </small>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function padWithZero(value, length = 8) {
  return value.padStart(length, "0");
}
