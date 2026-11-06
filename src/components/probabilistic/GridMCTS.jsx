import { Math as Tex } from "@components/Katex.jsx";
import mcts from "@components/mcts/mcts.module.css";
import { useCallback, useRef, useState } from "react";
import {
  AKTIONEN,
  backprop,
  berechneStrategie,
  besteAktion,
  expandiere,
  GAMMA,
  GLYPH,
  istTerminal,
  iteration,
  MAX_TIEFE,
  neuerBaum,
  rollout,
  selektiere,
  uct,
  wurzelAktionen,
} from "./gridMcts.js";
import { BREITE, HOEHE, istKlippe, istZiel, mulberry32 } from "./gridWorld.js";
import styles from "./probabilistic.module.css";

/**
 * MCTS auf der rutschigen Gitterwelt: So entsteht eine Strategie.
 *
 * Die Suche wird für EIN Feld ausgeführt und liefert dort π(s) — die beste
 * Aktion. Wiederholt man das für jedes Feld, ist die Strategie fertig.
 *
 * Das Widget ist so gebaut, dass man jede Phase einzeln ausführen kann und im
 * Baum sieht, WO sich etwas ändert:
 *   Selection      → UCT-Werte an den Kanten, gewählter Pfad orange
 *   Expansion      → der neue Knoten erscheint (violett, n = 0)
 *   Simulation     → gestrichelter Zufallslauf im Gitter
 *   Backpropagation→ «+Belohnung» an jedem Knoten des Pfades (türkis)
 */

const ZELLE = 56;
/** Abstand zwischen zwei Baum-Ebenen (nach rechts) */
const SPALTE = 168;
/** Abstand zwischen zwei Blättern (nach unten) */
const ZEILE = 64;
const R = 20;
const MAX_ZEICHEN_TIEFE = 3;
const MAX_KINDER = 2;

/** Farbe pro Phase — dieselbe Farbe wird im Baum verwendet. */
const PHASEN = [
  ["select", "1 · Selection", "var(--color-orange)"],
  ["expand", "2 · Expansion", "var(--color-purple)"],
  ["simulate", "3 · Simulation", "var(--color-gray-light)"],
  ["backprop", "4 · Backpropagation", "var(--color-aqua)"],
];

const PHASEN_FARBE = Object.fromEntries(PHASEN.map(([k, , f]) => [k, f]));
const PHASEN_LABEL = Object.fromEntries(PHASEN.map(([k, l]) => [k, l]));

/** Welche Phase wurde ausgeführt, bevor `phase` an der Reihe ist? */
const VORIGE = {
  expand: "select",
  simulate: "expand",
  backprop: "simulate",
  select: "backprop",
};

/** Einzeiler: Was macht der nächste Klick? */
const NAECHSTES = {
  select:
    "von der Wurzel aus mit UCT nach unten laufen — nur auf Knoten, die es schon gibt.",
  expand: "genau einen neuen Knoten an den Baum hängen.",
  simulate:
    "ab dem neuen Knoten zufällig zu Ende spielen (ohne den Baum zu ändern).",
  backprop: "die Belohnung auf dem ganzen Pfad zurück nach oben addieren.",
};

const fmt = (v, n = 2) => (v === null || v === undefined ? "–" : v.toFixed(n));
const fmtUct = (v) =>
  v === null ? "–" : Number.isFinite(v) ? v.toFixed(2) : "∞";

function init(wurzel) {
  return {
    wurzel,
    baum: neuerBaum(wurzel),
    phase: "select",
    pfad: [],
    aktion: null,
    ziel: null,
    neu: null,
    ergebnis: null,
    iterationen: 0,
    policy: null,
    werte: null,
  };
}

/* ── Baum-Layout: Blätter nebeneinander, Eltern mittig darüber ─────── */

/**
 * Der Baum wächst nach RECHTS: Die Tiefe liegt auf der x-Achse, die Blätter
 * werden untereinander gestapelt. So passt er in die Seitenbreite.
 */
function layout(baum, maxTiefe, imPfad, maxKinder = MAX_KINDER) {
  const pos = new Map();
  let zeile = 0;

  const kinderVon = (id) => {
    const k = baum.knoten[id];
    const out = [];
    for (const a of AKTIONEN) {
      if (!k.kinder[a]) continue;
      for (const kid of Object.values(k.kinder[a])) out.push(kid);
    }
    // Bei vielen Iterationen würde der Baum unlesbar breit: Es werden nur die
    // meistbesuchten Kinder gezeichnet (und immer die auf dem aktuellen Pfad).
    out.sort((a, b) => {
      const pa = imPfad.has(a) ? 1 : 0;
      const pb = imPfad.has(b) ? 1 : 0;
      return pb - pa || baum.knoten[b].n - baum.knoten[a].n;
    });
    return out.slice(0, maxKinder);
  };

  const dfs = (id, tiefe) => {
    const kinder = tiefe >= maxTiefe ? [] : kinderVon(id);
    if (kinder.length === 0) {
      const y = zeile++ * ZEILE;
      pos.set(id, { x: tiefe * SPALTE, y });
      return y;
    }
    const ys = kinder.map((kid) => dfs(kid, tiefe + 1));
    const y = (Math.min(...ys) + Math.max(...ys)) / 2;
    pos.set(id, { x: tiefe * SPALTE, y });
    return y;
  };

  dfs(0, 0);
  let tiefste = 0;
  for (const { x } of pos.values()) tiefste = Math.max(tiefste, x);
  return {
    pos,
    breite: tiefste,
    hoehe: Math.max(zeile - 1, 0) * ZEILE,
  };
}

/* ── Komponente ────────────────────────────────────────────────────── */

export default function GridMCTS({
  title = "Monte-Carlo-Baumsuche: so entsteht eine Strategie",
  seed = 7,
}) {
  const [p, setP] = useState(0.2);
  const [c, setC] = useState(0.7);
  const [s, setS] = useState(() => init({ x: 0, y: 2 }));
  const rngRef = useRef(mulberry32(seed));

  const reset = useCallback(
    (wurzel) => {
      rngRef.current = mulberry32(seed);
      setS(init(wurzel ?? s.wurzel));
    },
    [seed, s.wurzel],
  );

  /** Genau eine Phase ausführen (der Baum wird dabei mutiert). */
  const phaseSchritt = useCallback(
    (z) => {
      const rng = rngRef.current;

      if (z.phase === "select") {
        const sel = selektiere(z.baum, c, p, rng);
        return {
          ...z,
          phase: "expand",
          pfad: sel.pfad,
          aktion: sel.aktion,
          ziel: sel.ziel,
          neu: null,
          ergebnis: null,
        };
      }

      if (z.phase === "expand") {
        if (!z.aktion) return { ...z, phase: "simulate", neu: null };
        const pfad = expandiere(z.baum, z.pfad, z.aktion, z.ziel);
        return { ...z, phase: "simulate", pfad, neu: pfad[pfad.length - 1] };
      }

      if (z.phase === "simulate") {
        const blatt = z.baum.knoten[z.pfad[z.pfad.length - 1]];
        return {
          ...z,
          phase: "backprop",
          ergebnis: rollout(blatt.x, blatt.y, p, rng),
        };
      }

      backprop(z.baum, z.pfad, z.ergebnis.belohnung);
      return { ...z, phase: "select", iterationen: z.iterationen + 1 };
    },
    [c, p],
  );

  const naechstePhase = () => setS((alt) => phaseSchritt(alt));

  const laufeIterationen = (anzahl) =>
    setS((alt) => {
      let z = alt;
      // angefangene Iteration zuerst sauber beenden
      let bremse = 0;
      while (z.phase !== "select" && bremse++ < 8) z = phaseSchritt(z);
      for (let i = 0; i < anzahl; i++) iteration(z.baum, c, p, rngRef.current);
      return {
        ...z,
        pfad: [],
        neu: null,
        ergebnis: null,
        iterationen: z.iterationen + anzahl,
      };
    });

  const strategieRechnen = () =>
    setS((alt) => {
      const { policy, werte } = berechneStrategie(p, c, 1500, rngRef.current);
      return { ...alt, policy, werte };
    });

  /* ── abgeleitete Werte ──────────────────────────────────────────── */

  const { baum, phase, pfad, neu, ergebnis, policy } = s;
  const imPfad = new Set(pfad);
  const aktionen = wurzelAktionen(baum, c);
  const empfohlen = besteAktion(baum);
  const { pos, breite, hoehe } = layout(baum, MAX_ZEICHEN_TIEFE, imPfad);

  const maxWert = Math.max(...aktionen.map((a) => a.wert ?? 0), 0.0001);
  const bestUct = Math.max(
    ...aktionen.map((a) => (Number.isFinite(a.uct) ? a.uct : -1)),
  );
  const offeneAktion = aktionen.find((a) => a.n === 0);
  const letzterKnoten = pfad.length ? baum.knoten[pfad[pfad.length - 1]] : null;

  /**
   * `phase` ist die Phase, die der nächste Klick ausführt.
   * `gezeigt` ist die Phase, die gerade gelaufen ist — sie bestimmt, was in
   * Gitter und Baum hervorgehoben wird.
   */
  const gezeigt = pfad.length === 0 ? null : VORIGE[phase];
  const neuKnoten = neu !== null ? baum.knoten[neu] : null;
  /** Von hier aus startet das Rollout (meist der neue Knoten). */
  const rolloutStart = neuKnoten ?? letzterKnoten;
  const platzRechts = gezeigt === "simulate" ? SPALTE : 0;

  /* ── Gitter ─────────────────────────────────────────────────────── */

  const zellen = [];
  for (let y = 0; y < HOEHE; y++) {
    for (let x = 0; x < BREITE; x++) {
      const wurzelFeld = x === s.wurzel.x && y === s.wurzel.y;
      const pfeil = policy?.get(`${x},${y}`);
      zellen.push(
        <g key={`${x},${y}`}>
          {/* biome-ignore lint/a11y/useSemanticElements: in SVG gibt es kein <button> */}
          <rect
            x={x * ZELLE}
            y={y * ZELLE}
            width={ZELLE}
            height={ZELLE}
            fill={
              istKlippe(x, y)
                ? "var(--color-red)"
                : istZiel(x, y)
                  ? "var(--color-yellow)"
                  : "var(--color-bg-light)"
            }
            fillOpacity={istKlippe(x, y) ? 0.45 : istZiel(x, y) ? 0.55 : 1}
            stroke={
              wurzelFeld ? "var(--color-orange)" : "var(--color-bg-lighter)"
            }
            strokeWidth={wurzelFeld ? 3 : 1}
            role="button"
            tabIndex={istTerminal(x, y) ? -1 : 0}
            aria-label={`Suche bei Feld ${x},${y} starten`}
            style={{ cursor: istTerminal(x, y) ? "default" : "pointer" }}
            onClick={() => !istTerminal(x, y) && reset({ x, y })}
            onKeyDown={(ev) => {
              if (
                (ev.key === "Enter" || ev.key === " ") &&
                !istTerminal(x, y)
              ) {
                ev.preventDefault();
                reset({ x, y });
              }
            }}
          />
          {pfeil && !istTerminal(x, y) && (
            <text
              x={x * ZELLE + ZELLE / 2}
              y={y * ZELLE + ZELLE / 2 + 8}
              textAnchor="middle"
              fontSize="24"
              fill="var(--color-purple)"
            >
              {GLYPH[pfeil]}
            </text>
          )}
          {istZiel(x, y) && (
            <text
              x={x * ZELLE + ZELLE / 2}
              y={y * ZELLE + ZELLE / 2 + 6}
              textAnchor="middle"
              fontSize="16"
              fill="var(--color-bg-dark)"
            >
              Ziel
            </text>
          )}
        </g>,
      );
    }
  }

  const mitte = (q) => ({
    x: q.x * ZELLE + ZELLE / 2,
    y: q.y * ZELLE + ZELLE / 2,
  });

  const pfadLinie = pfad
    .map((id) => mitte(baum.knoten[id]))
    .map((q) => `${q.x},${q.y}`)
    .join(" ");

  const zeigeRollout =
    (gezeigt === "simulate" || gezeigt === "backprop") && ergebnis;

  const rolloutLinie = zeigeRollout
    ? ergebnis.pfad
        .map(mitte)
        .map((q) => `${q.x},${q.y}`)
        .join(" ")
    : "";

  const rolloutEnde = zeigeRollout
    ? mitte(ergebnis.pfad[ergebnis.pfad.length - 1])
    : null;

  /* ── Erklärung der aktuellen Phase ──────────────────────────────── */

  const pfadText = pfad.map((id) => {
    const k = baum.knoten[id];
    return `${k.x},${k.y}`;
  });

  /** Was ist beim letzten Klick passiert? (Vergangenheit, mit echten Zahlen) */
  const erklaerung = {
    select: {
      kopf: "1 · Selection ist gelaufen — ausgewählt, nichts Neues gebaut",
      punkte: [
        <>
          Die Suche ist von der Wurzel aus{" "}
          <strong>nur auf Knoten gelaufen, die es im Baum schon gibt</strong>,
          und hat dabei immer die Aktion mit dem grössten{" "}
          <Tex>{"\\mathrm{UCT}"}</Tex> genommen. Gewählter Pfad:{" "}
          <code>{pfadText.join(" → ")}</code> — im Gitter die{" "}
          <span style={{ color: "var(--color-orange)" }}>orange Linie</span>,
          die Felder sind mit 1, 2, 3 … nummeriert.
        </>,
        <>
          Nach jeder gewählten Aktion <em>würfelt die Welt</em> den Nachfolger
          (mit <Tex>{`1-p = ${(1 - p).toFixed(2)}`}</Tex> wie gewollt, mit{" "}
          <Tex>{`p = ${p.toFixed(2)}`}</Tex> ein Rutscher). Darum hängen unter
          einer Aktion mehrere Kinder.
        </>,
        <>
          Der Lauf endete bei{" "}
          <code>
            {letzterKnoten?.x},{letzterKnoten?.y}
          </code>
          , weil dort{" "}
          {s.aktion
            ? "noch nicht alle vier Aktionen ausprobiert wurden"
            : "ein Endzustand oder die maximale Tiefe erreicht ist"}
          . <strong>Im Baum hat sich dabei nichts verändert.</strong>
        </>,
      ],
    },
    expand: {
      kopf: "2 · Expansion ist gelaufen — genau ein neuer Knoten",
      punkte: [
        s.aktion && neuKnoten ? (
          <>
            Am Ende des orangen Pfades wurde die Aktion{" "}
            <code>
              {GLYPH[s.aktion]} {s.aktion}
            </code>{" "}
            zum ersten Mal ausprobiert. Die Welt hat den Ausgang{" "}
            <code>
              {neuKnoten.x},{neuKnoten.y}
            </code>{" "}
            gewürfelt (<Tex>{`P = ${fmt(s.ziel?.prob)}`}</Tex>).
          </>
        ) : (
          <>
            Hier gab es nichts zu expandieren: Der Pfad endet an einem
            Endzustand (Ziel oder Klippe) oder an der maximalen Baumtiefe (
            {MAX_TIEFE}).
          </>
        ),
        <>
          Dieses Feld ist im Gitter{" "}
          <span style={{ color: "var(--color-purple)" }}>violett umrandet</span>{" "}
          und mit <strong>«neu»</strong> beschriftet; im Baum ist es der
          violette Knoten ganz rechts am Pfad.
        </>,
        <>
          <strong>Das ist der Unterschied zur Selection:</strong> Selection
          <em> wählt</em> unter bekannten Knoten aus, Expansion <em>erzeugt</em>{" "}
          einen. Pro Iteration wächst der Baum um genau <strong>einen</strong>{" "}
          Knoten — er startet mit <Tex>{"n = 0"}</Tex> und <Tex>{"w = 0"}</Tex>.
        </>,
      ],
    },
    simulate: {
      kopf: "3 · Simulation ist gelaufen — ein Zufallslauf, kein Baum",
      punkte: [
        <>
          Ab dem Feld{" "}
          <code>
            {rolloutStart?.x},{rolloutStart?.y}
          </code>{" "}
          wurde <strong>nicht mehr gesucht</strong>, sondern nur noch gewürfelt:
          im Gitter die{" "}
          <span style={{ color: "var(--color-gray-light)" }}>
            graue gestrichelte Linie
          </span>{" "}
          mit {ergebnis ? ergebnis.pfad.length - 1 : 0} Schritten.
        </>,
        <>
          Ende:{" "}
          <strong
            style={{
              color:
                ergebnis?.grund === "ziel"
                  ? "var(--color-aqua)"
                  : "var(--color-red)",
            }}
          >
            {ergebnis?.grund === "ziel"
              ? `Ziel erreicht nach ${ergebnis.schritte} Schritten`
              : ergebnis?.grund === "klippe"
                ? "in die Klippe gestürzt"
                : "Schrittlimit erreicht"}
          </strong>{" "}
          → Belohnung <code>{fmt(ergebnis?.belohnung, 3)}</code>
          {ergebnis?.grund === "ziel" ? (
            <>
              {" "}
              = <Tex>{`${GAMMA}^{${ergebnis?.schritte ?? 0}}`}</Tex>
            </>
          ) : null}
          .
        </>,
        <>
          <strong>Keiner dieser Schritte wird zum Baum hinzugefügt</strong> —
          das Rollout ist nur eine billige Schätzung «wie gut ist es hier
          ungefähr?». Darum hängt im Baum bloss ein gestrichelter Stummel am
          violetten Knoten.
        </>,
      ],
    },
    backprop: {
      kopf: "4 · Backpropagation ist gelaufen — die Zahlen sind aktualisiert",
      punkte: [
        <>
          Die Belohnung <code>{fmt(ergebnis?.belohnung, 3)}</code> wurde den
          orangen Pfad <strong>hinaufgereicht</strong>: bei jedem der{" "}
          {pfad.length} Knoten <code>n += 1</code> und{" "}
          <code>w += {fmt(ergebnis?.belohnung, 3)}</code>.
        </>,
        <>
          Im Baum steht neben genau diesen Knoten{" "}
          <span style={{ color: "var(--color-aqua)" }}>
            +{fmt(ergebnis?.belohnung, 2)}
          </span>{" "}
          — ihr Durchschnitt <Tex>{"\\varnothing = w/n"}</Tex> hat sich gerade
          geändert. Der ganze Rest des Baums bleibt unberührt.
        </>,
        <>
          Damit ist eine Iteration fertig. Die nächste beginnt wieder oben bei
          der Wurzel — mit leicht anderen <Tex>{"\\mathrm{UCT}"}</Tex>-Werten,
          also vielleicht einem anderen Ast.
        </>,
      ],
    },
  }[gezeigt] ?? {
    kopf: "Bereit — noch nichts passiert",
    punkte: [
      <>
        Der Baum besteht nur aus der Wurzel: dem Feld, in dem der Roboter steht.
        Klicken Sie auf «Nächste Phase», um eine Iteration in vier Schritten
        mitzuverfolgen.
      </>,
      <>
        Im Gitter können Sie vorher ein anderes Startfeld anklicken — MCTS
        berechnet <Tex>{"\\pi(s)"}</Tex> immer für genau ein Feld.
      </>,
    ],
  };

  /* ── Baumknoten ─────────────────────────────────────────────────── */

  const knotenFarbe = (k) => {
    if (k.id === neu) return "var(--color-purple)";
    if (imPfad.has(k.id)) return "var(--color-orange)";
    if (istZiel(k.x, k.y)) return "var(--color-yellow)";
    if (istKlippe(k.x, k.y)) return "var(--color-red)";
    return "var(--color-aqua)";
  };

  return (
    <div className={mcts.wrapper}>
      {title && <p className={mcts.title}>{title}</p>}

      <p className={styles.hinweis}>
        MCTS wird immer für <strong>einen</strong> Zustand ausgeführt und
        beantwortet genau eine Frage: «Welche Aktion ist <em>hier</em> die
        beste?» — also <Tex>{"\\pi(s)"}</Tex>. Klicken Sie ein Feld an, um die
        Suche dort zu starten. Die vier Knöpfe führen eine Iteration in Zeitlupe
        aus; danach steht in der Box, <strong>was gerade passiert ist</strong> —
        und im Gitter sieht man es: orange der gewählte Pfad, violett das neu
        expandierte Feld, grau gestrichelt der Zufallslauf.
      </p>
      <div className={styles.vergleich}>
        <div
          className={styles.vergleichKarte}
          style={{ borderTopColor: "var(--color-orange)" }}
        >
          <h4 style={{ color: "var(--color-orange)" }}>
            1 · Selection — auswählen
          </h4>
          <ul>
            <li>
              bewegt sich{" "}
              <strong>nur auf Feldern, die schon im Baum sind</strong>
            </li>
            <li>
              entscheidet an jedem Knoten nach <Tex>{"\\mathrm{UCT}"}</Tex>
            </li>
            <li>
              erzeugt <strong>nichts Neues</strong> — der Baum bleibt gleich
              gross
            </li>
            <li>im Gitter: orange Linie, Felder mit 0, 1, 2 … nummeriert</li>
          </ul>
        </div>
        <div
          className={styles.vergleichKarte}
          style={{ borderTopColor: "var(--color-purple)" }}
        >
          <h4 style={{ color: "var(--color-purple)" }}>
            2 · Expansion — erzeugen
          </h4>
          <ul>
            <li>passiert dort, wo die Selection stehen geblieben ist</li>
            <li>
              probiert eine Aktion, die hier <strong>noch nie</strong> dran war
            </li>
            <li>
              hängt <strong>genau einen</strong> neuen Knoten an (
              <Tex>{"n = 0"}</Tex>)
            </li>
            <li>im Gitter: violett umrandetes Feld mit «neu»</li>
          </ul>
        </div>
      </div>

      <p className={styles.hinweis}>
        Belohnung eines Rollouts: <Tex>{"\\gamma^{\\text{Schritte}}"}</Tex> mit{" "}
        <Tex>{`\\gamma = ${GAMMA}`}</Tex> am Ziel, sonst <Tex>{"0"}</Tex>. Der
        Zufallslauf geht dabei zu 50 % grob Richtung Ziel — rein zufälliges
        Herumirren erreicht das Ziel nur in etwa 1 % der Fälle und liefert der
        Suche damit überhaupt kein Signal.
      </p>

      <div className={mcts.controls}>
        <button
          type="button"
          className={`${mcts.button} ${mcts.buttonPrimary}`}
          onClick={naechstePhase}
        >
          ▸ {PHASEN_LABEL[phase]} ausführen
        </button>
        <button
          type="button"
          className={mcts.button}
          onClick={() => laufeIterationen(1)}
        >
          1 Iteration
        </button>
        <button
          type="button"
          className={mcts.button}
          onClick={() => laufeIterationen(100)}
        >
          +100 Iterationen
        </button>
        <button
          type="button"
          className={mcts.button}
          onClick={() => laufeIterationen(1000)}
        >
          +1000 Iterationen
        </button>
        <button type="button" className={mcts.button} onClick={() => reset()}>
          Zurücksetzen
        </button>
      </div>

      {/* ── Phasenanzeige ── */}
      <div className={mcts.phases}>
        {PHASEN.map(([pKey, label, farbe]) => (
          <span
            key={pKey}
            className={`${mcts.phase} ${
              pKey === gezeigt
                ? mcts.phaseAktiv
                : pKey === phase
                  ? styles.phaseNaechste
                  : ""
            }`}
            style={
              pKey === gezeigt
                ? { borderColor: farbe, color: farbe }
                : undefined
            }
          >
            {pKey === gezeigt ? `${label} ✓` : label}
            {pKey === phase ? " ▸" : ""}
          </span>
        ))}
        <span className={styles.phaseZaehler}>
          {s.iterationen} vollständige Iterationen
        </span>
      </div>

      {/* ── Was passiert gerade? ── */}
      <div
        className={styles.phaseBox}
        style={{
          borderLeftColor: gezeigt
            ? PHASEN_FARBE[gezeigt]
            : "var(--color-bg-lighter)",
        }}
      >
        <p
          className={styles.phaseKopf}
          style={{
            color: gezeigt ? PHASEN_FARBE[gezeigt] : "var(--color-gray-light)",
          }}
        >
          {erklaerung.kopf}
        </p>
        <ul className={styles.phaseListe}>
          {erklaerung.punkte.map((punkt, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: feste Reihenfolge pro Phase
            <li key={`${phase}-${i}`}>{punkt}</li>
          ))}
        </ul>
        <p className={styles.phaseNaechstesText}>
          <span style={{ color: PHASEN_FARBE[phase] }}>
            ▸ Nächster Klick — {PHASEN_LABEL[phase]}:
          </span>{" "}
          {NAECHSTES[phase]}
        </p>
      </div>

      <div className={styles.layout}>
        {/* ── Welt ── */}
        <svg
          className={styles.canvas}
          viewBox={`0 0 ${BREITE * ZELLE} ${HOEHE * ZELLE}`}
          role="img"
          aria-label="Rutschige Gitterwelt mit Suchpfad und Strategie"
        >
          <title>Rutschige Gitterwelt mit Suchpfad und Strategie</title>
          {zellen}
          {rolloutLinie && (
            <polyline
              points={rolloutLinie}
              fill="none"
              stroke="var(--color-gray-light)"
              strokeWidth="2.5"
              strokeDasharray="5 4"
              opacity={0.9}
            />
          )}
          {/* Ende des Rollouts markieren */}
          {rolloutEnde && (
            <g>
              <circle
                cx={rolloutEnde.x}
                cy={rolloutEnde.y}
                r={11}
                fill="none"
                stroke={
                  ergebnis.grund === "ziel"
                    ? "var(--color-aqua)"
                    : "var(--color-red)"
                }
                strokeWidth="2.5"
              />
              <text
                x={rolloutEnde.x}
                y={rolloutEnde.y + 4}
                textAnchor="middle"
                fontSize="12"
                fill={
                  ergebnis.grund === "ziel"
                    ? "var(--color-aqua)"
                    : "var(--color-red)"
                }
              >
                {ergebnis.grund === "ziel" ? "✓" : "✗"}
              </text>
            </g>
          )}

          {/* 1 · Selection: der gewählte Pfad, Feld für Feld nummeriert */}
          {pfadLinie && (
            <polyline
              points={pfadLinie}
              fill="none"
              stroke="var(--color-orange)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          )}
          {pfad.map((id, i) => {
            const k = baum.knoten[id];
            if (i === 0) return null;
            return (
              <text
                key={`pfadnr-${id}`}
                x={k.x * ZELLE + ZELLE / 2}
                y={k.y * ZELLE + 16}
                textAnchor="middle"
                fontSize="11"
                fontFamily="monospace"
                fill="var(--color-orange)"
              >
                {i}
              </text>
            );
          })}

          {/* 2 · Expansion: DIESE Zelle ist neu im Baum */}
          {neuKnoten && (
            <g>
              <rect
                x={neuKnoten.x * ZELLE + 3}
                y={neuKnoten.y * ZELLE + 3}
                width={ZELLE - 6}
                height={ZELLE - 6}
                rx={5}
                fill="var(--color-purple)"
                fillOpacity={0.18}
                stroke="var(--color-purple)"
                strokeWidth="2.5"
                strokeDasharray="5 4"
              />
              <text
                x={neuKnoten.x * ZELLE + ZELLE / 2}
                y={neuKnoten.y * ZELLE + ZELLE - 6}
                textAnchor="middle"
                fontSize="11"
                fill="var(--color-purple)"
              >
                neu
              </text>
            </g>
          )}

          {/* Wurzel = Zustand, für den π(s) gesucht wird */}
          <circle
            cx={s.wurzel.x * ZELLE + ZELLE / 2}
            cy={s.wurzel.y * ZELLE + ZELLE / 2}
            r={10}
            fill="var(--color-orange)"
          />
          <text
            x={s.wurzel.x * ZELLE + ZELLE / 2}
            y={s.wurzel.y * ZELLE + 16}
            textAnchor="middle"
            fontSize="11"
            fontFamily="monospace"
            fill="var(--color-orange)"
          >
            0
          </text>
        </svg>

        {/* ── Aktionen an der Wurzel ── */}
        <div className={styles.stats}>
          <p className={styles.panelText}>
            Durchschnittswert der vier Aktionen im Feld{" "}
            <strong>
              ({s.wurzel.x},{s.wurzel.y})
            </strong>
            :
          </p>
          {aktionen.map((a) => (
            <div key={a.aktion}>
              <div className={styles.statRow}>
                <span>
                  {GLYPH[a.aktion]} {a.aktion}
                  {a.aktion === empfohlen ? " ★" : ""}
                </span>
                <span className={styles.statValue}>
                  {fmt(a.wert, 3)} <small>(n = {a.n})</small>
                </span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.barFill}
                  style={{
                    width: `${((a.wert ?? 0) / maxWert) * 100}%`,
                    backgroundColor:
                      a.aktion === empfohlen
                        ? "var(--color-purple)"
                        : "var(--color-aqua)",
                  }}
                />
              </div>
            </div>
          ))}
          <p className={styles.panelText}>
            <Tex>{"\\pi(s) = "}</Tex>{" "}
            {empfohlen ? (
              <strong style={{ color: "var(--color-purple)" }}>
                {GLYPH[empfohlen]} {empfohlen}
              </strong>
            ) : (
              "noch unbekannt"
            )}
          </p>
          <button
            type="button"
            className={`${mcts.button} ${mcts.buttonPrimary}`}
            onClick={strategieRechnen}
          >
            Strategie für alle Felder berechnen
          </button>
          <p className={styles.panelText}>
            1500 Iterationen pro Feld, danach steht in jedem Feld der Pfeil{" "}
            <Tex>{"\\pi(s)"}</Tex>.
          </p>
        </div>
      </div>

      {/* ── Suchbaum ── */}
      <div className={mcts.treeBox}>
        <svg
          viewBox={`${-R - 14} ${-R - 20} ${Math.max(breite + 2 * R + 190 + platzRechts, 780)} ${Math.max(hoehe + 2 * R + 46, 320)}`}
          width="100%"
          style={{ minWidth: "560px" }}
          role="img"
          aria-label="MCTS-Suchbaum über Zuständen der Gitterwelt"
        >
          <title>MCTS-Suchbaum über Zuständen der Gitterwelt</title>

          {/* Kanten */}
          {baum.knoten.map((k) => {
            if (k.eltern === null) return null;
            const a = pos.get(k.eltern);
            const b = pos.get(k.id);
            if (!a || !b) return null;
            const aufPfad = imPfad.has(k.id) && imPfad.has(k.eltern);
            // UCT ist eine Eigenschaft der AKTION, nicht des einzelnen Kindes:
            // deshalb steht derselbe Wert an allen Kanten derselben Aktion.
            const zeigeUct = imPfad.has(k.eltern) || k.eltern === 0;
            const wert = uct(baum, k.eltern, k.aktion, c);
            const beste =
              zeigeUct &&
              AKTIONEN.every(
                (andere) =>
                  andere === k.aktion ||
                  !(uct(baum, k.eltern, andere, c) > wert),
              );
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            return (
              <g key={`e-${k.id}`}>
                <line
                  x1={a.x + R}
                  y1={a.y}
                  x2={b.x - R}
                  y2={b.y}
                  stroke={
                    aufPfad ? "var(--color-orange)" : "var(--color-bg-lighter)"
                  }
                  strokeWidth={aufPfad ? 2.5 : 1.2}
                />
                {zeigeUct ? (
                  <>
                    <rect
                      x={mx - 27}
                      y={my - 20}
                      width={54}
                      height={18}
                      rx={4}
                      fill="var(--color-bg)"
                      fillOpacity={0.95}
                    />
                    <text
                      x={mx}
                      y={my - 7}
                      textAnchor="middle"
                      fontSize="10"
                      fontFamily="monospace"
                      fill={
                        beste
                          ? "var(--color-orange)"
                          : aufPfad
                            ? "var(--color-orange)"
                            : "var(--color-gray)"
                      }
                      fontWeight={beste ? 700 : 400}
                    >
                      {GLYPH[k.aktion]} {fmtUct(wert)}
                    </text>
                  </>
                ) : (
                  <text
                    x={mx}
                    y={my - 7}
                    textAnchor="middle"
                    fontSize="12"
                    fill={aufPfad ? "var(--color-orange)" : "var(--color-gray)"}
                  >
                    {GLYPH[k.aktion]}
                  </text>
                )}
              </g>
            );
          })}

          {/* 3 · Simulation: gestrichelter Stummel am expandierten Knoten */}
          {zeigeRollout && rolloutStart && pos.get(rolloutStart.id) && (
            <g>
              <line
                x1={pos.get(rolloutStart.id).x + R}
                y1={pos.get(rolloutStart.id).y}
                x2={pos.get(rolloutStart.id).x + SPALTE * 0.55}
                y2={pos.get(rolloutStart.id).y}
                stroke="var(--color-gray-light)"
                strokeWidth="2"
                strokeDasharray="3 5"
              />
              <text
                x={pos.get(rolloutStart.id).x + SPALTE * 0.6}
                y={pos.get(rolloutStart.id).y - 4}
                fontSize="11"
                fill="var(--color-gray-light)"
              >
                Rollout: {ergebnis.pfad.length - 1} Schritte
              </text>
              <text
                x={pos.get(rolloutStart.id).x + SPALTE * 0.6}
                y={pos.get(rolloutStart.id).y + 11}
                fontSize="11"
                fontFamily="monospace"
                fill={
                  ergebnis.grund === "ziel"
                    ? "var(--color-aqua)"
                    : "var(--color-red)"
                }
              >
                {ergebnis.grund === "ziel" ? "✓" : "✗"}{" "}
                {fmt(ergebnis.belohnung, 2)}
              </text>
            </g>
          )}

          {/* Knoten */}
          {baum.knoten.map((k) => {
            const pt = pos.get(k.id);
            if (!pt) return null;
            const farbe = knotenFarbe(k);
            const aufPfad = imPfad.has(k.id);
            const zeigeUpdate = gezeigt === "backprop" && aufPfad && ergebnis;
            return (
              <g key={`n-${k.id}`} opacity={k.n === 0 ? 0.55 : 1}>
                {zeigeUpdate && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={R + 5}
                    fill="none"
                    stroke="var(--color-aqua)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                )}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={R}
                  fill="var(--color-bg)"
                  stroke={farbe}
                  strokeWidth="2"
                  strokeDasharray={k.n === 0 ? "3 3" : undefined}
                />
                <text
                  x={pt.x}
                  y={pt.y - 2}
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="monospace"
                  fill={farbe}
                >
                  {`${k.x},${k.y}`}
                </text>
                <text
                  x={pt.x}
                  y={pt.y + 10}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="monospace"
                  fill="var(--color-gray-light)"
                >
                  {k.n === 0 ? "n=0" : `${k.n}`}
                </text>
                <text
                  x={pt.x}
                  y={pt.y + R + 12}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="monospace"
                  fill="var(--color-gray)"
                >
                  {k.n === 0 ? "" : `⌀ ${(k.w / k.n).toFixed(2)}`}
                </text>
                {zeigeUpdate && (
                  <text
                    x={pt.x + R + 4}
                    y={pt.y - 4}
                    fontSize="10"
                    fontFamily="monospace"
                    fill="var(--color-aqua)"
                    fontWeight={700}
                  >
                    +{fmt(ergebnis.belohnung)}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <p className={styles.panelText}>
        Jeder Kreis ist ein <strong>Zustand im Baum</strong>: oben die
        Koordinaten, darunter die Besuchszahl <Tex>{"n"}</Tex>, unter dem Kreis
        der Durchschnittswert <Tex>{"\\varnothing = w/n"}</Tex>. An den Kanten
        steht der <Tex>{"\\mathrm{UCT}"}</Tex>-Wert der jeweiligen Aktion
        (gleiche Aktion = gleicher Wert, auch wenn mehrere Kinder daran hängen).
        Dass unter derselben Aktion mehrere Kinder hängen, ist der Zufall der
        Welt. Der Baum wächst nach <strong>rechts</strong> (die Wurzel ist der
        Zustand, in dem der Roboter gerade steht). Gezeichnet werden nur die
        ersten {MAX_ZEICHEN_TIEFE + 1} Ebenen und pro Knoten die {MAX_KINDER}{" "}
        meistbesuchten Kinder — genau das ist der Punkt: MCTS besucht die
        aussichtsreichen Äste viel öfter als die schlechten.
      </p>

      {/* ── UCT: was macht c? ── */}
      <h3 className={styles.unterTitel}>
        Was macht der Explorationsfaktor <Tex>{"c"}</Tex>?
      </h3>
      <p className={mcts.formel}>
        <Tex>
          {
            "\\mathrm{UCT}(s,a) = \\underbrace{\\frac{W(s,a)}{N(s,a)}}_{\\text{Ausbeutung}} + \\underbrace{c \\cdot \\sqrt{\\frac{\\ln N(s)}{N(s,a)}}}_{\\text{Erkundung}}"
          }
        </Tex>
      </p>
      <p className={styles.panelText}>
        Die <strong>Ausbeutung</strong> ist einfach der bisherige Durchschnitt:
        «Diese Aktion lief bisher gut.» Der <strong>Erkundungsbonus</strong>{" "}
        belohnt Aktionen, die <em>selten</em> probiert wurden — er wird gross,
        wenn <Tex>{"N(s,a)"}</Tex> klein ist, und schrumpft mit jedem Besuch.{" "}
        <Tex>{"c"}</Tex> entscheidet, wie schwer dieser Bonus wiegt. Verändern
        Sie <Tex>{"c"}</Tex> und beobachten Sie die letzte Spalte: Die Suche
        wählt immer die Zeile mit dem grössten <Tex>{"\\mathrm{UCT}"}</Tex>.
      </p>

      <div className={mcts.controls}>
        <span className={styles.label}>
          Erkundung <Tex>{`c = ${c.toFixed(1)}`}</Tex>
        </span>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={c}
          aria-label="Explorationsfaktor c"
          onChange={(e) => setC(Number(e.target.value))}
        />
        <button
          type="button"
          className={mcts.button}
          onClick={() => setC(0)}
          title="nur Ausbeutung"
        >
          c = 0 · nur Ausbeutung
        </button>
        <button type="button" className={mcts.button} onClick={() => setC(0.7)}>
          c = 0.7 · ausgewogen
        </button>
        <button
          type="button"
          className={mcts.button}
          onClick={() => setC(2)}
          title="fast nur Erkundung"
        >
          c = 2 · viel Erkundung
        </button>
        <span className={styles.label}>
          Rutschen <Tex>{`p = ${p.toFixed(2)}`}</Tex>
        </span>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max="0.5"
          step="0.05"
          value={p}
          aria-label="Rutschwahrscheinlichkeit p"
          onChange={(e) => {
            setP(Number(e.target.value));
            reset();
          }}
        />
      </div>

      <table className={mcts.table}>
        <thead>
          <tr>
            <th>
              Aktion an der Wurzel ({s.wurzel.x},{s.wurzel.y})
            </th>
            <th>
              <Tex>{"N(s,a)"}</Tex>
            </th>
            <th>Ausbeutung W/N</th>
            <th>
              Erkundung <Tex>{"c\\sqrt{\\ln N / N(s,a)}"}</Tex>
            </th>
            <th>
              <Tex>{"\\mathrm{UCT}"}</Tex>
            </th>
          </tr>
        </thead>
        <tbody>
          {aktionen.map((a) => (
            <tr
              key={a.aktion}
              className={
                (offeneAktion ? a.aktion === offeneAktion.aktion : false) ||
                (!offeneAktion && a.uct === bestUct)
                  ? mcts.beste
                  : ""
              }
            >
              <td>
                {GLYPH[a.aktion]} {a.aktion}
              </td>
              <td>{a.n}</td>
              <td>{fmt(a.ausbeutung, 3)}</td>
              <td>{a.n === 0 ? "∞" : fmt(a.erkundung, 3)}</td>
              <td>{fmtUct(a.uct)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.panelText}>
        Markiert ist die Zeile, welche die Selection als Nächstes wählen würde.
        Mit <Tex>{"c = 0"}</Tex> zählt nur die mittlere Spalte: Die Suche
        klammert sich an das, was zufällig zuerst gut lief, und probiert
        Alternativen nie wieder. Mit grossem <Tex>{"c"}</Tex> dominiert die
        rechte Spalte: Alle vier Aktionen werden etwa gleich oft besucht, der
        Baum bleibt überall gleich flach — viel Aufwand, wenig Tiefe.
      </p>

      <div className={styles.legende}>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-orange)" }}
          />
          1 · Selection: Pfad &amp; Wurzel
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-purple)" }}
          />
          2 · Expansion: neuer Knoten · <Tex>{"\\pi(s)"}</Tex>
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-gray-light)" }}
          />
          3 · Simulation: Rollout
        </span>
        <span className={styles.legendeItem}>
          <span
            className={styles.swatch}
            style={{ backgroundColor: "var(--color-aqua)" }}
          />
          4 · Backpropagation: aktualisierte Knoten
        </span>
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
            style={{ backgroundColor: "var(--color-yellow)", opacity: 0.55 }}
          />
          Ziel
        </span>
      </div>
    </div>
  );
}
