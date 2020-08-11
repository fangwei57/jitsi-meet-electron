import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';

const languages = {
    de: { translation: require('./lang/de.json') },
    en: { translation: require('./lang/en.json') },
    es: { translation: require('./lang/es.json') },
    fr: { translation: require('./lang/fr.json') },
    hu: { translation: require('./lang/hu.json') },
    it: { translation: require('./lang/it.json') },
    zh_cn: { translation: require('./lang/zh_cn.json') },
    ru: { translation: require('./lang/ru.json') }
};

const detectedLocale = window.jitsiNodeAPI.getLocale();

i18n
    .use(initReactI18next)
    .init({
        resources: languages,
        lng: detectedLocale,
        fallbackLng: 'zh_cn',
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

moment.locale(detectedLocale);

export default i18n;
