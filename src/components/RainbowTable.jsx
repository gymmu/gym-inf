import { useState, useEffect, useRef } from "react"
import style from "@components/PasswordDatabase.module.css"
import rt from "@components/RainbowTable.module.css"

const STORAGE_KEY = "rainbowTable"

async function sha256(text) {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const buf = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

// -- Gestohlene Datenbank --------------------------------------------------
// Einige Passwoerter kommen in den haeufigen Passwoertern vor (knackbar),
// andere nicht (sicher gegen Rainbow-Table).

const STOLEN_DB = [
  { user: "alice", hash: null, plain: "123456" }, // knackbar
  { user: "bob", hash: null, plain: "qwerty" }, // knackbar
  { user: "charlie", hash: null, plain: "letmein" }, // knackbar
  { user: "diana", hash: null, plain: "korrektpferd" }, // nicht knackbar
  { user: "eve", hash: null, plain: "password" }, // knackbar
  { user: "frank", hash: null, plain: "blauerhimmel" }, // nicht knackbar
]

const COMMON_PASSWORDS = [
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
]

// -- Component -------------------------------------------------------------

export default function RainbowTable() {
  const [rtEntries, setRtEntries] = useState([]) // rainbow table
  const [stolenDb, setStolenDb] = useState([]) // gestohlene DB mit echten hashes
  const [addPwd, setAddPwd] = useState("")
  const [searchHash, setSearchHash] = useState("")
  const [searchResult, setSearchResult] = useState(null) // null | { found, entry }
  const [calcPwd, setCalcPwd] = useState("")
  const [calcHash, setCalcHash] = useState(null)
  const [message, setMessage] = useState(null)
  const initialized = useRef(false)

  // -- Build stolen DB hashes once ------------------------------------------
  useEffect(() => {
    const run = async () => {
      const rows = await Promise.all(
        STOLEN_DB.map(async (row) => ({
          ...row,
          hash: await sha256(row.plain),
        })),
      )
      setStolenDb(rows)
    }
    run()
  }, [])

  // -- Load rainbow table from localStorage ----------------------------------
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setRtEntries(JSON.parse(stored))
      } catch (e) {
        console.error("RainbowTable load error", e)
      }
    }
    initialized.current = true
  }, [])

  useEffect(() => {
    if (!initialized.current) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rtEntries))
  }, [rtEntries])

  // -- Handlers --------------------------------------------------------------

  const handleAddEntry = async (e) => {
    e.preventDefault()
    if (!addPwd) return
    const hash = await sha256(addPwd)
    if (rtEntries.find((e) => e.hash === hash)) {
      setMessage({
        type: "info",
        text: `"${addPwd}" ist bereits in der Tabelle`,
      })
      setTimeout(() => setMessage(null), 3000)
      setAddPwd("")
      return
    }
    setRtEntries((prev) => [...prev, { password: addPwd, hash }])
    setAddPwd("")
    setMessage({ type: "success", text: `"${addPwd}" hinzugefuegt` })
    setTimeout(() => setMessage(null), 3000)
  }

  const handleGenerateCommon = async () => {
    const toAdd = []
    for (const pwd of COMMON_PASSWORDS) {
      const hash = await sha256(pwd)
      if (!rtEntries.find((e) => e.hash === hash))
        toAdd.push({ password: pwd, hash })
    }
    if (toAdd.length === 0) {
      setMessage({
        type: "info",
        text: "Alle haeufigen Passwoerter bereits in der Tabelle",
      })
    } else {
      setRtEntries((prev) => [...prev, ...toAdd])
      setMessage({
        type: "success",
        text: `${toAdd.length} Eintraege hinzugefuegt`,
      })
    }
    setTimeout(() => setMessage(null), 3000)
  }

  const handleSearch = (hashToSearch) => {
    const h = (hashToSearch ?? searchHash).trim()
    if (!h) return
    setSearchHash(h)
    const found = rtEntries.find((e) => e.hash === h || e.hash.startsWith(h))
    setSearchResult({ found: !!found, entry: found ?? null, searched: h })
  }

  const handleCalc = async (e) => {
    e.preventDefault()
    if (!calcPwd) return
    const h = await sha256(calcPwd)
    setCalcHash(h)
  }

  const handleClear = () => {
    if (confirm("Rainbow-Table wirklich loeschen?")) {
      setRtEntries([])
      localStorage.removeItem(STORAGE_KEY)
      setSearchResult(null)
    }
  }

  // -- Render ----------------------------------------------------------------

  const crackable = stolenDb.filter((row) =>
    rtEntries.some((e) => e.hash === row.hash),
  ).length

  return (
    <div className={rt.root}>
      {/* ===== Linke Spalte: Gestohlene Datenbank ===== */}
      <div className={rt.panel}>
        <div className={rt.panelTitle}>Gestohlene Datenbank</div>
        <p className={rt.panelDesc}>
          Eve hat diese Tabelle erbeutet. Nur Benutzernamen und Hashes -- keine
          Klartextpasswoerter.
        </p>

        <table className={rt.stolenTable}>
          <thead>
            <tr>
              <th>Benutzer</th>
              <th>Hash (SHA-256)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {stolenDb.map((row) => {
              const inRt = rtEntries.some((e) => e.hash === row.hash)
              const isSearched = searchResult?.searched === row.hash
              return (
                <tr
                  key={row.user}
                  className={
                    isSearched ? rt.rowSearched : inRt ? rt.rowCrackable : ""
                  }>
                  <td className={rt.stolenUser}>{row.user}</td>
                  <td className={rt.stolenHash}>
                    {row.hash
                      ? row.hash.substring(0, 16) + "..."
                      : "wird berechnet..."}
                  </td>
                  <td>
                    <button
                      className={rt.lookupBtn}
                      disabled={!row.hash}
                      onClick={() => handleSearch(row.hash)}
                      title="In Rainbow-Table nachschlagen">
                      nachschlagen
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {rtEntries.length > 0 && (
          <div className={rt.crackSummary}>
            <span
              className={rt.crackCount}
              style={{ color: crackable > 0 ? "#fb4934" : "#b8bb26" }}>
              {crackable} / {stolenDb.length}
            </span>{" "}
            Passwoerter knackbar
          </div>
        )}

        {/* Hash-Rechner */}
        <div className={rt.calcBox}>
          <div className={rt.calcTitle}>Hash berechnen (nur testen)</div>
          <form onSubmit={handleCalc} className={rt.calcForm}>
            <input
              type="text"
              value={calcPwd}
              onChange={(e) => setCalcPwd(e.target.value)}
              placeholder="Passwort eingeben..."
              autoComplete="off"
              className={rt.calcInput}
            />
            <button type="submit" className={rt.calcBtn}>
              berechnen
            </button>
          </form>
          {calcHash && (
            <div className={rt.calcResult}>
              <span className={rt.calcResultLabel}>SHA-256:</span>
              <span className={rt.calcResultHash}>{calcHash}</span>
            </div>
          )}
        </div>
      </div>

      {/* ===== Rechte Spalte: Rainbow-Table ===== */}
      <div className={rt.panel}>
        <div className={rt.panelTitle}>Rainbow-Table (Eve&apos;s Tabelle)</div>
        <p className={rt.panelDesc}>
          Vorberechnete Passwoerter mit ihren Hashes. Je mehr Eintraege, desto
          mehr Hashes lassen sich knacken.
        </p>

        <div className={rt.addRow}>
          <form onSubmit={handleAddEntry} className={rt.addForm}>
            <input
              type="text"
              value={addPwd}
              onChange={(e) => setAddPwd(e.target.value)}
              placeholder="Passwort hinzufuegen..."
              autoComplete="off"
              className={rt.addInput}
            />
            <button type="submit" className={rt.addBtn}>
              +
            </button>
          </form>
          <button className={rt.genBtn} onClick={handleGenerateCommon}>
            Haeufige Passwoerter laden
          </button>
        </div>

        {message && (
          <div className={`${style.message} ${style[message.type]}`}>
            {message.text}
          </div>
        )}

        {/* Suchergebnis */}
        {searchResult && (
          <div
            className={searchResult.found ? rt.resultFound : rt.resultNotFound}>
            {searchResult.found ? (
              <>
                <span className={rt.resultIcon}>&#10003;</span>
                <span>
                  Passwort gefunden:{" "}
                  <strong>&quot;{searchResult.entry.password}&quot;</strong>
                </span>
              </>
            ) : (
              <>
                <span className={rt.resultIcon}>&#10007;</span>
                <span>Hash nicht in der Tabelle -- Passwort unbekannt</span>
              </>
            )}
          </div>
        )}

        {/* Rainbow-Table Eintraege */}
        {rtEntries.length === 0 ? (
          <p className={rt.emptyNote}>
            Tabelle leer. Passwoerter hinzufuegen oder haeufige laden.
          </p>
        ) : (
          <div className={rt.tableWrap}>
            <table className={rt.rtTable}>
              <thead>
                <tr>
                  <th>Passwort</th>
                  <th>Hash (SHA-256)</th>
                </tr>
              </thead>
              <tbody>
                {rtEntries.map((entry, i) => {
                  const isHit =
                    searchResult?.found &&
                    searchResult.entry.hash === entry.hash
                  return (
                    <tr key={i} className={isHit ? rt.rtRowHit : ""}>
                      <td>{entry.password}</td>
                      <td className={rt.rtHash}>{entry.hash}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className={style.buttonGroup} style={{ marginTop: "0.75rem" }}>
          <button className={style.danger} onClick={handleClear}>
            Tabelle loeschen
          </button>
        </div>
      </div>
    </div>
  )
}
