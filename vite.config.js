import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CHANGE THIS: Replace 'repo-name' with your actual repository name for GitHub Pages
  base: '/repo-name/', 
  build: {
    outDir: 'dist',
  }
})