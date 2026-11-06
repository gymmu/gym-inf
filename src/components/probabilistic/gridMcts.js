/**
 * Monte-Carlo-Baumsuche (MCTS) auf der rutschigen Gitterwelt.
 *
 * Unterschied zum Spielbaum: Eine Aktion führt hier nicht zu EINEM Nachfolger,
 * sondern zu einer Verteilung. Der Suchbaum verzweigt deshalb zweifach:
 *
 *     Zustand ──Aktion──> gewürfelter Nachfolgezustand ──Aktion──> …
 *
 * Pro Zustand und Aktion sammeln wir N(s,a) (Besuche) und W(s,a) (Summe der
 * Belohnungen). Die Strategie entsteht am Schluss ganz einfach:
 *
 *     π(s) = die Aktion mit den meisten Besuchen
 *
 * Belohnung eines Rollouts:  Ziel → γ^Schritte,  Klippe → 0,  Abbruch → 0.
 * Der Faktor γ < 1 macht kurze Wege wertvoller als lange — genau dadurch
 * entsteht der Zielkonflikt «schnell» gegen «sicher».
 */

import {
  BREITE,
  feld,
  HOEHE,
  istKlippe,
  istZiel,
  QUER,
  RICHTUNGEN,
  START,
  uebergaenge,
  ZIEL,
} from "./gridWorld.js";

export const AKTIONEN = ["oben", "rechts", "unten", "links"];

export const GLYPH = { oben: "↑", rechts: "→", unten: "↓", links: "←" };

/** Schrittkosten als Abzinsung: ein Schritt mehr ist 5 % weniger wert. */
export const GAMMA = 0.95;

/** Nach so vielen Ebenen hört der Baum auf (dann folgt ein Rollout). */
export const MAX_TIEFE = 6;

/** Reissleine für Rollouts, damit sie nicht ewig im Kreis laufen. */
export const MAX_ROLLOUT = 40;

/**
 * Rollout-Policy: Mit dieser Wahrscheinlichkeit geht der Zufallslauf grob
 * Richtung Ziel, sonst rein zufällig.
 *
 * Warum nicht 0, also reines Würfeln? Weil ein Irrläufer in dieser Welt das
 * Ziel nur in rund 1 % der Fälle erreicht — fast jedes Rollout liefert 0, und
 * die Suche bekommt gar kein Signal. Echte MCTS-Programme machen es genauso:
 * Sie geben dem Rollout eine simple Faustregel mit («heavy playout»).
 */
export const ROLLOUT_BIAS = 0.5;

export const istTerminal = (x, y) => istKlippe(x, y) || istZiel(x, y);

const key = (x, y) => `${x},${y}`;

/* ── Baum ──────────────────────────────────────────────────────────── */

/**
 * Ein Knoten ist ein ZUSTAND im Baum (nicht einfach ein Feld: dasselbe Feld
 * kann an verschiedenen Stellen des Baums mehrfach vorkommen).
 *
 * kinder: { aktion: { "x,y": id } }  — pro Aktion die gewürfelten Nachfolger
 */
export function neuerBaum(start = START) {
  return {
    knoten: [
      {
        id: 0,
        x: start.x,
        y: start.y,
        eltern: null,
        aktion: null,
        prob: 1,
        tiefe: 0,
        n: 0,
        w: 0,
        kinder: {},
      },
    ],
  };
}

function kindHinzu(baum, elternId, aktion, ziel) {
  const eltern = baum.knoten[elternId];
  const id = baum.knoten.length;
  baum.knoten.push({
    id,
    x: ziel.x,
    y: ziel.y,
    eltern: elternId,
    aktion,
    prob: ziel.prob,
    tiefe: eltern.tiefe + 1,
    n: 0,
    w: 0,
    kinder: {},
  });
  if (!eltern.kinder[aktion]) eltern.kinder[aktion] = {};
  eltern.kinder[aktion][key(ziel.x, ziel.y)] = id;
  return id;
}

/** N(s,a) und W(s,a): über alle gewürfelten Nachfolger aufsummiert. */
export function aktionsStats(baum, id, aktion) {
  const kinder = baum.knoten[id].kinder[aktion];
  if (!kinder) return { n: 0, w: 0 };
  let n = 0;
  let w = 0;
  for (const kindId of Object.values(kinder)) {
    n += baum.knoten[kindId].n;
    w += baum.knoten[kindId].w;
  }
  return { n, w };
}

export function uct(baum, id, aktion, c) {
  const { n, w } = aktionsStats(baum, id, aktion);
  if (n === 0) return Number.POSITIVE_INFINITY;
  const N = Math.max(baum.knoten[id].n, 1);
  return w / n + c * Math.sqrt(Math.log(N) / n);
}

/* ── Phase 1: Selection ────────────────────────────────────────────── */

function wuerfleNachfolger(x, y, aktion, p, rng) {
  const verteilung = uebergaenge(x, y, aktion, p);
  let r = rng();
  for (const ziel of verteilung) {
    r -= ziel.prob;
    if (r <= 0) return ziel;
  }
  return verteilung[verteilung.length - 1];
}

/**
 * Läuft mit UCT von der Wurzel nach unten.
 * @returns {{pfad:number[], aktion:string|null, ziel:object|null, grund:string}}
 *   aktion/ziel beschreiben den Knoten, den die Expansion anhängen soll.
 */
export function selektiere(baum, c, p, rng) {
  const pfad = [0];
  let id = 0;

  for (;;) {
    const k = baum.knoten[id];
    if (istTerminal(k.x, k.y))
      return { pfad, aktion: null, ziel: null, grund: "terminal" };
    if (k.tiefe >= MAX_TIEFE)
      return { pfad, aktion: null, ziel: null, grund: "tiefe" };

    // 1. Gibt es eine Aktion, die hier noch nie probiert wurde?
    const offen = AKTIONEN.filter((a) => !k.kinder[a]);
    if (offen.length > 0) {
      const aktion = offen[Math.floor(rng() * offen.length)];
      return {
        pfad,
        aktion,
        ziel: wuerfleNachfolger(k.x, k.y, aktion, p, rng),
        grund: "neue Aktion",
      };
    }

    // 2. Sonst: beste Aktion nach UCT wählen …
    let beste = AKTIONEN[0];
    let bestWert = Number.NEGATIVE_INFINITY;
    for (const a of AKTIONEN) {
      const wert = uct(baum, id, a, c);
      if (wert > bestWert) {
        bestWert = wert;
        beste = a;
      }
    }

    // … und den Nachfolger auswürfeln (hier steckt der Zufall der Welt!)
    const ziel = wuerfleNachfolger(k.x, k.y, beste, p, rng);
    const vorhanden = k.kinder[beste][key(ziel.x, ziel.y)];
    if (vorhanden === undefined) {
      // dieser Ausgang ist zum ersten Mal eingetreten → neuer Knoten
      return { pfad, aktion: beste, ziel, grund: "neuer Ausgang" };
    }
    id = vorhanden;
    pfad.push(id);
  }
}

/* ── Phase 2: Expansion ────────────────────────────────────────────── */

export function expandiere(baum, pfad, aktion, ziel) {
  const id = kindHinzu(baum, pfad[pfad.length - 1], aktion, ziel);
  return [...pfad, id];
}

/* ── Phase 3: Simulation (Rollout mit Zufallsstrategie) ────────────── */

/** Die Faustregel des Rollouts: grob Richtung Ziel. */
function grobRichtungZiel(x, y) {
  if (x < ZIEL.x) return "rechts";
  if (x > ZIEL.x) return "links";
  return y < ZIEL.y ? "unten" : "oben";
}

export function rollout(x, y, p, rng) {
  const pfad = [{ x, y }];
  if (istZiel(x, y)) return { pfad, belohnung: 1, grund: "ziel", schritte: 0 };
  if (istKlippe(x, y))
    return { pfad, belohnung: 0, grund: "klippe", schritte: 0 };

  let cx = x;
  let cy = y;
  for (let i = 1; i <= MAX_ROLLOUT; i++) {
    const gewollt =
      rng() < ROLLOUT_BIAS
        ? grobRichtungZiel(cx, cy)
        : AKTIONEN[Math.floor(rng() * AKTIONEN.length)];
    let tatsaechlich = gewollt;
    const r = rng();
    if (r < p / 2) tatsaechlich = QUER[gewollt][0];
    else if (r < p) tatsaechlich = QUER[gewollt][1];

    const { dx, dy } = RICHTUNGEN[tatsaechlich];
    if (feld(cx + dx, cy + dy) !== null) {
      cx += dx;
      cy += dy;
    }
    pfad.push({ x: cx, y: cy });

    if (istZiel(cx, cy))
      return { pfad, belohnung: GAMMA ** i, grund: "ziel", schritte: i };
    if (istKlippe(cx, cy))
      return { pfad, belohnung: 0, grund: "klippe", schritte: i };
  }
  return { pfad, belohnung: 0, grund: "abbruch", schritte: MAX_ROLLOUT };
}

/* ── Phase 4: Backpropagation ──────────────────────────────────────── */

export function backprop(baum, pfad, belohnung) {
  for (const id of pfad) {
    baum.knoten[id].n += 1;
    baum.knoten[id].w += belohnung;
  }
}

/* ── Eine ganze Iteration ──────────────────────────────────────────── */

export function iteration(baum, c, p, rng) {
  const sel = selektiere(baum, c, p, rng);
  const pfad = sel.aktion
    ? expandiere(baum, sel.pfad, sel.aktion, sel.ziel)
    : sel.pfad;
  const blatt = baum.knoten[pfad[pfad.length - 1]];
  const r = rollout(blatt.x, blatt.y, p, rng);
  backprop(baum, pfad, r.belohnung);
  return { pfad, rollout: r };
}

/* ── Auswertung an der Wurzel ──────────────────────────────────────── */

export function wurzelAktionen(baum, c) {
  return aktionsUebersicht(baum, 0, c);
}

/**
 * Die vier Aktionen eines Knotens, aufgeschlüsselt in die beiden Teile der
 * UCT-Formel — damit im Widget sichtbar wird, was `c` eigentlich tut.
 */
export function aktionsUebersicht(baum, id, c) {
  const N = Math.max(baum.knoten[id].n, 1);
  return AKTIONEN.map((a) => {
    const { n, w } = aktionsStats(baum, id, a);
    const ausbeutung = n === 0 ? null : w / n;
    const erkundung = n === 0 ? null : c * Math.sqrt(Math.log(N) / n);
    return {
      aktion: a,
      n,
      w,
      wert: ausbeutung,
      ausbeutung,
      erkundung,
      uct: uct(baum, id, a, c),
    };
  });
}

/**
 * π(s): die Aktion mit dem besten Durchschnittswert.
 *
 * Nur falls keine Aktion je etwas erreicht hat (alle Werte 0), entscheidet die
 * Besuchszahl.
 */
export function besteAktion(baum) {
  let beste = null;
  let bestWert = -1;
  let bestN = -1;
  for (const a of AKTIONEN) {
    const { n, w } = aktionsStats(baum, 0, a);
    if (n === 0) continue;
    const wert = w / n;
    if (wert > bestWert || (wert === bestWert && n > bestN)) {
      bestWert = wert;
      bestN = n;
      beste = a;
    }
  }
  return beste;
}

/* ── Strategie für die ganze Welt ──────────────────────────────────── */

/**
 * MCTS wird für JEDES Feld einzeln ausgeführt. Das Ergebnis ist eine
 * vollständige Strategie π — ausgewürfelt, nicht von Hand hingeschrieben.
 */
export function berechneStrategie(p, c, iterationenProFeld, rng) {
  const policy = new Map();
  const werte = new Map();
  for (let y = 0; y < HOEHE; y++) {
    for (let x = 0; x < BREITE; x++) {
      if (istTerminal(x, y)) continue;
      const baum = neuerBaum({ x, y });
      for (let i = 0; i < iterationenProFeld; i++) iteration(baum, c, p, rng);
      const a = besteAktion(baum);
      if (a) {
        policy.set(key(x, y), a);
        const { n, w } = aktionsStats(baum, 0, a);
        werte.set(key(x, y), n === 0 ? 0 : w / n);
      }
    }
  }
  return { policy, werte, felder: BREITE * HOEHE };
}
