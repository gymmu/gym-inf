import { useState, useEffect } from "react"
import { useAuth } from "@context/AuthContext"
import { Navigate, useParams, Link } from "react-router-dom"
import * as classApi from "@/services/classApi"
import * as filterApi from "@/services/filterApi"
import style from "./AdminDashboard.module.css"

function LevelBadge({ level }) {
  const styles = {
    1: {
      background: "var(--color-red)",
      color: "var(--color-white)",
      label: "1",
    },
    2: {
      background: "var(--color-yellow)",
      color: "var(--color-bg)",
      label: "2",
    },
    3: {
      background: "var(--color-green)",
      color: "var(--color-white)",
      label: "3",
    },
  }

  const s = styles[level]
  return (
    <span
      style={{
        display: "inline-block",
        width: "28px",
        height: "28px",
        lineHeight: "28px",
        textAlign: "center",
        borderRadius: "4px",
        background: s.background,
        color: s.color,
        fontWeight: "bold",
        fontSize: "0.9rem",
      }}>
      {s.label}
    </span>
  )
}

export default function ClassOverview() {
  const { id } = useParams()
  const { hasRole, isAuthenticated } = useAuth()
  const [classData, setClassData] = useState(null)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [viewMode, setViewMode] = useState("aggregate")
  const [selectedChapters, setSelectedChapters] = useState(new Set())
  const [showChapterFilter, setShowChapterFilter] = useState(false)

  // Saved filters
  const [savedFilters, setSavedFilters] = useState([])
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [newFilterName, setNewFilterName] = useState("")
  const [savingFilter, setSavingFilter] = useState(false)

  // Load last filter from localStorage
  useEffect(() => {
    const storedFilter = localStorage.getItem(`classFilter_${id}`)
    if (storedFilter) {
      try {
        const chapters = JSON.parse(storedFilter)
        setSelectedChapters(new Set(chapters))
      } catch (e) {
        console.error("Failed to load filter from localStorage", e)
      }
    }
  }, [id])

  // Save current filter to localStorage whenever it changes
  useEffect(() => {
    if (selectedChapters.size > 0) {
      localStorage.setItem(
        `classFilter_${id}`,
        JSON.stringify(Array.from(selectedChapters)),
      )
    } else {
      localStorage.removeItem(`classFilter_${id}`)
    }
  }, [selectedChapters, id])

  // Load saved filters from API
  useEffect(() => {
    if (!isAuthenticated || !hasRole(["ADMIN"])) return

    async function loadFilters() {
      try {
        const data = await filterApi.getAllFilters()
        setSavedFilters(data.filters)
      } catch (err) {
        console.error("Failed to load filters", err)
      }
    }

    loadFilters()
  }, [isAuthenticated, hasRole])

  useEffect(() => {
    if (!isAuthenticated || !hasRole(["ADMIN"])) return

    async function fetchClassData() {
      setLoading(true)
      try {
        const data = await classApi.getClassUsers(id)
        setClassData(data.class)
        setUsers(data.users)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchClassData()
  }, [id, isAuthenticated, hasRole])

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (!hasRole(["ADMIN"])) {
    return (
      <div className={style.container}>
        <div className={style.error}>
          <h2>Zugriff verweigert</h2>
          <p>Sie haben keine Berechtigung auf diese Seite zuzugreifen.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={style.container}>
        <div className={style.loading}>Lade Klassendaten...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={style.container}>
        <div className={style.error}>
          <h2>Fehler</h2>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  // Get all unique chapters across all users
  const allChapters = new Set()
  users.forEach((user) => {
    Object.keys(user.progress).forEach((chapter) => allChapters.add(chapter))
  })
  const allChaptersList = Array.from(allChapters).sort()

  // Filter chapters based on selection
  const chapters =
    selectedChapters.size > 0
      ? allChaptersList.filter((ch) => selectedChapters.has(ch))
      : allChaptersList

  // Toggle chapter selection
  const toggleChapter = (chapter) => {
    const newSelected = new Set(selectedChapters)
    if (newSelected.has(chapter)) {
      newSelected.delete(chapter)
    } else {
      newSelected.add(chapter)
    }
    setSelectedChapters(newSelected)
  }

  const selectAllChapters = () => {
    setSelectedChapters(new Set(allChaptersList))
  }

  const clearChapterSelection = () => {
    setSelectedChapters(new Set())
  }

  const handleSaveFilter = async () => {
    if (!newFilterName.trim() || selectedChapters.size === 0) return

    setSavingFilter(true)
    try {
      const result = await filterApi.createFilter(
        newFilterName.trim(),
        Array.from(selectedChapters),
      )
      setSavedFilters([result.filter, ...savedFilters])
      setNewFilterName("")
      setShowSaveDialog(false)
    } catch (err) {
      alert("Fehler beim Speichern: " + err.message)
    } finally {
      setSavingFilter(false)
    }
  }

  const handleLoadFilter = (filter) => {
    setSelectedChapters(new Set(filter.chapters))
    setShowChapterFilter(false)
  }

  const handleDeleteFilter = async (filterId) => {
    if (!confirm("Filter wirklich löschen?")) return

    try {
      await filterApi.deleteFilter(filterId)
      setSavedFilters(savedFilters.filter((f) => f.id !== filterId))
    } catch (err) {
      alert("Fehler beim Löschen: " + err.message)
    }
  }

  // Calculate aggregate statistics per chapter
  const chapterStats = {}
  chapters.forEach((chapter) => {
    chapterStats[chapter] = {
      red: 0,
      yellow: 0,
      green: 0,
      total: 0,
      notRated: users.length,
    }

    users.forEach((user) => {
      const progress = user.progress[chapter]
      if (progress) {
        chapterStats[chapter].total++
        chapterStats[chapter].notRated--
        if (progress.level === 1) chapterStats[chapter].red++
        if (progress.level === 2) chapterStats[chapter].yellow++
        if (progress.level === 3) chapterStats[chapter].green++
      }
    })
  })

  // Calculate average per user
  const userAverages = {}
  users.forEach((user) => {
    const progressValues = Object.values(user.progress)
    if (progressValues.length > 0) {
      const sum = progressValues.reduce((acc, p) => acc + p.level, 0)
      userAverages[user.id] = (sum / progressValues.length).toFixed(1)
    } else {
      userAverages[user.id] = "-"
    }
  })

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
          <div>
            <h1>Klassenübersicht: {classData?.name}</h1>
            <p>
              {users.length} Schüler, {chapters.length}{" "}
              {selectedChapters.size > 0 ? "gefilterte" : "bewertete"} Kapitel
            </p>
          </div>
          <Link
            to="/admin/classes"
            style={{
              padding: "0.5rem 1rem",
              background: "var(--color-gray)",
              color: "var(--color-white)",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "0.9rem",
            }}>
            ← Zurück
          </Link>
        </div>
      </div>

      {chapters.length > 0 && (
        <>
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}>
            <button
              onClick={() => setViewMode("aggregate")}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: `2px solid ${viewMode === "aggregate" ? "var(--color-yellow)" : "var(--color-gray)"}`,
                background:
                  viewMode === "aggregate"
                    ? "var(--color-yellow)"
                    : "transparent",
                color:
                  viewMode === "aggregate"
                    ? "var(--color-bg)"
                    : "var(--color-fg)",
                cursor: "pointer",
                fontWeight: viewMode === "aggregate" ? "bold" : "normal",
              }}>
              Aggregierte Übersicht
            </button>
            <button
              onClick={() => setViewMode("detail")}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                border: `2px solid ${viewMode === "detail" ? "var(--color-yellow)" : "var(--color-gray)"}`,
                background:
                  viewMode === "detail" ? "var(--color-yellow)" : "transparent",
                color:
                  viewMode === "detail" ? "var(--color-bg)" : "var(--color-fg)",
                cursor: "pointer",
                fontWeight: viewMode === "detail" ? "bold" : "normal",
              }}>
              Detailansicht (Schüler × Kapitel)
            </button>
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <button
                onClick={() => setShowChapterFilter(!showChapterFilter)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  border: `2px solid ${showChapterFilter ? "var(--color-blue)" : "var(--color-gray)"}`,
                  background: showChapterFilter
                    ? "var(--color-blue)"
                    : "transparent",
                  color: showChapterFilter
                    ? "var(--color-white)"
                    : "var(--color-fg)",
                  cursor: "pointer",
                }}>
                🔍 Kapitel filtern{" "}
                {selectedChapters.size > 0 && `(${selectedChapters.size})`}
              </button>
            </div>
          </div>

          {showChapterFilter && (
            <div
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                background: "hsl(from var(--color-bg) h s calc(l + 5))",
                borderRadius: "8px",
                border: "2px solid var(--color-blue)",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}>
                <h3 style={{ margin: 0, fontSize: "1rem" }}>
                  Kapitel auswählen
                </h3>
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {selectedChapters.size > 0 && (
                    <button
                      onClick={() => setShowSaveDialog(true)}
                      style={{
                        padding: "0.3rem 0.75rem",
                        fontSize: "0.85rem",
                        borderRadius: "4px",
                        border: "1px solid var(--color-purple)",
                        background: "transparent",
                        color: "var(--color-purple)",
                        cursor: "pointer",
                      }}>
                      💾 Filter speichern
                    </button>
                  )}
                  <button
                    onClick={selectAllChapters}
                    style={{
                      padding: "0.3rem 0.75rem",
                      fontSize: "0.85rem",
                      borderRadius: "4px",
                      border: "1px solid var(--color-green)",
                      background: "transparent",
                      color: "var(--color-green)",
                      cursor: "pointer",
                    }}>
                    Alle auswählen
                  </button>
                  <button
                    onClick={clearChapterSelection}
                    style={{
                      padding: "0.3rem 0.75rem",
                      fontSize: "0.85rem",
                      borderRadius: "4px",
                      border: "1px solid var(--color-red)",
                      background: "transparent",
                      color: "var(--color-red)",
                      cursor: "pointer",
                    }}>
                    Auswahl aufheben
                  </button>
                </div>
              </div>

              {savedFilters.length > 0 && (
                <div style={{ marginBottom: "1rem" }}>
                  <h4 style={{ margin: "0 0 0.5rem", fontSize: "0.9rem" }}>
                    Gespeicherte Filter:
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                    }}>
                    {savedFilters.map((filter) => (
                      <div
                        key={filter.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.4rem 0.75rem",
                          background:
                            "hsl(from var(--color-bg) h s calc(l + 10))",
                          borderRadius: "4px",
                          border: "1px solid var(--color-purple)",
                        }}>
                        <button
                          onClick={() => handleLoadFilter(filter)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--color-purple)",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            padding: 0,
                          }}>
                          {filter.name} ({filter.chapters.length})
                        </button>
                        <button
                          onClick={() => handleDeleteFilter(filter.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "var(--color-red)",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            padding: 0,
                          }}>
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {showSaveDialog && (
                <div
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    background: "hsl(from var(--color-bg) h s calc(l + 8))",
                    borderRadius: "4px",
                    border: "2px solid var(--color-purple)",
                  }}>
                  <h4 style={{ margin: "0 0 0.5rem", fontSize: "0.9rem" }}>
                    Filter speichern
                  </h4>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      type="text"
                      value={newFilterName}
                      onChange={(e) => setNewFilterName(e.target.value)}
                      placeholder="Filter-Name (z.B. 'Nur JavaScript')"
                      style={{
                        flex: 1,
                        padding: "0.5rem",
                        borderRadius: "4px",
                        border: "1px solid var(--color-gray)",
                        background: "var(--color-bg)",
                        color: "var(--color-fg)",
                      }}
                    />
                    <button
                      onClick={handleSaveFilter}
                      disabled={!newFilterName.trim() || savingFilter}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        border: "none",
                        background: "var(--color-purple)",
                        color: "var(--color-white)",
                        cursor:
                          !newFilterName.trim() || savingFilter
                            ? "not-allowed"
                            : "pointer",
                        opacity:
                          !newFilterName.trim() || savingFilter ? 0.6 : 1,
                      }}>
                      {savingFilter ? "Speichern..." : "Speichern"}
                    </button>
                    <button
                      onClick={() => {
                        setShowSaveDialog(false)
                        setNewFilterName("")
                      }}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "4px",
                        border: "1px solid var(--color-gray)",
                        background: "transparent",
                        color: "var(--color-fg)",
                        cursor: "pointer",
                      }}>
                      Abbrechen
                    </button>
                  </div>
                </div>
              )}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "0.5rem",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}>
                {allChaptersList.map((chapter) => (
                  <label
                    key={chapter}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem",
                      background: selectedChapters.has(chapter)
                        ? "hsl(from var(--color-bg) h s calc(l + 10))"
                        : "hsl(from var(--color-bg) h s calc(l + 2))",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border: selectedChapters.has(chapter)
                        ? "2px solid var(--color-yellow)"
                        : "2px solid transparent",
                    }}>
                    <input
                      type="checkbox"
                      checked={selectedChapters.has(chapter)}
                      onChange={() => toggleChapter(chapter)}
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontFamily: "monospace",
                        wordBreak: "break-word",
                      }}>
                      {chapter}
                    </span>
                  </label>
                ))}
              </div>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.85rem",
                  color: "var(--color-gray-light)",
                }}>
                {selectedChapters.size > 0 ? (
                  <p>
                    {selectedChapters.size} von {allChaptersList.length} Kapitel
                    ausgewählt
                  </p>
                ) : (
                  <p>Alle {allChaptersList.length} Kapitel werden angezeigt</p>
                )}
              </div>
            </div>
          )}

          {viewMode === "aggregate" ? (
            <div style={{ overflowX: "auto" }}>
              <h2 style={{ marginBottom: "1rem" }}>
                Zusammenfassung pro Kapitel
              </h2>
              <table className={style.userTable}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Kapitel</th>
                    <th>Bewertet</th>
                    <th>
                      <span style={{ color: "var(--color-red)" }}>
                        1️⃣ Schwierig
                      </span>
                    </th>
                    <th>
                      <span style={{ color: "var(--color-yellow)" }}>
                        2️⃣ Okay
                      </span>
                    </th>
                    <th>
                      <span style={{ color: "var(--color-green)" }}>
                        3️⃣ Gut
                      </span>
                    </th>
                    <th>Nicht bewertet</th>
                    <th>Durchschnitt</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Summary row for all chapters */}
                  <tr
                    style={{
                      background: "hsl(from var(--color-bg) h s calc(l + 8))",
                      fontWeight: "bold",
                      borderBottom: "3px solid var(--color-yellow)",
                    }}>
                    <td style={{ color: "var(--color-yellow)" }}>
                      📊 GESAMT ({chapters.length} Kapitel)
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {(() => {
                        const totalRated = Object.values(chapterStats).reduce(
                          (sum, s) => sum + s.total,
                          0,
                        )
                        const maxPossible = chapters.length * users.length
                        return `${totalRated} / ${maxPossible}`
                      })()}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color: "var(--color-red)",
                      }}>
                      {Object.values(chapterStats).reduce(
                        (sum, s) => sum + s.red,
                        0,
                      )}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color: "var(--color-yellow)",
                      }}>
                      {Object.values(chapterStats).reduce(
                        (sum, s) => sum + s.yellow,
                        0,
                      )}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color: "var(--color-green)",
                      }}>
                      {Object.values(chapterStats).reduce(
                        (sum, s) => sum + s.green,
                        0,
                      )}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color: "var(--color-gray-light)",
                      }}>
                      {Object.values(chapterStats).reduce(
                        (sum, s) => sum + s.notRated,
                        0,
                      )}
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color: (() => {
                          const totalRatings = Object.values(
                            chapterStats,
                          ).reduce((sum, s) => sum + s.total, 0)
                          if (totalRatings === 0)
                            return "var(--color-gray-light)"
                          const totalSum = Object.values(chapterStats).reduce(
                            (sum, s) =>
                              sum + s.red * 1 + s.yellow * 2 + s.green * 3,
                            0,
                          )
                          const avg = (totalSum / totalRatings).toFixed(1)
                          return avg < 1.7
                            ? "var(--color-red)"
                            : avg < 2.4
                              ? "var(--color-yellow)"
                              : "var(--color-green)"
                        })(),
                        fontSize: "1.1rem",
                      }}>
                      {(() => {
                        const totalRatings = Object.values(chapterStats).reduce(
                          (sum, s) => sum + s.total,
                          0,
                        )
                        if (totalRatings === 0) return "-"
                        const totalSum = Object.values(chapterStats).reduce(
                          (sum, s) =>
                            sum + s.red * 1 + s.yellow * 2 + s.green * 3,
                          0,
                        )
                        return (totalSum / totalRatings).toFixed(1)
                      })()}
                    </td>
                  </tr>
                  {chapters.map((chapter) => {
                    const stats = chapterStats[chapter]
                    const avg =
                      stats.total > 0
                        ? (
                            (stats.red * 1 +
                              stats.yellow * 2 +
                              stats.green * 3) /
                            stats.total
                          ).toFixed(1)
                        : "-"
                    const avgColor =
                      avg === "-"
                        ? "var(--color-gray-light)"
                        : avg < 1.7
                          ? "var(--color-red)"
                          : avg < 2.4
                            ? "var(--color-yellow)"
                            : "var(--color-green)"

                    return (
                      <tr key={chapter}>
                        <td
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.9rem",
                          }}>
                          {chapter}
                        </td>
                        <td style={{ textAlign: "center", fontWeight: "bold" }}>
                          {stats.total} / {users.length}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {stats.red > 0 ? (
                            <span
                              style={{
                                color: "var(--color-red)",
                                fontWeight: "bold",
                              }}>
                              {stats.red}
                            </span>
                          ) : (
                            <span style={{ color: "var(--color-gray-light)" }}>
                              -
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {stats.yellow > 0 ? (
                            <span
                              style={{
                                color: "var(--color-yellow)",
                                fontWeight: "bold",
                              }}>
                              {stats.yellow}
                            </span>
                          ) : (
                            <span style={{ color: "var(--color-gray-light)" }}>
                              -
                            </span>
                          )}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {stats.green > 0 ? (
                            <span
                              style={{
                                color: "var(--color-green)",
                                fontWeight: "bold",
                              }}>
                              {stats.green}
                            </span>
                          ) : (
                            <span style={{ color: "var(--color-gray-light)" }}>
                              -
                            </span>
                          )}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            color: "var(--color-gray-light)",
                          }}>
                          {stats.notRated}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: avgColor,
                            fontSize: "1.1rem",
                          }}>
                          {avg}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "0.85rem",
                  color: "var(--color-gray-light)",
                }}>
                <p>
                  <strong>Durchschnitt-Legende:</strong> 1.0 = Alle finden es
                  schwierig, 2.0 = Gemischt, 3.0 = Alle verstehen es gut
                </p>
              </div>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <h2 style={{ marginBottom: "1rem" }}>
                Detaillierte Matrix: Schüler × Kapitel
              </h2>
              <div
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                  background: "hsl(from var(--color-bg) h s calc(l + 3))",
                  borderRadius: "4px",
                }}>
                <strong>Legende:</strong>
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginTop: "0.5rem",
                    flexWrap: "wrap",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                    <LevelBadge level={1} />
                    <span>= Schwierig / Nicht verstanden</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                    <LevelBadge level={2} />
                    <span>= Okay / Teilweise verstanden</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                    <LevelBadge level={3} />
                    <span>= Gut verstanden</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                    <span
                      style={{
                        color: "var(--color-gray-light)",
                        fontSize: "1.2rem",
                      }}>
                      -
                    </span>
                    <span>= Noch nicht bewertet</span>
                  </div>
                </div>
              </div>
              <table className={style.userTable}>
                <thead>
                  <tr>
                    <th
                      style={{
                        position: "sticky",
                        left: 0,
                        zIndex: 2,
                        background: "hsl(from var(--color-bg) h s calc(l + 5))",
                      }}>
                      Schüler
                    </th>
                    {chapters.map((chapter) => (
                      <th
                        key={chapter}
                        style={{
                          minWidth: "100px",
                          maxWidth: "150px",
                          fontSize: "0.7rem",
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          padding: "0.5rem 0.25rem",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={chapter}>
                        {chapter}
                      </th>
                    ))}
                    <th>Gesamt</th>
                    <th>Ø</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    const userChapterCount = Object.keys(user.progress).length
                    const avg = userAverages[user.id]
                    const avgColor =
                      avg === "-"
                        ? "var(--color-gray-light)"
                        : avg < 1.7
                          ? "var(--color-red)"
                          : avg < 2.4
                            ? "var(--color-yellow)"
                            : "var(--color-green)"

                    return (
                      <tr key={user.id}>
                        <td
                          style={{
                            position: "sticky",
                            left: 0,
                            background:
                              "hsl(from var(--color-bg) h s calc(l + 2))",
                            zIndex: 1,
                            minWidth: "200px",
                          }}>
                          <div className={style.userEmail}>{user.email}</div>
                          {user.name && (
                            <div className={style.userName}>{user.name}</div>
                          )}
                        </td>
                        {chapters.map((chapter) => {
                          const progress = user.progress[chapter]
                          return (
                            <td
                              key={chapter}
                              style={{
                                textAlign: "center",
                                padding: "0.5rem",
                              }}>
                              {progress ? (
                                <LevelBadge level={progress.level} />
                              ) : (
                                <span
                                  style={{
                                    color: "var(--color-gray-light)",
                                    fontSize: "1rem",
                                  }}>
                                  -
                                </span>
                              )}
                            </td>
                          )
                        })}
                        <td
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "0.95rem",
                          }}>
                          {userChapterCount}
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            color: avgColor,
                          }}>
                          {avg}
                        </td>
                      </tr>
                    )
                  })}
                  {/* Summary row for chapters */}
                  <tr
                    style={{
                      background: "hsl(from var(--color-bg) h s calc(l + 8))",
                      fontWeight: "bold",
                    }}>
                    <td
                      style={{
                        position: "sticky",
                        left: 0,
                        background: "hsl(from var(--color-bg) h s calc(l + 8))",
                        zIndex: 1,
                        minWidth: "200px",
                        borderTop: "2px solid var(--color-yellow)",
                      }}>
                      <div style={{ color: "var(--color-yellow)" }}>
                        📊 Kapitel-Statistik
                      </div>
                    </td>
                    {chapters.map((chapter) => {
                      const stats = chapterStats[chapter]
                      const avg =
                        stats.total > 0
                          ? (
                              (stats.red * 1 +
                                stats.yellow * 2 +
                                stats.green * 3) /
                              stats.total
                            ).toFixed(1)
                          : "-"
                      const avgColor =
                        avg === "-"
                          ? "var(--color-gray-light)"
                          : avg < 1.7
                            ? "var(--color-red)"
                            : avg < 2.4
                              ? "var(--color-yellow)"
                              : "var(--color-green)"

                      return (
                        <td
                          key={chapter}
                          style={{
                            textAlign: "center",
                            padding: "0.75rem 0.5rem",
                            borderTop: "2px solid var(--color-yellow)",
                          }}>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              color: "var(--color-fg)",
                            }}>
                            {stats.total}/{users.length}
                          </div>
                          <div
                            style={{
                              fontSize: "1.1rem",
                              color: avgColor,
                              marginTop: "0.25rem",
                            }}>
                            {avg}
                          </div>
                        </td>
                      )
                    })}
                    <td
                      style={{
                        textAlign: "center",
                        borderTop: "2px solid var(--color-yellow)",
                      }}>
                      -
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        borderTop: "2px solid var(--color-yellow)",
                      }}>
                      -
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  color: "var(--color-gray-light)",
                }}>
                <p>
                  <strong>Kapitel-Statistik:</strong> Erste Zeile = Anzahl
                  Bewertungen / Gesamt Schüler, Zweite Zeile = Durchschnitt
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {users.length === 0 && (
        <div className={style.loading}>
          Keine Schüler in dieser Klasse gefunden
        </div>
      )}

      {chapters.length === 0 && users.length > 0 && (
        <div className={style.loading}>
          Noch keine Kapitel-Bewertungen in dieser Klasse
        </div>
      )}
    </div>
  )
}
