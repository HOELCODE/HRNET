import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/HRNET/', // ← Mets ici le nom EXACT de ton repo GitHub
  plugins: [react()],
})