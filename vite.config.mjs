import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

// Mimic __dirname in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': __dirname + '/src',
    },
  },
})