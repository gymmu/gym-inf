# 🚀 Production Deployment - Quick Reference

Schnellreferenz für das Deployment auf dem Production Server.

---

## 📋 Pre-Deployment Checkliste

- [ ] Code lokal getestet
- [ ] `.env` auf Server vorbereitet mit allen Secrets
- [ ] Resend Production API Key bereit
- [ ] Backup der Datenbank erstellt (falls Update)
- [ ] SSH-Zugang zum Server verfügbar

---

## 🔧 Erstmaliges Setup (einmalig)

### 1. Server vorbereiten

```bash
# SSH auf Server
ssh user@your-server.com

# Repository klonen
git clone https://github.com/your-org/gym-inf.git
cd gym-inf
```

### 2. Environment Variables konfigurieren

```bash
# .env.production.example kopieren
cp .env.production.example .env

# .env bearbeiten
nano .env
```

**Wichtige Variables:**

```bash
# Database
DB_PASSWORD=generiere_mit_openssl_rand_-hex_24

# Session & JWT
SESSION_SECRET=generiere_mit_openssl_rand_-base64_48
JWT_SECRET=generiere_mit_openssl_rand_-base64_48

# Email - Resend
RESEND_API_KEY=re_production_api_key_hier
RESEND_FROM=noreply@gym-inf.me

# Domain
CLIENT_URL=https://gym-inf.me
```

### 3. Secrets generieren

```bash
# DB Password
openssl rand -hex 24

# Session Secret
openssl rand -base64 48

# JWT Secret
openssl rand -base64 48
```

### 4. Erstmaliger Start

```bash
# Alle Container bauen und starten
docker-compose -f docker-compose.prod.yml up -d --build

# Logs prüfen
docker logs gym-inf-server
docker logs gym-inf-client
docker logs gym-inf-nginx
```

---

## 🔄 Standard Deployment (Code-Update)

### 1. Code pullen

```bash
# SSH auf Server
ssh user@your-server.com
cd /pfad/zu/gym-inf

# Aktuellen Code pullen
git pull origin main
```

### 2. Container neu bauen

```bash
# Alle Container stoppen
docker-compose -f docker-compose.prod.yml down

# Neu bauen und starten (mit --build für Code-Updates)
docker-compose -f docker-compose.prod.yml up -d --build

# ODER: Nur bestimmte Services neu bauen
docker-compose -f docker-compose.prod.yml up -d --build server
docker-compose -f docker-compose.prod.yml up -d --build client
```

### 3. Verifizieren

```bash
# Status prüfen
docker-compose -f docker-compose.prod.yml ps

# Logs prüfen
docker logs gym-inf-server --tail 50
docker logs gym-inf-nginx --tail 20

# Health-Check
curl -I https://gym-inf.me
```

---

## 🔍 Container Management

### Status prüfen

```bash
# Alle Container anzeigen
docker-compose -f docker-compose.prod.yml ps

# Oder mit docker direkt
docker ps --filter "name=gym-inf"
```

### Logs ansehen

```bash
# Live-Logs (alle Services)
docker-compose -f docker-compose.prod.yml logs -f

# Nur Server-Logs
docker logs -f gym-inf-server

# Letzte 50 Zeilen
docker logs gym-inf-server --tail 50

# Logs seit 10 Minuten
docker logs --since 10m gym-inf-server
```

### Container neu starten

```bash
# Einzelner Service
docker-compose -f docker-compose.prod.yml restart server

# Alle Services
docker-compose -f docker-compose.prod.yml restart

# Kompletter Neustart (lädt .env neu)
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
```

### Container stoppen

```bash
# Alle Container stoppen
docker-compose -f docker-compose.prod.yml down

# Container stoppen aber Volumes behalten
docker-compose -f docker-compose.prod.yml stop
```

---

## 🗄️ Datenbank Management

### Backup erstellen

```bash
# Backup in File
docker exec gym-inf-postgres pg_dump -U gyminfuser gyminfdb > backup_$(date +%Y%m%d_%H%M%S).sql

# Backup komprimiert
docker exec gym-inf-postgres pg_dump -U gyminfuser gyminfdb | gzip > backup_$(date +%Y%m%d_%H%M%S).sql.gz
```

### Backup wiederherstellen

```bash
# Aus SQL-File
cat backup_20260218_120000.sql | docker exec -i gym-inf-postgres psql -U gyminfuser -d gyminfdb

# Aus komprimiertem File
gunzip -c backup_20260218_120000.sql.gz | docker exec -i gym-inf-postgres psql -U gyminfuser -d gyminfdb
```

### Datenbank-Migrationen

```bash
# Prisma Migrationen ausführen (automatisch bei Container-Start)
docker exec gym-inf-server npx prisma migrate deploy

# Prisma Studio (DB-GUI) - siehe PRISMA-STUDIO.md für Details
./scripts/prisma-studio.sh start    # Start Prisma Studio
./scripts/prisma-studio.sh stop     # Stop Prisma Studio
./scripts/prisma-studio.sh status   # Check Status

# Zugriff: https://your-domain.com/prisma-studio/
```

---

## 🔐 Environment Variables aktualisieren

### Resend API Key ändern

```bash
# 1. .env bearbeiten
nano .env

# 2. Neuen Key eintragen
RESEND_API_KEY=re_neuer_production_key

# 3. Container NEU STARTEN (nicht nur restart!)
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d

# 4. Verifizieren
docker exec gym-inf-server printenv | grep RESEND
docker logs gym-inf-server | grep -i "email client"
```

### Andere Secrets ändern

Gleicher Prozess wie oben - immer `down` + `up -d` verwenden!

---

## 🧪 Testing & Debugging

### Email-Test

```bash
# 1. Logs live ansehen
docker logs -f gym-inf-server

# 2. In anderer Session: Test-User registrieren über Web-UI

# 3. Logs sollten zeigen:
# "Email client configured with Resend"
# "Email sent via Resend: <id>"
```

### API-Test

```bash
# Health-Check
curl https://gym-inf.me/api/health

# Server erreichbar?
curl -I https://gym-inf.me
```

### Container Shell öffnen

```bash
# Server-Container
docker exec -it gym-inf-server sh

# Postgres-Container
docker exec -it gym-inf-postgres psql -U gyminfuser -d gyminfdb
```

---

## 🚨 Troubleshooting

### Container startet nicht

```bash
# Detaillierte Logs
docker logs gym-inf-server

# Alle Container-Status
docker-compose -f docker-compose.prod.yml ps

# Container neu bauen (ohne Cache)
docker-compose -f docker-compose.prod.yml build --no-cache server
docker-compose -f docker-compose.prod.yml up -d
```

### Email funktioniert nicht

```bash
# Prüfe Environment Variables
docker exec gym-inf-server printenv | grep RESEND

# Prüfe Email-Client-Status
docker logs gym-inf-server | grep -i email

# Prüfe Resend Dashboard
# https://resend.com/emails
```

### Datenbank-Verbindung fehlt

```bash
# Prüfe Postgres-Container
docker logs gym-inf-postgres

# Prüfe Netzwerk
docker network inspect gym-inf_gym-inf-network

# Teste DB-Verbindung
docker exec gym-inf-postgres pg_isready -U gyminfuser
```

### Port-Konflikte

```bash
# Prüfe welche Ports belegt sind
sudo netstat -tulpn | grep LISTEN

# Oder mit ss
ss -tulpn | grep LISTEN
```

### Disk Space voll

```bash
# Docker aufräumen
docker system prune -a
docker volume prune

# Logs rotieren
docker-compose -f docker-compose.prod.yml logs --tail 1000 > logs_backup.txt
```

---

## 🔄 Rollback

Falls nach einem Deployment Probleme auftreten:

```bash
# 1. Zum vorherigen Commit zurück
git log --oneline  # Finde den letzten funktionierenden Commit
git checkout <commit-hash>

# 2. Container neu bauen
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build

# 3. Falls DB-Probleme: Backup wiederherstellen (siehe oben)
```

---

## 📊 Monitoring

### Wichtige Logs regelmäßig prüfen

```bash
# Email-Versand
docker logs gym-inf-server | grep -i "email sent"

# Fehler
docker logs gym-inf-server | grep -i error

# Warnungen
docker logs gym-inf-server | grep -i warn

# Container-Restarts (sollten nicht häufig sein)
docker ps --filter "name=gym-inf" --format "{{.Names}}: {{.Status}}"
```

### Disk Space

```bash
# Docker Disk Usage
docker system df

# Container-Größen
docker ps --size --filter "name=gym-inf"
```

---

## 📝 Cheat Sheet

```bash
# === Standard Deployment ===
git pull origin main
docker-compose -f docker-compose.prod.yml up -d --build

# === .env Update ===
nano .env
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d

# === Logs ansehen ===
docker logs -f gym-inf-server

# === DB Backup ===
docker exec gym-inf-postgres pg_dump -U gyminfuser gyminfdb > backup.sql

# === Container Status ===
docker-compose -f docker-compose.prod.yml ps

# === Troubleshooting ===
docker logs gym-inf-server --tail 100
docker exec gym-inf-server printenv | grep RESEND
```

---

## 🆘 Emergency Contacts

**Bei kritischen Problemen:**

1. **Logs sichern:**

   ```bash
   docker logs gym-inf-server > server_error_$(date +%Y%m%d_%H%M%S).log
   ```

2. **Container Status dokumentieren:**

   ```bash
   docker-compose -f docker-compose.prod.yml ps > status.txt
   ```

3. **System-Info sammeln:**
   ```bash
   docker system df > disk_usage.txt
   df -h > filesystem.txt
   ```

---

**Letztes Update:** 2026-02-18  
**Server:** Production  
**Services:** nginx, client, server, postgres
