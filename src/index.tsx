import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import { LandingPage } from './pages/LandingPage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { SupportPage } from './pages/SupportPage'
import { Layout } from './components/Layout'

const app = new Hono()

app.get('/', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  const description = lang === 'ja'
    ? 'MochiLogはiPhone・iPadのバッテリー状態を詳細に解析・管理できるアプリです。充放電サイクル、容量劣化、健康状態の推移をグラフで可視化。'
    : 'MochiLog is a battery analytics app for iPhone and iPad. Track charge cycles, capacity degradation, and health trends with detailed graphs.'
  return c.html(
    renderToString(
      <Layout title="MochiLog - バッテリー解析・管理アプリ" locale={lang} description={description} path="/">
        <LandingPage />
      </Layout>
    )
  )
})

app.get('/privacy', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  const description = lang === 'ja'
    ? 'MochiLogのプライバシーポリシー。ユーザーデータの取り扱いについて説明します。'
    : 'MochiLog Privacy Policy. Learn how we handle your data.'
  return c.html(
    renderToString(
      <Layout title="プライバシーポリシー - MochiLog" locale={lang} description={description} path="/privacy">
        <PrivacyPolicy />
      </Layout>
    )
  )
})

app.get('/terms', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  const description = lang === 'ja'
    ? 'MochiLogの利用規約。サービス利用時のルールと条件をご確認ください。'
    : 'MochiLog Terms of Service. Review the rules and conditions for using our service.'
  return c.html(
    renderToString(
      <Layout title="利用規約 - MochiLog" locale={lang} description={description} path="/terms">
        <TermsOfService />
      </Layout>
    )
  )
})

app.get('/support', (c) => {
  const url = new URL(c.req.url)
  const lang = (url.searchParams.get('lang') === 'en') ? 'en' : 'ja'
  const description = lang === 'ja'
    ? 'MochiLogのサポートページ。お問い合わせ・ヘルプ情報はこちら。'
    : 'MochiLog Support page. Contact us and find help information here.'
  return c.html(
    renderToString(
      <Layout title="サポート - MochiLog" locale={lang} description={description} path="/support">
        <SupportPage />
      </Layout>
    )
  )
})

export default app


