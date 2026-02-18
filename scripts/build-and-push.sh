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
#
# Manual Steps Equivalent:
#   # Build client:
#   docker build -t ghcr.io/gymmu/gym-inf-client:latest ./client
#   
#   # Build server:
#   docker build -t ghcr.io/gymmu/gym-inf-server:latest -f ./server/Dockerfile ./server
#   
#   # Push client:
#   docker push ghcr.io/gymmu/gym-inf-client:latest
#   
#   # Push server:
#   docker push ghcr.io/gymmu/gym-inf-server:latest
# =============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# === STEP 1: Determine project directory ===
# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# Get the parent directory (project root)
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Change to project directory
cd "$PROJECT_DIR"

# === STEP 2: Define Docker image names ===
# GitHub Container Registry path
REGISTRY="ghcr.io/gymmu"
CLIENT_IMAGE="$REGISTRY/gym-inf-client"
SERVER_IMAGE="$REGISTRY/gym-inf-server"
TAG="latest"

# === STEP 3: Parse command line argument ===
# Default to "all" if no argument provided
TARGET="${1:-all}"

# === FUNCTION: Build client Docker image ===
build_client() {
    echo "=== Building client image ==="
    # Build frontend (React/Vite) Docker image
    # Context: ./client directory
    # Uses: client/Dockerfile
    docker build -t "$CLIENT_IMAGE:$TAG" ./client
    echo "Client image built: $CLIENT_IMAGE:$TAG"
}

# === FUNCTION: Build server Docker image ===
build_server() {
    echo "=== Building server image ==="
    # Build backend (Node.js/Express) Docker image
    # Context: ./server directory
    # Uses: server/Dockerfile
    docker build -t "$SERVER_IMAGE:$TAG" -f ./server/Dockerfile ./server
    echo "Server image built: $SERVER_IMAGE:$TAG"
}

# === FUNCTION: Push client image to registry ===
push_client() {
    echo "=== Pushing client image ==="
    # Upload client image to GitHub Container Registry
    # Server will pull this image during deployment
    docker push "$CLIENT_IMAGE:$TAG"
    echo "Client image pushed."
}

# === FUNCTION: Push server image to registry ===
push_server() {
    echo "=== Pushing server image ==="
    # Upload server image to GitHub Container Registry
    # Server will pull this image during deployment
    docker push "$SERVER_IMAGE:$TAG"
    echo "Server image pushed."
}

# === STEP 4: Execute based on target ===
case "$TARGET" in
    client)
        # Build and push only client
        build_client
        push_client
        ;;
    server)
        # Build and push only server
        build_server
        push_server
        ;;
    all)
        # Build both images first (faster in parallel)
        build_client
        build_server
        # Then push both
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
echo "Images pushed to:"
echo "  $CLIENT_IMAGE:$TAG"
echo "  $SERVER_IMAGE:$TAG"
echo ""
echo "To deploy on the VPS:"
echo "  ssh deploy@<VPS_IP>"
echo "  cd /opt/gym-inf && git pull && ./scripts/deploy.sh"
