#!/bin/bash
# =============================================================================
# SSL certificate renewal
#
# Let's Encrypt certificates expire after 90 days.
# Add this to crontab to run automatically:
#   0 3 * * * /path/to/gym-inf/scripts/ssl-renew.sh >> /var/log/ssl-renew.log 2>&1
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "[$(date)] Starting SSL certificate renewal..."

docker run --rm \
    -v gym-inf_certbot_www:/var/www/certbot \
    -v gym-inf_certbot_conf:/etc/letsencrypt \
    certbot/certbot \
    renew --quiet

# Reload nginx to pick up renewed certificates
docker compose -f docker-compose.prod.yml exec nginx nginx -s reload 2>/dev/null || true

echo "[$(date)] SSL renewal check complete."
