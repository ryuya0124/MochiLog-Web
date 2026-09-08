import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const lang of ["ja", "en"]) {
  for (const width of [320, 390, 768, 1024, 1440]) {
    test(`${lang}: all pages fit ${width}px without JavaScript`, async ({
      browser,
    }) => {
      const context = await browser.newContext({
        viewport: { width, height: 1000 },
        javaScriptEnabled: false,
        colorScheme: "light",
      });
      const page = await context.newPage();
      for (const path of ["/", "/guide", "/privacy", "/terms", "/support"]) {
        const response = await page.goto(
          `${test.info().project.use.baseURL}${path}?lang=${lang}`,
        );
        expect(response?.status()).toBe(200);
        await expect(page.locator("html")).toHaveAttribute("lang", lang);
        await expect(page.locator("h1")).toHaveCount(1);
        await expect(page.locator("main")).toBeVisible();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
          "href",
          `https://mochilog.ryuya-dev.net${path}?lang=${lang}`,
        );
        expect(await page.title()).not.toContain(
          lang === "en" ? "プライバシー" : "Privacy Policy",
        );
      }
      await context.close();
    });
  }
}

test("sample controls and FAQ work without hydration", async ({ page }) => {
  await page.goto("/?lang=ja");
  await expect(page.locator(".health-value .period-six")).toBeVisible();
  await page.locator('label[for="one-year"]').click();
  await expect(page.locator(".health-value .period-year")).toBeVisible();
  await expect(page.locator(".health-value .period-six")).toBeHidden();
  await page.locator('label[for="six-months"]').click();
  await expect(page.locator(".health-value .period-six")).toBeVisible();
  await page.getByLabel("6か月", { exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByLabel("1年", { exact: true })).toBeChecked();
  const faq = page.locator(".faq-list details").first();
  await faq.locator("summary").click();
  await expect(faq.locator("p")).toBeVisible();
  await page.locator(".desktop-language a[lang=en]").click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("mobile menu preserves route when switching languages", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/guide?lang=ja");
  await page.locator(".mobile-menu > summary").click();
  await page.locator(".mobile-menu a[lang=en]").click();
  await expect(page).toHaveURL(/\/guide\?lang=en$/);
  await expect(page.locator("h1")).toHaveText(
    "Start with a log. Build a history.",
  );
});

test("locale negotiation, sitemap, status codes and asset delivery", async ({
  request,
}) => {
  for (const [header, lang] of [
    ["fr;q=1,en-US;q=.8,ja;q=.4", "en"],
    ["en;q=0,ja;q=1", "ja"],
    ["ko", "ja"],
  ]) {
    const r = await request.get("/", {
      headers: { "Accept-Language": header },
    });
    expect(await r.text()).toContain(`<html lang="${lang}">`);
    expect(r.headers().vary).toContain("Accept-Language");
  }
  const forced = await request.get("/?lang=ja", {
    headers: { "Accept-Language": "en" },
  });
  expect(await forced.text()).toContain('<html lang="ja">');
  const missing = await request.get("/missing?lang=en");
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain("noindex, follow");
  const sitemap = await request.get("/sitemap.xml");
  expect((await sitemap.text()).match(/<loc>/g)).toHaveLength(10);
  for (const asset of [
    "/styles.css",
    "/app-icon.png",
    "/robots.txt",
    "/ogp.jpeg",
  ])
    expect((await request.get(asset)).status()).toBe(200);
});

test("desktop, mobile and dark screenshots", async ({ page }) => {
  for (const [name, width, height, dark] of [
    ["desktop", 1440, 1000, false],
    ["mobile", 390, 844, false],
    ["dark", 1440, 1000, true],
  ] as const) {
    await page.setViewportSize({ width, height });
    await page.emulateMedia({
      colorScheme: dark ? "dark" : "light",
      reducedMotion: "reduce",
    });
    await page.goto("/?lang=ja");
    await page.screenshot({ path: `test-results/${name}.png`, fullPage: true });
  }
});

test("all pages pass accessibility checks in light and dark", async ({
  page,
}) => {
  for (const colorScheme of ["light", "dark"] as const) {
    await page.emulateMedia({ colorScheme });
    for (const path of ["/", "/guide", "/privacy", "/terms", "/support"]) {
      await page.goto(`${path}?lang=en`);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        results.violations,
        JSON.stringify(
          results.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
        ),
      ).toEqual([]);
    }
  }
});
