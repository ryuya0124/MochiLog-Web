import { useLocaleContext } from "../i18n";
import { APP_STORE, TESTFLIGHT, copy } from "../content";
import { Icon } from "../components/Icon";

function BatteryPreview() {
  const { locale } = useLocaleContext();
  const t = copy[locale];
  return (
    <figure className="preview" aria-label={t.preview}>
      <div className="preview-top">
        <span>
          <span className="status-dot" /> MochiLog
        </span>
        <span className="preview-device">iPhone 15 Pro</span>
      </div>
      <div className="preview-heading">
        <span>{t.history}</span>
        <span className="tiny-label">SAMPLE / 2026</span>
      </div>
      <fieldset className="period-picker">
        <legend className="sr-only">
          {locale === "ja" ? "サンプルの表示期間" : "Sample period"}
        </legend>
        <input type="radio" name="period" id="six-months" defaultChecked />
        <label htmlFor="six-months">{t.months[0]}</label>
        <input type="radio" name="period" id="one-year" />
        <label htmlFor="one-year">{t.months[1]}</label>
      </fieldset>
      <div className="preview-data">
        <div className="health-value">
          <span className="period-six">93</span>
          <span className="period-year">93</span>
          <span className="percent">%</span>
          <span className="health-caption">{t.health}</span>
        </div>
        <svg
          className="trend-chart"
          viewBox="0 0 440 156"
          role="img"
          aria-label={
            locale === "ja"
              ? "サンプル：期間内の容量の変化を示す折れ線グラフ"
              : "Sample line chart showing capacity changes over time"
          }
        >
          <defs>
            <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#43ba78" stopOpacity=".24" />
              <stop offset="1" stopColor="#43ba78" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 75, 120].map((y) => (
            <path
              key={y}
              d={`M0 ${y} H440`}
              stroke="currentColor"
              opacity=".12"
              strokeDasharray="3 5"
            />
          ))}
          <g className="period-six">
            <path
              d="M0 34 L55 40 L110 37 L165 58 L220 65 L275 62 L330 80 L385 86 L432 95 L432 155 L0 155Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0 34 L55 40 L110 37 L165 58 L220 65 L275 62 L330 80 L385 86 L432 95"
              fill="none"
              stroke="#218952"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <circle cx="432" cy="95" r="5" fill="#218952" />
          </g>
          <g className="period-year">
            <path
              d="M0 18 L55 20 L110 30 L165 34 L220 37 L275 65 L330 62 L385 86 L432 95 L432 155 L0 155Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0 18 L55 20 L110 30 L165 34 L220 37 L275 65 L330 62 L385 86 L432 95"
              fill="none"
              stroke="#218952"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <circle cx="432" cy="95" r="5" fill="#218952" />
          </g>
        </svg>
        <div className="chart-axis">
          <span className="period-six">APR</span>
          <span className="period-year">OCT ’25</span>
          <span>SEP ’26</span>
        </div>
        <div className="preview-metrics">
          <div>
            <span>{t.cycles}</span>
            <strong>
              <span className="period-six">248</span>
              <span className="period-year">248</span> <small>cycles</small>
            </strong>
          </div>
          <div>
            <span>{t.capacity}</span>
            <strong>
              <span className="period-six">3,048</span>
              <span className="period-year">3,048</span> <small>mAh</small>
            </strong>
          </div>
        </div>
      </div>
      <figcaption>
        <span className="status-dot" />
        {t.sample}
      </figcaption>
    </figure>
  );
}

export const LandingPage = () => {
  const { locale } = useLocaleContext();
  const t = copy[locale];
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            {t.eyebrow}
          </p>
          <h1>
            {t.hero[0]}
            <br />
            <span>{t.hero[1]}</span>
          </h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="actions">
            <a className="button primary" href={APP_STORE}>
              <Icon name="apple" />
              {t.download}
            </a>
            <a className="text-link" href="#how-it-works">
              {t.guideLink}
              <Icon name="arrow" />
            </a>
          </div>
          <p className="hero-meta">
            {t.free}
            <span aria-hidden="true"> · </span>
            {t.platforms}
          </p>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" aria-hidden="true" />
          <BatteryPreview />
          <div className="visual-note">
            <span aria-hidden="true">↗</span>
            {t.record}
          </div>
        </div>
      </section>
      <div className="facts wrap">
        {t.facts.map(([title, text], i) => (
          <div key={title}>
            <span className="fact-number">0{i + 1}</span>
            <div>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <section id="features" className="features-section wrap section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.featureKicker}</p>
            <h2>
              {t.featureTitle[0]}
              <br />
              {t.featureTitle[1]}
            </h2>
          </div>
          <p>{t.featureIntro}</p>
        </div>
        <div className="feature-grid">
          {t.features.map((f, i) => (
            <article key={f.icon} className={`feature feature-${i}`}>
              <div className="feature-top">
                <Icon name={f.icon} />
                <span>0{i + 1}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="privacy-band">
        <div className="wrap privacy-content">
          <div className="privacy-symbol" aria-hidden="true">
            <Icon name="shield" />
          </div>
          <div>
            <p className="eyebrow">{t.privacyKicker}</p>
            <h2>{t.privacyTitle}</h2>
            <p>{t.privacyText}</p>
            <a className="text-link" href={`/privacy?lang=${locale}`}>
              {t.privacyLink}
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </section>
      <section className="wrap section-space" id="how-it-works">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.howKicker}</p>
            <h2>{t.howTitle}</h2>
          </div>
          <p>{t.howIntro}</p>
        </div>
        <ol className="steps">
          {t.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-index">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <a className="text-link" href={`/guide?lang=${locale}`}>
          {t.guideLink}
          <Icon name="arrow" />
        </a>
      </section>
      <section className="wrap next-section">
        <div>
          <p className="eyebrow">{t.nextKicker}</p>
          <h2>{t.nextTitle}</h2>
          <p>{t.nextText}</p>
          <p className="language-list">{t.languages}</p>
        </div>
        <div className="next-action">
          <a className="button secondary" href={TESTFLIGHT}>
            {t.beta}
            <Icon name="arrow" />
          </a>
          <p>{t.betaNote}</p>
        </div>
      </section>
      <section className="wrap section-space faq-section">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="final-cta wrap">
        <img src="/app-icon.png" width="64" height="64" alt="" loading="lazy" />
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
        <a className="button primary" href={APP_STORE}>
          <Icon name="apple" />
          {t.download}
        </a>
        <p className="disclaimer">{t.disclaimer}</p>
      </section>
    </>
  );
};
