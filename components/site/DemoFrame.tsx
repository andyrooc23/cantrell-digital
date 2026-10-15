import Link from "next/link";
export function DemoFrame({
  slug,
  title,
  bottom = false,
}: {
  slug: string;
  title: string;
  bottom?: boolean;
}) {
  return (
    <aside
      className={`demo-frame ${bottom ? "demo-bottom" : ""}`}
      aria-label="Concept project information"
    >
      <div>
        <Link href="/">Cantrell Digital</Link>
        <p>
          {bottom
            ? "Want a site shaped for your business?"
            : `Concept project: ${title} · Self-initiated, AI-assisted`}
        </p>
      </div>
      <nav aria-label={bottom ? "Demo closing links" : "Demo agency links"}>
        <Link href={`/work/${slug}`}>Back to work</Link>
        <Link
          href="/start-project"
          data-event="start_project_clicked"
          data-placement={bottom ? "demo-bottom" : "demo-frame"}
        >
          Start a project ↗
        </Link>
      </nav>
    </aside>
  );
}
