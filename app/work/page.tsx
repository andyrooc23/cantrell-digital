import { canonicalFor } from "@/lib/siteMetadata";
import type { Metadata } from "next";
import {
  Shell,
  PageIntro,
  ProjectList,
  Closing,
} from "@/components/site/Marketing";
export const metadata: Metadata = {
  ...canonicalFor("/work"),
  title: "Selected work | Cantrell Digital",
  description:
    "Three self-initiated, AI-assisted concept websites exploring hospitality, construction, and independent retail.",
};
export default function Work() {
  return (
    <Shell>
      <PageIntro
        label="Selected work"
        title="Websites shaped around a clear point of view."
        body="Three self-initiated concepts exploring hospitality, construction, and independent retail—from first impression to responsive system."
      />
      <section className="container">
        <ProjectList />
        <div className="method-note">
          <p className="eyebrow">A note on the work</p>
          <p>
            These AI-assisted explorations demonstrate strategy, visual
            direction, and implementation across different business needs. They
            are concept projects, not commissioned client engagements.
          </p>
        </div>
      </section>
      <Closing title="Have a real brief that needs this level of attention?" />
    </Shell>
  );
}
