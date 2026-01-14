import { useState } from "react";
import style from "@components/DiffieHellman.module.css";

export default function ModuloClock() {
  const [dividend, setDividend] = useState(17);
  const [modulus, setModulus] = useState(12);

  const result = ((dividend % modulus) + modulus) % modulus;
  const fullRotations = Math.floor(Math.abs(dividend) / modulus);

  // Berechne Position auf der Uhr (0 ist oben, im Uhrzeigersinn)
  const angle = (result / modulus) * 360;

  return (
    <div className={style.moduloContainer}>
      <div className={style.moduloControls}>
        <div className={style.controlGroup}>
          <label htmlFor="dividend">Zahl</label>
          <input
            id="dividend"
            type="number"
            value={dividend}
            onChange={(e) => setDividend(parseInt(e.target.value) || 0)}
            min="-100"
            max="100"
          />
        </div>
        <div className={style.moduloOperation}>mod</div>
        <div className={style.controlGroup}>
          <label htmlFor="modulus">Modulus</label>
          <input
            id="modulus"
            type="number"
            value={modulus}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 1;
              setModulus(Math.max(2, Math.min(24, val)));
            }}
            min="2"
            max="24"
          />
        </div>
        <div className={style.moduloEquals}>=</div>
        <div className={style.moduloResult}>{result}</div>
      </div>

      <svg className={style.clock} viewBox="0 0 200 200">
        {/* Äußerer Kreis */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="var(--color-fg)"
          strokeWidth="2"
        />

        {/* Zahlen auf der Uhr */}
        {Array.from({ length: modulus }, (_, i) => {
          const anglePos = (i / modulus) * 360 - 90; // -90 um bei 12 Uhr zu starten
          const radians = (anglePos * Math.PI) / 180;
          const x = 100 + 70 * Math.cos(radians);
          const y = 100 + 70 * Math.sin(radians);

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className={style.clockNumber}
              style={{
                fill: i === result ? "var(--color-red)" : "var(--color-fg)",
                fontWeight: i === result ? "bold" : "normal",
                fontSize: i === result ? "16px" : "14px",
              }}
            >
              {i}
            </text>
          );
        })}

        {/* Zeiger */}
        <line
          x1="100"
          y1="100"
          x2={100 + 60 * Math.sin((angle * Math.PI) / 180)}
          y2={100 - 60 * Math.cos((angle * Math.PI) / 180)}
          stroke="var(--color-red)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Mittelpunkt */}
        <circle cx="100" cy="100" r="5" fill="var(--color-red)" />
      </svg>

      <div className={style.moduloExplanation}>
        {fullRotations > 0 && (
          <p>
            {dividend} macht <strong>{fullRotations}</strong> volle Runde
            {fullRotations !== 1 ? "n" : ""} und landet dann bei{" "}
            <strong>{result}</strong>.
          </p>
        )}
        {fullRotations === 0 && dividend >= 0 && (
          <p>
            {dividend} ist kleiner als {modulus}, also ist das Ergebnis direkt{" "}
            <strong>{result}</strong>.
          </p>
        )}
        {dividend < 0 && (
          <p>
            Negative Zahlen gehen gegen den Uhrzeigersinn.
            {dividend} landet bei <strong>{result}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
