import en from './locales/en';
import de from './locales/de';
import fr from './locales/fr';

/*
 * To add another language: create locales/<code>.js, import it here, and add
 * it to DICTIONARIES and LANGUAGES. The navbar toggle picks it up automatically.
 */
export const DICTIONARIES = { en, de, fr };

export const LANGUAGES = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'fr', label: 'FR', name: 'Français' },
];

export const FALLBACK_LANG = 'en';
export const STORAGE_KEY = 'lang';

/*
 * Saved choice wins; otherwise follow the browser language on the first
 * visit. The same logic runs in the inline script in index.html so the
 * <html lang> attribute is right before React loads.
 */
export function detectInitialLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && DICTIONARIES[saved]) return saved;
    } catch {
        /* localStorage unavailable (private mode) — fall through */
    }

    const browserLang = (typeof navigator !== 'undefined' && navigator.language) || '';
    const short = browserLang.toLowerCase().slice(0, 2);
    return DICTIONARIES[short] ? short : FALLBACK_LANG;
}
