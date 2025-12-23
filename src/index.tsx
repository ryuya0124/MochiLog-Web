import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import { LandingPage } from './pages/LandingPage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { Layout } from './components/Layout'

const app = new Hono()

app.get('/', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  return c.html(
    renderToString(
      <Layout title="MochiLog - バッテリー解析・管理アプリ" locale={lang}>
        <LandingPage />
      </Layout>
    )
  )
})

app.get('/privacy', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  return c.html(
    renderToString(
      <Layout title="プライバシーポリシー - MochiLog" locale={lang}>
        <PrivacyPolicy />
      </Layout>
    )
  )
})

app.get('/terms', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  return c.html(
    renderToString(
      <Layout title="利用規約 - MochiLog" locale={lang}>
        <TermsOfService />
      </Layout>
    )
  )
})

export default app
