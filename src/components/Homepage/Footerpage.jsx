import { Link } from 'react-router-dom';

const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/binamnepal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/binam-nepal-41031b338/' },
    { label: 'Instagram', href: 'https://www.instagram.com/binamnepal173/' },
];

export default function Footerpage() {
    return (
        <footer className="mt-12 px-[8%] py-10 border-t border-gray-200 dark:border-white/10">
            <div className="text-center mb-10">
                <Link to="/#top" aria-label="Back to top">
                    <img src="/assets/logo.png" alt="Binam Nepal" className="w-32 mx-auto mb-3 dark:hidden" />
                    <img
                        src="/assets/logo_dark.png"
                        alt="Binam Nepal"
                        className="w-32 mx-auto mb-3 hidden dark:block"
                    />
                </Link>

                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                    <img src="/assets/mail_icon.png" alt="" aria-hidden="true" className="w-5 dark:hidden" />
                    <img
                        src="/assets/mail_icon_dark.png"
                        alt=""
                        aria-hidden="true"
                        className="w-5 hidden dark:block"
                    />
                    <a href="mailto:binamnepal173@gmail.com" className="hover:text-purple-500 transition">
                        binamnepal173@gmail.com
                    </a>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-600 dark:text-gray-400">
                <p className="text-center sm:text-left">
                    &copy; {new Date().getFullYear()} &bull; Binam Nepal &bull; All rights reserved.
                </p>

                <ul className="flex items-center gap-6">
                    {SOCIALS.map((social) => (
                        <li key={social.label}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition"
                            >
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
