/**
 * Logik für das 3x3-Schiebepuzzle.
 *
 * Ein Zustand ist ein Array mit 9 Zahlen, 0 ist das leere Feld:
 *   [1, 2, 3,
 *    4, 5, 6,
 *    7, 8, 0]
 */

export const SIZE = 3;
export const GOAL = [1, 2, 3, 4, 5, 6, 7, 8, 0];

/** Eindeutiger Text für einen Zustand. */
export function key(state) {
  return state.join(",");
}

export function isGoal(state) {
  return key(state) === key(GOAL);
}

const RICHTUNGEN = [
  { name: "hoch", dz: -1, ds: 0 },
  { name: "runter", dz: 1, ds: 0 },
  { name: "links", dz: 0, ds: -1 },
  { name: "rechts", dz: 0, ds: 1 },
];

/**
 * Alle erlaubten Züge. Wir beschreiben den Zug immer aus Sicht des Steins:
 * "5 runter" heisst, der Stein mit der 5 rutscht nach unten.
 */
export function successors(state) {
  const leer = state.indexOf(0);
  const zeile = Math.floor(leer / SIZE);
  const spalte = leer % SIZE;
  const result = [];

  for (const r of RICHTUNGEN) {
    const z = zeile + r.dz;
    const s = spalte + r.ds;
    if (z < 0 || z >= SIZE || s < 0 || s >= SIZE) continue;
    const von = z * SIZE + s;
    const next = [...state];
    next[leer] = next[von];
    next[von] = 0;
    result.push({
      action: `${next[leer]} ${r.name}`,
      tile: next[leer],
      cost: 1,
      state: next,
    });
  }
  return result;
}

/** Verschiebt den Stein an Position index, falls er ans leere Feld grenzt. */
export function move(state, index) {
  const leer = state.indexOf(0);
  const zA = Math.floor(leer / SIZE);
  const sA = leer % SIZE;
  const zB = Math.floor(index / SIZE);
  const sB = index % SIZE;
  if (Math.abs(zA - zB) + Math.abs(sA - sB) !== 1) return null;
  const next = [...state];
  next[leer] = next[index];
  next[index] = 0;
  return next;
}

// ── Heuristiken ─────────────────────────────────────────────────────────

/** Anzahl Steine, die nicht am richtigen Platz liegen (ohne leeres Feld). */
export function misplaced(state) {
  let n = 0;
  for (let i = 0; i < state.length; i++) {
    if (state[i] !== 0 && state[i] !== GOAL[i]) n++;
  }
  return n;
}

/** Summe der Abstände jedes Steins zu seinem Zielplatz. */
export function manhattan(state) {
  let summe = 0;
  for (let i = 0; i < state.length; i++) {
    const wert = state[i];
    if (wert === 0) continue;
    const ziel = GOAL.indexOf(wert);
    summe +=
      Math.abs(Math.floor(i / SIZE) - Math.floor(ziel / SIZE)) +
      Math.abs((i % SIZE) - (ziel % SIZE));
  }
  return summe;
}

/** Der Abstand eines einzelnen Steins zu seinem Zielplatz. */
export function tileDistance(state, index) {
  const wert = state[index];
  if (wert === 0) return 0;
  const ziel = GOAL.indexOf(wert);
  return (
    Math.abs(Math.floor(index / SIZE) - Math.floor(ziel / SIZE)) +
    Math.abs((index % SIZE) - (ziel % SIZE))
  );
}

// ── Stellungen erzeugen ─────────────────────────────────────────────────

/** Nur die Hälfte aller Anordnungen ist überhaupt lösbar. */
export function isSolvable(state) {
  const ohneLeer = state.filter((v) => v !== 0);
  let inversionen = 0;
  for (let i = 0; i < ohneLeer.length; i++) {
    for (let j = i + 1; j < ohneLeer.length; j++) {
      if (ohneLeer[i] > ohneLeer[j]) inversionen++;
    }
  }
  return inversionen % 2 === 0;
}

/** Mischt, indem vom Ziel aus zufällig Züge rückwärts gemacht werden. */
export function scramble(schritte = 20, start = GOAL) {
  let state = [...start];
  let letzter = null;
  for (let i = 0; i < schritte; i++) {
    const moeglich = successors(state).filter((e) => e.tile !== letzter);
    const gewaehlt = moeglich[Math.floor(Math.random() * moeglich.length)];
    state = gewaehlt.state;
    letzter = gewaehlt.tile;
  }
  return state;
}

/** Vorgegebene Stellungen für den Unterricht. */
export const PRESETS = [
  { label: "2 Züge", state: [1, 2, 3, 4, 5, 6, 0, 7, 8] },
  { label: "4 Züge", state: [0, 1, 3, 4, 2, 6, 7, 5, 8] },
  { label: "8 Züge", state: [1, 2, 3, 7, 5, 6, 8, 4, 0] },
  { label: "12 Züge", state: [7, 1, 2, 4, 0, 3, 8, 6, 5] },
  { label: "14 Züge", state: [0, 8, 2, 5, 7, 3, 1, 4, 6] },
  { label: "18 Züge", state: [0, 7, 1, 2, 6, 3, 8, 5, 4] },
  { label: "unlösbar", state: [2, 8, 3, 1, 6, 4, 7, 0, 5] },
];
