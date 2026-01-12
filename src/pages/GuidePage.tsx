import React from 'react'
import { useLocaleContext } from '../i18n'

export const GuidePage = () => {
  const { t } = useLocaleContext()
  const content = t.guide

  return (
    <div className="guide-content">
      {/* Hero Section */}
      <section className="guide-hero">
        <h1>{content.title}</h1>
        <p className="guide-subtitle">
          {content.subtitle.split('\n').map((line: string, i: number) => (
            <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
          ))}
        </p>
      </section>

      {/* Main Content */}
      <div className="guide-body">
        {content.sections.map((section: any) => (
          <article key={section.id} className="guide-article" id={section.id}>
            <h2>{section.title}</h2>
            <p className="guide-text">
              {section.content.split('\n').map((line: string, i: number) => (
                <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>
              ))}
            </p>
          </article>
        ))}
      </div>

      <style>{`
        .guide-content {
          padding-bottom: 4rem;
        }

        .guide-hero {
          text-align: center;
          margin-bottom: 5rem;
        }

        .guide-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .guide-subtitle {
          font-size: 1.25rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .guide-body {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .guide-article {
          padding: 2.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
        }

        .guide-article h2 {
          color: var(--accent);
          font-size: 1.75rem;
          margin-top: 0;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .guide-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text);
          margin: 0;
        }

        @media (max-width: 600px) {
          .guide-hero h1 { font-size: 2.25rem; }
          .guide-article { padding: 1.5rem; }
          .guide-article h2 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  )
}
