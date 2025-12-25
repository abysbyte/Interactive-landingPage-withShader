#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building project..."
npx --yes vite build

echo "Build complete!"
