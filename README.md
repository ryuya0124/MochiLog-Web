# MochiLog Web

**MochiLogの機能と使い方を伝える、公式紹介サイト。**

iPhone・iPadの解析ログを記録するアプリ [MochiLog](https://github.com/ryuya0124/MochiLog) のWebサイトです。HonoとReactでHTMLをサーバーレンダリングし、Cloudflare Workersで配信します。

[公開サイト](https://mochilog.ryuya-dev.net/) · [改修版プレビュー](https://redesign-20260908-mochilog-web.ryuya1adgjmptw.workers.dev/?lang=ja) · [アプリのGitHub](https://github.com/ryuya0124/MochiLog) · [App Store](https://apps.apple.com/app/mochilog/id6756904240)

## このリポジトリについて

アプリの実装に合わせてデザインと内容を刷新し、`redesign/app-showcase-20260908` の変更をmainへ統合しています。改修版は上記のCloudflareプレビューで確認できます。mainへの統合とCloudflareの本番へのトラフィック切替は別の操作です。

アプリの `refactor/ios27-batch-import-adaptive-ui-20260908` を参照しています。8言語・言語設定など、公開を確認できていない機能はサイト上で「開発中」として案内しています。サイト自体の表示言語は日本語・英語です。

## サイトの構成

| ページ | 内容 |
| --- | --- |
| `/` | 機能紹介、履歴のサンプルプレビュー、取り込み手順、開発中機能、FAQ |
| `/guide` | 解析ログの探し方、容量・充電サイクルの読み方 |
| `/support` | 問い合わせ先、不具合報告に必要な情報 |
| `/privacy` | 端末内解析、任意のiCloud同期、Watch転送、共有の説明 |
| `/terms` | 利用規約 |

全ページで `?lang=ja` / `?lang=en` を利用できます。指定がない場合はブラウザの `Accept-Language` から日本語・英語を選び、該当しなければ日本語を表示します。

- アプリの緑を基調にしたレスポンシブ表示、モバイルメニュー、ライト・ダーク表示。
- キーボード操作、スキップリンク、動きを減らす設定への対応。
- HTML/CSSで動く期間プレビューとFAQ。公開ページにクライアントReactバンドルは不要です。
- 言語ごとのタイトル・説明・canonical・hreflangと、ルート一覧から生成するサイトマップ。

プレビューのグラフは説明用の合成データです。端末のバッテリーを測定したり、解析ログをアップロードしたりするWebアプリではありません。

## 開発環境

| ツール | 使用環境 |
| --- | --- |
| Node.js | 22.12以降（検証は24系） |
| パッケージ管理 | pnpm 10.27.0。バージョンは `package.json`、依存関係は `pnpm-lock.yaml` で管理 |
| Web / SSR | Hono 4、React 19、Vite 7 |
| 配信 | Cloudflare Workers、Wrangler 4 |
| 検証 | TypeScript、Playwright、axe-core |

```sh
git clone https://github.com/ryuya0124/MochiLog-Web.git
cd MochiLog-Web
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` が表示するローカルURLを開いてください。通常は `http://127.0.0.1:5173` です。

## コマンド

| コマンド | 動作 |
| --- | --- |
| `pnpm dev` | Viteの開発サーバー |
| `pnpm typecheck` | TypeScriptの型検査 |
| `pnpm build` | 型検査とWorkersのdry-runビルド。**本番へは配信しません** |
| `pnpm preview` | Workersのローカル実行環境を `127.0.0.1:8787` で起動 |
| `pnpm test` | Playwrightの検証。必要に応じてViteを起動 |
| `pnpm run deploy` | 型検査後、Cloudflareの本番へ配信 |

`deploy` はpnpm自身にも同名のコマンドがあるため、配信には **`pnpm run deploy`** を使ってください。既存の `pnpm dep` もこのスクリプトへ接続しています。

## テスト

初回のみブラウザをインストールしてから実行します。

```sh
pnpm exec playwright install chromium
pnpm typecheck
pnpm build
pnpm test
```

Workersの実行環境で確認する場合は、先に `pnpm preview` を起動し、別ターミナルで実行します。

macOS / Linux:

```sh
TEST_BASE_URL=http://127.0.0.1:8787 pnpm test
```

PowerShell:

```powershell
$env:TEST_BASE_URL = 'http://127.0.0.1:8787'
pnpm test
Remove-Item Env:TEST_BASE_URL
```

### 検証範囲

- 日本語・英語の全5ページを320 / 390 / 768 / 1024 / 1440px幅で確認。
- JavaScript無効時の表示、ページのはみ出し、見出しとcanonicalを確認。
- モバイルメニュー、言語切替、期間プレビュー、キーボード操作、FAQを確認。
- 言語判定、404、アセット配信、サイトマップを確認。
- 全5ページのライト・ダークでWCAG A / AAのaxe自動検査。

2026-09-08時点で、Workersのローカル環境で全15テスト、Cloudflare上のプレビューで主要4テストが成功しています。自動検査は全ブラウザ・実機・支援技術での挙動を保証するものではありません。スクリーンショットは `test-results/` に保存します。

## Cloudflare Workersへの配信

配信には、対象Cloudflareアカウントの認証とWorkerへの権限が必要です。

```sh
# 本番のトラフィックを切り替えずに確認用バージョンを作成
pnpm exec wrangler versions upload --preview-alias redesign

# 本番反映時のみ
pnpm run deploy
```

Worker名は `mochilog-web`。設定は [wrangler.toml](wrangler.toml) にあります。静的アセットは `public/`、HTMLとサイトマップはWorkerが返します。公開ドメイン以外で返すHTMLはnoindexです。

確認用アップロードと本番反映は別の操作です。詳しくは [CloudflareのPreview URLs](https://developers.cloudflare.com/workers/versions-and-deployments/preview-urls/) を参照してください。

## ファイル構成

| パス | 役割 |
| --- | --- |
| `src/index.tsx` | ルーティング、言語判定、サイトマップ、404 |
| `src/content.ts` | 日本語・英語の紹介文、FAQ、開発中機能 |
| `src/i18n.tsx` | 規約・プライバシーポリシーと表示言語コンテキスト |
| `src/components/Layout.tsx` | 共通ナビゲーション、フッター、SEOメタデータ |
| `src/pages/` | 各ページの構成 |
| `public/styles.css` | 共通デザイン・レスポンシブ・ダーク表示 |
| `public/` | CSS、アプリのアイコンレイヤー、OG画像、robots.txt |
| `tests/site.spec.ts` | 表示・操作・アクセシビリティ検証 |

## アプリの変更を反映するとき

アプリ本体の実装と公開状況を確認して、`src/content.ts` の紹介文・FAQ・開発中案内を更新します。iCloudや共有などデータの扱いが変わる場合は、アプリ側のプライバシーポリシーとWeb側の記述を合わせてください。開発ブランチにあるだけの機能を、公開済みとして案内しないようにしています。

アイコンのレイヤーはMochiLogアプリのアセットを使用しています。

## 関連リンク・License

- [MochiLog本体](https://github.com/ryuya0124/MochiLog)
- [アプリ改修ブランチのREADME](https://github.com/ryuya0124/MochiLog/blob/refactor/ios27-batch-import-adaptive-ui-20260908/README.md)
- [GitHub Issues](https://github.com/ryuya0124/MochiLog-Web/issues)
- [LICENSE](LICENSE)

## English overview

The MochiLog product website is built with Hono and React server rendering on Cloudflare Workers. It includes Japanese and English pages for features, getting started, support, privacy, and terms. Menus, FAQs, and the illustrative battery-history preview work without client-side React hydration.

The redesign has been integrated into main and is available at the preview link above. Merging into main and switching Cloudflare production traffic are separate operations. Unreleased app features are marked as in development. Use `pnpm build` for a dry-run build, `pnpm test` for checks, and `pnpm run deploy` only when publishing to production.
