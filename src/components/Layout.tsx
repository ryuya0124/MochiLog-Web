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
        {/* Google Fonts: Space Grotesk + DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          /* === Design Tokens === */
          :root {
            /* ダークモード (デフォルト) */
            --bg: #050510;
            --bg-secondary: #0a0a1a;
            --container-bg: rgba(255,255,255,0.05);
            --text: #e0e0ff;
            --muted: #94a3b8;
            --accent: #00FFFF;
            --accent-secondary: #7B61FF;
            --cta: #FF00FF;
            --gradient: linear-gradient(135deg, #00FFFF, #7B61FF, #FF00FF);
            --shadow: rgba(0,0,0,0.8);
            --border: rgba(255,255,255,0.1);
            --glass-bg: rgba(255,255,255,0.05);
            --glass-border: rgba(255,255,255,0.1);
          }

          @media (prefers-color-scheme: light) {
            :root {
              --bg: #f8fafc;
              --bg-secondary: #f1f5f9;
              --container-bg: rgba(255,255,255,0.8);
              --text: #0f172a;
              --muted: #475569;
              --accent: #0080FF;
              --accent-secondary: #5D34D0;
              --cta: #BF00FF;
              --gradient: linear-gradient(135deg, #0080FF, #5D34D0, #BF00FF);
              --shadow: rgba(0,0,0,0.1);
              --border: rgba(0,0,0,0.1);
              --glass-bg: rgba(255,255,255,0.7);
              --glass-border: rgba(0,0,0,0.1);
            }
          }

          /* === Reset & Base === */
          *, *::before, *::after {
            box-sizing: border-box;
          }

          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--text);
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 600;
            line-height: 1.2;
          }

          /* === Container === */
          .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
            padding-top: 100px; /* ヘッダー分の余白 */
          }

          /* === Floating Header === */
          .header {
            position: fixed;
            top: 16px;
            left: 16px;
            right: 16px;
            z-index: 100;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 0.75rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 8px 32px var(--shadow);
            transition: all 0.3s ease;
          }

          .header-logo {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .header-nav {
            display: flex;
            gap: 0.5rem;
          }

          .header-nav a {
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            font-size: 0.9rem;
            color: var(--muted);
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .header-nav a:hover {
            color: var(--text);
            background: var(--container-bg);
          }

          .header-nav a.active {
            color: var(--accent);
            font-weight: 500;
          }

          /* === Card (Glassmorphism) === */
          .card {
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 2rem;
            border-radius: 20px;
            border: 1px solid var(--glass-border);
            box-shadow: 0 8px 32px var(--shadow);
          }

          /* === Typography === */
          h1 { 
            font-size: 2.5rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
          }
          
          h2 { 
            font-size: 1.5rem;
            color: var(--accent);
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.5rem;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
          }

          h3 {
            font-size: 1.25rem;
            color: var(--text);
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          p {
            color: var(--muted);
            margin-bottom: 1rem;
          }

          /* === Links === */
          a { 
            color: var(--accent);
            text-decoration: none;
            transition: all 0.2s ease;
          }
          
          a:hover { 
            color: var(--cta);
          }

          /* === Footer === */
          footer { 
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border);
            text-align: center;
            font-size: 0.9rem;
            color: var(--muted);
          }

          /* === Animations === */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fadeIn 0.6s ease forwards;
          }

          /* === Reduced Motion === */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* === Responsive === */
          @media (max-width: 600px) {
            .header {
              top: 8px;
              left: 8px;
              right: 8px;
              padding: 0.5rem 1rem;
            }

            .container {
              padding: 1rem;
              padding-top: 80px;
            }

            h1 { font-size: 2rem; }
            h2 { font-size: 1.25rem; }
          }
        `}</style>
      </head>
      <body>
        <header className="header">
          <div className="header-logo">{t.common.appName}</div>
          <nav className="header-nav">
            <a href={`?lang=ja`} className={locale === 'ja' ? 'active' : ''}>日本語</a>
            <a href={`?lang=en`} className={locale === 'en' ? 'active' : ''}>English</a>
          </nav>
        </header>

        <div className="container">
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
