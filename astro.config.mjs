import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://firesafetysupplyhouse.com',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
