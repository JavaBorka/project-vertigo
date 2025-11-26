import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Use the same port as CRA (optional)
  },
  resolve: {
    alias: {
      src: path.resolve('/src/'),
      blocks: '/src/blocks',
      components: '/src/components',
      demos: '/src/demos',
      docs: '/src/docs',
      layouts: '/src/layouts',
      svg: '/src/svg',
      theme: '/src/theme',
      views: '/src/views',
    },
  },
});
