import type { Metadata } from 'next';
import Link from 'next/link';

import QuestionnaireForm from '@/components/start-project/QuestionnaireForm';

export const metadata: Metadata = {
  title: 'Start Your Project | Cantrell Digital',
  description:
    'Share your website goals, scope, and timeline to get a tailored starting package recommendation from Cantrell Digital.',
};

export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_35%),linear-gradient(180deg,_#04070d_0%,_#050816_52%,_#02040a_100%)] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/5"
          >
            Back to home
          </Link>
        </div>
        <QuestionnaireForm />
      </div>
    </main>
  );
}
