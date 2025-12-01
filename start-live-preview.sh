#!/bin/bash

# Start Vite dev server in background
echo "🚀 Starting Vite dev server..."
npm run dev -- --host 0.0.0.0 --port 5173 > /dev/null 2>&1 &
VITE_PID=$!

# Wait for server to start
sleep 3

# Start Cloudflare Tunnel
echo "🌐 Starting Cloudflare Tunnel..."
echo "⏳ Please wait for the public URL..."
echo ""

cloudflared tunnel --url http://localhost:5173

# Cleanup on exit
trap "kill $VITE_PID 2>/dev/null" EXIT

