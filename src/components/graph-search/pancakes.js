/**
 * Logik für das Pfannkuchen-Problem (pancake sorting).
 *
 * Auf dem Teller liegt ein Stapel Pfannkuchen unterschiedlicher Grösse.
 * Ein Zustand ist ein Array von Grössen, Index 0 ist der oberste Pfannkuchen:
 *
 *   [2, 4, 1, 3]   ->   oben die 2, unten die 3
 *
 * Die einzige erlaubte Aktion: den Wender an einer Stelle einschieben und
 * den ganzen Teilstapel darüber umdrehen («wende 3» kehrt die obersten
 * drei Pfannkuchen um). Ziel ist der sortierte Stapel: kleinster oben,
 * grösster unten.
 */

/** Eindeutiger Text für einen Zustand. */
export function key(state) {
  return state.join(",");
}

/** Der sortierte Stapel für n Pfannkuchen: [1, 2, …, n]. */
export function goalFor(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

export function isGoal(state) {
  return state.every((wert, i) => wert === i + 1);
}

/** Dreht die obersten k Pfannkuchen um. */
export function flip(state, k) {
  if (k < 2 || k > state.length) return null;
  return [...state.slice(0, k).reverse(), ...state.slice(k)];
}

/** Alle erlaubten Züge: jeden möglichen Teilstapel umdrehen. */
export function successors(state) {
  const result = [];
  for (let k = 2; k <= state.length; k++) {
    result.push({
      action: `wende ${k}`,
      k,
      cost: 1,
      state: flip(state, k),
    });
  }
  return result;
}

/**
 * Heuristik «Bruchstellen»: Wie viele benachbarte Pfannkuchen passen nicht
 * zusammen? Jeder Wende-Zug kann höchstens eine Bruchstelle beheben, die
 * Zahl ist also eine zulässige Schätzung für den Restweg.
 */
export function bruchstellen(state) {
  const n = state.length;
  let anzahl = 0;
  for (let i = 0; i < n - 1; i++) {
    if (Math.abs(state[i] - state[i + 1]) !== 1) anzahl++;
  }
  if (state[n - 1] !== n) anzahl++; // unten gehört der grösste hin
  return anzahl;
}

/** Wie viele Pfannkuchen liegen nicht an ihrem Platz? */
export function falschePlaetze(state) {
  return state.reduce((summe, wert, i) => summe + (wert === i + 1 ? 0 : 1), 0);
}

/** Zufälliger Stapel mit n Pfannkuchen (nie bereits sortiert). */
export function mische(n) {
  const stapel = goalFor(n);
  for (let i = stapel.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stapel[i], stapel[j]] = [stapel[j], stapel[i]];
  }
  return isGoal(stapel) ? mische(n) : stapel;
}

/** Ein paar feste Startstapel zum Vergleichen. */
export const PRESETS = [
  { label: "3 Pfannkuchen", state: [2, 3, 1] },
  { label: "4 Pfannkuchen", state: [3, 1, 4, 2] },
  { label: "5 Pfannkuchen", state: [4, 2, 5, 1, 3] },
];
