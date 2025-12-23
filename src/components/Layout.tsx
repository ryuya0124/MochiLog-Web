import React from 'react'

export const Layout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background-color: #f9f9f9;
          }
          .container {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 { color: #007aff; }
          h2 { border-bottom: 2px solid #007aff; padding-bottom: 0.5rem; margin-top: 2rem; }
          a { color: #007aff; text-decoration: none; }
          a:hover { text-decoration: underline; }
          footer { margin-top: 3rem; text-align: center; font-size: 0.9rem; color: #666; }
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
