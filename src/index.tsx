import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import { LandingPage } from './pages/LandingPage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { Layout } from './components/Layout'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    renderToString(
      <Layout title="MochiLog - バッテリー解析・管理アプリ">
        <LandingPage />
      </Layout>
    )
  )
})

app.get('/privacy', (c) => {
  return c.html(
    renderToString(
      <Layout title="プライバシーポリシー - MochiLog">
        <PrivacyPolicy />
      </Layout>
    )
  )
})

app.get('/terms', (c) => {
  return c.html(
    renderToString(
      <Layout title="利用規約 - MochiLog">
        <TermsOfService />
      </Layout>
    )
  )
})

export default app
