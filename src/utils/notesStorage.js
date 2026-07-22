const DB_NAME = "gym-inf-notes";
const DB_STORE = "notes";
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB not supported"));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbGet(key) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readonly");
      const store = tx.objectStore(DB_STORE);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  });
}

function dbPut(key, value) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      const store = tx.objectStore(DB_STORE);
      store.put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  });
}

function dbDelete(key) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      const store = tx.objectStore(DB_STORE);
      store.delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  });
}

function dbClear() {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readwrite");
      const store = tx.objectStore(DB_STORE);
      store.clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  });
}

export async function saveNote(slug, content) {
  const note = {
    slug,
    content,
    updatedAt: Date.now(),
  };
  await dbPut(slug, note);
  return note;
}

export async function getNote(slug) {
  const note = await dbGet(slug);
  return note || null;
}

export async function deleteNote(slug) {
  await dbDelete(slug);
}

export async function getAllNotes() {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(DB_STORE, "readonly");
      const store = tx.objectStore(DB_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  });
}

export async function hasNote(slug) {
  const note = await dbGet(slug);
  return !!note;
}

export async function createNote(slug, content = "") {
  const note = {
    slug,
    content,
    updatedAt: Date.now(),
  };
  await dbPut(slug, note);
  return note;
}

export async function exportNotes() {
  const notes = await getAllNotes();
  const exportData = {
    version: 1,
    exportedAt: Date.now(),
    notes: notes.map((n) => ({
      slug: n.slug,
      content: n.content,
      updatedAt: n.updatedAt,
    })),
  };
  return exportData;
}

export function downloadNotes(exportData) {
  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `gym-inf-notes-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export async function importNotes(exportData) {
  if (!exportData?.notes || !Array.isArray(exportData.notes)) {
    throw new Error("Ungültiges Notiz-Format");
  }
  const merged = [];
  for (const note of exportData.notes) {
    const existing = await dbGet(note.slug);
    if (!existing || existing.updatedAt < note.updatedAt) {
      await dbPut(note.slug, {
        slug: note.slug,
        content: note.content,
        updatedAt: note.updatedAt || Date.now(),
      });
      merged.push(note.slug);
    }
  }
  return merged;
}
