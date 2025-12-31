import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traducciones
import en from '../locales/en/translation.json';
import es from '../locales/es/translation.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

const i18n = createInstance();

i18n.use(initReactI18next).init({
  resources,

  lng: 'es',
  fallbackLng: 'es',

  supportedLngs: ['es', 'en'],

  ns: ['translation'],
  defaultNS: 'translation',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
