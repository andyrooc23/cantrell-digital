import { canonicalFor } from "@/lib/siteMetadata";
import type { Metadata } from "next";
import Link from "next/link";
import QuestionnaireForm from "@/components/start-project/QuestionnaireForm";
export const metadata: Metadata = {
  ...canonicalFor("/start-project"),
  title: "Start a project | Cantrell Digital",
  description:
    "Share your website goals, direction, scope, and contact details in a guided project brief.",
};
export default function StartProject() {
  return (
    <main id="main-content" className="agency questionnaire-page">
      <div className="container">
        <Link className="text-link" href="/">
          ← Back to Cantrell Digital
        </Link>
        <div className="questionnaire-intro">
          <p className="eyebrow">A considered beginning</p>
          <h1>Tell us what you have in mind.</h1>
          <p className="lead">
            Six short steps to a clearer project brief. Your answers help shape
            a starting point; scope and timing are confirmed together.
          </p>
        </div>
        <QuestionnaireForm />
      </div>
    </main>
  );
}
