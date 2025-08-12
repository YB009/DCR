#!/bin/bash
set -e

export NODE_VERSION=20
echo "Using Node.js version: $NODE_VERSION"

echo "Installing root dependencies..."
npm install --include=dev

echo "Installing client dependencies..."
npm install --prefix client --include=dev

echo "Installing server dependencies..."
npm install --prefix server

echo "Building client..."
cd client
npm run build
cd ..

echo "Build completed successfully!"
