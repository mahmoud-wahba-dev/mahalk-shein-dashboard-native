import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        addSheinProduct: resolve(__dirname, 'add-shein-product.html'),
        digitalProducts: resolve(__dirname, 'digital-products.html'),
        integrations: resolve(__dirname, 'integrations.html'),
        microService: resolve(__dirname, 'micro-service.html'),
        myProducts: resolve(__dirname, 'my-products.html'),
        orders: resolve(__dirname, 'orders.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        support: resolve(__dirname, 'support.html'),
        tutorials: resolve(__dirname, 'tutorials.html'),
        test: resolve(__dirname, 'test.html'),
      },
    },
  },
})