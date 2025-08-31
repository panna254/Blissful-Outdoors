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
        manualChunks: {
          // Vendor chunk for large dependencies
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI libraries chunk
          ui: ['framer-motion', '@emailjs/browser'],
          // Icons chunk
          icons: ['react-icons']
        },
        // Increase chunk size limit to 1000kb
        chunkSizeWarningLimit: 1000
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable source maps for debugging (optional)
    sourcemap: false
  }
})
