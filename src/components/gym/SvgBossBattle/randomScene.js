/**
 * randomScene — erzeugt zufällige SVG-Bilder aus Kreisen und Rechtecken.
 *
 * Die Bilder sind absichtlich einfach: runde Zahlen (Vielfache von 10),
 * wenige Farben und höchstens drei Formen. So bleiben die Aufgaben lösbar
 * und der Vergleich mit dem Ziel ist eindeutig.
 */

export const CANVAS = 200;

const COLORS = [
  "#fb4934", // rot
  "#b8bb26", // grün
  "#fabd2f", // gelb
  "#83a598", // blau
  "#d3869b", // violett
  "#fe8019", // orange
];

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/** Zufällige Zahl zwischen min und max, auf `step` gerundet. */
function num(min, max, step = 10) {
  const count = Math.floor((max - min) / step) + 1;
  return min + Math.floor(Math.random() * count) * step;
}

function randomCircle(usedColors) {
  const r = num(20, 60);
  return {
    tag: "circle",
    attrs: {
      cx: num(r, CANVAS - r),
      cy: num(r, CANVAS - r),
      r,
      fill: pickColor(usedColors),
    },
  };
}

function randomRect(usedColors) {
  const width = num(40, 120);
  const height = num(30, 110);
  return {
    tag: "rect",
    attrs: {
      x: num(0, CANVAS - width),
      y: num(0, CANVAS - height),
      width,
      height,
      fill: pickColor(usedColors),
    },
  };
}

function pickColor(usedColors) {
  const free = COLORS.filter((color) => !usedColors.includes(color));
  const color = pick(free.length > 0 ? free : COLORS);
  usedColors.push(color);
  return color;
}

/** Macht aus einem Ring ein Rechteck/Kreis ohne Füllung. */
function makeOutline(shape) {
  return {
    ...shape,
    attrs: {
      ...shape.attrs,
      fill: "none",
      stroke: shape.attrs.fill,
      "stroke-width": pick([6, 8, 10]),
    },
  };
}

// --- Ausgabe als Code ----------------------------------------------------

/** Attribute, die auf einer Zeile zusammengehören. */
const GROUPS = {
  circle: [["cx", "cy"], ["r"], ["fill"], ["stroke"], ["stroke-width"]],
  rect: [
    ["x", "y"],
    ["width", "height"],
    ["rx"],
    ["fill"],
    ["stroke"],
    ["stroke-width"],
  ],
};

/** Eine Form als Code — ein Attribut (bzw. ein Paar) pro Zeile. */
export function shapeToCode(shape, single = false) {
  const groups = single
    ? Object.keys(shape.attrs).map((name) => [name])
    : GROUPS[shape.tag];

  const lines = groups
    .map((group) =>
      group
        .filter((name) => shape.attrs[name] !== undefined)
        .map((name) => `${name}="${shape.attrs[name]}"`)
        .join(" "),
    )
    .filter((line) => line !== "");

  return [
    `  <${shape.tag}`,
    ...lines.map((line) => `    ${line}`),
    "  />",
  ].join("\n");
}

/** Ein ganzes Bild als Code. */
export function sceneToCode(shapes) {
  const single = shapes.length === 1;
  return [
    `<svg width="${CANVAS}" height="${CANVAS}">`,
    ...shapes.map((shape) => shapeToCode(shape, single)),
    "</svg>",
  ].join("\n");
}

// --- Runden --------------------------------------------------------------

/** Verschiebt / verändert Zahlen und Farbe einer Form (für den Startcode). */
function mutate(shape) {
  const copy = { tag: shape.tag, attrs: { ...shape.attrs } };
  const numeric = Object.keys(copy.attrs).filter(
    (name) => typeof copy.attrs[name] === "number",
  );

  // Zwei Zahlen verstellen …
  for (const name of shuffle(numeric).slice(0, 2)) {
    const delta = pick([-40, -30, -20, 20, 30, 40]);
    copy.attrs[name] = Math.max(10, copy.attrs[name] + delta);
  }
  // … und die Farbe.
  if (copy.attrs.fill && copy.attrs.fill !== "none") {
    copy.attrs.fill = pick(COLORS.filter((c) => c !== shape.attrs.fill));
  }
  return copy;
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

/**
 * Baut eine Boss-Runde.
 *
 * Runde 1–2: gleicher Code wie das Ziel, nur die Zahlen stimmen nicht
 *            → Lösung mit den Reglern.
 * Runde 3–4: Zahlen und Farben stimmen nicht → Code selbst anpassen.
 * Runde 5+:  eine Form fehlt ganz → Code selbst ergänzen.
 *
 * @param {number} round 1-basierte Nummer der Runde
 */
export function makeRound(round) {
  const usedColors = [];
  const count = round <= 2 ? 1 : round <= 4 ? 2 : 3;

  const shapes = [];
  for (let index = 0; index < count; index += 1) {
    const shape =
      Math.random() < 0.5 ? randomCircle(usedColors) : randomRect(usedColors);
    shapes.push(round >= 4 && index === 0 ? makeOutline(shape) : shape);
  }

  const mode = round <= 2 ? "sliders" : round <= 4 ? "edit" : "add";

  let startShapes;
  if (mode === "add") {
    startShapes = shapes.slice(0, -1);
  } else if (mode === "sliders") {
    // Farbe stimmt bereits, nur die Zahlen sind verstellt.
    startShapes = shapes.map((shape) => ({
      tag: shape.tag,
      attrs: { ...mutate(shape).attrs, fill: shape.attrs.fill },
    }));
  } else {
    startShapes = shapes.map(mutate);
  }

  return {
    round,
    mode,
    target: sceneToCode(shapes),
    start: sceneToCode(startShapes),
    shapes: shapes.length,
  };
}
