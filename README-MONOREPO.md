# Monorepo Development Guide

This project is configured as a monorepo with separate frontend and backend applications.

## Project Structure

```
├── backend/          # NestJS backend application
│   ├── package.json  # Backend dependencies and scripts
│   ├── src/         # Backend source code
│   └── ...
├── src/             # Vue.js frontend source code
├── package.json     # Frontend dependencies and scripts (root)
├── pnpm-workspace.yaml  # Workspace configuration
└── scripts/dev.sh   # Development helper script
```

## Development Commands

### Backend Development
```bash
cd backend
pnpm install
pnpm run start:debug
```

### Frontend Development  
```bash
# From root directory
pnpm install
pnpm dev
```

### Using Helper Script
```bash
# Start frontend only
./scripts/dev.sh frontend

# Start backend only
./scripts/dev.sh backend

# Start both (backend in background, frontend in foreground)
./scripts/dev.sh both
```

## Node Modules Separation

- **Frontend**: `node_modules/` in root directory
- **Backend**: `node_modules/` in `backend/` directory

Each application manages its own dependencies independently, ensuring clean separation.

## Package Management

This monorepo uses pnpm workspaces. The workspace is configured in `pnpm-workspace.yaml`:

```yaml
packages:
  - packages/*
  - backend
```

## Environment Setup

1. Install dependencies for frontend:
   ```bash
   pnpm install
   ```

2. Install dependencies for backend:
   ```bash
   cd backend && pnpm install
   ```

3. Start development servers as needed using the commands above.