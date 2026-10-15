# Cantrell Digital

Website strategy, design, and development for growing businesses.

- Website: https://www.cantrelldigital.dev/
- Contact: andrew@cantrelldigital.dev
- Runtime: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.
- Hosting: AWS Amplify. **Pushing `main` on GitHub triggers the live deployment.**

## Development

```sh
npm ci
npm run dev
```

If the desktop runtime cannot start Turbopack’s Node worker, use `npm run dev -- --webpack`.

## Verification

```sh
npm run lint
npm test
npm run build
```

Webpack is also supported: `npm run build -- --webpack`.

The optional `tests/browser-check.mjs` suite uses an externally supplied Playwright installation and browser. Set `PLAYWRIGHT_MODULE_PATH` to its module entry and `BROWSER_EXECUTABLE` to the browser executable. Run against a local production preview with `node tests/browser-check.mjs`. It checks routes, accessibility, responsive layouts, navigation, questionnaire errors, and mocked submission states; it does not send real inquiry emails.

## Site structure

Marketing routes: `/`, `/work`, `/work/[slug]`, `/services`, `/about`, `/start-project`.
The three `/demo/*` routes are self-initiated, AI-assisted concepts. Mindful Eating is a separate product under `/mindful-eating`.

Shared UI lives in `components/site`. Content and scope frameworks live in `lib/siteContent.ts`. The confirmed public origin is defined in `lib/siteMetadata.ts`. The maintained [design system](docs/redesign/DESIGN_SYSTEM.md) documents the visual/accessibility foundation.

## Lead notifications

`/api/project-lead` sends the inquiry to `andrew@cantrelldigital.dev` through Resend. Server environment variables remain `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and optional `PROJECT_LEAD_DEBUG`. Keep secrets out of Git and client code. The endpoint validates inputs, limits payload size, uses a honeypot and timing checks, and normalizes delivery errors. Its in-memory attempt limiter is best-effort per server instance, not distributed across Amplify instances.

No analytics platform or transmission is installed. Semantic data attributes reserve insertion points without exposing form answers.

## Content and launch standards

Cantrell Digital is the anonymous public studio identity. Portfolio concepts must stay visibly identified as concepts. Prices and timelines remain `Custom proposal` and `Timeline set by scope`; ecommerce is separately evaluated. Avoid invented testimonials, outcomes, or client relationships.

Before a future launch, run verification and review the intended Git diff. Physical-device/browser-matrix checks, VoiceOver, production-equivalent email delivery, and inquiry retention policy remain separate operational checks.
