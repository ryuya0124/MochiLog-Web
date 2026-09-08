# MochiLog Web

MochiLogの紹介サイト。Hono + ReactによるサーバーレンダリングをCloudflare Workersで配信します。クライアントのReactバンドルは配信せず、メニュー・FAQ・期間プレビューはHTML/CSSで動作します。

## 開発・検証

Node.js 22以降とpnpm 10.27を使用します。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm typecheck
pnpm build
pnpm exec playwright install chromium
pnpm test
```

`pnpm build` は型検査とWorkersのdry-runビルドです。本番へは配信しません。Workersの実行環境で試す場合は `pnpm preview`、別ターミナルで `TEST_BASE_URL=http://127.0.0.1:8787 pnpm test` を実行します。

テストは日本語・英語の全5ページ、320/390/768/1024/1440px幅、JavaScript無効時の表示、キーボードとタップの操作、メニュー、言語切替、メタデータ、404、サイトマップ、ライト・ダークのアクセシビリティを確認します。スクリーンショットは `test-results/` に保存します。

## 配信

```sh
# 本番のトラフィックを切り替えずに確認用バージョンを作成
pnpm exec wrangler versions upload --preview-alias redesign

# 本番反映時のみ
pnpm deploy
```

既存のWorker名・公開ドメインは維持しています。静的アセットは `public/`、サイトマップはSSRルートから生成します。プレビューのHTMLはnoindexです。

## 内容の更新

- `src/content.ts`: 日本語・英語の紹介文、FAQ、開発中機能の案内。
- `src/i18n.tsx`: 規約・プライバシーポリシー。データ処理の説明はアプリのポリシーに合わせています。
- `public/styles.css`: 共通デザインとレスポンシブ表示。
- `src/components/Layout.tsx`: ナビゲーション、言語リンク、SEOメタデータ。

画面のグラフは説明用の合成データです。実際の端末情報を読み取ったり、ログをアップロードしたりする機能はありません。アイコンのレイヤーはMochiLogアプリのアセットを使用しています。

2026-09-08のアプリ改修ブランチ `refactor/ios27-batch-import-adaptive-ui-20260908` と[App Storeの公開情報](https://apps.apple.com/app/mochilog/id6756904240)を参照しました。8言語・言語設定などは未公開のため「開発中」として案内し、配信済みと確認できた時点で更新します。
