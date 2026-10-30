import { useCallback, useEffect, useMemo, useState } from "react";
import RoadCanvas from "./RoadCanvas.jsx";
import {
  dijkstraSchritte,
  kantenKey,
  NODES,
  name,
  pfadKanten,
} from "./roadNetwork.js";
import styles from "./routing.module.css";

const TEMPI = {
  langsam: { label: "langsam", ms: 900 },
  normal: { label: "normal", ms: 450 },
  schnell: { label: "schnell", ms: 180 },
};

/**
 * Dijkstra Schritt für Schritt auf dem Strassennetz.
 *
 * Links die Karte/der Graph, rechts die Tabelle mit den Distanzen und die
 * Grenze (Priority Queue). Unten steht in einem Satz, was gerade passiert.
 *
 * Wichtig für den Unterricht: Dijkstra sucht NICHT in Richtung Ziel. Er
 * wächst gleichmässig in alle Richtungen — wie ein Ölfleck. Das sieht man
 * sofort, wenn man das Widget einmal durchlaufen lässt.
 */
export default function DijkstraViz({
  start = "D",
  ziel = "J",
  title = "Dijkstra: der kürzeste Weg, Schritt für Schritt",
}) {
  const [von, setVon] = useState(start);
  const [nach, setNach] = useState(ziel);
  const [i, setI] = useState(0);
  const [spielt, setSpielt] = useState(false);
  const [tempo, setTempo] = useState("normal");
  const [zeigeNamen, setZeigeNamen] = useState(true);

  const lauf = useMemo(() => dijkstraSchritte(von, nach), [von, nach]);
  const schritte = lauf.schritte;
  const letzter = schritte.length - 1;
  const s = schritte[Math.min(i, letzter)];

  // Start/Ziel ändern → von vorne
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

  /* ── Darstellung ableiten ───────────────────────────────────────── */

  const grenzeIds = new Set(s.grenze.map((g) => g.id));
  const besuchtIds = new Set(s.besucht);

  const knotenStatus = {};
  for (const n of NODES) {
    if (besuchtIds.has(n.id)) knotenStatus[n.id] = "besucht";
    else if (grenzeIds.has(n.id)) knotenStatus[n.id] = "grenze";
  }
  if (s.aktuell) knotenStatus[s.aktuell] = "aktuell";
  knotenStatus[von] = "start";
  knotenStatus[nach] = "ziel";

  // Kanten: der aktuelle Kürzeste-Wege-Baum (über prev) + geprüfte Kante
  const kantenStatus = {};
  for (const n of NODES) {
    const p = s.prev[n.id];
    if (p) kantenStatus[kantenKey(p, n.id)] = "baum";
  }
  if (s.pruefKante) {
    kantenStatus[kantenKey(s.pruefKante.von, s.pruefKante.nach)] = s.pruefKante
      .besser
      ? "pruefBesser"
      : "pruef";
  }
  if (s.pfad) for (const k of pfadKanten(s.pfad)) kantenStatus[k] = "pfad";

  // Distanz direkt an den Knoten schreiben
  const knotenText = {};
  for (const n of NODES) {
    const d = s.dist[n.id];
    if (d < Infinity) knotenText[n.id] = `${d}`;
  }

  const fertig = s.phase === "fertig";

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Dijkstra verwaltet für jeden Ort die{" "}
        <strong>bisher kürzeste bekannte Fahrzeit</strong> vom Start und einen{" "}
        <strong>Vorgänger</strong>. In jedem Durchgang nimmt er den Ort aus der
        Grenze, dessen bekannte Zeit am kleinsten ist — dieser Wert ist dann
        endgültig. Danach prüft er alle Nachbarn: Kommt man über den gerade
        gewählten Ort schneller hin?
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

        <label
          className={styles.label}
          style={{ display: "flex", gap: 6, alignItems: "center" }}
        >
          <input
            type="checkbox"
            checked={zeigeNamen}
            onChange={(e) => setZeigeNamen(e.target.checked)}
          />
          Ortsnamen
        </label>
      </div>

      {/* ── Graph ──────────────────────────────────────────────── */}
      <div className={styles.canvas}>
        <RoadCanvas
          t={0.35}
          deko={0.12}
          zeigeNamen={zeigeNamen}
          zeigeGewichte
          knotenStatus={knotenStatus}
          kantenStatus={kantenStatus}
          knotenText={knotenText}
          onKnoten={(id) => {
            if (id === von) return;
            setNach(id);
            setI(0);
            setSpielt(false);
          }}
        />
      </div>

      <p className={styles.erklaerung}>
        <span className={styles.schrittZaehler}>
          Schritt {i + 1} / {schritte.length} ·{" "}
        </span>
        {s.text}
      </p>

      {/* ── Grenze und Tabelle ─────────────────────────────────── */}
      <div className={`${styles.panels} ${styles.panelsZwei}`}>
        <div className={styles.panel}>
          <p className={styles.panelTitel}>
            Grenze / Priority Queue — immer nach Distanz sortiert
          </p>
          <div className={styles.queue}>
            {s.grenze.length === 0 ? (
              <span className={styles.chipLeer}>leer</span>
            ) : (
              s.grenze.map((g) => (
                <span key={g.id} className={styles.chip}>
                  {g.id} : {g.d}
                </span>
              ))
            )}
          </div>
          <div className={styles.stats}>
            <span className={styles.stat}>
              endgültig: <strong>{s.besucht.length}</strong>
            </span>
            <span className={styles.stat}>
              in der Grenze: <strong>{s.grenze.length}</strong>
            </span>
          </div>
        </div>

        <div className={styles.panel}>
          <p className={styles.panelTitel}>Distanzen und Vorgänger</p>
          <table className={styles.tabelle}>
            <thead>
              <tr>
                <th>Ort</th>
                <th>Distanz</th>
                <th>Vorgänger</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {NODES.map((n) => {
                const d = s.dist[n.id];
                const klasse = besuchtIds.has(n.id)
                  ? styles.zeileBesucht
                  : grenzeIds.has(n.id)
                    ? styles.zeileGrenze
                    : "";
                return (
                  <tr
                    key={n.id}
                    className={
                      s.aktuell === n.id ? styles.zeileAktuell : klasse
                    }
                  >
                    <td>
                      {n.id} {n.label}
                    </td>
                    <td>{d === Infinity ? "∞" : d}</td>
                    <td>{s.prev[n.id] ?? "—"}</td>
                    <td>
                      {besuchtIds.has(n.id)
                        ? "endgültig"
                        : grenzeIds.has(n.id)
                          ? "Grenze"
                          : "unbekannt"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {fertig && s.pfad && (
        <div className={styles.ergebnis}>
          <strong>Route gefunden:</strong>{" "}
          {s.pfad.map((id) => name(id)).join(" → ")} ·{" "}
          <strong>{s.dist[nach]} min</strong> · dafür musste Dijkstra{" "}
          <strong>{s.besucht.length}</strong> von {NODES.length} Orten endgültig
          festlegen.
        </div>
      )}

      <div className={styles.legende}>
        <Legende farbe="#8ec07c" text="Start" />
        <Legende farbe="#fb4934" text="Ziel" />
        <Legende farbe="#fe8019" text="gerade gewählt / fertige Route" />
        <Legende farbe="#fabd2f" text="Grenze (bekannt, noch nicht sicher)" />
        <Legende farbe="#83a598" text="endgültig + Vorgängerkante" />
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
