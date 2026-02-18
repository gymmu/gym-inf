#!/bin/bash
# =============================================================================
# Database backup script
#
# Creates a timestamped SQL dump in the backups/ directory.
# Add to crontab for automatic daily backups:
#   0 2 * * * /path/to/gym-inf/scripts/backup-db.sh >> /var/log/db-backup.log 2>&1
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$PROJECT_DIR/backups"
COMPOSE_FILE="docker-compose.prod.yml"

cd "$PROJECT_DIR"

# Use dev compose if prod is not running
if ! docker compose -f "$COMPOSE_FILE" ps --status running 2>/dev/null | grep -q postgres; then
    COMPOSE_FILE="docker-compose.yml"
fi

source .env

mkdir -p "$BACKUP_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/gyminfdb_${TIMESTAMP}.sql.gz"

echo "[$(date)] Starting database backup..."

docker compose -f "$COMPOSE_FILE" exec -T postgres \
    pg_dump -U "${DB_USER:-gyminfuser}" "${DB_NAME:-gyminfdb}" \
    | gzip > "$BACKUP_FILE"

echo "[$(date)] Backup saved to: $BACKUP_FILE"

# Keep only last 30 backups
ls -t "$BACKUP_DIR"/gyminfdb_*.sql.gz 2>/dev/null | tail -n +31 | xargs rm -f 2>/dev/null || true

BACKUP_SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
echo "[$(date)] Backup size: $BACKUP_SIZE"
echo "[$(date)] Backup complete."
