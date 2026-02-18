#!/bin/bash
# =============================================================================
# SSL certificate renewal
#
# Let's Encrypt certificates expire after 90 days.
# This script renews certificates that are close to expiration.
#
# Usage:
#   ./scripts/ssl-renew.sh
#
# Add to crontab for automatic renewal:
#   crontab -e
#   # Run daily at 3 AM (certbot won't renew unless cert is close to expiry):
#   0 3 * * * /path/to/gym-inf/scripts/ssl-renew.sh >> /var/log/ssl-renew.log 2>&1
#
# Manual Steps Equivalent:
#   # 1. Run certbot renew
#   docker run --rm \
#     -v gym-inf_certbot_www:/var/www/certbot \
#     -v gym-inf_certbot_conf:/etc/letsencrypt \
#     certbot/certbot renew --quiet
#   
#   # 2. Reload nginx to use new certificates
#   docker compose -f docker-compose.prod.yml exec nginx nginx -s reload
# =============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# === STEP 1: Determine project directory ===
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

# === STEP 2: Log renewal attempt ===
echo "[$(date)] Starting SSL certificate renewal check..."

# === STEP 3: Run certbot renewal ===
# Certbot will:
#   - Check all certificates in /etc/letsencrypt
#   - Renew only if certificate expires within 30 days
#   - Skip renewal if certificate is still valid
# --quiet: Only output on error
docker run --rm \
    -v gym-inf_certbot_www:/var/www/certbot \
    -v gym-inf_certbot_conf:/etc/letsencrypt \
    certbot/certbot \
    renew --quiet

# Capture exit code
RENEW_EXIT=$?

# === STEP 4: Reload nginx if renewal succeeded ===
if [ $RENEW_EXIT -eq 0 ]; then
    echo "[$(date)] Certificate renewal check completed successfully"
    
    # Reload nginx to pick up renewed certificates
    # -s reload: Graceful reload (no downtime)
    echo "[$(date)] Reloading nginx configuration..."
    docker compose -f docker-compose.prod.yml exec nginx nginx -s reload 2>/dev/null || {
        echo "[$(date)] Warning: Could not reload nginx (may not be running)"
    }
    
    echo "[$(date)] SSL renewal process complete"
else
    echo "[$(date)] ERROR: Certificate renewal failed (exit code: $RENEW_EXIT)"
    echo "[$(date)] Check certbot logs for details"
    exit 1
fi

# === STEP 5: Show certificate status ===
echo ""
echo "Current certificates:"
docker run --rm -v gym-inf_certbot_conf:/etc/letsencrypt certbot/certbot certificates 2>/dev/null || true
