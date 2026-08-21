import styles from "@components/JSTerminal.module.css";
import { Editor as MEditor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

/**
 * Force the JSTerminal to relayout when it becomes visible again.
 * This fixes the issue with Reveal.js which hides non-active slides
 * via display:none, causing Monaco to lose its layout.
 */
function useVisibleLayout() {
  const editorRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && editorRef.current?.layout) {
            // Small delay ensures the container has its real dimensions
            setTimeout(() => {
              editorRef.current.layout();
            }, 0);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, []);

  return { editorRef, containerRef };
}

const GLOBAL_EXAMPLES_KEY = "jsterminal_global_examples";
const USER_FILES_KEY = "jsterminal_user_files";

/**
 * JSTerminalLayout — reusable base component containing all JSTerminal logic.
 *
 * @param {Object} props
 * @param {string} props.filename - Initial filename
 * @param {string} [props.initialCode] - Fallback code when no children
 * @param {ReactNode} [props.defaultCode] - Code to use as default (priority over initialCode)
 * @param {string|number} props.monacoHeight - Height passed to Monaco editor
 * @param {string} [props.wrapperHeight] - Total wrapper height (e.g. "600px" or "100vh")
 * @param {string} [props.wrapperClass] - CSS class for the outer wrapper
 * @param {boolean} [props.fileBrowserDefault] - Whether file browser starts open
 * @param {(files: Record<string, {name: string, content: string}>) => void} [props.onFilesChange] - Callback when files change
 * @param {string} [props.activeFile] - Controlled active file name
 * @param {(file: string) => void} [onActiveFileChange] - Controlled active file setter
 */
export default function JSTerminalLayout({
  filename,
  initialCode,
  defaultCode,
  monacoHeight,
  wrapperHeight = "600px",
  wrapperClass = "",
  isFullscreen = false,
  fileBrowserDefault = true,
  onFilesChange,
  activeFile: controlledActiveFile,
  onActiveFileChange: controlledActiveFileSetter,
}) {
  // Determine code source: children has priority over initialCode
  const sourceCode = defaultCode
    ? dedent(extractText(defaultCode))
    : initialCode ||
      "// Your JavaScript code here\nconsole.log('Hello World!')";

  // Create a unique storage key based on the initial filename
  const storageKey = `jsterminal_${filename}`;

  // File browser panel state (VSCode-style sidebar on right)
  const [fileBrowserOpen, setFileBrowserOpen] = useState(fileBrowserDefault);

  // Initialize state from localStorage or use defaults
  const getInitialState = () => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return {
        files: { [filename]: { name: filename, content: sourceCode } },
        openFiles: [filename],
        activeFile: filename,
        commandHistory: [],
      };
    }

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check if the initial file exists in saved state
        const hasInitialFile =
          parsed.files &&
          Object.keys(parsed.files).length > 0 &&
          parsed.files[filename];
        return {
          files: hasInitialFile
            ? parsed.files
            : { [filename]: { name: filename, content: sourceCode } },
          openFiles: parsed.openFiles || [filename],
          activeFile: parsed.activeFile || filename,
          commandHistory: parsed.commandHistory || [],
        };
      }
    } catch {
      // Silently fail during SSR
    }
    return {
      files: { [filename]: { name: filename, content: sourceCode } },
      openFiles: [filename],
      activeFile: filename,
      commandHistory: [],
    };
  };

  const initialState = getInitialState();

  // File system state - stores all files
  const [files, setFiles] = useState(initialState.files);

  // Track which files are open in tabs
  const [openFiles, setOpenFiles] = useState(initialState.openFiles);

  // Track the currently active file
  const [activeFile, setActiveFile] = useState(initialState.activeFile);

  const [terminalHistory, setTerminalHistory] = useState([]);
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState(
    initialState.commandHistory,
  );
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabCompletionIndex, setTabCompletionIndex] = useState(-1);
  const [tabCompletions, setTabCompletions] = useState([]);
  const [globalExamples, setGlobalExamples] = useState(() => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return [];
    }
    try {
      const saved = localStorage.getItem(GLOBAL_EXAMPLES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [selectedExample, setSelectedExample] = useState(null);
  const [selectedExampleFile, setSelectedExampleFile] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  // Track user-created files (files not in globalExamples)
  const [userFiles, setUserFiles] = useState(() => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return {};
    }
    try {
      const saved = localStorage.getItem(USER_FILES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Create a new empty file
  const createNewFile = () => {
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const counter = Object.keys(userFiles).length + 1;
    const newFilename = `datei_${timestamp}_${counter}.js`;

    setFiles((prev) => ({
      ...prev,
      [newFilename]: {
        name: newFilename,
        content: "// Deine JavaScript-Datei\nconsole.log('Hello World!')",
      },
    }));

    setUserFiles((prev) => ({
      ...prev,
      [newFilename]: {
        name: newFilename,
        content: "// Deine JavaScript-Datei\nconsole.log('Hello World!')",
      },
    }));

    // Open the new file
    if (controlledActiveFileSetter) {
      controlledActiveFileSetter(newFilename);
    } else {
      setActiveFile(newFilename);
    }
    if (!openFiles.includes(newFilename)) {
      setOpenFiles((prev) => [...prev, newFilename]);
    }

    addToHistory({ type: "log", content: `📄 Neue Datei '${newFilename}' erstellt` });
  };

  // Help text for the terminal
  const helpText = `
📖 Terminal-Hilfe

Verfügbare Befehle:
  node <datei.js>           — Datei ausführen
  node <datei.js> <arg>...  — Datei mit Kommandozeilenargumenten
  ls                        — Alle Dateien auflisten
  touch <datei.js>          — Neue Datei erstellen
  rm <datei.js>             — Datei löschen
  clear                     — Terminal leeren
  reset                     — Speicher zurücksetzen

💡 Kommandozeilenargumente:
   process.argv[0] → 'node'
   process.argv[1] → Dateipfad
   process.argv[2] → Erstes Argument
   process.argv[3] → Zweites Argument

   Beispiel: node script.js hallo welt
   → process.argv = ['node', 'script.js', 'hallo', 'welt']

💡 Tipp: Klicke "▶ Ausführen" im Editor,
   um die aktuelle Datei auszuführen.

⌨️ Tab-Vervollständigung: Nutze die Tab-Taste
   für Befehle und Dateinamen.
   Pfeiltasten ↑↓ für Befehlshistorie.`.trim();

  const iframeRef = useRef(null);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const terminalContentRef = useRef(null);

  // Hook to relayout Monaco when the slide becomes visible
  const { editorRef, containerRef } = useVisibleLayout();

  // Available commands for tab completion
  const availableCommands = ["node", "clear", "ls", "touch", "rm", "reset"];

  // Get current file's code
  const code = files[controlledActiveFile || activeFile]?.content || "";
  const setCode = (newCode) => {
    setFiles((prev) => ({
      ...prev,
      [controlledActiveFile || activeFile]: {
        ...(controlledActiveFile || activeFile) in prev
          ? prev[controlledActiveFile || activeFile]
          : {},
        content: newCode,
      },
    }));
  };

  // Notify parent of files change
  useEffect(() => {
    if (onFilesChange) {
      onFilesChange(files);
    }
  }, [files, onFilesChange]);

  // Save state to localStorage whenever files, openFiles, activeFile, commandHistory, or userFiles changes
  useEffect(() => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return;
    }

    try {
      const stateToSave = {
        files,
        openFiles,
        activeFile: controlledActiveFile || activeFile,
        commandHistory,
      };
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));
      // Save user-created files separately
      localStorage.setItem(USER_FILES_KEY, JSON.stringify(userFiles));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [files, openFiles, controlledActiveFile, activeFile, commandHistory, storageKey, userFiles]);

  // Register this terminal's code in global examples
  useEffect(() => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return;
    }

    const example = {
      id: filename,
      name: filename,
      code: sourceCode,
    };

    try {
      const saved = localStorage.getItem(GLOBAL_EXAMPLES_KEY);
      const examples = saved ? JSON.parse(saved) : [];

      const existingIndex = examples.findIndex((e) => e.id === filename);

      const updatedExamples = existingIndex >= 0
        ? examples.map((e, i) => (i === existingIndex ? example : e))
        : [...examples, example];

      localStorage.setItem(GLOBAL_EXAMPLES_KEY, JSON.stringify(updatedExamples));
      setGlobalExamples(updatedExamples);
    } catch (error) {
      console.error("Error saving global example:", error);
    }
  }, [filename, sourceCode]);

  // Auto-scroll to bottom when terminal history updates
  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTo({
        top: terminalContentRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle messages from iframe (console output)
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.source !== iframeRef.current?.contentWindow) return;

      const { type, args, error, stack, returnValue } = event.data;

      switch (type) {
        case "log":
        case "info":
          addToHistory({ type: "log", content: formatArgs(args) });
          break;
        case "warn":
          addToHistory({ type: "warn", content: formatArgs(args) });
          break;
        case "error":
          addToHistory({ type: "error", content: formatArgs(args) });
          break;
        case "table":
          addToHistory({ type: "table", content: formatTable(args) });
          break;
        case "dir":
          addToHistory({ type: "dir", content: formatDir(args) });
          break;
        case "group":
          addToHistory({ type: "group", content: formatArgs(args) });
          break;
        case "groupEnd":
          addToHistory({ type: "groupEnd" });
          break;
        case "runtime-error":
          addToHistory({
            type: "error",
            content: error,
            stack: stack,
          });
          break;
        case "return-value":
          if (returnValue !== undefined) {
            addToHistory({ type: "return", content: formatValue(returnValue) });
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const addToHistory = (entry) => {
    setTerminalHistory((prev) => [...prev, entry]);
  };

  const formatArgs = (args) => {
    if (!args || args.length === 0) return "";
    return args.map((arg) => formatValue(arg)).join(" ");
  };

  const formatValue = (value) => {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (typeof value === "object") {
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return String(value);
      }
    }
    return String(value);
  };

  const formatTable = (args) => {
    if (!args || args.length === 0) return "";
    const data = args[0];
    if (typeof data !== "object") return formatValue(data);

    try {
      if (Array.isArray(data)) {
        return JSON.stringify(data, null, 2);
      }
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  };

  const formatDir = (args) => {
    return formatArgs(args);
  };

  // Load selected example code into editor
  const loadExample = (example) => {
    setFiles((prev) => ({
      ...prev,
      [controlledActiveFile || activeFile]: {
        name: controlledActiveFile || activeFile,
        content: example.code,
      },
    }));
    setSelectedExample(example);
    setSelectedExampleFile(controlledActiveFile || activeFile);
  };

  // Reset to default code
  const resetToDefault = () => {
    const fileToReset = selectedExampleFile || (controlledActiveFile || activeFile);
    const defaultCode = selectedExample
      ? selectedExample.code
      : sourceCode;
    setFiles((prev) => ({
      ...prev,
      [fileToReset]: {
        name: fileToReset,
        content: defaultCode,
      },
    }));
    setSelectedExample(null);
    setSelectedExampleFile(null);
  };

  // Reset a specific example file
  const resetExampleFile = (fileName, defaultCode) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: {
        name: fileName,
        content: defaultCode,
      },
    }));
    // Open the file in editor
    if (controlledActiveFileSetter) {
      controlledActiveFileSetter(fileName);
    } else {
      setActiveFile(fileName);
    }
    if (!openFiles.includes(fileName)) {
      setOpenFiles((prev) => [...prev, fileName]);
    }
    setSelectedExample(null);
    setSelectedExampleFile(null);
  };

  // Delete a user file
  const deleteUserFile = (fileName) => {
    setFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[fileName];
      return newFiles;
    });
    setOpenFiles((prev) => prev.filter((f) => f !== fileName));
    setUserFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[fileName];
      return newFiles;
    });

    const currentActive = controlledActiveFile || activeFile;
    if (currentActive === fileName) {
      const remainingFiles = Object.keys(files).filter((f) => f !== fileName);
      if (controlledActiveFileSetter) {
        controlledActiveFileSetter(remainingFiles[0] || filename);
      } else {
        setActiveFile(remainingFiles[0] || filename);
      }
    }
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = commandInput.trim();

    if (!cmd) return;

    setTabCompletionIndex(-1);
    setTabCompletions([]);
    setHistoryIndex(-1);

    if (
      cmd &&
      (commandHistory.length === 0 ||
        commandHistory[commandHistory.length - 1] !== cmd)
    ) {
      setCommandHistory((prev) => [...prev, cmd]);
    }

    addToHistory({ type: "command", content: cmd });
    setCommandInput("");

    const parts = cmd.split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case "node":
        executeNodeCommand(args);
        break;
      case "clear":
        setTerminalHistory([]);
        break;
      case "ls":
        executeLsCommand();
        break;
      case "touch":
        executeTouchCommand(args);
        break;
      case "rm":
        executeRmCommand(args);
        break;
      case "reset":
        executeResetCommand();
        break;
      default:
        addToHistory({
          type: "error",
          content: `${command}: command not found`,
        });
        break;
    }
  };

  // Run button: executes "node <filename>" automatically
  const handleRun = () => {
    const runCmd = `node ${controlledActiveFile || activeFile}`;
    addToHistory({ type: "command", content: runCmd });

    if (
      commandHistory.length === 0 ||
      commandHistory[commandHistory.length - 1] !== runCmd
    ) {
      setCommandHistory((prev) => [...prev, runCmd]);
    }

    executeNodeCommand([controlledActiveFile || activeFile]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setCommandInput(commandHistory[newIndex]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length === 0 || historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCommandInput("");
      } else {
        setHistoryIndex(newIndex);
        setCommandInput(commandHistory[newIndex]);
      }
      return;
    }

    if (e.key !== "Tab") {
      setTabCompletionIndex(-1);
      setTabCompletions([]);
    }
  };

  const handleTabCompletion = () => {
    const input = commandInput;
    const parts = input.split(/\s+/);
    const currentPart = parts[parts.length - 1];

    let completions = [];

    if (parts.length === 1 && !input.endsWith(" ")) {
      completions = availableCommands.filter((cmd) =>
        cmd.startsWith(currentPart),
      );
    } else if (
      (parts[0] === "node" || parts[0] === "rm") &&
      parts.length <= 2
    ) {
      completions = Object.keys(files).filter((f) => f.startsWith(currentPart));
    }

    if (completions.length === 0) {
      setTabCompletionIndex(-1);
      setTabCompletions([]);
      return;
    }

    if (
      tabCompletions.length === 0 ||
      tabCompletions.join() !== completions.join()
    ) {
      setTabCompletions(completions);
      setTabCompletionIndex(0);
      applyCompletion(input, completions[0]);
    } else {
      const nextIndex = (tabCompletionIndex + 1) % completions.length;
      setTabCompletionIndex(nextIndex);
      applyCompletion(input, completions[nextIndex]);
    }
  };

  const applyCompletion = (input, completion) => {
    const parts = input.split(/\s+/);
    parts[parts.length - 1] = completion;
    setCommandInput(parts.join(" "));
  };

  const executeLsCommand = () => {
    const fileList = Object.keys(files).sort().join("\n");
    addToHistory({ type: "log", content: fileList });
  };

  const executeResetCommand = () => {
    try {
      localStorage.removeItem(storageKey);
      addToHistory({
        type: "log",
        content: "Storage cleared. Reloading...",
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      addToHistory({
        type: "error",
        content: `Failed to reset: ${error.message}`,
      });
    }
  };

  const executeTouchCommand = (args) => {
    if (args.length === 0) {
      addToHistory({
        type: "error",
        content: "Usage: touch <filename>",
      });
      return;
    }

    const newFilename = args[0];

    if (files[newFilename]) {
      addToHistory({
        type: "log",
        content: `File '${newFilename}' already exists`,
      });
      return;
    }

    setFiles((prev) => ({
      ...prev,
      [newFilename]: {
        name: newFilename,
        content: "// Your JavaScript code here\nconsole.log('Hello World!')",
      },
    }));

    // Track as user-created file
    setUserFiles((prev) => ({
      ...prev,
      [newFilename]: {
        name: newFilename,
        content: "// Your JavaScript code here\nconsole.log('Hello World!')",
      },
    }));

    addToHistory({
      type: "log",
      content: `Created file '${newFilename}'`,
    });
  };

  const executeRmCommand = (args) => {
    if (args.length === 0) {
      addToHistory({
        type: "error",
        content: "Usage: rm <filename>",
      });
      return;
    }

    const fileToRemove = args[0];

    if (!files[fileToRemove]) {
      addToHistory({
        type: "error",
        content: `rm: cannot remove '${fileToRemove}': No such file`,
      });
      return;
    }

    if (fileToRemove === filename) {
      addToHistory({
        type: "error",
        content: `rm: cannot remove '${fileToRemove}': Initial file cannot be deleted`,
      });
      return;
    }

    setFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[fileToRemove];
      return newFiles;
    });

    // Remove from user files tracking
    setUserFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[fileToRemove];
      return newFiles;
    });

    setOpenFiles((prev) => prev.filter((f) => f !== fileToRemove));

    const currentActive = controlledActiveFile || activeFile;
    if (currentActive === fileToRemove) {
      const remainingFiles = Object.keys(files).filter(
        (f) => f !== fileToRemove,
      );
      if (controlledActiveFileSetter) {
        controlledActiveFileSetter(remainingFiles[0] || filename);
      } else {
        setActiveFile(remainingFiles[0] || filename);
      }
    }

    addToHistory({
      type: "log",
      content: `Removed file '${fileToRemove}'`,
    });
  };

  const executeNodeCommand = (args) => {
    if (args.length === 0) {
      addToHistory({
        type: "error",
        content: "Usage: node <filename> [args...]",
      });
      return;
    }

    const scriptName = args[0];
    const scriptArgs = args.slice(1);

    if (!files[scriptName]) {
      addToHistory({
        type: "error",
        content: `Error: Cannot find module '${scriptName}'`,
      });
      return;
    }

    runCode(scriptName, scriptArgs);
  };

  const runCode = (scriptName, argv) => {
    const scriptCode = files[scriptName]?.content || "";

    const processArgv = ["node", `/workspace/${scriptName}`, ...argv];

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <script>
            const process = {
              argv: ${JSON.stringify(processArgv)}
            };

            const originalConsole = {
              log: console.log,
              info: console.info,
              warn: console.warn,
              error: console.error,
              table: console.table,
              dir: console.dir,
              group: console.group,
              groupEnd: console.groupEnd,
            };

            window.console = {
              log: (...args) => {
                originalConsole.log(...args);
                parent.postMessage({ type: 'log', args: args }, '*');
              },
              info: (...args) => {
                originalConsole.info(...args);
                parent.postMessage({ type: 'info', args: args }, '*');
              },
              warn: (...args) => {
                originalConsole.warn(...args);
                parent.postMessage({ type: 'warn', args: args }, '*');
              },
              error: (...args) => {
                originalConsole.error(...args);
                parent.postMessage({ type: 'error', args: args }, '*');
              },
              table: (...args) => {
                originalConsole.table(...args);
                parent.postMessage({ type: 'table', args: args }, '*');
              },
              dir: (...args) => {
                originalConsole.dir(...args);
                parent.postMessage({ type: 'dir', args: args }, '*');
              },
              group: (...args) => {
                originalConsole.group(...args);
                parent.postMessage({ type: 'group', args: args }, '*');
              },
              groupEnd: () => {
                originalConsole.groupEnd();
                parent.postMessage({ type: 'groupEnd' }, '*');
              },
            };

            window.onerror = function(message, source, lineno, colno, error) {
              parent.postMessage({
                type: 'runtime-error',
                error: message,
                stack: error ? error.stack : ''
              }, '*');
              return true;
            };

            try {
              const result = (function() {
                ${scriptCode}
              })();

              if (result !== undefined) {
                parent.postMessage({ type: 'return-value', returnValue: result }, '*');
              }
            } catch (error) {
              parent.postMessage({
                type: 'runtime-error',
                error: error.message,
                stack: error.stack
              }, '*');
            }
          </script>
        </body>
      </html>
    `;

    if (iframeRef.current) {
      iframeRef.current.srcdoc = htmlContent;
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const openFile = (fileName) => {
    if (controlledActiveFileSetter) {
      controlledActiveFileSetter(fileName);
    } else {
      setActiveFile(fileName);
    }
    if (!openFiles.includes(fileName)) {
      setOpenFiles((prev) => [...prev, fileName]);
    }
  };

  const closeFile = (fileName, e) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter((f) => f !== fileName);
    setOpenFiles(newOpenFiles);

    const currentActive = controlledActiveFile || activeFile;
    if (currentActive === fileName && newOpenFiles.length > 0) {
      if (controlledActiveFileSetter) {
        controlledActiveFileSetter(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
      }
    }
  };

  const currentActiveFile = controlledActiveFile || activeFile;
  const setCurrentActiveFile = controlledActiveFileSetter || setActiveFile;

  return (
    <div
      className={`${styles.jsTerminalWrapper} ${wrapperClass || ""} ${isFullscreen ? "js-terminal-fullscreen" : ""}`}
      style={wrapperHeight ? { height: wrapperHeight } : undefined}
    >
      {/* Main content area - Editor + Terminal (left side) */}
      <div className={styles.mainContent}>
        {/* Code Editor Section */}
        <div className={styles.editorSection}>
          {/* Tab Bar */}
          {openFiles.length > 1 && (
            <div className={styles.tabBar}>
              {openFiles.map((fileName) => (
                <div
                  key={fileName}
                  className={`${styles.tab} ${currentActiveFile === fileName ? styles.activeTab : ""}`}
                  onClick={() => setCurrentActiveFile(fileName)}
                >
                  <span className={styles.tabName}>{fileName}</span>
                  {openFiles.length > 1 && (
                    <button
                      type="button"
                      className={styles.closeTab}
                      onClick={(e) => closeFile(fileName, e)}
                      title="Close"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}



          <div className={styles.editorHeader}>
            <span className={styles.filename}>{currentActiveFile}</span>
            <span className={styles.language}>JavaScript</span>
            <div className={styles.editorActions}>
              {selectedExample && (
                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={resetToDefault}
                  title="Zurück zum Standard-Code"
                >
                  ↺ Reset
                </button>
              )}
              <button
                type="button"
                className={styles.runButton}
                onClick={handleRun}
                title="Programm ausführen (node <filename>)"
              >
                ▶ Ausführen
              </button>
            </div>
          </div>
          <div className={styles.editorContainer} ref={containerRef}>
            <MEditor
              key={currentActiveFile}
              defaultLanguage="javascript"
              value={code}
              theme="vs-dark"
              onChange={setCode}
              onMount={(editor) => {
                editorRef.current = editor;
              }}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>

        {/* Terminal Section - at bottom of editor area */}
        <div className={styles.terminalSection}>
          <div className={styles.terminalHeader}>
            <span className={styles.terminalTitle}>Terminal</span>
            <div className={styles.terminalActions}>
              <button
                type="button"
                className={styles.terminalActionBtn}
                onClick={() => setShowHelp(!showHelp)}
                title="Terminal-Hilfe anzeigen"
              >
                ?
              </button>
              <button
                type="button"
                className={styles.terminalActionBtn}
                onClick={() => setTerminalHistory([])}
                title="Terminal leeren"
              >
                clear
              </button>
            </div>
          </div>
          {showHelp && (
            <div className={styles.helpOverlay} onClick={() => setShowHelp(false)}>
              <div className={styles.helpPanel} onClick={(e) => e.stopPropagation()}>
                <div className={styles.helpContent}>{helpText}</div>
                <button
                  type="button"
                  className={styles.helpCloseBtn}
                  onClick={() => setShowHelp(false)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
          <div
            className={styles.terminalContent}
            ref={terminalContentRef}
            onClick={handleTerminalClick}
          >
            {terminalHistory.map((entry, index) => (
              <TerminalEntry key={index} entry={entry} />
            ))}

            {/* Inline command input (like VSCode) */}
            <form onSubmit={handleCommand} className={styles.terminalInputLine}>
              <span className={styles.prompt}>$</span>
              <input
                ref={inputRef}
                type="text"
                className={styles.terminalInput}
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>

      {/* Hidden iframe for code execution */}
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        style={{ display: "none" }}
        title="code-executor"
      />

      {/* Activity Panel - File Browser on the right side (only in fullscreen) */}
      {isFullscreen && fileBrowserOpen && (
        <div className={styles.activityPanel}>
          <div className={styles.activityPanelHeader}>
            <span className={styles.activityPanelTitle}>Explorer</span>
            <button
              type="button"
              className={styles.activityPanelClose}
              onClick={() => setFileBrowserOpen(false)}
              title="Schließen"
            >
              ✕
            </button>
          </div>
          <div className={styles.activityPanelContent}>
            {/* New File Button */}
            <button
              type="button"
              className={styles.newFileButton}
              onClick={createNewFile}
              title="Neue Datei erstellen"
            >
              + Neue Datei
            </button>

            {/* Section: Beispiele */}
            {globalExamples.length > 0 && (
              <>
                <div className={styles.explorerSectionTitle}>📚 Beispiele</div>
                {globalExamples.map((example) => {
                    return (
                      <div
                        key={example.id}
                        className={styles.explorerFileGroup}
                      >
                        <div
                          className={`${styles.explorerItem} ${currentActiveFile === example.id ? styles.activeExplorerItem : ""}`}
                          onClick={() => loadExample(example, example.id)}
                          title={example.name}
                        >
                          <span className={styles.fileIcon}>📄</span>
                          <span className={styles.explorerFileName}>{example.name}</span>
                        </div>
                        <button
                          type="button"
                          className={styles.resetFileButton}
                          onClick={(e) => {
                            e.stopPropagation();
                            resetExampleFile(example.id, example.code);
                          }}
                          title="Zurück zum Standard-Code"
                        >
                          ↺
                        </button>
                      </div>
                    );
                  })}
              </>
            )}

            {/* Section: Eigene Dateien */}
            {Object.keys(userFiles).length > 0 && (
              <>
                <div className={styles.explorerSectionTitle}>✏️ Eigene Dateien</div>
                {Object.keys(userFiles)
                  .sort()
                  .map((fileName) => (
                    <div
                      key={fileName}
                      className={styles.explorerFileGroup}
                    >
                      <div
                        className={`${styles.explorerItem} ${currentActiveFile === fileName ? styles.activeExplorerItem : ""}`}
                        onClick={() => openFile(fileName)}
                        title={fileName}
                      >
                        <span className={styles.fileIcon}>📄</span>
                        <span className={styles.explorerFileName}>{fileName}</span>
                      </div>
                      <button
                        type="button"
                        className={styles.deleteFileButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteUserFile(fileName);
                        }}
                        title="Datei löschen"
                      >
                        🗑
                      </button>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* Activity Bar - VSCode-style vertical bar on the right (only in fullscreen) */}
      {isFullscreen && (
        <div className={styles.activityBar}>
          <button
            type="button"
            className={`${styles.activityButton} ${fileBrowserOpen ? styles.activityButtonActive : ""}`}
            onClick={() => setFileBrowserOpen(!fileBrowserOpen)}
            title={fileBrowserOpen ? "File-Browser ausblenden" : "File-Browser einblenden"}
          >
            {fileBrowserOpen ? "📁" : "📂"}
          </button>
        </div>
      )}
    </div>
  );
}

function TerminalEntry({ entry }) {
  const { type, content, stack } = entry;

  switch (type) {
    case "command":
      return (
        <div className={styles.terminalLine}>
          <span className={styles.prompt}>$</span>
          <span className={styles.commandText}>{content}</span>
        </div>
      );
    case "log":
      return (
        <div className={styles.terminalLine}>
          <span className={styles.logText}>{content}</span>
        </div>
      );
    case "warn":
      return (
        <div className={styles.terminalLine}>
          <span className={styles.warnText}>{content}</span>
        </div>
      );
    case "error":
      return (
        <div className={styles.terminalLine}>
          <span className={styles.errorText}>{content}</span>
          {stack && <pre className={styles.stackTrace}>{stack}</pre>}
        </div>
      );
    case "return":
      return (
        <div className={styles.terminalLine}>
          <span className={styles.returnText}>← {content}</span>
        </div>
      );
    case "table":
    case "dir":
      return (
        <div className={styles.terminalLine}>
          <pre className={styles.structuredOutput}>{content}</pre>
        </div>
      );
    case "group":
      return (
        <div className={styles.terminalLine}>
          <span className={styles.groupText}>▼ {content}</span>
        </div>
      );
    case "groupEnd":
      return null;
    default:
      return null;
  }
}

/**
 * Extrahiert Text aus children (kann String oder React Element sein)
 */
function extractText(children) {
  if (children == null) return "";
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  // Handle React elements - extract props.children
  if (typeof children === "object" && children !== null && children.props) {
    return extractText(children.props.children);
  }
  return "";
}

/**
 * Entfernt überflüssige Einrückung aus Code-Blöcken
 */
function dedent(text) {
  const lines = text.split("\n");

  if (lines[0]?.trim() === "") lines.shift();
  if (lines[lines.length - 1]?.trim() === "") lines.pop();

  if (lines.length === 0) return "";

  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)[0].length;
      return Math.min(min, indent);
    }, Infinity);

  return lines
    .map((line) => line.slice(minIndent === Infinity ? 0 : minIndent))
    .join("\n");
}
