import { useEffect, useRef, useState } from "react";
import { Editor as MEditor } from "@monaco-editor/react";
import styles from "@components/JSTerminal.module.css";

export default function JSTerminal(props) {
  const {
    filename,
    initialCode = "// Your JavaScript code here\nconsole.log('Hello World!')",
    height = "300px",
    terminalHeight = "250px",
  } = props;

  const [code, setCode] = useState(initialCode);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [commandInput, setCommandInput] = useState("");
  const iframeRef = useRef(null);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

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

    // Add command to history
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
        onClick={handleTerminalClick}
      >
        <div className={styles.terminalHeader}>
          <span className={styles.terminalTitle}>Terminal</span>
          <span className={styles.terminalHint}>
            Type: node {filename} [args...]
          </span>
        </div>
        <div className={styles.terminalContent}>
          <div className={styles.terminalOutput}>
            {terminalHistory.map((entry, index) => (
              <TerminalEntry key={index} entry={entry} />
            ))}
            <div ref={terminalEndRef} />
          </div>
          <form onSubmit={handleCommand} className={styles.terminalInputForm}>
            <span className={styles.prompt}>$</span>
            <input
              ref={inputRef}
              type="text"
              className={styles.terminalInput}
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </form>
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
