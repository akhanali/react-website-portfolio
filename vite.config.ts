import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: "/react-website-portfolio", #needed for gh pages
  plugins: [react()],
})
