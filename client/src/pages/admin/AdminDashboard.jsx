import { useState, useEffect } from "react"
import { useAuth } from "@context/AuthContext"
import { Navigate, Link } from "react-router-dom"
import * as adminApi from "@/services/adminApi"
import style from "./AdminDashboard.module.css"

function ProgressDot({ level }) {
  const colorClass =
    level === 1 ? style.dotRed : level === 2 ? style.dotYellow : style.dotGreen
  return <span className={`${style.progressDot} ${colorClass}`} />
}

function UserRow({ user }) {
  const [expanded, setExpanded] = useState(false)

  const progressArray = Object.entries(user.progress).sort(
    (a, b) => new Date(b[1].updatedAt) - new Date(a[1].updatedAt),
  )

  return (
    <>
      <tr>
        <td>
          <div className={style.userEmail}>{user.email}</div>
          {user.name && <div className={style.userName}>{user.name}</div>}
        </td>
        <td>
          {user.className ? (
            <span
              style={{
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                background: "var(--color-purple)",
                color: "var(--color-white)",
                fontSize: "0.85rem",
              }}>
              {user.className}
            </span>
          ) : (
            <span
              style={{ color: "var(--color-gray-light)", fontSize: "0.85rem" }}>
              -
            </span>
          )}
        </td>
        <td>
          <span
            className={`${style.badge} ${user.role === "ADMIN" ? style.badgeAdmin : style.badgeUser}`}>
            {user.role}
          </span>
        </td>
        <td>{user.totalChapters}</td>
        <td>
          <div className={style.progressDots}>
            {progressArray.slice(0, 10).map(([slug, data]) => (
              <ProgressDot key={slug} level={data.level} />
            ))}
            {progressArray.length > 10 && (
              <span>+{progressArray.length - 10}</span>
            )}
          </div>
        </td>
        <td>
          {progressArray.length > 0 && (
            <button
              className={style.expandBtn}
              onClick={() => setExpanded(!expanded)}>
              {expanded ? "Weniger" : "Details"}
            </button>
          )}
        </td>
      </tr>
      {expanded && (
        <tr className={style.detailsRow}>
          <td colSpan="6">
            <h4>Kapitelfortschritt</h4>
            <div className={style.chapterList}>
              {progressArray.map(([slug, data]) => (
                <div key={slug} className={style.chapterItem}>
                  <ProgressDot level={data.level} />
                  <div style={{ flex: 1 }}>
                    <div className={style.chapterSlug}>{slug}</div>
                    <div className={style.chapterDate}>
                      {new Date(data.updatedAt).toLocaleDateString("de-DE", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default function AdminDashboard() {
  const { user, isAuthenticated, hasRole } = useAuth()
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isAuthenticated || !hasRole(["ADMIN"])) return

    async function fetchData() {
      setLoading(true)
      try {
        const [usersData, statsData] = await Promise.all([
          adminApi.getAllUsersProgress(),
          adminApi.getStats(),
        ])
        setUsers(usersData.users)
        setStats(statsData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [isAuthenticated, hasRole])

  // Redirect if not admin
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
        <div className={style.loading}>Lade Daten...</div>
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

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Admin Dashboard</h1>
        <p>Übersicht über alle Benutzer und deren Lernfortschritt</p>
        <div style={{ marginTop: "1rem" }}>
          <Link
            to="/admin/classes"
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              background: "var(--color-purple)",
              color: "var(--color-white)",
              textDecoration: "none",
              borderRadius: "4px",
              fontSize: "0.9rem",
            }}>
            Klassenverwaltung →
          </Link>
        </div>
      </div>

      {stats && (
        <div className={style.stats}>
          <div className={style.statCard}>
            <h3>Benutzer gesamt</h3>
            <p>{stats.totalUsers}</p>
          </div>
          <div className={style.statCard}>
            <h3>Bewertungen gesamt</h3>
            <p>{stats.totalProgress}</p>
          </div>
          <div className={style.statCard}>
            <h3>Admins</h3>
            <p>{stats.usersByRole.ADMIN || 0}</p>
          </div>
          <div className={style.statCard}>
            <h3>User</h3>
            <p>{stats.usersByRole.USER || 0}</p>
          </div>
        </div>
      )}

      <table className={style.userTable}>
        <thead>
          <tr>
            <th>Benutzer</th>
            <th>Klasse</th>
            <th>Rolle</th>
            <th>Kapitel</th>
            <th>Fortschritt</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <div className={style.loading}>Keine Benutzer gefunden</div>
      )}
    </div>
  )
}
