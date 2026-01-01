import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Use the same port as CRA (optional)
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      blocks: path.resolve(__dirname, 'src/blocks'),
      constants: path.resolve(__dirname, 'src/constants'),
      components: path.resolve(__dirname, 'src/components'),
      demos: path.resolve(__dirname, 'src/demos'),
      docs: path.resolve(__dirname, 'src/docs'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      svg: path.resolve(__dirname, 'src/svg'),
      theme: path.resolve(__dirname, 'src/theme'),
      views: path.resolve(__dirname, 'src/views'),
      hooks: path.resolve(__dirname, 'src/hooks'),
    },
  },
});
