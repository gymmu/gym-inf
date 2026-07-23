import { createContext, useCallback, useContext, useState } from "react";

const STORAGE_KEY = "gym-inf-progress";

const ProgressContext = createContext(null);

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  const updateRating = useCallback((chapterSlug, level) => {
    setProgress((prev) => {
      const next = { ...prev, [chapterSlug]: level };
      saveProgress(next);
      return next;
    });
  }, []);

  const removeRating = useCallback((chapterSlug) => {
    setProgress((prev) => {
      const next = { ...prev };
      delete next[chapterSlug];
      saveProgress(next);
      return next;
    });
  }, []);

  const getRating = useCallback(
    (chapterSlug) => {
      return progress[chapterSlug] || null;
    },
    [progress],
  );

  const value = {
    progress,
    loading: false,
    updateRating,
    removeRating,
    getRating,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
