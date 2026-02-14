# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Figmai is a design-to-frontend AI operation tool for **BakıcıKolay.com**, a Turkish care services platform (elderly/childcare). It uses Pencil.dev (.pen files) as the design source and targets a React/Laravel frontend stack.

## Workflow

1. Read project rules from `.claude/design-rules.md` and `.claude/frontend-rules.md`
2. Inspect/create `.pen` design files in `/designs/` (one file per page)
3. Each `.pen` file should contain Frame elements for desktop and mobile (iPhone 17 Pro) layouts
4. Use only Pencil MCP tools (`batch_get`, `batch_design`, etc.) to read/write `.pen` files — never use `Read`/`Grep` on them
5. Log important events to `output.log`

## Target Frontend Stack

- React (latest) with Laravel/Inertia compatibility
- Tailwind CSS 4.1+
- shadcn/ui components
- CSS Grid for layouts
- Semantic HTML for SEO

## Brand & Design

- **Primary color:** `#352EF2`
- Secondary: coordinated white and black
- Follow 2026 modern web design trends
- All pages need mobile-responsive variants
- Tailwind-compatible color and spacing values

## Pages (3 planned, designs in `/designs/`)

| Page | File | Shared Elements |
|------|------|----------------|
| Anasayfa (Homepage) | `Anasayfa.pen` | Defines header & footer used by other pages |
| Hizmet Detay (Service Detail) | TBD | Reuses header/footer via `--layout` |
| Hizmetler (Services) | TBD | Reuses header/footer via `--layout` |

Header and footer are designed once on the homepage and marked with `--layout` for reuse across pages.

## Key Rules

- Design rules (page layouts, sections, content specs): `.claude/design-rules.md`
- Frontend tech constraints: `.claude/frontend-rules.md`
- Project workflow instructions: `.claude/README.md`
