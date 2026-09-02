import { useMemo, useState } from "react";
import styles from "./PngFile.module.css";

// Ein stark vereinfachtes "PNG" als reine Bytefolge.
// 1) Signatur: verrät, dass es eine PNG-Datei ist (im echten PNG: 137 P N G …)
// 2) Header: Breite und Höhe des Bildes in Pixeln
// 3) Bilddaten: für jedes Pixel drei Bytes (Rot, Grün, Blau)
const SIGNATURE = [137, 80, 78, 71]; // 137, 'P', 'N', 'G'
const WIDTH = 2;
const HEIGHT = 2;
const PIXELS = [
  [227, 65, 50], // rot
  [104, 157, 106], // grün
  [131, 165, 152], // blau
  [250, 189, 47], // gelb
];

const SECTIONS = [
  {
    key: "sig",
    label: "Signatur",
    color: "purple",
    desc: (
      <>
        Die ersten Bytes sind ein festes <strong>Erkennungszeichen</strong>. An
        ihnen sieht das Programm sofort: „Das ist eine PNG-Datei.“ (Echte PNGs
        beginnen mit <span className={styles.mono}>137 P N G</span>.)
      </>
    ),
  },
  {
    key: "head",
    label: "Header",
    color: "aqua",
    desc: (
      <>
        Der <strong>Header</strong> beschreibt das Bild: Hier steht die{" "}
        <strong>Breite</strong> und die <strong>Höhe</strong> in Pixeln. Nur so
        weiss der Computer, wie er die folgenden Bytes zu einem Rechteck
        anordnen muss.
      </>
    ),
  },
  {
    key: "data",
    label: "Bilddaten",
    color: "orange",
    desc: (
      <>
        Danach kommen die <strong>Pixel</strong> – für jedes Pixel drei Bytes:{" "}
        <strong>Rot</strong>, <strong>Grün</strong> und <strong>Blau</strong>.
        Zeile für Zeile ergeben sie das Bild.
      </>
    ),
  },
];

/**
 * PngFile — zeigt an einem stark vereinfachten Beispiel, wie ein Bild als
 * Datei gespeichert wird: eine Signatur (das ist ein PNG), ein Header mit
 * Breite und Höhe und danach die Pixel als RGB-Bytes.
 *
 * Die drei Abschnitte lassen sich anklicken und werden im Bytestreifen
 * hervorgehoben.
 *
 * @param {string} [className] zusätzliche Klassen
 */
export default function PngFile({ className = "" }) {
  const [selected, setSelected] = useState("head");

  // Bytes mit Abschnitts-Zuordnung und Beschriftung aufbauen.
  const bytes = useMemo(() => {
    const list = [];
    for (const value of SIGNATURE) {
      list.push({ value, section: "sig", tag: "PNG" });
    }
    list.push({ value: WIDTH, section: "head", tag: "Breite" });
    list.push({ value: HEIGHT, section: "head", tag: "Höhe" });
    PIXELS.forEach((px, i) => {
      const names = ["R", "G", "B"];
      px.forEach((channel, c) => {
        list.push({
          value: channel,
          section: "data",
          tag: `${names[c]}${i + 1}`,
        });
      });
    });
    return list;
  }, []);

  const active = SECTIONS.find((s) => s.key === selected);

  return (
    <figure className={`${styles.png} ${className}`}>
      <div className={styles.top}>
        <div className={styles.previewBox}>
          <div
            className={styles.preview}
            style={{ gridTemplateColumns: `repeat(${WIDTH}, 1fr)` }}
          >
            {PIXELS.map((px, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: feste Pixelposition
                key={i}
                className={styles.pixel}
                style={{ backgroundColor: `rgb(${px[0]}, ${px[1]}, ${px[2]})` }}
              />
            ))}
          </div>
          <span className={styles.previewLabel}>
            {WIDTH}×{HEIGHT} Pixel
          </span>
        </div>

        <div className={styles.sections}>
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              type="button"
              className={`${styles.sectionBtn} ${styles[s.color]} ${
                s.key === selected ? styles.sectionActive : ""
              }`}
              onClick={() => setSelected(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.strip}>
        {bytes.map((b, i) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: feste Bytestelle
            key={i}
            className={`${styles.cell} ${styles[SECTIONS.find((s) => s.key === b.section).color]} ${
              b.section === selected ? styles.cellActive : ""
            }`}
          >
            <span className={styles.cellTag}>{b.tag}</span>
            <span className={styles.cellVal}>{b.value}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.readout} ${styles[active.color]}`}>
        <strong>{active.label}:</strong> {active.desc}
      </div>

      <figcaption className={styles.caption}>
        Auch ein <strong>Bild</strong> ist nur eine Bytefolge. Am Anfang steht
        ein <strong>Header</strong>, der verrät, um was für eine Datei es sich
        handelt und wie gross das Bild ist – erst danach kommen die eigentlichen
        Bilddaten.
      </figcaption>
    </figure>
  );
}
