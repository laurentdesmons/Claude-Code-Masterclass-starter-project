# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # ESLint
npm run test      # Run all tests (Vitest)
npx vitest tests/components/Navbar.test.tsx  # Run a single test file
```

## Architecture

**Pocket Heist** is a Next.js 16 app (App Router) using TypeScript, Tailwind CSS v4, and Lucide React icons.

### Route groups

- `app/(public)/` — unauthenticated routes with its own layout (no Navbar): `/`, `/login`, `/signup`, `/preview`
- `app/(dashboard)/` — authenticated routes with a shared layout that includes the `Navbar`: `/heists`, `/heists/create`, `/heists/[id]`

The `/` splash page is intended to redirect users: logged in → `/heists`, logged out → `/login` (redirect logic not yet implemented).

### Path aliases

`@/` maps to the project root via `vite-tsconfig-paths`, used for component imports (e.g. `@/components/Navbar`).

### Testing

Tests live in `tests/` mirroring the source structure (e.g. `tests/components/`). Vitest runs with jsdom and `@testing-library/react`. Setup file: `vitest.setup.ts` (imports `@testing-library/jest-dom/vitest`).

## Additional coding preferences
- Do NOT use semicolons for Javascript or Typescript code.
- Do NOT apply tailwind classes directly in common templates unless essential or just 1 at most. If an element needs more than a single tailwind class, combine them into a custom class using the `@apply` directive.
- Use minimal project dependencies where possible.
- Use the `git switch -c` command to switch to new branches, not `git checkout`.