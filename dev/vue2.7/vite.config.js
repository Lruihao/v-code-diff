import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'vue': 'vue2',
      'v-code-diff': resolve(__dirname, '../../src/lib/v-code-diff/v-code-diff.ts')
    }
  }
})
