import { useCallback, useEffect, useMemo, useState } from "react";
import RoadCanvas from "./RoadCanvas.jsx";
import {
  bidirektionalSchritte,
  dijkstraSchritte,
  kantenKey,
  NODES,
  name,
  pfadKanten,
} from "./roadNetwork.js";
import styles from "./routing.module.css";

const TEMPI = {
  langsam: { label: "langsam", ms: 900 },
  normal: { label: "normal", ms: 420 },
  schnell: { label: "schnell", ms: 160 },
};

/**
 * Bidirektionaler Dijkstra.
 *
 * Idee: Statt einen grossen Kreis um den Start wachsen zu lassen, lässt man
 * zwei kleinere Kreise wachsen — einen um den Start, einen um das Ziel.
 * Zwei kleine Kreise haben zusammen deutlich weniger Fläche als ein grosser,
 * also werden weniger Knoten angeschaut.
 *
 * Der didaktisch spannende Punkt ist das Abbruchkriterium: Sobald sich die
 * Suchräume berühren, hat man EINEN Weg — aber nicht garantiert den
 * kürzesten. Erst wenn topV + topR >= µ gilt, darf man aufhören.
 */
export default function BidirectionalDijkstra({
  start = "D",
  ziel = "J",
  title = "Bidirektionaler Dijkstra: von beiden Seiten gleichzeitig",
}) {
  const [von, setVon] = useState(start);
  const [nach, setNach] = useState(ziel);
  const [i, setI] = useState(0);
  const [spielt, setSpielt] = useState(false);
  const [tempo, setTempo] = useState("normal");

  const lauf = useMemo(() => bidirektionalSchritte(von, nach), [von, nach]);
  const einfach = useMemo(() => dijkstraSchritte(von, nach), [von, nach]);
  const schritte = lauf.schritte;
  const letzter = schritte.length - 1;
  const s = schritte[Math.min(i, letzter)];

  const wechsle = useCallback(
    (setter) => (ev) => {
      setter(ev.target.value);
      setI(0);
      setSpielt(false);
    },
    [],
  );

  useEffect(() => {
    if (!spielt) return undefined;
    const id = setInterval(() => {
      setI((n) => {
        if (n >= letzter) {
          setSpielt(false);
          return n;
        }
        return n + 1;
      });
    }, TEMPI[tempo].ms);
    return () => clearInterval(id);
  }, [spielt, tempo, letzter]);

  /* ── Darstellung ───────────────────────────────────────────────── */

  const besuchtV = new Set(s.besuchtV);
  const besuchtR = new Set(s.besuchtR);
  const grenzeV = new Set(s.grenzeV.map((g) => g.id));
  const grenzeR = new Set(s.grenzeR.map((g) => g.id));

  const knotenStatus = {};
  for (const n of NODES) {
    if (besuchtV.has(n.id)) knotenStatus[n.id] = "besucht";
    else if (besuchtR.has(n.id)) knotenStatus[n.id] = "besuchtR";
    else if (grenzeV.has(n.id)) knotenStatus[n.id] = "grenze";
    else if (grenzeR.has(n.id)) knotenStatus[n.id] = "grenzeR";
  }
  if (s.treff) knotenStatus[s.treff] = "treff";
  if (s.aktuell) knotenStatus[s.aktuell] = "aktuell";
  knotenStatus[von] = "start";
  knotenStatus[nach] = "ziel";

  const kantenStatus = {};
  for (const n of NODES) {
    const pv = s.prevV[n.id];
    if (pv) kantenStatus[kantenKey(pv, n.id)] = "baum";
  }
  for (const n of NODES) {
    const pr = s.prevR[n.id];
    if (pr) kantenStatus[kantenKey(pr, n.id)] = "baumR";
  }
  if (s.pruefKante) {
    kantenStatus[kantenKey(s.pruefKante.von, s.pruefKante.nach)] = s.pruefKante
      .besser
      ? "pruefBesser"
      : "pruef";
  }
  if (s.pfad) for (const k of pfadKanten(s.pfad)) kantenStatus[k] = "pfad";

  // Beschriftung: "dV | dR" — so sieht man sofort, wo sich beide treffen.
  const knotenText = {};
  for (const n of NODES) {
    const a = s.distV[n.id];
    const b = s.distR[n.id];
    if (a === Infinity && b === Infinity) continue;
    knotenText[n.id] =
      `${a === Infinity ? "∞" : a}|${b === Infinity ? "∞" : b}`;
  }

  const besuchtGesamt = s.besuchtV.length + s.besuchtR.length;
  const fertig = s.phase === "fertig";

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Dijkstra breitet sich wie ein Ölfleck in <em>alle</em> Richtungen aus.
        Bei einer Fahrt von Zürich nach Genf würde er auch halb Deutschland
        durchsuchen. Die Idee hier: zwei Suchen gleichzeitig — eine vom Start
        vorwärts (<span style={{ color: "#83a598" }}>blau</span>) und eine vom
        Ziel rückwärts (<span style={{ color: "#d3869b" }}>rosa</span>). Zwei
        kleine Kreise sind zusammen viel kleiner als ein grosser.
      </p>

      {/* ── Bedienung ──────────────────────────────────────────── */}
      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => setSpielt((p) => !p)}
          disabled={i >= letzter}
        >
          {spielt ? "Pause" : "Abspielen"}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setI((n) => Math.max(0, n - 1))}
          disabled={i === 0}
        >
          ◀ Schritt
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setI((n) => Math.min(letzter, n + 1))}
          disabled={i >= letzter}
        >
          Schritt ▶
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            setI(0);
            setSpielt(false);
          }}
        >
          Zurücksetzen
        </button>

        <span className={styles.label}>Start</span>
        <select
          className={styles.select}
          value={von}
          onChange={wechsle(setVon)}
        >
          {NODES.map((n) => (
            <option key={n.id} value={n.id} disabled={n.id === nach}>
              {n.id} — {n.label}
            </option>
          ))}
        </select>

        <span className={styles.label}>Ziel</span>
        <select
          className={styles.select}
          value={nach}
          onChange={wechsle(setNach)}
        >
          {NODES.map((n) => (
            <option key={n.id} value={n.id} disabled={n.id === von}>
              {n.id} — {n.label}
            </option>
          ))}
        </select>

        <span className={styles.label}>Tempo</span>
        <select
          className={styles.select}
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        >
          {Object.entries(TEMPI).map(([k, t]) => (
            <option key={k} value={k}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* ── Graph ──────────────────────────────────────────────── */}
      <div className={styles.canvas}>
        <RoadCanvas
          t={0.35}
          deko={0.12}
          zeigeGewichte
          knotenStatus={knotenStatus}
          kantenStatus={kantenStatus}
          knotenText={knotenText}
        />
      </div>
      <p className={styles.hinweis} style={{ marginTop: "var(--space-xs)" }}>
        Unter jedem Ort steht <code>Distanz vom Start | Distanz zum Ziel</code>.
      </p>

      <p className={styles.erklaerung}>
        <span className={styles.schrittZaehler}>
          Schritt {i + 1} / {schritte.length} ·{" "}
        </span>
        {s.text}
      </p>

      {/* ── Die beiden Grenzen und µ ───────────────────────────── */}
      <div className={`${styles.panels} ${styles.panelsZwei}`}>
        <div className={styles.panel}>
          <p className={styles.panelTitel}>Grenze vorwärts (von {name(von)})</p>
          <div className={styles.queue}>
            {s.grenzeV.length === 0 ? (
              <span className={styles.chipLeer}>leer</span>
            ) : (
              s.grenzeV.map((g) => (
                <span key={g.id} className={styles.chip}>
                  {g.id} : {g.d}
                </span>
              ))
            )}
          </div>
        </div>
        <div className={styles.panel}>
          <p className={styles.panelTitel}>
            Grenze rückwärts (von {name(nach)})
          </p>
          <div className={styles.queue}>
            {s.grenzeR.length === 0 ? (
              <span className={styles.chipLeer}>leer</span>
            ) : (
              s.grenzeR.map((g) => (
                <span key={g.id} className={`${styles.chip} ${styles.chipR}`}>
                  {g.id} : {g.d}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.stat}>
          µ (bester bekannter Weg):{" "}
          <strong>{s.mu === Infinity ? "∞" : `${s.mu} min`}</strong>
        </span>
        <span className={styles.stat}>
          Treffpunkt: <strong>{s.treff ? name(s.treff) : "—"}</strong>
        </span>
        <span className={styles.stat}>
          endgültig vorwärts: <strong>{s.besuchtV.length}</strong>
        </span>
        <span className={styles.stat}>
          endgültig rückwärts: <strong>{s.besuchtR.length}</strong>
        </span>
        <span className={styles.stat}>
          zusammen: <strong>{besuchtGesamt}</strong>
        </span>
      </div>

      {fertig && s.pfad && (
        <div className={styles.ergebnis}>
          <strong>Route:</strong> {s.pfad.map((id) => name(id)).join(" → ")} ·{" "}
          <strong>{s.mu} min</strong>
          <br />
          Bidirektional wurden <strong>{besuchtGesamt}</strong> Orte endgültig
          festgelegt, der normale Dijkstra brauchte dafür{" "}
          <strong>{einfach.besuchtAnzahl}</strong>. Auf diesem kleinen Netz ist
          der Unterschied klein — bei einem Strassennetz mit Millionen Knoten
          spart dieselbe Idee einen grossen Teil der Rechenzeit.
        </div>
      )}

      <div className={styles.legende}>
        <Legende farbe="#8ec07c" text="Start" />
        <Legende farbe="#fb4934" text="Ziel" />
        <Legende farbe="#83a598" text="vorwärts endgültig" />
        <Legende farbe="#d3869b" text="rückwärts endgültig" />
        <Legende farbe="#fabd2f" text="Grenze vorwärts" />
        <Legende farbe="#fe8019" text="aktuell / Treffpunkt / Route" />
      </div>
    </div>
  );
}

function Legende({ farbe, text }) {
  return (
    <span className={styles.legendeItem}>
      <span className={styles.swatch} style={{ backgroundColor: farbe }} />
      {text}
    </span>
  );
}
