import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@react-three/fiber'], 
    },
  },
});