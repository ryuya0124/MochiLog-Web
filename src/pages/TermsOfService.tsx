import React from 'react'
import { useLocaleContext } from '../i18n'

export const TermsOfService = () => {
  const { t, locale } = useLocaleContext()

  return (
    <div className="card">
      <h1>{t.terms.title}</h1>
      <p>{t.terms.intro}</p>

      {t.terms.articles.map((a: any) => (
        <section key={a.id}>
          <h2>{a.title}</h2>
          {a.paragraphs.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
          {a.list && (
            <ul>
              {a.list.map((it: string, i: number) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <p style={{ marginTop: '2rem' }}><a href={`/?lang=${locale}`}>{t.common.homeLink}</a></p>
    </div>
  )
}
