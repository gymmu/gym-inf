#!/bin/bash
# =============================================================================
# Initial SSL certificate generation with Let's Encrypt
#
# Run this ONCE on a fresh server before starting the full production stack.
#
# Prerequisites:
#   - Domain DNS A-record must point to this server's IP
#   - Ports 80 and 443 must be open and not used by other services
#   - .env file must be configured with DOMAIN and CERTBOT_EMAIL
#
# Usage:
#   ./scripts/ssl-init.sh
#
# Manual Steps Equivalent:
#   # 1. Stop any services using port 80
#   docker compose -f docker-compose.prod.yml down
#   
#   # 2. Create Docker volumes for certificates
#   docker volume create gym-inf_certbot_www
#   docker volume create gym-inf_certbot_conf
#   
#   # 3. Start temporary nginx on port 80
#   docker run -d --name gym-inf-nginx-init -p 80:80 \
#     -v gym-inf_certbot_www:/var/www/certbot nginx:alpine
#   
#   # 4. Request certificate from Let's Encrypt
#   docker run --rm \
#     -v gym-inf_certbot_www:/var/www/certbot \
#     -v gym-inf_certbot_conf:/etc/letsencrypt \
#     certbot/certbot certonly --webroot \
#     --webroot-path=/var/www/certbot \
#     --email your@email.com --agree-tos \
#     -d yourdomain.com
#   
#   # 5. Stop temporary nginx
#   docker stop gym-inf-nginx-init && docker rm gym-inf-nginx-init
# =============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# === STEP 1: Determine project directory ===
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

# === STEP 2: Load environment variables ===
if [ ! -f .env ]; then
    echo "Error: .env file not found."
    echo ""
    echo "Create .env file:"
    echo "  cp .env.production.example .env"
    echo "  nano .env"
    echo ""
    echo "Required variables:"
    echo "  DOMAIN=gym-inf.me"
    echo "  CERTBOT_EMAIL=your@email.com"
    exit 1
fi

# Load .env and export all variables
set -a
source .env
set +a

# === STEP 3: Validate required variables ===
if [ -z "$DOMAIN" ] || [ -z "$CERTBOT_EMAIL" ]; then
    echo "Error: DOMAIN and CERTBOT_EMAIL must be set in .env"
    echo ""
    echo "Example:"
    echo "  DOMAIN=gym-inf.me"
    echo "  CERTBOT_EMAIL=admin@gym-inf.me"
    exit 1
fi

echo "=== SSL Certificate Setup for $DOMAIN ==="
echo "Email: $CERTBOT_EMAIL"
echo ""

# === STEP 4: Stop conflicting services ===
echo "Stopping any running gym-inf services..."
# Stop production stack if running (releases port 80)
docker compose -f docker-compose.prod.yml down 2>/dev/null || true
# Stop any leftover temporary nginx
docker stop gym-inf-nginx-init 2>/dev/null || true
docker rm gym-inf-nginx-init 2>/dev/null || true

# === STEP 5: Prepare nginx config ===
echo "Configuring nginx for domain: $DOMAIN"
# Replace placeholder in nginx template with actual domain
sed "s/DOMAIN_PLACEHOLDER/$DOMAIN/g" nginx/nginx.prod.conf > nginx/nginx.prod.active.conf
echo "Nginx config: nginx/nginx.prod.active.conf"

# === STEP 6: Create Docker volumes ===
echo "Creating Docker volumes for certificates..."
# These volumes persist SSL certificates between container restarts
docker volume create gym-inf_certbot_www 2>/dev/null || true
docker volume create gym-inf_certbot_conf 2>/dev/null || true
echo "Volumes created: gym-inf_certbot_www, gym-inf_certbot_conf"

# === STEP 7: Start temporary nginx ===
echo ""
echo "Starting temporary nginx on port 80..."
echo "This serves ACME challenge for Let's Encrypt verification"
# Temporary nginx only serves /.well-known/acme-challenge/
# This is required for Let's Encrypt to verify domain ownership
docker run -d \
    --name gym-inf-nginx-init \
    -p 80:80 \
    -v gym-inf_certbot_www:/var/www/certbot \
    nginx:alpine \
    sh -c 'mkdir -p /var/www/certbot && echo "events { worker_connections 1024; } http { server { listen 80; server_name _; location /.well-known/acme-challenge/ { root /var/www/certbot; } location / { return 200 \"OK\"; add_header Content-Type text/plain; } } }" > /etc/nginx/nginx.conf && nginx -g "daemon off;"'

# Wait for nginx to start
sleep 3

# === STEP 8: Verify nginx is running ===
echo "Verifying nginx is running..."
if ! docker ps | grep -q gym-inf-nginx-init; then
    echo "Error: Temporary nginx failed to start."
    echo ""
    echo "Checking logs:"
    docker logs gym-inf-nginx-init 2>&1
    echo ""
    echo "Troubleshooting:"
    echo "  1. Check if port 80 is already in use: ss -tlnp | grep :80"
    echo "  2. Check firewall: ufw status"
    echo "  3. Stop conflicting services and try again"
    exit 1
fi

# === STEP 9: Test local connectivity ===
echo "Testing local connectivity to port 80..."
if curl -sf http://localhost/ > /dev/null 2>&1; then
    echo "✓ Port 80 is reachable locally"
else
    echo "⚠ Warning: Could not reach port 80 locally"
    echo ""
    echo "Certbot may fail if:"
    echo "  - Firewall blocks port 80 (check: ufw allow 80)"
    echo "  - DNS doesn't point to this server (check: dig $DOMAIN +short)"
    echo ""
    echo "Continuing anyway..."
fi

# === STEP 10: Request SSL certificate ===
echo ""
echo "Requesting SSL certificate for $DOMAIN..."
echo "This may take 30-60 seconds..."
echo ""
echo "Let's Encrypt will:"
echo "  1. Create challenge file in /.well-known/acme-challenge/"
echo "  2. Verify http://$DOMAIN/.well-known/acme-challenge/<token>"
echo "  3. Issue certificate if verification succeeds"
echo ""

# Run certbot to request certificate
# --webroot: Use webroot plugin (no need to stop nginx)
# --webroot-path: Where to place challenge files
# --agree-tos: Agree to Let's Encrypt ToS
# --force-renewal: Force renewal even if cert exists
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

# Capture certbot exit code
CERTBOT_EXIT=$?

# === STEP 11: Stop temporary nginx ===
echo ""
echo "Stopping temporary nginx..."
docker stop gym-inf-nginx-init 2>/dev/null || true
docker rm gym-inf-nginx-init 2>/dev/null || true

# === STEP 12: Check result ===
if [ $CERTBOT_EXIT -ne 0 ]; then
    echo ""
    echo "=== SSL certificate request FAILED ==="
    echo ""
    echo "Common causes:"
    echo ""
    echo "1. DNS not configured:"
    echo "   Check: dig $DOMAIN +short"
    echo "   Should return: this server's public IP"
    echo ""
    echo "2. Port 80 blocked by firewall:"
    echo "   Check: ufw status"
    echo "   Fix: ufw allow 80 && ufw allow 443"
    echo ""
    echo "3. Another service using port 80:"
    echo "   Check: ss -tlnp | grep :80"
    echo "   Fix: Stop the conflicting service"
    echo ""
    echo "4. Domain not pointing to this server:"
    echo "   Verify DNS A-record points to your server IP"
    echo ""
    exit 1
fi

# === STEP 13: Verify certificate ===
echo ""
echo "Verifying certificate installation..."
if docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt certbot/certbot certificates 2>&1 | grep -q "$DOMAIN"; then
    echo ""
    echo "=== ✓ SSL certificate obtained successfully! ==="
    echo ""
    echo "Certificate details:"
    docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt certbot/certbot certificates | grep -A 10 "$DOMAIN"
    echo ""
    echo "Certificate stored in Docker volume: gym-inf_certbot_conf"
    echo "Certificate path: /etc/letsencrypt/live/$DOMAIN/"
    echo ""
    echo "Next steps:"
    echo "  1. Start production stack: ./scripts/deploy.sh"
    echo "  2. Test HTTPS: curl -I https://$DOMAIN"
    echo "  3. Setup auto-renewal: see ssl-renew.sh"
    echo ""
    echo "Certificate will expire in 90 days."
    echo "Run ./scripts/ssl-renew.sh or add to crontab for auto-renewal."
else
    echo ""
    echo "Error: Certificate not found after certbot run"
    echo "Check certbot output above for errors"
    exit 1
fi
