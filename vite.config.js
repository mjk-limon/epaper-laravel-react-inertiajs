import { defineConfig, transformWithEsbuild } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    laravel({
      input: 'resources/js/index.jsx',
      refresh: [
        'resources/routes/**',
        'routes/**',
        'resources/views/**',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    },
  },
});