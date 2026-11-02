import { useEffect, useId, useRef, useState } from 'react';
import { LANGUAGES } from '../../i18n/config';
import { useI18n } from '../../i18n/useI18n';

/*
 * Compact language menu: the button shows the current code (e.g. "FR") and
 * opens a list of full language names. It is a plain disclosure pattern —
 * real <button>s, aria-expanded on the trigger, closes on outside click or
 * Escape. Each option carries its own `lang` attribute so screen readers
 * pronounce "Français" / "Deutsch" correctly whatever the page language is.
 */
export default function LanguageToggle() {
    const { lang, setLang, t } = useI18n();
    const [open, setOpen] = useState(false);
    const rootRef = useRef(null);
    const menuId = useId();
    const current = LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0];

    useEffect(() => {
        if (!open) return;

        const onPointerDown = (e) => {
            if (!rootRef.current?.contains(e.target)) setOpen(false);
        };
        const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);

        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const choose = (code) => {
        setLang(code);
        setOpen(false);
    };

    return (
        <div ref={rootRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={`${t('nav.language')}: ${current.name}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 dark:border-white/20 px-3 py-1.5 text-xs font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
                {current.label}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M2.5 4.5 6 8l3.5-3.5" />
                </svg>
            </button>

            {open && (
                <ul
                    id={menuId}
                    className="absolute right-0 top-full mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-darkTheme shadow-lg z-50"
                >
                    {LANGUAGES.map((item) => {
                        const active = item.code === lang;
                        return (
                            <li key={item.code}>
                                <button
                                    type="button"
                                    lang={item.code}
                                    aria-current={active ? 'true' : undefined}
                                    onClick={() => choose(item.code)}
                                    className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition hover:bg-gray-100 dark:hover:bg-white/10 ${
                                        active ? 'font-semibold text-purple-500' : ''
                                    }`}
                                >
                                    {item.name}
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
