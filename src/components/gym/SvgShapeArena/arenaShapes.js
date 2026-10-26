/**
 * arenaShapes — Bausteine für die Formen-Arena (Minigolf gegen den Boss).
 *
 * Die Arena ist ein Koordinatensystem von 0/0 (oben links) bis
 * ARENA.width/ARENA.height. Alle Eckpunkte liegen auf einem groben Raster,
 * damit man die Koordinaten im Gitter ablesen und abtippen kann.
 */

export const ARENA = { width: 420, height: 300 };

/** Raster, auf dem die Eckpunkte liegen. */
const STEP = 20;
/** Abstand zum Rand. */
const MARGIN = 20;
/** Strichstärke aller Formen (bewusst immer gleich). */
export const STROKE_WIDTH = 4;

/** Schaden am Boss, wenn der Ball die Form trifft. */
export const DAMAGE = { line: 10, polyline: 15, polygon: 20 };

/** Die drei Formen, die in jedem Level vorkommen müssen. */
export const REQUIRED_TAGS = ["line", "polyline", "polygon"];

/** Erlaubte Anzahl Eckpunkte. */
export const POINT_LIMITS = {
  line: { min: 2, max: 2 },
  polyline: { min: 3, max: 5 },
  polygon: { min: 3, max: 5 },
};

const COLORS = [
  "#fb4934", // rot
  "#b8bb26", // grün
  "#fabd2f", // gelb
  "#83a598", // blau
];

let nextId = 1;

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/** Zufälliger Rasterwert zwischen min und max. */
function rasterValue(min, max) {
  const low = Math.ceil(min / STEP);
  const high = Math.floor(max / STEP);
  return (low + Math.floor(Math.random() * (high - low + 1))) * STEP;
}

function randomPoint() {
  return [
    rasterValue(MARGIN, ARENA.width - MARGIN),
    rasterValue(MARGIN, ARENA.height - MARGIN),
  ];
}

function distance(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

/** Punkte würfeln, die weit genug auseinanderliegen. */
function spreadPoints(count, minGap = 60) {
  const points = [];
  let guard = 0;
  while (points.length < count && guard < 400) {
    guard += 1;
    const candidate = randomPoint();
    if (points.every((point) => distance(point, candidate) >= minGap)) {
      points.push(candidate);
    }
  }
  while (points.length < count) points.push(randomPoint());
  return points;
}

/** Sortiert Punkte im Kreis um ihren Schwerpunkt (kein Überschlagen). */
function sortByAngle(points) {
  const cx = points.reduce((sum, p) => sum + p[0], 0) / points.length;
  const cy = points.reduce((sum, p) => sum + p[1], 0) / points.length;
  return [...points].sort(
    (a, b) =>
      Math.atan2(a[1] - cy, a[0] - cx) - Math.atan2(b[1] - cy, b[0] - cx),
  );
}

export function pointsToString(points) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

/** Würfelt eine Form eines bestimmten Typs (die Vorgabe des Levels). */
export function randomShape(tag) {
  const stroke = pick(COLORS);
  const id = nextId++;

  if (tag === "line") {
    const [a, b] = spreadPoints(2, 120);
    return {
      id,
      tag,
      preset: true,
      points: [a, b],
      attrs: {
        x1: a[0],
        y1: a[1],
        x2: b[0],
        y2: b[1],
        stroke,
        "stroke-width": STROKE_WIDTH,
      },
    };
  }

  const count = tag === "polyline" ? pick([3, 4]) : 3;
  const raw = spreadPoints(count, 70);
  const points = tag === "polygon" ? sortByAngle(raw) : raw;

  return {
    id,
    tag,
    preset: true,
    points,
    attrs: {
      points: pointsToString(points),
      fill: "none",
      stroke,
      "stroke-width": STROKE_WIDTH,
    },
  };
}

/** Startpunkt und Richtung des Balls — weit genug weg von der Vorgabe. */
export function randomBall(preset) {
  let best = null;

  for (let tries = 0; tries < 60; tries += 1) {
    const candidate = {
      x: rasterValue(40, ARENA.width - 40),
      y: rasterValue(40, ARENA.height - 40),
      angle: Math.random() * Math.PI * 2,
    };
    const gap = preset
      ? Math.min(
          ...segmentsOf(preset).map(
            (segment) =>
              distanceToSegment(
                candidate.x,
                candidate.y,
                segment[0],
                segment[1],
              ).dist,
          ),
        )
      : Infinity;

    if (!best || gap > best.gap) best = { ...candidate, gap };
    if (gap > 70) break;
  }

  return { x: best.x, y: best.y, angle: best.angle };
}

/** Baut ein Level: eine vorgegebene Form plus Ball mit Richtung. */
export function makeLevel(number = 1) {
  const presetTag = pick(REQUIRED_TAGS);
  const preset = randomShape(presetTag);
  return {
    number,
    preset,
    ball: randomBall(preset),
  };
}

/** Die Form als Code — nützlich für Hinweise. */
export function shapeToCode(shape) {
  const attrs = Object.entries(shape.attrs)
    .map(([name, value]) => `${name}="${value}"`)
    .join(" ");
  return `<${shape.tag} ${attrs} />`;
}

// --- Formen aus dem Code der Spielerin -----------------------------------

/** Zerlegt eine Zahlenliste wie "10,20 30,40" in [[10,20],[30,40]]. */
function parsePoints(raw) {
  const numbers = String(raw ?? "")
    .trim()
    .split(/[\s,]+/)
    .filter((part) => part !== "")
    .map(Number);

  if (numbers.some(Number.isNaN)) return null;

  const points = [];
  for (let index = 0; index + 1 < numbers.length; index += 2) {
    points.push([numbers[index], numbers[index + 1]]);
  }
  return points;
}

/**
 * Macht aus einer geschriebenen Form (tag + Attribute als Text) die
 * Eckpunkte für die Physik. `null`, wenn die Angaben nicht reichen.
 */
export function geometryOf(tag, attrs) {
  if (tag === "line") {
    const values = ["x1", "y1", "x2", "y2"].map((name) =>
      Number.parseFloat(attrs[name]),
    );
    if (values.some(Number.isNaN)) return null;
    return [
      [values[0], values[1]],
      [values[2], values[3]],
    ];
  }

  if (tag === "polyline" || tag === "polygon") {
    const points = parsePoints(attrs.points);
    return points && points.length >= 2 ? points : null;
  }

  return null;
}

/** Liegt die Form vollständig in der Arena? */
export function insideArena(points) {
  return points.every(
    ([x, y]) => x >= 0 && y >= 0 && x <= ARENA.width && y <= ARENA.height,
  );
}

// --- Geometrie für die Kollisionen ---------------------------------------

/** Alle Strecken einer Form als [[x1,y1],[x2,y2]]. */
export function segmentsOf(shape) {
  const points = shape.points ?? [];
  const segments = [];
  for (let index = 0; index + 1 < points.length; index += 1) {
    segments.push([points[index], points[index + 1]]);
  }
  if (shape.tag === "polygon" && points.length > 2) {
    segments.push([points[points.length - 1], points[0]]);
  }
  return segments;
}

/**
 * Kürzester Abstand eines Punktes zu einer Strecke.
 *
 * @returns {{dist: number, nx: number, ny: number}} Abstand und
 *   Einheitsnormale, die von der Strecke zum Punkt zeigt
 */
export function distanceToSegment(px, py, [ax, ay], [bx, by]) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSq = dx * dx + dy * dy || 1;
  let t = ((px - ax) * dx + (py - ay) * dy) / lengthSq;
  t = Math.max(0, Math.min(1, t));

  const cx = ax + t * dx;
  const cy = ay + t * dy;
  const vx = px - cx;
  const vy = py - cy;
  const dist = Math.hypot(vx, vy) || 0.0001;

  return { dist, nx: vx / dist, ny: vy / dist };
}

/**
 * Trifft der Ball die Form? Liefert die Normale für das Abprallen.
 *
 * @returns {{nx: number, ny: number} | null}
 */
export function hitNormal(ball, shape, radius) {
  const reach = radius + STROKE_WIDTH / 2;
  let best = null;

  for (const [a, b] of segmentsOf(shape)) {
    const result = distanceToSegment(ball.x, ball.y, a, b);
    if (result.dist <= reach && (best === null || result.dist < best.dist)) {
      best = result;
    }
  }

  return best ? { nx: best.nx, ny: best.ny } : null;
}

/** Spiegelt die Geschwindigkeit an einer Normalen (Abprallen). */
export function reflect(vx, vy, nx, ny) {
  const dot = vx * nx + vy * ny;
  return { vx: vx - 2 * dot * nx, vy: vy - 2 * dot * ny };
}
