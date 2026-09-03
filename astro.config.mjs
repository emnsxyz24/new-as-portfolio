// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikaeru.my.id',
  image: {
    domains: [
      'lh3.googleusercontent.com',
      'drive.usercontent.google.com',
      'opengraph.githubassets.com',
      'raw.githubusercontent.com',
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: true
    }
  }
});