/**
 * Binaria — die spielerische Übersichtskarte über das Lerngebiet.
 *
 * Aufbau:
 *   Welt (Land)  ->  Level  ->  Kapitel (Seiten der Webseite)
 *
 * Die Positionen (`x` / `y`) beziehen sich auf das Koordinatensystem der
 * Übersichtskarte (viewBox "0 0 1000 600").
 *
 * Die Levels einer Welt werden automatisch als Serpentine angeordnet,
 * darum brauchen sie keine Koordinaten.
 */

export const MAP_WIDTH = 1000;
export const MAP_HEIGHT = 600;

export const binariaWorlds = [
  {
    id: "byteburg",
    name: "Byteburg",
    subtitle: "Bits, Bytes und wie ein Computer denkt",
    description:
      "Hier beginnt die Reise von Biit. In den Gassen von Byteburg lernst du, " +
      "woraus die digitale Welt gebaut ist: aus Nullen und Einsen.",
    icon: "🏰",
    color: "var(--color-yellow)",
    accent: "#fabd2f",
    x: 130,
    y: 450,
    levels: [
      {
        id: "bitwald",
        name: "Bitwald",
        icon: "✨",
        chapters: [
          { title: "Willkommen in der Welt der Bits", path: "/fms/biit-story" },
        ],
      },
      {
        id: "byte-miniboss",
        name: "Bau dein Byte (Bits)",
        icon: "👾",
        type: "miniboss",
        chapters: [
          {
            title: "Zwischenboss: Bau dein Byte — Bits und Bytes",
            path: "/fms/byte-quiz-bits",
            completeOnVisit: true,
          },
        ],
      },
      {
        id: "von-neumann",
        name: "Von-Neumann-Hallen",
        icon: "🧠",
        chapters: [
          { title: "Wie ein Computer denkt", path: "/fms/von-neumann-story" },
        ],
      },
      {
        id: "byte-boss",
        name: "Bau dein Byte",
        icon: "👑",
        type: "boss",
        chapters: [
          {
            title: "Quiz: Bau dein Byte",
            path: "/fms/byte-quiz",
            completeOnVisit: true,
          },
        ],
      },
    ],
  },
  {
    id: "vektoria",
    name: "Vektoria",
    subtitle: "Das Land der Vektorgrafiken (SVG)",
    description:
      "Jenseits der Pixelküste liegt Vektoria. Hier werden Bilder nicht aus " +
      "Punkten, sondern aus Formen, Linien und Pfaden gebaut — mit SVG.",
    icon: "🗺️",
    color: "var(--color-aqua)",
    accent: "#8ec07c",
    x: 320,
    y: 300,
    levels: [
      {
        id: "svg-tor",
        name: "Tor von Vektoria",
        icon: "🚪",
        chapters: [{ title: "Willkommen in Vektoria", path: "/fms/svg-story" }],
      },
      {
        id: "kreisbucht",
        name: "Kreisbucht",
        icon: "⭕",
        chapters: [{ title: "Kreise", path: "/fms/svg-kreis" }],
      },
      {
        id: "rechteckstadt",
        name: "Rechteckstadt",
        icon: "⬛",
        chapters: [{ title: "Rechtecke", path: "/fms/svg-rechteck" }],
      },
      {
        id: "formen-boss",
        name: "Der Formenwächter",
        icon: "🛡️",
        type: "boss",
        chapters: [
          {
            title: "Zwischenboss: Formen treffen",
            path: "/fms/svg-formen-boss",
            completeOnVisit: true,
          },
        ],
      },
      {
        id: "linienschlucht",
        name: "Linienschlucht",
        icon: "📏",
        chapters: [{ title: "Linien", path: "/fms/svg-linie" }],
      },
      {
        id: "zickzacktal",
        name: "Zickzacktal",
        icon: "📈",
        chapters: [
          { title: "Linienzüge (polyline)", path: "/fms/svg-polyline" },
        ],
      },
      {
        id: "vieleckfeld",
        name: "Vieleckfeld",
        icon: "🔺",
        chapters: [{ title: "Vielecke (polygon)", path: "/fms/svg-polygon" }],
      },
      {
        id: "linien-boss",
        name: "Der Linienmeister",
        icon: "🛡️",
        type: "boss",
        chapters: [
          {
            title: "Zwischenboss: Linien und Vielecke",
            path: "/fms/svg-linien-boss",
            completeOnVisit: true,
          },
        ],
      },
      // --- Geplant: Inhalte entstehen Schritt für Schritt ------------------
      // Die Kapitel unten sind erst als Übersicht angelegt. Noch nicht
      // geschriebene Seiten zeigen vorerst die Platzhalterseite an.
      {
        id: "pfadgebirge",
        name: "Pfadgebirge",
        icon: "🧭",
        chapters: [
          {
            title: "Pfade 1 — gerade Wege (M, L, Z)",
            path: "/fms/svg-pfade-1",
          },
        ],
      },
      {
        id: "kurventaeler",
        name: "Kurventäler",
        icon: "🌊",
        chapters: [
          { title: "Pfade 2 — Kurven (C, Q, A)", path: "/fms/svg-pfade-2" },
        ],
      },
      {
        id: "pfad-boss",
        name: "Der Pfadwächter",
        icon: "👹",
        type: "boss",
        chapters: [
          {
            title: "Zwischenboss: Pfade zeichnen",
            path: "/fms/svg-pfade-boss",
          },
        ],
      },
      {
        id: "animationswerkstatt",
        name: "Animationswerkstatt",
        icon: "⏱️",
        chapters: [
          { title: "Animationen 1 — Bewegung", path: "/fms/svg-animation-1" },
        ],
      },
      {
        id: "animationsgipfel",
        name: "Animationsgipfel",
        icon: "🎬",
        chapters: [
          {
            title: "Animationen 2 — Timing und Pfade",
            path: "/fms/svg-animation-2",
          },
        ],
      },
      {
        id: "animations-boss",
        name: "Der Zeitgeist",
        icon: "🌀",
        type: "boss",
        chapters: [
          {
            title: "Zwischenboss: Animationen",
            path: "/fms/svg-animation-boss",
          },
        ],
      },
      {
        id: "uebungsarena",
        name: "Übungsarena",
        icon: "🎯",
        type: "exercise",
        chapters: [{ title: "Gemischte Aufgaben", path: "/fms/svg-mix" }],
      },
      {
        id: "vektoria-endboss",
        name: "Der Vektorfürst",
        icon: "👑",
        type: "boss",
        chapters: [{ title: "Endboss von Vektoria", path: "/fms/svg-endboss" }],
      },
    ],
  },
  {
    id: "netzhafen",
    name: "Netzhafen",
    subtitle: "Internet, Netzwerke und Sicherheit",
    description:
      "Im Netzhafen laufen alle Datenleitungen zusammen. Hier lernst du, wie " +
      "Daten um die Welt reisen — und wie man sie schützt.",
    icon: "🌐",
    color: "var(--color-blue)",
    accent: "#83a598",
    x: 505,
    y: 460,
    levels: [
      {
        id: "internet",
        name: "Datenmeer",
        icon: "🌊",
        chapters: [{ title: "Internet", path: "/fms/internet" }],
      },
      {
        id: "karte",
        name: "Kartenhaus",
        icon: "🧭",
        chapters: [
          { title: "Karte des Internets", path: "/fms/internet-karte" },
        ],
      },
      {
        id: "internet-quiz",
        name: "Prüfstation",
        icon: "❓",
        type: "quiz",
        chapters: [{ title: "Quiz: Internet", path: "/fms/internet-quiz" }],
      },
      {
        id: "tunnel",
        name: "VPN-Tunnel",
        icon: "🚇",
        chapters: [
          { title: "VPN", path: "/fms/vpn" },
          { title: "Quiz: VPN", path: "/fms/vpn-quiz" },
        ],
      },
      {
        id: "geheimkammer",
        name: "Geheimkammer",
        icon: "🔐",
        chapters: [{ title: "Verschlüsselung", path: "/fms/verschluesselung" }],
      },
      {
        id: "schluesselbruecke",
        name: "Schlüsselbrücke",
        icon: "🗝️",
        chapters: [
          { title: "Schlüsselaustausch", path: "/fms/schluesselaustausch" },
        ],
      },
      {
        id: "passwortfestung",
        name: "Passwortfestung",
        icon: "🛡️",
        type: "boss",
        chapters: [{ title: "Passwörter", path: "/fms/passwoerter" }],
      },
    ],
  },
  {
    id: "algoria",
    name: "Algoria",
    subtitle: "Algorithmen Schritt für Schritt",
    description:
      "In Algoria zählt nur eines: der richtige Plan. Schritt für Schritt " +
      "lernst du, wie Probleme systematisch gelöst werden.",
    icon: "🧩",
    color: "var(--color-purple)",
    accent: "#d3869b",
    x: 690,
    y: 280,
    levels: [
      {
        id: "algo-start",
        name: "Tor von Algoria",
        icon: "📜",
        chapters: [
          { title: "Was sind Algorithmen?", path: "/fms/algorithmen" },
        ],
      },
      {
        id: "schleifen",
        name: "Schleifenwirbel",
        icon: "🔁",
        chapters: [{ title: "Schleifen", path: "/fms/algorithmen-loops" }],
      },
      {
        id: "alltag",
        name: "Alltagsmarkt",
        icon: "🧺",
        chapters: [
          { title: "Algorithmen im Alltag", path: "/fms/algorithmen-alltag" },
        ],
      },
      {
        id: "mathematik",
        name: "Zahlenturm",
        icon: "➗",
        chapters: [
          { title: "Mathematik", path: "/fms/algorithmen-mathematik" },
        ],
      },
      {
        id: "strings",
        name: "Wortschmiede",
        icon: "🔤",
        chapters: [{ title: "Strings", path: "/fms/algorithmen-strings" }],
      },
      {
        id: "suchen",
        name: "Suchlabyrinth",
        icon: "🔍",
        chapters: [
          { title: "Suchalgorithmen", path: "/fms/algorithmen-suchen" },
        ],
      },
      {
        id: "sortieren",
        name: "Sortierhalle",
        icon: "📊",
        chapters: [
          { title: "Sortieralgorithmen", path: "/fms/algorithmen-sortieren" },
        ],
      },
      {
        id: "algo-boss",
        name: "Arena der Algorithmen",
        icon: "👑",
        type: "boss",
        chapters: [
          { title: "Aufgaben", path: "/fms/algorithmen-aufgaben" },
          { title: "Glossar", path: "/fms/algorithmen-glossar" },
        ],
      },
    ],
  },
  {
    id: "tabellental",
    name: "Tabellental",
    subtitle: "Tabellenkalkulation (2. Klasse)",
    description:
      "Im Tabellental wird gerechnet, sortiert und ausgewertet — alles in " +
      "Zeilen und Spalten.",
    icon: "📊",
    color: "var(--color-green)",
    accent: "#b8bb26",
    x: 820,
    y: 460,
    levels: [
      {
        id: "excel-start",
        name: "Zellenfeld",
        icon: "🧮",
        chapters: [{ title: "Einstieg in Excel", path: "/fms/excel" }],
      },
      {
        id: "excel-spielplan",
        name: "Spielplan-Turnier",
        icon: "🤝",
        type: "boss",
        chapters: [
          { title: "Zusammenarbeit in Excel", path: "/fms/excel-spielplan" },
        ],
      },
    ],
  },
  {
    id: "webfeld",
    name: "Webfeld",
    subtitle: "Webdesign mit HTML, CSS und JavaScript (2. Klasse)",
    description:
      "Ganz im Norden von Binaria entstehen Webseiten: Struktur, Gestaltung " +
      "und Interaktion.",
    icon: "🕸️",
    color: "var(--color-orange)",
    accent: "#fe8019",
    x: 880,
    y: 140,
    levels: [
      {
        id: "html",
        name: "Strukturhügel",
        icon: "🧱",
        chapters: [{ title: "Einstieg in HTML", path: "/fms/html" }],
      },
      {
        id: "webdesign",
        name: "Designgarten",
        icon: "🎨",
        chapters: [{ title: "Webdesign mit HTML", path: "/fms/webdesign" }],
      },
      {
        id: "javascript",
        name: "Interaktionsgipfel",
        icon: "⚡",
        type: "boss",
        chapters: [{ title: "Interaktive Webseiten", path: "/fms/javascript" }],
      },
    ],
  },
];

export function getWorld(worldId) {
  return binariaWorlds.find((world) => world.id === worldId) || null;
}

export function getAllChapters(world) {
  return world.levels.flatMap((level) => level.chapters);
}
