import Link from 'next/link';

const resources = [
  {
    href: '/mindful-eating/privacy',
    title: 'Privacy Policy',
    description: 'How the app keeps your entries local and under your control.',
  },
  {
    href: '/mindful-eating/terms',
    title: 'Terms & Wellness Disclaimer',
    description: 'Important information about using Mindful Eating as a self-reflection tool.',
  },
  {
    href: '/mindful-eating/support',
    title: 'Support',
    description: 'Answers about local data, deletion, backups, and getting help.',
  },
  {
    href: '/mindful-eating/support-development',
    title: 'Support Development',
    description: 'Optionally help fund continued work on the free app.',
  },
];

export default function MindfulEatingPage() {
  return (
    <main className="min-h-screen bg-[#f6f5f0] px-5 py-16 text-[#1d2722] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-[#5e6c64] transition-colors hover:text-[#1d2722]">← Cantrell Digital</Link>
        <div className="mt-16 max-w-2xl">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[#dce9df] text-xl text-[#42634d]" aria-hidden="true">●</div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">Mindful Eating</h1>
          <p className="mt-6 text-xl leading-8 text-[#5e6c64]">
            A private iOS journal for noticing fullness around meals, mornings, and bedtime—without accounts, ads, or tracking.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href} className="rounded-3xl border border-[#dce2dc] bg-[#fbfaf6] p-6 transition hover:-translate-y-0.5 hover:border-[#b9cbbd] hover:shadow-lg hover:shadow-[#42634d]/5">
              <h2 className="text-lg font-semibold">{resource.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#5e6c64]">{resource.description}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-[#42634d]">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
