#!/usr/bin/env bash
set -euo pipefail

echo "Using Node.js version: $(node -v)"

# Clean stale installs (avoids weird perms)
rm -rf client/node_modules server/node_modules || true

echo "Installing root deps (incl. dev)…"
npm ci --include=dev

echo "Installing client deps (incl. dev)…"
npm ci --prefix client --include=dev

echo "Installing server deps…"
npm ci --prefix server

# Safety: ensure local bin scripts are executable (covers edge cases)
chmod +x client/node_modules/.bin/* || true

echo "Building client…"
npm run build --prefix client

echo "✅ Client built"
