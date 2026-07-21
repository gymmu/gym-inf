import {
  clearLastVisit,
  loadLastVisit,
  saveLastVisit,
} from "@utils/visitStorage";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const STORAGE_KEY = "gym-inf-visit-history";
const MAX_HISTORY = 50;

const VisitContext = createContext(null);

function loadHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // ignore
  }
}

export function VisitProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [history, setHistory] = useState(loadHistory);
  const [initialized, setInitialized] = useState(false);
  const restoredRef = useRef(false);
  const initialPathRef = useRef(location.pathname);

  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;

    loadLastVisit().then((path) => {
      if (path && path !== "/" && path !== initialPathRef.current) {
        setTimeout(() => {
          navigate(path, { replace: true });
        }, 0);
      }
      setInitialized(true);
    });
  }, [navigate]);

  useEffect(() => {
    if (!initialized || location.pathname === "/") return;

    const newPath = location.pathname;

    setHistory((prev) => {
      let next = prev.filter((p) => p !== newPath);
      next = [newPath, ...next];
      if (next.length > MAX_HISTORY) {
        next = next.slice(0, MAX_HISTORY);
      }
      saveHistory(next);
      return next;
    });

    saveLastVisit(newPath);
  }, [location.pathname, initialized]);

  const restoreLastVisit = useCallback(() => {
    // No-op - restoration is now handled directly in the provider
  }, []);

  const clearVisit = useCallback(() => {
    clearLastVisit();
  }, []);

  const value = {
    history,
    initialized,
    restoreLastVisit,
    clearVisit,
  };

  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
}

export function useVisitHistory() {
  const context = useContext(VisitContext);
  if (!context) {
    throw new Error("useVisitHistory must be used within a VisitProvider");
  }
  return context;
}
