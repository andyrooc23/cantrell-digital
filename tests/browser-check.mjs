const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE_PATH || "playwright"
);
import fs from "node:fs";
import assert from "node:assert/strict";
const origin = process.env.BROWSER_TEST_ORIGIN || "http://127.0.0.1:3000";
(async () => {
  const b = await chromium.launch({
    headless: true,
    ...(process.env.BROWSER_EXECUTABLE
      ? { executablePath: process.env.BROWSER_EXECUTABLE }
      : {}),
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  let findings = [];
  const routes = [
    "/",
    "/work",
    "/work/cafe",
    "/work/construction",
    "/work/streetwear",
    "/services",
    "/about",
    "/start-project",
    "/demo/cafe",
    "/demo/construction",
    "/demo/streetwear",
    "/mindful-eating",
    "/mindful-eating/privacy",
    "/mindful-eating/terms",
    "/mindful-eating/support",
    "/mindful-eating/support-development",
  ];
  for (const route of routes) {
    const res = await p.goto(origin + route);
    assert.equal(res.status(), 200, route);
    await p.waitForTimeout(250);
    assert.equal(await p.locator("h1").count(), 1, route + " h1");
    {
      await p.addScriptTag({
        path: process.cwd() + "/node_modules/axe-core/axe.min.js",
      });
      const issues = await p.evaluate(async () => {
        const scope = document.querySelector(".demo-frame") || document;
        const r = await axe.run(scope, {
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"],
          },
        });
        return r.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => n.target),
        }));
      });
      findings.push({ route, axe: issues });
    }
  }
  for (const width of [320, 375, 768, 1024, 1280, 1440]) {
    await p.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/work",
      "/services",
      "/about",
      "/start-project",
      "/work/cafe",
      "/demo/cafe",
      "/demo/construction",
      "/demo/streetwear",
      "/mindful-eating/privacy",
    ]) {
      await p.goto(origin + route);
      const overflow = await p.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      );
      if (overflow) findings.push({ route, width, overflow });
    }
    await p.goto(origin);
    await p.screenshot({
      path: "/tmp/cantrell-home-" + width + ".png",
      fullPage: true,
    });
  }
  await p.setViewportSize({ width: 375, height: 900 });
  await p.goto(origin);
  await p.getByRole("button", { name: "Menu" }).click();
  assert.ok(await p.locator("dialog").evaluate((e) => e.open));
  await p.keyboard.press("Escape");
  assert.equal(
    await p
      .getByRole("button", { name: "Menu" })
      .evaluate((e) => e === document.activeElement),
    true,
  );
  await p.getByRole("button", { name: "Menu" }).click();
  await p
    .locator("dialog")
    .getByRole("link", { name: "Work", exact: false })
    .click();
  await p.waitForURL("**/work");
  assert.ok(!(await p.locator("dialog").evaluate((e) => e.open)));
  await p.goto("http://127.0.0.1:3000/start-project");
  await p.getByRole("button", { name: "Continue" }).click();
  assert.ok(
    await p
      .locator(".error-summary")
      .evaluate((e) => e === document.activeElement),
  );
  for (const name of ["Local business", "Get more leads", "Clean and modern"]) {
    await p.getByRole("radio", { name, exact: true }).check();
    await p.getByRole("button", { name: "Continue" }).click();
  }
  await p.getByRole("checkbox", { name: "Contact form", exact: true }).check();
  await p.getByRole("button", { name: "Back", exact: true }).click();
  assert.ok(
    await p
      .getByRole("radio", { name: "Clean and modern", exact: true })
      .isChecked(),
  );
  await p.getByRole("button", { name: "Continue" }).click();
  assert.ok(
    await p
      .getByRole("checkbox", { name: "Contact form", exact: true })
      .isChecked(),
  );
  await p.getByRole("button", { name: "Continue" }).click();
  await p.getByRole("radio", { name: "Flexible", exact: true }).check();
  await p.getByRole("radio", { name: "$2.5k-$5k", exact: true }).check();
  await p.getByRole("button", { name: "Continue" }).click();
  await p.getByRole("button", { name: "Send project brief" }).click();
  await p.getByLabel("Name · Required", { exact: true }).fill("Test");
  assert.equal(
    await p
      .getByLabel("Name · Required", { exact: true })
      .evaluate((e) => e === document.activeElement),
    true,
    "Typing must retain focus while another field has an error",
  );
  await p
    .getByLabel("Email · Required", { exact: true })
    .fill("test@example.invalid");
  await p.route("**/api/project-lead", (r) =>
    r.fulfill({
      status: 502,
      contentType: "application/json",
      body: JSON.stringify({ ok: false, error: "Please try again." }),
    }),
  );
  await p.getByRole("button", { name: "Send project brief" }).click();
  await p.getByText("Your brief has not been sent.").waitFor();
  assert.equal(
    await p.getByLabel("Name · Required", { exact: true }).inputValue(),
    "Test",
  );
  await p.unroute("**/api/project-lead");
  let sends = 0;
  await p.route("**/api/project-lead", async (r) => {
    sends++;
    await new Promise((r) => setTimeout(r, 400));
    await r.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    });
  });
  await p.getByRole("button", { name: "Send project brief" }).click();
  await p.getByRole("heading", { name: "Thank you." }).waitFor();
  assert.equal(sends, 1);
  await p.addScriptTag({
    path: process.cwd() + "/node_modules/axe-core/axe.min.js",
  });
  assert.equal(
    (await p.evaluate(async () => (await axe.run()).violations)).length,
    0,
    "Success accessibility",
  );
  await p.goto(origin + "/services");
  await p
    .locator("summary")
    .filter({ hasText: "Do you build ecommerce sites?" })
    .focus();
  await p.keyboard.press("Enter");
  assert.ok(
    await p
      .locator("details")
      .filter({ hasText: "Do you build ecommerce sites?" })
      .evaluate((e) => e.open),
  );
  await p.goto(origin);
  await p.getByRole("button", { name: "Menu" }).click();
  for (let i = 0; i < 12; i++) {
    await p.keyboard.press("Tab");
    assert.ok(
      await p.evaluate(() => !!document.activeElement.closest("dialog")),
      "Menu focus stays within the dialog",
    );
  }
  await p.keyboard.press("Escape");
  const nojs = await b.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 900 },
  });
  const fallback = await nojs.newPage();
  await fallback.goto(origin);
  assert.ok(
    await fallback
      .getByRole("navigation", { name: "Navigation without JavaScript" })
      .isVisible(),
  );
  await nojs.close();
  await p.emulateMedia({ reducedMotion: "reduce" });
  await p.goto(origin);
  findings.push({
    reducedMotion: await p.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  });
  await p.setViewportSize({ width: 640, height: 900 });
  await p.evaluate(() => (document.querySelector(".agency").style.zoom = "2"));
  findings.push({
    zoom200Overflow: await p.evaluate(
      () => document.documentElement.scrollWidth > innerWidth + 1,
    ),
  });
  fs.writeFileSync(
    process.env.BROWSER_QA_REPORT || "/tmp/cantrell-qa-results.json",
    JSON.stringify(findings, null, 2),
  );
  assert.ok(
    !findings.some(
      (f) => f.overflow || f.zoom200Overflow || (f.axe && f.axe.length),
    ),
    "Accessibility or reflow finding; see report",
  );
  console.log(JSON.stringify(findings));
  await b.close();
})();
