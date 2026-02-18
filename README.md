# Informatik fürs Gymnasium

Dieses Repository ist eine Zusammenstellung des Unterrichtmaterials für den
Informatikunterricht am Gymnasium. Das Material wird den SuS als Webseite zur
Verfügung gestellt.

---

## 🚀 Quick Start

### Development

```bash
# Container starten
docker-compose up -d

# Logs ansehen
docker logs -f gym-inf-server
```

### Production Deployment

**Mit Scripts (empfohlen):**

```bash
# Lokal: Images bauen und pushen
./scripts/build-and-push.sh

# Server: Deployen
ssh deploy@server
cd /opt/gym-inf && git pull && ./scripts/deploy.sh
```

**Manuell:**

```bash
# Auf Server: Container neu bauen und starten
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d

# Logs prüfen
docker logs gym-inf-server
```

---

## 📧 Email Configuration

Die Anwendung verwendet **Resend** für Email-Versand (Verifizierung, Passwort-Reset).

**Wichtig:** API Keys müssen in `/.env` (Root-Verzeichnis) konfiguriert werden!

```bash
# .env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM=onboarding@resend.dev
```

**📖 Detaillierte Anleitung:** Siehe [EMAIL-SETUP.md](./EMAIL-SETUP.md)

---

## 📁 Dokumentation

- **[SCRIPTS.md](./SCRIPTS.md)** - Deployment Scripts (ausführlich kommentiert) ⭐
- **[EMAIL-SETUP.md](./EMAIL-SETUP.md)** - Email-Konfiguration (Resend)
- **[PRODUCTION-DEPLOY.md](./PRODUCTION-DEPLOY.md)** - Production Deployment Referenz
- **[AGENTS.md](./AGENTS.md)** - Build, Lint & Code Style Guidelines

### Schnellzugriff

| Thema          | Dokument                                       | Beschreibung                                   |
| -------------- | ---------------------------------------------- | ---------------------------------------------- |
| 🔧 **Scripts** | **[SCRIPTS.md](./SCRIPTS.md)**                 | **Deployment Scripts mit manuellen Schritten** |
| 📧 Email Setup | [EMAIL-SETUP.md](./EMAIL-SETUP.md)             | Resend API konfigurieren, Troubleshooting      |
| 🚀 Deployment  | [PRODUCTION-DEPLOY.md](./PRODUCTION-DEPLOY.md) | Docker Commands, Logs, Rollback                |
| 💻 Development | [AGENTS.md](./AGENTS.md)                       | Lokale Entwicklung, Code-Style                 |

### Scripts im `scripts/` Verzeichnis

| Script              | Beschreibung                             | Wo ausführen  |
| ------------------- | ---------------------------------------- | ------------- |
| `build-and-push.sh` | Docker Images bauen & zu Registry pushen | Lokal         |
| `deploy.sh`         | Production Deployment ausführen          | Server        |
| `ssl-init.sh`       | SSL-Zertifikate erstellen (einmalig)     | Server        |
| `ssl-renew.sh`      | SSL-Zertifikate erneuern                 | Server (Cron) |
| `backup-db.sh`      | Datenbank-Backup erstellen               | Server (Cron) |

Alle Scripts sind vollständig kommentiert. Siehe [SCRIPTS.md](./SCRIPTS.md) für Details und manuelle Schritte.
