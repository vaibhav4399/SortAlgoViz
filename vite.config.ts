import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite';
import tailwindcss from 'tailwindcss'; 
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// https://vitejs.dev/config/

const config: UserConfig = {
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        ...(process.env.NODE_ENV === 'production'
          ? [cssnano({ preset: 'default' })] // Minify CSS in production
          : []),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor files for better caching
          }
        },
      },
    },
    minify: 'terser', // Terser for better JS minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      },
    },
  },
};

export default defineConfig(config);
