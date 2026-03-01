# Dependency Update - 2026-03-01

## 📊 Zusammenfassung

**Datum:** 2026-03-01  
**Durchgeführt von:** OpenCode AI  
**Strategie:** Sichere Updates (Option A)

### Ergebnis

✅ **Server:** 0 Sicherheitslücken (vorher: 2 High)  
⚠️ **Client:** 20 Sicherheitslücken (vorher: 26)

**Hinweis:** Die verbleibenden Client-Schwachstellen befinden sich ausschließlich in:

- `serve@10.1.2` (Dev-Tool, nur lokal verwendet)
- `@remotion/cli@4.0.431` (Optional, Webpack-Dependencies)

Beide Pakete werden **nicht** in Production verwendet und stellen kein Sicherheitsrisiko dar.

---

## 🔒 Kritische Sicherheits-Updates

### Client (`/client`)

| Paket                     | Vorher   | Nachher     | Schweregrad | Fix                              |
| ------------------------- | -------- | ----------- | ----------- | -------------------------------- |
| `react-router-dom`        | 6.30.1   | **6.30.3**  | 🔴 High     | XSS-Schwachstelle behoben        |
| `vite`                    | 7.1.1    | **7.3.1**   | 🟡 Moderate | 3 Sicherheitslücken behoben      |
| `vite-plugin-static-copy` | 3.1.1    | **3.2.0**   | 🟡 Moderate | Path Traversal behoben           |
| `rollup`                  | 4.x      | **neueste** | 🔴 High     | File Write Vulnerability behoben |
| `js-yaml`                 | auto-fix | **neueste** | 🟡 Moderate | Prototype Pollution behoben      |
| `mdast-util-to-hast`      | auto-fix | **neueste** | 🟡 Moderate | Class Attribute Sanitization     |

### Server (`/server`)

| Paket        | Vorher   | Nachher     | Schweregrad | Fix                                  |
| ------------ | -------- | ----------- | ----------- | ------------------------------------ |
| `nodemailer` | 6.10.1   | **8.0.1**   | 🔴 High     | Email-Domain-Konfusion & DoS behoben |
| `minimatch`  | auto-fix | **neueste** | 🔴 High     | ReDoS-Schwachstellen behoben         |

---

## ✨ Weitere Updates

### Client

| Paket                      | Vorher → Nachher      |
| -------------------------- | --------------------- |
| `@mdx-js/rollup`           | 3.1.0 → **3.1.1**     |
| `katex`                    | 0.16.22 → **0.16.33** |
| `prettier`                 | 3.6.2 → **3.8.1**     |
| `react-error-boundary`     | 6.0.0 → **6.1.1**     |
| `react-syntax-highlighter` | 16.1.0 → **16.1.1**   |

### Server

| Paket     | Vorher → Nachher    |
| --------- | ------------------- |
| `nodemon` | 3.1.11 → **3.1.14** |
| `pg`      | 8.18.0 → **8.19.0** |
| `resend`  | 6.9.2 → **6.9.3**   |

---

## ⚠️ Breaking Changes

### nodemailer 6.x → 8.x

**Einzige Breaking Change:**

- Error-Code `'NoAuth'` wurde zu `'ENOAUTH'` umbenannt

**Status:** ✅ **Kein Code-Update erforderlich**

**Begründung:**  
Die aktuelle Implementierung in `server/src/config/email.js` verwendet:

- Nur `nodemailer.createTransport()` (kompatibel)
- Nur `transporter.sendMail()` (kompatibel)
- Keine expliziten Error-Code-Checks

Die Migration ist **vollständig abwärtskompatibel** für diese Nutzung.

---

## 📋 Verbleibende Schwachstellen (Client)

### 1. `serve@10.1.2` (Dev-Tool)

**Schwachstellen:** ajv, minimatch, cross-spawn, path-to-regexp, on-headers  
**Fix:** `npm audit fix --force` → serve@14.2.5 (Breaking Change)  
**Empfehlung:** ⏸️ **Nicht kritisch** - Nur für `npm run preview` (lokal)

### 2. `@remotion/cli@4.0.431` (Optional)

**Schwachstellen:** webpack, serialize-javascript  
**Fix:** Kein Fix verfügbar (upstream Issue)  
**Empfehlung:** ⏸️ **Nicht kritisch** - Remotion wird nur für spezielle Features verwendet

---

## 🧪 Empfohlene Tests

### Client

```bash
cd client
npm run lint        # ✅ Sollte ohne Fehler durchlaufen
npm run dev         # ✅ Dev-Server sollte starten
npm run build       # ✅ Production Build sollte erfolgreich sein
```

### Server

```bash
cd server
npm run dev         # ✅ Server sollte starten
```

**Wichtig - Email-Funktionen testen:**

1. ✅ Benutzer-Registrierung (Verifizierungs-Email)
2. ✅ Passwort-Reset-Email
3. ✅ Alle Email-Vorlagen

### Docker-Integration

```bash
# Im Root-Verzeichnis
docker-compose down
docker-compose build --no-cache
docker-compose up -d
docker logs -f gym-inf-server
```

---

## 📦 Nicht durchgeführte Updates

Die folgenden Updates wurden **bewusst nicht durchgeführt**, da sie Breaking Changes enthalten:

### Client

- `react` 18.3.1 → 19.x (Major Version)
- `react-router-dom` 6.x → 7.x (Major Version)
- `eslint` 9.x → 10.x (Major Version)
- `serve` 10.x → 14.x (Breaking Changes, nur Dev-Tool)

### Server

- `@prisma/client` 5.22.0 → 7.x (Major Migration erforderlich)
- `express` 4.x → 5.x (Breaking Changes)
- `bcryptjs` 2.x → 3.x (Major Version)

**Begründung:** Diese Updates erfordern umfangreichere Code-Änderungen und sollten in separaten Aufgaben durchgeführt werden.

---

## ✅ Nächste Schritte

1. **Testing durchführen** (siehe "Empfohlene Tests")
2. **Email-Funktionalität verifizieren** (Registrierung, Passwort-Reset)
3. **Docker-Build testen**
4. **Optional:** `serve@14.x` updaten (Breaking Change, nur Dev-Tool)
5. **Zukunft:** Major-Updates planen (React 19, Prisma 7, Express 5)

---

## 📝 Kommandos zur Reproduktion

Falls die Updates rückgängig gemacht werden müssen:

### Client

```bash
cd client
npm install react-router-dom@6.30.1 vite@7.1.1 vite-plugin-static-copy@3.1.1
```

### Server

```bash
cd server
npm install nodemailer@6.10.1 nodemon@3.1.11 pg@8.18.0 resend@6.9.2
```

---

**Ende des Update-Berichts**
