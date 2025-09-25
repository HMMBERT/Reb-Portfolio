// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap' // <--- import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: 'https://reb-portfolio.vercel.app/' }) // <--- add the plugin and your website URL
  ],
})