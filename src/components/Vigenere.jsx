import style from "@components/Vigenere.module.css";

export default function Vigenere() {
  return (
    <div className={style.vigenereContainer}>
      <h3>Das Vigenère-Quadrat</h3>
      <div className={style.square}>
        <div className={style.header}>
          {Array.from(Array(26)).map((_, index) => (
            <span key={index}>{String.fromCharCode(97 + index)} </span>
          ))}
        </div>
        {Array.from(Array(26)).map((_, index) => (
          <Alphabet key={index} shift={index} />
        ))}
      </div>
    </div>
  );
}

function Alphabet({ shift = 0 }) {
  return (
    <div className={style.row}>
      <span>{String.fromCharCode(97 + shift)}</span>
      <div className={style.alphabet}>
        {Array.from(Array(26)).map((_, index) => (
          <span key={index}>
            {String.fromCharCode(97 + ((index + shift) % 26))}
          </span>
        ))}
      </div>
    </div>
  );
}
