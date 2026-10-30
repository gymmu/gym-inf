/**
 * Ein kleines Strassennetz als Karte UND als Graph.
 *
 * Die Karte ist das, was ein Mensch sieht: geschwungene Strassen mit Namen.
 * Der Graph ist das, was ein Routenplaner sieht: Knoten (Kreuzungen) und
 * Kanten (Strassenabschnitte) mit einem Gewicht (Fahrzeit in Minuten).
 *
 * Beide Darstellungen benutzen dieselben Koordinaten. Jede Strasse ist eine
 * quadratische Bézier-Kurve mit genau einem Kontrollpunkt `c`. Zieht man
 * diesen Kontrollpunkt auf die Mitte zwischen den Endpunkten, wird aus der
 * Kurve exakt eine Gerade — genau damit "begradigen" die Widgets die Karte
 * zum Graphen.
 */

export const VIEW = { w: 800, h: 480 };

/* ── Kreuzungen = Knoten ───────────────────────────────────────────── */

export const NODES = [
  { id: "A", label: "Bahnhof", x: 90, y: 380 },
  { id: "B", label: "Markt", x: 240, y: 330 },
  { id: "C", label: "Dom", x: 205, y: 185 },
  { id: "D", label: "Hafen", x: 95, y: 110 },
  { id: "E", label: "Schule", x: 355, y: 115 },
  { id: "F", label: "Park", x: 395, y: 255 },
  { id: "G", label: "Spital", x: 300, y: 430 },
  { id: "H", label: "Brücke", x: 520, y: 330 },
  { id: "I", label: "Museum", x: 540, y: 185 },
  { id: "J", label: "Stadion", x: 690, y: 105 },
  { id: "K", label: "Zoo", x: 720, y: 265 },
  { id: "L", label: "Flughafen", x: 660, y: 420 },
  { id: "M", label: "Uni", x: 430, y: 55 },
];

export const NODE_BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]));

/** Kurzer, menschenlesbarer Name eines Knotens. */
export const name = (id) => NODE_BY_ID[id]?.label ?? id;

/* ── Strassenabschnitte = Kanten ───────────────────────────────────── */

const ROHE_KANTEN = [
  {
    a: "A",
    b: "B",
    strasse: "Bahnhofstrasse",
    typ: "haupt",
    c: { x: 160, y: 370 },
  },
  { a: "A", b: "D", strasse: "Hafenweg", typ: "neben", c: { x: 40, y: 240 } },
  { a: "A", b: "G", strasse: "Südring", typ: "haupt", c: { x: 175, y: 435 } },
  { a: "B", b: "C", strasse: "Domgasse", typ: "neben", c: { x: 200, y: 262 } },
  { a: "B", b: "F", strasse: "Parkallee", typ: "haupt", c: { x: 320, y: 300 } },
  { a: "B", b: "G", strasse: "Spitalweg", typ: "neben", c: { x: 256, y: 392 } },
  {
    a: "C",
    b: "D",
    strasse: "Uferstrasse",
    typ: "neben",
    c: { x: 128, y: 140 },
  },
  {
    a: "C",
    b: "E",
    strasse: "Schulstrasse",
    typ: "haupt",
    c: { x: 282, y: 136 },
  },
  {
    a: "C",
    b: "F",
    strasse: "Altstadtring",
    typ: "neben",
    c: { x: 318, y: 212 },
  },
  { a: "E", b: "M", strasse: "Campusweg", typ: "neben", c: { x: 382, y: 70 } },
  { a: "E", b: "F", strasse: "Parkweg", typ: "neben", c: { x: 392, y: 182 } },
  {
    a: "E",
    b: "I",
    strasse: "Museumsstrasse",
    typ: "haupt",
    c: { x: 462, y: 132 },
  },
  {
    a: "M",
    b: "J",
    strasse: "Nordautobahn",
    typ: "autobahn",
    c: { x: 560, y: 50 },
  },
  {
    a: "F",
    b: "H",
    strasse: "Brückenstrasse",
    typ: "haupt",
    c: { x: 458, y: 302 },
  },
  { a: "F", b: "G", strasse: "Südweg", typ: "neben", c: { x: 330, y: 352 } },
  {
    a: "G",
    b: "L",
    strasse: "Flughafenstrasse",
    typ: "haupt",
    c: { x: 470, y: 465 },
  },
  { a: "H", b: "I", strasse: "Hügelweg", typ: "neben", c: { x: 556, y: 258 } },
  { a: "H", b: "K", strasse: "Ostring", typ: "haupt", c: { x: 636, y: 300 } },
  { a: "H", b: "L", strasse: "Zubringer", typ: "neben", c: { x: 604, y: 386 } },
  {
    a: "I",
    b: "J",
    strasse: "Stadionweg",
    typ: "haupt",
    c: { x: 622, y: 128 },
  },
  {
    a: "J",
    b: "K",
    strasse: "Zoostrasse",
    typ: "neben",
    c: { x: 748, y: 178 },
  },
  {
    a: "K",
    b: "L",
    strasse: "Ostautobahn",
    typ: "autobahn",
    c: { x: 722, y: 348 },
  },
];

/** Tempo je Strassentyp — daraus entsteht die Fahrzeit. */
export const TYPEN = {
  autobahn: { label: "Autobahn", tempo: 2.4, breite: 16, farbe: "#d5c4a1" },
  haupt: { label: "Hauptstrasse", tempo: 1.5, breite: 12, farbe: "#bdae93" },
  neben: { label: "Nebenstrasse", tempo: 1.0, breite: 8, farbe: "#a89984" },
};

/** Punkt auf einer quadratischen Bézier-Kurve. */
export function quadPunkt(p0, c, p1, t) {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x,
    y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y,
  };
}

/** Näherung der Kurvenlänge durch Abtasten. */
function kurvenLaenge(p0, c, p1, n = 24) {
  let laenge = 0;
  let vorher = p0;
  for (let i = 1; i <= n; i++) {
    const p = quadPunkt(p0, c, p1, i / n);
    laenge += Math.hypot(p.x - vorher.x, p.y - vorher.y);
    vorher = p;
  }
  return laenge;
}

/** Eindeutiger Schlüssel einer ungerichteten Kante. */
export const kantenKey = (a, b) => (a < b ? `${a}|${b}` : `${b}|${a}`);

export const EDGES = ROHE_KANTEN.map((e) => {
  const p0 = NODE_BY_ID[e.a];
  const p1 = NODE_BY_ID[e.b];
  const laenge = kurvenLaenge(p0, e.c, p1);
  // Fahrzeit in Minuten: lange Strecke / Tempo, auf ganze Minuten gerundet.
  const w = Math.max(1, Math.round(laenge / (18 * TYPEN[e.typ].tempo)));
  return { ...e, key: kantenKey(e.a, e.b), laenge, w };
});

export const EDGE_BY_KEY = Object.fromEntries(EDGES.map((e) => [e.key, e]));

/** Adjazenzliste: id → [{ to, w, key }] */
export const NACHBARN = (() => {
  const map = {};
  for (const n of NODES) map[n.id] = [];
  for (const e of EDGES) {
    map[e.a].push({ to: e.b, w: e.w, key: e.key });
    map[e.b].push({ to: e.a, w: e.w, key: e.key });
  }
  for (const id of Object.keys(map))
    map[id].sort((x, y) => x.to.localeCompare(y.to));
  return map;
})();

/* ── Dekoration der Karte (nur Optik) ──────────────────────────────── */

export const FLUSS =
  "M -20 20 C 120 140 230 190 330 252 C 420 308 470 322 530 336 C 624 358 664 424 706 500";

export const PARKFLAECHE = { cx: 398, cy: 252, rx: 78, ry: 56 };

export const BLOECKE = [
  { x: 150, y: 290, w: 46, h: 30 },
  { x: 206, y: 282, w: 36, h: 26 },
  { x: 160, y: 212, w: 34, h: 40 },
  { x: 232, y: 206, w: 40, h: 30 },
  { x: 108, y: 330, w: 40, h: 28 },
  { x: 268, y: 140, w: 44, h: 28 },
  { x: 480, y: 150, w: 42, h: 30 },
  { x: 582, y: 220, w: 36, h: 28 },
  { x: 636, y: 150, w: 40, h: 26 },
  { x: 330, y: 400, w: 50, h: 30 },
  { x: 606, y: 452, w: 60, h: 24 },
];

/* ── Pfade rekonstruieren ──────────────────────────────────────────── */

export function pfadAus(prev, ziel) {
  const pfad = [];
  let akt = ziel;
  while (akt) {
    pfad.unshift(akt);
    akt = prev[akt];
  }
  return pfad;
}

/** Wandelt eine Knotenfolge in ein Set von Kanten-Schlüsseln. */
export function pfadKanten(pfad) {
  const set = new Set();
  for (let i = 0; i + 1 < pfad.length; i++)
    set.add(kantenKey(pfad[i], pfad[i + 1]));
  return set;
}

/** Kosten eines Pfades (Summe der Kantengewichte). */
export function pfadKosten(pfad) {
  let summe = 0;
  for (let i = 0; i + 1 < pfad.length; i++)
    summe += EDGE_BY_KEY[kantenKey(pfad[i], pfad[i + 1])].w;
  return summe;
}

/* ══════════════════════════════════════════════════════════════════
   Dijkstra — alle Schritte im Voraus erzeugen
   ══════════════════════════════════════════════════════════════════ */

/**
 * Erzeugt die komplette Schrittliste von Dijkstra.
 * Ein Schritt ist eine Momentaufnahme, damit man vor- und zurückspringen kann.
 */
export function dijkstraSchritte(start, ziel) {
  const dist = {};
  const prev = {};
  for (const n of NODES) {
    dist[n.id] = Infinity;
    prev[n.id] = null;
  }
  dist[start] = 0;

  const besucht = new Set();
  const grenze = new Set([start]);
  const schritte = [];

  const snap = (extra) =>
    schritte.push({
      dist: { ...dist },
      prev: { ...prev },
      besucht: [...besucht],
      grenze: [...grenze]
        .map((id) => ({ id, d: dist[id] }))
        .sort((x, y) => x.d - y.d || x.id.localeCompare(y.id)),
      aktuell: null,
      pruefKante: null,
      pfad: null,
      ...extra,
    });

  snap({
    phase: "init",
    text: `Start ist ${name(start)}. Distanz dorthin: 0 Minuten. Alle anderen Orte: noch unbekannt (∞).`,
  });

  while (grenze.size > 0) {
    // Knoten mit der kleinsten bekannten Distanz holen.
    let akt = null;
    for (const id of grenze) if (akt === null || dist[id] < dist[akt]) akt = id;
    grenze.delete(akt);
    besucht.add(akt);

    snap({
      phase: "waehle",
      aktuell: akt,
      text: `Kleinste bekannte Distanz in der Grenze: ${name(akt)} mit ${dist[akt]} min. Dieser Wert kann nicht mehr kleiner werden — ${name(akt)} ist endgültig.`,
    });

    if (akt === ziel) {
      const pfad = pfadAus(prev, ziel);
      snap({
        phase: "fertig",
        aktuell: akt,
        pfad,
        text: `Ziel ${name(ziel)} wurde endgültig festgelegt: ${dist[ziel]} min. Über die Vorgänger lesen wir die Route rückwärts ab.`,
      });
      return { schritte, dist, prev, pfad, besuchtAnzahl: besucht.size };
    }

    for (const { to, w } of NACHBARN[akt]) {
      if (besucht.has(to)) continue;
      const alt = dist[to];
      const neu = dist[akt] + w;
      const besser = neu < alt;
      if (besser) {
        dist[to] = neu;
        prev[to] = akt;
        grenze.add(to);
      }
      const altText = alt === Infinity ? "∞" : `${alt}`;
      snap({
        phase: "pruef",
        aktuell: akt,
        pruefKante: { von: akt, nach: to, w, besser },
        text: besser
          ? `${name(akt)} → ${name(to)}: ${dist[akt]} + ${w} = ${neu} ist besser als ${altText}. Neue Distanz ${neu}, Vorgänger ${name(akt)}.`
          : `${name(akt)} → ${name(to)}: ${dist[akt]} + ${w} = ${neu} ist nicht besser als ${altText}. Nichts ändert sich.`,
      });
    }
  }

  snap({
    phase: "leer",
    text: "Die Grenze ist leer — es gibt keinen Weg zum Ziel.",
  });
  return { schritte, dist, prev, pfad: null, besuchtAnzahl: besucht.size };
}

/* ══════════════════════════════════════════════════════════════════
   Bidirektionaler Dijkstra
   ══════════════════════════════════════════════════════════════════ */

function leereSeite(startId) {
  const dist = {};
  const prev = {};
  for (const n of NODES) {
    dist[n.id] = Infinity;
    prev[n.id] = null;
  }
  dist[startId] = 0;
  return { dist, prev, besucht: new Set(), grenze: new Set([startId]) };
}

const minKnoten = (seite) => {
  let best = null;
  for (const id of seite.grenze)
    if (best === null || seite.dist[id] < seite.dist[best]) best = id;
  return best;
};

/**
 * Bidirektionaler Dijkstra: eine Suche vom Start vorwärts, eine vom Ziel
 * rückwärts. Beide laufen abwechselnd. Sobald sich die beiden Suchräume
 * berühren, kennen wir einen Weg — aber noch nicht sicher den kürzesten.
 * Erst wenn `topV + topR >= µ` ist, darf abgebrochen werden.
 */
export function bidirektionalSchritte(start, ziel) {
  const V = leereSeite(start); // vorwärts, vom Start
  const R = leereSeite(ziel); // rückwärts, vom Ziel
  const schritte = [];

  let mu = Infinity; // bester bisher bekannter Gesamtweg
  let treff = null; // Knoten, an dem sich die beiden Wege treffen

  const snap = (extra) =>
    schritte.push({
      distV: { ...V.dist },
      distR: { ...R.dist },
      prevV: { ...V.prev },
      prevR: { ...R.prev },
      besuchtV: [...V.besucht],
      besuchtR: [...R.besucht],
      grenzeV: [...V.grenze]
        .map((id) => ({ id, d: V.dist[id] }))
        .sort((x, y) => x.d - y.d || x.id.localeCompare(y.id)),
      grenzeR: [...R.grenze]
        .map((id) => ({ id, d: R.dist[id] }))
        .sort((x, y) => x.d - y.d || x.id.localeCompare(y.id)),
      mu,
      treff,
      aktuell: null,
      seite: null,
      pruefKante: null,
      pfad: null,
      ...extra,
    });

  const bauePfad = () => {
    if (treff === null) return null;
    const vorne = pfadAus(V.prev, treff);
    const hinten = pfadAus(R.prev, treff); // vom Ziel aus bis zum Treffpunkt
    hinten.reverse(); // → vom Treffpunkt bis zum Ziel
    return [...vorne, ...hinten.slice(1)];
  };

  snap({
    phase: "init",
    text: `Zwei Suchen starten gleichzeitig: eine bei ${name(start)} (vorwärts), eine bei ${name(ziel)} (rückwärts). µ ist der beste bisher bekannte Gesamtweg und startet bei ∞.`,
  });

  if (start === ziel) {
    treff = start;
    snap({
      phase: "fertig",
      pfad: [start],
      text: "Start und Ziel sind derselbe Ort.",
    });
    return { schritte, pfad: [start], besuchtAnzahl: 0, mu: 0 };
  }

  while (V.grenze.size > 0 && R.grenze.size > 0) {
    const topVid = minKnoten(V);
    const topRid = minKnoten(R);
    const topV = V.dist[topVid];
    const topR = R.dist[topRid];

    // Abbruchkriterium: beide Suchen zusammen können µ nicht mehr unterbieten.
    if (topV + topR >= mu) {
      const pfad = bauePfad();
      snap({
        phase: "fertig",
        pfad,
        text: `Abbruch: ${topV} + ${topR} = ${topV + topR} ≥ µ = ${mu}. Kein unentdeckter Weg kann noch kürzer sein. Die Route über ${name(treff)} dauert ${mu} min.`,
      });
      return {
        schritte,
        pfad,
        besuchtAnzahl: V.besucht.size + R.besucht.size,
        mu,
      };
    }

    // Immer die Seite weiterlaufen lassen, die gerade "billiger" ist.
    const vorwaerts = topV <= topR;
    const S = vorwaerts ? V : R;
    const O = vorwaerts ? R : V; // die andere Seite
    const seite = vorwaerts ? "V" : "R";
    const akt = vorwaerts ? topVid : topRid;

    S.grenze.delete(akt);
    S.besucht.add(akt);

    snap({
      phase: "waehle",
      seite,
      aktuell: akt,
      text: `${vorwaerts ? "Vorwärts" : "Rückwärts"}-Suche ist dran (${topV} ${vorwaerts ? "≤" : ">"} ${topR}): ${name(akt)} mit ${S.dist[akt]} min wird endgültig.`,
    });

    for (const { to, w } of NACHBARN[akt]) {
      if (S.besucht.has(to)) continue;
      const alt = S.dist[to];
      const neu = S.dist[akt] + w;
      const besser = neu < alt;
      if (besser) {
        S.dist[to] = neu;
        S.prev[to] = akt;
        S.grenze.add(to);
      }

      // Hat die andere Seite diesen Knoten schon erreicht? Dann kennen wir
      // einen durchgehenden Weg — vielleicht einen besseren als bisher.
      let treffText = "";
      if (O.dist[to] < Infinity) {
        const gesamt = S.dist[to] + O.dist[to];
        if (gesamt < mu) {
          mu = gesamt;
          treff = to;
          treffText = ` Beide Suchen kennen ${name(to)}: ${S.dist[to]} + ${O.dist[to]} = ${gesamt} → neues µ = ${mu}.`;
        }
      }

      const altText = alt === Infinity ? "∞" : `${alt}`;
      snap({
        phase: "pruef",
        seite,
        aktuell: akt,
        pruefKante: { von: akt, nach: to, w, besser },
        text:
          (besser
            ? `${name(akt)} → ${name(to)}: ${S.dist[akt]} + ${w} = ${neu} < ${altText} → eintragen.`
            : `${name(akt)} → ${name(to)}: ${S.dist[akt]} + ${w} = ${neu} ≥ ${altText} → nichts ändert sich.`) +
          treffText,
      });
    }
  }

  const pfad = bauePfad();
  snap({
    phase: "fertig",
    pfad,
    text: pfad
      ? `Eine Seite ist erschöpft. Beste gefundene Route: ${mu} min.`
      : "Es gibt keinen Weg.",
  });
  return { schritte, pfad, besuchtAnzahl: V.besucht.size + R.besucht.size, mu };
}
