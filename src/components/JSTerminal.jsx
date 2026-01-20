import { useEffect, useRef, useState } from "react";
import { Editor as MEditor } from "@monaco-editor/react";
import styles from "@components/JSTerminal.module.css";

export default function JSTerminal(props) {
  const {
    filename,
    initialCode,
    children,
    height = "300px",
    terminalHeight = "250px",
  } = props;

  // Determine code source: children has priority over initialCode
  const sourceCode = children
    ? dedent(extractText(children))
    : initialCode ||
      "// Your JavaScript code here\nconsole.log('Hello World!')";

  // Create a unique storage key based on the initial filename
  const storageKey = `jsterminal_${filename}`;

  // Initialize state from localStorage or use defaults
  const getInitialState = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          files: parsed.files || {
            [filename]: { name: filename, content: sourceCode },
          },
          openFiles: parsed.openFiles || [filename],
          activeFile: parsed.activeFile || filename,
          commandHistory: parsed.commandHistory || [],
        };
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
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
  const iframeRef = useRef(null);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const terminalContentRef = useRef(null);

  // Available commands for tab completion
  const availableCommands = ["node", "clear", "ls", "touch", "rm", "reset"];

  // Get current file's code
  const code = files[activeFile]?.content || "";
  const setCode = (newCode) => {
    setFiles((prev) => ({
      ...prev,
      [activeFile]: { ...prev[activeFile], content: newCode },
    }));
  };

  // Save state to localStorage whenever files, openFiles, activeFile, or commandHistory changes
  useEffect(() => {
    try {
      const stateToSave = {
        files,
        openFiles,
        activeFile,
        commandHistory,
      };
      localStorage.setItem(storageKey, JSON.stringify(stateToSave));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [files, openFiles, activeFile, commandHistory, storageKey]);

  // Auto-scroll to bottom when terminal history updates
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  // Handle messages from iframe (console output)
  useEffect(() => {
    const handleMessage = (event) => {
      // Security: only accept messages from our iframe
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
      } catch (e) {
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
      // Simple table formatting
      if (Array.isArray(data)) {
        return JSON.stringify(data, null, 2);
      }
      return JSON.stringify(data, null, 2);
    } catch (e) {
      return String(data);
    }
  };

  const formatDir = (args) => {
    return formatArgs(args);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = commandInput.trim();

    if (!cmd) return;

    // Reset tab completion and history navigation
    setTabCompletionIndex(-1);
    setTabCompletions([]);
    setHistoryIndex(-1);

    // Add command to command history (only non-empty, non-duplicate commands)
    if (
      cmd &&
      (commandHistory.length === 0 ||
        commandHistory[commandHistory.length - 1] !== cmd)
    ) {
      setCommandHistory((prev) => [...prev, cmd]);
    }

    // Add command to terminal display history
    addToHistory({ type: "command", content: cmd });
    setCommandInput("");

    // Parse command
    const parts = cmd.split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case "node":
        executeNodeCommand(args);
        break;
      case "clear":
        setTerminalHistory([]);
        // Keep command history for arrow key navigation
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

  const handleKeyDown = (e) => {
    // Handle Tab key for completion
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent focus change
      handleTabCompletion();
      return;
    }

    // Handle Arrow Up - Previous command in history
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

    // Handle Arrow Down - Next command in history
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

    // Reset tab completion on any other key
    if (e.key !== "Tab") {
      setTabCompletionIndex(-1);
      setTabCompletions([]);
    }
  };

  const handleTabCompletion = () => {
    const input = commandInput;
    const parts = input.split(/\s+/);
    const currentPart = parts[parts.length - 1];

    // Determine what to complete
    let completions = [];

    if (parts.length === 1 && !input.endsWith(" ")) {
      // Complete command name
      completions = availableCommands.filter((cmd) =>
        cmd.startsWith(currentPart),
      );
    } else if (
      (parts[0] === "node" || parts[0] === "rm") &&
      parts.length <= 2
    ) {
      // Complete filename after 'node' or 'rm' command
      completions = Object.keys(files).filter((f) => f.startsWith(currentPart));
    }

    if (completions.length === 0) {
      // No completions available
      setTabCompletionIndex(-1);
      setTabCompletions([]);
      return;
    }

    // If this is a new tab completion cycle, initialize
    if (
      tabCompletions.length === 0 ||
      tabCompletions.join() !== completions.join()
    ) {
      setTabCompletions(completions);
      setTabCompletionIndex(0);
      applyCompletion(input, completions[0]);
    } else {
      // Cycle through completions
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
      // Reload after a short delay to show the message
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

    // Check if file already exists
    if (files[newFilename]) {
      addToHistory({
        type: "log",
        content: `File '${newFilename}' already exists`,
      });
      return;
    }

    // Create new file
    setFiles((prev) => ({
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

    // Check if file exists
    if (!files[fileToRemove]) {
      addToHistory({
        type: "error",
        content: `rm: cannot remove '${fileToRemove}': No such file`,
      });
      return;
    }

    // Don't allow removing the initial file
    if (fileToRemove === filename) {
      addToHistory({
        type: "error",
        content: `rm: cannot remove '${fileToRemove}': Initial file cannot be deleted`,
      });
      return;
    }

    // Remove file
    setFiles((prev) => {
      const newFiles = { ...prev };
      delete newFiles[fileToRemove];
      return newFiles;
    });

    // Close the file if it's open
    setOpenFiles((prev) => prev.filter((f) => f !== fileToRemove));

    // Switch to another file if this was the active file
    if (activeFile === fileToRemove) {
      const remainingFiles = Object.keys(files).filter(
        (f) => f !== fileToRemove,
      );
      setActiveFile(remainingFiles[0] || filename);
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

    // Validate filename
    if (!files[scriptName]) {
      addToHistory({
        type: "error",
        content: `Error: Cannot find module '${scriptName}'`,
      });
      return;
    }

    // Execute the code
    runCode(scriptName, scriptArgs);
  };

  const runCode = (scriptName, argv) => {
    const scriptCode = files[scriptName]?.content || "";

    // Build process.argv mock
    // Format: ['node', '/path/to/filename', ...args]
    const processArgv = ["node", `/workspace/${scriptName}`, ...argv];

    // Generate HTML with code execution
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <script>
            // Mock process.argv
            const process = {
              argv: ${JSON.stringify(processArgv)}
            };

            // Console interception
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

            // Error handling
            window.onerror = function(message, source, lineno, colno, error) {
              parent.postMessage({ 
                type: 'runtime-error', 
                error: message,
                stack: error ? error.stack : ''
              }, '*');
              return true;
            };

            // Execute user code and capture return value
            try {
              const result = (function() {
                ${scriptCode}
              })();
              
              // Send return value if it exists
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

    // Update iframe
    if (iframeRef.current) {
      iframeRef.current.srcdoc = htmlContent;
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const openFile = (fileName) => {
    setActiveFile(fileName);
    if (!openFiles.includes(fileName)) {
      setOpenFiles((prev) => [...prev, fileName]);
    }
  };

  const closeFile = (fileName, e) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter((f) => f !== fileName);
    setOpenFiles(newOpenFiles);

    if (activeFile === fileName && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
    }
  };

  return (
    <div className={`${styles.jsTerminalWrapper} full-width`}>
      <div className={styles.mainContent}>
        {/* Code Editor */}
        <div className={styles.editorSection}>
          {/* Tab Bar */}
          {openFiles.length > 1 && (
            <div className={styles.tabBar}>
              {openFiles.map((fileName) => (
                <div
                  key={fileName}
                  className={`${styles.tab} ${activeFile === fileName ? styles.activeTab : ""}`}
                  onClick={() => setActiveFile(fileName)}
                >
                  <span className={styles.tabName}>{fileName}</span>
                  {openFiles.length > 1 && (
                    <button
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
            <span className={styles.filename}>{activeFile}</span>
            <span className={styles.language}>JavaScript</span>
          </div>
          <MEditor
            key={activeFile}
            defaultLanguage="javascript"
            value={code}
            theme="vs-dark"
            onChange={setCode}
            height={height}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        {/* File Explorer */}
        {Object.keys(files).length > 1 && (
          <div className={styles.explorerSection}>
            <div className={styles.explorerHeader}>
              <span className={styles.explorerTitle}>Files</span>
            </div>
            <div className={styles.explorerContent}>
              {Object.keys(files)
                .sort()
                .map((fileName) => (
                  <div
                    key={fileName}
                    className={`${styles.explorerItem} ${activeFile === fileName ? styles.activeExplorerItem : ""}`}
                    onClick={() => openFile(fileName)}
                    title={fileName}
                  >
                    <span className={styles.fileIcon}>📄</span>
                    <span className={styles.explorerFileName}>{fileName}</span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Terminal */}
      <div
        className={styles.terminalSection}
        style={{ height: terminalHeight }}
      >
        <div className={styles.terminalHeader}>
          <span className={styles.terminalTitle}>Terminal</span>
          <span className={styles.terminalHint}>
            Use ↑/↓ for history, Tab for completion
          </span>
        </div>
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

      {/* Hidden iframe for code execution */}
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        style={{ display: "none" }}
        title="code-executor"
      />
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
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.join("");
  return String(children);
}

/**
 * Entfernt überflüssige Einrückung aus Code-Blöcken
 * - Entfernt erste/letzte leere Zeile
 * - Findet minimale Einrückung
 * - Entfernt diese von allen Zeilen
 */
function dedent(text) {
  const lines = text.split("\n");

  // Entferne erste/letzte leere Zeile (typisch bei template literals)
  if (lines[0]?.trim() === "") lines.shift();
  if (lines[lines.length - 1]?.trim() === "") lines.pop();

  if (lines.length === 0) return "";

  // Finde minimale Einrückung (ignoriere leere Zeilen)
  const minIndent = lines
    .filter((line) => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)[0].length;
      return Math.min(min, indent);
    }, Infinity);

  // Entferne minimale Einrückung von allen Zeilen
  return lines
    .map((line) => line.slice(minIndent === Infinity ? 0 : minIndent))
    .join("\n");
}
