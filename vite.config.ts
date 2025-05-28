import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import readableClassnames from 'vite-plugin-readable-classnames';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), readableClassnames()],
  base: './',
});
