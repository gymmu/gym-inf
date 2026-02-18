# 📧 Email Setup Guide - Resend Integration

Dieses Dokument beschreibt die Email-Konfiguration mit Resend für Development und Production.

---

## 📋 Übersicht

**Email Service:** Resend (https://resend.com)  
**Free Tier:** 3.000 Emails/Monat (für immer kostenlos)  
**SDK:** `resend` npm package

**Fallback-Reihenfolge:**

1. Resend (wenn `RESEND_API_KEY` gesetzt)
2. Gmail (wenn `GMAIL_USER` und `GMAIL_APP_PASSWORD` gesetzt)
3. Console Logging (Development - keine Config nötig)

---

## 🔧 Local Development Setup

### 1. Resend Account & API Keys

1. Registriere dich bei https://resend.com/signup
2. Erstelle einen API Key: https://resend.com/api-keys
   - Name: "Gym Inf Development"
   - Permissions: "Sending access"
3. Kopiere den API Key (beginnt mit `re_...`)

### 2. Environment Variables konfigurieren

**Bearbeite `/.env` (Root-Verzeichnis!):**

```bash
# Email - Resend API
RESEND_API_KEY=re_your_dev_api_key_here
RESEND_FROM=onboarding@resend.dev
```

**Wichtig:** Die `.env` muss im **Root-Verzeichnis** liegen, nicht in `server/.env`!

### 3. Docker Container neu starten

```bash
# Container stoppen und neu starten (lädt neue Environment Variables)
docker-compose down
docker-compose up -d

# Logs prüfen - du solltest sehen: "Email client configured with Resend"
docker logs gym-inf-server --tail 20
```

### 4. Testen

**Option A: Über Web-App**

- Registriere einen Test-User
- Prüfe deine Email-Inbox

**Option B: Logs prüfen**

```bash
# Echtzeit-Logs ansehen
docker logs -f gym-inf-server
```

Bei erfolgreichem Email-Versand siehst du:

```
Email sent via Resend: <message-id>
```

---

## 🚀 Production Server Setup

### 1. Code auf Server deployen

```bash
# SSH auf Server
ssh user@your-server.com

# Repository klonen oder pullen
cd /pfad/zu/gym-inf
git pull origin main
```

### 2. Production Environment Variables konfigurieren

**Erstelle/Bearbeite `/.env` auf dem Server:**

```bash
cd /pfad/zu/gym-inf
nano .env
```

**Füge folgende Zeilen ein (basierend auf `.env.production.example`):**

```bash
# =============================================================================
# PRODUCTION ENVIRONMENT
# =============================================================================

# Domain
DOMAIN=gym-inf.me
CLIENT_URL=https://gym-inf.me

# Database
DB_NAME=gyminfdb
DB_USER=gyminfuser
DB_PASSWORD=DEIN_SICHERES_DB_PASSWORT_HIER
DATABASE_URL=postgresql://gyminfuser:DEIN_SICHERES_DB_PASSWORT_HIER@postgres:5432/gyminfdb

# Session
SESSION_SECRET=GENERIERE_MIT_openssl_rand_-base64_48
SESSION_NAME=gym-inf.sid
SESSION_MAX_AGE=604800000

# Email - Resend API
RESEND_API_KEY=re_your_production_api_key_here
RESEND_FROM=noreply@gym-inf.me

# Email - Gmail fallback (optional)
GMAIL_USER=
GMAIL_APP_PASSWORD=

# Tokens
JWT_SECRET=GENERIERE_MIT_openssl_rand_-base64_48
TOKEN_EXPIRY=3600000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=5

# Certbot
CERTBOT_EMAIL=deine-email@example.com
```

**Sichere Secrets generieren:**

```bash
# Session Secret
openssl rand -base64 48

# JWT Secret
openssl rand -base64 48

# DB Password
openssl rand -hex 24
```

### 3. Docker Container bauen und starten

```bash
# Container stoppen (falls laufend)
docker-compose -f docker-compose.prod.yml down

# Images neu bauen und Container starten
docker-compose -f docker-compose.prod.yml up -d --build

# Logs prüfen
docker logs gym-inf-server --tail 50
```

**Erfolgreiche Logs zeigen:**

```
Email client configured with Resend
Server running on port 3000
Environment: production
```

### 4. Testen

**Test-Email über die App:**

1. Registriere einen neuen User
2. Prüfe Email-Eingang
3. Verifiziere Email-Link funktioniert

**Logs live ansehen:**

```bash
docker logs -f gym-inf-server
```

---

## 🔍 Troubleshooting

### Email wird nicht versendet

**1. Prüfe ob Resend konfiguriert ist:**

```bash
docker exec gym-inf-server printenv | grep RESEND
```

Sollte zeigen:

```
RESEND_API_KEY=re_...
RESEND_FROM=...
```

**2. Prüfe Server-Logs:**

```bash
docker logs gym-inf-server | grep -i email
```

**3. Prüfe welcher Email-Service aktiv ist:**

- ✅ "Email client configured with Resend" → Resend aktiv
- ⚠️ "Email client configured with Gmail" → Resend fehlt, Gmail Fallback
- ⚠️ "No email service configured" → Kein Service konfiguriert, Console-Logging

### API Key funktioniert nicht

**1. Prüfe API Key Format:**

- Muss mit `re_` beginnen
- Keine Leerzeichen vor/nach dem Key
- Key in Anführungszeichen nicht nötig

**2. Prüfe Resend Dashboard:**

- Gehe zu: https://resend.com/api-keys
- Prüfe ob Key aktiv ist
- Prüfe "Sending access" Permission

**3. Test API Key direkt:**

```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "test@example.com",
    "subject": "Test",
    "html": "<p>Test</p>"
  }'
```

### Environment Variables werden nicht geladen

**Problem:** `.env` wurde geändert aber Container hat alte Werte.

**Lösung:** Container müssen neu gestartet werden (nicht nur `restart`!):

```bash
# Development
docker-compose down
docker-compose up -d

# Production
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
```

### Emails kommen nicht an

**1. Prüfe Spam-Ordner**

**2. Prüfe Resend Dashboard:**
https://resend.com/emails

Hier siehst du alle versendeten Emails mit Status:

- ✅ Delivered
- ⏳ Queued
- ❌ Bounced

**3. Prüfe FROM-Email:**

- Für Testing: `onboarding@resend.dev` (funktioniert immer)
- Für Production: Eigene Domain möglich (muss verifiziert sein)

---

## 📊 Environment Variables Übersicht

### Resend Configuration

| Variable         | Beschreibung   | Beispiel             | Required                                |
| ---------------- | -------------- | -------------------- | --------------------------------------- |
| `RESEND_API_KEY` | Resend API Key | `re_abc123...`       | Ja (für Email-Versand)                  |
| `RESEND_FROM`    | Absender-Email | `noreply@gym-inf.me` | Nein (Default: `onboarding@resend.dev`) |

### Wo liegen die .env Dateien?

```
gym-inf/
├── .env                          # ← Development & Production Config
│                                 #    Wird von docker-compose.yml gelesen
│                                 #    HIER müssen RESEND_* Variables rein!
│
├── .env.example                  # ← Template für Development
├── .env.production.example       # ← Template für Production
│
└── server/
    └── .env                      # ← Wird NICHT von Docker verwendet!
                                  #    Nur für lokales `npm run dev` (ohne Docker)
```

---

## 🔐 Sicherheit

### Wichtige Regeln:

1. ✅ **NIEMALS API Keys committen!**
   - `.env` ist in `.gitignore`
   - Nur `.env.example` wird versioniert

2. ✅ **Verschiedene Keys für Dev/Prod:**
   - Development: Separater API Key
   - Production: Separater API Key
   - Jeder Key kann individuell widerrufen werden

3. ✅ **API Keys rotieren:**
   - Wechsel Keys regelmäßig
   - Bei Verdacht auf Leak sofort neuen Key erstellen

4. ✅ **Production Secrets:**
   - Generiere sichere Secrets: `openssl rand -base64 48`
   - Verwende NIEMALS Dev-Secrets in Production

---

## 📚 Weiterführende Links

- **Resend Dashboard:** https://resend.com/overview
- **Resend Docs:** https://resend.com/docs
- **API Keys verwalten:** https://resend.com/api-keys
- **Email Logs:** https://resend.com/emails
- **Resend Node.js SDK:** https://github.com/resendlabs/resend-node

---

## 🆘 Support

**Resend Support:**

- Docs: https://resend.com/docs
- Discord: https://resend.com/discord

**Bei Problemen mit diesem Setup:**

1. Prüfe Logs: `docker logs gym-inf-server`
2. Prüfe Environment Variables: `docker exec gym-inf-server printenv | grep RESEND`
3. Prüfe Resend Dashboard für Email-Status
4. Teste API Key direkt (siehe Troubleshooting)

---

**Letztes Update:** 2026-02-18  
**Email Service:** Resend  
**Version:** 1.0
