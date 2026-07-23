import style from "@components/PasswordDatabase.module.css";
import { sha256, usePasswordDb } from "@components/usePasswordDb";
import { useState } from "react";

export default function SaltedPasswordDatabase() {
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
    const entry = await addEntry({ username, password });
    setUsername("");
    setPassword("");
    setMessage({
      type: "success",
      text: `Eintrag hinzugefuegt. Salt: ${entry.salt}`,
    });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleTest = async (e) => {
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
    const testHash = await sha256(testPassword + entry.salt);
    if (entry.hash === testHash) {
      setMessage({
        type: "success",
        text: `Login erfolgreich!\nSalt: ${entry.salt}\nHash stimmt ueberein: ${testHash.substring(0, 16)}...`,
      });
    } else {
      setMessage({
        type: "error",
        text: "Login fehlgeschlagen! Hashes stimmen nicht ueberein.",
      });
    }
    setTimeout(() => setMessage(null), 8000);
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
      <h3>Passwort-Datenbank (mit Salt)</h3>
      <p style={{ fontSize: "0.9rem", marginTop: 0 }}>
        Die Datenbank speichert nur Salt und Hash -- das Passwort selbst wird
        nicht gespeichert. Durchgestrichene Spalten stehen nicht in der echten
        Datenbank.
      </p>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufuegen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="username-salt">Benutzername:</label>
            <input
              type="text"
              id="username-salt"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="password-salt">Passwort:</label>
            <input
              type="text"
              id="password-salt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Hinzufuegen (mit zufaelligem Salt)</button>
          </div>
        </form>
      </div>

      <div className={style.formGroup}>
        <h4>Login testen</h4>
        <form onSubmit={handleTest}>
          <div className={style.inputRow}>
            <label htmlFor="testUsername-salt">Benutzername:</label>
            <input
              type="text"
              id="testUsername-salt"
              value={testUsername}
              onChange={(e) => setTestUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="testPassword-salt">Passwort:</label>
            <input
              type="password"
              id="testPassword-salt"
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
          style={{ whiteSpace: "pre-line" }}
        >
          {message.text}
        </div>
      )}

      <div>
        <h4>Datenbank-Eintraege ({entries.length})</h4>
        {entries.length === 0 ? (
          <p>Keine Eintraege vorhanden</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Benutzername</th>
                  <th className={style.grayedStrike}>Passwort</th>
                  <th>Salt</th>
                  <th className={style.grayedStrike}>Passwort + Salt</th>
                  <th>Hash (SHA-256)</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.username}</td>
                    <td className={style.grayedStrike}>••••••••</td>
                    <td
                      style={{ fontFamily: "monospace", fontSize: "0.85rem" }}
                    >
                      {entry.salt}
                    </td>
                    <td
                      className={style.grayedStrike}
                      style={{ fontFamily: "monospace", fontSize: "0.85rem" }}
                    >
                      ••••••••{entry.salt}
                    </td>
                    <td
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.7rem",
                        wordBreak: "break-all",
                      }}
                    >
                      {entry.hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className={style.buttonGroup} style={{ marginTop: "1rem" }}>
          <button className={style.danger} onClick={handleClear}>
            Datenbank loeschen
          </button>
        </div>
      </div>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          borderRadius: "4px",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Warum Salt?</h4>
        <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
          Selbst wenn zwei Benutzer das gleiche Passwort haben, erzeugt das
          zufaellige Salt unterschiedliche Hashes. Rainbow-Tables werden dadurch
          nutzlos -- fuer jedes Salt muesste eine neue Tabelle berechnet werden.
        </p>
      </div>
    </div>
  );
}
