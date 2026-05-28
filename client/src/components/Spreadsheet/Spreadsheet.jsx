import { useEffect, useRef, useState } from "react"
import jspreadsheet from "jspreadsheet-ce"
import "jspreadsheet-ce/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import "./spreadsheet-global.css"
import styles from "./Spreadsheet.module.css"

const DB_NAME = "gym-inf-spreadsheets"
const DB_VERSION = 1
const STORE_NAME = "tables"

async function requestPersistence() {
  try {
    if (navigator.storage?.persist) {
      await navigator.storage.persist()
    }
  } catch {
    // Not available or denied — fall through silently
  }
}

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = (e) => {
      e.target.result.createObjectStore(STORE_NAME)
    }
    request.onsuccess = (e) => resolve(e.target.result)
    request.onerror = (e) => reject(e.target.error)
  })
}

async function loadFromDB(key) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly")
    const req = tx.objectStore(STORE_NAME).get(key)
    req.onsuccess = (e) => resolve(e.target.result ?? null)
    req.onerror = (e) => reject(e.target.error)
  })
}

async function saveToDB(key, value) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite")
    const req = tx.objectStore(STORE_NAME).put(value, key)
    req.onsuccess = () => resolve()
    req.onerror = (e) => reject(e.target.error)
  })
}

async function deleteFromDB(key) {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite")
    const req = tx.objectStore(STORE_NAME).delete(key)
    req.onsuccess = () => resolve()
    req.onerror = (e) => reject(e.target.error)
  })
}

/**
 * Spreadsheet component powered by jspreadsheet-ce.
 *
 * Props:
 *   storageKey    – unique string used as the IndexedDB key for persistence
 *   columns       – jspreadsheet column definitions
 *   data          – default data (2D array) used when no saved data exists
 *   minDimensions – [cols, rows] minimum table size
 */
export default function Spreadsheet({
  storageKey,
  columns,
  data: defaultData,
  minDimensions,
}) {
  const containerRef = useRef(null)
  const [confirmReset, setConfirmReset] = useState(false)

  function mountSpreadsheet(data) {
    if (!containerRef.current) return

    // Destroy any existing instance on this container
    if (containerRef.current.spreadsheet) {
      jspreadsheet.destroy(containerRef.current)
    }

    // IMPORTANT: onchange must be on the TOP-LEVEL config object.
    // jspreadsheet dispatches events via r.config[eventName] where r is the
    // spreadsheet root — not the worksheet. Placing onchange inside worksheets[]
    // silently ignores it and nothing gets saved.
    jspreadsheet(containerRef.current, {
      onchange: async (worksheet) => {
        try {
          const currentData = worksheet.getData()
          await saveToDB(storageKey, currentData)
        } catch {
          // Storage error – non-critical
        }
      },
      worksheets: [
        {
          data,
          columns,
          minDimensions,
          tableOverflow: true,
        },
      ],
    })
  }

  useEffect(() => {
    let cancelled = false

    async function init() {
      await requestPersistence()

      let initialData = defaultData
      try {
        const saved = await loadFromDB(storageKey)
        if (saved) initialData = saved
      } catch {
        // Fall through to default data
      }

      if (cancelled || !containerRef.current) return
      mountSpreadsheet(initialData)
    }

    init()

    return () => {
      cancelled = true
      if (containerRef.current?.spreadsheet) {
        try {
          jspreadsheet.destroy(containerRef.current)
        } catch {
          // ignore
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleReset() {
    if (!confirmReset) {
      setConfirmReset(true)
      return
    }

    try {
      await deleteFromDB(storageKey)
    } catch {
      // ignore
    }

    mountSpreadsheet(defaultData)
    setConfirmReset(false)
  }

  function handleResetCancel() {
    setConfirmReset(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div ref={containerRef} />
      </div>
      <div className={styles.toolbar}>
        {confirmReset ? (
          <>
            <span className={styles.confirmText}>
              Alle Änderungen verwerfen?
            </span>
            <button
              className={`${styles.btn} ${styles.btnDanger}`}
              onClick={handleReset}>
              Ja, zurücksetzen
            </button>
            <button
              className={`${styles.btn} ${styles.btnCancel}`}
              onClick={handleResetCancel}>
              Abbrechen
            </button>
          </>
        ) : (
          <button
            className={`${styles.btn} ${styles.btnReset}`}
            onClick={handleReset}>
            Zurücksetzen
          </button>
        )}
      </div>
    </div>
  )
}
