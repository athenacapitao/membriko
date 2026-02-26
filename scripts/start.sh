#!/bin/bash
# Startup script for membriko — ensures assets exist, then starts the server.

cd /home/athena/membriko

# Ensure static assets are in the standalone directory
./scripts/ensure-assets.sh

# Start the Next.js standalone server
exec node .next/standalone/server.js
