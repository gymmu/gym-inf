# 🔧 Deployment Scripts Guide

Alle Scripts befinden sich im `scripts/` Verzeichnis und sind vollständig kommentiert. Du kannst sie direkt verwenden **ODER** die einzelnen Schritte manuell ausführen.

---

## 📋 Scripts Übersicht

| Script              | Zweck                                    | Wo ausführen             |
| ------------------- | ---------------------------------------- | ------------------------ |
| `build-and-push.sh` | Docker Images bauen & zu Registry pushen | Lokaler PC               |
| `deploy.sh`         | Production Deployment ausführen          | Production Server        |
| `ssl-init.sh`       | SSL-Zertifikate initial erstellen        | Production Server        |
| `ssl-renew.sh`      | SSL-Zertifikate erneuern                 | Production Server (Cron) |
| `backup-db.sh`      | Datenbank-Backup erstellen               | Production Server (Cron) |

---

## 1️⃣ build-and-push.sh

**Zweck:** Docker Images lokal bauen und zu GitHub Container Registry pushen.

**Wann:** Nach Code-Änderungen, vor dem Production-Deployment.

**Wo:** Auf deinem **lokalen PC** (nicht auf Server).

### Verwendung:

```bash
# Beide Images bauen und pushen
./scripts/build-and-push.sh

# Nur Client bauen und pushen
./scripts/build-and-push.sh client

# Nur Server bauen und pushen
./scripts/build-and-push.sh server
```

### Was macht das Script?

```bash
# 1. Baut Client Docker Image
docker build -t ghcr.io/gymmu/gym-inf-client:latest ./client

# 2. Baut Server Docker Image
docker build -t ghcr.io/gymmu/gym-inf-server:latest -f ./server/Dockerfile ./server

# 3. Pushed Client zu Registry
docker push ghcr.io/gymmu/gym-inf-client:latest

# 4. Pushed Server zu Registry
docker push ghcr.io/gymmu/gym-inf-server:latest
```

### Manuelle Ausführung:

```bash
# Schritt 1: Client bauen
cd /pfad/zu/gym-inf
docker build -t ghcr.io/gymmu/gym-inf-client:latest ./client

# Schritt 2: Server bauen
docker build -t ghcr.io/gymmu/gym-inf-server:latest -f ./server/Dockerfile ./server

# Schritt 3: Zu Registry anmelden (einmalig)
docker login ghcr.io -u DEIN_GITHUB_USERNAME
# Password: GitHub Personal Access Token mit packages:write

# Schritt 4: Client pushen
docker push ghcr.io/gymmu/gym-inf-client:latest

# Schritt 5: Server pushen
docker push ghcr.io/gymmu/gym-inf-server:latest
```

---

## 2️⃣ deploy.sh

**Zweck:** Production Deployment durchführen.

**Wann:** Nach `build-and-push.sh`, um neue Version zu deployen.

**Wo:** Auf dem **Production Server**.

### Verwendung:

```bash
# Erster Deployment
./scripts/deploy.sh

# Updates deployen
git pull && ./scripts/deploy.sh
```

### Was macht das Script?

```bash
# 1. Prüft .env Datei existiert
[ -f .env ] && echo "OK" || echo "Fehler: .env fehlt"

# 2. Lädt Environment Variables
source .env

# 3. Validiert kritische Variables (DOMAIN, DB_PASSWORD, etc.)
[ -n "$DOMAIN" ] || exit 1

# 4. Generiert nginx Config mit aktueller Domain
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf

# 5. Prüft ob SSL-Zertifikate existieren
docker volume ls | grep certbot_conf || echo "Warnung: SSL fehlt"

# 6. Pullt neueste Docker Images von Registry
docker compose -f docker-compose.prod.yml pull

# 7. Startet alle Services
docker compose -f docker-compose.prod.yml up -d

# 8. Wartet und macht Health-Check
sleep 10
curl -sf http://localhost:3000/api/health
```

### Manuelle Ausführung:

```bash
# Schritt 1: Auf Server einloggen
ssh deploy@your-server.com
cd /opt/gym-inf

# Schritt 2: .env prüfen
cat .env | grep -E "RESEND_API_KEY|DOMAIN"

# Schritt 3: Code aktualisieren
git pull origin main

# Schritt 4: Nginx Config generieren
source .env
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf

# Schritt 5: Images pullen
docker compose -f docker-compose.prod.yml pull

# Schritt 6: Services starten
docker compose -f docker-compose.prod.yml up -d

# Schritt 7: Status prüfen
docker compose -f docker-compose.prod.yml ps
docker logs gym-inf-server --tail 20

# Schritt 8: Health-Check
curl -sf http://localhost:3000/api/health
```

### Troubleshooting:

```bash
# Container-Status prüfen
docker compose -f docker-compose.prod.yml ps

# Logs ansehen
docker logs gym-inf-server
docker logs gym-inf-client
docker logs gym-inf-nginx

# Environment Variables prüfen
docker exec gym-inf-server printenv | grep RESEND

# Neu starten (lädt .env neu)
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d
```

---

## 3️⃣ ssl-init.sh

**Zweck:** Let's Encrypt SSL-Zertifikate initial erstellen.

**Wann:** **Einmalig** beim ersten Server-Setup, bevor du deploy.sh ausführst.

**Wo:** Auf dem **Production Server**.

### Prerequisites:

- DNS A-Record zeigt auf Server-IP
- Port 80 und 443 sind offen
- `.env` ist konfiguriert mit `DOMAIN` und `CERTBOT_EMAIL`

### Verwendung:

```bash
# Einmalig ausführen
./scripts/ssl-init.sh
```

### Was macht das Script?

```bash
# 1. Prüft .env existiert und lädt sie
source .env

# 2. Validiert DOMAIN und CERTBOT_EMAIL gesetzt sind
[ -n "$DOMAIN" ] && [ -n "$CERTBOT_EMAIL" ] || exit 1

# 3. Stoppt laufende Services (frei machen Port 80)
docker compose -f docker-compose.prod.yml down

# 4. Generiert nginx Config
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf

# 5. Erstellt Docker Volumes für Zertifikate
docker volume create gym-inf_certbot_www
docker volume create gym-inf_certbot_conf

# 6. Startet temporären nginx auf Port 80
docker run -d --name gym-inf-nginx-init -p 80:80 \
  -v gym-inf_certbot_www:/var/www/certbot nginx:alpine

# 7. Fordert Zertifikat von Let's Encrypt an
docker run --rm \
  -v gym-inf_certbot_www:/var/www/certbot \
  -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email "$CERTBOT_EMAIL" --agree-tos \
  -d "$DOMAIN"

# 8. Stoppt temporären nginx
docker stop gym-inf-nginx-init
docker rm gym-inf-nginx-init

# 9. Verifiziert Zertifikat erstellt wurde
docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot certificates | grep "$DOMAIN"
```

### Manuelle Ausführung:

```bash
# Schritt 1: Auf Server und .env prüfen
ssh deploy@your-server.com
cd /opt/gym-inf
source .env
echo "Domain: $DOMAIN"
echo "Email: $CERTBOT_EMAIL"

# Schritt 2: Services stoppen
docker compose -f docker-compose.prod.yml down

# Schritt 3: Volumes erstellen
docker volume create gym-inf_certbot_www
docker volume create gym-inf_certbot_conf

# Schritt 4: Temporären nginx starten
docker run -d --name gym-inf-nginx-init -p 80:80 \
  -v gym-inf_certbot_www:/var/www/certbot \
  nginx:alpine sh -c 'mkdir -p /var/www/certbot && \
  echo "events { worker_connections 1024; } \
  http { server { listen 80; server_name _; \
  location /.well-known/acme-challenge/ { root /var/www/certbot; } \
  location / { return 200 \"OK\"; } } }" > /etc/nginx/nginx.conf && \
  nginx -g "daemon off;"'

# Schritt 5: SSL-Zertifikat anfordern
docker run --rm \
  -v gym-inf_certbot_www:/var/www/certbot \
  -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email "$CERTBOT_EMAIL" \
  --agree-tos --no-eff-email \
  -d "$DOMAIN"

# Schritt 6: Temporären nginx stoppen
docker stop gym-inf-nginx-init
docker rm gym-inf-nginx-init

# Schritt 7: Zertifikat prüfen
docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot certificates
```

### Troubleshooting:

```bash
# DNS prüfen
dig gym-inf.me +short
# Sollte Server-IP zeigen

# Port 80 prüfen
ss -tlnp | grep :80
# Sollte leer sein oder nur temporären nginx zeigen

# Firewall prüfen
ufw status
ufw allow 80
ufw allow 443

# Testweise Port 80 lokal aufrufen
curl http://localhost/
```

---

## 4️⃣ ssl-renew.sh

**Zweck:** SSL-Zertifikate erneuern (automatisch per Cron).

**Wann:** Automatisch täglich ausführen lassen (Certbot prüft ob Erneuerung nötig).

**Wo:** Auf dem **Production Server** (via Cron).

### Verwendung:

```bash
# Manuell ausführen
./scripts/ssl-renew.sh

# In Crontab eintragen (empfohlen)
crontab -e
# Täglich um 3 Uhr morgens:
0 3 * * * /opt/gym-inf/scripts/ssl-renew.sh >> /var/log/ssl-renew.log 2>&1
```

### Was macht das Script?

```bash
# 1. Führt certbot renew aus
docker run --rm \
  -v gym-inf_certbot_www:/var/www/certbot \
  -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot renew --quiet

# 2. Lädt nginx neu (bei Erfolg)
docker compose -f docker-compose.prod.yml exec nginx nginx -s reload

# 3. Zeigt Zertifikat-Status
docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot certificates
```

### Manuelle Ausführung:

```bash
# Zertifikate erneuern
docker run --rm \
  -v gym-inf_certbot_www:/var/www/certbot \
  -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot renew

# Nginx neu laden
docker compose -f docker-compose.prod.yml exec nginx nginx -s reload

# Status prüfen
docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt \
  certbot/certbot certificates
```

---

## 5️⃣ backup-db.sh

**Zweck:** Datenbank-Backup erstellen (automatisch per Cron empfohlen).

**Wann:** Täglich vor wichtigen Änderungen.

**Wo:** Auf dem **Production Server** (via Cron).

### Verwendung:

```bash
# Manuelles Backup
./scripts/backup-db.sh

# In Crontab eintragen (empfohlen)
crontab -e
# Täglich um 2 Uhr morgens:
0 2 * * * /opt/gym-inf/scripts/backup-db.sh >> /var/log/db-backup.log 2>&1
```

### Was macht das Script?

```bash
# 1. Erstellt backups/ Verzeichnis
mkdir -p backups

# 2. Erstellt komprimierten DB-Dump
docker compose -f docker-compose.prod.yml exec -T postgres \
  pg_dump -U gyminfuser gyminfdb | gzip > backups/gyminfdb_20260218_120000.sql.gz

# 3. Behält nur die letzten 30 Backups
ls -t backups/gyminfdb_*.sql.gz | tail -n +31 | xargs rm -f
```

### Manuelle Ausführung:

```bash
# Backup erstellen
cd /opt/gym-inf
mkdir -p backups
docker compose -f docker-compose.prod.yml exec -T postgres \
  pg_dump -U gyminfuser gyminfdb | gzip > backups/gyminfdb_$(date +%Y%m%d_%H%M%S).sql.gz

# Backup-Größe prüfen
ls -lh backups/

# Backup wiederherstellen
gunzip -c backups/gyminfdb_20260218_120000.sql.gz | \
  docker compose -f docker-compose.prod.yml exec -T postgres \
  psql -U gyminfuser -d gyminfdb
```

---

## 🎯 Typischer Workflow

### Erstmaliges Setup:

```bash
# === AUF LOKALEM PC ===
# 1. Code-Änderungen committen
git add .
git commit -m "Update feature"
git push

# 2. Docker Images bauen und pushen
./scripts/build-and-push.sh

# === AUF PRODUCTION SERVER ===
# 3. Auf Server einloggen
ssh deploy@your-server.com
cd /opt/gym-inf

# 4. Code pullen
git pull origin main

# 5. .env konfigurieren (einmalig)
cp .env.production.example .env
nano .env
# RESEND_API_KEY=re_your_prod_key
# DB_PASSWORD=$(openssl rand -hex 24)
# SESSION_SECRET=$(openssl rand -base64 48)
# JWT_SECRET=$(openssl rand -base64 48)

# 6. SSL-Zertifikat erstellen (einmalig)
./scripts/ssl-init.sh

# 7. Deployment ausführen
./scripts/deploy.sh

# 8. Backups einrichten (einmalig)
crontab -e
# 0 2 * * * /opt/gym-inf/scripts/backup-db.sh >> /var/log/db-backup.log 2>&1
# 0 3 * * * /opt/gym-inf/scripts/ssl-renew.sh >> /var/log/ssl-renew.log 2>&1
```

### Code-Update deployen:

```bash
# === AUF LOKALEM PC ===
# 1. Änderungen pushen
git push

# 2. Images neu bauen und pushen
./scripts/build-and-push.sh

# === AUF PRODUCTION SERVER ===
# 3. Deployen
ssh deploy@your-server.com
cd /opt/gym-inf && git pull && ./scripts/deploy.sh
```

### Nur Environment Variables ändern:

```bash
# === AUF PRODUCTION SERVER ===
# 1. .env bearbeiten
nano .env
# RESEND_API_KEY=re_neuer_key

# 2. Container NEU STARTEN (nicht restart!)
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d

# 3. Verifizieren
docker exec gym-inf-server printenv | grep RESEND
docker logs gym-inf-server | grep "Email client"
```

---

## 📚 Weitere Dokumentation

- **[EMAIL-SETUP.md](./EMAIL-SETUP.md)** - Resend Email-Konfiguration
- **[PRODUCTION-DEPLOY.md](./PRODUCTION-DEPLOY.md)** - Detailliertes Deployment-Handbuch
- **[README.md](./README.md)** - Projekt-Übersicht

---

**Letztes Update:** 2026-02-18  
**Scripts Version:** 2.0 (mit Resend Support)
