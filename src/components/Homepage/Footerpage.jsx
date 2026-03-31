export default function Footerpage() {
    return (
        <footer className="mt-24 px-[8%] py-10 border-t border-gray-200 dark:border-white/10">

            <div className="text-center mb-10">

                <a href="/">
                    <img 
                        src="/assets/logo.png" 
                        className="w-32 mx-auto mb-3 dark:hidden" 
                        alt="Logo"
                    />
                    <img 
                        src="/assets/logo_dark.png" 
                        className="w-32 mx-auto mb-3 hidden dark:block" 
                        alt="Logo"
                    />
                </a>

                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                    <img src="./assets/mail_icon.png" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" className="w-5 hidden dark:block" />

                    <a 
                        href="mailto:binamnepal173@gmail.com"
                        className="hover:text-purple-500 transition"
                    >
                        binamnepal173@gmail.com
                    </a>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-600 dark:text-gray-400">

                <p className="text-center sm:text-left">
                    © {new Date().getFullYear()} • Binam Nepal • All rights reserved.
                </p>

                
                <ul className="flex items-center gap-6">
                    <li>
                        <a 
                            href="https://github.com/binamnepal" 
                            target="_blank"
                            className="hover:text-purple-500 transition"
                        >
                            GitHub
                        </a>
                    </li>

                    <li>
                        <a 
                            href="https://www.linkedin.com/in/binam-nepal-41031b338/" 
                            target="_blank"
                            className="hover:text-purple-500 transition"
                        >
                            LinkedIn
                        </a>
                    </li>

                    <li>
                        <a 
                            href="https://www.instagram.com/binamnepal173/" 
                            target="_blank"
                            className="hover:text-purple-500 transition"
                        >
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    );
}