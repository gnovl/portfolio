import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DateTime, DateTimeFormatOptions } from 'luxon';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (value instanceof Date) {
          // Handle the case where lng might be undefined
          const locale = lng || 'en';

          // Provide a default format if not specified
          const validFormat = format || 'medium';

          // Explicitly provide DateTimeFormatOptions
          const options: DateTimeFormatOptions = { [validFormat]: true };

          return DateTime.fromJSDate(value).setLocale(locale).toLocaleString(options);
        }
        return value;
      },
    },
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;