import style from "@components/PasswordDatabase.module.css";
import { useEffect, useState } from "react";

const STORAGE_KEY = "plainPasswordDatabase";

// Simple hash function
async function hashPassword(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

// Generate a random salt
function generateSalt(length = 16) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let salt = "";
  for (let i = 0; i < length; i++) {
    salt += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return salt;
}

export default function SaltedPasswordDatabase() {
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
          // Ensure all entries have salt and hash fields
          const updatedData = await Promise.all(
            data.map(async (entry) => {
              if (!entry.salt && entry.password) {
                entry.salt = generateSalt();
              }
              if (!entry.saltedPassword && entry.password && entry.salt) {
                entry.saltedPassword = entry.password + entry.salt;
              }
              if (!entry.hash && entry.saltedPassword) {
                entry.hash = await hashPassword(entry.saltedPassword);
              } else if (!entry.hash && entry.password && entry.salt) {
                entry.hash = await hashPassword(entry.password + entry.salt);
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
        // Ensure all entries have salt and hash fields
        const updatedData = await Promise.all(
          data.map(async (entry) => {
            if (!entry.salt && entry.password) {
              entry.salt = generateSalt();
            }
            if (!entry.saltedPassword && entry.password && entry.salt) {
              entry.saltedPassword = entry.password + entry.salt;
            }
            if (!entry.hash && entry.saltedPassword) {
              entry.hash = await hashPassword(entry.saltedPassword);
            } else if (!entry.hash && entry.password && entry.salt) {
              entry.hash = await hashPassword(entry.password + entry.salt);
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

    const salt = generateSalt();
    const saltedPassword = password + salt;
    const hash = await hashPassword(saltedPassword);

    setEntries([
      ...entries,
      { username, password, salt, saltedPassword, hash },
    ]);
    setUsername("");
    setPassword("");
    setMessage({
      type: "success",
      text: `Eintrag erfolgreich hinzugefügt mit Salt: ${salt}`,
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

    const saltedPassword = testPassword + entry.salt;
    const testHash = await hashPassword(saltedPassword);
    const storedHash =
      entry.hash || (await hashPassword(entry.password + entry.salt));

    if (storedHash === testHash) {
      setMessage({
        type: "success",
        text: `Login erfolgreich!\nPasswort: ${testPassword}\nSalt: ${entry.salt}\nGesalzenes Passwort: ${saltedPassword}\nHash stimmt überein: ${testHash.substring(0, 16)}...`,
      });
    } else {
      setMessage({
        type: "error",
        text: `Login fehlgeschlagen! Hashes stimmen nicht überein.`,
      });
    }
    setTimeout(() => setMessage(null), 8000);
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
      <h3>Passwort-Datenbank (mit Salt)</h3>
      <p style={{ fontSize: "0.9rem", marginTop: 0 }}>
        In dieser Datenbank werden die Passwörter mit einem zufälligen Salt
        kombiniert, bevor sie gehasht werden. Dies macht Rainbow-Table-Attacken
        unwirksam. Ausgegraut sind nur die Werte, die nicht in der echten
        Datenbank gespeichert würden.
      </p>

      <div className={style.formGroup}>
        <h4>Neuen Eintrag hinzufügen</h4>
        <form onSubmit={handleAddEntry}>
          <div className={style.inputRow}>
            <label htmlFor="username-salt">Benutzername:</label>
            <input
              type="text"
              id="username-salt"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="password-salt">Passwort:</label>
            <input
              type="text"
              id="password-salt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.buttonGroup}>
            <button type="submit">Hinzufügen (mit zufälligem Salt)</button>
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
            />
          </div>
          <div className={style.inputRow}>
            <label htmlFor="testPassword-salt">Passwort:</label>
            <input
              type="password"
              id="testPassword-salt"
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
          <div style={{ overflowX: "auto" }}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Benutzername</th>
                  <th style={{ opacity: 0.3 }}>
                    Passwort
                    <br />
                    (nur zur Kontrolle)
                  </th>
                  <th>Salt</th>
                  <th style={{ opacity: 0.3 }}>
                    Passwort + Salt
                    <br />
                    (nur zur Kontrolle)
                  </th>
                  <th>Hash (SHA-256)</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.username}</td>
                    <td className={style.grayed}>{entry.password}</td>
                    <td
                      style={{ fontFamily: "monospace", fontSize: "0.85rem" }}
                    >
                      {entry.salt}
                    </td>
                    <td
                      className={style.grayed}
                      style={{ fontFamily: "monospace", fontSize: "0.85rem" }}
                    >
                      {entry.saltedPassword || entry.password + entry.salt}
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
          <button onClick={handleReload}>Datenbank neu laden</button>
          <button className={style.danger} onClick={handleClear}>
            Datenbank löschen
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "rgba(0, 123, 255, 0.1)",
          borderRadius: "4px",
        }}
      >
        <h4 style={{ marginTop: 0 }}>Warum Salt?</h4>
        <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>
          Selbst wenn zwei Benutzer das gleiche Passwort haben, werden durch das
          zufällige Salt unterschiedliche Hashes erzeugt. Dadurch wird jede
          Rainbow-Table nutzlos, da für jedes Salt eine neue Tabelle berechnet
          werden müsste.
        </p>
      </div>
    </div>
  );
}
