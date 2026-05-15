import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import viteCompression from 'vite-plugin-compression' 
import path from 'path'
import { fileURLToPath } from 'url'
import { visualizer } from "rollup-plugin-visualizer";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), 
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    prerender({
      routes: [
        '/', 
        '/our-story', 
        '/menu', 
        '/franchising', 
        '/catering', 
        '/contact-us', 
        '/news'
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      staticDir: path.join(__dirname, 'dist'),
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
        maxConcurrentRoutes: 1,
        renderAfterTime: 5000,
        headless: true,
      }
    })
  ],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    assetsInlineLimit: 4096, 
    rollupOptions: {
      output: {
        // --- Added manualChunks Logic ---
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'bootstrap-vendor': ['bootstrap'],
        },
        // --------------------------------
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})