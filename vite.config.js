import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['icon'].includes(tag),
        }
      }
    }), svgLoader()],
})
