import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "http://uvgenios.online/21780/Lab_7/"
})

resolve: {
  alias: []
}

