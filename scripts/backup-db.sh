#!/bin/bash
# =============================================================================
# Database backup script
#
# Creates a timestamped SQL dump in the backups/ directory.
# Keeps last 30 backups automatically.
#
# Usage:
#   ./scripts/backup-db.sh
#
# Add to crontab for automatic daily backups:
#   crontab -e
#   # Daily backup at 2 AM:
#   0 2 * * * /path/to/gym-inf/scripts/backup-db.sh >> /var/log/db-backup.log 2>&1
#
# Manual Steps Equivalent:
#   # 1. Create backup directory
#   mkdir -p backups
#   
#   # 2. Export database to compressed SQL file
#   docker compose -f docker-compose.prod.yml exec -T postgres \
#     pg_dump -U gyminfuser gyminfdb | gzip > backups/gyminfdb_20260218_120000.sql.gz
#   
#   # 3. Cleanup old backups (keep last 30)
#   ls -t backups/gyminfdb_*.sql.gz | tail -n +31 | xargs rm -f
# =============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# === STEP 1: Determine directories ===
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$PROJECT_DIR/backups"
COMPOSE_FILE="docker-compose.prod.yml"

# Change to project directory
cd "$PROJECT_DIR"

# === STEP 2: Auto-detect which docker-compose file to use ===
# Check if production postgres is running
if ! docker compose -f "$COMPOSE_FILE" ps --status running 2>/dev/null | grep -q postgres; then
    # Production not running, try development
    COMPOSE_FILE="docker-compose.yml"
    echo "Note: Using development database (production not running)"
fi

# === STEP 3: Load environment variables ===
# Get database credentials from .env
source .env

# === STEP 4: Create backup directory ===
mkdir -p "$BACKUP_DIR"
echo "Backup directory: $BACKUP_DIR"

# === STEP 5: Generate backup filename with timestamp ===
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/gyminfdb_${TIMESTAMP}.sql.gz"

echo "[$(date)] Starting database backup..."
echo "Using compose file: $COMPOSE_FILE"

# === STEP 6: Create database dump ===
# Execute pg_dump inside postgres container
# -T flag: Read from stdin (allows piping)
# pg_dump: PostgreSQL dump utility
#   -U: Database user
# Output is piped through gzip for compression
docker compose -f "$COMPOSE_FILE" exec -T postgres \
    pg_dump -U "${DB_USER:-gyminfuser}" "${DB_NAME:-gyminfdb}" \
    | gzip > "$BACKUP_FILE"

echo "[$(date)] Backup saved to: $BACKUP_FILE"

# === STEP 7: Cleanup old backups ===
# Keep only the 30 most recent backups to save disk space
# ls -t: List files sorted by modification time (newest first)
# tail -n +31: Skip first 30 files (keep them), output rest
# xargs rm -f: Delete the old files
ls -t "$BACKUP_DIR"/gyminfdb_*.sql.gz 2>/dev/null | tail -n +31 | xargs rm -f 2>/dev/null || true

# Count remaining backups
BACKUP_COUNT=$(ls -1 "$BACKUP_DIR"/gyminfdb_*.sql.gz 2>/dev/null | wc -l)

# === STEP 8: Report backup details ===
BACKUP_SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
echo "[$(date)] Backup size: $BACKUP_SIZE"
echo "[$(date)] Total backups: $BACKUP_COUNT (keeping last 30)"
echo "[$(date)] Backup complete."

# === RESTORE INSTRUCTIONS ===
echo ""
echo "To restore this backup:"
echo "  # Stop services first:"
echo "  docker compose -f docker-compose.prod.yml down"
echo ""
echo "  # Restore database:"
echo "  gunzip -c $BACKUP_FILE | docker compose -f docker-compose.prod.yml exec -T postgres psql -U ${DB_USER:-gyminfuser} -d ${DB_NAME:-gyminfdb}"
echo ""
echo "  # Start services:"
echo "  docker compose -f docker-compose.prod.yml up -d"
