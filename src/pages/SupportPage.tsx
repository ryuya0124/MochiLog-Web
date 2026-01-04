import React from 'react'
import { useLocaleContext } from '../i18n'

/* Envelope SVG アイコン (Heroicons) */
const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="32" height="32">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

export const SupportPage = () => {
  const { t, locale } = useLocaleContext()

  const title = locale === 'en' ? 'Support' : 'サポート'
  const description = locale === 'en' 
    ? 'If you have any questions, bug reports, or feedback about MochiLog, please feel free to contact us via email.'
    : 'MochiLogに関するご質問、バグ報告、フィードバックなどがございましたら、お気軽にメールにてお問い合わせください。'
  const buttonText = locale === 'en' ? 'Send Email' : 'メールを送信'
  const noteText = locale === 'en'
    ? 'We typically respond within 1-2 days.'
    : '通常1〜2日以内にご返信いたします。'

  return (
    <div className="support-page animate-fade-in">
      <div className="card support-card">
        <div className="support-icon">
          <EnvelopeIcon />
        </div>
        <h1>{title}</h1>
        <p className="support-description">{description}</p>
        
        <a href={`mailto:${t.common.contactEmail}`} className="btn-primary">
          {buttonText}
        </a>

        <p className="support-email">{t.common.contactEmail}</p>
        <p className="support-note">{noteText}</p>

        <div className="support-footer">
          <a href={`/?lang=${locale}`} className="back-link">{t.common.homeLink}</a>
        </div>
      </div>

      <style>{`
        .support-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }

        .support-card {
          text-align: center;
          max-width: 500px;
          padding: 3rem;
        }

        .support-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background: var(--gradient);
          border-radius: 20px;
          margin-bottom: 1.5rem;
          color: #050510;
        }

        @media (prefers-color-scheme: light) {
          .support-icon {
            color: #ffffff;
          }
        }

        .support-card h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .support-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 2rem;
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

        .support-email {
          margin-top: 1.5rem;
          font-size: 0.95rem;
          color: var(--accent);
          font-family: 'Space Grotesk', monospace;
        }

        .support-note {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: var(--muted);
        }

        .support-footer {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .back-link {
          font-weight: 500;
          color: var(--accent);
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: var(--cta);
        }

        @media (prefers-reduced-motion: reduce) {
          .btn-primary:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}
