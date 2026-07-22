import { useNotes } from "@context/NoteContext";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./QuickNoteFab.module.css";

export default function QuickNoteFab() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const { createNote, allNotes } = useNotes();
  const location = useLocation();
  const popoverRef = useRef(null);
  const contentRef = useRef("");
  const slugRef = useRef("");
  const initializedRef = useRef(false);

  // Slug nur einmal beim Öffnen berechnen
  useEffect(() => {
    if (!open) return;

    const path = location.pathname.startsWith("/")
      ? location.pathname.slice(1)
      : location.pathname;
    const segments = path.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "seite";
    const possibleSlug =
      lastSegment
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-") || "notiz";

    let slug = possibleSlug;
    let counter = 2;
    while (allNotes.some((n) => n.slug === slug)) {
      slug = `${possibleSlug}-${counter}`;
      counter++;
    }
    slugRef.current = slug;
    initializedRef.current = true;
    // biome-ignore lint/correctness/useExhaustiveDependencies: allNotes only needed once on open
  }, [open]);

  // Content immer im Ref halten
  useEffect(() => {
    contentRef.current = content;
  }, [content]);

  // Auto-Save mit Debounce - nur beim Tippen
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(async () => {
      const currentContent = contentRef.current;
      const slug = slugRef.current;

      if (!slug) {
        setError(true);
        setSaving(false);
        return;
      }

      try {
        setSaving(true);
        setError(false);
        await createNote(slug, currentContent);
        setSaving(false);
      } catch (err) {
        console.error("Failed to save note:", err);
        setError(true);
        setSaving(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [open, content]);

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
          aria-label="Neue Notiz"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
