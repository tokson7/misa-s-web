#!/bin/bash

echo "🚀 Starting Cloudflare tunnel..."
echo ""

# Kill any existing tunnels
pkill -f cloudflared 2>/dev/null
sleep 1

# Start tunnel and capture URL
cloudflared tunnel --url http://localhost:5173 2>&1 | while IFS= read -r line; do
    echo "$line"
    if echo "$line" | grep -qE "https://.*\.trycloudflare\.com"; then
        URL=$(echo "$line" | grep -oE "https://[a-zA-Z0-9-]+\.trycloudflare\.com" | head -1)
        if [ ! -z "$URL" ]; then
            echo ""
            echo "✅ ========================================="
            echo "✅ Your live preview URL is ready!"
            echo "✅ ========================================="
            echo ""
            echo "🌐 $URL"
            echo ""
            echo "✅ Open this URL in your browser to see your changes!"
            echo ""
            echo "Press Ctrl+C to stop the tunnel"
            echo "========================================="
        fi
    fi
done

