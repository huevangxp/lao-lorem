import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { generate } from './src/core/generator.js'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'lao-lorem-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const urlObj = new URL(req.url, 'http://localhost')
          const pathname = urlObj.pathname

          if (pathname === '/api/lorem' || pathname === '/lao-lorem/api/lorem') {
            const type = urlObj.searchParams.get('type') || 'paragraphs'
            const count = parseInt(urlObj.searchParams.get('count') || '3', 10)
            const sentencesPerParagraph = parseInt(urlObj.searchParams.get('sentencesPerParagraph') || '4', 10)

            const result = generate({ type, count, sentencesPerParagraph })

            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.end(JSON.stringify({
              type,
              count,
              result: Array.isArray(result) ? result : [result]
            }))
            return
          }
          next()
        })
      }
    }
  ],
  base: '/lao-lorem/', // ສຳລັບ GitHub Pages
})
