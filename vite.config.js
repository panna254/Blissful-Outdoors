// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: ['34cd89cdaa02.ngrok-free.app']  // ✅ Add your ngrok subdomain here
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for large dependencies
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // UI and animation libraries
            if (id.includes('framer-motion') || id.includes('swiper')) {
              return 'ui-vendor';
            }
            // Icons
            if (id.includes('react-icons') || id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            // Email and utilities
            if (id.includes('@emailjs') || id.includes('emailjs')) {
              return 'email-vendor';
            }
            // Tailwind and CSS
            if (id.includes('tailwind') || id.includes('@tailwindcss')) {
              return 'css-vendor';
            }
            // Other node_modules
            return 'vendor';
          }
        },
        // Increase chunk size limits significantly
        chunkSizeWarningLimit: 2000,
        maxParallelFileOps: 5
      }
    },
    // Optimize assets and build performance
    assetsInlineLimit: 4096,
    sourcemap: false,
    // Increase memory limits
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
