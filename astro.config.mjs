import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  redirects: {
    '/about': {
          status: 301,
          destination: '/about-us'
        }  },
  output: "server",
  adapter: cloudflare(),
  site: 'https://careandrelief.uk'
});