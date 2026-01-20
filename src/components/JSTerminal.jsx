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

  const [code, setCode] = useState(sourceCode);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabCompletionIndex, setTabCompletionIndex] = useState(-1);
  const [tabCompletions, setTabCompletions] = useState([]);
  const iframeRef = useRef(null);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const terminalContentRef = useRef(null);

  // Available commands for tab completion
  const availableCommands = ["node", "clear", "ls"];

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
        addToHistory({ type: "log", content: filename });
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
    } else if (parts[0] === "node" && parts.length <= 2) {
      // Complete filename after 'node' command
      if (filename.startsWith(currentPart)) {
        completions = [filename];
      }
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
    if (scriptName !== filename) {
      addToHistory({
        type: "error",
        content: `Error: Cannot find module '${scriptName}'`,
      });
      return;
    }

    // Execute the code
    runCode(scriptArgs);
  };

  const runCode = (argv) => {
    // Build process.argv mock
    // Format: ['node', '/path/to/filename', ...args]
    const processArgv = ["node", `/workspace/${filename}`, ...argv];

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
                ${code}
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

  return (
    <div className={styles.jsTerminalWrapper}>
      {/* Code Editor */}
      <div className={styles.editorSection}>
        <div className={styles.editorHeader}>
          <span className={styles.filename}>{filename}</span>
          <span className={styles.language}>JavaScript</span>
        </div>
        <MEditor
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
