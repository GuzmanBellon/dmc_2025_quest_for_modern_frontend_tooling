import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

const port = 5173
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: [
        resolve(__dirname, './src/main.js'),
        resolve(__dirname, './src/main.css'),
      ],
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port, // pin the port to 5173 for ddev
    strictPort: true,
    origin, // match origin with generated ddev url
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
    },
  },
})
