import React from 'react'
import { useLocaleContext } from '../i18n'

export const PrivacyPolicy = () => {
  const { t, locale } = useLocaleContext()

  return (
    <div className="card">
      <h1>{t.privacy.title}</h1>

      <p>{t.privacy.content}</p>

      <h2>1. {t.privacy.title.includes('Privacy') ? 'Collection of Personal Information' : '個人情報の収集について'}</h2>
      <p>{t.privacy.sections.s1}</p>

      <h2>2. {t.privacy.title.includes('Privacy') ? 'Purpose of Use' : 'データの利用目的'}</h2>
      <p>{t.privacy.sections.s2}</p>

      <h2>3. {t.privacy.title.includes('Privacy') ? 'Third-Party Disclosure' : 'データの第三者提供'}</h2>
      <p>{t.privacy.sections.s3}</p>

      <h2>4. {t.privacy.title.includes('Privacy') ? 'Advertising and Analytics' : '広告および解析ツールについて'}</h2>
      <p>{t.privacy.sections.s4}</p>

      <h2>5. {t.privacy.title.includes('Privacy') ? 'Changes to This Policy' : 'プライバシーポリシーの変更'}</h2>
      <p>{t.privacy.sections.s5}</p>

      <h2>6. {t.privacy.title.includes('Privacy') ? 'Contact' : 'お問い合わせ窓口'}</h2>
      <p>{t.privacy.sections.s6}</p>

      <p style={{ marginTop: '2rem' }}>{t.privacy.date}</p>

      <p style={{ marginTop: '1.5rem' }}><a href={`/?lang=${locale}`}>{t.common.homeLink}</a></p>
    </div>
  )
}
