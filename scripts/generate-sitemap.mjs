import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://it-solutions.pmi-me.net';
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.9 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/countries', changefreq: 'monthly', priority: 0.7 },
  { url: '/teams', changefreq: 'monthly', priority: 0.7 }
];

const sm = new SitemapStream({ hostname: baseUrl });
const out = createWriteStream(join(__dirname, '../public/sitemap.xml'));

(async () => {
  for (const route of routes) {
    sm.write(route);
  }
  sm.end();
  const xml = await streamToPromise(sm);
  out.write(xml.toString());
  out.end();
  console.log('sitemap.xml generated successfully');
})();
