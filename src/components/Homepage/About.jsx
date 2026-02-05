import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footerpage';

export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png' },
        { name: 'git', icon: './assets/git.png' },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript, React Js, Next Js',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'Bachelor in Information Technology',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built 10+ professional web applications',
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-20 scroll-mt-20 overflow-hidden">
            {/* Heading Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h4 className="mb-2 text-lg font-Ovo text-blue-500">Introduction</h4>
                <h2 className="text-5xl font-Ovo font-bold bg-gradient-to-r from-gray-800 to-gray-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                    About me
                </h2>
            </motion.div>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-max mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img src='./assets/user-image.png' alt="User" className="w-64 sm:w-80 rounded-3xl relative" />

                    <div className="bg-white dark:bg-slate-900 w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-xl flex items-center justify-center border-4 border-white dark:border-slate-800">
                        <img src="./assets/circular-text.png" alt="" className="w-full animate-spin_slow p-2 opacity-80" />
                        <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </motion.div>

                {/* Text & Cards Section */}
                <div className="flex-1">
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-10 max-w-2xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                        Dedicated Frontend Developer from Kathmandu, focused on mastering React and modern web architecture. 
                        I bridge the gap between early-career passion and professional-grade execution, 
                        building scalable, high-quality interfaces with a deep commitment to clean code.
                    </motion.p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item, index) => (
                            <motion.li 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={item.name} 
                                className="border border-gray-300 dark:border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)] dark:hover:bg-darkHover/50 group"
                            >
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">{item.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/70">{item.description}</p>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Tools Section */}
                    <div className="mt-12">
                        <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80 font-semibold tracking-wide uppercase text-xs">Tools I use</h4>
                        <ul className="flex items-center gap-3 sm:gap-5">
                            {tools.map((tool, index) => (
                                <motion.li 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={tool.name} 
                                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/20 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                                >
                                    <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7 grayscale group-hover:grayscale-0 transition-all" />
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}