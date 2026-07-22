import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import {
  saveNote,
  getNote,
  deleteNote,
  getAllNotes,
  createNote as storageCreateNote,
  exportNotes,
  downloadNotes,
  importNotes,
} from "@utils/notesStorage";

const NoteContext = createContext(null);

export function NoteProvider({ children }) {
  const location = useLocation();
  const [currentNote, setCurrentNote] = useState(null);
  const [hasCurrentNote, setHasCurrentNote] = useState(false);
  const [allNotes, setAllNotes] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/notes") return;

    if (prevPathRef.current !== path) {
      prevPathRef.current = path;
      loadNote(path);
    }
  }, [location.pathname]);

  useEffect(() => {
    getAllNotes().then((notes) => {
      setAllNotes(notes.sort((a, b) => b.updatedAt - a.updatedAt));
      setInitialized(true);
    });
  }, []);

  const loadNote = useCallback(async (path) => {
    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "seite";
    const slug =
      lastSegment
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-") || "notiz";
    const note = await getNote(slug);
    setCurrentNote(note);
    setHasCurrentNote(!!note);
  }, []);

  const updateNote = useCallback(
    async (slug, content) => {
      const note = await saveNote(slug, content);
      setCurrentNote(note);
      setHasCurrentNote(true);
      setAllNotes((prev) => {
        const filtered = prev.filter((n) => n.slug !== slug);
        return [...filtered, note].sort((a, b) => b.updatedAt - a.updatedAt);
      });
    },
    [],
  );

  const removeNote = useCallback(async (slug) => {
    await deleteNote(slug);
    setCurrentNote(null);
    setHasCurrentNote(false);
    setAllNotes((prev) => prev.filter((n) => n.slug !== slug));
  }, []);

  const exportAllNotes = useCallback(() => {
    exportNotes().then((data) => {
      downloadNotes(data);
    });
  }, []);

  const handleImport = useCallback(async (file) => {
    const text = await file.text();
    const data = JSON.parse(text);
    const merged = await importNotes(data);
    setAllNotes((prev) => {
      const slugSet = new Set(merged);
      return prev.filter((n) => !slugSet.has(n.slug));
    });
    return merged;
  }, []);

  const hasNote = useCallback(
    async (slug) => {
      const note = await getNote(slug);
      return !!note;
    },
    [],
  );

  const createNote = useCallback(
    async (slug, content) => {
      const note = await storageCreateNote(slug, content || "");
      setAllNotes((prev) => {
        const filtered = prev.filter((n) => n.slug !== slug);
        return [...filtered, note].sort((a, b) => b.updatedAt - a.updatedAt);
      });
      return note;
    },
    [],
  );

  const value = {
    currentNote,
    hasCurrentNote,
    allNotes,
    initialized,
    updateNote,
    removeNote,
    createNote,
    exportAllNotes,
    handleImport,
    hasNote,
  };

  return (
    <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within a NoteProvider");
  }
  return context;
}
