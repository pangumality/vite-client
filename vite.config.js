import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    },
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});