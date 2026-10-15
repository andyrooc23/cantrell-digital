import { canonicalFor } from "@/lib/siteMetadata";
import type { Metadata } from "next";
import {
  Shell,
  PageIntro,
  Button,
  Process,
  Pricing,
  Closing,
} from "@/components/site/Marketing";
import { services } from "@/lib/siteContent";
export const metadata: Metadata = {
  ...canonicalFor("/services"),
  title: "Services | Cantrell Digital",
  description:
    "Connected website strategy, interface design, development, and launch. Explore the process and scope frameworks.",
};
const faq = [
  [
    "What do you need before starting?",
    "Your goals, an outline of your offer, any existing brand assets, and an honest view of which content is ready. Discovery identifies the remaining gaps.",
  ],
  [
    "Can you help with content?",
    "Content structure and priorities are part of the work. Writing, photography, and migration needs are defined in the proposal.",
  ],
  [
    "Can you work with an existing brand?",
    "Yes. Existing guidelines and assets can inform the site; any additional brand work is agreed separately.",
  ],
  [
    "Do you redesign existing websites?",
    "Yes. The starting point is understanding what should be retained, what is unclear, and which visitor journeys need attention.",
  ],
  [
    "Do you build ecommerce sites?",
    "Ecommerce is custom scope. Catalog, checkout, fulfillment, tax, content, and integration needs are evaluated before a proposal is prepared.",
  ],
  [
    "What happens after launch?",
    "Handoff and launch responsibilities are agreed in the proposal. Maintenance and further development can be scoped as a separate relationship.",
  ],
  [
    "How are revisions handled?",
    "Review points, feedback expectations, and revision scope are agreed before work starts. Feedback is consolidated so decisions remain clear.",
  ],
  [
    "How is the final scope determined?",
    "Page count, content readiness, custom functionality, integrations, and feedback cadence shape the proposal and timeline.",
  ],
];
export default function Services() {
  return (
    <Shell>
      <PageIntro
        label="Services"
        title="A clear path from business need to working website."
        body="Strategy, interface design, and development are treated as one connected system."
      >
        <div className="actions">
          <Button placement="services-hero" service="connected-services" />
          <Button href="#process" secondary>
            See the process
          </Button>
        </div>
      </PageIntro>
      <section className="container service-chapters">
        {services.map((s, i) => (
          <article className="case-chapter section" key={s.title}>
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2>{s.title}</h2>
            </div>
            <div>
              <p className="lead">{s.summary}</p>
              <h3>What takes shape</h3>
              <ul>
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <h3>Your part</h3>
              <p>{s.input}</p>
              <p className="small">Best fit: {s.fit}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="surface-band">
        <div className="container section case-chapter">
          <h2>When the brief needs more.</h2>
          <div>
            <p>
              Booking, content management, migrations, ongoing maintenance, and
              specialized integrations can extend the core work.
            </p>
            <p>
              Ecommerce is evaluated and quoted separately according to catalog,
              checkout, fulfillment, tax, content, and integration needs.
            </p>
          </div>
        </div>
      </section>
      <Process expanded />
      <Pricing />
      <section className="container section faq">
        <p className="eyebrow">A few useful answers</p>
        <h2>Before we begin.</h2>
        {faq.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">＋</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <Closing title="Tell us what the website needs to do." />
    </Shell>
  );
}
