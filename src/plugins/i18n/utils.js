import { SupportedLocales, } from "@/plugins/i18n/supported-locales";
export const getSupportedLocales = () => {
    const annotatedLocales = [];
    for (const code of Object.keys(SupportedLocales)) {
        annotatedLocales.push({
            code,
            name: SupportedLocales[code],
        });
    }
    return annotatedLocales;
};
export const supportedLocalesInclude = (locale) => {
    return locale !== undefined
        ? Object.keys(SupportedLocales).includes(locale)
        : undefined;
};
export const getBrowserLocale = (options = {}) => {
    const defaultOptions = { countryCodeOnly: false };
    const opt = { ...defaultOptions, ...options };
    const navigatorLocale = navigator.languages !== undefined
        ? navigator.languages[0]
        : navigator.language;
    if (!navigatorLocale) {
        return undefined;
    }
    const trimmedLocale = opt.countryCodeOnly
        ? navigatorLocale.trim().split(/-|_/)[0]
        : navigatorLocale.trim();
    return trimmedLocale;
};
//# sourceMappingURL=utils.js.map