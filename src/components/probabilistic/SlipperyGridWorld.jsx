import { Math as Tex } from "@components/Katex.jsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BREITE,
  HOEHE,
  istKlippe,
  istZiel,
  monteCarlo,
  mulberry32,
  PLAENE,
  START,
  simuliere,
} from "./gridWorld.js";
import styles from "./probabilistic.module.css";

const ZELLE = 64;

const PLAN_MODI = [
  { key: "kurz", label: "«kurz» (der Klippe entlang)" },
  { key: "sicher", label: "«sicher» (oben herum)" },
];

const STRATEGIE_MODI = [{ key: "strategie", label: "«korrigieren»" }];

const GLYPH = { oben: "↑", unten: "↓", links: "←", rechts: "→" };

/** Die Strategie aus gridWorld.js, in Worte gefasst. */
const REGELN = [
  "wenn in der Zielspalte → ↓",
  "sonst wenn nicht zuoberst → ↑",
  "sonst → →",
];

const LEER_STATS = {
  anzahl: 0,
  erfolge: 0,
  erfolgsquote: 0,
  schnittSchritte: 0,
  besuche: new Map(),
};

/**
 * Rutschige Gitterwelt mit Monte-Carlo-Auswertung.
 *
 * Ein einzelner Durchgang sagt fast nichts aus — erst 1000 Durchgänge zeigen,
 * ob ein Plan gut ist. Genau das ist die Idee der Monte-Carlo-Simulation.
 */
export default function SlipperyGridWorld({
  title = "Rutschige Welt: ein Plan ist nur noch eine Wahrscheinlichkeit",
}) {
  const [modus, setModus] = useState("kurz");
  const [p, setP] = useState(0.2);
  const [stats, setStats] = useState(LEER_STATS);
  const [lauf, setLauf] = useState(null);
  const [schritt, setSchritt] = useState(0);
  const [spielt, setSpielt] = useState(false);
  const rngRef = useRef(mulberry32(42));

  /* Einstellungen geändert → Statistik zurücksetzen */
  // biome-ignore lint/correctness/useExhaustiveDependencies: Reset bei Wechsel
  useEffect(() => {
    setStats(LEER_STATS);
    setLauf(null);
    setSchritt(0);
    setSpielt(false);
    rngRef.current = mulberry32(42);
  }, [modus, p]);

  /* Animation eines einzelnen Durchgangs */
  useEffect(() => {
    if (!spielt || !lauf) return undefined;
    const id = setInterval(() => {
      setSchritt((n) => {
        if (n >= lauf.pfad.length - 1) {
          setSpielt(false);
          return n;
        }
        return n + 1;
      });
    }, 220);
    return () => clearInterval(id);
  }, [spielt, lauf]);

  const einDurchgang = useCallback(() => {
    const l = simuliere(modus, p, rngRef.current);
    setLauf(l);
    setSchritt(0);
    setSpielt(true);
    setStats((alt) => ({
      anzahl: alt.anzahl + 1,
      erfolge: alt.erfolge + (l.erfolg ? 1 : 0),
      erfolgsquote: (alt.erfolge + (l.erfolg ? 1 : 0)) / (alt.anzahl + 1),
      schnittSchritte: alt.schnittSchritte,
      besuche: alt.besuche,
    }));
  }, [modus, p]);

  const vieleDurchgaenge = useCallback(
    (n) => {
      const neu = monteCarlo(modus, p, n, rngRef.current);
      setSpielt(false);
      setLauf(null);
      setStats((alt) => {
        const besuche = new Map(alt.besuche);
        for (const [key, wert] of neu.besuche) {
          besuche.set(key, (besuche.get(key) ?? 0) + wert);
        }
        const anzahl = alt.anzahl + neu.anzahl;
        const erfolge = alt.erfolge + neu.erfolge;
        return {
          anzahl,
          erfolge,
          erfolgsquote: anzahl === 0 ? 0 : erfolge / anzahl,
          schnittSchritte: neu.schnittSchritte,
          besuche,
        };
      });
    },
    [modus, p],
  );

  const zuruecksetzen = useCallback(() => {
    setStats(LEER_STATS);
    setLauf(null);
    setSchritt(0);
    setSpielt(false);
    rngRef.current = mulberry32(42);
  }, []);

  /* ── Darstellung ──────────────────────────────────────────────── */

  const maxBesuch = useMemo(() => {
    let m = 0;
    for (const v of stats.besuche.values()) m = Math.max(m, v);
    return m;
  }, [stats.besuche]);

  const pos = lauf ? lauf.pfad[Math.min(schritt, lauf.pfad.length - 1)] : START;
  const fertig = lauf && schritt >= lauf.pfad.length - 1;

  const zellen = [];
  for (let y = 0; y < HOEHE; y++) {
    for (let x = 0; x < BREITE; x++) {
      const besuch = stats.besuche.get(`${x},${y}`) ?? 0;
      const hitze = maxBesuch === 0 ? 0 : besuch / maxBesuch;
      zellen.push(
        <g key={`${x},${y}`}>
          <rect
            x={x * ZELLE}
            y={y * ZELLE}
            width={ZELLE}
            height={ZELLE}
            fill={
              istKlippe(x, y) ? "var(--color-red)" : "var(--color-bg-light)"
            }
            fillOpacity={istKlippe(x, y) ? 0.45 : 1}
            stroke="var(--color-bg-lighter)"
          />
          {!istKlippe(x, y) && hitze > 0 && (
            <rect
              x={x * ZELLE + 4}
              y={y * ZELLE + 4}
              width={ZELLE - 8}
              height={ZELLE - 8}
              fill="var(--color-aqua)"
              fillOpacity={0.1 + 0.6 * hitze}
              rx={4}
            />
          )}
          {istZiel(x, y) && (
            <text
              x={x * ZELLE + ZELLE / 2}
              y={y * ZELLE + ZELLE / 2 + 6}
              textAnchor="middle"
              fontSize="20"
              fill="var(--color-yellow)"
            >
              Z
            </text>
          )}
          {x === START.x && y === START.y && (
            <text
              x={x * ZELLE + ZELLE / 2}
              y={y * ZELLE + ZELLE / 2 + 6}
              textAnchor="middle"
              fontSize="20"
              fill="var(--color-blue)"
            >
              S
            </text>
          )}
        </g>,
      );
    }
  }

  const pfadLinie = lauf
    ? lauf.pfad
        .slice(0, schritt + 1)
        .map((s) => `${s.x * ZELLE + ZELLE / 2},${s.y * ZELLE + ZELLE / 2}`)
        .join(" ")
    : "";

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Der Roboter führt eine Aktion aus — aber der Boden ist rutschig. Mit
        Wahrscheinlichkeit <Tex>{"p"}</Tex> landet er stattdessen auf einem der
        beiden Felder quer zur gewünschten Richtung.
      </p>

      {/* ── Plan oder Strategie: bewusst getrennt ── */}
      <div className={styles.modeBar}>
        <div className={`${styles.modeGroup} ${styles.modeGroupPlan}`}>
          <span className={styles.modeGroupLabel}>Plan</span>
          <span className={styles.modeGroupHint}>
            Eine feste <strong>Liste von Aktionen</strong>, vorher berechnet und
            blind abgearbeitet. Der Roboter schaut nie nach, wo er ist.
          </span>
          <div className={styles.modeButtons}>
            {PLAN_MODI.map((m) => (
              <button
                key={m.key}
                type="button"
                className={`${styles.button} ${modus === m.key ? styles.buttonPlanActive : ""}`}
                onClick={() => setModus(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.modeGroup} ${styles.modeGroupStrategie}`}>
          <span className={styles.modeGroupLabel}>Strategie (Policy)</span>
          <span className={styles.modeGroupHint}>
            Eine <strong>Regel pro Feld</strong>: <Tex>{"\\pi(s) = a"}</Tex>.
            Nach jedem Schritt wird geschaut, wo der Roboter wirklich steht, und
            neu entschieden.
          </span>
          <div className={styles.modeButtons}>
            {STRATEGIE_MODI.map((m) => (
              <button
                key={m.key}
                type="button"
                className={`${styles.button} ${modus === m.key ? styles.buttonStrategieActive : ""}`}
                onClick={() => setModus(m.key)}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Was gerade ausgeführt wird ── */}
      {modus === "strategie" ? (
        <p className={`${styles.aktiveWahl} ${styles.aktiveWahlStrategie}`}>
          <strong>Regel:</strong>
          {REGELN.map((r) => (
            <span key={r} className={styles.regelChip}>
              {r}
            </span>
          ))}
        </p>
      ) : (
        <p className={`${styles.aktiveWahl} ${styles.aktiveWahlPlan}`}>
          <strong>Aktionsliste:</strong>
          {(PLAENE[modus]?.aktionen ?? []).map((a, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Aktionen wiederholen sich im Plan
            <span key={`${a}-${i}`} className={styles.aktionChip}>
              {i + 1}. {GLYPH[a]}
            </span>
          ))}
        </p>
      )}

      <div className={styles.controls}>
        <label className={styles.label} htmlFor="rutsch">
          <Tex>{`p = ${p.toFixed(2)}`}</Tex>
          <input
            id="rutsch"
            className={styles.slider}
            type="range"
            min="0"
            max="0.5"
            step="0.05"
            value={p}
            onChange={(ev) => setP(Number(ev.target.value))}
          />
        </label>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          onClick={einDurchgang}
          disabled={spielt}
        >
          1 Durchgang
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => vieleDurchgaenge(100)}
        >
          +100
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => vieleDurchgaenge(1000)}
        >
          +1000
        </button>
        <button type="button" className={styles.button} onClick={zuruecksetzen}>
          Zurücksetzen
        </button>
      </div>

      <div className={styles.layout}>
        <svg
          className={styles.canvas}
          viewBox={`0 0 ${BREITE * ZELLE} ${HOEHE * ZELLE}`}
          role="img"
          aria-label="Rutschige Gitterwelt"
        >
          <title>Rutschige Gitterwelt</title>
          {zellen}
          {pfadLinie && (
            <polyline
              points={pfadLinie}
              fill="none"
              stroke={PLAENE[modus]?.farbe ?? "var(--color-purple)"}
              strokeWidth="3"
              strokeLinejoin="round"
            />
          )}
          <circle
            cx={pos.x * ZELLE + ZELLE / 2}
            cy={pos.y * ZELLE + ZELLE / 2}
            r={14}
            fill="var(--color-orange)"
          />
        </svg>

        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span>Durchgänge</span>
            <span className={styles.statValue}>{stats.anzahl}</span>
          </div>
          <div className={styles.statRow}>
            <span>Erfolge</span>
            <span className={styles.statValue}>{stats.erfolge}</span>
          </div>
          <div className={styles.statRow}>
            <span>Erfolgsquote</span>
            <span className={styles.statValue}>
              {(stats.erfolgsquote * 100).toFixed(1)} %
            </span>
          </div>
          <div className={styles.bar}>
            <div
              className={styles.barFill}
              style={{ width: `${stats.erfolgsquote * 100}%` }}
            />
          </div>
          {stats.schnittSchritte > 0 && (
            <div className={styles.statRow}>
              <span>Ø Schritte (Erfolg)</span>
              <span className={styles.statValue}>
                {stats.schnittSchritte.toFixed(1)}
              </span>
            </div>
          )}
          <p className={styles.status}>
            {lauf && fertig ? (
              lauf.erfolg ? (
                <span className={styles.erfolg}>
                  Ziel erreicht in {lauf.schritte} Schritten.
                </span>
              ) : (
                <span className={styles.misserfolg}>
                  Gescheitert ({lauf.grund}).
                </span>
              )
            ) : (
              "Ein einzelner Durchgang beweist nichts — lassen Sie 1000 laufen."
            )}
          </p>
        </div>
      </div>

      <div className={styles.legende}>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-red)", opacity: 0.45 }}
          />
          Klippe
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-aqua)" }}
          />
          oft besucht
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-orange)" }}
          />
          Roboter
        </span>
      </div>
    </div>
  );
}
