import { useState } from "react"
import style from "@components/PasswordDatabase.module.css"
import { usePasswordDb, sha256 } from "@components/usePasswordDb"

export default function HashedPasswordDatabase() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [testUsername, setTestUsername] = useState("")
  const [testPassword, setTestPassword] = useState("")
  const [message, setMessage] = useState(null)

  const [entries, addEntry, clearEntries] = usePasswordDb()

  const handleAddEntry = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      setMessage({
        type: "error",
        text: "Bitte Benutzername und Passwort eingeben",
      })
      return
    }
    if (entries.find((entry) => entry.username === username)) {
      setMessage({ type: "error", text: "Benutzername existiert bereits" })
      return
    }
    const entry = await addEntry({ username, password })
    setUsername("")
    setPassword("")
    setMessage({
      type: "success",
      text: `Eintrag hinzugefuegt. Hash: ${entry.hash.substring(0, 16)}...`,
    })
    setTimeout(() => setMessage(null), 5000)
  }

  const handleTest = async (e) => {
    e.preventDefault()
    if (!testUsername || !testPassword) {
      setMessage({
        type: "error",
        text: "Bitte Benutzername und Passwort eingeben",
      })
      return
    }
    const entry = entries.find((e) => e.username === testUsername)
    if (!entry) {
      setMessage({ type: "error", text: "Benutzername nicht gefunden" })
      return
    }
    const testHash = await sha256(testPassword + entry.salt)
    if (entry.hash === testHash) {
      setMessage({
        type: "success",
        text: `Login erfolgreich! Hash stimmt ueberein: ${testHash.substring(0, 16)}...`,
      })
    } else {
      setMessage({
        type: "error",
        text: "Login fehlgeschlagen! Hashes stimmen nicht ueberein.",
      })
    }
    setTimeout(() => setMessage(null), 7000)
  }

  const handleClear = () => {
    if (confirm("Moechten Sie wirklich die gesamte Datenbank loeschen?")) {
      clearEntries()
      setMessage({ type: "info", text: "Datenbank wurde geloescht" })
      setTimeout(() => setMessage(null), 3000)
    }
  }

  return (
    <div className={style.wrapper}>
      <h3>Passwort-Datenbank (mit Hashing)</h3>
      <p style={{ fontSize: "0.9rem", marginTop: 0 }}>
        Die Datenbank speichert nur den Hash -- das Passwort selbst wird nicht
        gespeichert. Die Passwort-Spalte ist durchgestrichen: sie steht nicht in
        der echten Datenbank.
      </p>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufuegen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="username-hash">Benutzername:</label>
            <input
              type="text"
              id="username-hash"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="password-hash">Passwort:</label>
            <input
              type="text"
              id="password-hash"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Hinzufuegen</button>
          </div>
        </form>
      </div>

      <div className={style.formGroup}>
        <h4>Login testen</h4>
        <form onSubmit={handleTest}>
          <div className={style.inputRow}>
            <label htmlFor="testUsername-hash">Benutzername:</label>
            <input
              type="text"
              id="testUsername-hash"
              value={testUsername}
              onChange={(e) => setTestUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="testPassword-hash">Passwort:</label>
            <input
              type="password"
              id="testPassword-hash"
              value={testPassword}
              onChange={(e) => setTestPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Testen</button>
          </div>
        </form>
      </div>

      {message && (
        <div
          className={`${style.message} ${style[message.type]}`}
          style={{ whiteSpace: "pre-line" }}>
          {message.text}
        </div>
      )}

      <div>
        <h4>Datenbank-Eintraege ({entries.length})</h4>
        {entries.length === 0 ? (
          <p>Keine Eintraege vorhanden</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Benutzername</th>
                <th className={style.grayedStrike}>Passwort</th>
                <th>Hash (SHA-256)</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.username}</td>
                  <td className={style.grayedStrike}>••••••••</td>
                  <td
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      wordBreak: "break-all",
                    }}>
                    {entry.hash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className={style.buttonGroup} style={{ marginTop: "1rem" }}>
          <button className={style.danger} onClick={handleClear}>
            Datenbank loeschen
          </button>
        </div>
      </div>
    </div>
  )
}
