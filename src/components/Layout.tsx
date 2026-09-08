import type { ReactNode } from "react";
import { LocaleContext, translations, type Locale } from "../i18n";
import { APP_STORE, SITE_URL, copy } from "../content";

export function Layout({
  children,
  title,
  locale = "ja",
  description,
  path = "/",
  noIndex = false,
}: {
  children: ReactNode;
  title: string;
  locale?: Locale;
  description?: string;
  path?: string;
  noIndex?: boolean;
}) {
  const t = copy[locale];
  const common = translations[locale].common;
  const canonical = `${SITE_URL}${path}?lang=${locale}`;
  const nav = (
    <>
      <a href={`/?lang=${locale}#features`}>{t.nav[0]}</a>
      <a
        href={`/guide?lang=${locale}`}
        aria-current={path === "/guide" ? "page" : undefined}
      >
        {t.nav[1]}
      </a>
      <a
        href={`/support?lang=${locale}`}
        aria-current={path === "/support" ? "page" : undefined}
      >
        {t.nav[2]}
      </a>
    </>
  );
  const language = (
    <div
      className="locale-nav"
      aria-label={locale === "ja" ? "表示言語" : "Language"}
    >
      <a
        href={`${path}?lang=ja`}
        lang="ja"
        hrefLang="ja"
        aria-current={locale === "ja" ? "true" : undefined}
      >
        日本語
      </a>
      <a
        href={`${path}?lang=en`}
        lang="en"
        hrefLang="en"
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </a>
    </div>
  );
  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale] }}>
      <html lang={locale}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <meta name="description" content={description ?? t.description} />
          <meta name="theme-color" content="#f6f8f3" />
          <meta
            name="robots"
            content={noIndex ? "noindex, follow" : "index, follow"}
          />
          <link rel="canonical" href={canonical} />
          <link
            rel="alternate"
            hrefLang="ja"
            href={`${SITE_URL}${path}?lang=ja`}
          />
          <link
            rel="alternate"
            hrefLang="en"
            href={`${SITE_URL}${path}?lang=en`}
          />
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${SITE_URL}${path}`}
          />
          <link rel="icon" type="image/png" href="/app-icon.png" />
          <link rel="apple-touch-icon" href="/app-icon.png" />
          <meta property="og:title" content={title} />
          <meta
            property="og:description"
            content={description ?? t.description}
          />
          <meta property="og:url" content={canonical} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="MochiLog" />
          <meta
            property="og:locale"
            content={locale === "ja" ? "ja_JP" : "en_US"}
          />
          <meta property="og:image" content={`${SITE_URL}/ogp.jpeg`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={`${SITE_URL}/ogp.jpeg`} />
          <link rel="stylesheet" href="/styles.css" />
          {path === "/" && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  name: "MochiLog",
                  operatingSystem: "iOS 16+, iPadOS 16+, watchOS 9+",
                  applicationCategory: "UtilitiesApplication",
                  url: SITE_URL,
                  downloadUrl: APP_STORE,
                  description: t.description,
                }).replace(/</g, "\\u003c"),
              }}
            />
          )}
        </head>
        <body>
          <a className="skip-link" href="#main-content">
            {t.skip}
          </a>
          <header className="site-header">
            <div className="wrap header-inner">
              <a className="brand" href={`/?lang=${locale}`}>
                <img src="/app-icon.png" alt="" width="34" height="34" />
                <span>
                  MochiLog<span className="brand-dot">.</span>
                </span>
              </a>
              <nav
                className="desktop-nav"
                aria-label={
                  locale === "ja" ? "メインナビゲーション" : "Main navigation"
                }
              >
                {nav}
              </nav>
              <div className="desktop-language">{language}</div>
              <details className="mobile-menu">
                <summary>
                  {t.menu}
                  <span aria-hidden="true">＋</span>
                </summary>
                <nav
                  aria-label={
                    locale === "ja"
                      ? "モバイルナビゲーション"
                      : "Mobile navigation"
                  }
                >
                  {nav}
                  {language}
                </nav>
              </details>
            </div>
          </header>
          <main
            id="main-content"
            className={path === "/" ? "" : "document-main wrap"}
            tabIndex={-1}
          >
            {children}
          </main>
          <footer className="site-footer wrap">
            <div>
              <a className="brand" href={`/?lang=${locale}`}>
                MochiLog<span className="brand-dot">.</span>
              </a>
              <p>© {new Date().getFullYear()} MochiLog</p>
            </div>
            <nav aria-label={locale === "ja" ? "フッター" : "Footer"}>
              <a href={`/privacy?lang=${locale}`}>{common.privacy}</a>
              <a href={`/terms?lang=${locale}`}>{common.terms}</a>
              <a href={`/support?lang=${locale}`}>{common.support}</a>
              <a href="https://github.com/ryuya0124/MochiLog">GitHub ↗</a>
            </nav>
          </footer>
        </body>
      </html>
    </LocaleContext.Provider>
  );
}
