import { useNotes } from "@context/NoteContext";
import { getNote } from "@utils/notesStorage";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./QuickNoteFab.module.css";

export default function QuickNoteFab() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const { createNote, updateNote, removeNote, allNotes } = useNotes();
  const location = useLocation();
  const popoverRef = useRef(null);
  const contentRef = useRef("");
  const pageSlugRef = useRef("");
  const [hasPageNote, setHasPageNote] = useState(false);

  // Page slug berechnen und prüfen ob Notiz existiert
  useEffect(() => {
    const path = location.pathname;
    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "seite";
    const slug =
      lastSegment
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-") || "notiz";

    pageSlugRef.current = slug;
    setHasPageNote(allNotes.some((n) => n.slug === slug));
  }, [location.pathname, allNotes]);

  // Slug beim Öffnen setzen
  useEffect(() => {
    if (!open) return;
    pageSlugRef.current =
      location.pathname
        .split("/")
        .filter(Boolean)
        [location.pathname.split("/").filter(Boolean).length - 1]?.trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-") || "notiz";
  }, [open, location.pathname]);

  // Bestehende Notiz laden wenn vorhanden
  useEffect(() => {
    if (!open) return;
    const slug =
      location.pathname
        .split("/")
        .filter(Boolean)
        [location.pathname.split("/").filter(Boolean).length - 1]?.trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-") || "notiz";
    pageSlugRef.current = slug;
    getNote(slug).then((note) => {
      if (note?.content) {
        setContent(note.content);
      } else {
        setContent("");
      }
    });
  }, [open, location.pathname]);

  // Content immer im Ref halten
  useEffect(() => {
    contentRef.current = content;
  }, [content]);

  // Auto-Save mit Debounce - nur beim Tippen
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(async () => {
      const currentContent = contentRef.current;
      const slug = pageSlugRef.current;

      if (!slug) {
        setError(true);
        setSaving(false);
        return;
      }

      try {
        setSaving(true);
        setError(false);
        const exists = allNotes.some((n) => n.slug === slug);
        if (exists) {
          await updateNote(slug, currentContent);
        } else {
          await createNote(slug, currentContent);
        }
        setSaving(false);
      } catch (err) {
        console.error("Failed to save note:", err);
        setError(true);
        setSaving(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [open, allNotes, createNote, updateNote]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setOpen(false);
        setContent("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <button type="button" className={style.fab} onClick={() => setOpen(true)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label={hasPageNote ? "Notiz bearbeiten" : "Neue Notiz"}
        >
          {hasPageNote ? (
            <>
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </>
          ) : (
            <>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className={style.popover} ref={popoverRef}>
          <div className={style.popoverContent}>
            <textarea
              className={style.contentInput}
              placeholder="Notiz schreiben..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
            />
            <div className={style.popoverActions}>
              {saving && <span className={style.savingText}>Speichert...</span>}
              {error && (
                <span className={style.savingText} style={{ color: "red" }}>
                  Fehler beim Speichern
                </span>
              )}
              <button
                type="button"
                className={style.cancelBtn}
                onClick={() => {
                  setOpen(false);
                  setContent("");
                }}
              >
                Abbrechen
              </button>
              {allNotes.some((n) => n.slug === pageSlugRef.current) && (
                <button
                  type="button"
                  className={style.deleteBtn}
                  onClick={async () => {
                    const slug = pageSlugRef.current;
                    if (slug && window.confirm("Notiz wirklich löschen?")) {
                      await removeNote(slug);
                      setOpen(false);
                      setContent("");
                    }
                  }}
                >
                  Löschen
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
