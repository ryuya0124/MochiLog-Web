import React from 'react'

export const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <style>{`
          :root {
            --bg: #f9f9f9;
            --text: #333333;
            --container-bg: #ffffff;
            --muted: #666666;
            --accent: #007aff;
            --shadow: rgba(0,0,0,0.08);
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --bg: #0b0b0d;
              --text: #e6e6e6;
              --container-bg: #0f1113;
              --muted: #9aa0a6;
              --accent: #0a84ff;
              --shadow: rgba(0,0,0,0.6);
            }
          }

          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--text);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
          }

          .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
          }

          .card {
            background: var(--container-bg);
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 4px 12px var(--shadow);
          }

          h1 { color: var(--accent); }
          h2 { border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem; margin-top: 2rem; }
          a { color: var(--accent); text-decoration: none; }
          a:hover { text-decoration: underline; }
          footer { margin-top: 3rem; text-align: center; font-size: 0.9rem; color: var(--muted); }
        `}</style>
      </head>
      <body>
        <div className="container">
          {children}
          <footer>
            <p>&copy; {new Date().getFullYear()} MochiLog</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
