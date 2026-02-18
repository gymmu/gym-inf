import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react"
import { useAuth } from "./AuthContext"
import * as progressApi from "../services/progressApi"

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  // Map of chapterSlug -> understandingLevel (1, 2, 3)
  const [progress, setProgress] = useState({})
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = useAuth()

  const fetchProgress = useCallback(async () => {
    if (!isAuthenticated) {
      setProgress({})
      return
    }

    setLoading(true)
    try {
      const data = await progressApi.getAllProgress()
      setProgress(data.progress || {})
    } catch {
      // Silently fail - progress indicators just won't show
      setProgress({})
    } finally {
      setLoading(false)
    }
  }, [isAuthenticated])

  // Fetch progress when user logs in/out
  useEffect(() => {
    fetchProgress()
  }, [fetchProgress])

  const updateRating = useCallback(
    async (chapterSlug, level) => {
      if (!isAuthenticated) return

      // Optimistic update
      setProgress((prev) => ({ ...prev, [chapterSlug]: level }))

      try {
        await progressApi.updateChapterRating(chapterSlug, level)
      } catch {
        // Revert on failure
        fetchProgress()
      }
    },
    [isAuthenticated, fetchProgress],
  )

  const removeRating = useCallback(
    async (chapterSlug) => {
      if (!isAuthenticated) return

      // Optimistic update
      setProgress((prev) => {
        const next = { ...prev }
        delete next[chapterSlug]
        return next
      })

      try {
        await progressApi.removeChapterRating(chapterSlug)
      } catch {
        // Revert on failure
        fetchProgress()
      }
    },
    [isAuthenticated, fetchProgress],
  )

  const getRating = useCallback(
    (chapterSlug) => {
      return progress[chapterSlug] || null
    },
    [progress],
  )

  const value = {
    progress,
    loading,
    updateRating,
    removeRating,
    getRating,
    fetchProgress,
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}
