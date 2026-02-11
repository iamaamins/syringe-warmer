# Syringe Warmer

**Built for Smarter Injections** — Real engineering. Controlled heat. Practical performance.

A landing page and waitlist for the Syringe Warmer, a device that pre-warms syringes to body temperature for a smoother, more comfortable injection experience. Designed by a healthcare professional.

## Features

- **Universal Fit** — Precision multi-groove channels support a wide range of syringe sizes. Small barrel or large barrel, one device handles it.
- **Body-Temperature Controlled** — Warms near natural body temperature, not above it. Integrated temperature limiting prevents overheating.
- **Rechargeable & Portable** — Integrated battery power. Use it anywhere, no outlet required.
- **Lower Viscosity, Smoother Process** — Gentle warming reduces oil viscosity for smoother flow and better control during injection.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- [React Icons](https://react-icons.github.io/react-icons)
- [ConvertKit](https://convertkit.com) (email waitlist)
- Google Analytics 4

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your ConvertKit API key, secret, and form ID

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable                | Description                                   |
| ----------------------- | --------------------------------------------- |
| `CONVERTKIT_API_KEY`    | ConvertKit public API key                     |
| `CONVERTKIT_API_SECRET` | ConvertKit API secret (for subscriber lookup) |
| `CONVERTKIT_FORM_ID`    | ConvertKit form ID for waitlist signups       |

## Pages

- `/` — Hero section with product image, copy, and waitlist signup form. "How It Works" section with feature breakdown.
- `/thank-you` — Confirmation page shown after subscribing.

## Deployment

Deploy to [Vercel](https://vercel.com) or any platform that supports Next.js.

```bash
npm run build
```
