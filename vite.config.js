import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
  },
  server: {
    port: 5173,
    open: true,
  },
  publicDir: 'public',
});
