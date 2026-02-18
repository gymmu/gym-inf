#!/bin/bash
# =============================================================================
# Prisma Studio Management Script
#
# Usage:
#   ./scripts/prisma-studio.sh start    # Start Prisma Studio in production
#   ./scripts/prisma-studio.sh stop     # Stop Prisma Studio
#   ./scripts/prisma-studio.sh status   # Check if running
#   ./scripts/prisma-studio.sh dev      # Start locally in dev mode
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

case "${1:-}" in
    start)
        echo "=== Starting Prisma Studio in Production ==="
        echo ""
        echo "This will start Prisma Studio on the server."
        echo "Access it at: https://your-domain.com/prisma-studio/"
        echo ""
        
        # Start Prisma Studio service
        docker compose -f docker-compose.prod.yml -f docker-compose.prisma-studio.yml up -d prisma-studio
        
        echo ""
        echo "✓ Prisma Studio started"
        echo ""
        echo "Access: https://$(grep DOMAIN .env | cut -d'=' -f2)/prisma-studio/"
        echo ""
        echo "To stop: ./scripts/prisma-studio.sh stop"
        echo ""
        echo "⚠️  SECURITY WARNING:"
        echo "   Prisma Studio provides full database access!"
        echo "   Consider enabling HTTP Basic Auth in nginx config."
        ;;
        
    stop)
        echo "=== Stopping Prisma Studio ==="
        docker compose -f docker-compose.prod.yml -f docker-compose.prisma-studio.yml stop prisma-studio
        docker compose -f docker-compose.prod.yml -f docker-compose.prisma-studio.yml rm -f prisma-studio
        echo "✓ Prisma Studio stopped"
        ;;
        
    status)
        echo "=== Prisma Studio Status ==="
        if docker ps --filter "name=gym-inf-prisma-studio" --format "{{.Names}}" | grep -q prisma-studio; then
            echo "✓ Prisma Studio is RUNNING"
            docker ps --filter "name=gym-inf-prisma-studio" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
            echo ""
            echo "Access: https://$(grep DOMAIN .env 2>/dev/null | cut -d'=' -f2)/prisma-studio/"
        else
            echo "✗ Prisma Studio is NOT running"
            echo ""
            echo "To start: ./scripts/prisma-studio.sh start"
        fi
        ;;
        
    dev)
        echo "=== Starting Prisma Studio in Dev Mode ==="
        echo ""
        echo "This will start Prisma Studio locally."
        echo "Access it at: http://localhost:5555"
        echo ""
        echo "Press Ctrl+C to stop"
        echo ""
        
        cd server
        npm run prisma:studio
        ;;
        
    logs)
        echo "=== Prisma Studio Logs ==="
        docker logs -f gym-inf-prisma-studio
        ;;
        
    *)
        echo "Prisma Studio Management"
        echo ""
        echo "Usage:"
        echo "  $0 start    - Start Prisma Studio in production"
        echo "  $0 stop     - Stop Prisma Studio"
        echo "  $0 status   - Check if running"
        echo "  $0 logs     - View logs"
        echo "  $0 dev      - Start locally in dev mode"
        echo ""
        echo "Production Access: https://your-domain.com/prisma-studio/"
        echo "Dev Access:        http://localhost:5555"
        exit 1
        ;;
esac
