/**
 * mazeLevel — Bausteine für das Labyrinth des Pfadmeisters.
 *
 * Das Spielfeld ist ein Koordinatensystem von 0/0 (oben links) bis
 * FIELD.width/FIELD.height, als Lesehilfe in Zellen von CELL Pixeln
 * eingeteilt. Die Hindernisse sind aber **nicht** mehr brav in Zellen
 * eingesperrt: Es sind grosse, geschwungene Gebilde, die sich überschneiden
 * und zusammenwachsen.
 *
 *   • Felsblock      — dicker runder Klotz, berührt fast seine Nachbarn.
 *   • Felsbogen      — lange gebogene Wand über mehrere Zellen.
 *   • Schlangenmauer — S-förmige Wand, aussen herum geht nur mit Schwung.
 *   • Schwingtor     — zwei Sperrmauern quer durchs Feld mit versetzten
 *     Toren: durch das erste Tor hinein, im Gang zur Seite schwingen, durch
 *     das zweite Tor hinaus. Geradeaus kommt hier niemand durch — das geht
 *     nur mit einem Bogen (`Q`).
 *
 * Start und Ziel bleiben immer frei, und ausgegeben wird nur ein Labyrinth,
 * durch das es wirklich einen Weg gibt (geprüft auf einem feinen Raster).
 */

export const FIELD = { width: 420, height: 300 };

/** Kantenlänge einer Zelle (nur Lesehilfe für die Koordinaten). */
export const CELL = 60;
export const COLS = FIELD.width / CELL; // 7
export const ROWS = FIELD.height / CELL; // 5

/** Dicke des Rahmens rund um das Spielfeld. */
export const FRAME = 6;

/** Radius des Ziels. */
export const GOAL_R = 20;

/** Pfadi ist kein Punkt — ihr Stift braucht ein bisschen Platz. */
export const PEN_R = 3;

/**
 * Luft, die ein Weg zusätzlich haben muss, damit das Labyrinth als lösbar
 * gilt. Ohne diese Reserve entstehen haarfeine Gassen, die man zwar
 * theoretisch, aber praktisch nicht mit einer handgeschriebenen Weganweisung
 * trifft. Mit der Reserve bleibt immer eine bequeme Gasse offen.
 */
const ROOMY = 11;

/** Die gleiche Reserve, aber etwas kleiner, für den Rahmen. */
const ROOMY_FRAME = 4;

/** Ab diesem Labyrinth verlangt der Pfadmeister einen Bogen (`Q` oder `C`). */
export const CURVE_LEVEL = 2;

/** Start- und Zielzelle (Spalte/Zeile), immer gleich. */
const START_CELL = { col: 0, row: ROWS - 1 };
const GOAL_CELL = { col: COLS - 1, row: 0 };

/** Wie viel Platz rund um Start und Ziel frei bleiben muss. */
const START_CLEAR = 38;
const GOAL_CLEAR = GOAL_R + 22;

/** Mittelpunkt einer Zelle. */
export function cellCenter(col, row) {
  return { x: col * CELL + CELL / 2, y: row * CELL + CELL / 2 };
}

// --- kleine Geometrie-Helfer ------------------------------------------------

const pick = (list) => list[Math.floor(Math.random() * list.length)];
const coin = () => Math.random() < 0.5;

/** Punkt auf einer quadratischen Kurve (wie `Q`). */
function quadPoint(p0, c, p1, t) {
  const u = 1 - t;
  return [
    u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0],
    u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1],
  ];
}

/** Punkt auf einer kubischen Kurve (wie `C`). */
function cubicPoint(p0, c1, c2, p1, t) {
  const u = 1 - t;
  return [
    u ** 3 * p0[0] +
      3 * u * u * t * c1[0] +
      3 * u * t * t * c2[0] +
      t ** 3 * p1[0],
    u ** 3 * p0[1] +
      3 * u * u * t * c1[1] +
      3 * u * t * t * c2[1] +
      t ** 3 * p1[1],
  ];
}

/** Kurve in viele kleine Punkte zerlegen. */
function sample(at, steps = 22) {
  const points = [];
  for (let i = 0; i <= steps; i += 1) points.push(at(i / steps));
  return points;
}

/** Abstand eines Punktes zu einer Strecke. */
function distToSegment([px, py], a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - a[0], py - a[1]);
  let t = ((px - a[0]) * dx + (py - a[1]) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (a[0] + t * dx), py - (a[1] + t * dy));
}

/** Eine dicke, geschwungene Wand aus einer Punktkette. */
let chainId = 0;
function chain(points, r, label) {
  chainId += 1;
  return { id: `chain-${chainId}`, kind: "chain", points, r, label };
}

/** `d`-Angabe einer geschwungenen Wand (fürs Zeichnen). */
export function chainPath(obstacle) {
  return obstacle.points
    .map(
      ([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`,
    )
    .join(" ");
}

// --- Hindernisse ------------------------------------------------------------

/** Felsblock: dicker Klotz, lässt kaum Platz zu den Nachbarn. */
function rockFeature(col, row) {
  const c = cellCenter(col, row);
  const r = CELL / 2 - 10;
  return [
    {
      id: `rock-${col}-${row}-${(chainId += 1)}`,
      kind: "circle",
      cx: c.x,
      cy: c.y,
      r,
      label: "Felsblock",
    },
  ];
}

/** Felsbogen: lange gebogene Wand über zwei bis drei Zellen. */
function bowFeature(col, row) {
  const span = pick([2, 3]);
  const bulge = coin() ? 1 : -1;
  const horizontal = coin();

  const a = cellCenter(col, row);
  const b = horizontal
    ? cellCenter(col + span, row)
    : cellCenter(col, row + span);
  const mid = horizontal
    ? cellCenter(col + span / 2, row + bulge)
    : cellCenter(col + bulge, row + span / 2);

  const p0 = [a.x, a.y];
  const p1 = [b.x, b.y];
  // Kontrollpunkt so legen, dass die Kurve wirklich durch `mid` geht.
  const c = [
    2 * mid.x - (p0[0] + p1[0]) / 2,
    2 * mid.y - (p0[1] + p1[1]) / 2,
  ];

  return [chain(sample((t) => quadPoint(p0, c, p1, t)), 9, "Felsbogen")];
}

/** Schlangenmauer: S-förmige Wand. */
function snakeFeature(col, row) {
  const horizontal = coin();
  const flip = coin() ? 1 : -1;

  const a = cellCenter(col, row);
  const b = horizontal ? cellCenter(col + 2, row) : cellCenter(col, row + 2);
  const c1 = horizontal
    ? cellCenter(col + 1, row + flip)
    : cellCenter(col + flip, row + 1);
  const c2 = horizontal
    ? cellCenter(col + 1, row - flip)
    : cellCenter(col - flip, row + 1);

  const points = sample((t) =>
    cubicPoint([a.x, a.y], [c1.x, c1.y], [c2.x, c2.y], [b.x, b.y], t),
  );
  return [chain(points, 8, "Schlangenmauer")];
}

/**
 * Schwingtor: zwei Sperrmauern hintereinander mit versetzten Toren.
 *
 * Beide Mauern riegeln das Spielfeld komplett ab — Pfadi *muss* hindurch.
 * Das Tor der ersten Mauer und das Tor der zweiten liegen aber weit
 * auseinander: Pfadi geht durch das erste Tor, schwingt im Gang dazwischen
 * zur Seite und verlässt die Schleuse durch das zweite Tor. Geradeaus geht
 * das nie — genau dafür gibt es `Q` und `C`.
 *
 * Der Gang und die Tore sind grosszügig breit, damit ein Bogen bequem
 * hindurchpasst.
 */
function gateFeature(col, row) {
  const horizontal = coin(); // Mauern senkrecht (links/rechts geteilt)?
  const thick = 7; // Dicke der Mauern
  const CORRIDOR = 84; // Abstand der beiden Mauern
  const GATE = 88; // Höhe/Breite eines Tores

  // Position quer zur Mauer (dort wo die Mauern stehen).
  const across = horizontal
    ? Math.min(FIELD.width - 80, Math.max(80, (col + 1) * CELL))
    : Math.min(FIELD.height - 80, Math.max(80, (row + 1) * CELL));

  // Lage der beiden Tore: weit auseinander, aber mit Platz zum Rand.
  const span = horizontal ? FIELD.height : FIELD.width;
  const lo = FRAME + GATE / 2 + 6;
  const hi = span - FRAME - GATE / 2 - 6;
  const snap = (v) => Math.round(Math.min(hi, Math.max(lo, v)) / 10) * 10;
  const first = snap(lo + Math.random() * (hi - lo));
  const other = snap(
    first < (lo + hi) / 2
      ? first + GATE + 30 + Math.random() * 40
      : first - GATE - 30 - Math.random() * 40,
  );

  const wiggle = () => (Math.random() * 2 - 1) * 12;

  /** Eine Mauer von Rand zu Rand mit einem Loch bei `gate`. */
  function barrier(offset, gate) {
    const fixed = across + offset;
    const pieces = [];

    // Punkt auf der Mauer: `t` ist die Lage längs der Mauer.
    const at = (t) => (horizontal ? [fixed, t] : [t, fixed]);

    for (const [from, to] of [
      [-6, gate - GATE / 2],
      [gate + GATE / 2, span + 6],
    ]) {
      if (to - from < 8) continue;
      const mid = at((from + to) / 2);
      const bend = horizontal
        ? [mid[0] + wiggle(), mid[1]]
        : [mid[0], mid[1] + wiggle()];
      const points = sample((t) => quadPoint(at(from), bend, at(to), t), 12);
      pieces.push({ ...chain(points, thick, "Sperrmauer"), gate: true });
    }

    return pieces;
  }

  const gates = [
    { offset: -CORRIDOR / 2, at: first },
    { offset: CORRIDOR / 2, at: other },
  ];

  const obstacles = gates.flatMap((g) => barrier(g.offset, g.at));

  // Merkpunkte der beiden Tore (Mitte der Lücke) — als Zielhilfe.
  obstacles.doors = gates.map((g) =>
    horizontal
      ? { x: across + g.offset, y: g.at }
      : { x: g.at, y: across + g.offset },
  );

  // Schutzzone: Gang zwischen den Mauern plus Anlauf vor beiden Toren. Hier
  // darf kein weiterer Baustein stehen, sonst wird die Schleuse unpassierbar.
  const low = Math.min(first, other) - 58;
  const high = Math.max(first, other) + 58;
  const near = across - CORRIDOR / 2 - 44;
  const far = across + CORRIDOR / 2 + 44;
  obstacles.zone = horizontal
    ? { x0: near, x1: far, y0: low, y1: high }
    : { x0: low, x1: high, y0: near, y1: far };

  return obstacles;
}

/** Baustein bauen. */
function buildFeature(type, col, row) {
  switch (type) {
    case "bow":
      return bowFeature(col, row);
    case "snake":
      return snakeFeature(col, row);
    case "gate":
      return gateFeature(col, row);
    default:
      return rockFeature(col, row);
  }
}

/** Welche Bausteine kommen in diesem Labyrinth vor? */
function featurePool(level) {
  if (level < CURVE_LEVEL) return ["rock", "bow", "bow", "rock"];
  return ["gate", "bow", "snake", "rock", "gate", "bow", "snake"];
}

/** Wie viele Bausteine stehen in diesem Level? */
function featureCount(level) {
  return Math.min(6, 2 + level);
}

/** Wie viele Schwingtore darf es höchstens geben? */
function gateLimit(level) {
  return level < CURVE_LEVEL ? 0 : 1;
}

// --- Lösbarkeit -------------------------------------------------------------

/** Rastergrösse der Lösbarkeitsprüfung (in Pixeln). */
const PROBE = 4;
const GRID_COLS = Math.floor(FIELD.width / PROBE);
const GRID_ROWS = Math.floor(FIELD.height / PROBE);

const probePoint = (gx, gy) => [
  gx * PROBE + PROBE / 2,
  gy * PROBE + PROBE / 2,
];

/** Leeres Raster: nur der Rahmen ist blockiert. */
function emptyGrid() {
  const grid = new Uint8Array(GRID_COLS * GRID_ROWS);
  for (let gy = 0; gy < GRID_ROWS; gy += 1) {
    for (let gx = 0; gx < GRID_COLS; gx += 1) {
      if (hitsFrame(probePoint(gx, gy), PEN_R + ROOMY_FRAME))
        grid[gy * GRID_COLS + gx] = 1;
    }
  }
  return grid;
}

/** Hindernisse ins Raster stempeln (nur im eigenen Umfeld prüfen). */
function stamp(grid, obstacles, pad = PEN_R + ROOMY) {
  for (const obstacle of obstacles) {
    const box = boundingBox(obstacle);
    const x0 = Math.max(0, Math.floor((box.x0 - pad) / PROBE));
    const x1 = Math.min(GRID_COLS - 1, Math.ceil((box.x1 + pad) / PROBE));
    const y0 = Math.max(0, Math.floor((box.y0 - pad) / PROBE));
    const y1 = Math.min(GRID_ROWS - 1, Math.ceil((box.y1 + pad) / PROBE));

    for (let gy = y0; gy <= y1; gy += 1) {
      for (let gx = x0; gx <= x1; gx += 1) {
        const i = gy * GRID_COLS + gx;
        if (grid[i]) continue;
        if (hitsObstacle(probePoint(gx, gy), obstacle, pad)) grid[i] = 1;
      }
    }
  }
  return grid;
}

/** Überschneiden sich zwei Rechtecke? */
function overlaps(a, b) {
  return a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;
}

/** Grobe Hülle eines Hindernisses. */
function boundingBox(obstacle) {
  if (obstacle.kind === "circle") {
    return {
      x0: obstacle.cx - obstacle.r,
      x1: obstacle.cx + obstacle.r,
      y0: obstacle.cy - obstacle.r,
      y1: obstacle.cy + obstacle.r,
    };
  }
  if (obstacle.kind === "chain") {
    const xs = obstacle.points.map((p) => p[0]);
    const ys = obstacle.points.map((p) => p[1]);
    return {
      x0: Math.min(...xs) - obstacle.r,
      x1: Math.max(...xs) + obstacle.r,
      y0: Math.min(...ys) - obstacle.r,
      y1: Math.max(...ys) + obstacle.r,
    };
  }
  return {
    x0: obstacle.x,
    x1: obstacle.x + obstacle.width,
    y0: obstacle.y,
    y1: obstacle.y + obstacle.height,
  };
}

/** Führt durch die freien Felder ein Weg vom Start zum Ziel? (BFS) */
function solvable(grid, start, goal) {
  const sx = Math.floor(start.x / PROBE);
  const sy = Math.floor(start.y / PROBE);
  if (grid[sy * GRID_COLS + sx]) return false;

  const seen = new Uint8Array(grid.length);
  seen[sy * GRID_COLS + sx] = 1;
  const queue = [sy * GRID_COLS + sx];

  for (let head = 0; head < queue.length; head += 1) {
    const i = queue[head];
    const gx = i % GRID_COLS;
    const gy = (i - gx) / GRID_COLS;
    if (reachedGoal(probePoint(gx, gy), goal)) return true;

    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const nx = gx + dx;
      const ny = gy + dy;
      if (nx < 0 || ny < 0 || nx >= GRID_COLS || ny >= GRID_ROWS) continue;
      const j = ny * GRID_COLS + nx;
      if (seen[j] || grid[j]) continue;
      seen[j] = 1;
      queue.push(j);
    }
  }

  return false;
}

// --- Labyrinth würfeln ------------------------------------------------------

/**
 * Würfelt ein Labyrinth für das Level `level`.
 *
 * Die Bausteine werden einer nach dem anderen gesetzt und dürfen sich
 * überschneiden — so wachsen sie zu grossen, verwinkelten Gebilden zusammen.
 * Nach jedem Baustein wird geprüft, ob es noch einen Weg zum Ziel gibt; wenn
 * nicht, wird dieser Baustein wieder verworfen.
 */
export function makeMaze(level = 1) {
  const start = cellCenter(START_CELL.col, START_CELL.row);
  const goalCenter = cellCenter(GOAL_CELL.col, GOAL_CELL.row);
  const goal = { ...goalCenter, r: GOAL_R };

  const pool = featurePool(level);
  const wanted = featureCount(level);

  let grid = emptyGrid();
  const obstacles = [];
  const doors = [];
  const zones = [];
  const maxGates = gateLimit(level);
  let gates = 0;
  let tries = 0;

  let placed = 0;
  while (placed < wanted) {
    tries += 1;
    if (tries > 200) break;

    // Ab dem Kurven-Level soll mindestens ein Schwingtor dabei sein — aber
    // auch nicht zu viele.
    const needGate = maxGates > 0 && gates === 0;
    let type = needGate ? "gate" : pick(pool);
    if (type === "gate" && gates >= maxGates) {
      type = pick(["bow", "snake", "rock"]);
    }

    const col = Math.floor(Math.random() * COLS);
    const row = Math.floor(Math.random() * ROWS);
    const feature = buildFeature(type, col, row);

    // Passt der Baustein überhaupt ins Feld? (Sperrmauern dürfen an den Rand)
    const outside =
      type !== "gate" &&
      feature.some((obstacle) => {
        const box = boundingBox(obstacle);
        return (
          box.x0 < FRAME + 2 ||
          box.y0 < FRAME + 2 ||
          box.x1 > FIELD.width - FRAME - 2 ||
          box.y1 > FIELD.height - FRAME - 2
        );
      });
    if (outside) continue;

    // In die Schutzzone einer Schleuse darf nichts hineingebaut werden.
    const inZone = feature.some((obstacle) => {
      const box = boundingBox(obstacle);
      return zones.some((zone) => overlaps(box, zone));
    });
    if (inZone) continue;

    // Umgekehrt: eine neue Schleuse braucht ihren Gang frei.
    if (feature.zone) {
      const occupied = obstacles.some((obstacle) =>
        overlaps(boundingBox(obstacle), feature.zone),
      );
      if (occupied) continue;
    }

    // Rund um Start und Ziel muss Platz bleiben.
    const tooClose = feature.some(
      (obstacle) =>
        hitsObstacle([start.x, start.y], obstacle, START_CLEAR) ||
        hitsObstacle([goal.x, goal.y], obstacle, GOAL_CLEAR),
    );
    if (tooClose) continue;

    const candidate = stamp(grid.slice(), feature);
    if (!solvable(candidate, start, goal)) continue;

    grid = candidate;
    obstacles.push(...feature);
    if (feature.doors) doors.push(...feature.doors);
    if (feature.zone) zones.push(feature.zone);
    placed += 1;
    if (type === "gate") gates += 1;
  }

  return {
    number: level,
    start,
    goal,
    obstacles,
    gates,
    /** Mitte der Tore in den Sperrmauern — Pfadi muss hier durch. */
    doors,
    /** Anzahl gesetzter Bausteine (einer besteht aus mehreren Teilen). */
    features: placed,
    /** Verlangt der Pfadmeister in diesem Labyrinth einen Bogen? */
    requireCurve: level >= CURVE_LEVEL && gates > 0,
  };
}

/** Liegt der Punkt im Hindernis (mit dem Platzbedarf des Stifts)? */
export function hitsObstacle(point, obstacle, pad = PEN_R) {
  const [x, y] = point;

  if (obstacle.kind === "circle") {
    return Math.hypot(x - obstacle.cx, y - obstacle.cy) <= obstacle.r + pad;
  }

  if (obstacle.kind === "chain") {
    const limit = obstacle.r + pad;
    const pts = obstacle.points;
    for (let i = 1; i < pts.length; i += 1) {
      if (distToSegment(point, pts[i - 1], pts[i]) <= limit) return true;
    }
    return false;
  }

  return (
    x >= obstacle.x - pad &&
    x <= obstacle.x + obstacle.width + pad &&
    y >= obstacle.y - pad &&
    y <= obstacle.y + obstacle.height + pad
  );
}

/** Berührt der Punkt den Rahmen oder liegt er ausserhalb des Spielfelds? */
export function hitsFrame(point, pad = PEN_R) {
  const [x, y] = point;
  const limit = FRAME + pad;
  return (
    x <= limit ||
    y <= limit ||
    x >= FIELD.width - limit ||
    y >= FIELD.height - limit
  );
}

/** Ist der Punkt im Ziel angekommen? */
export function reachedGoal(point, goal) {
  return Math.hypot(point[0] - goal.x, point[1] - goal.y) <= goal.r;
}
