import { Hono } from "hono";
import { renderToStaticMarkup } from "react-dom/server";
import type { ComponentType } from "react";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { GuidePage } from "./pages/GuidePage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { SupportPage } from "./pages/SupportPage";
import { copy, SITE_URL } from "./content";
import type { Locale } from "./i18n";

export function requestLocale(url: URL, acceptLanguage = ""): Locale {
  const explicit = url.searchParams.get("lang");
  if (explicit === "ja" || explicit === "en") return explicit;
  const preferred = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [tag, ...params] = entry.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        tag: tag.split("-")[0],
        weight: q ? Number(q.trim().slice(2)) : 1,
        index,
      };
    })
    .filter((v) => Number.isFinite(v.weight) && v.weight > 0 && v.weight <= 1)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);
  return (
    (preferred.find((v) => v.tag === "ja" || v.tag === "en")?.tag as Locale) ||
    "ja"
  );
}

const pages: {
  path: string;
  component: ComponentType;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}[] = [
  {
    path: "/",
    component: LandingPage,
    title: {
      ja: `MochiLog — ${copy.ja.title}`,
      en: `MochiLog — ${copy.en.title}`,
    },
    description: { ja: copy.ja.description, en: copy.en.description },
  },
  {
    path: "/guide",
    component: GuidePage,
    title: {
      ja: "使い方・ログの読み方 — MochiLog",
      en: "Getting started & understanding your logs — MochiLog",
    },
    description: {
      ja: "解析ログの探し方、MochiLogへの取り込み方、容量・サイクル数の読み方を紹介します。",
      en: "Find an analytics log, import it into MochiLog, and understand capacity and charge cycles.",
    },
  },
  {
    path: "/privacy",
    component: PrivacyPolicy,
    title: {
      ja: "プライバシーポリシー — MochiLog",
      en: "Privacy Policy — MochiLog",
    },
    description: {
      ja: "端末内での解析、任意のiCloud同期、Apple Watchへの転送と共有について。",
      en: "On-device analysis, optional iCloud sync, Apple Watch transfers, and sharing.",
    },
  },
  {
    path: "/terms",
    component: TermsOfService,
    title: { ja: "利用規約 — MochiLog", en: "Terms of Service — MochiLog" },
    description: {
      ja: "MochiLogの利用条件と免責事項。",
      en: "Terms and conditions for using MochiLog.",
    },
  },
  {
    path: "/support",
    component: SupportPage,
    title: { ja: "サポート — MochiLog", en: "Support — MochiLog" },
    description: {
      ja: "MochiLogのよくある質問、お問い合わせと不具合報告の案内。",
      en: "MochiLog help, contact information, and reporting a problem.",
    },
  },
];

const app = new Hono();
app.use("*", async (c, next) => {
  await next();
  c.header("X-Content-Type-Options", "nosniff");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
});
for (const page of pages)
  app.get(page.path, (c) => {
    const locale = requestLocale(
      new URL(c.req.url),
      c.req.header("Accept-Language"),
    );
    c.header("Vary", "Accept-Language");
    const Page = page.component;
    return c.html(
      "<!doctype html>" +
        renderToStaticMarkup(
          <Layout
            locale={locale}
            title={page.title[locale]}
            description={page.description[locale]}
            path={page.path}
            noIndex={new URL(c.req.url).hostname !== new URL(SITE_URL).hostname}
          >
            <Page />
          </Layout>,
        ),
    );
  });
app.get("/sitemap.xml", (c) =>
  c.body(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages.flatMap((page) => ["ja", "en"].map((locale) => `<url><loc>${SITE_URL}${page.path}?lang=${locale}</loc><xhtml:link rel="alternate" hreflang="ja" href="${SITE_URL}${page.path}?lang=ja"/><xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${page.path}?lang=en"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${page.path}"/></url>`)).join("")}</urlset>`,
    200,
    { "Content-Type": "application/xml; charset=utf-8" },
  ),
);
app.notFound((c) => {
  const locale = requestLocale(
    new URL(c.req.url),
    c.req.header("Accept-Language"),
  );
  return c.html(
    "<!doctype html>" +
      renderToStaticMarkup(
        <Layout
          locale={locale}
          title="404 — MochiLog"
          path={c.req.path}
          noIndex
        >
          <p className="eyebrow">404</p>
          <h1>
            {locale === "ja"
              ? "ページが見つかりません。"
              : "This page could not be found."}
          </h1>
          <a className="button primary" href={`/?lang=${locale}`}>
            {locale === "ja" ? "トップへ戻る" : "Back to home"}
          </a>
        </Layout>,
      ),
    404,
  );
});
export default app;
