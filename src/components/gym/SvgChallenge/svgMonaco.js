// biome-ignore-all lint/suspicious/noTemplateCurlyInString: Monaco-Snippet-Syntax

/**
 * svgMonaco — macht den Monaco-Editor fit für SVG.
 *
 * Monaco kennt von Haus aus nur "xml" und weiss nichts über SVG. Hier
 * ergänzen wir:
 *
 *   • Vorschläge für die wichtigsten SVG-Elemente (als Snippet)
 *   • Vorschläge für die Attribute des Elements, in dem man gerade schreibt
 *   • Farbvorschläge inkl. Farbfeld direkt im Editor
 *   • Erklärungen auf Deutsch beim Darüberfahren (Hover)
 */

const ATTR_DOCS = {
  cx: "Mittelpunkt **horizontal** (von links gemessen).",
  cy: "Mittelpunkt **vertikal** (von oben gemessen).",
  r: "Radius — Abstand vom Mittelpunkt bis zum Rand.",
  rx: "Radius in x-Richtung.",
  ry: "Radius in y-Richtung.",
  x: "Linke Kante der Form.",
  y: "Obere Kante der Form.",
  x1: "x-Koordinate des Startpunkts.",
  y1: "y-Koordinate des Startpunkts.",
  x2: "x-Koordinate des Endpunkts.",
  y2: "y-Koordinate des Endpunkts.",
  width: "Breite.",
  height: "Höhe.",
  fill: "Füllfarbe der Fläche. `none` = keine Füllung.",
  stroke: "Farbe des Randes. `none` = kein Rand.",
  "stroke-width": "Dicke des Randes in Pixel.",
  opacity: "Deckkraft von `0` (unsichtbar) bis `1` (voll sichtbar).",
  points: "Liste von Punkten: `x1,y1 x2,y2 …`",
  d: "Pfad-Befehle, z.B. `M 10 10 L 90 90`.",
  transform: "Verschieben, Drehen oder Skalieren, z.B. `rotate(45 50 50)`.",
  viewBox: "Sichtbarer Ausschnitt: `minX minY Breite Höhe`.",
};

const TAG_DOCS = {
  svg: "Wurzelelement — die Leinwand.",
  circle: "Kreis — braucht `cx`, `cy` und `r`.",
  ellipse: "Ellipse — braucht `cx`, `cy`, `rx` und `ry`.",
  rect: "Rechteck — braucht `x`, `y`, `width` und `height`.",
  line: "Gerade Linie von (`x1`,`y1`) nach (`x2`,`y2`).",
  polyline: "Linienzug durch mehrere `points`.",
  polygon: "Geschlossene Fläche durch mehrere `points`.",
  path: "Freier Pfad über `d`.",
  text: "Text an der Position (`x`,`y`).",
  g: "Gruppe — fasst Elemente zusammen.",
};

const TAG_ATTRS = {
  svg: ["width", "height", "viewBox"],
  circle: ["cx", "cy", "r", "fill", "stroke", "stroke-width", "opacity"],
  ellipse: [
    "cx",
    "cy",
    "rx",
    "ry",
    "fill",
    "stroke",
    "stroke-width",
    "opacity",
  ],
  rect: [
    "x",
    "y",
    "width",
    "height",
    "rx",
    "ry",
    "fill",
    "stroke",
    "stroke-width",
    "opacity",
  ],
  line: ["x1", "y1", "x2", "y2", "stroke", "stroke-width", "opacity"],
  polyline: ["points", "fill", "stroke", "stroke-width"],
  polygon: ["points", "fill", "stroke", "stroke-width"],
  path: ["d", "fill", "stroke", "stroke-width"],
  text: ["x", "y", "font-size", "fill", "text-anchor"],
  g: ["transform", "fill", "stroke"],
};

const SNIPPETS = {
  circle:
    'circle cx="${1:100}" cy="${2:100}" r="${3:50}" fill="${4:#b8bb26}" />',
  ellipse:
    'ellipse cx="${1:100}" cy="${2:100}" rx="${3:60}" ry="${4:35}" fill="${5:#83a598}" />',
  rect: 'rect x="${1:50}" y="${2:50}" width="${3:100}" height="${4:60}" fill="${5:#fabd2f}" />',
  line: 'line x1="${1:10}" y1="${2:10}" x2="${3:190}" y2="${4:190}" stroke="${5:#282828}" stroke-width="${6:4}" />',
  polygon: 'polygon points="${1:100,10 190,190 10,190}" fill="${2:#d3869b}" />',
  polyline:
    'polyline points="${1:10,10 100,80 190,10}" fill="none" stroke="${2:#282828}" stroke-width="${3:3}" />',
  path: 'path d="${1:M 10 100 Q 100 10 190 100}" fill="none" stroke="${2:#8f3f71}" stroke-width="${3:3}" />',
  text: 'text x="${1:20}" y="${2:100}" font-size="${3:24}" fill="${4:#282828}">${5:Hallo}</text>',
  g: "g>\n\t$0\n</g>",
  svg: 'svg width="${1:200}" height="${2:200}">\n\t$0\n</svg>',
};

const COLORS = [
  ["#282828", "Dunkelgrau (fast schwarz)"],
  ["#fb4934", "Rot"],
  ["#b8bb26", "Grün"],
  ["#fabd2f", "Gelb"],
  ["#83a598", "Blau"],
  ["#d3869b", "Violett"],
  ["#fe8019", "Orange"],
  ["#ffffff", "Weiss"],
  ["none", "keine Farbe"],
];

/** Name des Elements, in dem sich der Cursor gerade befindet. */
function currentTag(textBefore) {
  const open = textBefore.lastIndexOf("<");
  if (open === -1) return null;
  const chunk = textBefore.slice(open + 1);
  if (chunk.includes(">")) return null;
  const match = chunk.match(/^([a-zA-Z][\w-]*)/);
  return match ? match[1].toLowerCase() : null;
}

function toRgba(hex) {
  return {
    red: Number.parseInt(hex.slice(1, 3), 16) / 255,
    green: Number.parseInt(hex.slice(3, 5), 16) / 255,
    blue: Number.parseInt(hex.slice(5, 7), 16) / 255,
    alpha: 1,
  };
}

function toHex({ red, green, blue }) {
  const part = (value) =>
    Math.round(value * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${part(red)}${part(green)}${part(blue)}`;
}

let registered = false;

/** Registriert die SVG-Hilfen einmalig an der Monaco-Instanz. */
export function setupSvgLanguage(monaco) {
  if (!monaco || registered) return;
  registered = true;

  const { languages, Range } = monaco;

  languages.setLanguageConfiguration("xml", {
    autoCloseBefore: " \n\t>/",
    brackets: [["<", ">"]],
    autoClosingPairs: [
      { open: "<", close: ">" },
      { open: '"', close: '"' },
    ],
    surroundingPairs: [
      { open: "<", close: ">" },
      { open: '"', close: '"' },
    ],
  });

  // --- Vorschläge -------------------------------------------------------
  languages.registerCompletionItemProvider("xml", {
    triggerCharacters: ["<", " ", '"', "-"],
    provideCompletionItems(model, position) {
      const before = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });
      const line = model.getLineContent(position.lineNumber);
      const word = model.getWordUntilPosition(position);
      const range = new Range(
        position.lineNumber,
        word.startColumn,
        position.lineNumber,
        word.endColumn,
      );

      const tag = currentTag(before);
      const inValue = /=["'][^"']*$/.test(before);

      // 1. Farbwerte innerhalb von fill="…" / stroke="…"
      if (inValue) {
        const attr = before.match(/([\w-]+)=["'][^"']*$/)?.[1];
        if (attr === "fill" || attr === "stroke") {
          return {
            suggestions: COLORS.map(([value, label]) => ({
              label: `${value} — ${label}`,
              kind: languages.CompletionItemKind.Color,
              insertText: value,
              filterText: value,
              detail: label,
              range,
            })),
          };
        }
        return { suggestions: [] };
      }

      // 2. Attribute des aktuellen Elements
      if (tag && TAG_ATTRS[tag]) {
        const used = line.match(/([\w-]+)=/g)?.map((m) => m.slice(0, -1)) ?? [];
        return {
          suggestions: TAG_ATTRS[tag]
            .filter((attr) => !used.includes(attr))
            .map((attr) => ({
              label: attr,
              kind: languages.CompletionItemKind.Property,
              insertText: `${attr}="$1"`,
              insertTextRules:
                languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: { value: ATTR_DOCS[attr] ?? "" },
              range,
            })),
        };
      }

      // 3. Elemente
      return {
        suggestions: Object.entries(SNIPPETS).map(([name, snippet]) => ({
          label: `<${name}>`,
          kind: languages.CompletionItemKind.Snippet,
          insertText: before.endsWith("<") ? snippet : `<${snippet}`,
          insertTextRules:
            languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: { value: TAG_DOCS[name] ?? "" },
          range,
        })),
      };
    },
  });

  // --- Erklärungen beim Darüberfahren -----------------------------------
  languages.registerHoverProvider("xml", {
    provideHover(model, position) {
      const word = model.getWordAtPosition(position);
      if (!word) return null;

      // Attribute können Bindestriche enthalten (stroke-width).
      const line = model.getLineContent(position.lineNumber);
      const full =
        line
          .slice(0, word.endColumn - 1)
          .match(/[\w-]+$/)?.[0]
          ?.toLowerCase() ?? word.word.toLowerCase();

      const doc = ATTR_DOCS[full] ?? TAG_DOCS[full];
      if (!doc) return null;

      return {
        range: new Range(
          position.lineNumber,
          word.startColumn,
          position.lineNumber,
          word.endColumn,
        ),
        contents: [{ value: `**${full}** — ${doc}` }],
      };
    },
  });

  // --- Farbfelder direkt im Code ----------------------------------------
  languages.registerColorProvider("xml", {
    provideDocumentColors(model) {
      const colors = [];
      for (const match of model.findMatches(
        "#[0-9a-fA-F]{6}",
        true,
        true,
        false,
        null,
        false,
      )) {
        colors.push({
          range: match.range,
          color: toRgba(model.getValueInRange(match.range)),
        });
      }
      return colors;
    },
    provideColorPresentations(_model, colorInfo) {
      return [{ label: toHex(colorInfo.color) }];
    },
  });
}

export default setupSvgLanguage;
