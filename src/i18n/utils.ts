import { routes } from "./routes";
import { ui, defaultLang, type Language } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      routes[l] !== undefined &&
      routes[l][pathName] !== undefined;
    const translatedPath = hasTranslation ? "/" + routes[l]![pathName] : path;

    return l === defaultLang ? translatedPath : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const currentLang = getLangFromUrl(url);

  const path = pathname.replace(/^\/+/, "").replace(`${currentLang}/`, "");

  if (path === undefined) {
    return undefined;
  }

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path] !== undefined ? route[path] : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
