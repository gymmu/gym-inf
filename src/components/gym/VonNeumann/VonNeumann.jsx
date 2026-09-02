import { useEffect, useState } from "react";
import styles from "./VonNeumann.module.css";

/**
 * VonNeumann — schematische Darstellung der von-Neumann-Architektur.
 *
 * Alle Bausteine (Steuerwerk, Rechenwerk, Speicher, Ein-/Ausgabe) hängen
 * am gemeinsamen Bus. Ein kleines Datenpaket wandert entlang des Bus und
 * zeigt, dass alle Teile über denselben Weg miteinander reden.
 *
 * @param {boolean} [animate] Datenpaket über den Bus schicken (Standard: true)
 * @param {string} [className] zusätzliche Klassen
 */
export default function VonNeumann({ animate = true, className = "" }) {
  // Stationen entlang des Bus (x-Position auf der Bus-Linie)
  const stops = [140, 300, 460, 620];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!animate) return undefined;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % stops.length);
    }, 1400);
    return () => clearInterval(id);
  }, [animate, stops.length]);

  const packetX = stops[active];

  return (
    <figure className={`${styles.vonNeumann} ${className}`}>
      <svg
        viewBox="0 0 760 420"
        className={styles.svg}
        role="img"
        aria-label="von-Neumann-Architektur: CPU, Speicher und Ein-/Ausgabe am gemeinsamen Bus"
      >
        {/* CPU-Rahmen mit Steuerwerk und Rechenwerk */}
        <rect
          x="60"
          y="30"
          width="360"
          height="120"
          rx="12"
          className={styles.cpuBox}
        />
        <text x="240" y="22" className={styles.cpuLabel}>
          CPU (Prozessor)
        </text>

        <rect
          x="90"
          y="60"
          width="140"
          height="70"
          rx="8"
          className={styles.unit}
        />
        <text x="160" y="92" className={styles.unitTitle}>
          Steuerwerk
        </text>
        <text x="160" y="112" className={styles.unitSub}>
          steuert
        </text>

        <rect
          x="250"
          y="60"
          width="140"
          height="70"
          rx="8"
          className={styles.unit}
        />
        <text x="320" y="92" className={styles.unitTitle}>
          Rechenwerk
        </text>
        <text x="320" y="112" className={styles.unitSub}>
          rechnet
        </text>

        {/* Speicher */}
        <rect
          x="480"
          y="40"
          width="220"
          height="110"
          rx="12"
          className={styles.memBox}
        />
        <text x="590" y="32" className={styles.cpuLabel}>
          Speicher
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={500 + i * 40}
            y="70"
            width="30"
            height="50"
            rx="4"
            className={styles.memCell}
          />
        ))}

        {/* Ein-/Ausgabe */}
        <rect
          x="270"
          y="320"
          width="220"
          height="70"
          rx="12"
          className={styles.ioBox}
        />
        <text x="380" y="360" className={styles.unitTitle}>
          Ein- / Ausgabe
        </text>

        {/* Bus */}
        <line x1="60" y1="240" x2="700" y2="240" className={styles.bus} />
        <text x="380" y="228" className={styles.busLabel}>
          Bus (gemeinsamer Weg für alle Daten)
        </text>

        {/* Verbindungen zum Bus */}
        <line x1="140" y1="150" x2="140" y2="240" className={styles.link} />
        <line x1="320" y1="150" x2="320" y2="240" className={styles.link} />
        <line x1="590" y1="150" x2="590" y2="240" className={styles.link} />
        <line x1="380" y1="240" x2="380" y2="320" className={styles.link} />

        {/* Datenpaket auf dem Bus */}
        <g
          className={styles.packet}
          style={{ transform: `translate(${packetX}px, 240px)` }}
        >
          <rect
            x="-16"
            y="-12"
            width="32"
            height="24"
            rx="5"
            className={styles.packetBox}
          />
          <text x="0" y="5" className={styles.packetText}>
            10110010
          </text>
        </g>
      </svg>
    </figure>
  );
}
