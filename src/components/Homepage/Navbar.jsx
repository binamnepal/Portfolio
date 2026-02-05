import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial theme check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Background blur/color effect */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 my-20 translate-y-[-80%] dark:hidden">
                <img src="./assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>

                <a href="/">
                    <img src="./assets/logo.png" alt="Logo" className="w-28 cursor-pointer mr-14 dark:hidden" />
                    <img src="./assets/logo_dark.png" alt="Logo" className="w-28 cursor-pointer mr-14 hidden dark:block" />
                </a>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo transition-all duration-300 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/30 dark:bg-transparent"}`}>
                    <li><a className='hover:text-[#b820e6] dark:hover:text-gray-300 transition' href="/">Home</a></li>
                    <li><a className='hover:text-[#b820e6] dark:hover:text-gray-300 transition' href="/about">About</a></li>
                    <li><a className='hover:text-[#b820e6] dark:hover:text-gray-300 transition' href="/services">Services</a></li>
                    <li><a className='hover:text-[#b820e6] dark:hover:text-gray-300 transition' href="/work">My Work</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition">
                        <img src="./assets/moon_icon.png" alt="" className="w-5 dark:hidden" />
                        <img src="./assets/sun_icon.png" alt="" className="w-5 hidden dark:block" />
                    </button>

                    {/* Login Link (Desktop) */}
                    <a href="/login" className="hidden md:block font-Ovo text-gray-700 dark:text-white hover:text-[#b820e6] transition duration-300 px-4">
                        Login
                    </a>

                    {/* Contact Button */}
                    <a href="/contact" className="hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-2 font-Ovo dark:border-white/30 transition">
                        Contact
                        <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                        <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>
                    
                    {/* Mobile Menu Toggle */}
                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <img src="./assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="./assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 font-Ovo dark:bg-darkHover dark:text-white shadow-2xl">
                    
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <img src="./assets/close-black.png" alt="" className="w-5 cursor-pointer dark:hidden" />
                        <img src="./assets/close-white.png" alt="" className="w-5 cursor-pointer hidden dark:block" />
                    </div>

                    {[
                        { label: 'Home', link: '/' },
                        { label: 'About me', link: '/about' },
                        { label: 'Services', link: '/services' },
                        { label: 'My Work', link: '/work' },
                        { label: 'Contact me', link: '/contact' },
                        { label: 'Login', link: '/login' }
                    ].map((item, idx) => (
                        <li key={idx}>
                            <a 
                                href={item.link} 
                                onClick={closeMenu} 
                                className={`text-lg hover:text-[#b820e6] transition-all ${item.label === 'Login' ? 'font-bold text-[#b820e6] mt-4 block border-t border-gray-200 dark:border-white/10 pt-4' : ''}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}