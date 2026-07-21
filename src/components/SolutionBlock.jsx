import { useState, useEffect, useRef } from "react"
import styles from "./SolutionBlock.module.css"

export default function SolutionBlock({ children, hint, taskId }) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(30)
  const [isLocked, setIsLocked] = useState(false)
  const [lockTimeRemaining, setLockTimeRemaining] = useState(0)

  const intervalRef = useRef(null)
  const lockIntervalRef = useRef(null)

  const SOLUTION_DISPLAY_TIME = 30 // 30 Sekunden
  const SOLUTION_LOCK_TIME = 300 // 5 Minuten = 300 Sekunden

  // Prüfe beim Laden ob die Lösung gesperrt ist
  useEffect(() => {
    if (!taskId) return
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return
    }

    const lockKey = `solution_lock_${taskId}`
    const lockUntil = localStorage.getItem(lockKey)

    if (lockUntil) {
      const now = Date.now()
      const lockTime = parseInt(lockUntil, 10)

      if (now < lockTime) {
        setIsLocked(true)
        setLockTimeRemaining(Math.ceil((lockTime - now) / 1000))
      } else {
        localStorage.removeItem(lockKey)
      }
    }
  }, [taskId])

  // Update Lock Countdown
  useEffect(() => {
    if (isLocked && lockTimeRemaining > 0) {
      lockIntervalRef.current = setInterval(() => {
        setLockTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsLocked(false)
            if (
              taskId &&
              typeof window !== "undefined" &&
              typeof localStorage !== "undefined"
            ) {
              localStorage.removeItem(`solution_lock_${taskId}`)
            }
            if (lockIntervalRef.current) {
              clearInterval(lockIntervalRef.current)
            }
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => {
        if (lockIntervalRef.current) {
          clearInterval(lockIntervalRef.current)
        }
      }
    }
  }, [isLocked, lockTimeRemaining, taskId])

  // Timer für Lösung
  useEffect(() => {
    if (showSolution && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Zeit abgelaufen - Lösung schliessen und sperren
            setShowSolution(false)
            setIsLocked(true)

            // Speichere Sperrzeit im localStorage
            if (
              taskId &&
              typeof window !== "undefined" &&
              typeof localStorage !== "undefined"
            ) {
              const lockUntil = Date.now() + SOLUTION_LOCK_TIME * 1000
              localStorage.setItem(
                `solution_lock_${taskId}`,
                lockUntil.toString(),
              )
            }

            setLockTimeRemaining(SOLUTION_LOCK_TIME)

            if (intervalRef.current) {
              clearInterval(intervalRef.current)
            }
            return SOLUTION_DISPLAY_TIME
          }
          return prev - 1
        })
      }, 1000)

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [showSolution, timeRemaining, taskId])

  const handleSolutionClick = () => {
    if (isLocked) return

    if (showSolution) {
      // Lösung wird manuell geschlossen - auch sperren
      setShowSolution(false)
      setIsLocked(true)

      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      // Speichere Sperrzeit im localStorage
      if (taskId) {
        const lockUntil = Date.now() + SOLUTION_LOCK_TIME * 1000
        localStorage.setItem(`solution_lock_${taskId}`, lockUntil.toString())
      }

      setLockTimeRemaining(SOLUTION_LOCK_TIME)
      setTimeRemaining(SOLUTION_DISPLAY_TIME)
    } else {
      // Lösung wird geöffnet
      setShowSolution(true)
      setTimeRemaining(SOLUTION_DISPLAY_TIME)
    }
  }

  const progressPercentage = (timeRemaining / SOLUTION_DISPLAY_TIME) * 100

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const toggleHint = () => {
    setShowHint(!showHint)
  }

  return (
    <div className={styles.container}>
      <div className={styles.warningBox}>
        <div className={styles.warningContent}>
          <strong>Wichtig:</strong> Versuchen Sie die Aufgabe zuerst selbst zu
          lösen, bevor Sie die Lösung anschauen. Die Lösung verschwindet nach 30
          Sekunden und ist dann für 5 Minuten gesperrt.
        </div>
      </div>

      {hint && (
        <details className={styles.hintDetails}>
          <summary className={styles.hintSummary}>Hinweis anzeigen</summary>
          <div className={styles.hintContent}>{hint}</div>
        </details>
      )}

      <button
        onClick={handleSolutionClick}
        className={`${styles.solutionButton} ${isLocked ? styles.locked : ""} ${showSolution ? styles.active : ""}`}
        disabled={isLocked}>
        {isLocked ? (
          <>Lösung gesperrt ({formatTime(lockTimeRemaining)})</>
        ) : showSolution ? (
          <>Lösung ausblenden ({timeRemaining}s)</>
        ) : (
          <>Lösung anzeigen</>
        )}
      </button>

      {showSolution && (
        <>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className={styles.solutionContent}>{children}</div>
        </>
      )}
    </div>
  )
}
