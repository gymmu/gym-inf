import style from "@components/Caesar.module.css";
import { useEffect, useState } from "react";

export default function Caesar({ initMsg = "hallo", initShift = 1 }) {
  const [msg, setMsg] = useState(initMsg);
  const [shift, setShift] = useState(initShift);
  const [cipher, setCipher] = useState("");
  useEffect(() => {
    const cipherArray = Array.from(msg).map((char) => {
      const ascii = char.toLowerCase().charCodeAt(0);
      const shifted = ((ascii - 97 + shift + 26 * 100) % 26) + 97;
      return String.fromCharCode(shifted);
    });
    setCipher(cipherArray.join(""));
  }, [msg, shift]);

  const handleInput = (value) => {};
  return (
    <div className={style.caesarWrapper}>
      <h3>Caesar-Applet</h3>
      <div className={style.formGroup}>
        <label htmlFor="caesar-input">Nachricht im Klartext</label>
        <input
          type="text"
          id="caesar-input"
          value={msg}
          onChange={(e) =>
            setMsg(
              e.target.value
                .toLowerCase()
                .split("")
                .map((c) => {
                  const ascii = c.charCodeAt(0);
                  if (97 <= ascii && ascii <= 122) return c;
                })
                .join(""),
            )
          }
        />
      </div>
      <div className={style.alphabet}>
        {Array.from(Array(26).keys()).map((_, index) => {
          return <span>{String.fromCharCode(97 + index)}</span>;
        })}
      </div>
      <div className={style.shiftCtrl}>
        <button onClick={() => setShift((old) => old - 1)}>-</button>
        <span>{shift}</span>
        <button onClick={() => setShift((old) => old + 1)}>+</button>
      </div>
      <div className={style.alphabet}>
        {Array.from(Array(26).keys()).map((_, index) => {
          return (
            <span>
              {String.fromCharCode(97 + ((index + (shift + 26 * 100)) % 26))}
            </span>
          );
        })}
      </div>
      <div className={style.output}>
        Nachricht verschlüsselt:
        <span className={style.message}>{cipher}</span>
      </div>
    </div>
  );
}
