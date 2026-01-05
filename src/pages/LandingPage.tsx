import React from 'react'
import { useLocaleContext } from '../i18n'

/* SVG アイコンコンポーネント (Heroicons ベース) */
const icons = {
  ChartBar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  ArrowTrendingUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  Cloud: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
  ),

  Share: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
    </svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
  Warning: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  )
}

const featureIcons = [icons.ChartBar, icons.ArrowTrendingUp, icons.Cloud, icons.Share, icons.Sparkles]

export const LandingPage = () => {
  const { t, locale } = useLocaleContext()
  const features = t.landing.features

  return (
    <div className="lp-content">
      {/* === JSON-LD 構造化データ: SoftwareApplication === */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "MochiLog",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "iOS, iPadOS",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "JPY"
        },
        "description": locale === 'ja' 
          ? "iPhone・iPadのバッテリー状態を詳細に解析・管理できるアプリ"
          : "Battery analytics app for iPhone and iPad"
      }) }} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-badge">{t.landing.badge}</div>
        <h1 className="hero-title">{t.landing.title}</h1>
        <p className="hero-subtitle">
          {t.landing.subtitle.split('\n').map((line: string, i: number) => (
            <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
          ))}
        </p>
        <div className="hero-cta">
          <a href="https://testflight.apple.com/join/vnHYsRgN" className="btn-primary" target="_blank" rel="noopener noreferrer">
            {t.landing.ctaTestFlight}
          </a>
          <a href="https://apps.apple.com/us/app/mochilog/id6756904240" className="btn-secondary" target="_blank" rel="noopener noreferrer">
            {t.landing.ctaAppStore}
            <span className="coming-soon-badge">{t.landing.comingSoon}</span>
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        {features.map((f: any, i: number) => {
          const IconComponent = featureIcons[i] || icons.Sparkles
          return (
            <div key={i} className="feature-card">
              <div className="feature-icon">
                <IconComponent />
              </div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          )
        })}
      </section>

      {/* Disclaimer Section */}
      <section className="disclaimer-section">
        <div className="disclaimer-card">
          <div className="disclaimer-header">
            <icons.Warning />
            <h4>{t.landing.disclaimerTitle.replace('⚠️ ', '')}</h4>
          </div>
          <p>{t.landing.disclaimer}</p>
        </div>
      </section>

      {/* Footer Nav */}
      <nav className="footer-nav">
        <a href={`/privacy?lang=${locale}`}>{t.common.privacy}</a>
        <span className="separator">•</span>
        <a href={`/terms?lang=${locale}`}>{t.common.terms}</a>
        <span className="separator">•</span>
        <a href={`/support?lang=${locale}`}>{t.common.support}</a>
      </nav>

      <style>{`
        .lp-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* === Hero Section === */
        .hero {
          position: relative;
          text-align: center;
          padding: 4rem 0 2rem;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(0,255,255,0.15) 0%, rgba(123,97,255,0.1) 40%, transparent 70%);
          pointer-events: none;
          z-index: -1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          color: var(--accent);
          border-radius: 24px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 4.5rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.03em;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: var(--muted);
          margin-top: 1.5rem;
          line-height: 1.6;
        }

        .hero-cta {
          margin-top: 2.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .btn-primary {
          display: inline-block;
          background: var(--gradient);
          color: #050510 !important;
          padding: 1rem 2.5rem;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,255,255,0.3);
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,255,255,0.4);
        }

        @media (prefers-color-scheme: light) {
          .btn-primary {
            color: #ffffff !important;
          }
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          color: var(--text);
          padding: 1rem 2rem;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-secondary:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 20px rgba(0,255,255,0.15);
          transform: translateY(-2px);
        }

        .coming-soon-badge {
          background: var(--accent-secondary);
          color: #ffffff;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* === Features Grid === */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          padding: 2rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          border-color: var(--accent);
          box-shadow: 0 8px 32px rgba(0,255,255,0.15);
          transform: translateY(-4px);
        }

        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: var(--gradient);
          border-radius: 14px;
          margin-bottom: 1.25rem;
          color: var(--icon-on-gradient, #050510);
        }

        @media (prefers-color-scheme: light) {
          .feature-icon {
            color: #ffffff;
          }
        }

        .feature-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          margin: 0 0 0.75rem 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
        }

        .feature-card p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.5;
        }

        /* === Disclaimer === */
        .disclaimer-section {
          padding: 2rem 0;
        }

        .disclaimer-card {
          background: rgba(255, 149, 0, 0.08);
          border: 1px solid rgba(255, 149, 0, 0.2);
          border-left: 4px solid #ff9500;
          padding: 1.5rem;
          border-radius: 12px;
        }

        .disclaimer-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #ff9500;
        }

        .disclaimer-card h4 {
          margin: 0;
          color: #ff9500;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
        }

        .disclaimer-card p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.5;
        }

        /* === Footer Nav === */
        .footer-nav {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .footer-nav a {
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .separator {
          margin: 0 1rem;
          color: var(--muted);
        }

        /* === Responsive === */
        @media (max-width: 600px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-glow { width: 300px; height: 300px; }
          .feature-card { padding: 1.5rem; }
        }

        /* === Reduced Motion === */
        @media (prefers-reduced-motion: reduce) {
          .btn-primary:hover,
          .feature-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
