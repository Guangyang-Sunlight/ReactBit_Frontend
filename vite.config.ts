import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ relative base path for Vercel
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src' // ✅ optional but recommended
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
