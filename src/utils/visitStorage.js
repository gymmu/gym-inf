const DB_NAME = "gym-inf-visit-store";
const DB_STORE = "visits";
const DB_VERSION = 1;

const LS_LAST_VISIT_KEY = "gym-inf-last-visit";
const LS_VISIT_HISTORY_KEY = "gym-inf-visit-history";
const LS_FMS_KEY = "gym-inf-fms";

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

function dbSet(key, value) {
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

function safeGetItem(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function safeRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

export async function saveLastVisit(path) {
  const success = safeSetItem(LS_LAST_VISIT_KEY, {
    path,
    timestamp: Date.now(),
  });
  if (!success) {
    try {
      await dbSet("lastVisit", { path, timestamp: Date.now() });
    } catch {
      // ignore
    }
  }
}

export async function loadLastVisit() {
  let data = safeGetItem(LS_LAST_VISIT_KEY);
  if (data) {
    return data.path;
  }
  try {
    data = await dbGet("lastVisit");
    if (data) {
      return data.path;
    }
  } catch {
    // ignore
  }
  return null;
}

export async function clearLastVisit() {
  safeRemoveItem(LS_LAST_VISIT_KEY);
  try {
    await dbDelete("lastVisit");
  } catch {
    // ignore
  }
}

export async function saveVisitHistory(history) {
  const success = safeSetItem(LS_VISIT_HISTORY_KEY, history);
  if (!success) {
    try {
      await dbSet("visitHistory", history);
    } catch {
      // ignore
    }
  }
}

export async function loadVisitHistory() {
  let data = safeGetItem(LS_VISIT_HISTORY_KEY);
  if (data) {
    return data;
  }
  try {
    data = await dbGet("visitHistory");
    if (data) {
      return data;
    }
  } catch {
    // ignore
  }
  return [];
}

export async function saveFms(fms) {
  const success = safeSetItem(LS_FMS_KEY, fms);
  if (!success) {
    try {
      await dbSet("fms", fms);
    } catch {
      // ignore
    }
  }
}

export async function loadFms() {
  let data = safeGetItem(LS_FMS_KEY);
  if (data !== null) {
    return data;
  }
  try {
    data = await dbGet("fms");
    if (data !== null) {
      return data;
    }
  } catch {
    // ignore
  }
  return null;
}

export async function clearFms() {
  safeRemoveItem(LS_FMS_KEY);
  try {
    await dbDelete("fms");
  } catch {
    // ignore
  }
}
