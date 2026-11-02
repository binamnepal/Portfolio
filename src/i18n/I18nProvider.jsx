import { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext } from './i18n-context';
import { DICTIONARIES, FALLBACK_LANG, STORAGE_KEY, detectInitialLanguage } from './config';

function lookup(dictionary, key) {
    return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dictionary);
}

function interpolate(text, vars) {
    if (typeof text !== 'string' || !vars) return text;
    return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

export default function I18nProvider({ children }) {
    const [lang, setLangState] = useState(detectInitialLanguage);

    const setLang = useCallback((next) => {
        if (!DICTIONARIES[next]) return;
        setLangState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* ignore private-mode failures */
        }
    }, []);

    const value = useMemo(() => {
        const dictionary = DICTIONARIES[lang];

        // Missing keys fall back to English, then to the key itself so a typo
        // is visible on screen instead of rendering nothing.
        const t = (key, vars) => {
            const found = lookup(dictionary, key) ?? lookup(DICTIONARIES[FALLBACK_LANG], key);
            return interpolate(found ?? key, vars);
        };

        // Merge per-language overrides (dictionary.projects[slug], dictionary.posts[slug])
        // over the English source object from src/data.
        const localize = (collection, item) => {
            if (!item) return item;
            const override = dictionary[collection]?.[item.slug];
            return override ? { ...item, ...override } : item;
        };

        return { lang, setLang, t, localize, locale: dictionary.locale };
    }, [lang, setLang]);

    // Keep <html lang>, the tab title and the meta description in sync.
    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = value.t('meta.title');
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', value.t('meta.description'));
    }, [lang, value]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
