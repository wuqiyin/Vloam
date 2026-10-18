export const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ro', 'zh'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Locales that use a URL prefix (`/es/...`). English has no prefix. */
export const prefixedLocales = locales.filter(
  (locale): locale is Exclude<Locale, 'en'> => locale !== defaultLocale,
);

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  ro: 'Română',
  zh: '简体中文',
};

/** Open Graph / HTML locale tags (BCP-47). */
export const localeTags: Record<Locale, string> = {
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

/** Open Graph `og:locale` underscore form. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_PT',
  it: 'it_IT',
  nl: 'nl_NL',
  pl: 'pl_PL',
  ro: 'ro_RO',
  zh: 'zh_CN',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLang(currentLocale?: string): Locale {
  if (currentLocale && isLocale(currentLocale)) {
    return currentLocale;
  }
  return defaultLocale;
}
