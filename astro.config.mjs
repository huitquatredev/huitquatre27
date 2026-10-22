// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://huitquatre.fr',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
});
