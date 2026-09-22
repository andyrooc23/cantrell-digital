import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Mindful Eating',
    template: '%s | Mindful Eating',
  },
  description: 'Privacy, terms, and support information for the Mindful Eating iOS app.',
};

export default function MindfulEatingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
