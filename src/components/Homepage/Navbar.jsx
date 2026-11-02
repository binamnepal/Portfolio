import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n/useI18n';
import LanguageToggle from './LanguageToggle';

// `key` maps to nav.<key> in the locale files; labels are translated at render time.
const NAV_LINKS = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'work', href: '#work' },
    { key: 'services', href: '#services' },
    { key: 'notes', href: '#notes' },
    { key: 'contact', href: '#contact' },
];

export default function Navbar() {
    const { t } = useI18n();
    const location = useLocation();
    const onHomePage = location.pathname === '/';
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() =>
        typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
            ? 'dark'
            : 'light'
    );

    useEffect(() => {
        const handleScroll = () => setIsScroll(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll while the mobile menu is open, and close it on Escape.
    useEffect(() => {
        if (!isMenuOpen) return;

        const onKeyDown = (e) => e.key === 'Escape' && setIsMenuOpen(false);
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isMenuOpen]);

    /*
     * Single source of truth: React state drives the class, so the two can
     * never disagree. The initial class is set by the inline script in
     * index.html, before first paint.
     */
    const toggleTheme = useCallback(() => {
        setTheme((current) => {
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.classList.toggle('dark', next === 'dark');
            try {
                localStorage.setItem('theme', next);
            } catch {
                /* ignore private-mode failures */
            }
            return next;
        });
    }, []);

    return (
        <>
            <a
                href="#about"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-black focus:px-5 focus:py-2 focus:text-white dark:focus:bg-white dark:focus:text-black"
            >
                {t('nav.skipToContent')}
            </a>

            <nav
                aria-label={t('nav.mainLabel')}
                className={`theme-transition fixed top-0 w-full z-50 transition-all duration-300 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between
                    ${isScroll ? 'bg-white/70 backdrop-blur-lg shadow-sm dark:bg-darkTheme/70' : ''}`}
            >
                <Link to="/#top" aria-label={t('nav.backToTop')}>
                    <img src="/assets/logo.png" alt="Binam Nepal" className="w-28 dark:hidden" />
                    <img src="/assets/logo_dark.png" alt="Binam Nepal" className="w-28 hidden dark:block" />
                </Link>

                {/* Desktop menu */}
                <ul
                    className={`hidden md:flex items-center gap-5 lg:gap-8 rounded-full px-6 lg:px-10 py-3 text-sm lg:text-base font-Ovo transition-all
                        ${isScroll ? '' : 'bg-white/50 shadow-sm dark:bg-transparent dark:border dark:border-white/20'}`}
                >
                    {NAV_LINKS.map((item) => (
                        <li key={item.key}>
                            {onHomePage ? (
                                <a href={item.href} className="hover:text-purple-500 transition">
                                    {t(`nav.${item.key}`)}
                                </a>
                            ) : (
                                <Link to={`/${item.href}`} className="hover:text-purple-500 transition">
                                    {t(`nav.${item.key}`)}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3 sm:gap-4">
                    <LanguageToggle />

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? t('nav.switchToLight') : t('nav.switchToDark')}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                        <img src="/assets/moon_icon.png" alt="" aria-hidden="true" className="w-5 dark:hidden" />
                        <img src="/assets/sun_icon.png" alt="" aria-hidden="true" className="w-5 hidden dark:block" />
                    </button>

                    <Link
                        to="/#contact"
                        className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                        {t('nav.contact')}
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label={t('nav.openMenu')}
                        aria-expanded={isMenuOpen}
                        className="md:hidden p-1"
                    >
                        <img src="/assets/menu-black.png" alt="" aria-hidden="true" className="w-6 dark:hidden" />
                        <img src="/assets/menu-white.png" alt="" aria-hidden="true" className="w-6 hidden dark:block" />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            transition={{ duration: 0.3 }}
                            className="fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-darkHover shadow-2xl px-8 py-20"
                        >
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label={t('nav.closeMenu')}
                                className="absolute top-5 right-5 text-xl leading-none"
                            >
                                &#10005;
                            </button>

                            <ul className="flex flex-col gap-6">
                                {NAV_LINKS.map((item) => (
                                    <li key={item.key}>
                                        {onHomePage ? (
                                            <a
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-lg font-medium hover:text-purple-500 transition"
                                            >
                                                {t(`nav.${item.key}`)}
                                            </a>
                                        ) : (
                                            <Link
                                                to={`/${item.href}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-lg font-medium hover:text-purple-500 transition"
                                            >
                                                {t(`nav.${item.key}`)}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
