import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Mindful Eating',
    template: '%s | Mindful Eating',
  },
  description: 'Privacy, terms, and support information for the Mindful Eating iOS app.',
};

export default function MindfulEatingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}<div className="bg-[#f7fbf8] px-6 py-4 text-center text-sm text-[#305246]"><Link href="/" className="inline-flex min-h-12 items-center underline underline-offset-4">A product by Cantrell Digital</Link></div></>;
}
