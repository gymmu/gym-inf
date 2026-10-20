import { Editor } from "@monaco-editor/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { setupSvgLanguage } from "@/components/gym/SvgChallenge/svgMonaco";
import style from "./SvgStudio.module.css";

/**
 * SvgStudio — kleine Werkstatt zum freien Üben mit SVG.
 *
 * Aufbau (wie beim JS-Terminal, aber für Grafiken):
 *
 *   links   — Liste der eigenen Dateien (neu, umbenennen, kopieren, löschen)
 *   Mitte   — der Code der aktiven Datei (Monaco mit SVG-Hilfen)
 *   rechts  — die fertige Grafik
 *
 * Alle Dateien liegen im `localStorage` des Browsers, es wird nichts an
 * einen Server geschickt. Mit "Herunterladen" entsteht eine echte
 * `.svg`-Datei.
 *
 * @param {string} [storageKey] eigener Speicherplatz (pro Seite / Aufgabe)
 * @param {Record<string, string>} [initialFiles] Startdateien (Name → Code)
 * @param {string|number} [height] Höhe des Arbeitsbereichs
 */

const BLANK = `<svg width="200" height="200">
  <circle
    cx="100"
    cy="100"
    r="60"
    fill="#b8bb26"
  />
</svg>`;

export default function SvgStudio({
  storageKey = "svg_studio",
  initialFiles = { "bild.svg": BLANK },
  height = 460,
  className = "",
}) {
  const key = `svgstudio_${storageKey}`;

  const defaults = useMemo(
    () => ({
      files: { ...initialFiles },
      active: Object.keys(initialFiles)[0] ?? "bild.svg",
    }),
    [initialFiles],
  );

  const [files, setFiles] = useState(defaults.files);
  const [active, setActive] = useState(defaults.active);
  const [loaded, setLoaded] = useState(false);

  // --- Laden / Speichern (nur im Browser) -------------------------------
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) ?? "null");
      if (saved?.files && Object.keys(saved.files).length > 0) {
        setFiles(saved.files);
        setActive(
          saved.active in saved.files
            ? saved.active
            : Object.keys(saved.files)[0],
        );
      }
    } catch {
      // Kaputter Eintrag im Speicher — wir starten einfach neu.
    }
    setLoaded(true);
  }, [key]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(key, JSON.stringify({ files, active }));
    } catch {
      // Speicher voll oder gesperrt — nicht schlimm, nur kein Speichern.
    }
  }, [files, active, key, loaded]);

  const names = Object.keys(files);
  const code = files[active] ?? "";

  const setCode = useCallback(
    (value) => setFiles((prev) => ({ ...prev, [active]: value ?? "" })),
    [active],
  );

  // --- Dateiverwaltung ---------------------------------------------------
  function uniqueName(wish) {
    let name = wish.endsWith(".svg") ? wish : `${wish}.svg`;
    let counter = 2;
    while (name in files) {
      name = `${wish.replace(/\.svg$/, "")}-${counter}.svg`;
      counter += 1;
    }
    return name;
  }

  function newFile() {
    const wish = window.prompt("Name der neuen Datei:", "bild.svg");
    if (!wish) return;
    const name = uniqueName(wish.trim());
    setFiles((prev) => ({ ...prev, [name]: BLANK }));
    setActive(name);
  }

  function duplicateFile() {
    const name = uniqueName(active.replace(/\.svg$/, "-kopie"));
    setFiles((prev) => ({ ...prev, [name]: prev[active] }));
    setActive(name);
  }

  function renameFile() {
    const wish = window.prompt("Neuer Name:", active);
    if (!wish || wish.trim() === active) return;
    const name = uniqueName(wish.trim());
    setFiles((prev) => {
      const next = {};
      for (const [current, content] of Object.entries(prev)) {
        next[current === active ? name : current] = content;
      }
      return next;
    });
    setActive(name);
  }

  function deleteFile() {
    if (names.length === 1) {
      window.alert("Die letzte Datei kann nicht gelöscht werden.");
      return;
    }
    if (!window.confirm(`„${active}“ wirklich löschen?`)) return;
    const next = { ...files };
    delete next[active];
    setFiles(next);
    setActive(Object.keys(next)[0]);
  }

  function downloadFile() {
    const blob = new Blob([code], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = active;
    link.click();
    URL.revokeObjectURL(url);
  }

  // --- Vorschau ----------------------------------------------------------
  const error = useXmlError(code);

  return (
    <section
      className={`${style.studio} ${className}`}
      style={{ "--studio-height": `${height}px` }}
    >
      <header className={style.toolbar}>
        <strong className={style.brand}>SVG-Werkstatt</strong>
        <span className={style.spacer} />
        <button type="button" className={style.button} onClick={newFile}>
          + Neue Datei
        </button>
        <button type="button" className={style.button} onClick={duplicateFile}>
          Kopieren
        </button>
        <button type="button" className={style.button} onClick={renameFile}>
          Umbenennen
        </button>
        <button type="button" className={style.button} onClick={deleteFile}>
          Löschen
        </button>
        <button type="button" className={style.button} onClick={downloadFile}>
          Herunterladen
        </button>
      </header>

      <div className={style.body}>
        {/* --- Dateien --- */}
        <nav className={style.files} aria-label="Dateien">
          <p className={style.panelTitle}>Dateien</p>
          <ul className={style.fileList}>
            {names.map((name) => (
              <li key={name}>
                <button
                  type="button"
                  className={`${style.file} ${name === active ? style.fileActive : ""}`}
                  onClick={() => setActive(name)}
                >
                  <span aria-hidden="true">🖼</span> {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Code --- */}
        <div className={style.editorPanel}>
          <p className={style.panelTitle}>{active}</p>
          <div className={style.editor}>
            <Editor
              language="xml"
              theme="vs-dark"
              path={active}
              value={code}
              height="100%"
              beforeMount={setupSvgLanguage}
              onChange={setCode}
              options={{
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                fontSize: 14,
                tabSize: 2,
                wordWrap: "on",
                colorDecorators: true,
                quickSuggestions: { other: true, strings: true },
              }}
            />
          </div>
        </div>

        {/* --- Grafik --- */}
        <div className={style.previewPanel}>
          <p className={style.panelTitle}>Grafik</p>
          <div className={style.preview}>
            <div
              className={style.stage}
              // Der Code stammt aus dem Editor der Lernenden (bleibt lokal).
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Lernumgebung
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
          {error ? (
            <p className={style.error}>⚠ {error}</p>
          ) : (
            <p className={style.hint}>
              Tipp: Tippe <code>&lt;</code> für Vorschläge.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/** Prüft den Code auf XML-Fehler und meldet sie verständlich. */
function useXmlError(code) {
  const timer = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (typeof DOMParser === "undefined") return;
      const doc = new DOMParser().parseFromString(code, "image/svg+xml");
      const failure = doc.querySelector("parsererror");
      setError(
        failure
          ? 'Der Code ist noch nicht gültig. Fehlt ein " oder ein /> am Ende?'
          : null,
      );
    }, 300);
    return () => clearTimeout(timer.current);
  }, [code]);

  return error;
}
