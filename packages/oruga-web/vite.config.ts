import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/register.ts',
      formats: ['es'],
      name: 'OrugaWeb',
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
})

