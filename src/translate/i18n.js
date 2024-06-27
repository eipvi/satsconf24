import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { messages } from './languages'

const I18N_STORAGE_KEY = 'i18nextLng';

i18n 
    .use(LanguageDetector)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: 'pt-BR',
        ns: ['translations'],
        resources: messages,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
          },
          interpolation: {
            escapeValue: false, // React já escapa os valores por padrão
          },
        });
        
// Defina o idioma inicial a partir do localStorage, somente no cliente
if (typeof window !== 'undefined') {
    const storedLanguage = localStorage.getItem(I18N_STORAGE_KEY);
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }


export { i18n };