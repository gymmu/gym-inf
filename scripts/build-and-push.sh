#!/bin/bash
# =============================================================================
# Build Docker images locally and push to GitHub Container Registry
#
# Run this on your LOCAL machine (not the VPS).
#
# Prerequisites:
#   docker login ghcr.io -u YOUR_GITHUB_USERNAME
#   (use a Personal Access Token with packages:write scope as password)
#
# Usage:
#   ./scripts/build-and-push.sh            # build and push both
#   ./scripts/build-and-push.sh client     # build and push only client
#   ./scripts/build-and-push.sh server     # build and push only server
# =============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

REGISTRY="ghcr.io/gymmu"
CLIENT_IMAGE="$REGISTRY/gym-inf-client"
SERVER_IMAGE="$REGISTRY/gym-inf-server"
TAG="latest"

TARGET="${1:-all}"

build_client() {
    echo "=== Building client image ==="
    docker build -t "$CLIENT_IMAGE:$TAG" ./client
    echo "Client image built: $CLIENT_IMAGE:$TAG"
}

build_server() {
    echo "=== Building server image ==="
    docker build -t "$SERVER_IMAGE:$TAG" -f ./server/Dockerfile ./server
    echo "Server image built: $SERVER_IMAGE:$TAG"
}

push_client() {
    echo "=== Pushing client image ==="
    docker push "$CLIENT_IMAGE:$TAG"
    echo "Client image pushed."
}

push_server() {
    echo "=== Pushing server image ==="
    docker push "$SERVER_IMAGE:$TAG"
    echo "Server image pushed."
}

case "$TARGET" in
    client)
        build_client
        push_client
        ;;
    server)
        build_server
        push_server
        ;;
    all)
        build_client
        build_server
        push_client
        push_server
        ;;
    *)
        echo "Usage: $0 [client|server|all]"
        exit 1
        ;;
esac

echo ""
echo "=== Done! ==="
echo ""
echo "To deploy on the VPS:"
echo "  ssh deploy@<VPS_IP>"
echo "  cd /opt/gym-inf && git pull && ./scripts/deploy.sh"
