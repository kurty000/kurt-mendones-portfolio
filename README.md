# Kurt Ian A. Mendones — Portfolio

Personal web profile for **Kurt Ian A. Mendones**, a BSIT student focused on network infrastructure, systems administration, and IT security.

Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Run locally

```bash
npm install
npm run dev -- --port 43127
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Deploy on Vercel

1. Push this repo to your GitHub account.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the GitHub repository.
4. Leave the defaults (Next.js is detected automatically) and click **Deploy**.

## Edit content

Profile copy lives in [`src/lib/profile.ts`](src/lib/profile.ts) — update name, about text, skills, tools, email, phone, and certifications there.

### Certifications

1. Drop certificate images into `public/certifications/`.
2. Add each entry to `profile.certifications` in `src/lib/profile.ts`.
3. Open `/certifications` on the site to review.
