# Catalyst Core AI Frontend

Catalyst Core AI is a Next.js frontend for an AI voice-agent platform. The app presents a working sales and lead-engagement dashboard where teams can upload lead files, configure AI calling campaigns, monitor call activity, review generated summaries, manage pipeline stages, and view performance reports.

## Features

- Login screen for entering the Catalyst workspace
- Responsive dashboard with KPI cards, lead upload preview, campaign setup, tone/language controls, and call analytics
- AI call-processing flow with a simulated live calling timeline
- Call history and generated call-summary screens
- Lead detail pages with AI notes, transcript, call recording controls, activity timeline, and follow-up information
- Drag-and-drop pipeline board powered by React DnD
- Reports area with charts, export actions, and generated performance report view
- Notifications, profile, and settings pages
- Light/dark theme support through `next-themes`

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI and shadcn-style UI components
- Recharts for analytics visualizations
- React DnD for pipeline drag and drop
- Lucide React for icons
- TanStack Query, Axios, and Zustand included for data/state workflows

## Project Structure

```text
app/                  App Router pages and providers
components/           Layouts, navigation, page components, and shared UI
components/pages/     Main product screens
components/ui/        Reusable UI primitives
lib/                  Shared utilities
public/               Static assets
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Login screen |
| `/dashboard` | Main AI campaign dashboard |
| `/call-processing` | Simulated active AI calling workflow |
| `/call-history` | Historical call records |
| `/call-summary/[id]` | Detailed call summary and transcript |
| `/lead/[id]` | Lead profile, notes, transcript, and follow-up details |
| `/pipeline` | Drag-and-drop lead pipeline |
| `/reports` | Analytics and reporting dashboard |
| `/generated-report` | Generated performance report |
| `/notifications` | Notification center |
| `/profile` | User profile |
| `/settings` | Workspace settings |

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the Next.js development server on port `3002`.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server on `0.0.0.0:3000` after a build.

```bash
npm run lint
```

Runs ESLint across the project.

## Notes

- The current UI uses local mock data to demonstrate product workflows.
- Form submissions and campaign actions are prototype interactions that route between frontend screens.
- The app is structured so backend APIs can be connected later through the existing data/state dependencies.
