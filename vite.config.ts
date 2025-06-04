const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
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