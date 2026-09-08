import { useLocaleContext } from "../i18n";
export function SupportPage() {
  const { locale, t } = useLocaleContext();
  const ja = locale === "ja";
  return (
    <article>
      <p className="eyebrow">SUPPORT</p>
      <h1>
        {ja ? "困ったときは、ここから。" : "A little help, when you need it."}
      </h1>
      <p className="guide-lead">
        {ja
          ? "ログの取り込みや表示で困ったとき、改善のアイデアがあるときは、お気軽にご連絡ください。"
          : "Need help importing a log, understanding a result, or sharing an idea? Get in touch."}
      </p>
      <div className="support-options">
        <article>
          <h2>{ja ? "まずは使い方を確認" : "Start with the guide"}</h2>
          <p>
            {ja
              ? "解析ログの探し方と、表示される数値の読み方をまとめています。"
              : "Find an analytics log and learn how to read the values MochiLog displays."}
          </p>
          <a href={`/guide?lang=${locale}`}>
            {ja ? "ガイドを見る" : "Read the guide"} →
          </a>
        </article>
        <article>
          <h2>{ja ? "メールで問い合わせる" : "Contact by email"}</h2>
          <p>{t.common.contactEmail}</p>
          <a
            href={`mailto:${t.common.contactEmail}?subject=MochiLog%20support`}
          >
            {ja ? "メールを作成" : "Compose an email"} ↗
          </a>
        </article>
      </div>
      <h2>
        {ja
          ? "不具合の報告に添えてほしいこと"
          : "What to include in a bug report"}
      </h2>
      <ul>
        {(ja
          ? [
              "機種名とOSバージョン",
              "MochiLogのバージョン",
              "問題が起きるまでの操作と、表示されたエラー",
              "必要に応じて、個人情報を隠した画面の画像",
            ]
          : [
              "Device model and OS version",
              "MochiLog version",
              "Steps to reproduce the issue and any error message",
              "A screenshot with personal information hidden, if useful",
            ]
        ).map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <p className="contact-note">
        {ja
          ? "最初からログ全体を添付する必要はありません。まずは症状を教えてください。"
          : "You do not need to attach an entire log initially. Start by describing the problem."}
      </p>
    </article>
  );
}
