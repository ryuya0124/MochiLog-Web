import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { Layout } from './components/Layout'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    renderToString(
      <Layout title="MochiLog - Home">
        <div className="container">
          <h1>MochiLog</h1>
          <p>iOSアプリ「MochiLog」のサポートサイトです。</p>
          <ul>
            <li><a href="/privacy">プライバシーポリシー</a></li>
            <li><a href="/terms">利用規約</a></li>
          </ul>
        </div>
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
