import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

export enum ELaguageType {
  English = 'en',
}

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: true,
  },
  lng: ELaguageType.English,
  fallbackLng: ELaguageType.English,
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18next;
