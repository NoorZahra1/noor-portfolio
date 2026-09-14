import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the built site works whether it's served at
  // https://<user>.github.io/  or  https://<user>.github.io/<repo>/
  base: './',
})
