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
  return raw === undefined ? undefined : String(raw).trim();
}

/** Alle Attributnamen, die bei einer Form verglichen werden. */
function relevantAttrs(target) {
  const names = new Set(Object.keys(target.attrs));
  names.add("fill");
  names.add("stroke");
  if (normalizeColor(target.attrs.stroke ?? DEFAULTS.stroke) !== "none") {
    names.add("stroke-width");
  }
  return [...names];
}

/** Vergleicht eine Form mit einer Zielform. Gibt die Abweichungen zurück. */
function diffShape(target, candidate, tolerance) {
  if (target.tag !== candidate.tag) return [{ name: "tag" }];

  const problems = [];
  for (const name of relevantAttrs(target)) {
    const wanted = attrValue(target, name);
    const got = attrValue(candidate, name);

    const ok =
      typeof wanted === "number" && typeof got === "number"
        ? Math.abs(wanted - got) <= tolerance
        : wanted === got;

    if (!ok) problems.push({ name, wanted, got });
  }
  return problems;
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
      const names = bestProblems.map((problem) => problem.name).join(", ");
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
