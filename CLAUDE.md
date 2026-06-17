@AGENTS.md

# Project overview

A reusable starter template for Next.js applications. Stack: Next.js 16 (App Router, RSC), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui (built on `@base-ui/react`). Bun is the package manager.

# Commands

- `bun dev` — start the dev server (http://localhost:3000)
- `bun build` — production build
- `bun start` — run the production build
- `bun lint` — ESLint

# Layout

- `app/` — App Router. `(private)/` is the authenticated route group (wrapped by the `AppLayout` shell); `auth/signin/` holds the sign-in page and login form; `layout.tsx` sets up fonts and the theme/tooltip providers.
- `components/ui/` — shadcn/ui primitives. `components/app/layout/` — sidebar, header, nav, organization switcher. `components/theme/` — theme provider and mode toggle.
- `hooks/` — reusable hooks. `lib/utils.ts` — the `cn` class-merge helper.

# Conventions

- Use path aliases (`@/components`, `@/components/ui`, `@/lib`, `@/hooks`) — never relative `../../` imports across top-level folders.
- Add shadcn components with `bunx shadcn@latest add <component>` rather than hand-writing them. Config lives in `components.json` (`base-nova` style, `mist` base color, Lucide icons).
- Forms use `react-hook-form` with `yup` resolvers (`@hookform/resolvers`).
- Theming is handled by `next-themes`; respect light/dark/system and use theme tokens from `app/globals.css`.
- Prettier is the source of truth for formatting: single quotes, semicolons, 120 print width, sorted imports, sorted Tailwind classes. Husky + lint-staged format on commit — don't fight the formatter.
- Keep diffs aligned with the surrounding code's idioms; this is a template, so favor clear, conventional patterns others can build on.
