// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages'
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
});