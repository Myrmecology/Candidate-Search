import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envDir: './src/pages/environment',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: 3000,
    host: '0.0.0.0'
  },
  base: "/",
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ['candidate-search-des8.onrender.com']
  }
});