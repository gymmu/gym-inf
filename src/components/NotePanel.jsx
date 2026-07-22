import { useEffect, useRef, useState } from "react";
import { useNotes } from "@context/NoteContext";
import { useAppContext } from "@context/AppContext";
import { Editor as MEditor } from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./NotePanel.module.css";

function MarkdownPreview({ content }) {
  return (
    <div className={style.preview}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default function NotePanel({ isOpen, onClose }) {
  const { currentNote, hasCurrentNote, updateNote, removeNote } = useNotes();
  const { setMenuVisible } = useAppContext();
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeoutRef = useRef(null);

  useEffect(() => {
    setContent(currentNote?.content || "");
  }, [currentNote]);

  useEffect(() => {
    if (isOpen) {
      setMenuVisible(false);
    }
  }, [isOpen, setMenuVisible]);

  const handleEditorChange = (value) => {
    setContent(value);

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    setIsSaving(true);
    saveTimeoutRef.current = setTimeout(() => {
      updateNote(value).then(() => {
        setIsSaving(false);
      });
    }, 500);
  };

  const handleClose = () => {
    onClose();
    setMenuVisible(true);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleDelete = () => {
    if (window.confirm("Möchtest du die Notiz wirklich löschen?")) {
      removeNote();
      onClose();
    }
  };

  return (
    <div className={`${style.panel}${isOpen ? " " + style.open : ""}`}>
      <div className={style.header}>
        <span className={style.title}>Notizen</span>
        <div className={style.headerActions}>
          {hasCurrentNote && (
            <button
              type="button"
              className={style.actionBtn}
              onClick={togglePreview}
              title={showPreview ? "Vorschau ausblenden" : "Vorschau anzeigen"}
            >
              {showPreview ? "📝" : "👁"}
            </button>
          )}
          {hasCurrentNote && (
            <button
              type="button"
              className={`${style.actionBtn}${style.deleteBtn}`}
              onClick={handleDelete}
              title="Notiz löschen"
            >
              🗑
            </button>
          )}
          <button
            type="button"
            className={`${style.actionBtn}${style.closeBtn}`}
            onClick={handleClose}
            title="Schließen"
          >
            ✕
          </button>
        </div>
      </div>
      <div className={style.content}>
        <div
          className={`${style.editorContainer}${showPreview ? "" : " " + style.fullWidth}`}
        >
          <MEditor
            language="markdown"
            value={content}
            theme="vs-dark"
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineHeight: 1.6,
              wordWrap: "on",
              scrollBeyondLastLine: false,
              padding: { top: 16, bottom: 16 },
              automaticLayout: true,
            }}
            height="100%"
          />
          {isSaving && <div className={style.saveIndicator}>Speichert...</div>}
        </div>
        {showPreview && hasCurrentNote && (
          <div className={style.previewContainer}>
            <MarkdownPreview content={content} />
          </div>
        )}
        {!hasCurrentNote && (
          <div className={style.emptyState}>
            <p>Noch keine Notizen für diese Seite.</p>
            <p>Beginne einfach oben zu tippen!</p>
          </div>
        )}
      </div>
    </div>
  );
}
