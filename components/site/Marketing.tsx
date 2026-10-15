import Link from "next/link";
import ProjectImage from "@/components/site/ProjectImage";
import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import {
  email,
  packages,
  principles,
  process,
  projects,
  services,
} from "@/lib/siteContent";
export function Button({
  children = "Start a project",
  href = "/start-project",
  secondary = false,
  placement = "content",
  service,
}: {
  children?: ReactNode;
  href?: string;
  secondary?: boolean;
  placement?: string;
  service?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "secondary" : ""}`}
      href={href}
      data-event={
        href === "/start-project" ? "start_project_clicked" : undefined
      }
      data-placement={placement}
      data-related-event={service ? "services_cta_clicked" : undefined}
      data-service={service}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="agency">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
export function Heading({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {body && <p className="lead">{body}</p>}
    </div>
  );
}
export function PageIntro({
  label,
  title,
  body,
  children,
}: {
  label: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="container page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="lead">{body}</p>
      {children}
    </section>
  );
}
export function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((p, i) => (
        <Link
          className="project-card"
          key={p.slug}
          href={`/work/${p.slug}`}
          data-event="work_project_opened"
          data-project-slug={p.slug}
          data-placement="project-list"
        >
          <div className={`project-image image-${i}`}>
            <ProjectImage
              src={p.image}
              alt={`${p.title} concept website, desktop interface`}
              width={1440}
              height={1080}
              sizes="(max-width: 767px) 100vw, 60vw"
            />
          </div>
          <div className="project-copy">
            <p className="eyebrow">
              0{i + 1} / Concept project · {p.sector}
            </p>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <p className="project-tags">Strategy / Design / Development</p>
            <span className="text-link">
              Explore the project <span aria-hidden="true">↗</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function ServicePanels() {
  return (
    <div className="service-panels">
      {services.map((s, i) => (
        <article className="service-panel" key={s.title}>
          <span className="serif-number">0{i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <ul>
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="small">Best fit: {s.fit}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
export function Process({ expanded = false }: { expanded?: boolean }) {
  return (
    <section id="process" className="section container">
      <Heading
        label="The process"
        title="Clear decisions. A considered path."
        body="Each phase has a purpose, a tangible output, and a moment to review before moving forward."
      />
      <div className="process-grid">
        {process.map(([title, body, output, input], i) => (
          <article key={title}>
            <span className="serif-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <p className="small">
              <strong>What you receive</strong>
              <br />
              {output}
            </p>
            {expanded && (
              <p className="small">
                <strong>Your part</strong>
                <br />
                {input}
              </p>
            )}
          </article>
        ))}
      </div>
      <p className="section-note">
        Review points and approvals are agreed with the scope. Timing depends on
        content, functionality, and feedback.
      </p>
    </section>
  );
}
export function Principles() {
  return (
    <section className="dark-band">
      <div className="container section">
        <p className="eyebrow">The studio’s approach</p>
        <h2 className="statement">
          Good work starts with a clear purpose.
          <br />
          <em>And follows through on the details.</em>
        </h2>
        <div className="principle-grid">
          {principles.slice(0, 3).map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/about">
          Get to know the studio ↗
        </Link>
      </div>
    </section>
  );
}
export function Pricing() {
  return (
    <section id="pricing" className="container section">
      <Heading
        label="Scope & fit"
        title="A starting point, shaped around you."
        body="These are scope frameworks. Your proposal and timeline are confirmed around the work your website actually needs."
      />
      <div className="pricing-grid">
        {packages.map((p) => (
          <article
            key={p.name}
            className={`pricing-card ${p.name === "Growth" ? "featured" : ""}`}
          >
            <p className="eyebrow">{p.label}</p>
            <h3>{p.name}</h3>
            <p className="proposal">Custom proposal</p>
            <p>{p.summary}</p>
            <ul>
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="small">Timeline set by scope</p>
            <Button secondary placement={`package-${p.name.toLowerCase()}`}>
              Discuss your scope
            </Button>
          </article>
        ))}
      </div>
      <p className="section-note">
        Not sure where your project fits? The questionnaire suggests a starting
        point; the final scope is confirmed together. Ecommerce is evaluated
        separately.
      </p>
    </section>
  );
}
export function Closing({
  title = "Let’s make the next version of your website a useful one.",
}: {
  title?: string;
}) {
  return (
    <section className="container section closing-wrap">
      <div className="closing">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>{title}</h2>
          <a
            className="text-link"
            href={`mailto:${email}`}
            data-event="email_link_clicked"
            data-placement="closing"
          >
            Prefer email? Write to the studio ↗
          </a>
        </div>
        <Button placement="closing" />
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="wordmark">
              cantrell<span>digital</span>
            </Link>
            <p>
              Thoughtful websites for
              <br />
              growing businesses.
            </p>
          </div>
          <nav aria-label="Footer explore">
            <p className="eyebrow">Explore</p>
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/services#process">Process</Link>
            <Link href="/services#pricing">Scope & fit</Link>
          </nav>
          <nav aria-label="Footer connect">
            <p className="eyebrow">Connect</p>
            <Link
              href="/start-project"
              data-event="start_project_clicked"
              data-placement="footer"
            >
              Start a project
            </Link>
            <a
              href={`mailto:${email}`}
              data-event="email_link_clicked"
              data-placement="footer"
            >
              Email the studio
            </a>
          </nav>
          <nav aria-label="Products">
            <p className="eyebrow">Products</p>
            <Link href="/mindful-eating">Mindful Eating</Link>
            <Link href="/mindful-eating/privacy">Product privacy</Link>
            <Link href="/mindful-eating/terms">Product terms</Link>
            <Link href="/mindful-eating/support">Product support</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cantrell Digital</span>
          <span>Built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
