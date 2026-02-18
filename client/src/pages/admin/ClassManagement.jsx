import { useState, useEffect } from "react"
import { useAuth } from "@context/AuthContext"
import { Navigate, Link } from "react-router-dom"
import * as classApi from "@/services/classApi"
import * as adminApi from "@/services/adminApi"
import style from "./AdminDashboard.module.css"

function UserRow({ user, classes, onUpdate, onAssignClass }) {
  const [editing, setEditing] = useState(false)
  const [firstName, setFirstName] = useState(user.profile?.firstName || "")
  const [lastName, setLastName] = useState(user.profile?.lastName || "")
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      await adminApi.updateUserProfile(user.id, firstName, lastName)
      setEditing(false)
      onUpdate()
    } catch (err) {
      alert("Fehler beim Speichern: " + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setFirstName(user.profile?.firstName || "")
    setLastName(user.profile?.lastName || "")
    setEditing(false)
  }

  return (
    <tr>
      <td>
        <div className={style.userEmail}>{user.email}</div>
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Vorname"
            style={{
              width: "100%",
              padding: "0.3rem",
              borderRadius: "4px",
              border: "1px solid var(--color-gray)",
              background: "var(--color-bg)",
              color: "var(--color-fg)",
            }}
          />
        ) : (
          <span
            style={{
              color: firstName ? "var(--color-fg)" : "var(--color-gray-light)",
            }}>
            {firstName || "-"}
          </span>
        )}
      </td>
      <td>
        {editing ? (
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nachname"
            style={{
              width: "100%",
              padding: "0.3rem",
              borderRadius: "4px",
              border: "1px solid var(--color-gray)",
              background: "var(--color-bg)",
              color: "var(--color-fg)",
            }}
          />
        ) : (
          <span
            style={{
              color: lastName ? "var(--color-fg)" : "var(--color-gray-light)",
            }}>
            {lastName || "-"}
          </span>
        )}
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
          <span style={{ color: "var(--color-gray-light)" }}>Keine Klasse</span>
        )}
      </td>
      <td style={{ textAlign: "center", fontWeight: "bold" }}>
        {user.totalChapters}
      </td>
      <td>
        <select
          value={user.classId || ""}
          onChange={(e) =>
            onAssignClass(
              user.id,
              e.target.value ? parseInt(e.target.value, 10) : null,
            )
          }
          disabled={editing}
          style={{
            padding: "0.3rem",
            borderRadius: "4px",
            border: "1px solid var(--color-gray)",
            backgroundColor: "var(--color-bg)",
            color: "var(--color-fg)",
            cursor: editing ? "not-allowed" : "pointer",
            opacity: editing ? 0.5 : 1,
          }}>
          <option value="">Keine Klasse</option>
          {classes.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        {editing ? (
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <button
              onClick={handleSave}
              disabled={saving}
              style={{
                padding: "0.3rem 0.75rem",
                fontSize: "0.85rem",
                borderRadius: "4px",
                border: "none",
                background: "var(--color-green)",
                color: "var(--color-white)",
                cursor: saving ? "not-allowed" : "pointer",
                opacity: saving ? 0.6 : 1,
              }}>
              {saving ? "..." : "💾"}
            </button>
            <button
              onClick={handleCancel}
              disabled={saving}
              style={{
                padding: "0.3rem 0.75rem",
                fontSize: "0.85rem",
                borderRadius: "4px",
                border: "1px solid var(--color-gray)",
                background: "transparent",
                color: "var(--color-fg)",
                cursor: saving ? "not-allowed" : "pointer",
                opacity: saving ? 0.6 : 1,
              }}>
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            style={{
              padding: "0.3rem 0.75rem",
              fontSize: "0.85rem",
              borderRadius: "4px",
              border: "1px solid var(--color-blue)",
              background: "transparent",
              color: "var(--color-blue)",
              cursor: "pointer",
            }}>
            ✏️ Bearbeiten
          </button>
        )}
      </td>
    </tr>
  )
}

export default function ClassManagement() {
  const { hasRole, isAuthenticated } = useAuth()
  const [classes, setClasses] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [newClassName, setNewClassName] = useState("")
  const [creating, setCreating] = useState(false)
  const [classFilter, setClassFilter] = useState("")
  const [sortBy, setSortBy] = useState("email")
  const [sortOrder, setSortOrder] = useState("asc")

  const fetchData = async () => {
    setLoading(true)
    try {
      const [classesData, usersData] = await Promise.all([
        classApi.getAllClasses(),
        adminApi.getAllUsersProgress(),
      ])
      setClasses(classesData.classes)
      setUsers(usersData.users)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isAuthenticated || !hasRole(["ADMIN"])) return
    fetchData()
  }, [isAuthenticated, hasRole])

  const handleCreateClass = async (e) => {
    e.preventDefault()
    if (!newClassName.trim()) return

    setCreating(true)
    try {
      const result = await classApi.createClass(newClassName.trim())
      setClasses([...classes, result.class])
      setNewClassName("")
    } catch (err) {
      setError(err.message)
    } finally {
      setCreating(false)
    }
  }

  const handleDeleteClass = async (classId) => {
    if (!confirm("Klasse wirklich löschen?")) return

    try {
      await classApi.deleteClass(classId)
      setClasses(classes.filter((c) => c.id !== classId))
    } catch (err) {
      setError(err.message)
    }
  }

  const handleAssignUser = async (userId, classId) => {
    try {
      await classApi.assignUserToClass(userId, classId)
      fetchData()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("asc")
    }
  }

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

  // Filter users by class
  const filteredUsers = classFilter
    ? users.filter((u) => u.classId === parseInt(classFilter, 10))
    : users

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aVal, bVal

    switch (sortBy) {
      case "email":
        aVal = a.email
        bVal = b.email
        break
      case "firstName":
        aVal = a.profile?.firstName || ""
        bVal = b.profile?.firstName || ""
        break
      case "lastName":
        aVal = a.profile?.lastName || ""
        bVal = b.profile?.lastName || ""
        break
      case "class":
        aVal = a.className || ""
        bVal = b.className || ""
        break
      case "chapters":
        aVal = a.totalChapters
        bVal = b.totalChapters
        break
      default:
        return 0
    }

    if (sortOrder === "asc") {
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
    } else {
      return aVal < bVal ? 1 : aVal > bVal ? -1 : 0
    }
  })

  const SortIcon = ({ field }) => {
    if (sortBy !== field)
      return <span style={{ color: "var(--color-gray)" }}>⇅</span>
    return sortOrder === "asc" ? "↑" : "↓"
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>Klassenverwaltung</h1>
        <p>Klassen erstellen und Schüler zuweisen</p>
      </div>

      {error && (
        <div className={style.error} style={{ marginBottom: "2rem" }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: "2rem" }}>
        <h2>Neue Klasse erstellen</h2>
        <form
          onSubmit={handleCreateClass}
          style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            placeholder="z.B. F1c, 1Wb, 2Ga"
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid var(--color-gray)",
              backgroundColor: "var(--color-bg)",
              color: "var(--color-fg)",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            disabled={creating || !newClassName.trim()}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              border: "1px solid var(--color-blue)",
              backgroundColor: "var(--color-blue)",
              color: "var(--color-white)",
              cursor: creating ? "not-allowed" : "pointer",
              opacity: creating || !newClassName.trim() ? 0.6 : 1,
            }}>
            {creating ? "Erstelle..." : "Erstellen"}
          </button>
        </form>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>Klassen</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
          }}>
          {classes.map((cls) => {
            const usersInClass = users.filter((u) => u.classId === cls.id)
            return (
              <div
                key={cls.id}
                style={{
                  padding: "1rem",
                  border: "1px solid var(--color-gray)",
                  borderRadius: "8px",
                  background: "hsl(from var(--color-bg) h s calc(l + 3))",
                }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}>
                  <h3 style={{ margin: 0, color: "var(--color-yellow)" }}>
                    {cls.name}
                  </h3>
                  <button
                    onClick={() => handleDeleteClass(cls.id)}
                    style={{
                      padding: "0.25rem 0.5rem",
                      fontSize: "0.75rem",
                      border: "1px solid var(--color-red)",
                      borderRadius: "4px",
                      background: "transparent",
                      color: "var(--color-red)",
                      cursor: "pointer",
                    }}>
                    Löschen
                  </button>
                </div>
                <p
                  style={{
                    margin: "0.5rem 0",
                    color: "var(--color-gray-light)",
                    fontSize: "0.9rem",
                  }}>
                  {usersInClass.length} Schüler
                </p>
                <Link
                  to={`/admin/classes/${cls.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: "0.5rem",
                    padding: "0.3rem 0.75rem",
                    fontSize: "0.85rem",
                    border: "1px solid var(--color-blue)",
                    borderRadius: "4px",
                    background: "transparent",
                    color: "var(--color-blue)",
                    textDecoration: "none",
                  }}>
                  Klassenübersicht →
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}>
          <h2 style={{ margin: 0 }}>Schüler Verwaltung</h2>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <label style={{ fontSize: "0.9rem" }}>Filter nach Klasse:</label>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              style={{
                padding: "0.4rem",
                borderRadius: "4px",
                border: "1px solid var(--color-gray)",
                backgroundColor: "var(--color-bg)",
                color: "var(--color-fg)",
                cursor: "pointer",
              }}>
              <option value="">Alle Klassen</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <table className={style.userTable}>
          <thead>
            <tr>
              <th
                onClick={() => handleSort("email")}
                style={{ cursor: "pointer", userSelect: "none" }}>
                Email <SortIcon field="email" />
              </th>
              <th
                onClick={() => handleSort("firstName")}
                style={{ cursor: "pointer", userSelect: "none" }}>
                Vorname <SortIcon field="firstName" />
              </th>
              <th
                onClick={() => handleSort("lastName")}
                style={{ cursor: "pointer", userSelect: "none" }}>
                Nachname <SortIcon field="lastName" />
              </th>
              <th
                onClick={() => handleSort("class")}
                style={{ cursor: "pointer", userSelect: "none" }}>
                Aktuelle Klasse <SortIcon field="class" />
              </th>
              <th
                onClick={() => handleSort("chapters")}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  textAlign: "center",
                }}>
                Kapitel <SortIcon field="chapters" />
              </th>
              <th>Neue Klasse zuweisen</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                classes={classes}
                onUpdate={fetchData}
                onAssignClass={handleAssignUser}
              />
            ))}
          </tbody>
        </table>

        {sortedUsers.length === 0 && (
          <div className={style.loading} style={{ marginTop: "1rem" }}>
            {classFilter
              ? "Keine Schüler in dieser Klasse gefunden"
              : "Keine Schüler gefunden"}
          </div>
        )}
      </div>
    </div>
  )
}
