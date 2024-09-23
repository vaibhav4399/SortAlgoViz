import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import compression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';
import type { UserConfig } from 'vite';
import tailwindcss from 'tailwindcss'; 
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// https://vitejs.dev/config/

const config: UserConfig = {
  plugins: [
    react(),
    svgr(), 
    compression({ algorithm: 'gzip' }), 
    imagetools()
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
        drop_console: true, // Remove console.logs
        drop_debugger: true, // Remove debugger statements
        ecma: 2020, // Modern JS features for minification
        passes: 3, // Additional optimization passes
        pure_funcs: ['console.info', 'console.debug'],
      },
      output: {
        comments: false, // Remove comments for a cleaner bundle
      },
    },
  },
};

export default defineConfig(config);

