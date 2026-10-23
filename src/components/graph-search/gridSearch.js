/**
 * Eine kleine Suchmaschine auf einem Gitter.
 *
 * Alle drei Algorithmen (UCS, GBFS, A*) sind derselbe Code — sie
 * unterscheiden sich nur darin, wie sie den nächsten Knoten aus der
 * Grenze auswählen:
 *
 *   UCS   wählt nach g           (was hat der Weg bisher gekostet?)
 *   GBFS  wählt nach h           (wie weit ist es noch bis zum Ziel?)
 *   A*    wählt nach f = g + h   (beides zusammen)
 */

export const ZELLE = {
  FREI: 0,
  WAND: 1,
};

export const MARKE = {
  UNBEKANNT: 0,
  GRENZE: 1,
  BESUCHT: 2,
};

export const STRATEGIEN = {
  ucs: {
    label: "UCS (Dijkstra)",
    kurz: "UCS",
    formel: "wählt kleinstes g",
    erklaerung:
      "Blind: Sucht gleichmässig in alle Richtungen, weil nur die bisherigen Kosten zählen.",
    prioritaet: (n) => n.g,
    farbe: "var(--color-blue)",
  },
  gbfs: {
    label: "Greedy Best-First",
    kurz: "GBFS",
    formel: "wählt kleinstes h",
    erklaerung:
      "Gierig: Läuft stur Richtung Ziel — schnell, aber der Weg kann ein Umweg sein.",
    prioritaet: (n) => n.h,
    farbe: "var(--color-yellow)",
  },
  astar: {
    label: "A*",
    kurz: "A*",
    formel: "wählt kleinstes f = g + h",
    erklaerung:
      "Kombiniert beides: Sucht zielgerichtet und findet trotzdem den kürzesten Weg.",
    prioritaet: (n) => n.g + n.h,
    farbe: "var(--color-aqua)",
  },
};

/** Manhattan-Distanz: Zeilen- plus Spaltenabstand. */
export function manhattan(x, y, ziel) {
  return Math.abs(x - ziel.x) + Math.abs(y - ziel.y);
}

/* ── Vorgefertigte Gitter ──────────────────────────────────────────── */

export const BREITE = 25;
export const HOEHE = 17;

export const START = { x: 2, y: 8 };
export const ZIEL = { x: 22, y: 8 };

function leeresGitter() {
  return Array.from({ length: HOEHE }, () =>
    new Array(BREITE).fill(ZELLE.FREI),
  );
}

function setzeWand(gitter, x, y) {
  if (x < 0 || y < 0 || x >= BREITE || y >= HOEHE) return;
  if ((x === START.x && y === START.y) || (x === ZIEL.x && y === ZIEL.y))
    return;
  gitter[y][x] = ZELLE.WAND;
}

/** Eine senkrechte Mauer mit einer Lücke. */
function mauer(gitter, x, luecke, lueckengroesse = 3) {
  for (let y = 0; y < HOEHE; y++) {
    if (y >= luecke && y < luecke + lueckengroesse) continue;
    setzeWand(gitter, x, y);
  }
}

export const LAYOUTS = {
  frei: {
    label: "Freie Fläche",
    hinweis:
      "Ohne Hindernisse sieht man den Unterschied am deutlichsten: UCS sucht einen Kreis, GBFS einen Strahl.",
    bauen: () => leeresGitter(),
  },
  mauer: {
    label: "Mauer mit Tür",
    hinweis:
      "Eine Wand zwingt alle drei zum Umweg — GBFS rennt zuerst in die Wand.",
    bauen: () => {
      const g = leeresGitter();
      mauer(g, 12, 2, 3);
      return g;
    },
  },
  falle: {
    label: "Falle für Greedy",
    hinweis:
      "Die Tür direkt vor der Nase führt in ein Schlangen-Labyrinth, der Umweg unten herum ist kürzer. GBFS nimmt die verlockende Tür und findet einen zu langen Weg — A* nicht.",
    bauen: () => {
      const g = leeresGitter();
      // Mauer mit zwei Türen: eine direkt auf der Sichtlinie, eine ganz unten.
      for (let y = 0; y < HOEHE; y++) {
        if (y === 8 || y === HOEHE - 1) continue;
        setzeWand(g, 12, y);
      }
      // Dahinter ein Zickzack, der den direkten Weg lang macht.
      for (let y = 4; y <= HOEHE - 2; y++) setzeWand(g, 15, y);
      for (let y = 0; y <= 12; y++) setzeWand(g, 18, y);
      return g;
    },
  },
  zickzack: {
    label: "Zickzack",
    hinweis:
      "Drei Mauern mit versetzten Türen — ein typisches Labyrinth-Problem.",
    bauen: () => {
      const g = leeresGitter();
      mauer(g, 7, 0, 4);
      mauer(g, 13, 13, 4);
      mauer(g, 18, 1, 4);
      return g;
    },
  },
  bloecke: {
    label: "Blöcke",
    hinweis: "Viele kleine Hindernisse — alle drei müssen laufend ausweichen.",
    bauen: () => {
      const g = leeresGitter();
      const bloecke = [
        [6, 2],
        [6, 3],
        [7, 3],
        [9, 6],
        [9, 7],
        [10, 7],
        [10, 8],
        [8, 11],
        [9, 11],
        [9, 12],
        [13, 1],
        [13, 2],
        [14, 2],
        [14, 9],
        [15, 9],
        [15, 10],
        [15, 11],
        [12, 13],
        [13, 13],
        [18, 4],
        [18, 5],
        [19, 5],
        [19, 12],
        [20, 12],
        [20, 11],
        [5, 8],
        [5, 9],
        [6, 9],
      ];
      for (const [x, y] of bloecke) setzeWand(g, x, y);
      return g;
    },
  },
};

/* ── Die Suchmaschine ──────────────────────────────────────────────── */

const NACHBARN = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

/**
 * Erzeugt eine Suche. Mit step() wird genau ein Knoten expandiert.
 */
export function createGridSearch(
  gitter,
  strategie,
  start = START,
  ziel = ZIEL,
) {
  const prioritaet = STRATEGIEN[strategie].prioritaet;
  const marken = new Uint8Array(BREITE * HOEHE);
  const index = (x, y) => y * BREITE + x;

  const startKnoten = {
    x: start.x,
    y: start.y,
    g: 0,
    h: manhattan(start.x, start.y, ziel),
    parent: null,
  };

  const grenze = [startKnoten];
  marken[index(start.x, start.y)] = MARKE.GRENZE;

  let expandiert = 0;
  let status = "bereit";
  let pfad = [];
  let aktuell = null;
  let kosten = 0;

  function pfadVon(knoten) {
    const liste = [];
    let n = knoten;
    while (n) {
      liste.push({ x: n.x, y: n.y });
      n = n.parent;
    }
    return liste.reverse();
  }

  function snapshot() {
    return {
      marken: Uint8Array.from(marken),
      pfad,
      aktuell,
      expandiert,
      grenzeGroesse: grenze.length,
      kosten,
      status,
    };
  }

  function step() {
    if (status === "gefunden" || status === "erschöpft") return snapshot();

    if (grenze.length === 0) {
      status = "erschöpft";
      return snapshot();
    }

    status = "läuft";

    // Den besten Knoten aus der Grenze holen.
    let besterIndex = 0;
    let bestePrio = prioritaet(grenze[0]);
    for (let i = 1; i < grenze.length; i++) {
      const p = prioritaet(grenze[i]);
      if (p < bestePrio) {
        bestePrio = p;
        besterIndex = i;
      }
    }
    const knoten = grenze.splice(besterIndex, 1)[0];
    aktuell = { x: knoten.x, y: knoten.y };
    marken[index(knoten.x, knoten.y)] = MARKE.BESUCHT;
    expandiert++;

    if (knoten.x === ziel.x && knoten.y === ziel.y) {
      pfad = pfadVon(knoten);
      kosten = knoten.g;
      status = "gefunden";
      return snapshot();
    }

    for (const [dx, dy] of NACHBARN) {
      const nx = knoten.x + dx;
      const ny = knoten.y + dy;
      if (nx < 0 || ny < 0 || nx >= BREITE || ny >= HOEHE) continue;
      if (gitter[ny][nx] === ZELLE.WAND) continue;
      const i = index(nx, ny);
      if (marken[i] === MARKE.BESUCHT) continue;

      const g = knoten.g + 1;
      const vorhanden = grenze.find((n) => n.x === nx && n.y === ny);
      if (vorhanden) {
        if (g < vorhanden.g) {
          vorhanden.g = g;
          vorhanden.parent = knoten;
        }
        continue;
      }
      grenze.push({
        x: nx,
        y: ny,
        g,
        h: manhattan(nx, ny, ziel),
        parent: knoten,
      });
      marken[i] = MARKE.GRENZE;
    }

    return snapshot();
  }

  return {
    step,
    snapshot,
    fertig: () => status === "gefunden" || status === "erschöpft",
  };
}
