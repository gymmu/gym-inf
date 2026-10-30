import { useEffect, useRef, useState } from "react";
import RoadCanvas from "./RoadCanvas.jsx";
import { EDGES, NODES, TYPEN } from "./roadNetwork.js";
import styles from "./routing.module.css";

/**
 * Von der Karte zum Graphen — in fünf Stufen.
 *
 * Didaktisches Ziel: Ein Routenplaner rechnet nicht auf einer Karte. Er
 * rechnet auf einem Graphen. Die Karte ist nur die Darstellung für uns.
 * Das Widget zeigt Schritt für Schritt, was dabei weggelassen wird — und
 * was übrig bleibt: Knoten, Kanten, Gewichte.
 */

const STUFEN = [
  {
    titel: "1 · Die Karte",
    t: 0,
    deko: 1,
    knoten: false,
    namen: false,
    gewichte: false,
    strassen: false,
    text: "So sieht die Welt für uns aus: Häuser, ein Fluss, ein Park und Strassen, die irgendwie verlaufen. Für einen Computer ist das zunächst nur ein Bild. Er kann damit nichts rechnen.",
  },
  {
    titel: "2 · Kreuzungen werden zu Knoten",
    t: 0,
    deko: 0.85,
    knoten: true,
    namen: true,
    gewichte: false,
    strassen: false,
    text: "Interessant ist nur, wo man eine Entscheidung treffen kann: an Kreuzungen und Zielorten. Jeder solche Punkt wird ein Knoten. Alles dazwischen — die genaue Form der Strasse — ist für die Entscheidung egal.",
  },
  {
    titel: "3 · Strassen werden zu Kanten",
    t: 0.15,
    deko: 0.45,
    knoten: true,
    namen: true,
    gewichte: false,
    strassen: true,
    text: "Jeder Strassenabschnitt zwischen zwei Knoten wird eine Kante. Der Name der Strasse ist dabei nur noch Beschriftung — entscheidend ist, dass eine Verbindung existiert.",
  },
  {
    titel: "4 · Fahrzeit wird zum Gewicht",
    t: 0.35,
    deko: 0.25,
    knoten: true,
    namen: true,
    gewichte: true,
    strassen: false,
    text: "Jede Kante bekommt eine Zahl: das Gewicht. Hier ist es die Fahrzeit in Minuten. Sie hängt von der Länge UND vom Strassentyp ab — auf der Autobahn ist man pro Kilometer schneller unterwegs als in der Altstadt.",
  },
  {
    titel: "5 · Der fertige Graph",
    t: 1,
    deko: 0,
    knoten: true,
    namen: true,
    gewichte: true,
    strassen: false,
    text: "Die Karte ist verschwunden. Übrig bleibt ein gewichteter Graph: 13 Knoten, 22 Kanten, auf jeder Kante eine Zahl. Wie die Strassen in Wirklichkeit gebogen sind, spielt für die Routenberechnung keine Rolle mehr.",
  },
];

export default function MapToGraph({ title = "Von der Karte zum Graphen" }) {
  const [stufe, setStufe] = useState(0);
  const ziel = STUFEN[stufe];

  // Weiche Animation zwischen den Stufen (Karte → Gerade).
  // Die Werte leben in einem Ref, `tick` erzwingt das Neuzeichnen.
  const werte = useRef({ t: ziel.t, deko: ziel.deko });
  const [, setTick] = useState(0);

  useEffect(() => {
    let id = 0;
    const animiere = () => {
      const w = werte.current;
      w.t += (ziel.t - w.t) * 0.12;
      w.deko += (ziel.deko - w.deko) * 0.12;
      const fertig =
        Math.abs(ziel.t - w.t) < 0.002 && Math.abs(ziel.deko - w.deko) < 0.002;
      if (fertig) {
        w.t = ziel.t;
        w.deko = ziel.deko;
      }
      setTick((n) => n + 1);
      if (!fertig) id = requestAnimationFrame(animiere);
    };
    id = requestAnimationFrame(animiere);
    return () => cancelAnimationFrame(id);
  }, [ziel.t, ziel.deko]);

  const { t, deko } = werte.current;

  // Ab Stufe 3 sind alle Kanten sichtbar hervorgehoben.
  const kantenStatus = {};
  if (stufe >= 2) for (const e of EDGES) kantenStatus[e.key] = "hervor";

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Ein Navigationsgerät rechnet nie auf einer Karte. Es rechnet auf einem{" "}
        <strong>Graphen</strong>. Klicken Sie sich durch die fünf Stufen und
        beobachten Sie, was dabei alles verloren geht — und warum das nicht
        schlimm ist.
      </p>

      <div className={styles.stufen}>
        {STUFEN.map((s, i) => (
          <button
            key={s.titel}
            type="button"
            className={`${styles.stufe} ${i === stufe ? styles.stufeAktiv : ""}`}
            onClick={() => setStufe(i)}
          >
            {s.titel}
          </button>
        ))}
      </div>

      <div className={styles.canvas}>
        <RoadCanvas
          t={t}
          deko={deko}
          zeigeKnoten={ziel.knoten}
          zeigeNamen={ziel.namen}
          zeigeGewichte={ziel.gewichte}
          zeigeStrassennamen={ziel.strassen}
          kantenStatus={kantenStatus}
        />
      </div>

      <div className={styles.controls} style={{ marginTop: "var(--space-md)" }}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setStufe((s) => Math.max(0, s - 1))}
          disabled={stufe === 0}
        >
          ◀ Zurück
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => setStufe((s) => Math.min(STUFEN.length - 1, s + 1))}
          disabled={stufe === STUFEN.length - 1}
        >
          Weiter ▶
        </button>
        <span className={styles.schrittZaehler}>
          Stufe {stufe + 1} / {STUFEN.length}
        </span>
      </div>

      <p className={styles.erklaerung}>{ziel.text}</p>

      {/* ── Zusatzinfos je nach Stufe ─────────────────────────────── */}
      {stufe >= 3 && (
        <div className={`${styles.panels} ${styles.panelsZwei}`}>
          <div className={styles.panel}>
            <p className={styles.panelTitel}>Strassentypen</p>
            <table className={styles.tabelle}>
              <thead>
                <tr>
                  <th>Typ</th>
                  <th>Tempo</th>
                  <th>Beispiel</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(TYPEN).map(([key, typ]) => {
                  const bsp = EDGES.find((e) => e.typ === key);
                  return (
                    <tr key={key}>
                      <td style={{ color: typ.farbe }}>{typ.label}</td>
                      <td>{typ.tempo}×</td>
                      <td>
                        {bsp.strasse} ({bsp.w} min)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={styles.panel}>
            <p className={styles.panelTitel}>So steht der Graph im Code</p>
            <pre
              style={{
                margin: 0,
                fontSize: "0.75rem",
                lineHeight: 1.5,
                color: "var(--color-fg)",
                overflowX: "auto",
              }}
            >
              {codeAuszug()}
            </pre>
          </div>
        </div>
      )}

      {stufe >= 1 && (
        <div className={styles.stats}>
          <span className={styles.stat}>
            Knoten: <strong>{NODES.length}</strong>
          </span>
          <span className={styles.stat}>
            Kanten: <strong>{EDGES.length}</strong>
          </span>
          {stufe >= 3 && (
            <span className={styles.stat}>
              Gesamtfahrzeit aller Strassen:{" "}
              <strong>{EDGES.reduce((s, e) => s + e.w, 0)} min</strong>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/** Ein kleiner, echter Ausschnitt der Adjazenzliste dieses Netzes. */
function codeAuszug() {
  const zeilen = ["const graph = {"];
  for (const id of ["A", "B", "C"]) {
    const nachbarn = EDGES.filter((e) => e.a === id || e.b === id).map(
      (e) => `${e.a === id ? e.b : e.a}: ${e.w}`,
    );
    zeilen.push(`  ${id}: { ${nachbarn.join(", ")} },`);
  }
  zeilen.push("  // ...");
  zeilen.push("};");
  return zeilen.join("\n");
}
