#!/bin/bash
# =============================================================================
# Production deployment script
#
# Usage:
#   First time:
#     1. Configure .env (copy from .env.production.example)
#     2. Run ./scripts/ssl-init.sh to get SSL certificates
#     3. Run ./scripts/deploy.sh
#
#   Updates:
#     git pull && ./scripts/deploy.sh
#
# Manual Steps Equivalent:
#   # 1. Check .env file exists
#   [ -f .env ] && echo "OK" || echo "Missing .env"
#   
#   # 2. Load environment variables
#   source .env
#   
#   # 3. Replace domain in nginx config
#   sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf
#   
#   # 4. Pull latest Docker images from registry
#   docker compose -f docker-compose.prod.yml pull
#   
#   # 5. Start all services
#   docker compose -f docker-compose.prod.yml up -d
#   
#   # 6. Check health
#   curl -sf http://localhost:3000/api/health
# =============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# === STEP 1: Determine project directory ===
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Change to project root directory
cd "$PROJECT_DIR"

echo "=== Gym-Inf Production Deployment ==="

# === STEP 2: Check prerequisites ===
# Verify .env file exists
if [ ! -f .env ]; then
    echo "Error: .env file not found."
    echo "Copy .env.production.example to .env and configure it."
    echo ""
    echo "Manual steps:"
    echo "  cp .env.production.example .env"
    echo "  nano .env"
    echo "  # Fill in:"
    echo "  #   - RESEND_API_KEY (your production API key)"
    echo "  #   - DB_PASSWORD (generate: openssl rand -hex 24)"
    echo "  #   - SESSION_SECRET (generate: openssl rand -base64 48)"
    echo "  #   - JWT_SECRET (generate: openssl rand -base64 48)"
    exit 1
fi

# Load environment variables from .env
source .env

# === STEP 3: Validate required environment variables ===
# Check DOMAIN is set
if [ -z "$DOMAIN" ]; then
    echo "Error: DOMAIN must be set in .env"
    echo "Example: DOMAIN=gym-inf.me"
    exit 1
fi

# Check DB_PASSWORD is configured
if [ -z "$DB_PASSWORD" ] || echo "$DB_PASSWORD" | grep -q "CHANGE_ME"; then
    echo "Error: DB_PASSWORD must be changed from the default value."
    echo "Generate secure password: openssl rand -hex 24"
    exit 1
fi

# Check SESSION_SECRET is configured
if [ -z "$SESSION_SECRET" ] || echo "$SESSION_SECRET" | grep -q "CHANGE_ME"; then
    echo "Error: SESSION_SECRET must be changed from the default value."
    echo "Generate secure secret: openssl rand -base64 48"
    exit 1
fi

# === STEP 4: Configure nginx with domain ===
echo "Configuring nginx for domain: $DOMAIN"
# Replace DOMAIN_PLACEHOLDER in nginx template with actual domain
# This creates nginx/nginx.prod.active.conf used by docker-compose.prod.yml
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf
echo "Nginx config generated: nginx/nginx.prod.active.conf"

# Use the generated config
NGINX_CONF="nginx/nginx.prod.active.conf"

# === STEP 5: Check SSL certificates ===
# Verify certbot volumes exist (created by ssl-init.sh)
CERT_CHECK=$(docker volume ls -q | grep certbot_conf || true)
if [ -z "$CERT_CHECK" ]; then
    echo ""
    echo "Warning: SSL certificates not found."
    echo "SSL certificates are required for HTTPS."
    echo ""
    echo "To obtain certificates, run:"
    echo "  ./scripts/ssl-init.sh"
    echo ""
    echo "This will:"
    echo "  1. Start temporary nginx on port 80"
    echo "  2. Request Let's Encrypt certificate for $DOMAIN"
    echo "  3. Store certificate in Docker volume"
    echo ""
    read -p "Continue without SSL? (only for testing) [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# === STEP 6: Pull latest Docker images ===
echo "Pulling latest images from GitHub Container Registry..."
# Downloads pre-built images (client & server) from ghcr.io/gymmu
# Images must be pushed first using ./scripts/build-and-push.sh
docker compose -f docker-compose.prod.yml pull

# === STEP 7: Start services ===
echo "Starting services..."
# Starts all containers defined in docker-compose.prod.yml:
#   - postgres (database)
#   - server (Node.js backend)
#   - client (React frontend)
#   - nginx (reverse proxy & SSL)
#   - certbot (SSL renewal)
# -d flag runs in detached mode (background)
docker compose -f docker-compose.prod.yml up -d

# === STEP 8: Wait for services to initialize ===
echo "Waiting for services to start..."
# Give containers time to start and run health checks
sleep 10

# === STEP 9: Health check ===
echo "Checking server health..."
# Test if backend API is responding
HEALTH=$(curl -sf http://localhost:3000/api/health 2>/dev/null || echo "FAIL")

# === STEP 10: Report deployment status ===
if echo "$HEALTH" | grep -q "ok"; then
    echo ""
    echo "=== Deployment successful! ==="
    echo ""
    echo "Services running:"
    docker compose -f docker-compose.prod.yml ps
    echo ""
    echo "🌐 Site:  https://$DOMAIN"
    echo "📡 API:   https://$DOMAIN/api"
    echo ""
    echo "📧 Email: Resend configured"
    echo "   Check: docker logs gym-inf-server | grep -i \"email client\""
    echo ""
    echo "Useful commands:"
    echo "  View logs:     docker compose -f docker-compose.prod.yml logs -f server"
    echo "  Stop all:      docker compose -f docker-compose.prod.yml down"
    echo "  Restart all:   docker compose -f docker-compose.prod.yml restart"
    echo "  Restart one:   docker compose -f docker-compose.prod.yml restart server"
    echo ""
    echo "Environment variables:"
    echo "  Check:         docker exec gym-inf-server printenv | grep RESEND"
    echo "  Update:        nano .env && docker-compose down && docker-compose up -d"
    echo ""
    echo "Database backup:"
    echo "  Manual:        ./scripts/backup-db.sh"
    echo "  Automatic:     Add to crontab (see backup-db.sh)"
    echo ""
    echo "SSL renewal:"
    echo "  Manual:        ./scripts/ssl-renew.sh"
    echo "  Automatic:     Add to crontab:"
    echo "    sudo crontab -e"
    echo "    0 3 * * * $PROJECT_DIR/scripts/ssl-renew.sh >> /var/log/ssl-renew.log 2>&1"
else
    echo ""
    echo "=== Deployment may have issues ==="
    echo "Health check failed. Showing recent logs:"
    echo ""
    docker compose -f docker-compose.prod.yml logs --tail 20 server
    echo ""
    echo "Troubleshooting:"
    echo "  1. Check all containers: docker compose -f docker-compose.prod.yml ps"
    echo "  2. View full logs: docker logs gym-inf-server"
    echo "  3. Check email config: docker exec gym-inf-server printenv | grep RESEND"
    echo "  4. Check .env file: cat .env | grep -E '(RESEND|DB|SESSION)'"
fi
