import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig-drupal'
import { resolve, join } from 'node:path'

const port = 5173
const origin = `${process.env.DDEV_PRIMARY_URL}:${port}`

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        dmc_2025_quest_for_modern_frontend_tooling: join(__dirname, '/components')
      },
      globalContext: {
        // Global variables that should be present in all templates.
        active_theme: 'dmc_2025_quest_for_modern_frontend_tooling',
        is_front_page: false,
      },
    }),
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
