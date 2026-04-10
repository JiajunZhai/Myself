import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const defaultHasNoPrefix = !showDefaultLang;
    const strippedPath = path.replace(/^\/(zh|en)/, '');
    
    // Clean trailing/leading slashes for consistency
    const cleanPath = strippedPath.startsWith('/') ? strippedPath : `/${strippedPath}`;
    
    if (defaultHasNoPrefix && l === defaultLang) {
      return cleanPath === '' ? '/' : cleanPath;
    }
    return `/${l}${cleanPath}`;
  }
}
