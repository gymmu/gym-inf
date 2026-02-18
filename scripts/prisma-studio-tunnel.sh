#!/bin/bash
# =============================================================================
# Prisma Studio SSH Tunnel Script
#
# Erstellt einen SSH-Tunnel zum Production-Server für sicheren Prisma Studio Zugriff.
#
# Usage:
#   ./scripts/prisma-studio-tunnel.sh [ssh-identity-file]
#
# Examples:
#   ./scripts/prisma-studio-tunnel.sh                    # Ohne spezifischen Key
#   ./scripts/prisma-studio-tunnel.sh ~/.ssh/id_ed25519  # Mit spezifischem Key
#
# Dann im Browser öffnen: http://localhost:5555
# =============================================================================

set -e

# === Parameter ===
SSH_IDENTITY="${1:-}"                 # Optionaler SSH-Key als erster Parameter

# === Konfiguration ===
# Passe diese Werte an deine Server-Konfiguration an:
SERVER_USER="gyminf"                    # Dein SSH-Username
SERVER_HOST="gym-inf.me"         # Deine Server-Domain oder IP
LOCAL_PORT=5555                       # Lokaler Port
REMOTE_PORT=5555                      # Remote Port (Prisma Studio)

# === Farben für Output ===
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# === Banner ===
echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║           Prisma Studio SSH Tunnel                            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# === Prüfe ob Port bereits belegt ist ===
if lsof -Pi :$LOCAL_PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}⚠️  Port $LOCAL_PORT ist bereits belegt!${NC}"
    echo ""
    echo "Möglicherweise läuft bereits ein Tunnel oder Prisma Studio lokal."
    echo ""
    echo "Laufende Prozesse auf Port $LOCAL_PORT:"
    lsof -Pi :$LOCAL_PORT -sTCP:LISTEN
    echo ""
    read -p "Prozess beenden und fortfahren? [y/N] " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Beende Prozess..."
        lsof -ti :$LOCAL_PORT | xargs kill -9 2>/dev/null || true
        sleep 1
    else
        echo "Abgebrochen."
        exit 1
    fi
fi

# === Server-Konfiguration aus .env lesen (optional) ===
if [ -f .env ]; then
    # Versuche SERVER_HOST aus .env zu lesen
    ENV_DOMAIN=$(grep "^DOMAIN=" .env 2>/dev/null | cut -d'=' -f2)
    if [ ! -z "$ENV_DOMAIN" ]; then
        SERVER_HOST="$ENV_DOMAIN"
    fi
fi

# === SSH-Identity prüfen ===
SSH_OPTS=""
if [ ! -z "$SSH_IDENTITY" ]; then
    if [ ! -f "$SSH_IDENTITY" ]; then
        echo -e "${RED}❌ Fehler: SSH-Identity-File nicht gefunden: $SSH_IDENTITY${NC}"
        exit 1
    fi
    SSH_OPTS="-i $SSH_IDENTITY"
    echo -e "${GREEN}🔑 Verwende SSH-Identity: $SSH_IDENTITY${NC}"
    echo ""
fi

# === Zeige Konfiguration ===
echo -e "${GREEN}📡 Tunnel-Konfiguration:${NC}"
echo "   Server:      $SERVER_USER@$SERVER_HOST"
echo "   SSH Key:     ${SSH_IDENTITY:-default (~/.ssh/)}"
echo "   Local Port:  $LOCAL_PORT"
echo "   Remote Port: $REMOTE_PORT"
echo ""

# === Prüfe SSH-Verbindung ===
echo "🔍 Prüfe SSH-Verbindung..."
if ! ssh -q -o BatchMode=yes -o ConnectTimeout=5 $SSH_OPTS $SERVER_USER@$SERVER_HOST exit 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Keine SSH-Key-Authentifizierung verfügbar.${NC}"
    echo "   Du wirst nach einem Passwort gefragt."
    echo ""
fi

# === Erstelle SSH-Tunnel ===
echo -e "${GREEN}🚇 Erstelle SSH-Tunnel...${NC}"
echo ""
echo "   Drücke Ctrl+C um den Tunnel zu beenden"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Tunnel erstellen mit Port-Forwarding
# -N: Keine Remote-Befehle ausführen (nur Tunnel)
# -L: Local Port Forwarding
# -i: Identity file (optional)
# -o ServerAliveInterval=60: Keep-Alive alle 60 Sekunden
# -o ServerAliveCountMax=3: Max 3 verpasste Keep-Alives
ssh -N \
    $SSH_OPTS \
    -L ${LOCAL_PORT}:localhost:${REMOTE_PORT} \
    -o ServerAliveInterval=60 \
    -o ServerAliveCountMax=3 \
    ${SERVER_USER}@${SERVER_HOST} &

SSH_PID=$!

# Warte kurz auf Tunnel-Aufbau
sleep 2

# Prüfe ob SSH-Prozess noch läuft
if ! ps -p $SSH_PID > /dev/null 2>&1; then
    echo -e "${RED}❌ Fehler: SSH-Tunnel konnte nicht erstellt werden!${NC}"
    echo ""
    echo "Mögliche Probleme:"
    echo "  1. SSH-Verbindung fehlgeschlagen"
    echo "  2. Falscher Username oder Host"
    echo "  3. SSH-Key nicht konfiguriert"
    echo ""
    echo "Teste manuell:"
    echo "  ssh $SERVER_USER@$SERVER_HOST"
    exit 1
fi

# Zeige Erfolg
echo -e "${GREEN}✅ SSH-Tunnel läuft! (PID: $SSH_PID)${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}🎨 Prisma Studio:${NC}"
echo ""
echo "   🌐 Öffne im Browser: ${GREEN}http://localhost:${LOCAL_PORT}${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${YELLOW}⚠️  Hinweise:${NC}"
echo "   • Stelle sicher dass Prisma Studio auf dem Server läuft:"
echo "     ssh $SERVER_USER@$SERVER_HOST 'cd /opt/gym-inf && ./scripts/prisma-studio.sh start'"
echo ""
echo "   • Drücke Ctrl+C um den Tunnel zu beenden"
echo ""

# Cleanup-Funktion bei Ctrl+C
cleanup() {
    echo ""
    echo ""
    echo -e "${YELLOW}🛑 Beende SSH-Tunnel...${NC}"
    kill $SSH_PID 2>/dev/null || true
    echo -e "${GREEN}✅ Tunnel beendet.${NC}"
    exit 0
}

trap cleanup INT TERM

# Warte auf Benutzer-Input (Ctrl+C)
wait $SSH_PID
