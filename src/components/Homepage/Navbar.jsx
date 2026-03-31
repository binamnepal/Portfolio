import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {

    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme init
    useEffect(() => {
        const savedTheme = localStorage.theme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
        localStorage.theme = newTheme;
    };

    return (
        <>
            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between
                ${isScroll ? "bg-white/60 backdrop-blur-lg shadow-sm dark:bg-darkTheme/70" : ""}
            `}>

                {/* Logo */}
                <a href="/">
                    <img src="./assets/logo.png" className="w-28 dark:hidden" />
                    <img src="./assets/logo_dark.png" className="w-28 hidden dark:block" />
                </a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-8 rounded-full px-10 py-3 font-Ovo transition-all
                    ${isScroll ? "" : "bg-white/50 shadow-sm dark:bg-transparent dark:border dark:border-white/20"}
                `}>
                    {[
                        { label: 'Home', link: '/' },
                        { label: 'About', link: '/about' },
                        { label: 'Services', link: '/services' },
                        { label: 'Work', link: '/work' },
                    ].map(item => (
                        <li key={item.label}>
                            <a href={item.link} className="hover:text-purple-500 transition">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-4">

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                        <img src="./assets/moon_icon.png" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" className="w-5 hidden dark:block" />
                    </button>

                    {/* Contact Button */}
                    <a
                        href="/contact"
                        className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                        Contact
                    </a>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
                        <img src="./assets/menu-black.png" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" className="w-6 hidden dark:block" />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU + OVERLAY */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Side Menu */}
                        <motion.ul
                            initial={{ x: 300 }}
                            animate={{ x: 0 }}
                            exit={{ x: 300 }}
                            transition={{ duration: 0.3 }}
                            className="fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-white dark:bg-darkHover shadow-2xl flex flex-col gap-6 px-8 py-20"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-5 right-5"
                            >
                                ✕
                            </button>

                            {[
                                { label: 'Home', link: '/' },
                                { label: 'About', link: '/about' },
                                { label: 'Services', link: '/services' },
                                { label: 'Work', link: '/work' },
                                { label: 'Contact', link: '/contact' },
                            ].map(item => (
                                <li key={item.label}>
                                    <a
                                        href={item.link}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg font-medium hover:text-purple-500 transition"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </motion.ul>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}