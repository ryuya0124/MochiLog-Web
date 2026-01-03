import React from 'react'
import { useLocaleContext } from '../i18n'

export const TermsOfService = () => {
  const { t, locale } = useLocaleContext()

  return (
    <div className="policy-page animate-fade-in">
      <div className="card">
        <h1>{t.terms.title}</h1>
        <p className="intro-text">{t.terms.intro}</p>

        {t.terms.articles.map((a: any) => (
          <section key={a.id} className="policy-section">
            <h2>{a.title}</h2>
            {a.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
            {a.list && (
              <ul className="policy-list">
                {a.list.map((it: string, i: number) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="policy-footer">
          <a href={`/?lang=${locale}`} className="back-link">{t.common.homeLink}</a>
        </div>
      </div>

      <style>{`
        .policy-page {
          animation: fadeIn 0.5s ease forwards;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .policy-section {
          margin-bottom: 2rem;
        }

        .policy-section h2 {
          font-size: 1.15rem;
          margin-top: 0;
        }

        .policy-section p {
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 0.75rem;
        }

        .policy-list {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .policy-list li {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 0.5rem;
        }

        .policy-list li::marker {
          color: var(--accent);
        }

        .policy-footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--accent);
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: var(--cta);
        }
      `}</style>
    </div>
  )
}
