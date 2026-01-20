import { useState, useEffect } from "react";
import style from "@components/PasswordDatabase.module.css";

const STORAGE_KEY = "rainbowTable";

// Simple hash function (same as in HashedPasswordDatabase)
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

export default function RainbowTable() {
  const [password, setPassword] = useState("");
  const [searchHash, setSearchHash] = useState("");
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = async (e) => {
    e.preventDefault();
    if (!password) {
      setMessage({ type: "error", text: "Bitte ein Passwort eingeben" });
      return;
    }

    const hash = await hashPassword(password);

    // Check if this hash already exists
    const existingEntry = entries.find((entry) => entry.hash === hash);
    if (existingEntry) {
      setMessage({
        type: "error",
        text: `Dieser Hash existiert bereits (Passwort: ${existingEntry.password})`,
      });
      return;
    }

    setEntries([...entries, { password, hash }]);
    setPassword("");
    setMessage({
      type: "success",
      text: `Eintrag hinzugefügt: ${password} → ${hash.substring(0, 16)}...`,
    });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchHash) {
      setMessage({
        type: "error",
        text: "Bitte einen Hash zum Suchen eingeben",
      });
      return;
    }

    const entry = entries.find(
      (e) => e.hash === searchHash || e.hash.startsWith(searchHash),
    );
    if (entry) {
      setMessage({
        type: "success",
        text: `✓ Hash gefunden! Das Original-Passwort ist: "${entry.password}"`,
      });
    } else {
      setMessage({
        type: "error",
        text: "× Hash nicht in der Rainbow-Table gefunden. Passwort kann nicht entschlüsselt werden.",
      });
    }
    setTimeout(() => setMessage(null), 7000);
  };

  const handleClear = () => {
    if (confirm("Möchten Sie wirklich die gesamte Rainbow-Table löschen?")) {
      setEntries([]);
      localStorage.removeItem(STORAGE_KEY);
      setMessage({ type: "info", text: "Rainbow-Table wurde gelöscht" });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleGenerateCommon = async () => {
    const commonPasswords = [
      "123456",
      "password",
      "123456789",
      "12345678",
      "12345",
      "qwerty",
      "abc123",
      "letmein",
      "admin",
      "welcome",
      "monkey",
      "dragon",
      "master",
      "sunshine",
      "princess",
    ];

    const newEntries = [];
    for (const pwd of commonPasswords) {
      const hash = await hashPassword(pwd);
      // Only add if not already in table
      if (!entries.find((e) => e.hash === hash)) {
        newEntries.push({ password: pwd, hash });
      }
    }

    if (newEntries.length > 0) {
      setEntries([...entries, ...newEntries]);
      setMessage({
        type: "success",
        text: `${newEntries.length} häufige Passwörter zur Rainbow-Table hinzugefügt`,
      });
    } else {
      setMessage({
        type: "info",
        text: "Alle häufigen Passwörter sind bereits in der Tabelle",
      });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className={style.wrapper}>
      <h3>Rainbow-Table</h3>
      <p style={{ fontSize: "0.9rem", marginTop: 0 }}>
        Eine Rainbow-Table speichert Passwörter zusammen mit ihren Hashes. So
        können Hashes wieder in Passwörter "umgewandelt" werden.
      </p>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufügen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="password-rainbow">Passwort:</label>
            <input
              type="text"
              id="password-rainbow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="z.B. passwort123"
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Hinzufügen</button>
            <button type="button" onClick={handleGenerateCommon}>
              Häufige Passwörter generieren
            </button>
          </div>
        </form>
      </div>

      <div className={style.formGroup}>
        <h4>Hash suchen (Passwort "knacken")</h4>
        <form onSubmit={handleSearch}>
          <div className={style.inputRow}>
            <label htmlFor="searchHash">Hash:</label>
            <input
              type="text"
              id="searchHash"
              value={searchHash}
              onChange={(e) => setSearchHash(e.target.value)}
              placeholder="Hash eingeben oder erste Zeichen..."
              style={{ fontFamily: "monospace", fontSize: "0.9rem" }}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Suchen</button>
          </div>
        </form>
      </div>

      {message && (
        <div className={`${style.message} ${style[message.type]}`}>
          {message.text}
        </div>
      )}

      <div>
        <h4>Rainbow-Table Einträge ({entries.length})</h4>
        {entries.length === 0 ? (
          <p>
            Keine Einträge vorhanden. Fügen Sie Passwörter hinzu oder generieren
            Sie häufige Passwörter.
          </p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Passwort</th>
                <th>Hash (SHA-256)</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.password}</td>
                  <td
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      wordBreak: "break-all",
                    }}
                  >
                    {entry.hash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className={style.buttonGroup} style={{ marginTop: "1rem" }}>
          <button className={style.danger} onClick={handleClear}>
            Rainbow-Table löschen
          </button>
        </div>
      </div>
    </div>
  );
}
