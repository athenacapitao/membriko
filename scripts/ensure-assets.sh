#!/bin/bash
# Ensures standalone build has static assets before server starts.
# Called by PM2 ecosystem config as a pre-start script.

cd /home/athena/membriko

STANDALONE=".next/standalone"

if [ -d ".next/static" ]; then
  rm -rf "$STANDALONE/.next/static"
  cp -r .next/static "$STANDALONE/.next/static"
  echo "[ensure-assets] Synced .next/static into standalone"
fi

if [ -d "public" ]; then
  rm -rf "$STANDALONE/public"
  cp -r public "$STANDALONE/public"
  echo "[ensure-assets] Synced public into standalone"
fi

echo "[ensure-assets] Assets verified"
