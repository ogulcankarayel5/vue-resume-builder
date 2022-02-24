import { createI18n } from "vue-i18n";
import {
  getBrowserLocale,
  supportedLocalesInclude,
} from "@/plugins/i18n/utils";

const loadLocaleMessages = () => {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: any = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
};

const getStartingLocale = () => {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });
  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else {
    return "en";
  }
};

export default createI18n({
  locale: getStartingLocale(),
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});
