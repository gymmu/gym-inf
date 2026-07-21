import { useState, useEffect, useRef } from "react"

export const STORAGE_KEY = "passwordDb"

// -- Helpers ---------------------------------------------------------------

export async function sha256(text) {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

export function generateSalt(length = 16) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let salt = ""
  for (let i = 0; i < length; i++) {
    salt += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return salt
}

// -- Normalize -------------------------------------------------------------
// Ensures every entry has salt + hash. Called once on load so that entries
// added by PlainPasswordDatabase (which only store username + password) are
// automatically enriched before HashedPasswordDatabase or
// SaltedPasswordDatabase read them.

async function normalizeEntries(raw) {
  return Promise.all(
    raw.map(async (entry) => {
      const out = { username: entry.username, password: entry.password }
      // Generate salt if missing
      if (!entry.salt) {
        out.salt = generateSalt()
      } else {
        out.salt = entry.salt
      }
      // Compute hash if missing or salt changed
      if (!entry.hash) {
        out.hash = await sha256(out.password + out.salt)
      } else {
        out.hash = entry.hash
      }
      return out
    }),
  )
}

// -- Hook ------------------------------------------------------------------
// Returns [entries, addEntry, clearEntries]
// addEntry expects { username, password } -- salt + hash are computed here.

export function usePasswordDb() {
  const [entries, setEntries] = useState([])
  const initialized = useRef(false)

  // Load + normalize on mount
  useEffect(() => {
    const run = async () => {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          const raw = JSON.parse(stored)
          const normalized = await normalizeEntries(raw)
          // Save normalized back (fills in any missing salt/hash)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
          setEntries(normalized)
        } catch (e) {
          console.error("usePasswordDb: failed to load", e)
        }
      }
      initialized.current = true
    }
    run()
  }, [])

  // Persist on every change after initial load
  useEffect(() => {
    if (!initialized.current) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const addEntry = async ({ username, password }) => {
    const salt = generateSalt()
    const hash = await sha256(password + salt)
    const entry = { username, password, salt, hash }
    setEntries((prev) => {
      const next = [...prev, entry]
      // Write immediately so other components see it on next mount
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
    return entry
  }

  const clearEntries = () => {
    setEntries([])
    localStorage.removeItem(STORAGE_KEY)
  }

  return [entries, addEntry, clearEntries]
}
