import test from "node:test";
import assert from "node:assert/strict";
import { isAllowedLeadOrigin } from "../lib/leadOrigin";

function request(origin?: string, headers: Record<string, string> = {}) {
  return new Request("http://internal-amplify-host:3000/api/project-lead", {
    headers: { ...headers, ...(origin ? { Origin: origin } : {}) },
  });
}
test("production accepts the public www and apex domains behind a proxy", () => {
  for (const origin of [
    "https://www.cantrelldigital.dev",
    "https://cantrelldigital.dev",
  ])
    assert.equal(isAllowedLeadOrigin(request(origin), "production"), true);
});
test("production rejects unrelated, lookalike, insecure, and internal origins", () => {
  for (const origin of [
    "https://unrelated.invalid",
    "https://www.cantrelldigital.dev.attacker.invalid",
    "http://www.cantrelldigital.dev",
    "http://internal-amplify-host:3000",
    "null",
  ])
    assert.equal(isAllowedLeadOrigin(request(origin), "production"), false);
  assert.equal(
    isAllowedLeadOrigin(
      request("https://unrelated.invalid", {
        "x-forwarded-host": "unrelated.invalid",
        "x-forwarded-proto": "https",
      }),
      "production",
    ),
    false,
  );
});
test("non-browser requests and development origins remain supported", () => {
  assert.equal(isAllowedLeadOrigin(request(), "production"), true);
  assert.equal(
    isAllowedLeadOrigin(
      request("http://internal-amplify-host:3000"),
      "development",
    ),
    true,
  );
});
