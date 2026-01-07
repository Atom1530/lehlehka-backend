# Lehlehka Backend (PR-02 Prisma schema)

This is PR-02 of the backend plan for the **Lehlehka** team project.

## What's included
- Express + TypeScript skeleton (from PR-01)
- Prisma + PostgreSQL schema (User, Session, Task, DiaryEntry, Emotion, Weeks)
- Prisma scripts and environment validation (Zod)
- Optional `/health/db` endpoint to verify DB connectivity

## Requirements
- Node.js 18+ (recommended 20+)
- PostgreSQL (local or cloud)
- npm

## Setup
1) Install dependencies
```bash
npm install
```

2) Create `.env`
```bash
cp .env.example .env
```
Edit `.env` and set `DATABASE_URL`.

3) Create DB schema (initial migration)
```bash
npm run prisma:migrate:dev -- --name init
```

4) Run in dev mode
```bash
npm run dev
```

## Useful URLs
- Health check: `GET /health`
- DB check: `GET /health/db`
- Swagger UI: `GET /docs`

## Notes
- PR-03 will add **seed** from JSON (`emotions`, `mom_states`, `baby_states`) and then proceed with Auth.
