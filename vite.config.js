import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    allowedHosts: ["smart-task-manager-zn9d.onrender.com"], // Add your Render domain here
  },
  plugins: [react(), tailwindcss()],
});

