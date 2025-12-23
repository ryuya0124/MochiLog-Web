import React from 'react'
import { LocaleContext, initialLocale, translations, Locale } from '../i18n'

export const Layout = ({ children, title, locale: ssrLocale }: { children: React.ReactNode; title: string; locale?: Locale }) => {
  const [locale, setLocale] = React.useState<Locale>(() => {
    if (ssrLocale) return ssrLocale
    return (typeof window === 'undefined') ? 'ja' : initialLocale()
  })
  const t = translations[locale]

  React.useEffect(() => {
    try { localStorage.setItem('locale', locale) } catch {}
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      <html lang={locale === 'ja' ? 'ja' : 'en'}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <style>{`
          :root {
            --bg: #f9f9f9;
            --text: #333333;
            --container-bg: #ffffff;
            --muted: #666666;
            --accent: #007aff;
            --shadow: rgba(0,0,0,0.08);
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #0b0b0d;
              --text: #e6e6e6;
              --container-bg: #0f1113;
              --muted: #9aa0a6;
              --accent: #0a84ff;
              --shadow: rgba(0,0,0,0.6);
            }
          }

          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--text);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
          }

          .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
          }

          .card {
            background: var(--container-bg);
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 4px 12px var(--shadow);
          }

          h1 { color: var(--accent); }
          h2 { border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem; margin-top: 2rem; }
          a { color: var(--accent); text-decoration: none; }
          a:hover { text-decoration: underline; }
          footer { margin-top: 3rem; text-align: center; font-size: 0.9rem; color: var(--muted); }
        `}</style>
      </head>
      <body>
        <div className="container">
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent)' }}>{t.common.appName}</div>
            <div>
              <a href={`?lang=ja`} style={{ marginRight: 8, opacity: locale === 'ja' ? 1 : 0.6 }}>日本語</a>
              <a href={`?lang=en`} style={{ opacity: locale === 'en' ? 1 : 0.6, marginLeft: 8 }}>English</a>
            </div>
          </header>

          {children}

          <footer>
            <p>&copy; {new Date().getFullYear()} MochiLog</p>
          </footer>
        </div>
      </body>
      </html>
    </LocaleContext.Provider>
  )
}
