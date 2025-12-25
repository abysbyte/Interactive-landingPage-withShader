import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: false,
  },
  publicDir: 'public',
});
