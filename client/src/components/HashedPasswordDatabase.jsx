import { useState, useEffect } from "react";
import style from "@components/PasswordDatabase.module.css";

const STORAGE_KEY = "plainPasswordDatabase";

// Simple hash function for demonstration (SHA-256 would be better in production)
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export default function HashedPasswordDatabase() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [testUsername, setTestUsername] = useState("");
  const [testPassword, setTestPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const [message, setMessage] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const loadData = async () => {
      if (
        typeof window === "undefined" ||
        typeof localStorage === "undefined"
      ) {
        return;
      }
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const data = JSON.parse(stored);
          // Ensure all entries have hash field
          const updatedData = await Promise.all(
            data.map(async (entry) => {
              if (!entry.hash && entry.password) {
                entry.hash = await hashPassword(entry.password);
              }
              return entry;
            }),
          );
          setEntries(updatedData);
        } catch (e) {
          console.error("Failed to parse stored data", e);
        }
      }
    };

    loadData();
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return;
    }
    if (entries.length > 0 || localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }
  }, [entries]);

  const handleReload = async () => {
    if (typeof window === "undefined" || typeof localStorage === "undefined") {
      return;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        // Ensure all entries have hash field
        const updatedData = await Promise.all(
          data.map(async (entry) => {
            if (!entry.hash && entry.password) {
              entry.hash = await hashPassword(entry.password);
            }
            return entry;
          }),
        );
        setEntries(updatedData);
        setMessage({ type: "info", text: "Datenbank wurde neu geladen" });
        setTimeout(() => setMessage(null), 2000);
      } catch (e) {
        console.error("Failed to parse stored data", e);
        setMessage({ type: "error", text: "Fehler beim Laden der Datenbank" });
      }
    }
  };

  const handleAddEntry = async (e) => {
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

    const hash = await hashPassword(password);
    setEntries([...entries, { username, password, hash }]);
    setUsername("");
    setPassword("");
    setMessage({
      type: "success",
      text: `Eintrag erfolgreich hinzugefügt. Hash: ${hash.substring(0, 16)}...`,
    });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleTest = async (e) => {
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

    const testHash = await hashPassword(testPassword);
    const storedHash = entry.hash || (await hashPassword(entry.password));

    if (storedHash === testHash) {
      setMessage({
        type: "success",
        text: `Login erfolgreich! Hash stimmt überein: ${testHash.substring(0, 16)}...`,
      });
    } else {
      setMessage({
        type: "error",
        text: `Login fehlgeschlagen! Hashes stimmen nicht überein.\nErwartet: ${storedHash.substring(0, 16)}...\nEingegeben: ${testHash.substring(0, 16)}...`,
      });
    }
    setTimeout(() => setMessage(null), 7000);
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
      <h3>Passwort-Datenbank (mit Hashing)</h3>
      <p style={{ fontSize: "0.9rem", marginTop: 0 }}>
        In dieser Datenbank werden die Passwörter gehasht. Die
        Original-Passwörter sind ausgegraut und dienen nur zur Kontrolle - in
        der Realität wären sie nicht sichtbar.
      </p>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufügen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="username-hash">Benutzername:</label>
            <input
              type="text"
              id="username-hash"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="password-hash">Passwort:</label>
            <input
              type="text"
              id="password-hash"
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
            <label htmlFor="testUsername-hash">Benutzername:</label>
            <input
              type="text"
              id="testUsername-hash"
              value={testUsername}
              onChange={(e) => setTestUsername(e.target.value)}
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="testPassword-hash">Passwort:</label>
            <input
              type="password"
              id="testPassword-hash"
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
        <div
          className={`${style.message} ${style[message.type]}`}
          style={{ whiteSpace: "pre-line" }}
        >
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
                <th style={{ opacity: 0.3 }}>Passwort (nur zur Kontrolle)</th>
                <th>Hash (SHA-256)</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.username}</td>
                  <td className={style.grayed}>{entry.password}</td>
                  <td
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8rem",
                      wordBreak: "break-all",
                    }}
                  >
                    {entry.hash || "wird beim nächsten Test berechnet"}
                  </td>
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
