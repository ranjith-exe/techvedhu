import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-react-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pages()],
  base: '/techvedhu/',  // This is the base path for GitHub Pages
});
