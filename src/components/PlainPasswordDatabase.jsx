import style from "@components/PasswordDatabase.module.css";
import { usePasswordDb } from "@components/usePasswordDb";
import { useState } from "react";

export default function PlainPasswordDatabase() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [testUsername, setTestUsername] = useState("");
  const [testPassword, setTestPassword] = useState("");
  const [message, setMessage] = useState(null);

  const [entries, addEntry, clearEntries] = usePasswordDb();

  const handleAddEntry = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage({
        type: "error",
        text: "Bitte Benutzername und Passwort eingeben",
      });
      return;
    }
    if (entries.find((entry) => entry.username === username)) {
      setMessage({ type: "error", text: "Benutzername existiert bereits" });
      return;
    }
    await addEntry({ username, password });
    setUsername("");
    setPassword("");
    setMessage({ type: "success", text: "Eintrag erfolgreich hinzugefuegt" });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleTest = (e) => {
    e.preventDefault();
    if (!testUsername || !testPassword) {
      setMessage({
        type: "error",
        text: "Bitte Benutzername und Passwort eingeben",
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
    if (confirm("Moechten Sie wirklich die gesamte Datenbank loeschen?")) {
      clearEntries();
      setMessage({ type: "info", text: "Datenbank wurde geloescht" });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className={style.wrapper}>
      <h3>Passwort-Datenbank (Klartext)</h3>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufuegen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="username">Benutzername:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="password">Passwort:</label>
            <input
              type="text"
              id="password"
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
            <label htmlFor="testUsername">Benutzername:</label>
            <input
              type="text"
              id="testUsername"
              value={testUsername}
              onChange={(e) => setTestUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="testPassword">Passwort:</label>
            <input
              type="password"
              id="testPassword"
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
        <div className={`${style.message} ${style[message.type]}`}>
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
          <button className={style.danger} onClick={handleClear}>
            Datenbank loeschen
          </button>
        </div>
      </div>
    </div>
  );
}
