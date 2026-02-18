# 🎨 Prisma Studio - Database Management GUI

Prisma Studio ist ein visuelles Database-Management-Tool, mit dem du deine Datenbank direkt im Browser verwalten kannst.

---

## 🚀 Quick Start

### Lokal (Development)

```bash
# Im server/ Verzeichnis:
cd server
npm run prisma:studio

# Oder mit dem Management-Script:
./scripts/prisma-studio.sh dev
```

**Zugriff:** http://localhost:5555

### Production (Server)

```bash
# SSH auf Server
ssh user@your-server.com
cd /opt/gym-inf

# Prisma Studio starten
./scripts/prisma-studio.sh start

# Prisma Studio stoppen
./scripts/prisma-studio.sh stop

# Status prüfen
./scripts/prisma-studio.sh status
```

**Zugriff:** https://your-domain.com/prisma-studio/

---

## 📋 Alle Befehle

### Management Script

```bash
./scripts/prisma-studio.sh start    # Start in production
./scripts/prisma-studio.sh stop     # Stop in production
./scripts/prisma-studio.sh status   # Check status
./scripts/prisma-studio.sh logs     # View logs
./scripts/prisma-studio.sh dev      # Start locally
```

### npm Scripts (im server/ Verzeichnis)

```bash
npm run prisma:studio           # Start lokal (öffnet Browser)
npm run prisma:studio:prod      # Start für Production (kein Browser)
```

### Docker Commands (Production)

```bash
# Start
docker compose -f docker-compose.prod.yml -f docker-compose.prisma-studio.yml up -d prisma-studio

# Stop
docker compose -f docker-compose.prod.yml -f docker-compose.prisma-studio.yml stop prisma-studio

# Logs
docker logs -f gym-inf-prisma-studio

# Remove
docker compose -f docker-compose.prod.yml -f docker-compose.prisma-studio.yml rm -f prisma-studio
```

---

## 🔒 Sicherheit (Production)

⚠️ **WICHTIG:** Prisma Studio gibt vollen Zugriff auf die Datenbank!

### Option 1: HTTP Basic Authentication (Empfohlen)

Aktiviere Basic Auth in der nginx-Konfiguration:

```bash
# 1. Passwort-File erstellen (auf dem Server)
sudo apt-get install apache2-utils
sudo htpasswd -c /etc/nginx/.htpasswd admin
# Gib ein sicheres Passwort ein

# 2. nginx-Konfiguration bearbeiten
nano nginx/nginx.prod.conf

# 3. Uncomment diese Zeilen im /prisma-studio/ Location-Block:
# auth_basic "Prisma Studio Access";
# auth_basic_user_file /etc/nginx/.htpasswd;

# 4. nginx neu laden
docker compose -f docker-compose.prod.yml restart nginx
```

### Option 2: IP-Whitelist

Nur bestimmte IPs erlauben:

```nginx
# In nginx/nginx.prod.conf unter location /prisma-studio/
allow 123.456.789.0;  # Deine IP
deny all;
```

### Option 3: VPN/SSH Tunnel

Zugriff nur über SSH-Tunnel:

```bash
# Lokal ausführen:
ssh -L 5555:localhost:5555 user@your-server.com

# Dann im Browser:
# http://localhost:5555
```

### Option 4: Nur bei Bedarf starten

Der sicherste Ansatz: Prisma Studio nur kurz starten wenn benötigt, dann sofort wieder stoppen.

```bash
# Auf dem Server:
./scripts/prisma-studio.sh start
# Arbeiten...
./scripts/prisma-studio.sh stop
```

---

## 🎯 Funktionen von Prisma Studio

### Daten anzeigen und bearbeiten

- ✅ Alle Tabellen durchsuchen
- ✅ Einträge bearbeiten, erstellen, löschen
- ✅ Filter und Sortierung
- ✅ Relationen navigieren

### Beispiele

**User suchen:**

1. Öffne die `users` Tabelle
2. Filter nach Email: `contains "test"`
3. Bearbeite User-Daten direkt

**Klasse zuweisen:**

1. Öffne `users` Tabelle
2. Finde User
3. Klicke auf `classId` Feld
4. Wähle Klasse aus Dropdown

**Progress anzeigen:**

1. Öffne `chapter_progress` Tabelle
2. Filter nach `userId`
3. Sieh alle Chapter-Ratings eines Users

---

## 🛠️ Troubleshooting

### Prisma Studio startet nicht

```bash
# Logs prüfen
docker logs gym-inf-prisma-studio

# Häufige Probleme:
# 1. Datenbank nicht erreichbar
docker exec gym-inf-postgres pg_isready -U gyminfuser

# 2. Network-Probleme
docker network inspect gym-inf_gym-inf-network

# 3. Container neu starten
./scripts/prisma-studio.sh stop
./scripts/prisma-studio.sh start
```

### 404 Fehler bei /prisma-studio/

```bash
# nginx-Konfiguration prüfen
cat nginx/nginx.prod.active.conf | grep prisma-studio

# nginx neu laden
docker compose -f docker-compose.prod.yml restart nginx

# Prisma Studio läuft?
./scripts/prisma-studio.sh status
```

### Connection Timeout

```bash
# Prüfe DATABASE_URL
docker exec gym-inf-prisma-studio printenv | grep DATABASE_URL

# Prüfe Postgres
docker logs gym-inf-postgres | tail -20
```

### Port bereits belegt (lokal)

```bash
# Anderen Port verwenden
cd server
npx prisma studio --port 5556
```

---

## 📊 Best Practices

### Development

✅ Prisma Studio immer offen lassen während der Entwicklung
✅ Nutze es für schnelles Prototyping und Testing
✅ Verwende es zum Debuggen von Daten-Problemen

### Production

⚠️ Nur bei Bedarf starten
⚠️ Immer mit Authentication schützen
⚠️ Nach Verwendung sofort stoppen
⚠️ Änderungen vorher testen (am besten auf dev/staging)
✅ Backup erstellen vor größeren Änderungen

### Backup vor manuellen Änderungen

```bash
# Backup erstellen
./scripts/backup-db.sh

# Oder manuell:
docker exec gym-inf-postgres pg_dump -U gyminfuser gyminfdb > backup_before_edit_$(date +%Y%m%d_%H%M%S).sql
```

---

## 🔄 Updates

Nach Schema-Änderungen:

```bash
# Lokal:
cd server
npx prisma generate
npm run prisma:studio

# Production:
# Prisma Client wird automatisch beim Deployment aktualisiert
# Prisma Studio nutzt den gleichen Client
```

---

## 📝 Alternative Tools

Falls du Prisma Studio nicht nutzen möchtest:

```bash
# 1. psql (Postgres CLI)
docker exec -it gym-inf-postgres psql -U gyminfuser -d gyminfdb

# 2. pgAdmin (GUI)
# Siehe: https://www.pgadmin.org/

# 3. DBeaver (GUI)
# Siehe: https://dbeaver.io/
```

---

## 🆘 Support

Bei Problemen:

1. Logs prüfen: `./scripts/prisma-studio.sh logs`
2. Status prüfen: `./scripts/prisma-studio.sh status`
3. Container neu starten: `./scripts/prisma-studio.sh stop && ./scripts/prisma-studio.sh start`
4. Prisma Docs: https://www.prisma.io/docs/concepts/components/prisma-studio

---

**Letzte Aktualisierung:** 2026-02-18
