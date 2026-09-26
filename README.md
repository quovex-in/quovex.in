# QuoVex Website

QuoVex currently includes two website implementations:

- A static site at the repository root (`index.html`, `styles.css`, and `script.js`). The GitHub Pages workflow publishes this site.
- A Next.js application in `pages/`, `components/`, and `styles/`. It includes server-side contact email handling and needs a Node.js hosting platform to run fully.

## Run the Next.js application

Requirements: Node.js 18 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.

Set `GMAIL_USER` and `GMAIL_PASS` in `.env.local` to enable contact form email delivery. Never commit `.env.local` or real credentials. Configure these values as secrets in the deployment provider.

## Build and run in production

```bash
npm run build
npm start
```

## Deployment note

The current GitHub Pages workflow deploys the static root site, not the Next.js application. GitHub Pages cannot run the Next.js `/api/contact` endpoint. To deploy the Next.js version with its contact form, use a Node.js-capable host such as Vercel or configure Firebase Hosting with an appropriate server-side framework/runtime integration.