/**
 * Rutschige Gitterwelt («Cliff Walking») für das probabilistische Planen.
 *
 * Die Welt ist deterministisch aufgebaut, die AUSFÜHRUNG einer Aktion ist es
 * aber nicht: Mit Wahrscheinlichkeit p rutscht der Roboter seitwärts weg.
 *
 * Didaktischer Kern:
 *   - offener Plan (Aktionsliste, ohne Rückmeldung)  → scheitert oft
 *   - Strategie / Policy (Entscheidung pro Feld)      → scheitert selten
 * Beides lässt sich nur noch mit Monte-Carlo-Simulation vergleichen, weil es
 * keinen einzelnen «richtigen» Ablauf mehr gibt.
 */

export const BREITE = 8;
export const HOEHE = 4;

/** . = frei, S = Start, Z = Ziel, ! = Klippe (Absturz) */
export const KARTE = ["........", "........", "........", "S!!!!!!Z"];

export const START = { x: 0, y: 3 };
export const ZIEL = { x: 7, y: 3 };

export const RICHTUNGEN = {
  oben: { dx: 0, dy: -1 },
  unten: { dx: 0, dy: 1 },
  links: { dx: -1, dy: 0 },
  rechts: { dx: 1, dy: 0 },
};

/** Die beiden Richtungen, in die man bei einer Aktion wegrutschen kann. */
export const QUER = {
  oben: ["links", "rechts"],
  unten: ["links", "rechts"],
  links: ["oben", "unten"],
  rechts: ["oben", "unten"],
};

export function feld(x, y) {
  if (x < 0 || y < 0 || x >= BREITE || y >= HOEHE) return null;
  return KARTE[y][x];
}

export function istKlippe(x, y) {
  return feld(x, y) === "!";
}

export function istZiel(x, y) {
  return x === ZIEL.x && y === ZIEL.y;
}

/* ── Zustandsraum als Graph ─────────────────────────────────────────── */

/** Wohin führt eine Bewegung? Gegen die Wand = stehen bleiben. */
export function nachfolger(x, y, richtung) {
  const { dx, dy } = RICHTUNGEN[richtung];
  const nx = x + dx;
  const ny = y + dy;
  return feld(nx, ny) === null ? { x, y } : { x: nx, y: ny };
}

/**
 * Übergangsverteilung P(s' | s, a).
 *
 * Mit p = 0 ergibt sich genau ein Nachfolger (klassisches, deterministisches
 * Setting), sonst bis zu drei. Führen zwei Richtungen auf dasselbe Feld (z. B.
 * weil man gegen eine Wand rutscht), werden ihre Wahrscheinlichkeiten addiert.
 *
 * @returns {{x:number,y:number,prob:number,richtungen:string[]}[]}
 */
export function uebergaenge(x, y, aktion, p) {
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
    if (vorhanden) {
      vorhanden.prob += prob;
      vorhanden.richtungen.push(richtung);
    } else {
      verteilung.set(key, { ...ziel, prob, richtungen: [richtung] });
    }
  }

  return [...verteilung.values()].sort((a, b) => b.prob - a.prob);
}

/* ── Zufallsgenerator mit Seed (reproduzierbar im Unterricht) ───────── */

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── Pläne (offen) ──────────────────────────────────────────────────── */

const wiederhole = (richtung, anzahl) => Array(anzahl).fill(richtung);

export const PLAENE = {
  kurz: {
    label: "Plan «kurz» (direkt der Klippe entlang)",
    farbe: "var(--color-red)",
    aktionen: ["oben", ...wiederhole("rechts", 7), "unten"],
  },
  sicher: {
    label: "Plan «sicher» (oben herum)",
    farbe: "var(--color-blue)",
    aktionen: [
      ...wiederhole("oben", 3),
      ...wiederhole("rechts", 7),
      ...wiederhole("unten", 3),
    ],
  },
};

/* ── Strategie (geschlossen, mit Rückmeldung) ───────────────────────── */

/**
 * Entscheidet aufgrund der AKTUELLEN Position, nicht aufgrund des Schrittes.
 * Idee: zuerst ganz nach oben, dann nach rechts bis zur Zielspalte, dann
 * hinunter. Wenn der Roboter wegrutscht, korrigiert er automatisch.
 */
export function strategie(x, y) {
  if (x === ZIEL.x) return "unten";
  if (y > 0) return "oben";
  return "rechts";
}

/* ── Simulation eines einzelnen Durchgangs ──────────────────────────── */

/**
 * @param {"kurz"|"sicher"|"strategie"} modus
 * @param {number} p  Rutsch-Wahrscheinlichkeit (0 … 0.5)
 * @param {() => number} rng
 * @param {number} maxSchritte Abbruch, damit die Strategie nicht ewig läuft
 */
export function simuliere(modus, p, rng, maxSchritte = 60) {
  let x = START.x;
  let y = START.y;
  const pfad = [{ x, y }];
  const aktionen = PLAENE[modus]?.aktionen ?? null;
  const laenge = aktionen ? aktionen.length : maxSchritte;

  for (let i = 0; i < laenge; i++) {
    const gewollt = aktionen ? aktionen[i] : strategie(x, y);

    // Ausführung: mit p rutscht der Roboter quer weg
    let tatsaechlich = gewollt;
    const r = rng();
    if (r < p / 2) tatsaechlich = QUER[gewollt][0];
    else if (r < p) tatsaechlich = QUER[gewollt][1];

    const { dx, dy } = RICHTUNGEN[tatsaechlich];
    const nx = x + dx;
    const ny = y + dy;

    // Gegen die Wand laufen: der Roboter bleibt stehen
    if (feld(nx, ny) !== null) {
      x = nx;
      y = ny;
    }
    pfad.push({ x, y });

    if (istKlippe(x, y)) {
      return { erfolg: false, grund: "abgestuerzt", pfad, schritte: i + 1 };
    }
    if (istZiel(x, y)) {
      return { erfolg: true, grund: "ziel", pfad, schritte: i + 1 };
    }
  }

  return { erfolg: false, grund: "plan zu Ende", pfad, schritte: laenge };
}

/* ── Monte-Carlo: viele Durchgänge zusammenfassen ───────────────────── */

export function monteCarlo(modus, p, anzahl, rng) {
  let erfolge = 0;
  let schritteGesamt = 0;
  const besuche = new Map();

  for (let i = 0; i < anzahl; i++) {
    const lauf = simuliere(modus, p, rng);
    if (lauf.erfolg) {
      erfolge += 1;
      schritteGesamt += lauf.schritte;
    }
    for (const { x, y } of lauf.pfad) {
      const key = `${x},${y}`;
      besuche.set(key, (besuche.get(key) ?? 0) + 1);
    }
  }

  return {
    anzahl,
    erfolge,
    erfolgsquote: anzahl === 0 ? 0 : erfolge / anzahl,
    schnittSchritte: erfolge === 0 ? 0 : schritteGesamt / erfolge,
    besuche,
  };
}
