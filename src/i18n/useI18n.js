import { useContext } from 'react';
import { I18nContext } from './i18n-context';

/**
 * Returns { lang, setLang, t, localize, locale }.
 *
 *   t('nav.about')                         -> translated string
 *   t('work.screenshotAlt', { name: 'X' }) -> "Screenshot of X"
 *   localize('projects', project)          -> project with translated text fields
 *   locale                                 -> 'en-US' | 'de-DE' for Intl / toLocaleDateString
 */
export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
    return ctx;
}
