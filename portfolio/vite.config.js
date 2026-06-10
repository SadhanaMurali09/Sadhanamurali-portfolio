import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NETLIFY
  ? '/'
  : process.env.GITHUB_ACTIONS
    ? '/Sadhanamurali-portfolio/'
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
