import React from "react";

export type Locale = "ja" | "en";

export const translations = {
  ja: {
    common: {
      homeLink: "トップページに戻る",
      appName: "MochiLog",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      support: "サポート",
      contactUs: "お問い合わせ",
      contactEmail: "support@mochilog.ryuya-dev.net",
    },
    privacy: {
          "title": "MochiLog プライバシーポリシー",
          "content": "MochiLogとMochiLog Macでのデータの扱いを説明します。",
          "sections": {
                "s1": "MochiLogは、利用者が読み込んだiPhone・iPad・Apple Watchの解析ログを端末内で処理し、バッテリー記録、機種、日付、容量、製品リージョン、端末を区別する識別子などを保存します。元の解析ログには、これら以外の端末情報や利用状況が含まれる場合があります。設定と記録は原則として利用者の端末内に保存します。開発者へ解析ログや記録が自動送信されることはありません。",
                "s2": "iCloud同期を有効にすると、記録は利用者のiCloudプライベートデータベースを通じて同じApple Accountの端末間で同期されます。Apple Watchアプリには記録が転送されます。エクスポート、ファイル共有、インポートは利用者が選択した内容で実行されます。iOS/iPadOS 27・macOS 27向けMac連携ベータ版では、ペアリングしたMacがロック解除中の端末から解析ログを収集・一時保存し、同じローカルネットワーク上のMochiLogへ暗号化して送ります。Macと端末はペアリング情報、転送結果、診断情報を交換します。Mac連携で開発者のサーバーへログは送信しません。Macアプリの更新確認ではGitHubに接続し、接続先にIPアドレスなどの通信情報が伝わる場合があります。",
                "s3": "問い合わせメールを送信した場合、開発者は入力されたニックネーム、メールアドレス、本文、添付ファイルを受け取ります。Mac連携専用サポートでは、利用者が送信操作をしたときに端末・MacのOS/アプリ版、機種、転送状態、個体識別子、エラーや直近の診断イベントを添付します。診断イベントにはファイル名やパスなどが含まれる場合があります。送信前に内容を確認してください。メールの送受信には利用者と開発者のメール事業者が関わります。問い合わせ情報は対応と必要な記録のために保持し、削除依頼には法令上必要な保存を除き対応します。",
                "s4": "端末内の記録はアプリの削除機能で削除できます。iCloud同期をオフにしても、すでにiCloudや別の端末に保存された記録は自動削除されません。Mac側の転送待ちログやペアリング情報はMacのApplication Supportに保存され、アプリ本体を削除するだけでは消えない場合があります。Macのデータを削除したい場合はサポートへお問い合わせください。端末の再インストール、OSのバックアップ、iCloudの設定により残るデータや復元できるデータは異なります。",
                "s5": "MochiLogは広告、追跡用SDK、第三者向けの利用状況解析SDKを使用しません。App Store版の任意の寄付にはAppleのStoreKitを使用します。Webサイトの配信にはCloudflareを使用し、サイトへのアクセス時にIPアドレスなどの通信情報がサービス提供者に処理される場合があります。本ポリシーを変更した場合はWebサイトとアプリ内の文書を更新し、更新日を示します。",
                "s6": "本ポリシーに関するお問い合わせ、サポートメールの削除依頼は support@mochilog.ryuya-dev.net へご連絡ください。"
          },
          "date": "改定日：2026年9月26日"
    },
    terms: {
          "title": "MochiLog 利用規約",
          "intro": "MochiLogとMochiLog Macの利用条件です。",
          "articles": [
                {
                      "id": 1,
                      "title": "対象と診断結果",
                      "paragraphs": [
                            "本規約はMochiLogおよびMac連携用のMochiLog Macに適用されます。バッテリーの数値・診断結果は解析ログと機種別の参考値に基づく推計であり、正確性や修理判断への適合性は保証しません。Appleの公式診断サービスではありません。開発者の責任は、適用法令で認められる範囲に限られます。"
                      ]
                },
                {
                      "id": 2,
                      "title": "Mac連携ベータ",
                      "paragraphs": [
                            "Mac連携はiOS/iPadOS 27とmacOS 27以降を対象とする開発中の機能です。初回ペアリング、同じローカルネットワーク、端末のロック解除などの条件が必要です。OSの変更、接続状態、ログの生成状況によって取得や転送が失敗することがあります。重要な記録は利用者自身でバックアップしてください。"
                      ]
                },
                {
                      "id": 3,
                      "title": "寄付と返金",
                      "paragraphs": [
                            "App Store版では、Appleのアプリ内課金による任意の寄付を提供する場合があります。AltStore PAL版とMacアプリではこの課金機能を提供しません。寄付は中核機能の利用条件ではありません。購入、キャンセル、返金はAppleの適用条件と法令に従います。返金を希望する場合はAppleの購入履歴から申請してください。"
                      ]
                },
                {
                      "id": 4,
                      "title": "ライセンスと禁止事項",
                      "paragraphs": [
                            "MochiLogのソースコードと同梱の第三者コンポーネントには、それぞれのオープンソースライセンスが適用されます。本規約はそれらのライセンスで認められた複製、改変、解析、再配布の権利を制限しません。利用者は、法令に違反する行為やサービス・他者の端末の正常な利用を妨げる行為をしてはなりません。"
                      ]
                },
                {
                      "id": 5,
                      "title": "規約の変更",
                      "paragraphs": [
                            "機能や法令の変更に応じて本規約を改定する場合があります。変更後の内容と改定日はWebサイトおよびアプリ内に表示します。"
                      ]
                },
                {
                      "id": 6,
                      "title": "準拠法と連絡先",
                      "paragraphs": [
                            "本規約には日本法を適用します。ただし、居住地の強行法規による消費者の権利は妨げません。お問い合わせは support@mochilog.ryuya-dev.net へお願いします。",
                            "改定日：2026年9月26日"
                      ]
                }
          ]
    },
  },
  en: {
    common: {
      homeLink: "Back to Home",
      appName: "MochiLog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      contactUs: "Contact Us",
      contactEmail: "support@mochilog.ryuya-dev.net",
    },
    privacy: {
          "title": "MochiLog Privacy Policy",
          "content": "This policy explains how MochiLog and MochiLog Mac handle data.",
          "sections": {
                "s1": "MochiLog processes iPhone, iPad, and Apple Watch analytics logs selected by the user on the device. It stores battery records, model, date, capacity, product region, and identifiers used to distinguish physical devices. Original analytics logs may contain other device and usage information. Settings and records are generally stored on the user’s device. Analytics logs and records are not automatically sent to the developer.",
                "s2": "If iCloud sync is enabled, records are synchronized through the user’s private iCloud database between devices using the same Apple Account. Records may be sent to the paired Apple Watch app. Exports, file sharing, and imports use data selected by the user. In the Mac transfer beta for iOS/iPadOS 27 and macOS 27, a paired Mac collects and temporarily stores analytics logs while the mobile device is unlocked, then sends them in encrypted form to MochiLog on the same local network. The Mac and mobile device exchange pairing data, transfer status, and diagnostics. Mac transfer does not send logs to a developer server. The Mac app contacts GitHub to check for updates; GitHub may receive network information such as the IP address.",
                "s3": "If the user sends a support email, the developer receives the nickname, email address, message, and attachments supplied. Mac transfer support attaches OS and app versions, model, transfer status, device identifiers, errors, and recent diagnostic events from the mobile device and Mac when the user sends the email. Events may include filenames or file paths. Review the email before sending it. The user’s and developer’s email providers process the message. Support information is retained as needed to handle the request and keep necessary records; deletion requests are honored except where retention is required by law.",
                "s4": "Records on the mobile device can be deleted with the app’s deletion controls. Turning off iCloud sync does not automatically delete records already stored in iCloud or on another device. Pending logs and pairing information on the Mac are stored in Application Support and may remain after deleting only the app. Contact support for help deleting Mac data. Reinstallation, OS backups, and iCloud settings affect what remains or can be restored.",
                "s5": "MochiLog does not use advertising, tracking SDKs, or third-party usage analytics SDKs. Optional tips in the App Store version use Apple StoreKit. Cloudflare serves the website and may process network information such as IP addresses when the site is visited. If this policy changes, the website and in-app documents will be updated with the revision date.",
                "s6": "For policy questions or requests to delete support emails, contact support@mochilog.ryuya-dev.net."
          },
          "date": "Revised: 2026-09-26"
    },
    terms: {
          "title": "MochiLog Terms of Use",
          "intro": "These terms govern use of MochiLog and MochiLog Mac.",
          "articles": [
                {
                      "id": 1,
                      "title": "Scope and results",
                      "paragraphs": [
                            "These terms apply to MochiLog and its Mac companion, MochiLog Mac. Battery figures and diagnostic results are estimates based on analytics logs and model reference values. Their accuracy or suitability for repair decisions is not guaranteed. The apps are not official Apple diagnostic services. The developer’s liability is limited only to the extent permitted by applicable law."
                      ]
                },
                {
                      "id": 2,
                      "title": "Mac transfer beta",
                      "paragraphs": [
                            "Mac transfer is an in-development feature for iOS/iPadOS 27 and macOS 27 or later. It requires conditions such as initial pairing, a shared local network, and an unlocked mobile device. Collection or transfer may fail because of OS changes, connectivity, or whether logs exist. Keep your own backup of important records."
                      ]
                },
                {
                      "id": 3,
                      "title": "Tips and refunds",
                      "paragraphs": [
                            "The App Store version may offer optional tips through Apple In-App Purchase. This payment feature is not offered in the AltStore PAL version or Mac app. Tips are not required for core features. Purchases, cancellations, and refunds are governed by Apple’s applicable terms and law. Request a refund through your Apple purchase history."
                      ]
                },
                {
                      "id": 4,
                      "title": "Licenses and prohibited conduct",
                      "paragraphs": [
                            "MochiLog source code and bundled third-party components are governed by their respective open-source licenses. These terms do not limit rights to copy, modify, inspect, or redistribute granted by those licenses. Do not violate the law or interfere with services or another person’s device."
                      ]
                },
                {
                      "id": 5,
                      "title": "Changes",
                      "paragraphs": [
                            "These terms may be revised to reflect changes in features or law. The revised terms and date will appear on the website and in the app."
                      ]
                },
                {
                      "id": 6,
                      "title": "Law and contact",
                      "paragraphs": [
                            "Japanese law governs these terms, without limiting mandatory consumer rights in your place of residence. Contact support@mochilog.ryuya-dev.net with questions.",
                            "Revised: 2026-09-26"
                      ]
                }
          ]
    },
  },
};

export const LocaleContext = React.createContext<{
  locale: Locale;
  t: (typeof translations)[Locale];
}>({ locale: "ja", t: translations.ja });

export function useLocaleContext() {
  return React.useContext(LocaleContext);
}
