/**
 * svgCompare — vergleicht zwei SVG-Markup-Strings inhaltlich.
 *
 * Verglichen wird nicht der Text, sondern das *Ergebnis*: Welche Formen gibt
 * es, und welche Eigenschaften haben sie? So darf die Schülerlösung anders
 * formatiert sein (andere Reihenfolge der Attribute, andere Schreibweise der
 * Farbe) und gilt trotzdem als richtig.
 */

/** Formen, die wir vergleichen. */
const SHAPES = [
  "circle",
  "ellipse",
  "rect",
  "line",
  "polyline",
  "polygon",
  "path",
  "text",
];

/** Attribute, die als Zahl verglichen werden. */
const NUMERIC_ATTRS = new Set([
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "x",
  "y",
  "x1",
  "y1",
  "x2",
  "y2",
  "width",
  "height",
  "stroke-width",
  "opacity",
  "fill-opacity",
  "stroke-opacity",
  "font-size",
]);

/** Attribute, die als Farbe verglichen werden. */
const COLOR_ATTRS = new Set(["fill", "stroke"]);

/** Attribute, die aus einer Liste von Zahlen bestehen. */
const LIST_ATTRS = new Set(["points", "stroke-dasharray"]);

/** Zerlegt eine Zahlenliste wie "10,20 30,40" in [10, 20, 30, 40]. */
export function parseNumberList(raw) {
  return String(raw ?? "")
    .trim()
    .split(/[\s,]+/)
    .filter((part) => part !== "")
    .map((part) => Number.parseFloat(part));
}

/** Macht aus [x1, y1, x2, y2, ...] eine Liste von Punkten [[x1, y1], ...]. */
function toPairs(numbers) {
  const pairs = [];
  for (let index = 0; index + 1 < numbers.length; index += 2) {
    pairs.push([numbers[index], numbers[index + 1]]);
  }
  return pairs;
}

function samePoint(a, b, tolerance) {
  return (
    Math.abs(a[0] - b[0]) <= tolerance && Math.abs(a[1] - b[1]) <= tolerance
  );
}

function sameSequence(a, b, tolerance) {
  return a.every((point, index) => samePoint(point, b[index], tolerance));
}

/**
 * Vergleicht zwei Punktlisten *geometrisch*.
 *
 * Ein Linienzug sieht gleich aus, wenn man ihn rückwärts zeichnet. Ein
 * Vieleck sieht zusätzlich gleich aus, wenn man an einer anderen Ecke
 * beginnt. Genau das lassen wir hier zu — die Reihenfolge der Punkte muss
 * also nicht exakt mit dem Ziel übereinstimmen, solange dasselbe Bild
 * entsteht.
 *
 * @returns {"equal"|"same-points"|"different"}
 */
export function comparePointLists(wanted, got, tolerance = 2, tag = "") {
  const a = toPairs(wanted);
  const b = toPairs(got);
  if (a.length === 0 || a.length !== b.length) return "different";

  const variants = [b, [...b].reverse()];
  if (tag === "polygon") {
    // Geschlossene Form: jeder Startpunkt ist erlaubt (in beide Richtungen).
    for (const base of [b, [...b].reverse()]) {
      for (let shift = 1; shift < base.length; shift += 1) {
        variants.push([...base.slice(shift), ...base.slice(0, shift)]);
      }
    }
  }

  if (variants.some((variant) => sameSequence(a, variant, tolerance))) {
    return "equal";
  }

  // Gleiche Punkte, aber in einer Reihenfolge, die ein anderes Bild ergibt.
  const rest = [...b];
  const allFound = a.every((point) => {
    const index = rest.findIndex((other) => samePoint(point, other, tolerance));
    if (index < 0) return false;
    rest.splice(index, 1);
    return true;
  });

  return allFound ? "same-points" : "different";
}

/** Standardwerte, wenn ein Attribut fehlt. */
const DEFAULTS = {
  fill: "#000000",
  stroke: "none",
  "stroke-width": 1,
  opacity: 1,
};

const NAMED_COLORS = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  lime: "#00ff00",
  green: "#008000",
  blue: "#0000ff",
  yellow: "#ffff00",
  orange: "#ffa500",
  purple: "#800080",
  pink: "#ffc0cb",
  gray: "#808080",
  grey: "#808080",
  silver: "#c0c0c0",
  aqua: "#00ffff",
  cyan: "#00ffff",
  magenta: "#ff00ff",
  fuchsia: "#ff00ff",
  brown: "#a52a2a",
  navy: "#000080",
  teal: "#008080",
  gold: "#ffd700",
  transparent: "none",
};

/** Bringt eine Farbangabe in die Form `#rrggbb` (oder `none`). */
export function normalizeColor(raw) {
  if (raw === undefined || raw === null) return "none";
  const value = String(raw).trim().toLowerCase();
  if (value === "" || value === "none") return "none";
  if (NAMED_COLORS[value]) return NAMED_COLORS[value];

  if (/^#[0-9a-f]{3}$/.test(value)) {
    return `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
  }
  if (/^#[0-9a-f]{6}$/.test(value)) return value;

  const rgb = value.match(
    /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)(?:[\s,/]+[\d.]+)?\s*\)$/,
  );
  if (rgb) {
    const hex = rgb
      .slice(1, 4)
      .map((part) => Number(part).toString(16).padStart(2, "0"))
      .join("");
    return `#${hex}`;
  }

  return value;
}

/** Liest alle Formen aus einem SVG-String. */
export function parseShapes(code) {
  if (typeof DOMParser === "undefined") return { error: null, shapes: [] };

  const doc = new DOMParser().parseFromString(
    String(code ?? "").trim(),
    "image/svg+xml",
  );

  const failure = doc.querySelector("parsererror");
  if (failure) {
    return {
      error: "Der Code ist noch nicht gültig (XML-Fehler).",
      shapes: [],
    };
  }

  const shapes = [];
  for (const element of doc.querySelectorAll(SHAPES.join(","))) {
    const attrs = {};
    for (const attribute of element.attributes) {
      attrs[attribute.name] = attribute.value;
    }
    shapes.push({ tag: element.tagName.toLowerCase(), attrs });
  }

  return { error: null, shapes };
}

function attrValue(shape, name) {
  const raw = shape.attrs[name] ?? DEFAULTS[name];
  if (COLOR_ATTRS.has(name)) return normalizeColor(raw);
  if (NUMERIC_ATTRS.has(name)) {
    const number = Number.parseFloat(raw);
    return Number.isNaN(number) ? raw : number;
  }
  if (LIST_ATTRS.has(name)) {
    const numbers = parseNumberList(raw);
    return numbers.some(Number.isNaN) ? String(raw).trim() : numbers;
  }
  return raw === undefined ? undefined : String(raw).trim();
}

/** Alle Attributnamen, die bei einer Form verglichen werden. */
function relevantAttrs(target) {
  const names = new Set(Object.keys(target.attrs));
  // Bei einer Linie hat `fill` keine sichtbare Wirkung.
  if (target.tag !== "line") names.add("fill");
  names.add("stroke");
  if (normalizeColor(target.attrs.stroke ?? DEFAULTS.stroke) !== "none") {
    names.add("stroke-width");
  }
  return [...names];
}

/** Vergleicht eine Form mit einer Zielform. Gibt die Abweichungen zurück. */
function diffShape(target, rawCandidate, tolerance) {
  if (target.tag !== rawCandidate.tag) return [{ name: "tag" }];

  const candidate = maybeFlipLine(target, rawCandidate, tolerance);

  const problems = [];
  for (const name of relevantAttrs(target)) {
    const wanted = attrValue(target, name);
    const got = attrValue(candidate, name);

    let ok = false;
    let note;
    if (typeof wanted === "number" && typeof got === "number") {
      ok = Math.abs(wanted - got) <= tolerance;
    } else if (Array.isArray(wanted) && Array.isArray(got)) {
      if (name === "points") {
        // Punktliste: dasselbe Bild zählt, nicht derselbe Text.
        const verdict = comparePointLists(wanted, got, tolerance, target.tag);
        ok = verdict === "equal";
        if (verdict === "same-points") note = "order";
        else if (!ok && wanted.length !== got.length) note = "count";
      } else {
        ok =
          wanted.length === got.length &&
          wanted.every(
            (number, index) => Math.abs(number - got[index]) <= tolerance,
          );
      }
    } else {
      ok = wanted === got;
    }

    if (!ok) problems.push({ name, wanted, got, note });
  }
  return problems;
}

/**
 * Eine Linie sieht gleich aus, egal an welchem Ende sie beginnt. Passt die
 * getauschte Variante besser, vergleichen wir mit dieser.
 */
function maybeFlipLine(target, candidate, tolerance) {
  if (target.tag !== "line") return candidate;

  const near = (a, b) => Math.abs(a - b) <= tolerance;
  const num = (shape, name) => Number.parseFloat(shape.attrs[name]);
  const straight =
    near(num(target, "x1"), num(candidate, "x1")) &&
    near(num(target, "y1"), num(candidate, "y1")) &&
    near(num(target, "x2"), num(candidate, "x2")) &&
    near(num(target, "y2"), num(candidate, "y2"));
  if (straight) return candidate;

  const flipped =
    near(num(target, "x1"), num(candidate, "x2")) &&
    near(num(target, "y1"), num(candidate, "y2")) &&
    near(num(target, "x2"), num(candidate, "x1")) &&
    near(num(target, "y2"), num(candidate, "y1"));
  if (!flipped) return candidate;

  return {
    ...candidate,
    attrs: {
      ...candidate.attrs,
      x1: candidate.attrs.x2,
      y1: candidate.attrs.y2,
      x2: candidate.attrs.x1,
      y2: candidate.attrs.y1,
    },
  };
}

/** Macht aus einer Abweichung einen gut lesbaren Hinweis-Baustein. */
function problemLabel(problem) {
  if (problem.name !== "points") return problem.name;
  if (problem.note === "order")
    return "points (die Punkte stimmen, aber die Reihenfolge ergibt ein anderes Bild)";
  if (problem.note === "count") {
    const wantedCount = Math.floor(problem.wanted.length / 2);
    const gotCount = Math.floor(problem.got.length / 2);
    return `points (${wantedCount} Punkte erwartet, ${gotCount} gefunden)`;
  }
  return "points";
}

/**
 * Prüft, ob eine einzelne Form einer Zielform entspricht.
 *
 * @param {{tag: string, attrs: Record<string, unknown>}} target Zielform
 * @param {{tag: string, attrs: Record<string, unknown>}} candidate Kandidat
 * @param {number} [tolerance] erlaubte Abweichung bei Zahlen
 */
export function shapeMatches(target, candidate, tolerance = 2) {
  return diffShape(target, candidate, tolerance).length === 0;
}

/**
 * Findet alle Formen in einem SVG-Text — inklusive ihrer Position im Text.
 *
 * Anders als `parseShapes` arbeitet das hier rein textuell. Dafür weiß man
 * hinterher, welcher Abschnitt des Codes zu welcher Form gehört (praktisch,
 * um eine erledigte Form wieder aus dem Editor zu entfernen).
 *
 * @returns {{tag: string, attrs: Record<string, string>, start: number, end: number}[]}
 */
export function scanShapes(code) {
  const text = String(code ?? "");
  const element = new RegExp(`<(${SHAPES.join("|")})\\b([^>]*?)/?>`, "gi");
  const found = [];

  for (const match of text.matchAll(element)) {
    const attrs = {};
    for (const pair of match[2].matchAll(/([\w-]+)\s*=\s*"([^"]*)"/g)) {
      attrs[pair[1]] = pair[2];
    }
    found.push({
      tag: match[1].toLowerCase(),
      attrs,
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  return found;
}

/**
 * Vergleicht Lösung und Ziel.
 *
 * @param {string} userCode Code der Schülerin / des Schülers
 * @param {string} targetCode Ziel-Code
 * @param {number} [tolerance] erlaubte Abweichung bei Zahlen
 * @returns {{ok: boolean, error: string|null, hints: string[], matched: number, total: number}}
 */
export function compareSvg(userCode, targetCode, tolerance = 2) {
  const target = parseShapes(targetCode);
  const user = parseShapes(userCode);

  if (user.error) {
    return {
      ok: false,
      error: user.error,
      hints: [],
      matched: 0,
      total: target.shapes.length,
    };
  }

  const open = [...user.shapes];
  const hints = [];
  let matched = 0;

  for (const wanted of target.shapes) {
    let bestIndex = -1;
    let bestProblems = null;

    open.forEach((candidate, index) => {
      const problems = diffShape(wanted, candidate, tolerance);
      if (bestProblems === null || problems.length < bestProblems.length) {
        bestProblems = problems;
        bestIndex = index;
      }
    });

    if (bestProblems && bestProblems.length === 0) {
      matched += 1;
      open.splice(bestIndex, 1);
      continue;
    }

    if (bestProblems && bestIndex >= 0 && bestProblems[0].name !== "tag") {
      const names = bestProblems.map(problemLabel).join(", ");
      hints.push(`Bei einem <${wanted.tag}> stimmt noch nicht: ${names}.`);
      open.splice(bestIndex, 1);
    } else {
      hints.push(`Es fehlt noch ein <${wanted.tag}>.`);
    }
  }

  if (open.length > 0) {
    hints.push(
      open.length === 1
        ? "Eine Form ist zu viel im Bild."
        : `${open.length} Formen sind zu viel im Bild.`,
    );
  }

  return {
    ok: hints.length === 0 && matched === target.shapes.length,
    error: null,
    hints,
    matched,
    total: target.shapes.length,
  };
}
