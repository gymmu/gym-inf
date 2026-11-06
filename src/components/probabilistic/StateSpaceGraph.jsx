import { DMath, Math as Tex } from "@components/Katex.jsx";
import { useId, useState } from "react";
import { QUER, RICHTUNGEN } from "./gridWorld.js";
import styles from "./probabilistic.module.css";

/**
 * Ein hypothetischer Plan und sein Zustandsraum.
 *
 * Wir nehmen eine bewusst kleine Welt (4 × 3) und einen Plan, also eine feste
 * Liste von Aktionen. Daraus falten wir den Zustandsraum Schritt für Schritt
 * auf:
 *
 *   Tab «klassisch»      — jede Aktion hat genau einen Nachfolger. Der
 *                          Zustandsraum des Plans ist eine KETTE: ein
 *                          deterministischer Automat, Schritt für Schritt.
 *   Tab «probabilistisch» — dieselbe Aktion hat bis zu drei Nachfolger. Aus der
 *                          Kette wird ein BAUM mit Wahrscheinlichkeiten, die
 *                          sich pro Zustand zu 1 addieren.
 *
 * In jedem Zustand stehen immer alle vier Aktionen zur Verfügung; der Plan
 * wählt davon pro Schritt nur eine aus. Die ungenutzten Möglichkeiten sind
 * immer als blasse, gestrichelte Kanten mitgezeichnet.
 */

/* ── Kleine Welt ────────────────────────────────────────────────────── */

const BREITE = 4;
const HOEHE = 3;
/** . = frei, S = Start, Z = Ziel, ! = Klippe */
const KARTE = ["....", "....", "S!!Z"];
const START = { x: 0, y: 2 };

const feld = (x, y) =>
  x < 0 || y < 0 || x >= BREITE || y >= HOEHE ? null : KARTE[y][x];
const istKlippe = (x, y) => feld(x, y) === "!";
const istZiel = (x, y) => feld(x, y) === "Z";
const istTerminal = (x, y) => istKlippe(x, y) || istZiel(x, y);

/** Gegen die Wand laufen: der Roboter bleibt stehen. */
function nachfolger(x, y, richtung) {
  const { dx, dy } = RICHTUNGEN[richtung];
  const nx = x + dx;
  const ny = y + dy;
  return feld(nx, ny) === null ? { x, y } : { x: nx, y: ny };
}

/** P(s' | s, a) in dieser kleinen Welt. */
function uebergaenge(x, y, aktion, p) {
  const roh = [
    [aktion, 1 - p],
    [QUER[aktion][0], p / 2],
    [QUER[aktion][1], p / 2],
  ];
  const verteilung = new Map();
  for (const [richtung, prob] of roh) {
    if (prob <= 0) continue;
    const ziel = nachfolger(x, y, richtung);
    const key = `${ziel.x},${ziel.y}`;
    const vorhanden = verteilung.get(key);
    if (vorhanden) vorhanden.prob += prob;
    else verteilung.set(key, { ...ziel, prob, haupt: richtung === aktion });
  }
  return [...verteilung.values()];
}

/* ── Aktionen & Pläne ───────────────────────────────────────────────── */

const AKTIONEN = [
  { key: "oben", glyph: "↑", label: "↑ oben" },
  { key: "rechts", glyph: "→", label: "→ rechts" },
  { key: "unten", glyph: "↓", label: "↓ unten" },
  { key: "links", glyph: "←", label: "← links" },
];

const glyph = (a) => AKTIONEN.find((k) => k.key === a)?.glyph ?? "?";

const PLAN_VORLAGEN = {
  kurz: {
    label: "«kurz» (der Klippe entlang)",
    aktionen: ["oben", "rechts", "rechts", "rechts", "unten"],
  },
  sicher: {
    label: "«sicher» (oben herum)",
    aktionen: ["oben", "oben", "rechts", "rechts", "rechts", "unten", "unten"],
  },
};

/* ── Zustandsraum des Plans aufklappen ──────────────────────────────── */

/**
 * @returns {{schichten: object[][], kanten: object[]}}
 * schichten[i] = Zustände nach i Schritten (i = 0 … plan.length)
 */
function faltePlanAuf(plan, p) {
  const startKey = `${START.x},${START.y}`;
  const schichten = [
    new Map([[startKey, { ...START, prob: 1, ghost: false }]]),
  ];
  const kanten = [];

  plan.forEach((aktion, i) => {
    const aktuell = schichten[i];
    const naechste = new Map();

    const hinzu = (s, prob, ghost) => {
      const key = `${s.x},${s.y}`;
      const da = naechste.get(key);
      if (da) {
        if (!ghost) {
          da.prob += prob;
          da.ghost = false;
        }
      } else {
        naechste.set(key, { x: s.x, y: s.y, prob: ghost ? 0 : prob, ghost });
      }
      return key;
    };

    for (const [vonKey, knoten] of aktuell) {
      if (knoten.ghost) continue; // blasse Alternativen wachsen nicht weiter

      // Klippe und Ziel sind terminal: der Zustand bleibt, wie er ist.
      if (istTerminal(knoten.x, knoten.y)) {
        const nachKey = hinzu(knoten, knoten.prob, false);
        kanten.push({
          schicht: i,
          von: vonKey,
          nach: nachKey,
          prob: 1,
          label: "",
          art: "terminal",
        });
        continue;
      }

      for (const ziel of uebergaenge(knoten.x, knoten.y, aktion, p)) {
        const nachKey = hinzu(ziel, knoten.prob * ziel.prob, false);
        kanten.push({
          schicht: i,
          von: vonKey,
          nach: nachKey,
          prob: ziel.prob,
          label: ziel.prob.toFixed(2),
          art: ziel.haupt ? "plan" : "rutsch",
        });
      }

      // In jedem Zustand stehen alle vier Aktionen zur Verfügung: die nicht
      // gewählten werden als blasse Alternativen mitgezeichnet.
      for (const a of AKTIONEN) {
        if (a.key === aktion) continue;
        const ziel = nachfolger(knoten.x, knoten.y, a.key);
        const nachKey = hinzu(ziel, 0, true);
        kanten.push({
          schicht: i,
          von: vonKey,
          nach: nachKey,
          prob: 0,
          label: a.glyph,
          art: "alternative",
        });
      }
    }

    schichten.push(naechste);
  });

  const sortiert = schichten.map((m) =>
    [...m.values()].sort((a, b) => a.y - b.y || a.x - b.x),
  );

  return { schichten: sortiert, kanten };
}

/* ── Geometrie ──────────────────────────────────────────────────────── */

const SPALTE = 132;
const ZEILE = 70;
const PADX = 54;
const PADY = 46;
const R = 20;

function layout(schichten) {
  const maxZeilen = Math.max(...schichten.map((s) => s.length), 1);
  const H = Math.max(2 * PADY + (maxZeilen - 1) * ZEILE, 200);
  const W = 2 * PADX + (schichten.length - 1) * SPALTE;
  const pos = new Map();
  schichten.forEach((knoten, i) => {
    knoten.forEach((k, j) => {
      pos.set(`${i}|${k.x},${k.y}`, {
        x: PADX + i * SPALTE,
        y: H / 2 + (j - (knoten.length - 1) / 2) * ZEILE,
      });
    });
  });
  return { W, H, pos };
}

function strecke(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: a.x + ux * R,
    y1: a.y + uy * R,
    x2: b.x - ux * (R + 7),
    y2: b.y - uy * (R + 7),
    mx: a.x + ux * len * 0.52,
    my: a.y + uy * len * 0.52,
  };
}

const KANTE_STIL = {
  plan: { farbe: "var(--color-aqua)", dash: undefined, opacity: 1 },
  rutsch: { farbe: "var(--color-purple)", dash: "5 4", opacity: 0.95 },
  terminal: { farbe: "var(--color-gray)", dash: "2 5", opacity: 0.7 },
  alternative: { farbe: "var(--color-gray)", dash: "3 4", opacity: 0.35 },
};

function knotenFarbe(x, y, ghost) {
  if (ghost) return "var(--color-bg)";
  if (istKlippe(x, y)) return "var(--color-red)";
  if (istZiel(x, y)) return "var(--color-yellow)";
  return "var(--color-bg-light)";
}

/* ── Der aufgefaltete Graph ─────────────────────────────────────────── */

function PlanGraph({ idBase, plan, p, zeigeProb }) {
  const { schichten, kanten } = faltePlanAuf(plan, p);
  const { W, H, pos } = layout(schichten);

  return (
    <svg
      className={styles.bigGraph}
      viewBox={`0 0 ${W} ${H + 34}`}
      role="img"
      aria-label="Zustandsraum des Plans"
    >
      <title>Zustandsraum des Plans</title>
      <defs>
        {Object.entries(KANTE_STIL).map(([art, stil]) => (
          <marker
            key={art}
            id={`pfeil-${idBase}-${art}`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={stil.farbe} />
          </marker>
        ))}
      </defs>

      {/* Schritt-Beschriftung */}
      {schichten.map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: der Index IST die Schrittnummer und damit stabil
        <g key={`kopf-${i}`}>
          <text
            x={PADX + i * SPALTE}
            y={18}
            textAnchor="middle"
            fontSize="11"
            fill="var(--color-gray-light)"
          >
            {i === 0 ? "Start" : `nach ${i}`}
          </text>
          {i < plan.length ? (
            <text
              x={PADX + i * SPALTE + SPALTE / 2}
              y={34}
              textAnchor="middle"
              fontSize="13"
              fill="var(--color-aqua)"
            >
              {`${glyph(plan[i])} ${plan[i]}`}
            </text>
          ) : null}
        </g>
      ))}

      <g transform="translate(0 34)">
        {/* Kanten */}
        {kanten.map((k, idx) => {
          const a = pos.get(`${k.schicht}|${k.von}`);
          const b = pos.get(`${k.schicht + 1}|${k.nach}`);
          if (!a || !b) return null;
          const stil = KANTE_STIL[k.art];
          const s = strecke(a, b);
          const zeigeLabel =
            k.art === "alternative"
              ? true
              : k.art === "terminal"
                ? false
                : zeigeProb;
          return (
            <g
              // biome-ignore lint/suspicious/noArrayIndexKey: Kanten haben keine stabile eigene Identität
              key={`${k.schicht}-${k.von}-${k.nach}-${k.art}-${idx}`}
              opacity={stil.opacity}
            >
              <line
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke={stil.farbe}
                strokeWidth={k.art === "alternative" ? 1.2 : 1.2 + 3.5 * k.prob}
                strokeDasharray={stil.dash}
                markerEnd={`url(#pfeil-${idBase}-${k.art})`}
              />
              {zeigeLabel ? (
                <g>
                  <rect
                    x={s.mx - 17}
                    y={s.my - 9}
                    width={34}
                    height={18}
                    rx={4}
                    fill="var(--color-bg-dark)"
                    fillOpacity={0.9}
                  />
                  <text
                    x={s.mx}
                    y={s.my + 4}
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="monospace"
                    fill={stil.farbe}
                  >
                    {k.label}
                  </text>
                </g>
              ) : null}
            </g>
          );
        })}

        {/* Knoten */}
        {schichten.map((knoten, i) =>
          knoten.map((k) => {
            const pt = pos.get(`${i}|${k.x},${k.y}`);
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: der Index IST die Schrittnummer und damit stabil
              <g key={`n-${i}-${k.x},${k.y}`}>
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={R}
                  fill={knotenFarbe(k.x, k.y, k.ghost)}
                  fillOpacity={k.ghost ? 1 : istKlippe(k.x, k.y) ? 0.6 : 1}
                  stroke={
                    k.ghost
                      ? "var(--color-gray)"
                      : istZiel(k.x, k.y)
                        ? "var(--color-yellow)"
                        : "var(--color-bg-lighter)"
                  }
                  strokeOpacity={k.ghost ? 0.4 : 1}
                  strokeDasharray={k.ghost ? "3 3" : undefined}
                  strokeWidth={2}
                />
                <text
                  x={pt.x}
                  y={pt.y + 4}
                  textAnchor="middle"
                  fontSize="12"
                  fontFamily="monospace"
                  fill={k.ghost ? "var(--color-gray)" : "var(--color-fg)"}
                >
                  {`${k.x},${k.y}`}
                </text>
                {!k.ghost && zeigeProb ? (
                  <text
                    x={pt.x}
                    y={pt.y + R + 14}
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="monospace"
                    fill={
                      istKlippe(k.x, k.y)
                        ? "var(--color-red)"
                        : istZiel(k.x, k.y)
                          ? "var(--color-yellow)"
                          : "var(--color-gray-light)"
                    }
                  >
                    {`${(k.prob * 100).toFixed(0)}%`}
                  </text>
                ) : null}
              </g>
            );
          }),
        )}
      </g>
    </svg>
  );
}

/* ── Minikarte mit dem gewollten Plan-Pfad ──────────────────────────── */

const ZELLE = 46;

function MiniKarte({ plan }) {
  // der «gewollte» Pfad: Plan ohne Rutschen
  const pfad = [{ ...START }];
  let cur = { ...START };
  for (const a of plan) {
    if (istTerminal(cur.x, cur.y)) break;
    cur = nachfolger(cur.x, cur.y, a);
    pfad.push({ ...cur });
  }

  const zellen = [];
  for (let y = 0; y < HOEHE; y++) {
    for (let x = 0; x < BREITE; x++) {
      zellen.push(
        <g key={`${x},${y}`}>
          <rect
            x={x * ZELLE}
            y={y * ZELLE}
            width={ZELLE}
            height={ZELLE}
            rx={3}
            fill={
              istKlippe(x, y)
                ? "var(--color-red)"
                : istZiel(x, y)
                  ? "var(--color-yellow)"
                  : "var(--color-bg-light)"
            }
            fillOpacity={istKlippe(x, y) ? 0.5 : 1}
            stroke="var(--color-bg-lighter)"
          />
          <text
            x={x * ZELLE + ZELLE / 2}
            y={y * ZELLE + ZELLE / 2 + 4}
            textAnchor="middle"
            fontSize="11"
            fontFamily="monospace"
            fill="var(--color-gray-light)"
          >
            {`${x},${y}`}
          </text>
        </g>,
      );
    }
  }

  return (
    <svg
      className={styles.picker}
      viewBox={`0 0 ${BREITE * ZELLE} ${HOEHE * ZELLE}`}
      role="img"
      aria-label="Kleine Gitterwelt mit dem gewollten Pfad"
    >
      <title>Kleine Gitterwelt mit dem gewollten Pfad</title>
      {zellen}
      <polyline
        points={pfad
          .map((s) => `${s.x * ZELLE + ZELLE / 2},${s.y * ZELLE + ZELLE / 2}`)
          .join(" ")}
        fill="none"
        stroke="var(--color-aqua)"
        strokeWidth={3}
        strokeLinejoin="round"
        opacity={0.8}
      />
      <circle
        cx={START.x * ZELLE + ZELLE / 2}
        cy={START.y * ZELLE + ZELLE / 2}
        r={7}
        fill="var(--color-aqua)"
      />
    </svg>
  );
}

/* ── Widget ─────────────────────────────────────────────────────────── */

const TABS = [
  { key: "klassisch", label: "Klassisch (deterministisch)" },
  { key: "probabilistisch", label: "Probabilistisch (mit Rutschen)" },
];

export default function StateSpaceGraph({
  title = "Ein Plan und sein Zustandsraum",
}) {
  const idBase = useId().replace(/:/g, "");
  const [tab, setTab] = useState("klassisch");
  const [plan, setPlan] = useState(PLAN_VORLAGEN.kurz.aktionen);
  const [p, setP] = useState(0.2);

  const pAktiv = tab === "klassisch" ? 0 : p;
  const { schichten } = faltePlanAuf(plan, pAktiv);
  const ende = schichten[schichten.length - 1];

  const pZiel = ende
    .filter((k) => istZiel(k.x, k.y))
    .reduce((s, k) => s + k.prob, 0);
  const pKlippe = ende
    .filter((k) => istKlippe(k.x, k.y))
    .reduce((s, k) => s + k.prob, 0);
  const pUnterwegs = Math.max(0, 1 - pZiel - pKlippe);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Wir nehmen eine kleine Welt (4 × 3) und einen <strong>Plan</strong>:
        eine feste Liste von Aktionen, die stur abgearbeitet wird. Der Graph
        darunter ist der Zustandsraum <em>dieses Plans</em>, Schritt für Schritt
        aufgefaltet. In jedem Zustand stehen alle vier Aktionen zur Verfügung —
        der Plan wählt davon pro Schritt genau eine aus.
      </p>

      {/* ── Reiter ── */}
      <div className={styles.tabs} role="tablist" aria-label="Darstellung">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${idBase}-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`panel-${idBase}`}
            className={`${styles.tab} ${tab === t.key ? styles.tabActive : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Plan bauen ── */}
      <div className={styles.controls}>
        <span className={styles.label}>Plan:</span>
        {AKTIONEN.map((a) => (
          <button
            key={a.key}
            type="button"
            className={styles.button}
            disabled={plan.length >= 9}
            onClick={() => setPlan((alt) => [...alt, a.key])}
          >
            + {a.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.button}
          disabled={plan.length === 0}
          onClick={() => setPlan((alt) => alt.slice(0, -1))}
        >
          ⟵ letzte Aktion weg
        </button>
        {Object.entries(PLAN_VORLAGEN).map(([key, v]) => (
          <button
            key={key}
            type="button"
            className={styles.button}
            onClick={() => setPlan(v.aktionen)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <p className={styles.planText}>
        {plan.length === 0 ? (
          <em>leerer Plan</em>
        ) : (
          plan.map((a, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Aktionen dürfen sich im Plan wiederholen
            <span key={`${a}-${i}`} className={styles.planChip}>
              {i + 1}. {glyph(a)} {a}
            </span>
          ))
        )}
      </p>

      {tab === "probabilistisch" ? (
        <div className={styles.controls}>
          <label className={styles.label} htmlFor={`p-${idBase}`}>
            <Tex>{`p = ${p.toFixed(2)}`}</Tex>
            <input
              id={`p-${idBase}`}
              className={styles.slider}
              type="range"
              min="0.05"
              max="0.5"
              step="0.05"
              value={p}
              onChange={(ev) => setP(Number(ev.target.value))}
            />
          </label>
        </div>
      ) : null}

      <div className={styles.layout}>
        <div
          role="tabpanel"
          id={`panel-${idBase}`}
          aria-labelledby={`tab-${idBase}-${tab}`}
        >
          {plan.length === 0 ? (
            <p className={styles.panelText}>
              Fügen Sie oben Aktionen hinzu, um den Zustandsraum zu sehen.
            </p>
          ) : (
            <PlanGraph
              idBase={`${idBase}-${tab}`}
              plan={plan}
              p={pAktiv}
              zeigeProb={tab === "probabilistisch"}
            />
          )}
        </div>

        <div className={styles.stats}>
          <MiniKarte plan={plan} />
          <div className={styles.statRow}>
            <span>Zustände im Graph</span>
            <span className={styles.statValue}>
              {schichten.reduce((s, l) => s + l.length, 0)}
            </span>
          </div>
          <div className={styles.statRow}>
            <span>Ziel erreicht</span>
            <span className={styles.statValue}>
              {(pZiel * 100).toFixed(1)} %
            </span>
          </div>
          <div className={styles.statRow}>
            <span>abgestürzt</span>
            <span className={styles.statValue}>
              {(pKlippe * 100).toFixed(1)} %
            </span>
          </div>
          <div className={styles.statRow}>
            <span>noch unterwegs</span>
            <span className={styles.statValue}>
              {(pUnterwegs * 100).toFixed(1)} %
            </span>
          </div>
        </div>
      </div>

      {tab === "klassisch" ? (
        <>
          <p className={styles.panelText}>
            Jede Aktion führt zu <strong>genau einem</strong> Nachfolger: Der
            Zustandsraum des Plans ist eine <em>Kette</em> — ein
            deterministischer Automat, den man einfach ablaufen kann. Vorher
            berechnen, nachher ausführen: Das ist genau die Annahme hinter BFS,
            Dijkstra und A*. Blass daneben stehen die Alternativen: die drei
            Aktionen, die in jedem Zustand ebenfalls möglich gewesen wären, die
            der Plan aber verworfen hat.
          </p>
          <DMath>
            {`P\\big(\\text{Ziel} \\mid \\text{Plan}\\big) = ${pZiel.toFixed(0)}`}
          </DMath>
        </>
      ) : (
        <>
          <p className={styles.panelText}>
            Jetzt hat dieselbe Aktion bis zu <strong>drei</strong> Nachfolger:
            mit <Tex>{`1 - p = ${(1 - p).toFixed(2)}`}</Tex> die gewollte
            (durchgezogen), mit je <Tex>{`p/2 = ${(p / 2).toFixed(2)}`}</Tex>{" "}
            ein Rutscher zur Seite (gestrichelt). Aus der Kette wird ein{" "}
            <em>Baum</em>: Der Plan hat nicht mehr ein Ergebnis, sondern eine{" "}
            <em>Verteilung</em> über Ergebnisse. Die Prozentzahlen unter den
            Knoten sind die Wahrscheinlichkeiten, nach so vielen Schritten genau
            dort zu sein; pro Schicht ergeben sie zusammen 1.
          </p>
          <DMath>
            {`P\\big(\\text{Ziel} \\mid \\text{Plan}\\big) = ${pZiel.toFixed(3)} \\qquad P\\big(\\text{Klippe} \\mid \\text{Plan}\\big) = ${pKlippe.toFixed(3)}`}
          </DMath>
        </>
      )}

      <div className={styles.legende}>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-aqua)" }}
          />
          gewollte Aktion
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-purple)" }}
          />
          Rutscher
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-red)", opacity: 0.6 }}
          />
          Klippe (terminal)
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-yellow)" }}
          />
          Ziel (terminal)
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px dashed var(--color-gray)",
            }}
          />
          nicht gewählte Aktion
        </span>
      </div>
    </div>
  );
}
