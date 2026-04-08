import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Modern browser targets for smaller output
    target: 'es2020',
    // Raise chunk size warning threshold to 1MB
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching and parallel loading
        manualChunks(id) {
          // Vendor libraries (rarely change → long-term browser cache)
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/react-router-dom/') || id.includes('node_modules/react-router/')) {
            return 'router';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'lucide';
          }
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        },
      },
    },
    // Enable esbuild minification (fastest)
    minify: 'esbuild',
    // CSS code splitting per chunk
    cssCodeSplit: true,
    // No source maps in production
    sourcemap: false,
  },
  // Speed up dev server pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
})
