import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      entities: '/src/entities',
    }
  },
  build: {
    outDir: 'build',
  },
})
