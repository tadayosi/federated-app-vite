import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
    strictPort: true,
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: 'plugin1',
      filename: 'remoteEntry.js',
      exposes: {
        './plugin': './src/plugin',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
