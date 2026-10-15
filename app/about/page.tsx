import { canonicalFor } from "@/lib/siteMetadata";
import type { Metadata } from "next";
import { Shell, PageIntro, Button, Closing } from "@/components/site/Marketing";
import { principles } from "@/lib/siteContent";
export const metadata: Metadata = {
  ...canonicalFor("/about"),
  title: "About the studio | Cantrell Digital",
  description:
    "An independent digital studio focused on clear decisions, thoughtful website design, and useful technical foundations.",
};
export default function About() {
  return (
    <Shell>
      <PageIntro
        label="About Cantrell Digital"
        title="A digital studio built around clear decisions and useful outcomes."
        body="Cantrell Digital connects strategy, design, and development for growing businesses that need a more considered place online."
      />
      <figure className="container about-study">
        <div className="studio-study">
          <span className="eyebrow">Studio notes / form follows purpose</span>
          <span className="study-type" aria-hidden="true">
            Aa
          </span>
          <div>
            <span className="eyebrow">01 / Structure</span>
            <h2>A clear place for every idea.</h2>
            <p>Content hierarchy, responsive systems, considered detail.</p>
          </div>
          <div className="study-swatches" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <figcaption>
          An interface study in hierarchy, typography, and material restraint.
        </figcaption>
      </figure>
      <section className="container section case-chapter">
        <h2>A website should make your business easier to understand.</h2>
        <div>
          <p>
            The studio’s focus is the connection between what a business offers
            and what a visitor needs to know. Structure, content, and visual
            direction are developed together.
          </p>
          <p>
            Useful work goes beyond an attractive first screen. It gives people
            readable information, a clear next step, and an experience that
            holds together on the device in their hand.
          </p>
          <p>
            Cantrell Digital is the public studio identity. The work, process,
            and standards are the basis for getting to know the business.
          </p>
        </div>
      </section>
      <section className="surface-band">
        <div className="container section">
          <p className="eyebrow">Working principles</p>
          <div className="about-principles">
            {principles.map(([title, body], i) => (
              <article key={title}>
                <span className="serif-number">0{i + 1}</span>
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section case-chapter">
        <h2>Care you can see in the details.</h2>
        <ul className="standards">
          {[
            "Responsive layouts designed around real content",
            "Accessible interaction patterns and visible focus",
            "Performance-conscious implementation",
            "Honest representation of concept work",
            "Clear review and approval points",
            "Maintainable technical foundations",
          ].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section className="container comparison">
        <h2>A clear fit matters.</h2>
        <table>
          <thead>
            <tr>
              <th scope="col">The studio is</th>
              <th scope="col">The studio is not</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Focused and collaborative", "A high-volume template shop"],
              ["Business-outcome aware", "Strategy-free decoration"],
              [
                "Comfortable with custom scope",
                "An unlimited-revision subscription",
              ],
              ["Direct about constraints", "A source of inflated promises"],
            ].map(([a, b]) => (
              <tr key={a}>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button href="/work" secondary>
          See selected work
        </Button>
      </section>
      <Closing />
    </Shell>
  );
}
