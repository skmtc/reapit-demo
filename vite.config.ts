import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.generated.ts', '.generated.tsx', '.example.ts', '.example.tsx'],
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    port: 8080,
  },
})
