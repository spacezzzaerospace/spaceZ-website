import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Each page document is emitted for direct visits and refreshes on static hosts.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects/index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about/index.html', import.meta.url)),
      },
    },
  },
});
