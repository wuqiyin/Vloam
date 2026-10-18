// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** Locale code → BCP-47 tag */
const sitemapLocales = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  pt: 'pt-PT',
  it: 'it-IT',
  nl: 'nl-NL',
  pl: 'pl-PL',
  ro: 'ro-RO',
  zh: 'zh-CN',
};

export default defineConfig({
  site: 'https://vloam.com',
  outDir: './dist',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ro', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: sitemapLocales,
      },
    }),
  ],
});
