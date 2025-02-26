import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fix for Chakra UI import issues
export default defineConfig({
  optimizeDeps: {
    include: ["@chakra-ui/react"],
  },
  plugins: [react()],
});
