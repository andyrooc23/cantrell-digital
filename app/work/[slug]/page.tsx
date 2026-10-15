import { canonicalFor } from "@/lib/siteMetadata";
import type { Metadata } from "next";
import ProjectImage from "@/components/site/ProjectImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/siteContent";
import { Shell, PageIntro, Closing } from "@/components/site/Marketing";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    ...canonicalFor(`/work/${slug}`),
    title: p
      ? `${p.title} — Concept project | Cantrell Digital`
      : "Project not found",
    description: p?.summary,
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index];
  const material = {
    cafe: [
      ["Warm cream", "#f6efe7"],
      ["Coffee ink", "#3e3129"],
      ["Quiet green", "#496c4c"],
    ],
    construction: [
      ["Architectural dark", "#0b0b0c"],
      ["Stone white", "#f3f3ef"],
      ["Material grey", "#92948c"],
    ],
    streetwear: [
      ["After dark", "#050505"],
      ["Campaign white", "#ffffff"],
      ["Release accent", "#f43f5e"],
    ],
  }[p.slug];
  return (
    <Shell>
      <PageIntro
        label="Self-initiated concept · AI-assisted exploration"
        title={p.title}
        body={p.summary}
      >
        <Link className="text-link" href="/work">
          ← All work
        </Link>
        <div className="project-meta">
          <span>Sector / {p.sector}</span>
          <span>Explored / Strategy, design, development</span>
        </div>
      </PageIntro>
      <div className="container">
        <figure className="case-visual">
          <ProjectImage
            src={p.image}
            alt={`${p.title} concept homepage overview`}
            width={1440}
            height={1080}
            sizes="100vw"
            preload
          />
          <figcaption>
            Concept interface study. No commissioned engagement or measured
            business results are claimed.
          </figcaption>
        </figure>
        <section className="section case-chapter">
          <h2>The brief</h2>
          <p className="lead">{p.brief}</p>
        </section>
        <section className="case-chapter">
          <h2>The direction</h2>
          <div>
            <p>{p.direction}</p>
            <p>
              The intended journey moves from a clear first impression to useful
              detail, then an obvious next action.
            </p>
          </div>
        </section>
        <section className="section case-chapter">
          <h2>The visual system</h2>
          <div>
            <p>{p.system}</p>
            <p>
              The system is intended to reflow into a readable single column on
              small screens. Content hierarchy, image proportions, and clear
              action labels carry the direction across sizes.
            </p>
          </div>
        </section>
        <figure className="direction-board">
          <div>
            <p className="eyebrow">Visual direction / material study</p>
            <h3>{p.title}</h3>
            <p>Hierarchy · Contrast · Rhythm</p>
          </div>
          <div className="swatch-grid">
            {material.map(([label, color]) => (
              <div key={label}>
                <span style={{ background: color }} aria-hidden="true" />
                <p>{label}</p>
              </div>
            ))}
          </div>
          <figcaption>
            The concept’s palette supports its distinct business scenario.
          </figcaption>
        </figure>
        <div className="walkthrough">
          <p className="eyebrow">Inside the concept</p>
          {p.moments.map(([title, body], i) => (
            <article className="walkthrough-moment" key={title}>
              <figure>
                <ProjectImage
                  src={`/images/projects/${p.slug}-${i + 1}.webp`}
                  alt={`${p.title}: ${title.toLowerCase()} interface detail`}
                  width={1440}
                  height={1000}
                  sizes="(max-width: 767px) 100vw, 65vw"
                />
                <figcaption>
                  0{i + 1} / {title}
                </figcaption>
              </figure>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          className="button secondary"
          href={`/demo/${p.slug}`}
          data-event="interactive_demo_opened"
          data-project-slug={p.slug}
        >
          Open interactive demo ↗
        </Link>
        <section className="section case-chapter">
          <h2>What the exploration shows</h2>
          <div>
            <p>
              This concept demonstrates a connected approach to page hierarchy,
              visual direction, and responsive implementation.
            </p>
            <p>
              A real engagement would need verified content, audience research,
              usability checks, and validation of the business’s operating
              requirements. Demo names, events, products, and project details
              are illustrative.
            </p>
          </div>
        </section>
        <nav className="project-pagination" aria-label="Other projects">
          <Link href={`/work/${projects[(index + 2) % 3].slug}`}>
            ← Previous / {projects[(index + 2) % 3].title}
          </Link>
          <Link href={`/work/${projects[(index + 1) % 3].slug}`}>
            Next / {projects[(index + 1) % 3].title} →
          </Link>
        </nav>
      </div>
      <Closing title="Have a similar challenge? Let’s shape the right website for it." />
    </Shell>
  );
}
