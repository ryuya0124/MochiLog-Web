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
      badge: 'iOS 17+ 対応',
      title: 'バッテリー履歴を\nグラフで可視化',
      subtitle: '設定アプリでは見えない詳細データで、\n劣化の推移を記録・分析',
      ctaTestFlight: 'TestFlightで試す',
      ctaAppStore: 'App Store',
      featuresTitle: '主な機能',
      features: [
        { title: 'ログ解析', description: 'iPhoneのシステムログを解析し、バッテリーの詳細情報をローカルで確認できます。', icon: '📊' },
        { title: '履歴管理 & 分析', description: 'バッテリーの状態を記録し、劣化推移をグラフで可視化。将来の予測も可能です。', icon: '📈' },
        { title: 'iCloud 同期', description: '複数のデバイス間でデータを自動同期。iPhoneとiPadのログを1箇所でまとめて管理できます。', icon: '☁️' },

        { title: '共有シート対応', description: 'ログファイルを共有シートから直接 MochiLog に送って解析できます。', icon: '📤' },
        { title: 'リッチな体験', description: '直感的なチュートリアルと洗練されたUIで、高度な解析を誰でも簡単に。', icon: '✨' }
      ],
      disclaimerTitle: '⚠️ 免責事項',
      disclaimer: '表示されるデータはシステムログに基づいた推計値であり、Appleの公式な診断結果やハードウェア保証を代替するものではありません。',
      seoContent: {
        about: {
          title: 'iPhone・iPadのバッテリー解析データとは？',
          description: 'iOSの設定アプリで見られる「バッテリーの状態」は、簡易的な目安に過ぎません。MochiLogは、端末内部に記録されている「Analytics Data（解析データ）」を読み解くことで、より詳細で正確なバッテリーの健康状態を明らかにします。',
          metrics: [
            { term: '充放電回数', desc: 'バッテリーが0%から100%まで充電された累積回数。Apple公式の寿命目安（iPhoneなら500回、iPadなら1000回）と比較できます。' },
            { term: '実測容量 (mAh)', desc: '設計上の理論値ではなく、現在のバッテリーが実際に蓄えられる電力量。劣化の進行具合をリアルな数値で把握できます。' },
            { term: 'グラフで可視化', desc: '容量やサイクルの推移を美しいグラフで表示。劣化のスピードや傾向を一目で把握できます。' },
            { term: '詳細な診断データ', desc: '平均温度、電圧の推移、デフレータ（補正値）など、通常は見られない専門的なパラメータも確認可能です。' }
          ]
        },
        howto: {
          title: 'バッテリー解析の実測 mAh の調べ方',
          steps: [
            '「設定」アプリを開き、「プライバシーとセキュリティ」＞「解析と改善」に進みます。',
            '「解析データ」をタップし、一覧から `Analytics-xxxx-xx-xx` で始まる最新の日付のファイルを探します。',
            '右上の共有ボタンをタップし、MochiLogアイコンを選択またはファイルとして保存します。',
            'MochiLogが自動的にログを解析します。（※アプリ内には、より分かりやすい図解付きのチュートリアルも搭載されています）'
          ]
        },
        faq: {
          title: 'よくある質問',
          items: [
            { q: '設定アプリの数値（最大容量）と違います。', a: 'Appleの公式修理や保証においては、設定アプリの「最大容量」が唯一の「正解（基準）」となります。MochiLogの解析結果は、より詳細な実態を知るための参考情報としてご活用ください。' },
            { q: '複数の端末のデータをまとめられますか？', a: 'はい、MochiLogはiCloud同期に対応しています。iPhoneとiPadなど、異なるデバイスで取得した解析ログを1つのアカウント（Apple ID）でまとめて管理・閲覧できます。' },
            { q: 'iPadに対応していますか？', a: 'はい、iPadOSのバッテリーログ解析にも完全対応しています。M4 iPad Proなどを含む全モデルでご利用いただけます。' }
          ]
        }
      }
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
    guide: {
      title: 'バッテリー解析 完全ガイド',
      subtitle: 'iPhone・iPadのバッテリーの仕組みと、\n解析データの正しい見方を解説します。',
      sections: [
        {
          id: 'about',
          title: 'iPhoneの「解析データ」とは？',
          intro: 'iPhoneやiPadは、デバイスの動作状況を日々記録しています。この記録の中に「Analytics Data（解析データ）」と呼ばれるログファイルが含まれており、ここには設定アプリでは表示されない「生のバッテリー数値」が詳細に記録されています。',
          subsections: [
            {
              title: 'どんなデータが含まれている？',
              content: '「Analytics-xxxx」というファイルには、バッテリーの充放電履歴、電圧変動、温度履歴など、ハードウェアの詳細な動作ログが記録されています。MochiLogはこの中から必要な数値だけを抽出して表示します。'
            },
            {
              title: 'プライバシーは安全？',
              content: 'このデータは端末の診断用であり、個人情報（写真や連絡先など）は一切含まれません。また、MochiLogはすべての解析をオフラインで行うため、安心です。'
            }
          ]
        },
        {
          id: 'capacity',
          title: '「実測容量」と「最大容量」の違い',
          intro: '設定アプリの「最大容量」と、MochiLogで見る「実測容量」は、実はまったく別の数字を見ていることが多いです。',
          subsections: [
            {
              title: '設定アプリの「最大容量」の正体',
              content: 'これは新品時の設計容量を100%とした場合の「比率」です。しかし、この数値は変動しにくく計算されており、数ヶ月変わらないこともあれば、アップデート後に急に減ることもあります。あくまで目安として設計されています。'
            },
            {
              title: '解析データの「実測容量 (mAh)」',
              content: '対して解析データにある「Nominal Charge Capacity」は、バッテリーが現在実際に蓄えられる電力量（mAh）を示しています。こちらは物理的な劣化状況をリアルに反映するため、より正確な健康状態を知ることができます。'
            }
          ]
        },
        {
          id: 'cycle',
          title: '「充放電回数 (サイクル数)」とは？',
          intro: 'バッテリーの寿命を測る上で、最も信頼できる指標が「サイクル数」です。',
          subsections: [
            {
              title: '1サイクルの定義',
              content: 'バッテリー容量の100%相当を使い切ると1サイクルとカウントされます。たとえば、今日50%使い、明日50%使った場合、合わせて1サイクルとなります。一気に0%にする必要はありません。'
            },
            {
              title: '交換の目安は？',
              content: 'Apple公式では「500回（iPhone 14以前） または 1000回（iPhone 15以降）」のサイクル数で、本来の容量の80%を維持するように設計されています。この回数に近づくと、バッテリーの持ちが悪くなったと感じるようになります。'
            }
          ]
        }
      ]
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
      badge: 'iOS 17+ Ready',
      title: 'Visualize Battery\nHistory & Trends',
      subtitle: 'Track capacity and cycle counts\nwith detailed log analysis',
      ctaAppStore: 'App Store',
      ctaTestFlight: 'Try on TestFlight',
      comingSoon: 'Coming Soon',
      featuresTitle: 'Key Features',
      features: [
        { title: 'Log Analysis', description: 'Parse iPhone system logs and view detailed battery information locally.', icon: '📊' },
        { title: 'History & Analysis', description: 'Record battery health over time and visualize degradation with graphs.', icon: '📈' },
        { title: 'iCloud Sync', description: 'Automatically sync data across devices. Manage logs from both iPhone and iPad in one place.', icon: '☁️' },

        { title: 'Share Sheet Support', description: 'Send log files directly to MochiLog from the share sheet for analysis.', icon: '📤' },
        { title: 'Polished Experience', description: 'Intuitive tutorials and a refined UI make advanced analysis accessible.', icon: '✨' }
      ],
      disclaimerTitle: '⚠️ Disclaimer',
      disclaimer: 'Displayed data are estimates based on system logs and do not replace official Apple diagnostics or hardware warranties.',
      seoContent: {
        about: {
          title: 'What is Analytics Data?',
          description: 'The "Battery Health" in iOS Settings is just a rough estimate. MochiLog analyzes the internal "Analytics Data" to reveal the true health of your battery.',
          metrics: [
            { term: 'Cycle Count', desc: 'The total number of times your battery has been charged from 0% to 100%.' },
            { term: 'Real Capacity (mAh)', desc: 'The actual amount of power your battery can hold right now, not just the theoretical design capacity.' },
            { term: 'Graph Visualization', desc: 'Visualize capacity and cycle trends with beautiful graphs. Understand degradation speed at a glance.' },
            { term: 'Detailed Diagnostics', desc: 'Check professional parameters like average temperature, voltage trends, and deflator values.' }
          ]
        },
        howto: {
          title: 'How to check Real Battery Capacity',
          steps: [
            'Open "Settings" > "Privacy & Security" > "Analytics & Improvements".',
            'Tap "Analytics Data" and find the latest file starting with `Analytics-xxxx-xx-xx`.',
            'Tap the share button and select MochiLog.',
            'MochiLog automatically parses the log. (The app also includes an illustrated tutorial)'
          ]
        },
        faq: {
          title: 'FAQ',
          items: [
            { q: 'Different from Settings App (Max Capacity)?', a: 'For official Apple repairs and warranties, the "Maximum Capacity" in Settings is the only standard. MochiLog\'s analysis is for detailed personal reference only.' },
            { q: 'Can I combine data from multiple devices?', a: 'Yes, MochiLog supports iCloud Sync. You can manage and view analysis logs from different devices (like iPhone and iPad) under one Apple ID.' },
            { q: 'Does it support iPad?', a: 'Yes, full support for iPadOS battery log analysis, including the latest iPad Pro (M4).' },
            { q: 'Is my privacy safe?', a: 'MochiLog processes everything offline on your device. No data is ever sent to external servers.' }
          ]
        }
      }
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
    guide: {
      title: 'Battery Analytics Guide',
      subtitle: 'Understand how iPhone batteries work\nand how to read the analytics data correctly.',
      sections: [
        {
          id: 'about',
          title: 'What is "Analytics Data"?',
          intro: 'iPhones and iPads record daily device performance in system logs. Among these is "Analytics Data," which contains detailed "raw battery metrics" not shown in the Settings app.',
          subsections: [
            {
              title: 'What\'s inside the logs?',
              content: 'Files named "Analytics-xxxx" contain detailed hardware logs including charge/discharge history, voltage changes, and temperature history. MochiLog extracts only the necessary battery metrics for you.'
            },
            {
              title: 'Is it safe?',
              content: 'This data is for device diagnostics only and contains absolutely no personal information like photos or contacts. Furthermore, MochiLog processes everything offline on your device.'
            }
          ]
        },
        {
          id: 'capacity',
          title: 'Real Capacity vs Maximum Capacity',
          intro: 'The "Maximum Capacity" shown in Settings and the "Real Capacity" seen in MochiLog are often completely different numbers.',
          subsections: [
            {
              title: 'The truth about Settings "Maximum Capacity"',
              content: 'This is a calculated ratio based on the design capacity when new (100%). It is designed to be stable, so it might not change for months, or might drop suddenly after an update. It is just a rough estimate.'
            },
            {
              title: 'Real Capacity (mAh) in Analytics',
              content: 'The "Nominal Charge Capacity" in the logs shows the actual remaining power capacity (mAh). This reflects physical degradation more realistically, giving you a more accurate picture of battery health.'
            }
          ]
        },
        {
          id: 'cycle',
          title: 'What is "Cycle Count"?',
          intro: 'Cycle count is the most reliable metric for measuring battery lifespan.',
          subsections: [
            {
              title: 'Definition of 1 Cycle',
              content: 'Using 100% of your battery\'s capacity equals one charge cycle. For example, if you use 50% today and 50% tomorrow, that counts as one cycle. You don\'t need to drain it to 0% at once.'
            },
            {
              title: 'When to replace?',
              content: 'Apple states that batteries are designed to retain 80% of their original capacity after 500 cycles (or 1000 cycles for iPhone 15 and later). Approaching this count often correlates with noticeable battery drain.'
            }
          ]
        }
      ]
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
