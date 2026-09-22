import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support Development',
  description: 'Optionally support the continued development of the Mindful Eating iOS app.',
};

export default function SupportDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#f6f5f0] px-5 py-16 text-[#1d2722] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Link href="/mindful-eating" className="text-sm text-[#5e6c64] transition-colors hover:text-[#1d2722]">
          ← Mindful Eating
        </Link>

        <div className="mt-14 grid h-14 w-14 place-items-center rounded-full bg-[#dce9df] text-2xl text-[#42634d]" aria-hidden="true">
          ☕
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#5d8068]">Optional support</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Support Mindful Eating</h1>
        <p className="mt-6 text-lg leading-8 text-[#5e6c64]">
          Mindful Eating is free to use. If it has been helpful and you would like to support continued development, you can leave an optional tip through Buy Me a Coffee.
        </p>

        <div className="mt-10 rounded-3xl border border-[#dce2dc] bg-[#fbfaf6] p-7 sm:p-8">
          <p className="leading-7 text-[#35433b]">
            Supporting is never required and does not unlock features, content, recognition, or a different app experience.
          </p>
          <a
            href="https://buymeacoffee.com/andrewcantrell"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#42634d] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#36533f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42634d] focus-visible:ring-offset-4"
          >
            Support on Buy Me a Coffee
          </a>
          <p className="mt-5 text-sm leading-6 text-[#738078]">
            This opens Buy Me a Coffee in a new tab. Buy Me a Coffee and its payment processor handle any information you choose to provide there. No Mindful Eating app entries or identifiers are included in the link.
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#5e6c64]" aria-label="Mindful Eating policies">
          <Link href="/mindful-eating/privacy" className="hover:text-[#1d2722]">Privacy Policy</Link>
          <Link href="/mindful-eating/terms" className="hover:text-[#1d2722]">Terms</Link>
          <Link href="/mindful-eating/support" className="hover:text-[#1d2722]">App Support</Link>
        </nav>
      </div>
    </main>
  );
}
