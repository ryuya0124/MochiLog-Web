import React from 'react'

export type Locale = 'ja' | 'en'

export const translations: Record<Locale, any> = {
  ja: {
    common: {
      homeLink: 'トップページに戻る',
      appName: 'MochiLog',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      support: 'サポート',
      contactUs: 'お問い合わせ',
      contactEmail: 'support@ryuya-dev.net'
    },
    landing: {
      badge: 'iOS / iPadOS App',
      title: 'MochiLog',
      subtitle: 'iPhone・iPadのバッテリー寿命を、\nもっと深く、もっと正確に。',
      ctaAppStore: 'App Store でチェック',
      ctaTestFlight: 'TestFlight で試す',
      comingSoon: 'Coming Soon',
      features: [
        { title: 'ログ解析', description: 'iPhoneのシステムログを解析し、バッテリーの詳細情報をローカルで確認できます。', icon: '📊' },
        { title: '履歴管理 & 分析', description: 'バッテリーの状態を記録し、劣化推移をグラフで可視化。将来の予測も可能です。', icon: '📈' },
        { title: 'iCloud 同期', description: '複数のデバイス間でデータを安全に同期。機種変更時も安心です。', icon: '☁️' },
        { title: 'ショートカット連携', description: '既存のショートカットからの移植もスムーズ。自動化をさらに便利に。', icon: '⚡' },
        { title: '共有シート対応', description: 'ログファイルを共有シートから直接 MochiLog に送って解析できます。', icon: '📤' },
        { title: 'リッチな体験', description: '直感的なチュートリアルと洗練されたUIで、高度な解析を誰でも簡単に。', icon: '✨' }
      ],
      disclaimerTitle: '⚠️ 免責事項',
      disclaimer: '表示されるデータはシステムログに基づいた推計値であり、Appleの公式な診断結果やハードウェア保証を代替するものではありません。'
    },
    privacy: {
      title: 'プライバシーポリシー',
      content: `MochiLog（以下、「本アプリ」といいます。）は、本アプリが提供するサービスにおけるユーザーの情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。`,
      sections: {
        s1: '本アプリは、ユーザーの個人情報を一切収集しません。 本アプリは完全にオフラインで動作し、すべての解析データや設定はユーザー自身のデバイス内にのみ保存されます。外部のサーバーへデータを送信することはありません。',
        s2: '本アプリで読み込まれたログデータや解析結果は、本アプリ内での表示および管理の目的にのみ使用されます。',
        s3: '本アプリは、ユーザーの個人情報やデータを保有しないため、第三者に提供することは一切ありません。',
        s4: '本アプリでは、ユーザーの追跡、広告の配信、または利用状況の解析を目的とした外部ツール（Google AdMob、Firebase Crashlyticsなど）は一切使用しておりません。',
        s5: '本ポリシーの内容は、法令の改正やアプリの仕様変更に伴い、ユーザーに通知することなく変更することができるものとします。変更後のプライバシーポリシーは、本ページに掲載したときから効力を生じるものとします。',
        s6: '本ポリシーに関するお問い合わせは、support@ryuya-dev.net までメールにてお願いいたします。'
      },
      date: '制定日：2025年12月24日 © 2025 MochiLog'
    },
    terms: {
      title: '利用規約',
      intro: 'この利用規約（以下、「本規約」といいます。）は、MochiLog（以下、「本アプリ」といいます。）の利用条件を定めるものです。ユーザーは、本アプリを利用することによって、本規約に同意したものとみなされます。',
      articles: [
        {
          id: 1,
          title: '第1条（免責事項）',
          paragraphs: [
            '本アプリが提供するバッテリー解析データおよび診断結果は、デバイス内のログに基づく推計値であり、その正確性、完全性、確実性を保証するものではありません。',
            '開発者は、本アプリの利用によりユーザーまたは第三者に生じた損害（デバイスの不具合、データの消失、バッテリー交換に伴うトラブル等を含みますがこれらに限られません）について、一切の責任を負わないものとします。',
            '本アプリは、Apple Inc.の公式診断ツールではありません。'
          ]
        },
        {
          id: 2,
          title: '第2条（利用許諾）',
          paragraphs: [
            '開発者はユーザーに対し、本アプリを個人的かつ非営利の目的で利用する、非独占的かつ譲渡不能な権利を許諾します。'
          ]
        },
        {
          id: 3,
          title: '第3条（寄付機能について）',
          paragraphs: [
            '本アプリには、アプリ内課金を通じた開発者への寄付（チップ）機能が含まれています。',
            '寄付はユーザーの任意によるものであり、本アプリの機能制限の解除や追加機能の提供を対価とするものではありません（ただし、アイコン変更等のささやかな特典が付与される場合があります）。',
            '一度支払われた寄付金については、理由の如何を問わず返金することはできません。'
          ]
        },
        {
          id: 4,
          title: '第4条（禁止事項）',
          paragraphs: ['ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。'],
          list: ['本アプリの逆コンパイル、逆アセンブル、リバースエンジニアリング。', '本アプリの再配布、販売、貸与。', '法令または公序良俗に違反する行為。']
        },
        {
          id: 5,
          title: '第5条（規約の変更）',
          paragraphs: ['開発者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の規約は、本アプリまたは配布ページ内に表示された時点から効力を生じるものとします。']
        },
        {
          id: 6,
          title: '第6条（準拠法・管轄）',
          paragraphs: ['本規約の解釈にあたっては、日本法を準拠法とします。', '2025年12月24日 制定']
        }
      ]
    }
  },
  en: {
    common: {
      homeLink: 'Back to Home',
      appName: 'MochiLog',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support',
      contactUs: 'Contact Us',
      contactEmail: 'support@ryuya-dev.net'
    },
    landing: {
      badge: 'iOS / iPadOS App',
      title: 'MochiLog',
      subtitle: 'Understand your iPhone and iPad battery life\nmore deeply and accurately.',
      ctaAppStore: 'View on App Store',
      ctaTestFlight: 'Try on TestFlight',
      comingSoon: 'Coming Soon',
      features: [
        { title: 'Log Analysis', description: 'Parse iPhone system logs and view detailed battery information locally.', icon: '📊' },
        { title: 'History & Analysis', description: 'Record battery health over time and visualize degradation with graphs.', icon: '📈' },
        { title: 'iCloud Sync', description: 'Securely sync data across devices for a smooth transition.', icon: '☁️' },
        { title: 'Shortcuts Integration', description: 'Easily migrate from existing Shortcuts to automate workflows.', icon: '⚡' },
        { title: 'Share Sheet Support', description: 'Send log files directly to MochiLog from the share sheet for analysis.', icon: '📤' },
        { title: 'Polished Experience', description: 'Intuitive tutorials and a refined UI make advanced analysis accessible.', icon: '✨' }
      ],
      disclaimerTitle: '⚠️ Disclaimer',
      disclaimer: 'Displayed data are estimates based on system logs and do not replace official Apple diagnostics or hardware warranties.'
    },
    privacy: {
      title: 'Privacy Policy',
      content: `MochiLog (hereinafter referred to as "the App") establishes this Privacy Policy (hereinafter referred to as "this Policy") regarding the handling of user information in the services provided by the App.`,
      sections: {
        s1: 'The App does not collect any personal information from users. The App operates entirely offline, and all analysis data and settings are stored solely on the user\'s device. No data is transmitted to external servers.',
        s2: 'Log data and analysis results imported into the App are used solely for the purpose of display and management within the App.',
        s3: 'As the App does not collect or possess user personal information or data, it does not provide any data to third parties.',
        s4: 'The App does not use any external tools (such as Google AdMob or Firebase Crashlytics) for the purpose of user tracking, advertisement delivery, or usage analysis.',
        s5: 'The contents of this Policy may be changed without notice to users due to amendments in laws or changes in the App\'s specifications. The revised Privacy Policy shall become effective from the time it is posted on this page.',
        s6: 'For inquiries regarding this Policy, please contact us at support@ryuya-dev.net.'
      },
      date: 'Established: December 24, 2025 © 2025 MochiLog'
    },
    terms: {
      title: 'Terms of Service',
      intro: 'These Terms of Use (hereinafter referred to as "Terms") set forth the conditions for the use of MochiLog (hereinafter referred to as "the App"). By using the App, you are deemed to have agreed to these Terms.',
      articles: [
        {
          id: 1,
          title: 'Article 1 (Disclaimer)',
          paragraphs: [
            'The battery analysis data and diagnostic results provided by the App are estimates based on logs stored on your device. The Developer does not guarantee the accuracy, completeness, or reliability of these results.',
            'The Developer shall not be liable for any damages arising from the use of the App (including, but not limited to, device malfunction, data loss, or issues related to battery replacement).',
            'The App is not an official diagnostic tool of Apple Inc.'
          ]
        },
        {
          id: 2,
          title: 'Article 2 (License)',
          paragraphs: [
            'The Developer grants you a non-exclusive, non-transferable right to use the App for personal and non-commercial purposes.'
          ]
        },
        {
          id: 3,
          title: 'Article 3 (Donations/Tips)',
          paragraphs: [
            'The App includes a feature to support the Developer through In-App Purchases (Donations/Tips).',
            'Donations are voluntary and do not constitute payment for unlocking core restrictions or providing additional functional features (except for minor cosmetic benefits such as icon changes).',
            'Once a donation has been made, it cannot be refunded for any reason.'
          ]
        },
        {
          id: 4,
          title: 'Article 4 (Prohibited Acts)',
          paragraphs: ['When using the App, you agree not to:'],
          list: ['Decompile, disassemble, or reverse engineer the App.', 'Redistribute, sell, or lend the App.', 'Engage in any acts that violate laws or public order and morals.']
        },
        {
          id: 5,
          title: 'Article 5 (Modification of Terms)',
          paragraphs: ['The Developer reserves the right to modify these Terms at any time without prior notice to users. The modified Terms shall become effective once displayed within the App or on the distribution page.']
        },
        {
          id: 6,
          title: 'Article 6 (Governing Law)',
          paragraphs: ['These Terms shall be governed by and construed in accordance with the laws of Japan.', "Established: December 24, 2025 \u00a9 2025 MochiLog"]
        }
      ]
    }
  }
}

export const LocaleContext = React.createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: typeof translations['ja']
}>({ locale: 'ja', setLocale: () => {}, t: translations.ja })

export function useLocaleContext() {
  return React.useContext(LocaleContext)
}

export function initialLocale(): Locale {
  if (typeof window === 'undefined') return 'ja'
  const stored = localStorage.getItem('locale') as Locale | null
  if (stored === 'ja' || stored === 'en') return stored
  const nav = navigator.language || navigator.languages[0] || 'ja'
  return nav.startsWith('en') ? 'en' : 'ja'
}
