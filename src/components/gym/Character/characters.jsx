import Character from "./Character";

// Gruvbox-Palette
export const PALETTE = {
  red: "#fb4934",
  orange: "#fabd2f",
  green: "#b8bb26",
  yellow: "#d79921",
  blue: "#458588",
  lightBlue: "#83a598",
  purple: "#b16286",
  lightPurple: "#d3869b",
  aqua: "#689d6a",
  lightAqua: "#8ec07c",
  dark: "#282828",
};

/**
 * Presets für alle Charaktere. Jeder Charakter besteht aus einem Text
 * mit aufgesetzten Augen; Farben (mit oder ohne Farbverlauf) und Geometrie
 * sind pro Charakter konfigurierbar.
 */
export const CHARACTER_PRESETS = {
  biit: {
    text: "01",
    label: "Biit — ein binärer Charakter",
    geometry: { fontSize: 64, charSpacing: 30, paddingX: 75 },
    gradient: [
      { offset: "0%", color: PALETTE.dark },
      { offset: "35%", color: PALETTE.red },
      { offset: "50%", color: PALETTE.orange },
      { offset: "65%", color: PALETTE.green },
      { offset: "100%", color: PALETTE.dark },
    ],
  },
  ascii: {
    text: "ASCII",
    label: "Professor ASCII",
    geometry: {
      fontSize: 48,
      charSpacing: 30,
      eyeSpacing: 34,
      paddingX: 40,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 70,
    },
    gradient: [
      { offset: "0%", color: PALETTE.lightBlue },
      { offset: "100%", color: PALETTE.blue },
    ],
  },
  dec: {
    text: "DEC",
    label: "Dr. Dezimal",
    geometry: {
      fontSize: 56,
      charSpacing: 34,
      eyeSpacing: 32,
      paddingX: 50,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 74,
    },
    // ohne Farbverlauf
    fill: PALETTE.purple,
  },
  hex: {
    text: "HEX",
    label: "Dr. Hex",
    geometry: {
      fontSize: 56,
      charSpacing: 34,
      eyeSpacing: 32,
      paddingX: 50,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 74,
    },
    gradient: [
      { offset: "0%", color: PALETTE.lightAqua },
      { offset: "100%", color: PALETTE.aqua },
    ],
  },
  rgb: {
    text: "RGB",
    label: "Professor RGB",
    geometry: {
      fontSize: 56,
      charSpacing: 34,
      eyeSpacing: 32,
      paddingX: 50,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 74,
    },
    // Farbschema verschiebt sich laufend (Farbton, Stops und Richtung)
    animatedGradient: true,
    gradient: [
      { offset: "0%", color: PALETTE.red },
      { offset: "25%", color: PALETTE.orange },
      { offset: "50%", color: PALETTE.green },
      { offset: "75%", color: PALETTE.aqua },
      { offset: "100%", color: PALETTE.blue },
    ],
  },
  alpha: {
    text: "ALPHA",
    label: "Dr. Alpha",
    geometry: {
      fontSize: 48,
      charSpacing: 30,
      eyeSpacing: 34,
      paddingX: 40,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 70,
    },
    gradient: [
      { offset: "0%", color: PALETTE.dark },
      { offset: "100%", color: PALETTE.lightPurple },
    ],
  },
  png: {
    text: "PNG",
    label: "Dr. PNG",
    geometry: {
      fontSize: 56,
      charSpacing: 34,
      eyeSpacing: 32,
      paddingX: 50,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 74,
    },
    fill: PALETTE.lightBlue,
  },
  jpeg: {
    text: "JPEG",
    label: "Dr. JPEG",
    geometry: {
      fontSize: 48,
      charSpacing: 30,
      eyeSpacing: 32,
      paddingX: 44,
      eyeRadiusX: 13,
      eyeRadiusY: 13,
      pupilRadius: 6.5,
      rectHeight: 70,
    },
    fill: PALETTE.orange,
  },
};

/** Erzeugt eine Charakter-Komponente aus einem Preset. */
export function createCharacter(presetName) {
  const preset = CHARACTER_PRESETS[presetName];

  function PresetCharacter({ geometry, ...props }) {
    return (
      <Character
        {...preset}
        {...props}
        geometry={{ ...preset.geometry, ...(geometry || {}) }}
      />
    );
  }

  PresetCharacter.displayName = `Character(${presetName})`;
  return PresetCharacter;
}

export const Ascii = createCharacter("ascii");
export const Dec = createCharacter("dec");
export const Hex = createCharacter("hex");
export const Rgb = createCharacter("rgb");
export const Alpha = createCharacter("alpha");
export const Png = createCharacter("png");
export const Jpeg = createCharacter("jpeg");
