import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const base = import.meta.env.BASE_URL;
  let pathname = url.pathname;
  
  if (base && base !== '/' && pathname.startsWith(base)) {
    pathname = pathname.substring(base.length);
  }
  if (!pathname.startsWith('/')) {
    pathname = '/' + pathname;
  }

  const [, lang] = pathname.split('/');
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
    const cleanPath = strippedPath.startsWith('/') ? strippedPath : `/${strippedPath}`;
    
    // Grab the dynamic base prefix and safely remove trailing slash
    const base = import.meta.env.BASE_URL;
    const safeBase = base === '/' ? '' : (base.endsWith('/') ? base.slice(0, -1) : base);
    
    if (defaultHasNoPrefix && l === defaultLang) {
      return `${safeBase}${cleanPath === '' ? '/' : cleanPath}`;
    }
    return `${safeBase}/${l}${cleanPath}`;
  }
}
