# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Architecture Overview

This is a Next.js App Router application for a Brazilian church website ("Oceano - Igreja Online") with server-side rendering and static generation.

### Key Technologies
- **Next.js 16** - App Router with RSC
- **TypeScript** - Type safety throughout
- **TailwindCSS 4** - Styling via `@tailwindcss/postcss`
- **Shadcn UI** - Component library built on Radix UI
- **Lucide React** - Icon library

### Project Structure

```
app/                  # Next.js App Router
├── (site)/           # Route group with Navbar+Footer layout
│   ├── layout.tsx    # Site layout (Navbar + Footer)
│   └── page.tsx      # Home page
├── layout.tsx        # Root layout (html, fonts, GTM)
├── globals.css       # Global styles
├── error.tsx         # Error boundary
└── not-found.tsx     # 404 page
components/           # UI and custom components
├── ui/               # Shadcn UI components
├── navbar/           # Navigation components
├── hero/             # Hero section components
├── back-buttons/     # Back navigation buttons
├── course-cta/       # Course CTA components
├── projects/         # Project-specific shared components
├── quizzes/          # Quiz client component
└── footer.tsx        # Footer component
lib/                  # Utilities (cn helper)
data/                 # Static data files (menu-links, courses, reading-plans, churches, projects)
server/               # Server-side types and data
├── types/            # TypeScript type definitions
└── data/             # JSON data (quizzes, etc.)
public/               # Static assets
```

### Routing System

This project uses **Next.js App Router** with file-based routing. Routes with the main layout (Navbar + Footer) are under `app/(site)/`. Routes without the layout are directly under `app/`.

### Component Organization

- **UI Components** (`components/ui/`): Shadcn UI components
- **Custom Components** (`components/`): Reusable custom components
- **Layout Components** (`app/*/layout.tsx`): Layout wrappers
- **Page content lives directly in `page.tsx` files** - no separate "feature" wrappers

### Data Loading

- Server Components (default) for static/server data
- `"use client"` directive for interactive components
- JSON data in `server/data/` loaded via `fs` in Server Components

### Import Conventions

- Use `~` for imports (mapped to project root via tsconfig paths)
- Import from `next/link` for navigation links
- Import from `next/navigation` for `usePathname`, `useParams`, `useRouter`
- Example: `import { Component } from '~/components/some-component'`

### Styling

- TailwindCSS 4 with `@tailwindcss/postcss`
- CSS variables in `app/globals.css`
- Shadcn UI new-york style with zinc base

### Portuguese Language

The codebase uses Portuguese for:
- Route paths (e.g., `/cultos-ao-vivo`, `/atendimento-pastoral`)
- Component names and feature descriptions
- All user-facing content
