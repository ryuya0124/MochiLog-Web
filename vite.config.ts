import { defineConfig } from 'vite'
import hono from '@hono/vite-dev-server'

export default defineConfig({
  plugins: [
    hono({
      entry: 'src/index.tsx',
    }),
  ],
})
