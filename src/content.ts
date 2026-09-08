import type { Locale } from "./i18n";

export const APP_STORE = "https://apps.apple.com/app/mochilog/id6756904240";
export const TESTFLIGHT = "https://testflight.apple.com/join/vnHYsRgN";
export const SITE_URL = "https://mochilog.ryuya-dev.net";

export const copy = {
  ja: {
    nav: ["機能", "使い方", "サポート"],
    skip: "本文へ移動",
    menu: "メニュー",
    title: "バッテリーの変化を、記録に。",
    description:
      "MochiLogはiPhone・iPadの解析ログから容量や充電サイクルを記録するアプリ。履歴をグラフで振り返り、iCloudやApple Watchでも確認できます。",
    eyebrow: "iPhone・iPadのバッテリー記録アプリ",
    hero: ["今日のバッテリー。", "その先の変化も。"],
    intro:
      "容量も、充電サイクルも、日々のログから。\nMochiLogで記録を重ねて、あなたのデバイスをもっと知ろう。",
    download: "App Storeから入手",
    guideLink: "使い方を見る",
    free: "無料・アプリ内課金あり",
    platforms: "iPhone / iPad / Apple Watch",
    sample: "表示イメージ・サンプルデータ",
    preview: "バッテリー記録のプレビュー",
    history: "バッテリーの推移",
    health: "容量の目安",
    cycles: "充電サイクル",
    capacity: "ログ上の容量",
    months: ["6か月", "1年"],
    record: "記録を積み重ねて、変化を見つける。",
    facts: [
      ["記録する", "容量・サイクル・ログの日付"],
      ["振り返る", "履歴をグラフで比較"],
      ["持ち歩く", "iPhone・iPad・Watchで確認"],
    ],
    featureKicker: "YOUR BATTERY, OVER TIME",
    featureTitle: ["ひとつの数値より、", "変化が見える記録を。"],
    featureIntro:
      "読み込んだ解析ログから必要な情報を整理。デバイスごとの状態を、自分のペースで振り返れます。",
    features: [
      {
        icon: "chart",
        title: "点だった記録が、つながる。",
        text: "容量や充電サイクルの推移をグラフで表示。複数のデバイスの記録を分けて管理できます。",
      },
      {
        icon: "import",
        title: "共有して、そのままアプリへ。",
        text: "解析データの共有メニューからMochiLogを開いて取り込み。保存したファイルの読み込みにも対応します。",
      },
      {
        icon: "cloud",
        title: "いつものデバイスで、続きを。",
        text: "iCloud同期を有効にすると、同じApple AccountのiPhone・iPadで記録を共有できます。",
      },
      {
        icon: "watch",
        title: "手首で、さっと確認。",
        text: "ペアリングしたApple Watchに記録を転送。iPhoneで読み込んだデバイスの状態を閲覧できます。Watch自体を常時測定する機能ではありません。",
      },
    ],
    privacyKicker: "PRIVATE BY DESIGN",
    privacyTitle: "解析は、あなたの端末で。",
    privacyText:
      "ログの解析は端末内で処理します。iCloud同期は自分で選択でき、同期する記録は自分のプライベートデータベースへ。開発者がバッテリー記録を収集する仕組みはありません。",
    privacyLink: "データの扱いについて",
    howKicker: "GETTING STARTED",
    howTitle: "最初の記録まで、3ステップ。",
    howIntro:
      "まずは最新の解析ログをひとつ。アプリ内のチュートリアルでも確認できます。",
    steps: [
      {
        title: "解析ログを見つける",
        text: "設定 → プライバシーとセキュリティ → 解析と改善 → 解析データへ。Analytics- で始まるファイルを探します。",
      },
      {
        title: "MochiLogで開く",
        text: "ログの共有ボタンからMochiLogを選択。見つからない場合は「ファイル」に保存して、アプリから読み込みます。",
      },
      {
        title: "記録を振り返る",
        text: "容量・サイクルなどを確認して保存。日付の異なるログが増えると、グラフで変化を追えます。",
      },
    ],
    nextKicker: "IN DEVELOPMENT",
    nextTitle: "次のアップデートに向けて。",
    nextText:
      "複数ログの取り込み改善、画面サイズに応じた表示、8言語と言語設定を開発中です。公開版への提供時期は未定です。",
    languages:
      "日本語 / English / 简体中文 / 繁體中文 / 한국어 / Español / Français / Deutsch",
    beta: "TestFlightを確認",
    betaNote: "ベータ版の内容・参加枠は配信状況によって異なります。",
    faqTitle: "気になること、先に確認。",
    faqs: [
      {
        q: "設定アプリの「最大容量」と違うのはなぜ？",
        a: "MochiLogはログの値と設計容量などを使って表示します。設定アプリとは計算方法や記録時点が異なるため、数値が一致しない場合があります。修理や交換の判断にはAppleの案内や公式診断をご確認ください。",
      },
      {
        q: "解析ログが見つかりません。",
        a: "解析データの生成状況は端末の設定やOSによって異なります。共有設定を変更してもすぐには生成されないことがあります。時間をおいて再確認し、対応するログがあるかアプリ内のチュートリアルも参照してください。",
      },
      {
        q: "対応するOSとデバイスは？",
        a: "iOS・iPadOS 16以降、Apple WatchはwatchOS 9以降が対象です。iCloud同期はiOS・iPadOS 17以降で利用できます。一部機能はアプリやOSのバージョンによって異なります。読み取れる情報は機種やログ形式により異なります。最新の条件はApp Storeで確認できます。",
      },
      {
        q: "アプリを入れるだけで自動測定できますか？",
        a: "いいえ。MochiLogはユーザーが読み込んだ解析ログを使います。常時バッテリーを測定したり、他のアプリから解析ログを自動収集したりするものではありません。",
      },
      {
        q: "複数ファイルの読み込みについて知りたい。",
        a: "公開版にはOSに起因する既知の制限があり、複数ファイルの取り込みを改善中です。うまく読み込めない場合は、ファイルをひとつずつ取り込んでください。",
      },
    ],
    finalTitle: "今日のログを、未来の手がかりに。",
    finalText: "毎日のデバイスに、もうひとつの見方を。",
    disclaimer:
      "表示する数値はログに基づく参考情報です。Appleの公式診断やハードウェア保証を代替しません。",
  },
  en: {
    nav: ["Features", "Guide", "Support"],
    skip: "Skip to content",
    menu: "Menu",
    title: "A clearer picture of your battery, over time.",
    description:
      "MochiLog turns iPhone and iPad analytics logs into battery records. Explore capacity and cycle trends, sync with iCloud, and view records on Apple Watch.",
    eyebrow: "BATTERY RECORDS FOR IPHONE & IPAD",
    hero: ["Your battery today.", "Its story over time."],
    intro:
      "Capacity, charge cycles, and the changes in between.\nTurn everyday logs into a better understanding of your devices.",
    download: "Download on the App Store",
    guideLink: "See how it works",
    free: "Free · In-app purchases",
    platforms: "iPhone / iPad / Apple Watch",
    sample: "Illustrative preview · Sample data",
    preview: "Battery records preview",
    history: "Battery history",
    health: "Estimated capacity",
    cycles: "Charge cycles",
    capacity: "Logged capacity",
    months: ["6 months", "1 year"],
    record: "Build a history. Discover the changes.",
    facts: [
      ["Record", "Capacity, cycles, and log dates"],
      ["Explore", "Compare your history in charts"],
      ["Take it with you", "On iPhone, iPad, and Watch"],
    ],
    featureKicker: "YOUR BATTERY, OVER TIME",
    featureTitle: ["More than a number.", "A history you can see."],
    featureIntro:
      "Make sense of the details in your analytics logs. Keep each device’s records together and explore them at your own pace.",
    features: [
      {
        icon: "chart",
        title: "Connect the dots.",
        text: "See capacity and charge cycles change over time. Keep separate records for each of your devices.",
      },
      {
        icon: "import",
        title: "Share a log. Open MochiLog.",
        text: "Open MochiLog from the analytics log’s share menu to import it. You can also import a saved file from the app.",
      },
      {
        icon: "cloud",
        title: "Pick up where you left off.",
        text: "Enable iCloud sync to share records between your iPhone and iPad using the same Apple Account.",
      },
      {
        icon: "watch",
        title: "A quick look, on your wrist.",
        text: "Send records to your paired Apple Watch and view the devices imported on your iPhone. This does not continuously measure the Watch’s own battery.",
      },
    ],
    privacyKicker: "PRIVATE BY DESIGN",
    privacyTitle: "Your logs. Your device.",
    privacyText:
      "Log analysis happens on your device. Choose whether to sync records with your private iCloud database. The developer does not collect your battery records.",
    privacyLink: "How your data is handled",
    howKicker: "GETTING STARTED",
    howTitle: "Your first record, in 3 steps.",
    howIntro:
      "Start with one recent analytics log. An in-app tutorial helps you along the way.",
    steps: [
      {
        title: "Find an analytics log",
        text: "Go to Settings → Privacy & Security → Analytics & Improvements → Analytics Data. Look for a file starting with Analytics-.",
      },
      {
        title: "Open it in MochiLog",
        text: "Use the log’s share button and choose MochiLog. If it isn’t listed, save the log to Files, then import it from the app.",
      },
      {
        title: "Explore your records",
        text: "Review and save capacity, cycles, and other available values. Add logs from different dates to see trends in the charts.",
      },
    ],
    nextKicker: "IN DEVELOPMENT",
    nextTitle: "More ways to make it yours.",
    nextText:
      "We’re improving multi-log imports, layouts across screen sizes, and support for eight languages with an in-app language setting. A public release date has not been announced.",
    languages:
      "日本語 / English / 简体中文 / 繁體中文 / 한국어 / Español / Français / Deutsch",
    beta: "Check TestFlight",
    betaNote:
      "Beta features and available places depend on the current distribution.",
    faqTitle: "A few things worth knowing.",
    faqs: [
      {
        q: "Why is the capacity different from Settings?",
        a: "MochiLog displays values from logs and calculations using reference capacities. Calculation methods and recording dates can differ from Settings. For repair or replacement decisions, refer to Apple’s guidance and official diagnostics.",
      },
      {
        q: "Why can’t I find an analytics log?",
        a: "Log availability depends on your settings and OS. Changing analytics sharing settings may not generate a log immediately. Check again later and refer to the in-app tutorial for supported logs.",
      },
      {
        q: "Which devices and OS versions are supported?",
        a: "iOS and iPadOS 16 or later, with watchOS 9 or later for Apple Watch. iCloud sync requires iOS or iPadOS 17 or later. Some features vary with the app and OS version. Available data varies by device and log format. See the App Store for current requirements.",
      },
      {
        q: "Does MochiLog measure my battery automatically?",
        a: "No. MochiLog uses analytics logs you import. It does not continuously measure the battery or automatically collect analytics logs from other apps.",
      },
      {
        q: "Can I import multiple files?",
        a: "The public release has known OS-related limitations, and multi-file imports are being improved. If an import does not work, import your files one at a time.",
      },
    ],
    finalTitle: "A log today. A little more insight tomorrow.",
    finalText: "Get to know the devices you use every day.",
    disclaimer:
      "Values are reference information derived from logs. They do not replace official Apple diagnostics or hardware warranties.",
  },
} satisfies Record<Locale, unknown>;
