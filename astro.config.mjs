import { defineConfig } from 'astro/config';
// import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  redirects: {
    '/about': {
          status: 301,
          destination: '/about-us'
        }  },
  output: "server",
  adapter: netlify(),
  site: 'https://careandrelief.uk'
});