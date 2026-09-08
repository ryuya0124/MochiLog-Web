import { useLocaleContext } from "../i18n";
import { copy, APP_STORE } from "../content";

export function GuidePage() {
  const { locale } = useLocaleContext();
  const t = copy[locale];
  const ja = locale === "ja";
  const sections = ja
    ? [
        [
          "容量は、ログに記録された値。",
          "mAhはバッテリーの電荷容量を表す単位です。MochiLogはログの容量値や設計容量との比率を表示します。ログは記録時点の推定値なので、温度や使用状況、OSの補正などで変動します。「設定」より正確な公式診断という意味ではありません。",
        ],
        [
          "1サイクルは、合計100%分の使用。",
          "たとえば50%使った日が2日あれば、合計で1サイクルに相当します。充電器につないだ回数ではありません。サイクル数だけで交換時期が決まるわけではなく、実際の持続時間やAppleの診断も合わせて確認してください。",
        ],
        [
          "同じデバイスの記録を重ねる。",
          "日付の異なるログを保存すると、単日の上下に振り回されず、長い期間の傾向を見やすくなります。ログの形式や含まれる項目によって、一部の数値を取得できない場合があります。",
        ],
        [
          "同期と共有は、自分で選ぶ。",
          "iCloud同期を有効にすると、自分のプライベートデータベースを使って記録を同期します。WatchにはペアリングしたiPhoneから転送します。サポートにログを送るときは、識別情報などが含まれていないか確認し、必要な範囲だけを共有してください。",
        ],
      ]
    : [
        [
          "Capacity is a value recorded in your log.",
          "mAh measures electric charge capacity. MochiLog shows logged capacity values and ratios to reference capacities. These estimates can fluctuate with temperature, usage, and OS corrections. They are not an official diagnosis that is more accurate than Settings.",
        ],
        [
          "One cycle means 100% of use, in total.",
          "Using 50% on each of two days amounts to one cycle. It is not the number of times you plug in a charger. Cycle count alone does not determine replacement timing; consider real battery life and Apple’s diagnostics too.",
        ],
        [
          "Build a history for the same device.",
          "Logs from different dates help you see longer-term trends rather than focus on daily fluctuations. Some values may be unavailable depending on the log format and the information it contains.",
        ],
        [
          "Choose how to sync and share.",
          "Enabling iCloud sync stores records in your private database. Your paired iPhone transfers records to Watch. Before sending a log to support, check for identifiers or other information and share only what is necessary.",
        ],
      ];
  return (
    <article>
      <p className="eyebrow">GETTING STARTED</p>
      <h1>
        {ja
          ? "ログから始める、\nバッテリーの記録。"
          : "Start with a log. Build a history."}
      </h1>
      <p className="guide-lead">{t.howIntro}</p>
      <ol className="steps">
        {t.steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-index">0{i + 1}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <aside className="guide-callout">
        <strong>
          {ja
            ? "ログがない・読み込めないときは"
            : "If a log is missing or won’t import"}
        </strong>
        <p>
          {ja
            ? "解析データが生成されるまで時間がかかる場合があります。複数ファイルで失敗する場合はひとつずつ試してください。iCloud同期にはiOS・iPadOS 17以降が必要です。"
            : "Analytics data may take time to appear. If multiple files fail to import, try one at a time. iCloud sync requires iOS or iPadOS 17 or later. Some features vary with the app and OS version."}
        </p>
      </aside>
      {sections.map(([title, text]) => (
        <section className="guide-article" key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
      <p>
        <a href="https://support.apple.com/101575">
          {ja
            ? "Apple：iPhoneのバッテリーとパフォーマンス"
            : "Apple: iPhone battery and performance"}{" "}
          ↗
        </a>
      </p>
      <a className="button primary" href={APP_STORE}>
        {t.download}
      </a>
    </article>
  );
}
