import { useState, useEffect } from "react";
import style from "@components/PasswordDatabase.module.css";

const STORAGE_KEY = "plainPasswordDatabase";

export default function PlainPasswordDatabase() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [testUsername, setTestUsername] = useState("");
  const [testPassword, setTestPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored data", e);
      }
    }
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    if (entries.length > 0 || localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }
  }, [entries]);

  const handleReload = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
        setMessage({ type: "info", text: "Datenbank wurde neu geladen" });
        setTimeout(() => setMessage(null), 2000);
      } catch (e) {
        console.error("Failed to parse stored data", e);
        setMessage({ type: "error", text: "Fehler beim Laden der Datenbank" });
      }
    }
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage({
        type: "error",
        text: "Bitte Benutzername und Passwort eingeben",
      });
      return;
    }

    const existingEntry = entries.find((entry) => entry.username === username);
    if (existingEntry) {
      setMessage({ type: "error", text: "Benutzername existiert bereits" });
      return;
    }

    setEntries([...entries, { username, password }]);
    setUsername("");
    setPassword("");
    setMessage({ type: "success", text: "Eintrag erfolgreich hinzugefügt" });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleTest = (e) => {
    e.preventDefault();
    if (!testUsername || !testPassword) {
      setMessage({
        type: "error",
        text: "Bitte Benutzername und Passwort zum Testen eingeben",
      });
      return;
    }

    const entry = entries.find((e) => e.username === testUsername);
    if (!entry) {
      setMessage({ type: "error", text: "Benutzername nicht gefunden" });
      return;
    }

    if (entry.password === testPassword) {
      setMessage({
        type: "success",
        text: "Login erfolgreich! Passwort ist korrekt.",
      });
    } else {
      setMessage({
        type: "error",
        text: "Login fehlgeschlagen! Passwort ist falsch.",
      });
    }
    setTimeout(() => setMessage(null), 5000);
  };

  const handleClear = () => {
    if (confirm("Möchten Sie wirklich die gesamte Datenbank löschen?")) {
      setEntries([]);
      localStorage.removeItem(STORAGE_KEY);
      setMessage({ type: "info", text: "Datenbank wurde gelöscht" });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className={style.wrapper}>
      <h3>Passwort-Datenbank (Klartext)</h3>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufügen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="username">Benutzername:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="password">Passwort:</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Hinzufügen</button>
          </div>
        </form>
      </div>

      <div className={style.formGroup}>
        <h4>Login testen</h4>
        <form onSubmit={handleTest}>
          <div className={style.inputRow}>
            <label htmlFor="testUsername">Benutzername:</label>
            <input
              type="text"
              id="testUsername"
              value={testUsername}
              onChange={(e) => setTestUsername(e.target.value)}
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="testPassword">Passwort:</label>
            <input
              type="password"
              id="testPassword"
              value={testPassword}
              onChange={(e) => setTestPassword(e.target.value)}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Testen</button>
          </div>
        </form>
      </div>

      {message && (
        <div className={`${style.message} ${style[message.type]}`}>
          {message.text}
        </div>
      )}

      <div>
        <h4>Datenbank-Einträge ({entries.length})</h4>
        {entries.length === 0 ? (
          <p>Keine Einträge vorhanden</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Benutzername</th>
                <th>Passwort</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.username}</td>
                  <td>{entry.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className={style.buttonGroup} style={{ marginTop: "1rem" }}>
          <button onClick={handleReload}>Datenbank neu laden</button>
          <button className={style.danger} onClick={handleClear}>
            Datenbank löschen
          </button>
        </div>
      </div>
    </div>
  );
}
