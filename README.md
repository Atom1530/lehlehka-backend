<<<<<<< HEAD
# Lehlehka Backend (PR-02 Prisma schema)

This is PR-02 of the backend plan for the **Lehlehka** team project.
=======
# Lehlehka Backend (PR-03 Prisma seed)

This is PR-03 of the backend plan for the **Lehlehka** team project.
>>>>>>> 5219943 (prisma full version added)

## What's included
- Express + TypeScript skeleton (from PR-01)
- Prisma + PostgreSQL schema (User, Session, Task, DiaryEntry, Emotion, Weeks)
- Prisma scripts and environment validation (Zod)
- Optional `/health/db` endpoint to verify DB connectivity
<<<<<<< HEAD
=======
- Seed from JSON data:
  - `emotions` (180 items)
  - `mom_states` (weeks 1..42)
  - `baby_states` (weeks 1..42)
>>>>>>> 5219943 (prisma full version added)

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

<<<<<<< HEAD
4) Run in dev mode
=======
4) Seed reference data (emotions + week states)
```bash
npm run prisma:seed
```

5) Run in dev mode
>>>>>>> 5219943 (prisma full version added)
```bash
npm run dev
```

## Useful URLs
- Health check: `GET /health`
- DB check: `GET /health/db`
- Swagger UI: `GET /docs`

## Notes
<<<<<<< HEAD
- PR-03 will add **seed** from JSON (`emotions`, `mom_states`, `baby_states`) and then proceed with Auth.
=======
- Next PR: Auth (register/login/logout) + refresh token sessions.
>>>>>>> 5219943 (prisma full version added)
