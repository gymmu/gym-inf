import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeBlockWithHintsAndSolution.module.css";

export default function CodeBlockWithHintsAndSolution({
  example,
  hint,
  solution,
  language = "javascript",
  taskId, // Eindeutige ID für jede Aufgabe
}) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copiedExample, setCopiedExample] = useState(false);
  const [copiedHint, setCopiedHint] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30); // 30 Sekunden
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimeRemaining, setLockTimeRemaining] = useState(0);

  const intervalRef = useRef(null);
  const lockIntervalRef = useRef(null);

  const SOLUTION_DISPLAY_TIME = 15; // 15 Sekunden
  const SOLUTION_LOCK_TIME = 300; // 5 Minuten = 300 Sekunden

  // Prüfe beim Laden ob die Lösung gesperrt ist
  useEffect(() => {
    if (!taskId) return;
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return;
    }

    const lockKey = `solution_lock_${taskId}`;
    const lockUntil = localStorage.getItem(lockKey);

    if (lockUntil) {
      const now = Date.now();
      const lockTime = parseInt(lockUntil, 10);

      if (now < lockTime) {
        setIsLocked(true);
        setLockTimeRemaining(Math.ceil((lockTime - now) / 1000));
      } else {
        localStorage.removeItem(lockKey);
      }
    }
  }, [taskId]);

  // Update Lock Countdown
  useEffect(() => {
    if (isLocked && lockTimeRemaining > 0) {
      lockIntervalRef.current = setInterval(() => {
        setLockTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsLocked(false);
            if (
              taskId &&
              typeof window !== "undefined" &&
              typeof localStorage !== "undefined"
            ) {
              localStorage.removeItem(`solution_lock_${taskId}`);
            }
            if (lockIntervalRef.current) {
              clearInterval(lockIntervalRef.current);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (lockIntervalRef.current) {
          clearInterval(lockIntervalRef.current);
        }
      };
    }
  }, [isLocked, lockTimeRemaining, taskId]);

  // Timer für Lösung
  useEffect(() => {
    if (showSolution && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Zeit abgelaufen - Lösung schliessen und sperren
            setShowSolution(false);
            setIsLocked(true);

            // Speichere Sperrzeit im localStorage
            if (
              taskId &&
              typeof window !== "undefined" &&
              typeof localStorage !== "undefined"
            ) {
              const lockUntil = Date.now() + SOLUTION_LOCK_TIME * 1000;
              localStorage.setItem(
                `solution_lock_${taskId}`,
                lockUntil.toString(),
              );
            }

            setLockTimeRemaining(SOLUTION_LOCK_TIME);

            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return SOLUTION_DISPLAY_TIME;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [showSolution, timeRemaining, taskId]);

  const exampleCode = dedent(extractText(example));
  const hintCode = dedent(extractText(hint));
  const solutionCode = dedent(extractText(solution));

  const handleCopyExample = async () => {
    await navigator.clipboard.writeText(exampleCode);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  const handleCopyHint = async () => {
    await navigator.clipboard.writeText(hintCode);
    setCopiedHint(true);
    setTimeout(() => setCopiedHint(false), 2000);
  };

  const handleHintClick = () => {
    setShowHint(!showHint);
  };

  const handleSolutionClick = () => {
    if (isLocked) return;

    if (showSolution) {
      // Lösung wird manuell geschlossen - auch sperren
      setShowSolution(false);
      setIsLocked(true);

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Speichere Sperrzeit im localStorage
      if (taskId) {
        const lockUntil = Date.now() + SOLUTION_LOCK_TIME * 1000;
        localStorage.setItem(`solution_lock_${taskId}`, lockUntil.toString());
      }

      setLockTimeRemaining(SOLUTION_LOCK_TIME);
      setTimeRemaining(SOLUTION_DISPLAY_TIME);
    } else {
      // Lösung wird geöffnet
      setShowSolution(true);
      setTimeRemaining(SOLUTION_DISPLAY_TIME);
    }
  };

  const showHintSolution = showHint || showSolution;
  const progressPercentage = (timeRemaining / SOLUTION_DISPLAY_TIME) * 100;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.container}>
      {/* Beispiel-Block */}
      <div className={styles.codeBlockContainer}>
        <div className={styles.header}>
          <div className={styles.leftHeader}>
            <span className={styles.language}>{language}</span>
            <span className={styles.exampleBadge}>Beispiel</span>
          </div>
          <button
            className={styles.copyButton}
            onClick={handleCopyExample}
            aria-label="Code kopieren"
            title="Code in Zwischenablage kopieren"
          >
            {copiedExample ? "✓ Kopiert!" : "Kopieren"}
          </button>
        </div>
        <SyntaxHighlighter
          language={language}
          style={gruvboxDark}
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{
            margin: 0,
            borderRadius: "0 0 8px 8px",
            fontSize: "0.9rem",
          }}
          lineNumberStyle={{
            minWidth: "2.5em",
            paddingRight: "1em",
            color: "#928374",
            userSelect: "none",
          }}
        >
          {exampleCode}
        </SyntaxHighlighter>
      </div>

      {/* Hinweis/Lösung Block */}
      <div className={styles.codeBlockContainer}>
        <div className={styles.header}>
          <div className={styles.leftHeader}>
            {!showHintSolution ? (
              <>
                <button
                  onClick={handleHintClick}
                  className={styles.hintButton}
                  title="Hinweis anzeigen"
                >
                  💡 Hinweis
                </button>
                <button
                  onClick={handleSolutionClick}
                  className={`${styles.solutionButton} ${isLocked ? styles.locked : ""}`}
                  title={
                    isLocked
                      ? `Gesperrt für ${formatTime(lockTimeRemaining)}`
                      : "Lösung anzeigen"
                  }
                  disabled={isLocked}
                >
                  {isLocked
                    ? `🔒 ${formatTime(lockTimeRemaining)}`
                    : "✅ Lösung"}
                </button>
              </>
            ) : (
              <>
                <span className={styles.language}>{language}</span>
                <span
                  className={
                    showSolution ? styles.solutionBadge : styles.hintBadge
                  }
                >
                  {showSolution ? "Lösung" : "Hinweis"}
                </span>
                {showSolution && (
                  <span className={styles.timer}>⏱ {timeRemaining}s</span>
                )}
                <button
                  onClick={showSolution ? handleSolutionClick : handleHintClick}
                  className={styles.closeButton}
                  title="Schliessen"
                >
                  ✕
                </button>
              </>
            )}
          </div>
          {showHintSolution && !showSolution && (
            <button
              className={styles.copyButton}
              onClick={handleCopyHint}
              aria-label="Code kopieren"
              title="Code in Zwischenablage kopieren"
            >
              {copiedHint ? "✓ Kopiert!" : "Kopieren"}
            </button>
          )}
        </div>
        {showSolution && (
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
        {showHint && (
          <SyntaxHighlighter
            language={language}
            style={gruvboxDark}
            showLineNumbers={true}
            wrapLines={true}
            customStyle={{
              margin: 0,
              borderRadius: "0 0 8px 8px",
              fontSize: "0.9rem",
            }}
            lineNumberStyle={{
              minWidth: "2.5em",
              paddingRight: "1em",
              color: "#928374",
              userSelect: "none",
            }}
          >
            {hintCode}
          </SyntaxHighlighter>
        )}
        {showSolution && (
          <div className={styles.solutionWrapper}>
            <SyntaxHighlighter
              language={language}
              style={gruvboxDark}
              showLineNumbers={true}
              wrapLines={true}
              customStyle={{
                margin: 0,
                borderRadius: "0 0 8px 8px",
                fontSize: "0.9rem",
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
              lineNumberStyle={{
                minWidth: "2.5em",
                paddingRight: "1em",
                color: "#928374",
                userSelect: "none",
              }}
            >
              {solutionCode}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
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
 */
function dedent(text) {
  const lines = text.split("\n");

  // Entferne erste/letzte leere Zeile
  if (lines[0]?.trim() === "") lines.shift();
  if (lines[lines.length - 1]?.trim() === "") lines.pop();

  if (lines.length === 0) return "";

  // Finde minimale Einrückung
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
