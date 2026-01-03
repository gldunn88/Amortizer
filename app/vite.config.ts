import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for static hosting
  build: {
    outDir: 'dist', // Default output directory for static files
    emptyOutDir: true, // Clean output directory before build
  },
})
