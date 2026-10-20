/**
 * Freischalt-Logik für Binaria.
 *
 * Gespeichert wird im localStorage unter `binaria-levels-v1`:
 *
 *   { "passed": ["byteburg:bitwald", "byteburg:byte-miniboss", ...] }
 *
 * Regeln:
 *   - Das erste Level einer Welt ist offen, sobald die Welt offen ist.
 *   - Jedes weitere Level öffnet sich, wenn das Level davor bestanden wurde.
 *   - Die erste Welt ist offen; jede weitere Welt öffnet sich, wenn alle
 *     Levels der Welt davor bestanden wurden.
 *   - Bestanden wird ein Level über sein Level-Quiz (4–6 Fragen).
 */

import { useCallback, useSyncExternalStore } from "react";
import { binariaWorlds } from "@/data/binaria";

const STORAGE_KEY = "binaria-levels-v1";

/**
 * Levels, die von Anfang an offen sind (unabhängig vom gespeicherten
 * Fortschritt): die ganze erste Welt ist geprüft und freigegeben, in Vektoria
 * ist das erste Level spielbar.
 *
 *   "<worldId>": "*"            -> alle Levels der Welt
 *   "<worldId>": ["<levelId>"]  -> nur diese Levels
 */
export const DEFAULT_UNLOCKED = {
  byteburg: "*",
  vektoria: ["svg-tor"],
};

/** Ist das Level ohne Quiz-Fortschritt bereits offen? */
function unlockedByDefault(worldId, levelId) {
  const entry = DEFAULT_UNLOCKED[worldId];
  if (!entry) return false;
  return entry === "*" || entry.includes(levelId);
}

/** Schlüssel eines Levels: "<worldId>:<levelId>". */
export function levelKey(worldId, levelId) {
  return `${worldId}:${levelId}`;
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : null;
    return Array.isArray(data?.passed) ? data.passed : [];
  } catch {
    return [];
  }
}

function persist(passed) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ passed }));
  } catch {
    // localStorage nicht verfügbar — Fortschritt bleibt nur in dieser Sitzung.
  }
}

// --- Mini-Store (damit alle Karten sofort aktualisiert werden) -------------

let passedLevels = load();
const listeners = new Set();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return passedLevels;
}

function setPassed(next) {
  passedLevels = next;
  persist(next);
  emit();
}

// Fortschritt in anderen Tabs übernehmen
if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      passedLevels = load();
      emit();
    }
  });
}

// --- Hilfsfunktionen auf den Daten ----------------------------------------

function worldIndex(worldId) {
  return binariaWorlds.findIndex((w) => w.id === worldId);
}

function isPassed(passed, worldId, levelId) {
  return passed.includes(levelKey(worldId, levelId));
}

function worldUnlocked(passed, worldId) {
  const index = worldIndex(worldId);
  if (index <= 0) return true;
  if (DEFAULT_UNLOCKED[worldId]) return true;
  const previous = binariaWorlds[index - 1];
  return previous.levels.every((l) => isPassed(passed, previous.id, l.id));
}

function levelUnlocked(passed, worldId, levelId) {
  const world = binariaWorlds.find((w) => w.id === worldId);
  if (!world) return false;
  const index = world.levels.findIndex((l) => l.id === levelId);
  if (index < 0) return false;
  if (unlockedByDefault(worldId, levelId)) return true;
  if (!worldUnlocked(passed, worldId)) return false;
  if (index === 0) return true;
  return isPassed(passed, worldId, world.levels[index - 1].id);
}

/** Das nächste Level nach `levelId` — in derselben oder der nächsten Welt. */
function nextLevelOf(worldId, levelId) {
  const wIndex = worldIndex(worldId);
  const world = binariaWorlds[wIndex];
  if (!world) return null;
  const index = world.levels.findIndex((l) => l.id === levelId);
  if (index < 0) return null;
  if (index + 1 < world.levels.length) {
    return { world, level: world.levels[index + 1] };
  }
  const nextWorld = binariaWorlds[wIndex + 1];
  if (!nextWorld) return null;
  return { world: nextWorld, level: nextWorld.levels[0] };
}

// --- Hook ------------------------------------------------------------------

export function useBinariaUnlock() {
  const passed = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const isLevelPassed = useCallback(
    (worldId, levelId) => isPassed(passed, worldId, levelId),
    [passed],
  );

  const isLevelUnlocked = useCallback(
    (worldId, levelId) => levelUnlocked(passed, worldId, levelId),
    [passed],
  );

  const isWorldUnlocked = useCallback(
    (worldId) => worldUnlocked(passed, worldId),
    [passed],
  );

  /** Markiert ein Level als bestanden und schaltet damit das nächste frei. */
  const markLevelPassed = useCallback((worldId, levelId) => {
    const key = levelKey(worldId, levelId);
    if (passedLevels.includes(key)) return;
    setPassed([...passedLevels, key]);
  }, []);

  /** Nimmt eine Freischaltung zurück (z. B. zum Üben / Testen). */
  const resetLevel = useCallback((worldId, levelId) => {
    const key = levelKey(worldId, levelId);
    setPassed(passedLevels.filter((k) => k !== key));
  }, []);

  /** Setzt den gesamten Freischalt-Fortschritt zurück. */
  const resetAllLevels = useCallback(() => setPassed([]), []);

  /** Schaltet alles frei (Lehrpersonen-Modus / Debug). */
  const unlockAllLevels = useCallback(() => {
    setPassed(
      binariaWorlds.flatMap((w) => w.levels.map((l) => levelKey(w.id, l.id))),
    );
  }, []);

  /** Das letzte freigeschaltete, noch nicht bestandene Level einer Welt. */
  const getOpenLevelId = useCallback(
    (world) => {
      const open = world.levels.find(
        (l) =>
          levelUnlocked(passed, world.id, l.id) &&
          !isPassed(passed, world.id, l.id),
      );
      return open ? open.id : world.levels[world.levels.length - 1].id;
    },
    [passed],
  );

  const getNextLevel = useCallback(
    (worldId, levelId) => nextLevelOf(worldId, levelId),
    [],
  );

  return {
    passedLevels: passed,
    isLevelPassed,
    isLevelUnlocked,
    isWorldUnlocked,
    markLevelPassed,
    resetLevel,
    resetAllLevels,
    unlockAllLevels,
    getOpenLevelId,
    getNextLevel,
  };
}
