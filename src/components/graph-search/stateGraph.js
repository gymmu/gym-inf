/**
 * Der Zustandsraum als wachsender Graph — unabhängig vom konkreten Problem.
 *
 * Die Widgets (Schiebepuzzle, Pfannkuchen, …) liefern nur zwei Funktionen:
 *   keyOf(state)         eindeutiger Text für einen Zustand
 *   successorsOf(state)  alle Folgezustände [{ action, state }, …]
 *
 * Alles Übrige — Knoten anlegen, Kanten ziehen, Kreise erkennen und den
 * Baum zeichnen — ist hier zentral und für alle Probleme gleich.
 */

// ── Graph-Datenstruktur ────────────────────────────────────────────────

export function leererGraph(start, keyOf, successorsOf) {
  const g = {
    nodes: new Map(),
    edges: new Set(),
    adj: new Map(),
    keyOf,
    successorsOf,
  };
  const k = keyOf(start);
  g.nodes.set(k, { key: k, state: start, gespielt: true });
  g.adj.set(k, []);
  return g;
}

/** Legt den Knoten an, falls es ihn noch nicht gibt. */
export function besucheKnoten(g, state, nurAufgedeckt = false) {
  const k = g.keyOf(state);
  const vorhanden = g.nodes.get(k);
  if (vorhanden) {
    if (!nurAufgedeckt) vorhanden.gespielt = true;
    return vorhanden;
  }
  const node = { key: k, state, gespielt: !nurAufgedeckt };
  g.nodes.set(k, node);
  g.adj.set(k, []);
  return node;
}

/** Alle Nachfolger eines Zustands in den Graphen aufnehmen. */
export function zeigeNachfolger(g, state) {
  for (const edge of g.successorsOf(state)) {
    besucheKnoten(g, edge.state, true);
    verbinde(g, g.keyOf(state), g.keyOf(edge.state));
  }
}

export function kanteId(a, b) {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

export function verbinde(g, a, b) {
  const id = kanteId(a, b);
  if (g.edges.has(id)) return;
  g.edges.add(id);
  g.adj.get(a)?.push(b);
  g.adj.get(b)?.push(a);
}

/**
 * Einen einzelnen Zug in den Graphen eintragen.
 * Gibt zurück, ob die Zielstellung schon besucht war und ob dadurch ein
 * Kreis geschlossen wurde.
 */
export function zugAnwenden(g, vonState, nachState) {
  const a = g.keyOf(vonState);
  const b = g.keyOf(nachState);
  const schonBesucht = g.nodes.get(b)?.gespielt === true;

  // Gibt es schon einen anderen Weg von a nach b? Dann schliesst
  // dieser Zug einen Kreis.
  const umweg = schonBesucht ? wegOhneKante(g, a, b) : null;

  besucheKnoten(g, nachState);
  verbinde(g, a, b);
  zeigeNachfolger(g, nachState);

  return { schonBesucht, kreis: umweg && umweg.length > 2 ? umweg : null };
}

/**
 * Gibt es einen anderen Weg von a nach b als die direkte Kante?
 * Wenn ja, schliesst die direkte Kante einen Kreis — wir liefern die
 * Knotenfolge für die Hervorhebung. Es zählen nur besuchte Knoten.
 */
export function wegOhneKante(g, a, b) {
  const verboten = kanteId(a, b);
  const vorgaenger = new Map([[b, null]]);
  const schlange = [b];

  while (schlange.length > 0) {
    const u = schlange.shift();
    if (u === a) {
      const weg = [];
      let k = a;
      while (k !== null) {
        weg.push(k);
        k = vorgaenger.get(k);
      }
      return weg; // von a zurück nach b
    }
    for (const v of g.adj.get(u) ?? []) {
      if (kanteId(u, v) === verboten) continue;
      if (vorgaenger.has(v)) continue;
      if (!g.nodes.get(v)?.gespielt) continue;
      vorgaenger.set(v, u);
      schlange.push(v);
    }
  }
  return null;
}

/** Kürzester Weg im bekannten Graphen — Breitensuche über die Kanten. */
export function kuerzesterWeg(g, vonKey, nachKey) {
  if (vonKey === nachKey) return [vonKey];
  const vorgaenger = new Map([[vonKey, null]]);
  const schlange = [vonKey];

  while (schlange.length > 0) {
    const u = schlange.shift();
    for (const v of g.adj.get(u) ?? []) {
      if (vorgaenger.has(v)) continue;
      vorgaenger.set(v, u);
      if (v === nachKey) {
        const weg = [];
        let k = v;
        while (k !== null && k !== undefined) {
          weg.unshift(k);
          k = vorgaenger.get(k);
        }
        return weg;
      }
      schlange.push(v);
    }
  }
  return null;
}

/** Aus einer Knotenfolge die Menge der beteiligten Kanten machen. */
export function kantenMenge(pfad) {
  const menge = new Set();
  if (!pfad || pfad.length < 2) return menge;
  for (let i = 0; i < pfad.length - 1; i++) {
    menge.add(kanteId(pfad[i], pfad[i + 1]));
  }
  menge.add(kanteId(pfad[pfad.length - 1], pfad[0]));
  return menge;
}

/** Breitensuche vom Start aus: alles bis Tiefe `tiefe` aufdecken. */
export function deckeAufBisTiefe(g, startState, tiefe) {
  let rand = [startState];
  const gesehen = new Set([g.keyOf(startState)]);
  for (let d = 0; d < tiefe; d++) {
    const naechste = [];
    for (const s of rand) {
      for (const edge of g.successorsOf(s)) {
        const k = g.keyOf(edge.state);
        besucheKnoten(g, edge.state, true);
        verbinde(g, g.keyOf(s), k);
        if (!gesehen.has(k)) {
          gesehen.add(k);
          naechste.push(edge.state);
        }
      }
    }
    rand = naechste;
  }
}

// ── Layout: Suchbaum, Ebene für Ebene ──────────────────────────────────

/**
 * Breitensuche vom Start aus liefert den Baum (jeder Knoten bekommt den
 * Vorgänger, über den er zuerst gefunden wurde). Alle übrigen Kanten sind
 * Schleifen. Anschliessend werden die Blätter von links nach rechts
 * aufgereiht, Eltern sitzen mittig über ihren Kindern — dasselbe Bild wie
 * bei BFS, und vollständig deterministisch.
 */
export function baumLayout(g, startKey, { spalte, zeile }) {
  const kinder = new Map();
  const tiefe = new Map([[startKey, 0]]);
  const baumKanten = [];
  const besucht = new Set([startKey]);
  const schlange = [startKey];

  for (const k of g.nodes.keys()) kinder.set(k, []);

  while (schlange.length > 0) {
    const u = schlange.shift();
    for (const v of g.adj.get(u) ?? []) {
      if (besucht.has(v)) continue;
      besucht.add(v);
      tiefe.set(v, (tiefe.get(u) ?? 0) + 1);
      kinder.get(u).push(v);
      baumKanten.push({ id: kanteId(u, v), von: u, nach: v });
      schlange.push(v);
    }
  }

  // alles, was nicht Baumkante ist, ist eine Schleife
  const baumIds = new Set(baumKanten.map((e) => e.id));
  const schleifen = [];
  for (const id of g.edges) {
    if (baumIds.has(id)) continue;
    const [a, b] = id.split("|");
    schleifen.push({ id, von: a, nach: b });
  }

  // x-Koordinaten: Blätter nebeneinander, Eltern mittig darüber
  const pos = new Map();
  let naechsterPlatz = 0;
  const platziere = (k) => {
    const ks = kinder.get(k) ?? [];
    let x;
    if (ks.length === 0) {
      x = naechsterPlatz * spalte;
      naechsterPlatz += 1;
    } else {
      const xs = ks.map(platziere);
      x = (Math.min(...xs) + Math.max(...xs)) / 2;
    }
    pos.set(k, { x, y: (tiefe.get(k) ?? 0) * zeile });
    return x;
  };
  if (g.nodes.has(startKey)) platziere(startKey);

  // Knoten, die (noch) nicht vom Start aus erreichbar sind, rechts anhängen
  for (const k of g.nodes.keys()) {
    if (pos.has(k)) continue;
    pos.set(k, { x: naechsterPlatz * spalte, y: 0 });
    naechsterPlatz += 1;
  }

  return { pos, tiefe, baumKanten, schleifen };
}

/** Sichtfenster so wählen, dass der ganze Baum hineinpasst. */
export function rahmen(pos, { rand = 30, ratio = 1.3 } = {}) {
  const punkte = [...pos.values()];
  if (punkte.length === 0) return { x: -100, y: -100, w: 200, h: 200 };
  const minX = Math.min(...punkte.map((p) => p.x)) - rand;
  const maxX = Math.max(...punkte.map((p) => p.x)) + rand;
  const minY = Math.min(...punkte.map((p) => p.y)) - rand;
  const maxY = Math.max(...punkte.map((p) => p.y)) + rand;
  const w = Math.max(200, maxX - minX);
  const h = Math.max(150, maxY - minY);
  // Seitenverhältnis des SVG-Kastens beibehalten, sonst wird verzerrt
  const breite = Math.max(w, h * ratio);
  const hoehe = breite / ratio;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  return { x: cx - breite / 2, y: cy - hoehe / 2, w: breite, h: hoehe };
}

/** Sanfte Kurve von Eltern- zu Kindknoten. */
export function verbindung(a, b) {
  const my = (a.y + b.y) / 2;
  return `M ${a.x} ${a.y} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
}

/** Schleifen werden als Bogen gezeichnet, damit sie sichtbar bleiben. */
export function bogen(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const laenge = Math.hypot(dx, dy) || 1;
  // senkrecht zur Verbindung ausweichen
  const ox = (-dy / laenge) * Math.min(40, laenge * 0.35);
  const oy = (dx / laenge) * Math.min(40, laenge * 0.35);
  const mx = (a.x + b.x) / 2 + ox;
  const my = (a.y + b.y) / 2 + oy;
  return `M ${a.x} ${a.y} Q ${mx} ${my}, ${b.x} ${b.y}`;
}
