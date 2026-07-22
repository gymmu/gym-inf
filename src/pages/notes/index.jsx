import { useCallback, useEffect, useRef, useState } from "react";
import { useNotes } from "@context/NoteContext";
import { Link, useNavigate } from "react-router-dom";
import { Editor as MEditor } from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./NotePage.module.css";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function NoteCard({ note, onClick, onEdit }) {
  const preview = note.content
    .replace(/[#*`_~\-\[\]]/g, "")
    .trim()
    .slice(0, 100);

  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.cardHeader}>
        <span className={style.cardSlug}>{note.slug}</span>
        <span className={style.cardDate}>{formatDate(note.updatedAt)}</span>
      </div>
      <div className={style.cardPreview}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{preview}</ReactMarkdown>
      </div>
      <button
        className={style.cardEditBtn}
        onClick={(e) => {
          e.stopPropagation();
          onEdit(note);
        }}
      >
        Bearbeiten
      </button>
    </div>
  );
}

export default function NotesPage() {
  const { allNotes, initialized, exportAllNotes, handleImport, createNote } = useNotes();
  const [search, setSearch] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [showNewNote, setShowNewNote] = useState(false);
  const [newNoteSlug, setNewNoteSlug] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const filteredNotes = allNotes.filter((note) =>
    note.slug.toLowerCase().includes(search.toLowerCase()),
  );

  const handleEdit = (note) => {
    setEditingNote(note);
    setEditContent(note.content);
  };

  const handleSaveEdit = async () => {
    if (editingNote) {
      const { saveNote } = await import("@utils/notesStorage");
      await saveNote(editingNote.slug, editContent);
      setEditingNote(null);
      setEditContent("");
      window.location.reload();
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const merged = await handleImport(file);
      if (merged) {
        window.location.reload();
      }
    }
  };

  const handleNewNote = async () => {
    if (!newNoteSlug.trim()) return;
    const slug = newNoteSlug.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-");
    await createNote(slug);
    setShowNewNote(false);
    setNewNoteSlug("");
    window.location.reload();
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Notizen</h1>
        <div className={style.headerActions}>
          <button className={style.actionBtn} onClick={() => setShowNewNote(true)}>
            Neue Notiz
          </button>
          <button className={style.actionBtn} onClick={handleImportClick}>
            Importieren
          </button>
          <button
            className={style.actionBtn}
            onClick={exportAllNotes}
            disabled={!initialized}
          >
            Exportieren
          </button>
        </div>
      </div>

      {showNewNote && (
        <div className={style.newNoteOverlay}>
          <div className={style.newNoteForm}>
            <h3>Neue Notiz erstellen</h3>
            <input
              type="text"
              className={style.slugInput}
              placeholder="Slug (z.B. meiner-notiz)"
              value={newNoteSlug}
              onChange={(e) => setNewNoteSlug(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleNewNote()}
              autoFocus
            />
            <div className={style.newNoteActions}>
              <button className={style.createBtn} onClick={handleNewNote}>
                Erstellen
              </button>
              <button
                className={style.cancelBtn}
                onClick={() => {
                  setShowNewNote(false);
                  setNewNoteSlug("");
                }}
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}

      <input
        type="text"
        className={style.searchInput}
        placeholder="Notizen suchen..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="file"
        ref={fileInputRef}
        accept=".json"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {editingNote ? (
        <div className={style.editorOverlay}>
          <div className={style.editorHeader}>
            <span className={style.editorSlug}>{editingNote.slug}</span>
            <div className={style.editorActions}>
              <button className={style.saveBtn} onClick={handleSaveEdit}>
                Speichern
              </button>
              <button
                className={style.cancelBtn}
                onClick={() => {
                  setEditingNote(null);
                  setEditContent("");
                }}
              >
                Abbrechen
              </button>
            </div>
          </div>
          <MEditor
            language="markdown"
            value={editContent}
            theme="vs-dark"
            onChange={setEditContent}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineHeight: 1.6,
              wordWrap: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
            height="100%"
          />
        </div>
      ) : (
        <div className={style.notesList}>
          {filteredNotes.length === 0 ? (
            <div className={style.emptyState}>
              <p>Noch keine Notizen.</p>
              <p>
                Besuche eine Seite und schreibe deine erste Notiz!
              </p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <NoteCard
                key={note.slug}
                note={note}
                onClick={() => navigate(`/${note.slug}`)}
                onEdit={handleEdit}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
