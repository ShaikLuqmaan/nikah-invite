# Nikah Invite

A minimal, config-driven nikah invitation site.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Two links to share

| Link | Who to send it to |
|---|---|
| `yourdomain.com` | General nikah guests — masjid details only |
| `yourdomain.com/gathering` | Close family & friends — includes family gathering |

No guest names or personal URLs — just share the right link with the right group.

## Edit your content

All copy lives in `content/site.json` — names, dates, masjid, maps URLs, gathering details, notes.

## Deploy to Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Deploy (defaults work — no env vars needed)
4. You get a free URL like `your-project.vercel.app`

## Connect your custom domain

1. Buy a domain (Namecheap, Cloudflare, etc.)
2. In Vercel: **Project → Settings → Domains** → add your domain
3. Add the DNS records Vercel shows at your registrar
4. Update `siteUrl` in `content/site.json` to your domain
5. Redeploy (automatic on git push)

## Project structure

```
content/
  site.json      ← all invite content
design/
  mockup.html    ← design reference (not deployed)
src/
  app/           ← / and /gathering pages
  components/    ← invite UI
```
