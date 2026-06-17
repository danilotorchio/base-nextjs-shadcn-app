# Base Next.js + shadcn/ui App Template

An opinionated starter template for building modern web applications with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui**. It ships with a ready-to-use dashboard shell, authentication scaffolding, theming, and a pre-configured developer toolchain so you can start shipping features instead of wiring up boilerplate.

## Features

- ⚡️ **Next.js 16** with the App Router and React Server Components
- ⚛️ **React 19** and **TypeScript** with strict, path-aliased imports (`@/*`)
- 🎨 **Tailwind CSS v4** with `tw-animate-css` and a `mist` base color theme
- 🧩 **shadcn/ui** components (built on `@base-ui/react`) and **Lucide** icons
- 🌗 **Light / dark / system theming** via `next-themes` with a mode toggle
- 🏠 **App shell** with a collapsible sidebar, header, organization switcher, and user nav
- 🔒 **Authentication scaffolding** — a `(private)` route group and a sign-in page with a form
- 📝 **Forms** powered by `react-hook-form` + `yup` validation
- 🛠️ **Tooling** — ESLint, Prettier (with import sorting & Tailwind class sorting), Husky, and lint-staged

## Tech Stack

| Concern    | Choice                                                                                 |
| ---------- | -------------------------------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org)                                                       |
| UI library | [React 19](https://react.dev)                                                          |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com)                                             |
| Components | [shadcn/ui](https://ui.shadcn.com) + Base UI                                           |
| Icons      | [Lucide](https://lucide.dev)                                                           |
| Forms      | [react-hook-form](https://react-hook-form.com) + [yup](https://github.com/jquense/yup) |
| Theming    | [next-themes](https://github.com/pacocoursey/next-themes)                              |
| Language   | [TypeScript](https://www.typescriptlang.org)                                           |

## Use This Template

Scaffold a new project from this template with `create-next-app`'s `--example` flag, pointing it at this repository:

```bash
npx create-next-app@latest my-app --example "https://github.com/danilotorchio/base-nextjs-shadcn-app"
```

Or with another package manager:

```bash
# Bun
bunx create-next-app@latest my-app --example "https://github.com/danilotorchio/base-nextjs-shadcn-app"

# pnpm
pnpm create next-app my-app --example "https://github.com/danilotorchio/base-nextjs-shadcn-app"

# yarn
yarn create next-app my-app --example "https://github.com/danilotorchio/base-nextjs-shadcn-app"
```

Then `cd my-app` and follow [Getting Started](#getting-started) below. You can also click **“Use this template”** at the top of the [GitHub repo](https://github.com/danilotorchio/base-nextjs-shadcn-app) to create your own copy.

## Getting Started

Install dependencies and start the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Visit [`/dashboard`](http://localhost:3000/dashboard) for the app shell and [`/auth/signin`](http://localhost:3000/auth/signin) for the sign-in page.

> This template uses [Bun](https://bun.sh) as the package manager (`bun.lock`), but npm, pnpm, or yarn work as well.

## Scripts

| Command     | Description                  |
| ----------- | ---------------------------- |
| `bun dev`   | Start the development server |
| `bun build` | Create a production build    |
| `bun start` | Run the production server    |
| `bun lint`  | Lint the project with ESLint |

## Project Structure

```
app/
  (private)/            # Authenticated route group
    dashboard/          # Dashboard page
    layout.tsx          # App shell wrapper
  auth/signin/          # Sign-in page and login form
  layout.tsx            # Root layout (fonts, theme, tooltip providers)
  globals.css           # Tailwind v4 + theme tokens
components/
  app/layout/           # Sidebar, header, nav, organization switcher
  theme/                # Theme provider and mode toggle
  ui/                   # shadcn/ui primitives
hooks/                  # Reusable React hooks
lib/                    # Utilities (e.g. cn helper)
```

## Conventions

- **Path aliases** — import from `@/components`, `@/lib`, `@/hooks`, and `@/components/ui`.
- **Formatting** — Prettier enforces single quotes, semicolons, a 120-character print width, sorted imports, and sorted Tailwind classes. A Husky pre-commit hook runs lint-staged automatically.
- **Adding components** — use the shadcn CLI: `bunx shadcn@latest add <component>`.

## Deployment

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other targets.

## License

Released under the [MIT License](https://opensource.org/licenses/MIT). Use it freely as a starting point for your own projects.
