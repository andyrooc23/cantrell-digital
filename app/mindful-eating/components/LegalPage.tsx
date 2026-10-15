import Link from 'next/link';
import type { ReactNode } from 'react';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  children: ReactNode;
};

export default function LegalPage({ eyebrow, title, summary, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#f6f5f0] text-[#1d2722]">
      <header className="border-b border-[#dce2dc] bg-[#fbfaf6]">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <Link href="/mindful-eating" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#dce9df] text-[#42634d]" aria-hidden="true">
              ●
            </span>
            Mindful Eating
          </Link>
          <Link href="/" className="text-sm text-[#5e6c64] transition-colors hover:text-[#1d2722]">
            Cantrell Digital
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#486951]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#5e6c64]">{summary}</p>
          <p className="mt-4 text-sm text-[#5e6c64]">Effective September 22, 2026</p>
        </div>

        <div className="mt-12 space-y-10 text-[1.02rem] leading-8 text-[#35433b] [&_a]:font-medium [&_a]:text-[#42634d] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_li]:pl-1 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </article>

      <footer className="border-t border-[#dce2dc] bg-[#fbfaf6]">
        <nav className="mx-auto flex max-w-4xl flex-wrap gap-x-6 gap-y-3 px-5 py-8 text-sm text-[#5e6c64] sm:px-8" aria-label="Mindful Eating legal links">
          <Link href="/mindful-eating/privacy" className="hover:text-[#1d2722]">Privacy</Link>
          <Link href="/mindful-eating/terms" className="hover:text-[#1d2722]">Terms</Link>
          <Link href="/mindful-eating/support" className="hover:text-[#1d2722]">Support</Link>
          <a href="mailto:andrew@cantrelldigital.dev" className="hover:text-[#1d2722]">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
