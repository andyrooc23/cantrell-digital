import { canonicalFor } from "@/lib/siteMetadata";
import type { Metadata } from "next";
import ProjectImage from "@/components/site/ProjectImage";
import {
  Shell,
  Button,
  Heading,
  ProjectList,
  ServicePanels,
  Process,
  Principles,
  Pricing,
  Closing,
} from "@/components/site/Marketing";
export const metadata: Metadata = {
  ...canonicalFor("/"),
  title: "Cantrell Digital — Thoughtful websites for growing businesses",
  description:
    "Strategy, website design, and development for growing businesses that need a clearer, more credible place online.",
};
export default function Home() {
  return (
    <Shell>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            Independent digital studio / Strategy · Design · Development
          </p>
          <h1>
            Thoughtful websites,
            <br />
            built to move your business <em>forward.</em>
          </h1>
          <p className="lead">
            Strategy, design, and development for growing businesses that need a
            clearer, more credible place online.
          </p>
          <div className="actions">
            <Button placement="hero" />
            <Button href="#selected-work" secondary>
              See selected work
            </Button>
          </div>
        </div>
        <figure className="hero-visual">
          <div className="contours" aria-hidden="true">
            <svg viewBox="0 0 400 400">
              {[0, 1, 2, 3, 4].map((i) => (
                <ellipse
                  key={i}
                  cx="200"
                  cy="200"
                  rx={100 + i * 18}
                  ry={130 + i * 15}
                  transform="rotate(-25 200 200)"
                />
              ))}
            </svg>
          </div>
          <div className="hero-frame">
            <span className="frame-label">01 / Interface study</span>
            <ProjectImage
              src="/images/projects/cafe.webp"
              width={1440}
              height={1080}
              alt="Independent cafe concept website with warm editorial layout"
              sizes="(max-width: 767px) 100vw, 45vw"
              preload
            />
          </div>
          <figcaption>
            Independent cafe <span>Self-initiated concept ↗</span>
          </figcaption>
        </figure>
        <div className="hero-foot">
          <span>Built around your business. Made for your visitors.</span>
          <span>Explore below ↓</span>
        </div>
      </section>
      <section className="value-band">
        <div className="container value-grid">
          {[
            [
              "Clearer positioning",
              "Say what makes your business the right fit.",
            ],
            ["More useful journeys", "Give visitors a clear next step."],
            [
              "A durable foundation",
              "Keep the experience easy to use and maintain.",
            ],
          ].map(([title, body], i) => (
            <article key={title}>
              <span className="serif-number">0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="selected-work" className="container section">
        <Heading
          label="Selected work / 01—03"
          title="Different businesses. Deliberate solutions."
          body="Three self-initiated, AI-assisted concepts. A closer look at how strategy, visual direction, and implementation can come together."
        />
        <ProjectList />
      </section>
      <section id="services" className="surface-band">
        <div className="container section service-split">
          <Heading
            label="What the studio does"
            title="One considered process, from first idea to launch."
          />
          <div>
            <ServicePanels />
            <Button href="/services" secondary>
              Explore services
            </Button>
          </div>
        </div>
      </section>
      <Process />
      <Principles />
      <Pricing />
      <Closing />
    </Shell>
  );
}
