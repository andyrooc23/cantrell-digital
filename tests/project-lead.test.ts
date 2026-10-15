import test from "node:test";
import assert from "node:assert/strict";
import {
  getProjectRecommendation,
  type ProjectLeadSubmission,
} from "../lib/projectRecommendation";
import { validateSubmission } from "../lib/projectValidation";
import { POST } from "../app/api/project-lead/route";
const lead: ProjectLeadSubmission = {
  businessType: "Local business",
  mainGoal: "Launch a first professional site",
  visualDirection: "Clean and modern",
  websiteScope: ["Home page only"],
  timeline: "Flexible",
  budget: "Under $2.5k",
  name: "Test inquiry",
  businessName: "",
  email: "test@example.invalid",
  phone: "",
  additionalNotes: "",
};
test("recommendation branches retain existing behavior", () => {
  for (const [patch, expected] of [
    [{}, "Starter"],
    [{ budget: "$10k+" }, "Premium"],
    [{ websiteScope: ["Ecommerce"] }, "Premium"],
    [{ websiteScope: ["5+ page website", "Booking functionality"] }, "Premium"],
    [{ budget: "$5k-$10k", websiteScope: ["Ongoing maintenance"] }, "Premium"],
    [{ budget: "$5k-$10k" }, "Growth"],
    [{ budget: "$2.5k-$5k" }, "Growth"],
    [{ mainGoal: "Get more leads" }, "Growth"],
    [{ mainGoal: "Book appointments" }, "Growth"],
    [{ mainGoal: "Refresh an existing site" }, "Growth"],
    [{ websiteScope: ["Portfolio / gallery"] }, "Growth"],
    [{ websiteScope: [] }, "Growth"],
    [{ timeline: "ASAP" }, "Starter"],
  ] as const)
    assert.equal(
      getProjectRecommendation({ ...lead, ...patch } as ProjectLeadSubmission)
        .recommendedPackage,
      expected,
    );
});
test("valid lead is normalized; missing and malformed fields are rejected", () => {
  const result = validateSubmission({ ...lead, name: "  Test inquiry  " });
  assert.ok(result.success);
  assert.equal(result.data.name, "Test inquiry");
  for (const value of [
    null,
    [],
    {},
    { ...lead, email: "invalid" },
    { ...lead, businessType: "unknown" },
    { ...lead, websiteScope: ["invalid"] },
    { ...lead, websiteScope: ["Home page only", 42] },
    { ...lead, name: "x".repeat(121) },
    { ...lead, additionalNotes: "x".repeat(4001) },
    { ...lead, email: "x".repeat(255) },
    { ...lead, phone: "x".repeat(41) },
  ])
    assert.equal(validateSubmission(value).success, false);
});
function request(body: unknown, origin?: string) {
  return new Request("http://localhost/api/project-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(origin ? { Origin: origin } : {}),
    },
    body: JSON.stringify(body),
  });
}
test("API rejects invalid JSON, oversize bodies, spam, and foreign origins", async () => {
  assert.equal(
    (
      await POST(
        new Request("http://localhost/api/project-lead", {
          method: "POST",
          body: "{",
        }),
      )
    ).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...lead, additionalNotes: "x".repeat(17000) })))
      .status,
    413,
  );
  assert.equal((await POST(request({ ...lead, website: "spam" }))).status, 400);
  assert.equal(
    (await POST(request({ ...lead, startedAt: Date.now() }))).status,
    429,
  );
  assert.equal(
    (await POST(request(lead, "https://unrelated.invalid"))).status,
    403,
  );
});
test("API sends expected notification with mocked provider and hides failures", async () => {
  const originalFetch = global.fetch;
  const key = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "mock-test-key";
  try {
    let sent: Record<string, unknown> = {};
    global.fetch = async (_input, init) => {
      sent = JSON.parse(String(init?.body));
      return Response.json({ id: "mock-id" });
    };
    assert.equal((await POST(request(lead))).status, 200);
    assert.deepEqual(sent.to, ["andrew@cantrelldigital.dev"]);
    assert.equal(sent.reply_to, lead.email);
    global.fetch = async () =>
      Response.json({ message: "private provider detail" }, { status: 422 });
    const failure = await POST(request(lead));
    assert.equal(failure.status, 502);
    assert.ok(!(await failure.text()).includes("private provider detail"));
    global.fetch = async () => {
      throw new Error("private network detail");
    };
    const network = await POST(request(lead));
    assert.equal(network.status, 502);
    assert.ok(!(await network.text()).includes("private network detail"));
    global.fetch = async () => {
      const error = new Error("timeout");
      error.name = "AbortError";
      throw error;
    };
    const timeout = await POST(request(lead));
    assert.equal(timeout.status, 502);
    assert.ok(!(await timeout.text()).includes("Resend"));
  } finally {
    global.fetch = originalFetch;
    if (key === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = key;
  }
});
import { allowLeadAttempt } from "../lib/leadAbuse";
test("attempt limiter caps requests and expires without retaining raw addresses", () => {
  const email = "limiter@example.invalid";
  for (let i = 0; i < 5; i++) assert.equal(allowLeadAttempt(email, 1000), true);
  assert.equal(allowLeadAttempt(email, 1001), false);
  assert.equal(allowLeadAttempt(email, 601001), true);
});
