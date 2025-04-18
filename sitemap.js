
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/courses', changefreq: 'weekly', priority: 0.9 },
  { url: '/tutoring', changefreq: 'weekly', priority: 0.9 },
];

const stream = new SitemapStream({ hostname: 'https://quorvexinstitute.vercel.app' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  createWriteStream('./public/sitemap.xml').end(data)
);
