import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// Both documents are emitted so direct visits and refreshes work on static hosts.
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        projects: fileURLToPath(new URL('./projects/index.html', import.meta.url)),
      },
    },
  },
});
