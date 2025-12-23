import React from 'react'
import { useLocaleContext } from '../i18n'

export const LandingPage = () => {
  const { t, locale } = useLocaleContext()
  const features = t.landing.features

  return (
    <div className="lp-content">
      <section className="hero">
        <div className="hero-badge">{t.landing.badge}</div>
        <h1 className="hero-title">{t.landing.title}</h1>
        <p className="hero-subtitle">
          {t.landing.subtitle.split('\n').map((line: string, i: number) => (
            <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
          ))}
        </p>
        <div className="hero-cta">
          <a href="#" className="btn-primary">{t.landing.cta}</a>
        </div>
      </section>

      <section className="features-grid">
        {features.map((f: any, i: number) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>

      <section className="disclaimer-section">
        <div className="disclaimer-card">
          <h4>{t.landing.disclaimerTitle}</h4>
          <p>{t.landing.disclaimer}</p>
        </div>
      </section>

      <nav className="footer-nav">
        <a href={`/privacy?lang=${locale}`}>{t.common.privacy}</a>
        <span className="separator">•</span>
        <a href={`/terms?lang=${locale}`}>{t.common.terms}</a>
      </nav>

      <style>{`
        .lp-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .hero {
          text-align: center;
          padding: 4rem 0 2rem;
        }
        .hero-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: var(--accent);
          color: white;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        .hero-title {
          font-size: 4rem;
          margin: 0;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--accent), #5856d6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--muted);
          margin-top: 1rem;
          line-height: 1.4;
        }
        .hero-cta {
          margin-top: 2.5rem;
        }
        .btn-primary {
          background: var(--accent);
          color: white !important;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: transform 0.2s;
          display: inline-block;
        }
        .btn-primary:hover {
          transform: scale(1.05);
          text-decoration: none;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .feature-card {
          padding: 2rem;
          background: var(--bg);
          border: 1px solid var(--shadow);
          border-radius: 16px;
          transition: y 0.2s;
        }
        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .feature-card h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
        }
        .feature-card p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--muted);
        }

        .disclaimer-section {
          padding: 2rem 0;
        }
        .disclaimer-card {
          background: rgba(255, 149, 0, 0.1);
          border-left: 4px solid #ff9500;
          padding: 1.5rem;
          border-radius: 8px;
        }
        .disclaimer-card h4 {
          margin: 0 0 0.5rem 0;
          color: #ff9500;
        }
        .disclaimer-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--muted);
        }

        .footer-nav {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--shadow);
        }
        .separator {
          margin: 0 1rem;
          color: var(--shadow);
        }

        @media (max-width: 600px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.2rem; }
        }
      `}</style>
    </div>
  )
}
