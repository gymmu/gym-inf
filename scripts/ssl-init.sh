#!/bin/bash
# =============================================================================
# Initial SSL certificate generation with Let's Encrypt
#
# Run this ONCE on a fresh server before starting the full production stack.
# Prerequisites:
#   - Domain DNS A-record must point to this server's IP
#   - Ports 80 and 443 must be open
#   - .env file must be configured with DOMAIN and CERTBOT_EMAIL
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

# Load environment
if [ ! -f .env ]; then
    echo "Error: .env file not found. Copy .env.production.example to .env and configure it."
    exit 1
fi

source .env

if [ -z "$DOMAIN" ] || [ -z "$CERTBOT_EMAIL" ]; then
    echo "Error: DOMAIN and CERTBOT_EMAIL must be set in .env"
    exit 1
fi

echo "=== SSL Certificate Setup for $DOMAIN ==="

# Step 1: Replace DOMAIN_PLACEHOLDER in nginx config
echo "Configuring nginx for domain: $DOMAIN"
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf

# Step 2: Create a temporary nginx config for the initial certificate
cat > nginx/nginx.init.conf << 'INITCONF'
events {
    worker_connections 1024;
}
http {
    server {
        listen 80;
        server_name _;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        location / {
            return 200 'Waiting for SSL certificate...';
            add_header Content-Type text/plain;
        }
    }
}
INITCONF

# Step 3: Start nginx with temporary config for ACME challenge
echo "Starting temporary nginx for certificate challenge..."
docker compose -f docker-compose.prod.yml run -d \
    --name gym-inf-nginx-init \
    -p 80:80 \
    -v "$(pwd)/nginx/nginx.init.conf:/etc/nginx/nginx.conf:ro" \
    -v certbot_www:/var/www/certbot:ro \
    nginx

sleep 3

# Step 4: Request certificate
echo "Requesting certificate from Let's Encrypt..."
docker compose -f docker-compose.prod.yml run --rm certbot \
    certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$CERTBOT_EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN"

# Step 5: Stop temporary nginx
echo "Stopping temporary nginx..."
docker stop gym-inf-nginx-init 2>/dev/null || true
docker rm gym-inf-nginx-init 2>/dev/null || true

# Step 6: Clean up temporary config
rm -f nginx/nginx.init.conf

echo ""
echo "=== SSL certificate obtained successfully! ==="
echo ""
echo "You can now start the full production stack:"
echo "  ./scripts/deploy.sh"
