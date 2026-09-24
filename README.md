# code-streak-tracker

A modern coding challenge and streak-tracking platform built with [TanStack Start](https://tanstack.com/start), [React 19](https://react.dev/), [Vite](https://vite.dev/), [Tailwind CSS v4](https://tailwindcss.com/), and [Cloudflare Workers](https://workers.cloudflare.com/).

## Overview

`code-streak-tracker` (AstroCode) encourages daily software engineering habits by providing progressive algorithmic challenges, persistent streak monitoring, interactive test execution, and competitive celestial leaderboards.

## Features

- **Daily Algorithm Challenges**: Curated coding problems spanning Array manipulation, Binary Search, Dynamic Programming, Two Pointers, and Backtracking.
- **Interactive Code Workspace**: In-browser problem solver with syntax highlighting, example test cases, constraints, and test execution simulation.
- **Streak & Performance Analytics**: Real-time tracking of win streaks, completion ratios, earned celestial points, and rank progression.
- **Constellation Leaderboard**: Ranked competitor listing showcasing top performers with tiered ranking aesthetics.
- **Modern Full-Stack Architecture**: Server-Side Rendering (SSR) powered by TanStack Start and deployable directly to Cloudflare edge infrastructure.
- **Accessible UI Componentry**: Built on Radix UI primitives and styled with modern Tailwind CSS v4 design tokens.

## Tech Stack

- **Framework**: TanStack Start (SSR + Client routing)
- **Frontend Core**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, Radix UI Primitives, Lucide Icons
- **Bundler & Tooling**: Vite 7, ESLint 9, Prettier
- **Deployment Target**: Cloudflare Workers / Pages (`wrangler.jsonc`)

## Project Structure

```
code-streak-tracker/
├── src/
│   ├── components/       # Reusable UI components and Radix wrappers
│   │   ├── ui/           # Radix UI design system primitives
│   │   ├── AppShell.tsx  # Application layout and navigation header
│   │   └── ChallengeCard.tsx
│   ├── data/             # Challenge catalogues and initial state
│   │   └── challenges.ts
│   ├── hooks/            # Custom React hooks (e.g. use-mobile)
│   ├── lib/              # Utility helpers and clsx/tailwind-merge
│   ├── routes/           # TanStack file-based routes
│   │   ├── __root.tsx    # Root layout and metadata configuration
│   │   ├── index.tsx     # Dashboard and streak overview
│   │   ├── challenge.$slug.tsx # Interactive problem solving workspace
│   │   ├── challenges.tsx
│   │   └── leaderboard.tsx # Leaderboard overview
│   ├── router.tsx        # TanStack router instantiation
│   └── styles.css        # Global Tailwind CSS definitions
├── .env.example          # Environment variables reference
├── .gitignore            # Git exclusions
├── .prettierrc           # Prettier configuration
├── eslint.config.js      # ESLint 9 configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript compiler configuration
├── vite.config.ts        # Vite plugins and build pipeline
└── wrangler.jsonc        # Cloudflare deployment settings
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or bun

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AntonioHellin/code-streak-master.git
   cd code-streak-master
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```

### Development

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your web browser.

### Verification & Quality Checks

Run linting and formatting verification:
```bash
# Code style and syntax linting
npm run lint

# Prettier code formatting
npm run format
```

### Production Build

Compile the client and SSR server bundles:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Deployment

Deploy directly to Cloudflare edge infrastructure using Wrangler:
```bash
npx wrangler deploy
```
