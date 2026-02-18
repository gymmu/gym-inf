#!/bin/bash
# =============================================================================
# Initial SSL certificate generation with Let's Encrypt
#
# Run this ONCE on a fresh server before starting the full production stack.
# Prerequisites:
#   - Domain DNS A-record must point to this server's IP
#   - Ports 80 and 443 must be open and not used by other services
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

set -a
source .env
set +a

if [ -z "$DOMAIN" ] || [ -z "$CERTBOT_EMAIL" ]; then
    echo "Error: DOMAIN and CERTBOT_EMAIL must be set in .env"
    exit 1
fi

echo "=== SSL Certificate Setup for $DOMAIN ==="
echo ""

# Step 0: Stop any running services that might occupy port 80
echo "Stopping any running gym-inf services..."
docker compose -f docker-compose.prod.yml down 2>/dev/null || true
docker stop gym-inf-nginx-init 2>/dev/null || true
docker rm gym-inf-nginx-init 2>/dev/null || true

# Step 1: Prepare nginx config for domain
echo "Configuring nginx for domain: $DOMAIN"
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf

# Step 2: Create shared docker volumes if they don't exist
docker volume create gym-inf_certbot_www 2>/dev/null || true
docker volume create gym-inf_certbot_conf 2>/dev/null || true

# Step 3: Start a minimal nginx that only serves the ACME challenge
echo "Starting temporary nginx on port 80..."
docker run -d \
    --name gym-inf-nginx-init \
    -p 80:80 \
    -v gym-inf_certbot_www:/var/www/certbot \
    nginx:alpine \
    sh -c 'mkdir -p /var/www/certbot && echo "events { worker_connections 1024; } http { server { listen 80; server_name _; location /.well-known/acme-challenge/ { root /var/www/certbot; } location / { return 200 \"OK\"; add_header Content-Type text/plain; } } }" > /etc/nginx/nginx.conf && nginx -g "daemon off;"'

sleep 3

# Step 4: Verify nginx is running and port 80 is reachable
echo "Verifying nginx is running..."
if ! docker ps | grep -q gym-inf-nginx-init; then
    echo "Error: Temporary nginx failed to start."
    docker logs gym-inf-nginx-init 2>&1
    exit 1
fi

echo "Testing local connectivity..."
if curl -sf http://localhost/ > /dev/null 2>&1; then
    echo "Port 80 is reachable locally."
else
    echo "Warning: Could not reach port 80 locally. Certbot may fail."
    echo "Check that no other service is using port 80 and that ufw allows it."
fi

# Step 5: Request certificate from Let's Encrypt
echo ""
echo "Requesting SSL certificate for $DOMAIN..."
echo ""

docker run --rm \
    -v gym-inf_certbot_www:/var/www/certbot \
    -v gym-inf_certbot_conf:/etc/letsencrypt \
    certbot/certbot \
    certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$CERTBOT_EMAIL" \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d "$DOMAIN"

CERTBOT_EXIT=$?

# Step 6: Stop temporary nginx
echo ""
echo "Stopping temporary nginx..."
docker stop gym-inf-nginx-init 2>/dev/null || true
docker rm gym-inf-nginx-init 2>/dev/null || true

# Step 7: Check result
if [ $CERTBOT_EXIT -ne 0 ]; then
    echo ""
    echo "=== SSL certificate request FAILED ==="
    echo ""
    echo "Common causes:"
    echo "  - DNS A-record for $DOMAIN does not point to this server"
    echo "  - Port 80 is blocked by firewall (check: ufw status)"
    echo "  - Another service is using port 80"
    echo ""
    echo "Debug steps:"
    echo "  1. Verify DNS: dig $DOMAIN +short"
    echo "  2. Check firewall: ufw status"
    echo "  3. Check port: ss -tlnp | grep :80"
    exit 1
fi

# Step 8: Verify certificate exists
echo "Verifying certificate..."
if docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt certbot/certbot certificates 2>&1 | grep -q "$DOMAIN"; then
    echo ""
    echo "=== SSL certificate obtained successfully! ==="
    echo ""
    echo "Certificate for: $DOMAIN"
    echo ""
    echo "You can now start the full production stack:"
    echo "  ./scripts/deploy.sh"
else
    echo ""
    echo "Error: Certificate not found after certbot run."
    exit 1
fi
