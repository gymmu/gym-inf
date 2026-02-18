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
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "=== Gym-Inf Production Deployment ==="

# Check prerequisites
if [ ! -f .env ]; then
    echo "Error: .env file not found."
    echo "Copy .env.production.example to .env and configure it."
    exit 1
fi

source .env

if [ -z "$DOMAIN" ]; then
    echo "Error: DOMAIN must be set in .env"
    exit 1
fi

if [ -z "$DB_PASSWORD" ] || [ "$DB_PASSWORD" = "CHANGE_ME_GENERATE_WITH_openssl_rand_-base64_24" ]; then
    echo "Error: DB_PASSWORD must be changed from the default value."
    exit 1
fi

if [ -z "$SESSION_SECRET" ] || [ "$SESSION_SECRET" = "CHANGE_ME_GENERATE_WITH_openssl_rand_-base64_48" ]; then
    echo "Error: SESSION_SECRET must be changed from the default value."
    exit 1
fi

# Replace domain placeholder in nginx config
echo "Configuring nginx for domain: $DOMAIN"
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf

# Use the generated config
NGINX_CONF="nginx/nginx.prod.active.conf"

# Check if SSL certificates exist
CERT_CHECK=$(docker volume ls -q | grep certbot_conf || true)
if [ -z "$CERT_CHECK" ]; then
    echo ""
    echo "Warning: SSL certificates not found."
    echo "Run ./scripts/ssl-init.sh first to obtain certificates."
    echo ""
    read -p "Continue without SSL? (only for testing) [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build and deploy
echo "Building containers..."
docker compose -f docker-compose.prod.yml build

echo "Starting services..."
docker compose -f docker-compose.prod.yml up -d

# Wait for health check
echo "Waiting for services to start..."
sleep 10

# Check health
HEALTH=$(curl -sf http://localhost:3000/api/health 2>/dev/null || echo "FAIL")
if echo "$HEALTH" | grep -q "ok"; then
    echo ""
    echo "=== Deployment successful! ==="
    echo ""
    echo "Services running:"
    docker compose -f docker-compose.prod.yml ps
    echo ""
    echo "API available at: https://$DOMAIN"
    echo ""
    echo "Useful commands:"
    echo "  Logs:    docker compose -f docker-compose.prod.yml logs -f server"
    echo "  Stop:    docker compose -f docker-compose.prod.yml down"
    echo "  Restart: docker compose -f docker-compose.prod.yml restart"
    echo ""
    echo "Don't forget to set up SSL renewal cron:"
    echo "  sudo crontab -e"
    echo "  0 3 * * * $PROJECT_DIR/scripts/ssl-renew.sh >> /var/log/ssl-renew.log 2>&1"
else
    echo ""
    echo "=== Deployment may have issues ==="
    echo "Check logs: docker compose -f docker-compose.prod.yml logs -f server"
    docker compose -f docker-compose.prod.yml logs --tail 20 server
fi
