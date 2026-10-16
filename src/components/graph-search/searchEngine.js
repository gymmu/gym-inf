/**
 * Eine Graphensuche, die man Schritt für Schritt beobachten kann.
 *
 * Die Funktion `createSearch` gibt ein Objekt mit einer Methode `step()`
 * zurück. Jeder Aufruf macht genau einen Schleifendurchlauf des
 * Suchalgorithmus und liefert eine Momentaufnahme:
 *
 *   - welcher Knoten gerade aus der Grenze geholt wurde
 *   - wie die Grenze danach aussieht
 *   - welche Zustände bereits besucht sind
 *
 * Genau diese Momentaufnahmen zeichnet die Visualisierung.
 */

import { isGoal, key, manhattan, misplaced, successors } from "./puzzle.js";

export const HEURISTICS = {
  keine: () => 0,
  falschePlaetze: misplaced,
  manhattan,
};

export const STRATEGIES = {
  bfs: {
    label: "Breitensuche (BFS)",
    frontier: "Warteschlange (FIFO)",
    pick: "der älteste Knoten",
    useHeuristic: false,
  },
  dfs: {
    label: "Tiefensuche (DFS)",
    frontier: "Stapel (LIFO)",
    pick: "der neueste Knoten",
    useHeuristic: false,
  },
  ids: {
    label: "Iterative Tiefensuche (IDS)",
    frontier: "Stapel (LIFO) mit Tiefenlimit",
    pick: "der neueste Knoten",
    useHeuristic: false,
  },
  ucs: {
    label: "Kostensuche (UCS)",
    frontier: "Prioritätswarteschlange",
    pick: "kleinstes g",
    useHeuristic: false,
  },
  greedy: {
    label: "Greedy Best-First",
    frontier: "Prioritätswarteschlange",
    pick: "kleinstes h",
    useHeuristic: true,
  },
  astar: {
    label: "A*",
    frontier: "Prioritätswarteschlange",
    pick: "kleinstes f = g + h",
    useHeuristic: true,
  },
};

let idCounter = 0;

function makeNode(state, parent, action, h) {
  return {
    id: idCounter++,
    state,
    parent,
    action,
    g: parent ? parent.g + 1 : 0,
    depth: parent ? parent.depth + 1 : 0,
    h: h(state),
  };
}

/** Die Zahl, nach der sortiert wird — hier steckt der ganze Unterschied. */
function priority(node, strategy) {
  switch (strategy) {
    case "ucs":
      return node.g;
    case "greedy":
      return node.h;
    case "astar":
      return node.g + node.h;
    default:
      return 0;
  }
}

/** Welchen Knoten nimmt die Grenze als nächstes? Gibt den Index zurück. */
function pickIndex(frontier, strategy) {
  if (frontier.length === 0) return -1;
  if (strategy === "bfs") return 0; // vorne raus
  if (strategy === "dfs" || strategy === "ids") return frontier.length - 1; // hinten raus
  let best = 0;
  for (let i = 1; i < frontier.length; i++) {
    if (priority(frontier[i], strategy) < priority(frontier[best], strategy))
      best = i;
  }
  return best;
}

export function pathTo(node) {
  const path = [];
  let current = node;
  while (current) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

/**
 * @param {number[]} start      Startzustand
 * @param {string} strategy     bfs | dfs | ids | ucs | greedy | astar
 * @param {object} options      { heuristic, maxExpansions, maxLimit }
 */
export function createSearch(start, strategy = "bfs", options = {}) {
  const h = options.heuristic ?? HEURISTICS.keine;
  const maxExpansions = options.maxExpansions ?? 6000;
  const istIDS = strategy === "ids";
  const maxLimit = options.maxLimit ?? 30;

  const root = makeNode(start, null, null, h);
  let frontier = [root];
  const visited = new Set();
  const besteTiefe = new Map(); // nur für IDS: Zustand -> bisher kleinste Tiefe
  let nodes = [root]; // alle je erzeugten Knoten, für den Suchbaum
  let limit = istIDS ? 0 : Number.POSITIVE_INFINITY; // Tiefenlimit der aktuellen Runde
  let neueRunde = false; // true genau in dem Schritt, der eine Runde startet
  const runden = []; // abgeschlossene Runden: { limit, expanded }
  let expandedRunde = 0;

  let expanded = 0;
  let generated = 1;
  let maxFrontier = 1;
  let status = "bereit"; // bereit | läuft | gefunden | erschöpft | abgebrochen
  let current = null;
  let lastChildren = [];
  let goalNode = null;

  function snapshot(message) {
    return {
      status,
      message,
      current,
      children: lastChildren,
      frontier: [...frontier],
      visited: new Set(visited),
      nodes: [...nodes],
      goalNode,
      path: goalNode ? pathTo(goalNode) : null,
      limit: istIDS ? limit : null,
      neueRunde,
      runden: istIDS ? [...runden, { limit, expanded: expandedRunde }] : null,
      stats: {
        expanded,
        generated,
        maxFrontier,
        frontierSize: frontier.length,
        visitedSize: visited.size,
      },
    };
  }

  const fertig = () =>
    status === "gefunden" || status === "erschöpft" || status === "abgebrochen";

  /** Ein Schleifendurchlauf — gibt nur die Meldung zurück. */
  function advance() {
    neueRunde = false;
    if (fertig()) return "Die Suche ist beendet.";

    if (frontier.length === 0) {
      // Iterative Tiefensuche: Runde zu Ende, also mit grösserem Limit neu beginnen.
      if (istIDS && limit < maxLimit) {
        runden.push({ limit, expanded: expandedRunde });
        limit++;
        expandedRunde = 0;
        frontier = [root];
        visited.clear();
        besteTiefe.clear();
        nodes = [root];
        current = null;
        lastChildren = [];
        status = "läuft";
        neueRunde = true;
        return `Runde ${limit + 1}: Bis Tiefe ${limit - 1} war kein Ziel — die Suche beginnt wieder ganz vorne, jetzt mit Tiefenlimit ${limit}.`;
      }
      status = "erschöpft";
      current = null;
      lastChildren = [];
      return "Die Grenze ist leer — es gibt keinen Weg zum Ziel.";
    }

    const index = pickIndex(frontier, strategy);
    const node = frontier[index];
    frontier = frontier.filter((_, i) => i !== index);
    current = node;
    lastChildren = [];

    const k = key(node.state);
    if (istIDS) {
      // Bei IDS zählt die Tiefe: ein Zustand darf noch einmal untersucht
      // werden, wenn wir ihn diesmal auf einem kürzeren Weg erreichen.
      const bekannt = besteTiefe.get(k);
      if (bekannt !== undefined && bekannt <= node.depth) {
        status = "läuft";
        return "Diesen Zustand kennen wir schon (nicht tiefer) — überspringen.";
      }
      besteTiefe.set(k, node.depth);
    } else if (visited.has(k)) {
      status = "läuft";
      return "Diesen Zustand kennen wir schon — überspringen.";
    }
    visited.add(k);

    if (isGoal(node.state)) {
      goalNode = node;
      status = "gefunden";
      return istIDS
        ? `Ziel gefunden in Runde ${limit + 1}, nach ${node.depth} Zügen.`
        : `Ziel gefunden nach ${node.depth} Zügen.`;
    }

    // Tiefenlimit: hier geht es nicht weiter, der Knoten wird nicht expandiert.
    if (node.depth >= limit) {
      status = "läuft";
      return `Tiefenlimit ${limit} erreicht — dieser Ast wird abgeschnitten.`;
    }

    expanded++;
    expandedRunde++;
    if (expanded >= maxExpansions) {
      status = "abgebrochen";
      return `Abbruch nach ${maxExpansions} expandierten Knoten — so weit kommt diese Suche hier nicht.`;
    }

    for (const edge of successors(node.state)) {
      if (!istIDS && visited.has(key(edge.state))) continue;
      const child = makeNode(edge.state, node, edge.action, h);
      frontier.push(child);
      nodes.push(child);
      lastChildren.push(child);
      generated++;
    }
    if (frontier.length > maxFrontier) maxFrontier = frontier.length;

    status = "läuft";
    return `Expandiert: ${node.action ?? "Startzustand"} — ${lastChildren.length} neue Knoten in die Grenze.`;
  }

  /** Ein Schritt mit Momentaufnahme. */
  function step() {
    return snapshot(advance());
  }

  /** Viele Schritte, aber nur eine Momentaufnahme am Schluss. */
  function run(anzahl) {
    let message = "";
    for (let i = 0; i < anzahl && !fertig(); i++) {
      message = advance();
    }
    return snapshot(message);
  }

  return {
    step,
    run,
    snapshot: () =>
      snapshot("Bereit. Die Grenze enthält nur den Startzustand."),
  };
}
