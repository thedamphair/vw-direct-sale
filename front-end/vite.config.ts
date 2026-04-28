import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxies /api/chat → your API Gateway, bypassing CORS in local dev
      '/api/chat': {
        target: 'https://pvc891c2aj.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/chat/, '/chat'),
      },
    },
  },
})
