import React from 'react'
import { useLocaleContext } from '../i18n'

export const PrivacyPolicy = () => {
  const { t, locale } = useLocaleContext()

  const sectionTitles = locale === 'en' 
    ? ['Collection of Personal Information', 'Purpose of Use', 'Third-Party Disclosure', 'Advertising and Analytics', 'Changes to This Policy', 'Contact']
    : ['個人情報の収集について', 'データの利用目的', 'データの第三者提供', '広告および解析ツールについて', 'プライバシーポリシーの変更', 'お問い合わせ窓口']

  return (
    <div className="policy-page animate-fade-in">
      <div className="card">
        <h1>{t.privacy.title}</h1>

        <p className="intro-text">{t.privacy.content}</p>

        <section className="policy-section">
          <h2>1. {sectionTitles[0]}</h2>
          <p>{t.privacy.sections.s1}</p>
        </section>

        <section className="policy-section">
          <h2>2. {sectionTitles[1]}</h2>
          <p>{t.privacy.sections.s2}</p>
        </section>

        <section className="policy-section">
          <h2>3. {sectionTitles[2]}</h2>
          <p>{t.privacy.sections.s3}</p>
        </section>

        <section className="policy-section">
          <h2>4. {sectionTitles[3]}</h2>
          <p>{t.privacy.sections.s4}</p>
        </section>

        <section className="policy-section">
          <h2>5. {sectionTitles[4]}</h2>
          <p>{t.privacy.sections.s5}</p>
        </section>

        <section className="policy-section">
          <h2>6. {sectionTitles[5]}</h2>
          <p>{t.privacy.sections.s6}</p>
        </section>

        <div className="policy-footer">
          <p className="date">{t.privacy.date}</p>
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
          margin-bottom: 1.5rem;
        }

        .policy-section h2 {
          font-size: 1.15rem;
          margin-top: 0;
        }

        .policy-section p {
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .policy-footer {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .policy-footer .date {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0;
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
