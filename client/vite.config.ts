import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000, // in kB, e.g., 1 MB

    rollupOptions: {
      output: {
        // Manual chunks to split vendor libraries from app code
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor' // all dependencies in node_modules go to vendor.js
          }
        },
      },
    },
  },
})
