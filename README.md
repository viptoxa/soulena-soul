# Soulena Soul — Yoga & Movement Teacher

Single-page website for Soulena Soul, a yoga and movement teacher based in Phuket, Thailand. Built with Next.js 16, Tailwind CSS 4, Cal.com booking, and Notion-powered pricing.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4
- **Booking:** Cal.com (iframe embed)
- **Pricing CMS:** Notion API (with static fallback)
- **Hosting:** Vercel
- **Rendering:** Static generation + ISR (revalidate every hour)

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CAL_USERNAME` | Cal.com username (e.g. `soulena.soul`). Without it, the booking section shows a placeholder. |
| `NOTION_API_KEY` | Notion internal integration secret (`ntn_...`). Without it, pricing uses static fallback data. |
| `NOTION_PACKAGES_DB_ID` | ID of the Notion "Packages" database. |
| `REVALIDATION_TOKEN` | Bearer token protecting the `/api/revalidate` endpoint. |

> The site works without any env vars — Cal.com falls back to a placeholder and pricing uses built-in defaults. Configure them for full functionality.

## Editing Pricing (for Soulena)

Pricing is managed in the Notion **Packages** database. Edit a package's price, description, or toggle `Active` — the site refreshes within an hour automatically, or instantly via the revalidation endpoint:

```bash
curl -X POST https://YOUR_DOMAIN/api/revalidate \
  -H "Authorization: Bearer YOUR_REVALIDATION_TOKEN"
```

### Notion "Packages" database schema

| Field | Type |
|---|---|
| Name | Title |
| Category | Select (`Group` / `Private`) |
| Price THB | Number |
| Price USD | Number |
| Description | Rich text |
| Features | Rich text (one feature per line) |
| Order | Number |
| Active | Checkbox |

## Deployment

Deployed on Vercel. Set the four environment variables in **Project → Settings → Environment Variables** for all environments, then push to the connected branch to trigger an automatic deploy.

## Project Structure

```
src/
  app/            # App Router pages, layout, API routes
  components/     # Section components (Hero, About, Classes, …)
  lib/            # Constants, Notion client
  types/          # Shared TypeScript types
public/
  images/         # Web-optimized photos used by the site
```
