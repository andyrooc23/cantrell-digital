import { Shell, PageIntro, Button } from "@/components/site/Marketing";
export default function NotFound() {
  return (
    <Shell>
      <PageIntro
        label="Page not found"
        title="This path doesn’t lead to a page."
        body="Return to the studio or explore the selected work."
      >
        <div className="actions">
          <Button href="/">Return home</Button>
          <Button href="/work" secondary>
            See selected work
          </Button>
        </div>
      </PageIntro>
    </Shell>
  );
}
