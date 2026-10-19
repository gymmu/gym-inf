import { useProgress } from "@context/ProgressContext";
import { useVisitHistory } from "@context/VisitContext";
import { useCallback, useMemo } from "react";
import { binariaWorlds } from "@/data/binaria";

/** Macht aus "/fms/svg" den Slug "fms/svg" (so werden Bewertungen gespeichert). */
function toSlug(path) {
  return path.startsWith("/") ? path.slice(1) : path;
}

/**
 * Liefert den Fortschritt für Binaria.
 *
 * Kapitel-Zustände:
 *   "new"      — noch nie geöffnet
 *   "visited"  — bereits besucht, aber nicht bewertet
 *   "learning" — bewertet mit "nicht" / "teilweise verstanden"
 *   "done"     — bewertet mit "gut verstanden"
 */
export function useBinariaProgress() {
  const { getRating } = useProgress();
  const { history } = useVisitHistory();

  const visited = useMemo(() => new Set(history || []), [history]);

  const getChapterState = useCallback(
    (chapter) => {
      const rating = getRating(toSlug(chapter.path));
      if (rating === 3) return "done";
      if (rating) return "learning";
      if (visited.has(chapter.path)) {
        // Quizze haben keine Kapitelbewertung: Besuch gilt als erledigt.
        return chapter.completeOnVisit ? "done" : "visited";
      }
      return "new";
    },
    [getRating, visited],
  );

  const getLevelState = useCallback(
    (level) => {
      const states = level.chapters.map(getChapterState);
      const done = states.filter((s) => s === "done").length;
      const touched = states.filter((s) => s !== "new").length;
      return {
        done,
        touched,
        total: states.length,
        percent: Math.round((done / states.length) * 100),
        status:
          done === states.length ? "done" : touched > 0 ? "started" : "new",
      };
    },
    [getChapterState],
  );

  const getWorldState = useCallback(
    (world) => {
      const levelStates = world.levels.map(getLevelState);
      const chapters = levelStates.reduce((sum, l) => sum + l.total, 0);
      const done = levelStates.reduce((sum, l) => sum + l.done, 0);
      const touched = levelStates.reduce((sum, l) => sum + l.touched, 0);
      const levelsDone = levelStates.filter((l) => l.status === "done").length;
      return {
        chapters,
        done,
        touched,
        levelsDone,
        levels: world.levels.length,
        percent: chapters === 0 ? 0 : Math.round((done / chapters) * 100),
        status: done === chapters ? "done" : touched > 0 ? "started" : "new",
      };
    },
    [getLevelState],
  );

  /** Welt, in der Biit gerade steht: die erste, die noch nicht fertig ist. */
  const currentWorldId = useMemo(() => {
    const started = binariaWorlds.find(
      (w) => getWorldState(w).status === "started",
    );
    if (started) return started.id;
    const open = binariaWorlds.find((w) => getWorldState(w).status !== "done");
    return open ? open.id : binariaWorlds[binariaWorlds.length - 1].id;
  }, [getWorldState]);

  /** Level, in dem Biit innerhalb einer Welt steht. */
  const getCurrentLevelId = useCallback(
    (world) => {
      const open = world.levels.find((l) => getLevelState(l).status !== "done");
      return open ? open.id : world.levels[world.levels.length - 1].id;
    },
    [getLevelState],
  );

  return {
    getChapterState,
    getLevelState,
    getWorldState,
    getCurrentLevelId,
    currentWorldId,
  };
}

export const CHAPTER_STATE_LABEL = {
  new: "Noch nicht besucht",
  visited: "Besucht",
  learning: "In Arbeit",
  done: "Gut verstanden",
};
