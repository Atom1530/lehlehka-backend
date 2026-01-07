# Lehlehka Backend (PR-01 Bootstrap)

Backend skeleton for the Lehlehka (Next + Node) team project.

## Requirements
- Node.js 18+ (recommended 20+)
- npm

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```

## Useful URLs
- Health check: `GET /health`
- Swagger UI: `GET /docs`

## Scripts
- `npm run dev` — run in watch mode
- `npm run build` — build to `dist/`
- `npm run start` — start built server
- `npm run lint` — eslint
- `npm run format` — prettier

## Notes
This is PR-01 (bootstrap) only: no database, no auth, no domain modules yet.
