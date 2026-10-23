import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BREITE,
  createGridSearch,
  HOEHE,
  LAYOUTS,
  MARKE,
  START,
  STRATEGIEN,
  ZELLE,
  ZIEL,
} from "./gridSearch.js";
import styles from "./gridSearch.module.css";

const ALGOS = ["ucs", "gbfs", "astar"];

const TEMPI = {
  langsam: { label: "langsam", ms: 120, schritte: 1 },
  normal: { label: "normal", ms: 40, schritte: 1 },
  schnell: { label: "schnell", ms: 20, schritte: 3 },
  sehrSchnell: { label: "sehr schnell", ms: 16, schritte: 10 },
};

/**
 * Drei Suchverfahren nebeneinander auf demselben Gitter:
 * UCS (blind), Greedy Best-First (nur h) und A* (g + h).
 *
 * Gedacht als Einstieg: Man sieht sofort, wie unterschiedlich
 * gross der durchsuchte Bereich ist.
 */
export default function GridSearchRace({
  title = "UCS, Greedy Best-First und A* im Vergleich",
  layout = "mauer",
  tempo = "normal",
}) {
  const [layoutName, setLayoutName] = useState(layout);
  const [tempoName, setTempoName] = useState(tempo);
  const [gitter, setGitter] = useState(() => LAYOUTS[layoutName].bauen());
  const [snapshots, setSnapshots] = useState(null);
  const [spielt, setSpielt] = useState(false);
  const enginesRef = useRef([]);

  const reset = useCallback(
    (g = gitter) => {
      const engines = ALGOS.map((a) => createGridSearch(g, a));
      enginesRef.current = engines;
      setSnapshots(engines.map((e) => e.snapshot()));
      setSpielt(false);
    },
    [gitter],
  );

  // Layout wechseln: neues Gitter bauen und von vorne beginnen.
  useEffect(() => {
    const g = LAYOUTS[layoutName].bauen();
    setGitter(g);
    const engines = ALGOS.map((a) => createGridSearch(g, a));
    enginesRef.current = engines;
    setSnapshots(engines.map((e) => e.snapshot()));
    setSpielt(false);
  }, [layoutName]);

  const schritt = useCallback((anzahl = 1) => {
    const engines = enginesRef.current;
    if (engines.length === 0) return true;
    let alleFertig = true;
    const neu = engines.map((e) => {
      let s = e.snapshot();
      for (let i = 0; i < anzahl; i++) {
        if (e.fertig()) break;
        s = e.step();
      }
      if (!e.fertig()) alleFertig = false;
      return s;
    });
    setSnapshots(neu);
    return alleFertig;
  }, []);

  // Abspielen
  useEffect(() => {
    if (!spielt) return undefined;
    const { ms, schritte } = TEMPI[tempoName];
    const id = setInterval(() => {
      const fertig = schritt(schritte);
      if (fertig) setSpielt(false);
    }, ms);
    return () => clearInterval(id);
  }, [spielt, tempoName, schritt]);

  const alleFertig = useMemo(
    () =>
      snapshots?.every(
        (s) => s.status === "gefunden" || s.status === "erschöpft",
      ) ?? false,
    [snapshots],
  );

  const toggleWand = useCallback(
    (x, y) => {
      if ((x === START.x && y === START.y) || (x === ZIEL.x && y === ZIEL.y))
        return;
      const neu = gitter.map((zeile) => zeile.slice());
      neu[y][x] = neu[y][x] === ZELLE.WAND ? ZELLE.FREI : ZELLE.WAND;
      setGitter(neu);
      reset(neu);
    },
    [gitter, reset],
  );

  if (!snapshots) return null;

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Alle drei suchen denselben Weg von <strong>Start</strong> nach{" "}
        <strong>Ziel</strong>. Die Kosten pro Schritt sind überall 1, die
        Heuristik ist die Manhattan-Distanz zum Ziel. Achten Sie darauf,{" "}
        <em>wie viele</em> Felder jeder Algorithmus anschaut — und ob der
        gefundene Weg wirklich der kürzeste ist. Klicken Sie ins Gitter, um
        eigene Hindernisse zu setzen.
      </p>

      {/* ── Bedienung ──────────────────────────────────────────── */}
      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => setSpielt((s) => !s)}
          disabled={alleFertig}
        >
          {spielt ? "Pause" : "Abspielen"}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => schritt(1)}
          disabled={spielt || alleFertig}
        >
          1 Schritt
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => schritt(10)}
          disabled={spielt || alleFertig}
        >
          10 Schritte
        </button>
        <button type="button" className={styles.button} onClick={() => reset()}>
          Zurücksetzen
        </button>

        <span className={styles.label}>Hindernisse</span>
        <select
          className={styles.select}
          value={layoutName}
          onChange={(e) => setLayoutName(e.target.value)}
        >
          {Object.entries(LAYOUTS).map(([key, l]) => (
            <option key={key} value={key}>
              {l.label}
            </option>
          ))}
        </select>

        <span className={styles.label}>Tempo</span>
        <select
          className={styles.select}
          value={tempoName}
          onChange={(e) => setTempoName(e.target.value)}
        >
          {Object.entries(TEMPI).map(([key, t]) => (
            <option key={key} value={key}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* ── Die drei Gitter ────────────────────────────────────── */}
      <div className={styles.panels}>
        {ALGOS.map((algo, i) => (
          <Panel
            key={algo}
            algo={algo}
            gitter={gitter}
            snapshot={snapshots[i]}
            onZelle={toggleWand}
          />
        ))}
      </div>

      <div className={styles.legende}>
        <Legende farbe="var(--color-green)" text="Start" />
        <Legende farbe="var(--color-purple)" text="Ziel" />
        <Legende farbe="var(--color-gray)" text="Wand" />
        <Legende farbe="#3c4c5a" text="besucht (expandiert)" />
        <Legende farbe="#665c54" text="Grenze (bekannt, noch offen)" />
        <Legende farbe="var(--color-orange)" text="gefundener Weg" />
      </div>

      <p className={styles.hinweis} style={{ marginTop: "var(--space-sm)" }}>
        {LAYOUTS[layoutName].hinweis}
      </p>
    </div>
  );
}

/* ── Ein einzelnes Gitter ─────────────────────────────────────────── */

function Panel({ algo, gitter, snapshot, onZelle }) {
  const info = STRATEGIEN[algo];
  const { marken, pfad, aktuell, expandiert, grenzeGroesse, kosten, status } =
    snapshot;

  const pfadSet = useMemo(
    () => new Set(pfad.map((p) => `${p.x},${p.y}`)),
    [pfad],
  );

  const zellen = [];
  for (let y = 0; y < HOEHE; y++) {
    for (let x = 0; x < BREITE; x++) {
      const klassen = [styles.cell];
      if (gitter[y][x] === ZELLE.WAND) {
        klassen.push(styles.wand);
      } else if (pfadSet.has(`${x},${y}`)) {
        klassen.push(styles.pfad);
      } else if (marken[y * BREITE + x] === MARKE.BESUCHT) {
        klassen.push(styles.besucht);
      } else if (marken[y * BREITE + x] === MARKE.GRENZE) {
        klassen.push(styles.grenze);
      }
      if (aktuell && aktuell.x === x && aktuell.y === y && status === "läuft") {
        klassen.push(styles.aktuell);
      }
      if (x === START.x && y === START.y) klassen.push(styles.start);
      if (x === ZIEL.x && y === ZIEL.y) klassen.push(styles.ziel);

      zellen.push(
        <div
          key={`${x}-${y}`}
          className={klassen.join(" ")}
          data-x={x}
          data-y={y}
        />,
      );
    }
  }

  return (
    <div className={styles.panel} style={{ borderTopColor: info.farbe }}>
      <div className={styles.panelKopf}>
        <span className={styles.panelName} style={{ color: info.farbe }}>
          {info.label}
        </span>
        <span className={styles.panelFormel}>{info.formel}</span>
      </div>
      <p className={styles.panelText}>{info.erklaerung}</p>

      {/* biome-ignore lint/a11y/noStaticElementInteractions: didaktisches Zeichenfeld, Tastaturbedienung über die Buttons oben */}
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${BREITE}, 1fr)` }}
        onMouseDown={(e) => {
          const ziel = e.target;
          const x = Number(ziel.dataset?.x);
          const y = Number(ziel.dataset?.y);
          if (Number.isInteger(x) && Number.isInteger(y)) onZelle(x, y);
        }}
      >
        {zellen}
      </div>

      <div className={styles.stats}>
        <span className={styles.stat}>
          besucht: <strong>{expandiert}</strong>
        </span>
        <span className={styles.stat}>
          Grenze: <strong>{grenzeGroesse}</strong>
        </span>
        <span className={styles.stat}>
          Weglänge: <strong>{status === "gefunden" ? kosten : "—"}</strong>
        </span>
      </div>
      <div
        className={styles.statusZeile}
        style={{
          color: status === "gefunden" ? "var(--color-orange)" : info.farbe,
        }}
      >
        {statusText(status, kosten)}
      </div>
    </div>
  );
}

function statusText(status, kosten) {
  if (status === "gefunden") return `Ziel gefunden — Weglänge ${kosten}`;
  if (status === "erschöpft") return "Kein Weg gefunden";
  if (status === "läuft") return "sucht …";
  return "bereit";
}

function Legende({ farbe, text }) {
  return (
    <span className={styles.legendeItem}>
      <span className={styles.swatch} style={{ backgroundColor: farbe }} />
      {text}
    </span>
  );
}
