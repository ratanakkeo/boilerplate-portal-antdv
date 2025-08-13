#!/bin/bash

# Development script for monorepo
case "$1" in
  "frontend")
    echo "Starting frontend development server..."
    pnpm install && pnpm dev
    ;;
  "backend")
    echo "Starting backend development server..."
    cd backend && pnpm install && pnpm run start:debug
    ;;
  "both")
    echo "Starting both frontend and backend..."
    # Start backend in background
    (cd backend && pnpm install && pnpm run start:debug) &
    # Start frontend in foreground
    pnpm install && pnpm dev
    ;;
  *)
    echo "Usage: ./scripts/dev.sh [frontend|backend|both]"
    echo "  frontend - Start only frontend development server"
    echo "  backend  - Start only backend development server"  
    echo "  both     - Start both servers"
    exit 1
    ;;
esac