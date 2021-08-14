import I18n from 'i18n-js';
import enLocales from '../locales/en.json';
import defEn from '../common/defaults/en.json';
import {I18nManager} from 'react-native';
import configRestApi from '../api/config';

export const configApp = () => {
  configLang();

  configRestApi();
};

const configLang = () => {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);

  I18n.fallbacks = true;
  I18n.translations = {
    en: {...enLocales, ...defEn},
  };

  I18n.locale = 'en';
};
